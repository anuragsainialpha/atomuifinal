import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
declare var $: any;

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  @ViewChild('createUserForm') createUserForm: NgForm;
  isLoading: boolean;

  // userId = new FormControl('', [Validators.required, Validators.maxLength(30)]);
  // //userRoleId = new FormControl('', [Validators.required]);
  // firstName = new FormControl('', Validators.maxLength(30));
  // lastName = new FormControl('', Validators.maxLength(30));
  // email = new FormControl('', [Validators.required,Validators.email]);
  // //plantCode = new FormControl('', [Validators.required]);
  // password = new FormControl('', [Validators.required]);
  // //confirmPassword = new FormControl('', [Validators.required]);


  userId: any = "";
  userRoleId : any = "";
  firstName : any = "";
  lastName : any = "";
  email : any = "";
  plantCode : any = "";
  password: any = "";
  confirmPassword : any = "";






  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService
  ) { }


  ngOnInit() {
    localStorage.setItem("userMenu", "user-management");
    this.getUserRoleIds();
    this.getLocationIds();
  }

locationIds:any[]=[];  
userRoleIds:any[]=[];
servProsArray:any[]=[];

getUserRoleIds() {
  this.isLoading=true;
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
    this.isLoading=false;
  }, (err) => {
    console.log("Error", err);
    this.toastr.error(err ? err : "Something went wrong..", "Error!");
    this.isLoading = false;
  })
}




  hasErrors:boolean;

  getErrorMessage(fieldName) {
    if (fieldName === 'userId') {
      return this.userId.hasError('required') ? 'You must enter a value' :
        this.userId.hasError('maxlength') ? 'User Id can be max 30 characters long' :
          '';
    }
    // else if (fieldName === 'userRoleId') {
    //   return this.userRoleId.hasError('required') ? 'You must select a value' : '';
    // }
    else if (fieldName === 'firstName') {
      return this.firstName.hasError('required') ? 'You must enter a value' :
        this.firstName.hasError('maxlength') ? 'First Name can be max 30 characters long' :'';
    }
    else if (fieldName === 'lastName') {
      return this.firstName.hasError('required') ? 'You must enter a value' :
      this.lastName.hasError('maxlength') ? 'Last Name can be max 30 characters long' : '';
    }
    else if (fieldName === 'email') {
      return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :'';
    }
    // else if (fieldName === 'plantCode') {
    //   return this.plantCode.hasError('required') ? 'You must enter a value' :'';
    // }
    else if (fieldName === 'password') {
      return this.password.hasError('required') ? 'You must enter a value' : '';
    }
    else if (fieldName === 'confirmPassword') {
      return this.confirmPassword.hasError('required') ? 'You must enter a value' :
       this.password !== this.confirmPassword ? 'Passwords do not Match' :'';
    }
  }


  checkHasErrors(){
    if (this.createUserForm.valid) {
      if(this.userId.value !=="" && this.userId.value !=="" && this.userId.value !==""){
      return false;
      }
    }
  }

  createUser(form: NgForm) {
   // console.log("submit data: this.userRoleId.value " + this.userRoleId);
   // if(this.userRoleId=="")
if(this.linebreaker==true || this.elinebreaker==true){
  console.log("submit data: emptry return  ");
  return "";
}
   if(this.userId !=="" && this.userRoleId !=="" && this.firstName !=="" && this.lastName !=="" && 
   this.email !=="" && this.plantCode !=="" && this.password !==""  && this.confirmPassword !==""){
    let data = {
      "itemsList": [ {
      "userId": this.userId,
      "userRoleId": this.userRoleId,
      "firstName": this.firstName,
      "lastName": this.lastName,
      "emailId": this.email,
      "plantCode": this.plantCode,
      "password": this.password,
      "confirmPassword": this.confirmPassword,
      "status": 'ACTIVE',
    }
  ]
    }
    console.log("submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.uploadUser, data).subscribe(response => {
      this.isLoading = false;
      this.toastr.success(response['message']);
      form.resetForm();
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })

   }
  }



  values = '';
  emailerror = '';
  linebreaker:boolean=false;
  elinebreaker:boolean=false;
    onKeyUp(event: any) {
      //  this.values = event.target.value;
        if(this.password != event.target.value){
          this.values = "Password do not match";
          this.linebreaker=true;
        }else{
          this.values ="";
          this.linebreaker=false;
        }
    };


    checkEmail(event: any) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)){
          this.elinebreaker=false;
        }else{
          this.emailerror ="please enter valid email";
          this.elinebreaker=true;
        }
    };
  
 













 createUser11() {
    console.log("submit data: this.userRoleId.value " + this.userRoleId);
    console.log("submit data: this.plantCode.value " + this.plantCode);
   
   // if(this.userRoleId=="")
   // this.hasErrors = this.checkHasErrors();
   if(this.userId.value !=="" && this.userRoleId !=="" && this.firstName.value !=="" && this.lastName.value !=="" && 
   this.email.value !=="" && this.plantCode !=="" && this.password.value !==""  && this.confirmPassword.value !==""){
    let data = {
      "itemsList": [
        {
      "userId": this.userId.value,
      "userRoleId": this.userRoleId,
      "firstName": this.firstName.value,
      "lastName": this.lastName.value,
      "emailId": this.email.value,
      "plantCode": this.plantCode,
      "password": this.password.value,
      "confirmPassword": this.confirmPassword.value,
      "status": 'ACTIVE',
    }
  ]
    }

    console.log("submit data:  " + JSON.stringify(data));

    this.service.post_service(ApiserviceService.apisList.uploadUser, data).subscribe(response => {
      this.isLoading = false;
      this.toastr.success(response['message']);
      this.createUserForm.reset();
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })

   }
  }

  upload() { }

}
