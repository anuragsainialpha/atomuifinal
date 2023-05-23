import { HelperServiceService } from './../../services/helper-service/helper-service.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { constants } from 'src/app/constants';
import * as XLSX from 'xlsx'
import { Router } from '@angular/router';
import * as moment from 'moment'
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/public/date.adapters';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;
@Component({
  selector: 'app-gatesecurity-truck-inventory-receiving',
  templateUrl: './gatesecurity-truck-inventory-receiving.component.html',
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
export class GatesecurityTruckInventoryReceivingComponent implements OnInit, DoCheck {

  fgsReportedTrucksIndents: any;
  gateSeuReportedTrucksIndents = [];
  isLoading: boolean = false;
  commentsMsg: string;
  commentHeader: string;
  editing = {};
  editingFgs = {};
  gateSecurityIndents = [];
  editingRDCpln = {};
  rdcGatePage = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 100
  }
  userRoles: any;
  plantBayList: any;
  isShow: boolean = true;
  destinationList: any[];
  transporterList: any[];
  indentId: any;
  transporter: any;
  loadSlipType: string;
  truckType=[];
  destination: any;
  destinationDesc: any;
  descriptionList = [];
  typeOfTruckReport = {};
  reportTruckStatusList = [];
  statusType=[];
  trckNumber: any;
  rdcPlannerInventoryData: any;
  source: any;
  sourceList: any;
  rdcTruckInventoryData: any[];
  reportLocation: string;
  truckList = [];
  loadslipList = [];
  gateInFromDate: string;
  gateInToDate: string;
  gateOutFromDate: string;
  gateOutToDate: string;
  reportFromDate: string;
  reportToDate: string;
  shipmentId: string;
  truckComments: string;
  rowloadslipId: string;
  baystatusList = [];
  bayStatus=[];
  destCountryName: string;
  countryList: any[];
  selected = [];
  isIntransitTruck:boolean = true;
  freezeLeftValue: boolean =true;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rowData: any = {};
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService,
    private router: Router,
    private helperService: HelperServiceService
  ) {
    this.userRoles = constants.roles;
    this.typeOfTruckReport = constants.truckReportTypes;
    this.reportLocation = localStorage.getItem('sourceID');
    this.reportTruckStatusList = constants.rdcTruckReportStatus;
    this.baystatusList = constants.bayStatusList;
  }
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
    this.selected = [];
    //Activation of Tabs
    if (this.service.checkRole() == this.userRoles.rdc_PLN || (this.service.checkRole() == this.userRoles.JIT_OPERATION)) {
      localStorage.setItem("userMenu", "RDC-GAT-REPORT");
    } else if ((this.service.checkRole() == this.userRoles.gateSecurity) || (this.service.checkRole() == this.userRoles.rdc_GAT) || (this.service.checkRole() == this.userRoles.JIT_GATE_SECURITY)) {
      // localStorage.setItem("userMenu", "GAT-INVENTORY-RECEIVING");
      localStorage.setItem("userMenu", "GAT-RECEIVING");

    } else {
      localStorage.setItem("userMenu", "fgs-truck-status");
    }
    // for getting truck type master
    this.getTruckTypeMasterData();

    let data = {
      // status: rdcReportTruckStatus.reported + "," + rdcReportTruckStatus.gateIn + ","+ rdcReportTruckStatus.unloading_end + "," + rdcReportTruckStatus.unloading_start
      'type': this.typeOfTruckReport['inventory'],
      'activity': "D",
      "reportLocation": this.reportLocation
    };
    this.gatesecurityTruckInventoryReceivingAPI(data);
    if ((this.service.checkRole() == this.userRoles.rdc_PLN)) {
      this.service.get_service(ApiserviceService.apisList.getPlanByInfo).subscribe(response => {
        console.log(response);
        this.plantBayList = response['data'];
      })
    }
  }
  onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }

  gatesecurityTruckInventoryReceivingAPI(data) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getTruckData, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.selected = [];
        this.rdcTruckInventoryData = response['data'].truckReportsData;
        this.rdcTruckInventoryData = [...this.rdcTruckInventoryData];
        this.rdcGatePage.limit = response['data'].pageLength;
        this.rdcGatePage.count = response['data'].total;
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
  }


  //refersh data 
  refreshData() {
    // this.destination = '';
    // this.indentId = "";
    // this.statusType = "";
    // this.transporter = "";
    // this.trckNumber = "";
    // this.truckType = "";
    // this.destinationList = [];
    // this.transporterList = [];
    // this.source = '';
    this.table.offset=0;
    this.clearData();
    this.isLoading = true;
    this.selected = [];
    // refresh data API for RDC Operationd & gateSecurity 
    this.reportTruckStatusList = constants.rdcTruckReportStatus
    let data = {
      // status: rdcReportTruckStatus.reported + "," + rdcReportTruckStatus.gateIn + ","+ rdcReportTruckStatus.unloading_end + "," + rdcReportTruckStatus.unloading_start
      'type': this.typeOfTruckReport['inventory'],
      'activity': "D",
      "reportLocation": this.reportLocation
    };
    this.gatesecurityTruckInventoryReceivingAPI(data);
  }

  //RDC filter search
  rdcFilterSearch() {
    if (this.helperService.getDateValidations(this.gateInFromDate, this.gateInToDate, this.gateOutFromDate, this.gateOutToDate, this.reportFromDate, this.reportToDate)) {
      this.table.offset=0
      this.isLoading = true;
      let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
      let data = {
        'destination': this.destination,
        'indentID': this.indentId,
        'status': this.statusType.toString(),
        'transporter': this.transporter,
        'truckNumber': this.trckNumber,
        'truckType': this.truckType,
        'type': this.typeOfTruckReport['inventory'],
        'source': this.source,
        'activity': "D",
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
        "destCountry": obj ? (obj.value) : ''
      }

      this.gatesecurityTruckInventoryReceivingAPI(data);
    }
  }

  rdcGatesecurityDatetablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.isLoading = true;
    console.log("page info", pageInfo);
    let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
    let datatabledata = {
      index: pageInfo.offset,
      pageLength: pageInfo.pageSize,
      destination: this.destination,
      indentID: this.indentId,
      status: this.statusType.toString(),
      transporter: this.transporter,
      truckNumber: this.trckNumber,
      truckType: this.truckType,
      source: this.source,
      reportLocation: this.reportLocation,
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
      "destCountry": obj ? (obj.value) : ''
    }
    this.gatesecurityTruckInventoryReceivingAPI(datatabledata);
  }


  updateRDCGateSecurityValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex)
    // this.editing[rowIndex + '-' + cell] = false;
    this.rdcTruckInventoryData[rowIndex][cell] = event.target.value;
    this.rdcTruckInventoryData = [...this.rdcTruckInventoryData];
    this.selected = [...this.selected, this.rdcTruckInventoryData[rowIndex]];
    console.log('UPDATED!', this.rdcTruckInventoryData[rowIndex][cell]);
  }

  showFilter() {
    this.isShow = !this.isShow;
  }

  //get filter destination result
  getfilterDestination(event, typeofevent, isIntransitTruck) {
    this.destinationDesc = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue+'&isIntransitTruck='+isIntransitTruck).subscribe(response => {
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


  inweightUpdate(row) {
    // if (row.inWeight && Number(row.inWeight) !== 0) {
      this.isLoading = true;
      let data = {
        gateControlCode: row.gateControlCode,
        indentId: row.indentId,
        status: row.status,
        inWeight: Number(row.inWeight),
        destDis: row.destDis,
        destCountryName: row.destCountryName
      }
      this.service.post_service(ApiserviceService.apisList.updateTruckWeight, data).subscribe(response => {
        console.log(response);
        if (response['statusCode'] == 200) {
          let index = this.rdcTruckInventoryData.indexOf(row);
          let responseData = response['data'];
          this.rdcTruckInventoryData[index] = responseData;
          this.rdcTruckInventoryData = [... this.rdcTruckInventoryData];
          this.selected = [];
          this.selected = [...this.selected, responseData];
          this.editing = {};
          this.isLoading = false;
          this.toastr.success(response['message'] ? response['message'] : "Success");

        } else {
          this.isLoading = false;
          this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        }
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    // } else {
    //   this.toastr.warning("In-weight cannot be empty or 0", "Error!");
    // }
  }


  // out weight update 
  outWeightUpdate(row) {
    // if ((row.outWeight) && (Number(row.outWeight) !== 0)) {
      this.isLoading = true;
      let data = {
        gateControlCode: row.gateControlCode,
        indentId: row.indentId,
        status: row.status,
        outWeight: Number(row.outWeight),
        destDis: row.destDis,
        destCountryName: row.destCountryName
      }
      this.service.post_service(ApiserviceService.apisList.updateTruckWeight, data).subscribe(response => {
        console.log(response);
        if (response['statusCode'] == 200) {
          let index = this.rdcTruckInventoryData.indexOf(row);
          let responseData = response['data'];
          this.rdcTruckInventoryData[index] = responseData;
          this.rdcTruckInventoryData = [... this.rdcTruckInventoryData];
          this.selected = [];
          this.selected = [...this.selected, responseData];
          this.editing = {};
          this.isLoading = false;
          this.toastr.success(response['message'] ? response['message'] : "Success");
        } else {
          this.isLoading = false;
          this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        }
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    // } else {

    //   this.toastr.warning("Out-weight cannot be empty or 0", "! Warning")
    // }

  }
  viewComments(comments, type) {
    if (type == "loadslip") {
      this.commentHeader = "Loadslip Comments";
    } else {
      this.commentHeader = "Comments";
    }
    this.commentsMsg = comments;
    $('#commentModal').modal('show');
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


  //export excel data
  export(): void {
    if (this.rdcTruckInventoryData.length > 0) {
      let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
      this.isLoading = true;
      let data = {
        'destination': this.destination,
        'indentID': this.indentId,
        'status': this.statusType.toString(),
        'transporter': this.transporter,
        'truckNumber': this.trckNumber,
        'truckType': this.truckType,
        'type': this.typeOfTruckReport['inventory'],
        'pageLength': this.rdcGatePage.count,
        'source': this.source,
        'activity': "D",
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
        "destCountry": obj ? (obj.value) : ''
      }

      // RDC Operations & GateSecurity
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
              "Dest Description": excelRawData[i].destDis,
              "Truck/Cont Type": excelRawData[i].truckType,
              "Report Date": this.service.customDateTimeFormat(excelRawData[i].reportedDate),
              "Truck Status": excelRawData[i].status,
              "Bay Status": excelRawData[i].bayStatus,
              "In weight (Kg)": excelRawData[i].inWeight,
              "Gate In": this.service.customDateTimeFormat(excelRawData[i].gateInDate),
              "Out weight (Kg)": excelRawData[i].outWeight,
              "Net weight (Kg)": excelRawData[i].netWeight,
              "SAP invoice weight (Kg)": excelRawData[i].sapInvWeight,
              "Weight Diff (Kg)": excelRawData.diffInvWeight,
              "Gate Out": excelRawData[i].gateOutDate,
              "Loadslip Comments": excelRawData[i].loadslipComments,
              "Gate Comments": excelRawData[i].comments,
              "Rejection": excelRawData[i].rejectionStatus,
              "Rejection Desc": excelRawData[i].rejectionDesc,
              "Driver Name": excelRawData[i].driverName,
              "Driver Number": excelRawData[i].driverContact,
              "Driver License": excelRawData[i].driverLicense,
              "Shipment Id": excelRawData[i].shipmentId,
              "Container": excelRawData[i].containerNum,
              "Bay Assigned": excelRawData[i].bayAssigned,
              "SAP invoice value (INR)": excelRawData[i].sapInvValue,
              "Eway bill No": excelRawData[i].ewayBillNo,
              "Source": excelRawData[i].source,
              "Country of Destination": excelRawData[i].destCountryName,
              "Gate Serial No": excelRawData[i].gateControlCode,
              "Insert User": excelRawData[i].insertUser,
              "Update User": excelRawData[i].updateUser,
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'truckInventoryReceiving.xlsx');
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


  //for RDC events 

  //event Trigger
  eventTrigger(row, typeofevent) {
    let CanGateOut = true;
    this.isLoading = true;

    let post_URL;
    let data;
    if ((typeofevent == 'GATED_IN') || (typeofevent == 'INTRANSIT')) {
      // Out weight mandatory for GateOut if Inweight is there
      // if ((row.inWeightStatus) && (!row.outWeightStatus) && () {
      //   CanGateOut = true;
      // } else {
      //   CanGateOut = false;
      // }

      if (row.inWeightStatus && (typeofevent == 'INTRANSIT')) {
        if (row.outWeightStatus) {
          CanGateOut = true;
        } else {
          CanGateOut = false
        }
      }
      if (row.intransitTruck) {
        // call intransit-truck-report;
        data = {
          truckNumber: row.truckNumber,
          status: typeofevent,
          gateControlCode: row.gateControlCode,
          destDis: row.destDis,
          destCountryName: row.destCountryName
        }
        post_URL = ApiserviceService.apisList.reportIntransitTruck;
      } else {
        // indent-report
        data = {
          gateControlCode: row.gateControlCode,
          status: typeofevent,
          indentId: row.indentId,
          outWeight: Number(row.outWeight),
          destDis: row.destDis,
          destCountryName: row.destCountryName
        }
        post_URL = ApiserviceService.apisList.getIndentReportInfo;
      }
    } else {

      data = {
        truckNumber: row.truckNumber,
        status: typeofevent,
        gateControlCode: row.gateControlCode,
        destDis: row.destDis,
        destCountryName: row.destCountryName
      };
      post_URL = ApiserviceService.apisList.reportIntransitTruck;
    }
    if (CanGateOut) {
      this.service.post_service(post_URL, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          let responseData = response['data'];
          if ((typeofevent == 'UNLOADING') || (typeofevent == 'DELIVERED') || (typeofevent == 'RELEASED')) {
            let replacebleIndex = this.rdcPlannerInventoryData.findIndex(rawData => rawData.truckNumber == data.truckNumber);
            this.rdcPlannerInventoryData[replacebleIndex] = responseData;
            this.rdcPlannerInventoryData = [...this.rdcPlannerInventoryData];
          } else {
            let replacebleIndex = this.rdcTruckInventoryData.findIndex(rawData => rawData.truckNumber == data.truckNumber);
            this.rdcTruckInventoryData[replacebleIndex] = responseData;
            this.rdcTruckInventoryData = [...this.rdcTruckInventoryData]
          }
          this.selected = [];
          this.selected = [...this.selected, responseData];
          this.isLoading = false;
          this.toastr.success(response['message'] ? response['message'] : "Success");
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
      this.isLoading = false;
      this.toastr.warning("OutWeight should be mandatory to Gateout", "! Warning")
    }

  }




  // Reject Truck 
  rejectTruck(item) {
    this.isLoading = true;
    let data = {
      "gateControlCode": item.gateControlCode,
      "status": "REJECT",
      "indentId": item.indentId,
      "truckNumber": item.truckNumber,
      destDis: item.destDis
    }
    this.service.post_service(ApiserviceService.apisList.getIndentReportInfo+'?isGateSecurity='+true, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        let replacebleIndex = this.rdcPlannerInventoryData.findIndex(rawData => rawData.gateControlCode == data.gateControlCode);
        this.rdcPlannerInventoryData[replacebleIndex] = response['data'];
        this.rdcPlannerInventoryData = [...this.rdcPlannerInventoryData];
        this.isLoading = false;
        this.toastr.success(response['message']);
      }
      else {
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        this.isLoading = false;
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  // view loadslips for cooresponding shipment Id
  viewLoadslip(shipmentNumber, view) {
    this.isLoading = true;
    this.loadSlipType = view;
    this.service.get_service(ApiserviceService.apisList.openLoadslipDetails + "?shipmentId=" + shipmentNumber).subscribe(response => {
      if (response['statusCode'] == 200) {
        if (response["data"]) {
          this.loadslipList = response["data"];
          if (this.loadslipList.length == 1) {
            this.viewLoadslipnavigation(this.loadslipList[0]);
          } else if (this.loadslipList.length > 1) {
            $("#loadslipsModal").modal("show");
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

  // Navigate to loadslip view
  viewLoadslipnavigation(item) {
    $("#loadslipsModal").modal('hide');
    let loadSlipId = item['loadlipId'];
    let type = item.type;
    if (this.loadSlipType == "loadslipView") {
      if (type == "FGS_EXP") {
        this.router.navigate(
          ["/load-slip-view-for-export/" + loadSlipId], {queryParams : {menuName : localStorage.getItem('userMenu')}}
        );
      } else if (type == "JIT_OEM") {
        this.router.navigate(["/load-slip-view-for-jit/" + loadSlipId], {queryParams : {menuName : localStorage.getItem('userMenu')}});
      } else {
        this.router.navigate(["/load-slip-view/" + loadSlipId], {queryParams : {menuName : localStorage.getItem('userMenu')}});
      }
    }
    else {
      this.router.navigate(['/load-slip-qty-view/' + loadSlipId], {queryParams : {menuName : localStorage.getItem('userMenu')}});
    }
  }

  showComments(comment, row) {
    this.truckComments = comment;
    // this.rowloadslipId = id;
    this.rowData = row;
    $("#myModal").modal('show');
  }
  save(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;
      // let data = {
      //   "comments": this.truckComments,
      //   "gateControlCode": this.rowloadslipId
      // }
      // Sending Complete row to the backend
      let data = this.rowData;
      data.comments = this.truckComments;
      this.service.post_service(ApiserviceService.apisList.saveTruckComments, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          this.isLoading = false;
          let index = this.rdcTruckInventoryData.findIndex(item => item.gateControlCode == response['data'].gateControlCode);
          this.rdcTruckInventoryData[index] = response['data'];
          this.rdcTruckInventoryData = [...this.rdcTruckInventoryData];
          this.selected = [];
          this.selected = [...this.selected, this.rdcTruckInventoryData[index]];
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

  addEvent(type, event) {
    console.log(event.target.value);
    if (event.target.value) {
       /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
      switch (type) {
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
            if(this.reportToDate && (this.reportFromDate > this.reportToDate)){
              this.reportToDate = '';
            }
          // this.reportToDate = '';
          break;
        default:
          break;
      }
    }
  }
}
