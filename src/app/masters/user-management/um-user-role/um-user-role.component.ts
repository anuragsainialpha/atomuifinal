import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { NgForm } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;

@Component({
  selector: 'app-um-user-role',
  templateUrl: './um-user-role.component.html',
  styleUrls: ['./um-user-role.component.scss']
})
export class UmUserRoleComponent implements OnInit {

  isLoading: boolean = false;
  isShow: boolean = true;

  userRoleId:any = "";
  description:any = "";


  userRoleIdf:any = "";
  descriptionf:any = "";


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




locationId:any = "";
servprov:any = "";
elrFlag:any = "";

locationIdf :any = "";
servprovf :any = "";
elrFlagf :any = "";

locationIdu :any = "";
servprovu :any = "";
elrFlagu :any = "";


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
    localStorage.setItem("userMenu", "user-management");
  }

  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }
  // Datatable Footer
  onFooterPage(pageInfo){
    console.log(pageInfo);
    
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



  doSubmitSearch(){
    let data = {
    userRoleId: this.userRoleId,
    description: this.description,
    }
    console.log("submit data:  "+JSON.stringify(data));
    this.doSearch(data)
  }


doSearch(data) {
  console.log("submit data:  "+JSON.stringify(data));
  this.isLoading = true;
  this.responseItemsList =[];

    this.service.post_service(ApiserviceService.apisList.getUserRole, data).subscribe(response => {
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
    index: pageInfo.offset,
    locationId: this.locationId,
    servprov: this.servprov,
    elrFlag: this.elrFlag,
   }
 this.doSearch(bodyData);
}


saveForm(form: NgForm) {
  this.isLoading = true;
  let data = {
    "itemsList": [
      {
        "userRoleId": this.userRoleIdf,
        "description": this.descriptionf,
      }
    ]
  }
  console.log("submit data:  " + JSON.stringify(data));
  this.service.post_service(ApiserviceService.apisList.uploadUserRole, data).subscribe(response => {
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




// showUpdateModel(row){
//   console.log("**********"+row.itemCategory);
//   this.userIdu= row.userId,
//   this.statusu= row.status,
//   this.roleIdu= row.roleId,
//   this.passwordu= row.password,
//   this.plantCodeu= row.plantCode,
//   this.firstNameu= row.firstName,
//   this.lastNameu= row.lastName,
//   this.emailu= row.email,
//   console.log("**********"+this.userIdu);
//   $("#myModal").modal('show');
// }

// updateForm(form: NgForm) {
//   this.isLoading = true;
//   let data = {
//     "itemsList": [
//       {
//         "status": this.statusu,
//         "roleId": this.roleIdu,
//         "plantCode": this.plantCodeu,
//         "firstName": this.firstNameu,
//         "lastName": this.lastNameu,
//         "email": this.emailu
//       }
//     ]
//   }
//   console.log("updateMtTruckType submit data:  " + JSON.stringify(data));
//   this.service.post_service(ApiserviceService.apisList.updateUser, data).subscribe(response => {
//     if (response['statusCode'] == 200) {
//       this.isLoading = false;
//       this.doSubmitSearch();
//       this.toastr.success(response['message']);

//       $("#myModal").modal('hide');
//     } else {
//       this.isLoading = false;
//       this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
//     }
//   }, (err) => {
//     console.log("Error", err);
//     this.toastr.error(err ? err : "Something went wrong..", "Error!");
//     this.isLoading = false;
//   })
// }








foods: any[] = [
  {value: '', viewValue: 'None'},
  {value: 'Y', viewValue: 'Y'},
  {value: 'N', viewValue: 'N'}
];

// showUpdateModel(row){
//   console.log("**********"+row.itemCategory);
//   this.locationIdu= row.locationId,
//   this.servprovu= row.servprov,
//   this.elrFlagu= row.elrFlag,
//   console.log("**********"+this.locationIdu);
//   $("#myModal").modal('show');
// }

// updateForm(form: NgForm) {
//   this.isLoading = true;
//   let data = {
//   "itemsList": [
//     {
//       "locationId": this.locationIdu,
//       "servprov": this.servprovu,
//       "elrFlag": this.elrFlagu,
//     }
//   ]
//   }
//   console.log("updateMtTruckType submit data:  " + JSON.stringify(data));
//   this.service.post_service(ApiserviceService.apisList.updateMtElr, data).subscribe(response => {
//   if (response['statusCode'] == 200) {
//     this.isLoading = false;
//     this.doSubmitSearch();
//     this.toastr.success(response['message']);
  
//     $("#myModal").modal('hide');
//   } else {
//     this.isLoading = false;
//     this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
//   }
//   }, (err) => {
//   console.log("Error", err);
//   this.toastr.error(err ? err : "Something went wrong..", "Error!");
//   this.isLoading = false;
//   })
//   }

  





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
    userRoleId: this.userRoleId,
    description: this.description,
    pageLength: this.page.count
    // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
    }
    this.service.post_service(ApiserviceService.apisList.getUserRole, data).subscribe(response => {
     if(response['statusCode'] == 200){
      let excelRawData = [...response['data'].itemsList];
      let newExcelData = [];
      for (let i = 0; i < excelRawData.length; i++) {
    
        this.insDate = this.formatDate(excelRawData[i].insertDate);
        this.insDatep = this.effectiveDate;
        this.updDate = this.formatDate(excelRawData[i].updateDate);
        this.updDatep = this.effectiveDate;
    
        let data = {
          "User Role Id": excelRawData[i].userRoleId,
          "Description": excelRawData[i].description,
          "Insert User": excelRawData[i].insertUser,
          "Insert Date   ": this.insDatep + this.blank,
          "Update User": excelRawData[i].updateUser,
          "Update Date   ": this.updDatep,
        }
        newExcelData.push(data)
      }
      const workBook = XLSX.utils.book_new(); // create a new blank book
      const workSheet = XLSX.utils.json_to_sheet(newExcelData);
      XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
      XLSX.writeFile(workBook, 'User Role.xlsx');
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
  this.toastr.error('No records to generate excel', 'Error!');
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
    this.userRoleId= "";
    this.description = "";
    
  }

 
  refreshData() {
    this.table.offset = 0;
    this.page.offset = 0;
    this.doSubmitSearch();
  }

}
