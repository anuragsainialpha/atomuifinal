import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { UiUtil } from 'src/app/uiUtil';
import { ToastrService } from 'ngx-toastr';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MatDialog } from '@angular/material';
import * as XLSX from 'xlsx';
declare var $: any;

@Component({
  selector: 'app-mt-truck-dedicated',
  templateUrl: './mt-truck-dedicated.component.html',
  styleUrls: ['./mt-truck-dedicated.component.scss']
})
export class MtTruckDedicatedComponent implements OnInit {

  isLoading: boolean = false;
  isShow: boolean = true;

  // salesSku1:any = "";
  // salesSku:any = "";
  // itemId:any = "";
  // compQty:any = "";
  // itemSeq:any = "";
  // oeCode:any = "";
  // itemClassification: any = "";
  // itemDescription: any = "";
  // itemType: any = "";
  // itemGroup: any = "";
  // tte: any = "";
  // loadFactor: any = "";
  // formattedDate: string;
  // 


  effectiveDate: any = "";
  formattedDate: string;

  locationId: any = "";
  scannable: any = "";
  itemCategory: any = "";
  insertUser: any = "";
  insertDate: any = "";
  updateUser: any = "";
  updateDate: any = "";


  locationIdF: any = "";
  scannableF: any = "";
  itemCategoryF: any = "";

  locationIdu: any = "";
  scannableu: any = "";
  itemCategoryu: any = "";


  displayForm: boolean = false;
  resultDataList: any[];
  responseItemsList: any[];
  scannableTypesList = ['Y', 'N'];
  integrationMsg: string;

  editing = {};

  page = {
    limit: 100,
    count: 0,
    offset: 0,
    pageSize: 50
  };

  @ViewChild(DatatableComponent) table: DatatableComponent;
  sourceLoc: string = '';
  destLoc: string = '';
  toExpiryDate: string = '';
  fromExpiryDate: string = '';
  servprov: string = '';
  truckNumber: string = '';
  truckType=[];
  selectedTruck = {
    id: null,
    servprov: null,
    sourceLoc: null,
    sourceDesc: null,
    destDesc: null,
    destLoc: null,
    truckType: null,
    truckNumber: null,
    expiryDate: null,
    insertUser: null,
    updateUser: null,
    insertDate: null,
    updateDate: null,
  };
  newTruck = {
    servprov: null,
    sourceLoc: null,
    sourceDesc: null,
    destDesc: null,
    destLoc: null,
    truckType: null,
    truckNumber: null,
    expiryDate: null,
  };
  sourceList = [];
  truckList = [];
  destinationList = [];
  transporterList = [];
  transporterListUpdate = [];
  transporterListAdd = [];
  destinationListUpdate = [];
  destinationListAdd = [];
  sourceListAdd = [];
  sourceListUpdate = [];
  selectedRow: any;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    localStorage.setItem("userMenu", "paas-master");
    let data = {};
    this.getLocationIds();
    this.getTruckTypeMasterData();
    this.getTruckDedicatedList(data);
  }

  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }

  // Datatable Footer
  onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }

  emptySumm() {
    return null;
  }


  locationIds: any[] = [];
  scmGroupList: any[] = [];

  getLocationIds() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getLocationIdsList).subscribe(response => {
      //console.log("response array string: "+JSON.stringify(response));
      this.locationIds = response['data'];
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  getTruckDedicatedList(data) {
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getTruckDedicatedList, data).subscribe(response => {
      //console.log("response array string: "+JSON.stringify(response));
      if (response['statusCode'] == 200) {
        this.resultDataList = response['data'].mtTruckDedicatedDtos;
        this.page.count = response['data'].total;
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



  displayAddForm() {
    this.clearNewTruck();
    if (this.displayForm)
      this.displayForm = false;
    else
      this.displayForm = true;
  }


  foods: any[] = [
    { value: 'Y', viewValue: 'Y' },
    { value: 'N', viewValue: 'N' }
  ];


  ApprovalEditing = {};
  pendingPlanList = [];


  doSearch() {
    this.table.offset = 0;
    this.page.offset = 0;
    let data = {
      sourceLoc: this.sourceLoc,
      destLoc: this.destLoc,
      servprov: this.servprov,
      toExpiryDate: this.toExpiryDate ? moment(new Date(this.toExpiryDate)).format("DD/MM/YYYY") : null,
      fromExpiryDate: this.fromExpiryDate ? moment(new Date(this.fromExpiryDate)).format("DD/MM/YYYY") : null,
      truckType: this.truckType,
      truckNumber: this.truckNumber,
    }
    if (this.fromExpiryDate != '' && this.fromExpiryDate != null) {
      if (this.toExpiryDate != '' && this.toExpiryDate != null) {
        this.resultDataList = [];
        this.getTruckDedicatedList(data);
      } else {
        this.toastr.error("Please select To Date", "!Error")
      }
    } else {
      this.getTruckDedicatedList(data);
    }
    

    //this.toastr.error("Received http error 404. Please check service urlcccc")
  }

  //server side pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    let bodyData = {
      index: pageInfo.offset,
      sourceLoc: this.sourceLoc,
      destLoc: this.destLoc,
      servprov: this.servprov,
      toExpiryDate: this.toExpiryDate ? moment(new Date(this.toExpiryDate)).format("DD/MM/YYYY") : null,
      fromExpiryDate: this.fromExpiryDate ? moment(new Date(this.fromExpiryDate)).format("DD/MM/YYYY") : null,
      truckType: this.truckType,
      truckNumber: this.truckNumber,
    }
    this.getTruckDedicatedList(bodyData);
  }

  insertStatus: string = "";

  addEvent(type, event) {
    if (event.target.value) {
       /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
      if(this.toExpiryDate && (this.fromExpiryDate > this.toExpiryDate)){
        this.toExpiryDate = '';
      }
      // this.toExpiryDate = '';
    }
  }

  // Filter source location
  getfilterSource(event,typeofFilter) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.sourceList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        console.log("respio", response)
        if(typeofFilter === 'SEARCH'){
          this.sourceList = response['data'].searchResult;
        }
        if(typeofFilter === 'UPDATE'){
          this.sourceListUpdate = response['data'].searchResult;
        }
        if(typeofFilter === 'ADD'){
          this.sourceListAdd = response['data'].searchResult;
        }
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }
  //get filter destination result
  getfilterDestination(event, typeofFilter) {
    // this.destinationDesc = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        if(typeofFilter === 'SEARCH'){
          this.destinationList = response['data'].searchResult;
        }
        if(typeofFilter === 'UPDATE'){
          this.destinationListUpdate = response['data'].searchResult;
        }
        if(typeofFilter === 'ADD'){
          this.destinationListAdd = response['data'].searchResult;
        }
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
        if(typeofFilter === 'SEARCH'){
          this.transporterList = response['data'].searchResult;
        }
        if(typeofFilter === 'UPDATE'){
          this.transporterListUpdate = response['data'].searchResult;
        }
        if(typeofFilter === 'ADD'){
          this.transporterListAdd = response['data'].searchResult;
        }
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
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



  showUpdateModel(row) {
    let s = {...row};
    this.selectedTruck = {...s};
    let gettheDate = s.expiryDate;
    let splittedData = gettheDate.split("/");
    let createNewDate = splittedData[1] + "/" + splittedData[0] + "/" + splittedData[2]
    // Formatted new key for autopopulation of date for datepicker
    this.selectedTruck.expiryDate = new Date(createNewDate).toISOString();
    $("#editTruck").modal('show');
    row ={...row};
  }

  clearAll() {
    this.sourceLoc = '';
    this.destLoc = '';
    this.toExpiryDate = '';
    this.fromExpiryDate = '';
    this.servprov = '';
    this.truckType = [];
    this.truckNumber = '';
    this.sourceList = [];
    this.destinationList = [];
    this.transporterList = [];
  }

  // Refresh data
  refreshData() {
    this.isLoading = true;
    this.clearAll();
    this.table.offset = 0;
    this.page.offset = 0;
    let data = {};
    this.getTruckDedicatedList(data);
    // this.service.post_service(ApiserviceService.apisList.getMtItem, data).subscribe(response => {
    //   if (response['statusCode'] == 200) {
    //     let responseData = response['data'].mtOeBoms;
    //     this.responseItemsList = responseData;
    //     this.responseItemsList = [...this.responseItemsList]
    //     // this.page.count = response['data'].total;
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




  //UTILS  

  formatDate(data) {
    if (data != null && data) {
      let formatted = new Date(data),
        mnth = ("0" + (formatted.getMonth() + 1)).slice(-2),
        day = ("0" + formatted.getDate()).slice(-2);
      this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
      this.effectiveDate = this.formattedDate;
      return this.formattedDate;
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
  validateUpadteTruckData(){
    if(this.selectedTruck.expiryDate){
      // Expiry date is not null
      if(this.selectedTruck.sourceLoc){
        // When source is valid
        if(this.selectedTruck.destLoc){
         if(this.selectedTruck.sourceLoc !== this.selectedTruck.destLoc){
           // When Dest Loc is valid
           if(this.selectedTruck.servprov){
            // when transporter is valid
            if(this.selectedTruck.truckType){
              // When truck type is not null
              if(this.selectedTruck.truckNumber){
                // When truck Number is not null
                // Updating the truck Dedicated data
                this.updateTruckData();
              }else{
                this.toastr.error('Please Enter the truck number', 'Error!');
              }
            }else{
              this.toastr.error('Please select a Truck Type', 'Error!');
            }
          }else{
            this.toastr.error('Please select a valid Transporter', 'Error!');
          }
         }else{
          this.toastr.error('Destination cannot be same as source', 'Error!')
         }
        }else{
          this.toastr.error('Please select a valid Dest Loc', 'Error!');  
        }
      }else{
        this.toastr.error('Please select a valid Source Loc', 'Error!');
      }

    }else{
      this.toastr.error('Please select the Expiry date', 'Error!');
    }
  }

  updateTruckData(){
   let selectedExpiryDate = this.selectedTruck.expiryDate;
   this.selectedTruck.expiryDate = selectedExpiryDate ? moment(new Date(selectedExpiryDate)).format("DD/MM/YYYY") : null
   this.isLoading = true;
   this.service.post_service(ApiserviceService.apisList.saveTruckDedicated, this.selectedTruck).subscribe(response => {
      if(response['statusCode'] == 200){
        let updatedRow = response['data'];
        let index = this.resultDataList.findIndex(item => item.id === updatedRow.id);
        this.resultDataList[index] = updatedRow;
        this.resultDataList = [...this.resultDataList];
        $("#editTruck").modal('hide');
        this.clearUpdateTruckFields();
        this.clearSelectedTruck();
        this.toastr.success(response['message'] ? response['message'] : 'Truck Dedicated Details Updated Successfully');
        this.isLoading = false;
      }else{
        this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
     this.isLoading = false;   
      }
   },err => {
     this.toastr.error(err ? err['message'] : 'Something went wrong...', 'Error!');
     this.isLoading = false;
   })
  }

  // Validating the truck dedicated data
  validateSaveTruck(){
    let checkSourceLoc = this.sourceListAdd.some(item => item.value === this.newTruck.sourceLoc);
    let checkDestLoc = this.destinationListAdd.some(item => item.value === this.newTruck.destLoc);
    let checkTransporter = this.transporterListAdd.some(item => item.value === this.newTruck.servprov);
    if(this.newTruck.expiryDate){
      // Expiry date is not null
      if(checkSourceLoc){
        // When source is valid
        if(checkDestLoc){
         if(this.newTruck.sourceLoc !== this.newTruck.destLoc){
           // When Dest Loc is valid
           if(checkTransporter){
            // when transporter is valid
            if(this.newTruck.truckType){
              // When truck type is not null
              if(this.newTruck.truckNumber){
                // When truck Number is not null
                // Saving the truck Dedicated data
                this.saveTruck();
              }else{
                this.toastr.error('Please Enter the truck number', 'Error!');
              }
            }else{
              this.toastr.error('Please select a Truck Type', 'Error!');
            }
          }else{
            this.toastr.error('Please select a valid Transporter', 'Error!');
          }
         }else{
          this.toastr.error('Destination cannot same as Source', 'Error!');
         }
        }else{
          this.toastr.error('Please select a valid Dest Loc', 'Error!');  
        }
      }else{
        this.toastr.error('Please select a valid Source Loc', 'Error!');
      }

    }else{
      this.toastr.error('Please select the Expiry date', 'Error!');
    }
  }



  saveTruck(){
    let selectedExpiryDate = this.newTruck.expiryDate;
    this.newTruck.expiryDate = selectedExpiryDate ? moment(new Date(selectedExpiryDate)).format("DD/MM/YYYY") : null
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.saveTruckDedicated, this.newTruck).subscribe(response => {
       if(response['statusCode'] == 200){
        //  let updatedRow = response['data'];
        // this.resultDataList.unshift(updatedRow);
        // this.resultDataList = [...this.resultDataList];
        this.resultDataList = [...response['data'].mtTruckDedicatedDtos];
        this.page.count = response['data'].total;
        //this.refreshData();
        // this.getTruckDedicatedList();
        this.displayAddForm();
        this.clearAddTruckFields();
        this.clearNewTruck();
        
         this.toastr.success(response['message'] ? response['message'] : 'Truck Dedicated Details Saved Successfully');
         this.isLoading = false;
       }else{
         this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
      this.isLoading = false;   
       }
    },err => {
      this.toastr.error(err ? err['message'] : 'Something went wrong...', 'Error!');
      this.isLoading = false;
    })
   }

   clearAddTruckFields(){
     this.sourceListAdd = [];
     this.destinationListAdd = [];
     this.transporterListAdd = [];
   }
   clearUpdateTruckFields(){
    this.sourceListUpdate = [];
    this.destinationListUpdate = [];
    this.transporterListUpdate = [];
  }

  confirmDeleteAction(row){
    this.selectedRow = {...row};
    $("#confirmDelete").modal('show');
  }

  rowlevelDeleteDedicated(row){
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.deleteMTTruckDedicated+'?id='+row.id).subscribe(response => {
      if(response['statusCode'] == 200){
        let deletedRow = response['data'];
        let index = this.resultDataList.findIndex(item => item.id === deletedRow);
        this.resultDataList.splice(index, 1);
        this.resultDataList = [...this.resultDataList];
        this.page.count = this.page.count - 1;
        $("#confirmDelete").modal('hide');
        this.isLoading = false;
      }else{
        this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
        this.isLoading = false;
        $("#confirmDelete").modal('hide');
      }
    }, err=>{
      this.toastr.error(err['message'] ? err['message'] : 'Something went wrong...', 'Error!');
      this.isLoading = false;
      $("#confirmDelete").modal('hide');
    })

  }

   //export excel data
   export(): void {
    if (this.resultDataList.length > 0) {
      this.isLoading = true;

      let data = {
        sourceLoc: this.sourceLoc,
        destLoc: this.destLoc,
        servprov: this.servprov,
        toExpiryDate: this.toExpiryDate ? moment(new Date(this.toExpiryDate)).format("DD/MM/YYYY") : null,
        fromExpiryDate: this.fromExpiryDate ? moment(new Date(this.fromExpiryDate)).format("DD/MM/YYYY") : null,
        truckType: this.truckType,
        truckNumber: this.truckNumber,
        // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel ,
        pageLength: this.page.count
      }
      // this.service.post_service_DownLoadExcel(ApiserviceService.apisList.planinfo, data).subscribe(response => {
      this.service.post_service(ApiserviceService.apisList.getTruckDedicatedList, data).subscribe(response => {
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

          let newViewPlanData = response['data'].mtTruckDedicatedDtos;
          let excelRawData = newViewPlanData;
          let newExcelData = []; let data;
          for (let i = 0; i < excelRawData.length; i++) {

            // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
            // For FGS : The Avail TTE and Truck count should be based on Available Qty
            data = {
              "Source": excelRawData[i].sourceLoc,
              "Source Desc": excelRawData[i].sourceDesc,
              "Destination": excelRawData[i].destLoc,
              "Destination Desc": excelRawData[i].destDesc,
              "Service Provider": excelRawData[i].servprov,
              "Truck Type": excelRawData[i].truckType,
              "Truck Number": excelRawData[i].truckNumber,
              "Expiry Date": excelRawData[i].expiryDate ? this.service.customDateFormat(excelRawData[i].expiryDate) : '',
              "Insert User": excelRawData[i].insertUser,
              "Insert Date": excelRawData[i].insertDate ? this.service.customDateTimeFormat(excelRawData[i].insertDate) : '', 
              "Update User": excelRawData[i].updateUser,
              "Update Date": excelRawData[i].updateDate ? this.service.customDateFormat(excelRawData[i].updateDate) : ''
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'mtTruckDedicatedData.xlsx');
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

  clearNewTruck(){
    this.newTruck = {
      servprov: null,
      sourceLoc: null,
      sourceDesc: null,
      destDesc: null,
      destLoc: null,
      truckType: null,
      truckNumber: null,
      expiryDate: null,
    };
  }
  
  clearSelectedTruck(){
    this.selectedTruck = {
      id: null,
      servprov: null,
      sourceLoc: null,
      sourceDesc: null,
      destDesc: null,
      destLoc: null,
      truckType: null,
      truckNumber: null,
      expiryDate: null,
      insertUser: null,
      updateUser: null,
      insertDate: null,
      updateDate: null,
    };
  }

}
