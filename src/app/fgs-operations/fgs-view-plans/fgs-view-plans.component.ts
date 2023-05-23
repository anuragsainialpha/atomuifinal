import { HelperServiceService } from './../../services/helper-service/helper-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MatAutocomplete, MatAutocompleteTrigger } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../public/date.adapters';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { constants } from '../../constants';
import * as XLSX from 'xlsx';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as moment from 'moment'
@Component({
  selector: 'app-fgs-view-plans',
  templateUrl: './fgs-view-plans.component.html',
  styleUrls: ['./fgs-view-plans.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class FgsViewPlansComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  // materialGrpList = [];
  materilaldesclist: any[];
  plant: any;
  pageSize: number;
  index: any;
  status: any;
  planId: any;
  destinationDesc: any
  descriptionList = [];
  materialGroup = [];
  materialCode: any;
  mktsegment: any;
  materilcodelist: any[];
  destinationList: any;
  materialDescription: any;
  destination: string;
  fileName: string = 'fgsViewplans.xlsx';
  currentDate = this.helperService.getTodayDate();
  currentDateAsString = this.helperService.getTodayDateASString();
  isShow: boolean = true;
  isLoading: boolean = false;
  fgsViewPlansList = [];
  page = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  statuses = [];
  mktsegmentList = [];
  categoryList = [];
  fromDispatchDate: string = '';
  toDispatchDate: string = '';
  toDate: string = '';
  fromDate: string = '';
  planStatusList: { "key": string; "value": string; }[];
  planStatus: any;
  constructor(
    private service: ApiserviceService,
    private toastr: ToastrService,
    private helperService: HelperServiceService
  ) { }

  ngOnInit() {
    localStorage.setItem("userMenu", "fgs-view-plans");
    this.plant = localStorage.getItem("sourceID");
    this.statuses = constants.fgsplanStatus;
    this.planStatusList = constants.planStatusList;
    // for getting plan data from server
    let bodyData = {
      'fromDispatchDate': this.currentDate,
      'toDispatchDate': this.currentDate
    }
    this.fromDate = this.currentDateAsString;
    this.toDate = this.fromDate;
    this.getViewPlanData(bodyData);

    //for getting category master data
    this.getCategoryMasterData();
    this.getMarketSegment();
  }
  //for getting category master data
  getCategoryMasterData() {
    this.service.get_service(ApiserviceService.apisList.categoryMasterData).subscribe(response => {
      this.categoryList = response['data'];
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
    })
  }

  getViewPlanData(bodyData) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.fgsSearch, bodyData).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.fgsViewPlansList = response['data'].planItems;
        this.page.count = response['data'].total;
        this.page.limit = response['data'].pageLength;
        this.isLoading = false
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'], "! Error");
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }


  getUserSearchData(event) {
    this.destinationDesc = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        this.destinationList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }


  //filter material code by user input
  filterMaterialCode(event) {
    this.materialDescription = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.materilcodelist = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?materialCode=' + filtervalue).subscribe(response => {
        this.materilcodelist = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
    if (filtervalue == '') {
      this.materialDescription = '';
      this.materilcodelist = [];
    }
    if (filtervalue.length > 1 && event.keyCode == 13) {
      this.materilcodelist.forEach(item => {
        if (item.value == filtervalue) {
          this.setMaterialDescription(item.description);
        }
      })
    }
  }

  //filter material Description 
  filterMaterialDescription(event) {
    this.materialCode = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.materilaldesclist = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?materialDesc=' + filtervalue).subscribe(response => {
        this.materilaldesclist = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
    if (filtervalue == '') {
      this.materialCode = '';
      this.materilcodelist = [];
    }
    // if (filtervalue.length > 1 && event.keyCode == 13) {
    //   this.materilaldesclist.forEach(item => {
    //     if (item.description == filtervalue) {
    //       this.setMaterialCode(item.description);
    //     }
    //   })
    // }
  }

  // set material Code
  setMaterialCode(data) {
    setTimeout(() => {
      this.materialCode = data;
    }, 300);
  }


  //set value for material description
  setMaterialDescription(value) {
    setTimeout(() => {
      this.materialDescription = value;
    }, 200);
  }

  //set value destination
  setDestination(value) {
    //  this.destinationDesc = value;
    this.destination = value;
  }

  //set value to destination description
  setDestDescription(value) {
    this.destinationDesc = value;
  }

  getUserDestinationList(event) {
    this.destination = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.getDestinationDescriptionDataList + event.target.value).subscribe(response => {
        if (response['data']) {
          this.descriptionList = response['data'].searchResult;
        }
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  //View plans Filter 
  fgsPlansFilter() {
    this.fgsViewPlansList = [];
    this.table.offset = 0;
    this.forDateValidation();
    let bodyData = {
      'fromDispatchDate': this.fromDispatchDate,
      'toDispatchDate': this.toDispatchDate,
      'sourceLocation': this.plant,
      'destinationCode': this.destination,
      'index': 0,
      'marketSegment': this.mktsegment,
      'materialCode': this.materialCode,
      'materialDescription': this.materialDescription,
      'materialGroup': this.materialGroup,
      'pageLength': this.page.limit,
      'planId': this.planId,
      'status': this.status,
      'planStatus': this.planStatus
    }

    if (this.fromDate != '' && this.fromDate != null) {
      if (this.toDate != '' && this.fromDate != null) {
        this.getViewPlanData(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.getViewPlanData(bodyData);
    }
  }
  showFilter() {
    this.isShow = !this.isShow;
  }

  getMarketSegment() {
    this.service.get_service(ApiserviceService.apisList.getMarketSegment).subscribe(response => {
      if (response['statusCode'] == '200') {
        this.mktsegmentList = response['data'];
      } else {
        this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!')
      }
    })
  }

  // clear the data what the user entered
  clearAll() {
    this.destination = '';
    this.mktsegment = "";
    this.materialCode = "";
    this.materialDescription = "";
    this.materialGroup = [];
    this.planId = null;
    this.status = '';
    this.destinationDesc = "";
    this.descriptionList = [];
    this.materilaldesclist = [];
    this.fromDate = '';
    this.toDate = '';
    this.planStatus = '';
  }
  // Date Validation
  forDateValidation() {
    if (this.fromDate != '' && this.fromDate != null) {
      this.fromDispatchDate = moment(new Date(this.fromDate)).format("DD/MM/YYYY");
    } else {
      this.fromDispatchDate = '';
    }
    if (this.toDate != '' && this.toDate != null) {
      this.toDispatchDate = moment(new Date(this.toDate)).format("DD/MM/YYYY");
    } else {
      this.toDispatchDate = '';
    }
  }

  //refresh data
  refresh() {
    this.fgsViewPlansList = [];
    this.table.offset = 0;
    this.clearAll();
    let bodyData = {
      'fromDispatchDate': this.currentDate,
      'toDispatchDate': this.currentDate
    }
    this.fromDate = this.currentDateAsString;
    this.toDate = this.fromDate;
    this.getViewPlanData(bodyData);
  }

  // server side pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.index = pageInfo.offset;
    this.forDateValidation();
    let bodyData = {
      'fromDispatchDate': this.fromDispatchDate,
      'toDispatchDate': this.toDispatchDate,
      'index': pageInfo.offset,
      'pageLength': pageInfo.pageSize,
      'destinationCode': this.destination,
      'marketSegment': this.mktsegment,
      'materialCode': this.materialCode,
      'materialDescription': this.materialDescription,
      'materialGroup': this.materialGroup,
      'planId': this.planId,
      'status': this.status,
      'planStatus': this.planStatus
    }
    this.getViewPlanData(bodyData);
  }


  //export excel data
  export(): void {
    if (this.fgsViewPlansList.length > 0) {
      this.isLoading = true;
      this.forDateValidation();
      let data = {
        'fromDispatchDate': this.fromDispatchDate,
        'toDispatchDate': this.toDispatchDate,
        'destinationCode': this.destination,
        // 'index': this.index,
        'marketSegment': this.mktsegment,
        'materialCode': this.materialCode,
        'materialDescription': this.materialDescription,
        'materialGroup': this.materialGroup,
        'pageLength': this.page.count,
        'planId': this.planId,
        'status': this.status,
        'planStatus': this.planStatus
      }
      this.service.post_service(ApiserviceService.apisList.fgsSearch, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          let newViewPlanData = response['data'].planItems;
          let excelRawData = newViewPlanData;
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            let data = {
              "planId": excelRawData[i].planId,
              "Dispatch Date": this.service.customDateFormat(excelRawData[i].dispatchDate),
              "Source": excelRawData[i].sourceLocation,
              "Destination": excelRawData[i].destinationLocation,
              "Dest Description": excelRawData[i].destinationDescription,
              "Material Code": excelRawData[i].itemId,
              "Material Description": excelRawData[i].itemDescription,
              "Category": excelRawData[i].category,
              "TTE": excelRawData[i].tte,
              "Batch code": excelRawData[i].batchCode,
              "Mkt Segment": excelRawData[i].marketSegment,
              "Priority": excelRawData[i].priority,
              "Plan Quantity": excelRawData[i].quantity,
              "Approved Quantity": excelRawData[i].approvedQuantity,
              "Unapproved Quantity": excelRawData[i].unapprovedQuantity,
              "Approved Delete": excelRawData[i].deletedApprQuantity,
              "Unapproval Delete": excelRawData[i].deletedUnApprQuantity,
              "Reserved": excelRawData[i].reservedQuantity,
              "Loaded": excelRawData[i].loaded,
              "Dispatch Quantity": excelRawData[i].dispatchedQuantity,
              "Avaliable Quantity": excelRawData[i].availableQuantity,
              "Total Availble Quantity": excelRawData[i].totalAvailableQuantity,
              "Avaliable TTE": ((excelRawData[i].availableQuantity ? excelRawData[i].availableQuantity : 0) * (excelRawData[i].tte ? excelRawData[i].tte : 0)),
              "Plan Status": excelRawData[i].status,
              "Status": excelRawData[i].appStatus
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'viewplanData.xlsx');
          this.isLoading = false;
        } else {
          this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
          this.isLoading = false;
        }
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      });
    } else {
      this.toastr.error("No records found to export", "Error!");
    }
  }
}


