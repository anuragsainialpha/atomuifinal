import { NgForm } from '@angular/forms';
import { HelperServiceService } from './../../services/helper-service/helper-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { constants } from 'src/app/constants';
import * as XLSX from 'xlsx'
import { Router } from '@angular/router';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/public/date.adapters';
import * as moment from 'moment';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;
@Component({
  selector: 'app-truck-inventory-receiving',
  templateUrl: './truck-inventory-receiving.component.html',
  styleUrls: ['./truck-inventory-receiving.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class TruckInventoryReceivingComponent implements OnInit {
  fgsReportedTrucksIndents: any;
  gateSeuReportedTrucksIndents = [];
  isLoading: boolean = false;
  editing = {};
  editingFgs = {};
  commentHeader: string;
  commentMsg: string;
  gateSecurityIndents = [];
  editingRDCpln = {};
  rdcPlannerPage = {
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
  rdcPlannerInventoryData = [];
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
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService,
    private router: Router,
    private helperService: HelperServiceService
  ) {
    this.userRoles = constants.roles;
    this.typeOfTruckReport = constants.truckReportTypes;
    this.reportLocation = localStorage.getItem('sourceID');
    this.baystatusList = constants.bayStatusList;

    this.reportTruckStatusList = constants.rdcTruckReportStatus;


  }


  ngOnInit() {
    localStorage.setItem("userMenu", "fgs-truck-status");
    // for getting truck type master
    this.getTruckTypeMasterData();
    this.selected = [];
    let data = {
      // status: rdcReportTruckStatus.reported + "," + rdcReportTruckStatus.gateIn + ","+ rdcReportTruckStatus.unloading_end + "," + rdcReportTruckStatus.unloading_start
      'type': this.typeOfTruckReport['inventory'],
      'activity': "D",
      "reportLocation": this.reportLocation
    };
    this.truckInventoryReceivingAPI(data);
    if ((this.service.checkRole() == this.userRoles.rdc_PLN) || (this.service.checkRole() == this.userRoles.fgsOperations1)) {
      this.service.get_service(ApiserviceService.apisList.getPlanByInfo).subscribe(response => {
        console.log(response);
        this.plantBayList = response['data'];
      })
    }
  }

  // Checking if the logged in role is DP_REP or L1_MGR or L2_MGR
  isDPREPRole(){
    let currentRole = this.service.checkRole();
    if(currentRole == this.userRoles.planner3 || currentRole == this.userRoles.L1MGR || currentRole == this.userRoles.L2MGR ){
      return true;
    }else{
      return false;
    }
  }

  onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }

  truckInventoryReceivingAPI(data) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getTruckData, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.selected = [];
        this.rdcPlannerInventoryData = response['data'].truckReportsData;
        this.rdcPlannerInventoryData = [...this.rdcPlannerInventoryData];
        this.rdcPlannerPage.limit = response['data'].pageLength;
        this.rdcPlannerPage.count = response['data'].total;
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
    this.table.offset=0;
    this.clearData();
    this.source = '';
    this.selected = [];
    // refresh data API for RDC Operationd & gateSecurity 
    this.reportTruckStatusList = constants.rdcTruckReportStatus
    let data = {
      // status: rdcReportTruckStatus.reported + "," + rdcReportTruckStatus.gateIn + ","+ rdcReportTruckStatus.unloading_end + "," + rdcReportTruckStatus.unloading_start
      'type': this.typeOfTruckReport['inventory'],
      'activity': "D",
      "reportLocation": this.reportLocation
    };
    this.truckInventoryReceivingAPI(data)

  }

  //RDC filter search
  rdcFilterSearch() {
    if (this.helperService.getDateValidations(this.gateInFromDate, this.gateInToDate, this.gateOutFromDate, this.gateOutToDate, this.reportFromDate, this.reportToDate)) {
      this.table.offset=0;
      let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
      let data = {
        destination: this.destination,
        indentID: this.indentId,
        status: this.statusType.toString(),
        transporter: this.transporter,
        truckNumber: this.trckNumber,
        truckType: this.truckType,
        type: this.typeOfTruckReport["inventory"],
        source: this.source,
        activity: "D",
        reportLocation: this.reportLocation,
        shipmentID: this.shipmentId,
        bayStatus: this.bayStatus,
        // Gate In Dates
        fromGateInDate: this.gateInFromDate
          ? moment(this.gateInFromDate).format("DD/MM/YYYY")
          : "",
        toGateInDate: this.gateInToDate
          ? moment(this.gateInToDate).format("DD/MM/YYYY")
          : "",
        // Gate Out Dates
        fromGateOutDate: this.gateOutFromDate
          ? moment(this.gateOutFromDate).format("DD/MM/YYYY")
          : "",
        toGateOutDate: this.gateOutToDate
          ? moment(this.gateOutToDate).format("DD/MM/YYYY")
          : "",
        // Report Dates
        fromReportDate: this.reportFromDate
          ? moment(this.reportFromDate).format("DD/MM/YYYY")
          : "",
        toReportDate: this.reportToDate
          ? moment(this.reportToDate).format("DD/MM/YYYY")
          : "",
        "destCountry": obj ? (obj.value) : ''
      };
      this.truckInventoryReceivingAPI(data)
    }
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
  }

  rdcGatesecurityDatetablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    // this.isLoading = true;
    console.log("page info", pageInfo);
    let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
    let datatabledata = {
      "index": pageInfo.offset,
      "pageLength": pageInfo.pageSize,
      "destination": this.destination,
      "indentID": this.indentId,
      "status": this.statusType.toString(),
      "transporter": this.transporter,
      "truckNumber": this.trckNumber,
      "truckType": this.truckType,
      "reportLocation": this.reportLocation,
      "bayStatus": this.bayStatus,
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
      "destCountry": obj ? (obj.value) : ''
    }
    this.truckInventoryReceivingAPI(datatabledata)
  }


  updateRDCplanValue(event, cell, rowIndex, row) {
    console.log('inline editing rowIndex', rowIndex)
    // this.editing[rowIndex + '-' + cell] = false;
    this.rdcPlannerInventoryData[rowIndex][cell] = event.target.value;
    this.rdcPlannerInventoryData = [...this.rdcPlannerInventoryData];
    console.log('UPDATED!', this.rdcPlannerInventoryData[rowIndex][cell]);
    this.bayAssign(row);
  }
  showFilter() {
    this.isShow = !this.isShow;
  }

  viewComments(comments, type) {
    if (type == 'loadslip') {
      this.commentHeader = 'Loadslip Comments'
    }
    else {
      this.commentHeader = 'Comments'
    }
    this.commentMsg = comments;
    $('#commentModal').modal('show');
  }
  showComments(comment, id) {
    this.truckComments = comment;
    this.rowloadslipId = id;
    $("#myModal").modal('show');
  }

  save(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;
      let data = {
        "comments": this.truckComments,
        "gateControlCode": this.rowloadslipId
      }
      this.service.post_service(ApiserviceService.apisList.saveTruckComments, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          this.isLoading = false;
          let index = this.rdcPlannerInventoryData.findIndex(item => item.gateControlCode == this.rowloadslipId);
          this.rdcPlannerInventoryData[index].comments = this.truckComments;
          this.rdcPlannerInventoryData = [...this.rdcPlannerInventoryData]
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
        let index = this.rdcPlannerInventoryData.indexOf(row);
        let repsoneData = response['data']
        this.rdcPlannerInventoryData[index] = repsoneData;
        this.rdcPlannerInventoryData = [... this.rdcPlannerInventoryData];
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
        let index = this.rdcPlannerInventoryData.indexOf(row);
        let responseData = response['data'];
        this.rdcPlannerInventoryData[index] = responseData;
        this.rdcPlannerInventoryData = [... this.rdcPlannerInventoryData];
        this.editing = {};
        this.selected = [];
        this.selected = [...this.selected, responseData];
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
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue +'&isIntransitTruck='+isIntransitTruck).subscribe(response => {
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


  inweightUpdate(row) {
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
        this.rdcTruckInventoryData[index] = response['data'];
        this.rdcTruckInventoryData = [... this.rdcTruckInventoryData];
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
  }


  // out weight update 
  outWeightUpdate(row) {
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
        this.rdcTruckInventoryData[index] = response['data'];
        this.rdcTruckInventoryData = [... this.rdcTruckInventoryData];
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
    if (this.rdcPlannerInventoryData.length > 0) {
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
        'pageLength': this.rdcPlannerPage.count,
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
              "Truck Number": excelRawData[i].truckNumber,
              "Source": excelRawData[i].source,
              "Destination": excelRawData[i].destination,
              "Shipment Id": excelRawData[i].shipmentId,
              "Dest Description": excelRawData[i].destDis,
              "Container": excelRawData[i].containerNum,
              "Truck Type": excelRawData[i].truckType,
              "Transporter": excelRawData[i].transporter,
              "Country of Destination": excelRawData[i].destCountryName,
              "Indent Id": excelRawData[i].indentId,
              "Driver Name": excelRawData[i].driverName,
              "Driver Number": excelRawData[i].driverContact,
              "Report Date": this.service.customDateTimeFormat(excelRawData[i].reportedDate),
              "Gate In": this.service.customDateTimeFormat(excelRawData[i].gateInDate),
              "Unloading Start": this.service.customDateTimeFormat(excelRawData[i].loadslipUSDate),
              "Unloading End": this.service.customDateTimeFormat(excelRawData[i].loadslipUEDate),
              "Gate Out": this.service.customDateTimeFormat(excelRawData[i].gateOutDate),
              "Release": (excelRawData[i].bayStatus == 'RELEASE') ? 'RELEASED' : '',
              "Rejection": excelRawData[i].rejectionStatus,
              "Rejection Desc": excelRawData[i].rejectionDesc,
              "Bay Assigned": excelRawData[i].bayAssigned,
              "Bay status": excelRawData[i].bayStatus,
              "Truck Status": excelRawData[i].status,
              "In weight (Kg)": excelRawData[i].inWeight,
              "Out weight (Kg)": excelRawData[i].outWeight,
              "Net weight (Kg)": excelRawData[i].netWeight,
              "SAP invoice weight (Kg)": excelRawData[i].sapInvWeight,
              "Weight Diff (Kg)": excelRawData.diffInvWeight,
              "SAP invoice value (INR)": excelRawData[i].sapInvValue,
              "Eway bill No": excelRawData[i].ewayBillNo,
              "Loadslip Comments": excelRawData[i].loadslipComments,
              "Gate Comments": excelRawData[i].comments,
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


  //for RDC events 

  //event Trigger
  eventTrigger(row, typeofevent) {
    this.isLoading = true;

    let post_URL;
    let data;
    if ((typeofevent == 'GATED_IN') || (typeofevent == 'INTRANSIT')) {
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

    this.service.post_service(post_URL, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        let responseData = response['data'];
        if ((typeofevent == 'UNLOADING') || (typeofevent == 'DELIVERED') || (typeofevent == 'RELEASED')) {
          let replacebleIndex = this.rdcPlannerInventoryData.findIndex(rawData => rawData.truckNumber == data.truckNumber);
          this.rdcPlannerInventoryData[replacebleIndex] = responseData;
          this.rdcPlannerInventoryData = [...this.rdcPlannerInventoryData]
        } else {
          let replacebleIndex = this.rdcTruckInventoryData.findIndex(rawData => rawData.truckNumber == data.truckNumber);
          this.rdcTruckInventoryData[replacebleIndex] = responseData;
          this.rdcTruckInventoryData = [...this.rdcTruckInventoryData]
        }
        this.selected = [];
        this.selected = [...this.selected, responseData];
        this.isLoading = false;
        this.toastr.success(response['message']);
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




  // Reject Truck 
  rejectTruck(item) {
    this.isLoading = true;
    let data = {
      gateControlCode: item.gateControlCode,
      status: "REJECT",
      indentId: item.indentId,
      truckNumber: item.truckNumber,
      destDis: item.destDis,
      destCountryName: item.destCountryName
    }
    this.service.post_service(ApiserviceService.apisList.getIndentReportInfo, data).subscribe(response => {
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

  addEvent(type, event) {
    console.log(event.target.value);
    if (event.target.value) {
      switch (type) {
        /* Checking if selected from date greater than to date.
     Clearing the toDate field when from date greater than to date */
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
  }
}
