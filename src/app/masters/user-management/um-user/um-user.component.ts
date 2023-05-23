import { Component, OnInit, ViewChild } from '@angular/core';
// import { FormControl, Validators, NgForm } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;




@Component({
  selector: 'app-um-user',
  templateUrl: './um-user.component.html',
  styleUrls: ['./um-user.component.scss']
})
export class UmUserComponent implements OnInit {

  confirmPassword: string;
  locationId: any = "";
  servprov: any = "";
  elrFlag: any = "";

  insertUser: any = "";
  insertDate: any = "";
  updateUser: any = "";
  updateDate: any = "";

  userId: any = "";
  status: any = "";
  roleId: any = "";
  password: any = "";
  plantCode: any = "";
  firstName: any = "";
  lastName: any = "";
  emailId: any = "";
  lastLoginDate: any = "";


  userIdu: any = "";
  statusu: any = "";
  roleIdu: any = "";
  passwordu: any = "";
  insertUseru: any = "";
  insertDateu: any = "";
  updateUseru: any = "";
  updateDateu: any = "";
  plantCodeu: any = "";
  firstNameu: any = "";
  lastNameu: any = "";
  lastLoginDu: any = "";
  emailIdu: any = "";

  userIdf: any = "";
  statusf: any = "";
  roleIdf: any = "";
  plantCodef: any = "";
  firstNamef: any = "";
  lastNamef: any = "";
  lastLoginDf: any = "";
  emailf: any = "";

  userRoleIdf: any = "";
  descriptionf: any = "";



  formattedDate: string;
  effectiveDate: any = "";

  displayForm: boolean = false;
  resultDataList: any[];
  responseItemsList: any[];

  //@ViewChild('createUserForm') createUserForm: NgForm;
  isLoading: boolean;
  // userId = new FormControl('', [Validators.required, Validators.maxLength(30)]);
  // roleId = new FormControl('', [Validators.required]);
  // firstName = new FormControl('', Validators.maxLength(30));
  // lastName = new FormControl('', Validators.maxLength(30));
  // plantCode = new FormControl('', [Validators.required]);
  // password = new FormControl('', [Validators.required]);
  //email = new FormControl('', [Validators.email]);
  //confirmPassword = new FormControl('', [Validators.required]);



  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    localStorage.setItem("userMenu", "user-management");

  }

  // Datatable Footer
  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }


  getErrorMessage(fieldName) {
    if (fieldName === 'userId') {
      return this.userId.hasError('required') ? 'You must enter a value' :
        this.userId.hasError('maxlength') ? 'User Id can be max 30 characters long' :
          '';
    }
    else if (fieldName === 'roleId') {
      return this.roleId.hasError('required') ? 'You must select a value' : '';
    }
    else if (fieldName === 'firstName') {
      return this.firstName.hasError('required') ? 'You must enter a value' :
        this.firstName.hasError('maxlength') ? 'First Name can be max 30 characters long' :
          '';
    }
    else if (fieldName === 'lastName') {
      return this.lastName.hasError('maxlength') ? 'Last Name can be max 30 characters long' : '';
    }
    // else if (fieldName === 'email') {
    //   return this.email.hasError('email') ? 'Not a valid email' :
    //     '';
    // }
    else if (fieldName === 'plantCode') {
      return this.plantCode.hasError('required') ? 'You must enter a value' :
        '';
    }
    else if (fieldName === 'password') {
      return this.password.hasError('required') ? 'You must enter a value' : '';
    }
    // else if (fieldName === 'confirmPassword') {
    //   return this.confirmPassword.hasError('required') ? 'You must enter a value' :
    //     this.password !== this.confirmPassword ? 'Passwords do not Match' :
    //       '';
    // }
  }

  // createUser() {
  //   console.log(this.createUserForm.valid);
  //   console.log(this.createUserForm.invalid);
  //   if (this.createUserForm.valid) {
  //     alert(111);
  //   }
  // }
  // userIdf :any = "";
  // statusf :any = "";
  // roleIdf :any = "";
  // plantCodef :any = "";
  // firstNamef :any = "";
  // lastNamef :any = "";
  // lastLoginDf :any = "";
  // emailf :any = "";

  //{value: '', viewValue: 'None'},
  foods: any[] = ['ACTIVE'];



  insertStatus: string = "";

  saveForm(form: NgForm) {
    this.isLoading = true;
    let data = {
      "itemsList": [
        {
          "userId": this.userIdf,
          "associationIdentifier": this.statusf,
          "associationValue": this.roleIdf,
        }
      ]
    }
    console.log("submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.uploadUserAssociation, data).subscribe(response => {
      //console.log("response array string: "+JSON.stringify(response));
      this.insertStatus = response['data'].message;
      if (this.insertStatus === "Sucess") {
        this.toastr.success(response['message']);
      }
      else if (this.insertStatus === "Failed") {
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







  page = {
    limit: 100,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };


  doSubmitSearch() {
    let data = {
      userId: this.userId,
      status: this.status,
      roleId: this.roleId,
      password: this.password,
      plantCode: this.plantCode,
      firstName: this.firstName,
      lastName: this.lastName,
      emailId: this.emailId,
    }
    console.log("submit data:  " + JSON.stringify(data));
    this.doSearch(data)
  }


  doSearch(data) {
    console.log("submit data:  " + JSON.stringify(data));
    this.isLoading = true;
    this.responseItemsList = [];

    this.service.post_service(ApiserviceService.apisList.getUser, data).subscribe(response => {
      this.page.count = response['data'].total;
      this.page.limit = response['data'].pageLength;
      this.responseItemsList = response['data'].itemsList;
      console.log("response length: " + this.responseItemsList.length);
      console.log("response array string: " + JSON.stringify(this.responseItemsList));
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
      userId: this.userId,
      status: this.status,
      roleId: this.roleId,
      password: this.password,
      plantCode: this.plantCode,
      firstName: this.firstName,
      lastName: this.lastName,
      emailId: this.emailId,
    }
    this.doSearch(bodyData);
  }




  showUpdateModel(row) {
    this.getUserRoleIds();
    this.getLocationIds();
    console.log("**********" + row.itemCategory);
    this.userIdu = row.userId,
      this.statusu = row.status,
      this.roleIdu = row.userRoleId,
      this.passwordu = row.password,
      this.plantCodeu = row.plantCode,
      this.firstNameu = row.firstName,
      this.lastNameu = row.lastName,
      this.emailIdu = row.emailId,
      console.log("**********" + this.userIdu);
    $("#myModal").modal('show');

  }

  locationIds: any[] = [];
  userRoleIds: any[] = [];
  servProsArray: any[] = [];

  getUserRoleIds() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getUserRoleIdsList).subscribe(response => {
      //console.log("response array string: "+JSON.stringify(response));
      this.userRoleIds = response['data'];
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  getLocationIds() {
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



  updateForm(form: NgForm) {
    this.isLoading = true;
    let data = {
      "itemsList": [
        {
          "userId": this.userIdu,
          //  "status": this.statusu,
          "status": 'ACTIVE',
          "userRoleId": this.roleIdu,
          "plantCode": this.plantCodeu,
          "firstName": this.firstNameu,
          "lastName": this.lastNameu,
          "emailId": this.emailIdu
        }
      ]
    }
    console.log("updateMtTruckType submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.updateUser, data).subscribe(response => {
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







  clearAll() {
    this.userId = "";
    this.status = "";
    this.roleId = "";
    this.password = "";
    this.plantCode = "";
    this.firstName = "";
    this.lastName = "";
    this.emailId = "";
    this.lastLoginDate = "";

  }
  refreshData() {
    this.table.offset = 0;
    this.page.offset = 0;
    this.doSubmitSearch();
  }
  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }
  isShow: boolean = true;





  insDate: any = "";
  insDatep: any = "";
  updDate: any = "";
  updDatep: any = "";
  lastLgnDate: any = "";
  lastLgnUpDate: any = "";
  blank: string = "     ";

  // export to excel file
  export(): void {
    this.isLoading = true;
    if (this.responseItemsList === undefined) {
      this.isLoading = false;
    }
    if (this.responseItemsList.length > 0) {
      let data = {
        userId: this.userId,
        status: this.status,
        roleId: this.roleId,
        password: this.password,
        plantCode: this.plantCode,
        firstName: this.firstName,
        lastName: this.lastName,
        emailId: this.emailId,
        pageLength: this.page.count
        // pageLength: this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
      }

      this.service.post_service(ApiserviceService.apisList.getUser, data).subscribe(response => {

        if (response['statusCode'] == 200) {
          let excelRawData = [...response['data'].itemsList];
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {

            this.insDate = this.formatDate(excelRawData[i].insertDate);
            this.insDatep = this.effectiveDate;
            this.updDate = this.formatDate(excelRawData[i].updateDate);
            this.updDatep = this.effectiveDate;
            this.lastLgnDate = this.formatDate(excelRawData[i].lastLoginDate);
            this.lastLgnUpDate = this.effectiveDate;
            // "Password": excelRawData[i].password,
            let data = {
              "User Id": excelRawData[i].userId,
              "Status": excelRawData[i].status,
              "User Role Id": excelRawData[i].userRoleId,
              "Plant Code": excelRawData[i].plantCode,
              "First Name": excelRawData[i].firstName,
              "Last Name": excelRawData[i].lastName,
              "Last Login Date": this.lastLgnUpDate,
              "Email Id": excelRawData[i].emailId,
              "Insert User": excelRawData[i].insertUser,
              "Insert Date   ": this.insDatep + this.blank,
              "Update User": excelRawData[i].updateUser,
              "Update Date": this.updDatep,
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'User.xlsx');
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
      this.toastr.error('No records to found to generate the excel', 'Error!');
      this.isLoading = false;
    }
  }



  upload() { }



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




}
