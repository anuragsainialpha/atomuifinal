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
  selector: 'app-gatesecurity-truck-history-shipping',
  templateUrl: './gatesecurity-truck-history-shipping.component.html',
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
export class GatesecurityTruckHistoryShippingComponent implements OnInit {
  fgsReportedTrucksIndents: any;
  gateSeuReportedTrucksIndents = [];
  isLoading: boolean = false;
  editing = {};
  editingFgs = {};
  gateSecurityIndents = [];
  page = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 100
  };
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
  commentMsg: string;
  commentHeader: string;
  descriptionList = [];
  typeOfTruckReport = {};
  truckStatusList = [];
  statusType=[];
  trckNumber: any;
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
  loadSlipType: string;
  comment: string;
  loadslipList = [];
  destCountryName: string;
  countryList: any[];
  isIntransitTruck:boolean = true;
  categoryList = [];
  materialGrp = [];
  currentDateAsString = this.helperService.getTodayDateASString();
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rejection=[];
  rejectionList: string[];
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
    this.isLoading = true;
    this.gateOutFromDate = this.currentDateAsString;
    this.gateOutToDate = this.gateOutFromDate;
    // for FGS operations and FGS gate security
    let data = {
      type: this.typeOfTruckReport['history'],
      activity: "P",
      reportLocation: this.reportLocation,
      fromGateOutDate: this.gateOutFromDate ? (moment(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
      toGateOutDate: this.gateOutToDate ? (moment(this.gateOutToDate).format('DD/MM/YYYY')) : '',
      // Report Dates
    }
    this.service.post_service(ApiserviceService.apisList.getTruckData, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.gateSeuReportedTrucksIndents = response['data'].truckReportsData;
        this.gateSeuReportedTrucksIndents = [...this.gateSeuReportedTrucksIndents];
        this.page.limit = response['data'].pageLength;
        this.page.count = response['data'].total;
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

  ngOnInit() {
    //Activation of Tabs
    if (this.service.checkRole() == this.userRoles.rdc_PLN || (this.service.checkRole() == this.userRoles.JIT_OPERATION)) {
      localStorage.setItem("userMenu", "RDC-GAT-REPORT");
    } else if ((this.service.checkRole() == this.userRoles.gateSecurity) || (this.service.checkRole() == this.userRoles.rdc_GAT) || (this.service.checkRole() == this.userRoles.JIT_GATE_SECURITY)) {
      localStorage.setItem("userMenu", "GAT-HISTORY-SHIPPING");
      // localStorage.setItem("userMenu", "GAT-HISTORY");

    } else {
      localStorage.setItem("userMenu", "fgs-truck-status");
    }

    // for getting truck type master
    this.getTruckTypeMasterData();
    this.rejectionList = constants.rejectionList;
    this.getCategoryMasterData();
  }

  onFooterPage(pageInfo){
    console.log(pageInfo);
    
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
    this.truckType =[];
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
    this.destCountryName = '';
    this.countryList = [];
    this.rejection = [];
    this.materialGrp = [];
  }


  //refersh data 
  refreshData() {
    this.table.offset = 0;
    this.clearData();
    this.isLoading = true;
    this.currentDateAsString = this.helperService.getTodayDateASString();
    this.gateOutFromDate = this.currentDateAsString;
    this.gateOutToDate = this.gateOutFromDate;
    let data = {
      type: this.typeOfTruckReport['history'],
      activity: "P",
      reportLocation: this.reportLocation,
      fromGateOutDate: this.gateOutFromDate ? (moment(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
      toGateOutDate: this.gateOutToDate ? (moment(this.gateOutToDate).format('DD/MM/YYYY')) : '',
    }
    this.service.post_service(ApiserviceService.apisList.getTruckData, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.gateSeuReportedTrucksIndents = response['data'].truckReportsData;
        this.gateSeuReportedTrucksIndents = [...this.gateSeuReportedTrucksIndents];
        this.page.limit = response['data'].pageLength;
        this.page.count = response['data'].total;
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

  // truck status filter creteria
  truckstatusIndetsFilter() {
    if (this.helperService.getDateValidations(this.gateInFromDate, this.gateInToDate, this.gateOutFromDate, this.gateOutToDate, this.reportFromDate, this.reportToDate)) {
      this.table.offset = 0;
      this.isLoading = true;
      let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
      let data = {
        "destination": this.destination,
        "source": this.source,
        "indentID": this.indentId,
        "status": this.statusType.toString(),
        "transporter": this.transporter,
        "truckNumber": this.trckNumber,
        "truckType": this.truckType,
        "type": this.typeOfTruckReport['history'],
        "activity": "P",
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
        "destCountry": obj ? (obj.value) : '',
        "rejection": this.rejection,
        "indentCategoryList":this.materialGrp
      }
      this.service.post_service(ApiserviceService.apisList.getTruckData, data).subscribe(response => {
        console.log(response);
        if (response['statusCode'] == 200) {
          this.gateSeuReportedTrucksIndents = response['data'].truckReportsData;
          this.gateSeuReportedTrucksIndents = [...this.gateSeuReportedTrucksIndents];
          this.page.limit = response['data'].pageLength;
          this.page.count = response['data'].total;
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


  //gate security server side pagination
  GateSecurityDatatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.isLoading = true;
    let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
    console.log("page info", pageInfo);
    let datatabledata = {
      "index": pageInfo.offset,
      "pageLength": pageInfo.pageSize,
      "destination": this.destination,
      "source": this.source,
      "indentID": this.indentId,
      "status": this.statusType.toString(),
      "transporter": this.transporter,
      "truckNumber": this.trckNumber,
      "truckType": this.truckType,
      "type": this.typeOfTruckReport['history'],
      "shipmentID": this.shipmentId,
      "activity": "P",
      "reportLocation": this.reportLocation,
      // Gate In Dates
      "fromGateInDate": this.gateInFromDate ? (moment(this.gateInFromDate).format('DD/MM/YYYY')) : '',
      "toGateInDate": this.gateInToDate ? (moment(this.gateInToDate).format('DD/MM/YYYY')) : '',
      // Gate Out Dates
      "fromGateOutDate": this.gateOutFromDate ? (moment(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
      "toGateOutDate": this.gateOutToDate ? (moment(this.gateOutToDate).format('DD/MM/YYYY')) : '',
      // Report Dates
      "fromReportDate": this.reportFromDate ? (moment(this.reportFromDate).format('DD/MM/YYYY')) : '',
      "toReportDate": this.reportToDate ? (moment(this.reportToDate).format('DD/MM/YYYY')) : '',
      "destCountry": obj ? (obj.value) : '',
      "rejection": this.rejection,
      "indentCategoryList":this.materialGrp
    }
    this.service.post_service(ApiserviceService.apisList.getTruckData, datatabledata).subscribe(response => {
      this.page.count = response['data'].total;
      this.gateSeuReportedTrucksIndents = response['data'].truckReportsData;
      this.gateSeuReportedTrucksIndents = [...this.gateSeuReportedTrucksIndents]
      this.page.limit = response['data'].pageLength;
      this.page.count = response['data'].total;
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
  getfilterDestination(event, typeofFilter,isIntransitTruck) {
    this.destinationDesc = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue+'&isIntransitTruck='+isIntransitTruck).subscribe(response => {
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

  showComments(comments, type) {
    if (type == 'loadslip') {
      this.commentHeader = 'Loadslip Comments'
    }
    else {
      this.commentHeader = 'Comments'
    }
    this.commentMsg = comments;
    $('#commentModal').modal('show');
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
    if (this.gateSeuReportedTrucksIndents.length > 0) {
      this.isLoading = true;
      let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
      let data = {
        'destination': this.destination,
        'source': this.source,
        'indentID': this.indentId,
        'status': this.statusType.toString(),
        'transporter': this.transporter,
        'truckNumber': this.trckNumber,
        'truckType': this.truckType,
        'type': this.typeOfTruckReport['history'],
        'activity': "P",
        'reportLocation': this.reportLocation,
        'pageLength': this.page.count,
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
        "destCountry": obj ? (obj.value) : '',
        "rejection": this.rejection,
        "indentCategoryList":this.materialGrp
      }
      // for FGS role 
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
              // "Container Number": excelRawData[i].containerNum,
              "Truck Type": excelRawData[i].truckType,
              "Transporter": excelRawData[i].transporter,
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
              "Indent Id": excelRawData[i].indentId,
              "Driver Name": excelRawData[i].driverName,
              "Driver Number": excelRawData[i].driverContact,
              "Report Date": this.service.customDateTimeFormat(excelRawData[i].reportedDate),
              "Gate In": this.service.customDateTimeFormat(excelRawData[i].gateInDate),
              "Bay Assigned": excelRawData[i].bayAssigned,
              "Gate Out": excelRawData[i].gateOutDate,
              "ETA": this.service.customDateFormat(excelRawData[i].etaDest),
              "Rejection": excelRawData[i].rejectionStatus,
              "Rejection Desc": excelRawData[i].rejectionDesc,
              // "Call stats": excelRawData[i].callStatus,
              "In weight (Kg)": excelRawData[i].inWeight,
              "Out weight (Kg)": excelRawData[i].outWeight,
              "Net weight (Kg)": excelRawData[i].netWeight,
              "SAP invoice weight (Kg)": excelRawData[i].sapInvWeight,
              "Weight Diff (Kg)": excelRawData.diffInvWeight,
              "SAP invoice value (INR)": excelRawData[i].sapInvValue,
              "Eway bill No": excelRawData[i].ewayBillNo,
              "Status": excelRawData[i].status,
              "Loadslip Comments": excelRawData[i].loadslipComments,
              "Gate Comments": excelRawData[i].comments,
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
              "FT Trip ID":excelRawData[i].ftTripId,
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'truckHistoryShipping.xlsx');
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

  // loadslipInvoice(shipmentNumber) {
  //   this.viewLoadslip(shipmentNumber);
  // }

  // Navigate to loadslip view
  viewLoadslipnavigation(item) {
    $("#loadslipsModal").modal('hide');
    let loadSlipId = item['loadlipId'];
    let type = item.type;
    if (this.loadSlipType == 'loadslipView') {
      if (type == 'FGS_EXP') {
        this.router.navigate(['/load-slip-view-for-export/' + loadSlipId], {queryParams : {menuName : localStorage.getItem('userMenu')}});
      } else if (type == 'JIT_OEM') {
        this.router.navigate(['/load-slip-view-for-jit/' + loadSlipId], {queryParams : {menuName : localStorage.getItem('userMenu')}});
      } else {
        this.router.navigate(['/load-slip-view/' + loadSlipId], {queryParams : {menuName : localStorage.getItem('userMenu')}});
      }
    }
    else {
      this.router.navigate(['/load-slip-qty-view/' + loadSlipId], {queryParams : {menuName : localStorage.getItem('userMenu')}});
    }
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

