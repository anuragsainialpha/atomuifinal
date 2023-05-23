import { HelperServiceService } from './../../services/helper-service/helper-service.service';
import { Component, OnInit, ViewChild, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { DateAdapter, MAT_DATE_FORMATS, MatDialog } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../public/date.adapters';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { constants } from '../../constants';
import { ModifyPlanDeleteConfirmationComponent } from 'src/app/public/modify-plan-delete-confirmation/modify-plan-delete-confirmation.component';
import * as moment from 'moment';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;
@Component({
  selector: 'app-modify-plan',
  templateUrl: './modify-plan.component.html',
  styleUrls: ['./modify-plan.component.scss'],
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
export class ModifyPlanComponent implements OnInit, DoCheck {
  newModifyPlanData: any[];
  isError: boolean = false;
  datatablesBatchcodeList: any[];
  datatableDestinationList: any[];
  datamaterilcodelist = [];
  isLoading: boolean = false;
  isShow: boolean = true;
  editing = {};
  modifyPlanData = [];
  editableArr = [];
  statuses = [];
  planData = [];
  openPlanSourceList = [];
  page = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  pageSize: number;
  insertUser: string;
  materialGroup = [];
  status: any;
  planId: number;
  materialCode: any;
  mktsegment: any;
  destination = '';
  destinationDesc: any;
  descriptionList = [];
  destinationList = [];
  index: number;
  materilcodelist = [];
  materialDescription = '';
  minDate = new Date();
  selected = [];
  planInfoIds = [];
  materialDescriptionList: any[];
  filterPlanStatus = [];
  source: string;
  currentDate = this.helperService.getTodayDate();
  currentDateAsString = this.helperService.getTodayDateASString();
  @ViewChild(DatatableComponent) table: DatatableComponent;
  mktsegmentList = [];
  categoryList = [];
  fromDispatchDate: string = '';
  toDispatchDate: string = '';
  toDate: string = '';
  fromDate: string = '';
  markasDeletePlans = [];
  sourceCodeList = [];
  planStatusList: { "key": string; "value": string; }[];
  planStatus: any;
  sourceList: any[];
  sourceCode: any;
  check_Role_DP_REP: string;
  modalComment: any;
  roles: any;
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
  standardFTLVolumne: number = 0;
  priorityList = [];
  priority = [];
  freezeLeftValue: boolean = true;
  responsiveHideShow: boolean = true;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService,
    private helperService: HelperServiceService,
    public dialog: MatDialog,
  ) { }
  ngDoCheck() {
    let width = $(window).width();
    if(width <= 1024) {
      this.freezeLeftValue = false;
      this.responsiveHideShow = false;
    }
    else {
      this.freezeLeftValue = true;
      this.responsiveHideShow = true;
    }
  }
  ngOnInit() {
    localStorage.setItem("userMenu", "dispatch-plan");
    this.statuses = constants.planStatus;
    this.filterPlanStatus = constants.filterPlanStatus;
    this.source = localStorage.getItem("sourceID");
    // localStorage.getItem("sourceID") ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
    this.roles = constants.roles;
    this.index = 0;
    this.planStatusList = constants.planStatusList;
    this.check_Role_DP_REP = this.service.checkRole();
    if(this.isSoureDisable()){
      this.sourceCode = localStorage.getItem("sourceID");
      (localStorage.getItem("sourceID") != null && localStorage.getItem("sourceID") != '') ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
    }
    //for getting modify plan 
    let bodyData = {
      'fromDispatchDate': this.currentDate,
      'toDispatchDate': this.currentDate,
      'statuses': this.filterPlanStatus,
      // 'sourceLocation': this.source,
      'sourceCodeList': this.sourceCodeList,
    }
    this.fromDate = this.currentDateAsString
    this.toDate = this.fromDate;
    this.getModifyPlan(bodyData);

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

  //for getting modify plan 
  getModifyPlan(bodyData) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.planinfo, bodyData).subscribe(response => {
      if (response['statusCode'] == 200) {
        let responseData = response['data'].planItems;
        this.clearAllSum();
        responseData.forEach(element => {
          // for Row Level TTE count,weight util calculation standred values
          this.standredFTLTTE = response['data'].standardFtlTteCapacity;
          this.standardFTLWeight = response['data'].standardFtlWeight;
          this.standardFTLVolumne = response['data'].standardFTLVolumne;
          let gettheDate = element.dispatchDate;
          let splittedData = gettheDate.split("/");
          let createNewDate = splittedData[1] + "/" + splittedData[0] + "/" + splittedData[2]
          // Formatted new key for autopopulation of date for datepicker
          element.formattedDate = new Date(createNewDate).toISOString();
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
        });
        this.modifyPlanData = [...responseData];
        this.page.count = response['data'].total;
        this.page.limit = response['data'].pageLength;
        this.isLoading = false;
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        this.isLoading = false;
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }
  //for getting category master data
  getCategoryMasterData() {
    this.service.get_service(ApiserviceService.apisList.categoryMasterData).subscribe(response => {
      this.categoryList = response['data'];
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
    })
  }
  getPriorityList(){
    this.service.get_service(ApiserviceService.apisList.getPriorityList).subscribe(response =>{
      if(response['statusCode'] == 200){
        this.priorityList = response['data'];
      }else{
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
  // onPageSizeChanged(event) {
  //   this.page.limit = event;
  //   this.page.pageSize = this.pageSize;
  //   this.datatablePageData(this.page);
  // }

  isEdit(row) {
    let dispQty = (row.dispatchedQuantity) ? (row.dispatchedQuantity) : 0;
    let reserveQty = (row.reservedQuantity) ? (row.reservedQuantity) : 0;
    let loadQty = (row.loaded) ? (row.loaded) : 0;
    if ((dispQty == 0) && (reserveQty == 0) && (loadQty == 0)) {
      return true
    }
    else {
      return false
    }

  }
  isView(row) {
    let dispQty = (row.dispatchedQuantity) ? (row.dispatchedQuantity) : 0;
    let reserveQty = (row.reservedQuantity) ? (row.reservedQuantity) : 0;
    let loadQty = (row.loaded) ? (row.loaded) : 0;
    if ((dispQty > 0) || (reserveQty > 0) || (loadQty > 0)) {
      return true
    } else {
      return false
    }

  }

  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.selected = [];
    this.markasDeletePlans = [];
    this.index = pageInfo.offset;
    this.forDateValidation();
    this.clearAllSum();
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
      'statuses': this.filterPlanStatus,
      // 'sourceLocation': this.source,
      // 'sourceCode': this.sourceCode,
      'planStatus': this.planStatus,
      'insertUser': this.insertUser,
      'priorityList':this.priority,
      'sourceCodeList': this.sourceCodeList,
    }
    this.getModifyPlan(bodyData);
  }


  returnFormateDate(data) {
    let formatted = new Date(data),
      mnth = ("0" + (formatted.getMonth() + 1)).slice(-2),
      day = ("0" + formatted.getDate()).slice(-2);
    return [day, mnth, formatted.getFullYear()].join("/");
  }
  onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }

  updateValue(row, event, cell, rowIndex) {
    let modifyIndex = this.modifyPlanData.findIndex(data => data.id == row.id)
    if (cell == 'dispatchDate') {
      this.modifyPlanData[modifyIndex][cell] = this.returnFormateDate(event.target.value);
      let splittedData = this.modifyPlanData[modifyIndex][cell].split("/");
      let createNewDate = splittedData[1] + "/" + splittedData[0] + "/" + splittedData[2]
      this.modifyPlanData[modifyIndex]['formattedDate'] = new Date(createNewDate).toISOString();
    } else if (cell == 'deleteApprQuantity') {
      this.modifyPlanData[modifyIndex][cell] = (event.target.value == "") ? 0 : event.target.value;
    } else {
      this.modifyPlanData[modifyIndex][cell] = (event.target !== undefined) ? (event.target.value) : event;
      console.log(this.modifyPlanData[modifyIndex][cell]);

    }

    // this.editing[modifyIndex + '-' + cell] = false;
    this.modifyPlanData = [...this.modifyPlanData];
  }


  // Row level Modify Plans
  rowLevelModifyPlan(row) {
    let arry = [];
    if (row.deleteUnApprQuantity == '')
      row.deleteUnApprQuantity = 0;

    if (row.deleteApprQuantity == '')
      row.deleteApprQuantity = 0;

    arry.push(row);
    this.modifyService(arry);
  }

  // Multi level modify plans
  multilevelModifyPlan() {
    // for(let plan of this.markasDeletePlans){
    //   if(plan['deleteApprQuantity'] == ""){
    //     plan['deleteApprQuantity'] = 0
    //   }
    // }
    let data = this.markasDeletePlans;
    this.modifyService(data);
  }

  //Modify Plans service 
  modifyService(data) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.modifyPlan, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.editing = {};
        this.selected = [];
        this.markasDeletePlans = [];
        this.clearAllSum();
        let responseArray = response['data'];
        responseArray.forEach(element => {
          // Find the index to update
          let index = this.modifyPlanData.findIndex(ele => element.id == ele.id);
          // add new column in the object "formattedDate" for date autopopulate for datepicker
          let gettheDate = element.dispatchDate;
          let splittedData = gettheDate.split("/");
          let createNewDate = splittedData[1] + "/" + splittedData[0] + "/" + splittedData[2]
          element.formattedDate = new Date(createNewDate).toISOString();
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
          if (index > -1) {
            this.modifyPlanData[index] = element;
          }
        });
        this.modifyPlanData = [...this.modifyPlanData];
        this.isLoading = false;
        this.toastr.success(response['message']);
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  // Delete plan data
  rowlevelDeletePlan(row) {
    let arr = [];
    arr.push(row.id);
    this.openDelteConformationPopup(arr);
  }
  multilevelDeletePlan() {
    let arr = [];
    this.markasDeletePlans.forEach(element => {
      if ((element.dispatchedQuantity == 0) && (element.reservedQuantity == 0) && (element.loaded == 0)) {
        arr.push(element.id);
      }
    })
    this.openDelteConformationPopup(arr);
  }

  openDelteConformationPopup(data) {
    const dialogRef = this.dialog.open(ModifyPlanDeleteConfirmationComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.isLoading = true;
        this.deleteService(data)
      }
    })
  }
  // Delete service
  deleteService(data) {
    this.service.delete_service_multiParam(ApiserviceService.apisList.ModifyPlansdelete, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.isLoading = false;
        this.selected = [];
        this.markasDeletePlans = [];
        this.clearAllSum();
        data.forEach(element => {
          let index = this.modifyPlanData.findIndex(item => item.id == element);
          this.modifyPlanData.splice(index, 1);
        });
        this.modifyPlanData = [...this.modifyPlanData]
        this.toastr.success(response['message'])
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
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
    this.descriptionList = [];
    this.materialGroup = [];
    this.planId = null;
    this.status = []
    this.materilcodelist = [];
    this.destinationList = [];
    this.planStatus = [];
    this.insertUser = '';
    this.sourceCode = '';
    this.sourceList = [];
    this.priority = [];
    this.sourceCodeList = [];

    if(this.isSoureDisable()){
      this.sourceCode = localStorage.getItem("sourceID");
      (localStorage.getItem("sourceID") != null && localStorage.getItem("sourceID") != '') ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
    }

  }

  //refersh data 
  refreshData() {
    this.selected = [];
    this.markasDeletePlans = [];
    this.modifyPlanData = [];
    this.table.offset = 0;
    this.clearAll();
    this.forDateValidation();
    this.clearAllSum();
    let bodyData = {
      'fromDispatchDate': this.currentDate,
      'toDispatchDate': this.currentDate,
      'destinationCode': this.destination,
      'index': 0,
      'marketSegment': this.mktsegment,
      'materialCode': this.materialCode,
      'materialDescription': this.materialDescription,
      'materialGroup': this.materialGroup,
      'pageLength': this.page.limit,
      'planId': this.planId,
      'status': this.status,
      'statuses': this.filterPlanStatus,
      // 'sourceLocation': this.source,
      'insertUser': this.insertUser,
      // 'sourceCode': this.sourceCode
      'sourceCodeList': this.sourceCodeList
    }
    this.currentDateAsString = this.helperService.getTodayDateASString();
    this.fromDate = this.currentDateAsString;
    this.toDate = this.fromDate;
    this.getModifyPlan(bodyData);
  }

  // filter destination list
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

  // set material code
  setMaterialCode(value) {
    setTimeout(() => {
      this.materialCode = value;
    }, 300);
  }

  // filter destination lsit for datatable
  getdatatableDestinatinList(event) {
    let destinationKey = event.target.value;
    if (event.target.value.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.datatableDestinationList = [];
      let index = 0;
      this.isLoading = true
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + destinationKey + "&index=" + index).subscribe(response => {
        this.datatableDestinationList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  // filter batch code in datatable
  datatablesBatchcode(event) {
    let destinationKey = event.target.value;

    if (event.target.value.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.datatablesBatchcodeList = [];
      let index = 0;
      this.isLoading = true
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?batchCode=' + destinationKey + "&index=" + index).subscribe(response => {
        this.datatablesBatchcodeList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }


  //filter material code by user input
  filterMaterialCode(event, rowIndex) {
    let filtervalue = event.target.value;
    this.materialDescription = '';
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.materilcodelist = [];
      this.materialDescription = '';
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

  // material code filter api for datatables
  filterMaterialCodeDatatables(event, rowIndex) {
    let indexdata = rowIndex;
    let filtervalue = event.target.value;
    this.modifyPlanData[indexdata]['itemDescription'] = '';
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.datamaterilcodelist = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?materialCode=' + filtervalue).subscribe(response => {
        this.datamaterilcodelist = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  //set value for material description
  setMaterialDescription(value) {
    this.materialDescription = value;
  }

  // set values for materila description for datatable
  setMaterialDesDatatable(value, rowIndex) {
    setTimeout(() => {
      this.modifyPlanData[rowIndex]['itemDescription'] = value;
    }, 200);
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
  plannerSearch() {
    this.selected = [];
    this.markasDeletePlans = [];
    this.table.offset = 0;
    this.forDateValidation();
    let bodyData = {
      'fromDispatchDate': this.fromDispatchDate,
      'toDispatchDate': this.toDispatchDate,
      'destinationCode': this.destination,
      'index': this.page.offset,
      'marketSegment': this.mktsegment,
      'materialCode': this.materialCode,
      'materialDescription': this.materialDescription,
      'materialGroup': this.materialGroup,
      'pageLength': this.page.limit,
      'planId': this.planId,
      'status': this.status,
      'statuses': this.filterPlanStatus,
      // 'sourceLocation': this.source,
      // 'sourceCode': this.sourceCode,
      'planStatus': this.planStatus,
      'insertUser': this.insertUser,
      'priorityList':this.priority,
      'sourceCodeList': this.sourceCodeList
    }
    if (this.fromDate != '' && this.fromDate != null) {
      if (this.toDate != '' && this.toDate != null) {
        this.modifyPlanData = [];
        this.getModifyPlan(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.getModifyPlan(bodyData);
    }
  }
  showFilter() {
    this.isShow = !this.isShow
  }

  deleteApprQty(event, row, rowIndex) {
    let rowData = row;
    ///rowData.deletedUnApprQuantity = 0;
    if (Number(event.target.value) <= row.availableQuantity) {
      //proced further
      row.isError = false;
    } else {
      row.isError = true;
      this.toastr.error("Approval Delete Quantity sholud be less than or equal to Avaliable Quantity")
    }
  }

  deleteUnApprQty(event, row, rowIndex) {
    let rowData = row;
    //rowData.deletedUnApprQuantity = 0;
    // if (Number(event.target.value) <= (row.unapprovedQuantity - row.deletedUnApprQuantity)) 
    if (Number(event.target.value) <= (row.unapprovedQuantity)) {
      //proced further
      row.isError = false;
    } else {
      row.isError = true;
      this.toastr.error("UnApproval Delete Quantity sholud be less than or equal to Un Approved Quantity")
    }
  }

  editPlanQty(event, row, rowIndex) {
    let rowData = row;
    //rowData.deletedUnApprQuantity = 0;
    if (Number(event.target.value) >= (row.approvedQuantity)) {
      //proced further
      row.isError = false;
    } else {
      row.isError = true;
      this.toastr.error(" Quantity sholud be more than or equal to Approved Quantity")
    }
  }

  onSelect(event, data) {
    if (event.target.checked) {
      if (data.availableQuantity > 0) {
        data.deleteApprQuantity = data.availableQuantity
      }
      this.markasDeletePlans.push(data);
    } else {
      data.deleteApprQuantity = 0;
      let index = this.markasDeletePlans.indexOf(data);
      this.markasDeletePlans.splice(index, 1);
    }
    console.log(this.markasDeletePlans, "markasDeletePlans");
    this.tteSum = this.markasDeletePlans.reduce((sum, { tte }) => sum + tte, 0);
    this.planQtySum = this.markasDeletePlans.reduce((sum, { quantity }) => sum + quantity, 0);
    this.apprQtySum = this.markasDeletePlans.reduce((sum, { approvedQuantity }) => sum + approvedQuantity, 0);
    this.unapprQtySum = this.markasDeletePlans.reduce((sum, { unapprovedQuantity }) => sum + unapprovedQuantity, 0);
    this.apprDeleteQtySum = this.markasDeletePlans.reduce((sum, { deletedApprQuantity }) => sum + deletedApprQuantity, 0);
    this.unapprDeleteQtySum = this.markasDeletePlans.reduce((sum, { deletedUnApprQuantity }) => sum + deletedUnApprQuantity, 0);
    this.reservedQtySum = this.markasDeletePlans.reduce((sum, { reservedQuantity }) => sum + reservedQuantity, 0);
    this.loadedQtySum = this.markasDeletePlans.reduce((sum, { loaded }) => sum + loaded, 0);
    this.dispatchedQtySum = this.markasDeletePlans.reduce((sum, { dispatchedQuantity }) => sum + dispatchedQuantity, 0);
    this.availableQtySum = this.markasDeletePlans.reduce((sum, { availableQuantity }) => sum + availableQuantity, 0);
    this.totalAvailableQtySum = this.markasDeletePlans.reduce((sum, { totalAvailableQuantity }) => sum + totalAvailableQuantity, 0);
    this.totalTTEPercentageSum = this.markasDeletePlans.reduce((sum, { availbleTTE }) => sum + availbleTTE, 0);
    this.TruckPercentageSum = this.markasDeletePlans.reduce((sum, { truckCount }) => sum + truckCount, 0);
    this.weightSum = this.markasDeletePlans.reduce((sum, { weight }) => sum + weight, 0);
    this.totalWeightSum = this.markasDeletePlans.reduce((sum, { totalWeight }) => sum + totalWeight, 0);
    this.totalWeightUtilSum = this.markasDeletePlans.reduce((sum, { weightUtil }) => sum + weightUtil, 0);
    this.volumeSum = this.markasDeletePlans.reduce((sum, { volume }) => sum + volume, 0);
    this.totalVolumeSum = this.markasDeletePlans.reduce((sum, { totalVolume }) => sum + totalVolume, 0);
    this.totalVolumeUtilSum = this.markasDeletePlans.reduce((sum, { volumeUtil }) => sum + volumeUtil, 0);
  }

  onSelectAll(event) {
    this.markasDeletePlans = [];
    this.modifyPlanData.forEach(data => {
      this.onSelect(event, data);
    });
  }

  markasDelete( ) {
    // this.markasDeletePlans
  }
  // Clearing all the sum values after success response
  clearAllSum(){
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

  //export excel data
  export(): void {
    if (this.modifyPlanData.length > 0) {
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
        'statuses': this.filterPlanStatus,
        // 'sourceLocation': this.source,
        'sourceCodeList': this.sourceCodeList,
        'planStatus': this.planStatus,
        'insertUser': this.insertUser,
        'priorityList':this.priority,
      }
      this.isLoading = true;
      this.newModifyPlanData = [];
      this.service.post_service(ApiserviceService.apisList.planinfo, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          this.newModifyPlanData = response['data'].planItems;
          let excelRawData = this.newModifyPlanData;
          let newExcelData = [];
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
            let data = {
              "PlanId": excelRawData[i].planId,
              "Dispatch Date": excelRawData[i].dispatchDate,
              "Source": excelRawData[i].sourceLocation,
              "Destination": excelRawData[i].destinationLocation,
              "Material Code": excelRawData[i].itemId,
              "Material Description": excelRawData[i].itemDescription,
              "Dest Description": excelRawData[i].destinationDescription,
              "Category": excelRawData[i].category,
              // "Insert User": excelRawData[i].insertUser,
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
              "Quantity to be Delete Approval": +excelRawData[i].deleteApprQuantity,
              "Quantity to be Delete UnApproval": +excelRawData[i].deleteUnApprQuantity,
              "Avail TTE":excelRawData[i].availbleTTE ? +excelRawData[i].availbleTTE.toFixed(2) : 0,
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
          XLSX.writeFile(workBook, 'modifyplanData.xlsx')
          this.isLoading = false
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
  addEvent(type, event) {
    if (event.target.value) {
      let checkToDate:any = this.toDate;
      console.log("Check--->1", checkToDate);
      if(this.toDate === this.currentDateAsString){
        // on page load we are defaluting the  to date with string. Comparing string with date is not possible
        // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
        checkToDate = new Date();
        console.log("Check--->2", checkToDate);
      }
       /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
      if(this.toDate && (this.fromDate > checkToDate)){
        this.toDate = '';
      }
    }
  }
  emptySumm() {
    return null
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
