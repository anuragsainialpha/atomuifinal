import { HelperServiceService } from 'src/app/services/helper-service/helper-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { constants } from 'src/app/constants';
import * as XLSX from 'xlsx';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/public/date.adapters';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;
@Component({
  selector: 'app-truck-history-receiving',
  templateUrl: './truck-history-receiving.component.html',
  styleUrls: ['./truck-history-receiving.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class TruckHistoryReceivingComponent implements OnInit {

  fgsReportedTrucksIndents: any;
  gateSeuReportedTrucksIndents = [];
  isLoading: boolean = false;
  commentHeader: string;
  commentMsg: string;
  editing = {};
  editingFgs = {};
  gateSecurityIndents = [];
  rdcpage = {
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
  truckType=[];
  destination: any;
  destinationDesc: any;
  descriptionList = [];
  typeOfTruckReport = {};
  truckStatusList = [];
  statusType=[];
  trckNumber: any;
  RDCgateSeuReportedTrucksIndents = [];
  sourceList: any;
  source: any;
  reportLocation: string;
  truckList = [];
  gateInFromDate: string;
  gateInToDate: string;
  gateOutFromDate: string;
  gateOutToDate: string;
  reportFromDate: string;
  reportToDate: string;
  shipmentId: string;
  loadSlipType: any;
  loadslipList: any;
  isIntransitTruck:boolean = true;
  currentDateAsString = this.helperService.getTodayDateASString();
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService,
    private helperService: HelperServiceService,
    private router: Router
  ) {
    this.userRoles = constants.roles;
    this.typeOfTruckReport = constants.truckReportTypes;
    this.truckStatusList = constants.truckHistoryStatusList;
    this.reportLocation = localStorage.getItem('sourceID');
    this.gateOutFromDate = this.currentDateAsString;
    this.gateOutToDate = this.gateOutFromDate;
    this.isLoading = true;
    // for RDC Operations and RDC gate-security role
    let data = {
      type: this.typeOfTruckReport['history'],
      activity: "D",
      reportLocation: this.reportLocation,
      fromGateOutDate: this.gateOutFromDate ? (moment(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
      toGateOutDate: this.gateOutToDate ? (moment(this.gateOutToDate).format('DD/MM/YYYY')) : '',
    };
    this.service.post_service(ApiserviceService.apisList.getTruckData, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.RDCgateSeuReportedTrucksIndents = response['data'].truckReportsData;
        this.RDCgateSeuReportedTrucksIndents = [...this.RDCgateSeuReportedTrucksIndents];
        this.rdcpage.limit = response['data'].pageLength;
        this.rdcpage.count = response['data'].total;
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
    // get the list of available Bay in the plant 
    // if ((this.service.checkRole() == this.userRoles.fgsOperations1) || (this.service.checkRole() == this.userRoles.fgsOperations2) || (this.service.checkRole() == this.userRoles.fgsOperations3) || (this.service.checkRole() == this.userRoles.fgsOperations4)) {
    //   this.service.get_service(ApiserviceService.apisList.getPlanByInfo).subscribe(response => {
    //     console.log(response);
    //     this.plantBayList = response['data'];
    //   })
    // }
  }

  ngOnInit() {
    // //For activation of the tabs 
    // if (this.service.checkRole() == this.userRoles.rdc_GAT) {
    //   localStorage.setItem("userMenu", "receiving-rdc");
    // } else {
    localStorage.setItem("userMenu", "fgs-truck-status");
    // }


    // for getting truck type master
    this.getTruckTypeMasterData();

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
  onFooterPage(pageInfo){
    console.log(pageInfo);
    
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
    this.shipmentId = ''
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
    this.table.offset = 0;
    this.clearData();
    this.currentDateAsString = this.helperService.getTodayDateASString();
    this.gateOutFromDate = this.currentDateAsString;
    this.gateOutToDate = this.gateOutFromDate;
    this.isLoading = true;
    let data = {
      type: this.typeOfTruckReport['history'],
      activity: "D",
      reportLocation: this.reportLocation,
      fromGateOutDate: this.gateOutFromDate ? (moment(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
      toGateOutDate: this.gateOutToDate ? (moment(this.gateOutToDate).format('DD/MM/YYYY')) : '',
    };
    this.service.post_service(ApiserviceService.apisList.getTruckData, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.RDCgateSeuReportedTrucksIndents = response['data'].truckReportsData;
        this.RDCgateSeuReportedTrucksIndents = [...this.RDCgateSeuReportedTrucksIndents];
        this.rdcpage.limit = response['data'].pageLength;
        this.rdcpage.count = response['data'].total;
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


  //gate security server side pagination
  GateSecurityDatatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.isLoading = true;
    console.log("page info", pageInfo);
    let datatabledata = {
      index: pageInfo.offset,
      pageLength: pageInfo.pageSize,
      destination: this.destination,
      indentID: this.indentId,
      status: this.statusType.toString(),
      transporter: this.transporter,
      truckNumber: this.trckNumber,
      truckType: this.truckType,
      type: this.typeOfTruckReport['history'],
      activity: "D",
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
      "toReportDate": this.reportToDate ? (moment(this.reportToDate).format('DD/MM/YYYY')) : ''
    }
    this.service.post_service(ApiserviceService.apisList.getTruckData, datatabledata).subscribe(response => {
      this.RDCgateSeuReportedTrucksIndents = response['data'].truckReportsData;
      this.RDCgateSeuReportedTrucksIndents = [...this.RDCgateSeuReportedTrucksIndents]
      this.rdcpage.limit = response['data'].pageLength;
      this.rdcpage.count = response['data'].total;
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })

  }



  showFilter() {
    this.isShow = !this.isShow;
  }


  //get filter destination result
  getfilterDestination(event, typeofFilter, isIntransitTruck) {
    this.destinationDesc = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue +'&isIntransitTruck='+isIntransitTruck).subscribe(response => {
        if (typeofFilter === 'destination') {
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

  //export excel data
  export(): void {
    if (this.RDCgateSeuReportedTrucksIndents.length > 0) {
      this.isLoading = true;
      let data = {
        destination: this.destination,
        indentID: this.indentId,
        status: this.statusType.toString(),
        transporter: this.transporter,
        truckNumber: this.trckNumber,
        truckType: this.truckType,
        type: this.typeOfTruckReport['history'],
        activity: "D",
        reportLocation: this.reportLocation,
        pageLength: this.rdcpage.count,
        source: this.source,
        "shipmentID": this.shipmentId,
        // Gate In Dates
        "fromGateInDate": this.gateInFromDate ? (moment(this.gateInFromDate).format('DD/MM/YYYY')) : '',
        "toGateInDate": this.gateInToDate ? (moment(this.gateInToDate).format('DD/MM/YYYY')) : '',
        // Gate Out Dates
        "fromGateOutDate": this.gateOutFromDate ? (moment(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
        "toGateOutDate": this.gateOutToDate ? (moment(this.gateOutToDate).format('DD/MM/YYYY')) : '',
        // Report Dates
        "fromReportDate": this.reportFromDate ? (moment(this.reportFromDate).format('DD/MM/YYYY')) : '',
        "toReportDate": this.reportToDate ? (moment(this.reportToDate).format('DD/MM/YYYY')) : ''
      }

      //for RDC role
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
              "Report Date": excelRawData[i].reportedDate,
              "Gate In": this.service.customDateTimeFormat(excelRawData[i].gateInDate),
              "Bay Assigned": excelRawData[i].bayAssigned,
              "Gate Out": this.service.customDateTimeFormat(excelRawData[i].gateOutDate),
              "ETA": this.service.customDateFormat(excelRawData[i].etaDest),
              "Rejection": excelRawData[i].rejectionStatus,
              "Rejection Desc": excelRawData[i].rejectionDesc,
              "Bay status": excelRawData[i].callStatus,
              "Status": excelRawData[i].status,
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
              "FT Trip ID":excelRawData[i].ftTripId,
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'truckHistoryReceiving.xlsx');
          this.isLoading = false;
        } else {
          this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
          this.isLoading = false;
        }
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      });
    } else {
      this.toastr.error("No records found to export", "Error!");
    }

  }
  //RDC filter search
  rdcFilterSearch() {
    if (this.helperService.getDateValidations(this.gateInFromDate, this.gateInToDate, this.gateOutFromDate, this.gateOutToDate, this.reportFromDate, this.reportToDate)) {
      this.table.offset = 0;
      this.isLoading = true;
      let data = {
        destination: this.destination,
        indentID: this.indentId,
        status: this.statusType.toString(),
        transporter: this.transporter,
        truckNumber: this.trckNumber,
        truckType: this.truckType,
        type: this.typeOfTruckReport['history'],
        source: this.source,
        activity: "D",
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
        "toReportDate": this.reportToDate ? (moment(this.reportToDate).format('DD/MM/YYYY')) : ''
      }

      this.service.post_service(ApiserviceService.apisList.getTruckData, data).subscribe(response => {
        console.log(response);
        if (response['statusCode'] == 200) {
          this.RDCgateSeuReportedTrucksIndents = response['data'].truckReportsData;
          this.RDCgateSeuReportedTrucksIndents = [...this.RDCgateSeuReportedTrucksIndents];
          this.rdcpage.limit = response['data'].pageLength;
          this.rdcpage.count = response['data'].total;
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
  }

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
          let checkToDate: any = this.gateOutToDate;
          console.log("Check--->1", checkToDate);
          if (this.gateOutToDate == this.currentDateAsString) {
            // on page load we are defaluting the  to date with string. Comparing string with date is not possible
            // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
            checkToDate = new Date();
            console.log("Check--->2", checkToDate);
      
          }
        if (this.gateOutToDate && (this.gateOutFromDate > checkToDate)) {
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
}

