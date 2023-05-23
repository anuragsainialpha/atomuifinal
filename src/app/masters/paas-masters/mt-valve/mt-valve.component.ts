import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { NgForm } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;


@Component({
  selector: 'app-mt-valve',
  templateUrl: './mt-valve.component.html',
  styleUrls: ['./mt-valve.component.scss']
})
export class MtValveComponent implements OnInit {

  isLoading: boolean = false;
  isShow: boolean = true;

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
  
  editing = {};

  page = {
    limit: 100,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };

 


  @ViewChild(DatatableComponent) table : DatatableComponent;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    localStorage.setItem("userMenu", "paas-master");
  //  this.getItemIdList();
    this.getbatchCodesForValves();
    this.getBatchCategoryList();
   
  }

  // Datatable Footer
  onFooterPage(pageInfo){
    console.log(pageInfo);
    
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


  batchCodesForValvesArray:any[]=[];
  batchCategoryList:any[]=[];
  itemIdList:any[]=[];

  getbatchCodesForValves() {
  this.isLoading = true;
  this.service.get_service(ApiserviceService.apisList.getbatchCodesForValves).subscribe(response => {
    console.log("response array string: "+JSON.stringify(response));
    this.batchCodesForValvesArray = response['data'];
    this.isLoading=false;
  }, (err) => {
    console.log("Error", err);
    this.toastr.error(err ? err : "Something went wrong..", "Error!");
    this.isLoading = false;
  })
}

getBatchCategoryList() {
  this.isLoading = true;
  this.service.get_service(ApiserviceService.apisList.getbatchCategoryList).subscribe(response => {
    //console.log("response array string: "+JSON.stringify(response));
    this.batchCategoryList = response['data'];
    this.isLoading=false;
  }, (err) => {
    console.log("Error", err);
    this.toastr.error(err ? err : "Something went wrong..", "Error!");
    this.isLoading = false;
  })
}

getItemIdList() {
  this.isLoading = true;
  this.service.get_service(ApiserviceService.apisList.getItemIdList).subscribe(response => {
    console.log("response array string: "+JSON.stringify(response));
    this.itemIdList = response['data'];
    this.isLoading=false;
  }, (err) => {
    console.log("Error", err);
    this.toastr.error(err ? err : "Something went wrong..", "Error!");
    this.isLoading = false;
  })
}



  doSubmitSearch(){
    let data = {
      itemId: this.itemId,
      itemDescription: this.itemDescription,
      itemCategory: this.itemCategory,
      batchCode: this.batchCode,
    }
    console.log("submit data:  "+JSON.stringify(data));
    this.doSearch(data)
  }


doSearch(data) {
  console.log("submit data:  "+JSON.stringify(data));
  this.isLoading = true;
  this.responseItemsList =[];

    this.service.post_service(ApiserviceService.apisList.getMtValve, data).subscribe(response => {
      this.page.count = response['data'].total;
      this.page.limit = response['data'].pageLength;
      this.responseItemsList = response['data'].itemsList;
      console.log("response length: "+this.responseItemsList.length);
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
    itemId: this.itemId,
      itemDescription: this.itemDescription,
      itemCategory: this.itemCategory,
      batchCode: this.batchCode,
   }
 this.doSearch(bodyData);
}


insertStatus:string="";

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
  this.service.post_service(ApiserviceService.apisList.addMtValve, data).subscribe(response => {
    //console.log("response array string: "+JSON.stringify(response));
    this.insertStatus = response['data'].message;
    if(this.insertStatus==="Sucess"){
      this.toastr.success(response['message']);
    }
    else if(this.insertStatus==="Failed"){
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
      "itemId": this.itemIdu,
      "itemDescription": this.itemDescriptionu,
      "itemCategory": this.itemCategoryu,
      "batchCode": this.batchCodeu,
      "valveId":this.valveIdu,
    }
  ]
  }
  console.log("updateMtTruckType submit data:  " + JSON.stringify(data));
  this.service.post_service(ApiserviceService.apisList.updateMtValve, data).subscribe(response => {
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

  

  
  showUpdateModel(row){
    console.log("**********"+row.itemCategory);
    
    this.itemIdu = row.itemId;
    this.itemDescriptionu = row.itemDescription;
    this.itemCategoryu = row.itemCategory;
    this.batchCodeu = row.batchCode;
    this.valveIdu=row.valveId;
    console.log("**********"+this.itemCategoryu);
    $("#myModal").modal('show');
  }



  insDate: any = "";
  insDatep: any = "";
  updDate: any = "";
  updDatep: any = "";
  
  blank:string="     ";

// export to excel file
export(): void {
this.isLoading = true;
if(this.responseItemsList === undefined){
  this.isLoading = false;
}
if (this.responseItemsList.length > 0) {
  let data = {
    itemId: this.itemId,
    itemDescription: this.itemDescription,
    itemCategory: this.itemCategory,
    batchCode: this.batchCode,
    // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
    pageLength: this.page.count
  }

  this.service.post_service(ApiserviceService.apisList.getMtValve, data).subscribe(response => {
   
    if(response['statusCode'] == 200){
      let excelRawData = [...response['data'].itemsList];
      let newExcelData = [];
      for (let i = 0; i < excelRawData.length; i++) {
    
        this.insDate = this.formatDate(excelRawData[i].insertDate);
        this.insDatep = this.effectiveDate;
        this.updDate = this.formatDate(excelRawData[i].updateDate);
        this.updDatep = this.effectiveDate;
    
        let data = {
          "Item Id  ": excelRawData[i].itemId,
          "Item Description   ": excelRawData[i].itemDescription,
          "Item Category   ": excelRawData[i].itemCategory,
          "Batch Code  ": excelRawData[i].batchCode,
          // "valveId    ": excelRawData[i].valveId,
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
      XLSX.writeFile(workBook, 'Valve.xlsx');
      this.isLoading = false;
    }else{
      this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
      this.isLoading = false;
    }
  }, (err) => {
    console.log("Error", err);
    this.toastr.error(err ? err : "Something went wrong..", "Error!");
    this.isLoading = false;
  })
 
} else {
  this.toastr.error('No records to generate excel...', 'Error!');
  this.isLoading = false;
}
}




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
    this.itemId = "";
    this.itemDescription = "";
    this.itemCategory = "";
    this.batchCode = "";
  }

 
  refreshData() {
    this.table.offset = 0;
    this.page.offset = 0;
    this.doSubmitSearch();
  }


}
