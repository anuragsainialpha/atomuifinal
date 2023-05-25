(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gate-security-truck-inventory-shipping-truck-inventory-shipping-module"],{

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

/***/ "./src/app/gate-security/truck-inventory-shipping/truck-inventory-shipping.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/gate-security/truck-inventory-shipping/truck-inventory-shipping.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\">\n</app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\"><b>Truck status > Truck Inventory > Shipping</b>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"Filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n  <div class=\"clearfix\"></div>\n  <div class=\"manualplan-fields\" *ngIf=\"isShow\">\n      <form (submit)=\"truckstatusIndetsFilter()\">\n    <div class=\"col-md-12 row\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-2 pr-0 pl-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput aria-label=\"Source\" placeholder=\"Source\"\n                      (keyup)=\"getfilterDestination($event,'source', isIntransitTruck)\" autocomplete=\"off\"\n                      [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"source\" name=\"source\" oninput=\"this.value = this.value.toUpperCase()\">\n                    <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                        <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n              <!-- <div class=\"col-md-3 pr-0\">\n                    <div class=\"form-group\">\n                      <mat-form-field>\n                        <input matInput aria-label=\"Destination\" placeholder=\"Destination\" (keyup)=\"getfilterDestination($event,'destination')\" autocomplete=\"off\"\n                          [matAutocomplete]=\"destinationAutocomplete\" [(ngModel)]=\"destination\" name=\"destination\">\n                        <mat-autocomplete #destinationAutocomplete=\"matAutocomplete\">\n                          <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\">\n                            <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                          </mat-option>\n                        </mat-autocomplete>\n                      </mat-form-field>\n                    </div>\n                  </div> -->\n\n              <div class=\"col-md-2 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Destination\" aria-label=\"Destination\" [matAutocomplete]=\"statesAutocomplete\"\n                      [(ngModel)]=\"destination\" name=\"destination\" (keyup)=\"getfilterDestination($event,'destination', !isIntransitTruck)\"  oninput=\"this.value = this.value.toUpperCase()\">\n                    <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\"\n                        (click)=\"setDestDescription(list.description)\"\n                        (onSelectionChange)=\"setDestDescription(list.description)\">\n                        <span>{{list.value}}</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-4 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Destination Description\" aria-label=\"Destination Description\"\n                      [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destinationDesc\"\n                      (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                    <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                        (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                        <span>({{list.description}})</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n\n              <div class=\"col-md-4 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"Truck/Container Type\" [(ngModel)]=\"truckType\" name=\"truckType\" multiple>\n                      <!-- <mat-option [value]=\"\">None</mat-option> -->\n                      <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n\n\n\n\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-3 pr-0\">\n                <mat-form-field>\n                  <input matInput aria-label=\"Country of Destination\" placeholder=\"Country of Destination\"\n                    (keyup)=\"countryOfDestinationFilter($event,'destCountrySearch')\" autocomplete=\"off\"\n                    [matAutocomplete]=\"dischargeAutocomplete\" [(ngModel)]=\"destCountryName\" name=\"destCountryName\" oninput=\"this.value = this.value.toUpperCase()\">\n                  <mat-autocomplete #dischargeAutocomplete=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let country of countryList\" [value]=\"country.description\">\n                      <span matTooltip={{country.description}}>{{country.value}} - ({{country.description}})</span>\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <mat-form-field>\n                  <input matInput [(ngModel)]=\"trckNumber\" name=\"truck number\" autocomplete=\"off\"\n                    placeholder=\"Truck Number\" oninput=\"this.value = this.value.toUpperCase()\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput aria-label=\"transporter\" placeholder=\"Transporter\"\n                      (keyup)=\"getfilterTransporter($event)\" autocomplete=\"off\"\n                      [matAutocomplete]=\"transporterAutocomplete\" [(ngModel)]=\"transporter\" name=\"transporter\" oninput=\"this.value = this.value.toUpperCase()\">\n                    <mat-autocomplete #transporterAutocomplete=\"matAutocomplete\">\n                      <mat-option *ngFor=\"let list of transporterList\" [value]=\"list.value\">\n                        <span>{{list.value}}</span>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <mat-form-field>\n                  <input matInput [(ngModel)]=\"shipmentId\" name=\"shipment\" autocomplete=\"off\" placeholder=\"Shipment Id\" oninput=\"this.value = this.value.toUpperCase()\">\n                </mat-form-field>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-3 pl-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput [(ngModel)]=\"indentId\" name=\"indentid\" placeholder=\"Indent Id\" autocomplete=\"off\" oninput=\"this.value = this.value.toUpperCase()\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput [min]=\"minDate\" placeholder=\"Gate In From Date\" disabled\n                      [matDatepicker]=\"gateInFromDatePicker\" autocomplete=\"off\" [(ngModel)]=\"gateInFromDate\"\n                      (dateChange)=\"addEvent('gateInDate', $event)\" name=\"gateInToDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"gateInFromDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #gateInFromDatePicker disabled=\"false\"></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <mat-form-field>\n                  <input matInput [min]=\"gateInFromDate\" placeholder=\"Gate In To Date\" disabled\n                    [matDatepicker]=\"gateInToDatePicker\" autocomplete=\"off\" [(ngModel)]=\"gateInToDate\"\n                    name=\"gateInToDate\">\n                  <mat-datepicker-toggle matSuffix [for]=\"gateInToDatePicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #gateInToDatePicker [disabled]=\"!gateInFromDate\"></mat-datepicker>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput [min]=\"minDate\" placeholder=\"Rep From Date\" disabled\n                      [matDatepicker]=\"reportFromDatePicker\" autocomplete=\"off\" [(ngModel)]=\"reportFromDate\"\n                      (dateChange)=\"addEvent('repFromDate', $event)\" name=\"reportfromDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"reportFromDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #reportFromDatePicker disabled=\"false\"></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n\n\n              <!-- <div class=\"col-md-3 pr-0\">\n                    <div class=\"form-group\">\n                      <mat-form-field>\n                        <input matInput [min]=\"minDate\" placeholder=\"Gate Out From Date\" disabled [matDatepicker]=\"gateOutFromDatePicker\"\n                          autocomplete=\"off\" [(ngModel)]=\"gateOutFromDate\" (dateChange)=\"addEvent('gateOutDate', $event)\"\n                          name=\"gateoutFromDate\">\n                        <mat-datepicker-toggle matSuffix [for]=\"gateOutFromDatePicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #gateOutFromDatePicker disabled=\"false\"></mat-datepicker>\n                      </mat-form-field>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 pr-0\">\n                    <mat-form-field>\n                      <input matInput [min]=\"gateOutFromDate\" placeholder=\"Gate Out To Date\" disabled [matDatepicker]=\"gateOutToDatePicker\"\n                        autocomplete=\"off\" [(ngModel)]=\"gateOutToDate\" name=\"gateoutToDate\">\n                      <mat-datepicker-toggle matSuffix [for]=\"gateOutToDatePicker\"></mat-datepicker-toggle>\n                      <mat-datepicker #gateOutToDatePicker [disabled]=\"!gateOutFromDate\"></mat-datepicker>\n                    </mat-form-field>\n                  </div> -->\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-3 pr-0\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <input matInput [min]=\"reportFromDate\" placeholder=\"Rep To Date\" disabled\n                      [matDatepicker]=\"reportToDatePicker\" autocomplete=\"off\" [(ngModel)]=\"reportToDate\"\n                      name=\"reportToDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"reportToDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #reportToDatePicker [disabled]=\"!reportFromDate\"></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-2 pr-0\">\n                <mat-form-field>\n                  <mat-select placeholder=\"Bay Status\" [(ngModel)]=\"bayStatus\" name=\"bayStatus\" multiple>\n                    <!-- <mat-option [value]=\"\">None</mat-option> -->\n                    <mat-option *ngFor=\"let item of baystatusList\" [value]=\"item\"> {{item}} </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-3 pr-0\">\n                <mat-form-field>\n                  <mat-select placeholder=\"Select Status\" name=\"status\" autocomplete=\"off\" [(ngModel)]=\"statusType\" multiple>\n                    <!-- <mat-option [value]=\"\">None</mat-option> -->\n                    <mat-option *ngFor=\"let status of reportTruckStatusList\" [value]=\"status.value\">\n                      {{status.key}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-2 pr-0\">\n                <mat-form-field>\n                  <mat-select placeholder=\"Rejection\" [(ngModel)]=\"rejection\" name=\"rejection\" multiple>\n                    <!-- <mat-option [value]=\"\">None</mat-option> -->\n                    <mat-option *ngFor=\"let item of rejectionList\" [value]=\"item\"> {{item}} </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-2\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"Ind Cat\" [(ngModel)]=\"materialGrp\" name=\"materialGrp\" multiple>\n                      <mat-option *ngFor=\"let category of categoryList\" [value]=\"category\">{{category}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" type=\"submit\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" type=\"button\" (click)=\"clearData()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n      </form>\n\n    <!-- For FGS operations Table -->\n    <ngx-datatable #table class='material  ngx-table-custom-scroll ngx-table-tr-custom-scroll'\n      [rows]='fgsReportedTrucksIndents' [columnMode]=\"'force'\" [headerHeight]=\"50\" [selected]=\"selected\"\n      [selectionType]=\"'single'\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [limit]=\"fgPage.limit\" [scrollbarH]=\"true\"\n      [count]=\"fgPage.count\" [offset]=\"fgPage.offset\" (page)=\"FgsDatatablePageData($event)\" [externalPaging]=\"true\">\n      <ngx-datatable-column [frozenLeft]=\"true\" name=\"Indent Id\" [width]=\"170\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"indentId\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.indentId}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column [frozenLeft]=\"true\" name=\"Truck Number\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"truckNumber\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n          {{row.truckNumber | uppercase}}\n          <!-- <ng-container *ngIf=\"row.status === 'GATED_IN' || row.status == 'REPORTED'\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-truckNumber'] = true\" *ngIf=\"!editing[rowIndex + '-truckNumber']\">\n                <span class=\"edit-label\">{{row.truckNumber | uppercase}}\n                </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <mat-form-field *ngIf=\"editing[rowIndex+ '-truckNumber']\">\n                <input matInput [value]=\"row.truckNumber\" (blur)=\"updateValue($event, 'truckNumber', rowIndex)\">\n              </mat-form-field>\n            </ng-container>\n            <ng-container *ngIf=\"row.status !== 'GATED_IN' && row.status !== 'REPORTED'\">\n                {{row.truckNumber | uppercase}}\n            </ng-container> -->\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column [frozenLeft]=\"true\" name=\"Transporter\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"transporter\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.transporter | uppercase}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column [frozenLeft]=\"true\" name=\"Dest\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"destination\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destination | uppercase}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Dest Description\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destDis\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destDis}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Truck Type\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckType\">\n        <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n          {{row.truckType | uppercase}}\n\n          <!-- <ng-container *ngIf=\"row.status === 'GATED_IN' || row.status == 'REPORTED'\">\n  \n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-truckType'] = true\" *ngIf=\"!editing[rowIndex + '-truckType']\">\n            <span class=\"edit-label\">{{row.truckType}}\n            </span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <mat-form-field *ngIf=\"editing[rowIndex+ '-truckType']\">\n              <mat-select autofocus placeholder=\"Truck Type\" \n              [ngModel]=\"row.truckType\" name=\"Truck Type\" \n              (ngModelChange)=\"updateValue($event,'marketSegment',rowIndex)\">\n                <mat-option [value]=\"\">None</mat-option>\n                <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\">\n                  {{truck.value}}\n                </mat-option>\n              </mat-select>\n          </mat-form-field>\n          </ng-container>\n          <ng-container *ngIf=\"row.status !== 'GATED_IN' && row.status !== 'REPORTED'\">\n              {{row.truckType | uppercase}}\n          </ng-container> -->\n        </ng-template>\n        <!-- <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.truckType | uppercase}}\n        </ng-template> -->\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Report Date\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"reportedDate\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.reportedDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Truck Status\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"status\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.status}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Bay Status\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"callStatus\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-row=\"row\">\n          <!--  DR_REP role user only view data can't edit data -->\n          <!-- DP_REP ROLE -->\n          <ng-container *ngIf=\"(isDPREPRole());else otherUsersBAYSTATUS\">\n            <span [ngClass]=\"{'btn btn-sm lightgreen-button':row.bayStatus == 'CALL'}\">{{row.bayStatus == 'CALL' ?\n              'Called':row.bayStatus}}</span>\n          </ng-container>\n          <ng-template #otherUsersBAYSTATUS>\n            <!--  for other user other than DP_REP -->\n            <ng-container *ngIf=\"row.bayStatus == '' || row.bayStatus == null\">\n              <button mat-raised-button color=\"primary\" class=\"table-btn\" (click)=\"callGateSecurity(row)\">Call</button>\n            </ng-container>\n            <ng-container *ngIf=\"row.bayStatus != ''\">\n              <span [ngClass]=\"{'btn btn-sm lightgreen-button':row.bayStatus == 'CALL'}\">{{row.bayStatus == 'CALL' ?\n                'Called':row.bayStatus}}</span>\n            </ng-container>\n          </ng-template>\n          <!-- <ng-container *ngIf=\"(row.bayStatus != 'RELEASE')\">\n            <button class=\"btn btn-sm lightgreen-button\" *ngIf=\"(row.callStatus) != null\">{{row.callStatus}}</button>\n            <button\n              *ngIf=\"(row.callStatus == null && row.inWeight == null) || (row.callStatus == '' && row.inWeight == '')\"\n              mat-raised-button color=\"primary\" class=\"table-btn\" (click)=\"callGateSecurity(row)\">Call</button>\n          </ng-container>\n          <ng-container *ngIf=\"(row.bayStatus == 'RELEASE')\">\n            {{row.bayStatus}}\n          </ng-container> -->\n\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"In weight (Kg)\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"inWeight\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n          <span>{{row.inWeight}}</span>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Gate In\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"gateInDate\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n          {{row.gateInDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Out Weight (Kg)\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"outWeight\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n          <span>{{row.outWeight}}</span>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Net Weight (Kg)\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"netWeight\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.netWeight}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"SAP invoice weight(Kg)\" [width]=\"100\" [resizeable]=\"false\" prop=\"dropSeq\"\n        [sortable]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.sapInvWeight}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Weight Diff (Kg)\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"netWeight\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <span [ngClass]=\"(row.weightDiffStatus)?'text-danger':''\">{{row.diffInvWeight}}</span>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Gate Out\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"gateOutDate\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n          <span>{{row.gateOutDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm' || '--'}}</span>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Loadslip Comments\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"loadslipComments\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <div [title]=\"row.loadslipComments\" [ngClass]=\"{'cursor-pointer':row.loadslipComments?.length>12}\"\n            (click)=\"ShowComments(row.loadslipComments,'loadslip')\" *ngIf=\"(row.loadslipComments)\">\n            {{(row.loadslipComments?.length>12) ? (row.loadslipComments | slice:0:12)+'..':(row.loadslipComments)}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Gate Comments\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"comments\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <!-- <button class=\"theme-small-button\" matTooltip=\"Comments\" (click)=\"ShowComments(row.comments,'comments')\" *ngIf=\"(row.comments)\">\n            <i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>\n          </button> -->\n          <div [title]=\"row.comments\" [ngClass]=\"{'cursor-pointer':row.comments?.length>8}\"\n            (click)=\"ShowComments(row.comments,'comments')\" *ngIf=\"(row.comments)\">\n            {{(row.comments?.length>8) ? (row.comments | slice:0:8)+'..':(row.comments)}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Rejection\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"rejectionStatus\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.rejectionStatus}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Rejection Desc\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"rejectionDesc\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.rejectionDesc}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <!--  DR_REP role user only view data can't edit data -->\n      <ng-container *ngIf=\"(!isDPREPRole())\">\n        <!--  for other user other than DP_REP -->\n        <ngx-datatable-column name=\"Action\" [width]=\"440\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"netWeight\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            <button mat-raised-button color=\"primary\" class=\"table-btn mr-10\" *ngIf=\"(row.status=='GATED_IN')\"\n              (click)=\"openTruckModel(row,rowIndex)\" [disabled]=\"(row.rejectionStatus) == 'REJECTED'\">\n              Reject Truck\n            </button>\n            <!-- <button mat-raised-button color=\"primary\" class=\"table-btn\" (click)=\"saveTruck(row)\" [disabled]=\"(row.rejectionStatus) == 'REJECTED'\">\n                  Save Truck\n                </button> -->\n\n            <ng-container>\n              <button mat-raised-button color=\"primary\" (click)=\"viewLoadslip(row.shipmentId,'loadslipView')\"\n                [disabled]=\"!row.shipmentId\" class=\"table-btn mr-10\">View\n                Loadslips\n              </button>\n              <button mat-raised-button color=\"primary\" (click)=\"viewLoadslip(row.shipmentId,'invoiceView')\"\n                [disabled]=\"!row.shipmentId\" class=\"table-btn\">LoadSlip\n                Invoice\n              </button>\n            </ng-container>\n          </ng-template>\n        </ngx-datatable-column>\n      </ng-container>\n      <ngx-datatable-column name=\"Driver Name\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"driverName\">\n        <!-- <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-driverName'] = true\" *ngIf=\"!editing[rowIndex + '-driverName']\">\n                <span class=\"edit-label\">{{row.driverName}}\n                </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <mat-form-field *ngIf=\"editing[rowIndex+ '-driverName']\">\n                <input matInput [value]=\"row.driverName\" (blur)=\"updateValue($event, 'driverName', rowIndex)\">\n              </mat-form-field>\n            </ng-template> -->\n        <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n          {{row.driverName}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Driver Number\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"driverContact\">\n        <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n          {{row.driverContact}}\n          <!-- <ng-container *ngIf=\"row.status === 'GATED_IN' || row.status == 'REPORTED'\">\n            <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-driverContact'] = true\" \n             *ngIf=\"!editing[rowIndex + '-driverContact']\">\n              <span class=\"edit-label\">{{row.driverContact}}</span>\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <mat-form-field *ngIf=\"editing[rowIndex+ '-driverContact']\">\n              <input matInput [value]=\"row.driverContact\" (keypress)=\"service.numberOnly($event)\" (blur)=\"updateValue($event, 'driverContact', rowIndex)\">\n            </mat-form-field>\n          </ng-container>\n          <ng-container *ngIf=\"row.status !== 'GATED_IN' && row.status !== 'REPORTED'\">\n            {{row.driverContact}}\n          </ng-container> -->\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Driver Licence\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"driverLicense\">\n        <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n          {{row.driverLicense}}\n          <!-- <ng-container *ngIf=\"row.status === 'GATED_IN' || row.status == 'REPORTED'\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-driverLicense'] = true\" \n               *ngIf=\"!editing[rowIndex + '-driverLicense']\">\n                <span class=\"edit-label\">{{row.driverLicense}}</span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <mat-form-field *ngIf=\"editing[rowIndex+ '-driverLicense']\">\n                <input matInput [value]=\"row.driverLicense\" (blur)=\"updateValue($event, 'driverLicense', rowIndex)\">\n              </mat-form-field>\n            </ng-container>\n            <ng-container *ngIf=\"row.status !== 'GATED_IN' && row.status !== 'REPORTED'\">\n              {{row.driverLicense}}\n            </ng-container> -->\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"ShipmentId\" [width]=\"130\" [resizeable]=\"true\" [sortable]=\"false\" prop=\"shipmentId\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.shipmentId | uppercase}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Container\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"containerNum\">\n        <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\n          {{row.containerNum | uppercase}}\n          <!-- <ng-container *ngIf=\"row.status === 'GATED_IN' || row.status == 'REPORTED'\">\n            <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-containerNum'] = true\" *ngIf=\"!editing[rowIndex + '-containerNum']\">\n              <span class=\"edit-label\">{{row.containerNum | uppercase}}\n              </span>\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <mat-form-field *ngIf=\"editing[rowIndex+ '-containerNum']\">\n              <input matInput [value]=\"row.containerNum\" (blur)=\"updateValue($event, 'containerNum', rowIndex)\">\n            </mat-form-field>\n          </ng-container>\n          <ng-container *ngIf=\"row.status !== 'GATED_IN' && row.status !== 'REPORTED'\">\n            {{row.containerNum | uppercase}}\n          </ng-container> -->\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Bay\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"bayAssigned\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n          <!--  DR_REP role user only view data can't edit data -->\n          <!-- DP_REP ROLE -->\n          <ng-container *ngIf=\"(isDPREPRole());else otherUsersBAY\">\n            {{row.bayAssigned}}\n          </ng-container>\n          <ng-template #otherUsersBAY>\n            <!--  for other user other than DP_REP -->\n            <div class=\"edit-field\" title=\"Double click to edit\"\n              (click)=\"editingFgs[rowIndex + '-bayAssigned'] = true\" *ngIf=\"!editingFgs[rowIndex + '-bayAssigned']\">\n              <span class=\"edit-label\">{{row.bayAssigned?row.bayAssigned:'None'}}</span>\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <mat-form-field *ngIf=\"editingFgs[rowIndex+ '-bayAssigned']\">\n              <mat-select (selectionChange)=\"updateValueFgs($event, 'bayAssigned', rowIndex,row)\">\n                <mat-option value=\"\">None</mat-option>\n                <mat-option *ngFor=\"let data of plantBayList\" [value]=\"data\">\n                  {{data}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </ng-template>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"SAP invoice value(INR)\" [width]=\"100\" [resizeable]=\"false\" prop=\"dropSeq\"\n        [sortable]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.sapInvValue}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Eway bill No\" [width]=\"100\" [resizeable]=\"false\" prop=\"dropSeq\" [sortable]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.ewayBillNo}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Source\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.source | uppercase}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"LR Num\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.lrNum}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"LR Date\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.lrDate ? (row.lrDate | customDateFormat | date:'dd-MMM-yyyy') : '--'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Indent Cat\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.indentCategory}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"SAP Invoice\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.sapInvoice}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Tot Tyre\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totTyre}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Tot Tube\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totTube}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Tot Flap\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totFlap }}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Tot Valve\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totValve}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Tot PCTR\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totPctr}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Other Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.otherQty}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Tot Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totQty}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Country of Destination\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"destCountryName\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destCountryName}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Gate Serial No\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"gateControlCode\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.gateControlCode}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"PUC\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"puc\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{(row.puc)?'Yes':'No'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Insurance\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"insurance\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{(row.insurance)?'Yes':'No'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Seat Belt\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"seatBelt\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{(row.seatBelt)?'Yes':'No'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"First Aid\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"firstAid\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{(row.firstAid)?'Yes':'No'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Fire Extenguisher\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"fireExtenguisher\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{(row.fireExtenguisher)?'Yes':'No'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Emergency Card\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"emergencyCard\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{(row.emergencyCard)?'Yes':'No'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Spark Arrestor\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"sparKArrestor\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{(row.sparKArrestor)?'Yes':'No'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Fitness Certificate\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"fitnessCert\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{(row.fitnessCert)?'Yes':'No'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Insert User\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"insertUser\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.insertUser}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Update User\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"updateUser\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.updateUser}}\n        </ng-template>\n      </ngx-datatable-column>\n      <!-- Footer Template starts -->\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected |\n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n            [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n            (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n\n    </ngx-datatable>\n  </div>\n\n\n\n  <!-- View Loadslips  for coorsponding shipment -->\n  <div class=\"modal\" id=\"loadslipsModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Loadslip List</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <ul>\n            <li *ngFor=\"let item of loadslipList;let i=index\">\n              <span>\n                {{i+1}})\n                <span class=\"link\" style=\"margin-left: 10px;margin-right: 50px\"\n                  (click)=\"viewLoadslipnavigation(item)\">{{item.loadlipId}}\n                </span>\n                <span>\n                  {{item.type}}\n                </span>\n              </span>\n            </li>\n          </ul>\n        </div>\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- truck Reject Modal -->\n  <div class=\"modal\" id=\"rejectionModel\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Reject Reason</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <mat-form-field class=\"example-full-width\">\n              <mat-select placeholder=\"Reject reasons\" [(ngModel)]=\"rejectReason\" name=\"rejectReason\">\n                <mat-option *ngFor=\"let reason of rejectRasonList\" [value]=\"reason.rejectionCode\">\n                  {{reason.rejectionCode}}-{{reason.rejectionDesc}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" mat-raised-button color=\"primary\" class=\"table-btn\"\n            (click)=\"rejectTruck(rejectReason)\">Submit</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- View Loadslips  for coorsponding shipment -->\n  <div class=\"modal\" id=\"commentModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{commentHeader}}</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <p>{{commentMsg}}</p>\n        </div>\n        <!-- Modal footer -->\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/gate-security/truck-inventory-shipping/truck-inventory-shipping.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/gate-security/truck-inventory-shipping/truck-inventory-shipping.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhdGUtc2VjdXJpdHkvdHJ1Y2staW52ZW50b3J5LXNoaXBwaW5nL3RydWNrLWludmVudG9yeS1zaGlwcGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/gate-security/truck-inventory-shipping/truck-inventory-shipping.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/gate-security/truck-inventory-shipping/truck-inventory-shipping.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TruckInventoryShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckInventoryShippingComponent", function() { return TruckInventoryShippingComponent; });
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











var TruckInventoryShippingComponent = /** @class */ (function () {
    function TruckInventoryShippingComponent(service, toastr, helperService, router) {
        this.service = service;
        this.toastr = toastr;
        this.helperService = helperService;
        this.router = router;
        this.fgsReportedTrucksIndents = [];
        this.gateSeuReportedTrucksIndents = [];
        this.isLoading = false;
        this.editing = {};
        this.editingFgs = {};
        this.gateSecurityIndents = [];
        this.editingRDCpln = {};
        this.fgPage = {
            limit: 10,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 200
        };
        this.selected = [];
        this.isShow = true;
        this.truckType = [];
        this.descriptionList = [];
        this.typeOfTruckReport = {};
        this.statusType = [];
        this.truckList = [];
        this.loadslipList = [];
        this.baystatusList = [];
        this.bayStatus = [];
        this.isIntransitTruck = true;
        this.categoryList = [];
        this.materialGrp = [];
        // rejectionList = ["NORMAL", "REJECTED"];
        this.rejection = [];
        this.userRoles = src_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].roles;
        this.typeOfTruckReport = src_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].truckReportTypes;
        this.reportTruckStatusList = src_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].truckInventoryStatusList;
        this.baystatusList = src_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].bayStatusList;
        this.reportLocation = localStorage.getItem('sourceID');
    }
    TruckInventoryShippingComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.setItem("userMenu", "fgs-truck-status");
        this.rejectionList = src_app_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].rejectionList;
        // for getting truck type master
        this.getTruckTypeMasterData();
        this.getAllRejectReasons();
        var data = {
            'type': this.typeOfTruckReport['inventory'],
            'activity': "P",
            "reportLocation": this.reportLocation,
            "pageLength": 200
        };
        this.selected = [];
        this.truckInventoryShippingAPI(data);
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getPlanByInfo).subscribe(function (response) {
            console.log(response);
            _this.plantBayList = response['data'];
        });
        this.getCategoryMasterData();
    };
    // Checking if the logged in role is DP_REP or L1_MGR or L2_MGR
    TruckInventoryShippingComponent.prototype.isDPREPRole = function () {
        var currentRole = this.service.checkRole();
        if (currentRole == this.userRoles.planner3 || currentRole == this.userRoles.L1MGR || currentRole == this.userRoles.L2MGR) {
            return true;
        }
        else {
            return false;
        }
    };
    TruckInventoryShippingComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    TruckInventoryShippingComponent.prototype.truckInventoryShippingAPI = function (data) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getTruckData, data).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                _this.selected = [];
                //set data for FGS operations 
                _this.fgsReportedTrucksIndents = response['data'].truckReportsData;
                _this.fgsReportedTrucksIndents = _this.fgsReportedTrucksIndents.slice();
                _this.fgPage.limit = response['data'].pageLength;
                _this.fgPage.count = response['data'].total;
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
    TruckInventoryShippingComponent.prototype.getTruckTypeMasterData = function () {
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
    TruckInventoryShippingComponent.prototype.clearData = function () {
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
        this.rejection = [];
        this.materialGrp = [];
    };
    //refersh data 
    TruckInventoryShippingComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.clearData();
        this.selected = [];
        this.source = '';
        // Refresh Data FGS operations & FGs gatesecurity 
        var data = {
            'type': this.typeOfTruckReport['inventory'],
            'activity': "P",
            "reportLocation": this.reportLocation
        };
        this.truckInventoryShippingAPI(data);
    };
    // truck status filter creteria
    TruckInventoryShippingComponent.prototype.truckstatusIndetsFilter = function () {
        var _this = this;
        if (this.helperService.getDateValidations(this.gateInFromDate, this.gateInToDate, this.gateOutFromDate, this.gateOutToDate, this.reportFromDate, this.reportToDate)) {
            this.table.offset = 0;
            var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
            var data = {
                'source': this.source,
                'destination': this.destination,
                'indentID': this.indentId,
                'pageLength': this.fgPage.pageSize,
                //  status needed as string to backend API
                'status': (this.statusType).toString(),
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
            this.truckInventoryShippingAPI(data);
        }
    };
    // datatables with server side pagination for FGS Role
    TruckInventoryShippingComponent.prototype.FgsDatatablePageData = function (pageInfo) {
        var _this = this;
        var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
        var datatabledata = {
            'index': pageInfo.offset,
            'pageLength': pageInfo.pageSize,
            'destination': this.destination,
            'indentID': this.indentId,
            //  status needed as string to backend API
            'status': (this.statusType).toString(),
            'transporter': this.transporter,
            'truckNumber': this.trckNumber,
            'truckType': this.truckType,
            'type': this.typeOfTruckReport['inventory'],
            'source': this.source,
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
        this.truckInventoryShippingAPI(datatabledata);
    };
    //get filter destination result
    TruckInventoryShippingComponent.prototype.countryOfDestinationFilter = function (event, type) {
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
    TruckInventoryShippingComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        // console.log('Select Event', selected, this.selected);
    };
    TruckInventoryShippingComponent.prototype.updateValueFgs = function (event, cell, rowIndex, row) {
        console.log('inline editing rowIndex', rowIndex);
        // this.editingFgs[rowIndex + '-' + cell] = true;
        this.fgsReportedTrucksIndents[rowIndex][cell] = event.value;
        this.fgsReportedTrucksIndents = this.fgsReportedTrucksIndents.slice();
        console.log('UPDATED!', this.fgsReportedTrucksIndents);
        this.bayAssign(row);
    };
    TruckInventoryShippingComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    // fgs call method 
    TruckInventoryShippingComponent.prototype.callGateSecurity = function (row) {
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
                var index = _this.fgsReportedTrucksIndents.indexOf(row);
                var repsoneData = response['data'];
                _this.fgsReportedTrucksIndents[index] = repsoneData;
                _this.fgsReportedTrucksIndents = _this.fgsReportedTrucksIndents.slice();
                _this.editing = {};
                _this.selected = [];
                _this.selected = _this.selected.concat([repsoneData]);
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
    TruckInventoryShippingComponent.prototype.bayAssign = function (row) {
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
                var index = _this.fgsReportedTrucksIndents.indexOf(row);
                var repsoneData = response['data'];
                _this.fgsReportedTrucksIndents[index] = repsoneData;
                _this.fgsReportedTrucksIndents = _this.fgsReportedTrucksIndents.slice();
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
    //get filter destination result
    TruckInventoryShippingComponent.prototype.getfilterDestination = function (event, typeofevent, isIntransitTruck) {
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
    TruckInventoryShippingComponent.prototype.getfilterTransporter = function (event) {
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
    //set value destination
    TruckInventoryShippingComponent.prototype.setDestination = function (value) {
        //  this.destinationDesc = value;
        this.destination = value;
    };
    //set value to destination description
    TruckInventoryShippingComponent.prototype.setDestDescription = function (value) {
        this.destinationDesc = value;
    };
    TruckInventoryShippingComponent.prototype.updateValue = function (event, cell, index) {
        if (event) {
            this.fgsReportedTrucksIndents[index][cell] = (event.target) ? (event.target.value) : event;
        }
        else {
            this.fgsReportedTrucksIndents[index][cell] = '';
        }
    };
    TruckInventoryShippingComponent.prototype.getUserDestinationList = function (event) {
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
    // saveTruck(row){
    //   this.isLoading = true;
    //   let data = {
    //     containerNum: row.containerNum,
    //     driverContact: row.driverContact,
    //     driverLicense: row.driverLicense,
    //     driverName: row.driverName,
    //     gateControlCode: row.gateControlCode,
    //     indentId: row.indentId,
    //     truckNumber: row.truckNumber,
    //     truckType: row.truckType
    //   }
    //   this.service.post_service(ApiserviceService.apisList.updateTruckInventoryDetails, data).subscribe(response => {
    //     if (response['statusCode'] == 200) {
    //       //Update data for FGS ROLE
    //       let replacebleIndex = this.fgsReportedTrucksIndents.findIndex(rawData => rawData.gateControlCode == data.gateControlCode);
    //       this.editing = {};
    //       this.editingFgs = {};
    //       this.fgsReportedTrucksIndents[replacebleIndex] = response['data'];
    //       this.fgsReportedTrucksIndents = [...this.fgsReportedTrucksIndents];
    //       this.isLoading = false;
    //       this.toastr.success(response['message']);
    //     }
    //     else {
    //       this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
    //       this.isLoading = false;
    //     }
    //   }, (err) => {
    //     console.log("Error", err);
    //     this.toastr.error(err ? err : "Something went wrong..", "Error!");
    //     this.isLoading = false;
    //   })
    // }
    TruckInventoryShippingComponent.prototype.addEvent = function (type, event) {
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
    //export excel data
    TruckInventoryShippingComponent.prototype.export = function () {
        var _this = this;
        if (this.fgsReportedTrucksIndents.length > 0) {
            this.isLoading = true;
            var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
            var data = {
                'source': this.source,
                'destination': this.destination,
                'indentID': this.indentId,
                //  status needed as string to backend API
                'status': (this.statusType).toString(),
                'transporter': this.transporter,
                'truckNumber': this.trckNumber,
                'truckType': this.truckType,
                'type': this.typeOfTruckReport['inventory'],
                'pageLength': this.fgPage.count,
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
                            "Destination Description": excelRawData[i].destDis,
                            "Truck Type": excelRawData[i].truckType,
                            "Report Date": _this.service.customDateTimeFormat(excelRawData[i].reportedDate),
                            "Truck Status": excelRawData[i].status,
                            "Bay status": excelRawData[i].bayStatus,
                            "In weight (Kg)": excelRawData[i].inWeight,
                            "Gate In": _this.service.customDateTimeFormat(excelRawData[i].gateInDate),
                            "Out weight (Kg)": excelRawData[i].outWeight,
                            "Net weight (Kg)": excelRawData[i].netWeight,
                            "SAP invoice weight (Kg)": excelRawData[i].sapInvWeight,
                            "Weight Diff (Kg)": excelRawData.diffInvWeight,
                            "Gate Out": _this.service.customDateTimeFormat(excelRawData[i].gateOutDate),
                            "Loadslip Comments": excelRawData[i].loadslipComments,
                            "Gate Comments": excelRawData[i].comments,
                            "Rejection": excelRawData[i].rejectionStatus,
                            "Rejection Desc": excelRawData[i].rejectionDesc,
                            "Driver Name": excelRawData[i].driverName,
                            "Driver Number": excelRawData[i].driverContact,
                            "Driver Licence": excelRawData[i].driverLicense,
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
    // for getting rejectReasons
    TruckInventoryShippingComponent.prototype.getAllRejectReasons = function () {
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
    TruckInventoryShippingComponent.prototype.openTruckModel = function (row, rowIndex) {
        this.rejectReason = '';
        this.rejectData = {
            gateControlCode: row.gateControlCode,
            status: 'REJECT',
            // rejectionCode:,
            indentId: row.indentId,
            truckNumber: row.truckNumber,
            destDis: row.destDis,
            destCountryName: row.destCountryName
        };
        $('#rejectionModel').modal('show');
    };
    // Reject Truck 
    TruckInventoryShippingComponent.prototype.rejectTruck = function (reason) {
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
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getIndentReportInfo, this.rejectData).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    // Update data for FGS ROLE
                    var replacebleIndex = _this.fgsReportedTrucksIndents.findIndex(function (rawData) { return rawData.gateControlCode == _this.rejectData['gateControlCode']; });
                    var responseData = response['data'];
                    _this.fgsReportedTrucksIndents[replacebleIndex] = responseData;
                    _this.fgsReportedTrucksIndents = _this.fgsReportedTrucksIndents.slice();
                    _this.selected = [];
                    _this.selected = _this.selected.concat([responseData]);
                    _this.rejectReason = '';
                    _this.isLoading = false;
                    _this.toastr.success(response['message']);
                }
                else {
                    _this.rejectReason = '';
                    $('#rejectionModel').modal('show');
                    _this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
                    _this.isLoading = false;
                }
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // view loadslips for cooresponding shipment Id
    TruckInventoryShippingComponent.prototype.viewLoadslip = function (shipmentNumber, view) {
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
    //show Comments in Modal
    TruckInventoryShippingComponent.prototype.ShowComments = function (comments, type) {
        if (type == 'loadslip') {
            this.commentHeader = 'Loadslip Comments';
        }
        else {
            this.commentHeader = 'Comments';
        }
        this.commentMsg = comments;
        $('#commentModal').modal('show');
    };
    // Navigate to loadslip view
    TruckInventoryShippingComponent.prototype.viewLoadslipnavigation = function (item) {
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
        // this.router.navigateByUrl('/load-slip-view/' + loadslipId)
    };
    //for getting category master data
    TruckInventoryShippingComponent.prototype.getCategoryMasterData = function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"])
    ], TruckInventoryShippingComponent.prototype, "table", void 0);
    TruckInventoryShippingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-truck-inventory-shipping',
            template: __webpack_require__(/*! ./truck-inventory-shipping.component.html */ "./src/app/gate-security/truck-inventory-shipping/truck-inventory-shipping.component.html"),
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_8__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], useValue: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_8__["APP_DATE_FORMATS"]
                }
            ],
            styles: [__webpack_require__(/*! ./truck-inventory-shipping.component.scss */ "./src/app/gate-security/truck-inventory-shipping/truck-inventory-shipping.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__["HelperServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], TruckInventoryShippingComponent);
    return TruckInventoryShippingComponent;
}());



/***/ }),

/***/ "./src/app/gate-security/truck-inventory-shipping/truck-inventory-shipping.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/gate-security/truck-inventory-shipping/truck-inventory-shipping.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: truckInventoryShippingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truckInventoryShippingModule", function() { return truckInventoryShippingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
/* harmony import */ var _truck_inventory_shipping_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./truck-inventory-shipping.component */ "./src/app/gate-security/truck-inventory-shipping/truck-inventory-shipping.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _truck_inventory_shipping_component__WEBPACK_IMPORTED_MODULE_8__["TruckInventoryShippingComponent"] },
];
var truckInventoryShippingModule = /** @class */ (function () {
    function truckInventoryShippingModule() {
    }
    truckInventoryShippingModule = __decorate([
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
                _truck_inventory_shipping_component__WEBPACK_IMPORTED_MODULE_8__["TruckInventoryShippingComponent"]
            ]
        })
    ], truckInventoryShippingModule);
    return truckInventoryShippingModule;
}());



/***/ })

}]);
//# sourceMappingURL=gate-security-truck-inventory-shipping-truck-inventory-shipping-module.js.map