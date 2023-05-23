(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gate-security-gatesecurity-truck-inventory-shipping-gatesecurity-truck-inventory-shipping-module"],{

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

/***/ "./src/app/gate-security/gatesecurity-truck-inventory-shipping/gatesecurity-truck-inventory-shipping.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/gate-security/gatesecurity-truck-inventory-shipping/gatesecurity-truck-inventory-shipping.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\">\n</app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    <b>Truck status > Truck Inventory > Shipping</b>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"Filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n  <div class=\"clearfix\"></div>\n  <div class=\"manualplan-fields\" *ngIf=\"isShow\">\n      <form (submit)=\"truckstatusIndetsFilter()\">\n    <div class=\"col-md-12 row\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row tab-loadslip-fields\">\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <!--  -->\n              <div class=\"col-md-2 pl-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput aria-label=\"Source\" placeholder=\"Source\"\n                      (keyup)=\"getfilterDestination($event,'source',isIntransitTruck)\" autocomplete=\"off\"\n                      [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"source\" name=\"source\" oninput=\"this.value = this.value.toUpperCase()\">\n                    <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                        <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n              <!-- <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput aria-label=\"Destination\" placeholder=\"Destination\" (keyup)=\"getfilterDestination($event,'destination')\" autocomplete=\"off\"\n                      [matAutocomplete]=\"destinationAutocomplete\" [(ngModel)]=\"destination\" name=\"destination\">\n                    <mat-autocomplete #destinationAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\">\n                        <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div> -->\n\n              <div class=\"col-md-2 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n                      [(ngModel)]=\"destination\" name=\"destination\" oninput=\"this.value = this.value.toUpperCase()\"\n                      (keyup)=\"getfilterDestination($event,'destination', !isIntransitTruck)\">\n                    <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\"\n                        (click)=\"setDestDescription(list.description)\"\n                        (onSelectionChange)=\"setDestDescription(list.description)\">\n                        <span>{{list.value}}</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-4 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Destination Description\" aria-label=\"destDisAutocomplete\"\n                      [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destDisAutocomplete\"\n                      (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                    <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                        (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                        <span>({{list.description}})</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n\n              <div class=\"col-md-4 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"Truck/Container Type\" [(ngModel)]=\"truckType\" name=\"truckType\" multiple>\n                      <!-- <mat-option [value]=\"\">None</mat-option> -->\n                      <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-3 pr-0\">\n                <mat-form-field>\n                  <input matInput [(ngModel)]=\"trckNumber\" name=\"truck number\" autocomplete=\"off\"\n                    placeholder=\"Truck Number\" oninput=\"this.value = this.value.toUpperCase()\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput aria-label=\"transporter\" placeholder=\"Transporter\"\n                      (keyup)=\"getfilterTransporter($event)\" autocomplete=\"off\"\n                      [matAutocomplete]=\"transporterAutocomplete\" [(ngModel)]=\"transporter\" name=\"transporter\" oninput=\"this.value = this.value.toUpperCase()\">\n                    <mat-autocomplete #transporterAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of transporterList\" [value]=\"list.value\">\n                        <span>{{list.value}}</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <mat-form-field>\n                  <input matInput aria-label=\"Country of Destination\" placeholder=\"Country of Destination\"\n                    (keyup)=\"countryOfDestinationFilter($event,'destCountrySearch')\" autocomplete=\"off\"\n                    [matAutocomplete]=\"dischargeAutocomplete\" [(ngModel)]=\"destCountryName\" name=\"destCountryName\" oninput=\"this.value = this.value.toUpperCase()\">\n                  <mat-autocomplete #dischargeAutocomplete=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let country of countryList\" [value]=\"country.description\">\n                      <span matTooltip={{country.description}}>{{country.value}} - ({{country.description}})</span>\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-3\">\n                <mat-form-field>\n                  <input matInput [(ngModel)]=\"shipmentId\" name=\"shipment\" autocomplete=\"off\" placeholder=\"Shipment Id\" oninput=\"this.value = this.value.toUpperCase()\">\n                </mat-form-field>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"row tab-loadslip-fields\">\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-3 pl-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput [(ngModel)]=\"indentId\" name=\"indentid\" placeholder=\"Indent Id\" autocomplete=\"off\" oninput=\"this.value = this.value.toUpperCase()\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput [min]=\"minDate\" placeholder=\"Gate In From Date\" disabled\n                      [matDatepicker]=\"gateInFromDatePicker\" autocomplete=\"off\" [(ngModel)]=\"gateInFromDate\"\n                      (dateChange)=\"addEvent('gateInDate', $event)\" name=\"gateInToDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"gateInFromDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #gateInFromDatePicker disabled=\"false\"></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <mat-form-field>\n                  <input matInput [min]=\"gateInFromDate\" placeholder=\"Gate In To Date\" disabled\n                    [matDatepicker]=\"gateInToDatePicker\" autocomplete=\"off\" [(ngModel)]=\"gateInToDate\"\n                    name=\"gateInToDate\">\n                  <mat-datepicker-toggle matSuffix [for]=\"gateInToDatePicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #gateInToDatePicker [disabled]=\"!gateInFromDate\"></mat-datepicker>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput [min]=\"minDate\" placeholder=\"Rep From Date\" disabled\n                      [matDatepicker]=\"reportFromDatePicker\" autocomplete=\"off\" [(ngModel)]=\"reportFromDate\"\n                      (dateChange)=\"addEvent('repFromDate', $event)\" name=\"reportfromDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"reportFromDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #reportFromDatePicker disabled=\"false\"></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n\n              <!-- <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput [min]=\"minDate\" placeholder=\"Gate Out From Date\" disabled [matDatepicker]=\"gateOutFromDatePicker\"\n                      autocomplete=\"off\" [(ngModel)]=\"gateOutFromDate\" (dateChange)=\"addEvent('gateOutDate', $event)\"\n                      name=\"gateoutFromDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"gateOutFromDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #gateOutFromDatePicker disabled=\"false\"></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <mat-form-field>\n                  <input matInput [min]=\"gateOutFromDate\" placeholder=\"Gate Out To Date\" disabled [matDatepicker]=\"gateOutToDatePicker\"\n                    autocomplete=\"off\" [(ngModel)]=\"gateOutToDate\" name=\"gateoutToDate\">\n                  <mat-datepicker-toggle matSuffix [for]=\"gateOutToDatePicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #gateOutToDatePicker [disabled]=\"!gateOutFromDate\"></mat-datepicker>\n                </mat-form-field>\n              </div> -->\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput [min]=\"reportFromDate\" placeholder=\"Rep To Date\" disabled\n                      [matDatepicker]=\"reportToDatePicker\" autocomplete=\"off\" [(ngModel)]=\"reportToDate\"\n                      name=\"reportToDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"reportToDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #reportToDatePicker [disabled]=\"!reportFromDate\"></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-2 pr-0\">\n                <mat-form-field>\n                  <mat-select placeholder=\"Bay Status\" [(ngModel)]=\"bayStatus\" name=\"bayStatus\" multiple>\n                    <!-- <mat-option [value]=\"\">None</mat-option> -->\n                    <mat-option *ngFor=\"let item of baystatusList\" [value]=\"item\"> {{item}} </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-2 pr-0\">\n                <mat-form-field>\n                  <mat-select placeholder=\"Select Status\" name=\"status\" autocomplete=\"off\" [(ngModel)]=\"statusType\" multiple>\n                    <!-- <mat-option [value]=\"\">None</mat-option> -->\n                    <mat-option *ngFor=\"let status of reportTruckStatusList\" [value]=\"status.value\">\n                      {{status.key}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-2 pr-0\">\n                <mat-form-field>\n                  <mat-select placeholder=\"Rejection\" [(ngModel)]=\"rejection\" name=\"rejection\" multiple>\n                    <!-- <mat-option [value]=\"\">None</mat-option> -->\n                    <mat-option *ngFor=\"let item of rejectionList\" [value]=\"item\"> {{item}} </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-2 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"Ind Cat\" [(ngModel)]=\"materialGrp\" name=\"materialGrp\" multiple>\n                      <mat-option *ngFor=\"let category of categoryList\" [value]=\"category\">{{category}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" type=\"submit\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" type=\"button\" (click)=\"clearData()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n      </form>\n  </div>\n  <!-- For FGS  Gate Security role Table-->\n  <ngx-datatable class='material  ngx-table-custom-scroll ngx-table-tr-custom-scroll' #table\n    [rows]='gateSeuReportedTrucksIndents' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"30\"\n    [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [scrollbarH]=\"true\" [count]=\"page.count\" [offset]=\"page.offset\"\n    [externalPaging]=\"true\" (page)=\"GateSecurityDatatablePageData($event)\" [selected]=\"selected\"\n    [selectionType]=\"'single'\">\n    <ngx-datatable-column name=\"Indent Id\" [frozenLeft]=\"freezeLeftValue\" [width]=\"180\" [resizeable]=\"false\" [sortable]=\"false\"\n      prop=\"indentId\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <!-- intransitTruck' --- Intransit trucks can't be edit  -->\n        <ng-container\n          *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-indentId'] = true\"\n            *ngIf=\"!editing[rowIndex + '-indentId']\">\n            <span class=\"edit-label\">{{row.indentId}}\n            </span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <div *ngIf=\"editing[rowIndex+ '-indentId']\">\n            <input class=\"table-input\" [value]=\"row.indentId\" (blur)=\"updateValue($event, 'indentId', rowIndex)\" oninput=\"this.value = this.value.toUpperCase()\">\n          </div>\n        </ng-container>\n        <ng-container\n          *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{row.indentId | uppercase}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column [frozenLeft]=\"true\" name=\"Truck Number\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"truckNumber\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <!-- intransitTruck' --- Intransit trucks can't be edit  -->\n        <ng-container\n          *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-truckNumber'] = true\"\n            *ngIf=\"!editing[rowIndex + '-truckNumber']\">\n            <span class=\"edit-label\">{{row.truckNumber | uppercase}}\n            </span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <div *ngIf=\"editing[rowIndex+ '-truckNumber']\">\n            <input class=\"table-input\" [value]=\"row.truckNumber\" (blur)=\"updateValue($event, 'truckNumber', rowIndex)\"\n              (keypress)=\"helperService.alphaNumericOnly($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n          </div>\n        </ng-container>\n        <ng-container\n          *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{row.truckNumber | uppercase}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Transporter\" [frozenLeft]=\"true\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\"\n      prop=\"transporter\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.transporter | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column [frozenLeft]=\"true\" name=\"Destination\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\"\n      prop=\"destination\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destination}}\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- Edit destination -->\n    <!-- <ngx-datatable-column  [frozenLeft]=\"true\" name=\"Destination\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"destination\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n        <ng-container *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n            <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-destination'] = true\"\n              *ngIf=\"!editing[rowIndex + '-destination']\">\n              <span class=\"edit-label\">{{row.destination}}\n              </span>\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <mat-form-field class=\"example-full-width\" *ngIf=\"editing[rowIndex+ '-destination']\">\n              <input matInput autofocus [matAutocomplete]=\"datatableDestIndentAutocomplete\" \n                [value]=\"row.destination\" autofocus (keyup)=\"getfilterDestination($event,'destination')\">\n              <mat-autocomplete #datatableDestIndentAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\" (click)=\"getIndentsFromDest(row,list)\"\n                        (onSelectionChange)=\"getIndentsFromDest(row,list)\">\n                  <span>{{list.value}}</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n        </ng-container>\n        <ng-container *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{row.destination}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column> -->\n    <ngx-datatable-column name=\"Dest Description\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"destDis\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destDis}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Truck Type\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckType\">\n      <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n        <ng-container\n          *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-truckType'] = true\"\n            *ngIf=\"!editing[rowIndex + '-truckType']\">\n            <span class=\"edit-label\">{{row.truckType}}\n            </span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <mat-form-field *ngIf=\"editing[rowIndex+ '-truckType']\">\n            <mat-select autofocus placeholder=\"Truck Type\" [ngModel]=\"row.truckType\" name=truckType{rowIndex}\n              (ngModelChange)=\"updateValue($event,'truckType',rowIndex)\">\n              <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\">\n                {{truck.value}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </ng-container>\n        <ng-container\n          *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{row.truckType | uppercase}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Report Date\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"reportedDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.reportedDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Truck Status\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"status\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.status}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Bay Status\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"callStatus\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <ng-container *ngIf=\"(row.bayStatus != '')\">\n          <span [ngClass]=\"{'blink':((row.bayStatus == 'CALL') && (row.gateInDate == null))}\">{{(row.bayStatus ==\n            'CALL') ? ((row.gateInDate)? row.bayStatus:'Calling'):row.bayStatus}}</span>\n        </ng-container>\n        <ng-container *ngIf=\"(row.bayStatus == '' || row.bayStatus == null)\">\n          {{row.bayStatus}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"In weight (Kg)\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"inWeight\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <mat-form-field>\n          <input matInput (blur)=\"updateValue($event, 'inWeight', rowIndex)\" [value]=\"row.inWeight?row.inWeight:''\"\n            (keypress)=\"service.numberOnly($event)\" autocomplete=\"off\" />\n        </mat-form-field>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"In weight Action\" [width]=\"70\" [resizeable]=\"false\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <button (click)=\"inweightUpdate(row)\" class=\"theme-small-button\" [ngClass]=\"(row.inWeightStatus)?'green':''\"\n          matTooltip=\"In Weight Update\">\n          <i class=\"fa fa-arrow-circle-o-right fa-2x\" aria-hidden=\"true\"></i>\n        </button>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Gate In\" [width]=\"130\" [resizeable]=\"false\" prop=\"gateIn\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span *ngIf=\"row.gateIn\">{{row.gateInDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span>\n        <button mat-raised-button color=\"primary\" *ngIf=\"!(row.gateIn)\" (click)=\"gateInTruck(row,rowIndex)\"\n          class=\"table-btn\">Gate\n          In\n        </button>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Out Weight (Kg)\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"outWeight\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <mat-form-field>\n          <input matInput (blur)=\"updateValue($event, 'outWeight', rowIndex)\" [value]=\"row.outWeight?row.outWeight:''\"\n            autocomplete=\"false\" (keypress)=\"service.numberOnly($event)\" />\n        </mat-form-field>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Out weight Action\" [width]=\"80\" [resizeable]=\"false\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <button (click)=\"outWeightUpdate(row)\" matTooltip=\"Out weight Update\" class=\"theme-delete-button\"\n          [ngClass]=\"(row.outWeightStatus)?'red':''\">\n          <i class=\"fa fa-arrow-circle-left fa-2x\" aria-hidden=\"true\"></i>\n        </button>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Net Weight (Kg)\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"netWeight\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.netWeight}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"SAP invoice weight(Kg)\" [width]=\"100\" [resizeable]=\"false\" prop=\"dropSeq\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvWeight}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Weight Diff (Kg)\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"netWeight\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <span [ngClass]=\"(row.weightDiffStatus)?'text-danger':''\">{{row.diffInvWeight}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Gate Out\" [width]=\"120\" [resizeable]=\"false\" prop=\"gateOut\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span *ngIf=\"row.gateOut\">{{row.gateOutDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span>\n        <!-- First button visible only On GatedIn not reject for captcure the Gateout commnts -->\n        <!-- <button mat-raised-button color=\"primary\"\n          *ngIf=\"!(row.gateOut) && (row.status == 'GATED_IN') && (row.rejectionStatus !=='REJECTED') \"\n          (click)=\"gateoutModal(row,rowIndex)\" class=\"table-btn\">Gate\n          Out\n        </button> -->\n        <button mat-raised-button color=\"primary\"\n          *ngIf=\"!(row.gateOut) && (row.status == 'GATED_IN') && (row.rejectionStatus !=='REJECTED') \"\n          (click)=\"gateoutWithoutLSModal(row,rowIndex)\" class=\"table-btn\">Gate\n          Out\n        </button>\n        <button mat-raised-button color=\"primary\"\n          *ngIf=\"!(row.gateOut) && ((row.status !== 'GATED_IN') || (row.rejectionStatus =='REJECTED'))\"\n          (click)=\"gateOutTruck(row,rowIndex)\" class=\"table-btn\">Gate\n          Out\n        </button>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Loadslip Comments\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"loadslipComments\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <div [title]=\"row.loadslipComments\" (click)=\"showLoadslipComments(row.loadslipComments)\"\n          [ngClass]=\"{'cursor-pointer':row.loadslipComments?.length>9}\" *ngIf=\"(row.loadslipComments)\">\n          {{(row.loadslipComments?.length>9) ? (row.loadslipComments | slice:0:9)+'..':(row.loadslipComments)}}\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Gate Comments\" [width]=\"100\" [resizeable]=\"false\" prop=\"comments\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <div class=\"edit-field\" [title]=\"row.comments\">\n          <span class=\"edit-label\">{{ (row.comments?.length>9)? (row.comments | slice:0:9)+'..':(row.comments)}}\n          </span>\n          <i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"showComments(row.comments,row)\"></i>\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Rejection\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"rejectionStatus\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.rejectionStatus}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Rejection Desc\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\"\n      prop=\"rejectionDesc\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.rejectionDesc}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Action\" [width]=\"410\" [resizeable]=\"false\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <button mat-raised-button color=\"primary\"\n          [disabled]=\"(((row.status!='GATED_IN')&&(row.status!='REPORTED')) || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck))\"\n          (click)=\"saveTruck(row)\" class=\"table-btn mr-10\">Save Truck\n        </button>\n        <button mat-raised-button color=\"primary\" *ngIf=\"(row.status=='REPORTED')\"\n          [disabled]=\"row.rejectionStatus == 'REJECTED'\" (click)=\"openTruckModel(row,rowIndex)\"\n          class=\"table-btn mr-10\">Reject Truck\n        </button>\n        <ng-container>\n          <button mat-raised-button color=\"primary\" [disabled]=\"!row.shipmentId\"\n            (click)=\"viewLoadslip(row.shipmentId,'loadslipView')\" class=\"table-btn mr-10\">View\n            Loadslips\n          </button>\n          <button mat-raised-button color=\"primary\" [disabled]=\"!row.shipmentId\"\n            (click)=\"viewLoadslip(row.shipmentId,'invoiceView')\" class=\"table-btn\">LoadSlip\n            Invoice\n          </button>\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Driver Name\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"driverName\">\n      <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n        <ng-container\n          *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-driverName'] = true\"\n            *ngIf=\"!editing[rowIndex + '-driverName']\">\n            <span class=\"edit-label\">{{row.driverName}}\n            </span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <mat-form-field *ngIf=\"editing[rowIndex+ '-driverName']\">\n            <input matInput [value]=\"row.driverName\" (blur)=\"updateValue($event, 'driverName', rowIndex)\"\n              oninput=\"this.value = this.value.toUpperCase()\">\n          </mat-form-field>\n        </ng-container>\n        <ng-container\n          *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{row.driverName}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Driver Number\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"driverContact\">\n      <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n        <ng-container\n          *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-driverContact'] = true\"\n            *ngIf=\"!editing[rowIndex + '-driverContact']\">\n            <span class=\"edit-label\">{{row.driverContact}}</span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <mat-form-field *ngIf=\"editing[rowIndex+ '-driverContact']\">\n            <input matInput [value]=\"row.driverContact\" (keypress)=\"service.numberOnly($event)\"\n              (keypress)=\"helperService.numericOnly($event)\" (blur)=\"updateValue($event, 'driverContact', rowIndex)\">\n          </mat-form-field>\n        </ng-container>\n        <ng-container\n          *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{row.driverContact}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Driver Licence\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"driverLicense\">\n      <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n        <ng-container\n          *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-driverLicense'] = true\"\n            *ngIf=\"!editing[rowIndex + '-driverLicense']\">\n            <span class=\"edit-label\">{{row.driverLicense}}</span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <mat-form-field *ngIf=\"editing[rowIndex+ '-driverLicense']\">\n            <input matInput [value]=\"row.driverLicense\" (blur)=\"updateValue($event, 'driverLicense', rowIndex)\"\n              oninput=\"this.value = this.value.toUpperCase()\">\n          </mat-form-field>\n        </ng-container>\n        <ng-container\n          *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{row.driverLicense}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Driver Consent Status\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"trackingConsentStatus\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.trackingConsentStatus}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Telecom Service Provider\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"consentPhoneTelecom\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.consentPhoneTelecom | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n    \n    <ngx-datatable-column name=\"Initiate Consent\" [width]=\"160\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"action\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <ng-container>\n         \n            <button mat-raised-button color=\"primary\" *ngIf=\"(row.trackingConsentStatus!='Success' || row.trackingConsentStatus!=null)\"\n            [disabled]=\"row.trackingConsentStatus == 'Success'\" (click)=\"checkConsent(row)\"\n            class=\"table-btn mr-10\">Check Consent Status\n          </button>\n          \n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n\n\n    <ngx-datatable-column name=\"ShipmentId\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"shipmentId\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.shipmentId | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Container\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"containerNum\">\n      <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n        <ng-container\n          *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-containerNum'] = true\"\n            *ngIf=\"!editing[rowIndex + '-containerNum']\">\n            <span class=\"edit-label\">{{row.containerNum | uppercase}}\n            </span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <mat-form-field *ngIf=\"editing[rowIndex+ '-containerNum']\">\n            <input matInput [value]=\"row.containerNum\" (blur)=\"updateValue($event, 'containerNum', rowIndex)\"\n              (keypress)=\"helperService.alphaNumericOnly($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n          </mat-form-field>\n        </ng-container>\n        <ng-container\n          *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{row.containerNum | uppercase}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Bay\" [width]=\"40\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"bayAssigned\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.bayAssigned}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"SAP invoice value(INR)\" [width]=\"90\" [resizeable]=\"false\" prop=\"dropSeq\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvValue}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Eway bill No\" [width]=\"100\" [resizeable]=\"false\" prop=\"dropSeq\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.ewayBillNo}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Source\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"source\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.source}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"LR Num\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.lrNum}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"LR Date\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.lrDate ? (row.lrDate | customDateFormat | date:'dd-MMM-yyyy') : '--'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Indent Cat\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.indentCategory}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"SAP Invoice\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvoice}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Tot Tyre\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totTyre}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Tot Tube\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totTube}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Tot Flap\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totFlap }}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Tot Valve\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totValve}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Tot PCTR\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totPctr}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Other Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.otherQty}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Tot Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totQty}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Country of Destination\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"destCountryName\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destCountryName}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Gate Serial No\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"gateControlCode\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.gateControlCode}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"PUC\" [width]=\"127\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"puc\">\n      <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n        <ng-container\n          *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-puc'] = true\"\n            *ngIf=\"!editing[rowIndex + '-puc']\">\n            <span class=\"edit-label\">{{(row.puc)?'Yes':'No'}}</span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <div *ngIf=\"editing[rowIndex+ '-puc']\" class=\"custom-table-radio-buttons\">\n            <mat-radio-group [(ngModel)]=\"row.puc\" name=puc{{rowIndex}}>\n              <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\"\n                (change)=\"updateValue($event, 'puc', rowIndex)\">\n                {{item.key}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </ng-container>\n        <ng-container\n          *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{(row.puc)?'Yes':'No'}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Insurance\" [width]=\"127\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"insurance\">\n      <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n        <ng-container\n          *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-insurance'] = true\"\n            *ngIf=\"!editing[rowIndex + '-insurance']\">\n            <span class=\"edit-label\">{{(row.insurance)?'Yes':'No'}}</span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <div *ngIf=\"editing[rowIndex+ '-insurance']\" class=\"custom-table-radio-buttons\">\n            <mat-radio-group [(ngModel)]=\"row.insurance\" name=insurance{{rowIndex}}>\n              <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\"\n                (change)=\"updateValue($event, 'insurance', rowIndex)\">\n                {{item.key}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </ng-container>\n        <ng-container\n          *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{(row.insurance)?'Yes':'No'}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Seat Belt\" [width]=\"127\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"seatBelt\">\n      <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n        <ng-container\n          *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-seatBelt'] = true\"\n            *ngIf=\"!editing[rowIndex + '-seatBelt']\">\n            <span class=\"edit-label\">{{(row.seatBelt)?'Yes':'No'}}</span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <div *ngIf=\"editing[rowIndex+ '-seatBelt']\" class=\"custom-table-radio-buttons\">\n            <mat-radio-group [(ngModel)]=\"row.seatBelt\" name=seatBelt{{rowIndex}}>\n              <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\"\n                (change)=\"updateValue($event, 'seatBelt', rowIndex)\">\n                {{item.key}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </ng-container>\n        <ng-container\n          *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{(row.seatBelt)?'Yes':'No'}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"First Aid\" [width]=\"127\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"firstAid\">\n      <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n        <ng-container\n          *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-firstAid'] = true\"\n            *ngIf=\"!editing[rowIndex + '-firstAid']\">\n            <span class=\"edit-label\">{{(row.firstAid)?'Yes':'No'}}</span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <div *ngIf=\"editing[rowIndex+ '-firstAid']\" class=\"custom-table-radio-buttons\">\n            <mat-radio-group [(ngModel)]=\"row.firstAid\" name=firstAid{{rowIndex}}>\n              <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\"\n                (change)=\"updateValue($event, 'firstAid', rowIndex)\">\n                {{item.key}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </ng-container>\n        <ng-container\n          *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{(row.firstAid)?'Yes':'No'}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Fire Extenguisher\" [width]=\"127\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"fireExtenguisher\">\n      <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n        <ng-container\n          *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n          <div class=\"edit-field\" title=\"Double click to edit\"\n            (click)=\"editing[rowIndex + '-fireExtenguisher'] = true\"\n            *ngIf=\"!editing[rowIndex + '-fireExtenguisher']\">\n            <span class=\"edit-label\">{{(row.fireExtenguisher)?'Yes':'No'}}</span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <div *ngIf=\"editing[rowIndex+ '-fireExtenguisher']\" class=\"custom-table-radio-buttons\">\n            <mat-radio-group [(ngModel)]=\"row.fireExtenguisher\" name=fireExtenguisher{{rowIndex}}>\n              <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\"\n                (change)=\"updateValue($event, 'fireExtenguisher', rowIndex)\">\n                {{item.key}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </ng-container>\n        <ng-container\n          *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{(row.fireExtenguisher)?'Yes':'No'}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Emergency Card\" [width]=\"127\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"emergencyCard\">\n      <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n        <ng-container\n          *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-emergencyCard'] = true\"\n            *ngIf=\"!editing[rowIndex + '-emergencyCard']\">\n            <span class=\"edit-label\">{{(row.emergencyCard)?'Yes':'No'}}</span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <div *ngIf=\"editing[rowIndex+ '-emergencyCard']\" class=\"custom-table-radio-buttons\">\n            <mat-radio-group [(ngModel)]=\"row.emergencyCard\" name=emergencyCard{{rowIndex}}>\n              <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\"\n                (change)=\"updateValue($event, 'emergencyCard', rowIndex)\">\n                {{item.key}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </ng-container>\n        <ng-container\n          *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{(row.emergencyCard)?'Yes':'No'}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Spark Arrestor\" [width]=\"127\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"sparKArrestor\">\n      <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n        <ng-container\n          *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-sparKArrestor'] = true\"\n            *ngIf=\"!editing[rowIndex + '-sparKArrestor']\">\n            <span class=\"edit-label\">{{(row.sparKArrestor)?'Yes':'No'}}</span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <div *ngIf=\"editing[rowIndex+ '-sparKArrestor']\" class=\"custom-table-radio-buttons\">\n            <mat-radio-group [(ngModel)]=\"row.sparKArrestor\" name=sparKArrestor{{rowIndex}}>\n              <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\"\n                (change)=\"updateValue($event, 'sparKArrestor', rowIndex)\">\n                {{item.key}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </ng-container>\n        <ng-container\n          *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{(row.sparKArrestor)?'Yes':'No'}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Fitness Certificate\" [width]=\"127\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"fitnessCert\">\n      <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n        <ng-container\n          *ngIf=\"(row.status === 'GATED_IN' || row.status == 'REPORTED') && (row.rejectionStatus != 'REJECTED') && (!row.intransitTruck)\">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-fitnessCert'] = true\"\n            *ngIf=\"!editing[rowIndex + '-fitnessCert']\">\n            <span class=\"edit-label\">{{(row.fitnessCert)?'Yes':'No'}}</span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <div *ngIf=\"editing[rowIndex+ '-fitnessCert']\" class=\"custom-table-radio-buttons\">\n            <mat-radio-group [(ngModel)]=\"row.fitnessCert\" name=fitnessCert{{rowIndex}}>\n              <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\"\n                (change)=\"updateValue($event, 'fitnessCert', rowIndex)\">\n                {{item.key}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </ng-container>\n        <ng-container\n          *ngIf=\"(row.status !== 'GATED_IN' && row.status !== 'REPORTED') || (row.rejectionStatus == 'REJECTED') || (row.intransitTruck)\">\n          {{(row.fitnessCert)?'Yes':'No'}}\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n\n\n    <ngx-datatable-column name=\"Insert User\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"insertUser\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.insertUser}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Update User\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"updateUser\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.updateUser}}\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- Footer Template starts -->\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedCount\">\n            {{selectedCount.toLocaleString()}} Selected |\n          </span>\n          Showing {{(offset * pageSize)+1}} to {{(rowCount>\n          (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n          {{(rowCount)}} records.\n        </div>\n        <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n          [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n          [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n          (change)=\"table.onFooterPage($event)\">\n        </datatable-pager>\n      </ng-template>\n    </ngx-datatable-footer>\n    <!-- Footer Template Ends -->\n  </ngx-datatable>\n</div>\n\n<!-- View Loadslips  for coorsponding shipment -->\n<div class=\"modal\" id=\"loadslipsModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Loadslip List</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <ul>\n          <li *ngFor=\"let item of loadslipList;let i=index\">\n            <span>\n              {{i+1}})\n              <span class=\"link\" style=\"margin-left: 10px;margin-right: 50px\"\n                (click)=\"viewLoadslipnavigation(item)\">{{item.loadlipId}}\n              </span>\n              <span>\n                {{item.type}}\n              </span>\n            </span>\n          </li>\n        </ul>\n      </div>\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n<!--  -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form name=\"form\" #f=\"ngForm\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Truck Inventory Comments</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n              <input matInput placeholder=\"Comments\" aria-label=\"State\" [(ngModel)]=\"truckComments\" name=\"Comments\"\n                #comments=\"ngModel\" autocomplete=\"off\">\n              <!-- <mat-error *ngIf=\"(f.submitted && comments.invalid)\">\n                <p *ngIf=\"comments.errors.required\">Comment is\n                  <strong>required</strong>\n                </p>\n              </mat-error> -->\n            </mat-form-field>\n          </div>\n        </div>\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <!-- <button type=\"button\" class=\"btn btn-danger\" >Close</button> -->\n          <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"save(f)\">Save</button>\n          <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\"\n            data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal\" id=\"rejectionModel\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Reject Reason</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n          <mat-form-field class=\"example-full-width\">\n            <mat-select placeholder=\"Reject reasons\" [(ngModel)]=\"rejectReason\" name=\"rejectReason\">\n              <mat-option *ngFor=\"let reason of rejectRasonList\" [value]=\"reason.rejectionCode\">\n                {{reason.rejectionCode}}-{{reason.rejectionDesc}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"rejectTruck(rejectReason)\">Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- View Loadslips  for coorsponding shipment -->\n<div class=\"modal\" id=\"commentModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">loadslip-Comments</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <p>{{loadslipComments}}</p>\n      </div>\n      <!-- Modal footer -->\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"gateOutRejectionModal\" back-drop=\"static\" key-board=\"false\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Gateout Reason</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n          <mat-form-field class=\"example-full-width\">\n            <mat-select placeholder=\"Gateout reasons\" [(ngModel)]=\"gateoutReason\" name=\"gateoutReason\">\n              <mat-option *ngFor=\"let reason of rejectRasonList\" [value]=\"reason.rejectionCode\">\n                {{reason.rejectionCode}}-{{reason.rejectionDesc}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"gateOutReason(gateoutReason)\">Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Displaying the Warning message when Gate security tries to Gate_Out the truck Without LS -->\n<div class=\"modal fade\" id=\"gateoutWithoutLSModal\" back-drop=\"static\" key-board=\"false\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" style=\"color: red;\">Warning</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <b >Truck can be Gated Out only when FGS Rejects it. </b>\n      </div>\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Indent List Modal -->\n<div class=\"modal fade\" id=\"destIndentModal\" back-drop=\"static\" key-board=\"false\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Indents</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n          <mat-form-field class=\"example-full-width\">\n            <mat-select placeholder=\"Indents\" [(ngModel)]=\"newIndent\" name=\"newIndent\">\n              <mat-option *ngFor=\"let destIndent of destIndentList\" [value]=\"destIndent.INDENTNUMBER\">\n                {{destIndent.INDENTNUMBER}} - {{destIndent.NETBALANCE}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"setSelectedIndent(newIndent)\">Submit</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/gate-security/gatesecurity-truck-inventory-shipping/gatesecurity-truck-inventory-shipping.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/gate-security/gatesecurity-truck-inventory-shipping/gatesecurity-truck-inventory-shipping.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: GatesecurityTruckInventoryShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatesecurityTruckInventoryShippingComponent", function() { return GatesecurityTruckInventoryShippingComponent; });
/* harmony import */ var _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/helper-service/helper-service.service */ "./src/app/services/helper-service/helper-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/public/date.adapters */ "./src/app/public/date.adapters.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var GatesecurityTruckInventoryShippingComponent = /** @class */ (function () {
    function GatesecurityTruckInventoryShippingComponent(service, toastr, router, helperService) {
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.helperService = helperService;
        this.gateSeuReportedTrucksIndents = [];
        this.isLoading = false;
        this.editing = {};
        this.editingFgs = {};
        this.gateSecurityIndents = [];
        this.editingRDCpln = {};
        this.page = {
            limit: 10,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 200
        };
        this.isShow = true;
        this.truckType = [];
        this.descriptionList = [];
        this.typeOfTruckReport = {};
        this.statusType = [];
        this.truckList = [];
        this.rejectRasonList = [];
        this.loadslipList = [];
        this.baystatusList = [];
        this.bayStatus = [];
        this.selected = [];
        this.isIntransitTruck = true;
        this.categoryList = [];
        this.materialGrp = [];
        this.freezeLeftValue = true;
        this.items = [
            {
                "key": "Yes",
                "value": true
            },
            {
                "key": "No",
                "value": false
            }
        ];
        this.rowData = {};
        this.userRoles = src_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].roles;
        this.typeOfTruckReport = src_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].truckReportTypes;
        this.reportTruckStatusList = src_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].truckInventoryStatusList;
        this.reportLocation = localStorage.getItem('sourceID');
        this.baystatusList = src_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].bayStatusList;
    }
    GatesecurityTruckInventoryShippingComponent.prototype.ngDoCheck = function () {
        var width = $(window).width();
        if (width < 1024) {
            this.freezeLeftValue = false;
        }
        else {
            this.freezeLeftValue = true;
        }
    };
    GatesecurityTruckInventoryShippingComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Activation of Tabs
        if (this.service.checkRole() == this.userRoles.rdc_PLN || (this.service.checkRole() == this.userRoles.JIT_OPERATION)) {
            localStorage.setItem("userMenu", "RDC-GAT-REPORT");
        }
        else if ((this.service.checkRole() == this.userRoles.gateSecurity) || (this.service.checkRole() == this.userRoles.rdc_GAT) || (this.service.checkRole() == this.userRoles.JIT_GATE_SECURITY)) {
            localStorage.setItem("userMenu", "GAT-INVENTORY-SHIPPING");
        }
        else {
            localStorage.setItem("userMenu", "fgs-truck-status");
        }
        // for getting truck type master
        this.getTruckTypeMasterData();
        this.getAllRejectReasons();
        var data = {
            'type': this.typeOfTruckReport['inventory'],
            'activity': "P",
            "reportLocation": this.reportLocation,
            // As per new requirement on 11/07/2019
            "pageLength": 200
        };
        this.gateSecurityTruckInventoryShippingAPI(data);
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getPlanByInfo).subscribe(function (response) {
            console.log(response);
            _this.plantBayList = response['data'];
        });
        this.rejectionList = src_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].rejectionList;
        this.getCategoryMasterData();
    };
    GatesecurityTruckInventoryShippingComponent.prototype.gateSecurityTruckInventoryShippingAPI = function (data) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getTruckData, data).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                _this.selected = [];
                _this.gateSeuReportedTrucksIndents = response['data'].truckReportsData;
                _this.gateSeuReportedTrucksIndents = _this.gateSeuReportedTrucksIndents.slice();
                console.log('data', _this.gateSeuReportedTrucksIndents.length);
                _this.page.limit = response['data'].pageLength;
                _this.page.count = response['data'].total;
                _this.isLoading = false;
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong", "!Error");
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // for getting truck type master
    GatesecurityTruckInventoryShippingComponent.prototype.getTruckTypeMasterData = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.truckTypeMasterData).subscribe(function (response) {
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
    // for getting rejectReasons
    GatesecurityTruckInventoryShippingComponent.prototype.getAllRejectReasons = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.rejectReasonData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.rejectRasonList = response['data'];
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "!Error");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
        });
    };
    //clear data
    GatesecurityTruckInventoryShippingComponent.prototype.clearData = function () {
        this.destination = '';
        this.indentId = "";
        this.statusType = [];
        this.transporter = "";
        this.trckNumber = "";
        this.truckType = [];
        this.destinationDesc = "";
        this.descriptionList = [];
        this.destinationList = [];
        this.destIndentList = [];
        this.transporterList = [];
        this.source = '';
        this.gateInFromDate = '';
        this.gateInToDate = '';
        this.gateOutFromDate = '';
        this.gateOutToDate = '';
        this.reportFromDate = '';
        this.reportToDate = '';
        this.shipmentId = "";
        this.editing = {};
        this.bayStatus = [];
        this.destCountryName = '';
        this.countryList = [];
        this.rejection = [];
        this.materialGrp = [];
    };
    GatesecurityTruckInventoryShippingComponent.prototype.openTruckModel = function (row, rowIndex) {
        this.rejectReason = '';
        this.rejectData = {
            gateControlCode: row.gateControlCode,
            status: 'REJECT',
            indentId: row.indentId,
            truckNumber: row.truckNumber,
            destDis: row.destDis,
            destCountryName: row.destCountryName
        };
        $('#rejectionModel').modal('show');
    };
    GatesecurityTruckInventoryShippingComponent.prototype.rejectTruck = function (reason) {
        var _this = this;
        var modifyIndex;
        if (!reason) {
            this.toastr.error('Please Give Reason for Rejecting Truck');
            $('#rejectionModel').modal('show');
        }
        else {
            $('#rejectionModel').modal('hide');
            this.isLoading = true;
            this.rejectData['rejectionCode'] = reason;
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.rejectTruck + '?isGateSecurity=' + true, this.rejectData).subscribe(function (response) {
                console.log(response);
                if (response['statusCode'] == 200) {
                    _this.toastr.success(response['message']);
                    _this.isLoading = false;
                    var replacebleIndex = _this.gateSeuReportedTrucksIndents.findIndex(function (rawData) { return rawData.gateControlCode == _this.rejectData['gateControlCode']; });
                    var responseData = response['data'];
                    _this.gateSeuReportedTrucksIndents[replacebleIndex] = responseData;
                    _this.selected = [];
                    _this.gateSeuReportedTrucksIndents = _this.gateSeuReportedTrucksIndents.slice();
                    _this.selected = _this.selected.concat([responseData]);
                    _this.rejectReason = '';
                }
                else {
                    _this.isLoading = false;
                    _this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong", "!Error");
                }
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //refersh data 
    GatesecurityTruckInventoryShippingComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.clearData();
        this.selected = [];
        // this.isLoading = true;
        // Refresh Data FGS operations & FGs gatesecurity 
        var data = {
            'type': this.typeOfTruckReport['inventory'],
            'activity': "P",
            "reportLocation": this.reportLocation
        };
        this.gateSecurityTruckInventoryShippingAPI(data);
    };
    // truck status filter creteria
    GatesecurityTruckInventoryShippingComponent.prototype.truckstatusIndetsFilter = function () {
        var _this = this;
        if (this.helperService.getDateValidations(this.gateInFromDate, this.gateInToDate, this.gateOutFromDate, this.gateOutToDate, this.reportFromDate, this.reportToDate)) {
            this.isLoading = true;
            //making offset to Zero
            this.table.offset = 0;
            this.selected = [];
            var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
            var data = {
                'source': this.source,
                'destination': this.destination,
                'indentID': this.indentId,
                'status': this.statusType.toString(),
                'transporter': this.transporter,
                'truckNumber': this.trckNumber,
                'truckType': this.truckType,
                'type': this.typeOfTruckReport['inventory'],
                'activity': "P",
                "reportLocation": this.reportLocation,
                "shipmentID": this.shipmentId,
                // Gate In Dates
                "fromGateInDate": this.gateInFromDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.gateInFromDate).format('DD/MM/YYYY')) : '',
                "toGateInDate": this.gateInToDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.gateInToDate).format('DD/MM/YYYY')) : '',
                // Gate Out Dates
                "fromGateOutDate": this.gateOutFromDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
                "toGateOutDate": this.gateOutToDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.gateOutToDate).format('DD/MM/YYYY')) : '',
                // Report Dates
                "fromReportDate": this.reportFromDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.reportFromDate).format('DD/MM/YYYY')) : '',
                "toReportDate": this.reportToDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.reportToDate).format('DD/MM/YYYY')) : '',
                "bayStatus": this.bayStatus,
                "destCountry": obj ? (obj.value) : '',
                "rejection": this.rejection,
                "pageLength": this.page.pageSize,
                "indentCategoryList": this.materialGrp
            };
            this.gateSecurityTruckInventoryShippingAPI(data);
        }
    };
    //gate security server side pagination
    GatesecurityTruckInventoryShippingComponent.prototype.GateSecurityDatatablePageData = function (pageInfo) {
        var _this = this;
        this.isLoading = true;
        console.log("page info", pageInfo);
        var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
        var datatabledata = {
            'index': pageInfo.offset,
            'pageLength': pageInfo.pageSize,
            'source': this.source,
            'destination': this.destination,
            'indentID': this.indentId,
            'status': this.statusType.toString(),
            'transporter': this.transporter,
            'truckNumber': this.trckNumber,
            'truckType': this.truckType,
            'type': this.typeOfTruckReport['inventory'],
            'activity': "P",
            "reportLocation": this.reportLocation,
            "shipmentID": this.shipmentId,
            // Gate In Dates
            "fromGateInDate": this.gateInFromDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.gateInFromDate).format('DD/MM/YYYY')) : '',
            "toGateInDate": this.gateInToDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.gateInToDate).format('DD/MM/YYYY')) : '',
            // Gate Out Dates
            "fromGateOutDate": this.gateOutFromDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
            "toGateOutDate": this.gateOutToDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.gateOutToDate).format('DD/MM/YYYY')) : '',
            // Report Dates
            "fromReportDate": this.reportFromDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.reportFromDate).format('DD/MM/YYYY')) : '',
            "toReportDate": this.reportToDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.reportToDate).format('DD/MM/YYYY')) : '',
            "bayStatus": this.bayStatus,
            "destCountry": obj ? (obj.value) : '',
            "rejection": this.rejection,
            "indentCategoryList": this.materialGrp
        };
        this.gateSecurityTruckInventoryShippingAPI(datatabledata);
    };
    GatesecurityTruckInventoryShippingComponent.prototype.updateValue = function (event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex);
        // this.editing[rowIndex + '-' + cell] = false;
        if ((cell == 'puc') || (cell == 'insurance') || (cell == 'seatBelt') || (cell == 'firstAid') || (cell == 'fireExtenguisher')) {
            this.gateSeuReportedTrucksIndents[rowIndex][cell] = (event.value) ? event.value : '';
        }
        else {
            this.gateSeuReportedTrucksIndents[rowIndex][cell] = (event.target) ? event.target.value : event;
        }
        this.gateSeuReportedTrucksIndents = this.gateSeuReportedTrucksIndents.slice();
        this.selected = [];
        this.selected = this.selected.concat([this.gateSeuReportedTrucksIndents[rowIndex]]);
        console.log('UPDATED!', this.gateSeuReportedTrucksIndents[rowIndex][cell]);
    };
    GatesecurityTruckInventoryShippingComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    // gate In action 
    GatesecurityTruckInventoryShippingComponent.prototype.gateInTruck = function (row, rowIndex) {
        var _this = this;
        this.isLoading = true;
        var post_URL;
        var data;
        if (row.intransitTruck) {
            // call intransit-truck-report;
            data = {
                truckNumber: row.truckNumber,
                status: "GATED_IN",
                gateControlCode: row.gateControlCode,
                destDis: row.destDis,
                destCountryName: row.destCountryName
            };
            post_URL = _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.reportIntransitTruck;
        }
        else {
            // indent-report
            data = {
                gateControlCode: row.gateControlCode,
                status: "GATED_IN",
                indentId: row.indentId,
                outWeight: Number(row.outWeight),
                destDis: row.destDis,
                destCountryName: row.destCountryName
            };
            post_URL = _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getIndentReportInfo;
        }
        // if (data.inWeight) {
        console.log(data);
        this.service.post_service(post_URL, data).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                var index = _this.gateSeuReportedTrucksIndents.indexOf(row);
                var responseData = response['data'];
                _this.gateSeuReportedTrucksIndents[index] = responseData;
                _this.gateSeuReportedTrucksIndents = _this.gateSeuReportedTrucksIndents.slice();
                _this.selected = [];
                _this.selected = _this.selected.concat([responseData]);
                _this.editing = {};
                _this.isLoading = false;
                _this.toastr.success(response['message'] ? response['message'] : "Success");
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong", "!Error");
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
        // } else {
        //   this.isLoading = false;
        //   this.toastr.error("Please enter in weight");
        // }
    };
    // gate OUT event
    GatesecurityTruckInventoryShippingComponent.prototype.gateOutTruck = function (row, rowIndex) {
        var _this = this;
        this.isLoading = true;
        if (row.gateIn) {
            // If intransitTruck is true (Intransit trucks),gate-In and gate-out APIs are different with Shipment Trucks
            var post_URL = void 0;
            var data = void 0;
            //Can gateout flag for user cam gateout 
            var canGateOut = true;
            if (row.inWeightStatus) {
                if (row.outWeightStatus) {
                    canGateOut = true;
                }
                else {
                    canGateOut = false;
                }
            }
            else {
            }
            if (row.intransitTruck) {
                // call intransit-truck-report;
                data = {
                    truckNumber: row.truckNumber,
                    status: "INTRANSIT",
                    gateControlCode: row.gateControlCode,
                    destDis: row.destDis,
                    destCountryName: row.destCountryName
                };
                post_URL = _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.reportIntransitTruck;
            }
            else {
                // indent-report
                data = {
                    gateControlCode: row.gateControlCode,
                    status: "INTRANSIT",
                    indentId: row.indentId,
                    outWeight: Number(row.outWeight),
                    destDis: row.destDis,
                    destCountryName: row.destCountryName
                };
                post_URL = _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getIndentReportInfo;
            }
            if (canGateOut) {
                this.service.post_service(post_URL, data).subscribe(function (response) {
                    console.log(response);
                    if (response['statusCode'] == 200) {
                        var index = _this.gateSeuReportedTrucksIndents.indexOf(row);
                        var responseData = response['data'];
                        _this.gateSeuReportedTrucksIndents[index] = responseData;
                        _this.gateSeuReportedTrucksIndents = _this.gateSeuReportedTrucksIndents.slice();
                        _this.selected = [];
                        _this.selected = _this.selected.concat([responseData]);
                        _this.editing = {};
                        _this.isLoading = false;
                        _this.toastr.success(response['message'] ? response['message'] : "Success");
                    }
                    else {
                        _this.isLoading = false;
                        _this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong", "!Error");
                    }
                }, function (err) {
                    console.log("Error", err);
                    _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                    _this.isLoading = false;
                });
            }
            else {
                this.isLoading = false;
                this.toastr.warning("OutWeight should be mandatory to Gateout", "! Warning");
            }
        }
        else {
            this.isLoading = false;
            this.toastr.error("Truck can't be Gated Out before Gate In");
        }
    };
    GatesecurityTruckInventoryShippingComponent.prototype.gateoutModal = function (row) {
        this.gateoutReason = '';
        this.currentObj = __assign({}, row);
        $("#gateOutRejectionModal").modal('show');
    };
    /* Just Displaying the Warning msg */
    GatesecurityTruckInventoryShippingComponent.prototype.gateoutWithoutLSModal = function (row) {
        // this.gateoutReason = '';
        // this.currentObj = { ...row }
        $("#gateoutWithoutLSModal").modal('show');
    };
    GatesecurityTruckInventoryShippingComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    GatesecurityTruckInventoryShippingComponent.prototype.gateOutReason = function (gateoutReason) {
        var _this = this;
        if (gateoutReason) {
            this.isLoading = true;
            var post_URL = void 0;
            var data = void 0;
            var canGateOut = true;
            if (this.currentObj.inWeightStatus) {
                if (this.currentObj.outWeightStatus) {
                    canGateOut = true;
                }
                else {
                    canGateOut = false;
                }
            }
            if (canGateOut) {
                data = {
                    gateControlCode: this.currentObj.gateControlCode,
                    status: "INTRANSIT",
                    indentId: this.currentObj.indentId,
                    outWeight: Number(this.currentObj.outWeight),
                    destDis: this.currentObj.destDis,
                    rejectionCode: gateoutReason,
                    destCountryName: this.currentObj.destCountryName
                };
                post_URL = _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getIndentReportInfo;
                this.service.post_service(post_URL, data).subscribe(function (response) {
                    console.log(response);
                    if (response['statusCode'] == 200) {
                        $("#gateOutRejectionModal").modal('hide');
                        var index = _this.gateSeuReportedTrucksIndents.findIndex(function (a) { return a.gateControlCode == _this.currentObj.gateControlCode; });
                        var responseData = response['data'];
                        _this.gateSeuReportedTrucksIndents[index] = responseData;
                        _this.gateSeuReportedTrucksIndents = _this.gateSeuReportedTrucksIndents.slice();
                        _this.selected = [];
                        _this.selected = _this.selected.concat([responseData]);
                        _this.editing = {};
                        _this.isLoading = false;
                        _this.toastr.success(response['message'] ? response['message'] : "Success");
                    }
                    else {
                        _this.isLoading = false;
                        _this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong", "!Error");
                    }
                }, function (err) {
                    console.log("Error", err);
                    _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                    _this.isLoading = false;
                });
            }
            else {
                this.isLoading = false;
                this.toastr.warning("OutWeight should be mandatory to Gateout", "! Warning");
            }
        }
        else {
            this.isLoading = false;
            this.toastr.warning("Please select Reason for Gateout", "! Warning");
        }
    };
    //get filter destination result
    GatesecurityTruckInventoryShippingComponent.prototype.countryOfDestinationFilter = function (event, type) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?' + type + '=' + filtervalue).subscribe(function (response) {
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
    //get filter destination result
    GatesecurityTruckInventoryShippingComponent.prototype.getfilterDestination = function (event, typeofevent, isIntransitTruck) {
        var _this = this;
        this.destinationDesc = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue + '&isIntransitTruck=' + isIntransitTruck).subscribe(function (response) {
                if (typeofevent === 'destination') {
                    _this.destinationList = response['data'].searchResult;
                }
                else {
                    _this.sourceList = response['data'].searchResult;
                }
                console.log("this.destinationList", _this.destinationList);
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter Transporter details
    GatesecurityTruckInventoryShippingComponent.prototype.getfilterTransporter = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.transporterList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?transporter=' + filtervalue).subscribe(function (response) {
                _this.transporterList = response['data'].searchResult;
                console.log("this.transporterList", _this.transporterList);
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //filterGateSecuirtyIndents Search API
    GatesecurityTruckInventoryShippingComponent.prototype.filterGateSecuirtyIndents = function () {
        var _this = this;
        this.isLoading = true;
        var data = {
            indentID: this.indentId,
            transporter: this.transporter,
            truckType: this.truckType,
            destination: this.destination
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.viewSearchIndents, data).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                _this.gateSeuReportedTrucksIndents = response['data'].indents;
                _this.gateSeuReportedTrucksIndents = _this.gateSeuReportedTrucksIndents.slice();
                _this.page.count = response['data'].total;
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
    GatesecurityTruckInventoryShippingComponent.prototype.inweightUpdate = function (row) {
        var _this = this;
        // if ((row.inWeight) && (Number(row.inWeight) !== 0)) {
        this.isLoading = true;
        var data = {
            gateControlCode: row.gateControlCode,
            indentId: row.indentId,
            status: row.status,
            inWeight: Number(row.inWeight),
            destDis: row.destDis,
            destCountryName: row.destCountryName
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.updateTruckWeight, data).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                var index = _this.gateSeuReportedTrucksIndents.indexOf(row);
                var responseData = response['data'];
                _this.gateSeuReportedTrucksIndents[index] = responseData;
                _this.gateSeuReportedTrucksIndents = _this.gateSeuReportedTrucksIndents.slice();
                _this.selected = [];
                _this.selected = _this.selected.concat([responseData]);
                _this.editing = {};
                _this.isLoading = false;
                _this.toastr.success(response['message'] ? response['message'] : "Success");
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
        // } else {
        //   this.toastr.warning("In-weight cannot be empty or 0", "!Error")
        // }
    };
    // out weight update 
    GatesecurityTruckInventoryShippingComponent.prototype.outWeightUpdate = function (row) {
        var _this = this;
        // if ((row.outWeight) && (Number(row.outWeight) !== 0)) {
        this.isLoading = true;
        var data = {
            gateControlCode: row.gateControlCode,
            indentId: row.indentId,
            status: row.status,
            outWeight: Number(row.outWeight),
            destDis: row.destDis,
            destCountryName: row.destCountryName
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.updateTruckWeight, data).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                var index = _this.gateSeuReportedTrucksIndents.indexOf(row);
                var responseData = response['data'];
                _this.gateSeuReportedTrucksIndents[index] = responseData;
                _this.gateSeuReportedTrucksIndents = _this.gateSeuReportedTrucksIndents.slice();
                _this.selected = [];
                _this.selected = _this.selected.concat([responseData]);
                _this.editing = {};
                _this.isLoading = false;
                _this.toastr.success(response['message'] ? response['message'] : "Success");
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
        // } else {
        //   this.toastr.warning("Out-weight cannot be empty or 0", "!Error")
        // }
    };
    //export excel data
    GatesecurityTruckInventoryShippingComponent.prototype.export = function () {
        var _this = this;
        if (this.gateSeuReportedTrucksIndents.length > 0) {
            this.isLoading = true;
            var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
            var data = {
                'destination': this.destination,
                'indentID': this.indentId,
                'status': this.statusType.toString(),
                'transporter': this.transporter,
                'truckNumber': this.trckNumber,
                'truckType': this.truckType,
                'type': this.typeOfTruckReport['inventory'],
                'pageLength': this.page.count,
                'source': this.source,
                "shipmentID": this.shipmentId,
                'activity': "P",
                "reportLocation": this.reportLocation,
                // Gate In Dates
                "fromGateInDate": this.gateInFromDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.gateInFromDate).format('DD/MM/YYYY')) : '',
                "toGateInDate": this.gateInToDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.gateInToDate).format('DD/MM/YYYY')) : '',
                // Gate Out Dates
                "fromGateOutDate": this.gateOutFromDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.gateOutFromDate).format('DD/MM/YYYY')) : '',
                "toGateOutDate": this.gateOutToDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.gateOutToDate).format('DD/MM/YYYY')) : '',
                // Report Dates
                "fromReportDate": this.reportFromDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.reportFromDate).format('DD/MM/YYYY')) : '',
                "toReportDate": this.reportToDate ? (moment__WEBPACK_IMPORTED_MODULE_9__(this.reportToDate).format('DD/MM/YYYY')) : '',
                "bayStatus": this.bayStatus,
                "destCountry": obj ? (obj.value) : '',
                "indentCategoryList": this.materialGrp
            };
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getTruckData, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var newViewPlanData = response['data'].truckReportsData;
                    console.log("newViewPlanData", newViewPlanData);
                    var excelRawData = newViewPlanData;
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        var data_1 = {
                            "Indent Id": excelRawData[i].indentId,
                            "Truck Number": excelRawData[i].truckNumber,
                            "Transporter": excelRawData[i].transporter,
                            "Destination": excelRawData[i].destination,
                            "Dest Description": excelRawData[i].destDis,
                            "Truck/Cont Type": excelRawData[i].truckType,
                            "Report Date": _this.service.customDateTimeFormat(excelRawData[i].reportedDate),
                            "Truck Status": excelRawData[i].status,
                            "Bay Status": excelRawData[i].bayStatus,
                            "In weight (Kg)": excelRawData[i].inWeight,
                            "Gate In": _this.service.customDateTimeFormat(excelRawData[i].gateInDate),
                            "Out weight (Kg)": excelRawData[i].outWeight,
                            "Net weight (Kg)": excelRawData[i].netWeight,
                            "SAP invoice weight (Kg)": excelRawData[i].sapInvWeight,
                            "Weight Diff (Kg)": excelRawData.diffInvWeight,
                            "Gate Out": excelRawData[i].gateOutDate,
                            "Loadslip Comments": excelRawData[i].loadslipComments,
                            "Gate Comments": excelRawData[i].comments,
                            "Rejection": excelRawData[i].rejectionStatus,
                            "Rejection Desc": excelRawData[i].rejectionDesc,
                            "Driver Name": excelRawData[i].driverName,
                            "Driver Number": excelRawData[i].driverContact,
                            "Driver License": excelRawData[i].driverLicense,
                            "Shipment Id": excelRawData[i].shipmentId,
                            "Container": excelRawData[i].containerNum,
                            "Bay Assigned": excelRawData[i].bayAssigned,
                            "SAP invoice value (INR)": excelRawData[i].sapInvValue,
                            "Eway bill No": excelRawData[i].ewayBillNo,
                            "Source": excelRawData[i].source,
                            "LR Num": excelRawData[i].lrNum,
                            "LR Date": excelRawData[i].lrDate != null ? _this.service.customDateFormat(excelRawData[i].lrDate) : null,
                            "Indent Cat": excelRawData[i].indentCategory,
                            "SAP Invoice": excelRawData[i].sapInvoice,
                            "Tot Tyre": excelRawData[i].totTyre,
                            "Tot Tube": excelRawData[i].totTube,
                            "Tot Flap": excelRawData[i].totFlap,
                            "Tot Valve": excelRawData[i].totValve,
                            "Tot PCTR": excelRawData[i].totPctr,
                            "Other Qty": excelRawData[i].otherQty,
                            "Tot Qty": excelRawData[i].totQty,
                            "Country of Destination": excelRawData[i].destCountryName,
                            "Gate Serial No": excelRawData[i].gateControlCode,
                            "PUC": (excelRawData[i].puc) ? 'Yes' : 'No',
                            "Insurance": (excelRawData[i].insurance) ? 'Yes' : 'No',
                            "Seat Belt": (excelRawData[i].seatBelt) ? 'Yes' : 'No',
                            "First Aid": (excelRawData[i].firstAid) ? 'Yes' : 'No',
                            "Fire Extenguisher": (excelRawData[i].fireExtenguisher) ? 'Yes' : 'No',
                            "Emergency Card": (excelRawData[i].emergencyCard) ? 'Yes' : 'No',
                            "Spark Arrestor": (excelRawData[i].sparKArrestor) ? 'Yes' : 'No',
                            "Fitness Certificate": (excelRawData[i].fitnessCert) ? 'Yes' : 'No',
                            "Insert User": excelRawData[i].insertUser,
                            "Update User": excelRawData[i].updateUser,
                            "Tracking Consent Status": excelRawData[i].trackingConsentStatus,
                            "Consent Phone Telecom": excelRawData[i].consentPhoneTelecom
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_5__["writeFile"](workBook, 'truckInventoryShipping.xlsx');
                    _this.isLoading = false;
                }
                else {
                    _this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
                    _this.isLoading = false;
                }
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
        else {
            this.toastr.error("No records found to export", "Error!");
        }
    };
    GatesecurityTruckInventoryShippingComponent.prototype.saveTruck = function (row) {
        var _this = this;
        this.isLoading = true;
        var data = {
            containerNum: row.containerNum,
            driverContact: row.driverContact,
            driverLicense: row.driverLicense,
            driverName: row.driverName,
            gateControlCode: row.gateControlCode,
            indentId: row.indentId,
            truckNumber: row.truckNumber,
            destDesc: row.destDis,
            truckType: row.truckType,
            editIndentId: this.newIndent ? this.newIndent : null,
            destCountryName: row.destCountryName,
            puc: row.puc,
            insurance: row.insurance,
            seatBelt: row.seatBelt,
            firstAid: row.firstAid,
            fireExtenguisher: row.fireExtenguisher,
            emergencyCard: row.emergencyCard,
            sparKArrestor: row.sparKArrestor,
            fitnessCert: row.fitnessCert,
            trackingConsentStatus: row.trackingConsentStatus
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.updateTruckInventoryDetails, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                //Update data for FGS ROLE
                var replacebleIndex = _this.gateSeuReportedTrucksIndents.findIndex(function (rawData) { return rawData.gateControlCode == data.gateControlCode; });
                _this.editing = {};
                _this.editingFgs = {};
                var responseData = response['data'];
                _this.gateSeuReportedTrucksIndents[replacebleIndex] = responseData;
                _this.gateSeuReportedTrucksIndents = _this.gateSeuReportedTrucksIndents.slice();
                _this.selected = [];
                _this.selected = _this.selected.concat([responseData]);
                _this.isLoading = false;
                _this.destinationList = [];
                _this.destIndentList = [];
                _this.toastr.success(response['message']);
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
                _this.isLoading = false;
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // view loadslips for cooresponding shipment Id
    GatesecurityTruckInventoryShippingComponent.prototype.viewLoadslip = function (shipmentNumber, view) {
        var _this = this;
        this.isLoading = true;
        this.loadSlipType = view;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.openLoadslipDetails + "?shipmentId=" + shipmentNumber).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                if (response['data']) {
                    _this.loadslipList = response['data'];
                    if (_this.loadslipList.length == 1) {
                        _this.viewLoadslipnavigation(_this.loadslipList[0]);
                    }
                    else if (_this.loadslipList.length > 1) {
                        $("#loadslipsModal").modal('show');
                    }
                }
                _this.isLoading = false;
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
                _this.isLoading = false;
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //set value destination
    GatesecurityTruckInventoryShippingComponent.prototype.setDestination = function (value) {
        //  this.destinationDesc = value;
        this.destination = value;
    };
    //set value to destination description
    GatesecurityTruckInventoryShippingComponent.prototype.setDestDescription = function (value) {
        this.destinationDesc = value;
    };
    GatesecurityTruckInventoryShippingComponent.prototype.getUserDestinationList = function (event) {
        var _this = this;
        this.destination = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getDestinationDescriptionDataList + event.target.value).subscribe(function (response) {
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
    // loadslipInvoice(shipmentNumber) {
    //   this.viewLoadslip(shipmentNumber);
    // }
    // Navigate to loadslip view
    GatesecurityTruckInventoryShippingComponent.prototype.viewLoadslipnavigation = function (item) {
        $("#loadslipsModal").modal('hide');
        var loadSlipId = item['loadlipId'];
        var type = item.type;
        if (this.loadSlipType == 'loadslipView') {
            if (type == 'FGS_EXP') {
                this.router.navigate(['/load-slip-view-for-export/' + loadSlipId], { queryParams: { menuName: localStorage.getItem('userMenu') } });
            }
            else if (type == 'JIT_OEM') {
                this.router.navigate(['/load-slip-view-for-jit/' + loadSlipId], { queryParams: { menuName: localStorage.getItem('userMenu') } });
            }
            else {
                this.router.navigate(['/load-slip-view/' + loadSlipId], { queryParams: { menuName: localStorage.getItem('userMenu') } });
            }
        }
        else {
            this.router.navigate(['/load-slip-qty-view/' + loadSlipId], { queryParams: { menuName: localStorage.getItem('userMenu') } });
        }
    };
    GatesecurityTruckInventoryShippingComponent.prototype.showComments = function (comment, row) {
        this.truckComments = comment;
        this.rowData = row;
        $("#myModal").modal('show');
    };
    GatesecurityTruckInventoryShippingComponent.prototype.showLoadslipComments = function (comments) {
        this.loadslipComments = comments;
        $("#commentModal").modal('show');
    };
    GatesecurityTruckInventoryShippingComponent.prototype.save = function (form) {
        var _this = this;
        if (form.valid) {
            this.isLoading = true;
            // let data = {
            //   "comments": this.truckComments,
            //   "gateControlCode": this.rowloadslipId
            // }
            // Sending the entire ROW to the backend
            var data = this.rowData;
            data.comments = this.truckComments;
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.saveTruckComments, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    _this.isLoading = false;
                    var index = _this.gateSeuReportedTrucksIndents.findIndex(function (item) { return item.gateControlCode == response['data'].gateControlCode; });
                    _this.gateSeuReportedTrucksIndents[index] = response['data'];
                    _this.gateSeuReportedTrucksIndents = _this.gateSeuReportedTrucksIndents.slice();
                    var responseData = _this.gateSeuReportedTrucksIndents[index];
                    _this.selected = [];
                    _this.selected = _this.selected.concat([responseData]);
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
    // Edit Truck Destination Code
    // getIndentsFromDest(row, selectedDest) {
    //   if (selectedDest) {
    //     this.isLoading = true;
    //     let body={};
    //     this.service.post_service(ApiserviceService.apisList.getIndentFromDest+'?location='+selectedDest.value, body ).subscribe(response => {
    //       if (response['statusCode'] == 200) {
    //         if (response['data'].length > 0) {
    //           this.isLoading = false;
    //           this.destIndentList = response['data'];
    //           row.destination = selectedDest.value;
    //           $('#destIndentModal').modal('show');
    //         } else {
    //           this.isLoading = false;
    //           this.toastr.error("No Indents found for selected Destination..", "Error!");
    //         }
    //       } else {
    //         this.isLoading = false;
    //         this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
    //       }
    //     }, err => {
    //       this.isLoading = false;
    //       this.toastr.error(err ? err : "Something went wrong..", "Error!");
    //     })
    //   }
    // }
    GatesecurityTruckInventoryShippingComponent.prototype.setSelectedIndent = function (selectedIndent) {
        // if (selectedIndent) {
        //   this.newIndent = selectedIndent;
        //   $('#destIndentModal').modal('hide');
        //   console.log("new Indent Id-------->", this.newIndent);
        // }
    };
    GatesecurityTruckInventoryShippingComponent.prototype.addEvent = function (type, event) {
        console.log(event.target.value);
        if (event.target.value) {
            /* Checking if selected from date greater than to date.
          Clearing the toDate field when from date greater than to date */
            switch (type) {
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
                    if (this.reportToDate && (this.reportFromDate > this.reportToDate)) {
                        this.reportToDate = '';
                    }
                    // this.reportToDate = '';
                    break;
                default:
                    break;
            }
        }
    };
    //for getting category master data
    GatesecurityTruckInventoryShippingComponent.prototype.getCategoryMasterData = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.categoryMasterData).subscribe(function (response) {
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
    GatesecurityTruckInventoryShippingComponent.prototype.checkConsent = function (row) {
        var _this = this;
        row.trackingConsentStatus = 'RETRYING';
        this.saveTruck(row);
        (function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"])
    ], GatesecurityTruckInventoryShippingComponent.prototype, "table", void 0);
    GatesecurityTruckInventoryShippingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gatesecurity-truck-inventory-shipping',
            template: __webpack_require__(/*! ./gatesecurity-truck-inventory-shipping.component.html */ "./src/app/gate-security/gatesecurity-truck-inventory-shipping/gatesecurity-truck-inventory-shipping.component.html"),
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_8__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], useValue: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_8__["APP_DATE_FORMATS"]
                }
            ]
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__["HelperServiceService"]])
    ], GatesecurityTruckInventoryShippingComponent);
    return GatesecurityTruckInventoryShippingComponent;
}());



/***/ }),

/***/ "./src/app/gate-security/gatesecurity-truck-inventory-shipping/gatesecurity-truck-inventory-shipping.module.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/gate-security/gatesecurity-truck-inventory-shipping/gatesecurity-truck-inventory-shipping.module.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: gatesecurityTruckInventoryShippingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gatesecurityTruckInventoryShippingModule", function() { return gatesecurityTruckInventoryShippingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
/* harmony import */ var _gatesecurity_truck_inventory_shipping_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gatesecurity-truck-inventory-shipping.component */ "./src/app/gate-security/gatesecurity-truck-inventory-shipping/gatesecurity-truck-inventory-shipping.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _gatesecurity_truck_inventory_shipping_component__WEBPACK_IMPORTED_MODULE_8__["GatesecurityTruckInventoryShippingComponent"] },
];
var gatesecurityTruckInventoryShippingModule = /** @class */ (function () {
    function gatesecurityTruckInventoryShippingModule() {
    }
    gatesecurityTruckInventoryShippingModule = __decorate([
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
                _gatesecurity_truck_inventory_shipping_component__WEBPACK_IMPORTED_MODULE_8__["GatesecurityTruckInventoryShippingComponent"]
            ]
        })
    ], gatesecurityTruckInventoryShippingModule);
    return gatesecurityTruckInventoryShippingModule;
}());



/***/ })

}]);
//# sourceMappingURL=gate-security-gatesecurity-truck-inventory-shipping-gatesecurity-truck-inventory-shipping-module.js.map