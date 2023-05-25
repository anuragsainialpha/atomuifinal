(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-user-management-create-user-create-user-module"],{

/***/ "./src/app/masters/user-management/create-user/create-user.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/masters/user-management/create-user/create-user.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-loader *ngIf=\"isLoading\"></app-loader>\n<h6 class=\"mt-item-header\">\n    <b> User Management &gt; Create User </b>\n    </h6>\n<br><br>\n\n<div class=\"create-user container-fluid\">\n    <form #createUserForm=\"ngForm\" name=\"createUserForm\" (ngSubmit)=\"createUserForm.form.valid && createUser(createUserForm)\"> \n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"row\">\n                <div class=\"col-sm-3\"></div>\n                <div class=\"col-sm-7\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n                       <input matInput placeholder=\"User Id\" [(ngModel)]=\"userId\" name=\"userId\" required #qty=\"ngModel\">\n                       <mat-error *ngIf=\"(createUserForm.submitted && qty.invalid)\">\n                           <p *ngIf=\"qty.errors.required\">User Id is <strong>required</strong></p>\n                         </mat-error>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-3\"></div>\n                <div class=\"col-sm-7\">\n                  <div class=\"form-group\">\n                    <div class=\"form-group\">\n                      <mat-form-field>\n                          <mat-select placeholder=\"User Role Id\" [(ngModel)]=\"userRoleId\" name=\"userRoleId\" #qty=\"ngModel\" required>\n                              <mat-option *ngFor=\"let loc of userRoleIds\" [value]=\"loc\">\n                                {{loc}}\n                              </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"(createUserForm.submitted)\">\n                                <p *ngIf=\"(createUserForm.submitted && qty.invalid)\">User Role Id is <strong>required</strong></p>\n                              </mat-error>\n                      </mat-form-field>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-3\"></div>\n                <div class=\"col-sm-7\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"First Name\" [(ngModel)]=\"firstName\"  name=\"firstName\" required oninput=\"this.value = this.value.toUpperCase()\">\n                      <mat-error *ngIf=\"(createUserForm.submitted && qty.invalid)\">First Name is <strong>required</strong></mat-error>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-3\"></div>\n                <div class=\"col-sm-7\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Last Name\" aria-label=\"State\" [(ngModel)]=\"lastName\"  name=\"lastName\" required oninput=\"this.value = this.value.toUpperCase()\">\n                      <mat-error *ngIf=\"(createUserForm.submitted && qty.invalid)\">Last Name is <strong>required</strong></mat-error>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"row\">\n                <div class=\"col-sm-7\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n                      <input type=\"text\" matInput placeholder=\"Email\"  aria-label=\"State\" \n                      pattern=\"^(?!\\.)(?!.*\\.$)(?!.*?\\.\\.)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~\\-.]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\" #emailModel=\"ngModel\" [(ngModel)]=\"email\" name=\"email\" required>\n                      \n                      <!-- <div *ngIf=\"elinebreaker\">\n                          <br><p class=\"mat-error mat-form-field-subscript-wrapper\"> {{emailerror}}</p>\n                       </div> -->\n                      <!-- <mat-error *ngIf=\"(createUserForm.submitted && email.required)\">Email is <strong>required</strong></mat-error>\n                      <mat-error *ngIf=\"(createUserForm.submitted && email.pattern)\">Enrter a valid <strong>Email</strong></mat-error> -->\n                      \n                    <mat-error *ngIf=\"(createUserForm.submitted && emailModel.invalid) || (emailModel.invalid)\">\n                      <p *ngIf=\"emailModel.errors.required\"> Email is\n                        <strong>required</strong>\n                      </p>\n                      <p *ngIf=\"emailModel.errors.pattern\">Please enter valid  \n                        <strong>email</strong>\n                      </p>\n                    </mat-error>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-7\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n                        <mat-select placeholder=\"Plant Code\" [(ngModel)]=\"plantCode\" name=\"plantCode\" #qty=\"ngModel\" required>\n                            <mat-option *ngFor=\"let loc of locationIds\" [value]=\"loc\">\n                              {{loc}}\n                            </mat-option>\n                          </mat-select>\n                          <mat-error *ngIf=\"(createUserForm.submitted)\">\n                              <p *ngIf=\"(createUserForm.submitted && qty.invalid)\">Plant Code is <strong>required</strong></p>\n                            </mat-error>\n                      <!-- <mat-error *ngIf=\"plantCode.invalid && (createUserForm.submitted ||plantCode.touched)\">{{getErrorMessage(\"plantCode\")}}</mat-error> -->\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-7\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Password\" aria-label=\"State\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" required>\n                      <mat-error *ngIf=\"(createUserForm.submitted && qty.invalid)\">Password is <strong>required</strong></mat-error>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-7\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Confirm Password\" aria-label=\"State\"  (keyup)=\"onKeyUp($event)\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" required>\n                      <mat-error *ngIf=\"(createUserForm.submitted && qty.invalid)\">Confirm Password is <strong>required</strong></mat-error>\n                      <div *ngIf=\"linebreaker\">\n                         <br><p class=\"mat-error mat-form-field-subscript-wrapper\"> {{values}}</p>\n                      </div>\n                     </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"row\">\n                <div class=\"col-sm-3\">\n                </div>\n                <div class=\"col-sm-2\">\n                  <button mat-raised-button class=\"btm-action-btn\">Create</button>\n                </div>\n              </div>\n            </div>\n          </div>\n     \n        </div>\n      </form>\n</div>"

/***/ }),

/***/ "./src/app/masters/user-management/create-user/create-user.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/masters/user-management/create-user/create-user.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvdXNlci1tYW5hZ2VtZW50L2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/masters/user-management/create-user/create-user.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/masters/user-management/create-user/create-user.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        // userId = new FormControl('', [Validators.required, Validators.maxLength(30)]);
        // //userRoleId = new FormControl('', [Validators.required]);
        // firstName = new FormControl('', Validators.maxLength(30));
        // lastName = new FormControl('', Validators.maxLength(30));
        // email = new FormControl('', [Validators.required,Validators.email]);
        // //plantCode = new FormControl('', [Validators.required]);
        // password = new FormControl('', [Validators.required]);
        // //confirmPassword = new FormControl('', [Validators.required]);
        this.userId = "";
        this.userRoleId = "";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.plantCode = "";
        this.password = "";
        this.confirmPassword = "";
        this.locationIds = [];
        this.userRoleIds = [];
        this.servProsArray = [];
        this.values = '';
        this.emailerror = '';
        this.linebreaker = false;
        this.elinebreaker = false;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "user-management");
        this.getUserRoleIds();
        this.getLocationIds();
    };
    CreateUserComponent.prototype.getUserRoleIds = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getUserRoleIdsList).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            _this.userRoleIds = response['data'];
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    CreateUserComponent.prototype.getLocationIds = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getLocationIdsList).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            _this.locationIds = response['data'];
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    CreateUserComponent.prototype.getErrorMessage = function (fieldName) {
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
                this.firstName.hasError('maxlength') ? 'First Name can be max 30 characters long' : '';
        }
        else if (fieldName === 'lastName') {
            return this.firstName.hasError('required') ? 'You must enter a value' :
                this.lastName.hasError('maxlength') ? 'Last Name can be max 30 characters long' : '';
        }
        else if (fieldName === 'email') {
            return this.email.hasError('required') ? 'You must enter a value' :
                this.email.hasError('email') ? 'Not a valid email' : '';
        }
        // else if (fieldName === 'plantCode') {
        //   return this.plantCode.hasError('required') ? 'You must enter a value' :'';
        // }
        else if (fieldName === 'password') {
            return this.password.hasError('required') ? 'You must enter a value' : '';
        }
        else if (fieldName === 'confirmPassword') {
            return this.confirmPassword.hasError('required') ? 'You must enter a value' :
                this.password !== this.confirmPassword ? 'Passwords do not Match' : '';
        }
    };
    CreateUserComponent.prototype.checkHasErrors = function () {
        if (this.createUserForm.valid) {
            if (this.userId.value !== "" && this.userId.value !== "" && this.userId.value !== "") {
                return false;
            }
        }
    };
    CreateUserComponent.prototype.createUser = function (form) {
        var _this = this;
        // console.log("submit data: this.userRoleId.value " + this.userRoleId);
        // if(this.userRoleId=="")
        if (this.linebreaker == true || this.elinebreaker == true) {
            console.log("submit data: emptry return  ");
            return "";
        }
        if (this.userId !== "" && this.userRoleId !== "" && this.firstName !== "" && this.lastName !== "" &&
            this.email !== "" && this.plantCode !== "" && this.password !== "" && this.confirmPassword !== "") {
            var data = {
                "itemsList": [{
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
            };
            console.log("submit data:  " + JSON.stringify(data));
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.uploadUser, data).subscribe(function (response) {
                _this.isLoading = false;
                _this.toastr.success(response['message']);
                form.resetForm();
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    CreateUserComponent.prototype.onKeyUp = function (event) {
        //  this.values = event.target.value;
        if (this.password != event.target.value) {
            this.values = "Password do not match";
            this.linebreaker = true;
        }
        else {
            this.values = "";
            this.linebreaker = false;
        }
    };
    ;
    CreateUserComponent.prototype.checkEmail = function (event) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
            this.elinebreaker = false;
        }
        else {
            this.emailerror = "please enter valid email";
            this.elinebreaker = true;
        }
    };
    ;
    CreateUserComponent.prototype.createUser11 = function () {
        var _this = this;
        console.log("submit data: this.userRoleId.value " + this.userRoleId);
        console.log("submit data: this.plantCode.value " + this.plantCode);
        // if(this.userRoleId=="")
        // this.hasErrors = this.checkHasErrors();
        if (this.userId.value !== "" && this.userRoleId !== "" && this.firstName.value !== "" && this.lastName.value !== "" &&
            this.email.value !== "" && this.plantCode !== "" && this.password.value !== "" && this.confirmPassword.value !== "") {
            var data = {
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
            };
            console.log("submit data:  " + JSON.stringify(data));
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.uploadUser, data).subscribe(function (response) {
                _this.isLoading = false;
                _this.toastr.success(response['message']);
                _this.createUserForm.reset();
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    CreateUserComponent.prototype.upload = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('createUserForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], CreateUserComponent.prototype, "createUserForm", void 0);
    CreateUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__(/*! ./create-user.component.html */ "./src/app/masters/user-management/create-user/create-user.component.html"),
            styles: [__webpack_require__(/*! ./create-user.component.scss */ "./src/app/masters/user-management/create-user/create-user.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/masters/user-management/create-user/create-user.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/masters/user-management/create-user/create-user.module.ts ***!
  \***************************************************************************/
/*! exports provided: CreateUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserModule", function() { return CreateUserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _create_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-user.component */ "./src/app/masters/user-management/create-user/create-user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _create_user_component__WEBPACK_IMPORTED_MODULE_2__["CreateUserComponent"] }
];
var CreateUserModule = /** @class */ (function () {
    function CreateUserModule() {
    }
    CreateUserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
            ],
            declarations: [_create_user_component__WEBPACK_IMPORTED_MODULE_2__["CreateUserComponent"]]
        })
    ], CreateUserModule);
    return CreateUserModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-user-management-create-user-create-user-module.js.map