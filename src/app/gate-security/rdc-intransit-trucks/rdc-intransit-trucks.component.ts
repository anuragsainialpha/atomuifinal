import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { constants, rdcReportTruckStatus } from 'src/app/constants';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;
@Component({
  selector: 'app-rdc-intransit-trucks',
  templateUrl: './rdc-intransit-trucks.component.html',
  styleUrls: ['./rdc-intransit-trucks.component.scss']
})
export class RdcIntransitTrucksComponent implements OnInit {
  isLoading: boolean = false;
  editing = {};
  editingFgs = {};
  gateSecurityIndents = [];
  loadSlipType: string;
  rdcpage = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 100
  }
  userRoles: any;
  shipmentId: any;
  isShow: boolean = true;
  destinationList: any[];
  transporterList: any[];
  indentId: any;
  transporter: any;
  truckType = [];
  destination: any;
  destinationDesc: any;
  descriptionList = [];
  typeOfTruckReport = {};
  reportTruckStatusList = [];
  statusType: any;
  truckNumber: any;
  rdcGateSecurityTransitTrucks = [];
  title: string;
  sourceList = [];
  source: string;
  reportLocation: string;
  loadslipList = [];
  truckList = [];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  isIntransitTruck: boolean = true;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService,
    private router: Router,

  ) {
    this.userRoles = constants.roles;
    this.typeOfTruckReport = constants.truckReportTypes;
    this.reportTruckStatusList = constants.truckInventoryStatusList;
    this.reportLocation = localStorage.getItem('sourceID');
    this.isLoading = true;
    let data = {
      reportLocation: this.reportLocation,
      type: "INTRANSIT"
    };
    this.service.post_service(ApiserviceService.apisList.getTruckData, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.rdcGateSecurityTransitTrucks = response['data'].truckReportsData;
        this.rdcGateSecurityTransitTrucks = [...this.rdcGateSecurityTransitTrucks];
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

  ngOnInit() {

    //show the title based on the Role 
    if (this.service.checkRole() == this.userRoles.gateSecurity) {
      this.title = "FGS > In-Transit Truck";
    } else if ((this.service.checkRole() == this.userRoles.JIT_GATE_SECURITY) || (this.service.checkRole() == this.userRoles.JIT_OPERATION)) {
      this.title = "FGS-JIT > In-Transit Trucks";
    } else if ((this.service.checkRole() == this.userRoles.fgsOperations2) || (this.service.checkRole() == this.userRoles.fgsOperations1)
      || (this.service.checkRole() == this.userRoles.fgsOperations3) || (this.service.checkRole() == this.userRoles.fgsOperations4)) {
      this.title = "FGS > In-Transit Trucks";
    } else if (this.service.checkRole() == this.userRoles.ABU_PLN) {
      this.title = "In-Transit Trucks";
    } else if (this.service.isDPREPRole()) {
      this.title = "Truck Status > In-Transit Truck";
    } else {
      this.title = "Receiving RDC > In-Transit Trucks";
    }

    //Activation of Tabs
    // if (this.service.checkRole() == this.userRoles.rdc_PLN) {
    //   localStorage.setItem("userMenu", "RDC-GAT-REPORT");
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
    this.statusType = "";
    this.transporter = "";
    this.truckNumber = "";
    this.truckType = [];
    this.shipmentId = '';
    this.destinationDesc = "";
    this.descriptionList = [];
    this.destinationList = [];
    this.transporterList = [];
    this.source = '';
  }


  //refersh data 
  refreshData() {
    this.clearData();
    // this.destination = '';
    // this.indentId = "";
    // this.statusType = "";
    // this.transporter = "";
    // this.truckNumber = "";
    // this.truckType = "";
    // this.destinationList = [];
    // this.transporterList = [];
    // this.source = '';
    this.table.offset = 0;
    this.isLoading = true;
    let data = {
      reportLocation: this.reportLocation,
      type: "INTRANSIT"
    }
    this.service.post_service(ApiserviceService.apisList.getTruckData, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.rdcGateSecurityTransitTrucks = response['data'].truckReportsData;
        this.rdcGateSecurityTransitTrucks = [...this.rdcGateSecurityTransitTrucks];
        this.rdcpage.limit = response['data'].pageLength;
        this.rdcpage.count = response['data'].total;
        this.isLoading = false;

        // this.toastr.success(response['message'] ? response['message'] : "Success");
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
    this.isLoading = true;
    this.table.offset = 0;
    let data = {
      destination: this.destination,
      source: this.source,
      shipmentID: this.shipmentId,
      transporter: this.transporter,
      truckNumber: this.truckNumber,
      truckType: this.truckType,
      reportLocation: this.reportLocation,
      type: "INTRANSIT"
    }
    this.service.post_service(ApiserviceService.apisList.getTruckData, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.rdcGateSecurityTransitTrucks = response['data'].truckReportsData;
        this.rdcGateSecurityTransitTrucks = [...this.rdcGateSecurityTransitTrucks];
        this.rdcpage.limit = response['data'].pageLength;
        this.rdcpage.count = response['data'].total;
        this.isLoading = false;

        // this.toastr.success(response['message'] ? response['message'] : "Success");
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




  rdcGatesecurityDatetablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.isLoading = true;
    console.log("page info", pageInfo);
    let datatabledata = {
      index: pageInfo.offset,
      pageLength: pageInfo.pageSize,
      destination: this.destination,
      source: this.source,
      indentID: this.indentId,
      transporter: this.transporter,
      truckNumber: this.truckNumber,
      truckType: this.truckType,
      reportLocation: this.reportLocation,
      type: "INTRANSIT"
    }
    this.service.post_service(ApiserviceService.apisList.getTruckData, datatabledata).subscribe(response => {
      this.rdcGateSecurityTransitTrucks = response['data'].truckReportsData;
      this.rdcGateSecurityTransitTrucks = [...this.rdcGateSecurityTransitTrucks]
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
  //isIntransitTruck is used to fetch the loggedIn plant Loc in destination LOVs.
  //isIntransitTruck is sent as TRUE in destination search and FALSE in source search.
  getfilterDestination(event, typeofEvent, isIntransitTruck) {
    this.destinationDesc = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue +'&isIntransitTruck='+isIntransitTruck).subscribe(response => {
        if (typeofEvent == 'SOURCE') {
          this.sourceList = response['data'].searchResult;
        } else {
          this.destinationList = response['data'].searchResult;
          console.log("this.destinationList", this.destinationList)
        }

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
        this.rdcGateSecurityTransitTrucks = response['data'].truckReportsData;
        this.rdcGateSecurityTransitTrucks = [...this.rdcGateSecurityTransitTrucks]
        this.rdcpage.limit = response['data'].pageLength;
        this.rdcpage.count = response['data'].total;
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
    if (this.rdcGateSecurityTransitTrucks.length > 0) {
      this.isLoading = true;
      let data = {
        'destination': this.destination,
        'source': this.source,
        'shipmentID': this.shipmentId,
        'transporter': this.transporter,
        'truckNumber': this.truckNumber,
        'truckType': this.truckType,
        'reportLocation': this.reportLocation,
        'type': "INTRANSIT",
        'pageLength': this.rdcpage.count,
      }
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
              "Shipment ID": excelRawData[i].shipmentId,
              "Dest Description": excelRawData[i].destDis,
              "Truck Type": excelRawData[i].truckType,
              "Transporter": excelRawData[i].transporter,
              "Source Gate Out": this.service.customDateTimeFormat(excelRawData[i].gateOutDate),
              "ETA": this.service.customDateTimeFormat(excelRawData[i].etaDest),
              // "Rejection": excelRawData[i].rejectionStatus,
              "Driver Name": excelRawData[i].driverName,
              "Driver Number": excelRawData[i].driverContact,
              // "Driver License":excelRawData[i].driverLicense,
              "Status": excelRawData[i].status
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'intransitTrucks.xlsx');
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
          // $("#loadslipsModal").modal('show');
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
    // this.router.navigateByUrl('/load-slip-qty-view/' + loadSlipId);
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


}
