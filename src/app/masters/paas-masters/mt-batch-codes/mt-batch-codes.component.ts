import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { NgForm } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;

@Component({
  selector: 'app-mt-batch-codes',
  templateUrl: './mt-batch-codes.component.html',
  styleUrls: ['./mt-batch-codes.component.scss']
})
export class MtBatchCodesComponent implements OnInit {

  isLoading: boolean = false;
  isShow: boolean = true;

  // salesSku:any = "";
  // itemId:any = "";
  // compQty:any = "";
  // itemSeq:any = "";
  // oeCode:any = "";
  // itemClassification: any = "";
  // itemDescription: any = "";
  // itemType: any = "";
  // itemGroup: any = "";
  // itemCategory: any = "";
  // tte: any = "";
  // loadFactor: any = "";


  insertUser:any = "";
  insertDate:any = "";
  updateUser:any = "";
  updateDate:any = "";

  formattedDate: string;
  effectiveDate: any = "";

batchCode: any = "";
category: any = "";
plantCode: any = "";
batchDescription: any = "";
bcId:any="";

batchCodef: any = "";
categoryf: any = "";
plantCodef: any = "";
batchDescriptionf: any = "";
bcIdf:any="";

batchCodeu: any = "";
categoryu: any = "";
plantCodeu: any = "";
batchDescriptionu: any = "";
bcIdu:any="";

displayForm:boolean=false;
resultDataList:any[];
responseItemsList: any[];

destinationList: any[];
sourceList: any;
searchLabel:string;


  
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
    this.getLocationIds();
    this.getbatchCategoryList();
  }

  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }

  // Datatable Footer
  onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }

  
upload(){
  
}

batchCategoryList:any[]=[];  
locationIds:any[]=[];  
scmGroupList:any[]=[];

getLocationIds() {
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

getbatchCategoryList() {
  this.isLoading = true;
  this.service.get_service(ApiserviceService.apisList.getbatchCategoryList).subscribe(response => {
    console.log("response array string: "+JSON.stringify(response));
    this.batchCategoryList = response['data'];
    this.isLoading = false;
  }, (err) => {
    console.log("Error", err);
    this.toastr.error(err ? err : "Something went wrong..", "Error!");
    this.isLoading = false;
  })
}


getScmgroupsList() {
  this.isLoading = true;
  this.service.get_service(ApiserviceService.apisList.getScmgroupsList).subscribe(response => {
    console.log("response array string: "+JSON.stringify(response));
    this.scmGroupList = response['data'];
    this.isLoading = false;
  }, (err) => {
    console.log("Error", err);
    this.toastr.error(err ? err : "Something went wrong..", "Error!");
    this.isLoading = false;
  })
}




  doSubmitSearch(){
    let data = {
      batchCode: this.batchCode,
      category: this.category,
      plantCode: this.plantCode,
    }
    console.log("submit data:  "+JSON.stringify(data));
    this.doSearch(data)
  }


  doSearch(data) {
    console.log("submit data:  "+JSON.stringify(data));
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getMtBatchCodes, data).subscribe(response => {
      this.page.count = response['data'].total;
      this.page.limit = response['data'].pageLength;
     this.responseItemsList = response['data'].itemsList;
      console.log("response length: "+this.responseItemsList.length);
      console.log("response array string: "+JSON.stringify(response));
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
    batchCode: this.batchCode,
    category: this.category,
    plantCode: this.plantCode,
   }
 this.doSearch(bodyData);
}





updateForm(form: NgForm) {
this.isLoading = true;
let data = {
"itemsList": [
  {
    "batchCode": this.batchCodeu,
    "category": this.categoryu,
    "plantCode": this.plantCodeu,
    "batchDescription": this.batchDescriptionu,
    "bcId":this.bcIdu
  }
]
}
console.log("updateForm submit data:  " + JSON.stringify(data));
this.service.post_service(ApiserviceService.apisList.updateMtBatchCodes, data).subscribe(response => {
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

showUpdateModel(row) {
this.batchCodeu = row.batchCode;
this.categoryu = row.category;
this.plantCodeu = row.plantCode;
this.batchDescriptionu = row.batchDescription;
this.bcIdu =row.bcId;
$("#myModal").modal('show');
}



insertStatus:string="";

saveForm(form: NgForm) {
  this.isLoading = true;
  let data = {
    "itemsList": [
      {
        "batchCode": this.batchCodef,
        "category": this.categoryf,
        "plantCode": this.plantCodef,
        "batchDescription": this.batchDescriptionf,
      }
    ]
  }
  console.log("submit data:  " + JSON.stringify(data));
  this.service.post_service(ApiserviceService.apisList.addOrUploadMtBatchCodes, data).subscribe(response => {
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

displayAddForm() {
  if (this.displayForm)
    this.displayForm = false;
  else
    this.displayForm = true;
}










//get filter destination result
getfilterDestination(event, typeofevent) {
  let filtervalue = event.target.value;
  if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
    this.destinationList = [];
    this.isLoading = true;
    //console.log("**** typeofevent "+typeofevent)
    this.service.get_service(ApiserviceService.apisList.searchFilter + '?batchCode=' + filtervalue).subscribe(response => {
      if (typeofevent === 'batchCode') {
        this.destinationList = response['data'].searchResult;
        console.log("DATA:   "+JSON.stringify(this.destinationList))
      } else {
        this.sourceList = response['data'].searchResult;
      }

     // console.log("this.destinationList", this.destinationList)
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
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




insDate: any = "";
insDatep: any = "";
updDate: any = "";
updDatep: any = "";

// export to excel file
export(): void {
this.isLoading = true;
if(this.responseItemsList === undefined){
  this.isLoading = false;
}
if (this.responseItemsList.length > 0) {
  let data = {
    batchCode: this.batchCode,
    category: this.category,
    plantCode: this.plantCode,
    // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
    pageLength: this.page.count
  }

  this.service.post_service(ApiserviceService.apisList.getMtBatchCodes, data).subscribe(response => {

   if(response['statusCode'] == 200){
    let excelRawData = [...response['data'].itemsList];
    let newExcelData = [];
    for (let i = 0; i < excelRawData.length; i++) {
      this.insDate = this.formatDate(excelRawData[i].insertDate);
      this.insDatep = this.effectiveDate;
      this.updDate = this.formatDate(excelRawData[i].updateDate);
      this.updDatep = this.effectiveDate;
      let data = {
        "Batch Code": excelRawData[i].batchCode,
        "Category": excelRawData[i].category,
        "Plant Code": excelRawData[i].plantCode,
        "Batch Description": excelRawData[i].batchDescription,
        "Insert User": excelRawData[i].insertUser,
        "Insert Date  ": this.insDatep,
        "Update User  ": excelRawData[i].updateUser,
        "Update Date   ": this.updDatep,
  
      }
      newExcelData.push(data)
    }
    const workBook = XLSX.utils.book_new(); // create a new blank book
    const workSheet = XLSX.utils.json_to_sheet(newExcelData);
    XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
    XLSX.writeFile(workBook, 'MtBatchCodes.xlsx');
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
  // this.toastr.error(response['message']:["Something went wrong..", "Error!"]);
  this.isLoading = false;
}
}






  

  // clear data
  clearAll() {
    this.batchCode = "";
    this.category = "";
    this.plantCode = "";
    this.batchDescription = "";
  }


  refreshData() {
    this.table.offset = 0;
    this.page.offset = 0;
     this.doSubmitSearch();
   }
}