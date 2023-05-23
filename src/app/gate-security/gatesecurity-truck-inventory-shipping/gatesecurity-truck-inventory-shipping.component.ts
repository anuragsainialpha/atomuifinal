import { HelperServiceService } from './../../services/helper-service/helper-service.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { constants } from 'src/app/constants';
import * as XLSX from 'xlsx'
import { Router, RouterLinkWithHref } from '@angular/router';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/public/date.adapters';
import * as moment from 'moment';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;
@Component({
  selector: 'app-gatesecurity-truck-inventory-shipping',
  templateUrl: './gatesecurity-truck-inventory-shipping.component.html',
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
export class GatesecurityTruckInventoryShippingComponent implements OnInit, DoCheck {
  fgsReportedTrucksIndents: any;
  gateSeuReportedTrucksIndents = [];
  isLoading: boolean = false;
  editing = {};
  editingFgs = {};
  gateSecurityIndents = [];
  editingRDCpln = {};
  rejectData: any;
  rejectReason: string;
  page = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 200
  };
  gateInFromDate: string;
  gateInToDate: string;
  loadSlipType: string;
  gateOutFromDate: string;
  gateOutToDate: string;
  reportFromDate: string;
  reportToDate: string;
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
  statusType=[];
  trckNumber: any;
  source: any;
  sourceList: any;
  truckComments: string;
  rowloadslipId: string;
  loadslipComments: string;
  rdcTruckInventoryData: any[];
  reportLocation: string;
  truckList = [];
  rejectRasonList = [];
  reportTruckStatusList: { "key": string; "value": string; }[];
  loadslipList = [];
  shipmentId: string;
  currentObj: any;
  baystatusList = [];
  bayStatus=[];
  gateoutReason: string;
  countryList: any[];
  destCountryName: string;
  destIndentList: any;
  newIndent: any;
  selected = [];
  isIntransitTruck:boolean = true;
  categoryList = [];
  materialGrp = [];
  freezeLeftValue: boolean = true;
  trackingConsentStatus: string;
  consentPhoneTelecom: string;
  truckCapacity: any; 
  bsNorms: any;
  fuelType: any;
  fuelTypeList =  [];
  bsNormsList = [];
  file: File;
  base64textString = [];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  items = [
    {
      "key": "Yes",
      "value": true
    },
    {
      "key": "No",
      "value": false
    }
  ]
  // rejectionList = ["NORMAL", "REJECTED"];
  rejection: any;
  rejectionList: string[];
  rowData: any = {};
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService,
    private router: Router,
    private helperService: HelperServiceService
  ) {
    this.userRoles = constants.roles;
    this.typeOfTruckReport = constants.truckReportTypes;
    this.reportTruckStatusList = constants.truckInventoryStatusList;
    this.reportLocation = localStorage.getItem('sourceID');
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
    //Activation of Tabs
    if (this.service.checkRole() == this.userRoles.rdc_PLN || (this.service.checkRole() == this.userRoles.JIT_OPERATION)) {
      localStorage.setItem("userMenu", "RDC-GAT-REPORT");
    } else if ((this.service.checkRole() == this.userRoles.gateSecurity) || (this.service.checkRole() == this.userRoles.rdc_GAT) || (this.service.checkRole() == this.userRoles.JIT_GATE_SECURITY)) {
      localStorage.setItem("userMenu", "GAT-INVENTORY-SHIPPING");
    }
    else {
      localStorage.setItem("userMenu", "fgs-truck-status");
    }
    // for getting truck type master
    this.getTruckTypeMasterData();
    this.getAllRejectReasons();
    let data = {
      'type': this.typeOfTruckReport['inventory'],
      'activity': "P",
      "reportLocation": this.reportLocation,
      // As per new requirement on 11/07/2019
      "pageLength": 200
    }
    this.gateSecurityTruckInventoryShippingAPI(data);
    this.service.get_service(ApiserviceService.apisList.getPlanByInfo).subscribe(response => {
      console.log(response);
      this.plantBayList = response['data'];
    });
    this.rejectionList = constants.rejectionList;
    this.getCategoryMasterData();
    this.fuelTypeList =['CNG','Petrol','Diesel','Electric'];
    this.bsNormsList= ['BS-3','BS-4','BS-6','Others'];
  }

  gateSecurityTruckInventoryShippingAPI(data) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getTruckData, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.selected=[];
        this.gateSeuReportedTrucksIndents = response['data'].truckReportsData;
        this.gateSeuReportedTrucksIndents = [...this.gateSeuReportedTrucksIndents];
        console.log('data', this.gateSeuReportedTrucksIndents.length);
        console.log('bsNorms',this.gateSeuReportedTrucksIndents);
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
    this.destIndentList = [];
    this.transporterList = [];
    this.source = '';
    this.gateInFromDate = '';
    this.gateInToDate = '';
    this.gateOutFromDate = '';
    this.gateOutToDate = '';
    this.reportFromDate = '';
    this.reportToDate = '';
    this.shipmentId = "";
    this.editing = {};
    this.bayStatus = [];
    this.destCountryName = '';
    this.countryList = [];
    this.rejection = [];
    this.materialGrp = [];

  }

  openTruckModel(row, rowIndex) {
    this.rejectReason = '';
    this.rejectData = {
      gateControlCode: row.gateControlCode,
      status: 'REJECT',
      indentId: row.indentId,
      truckNumber: row.truckNumber,
      destDis: row.destDis,
      destCountryName: row.destCountryName
    }
    $('#rejectionModel').modal('show');
  }

  rejectTruck(reason) {
    let modifyIndex;
    if (!reason) {
      this.toastr.error('Please Give Reason for Rejecting Truck');
      $('#rejectionModel').modal('show');
    } else {
      $('#rejectionModel').modal('hide');
      this.isLoading = true;
      this.rejectData['rejectionCode'] = reason;
      this.service.post_service(ApiserviceService.apisList.rejectTruck+'?isGateSecurity='+true, this.rejectData).subscribe(response => {
        console.log(response);
        if (response['statusCode'] == 200) {
          this.toastr.success(response['message']);
          this.isLoading = false;
          let replacebleIndex = this.gateSeuReportedTrucksIndents.findIndex(rawData => rawData.gateControlCode == this.rejectData['gateControlCode']);
          let responseData = response['data'];
          this.gateSeuReportedTrucksIndents[replacebleIndex] = responseData;
          this.selected = [];
          this.gateSeuReportedTrucksIndents = [...this.gateSeuReportedTrucksIndents];
          this.selected = [...this.selected, responseData];
          this.rejectReason = '';
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





  //refersh data 
  refreshData() {
    this.table.offset = 0;
    this.clearData();
    this.selected = [];
    // this.isLoading = true;
    // Refresh Data FGS operations & FGs gatesecurity 
    let data = {
      'type': this.typeOfTruckReport['inventory'],
      'activity': "P",
      "reportLocation": this.reportLocation
    }
    this.gateSecurityTruckInventoryShippingAPI(data);
  }

  // truck status filter creteria
  truckstatusIndetsFilter() {
    if (this.helperService.getDateValidations(this.gateInFromDate, this.gateInToDate, this.gateOutFromDate, this.gateOutToDate, this.reportFromDate, this.reportToDate)) {
      this.isLoading = true;
      //making offset to Zero
      this.table.offset = 0;
      this.selected = [];
      let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
      let data = {
        'source': this.source,
        'destination': this.destination,
        'indentID': this.indentId,
        'status': this.statusType.toString(),
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
        "pageLength": this.page.pageSize,
        "indentCategoryList":this.materialGrp
      }

      this.gateSecurityTruckInventoryShippingAPI(data);
    }
  }



  //gate security server side pagination
  GateSecurityDatatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.isLoading = true;
    console.log("page info", pageInfo);
    let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
    let datatabledata = {
      'index': pageInfo.offset,
      'pageLength': pageInfo.pageSize,
      'source': this.source,
      'destination': this.destination,
      'indentID': this.indentId,
      'status': this.statusType.toString(),
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
    this.gateSecurityTruckInventoryShippingAPI(datatabledata);

  }

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex)
    // this.editing[rowIndex + '-' + cell] = false;
    if ((cell == 'puc') || (cell == 'insurance') || (cell == 'seatBelt') || (cell == 'firstAid') || (cell == 'fireExtenguisher') || (cell == 'bsNorms') || (cell == 'fuelType')) {
      this.gateSeuReportedTrucksIndents[rowIndex][cell] = (event.value) ? event.value : '';
    } else {
      this.gateSeuReportedTrucksIndents[rowIndex][cell] = (event.target) ? event.target.value : event;
    }

    this.gateSeuReportedTrucksIndents = [...this.gateSeuReportedTrucksIndents];
    this.selected = [];
    this.selected = [...this.selected, this.gateSeuReportedTrucksIndents[rowIndex]];
    console.log('UPDATED!', this.gateSeuReportedTrucksIndents[rowIndex][cell]);
  }
  showFilter() {
    this.isShow = !this.isShow;
  }


  // gate In action 
  gateInTruck(row, rowIndex) {
    this.isLoading = true;
    let post_URL; let data;
    if (row.intransitTruck) {
      // call intransit-truck-report;
      data = {
        truckNumber: row.truckNumber,
        status: "GATED_IN",
        gateControlCode: row.gateControlCode,
        destDis: row.destDis,
        destCountryName: row.destCountryName
      }
      post_URL = ApiserviceService.apisList.reportIntransitTruck;
    } else {
      // indent-report
      data = {
        gateControlCode: row.gateControlCode,
        status: "GATED_IN",
        indentId: row.indentId,
        outWeight: Number(row.outWeight),
        destDis: row.destDis,
        destCountryName: row.destCountryName
      }
      post_URL = ApiserviceService.apisList.getIndentReportInfo;
    }

    // if (data.inWeight) {
    console.log(data);
    this.service.post_service(post_URL, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        let index = this.gateSeuReportedTrucksIndents.indexOf(row);
        let responseData = response['data'];
        this.gateSeuReportedTrucksIndents[index] = responseData;
        this.gateSeuReportedTrucksIndents = [... this.gateSeuReportedTrucksIndents];
        this.selected = [];
        this.selected = [...this.selected, responseData];
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
    // } else {
    //   this.isLoading = false;
    //   this.toastr.error("Please enter in weight");
    // }

  }


  // gate OUT event
  gateOutTruck(row, rowIndex) {
    this.isLoading = true;
    if (row.gateIn) {
      // If intransitTruck is true (Intransit trucks),gate-In and gate-out APIs are different with Shipment Trucks
      let post_URL;
      let data;
      //Can gateout flag for user cam gateout 

      let canGateOut = true;
      //if (row.inWeightStatus) {
        if (row.outWeightStatus) {
          canGateOut = true;
        } else {
          canGateOut = false
        }
      //} else {

      //}
      if (row.intransitTruck) {
        // call intransit-truck-report;
        data = {
          truckNumber: row.truckNumber,
          status: "INTRANSIT",
          gateControlCode: row.gateControlCode,
          destDis: row.destDis,
          destCountryName: row.destCountryName
        }
        post_URL = ApiserviceService.apisList.reportIntransitTruck;
      } else {
        // indent-report
        data = {
          gateControlCode: row.gateControlCode,
          status: "INTRANSIT",
          indentId: row.indentId,
          outWeight: Number(row.outWeight),
          destDis: row.destDis,
          destCountryName: row.destCountryName
        }
        post_URL = ApiserviceService.apisList.getIndentReportInfo;
      }

      if (canGateOut) {
        this.service.post_service(post_URL, data).subscribe(response => {
          console.log(response);
          if (response['statusCode'] == 200) {
            let index = this.gateSeuReportedTrucksIndents.indexOf(row);
            let responseData = response['data'];
            this.gateSeuReportedTrucksIndents[index] = responseData;
            this.gateSeuReportedTrucksIndents = [... this.gateSeuReportedTrucksIndents];
            this.selected = [];
            this.selected = [...this.selected, responseData];
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
      } else {
        this.isLoading = false;
        this.toastr.warning("OutWeight should be mandatory to Gateout", "! Warning")
      }

    } else {
      this.isLoading = false;
      this.toastr.error("Truck can't be Gated Out before Gate In");
    }
  }

  gateoutModal(row) {
    this.gateoutReason = '';
    this.currentObj = { ...row }
    $("#gateOutRejectionModal").modal('show');
  }

  /* Just Displaying the Warning msg */
  gateoutWithoutLSModal(row) {
    // this.gateoutReason = '';
    // this.currentObj = { ...row }
    $("#gateoutWithoutLSModal").modal('show');
  }

  onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }
  gateOutReason(gateoutReason) {
    if (gateoutReason) {
      this.isLoading = true;
      let post_URL; let data;
      let canGateOut = true;
      if (this.currentObj.inWeightStatus) {
        if (this.currentObj.outWeightStatus) {
          canGateOut = true;
        } else {
          canGateOut = false
        }
      }

      if (canGateOut) {
        data = {
          gateControlCode: this.currentObj.gateControlCode,
          status: "INTRANSIT",
          indentId: this.currentObj.indentId,
          outWeight: Number(this.currentObj.outWeight),
          destDis: this.currentObj.destDis,
          rejectionCode: gateoutReason,
          destCountryName: this.currentObj.destCountryName
        }
        post_URL = ApiserviceService.apisList.getIndentReportInfo;
        this.service.post_service(post_URL, data).subscribe(response => {
          console.log(response);
          if (response['statusCode'] == 200) {
            $("#gateOutRejectionModal").modal('hide');
            let index = this.gateSeuReportedTrucksIndents.findIndex(a => a.gateControlCode == this.currentObj.gateControlCode);
            let responseData = response['data'];
            this.gateSeuReportedTrucksIndents[index] = responseData;
            this.gateSeuReportedTrucksIndents = [... this.gateSeuReportedTrucksIndents];
            this.selected = [];
            this.selected = [...this.selected, responseData];
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
      } else {
        this.isLoading = false;
        this.toastr.warning("OutWeight should be mandatory to Gateout", "! Warning")
      }
    } else {
      this.isLoading = false;
      this.toastr.warning("Please select Reason for Gateout", "! Warning")
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


  //get filter destination result
  getfilterDestination(event, typeofevent,isIntransitTruck) {
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


  //filterGateSecuirtyIndents Search API
  filterGateSecuirtyIndents() {
    this.isLoading = true;
    let data = {
      indentID: this.indentId,
      transporter: this.transporter,
      truckType: this.truckType,
      destination: this.destination
    }
    this.service.post_service(ApiserviceService.apisList.viewSearchIndents, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.gateSeuReportedTrucksIndents = response['data'].indents;
        this.gateSeuReportedTrucksIndents = [... this.gateSeuReportedTrucksIndents];
        this.page.count = response['data'].total;
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


  inweightUpdate(row) {
    // if ((row.inWeight) && (Number(row.inWeight) !== 0)) {
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
        let index = this.gateSeuReportedTrucksIndents.indexOf(row);
        let responseData = response['data'];
        this.gateSeuReportedTrucksIndents[index] = responseData;
        this.gateSeuReportedTrucksIndents = [... this.gateSeuReportedTrucksIndents];
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
    //   this.toastr.warning("In-weight cannot be empty or 0", "!Error")
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
        let index = this.gateSeuReportedTrucksIndents.indexOf(row);
        let responseData = response['data'];
        this.gateSeuReportedTrucksIndents[index] = responseData;
        this.gateSeuReportedTrucksIndents = [... this.gateSeuReportedTrucksIndents];
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
    //   this.toastr.warning("Out-weight cannot be empty or 0", "!Error")
    // }

  }

  //export excel data
  export(): void {
    if (this.gateSeuReportedTrucksIndents.length > 0) {
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
        'pageLength': this.page.count,
        'source': this.source,
        "shipmentID": this.shipmentId,
        'activity': "P",
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
        "bayStatus": this.bayStatus,
        "destCountry": obj ? (obj.value) : '',
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
              "Tracking Consent Status": excelRawData[i].trackingConsentStatus,
              "Consent Phone Telecom": excelRawData[i].consentPhoneTelecom,
              "Truck Capacity (Kg)": excelRawData[i].truckCapacity,
              "Fuel Type": excelRawData[i].fuelType,
              "BS Norms": excelRawData[i].bsNorms
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
      });
    } else {
      this.toastr.error("No records found to export", "Error!");
    }
  }


  saveTruck(row) {
    this.isLoading = true;
    let data = {
      containerNum: row.containerNum,
      driverContact: row.driverContact,
      driverLicense: row.driverLicense,
      driverName: row.driverName,
      gateControlCode: row.gateControlCode,
      indentId: row.indentId,
      truckNumber: row.truckNumber,
      destDesc: row.destDis,
      truckType: row.truckType,
      editIndentId: this.newIndent ? this.newIndent : null,
      destCountryName: row.destCountryName,
      puc: row.puc,
      insurance: row.insurance,
      seatBelt: row.seatBelt,
      firstAid: row.firstAid,
      fireExtenguisher: row.fireExtenguisher,
      emergencyCard: row.emergencyCard,
      sparKArrestor: row.sparKArrestor,
      fitnessCert: row.fitnessCert,
      trackingConsentStatus: row.trackingConsentStatus,
      truckCapacity: row.truckCapacity,
      fuelType: row.fuelType,
      bsNorms: row.bsNorms
    }
    this.service.post_service(ApiserviceService.apisList.updateTruckInventoryDetails, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        //Update data for FGS ROLE
        let replacebleIndex = this.gateSeuReportedTrucksIndents.findIndex(rawData => rawData.gateControlCode == data.gateControlCode);
        this.editing = {};
        this.editingFgs = {};
        let responseData = response['data'];
        this.gateSeuReportedTrucksIndents[replacebleIndex] = responseData;
        this.gateSeuReportedTrucksIndents = [...this.gateSeuReportedTrucksIndents];
        this.selected = [];
        this.selected = [...this.selected, responseData];
        this.isLoading = false;
        this.destinationList = [];
        this.destIndentList = [];
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

  showComments(comment, row) {
    this.truckComments = comment;
    this.rowData = row;
    $("#myModal").modal('show');
  }

  showLoadslipComments(comments) {
    this.loadslipComments = comments;
    $("#commentModal").modal('show');
  }

  save(form: NgForm) {
    if (form.valid) {

      this.isLoading = true;
      // let data = {
      //   "comments": this.truckComments,
      //   "gateControlCode": this.rowloadslipId
      // }
      // Sending the entire ROW to the backend
      let data = this.rowData;
      data.comments = this.truckComments;
      this.service.post_service(ApiserviceService.apisList.saveTruckComments, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          this.isLoading = false;
          let index = this.gateSeuReportedTrucksIndents.findIndex(item => item.gateControlCode == response['data'].gateControlCode);
          this.gateSeuReportedTrucksIndents[index] = response['data'];
          this.gateSeuReportedTrucksIndents = [...this.gateSeuReportedTrucksIndents];
          let responseData = this.gateSeuReportedTrucksIndents[index];
          this.selected = [];
          this.selected = [...this.selected, responseData];
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

  // Edit Truck Destination Code
  // getIndentsFromDest(row, selectedDest) {
  //   if (selectedDest) {
  //     this.isLoading = true;
  //     let body={};
  //     this.service.post_service(ApiserviceService.apisList.getIndentFromDest+'?location='+selectedDest.value, body ).subscribe(response => {
  //       if (response['statusCode'] == 200) {
  //         if (response['data'].length > 0) {
  //           this.isLoading = false;
  //           this.destIndentList = response['data'];
  //           row.destination = selectedDest.value;
  //           $('#destIndentModal').modal('show');
  //         } else {
  //           this.isLoading = false;
  //           this.toastr.error("No Indents found for selected Destination..", "Error!");
  //         }
  //       } else {
  //         this.isLoading = false;
  //         this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
  //       }
  //     }, err => {
  //       this.isLoading = false;
  //       this.toastr.error(err ? err : "Something went wrong..", "Error!");
  //     })

  //   }
  // }

  setSelectedIndent(selectedIndent) {
    // if (selectedIndent) {
    //   this.newIndent = selectedIndent;
    //   $('#destIndentModal').modal('hide');
    //   console.log("new Indent Id-------->", this.newIndent);

    // }
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


  checkConsent(row) {
    
    row.trackingConsentStatus = 'RETRYING';
    this.saveTruck(row);
     (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    }
  }

  onFileChange(event,shipmentID,truckNumber) {
    localStorage.setItem("userMenu", "gateSecurity-inventory")

    this.file = event.target.files[0];
    this.toastr.warning("Photo Uploaded");
    var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(this.file);
  }
  

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
        this.base64textString.push('data:image/png;base64,' + btoa(readerEvt.target.result));
           console.log(btoa(binaryString));
   }
}