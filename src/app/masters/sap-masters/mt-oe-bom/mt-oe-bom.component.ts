import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { DatatableComponent } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-mt-oe-bom',
  templateUrl: './mt-oe-bom.component.html',
  styleUrls: ['./mt-oe-bom.component.scss']
})
export class MtOeBomComponent implements OnInit {

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
    localStorage.setItem("userMenu", "sap-master");
  }

  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }




  mtOEBOMList: any[];
  mtoebomList: any[];

  upload() { }




  doSubmitSearch() {
    let data = {
      itemId: this.itemId,
      oeCode: this.oeCode,
      salesSku: this.salesSku
    }
    console.log("submit data:  " + JSON.stringify(data));
    this.doSearch(data)
  }

  doSearch(data) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getMTOEBom, data).subscribe(response => {
      console.log(response);
      this.mtOEBOMList = response['data'].mtOeBoms;
      this.page.count = response['data'].total;
      this.page.limit = response['data'].pageLength;
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
      itemId: this.itemId,
      oeCode: this.oeCode,
    }
    this.doSearch(bodyData);
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
    let mtItemIndex = this.mtOEBOMList.findIndex(data => data.id == row.id)
    console.log(cell);
    this.mtOEBOMList[mtItemIndex][cell] = event.target.value;

    this.mtOEBOMList = [...this.mtOEBOMList];
    console.log('UPDATED!', this.mtOEBOMList);
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
        let index = this.mtOEBOMList.findIndex(data => row.id == data.id);
        if (index > -1) {
          this.mtOEBOMList[index] = response['data'];
          this.mtOEBOMList = [...this.mtOEBOMList];
        }

        console.log(this.mtOEBOMList, "this.mtOEBOMList");

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
    this.itemId = "";
    this.oeCode = "";
    this.salesSku = "";
  }





  insDate: any = "";
  insDatep: any = "";
  updDate: any = "";
  updDatep: any = "";


  // export to excel file
  export(): void {
    this.isLoading = true;
    if (this.mtOEBOMList === undefined) {
      this.isLoading = false;
    }
    let data = {
      itemId: this.itemId,
      oeCode: this.oeCode,
      salesSku: this.salesSku,
      pageLength: this.page.count
      // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
    }

    if (this.mtOEBOMList.length > 0) {
      this.service.post_service(ApiserviceService.apisList.getMTOEBom, data).subscribe(response => {
        console.log(response);
        if (response['statusCode'] == 200) {
          let excelRawData = [...response['data'].mtOeBoms];
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            this.insDate = this.formatDate(excelRawData[i].insertDate);
            this.insDatep = this.effectiveDate;
            this.updDate = this.formatDate(excelRawData[i].updateDate);
            this.updDatep = this.effectiveDate;

            let data = {
              "Sales SKU": excelRawData[i].salesSku,
              "Item Id": excelRawData[i].itemId,
              "Comp Qty ": excelRawData[i].compQty,
              "Item Seq  ": excelRawData[i].itemSeq,
              "OE Code   ": excelRawData[i].oeCode,
              "Insert Date   ": this.insDatep,
              "Update Date   ": this.updDatep,
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'OE Bom.xlsx');
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
      this.toastr.error("No Records To Generate Excel..", "Error!");
      this.isLoading = false;
    }
  }




  // // export to excel file
  // export() {
  //   this.isLoading = true;

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
  //   this.service.post_service(ApiserviceService.apisList.getMtItem, data).subscribe(response => {
  //     if (response['statusCode'] == 200) {
  //       let mtItemData = response['data'].items;
  //       let excelRawData = mtItemData;
  //       let newExcelData = [];
  //       for (let i = 0; i < excelRawData.length; i++) {
  //         let data = {
  //           "Item Id": excelRawData[i].id,
  //           "Item Classification": excelRawData[i].classification,
  //           "Item Description": excelRawData[i].description,
  //           "Item Type": excelRawData[i].type,
  //           "Item Group": excelRawData[i].group,
  //           "TTE": excelRawData[i].tte,
  //           "Load Factor": excelRawData[i].loadFactor,
  //           "Gross Wt": excelRawData[i].grossWt,
  //           "Gross Wt UOM": excelRawData[i].grossWtUom,
  //           "Net Wt": excelRawData[i].netWt,
  //           "Net Wt UOM": excelRawData[i].netWtUom,
  //           "Volume": excelRawData[i].volume,
  //           "Volume UOM": excelRawData[i].volUom,
  //           "Length": excelRawData[i].length,
  //           "Length UOM": excelRawData[i].lenUom,
  //           "Width": excelRawData[i].width,
  //           "Width UOM": excelRawData[i].wdUom,
  //           "Height": excelRawData[i].height,
  //           "Height UOM": excelRawData[i].htUom,
  //           "Diameter": excelRawData[i].diameter,
  //           "Diameter UOM": excelRawData[i].dmUom,
  //           "Item Category": excelRawData[i].itemCategory
  //         }
  //         newExcelData.push(data)
  //       }
  //       const workBook = XLSX.utils.book_new(); // create a new blank book
  //       const workSheet = XLSX.utils.json_to_sheet(newExcelData);
  //       XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
  //       XLSX.writeFile(workBook, 'MtItemData.xlsx');
  //       this.isLoading = false;
  //     } else {
  //       this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
  //       this.isLoading = false;
  //     }
  //   }, (err) => {
  //     console.log("Error", err);
  //     this.toastr.error(err ? err : "Something went wrong..", "Error!");
  //     this.isLoading = false;
  //   })
  // }

  refreshData() {
    this.table.offset = 0;
    this.page.offset = 0;
    this.doSubmitSearch();
  }

  // For Pagination Footer
  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }





}
