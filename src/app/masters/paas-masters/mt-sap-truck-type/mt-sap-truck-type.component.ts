import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { NgForm } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;



@Component({
  selector: 'app-mt-sap-truck-type',
  templateUrl: './mt-sap-truck-type.component.html',
  styleUrls: ['./mt-sap-truck-type.component.scss']
})
export class MtSapTruckTypeComponent implements OnInit {

  isLoading: boolean = false;
  isShow: boolean = true;

  salesSku: any = "";
  itemId: any = "";
  compQty: any = "";
  itemSeq: any = "";
  oeCode: any = "";
  insertUser: any = "";
  insertDate: any = "";
  updateUser: any = "";
  updateDate: any = "";

  itemClassification: any = "";
  itemDescription: any = "";
  itemType: any = "";
  itemGroup: any = "";
  itemCategory: any = "";
  tte: any = "";
  loadFactor: any = "";
  formattedDate: string;
  effectiveDate: any = "";

  materialGroupId: any = "";
  description1: any = "";
  description2: any = "";
  scmGroup: any = "";

  sapTruckType: any = "";
  sapTruckTypeDesc: any = "";
  opsTruckType: any = "";
  opsVariant1: any = "";
  sttId: any = "";

  sapTruckTypef: any = "";
  sapTruckTypeDescf: any = "";
  opsTruckTypef: any = "";
  opsVariant1f: any = "";
  sttIdf: any = "";

  sapTruckTypeu: any = "";
  sapTruckTypeDescu: any = "";
  opsTruckTypeu: any = "";
  opsVariant1u: any = "";
  sttIdu: any = "";

  displayForm: boolean = false;
  resultDataList: any[];
  responseItemsList: any[];

  editing = {};

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
    this.getPaasTruckTypeList();
    this.getVariantsList();
  }

  showFilter() {
    this.isShow = !this.isShow
  }
  // Datatable footer info
  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }

  paasTruckTypeList: any[] = [];
  variantsList: any[] = [];

  getPaasTruckTypeList() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getPaasTruckTypeList).subscribe(response => {
      //console.log("response array string: "+JSON.stringify(response));
      this.paasTruckTypeList = response['data'];
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  getVariantsList() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getVariantsList).subscribe(response => {
      console.log("response array string: " + JSON.stringify(response));
      this.variantsList = response['data'];
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }



  upload() { }
  displayAddForm() {
    if (this.displayForm)
      this.displayForm = false;
    else
      this.displayForm = true;
  }


  insertStatus: string = "";

  //"mgId":this.mgIdf
  saveForm(form: NgForm) {
    this.isLoading = true;
    let data = {
      "itemsList": [
        {
          sapTruckType: this.sapTruckTypef,
          sapTruckTypeDesc: this.sapTruckTypeDescf,
          opsTruckType: this.opsTruckTypef,
          // opsVariant1:this.opsVariant1f,
          // sttId:this.sttIdf,
        }
      ]
    }
    console.log("submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.addOrUploadMtSapTruckType, data).subscribe(response => {
      //console.log("response array string: "+JSON.stringify(response));
      this.insertStatus = response['data'].message;
      if (this.insertStatus === "Sucess") {
        this.toastr.success(response['message']);
      }
      else if (this.insertStatus === "Failed") {
        this.toastr.error("Please check!", "Could not insert record..");
      }
      this.isLoading = false;
      form.resetForm();
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }


  doSubmitSearch() {
    let data = {
      sapTruckType: this.sapTruckType,
      sapTruckTypeDesc: this.sapTruckTypeDesc,
      opsTruckType: this.opsTruckType,
      opsVariant1: this.opsVariant1,
    }
    console.log("submit data:  " + JSON.stringify(data));
    this.doSearch(data)
  }

  doSearch(data) {
    console.log("submit data:  " + JSON.stringify(data));
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getMtSapTruckType, data).subscribe(response => {
      this.page.count = response['data'].total;
      this.page.limit = response['data'].pageLength;
      this.responseItemsList = response['data'].itemsList;
      console.log("response length: " + this.responseItemsList.length);
      // console.log("response array string: "+JSON.stringify(this.responseItemsList));
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
      sapTruckType: this.sapTruckType,
      sapTruckTypeDesc: this.sapTruckTypeDesc,
      opsTruckType: this.opsTruckType,
      opsVariant1: this.opsVariant1,
    }
    this.doSearch(bodyData);
  }

  showUpdateModel(row) {
    this.sapTruckTypeu = row.sapTruckType;
    this.sapTruckTypeDescu = row.sapTruckTypeDesc;
    this.opsTruckTypeu = row.opsTruckType;
    this.opsVariant1u = row.opsVariant1;
    this.sttIdu = row.sttId;
    console.log("***** sttIdu" + this.sttIdu);
    $("#myModal").modal('show');
  }


  updateMtSapTruckType(form: NgForm) {

    this.isLoading = true;
    let data = {
      "itemsList": [
        {
          "sapTruckType": this.sapTruckTypeu,
          "sapTruckTypeDesc": this.sapTruckTypeDescu,
          "opsTruckType": this.opsTruckTypeu,
          "opsVariant1": this.opsVariant1u,
          "sttId": this.sttIdu,
        }
      ]
    }

    console.log("updateMtSapTruckType submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.updateMtSapTruckType, data).subscribe(response => {
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
        sapTruckType: this.sapTruckType,
        sapTruckTypeDesc: this.sapTruckTypeDesc,
        opsTruckType: this.opsTruckType,
        opsVariant1: this.opsVariant1,
        // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
        pageLength: this.page.count     
      }
      this.service.post_service(ApiserviceService.apisList.getMtSapTruckType, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          let excelRawData = [...response['data'].itemsList];
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {

            this.insDate = this.formatDate(excelRawData[i].insertDate);
            this.insDatep = this.effectiveDate;
            this.updDate = this.formatDate(excelRawData[i].updateDate);
            this.updDatep = this.effectiveDate;

            let data = {
              "SAP Truck Type": excelRawData[i].sapTruckType,
              "SAP Truck Type Description": excelRawData[i].sapTruckTypeDesc,
              "PaaS Truck Type": excelRawData[i].opsTruckType,
              "PasS Variant 1": excelRawData[i].opsVariant1,
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
          XLSX.writeFile(workBook, 'MtSapTruckType.xlsx');
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
      this.toastr.error('No Records To Generate Excel...', 'Error!');
      this.isLoading = false;
    }
  }

  // clear data
  clearAll() {
    this.sapTruckType = "";
    this.sapTruckTypeDesc = "";
    this.opsTruckType = "";
    this.opsVariant1 = "";
  }


  refreshData() {
    this.table.offset = 0;
    this.page.offset = 0;
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
    if (date === "" || date === undefined)
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


}
