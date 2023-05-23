import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { MatDialog } from '@angular/material/dialog';
declare var $: any;
@Component({
  selector: 'app-create-indent-excel-upload',
  templateUrl: './create-indent-excel-upload.component.html',
  styleUrls: ['./create-indent-excel-upload.component.scss']
})
export class CreateIndentExcelUploadComponent implements OnInit {
  ErrorData: any;
  file: File;
  arrayBuffer: any;
  isLoading: boolean = false;
  responseData = '';
  planData = '';
  data = [];
  IsErrorLog: boolean = false;
  planId: number;
  constructor(
    private router: Router,
    private acitvatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private service: ApiserviceService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    localStorage.setItem("userMenu", "fgs-indents")
  }
  onFileChange(event) {
    this.isLoading = true;
    this.IsErrorLog=false;
    this.file = event.target.files[0];
    let excelIndentsList = [];
    if ((this.file['type'] == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || (this.file['type'] == 'application/vnd.ms-excel')) {
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
        // console.log(XLSX.utils.sheet_to_json(worksheet, { raw: false }));
        excelIndentsList = XLSX.utils.sheet_to_json(worksheet, { dateNF: "DD/MM/YYYY", raw: false });
        let postData = {
          indents: excelIndentsList
        }
        let ValidData = true;
        excelIndentsList.forEach(item =>{
          item.Count = Number(item.Count);
            if(isNaN(item.Count) || (item.Count <=0)){
              ValidData = false;
            }
        })
        console.log("importedItemFileList", excelIndentsList)
        if(ValidData){
          this.service.post_service(ApiserviceService.apisList.manualIndent, postData).subscribe(response => {
            if (response['statusCode'] == 200) {
              this.responseData = response['data'];
              // If freight no availble we will show modal otherwise not showing
              if (this.responseData) {
                $('#freightModal').modal('show');
              }
              this.isLoading = false;
              this.toastr.success(response['message'])
              console.log("resposne", this.responseData);
            } else {
              this.isLoading = false;
              this.ErrorData = response['data'];
              this.IsErrorLog = true
            }
  
          },
            (err) => {
              console.log("Error", err);
              this.toastr.error("Something went wrong..", "Error!");
              this.isLoading = false;
            })
        }
        else{
          this.isLoading = false;
          this.toastr.error('Please enter only Numbers/Non Zeros/Non Negative values for Count');
        }
        console.log(JSON.stringify(postData))
      }
      fileReader.readAsArrayBuffer(this.file);
    } else {
      this.isLoading = false;
      this.toastr.error("upload only Xlsx files ..", "Error!");
    }

  }
}
