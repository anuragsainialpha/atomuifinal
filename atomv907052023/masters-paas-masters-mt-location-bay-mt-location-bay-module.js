(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-paas-masters-mt-location-bay-mt-location-bay-module"],{

/***/ "./src/app/masters/paas-masters/mt-location-bay/mt-location-bay.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-location-bay/mt-location-bay.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n      <b> PaaS Masters &gt; Location Bay</b>\n    <span class=\"pull-right refresh-span\">\n        <button class=\"theme-small-button\" (click)=\"displayAddForm()\" matTooltip=\"Add New\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          </button>\n       <!-- <button class=\"theme-small-button\" [routerLink]=\"['/admin/paas-masters/upload-mt-location-bay']\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n<div class=\"mt-item-fields\" *ngIf=\"isShow\">\n  <div class=\"col-md-12 row\">\n    <div class=\"col-md-12 padding-right-40\">\n      <div class=\"row\">\n\n            <div class=\"col-md-2\">\n                <mat-form-field>\n                   <input matInput placeholder=\"Location Id\" [(ngModel)]=\"locationId\" name=\"locationId\"> \n                  <!-- <mat-select placeholder=\"Location Id\" [(ngModel)]=\"locationId\" name=\"locationId\" #prior=\"ngModel\">\n                      <mat-option *ngFor=\"let loc of locationIds\" [value]=\"loc\">\n                        {{loc}}\n                      </mat-option>\n                    </mat-select> -->\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-md-2\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Bay Id\" [(ngModel)]=\"bayId\" name=\"bayId\">\n                </mat-form-field>\n            </div>\n\n            <!-- <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput placeholder=\"Bay Status\" [(ngModel)]=\"bayStatus\" name=\"bayStatus\">\n                  </mat-form-field>\n                </div>\n              </div> -->\n\n\n\n              <!-- <div class=\"col-md-2\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput placeholder=\"Batch Code\" [(ngModel)]=\"batchCode\" name=\"batchCode\">\n                  </mat-form-field>\n                </div>\n              </div> -->\n\n      </div>\n    </div>\n   \n    <div class=\"pull-right\">\n      <div class=\"search-fileds\">\n        <button class=\"theme-small-button\" (click)=\"doSubmitSearch()\" matTooltip=\"Search\">\n          <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n  <div class=\"mt-item-table\">\n    <div>\n      <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [columnMode]=\"'force'\"\n      [rows]='responseItemsList' [scrollbarH]=\"false\" \n      [externalPaging]=\"true\" (page)=\"datatablePageData($event)\"\n        [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\" [offset]=\"page.offset\">\n        <ngx-datatable-column name=\"Location Id\" [width]=\"100\" [resizeable]=\"false\" prop=\"locationId\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.locationId}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Bay Id\" [width]=\"80\" [resizeable]=\"false\" prop=\"bayId\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.bayId}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Bay Description\" [width]=\"180\" [resizeable]=\"false\" prop=\"bayDesc\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.bayDescription}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Bay Status\" [width]=\"100\" [resizeable]=\"false\" prop=\"bayStatus\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.bayStatus}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Insert User\" [width]=\"130\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.insertUser}}\n            </ng-template>\n          </ngx-datatable-column>\n  \n        <ngx-datatable-column name=\"Insert Date\" [width]=\"100\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{trimDate(row.insertDate)}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Update User\" [width]=\"100\" [resizeable]=\"false\" prop=\"updateUser\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.updateUser}}\n            </ng-template>\n          </ngx-datatable-column>\n  \n  \n        <ngx-datatable-column name=\"Update Date\" [width]=\"100\" [resizeable]=\"false\" prop=\"updateDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{trimDate(row.updateDate)}}\n          </ng-template>\n        </ngx-datatable-column>\n  \n        \n        <ngx-datatable-column name=\"Action\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n            <button class=\"theme-delete-button btn\" matTooltip=\"Delete\" (click)=\"showUpdateModel(row)\" [disabled]=\"(row.isError)\">\n              <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n        </ngx-datatable-column>\n           <!-- Footer Template starts -->\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected |\n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n            [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n  \n      </ngx-datatable>\n    </div>\n  </div>\n  </div>\n\n\n\n<!--  -->\n<div class=\"modal\" id=\"myModal\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\">\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && updateForm(f))\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title text-primary\">Are you sure you want to delete</h4>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n  </div>\n  <!-- <div class=\"modal-body\"> -->\n      <!-- <div class=\"form-group\">\n          <mat-form-field appearance=\"standard\" class=\"invisible example-full-width\">\n            <input matInput placeholder=\"Location Id\" aria-label=\"State\" [(ngModel)]=\"locationIdu\" name=\"locationIdu\"\n               autocomplete=\"off\">\n            <mat-error *ngIf=\"(f.submitted && locationIdu.invalid)\">\n              <p *ngIf=\"locationIdu.errors.required\">Item Category is <strong>required</strong>\n              </p>\n            </mat-error>\n          </mat-form-field>\n        </div> -->\n    <!-- <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"invisible example-full-width\">\n        <input matInput placeholder=\"Bay Id\" aria-label=\"State\" [(ngModel)]=\"bayIdu\" name=\"bayIdu\"\n           autocomplete=\"off\">\n        <mat-error *ngIf=\"(f.submitted && bayIdu.invalid)\">\n          <p *ngIf=\"bayIdu.errors.required\">Batch Code is\n            <strong>required</strong>\n          </p>\n        </mat-error>\n      </mat-form-field>\n    </div> -->\n    <!-- <div class=\"form-group\">\n        <mat-form-field appearance=\"standard\" class=\"invisible  example-full-width\">\n          <input matInput placeholder=\"Bay Status\" aria-label=\"State\" [(ngModel)]=\"bayStatusu\" name=\"bayStatusu\"\n             autocomplete=\"off\">\n          <mat-error *ngIf=\"(f.submitted && bayStatusu.invalid)\">\n            <p *ngIf=\"bayIdu.errors.required\">Batch Code is\n              <strong>required</strong>\n            </p>\n          </mat-error>\n        </mat-form-field>\n      </div> -->\n   \n  <!-- </div> -->\n  <div class=\"modal-footer\">\n    <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btm-action-btn\">Delete</button>\n    <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\" data-dismiss=\"modal\">Cancel</button>\n  </div>\n</form>\n</div>\n</div>\n</div>\n\n\n\n<br><br>\n<div class=\"mt-item-fields\" *ngIf=\"displayForm\">\n<div class=\"col-md-12 text-center padding-right-40\">\n<mat-card>\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && saveForm(f))\">\n  <h4 class=\"mt-item-header text-center text-primary\">\n    <b> Add Location Bay </b></h4>\n  <br>\n  <div class=\"row\">\n    <!-- <div class=\"col-md-2\">\n            </div> -->\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <mat-form-field>\n            <mat-select placeholder=\"Location Id\" [(ngModel)]=\"locationIdf\" name=\"locationIdf\" #qty=\"ngModel\" required>\n                <mat-option *ngFor=\"let loc of locationIds\" [value]=\"loc\" >\n                  {{loc}}\n                </mat-option>\n              </mat-select>\n            <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                <p *ngIf=\"qty.errors.required\">Location Id is <strong>required</strong></p>\n              </mat-error>\n\n          <!-- <input matInput placeholder=\"Location Id\" [(ngModel)]=\"locationIdf\" name=\"locationIdf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Location Id is <strong>required</strong></p>\n            </mat-error> -->\n        </mat-form-field>\n\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Bay Id\" [(ngModel)]=\"bayIdf\" name=\"bayIdf\" required #qty=\"ngModel\" required>\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Bay Id is <strong>required</strong></p>\n            </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <!-- <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Bay Desc\" [(ngModel)]=\"bayDescf\" name=\"bayDescf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Bay Desc is <strong>required</strong></p>\n            </mat-error>\n        </mat-form-field>\n      </div>\n    </div> -->\n    <!-- <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Bay Status\" [(ngModel)]=\"bayStatusf\" name=\"bayStatusf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Bay Status is <strong>required</strong></p>\n            </mat-error>\n        </mat-form-field>\n      </div>\n    </div> -->\n    <div class=\"col-md-1\">\n      <div class=\"form-group\">\n        <button mat-raised-button color=\"primary\" class=\"btm-action-btn\">Save</button>\n      </div>\n    </div>\n  </div>\n</form>\n</mat-card>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/masters/paas-masters/mt-location-bay/mt-location-bay.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-location-bay/mt-location-bay.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invisible {\n  display: block;\n  visibility: hidden;\n  height: 0;\n  width: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVycy9wYWFzLW1hc3RlcnMvbXQtbG9jYXRpb24tYmF5L0M6XFxVc2Vyc1xcQW51cmFnU2FpbmlcXERvd25sb2Fkc1xcYXRvbS11aV9vcmlnaW5hbF8yMTA5MjAyMlxcYXRvbS11aS9zcmNcXGFwcFxcbWFzdGVyc1xccGFhcy1tYXN0ZXJzXFxtdC1sb2NhdGlvbi1iYXlcXG10LWxvY2F0aW9uLWJheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvcGFhcy1tYXN0ZXJzL210LWxvY2F0aW9uLWJheS9tdC1sb2NhdGlvbi1iYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52aXNpYmxle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/masters/paas-masters/mt-location-bay/mt-location-bay.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-location-bay/mt-location-bay.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MtLocationBayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtLocationBayComponent", function() { return MtLocationBayComponent; });
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





var MtLocationBayComponent = /** @class */ (function () {
    function MtLocationBayComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.isLoading = false;
        this.isShow = true;
        this.locationId = "";
        this.bayId = "";
        this.bayDesc = "";
        this.bayStatus = "";
        this.locationIdf = "";
        this.bayIdf = "";
        this.bayDescf = "";
        this.bayStatusf = "";
        this.locationIdu = "";
        this.bayIdu = "";
        this.bayDescu = "";
        this.bayStatusu = "";
        this.lbId = "";
        this.lbIdu = "";
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
    MtLocationBayComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "paas-master");
        this.getLocationIds();
    };
    // Datatable Footer
    MtLocationBayComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    //show the filter
    MtLocationBayComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    MtLocationBayComponent.prototype.displayAddForm = function () {
        if (this.displayForm)
            this.displayForm = false;
        else
            this.displayForm = true;
    };
    MtLocationBayComponent.prototype.getLocationIds = function () {
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
    MtLocationBayComponent.prototype.upload = function () { };
    MtLocationBayComponent.prototype.doSubmitSearch = function () {
        var data = {
            locationId: this.locationId,
            bayId: this.bayId,
            bayDesc: this.bayDesc,
            bayStatus: this.bayStatus,
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.doSearch(data);
    };
    MtLocationBayComponent.prototype.doSearch = function (data) {
        var _this = this;
        console.log("submit data:  " + JSON.stringify(data));
        this.isLoading = true;
        this.responseItemsList = [];
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMtLocationBay, data).subscribe(function (response) {
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
    MtLocationBayComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            locationId: this.locationId,
            bayId: this.bayId,
            bayDesc: this.bayDesc,
            bayStatus: this.bayStatus,
        };
        this.doSearch(bodyData);
    };
    MtLocationBayComponent.prototype.saveForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "locationId": this.locationIdf,
                    "bayId": this.bayIdf,
                    "bayStatus": 'OPEN',
                }
            ]
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.uploadMtLocationBay, data).subscribe(function (response) {
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
    MtLocationBayComponent.prototype.updateForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "locationId": this.locationIdu,
                    "bayId": this.bayIdu,
                    "bayDesc": this.bayDescu,
                    "bayStatus": this.bayStatusu,
                    "lbId": this.lbIdu,
                }
            ]
        };
        console.log("updateMtTruckType submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.deleteMtLocationBay, data).subscribe(function (response) {
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
    MtLocationBayComponent.prototype.showUpdateModel = function (row) {
        console.log("**********" + row.itemCategory);
        this.locationIdu = row.locationId;
        this.bayIdu = row.bayId;
        this.bayStatusu = row.bayStatus;
        this.lbIdu = row.lbId;
        console.log("**********" + this.lbIdu);
        $("#myModal").modal('show');
    };
    // export to excel file
    MtLocationBayComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        if (this.responseItemsList === undefined) {
            this.isLoading = false;
        }
        if (this.responseItemsList.length > 0) {
            var data = {
                locationId: this.locationId,
                bayId: this.bayId,
                bayDesc: this.bayDesc,
                bayStatus: this.bayStatus,
                // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
                pageLength: this.page.count
            };
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMtLocationBay, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var excelRawData = response['data'].itemsList.slice();
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        _this.insDate = _this.formatDate(excelRawData[i].insertDate);
                        _this.insDatep = _this.effectiveDate;
                        _this.updDate = _this.formatDate(excelRawData[i].updateDate);
                        _this.updDatep = _this.effectiveDate;
                        var data_1 = {
                            "Location Id": excelRawData[i].locationId,
                            "Bay Id": excelRawData[i].bayId,
                            "Bay Desc": excelRawData[i].bayDescription,
                            "Bay Status": excelRawData[i].bayStatus,
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
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, 'Location Bay.xlsx');
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
            // this.toastr.error(response['message']:["Something went wrong..", "Error!"]);
            this.isLoading = false;
        }
    };
    MtLocationBayComponent.prototype.formatDate = function (data) {
        if (data != null && data) {
            var formatted = new Date(data), mnth = ("0" + (formatted.getMonth() + 1)).slice(-2), day = ("0" + formatted.getDate()).slice(-2);
            console.log("*****************" + day);
            this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
            this.effectiveDate = this.formattedDate;
            return this.formatDate;
        }
        else {
            this.effectiveDate = "";
        }
    };
    MtLocationBayComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    MtLocationBayComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    MtLocationBayComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    // clear data
    MtLocationBayComponent.prototype.clearAll = function () {
        this.locationId = "";
        this.bayId = "";
        this.bayDesc = "";
        this.bayStatus = "";
    };
    MtLocationBayComponent.prototype.refreshData = function () {
        this.page.offset = 0;
        this.table.offset = 0;
        this.doSubmitSearch();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], MtLocationBayComponent.prototype, "table", void 0);
    MtLocationBayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mt-location-bay',
            template: __webpack_require__(/*! ./mt-location-bay.component.html */ "./src/app/masters/paas-masters/mt-location-bay/mt-location-bay.component.html"),
            styles: [__webpack_require__(/*! ./mt-location-bay.component.scss */ "./src/app/masters/paas-masters/mt-location-bay/mt-location-bay.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MtLocationBayComponent);
    return MtLocationBayComponent;
}());



/***/ }),

/***/ "./src/app/masters/paas-masters/mt-location-bay/mt-location-bay.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-location-bay/mt-location-bay.module.ts ***!
  \********************************************************************************/
/*! exports provided: MtLocationBayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtLocationBayModule", function() { return MtLocationBayModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mt_location_bay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mt-location-bay.component */ "./src/app/masters/paas-masters/mt-location-bay/mt-location-bay.component.ts");
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
    { path: '', component: _mt_location_bay_component__WEBPACK_IMPORTED_MODULE_2__["MtLocationBayComponent"] }
];
var MtLocationBayModule = /** @class */ (function () {
    function MtLocationBayModule() {
    }
    MtLocationBayModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [_mt_location_bay_component__WEBPACK_IMPORTED_MODULE_2__["MtLocationBayComponent"]]
        })
    ], MtLocationBayModule);
    return MtLocationBayModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-paas-masters-mt-location-bay-mt-location-bay-module.js.map