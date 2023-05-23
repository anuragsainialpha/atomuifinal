import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-mt-item',
  templateUrl: './mt-item.component.html',
  styleUrls: ['./mt-item.component.scss']
})
export class MtItemComponent implements OnInit {

  isLoading: boolean = false;
  isShow: boolean = true;

  itemId: any = "";
  itemClassification: any = "";
  itemDescription: any = "";
  itemType: any = "";
  itemGroup: any = "";
  itemCategory: any = "";
  tte: any = "";
  loadFactor: any = "";
  page = {
    limit: 100,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };

  mtItemList: any[];
  editing = {};
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    localStorage.setItem("userMenu", "sap-master");
  }

  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }

  // For Pagination Footer
  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }


  // mtItemFilter() {

  //   let data = {
  //     itemId: this.itemId,
  //     classification: this.itemClassification,
  //     description: this.itemDescription,
  //     type: this.itemType,
  //     group: this.itemGroup,
  //     category: this.itemCategory,
  //     tte: this.tte,
  //     loadfactor: this.loadFactor
  //   }

  //   this.isLoading = true;
  //   this.mtItemList = [];

  //   this.service.post_service(ApiserviceService.apisList.getMtItem, data).subscribe(response => {
  //     console.log(response);
  //     this.mtItemList = response['data'].items;
  //     console.log(this.mtItemList);
  //     this.isLoading = false;
  //   }, (err) => {
  //     console.log("Error", err);
  //     this.toastr.error(err ? err : "Something went wrong..", "Error!");
  //     this.isLoading = false;
  //   })
  // }



  //server side pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    let bodyData = {
      index: pageInfo.offset,
      itemId: this.itemId,
      classification: this.itemClassification,
      description: this.itemDescription,
      type: this.itemType,
      group: this.itemGroup,
      category: this.itemCategory,
      tte: this.tte,
      loadfactor: this.loadFactor
    }
    this.dofilterSearch(bodyData);
  }

  doSubmitSearch() {
    let bodyData = {
      itemId: this.itemId,
      classification: this.itemClassification,
      description: this.itemDescription,
      type: this.itemType,
      group: this.itemGroup,
      category: this.itemCategory,
      tte: this.tte,
      loadfactor: this.loadFactor
    }
    this.dofilterSearch(bodyData);
    console.log("Submitted  Data:  " + JSON.stringify(bodyData));
  }

  // drafted load slips filter creatria
  dofilterSearch(bodyData) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getMtItem, bodyData).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.page.count = response['data'].total;
        this.page.limit = response['data'].pageLength;
        this.mtItemList = response['data'].items;
        //  console.log(JSON.stringify(this.mtItemList));
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





  // clear data
  clearAll() {
    this.itemId = "";
    this.itemClassification = "";
    this.itemDescription = "";
    this.itemType = "";
    this.itemGroup = "";
    this.itemCategory = "";
    this.tte = "";
    this.loadFactor = "";


  }




  formattedDate: string;
  effectiveDate: any = "";

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


  month_names = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
  };




  upload() { }


  insDate: any = "";
  insDatep: any = "";
  updDate: any = "";
  updDatep: any = "";



  // export to excel file
  export() {
    this.isLoading = true;
    if (this.mtItemList === undefined) {
      this.isLoading = false;
    }
    let data = {
      itemId: this.itemId,
      classification: this.itemClassification,
      description: this.itemDescription,
      type: this.itemType,
      group: this.itemGroup,
      category: this.itemCategory,
      tte: this.tte,
      loadfactor: this.loadFactor,
      // if count is less than 10000 then assign pageLength = count else pageLength = 10000
      pageLength: this.page.count,
      // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
    }
    this.service.post_service(ApiserviceService.apisList.getMtItem, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        let excelRawData = response['data'].items;
        // Commented this line to print all the rows .... earlier it was only for 100 rows
        // let excelRawData = this.mtItemList; 

        let newExcelData = [];
        for (let i = 0; i < excelRawData.length; i++) {
          this.insDate = this.formatDate(excelRawData[i].insertDate);
          this.insDatep = this.effectiveDate;
          this.updDate = this.formatDate(excelRawData[i].updateDate);
          this.updDatep = this.effectiveDate;


          let data = {
            "Item Id": excelRawData[i].id,
            "Item Classification": excelRawData[i].classification,
            "Item Description": excelRawData[i].description,
            "Item Type": excelRawData[i].type,
            "Item Group": excelRawData[i].group,
            "Item Category": excelRawData[i].category,
            "TTE": excelRawData[i].tte,
            "Load Factor": excelRawData[i].loadFactor,
            "Gross Wt": excelRawData[i].grossWt,
            "Gross Wt UOM": excelRawData[i].grossWtUom,
            "Net Wt": excelRawData[i].netWt,
            "Net Wt UOM": excelRawData[i].netWtUom,
            "Volume": excelRawData[i].volume,
            "Volume UOM": excelRawData[i].volUom,
            "Length": excelRawData[i].length,
            "Length UOM": excelRawData[i].lenUom,
            "Width": excelRawData[i].width,
            "Width UOM": excelRawData[i].wdUom,
            "Height": excelRawData[i].height,
            "Height UOM": excelRawData[i].htUom,
            "Diameter": excelRawData[i].diameter,
            "Diameter UOM": excelRawData[i].dmUom,
            "Insert Date   ": this.insDatep,
            "Update Date   ": this.updDatep,
          }
          newExcelData.push(data)
        }
        const workBook = XLSX.utils.book_new(); // create a new blank book
        const workSheet = XLSX.utils.json_to_sheet(newExcelData);
        XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
        XLSX.writeFile(workBook, 'Item.xlsx');
        this.isLoading = false;
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


  refreshData() {
    this.table.offset = 0;
    this.page.offset = 0;
    this.doSubmitSearch();
  }


  updateValue(row, event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    let mtItemIndex = this.mtItemList.findIndex(data => data.id == row.id)
    console.log(cell);
    this.mtItemList[mtItemIndex][cell] = event.target.value;

    this.mtItemList = [...this.mtItemList];
    console.log('UPDATED!', this.mtItemList);
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
        let index = this.mtItemList.findIndex(data => row.id == data.id);
        if (index > -1) {
          this.mtItemList[index] = response['data'];
          this.mtItemList = [...this.mtItemList];
        }

        console.log(this.mtItemList, "this.mtItemList");

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
