import { HelperServiceService } from './../../services/helper-service/helper-service.service';
import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { APP_DATE_FORMATS, AppDateAdapter } from 'src/app/public/date.adapters';
import { loadslipStatus, constants } from 'src/app/constants';
import * as moment from 'moment';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any
@Component({
  selector: 'app-cancelled-loadslips',
  templateUrl: './cancelled-loadslips.component.html',
  styleUrls: ['./cancelled-loadslips.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class CancelledLoadslipsComponent implements OnInit,DoCheck {
  isLoading: boolean = false;
  draftedLoadslipsList = [];
  page = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  isShow: boolean = true;
  destinationList: any[];
  materilcodelist: any[];
  destination: string;
  destinationDesc: string;
  descriptionList: any[];
  truckType = [];
  materialCode: any;
  type: any;
  loadSlipId: string;
  transhipment: any;
  invoice: any;
  mktsegment = [];
  shipmentId: string;
  statusList = ["CANCELLED"];
  mktsegmentList = [];
  truckList = [];
  currentDate = this.helperService.getTodayDate();
  currentDateAsString = this.helperService.getTodayDateASString();
  fromCreatedDate: string = '';
  toCreatedDate: string = '';
  toDate: string = '';
  fromDate: string = '';
  integrationMsg: string
  container: any;
  truckNumber: any;
  check_Role_DP_REP: string;
  sourceCode: string;
  sourceList: any[];
  roles: any;
  countryList: any[];
  destCountryName: string;
  transporterList: any[];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  transporter: any;
  freezeLeftValue: boolean = true;
  constructor(
    private service: ApiserviceService,
    private toastr: ToastrService,
    private helperService: HelperServiceService,
    private router: Router,
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
    localStorage.setItem("userMenu", "load-slip");
    this.loadSlipId = this.activatedRoute.snapshot.params['loadslipId']
    this.check_Role_DP_REP = this.service.checkRole();
    this.roles = constants.roles;
    //get the loadslip based on search 
    if (this.loadSlipId) {
      this.loadSlipId = this.loadSlipId
    }
    this.fromDate = this.currentDateAsString;
    this.toDate = this.fromDate;
    let bodyData = {
      'fromCreatedDate': this.currentDate,
      'toCreatedDate': this.currentDate,
      'loadslipId': this.loadSlipId,
      'type': loadslipStatus.cancelled,
      'status': this.statusList
    }
    this.getCancelLoadSlipData(bodyData);

    // for getting truck type master
    this.getTruckTypeMasterData();

    this.getMarketSegment();
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
  onFooterPage(pageInfo) {
    console.log(pageInfo);

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

  // Refresh data
  refreshData() {
    this.clearAll();
    this.table.offset = 0;
    this.currentDateAsString = this.helperService.getTodayDateASString();
    this.fromDate = this.currentDateAsString;
    this.toDate = this.fromDate;
    let bodyData = {
      'fromCreatedDate': this.currentDate,
      'toCreatedDate': this.currentDate,
      'type': loadslipStatus.cancelled,
      'status': this.statusList
    }
    this.getCancelLoadSlipData(bodyData);
  }

  //clear data 
  clearAll() {
    this.destination = '';
    this.destinationDesc = '';
    this.descriptionList = [];
    this.invoice = "";
    this.materialCode = "";
    this.loadSlipId = "";
    this.type = "";
    this.transhipment = "";
    this.truckType = [];
    this.mktsegment = [];
    this.destinationList = [];
    this.materilcodelist = [];
    this.shipmentId = '';
    this.toDate = '';
    this.fromDate = '';
    this.truckNumber = "";
    this.container = "";
    this.sourceCode = '';
    this.destCountryName = '';
    this.countryList = [];
    this.transporter = '';
  }
  // drafted load slips filter creatria
  getCancelLoadSlipData(bodyData) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getDraftedLoadslips, bodyData).subscribe(response => {
      if (response['statusCode'] == 200) {
        let responseData = response['data'].loadslips;
        this.draftedLoadslipsList = responseData;
        this.draftedLoadslipsList = [...this.draftedLoadslipsList]
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
  filterCancelLoadSlip() {
    this.table.offset = 0;
    this.forDateValidation();
    let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
    let bodyData = {
      'fromCreatedDate': this.fromCreatedDate,
      'toCreatedDate': this.toCreatedDate,
      'marketSegment': this.mktsegment,
      'destination': this.destination,
      'invoice': this.invoice,
      'itemId': this.materialCode,
      'loadslipId': this.loadSlipId,
      'stopType': this.type,
      'transhipment': this.transhipment,
      'shipmentId': this.shipmentId,
      'truckType': this.truckType,
      'type': loadslipStatus.cancelled,
      // 'pageLength': this.page.count,
      'status': this.statusList,
      "truckNumber": this.truckNumber,
      "containerNum": this.container,
      "source": this.sourceCode,
      "destCountry": obj ? (obj.value) : '',
      "transporter": this.transporter
    }
    if (this.fromDate != '' && this.fromDate != null) {
      if (this.toDate != '' && this.toDate != null) {
        this.getCancelLoadSlipData(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.getCancelLoadSlipData(bodyData);
    }

  }

  // export to excel file
  export() {
    if (this.draftedLoadslipsList.length > 0) {
      this.isLoading = true;
      this.forDateValidation();
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
        'shipmentId': this.shipmentId,
        'truckType': this.truckType,
        'type': loadslipStatus.cancelled,
        'pageLength': this.page.count,
        'status': this.statusList,
        "truckNumber": this.truckNumber,
        "containerNum": this.container,
        "source": this.sourceCode,
        "destCountry": obj ? (obj.value) : '',
        "transporter": this.transporter
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

              "Truck Type": excelRawData[i].truckType,
              "Transporter": excelRawData[i].servprov,
              "STO/SO": excelRawData[i].stoSoNum,
              "Delivery": excelRawData[i].delivery,
              "Invoice": excelRawData[i].sapInvoice,
              "Invoice Date": excelRawData[i].sapInvoiceDate,
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
              "PCTR": (excelRawData[i].totPctr) ? (+excelRawData[i].totPctr) : 0,
              "Other Qty": (excelRawData[i].otherQty) ? (+excelRawData[i].otherQty) : 0,
              "Total Qty": +excelRawData[i].totQty,
              "GRN": excelRawData[i].grn,
              "Transhipment": excelRawData[i].transhipment,
              "Freight Available": excelRawData[i].freightAvailability,
              "TTE Quantity": excelRawData[i].tteQty ? +excelRawData[i].tteQty.toFixed(2) : 0,
              "Item Cate": excelRawData[i].itemCategory,
              "TTE Util": excelRawData[i].tteUtil ? +excelRawData[i].tteUtil.toFixed(2) : 0,
              "Weight Util": excelRawData[i].weightUtil ? +excelRawData[i].weightUtil.toFixed(2) : 0,
              "Volume Util": excelRawData[i].volumeUtil ? +excelRawData[i].volumeUtil.toFixed(2) : 0,
              "Drop Seq": excelRawData[i].dropSeq,
              "Arrived Bay": this.service.customDateTimeFormat(excelRawData[i].bayArrivedDate),
              "Print LS": this.service.customDateTimeFormat(excelRawData[i].lsPrintDate),
              "Send For Barcode": this.service.customDateTimeFormat(excelRawData[i].sendForBarcodeDate),
              "Loading Start": this.service.customDateTimeFormat(excelRawData[i].loadingStartDate),
              "Loading End": this.service.customDateTimeFormat(excelRawData[i].loadingEndDate),
              "Confirm": this.service.customDateTimeFormat(excelRawData[i].confirmedDate),
              "Release": this.service.customDateTimeFormat(excelRawData[i].releaseDate),
              "Insert User": excelRawData[i].insertUser,
              "Update User": excelRawData[i].updateUser,
              "Loadslip Comments": excelRawData[i].comments,
              "Status": excelRawData[i].status,
              "MKT Seg": excelRawData[i].marketSegment,
              "Cust Inv Num": excelRawData[i].customInvoiceNumber
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'CancelLoadslips.xlsx');
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
    }
  }

  showComments(comment) {
    this.integrationMsg = comment;
    $('#integrationMsgModal').modal('show');
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

  //server side pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.forDateValidation();
    let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
    let bodyData = {
      'fromCreatedDate': this.fromCreatedDate,
      'toCreatedDate': this.toCreatedDate,
      'index': pageInfo.offset,
      'pageLength': pageInfo.pageSize,
      'marketSegment': this.mktsegment,
      'destination': this.destination,
      'invoice': this.invoice,
      'itemId': this.materialCode,
      'loadslipId': this.loadSlipId,
      'stopType': this.type,
      'transhipment': this.transhipment,
      'shipmentId': this.shipmentId,
      'truckType': this.truckType,
      'type': loadslipStatus.cancelled,
      'status': this.statusList,
      "truckNumber": this.truckNumber,
      "containerNum": this.container,
      "source": this.sourceCode,
      "transporter": this.transporter,
      "destCountry": obj ? (obj.value) : ''
    }
    this.getCancelLoadSlipData(bodyData);
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

  //set value destination
  setDestination(value) {
    //  this.destinationDesc = value;
    this.destination = value;
  }

  //set value to destination description
  setDestDescription(value) {
    this.destinationDesc = value;
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
}
