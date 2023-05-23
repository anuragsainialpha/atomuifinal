import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { constants } from 'src/app/constants';
import { DateAdapter, MAT_DATE_FORMATS, MatDatepickerInputEvent } from '@angular/material';
import { APP_DATE_FORMATS, AppDateAdapter } from 'src/app/public/date.adapters';
import * as moment from 'moment';
import * as XLSX from 'xlsx';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { HelperServiceService } from 'src/app/services/helper-service/helper-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class HomeComponent implements OnInit {

  firstPlanData = [];
  secondPlanData = [];
  thirdPlanData = [];
  fourthPlanData = [];
  openPlanSourceList = [];
  truckStatusStatics: any;
  isLoading: boolean = false;
  roles: { "planner1": string; "plannner2": string; "planner3": string; "transporter": string; "fgsOperations1": string; "fgsOperations2": string; "fgsOperations4": string; "gateSecurity": string; "rdc_PLN": string; "rdc_GAT": string; "JIT_OPERATION": string; "JIT_GATE_SECURITY": string; "L1MGR": string; "L2MGR": string; };
  locations = [];
  location: string;
  mktsegmentList = [];
  // Open Plans
  fromDate = '';
  toDate = '';
  destination = '';
  destinationList = [];
  sourceList: any[];
  sourceCode: any;
  plansDataDtoList = [];
  totalPlanQtySum;
  totalAvailQtySum;
  totalTotAvailQtySum;
  totalReservedQtySum;
  totalTTESum;
  truckCountSum;
  cummTotalPlanQtySum;
  cummTotalAvailQtySum;
  cummTotalTotAvailQtySum;
  cummTotalReservedQtySum;
  cummTotalTTESum;
  cummTruckCountSum;
  appStatuses = [];
  planStatusOpenPlan = 'OPEN';
  mktsegmentOpenPlan = []; 
  sourceCodeOpenPlanList = []; 
   // Dispatch Plans
   fromDateDispatchPlan = '';
   toDateDispatchPlan = '';
   destinationDispatchPlan = '';
   destinationListDispatchPlan = [];
   sourceListDispatchPlan: any[];
   sourceCodeDispatchPlan: any;
   dispatchPlansDtoList = [];
   totalDispatchQtySum;
   totalDispTTESum;
   truckDispCountSum;
   cummTotalDispatchQtySum;
   cummTotalDispTTESum;
   cummTruckDispCountSum;
   planStatusDispatchPlan = 'OPEN';
   mktsegmentDispatchPlan = []; 
   materialGroupDispatchPlan = [];
   sourceCodeDispatchPlanList = [];
  // Indent Status
  fromDateIndStatus = '';
  toDateIndStatus = '';
  destinationIndStatus = '';
  destinationListIndStatus = [];
  sourceListIndStatus: any[];
  sourceCodeIndStatus: any;
  transporterListIndStatus = [];
  transporterIndStatus: string = '';
  indentedSum;
  reportedSum;
  rejectedSum;
  balanceSum;
  cummIndentedSum;
  cummReportedSum;
  cummRejectedSum;
  cummBalanceSum;
  indentStatusDtoList = [];
  truckList = [];
  truckType = [];
  categoryListIndentStatus = [];
  materialGroup = [];
  materialGroupIndentStatus = [];
  shipmentSourceList = [];
  transportersIndStatus = [];

  // Placement Status
  fromDatePlacement = '';
  toDatePlacement = '';
  destinationPlacement = '';
  destinationListPlacement = [];
  sourceListPlacement: any[];
  sourceCodePlacement: any;
  transporterListPlacement = [];
  transporterPlacement: string = '';
  indentedSumPlacement;
  reportedSumPlacement;
  rejectedSumPlacement;
  balanceSumPlacement;
  netPlacedSum;
  placementPercentageSum;
  cummIndentedSumPlacement;
  cummReportedSumPlacement;
  cummRejectedSumPlacement;
  cummBalanceSumPlacement;
  cummNetPlacedPlacement;
  cummPlacementPercentageSum;
  placementStatusDtoList = [];
  categoryListPlacement = [];
  truckTypePlacement = [];
  truckListPlacement = [];
  materialGroupPlacement = [];
  transportersPlacementStatus = [];

  // Shipment Status
  destinationShipmentStatus = '';
  fromDateShipmentStatus = '';
  toDateShipmentStatus = '';
  destinationListShipmentStatus = [];
  sourceListShipmentStatus = [];
  sourceCodeShipmentStatus = '';
  sourceCodeShipmentStatuses = [];
  transporterShipmentStatus = '';
  transporterListShipmentStatus = [];
  shipmentWithNSum: number = null;
  shipmentWithYSum: number = null;
  totalSum: number = null;
  cummShipmentWithNSum: number = null;
  cummShipmentWithYSum: number = null;
  cummTotalSum: number = null;
  shipmentStatusDataList = [];
  shipmentWithoutFreightPerSum:number = null;
  cummWithoutFreightPerSum:number = null; 
  transportersShipmentStatus = [];
  // Plan Ageing
  destinationPlanAgeing = '';
  fromDatePlanAgeing = '';
  toDatePlanAgeing = '';
  destinationListPlanAgeing = [];
  sourceListPlanAgeing = [];
  sourceCodePlanAgeing = '';
  materialGroupPlanAgeing = [];
  firstLineStart: number = 0;
  firstLineEnd: number = 2;
  secondLineStart: number = 3;
  secondLineEnd: number = 5;
  thirdLine: number = 6;
  mktsegmentPlanAgeing = [];
  planStatusPlanAgeing: string = 'OPEN';

   // Plan Upload
   destinationPlanUpload = '';
   fromDatePlanUpload = '';
   toDatePlanUpload = '';
   destinationListPlanUpload = [];
   sourceListPlanUpload = [];
   sourceCodePlanUpload = '';
   materialGroupPlanUpload = [];
   mktsegmentPlanUpload = [];
   planStatusPlanUpload:string = 'OPEN';
   planUploadDtoList = [];
   sourceCodePlanUploads = [];
   appStatusList = [];
   uploadedByOthersSum = 0;
   uploadedBy3PLSum = 0;
   percentageOthersSum = 0;
   percentage3PLSum = 0;
   cummUploadedByOthersSum = 0 ;
   cummUploadedBy3PLSum = 0;
   cummPercentageOthersSum = 0 ;
   cummPercentage3PLSum = 0;

   planUploadDto = {
    uploadedBy3PL :null ,
    uploadedByOthers:null,
    total:null,  
    percentage3PL:null,
    percentageOthers:null,
    cummUploadedBy3PL:null ,
    cummUploadedByOthers:null,
    cummTotal:null,
    cummPercentage3PL:null,
    cummPercentageOthers:null,
   };

  // Delayed Days
  destinationDelayedDays = '';
  fromDateDelayedDays = '';
  toDateDelayedDays = '';
  destinationListDelayedDays = [];
  sourceListDelayedDays = [];
  sourceCodeDelayedDays = '';
  materialGroupDelayedDays = [];
  planStatusDelayedDays = '';
  firstLineStartDelayedDays = 0;
  firstLineEndDelayedDays = 2;
  secondLineStartDelayedDays = 3;
  secondLineEndDelayedDays = 5;
  thirdLineDelayedDays = 6;
  mktsegmentListDelayedDays = [];
  mktsegmentDelayedDays = [];
  shipmentStatusDelayedDays = ['INTRANSIT'];
  shipmentStatusList = ['INTRANSIT', 'COMPLETED'];
  categoryListDelayedDays = [];

  check_Role_DP_REP: string;
  reservedOrNotList: { "key": string; "value": boolean; }[];
  isOpenPlans: boolean = true;
  isIndentStatus: boolean = true;
  isTruckStatus: boolean = true;
  isShipmentStatus: boolean = true;
  isPlanAgeing = true;
  isPlacementStatus = true;
  isDelayedDays = true;
  isPlanUpload = true;
  isDispatchPlan = true;
  openPlanData = {
    tyreTTESum: null,
    tyreAvailQtySum: null,
    tyreTruckCount: null,
    totalApprovedQty: null,
    totalReservedQty: null,
  };
  planAgeingData = {
    lessThan2: null,
    lessThan2Count: null,
    lessThan7: null,
    lessThan7Count: null,
    greaterThan7: null,
    greaterThan7Count: null,
    cummLessThan2: null,
    cummLessThan2Count: null,
    cummLessThan7: null,
    cummLessThan7Count: null,
    cummGreaterThan7: null,
    cummGreaterThan7Count: null,
  }
  delayedDaysDto = {
    lessThan2: null,
    lessThan7: null,
    greaterThan7: null,
    cummLessThan2: null,
    cummLessThan7: null,
    cummGreaterThan7: null,
  }
  planStatusList: any = ['OPEN', 'COMPLETED'];
  planStatus = [];
  openPlanPageLength: any;
  pageLengthIndentStatus: any;
  categoryList = [];
  loggedInRole: string = '';
  cummNetPlacedSum: any;
  transporterList = [];
  isExtWarehouse:any = false; 
  currentDate = this.helperService.getTodayDate();
  currentDateAsString = this.helperService.getTodayDateASString();
  

  constructor(
    private service: ApiserviceService,
    private toastr: ToastrService,
    private helperService: HelperServiceService,
  ) {
    this.roles = constants.roles;
    this.isExtWarehouse = localStorage.getItem("isExtWarehouse");
    if (this.isSoureDisable() || this.isExtWarehouse) {
      this.sourceCode = localStorage.getItem("sourceID");
      this.sourceCodeIndStatus = localStorage.getItem("sourceID");
      this.sourceCodeShipmentStatus = localStorage.getItem("sourceID");
      this.sourceCodePlanAgeing = localStorage.getItem("sourceID");
      this.sourceCodePlacement = localStorage.getItem("sourceID");
      this.sourceCodeDelayedDays = localStorage.getItem("sourceID");
      this.sourceCodePlanUpload = localStorage.getItem("sourceID");
      this.sourceCodeDispatchPlan = localStorage.getItem("sourceID");
      this.sourceCode ? this.sourceCodeOpenPlanList.push(this.sourceCode ) : null;
      this.sourceCodeDispatchPlan ? this.sourceCodeDispatchPlanList.push(this.sourceCodeDispatchPlan) : null;
      this.setCurrentDateToAllDateFields();
    // localStorage.getItem("sourceID") ? this.sourceCodePlanUploads.push(localStorage.getItem("sourceID")) : null;

    }
  }

  ngOnInit() {
    localStorage.setItem("userMenu", "home");
    localStorage.getItem("sourceID") ? this.sourceCodeShipmentStatuses.push(localStorage.getItem("sourceID")) : null;
    localStorage.getItem("sourceID") ? this.sourceCodePlanUploads.push(localStorage.getItem("sourceID")) : null;

    let data;
    this.loggedInRole = localStorage.getItem("role");
    let dashboardFilterData = {
      'isOpenPlans': true,
      'isIndentStatus': true,
      'isTruckStatus': true,
      'isShipmentStatus': true,
      'isPlanAgeing': true,
      'isPlacementStatus': true,
      'isDelayedDays': true,
      'isPlanUpload':true,
      'isDispatchedPlans':true,
      "sourceLoc": localStorage.getItem("sourceID"),
      "sourceList":this.sourceCodeShipmentStatuses,
      'planStatus':this.planStatusOpenPlan,
      'shipmentStatusList': this.shipmentStatusDelayedDays,
      'fromDispatchDate': this.fromDate ? moment(new Date()).format("DD/MM/YYYY") : null,
      'toDispatchDate': this.toDate ? moment(new Date()).format("DD/MM/YYYY") : null,
    }
    this.appStatusList = constants.planStatus;

    // For DP_REP role we need show corresponding plant data on page load
    if (this.checkShow()) {
      this.location = localStorage.getItem("sourceID");
      data = this.location;
    }
    this.reservedOrNotList = constants.ReservedOrNotList;
    this.check_Role_DP_REP = this.service.checkRole();
    // this.getTrcukdetails(data);
    this.getTruckSummaryLocations();
    if (this.isSoureDisable() || this.isExtWarehouse) {
      this.sourceCode = localStorage.getItem("sourceID");
      this.sourceCodeIndStatus = localStorage.getItem("sourceID");
      this.sourceCodeShipmentStatus = localStorage.getItem("sourceID");
      this.sourceCodePlanAgeing = localStorage.getItem("sourceID");
      this.sourceCodePlacement = localStorage.getItem("sourceID");
      this.sourceCodeDelayedDays = localStorage.getItem("sourceID");
      this.sourceCodePlanUpload = localStorage.getItem("sourceID");
      this.sourceCodeDispatchPlan = localStorage.getItem("sourceID");
    }

    this.getDashboardData(dashboardFilterData);
    this.planStatus.push("OPEN");
    this.getCategoryMasterData();
    this.getTruckTypeMasterData();
    this.getMarketSegment();
    this.getShipmentSourceList();
    this.getPlansSourceList();
    this.getTransporterList();
  }


  getTrcukdetails(location) {
    // get Truck status  statics like reporting ,Wating,Gated In,Loading
    this.isLoading = true;
    let loc = location ? location : '';
    this.service.get_service(ApiserviceService.apisList.getTruckStatus + "?reportLoc=" + loc).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.truckStatusStatics = response['data'];
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong ", "! Error");
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  // Check if logged in user is for JIT OR NOT
  showPlanTables() {
    if (this.loggedInRole.startsWith('JIT')) {
      return false;
    } else {
      return true;
    }
  }

  //for getting category master data
  getCategoryMasterData() {
    this.service.get_service(ApiserviceService.apisList.categoryMasterData).subscribe(response => {
      this.categoryList = response['data'];
      this.categoryListIndentStatus = response['data'];
      this.categoryListPlacement = response['data'];
      this.categoryListDelayedDays = response['data'];
    }, (err) => {
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

  getTransporterList() {
    this.service.get_service(ApiserviceService.apisList.getTransporterList).subscribe(response => {
      if (response['statusCode'] == '200') {
        this.transporterList = response['data'];
      } else {
        this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!')
      }
    })
  }

  getShipmentSourceList() {
    this.service.get_service(ApiserviceService.apisList.getShipmentSources).subscribe(response => {
      if (response['statusCode'] == '200') {
        this.shipmentSourceList = response['data'];
      } else {
        this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!')
      }
    })
  }

  getPlansSourceList() {
    this.service.get_service(ApiserviceService.apisList.getOpenPlansSourceLocs).subscribe(response => {
      if (response['statusCode'] == '200') {
        this.openPlanSourceList = response['data'];
      } else {
        this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!')
      }
    })
  }
  // for getting truck type master
  getTruckTypeMasterData() {
    this.service.get_service(ApiserviceService.apisList.truckTypeMasterData).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.truckList = response['data'];
        this.truckListPlacement = [...response['data']]
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "!Error");
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
    })
  }

  // OPEN PLANS
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    if(event.target.value){
       /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
      if(this.toDate && (this.fromDate > this.toDate)){
        this.toDate = '';
      }
    }
    // this.toDate = '';
  }
  isSoureDisable() {
    // source Not disable for DP_REP, L1_MGR, L2_MGR role & External warehouses, if roles not belongs to DP_REP & External wareHouse we are returning boolean value which makes  disable 
    if ((this.check_Role_DP_REP !== this.roles.planner3 && this.check_Role_DP_REP !== this.roles.L1MGR && this.check_Role_DP_REP !== this.roles.L2MGR)
      && (!this.service.CheckExtWareHouse())) {
      return true
    } else {
      return false
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
  // filter destination list by user search 
  getUserSearchData(event) {
    let destfiltervalue = event.target.value;
    if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationList = [];
      let index = 0;
      this.isLoading = true
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + this.destination + "&index=" + index).subscribe(response => {
        this.destinationList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  searchOpenPlans() {
    let bodyData = {
      'fromDispatchDate': this.fromDate ? moment(new Date(this.fromDate)).format("DD/MM/YYYY") : null,
      'toDispatchDate': this.toDate ? moment(new Date(this.toDate)).format("DD/MM/YYYY") : null,
      'destination': this.destination,
      'sourceLoc': this.sourceCode,
      'isOpenPlans': true,
      // 'isIndentStatus': false,
      // 'isTruckStatus':false,
      'materialGroup': this.materialGroup,
      // 'isShipmentStatus':false,
      'appStatusList':this.appStatuses,
      'planStatus':this.planStatusOpenPlan,
      'marketSegments':this.mktsegmentOpenPlan,
      'sourceList' : this.sourceCodeOpenPlanList,
    }
    if (this.fromDate != '' && this.fromDate != null) {
      if (this.toDate != '' && this.toDate != null) {
        this.isOpenPlans = true;
        this.getDashboardData(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.isOpenPlans = true;
      this.getDashboardData(bodyData);
    }
  }
  clearAllOpenPlans() {
    this.destination = '';
    this.fromDate = '';
    this.toDate = '';
    this.destinationList = [];
    this.sourceList = [];
    this.sourceCode = '';
    this.materialGroup = [];
    this.appStatuses = [];
    this.planStatusOpenPlan = '';
    this.mktsegmentOpenPlan = [];
    this.sourceCodeOpenPlanList = [];

    // For DP_REP role user can change the source location but other user it can't changes
    // That why we giving default selection
    if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
      this.sourceCode = localStorage.getItem("sourceID");
      this.sourceCode ? this.sourceCodeOpenPlanList.push(this.sourceCode ) : null;
    }
  }

  setSummaryDetailsOpenPlans() {
    if (this.plansDataDtoList) {
      if (this.plansDataDtoList.length > 0 && this.plansDataDtoList[0].itemCategory) {
        this.totalPlanQtySum = this.plansDataDtoList.reduce((sum, { totalPlanQty }) => sum + totalPlanQty, 0);
        this.totalAvailQtySum = this.plansDataDtoList.reduce((sum, { totalAvailQty }) => sum + totalAvailQty, 0);
        this.totalTotAvailQtySum= this.plansDataDtoList.reduce((sum, { totalTotAvailQty }) => sum + totalTotAvailQty, 0);
        this.totalReservedQtySum= this.plansDataDtoList.reduce((sum, { totalReservedQty }) => sum + totalReservedQty, 0);
        this.totalTTESum = this.plansDataDtoList.reduce((sum, { totalTTE }) => sum + totalTTE, 0);
        this.truckCountSum = this.plansDataDtoList.reduce((sum, { truckCount }) => sum + truckCount, 0);
        this.cummTotalPlanQtySum = this.plansDataDtoList.reduce((sum, { cummTotalPlanQty }) => sum + cummTotalPlanQty, 0);
        this.cummTotalAvailQtySum = this.plansDataDtoList.reduce((sum, { cummTotalAvailQty }) => sum + cummTotalAvailQty, 0);
        this.cummTotalTotAvailQtySum= this.plansDataDtoList.reduce((sum, { cummTotalTotAvailQty }) => sum + cummTotalTotAvailQty, 0);
        this.cummTotalReservedQtySum= this.plansDataDtoList.reduce((sum, { cummTotalReservedQty }) => sum + cummTotalReservedQty, 0);
        this.cummTotalTTESum = this.plansDataDtoList.reduce((sum, { cummTotalTTE }) => sum + cummTotalTTE, 0);
        this.cummTruckCountSum = this.plansDataDtoList.reduce((sum, { cummTruckCount }) => sum + cummTruckCount, 0);
      }
    }
  }

   // OPEN PLANS
   addEventDispatchPlan(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
     /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
     if(event.target.value){
      if(this.toDateDispatchPlan && (this.fromDateDispatchPlan > this.toDateDispatchPlan)){
        this.toDateDispatchPlan = '';
      }
     }
    // this.toDateDispatchPlan = '';
  }

  // Filter source location
  getfilterSourceDispatchPlan(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.sourceList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        console.log("respio", response)
        this.sourceListDispatchPlan = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  // filter destination list by user search 
  getUserSearchDataDispatchPlan(event) {
    let destfiltervalue = event.target.value;
    if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationList = [];
      let index = 0;
      this.isLoading = true
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + this.destinationDispatchPlan + "&index=" + index).subscribe(response => {
        this.destinationListDispatchPlan = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  searchDispatchPlan() {
    let bodyData = {
      'fromDispatchDate': this.fromDateDispatchPlan ? moment(new Date(this.fromDateDispatchPlan)).format("DD/MM/YYYY") : null,
      'toDispatchDate': this.toDateDispatchPlan ? moment(new Date(this.toDateDispatchPlan)).format("DD/MM/YYYY") : null,
      'destination': this.destinationDispatchPlan,
      'sourceLoc': this.sourceCodeDispatchPlan,
      'isDispatchedPlans': true,
      // 'isIndentStatus': false,
      // 'isTruckStatus':false,
      'materialGroup': this.materialGroupDispatchPlan,
      // 'isShipmentStatus':false,
      'planStatus':this.planStatusDispatchPlan,
      'marketSegments':this.mktsegmentDispatchPlan,
      'sourceList' : this.sourceCodeDispatchPlanList,
    }
    if (this.fromDateDispatchPlan != '' && this.fromDateDispatchPlan != null) {
      if (this.toDateDispatchPlan != '' && this.toDateDispatchPlan != null) {
        this.isDispatchPlan = true;
        this.getDashboardData(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.isDispatchPlan = true;
      this.getDashboardData(bodyData);
    }
  }
  clearAllDispatchPlan() {
    this.destinationDispatchPlan = '';
    this.fromDateDispatchPlan = '';
    this.toDateDispatchPlan = '';
    this.destinationListDispatchPlan = [];
    this.sourceListDispatchPlan = [];
    this.sourceCodeDispatchPlan = '';
    this.planStatusDispatchPlan = '';
    this.mktsegmentDispatchPlan = [];
    this.materialGroupDispatchPlan = [];
    this.sourceCodeDispatchPlanList = [];

    // For DP_REP role user can change the source location but other user it can't changes
    // That why we giving default selection
    if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
      this.sourceCodeDispatchPlan = localStorage.getItem("sourceID");
      this.sourceCodeDispatchPlan ? this.sourceCodeDispatchPlanList.push(this.sourceCodeDispatchPlan) : null;
    }
  }

  setSummaryDetailsDispatchPlan() {
    if (this.dispatchPlansDtoList) {
      if (this.dispatchPlansDtoList.length > 0 && this.dispatchPlansDtoList[0].itemCategory) {
        this.totalDispatchQtySum = this.dispatchPlansDtoList.reduce((sum, { totalDispatchedQty }) => sum + totalDispatchedQty, 0);
        this.totalDispTTESum = this.dispatchPlansDtoList.reduce((sum, { totalTTE }) => sum + totalTTE, 0);
        this.truckDispCountSum = this.dispatchPlansDtoList.reduce((sum, { truckCount }) => sum + truckCount, 0);
        this.cummTotalDispatchQtySum = this.dispatchPlansDtoList.reduce((sum, { cummTotalDispatchedQty }) => sum + cummTotalDispatchedQty, 0);
        this.cummTotalDispTTESum = this.dispatchPlansDtoList.reduce((sum, { cummTotalTTE }) => sum + cummTotalTTE, 0);
        this.cummTruckDispCountSum = this.dispatchPlansDtoList.reduce((sum, { cummTruckCount }) => sum + cummTruckCount, 0);
      }
    }
  }

  // Placement Status
  addEventPlacement(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
     /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
      if(event.target.value){
        if(this.toDatePlacement && (this.fromDatePlacement > this.toDatePlacement)){
          this.toDatePlacement = '';
        }
      }
    // this.toDatePlacement = '';
  }
  // Filter source location
  getfilterSourcePlacement(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.sourceListPlacement = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        console.log("respio", response)
        this.sourceListPlacement = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  // filter destination list by user search 
  getUserSearchDataPlacement(event) {
    let destfiltervalue = event.target.value;
    if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationListPlacement = [];
      let index = 0;
      this.isLoading = true
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + this.destinationPlacement + "&index=" + index).subscribe(response => {
        this.destinationListPlacement = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  // filter Transporter details
  getfilterTransporterPlacement(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.transporterListPlacement = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?transporter=' + filtervalue).subscribe(response => {
        this.transporterListPlacement = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  searchPlacement() {
    let bodyData = {
      'fromDispatchDate': this.fromDatePlacement ? moment(new Date(this.fromDatePlacement)).format("DD/MM/YYYY") : null,
      'toDispatchDate': this.toDatePlacement ? moment(new Date(this.toDatePlacement)).format("DD/MM/YYYY") : null,
      'destination': this.destinationPlacement,
      'sourceLoc': this.sourceCodePlacement,
      // 'transporter': this.transporterPlacement,
      'isPlacementStatus': true,
      'materialGroup': this.materialGroupPlacement,
      'truckTypes': this.truckTypePlacement,
      'transporterList': this.transportersPlacementStatus,
      // 'isOpenPlans':false,
      // 'isTruckStatus':false,
      // 'isShipmentStatus':false,
    }
    if (this.fromDatePlacement != '' && this.fromDatePlacement != null) {
      if (this.toDatePlacement != '' && this.toDatePlacement != null) {
        this.isPlacementStatus = true;
        this.getDashboardData(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.isPlacementStatus = true;
      this.getDashboardData(bodyData);
    }
  }
  clearAllPlacement() {
    this.destinationPlacement = '';
    this.fromDatePlacement = '';
    this.toDatePlacement = '';
    this.destinationListPlacement = [];
    this.sourceListPlacement = [];
    this.sourceCodePlacement = '';
    this.transporterPlacement = '';
    this.materialGroupPlacement = [];
    this.truckTypePlacement = [];
    this.transportersPlacementStatus = [];

    // For DP_REP role user can change the source location but other user it can't changes
    // That why we giving default selection
    if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
      this.sourceCodePlacement = localStorage.getItem("sourceID");
    }
  }
  setSummaryDetailsPlacement() {
    if (this.placementStatusDtoList) {
      if (this.placementStatusDtoList.length > 0 && this.placementStatusDtoList[0].itemCategory) {
        this.indentedSumPlacement = this.placementStatusDtoList.reduce((sum, { totalNetIndented }) => sum + totalNetIndented, 0);
        this.reportedSumPlacement = this.placementStatusDtoList.reduce((sum, { totalReported }) => sum + totalReported, 0);
        this.rejectedSumPlacement = this.placementStatusDtoList.reduce((sum, { totalRejected }) => sum + totalRejected, 0);
        this.balanceSumPlacement = this.placementStatusDtoList.reduce((sum, { totalNetBalance }) => sum + totalNetBalance, 0);
        this.netPlacedSum = this.placementStatusDtoList.reduce((sum, { totalNetPlaced }) => sum + totalNetPlaced, 0);
        // this.placementPercentageSum = (this.placementStatusDtoList.reduce((sum, { placementPercentage }) => sum + placementPercentage, 0));
        this.placementPercentageSum = (this.netPlacedSum / this.indentedSumPlacement) * 100;
        this.cummIndentedSumPlacement = this.placementStatusDtoList.reduce((sum, { cummTotalNetIndented }) => sum + cummTotalNetIndented, 0);
        this.cummReportedSumPlacement = this.placementStatusDtoList.reduce((sum, { cummTotalReported }) => sum + cummTotalReported, 0);
        this.cummRejectedSumPlacement = this.placementStatusDtoList.reduce((sum, { cummTotalRejected }) => sum + cummTotalRejected, 0);
        this.cummBalanceSumPlacement = this.placementStatusDtoList.reduce((sum, { cummTotalNetBalance }) => sum + cummTotalNetBalance, 0);
        this.cummNetPlacedSum = this.placementStatusDtoList.reduce((sum, { cummTotalNetPlaced }) => sum + cummTotalNetPlaced, 0);
        // this.cummPlacementPercentageSum = this.placementStatusDtoList.reduce((sum, { cummPlacementPercentage }) => sum + cummPlacementPercentage, 0) ;
        this.cummPlacementPercentageSum = (this.cummNetPlacedSum / this.cummIndentedSumPlacement) * 100;
      }
    }
  }

  // INDENT STATUS
  addEventIndStatus(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
     /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
      if(event.target.value){
        if(this.toDateIndStatus && (this.fromDateIndStatus > this.toDateIndStatus)){
          this.toDateIndStatus = '';
        }
      }
    // this.toDateIndStatus = '';
  }
  // Filter source location
  getfilterSourceIndStatus(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.sourceListIndStatus = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        console.log("respio", response)
        this.sourceListIndStatus = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  // filter destination list by user search 
  getUserSearchDataIndStatus(event) {
    let destfiltervalue = event.target.value;
    if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationListIndStatus = [];
      let index = 0;
      this.isLoading = true
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + this.destinationIndStatus + "&index=" + index).subscribe(response => {
        this.destinationListIndStatus = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  // filter Transporter details
  getfilterTransporterIndStatus(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.transporterListIndStatus = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?transporter=' + filtervalue).subscribe(response => {
        this.transporterListIndStatus = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  searchIndStatus() {
    let bodyData = {
      'fromDispatchDate': this.fromDateIndStatus ? moment(new Date(this.fromDateIndStatus)).format("DD/MM/YYYY") : null,
      'toDispatchDate': this.toDateIndStatus ? moment(new Date(this.toDateIndStatus)).format("DD/MM/YYYY") : null,
      'destination': this.destinationIndStatus,
      'sourceLoc': this.sourceCodeIndStatus,
      // 'transporter': this.transporterIndStatus,
      'isIndentStatus': true,
      'materialGroup': this.materialGroupIndentStatus,
      'truckTypes': this.truckType,
      'transporterList': this.transportersIndStatus,
      // 'isOpenPlans':false,
      // 'isTruckStatus':false,
      // 'isShipmentStatus':false,
    }
    if (this.fromDateIndStatus != '' && this.fromDateIndStatus != null) {
      if (this.toDateIndStatus != '' && this.toDateIndStatus != null) {
        this.isIndentStatus = true;
        this.getDashboardData(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.isIndentStatus = true;
      this.getDashboardData(bodyData);
    }
  }
  clearAllIndStatus() {
    this.destinationIndStatus = '';
    this.fromDateIndStatus = '';
    this.toDateIndStatus = '';
    this.destinationListIndStatus = [];
    this.sourceListIndStatus = [];
    this.sourceCodeIndStatus = '';
    this.transporterIndStatus = '';
    this.materialGroupIndentStatus = [];
    this.truckType = [];
    this.transportersIndStatus = [];

    // For DP_REP role user can change the source location but other user it can't changes
    // That why we giving default selection
    if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
      this.sourceCodeIndStatus = localStorage.getItem("sourceID");
    }
  }
  setSummaryDetails() {
    if (this.indentStatusDtoList) {
      if (this.indentStatusDtoList.length > 0 && this.indentStatusDtoList[0].itemCategory) {
        this.indentedSum = this.indentStatusDtoList.reduce((sum, { totalNetIndented }) => sum + totalNetIndented, 0);
        this.reportedSum = this.indentStatusDtoList.reduce((sum, { totalReported }) => sum + totalReported, 0);
        this.rejectedSum = this.indentStatusDtoList.reduce((sum, { totalRejected }) => sum + totalRejected, 0);
        this.balanceSum = this.indentStatusDtoList.reduce((sum, { totalNetBalance }) => sum + totalNetBalance, 0);
        this.cummIndentedSum = this.indentStatusDtoList.reduce((sum, { cummTotalNetIndented }) => sum + cummTotalNetIndented, 0);
        this.cummReportedSum = this.indentStatusDtoList.reduce((sum, { cummTotalReported }) => sum + cummTotalReported, 0);
        this.cummRejectedSum = this.indentStatusDtoList.reduce((sum, { cummTotalRejected }) => sum + cummTotalRejected, 0);
        this.cummBalanceSum = this.indentStatusDtoList.reduce((sum, { cummTotalNetBalance }) => sum + cummTotalNetBalance, 0);
      }
    }
  }

  // Shipment STATUS
  addEventShipmentStatus(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
     /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
     if(event.target.value){
      if(this.toDateShipmentStatus && (this.fromDateShipmentStatus > this.toDateShipmentStatus)){
        this.toDateShipmentStatus = '';
      }
     }
    // this.toDateShipmentStatus = '';
  }
  // Filter source location
  getfilterSourceShipmentStatus(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.sourceListShipmentStatus = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        console.log("respio", response)
        this.sourceListShipmentStatus = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  // filter destination list by user search 
  getUserSearchDataShipmentStatus(event) {
    let destfiltervalue = event.target.value;
    if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationListShipmentStatus = [];
      let index = 0;
      this.isLoading = true
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + this.destinationShipmentStatus + "&index=" + index).subscribe(response => {
        this.destinationListShipmentStatus = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  // filter Transporter details
  getfilterTransporterShipmentStatus(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.transporterListShipmentStatus = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?transporter=' + filtervalue).subscribe(response => {
        this.transporterListShipmentStatus = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  searchShipmentStatus() {
    let bodyData = {
      'fromDispatchDate': this.fromDateShipmentStatus ? moment(new Date(this.fromDateShipmentStatus)).format("DD/MM/YYYY") : null,
      'toDispatchDate': this.toDateShipmentStatus ? moment(new Date(this.toDateShipmentStatus)).format("DD/MM/YYYY") : null,
      'destination': this.destinationShipmentStatus,
      'sourceLoc': this.sourceCodeShipmentStatus,
      // 'transporter': this.transporterShipmentStatus,
      // 'isIndentStatus': false,
      // 'isOpenPlans':false,
      // 'isTruckStatus':false,
      'isShipmentStatus': true,
      "sourceList":this.sourceCodeShipmentStatuses,
      'transporterList': this.transportersShipmentStatus,
    }
    if (this.fromDateShipmentStatus != '' && this.fromDateShipmentStatus != null) {
      if (this.toDateShipmentStatus != '' && this.toDateShipmentStatus != null) {
        this.isShipmentStatus = true;
        this.getDashboardData(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.isShipmentStatus = true;
      this.getDashboardData(bodyData);
    }
  }
  setSummaryDetailsShipmentStatus() {
    if (this.shipmentStatusDataList) {
      if (this.shipmentStatusDataList.length > 0 && this.shipmentStatusDataList[0].shipmentWithNReportLoc) {
        this.shipmentWithNSum = this.shipmentStatusDataList.reduce((sum, { shipmentWithN }) => sum + shipmentWithN, 0);
        this.shipmentWithYSum = this.shipmentStatusDataList.reduce((sum, { shipmentWithY }) => sum + shipmentWithY, 0);
        this.totalSum = this.shipmentStatusDataList.reduce((sum, { total }) => sum + total, 0);
        this.cummShipmentWithNSum = this.shipmentStatusDataList.reduce((sum, { cummShipmentWithN }) => sum + cummShipmentWithN, 0);
        this.cummShipmentWithYSum = this.shipmentStatusDataList.reduce((sum, { cummShipmentWithY }) => sum + cummShipmentWithY, 0);
        this.cummTotalSum = this.shipmentStatusDataList.reduce((sum, { cummTotal }) => sum + cummTotal, 0);
        this.shipmentWithoutFreightPerSum = (this.shipmentWithNSum / this.totalSum) * 100;
        this.cummWithoutFreightPerSum =( this.cummShipmentWithNSum / this.cummTotalSum) * 100;
      }
    }
  }
  clearAllShipmentStatus() {
    this.destinationShipmentStatus = '';
    this.fromDateShipmentStatus = '';
    this.toDateShipmentStatus = '';
    this.destinationListShipmentStatus = [];
    this.sourceListShipmentStatus = [];
    this.sourceCodeShipmentStatus = '';
    this.transporterShipmentStatus = '';
    this.transporterListShipmentStatus = [];
    this.sourceCodeShipmentStatuses = [];
    this.transportersShipmentStatus = [];

    // For DP_REP role user can change the source location but other user it can't changes
    // That why we giving default selection
    if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
      this.sourceCodeShipmentStatus = localStorage.getItem("sourceID");
      this.sourceCodeShipmentStatuses.push(localStorage.getItem("sourceID"));
    }
  }

  // PLAN Upload
  addEventPlanUpload(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
      /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
      if(event.target.value){
        if(this.toDatePlanUpload && (this.fromDatePlanUpload > this.toDatePlanUpload)){
          this.toDatePlanUpload = '';
        }
      }
    // this.toDatePlanUpload = '';
  }

  // Filter source location
  getfilterSourcePlanUpload(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.sourceListPlanUpload = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        console.log("respio", response)
        this.sourceListPlanUpload = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  // filter destination list by user search 
  getUserSearchDataPlanUpload(event) {
    let destfiltervalue = event.target.value;
    if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationListPlanUpload = [];
      let index = 0;
      this.isLoading = true
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + this.destinationPlanUpload + "&index=" + index).subscribe(response => {
        this.destinationListPlanUpload = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  searchPlanUpload() {
    let bodyData = {
      'fromDispatchDate': this.fromDatePlanUpload ? moment(new Date(this.fromDatePlanUpload)).format("DD/MM/YYYY") : null,
      'toDispatchDate': this.toDatePlanUpload ? moment(new Date(this.toDatePlanUpload)).format("DD/MM/YYYY") : null,
      'destination': this.destinationPlanUpload,
      'sourceLoc': this.sourceCodePlanUpload,
      'isPlanUpload': true,
      // 'isIndentStatus': false,
      // 'isTruckStatus':false,
      'materialGroup': this.materialGroupPlanUpload,
      // 'isShipmentStatus':false,
      'marketSegments': this.mktsegmentPlanUpload,
      'planStatus': this.planStatusPlanUpload,
      "sourceList":this.sourceCodePlanUploads,
    }
    if (this.fromDatePlanUpload != '' && this.fromDatePlanUpload != null) {
      if (this.toDatePlanUpload != '' && this.toDatePlanUpload != null) {
        this.isPlanUpload = true;
        this.getDashboardData(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.isPlanUpload = true;
      this.getDashboardData(bodyData);
    }
  }
  clearAllPlanUpload() {
    this.destinationPlanUpload = '';
    this.fromDatePlanUpload = '';
    this.toDatePlanUpload = '';
    this.destinationListPlanUpload = [];
    this.sourceListPlanUpload = [];
    this.sourceCodePlanUpload = '';
    this.materialGroupPlanUpload = [];
    this.planStatusPlanUpload = '';
    this.mktsegmentPlanUpload = [];
    this.sourceCodePlanUploads = [];

    // For DP_REP role user can change the source location but other user it can't changes
    // That why we giving default selection
    if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
      this.sourceCodePlanUploads.push(localStorage.getItem("sourceID"));
      
    }
  }

  setSummaryDataForPlanUpload(){
    if(this.planUploadDtoList && this.planUploadDtoList.length > 0){
      this.uploadedByOthersSum = this.planUploadDtoList.reduce((sum, { uploadedByOthers }) => sum + uploadedByOthers, 0);
      this.uploadedBy3PLSum = this.planUploadDtoList.reduce((sum, { uploadedBy3PL }) => sum + uploadedBy3PL, 0);
      this.percentageOthersSum = (this.uploadedByOthersSum / (this.uploadedByOthersSum + this.uploadedBy3PLSum)) * 100;
      this.percentage3PLSum = (this.uploadedBy3PLSum / (this.uploadedByOthersSum + this.uploadedBy3PLSum)) * 100;
      this.cummUploadedByOthersSum = this.planUploadDtoList.reduce((sum, { cummUploadedByOthers }) => sum + cummUploadedByOthers, 0) ;
      this.cummUploadedBy3PLSum = this.planUploadDtoList.reduce((sum, { cummUploadedBy3PL }) => sum + cummUploadedBy3PL, 0);
      this.cummPercentageOthersSum = (this.cummUploadedByOthersSum / (this.cummUploadedByOthersSum + this.cummUploadedBy3PLSum)) * 100;
      this.cummPercentage3PLSum = (this.cummUploadedBy3PLSum / (this.cummUploadedByOthersSum + this.cummUploadedBy3PLSum)) * 100;
    }
  }

   // PLANS AGEING
   addEventPlanAgeing(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
     /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
      if(event.target.value){
        if(this.toDatePlanAgeing && (this.fromDatePlanAgeing > this.toDatePlanAgeing)){
          this.toDatePlanAgeing = '';
        }
      }
    // this.toDatePlanAgeing = '';
  }

  // Filter source location
  getfilterSourcePlanAgeing(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.sourceListPlanAgeing = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        console.log("respio", response)
        this.sourceListPlanAgeing = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  // filter destination list by user search 
  getUserSearchDataPlanAgeing(event) {
    let destfiltervalue = event.target.value;
    if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationListPlanAgeing = [];
      let index = 0;
      this.isLoading = true
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + this.destinationPlanAgeing + "&index=" + index).subscribe(response => {
        this.destinationListPlanAgeing = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  searchPlanAgeing() {
    let bodyData = {
      'fromDispatchDateAgeing': this.fromDatePlanAgeing ? moment(new Date(this.fromDatePlanAgeing)).format("DD/MM/YYYY") : null,
      'toDispatchDateAgeing': this.toDatePlanAgeing ? moment(new Date(this.toDatePlanAgeing)).format("DD/MM/YYYY") : null,
      'destination': this.destinationPlanAgeing,
      'sourceLoc': this.sourceCodePlanAgeing,
      'isPlanAgeing': true,
      // 'isIndentStatus': false,
      // 'isTruckStatus':false,
      'materialGroup': this.materialGroupPlanAgeing,
      // 'isShipmentStatus':false,
      'firstLineStart': this.firstLineStart,
      'firstLineEnd': this.firstLineEnd,
      'secondLineStart': this.secondLineStart,
      'secondLineEnd': this.secondLineEnd,
      'thirdLine': this.thirdLine,
      'marketSegments': this.mktsegmentPlanAgeing,
      'planStatus': this.planStatusPlanAgeing,
    }
    if (this.fromDatePlanAgeing != '' && this.fromDatePlanAgeing != null) {
      if (this.toDatePlanAgeing != '' && this.toDatePlanAgeing != null) {
        this.isPlanAgeing = true;
        this.getDashboardData(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.isPlanAgeing = true;
      this.getDashboardData(bodyData);
    }
  }
  clearAllPlanAgeing() {
    this.destinationPlanAgeing = '';
    this.fromDatePlanAgeing = '';
    this.toDatePlanAgeing = '';
    this.destinationListPlanAgeing = [];
    this.sourceListPlanAgeing = [];
    this.sourceCodePlanAgeing = '';
    this.materialGroupPlanAgeing = [];
    this.planStatusPlanAgeing = '';
    this.firstLineStart = 0;
    this.firstLineEnd = 2;
    this.secondLineStart = 3;
    this.secondLineEnd = 5;
    this.thirdLine = 6;
    this.mktsegmentPlanAgeing = [];

    // For DP_REP role user can change the source location but other user it can't changes
    // That why we giving default selection
    if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
      this.sourceCodePlanAgeing = localStorage.getItem("sourceID");
    }
  }


  // DELAYED DAYS
  addEventDelayedDays(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
     /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
     if(event.target.value){
      if(this.toDateDelayedDays && (this.fromDateDelayedDays > this.toDateDelayedDays)){
        this.toDateDelayedDays = '';
      }
     }
    // this.toDateDelayedDays = '';
  }

  // Filter source location
  getfilterSourceDelayedDays(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.sourceListDelayedDays = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        console.log("respio", response)
        this.sourceListDelayedDays = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  // filter destination list by user search 
  getUserSearchDataDelayedDays(event) {
    let destfiltervalue = event.target.value;
    if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationListDelayedDays = [];
      let index = 0;
      this.isLoading = true
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + this.destinationDelayedDays + "&index=" + index).subscribe(response => {
        this.destinationListDelayedDays = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  searchDelayedDays() {
    let bodyData = {
      'fromDispatchDateAgeing': this.fromDateDelayedDays ? moment(new Date(this.fromDateDelayedDays)).format("DD/MM/YYYY") : null,
      'toDispatchDateAgeing': this.toDateDelayedDays ? moment(new Date(this.toDateDelayedDays)).format("DD/MM/YYYY") : null,
      'destination': this.destinationDelayedDays,
      'sourceLoc': this.sourceCodeDelayedDays,
      'isDelayedDays': true,
      // 'isIndentStatus': false,
      // 'isTruckStatus':false,
      'materialGroup': this.materialGroupDelayedDays,
      // 'isShipmentStatus':false,
      'firstLineStart': this.firstLineStartDelayedDays,
      'firstLineEnd': this.firstLineEndDelayedDays,
      'secondLineStart': this.secondLineStartDelayedDays,
      'secondLineEnd': this.secondLineEndDelayedDays,
      'thirdLine': this.thirdLineDelayedDays,
      'marketSegments': this.mktsegmentDelayedDays,
      'shipmentStatusList': this.shipmentStatusDelayedDays,
    }
    if (this.fromDateDelayedDays != '' && this.fromDateDelayedDays != null) {
      if (this.toDateDelayedDays != '' && this.toDateDelayedDays != null) {
        this.isDelayedDays = true;
        this.getDashboardData(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.isDelayedDays = true;
      this.getDashboardData(bodyData);
    }
  }
  clearAllDelayedDays() {
    this.destinationDelayedDays = '';
    this.fromDateDelayedDays = '';
    this.toDateDelayedDays = '';
    this.destinationListDelayedDays = [];
    this.sourceListDelayedDays = [];
    this.sourceCodeDelayedDays = '';
    this.materialGroupDelayedDays = [];
    this.shipmentStatusDelayedDays = [];
    this.firstLineStartDelayedDays = 0;
    this.firstLineEndDelayedDays = 2;
    this.secondLineStartDelayedDays = 3;
    this.secondLineEndDelayedDays = 5;
    this.thirdLineDelayedDays = 6;
    this.mktsegmentDelayedDays = [];

    // For DP_REP role user can change the source location but other user it can't changes
    // That why we giving default selection
    if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
      this.sourceCodeDelayedDays = localStorage.getItem("sourceID");
    }
  }

  getTruckSummaryLocations() {
    this.service.get_service(ApiserviceService.apisList.getSummaryLocations).subscribe(respone => {
      this.locations = respone['data'];
    })
  }

  checkShow() {
    let role = localStorage.getItem('role');
    if (role) {
      if (role == this.roles.planner3 || role == this.roles.L2MGR || role == this.roles.L1MGR) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  getDashboardData(data) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getDashboardData, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        if (this.isOpenPlans) {
          this.plansDataDtoList = response['data'].plansDataDtos;
          this.setSummaryDetailsOpenPlans();
          this.isOpenPlans = false;
        }
        if (this.isIndentStatus) {
          this.indentStatusDtoList = [...response['data'].indentStatusDtos];
          // this.pageLengthIndentStatus = response['data'].indentStatusDto.total;
          this.pageLengthIndentStatus = this.indentStatusDtoList.reduce((sum, { total }) => sum + total, 0)
          this.isIndentStatus = false;
          this.setSummaryDetails();
        }
        if (this.isTruckStatus) {
          this.truckStatusStatics = {};
          this.truckStatusStatics = response['data'].truckReportDto;
          this.isTruckStatus = false;
        }
        if (this.isShipmentStatus) {
          this.shipmentStatusDataList = response['data'].shipmentStatusList;
          this.setSummaryDetailsShipmentStatus();
          this.isShipmentStatus = false;
        }
        if (this.isPlanAgeing) {
          this.planAgeingData = response['data'].planAgeing;
          this.isPlanAgeing = false;
        }
        if (this.isDelayedDays) {
          this.delayedDaysDto = response['data'].delayedDays;
          this.isDelayedDays = false;
        }
        if (this.isPlacementStatus) {
          this.placementStatusDtoList = [...response['data'].placementStatusDtos];
          this.setSummaryDetailsPlacement();
          this.isPlacementStatus = false;
        }
        if(this.isPlanUpload){
          this.planUploadDtoList = response['data'].planUploadDtos;
          this.setSummaryDataForPlanUpload();
          this.isPlanUpload = false;
        }
        if(this.isDispatchPlan){
          this.dispatchPlansDtoList = response['data'].dispatchedPlansDataList;
          this.setSummaryDetailsDispatchPlan();
          this.isDispatchPlan = false;
        }
        this.isLoading = false;
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        this.isLoading = false;
      }
    }, err => {
      this.toastr.error(err ? err['message'] : 'Something went wrong...!', 'Error!');
      this.isLoading = false;
    });

  }

  // Export Excel for Open Plans
  exportOpenPlans(): void {
    if (this.openPlanPageLength > 0) {
      this.isLoading = true;

      let data = {
        'fromDispatchDate': this.fromDate ? moment(new Date(this.fromDate)).format("DD/MM/YYYY") : null,
        'toDispatchDate': this.toDate ? moment(new Date(this.toDate)).format("DD/MM/YYYY") : null,
        'destinationCode': this.destination,
        // 'index': this.page.offset,
        'pageLength': this.openPlanPageLength,
        // 'statuses': this.filterPlanStatus,
        // 'sourceLocation': this.source,
        'planStatus': this.planStatus,
        'sourceCode': this.sourceCode,
        'itemClassification': "TYRE",
        'materialGroup': this.materialGroup,
      }
      // this.service.post_service_DownLoadExcel(ApiserviceService.apisList.planinfo, data).subscribe(response => {
      this.service.post_service(ApiserviceService.apisList.planinfo, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          // Uncomment when export excel is generated in backend
          // var blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          //   var filename = 'viewDispatchPlans.xlsx';
          //   const link = window.URL.createObjectURL(blob);
          //   const a = document.createElement('a');
          //   document.body.appendChild(a);
          //   a.setAttribute('style', 'display: none');
          //   a.href = link;
          //   a.download = filename
          //   a.click();
          //   window.URL.revokeObjectURL(link);
          //   a.remove();

          let newViewPlanData = response['data'].planItems;
          let excelRawData = newViewPlanData;
          let newExcelData = []; let data;
          for (let i = 0; i < excelRawData.length; i++) {

            // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
            // For FGS : The Avail TTE and Truck count should be based on Available Qty
            data = {
              "planId": excelRawData[i].planId,
              "Dispatch Date": this.service.customDateFormat(excelRawData[i].dispatchDate),
              "Source": excelRawData[i].sourceLocation,
              "Destination": excelRawData[i].destinationLocation,
              "Material Code": excelRawData[i].itemId,
              "Material Description": excelRawData[i].itemDescription,
              "Dest Description": excelRawData[i].destinationDescription,
              "Category": excelRawData[i].category,
              "TTE": excelRawData[i].tte,
              "Batch": excelRawData[i].batchCode,
              "Priority": excelRawData[i].priority,
              "Mkt Segment": excelRawData[i].marketSegment,
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
              "Avail TTE": excelRawData[i].availbleTTE ? excelRawData[i].availbleTTE.toFixed(2) : 0,
              "Truck Count": excelRawData[i].truckCount ? excelRawData[i].truckCount.toFixed(2) : 0,
              "Weight (Kg)": excelRawData[i].weight ? excelRawData[i].weight.toFixed(2) : 0,
              "Available Weight (Kg)": excelRawData[i].totalWeight ? excelRawData[i].totalWeight.toFixed(2) : 0,
              "Weight Util (%)": excelRawData[i].weightUtil ? excelRawData[i].weightUtil.toFixed(2) : 0,
              "Volume (CUMTR)": excelRawData[i].volume ? excelRawData[i].volume.toFixed(2) : 0,
              "Available Volume (CUMTR)": excelRawData[i].totalVolume ? excelRawData[i].totalVolume.toFixed(2) : 0,
              "Volume Util (%)": excelRawData[i].volumeUtil ? excelRawData[i].volumeUtil.toFixed(2) : 0,
              "Plan Status": excelRawData[i].status,
              "Insert User": excelRawData[i].insertUser,
              "Update User": excelRawData[i].updateUser,
              "Insert Date": this.service.customDateTimeFormat(excelRawData[i].insertDate),
              "Update Date": this.service.customDateTimeFormat(excelRawData[i].updateDate),
              "Plan Age (Days)": excelRawData[i].planAge,
              "Comments": excelRawData[i].comments,
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
      })
    } else {
      this.toastr.error("No records found to export", "Error!");
    }
  }

  // Excel for Indent Status
  exportIndentStatus(): void {
    if (this.pageLengthIndentStatus > 0) {
      this.isLoading = true;
      let data = {
        'fromDispatchDate': this.fromDateIndStatus ? moment(new Date(this.fromDateIndStatus)).format("DD/MM/YYYY") : null,
        'toDispatchDate': this.toDateIndStatus ? moment(new Date(this.toDateIndStatus)).format("DD/MM/YYYY") : null,
        'destination': this.destinationIndStatus,
        // 'index': this.index,
        'transporter': this.transporterIndStatus,
        'pageLength': this.pageLengthIndentStatus,
        'source': this.sourceCodeIndStatus,
        'status': this.planStatus,
        'truckType': this.truckType,
      }
      // this.service.post_service_DownLoadExcel(ApiserviceService.apisList.viewSearchIndents, data).subscribe(response => {
      this.service.post_service(ApiserviceService.apisList.viewSearchIndents, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          // Uncomment when export excel is gernerated in backend
          // var blob = new Blob([response.body], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
          // var filename = 'IndentsData.xlsx';
          // const link = window.URL.createObjectURL(blob);
          // const a = document.createElement('a');
          // document.body.appendChild(a);
          // a.setAttribute('style', 'display: none');
          // a.href = link;
          // a.download = filename
          // a.click();
          // window.URL.revokeObjectURL(link);
          // a.remove();

          let newViewPlanData = response['data'].indents;
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
          XLSX.writeFile(workBook, 'ViewIndents.xlsx');
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

  isGateRole(){
    if(this.service.checkRole() == this.roles.JIT_GATE_SECURITY || this.service.checkRole() == this.roles.gateSecurity || 
    this.service.checkRole() == this.roles.rdc_GAT || this.service.checkRole() == this.roles.JIT_OPERATION){
      return true;
    }else{
      return false;
    }
  }

  setCurrentDateToAllDateFields(){
    this.fromDate = this.currentDateAsString;
    this.toDate = this.currentDateAsString;

    this.fromDateDispatchPlan = this.currentDateAsString;
    this.toDateDispatchPlan = this.currentDateAsString;

    this.fromDateIndStatus = this.currentDateAsString;
    this.toDateIndStatus = this.currentDateAsString;

    this.fromDatePlacement = this.currentDateAsString;
    this.toDatePlacement = this.currentDateAsString;

    this.fromDateShipmentStatus = this.currentDateAsString;
    this.toDateShipmentStatus  = this.currentDateAsString;

    this.fromDatePlanUpload = this.currentDateAsString;
    this.toDatePlanUpload = this.currentDateAsString;
  }
}
