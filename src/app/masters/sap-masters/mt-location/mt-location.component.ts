import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { NgForm } from '@angular/forms';
import {COMMA, ENTER, SPACE, TAB} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { DatatableComponent } from '@swimlane/ngx-datatable';


declare var $: any;

export interface email {
  name: string;
}

@Component({
  selector: 'app-mt-location',
  templateUrl: './mt-location.component.html',
  styleUrls: ['./mt-location.component.scss']
})
export class MtLocationComponent implements OnInit {

  isLoading: boolean = false;
  isShow: boolean = true;
  excelExport:boolean=false;

  salesSku:any = "";
  compQty:any = "";
  itemSeq:any = "";
  oeCode:any = "";
 

  itemIdf: any = "";
  itemDescriptionf: any = "";
  itemCategoryf: any = "";
  batchCodef: any = "";
  valveIdf:any="";

itemId: any = "";
itemDescription: any = "";
itemCategory: any = "";
batchCode: any = "";
valveId:any="";

itemIdu: any = "";
itemDescriptionu: any = "";
itemCategoryu: any = "";
batchCodeu: any = "";
valveIdu:any="";


locationId :any = "";
locationDesc :any = "";
locationType :any = "";
locationAddress :any = "";
city :any = "";
state :any = "";
postalCode :any = "";
country :any = "";
isActive :any = "";
lat :any = "";
lon :any = "";
stateCode :any = "";
gstNo :any = "";
gstState :any = "";
panNo :any = "";
ftAccessKey :any = "";
locationClass :any = "";
linkedPlant :any = "";


locationIdu :any = "";
locationDescu :any = "";
locationTypeu :any = "";
locationAddressu :any = "";
cityu :any = "";
stateu :any = "";
postalCodeu :any = "";
countryu :any = "";
isActiveu :any = "";
latu :any = "";
lonu :any = "";
stateCodeu :any = "";
gstNou :any = "";
gstStateu :any = "";
panNou :any = "";
ftAccessKeyu :any = "";
locationClassu :any = "";
linkedPlantu :any = "";



insertUser:any = "";
insertDate:any = "";
updateUser:any = "";
updateDate:any = "";


  itemClassification: any = "";
  itemType: any = "";
  itemGroup: any = "";
  tte: any = "";
  loadFactor: any = "";
  formattedDate: string;
  effectiveDate: any = "";

displayForm:boolean=false;
resultDataList:any[];
responseItemsList: any[];
exportResponseItemsList: any[];
  
  editing = {};

  page = {
    limit: 100,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };

  // MAT CHIP SET
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE, TAB];
  emails : email[] = [];
  
  

  @ViewChild(DatatableComponent) table : DatatableComponent;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    localStorage.setItem("userMenu", "sap-master");
    this.getLocationIds();
    this.getLocationClasses();
  }

   // For Pagination Footer
   onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }

  locationIds:any[]=[];
  locationCalssArray:any[]=[];
  
  getLocationIds() {
    this.isLoading=true;
    this.service.get_service(ApiserviceService.apisList.getLocationIdsList).subscribe(response => {
      //console.log("response array string: "+JSON.stringify(response));
      this.locationIds = response['data'];
      this.isLoading=false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  getLocationClasses() {
    this.isLoading=true;
    this.service.get_service(ApiserviceService.apisList.getLocationClasses).subscribe(response => {
      //console.log("response array string: "+JSON.stringify(response));
      this.locationCalssArray = response['data'];
      this.isLoading=false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  

  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }

displayAddForm() {
    if (this.displayForm)
      this.displayForm = false;
    else
      this.displayForm = true;
  }


  mtOEBOMList:any[];
  mtoebomList: any[];
  upload(){}



  doSubmitSearch() {
    let data = {
      id: this.locationId,
      locationDesc: this.locationDesc,
      locationType: this.locationType,
      city: this.city,
      state: this.state,
      postalCode: this.postalCode,
      country: this.country,
      lat: this.lat,
      lon: this.lon,
      stateCode: this.stateCode,
      gstNo: this.gstNo,
      gstState: this.gstState,
      panNo: this.panNo,
      ftAccessKey: this.ftAccessKey,
      locationClass: this.locationClass,
      excelExport:'false'
    }
    this.doSearch(data)
  }


doSearch(data) {
  this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getMtLocation, data).subscribe(response => {
      this.page.count = response['data'].total;
      this.page.limit = response['data'].pageLength;
      this.responseItemsList = response['data'].itemsList;
      console.log("response array string: "+JSON.stringify(this.responseItemsList));
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
      itemDescription: this.itemDescription,
      itemCategory: this.itemCategory,
      batchCode: this.batchCode,
   }
 this.doSearch(bodyData);
}







// export to excel file
export(): void {
  this.isLoading = true;
  if(this.responseItemsList === undefined){
    this.isLoading = false;
  }
  if (this.responseItemsList.length > 0) {
    let data = {
      id: this.locationId,
      locationDesc: this.locationDesc,
      locationType: this.locationType,
      city: this.city,
      state: this.state,
      postalCode: this.postalCode,
      country: this.country,
      lat: this.lat,
      lon: this.lon,
      stateCode: this.stateCode,
      gstNo: this.gstNo,
      gstState: this.gstState,
      panNo: this.panNo,
      ftAccessKey: this.ftAccessKey,
      locationClass: this.locationClass,
      excelExport:'false',
      pageLength: this.page.count
      // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
    }
    this.service.post_service(ApiserviceService.apisList.getMtLocation, data).subscribe(response => {

      if(response['statusCode'] == 200){
        let excelRawData = [...response['data'].itemsList];
      let newExcelData = [];
      for (let i = 0; i < excelRawData.length; i++) {
    
        this.insDate = this.formatDate(excelRawData[i].insertDate);
        this.insDatep = this.effectiveDate;
        this.updDate = this.formatDate(excelRawData[i].updateDate);
        this.updDatep = this.effectiveDate;
    
        let data = {
          "Location Id": excelRawData[i].locationId,
          "Location Desc": excelRawData[i].locationDesc,
          "Location Type": excelRawData[i].locationType,
          "Location Address": excelRawData[i].locationAddress,
          "City": excelRawData[i].city,
          "State": excelRawData[i].state,
          "Postal Code": excelRawData[i].postalCode,
          "Country": excelRawData[i].country,
          "Is Active": excelRawData[i].isActive,
          "Latitude": excelRawData[i].lat,
          "Longitude": excelRawData[i].lon,
          "State Code": excelRawData[i].stateCode,
          "Gst No": excelRawData[i].gstNo,
          "Gst State": excelRawData[i].gstState,
          "Pan No": excelRawData[i].panNo,
          "Ft Access Key": excelRawData[i].ftAccessKey,
          "Location Class": excelRawData[i].locationClass,
          "Linked Plant": excelRawData[i].linkedPlant,
  
          "Insert User   ": excelRawData[i].insertUser + this.blank,
          "Insert Date   ": this.insDatep + this.blank,
          "Update User   ": excelRawData[i].updateUser + this.blank,
          "Update Date   ": this.updDatep + this.blank,
        }
        newExcelData.push(data)
      }
      const workBook = XLSX.utils.book_new(); // create a new blank book
      const workSheet = XLSX.utils.json_to_sheet(newExcelData);
      XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
      XLSX.writeFile(workBook, 'Location.xlsx');
      this.isLoading = false;
      }else{
        this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
        this.isLoading = false;
      }
      console.log("response array string: "+JSON.stringify(this.responseItemsList));
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

  



export99(): void {
  let data = {
    id: this.locationId,
    locationDesc: this.locationDesc,
    locationType: this.locationType,
    city: this.city,
    state: this.state,
    postalCode: this.postalCode,
    country: this.country,
    lat: this.lat,
    lon: this.lon,
    stateCode: this.stateCode,
    gstNo: this.gstNo,
    gstState: this.gstState,
    panNo: this.panNo,
    ftAccessKey: this.ftAccessKey,
    locationClass: this.locationClass,
    excelExport:'true'
  }
  this.service.post_service(ApiserviceService.apisList.getMtLocation, data).subscribe(response => {
    this.exportResponseItemsList = response['data'].itemsList;
    //console.log("response array string: "+JSON.stringify(this.exportResponseItemsList));
    
  }, (err) => {
    console.log("Error", err);
    this.toastr.error(err ? err : "Something went wrong..", "Error!");
    this.isLoading = false;
  })

  if(this.exportResponseItemsList === undefined){
    this.isLoading = false;
  }
  if (this.exportResponseItemsList.length > 0) {
    let excelRawData = [...this.exportResponseItemsList];
    let newExcelData = [];
    for (let i = 0; i < excelRawData.length; i++) {
  
      this.insDate = this.formatDate(excelRawData[i].insertDate);
      this.insDatep = this.effectiveDate;
      this.updDate = this.formatDate(excelRawData[i].updateDate);
      this.updDatep = this.effectiveDate;
  
      let data = {
        "Location Id": excelRawData[i].id,
        "Location Desc": excelRawData[i].locationDesc,
        "Location Type": excelRawData[i].locationType,
        "Location Address": excelRawData[i].locationAddress,
        "City": excelRawData[i].city,
        "State": excelRawData[i].state,
        "Postal Code": excelRawData[i].postalCode,
        "Country": excelRawData[i].country,
        "Is Active": excelRawData[i].isActive,
        "Latitude": excelRawData[i].lat,
        "Longitude": excelRawData[i].lon,
        "State Code": excelRawData[i].stateCode,
        "Gst No": excelRawData[i].gstNo,
        "Gst State": excelRawData[i].gstState,
        "Pan No": excelRawData[i].panNo,
        "Ft Access Key": excelRawData[i].ftAccessKey,
        "Location Class": excelRawData[i].locationClass,
        "Linked Plant": excelRawData[i].linkedPlant,

        "Insert User   ": excelRawData[i].insertUser + this.blank,
        "Insert Date   ": this.insDatep + this.blank,
        "Update User   ": excelRawData[i].updateUser + this.blank,
        "Update Date   ": this.updDatep + this.blank,
      }
      newExcelData.push(data)
    }
    const workBook = XLSX.utils.book_new(); 
    const workSheet = XLSX.utils.json_to_sheet(newExcelData);
    XLSX.utils.book_append_sheet(workBook, workSheet, 'data');
    XLSX.writeFile(workBook, 'Location.xlsx');
    this.isLoading = false;
  } else {
    this.isLoading = false;
  }
  this.isLoading = false;
  }

  




















saveForm(form: NgForm) {
  this.isLoading = true;
  let data = {
    "itemsList": [
      {
        "itemId": this.itemIdf,
        "itemCategory": this.itemCategoryf,
        "itemDescription": this.itemDescriptionf,
        "batchCode": this.batchCodef,
      }
    ]
  }
  console.log("submit data:  " + JSON.stringify(data));
  this.service.post_service(ApiserviceService.apisList.uploadMtLocation, data).subscribe(response => {
    //console.log("response array string: "+JSON.stringify(response));
    this.isLoading = false;
    this.toastr.success(response['message']);
    form.resetForm();
  }, (err) => {
    console.log("Error", err);
    this.toastr.error(err ? err : "Something went wrong..", "Error!");
    this.isLoading = false;
  })
}

  



showUpdateModel(row){
  console.log("**********"+row.locationId);
  this.locationIdu=row.locationId;
  this.locationDescu=row.locationDesc;
  this.latu = row.lat;
  this.lonu = row.lon;
  this.ftAccessKeyu = row.ftAccessKey;
  this.locationClassu = row.locationClass;
  this.linkedPlantu=row.linkedPlant;
  //row.emailId = 'shashank.akmle@gmail.com;abc;ajhgasdj;fgd'
  this.convertEmailStringToArray(row.emailID);
  console.log("**********"+row.locationId);
  $("#myModal").modal('show');
}

// Converting ';' seperated email ids into list of objects
convertEmailStringToArray(emailId){
  // emailId =  'shashank.akmle@gmail.com;abc;ajhgasdj;fgd';
  this.emails = [];
  if(emailId){
    let splittedEmail = [...emailId.split(',')];
    if(splittedEmail != null && splittedEmail.length > 0){
      splittedEmail.forEach(element => {
        this.emails.push({name : element.trim()})
      });
    }
    this.emails = [...this.emails];
    console.log(this.emails);
    
  }

}

showEmailIds(emailId){
  if(emailId){
    this.convertEmailStringToArray(emailId);
    $("#viewEmailModal").modal('show');
  }else{
    this.toastr.error('No email id is registered for the location');
  }
}

updateForm(form: NgForm) {

  this.isLoading = true;
  let data = {
  "itemsList": [
    {
      "locationId": this.locationIdu,
      "lat": this.latu,
      "lon": this.lonu,
      "ftAccessKey": this.ftAccessKeyu,
      "locationClass":this.locationClassu,
      "linkedPlant":this.linkedPlantu,
      "emailID" : this.emails ? Array.prototype.map.call(this.emails, function(item) { return item.name; }).join(",") : null,
    }
  ]
  }
  console.log("update Mt lOCATION submit data:  " + JSON.stringify(data));
  this.service.post_service(ApiserviceService.apisList.updateMtLocation, data).subscribe(response => {
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
  
  blank:string="     ";





  formatDate(data) {
    if (data != null && data) {
      let formatted = new Date(data),
        mnth = ("0" + (formatted.getMonth() + 1)).slice(-2),
        day = ("0" + formatted.getDate()).slice(-2);
      this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
      this.effectiveDate = this.formattedDate;
      return this.formatDate;
    }else{
      this.effectiveDate =""; 
    }
  }
  month_names ={
    "01":"Jan",
    "02":"Feb",
    "03":"Mar", "04":"Apr","05":"May","06":"Jun", "07":"Jul","08":"Aug","09":"Sep", "10":"Oct","11":"Nov",12:"Dec"
  };

  
  trimDate(date){
    if(date==="" || date===undefined)
    return "";
    else
    var array = date.substring(0, 10).split("-");
    return array[2]+"-"+this.getMonth(array[1])+"-"+array[0];
  }

trimEmpty(val){
  if(val==="" || val ===undefined)
  return "";
  else{
    console.log(typeof val)
    console.log(val+"----"+val.length);
   // return val.trim();
  }
}

  getMonth(number){
    return this.month_names[number]
  }



  // clear data
  clearAll() {
    this.locationId = "";
    this.locationDesc = "";
    this.locationType = "";
    this.city = "";
    this.state = "";
    this.postalCode = "";
    this.country = "";
    this.lat = "";
    this.lon = "";
    this.stateCode = "";
    this.gstNo = "";
    this.gstState = "";
    this.panNo = "";
    this.ftAccessKey = "";
    this.locationClass = "";
  }

 
  refreshData() {
    this.table.offset = 0;
    this.page.offset = 0;
    this.doSubmitSearch();
  }

  // MAT CHIP
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our Email
    if ((value || '').trim()) {
      this.emails.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    console.log("emails", this.emails);
    let emailId = this.emails ?  Array.prototype.map.call(this.emails, function(item) { return item.name; }).join(",") : null;
    console.log("EmailId", emailId);
    
    
  }

  // Removing the email
  remove(email: email): void {
    const index = this.emails.indexOf(email);

    if (index >= 0) {
      this.emails.splice(index, 1);
    }
    let emailId = this.emails ? Array.prototype.map.call(this.emails, function(item) { return item.name; }).join(",") : null;
    console.log("EmailId", emailId);
  }


}
