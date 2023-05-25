(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-paas-masters-order-type-lookup-order-type-lookup-module"],{

/***/ "./src/app/masters/paas-masters/order-type-lookup/order-type-lookup.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/order-type-lookup/order-type-lookup.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n      <b> PaaS Masters &gt; Order Type Lookup</b>\n    <span class=\"pull-right refresh-span\">\n        <!-- <button class=\"theme-small-button\" (click)=\"displayAddForm()\" matTooltip=\"Add New Order Type Lookup\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          </button> -->\n      <!-- <button class=\"theme-small-button\" (click)=\"upload()\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n\n\n<div class=\"mt-item-fields\" *ngIf=\"isShow\">\n  <div class=\"col-md-12 row\">\n    <div class=\"col-md-12 padding-right-40\">\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n            <mat-form-field>\n              <input matInput placeholder=\"Order Type\" [(ngModel)]=\"orderType\" name=\"orderType\">\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2\">\n            <mat-form-field>\n              <input matInput placeholder=\"Movement Type\" [(ngModel)]=\"movementType\" name=\"movementType\">\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2\">\n            <mat-form-field>\n              <input matInput placeholder=\"Market Segment\" [(ngModel)]=\"marketSegment\" name=\"marketSegment\">\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2\">\n            <mat-form-field>\n              <input matInput placeholder=\"SAP Order Type\" [(ngModel)]=\"sapOrderType\" name=\"sapOrderType\">\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2\">\n            <mat-form-field>\n              <input matInput placeholder=\"SAP Doc Type\" [(ngModel)]=\"sapDocType\" name=\"sapDocType\">\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2\">\n            <mat-form-field>\n              <input matInput placeholder=\"BOM Type\" [(ngModel)]=\"bomType\" name=\"bomType\">\n            </mat-form-field>\n        </div>\n      </div>\n    </div>\n    <div class=\"pull-right\">\n      <div class=\"search-fileds\">\n        <button class=\"theme-small-button\" (click)=\"doSubmitSearch()\" matTooltip=\"Search\">\n          <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n  <div class=\"mt-item-table\">\n    <div>\n      <!-- <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [rows]='responseItemsList' [scrollbarH]=\"true\" \n      [externalPaging]=\"true\" (page)=\"datatablePageData($event)\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\" [offset]=\"page.offset\">\n         -->\n      <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [columnMode]=\"'force'\"\n      [rows]='responseItemsList' [externalPaging]=\"true\" (page)=\"datatablePageData($event)\" [scrollbarH]=\"false\"\n      [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\"\n      [offset]=\"page.offset\">\n\n      <ngx-datatable-column name=\"Order Type\" [width]=\"140\" [resizeable]=\"false\" prop=\"orderType\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.orderType}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Movement Type\" [width]=\"120\" [resizeable]=\"false\" prop=\"movementType\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.movementType}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Market Segment\" [width]=\"120\" [resizeable]=\"false\" prop=\"marketSegment\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.marketSegment}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"SAP Order Type\" [width]=\"100\" [resizeable]=\"false\" prop=\"sapOrderType\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.sapOrderType}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"SAP Doc Type\" [width]=\"130\" [resizeable]=\"false\" prop=\"sapDocType\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.sapDocType}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"BOM Type\" [width]=\"100\" [resizeable]=\"false\" prop=\"bomType\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.bomType}}\n            </ng-template>\n          </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Insert User\" [width]=\"130\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.insertUser}}\n            </ng-template>\n          </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Insert Date\" [width]=\"120\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n             {{trimDate(row.insertDate)}} \n            <!-- {{row.insertDate}} -->\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Update User\" [width]=\"130\" [resizeable]=\"false\" prop=\"updateUser\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.updateUser}}\n            </ng-template>\n          </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Update Date\" [width]=\"120\" [resizeable]=\"false\" prop=\"updateDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n             {{trimDate(row.updateDate)}}\n            <!-- {{row.updateDate}} -->\n          </ng-template>\n        </ngx-datatable-column>\n\n        <!-- <ngx-datatable-column name=\"Action\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n            <button class=\"theme-small-button btn\" matTooltip=\"Modify\" (click)=\"showUpdateModel(row)\" [disabled]=\"(row.isError)\">\n              <i class=\"fa fa-edit fa-2x\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n        </ngx-datatable-column> -->\n           <!-- Footer Template starts -->\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected |\n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n            [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n     \n      </ngx-datatable>\n    </div>\n  </div>\n</div>\n\n\n\n<!--  -->\n<div class=\"modal\" id=\"myModal\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\">\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && updateForm(f))\">\n  <!-- Modal Header -->\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title text-primary\">Update Order Type Lookup</h4>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n  </div>\n  <!-- Modal body -->\n  <div class=\"modal-body\">\n\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"Ops Truck Type\" aria-label=\"State\" [(ngModel)]=\"movementTypeu\" name=\"movementTypeu\"\n          required autocomplete=\"off\">\n        <mat-error *ngIf=\"(f.submitted && movementTypeu.invalid)\">\n          <p *ngIf=\"movementTypeu.errors.required\">Movement Type is <strong>required</strong>\n          </p>\n        </mat-error>\n        <p class=\"mtop6\">Movement Type</p>\n      </mat-form-field>\n    </div>\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"Market Segment\" aria-label=\"State\" [(ngModel)]=\"marketSegmentu\" name=\"marketSegmentu\"\n          required autocomplete=\"off\">\n        <mat-error *ngIf=\"(f.submitted && marketSegmentu.invalid)\">\n          <p *ngIf=\"marketSegmentu.errors.required\">Market Segment is <strong>required</strong>\n          </p>\n        </mat-error>\n        <p class=\"mtop6\">Market Segment</p>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"SAP Order Type\" aria-label=\"State\" [(ngModel)]=\"sapOrderTypeu\" name=\"sapOrderTypeu\"\n          required autocomplete=\"off\">\n        <mat-error *ngIf=\"(f.submitted && sapOrderTypeu.invalid)\">\n          <p *ngIf=\"sapOrderTypeu.errors.required\">Sap Order Type is <strong>required</strong>\n          </p>\n        </mat-error>\n        <p class=\"mtop6\">Sap Order Type</p>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"SAP Doc Type\" aria-label=\"State\" [(ngModel)]=\"sapDocTypeu\" name=\"sapDocTypeu\"\n          required autocomplete=\"off\">\n        <mat-error *ngIf=\"(f.submitted && sapDocTypeu.invalid)\">\n          <p *ngIf=\"sapDocTypeu.errors.required\">Sap Doc Type is <strong>required</strong>\n          </p>\n        </mat-error>\n        <p class=\"mtop6\">Sap Doc Type</p>\n      </mat-form-field>\n    </div>\n  </div>\n  <!-- Modal footer -->\n  <div class=\"modal-footer\">\n    <!-- <button type=\"button\" class=\"btn btn-danger\" >Close</button> -->\n    <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btm-action-btn\" (click)=\"updateLocationScan(f)\">Update</button>\n    <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\" data-dismiss=\"modal\">Close</button>\n  </div>\n</form>\n</div>\n</div>\n</div>\n<br><br>\n\n\n\n\n<br><br>\n<div class=\"mt-item-fields\" *ngIf=\"displayForm\">\n<div class=\"col-md-12 text-center padding-right-40\">\n<mat-card>\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && saveForm(f))\">\n  <h4 class=\"mt-item-header text-center text-primary\">\n    <b> Add Order Type Lookup </b></h4>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Order Type\" [(ngModel)]=\"orderTypef\" name=\"orderTypef\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Order Type is <strong>required</strong></p>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Movement Type\" [(ngModel)]=\"movementTypef\" name=\"movementTypef\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Movement Type is <strong>required</strong></p>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Market Segment\" [(ngModel)]=\"marketSegmentf\" name=\"marketSegmentf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Market Segment is <strong>required</strong></p>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"SAP Order Type\" [(ngModel)]=\"sapOrderTypef\" name=\"sapOrderTypef\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Sap Order Type is <strong>required</strong></p>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"SAP Doc Type\" [(ngModel)]=\"sapDocTypef\" name=\"sapDocTypef\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Sap Doc Type is <strong>required</strong></p>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <button mat-raised-button color=\"primary\" class=\"btm-action-btn\">Save</button>\n      </div>\n    </div>\n  </div>\n</form>\n</mat-card>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/masters/paas-masters/order-type-lookup/order-type-lookup.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/order-type-lookup/order-type-lookup.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvcGFhcy1tYXN0ZXJzL29yZGVyLXR5cGUtbG9va3VwL29yZGVyLXR5cGUtbG9va3VwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/masters/paas-masters/order-type-lookup/order-type-lookup.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/order-type-lookup/order-type-lookup.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OrderTypeLookupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTypeLookupComponent", function() { return OrderTypeLookupComponent; });
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





var OrderTypeLookupComponent = /** @class */ (function () {
    function OrderTypeLookupComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.isLoading = false;
        this.isShow = true;
        this.salesSku = "";
        this.itemId = "";
        this.compQty = "";
        this.itemSeq = "";
        this.oeCode = "";
        this.itemClassification = "";
        this.itemDescription = "";
        this.itemType = "";
        this.itemGroup = "";
        this.itemCategory = "";
        this.tte = "";
        this.loadFactor = "";
        this.effectiveDate = "";
        this.orderType = "";
        this.movementType = "";
        this.marketSegment = "";
        this.sapOrderType = "";
        this.sapDocType = "";
        this.bomType = "";
        this.orderTypef = "";
        this.movementTypef = "";
        this.marketSegmentf = "";
        this.sapOrderTypef = "";
        this.sapDocTypef = "";
        this.orderTypeu = "";
        this.movementTypeu = "";
        this.marketSegmentu = "";
        this.sapOrderTypeu = "";
        this.sapDocTypeu = "";
        this.insertUser = "";
        this.insertDate = "";
        this.updateUser = "";
        this.updateDate = "";
        this.displayForm = false;
        this.page = {
            limit: 100,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.editing = {};
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
    OrderTypeLookupComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "paas-master");
    };
    //show the filter
    OrderTypeLookupComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    OrderTypeLookupComponent.prototype.upload = function () { };
    // Datatable Footer
    OrderTypeLookupComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    OrderTypeLookupComponent.prototype.doSubmitSearch = function () {
        var data = {
            orderType: this.orderType,
            movementType: this.movementType,
            marketSegment: this.marketSegment,
            sapOrderType: this.sapOrderType,
            sapDocType: this.sapDocType,
            bomType: this.bomType
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.doSearch(data);
    };
    OrderTypeLookupComponent.prototype.doSearch = function (data) {
        var _this = this;
        console.log("submit data:  " + JSON.stringify(data));
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getOrderTypeLookup, data).subscribe(function (response) {
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
    OrderTypeLookupComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            orderType: this.orderType,
            movementType: this.movementType,
            marketSegment: this.marketSegment,
            sapOrderType: this.sapOrderType,
            sapDocType: this.sapDocType,
        };
        this.doSearch(bodyData);
    };
    OrderTypeLookupComponent.prototype.updateForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "orderType": this.orderTypeu,
                    "movementType": this.movementTypeu,
                    "marketSegment": this.marketSegmentu,
                    "sapOrderType": this.sapOrderTypeu,
                    "sapDocType": this.sapDocTypeu,
                }
            ]
        };
        console.log("updateMtTruckType submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.updateOrderTypeLookup, data).subscribe(function (response) {
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
    OrderTypeLookupComponent.prototype.showUpdateModel = function (row) {
        this.orderTypeu = row.orderType;
        this.movementTypeu = row.movementType;
        this.marketSegmentu = row.marketSegment;
        this.sapOrderTypeu = row.sapOrderType;
        this.sapDocTypeu = row.sapDocType;
        $("#myModal").modal('show');
    };
    OrderTypeLookupComponent.prototype.saveForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "orderType": this.orderTypef,
                    "movementType": this.movementTypef,
                    "marketSegment": this.marketSegmentf,
                    "sapOrderType": this.sapOrderTypef,
                    "sapDocType": this.sapDocTypef,
                }
            ]
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.uploadOrderTypeLookup, data).subscribe(function (response) {
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
    OrderTypeLookupComponent.prototype.displayAddForm = function () {
        if (this.displayForm)
            this.displayForm = false;
        else
            this.displayForm = true;
    };
    // export to excel file
    OrderTypeLookupComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        if (this.responseItemsList === undefined) {
            this.isLoading = false;
        }
        if (this.responseItemsList.length > 0) {
            var data = {
                orderType: this.orderType,
                movementType: this.movementType,
                marketSegment: this.marketSegment,
                sapOrderType: this.sapOrderType,
                sapDocType: this.sapDocType,
                bomType: this.bomType,
                pageLength: this.page.count
                // pageLength: this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
            };
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getOrderTypeLookup, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var excelRawData = response['data'].itemsList.slice();
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        _this.insDate = _this.formatDate(excelRawData[i].insertDate);
                        _this.insDatep = _this.effectiveDate;
                        _this.updDate = _this.formatDate(excelRawData[i].updateDate);
                        _this.updDatep = _this.effectiveDate;
                        var data_1 = {
                            "OrderType": excelRawData[i].orderType,
                            "Movement Type": excelRawData[i].movementType,
                            "Market Segment": excelRawData[i].marketSegment,
                            "SAP Order Type": excelRawData[i].sapOrderType,
                            "SAP Doc Type ": excelRawData[i].sapDocType,
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
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, 'OrderTypeLookup.xlsx');
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
    OrderTypeLookupComponent.prototype.clearAll = function () {
        this.orderType = "";
        this.movementType = "";
        this.marketSegment = "";
        this.sapOrderType = "";
        this.sapDocType = "";
    };
    OrderTypeLookupComponent.prototype.refreshData = function () {
        this.page.offset = 0;
        this.table.offset = 0;
        this.doSubmitSearch();
    };
    OrderTypeLookupComponent.prototype.formatDate = function (data) {
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
    OrderTypeLookupComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined || date === null)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    OrderTypeLookupComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    OrderTypeLookupComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    OrderTypeLookupComponent.prototype.updateLocationScan = function (f) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], OrderTypeLookupComponent.prototype, "table", void 0);
    OrderTypeLookupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-type-lookup',
            template: __webpack_require__(/*! ./order-type-lookup.component.html */ "./src/app/masters/paas-masters/order-type-lookup/order-type-lookup.component.html"),
            styles: [__webpack_require__(/*! ./order-type-lookup.component.scss */ "./src/app/masters/paas-masters/order-type-lookup/order-type-lookup.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], OrderTypeLookupComponent);
    return OrderTypeLookupComponent;
}());



/***/ }),

/***/ "./src/app/masters/paas-masters/order-type-lookup/order-type-lookup.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/order-type-lookup/order-type-lookup.module.ts ***!
  \************************************************************************************/
/*! exports provided: OrderTypeLookupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTypeLookupModule", function() { return OrderTypeLookupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _order_type_lookup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-type-lookup.component */ "./src/app/masters/paas-masters/order-type-lookup/order-type-lookup.component.ts");
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
    { path: '', component: _order_type_lookup_component__WEBPACK_IMPORTED_MODULE_2__["OrderTypeLookupComponent"] }
];
var OrderTypeLookupModule = /** @class */ (function () {
    function OrderTypeLookupModule() {
    }
    OrderTypeLookupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [_order_type_lookup_component__WEBPACK_IMPORTED_MODULE_2__["OrderTypeLookupComponent"]]
        })
    ], OrderTypeLookupModule);
    return OrderTypeLookupModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-paas-masters-order-type-lookup-order-type-lookup-module.js.map