(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-user-management-um-user-um-user-module"],{

/***/ "./src/app/masters/user-management/um-user/um-user.component.html":
/*!************************************************************************!*\
  !*** ./src/app/masters/user-management/um-user/um-user.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n  <h6 class=\"mt-item-header\">\r\n      <b> User Management > Users </b>\r\n    <span class=\"pull-right refresh-span\">\r\n        <button class=\"theme-small-button\" [routerLink]=\"['/admin/user-management/create-user']\"  matTooltip=\"Create User\">\r\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n          </button>\r\n      <!-- <button class=\"theme-small-button\" (click)=\"upload()\" matTooltip=\"Upload excel\">\r\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\r\n      </button> -->\r\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\r\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\r\n      </button>\r\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\r\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\r\n      </button>\r\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\r\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\r\n      </button>\r\n    </span>\r\n  </h6>\r\n\r\n\r\n\r\n\r\n  <div class=\"mt-item-fields\" *ngIf=\"isShow\">\r\n      <div class=\"col-md-12 row\">\r\n        <div class=\"col-md-12 padding-right-40\">\r\n          <div class=\"row\">\r\n    \r\n                <div class=\"col-md2\">\r\n                  <div class=\"form-group\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"User Id\" [(ngModel)]=\"userId\" name=\"userId\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-1\">\r\n                    <div class=\"form-group\">\r\n                      <mat-form-field>\r\n                        <!-- <input matInput placeholder=\"Status\" [(ngModel)]=\"status\" name=\"status\"> -->\r\n                        <mat-select placeholder=\"Status\" [(ngModel)]=\"status\" name=\"status\">\r\n                            <mat-option *ngFor=\"let food of foods\" [value]=\"food\">\r\n                              {{food}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field>\r\n                          <input matInput placeholder=\"User Role Id\" [(ngModel)]=\"roleId\" name=\"roleId\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                \r\n                <!-- <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Password\" [(ngModel)]=\"servprov\" name=\"servprov\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div> -->\r\n                <div class=\"col-md-1\">\r\n                    <div class=\"form-group\">\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Plant Code\" [(ngModel)]=\"plantCode\" name=\"plantCode\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field>\r\n                          <input matInput placeholder=\"First Name\" [(ngModel)]=\"firstName\" name=\"firstName\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <mat-form-field>\r\n                            <input matInput placeholder=\"Last Name\" [(ngModel)]=\"lastName\" name=\"lastName\">\r\n                          </mat-form-field>\r\n                        </div>\r\n                      </div>\r\n\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <mat-form-field>\r\n                            <input matInput placeholder=\"Email Id\" [(ngModel)]=\"emailId\" name=\"emailId\">\r\n                          </mat-form-field>\r\n                        </div>\r\n                      </div>\r\n    \r\n          </div>\r\n        </div>\r\n       \r\n        <div class=\"pull-right\">\r\n          <div class=\"search-fileds\">\r\n            <button class=\"theme-small-button\" (click)=\"doSubmitSearch()\" matTooltip=\"Search\">\r\n              <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\r\n              <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n    \r\n      </div>\r\n    </div>\r\n    \r\n\r\n\r\n    <div class=\"mt-item-table\">\r\n        <div>\r\n          <!-- <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [rows]='responseItemsList' \r\n          [scrollbarH]=\"false\" [externalPaging]=\"true\"\r\n            (page)=\"datatablePageData($event)\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\"\r\n            [count]=\"page.count\" [offset]=\"page.offset\"> -->\r\n            <ngx-datatable class='material' #table [rows]='responseItemsList' [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n      [scrollbarH]=\"false\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [externalPaging]=\"true\" [limit]=\"page.limit\"\r\n      [count]=\"page.count\" [offset]=\"page.offset\" (page)=\"datatablePageData($event)\">\r\n            <ngx-datatable-column name=\"User Id\" [width]=\"125\" [resizeable]=\"false\" prop=\"userId\" [sortable]=\"true\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{row.userId}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Status\" [width]=\"70\" [resizeable]=\"false\" prop=\"status\" [sortable]=\"true\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{row.status}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"User Role Id\" [width]=\"95\" [resizeable]=\"false\" prop=\"roleId\" [sortable]=\"true\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{row.userRoleId}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <!-- <ngx-datatable-column name=\"Password\" [width]=\"145\" [resizeable]=\"false\" prop=\"elrFlag\" [sortable]=\"true\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{row.elrFlag}}\r\n              </ng-template>\r\n            </ngx-datatable-column> -->\r\n            <ngx-datatable-column name=\"Plant Code\" [width]=\"75\" [resizeable]=\"false\" prop=\"plantCode\" [sortable]=\"true\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{row.plantCode}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"First Name\" [width]=\"110\" [resizeable]=\"false\" prop=\"firstName\" [sortable]=\"true\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{row.firstName}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Last Name\" [width]=\"110\" [resizeable]=\"false\" prop=\"lastName\" [sortable]=\"true\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{row.lastName}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Last Login Date\" [width]=\"100\" [resizeable]=\"false\" prop=\"lastLoginDate\" [sortable]=\"true\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{trimDate(row.lastLoginDate)}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n      \r\n  \r\n            <ngx-datatable-column name=\"Email Id\" [width]=\"210\" [resizeable]=\"false\" prop=\"emailId\" [sortable]=\"true\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{row.emailId}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n             \r\n  \r\n              <ngx-datatable-column name=\"Insert User\" [width]=\"85\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.insertUser}}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n        \r\n              <ngx-datatable-column name=\"Insert Date\" [width]=\"90\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{trimDate(row.insertDate)}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n      \r\n              <ngx-datatable-column name=\"Update User\" [width]=\"85\" [resizeable]=\"false\" prop=\"updateUser\" [sortable]=\"true\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.updateUser}}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n        \r\n        \r\n              <ngx-datatable-column name=\"Update Date\" [width]=\"90\" [resizeable]=\"false\" prop=\"updateDate\" [sortable]=\"true\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{trimDate(row.updateDate)}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n        \r\n              <ngx-datatable-column name=\"Action\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\">\r\n                <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\r\n                  <button class=\"theme-small-button btn\" matTooltip=\"Modify\" (click)=\"showUpdateModel(row)\" [disabled]=\"(row.isError)\">\r\n                    <i class=\"fa fa-edit fa-2x\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n                 <!-- Footer Template starts -->\r\n      <ngx-datatable-footer>\r\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\r\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\r\n          <div class=\"page-count\">\r\n            <span *ngIf=\"selectedCount\">\r\n              {{selectedCount.toLocaleString()}} Selected |\r\n            </span>\r\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\r\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\r\n            {{(rowCount)}} records.\r\n          </div>\r\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\r\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\r\n            [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\r\n          </datatable-pager>\r\n        </ng-template>\r\n      </ngx-datatable-footer>\r\n      <!-- Footer Template Ends -->\r\n  \r\n  \r\n          </ngx-datatable>\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n  <!--  -->\r\n<div class=\"modal\" id=\"myModal\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n\r\n          <!-- <form #createUserForm=\"ngForm\" (ngSubmit)=\"createUserForm.form.valid\">  -->\r\n         <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && updateForm(f))\"> \r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title text-primary\">Update User</h4>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"form-group\">\r\n              <mat-form-field>\r\n                  <mat-select placeholder=\"User Role Id\" [(ngModel)]=\"roleIdu\" name=\"roleIdu\" #qty=\"ngModel\" required>\r\n                      <mat-option *ngFor=\"let loc of userRoleIds\" [value]=\"loc\">\r\n                        {{loc}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <p class=\"mtop6\">User Role Id</p>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <mat-form-field>\r\n                  <mat-select placeholder=\"Plant Code\" [(ngModel)]=\"plantCodeu\" name=\"plantCodeu\" #qty=\"ngModel\" required>\r\n                      <mat-option *ngFor=\"let loc of locationIds\" [value]=\"loc\">\r\n                        {{loc}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <p class=\"mtop6\">Plant Code</p>\r\n              </mat-form-field>\r\n\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <mat-form-field appearance=\"standard\" class=\"example-full-width\">\r\n                <input matInput placeholder=\"First Name\" aria-label=\"State\" [(ngModel)]=\"firstNameu\" name=\"firstNameu\"\r\n                  required autocomplete=\"off\" oninput=\"this.value = this.value.toUpperCase()\">\r\n                <mat-error *ngIf=\"(f.submitted && firstNameu.invalid)\">\r\n                  <p *ngIf=\"firstNameu.errors.required\">first Name is <strong>required</strong>\r\n                  </p>\r\n                </mat-error>\r\n                <p class=\"mtop6\">First Name</p>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <mat-form-field appearance=\"standard\" class=\"example-full-width\">\r\n                <input matInput placeholder=\"Last Name\" aria-label=\"State\" [(ngModel)]=\"lastNameu\" name=\"lastNameu\"\r\n                  required autocomplete=\"off\" oninput=\"this.value = this.value.toUpperCase()\">\r\n                  \r\n                <mat-error *ngIf=\"(f.submitted && lastNameu.invalid)\">\r\n                  <p *ngIf=\"lastNameu.errors.required\">Last Name is <strong>required</strong>\r\n                  </p>\r\n                </mat-error>\r\n                  <p class=\"mtop6\">Last Name</p>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <mat-form-field appearance=\"standard\" class=\"example-full-width\">\r\n                <input matInput placeholder=\"Email\" aria-label=\"State\" [(ngModel)]=\"emailIdu\" name=\"emailIdu\"\r\n                  required autocomplete=\"off\">\r\n                <mat-error *ngIf=\"(f.submitted && emailIdu.invalid)\">\r\n                  <p *ngIf=\"emailIdu.errors.required\">Email is <strong>required</strong>\r\n                  </p>\r\n                </mat-error>\r\n                <p class=\"mtop6\">Email</p>\r\n              </mat-form-field>\r\n            </div>\r\n  \r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btm-action-btn\">Update</button>\r\n            <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/masters/user-management/um-user/um-user.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/masters/user-management/um-user/um-user.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".change-password,\n.create-user {\n  margin-top: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVycy91c2VyLW1hbmFnZW1lbnQvdW0tdXNlci9DOlxcVXNlcnNcXEFiaGV5U29vZFxcT25lRHJpdmUgLSBBY2NlbGFscGhhIFNvZnR3YXJlIFB2dC4gTHRkXFxEZXNrdG9wXFxhdG9tIGFwb2xsb1xcQXBvbGxvXFxOZXctIEFudXJhZ1xcYXRvbS11aS9zcmNcXGFwcFxcbWFzdGVyc1xcdXNlci1tYW5hZ2VtZW50XFx1bS11c2VyXFx1bS11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUVFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVycy91c2VyLW1hbmFnZW1lbnQvdW0tdXNlci91bS11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL21peGlucyc7XHJcblxyXG4uY2hhbmdlLXBhc3N3b3JkLFxyXG4uY3JlYXRlLXVzZXIge1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/masters/user-management/um-user/um-user.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/masters/user-management/um-user/um-user.component.ts ***!
  \**********************************************************************/
/*! exports provided: UmUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmUserComponent", function() { return UmUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UmUserComponent = /** @class */ (function () {
    function UmUserComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.locationId = "";
        this.servprov = "";
        this.elrFlag = "";
        this.insertUser = "";
        this.insertDate = "";
        this.updateUser = "";
        this.updateDate = "";
        this.userId = "";
        this.status = "";
        this.roleId = "";
        this.password = "";
        this.plantCode = "";
        this.firstName = "";
        this.lastName = "";
        this.emailId = "";
        this.lastLoginDate = "";
        this.userIdu = "";
        this.statusu = "";
        this.roleIdu = "";
        this.passwordu = "";
        this.insertUseru = "";
        this.insertDateu = "";
        this.updateUseru = "";
        this.updateDateu = "";
        this.plantCodeu = "";
        this.firstNameu = "";
        this.lastNameu = "";
        this.lastLoginDu = "";
        this.emailIdu = "";
        this.userIdf = "";
        this.statusf = "";
        this.roleIdf = "";
        this.plantCodef = "";
        this.firstNamef = "";
        this.lastNamef = "";
        this.lastLoginDf = "";
        this.emailf = "";
        this.userRoleIdf = "";
        this.descriptionf = "";
        this.effectiveDate = "";
        this.displayForm = false;
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
        this.foods = ['ACTIVE'];
        this.insertStatus = "";
        this.page = {
            limit: 100,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.locationIds = [];
        this.userRoleIds = [];
        this.servProsArray = [];
        this.isShow = true;
        this.insDate = "";
        this.insDatep = "";
        this.updDate = "";
        this.updDatep = "";
        this.lastLgnDate = "";
        this.lastLgnUpDate = "";
        this.blank = "     ";
        this.month_names = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
        };
    }
    UmUserComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "user-management");
    };
    // Datatable Footer
    UmUserComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    UmUserComponent.prototype.getErrorMessage = function (fieldName) {
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
    };
    UmUserComponent.prototype.saveForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "userId": this.userIdf,
                    "associationIdentifier": this.statusf,
                    "associationValue": this.roleIdf,
                }
            ]
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.uploadUserAssociation, data).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            _this.insertStatus = response['data'].message;
            if (_this.insertStatus === "Sucess") {
                _this.toastr.success(response['message']);
            }
            else if (_this.insertStatus === "Failed") {
                _this.toastr.error("Please check!", "Could not insert record..");
            }
            _this.isLoading = false;
            form.resetForm();
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    UmUserComponent.prototype.doSubmitSearch = function () {
        var data = {
            userId: this.userId,
            status: this.status,
            roleId: this.roleId,
            password: this.password,
            plantCode: this.plantCode,
            firstName: this.firstName,
            lastName: this.lastName,
            emailId: this.emailId,
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.doSearch(data);
    };
    UmUserComponent.prototype.doSearch = function (data) {
        var _this = this;
        console.log("submit data:  " + JSON.stringify(data));
        this.isLoading = true;
        this.responseItemsList = [];
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getUser, data).subscribe(function (response) {
            _this.page.count = response['data'].total;
            _this.page.limit = response['data'].pageLength;
            _this.responseItemsList = response['data'].itemsList;
            console.log("response length: " + _this.responseItemsList.length);
            console.log("response array string: " + JSON.stringify(_this.responseItemsList));
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //server side pagination
    UmUserComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            userId: this.userId,
            status: this.status,
            roleId: this.roleId,
            password: this.password,
            plantCode: this.plantCode,
            firstName: this.firstName,
            lastName: this.lastName,
            emailId: this.emailId,
        };
        this.doSearch(bodyData);
    };
    UmUserComponent.prototype.showUpdateModel = function (row) {
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
    };
    UmUserComponent.prototype.getUserRoleIds = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getUserRoleIdsList).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            _this.userRoleIds = response['data'];
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    UmUserComponent.prototype.getLocationIds = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLocationIdsList).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            _this.locationIds = response['data'];
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    UmUserComponent.prototype.updateForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
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
        };
        console.log("updateMtTruckType submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.updateUser, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.isLoading = false;
                _this.doSubmitSearch();
                _this.toastr.success(response['message']);
                $("#myModal").modal('hide');
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    UmUserComponent.prototype.clearAll = function () {
        this.userId = "";
        this.status = "";
        this.roleId = "";
        this.password = "";
        this.plantCode = "";
        this.firstName = "";
        this.lastName = "";
        this.emailId = "";
        this.lastLoginDate = "";
    };
    UmUserComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.page.offset = 0;
        this.doSubmitSearch();
    };
    //show the filter
    UmUserComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    // export to excel file
    UmUserComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        if (this.responseItemsList === undefined) {
            this.isLoading = false;
        }
        if (this.responseItemsList.length > 0) {
            var data = {
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
            };
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getUser, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var excelRawData = response['data'].itemsList.slice();
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        _this.insDate = _this.formatDate(excelRawData[i].insertDate);
                        _this.insDatep = _this.effectiveDate;
                        _this.updDate = _this.formatDate(excelRawData[i].updateDate);
                        _this.updDatep = _this.effectiveDate;
                        _this.lastLgnDate = _this.formatDate(excelRawData[i].lastLoginDate);
                        _this.lastLgnUpDate = _this.effectiveDate;
                        // "Password": excelRawData[i].password,
                        var data_1 = {
                            "User Id": excelRawData[i].userId,
                            "Status": excelRawData[i].status,
                            "User Role Id": excelRawData[i].userRoleId,
                            "Plant Code": excelRawData[i].plantCode,
                            "First Name": excelRawData[i].firstName,
                            "Last Name": excelRawData[i].lastName,
                            "Last Login Date": _this.lastLgnUpDate,
                            "Email Id": excelRawData[i].emailId,
                            "Insert User": excelRawData[i].insertUser,
                            "Insert Date   ": _this.insDatep + _this.blank,
                            "Update User": excelRawData[i].updateUser,
                            "Update Date": _this.updDatep,
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, 'User.xlsx');
                    _this.isLoading = false;
                }
                else {
                    _this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
                    _this.isLoading = false;
                }
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
        else {
            this.toastr.error('No records to found to generate the excel', 'Error!');
            this.isLoading = false;
        }
    };
    UmUserComponent.prototype.upload = function () { };
    UmUserComponent.prototype.formatDate = function (data) {
        if (data != null && data) {
            var formatted = new Date(data), mnth = ("0" + (formatted.getMonth() + 1)).slice(-2), day = ("0" + formatted.getDate()).slice(-2);
            this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
            this.effectiveDate = this.formattedDate;
            return this.formatDate;
        }
        else {
            this.effectiveDate = "";
        }
    };
    UmUserComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    UmUserComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    UmUserComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], UmUserComponent.prototype, "table", void 0);
    UmUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-um-user',
            template: __webpack_require__(/*! ./um-user.component.html */ "./src/app/masters/user-management/um-user/um-user.component.html"),
            styles: [__webpack_require__(/*! ./um-user.component.scss */ "./src/app/masters/user-management/um-user/um-user.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], UmUserComponent);
    return UmUserComponent;
}());



/***/ }),

/***/ "./src/app/masters/user-management/um-user/um-user.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/masters/user-management/um-user/um-user.module.ts ***!
  \*******************************************************************/
/*! exports provided: UmUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmUserModule", function() { return UmUserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _um_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./um-user.component */ "./src/app/masters/user-management/um-user/um-user.component.ts");
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






// import { ReactiveFormsModule, FormsModule } from '@angular/forms';


var routes = [
    { path: '', component: _um_user_component__WEBPACK_IMPORTED_MODULE_2__["UmUserComponent"] }
];
var UmUserModule = /** @class */ (function () {
    function UmUserModule() {
    }
    UmUserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                // ReactiveFormsModule,
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [
                _um_user_component__WEBPACK_IMPORTED_MODULE_2__["UmUserComponent"]
            ]
        })
    ], UmUserModule);
    return UmUserModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-user-management-um-user-um-user-module.js.map