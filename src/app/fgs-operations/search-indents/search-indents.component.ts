import { HelperServiceService } from './../../services/helper-service/helper-service.service';
import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { APP_DATE_FORMATS, AppDateAdapter } from '../../public/date.adapters';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { constants } from 'src/app/constants';
import * as moment from 'moment'
import { DatatableComponent } from '@swimlane/ngx-datatable';

declare var $: any;
@Component({
  selector: 'app-search-indents',
  templateUrl: './search-indents.component.html',
  styleUrls: ['./search-indents.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class SearchIndentsComponent implements OnInit, DoCheck {

  index: number;
  materialGrpList: any[];
  transporterList: any[];
  destinationList: any[];
  isLoading: boolean = false;
  indentData = [];
  commentMsg: string;
  commentHeader: string;
  indentDate = '';
  indentId = '';
  transporter = '';
  source = '';
  destination = '';
  truckType = [];
  materialGrp = [];
  count: number = 0;
  totalIndentedCount: number = 0;
  totalCancelledCount: number = 0;
  totalNetIndentCount: number = 0;
  totalNetBalanceCount: number = 0;
  totalConfirmedCount: number = 0;
  totalDeclinedCount: number = 0;
  totalToBeConfirmedCount: number = 0;
  totalReportedCount: number = 0;
  totalRejectedCount: number = 0;
  totalVIewIndentData = [];
  toBeConfirmedCount: number = 0;
  IsShow: boolean = true;
  states: State[] = [
    { value: 'dlr-0', viewValue: 'DLR' },
    { value: 'gjr-1', viewValue: 'GJR' }
  ];
  page = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  statuses = [];
  status = [];
  createIndentSuccess = false;
  userRoles: any;
  destinationDesc: any;
  descriptionList = [];
  categoryList = [];
  truckList = [];
  currentDate = this.helperService.getTodayDate();
  currentDateAsString = this.helperService.getTodayDateASString();
  fromDispatchDate: string = '';
  toDispatchDate: string = '';
  toDate: string = '';
  fromDate: string = '';
  selected = [];
  sourceList: any[];
  check_Role_DP_REP: string;
  sourceCode: any;
  freezeLeftValue: boolean = true;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService,
    private helperService: HelperServiceService
  ) { }
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
    localStorage.setItem("userMenu", "fgs-indents");
    this.userRoles = constants.roles;
    this.statuses = constants.indent_Filter_status_list;
    this.check_Role_DP_REP = this.service.checkRole();
    // fromDispatchDate: string = '';
    // toDispatchDate: string = '';
    // toDate: string = '';
    // fromDate: string = '';
    //for getting view indent Data from server
    let bodyData = {
      'fromDispatchDate': this.currentDate,
      'toDispatchDate': this.currentDate
    };
    this.fromDate = this.currentDateAsString;
    this.toDate = this.fromDate;
    this.getViewIndentData(bodyData);

    //for getting category master data
    this.getCategoryMasterData();

    // for getting truck type master
    this.getTruckTypeMasterData();
  }

  //for getting view indent Data from server
  getViewIndentData(bodyData) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.viewSearchIndents, bodyData).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.clearAllSum();
        this.indentData = response['data'].indents;
        for (let item of this.indentData) {
          if ((item.netRequested) < (item.confirmed + item.declined)) {
            item['toBeConfirmed'] = 0;
          } else {
            item['toBeConfirmed'] = (item.netRequested) - (item.confirmed + item.declined);
          }
        }
        this.indentData = [...this.indentData];
        this.page.count = response['data'].total;
        this.page.limit = response['data'].pageLength;
        this.isLoading = false;
      } else {
        this.toastr.error(response['message'], "!Error");
        this.isLoading = false;
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  onSelect(event, row) {
    if (event.target.checked) {
      this.totalVIewIndentData.push(row);
    } else {
      let index = this.totalVIewIndentData.indexOf(row);
      this.totalVIewIndentData.splice(index, 1);
    }
    this.totalCancelledCount = this.totalVIewIndentData.reduce((sum, { cancelled }) => sum + cancelled, 0)
    this.totalConfirmedCount = this.totalVIewIndentData.reduce((sum, { confirmed }) => sum + confirmed, 0)
    this.totalDeclinedCount = this.totalVIewIndentData.reduce((sum, { declined }) => sum + declined, 0)
    this.totalIndentedCount = this.totalVIewIndentData.reduce((sum, { indented }) => sum + indented, 0)
    this.totalRejectedCount = this.totalVIewIndentData.reduce((sum, { rejected }) => sum + rejected, 0)
    this.totalReportedCount = this.totalVIewIndentData.reduce((sum, { reported }) => sum + reported, 0)
    this.totalNetIndentCount = this.totalVIewIndentData.reduce((sum, { netRequested }) => sum + netRequested, 0);
    this.totalNetBalanceCount = this.totalVIewIndentData.reduce((sum, { netBalance }) => sum + netBalance, 0);
    this.totalToBeConfirmedCount = this.totalVIewIndentData.reduce((sum, { toBeConfirmed }) => sum + toBeConfirmed, 0)
    console.log('totalViewIndentData', this.totalVIewIndentData);
  }

  //set value destination
  setDestination(value) {
    //  this.destinationDesc = value;
    this.destination = value;
  }
  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }

  //set value to destination description
  setDestDescription(value) {
    this.destinationDesc = value;
  }

  //show Comments in Modal
  showComments(comments, type) {
    if (type == 'loadslip') {
      this.commentHeader = 'Loadslip Comments'
    }
    else {
      this.commentHeader = 'Comments'
    }
    this.commentMsg = comments;
    $('#commentModal').modal('show');
  }


  onSelectAll(event) {
    this.totalIndentedCount = 0;
    this.totalCancelledCount = 0;
    this.totalConfirmedCount = 0;
    this.totalDeclinedCount = 0;
    this.totalRejectedCount = 0;
    this.totalReportedCount = 0;
    this.totalNetIndentCount = 0;
    this.totalNetBalanceCount = 0;
    this.totalToBeConfirmedCount = 0;
    this.totalVIewIndentData = [];
    this.indentData.forEach(data => {
      this.onSelect(event, data);
    });
  }

  clearAllSum() {
    this.totalCancelledCount = 0;
    this.totalConfirmedCount = 0;
    this.totalDeclinedCount = 0;
    this.totalIndentedCount = 0;
    this.totalRejectedCount = 0;
    this.totalReportedCount = 0;
    this.totalNetIndentCount = 0;
    this.totalNetBalanceCount = 0;
    this.totalToBeConfirmedCount = 0;
  }


  //for getting category master data
  getCategoryMasterData() {
    this.service.get_service(ApiserviceService.apisList.categoryMasterData).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.categoryList = response['data'];
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "!Error");
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
    })
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
    })
  }


  //Show Filter 
  showFilter() {
    this.IsShow = !this.IsShow
  }

  //get filter destination result
  getfilterDestination(event) {
    this.destinationDesc = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        this.destinationList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  getUserDestinationList(event) {
    this.destination = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.getDestinationDescriptionDataList + event.target.value).subscribe(response => {
        if (response['data']) {
          this.descriptionList = response['data'].searchResult;
        }
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  // filter Transporter details
  getfilterTransporter(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.transporterList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?transporter=' + filtervalue).subscribe(response => {
        this.transporterList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  //filter material group
  getfilterMaterialGrp(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.materialGrpList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?materialGrp=' + filtervalue).subscribe(response => {
        this.materialGrpList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  //clear the data
  clearAll() {
    this.fromDate = '';
    this.toDate = '';
    this.destination = '';
    this.destinationDesc = '';
    this.descriptionList = [];
    this.destinationList = [];
    this.truckType = [];
    this.transporter = '';
    this.transporterList = [];
    this.materialGrp = [];
    this.materialGrpList = [];
    this.indentId = '';
    this.status = [];
    this.sourceCode = '';
    this.sourceList = [];
  }


  //refersh
  refresh() {
    this.table.offset = 0;
    this.clearAll();
    this.clearAllSum();
    this.defaultIndentCount();
    this.selected = [];
    this.fromDate = this.currentDateAsString;
    this.toDate = this.fromDate;
    let bodyData = {
      'fromDispatchDate': this.currentDate,
      'toDispatchDate': this.currentDate
    };
    this.getViewIndentData(bodyData);
  }


  //export excel data
  export(): void {
    if (this.indentData.length > 0) {
      this.isLoading = true;
      this.forDateValidation();
      let data = {
        'fromDispatchDate': this.fromDispatchDate,
        'toDispatchDate': this.toDispatchDate,
        'destination': this.destination,
        // 'index': this.index,
        'indentID': this.indentId,
        'materialGrp': this.materialGrp,
        'transporter': this.transporter,
        'truckType': this.truckType,
        'pageLength': this.page.count,
        'status': this.status,
        'source': this.sourceCode
      }
      // this.service.post_service_DownLoadExcel(ApiserviceService.apisList.viewSearchIndents, data).subscribe(response => {
      this.service.post_service(ApiserviceService.apisList.viewSearchIndents, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          // Uncomment when export excel is gernerated in backend
          // var blob = new Blob([response.body], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
          // var filename = 'IndentsData.xlsx';
          // const link = window.URL.createObjectURL(blob);
          // const a = document.createElement('a');
          // document.body.appendChild(a);
          // a.setAttribute('style', 'display: none');
          // a.href = link;
          // a.download = filename
          // a.click();
          // window.URL.revokeObjectURL(link);
          // a.remove();

          let newViewPlanData = response['data'].indents;
          let excelRawData = newViewPlanData;
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            if ((excelRawData[i].netRequested) < (excelRawData[i].confirmed + excelRawData[i].declined)) {
              excelRawData[i]['toBeConfirmed'] = 0;
            } else {
              excelRawData[i]['toBeConfirmed'] = (excelRawData[i].netRequested) - (excelRawData[i].confirmed + excelRawData[i].declined);
            }
            let data = {
              "Source": excelRawData[i].SouceLocation,
              "Dispatch Date": this.service.customDateFormat(excelRawData[i].dispatchDate),
              "Destination": excelRawData[i].destination,
              "Dest Description": excelRawData[i].destDis,
              "Truck/Container Type": excelRawData[i].truckType,
              "Transporter": excelRawData[i].transporter,
              "Created Date": this.service.customDateTimeFormat(excelRawData[i].insertDate),
              "Port Of Discharge": excelRawData[i].pod,
              "Country Of Destination": excelRawData[i].destCountryName,
              "Indent Id": excelRawData[i].indentId,
              "Freight Available": excelRawData[i].isFreightAvailable,
              "Category": excelRawData[i].materailGrp,
              "Indented": +excelRawData[i].indented,
              "Cancelled": +excelRawData[i].cancelled,
              "Net Indented": +excelRawData[i].netRequested,
              "Trans Confirmed": +excelRawData[i].confirmed,
              "Trans Declined": +excelRawData[i].declined,
              "To Be Confirmed": +excelRawData[i].toBeConfirmed,
              "Reported": +excelRawData[i].reported,
              "Rejected": +excelRawData[i].rejected,
              "Net Balance": +excelRawData[i].netBalance,
              "Indent Age (Days)": +excelRawData[i].indentAge,
              "Status": excelRawData[i].status,
              "Insert User": excelRawData[i].insertUser,
              "Update User": excelRawData[i].updateUser,
              "Comments": excelRawData[i].comments
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'ViewIndents.xlsx');
          this.isLoading = false;
        } else {
          this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
          this.isLoading = false;
        }
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      });
    } else {
      this.toastr.error("No records found to export", "Error!");
    }


  }

  addEvent(type, event) {
    if (event.target.value) {
      /* Checking if selected from date greater than to date.
     Clearing the toDate field when from date greater than to date */
      let checkToDate: any = this.toDate;
      console.log("Check--->1", checkToDate);
      if (this.toDate == this.currentDateAsString) {
        // on page load we are defaluting the  to date with string. Comparing string with date is not possible
        // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
        checkToDate = new Date();
        console.log("Check--->2", checkToDate);

      }
      if (this.toDate && (this.fromDate > checkToDate)) {
        this.toDate = '';
      }
      // this.toDate = '';
    }
  }


  defaultIndentCount() {
    this.totalIndentedCount = 0;
    this.totalCancelledCount = 0;
    this.totalConfirmedCount = 0;
    this.totalDeclinedCount = 0;
    this.totalRejectedCount = 0;
    this.totalReportedCount = 0;
    this.totalNetIndentCount = 0;
    this.totalNetBalanceCount = 0;
    this.totalToBeConfirmedCount = 0;
    this.totalVIewIndentData = [];
  }

  // Date Validation
  forDateValidation() {
    if (this.fromDate != '' && this.fromDate != null) {
      this.fromDispatchDate = moment(new Date(this.fromDate)).format("DD/MM/YYYY");
    } else {
      this.fromDispatchDate = '';
    }
    if (this.toDate != '' && this.toDate != null) {
      this.toDispatchDate = moment(new Date(this.toDate)).format("DD/MM/YYYY");
    } else {
      this.toDispatchDate = '';
    }
  }
  // datatables with server side pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.forDateValidation();
    this.defaultIndentCount();
    this.clearAllSum();
    this.selected = [];
    let bodyData = {
      'fromDispatchDate': this.fromDispatchDate,
      'toDispatchDate': this.toDispatchDate,
      'index': pageInfo.offset,
      'pageLength': pageInfo.pageSize,
      'indentID': this.indentId,
      'materialGrp': this.materialGrp,
      'transporter': this.transporter,
      'truckType': this.truckType,
      'status': this.status,
      "source": this.sourceCode
    }
    this.getViewIndentData(bodyData);
  }

  //Indent Search API
  indentSearch() {
    this.table.offset = 0;
    this.forDateValidation();
    this.defaultIndentCount();
    this.selected = [];
    let bodyData = {
      'fromDispatchDate': this.fromDispatchDate,
      'toDispatchDate': this.toDispatchDate,
      'indentID': this.indentId,
      'materialGrp': this.materialGrp,
      'transporter': this.transporter,
      'truckType': this.truckType,
      'destination': this.destination,
      'status': this.status,
      "source": this.sourceCode
    }
    if (this.fromDate != '' && this.fromDate != null) {
      if (this.toDate != '' && this.toDate != null) {
        this.getViewIndentData(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.getViewIndentData(bodyData);
    }
  }

  //send email to the transporter
  sentEmailToTransporter(indentID) {
    let indentIds = [];
    indentIds.push(indentID)
    let data = {
      indentIds
    }
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.sendEmail, data).subscribe(response => {
      if (response['statusCode'] == '200') {

        this.isLoading = false;
        this.toastr.success(response['message']);
      }
      else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  //Download PDF of the indent
  GeneratePdf(indentID) {
    this.isLoading = true;
    let indentIds = [];
    indentIds.push(indentID)
    let data = {
      indentIds
    }
    this.service.post_service(ApiserviceService.apisList.indentPDF, data).subscribe(response => {
      if (response['statusCode'] == '200') {
        let responseData = response['data'];
        const linkSource = 'data:application/pdf;base64,' + responseData;
        var element = document.createElement('a');
        element.setAttribute('href', linkSource);
        element.setAttribute('download', indentID);
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        this.isLoading = false;
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
}

export interface State {
  value: string;
  viewValue: string;
}