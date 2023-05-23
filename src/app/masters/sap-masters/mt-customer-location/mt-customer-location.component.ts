import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-mt-customer-location',
  templateUrl: './mt-customer-location.component.html',
  styleUrls: ['./mt-customer-location.component.scss']
})

export class MtCustomerLocationComponent implements OnInit {
  isShow: boolean;

  page = {
    limit: 100,
    count: 0,
    offset: 0,
    pageSize: 50
  };

  @ViewChild(DatatableComponent) table: DatatableComponent;
  isLoading: boolean = false;
  toInsertDate: any;
  fromInsertDate: any;
  mtCustomerList: any[];
  custLocList: any[];
  custLoc: '';
  custNameList = [];
  custAcctGrpList = [];
  cityList = [];
  stateList = [];
  custName: any;
  custAcctGrp: any;
  city: any;
  state: any;
  custTypeList = [];
  stateCodeList = [];
  selectedStateCodes = [];
  selectedCustTypes = [];
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    localStorage.setItem("userMenu", "sap-master");
    this.getMTCustomerData({});
    this.getCustTypes();
    this.getStateCodeList();
  }
  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }

  // Datatable Footer
  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }
  addEvent(type, event) {
    if (event.target.value) {
      if (this.fromInsertDate > this.toInsertDate) {
        this.toInsertDate = '';
      }
    }
  }

  doSearch() {
    this.table.offset = 0;
    this.page.offset = 0;
    let data = {
      toInsertDate: this.toInsertDate ? moment(new Date(this.toInsertDate)).format("DD/MM/YYYY") : null,
      fromInsertDate: this.fromInsertDate ? moment(new Date(this.fromInsertDate)).format("DD/MM/YYYY") : null,
      custId: this.custLoc,
      custName: this.custName,
      custAcctGrp: this.custAcctGrp,
      city: this.city,
      state: this.state,
      stateCodes : this.selectedStateCodes,
      custTypes : this.selectedCustTypes,

    }
    if (this.fromInsertDate != '' && this.fromInsertDate != null) {
      if (this.toInsertDate != '' && this.toInsertDate != null) {
        this.mtCustomerList = [];
        this.getMTCustomerData(data);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.getMTCustomerData(data);
    }
    //this.toastr.error("Received http error 404. Please check service urlcccc")
  }


  //server side pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    let bodyData = {
      index: pageInfo.offset,
      toInsertDate: this.toInsertDate ? moment(new Date(this.toInsertDate)).format("DD/MM/YYYY") : null,
      fromInsertDate: this.fromInsertDate ? moment(new Date(this.fromInsertDate)).format("DD/MM/YYYY") : null,
      custId: this.custLoc,
      custName: this.custName,
      custAcctGrp: this.custAcctGrp,
      city: this.city,
      state: this.state,
      stateCodes : this.selectedStateCodes,
      custTypes : this.selectedCustTypes,
    }
    this.getMTCustomerData(bodyData);
  }

  getMTCustomerData(data) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getMTCustomerDetails, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.mtCustomerList = [];
        this.mtCustomerList = [...response['data'].mtCustomerDtos];
        this.page.count = response['data'].total;
        this.isLoading = false;
      } else {
        this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...!', 'Error!');
        this.isLoading = false;
      }
    }, err => {
      this.toastr.error(err['message'] ? err['message'] : 'Something went wront...!', 'Error!');
      this.isLoading = false;
    })
  }
  clearAll() {
    this.fromInsertDate = '';
    this.toInsertDate = '';
    this.custLoc = '';
    this.custName = '';
    this.custAcctGrp = '';
    this.city = '';
    this.state = '';
    this.custLocList = [];
    this.custNameList = [];
    this.cityList = [];
    this.stateList = [];
    this.custAcctGrpList = [];
    this.selectedCustTypes = [];
    this.selectedStateCodes = [];

  }

  // Refresh data
  refreshData() {
    this.isLoading = true;
    this.clearAll();
    this.table.offset = 0;
    this.page.offset = 0;
    let data = {};
    this.getMTCustomerData(data);

  }

  //export excel data
  export(): void {
    if (this.mtCustomerList.length > 0) {
      this.isLoading = true;

      let data = {
        toInsertDate: this.toInsertDate ? moment(new Date(this.toInsertDate)).format("DD/MM/YYYY") : null,
        fromInsertDate: this.fromInsertDate ? moment(new Date(this.fromInsertDate)).format("DD/MM/YYYY") : null,
        pageLength: this.page.count,
        // pageLength: this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
        custId: this.custLoc,
        custName: this.custName,
        custAcctGrp: this.custAcctGrp,
        city: this.city,
        state: this.state,
        stateCodes : this.selectedStateCodes,
        custTypes : this.selectedCustTypes,

      }
      // this.service.post_service_DownLoadExcel(ApiserviceService.apisList.planinfo, data).subscribe(response => {
      this.service.post_service(ApiserviceService.apisList.getMTCustomerDetails, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          // Uncomment when export excel is generated in backend
          // var blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          //   var filename = 'viewDispatchPlans.xlsx';
          //   const link = window.URL.createObjectURL(blob);
          //   const a = document.createElement('a');
          //   document.body.appendChild(a);
          //   a.setAttribute('style', 'display: none');
          //   a.href = link;
          //   a.download = filename
          //   a.click();
          //   window.URL.revokeObjectURL(link);
          //   a.remove();

          let newViewPlanData = response['data'].mtCustomerDtos;
          let excelRawData = newViewPlanData;
          let newExcelData = []; let data;
          for (let i = 0; i < excelRawData.length; i++) {

            // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
            // For FGS : The Avail TTE and Truck count should be based on Available Qty
            data = {
              "Cust Id": excelRawData[i].id,
              "Cust Name": excelRawData[i].customerName,
              "Cust Acct GRP": excelRawData[i].custAcctGRP,
              "Customer Type": excelRawData[i].customerType,
              "Delivery Terms": excelRawData[i].deliveryTerms,
              "PAN Num": excelRawData[i].panNum,
              "GST Num": excelRawData[i].gstNum,
              "GST Code": excelRawData[i].gstCode,
              "Address": excelRawData[i].address,
              "City": excelRawData[i].city,
              "State": excelRawData[i].state,
              "State Code": excelRawData[i].stateCode,
              "Country": excelRawData[i].country,
              "Postal Code": excelRawData[i].postalCode,
              "Latitude": excelRawData[i].latitude,
              "Longitude": excelRawData[i].longitude,
              "Is Active": excelRawData[i].isActive,
              "Insert User": excelRawData[i].insertUser,
              "Insert Date": excelRawData[i].insertDate ? this.service.customDateFormat(excelRawData[i].insertDate) : '',
              "Update User": excelRawData[i].updateUser,
              "Update Date": excelRawData[i].updateDate ? this.service.customDateFormat(excelRawData[i].updateDate) : '',
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'mtCustomerDetails.xlsx');
          this.isLoading = false;
        } else {
          this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
          this.isLoading = false;
        }
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    } else {
      this.toastr.error("No records found to export", "Error!");
    }
  }

  //get filter destination result
  getfilterDestination(event, typeofFilter) {
    // this.destinationDesc = '';
    let filtervalue = event.target.value;
    let paramValue = '';
    switch (typeofFilter) {
      case "CUST_ID": paramValue = '?locationId=' + filtervalue;
        break;
      case "CUST_NAME": paramValue = '?custName=' + filtervalue;
        break;
      case "CUST_ACCT_GRP": paramValue = '?custAcctGrp=' + filtervalue;
        break;
      case "CITY": paramValue = '?city=' + filtervalue;
        break;
      case "STATE": paramValue = '?state=' + filtervalue;
        break;
      default: paramValue = ''; break;
    }
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.custLocList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchCustLoc + paramValue).subscribe(response => {
        // this.custLocList = response['data'].searchResult;
        if (response['statusCode'] == 200) {
          switch (response['message']) {
            case "CUST_ID": this.custLocList = [];
              this.custLocList = response['data'].searchResult;
              break;
            case "CUST_NAME":
              this.custNameList = [];
              this.custNameList = response['data'];
              break;
            case "CUST_ACCT_GRP": this.custAcctGrpList = [];
              this.custAcctGrpList = response['data'];
              break;
            case "CITY": this.cityList = [];
              this.cityList = response['data']
              break;
            case "STATE": this.stateList = [];
              this.stateList = response['data'];
              break;
            default: paramValue = ''; break;
          }
        }
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  getCustTypes(){
    this.service.get_service(ApiserviceService.apisList.getMTCustTypes).subscribe(response => {
      if(response['statusCode'] == 200){
        this.custTypeList = response['data'];
      }
    })
  }
  getStateCodeList(){
    this.service.get_service(ApiserviceService.apisList.getMTStateCode).subscribe(response => {
      if(response['statusCode'] == 200){
        this.stateCodeList = response['data'];
      }
    })
  }


}
