(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-paas-masters-mt-batch-codes-mt-batch-codes-module"],{

/***/ "./src/app/masters/paas-masters/mt-batch-codes/mt-batch-codes.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-batch-codes/mt-batch-codes.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n    <b> PaaS Masters &gt; Batch Codes</b>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"displayAddForm()\" matTooltip=\"Add New\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </button>\n      <!-- <button class=\"theme-small-button\" [routerLink]=\"['/admin/paas-masters/upload-mt-batch-codes']\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n<div class=\"mt-item-fields\" *ngIf=\"isShow\">\n<div class=\"col-md-12 row\">\n<div class=\"col-md-12 padding-right-40\">\n<div class=\"row\">\n<div class=\"col-md-6 pd-0\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n        <mat-form-field>\n          <input matInput placeholder=\"Batch Code\" [(ngModel)]=\"batchCode\" name=\"batchCode\"> \n\n          <!-- <input matInput aria-label=\"Batch Code\" placeholder=\"Batch Code\" (keyup)=\"getfilterDestination($event,'batchCode')\"\n            autocomplete=\"off\" [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"batchCode\" name=\"batchCode\">\n          <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n            <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\">\n              <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n            </mat-option>\n          </mat-autocomplete> -->\n\n        </mat-form-field>\n    </div>\n    <div class=\"col-md-4\">\n        <mat-form-field>\n          <input matInput placeholder=\"Category\" [(ngModel)]=\"category\" name=\"category\">\n        </mat-form-field>\n    </div>\n    <div class=\"col-md-4\">\n        <mat-form-field>\n          <input matInput placeholder=\"Plant Code\" [(ngModel)]=\"plantCode\" name=\"plantCode\">\n        </mat-form-field>\n    </div>\n  </div>\n</div>\n<div class='col-md-6 pd-0'>\n  <div class=\"row mg-0\">\n\n  </div>\n</div>\n</div>\n</div>\n<div class=\"pull-right\">\n<div class=\"search-fileds\">\n<button class=\"theme-small-button\" (click)=\"doSubmitSearch()\" matTooltip=\"Search\">\n  <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n</button>\n<button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n  <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n</button>\n</div>\n</div>\n</div>\n</div>\n\n\n\n\n  <div class=\"mt-item-table\">\n      <!-- <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [rows]='responseItemsList' [scrollbarH]=\"true\" [headerHeight]=\"50\"\n      [externalPaging]=\"true\" (page)=\"datatablePageData($event)\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\" [offset]=\"page.offset\"> -->\n      <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [columnMode]=\"'force'\"\n      [rows]='responseItemsList' [externalPaging]=\"true\" (page)=\"datatablePageData($event)\" [scrollbarH]=\"false\"\n      [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\"\n      [offset]=\"page.offset\">\n      <ngx-datatable-column name=\"Batch Code\" [width]=\"150\" [resizeable]=\"false\" prop=\"batchCode\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.batchCode}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Category\" [width]=\"130\" [resizeable]=\"false\" prop=\"category\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.category}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Plant Code\" [width]=\"130\" [resizeable]=\"false\" prop=\"plantCode\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.plantCode}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Batch Description\" [width]=\"250\" [resizeable]=\"false\" prop=\"batchDescription\"\n          [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.batchDescription}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Insert User\" [width]=\"110\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.insertUser}}\n            </ng-template>\n          </ngx-datatable-column>\n       \n  \n          <ngx-datatable-column name=\"Insert Date\" [width]=\"110\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{trimDate(row.insertDate)}}\n              </ng-template>\n            </ngx-datatable-column>\n  \n            <ngx-datatable-column name=\"Update User\" [width]=\"110\" [resizeable]=\"false\" prop=\"updateUser\" [sortable]=\"true\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  {{row.updateUser}}\n                </ng-template>\n              </ngx-datatable-column>\n              \n          <ngx-datatable-column name=\"Update Date\" [width]=\"110\" [resizeable]=\"false\" prop=\"updateDate\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{trimDate(row.updateDate)}}\n            </ng-template>\n          </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Action\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n            <button class=\"theme-small-button btn\" matTooltip=\"Modify\" (click)=\"showUpdateModel(row)\" [disabled]=\"(row.isError)\">\n              <i class=\"fa fa-edit fa-2x\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n        </ngx-datatable-column>\n           <!-- Footer Template starts -->\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected |\n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n            [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n      </ngx-datatable>\n  </div>\n</div>\n\n\n\n\n<br><br>\n<div class=\"mt-item-fields\" *ngIf=\"displayForm\">\n<div class=\"col-md-12 text-center padding-right-40\">\n<mat-card>\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && saveForm(f))\">\n  <h4 class=\"mt-item-header text-center text-primary\">\n    <b> Add New Batch Code </b></h4>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-1\">\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Batch Code\" [(ngModel)]=\"batchCodef\" name=\"batchCodef\" required #qty=\"ngModel\" oninput=\"this.value = this.value.toUpperCase()\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Batch Code is <strong>required</strong></p>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n            <mat-select placeholder=\"Category\" [(ngModel)]=\"categoryf\" name=\"categoryf\" #qty=\"ngModel\" required>\n                <mat-option *ngFor=\"let loc of batchCategoryList\" [value]=\"loc\">\n                  {{loc}}\n                </mat-option>\n              </mat-select>\n            <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                <p *ngIf=\"qty.errors.required\">Category is <strong>required</strong></p>\n              </mat-error>\n\n          <!-- <input matInput placeholder=\"Category\" [(ngModel)]=\"categoryf\" name=\"categoryf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Category is <strong>required</strong></p>\n          </mat-error> -->\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n            <mat-select placeholder=\"Plant Code\" [(ngModel)]=\"plantCodef\" name=\"plantCodef\" #qty=\"ngModel\" required>\n                <mat-option *ngFor=\"let loc of locationIds\" [value]=\"loc\">\n                  {{loc}}\n                </mat-option>\n              </mat-select>\n            <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                <p *ngIf=\"qty.errors.required\">Plant Code is <strong>required</strong></p>\n              </mat-error>\n\n          <!-- <input matInput placeholder=\"Plant Code\" [(ngModel)]=\"plantCodef\" name=\"plantCodef\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Plant Code is <strong>required</strong></p>\n          </mat-error> -->\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Batch Description\" [(ngModel)]=\"batchDescriptionf\" name=\"batchDescriptionf\"\n            required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Batch Description is <strong>required</strong></p>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <button mat-raised-button color=\"primary\" class=\"btm-action-btn\">Save</button>\n      </div>\n    </div>\n  </div>\n</form>\n</mat-card>\n</div>\n</div>\n\n\n\n\n\n<!--  -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && updateForm(f))\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title text-primary\">Update Batch Code</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n\n          <div class=\"form-group\">\n            <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n              <input matInput placeholder=\"Batch Code\" aria-label=\"State\" [(ngModel)]=\"batchCodeu\" name=\"batchCodeu\"\n                required autocomplete=\"off\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-error *ngIf=\"(f.submitted && batchCodeu.invalid)\">\n                <p *ngIf=\"batchCodeu.errors.required\">Batch Codeu is <strong>required</strong>\n                </p>\n              </mat-error>\n              <p class=\"mtop6\">Batch Code</p>\n            </mat-form-field>\n          </div>\n          <div class=\"form-group\">\n            <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n                <mat-select placeholder=\"Category\" [(ngModel)]=\"categoryu\" name=\"categoryu\" #qty=\"ngModel\" required>\n                    <mat-option *ngFor=\"let loc of batchCategoryList\" [value]=\"loc\">\n                      {{loc}}\n                    </mat-option>\n                  </mat-select>\n                <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                    <p *ngIf=\"qty.errors.required\">Category is <strong>required</strong></p>\n                  </mat-error>\n              <!-- <input matInput placeholder=\"Category\" aria-label=\"State\" [(ngModel)]=\"categoryu\" name=\"categoryu\"\n                required autocomplete=\"off\">\n              <mat-error *ngIf=\"(f.submitted && categoryu.invalid)\">\n                <p *ngIf=\"categoryu.errors.required\">Categoryu is <strong>required</strong>\n                </p>\n              </mat-error> -->\n              <p class=\"mtop6\">Category</p>\n            </mat-form-field>\n          </div>\n          <div class=\"form-group\">\n            <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n              <!-- <input matInput placeholder=\"Plant Code\" aria-label=\"State\" [(ngModel)]=\"plantCodeu\" name=\"plantCodeu\"\n                required autocomplete=\"off\">\n              <mat-error *ngIf=\"(f.submitted && plantCodeu.invalid)\">\n                <p *ngIf=\"plantCodeu.errors.required\">Plant Code is <strong>required</strong>\n                </p>\n              </mat-error> -->\n              <mat-select placeholder=\"Plant Code\" [(ngModel)]=\"plantCodeu\" name=\"plantCodeu\" #qty=\"ngModel\" required>\n                  <mat-option *ngFor=\"let loc of locationIds\" [value]=\"loc\">\n                    {{loc}}\n                  </mat-option>\n                </mat-select>\n              <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                  <p *ngIf=\"qty.errors.required\">Plant Code is <strong>required</strong></p>\n                </mat-error>\n              <p class=\"mtop6\">Plant Code</p>\n            </mat-form-field>\n          </div>\n          <div class=\"form-group\">\n              <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n                <input matInput placeholder=\"Batch Description\" aria-label=\"State\" [(ngModel)]=\"batchDescriptionu\" name=\"batchDescriptionu\"\n                  required autocomplete=\"off\">\n                <mat-error *ngIf=\"(f.submitted && batchDescriptionu.invalid)\">\n                  <p *ngIf=\"batchDescriptionu.errors.required\">Batch Description is <strong>required</strong>\n                  </p>\n                </mat-error>\n                <p class=\"mtop6\">Batch Description</p>\n              </mat-form-field>\n            </div>\n        </div>\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <!-- <button type=\"button\" class=\"btn btn-danger\" >Close</button> -->\n          <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btm-action-btn\">Update</button>\n          <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<br><br>\n"

/***/ }),

/***/ "./src/app/masters/paas-masters/mt-batch-codes/mt-batch-codes.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-batch-codes/mt-batch-codes.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvcGFhcy1tYXN0ZXJzL210LWJhdGNoLWNvZGVzL210LWJhdGNoLWNvZGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/masters/paas-masters/mt-batch-codes/mt-batch-codes.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-batch-codes/mt-batch-codes.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MtBatchCodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtBatchCodesComponent", function() { return MtBatchCodesComponent; });
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





var MtBatchCodesComponent = /** @class */ (function () {
    function MtBatchCodesComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.isLoading = false;
        this.isShow = true;
        // salesSku:any = "";
        // itemId:any = "";
        // compQty:any = "";
        // itemSeq:any = "";
        // oeCode:any = "";
        // itemClassification: any = "";
        // itemDescription: any = "";
        // itemType: any = "";
        // itemGroup: any = "";
        // itemCategory: any = "";
        // tte: any = "";
        // loadFactor: any = "";
        this.insertUser = "";
        this.insertDate = "";
        this.updateUser = "";
        this.updateDate = "";
        this.effectiveDate = "";
        this.batchCode = "";
        this.category = "";
        this.plantCode = "";
        this.batchDescription = "";
        this.bcId = "";
        this.batchCodef = "";
        this.categoryf = "";
        this.plantCodef = "";
        this.batchDescriptionf = "";
        this.bcIdf = "";
        this.batchCodeu = "";
        this.categoryu = "";
        this.plantCodeu = "";
        this.batchDescriptionu = "";
        this.bcIdu = "";
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
        this.batchCategoryList = [];
        this.locationIds = [];
        this.scmGroupList = [];
        this.insertStatus = "";
        this.month_names = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
        };
        this.insDate = "";
        this.insDatep = "";
        this.updDate = "";
        this.updDatep = "";
    }
    MtBatchCodesComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "paas-master");
        this.getLocationIds();
        this.getbatchCategoryList();
    };
    //show the filter
    MtBatchCodesComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    // Datatable Footer
    MtBatchCodesComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    MtBatchCodesComponent.prototype.upload = function () {
    };
    MtBatchCodesComponent.prototype.getLocationIds = function () {
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
    MtBatchCodesComponent.prototype.getbatchCategoryList = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getbatchCategoryList).subscribe(function (response) {
            console.log("response array string: " + JSON.stringify(response));
            _this.batchCategoryList = response['data'];
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    MtBatchCodesComponent.prototype.getScmgroupsList = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getScmgroupsList).subscribe(function (response) {
            console.log("response array string: " + JSON.stringify(response));
            _this.scmGroupList = response['data'];
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    MtBatchCodesComponent.prototype.doSubmitSearch = function () {
        var data = {
            batchCode: this.batchCode,
            category: this.category,
            plantCode: this.plantCode,
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.doSearch(data);
    };
    MtBatchCodesComponent.prototype.doSearch = function (data) {
        var _this = this;
        console.log("submit data:  " + JSON.stringify(data));
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMtBatchCodes, data).subscribe(function (response) {
            _this.page.count = response['data'].total;
            _this.page.limit = response['data'].pageLength;
            _this.responseItemsList = response['data'].itemsList;
            console.log("response length: " + _this.responseItemsList.length);
            console.log("response array string: " + JSON.stringify(response));
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //server side pagination
    MtBatchCodesComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            batchCode: this.batchCode,
            category: this.category,
            plantCode: this.plantCode,
        };
        this.doSearch(bodyData);
    };
    MtBatchCodesComponent.prototype.updateForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "batchCode": this.batchCodeu,
                    "category": this.categoryu,
                    "plantCode": this.plantCodeu,
                    "batchDescription": this.batchDescriptionu,
                    "bcId": this.bcIdu
                }
            ]
        };
        console.log("updateForm submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.updateMtBatchCodes, data).subscribe(function (response) {
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
    MtBatchCodesComponent.prototype.showUpdateModel = function (row) {
        this.batchCodeu = row.batchCode;
        this.categoryu = row.category;
        this.plantCodeu = row.plantCode;
        this.batchDescriptionu = row.batchDescription;
        this.bcIdu = row.bcId;
        $("#myModal").modal('show');
    };
    MtBatchCodesComponent.prototype.saveForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "batchCode": this.batchCodef,
                    "category": this.categoryf,
                    "plantCode": this.plantCodef,
                    "batchDescription": this.batchDescriptionf,
                }
            ]
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.addOrUploadMtBatchCodes, data).subscribe(function (response) {
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
    MtBatchCodesComponent.prototype.displayAddForm = function () {
        if (this.displayForm)
            this.displayForm = false;
        else
            this.displayForm = true;
    };
    //get filter destination result
    MtBatchCodesComponent.prototype.getfilterDestination = function (event, typeofevent) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            this.isLoading = true;
            //console.log("**** typeofevent "+typeofevent)
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?batchCode=' + filtervalue).subscribe(function (response) {
                if (typeofevent === 'batchCode') {
                    _this.destinationList = response['data'].searchResult;
                    console.log("DATA:   " + JSON.stringify(_this.destinationList));
                }
                else {
                    _this.sourceList = response['data'].searchResult;
                }
                // console.log("this.destinationList", this.destinationList)
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    MtBatchCodesComponent.prototype.formatDate = function (data) {
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
    MtBatchCodesComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    MtBatchCodesComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    MtBatchCodesComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    // export to excel file
    MtBatchCodesComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        if (this.responseItemsList === undefined) {
            this.isLoading = false;
        }
        if (this.responseItemsList.length > 0) {
            var data = {
                batchCode: this.batchCode,
                category: this.category,
                plantCode: this.plantCode,
                // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
                pageLength: this.page.count
            };
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMtBatchCodes, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var excelRawData = response['data'].itemsList.slice();
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        _this.insDate = _this.formatDate(excelRawData[i].insertDate);
                        _this.insDatep = _this.effectiveDate;
                        _this.updDate = _this.formatDate(excelRawData[i].updateDate);
                        _this.updDatep = _this.effectiveDate;
                        var data_1 = {
                            "Batch Code": excelRawData[i].batchCode,
                            "Category": excelRawData[i].category,
                            "Plant Code": excelRawData[i].plantCode,
                            "Batch Description": excelRawData[i].batchDescription,
                            "Insert User": excelRawData[i].insertUser,
                            "Insert Date  ": _this.insDatep,
                            "Update User  ": excelRawData[i].updateUser,
                            "Update Date   ": _this.updDatep,
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, 'MtBatchCodes.xlsx');
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
    // clear data
    MtBatchCodesComponent.prototype.clearAll = function () {
        this.batchCode = "";
        this.category = "";
        this.plantCode = "";
        this.batchDescription = "";
    };
    MtBatchCodesComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.page.offset = 0;
        this.doSubmitSearch();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], MtBatchCodesComponent.prototype, "table", void 0);
    MtBatchCodesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mt-batch-codes',
            template: __webpack_require__(/*! ./mt-batch-codes.component.html */ "./src/app/masters/paas-masters/mt-batch-codes/mt-batch-codes.component.html"),
            styles: [__webpack_require__(/*! ./mt-batch-codes.component.scss */ "./src/app/masters/paas-masters/mt-batch-codes/mt-batch-codes.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MtBatchCodesComponent);
    return MtBatchCodesComponent;
}());



/***/ }),

/***/ "./src/app/masters/paas-masters/mt-batch-codes/mt-batch-codes.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-batch-codes/mt-batch-codes.module.ts ***!
  \******************************************************************************/
/*! exports provided: MtBatchCodesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtBatchCodesModule", function() { return MtBatchCodesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mt_batch_codes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mt-batch-codes.component */ "./src/app/masters/paas-masters/mt-batch-codes/mt-batch-codes.component.ts");
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
    { path: '', component: _mt_batch_codes_component__WEBPACK_IMPORTED_MODULE_2__["MtBatchCodesComponent"] }
];
var MtBatchCodesModule = /** @class */ (function () {
    function MtBatchCodesModule() {
    }
    MtBatchCodesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [
                _mt_batch_codes_component__WEBPACK_IMPORTED_MODULE_2__["MtBatchCodesComponent"]
            ]
        })
    ], MtBatchCodesModule);
    return MtBatchCodesModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-paas-masters-mt-batch-codes-mt-batch-codes-module.js.map