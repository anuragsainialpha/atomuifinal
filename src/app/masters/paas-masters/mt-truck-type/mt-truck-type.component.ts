import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { NgForm } from '@angular/forms';
declare var $: any;
import { UiUtil } from '../../../uiUtil';
import { DatatableComponent } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-mt-truck-type',
  templateUrl: './mt-truck-type.component.html',
  styleUrls: ['./mt-truck-type.component.scss']
})
export class MtTruckTypeComponent implements OnInit {

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
  formattedDate: string;
  effectiveDate: any = "";

  truckType = "";
  loadFactor = "";
  truckDesc = "";
  tteCapacity = "";
  grossWt = "";
  grossWtUom = "";
  grossVol = "";
  grossVolUom = "";
  variant1 = "";
  variant2 = "";
  ttId: any = "";

  truckTypef = "";
  loadFactorf = "";
  truckDescf = "";
  tteCapacityf = "";
  grossWtf = "";
  grossWtUomf = "";
  grossVolf = "";
  grossVolUomf = "";
  variant1f = "";
  variant2f = "";
  ttIdf: any = "";

  truckTypeu = "";
  loadFactoru = "";
  truckDescu = "";
  tteCapacityu = "";
  grossWtu = "";
  grossWtUomu = "";
  grossVolu = "";
  grossVolUomu = "";
  variant1u = "";
  variant2u = "";
  ttIdu: any = "";


  displayForm: boolean = false;
  resultDataList: any[];
  responseItemsList: any[];

  destinationList: any[];
  sourceList: any;
  searchLabel: string;

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
  }

  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }

  // DataTable Footer
  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }



  displayAddForm() {
    if (this.displayForm)
      this.displayForm = false;
    else
      this.displayForm = true;
  }

  upload() { }

  doSubmitSearch() {
    let data = {
      truckType: this.truckType,
      truckDesc: this.truckDesc,
      loadFactor: this.loadFactor,
      tteCapacity: this.tteCapacity,
      variant1: this.variant1,
    }
    console.log("submit data:  " + JSON.stringify(data));
    this.doSearch(data)
  }


  doSearch(data) {
    console.log("submit data:  " + JSON.stringify(data));
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getMtTruckType, data).subscribe(response => {
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
      truckType: this.truckType,
      truckDesc: this.truckDesc,
      loadFactor: this.loadFactor,
      tteCapacity: this.tteCapacity,
      variant1: this.variant1,
    }
    this.doSearch(bodyData);
  }

  //get filter destination result
  getfilterDestination(event, typeofevent) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationList = [];
      this.isLoading = true;
      //console.log("**** typeofevent "+typeofevent)
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?' + typeofevent + '=' + filtervalue).subscribe(response => {
        if (typeofevent === 'truckType') {
          this.destinationList = response['data'].searchResult;
          console.log("DATA:   " + JSON.stringify(this.destinationList))
        } else {
          this.sourceList = response['data'].searchResult;
        }

        // console.log("this.destinationList", this.destinationList)
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  //{value: '', viewValue: 'None'},
  wtuoms: any[] = ['KG'];

  //{value: '', viewValue: 'None'},
  volumes: any[] = ['CUMTR'];



  insertStatus: string = "";

  saveForm(form: NgForm) {
    this.isLoading = true;
    let data = {
      "itemsList": [
        {
          "truckType": this.truckTypef,
          "truckDesc": this.truckDescf,
          "loadFactor": this.loadFactorf,
          "tteCapacity": this.tteCapacityf,
          "grossWt": this.grossWtf,
          "grossWtUom": this.grossWtUomf,
          "grossVol": this.grossVolf,
          "grossVolUom": this.grossVolUomf,
          "variant1": this.variant1f,
          "variant2": this.variant2f,
        }
      ]
    }

    console.log("submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.addOrUploadMtTruckType, data).subscribe(response => {
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


  updateForm(form: NgForm) {
    this.isLoading = true;
    let data = {
      "itemsList": [
        {
          "truckType": this.truckTypeu,
          "truckDesc": this.truckDescu,
          "loadFactor": this.loadFactoru,
          "tteCapacity": this.tteCapacityu,
          "grossWt": this.grossWtu,
          // "grossWtUom": this.grossWtUomu,
          "grossWtUom": 'KG',
          "grossVol": this.grossVolu,
          "grossVolUom": 'CUMTR',
          "variant1": this.variant1u,
          "variant2": this.variant2u,
          "ttId": this.ttIdu,
        }
      ]
    }
    console.log("updateMtTruckType submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.updateMtTruckType, data).subscribe(response => {
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
    this.truckTypeu = row.truckType;
    this.loadFactoru = row.loadFactor;
    this.truckDescu = row.truckDesc;
    this.tteCapacityu = row.tteCapacity;
    this.grossWtu = row.grossWt;
    this.grossWtUomu = row.grossWtUom;
    this.grossVolu = row.grossVol;
    this.grossVolUomu = row.grossVolUom;
    this.variant1u = row.variant1;
    this.variant2u = row.variant2;
    this.ttIdu = row.ttId;
    $("#myModal").modal('show');
  }


  insDate: any = "";
  insDatep: any = "";
  updDate: any = "";
  updDatep: any = "";



  export(): void {
    this.isLoading = true;
    if (this.responseItemsList === undefined) {
      this.isLoading = false;
    }
    if (this.responseItemsList.length > 0) {
      let data = {
        truckType: this.truckType,
        truckDesc: this.truckDesc,
        loadFactor: this.loadFactor,
        tteCapacity: this.tteCapacity,
        variant1: this.variant1,
        // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
        pageLength: this.page.count
      }

      this.service.post_service(ApiserviceService.apisList.getMtTruckType, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          let excelRawData = [...response['data'].itemsList];
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            this.insDate = this.formatDate(excelRawData[i].insertDate);
            this.insDatep = this.effectiveDate;
            this.updDate = this.formatDate(excelRawData[i].updateDate);
            this.updDatep = this.effectiveDate;

            let data = {
              "TruckType": excelRawData[i].truckType,
              "Truck Desc": excelRawData[i].truckDesc,
              "LoadFactor": excelRawData[i].loadFactor,
              "TTE Capacity": excelRawData[i].tteCapacity,
              "Gross Wt ": excelRawData[i].grossWt,
              "Gross Wt Uom": excelRawData[i].grossWtUom,
              "Gross Vol": excelRawData[i].grossVol,
              "Gross Vol Uom": excelRawData[i].grossVolUom,
              "Variant 1": excelRawData[i].variant1,
              "Variant 2": excelRawData[i].variant2,
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
          XLSX.writeFile(workBook, 'Truck Type.xlsx');
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
      // this.toastr.error(response['message']:["Something went wrong..", "Error!"]);
      this.isLoading = false;
    }
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







  updateValue(row, event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    let mtItemIndex = this.responseItemsList.findIndex(data => data.id == row.id)
    console.log(cell);
    this.responseItemsList[mtItemIndex][cell] = event.target.value;

    this.responseItemsList = [...this.responseItemsList];
    console.log('UPDATED!', this.responseItemsList);
  }

  modifyItem(row) {
    console.log("---------------");
    console.log(this.editing);
    this.isLoading = true;

    row = { ...row }
    console.log(row)
    this.service.post_service(ApiserviceService.apisList.modifyItem, row).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.isLoading = false;
        this.editing = {};
        this.toastr.success(response['message']);
        //row = response['data'];
        //this.modifyPlanData= [...this.modifyPlanData]

        // let index = this.modifyPlanData.indexOf(row);
        let index = this.responseItemsList.findIndex(data => row.id == data.id);
        if (index > -1) {
          this.responseItemsList[index] = response['data'];
          this.responseItemsList = [...this.responseItemsList];
        }

        console.log(this.responseItemsList, "this.responseItemsList");

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



  // clear data
  clearAll() {
    this.truckType = "";
    this.loadFactor = "";
    this.truckDesc = "";
    this.tteCapacity = "";
    this.grossWt = "";
    this.grossWtUom = "";
    this.grossVol = "";
    this.grossVolUom = "";
    this.variant1 = "";
    this.variant2 = "";
  }


}
