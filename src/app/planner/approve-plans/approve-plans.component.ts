import { HelperServiceService } from './../../services/helper-service/helper-service.service';
import { Component, OnInit, ViewChild, ChangeDetectionStrategy, DoCheck, ElementRef } from '@angular/core';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { DateAdapter, MAT_DATE_FORMATS, MatDialog } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../public/date.adapters';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
import { constants } from '../../constants';
import * as moment from 'moment'
import { ApprovePlanErrorsComponent } from 'src/app/public/approve-plan-errors/approve-plan-errors.component';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;
@Component({
  selector: 'app-approve-plans',
  templateUrl: './approve-plans.component.html',
  styleUrls: ['./approve-plans.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApprovePlansComponent implements OnInit, DoCheck {


  ApprovalEditing = {};
  isShow: boolean = true;
  planData = [];
  page = {
    limit: 200,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  pageSize: number;
  materialGroup = [];
  openPlanSourceList = [];
  status: any;
  planId: number;
  materialCode: any;
  mktsegment: any;
  destination = '';
  destinationDesc = '';
  descriptionList = [];
  destinationList = [];
  index: number;
  pendingPlanList = [];
  materilcodelist = [];
  materialDescription = '';
  isLoading: boolean = false;
  minDate = new Date();
  selected = [];
  planItemInfo = [];
  allRowsSelected: boolean = false;
  statuses = [];
  materialDescriptionList: any[];
  filterPlanStatus = [];
  source: string;
  insertUser: string;
  mktsegmentList = [];
  categoryList = [];
  currentDate = this.helperService.getTodayDate();
  currentDateAsString = this.helperService.getTodayDateASString();
  fromDispatchDate: string = '';
  toDispatchDate: string = '';
  toDate: string = '';
  fromDate: string = '';
  // roles: { "planner1": string; "plannner2": string; "planner3": string; "transporter": string; "fgsOperations1": string; "fgsOperations2": string; "fgsOperations4": string; "gateSecurity": string; "rdc_PLN": string; "rdc_GAT": string; "JIT_OPERATION": string; "JIT_GATE_SECURITY": string; "EXPORT_CHA": string; "ABU_PLN": string; };
  roles: { "planner1": string; "plannner2": string; "planner3": string; "transporter": string; "fgsOperations1": string; "fgsOperations2": string; "fgsOperations4": string; "gateSecurity": string; "rdc_PLN": string; "rdc_GAT": string; "JIT_OPERATION": string; "JIT_GATE_SECURITY": string; "EXPORT_CHA": string; "ABU_PLN": string; "L1MGR": string; "L2MGR": string; };
  planStatusList: { "key": string; "value": string; }[];
  planStatus: any;
  check_Role_DP_REP: string;
  sourceCode: string;
  sourceList: any[];
  modalComment: any;
  totalTruckPercentage: number = 0;
  totalTTEPercentageSum: number = 0;
  tteSum: number = 0;
  planQtySum: number = 0;
  apprQtySum: number = 0;
  unapprQtySum: number = 0;
  apprDeleteQtySum: number = 0;
  unapprDeleteQtySum: number = 0;
  reservedQtySum: number = 0;
  loadedQtySum: number = 0;
  dispatchedQtySum: number = 0;
  availableQtySum: number = 0;
  totalAvailableQtySum: number = 0;
  TruckPercentageSum: number = 0;
  weightSum: number = 0;
  volumeSum: number = 0;
  totalWeightSum: number = 0;
  totalWeightUtilSum: number = 0;
  totalVolumeSum: number = 0;
  totalVolumeUtilSum: number = 0;
  standredFTLTTE: number;
  standardFTLWeight: number;
  standardFTLVolumne: number;
  priorityList = [];
  priority = [];
  sourceCodeList = [];
  freezeLeftValue: boolean = true;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService,
    private helperService: HelperServiceService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) { }

ngDoCheck() {
  let width = $(window).width();
  if(width < 1024) {
    this.freezeLeftValue = false;
  }
  else {
    this.freezeLeftValue = true;
  }
}

  ngOnInit() {
    localStorage.setItem("userMenu", "dispatch-plan");
    this.statuses = constants.planStatus;
    this.filterPlanStatus = constants.filterPlanStatus;
    // (localStorage.getItem("sourceID") != null && localStorage.getItem("sourceID") != '') ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
    this.source = localStorage.getItem("sourceID");
    this.pageSize = 10;
    let routePlanId = this.activatedRoute.snapshot.params['planId'];
    this.planId = routePlanId;
    this.roles = constants.roles;
    this.check_Role_DP_REP = this.service.checkRole();
    this.planStatusList = constants.planStatusList;

    if (this.isSoureDisable()) {
      this.sourceCode = localStorage.getItem("sourceID");
      (localStorage.getItem("sourceID") != null && localStorage.getItem("sourceID") != '') ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
    }
    if (this.service.isDPREPRole() || this.service.CheckExtWareHouse()) {
      this.getPlansSourceList();
    } else {
      this.openPlanSourceList.push(localStorage.getItem("sourceID"))
    }
    //check the page is search with Particular plan Id  or not ,If it true 
    this.getPlanData(routePlanId);

    //for getting category master data
    this.getCategoryMasterData();
    this.getMarketSegment();
    this.getPriorityList();
    
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

  // For getting all the Open Plans source List for DPREP
  getPlansSourceList() {
    this.service.get_service(ApiserviceService.apisList.getOpenPlansSourceLocs).subscribe(response => {
      if (response['statusCode'] == '200') {
        this.openPlanSourceList = response['data'];
      } else {
        this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!')
      }
    })
  }
  //check the page is search with Particular plan Id  or not ,If it true 
  getPlanData(routePlanId) {
    if (routePlanId) {
      let bodyData = {
        'planId': routePlanId,
        'statuses': this.filterPlanStatus,
        // 'sourceLocation': this.source,
        'pageLength': this.page.limit,
        'sourceCodeList': this.sourceCodeList
      }
      this.getApprovePlan(bodyData);
    } else {
      //get the all plans which are for dispach(successfully created)
      let bodyData = {
        'statuses': this.filterPlanStatus,
        // 'sourceLocation': this.source,
        'fromDispatchDate': this.currentDate,
        'toDispatchDate': this.currentDate,
        'pageLength': this.page.limit,
        'sourceCodeList': this.sourceCodeList
      };
      this.fromDate = this.currentDateAsString;
      this.toDate = this.fromDate;
      this.getApprovePlan(bodyData);
    }
  }
  //for getting approve data
  getApprovePlan(bodyData) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.planinfo, bodyData).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.clearAllSum();
        let responseData = response['data'].planItems;
        // this.standredFTLTTE = response['data'].standardFtlTteCapacity;
        // this.standardFTLWeight = response['data'].standardFtlWeight;
        // this.standardFTLVolumne = response['data'].standardFTLVolumne;
        // responseData.forEach(element => {
        //   // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
        //   if (this.service.checkRole() == this.roles.rdc_PLN) {
        //     element.truckPercentage = (((element.quantity ? element.quantity : 0) * (element.tte ? element.tte : 0)) / this.standredFTLTTE);
        //     element.availableTTE = ((element.quantity ? element.quantity : 0) * (element.tte ? element.tte : 0));
        //     // Weight Util values calculations
        //     element.weightUtil = ((((element.quantity ? element.quantity : 0) * (element.weight ? element.weight : 0)) / this.standardFTLWeight) * 100);
        //     // Volume Util values calculations
        //     element.volumeUtil = ((((element.quantity ? element.quantity : 0) * (element.volume ? element.volume : 0)) / this.standardFTLVolumne) * 100);
        //   } else {
        //     element.truckPercentage = (((element.availableQuantity ? element.availableQuantity : 0) * (element.tte ? element.tte : 0)) / this.standredFTLTTE);
        //     element.availableTTE = ((element.availableQuantity ? element.availableQuantity : 0) * (element.tte ? element.tte : 0));
        //     // Weight Util values calculations
        //     element.weightUtil = ((((element.availableQuantity ? element.availableQuantity : 0) * (element.weight ? element.weight : 0)) / this.standardFTLWeight) * 100);
        //     // Volume Util values calculations
        //     element.volumeUtil = ((((element.availableQuantity ? element.availableQuantity : 0) * (element.volume ? element.volume : 0)) / this.standardFTLVolumne) * 100);
        //   }

        // });
        this.pendingPlanList = [...responseData];
        this.page.count = response['data'].total;
        // this.page.limit = response['data'].pageLength
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'], "! Error")
      }
    }, (err) => {
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

  getPriorityList() {
    this.service.get_service(ApiserviceService.apisList.getPriorityList).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.priorityList = response['data'];
      } else {
        this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!')
      }
    }, err => {
      this.toastr.error('Some Thing Went Wrong !!!')
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

  //for getting category master data
  getCategoryMasterData() {
    this.service.get_service(ApiserviceService.apisList.categoryMasterData).subscribe(response => {
      this.categoryList = response['data'];
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
    })
  }

  onSelect(event, data) {
    if (event.target.checked) {
      // if the checkbox checked we need update plan Qty based on the status
      // if the status  APPROVAL PENDING  we need populate Plan Qty
      // if the sattus  APPROVAL_PART we need update only UnAppr QTY
      if (data.appStatus == 'APPROVAL PENDING') {
        data.approvalQuantity = data.quantity;
      } else if (data.appStatus == "APPROVED PART") {
        data.approvalQuantity = data.unapprovedQuantity;
      }

      this.planItemInfo.push(data);
    } else {
      data.approvalQuantity = 0;
      data.unapprovalQuantity = 0;
      let index = this.planItemInfo.indexOf(data);
      this.planItemInfo.splice(index, 1);
    }
    this.tteSum = this.planItemInfo.reduce((sum, { tte }) => sum + tte, 0);
    this.planQtySum = this.planItemInfo.reduce((sum, { quantity }) => sum + quantity, 0);
    this.apprQtySum = this.planItemInfo.reduce((sum, { approvedQuantity }) => sum + approvedQuantity, 0);
    this.unapprQtySum = this.planItemInfo.reduce((sum, { unapprovedQuantity }) => sum + unapprovedQuantity, 0);
    this.apprDeleteQtySum = this.planItemInfo.reduce((sum, { deletedApprQuantity }) => sum + deletedApprQuantity, 0);
    this.unapprDeleteQtySum = this.planItemInfo.reduce((sum, { deletedUnApprQuantity }) => sum + deletedUnApprQuantity, 0);
    this.reservedQtySum = this.planItemInfo.reduce((sum, { reservedQuantity }) => sum + reservedQuantity, 0);
    this.loadedQtySum = this.planItemInfo.reduce((sum, { loaded }) => sum + loaded, 0);
    this.dispatchedQtySum = this.planItemInfo.reduce((sum, { dispatchedQuantity }) => sum + dispatchedQuantity, 0);
    this.availableQtySum = this.planItemInfo.reduce((sum, { availableQuantity }) => sum + availableQuantity, 0);
    this.totalAvailableQtySum = this.planItemInfo.reduce((sum, { totalAvailableQuantity }) => sum + totalAvailableQuantity, 0);
    this.totalTTEPercentageSum = this.planItemInfo.reduce((sum, { availbleTTE }) => sum + availbleTTE, 0);
    this.TruckPercentageSum = this.planItemInfo.reduce((sum, { truckCount }) => sum + truckCount, 0);
    this.weightSum = this.planItemInfo.reduce((sum, { weight }) => sum + weight, 0);
    this.totalWeightSum = this.planItemInfo.reduce((sum, { totalWeight }) => sum + totalWeight, 0);
    this.totalWeightUtilSum = this.planItemInfo.reduce((sum, { weightUtil }) => sum + weightUtil, 0);
    this.volumeSum = this.planItemInfo.reduce((sum, { volume }) => sum + volume, 0);
    this.totalVolumeSum = this.planItemInfo.reduce((sum, { totalVolume }) => sum + totalVolume, 0);
    this.totalVolumeUtilSum = this.planItemInfo.reduce((sum, { volumeUtil }) => sum + volumeUtil, 0);
  }
  onSelectAll(event) {
    this.planItemInfo = [];

    this.TruckPercentageSum = 0;
    this.totalTTEPercentageSum = 0;
    this.pendingPlanList.forEach(data => {
      this.onSelect(event, data);
    });
  }

  // Clearing all the sum values after success response
  clearAllSum() {
    this.tteSum = 0;
    this.planQtySum = 0;
    this.apprQtySum = 0;
    this.unapprQtySum = 0;
    this.apprDeleteQtySum = 0;
    this.unapprDeleteQtySum = 0;
    this.reservedQtySum = 0;
    this.loadedQtySum = 0;
    this.dispatchedQtySum = 0;
    this.availableQtySum = 0;
    this.totalAvailableQtySum = 0;
    this.totalTTEPercentageSum = 0;
    this.TruckPercentageSum = 0;
    this.weightSum = 0;
    this.totalWeightSum = 0;
    this.totalWeightUtilSum = 0;
    this.volumeSum = 0;
    this.totalVolumeSum = 0;
    this.totalVolumeUtilSum = 0;
  }

  onActivate(event) {
    if (event.type == 'checkbox') {
      //Stop event propagation and let onSelect() work
      event.event.stopPropagation();
    } else {
      //Do somethings when you click on rows
    }
  }

  // onPageSizeChanged(event) {
  //   this.page.limit = event;
  //   this.page.pageSize = this.pageSize;
  //   this.datatablePageData(this.page);
  // }

  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.planItemInfo = [];
    this.pendingPlanList = [];
    this.selected = [];
    this.index = pageInfo.offset;
    this.forDateValidation();
    let bodyData = {
      'fromDispatchDate': this.fromDispatchDate,
      'toDispatchDate': this.toDispatchDate,
      'index': pageInfo.offset,
      'pageLength': this.page.limit,
      'destinationCode': this.destination,
      'marketSegment': this.mktsegment,
      'materialCode': this.materialCode,
      'materialDescription': this.materialDescription,
      'materialGroup': this.materialGroup,
      'planId': this.planId,
      'status': this.status,
      'statuses': this.filterPlanStatus,
      // 'sourceLocation': this.source,
      'planStatus': this.planStatus,
      'insertUser': this.insertUser,
      // 'sourceCode': this.sourceCode,
      'priorityList': this.priority,
      'sourceCodeList': this.sourceCodeList
    }

    this.getApprovePlan(bodyData);
  }
  addEvent(type, event) {
    if (event.target.value) {
      let checkToDate: any = this.toDate;
      console.log("Check--->1", checkToDate);
      if (this.toDate == this.currentDateAsString) {
        // on page load we are defaluting the  to date with string. Comparing string with date is not possible
        // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
        checkToDate = new Date();
        console.log("Check--->2", checkToDate);
      }
      /* Checking if selected from date greater than to date.
     Clearing the toDate field when from date greater than to date */
      if (this.toDate && (this.fromDate > checkToDate)) {
        this.toDate = '';
      }
    }
  }

  // clear the data what the user entered
  clearAll() {
    this.destination = '';
    this.mktsegment = [];
    this.materialCode = "";
    this.materialDescription = "";
    this.destinationDesc = "";
    this.descriptionList = [];
    this.materialGroup = [];
    this.planId = null;
    this.status = [];
    this.destinationList = [];
    this.materilcodelist = [];
    this.fromDate = '';
    this.toDate = '';
    this.planStatus = [];
    this.insertUser = '';
    this.sourceCode = '';
    this.sourceList = [];
    this.priority = [];
    this.sourceCodeList = [];

    if (this.isSoureDisable()) {
      this.sourceCode = localStorage.getItem("sourceID");
      (localStorage.getItem("sourceID") != null && localStorage.getItem("sourceID") != '') ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
    }
  }


  //refersh data
  refreshData() {
    this.ApprovalEditing = {};
    this.table.offset = 0;
    this.selected = [];
    this.currentDateAsString = this.helperService.getTodayDateASString();
    this.fromDate = this.currentDateAsString;
    this.toDate = this.fromDate;
    this.pendingPlanList = [];
    this.planItemInfo = [];
    this.clearAll();
    this.clearAllSum();
    this.fromDate = this.currentDateAsString;
    this.toDate = this.fromDate;
    this.forDateValidation();

    let bodyData = {
      'fromDispatchDate': this.fromDispatchDate,
      'toDispatchDate': this.toDispatchDate,
      'planId': this.planId,
      'statuses': this.filterPlanStatus,
      'pageLength': this.page.limit,
      'sourceCodeList': this.sourceCodeList
    }
    this.getApprovePlan(bodyData);
  }

  getUserSearchData(event) {
    this.destinationDesc = '';
    if (event.target.value.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
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

  //filter material code by user input
  filterMaterialCode(event) {
    let filtervalue = event.target.value;
    this.materialDescription = '';
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
  //set value for material description
  setMaterialDescription(value) {
    this.materialDescription = value;
  }

  plannerSearch() {
    this.ApprovalEditing = {};
    this.selected = [];
    this.table.offset = 0;
    this.pendingPlanList = [];
    this.planItemInfo = [];
    this.forDateValidation();
    let bodyData = {
      'fromDispatchDate': this.fromDispatchDate,
      'toDispatchDate': this.toDispatchDate,
      'destinationCode': this.destination,
      // 'index': this.page.offset,
      'marketSegment': this.mktsegment,
      'materialCode': this.materialCode,
      'materialDescription': this.materialDescription,
      'materialGroup': this.materialGroup,
      'pageLength': this.page.limit,
      'planId': this.planId,
      'status': this.status,
      'statuses': this.filterPlanStatus,
      // 'sourceLocation': this.source,
      'planStatus': this.planStatus,
      'insertUser': this.insertUser,
      // 'sourceCode': this.sourceCode,
      'priorityList': this.priority,
      'sourceCodeList': this.sourceCodeList
    }
    if (this.fromDate != '' && this.fromDate != null) {
      if (this.toDate != '' && this.toDate != null) {
        this.pendingPlanList = [];
        this.getApprovePlan(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.getApprovePlan(bodyData);
    }
  }

  approvePlan() {
    this.isLoading = true;

    let approvePlanInfo = {
      planItems: this.planItemInfo,
      index: this.page.offset,
      pageLength: this.page.limit
    }
    this.service.post_service(ApiserviceService.apisList.approvePlanInfo, approvePlanInfo).subscribe(response => {
      this.isLoading = false;

      //get the fresh data of approve plans data
      if (response['statusCode'] == 200) {
        this.ApprovalEditing = {};
        let responseData = response['data'];
        this.selected = [];
        this.planItemInfo = [];
        this.clearAllSum();
        responseData.planItems.forEach(element => {
          // // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
          // if (this.service.checkRole() == this.roles.rdc_PLN) {
          //   element.truckPercentage = (((element.quantity ? element.quantity : 0) * (element.tte ? element.tte : 0)) / this.standredFTLTTE);
          //   element.availableTTE = ((element.quantity ? element.quantity : 0) * (element.tte ? element.tte : 0));
          //   // Weight Util values calculations
          //   element.weightUtil = ((((element.quantity ? element.quantity : 0) * (element.weight ? element.weight : 0)) / this.standardFTLWeight) * 100);
          //   // Volume Util values calculations
          //   element.volumeUtil = ((((element.quantity ? element.quantity : 0) * (element.volume ? element.volume : 0)) / this.standardFTLVolumne) * 100);
          // } else {
          //   element.truckPercentage = (((element.availableQuantity ? element.availableQuantity : 0) * (element.tte ? element.tte : 0)) / this.standredFTLTTE);
          //   element.availableTTE = ((element.availableQuantity ? element.availableQuantity : 0) * (element.tte ? element.tte : 0));
          //   // Weight Util values calculations
          //   element.weightUtil = ((((element.availableQuantity ? element.availableQuantity : 0) * (element.weight ? element.weight : 0)) / this.standardFTLWeight) * 100);
          //   // Volume Util values calculations
          //   element.volumeUtil = ((((element.availableQuantity ? element.availableQuantity : 0) * (element.volume ? element.volume : 0)) / this.standardFTLVolumne) * 100);
          // }
          let updatebleIndex = this.pendingPlanList.findIndex(value => value.id == element.id);
          this.pendingPlanList[updatebleIndex] = element;
          this.pendingPlanList = [...this.pendingPlanList];
        })
        this.toastr.success(response['message']);
      } else {
        this.openErrorDialog(response['data']);
        // this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        this.isLoading = false;
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  //open Error list Dialog
  openErrorDialog(value) {
    const dialogRef = this.dialog.open(ApprovePlanErrorsComponent, {
      // width: '250px',
      data: { errorData: value },
      disableClose: true
    });
  }

  // edit  apporoval quantity
  updateApprovalPlan(event, cell, rowIndex, row) {
    let getIndex = this.pendingPlanList.findIndex(data => data.id == row.id);
    this.pendingPlanList[getIndex][cell] = Number(event.target.value);
    this.pendingPlanList = [...this.pendingPlanList];
  }

  // update the values which was given user
  editApprovalQuantity(event, row, cell) {
    //let find the index of modified
    let modifiedIndex = this.pendingPlanList.findIndex(item => (item.planId == row.planId) && (item.lineNumber == row.lineNumber))
    //Make the Qty to be UnApproved to be Zero if entered
    this.pendingPlanList[modifiedIndex]['unapprovalQuantity'] = 0;
    //If user enter Negitive values
    if (Number(event.target.value) < 0) {
      this.pendingPlanList[modifiedIndex][cell] = 0;
      event.target.value = 0;
    } else if ((row.quantity - row.approvedQuantity) < Number(event.target.value)) {
      event.target.value = 0;
      this.pendingPlanList[modifiedIndex][cell] = 0;
      this.toastr.error('Invalid Quantity to be approved');
    } else {
      this.pendingPlanList[modifiedIndex][cell] = Number(event.target.value);
    }

    this.pendingPlanList = [... this.pendingPlanList];


  }

  editUnApprovalQuantity(event, row, cell) {
    let repsonsedata = row;
    //let find the index of modified
    let modifiedIndex = this.pendingPlanList.findIndex(item => (item.planId == row.planId) && (item.lineNumber == row.lineNumber));
    //Make the Qty to be UnApproved to be Zero if entered
    this.pendingPlanList[modifiedIndex]['approvalQuantity'] = 0;
    //If user enter Negitive values
    if (Number(event.target.value) < 0) {
      this.pendingPlanList[modifiedIndex][cell] = 0;
      event.target.value = 0;
    } else if (row.approvedQuantity == 0) {
      event.target.value = 0;
      this.pendingPlanList[modifiedIndex][cell] = 0;
      this.toastr.error("please approve quantity before unapproved !")
    } else if ((Number(event.target.value) > repsonsedata.approvedQuantity)) {
      this.pendingPlanList[modifiedIndex][cell] = 0;
      event.target.value = 0;
      this.toastr.error("Un Approval Quantity should not greater than approved Quantity");
    } else {
      this.pendingPlanList[modifiedIndex][cell] = Number(event.target.value);
    }
    this.pendingPlanList = [... this.pendingPlanList]
  }


  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }
  //export excel data
  export(): void {
    if (this.pendingPlanList.length > 0) {
      this.isLoading = true;
      this.forDateValidation();
      let data = {
        'fromDispatchDate': this.fromDispatchDate,
        'toDispatchDate': this.toDispatchDate,
        'destinationCode': this.destination,
        // 'index': this.page.offset,
        'marketSegment': this.mktsegment,
        'materialCode': this.materialCode,
        'materialDescription': this.materialDescription,
        'materialGroup': this.materialGroup,
        'pageLength': this.page.count,
        'planId': this.planId,
        'status': this.status,
        'statuses': this.filterPlanStatus,
        // 'sourceLocation': this.source,
        'planStatus': this.planStatus,
        'insertUser': this.insertUser,
        // 'sourceCode': this.sourceCode,
        'priorityList': this.priority,
        'sourceCodeList': this.sourceCodeList,
      }
      this.service.post_service(ApiserviceService.apisList.planinfo, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          let newApprovePlanData = response['data'].planItems;
          let excelRawData = newApprovePlanData;
          let newExcelData = []; let data;
          for (let i = 0; i < excelRawData.length; i++) {

            // // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
            // // For FGS : The Avail TTE and Truck count should be based on Available Qty
            // let availbleTTE; let truckCount;
            // if (this.service.checkRole() == this.roles.rdc_PLN) {
            //   availbleTTE = ((excelRawData[i].quantity ? excelRawData[i].quantity : 0) * (excelRawData[i].tte ? excelRawData[i].tte : 0));
            //   truckCount = (((excelRawData[i].quantity ? excelRawData[i].quantity : 0) * (excelRawData[i].tte ? excelRawData[i].tte : 0)) / this.standredFTLTTE);
            //   // Weight Util values calculations
            //   excelRawData[i].weightUtil = ((((excelRawData[i].quantity ? excelRawData[i].quantity : 0) * (excelRawData[i].weight ? excelRawData[i].weight : 0)) / this.standardFTLWeight) * 100);
            //   // Volume Util values calculations
            //   excelRawData[i].volumeUtil = ((((excelRawData[i].quantity ? excelRawData[i].quantity : 0) * (excelRawData[i].volume ? excelRawData[i].volume : 0)) / this.standardFTLVolumne) * 100);
            // } else {
            //   availbleTTE = ((excelRawData[i].availableQuantity ? excelRawData[i].availableQuantity : 0) * (excelRawData[i].tte ? excelRawData[i].tte : 0));
            //   truckCount = (((excelRawData[i].availableQuantity ? excelRawData[i].availableQuantity : 0) * (excelRawData[i].tte ? excelRawData[i].tte : 0)) / this.standredFTLTTE);
            //   // Weight Util values calculations
            //   excelRawData[i].weightUtil = ((((excelRawData[i].availableQuantity ? excelRawData[i].availableQuantity : 0) * (excelRawData[i].weight ? excelRawData[i].weight : 0)) / this.standardFTLWeight) * 100);
            //   // Volume Util values calculations
            //   excelRawData[i].volumeUtil = ((((excelRawData[i].availableQuantity ? excelRawData[i].availableQuantity : 0) * (excelRawData[i].volume ? excelRawData[i].volume : 0)) / this.standardFTLVolumne) * 100);
            // }
            data = {
              "plan Id": excelRawData[i].planId,
              "Dispatch Date": this.service.customDateFormat(excelRawData[i].dispatchDate),
              "Source": excelRawData[i].sourceLocation,
              "Destination": excelRawData[i].destinationLocation,
              "Material Code": excelRawData[i].itemId,
              "Material Description": excelRawData[i].itemDescription,
              "Dest Description": excelRawData[i].destinationDescription,
              "Category": excelRawData[i].category,
              "TTE": +excelRawData[i].tte,
              "Batch code": excelRawData[i].batchCode,
              "Priority": excelRawData[i].priority,
              "MKT segment": excelRawData[i].marketSegment,
              "Plan Quantity": +excelRawData[i].quantity,
              "Approved Quantity": +excelRawData[i].approvedQuantity,
              "Un Approved Quantity": +excelRawData[i].unapprovedQuantity,
              "Approved Deleted": +excelRawData[i].deletedApprQuantity,
              "UnApproved Deleted": +excelRawData[i].deletedUnApprQuantity,
              "Reserved": +excelRawData[i].reservedQuantity,
              "Loaded": +excelRawData[i].loaded,
              "Dispatched Quantity": +excelRawData[i].dispatchedQuantity,
              "Available Quantity": +excelRawData[i].availableQuantity,
              "Total Available Quantity": +excelRawData[i].totalAvailableQuantity,
              "Quantity to be Approval": +excelRawData[i].approvalQuantity,
              "Quantity to be UnApproval": +excelRawData[i].unapprovalQuantity,
              "Avail TTE": excelRawData[i].availbleTTE ? +excelRawData[i].availbleTTE.toFixed(2) : 0,
              "Truck Count": excelRawData[i].truckCount ? +excelRawData[i].truckCount.toFixed(2) : 0,
              "Weight (Kg)": excelRawData[i].weight ? +excelRawData[i].weight.toFixed(2) : 0,
              "Available Weight (Kg)": excelRawData[i].totalWeight ? +excelRawData[i].totalWeight.toFixed(2) : 0,
              "Weight Util (%)": excelRawData[i].weightUtil ? +excelRawData[i].weightUtil.toFixed(2) : 0,
              "Volume (CUMTR)": excelRawData[i].volume ? +excelRawData[i].volume.toFixed(2) : 0,
              "Available Volume (CUMTR)": excelRawData[i].totalVolume ? +excelRawData[i].totalVolume.toFixed(2) : 0,
              "Volume Util (%)": excelRawData[i].volumeUtil ? +excelRawData[i].volumeUtil.toFixed(2) : 0,
              "Plan Status": excelRawData[i].status,
              "Insert User": excelRawData[i].insertUser,
              "Update User": excelRawData[i].updateUser,
              "Insert Date": this.service.customDateTimeFormat(excelRawData[i].insertDate),
              "Update Date": this.service.customDateTimeFormat(excelRawData[i].updateDate),
              "Plan Age (Days)": excelRawData[i].planAge,
              "Comments": excelRawData[i].comments,
              "status": excelRawData[i].appStatus
            }

            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'ApprovedPlans.xlsx');
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

  //filter material description 
  filterMaterialDescription(event) {
    this.materialCode = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.materialDescriptionList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?materialDesc=' + filtervalue).subscribe(response => {
        this.materialDescriptionList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  emptySumm() {
    return null;
  }

  // set material code 
  setMaterialCode(value) {
    setTimeout(() => {
      this.materialCode = value;
    }, 300);
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

  // show Comments
  showIntegrationMessage(row) {
    this.modalComment = row.comments;
    $("#commnetsModal").modal('show');
  }
  onFooterPage(data) {
    console.log(data);

  }
}




