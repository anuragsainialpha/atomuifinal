(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-paas-masters-mt-excess-waiting-loc-limit-mt-excess-waiting-loc-limit-module"],{

/***/ "./src/app/masters/paas-masters/mt-excess-waiting-loc-limit/mt-excess-waiting-loc-limit.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-excess-waiting-loc-limit/mt-excess-waiting-loc-limit.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n      <b> PaaS Masters &gt; Excess Waiting Loc Limit</b>\n    <span class=\"pull-right refresh-span\">\n        <button class=\"theme-small-button\" (click)=\"displayAddForm()\" matTooltip=\"Add New\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          </button>\n      <!-- <button class=\"theme-small-button\" (click)=\"upload()\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n\n\n\n<div class=\"mt-item-fields\" *ngIf=\"isShow\">\n  <div class=\"col-md-12 row\">\n    <div class=\"col-md-12 padding-right-40\">\n      <div class=\"row\">\n\n            <div class=\"col-md-2\">\n                <mat-form-field>\n                   <input matInput placeholder=\"Location ID\" [(ngModel)]=\"reportingLoc\" name=\"reportingLoc\">\n                    <!-- <mat-select placeholder=\"Location Id\" [(ngModel)]=\"reportingLoc\" name=\"reportingLoc\" #prior=\"ngModel\">\n                        <mat-option *ngFor=\"let loc of locationIds\" [value]=\"loc\">\n                          {{loc}}\n                        </mat-option>\n                      </mat-select> -->\n                </mat-form-field>\n            </div>\n\n            <!-- <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Item Description\" [(ngModel)]=\"itemDescription\" name=\"itemDescription\">\n                </mat-form-field>\n              </div>\n            </div> -->\n      </div>\n    </div>\n   \n    <div class=\"pull-right\">\n      <div class=\"search-fileds\">\n        <button class=\"theme-small-button\" (click)=\"doSubmitSearch()\" matTooltip=\"Search\">\n          <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n<div class=\"mt-item-table\">\n    <div>\n      <!-- <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [rows]='responseItemsList' [scrollbarH]=\"true\" \n      [externalPaging]=\"true\" (page)=\"datatablePageData($event)\"\n        [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\" [offset]=\"page.offset\">\n         -->\n        <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [columnMode]=\"'force'\"\n        [rows]='responseItemsList' [externalPaging]=\"true\" (page)=\"datatablePageData($event)\" [scrollbarH]=\"false\"\n        [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\"\n        [offset]=\"page.offset\">\n        \n        \n        <ngx-datatable-column name=\"Location ID\" [width]=\"170\" [resizeable]=\"false\" prop=\"itemId\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.reportingLoc}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Excess Time (Hrs)\" [width]=\"170\" [resizeable]=\"false\" prop=\"itemDescription\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.excessTime}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Insert User\" [width]=\"170\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.insertUser}}\n            </ng-template>\n          </ngx-datatable-column>\n  \n        <ngx-datatable-column name=\"Insert Date\" [width]=\"170\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{trimDate(row.insertDate)}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Update User\" [width]=\"170\" [resizeable]=\"false\" prop=\"updateUser\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.updateUser}}\n            </ng-template>\n          </ngx-datatable-column>\n  \n  \n        <ngx-datatable-column name=\"Update Date\" [width]=\"170\" [resizeable]=\"false\" prop=\"updateDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{trimDate(row.updateDate)}}\n          </ng-template>\n        </ngx-datatable-column>\n  \n        <ngx-datatable-column name=\"Action\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n            <button class=\"theme-small-button btn\" matTooltip=\"Modify\" (click)=\"showUpdateModel(row)\" [disabled]=\"(row.isError)\">\n              <i class=\"fa fa-edit fa-2x\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n        </ngx-datatable-column>\n           <!-- Footer Template starts -->\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected |\n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n            [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n  \n      </ngx-datatable>\n    </div>\n  </div>\n  </div>\n\n\n<!--  -->\n<div class=\"modal\" id=\"myModal\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\">\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && updateForm(f))\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title text-primary\">Update Excess Waiting Loc Limit</h4>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n  </div>\n  <div class=\"modal-body\">\n      <!-- <div class=\"form-group\">\n          <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n            <input matInput placeholder=\"Reporting Location\" aria-label=\"State\" [(ngModel)]=\"reportingLocu\" name=\"reportingLocu\"\n              required autocomplete=\"off\">\n            <mat-error *ngIf=\"(f.submitted && reportingLocu.invalid)\">\n              <p *ngIf=\"reportingLocu.errors.required\">Reporting Location is <strong>required</strong>\n              </p>\n            </mat-error>\n          </mat-form-field>\n        </div> -->\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"Excess Time (Hrs)\" aria-label=\"State\" [(ngModel)]=\"excessTimeu\" name=\"excessTimeu\"\n          required autocomplete=\"off\">\n        <mat-error *ngIf=\"(f.submitted && excessTimeu.invalid)\">\n          <p *ngIf=\"excessTimeu.errors.required\">Excess Time is\n            <strong>required</strong>\n          </p>\n        </mat-error>\n        <p class=\"mtop6\">Excess Time (Hrs)</p>\n      </mat-form-field>\n    </div>\n   \n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btm-action-btn\">Update</button>\n    <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\" data-dismiss=\"modal\">Close</button>\n  </div>\n</form>\n</div>\n</div>\n</div>\n\n\n\n<br><br>\n<div class=\"mt-item-fields\" *ngIf=\"displayForm\">\n<div class=\"col-md-12 text-center padding-right-40\">\n<mat-card>\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && saveForm(f))\">\n  <h4 class=\"mt-item-header text-center text-primary\">\n    <b> Add Excess Waiting Loc Limit </b></h4>\n  <br>\n\n    <div class=\"row\">\n    <!-- <div class=\"col-md-2\">\n            </div> -->\n    <div class=\"col-md-5\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <!-- <input matInput placeholder=\"Location ID\" [(ngModel)]=\"reportingLocf\" name=\"reportingLocf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Location ID is <strong>required</strong></p>\n            </mat-error> -->\n            <mat-select placeholder=\"Location Id\" [(ngModel)]=\"reportingLocf\" name=\"reportingLocf\" #qty=\"ngModel\" required>\n                <mat-option *ngFor=\"let loc of locationIds\" [value]=\"loc\">\n                  {{loc}}\n                </mat-option>\n              </mat-select>\n            <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                <p *ngIf=\"qty.errors.required\">Location Id is <strong>required</strong></p>\n              </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Excess Time (Hrs)\" [(ngModel)]=\"excessTimef\" name=\"excessTimef\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Excess Time is <strong>required</strong></p>\n            </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-1\">\n      <div class=\"form-group\">\n        <button mat-raised-button color=\"primary\" class=\"btm-action-btn\">Save</button>\n      </div>\n    </div>\n  </div>\n  \n\n</form>\n</mat-card>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/masters/paas-masters/mt-excess-waiting-loc-limit/mt-excess-waiting-loc-limit.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-excess-waiting-loc-limit/mt-excess-waiting-loc-limit.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvcGFhcy1tYXN0ZXJzL210LWV4Y2Vzcy13YWl0aW5nLWxvYy1saW1pdC9tdC1leGNlc3Mtd2FpdGluZy1sb2MtbGltaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/masters/paas-masters/mt-excess-waiting-loc-limit/mt-excess-waiting-loc-limit.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-excess-waiting-loc-limit/mt-excess-waiting-loc-limit.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: MtExcessWaitingLocLimitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtExcessWaitingLocLimitComponent", function() { return MtExcessWaitingLocLimitComponent; });
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





var MtExcessWaitingLocLimitComponent = /** @class */ (function () {
    function MtExcessWaitingLocLimitComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.isLoading = false;
        this.isShow = true;
        this.reportingLoc = "";
        this.excessTime = "";
        this.reportingLocf = "";
        this.excessTimef = "";
        this.reportingLocu = "";
        this.excessTimeu = "";
        this.salesSku = "";
        this.compQty = "";
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
        this.locationIds = [];
        this.servProsArray = [];
        this.insertStatus = "";
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
    MtExcessWaitingLocLimitComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "paas-master");
        this.getLocationIds();
    };
    // Datatable Footer
    MtExcessWaitingLocLimitComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    MtExcessWaitingLocLimitComponent.prototype.getLocationIds = function () {
        var _this = this;
        this.isLoading = true;
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
    //show the filter
    MtExcessWaitingLocLimitComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    MtExcessWaitingLocLimitComponent.prototype.displayAddForm = function () {
        if (this.displayForm)
            this.displayForm = false;
        else
            this.displayForm = true;
    };
    MtExcessWaitingLocLimitComponent.prototype.upload = function () { };
    MtExcessWaitingLocLimitComponent.prototype.doSubmitSearch = function () {
        var data = {
            reportingLoc: this.reportingLoc,
            excessTime: this.excessTime,
        };
        //console.log("submit data:  "+JSON.stringify(data));
        this.doSearch(data);
    };
    MtExcessWaitingLocLimitComponent.prototype.doSearch = function (data) {
        var _this = this;
        console.log("submit data:  " + JSON.stringify(data));
        this.isLoading = true;
        this.responseItemsList = [];
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMtExcessWaitingLocLimit, data).subscribe(function (response) {
            _this.page.count = response['data'].total;
            _this.page.limit = response['data'].pageLength;
            _this.responseItemsList = response['data'].itemsList;
            //console.log("response length: "+this.responseItemsList.length);
            //console.log("response array string: "+JSON.stringify(this.responseItemsList));
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //server side pagination
    MtExcessWaitingLocLimitComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            reportingLoc: this.reportingLoc,
            excessTime: this.excessTime,
        };
        this.doSearch(bodyData);
    };
    MtExcessWaitingLocLimitComponent.prototype.saveForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "reportingLoc": this.reportingLocf,
                    "excessTime": this.excessTimef,
                }
            ]
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.uploadMtExcessWaitingLocLimit, data).subscribe(function (response) {
            _this.insertStatus = response['data'].message;
            if (_this.insertStatus === "Sucess") {
                //console.log("response array string: "+JSON.stringify(response));
                _this.toastr.success(response['message']);
            }
            else if (_this.insertStatus === "Failed") {
                _this.toastr.error("Please check!", "Could not insert record..");
            }
            _this.isLoading = false;
            form.resetForm();
            _this.doSubmitSearch();
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    MtExcessWaitingLocLimitComponent.prototype.updateForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "reportingLoc": this.reportingLocu,
                    "excessTime": this.excessTimeu,
                }
            ]
        };
        console.log("updateMtTruckType submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.updateMtExcessWaitingLocLimit, data).subscribe(function (response) {
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
    MtExcessWaitingLocLimitComponent.prototype.showUpdateModel = function (row) {
        this.reportingLocu = row.reportingLoc;
        this.excessTimeu = row.excessTime;
        console.log("**********" + this.reportingLocu);
        $("#myModal").modal('show');
    };
    // export to excel file
    MtExcessWaitingLocLimitComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        if (this.responseItemsList === undefined) {
            this.isLoading = false;
        }
        if (this.responseItemsList.length > 0) {
            var data = {
                reportingLoc: this.reportingLoc,
                excessTime: this.excessTime,
                // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
                pageLength: this.page.count
            };
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMtExcessWaitingLocLimit, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var excelRawData = response['data'].itemsList.slice();
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        _this.insDate = _this.formatDate(excelRawData[i].insertDate);
                        _this.insDatep = _this.effectiveDate;
                        _this.updDate = _this.formatDate(excelRawData[i].updateDate);
                        _this.updDatep = _this.effectiveDate;
                        var data_1 = {
                            "Location ID": excelRawData[i].reportingLoc,
                            "Excess Time (Hrs)": excelRawData[i].excessTime,
                            "Insert User   ": excelRawData[i].insertUser + _this.blank,
                            "Insert Date   ": _this.insDatep + _this.blank,
                            "Update User   ": excelRawData[i].updateUser + _this.blank,
                            "Update Date   ": _this.updDatep + _this.blank,
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, 'Excess Waiting Loc Limit.xlsx');
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
            this.toastr.error('No records to generate excel...', 'Error!');
            this.isLoading = false;
        }
    };
    MtExcessWaitingLocLimitComponent.prototype.formatDate = function (data) {
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
    MtExcessWaitingLocLimitComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    MtExcessWaitingLocLimitComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    MtExcessWaitingLocLimitComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    // clear data
    MtExcessWaitingLocLimitComponent.prototype.clearAll = function () {
        this.reportingLoc = "";
    };
    MtExcessWaitingLocLimitComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.page.offset = 0;
        this.doSubmitSearch();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], MtExcessWaitingLocLimitComponent.prototype, "table", void 0);
    MtExcessWaitingLocLimitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mt-excess-waiting-loc-limit',
            template: __webpack_require__(/*! ./mt-excess-waiting-loc-limit.component.html */ "./src/app/masters/paas-masters/mt-excess-waiting-loc-limit/mt-excess-waiting-loc-limit.component.html"),
            styles: [__webpack_require__(/*! ./mt-excess-waiting-loc-limit.component.scss */ "./src/app/masters/paas-masters/mt-excess-waiting-loc-limit/mt-excess-waiting-loc-limit.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MtExcessWaitingLocLimitComponent);
    return MtExcessWaitingLocLimitComponent;
}());



/***/ }),

/***/ "./src/app/masters/paas-masters/mt-excess-waiting-loc-limit/mt-excess-waiting-loc-limit.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-excess-waiting-loc-limit/mt-excess-waiting-loc-limit.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: MtExcessWaitingLocLimitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtExcessWaitingLocLimitModule", function() { return MtExcessWaitingLocLimitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mt_excess_waiting_loc_limit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mt-excess-waiting-loc-limit.component */ "./src/app/masters/paas-masters/mt-excess-waiting-loc-limit/mt-excess-waiting-loc-limit.component.ts");
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
    { path: '', component: _mt_excess_waiting_loc_limit_component__WEBPACK_IMPORTED_MODULE_2__["MtExcessWaitingLocLimitComponent"] }
];
var MtExcessWaitingLocLimitModule = /** @class */ (function () {
    function MtExcessWaitingLocLimitModule() {
    }
    MtExcessWaitingLocLimitModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [_mt_excess_waiting_loc_limit_component__WEBPACK_IMPORTED_MODULE_2__["MtExcessWaitingLocLimitComponent"]]
        })
    ], MtExcessWaitingLocLimitModule);
    return MtExcessWaitingLocLimitModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-paas-masters-mt-excess-waiting-loc-limit-mt-excess-waiting-loc-limit-module.js.map