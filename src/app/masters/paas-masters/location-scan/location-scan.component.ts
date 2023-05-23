import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { NgForm } from '@angular/forms';
declare var $: any;
import { UiUtil } from '../../../uiUtil';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-location-scan',
  templateUrl: './location-scan.component.html',
  styleUrls: ['./location-scan.component.scss']
})
export class LocationScanComponent implements OnInit {

  isLoading: boolean = false;
  isShow: boolean = true;

  // salesSku1:any = "";
  // salesSku:any = "";
  // itemId:any = "";
  // compQty:any = "";
  // itemSeq:any = "";
  // oeCode:any = "";
  // itemClassification: any = "";
  // itemDescription: any = "";
  // itemType: any = "";
  // itemGroup: any = "";
  // tte: any = "";
  // loadFactor: any = "";
  // formattedDate: string;
  // 


  effectiveDate: any = "";
  formattedDate: string;

  locationId: any = "";
  scannable: any = "";
  itemCategory: any = "";
  insertUser: any = "";
  insertDate: any = "";
  updateUser: any = "";
  updateDate: any = "";


  locationIdF: any = "";
  scannableF: any = "";
  itemCategoryF: any = "";

  locationIdu: any = "";
  scannableu: any = "";
  itemCategoryu: any = "";


  displayForm: boolean = false;
  resultDataList: any[];
  responseItemsList: any[];
  scannableTypesList = ['Y', 'N'];
  integrationMsg: string;

  editing = {};

  page = {
    limit: 100,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 50
  };

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    localStorage.setItem("userMenu", "paas-master");
    this.getLocationIds();
    this.getScmgroupsList();
  }

  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }

  // Datatable Footer
  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }

  emptySumm() {
    return null;
  }


  locationIds: any[] = [];
  scmGroupList: any[] = [];

  getLocationIds() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getLocationIdsList).subscribe(response => {
      //console.log("response array string: "+JSON.stringify(response));
      this.locationIds = response['data'];
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  getScmgroupsList() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getScmgroupsList).subscribe(response => {
      //console.log("response array string: "+JSON.stringify(response));
      this.scmGroupList = response['data'];
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }



  displayAddForm() {
    if (this.displayForm)
      this.displayForm = false;
    else
      this.displayForm = true;
  }


  foods: any[] = [
    { value: 'Y', viewValue: 'Y' },
    { value: 'N', viewValue: 'N' }
  ];


  ApprovalEditing = {};
  pendingPlanList = [];



  doSubmitSearch() {
    let data = {
      locationId: this.locationId,
      scannable: this.scannable,
      itemCategory: this.itemCategory,
    }
    console.log("submit data:  " + JSON.stringify(data));
    this.doSearch(data)
  }

  doSearch(data) {
    this.isLoading = true;
    console.log("submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.getLocationScan, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.page.count = response['data'].total;
        this.page.limit = response['data'].pageLength;
        this.resultDataList = response['data'].locationScanList;
        console.log("response length: " + this.resultDataList.length);
        console.log("response array string: " + JSON.stringify(this.resultDataList));
        this.isLoading = false;
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong 99999", "Error!");
      this.isLoading = false;
    })
    //this.toastr.error("Received http error 404. Please check service urlcccc")
  }

  //server side pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    let bodyData = {
      index: pageInfo.offset,
      locationId: this.locationId,
      scannable: this.scannable,
      itemCategory: this.itemCategory,
    }
    this.doSearch(bodyData);
  }








  insertStatus: string = "";

  addNewLocation(form: NgForm) {
    this.isLoading = true;
    let data = {
      "locationScanList": [
        {
          "locationId": this.locationIdF,
          "scannable": this.scannableF,
          "itemCategory": this.itemCategoryF
        }
      ]
    }
    console.log("submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.addOrUploadLocationScan, data).subscribe(response => {
      // console.log("response array string: "+JSON.stringify(response));
      this.insertStatus = response['data'].message;
      if (this.insertStatus === "Sucess") {
        this.toastr.success(response['message']);
      }
      else if (this.insertStatus === "Failed") {
        this.toastr.error("Please check!", "Could not insert record..");
      }
      this.isLoading = false;
      form.resetForm();
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }



  showUpdateModel(row) {
    this.locationIdu = row.locationId;
    this.scannableu = row.scannable;
    this.itemCategoryu = row.itemCategory;
    $("#myModal").modal('show');
  }

  updateLocationScan(form: NgForm) {
    this.isLoading = true;
    let data = {
      "locationScanList": [
        {
          "locationId": this.locationIdu,
          "scannable": this.scannableu,
          "itemCategory": this.itemCategoryu
        }
      ]
    }
    console.log("updateLocationScan submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.updateLocationScan, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.isLoading = false;
        this.doSubmitSearch();
        this.toastr.success(response['message']);

        $("#myModal").modal('hide');
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }




  insDate: any = "";
  insDatep: any = "";
  updDate: any = "";
  updDatep: any = "";


  export(): void {
    if (this.resultDataList.length > 0) {
      this.isLoading = true;
      let data = {
        locationId: this.locationId,
        scannable: this.scannable,
        itemCategory: this.itemCategory,
        // pageLength: this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
        pageLength: this.page.count
      }

      this.service.post_service(ApiserviceService.apisList.getLocationScan, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          let excelRawData = [...response['data'].locationScanList];
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            this.insDate = this.formatDate(excelRawData[i].insertDate);
            this.insDatep = this.effectiveDate;
            this.updDate = this.formatDate(excelRawData[i].updateDate);
            this.updDatep = this.effectiveDate;

            let data = {
              "Location Id": excelRawData[i].locationId,
              "Scannable": excelRawData[i].scannable,
              "Item Category": excelRawData[i].itemCategory,
              "Insert User": excelRawData[i].insertUser,
              "Insert Date  ": this.insDatep,
              "Update User ": excelRawData[i].updateUser,
              "Update Date ": this.updDatep,
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'Location Scan.xlsx');
          this.isLoading = false;
        } else {
          this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
          this.isLoading = false;
        }
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong 99999", "Error!");
        this.isLoading = false;
      })

    } else {
      this.toastr.error('No Data To Generate Excel...', 'Error!');
      this.isLoading = false;
    }
  }

  clearAll() {
    this.locationId = "";
    this.scannable = "";
    this.insertUser = "";
    this.insertDate = "";
    this.updateUser = "";
    this.updateDate = "";
    this.itemCategory = "";
  }

  // Refresh data
  refreshData() {
    this.isLoading = true;
    this.clearAll();
    let data = {};
    this.table.offset = 0;
    this.page.offset = 0;
    this.doSubmitSearch();
    // this.service.post_service(ApiserviceService.apisList.getMtItem, data).subscribe(response => {
    //   if (response['statusCode'] == 200) {
    //     let responseData = response['data'].mtOeBoms;
    //     this.responseItemsList = responseData;
    //     this.responseItemsList = [...this.responseItemsList]
    //     // this.page.count = response['data'].total;
    //     // this.page.limit = response['data'].pageLength;
    //     this.isLoading = false;
    //   } else {
    //     this.isLoading = false;
    //     this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
    //   }
    // }, (err) => {
    //   this.toastr.error(err ? err : "Something went wrong..", "Error!");
    //   this.isLoading = false;
    // })
  }




  //UTILS  

  formatDate(data) {
    if (data != null && data) {
      let formatted = new Date(data),
        mnth = ("0" + (formatted.getMonth() + 1)).slice(-2),
        day = ("0" + formatted.getDate()).slice(-2);
      this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
      this.effectiveDate = this.formattedDate;
      return this.formattedDate;
    } else {
      this.effectiveDate = "";
    }
  }
  month_names = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
  };

  trimDate(date) {
    if (date === "" || date === undefined)
      return "";
    else
      var array = date.substring(0, 10).split("-");
    return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
  }

  trimEmpty(val) {
    if (val === "" || val === undefined)
      return "";
    else {
      console.log(typeof val)
      console.log(val + "----" + val.length);
      // return val.trim();
    }
  }

  getMonth(number) {
    return this.month_names[number]
  }


}
