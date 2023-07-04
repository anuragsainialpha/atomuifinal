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
import { NgForm } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;
@Component({
  selector: 'app-drafted-loadslips',
  templateUrl: './drafted-loadslips.component.html',
  styleUrls: ['./drafted-loadslips.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class DraftedLoadslipsComponent implements OnInit, DoCheck {
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
  destination: any;
  destinationDesc: any;
  descriptionList = [];
  truckType=[];
  materialCode: any;
  type: any;
  loadSlipId: any;
  transhipment: any;
  invoice: any;
  mktsegment=[];
  shipmentId: string;
  loadslipComments: string;
  rowloadslipId: string;
  roles: any;
  currentDate = '';
  currentDateAsString = '';
  statusList = ["CREATED", "PRINTED", "LOADING", "LOADED", "SENT_SAP"];
  mktsegmentList = [];
  truckList = [];
  fromCreatedDate: string = '';
  toCreatedDate: string = '';
  toDate: string = '';
  fromDate: string = '';
  integrationMsg: string;
  loadslipstatus = [];
  loadslipstatustype=[];
  // Role_DP_REP: string;
  truckNumber: any;
  container: string;
  check_Role_DP_REP: string
  sourceList: any[];
  sourceCode: any;
  transporter: any;
  transporterList: any[];
  destCountryName: string;
  countryList: any[];
  lsCategoryList = [];
  draftedLoadslipCategory = [];
  trackingConsentStatus = '';
  consentPhoneTelecom = '';
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rowData: any = {};
  selectedLoadslipId: any;
  freezeLeftValue: boolean = true;
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
    this.loadSlipId = this.activatedRoute.snapshot.params['loadslipId']
    this.roles = constants.roles;
    this.loadslipstatus = constants.draftedLoadlslipstatus;
    this.check_Role_DP_REP = this.service.checkRole();
    //get the load slip based on search 
    if (this.loadSlipId) {
      this.loadSlipId = this.loadSlipId
    }
    this.forDateValidation();
    let bodyData = {
      // 'fromCreatedDate': this.currentDate,
      // 'toCreatedDate': this.currentDate,
      'loadslipId': this.loadSlipId,
      'type': loadslipStatus.created + "," + loadslipStatus.printed + "," + loadslipStatus.loading + "," + loadslipStatus.loaded + "," + loadslipStatus.sentSAP,
      'status': this.statusList
    }
    this.fromDate = this.currentDateAsString;
    this.toDate = this.fromDate;
    this.getDraftLoadSlipData(bodyData);

    // for getting truck type master
    this.getTruckTypeMasterData();
    this.getMarketSegment();
    this.getLSCategoryList();

    // this.Role_DP_REP = this.service.checkRole();
  }

  // Checking if the logged in role is DP_REP or L1_MGR or L2_MGR
  isDPREPRole(){
    if(this.service.checkRole() == this.roles.planner3 || this.service.checkRole() == this.roles.L1MGR || this.service.checkRole() == this.roles.L2MGR){
      return true;
    }else{
      return false;
    }
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
    // this.fromDate = this.currentDateAsString;
    // this.toDate = this.fromDate;
    this.table.offset = 0;
    let bodyData = {
      // 'fromCreatedDate': this.currentDate,
      // 'toCreatedDate': this.currentDate,
      'type': loadslipStatus.created + "," + loadslipStatus.printed + "," + loadslipStatus.loading + "," + loadslipStatus.loaded + "," + loadslipStatus.sentSAP,
      'status': this.statusList,
    }
    this.getDraftLoadSlipData(bodyData);
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

  addEvent(type, event) {
    if (event.target.value) {
       /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
      if(this.toDate && (this.fromDate > this.toDate)){
        this.toDate = '';
      }
      // this.toDate = '';
    }
  }
  onFooterPage(pageInfo){
    console.log(pageInfo);
    
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
    this.mktsegment = [];
    this.destinationDesc = "";
    this.descriptionList = [];
    this.destinationList = [];
    this.materilcodelist = [];
    this.shipmentId = '';
    this.fromDate = '';
    this.toDate = '';
    this.loadslipstatustype = [];
    this.truckNumber = '';
    this.container = '';
    this.sourceCode = '';
    this.transporter = '';
    this.destCountryName = '';
    this.countryList = [];
    this.draftedLoadslipCategory = [];
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

  // drafted load slips filter creatria
  getDraftLoadSlipData(bodyData) {
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

  // for filter load slip data
  filterDraftLoadSlip() {
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
      'type': loadslipStatus.created + "," + loadslipStatus.printed + "," + loadslipStatus.loading + "," + loadslipStatus.loaded + "," + loadslipStatus.sentSAP,
      'status': this.statusList,
      "lsStatus": this.loadslipstatustype,
      "truckNumber": this.truckNumber,
      "containerNum": this.container,
      "source": this.sourceCode,
      "transporter": this.transporter,
      "destCountry": obj ? (obj.value) : '',
      'itemCategories' : this.draftedLoadslipCategory
      ,
              "trackingConsentStatus": this.trackingConsentStatus,
              "consentPhoneTelecom": this.consentPhoneTelecom,
    }

    if (this.fromDate != '' && this.fromDate != null) 
    {
      if (this.toDate != '' && this.toDate != null) {
        this.getDraftLoadSlipData(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.getDraftLoadSlipData(bodyData);
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
        'type': loadslipStatus.created + "," + loadslipStatus.printed + "," + loadslipStatus.loading + "," + loadslipStatus.loaded + "," + loadslipStatus.sentSAP,
        'status': this.statusList,
        'pageLength': this.page.count,
        "lsStatus": this.loadslipstatustype,
        "truckNumber": this.truckNumber,
        "containerNum": this.container,
        "source": this.sourceCode,
        "transporter": this.transporter,
        "destCountry": obj ? (obj.value) : '',
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
              "PCTR": (excelRawData[i].totPctr) ? (+excelRawData[i].totPctr) : 0,
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
              "Insert User": excelRawData[i].insertUser,
              "Update User": excelRawData[i].updateUser,
              "Status": excelRawData[i].status,
              // "Integration Status": excelRawData[i].integrationStatus,
              // "Integration Message": "",
              "Loadslip Comments": excelRawData[i].comments,
              "SAP invoice weight(Kg)": excelRawData[i].sapInvWeight,
              "SAP invoice value(INR)": excelRawData[i].sapInvValue,
              "Eway bill No": excelRawData[i].ewayBillNo,
              "MKT Seg": excelRawData[i].marketSegment,
              "Cust Inv Num": excelRawData[i].customInvoiceNumber,
              "Tracking Consent Status": excelRawData[i].trackingConsentStatus,
              "Consent Phone Tracking": excelRawData[i].consentPhoneTelecom
              
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'DraftedLoadslips.xlsx');
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
      'type': loadslipStatus.created + "," + loadslipStatus.printed + "," + loadslipStatus.loading + "," + loadslipStatus.loaded + "," + loadslipStatus.sentSAP,
      'status': this.statusList,
      "lsStatus": this.loadslipstatustype,
      "truckNumber": this.truckNumber,
      "containerNum": this.container,
      "source": this.sourceCode,
      "transporter": this.transporter,
      "destCountry": obj ? (obj.value) : '',
      'itemCategories' : this.draftedLoadslipCategory,
    }
    this.getDraftLoadSlipData(bodyData);

  }

  //cancel Loadslip 
  cancelLoadslip(loadslipId) {
    this.isLoading = true;
    let data;
    this.service.post_service(ApiserviceService.apisList.cancelLoadslip + "/" + loadslipId, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        // let responseData = response['data'].loadslips;
        let modifybleIndex = this.draftedLoadslipsList.findIndex(resp => resp.loadslipId == loadslipId);
        this.draftedLoadslipsList.splice(modifybleIndex, 1)
        // this.draftedLoadslipsList[modifybleIndex]=responseData;
        this.draftedLoadslipsList = [...this.draftedLoadslipsList]
        // this.page.count = response['data'].total;
        // this.page.limit = response['data'].pageLength;
        this.toastr.success(response['message']);
        $('#confirmDelete').modal('hide');
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        $('#confirmDelete').modal('hide');

      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
      $('#confirmDelete').modal('hide');

    })
  }

  viewDraftLoadSlipData(loadSlipData) {
    let loadSlipId = loadSlipData.loadslipId;
    let type = loadSlipData.type;
    // For DP_REP View loadslip data can't be edit only view , that why we are navigating 
    // view only pages 
    // Else condition we are navigating to 
    if (this.check_Role_DP_REP == 'DP_REP' || this.check_Role_DP_REP == 'L1_MGR' || 
    this.check_Role_DP_REP == 'L2_MGR' ) {
      if (loadSlipId != null) {
        if (type == 'FGS_EXP') {
          this.router.navigateByUrl('/load-slip-view-for-export/' + loadSlipId);
        } else if (type == 'JIT_OEM') {
          this.router.navigateByUrl('/load-slip-view-for-jit/' + loadSlipId);
        } else {
          this.router.navigateByUrl('/load-slip-view/' + loadSlipId);
        }
      }
    } else {
      if (loadSlipId != null) {
        if (type == 'FGS_EXP') {
          this.router.navigateByUrl('/fgs/create-load-slip-for-export/' + loadSlipId);
        } else if (type == 'JIT_OEM') {
          this.router.navigateByUrl('/jit/create-load-slip-for-jit/' + loadSlipId);
        } else {
          this.router.navigateByUrl('/fgs/create-load-slip/' + loadSlipId);
        }
      }
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

  // check the cancel loadslip or not
  // IsCancelLoadslip(row) {
  //   //for FGS ROLE
  //   if ((this.service.checkRole() == this.roles.fgsOperations1) || (this.service.checkRole() == this.roles.fgsOperations2) || (this.service.checkRole() == this.roles.fgsOperations3) ||
  //     (this.service.checkRole() == this.roles.fgsOperations4)) {
  //     if (!row.sapInvoiceAvailable && (row.type != 'FGS_EXP')) {
  //       return true;
  //     } else if (row.type == 'FGS_EXP') {
  //       return true;
  //     } else {
  //       return false
  //     }
  //     //for RDC 
  //   } else if (this.service.checkRole() == this.roles.rdc_PLN) {
  //     if (!row.sapInvoiceAvailable && (row.type != 'RDC_EXP')) {
  //       return true;
  //     } else if (row.type == 'RDC_EXP') {
  //       return true;
  //     } else {
  //       return false
  //     }
  //     // For JIT
  //   } else if (this.service.checkRole() == this.roles.JIT_OPERATION) {
  //     if (!row.sapInvoiceAvailable && (row.type != 'JIT_OEM')) {
  //       return true;
  //     } else if (row.type == 'JIT_OEM') {
  //       return true;
  //     } else {
  //       return false
  //     }
  //   }
  // }

  showIntegrationMessage(data, type) {
    if (type == 'loadslipComments') {
      this.integrationMsg = data.comments;
    } else {
      this.integrationMsg = data.integrationMsg;
    }
    $('#integrationMsgModal').modal('show');

  }

  showComments(comment, row) {
    this.loadslipComments = comment;
    this.rowData  = row;
    $("#myModal").modal('show');
  }

  save(form: NgForm) {
    if (form.valid) {

      this.isLoading = true;
      // let data = {
      //   "comments": this.loadslipComments,
      //   "loadSlipId": this.rowloadslipId
      // }
      // Sending the entire row to the backend
      let data = this.rowData;
      data.comments = this.loadslipComments;
      this.service.post_service(ApiserviceService.apisList.saveloadslipComments, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          this.isLoading = false;
          let index = this.draftedLoadslipsList.findIndex(item => item.loadslipId == response['data'].loadslipId);
          this.draftedLoadslipsList[index] = response['data'];
          this.draftedLoadslipsList = [...this.draftedLoadslipsList]
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

  confirmCancelAction(loadslipId){
    this.selectedLoadslipId = loadslipId;
    $('#confirmDelete').modal('show');
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}

