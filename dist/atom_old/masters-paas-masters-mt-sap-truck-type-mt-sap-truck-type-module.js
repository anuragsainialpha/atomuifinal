(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-paas-masters-mt-sap-truck-type-mt-sap-truck-type-module"],{

/***/ "./src/app/masters/paas-masters/mt-sap-truck-type/mt-sap-truck-type.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-sap-truck-type/mt-sap-truck-type.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n    <b> PaaS Masters &gt; SAP Truck Type</b>\n    <span class=\"pull-right refresh-span\">\n        <button class=\"theme-small-button\" (click)=\"displayAddForm()\" matTooltip=\"Add New\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          </button>\n      <!-- <button class=\"theme-small-button\" [routerLink]=\"['/admin/paas-masters/upload-mt-sap-truck-type']\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n\n\n\n<div class=\"mt-item-fields\" *ngIf=\"isShow\">\n  <div class=\"col-md-12 row\">\n    <div class=\"col-md-12 padding-right-40\">\n      <div class=\"row\">\n        <div class=\"col-md-6 pd-0\">\n          <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"SAP Truck Type\" [(ngModel)]=\"sapTruckType\" name=\"sapTruckType\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"SAP Truck Type Desc\" [(ngModel)]=\"sapTruckTypeDesc\" name=\"sapTruckTypeDesc\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"PaaS Truck Type\" [(ngModel)]=\"opsTruckType\" name=\"opsTruckType\">\n                        </mat-form-field>\n                  </div>\n          </div>\n        </div>\n        <!-- <div class='col-md-6 pd-0'>\n          <div class=\"row mg-0\">\n              <div class=\"col-md-4\">\n                      <mat-form-field>\n                          <input matInput placeholder=\"PaaS Variant1\" [(ngModel)]=\"opsVariant1\" name=\"opsVariant1\">\n                      </mat-form-field>\n                </div>\n          </div>\n        </div> -->\n      </div>\n    </div>\n    <div class=\"pull-right\">\n      <div class=\"search-fileds\">\n        <button class=\"theme-small-button\" (click)=\"doSubmitSearch()\" matTooltip=\"Search\">\n          <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"mt-item-table\">\n<div>\n<!-- <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [rows]='responseItemsList' [scrollbarH]=\"true\" \n[externalPaging]=\"true\" (page)=\"datatablePageData($event)\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\" [offset]=\"page.offset\">\n  -->\n<ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [columnMode]=\"'force'\"\n[rows]='responseItemsList' [externalPaging]=\"true\" (page)=\"datatablePageData($event)\" [scrollbarH]=\"false\"\n[headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\"\n[offset]=\"page.offset\">\n\n\n<ngx-datatable-column name=\"SAP Truck Type\" [width]=\"140\" [resizeable]=\"false\" prop=\"sapTruckType\" [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.sapTruckType}}\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"SAP Truck Type Desc\" [width]=\"230\" [resizeable]=\"false\" prop=\"sapTruckTypeDesc\" [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.sapTruckTypeDesc}}\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"PaaS Truck Type\" [width]=\"190\" [resizeable]=\"false\" prop=\"opsTruckType\" [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.opsTruckType}}\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"PaaS Variant1\" [width]=\"150\" [resizeable]=\"false\" prop=\"opsVariant1\" [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.opsVariant1}}\n    </ng-template>\n  </ngx-datatable-column>\n\n  <ngx-datatable-column name=\"Insert User\" [width]=\"130\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.insertUser}}\n    </ng-template>\n  </ngx-datatable-column>\n\n  <ngx-datatable-column name=\"Insert Date\" [width]=\"130\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{trimDate(row.insertDate)}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Update User\" [width]=\"130\" [resizeable]=\"false\" prop=\"updateUser\" [sortable]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.updateUser}}\n        </ng-template>\n      </ngx-datatable-column>\n      \n  <ngx-datatable-column name=\"Update Date\" [width]=\"130\" [resizeable]=\"false\" prop=\"updateDate\" [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{trimDate(row.updateDate)}}\n    </ng-template>\n  </ngx-datatable-column>\n\n\n  <ngx-datatable-column name=\"Action\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\">\n    <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n      <button class=\"theme-small-button btn\" matTooltip=\"Modify\" (click)=\"showUpdateModel(row)\" [disabled]=\"(row.isError)\">\n        <i class=\"fa fa-edit fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </ng-template>\n  </ngx-datatable-column>\n     <!-- Footer Template starts -->\n     <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedCount\">\n            {{selectedCount.toLocaleString()}} Selected |\n          </span>\n          Showing {{(offset * pageSize)+1}} to {{(rowCount>\n          (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n          {{(rowCount)}} records.\n        </div>\n        <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n          [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n          [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n        </datatable-pager>\n      </ng-template>\n    </ngx-datatable-footer>\n    <!-- Footer Template Ends -->\n</ngx-datatable>\n</div>\n</div>\n</div>\n\n\n\n\n\n\n<br><br>\n<div class=\"mt-item-fields\" *ngIf=\"displayForm\">\n<div class=\"col-md-12 padding-right-40\">\n<mat-card>\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && saveForm(f))\">\n  <h4 class=\"mt-item-header text-center text-primary\">\n    <b> Add New SAP Truck Type</b></h4>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-6 pd-0\">\n      <div class=\"row\">\n        <div class=\"col-md-1\">\n        </div>\n        <div class=\"col-md-5\">\n          <div class=\"form-group\">\n            <mat-form-field>\n              <input matInput placeholder=\"SAP Truck Type\" [(ngModel)]=\"sapTruckTypef\" name=\"sapTruckTypef\" required #qty=\"ngModel\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                <p *ngIf=\"qty.errors.required\">SAP Truck Type is <strong>required</strong></p>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"col-md-5\">\n          <div class=\"form-group\">\n            <mat-form-field>\n              <input matInput placeholder=\"SAP Truck Type Desc\" [(ngModel)]=\"sapTruckTypeDescf\" name=\"sapTruckTypeDescf\" required #qty=\"ngModel\" oninput=\"this.value = this.value.toUpperCase()\"> \n              <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                <p *ngIf=\"qty.errors.required\">SAP Truck Type Desc is <strong>required</strong></p>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='col-md-6 pd-0'>\n      <div class=\"row mg-0\">\n        <div class=\"col-md-5\">\n          <div class=\"form-group\">\n            <mat-form-field>\n              <!-- <input matInput placeholder=\"PaaS Truck Type\" [(ngModel)]=\"opsTruckTypef\" name=\"opsTruckTypef\" required #qty=\"ngModel\">\n              <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                <p *ngIf=\"qty.errors.required\">PaaS Truck Type is <strong>required</strong></p>\n              </mat-error> -->\n\n              <mat-select placeholder=\"PaaS Truck Type\" [(ngModel)]=\"opsTruckTypef\" name=\"opsTruckTypef\" #qty=\"ngModel\" required>\n                  <mat-option *ngFor=\"let loc of paasTruckTypeList\" [value]=\"loc\">\n                    {{loc}}\n                  </mat-option>\n                </mat-select>\n              <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                  <p *ngIf=\"qty.errors.required\">PaaS Truck Type is <strong>required</strong></p>\n                </mat-error>\n\n            </mat-form-field>\n          </div>\n        </div>\n\n\n        <!-- <div class=\"col-md-5\">\n          <div class=\"form-group\">\n            <mat-form-field>\n              <mat-select placeholder=\"PaaS Variant 1\" [(ngModel)]=\"opsVariant1f\" name=\"opsVariant1f\" #qty=\"ngModel\" required>\n                  <mat-option *ngFor=\"let loc of variantsList\" [value]=\"loc\">\n                    {{loc}}\n                  </mat-option>\n                </mat-select>\n              <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                  <p *ngIf=\"qty.errors.required\">PaaS Variant 1 is <strong>required</strong></p>\n                </mat-error>\n            </mat-form-field>\n          </div>\n        </div> -->\n\n\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <button mat-raised-button color=\"primary\" class=\"btm-action-btn\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n</mat-card>\n</div>\n</div>\n\n\n\n<div class=\"modal\" id=\"myModal\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\">\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && updateMtSapTruckType(f))\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title text-primary\">Update SAP Truck Type</h4>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form-group\">\n        <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        \n          <mat-select placeholder=\"PaaS Truck Type\" [(ngModel)]=\"opsTruckTypeu\" name=\"opsTruckTypeu\" #qty=\"ngModel\" required>\n            <mat-option *ngFor=\"let loc of paasTruckTypeList\" [value]=\"loc\">\n              {{loc}}\n            </mat-option>\n          </mat-select>\n        <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">PaaS Truck Type is <strong>required</strong></p>\n          </mat-error>\n\n     \n        <!-- <input matInput placeholder=\"PaaS Truck Type\" aria-label=\"State\" [(ngModel)]=\"opsTruckTypeu\" name=\"opsTruckTypeu\"\n          required autocomplete=\"off\">\n        <mat-error *ngIf=\"(f.submitted && opsTruckTypeu.invalid)\">\n          <p *ngIf=\"opsTruckTypeu.errors.required\">PaaS Truck Type is <strong>required</strong>\n          </p>\n        </mat-error> -->\n        <p class=\"mtop6\">PaaS Truck Type</p>\n      </mat-form-field>\n    </div>\n    <!-- <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"PaaS Variant 1\" aria-label=\"State\" [(ngModel)]=\"opsVariant1u\" name=\"opsVariant1u\"\n          autocomplete=\"off\">\n        <mat-error *ngIf=\"(f.submitted && opsVariant1u.invalid)\">\n          <p *ngIf=\"opsVariant1u.errors.required\">PaaS Variant 1 is <strong>required</strong>\n          </p>\n        </mat-error>\n        <p class=\"mtop6\">PaaS Variant 1</p>\n      </mat-form-field>\n    </div> -->\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btm-action-btn\">Update</button>\n    <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\" data-dismiss=\"modal\">Close</button>\n  </div>\n</form>\n</div>\n</div>\n</div>\n<br><br>\n"

/***/ }),

/***/ "./src/app/masters/paas-masters/mt-sap-truck-type/mt-sap-truck-type.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-sap-truck-type/mt-sap-truck-type.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvcGFhcy1tYXN0ZXJzL210LXNhcC10cnVjay10eXBlL210LXNhcC10cnVjay10eXBlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/masters/paas-masters/mt-sap-truck-type/mt-sap-truck-type.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-sap-truck-type/mt-sap-truck-type.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MtSapTruckTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtSapTruckTypeComponent", function() { return MtSapTruckTypeComponent; });
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





var MtSapTruckTypeComponent = /** @class */ (function () {
    function MtSapTruckTypeComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.isLoading = false;
        this.isShow = true;
        this.salesSku = "";
        this.itemId = "";
        this.compQty = "";
        this.itemSeq = "";
        this.oeCode = "";
        this.insertUser = "";
        this.insertDate = "";
        this.updateUser = "";
        this.updateDate = "";
        this.itemClassification = "";
        this.itemDescription = "";
        this.itemType = "";
        this.itemGroup = "";
        this.itemCategory = "";
        this.tte = "";
        this.loadFactor = "";
        this.effectiveDate = "";
        this.materialGroupId = "";
        this.description1 = "";
        this.description2 = "";
        this.scmGroup = "";
        this.sapTruckType = "";
        this.sapTruckTypeDesc = "";
        this.opsTruckType = "";
        this.opsVariant1 = "";
        this.sttId = "";
        this.sapTruckTypef = "";
        this.sapTruckTypeDescf = "";
        this.opsTruckTypef = "";
        this.opsVariant1f = "";
        this.sttIdf = "";
        this.sapTruckTypeu = "";
        this.sapTruckTypeDescu = "";
        this.opsTruckTypeu = "";
        this.opsVariant1u = "";
        this.sttIdu = "";
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
        this.paasTruckTypeList = [];
        this.variantsList = [];
        this.insertStatus = "";
        this.insDate = "";
        this.insDatep = "";
        this.updDate = "";
        this.updDatep = "";
        this.month_names = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
        };
    }
    MtSapTruckTypeComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "paas-master");
        this.getPaasTruckTypeList();
        this.getVariantsList();
    };
    MtSapTruckTypeComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    // Datatable footer info
    MtSapTruckTypeComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    MtSapTruckTypeComponent.prototype.getPaasTruckTypeList = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getPaasTruckTypeList).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            _this.paasTruckTypeList = response['data'];
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    MtSapTruckTypeComponent.prototype.getVariantsList = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getVariantsList).subscribe(function (response) {
            console.log("response array string: " + JSON.stringify(response));
            _this.variantsList = response['data'];
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    MtSapTruckTypeComponent.prototype.upload = function () { };
    MtSapTruckTypeComponent.prototype.displayAddForm = function () {
        if (this.displayForm)
            this.displayForm = false;
        else
            this.displayForm = true;
    };
    //"mgId":this.mgIdf
    MtSapTruckTypeComponent.prototype.saveForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    sapTruckType: this.sapTruckTypef,
                    sapTruckTypeDesc: this.sapTruckTypeDescf,
                    opsTruckType: this.opsTruckTypef,
                }
            ]
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.addOrUploadMtSapTruckType, data).subscribe(function (response) {
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
    MtSapTruckTypeComponent.prototype.doSubmitSearch = function () {
        var data = {
            sapTruckType: this.sapTruckType,
            sapTruckTypeDesc: this.sapTruckTypeDesc,
            opsTruckType: this.opsTruckType,
            opsVariant1: this.opsVariant1,
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.doSearch(data);
    };
    MtSapTruckTypeComponent.prototype.doSearch = function (data) {
        var _this = this;
        console.log("submit data:  " + JSON.stringify(data));
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMtSapTruckType, data).subscribe(function (response) {
            _this.page.count = response['data'].total;
            _this.page.limit = response['data'].pageLength;
            _this.responseItemsList = response['data'].itemsList;
            console.log("response length: " + _this.responseItemsList.length);
            // console.log("response array string: "+JSON.stringify(this.responseItemsList));
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //server side pagination
    MtSapTruckTypeComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            sapTruckType: this.sapTruckType,
            sapTruckTypeDesc: this.sapTruckTypeDesc,
            opsTruckType: this.opsTruckType,
            opsVariant1: this.opsVariant1,
        };
        this.doSearch(bodyData);
    };
    MtSapTruckTypeComponent.prototype.showUpdateModel = function (row) {
        this.sapTruckTypeu = row.sapTruckType;
        this.sapTruckTypeDescu = row.sapTruckTypeDesc;
        this.opsTruckTypeu = row.opsTruckType;
        this.opsVariant1u = row.opsVariant1;
        this.sttIdu = row.sttId;
        console.log("***** sttIdu" + this.sttIdu);
        $("#myModal").modal('show');
    };
    MtSapTruckTypeComponent.prototype.updateMtSapTruckType = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "sapTruckType": this.sapTruckTypeu,
                    "sapTruckTypeDesc": this.sapTruckTypeDescu,
                    "opsTruckType": this.opsTruckTypeu,
                    "opsVariant1": this.opsVariant1u,
                    "sttId": this.sttIdu,
                }
            ]
        };
        console.log("updateMtSapTruckType submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.updateMtSapTruckType, data).subscribe(function (response) {
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
    // export to excel file
    MtSapTruckTypeComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        if (this.responseItemsList === undefined) {
            this.isLoading = false;
        }
        if (this.responseItemsList.length > 0) {
            var data = {
                sapTruckType: this.sapTruckType,
                sapTruckTypeDesc: this.sapTruckTypeDesc,
                opsTruckType: this.opsTruckType,
                opsVariant1: this.opsVariant1,
                // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
                pageLength: this.page.count
            };
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMtSapTruckType, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var excelRawData = response['data'].itemsList.slice();
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        _this.insDate = _this.formatDate(excelRawData[i].insertDate);
                        _this.insDatep = _this.effectiveDate;
                        _this.updDate = _this.formatDate(excelRawData[i].updateDate);
                        _this.updDatep = _this.effectiveDate;
                        var data_1 = {
                            "SAP Truck Type": excelRawData[i].sapTruckType,
                            "SAP Truck Type Description": excelRawData[i].sapTruckTypeDesc,
                            "PaaS Truck Type": excelRawData[i].opsTruckType,
                            "PasS Variant 1": excelRawData[i].opsVariant1,
                            "Insert User   ": excelRawData[i].insertUser,
                            "Insert Date   ": _this.insDatep,
                            "Update User   ": excelRawData[i].updateUser,
                            "Update Date   ": _this.updDatep,
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, 'MtSapTruckType.xlsx');
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
            this.toastr.error('No Records To Generate Excel...', 'Error!');
            this.isLoading = false;
        }
    };
    // clear data
    MtSapTruckTypeComponent.prototype.clearAll = function () {
        this.sapTruckType = "";
        this.sapTruckTypeDesc = "";
        this.opsTruckType = "";
        this.opsVariant1 = "";
    };
    MtSapTruckTypeComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.page.offset = 0;
        this.doSubmitSearch();
    };
    MtSapTruckTypeComponent.prototype.formatDate = function (data) {
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
    MtSapTruckTypeComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    MtSapTruckTypeComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    MtSapTruckTypeComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], MtSapTruckTypeComponent.prototype, "table", void 0);
    MtSapTruckTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mt-sap-truck-type',
            template: __webpack_require__(/*! ./mt-sap-truck-type.component.html */ "./src/app/masters/paas-masters/mt-sap-truck-type/mt-sap-truck-type.component.html"),
            styles: [__webpack_require__(/*! ./mt-sap-truck-type.component.scss */ "./src/app/masters/paas-masters/mt-sap-truck-type/mt-sap-truck-type.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MtSapTruckTypeComponent);
    return MtSapTruckTypeComponent;
}());



/***/ }),

/***/ "./src/app/masters/paas-masters/mt-sap-truck-type/mt-sap-truck-type.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-sap-truck-type/mt-sap-truck-type.module.ts ***!
  \************************************************************************************/
/*! exports provided: MtSapTruckTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtSapTruckTypeModule", function() { return MtSapTruckTypeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mt_sap_truck_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mt-sap-truck-type.component */ "./src/app/masters/paas-masters/mt-sap-truck-type/mt-sap-truck-type.component.ts");
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
    { path: '', component: _mt_sap_truck_type_component__WEBPACK_IMPORTED_MODULE_2__["MtSapTruckTypeComponent"] }
];
var MtSapTruckTypeModule = /** @class */ (function () {
    function MtSapTruckTypeModule() {
    }
    MtSapTruckTypeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [_mt_sap_truck_type_component__WEBPACK_IMPORTED_MODULE_2__["MtSapTruckTypeComponent"]]
        })
    ], MtSapTruckTypeModule);
    return MtSapTruckTypeModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-paas-masters-mt-sap-truck-type-mt-sap-truck-type-module.js.map