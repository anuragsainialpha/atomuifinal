import { constants } from 'src/app/constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment'
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/public/date.adapters';
import * as XLSX from 'xlsx';
import { DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { MomentDateTimeAdapter } from 'ng-pick-datetime-moment';
import { DatatableComponent } from '@swimlane/ngx-datatable';
export const MY_CUSTOM_FORMATS = {
  datePickerInput: 'DD/MM/YYYY',
  monthYearLabel: 'MMM YYYY',
  timePickerInput: 'hh:mm A',
  parseInput: 'DD/MM/YYYY hh:mm A',
  fullPickerInput: 'DD/MM/YYYY hh:mm A',
  dateA11yLabel: 'L',
  monthYearA11yLabel: 'MM YYYY',
  };
@Component({
  selector: 'app-export-trucking',
  templateUrl: './export-trucking.component.html',
  styles: [],
  providers: [{ provide: DateAdapter, useClass: AppDateAdapter },
  { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  { provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },
  { provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS },
  { provide: OWL_DATE_TIME_LOCALE, useValue: 'en-nz' }]
})
export class ExportTruckingComponent implements OnInit {
  index: number;

  isLoading: boolean = false;
  destinationList = [];
  IsShow: boolean = true;
  truckData = [];
  driverData = [];
  isIntransitTruck:boolean = true;
  // startDate = null;
  // endDate = null;
  // indentId = '';

  // objDriverData = {
  //   indentId: '',
  //   truckNumber: '',
  //   truckType: '',
  //   driver: '',
  //   mobile: '',
  //   licenseNumber: '',
  //   rcWeight: '',
  //   length: '',
  //   width: '',
  //   height: '',
  //   isGPS: true,
  //   gpsProvider: ''
  // };
  gateSecurityTransportReport: any;
  // minDate = new Date();
  IsAssignDriver: boolean = false;
  isClicked: any;
  editing = {};
  reportedTrucks: any[];
  IsReportedIndentsShow: boolean;
  numberofManualEntries: number;
  // toDate: any;
  exportsTruckingList = [];
  sourceLoc: string = null;
  containerNum: string = null;
  shipmentId: string = null;
  destination: string = null;
  destinationDesc:any;
  descriptionList = [];
  truckType=[];
  roles: any;
  truckList = [];
  ROLE_DP_REP:string;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  sourceList: any;
  source: any;
  constructor(public service: ApiserviceService, private toastr: ToastrService) { }

  ngOnInit() {
    this.roles = constants.roles;
    this.ROLE_DP_REP=this.service.checkRole();
    if ((this.service.checkRole() == this.roles.fgsOperations1) || (this.service.checkRole() == this.roles.fgsOperations2) ||
      (this.service.checkRole() == this.roles.fgsOperations3) || (this.service.checkRole() == this.roles.fgsOperations4) || 
      (this.service.checkRole() == this.roles.JIT_OPERATION) || (this.service.checkRole() == this.roles.planner3) ||
      (this.service.checkRole() == this.roles.L1MGR) || (this.service.checkRole() == this.roles.L2MGR))  {
      localStorage.setItem("userMenu", "fgs-truck-status");
    }else {
      localStorage.setItem("userMenu", "export-trucking");
    }

    this.getExportTruckingRecord();

    // for getting truck type master
    this.getTruckTypeMasterData();

  }
  onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }

  //for getting export trucking data from server 
  getExportTruckingRecord() {
    let body = {};
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.exportTruckers, body).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.exportsTruckingList = response['data'];
        this.exportsTruckingList = [...this.exportsTruckingList];
        this.isLoading = false;
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        this.isLoading = false;
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    });
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

  // for refresh export truckers
  refreshExportTruckersData() {
    this.table.offset=0;
    this.clearAll();
    this.getExportTruckingRecord();
  }

  //for getting row level value
  updateValue(event, cell, rowIndex) {
    let formatedDateTime=moment(event.value).format();
    this.exportsTruckingList[rowIndex][cell] = formatedDateTime;
    this.exportsTruckingList = [...this.exportsTruckingList];
  }
  //update export  truckers 
  updateExportTruckers(row) {
    this.isLoading = true;
    let data = {
      'gateInDateCfs': row.gateInDateCfs,
      'gateOutDateCfs': row.gateOutDateCfs,
      'gateInDatePort': row.gateInDatePort,
      'shippedOnBoard': row.shippedOnBoard,
      'vesselDepartPol': row.vesselDepartPol,
      'vesselArrivePod': row.vesselArrivePod,
      'shipmentId': row.shipmentId
    }
    this.service.post_service(ApiserviceService.apisList.updateExportTruckers, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        // let updatebleIndex = this.exportsTruckingList.findIndex(resp => resp.shipmentId == row.shipmentId);
        // this.exportsTruckingList[updatebleIndex] = response['data'];
        // this.exportsTruckingList = [...this.exportsTruckingList];
        this.toastr.success(response['message'])
        this.editing = {};
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }


  showFilter() {
    this.IsShow = !this.IsShow;
  }


  filterExportTruckers() {
    this.isLoading = true;
    this.table.offset=0;
    let data = {
      'shipmentId': this.shipmentId,
      'destLoc': this.destination,
      'truckType': this.truckType,
      'containerNum': this.containerNum,
      'sourceLoc': this.source
    }
    this.service.post_service(ApiserviceService.apisList.exportTruckers, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.exportsTruckingList = response['data'];
        this.exportsTruckingList = [...this.exportsTruckingList];
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }
  //get filter destination result
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

  //clear All  the Data
  clearAll() {
    this.shipmentId = '';
    this.destination = '';
    this.destinationDesc = '';
    this.descriptionList = [];
    this.destinationList = [];
    this.truckType =[];
    this.containerNum = '';
    this.sourceLoc = '';
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

  export() {
    if (this.exportsTruckingList.length > 0) {
      this.isLoading = true;
      let data = {
        'shipmentId': this.shipmentId,
        'destLoc': this.destination,
        'truckType': this.truckType,
        'containerNum': this.containerNum,
        'sourceLoc': this.sourceLoc,
      }
      this.service.post_service(ApiserviceService.apisList.exportTruckers, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          let newExportTruckersData = response['data'];
          let excelRawData = newExportTruckersData;
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            let data = {
              'Container Number': excelRawData[i].containerNum,
              'Shipment Id': excelRawData[i].shipmentId,
              'Truck Number': excelRawData[i].truckNum,
              'Container Type': excelRawData[i].truckType,
              'Source': excelRawData[i].containerNum,
              'Destination': excelRawData[i].destLoc,
              "Dest Description": excelRawData[i].destDis,
              'Report Date': excelRawData[i].reportingDate ? moment(new Date(excelRawData[i].reportingDate)).format('DD-MMM-YYYY') : "N/A",
              'Report Location': excelRawData[i].reportLocation,
              'Gate In': excelRawData[i].gateInDate ? moment(new Date(excelRawData[i].gateInDate)).format('DD-MMM-YYYY') : "N/A",
              'Gate Out': excelRawData[i].gateOutDate ? moment(new Date(excelRawData[i].gateOutDate)).format('DD-MMM-YYYY') : "N/A",
              'Gate In CFS': excelRawData[i].gateInDateCfs ? moment(new Date(excelRawData[i].gateInDateCfs)).format('DD-MMM-YYYY') : "N/A",
              'Gate Out CFS': excelRawData[i].gateOutDateCfs ? moment(new Date(excelRawData[i].gateOutDateCfs)).format('DD-MMM-YYYY') : "N/A",
              'Gate In Port': excelRawData[i].gateInDatePort ? moment(new Date(excelRawData[i].gateInDatePort)).format('DD-MMM-YYYY') : "N/A",
              'Shipped On Board': excelRawData[i].shippedOnBoard ? moment(new Date(excelRawData[i].shippedOnBoard)).format('DD-MMM-YYYY') : "N/A",
              'Vessel Depart at POL': excelRawData[i].vesselDepartPol ? moment(new Date(excelRawData[i].vesselDepartPol)).format('DD-MMM-YYYY') : "N/A",
              'Vessel Arrive at POD': excelRawData[i].vesselArrivePod ? moment(new Date(excelRawData[i].vesselArrivePod)).format('DD-MMM-YYYY') : "N/A",
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'viewExportTruckersData.xlsx');
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
}


