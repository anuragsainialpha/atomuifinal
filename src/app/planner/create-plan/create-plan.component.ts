import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { FileUploadErrorsDialogComponent } from '../../public/file-upload-errors-dialog/file-upload-errors-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.scss']
})
export class CreatePlanComponent implements OnInit {
  ErrorData: any;
  // errorData: any;
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
    localStorage.setItem("userMenu", "create-plan");
  }
  onFileChange(event) {
    this.IsErrorLog = false;
    this.isLoading = true;
    this.file = event.target.files[0];
    let importedItemFileList = [];
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
        importedItemFileList = XLSX.utils.sheet_to_json(worksheet, { dateNF: "DD/MM/YYYY", raw: false });
        let plannerData = {
          planItems: importedItemFileList
        }
        let ValidData = true;
        importedItemFileList.forEach(item => {
          item.Quantity = Number(item.Quantity);
          item.Priority = (item.Priority) ? (Number(item.Priority)) : '';
          // For Quantity validation 
          if (isNaN(item.Quantity) || (item.Quantity <= 0)) {
            ValidData = false;
          }
          // For priority validation , priority not mandatory fileld that logic small diff from quantity validation
          if ((item.Priority) || (item.Priority === 0)) {
            if (isNaN(item.Priority) || (item.Priority <= 0)) {
              ValidData = false;
            }
          }
        })
        console.log("importedItemFileList", importedItemFileList);
        if (ValidData) {
          this.service.post_service(ApiserviceService.apisList.plannerService, plannerData).subscribe(response => {
            if (response['statusCode'] == 200) {
              this.responseData = response['data'];
              this.planId = this.responseData['planId'];
              this.router.navigateByUrl('/plan/pending-plans/view-plan/' + this.planId);
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
        } else {
          this.isLoading = false;
          this.toastr.error("Plese enter only Number / Non Zeros / Non Negative values for Quantity and Priority");
        }

        console.log("planndata", JSON.stringify(plannerData));
      }
      fileReader.readAsArrayBuffer(this.file);
    } else {
      this.isLoading = false;
      this.toastr.error("upload only Xlsx files ..", "Error!");
    }

  }
}