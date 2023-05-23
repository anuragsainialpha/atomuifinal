(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fgs-operations-print-loadslips-print-loadslip-module"],{

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

/***/ "./src/app/fgs-operations/print-loadslips/print-loadslip.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/fgs-operations/print-loadslips/print-loadslip.module.ts ***!
  \*************************************************************************/
/*! exports provided: printLoadslipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLoadslipModule", function() { return printLoadslipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _print_loadslips_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./print-loadslips.component */ "./src/app/fgs-operations/print-loadslips/print-loadslips.component.ts");
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _print_loadslips_component__WEBPACK_IMPORTED_MODULE_7__["PrintLoadslipsComponent"] },
    { path: ':loadslipId', component: _print_loadslips_component__WEBPACK_IMPORTED_MODULE_7__["PrintLoadslipsComponent"] },
];
var printLoadslipModule = /** @class */ (function () {
    function printLoadslipModule() {
    }
    printLoadslipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["customMaterialModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__["CustomDatePipeModule"]
            ],
            declarations: [
                _print_loadslips_component__WEBPACK_IMPORTED_MODULE_7__["PrintLoadslipsComponent"]
            ]
        })
    ], printLoadslipModule);
    return printLoadslipModule;
}());



/***/ }),

/***/ "./src/app/fgs-operations/print-loadslips/print-loadslips.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/fgs-operations/print-loadslips/print-loadslips.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    <b> Loadslip > View Loadslips</b>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n  <div class=\"manualplan-fields\">\n    <div class=\"col-md-12 row\" *ngIf=\"isShow\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row\">\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formPicker\" placeholder=\"From Date\" [(ngModel)]=\"fromDate\"\n                  name=\"fromDate\" (dateChange)=\"addEvent('fromDate', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toPicker\" [min]=\"fromDate\" placeholder=\"To Date\"\n                  [(ngModel)]=\"toDate\" name=\"toDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toPicker [disabled]=\"!fromDate\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\" *ngIf=\"service.isDPREPRole()\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event)\" autocomplete=\"off\"\n                [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"sourceCode\" name=\"source\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n                  [(ngModel)]=\"destination\" name=\"destination\" (keyup)=\"getDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\"\n                    (click)=\"setDestDescription(list.description)\"\n                    (onSelectionChange)=\"setDestDescription(list.description)\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"pl-0\" [ngClass]=\"(service.isDPREPRole())?'col-md-1':'col-md-2'\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination Description\" aria-label=\"State\"\n                  [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destination\"\n                  (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                    (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                    <span>({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Truck\" autocomplete=\"off\" [(ngModel)]=\"truckNumber\" name=\"truckNumber\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"col-md-2 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Truck/Container Type\" [(ngModel)]=\"truckType\" name=\"trcktype\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Container\" autocomplete=\"off\" [(ngModel)]=\"container\" name=\"container\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Transporter\" placeholder=\"Transporter\"\n                  (keyup)=\"getfilterTransporter($event)\" autocomplete=\"off\" [matAutocomplete]=\"transporterAutocomplete\"\n                  [(ngModel)]=\"transporter\" name=\"transporter\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #transporterAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of transporterList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Material Code\" autocomplete=\"off\" aria-label=\"Material Code\"\n                  [matAutocomplete]=\"materialCodeAutocomplete\" [(ngModel)]=\"materialCode\" name=\"materialCode\"\n                  (keyup)=\"filterMaterialCode($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #materialCodeAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of materilcodelist\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Type\" autocomplete=\"off\" [(ngModel)]=\"type\" name=\"type\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"MKT Segment\" [(ngModel)]=\"mktsegment\" name=\"mktsegment\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let mktsegment of mktsegmentList\" [value]=\"mktsegment\">\n                    {{mktsegment}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Load Slip Id\" autocomplete=\"off\" [(ngModel)]=\"loadSlipId\" oninput=\"this.value = this.value.toUpperCase()\"\n                  name=\"loadslipID\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Shipment Id\" autocomplete=\"off\" [(ngModel)]=\"shipmentId\" name=\"shipmentId\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <mat-form-field>\n              <input matInput aria-label=\"Country of Destination\" placeholder=\"Country of Destination\"\n                (keyup)=\"countryOfDestinationFilter($event,'destCountrySearch')\" autocomplete=\"off\"\n                [matAutocomplete]=\"dischargeAutocomplete\" [(ngModel)]=\"destCountryName\" name=\"destCountryName\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #dischargeAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let country of countryList\" [value]=\"country.description\">\n                  <span matTooltip={{country.description}}>{{country.value}} - ({{country.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Invoice\" autocomplete=\"off\" [(ngModel)]=\"invoice\" name=\"Invoice\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Status\" [(ngModel)]=\"draftedLoadslipStatusType\" name=\"status\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let item of draftedLoadslipsList\" [value]=\"item.value\"> {{item.key}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"LS Category\" [(ngModel)]=\"draftedLoadslipCategory\" name=\"lsCategory\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let item of lsCategoryList\" [value]=\"item\"> {{item}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"filerViewLoadSlip()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"clearfix\"></div>\n  <!-- <div class=\"manual-plan-table  ngx-table-custom-scroll  ngx-table-tr-custom-scroll \">\n    <div> -->\n  <ngx-datatable #table class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table\n    [rows]='printedLoadslipsList' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\"\n    [scrollbarH]=\"true\" [scrollbarV]=\"false\" [externalPaging]=\"true\" [limit]=\"page.limit\"\n    (page)=\"datatablePageData($event)\" [count]=\"page.count\" [offset]=\"page.offset\">\n    <ngx-datatable-column name=\"Load Slip ID\" [width]=\"170\" [frozenLeft]=\"true\" [resizeable]=\"false\" prop=\"loadslipId\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <!-- [routerLink]=\"['/fgs/create-load-slip',row.loadslipId,'printView']\" -->\n        <a (click)=\"viewLoadSlipData(row)\">{{row.loadslipId}}</a>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Shipment ID\" [width]=\"130\" [frozenLeft]=\"freezeLeftValue\" [resizeable]=\"false\" prop=\"shipmentId\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.shipmentId}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Source\" [width]=\"70\" [resizeable]=\"false\" [frozenLeft]=\"true\" prop=\"sourceLoc\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sourceLoc}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Dest\" [width]=\"70\" [frozenLeft]=\"true\" [resizeable]=\"false\" prop=\"destLoc\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destLoc}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Truck\" [width]=\"120\" [frozenLeft]=\"freezeLeftValue\" [resizeable]=\"false\" prop=\"truckNumber\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckNumber}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Dest Description\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destDis\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destDis}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Type\" [width]=\"50\" [resizeable]=\"false\" prop=\"stopType\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.stopType || '--'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Order Type\" [width]=\"70\" [resizeable]=\"false\" prop=\"type\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.type || '--'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Created Date\" [width]=\"130\" [resizeable]=\"false\" prop=\"createdDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.createdDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Truck/Cont Type\" [width]=\"130\" [resizeable]=\"false\" prop=\"truckType\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckType}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Transporter\" [width]=\"150\" [resizeable]=\"false\" prop=\"servprov\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.servprov || '--'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"STO/SO\" [width]=\"150\" [resizeable]=\"false\" prop=\"stoSoNum\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.stoSoNum}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Delivery\" [width]=\"150\" [resizeable]=\"false\" prop=\"delivery\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.delivery}}\n      </ng-template>\n    </ngx-datatable-column>]\n    <ngx-datatable-column name=\"Invoice\" [width]=\"150\" [resizeable]=\"false\" prop=\"sapInvoice\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvoice}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Invoice Dt.\" [width]=\"100\" [resizeable]=\"false\" prop=\"sapInvoiceDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvoiceDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- <ngx-datatable-column name=\"Confirm Dt.\" [width]=\"125\" [resizeable]=\"false\" prop=\"gatedOutDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.gatedOutDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column> -->\n    <ngx-datatable-column name=\"Actual Arrival Dt.\" [width]=\"125\" [resizeable]=\"false\" prop=\"actualArrivalDate\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.actualArrivalDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"LR\" [width]=\"150\" [resizeable]=\"false\" prop=\"lrNum\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.lrNum}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"LR Date\" [width]=\"125\" [resizeable]=\"false\" prop=\"lrDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.lrDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Container\" [width]=\"120\" [resizeable]=\"false\" prop=\"containerNum\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.containerNum}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Country of Destination\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"destCountryName\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destCountryName}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"DIT_QTY\" [width]=\"150\" [resizeable]=\"false\" prop=\"ditQty\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.ditQty}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"SHORTAGE_QTY\" [width]=\"150\" [resizeable]=\"false\" prop=\"shortQty\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.shortQty}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Total Loaded\" [width]=\"70\" [resizeable]=\"false\" prop=\"qty\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.qty}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Tyre\" [width]=\"70\" [resizeable]=\"false\" prop=\"totTyres\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totTyres}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Tube\" [width]=\"70\" [resizeable]=\"false\" prop=\"totTubes\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totTubes}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Flap\" [width]=\"70\" [resizeable]=\"false\" prop=\"totTubes\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totFlaps}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Valve\" [width]=\"70\" [resizeable]=\"false\" prop=\"totValve\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totValve}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"PCTR\" [width]=\"70\" [resizeable]=\"false\" prop=\"pctr\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{(row.totPctr)?(row.totPctr):0}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Other Qty\" [width]=\"50\" [resizeable]=\"false\" prop=\"otherQty\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.otherQty || '0'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Total Qty\" [width]=\"70\" [resizeable]=\"false\" prop=\"transhipment\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totQty}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"GRN\" [width]=\"70\" [resizeable]=\"false\" prop=\"grn\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.grn}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"GRN Date\" [width]=\"100\" [resizeable]=\"false\" prop=\"grnDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.grnDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Transhipment\" [width]=\"70\" [resizeable]=\"false\" prop=\"transhipment\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.transhipment}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Freight Avail\" [width]=\"70\" [resizeable]=\"false\" prop=\"transhipment\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.freightAvailability}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Cat\" [width]=\"80\" [resizeable]=\"false\" prop=\"itemCategory\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.itemCategory}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"TTE Qty\" [width]=\"50\" [resizeable]=\"false\" prop=\"tteQty\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.tteQty | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"TTE Util\" [width]=\"70\" [resizeable]=\"false\" prop=\"tteUtil\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.tteUtil | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Wt Util\" [width]=\"70\" [resizeable]=\"false\" prop=\"weightUtil\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.weightUtil | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Vol Util\" [width]=\"60\" [resizeable]=\"false\" prop=\"volumeUtil\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.volumeUtil | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"DSeq\" [width]=\"50\" [resizeable]=\"false\" prop=\"dropSeq\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.dropSeq}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Arrived Bay\" [width]=\"125\" [resizeable]=\"false\" prop=\"bayArrivedDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.bayArrivedDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Print LS\" [width]=\"125\" [resizeable]=\"false\" prop=\"lsPrintDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.lsPrintDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Send For Barcode\" [width]=\"125\" [resizeable]=\"false\" prop=\"sendForBarcodeDate\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sendForBarcodeDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Loading Start\" [width]=\"125\" [resizeable]=\"false\" prop=\"loadingStartDate\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.loadingStartDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Loading End\" [width]=\"125\" [resizeable]=\"false\" prop=\"loadingEndDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.loadingEndDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Confirm\" [width]=\"125\" [resizeable]=\"false\" prop=\"confirmedDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.confirmedDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Release\" [width]=\"125\" [resizeable]=\"false\" prop=\"releaseDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.releaseDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Insert User\" [width]=\"100\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.insertUser}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Update User\" [width]=\"100\" [resizeable]=\"false\" prop=\"updateUser\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.updateUser}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Status\" [width]=\"100\" [resizeable]=\"false\" prop=\"status\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.status}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Integration Status\" [width]=\"80\" [resizeable]=\"false\" prop=\"integrationStatus\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.integrationStatus}}\n      </ng-template>\n    </ngx-datatable-column>\n\n\n    <!-- <ngx-datatable-column name=\"Integration Msg\" [width]=\"80\" [resizeable]=\"false\" prop=\"integrationMsg\" [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      <button class=\"theme-small-button\" matTooltip=\"Integration Message\" (click)=\"showIntegrationMessage(row.integrationMsg)\" *ngIf=\"(row.integrationMsg)\">\n        <i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>\n      </button>\n    </ng-template>\n  </ngx-datatable-column> -->\n\n\n    <ngx-datatable-column name=\"Loadslip Comments\" [width]=\"120\" [resizeable]=\"false\" prop=\"comments\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <div class=\"edit-field\" [title]=\"row.comments\" [ngClass]=\"{'cursor-pointer':row.comments?.length>15}\"\n          (click)=\"showIntegrationMessage(row.comments)\">\n          {{(row.comments?.length>15)? (row.comments | slice:0:15)+'..':(row.comments)}}\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"SAP invoice value(INR)\" [width]=\"100\" [resizeable]=\"false\" prop=\"dropSeq\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvValue}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"SAP invoice weight(Kg)\" [width]=\"100\" [resizeable]=\"false\" prop=\"dropSeq\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvWeight}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Eway bill No\" [width]=\"100\" [resizeable]=\"false\" prop=\"dropSeq\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.ewayBillNo}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"MKT Seg\" [width]=\"100\" [resizeable]=\"false\" prop=\"marketSegment\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.marketSegment}}\n      </ng-template>\n    </ngx-datatable-column>\n    \n    <ngx-datatable-column name=\"Cust Inv Num\" [width]=\"150\" [resizeable]=\"false\" prop=\"custInvNum\" [sortable]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.customInvoiceNumber}}\n        </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"FT Trip Tracking\" [width]=\"1000\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"ftTripId\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <a (click)=\"goToLink(row.ftTripId)\">{{row.ftTripId}}</a>\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- <ngx-datatable-column name=\"Action\" [width]=\"70\" [resizeable]=\"false\" prop=\"status\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <button class=\"theme-delete-button\" matTooltip=\"Cancel Loadslip\" (click)=\"cancelLoadslip(row.loadslipId)\" *ngIf=\"(row.releaseDate == null)\">\n          <i class=\"fa fa-times fa-2x\" aria-hidden=\"true\"></i>\n        </button>\n      </ng-template>\n    </ngx-datatable-column> -->\n    <!-- Footer Template starts -->\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedCount\">\n            {{selectedCount.toLocaleString()}} Selected |\n          </span>\n          Showing {{(offset * pageSize)+1}} to {{(rowCount>\n          (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n          {{(rowCount)}} records.\n        </div>\n        <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n          [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n          [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n          (change)=\"table.onFooterPage($event)\">\n        </datatable-pager>\n      </ng-template>\n    </ngx-datatable-footer>\n    <!-- Footer Template Ends -->\n  </ngx-datatable>\n  <!-- </div>\n\n  </div> -->\n\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"integrationMsgModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message !!!</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{integrationMsg}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"saveComments()\">Save</button> -->\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/fgs-operations/print-loadslips/print-loadslips.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/fgs-operations/print-loadslips/print-loadslips.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".manulal-plan-header {\n  padding: 5px 0px;\n  margin-bottom: 0px;\n  font-weight: 300; }\n  .manulal-plan-header span {\n    color: #3F2B53;\n    margin-right: 15px; }\n  .manualplan-fields {\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0px; }\n  .manualplan-fields p > i {\n    cursor: pointer; }\n  .manualplan-fields .col-md-3 {\n    padding: 0px 15px; }\n  .manualplan-fields .form-group {\n    margin-bottom: 0; }\n  .manualplan-fields .form-group .mat-form-field .mat-form-field-wrapper {\n      padding-bottom: 0.5em !important; }\n  .show-entries .mat-form-field-label {\n  display: none !important; }\n  .manual-plan-table {\n  margin-top: 10px;\n  width: 100%;\n  overflow: hidden;\n  overflow-x: auto; }\n  .manual-plan-table table {\n    table-layout: fixed;\n    margin-bottom: 0em; }\n  .manual-plan-table table tr {\n      height: 30px; }\n  .manual-plan-table table tr th {\n        width: 150px;\n        padding: 0.3rem; }\n  .manual-plan-table table tr td {\n        width: 150px;\n        padding: 0.25rem; }\n  .material {\n  margin-top: 10px; }\n  .ngx-datatable .fa-times {\n  font-size: 14px; }\n  .ngx-datatable a {\n  color: #007bff !important;\n  text-decoration: none !important;\n  background-color: transparent !important;\n  -webkit-text-decoration-skip: objects  !important; }\n  .ngx-datatable a:hover {\n    text-decoration: underline !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmdzLW9wZXJhdGlvbnMvcHJpbnQtbG9hZHNsaXBzL0M6XFxVc2Vyc1xcQW51cmFnU2FpbmlcXERvd25sb2Fkc1xcYXRvbS11aV9vcmlnaW5hbF8yMTA5MjAyMlxcYXRvbS11aS9zcmNcXGFwcFxcZmdzLW9wZXJhdGlvbnNcXHByaW50LWxvYWRzbGlwc1xccHJpbnQtbG9hZHNsaXBzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZ3Mtb3BlcmF0aW9ucy9wcmludC1sb2Fkc2xpcHMvQzpcXFVzZXJzXFxBbnVyYWdTYWluaVxcRG93bmxvYWRzXFxhdG9tLXVpX29yaWdpbmFsXzIxMDkyMDIyXFxhdG9tLXVpL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7RUFIcEI7SUFLUSxjQ1BpQjtJRFFqQixrQkFBa0IsRUFBQTtFQUsxQjtFQUNJLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0VBSGhCO0lBS1EsZUFBZSxFQUFBO0VBTHZCO0lBUVEsaUJBQWlCLEVBQUE7RUFSekI7SUFXUSxnQkFBZ0IsRUFBQTtFQVh4QjtNQWNnQixnQ0FBZ0MsRUFBQTtFQUtoRDtFQUVRLHdCQUF3QixFQUFBO0VBR2hDO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVU7RUFDVixnQkFBZTtFQUNmLGdCQUFlLEVBQUE7RUFKbkI7SUFNUSxtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7RUFQMUI7TUFTWSxZQUFXLEVBQUE7RUFUdkI7UUFXZ0IsWUFBVztRQUNYLGVBQWMsRUFBQTtFQVo5QjtRQWVnQixZQUFXO1FBQ1gsZ0JBQWUsRUFBQTtFQUsvQjtFQUNJLGdCQUFnQixFQUFBO0VBRXBCO0VBQ0ksZUFBZSxFQUFBO0VBR25CO0VBQ0kseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyx3Q0FBd0M7RUFDeEMsaURBQWlELEVBQUE7RUFKckQ7SUFNUSxxQ0FBcUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zncy1vcGVyYXRpb25zL3ByaW50LWxvYWRzbGlwcy9wcmludC1sb2Fkc2xpcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL21peGlucyc7XG5cbi5tYW51bGFsLXBsYW4taGVhZGVye1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3BhbntcbiAgICAgICAgY29sb3I6ICRkYXJrLWNvbG9yLXRoZW1lO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG59XG4ubWFudWFscGxhbi1maWVsZHN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcCA+IGl7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmNvbC1tZC0ze1xuICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgICB9XG4gICAgLmZvcm0tZ3JvdXB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5zaG93LWVudHJpZXN7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLm1hbnVhbC1wbGFuLXRhYmxle1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgb3ZlcmZsb3cteDphdXRvO1xuICAgIHRhYmxle1xuICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwZW07XG4gICAgICAgIHRye1xuICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgICAgICAgICB0aHtcbiAgICAgICAgICAgICAgICB3aWR0aDoxNTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjAuM3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRke1xuICAgICAgICAgICAgICAgIHdpZHRoOjE1MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MC4yNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5tYXRlcmlhbHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm5neC1kYXRhdGFibGUgLmZhLXRpbWVze1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm5neC1kYXRhdGFibGUgIGEge1xuICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzICAhaW1wb3J0YW50O1xuICAgICY6aG92ZXJ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgfVxufSIsIiR0aGVtZS1wdXJwbGUtYmFja2dyb3VuZC1jb2xvcjojRkFGOUZFO1xuJGRhcmstY29sb3ItdGhlbWU6IzNGMkI1MztcbiR0aGVtZS1wdXJwbGUtY29sb3I6IzVBMzA5NDtcbiRsaWdodC1jb2xvci10aGVtZTojZDRiNmZmO1xuJG1lZGl1bS1jb2xvci10aGVtZTogIzc3NTg5OTtcbiR0aGVtZS1ncmV5OiNhYWE7XG4kdGhlbWUtbGlnaHQtZ3JleTogI2NjYztcbiR0aGVtZS13aGl0ZTojZmZmZmZmO1xuJHRoZW1lLWJsYWNrOiMwMDA7XG4kdGhlbWUtYmx1ZS1jb2xvcjojMjE5NmYzO1xuJHRoZW1lLWdyZWVuLWNvbG9yOiM0MTc1MDU7XG4kdGhlbWUtbGlnaHQtZ3JlZW4tY29sb3I6I0I4RTk4NjtcbiR0aGVtZS1saWdodC1icm93bi1jb2xvcjojRUNFMTU1IDtcbiR0aGVtZS1icm93bi1jb2xvcjojOUI5MzJCO1xuJHRoZW1lLWJyb3duLWJvcmRlcjojQ0ZDMzJEO1xuJHRoZW1lLXNlYXJjaGJveC1iYWNrZ3JvdW5kLWNvbG9yOiNGOUY0RkY7XG4kdGhlbWUtb3BhY3RpdHktYm9yZGVyOiNiZTk2ZjU7XG4kdGhlbWUtcmVkLXRleHQ6I0M3M0QzRDtcbiR0aGVtZS1yZWQtYmFja2dyb3VuZC1jb2xvcjogI0ZDQUVBRTtcbiR0aGVtZW4tcmVkLWJvcmRlci1jb2xvcjojRUQ3MzczO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogI2RlZTJlNjtcbiRzZWNvbmRhcnktdGhlbWU6ICNjMjU2M2Y7XG4kc2Vjb25kYXJ5LWxpZ2h0LXRoZW1lOiAjZWZjY2M1OyJdfQ== */"

/***/ }),

/***/ "./src/app/fgs-operations/print-loadslips/print-loadslips.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/fgs-operations/print-loadslips/print-loadslips.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PrintLoadslipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintLoadslipsComponent", function() { return PrintLoadslipsComponent; });
/* harmony import */ var _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/helper-service/helper-service.service */ "./src/app/services/helper-service/helper-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/public/date.adapters */ "./src/app/public/date.adapters.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PrintLoadslipsComponent = /** @class */ (function () {
    function PrintLoadslipsComponent(service, toastr, router, helperService, activatedRoute) {
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.helperService = helperService;
        this.activatedRoute = activatedRoute;
        this.statusList = ["INTRANSIT", "COMPLETED", "DELIVERED", "UNLOADING"];
        this.isLoading = false;
        this.page = {
            limit: 100,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.printedLoadslipsList = [];
        this.descriptionList = [];
        this.truckType = [];
        this.isShow = true;
        this.mktsegment = [];
        this.mktsegmentList = [];
        this.truckList = [];
        this.currentDate = this.helperService.getTodayDate();
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.fromCreatedDate = '';
        this.toCreatedDate = '';
        this.toDate = '';
        this.fromDate = '';
        this.draftedLoadslipsList = [];
        this.draftedLoadslipStatusType = [];
        this.lsCategoryList = [];
        this.draftedLoadslipCategory = [];
        this.freezeLeftValue = true;
    }
    PrintLoadslipsComponent.prototype.ngDoCheck = function () {
        var width = $(window).width();
        if (width < 1024) {
            this.freezeLeftValue = false;
        }
        else {
            this.freezeLeftValue = true;
        }
    };
    PrintLoadslipsComponent.prototype.ngOnInit = function () {
        this.roles = src_app_constants__WEBPACK_IMPORTED_MODULE_5__["constants"].roles;
        localStorage.setItem("userMenu", "load-slip");
        this.loadSlipId = this.activatedRoute.snapshot.params['loadslipId'];
        this.draftedLoadslipsList = src_app_constants__WEBPACK_IMPORTED_MODULE_5__["constants"].viewLoadlslipstatus;
        this.check_Role_DP_REP = this.service.checkRole();
        // for getting view load slip data
        if (this.loadSlipId) {
            this.loadSlipId = this.loadSlipId;
        }
        this.forDateValidation();
        this.fromDate = this.currentDateAsString;
        this.toDate = this.fromDate;
        var bodyData = {
            'fromCreatedDate': this.currentDate,
            'toCreatedDate': this.currentDate,
            'loadslipId': this.loadSlipId,
            'type': src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].intransit + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].completed + ',' + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].delivered + ',' + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].unloading,
            'status': this.statusList
        };
        this.getPrintedLoadslips(bodyData);
        // for getting truck type master
        this.getTruckTypeMasterData();
        this.getMarketSegment();
        this.getLSCategoryList();
    };
    // for getting truck type master
    PrintLoadslipsComponent.prototype.getTruckTypeMasterData = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.truckTypeMasterData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.truckList = response['data'];
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "!Error");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
        });
    };
    PrintLoadslipsComponent.prototype.getLSCategoryList = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getLSCategoryList).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.lsCategoryList = response['data'];
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "!Error");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
        });
    };
    PrintLoadslipsComponent.prototype.addEvent = function (type, event) {
        if (event.target.value) {
            /* Checking if selected from date greater than to date.
           Clearing the toDate field when from date greater than to date */
            var checkToDate = this.toDate;
            console.log("Check--->1", checkToDate);
            if (this.toDate == this.currentDateAsString) {
                // on page load we are defaluting the  to date with string. Comparing string with date is not possible
                // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
                checkToDate = new Date();
                console.log("Check--->2", checkToDate);
            }
            if (this.toDate && (this.fromDate > checkToDate)) {
                this.toDate = '';
            }
            // this.toDate = '';
        }
    };
    //clear data 
    PrintLoadslipsComponent.prototype.clearAll = function () {
        this.destination = '';
        this.invoice = "";
        this.materialCode = "";
        this.loadSlipId = "";
        this.type = "";
        this.transhipment = "";
        this.truckType = [];
        this.mktsegment = [];
        this.destinationDesc = "";
        this.descriptionList = [];
        this.destinationList = [];
        this.materilcodelist = [];
        this.shipmentId = '';
        this.toDate = '';
        this.fromDate = '';
        this.draftedLoadslipStatusType = [];
        this.sourceCode = '';
        this.sourceList = [];
        this.truckNumber = '';
        this.container = '';
        this.destCountryName = '';
        this.countryList = [];
        this.transporter = '';
        this.draftedLoadslipCategory = [];
    };
    // Date Validation
    PrintLoadslipsComponent.prototype.forDateValidation = function () {
        if (this.fromDate != '' && this.fromDate != null) {
            this.fromCreatedDate = moment__WEBPACK_IMPORTED_MODULE_9__(new Date(this.fromDate)).format("DD/MM/YYYY");
        }
        else {
            this.fromCreatedDate = '';
        }
        if (this.toDate != '' && this.toDate != null) {
            this.toCreatedDate = moment__WEBPACK_IMPORTED_MODULE_9__(new Date(this.toDate)).format("DD/MM/YYYY");
        }
        else {
            this.toCreatedDate = '';
        }
    };
    PrintLoadslipsComponent.prototype.filerViewLoadSlip = function () {
        var _this = this;
        this.table.offset = 0;
        this.forDateValidation();
        var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
        var bodyData = {
            'fromCreatedDate': this.fromCreatedDate,
            'toCreatedDate': this.toCreatedDate,
            'destination': this.destination,
            'invoice': this.invoice,
            'itemId': this.materialCode,
            'loadslipId': this.loadSlipId,
            'stopType': this.type,
            'transhipment': this.transhipment,
            'truckType': this.truckType,
            'marketSegment': this.mktsegment,
            'shipmentId': this.shipmentId,
            'type': src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].intransit + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].completed + ',' + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].delivered + ',' + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].unloading,
            'status': this.statusList,
            "lsStatus": this.draftedLoadslipStatusType,
            "source": this.sourceCode,
            "truckNumber": this.truckNumber,
            "containerNum": this.container,
            "destCountry": obj ? (obj.value) : '',
            "transporter": this.transporter,
            'itemCategories': this.draftedLoadslipCategory,
        };
        if (this.fromDate != '' && this.fromDate != null) {
            if (this.toDate != '' && this.toDate != null) {
                this.getPrintedLoadslips(bodyData);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.getPrintedLoadslips(bodyData);
        }
    };
    //get the printed load slips in Loading the page
    PrintLoadslipsComponent.prototype.getPrintedLoadslips = function (bodyData) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getDraftedLoadslips, bodyData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var responseData = response['data'].loadslips;
                _this.printedLoadslipsList = responseData;
                _this.printedLoadslipsList = _this.printedLoadslipsList.slice();
                _this.page.count = response['data'].total;
                _this.page.limit = response['data'].pageLength;
                _this.isLoading = false;
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // get destaination list on search
    PrintLoadslipsComponent.prototype.getDestinationList = function (event) {
        var _this = this;
        this.destinationDesc = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                _this.destinationList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    PrintLoadslipsComponent.prototype.showIntegrationMessage = function (integrationMsg) {
        this.integrationMsg = integrationMsg;
        $('#integrationMsgModal').modal('show');
    };
    //filter material code 
    PrintLoadslipsComponent.prototype.filterMaterialCode = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.materilcodelist = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?materialCode=' + filtervalue).subscribe(function (response) {
                _this.materilcodelist = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // export to excel file
    PrintLoadslipsComponent.prototype.export = function () {
        var _this = this;
        if (this.printedLoadslipsList.length > 0) {
            this.isLoading = true;
            var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
            var data = {
                'fromCreatedDate': this.fromCreatedDate,
                'toCreatedDate': this.toCreatedDate,
                'marketSegment': this.mktsegment,
                'destination': this.destination,
                'invoice': this.invoice,
                'itemId': this.materialCode,
                'loadslipId': this.loadSlipId,
                'stopType': this.type,
                'transhipment': this.transhipment,
                'truckType': this.truckType,
                'pageLength': this.page.count,
                'shipmentId': this.shipmentId,
                'type': src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].intransit + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].completed + ',' + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].delivered + ',' + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].unloading,
                'status': this.statusList,
                "lsStatus": this.draftedLoadslipStatusType,
                "source": this.sourceCode,
                "truckNumber": this.truckNumber,
                "containerNum": this.container,
                "destCountry": obj ? (obj.value) : '',
                "transporter": this.transporter,
                'itemCategories': this.draftedLoadslipCategory,
            };
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getDraftedLoadslips, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var newPrintLoadslipData = response['data'].loadslips;
                    var excelRawData = newPrintLoadslipData;
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        var data_1 = {
                            "Load Slip ID": excelRawData[i].loadslipId,
                            "Shipment Id": excelRawData[i].shipmentId,
                            "Source": excelRawData[i].sourceLoc,
                            "Destination": excelRawData[i].destLoc,
                            "Truck Number": excelRawData[i].truckNumber,
                            "Dest Description": excelRawData[i].destDis,
                            "Type": excelRawData[i].stopType,
                            "Order Type": excelRawData[i].type,
                            "Created Date": _this.service.customDateTimeFormat(excelRawData[i].createdDate),
                            "Truck/Container Type": excelRawData[i].truckType,
                            "Transporter": excelRawData[i].servprov,
                            "STO/SO": excelRawData[i].stoSoNum,
                            "Delivery": excelRawData[i].delivery,
                            "Invoice": excelRawData[i].sapInvoice,
                            "Invoice Date": _this.service.customDateTimeFormat(excelRawData[i].sapInvoiceDate),
                            "Actual Arrival Date": excelRawData[i].actualArrivalDate,
                            "LR": excelRawData[i].lrNum,
                            "LR Date": _this.service.customDateTimeFormat(excelRawData[i].lrDate),
                            "Container": excelRawData[i].containerNum,
                            "Country of Destination": excelRawData[i].destCountryName,
                            "DIT Quantity": excelRawData[i].ditQty,
                            "Shortage Quantity": excelRawData[i].shortQty,
                            "Total Loaded": excelRawData[i].qty,
                            "Tyre": +excelRawData[i].totTyres,
                            "Tube": +excelRawData[i].totTubes,
                            "Flap": +excelRawData[i].totFlaps,
                            "Valve": +excelRawData[i].totValve,
                            "PCTR": (excelRawData[i].pctr) ? (+excelRawData[i].pctr) : 0,
                            "Other Qty": (excelRawData[i].otherQty) ? (+excelRawData[i].otherQty) : 0,
                            "Total Qty": +excelRawData[i].totQty,
                            "GRN": excelRawData[i].grn,
                            "GRN Date": _this.service.customDateTimeFormat(excelRawData[i].grnDate),
                            "Transhipment": excelRawData[i].transhipment,
                            "Freight Available": excelRawData[i].freightAvailability,
                            "Item Category": excelRawData[i].itemCategory,
                            "TTE Quantity": excelRawData[i].tteQty ? +excelRawData[i].tteQty.toFixed(2) : 0,
                            "TTE Util": excelRawData[i].tteUtil ? +excelRawData[i].tteUtil.toFixed(2) : 0,
                            "Weight Util": excelRawData[i].weightUtil ? +excelRawData[i].weightUtil.toFixed(2) : 0,
                            "Volume Util": excelRawData[i].volumeUtil ? +excelRawData[i].volumeUtil.toFixed(2) : 0,
                            "Drop Sequence": excelRawData[i].dropSeq,
                            "Arrived Bay": _this.service.customDateTimeFormat(excelRawData[i].bayArrivedDate),
                            "Print LS": _this.service.customDateTimeFormat(excelRawData[i].lsPrintDate),
                            "Send For Barcode": _this.service.customDateTimeFormat(excelRawData[i].sendForBarcodeDate),
                            "Loading Start": _this.service.customDateTimeFormat(excelRawData[i].loadingStartDate),
                            "Loading End": _this.service.customDateTimeFormat(excelRawData[i].loadingEndDate),
                            "Confirm": _this.service.customDateTimeFormat(excelRawData[i].confirmedDate),
                            "Release": _this.service.customDateTimeFormat(excelRawData[i].releaseDate),
                            // "Send For BarCode Date": this.service.customDateTimeFormat(excelRawData[i].sendForBarcodeDate),
                            "Insert User": excelRawData[i].insertUser,
                            "Update User": excelRawData[i].updateUser,
                            "Status": excelRawData[i].status,
                            "Integration Status": excelRawData[i].integrationStatus,
                            "Loadslip Comments": excelRawData[i].comments,
                            "SAP invoice value(INR)": excelRawData[i].sapInvValue,
                            "SAP invoice weight(Kg)": excelRawData[i].sapInvWeight,
                            "Eway bill No": excelRawData[i].ewayBillNo,
                            "MKT Seg": excelRawData[i].marketSegment,
                            "FT Trip ID": excelRawData[i].ftTripId,
                            "Cust Inv Num": excelRawData[i].customInvoiceNumber
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_6__["writeFile"](workBook, 'ViewLoadslips.xlsx');
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
    //show the filter
    PrintLoadslipsComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    // Refresh data
    PrintLoadslipsComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.clearAll();
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.fromDate = this.currentDateAsString;
        this.toDate = this.fromDate;
        this.forDateValidation();
        var bodyData = {
            'fromCreatedDate': this.currentDate,
            'toCreatedDate': this.currentDate,
            'type': src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].intransit + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].completed + ',' + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].delivered + ',' + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].unloading,
            'status': this.statusList
        };
        this.getPrintedLoadslips(bodyData);
    };
    PrintLoadslipsComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    //server side pagination
    PrintLoadslipsComponent.prototype.datatablePageData = function (pageInfo) {
        var _this = this;
        this.forDateValidation();
        var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
        var bodyData = {
            'fromCreatedDate': this.fromCreatedDate,
            'toCreatedDate': this.toCreatedDate,
            'index': pageInfo.offset,
            'pageLength': pageInfo.pageSize,
            'destination': this.destination,
            'invoice': this.invoice,
            'itemId': this.materialCode,
            'loadslipId': this.loadSlipId,
            'stopType': this.type,
            'transhipment': this.transhipment,
            'truckType': this.truckType,
            'marketSegment': this.mktsegment,
            'shipmentId': this.shipmentId,
            'type': src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].intransit + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].completed + ',' + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].delivered + ',' + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].unloading,
            'status': this.statusList,
            "lsStatus": this.draftedLoadslipStatusType,
            "source": this.sourceCode,
            "truckNumber": this.truckNumber,
            "containerNum": this.container,
            "transporter": this.transporter,
            "destCountry": obj ? (obj.value) : '',
            'itemCategories': this.draftedLoadslipCategory,
        };
        this.getPrintedLoadslips(bodyData);
    };
    //cancel Loadslip 
    PrintLoadslipsComponent.prototype.cancelLoadslip = function (loadslipId) {
        var _this = this;
        this.isLoading = true;
        var data;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.cancelLoadslip + "/" + loadslipId, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                // let responseData = response['data'].loadslips;
                var modifybleIndex = _this.printedLoadslipsList.findIndex(function (resp) { return resp.loadslipId == loadslipId; });
                // this.printedLoadslipsList[modifybleIndex]=responseData;
                _this.printedLoadslipsList.splice(modifybleIndex, 1);
                _this.printedLoadslipsList = _this.printedLoadslipsList.slice();
                // this.page.count = response['data'].total;
                // this.page.limit = response['data'].pageLength;
                _this.isLoading = false;
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
    //set value destination
    PrintLoadslipsComponent.prototype.setDestination = function (value) {
        //  this.destinationDesc = value;
        this.destination = value;
    };
    //set value to destination description
    PrintLoadslipsComponent.prototype.setDestDescription = function (value) {
        this.destinationDesc = value;
    };
    PrintLoadslipsComponent.prototype.getMarketSegment = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getMarketSegment).subscribe(function (response) {
            if (response['statusCode'] == '200') {
                _this.mktsegmentList = response['data'];
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!');
            }
        });
    };
    PrintLoadslipsComponent.prototype.getUserDestinationList = function (event) {
        var _this = this;
        this.destination = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getDestinationDescriptionDataList + event.target.value).subscribe(function (response) {
                if (response['data']) {
                    _this.descriptionList = response['data'].searchResult;
                }
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    PrintLoadslipsComponent.prototype.viewLoadSlipData = function (loadSlipData) {
        var loadSlipId = loadSlipData.loadslipId;
        var type = loadSlipData.type;
        if (type == 'FGS_EXP') {
            this.router.navigateByUrl('/load-slip-view-for-export/' + loadSlipId);
        }
        else if (type == 'JIT_OEM') {
            this.router.navigateByUrl('/load-slip-view-for-jit/' + loadSlipId);
        }
        else {
            this.router.navigateByUrl('/load-slip-view/' + loadSlipId);
        }
    };
    // filter Transporter details
    PrintLoadslipsComponent.prototype.getfilterTransporter = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.transporterList = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?transporter=' + filtervalue).subscribe(function (response) {
                _this.transporterList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // Filter source location
    PrintLoadslipsComponent.prototype.getfilterSource = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.sourceList = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                console.log("respio", response);
                _this.sourceList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //get filter destination result
    PrintLoadslipsComponent.prototype.countryOfDestinationFilter = function (event, type) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?' + type + '=' + filtervalue).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    _this.countryList = [];
                    _this.countryList = response['data'].searchResult;
                    _this.isLoading = false;
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
        }
    };
    PrintLoadslipsComponent.prototype.goToLink = function (url) {
        window.open(url, "_blank");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"])
    ], PrintLoadslipsComponent.prototype, "table", void 0);
    PrintLoadslipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-print-loadslips',
            template: __webpack_require__(/*! ./print-loadslips.component.html */ "./src/app/fgs-operations/print-loadslips/print-loadslips.component.html"),
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_8__["AppDateAdapter"] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], useValue: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_8__["APP_DATE_FORMATS"] }
            ],
            styles: [__webpack_require__(/*! ./print-loadslips.component.scss */ "./src/app/fgs-operations/print-loadslips/print-loadslips.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__["HelperServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PrintLoadslipsComponent);
    return PrintLoadslipsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=fgs-operations-print-loadslips-print-loadslip-module.js.map