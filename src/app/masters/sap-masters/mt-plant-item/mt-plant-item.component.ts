import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { DatatableComponent } from '@swimlane/ngx-datatable';



@Component({
  selector: 'app-mt-plant-item',
  templateUrl: './mt-plant-item.component.html',
  styleUrls: ['./mt-plant-item.component.scss']
})
export class MtPlantItemComponent implements OnInit {

  isLoading: boolean = false;
  isShow: boolean = true;

  //itemId: any = "130043";
  itemClassification: any = "";
  itemDescription: any = "";
  itemType: any = "";
  itemGroup: any = "";
  itemCategory: any = "";
  tte: any = "";
  loadFactor: any = "";

  plantCode: any = "";
  effectiveDate: any = "";
  itemId: any = "";
  weight: any = "";
  weightUom: any = "";
  insertUser: any = "";
  insertDate: any = "";
  updateUser: any = "";
  updateDate: any = "";

  indentDate: any = "";

  responseItemsList: any[];
  editing = {};


  formattedDate: string;
  expiryDate: any = "";
  ttDays: any = "";
  baseFreight: any = "";
  status: any = "Level2 Approved";
  statusList = [{ val: "Unapproved" }, { val: "Level1 Approved" }, { val: "Level2 Approved" }]

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
    localStorage.setItem("userMenu", "sap-master");
  }

  // For Pagination Footer
  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }



  upload() { }










  doSubmitSearch() {
    let data = {
      itemId: this.itemId,
      plantCode: this.plantCode,
      effectiveDate: this.effectiveDate,
    }
    console.log("submit data:  " + JSON.stringify(data));
    this.doSearch(data)
  }

  doSearch(data) {
    this.isLoading = true;
    this.responseItemsList = [];
    console.log("submit data:  " + JSON.stringify(data));

    this.service.post_service(ApiserviceService.apisList.getMTPLANTItem, data).subscribe(response => {
      console.log(response);
      this.page.count = response['data'].total;
      this.page.limit = response['data'].pageLength;
      this.responseItemsList = response['data'].itemsList;
      this.responseItemsList = [...this.responseItemsList];
      // console.log(this.responseItemsList);
      console.log("responseItemsList data:  " + JSON.stringify(this.responseItemsList));

      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }


  //server side pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    let data = {
      index: pageInfo.offset,
      itemId: this.itemId,
      plantCode: this.plantCode,
      effectiveDate: this.effectiveDate,
    }
    this.doSearch(data);
  }



  // clear data
  clearAll() {
    this.plantCode = "";
    this.effectiveDate = "";
    this.itemId = "";
    this.formattedDate = "";
    this.indentDate = "";
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

  effformatDate(data) {
    console.log(data)
    if (data != null && data) {
      let formatted = new Date(data),
        mnth = ("0" + (formatted.getMonth() + 0)).slice(-2),
        day = ("0" + formatted.getDate()).slice(-2);
      this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
      this.effectiveDate = this.formattedDate;
      console.log(this.effectiveDate + "  formattedDate effectiveDate")
      return this.formatDate;
    } else {
      this.effectiveDate = "";
    }
  }


  tempEffectiveDate: any = "";
  efftrimDate(date) {
    if (date === "" || date === undefined)
      return "";
    else
      var array = date.substring(0, 10).split("-");
    this.tempEffectiveDate = array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
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













  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }

  insDate: any = "";
  insDatep: any = "";
  updDate: any = "";
  updDatep: any = "";

  effDate: any = "";
  effDatep: any = "";

  // export to excel file
  export(): void {
    this.isLoading = true;
    if (this.responseItemsList === undefined) {
      this.isLoading = false;
    }
    if (this.responseItemsList.length > 0) {
      let data = {
        itemId: this.itemId,
        plantCode: this.plantCode,
        effectiveDate: this.effectiveDate,
        pageLength: this.page.count
        // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
      }

      this.service.post_service(ApiserviceService.apisList.getMTPLANTItem, data).subscribe(response => {
        console.log(response);

        if (response['statusCode'] == 200) {
          let excelRawData = [...response['data'].itemsList];
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            this.insDate = this.formatDate(excelRawData[i].insertDate);
            this.insDatep = this.effectiveDate;
            this.updDate = this.formatDate(excelRawData[i].updateDate);
            this.updDatep = this.effectiveDate;
            this.effDate = this.efftrimDate(excelRawData[i].effectiveDate);
            this.effDatep = this.tempEffectiveDate;

            let data = {
              "Plant Code": excelRawData[i].plantCode,
              "Item Id ": excelRawData[i].itemId,
              "Effective Date": this.effDatep,

              "Weight  ": excelRawData[i].weight,
              "Weight Uom   ": excelRawData[i].weightUom,
              "Insert Date   ": this.insDatep,
              "Update Date   ": this.updDatep,
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'Plant Item weight.xlsx');
          this.isLoading = false;
        }else {
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





  // Refresh data

  refreshData() {
    this.table.offset = 0;
    this.page.offset = 0;
    this.doSubmitSearch();
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






}
