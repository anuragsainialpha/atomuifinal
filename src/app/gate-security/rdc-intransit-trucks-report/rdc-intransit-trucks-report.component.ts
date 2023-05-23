import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { constants, rdcReportTruckStatus } from 'src/app/constants';
import * as XLSX from 'xlsx';
import { DatatableComponent } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-rdc-intransit-trucks-report',
  templateUrl: './rdc-intransit-trucks-report.component.html',
  styleUrls: ['./rdc-intransit-trucks-report.component.scss']
})
export class RdcIntransitTrucksReportComponent implements OnInit {
  userRoles: any;
  isLoading: boolean;
  isShow: boolean = true;
  rdcGateSecurityTransitTrucks = [];
  rdcpage = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 100
  }
  shipmentId:any;
  editing: {};
  destination: any;
  destinationDesc:any;
  descriptionList = [];
  indentId: any;
  transporter: any;
  truckNumber: any;
  truckType: any;
  destinationList: any[];
  transporterList: any[];
  source: any;
  sourceList = [];
  title: string;
  reportLocation: string;
  truckList = [];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  isIntransitTruck: boolean = true;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService
  ) {
    this.userRoles = constants.roles;
    this.reportLocation = localStorage.getItem("sourceID");
    this.isLoading = true;
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
    //Activation of Tabs
    if (this.service.checkRole() == this.userRoles.rdc_PLN || (this.service.checkRole() == this.userRoles.JIT_OPERATION)) {
      localStorage.setItem("userMenu", "RDC-GAT-REPORT");
    } else if ((this.service.checkRole() == this.userRoles.gateSecurity) || (this.service.checkRole() == this.userRoles.rdc_GAT) || (this.service.checkRole() == this.userRoles.JIT_GATE_SECURITY)) {
      localStorage.setItem("userMenu", "GAT-INTRASIT");
    }
    else {
      localStorage.setItem("userMenu", "fgs-truck-status");
    }
    //show the title based on the Role 
    if (this.service.checkRole() == this.userRoles.gateSecurity) {
      this.title = "FGS > Report Truck >In-Transit Truck";
    } else if ((this.service.checkRole() == this.userRoles.JIT_GATE_SECURITY) || (this.service.checkRole() == this.userRoles.JIT_OPERATION)) {
      this.title = " FGS-JIT > Report Trucks > In-Transit Truck";
    } else if ((this.service.checkRole() == this.userRoles.fgsOperations2) || (this.service.checkRole() == this.userRoles.fgsOperations1)
      || (this.service.checkRole() == this.userRoles.fgsOperations3) || (this.service.checkRole() == this.userRoles.fgsOperations4)) {
      this.title = "FGS > Report Trucks > In-Transit Truck";
    } else {
      this.title = " Receiving RDC > Report Trucks > In-Transit Truck";
    }
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


  showFilter() {
    this.isShow = !this.isShow;
  }
  rdcGatesecurityDatetablePageData(data) {

  }
  //report truck 
  reportTruck(data) {
    this.isLoading = true;
    let postData = {
      truckNumber: data.truckNumber,
      status: rdcReportTruckStatus.reported,
      destDis: data.destDis,
      gateControlCode: data.gateControlCode,
    };
    this.service.post_service(ApiserviceService.apisList.reportIntransitTruck, postData).subscribe(response => {
      if (response['statusCode'] == 200) {
        let modifibleIndex = this.rdcGateSecurityTransitTrucks.findIndex(respData => respData.truckNumber == postData.truckNumber);
        // this.rdcGateSecurityTransitTrucks[modifibleIndex]=response['data'];
        if (modifibleIndex != -1) {
          // this.rdcGateSecurityTransitTrucks.splice(modifibleIndex, 1);
          this.rdcGateSecurityTransitTrucks[modifibleIndex] = response['data'];
          this.rdcGateSecurityTransitTrucks = [... this.rdcGateSecurityTransitTrucks];
        }

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


   //set value destination
setDestination(value){
  //  this.destinationDesc = value;
  this.destination = value;
  }

  //set value to destination description
  setDestDescription(value){
    this.destinationDesc = value; 
  }

  getUserDestinationList(event){
    this.destination = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
    this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.getDestinationDescriptionDataList+event.target.value).subscribe(response => {
        if(response['data']){
          this.descriptionList = response['data'].searchResult;
        }
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }




  //event Trigger
  eventTrigger(data, typeofevent) {
    this.isLoading = true;
    let postData = {
      truckNumber: data.truckNumber,
      status: typeofevent,
      gateControlCode: data.gateControlCode,
      destDis: data.destDis
    };
    this.service.post_service(ApiserviceService.apisList.reportIntransitTruck, postData).subscribe(response => {
      if (response['statusCode'] == 200) {
        let replacebleIndex = this.rdcGateSecurityTransitTrucks.findIndex(rawData => rawData.truckNumber == data.truckNumber);
        this.rdcGateSecurityTransitTrucks[replacebleIndex] = response['data'];
        this.rdcGateSecurityTransitTrucks = [...this.rdcGateSecurityTransitTrucks]
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

  //get filter destination result
  //isIntransitTruck is used to fetch the loggedIn plant Loc in destination LOVs.
  //isIntransitTruck is sent as TRUE in destination search and FALSE in source search.
  getfilterDestination(event, typeofFIlte, isIntransitTruck) {
    this.destinationDesc = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue + '&isIntransitTruck='+isIntransitTruck).subscribe(response => {
        if (typeofFIlte == 'DESTINATION') {
          this.destinationList = response['data'].searchResult;
          console.log("this.destinationList", this.destinationList)
        } else {
          this.sourceList = response['data'].searchResult;
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


  //clear data
  clearData() {
    this.destination = '';
    this.indentId = "";
    // this.statusType = "";
    this.shipmentId = "";
    this.destinationDesc = "";
    this.descriptionList = [];
    this.transporter = "";
    this.truckNumber = "";
    this.truckType = [];
    this.destinationList = [];
    this.transporterList = [];
    this.source = '';
  }

  onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }

  //refersh data 
  refreshData() {
    this.clearData();
    // this.destination = '';
    // this.indentId = "";
    // this.transporter = "";
    // this.truckNumber = "";
    // this.truckType = "";
    // this.destinationList = [];
    // this.transporterList = [];
    // this.source = '';
    this.table.offset=0;
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
    this.table.offset=0;
    this.isLoading = true;
    let data = {
      destination: this.destination,
      shipmentID: this.shipmentId,
      transporter: this.transporter,
      truckNumber: this.truckNumber,
      truckType: this.truckType,
      source: this.source,
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


  //export excel data
  export(): void {
    if (this.rdcGateSecurityTransitTrucks.length > 0) {
      this.isLoading = true;
      let data = {
        'destination': this.destination,
        'shipmentID': this.shipmentId,
        'transporter': this.transporter,
        'truckNumber': this.truckNumber,
        'truckType': this.truckType,
        'source': this.source,
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
              "Shipment Id": excelRawData[i].shipmentId,
              "Dest Description": excelRawData[i].destDis,
              "Truck Type": excelRawData[i].truckType,
              "Transporter": excelRawData[i].transporter,
              "Source Report Date": this.service.customDateTimeFormat(excelRawData[i].reportedDate),
              "Source Gate Out": this.service.customDateTimeFormat(excelRawData[i].gateOutDate),
              "ETA": this.service.customDateTimeFormat(excelRawData[i].etaDest),
              // "Rejection": excelRawData[i].rejectionStatus,
              "Driver Name":excelRawData[i].driverName,
              "Driver Number":excelRawData[i].driverContact,
              // "Driver License":excelRawData[i].driverLicense,
              "Status": excelRawData[i].status
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'intransitTrucksReport.xlsx');
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
}

