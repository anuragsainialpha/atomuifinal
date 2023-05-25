(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-user-management-um-user-role-um-user-role-module"],{

/***/ "./src/app/masters/user-management/um-user-role/um-user-role.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/masters/user-management/um-user-role/um-user-role.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n      <b> User Management &gt; User Role</b>\n    <span class=\"pull-right refresh-span\">\n        <!-- <button class=\"theme-small-button\" (click)=\"displayAddForm()\" matTooltip=\"Add New Valve\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          </button> -->\n      <!-- <button class=\"theme-small-button\" (click)=\"upload()\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n\n\n\n<div class=\"mt-item-fields\" *ngIf=\"isShow\">\n  <div class=\"col-md-12 row\">\n    <div class=\"col-md-12 padding-right-40\">\n      <div class=\"row\">\n\n            <div class=\"col-md-2\">\n                <mat-form-field>\n                  <input matInput placeholder=\"User Role Id\" [(ngModel)]=\"userRoleId\" name=\"userRoleId\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-md-2\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Description\" [(ngModel)]=\"description\" name=\"description\">\n                </mat-form-field>\n            </div>\n\n      </div>\n    </div>\n   \n    <div class=\"pull-right\">\n      <div class=\"search-fileds\">\n        <button class=\"theme-small-button\" (click)=\"doSubmitSearch()\" matTooltip=\"Search\">\n          <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n  <div class=\"mt-item-table\">\n    <div>\n      <!-- <ngx-datatable class='material ' #table [rows]='responseItemsList' \n      [scrollbarH]=\"false\" [externalPaging]=\"true\" (page)=\"datatablePageData($event)\"\n        [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\" [offset]=\"page.offset\"> -->\n        <ngx-datatable class='material' #table [rows]='responseItemsList' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n        [scrollbarH]=\"false\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [externalPaging]=\"true\" [limit]=\"page.limit\"\n        [count]=\"page.count\" [offset]=\"page.offset\" (page)=\"datatablePageData($event)\">\n        <ngx-datatable-column name=\"User Role Id\" [width]=\"280\" [resizeable]=\"false\" prop=\"userRoleId\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.userRoleId}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Description\" [width]=\"335\" [resizeable]=\"false\" prop=\"description\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.description}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Insert User\" [width]=\"180\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.insertUser}}\n            </ng-template>\n          </ngx-datatable-column>\n  \n        <ngx-datatable-column name=\"Insert Date\" [width]=\"180\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{trimDate(row.insertDate)}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Update User\" [width]=\"180\" [resizeable]=\"false\" prop=\"updateUser\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.updateUser}}\n            </ng-template>\n          </ngx-datatable-column>\n  \n  \n        <ngx-datatable-column name=\"Update Date\" [width]=\"180\" [resizeable]=\"false\" prop=\"updateDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{trimDate(row.updateDate)}}\n          </ng-template>\n        </ngx-datatable-column>\n  \n        <!-- <ngx-datatable-column name=\"Action\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n            <button class=\"theme-small-button btn\" matTooltip=\"Modify Item\" (click)=\"showUpdateModel(row)\" [disabled]=\"(row.isError)\">\n              <i class=\"fa fa-edit fa-2x\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n        </ngx-datatable-column> -->\n\n           <!-- Footer Template starts -->\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected |\n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n            [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n  \n      </ngx-datatable>\n    </div>\n  </div>\n  </div>\n\n\n\n\n\n\n<br><br>\n<div class=\"mt-item-fields\" *ngIf=\"displayForm\">\n<div class=\"col-md-12 text-center padding-right-40\">\n<mat-card>\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && saveForm(f))\">\n  <h4 class=\"mt-item-header text-center text-primary\">\n    <b> Add User Role </b></h4>\n  <br>\n  <div class=\"row\">\n   \n      <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <mat-form-field>\n              <input matInput placeholder=\"User Role Id\" [(ngModel)]=\"userRoleIdf\" name=\"userRoleIdf\" required #qty=\"ngModel\">\n              <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                  <p *ngIf=\"qty.errors.required\">Role Id is <strong>required</strong></p>\n                </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <mat-form-field>\n              <input matInput placeholder=\"Description\" [(ngModel)]=\"descriptionf\" name=\"descriptionf\" required #qty=\"ngModel\">\n              <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                  <p *ngIf=\"qty.errors.required\">Description is <strong>required</strong></p>\n                </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n   \n    <div class=\"col-md-1\">\n      <div class=\"form-group\">\n        <button mat-raised-button color=\"primary\" class=\"btm-action-btn\">Save</button>\n      </div>\n    </div>\n  </div>\n</form>\n</mat-card>\n</div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/masters/user-management/um-user-role/um-user-role.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/masters/user-management/um-user-role/um-user-role.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvdXNlci1tYW5hZ2VtZW50L3VtLXVzZXItcm9sZS91bS11c2VyLXJvbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/masters/user-management/um-user-role/um-user-role.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/masters/user-management/um-user-role/um-user-role.component.ts ***!
  \********************************************************************************/
/*! exports provided: UmUserRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmUserRoleComponent", function() { return UmUserRoleComponent; });
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





var UmUserRoleComponent = /** @class */ (function () {
    function UmUserRoleComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.isLoading = false;
        this.isShow = true;
        this.userRoleId = "";
        this.description = "";
        this.userRoleIdf = "";
        this.descriptionf = "";
        this.itemSeq = "";
        this.oeCode = "";
        this.itemIdf = "";
        this.itemDescriptionf = "";
        this.itemCategoryf = "";
        this.batchCodef = "";
        this.valveIdf = "";
        this.itemId = "";
        this.itemDescription = "";
        this.itemCategory = "";
        this.batchCode = "";
        this.valveId = "";
        this.itemIdu = "";
        this.itemDescriptionu = "";
        this.itemCategoryu = "";
        this.batchCodeu = "";
        this.valveIdu = "";
        this.locationId = "";
        this.servprov = "";
        this.elrFlag = "";
        this.locationIdf = "";
        this.servprovf = "";
        this.elrFlagf = "";
        this.locationIdu = "";
        this.servprovu = "";
        this.elrFlagu = "";
        this.insertUser = "";
        this.insertDate = "";
        this.updateUser = "";
        this.updateDate = "";
        this.itemClassification = "";
        this.itemType = "";
        this.itemGroup = "";
        this.tte = "";
        this.loadFactor = "";
        this.effectiveDate = "";
        this.displayForm = false;
        this.editing = {};
        this.page = {
            limit: 100,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
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
        this.foods = [
            { value: '', viewValue: 'None' },
            { value: 'Y', viewValue: 'Y' },
            { value: 'N', viewValue: 'N' }
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
        this.insDate = "";
        this.insDatep = "";
        this.updDate = "";
        this.updDatep = "";
        this.blank = "     ";
        this.month_names = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
        };
    }
    UmUserRoleComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "user-management");
    };
    //show the filter
    UmUserRoleComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    // Datatable Footer
    UmUserRoleComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    UmUserRoleComponent.prototype.displayAddForm = function () {
        if (this.displayForm)
            this.displayForm = false;
        else
            this.displayForm = true;
    };
    UmUserRoleComponent.prototype.upload = function () { };
    UmUserRoleComponent.prototype.doSubmitSearch = function () {
        var data = {
            userRoleId: this.userRoleId,
            description: this.description,
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.doSearch(data);
    };
    UmUserRoleComponent.prototype.doSearch = function (data) {
        var _this = this;
        console.log("submit data:  " + JSON.stringify(data));
        this.isLoading = true;
        this.responseItemsList = [];
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getUserRole, data).subscribe(function (response) {
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
    UmUserRoleComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            locationId: this.locationId,
            servprov: this.servprov,
            elrFlag: this.elrFlag,
        };
        this.doSearch(bodyData);
    };
    UmUserRoleComponent.prototype.saveForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "userRoleId": this.userRoleIdf,
                    "description": this.descriptionf,
                }
            ]
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.uploadUserRole, data).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            _this.isLoading = false;
            _this.toastr.success(response['message']);
            form.resetForm();
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // export to excel file
    UmUserRoleComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        if (this.responseItemsList === undefined) {
            this.isLoading = false;
        }
        if (this.responseItemsList.length > 0) {
            var data = {
                userRoleId: this.userRoleId,
                description: this.description,
                pageLength: this.page.count
                // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
            };
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getUserRole, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var excelRawData = response['data'].itemsList.slice();
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        _this.insDate = _this.formatDate(excelRawData[i].insertDate);
                        _this.insDatep = _this.effectiveDate;
                        _this.updDate = _this.formatDate(excelRawData[i].updateDate);
                        _this.updDatep = _this.effectiveDate;
                        var data_1 = {
                            "User Role Id": excelRawData[i].userRoleId,
                            "Description": excelRawData[i].description,
                            "Insert User": excelRawData[i].insertUser,
                            "Insert Date   ": _this.insDatep + _this.blank,
                            "Update User": excelRawData[i].updateUser,
                            "Update Date   ": _this.updDatep,
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, 'User Role.xlsx');
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
            this.toastr.error('No records to generate excel', 'Error!');
            this.isLoading = false;
        }
    };
    UmUserRoleComponent.prototype.formatDate = function (data) {
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
    UmUserRoleComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    UmUserRoleComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    UmUserRoleComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    // clear data
    UmUserRoleComponent.prototype.clearAll = function () {
        this.userRoleId = "";
        this.description = "";
    };
    UmUserRoleComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.page.offset = 0;
        this.doSubmitSearch();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], UmUserRoleComponent.prototype, "table", void 0);
    UmUserRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-um-user-role',
            template: __webpack_require__(/*! ./um-user-role.component.html */ "./src/app/masters/user-management/um-user-role/um-user-role.component.html"),
            styles: [__webpack_require__(/*! ./um-user-role.component.scss */ "./src/app/masters/user-management/um-user-role/um-user-role.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], UmUserRoleComponent);
    return UmUserRoleComponent;
}());



/***/ }),

/***/ "./src/app/masters/user-management/um-user-role/um-user-role.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/masters/user-management/um-user-role/um-user-role.module.ts ***!
  \*****************************************************************************/
/*! exports provided: UmUserRoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmUserRoleModule", function() { return UmUserRoleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _um_user_role_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./um-user-role.component */ "./src/app/masters/user-management/um-user-role/um-user-role.component.ts");
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
    { path: '', component: _um_user_role_component__WEBPACK_IMPORTED_MODULE_2__["UmUserRoleComponent"] }
];
var UmUserRoleModule = /** @class */ (function () {
    function UmUserRoleModule() {
    }
    UmUserRoleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [_um_user_role_component__WEBPACK_IMPORTED_MODULE_2__["UmUserRoleComponent"]]
        })
    ], UmUserRoleModule);
    return UmUserRoleModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-user-management-um-user-role-um-user-role-module.js.map