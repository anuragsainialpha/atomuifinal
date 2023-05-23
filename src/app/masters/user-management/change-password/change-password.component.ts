import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
declare var $: any;


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  @ViewChild('createUserForm') createUserForm: NgForm;

  isLoading: boolean;

  userId: any = "";
  password: any = "";
  confirmPassword : any = "";



  // userId = new FormControl('', [Validators.required, Validators.maxLength(30)]);
  // email = new FormControl('', [Validators.email]);
  // password = new FormControl('', [Validators.required, Validators.maxLength(5)]);
  // confirmPassword = new FormControl('', [Validators.required]);

  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    localStorage.setItem("userMenu", "user-management");
    this.getUserIds();
  }

userIds:any[]=[];
servProsArray:any[]=[];

getUserIds() {
  this.isLoading=true;
  this.service.get_service(ApiserviceService.apisList.getUserIdsList).subscribe(response => {
    this.userIds = response['data'];
    this.isLoading=false;
  }, (err) => {
    console.log("Error", err);
    this.toastr.error(err ? err : "Something went wrong..", "Error!");
    this.isLoading = false;
  })
}


  getErrorMessage(fieldName) {
    if (fieldName === 'userId') {
      return this.userId.hasError('required') ? 'must be min 5 and max 30 char long' :
        this.userId.hasError('maxlength') ? 'User Id can be max 30 characters long' :
          '';
    }
    else if (fieldName === 'password') {
      return this.password.hasError('required') ? 'Please enter password' : '';
    }
    else if (fieldName === 'confirmPassword') {
      return this.confirmPassword.hasError('required') ? 'You must enter a value' : this.password !== this.confirmPassword ? 'Passwords do not Match' : '';
    }
  }








  changePassword(form: NgForm) {
    if(this.linebreaker==true){
      console.log("submit data: emptry return  ");
      return "";
    }

   if(this.userId !=="" && this.password !==""  && this.confirmPassword !==""){
    let data = {
      "itemsList": [
        {
      "userId": this.userId,
      "password": this.password,
    }
  ]
    }

    console.log("submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.changePassword, data).subscribe(response => {
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
  linebreaker:boolean=false;
  onKeyUp(event: any) {
    //  this.values = event.target.value;
      if(this.password != event.target.value){
        this.values = "Password do not match"
        this.linebreaker=true;
      }else{
        this.values ="";
        this.linebreaker=false;
      }
  };




// clear(){
//   userId = "";
//   email = new FormControl('', [Validators.email]);
//   password = new FormControl('', [Validators.required, Validators.maxLength(5)]);
//   confirmPassword = new FormControl('', [Validators.required]);
// }


  // clearAll() {
  //   this.userId = "";
  //   this.password = "";
  //   this.city = "";
  // }




  

  onKeyPress(event: any) {
     this.values = event.target.value;
  };

  onChange(event: any) {
     this.values = event.target.value;
  };

  onKeydown(event: any) {
    this.values = event.target.value;
  };


}
