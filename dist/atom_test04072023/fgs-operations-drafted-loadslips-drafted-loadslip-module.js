(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fgs-operations-drafted-loadslips-drafted-loadslip-module"],{

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

/***/ "./src/app/fgs-operations/drafted-loadslips/drafted-loadslip.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/fgs-operations/drafted-loadslips/drafted-loadslip.module.ts ***!
  \*****************************************************************************/
/*! exports provided: draftedLoadslipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draftedLoadslipModule", function() { return draftedLoadslipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _drafted_loadslips_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drafted-loadslips.component */ "./src/app/fgs-operations/drafted-loadslips/drafted-loadslips.component.ts");
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _drafted_loadslips_component__WEBPACK_IMPORTED_MODULE_7__["DraftedLoadslipsComponent"] },
    { path: ':loadslipId', component: _drafted_loadslips_component__WEBPACK_IMPORTED_MODULE_7__["DraftedLoadslipsComponent"] },
];
var draftedLoadslipModule = /** @class */ (function () {
    function draftedLoadslipModule() {
    }
    draftedLoadslipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__["CustomDatePipeModule"]
            ],
            declarations: [
                _drafted_loadslips_component__WEBPACK_IMPORTED_MODULE_7__["DraftedLoadslipsComponent"]
            ],
            providers: [],
        })
    ], draftedLoadslipModule);
    return draftedLoadslipModule;
}());



/***/ }),

/***/ "./src/app/fgs-operations/drafted-loadslips/drafted-loadslips.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/fgs-operations/drafted-loadslips/drafted-loadslips.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    <b> Loadslip > Drafted Loadslips</b>\n\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n  <div class=\"manualplan-fields\">\n    <div class=\"col-md-12 row\" *ngIf=\"isShow\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row\">\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formPicker\" placeholder=\"From Date\" [(ngModel)]=\"fromDate\"\n                  name=\"fromDate\" (dateChange)=\"addEvent('fromDate', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1  pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toPicker\" [min]=\"fromDate\" placeholder=\"To Date\"\n                  [(ngModel)]=\"toDate\" name=\"toDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toPicker [disabled]=\"!fromDate\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1  pl-0\" *ngIf=\"isDPREPRole()\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event)\" autocomplete=\"off\"\n                [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"sourceCode\" name=\"source\"\n                oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1  pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n                  [(ngModel)]=\"destination\" name=\"destination\" (keyup)=\"getDestinationList($event)\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\"\n                    (click)=\"setDestDescription(list.description)\"\n                    (onSelectionChange)=\"setDestDescription(list.description)\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"pl-0\" [ngClass]=\"(isDPREPRole())?'col-md-1':'col-md-2'\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination Description\" aria-label=\"State\"\n                  [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destination\"\n                  (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                    (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                    <span>({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"pl-0 col-md-1\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Truck \" autocomplete=\"off\" [(ngModel)]=\"truckNumber\" name=\"truckNumber\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"pl-0 col-md-2\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Truck/Container Type\" [(ngModel)]=\"truckType\" name=\"trcktype\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Container\" autocomplete=\"off\" [(ngModel)]=\"container\" name=\"container\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Transporter\" placeholder=\"Transporter\"\n                  (keyup)=\"getfilterTransporter($event)\" autocomplete=\"off\" [matAutocomplete]=\"transporterAutocomplete\"\n                  [(ngModel)]=\"transporter\" name=\"transporter\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #transporterAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of transporterList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Material Code\" autocomplete=\"off\" aria-label=\"Material Code\"\n                  [matAutocomplete]=\"materialCodeAutocomplete\" [(ngModel)]=\"materialCode\" name=\"materialCode\"\n                  (keyup)=\"filterMaterialCode($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #materialCodeAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of materilcodelist\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Type\" autocomplete=\"off\" [(ngModel)]=\"type\" name=\"type\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n\n\n          <!-- <div class=\"col-md-7 pd-0\">\n            <div class=\"row\">\n              <div class=\"col-md-2 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n                      [(ngModel)]=\"destination\" name=\"destination\" autocomplete=\"off\" (keyup)=\"getDestinationList($event)\">\n                    <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\">\n                        <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-2\">\n                <div class=\"form-group\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Material Code\" autocomplete=\"off\" aria-label=\"Material Code\"\n                      [matAutocomplete]=\"materialCodeAutocomplete\" [(ngModel)]=\"materialCode\" name=\"materialCode\"\n                      (keyup)=\"filterMaterialCode($event)\">\n                    <mat-autocomplete #materialCodeAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of materilcodelist\" [value]=\"list.value\">\n                        <span>{{list.value}}</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n            </div>\n          </div> -->\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"filterDraftLoadSlip()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"col-md-12 tab-pr-40\">\n        <div class=\"row\">\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"MKT Segment\" [(ngModel)]=\"mktsegment\" name=\"mktsegment\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let mktsegment of mktsegmentList\" [value]=\"mktsegment\">\n                    {{mktsegment}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Load Slip Id\" autocomplete=\"off\" [(ngModel)]=\"loadSlipId\" name=\"loadslipID\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Shipment Id\" autocomplete=\"off\" [(ngModel)]=\"shipmentId\" name=\"shipmentId\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <mat-form-field>\n              <input matInput aria-label=\"Country of Destination\" placeholder=\"Country of Destination\"\n                (keyup)=\"countryOfDestinationFilter($event,'destCountrySearch')\" autocomplete=\"off\"\n                [matAutocomplete]=\"dischargeAutocomplete\" [(ngModel)]=\"destCountryName\" name=\"destCountryName\"\n                oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #dischargeAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let country of countryList\" [value]=\"country.description\">\n                  <span matTooltip={{country.description}}>{{country.value}} - ({{country.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Invoice\" autocomplete=\"off\" [(ngModel)]=\"invoice\" name=\"Invoice\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <mat-form-field>\n              <mat-select placeholder=\"Status\" [(ngModel)]=\"loadslipstatustype\" name=\"status\" multiple>\n                <!-- <mat-option [value]=\"\">None</mat-option> -->\n                <mat-option *ngFor=\"let item of loadslipstatus\" [value]=\"item.value\"> {{item.key}} </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"LS Category\" [(ngModel)]=\"draftedLoadslipCategory\" name=\"lsCategory\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let item of lsCategoryList\" [value]=\"item\"> {{item}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"clearfix\"></div>\n  <ngx-datatable #table class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table\n    [rows]='draftedLoadslipsList' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\"\n    [externalPaging]=\"true\" [scrollbarH]=\"true\" [limit]=\"page.limit\" (page)=\"datatablePageData($event)\"\n    [count]=\"page.count\" [offset]=\"page.offset\">\n    <ngx-datatable-column name=\"Load Slip Id\" [frozenLeft]=\"true\" [width]=\"170\" [resizeable]=\"false\" prop=\"loadslipId\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <!-- [routerLink]=\"['/fgs/create-load-slip',row.loadslipId]\" -->\n        <a (click)=\"viewDraftLoadSlipData(row)\">{{row.loadslipId}}</a>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Shipment ID\" [frozenLeft]=\"freezeLeftValue\" [width]=\"130\" [resizeable]=\"false\" prop=\"shipmentId\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.shipmentId}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Source\" [width]=\"70\" [frozenLeft]=\"true\" [resizeable]=\"false\" prop=\"sourceLoc\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sourceLoc}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Dest\" [width]=\"100\" [frozenLeft]=\"true\" [resizeable]=\"false\" prop=\"destLoc\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destLoc}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Truck\" [width]=\"120\" [frozenLeft]=\"freezeLeftValue\" [resizeable]=\"false\" prop=\"truckNumber\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckNumber}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Dest Description\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destDis\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destDis}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Type\" [width]=\"50\" [resizeable]=\"false\" prop=\"stopType\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.stopType || '--'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Order Type\" [width]=\"70\" [resizeable]=\"false\" prop=\"type\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.type || '--'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Created Date\" [width]=\"125\" [resizeable]=\"false\" prop=\"createdDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.createdDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Truck/Cont Type\" [width]=\"150\" [resizeable]=\"false\" prop=\"truckType\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckType}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Transporter\" [width]=\"150\" [resizeable]=\"false\" prop=\"servprov\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.servprov || '--'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"STO/SO\" [width]=\"150\" [resizeable]=\"false\" prop=\"stoSoNum\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.stoSoNum}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Delivery\" [width]=\"150\" [resizeable]=\"false\" prop=\"delivery\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.delivery}}\n      </ng-template>\n    </ngx-datatable-column>]\n    <ngx-datatable-column name=\"Invoice\" [width]=\"150\" [resizeable]=\"false\" prop=\"sapInvoice\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvoice}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Invoice Dt.\" [width]=\"125\" [resizeable]=\"false\" prop=\"sapInvoiceDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvoiceDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- <ngx-datatable-column name=\"Confirm Dt.\" [width]=\"125\" [resizeable]=\"false\" prop=\"gatedOutDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.gatedOutDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column> -->\n    <ngx-datatable-column name=\"Actual Arrival Dt.\" [width]=\"125\" [resizeable]=\"false\" prop=\"actualArrivalDate\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.actualArrivalDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"LR\" [width]=\"150\" [resizeable]=\"false\" prop=\"lrNum\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.lrNum}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"LR Date\" [width]=\"125\" [resizeable]=\"false\" prop=\"lrDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.lrDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Container\" [width]=\"125\" [resizeable]=\"false\" prop=\"containerNum\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.containerNum}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Country of Destination\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"destCountryName\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destCountryName}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"DIT_QTY\" [width]=\"150\" [resizeable]=\"false\" prop=\"ditQty\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.ditQty}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"SHORTAGE_QTY\" [width]=\"150\" [resizeable]=\"false\" prop=\"shortQty\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.shortQty}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Total Loaded\" [width]=\"70\" [resizeable]=\"false\" prop=\"qty\" [sortable]=\"true\"\n      [flexGrow]=\"1\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.qty}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Tyre\" [width]=\"70\" [resizeable]=\"false\" prop=\"totTyres\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totTyres}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Tube\" [width]=\"70\" [resizeable]=\"false\" prop=\"totTubes\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totTubes}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Flap\" [width]=\"70\" [resizeable]=\"false\" prop=\"totFlaps\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totFlaps}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Valve\" [width]=\"70\" [resizeable]=\"false\" prop=\"totValve\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totValve}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"PCTR\" [width]=\"70\" [resizeable]=\"false\" prop=\"totPctr\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totPctr || '0'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Other Qty\" [width]=\"70\" [resizeable]=\"false\" prop=\"otherQty\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.otherQty || '0'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Total Qty\" [width]=\"70\" [resizeable]=\"false\" prop=\"transhipment\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totQty}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"GRN\" [width]=\"70\" [resizeable]=\"false\" prop=\"grn\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.grn}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"GRN Date\" [width]=\"130\" [resizeable]=\"false\" prop=\"grnDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.grnDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Tranship\" [width]=\"70\" [resizeable]=\"false\" prop=\"transhipment\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.transhipment}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Freight Avail\" [width]=\"70\" [resizeable]=\"false\" prop=\"transhipment\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.freightAvailability}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Cat\" [width]=\"90\" [resizeable]=\"false\" prop=\"itemCategory\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.itemCategory}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"TTE Qty\" [width]=\"70\" [resizeable]=\"false\" prop=\"tteQty\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.tteQty | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"TTE Util\" [width]=\"70\" [resizeable]=\"false\" prop=\"tteUtil\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.tteUtil | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Wt Util\" [width]=\"70\" [resizeable]=\"false\" prop=\"weightUtil\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.weightUtil | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Vol Util\" [width]=\"70\" [resizeable]=\"false\" prop=\"volumeUtil\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.volumeUtil | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"DSeq\" [width]=\"50\" [resizeable]=\"false\" prop=\"dropSeq\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.dropSeq}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Arrived Bay\" [width]=\"125\" [resizeable]=\"false\" prop=\"bayArrivedDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.bayArrivedDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Print LS\" [width]=\"125\" [resizeable]=\"false\" prop=\"lsPrintDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.lsPrintDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Send For Barcode\" [width]=\"125\" [resizeable]=\"false\" prop=\"sendForBarcodeDate\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sendForBarcodeDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Loading Start\" [width]=\"125\" [resizeable]=\"false\" prop=\"loadingStartDate\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.loadingStartDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Loading End\" [width]=\"125\" [resizeable]=\"false\" prop=\"loadingEndDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.loadingEndDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Confirm\" [width]=\"125\" [resizeable]=\"false\" prop=\"confirmedDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.confirmedDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Release\" [width]=\"125\" [resizeable]=\"false\" prop=\"releaseDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.releaseDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Insert User\" [width]=\"100\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.insertUser}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Update User\" [width]=\"100\" [resizeable]=\"false\" prop=\"updateUser\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.updateUser}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Status\" [width]=\"80\" [resizeable]=\"false\" prop=\"status\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.status}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Integration Status\" [width]=\"80\" [resizeable]=\"false\" prop=\"integrationStatus\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.integrationStatus}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Integration Msg\" [width]=\"100\" [resizeable]=\"false\" prop=\"integrationMsg\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <!-- <button class=\"theme-small-button\" matTooltip=\"Integration Message\" (click)=\"showIntegrationMessage(row)\" *ngIf=\"(row.integrationMsg)\">\n          <i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>\n        </button> -->\n        <span class=\"edit-label\" [title]=\"row.integrationMsg\" (click)=\"showIntegrationMessage(row,'integrationMsg')\"\n          *ngIf=\"(row.integrationMsg)\">{{(row.integrationMsg?.length>9)? (row.integrationMsg |\n          slice:0:9)+'..':(row.integrationMsg)}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"LoadSlip Comments\" [width]=\"100\" [resizeable]=\"false\" prop=\"comments\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <!-- For DP_REP ROLE Comments only readble -->\n        <ng-container *ngIf=\"(Role_DP_REP == 'DP_REP');else otherRole\">\n          <span class=\"edit-label\" [attr.title]=\"row.comments\" (click)=\"showIntegrationMessage(row,'loadslipComments')\">{{\n            (row.comments?.length>9)? (row.comments | slice:0:9)+'..':(row.comments)}}</span>\n        </ng-container>\n        <!-- Else condition for other roles otherthan DP_REP role-->\n        <ng-template #otherRole>\n          <div class=\"edit-field\" [attr.title]=\"row.comments\">\n            <span class=\"edit-label\">{{(row.comments?.length>6)? (row.comments | slice:0:6)+'..':(row.comments)}}</span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"showComments(row.comments,row)\"></i>\n          </div>\n        </ng-template>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"SAP invoice weight (Kg)\" [width]=\"100\" [resizeable]=\"false\" prop=\"dropSeq\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvWeight}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"SAP invoice value (INR)\" [width]=\"100\" [resizeable]=\"false\" prop=\"dropSeq\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvValue}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Eway bill No\" [width]=\"100\" [resizeable]=\"false\" prop=\"ewayBillNo\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.ewayBillNo}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"MKT Seg\" [width]=\"100\" [resizeable]=\"false\" prop=\"marketSegment\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.marketSegment}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Cust Inv Num\" [width]=\"150\" [resizeable]=\"false\" prop=\"custInvNum\" [sortable]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.customInvoiceNumber}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"FT Trip ID\" [width]=\"1000\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"ftTripId\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <a (click)=\"goToLink(row.ftTripId)\">{{row.ftTripId}}</a>\n        </ng-template>\n      </ngx-datatable-column>\n    <!-- Action column can be visible for Other roles ,Otherthan DP_REP, L1_MGR, L2_MGR role -->\n    <ng-container *ngIf=\"(!isDPREPRole())\">\n      <ngx-datatable-column name=\"Action\" [width]=\"50\" [resizeable]=\"false\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <button class=\"theme-delete-button\" matTooltip=\"Cancel Loadslip\" (click)=\"confirmCancelAction(row.loadslipId)\"\n            *ngIf=\"(row.canLSCancelled)\">\n            <i class=\"fa fa-times fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n        </ng-template>\n      </ngx-datatable-column>\n    </ng-container>\n    <!-- Footer Template starts -->\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedCount\">\n            {{selectedCount.toLocaleString()}} Selected |\n          </span>\n          Showing {{(offset * pageSize)+1}} to {{(rowCount>\n          (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n          {{(rowCount)}} records.\n        </div>\n        <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n          [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n          [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n          (change)=\"table.onFooterPage($event)\">\n        </datatable-pager>\n      </ng-template>\n    </ngx-datatable-footer>\n    <!-- Footer Template Ends -->\n  </ngx-datatable>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"integrationMsgModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Message !!!</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p class=\"text-center text-danger\">{{integrationMsg}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"saveComments()\">Save</button> -->\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n\n<!--  -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form name=\"form\" #f=\"ngForm\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Loadslip Comments</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n              <input matInput placeholder=\"Comments\" aria-label=\"State\" [(ngModel)]=\"loadslipComments\" name=\"Comments\"\n                #comments=\"ngModel\" autocomplete=\"off\">\n              <!-- <mat-error *ngIf=\"(f.submitted && comments.invalid)\">\n                <p *ngIf=\"comments.errors.required\">Comment is\n                  <strong>required</strong>\n                </p>\n              </mat-error> -->\n            </mat-form-field>\n          </div>\n        </div>\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <!-- <button type=\"button\" class=\"btn btn-danger\" >Close</button> -->\n          <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"save(f)\">Save</button>\n          <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\"\n            data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- Confirm Delete modal -->\n<div class=\"modal\" id=\"confirmDelete\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form name=\"form\" #f=\"ngForm\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title text-danger\">Are you sure you want to cancel loadslip</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelLoadslip(selectedLoadslipId)\" matTooltip = \"Cancel Loadslip\">YES</button>\n          <button type=\"button\" class=\"btn btn-info\" color=\"default\" data-dismiss=\"modal\">NO</button>\n          \n        </div>\n        <!-- <p class=\"text-danger\" style=\"font-size: 12px;margin-left: 15px;\"><b><u>NOTE:</u></b>&nbsp;Once Loadslip is cancelled, you cannot revert back\n        </p> -->\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/fgs-operations/drafted-loadslips/drafted-loadslips.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/fgs-operations/drafted-loadslips/drafted-loadslips.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zncy1vcGVyYXRpb25zL2RyYWZ0ZWQtbG9hZHNsaXBzL2RyYWZ0ZWQtbG9hZHNsaXBzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/fgs-operations/drafted-loadslips/drafted-loadslips.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/fgs-operations/drafted-loadslips/drafted-loadslips.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DraftedLoadslipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftedLoadslipsComponent", function() { return DraftedLoadslipsComponent; });
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











var DraftedLoadslipsComponent = /** @class */ (function () {
    function DraftedLoadslipsComponent(service, toastr, router, activatedRoute, helperService) {
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.helperService = helperService;
        this.isLoading = false;
        this.draftedLoadslipsList = [];
        this.page = {
            limit: 10,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.isShow = true;
        this.descriptionList = [];
        this.truckType = [];
        this.mktsegment = [];
        this.currentDate = '';
        this.currentDateAsString = '';
        this.statusList = ["CREATED", "PRINTED", "LOADING", "LOADED", "SENT_SAP"];
        this.mktsegmentList = [];
        this.truckList = [];
        this.fromCreatedDate = '';
        this.toCreatedDate = '';
        this.toDate = '';
        this.fromDate = '';
        this.loadslipstatus = [];
        this.loadslipstatustype = [];
        this.lsCategoryList = [];
        this.draftedLoadslipCategory = [];
        this.trackingConsentStatus = '';
        this.consentPhoneTelecom = '';
        this.rowData = {};
        this.freezeLeftValue = true;
    }
    DraftedLoadslipsComponent.prototype.ngDoCheck = function () {
        var width = $(window).width();
        if (width < 1024) {
            this.freezeLeftValue = false;
        }
        else {
            this.freezeLeftValue = true;
        }
    };
    DraftedLoadslipsComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "load-slip");
        this.loadSlipId = this.activatedRoute.snapshot.params['loadslipId'];
        this.roles = src_app_constants__WEBPACK_IMPORTED_MODULE_5__["constants"].roles;
        this.loadslipstatus = src_app_constants__WEBPACK_IMPORTED_MODULE_5__["constants"].draftedLoadlslipstatus;
        this.check_Role_DP_REP = this.service.checkRole();
        //get the load slip based on search 
        if (this.loadSlipId) {
            this.loadSlipId = this.loadSlipId;
        }
        this.forDateValidation();
        var bodyData = {
            // 'fromCreatedDate': this.currentDate,
            // 'toCreatedDate': this.currentDate,
            'loadslipId': this.loadSlipId,
            'type': src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].created + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].printed + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].loading + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].loaded + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].sentSAP,
            'status': this.statusList
        };
        this.fromDate = this.currentDateAsString;
        this.toDate = this.fromDate;
        this.getDraftLoadSlipData(bodyData);
        // for getting truck type master
        this.getTruckTypeMasterData();
        this.getMarketSegment();
        this.getLSCategoryList();
        // this.Role_DP_REP = this.service.checkRole();
    };
    // Checking if the logged in role is DP_REP or L1_MGR or L2_MGR
    DraftedLoadslipsComponent.prototype.isDPREPRole = function () {
        if (this.service.checkRole() == this.roles.planner3 || this.service.checkRole() == this.roles.L1MGR || this.service.checkRole() == this.roles.L2MGR) {
            return true;
        }
        else {
            return false;
        }
    };
    // for getting truck type master
    DraftedLoadslipsComponent.prototype.getTruckTypeMasterData = function () {
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
    //show the filter
    DraftedLoadslipsComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    // get destaination list on search
    DraftedLoadslipsComponent.prototype.getDestinationList = function (event) {
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
    DraftedLoadslipsComponent.prototype.getLSCategoryList = function () {
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
    //filter material code 
    DraftedLoadslipsComponent.prototype.filterMaterialCode = function (event) {
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
    // Refresh data
    DraftedLoadslipsComponent.prototype.refreshData = function () {
        this.clearAll();
        // this.fromDate = this.currentDateAsString;
        // this.toDate = this.fromDate;
        this.table.offset = 0;
        var bodyData = {
            // 'fromCreatedDate': this.currentDate,
            // 'toCreatedDate': this.currentDate,
            'type': src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].created + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].printed + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].loading + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].loaded + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].sentSAP,
            'status': this.statusList,
        };
        this.getDraftLoadSlipData(bodyData);
    };
    // Date Validation
    DraftedLoadslipsComponent.prototype.forDateValidation = function () {
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
    DraftedLoadslipsComponent.prototype.addEvent = function (type, event) {
        if (event.target.value) {
            /* Checking if selected from date greater than to date.
           Clearing the toDate field when from date greater than to date */
            if (this.toDate && (this.fromDate > this.toDate)) {
                this.toDate = '';
            }
            // this.toDate = '';
        }
    };
    DraftedLoadslipsComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    //clear data 
    DraftedLoadslipsComponent.prototype.clearAll = function () {
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
        this.fromDate = '';
        this.toDate = '';
        this.loadslipstatustype = [];
        this.truckNumber = '';
        this.container = '';
        this.sourceCode = '';
        this.transporter = '';
        this.destCountryName = '';
        this.countryList = [];
        this.draftedLoadslipCategory = [];
    };
    //get filter destination result
    DraftedLoadslipsComponent.prototype.countryOfDestinationFilter = function (event, type) {
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
    // drafted load slips filter creatria
    DraftedLoadslipsComponent.prototype.getDraftLoadSlipData = function (bodyData) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getDraftedLoadslips, bodyData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var responseData = response['data'].loadslips;
                _this.draftedLoadslipsList = responseData;
                _this.draftedLoadslipsList = _this.draftedLoadslipsList.slice();
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
    // for filter load slip data
    DraftedLoadslipsComponent.prototype.filterDraftLoadSlip = function () {
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
            'type': src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].created + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].printed + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].loading + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].loaded + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].sentSAP,
            'status': this.statusList,
            "lsStatus": this.loadslipstatustype,
            "truckNumber": this.truckNumber,
            "containerNum": this.container,
            "source": this.sourceCode,
            "transporter": this.transporter,
            "destCountry": obj ? (obj.value) : '',
            'itemCategories': this.draftedLoadslipCategory,
            "trackingConsentStatus": this.trackingConsentStatus,
            "consentPhoneTelecom": this.consentPhoneTelecom,
        };
        if (this.fromDate != '' && this.fromDate != null) {
            if (this.toDate != '' && this.toDate != null) {
                this.getDraftLoadSlipData(bodyData);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.getDraftLoadSlipData(bodyData);
        }
    };
    // export to excel file
    DraftedLoadslipsComponent.prototype.export = function () {
        var _this = this;
        if (this.draftedLoadslipsList.length > 0) {
            this.isLoading = true;
            this.forDateValidation();
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
                'shipmentId': this.shipmentId,
                'truckType': this.truckType,
                'type': src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].created + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].printed + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].loading + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].loaded + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].sentSAP,
                'status': this.statusList,
                'pageLength': this.page.count,
                "lsStatus": this.loadslipstatustype,
                "truckNumber": this.truckNumber,
                "containerNum": this.container,
                "source": this.sourceCode,
                "transporter": this.transporter,
                "destCountry": obj ? (obj.value) : '',
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
                            "PCTR": (excelRawData[i].totPctr) ? (+excelRawData[i].totPctr) : 0,
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
                            "Insert User": excelRawData[i].insertUser,
                            "Update User": excelRawData[i].updateUser,
                            "Status": excelRawData[i].status,
                            // "Integration Status": excelRawData[i].integrationStatus,
                            // "Integration Message": "",
                            "Loadslip Comments": excelRawData[i].comments,
                            "SAP invoice weight(Kg)": excelRawData[i].sapInvWeight,
                            "SAP invoice value(INR)": excelRawData[i].sapInvValue,
                            "Eway bill No": excelRawData[i].ewayBillNo,
                            "MKT Seg": excelRawData[i].marketSegment,
                            "Cust Inv Num": excelRawData[i].customInvoiceNumber,
                            "Tracking Consent Status": excelRawData[i].trackingConsentStatus,
                            "Consent Phone Tracking": excelRawData[i].consentPhoneTelecom
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_6__["writeFile"](workBook, 'DraftedLoadslips.xlsx');
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
    //set value destination
    DraftedLoadslipsComponent.prototype.setDestination = function (value) {
        //  this.destinationDesc = value;
        this.destination = value;
    };
    //set value to destination description
    DraftedLoadslipsComponent.prototype.setDestDescription = function (value) {
        this.destinationDesc = value;
    };
    DraftedLoadslipsComponent.prototype.getUserDestinationList = function (event) {
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
    DraftedLoadslipsComponent.prototype.getMarketSegment = function () {
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
    //server side pagination
    DraftedLoadslipsComponent.prototype.datatablePageData = function (pageInfo) {
        var _this = this;
        this.forDateValidation();
        var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
        var bodyData = {
            'fromCreatedDate': this.fromCreatedDate,
            'toCreatedDate': this.toCreatedDate,
            'index': pageInfo.offset,
            'pageLength': pageInfo.pageSize,
            'marketSegment': this.mktsegment,
            'destination': this.destination,
            'invoice': this.invoice,
            'itemId': this.materialCode,
            'loadslipId': this.loadSlipId,
            'stopType': this.type,
            'transhipment': this.transhipment,
            'shipmentId': this.shipmentId,
            'truckType': this.truckType,
            'type': src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].created + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].printed + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].loading + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].loaded + "," + src_app_constants__WEBPACK_IMPORTED_MODULE_5__["loadslipStatus"].sentSAP,
            'status': this.statusList,
            "lsStatus": this.loadslipstatustype,
            "truckNumber": this.truckNumber,
            "containerNum": this.container,
            "source": this.sourceCode,
            "transporter": this.transporter,
            "destCountry": obj ? (obj.value) : '',
            'itemCategories': this.draftedLoadslipCategory,
        };
        this.getDraftLoadSlipData(bodyData);
    };
    //cancel Loadslip 
    DraftedLoadslipsComponent.prototype.cancelLoadslip = function (loadslipId) {
        var _this = this;
        this.isLoading = true;
        var data;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.cancelLoadslip + "/" + loadslipId, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                // let responseData = response['data'].loadslips;
                var modifybleIndex = _this.draftedLoadslipsList.findIndex(function (resp) { return resp.loadslipId == loadslipId; });
                _this.draftedLoadslipsList.splice(modifybleIndex, 1);
                // this.draftedLoadslipsList[modifybleIndex]=responseData;
                _this.draftedLoadslipsList = _this.draftedLoadslipsList.slice();
                // this.page.count = response['data'].total;
                // this.page.limit = response['data'].pageLength;
                _this.toastr.success(response['message']);
                $('#confirmDelete').modal('hide');
                _this.isLoading = false;
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
                $('#confirmDelete').modal('hide');
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
            $('#confirmDelete').modal('hide');
        });
    };
    DraftedLoadslipsComponent.prototype.viewDraftLoadSlipData = function (loadSlipData) {
        var loadSlipId = loadSlipData.loadslipId;
        var type = loadSlipData.type;
        // For DP_REP View loadslip data can't be edit only view , that why we are navigating 
        // view only pages 
        // Else condition we are navigating to 
        if (this.check_Role_DP_REP == 'DP_REP' || this.check_Role_DP_REP == 'L1_MGR' ||
            this.check_Role_DP_REP == 'L2_MGR') {
            if (loadSlipId != null) {
                if (type == 'FGS_EXP') {
                    this.router.navigateByUrl('/load-slip-view-for-export/' + loadSlipId);
                }
                else if (type == 'JIT_OEM') {
                    this.router.navigateByUrl('/load-slip-view-for-jit/' + loadSlipId);
                }
                else {
                    this.router.navigateByUrl('/load-slip-view/' + loadSlipId);
                }
            }
        }
        else {
            if (loadSlipId != null) {
                if (type == 'FGS_EXP') {
                    this.router.navigateByUrl('/fgs/create-load-slip-for-export/' + loadSlipId);
                }
                else if (type == 'JIT_OEM') {
                    this.router.navigateByUrl('/jit/create-load-slip-for-jit/' + loadSlipId);
                }
                else {
                    this.router.navigateByUrl('/fgs/create-load-slip/' + loadSlipId);
                }
            }
        }
    };
    // filter Transporter details
    DraftedLoadslipsComponent.prototype.getfilterTransporter = function (event) {
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
    // check the cancel loadslip or not
    // IsCancelLoadslip(row) {
    //   //for FGS ROLE
    //   if ((this.service.checkRole() == this.roles.fgsOperations1) || (this.service.checkRole() == this.roles.fgsOperations2) || (this.service.checkRole() == this.roles.fgsOperations3) ||
    //     (this.service.checkRole() == this.roles.fgsOperations4)) {
    //     if (!row.sapInvoiceAvailable && (row.type != 'FGS_EXP')) {
    //       return true;
    //     } else if (row.type == 'FGS_EXP') {
    //       return true;
    //     } else {
    //       return false
    //     }
    //     //for RDC 
    //   } else if (this.service.checkRole() == this.roles.rdc_PLN) {
    //     if (!row.sapInvoiceAvailable && (row.type != 'RDC_EXP')) {
    //       return true;
    //     } else if (row.type == 'RDC_EXP') {
    //       return true;
    //     } else {
    //       return false
    //     }
    //     // For JIT
    //   } else if (this.service.checkRole() == this.roles.JIT_OPERATION) {
    //     if (!row.sapInvoiceAvailable && (row.type != 'JIT_OEM')) {
    //       return true;
    //     } else if (row.type == 'JIT_OEM') {
    //       return true;
    //     } else {
    //       return false
    //     }
    //   }
    // }
    DraftedLoadslipsComponent.prototype.showIntegrationMessage = function (data, type) {
        if (type == 'loadslipComments') {
            this.integrationMsg = data.comments;
        }
        else {
            this.integrationMsg = data.integrationMsg;
        }
        $('#integrationMsgModal').modal('show');
    };
    DraftedLoadslipsComponent.prototype.showComments = function (comment, row) {
        this.loadslipComments = comment;
        this.rowData = row;
        $("#myModal").modal('show');
    };
    DraftedLoadslipsComponent.prototype.save = function (form) {
        var _this = this;
        if (form.valid) {
            this.isLoading = true;
            // let data = {
            //   "comments": this.loadslipComments,
            //   "loadSlipId": this.rowloadslipId
            // }
            // Sending the entire row to the backend
            var data = this.rowData;
            data.comments = this.loadslipComments;
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.saveloadslipComments, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    _this.isLoading = false;
                    var index = _this.draftedLoadslipsList.findIndex(function (item) { return item.loadslipId == response['data'].loadslipId; });
                    _this.draftedLoadslipsList[index] = response['data'];
                    _this.draftedLoadslipsList = _this.draftedLoadslipsList.slice();
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
        }
    };
    // Filter source location
    DraftedLoadslipsComponent.prototype.getfilterSource = function (event) {
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
    DraftedLoadslipsComponent.prototype.confirmCancelAction = function (loadslipId) {
        this.selectedLoadslipId = loadslipId;
        $('#confirmDelete').modal('show');
    };
    DraftedLoadslipsComponent.prototype.goToLink = function (url) {
        window.open(url, "_blank");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"])
    ], DraftedLoadslipsComponent.prototype, "table", void 0);
    DraftedLoadslipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drafted-loadslips',
            template: __webpack_require__(/*! ./drafted-loadslips.component.html */ "./src/app/fgs-operations/drafted-loadslips/drafted-loadslips.component.html"),
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_8__["AppDateAdapter"] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], useValue: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_8__["APP_DATE_FORMATS"] }
            ],
            styles: [__webpack_require__(/*! ./drafted-loadslips.component.scss */ "./src/app/fgs-operations/drafted-loadslips/drafted-loadslips.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__["HelperServiceService"]])
    ], DraftedLoadslipsComponent);
    return DraftedLoadslipsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=fgs-operations-drafted-loadslips-drafted-loadslip-module.js.map