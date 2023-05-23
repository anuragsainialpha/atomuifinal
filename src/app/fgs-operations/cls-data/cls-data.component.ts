import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ToastrService } from 'ngx-toastr';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MatDialog, MatDatepickerInputEvent } from '@angular/material';
import * as XLSX from 'xlsx';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/public/date.adapters';
import { HelperServiceService } from 'src/app/services/helper-service/helper-service.service';
import { constants } from 'src/app/constants';
declare var $: any;

@Component({
  selector: 'app-cls-data',
  templateUrl: './cls-data.component.html',
  styleUrls: ['./cls-data.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ],
})
export class ClsDataComponent implements OnInit, DoCheck {

  page = {
    limit: 100,
    count: 0,
    offset: 0,
    pageSize: 50
  };
  clsDataList = [];
  isLoading: boolean = false;
  currentDate = this.helperService.getTodayDate();
  currentDateAsString = this.helperService.getTodayDateASString();
  roles: { "planner1": string; "plannner2": string; "planner3": string; "transporter": string; "fgsOperations1": string; "fgsOperations2": string; "fgsOperations4": string; "gateSecurity": string; "rdc_PLN": string; "rdc_GAT": string; "JIT_OPERATION": string; "JIT_GATE_SECURITY": string; "EXPORT_CHA": string; "ABU_PLN": string; "L1MGR": string; "L2MGR": string; "FPL":string };

  shipmentId = '';
  sourceLoc = '';
  fromInsertDate = '';
  toInsertDate = '';
  fromShipmentOnboardDate = '';
  toShipmentOnboardDate = '';
  fromSapInvDate = '';
  toSapInvDate = '';
  fromGateOutDate = '';
  toGateOutDate = '';
  freezeLeftValue: boolean = true;

  @ViewChild(DatatableComponent) table: DatatableComponent;
  sourceCode: string;
  sourceList: any[];
  constructor(public service: ApiserviceService,
    private toastr: ToastrService,
    private helperService: HelperServiceService) { }
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
    localStorage.setItem("userMenu", "fgs-truck-status");
    this.roles = constants.roles;
    if (this.isSoureDisable()) {
      this.sourceCode = localStorage.getItem("sourceID");
    }
    let data = {};
    this.getClsData(data);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    console.log("------>To Date", this.toShipmentOnboardDate);
    let checkToDate: any = this.toShipmentOnboardDate;
    console.log("Check--->1", checkToDate);
    if (this.toShipmentOnboardDate == this.currentDateAsString) {
      // on page load we are defaluting the  to date with string. Comparing string with date is not possible
      // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
      checkToDate = new Date();
      console.log("Check--->2", checkToDate);

    }
    /* Checking if selected from date greater than to date.
    Clearing the toDate field when from date greater than to date */
    if (event.target.value) {
      if (this.toShipmentOnboardDate && (this.fromShipmentOnboardDate > checkToDate)) {
        this.toShipmentOnboardDate = '';
      }
    }
    // this.toDate = '';
  }

  addEventInsertDate(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    console.log("------>To Date", this.toInsertDate);
    let checkToDate: any = this.toInsertDate;
    console.log("Check--->1", checkToDate);
    if (this.toInsertDate == this.currentDateAsString) {
      // on page load we are defaluting the  to date with string. Comparing string with date is not possible
      // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
      checkToDate = new Date();
      console.log("Check--->2", checkToDate);

    }
    /* Checking if selected from date greater than to date.
    Clearing the toDate field when from date greater than to date */
    if (event.target.value) {
      if (this.toInsertDate && (this.fromInsertDate > checkToDate)) {
        this.toInsertDate = '';
      }
    }
    // this.toDate = '';
  }

  addEventSapInvDate(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    console.log("------>To Date", this.toSapInvDate);
    let checkToDate: any = this.toSapInvDate;
    console.log("Check--->1", checkToDate);
    if (this.toSapInvDate == this.currentDateAsString) {
      // on page load we are defaluting the  to date with string. Comparing string with date is not possible
      // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
      checkToDate = new Date();
      console.log("Check--->2", checkToDate);

    }
    /* Checking if selected from date greater than to date.
    Clearing the toDate field when from date greater than to date */
    if (event.target.value) {
      if (this.toSapInvDate && (this.fromSapInvDate > checkToDate)) {
        this.toSapInvDate = '';
      }
    }
    // this.toDate = '';
  }

  addEventGateOut(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value)
    console.log("------>To Date", this.toGateOutDate);
    let checkToDate: any = this.toGateOutDate;
    console.log("Check--->1", checkToDate);
    if (this.toGateOutDate == this.currentDateAsString) {
      // on page load we are defaluting the  to date with string. Comparing string with date is not possible
      // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
      checkToDate = new Date();
      console.log("Check--->2", checkToDate);

    }
    /* Checking if selected from date greater than to date.
    Clearing the toDate field when from date greater than to date */
    if (event.target.value) {
      if (this.toGateOutDate && (this.fromGateOutDate > checkToDate)) {
        this.toGateOutDate = '';
      }
    }
    // this.toDate = '';
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

  isSoureDisable() {
    // source Not disable for DP_REP, L1_MGR, L2_MGR role & External warehouses, if roles not belongs to DP_REP & External wareHouse we are returning boolean value which makes  disable 
    if ((this.service.checkRole() !== this.roles.planner3 && this.service.checkRole() !== this.roles.L1MGR && this.service.checkRole() !== this.roles.L2MGR) && this.service.checkRole() !== this.roles.FPL) {
      return true
    } else {
      return false
    }
  }
  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }

  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    let offset = pageInfo.offset;
    let bodyData = {
      index: offset,
      shipmentId: this.shipmentId,
      sourceLoc: this.sourceCode,
      fromInsertDate: this.fromInsertDate ? moment(new Date(this.fromInsertDate)).format("DD/MM/YYYY") : null,
      toInsertDate: this.toInsertDate ? moment(new Date(this.toInsertDate)).format("DD/MM/YYYY") : null,
      fromShipmentOnboardDate: this.fromShipmentOnboardDate ? moment(new Date(this.fromShipmentOnboardDate)).format("DD/MM/YYYY") : null,
      toShipmentOnboardDate: this.toShipmentOnboardDate ? moment(new Date(this.toShipmentOnboardDate)).format("DD/MM/YYYY") : null,
      fromGateOutDate: this.fromGateOutDate ? moment(new Date(this.fromGateOutDate)).format("DD/MM/YYYY") : null,
      toGateOutDate: this.toGateOutDate ? moment(new Date(this.toGateOutDate)).format("DD/MM/YYYY") : null,
      fromSapInvDate: this.fromSapInvDate ? moment(new Date(this.fromSapInvDate)).format("DD/MM/YYYY") : null,
      toSapInvDate: this.toSapInvDate ? moment(new Date(this.toSapInvDate)).format("DD/MM/YYYY") : null,

    }
    this.getClsData(bodyData);
  }

  // clear the data what the user entered
  clearAll() {
    this.shipmentId = '';
    this.sourceCode = '';
    this.fromGateOutDate = '';
    this.toGateOutDate = '';
    this.fromInsertDate = '';
    this.toInsertDate = '';
    this.fromShipmentOnboardDate = '';
    this.toShipmentOnboardDate = '';
    this.fromSapInvDate = '';
    this.toSapInvDate = ''
      ;
    // For DP_REP role user can change the source location but other user it can't changes
    // That why we giving default selection
    if (this.isSoureDisable()) {
      this.sourceCode = localStorage.getItem("sourceID");
    }
  }

  // refresh page data
  refreshData() {
    this.table.offset = 0;
    this.page.offset = 0;
    this.clearAll();
    let bodyData = {};
    this.getClsData(bodyData);
  }

  clsSearch() {
    this.table.offset = 0;
    let bodyData = {
      shipmentId: this.shipmentId,
      sourceLoc: this.sourceCode,
      fromInsertDate: this.fromInsertDate ? moment(new Date(this.fromInsertDate)).format("DD/MM/YYYY") : null,
      toInsertDate: this.toInsertDate ? moment(new Date(this.toInsertDate)).format("DD/MM/YYYY") : null,
      fromShipmentOnboardDate: this.fromShipmentOnboardDate ? moment(new Date(this.fromShipmentOnboardDate)).format("DD/MM/YYYY") : null,
      toShipmentOnboardDate: this.toShipmentOnboardDate ? moment(new Date(this.toShipmentOnboardDate)).format("DD/MM/YYYY") : null,
      fromGateOutDate: this.fromGateOutDate ? moment(new Date(this.fromGateOutDate)).format("DD/MM/YYYY") : null,
      toGateOutDate: this.toGateOutDate ? moment(new Date(this.toGateOutDate)).format("DD/MM/YYYY") : null,
      fromSapInvDate: this.fromSapInvDate ? moment(new Date(this.fromSapInvDate)).format("DD/MM/YYYY") : null,
      toSapInvDate: this.toSapInvDate ? moment(new Date(this.toSapInvDate)).format("DD/MM/YYYY") : null,

    }
    let insertdate = false;
    let gateOutDate = false;
    let sipmentDate = false;
    let sapInvDate = false;

    if (this.fromShipmentOnboardDate != '' && this.fromShipmentOnboardDate != null) {
      if (this.toShipmentOnboardDate != '' && this.toShipmentOnboardDate != null) {
        sipmentDate = true;
      } else {
        sipmentDate = false;
        this.toastr.error("Please select To Shipment On-Board Date", "!Error")
      }
    } else {
      sipmentDate = true;
    }
    if (this.fromGateOutDate != '' && this.fromGateOutDate != null) {
      if (this.toGateOutDate != '' && this.toGateOutDate != null) {
        gateOutDate = true;
      } else {
        gateOutDate = false;
        this.toastr.error("Please select To Gate Out Date", "!Error")
      }
    } else {
      gateOutDate = true;
    }
    if (this.fromInsertDate != '' && this.fromInsertDate != null) {
      if (this.toInsertDate != '' && this.toInsertDate != null) {
        insertdate = true;
      } else {
        insertdate = false;
        this.toastr.error("Please select To Insert Date", "!Error")
      }
    } else {
      insertdate = true;
    }
    if (this.fromSapInvDate != '' && this.fromSapInvDate != null) {
      if (this.toSapInvDate != '' && this.toSapInvDate != null) {
        sapInvDate = true;
      } else {
        sapInvDate = false;
        this.toastr.error("Please select To Shipment On-Board Date", "!Error")
      }
    } else {
      sapInvDate = true;
    }

    if (insertdate && gateOutDate && sipmentDate && sapInvDate) {
      this.getClsData(bodyData);
    }
  }
  getClsData(data) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getClsData, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.clsDataList = response['data'].content;
        this.page.count = response['data'].totalElements;
        this.isLoading = false;
      } else {
        this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
        this.isLoading = false;
      }

    }, err => {
      this.toastr.error(err ? err : 'Something went wrong...', 'Error!');
      this.isLoading = false;
    })
  }

  //export excel data
  export(): void {
    if (this.clsDataList.length > 0) {
      this.isLoading = true;

      let data = {
        shipmentId: this.shipmentId,
        sourceLoc: this.sourceCode,
        fromInsertDate: this.fromInsertDate ? moment(new Date(this.fromInsertDate)).format("DD/MM/YYYY") : null,
        toInsertDate: this.toInsertDate ? moment(new Date(this.toInsertDate)).format("DD/MM/YYYY") : null,
        fromShipmentOnboardDate: this.fromShipmentOnboardDate ? moment(new Date(this.fromShipmentOnboardDate)).format("DD/MM/YYYY") : null,
        toShipmentOnboardDate: this.toShipmentOnboardDate ? moment(new Date(this.toShipmentOnboardDate)).format("DD/MM/YYYY") : null,
        fromGateOutDate: this.fromGateOutDate ? moment(new Date(this.fromGateOutDate)).format("DD/MM/YYYY") : null,
        toGateOutDate: this.toGateOutDate ? moment(new Date(this.toGateOutDate)).format("DD/MM/YYYY") : null,
        fromSapInvDate: this.fromSapInvDate ? moment(new Date(this.fromSapInvDate)).format("DD/MM/YYYY") : null,
        toSapInvDate: this.toSapInvDate ? moment(new Date(this.toSapInvDate)).format("DD/MM/YYYY") : null,

        pageLength: this.page.count,
      }
      // this.service.post_service_DownLoadExcel(ApiserviceService.apisList.planinfo, data).subscribe(response => {
      this.service.post_service(ApiserviceService.apisList.getClsData, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          // Uncomment when export excel is generated in backend
          // var blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          //   var filename = 'viewDispatchPlans.xlsx';
          //   const link = window.URL.createObjectURL(blob);
          //   const a = document.createElement('a');
          //   document.body.appendChild(a);
          //   a.setAttribute('style', 'display: none');
          //   a.href = link;
          //   a.download = filename
          //   a.click();
          //   window.URL.revokeObjectURL(link);
          //   a.remove();

          let newViewPlanData = response['data'].content;
          let excelRawData = newViewPlanData;
          let newExcelData = []; let data;
          for (let i = 0; i < excelRawData.length; i++) {

            // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
            // For FGS : The Avail TTE and Truck count should be based on Available Qty
            data = {
              "Source Loc": excelRawData[i].sourceLoc,
              "Dest Loc": excelRawData[i].destLoc,
              "Shipment Id": excelRawData[i].shipmentId,
              "Loadslip Id": excelRawData[i].loadslipId,
              "Gate Out Date": excelRawData[i].gateouDateStr ? this.service.customDateTimeFormat(excelRawData[i].gateouDateStr) : '',
              "Container Num": excelRawData[i].containerNum,
              "STO/SO Num": excelRawData[i].stosoNum,
              "Delivery": excelRawData[i].delivery,
              "SAP Invoice": excelRawData[i].sapInvoice,
              "SAP Inv Date": excelRawData[i].sapInvoiceDateStr ? this.service.customDateFormat(excelRawData[i].sapInvoiceDateStr) : '',
              "Custom Inv Num": excelRawData[i].customInvNumber,
              "PI No": excelRawData[i].piNo,
              "Customer Name": excelRawData[i].customerName,
              "Inco Term": excelRawData[i].incoterm,
              "POL": excelRawData[i].pol,
              "POD": excelRawData[i].pod,
              "Billing Party": excelRawData[i].billingParty,
              "Shipping Line": excelRawData[i].shippingLine,
              "Cont Pick Date": excelRawData[i].contPickDateStr ? this.service.customDateFormat(excelRawData[i].contPickDateStr) : '',
              "Stuffing Date": excelRawData[i].stuffingDateStr ? this.service.customDateFormat(excelRawData[i].stuffingDateStr) : '',
              "Booking Num": excelRawData[i].bookingNum,
              "Pre Inv No": excelRawData[i].preInvNo,
              "Post Inv No": excelRawData[i].postInvNo,
              "CHA": excelRawData[i].cha,
              "Planned Vessel": excelRawData[i].plannedVessel,
              "Vessel Depart Pol Date": excelRawData[i].vesselDepartPolDateStr ? this.service.customDateFormat(excelRawData[i].vesselDepartPolDateStr) : '',
              "Shipping Bill": excelRawData[i].shippinBill,
              "Shipping Bill Date": excelRawData[i].shippingBillDateStr ? this.service.customDateFormat(excelRawData[i].shippingBillDateStr) : '',
              "Gate In Date": excelRawData[i].gateInDateStr ? this.service.customDateFormat(excelRawData[i].gateInDateStr) : '',
              "Customs Exam Date": excelRawData[i].customsExamDateStr ? this.service.customDateFormat(excelRawData[i].customsExamDateStr) : '',
              "Gate Out CFS Date": excelRawData[i].gateoutDateCfsStr ? this.service.customDateFormat(excelRawData[i].gateoutDateCfsStr) : '',
              "Gate In Port Date": excelRawData[i].gateinDatePortStr ? this.service.customDateFormat(excelRawData[i].gateinDatePortStr) : '',
              "Actual Vessel": excelRawData[i].actualVessel,
              "Shipped On-Board Date": excelRawData[i].shippedOnboardDateStr ? this.service.customDateFormat(excelRawData[i].shippedOnboardDateStr) : '',
              "Export Remark": excelRawData[i].eportRemark,
              "Is Sync OTM": excelRawData[i].isSyncOtm,
              "COFD": excelRawData[i].cofd,
              "ETA POD": excelRawData[i].etaPodStr ? this.service.customDateFormat(excelRawData[i].etaPodStr) : '',
              "Forwarder": excelRawData[i].forwarder,
              "LEO Date": excelRawData[i].leoDateStr ? this.service.customDateFormat(excelRawData[i].leoDateStr) : '',
              "INV Amount": excelRawData[i].invAmount,
              "Payment Terms": excelRawData[i].paymentTerms,
              "Status": excelRawData[i].status,
              "Insert Date": excelRawData[i].insertDateStr ? this.service.customDateTimeFormat(excelRawData[i].insertDateStr) : '',
              
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'ClsData.xlsx');
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
