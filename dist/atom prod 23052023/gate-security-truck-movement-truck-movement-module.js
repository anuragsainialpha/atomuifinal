(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gate-security-truck-movement-truck-movement-module"],{

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

/***/ "./src/app/gate-security/truck-movement/truck-movement.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/gate-security/truck-movement/truck-movement.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    <b> Truck status > Truck Movement</b>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n  <div class=\"manualplan-fields\">\n      <form (submit)=\"filterTruckMovement()\">\n    <div class=\"col-md-12 row\" *ngIf=\"isShow\">\n        \n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row\">\n          <div class=\"col-md-1 pl-0\" *ngIf=\"service.isDPREPRole()\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event)\" autocomplete=\"off\"\n                [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"sourceCode\" name=\"source\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n                  [(ngModel)]=\"destination\" name=\"destination\" (keyup)=\"getDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\"\n                    (click)=\"setDestDescription(list.description)\"\n                    (onSelectionChange)=\"setDestDescription(list.description)\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"pl-0\" [ngClass]=\"(service.isDPREPRole())?'col-md-1':'col-md-2'\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination Description\" aria-label=\"destinationDesc\"\n                  [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destinationDesc\"\n                  (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                    (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                    <span>({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"pl-0 col-md-1\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Truck\" autocomplete=\"off\" [(ngModel)]=\"truckNumber\" name=\"truckNumber\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Truck/Container Type\" [(ngModel)]=\"truckType\" name=\"trcktype\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Transporter\" placeholder=\"Transporter\"\n                  (keyup)=\"getfilterTransporter($event)\" autocomplete=\"off\" [matAutocomplete]=\"transporterAutocomplete\"\n                  [(ngModel)]=\"transporter\" name=\"transporter\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #transporterAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of transporterList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1  pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Container\" autocomplete=\"off\" [(ngModel)]=\"container\" name=\"container\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1  pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Material Code\" autocomplete=\"off\" aria-label=\"Material Code\"\n                  [matAutocomplete]=\"materialCodeAutocomplete\" [(ngModel)]=\"materialCode\" name=\"materialCode\"\n                  (keyup)=\"filterMaterialCode($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #materialCodeAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of materilcodelist\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1  pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"MKT Segment\" [(ngModel)]=\"mktsegment\" name=\"mktsegment\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let mktsegment of mktsegmentList\" [value]=\"mktsegment\">\n                    {{mktsegment}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Type\" autocomplete=\"off\" [(ngModel)]=\"stopType\" name=\"type\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <mat-form-field>\n              <mat-select placeholder=\"Status\" [(ngModel)]=\"loadslipstatustype\" name=\"status\" multiple>\n                <!-- <mat-option [value]=\"\">None</mat-option> -->\n                <mat-option *ngFor=\"let item of statusList\" [value]=\"item\"> {{item}} </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <mat-form-field>\n              <mat-select placeholder=\"Bay Status\" [(ngModel)]=\"bayStatus\" name=\"bayStatus\" multiple>\n                <!-- <mat-option [value]=\"\">None</mat-option> -->\n                <mat-option *ngFor=\"let item of baystatusList\" [value]=\"item\"> {{item}} </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n      <div class=\"pull-right\">\n          <div class=\"search-fileds\">\n            <button class=\"theme-small-button\" type=\"submit\"  matTooltip=\"Search\">\n              <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n            </button>\n            <button class=\"theme-delete-button\" type=\"button\" (click)=\"clearAll()\" matTooltip=\"Clear\">\n              <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n        </div>\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row\">\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Load Slip Id\" autocomplete=\"off\" [(ngModel)]=\"loadSlipId\"\n                  name=\"loadslipID\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Shipment Id\" autocomplete=\"off\" [(ngModel)]=\"shipmentId\" name=\"shipmentId\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Indent Id\" autocomplete=\"off\" [(ngModel)]=\"indentID\" name=\"indentID\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <mat-form-field>\n              <input matInput aria-label=\"Country of Destination\" placeholder=\"Country of Destination\"\n                (keyup)=\"countryOfDestinationFilter($event,'destCountrySearch')\" autocomplete=\"off\"\n                [matAutocomplete]=\"dischargeAutocomplete\" [(ngModel)]=\"destCountryName\" name=\"destCountryName\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #dischargeAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let country of countryList\" [value]=\"country.description\">\n                  <span matTooltip={{country.description}}>{{country.value}} - ({{country.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Invoice\" autocomplete=\"off\" [(ngModel)]=\"invoice\" name=\"Invoice\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput [min]=\"minDate\" placeholder=\"Rep From Date\" disabled\n                  [matDatepicker]=\"reportFromDatePicker\" autocomplete=\"off\" [(ngModel)]=\"reportFromDate\"\n                  (dateChange)=\"addEvent('repFromDate', $event)\" name=\"reportfromDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"reportFromDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #reportFromDatePicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput [min]=\"reportFromDate\" placeholder=\"Rep To Date\" disabled\n                  [matDatepicker]=\"reportToDatePicker\" autocomplete=\"off\" [(ngModel)]=\"reportToDate\"\n                  name=\"reportToDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"reportToDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #reportToDatePicker [disabled]=\"!reportFromDate\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput [min]=\"minDate\" placeholder=\"Gate In From Date\" disabled\n                  [matDatepicker]=\"gateInFromDatePicker\" autocomplete=\"off\" [(ngModel)]=\"gateInFromDate\"\n                  (dateChange)=\"addEvent('gateInDate', $event)\" name=\"gateInToDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"gateInFromDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #gateInFromDatePicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <mat-form-field>\n              <input matInput [min]=\"gateInFromDate\" placeholder=\"Gate In To Date\" disabled\n                [matDatepicker]=\"gateInToDatePicker\" autocomplete=\"off\" [(ngModel)]=\"gateInToDate\" name=\"gateInToDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"gateInToDatePicker\"></mat-datepicker-toggle>\n              <mat-datepicker #gateInToDatePicker [disabled]=\"!gateInFromDate\"></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput [min]=\"minDate\" placeholder=\"Gate Out From Date\" disabled\n                  [matDatepicker]=\"gateOutFromDatePicker\" autocomplete=\"off\" [(ngModel)]=\"gateOutFromDate\"\n                  (dateChange)=\"addEvent('gateOutDate', $event)\" name=\"gateoutFromDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"gateOutFromDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #gateOutFromDatePicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1\">\n            <mat-form-field>\n              <input matInput [min]=\"gateOutFromDate\" placeholder=\"Gate Out To Date\" disabled\n                [matDatepicker]=\"gateOutToDatePicker\" autocomplete=\"off\" [(ngModel)]=\"gateOutToDate\"\n                name=\"gateoutToDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"gateOutToDatePicker\"></mat-datepicker-toggle>\n              <mat-datepicker #gateOutToDatePicker [disabled]=\"!gateOutFromDate\"></mat-datepicker>\n            </mat-form-field>\n          </div>\n         \n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-1 pl-0\">\n            <mat-form-field>\n              <mat-select placeholder=\"Rejection\" [(ngModel)]=\"rejection\" name=\"rejection\" multiple>\n                <!-- <mat-option [value]=\"\">None</mat-option> -->\n                <mat-option *ngFor=\"let item of rejectionList\" [value]=\"item\"> {{item}} </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Ind Cat\" [(ngModel)]=\"materialGrp\" name=\"materialGrp\" multiple>\n                  <mat-option *ngFor=\"let category of categoryList\" [value]=\"category\">{{category}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"pr-0 col-md-1\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Insert User\" autocomplete=\"off\" [(ngModel)]=\"insertUser\" name=\"insertUser\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n     \n    </div>\n  </form>\n  </div>\n  <div class=\"clearfix\"></div>\n  <ngx-datatable #table class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table\n    [rows]='truckMovementData' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\"\n    [externalPaging]=\"true\" [scrollbarH]=\"true\" [limit]=\"page.limit\" (page)=\"datatablePageData($event)\"\n    [count]=\"page.count\" [offset]=\"page.offset\">\n    <ngx-datatable-column name=\"Source\" [width]=\"70\" [frozenLeft]=\"true\" [resizeable]=\"false\" prop=\"sourceLoc\"\n      [sortable]=\"true\" [frozenLeft]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sourceLoc}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Report Location\" [width]=\"70\" [frozenLeft]=\"true\" [resizeable]=\"false\"\n      prop=\"reportingLoc\" [sortable]=\"true\" [frozenLeft]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.reportingLoc}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Indent Id\" [width]=\"120\" [resizeable]=\"false\" prop=\"indentId\"\n      [sortable]=\"true\" [frozenLeft]=\"freezeLeftValue\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.indentId}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Transporter Code\" [width]=\"70\" [frozenLeft]=\"true\" [resizeable]=\"false\"\n      prop=\"transporterSapCode\" [sortable]=\"true\" [frozenLeft]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.transporterSapCode}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Transporter\" [width]=\"70\" [frozenLeft]=\"true\" [resizeable]=\"false\" prop=\"servprov\"\n      [sortable]=\"true\" [frozenLeft]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.servprov}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Truck Number\" [width]=\"120\" [frozenLeft]=\"true\" [resizeable]=\"false\" prop=\"truckNumber\"\n      [sortable]=\"true\" [frozenLeft]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckNumber}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Container\" [width]=\"125\" [resizeable]=\"false\" prop=\"containerNum\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.containerNum}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Load Slip Id\" [width]=\"170\" [resizeable]=\"false\" prop=\"loadslipId\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.loadslipId}}\n        <!-- <a (click)=\"viewDraftLoadSlipData(row)\">{{row.loadslipId}}</a> -->\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Shipment ID\" [width]=\"130\" [resizeable]=\"false\" prop=\"shipmentId\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.shipmentId}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Dest\" [width]=\"100\" [resizeable]=\"false\" prop=\"destLoc\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destLoc}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Dest Description\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destDis\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destDis}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Truck/Cont Type\" [width]=\"150\" [resizeable]=\"false\" prop=\"truckType\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckType}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Actual TruckType\" [width]=\"150\" [resizeable]=\"false\" prop=\"truckType\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.actualTruckType}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Order Type\" [width]=\"70\" [resizeable]=\"false\" prop=\"type\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.type || '--'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"MKT Seg\" [width]=\"90\" [resizeable]=\"false\" prop=\"marketSegment\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.marketSegment}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"LS Cat\" [width]=\"90\" [resizeable]=\"false\" prop=\"itemCategory\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.itemCategory}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Freight Avail\" [width]=\"70\" [resizeable]=\"false\" prop=\"transhipment\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.isFreightAvailable}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Transhipment\" [width]=\"70\" [resizeable]=\"false\" prop=\"transhipment\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.transhipment}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Driver Name\" [width]=\"125\" [resizeable]=\"false\" prop=\"driverName\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.driverName}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Driver Mobile\" [width]=\"125\" [resizeable]=\"false\" prop=\"driverMobile\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.driverMobile}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Driver License\" [width]=\"125\" [resizeable]=\"false\" prop=\"driverLicense\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.driverLicense}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Indent Creation Date\" [width]=\"125\" [resizeable]=\"false\" prop=\"indentCreationDate\"\n    [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.indentCreationDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n    </ng-template>\n  </ngx-datatable-column>\n    <ngx-datatable-column name=\"ReportDate\" [width]=\"125\" [resizeable]=\"false\" prop=\"reportDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.reportDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"GateInDate\" [width]=\"125\" [resizeable]=\"false\" prop=\"gateInDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.gateInDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Arrived Bay\" [width]=\"125\" [resizeable]=\"false\" prop=\"bayArrivedDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.bayArrivedDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Print LS\" [width]=\"125\" [resizeable]=\"false\" prop=\"lsPrintDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.lsPrintDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Send For Barcode\" [width]=\"125\" [resizeable]=\"false\" prop=\"sendForBarcodeDate\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sendForBarcodeDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Loading Start\" [width]=\"125\" [resizeable]=\"false\" prop=\"loadingStartDate\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.loadingStartDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Loading End\" [width]=\"125\" [resizeable]=\"false\" prop=\"loadingEndDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.loadingEndDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Confirm\" [width]=\"125\" [resizeable]=\"false\" prop=\"confirmedDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.confirmedDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Release\" [width]=\"125\" [resizeable]=\"false\" prop=\"releaseDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.releaseDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"GateOutDate\" [width]=\"125\" [resizeable]=\"false\" prop=\"gateOutDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.gateOutDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Bay Status\" [width]=\"125\" [resizeable]=\"false\" prop=\"bayStatus\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.bayStatus}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Loadslip Status\" [width]=\"125\" [resizeable]=\"false\" prop=\"loadslipStatus\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.loadslipStatus}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Truck Status\" [width]=\"125\" [resizeable]=\"false\" prop=\"status\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.status}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"TAT (Rep-Gate Out)(Hrs)\" [width]=\"100\" [resizeable]=\"false\" prop=\"repGoHrs\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.repGoHrs}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"TAT2(Gate In-Gate Out)(Hrs)\" [width]=\"100\" [resizeable]=\"false\" prop=\"giGoHrs\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.giGoHrs}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"TAT3(Gate In-Release)(Hrs)\" [width]=\"100\" [resizeable]=\"false\" prop=\"giRelHrs\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.giRelHrs}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"TAT4(Loading-Release)(Hrs)\" [width]=\"100\" [resizeable]=\"false\" prop=\"loRelHrs\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.loRelHrs}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"TAT-5(Release-Gate Out)(Hrs)\" [width]=\"100\" [resizeable]=\"false\" prop=\"relGoHrs\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.relGoHrs}}\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- <ngx-datatable-column name=\"TAT (FGS Call-Release)(Hrs)\" [width]=\"100\" [resizeable]=\"false\" prop=\"callRelHrs\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.callRelHrs}}\n      </ng-template>\n    </ngx-datatable-column> -->\n    <ngx-datatable-column name=\"TAT6 (Rep-Gate In)(Hrs)\" [width]=\"100\" [resizeable]=\"false\" prop=\"repGiHrs\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.repGiHrs}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"STO/SO\" [width]=\"150\" [resizeable]=\"false\" prop=\"stoSoNum\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.stoSoNum}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Delivery\" [width]=\"150\" [resizeable]=\"false\" prop=\"delivery\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.delivery}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Invoice\" [width]=\"150\" [resizeable]=\"false\" prop=\"sapInvoice\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvoice}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Invoice Dt.\" [width]=\"125\" [resizeable]=\"false\" prop=\"sapInvoiceDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvoiceDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"LR\" [width]=\"150\" [resizeable]=\"false\" prop=\"lrNum\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.lrNum}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"LR Date\" [width]=\"125\" [resizeable]=\"false\" prop=\"lrDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.lrDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Indent Cat\" [width]=\"125\" [resizeable]=\"false\" prop=\"lrDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.indentCategory}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Tyre\" [width]=\"70\" [resizeable]=\"false\" prop=\"totTyres\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totTyres}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Tube\" [width]=\"70\" [resizeable]=\"false\" prop=\"totTubes\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totTubes}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Flap\" [width]=\"70\" [resizeable]=\"false\" prop=\"totFlaps\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totFlaps}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Valve\" [width]=\"70\" [resizeable]=\"false\" prop=\"totValve\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totValve}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"PCTR\" [width]=\"70\" [resizeable]=\"false\" prop=\"pctr\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totPctr}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Other Qty\" [width]=\"70\" [resizeable]=\"false\" prop=\"otherQty\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.otherQty}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Total Qty\" [width]=\"70\" [resizeable]=\"false\" prop=\"totQty\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totQty}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"TTE Qty\" [width]=\"70\" [resizeable]=\"false\" prop=\"tteQty\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.tteQty | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"TTE Util\" [width]=\"70\" [resizeable]=\"false\" prop=\"tteUtil\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.tteUtil | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Wt Util\" [width]=\"70\" [resizeable]=\"false\" prop=\"weightUtil\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.weightUtil | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Vol Util\" [width]=\"70\" [resizeable]=\"false\" prop=\"volumeUtil\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.volumeUtil | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"In Weight(Kg)\" [width]=\"125\" [resizeable]=\"false\" prop=\"inWeight\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.inWeight}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Out Weight(Kg)\" [width]=\"125\" [resizeable]=\"false\" prop=\"outWeight\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.outWeight}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Net Weight(Kg)\" [width]=\"125\" [resizeable]=\"false\" prop=\"netWeight\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.netWeight}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"SAP invoice weight(Kg)\" [width]=\"100\" [resizeable]=\"false\" prop=\"dropSeq\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvWeight}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Weight Diff (Kg)\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"diffInvWeight\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <span [ngClass]=\"(row.weightDiffStatus)?'text-danger':''\">{{row.diffInvWeight}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"SAP invoice value(INR)\" [width]=\"100\" [resizeable]=\"false\" prop=\"dropSeq\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvValue}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Eway bill No\" [width]=\"100\" [resizeable]=\"false\" prop=\"ewayBillNo\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.ewayBillNo}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Reporting Date At Dest\" [width]=\"100\" [resizeable]=\"false\" prop=\"reportingDateAtDest\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.reportingDateAtDest | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Unloading Date At Dest\" [width]=\"100\" [resizeable]=\"false\" prop=\"unloadingDateAtDest\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.unloadingDateAtDest | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Std TT\" [width]=\"100\" [resizeable]=\"false\" prop=\"stdTT\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.stdTT}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Delayed Days\" [width]=\"100\" [resizeable]=\"false\" prop=\"delayedDays\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.delayedDays}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"GRN\" [width]=\"70\" [resizeable]=\"false\" prop=\"grn\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.grn}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"GRN Date\" [width]=\"130\" [resizeable]=\"false\" prop=\"grnDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.grnDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"DIT_QTY\" [width]=\"150\" [resizeable]=\"false\" prop=\"ditQty\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.ditQty}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"SHORTAGE_QTY\" [width]=\"150\" [resizeable]=\"false\" prop=\"shortQty\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.shortQty}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"DSeq\" [width]=\"50\" [resizeable]=\"false\" prop=\"dropSeq\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.dropSeq}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Loadslip Comments\" [width]=\"100\" [resizeable]=\"false\" prop=\"comments\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <div class=\"edit-field\" [title]=\"row.loadslipcomments\"\n          [ngClass]=\"{'cursor-pointer':row.loadslipComments?.length>9}\"\n          (click)=\"showIntegrationMessage(row,'loadslipcomments')\" *ngIf=\"(row.loadslipcomments)\">\n          {{(row.loadslipcomments?.length>9)?(row.loadslipcomments | slice:0:9)+'..':(row.loadslipcomments)}}\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Gate Comments\" [width]=\"100\" [resizeable]=\"false\" prop=\"comments\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <div class=\"edit-field\" [title]=\"row.comments\" [ngClass]=\"{'cursor-pointer':row.comments?.length>9}\"\n          (click)=\"showIntegrationMessage(row,'comments')\" *ngIf=\"(row.comments)\">\n          {{(row.comments?.length>9)?(row.comments | slice:0:9)+ '..':(row.comments)}}\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Rejection\" [width]=\"125\" [resizeable]=\"false\" prop=\"rejectionStatus\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.rejectionStatus}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Rejection Desc\" [width]=\"125\" [resizeable]=\"false\" prop=\"rejectionDesc\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.rejectionDesc}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Insert User\" [width]=\"125\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.insertUser}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Update User\" [width]=\"125\" [resizeable]=\"false\" prop=\"updateUser\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.updateUser}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Type\" [width]=\"50\" [resizeable]=\"false\" prop=\"stopType\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.stopType || '--'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Loadslip Creation Date\" [width]=\"125\" [resizeable]=\"false\" prop=\"createdDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.createdDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Country of Destination\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"destCountryName\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destCountryName}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Total Loaded\" [width]=\"70\" [resizeable]=\"false\" prop=\"qty\" [sortable]=\"true\"\n      [flexGrow]=\"1\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.qty}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Integration Status\" [width]=\"80\" [resizeable]=\"false\" prop=\"integrationStatus\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.integrationStatus}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Integration Msg\" [width]=\"80\" [resizeable]=\"false\" prop=\"integrationMsg\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <div class=\"edit-field\" [title]=\"row.integrationMsg\" [ngClass]=\"{'cursor-pointer':row.integrationMsg?.length>9}\"\n          (click)=\"showIntegrationMessage(row,'integrationMsg')\" *ngIf=\"(row.integrationMsg)\">\n          {{(row.integrationMsg?.length>9)?(row.integrationMsg | slice:0:9)+'..':(row.integrationMsg)}}\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"FT TRIP ID\" [width]=\"1000\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"ftTripId\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <a (click)=\"goToLink(row.ftTripId)\">{{row.ftTripId}}</a>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Cust Inv Num\" [width]=\"100\" [resizeable]=\"false\" prop=\"custInvNum\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.customInvNumber}}\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- <ngx-datatable-column name=\"MKT Seg\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"marketSegment\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.marketSegment}}\n      </ng-template>\n    </ngx-datatable-column> -->\n    <!-- Footer Template starts -->\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedCount\">\n            {{selectedCount.toLocaleString()}} Selected |\n          </span>\n          Showing {{(offset * pageSize)+1}} to {{(rowCount>\n          (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n          {{(rowCount)}} records.\n        </div>\n        <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n          [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n          [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n          (change)=\"table.onFooterPage($event)\">\n        </datatable-pager>\n      </ng-template>\n    </ngx-datatable-footer>\n    <!-- Footer Template Ends -->\n  </ngx-datatable>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"integrationMsgModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\" *ngIf=\"msgType == 'integrationMsg'\">Message !!!</h4>\n        <h4 class=\"modal-title\" *ngIf=\"msgType == 'comments'\">Comments !!!</h4>\n        <h4 class=\"modal-title\" *ngIf=\"msgType == 'loadslipcomments'\">Loadslip Comments !!!</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p [ngClass]=\"{'text-center text-danger': msgType == 'integrationMsg'}\">{{integrationMsg}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"saveComments()\">Save</button> -->\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/gate-security/truck-movement/truck-movement.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/gate-security/truck-movement/truck-movement.component.ts ***!
  \**************************************************************************/
/*! exports provided: TruckMovementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckMovementComponent", function() { return TruckMovementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/public/date.adapters */ "./src/app/public/date.adapters.ts");
/* harmony import */ var src_app_services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/helper-service/helper-service.service */ "./src/app/services/helper-service/helper-service.service.ts");
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











var TruckMovementComponent = /** @class */ (function () {
    function TruckMovementComponent(service, toastr, router, helperService) {
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.helperService = helperService;
        this.page = {
            limit: 10,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.truckMovementData = [];
        this.statusList = [
            "GATED_IN",
            "REPORTED",
            "ASSIGN_LS",
            "LOADING",
            "LOADED",
            "UNLOADING",
            "DELIVERED",
            "INTRANSIT",
            "COMPLETED"
        ];
        this.mktsegment = [];
        this.isShow = true;
        this.mktsegmentList = [];
        this.baystatusList = [];
        this.categoryList = [];
        this.materialGrp = [];
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.freezeLeftValue = true;
        this.insertUser = '';
    }
    TruckMovementComponent.prototype.ngDoCheck = function () {
        var width = $(window).width();
        if (width < 1024) {
            this.freezeLeftValue = false;
        }
        else {
            this.freezeLeftValue = true;
        }
    };
    TruckMovementComponent.prototype.ngOnInit = function () {
        this.roles = src_app_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].roles;
        //Activation of Tabs
        if (this.service.checkRole() == this.roles.rdc_PLN || (this.service.checkRole() == this.roles.JIT_OPERATION)) {
            localStorage.setItem("userMenu", "RDC-GAT-REPORT");
        }
        else if ((this.service.checkRole() == this.roles.gateSecurity) || (this.service.checkRole() == this.roles.rdc_GAT) ||
            (this.service.checkRole() == this.roles.JIT_GATE_SECURITY)) {
            localStorage.setItem("userMenu", "GAT-TRUCK-MOVEMENT");
        }
        else {
            localStorage.setItem("userMenu", "fgs-truck-status");
        }
        this.baystatusList = src_app_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].bayStatusList;
        this.rejectionList = src_app_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].rejectionList;
        this.check_Role_DP_REP = this.service.checkRole();
        this.getTruckTypeMasterData();
        this.reportFromDate = this.currentDateAsString;
        this.reportToDate = this.reportFromDate;
        var data = {
            "statusList": this.statusList,
            // Report Dates
            "fromReportDate": this.reportFromDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.reportFromDate).format('DD/MM/YYYY')) : '',
            "toReportDate": this.reportToDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.reportToDate).format('DD/MM/YYYY')) : ''
        };
        this.truckMovementApiSerivce(data);
        this.getMarketSegment();
        this.getCategoryMasterData();
    };
    TruckMovementComponent.prototype.truckMovementApiSerivce = function (data) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.truckMovement, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.truckMovementData = response['data'].trucksMetaDatas;
                _this.truckMovementData = _this.truckMovementData.slice();
                _this.page.count = response['data'].total;
                _this.page.limit = response['data'].pageLength;
                _this.isLoading = false;
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went Wrong", "! Error");
            }
        }, function (err) {
            _this.isLoading = false;
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
        });
    };
    TruckMovementComponent.prototype.getMarketSegment = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMarketSegment).subscribe(function (response) {
            if (response['statusCode'] == '200') {
                _this.mktsegmentList = response['data'];
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!');
            }
        });
    };
    //set value destination
    TruckMovementComponent.prototype.setDestination = function (value) {
        //  this.destinationDesc = value;
        this.destination = value;
    };
    //set value to destination description
    TruckMovementComponent.prototype.setDestDescription = function (value) {
        this.destinationDesc = value;
    };
    // for getting truck type master
    TruckMovementComponent.prototype.getTruckTypeMasterData = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.truckTypeMasterData).subscribe(function (response) {
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
    TruckMovementComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    TruckMovementComponent.prototype.addEvent = function (type, event) {
        console.log(event.target.value);
        if (event.target.value) {
            switch (type) {
                /* Checking if selected from date greater than to date.
             Clearing the toDate field when from date greater than to date */
                case "gateInDate":
                    if (this.gateInToDate && (this.gateInFromDate > this.gateInToDate)) {
                        this.gateInToDate = '';
                    }
                    // this.gateInToDate = '';
                    break;
                case "gateOutDate":
                    if (this.gateOutToDate && (this.gateOutFromDate > this.gateOutToDate)) {
                        this.gateOutToDate = '';
                    }
                    // this.gateOutToDate = '';
                    break;
                case "repFromDate":
                    var checkToDate = this.reportToDate;
                    console.log("Check--->1", checkToDate);
                    if (this.reportToDate == this.currentDateAsString) {
                        // on page load we are defaluting the  to date with string. Comparing string with date is not possible
                        // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
                        checkToDate = new Date();
                        console.log("Check--->2", checkToDate);
                    }
                    if (this.reportToDate && (this.reportFromDate > checkToDate)) {
                        this.reportToDate = '';
                    }
                    // this.reportToDate = '';
                    break;
                default:
                    break;
            }
        }
    };
    TruckMovementComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.clearAll();
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.reportFromDate = this.currentDateAsString;
        this.reportToDate = this.reportFromDate;
        var bodyData = {
            "statusList": this.statusList,
            // Report Dates
            "fromReportDate": this.reportFromDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.reportFromDate).format('DD/MM/YYYY')) : '',
            "toReportDate": this.reportToDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.reportToDate).format('DD/MM/YYYY')) : ''
        };
        this.truckMovementApiSerivce(bodyData);
    };
    //server side pagination
    TruckMovementComponent.prototype.datatablePageData = function (pageInfo) {
        var _this = this;
        var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
        var data = {
            'index': pageInfo.offset,
            'pageLength': pageInfo.pageSize,
            'destination': this.destination,
            'invoice': this.invoice,
            'itemId': this.materialCode,
            'loadslipId': this.loadSlipId,
            'truckType': this.truckType,
            "transporter": this.transporter,
            "destCountry": obj ? (obj.value) : '',
            "type": this.type,
            'statuses': this.loadslipstatustype,
            "statusList": this.statusList,
            "truckNumber": this.truckNumber,
            "containerNum": this.container,
            "source": this.sourceCode,
            "bayStatus": this.bayStatus,
            "marketSegment": this.mktsegment,
            "shipmentID": this.shipmentId,
            "stopType": this.stopType,
            // Gate In Dates
            "fromGateInDate": this.gateInFromDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.gateInFromDate).format('DD/MM/YYYY')) : '',
            "toGateInDate": this.gateInToDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.gateInToDate).format('DD/MM/YYYY')) : '',
            // Gate Out Dates
            "fromGateOutDate": this.gateOutFromDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
            "toGateOutDate": this.gateOutToDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.gateOutToDate).format('DD/MM/YYYY')) : '',
            // Report Dates
            "fromReportDate": this.reportFromDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.reportFromDate).format('DD/MM/YYYY')) : '',
            "toReportDate": this.reportToDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.reportToDate).format('DD/MM/YYYY')) : '',
            "rejection": this.rejection,
            "indentCategoryList": this.materialGrp,
            "insertUser": this.insertUser
        };
        this.truckMovementApiSerivce(data);
    };
    TruckMovementComponent.prototype.clearAll = function () {
        this.gateInFromDate = '';
        this.gateInToDate = '';
        this.gateOutFromDate = '';
        this.gateOutToDate = '';
        this.reportFromDate = '';
        this.reportToDate = '';
        this.destination = '';
        this.destinationDesc = '';
        this.destinationList = [];
        this.descriptionList = [];
        this.invoice = '';
        this.materialCode = '';
        this.loadSlipId = '';
        this.shipmentId = '';
        this.truckType = [];
        this.stopType = '';
        this.loadslipstatustype = [];
        this.mktsegment = [];
        this.container = "";
        this.truckNumber = "";
        this.sourceCode = '';
        this.sourceList = [];
        this.bayStatus = [];
        this.transporter = '';
        this.transporterList = [];
        this.countryList = [];
        this.destCountryName = '';
        this.indentID = '';
        this.rejection = [];
        this.materialGrp = [];
        this.insertUser = '';
    };
    TruckMovementComponent.prototype.showIntegrationMessage = function (rowdata, type) {
        this.msgType = type;
        if (type == 'integrationMsg') {
            this.integrationMsg = rowdata.integrationMsg;
        }
        else if (type == 'comments') {
            this.integrationMsg = rowdata.comments;
        }
        else {
            this.integrationMsg = rowdata.loadslipcomments;
        }
        $('#integrationMsgModal').modal('show');
    };
    // Filter source location
    TruckMovementComponent.prototype.getfilterSource = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.sourceList = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
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
    // get destaination list on search
    TruckMovementComponent.prototype.getDestinationList = function (event) {
        var _this = this;
        this.destinationDesc = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                _this.destinationList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter Transporter details
    TruckMovementComponent.prototype.getfilterTransporter = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.transporterList = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?transporter=' + filtervalue).subscribe(function (response) {
                _this.transporterList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //get filter destination result
    TruckMovementComponent.prototype.countryOfDestinationFilter = function (event, type) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?' + type + '=' + filtervalue).subscribe(function (response) {
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
    TruckMovementComponent.prototype.getUserDestinationList = function (event) {
        var _this = this;
        this.destination = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getDestinationDescriptionDataList + event.target.value).subscribe(function (response) {
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
    //filter material code 
    TruckMovementComponent.prototype.filterMaterialCode = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.materilcodelist = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?materialCode=' + filtervalue).subscribe(function (response) {
                _this.materilcodelist = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    TruckMovementComponent.prototype.filterTruckMovement = function () {
        var _this = this;
        this.table.offset = 0;
        var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
        var bodyData = {
            'destination': this.destination,
            'invoice': this.invoice,
            'itemId': this.materialCode,
            'loadslipId': this.loadSlipId,
            'truckType': this.truckType,
            "transporter": this.transporter,
            "destCountry": obj ? (obj.value) : '',
            "type": this.type,
            'statuses': this.loadslipstatustype,
            "statusList": this.statusList,
            "truckNumber": this.truckNumber,
            "containerNum": this.container,
            "source": this.sourceCode,
            "bayStatus": this.bayStatus,
            "marketSegment": this.mktsegment,
            "shipmentID": this.shipmentId,
            "stopType": this.stopType,
            "indentID": this.indentID,
            // Gate In Dates
            "fromGateInDate": this.gateInFromDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.gateInFromDate).format('DD/MM/YYYY')) : '',
            "toGateInDate": this.gateInToDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.gateInToDate).format('DD/MM/YYYY')) : '',
            // Gate Out Dates
            "fromGateOutDate": this.gateOutFromDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
            "toGateOutDate": this.gateOutToDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.gateOutToDate).format('DD/MM/YYYY')) : '',
            // Report Dates
            "fromReportDate": this.reportFromDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.reportFromDate).format('DD/MM/YYYY')) : '',
            "toReportDate": this.reportToDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.reportToDate).format('DD/MM/YYYY')) : '',
            "rejection": this.rejection,
            "indentCategoryList": this.materialGrp,
            "insertUser": this.insertUser
        };
        if (this.helperService.getDateValidations(this.gateInFromDate, this.gateInToDate, this.gateOutFromDate, this.gateOutToDate, this.reportFromDate, this.reportToDate)) {
            this.truckMovementApiSerivce(bodyData);
        }
        else {
            this.isLoading = false;
        }
    };
    TruckMovementComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    TruckMovementComponent.prototype.export = function () {
        var _this = this;
        if (this.truckMovementData.length > 0) {
            this.isLoading = true;
            var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
            var data = {
                'marketSegment': this.mktsegment,
                'invoice': this.invoice,
                'loadslipId': this.loadSlipId,
                'stopType': this.stopType,
                'shipmentID': this.shipmentId,
                'truckType': this.truckType,
                "transporter": this.transporter,
                "destCountry": obj ? (obj.value) : '',
                'type': this.type,
                'itemId': this.materialCode,
                'statuses': this.loadslipstatustype,
                "statusList": this.statusList,
                "destination": this.destination,
                "truckNumber": this.truckNumber,
                "containerNum": this.container,
                "source": this.sourceCode,
                "bayStatus": this.bayStatus,
                'pageLength': this.page.count,
                "indentID": this.indentID,
                // Gate In Dates
                "fromGateInDate": this.gateInFromDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.gateInFromDate).format('DD/MM/YYYY')) : '',
                "toGateInDate": this.gateInToDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.gateInToDate).format('DD/MM/YYYY')) : '',
                // Gate Out Dates
                "fromGateOutDate": this.gateOutFromDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
                "toGateOutDate": this.gateOutToDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.gateOutToDate).format('DD/MM/YYYY')) : '',
                // Report Dates
                "fromReportDate": this.reportFromDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.reportFromDate).format('DD/MM/YYYY')) : '',
                "toReportDate": this.reportToDate ? (moment__WEBPACK_IMPORTED_MODULE_5__(this.reportToDate).format('DD/MM/YYYY')) : '',
                "rejection": this.rejection,
                "indentCategoryList": this.materialGrp,
                "insertUser": this.insertUser
            };
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.truckMovement, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var newtruckMovementData = response['data'].trucksMetaDatas;
                    var excelRawData = newtruckMovementData;
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        var data_1 = {
                            "Source": excelRawData[i].sourceLoc,
                            "Report Location": excelRawData[i].reportingLoc,
                            "Indent Id": excelRawData[i].indentId,
                            "Transporter Code": excelRawData[i].transporterSapCode,
                            "Transporter": excelRawData[i].servprov,
                            "Truck Number": excelRawData[i].truckNumber,
                            "Container": excelRawData[i].containerNum,
                            "Load Slip Id": excelRawData[i].loadslipId,
                            "Shipment ID": excelRawData[i].shipmentId,
                            "Dest": excelRawData[i].destLoc,
                            "Dest Description": excelRawData[i].destDis,
                            "Truck/Cont Type": excelRawData[i].truckType,
                            "Actual TruckType": excelRawData[i].actualTruckType,
                            "Order Type": excelRawData[i].type,
                            "MKT Seg": excelRawData[i].marketSegment,
                            "Category": excelRawData[i].itemCategory,
                            "Freight Avail": excelRawData[i].isFreightAvailable,
                            "Transhipment": excelRawData[i].transhipment,
                            "Driver Name": excelRawData[i].driverName,
                            "Driver Mobile": excelRawData[i].driverMobile,
                            "Driver License": excelRawData[i].driverLicense,
                            "Indent Creation Date": excelRawData[i].indentCreationDate,
                            "ReportDate": _this.service.customDateTimeFormat(excelRawData[i].reportDate),
                            "GateInDate": _this.service.customDateTimeFormat(excelRawData[i].gateInDate),
                            "Arrived Bay": _this.service.customDateTimeFormat(excelRawData[i].bayArrivedDate),
                            "Print LS": _this.service.customDateTimeFormat(excelRawData[i].lsPrintDate),
                            "Send For Barcode": _this.service.customDateTimeFormat(excelRawData[i].sendForBarcodeDate),
                            "Loading Start": _this.service.customDateTimeFormat(excelRawData[i].loadingStartDate),
                            "Loading End": _this.service.customDateTimeFormat(excelRawData[i].loadingEndDate),
                            "Confirm": _this.service.customDateTimeFormat(excelRawData[i].confirmedDate),
                            "Release": _this.service.customDateTimeFormat(excelRawData[i].releaseDate),
                            "GateOutDate": _this.service.customDateTimeFormat(excelRawData[i].gateOutDate),
                            "Bay Status": excelRawData[i].bayStatus,
                            "Loadslip Status": excelRawData[i].loadslipStatus,
                            "Truck Status": excelRawData[i].status,
                            "TAT (Rep-Gate Out)(Hrs)": excelRawData[i].repGoHrs,
                            "TAT2(Gate In-Gate Out)(Hrs)": excelRawData[i].giGoHrs,
                            "TAT3(Gate In-Release)(Hrs)": excelRawData[i].giRelHrs,
                            "TAT4(Loading-Release)(Hrs)": excelRawData[i].loRelHrs,
                            "TAT-5(Release-Gate Out)(Hrs)": excelRawData[i].relGoHrs,
                            // "TAT (FGS Call-Release)": excelRawData[i].callRelHrs,
                            "TAT6 (Rep-Gate In)(Hrs)": excelRawData[i].repGiHrs,
                            "STO/SO": excelRawData[i].stoSoNum,
                            "Delivery": excelRawData[i].delivery,
                            "Invoice": excelRawData[i].sapInvoice,
                            "Invoice Date": _this.service.customDateTimeFormat(excelRawData[i].sapInvoiceDate),
                            "LR": excelRawData[i].lrNum,
                            "LR Date": _this.service.customDateTimeFormat(excelRawData[i].lrDate),
                            "Indent Cat": excelRawData[i].indentCategory,
                            "Tyre": +excelRawData[i].totTyres,
                            "Tube": +excelRawData[i].totTubes,
                            "Flap": +excelRawData[i].totFlaps,
                            "Valve": +excelRawData[i].totValve,
                            "PCTR": (excelRawData[i].totPctr) ? (+excelRawData[i].totPctr) : 0,
                            "Other Qty": +excelRawData[i].otherQty,
                            "Total Qty": +excelRawData[i].totQty,
                            "TTE Qty": excelRawData[i].tteQty ? +excelRawData[i].tteQty.toFixed(2) : 0,
                            "TTE Util": excelRawData[i].tteUtil ? +excelRawData[i].tteUtil.toFixed(2) : 0,
                            "Wt Util": excelRawData[i].weightUtil ? +excelRawData[i].weightUtil.toFixed(2) : 0,
                            "Vol Util": excelRawData[i].volumeUtil ? +excelRawData[i].volumeUtil.toFixed(2) : 0,
                            "In Weight (Kg)": +excelRawData[i].inWeight,
                            "Out Weight (Kg)": +excelRawData[i].outWeight,
                            "Net Weight(Kg)": +excelRawData[i].netWeight,
                            "SAP invoice weight(Kg)": +excelRawData[i].sapInvWeight,
                            "Weight Diff (Kg)": +excelRawData[i].diffInvWeight,
                            "SAP invoice value(INR)": excelRawData[i].sapInvValue,
                            "Eway bill No": excelRawData[i].ewayBillNo,
                            "Reporting Date At Dest": _this.service.customDateTimeFormat(excelRawData[i].reportingDateAtDest),
                            "Unloading Date At Dest": _this.service.customDateTimeFormat(excelRawData[i].unloadingDateAtDest),
                            "Std TT": excelRawData[i].stdTT,
                            "Delayed Days": excelRawData[i].delayedDays,
                            "GRN": excelRawData[i].grn,
                            "GRN Date": _this.service.customDateTimeFormat(excelRawData[i].grnDate),
                            "DIT_QTY": excelRawData[i].ditQty,
                            "SHORTAGE_QTY": excelRawData[i].shortQty,
                            "DSeq": excelRawData[i].dropSeq,
                            "Loadslip Comments": excelRawData[i].loadslipcomments,
                            "Gate Comments": excelRawData[i].comments,
                            "Rejection": excelRawData[i].rejectionStatus,
                            "Rejection Desc": excelRawData[i].rejectionDesc,
                            "Insert User": excelRawData[i].insertUser,
                            "Update User": excelRawData[i].updateUser,
                            "Type": excelRawData[i].stopType,
                            "Loadslip Creation Date": _this.service.customDateTimeFormat(excelRawData[i].createdDate),
                            "Country of Destination": excelRawData[i].destCountryName,
                            "Total Loaded": excelRawData[i].qty,
                            "Integration Status": excelRawData[i].integrationStatus,
                            // "MKT Seg": excelRawData[i].marketSegment
                            "Ft Trip ID": excelRawData[i].ftTripId,
                            "Cust Inv Num": excelRawData[i].customInvNumber
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_6__["writeFile"](workBook, 'TruckMovement.xlsx');
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
    //for getting category master data
    TruckMovementComponent.prototype.getCategoryMasterData = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.categoryMasterData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.categoryList = response['data'];
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "!Error");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"])
    ], TruckMovementComponent.prototype, "table", void 0);
    TruckMovementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truck-movement',
            template: __webpack_require__(/*! ./truck-movement.component.html */ "./src/app/gate-security/truck-movement/truck-movement.component.html"),
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_8__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], useValue: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_8__["APP_DATE_FORMATS"]
                }
            ]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_9__["HelperServiceService"]])
    ], TruckMovementComponent);
    return TruckMovementComponent;
}());



/***/ }),

/***/ "./src/app/gate-security/truck-movement/truck-movement.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/gate-security/truck-movement/truck-movement.module.ts ***!
  \***********************************************************************/
/*! exports provided: truckMovementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truckMovementModule", function() { return truckMovementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
/* harmony import */ var _truck_movement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./truck-movement.component */ "./src/app/gate-security/truck-movement/truck-movement.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _truck_movement_component__WEBPACK_IMPORTED_MODULE_8__["TruckMovementComponent"] },
];
var truckMovementModule = /** @class */ (function () {
    function truckMovementModule() {
    }
    truckMovementModule.prototype.goToLink = function (url) {
        window.open(url, "_blank");
    };
    truckMovementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["customMaterialModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_7__["CustomDatePipeModule"]
            ],
            declarations: [
                _truck_movement_component__WEBPACK_IMPORTED_MODULE_8__["TruckMovementComponent"]
            ]
        })
    ], truckMovementModule);
    return truckMovementModule;
}());



/***/ })

}]);
//# sourceMappingURL=gate-security-truck-movement-truck-movement-module.js.map