import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment'
import { DateAdapter, MAT_DATE_FORMATS, MatDatepickerInputEvent } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/public/date.adapters';
import * as XLSX from 'xlsx';
import { HelperServiceService } from 'src/app/services/helper-service/helper-service.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { constants } from 'src/app/constants';
declare var $: any

@Component({
  selector: 'app-assign-trucks',
  templateUrl: './assign-trucks.component.html',
  styleUrls: ['./assign-trucks.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class AssignTrucksComponent implements OnInit, DoCheck {
  index: number;
  transporterIndents = [];
  gpsStatus: GpsStatus[] = [
    { value: 'YES', viewValue: 'Yes' },
    { value: 'NO', viewValue: 'No' },

  ];
  page = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  isLoading: boolean;
  destinationList: any[];
  IsShow: boolean = true;
  truckData = [];
  driverData = [];
  commentsMsg: string;
  currentDateAsString = this.helperService.getTodayDateASString();
  startDate = this.currentDateAsString;
  endDate = this.currentDateAsString;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  indentId = '';
  destination = '';
  destinationDesc: any;
  descriptionList = [];
  truckType = [];
  objDriverData = {
    indentId: '',
    truckNumber: '',
    truckType: '',
    driver: '',
    mobile: '',
    licenseNumber: '',
    rcWeight: '',
    length: '',
    width: '',
    height: '',
    isGPS: true,
    gpsProvider: ''
  };
  gateSecurityTransportReport: any;
  // minDate = new Date();
  IsAssignDriver: boolean = false;
  isClicked: any;
  editing = {};
  reportedTrucks: any[];
  IsReportedIndentsShow: boolean;
  numberofManualEntries: number;
  toDate: any;
  truckList = [];
  transporter: any;
  status: any;
  materialGrp: any;
  transporterList: any[];
  categoryList: any;
  statuses=[];
  freezeLeftValue: boolean = false;
  sourceList: any[];
  sourceCode = '';
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    public service: ApiserviceService,
    private toastr: ToastrService,
    private helperService: HelperServiceService
  ) {
    let data = {
      'fromDispatchDate': this.startDate ? (moment(this.startDate).format("DD/MM/YYYY")) : '',
      'toDispatchDate': this.endDate ? (moment(this.endDate).format('DD/MM/YYYY')) : '',
    };
    this.getAssignTrucksData(data);

  }
  ngDoCheck(){
    let width = $(window).width();
    if(width < 1024) {
      this.freezeLeftValue = false;
    }
    else {
      this.freezeLeftValue = true;
    }
  }
  ngOnInit() {
    localStorage.setItem("userMenu", "assign-trucks");
    this.statuses = constants.indent_Filter_status_list;
    // for getting truck type master
    this.getTruckTypeMasterData();
     //for getting category master data
    this.getCategoryMasterData();

  }

  getAssignTrucksData(data) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.transporterIndent, data).subscribe(response => {
      console.log("response", response);
      if (response['statusCode'] == 200) {
        let responseData = response['data']
        for (let item of responseData.indents) {
          if ((item.netRequested) < (item.confirmed + item.declined)) {
            item['toBeConfirmed'] = 0;
          } else {
            item['toBeConfirmed'] = (item.netRequested) - (item.confirmed + item.declined);
          }
        }
        this.transporterIndents = responseData.indents;
        this.transporterIndents = [...this.transporterIndents];
        this.page.limit = responseData.pageLength;
        this.page.count = responseData.total;
        // this.page.offset = responseData.index;
        this.isLoading = false;
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        this.isLoading = false;
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }

  // for getting truck type master
  getTruckTypeMasterData() {
    this.service.get_service(ApiserviceService.apisList.truckTypeMasterData).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.truckList = response['data'];
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "!Error");
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
    });
  }

  updateValue(event, cell, row) {
    // this.editing[rowIndex + '-' + cell] = false;
    let modifiedIndex = this.transporterIndents.findIndex(item => item.indentId == row.indentId);
    this.transporterIndents[modifiedIndex][cell] = Number(event.target.value);
    this.transporterIndents = [...this.transporterIndents];
    console.log('UPDATED!', this.transporterIndents[modifiedIndex][cell]);
  }
  showFilter() {
    this.IsShow = !this.IsShow;
  }
  //get filter destination result
  getfilterDestination(event) {
    this.destinationDesc = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        console.log("respio", response)
        this.destinationList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }

  }

  //clear All  the Data
  clearAll() {
    this.startDate = '';
    this.endDate = '';
    this.indentId = '';
    this.destination = '';
    this.destinationDesc = '';
    this.descriptionList = [];
    this.destinationList = [];
    this.truckType = [];
    this.endDate = '';
    this.materialGrp=[];
    this.status=[];
    this.transporter='';
    this.sourceList=[];
    this.sourceCode = '';
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


  refreshData() {
    this.page.offset = 0;
    this.clearAll();
    this.currentDateAsString = this.helperService.getTodayDateASString();
    this.startDate = this.currentDateAsString;
    this.endDate = this.helperService.getTodayDateASString();
    let data = {
      'fromDispatchDate': this.startDate ? (moment(this.startDate).format("DD/MM/YYYY")) : '',
      'toDispatchDate': this.endDate ? (moment(this.endDate).format('DD/MM/YYYY')) : '',
    };
    this.getAssignTrucksData(data);
  }
  export() {

    if (this.transporterIndents.length > 0) {
      this.isLoading = true;
      let startDate;
      let endDate;
      if (this.startDate && this.startDate != null) {
        startDate = moment(new Date(this.startDate)).format("DD/MM/YYYY")
      }
      if (this.endDate && this.endDate != null) {
        endDate = moment(new Date(this.endDate)).format("DD/MM/YYYY")
      }
      let data = {
        // 'indentID': this.indentId,
        // 'destination': this.destination,
        // 'fromDispatchDate': startDate,
        // 'toDispatchDate': endDate,
        // 'truckType': this.truckType,
        'fromDispatchDate': startDate,
        'toDispatchDate': endDate,
        'indentID': this.indentId,
        'transporter': this.transporter,
        'truckType': this.truckType,
        'destination': this.destination,
        'materialGrp': this.materialGrp,
        'status': this.status,
        'index': this.index,
        'pageLength': this.page.count,
        'source':this.sourceCode
      }
      this.service.post_service(ApiserviceService.apisList.transporterIndent, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          let newViewPlanData = response['data'].indents;
          console.log("newViewPlanData", newViewPlanData);
          let excelRawData = newViewPlanData;
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            if ((excelRawData[i].netRequested) < (excelRawData[i].confirmed + excelRawData[i].declined)) {
              excelRawData[i]['toBeConfirmed'] = 0;
            } else {
              excelRawData[i]['toBeConfirmed'] = (excelRawData[i].netRequested) - (excelRawData[i].confirmed + excelRawData[i].declined);
            }
            let data = {
              "Source": excelRawData[i].SouceLocation,
              "Dispatch Date": this.service.customDateFormat(excelRawData[i].dispatchDate),
              "Destination": excelRawData[i].destination,
              "Dest Description": excelRawData[i].destDis,
              "Truck/Container Type": excelRawData[i].truckType,
              "Transporter": excelRawData[i].transporter,
              "Created Date": this.service.customDateTimeFormat(excelRawData[i].insertDate),
              "Port Of Discharge": excelRawData[i].pod,
              "Country Of Destination": excelRawData[i].destCountryName,
              "Indent Id": excelRawData[i].indentId,
              "Freight Available": excelRawData[i].isFreightAvailable,
              "Category": excelRawData[i].materailGrp,
              "Indented": excelRawData[i].indented,
              "Cancelled": excelRawData[i].cancelled,
              "Net Indented": excelRawData[i].netRequested,
              "Trans Confirmed": excelRawData[i].confirmed,
              "Trans Declined": excelRawData[i].declined,
              "To Be Confirmed": excelRawData[i].toBeConfirmed,
              "Reported": excelRawData[i].reported,
              "Rejected": excelRawData[i].rejected,
              "Net Balance": excelRawData[i].netBalance,
              "Indent Age (Days)": excelRawData[i].indentAge,
              "Status": excelRawData[i].status,
              "Insert User": excelRawData[i].insertUser,
              "Update User": excelRawData[i].updateUser,
              "Comments": excelRawData[i].comments
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'assignTrucks.xlsx');
          this.isLoading = false;
        } else {
          this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
          this.isLoading = false;
        }
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    } else {
      this.toastr.error("No records found to export", "Error!");
    }

  }

  //server side pagination 
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.transporterIndents = [];
    this.index = pageInfo.offset;
    let startDate; let endDate;
    if (this.startDate && this.startDate != null) {
      startDate = moment(new Date(this.startDate)).format("DD/MM/YYYY")
    }
    if (this.endDate && this.endDate != null) {
      endDate = moment(new Date(this.endDate)).format("DD/MM/YYYY")
    }
    let datatabledata = {
      index: pageInfo.offset,
      pageLength: pageInfo.pageSize,
      indentID: this.indentId,
      destination: this.destination,
      fromDispatchDate: startDate,
      toDispatchDate: endDate,
      truckType: this.truckType,
      source : this.sourceCode
    }
    this.getAssignTrucksData(datatabledata);

  }

  //update Indent from Transporter
  UpdateIndent(row) {
    this.isLoading = true;
    let data = {
      confirmed: row.confirmed,
      declined: row.declined,
      indentId: row.indentId
    }
    this.service.post_service(ApiserviceService.apisList.updateIndent, data).subscribe(response => {
      console.log(response)
      if (response['statusCode'] == 200) {
        let updatebleIndex = this.transporterIndents.findIndex(resp => resp.indentId == row.indentId);
        let responseData = response['data'];
        if ((responseData.netRequested) < (responseData.confirmed + responseData.declined)) {
          responseData['toBeConfirmed'] = 0;
        } else {
          responseData['toBeConfirmed'] = (responseData.netRequested) - (responseData.confirmed + responseData.declined);
        }
        this.transporterIndents[updatebleIndex] = responseData;
        this.transporterIndents = [...this.transporterIndents];
        this.toastr.success(response['message'])
        this.editing = {};
        this.isLoading = false;
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

  //assignDriver Details
  assignDriver(rowData) {
    this.reportedTrucks = [];
    let totalTrucksRequested = rowData.indented;
    this.numberofManualEntries = totalTrucksRequested - this.reportedTrucks.length;
    let resporterTrucks = rowData.reportedTrucks;
    this.reportedTrucks = resporterTrucks;
    this.reportedTrucks = [...this.reportedTrucks];
    // this.manualTruckAssign();
    this.IsReportedIndentsShow = true;
    console.log(this.reportedTrucks)
  }
  //filter creteria
  fiterData() {
    this.table.offset = 0;
    let startDate;
    let endDate;
    if (this.startDate && this.startDate != null) {
      startDate = moment(new Date(this.startDate)).format("DD/MM/YYYY")
    }
    if (this.endDate && this.endDate != null) {
      endDate = moment(new Date(this.endDate)).format("DD/MM/YYYY")
    }
    let data = {
      // indentID: this.indentId,
      // destination: this.destination,
      // fromDispatchDate: startDate,
      // toDispatchDate: endDate,
      // truckType: this.truckType,
      'fromDispatchDate': startDate,
      'toDispatchDate': endDate,
      'indentID': this.indentId,
      'transporter': this.transporter,
      'truckType': this.truckType,
      'destination': this.destination,
      'materialGrp': this.materialGrp,
      'status': this.status,
      'source':this.sourceCode
    }
    if (this.startDate) {
      if (this.endDate) {
        this.getAssignTrucksData(data);
      } else {
        this.toastr.error("Please select To Date", "! Error")
      }
    } else {
      this.getAssignTrucksData(data);
    }

  }

// filter Transporter details
getfilterTransporter(event) {
  let filtervalue = event.target.value;
  if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
    this.transporterList = [];
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.searchFilter + '?transporter=' + filtervalue).subscribe(response => {
      this.transporterList = response['data'].searchResult;
      this.isLoading = false;
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }
}
//for getting category master data
getCategoryMasterData() {
  this.service.get_service(ApiserviceService.apisList.categoryMasterData).subscribe(response => {
    if (response['statusCode'] == 200) {
      this.categoryList = response['data'];
    } else {
      this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "!Error");
    }
  }, (err) => {
    this.toastr.error(err ? err : "Something went wrong..", "Error!");
  })
}

  showComments(comments) {
    this.commentsMsg = comments;
    $('#integrationMsgModal').modal('show');

  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    if(event.target.value){
      let checkToDate:any = this.endDate;
      if(this.endDate == this.currentDateAsString ){
        checkToDate = new Date();
      }
      if(this.endDate && (this.startDate > checkToDate)){
        this.endDate = '';
      }
    }
    // this.endDate = '';
  }

  getfilterSource(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.sourceList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        console.log("respio", response)
        this.sourceList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
}

export interface GpsStatus {
  value: string;
  viewValue: string;
}