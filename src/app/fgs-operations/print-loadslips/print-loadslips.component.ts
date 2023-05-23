import { HelperServiceService } from './../../services/helper-service/helper-service.service';
import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { loadslipStatus, constants } from 'src/app/constants';
import * as XLSX from 'xlsx';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/public/date.adapters';
import * as moment from 'moment';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;

@Component({
  selector: 'app-print-loadslips',
  templateUrl: './print-loadslips.component.html',
  styleUrls: ['./print-loadslips.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class PrintLoadslipsComponent implements OnInit, DoCheck {
  statusList = ["INTRANSIT", "COMPLETED", "DELIVERED", "UNLOADING"];
  isLoading: boolean = false;
  page = {
    limit: 100,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  printedLoadslipsList = [];
  destination: any;
  destinationDesc: any;
  descriptionList = [];
  invoice: any;
  materialCode: any;
  loadSlipId: any;
  type: any;
  transhipment: any;
  truckType=[];
  isShow: boolean = true;
  materilcodelist: any[];
  destinationList: any;
  mktsegment=[];
  roles: any;
  shipmentId: string;
  mktsegmentList = [];
  truckList = [];
  currentDate = this.helperService.getTodayDate();
  currentDateAsString = this.helperService.getTodayDateASString();
  fromCreatedDate: string = '';
  toCreatedDate: string = '';
  toDate: string = '';
  fromDate: string = '';
  integrationMsg: any;
  draftedLoadslipsList = [];
  draftedLoadslipStatusType=[];
  check_Role_DP_REP: string;
  sourceCode: string;
  sourceList: any[];
  truckNumber: any;
  container: any;
  countryList: any[];
  destCountryName: string;
  transporterList: any[];
  lsCategoryList = [];
  draftedLoadslipCategory = [];
  freezeLeftValue: boolean = true;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  transporter: any;
  constructor(
    private service: ApiserviceService,
    private toastr: ToastrService,
    private router: Router,
    private helperService: HelperServiceService,
    private activatedRoute: ActivatedRoute
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
    localStorage.setItem("userMenu", "load-slip");
    this.loadSlipId = this.activatedRoute.snapshot.params['loadslipId']
    this.draftedLoadslipsList = constants.viewLoadlslipstatus;
    this.check_Role_DP_REP = this.service.checkRole();
    // for getting view load slip data
    if (this.loadSlipId) {
      this.loadSlipId = this.loadSlipId
    }
    this.forDateValidation();
    this.fromDate = this.currentDateAsString;
    this.toDate = this.fromDate;
    let bodyData = {
      'fromCreatedDate': this.currentDate,
      'toCreatedDate': this.currentDate,
      'loadslipId': this.loadSlipId,
      'type': loadslipStatus.intransit + "," + loadslipStatus.completed + ',' + loadslipStatus.delivered + ',' + loadslipStatus.unloading,
      'status': this.statusList
    }
    this.getPrintedLoadslips(bodyData);

    // for getting truck type master
    this.getTruckTypeMasterData();
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


  addEvent(type, event) {
    if (event.target.value) {
       /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
      let checkToDate: any = this.toDate;
      console.log("Check--->1", checkToDate);
      if (this.toDate == this.currentDateAsString) {
        // on page load we are defaluting the  to date with string. Comparing string with date is not possible
        // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
        checkToDate = new Date();
        console.log("Check--->2", checkToDate);

      }
      if (this.toDate && (this.fromDate > checkToDate)) {
        this.toDate = '';
      }
      // this.toDate = '';
    }
  }


  //clear data 
  clearAll() {
    this.destination = '';
    this.invoice = "";
    this.materialCode = "";
    this.loadSlipId = "";
    this.type = "";
    this.transhipment = "";
    this.truckType = [];
    this.mktsegment =[];
    this.destinationDesc = "";
    this.descriptionList = [];
    this.destinationList = [];
    this.materilcodelist = [];
    this.shipmentId = '';
    this.toDate = '';
    this.fromDate = '';
    this.draftedLoadslipStatusType = [];
    this.sourceCode = '';
    this.sourceList = [];
    this.truckNumber = '';
    this.container = '';
    this.destCountryName = '';
    this.countryList = [];
    this.transporter='';
    this.draftedLoadslipCategory = [];
  }
  // Date Validation
  forDateValidation() {
    if (this.fromDate != '' && this.fromDate != null) {
      this.fromCreatedDate = moment(new Date(this.fromDate)).format("DD/MM/YYYY");
    } else {
      this.fromCreatedDate = '';
    }
    if (this.toDate != '' && this.toDate != null) {
      this.toCreatedDate = moment(new Date(this.toDate)).format("DD/MM/YYYY");
    } else {
      this.toCreatedDate = '';
    }
  }
  filerViewLoadSlip() {
    this.table.offset = 0;
    this.forDateValidation();
    let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
    let bodyData = {
      'fromCreatedDate': this.fromCreatedDate,
      'toCreatedDate': this.toCreatedDate,
      'destination': this.destination,
      'invoice': this.invoice,
      'itemId': this.materialCode,
      'loadslipId': this.loadSlipId,
      'stopType': this.type,
      'transhipment': this.transhipment,
      'truckType': this.truckType,
      'marketSegment': this.mktsegment,
      'shipmentId': this.shipmentId,
      'type': loadslipStatus.intransit + "," + loadslipStatus.completed + ',' + loadslipStatus.delivered + ',' + loadslipStatus.unloading,
      'status': this.statusList,
      "lsStatus": this.draftedLoadslipStatusType,
      "source": this.sourceCode,
      "truckNumber": this.truckNumber,
      "containerNum": this.container,
      "destCountry": obj ? (obj.value) : '',
      "transporter" : this.transporter,
      'itemCategories' : this.draftedLoadslipCategory,
    }
    if (this.fromDate != '' && this.fromDate != null) {
      if (this.toDate != '' && this.toDate != null) {
        this.getPrintedLoadslips(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.getPrintedLoadslips(bodyData);
    }
  }
  //get the printed load slips in Loading the page
  getPrintedLoadslips(bodyData) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getDraftedLoadslips, bodyData).subscribe(response => {
      if (response['statusCode'] == 200) {
        let responseData = response['data'].loadslips;
        this.printedLoadslipsList = responseData;
        this.printedLoadslipsList = [...this.printedLoadslipsList]
        this.page.count = response['data'].total;
        this.page.limit = response['data'].pageLength;
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
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

  showIntegrationMessage(integrationMsg) {
    this.integrationMsg = integrationMsg;
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

  // export to excel file
  export() {
    if (this.printedLoadslipsList.length > 0) {
      this.isLoading = true;
      let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
      let data = {
        'fromCreatedDate': this.fromCreatedDate,
        'toCreatedDate': this.toCreatedDate,
        'marketSegment': this.mktsegment,
        'destination': this.destination,
        'invoice': this.invoice,
        'itemId': this.materialCode,
        'loadslipId': this.loadSlipId,
        'stopType': this.type,
        'transhipment': this.transhipment,
        'truckType': this.truckType,
        'pageLength': this.page.count,
        'shipmentId': this.shipmentId,
        'type': loadslipStatus.intransit + "," + loadslipStatus.completed + ',' + loadslipStatus.delivered + ',' + loadslipStatus.unloading,
        'status': this.statusList,
        "lsStatus": this.draftedLoadslipStatusType,
        "source": this.sourceCode,
        "truckNumber": this.truckNumber,
        "containerNum": this.container,
        "destCountry": obj ? (obj.value) : '',
        "transporter": this.transporter,
        'itemCategories' : this.draftedLoadslipCategory,

      }
      this.service.post_service(ApiserviceService.apisList.getDraftedLoadslips, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          let newPrintLoadslipData = response['data'].loadslips;
          let excelRawData = newPrintLoadslipData;
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            let data = {
              "Load Slip ID": excelRawData[i].loadslipId,
              "Shipment Id": excelRawData[i].shipmentId,
              "Source": excelRawData[i].sourceLoc,
              "Destination": excelRawData[i].destLoc,
              "Truck Number": excelRawData[i].truckNumber,
              "Dest Description": excelRawData[i].destDis,
              "Type": excelRawData[i].stopType,
              "Order Type": excelRawData[i].type,
              "Created Date": this.service.customDateTimeFormat(excelRawData[i].createdDate),

              "Truck/Container Type": excelRawData[i].truckType,
              "Transporter": excelRawData[i].servprov,
              "STO/SO": excelRawData[i].stoSoNum,
              "Delivery": excelRawData[i].delivery,
              "Invoice": excelRawData[i].sapInvoice,
              "Invoice Date": this.service.customDateTimeFormat(excelRawData[i].sapInvoiceDate),
              "Actual Arrival Date": excelRawData[i].actualArrivalDate,
              "LR": excelRawData[i].lrNum,
              "LR Date": this.service.customDateTimeFormat(excelRawData[i].lrDate),
              "Container": excelRawData[i].containerNum,
              "Country of Destination": excelRawData[i].destCountryName,
              "DIT Quantity": excelRawData[i].ditQty,
              "Shortage Quantity": excelRawData[i].shortQty,
              "Total Loaded": excelRawData[i].qty,
              "Tyre": +excelRawData[i].totTyres,
              "Tube": +excelRawData[i].totTubes,
              "Flap": +excelRawData[i].totFlaps,
              "Valve": +excelRawData[i].totValve,
              "PCTR": (excelRawData[i].pctr) ? (+excelRawData[i].pctr) : 0,
              "Other Qty": (excelRawData[i].otherQty) ? (+excelRawData[i].otherQty) : 0,
              "Total Qty": +excelRawData[i].totQty,
              "GRN": excelRawData[i].grn,
              "GRN Date": this.service.customDateTimeFormat(excelRawData[i].grnDate),
              "Transhipment": excelRawData[i].transhipment,
              "Freight Available": excelRawData[i].freightAvailability,
              "Item Category": excelRawData[i].itemCategory,
              "TTE Quantity": excelRawData[i].tteQty ? +excelRawData[i].tteQty.toFixed(2) : 0,
              "TTE Util": excelRawData[i].tteUtil ? +excelRawData[i].tteUtil .toFixed(2) : 0,
              "Weight Util": excelRawData[i].weightUtil ? +excelRawData[i].weightUtil.toFixed(2) : 0,
              "Volume Util": excelRawData[i].volumeUtil ? +excelRawData[i].volumeUtil.toFixed(2) : 0 ,
              "Drop Sequence": excelRawData[i].dropSeq,
              "Arrived Bay": this.service.customDateTimeFormat(excelRawData[i].bayArrivedDate),
              "Print LS": this.service.customDateTimeFormat(excelRawData[i].lsPrintDate),
              "Send For Barcode": this.service.customDateTimeFormat(excelRawData[i].sendForBarcodeDate),
              "Loading Start": this.service.customDateTimeFormat(excelRawData[i].loadingStartDate),
              "Loading End": this.service.customDateTimeFormat(excelRawData[i].loadingEndDate),
              "Confirm": this.service.customDateTimeFormat(excelRawData[i].confirmedDate),
              "Release": this.service.customDateTimeFormat(excelRawData[i].releaseDate),
              // "Send For BarCode Date": this.service.customDateTimeFormat(excelRawData[i].sendForBarcodeDate),
              "Insert User": excelRawData[i].insertUser,
              "Update User": excelRawData[i].updateUser,
              "Status": excelRawData[i].status,
              "Integration Status": excelRawData[i].integrationStatus,
              "Loadslip Comments": excelRawData[i].comments,
              "SAP invoice value(INR)": excelRawData[i].sapInvValue,
              "SAP invoice weight(Kg)": excelRawData[i].sapInvWeight,
              "Eway bill No": excelRawData[i].ewayBillNo,
              "MKT Seg": excelRawData[i].marketSegment,
              "FT Trip ID":excelRawData[i].ftTripId,
              "Cust Inv Num": excelRawData[i].customInvoiceNumber
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'ViewLoadslips.xlsx');
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

  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }
  // Refresh data
  refreshData() {
    this.table.offset = 0;
    this.clearAll();
    this.currentDateAsString = this.helperService.getTodayDateASString();
    this.fromDate = this.currentDateAsString;
    this.toDate = this.fromDate;
    this.forDateValidation();
    let bodyData = {
      'fromCreatedDate': this.currentDate,
      'toCreatedDate': this.currentDate,
      'type': loadslipStatus.intransit + "," + loadslipStatus.completed + ',' + loadslipStatus.delivered + ',' + loadslipStatus.unloading,
      'status': this.statusList
    }
    this.getPrintedLoadslips(bodyData);

  }
  onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }

  //server side pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.forDateValidation();
    let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
    let bodyData = {
      'fromCreatedDate': this.fromCreatedDate,
      'toCreatedDate': this.toCreatedDate,
      'index': pageInfo.offset,
      'pageLength': pageInfo.pageSize,
      'destination': this.destination,
      'invoice': this.invoice,
      'itemId': this.materialCode,
      'loadslipId': this.loadSlipId,
      'stopType': this.type,
      'transhipment': this.transhipment,
      'truckType': this.truckType,
      'marketSegment': this.mktsegment,
      'shipmentId': this.shipmentId,
      'type': loadslipStatus.intransit + "," + loadslipStatus.completed + ',' + loadslipStatus.delivered + ',' + loadslipStatus.unloading,
      'status': this.statusList,
      "lsStatus": this.draftedLoadslipStatusType,
      "source": this.sourceCode,
      "truckNumber": this.truckNumber,
      "containerNum": this.container,
      "transporter": this.transporter,
      "destCountry": obj ? (obj.value) : '',
      'itemCategories' : this.draftedLoadslipCategory,
    }
    this.getPrintedLoadslips(bodyData);
  }
  //cancel Loadslip 
  cancelLoadslip(loadslipId) {
    this.isLoading = true;
    let data;
    this.service.post_service(ApiserviceService.apisList.cancelLoadslip + "/" + loadslipId, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        // let responseData = response['data'].loadslips;
        let modifybleIndex = this.printedLoadslipsList.findIndex(resp => resp.loadslipId == loadslipId);
        // this.printedLoadslipsList[modifybleIndex]=responseData;
        this.printedLoadslipsList.splice(modifybleIndex, 1)
        this.printedLoadslipsList = [...this.printedLoadslipsList]
        // this.page.count = response['data'].total;
        // this.page.limit = response['data'].pageLength;
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

  //set value destination
  setDestination(value) {
    //  this.destinationDesc = value;
    this.destination = value;
  }

  //set value to destination description
  setDestDescription(value) {
    this.destinationDesc = value;
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

  viewLoadSlipData(loadSlipData) {
    let loadSlipId = loadSlipData.loadslipId;
    let type = loadSlipData.type;
    if (type == 'FGS_EXP') {
      this.router.navigateByUrl('/load-slip-view-for-export/' + loadSlipId);
    } else if (type == 'JIT_OEM') {
      this.router.navigateByUrl('/load-slip-view-for-jit/' + loadSlipId);
    } else {
      this.router.navigateByUrl('/load-slip-view/' + loadSlipId);
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
  goToLink(url: string){
    window.open(url, "_blank");
  }

}
