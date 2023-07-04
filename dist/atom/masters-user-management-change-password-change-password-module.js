(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-user-management-change-password-change-password-module"],{

/***/ "./src/app/masters/user-management/change-password/change-password.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/masters/user-management/change-password/change-password.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-loader *ngIf=\"isLoading\"></app-loader>\n<h6 class=\"mt-item-header\">\n    <b> User Management &gt; Change Password </b>\n    </h6>\n<br><br>\n<!-- <mat-card> (click)=\"changePassword()\"-->\n<div class=\"change-password container-fluid\">\n  <form #createUserForm=\"ngForm\" (ngSubmit)=\"createUserForm.form.valid && changePassword(createUserForm)\">\n    <div class=\"row\">\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <mat-form-field>\n              <mat-select placeholder=\"User Id\" [(ngModel)]=\"userId\" name=\"userId\" required>\n                  <mat-option *ngFor=\"let loc of userIds\" [value]=\"loc\">\n                    {{loc}}\n                  </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"(createUserForm.submitted)\">\n                    <p *ngIf=\"(createUserForm.submitted && qty.invalid)\">Plant Code is <strong>required</strong></p>\n                  </mat-error>\n              <!-- <input matInput placeholder=\"User Id\" [(ngModel)]=\"userId\" name=\"userId\" required #qty=\"ngModel\"> -->\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <mat-form-field>\n              <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" #qty=\"ngModel\" required>\n              <mat-error *ngIf=\"(createUserForm.submitted && qty.invalid)\">Password is <strong>required</strong></mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <mat-form-field>\n            <input matInput placeholder=\"Confirm Password\" (keyup)=\"onKeyUp($event)\" aria-label=\"State\" autocomplete=\"off\" #qty=\"ngModel\"  [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" required>\n            <mat-error *ngIf=\"(createUserForm.submitted && qty.invalid)\">Confirm Password is <strong>required</strong></mat-error>\n            <div *ngIf=\"linebreaker\">\n                <br><p class=\"mat-error mat-form-field-subscript-wrapper\"> {{values}}</p>\n             </div>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-2\"></div>\n          <div class=\"col-sm-4\"> \n            <button class=\"btm-action-btn\" mat-raised-button>Submit</button>\n      </div>\n    </div>\n    \n  </form>\n</div>\n<!-- </mat-card> -->"

/***/ }),

/***/ "./src/app/masters/user-management/change-password/change-password.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/masters/user-management/change-password/change-password.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvdXNlci1tYW5hZ2VtZW50L2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/masters/user-management/change-password/change-password.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/masters/user-management/change-password/change-password.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
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




var ChangePasswordComponent = /** @class */ (function () {
    // userId = new FormControl('', [Validators.required, Validators.maxLength(30)]);
    // email = new FormControl('', [Validators.email]);
    // password = new FormControl('', [Validators.required, Validators.maxLength(5)]);
    // confirmPassword = new FormControl('', [Validators.required]);
    function ChangePasswordComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.userId = "";
        this.password = "";
        this.confirmPassword = "";
        this.userIds = [];
        this.servProsArray = [];
        this.values = '';
        this.linebreaker = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "user-management");
        this.getUserIds();
    };
    ChangePasswordComponent.prototype.getUserIds = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getUserIdsList).subscribe(function (response) {
            _this.userIds = response['data'];
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    ChangePasswordComponent.prototype.getErrorMessage = function (fieldName) {
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
    };
    ChangePasswordComponent.prototype.changePassword = function (form) {
        var _this = this;
        if (this.linebreaker == true) {
            console.log("submit data: emptry return  ");
            return "";
        }
        if (this.userId !== "" && this.password !== "" && this.confirmPassword !== "") {
            var data = {
                "itemsList": [
                    {
                        "userId": this.userId,
                        "password": this.password,
                    }
                ]
            };
            console.log("submit data:  " + JSON.stringify(data));
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.changePassword, data).subscribe(function (response) {
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
    ChangePasswordComponent.prototype.onKeyUp = function (event) {
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
    ChangePasswordComponent.prototype.onKeyPress = function (event) {
        this.values = event.target.value;
    };
    ;
    ChangePasswordComponent.prototype.onChange = function (event) {
        this.values = event.target.value;
    };
    ;
    ChangePasswordComponent.prototype.onKeydown = function (event) {
        this.values = event.target.value;
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('createUserForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ChangePasswordComponent.prototype, "createUserForm", void 0);
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/masters/user-management/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/masters/user-management/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/masters/user-management/change-password/change-password.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/masters/user-management/change-password/change-password.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ChangePasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function() { return ChangePasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _change_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password.component */ "./src/app/masters/user-management/change-password/change-password.component.ts");
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
    { path: '', component: _change_password_component__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordComponent"] }
];
var ChangePasswordModule = /** @class */ (function () {
    function ChangePasswordModule() {
    }
    ChangePasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [_change_password_component__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordComponent"]]
        })
    ], ChangePasswordModule);
    return ChangePasswordModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-user-management-change-password-change-password-module.js.map