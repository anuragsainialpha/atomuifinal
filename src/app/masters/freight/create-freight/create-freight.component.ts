import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { FileUploadErrorsDialogComponent } from '../../../public/file-upload-errors-dialog/file-upload-errors-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-create-freight',
  templateUrl: './create-freight.component.html',
  styleUrls: ['./create-freight.component.scss']
})
export class CreateFreightComponent implements OnInit {

  ErrorData: any;
  // errorData: any;
  file: File;
  arrayBuffer: any;
  isLoading: boolean = false;
  responseData = '';
  planData = '';
  data = [];
  IsErrorLog:boolean=false;
  planId: number;
  totalRecords: number;
  totalErrorRecords: number;
  gotResponse:boolean=false;
  constructor(
    private router: Router,
    private acitvatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private service: ApiserviceService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    localStorage.setItem("userMenu","freight-master");
  }

  onFileChange(event) {
   // this.ErrorData="";
   this.gotResponse=false;
    this.IsErrorLog=false;
    this.isLoading = true;
    this.file = event.target.files[0];
    let importedItemFileList = [];
    if (this.file['type'] == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, { type: 'binary', cellDates: true, cellNF: false, cellText: false });
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
       // console.log(XLSX.utils.sheet_to_json(worksheet,{raw:false}));
       // importedItemFileList = XLSX.utils.sheet_to_json(worksheet, { dateNF: "YYYY-MM-DD" });
        importedItemFileList = XLSX.utils.sheet_to_json(worksheet, { dateNF: "YYYY-MM-DD", raw: false });
        

        if(importedItemFileList.length>0){
          for(var i=0 ; i < importedItemFileList.length; i++) {
            delete importedItemFileList[i].id;
          }
        }
      //  delete myObject.regex;
        let freightData = {
          freights: importedItemFileList
        }
        console.log("importedItemFileList", importedItemFileList);
        console.log("POSTING DATA ", JSON.stringify(freightData));
        this.service.post_service(ApiserviceService.apisList.uploadFreight, freightData).subscribe(response => {

          // this.planData = JSON.stringify(this.responseData);
          console.log("resposne", response['statusCode']);
          if (response['statusCode'] == 200) {
         //   errorsRecords
            this.responseData = response['data'];
            console.log("resposne", this.responseData);
            this.planId = this.responseData['planId'];
            this.toastr.success(response['message']);
            this.ErrorData = this.responseData['errorsRecords'];
            this.totalRecords = this.responseData['totalRecords'];
            console.log("totalRecords " +this.totalRecords );
            this.gotResponse=true;
            if(this.ErrorData != undefined && this.ErrorData.length>0){
              this.totalErrorRecords = this.ErrorData.length;
              console.log("ErrorData " +this.ErrorData.length );
              this.IsErrorLog=true
            }
            this.isLoading = false;
          } else {
            this.isLoading = false;
            //this.openDialog(response['data'])
            this.ErrorData = response['data'];
            this.IsErrorLog=true
          }

        },
          (err) => {
            console.log("Error", err);
            this.toastr.error("Something went wrong..", "Error!");
            this.isLoading = false;
          })
       // console.log("freightData", JSON.stringify(freightData));
      }
      fileReader.readAsArrayBuffer(this.file);
    } else {
      this.isLoading = false;
      this.toastr.error("upload only Xlsx files ..", "Error!");
    }

  }

  

}