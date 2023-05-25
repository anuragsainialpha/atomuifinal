(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-sap-masters-mt-customer-location-mt-customer-location-module"],{

/***/ "./src/app/custom-date-pipe.ts":
/*!*************************************!*\
  !*** ./src/app/custom-date-pipe.ts ***!
  \*************************************/
/*! exports provided: CustomDateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateFormat", function() { return CustomDateFormat; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Formats a /Date(XXXXXXXXXXXXXXXX)/ string into a JSON Date object
 * Takes an argument as input of actual date value in /Date(XXXXXXXXXXXXXXXX)/ format.
 * Usage:
 * date-value | customDateFormat
 * Example:
 * {{ '/Date(1402034400000)/' | customDateFormat}}
 * formats to: "2014-06-06T06:00:00.000Z"
*/
var CustomDateFormat = /** @class */ (function () {
    function CustomDateFormat() {
    }
    CustomDateFormat.prototype.transform = function (value, valuesplitindexvalues, finalDate) {
        if (value) {
            valuesplitindexvalues = value.split("/");
            finalDate =
                valuesplitindexvalues[1] +
                    "/" +
                    valuesplitindexvalues[0] +
                    "/" +
                    valuesplitindexvalues[2];
            console.log(valuesplitindexvalues);
            console.log(finalDate);
        }
        if (finalDate) {
            var myDate = new Date(finalDate).getTime();
            return myDate;
        }
        console.log(finalDate);
    };
    CustomDateFormat = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: "customDateFormat", pure: true })
    ], CustomDateFormat);
    return CustomDateFormat;
}());



/***/ }),

/***/ "./src/app/date-pipe-shared.module.ts":
/*!********************************************!*\
  !*** ./src/app/date-pipe-shared.module.ts ***!
  \********************************************/
/*! exports provided: CustomDatePipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDatePipeModule", function() { return CustomDatePipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-date-pipe */ "./src/app/custom-date-pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomDatePipeModule = /** @class */ (function () {
    function CustomDatePipeModule() {
    }
    CustomDatePipeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [
                _custom_date_pipe__WEBPACK_IMPORTED_MODULE_1__["CustomDateFormat"]
            ],
            exports: [
                _custom_date_pipe__WEBPACK_IMPORTED_MODULE_1__["CustomDateFormat"]
            ]
        })
    ], CustomDatePipeModule);
    return CustomDatePipeModule;
}());



/***/ }),

/***/ "./src/app/masters/sap-masters/mt-customer-location/mt-customer-location.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/masters/sap-masters/mt-customer-location/mt-customer-location.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n    <b> SAP Master &gt; MT Customer </b>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n  <div class=\"mt-item-fields\">\n    <div class=\"col-md-12 row\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row\">\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Cust Id\" placeholder=\"Cust Id\"\n                  (keyup)=\"getfilterDestination($event, 'CUST_ID')\" autocomplete=\"off\"\n                  [matAutocomplete]=\"destinationAutocomplete\" [(ngModel)]=\"custLoc\" name=\"custLoc\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #destinationAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of custLocList\" [value]=\"list.value\">\n                    <!-- (click)=\"setDestDescription(list.description)\"\n                  (onSelectionChange)=\"setDestDescription(list.valdescriptionue)\" -->\n                    <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- Cust Mane -->\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Cust Name\" placeholder=\"Cust Name\"\n                  (keyup)=\"getfilterDestination($event, 'CUST_NAME')\" autocomplete=\"off\"\n                  [matAutocomplete]=\"custNameAutocomplete\" [(ngModel)]=\"custName\" name=\"custName\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #custNameAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let value of custNameList\" [value]=\"value\">\n                    <!-- (click)=\"setDestDescription(list.description)\"\n                    (onSelectionChange)=\"setDestDescription(list.valdescriptionue)\" -->\n                    <span matTooltip={{value}}>{{value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- Cust Acct Grp -->\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Cust Acct Grp\" placeholder=\"Cust Acct Grp\"\n                  (keyup)=\"getfilterDestination($event, 'CUST_ACCT_GRP')\" autocomplete=\"off\"\n                  [matAutocomplete]=\"custAcctGrpAutocomplete\" [(ngModel)]=\"custAcctGrp\" name=\"custAcctGrp\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #custAcctGrpAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let value of custAcctGrpList\" [value]=\"value\">\n                    <!-- (click)=\"setDestDescription(list.description)\"\n                      (onSelectionChange)=\"setDestDescription(list.valdescriptionue)\" -->\n                    <span matTooltip={{value}}>{{value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- City -->\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"City\" placeholder=\"City\"\n                  (keyup)=\"getfilterDestination($event, 'CITY')\" autocomplete=\"off\"\n                  [matAutocomplete]=\"cityAutocomplete\" [(ngModel)]=\"city\" name=\"city\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #cityAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let value of cityList\" [value]=\"value\">\n                    <!-- (click)=\"setDestDescription(list.description)\"\n                        (onSelectionChange)=\"setDestDescription(list.valdescriptionue)\" -->\n                    <span matTooltip={{value}}>{{value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- State -->\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"State\" placeholder=\"State\"\n                  (keyup)=\"getfilterDestination($event, 'STATE')\" autocomplete=\"off\"\n                  [matAutocomplete]=\"stateAutocomplete\" [(ngModel)]=\"state\" name=\"state\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #stateAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let value of stateList\" [value]=\"value\">\n                    <!-- (click)=\"setDestDescription(list.description)\"\n                          (onSelectionChange)=\"setDestDescription(list.valdescriptionue)\" -->\n                    <span matTooltip={{value}}>{{value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- State Code -->\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"State Code\" [(ngModel)]=\"selectedStateCodes\" name=\"selectedStateCodes\" multiple >\n                  <mat-option *ngFor=\"let stateCode of stateCodeList\" [value]=\"stateCode\">{{stateCode}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- Cust Types -->\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Cust Type\" [(ngModel)]=\"selectedCustTypes\" name=\"selectedCustTypes\" multiple >\n                  <mat-option *ngFor=\"let custType of custTypeList\" [value]=\"custType\">{{custType}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formPicker\" placeholder=\"From Insert Date\"\n                  [(ngModel)]=\"fromInsertDate\" name=\"fromInsertDate\" (dateChange)=\"addEvent('fromInsertDate', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toPicker\" [min]=\"fromInsertDate\" placeholder=\"To Insert Date\"\n                  [(ngModel)]=\"toInsertDate\" name=\"toInsertDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toPicker [disabled]=\"!fromInsertDate\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"doSearch()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-item-table\">\n    <div>\n      <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [columnMode]=\"'force'\"\n        [rows]='mtCustomerList' [externalPaging]=\"true\" (page)=\"datatablePageData($event)\" [scrollbarH]=\"true\"\n        [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\"\n        [offset]=\"page.offset\">\n\n        <ngx-datatable-column name=\"Cust Id\" [width]=\"100\" [resizeable]=\"false\" prop=\"custId\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.id}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Cust Name\" [width]=\"200\" [resizeable]=\"false\" prop=\"custName\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.customerName}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Cust Acct GRP\" [width]=\"100\" [resizeable]=\"false\" prop=\"custAcctGRP\"\n          [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.custAcctGRP}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Customer Type\" [width]=\"100\" [resizeable]=\"false\" prop=\"customerType\"\n          [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.customerType}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Delivery Terms\" [width]=\"100\" [resizeable]=\"false\" prop=\"deliveryTerms\"\n          [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.deliveryTerms}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"PAN Num\" [width]=\"100\" [resizeable]=\"false\" prop=\"panNum\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.panNum}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"GST Num\" [width]=\"100\" [resizeable]=\"false\" prop=\"gstNum\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.gstNum}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"GST Code\" [width]=\"100\" [resizeable]=\"false\" prop=\"gstCode\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            <!-- {{row.expiryDate ? (row.expiryDate | customDateFormat | date:'dd-MMM-yyyy') : '--'}} -->\n            {{row.gstCode}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Address\" [width]=\"300\" [resizeable]=\"false\" prop=\"address\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.address}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"city\" [width]=\"100\" [resizeable]=\"false\" prop=\"city\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.city}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"State\" [width]=\"100\" [resizeable]=\"false\" prop=\"state\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.state}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"State Code\" [width]=\"100\" [resizeable]=\"false\" prop=\"stateCode\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.stateCode }}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Country\" [width]=\"100\" [resizeable]=\"false\" prop=\"country\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.country}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Postal Code\" [width]=\"100\" [resizeable]=\"false\" prop=\"gstpostalCode\"\n          [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            <!-- {{row.expiryDate ? (row.expiryDate | customDateFormat | date:'dd-MMM-yyyy') : '--'}} -->\n            {{row.postalCode}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Latitude\" [width]=\"200\" [resizeable]=\"false\" prop=\"latitude\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.latitude}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Longitude\" [width]=\"200\" [resizeable]=\"false\" prop=\"longitude\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.longitude}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Is Active\" [width]=\"150\" [resizeable]=\"false\" prop=\"isActive\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.isActive}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Insert User\" [width]=\"150\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.insertUser}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Insert Date\" [width]=\"150\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.insertDate ? (row.insertDate | customDateFormat | date:'dd-MMM-yyyy HH:mm') : '--'}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Update User\" [width]=\"150\" [resizeable]=\"false\" prop=\"upadteUser\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.updateUser}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Update Date\" [width]=\"100\" [resizeable]=\"false\" prop=\"updateDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.updateDate ? (row.updateDate | customDateFormat | date:'dd-MMM-yyyy HH:mm') : '--'}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <!-- Footer Template starts -->\n        <ngx-datatable-footer>\n          <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n            let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n            <div class=\"page-count\">\n              <span *ngIf=\"selectedCount\">\n                {{selectedCount.toLocaleString()}} Selected |\n              </span>\n              Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n              {{(rowCount)}} records.\n            </div>\n            <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n              [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n              [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n              (change)=\"table.onFooterPage($event)\">\n            </datatable-pager>\n          </ng-template>\n        </ngx-datatable-footer>\n        <!-- Footer Template Ends -->\n      </ngx-datatable>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/masters/sap-masters/mt-customer-location/mt-customer-location.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/masters/sap-masters/mt-customer-location/mt-customer-location.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvc2FwLW1hc3RlcnMvbXQtY3VzdG9tZXItbG9jYXRpb24vbXQtY3VzdG9tZXItbG9jYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/masters/sap-masters/mt-customer-location/mt-customer-location.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/masters/sap-masters/mt-customer-location/mt-customer-location.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MtCustomerLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtCustomerLocationComponent", function() { return MtCustomerLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MtCustomerLocationComponent = /** @class */ (function () {
    function MtCustomerLocationComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.page = {
            limit: 100,
            count: 0,
            offset: 0,
            pageSize: 50
        };
        this.isLoading = false;
        this.custNameList = [];
        this.custAcctGrpList = [];
        this.cityList = [];
        this.stateList = [];
        this.custTypeList = [];
        this.stateCodeList = [];
        this.selectedStateCodes = [];
        this.selectedCustTypes = [];
    }
    MtCustomerLocationComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "sap-master");
        this.getMTCustomerData({});
        this.getCustTypes();
        this.getStateCodeList();
    };
    //show the filter
    MtCustomerLocationComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    // Datatable Footer
    MtCustomerLocationComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    MtCustomerLocationComponent.prototype.addEvent = function (type, event) {
        if (event.target.value) {
            if (this.fromInsertDate > this.toInsertDate) {
                this.toInsertDate = '';
            }
        }
    };
    MtCustomerLocationComponent.prototype.doSearch = function () {
        this.table.offset = 0;
        this.page.offset = 0;
        var data = {
            toInsertDate: this.toInsertDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toInsertDate)).format("DD/MM/YYYY") : null,
            fromInsertDate: this.fromInsertDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromInsertDate)).format("DD/MM/YYYY") : null,
            custId: this.custLoc,
            custName: this.custName,
            custAcctGrp: this.custAcctGrp,
            city: this.city,
            state: this.state,
            stateCodes: this.selectedStateCodes,
            custTypes: this.selectedCustTypes,
        };
        if (this.fromInsertDate != '' && this.fromInsertDate != null) {
            if (this.toInsertDate != '' && this.toInsertDate != null) {
                this.mtCustomerList = [];
                this.getMTCustomerData(data);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.getMTCustomerData(data);
        }
        //this.toastr.error("Received http error 404. Please check service urlcccc")
    };
    //server side pagination
    MtCustomerLocationComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            toInsertDate: this.toInsertDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toInsertDate)).format("DD/MM/YYYY") : null,
            fromInsertDate: this.fromInsertDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromInsertDate)).format("DD/MM/YYYY") : null,
            custId: this.custLoc,
            custName: this.custName,
            custAcctGrp: this.custAcctGrp,
            city: this.city,
            state: this.state,
            stateCodes: this.selectedStateCodes,
            custTypes: this.selectedCustTypes,
        };
        this.getMTCustomerData(bodyData);
    };
    MtCustomerLocationComponent.prototype.getMTCustomerData = function (data) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getMTCustomerDetails, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.mtCustomerList = [];
                _this.mtCustomerList = response['data'].mtCustomerDtos.slice();
                _this.page.count = response['data'].total;
                _this.isLoading = false;
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...!', 'Error!');
                _this.isLoading = false;
            }
        }, function (err) {
            _this.toastr.error(err['message'] ? err['message'] : 'Something went wront...!', 'Error!');
            _this.isLoading = false;
        });
    };
    MtCustomerLocationComponent.prototype.clearAll = function () {
        this.fromInsertDate = '';
        this.toInsertDate = '';
        this.custLoc = '';
        this.custName = '';
        this.custAcctGrp = '';
        this.city = '';
        this.state = '';
        this.custLocList = [];
        this.custNameList = [];
        this.cityList = [];
        this.stateList = [];
        this.custAcctGrpList = [];
        this.selectedCustTypes = [];
        this.selectedStateCodes = [];
    };
    // Refresh data
    MtCustomerLocationComponent.prototype.refreshData = function () {
        this.isLoading = true;
        this.clearAll();
        this.table.offset = 0;
        this.page.offset = 0;
        var data = {};
        this.getMTCustomerData(data);
    };
    //export excel data
    MtCustomerLocationComponent.prototype.export = function () {
        var _this = this;
        if (this.mtCustomerList.length > 0) {
            this.isLoading = true;
            var data = {
                toInsertDate: this.toInsertDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toInsertDate)).format("DD/MM/YYYY") : null,
                fromInsertDate: this.fromInsertDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromInsertDate)).format("DD/MM/YYYY") : null,
                pageLength: this.page.count,
                // pageLength: this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
                custId: this.custLoc,
                custName: this.custName,
                custAcctGrp: this.custAcctGrp,
                city: this.city,
                state: this.state,
                stateCodes: this.selectedStateCodes,
                custTypes: this.selectedCustTypes,
            };
            // this.service.post_service_DownLoadExcel(ApiserviceService.apisList.planinfo, data).subscribe(response => {
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getMTCustomerDetails, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    // Uncomment when export excel is generated in backend
                    // var blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                    //   var filename = 'viewDispatchPlans.xlsx';
                    //   const link = window.URL.createObjectURL(blob);
                    //   const a = document.createElement('a');
                    //   document.body.appendChild(a);
                    //   a.setAttribute('style', 'display: none');
                    //   a.href = link;
                    //   a.download = filename
                    //   a.click();
                    //   window.URL.revokeObjectURL(link);
                    //   a.remove();
                    var newViewPlanData = response['data'].mtCustomerDtos;
                    var excelRawData = newViewPlanData;
                    var newExcelData = [];
                    var data_1;
                    for (var i = 0; i < excelRawData.length; i++) {
                        // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
                        // For FGS : The Avail TTE and Truck count should be based on Available Qty
                        data_1 = {
                            "Cust Id": excelRawData[i].id,
                            "Cust Name": excelRawData[i].customerName,
                            "Cust Acct GRP": excelRawData[i].custAcctGRP,
                            "Customer Type": excelRawData[i].customerType,
                            "Delivery Terms": excelRawData[i].deliveryTerms,
                            "PAN Num": excelRawData[i].panNum,
                            "GST Num": excelRawData[i].gstNum,
                            "GST Code": excelRawData[i].gstCode,
                            "Address": excelRawData[i].address,
                            "City": excelRawData[i].city,
                            "State": excelRawData[i].state,
                            "State Code": excelRawData[i].stateCode,
                            "Country": excelRawData[i].country,
                            "Postal Code": excelRawData[i].postalCode,
                            "Latitude": excelRawData[i].latitude,
                            "Longitude": excelRawData[i].longitude,
                            "Is Active": excelRawData[i].isActive,
                            "Insert User": excelRawData[i].insertUser,
                            "Insert Date": excelRawData[i].insertDate ? _this.service.customDateFormat(excelRawData[i].insertDate) : '',
                            "Update User": excelRawData[i].updateUser,
                            "Update Date": excelRawData[i].updateDate ? _this.service.customDateFormat(excelRawData[i].updateDate) : '',
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_5__["writeFile"](workBook, 'mtCustomerDetails.xlsx');
                    _this.isLoading = false;
                }
                else {
                    _this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
                    _this.isLoading = false;
                }
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
        else {
            this.toastr.error("No records found to export", "Error!");
        }
    };
    //get filter destination result
    MtCustomerLocationComponent.prototype.getfilterDestination = function (event, typeofFilter) {
        var _this = this;
        // this.destinationDesc = '';
        var filtervalue = event.target.value;
        var paramValue = '';
        switch (typeofFilter) {
            case "CUST_ID":
                paramValue = '?locationId=' + filtervalue;
                break;
            case "CUST_NAME":
                paramValue = '?custName=' + filtervalue;
                break;
            case "CUST_ACCT_GRP":
                paramValue = '?custAcctGrp=' + filtervalue;
                break;
            case "CITY":
                paramValue = '?city=' + filtervalue;
                break;
            case "STATE":
                paramValue = '?state=' + filtervalue;
                break;
            default:
                paramValue = '';
                break;
        }
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.custLocList = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchCustLoc + paramValue).subscribe(function (response) {
                // this.custLocList = response['data'].searchResult;
                if (response['statusCode'] == 200) {
                    switch (response['message']) {
                        case "CUST_ID":
                            _this.custLocList = [];
                            _this.custLocList = response['data'].searchResult;
                            break;
                        case "CUST_NAME":
                            _this.custNameList = [];
                            _this.custNameList = response['data'];
                            break;
                        case "CUST_ACCT_GRP":
                            _this.custAcctGrpList = [];
                            _this.custAcctGrpList = response['data'];
                            break;
                        case "CITY":
                            _this.cityList = [];
                            _this.cityList = response['data'];
                            break;
                        case "STATE":
                            _this.stateList = [];
                            _this.stateList = response['data'];
                            break;
                        default:
                            paramValue = '';
                            break;
                    }
                }
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    MtCustomerLocationComponent.prototype.getCustTypes = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getMTCustTypes).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.custTypeList = response['data'];
            }
        });
    };
    MtCustomerLocationComponent.prototype.getStateCodeList = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getMTStateCode).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.stateCodeList = response['data'];
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], MtCustomerLocationComponent.prototype, "table", void 0);
    MtCustomerLocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mt-customer-location',
            template: __webpack_require__(/*! ./mt-customer-location.component.html */ "./src/app/masters/sap-masters/mt-customer-location/mt-customer-location.component.html"),
            styles: [__webpack_require__(/*! ./mt-customer-location.component.scss */ "./src/app/masters/sap-masters/mt-customer-location/mt-customer-location.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], MtCustomerLocationComponent);
    return MtCustomerLocationComponent;
}());



/***/ }),

/***/ "./src/app/masters/sap-masters/mt-customer-location/mt-customer-location.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/masters/sap-masters/mt-customer-location/mt-customer-location.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: MtCustomerLocationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtCustomerLocationModule", function() { return MtCustomerLocationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
/* harmony import */ var _mt_customer_location_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mt-customer-location.component */ "./src/app/masters/sap-masters/mt-customer-location/mt-customer-location.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _mt_customer_location_component__WEBPACK_IMPORTED_MODULE_8__["MtCustomerLocationComponent"] },
];
var MtCustomerLocationModule = /** @class */ (function () {
    function MtCustomerLocationModule() {
    }
    MtCustomerLocationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_3__["LoaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_7__["CustomDatePipeModule"]
            ],
            declarations: [
                _mt_customer_location_component__WEBPACK_IMPORTED_MODULE_8__["MtCustomerLocationComponent"]
            ],
            entryComponents: [
                _mt_customer_location_component__WEBPACK_IMPORTED_MODULE_8__["MtCustomerLocationComponent"]
            ],
        })
    ], MtCustomerLocationModule);
    return MtCustomerLocationModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-sap-masters-mt-customer-location-mt-customer-location-module.js.map