import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { NgForm } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as moment from 'moment';
import { constants } from 'src/app/constants';
import { HelperServiceService } from 'src/app/services/helper-service/helper-service.service';
declare var $: any;

@Component({
  selector: 'app-mt-freight',
  templateUrl: './mt-freight.component.html',
  styleUrls: ['./mt-freight.component.scss']
})
export class MtFreightComponent implements OnInit {

  isLoading: boolean = false;
  isShow: boolean = true;


  //filter elements 
  transporterSapCode: any = "";
  servprov: any = "";
  sourceLoc: any = "";
  sourceDesc: any = "";
  destLoc: any = "";
  destDesc: any = "";
  truckType: any = "";
  condition1: any = "";
  effectiveDate: any = '';
  indentDate = '';
  formattedDate: string;
  expiryDate: any = "";
  ttDays: any = "";
  baseFreight: any = "";
  status: any = "Level2 Approved";
  statusList = [{ val: "Unapproved" }, { val: "Level1 Approved" }, { val: "Level2 Approved" }]

  rateType: any = "";
  loading: any = "";
  unloading: any = "";
  others1: any = "";
  others1Code: any = "";
  others2: any = "";
  others2Code: any = "";
  others3: any = "";
  others3Code: any = "";

  distance: any = "";
  totExpense: any = "";
  payTransporter: any = "";
  sourceType: any = "";
  selected = [];
  fromInsertDate: string = '';
  toInsertDate: string = '';
  fromInsert: string = '';
  toInsert: string = '';


  page = {
    limit: 200,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };

  mtFreightList: any[];
  mtFreightCheckedList = [];
  editing = {};
  buttonLable = "";
  isCheckedAll: boolean = false;
  allRowsSelected: boolean = false;
  currentPageIndex: number = 0;

  totalRecords: number;
  totalErrorRecords: number;
  gotResponse: boolean = false;
  responseData = '';
  minRecordIndex: number = 0;
  maxRecordIndex: number = 0;
  ErrorData: any;
  disableButton: string;
  isDisable: boolean = true;
  displayBtn: boolean = false;
  isL1Manager: boolean = false;
  isL2Manager: boolean = false;

  showToAndFromExpDate: boolean = false;
  fromExpiryDate:any = null;
  toExpiryDate:any = null;
  filterExpiryDate:any = null;
  currentDateAsString = this.helperService.getTodayDateASString();


  expiryDateFilterList: { "key": string; "value": string; }[];


  userRole: string = '';
  index: number;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  selectedExpiryDate: any;
  selectedRow: any;
  remarks: any;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService,
    private helperService: HelperServiceService,
  ) { }

  ngOnInit() {
    this.expiryDateFilterList = constants.freightExpiryDateFilterList;
    localStorage.setItem("userMenu", "freight-master");
    this.userRole = localStorage.getItem('role');
    if (this.userRole === "L1_MGR") {
      this.isL1Manager = true;
      this.status = "Unapproved";
      localStorage.setItem("userMenu", "fgs-freight");
    }

    if (this.userRole === "L2_MGR") {
      this.isL2Manager = true;
      this.status = "Level1 Approved";
      localStorage.setItem("userMenu", "fgs-freight");
    }

    this.index = this.page.offset;

    console.log(this.userRole)
    // this.doSearchFilter(); 
    // L1MGR L2MGR  L2_MGR L1_MGR  status
  }

  setDefaultStatus() {
    if (this.userRole === "L1_MGR") {
      this.isL1Manager = true;
      this.status = "Unapproved";
    }

    if (this.userRole === "L2_MGR") {
      this.isL2Manager = true;
      this.status = "Level1 Approved";
    }
  }

  // Datatable footer
  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }


  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }


  minDate = new Date();
  // formattedDate: string;
  //formatting the date from datepicker 

  formateDate(data) {
    console.log(data)
    if (data != null && data) {
      let formatted = new Date(data),
        mnth = ("0" + (formatted.getMonth() + 1)).slice(-2),
        day = ("0" + formatted.getDate()).slice(-2);
      this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
      this.effectiveDate = this.formattedDate;
      console.log(this.effectiveDate + "  formattedDate effectiveDate")
      return this.formateDate;
    } else {
      this.effectiveDate = "";
    }
  }

  formateDateFromInsert(data) {
    console.log(data)
    if (data != null && data) {
      let formatted = new Date(data),
        mnth = ("0" + (formatted.getMonth() + 1)).slice(-2),
        day = ("0" + formatted.getDate()).slice(-2);
      this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
      this.fromInsertDate = this.formattedDate;
      console.log(this.fromInsertDate + "  formattedDate effectiveDate")
      return this.formateDate;
    } else {
      this.fromInsertDate = "";
    }
  }

  formateDateToInsert(data) {
    console.log(data)
    if (data != null && data) {
      let formatted = new Date(data),
        mnth = ("0" + (formatted.getMonth() + 1)).slice(-2),
        day = ("0" + formatted.getDate()).slice(-2);
      this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
      this.toInsertDate = this.formattedDate;
      console.log(this.toInsertDate + "  formattedDate effectiveDate")
      return this.formateDate;
    } else {
      this.toInsertDate = "";
    }
  }


  trimDate(date) {
    if (date === "" || date === undefined)
      return "";
    else
      var array = date.substring(0, 10).split("-");
    return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
  }

  getMonth(number) {
    return this.month_names[number]
  }
  month_names = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
  };


  trimEmpty(val) {

    if (val === "" || val === undefined)
      return "";
    else {
      console.log(typeof val)
      console.log(val + "----" + val.length);
      // return val.trim();
    }

  }

  // Pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.selected = [];
    this.index = pageInfo.offset;
    let data = {
      transporterSapCode: this.transporterSapCode,
      servprov: this.servprov,
      sourceLoc: this.sourceLoc,
      sourceDesc: this.sourceDesc,
      destLoc: this.destLoc,
      destDesc: this.destDesc,
      truckType: this.truckType,
      condition1: this.condition1,
      effectiveDate: this.effectiveDate,
      expiryDate: this.expiryDate ? moment(new Date(this.expiryDate)).format("DD-MM-YYYY") : null,
      ttDays: this.ttDays,
      baseFreight: this.baseFreight,
      status: this.status,
      index: this.index,
      pageLength: this.page.limit,
      // toInsertDate:this.toInsertDate,
      // fromInsertDate : this.fromInsertDate,
      toInsertDate: this.toInsertDate ? moment(new Date(this.toInsertDate)).format("DD-MM-YYYY") : null,
      fromInsertDate: this.fromInsertDate ? moment(new Date(this.fromInsertDate)).format("DD-MM-YYYY") : null,
      expiryDateFilterType:this.filterExpiryDate,
      fromExpiryDate : this.fromExpiryDate ? moment(new Date(this.fromExpiryDate)).format("DD-MM-YYYY") : null,
      toExpiryDate : this.toExpiryDate ? moment(new Date(this.toExpiryDate)).format("DD-MM-YYYY") : null,
    }

    //isL1Manager isL1Manager
    this.displayBtn = true;


    if (this.isL1Manager == true) {
      if (this.status && this.status != null && this.status != '') {
        if (this.status === "Unapproved") {
          this.buttonLable = "L1 Approve"
          this.displayBtn = true;
        }
        else if (this.status === "Level1 Approved") {
          this.buttonLable = "L2 Approve"
          this.displayBtn = false;
        }
        else if (this.status === "Level2 Approved") {
          this.isDisable = false;
          this.displayBtn = false;
        }
      } else {
        this.displayBtn = false;
      }

    }

    if (this.isL2Manager == true) {
      if (this.status && this.status != null && this.status != '') {
        if (this.status === "Unapproved") {
          this.displayBtn = false;
        }
        else if (this.status === "Level1 Approved") {
          this.buttonLable = "L2 Approve"
          this.displayBtn = true;
        }

        else if (this.status === "Level2 Approved") {
          // this.buttonLable="L2 Approved"
          // this.disableButton="disabled";
          // this.isDisable=true;
          this.displayBtn = false;
        }
      } else {
        this.displayBtn = false;
      }
    }
    this.searchFilter(data);
  }





  // condition1: any = "";

  effDate: any = "";
  exppDate: any = "";

  // export to excel file
  export() {
    this.isLoading = true;
    // this.page.limit = this.page.count;

    let data = {
      transporterSapCode: this.transporterSapCode,
      servprov: this.servprov,
      sourceLoc: this.sourceLoc,
      sourceDesc: this.sourceDesc,
      destLoc: this.destLoc,
      destDesc: this.destDesc,
      truckType: this.truckType,
      condition1: this.condition1,
      effectiveDate: this.effectiveDate,
      expiryDate: this.expiryDate ? moment(new Date(this.expiryDate)).format("DD-MM-YYYY") : null,
      ttDays: this.ttDays,
      baseFreight: this.baseFreight,
      status: this.status,
      // pageLength: this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
      pageLength: this.page.count,
      // toInsertDate:this.toInsertDate,
      // fromInsertDate : this.fromInsertDate,
      toInsertDate: this.toInsertDate ? moment(new Date(this.toInsertDate)).format("DD-MM-YYYY") : null,
      fromInsertDate: this.fromInsertDate ? moment(new Date(this.fromInsertDate)).format("DD-MM-YYYY") : null,
      expiryDateFilterType:this.filterExpiryDate,
      fromExpiryDate : this.fromExpiryDate ? moment(new Date(this.fromExpiryDate)).format("DD-MM-YYYY") : null,
      toExpiryDate : this.toExpiryDate ? moment(new Date(this.toExpiryDate)).format("DD-MM-YYYY") : null,
    }
    this.service.post_service(ApiserviceService.apisList.getFreights, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        let mtItemData = response['data'].freights;
        console.log("mtItemData:  " + mtItemData);
        let excelRawData = mtItemData;
        let newExcelData = [];
        for (let i = 0; i < excelRawData.length; i++) {

          //this.effDate = excelRawData[i].effectiveDate;  
          //this.effDate = this.formateDate(this.effDate);  
          //this.exppDate = excelRawData[i].expiryDate;
          //this.exppDate = this.formateDate(this.exppDate);
          console.log("**************eff Date: " + this.effDate + "  " + this.exppDate);

          // private String laneCode;

          //
          let data = {

            "Servprov": excelRawData[i].servprov,
            "Source Loc": excelRawData[i].sourceLoc,
            "Dest Loc": excelRawData[i].destLoc,
            "Truck Type": excelRawData[i].truckType,
            "variant 1": excelRawData[i].variant1,
            "Freight": excelRawData[i].baseFreight,
            "Curr": excelRawData[i].baseFreightUom,
            "Basis": excelRawData[i].basis,
            "Status": excelRawData[i].status,
            "Prev Rate": excelRawData[i].previousRate,
            "Diff": excelRawData[i].diff,
            "Percentage (%)": excelRawData[i].percentile,
            "Eff Date": excelRawData[i].effectiveDate ? this.trimDate(excelRawData[i].effectiveDate) : null,
            "Exp Date": excelRawData[i].expiryDate ? this.trimDate(excelRawData[i].expiryDate) : null,
            "TT Days": excelRawData[i].ttDays,
            "Distance": excelRawData[i].distance,
            "variant 2": excelRawData[i].variant2,
            "Rate Type": excelRawData[i].rateType,
            "Loading": excelRawData[i].loading,
            "UnLoading": excelRawData[i].unloading,
            "Sap Code": excelRawData[i].transporterSapCode,
            "Source Desc": excelRawData[i].sourceDesc,
            "Dest Desc": excelRawData[i].destDesc,
            "Min Value": excelRawData[i].minValue,
            "Min Value Uom": excelRawData[i].minValueUom,
            "Mode": excelRawData[i].transportMode,
            "Src Type": excelRawData[i].sourceType,
            "Others1": excelRawData[i].others1,
            "Tot Expense": excelRawData[i].totExpense,
            "Pay Transporter": excelRawData[i].payTransporter,
            "Others1 Code": excelRawData[i].others1Code,
            "Others2": excelRawData[i].others2,
            "Others2 Code": excelRawData[i].others2Code,
            "Others3": excelRawData[i].others3,
            "Others3 Code": excelRawData[i].others3Code,
            "Insert User": excelRawData[i].insertUser,
            "Insert Date": excelRawData[i].insertDate ? this.trimDate(excelRawData[i].insertDate) : null,
            "Approval L1 Date": excelRawData[i].approval1Date ? this.trimDate(excelRawData[i].approval1Date) : null,
            "Approval L2 Date": excelRawData[i].approval2Date ? this.trimDate(excelRawData[i].approval2Date) : null,
            "Remarks" : excelRawData[i].remarks
            // "Lane Code": excelRawData[i].laneCode,
            // "Approval1 User": excelRawData[i].approval1User,
            // "Approval2 User": excelRawData[i].approval2User,
            // "Update User": excelRawData[i].updateUser,
            // "Update Date": excelRawData[i].updateDate,
            // "Rate Record Id": excelRawData[i].rateRecordId,

          }
          console.log("PUSH:  " + data);
          newExcelData.push(data)
        }
        const workBook = XLSX.utils.book_new(); // create a new blank book
        const workSheet = XLSX.utils.json_to_sheet(newExcelData);
        XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
        XLSX.writeFile(workBook, 'Mt-Freight.xlsx');
        this.isLoading = false;
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


  // Refresh data
  refreshData() {
    this.isLoading = true;
    this.clearAll();
    this.index = 0;
    this.page.offset = 0;
    this.table.offset = 0;
    this.setDefaultStatus();
    this.selected = [];
    let data = {
      transporterSapCode: this.transporterSapCode,
      servprov: this.servprov,
      sourceLoc: this.sourceLoc,
      sourceDesc: this.sourceDesc,
      destLoc: this.destLoc,
      destDesc: this.destDesc,
      truckType: this.truckType,
      condition1: this.condition1,
      effectiveDate: this.effectiveDate,
      expiryDate: this.expiryDate,
      ttDays: this.ttDays,
      baseFreight: this.baseFreight,
      status: this.status,
      index: this.index,
      pageLength: this.page.limit,
    }

    //isL1Manager isL1Manager
    this.displayBtn = true;


    if (this.isL1Manager == true) {
      if (this.status && this.status != null && this.status != '') {
        if (this.status === "Unapproved") {
          this.buttonLable = "L1 Approve"
          this.displayBtn = true;
        }
        else if (this.status === "Level1 Approved") {
          this.buttonLable = "L2 Approve"
          this.displayBtn = false;
        }
        else if (this.status === "Level2 Approved") {
          this.isDisable = false;
          this.displayBtn = false;
        }
      } else {
        this.displayBtn = false;
      }
    }

    if (this.isL2Manager == true) {
      if (this.status && this.status != null && this.status != '') {

        if (this.status === "Unapproved") {
          this.displayBtn = false;
        }
        else if (this.status === "Level1 Approved") {
          this.buttonLable = "L2 Approve"
          this.displayBtn = true;
        }

        else if (this.status === "Level2 Approved") {
          // this.buttonLable="L2 Approved"
          // this.disableButton="disabled";
          // this.isDisable=true;
          this.displayBtn = false;
        }
      } else {
        this.displayBtn = false;
      }
    }
    this.searchFilter(data);
    // let data = {
    //   transporterSapCode: this.transporterSapCode,
    //   servprov: this.servprov,
    //   sourceLoc: this.sourceLoc,
    //   sourceDesc: this.sourceDesc,
    //   destLoc: this.destLoc,
    //   destDesc: this.destDesc,
    //   truckType: this.truckType,
    //   condition1: this.condition1,
    //   effectiveDate: this.effectiveDate,
    //   expiryDate: this.expiryDate,
    //   ttDays: this.ttDays,
    //   baseFreight: this.baseFreight,
    //   status: this.status,
    //   index : this.index
    // }
    // this.service.post_service(ApiserviceService.apisList.getFreights, data).subscribe(response => {
    //   if (response['statusCode'] == 200) {
    //     this.mtFreightList = [];
    //     let responseData = response['data'].items;
    //     this.mtFreightList = responseData;
    //     this.mtFreightList = [...this.mtFreightList];
    //     this.page.count = response['data'].total;
    //     // this.page.limit = response['data'].pageLength;
    //     this.isLoading = false;
    //   } else {
    //     this.isLoading = false;
    //     this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
    //   }
    // }, (err) => {
    //   this.toastr.error(err ? err : "Something went wrong..", "Error!");
    //   this.isLoading = false;
    // })

  }




  doSearchFilter() {
    this.displayBtn = false;
    this.isCheckedAll = false;
    this.isDisable = false;
    this.buttonLable = "";
    this.selected = [];
    this.table.offset = 0;
    this.page.offset = 0;
    this.index = 0;
    //this.page.offset=0;
    console.log(" PAGE DETAILS***********" + JSON.stringify(this.page));
    console.log(" PAGE DETAILS page.offset***********" + JSON.stringify(this.page.offset));
    // console.log("status:  "+this.status);
    let data = {
      transporterSapCode: this.transporterSapCode,
      servprov: this.servprov,
      sourceLoc: this.sourceLoc,
      sourceDesc: this.sourceDesc,
      destLoc: this.destLoc,
      destDesc: this.destDesc,
      truckType: this.truckType,
      condition1: this.condition1,
      effectiveDate: this.effectiveDate,
      expiryDate: this.expiryDate ? moment(new Date(this.expiryDate)).format("DD-MM-YYYY") : null,
      ttDays: this.ttDays,
      baseFreight: this.baseFreight,
      status: this.status,
      index: this.index,
      pageLength: this.page.limit,
      // toInsertDate:this.toInsertDate,
      // fromInsertDate : this.fromInsertDate,
      toInsertDate: this.toInsertDate ? moment(new Date(this.toInsertDate)).format("DD-MM-YYYY") : null,
      fromInsertDate: this.fromInsertDate ? moment(new Date(this.fromInsertDate)).format("DD-MM-YYYY") : null,
      expiryDateFilterType:this.filterExpiryDate,
      fromExpiryDate : this.fromExpiryDate ? moment(new Date(this.fromExpiryDate)).format("DD-MM-YYYY") : null,
      toExpiryDate : this.toExpiryDate ? moment(new Date(this.toExpiryDate)).format("DD-MM-YYYY") : null,
    }

    //isL1Manager isL1Manager
    this.displayBtn = true;


    if (this.isL1Manager == true) {
      if (this.status && this.status != null) {
        if (this.status === "Unapproved") {
          this.buttonLable = "L1 Approve"
          this.displayBtn = true;
        }
        else if (this.status === "Level1 Approved") {
          this.buttonLable = "L2 Approve"
          this.displayBtn = false;
        }
        else if (this.status === "Level2 Approved") {
          this.isDisable = false;
          this.displayBtn = false;
        }
      } else {
        this.displayBtn = false;
      }
    }

    if (this.isL2Manager == true) {
      if (this.status && this.status != null) {
        if (this.status === "Unapproved") {
          this.displayBtn = false;
        }
        else if (this.status === "Level1 Approved") {
          this.buttonLable = "L2 Approve"
          this.displayBtn = true;
        }

        else if (this.status === "Level2 Approved") {
          // this.buttonLable="L2 Approved"
          // this.disableButton="disabled";
          // this.isDisable=true;
          this.displayBtn = false;
        }
      } else {
        this.displayBtn = false;
      }
    }
    let insertFilter : boolean = false
    let expiryFilter : boolean = false
    if (this.fromInsertDate != '' && this.fromInsertDate != null) {
      if (this.toInsertDate != '' && this.toInsertDate != null) {
        insertFilter = true;
      } else {
        this.toastr.error("Please select to Date");
        insertFilter = false;
      }
    } else {
      insertFilter = true;
    }

    if (this.fromExpiryDate != '' && this.fromExpiryDate != null) {
      if (this.toExpiryDate != '' && this.toExpiryDate != null) {
        expiryFilter = true;
      } else {
        this.toastr.error("Please select to Date");
        expiryFilter = false;
      }
    } else {
      expiryFilter = true;
    }

    if(insertFilter && expiryFilter){
      this.searchFilter(data)
    }

  }

  searchFilter(data) {
    this.isLoading = true;
    this.mtFreightList = [];
    console.log("SUMBMITTING FILTER DATA:  \n " + JSON.stringify(data));
    console.log(" PAGE DETAILS***********" + JSON.stringify(this.page));
    this.service.post_service(ApiserviceService.apisList.getFreights, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        // console.log("Error", err);
        this.mtFreightList = response['data'].freights;
        let responseArray = [...response['data'].freights];
        this.page.count = response['data'].total;
        // Formating the  expiry date
        responseArray.forEach(element => {
          // Find the index to update
          let index = this.mtFreightList.findIndex(ele => element.id == ele.id);
          // add new column in the object "selectedExpiryDate" for date autopopulate for datepicker
          let gettheDate = element.expiryDate;
          if (gettheDate != null && gettheDate != '') {
            // let splittedData = gettheDate.split("/");
            // let createNewDate = splittedData[1] + "/" + splittedData[0] + "/" + splittedData[2];
            let dateFormat = new Date(gettheDate);
            element.selectedExpiryDate = dateFormat.toISOString();
            if (index > -1) {
              this.mtFreightList[index] = element;
            }
          }
        });
        this.mtFreightList = [...this.mtFreightList];
        //  console.log("FRIEGHTS LIST: "+this.mtFreightList);
        console.log("FRIEGHTS LIST: " + JSON.stringify(this.mtFreightList));
        this.isLoading = false;
      } else {
        this.toastr.error("Didnot get response..", "Error!");
        this.isLoading = false;
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }




  // clear data
  clearAll() {
    this.transporterSapCode = '';
    this.servprov = "";
    this.sourceLoc = "";
    this.sourceDesc = '';
    this.destLoc = '';
    this.destDesc = '';
    this.truckType = '';
    this.condition1 = '';
    this.effectiveDate = '';
    this.expiryDate = '';
    this.ttDays = '';
    this.baseFreight = '';
    this.status = '';
    this.toInsertDate = '';
    this.fromInsertDate = '';
    this.toInsert = '';
    this.fromInsert = '';
    this.indentDate = '';
    this.filterExpiryDate = null;
    this.fromExpiryDate = null;
    this.toExpiryDate = null;
    this.showToAndFromExpDate = false;
    /* if (this.userRole === "L1_MGR") {
      this.status = "Unapproved";
    }else if (this.userRole === "L2_MGR") {
      this.status = "Level1 Approved";
    }else{
      this.status = "Level2 Approved";
    } */
  }

  showExpiryDate(){
    if(this.filterExpiryDate && this.filterExpiryDate == 'BETWEEN'){
      return true;
    }else{
      return false;
    }
  }






  updateValue(row, event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    let mtItemIndex = this.mtFreightList.findIndex(data => data.id == row.id)
    console.log(cell);
    this.mtFreightList[mtItemIndex][cell] = event.target.value;

    this.mtFreightList = [...this.mtFreightList];
    console.log('UPDATED!', this.mtFreightList);
  }

  setPage(pageInfo) {
    this.allRowsSelected = false;
    this.isCheckedAll = false;
    this.currentPageIndex = pageInfo.offset;
    console.log("***" + JSON.stringify(pageInfo));
  }

  // selectAllRows(event){
  //   if(event.target.checked) {
  //     this.isCheckedAll=true;
  //     console.log("...Current Page Number "+this.currentPageIndex);
  //   } else{
  //     this.isCheckedAll=false;
  //    // console.log("...un checked " +this.isCheckedAll);
  //   }
  // }

  // //USER ROW SELECTION SUBMITION
  // modifyFreightItem(row, event) {
  //   console.log("EVENT ROW: "+JSON.stringify(row));
  //   console.log("---------------" +this.mtFreightCheckedList);
  //   if(event.target.checked) {
  //     if(this.selectionSubmitFlag){
  //       this.mtFreightCheckedList=[];
  //       this.selectionSubmitFlag=false;
  //     }
  //     console.log("...checked "+row.id);
  //      if(this.mtFreightCheckedList.length>0){
  //        for(var i=0 ; i < this.mtFreightCheckedList.length; i++) {
  //          if(this.mtFreightCheckedList[i].id!=row.id){
  //            this.mtFreightCheckedList.push(row);
  //         }
  //        }
  //      }
  //      else{
  //       this.mtFreightCheckedList.push(row);
  //      }
  //   } else{
  //     console.log("...un checked " +row.id);
  //     if(this.mtFreightCheckedList.length>0){
  //       for(var i=0 ; i < this.mtFreightCheckedList.length; i++) {
  //         if(this.mtFreightCheckedList[i].id===row.id){
  //           this.mtFreightCheckedList.splice(i,1);
  //       }
  //       }
  //     }
  //   }
  //   console.log("---------------" +this.mtFreightCheckedList.length);
  //   //this.callAPI(this.mtFreightCheckedList);
  // }

  onSelect(event, data) {
    if (event.target.checked) {
      // if the checkbox checked we need update plan Qty based on the status
      // if the status  APPROVAL PENDING  we need populate Plan Qty
      // if the sattus  APPROVAL_PART we need update only UnAppr QTY

      this.mtFreightCheckedList.push(data);
    } else {
      let index = this.mtFreightCheckedList.indexOf(data);
      this.mtFreightCheckedList.splice(index, 1);
    }
    console.log("select", this.mtFreightCheckedList);

  }
  onSelectAll(event) {
    this.mtFreightCheckedList = [];
    this.mtFreightList.forEach(data => {
      this.onSelect(event, data);
    });
    console.log("select All", this.mtFreightCheckedList);

  }




  selectionSubmitFlag: boolean = false;
  // MULTI SUBMITION
  approveStatusSubmit(submitSelectionLabel) {
    this.isLoading = true;

    this.minRecordIndex = 0;
    this.maxRecordIndex = 0;
    console.log("***** SUBMITTING SELECTED RECORDS  " + submitSelectionLabel);

    //SELECT ALL OPTION
    if (this.isCheckedAll) {
      this.mtFreightCheckedList = [];
      if (this.currentPageIndex === 0) {
        this.minRecordIndex = 0;
        this.maxRecordIndex = this.page.limit;
      } else {
        this.minRecordIndex = this.currentPageIndex * this.page.limit;
        this.maxRecordIndex = this.minRecordIndex + this.page.limit;
      }
      this.mtFreightCheckedList = this.mtFreightList.slice(this.minRecordIndex, this.maxRecordIndex);
      this.callAPI(this.mtFreightCheckedList, submitSelectionLabel);

    }

    // CUSTOM SELECTED ROWS LIST
    else {
      this.callAPI(this.mtFreightCheckedList, submitSelectionLabel);
    }
    this.selectionSubmitFlag = true;
  }




  callAPI(freightsList, submitSelectionLabel) {
    console.log("call api function selected records: " + freightsList.length)

    for (var i = 0; i < freightsList.length; i++) {
      // delete freightsList[i].test.id;
      if (submitSelectionLabel === "L1 Approve")
        freightsList[i].status = "Level1 Approved";
      if (submitSelectionLabel === "L2 Approve")
        freightsList[i].status = "Level2 Approved";
      if (submitSelectionLabel === "L2 Approved")
        this.disableButton = "disabled"
      //console.log("UPDATED JSON "+JSON.stringify(freightsList[i]))
      // if(submitSelectionLabel==="L2 Approved ")
      // this.mtFreightCheckedList[i].status="L1 Approved";
    }

    let freightData = {
      freights: freightsList
    }
    console.log("SUBMITTING freightData", JSON.stringify(freightData));
    this.service.post_service(ApiserviceService.apisList.updateFreight, freightData).subscribe(response => {

      // this.planData = JSON.stringify(this.responseData);
      console.log("RESPONSE CODE", response['statusCode']);
      if (response['statusCode'] == 200) {
        this.responseData = response['data'];
        console.log("resposne", this.responseData);
        this.toastr.success(response['message']);
        this.totalRecords = this.responseData['totalRecords'];
        this.refreshData();
        console.log("totalRecords " + this.totalRecords);
        this.gotResponse = true;
        if (this.ErrorData != undefined && this.ErrorData.length > 0) {
          this.totalErrorRecords = this.ErrorData.length;
          console.log("ErrorData " + this.ErrorData.length);
        }
        // this.isLoading = false;
      } else {
        this.isLoading = false;
        //this.openDialog(response['data'])
        this.ErrorData = response['data'];
      }

      this.mtFreightCheckedList = [];
    },
      (err) => {
        console.log("Error", err);
        this.toastr.error("Something went wrong..", "Error!");
        this.isLoading = false;
      })
  }

  isShowDeleteFreight(row) {
    if ((this.userRole === "L1_MGR") || (this.userRole === "L2_MGR") || (this.userRole === "ADMIN")) {
      // Once L2 is approved the freight and some one modified the fretaight details then status will be Unapproved 
      // but the record cannot be deleted becoz the record is already stored in OTM/SAP
      // So once the record is approved by L2 it cannot be deleted but it can be modified
      if (row.status !== 'Level2 Approved' && (row.approval2User === null || row.approval2User === '')) {
        return true;
      }
    }
    return false;
  }


  addEvent(type, event) {
    if (event.target.value) {
      /* Checking if selected from date greater than to date.
     Clearing the toDate field when from date greater than to date */
      if (this.toInsertDate && (this.fromInsertDate > this.toInsertDate)) {
        this.toInsertDate = '';
      }
    }
  }

  addEventExpDate(type, event) {
      console.log(event.value)
      console.log("------>To Date", this.toExpiryDate);
      let checkToDate: any = this.toExpiryDate;
      console.log("Check--->1", checkToDate);
      if (this.toExpiryDate == this.currentDateAsString) {
        // on page load we are defaluting the  to date with string. Comparing string with date is not possible
        // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
        checkToDate = new Date();
        console.log("Check--->2", checkToDate);
  
      }
      /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
      if (event.target.value) {
        if (this.toExpiryDate && (this.fromExpiryDate > checkToDate)) {
          this.toExpiryDate = '';
        }
      }
      // this.toDate = '';
  }

  expiryFilterType(key){
    if(key && key == 'BETWEEN'){
      this.showToAndFromExpDate = true;
    }else{
      this.showToAndFromExpDate = false;
    }
  }

  rowlevelDeleteFreight(row) {
    if (row.status === "Level2 Approved") {
      this.toastr.error("You cannot delete the record as it is already approved by L2_MGR!", "Error!");
    }
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.deleteFreight + '?rowId=' + row.id).subscribe(response => {
      if (response['statusCode'] == 200) {
        var deletedRow = response['data'];
        let index = this.mtFreightList.findIndex(item => item.id == deletedRow);
        this.mtFreightList.splice(index, 1);
        this.mtFreightList = [...this.mtFreightList]
        this.toastr.success(response['message'] ? response['message'] : 'Something went wrong!');
        this.isLoading = false;
        $("#confirmDelete").modal('hide');
      } else {
        this.toastr.error(response['message'] ? response['message'] : 'Something went wrong!', "Error!");
        $("#confirmDelete").modal('hide');
        this.isLoading = false;
      }
    }, err => {
      this.toastr.error('Something went wrong!', "Error!");
      this.isLoading = false;
      $("#confirmDelete").modal('hide');
    });

  }
  isActionVisible() {
    if ((this.userRole === "L1_MGR") || (this.userRole === "L2_MGR") || (this.userRole === "ADMIN")) {
      return true;
    }
    return false;
  }

  rowLevelModifyFreight(row) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.updateFreightDetails, row).subscribe(response => {
      if (response['statusCode'] == 200) {
        let updateRow = response['data'];
        let index = this.mtFreightList.findIndex(item => item.id === updateRow.id);
        if (index > -1) {
          updateRow.selectedExpiryDate = updateRow.expiryDate ? new Date(updateRow.expiryDate).toISOString() : null;
          this.mtFreightList[index] = updateRow;
          this.editing = {};
        }
        this.mtFreightList = [...this.mtFreightList];
        this.toastr.success(response['message'] ? response['message'] : 'Row updated successfully');
        this.isLoading = false;
      } else {
        this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
        this.isLoading = false;
      }
    }, err => {
      this.toastr.error(err['message'] ? err['message'] : 'Something went wrong...', 'Error!');
      this.isLoading = false;
    })
  }
  returnFormateDate(data) {
    let formatted = new Date(data),
      mnth = ("0" + (formatted.getMonth() + 1)).slice(-2),
      day = ("0" + formatted.getDate()).slice(-2);
    return [day, mnth, formatted.getFullYear()].join("/");
  }

  updateExpiryDateAtRow(row, event, rowIndex) {
    let s = { ...row };
    if (event.target.value) {
      console.log(event.target.value);
      let index = this.mtFreightList.findIndex(item => item.id === s.id);
      this.mtFreightList[index]['expiryDateString'] = this.returnFormateDate(event.target.value);
      let splittedData = this.mtFreightList[index]['expiryDateString'].split("/");
      let createNewDate = splittedData[1] + "/" + splittedData[0] + "/" + splittedData[2]
      this.mtFreightList[index]['selectedExpiryDate'] = new Date(createNewDate).toISOString();

      // this.mtFreightList[index].expiryDateString = s.selectedExpiryDate ? moment(new Date(s.selectedExpiryDate)).format("DD/MM/YYYY") : null;
      this.mtFreightList[index].isUpdateExpiryDate = true;
      this.mtFreightList[index].showSaveButton = true;
    }
    this.mtFreightList = [...this.mtFreightList];
    console.log("row", row);
    console.log("list", this.mtFreightList);


  }

  showSaveButton(event, row) {
    if (event.target.value) {
      row.showSaveButton = true;
    }
  }

  formatEffectiveDate(effective) {
    let gettheDate = this.trimDate(effective);
    let splittedData = gettheDate.split("-");
    let createNewDate = splittedData[1] + "/" + splittedData[0] + "/" + splittedData[2]
    // Formatted new key for autopopulation of date for datepicker
    return new Date(createNewDate).toISOString();
  }

  confirmDeleteAction(row) {
    this.selectedRow = { ...row };
    $("#confirmDelete").modal('show');
  }

  showIntegrationMessage(rowdata) {
    this.remarks = rowdata.remarks;
    $('#integrationMsgModal').modal('show');
  }

}





//console.log("--------------- total list size " +  this.mtFreightList.length);
// console.log("---------------INITIAL LENGTH= " +this.mtFreightCheckedList.length);
// console.log("--------------- this.currentPageIndex " + this.currentPageIndex);
//         console.log("***** this.isCheckedAll IF this.minRecordIndex "+this.minRecordIndex)
//         console.log("***** this.isCheckedAll IF this.maxRecordIndex "+this.maxRecordIndex)

//else
// console.log("***** this.currentPageIndex "+this.currentPageIndex)
//console.log("***** this.isCheckedAll else this.minRecordIndex "+this.minRecordIndex)
 //       console.log("***** this.isCheckedAll else this.maxRecordIndex "+this.maxRecordIndex)
 // console.log("---------------" +this.mtFreightCheckedList.length);