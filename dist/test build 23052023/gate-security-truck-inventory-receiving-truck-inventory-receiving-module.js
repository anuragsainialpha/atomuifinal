(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gate-security-truck-inventory-receiving-truck-inventory-receiving-module"],{

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

/***/ "./src/app/gate-security/truck-inventory-receiving/truck-inventory-receiving.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/gate-security/truck-inventory-receiving/truck-inventory-receiving.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\">\n</app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    <b>Truck status > Truck Inventory > Receiving</b>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"Filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n  <div class=\"clearfix\"></div>\n  <div class=\"manualplan-fields\" *ngIf=\"isShow\">\n      <form (submit)=\"rdcFilterSearch()\">\n    <div class=\"col-md-12 row\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row \">\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-2 pr-0 pl-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput aria-label=\"Source\" placeholder=\"Source\"\n                      (keyup)=\"getfilterDestination($event,'source', !isIntransitTruck)\" autocomplete=\"off\"\n                      [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"source\" name=\"source\" oninput=\"this.value = this.value.toUpperCase()\">\n                    <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                        <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n              <!-- <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput aria-label=\"Destination\" placeholder=\"Destination\" (keyup)=\"getfilterDestination($event,'destination')\" autocomplete=\"off\"\n                      [matAutocomplete]=\"destinationAutocomplete\" [(ngModel)]=\"destination\" name=\"destination\">\n                    <mat-autocomplete #destinationAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\">\n                        <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div> -->\n\n              <div class=\"col-md-2 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n                      [(ngModel)]=\"destination\" name=\"destination\" oninput=\"this.value = this.value.toUpperCase()\"\n                       (keyup)=\"getfilterDestination($event,'destination', isIntransitTruck)\">\n                    <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\"\n                        (click)=\"setDestDescription(list.description)\"\n                        (onSelectionChange)=\"setDestDescription(list.description)\">\n                        <span>{{list.value}}</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-4 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Destination Description\" aria-label=\"destinationDesc\"\n                      [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destinationDesc\"\n                      (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                    <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                        (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                        <span>({{list.description}})</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n\n              <div class=\"col-md-4 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"Truck/Container Type\" [(ngModel)]=\"truckType\" name=\"truckType\" multiple>\n                      <!-- <mat-option [value]=\"\">None</mat-option> -->\n                      <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n\n\n\n\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-3 pr-0\">\n                <mat-form-field>\n                  <input matInput aria-label=\"Country of Destination\" placeholder=\"Country of Destination\"\n                    (keyup)=\"countryOfDestinationFilter($event,'destCountrySearch')\" autocomplete=\"off\"\n                    [matAutocomplete]=\"dischargeAutocomplete\" [(ngModel)]=\"destCountryName\" name=\"destCountryName\" oninput=\"this.value = this.value.toUpperCase()\">\n                  <mat-autocomplete #dischargeAutocomplete=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let country of countryList\" [value]=\"country.description\">\n                      <span matTooltip={{country.description}}>{{country.value}} - ({{country.description}})</span>\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <mat-form-field>\n                  <input matInput [(ngModel)]=\"trckNumber\" name=\"truck number\" autocomplete=\"off\"\n                    placeholder=\"Truck Number\" oninput=\"this.value = this.value.toUpperCase()\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput aria-label=\"transporter\" placeholder=\"Transporter\"\n                      (keyup)=\"getfilterTransporter($event)\" autocomplete=\"off\"\n                      [matAutocomplete]=\"transporterAutocomplete\" [(ngModel)]=\"transporter\" name=\"transporter\" oninput=\"this.value = this.value.toUpperCase()\">\n                    <mat-autocomplete #transporterAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of transporterList\" [value]=\"list.value\">\n                        <span>{{list.value}}</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <mat-form-field>\n                  <input matInput [(ngModel)]=\"shipmentId\" name=\"shipment\" autocomplete=\"off\" placeholder=\"Shipment Id\" oninput=\"this.value = this.value.toUpperCase()\">\n                </mat-form-field>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-3 pl-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput [(ngModel)]=\"indentId\" name=\"indentid\" placeholder=\"Indent Id\" autocomplete=\"off\" oninput=\"this.value = this.value.toUpperCase()\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput [min]=\"minDate\" placeholder=\"Gate In From Date\" disabled\n                      [matDatepicker]=\"gateInFromDatePicker\" autocomplete=\"off\" [(ngModel)]=\"gateInFromDate\"\n                      (dateChange)=\"addEvent('gateInDate', $event)\" name=\"gateInToDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"gateInFromDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #gateInFromDatePicker disabled=\"false\"></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <mat-form-field>\n                  <input matInput [min]=\"gateInFromDate\" placeholder=\"Gate In To Date\" disabled\n                    [matDatepicker]=\"gateInToDatePicker\" autocomplete=\"off\" [(ngModel)]=\"gateInToDate\"\n                    name=\"gateInToDate\">\n                  <mat-datepicker-toggle matSuffix [for]=\"gateInToDatePicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #gateInToDatePicker [disabled]=\"!gateInFromDate\"></mat-datepicker>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput [min]=\"minDate\" placeholder=\"Rep From Date\" disabled\n                      [matDatepicker]=\"reportFromDatePicker\" autocomplete=\"off\" [(ngModel)]=\"reportFromDate\"\n                      (dateChange)=\"addEvent('repFromDate', $event)\" name=\"reportfromDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"reportFromDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #reportFromDatePicker disabled=\"false\"></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n\n\n              <!-- <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput [min]=\"minDate\" placeholder=\"Gate Out From Date\" disabled [matDatepicker]=\"gateOutFromDatePicker\"\n                      autocomplete=\"off\" [(ngModel)]=\"gateOutFromDate\" (dateChange)=\"addEvent('gateOutDate', $event)\"\n                      name=\"gateoutFromDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"gateOutFromDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #gateOutFromDatePicker disabled=\"false\"></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <mat-form-field>\n                  <input matInput [min]=\"gateOutFromDate\" placeholder=\"Gate Out To Date\" disabled [matDatepicker]=\"gateOutToDatePicker\"\n                    autocomplete=\"off\" [(ngModel)]=\"gateOutToDate\" name=\"gateoutToDate\">\n                  <mat-datepicker-toggle matSuffix [for]=\"gateOutToDatePicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #gateOutToDatePicker [disabled]=\"!gateOutFromDate\"></mat-datepicker>\n                </mat-form-field>\n              </div> -->\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput [min]=\"reportFromDate\" placeholder=\"Rep To Date\" disabled\n                      [matDatepicker]=\"reportToDatePicker\" autocomplete=\"off\" [(ngModel)]=\"reportToDate\"\n                      name=\"reportToDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"reportToDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #reportToDatePicker [disabled]=\"!reportFromDate\"></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-2 pr-0\">\n                <mat-form-field>\n                  <mat-select placeholder=\"Bay Status\" [(ngModel)]=\"bayStatus\" name=\"bayStatus\" multiple>\n                    <!-- <mat-option [value]=\"\">None</mat-option> -->\n                    <mat-option *ngFor=\"let item of baystatusList\" [value]=\"item\"> {{item}} </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <mat-form-field>\n                  <mat-select placeholder=\"Select Status\" name=\"status\" autocomplete=\"off\" [(ngModel)]=\"statusType\" multiple>\n                    <!-- <mat-option [value]=\"\">None</mat-option> -->\n                    <mat-option *ngFor=\"let status of reportTruckStatusList\" [value]=\"status.value\">\n                      {{status.key}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" type=\"submit\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" type=\"button\" (click)=\"clearData()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n      </form>\n  </div>\n\n\n\n  <!-- Datatable for RDC Operations Role -->\n  <ngx-datatable #table class='material  ngx-table-custom-scroll ngx-table-tr-custom-scroll' [rows]='rdcPlannerInventoryData'\n    [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [limit]=\"rdcPlannerPage.limit\"\n    [scrollbarH]=\"true\" [selected]=\"selected\" [selectionType]=\"'single'\" (select)='onSelect($event)'\n    [count]=\"rdcPlannerPage.count\" [offset]=\"rdcPlannerPage.offset\" [externalPaging]=\"true\"\n    (page)=\"rdcGatesecurityDatetablePageData($event)\">\n    <ngx-datatable-column [frozenLeft]=\"true\" name=\"Truck Number\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"truckNumber\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckNumber | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column [frozenLeft]=\"true\" name=\"Source\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"source\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.source}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column [frozenLeft]=\"true\" name=\"Dest\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"destination\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destination}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column [frozenLeft]=\"true\" name=\"ShipmentId\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"shipmentId\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.shipmentId | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Dest Description\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destDis\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destDis}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Container\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"containerNum\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.containerNum | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Truck Type\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckType\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckType | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Transporter\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"transporter\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.transporter | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Country of Destination\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"destCountryName\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destCountryName}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Indent Id\" [width]=\"170\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"indentId\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.indentId}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Driver Name\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"driverName\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.driverName}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Driver Number\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"driverContact\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.driverContact}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Report Date\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"reportedDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.reportedDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Gate In\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"gateInDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span>{{row.gateInDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Unloading Start\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"loadslipUSDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <!--  DR_REP role user only view data can't edit data -->\n        <!-- DP_REP ROLE -->\n        <ng-container *ngIf=\"(isDPREPRole());else otherUsersUNST\">\n          <span>{{row.loadslipUSDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span>\n        </ng-container>\n        <ng-template #otherUsersUNST>\n          <!--  for other user other than DP_REP -->\n          <ng-container *ngIf=\"(row.loadslipUSDate == null)\">\n            <button mat-raised-button color=\"primary\" (click)=\"eventTrigger(row,'UNLOADING')\" class=\"table-btn\"\n              [disabled]=\"!(row.gateInDate)\">Unloading Start</button>\n          </ng-container>\n          <ng-container *ngIf=\"(row.loadslipUSDate != null)\">\n            <span>{{row.loadslipUSDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span>\n          </ng-container>\n        </ng-template>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Unloading End\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"loadslipUEDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <!--  DR_REP role user only view data can't edit data -->\n        <!-- DP_REP ROLE -->\n        <ng-container *ngIf=\"(isDPREPRole());else otherUsersUNED\">\n          <span>{{row.loadslipUEDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span>\n        </ng-container>\n        <ng-template #otherUsersUNED>\n          <!--  for other user other than DP_REP -->\n          <ng-container *ngIf=\"(row.loadslipUEDate == null)\">\n            <button mat-raised-button color=\"primary\" (click)=\"eventTrigger(row,'DELIVERED')\" class=\"table-btn\"\n              [disabled]=\"!(row.gateInDate)\">Unloading End</button>\n          </ng-container>\n          <ng-container *ngIf=\"(row.loadslipUEDate != null)\">\n            <span>{{row.loadslipUEDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span>\n          </ng-container>\n        </ng-template>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Gate Out\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"gateOutDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span>{{row.gateOutDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm' }}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Release\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"bayStatus\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <!--  DR_REP role user only view data can't edit data -->\n        <!-- DP_REP ROLE -->\n        <ng-container *ngIf=\"(isDPREPRole());else otherUsersRELEASE\">\n          <span>{{row.bayStatus}}</span>\n        </ng-container>\n        <!--  for other user other than DP_REP -->\n        <ng-template #otherUsersRELEASE>\n          <ng-container *ngIf=\"(row.bayStatus != 'RELEASE')\">\n            <button mat-raised-button color=\"primary\" (click)=\"eventTrigger(row,'RELEASED')\"\n              class=\"table-btn\">Release</button>\n          </ng-container>\n          <ng-container *ngIf=\"(row.bayStatus == 'RELEASE')\">\n            <span>RELEASED</span>\n          </ng-container>\n        </ng-template>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Rejection\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"rejectionStatus\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.rejectionStatus}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Rejection Desc\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"rejectionDesc\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.rejectionDesc}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Bay\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"bayAssigned\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <!--  DR_REP role user only view data can't edit data -->\n        <!-- DP_REP ROLE -->\n        <ng-container *ngIf=\"(isDPREPRole());else otherUsersBAY\">\n          <span>{{row.bayAssigned}}</span>\n        </ng-container>\n        <ng-template #otherUsersBAY>\n          <!--  for other user other than DP_REP -->\n          <div class=\"edit-field\" title=\"Double click to edit\"\n            (click)=\"editingRDCpln[rowIndex + '-bayAssigned'] = true\"\n            *ngIf=\"!editingRDCpln[rowIndex + '-bayAssigned']\">\n            <span class=\"edit-label\">{{row.bayAssigned?row.bayAssigned:'None'}}</span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <ng-container *ngIf=\"editingRDCpln[rowIndex+ '-bayAssigned']\">\n            <!-- <mat-form-field>\n              <mat-select (selectionChange)=\"updateRDCplanValue($event, 'bayAssigned', rowIndex,row)\">\n                <mat-option value=\"\">None</mat-option>\n                <mat-option *ngFor=\"let data of plantBayList\" [value]=\"data\">\n                  {{data}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field> -->\n            <select (change)=\"updateRDCplanValue($event, 'bayAssigned', rowIndex,row)\"\n              *ngIf=\"editingRDCpln[rowIndex+ '-bayAssigned']\">\n              <option value=\"\">None</option>\n              <option *ngFor=\"let data of plantBayList\" [value]=\"data\">{{data}}</option>\n            </select>\n          </ng-container>\n        </ng-template>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Bay Status\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"callStatus\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-row=\"row\">\n        <!--  DR_REP role user only view data can't edit data -->\n        <!-- DP_REP ROLE -->\n        <ng-container *ngIf=\"(isDPREPRole());else otherUsersBAYSTATUS\">\n          <span [ngClass]=\"{'btn btn-sm lightgreen-button':row.bayStatus == 'CALL'}\">{{row.bayStatus == 'CALL' ?\n            'Called':row.bayStatus}}</span>\n        </ng-container>\n        <ng-template #otherUsersBAYSTATUS>\n          <!--  for other user other than DP_REP -->\n          <div class=\"text-center\">\n            <ng-container *ngIf=\"row.bayStatus == '' || row.bayStatus == null\">\n              <button mat-raised-button color=\"primary\" class=\"table-btn\" (click)=\"callGateSecurity(row)\">Call</button>\n            </ng-container>\n            <ng-container *ngIf=\"row.bayStatus != ''\">\n              <span [ngClass]=\"{'btn btn-sm lightgreen-button':row.bayStatus == 'CALL'}\">{{row.bayStatus == 'CALL'\n                ?'Called':row.bayStatus}}</span>\n            </ng-container>\n          </div>\n        </ng-template>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Truck Status\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"status\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.status}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"In weight (Kg)\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"inWeight\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        {{row.inWeight?row.inWeight:'--'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Out Weight (Kg)\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"outWeight\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        {{row.outWeight?row.outWeight:'--'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Net Weight (Kg)\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"netWeight\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.netWeight}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"SAP invoice weight(Kg)\" [width]=\"100\" [resizeable]=\"false\" prop=\"sapInvWeight\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvWeight}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Weight Diff (Kg)\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"diffInvWeight\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <span [ngClass]=\"(row.weightDiffStatus)?'text-danger':''\">{{row.diffInvWeight}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"SAP invoice value(INR)\" [width]=\"100\" [resizeable]=\"false\" prop=\"dropSeq\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvValue}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Eway bill No\" [width]=\"100\" [resizeable]=\"false\" prop=\"ewayBillNo\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.ewayBillNo}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Loadslip Comments\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"loadslipComments\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <!-- <button class=\"theme-small-button\" matTooltip=\"loadslipComments\" (click)=\"viewComments(row.loadslipComments,'loadslip')\"\n          *ngIf=\"(row.loadslipComments)\">\n          <i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>\n        </button> -->\n        <div class=\"edit-field\" [title]=\"row.loadslipComments\"\n          [ngClass]=\"{'cursor-pointer':row.loadslipComments?.length>8}\"\n          (click)=\"viewComments(row.loadslipComments,'loadslip')\" *ngIf=\"(row.loadslipComments)\">\n          <span class=\"edit-label\">{{ (row.loadslipComments?.length>9)? (row.loadslipComments |\n            slice:0:9)+'..':(row.loadslipComments)}}\n          </span>\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Gate Comments\" [width]=\"100\" [resizeable]=\"false\" prop=\"comments\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <!--  DR_REP role user only view data can't edit data -->\n        <!-- DP_REP ROLE -->\n        <ng-container *ngIf=\"(isDPREPRole());else otherUsersCOMMENTS\">\n          <!-- <button class=\"theme-small-button\" matTooltip=\"Comments\" (click)=\"viewComments(row.comments,'comments')\"\n            *ngIf=\"(row.comments)\">\n            <i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>\n          </button> -->\n          <div class=\"edit-field\" [title]=\"row.comments\" [ngClass]=\"{'cursor-pointer':row.comments?.length>9}\"\n            (click)=\"viewComments(row.comments,'comments')\" *ngIf=\"(row.comments)\">\n            <span class=\"edit-label\">{{ (row.comments?.length>9)? (row.comments | slice:0:9)+'..':(row.comments)}}\n            </span>\n          </div>\n        </ng-container>\n        <ng-template #otherUsersCOMMENTS>\n          <!--  for other user other than DP_REP -->\n          <div class=\"edit-field\" [title]=\"row.comments\">\n            <span class=\"edit-label\">{{ (row.comments?.length>6)? (row.comments | slice:0:6)+'..':(row.comments)}}\n            </span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"showComments(row.comments,row.gateControlCode)\"></i>\n          </div>\n        </ng-template>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Insert User\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"insertUser\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.insertUser}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Update User\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"updateUser\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.updateUser}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Loadslips\" [width]=\"220\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"report\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <ng-container>\n          <button mat-raised-button color=\"primary\" [disabled]=\"!row.shipmentId\"\n            (click)=\"viewLoadslip(row.shipmentId,'loadslipView')\" class=\"table-btn mr-10\">View\n            Loadslips\n          </button>\n          <button mat-raised-button color=\"primary\" [disabled]=\"!row.shipmentId\"\n            (click)=\"viewLoadslip(row.shipmentId,'invoiceView')\" class=\"table-btn\">LoadSlip\n            Invoice\n          </button>\n        </ng-container>\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- <ngx-datatable-column name=\"Action\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"netWeight\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <button mat-raised-button color=\"primary\" class=\"table-btn\" (click)=\"rejectTruck(row)\" [disabled]=\"(row.rejectionStatus) == 'REJECTED'\">\n          Reject Truck\n        </button>\n      </ng-template>\n    </ngx-datatable-column> -->\n    <!-- Footer Template starts -->\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedCount\">\n            {{selectedCount.toLocaleString()}} Selected |\n          </span>\n          Showing {{(offset * pageSize)+1}} to {{(rowCount>\n          (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n          {{(rowCount)}} records.\n        </div>\n        <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n          [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n          [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n          (change)=\"table.onFooterPage($event)\">\n        </datatable-pager>\n      </ng-template>\n    </ngx-datatable-footer>\n    <!-- Footer Template Ends -->\n  </ngx-datatable>\n</div>\n\n\n<!-- View Loadslips  for coorsponding shipment -->\n<div class=\"modal\" id=\"loadslipsModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Loadslip List</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <ul>\n          <li *ngFor=\"let item of loadslipList;let i=index\">\n            <span>\n              {{i+1}})\n              <span class=\"link\" style=\"margin-left: 10px;margin-right: 50px\"\n                (click)=\"viewLoadslipnavigation(item)\">{{item.loadlipId}}\n              </span>\n              <span>\n                {{item.type}}\n              </span>\n            </span>\n          </li>\n        </ul>\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form name=\"form\" #f=\"ngForm\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Truck Inventory Comments</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n              <input matInput placeholder=\"Loadslip Comments\" aria-label=\"State\" [(ngModel)]=\"truckComments\"\n                name=\"Comments\" #comments=\"ngModel\" autocomplete=\"off\">\n              <!-- <mat-error *ngIf=\"(f.submitted && comments.invalid)\">\n                <p *ngIf=\"comments.errors.required\">Comment is\n                  <strong>required</strong>\n                </p>\n              </mat-error> -->\n            </mat-form-field>\n          </div>\n        </div>\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <!-- <button type=\"button\" class=\"btn btn-danger\" >Close</button> -->\n          <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"save(f)\">Save</button>\n          <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\"\n            data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<!-- View Loadslips  for coorsponding shipment -->\n<div class=\"modal\" id=\"commentModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{commentHeader}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <p>{{commentMsg}}</p>\n      </div>\n      <!-- Modal footer -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/gate-security/truck-inventory-receiving/truck-inventory-receiving.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/gate-security/truck-inventory-receiving/truck-inventory-receiving.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhdGUtc2VjdXJpdHkvdHJ1Y2staW52ZW50b3J5LXJlY2VpdmluZy90cnVjay1pbnZlbnRvcnktcmVjZWl2aW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/gate-security/truck-inventory-receiving/truck-inventory-receiving.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/gate-security/truck-inventory-receiving/truck-inventory-receiving.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TruckInventoryReceivingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckInventoryReceivingComponent", function() { return TruckInventoryReceivingComponent; });
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TruckInventoryReceivingComponent = /** @class */ (function () {
    function TruckInventoryReceivingComponent(service, toastr, router, helperService) {
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
        this.rdcPlannerPage = {
            limit: 10,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 100
        };
        this.isShow = true;
        this.truckType = [];
        this.descriptionList = [];
        this.typeOfTruckReport = {};
        this.reportTruckStatusList = [];
        this.statusType = [];
        this.rdcPlannerInventoryData = [];
        this.truckList = [];
        this.loadslipList = [];
        this.baystatusList = [];
        this.bayStatus = [];
        this.selected = [];
        this.isIntransitTruck = true;
        this.userRoles = src_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].roles;
        this.typeOfTruckReport = src_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].truckReportTypes;
        this.reportLocation = localStorage.getItem('sourceID');
        this.baystatusList = src_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].bayStatusList;
        this.reportTruckStatusList = src_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].rdcTruckReportStatus;
    }
    TruckInventoryReceivingComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.setItem("userMenu", "fgs-truck-status");
        // for getting truck type master
        this.getTruckTypeMasterData();
        this.selected = [];
        var data = {
            // status: rdcReportTruckStatus.reported + "," + rdcReportTruckStatus.gateIn + ","+ rdcReportTruckStatus.unloading_end + "," + rdcReportTruckStatus.unloading_start
            'type': this.typeOfTruckReport['inventory'],
            'activity': "D",
            "reportLocation": this.reportLocation
        };
        this.truckInventoryReceivingAPI(data);
        if ((this.service.checkRole() == this.userRoles.rdc_PLN) || (this.service.checkRole() == this.userRoles.fgsOperations1)) {
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getPlanByInfo).subscribe(function (response) {
                console.log(response);
                _this.plantBayList = response['data'];
            });
        }
    };
    // Checking if the logged in role is DP_REP or L1_MGR or L2_MGR
    TruckInventoryReceivingComponent.prototype.isDPREPRole = function () {
        var currentRole = this.service.checkRole();
        if (currentRole == this.userRoles.planner3 || currentRole == this.userRoles.L1MGR || currentRole == this.userRoles.L2MGR) {
            return true;
        }
        else {
            return false;
        }
    };
    TruckInventoryReceivingComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    TruckInventoryReceivingComponent.prototype.truckInventoryReceivingAPI = function (data) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getTruckData, data).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                _this.selected = [];
                _this.rdcPlannerInventoryData = response['data'].truckReportsData;
                _this.rdcPlannerInventoryData = _this.rdcPlannerInventoryData.slice();
                _this.rdcPlannerPage.limit = response['data'].pageLength;
                _this.rdcPlannerPage.count = response['data'].total;
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
    TruckInventoryReceivingComponent.prototype.getTruckTypeMasterData = function () {
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
    //clear data
    TruckInventoryReceivingComponent.prototype.clearData = function () {
        this.destination = '';
        this.indentId = "";
        this.statusType = [];
        this.transporter = "";
        this.trckNumber = "";
        this.truckType = [];
        this.destinationDesc = "";
        this.descriptionList = [];
        this.destinationList = [];
        this.transporterList = [];
        this.source = '';
        this.gateInFromDate = '';
        this.gateInToDate = '';
        this.gateOutFromDate = '';
        this.gateOutToDate = '';
        this.reportFromDate = '';
        this.reportToDate = '';
        this.shipmentId = '';
        this.bayStatus = [];
        this.destCountryName = '';
        this.countryList = [];
    };
    //refersh data 
    TruckInventoryReceivingComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.clearData();
        this.source = '';
        this.selected = [];
        // refresh data API for RDC Operationd & gateSecurity 
        this.reportTruckStatusList = src_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].rdcTruckReportStatus;
        var data = {
            // status: rdcReportTruckStatus.reported + "," + rdcReportTruckStatus.gateIn + ","+ rdcReportTruckStatus.unloading_end + "," + rdcReportTruckStatus.unloading_start
            'type': this.typeOfTruckReport['inventory'],
            'activity': "D",
            "reportLocation": this.reportLocation
        };
        this.truckInventoryReceivingAPI(data);
    };
    //RDC filter search
    TruckInventoryReceivingComponent.prototype.rdcFilterSearch = function () {
        var _this = this;
        if (this.helperService.getDateValidations(this.gateInFromDate, this.gateInToDate, this.gateOutFromDate, this.gateOutToDate, this.reportFromDate, this.reportToDate)) {
            this.table.offset = 0;
            var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
            var data = {
                destination: this.destination,
                indentID: this.indentId,
                status: this.statusType.toString(),
                transporter: this.transporter,
                truckNumber: this.trckNumber,
                truckType: this.truckType,
                type: this.typeOfTruckReport["inventory"],
                source: this.source,
                activity: "D",
                reportLocation: this.reportLocation,
                shipmentID: this.shipmentId,
                bayStatus: this.bayStatus,
                // Gate In Dates
                fromGateInDate: this.gateInFromDate
                    ? moment__WEBPACK_IMPORTED_MODULE_9__(this.gateInFromDate).format("DD/MM/YYYY")
                    : "",
                toGateInDate: this.gateInToDate
                    ? moment__WEBPACK_IMPORTED_MODULE_9__(this.gateInToDate).format("DD/MM/YYYY")
                    : "",
                // Gate Out Dates
                fromGateOutDate: this.gateOutFromDate
                    ? moment__WEBPACK_IMPORTED_MODULE_9__(this.gateOutFromDate).format("DD/MM/YYYY")
                    : "",
                toGateOutDate: this.gateOutToDate
                    ? moment__WEBPACK_IMPORTED_MODULE_9__(this.gateOutToDate).format("DD/MM/YYYY")
                    : "",
                // Report Dates
                fromReportDate: this.reportFromDate
                    ? moment__WEBPACK_IMPORTED_MODULE_9__(this.reportFromDate).format("DD/MM/YYYY")
                    : "",
                toReportDate: this.reportToDate
                    ? moment__WEBPACK_IMPORTED_MODULE_9__(this.reportToDate).format("DD/MM/YYYY")
                    : "",
                "destCountry": obj ? (obj.value) : ''
            };
            this.truckInventoryReceivingAPI(data);
        }
    };
    TruckInventoryReceivingComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log('Select Event', selected, this.selected);
    };
    TruckInventoryReceivingComponent.prototype.rdcGatesecurityDatetablePageData = function (pageInfo) {
        var _this = this;
        // this.isLoading = true;
        console.log("page info", pageInfo);
        var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
        var datatabledata = {
            "index": pageInfo.offset,
            "pageLength": pageInfo.pageSize,
            "destination": this.destination,
            "indentID": this.indentId,
            "status": this.statusType.toString(),
            "transporter": this.transporter,
            "truckNumber": this.trckNumber,
            "truckType": this.truckType,
            "reportLocation": this.reportLocation,
            "bayStatus": this.bayStatus,
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
            "destCountry": obj ? (obj.value) : ''
        };
        this.truckInventoryReceivingAPI(datatabledata);
    };
    TruckInventoryReceivingComponent.prototype.updateRDCplanValue = function (event, cell, rowIndex, row) {
        console.log('inline editing rowIndex', rowIndex);
        // this.editing[rowIndex + '-' + cell] = false;
        this.rdcPlannerInventoryData[rowIndex][cell] = event.target.value;
        this.rdcPlannerInventoryData = this.rdcPlannerInventoryData.slice();
        console.log('UPDATED!', this.rdcPlannerInventoryData[rowIndex][cell]);
        this.bayAssign(row);
    };
    TruckInventoryReceivingComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    TruckInventoryReceivingComponent.prototype.viewComments = function (comments, type) {
        if (type == 'loadslip') {
            this.commentHeader = 'Loadslip Comments';
        }
        else {
            this.commentHeader = 'Comments';
        }
        this.commentMsg = comments;
        $('#commentModal').modal('show');
    };
    TruckInventoryReceivingComponent.prototype.showComments = function (comment, id) {
        this.truckComments = comment;
        this.rowloadslipId = id;
        $("#myModal").modal('show');
    };
    TruckInventoryReceivingComponent.prototype.save = function (form) {
        var _this = this;
        if (form.valid) {
            this.isLoading = true;
            var data = {
                "comments": this.truckComments,
                "gateControlCode": this.rowloadslipId
            };
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.saveTruckComments, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    _this.isLoading = false;
                    var index = _this.rdcPlannerInventoryData.findIndex(function (item) { return item.gateControlCode == _this.rowloadslipId; });
                    _this.rdcPlannerInventoryData[index].comments = _this.truckComments;
                    _this.rdcPlannerInventoryData = _this.rdcPlannerInventoryData.slice();
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
    // fgs call method 
    TruckInventoryReceivingComponent.prototype.callGateSecurity = function (row) {
        var _this = this;
        if (row.bayAssigned == undefined) {
            row.bayAssigned = '';
        }
        this.isLoading = true;
        var data = {
            gateControlCode: row.gateControlCode,
            status: "CALL_TRUCK",
            indentId: row.indentId,
            bayAssigned: row.bayAssigned,
            destDis: row.destDis,
            destCountryName: row.destCountryName
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getIndentReportInfo, data).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                var index = _this.rdcPlannerInventoryData.indexOf(row);
                var repsoneData = response['data'];
                _this.rdcPlannerInventoryData[index] = repsoneData;
                _this.rdcPlannerInventoryData = _this.rdcPlannerInventoryData.slice();
                _this.selected = [];
                _this.selected = _this.selected.concat([repsoneData]);
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
    };
    // Bay Assign by gate security
    TruckInventoryReceivingComponent.prototype.bayAssign = function (row) {
        var _this = this;
        if (row.bayAssigned == undefined) {
            row.bayAssigned = '';
        }
        this.isLoading = true;
        var data = {
            gateControlCode: row.gateControlCode,
            status: "BAY_ASSIGNED",
            indentId: row.indentId,
            bayAssigned: row.bayAssigned,
            destDis: row.destDis,
            destCountryName: row.destCountryName
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getIndentReportInfo, data).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                var index = _this.rdcPlannerInventoryData.indexOf(row);
                var responseData = response['data'];
                _this.rdcPlannerInventoryData[index] = responseData;
                _this.rdcPlannerInventoryData = _this.rdcPlannerInventoryData.slice();
                _this.editing = {};
                _this.selected = [];
                _this.selected = _this.selected.concat([responseData]);
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
    };
    //get filter destination result
    TruckInventoryReceivingComponent.prototype.getfilterDestination = function (event, typeofevent, isIntransitTruck) {
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
    TruckInventoryReceivingComponent.prototype.getfilterTransporter = function (event) {
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
    TruckInventoryReceivingComponent.prototype.inweightUpdate = function (row) {
        var _this = this;
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
                var index = _this.rdcTruckInventoryData.indexOf(row);
                _this.rdcTruckInventoryData[index] = response['data'];
                _this.rdcTruckInventoryData = _this.rdcTruckInventoryData.slice();
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
    };
    // out weight update 
    TruckInventoryReceivingComponent.prototype.outWeightUpdate = function (row) {
        var _this = this;
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
                var index = _this.rdcTruckInventoryData.indexOf(row);
                _this.rdcTruckInventoryData[index] = response['data'];
                _this.rdcTruckInventoryData = _this.rdcTruckInventoryData.slice();
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
    };
    //get filter destination result
    TruckInventoryReceivingComponent.prototype.countryOfDestinationFilter = function (event, type) {
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
    //export excel data
    TruckInventoryReceivingComponent.prototype.export = function () {
        var _this = this;
        if (this.rdcPlannerInventoryData.length > 0) {
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
                'pageLength': this.rdcPlannerPage.count,
                'source': this.source,
                'activity': "D",
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
                "destCountry": obj ? (obj.value) : ''
            };
            // RDC Operations & GateSecurity
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getTruckData, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var newViewPlanData = response['data'].truckReportsData;
                    console.log("newViewPlanData", newViewPlanData);
                    var excelRawData = newViewPlanData;
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        var data_1 = {
                            "Truck Number": excelRawData[i].truckNumber,
                            "Source": excelRawData[i].source,
                            "Destination": excelRawData[i].destination,
                            "Shipment Id": excelRawData[i].shipmentId,
                            "Dest Description": excelRawData[i].destDis,
                            "Container": excelRawData[i].containerNum,
                            "Truck Type": excelRawData[i].truckType,
                            "Transporter": excelRawData[i].transporter,
                            "Country of Destination": excelRawData[i].destCountryName,
                            "Indent Id": excelRawData[i].indentId,
                            "Driver Name": excelRawData[i].driverName,
                            "Driver Number": excelRawData[i].driverContact,
                            "Report Date": _this.service.customDateTimeFormat(excelRawData[i].reportedDate),
                            "Gate In": _this.service.customDateTimeFormat(excelRawData[i].gateInDate),
                            "Unloading Start": _this.service.customDateTimeFormat(excelRawData[i].loadslipUSDate),
                            "Unloading End": _this.service.customDateTimeFormat(excelRawData[i].loadslipUEDate),
                            "Gate Out": _this.service.customDateTimeFormat(excelRawData[i].gateOutDate),
                            "Release": (excelRawData[i].bayStatus == 'RELEASE') ? 'RELEASED' : '',
                            "Rejection": excelRawData[i].rejectionStatus,
                            "Rejection Desc": excelRawData[i].rejectionDesc,
                            "Bay Assigned": excelRawData[i].bayAssigned,
                            "Bay status": excelRawData[i].bayStatus,
                            "Truck Status": excelRawData[i].status,
                            "In weight (Kg)": excelRawData[i].inWeight,
                            "Out weight (Kg)": excelRawData[i].outWeight,
                            "Net weight (Kg)": excelRawData[i].netWeight,
                            "SAP invoice weight (Kg)": excelRawData[i].sapInvWeight,
                            "Weight Diff (Kg)": excelRawData.diffInvWeight,
                            "SAP invoice value (INR)": excelRawData[i].sapInvValue,
                            "Eway bill No": excelRawData[i].ewayBillNo,
                            "Loadslip Comments": excelRawData[i].loadslipComments,
                            "Gate Comments": excelRawData[i].comments,
                            "Insert User": excelRawData[i].insertUser,
                            "Update User": excelRawData[i].updateUser,
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_5__["writeFile"](workBook, 'truckInventoryReceiving.xlsx');
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
    //set value destination
    TruckInventoryReceivingComponent.prototype.setDestination = function (value) {
        //  this.destinationDesc = value;
        this.destination = value;
    };
    //set value to destination description
    TruckInventoryReceivingComponent.prototype.setDestDescription = function (value) {
        this.destinationDesc = value;
    };
    TruckInventoryReceivingComponent.prototype.getUserDestinationList = function (event) {
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
    //for RDC events 
    //event Trigger
    TruckInventoryReceivingComponent.prototype.eventTrigger = function (row, typeofevent) {
        var _this = this;
        this.isLoading = true;
        var post_URL;
        var data;
        if ((typeofevent == 'GATED_IN') || (typeofevent == 'INTRANSIT')) {
            if (row.intransitTruck) {
                // call intransit-truck-report;
                data = {
                    truckNumber: row.truckNumber,
                    status: typeofevent,
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
                    status: typeofevent,
                    indentId: row.indentId,
                    outWeight: Number(row.outWeight),
                    destDis: row.destDis,
                    destCountryName: row.destCountryName
                };
                post_URL = _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getIndentReportInfo;
            }
        }
        else {
            data = {
                truckNumber: row.truckNumber,
                status: typeofevent,
                gateControlCode: row.gateControlCode,
                destDis: row.destDis,
                destCountryName: row.destCountryName
            };
            post_URL = _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.reportIntransitTruck;
        }
        this.service.post_service(post_URL, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var responseData = response['data'];
                if ((typeofevent == 'UNLOADING') || (typeofevent == 'DELIVERED') || (typeofevent == 'RELEASED')) {
                    var replacebleIndex = _this.rdcPlannerInventoryData.findIndex(function (rawData) { return rawData.truckNumber == data.truckNumber; });
                    _this.rdcPlannerInventoryData[replacebleIndex] = responseData;
                    _this.rdcPlannerInventoryData = _this.rdcPlannerInventoryData.slice();
                }
                else {
                    var replacebleIndex = _this.rdcTruckInventoryData.findIndex(function (rawData) { return rawData.truckNumber == data.truckNumber; });
                    _this.rdcTruckInventoryData[replacebleIndex] = responseData;
                    _this.rdcTruckInventoryData = _this.rdcTruckInventoryData.slice();
                }
                _this.selected = [];
                _this.selected = _this.selected.concat([responseData]);
                _this.isLoading = false;
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
    // Reject Truck 
    TruckInventoryReceivingComponent.prototype.rejectTruck = function (item) {
        var _this = this;
        this.isLoading = true;
        var data = {
            gateControlCode: item.gateControlCode,
            status: "REJECT",
            indentId: item.indentId,
            truckNumber: item.truckNumber,
            destDis: item.destDis,
            destCountryName: item.destCountryName
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getIndentReportInfo, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var replacebleIndex = _this.rdcPlannerInventoryData.findIndex(function (rawData) { return rawData.gateControlCode == data.gateControlCode; });
                _this.rdcPlannerInventoryData[replacebleIndex] = response['data'];
                _this.rdcPlannerInventoryData = _this.rdcPlannerInventoryData.slice();
                _this.isLoading = false;
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
    TruckInventoryReceivingComponent.prototype.viewLoadslip = function (shipmentNumber, view) {
        var _this = this;
        this.isLoading = true;
        this.loadSlipType = view;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.openLoadslipDetails + "?shipmentId=" + shipmentNumber).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                if (response["data"]) {
                    _this.loadslipList = response["data"];
                    if (_this.loadslipList.length == 1) {
                        _this.viewLoadslipnavigation(_this.loadslipList[0]);
                    }
                    else if (_this.loadslipList.length > 1) {
                        $("#loadslipsModal").modal("show");
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
    TruckInventoryReceivingComponent.prototype.addEvent = function (type, event) {
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
    // Navigate to loadslip view
    TruckInventoryReceivingComponent.prototype.viewLoadslipnavigation = function (item) {
        $("#loadslipsModal").modal('hide');
        var loadSlipId = item['loadlipId'];
        var type = item.type;
        if (this.loadSlipType == 'loadslipView') {
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
        else {
            this.router.navigateByUrl('/load-slip-qty-view/' + loadSlipId);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"])
    ], TruckInventoryReceivingComponent.prototype, "table", void 0);
    TruckInventoryReceivingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-truck-inventory-receiving',
            template: __webpack_require__(/*! ./truck-inventory-receiving.component.html */ "./src/app/gate-security/truck-inventory-receiving/truck-inventory-receiving.component.html"),
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_8__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], useValue: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_8__["APP_DATE_FORMATS"]
                }
            ],
            styles: [__webpack_require__(/*! ./truck-inventory-receiving.component.scss */ "./src/app/gate-security/truck-inventory-receiving/truck-inventory-receiving.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__["HelperServiceService"]])
    ], TruckInventoryReceivingComponent);
    return TruckInventoryReceivingComponent;
}());



/***/ }),

/***/ "./src/app/gate-security/truck-inventory-receiving/truck-inventory-receiving.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/gate-security/truck-inventory-receiving/truck-inventory-receiving.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: truckInventoryReceivingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truckInventoryReceivingModule", function() { return truckInventoryReceivingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
/* harmony import */ var _truck_inventory_receiving_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./truck-inventory-receiving.component */ "./src/app/gate-security/truck-inventory-receiving/truck-inventory-receiving.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _truck_inventory_receiving_component__WEBPACK_IMPORTED_MODULE_8__["TruckInventoryReceivingComponent"] },
];
var truckInventoryReceivingModule = /** @class */ (function () {
    function truckInventoryReceivingModule() {
    }
    truckInventoryReceivingModule = __decorate([
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
                _truck_inventory_receiving_component__WEBPACK_IMPORTED_MODULE_8__["TruckInventoryReceivingComponent"]
            ]
        })
    ], truckInventoryReceivingModule);
    return truckInventoryReceivingModule;
}());



/***/ })

}]);
//# sourceMappingURL=gate-security-truck-inventory-receiving-truck-inventory-receiving-module.js.map