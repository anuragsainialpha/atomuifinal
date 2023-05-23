import { AppDateAdapter, APP_DATE_FORMATS } from './../../public/date.adapters';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { _MatTreeNodeMixinBase, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import * as moment from 'moment';
import * as XLSX from 'xlsx';
import { constants } from 'src/app/constants';
import { HelperServiceService } from 'src/app/services/helper-service/helper-service.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;
@Component({
  selector: 'app-loadslip-movement',
  templateUrl: './loadslip-movement.component.html',
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class LoadslipMovementComponent implements OnInit, DoCheck {
  isShow: boolean = true;
  isLoading: boolean = false;
  integrationMsg: string;
  msgType: string;
  // statusList = ["CREATED", "PRINTED", "LOADING", "LOADED", "SENT_SAP"];
  statusList = [
    "CREATED",
    "PRINTED",
    "LOADING",
    "LOADED",
    "SENT_SAP",
    "INTRANSIT",
    "COMPLETED",
    "DELIVERED",
    "UNLOADING"
  ];
  mktsegmentList = [];
  truckList = [];
  destinationList = [];
  materilcodelist = [];
  loadSlipData = [];
  fromCreatedDate: any;
  toCreatedDate: any;
  // fromDate: any;
  // toDate: any;
  destination: any;
  destinationDesc: any;
  descriptionList = [];
  truckType=[];
  materialCode: any;
  type = "CREATED,PRINTED,LOADING,LOADED,SENT_SAP,INTRANSIT,COMPLETED,DELIVERED,UNLOADING";
  mktsegment: any;
  loadSlipId: any;
  shipmentId: any;
  stopType: any;
  invoice: any;
  loadslipstatustype=[];
  page = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  container: any;
  truckNumber: any;
  sourceList: any[];
  check_Role_DP_REP: string;
  roles: any;
  sourceCode: any;
  destCountryName: string;
  countryList: any[];
  transporterList: any[];
  lsCategoryList = [];
  draftedLoadslipCategory = [];
  insertUser = '';
  freezeLeftValue: boolean = true;
  
  @ViewChild(DatatableComponent) table: DatatableComponent;
  transporter: any;
  currentDateAsString = this.helperService.getTodayDateASString();
  constructor(
    private service: ApiserviceService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private helperService: HelperServiceService
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
    localStorage.setItem("userMenu", "load-slip");
    this.check_Role_DP_REP = this.service.checkRole();
    this.roles = constants.roles;
    // this.forDateValidation();
    this.getTruckTypeMasterData();
    this.fromCreatedDate = this.currentDateAsString;
    this.toCreatedDate = this.fromCreatedDate;
    let bodyData = {
      "fromCreatedDate": this.fromCreatedDate ? (moment(new Date(this.fromCreatedDate)).format("DD/MM/YYYY")) : '',
      "toCreatedDate": this.toCreatedDate ? (moment(new Date(this.toCreatedDate)).format("DD/MM/YYYY")) : '',
      "type": this.type,
      "status": ["INTRANSIT", "COMPLETED", "DELIVERED", "UNLOADING", "CREATED", "PRINTED", "LOADING", "LOADED", "SENT_SAP"],
    }
    this.getLoadslipMovementData(bodyData);
    this.getMarketSegment();
    this.getLSCategoryList();
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

  addEvent(type, event) {
    if (event.target.value) {
       /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
      let checkToDate: any = this.toCreatedDate;
      console.log("Check--->1", checkToDate);
      if (this.toCreatedDate == this.currentDateAsString) {
        // on page load we are defaluting the  to date with string. Comparing string with date is not possible
        // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
        checkToDate = new Date();
        console.log("Check--->2", checkToDate);

      }
      if (this.toCreatedDate && (this.fromCreatedDate > checkToDate)) {
        this.toCreatedDate = '';
      }
      // this.toCreatedDate = '';
    }
  }
  getLSCategoryList() {
    this.service.get_service(ApiserviceService.apisList.getLSCategoryList).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.lsCategoryList = response['data'];
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "!Error");
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
    });
  }

  getLoadslipMovementData(bodyData) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getLoadslipMomentDetails, bodyData).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.page.count = response['data'].total;
        this.page.limit = response['data'].pageLength;
        this.loadSlipData = response['data'].loadslips;
        this.isLoading = false;
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        this.isLoading = false;
      }
    }, error => {
      this.toastr.error(error ? error : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  // Date Validation
  // forDateValidation() {
  //   if (this.fromDate != '' && this.fromDate != null) {
  //     this.fromCreatedDate = moment(new Date(this.fromDate)).format("DD/MM/YYYY");
  //   } else {
  //     this.fromCreatedDate = '';
  //   }
  //   if (this.toDate != '' && this.toDate != null) {
  //     this.toCreatedDate = moment(new Date(this.toDate)).format("DD/MM/YYYY");
  //   } else {
  //     this.toCreatedDate = '';
  //   }
  // }

  filterMovementLoadslip() {
    this.table.offset = 0;
    // this.forDateValidation();
    let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
    let bodyData = {
      "fromCreatedDate": this.fromCreatedDate ? (moment(new Date(this.fromCreatedDate)).format("DD/MM/YYYY")) : '',
      "toCreatedDate": this.toCreatedDate ? (moment(new Date(this.toCreatedDate)).format("DD/MM/YYYY")) : '',
      "destination": this.destination,
      "invoice": this.invoice,
      "loadslipId": this.loadSlipId,
      "truckType": this.truckType,
      "itemId": this.materialCode,
      "marketSegment": this.mktsegment,
      "shipmentId": this.shipmentId,
      "stopType": this.stopType,
      "type": this.type,
      "status": this.statusList,
      "lsStatus": this.loadslipstatustype,
      "truckNumber": this.truckNumber,
      "containerNum": this.container,
      "source": this.sourceCode,
      "destCountry": obj ? (obj.value) : '',
      "transporter" : this.transporter,
      'itemCategories' : this.draftedLoadslipCategory,
      "insertUser": this.insertUser
    }
    if (this.fromCreatedDate != '' && this.fromCreatedDate != null) {
      if (this.toCreatedDate != '' && this.toCreatedDate != null) {
        this.getLoadslipMovementData(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.getLoadslipMovementData(bodyData);
    }
    // this.getLoadslipMovementData()
  }

  //server side pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    // this.forDateValidation();
    let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
    let bodyData = {
      'index': pageInfo.offset,
      'pageLength': pageInfo.pageSize,
      "fromCreatedDate": this.fromCreatedDate ? (moment(new Date(this.fromCreatedDate)).format("DD/MM/YYYY")) : '',
      "toCreatedDate": this.toCreatedDate ? (moment(new Date(this.toCreatedDate)).format("DD/MM/YYYY")) : '',
      'destination': this.destination,
      'invoice': this.invoice,
      'itemId': this.materialCode,
      'loadslipId': this.loadSlipId,
      'truckType': this.truckType,
      "type": this.type,
      'status': this.statusList,
      "lsStatus": this.loadslipstatustype,
      "truckNumber": this.truckNumber,
      "containerNum": this.container,
      "source": this.sourceCode,
      "destCountry": obj ? (obj.value) : '',
      "marketSegment": this.mktsegment,
      "shipmentId": this.shipmentId,
      "stopType": this.stopType,
      'itemCategories' : this.draftedLoadslipCategory,
      "insertUser": this.insertUser
    }
    this.getLoadslipMovementData(bodyData);

  }

  //show the filter
  showFilter() {
    this.isShow = !this.isShow
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


  clearAll() {
    this.fromCreatedDate = '';
    this.toCreatedDate = '';
    this.destination = '';
    this.destinationDesc = '';
    this.destinationList = [];
    this.descriptionList = [];
    this.invoice = '';
    this.materialCode = '';
    this.loadSlipId = '';
    this.shipmentId = '';
    this.truckType = [];
    this.stopType = '';
    this.loadslipstatustype = [];
    this.mktsegment =[];
    this.container = "";
    this.truckNumber = "";
    this.sourceCode = '';
    this.destCountryName = '';
    this.countryList = [];
    this.materilcodelist = [];
    this.transporter = '';
    this.draftedLoadslipCategory = [];
    this.insertUser = '';
  }

  viewDraftLoadSlipData(loadSlipData) {
    let loadSlipId = loadSlipData.loadslipId;
    let type = loadSlipData.type;
    if (loadSlipId != null) {
      if (type == 'FGS_EXP') {
        this.router.navigateByUrl('/load-slip-view-for-export/' + loadSlipId);
      } else if (type == 'JIT_OEM') {
        this.router.navigateByUrl('/load-slip-view-for-jit/' + loadSlipId);
      } else {
        this.router.navigateByUrl('/load-slip-view/' + loadSlipId);
      }
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
  onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }

  export() {
    if (this.loadSlipData.length > 0) {
      this.isLoading = true;
      // this.forDateValidation();
      let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
      let data = {
        "fromCreatedDate": this.fromCreatedDate ? (moment(new Date(this.fromCreatedDate)).format("DD/MM/YYYY")) : '',
        "toCreatedDate": this.toCreatedDate ? (moment(new Date(this.toCreatedDate)).format("DD/MM/YYYY")) : '',
        'destination': this.destination,
        'invoice': this.invoice,
        'itemId': this.materialCode,
        'loadslipId': this.loadSlipId,
        'truckType': this.truckType,
        "type": this.type,
        'status': this.statusList,
        "lsStatus": this.loadslipstatustype,
        "truckNumber": this.truckNumber,
        "containerNum": this.container,
        "source": this.sourceCode,
        "destCountry": obj ? (obj.value) : '',
        "marketSegment": this.mktsegment,
        "shipmentId": this.shipmentId,
        "stopType": this.stopType,
        'pageLength': this.page.count,
        "transporter" : this.transporter,
        'itemCategories' : this.draftedLoadslipCategory,
        "insertUser": this.insertUser
      }
      this.service.post_service(ApiserviceService.apisList.getLoadslipMomentDetails, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          let newPrintLoadslipData = response['data'].loadslips;
          let excelRawData = newPrintLoadslipData;
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            let data = {
              "Load Slip Id": excelRawData[i].loadslipId,
              "Shipment ID": excelRawData[i].shipmentId,
              "Source": excelRawData[i].sourceLoc,
              "Dest": excelRawData[i].destLoc,
              "Truck": excelRawData[i].truckNumber,
              "Dest Description": excelRawData[i].destDis,
              "Type": excelRawData[i].stopType,
              "Order Type": excelRawData[i].type,
              "Created Date": this.service.customDateTimeFormat(excelRawData[i].createdDate),

              "Truck/Cont Type": excelRawData[i].truckType,
              "Transporter": excelRawData[i].servprov,
              "STO/SO": excelRawData[i].stoSoNum,
              "Delivery": excelRawData[i].delivery,
              "Invoice": excelRawData[i].sapInvoice,
              "Invoice Date": this.service.customDateTimeFormat(excelRawData[i].sapInvoiceDate),
              "Actual Arrival Date": this.service.customDateFormat(excelRawData[i].actualArrivalDate),
              "LR": excelRawData[i].lrNum,
              "LR Date": this.service.customDateTimeFormat(excelRawData[i].lrDate),
              "Container": excelRawData[i].containerNum,
              "Country of Destination": excelRawData[i].destCountryName,
              "DIT_QTY": +excelRawData[i].ditQty,
              "SHORTAGE_QTY": +excelRawData[i].shortQty,
              "Total Loaded": +excelRawData[i].qty,
              "Tyre": +excelRawData[i].totTyres,
              "Tube": +excelRawData[i].totTubes,
              "Flap": +excelRawData[i].totFlaps,
              "Valve": +excelRawData[i].totValve,
              "PCTR": (excelRawData[i].totPctr) ? (+excelRawData[i].totPctr) : 0,
              "Other Qty": (excelRawData[i].otherQty)?(+excelRawData[i].otherQty):0,
              "Total Qty": +excelRawData[i].totQty,
              "GRN": excelRawData[i].grn,
              "GRN Date": this.service.customDateTimeFormat(excelRawData[i].grnDate),
              "Tranship": excelRawData[i].transhipment,
              "Freight Avail": excelRawData[i].freightAvailability,
              "Cat": excelRawData[i].itemCategory,
              "TTE Quantity": excelRawData[i].tteQty ? +excelRawData[i].tteQty.toFixed(2) : 0,
              "TTE Util": excelRawData[i].tteUtil ? +excelRawData[i].tteUtil .toFixed(2) : 0,
              "Weight Util": excelRawData[i].weightUtil ? +excelRawData[i].weightUtil.toFixed(2) : 0,
              "Volume Util": excelRawData[i].volumeUtil ? +excelRawData[i].volumeUtil.toFixed(2) : 0 ,
              "Drop Seq": excelRawData[i].dropSeq,
              "Arrived Bay": this.service.customDateTimeFormat(excelRawData[i].bayArrivedDate),
              "Print LS": this.service.customDateTimeFormat(excelRawData[i].lsPrintDate),
              "Send For Barcode": this.service.customDateTimeFormat(excelRawData[i].sendForBarcodeDate),
              "Loading Start": this.service.customDateTimeFormat(excelRawData[i].loadingStartDate),
              "Loading End": this.service.customDateTimeFormat(excelRawData[i].loadingEndDate),
              "Confirm": this.service.customDateTimeFormat(excelRawData[i].confirmedDate),
              "Release": this.service.customDateTimeFormat(excelRawData[i].releaseDate),
              "Driver Name": excelRawData[i].driverName,
              "Driver Mobile": excelRawData[i].driverMobile,
              "Driver License": excelRawData[i].driverLicense,
              "ReportDate": this.service.customDateTimeFormat(excelRawData[i].reportDate),
              "GateInDate": this.service.customDateTimeFormat(excelRawData[i].gateInDate),
              "GateOutDate": this.service.customDateTimeFormat(excelRawData[i].gateOutDate),
              "Insert User": excelRawData[i].insertUser,
              "Update User": excelRawData[i].updateUser,
              "Status": excelRawData[i].status,
              "Integration Status": excelRawData[i].integrationStatus,
              "Integration Msg": excelRawData[i].integrationMsg,
              "In Weight (Kg)": excelRawData[i].inWeight,
              "Out Weight (Kg)": excelRawData[i].outWeight,
              "Net Weight(Kg)": excelRawData[i].netWeight,
              "SAP invoice weight(Kg)": excelRawData[i].sapInvWeight,
              "Weight Diff (Kg)": excelRawData[i].diffInvWeight,
              "SAP invoice value(INR)": excelRawData[i].sapInvValue,
              "Eway bill No": excelRawData[i].ewayBillNo,
              "Loadslip Comments": excelRawData[i].loadslipcomments,
              "Gate Comments": excelRawData[i].comments,
              "MKT Seg": excelRawData[i].marketSegmentm,
              "Ft Trip ID": excelRawData[i].ftTripId,
              "Cust Inv Num": excelRawData[i].customInvoiceNumber
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'LoadslipMovement.xlsx');
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



  refreshData() {
    this.clearAll();
    this.table.offset = 0;
    this.currentDateAsString = this.helperService.getTodayDateASString();
    this.fromCreatedDate = this.currentDateAsString;
    this.toCreatedDate = this.fromCreatedDate;
    let bodyData = {
      "fromCreatedDate": this.fromCreatedDate ? (moment(new Date(this.fromCreatedDate)).format("DD/MM/YYYY")) : '',
      "toCreatedDate": this.toCreatedDate ? (moment(new Date(this.toCreatedDate)).format("DD/MM/YYYY")) : '',
      "type": this.type,
      "status": ["INTRANSIT", "COMPLETED", "DELIVERED", "UNLOADING", "CREATED", "PRINTED", "LOADING", "LOADED", "SENT_SAP"],
    }
    this.getLoadslipMovementData(bodyData);
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

  getMarketSegment() {
    this.service.get_service(ApiserviceService.apisList.getMarketSegment).subscribe(response => {
      if (response['statusCode'] == '200') {
        this.mktsegmentList = response['data'];
      } else {
        this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!')
      }
    })
  }

}
