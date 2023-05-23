import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { NgForm } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;

@Component({
  selector: 'app-order-type-lookup',
  templateUrl: './order-type-lookup.component.html',
  styleUrls: ['./order-type-lookup.component.scss']
})
export class OrderTypeLookupComponent implements OnInit {

  isLoading: boolean = false;
  isShow: boolean = true;

  salesSku: any = "";
  itemId: any = "";
  compQty: any = "";
  itemSeq: any = "";
  oeCode: any = "";

  itemClassification: any = "";
  itemDescription: any = "";
  itemType: any = "";
  itemGroup: any = "";
  itemCategory: any = "";
  tte: any = "";
  loadFactor: any = "";
  formattedDate: string;
  effectiveDate: any = "";

  orderType: any = "";
  movementType: any = "";
  marketSegment: any = "";
  sapOrderType: any = "";
  sapDocType: any = "";
  bomType: any = "";


  orderTypef: any = "";
  movementTypef: any = "";
  marketSegmentf: any = "";
  sapOrderTypef: any = "";
  sapDocTypef: any = "";

  orderTypeu: any = "";
  movementTypeu: any = "";
  marketSegmentu: any = "";
  sapOrderTypeu: any = "";
  sapDocTypeu: any = "";

  insertUser: any = "";
  insertDate: any = "";
  updateUser: any = "";
  updateDate: any = "";

  resultDataList: any[];
  responseItemsList: any[];

  mtOEBOMList: any[];
  mtoebomList: any[];
  displayForm: boolean = false;

  page = {
    limit: 100,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };


  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    localStorage.setItem("userMenu", "paas-master");
  }

  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }

  editing = {};
  upload() { }

  // Datatable Footer
  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }



  doSubmitSearch() {
    let data = {
      orderType: this.orderType,
      movementType: this.movementType,
      marketSegment: this.marketSegment,
      sapOrderType: this.sapOrderType,
      sapDocType: this.sapDocType,
      bomType: this.bomType
    }
    console.log("submit data:  " + JSON.stringify(data));
    this.doSearch(data)
  }


  doSearch(data) {
    console.log("submit data:  " + JSON.stringify(data));
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getOrderTypeLookup, data).subscribe(response => {
      this.page.count = response['data'].total;
      this.page.limit = response['data'].pageLength;
      this.responseItemsList = response['data'].itemsList;
      console.log("response length: " + this.responseItemsList.length);
      console.log("response array string: " + JSON.stringify(this.responseItemsList));
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  //server side pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    let bodyData = {
      index: pageInfo.offset,
      orderType: this.orderType,
      movementType: this.movementType,
      marketSegment: this.marketSegment,
      sapOrderType: this.sapOrderType,
      sapDocType: this.sapDocType,
    }
    this.doSearch(bodyData);
  }

  updateForm(form: NgForm) {
    this.isLoading = true;
    let data = {
      "itemsList": [
        {
          "orderType": this.orderTypeu,
          "movementType": this.movementTypeu,
          "marketSegment": this.marketSegmentu,
          "sapOrderType": this.sapOrderTypeu,
          "sapDocType": this.sapDocTypeu,
        }
      ]
    }
    console.log("updateMtTruckType submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.updateOrderTypeLookup, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.isLoading = false;
        this.doSubmitSearch();
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

  showUpdateModel(row) {
    this.orderTypeu = row.orderType;
    this.movementTypeu = row.movementType;
    this.marketSegmentu = row.marketSegment;
    this.sapOrderTypeu = row.sapOrderType;
    this.sapDocTypeu = row.sapDocType;
    $("#myModal").modal('show');
  }





  saveForm(form: NgForm) {
    this.isLoading = true;
    let data = {
      "itemsList": [
        {
          "orderType": this.orderTypef,
          "movementType": this.movementTypef,
          "marketSegment": this.marketSegmentf,
          "sapOrderType": this.sapOrderTypef,
          "sapDocType": this.sapDocTypef,
        }
      ]
    }
    console.log("submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.uploadOrderTypeLookup, data).subscribe(response => {
      //console.log("response array string: "+JSON.stringify(response));
      this.isLoading = false;
      this.toastr.success(response['message']);
      form.resetForm();
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  displayAddForm() {
    if (this.displayForm)
      this.displayForm = false;
    else
      this.displayForm = true;
  }




  insDate: any = "";
  insDatep: any = "";
  updDate: any = "";
  updDatep: any = "";


  // export to excel file
  export(): void {
    this.isLoading = true;
    if (this.responseItemsList === undefined) {
      this.isLoading = false;
    }
    if (this.responseItemsList.length > 0) {

      let data = {
        orderType: this.orderType,
        movementType: this.movementType,
        marketSegment: this.marketSegment,
        sapOrderType: this.sapOrderType,
        sapDocType: this.sapDocType,
        bomType: this.bomType,
        pageLength: this.page.count
        // pageLength: this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
      }

      this.service.post_service(ApiserviceService.apisList.getOrderTypeLookup, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          let excelRawData = [...response['data'].itemsList];
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            this.insDate = this.formatDate(excelRawData[i].insertDate);
            this.insDatep = this.effectiveDate;
            this.updDate = this.formatDate(excelRawData[i].updateDate);
            this.updDatep = this.effectiveDate;

            let data = {
              "OrderType": excelRawData[i].orderType,
              "Movement Type": excelRawData[i].movementType,
              "Market Segment": excelRawData[i].marketSegment,
              "SAP Order Type": excelRawData[i].sapOrderType,
              "SAP Doc Type ": excelRawData[i].sapDocType,
              "Insert User   ": excelRawData[i].insertUser,
              "Insert Date   ": this.insDatep,
              "Update User   ": excelRawData[i].updateUser,
              "Update Date   ": this.updDatep,
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'OrderTypeLookup.xlsx');
          this.isLoading = false;
        } else {
          this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
          this.isLoading = false;
        }
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })

    } else {
      this.toastr.error('No records to generate excel...', 'Error!');
      this.isLoading = false;
    }
  }





  clearAll() {
    this.orderType = "";
    this.movementType = "";
    this.marketSegment = "";
    this.sapOrderType = "";
    this.sapDocType = "";

  }


  refreshData() {
    this.page.offset = 0;
    this.table.offset = 0;
    this.doSubmitSearch();
  }



  formatDate(data) {
    if (data != null && data) {
      let formatted = new Date(data),
        mnth = ("0" + (formatted.getMonth() + 1)).slice(-2),
        day = ("0" + formatted.getDate()).slice(-2);
      this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
      this.effectiveDate = this.formattedDate;
      return this.formatDate;
    } else {
      this.effectiveDate = "";
    }
  }
  month_names = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
  };


  trimDate(date) {
    if (date === "" || date === undefined || date === null)
      return "";
    else
      var array = date.substring(0, 10).split("-");
    return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
  }

  trimEmpty(val) {
    if (val === "" || val === undefined)
      return "";
    else {
      console.log(typeof val)
      console.log(val + "----" + val.length);
      // return val.trim();
    }
  }

  getMonth(number) {
    return this.month_names[number]
  }

  updateLocationScan(f) {

  }


}
