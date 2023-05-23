import { HelperServiceService } from './../../services/helper-service/helper-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { constants } from 'src/app/constants';
import * as XLSX from 'xlsx'
import { Router } from '@angular/router';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/public/date.adapters';
import * as moment from 'moment'
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;
@Component({
  selector: 'app-truck-inventory-shipping',
  templateUrl: './truck-inventory-shipping.component.html',
  styleUrls: ['./truck-inventory-shipping.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class TruckInventoryShippingComponent implements OnInit {
  fgsReportedTrucksIndents = [];
  gateSeuReportedTrucksIndents = [];
  isLoading: boolean = false;
  commentHeader: string;
  editing = {};
  editingFgs = {};
  gateSecurityIndents = [];
  editingRDCpln = {};
  rejectReason: any;
  fgPage = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 200
  }
  selected = [];
  userRoles: any;
  plantBayList: any;
  commentMsg: string;
  loadSlipType: string;
  isShow: boolean = true;
  destinationList: any[];
  transporterList: any[];
  rejectRasonList: any[];
  indentId: any;
  transporter: any;
  truckType = [];
  destination: any;
  destinationDesc: any;
  descriptionList = [];
  typeOfTruckReport = {};
  statusType = [];
  trckNumber: any;
  source: any;
  sourceList: any;
  rdcTruckInventoryData: any[];
  reportLocation: string;
  truckList = [];
  reportTruckStatusList: { "key": string; "value": string; }[];
  gateInFromDate: string;
  gateInToDate: string;
  gateOutFromDate: string;
  gateOutToDate: string;
  reportFromDate: string;
  reportToDate: string;
  loadslipList = [];
  rejectData: any;
  baystatusList = [];
  shipmentId: string;
  bayStatus = [];
  countryList: any[];
  destCountryName: any;
  isIntransitTruck: boolean = true;
  categoryList = [];
  materialGrp = [];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  // rejectionList = ["NORMAL", "REJECTED"];
  rejection = [];
  rejectionList: string[];
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService,
    private helperService: HelperServiceService,
    private router: Router
  ) {
    this.userRoles = constants.roles;
    this.typeOfTruckReport = constants.truckReportTypes;
    this.reportTruckStatusList = constants.truckInventoryStatusList;
    this.baystatusList = constants.bayStatusList;
    this.reportLocation = localStorage.getItem('sourceID');




  }



  ngOnInit() {
    localStorage.setItem("userMenu", "fgs-truck-status");
    this.rejectionList = constants.rejectionList;
    // for getting truck type master
    this.getTruckTypeMasterData();
    this.getAllRejectReasons();
    let data = {
      'type': this.typeOfTruckReport['inventory'],
      'activity': "P",
      "reportLocation": this.reportLocation,
      "pageLength": 200
    }
    this.selected = [];
    this.truckInventoryShippingAPI(data);
    this.service.get_service(ApiserviceService.apisList.getPlanByInfo).subscribe(response => {
      console.log(response);
      this.plantBayList = response['data'];
    })

    this.getCategoryMasterData();
  }

  // Checking if the logged in role is DP_REP or L1_MGR or L2_MGR
  isDPREPRole() {
    let currentRole = this.service.checkRole();
    if (currentRole == this.userRoles.planner3 || currentRole == this.userRoles.L1MGR || currentRole == this.userRoles.L2MGR) {
      return true;
    } else {
      return false;
    }
  }

  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }


  truckInventoryShippingAPI(data) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getTruckData, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.selected = [];
        //set data for FGS operations 
        this.fgsReportedTrucksIndents = response['data'].truckReportsData;
        this.fgsReportedTrucksIndents = [...this.fgsReportedTrucksIndents];
        this.fgPage.limit = response['data'].pageLength;
        this.fgPage.count = response['data'].total;
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong", "!Error")
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
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
  //clear data
  clearData() {
    this.destination = '';
    this.indentId = "";
    this.statusType = [];
    this.transporter = "";
    this.trckNumber = "";
    this.truckType = [];
    this.destinationDesc = "";
    this.descriptionList = [];
    this.destinationList = [];
    this.transporterList = [];
    this.source = '';
    this.gateInFromDate = '';
    this.gateInToDate = '';
    this.gateOutFromDate = '';
    this.gateOutToDate = '';
    this.reportFromDate = '';
    this.reportToDate = '';
    this.shipmentId = '';
    this.bayStatus = [];
    this.destCountryName = '';
    this.countryList = [];
    this.rejection = [];
    this.materialGrp = [];
  }


  //refersh data 
  refreshData() {
    this.table.offset = 0;
    this.clearData();
    this.selected = [];
    this.source = '';
    // Refresh Data FGS operations & FGs gatesecurity 
    let data = {
      'type': this.typeOfTruckReport['inventory'],
      'activity': "P",
      "reportLocation": this.reportLocation
    }
    this.truckInventoryShippingAPI(data);

  }


  // truck status filter creteria
  truckstatusIndetsFilter() {
    if (this.helperService.getDateValidations(this.gateInFromDate, this.gateInToDate, this.gateOutFromDate, this.gateOutToDate, this.reportFromDate, this.reportToDate)) {
      this.table.offset = 0;
      let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
      let data = {
        'source': this.source,
        'destination': this.destination,
        'indentID': this.indentId,
        'pageLength': this.fgPage.pageSize,
        //  status needed as string to backend API
        'status': (this.statusType).toString(),
        'transporter': this.transporter,
        'truckNumber': this.trckNumber,
        'truckType': this.truckType,
        'type': this.typeOfTruckReport['inventory'],
        'activity': "P",
        "reportLocation": this.reportLocation,
        "shipmentID": this.shipmentId,
        // Gate In Dates
        "fromGateInDate": this.gateInFromDate ? (moment(this.gateInFromDate).format('DD/MM/YYYY')) : '',
        "toGateInDate": this.gateInToDate ? (moment(this.gateInToDate).format('DD/MM/YYYY')) : '',
        // Gate Out Dates
        "fromGateOutDate": this.gateOutFromDate ? (moment(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
        "toGateOutDate": this.gateOutToDate ? (moment(this.gateOutToDate).format('DD/MM/YYYY')) : '',
        // Report Dates
        "fromReportDate": this.reportFromDate ? (moment(this.reportFromDate).format('DD/MM/YYYY')) : '',
        "toReportDate": this.reportToDate ? (moment(this.reportToDate).format('DD/MM/YYYY')) : '',
        "bayStatus": this.bayStatus,
        "destCountry": obj ? (obj.value) : '',
        "rejection": this.rejection,
        "indentCategoryList":this.materialGrp
      }
      this.truckInventoryShippingAPI(data);
    }
  }


  // datatables with server side pagination for FGS Role
  FgsDatatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
    let datatabledata = {
      'index': pageInfo.offset,
      'pageLength': pageInfo.pageSize,
      'destination': this.destination,
      'indentID': this.indentId,
      //  status needed as string to backend API
      'status': (this.statusType).toString(),
      'transporter': this.transporter,
      'truckNumber': this.trckNumber,
      'truckType': this.truckType,
      'type': this.typeOfTruckReport['inventory'],
      'source': this.source,
      'activity': "P",
      "reportLocation": this.reportLocation,
      "shipmentID": this.shipmentId,
      // Gate In Dates
      "fromGateInDate": this.gateInFromDate ? (moment(this.gateInFromDate).format('DD/MM/YYYY')) : '',
      "toGateInDate": this.gateInToDate ? (moment(this.gateInToDate).format('DD/MM/YYYY')) : '',
      // Gate Out Dates
      "fromGateOutDate": this.gateOutFromDate ? (moment(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
      "toGateOutDate": this.gateOutToDate ? (moment(this.gateOutToDate).format('DD/MM/YYYY')) : '',
      // Report Dates
      "fromReportDate": this.reportFromDate ? (moment(this.reportFromDate).format('DD/MM/YYYY')) : '',
      "toReportDate": this.reportToDate ? (moment(this.reportToDate).format('DD/MM/YYYY')) : '',
      "bayStatus": this.bayStatus,
      "destCountry": obj ? (obj.value) : '',
      "rejection": this.rejection,
      "indentCategoryList":this.materialGrp
    }
    this.truckInventoryShippingAPI(datatabledata);

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
  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);
  }

  updateValueFgs(event, cell, rowIndex, row) {
    console.log('inline editing rowIndex', rowIndex)
    // this.editingFgs[rowIndex + '-' + cell] = true;
    this.fgsReportedTrucksIndents[rowIndex][cell] = event.value;
    this.fgsReportedTrucksIndents = [...this.fgsReportedTrucksIndents];
    console.log('UPDATED!', this.fgsReportedTrucksIndents);
    this.bayAssign(row);
  }
  showFilter() {
    this.isShow = !this.isShow;
  }

  // fgs call method 
  callGateSecurity(row) {

    if (row.bayAssigned == undefined) {
      row.bayAssigned = '';
    }
    this.isLoading = true;
    let data = {
      gateControlCode: row.gateControlCode,
      status: "CALL_TRUCK",
      indentId: row.indentId,
      bayAssigned: row.bayAssigned,
      destDis: row.destDis,
      destCountryName: row.destCountryName
    }
    this.service.post_service(ApiserviceService.apisList.getIndentReportInfo, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {

        let index = this.fgsReportedTrucksIndents.indexOf(row);
        let repsoneData = response['data'];
        this.fgsReportedTrucksIndents[index] = repsoneData;
        this.fgsReportedTrucksIndents = [... this.fgsReportedTrucksIndents];
        this.editing = {};
        this.selected = [];
        this.selected = [...this.selected, repsoneData];
        this.isLoading = false;
        this.toastr.success(response['message'] ? response['message'] : "Success")
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong", "!Error")
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  // Bay Assign by gate security
  bayAssign(row) {
    if (row.bayAssigned == undefined) {
      row.bayAssigned = '';
    }
    this.isLoading = true;
    let data = {
      gateControlCode: row.gateControlCode,
      status: "BAY_ASSIGNED",
      indentId: row.indentId,
      bayAssigned: row.bayAssigned,
      destDis: row.destDis,
      destCountryName: row.destCountryName
    }
    this.service.post_service(ApiserviceService.apisList.getIndentReportInfo, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        let index = this.fgsReportedTrucksIndents.indexOf(row);
        let repsoneData = response['data'];
        this.fgsReportedTrucksIndents[index] = repsoneData;
        this.fgsReportedTrucksIndents = [... this.fgsReportedTrucksIndents];
        this.selected = [];
        this.selected = [...this.selected, repsoneData];
        this.editing = {};
        this.isLoading = false;
        this.toastr.success(response['message'] ? response['message'] : "Success")
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong", "!Error")
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })

  }

  //get filter destination result
  getfilterDestination(event, typeofevent, isIntransitTruck) {
    this.destinationDesc = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue + '&isIntransitTruck=' + isIntransitTruck).subscribe(response => {
        if (typeofevent === 'destination') {
          this.destinationList = response['data'].searchResult;
        } else {
          this.sourceList = response['data'].searchResult;
        }

        console.log("this.destinationList", this.destinationList)
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
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
        console.log("this.transporterList", this.transporterList)
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
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

  updateValue(event, cell, index) {
    if (event) {
      this.fgsReportedTrucksIndents[index][cell] = (event.target) ? (event.target.value) : event;
    } else {
      this.fgsReportedTrucksIndents[index][cell] = '';
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

  // saveTruck(row){
  //   this.isLoading = true;
  //   let data = {
  //     containerNum: row.containerNum,
  //     driverContact: row.driverContact,
  //     driverLicense: row.driverLicense,
  //     driverName: row.driverName,
  //     gateControlCode: row.gateControlCode,
  //     indentId: row.indentId,
  //     truckNumber: row.truckNumber,
  //     truckType: row.truckType
  //   }
  //   this.service.post_service(ApiserviceService.apisList.updateTruckInventoryDetails, data).subscribe(response => {
  //     if (response['statusCode'] == 200) {
  //       //Update data for FGS ROLE
  //       let replacebleIndex = this.fgsReportedTrucksIndents.findIndex(rawData => rawData.gateControlCode == data.gateControlCode);
  //       this.editing = {};
  //       this.editingFgs = {};
  //       this.fgsReportedTrucksIndents[replacebleIndex] = response['data'];
  //       this.fgsReportedTrucksIndents = [...this.fgsReportedTrucksIndents];
  //       this.isLoading = false;
  //       this.toastr.success(response['message']);
  //     }
  //     else {
  //       this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
  //       this.isLoading = false;
  //     }
  //   }, (err) => {
  //     console.log("Error", err);
  //     this.toastr.error(err ? err : "Something went wrong..", "Error!");
  //     this.isLoading = false;
  //   })

  // }

  addEvent(type, event) {
    console.log(event.target.value);
    if (event.target.value) {
      switch (type) {
        /* Checking if selected from date greater than to date.
     Clearing the toDate field when from date greater than to date */
        case "gateInDate":
          if (this.gateInToDate && (this.gateInFromDate > this.gateInToDate)) {
            this.gateInToDate = '';
          }
          // this.gateInToDate = '';
          break;
        case "gateOutDate":
          if (this.gateOutToDate && (this.gateOutFromDate > this.gateOutToDate)) {
            this.gateOutToDate = '';
          }
          // this.gateOutToDate = '';
          break;
        case "repFromDate":
          if (this.reportToDate && (this.reportFromDate > this.reportToDate)) {
            this.reportToDate = '';
          }
          // this.reportToDate = '';
          break;
        default:
          break;
      }
    }
  }



  //export excel data
  export(): void {
    if (this.fgsReportedTrucksIndents.length > 0) {
      this.isLoading = true;
      let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
      let data = {
        'source': this.source,
        'destination': this.destination,
        'indentID': this.indentId,
        //  status needed as string to backend API
        'status': (this.statusType).toString(),
        'transporter': this.transporter,
        'truckNumber': this.trckNumber,
        'truckType': this.truckType,
        'type': this.typeOfTruckReport['inventory'],
        'pageLength': this.fgPage.count,
        'activity': "P",
        "reportLocation": this.reportLocation,
        "shipmentID": this.shipmentId,
        // Gate In Dates
        "fromGateInDate": this.gateInFromDate ? (moment(this.gateInFromDate).format('DD/MM/YYYY')) : '',
        "toGateInDate": this.gateInToDate ? (moment(this.gateInToDate).format('DD/MM/YYYY')) : '',
        // Gate Out Dates
        "fromGateOutDate": this.gateOutFromDate ? (moment(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
        "toGateOutDate": this.gateOutToDate ? (moment(this.gateOutToDate).format('DD/MM/YYYY')) : '',
        // Report Dates
        "fromReportDate": this.reportFromDate ? (moment(this.reportFromDate).format('DD/MM/YYYY')) : '',
        "toReportDate": this.reportToDate ? (moment(this.reportToDate).format('DD/MM/YYYY')) : '',
        "bayStatus": this.bayStatus,
        "destCountry": obj ? (obj.value) : '',
        "rejection": this.rejection,
        "indentCategoryList":this.materialGrp
      }
      this.service.post_service(ApiserviceService.apisList.getTruckData, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          let newViewPlanData = response['data'].truckReportsData;
          console.log("newViewPlanData", newViewPlanData);
          let excelRawData = newViewPlanData;
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            let data = {
              "Indent Id": excelRawData[i].indentId,
              "Truck Number": excelRawData[i].truckNumber,
              "Transporter": excelRawData[i].transporter,
              "Destination": excelRawData[i].destination,
              "Destination Description": excelRawData[i].destDis,
              "Truck Type": excelRawData[i].truckType,
              "Report Date": this.service.customDateTimeFormat(excelRawData[i].reportedDate),
              "Truck Status": excelRawData[i].status,
              "Bay status": excelRawData[i].bayStatus,
              "In weight (Kg)": excelRawData[i].inWeight,
              "Gate In": this.service.customDateTimeFormat(excelRawData[i].gateInDate),
              "Out weight (Kg)": excelRawData[i].outWeight,
              "Net weight (Kg)": excelRawData[i].netWeight,
              "SAP invoice weight (Kg)": excelRawData[i].sapInvWeight,
              "Weight Diff (Kg)": excelRawData.diffInvWeight,
              "Gate Out": this.service.customDateTimeFormat(excelRawData[i].gateOutDate),
              "Loadslip Comments": excelRawData[i].loadslipComments,
              "Gate Comments": excelRawData[i].comments,
              "Rejection": excelRawData[i].rejectionStatus,
              "Rejection Desc": excelRawData[i].rejectionDesc,
              "Driver Name": excelRawData[i].driverName,
              "Driver Number": excelRawData[i].driverContact,
              "Driver Licence": excelRawData[i].driverLicense,
              "Shipment Id": excelRawData[i].shipmentId,
              "Container": excelRawData[i].containerNum,
              "Bay Assigned": excelRawData[i].bayAssigned,
              "SAP invoice value (INR)": excelRawData[i].sapInvValue,
              "Eway bill No": excelRawData[i].ewayBillNo,
              "Source": excelRawData[i].source,
              "LR Num":excelRawData[i].lrNum,
              "LR Date":excelRawData[i].lrDate != null ? this.service.customDateFormat(excelRawData[i].lrDate) : null,
              "Indent Cat":excelRawData[i].indentCategory,
              "SAP Invoice":excelRawData[i].sapInvoice,
              "Tot Tyre":excelRawData[i].totTyre,
              "Tot Tube":excelRawData[i].totTube,
              "Tot Flap":excelRawData[i].totFlap,
              "Tot Valve":excelRawData[i].totValve,
              "Tot PCTR": excelRawData[i].totPctr,
              "Other Qty": excelRawData[i].otherQty,
              "Tot Qty": excelRawData[i].totQty,
              "Country of Destination": excelRawData[i].destCountryName,
              "Gate Serial No": excelRawData[i].gateControlCode,
              "PUC": (excelRawData[i].puc) ? 'Yes' : 'No',
              "Insurance": (excelRawData[i].insurance) ? 'Yes' : 'No',
              "Seat Belt": (excelRawData[i].seatBelt) ? 'Yes' : 'No',
              "First Aid": (excelRawData[i].firstAid) ? 'Yes' : 'No',
              "Fire Extenguisher": (excelRawData[i].fireExtenguisher) ? 'Yes' : 'No',
              "Emergency Card": (excelRawData[i].emergencyCard) ? 'Yes' : 'No',
              "Spark Arrestor": (excelRawData[i].sparKArrestor) ? 'Yes' : 'No',
              "Fitness Certificate": (excelRawData[i].fitnessCert) ? 'Yes' : 'No',
              "Insert User": excelRawData[i].insertUser,
              "Update User": excelRawData[i].updateUser,
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'truckInventoryShipping.xlsx');
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

  // for getting rejectReasons
  getAllRejectReasons() {
    this.service.get_service(ApiserviceService.apisList.rejectReasonData).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.rejectRasonList = response['data'];
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "!Error");
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
    });
  }

  openTruckModel(row, rowIndex) {
    this.rejectReason = '';
    this.rejectData = {
      gateControlCode: row.gateControlCode,
      status: 'REJECT',
      // rejectionCode:,
      indentId: row.indentId,
      truckNumber: row.truckNumber,
      destDis: row.destDis,
      destCountryName: row.destCountryName
    }
    $('#rejectionModel').modal('show');
  }

  // Reject Truck 
  rejectTruck(reason) {
    let modifyIndex;
    if (!reason) {
      this.toastr.error('Please Give Reason for Rejecting Truck');
      $('#rejectionModel').modal('show');
    } else {
      $('#rejectionModel').modal('hide');
      this.isLoading = true;
      this.rejectData['rejectionCode'] = reason;
      this.service.post_service(ApiserviceService.apisList.getIndentReportInfo, this.rejectData).subscribe(response => {
        if (response['statusCode'] == 200) {
          // Update data for FGS ROLE
          let replacebleIndex = this.fgsReportedTrucksIndents.findIndex(rawData => rawData.gateControlCode == this.rejectData['gateControlCode']);
          let responseData = response['data'];
          this.fgsReportedTrucksIndents[replacebleIndex] = responseData;
          this.fgsReportedTrucksIndents = [...this.fgsReportedTrucksIndents];
          this.selected = [];
          this.selected = [...this.selected, responseData];
          this.rejectReason = '';
          this.isLoading = false;
          this.toastr.success(response['message']);
        }
        else {
          this.rejectReason = '';
          $('#rejectionModel').modal('show');
          this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
          this.isLoading = false;
        }
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }


  // view loadslips for cooresponding shipment Id
  viewLoadslip(shipmentNumber, view) {
    this.isLoading = true;
    this.loadSlipType = view;
    this.service.get_service(ApiserviceService.apisList.openLoadslipDetails + "?shipmentId=" + shipmentNumber).subscribe(response => {
      if (response['statusCode'] == 200) {
        if (response['data']) {
          this.loadslipList = response['data'];
          if (this.loadslipList.length == 1) {
            this.viewLoadslipnavigation(this.loadslipList[0])
          }
          else if (this.loadslipList.length > 1) {
            $("#loadslipsModal").modal('show');
          }
        }
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


  //show Comments in Modal
  ShowComments(comments, type) {
    if (type == 'loadslip') {
      this.commentHeader = 'Loadslip Comments'
    }
    else {
      this.commentHeader = 'Comments'
    }
    this.commentMsg = comments;
    $('#commentModal').modal('show');
  }

  // Navigate to loadslip view
  viewLoadslipnavigation(item) {
    $("#loadslipsModal").modal('hide');
    let loadSlipId = item['loadlipId'];
    let type = item.type;
    if (this.loadSlipType == 'loadslipView') {
      if (type == 'FGS_EXP') {
        this.router.navigateByUrl('/load-slip-view-for-export/' + loadSlipId);
      } else if (type == 'JIT_OEM') {
        this.router.navigateByUrl('/load-slip-view-for-jit/' + loadSlipId);
      } else {
        this.router.navigateByUrl('/load-slip-view/' + loadSlipId);
      }
    }
    else {
      this.router.navigateByUrl('/load-slip-qty-view/' + loadSlipId);
    }
    // this.router.navigateByUrl('/load-slip-view/' + loadslipId)
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
