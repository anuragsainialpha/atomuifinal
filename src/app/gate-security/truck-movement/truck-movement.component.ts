import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { constants } from 'src/app/constants';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as  moment from 'moment';
import * as XLSX from 'xlsx';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/public/date.adapters';
import { HelperServiceService } from 'src/app/services/helper-service/helper-service.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;
@Component({
  selector: 'app-truck-movement',
  templateUrl: './truck-movement.component.html',
  styles: [],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class TruckMovementComponent implements OnInit, DoCheck {
  // rejectionList = ["NORMAL", "REJECTED"];
  check_Role_DP_REP: string;
  isLoading: boolean;
  page = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  truckMovementData = [];
  roles: any;
  msgType: any;
  integrationMsg: any;
  destination: any;
  invoice: any;
  materialCode: any;
  loadSlipId: any;
  truckType: any;
  type: any;
  statusList = [
    "GATED_IN",
    "REPORTED",
    "ASSIGN_LS",
    "LOADING",
    "LOADED",
    "UNLOADING",
    "DELIVERED",
    "INTRANSIT",
    "COMPLETED"
  ];
  gateInFromDate: string;
  gateInToDate: string;
  gateOutFromDate: string;
  gateOutToDate: string;
  reportFromDate: string;
  reportToDate: string;
  loadslipstatustype: any;
  truckNumber: any;
  container: any;
  sourceCode: any;
  destinationDesc: string;
  destinationList: any[];
  descriptionList: any[];
  shipmentId: string;
  stopType: string;
  mktsegment=[];
  sourceList: any[];
  materilcodelist: any[];
  isShow: boolean = true;
  truckList: any;
  mktsegmentList = [];
  baystatusList = [];
  bayStatus: any;
  transporterList: any[];
  countryList: any[];
  transporter: any;
  destCountryName: any;
  indentID: any;
  categoryList = [];
  materialGrp = [];
  currentDateAsString = this.helperService.getTodayDateASString();
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rejection: any;
  rejectionList: string[];
  freezeLeftValue: boolean = true;
  insertUser = '';
  constructor(
    private service: ApiserviceService,
    private toastr: ToastrService,
    private router: Router,
    private helperService: HelperServiceService,
  ) { }
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
    this.roles = constants.roles;
    //Activation of Tabs
    if (this.service.checkRole() == this.roles.rdc_PLN || (this.service.checkRole() == this.roles.JIT_OPERATION)) {
      localStorage.setItem("userMenu", "RDC-GAT-REPORT");
    } else if ((this.service.checkRole() == this.roles.gateSecurity) || (this.service.checkRole() == this.roles.rdc_GAT) ||
      (this.service.checkRole() == this.roles.JIT_GATE_SECURITY)) {
      localStorage.setItem("userMenu", "GAT-TRUCK-MOVEMENT");
    } else {
      localStorage.setItem("userMenu", "fgs-truck-status");
    }
    this.baystatusList = constants.bayStatusList;
    this.rejectionList = constants.rejectionList;
    this.check_Role_DP_REP = this.service.checkRole();
    this.getTruckTypeMasterData();
    this.reportFromDate = this.currentDateAsString;
    this.reportToDate = this.reportFromDate;
    let data = {
      "statusList": this.statusList,
      // Report Dates
      "fromReportDate": this.reportFromDate ? (moment(this.reportFromDate).format('DD/MM/YYYY')) : '',
      "toReportDate": this.reportToDate ? (moment(this.reportToDate).format('DD/MM/YYYY')) : ''
    }
    this.truckMovementApiSerivce(data);
    this.getMarketSegment();
    this.getCategoryMasterData();
  }


  truckMovementApiSerivce(data) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.truckMovement, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.truckMovementData = response['data'].trucksMetaDatas;
        this.truckMovementData = [...this.truckMovementData];
        this.page.count = response['data'].total;
        this.page.limit = response['data'].pageLength;
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing went Wrong", "! Error");
      }
    }, (err) => {
      this.isLoading = false;
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
    })
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


  //set value destination
  setDestination(value) {
    //  this.destinationDesc = value;
    this.destination = value;
  }

  //set value to destination description
  setDestDescription(value) {
    this.destinationDesc = value;
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

  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }

  addEvent(type, event) {
    console.log(event.target.value);
    if (event.target.value) {
      switch (type) {
        /* Checking if selected from date greater than to date.
     Clearing the toDate field when from date greater than to date */
       case "gateInDate":
           if(this.gateInToDate && (this.gateInFromDate > this.gateInToDate)){
             this.gateInToDate = '';
           }
         // this.gateInToDate = '';
         break;
       case "gateOutDate":
           if(this.gateOutToDate && (this.gateOutFromDate > this.gateOutToDate)){
             this.gateOutToDate = '';
           }
         // this.gateOutToDate = '';
         break;
       case "repFromDate":
          let checkToDate: any = this.reportToDate;
          console.log("Check--->1", checkToDate);
          if (this.reportToDate == this.currentDateAsString) {
            // on page load we are defaluting the  to date with string. Comparing string with date is not possible
            // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
            checkToDate = new Date();
            console.log("Check--->2", checkToDate);
      
          }
        if (this.reportToDate && (this.reportFromDate > checkToDate)) {
          this.reportToDate = '';
        }
         // this.reportToDate = '';
         break;
       default:
         break;
     }
    }
  }


  refreshData() {
    this.table.offset = 0;
    this.clearAll();
    this.currentDateAsString = this.helperService.getTodayDateASString();
    this.reportFromDate = this.currentDateAsString;
    this.reportToDate = this.reportFromDate;
    let bodyData = {
      "statusList": this.statusList,
      // Report Dates
      "fromReportDate": this.reportFromDate ? (moment(this.reportFromDate).format('DD/MM/YYYY')) : '',
      "toReportDate": this.reportToDate ? (moment(this.reportToDate).format('DD/MM/YYYY')) : ''
    }
    this.truckMovementApiSerivce(bodyData);
  }
  //server side pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
    let data = {
      'index': pageInfo.offset,
      'pageLength': pageInfo.pageSize,
      'destination': this.destination,
      'invoice': this.invoice,
      'itemId': this.materialCode,
      'loadslipId': this.loadSlipId,
      'truckType': this.truckType,
      "transporter": this.transporter,
      "destCountry": obj ? (obj.value) : '',
      "type": this.type,
      'statuses': this.loadslipstatustype,
      "statusList": this.statusList,
      "truckNumber": this.truckNumber,
      "containerNum": this.container,
      "source": this.sourceCode,
      "bayStatus": this.bayStatus,
      "marketSegment": this.mktsegment,
      "shipmentID": this.shipmentId,
      "stopType": this.stopType,
      // Gate In Dates
      "fromGateInDate": this.gateInFromDate ? (moment(this.gateInFromDate).format('DD/MM/YYYY')) : '',
      "toGateInDate": this.gateInToDate ? (moment(this.gateInToDate).format('DD/MM/YYYY')) : '',
      // Gate Out Dates
      "fromGateOutDate": this.gateOutFromDate ? (moment(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
      "toGateOutDate": this.gateOutToDate ? (moment(this.gateOutToDate).format('DD/MM/YYYY')) : '',
      // Report Dates
      "fromReportDate": this.reportFromDate ? (moment(this.reportFromDate).format('DD/MM/YYYY')) : '',
      "toReportDate": this.reportToDate ? (moment(this.reportToDate).format('DD/MM/YYYY')) : '',
      "rejection": this.rejection,
      "indentCategoryList": this.materialGrp,
      "insertUser": this.insertUser
    }
    this.truckMovementApiSerivce(data);

  }

  clearAll() {
    this.gateInFromDate = '';
    this.gateInToDate = '';
    this.gateOutFromDate = '';
    this.gateOutToDate = '';
    this.reportFromDate = '';
    this.reportToDate = '';
    this.destination = '';
    this.destinationDesc = '';
    this.destinationList = [];
    this.descriptionList = [];
    this.invoice = '';
    this.materialCode = '';
    this.loadSlipId = '';
    this.shipmentId = '';
    this.truckType =[];
    this.stopType = '';
    this.loadslipstatustype = [];
    this.mktsegment = [];
    this.container = "";
    this.truckNumber = "";
    this.sourceCode = '';
    this.sourceList = [];
    this.bayStatus = [];
    this.transporter = '';
    this.transporterList = [];
    this.countryList = [];
    this.destCountryName = '';
    this.indentID = '';
    this.rejection = [];
    this.materialGrp = [];
    this.insertUser = '';
  }

  showIntegrationMessage(rowdata, type) {
    this.msgType = type;
    if (type == 'integrationMsg') {
      this.integrationMsg = rowdata.integrationMsg;
    } else if (type == 'comments') {
      this.integrationMsg = rowdata.comments;
    } else {
      this.integrationMsg = rowdata.loadslipcomments;
    }
    $('#integrationMsgModal').modal('show');
  }

  // Filter source location
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
  // get destaination list on search
  getDestinationList(event) {
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

  //get filter destination result
  countryOfDestinationFilter(event, type) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?' + type + '=' + filtervalue).subscribe(response => {
        if (response['statusCode'] == 200) {
          this.countryList = [];
          this.countryList = response['data'].searchResult;
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

  //filter material code 
  filterMaterialCode(event) {
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
  }


  filterTruckMovement() {
    this.table.offset = 0;
    let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
    let bodyData = {
      'destination': this.destination,
      'invoice': this.invoice,
      'itemId': this.materialCode,
      'loadslipId': this.loadSlipId,
      'truckType': this.truckType,
      "transporter": this.transporter,
      "destCountry": obj ? (obj.value) : '',
      "type": this.type,
      'statuses': this.loadslipstatustype,
      "statusList": this.statusList,
      "truckNumber": this.truckNumber,
      "containerNum": this.container,
      "source": this.sourceCode,
      "bayStatus": this.bayStatus,
      "marketSegment": this.mktsegment,
      "shipmentID": this.shipmentId,
      "stopType": this.stopType,
      "indentID": this.indentID,
      // Gate In Dates
      "fromGateInDate": this.gateInFromDate ? (moment(this.gateInFromDate).format('DD/MM/YYYY')) : '',
      "toGateInDate": this.gateInToDate ? (moment(this.gateInToDate).format('DD/MM/YYYY')) : '',
      // Gate Out Dates
      "fromGateOutDate": this.gateOutFromDate ? (moment(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
      "toGateOutDate": this.gateOutToDate ? (moment(this.gateOutToDate).format('DD/MM/YYYY')) : '',
      // Report Dates
      "fromReportDate": this.reportFromDate ? (moment(this.reportFromDate).format('DD/MM/YYYY')) : '',
      "toReportDate": this.reportToDate ? (moment(this.reportToDate).format('DD/MM/YYYY')) : '',
      "rejection": this.rejection,
      "indentCategoryList": this.materialGrp,
      "insertUser" : this.insertUser
    }
    if (this.helperService.getDateValidations(this.gateInFromDate, this.gateInToDate, this.gateOutFromDate, this.gateOutToDate, this.reportFromDate, this.reportToDate)) {
      this.truckMovementApiSerivce(bodyData);
    } else {
      this.isLoading = false;
    }

  }
  onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }

  export() {
    if (this.truckMovementData.length > 0) {
      this.isLoading = true;
      let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
      let data = {
        'marketSegment': this.mktsegment,
        'invoice': this.invoice,
        'loadslipId': this.loadSlipId,
        'stopType': this.stopType,
        'shipmentID': this.shipmentId,
        'truckType': this.truckType,
        "transporter": this.transporter,
        "destCountry": obj ? (obj.value) : '',
        'type': this.type,
        'itemId': this.materialCode,
        'statuses': this.loadslipstatustype,
        "statusList": this.statusList,
        "destination": this.destination,
        "truckNumber": this.truckNumber,
        "containerNum": this.container,
        "source": this.sourceCode,
        "bayStatus": this.bayStatus,
        'pageLength': this.page.count,
        "indentID": this.indentID,

        // Gate In Dates
        "fromGateInDate": this.gateInFromDate ? (moment(this.gateInFromDate).format('DD/MM/YYYY')) : '',
        "toGateInDate": this.gateInToDate ? (moment(this.gateInToDate).format('DD/MM/YYYY')) : '',
        // Gate Out Dates
        "fromGateOutDate": this.gateOutFromDate ? (moment(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
        "toGateOutDate": this.gateOutToDate ? (moment(this.gateOutToDate).format('DD/MM/YYYY')) : '',
        // Report Dates
        "fromReportDate": this.reportFromDate ? (moment(this.reportFromDate).format('DD/MM/YYYY')) : '',
        "toReportDate": this.reportToDate ? (moment(this.reportToDate).format('DD/MM/YYYY')) : '',
        "rejection": this.rejection,
        "indentCategoryList": this.materialGrp,
        "insertUser": this.insertUser
      }
      this.service.post_service(ApiserviceService.apisList.truckMovement, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          let newtruckMovementData = response['data'].trucksMetaDatas;
          let excelRawData = newtruckMovementData;
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            let data = {
              "Source": excelRawData[i].sourceLoc,
              "Report Location": excelRawData[i].reportingLoc,
              "Indent Id": excelRawData[i].indentId,
              "Transporter Code": excelRawData[i].transporterSapCode,
              "Transporter": excelRawData[i].servprov,
              "Truck Number": excelRawData[i].truckNumber,
              "Container": excelRawData[i].containerNum,
              "Load Slip Id": excelRawData[i].loadslipId,
              "Shipment ID": excelRawData[i].shipmentId,
              "Dest": excelRawData[i].destLoc,
              "Dest Description": excelRawData[i].destDis,
              "Truck/Cont Type": excelRawData[i].truckType,
              "Actual TruckType": excelRawData[i].actualTruckType,
              "Order Type": excelRawData[i].type,
              "MKT Seg": excelRawData[i].marketSegment,
              "Category":excelRawData[i].itemCategory,
              "Freight Avail": excelRawData[i].isFreightAvailable,
              "Transhipment": excelRawData[i].transhipment,
              "Driver Name": excelRawData[i].driverName,
              "Driver Mobile": excelRawData[i].driverMobile,
              "Driver License": excelRawData[i].driverLicense,
              "Indent Creation Date": excelRawData[i].indentCreationDate,
              "ReportDate": this.service.customDateTimeFormat(excelRawData[i].reportDate),
              "GateInDate": this.service.customDateTimeFormat(excelRawData[i].gateInDate),
              "Arrived Bay": this.service.customDateTimeFormat(excelRawData[i].bayArrivedDate),
              "Print LS": this.service.customDateTimeFormat(excelRawData[i].lsPrintDate),
              "Send For Barcode": this.service.customDateTimeFormat(excelRawData[i].sendForBarcodeDate),
              "Loading Start": this.service.customDateTimeFormat(excelRawData[i].loadingStartDate),
              "Loading End": this.service.customDateTimeFormat(excelRawData[i].loadingEndDate),
              "Confirm": this.service.customDateTimeFormat(excelRawData[i].confirmedDate),
              "Release": this.service.customDateTimeFormat(excelRawData[i].releaseDate),
              "GateOutDate": this.service.customDateTimeFormat(excelRawData[i].gateOutDate),
              "Bay Status": excelRawData[i].bayStatus,
              "Loadslip Status": excelRawData[i].loadslipStatus,
              "Truck Status": excelRawData[i].status,
              "TAT (Rep-Gate Out)(Hrs)": excelRawData[i].repGoHrs,
              "TAT2(Gate In-Gate Out)(Hrs)": excelRawData[i].giGoHrs,
              "TAT3(Gate In-Release)(Hrs)": excelRawData[i].giRelHrs,
              "TAT4(Loading-Release)(Hrs)": excelRawData[i].loRelHrs,
              "TAT-5(Release-Gate Out)(Hrs)": excelRawData[i].relGoHrs,
              // "TAT (FGS Call-Release)": excelRawData[i].callRelHrs,
              "TAT6 (Rep-Gate In)(Hrs)": excelRawData[i].repGiHrs,
              "STO/SO": excelRawData[i].stoSoNum,
              "Delivery": excelRawData[i].delivery,
              "Invoice": excelRawData[i].sapInvoice,
              "Invoice Date": this.service.customDateTimeFormat(excelRawData[i].sapInvoiceDate),
              "LR": excelRawData[i].lrNum,
              "LR Date": this.service.customDateTimeFormat(excelRawData[i].lrDate),
              "Indent Cat": excelRawData[i].indentCategory,
              "Tyre": +excelRawData[i].totTyres,
              "Tube": +excelRawData[i].totTubes,
              "Flap": +excelRawData[i].totFlaps,
              "Valve": +excelRawData[i].totValve,
              "PCTR": (excelRawData[i].totPctr) ? (+excelRawData[i].totPctr) : 0,
              "Other Qty": +excelRawData[i].otherQty,
              "Total Qty": +excelRawData[i].totQty,
              "TTE Qty": excelRawData[i].tteQty ? +excelRawData[i].tteQty.toFixed(2) : 0,
              "TTE Util": excelRawData[i].tteUtil ? +excelRawData[i].tteUtil.toFixed(2) : 0,
              "Wt Util": excelRawData[i].weightUtil ? +excelRawData[i].weightUtil.toFixed(2) : 0,
              "Vol Util": excelRawData[i].volumeUtil ? +excelRawData[i].volumeUtil.toFixed(2) : 0,
              "In Weight (Kg)": +excelRawData[i].inWeight,
              "Out Weight (Kg)": +excelRawData[i].outWeight,
              "Net Weight(Kg)": +excelRawData[i].netWeight,
              "SAP invoice weight(Kg)": +excelRawData[i].sapInvWeight,
              "Weight Diff (Kg)": +excelRawData[i].diffInvWeight,
              "SAP invoice value(INR)": excelRawData[i].sapInvValue,
              "Eway bill No": excelRawData[i].ewayBillNo,
              "Reporting Date At Dest":this.service.customDateTimeFormat(excelRawData[i].reportingDateAtDest),
              "Unloading Date At Dest":this.service.customDateTimeFormat(excelRawData[i].unloadingDateAtDest),
              "Std TT": excelRawData[i].stdTT,
              "Delayed Days": excelRawData[i].delayedDays,
              "GRN": excelRawData[i].grn,
              "GRN Date": this.service.customDateTimeFormat(excelRawData[i].grnDate),
              "DIT_QTY": excelRawData[i].ditQty,
              "SHORTAGE_QTY": excelRawData[i].shortQty,
              "DSeq": excelRawData[i].dropSeq,
              "Loadslip Comments": excelRawData[i].loadslipcomments,
              "Gate Comments": excelRawData[i].comments,
              "Rejection": excelRawData[i].rejectionStatus,
              "Rejection Desc": excelRawData[i].rejectionDesc,
              "Insert User": excelRawData[i].insertUser,
              "Update User": excelRawData[i].updateUser,
              "Type": excelRawData[i].stopType,
              "Loadslip Creation Date": this.service.customDateTimeFormat(excelRawData[i].createdDate),
              "Country of Destination": excelRawData[i].destCountryName,
              "Total Loaded": excelRawData[i].qty,
              "Integration Status": excelRawData[i].integrationStatus,
              // "MKT Seg": excelRawData[i].marketSegment
              "Ft Trip ID": excelRawData[i].ftTripId,
              "Cust Inv Num": excelRawData[i].customInvNumber

            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'TruckMovement.xlsx');
          this.isLoading = false;
        } else {
          this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
          this.isLoading = false;
        }
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    } else {
      this.toastr.error("No records found to export", "Error!");
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


}