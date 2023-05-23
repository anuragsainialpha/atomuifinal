import { ApiserviceService } from './../../services/api/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { exportShippingModel } from './shipment-export-view.model';
@Component({
  selector: 'app-shipment-export-view',
  templateUrl: './shipment-export-view.component.html',
  styleUrls: []
})

export class ShipmentExportViewComponent implements OnInit {

  public model = new exportShippingModel();
  isLoading: boolean = true;
  shipmentexportdata = [];
  loadslipList = [];
  commentHeader: String;
  commentMsg: string;
  IsShow: boolean = true;
  page = {
    limit: 100,
    count: 0,
    offset: 0,
    orderBy: "myColumn1",
    orderDir: "desc",
    pageSize: 100
  };
  sourceList: any[];

  constructor(
    private service: ApiserviceService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    console.log(this.model);

    // activation of tab
    localStorage.setItem('userMenu', 'shipment-export-view');
    this.refreshData();
  }
  refreshData() {
    this.clearData();
    this.getshipmentExportData(this.model);
  }

  //Show Filter 
  showFilter() {
    this.IsShow = !this.IsShow
  }
  onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }

  getshipmentExportData(data) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getExportShipping, data).subscribe(response => {
      if (response['statusCode'] == '200') {
        let repsonseData = response['data'];
        this.shipmentexportdata = repsonseData.ExportShipmentDto;
        this.shipmentexportdata = [...this.shipmentexportdata];
        this.page.count = repsonseData.total;
        this.page.limit = repsonseData.pageLength;
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
      }
    },
      (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
  }


  serverSidePagination(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    let data = { ...this.model };
    data['pageLength'] = pageInfo.count;
    // data["index"] = 0;
    this.getshipmentExportData(data)
  }


  clearData() {
    this.sourceList = [];
    this.model = new exportShippingModel();
  }
  exportShippingFilter() {
    this.getshipmentExportData(this.model)
  }
  //get filter destination result
  getfilterDestination(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.sourceList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        this.sourceList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  //export excel data
  export(): void {
    if (this.shipmentexportdata.length > 0) {
      this.isLoading = true;
      let data = { ...this.model };
      data['pageLength'] = this.page.count;
      this.service.post_service(ApiserviceService.apisList.getExportShipping, data).subscribe(response => {
        if (response['statusCode'] == '200') {
          let repsonseData = response['data'];
          let newViewPlanData = repsonseData.ExportShipmentDto;
          console.log("newViewPlanData", newViewPlanData);
          let excelRawData = newViewPlanData;
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            let data = {
              "Shipment Id": excelRawData[i].shipmentId,
              "Source": excelRawData[i].sourceLoc,
              "PI No.": excelRawData[i].piNum,
              "Customer Name": excelRawData[i].customerName,
              "Pre Inv No.": excelRawData[i].preInvNum,
              "Term of Delivery": excelRawData[i].incoTerm,
              "Term of Payment": excelRawData[i].paymetTerms,
              "POL": excelRawData[i].pol,
              "POD": excelRawData[i].pod,
              "COFD": excelRawData[i].cofd,
              "Freight Forwarder": excelRawData[i].forwarder,
              "Billing Party": excelRawData[i].billingParty,
              "Shipping Line": excelRawData[i].shippingLine,
              "Container Num": excelRawData[i].containerNum,
              "Container Pick up Date": this.service.customDateFormat(excelRawData[i].countPicDate),
              "Stuffing/ Billing Date": this.service.customDateFormat(excelRawData[i].stuffingDate),
              "Booking Num": excelRawData[i].bookingNum,
              "Post Inv No.": excelRawData[i].postInvNum,
              "Post Inv No. (SAP Invoice)": excelRawData[i].sapInvoice,
              "Post Inv Amount": excelRawData[i].invAmount,
              "CHA": excelRawData[i].cha,
              "Planned Vessel Name": excelRawData[i].plannedVessel,
              "Planned vsl ETD Loadport": this.service.customDateFormat(excelRawData[i].vesslDepartPolDate),
              "Shipping Bill No.": excelRawData[i].shippingBill,
              "Shipping Bill Date": this.service.customDateFormat(excelRawData[i].shippingBillDate),
              "Container Placed at CFS/Buffer": this.service.customDateFormat(excelRawData[i].gateInDateCfs),
              "Custom Exams Date": this.service.customDateFormat(excelRawData[i].customsExamDate),
              "LEO Date": this.service.customDateFormat(excelRawData[i].leoDate),
              "Container Moved to Port": this.service.customDateFormat(excelRawData[i].gateOutDateCgs),
              "Container Gated in": this.service.customDateFormat(excelRawData[i].gateInDatePort),
              "Actual Vessel Name": excelRawData[i].actualVessel,
              "Actual Vessel SOB/ ETD Date": this.service.customDateFormat(excelRawData[i].shipmentOnBordDate),
              "ETA": this.service.customDateFormat(excelRawData[i].etaPod),
              "Remarks": excelRawData[i].exportRemarks,
              "Insert User": excelRawData[i].insertUser,
              "Insert Date": this.service.customDateTimeFormat(excelRawData[i].insertDate),
              "Update User": excelRawData[i].updateUser,
              "Update Date": this.service.customDateTimeFormat(excelRawData[i].updateDate),
              "Is Sync OTM": excelRawData[i].isSyncOtm
            };
            newExcelData.push(data);
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, "data"); // add the worksheet to the book
          XLSX.writeFile(workBook, "ShippingExport.xlsx");
          this.isLoading = false;
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        }
      },
        (err) => {
          this.toastr.error(err ? err : "Something went wrong..", "Error!");
          this.isLoading = false;
        })
    } else {
      this.toastr.warning("No data to Export Excel", "! Warning");
    }

  }

}

