import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shipment-export-upload',
  templateUrl: './shipment-export-upload.component.html',
  styles: []
})
export class ShipmentExportUploadComponent implements OnInit {
  IsErrorLog: boolean;
  ErrorData = [];
  isLoading: boolean;
  constructor(
    private service: ApiserviceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    localStorage.setItem("userMenu", 'shipment-export');
  }

  onFileChange(files) {
    let fileToUpload = files.item(0);
    if ((fileToUpload.type == 'text/csv') || (fileToUpload.type == 'application/vnd.ms-excel')) {
      this.isLoading = true;
      let formData = new FormData();
      formData.append("multipartFile", fileToUpload);
      this.service.post_multipart(ApiserviceService.apisList.postExportShipping, formData).subscribe(response => {
        if (response['statusCode'] == '200') {
          this.isLoading = false;
          this.toastr.success(response['message']);
        } else {
          this.ErrorData = response['data'];
          this.IsErrorLog = true;
          this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
          this.isLoading = false;
        }
      },
        (err) => {
          this.toastr.error(err ? err : "Something went wrong..", "Error!");
          this.isLoading = false;
        })
    } else {
      this.toastr.error("Please Upload CSV Files Only", "Error!");
    }


  }
}
