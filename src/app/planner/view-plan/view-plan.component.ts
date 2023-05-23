import { HelperServiceService } from './../../services/helper-service/helper-service.service';
import { Component, OnInit, ViewChild, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { DateAdapter, MAT_DATE_FORMATS, MatDatepickerInputEvent } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../public/date.adapters';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
import { constants } from '../../constants';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as moment from 'moment';
declare var $: any;
export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html',
  styleUrls: ['./view-plan.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class ViewPlanComponent implements OnInit, DoCheck {
  ngDoCheck(){
    let width = $(window).width();
    if(width < 1024) {
      this.freezeLeftValue = false;
    }
    else {
      this.freezeLeftValue = true;
    }
  }

  totalTruckPercentage: number = 0;
  totalTTEPercentageSum: number = 0;
  openPlanSourceList = [];
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
  totalWeightSum: number = 0;
  weightSum: number = 0;
  volumeSum: number = 0;
  totalWeightUtilSum: number = 0;
  totalVolumeSum: number = 0;
  totalVolumeUtilSum: number = 0;
  standredFTLTTE: number;
  standardFTLWeight: number;
  standardFTLVolumne: number;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  fileName: string = 'viewplans.xlsx';
  isShow: boolean = true;
  descriptionList = [];
  destinationDesc: '';
  page = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  selected = [];
  allRowsSelected: boolean = false;
  pageSize: number;
  materialGroup = [];
  updateUser: string;
  status = [];
  planId: number;
  materialCode: any;
  mktsegment: any;
  destination = '';
  destinationList = [];
  index: number;
  dispatchPlanList = [];
  materilcodelist = [];
  materialDescription = '';
  isLoading: boolean = false;
  minDate = new Date();
  currentDate = this.helperService.getTodayDate();
  currentDateAsString = this.helperService.getTodayDateASString();
  statuses = [];
  materialDescriptionList: any[];
  source: string;
  filterPlanStatus = [];
  mktsegmentList = [];
  categoryList = [];
  fromDispatchDate: string = '';
  toDispatchDate: string = '';
  toDate: string = '';
  fromDate: string = '';
  tteCalculateblePlans = [];
  priorityList = [];
  priority = [];
  // totalTruckPercentage: number = 0;
  // totalTTEPercentageSum: number = 0;
  roles: { "planner1": string; "plannner2": string; "planner3": string; "transporter": string; "fgsOperations1": string; "fgsOperations2": string; "fgsOperations4": string; "gateSecurity": string; "rdc_PLN": string; "rdc_GAT": string; "JIT_OPERATION": string; "JIT_GATE_SECURITY": string; "EXPORT_CHA": string; "ABU_PLN": string; "L1MGR": string; "L2MGR": string; };
  planStatusList: { "key": string; "value": string; }[];
  planStatus: any;
  insertUser: any;
  sourceList: any[];
  sourceCode: any;
  isViewPlans: boolean = true;
  check_Role_DP_REP: string;
  modalComment: any;
  sourceCodeList = [];
  freezeLeftValue: boolean = true;
  constructor(
    private service: ApiserviceService,
    private toastr: ToastrService,
    private helperService: HelperServiceService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.roles = constants.roles;
    localStorage.setItem("userMenu", "dispatch-plan");
    this.statuses = constants.planStatus;
    this.source = localStorage.getItem('sourceID');
    // (localStorage.getItem("sourceID") != null && localStorage.getItem("sourceID") != '') ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
    // this.filterPlanStatus = constants.filterPlanStatus
    let routePlanId = this.activatedRoute.snapshot.params['planId']
    this.planStatusList = constants.planStatusList;
    this.check_Role_DP_REP = this.service.checkRole();
    // For DP_REP / Externalwarehouse role user can change the source location but other user it can't changes
    // That why we giving default selection
    if (this.isSoureDisable()) {
      this.sourceCode = localStorage.getItem("sourceID");
      this.isViewPlans = false;
      (localStorage.getItem("sourceID") != null && localStorage.getItem("sourceID") != '') ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
    }
    // for getting plan data with planId and without planId
    this.getPlanData(routePlanId);
    //for getting category master data
    this.getCategoryMasterData();
    this.getMarketSegment();
    this.getPriorityList();
    if (this.service.isDPREPRole() || this.service.CheckExtWareHouse()) {
      this.getPlansSourceList();
    } else {
      this.openPlanSourceList.push(localStorage.getItem("sourceID"))
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

  isSoureDisable() {
    // source Not disable for DP_REP, L1_MGR, L2_MGR role & External warehouses, if roles not belongs to DP_REP & External wareHouse we are returning boolean value which makes  disable 
    if ((this.check_Role_DP_REP !== this.roles.planner3 && this.check_Role_DP_REP !== this.roles.L1MGR && this.check_Role_DP_REP !== this.roles.L2MGR)
      && (!this.service.CheckExtWareHouse())) {
      return true
    } else {
      return false
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

  // for getting plan data with planId and without planId
  getPlanData(routePlanId) {
    if (routePlanId) {
      this.isLoading = true;
      this.planId = routePlanId;
      let bodyData = {
        'planId': routePlanId,
        // 'sourceCode': this.sourceCode,
        'isViewPlans': this.isViewPlans,
        'sourceCodeList': this.sourceCodeList
      }
      this.getViewPlanData(bodyData)
    } else {
      let bodyData = {
        'fromDispatchDate': this.currentDate,
        "toDispatchDate": this.currentDate,
        // 'sourceCode': this.sourceCode,
        // 'statuses': this.filterPlanStatus,
        'isViewPlans': this.isViewPlans,
        'sourceCodeList': this.sourceCodeList
      };
      this.fromDate = this.currentDateAsString
      this.toDate = this.fromDate;
      this.getViewPlanData(bodyData);
    }
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

  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }
  // for getting view plan data
  getViewPlanData(bodyData) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.planinfo, bodyData).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.clearAllSum();
        this.page.count = response['data'].total;
        this.page.limit = response['data'].pageLength;
        let responseData = response['data'].planItems;
        // this.standredFTLTTE = response['data'].standardFtlTteCapacity;
        // this.standardFTLWeight = response['data'].standardFtlWeight;
        // this.standardFTLVolumne = response['data'].standardFTLVolumne;
        //  responseData.forEach(element => {
        // // Weight Util values calculations
        // element.weightUtil = (((element.weight ? element.weight : 0) / this.standardFTLWeight) * 100);
        // // Volume Util values calculations
        // element.volumeUtil = (((element.volume ? element.volume : 0) / this.standardFTLVolumne) * 100);
        // if (this.service.checkRole() == this.roles.rdc_PLN) {
        //   element.truckPercentage = (((element.quantity ? element.quantity : 0) * (element.tte ? element.tte : 0)) / this.standredFTLTTE);
        //   element.availableTTE = ((element.quantity ? element.quantity : 0) * (element.tte ? element.tte : 0));
        // } else {
        //   element.truckPercentage = (((element.availableQuantity ? element.availableQuantity : 0) * (element.tte ? element.tte : 0)) / this.standredFTLTTE);
        //   element.availableTTE = ((element.availableQuantity ? element.availableQuantity : 0) * (element.tte ? element.tte : 0));
        // }
        // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
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
        // });
        this.dispatchPlanList = [...responseData];
        this.isLoading = false
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        this.isLoading = false;
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    });
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    console.log("------>To Date", this.toDate);
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
    if (event.target.value) {
      if (this.toDate && (this.fromDate > checkToDate)) {
        this.toDate = '';
      }
    }
    // this.toDate = '';
  }


  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.resetSummaryData();
    let offset = pageInfo.offset;
    this.tteCalculateblePlans = [];
    this.selected = [];
    this.forDateValidation();
    this.clearAllSum();
    let bodyData = {
      'fromDispatchDate': this.fromDispatchDate,
      'toDispatchDate': this.toDispatchDate,
      'index': offset,
      'pageLength': pageInfo.pageSize,
      'destinationCode': this.destination,
      'marketSegment': this.mktsegment,
      'materialCode': this.materialCode,
      'materialDescription': this.materialDescription,
      'materialGroup': this.materialGroup,
      'planId': this.planId,
      'status': this.status,
      // 'statuses': this.filterPlanStatus,
      // 'source': this.source,
      'planStatus': this.planStatus,
      // 'sourceCode': this.sourceCode,
      "updateUser": this.updateUser,
      'insertUser': this.insertUser,
      'isViewPlans': this.isViewPlans,
      'priorityList': this.priority,
      'sourceCodeList': this.sourceCodeList
    }

    this.getViewPlanData(bodyData);
  }

  // clear the data what the user entered
  clearAll() {
    this.destination = '';
    this.mktsegment = [];
    this.materialCode = "";
    this.fromDate = '';
    this.toDate = '';
    this.materialDescription = "";
    this.destinationDesc = "";
    this.materialGroup = [];
    this.descriptionList = [];
    this.planId = null;
    this.status = [];
    this.destinationList = [];
    this.materilcodelist = [];
    this.tteCalculateblePlans = [];
    this.selected = [];
    this.planStatus = [];
    this.insertUser = '';
    this.sourceList = [];
    this.sourceCode = '';
    this.updateUser = '';
    this.priority = [];
    this.sourceCodeList = [];

    // For DP_REP role user can change the source location but other user it can't changes
    // That why we giving default selection
    if (this.isSoureDisable()) {
      this.sourceCode = localStorage.getItem("sourceID");
      (localStorage.getItem("sourceID") != null && localStorage.getItem("sourceID") != '') ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
    }
  }

  // refresh page data
  refreshData() {
    this.table.offset = 0;
    this.clearAll();
    this.clearAllSum();
    this.resetSummaryData();
    let bodyData = {
      'fromDispatchDate': this.currentDate,
      "toDispatchDate": this.currentDate,
      // 'sourceCode': this.sourceCode,
      // 'statuses': this.filterPlanStatus,
      'isViewPlans': this.isViewPlans,
      'sourceCodeList': this.sourceCodeList
    };
    this.currentDateAsString = this.helperService.getTodayDateASString();
    this.fromDate = this.currentDateAsString;
    this.toDate = this.fromDate;
    this.getViewPlanData(bodyData);
  }

  // filter destination list by user search 
  getUserSearchData(event) {
    this.destinationDesc = '';
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

  // set material code
  setMaterialCode(value) {
    setTimeout(() => {
      this.materialCode = value;
    }, 300);
  }

  //set value for material description
  setMaterialDescription(value) {
    this.materialDescription = value;
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


  //planner search by using custom filter 
  plannerSearch() {
    this.tteCalculateblePlans = [];
    this.resetSummaryData();
    this.selected = [];
    this.table.offset = 0;
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
      // 'statuses': this.filterPlanStatus,
      // 'sourceLocation': this.source,
      'planStatus': this.planStatus,
      'insertUser': this.insertUser,
      "updateUser": this.updateUser,
      // 'sourceCode': this.sourceCode,
      'isViewPlans': this.isViewPlans,
      'priorityList': this.priority,
      'sourceCodeList': this.sourceCodeList
    }

    if (this.fromDate != '' && this.fromDate != null) {
      if (this.toDate != '' && this.toDate != null) {
        this.dispatchPlanList = [];
        this.getViewPlanData(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.getViewPlanData(bodyData);
    }

  }

  // show filter icon and hide 

  showFilter() {
    this.isShow = !this.isShow
  }

  //export excel data
  export(): void {
    if (this.dispatchPlanList.length > 0) {
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
        // 'statuses': this.filterPlanStatus,
        // 'sourceLocation': this.source,
        'planStatus': this.planStatus,
        'insertUser': this.insertUser,
        "updateUser": this.updateUser,
        // 'sourceCode': this.sourceCode,
        'isViewPlans': this.isViewPlans,
        'priorityList': this.priority,
        'sourceCodeList': this.sourceCodeList
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
              "TTE": +excelRawData[i].tte,
              "Batch": excelRawData[i].batchCode,
              "Priority": excelRawData[i].priority,
              "Mkt Segment": excelRawData[i].marketSegment,
              "Plan Quantity": +excelRawData[i].quantity,
              "Approved Quantity": +excelRawData[i].approvedQuantity,
              "Unapproved Quantity": +excelRawData[i].unapprovedQuantity,
              "Approved Delete": +excelRawData[i].deletedApprQuantity,
              "Unapproval Delete": +excelRawData[i].deletedUnApprQuantity,
              "Reserved": +excelRawData[i].reservedQuantity,
              "Loaded": +excelRawData[i].loaded,
              "Dispatch Quantity": +excelRawData[i].dispatchedQuantity,
              "Avaliable Quantity": +excelRawData[i].availableQuantity,
              "Total Availble Quantity": +excelRawData[i].totalAvailableQuantity,
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







  //truck Percentage
  // truckPercantage(data) {
  //   console.log('trcukpercentage called');
  //   let row = data;
  //   let standredFTLTTE = 122;
  //   return (((row.availableQuantity ? row.availableQuantity : 0) * (row.tte ? row.tte : 0)) / standredFTLTTE)
  // }


  onSelect(event, data) {
    if (event.target.checked) {
      this.tteCalculateblePlans.push(data);
    } else {
      let index = this.tteCalculateblePlans.indexOf(data);
      this.tteCalculateblePlans.splice(index, 1);
    }
    this.tteSum = this.tteCalculateblePlans.reduce((sum, { tte }) => sum + tte, 0);
    this.planQtySum = this.tteCalculateblePlans.reduce((sum, { quantity }) => sum + quantity, 0);
    this.apprQtySum = this.tteCalculateblePlans.reduce((sum, { approvedQuantity }) => sum + approvedQuantity, 0);
    this.unapprQtySum = this.tteCalculateblePlans.reduce((sum, { unapprovedQuantity }) => sum + unapprovedQuantity, 0);
    this.apprDeleteQtySum = this.tteCalculateblePlans.reduce((sum, { deletedApprQuantity }) => sum + deletedApprQuantity, 0);
    this.unapprDeleteQtySum = this.tteCalculateblePlans.reduce((sum, { deletedUnApprQuantity }) => sum + deletedUnApprQuantity, 0);
    this.reservedQtySum = this.tteCalculateblePlans.reduce((sum, { reservedQuantity }) => sum + reservedQuantity, 0);
    this.loadedQtySum = this.tteCalculateblePlans.reduce((sum, { loaded }) => sum + loaded, 0);
    this.dispatchedQtySum = this.tteCalculateblePlans.reduce((sum, { dispatchedQuantity }) => sum + dispatchedQuantity, 0);
    this.availableQtySum = this.tteCalculateblePlans.reduce((sum, { availableQuantity }) => sum + availableQuantity, 0);
    this.totalAvailableQtySum = this.tteCalculateblePlans.reduce((sum, { totalAvailableQuantity }) => sum + totalAvailableQuantity, 0);
    this.totalTTEPercentageSum = this.tteCalculateblePlans.reduce((sum, { availbleTTE }) => sum + availbleTTE, 0);
    this.TruckPercentageSum = this.tteCalculateblePlans.reduce((sum, { truckCount }) => sum + truckCount, 0);
    this.weightSum = this.tteCalculateblePlans.reduce((sum, { weight }) => sum + weight, 0);
    this.totalWeightSum = this.tteCalculateblePlans.reduce((sum, { totalWeight }) => sum + totalWeight, 0);
    this.totalWeightUtilSum = this.tteCalculateblePlans.reduce((sum, { weightUtil }) => sum + weightUtil, 0);
    this.volumeSum = this.tteCalculateblePlans.reduce((sum, { volume }) => sum + volume, 0);
    this.totalVolumeSum = this.tteCalculateblePlans.reduce((sum, { totalVolume }) => sum + totalVolume, 0);
    this.totalVolumeUtilSum = this.tteCalculateblePlans.reduce((sum, { volumeUtil }) => sum + volumeUtil, 0);
  }
  //reset the data in the table summary data
  resetSummaryData() {
    this.tteSum = 0;
    this.planQtySum = 0; this.apprQtySum = 0; this.unapprQtySum = 0; this.apprDeleteQtySum = 0;
    this.unapprDeleteQtySum = 0; this.reservedQtySum = 0; this.loadedQtySum = 0; this.dispatchedQtySum = 0;
    this.availableQtySum = 0; this.totalAvailableQtySum = 0; this.totalTTEPercentageSum = 0; this.TruckPercentageSum = 0;
  }
  // On selection of checkboxes in the table
  onSelectAll(event) {
    this.tteCalculateblePlans = [];
    this.dispatchPlanList.forEach(data => {
      this.onSelect(event, data);
    });
  }

  emptySumm() {
    return null;
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

}


