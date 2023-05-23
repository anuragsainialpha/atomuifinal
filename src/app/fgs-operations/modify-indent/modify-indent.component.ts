import { HelperServiceService } from './../../services/helper-service/helper-service.service';
import { Component, OnInit, Inject, ViewChild, DoCheck } from '@angular/core';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from "xlsx"
import { DateAdapter, MAT_DATE_FORMATS, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../public/date.adapters';
import { IndentCancelConfirmationComponent } from 'src/app/public/indent-cancel-confirmation/indent-cancel-confirmation.component';
import { constants } from 'src/app/constants';
import * as moment from 'moment';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;
@Component({
  selector: 'app-modify-indent',
  templateUrl: './modify-indent.component.html',
  styleUrls: ['./modify-indent.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class ModifyIndentComponent implements OnInit, DoCheck {
  editing = {};
  index: number;
  materialGrpList: any[];
  transporterList: any[];
  destinationList: any[];
  isLoading: boolean = false;
  indentData = [];
  indentDate = '';
  commentHeader: string;
  commentMsg: string
  indentId = '';
  transporter = '';
  source = '';
  destination = '';
  truckType = [];
  materialGrp = [];
  count: number = 0;
  IsShow: boolean = true;
  totalIndentedCount: number = 0;
  totalCancelledCount: number = 0;
  totalNetIndentCount: number = 0;
  totalConfirmedCount: number = 0;
  totalDeclinedCount: number = 0;
  totalToBeConfirmedCount: number = 0;
  totalReportedCount: number = 0;
  totalRejectedCount: number = 0;
  totalVIewIndentData = [];
  toBeConfirmedCount: number = 0;
  page = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  createIndentSuccess = false;
  DatatableTransporterList: any;
  comments: any;
  statuses = [];
  status=[];
  categoryList = []
  truckList = [];
  selected = [];
  currentDate = this.helperService.getTodayDate();
  currentDateAsString = this.helperService.getTodayDateASString();
  fromDispatchDate: string = '';
  toDispatchDate: string = '';
  toDate: string = '';
  fromDate: string = '';
  check_Role_DP_REP: string;
  userRoles: any;
  sourceList: any[];
  descriptionList: any;
  destinationDesc: any;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  totalNetBalanceCount: number = 0;
  freezeLeftValue: boolean = true;
  constructor(
    private service: ApiserviceService,
    private toastr: ToastrService,
    private helperService: HelperServiceService,
    public dialog: MatDialog
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
    this.statuses = constants.indent_Filter_status_list;
    this.userRoles = constants.roles;
    this.check_Role_DP_REP = this.service.checkRole();
    //for getting modify indent data
    let bodyData = {
      'fromDispatchDate': this.currentDate,
      'toDispatchDate': this.currentDate
    };
    this.fromDate = this.currentDateAsString
    this.toDate = this.fromDate;
    this.getModifyIndentData(bodyData);

    //for getting category master data
    this.getCategoryMasterData();

    // for getting truck type master
    this.getTruckTypeMasterData();
  }
  //for getting modify indent data
  getModifyIndentData(bodyData) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.viewSearchIndents, bodyData).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.clearAllSum();
        this.indentData = response['data'].indents;
        for (let rowData of this.indentData) {
          if ((rowData.netRequested) < (rowData.confirmed + rowData.declined)) {
            rowData['toBeConfirmed'] = 0;
          } else {
            rowData['toBeConfirmed'] = (rowData.netRequested) - (rowData.confirmed + rowData.declined);
          }
        }
        this.indentData = [...this.indentData];
        this.page.count = response['data'].total;
        this.page.limit = response['data'].pageLength;
        this.isLoading = false;
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "!Error");
        this.isLoading = false;
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
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

  // filter Transporter details
  getfilterTransporter(event, typeofFilter) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.transporterList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?transporter=' + filtervalue).subscribe(response => {
        if (typeofFilter == 'SEARCH') {
          this.transporterList = response['data'].searchResult;
        } else {
          this.DatatableTransporterList = response['data'].searchResult;
        }

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
    this.destinationList = [];
    this.truckType = [];
    this.transporter = '';
    this.transporterList = [];
    this.materialGrp = [];
    this.materialGrpList = [];
    this.indentId = '';
    this.status = [];
    this.source = '';
    this.destinationDesc = '';
  }


  //refersh
  refresh() {
    this.table.offset = 0;
    this.clearAll();
    this.clearAllSum();
    this.defaultIndentCount();
    this.selected = [];
    let bodyData = {
      'fromDispatchDate': this.currentDate,
      'toDispatchDate': this.currentDate
    };
    this.fromDate = this.currentDateAsString;
    this.toDate = this.fromDate;
    this.getModifyIndentData(bodyData);
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

  //export excel data
  export(): void {
    if (this.indentData.length > 0) {
      this.isLoading = true;
      this.forDateValidation();
      let data = {
        'fromDispatchDate': this.fromDispatchDate,
        'toDispatchDate': this.toDispatchDate,
        'destination': this.destination,
        'index': this.index,
        'indentID': this.indentId,
        'materialGrp': this.materialGrp,
        'transporter': this.transporter,
        'truckType': this.truckType,
        'pageLength': this.page.count,
        'status': this.status
      }
      this.service.post_service(ApiserviceService.apisList.viewSearchIndents, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          let newViewPlanData = response['data'].indents;
          let excelRawData = newViewPlanData;
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            let toBeConfirmed = 0;
            if ((excelRawData[i].netRequested) < (excelRawData[i].confirmed + excelRawData[i].declined)) {
              toBeConfirmed = 0
            } else {
              toBeConfirmed = ((excelRawData[i].netRequested) - (excelRawData[i].confirmed + excelRawData[i].declined));
            }
            let data = {
              "Source": excelRawData[i].SouceLocation,
              "Dispatch Date": this.service.customDateFormat(excelRawData[i].dispatchDate),
              "Destination": excelRawData[i].destination,
              "Dest Description": excelRawData[i].destDis,
              "Truck Type": excelRawData[i].truckType,
              "Transporter": excelRawData[i].transporter,
              "Created Date": this.service.customDateTimeFormat(excelRawData[i].insertDate),
              "Port Of Discharge": excelRawData[i].pod,
              "Country Of Destination": excelRawData[i].destCountryName,
              "Indent Id": excelRawData[i].indentId,
              "Freight Available": excelRawData[i].isFreightAvailable,
              "Category": excelRawData[i].materailGrp,
              "Indented": excelRawData[i].indented,
              "Cancelled": excelRawData[i].cancelled,
              "Net Indented": excelRawData[i].netRequested,
              "Trans Confirmed": excelRawData[i].confirmed,
              "Trans Declined": excelRawData[i].declined,
              "To Be Confirmed": toBeConfirmed,
              "Reported": excelRawData[i].reported,
              "Rejected": excelRawData[i].rejected,
              "Net Balance": excelRawData[i].netBalance,
              "Indent Age (Days)": excelRawData[i].indentAge,
              "Status": excelRawData[i].status,
              "Comments": excelRawData[i].comments
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'modifyIndents.xlsx');
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

  onSelect(event, row) {
    if (event.target.checked) {
      this.totalVIewIndentData.push(row);
    } else {
      let index = this.totalVIewIndentData.indexOf(row);
      this.totalVIewIndentData.splice(index, 1);
    }
    this.totalCancelledCount = this.totalVIewIndentData.reduce((sum, { cancelled }) => sum + Number(cancelled), 0)
    this.totalConfirmedCount = this.totalVIewIndentData.reduce((sum, { confirmed }) => sum + Number(confirmed), 0)
    this.totalDeclinedCount = this.totalVIewIndentData.reduce((sum, { declined }) => sum + Number(declined), 0)
    this.totalIndentedCount = this.totalVIewIndentData.reduce((sum, { indented }) => sum + Number(indented), 0)
    this.totalRejectedCount = this.totalVIewIndentData.reduce((sum, { rejected }) => sum + Number(rejected), 0)
    this.totalReportedCount = this.totalVIewIndentData.reduce((sum, { reported }) => sum + Number(reported), 0)
    this.totalNetIndentCount = this.totalVIewIndentData.reduce((sum, { netRequested }) => sum + Number(netRequested), 0)
    this.totalToBeConfirmedCount = this.totalVIewIndentData.reduce((sum, { toBeConfirmed }) => sum + Number(toBeConfirmed), 0);
    this.totalNetBalanceCount = this.totalVIewIndentData.reduce((sum, { netBalance }) => sum + Number(netBalance), 0);
    console.log('totalViewIndentData', this.totalVIewIndentData, this.totalVIewIndentData.length);
  }

  defaultIndentCount() {
    this.totalIndentedCount = 0;
    this.totalCancelledCount = 0;
    this.totalConfirmedCount = 0;
    this.totalDeclinedCount = 0;
    this.totalRejectedCount = 0;
    this.totalReportedCount = 0;
    this.totalNetIndentCount = 0;
    this.totalToBeConfirmedCount = 0;
    this.totalNetBalanceCount = 0;
    this.totalVIewIndentData = [];
  }
  clearAllSum(){
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

  onSelectAll(event) {
    this.defaultIndentCount();
    this.indentData.forEach(data => {
      this.onSelect(event, data);
    });
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


  // datatables with server side pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.forDateValidation();
    this.clearAllSum();
    this.defaultIndentCount();
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
      'status': this.status
    }
    this.getModifyIndentData(bodyData);

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
      'status': this.status
    }
    if (this.fromDate != '' && this.fromDate != null) {
      if (this.toDate != '' && this.toDate != null) {
        this.getModifyIndentData(bodyData);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.getModifyIndentData(bodyData);
    }
  }
  //Update values after Blur From input
  updateValue(event, cell, rowIndex) {
    this.indentData[rowIndex][cell] = event.target.value;
    this.indentData = [...this.indentData];
  }

  modifyIndent(data) {
    this.openModifyIndentPopup(data, 'MODIFY');

  }
  //open Modify Indent popup
  openModifyIndentPopup(modifybleData, typeofEvent) {
    const dialogRef = this.dialog.open(IndentCancelConfirmationComponent, {
      width: '250px',
      data: { comments: modifybleData.comments, type: typeofEvent },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.comments = result;
      if (this.comments != false) {
        this.isLoading = true;
        let sendData = {
          "indentId": modifybleData.indentId,
          "indented": modifybleData.indented,
          "cancelled": modifybleData.cancelled,
          "status": modifybleData.status,
          "comments": this.comments,
          "destDis": modifybleData.destDis,
          "destCountryName": modifybleData.destCountryName
        }
        let modifybleIndex = this.indentData.findIndex(resp => resp.indentId == modifybleData.indentId)
        this.service.post_service(ApiserviceService.apisList.ModifyIndent, sendData).subscribe(response => {
          if (response['statusCode'] == 200) {
            this.clearAllSum();
            // this.indentData[modifybleIndex] = response['data'];
            // for (let data of this.indentData) {
            //   // data['toBeConfirmed'] = (data.netRequested) - (data.confirmed + data.declined);
            //   if ((data.netRequested) < (data.confirmed + data.declined)) {
            //     data['toBeConfirmed'] = 0;
            //   } else {
            //     data['toBeConfirmed'] = (data.netRequested) - (data.confirmed + data.declined);
            //   }
            // }
            let responseData = response['data'];
            if ((responseData.netRequested) < (responseData.confirmed + responseData.declined)) {
              responseData['toBeConfirmed'] = 0;
            } else {
              responseData['toBeConfirmed'] = (responseData.netRequested) - (responseData.confirmed + responseData.declined);
            }
            this.indentData[modifybleIndex] = responseData;
            this.indentData = [...this.indentData];
            this.selected = [];
            this.editing = {};
            this.totalVIewIndentData = [];
            // Datable bottom Grid reset 
            this.totalIndentedCount = 0;
            this.totalCancelledCount = 0;
            this.totalNetIndentCount = 0;
            this.totalConfirmedCount = 0;
            this.totalDeclinedCount = 0;
            this.totalToBeConfirmedCount = 0;
            this.totalReportedCount = 0;
            this.totalRejectedCount = 0;
            this.totalNetBalanceCount = 0;
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
    })
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


  //open Confirmation popup for Cancellation 
  indentCancelConfirmationPopup(sendbleData, typeofEvent) {
    const dialogRef = this.dialog.open(IndentCancelConfirmationComponent, {
      width: '250px',
      data: { comments: sendbleData.comments, type: typeofEvent },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.comments = result;
      // If Clicks on Yes (Cancel Indent )
      if (this.comments != false) {
        this.isLoading = true;
        let sendData = {
          "id": sendbleData.id,
          "indentId": sendbleData.indentId,
          "dispatchDate": sendbleData.dispatchDate,
          "source": sendbleData.source,
          "destination": sendbleData.destination,
          "truckType": sendbleData.truckType,
          "transporter": sendbleData.transporter,
          "materailGrp": sendbleData.materailGrp,
          "indented": sendbleData.indented,
          "comments": this.comments,
          "tte": sendbleData.tte,
          "netRequested": sendbleData.netRequested,
          "cancelled": sendbleData.cancelled,
          "confirmed": sendbleData.confirmed,
          "declined": sendbleData.declined,
          "assigned": sendbleData.assigned,
          "reported": sendbleData.reported,
          "rejected": sendbleData.rejected,
          "netPlaced": sendbleData.netPlaced,
          "netBalance": sendbleData.netBalance,
          "status": "CANCELLED",
          "loadFactor": sendbleData.loadFactor,
          "destDis": sendbleData.destDis,
          "destCountryName": sendbleData.destCountryName
        }
        let modifybleIndex = this.indentData.findIndex(resp => resp.indentId == sendbleData.indentId)
        this.service.post_service(ApiserviceService.apisList.ModifyIndent, sendData).subscribe(response => {
          if (response['statusCode'] == 200) {
            this.clearAllSum();
            let responseData = response['data'];
            if ((responseData.netRequested) < (responseData.confirmed + responseData.declined)) {
              responseData['toBeConfirmed'] = 0;
            } else {
              responseData['toBeConfirmed'] = (responseData.netRequested) - (responseData.confirmed + responseData.declined);
            }
            this.indentData[modifybleIndex] = responseData;
            this.indentData = [...this.indentData]
            this.editing = {};
            this.toastr.success(response['message'])
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

    });
  }
  //cancel Indent 
  cancelIndent(data) {
    this.indentCancelConfirmationPopup(data, 'FULLCANCEL')
  }
  onFooterPage(pageInfo){
    console.log(pageInfo);
    
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


  //set value destination
  setDestination(value) {
    //  this.destinationDesc = value;
    this.destination = value;
  }

  //set value to destination description
  setDestDescription(value) {
    this.destinationDesc = value;
  }
}

