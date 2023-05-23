(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gate-security-report-truck-report-truck-module"],{

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

/***/ "./src/app/gate-security/report-truck/report-truck.component.html":
/*!************************************************************************!*\
  !*** ./src/app/gate-security/report-truck/report-truck.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\">\n</app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    <span>\n      {{title}}\n    </span>\n\n  </h6>\n  <!-- Create Plan by Manual Fields 1st row-->\n  <div class=\"manualplan-fields\">\n\n    <div class=\"rounded-white-box\">\n      <div class=\"width-10 pl-15\">\n        <mat-form-field class=\"margin-top-10\">\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"From Dispatch Date\" disabled autocomplete=\"off\"\n            [(ngModel)]=\"fromDate\" (dateChange)=\"addEvent('fromDateReport', $event)\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"width-10 pl-15\">\n        <mat-form-field class=\"margin-top-10\">\n          <input [min]=\"fromDate\" matInput [matDatepicker]=\"picker2\" placeholder=\"To Dispatch Date\" disabled\n            autocomplete=\"off\" [(ngModel)]=\"ToDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2 [disabled]=\"!fromDate\"></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"width-10 pl-15\">\n        <mat-form-field class=\"margin-top-10\">\n          <input matInput aria-label=\"Transporter\" placeholder=\"Transporter\" autocomplete=\"off\"\n            (keyup)=\"getfilterTransporter($event)\" autocomplete=\"off\" [matAutocomplete]=\"transporterAutocomplete\"\n            [(ngModel)]=\"transporter\" name=\"transporter\" oninput=\"this.value = this.value.toUpperCase()\">\n          <mat-autocomplete #transporterAutocomplete=\"matAutocomplete\">\n            <mat-option *ngFor=\"let list of transporterList\" [value]=\"list.value\">\n              <span>{{list.value}}</span>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      <div class=\"width-10 pl-15\">\n        <div class=\"form-group\">\n          <mat-form-field class=\"margin-top-10\">\n            <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n              [(ngModel)]=\"destination\" name=\"destination\" (keyup)=\"getfilterDestination($event)\"\n              oninput=\"this.value = this.value.toUpperCase()\">\n            <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n              <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\"\n                (click)=\"setDestDescription(list.description)\"\n                (onSelectionChange)=\"setDestDescription(list.description)\">\n                <span>{{list.value}}</span>\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"width-20 pl-15\">\n        <div class=\"form-group\">\n          <mat-form-field class=\"margin-top-10\">\n            <input matInput placeholder=\"Destination Description\" aria-label=\"State\"\n              [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destination\"\n              (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n            <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n              <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                <span>({{list.description}})</span>\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"width-10 pl-15\">\n        <mat-form-field class=\"margin-top-10\">\n          <input matInput aria-label=\"Country of Destination\" placeholder=\"Country of Destination\"\n            (keyup)=\"countryOfDestinationFilter($event,'destCountrySearch')\" autocomplete=\"off\"\n            [matAutocomplete]=\"dischargeAutocomplete\" [(ngModel)]=\"destCountryName\" name=\"destCountryName\"\n            oninput=\"this.value = this.value.toUpperCase()\">\n          <mat-autocomplete #dischargeAutocomplete=\"matAutocomplete\">\n            <mat-option *ngFor=\"let country of countryList\" [value]=\"country.description\">\n              <span matTooltip={{country.description}}>{{country.value}} - ({{country.description}})</span>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      <div class=\"width-20 pl-15\">\n        <mat-form-field class=\"margin-top-10\">\n          <input matInput placeholder=\"Indent Id\" [(ngModel)]=\"indentID\" name=\"indentID\" autocomplete=\"off\"\n            oninput=\"this.value = this.value.toUpperCase()\">\n        </mat-form-field>\n      </div>\n      <div class=\"width-10 text-center pd-0\">\n        <button class=\"theme-small-button tab-custom-margin\" (click)=\"indentSearch()\" matTooltip=\"Search\">\n          <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"theme-delete-button tab-custom-margin\" (click)=\"clearAll()\" matTooltip=\"Clear\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n\n    <!-- <div class='col-md-3'>\n              <div class=\"row rounded-box\">\n                <div class=\"col-md-3 text-center\">\n                  <h5 class=\"text-warning\">\n                    {{gateSecurityStatics?.reportedTrucksCount?gateSecurityStatics.reportedTrucksCount:0}}</h5>\n                  <p>Reported &amp; Waiting</p>\n                </div>\n                <div class=\"col-md-3 text-center\">\n                  <h5 class=\"text-success\">\n                    {{gateSecurityStatics?.gatedInTrucksCount?gateSecurityStatics.gatedInTrucksCount:0}}</h5>\n                  <p>Gated In</p>\n                </div>\n                <div class=\"col-md-3 text-center\">\n                  <h5 class=\"text-info\">{{gateSecurityStatics?.loading?gateSecurityStatics.loading:0}}</h5>\n                  <p>In Loading</p>\n                </div>\n                <div class=\"col-md-3 text-center\">\n                  <h5 class=\"text-danger\">\n                    {{gateSecurityStatics?.watingMoreThen3HTrucks?gateSecurityStatics.watingMoreThen3HTrucks:0}}</h5>\n                  <p>Waiting > {{gateSecurityStatics?gateSecurityStatics.excessWaitingTime:0}} hrs</p>\n                </div>\n              </div>\n            </div> -->\n  </div>\n\n\n  <div class=\"clearfix\"></div>\n\n\n  <div *ngIf='reportTruckTableShow' class=\"manual-plan-table\">\n    <ngx-datatable class='material' #table [rows]='gateSecurityIndents' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n      [scrollbarH]=\"true\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [externalPaging]=\"true\" [limit]=\"page.limit\"\n      [count]=\"page.count\" [offset]=\"page.offset\" (page)=\"datatablePageData($event)\" [summaryRow]=\"true\"\n      [summaryHeight]=\"'auto'\" [summaryPosition]=\"'bottom'\">\n      <ngx-datatable-column name=\"Dispatch Date\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"dispatchDate\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.dispatchDate | customDateFormat | date:'dd-MMM-yyyy'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Indent Id\" [width]=\"320\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"indentId\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.indentId}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Destination\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destination\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destination}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Dest Description\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destDis\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destDis}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column\n        *ngIf=\"((service.checkRole() == userRoles.JIT_GATE_SECURITY) || (service.checkRole() == userRoles.JIT_OPERATION))\"\n        name=\"Truck Type\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckType\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.truckType}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column\n        *ngIf=\"((service.checkRole() != userRoles.JIT_GATE_SECURITY) && (service.checkRole() != userRoles.JIT_OPERATION))\"\n        name=\"Truck/Container Type\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckType\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.truckType}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Transporter\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"transporter\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.transporter}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Country of Destination\" [width]=\"180\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"destCountryName\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destCountryName}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Category\" [width]=\"180\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"materailGrp\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.materailGrp}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Trucks Requested\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"indented\"\n        [summaryTemplate]=\"netRequestedCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.netRequested}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Trucks Reported\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"reported\"\n        [summaryTemplate]=\"reportedCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.reported}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Trucks Rejected\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"rejected\"\n        [summaryTemplate]=\"rejectedCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.rejected}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Net Balance\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"netBalance\"\n        [summaryTemplate]=\"netBalanceCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.netBalance}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Actions\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"false\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <button class=\"theme-small-button\" matTooltip=\"Truck Details\" (click)=\"truckDetails(row)\"\n            *ngIf=\"(row.status != 'CANCELLED')\">\n            <i class=\"fa fa-address-card\" aria-hidden=\"true\"></i>\n          </button>\n          <span *ngIf=\"(row.status == 'CANCELLED')\"> Indent {{row.status | lowercase}}</span>\n        </ng-template>\n      </ngx-datatable-column>\n      <!-- Footer Template starts -->\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected |\n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n            [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n            (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n    </ngx-datatable>\n    <!-- Table bottom grid columns -->\n    <ng-template #netRequestedCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{(netRequestedSum)?(netRequestedSum | number ):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #reportedCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{(reportedSum ? reportedSum : 0 )| number }}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #rejectedCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{(rejectedSum ? rejectedSum : 0) | number}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #netBalanceCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{(netBalanceSum ? netBalanceSum : 0 ) | number }}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n\n  <!-- Indents from the transporter provided by him -->\n  <div *ngIf=\"IsReportedIndentsShow\">\n    <div class=\"manual-plan-table\" *ngIf=\"reportedTrucks.length > 0\">\n      <ngx-datatable class='material' [rows]='reportedTrucks' [scrollbarH]=\"true\" [columnMode]=\"'force'\"\n        [headerHeight]=\"50\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [limit]=\"5\">\n        <ngx-datatable-column name=\"Indent Id\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"indentId\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.indentId}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Truck Number\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n          prop=\"truckNumber\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.truckNumber | uppercase}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column\n          *ngIf=\"((service.checkRole() != userRoles.JIT_GATE_SECURITY) &&  (service.checkRole() != userRoles.JIT_OPERATION))\"\n          name=\"Container Number\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"containerNum\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.containerNum | uppercase}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column\n          *ngIf=\"((service.checkRole() == userRoles.JIT_GATE_SECURITY) || (service.checkRole() == userRoles.JIT_OPERATION))\"\n          name=\"Truck Type\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckType\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.truckType | uppercase}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column\n          *ngIf=\"((service.checkRole() != userRoles.JIT_GATE_SECURITY) && (service.checkRole() != userRoles.JIT_OPERATION))\"\n          name=\"Truck/Container Type\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckType\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.truckType | uppercase}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Driver Name\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"driverName\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.driverName | uppercase}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Driver License Number\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n          prop=\"driverLicense\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.driverLicense | uppercase}}\n          </ng-template>\n        </ngx-datatable-column>\n        <!-- REPORT DATE -->\n        <ngx-datatable-column name=\"Report Date\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"reportDate\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.reportedDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n          </ng-template>\n        </ngx-datatable-column>\n        <!-- GATE CONTROL CODE -->\n        <!-- <ngx-datatable-column name=\"Gate Control Code\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n          prop=\"gateControlCode\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.gateControlCode | uppercase}}\n          </ng-template>\n        </ngx-datatable-column> -->\n        <!-- <ngx-datatable-column name=\"PUC\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"puc\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{(row.puc)?'Yes':'No'}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Insurance\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"insurance\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{(row.insurance)?'Yes':'No'}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Seat Belt\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"seatBelt\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{(row.seatBelt)?'Yes':'No'}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"First Aid\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"firstAid\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{(row.firstAid)?'Yes':'No'}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Fire Extinguisher\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n          prop=\"fireExtenguisher\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{(row.fireExtenguisher)?'Yes':'No'}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Emergency Card\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n          prop=\"emergencyCard\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{(row.emergencyCard)?'Yes':'No'}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Spark Arrestor\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n          prop=\"sparKArrestor\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{(row.sparKArrestor)?'Yes':'No'}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Fitness Certificate\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n          prop=\"fitnessCert\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{(row.fitnessCert)?'Yes':'No'}}\n          </ng-template>\n        </ngx-datatable-column> -->\n\n        <!-- <ngx-datatable-column name=\"GPS (Yes/No)\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"gpsEnabled\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            <span *ngIf=\"row.gpsEnabled\">Yes</span>\n            <span *ngIf=\"!row.gpsEnabled\">No</span>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"GPS Provider\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"gpsProvider\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.gpsProvider?row.gpsProvider:'- -'}}\n          </ng-template>\n        </ngx-datatable-column> -->\n        <!-- <ngx-datatable-column name=\"Actions\" [width]=\"200\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            <button mat-raised-button color=\"primary\" class=\"table-btn\" (click)=\"report(row)\">Report</button>\n          </ng-template>\n        </ngx-datatable-column> -->\n      </ngx-datatable>\n    </div>\n  </div>\n  <div>\n    <div class=\"mb-3 mt-4\" *ngIf=\"IsReportedIndentsShow\">\n      <p *ngIf=\"gateSecurityTransportReport.length > 0\">Indent Id : {{reportingIndentId}}</p>\n      <div class=\"manualplan-fields\" *ngFor=\"let data of gateSecurityTransportReport;let i=index\">\n        <div class=\"circle-bordered-box\">\n          <div class=\"row \">\n            <div class=\"col-md-11\">\n              <div class=\"row\">\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Truck Number\" oninput=\"this.value = this.value.toUpperCase()\"\n                        [(ngModel)]=\"gateSecurityTransportReport[i].truckNumber\"\n                        (keypress)=\"helperService.alphaNumericOnly($event)\"\n                        (blur)=\"getReportedDriverDetails(gateSecurityTransportReport[i].truckNumber,i)\"\n                        name=truckNumber{{i}} autocomplete=\"off\">\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"col-md-2\"\n                  *ngIf=\"((service.checkRole() == userRoles.JIT_GATE_SECURITY) || (service.checkRole() == userRoles.JIT_OPERATION))\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"Truck Type\" name=TruckType{{i}}\n                      [(ngModel)]=\"gateSecurityTransportReport[i].truckType\">\n                      <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-2\"\n                  *ngIf=\"((service.checkRole() != userRoles.JIT_GATE_SECURITY) && (service.checkRole() != userRoles.JIT_OPERATION))\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"Truck/Container Type\" name=TruckType{{i}}\n                      [(ngModel)]=\"gateSecurityTransportReport[i].truckType\">\n                      <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-2\"\n                  *ngIf=\"((service.checkRole() != userRoles.JIT_GATE_SECURITY) && (service.checkRole() != userRoles.JIT_OPERATION))\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Container Number\" oninput=\"this.value = this.value.toUpperCase()\"\n                        [(ngModel)]=\"gateSecurityTransportReport[i].containerNum\"\n                        (keypress)=\"helperService.alphaNumericOnly($event)\" name=containerNum{{i}} autocomplete=\"off\">\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Driver's Name\" oninput=\"this.value = this.value.toUpperCase()\"\n                        [(ngModel)]=\"gateSecurityTransportReport[i].driverName\" name=driverName{{i}} autocomplete=\"off\">\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Driver's Mobile Number\" (keypress)=\"service.numberOnly($event)\"\n                        [(ngModel)]=\"gateSecurityTransportReport[i].driverContact\"\n                        (keypress)=\"helperService.numericOnly($event)\" name=driverContact{{i}} autocomplete=\"off\"\n                        maxlength=\"10\" minlength=\"10\">\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Driver's License Number\"\n                        oninput=\"this.value = this.value.toUpperCase()\"\n                        [(ngModel)]=\"gateSecurityTransportReport[i].driverLicense\" name=driverLicense{{i}}\n                        autocomplete=\"off\">\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <!-- <div class=\"col-md-6\">\n                      <div class=\"row\">\n                        <div class=\"col-md-3\">\n                          <mat-form-field>\n                            <mat-select placeholder=\"GPS (Yes/No)\" [(ngModel)]=\"gateSecurityTransportReport[i].gpsEnabled\"\n                              name=\"'gpsEnabled' + i\" autocomplete=\"off\">\n                              <mat-option *ngFor=\"let data of gpsStatus\" [value]=\"data.viewValue\">\n                                {{data.key}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                            <mat-form-field>\n                              <input matInput aria-label=\"GPS provider\" placeholder=\"GPS Provider\" (keyup)=\"getfilterGpsProvider($event)\"\n                                autocomplete=\"off\" [matAutocomplete]=\"gpsProviderAutocomplete\" [(ngModel)]=\"gateSecurityTransportReport[i].gpsProvider\"\n                                name=\"'gpsProvider'+i\">\n                              <mat-autocomplete #gpsProviderAutocomplete=\"matAutocomplete\">\n                                <mat-option *ngFor=\"let list of gpsProviderList\" [value]=\"list.value\">\n                                  <span>{{list.value}}</span>\n                                </mat-option>\n                              </mat-autocomplete>\n                            </mat-form-field>\n                          </div>\n                        </div>\n                      </div>\n                    </div> -->\n              </div>\n\n            </div>\n            <div class=\"col-md-1 tab-pos-top\">\n              <!-- onkeypress=\"return event.keyCode != 13;\" -->\n              <div class=\"pull-right mt-2\">\n                <button mat-raised-button color=\"primary\" class=\"table-btn\"\n                  (click)=\"reportIndent(gateSecurityTransportReport[i])\">Report</button>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-11\">\n              <div class=\"row\">\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label id=\"example-radio-group-label\">PUC</label>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                      [(ngModel)]=\"gateSecurityTransportReport[i].puc\" name=puc{{i}}>\n                      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\">\n                        {{item.key}}\n                      </mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label id=\"example-radio-group-label\">Insurance</label>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                      [(ngModel)]=\"gateSecurityTransportReport[i].insurance\" name=insurance{{i}}>\n                      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\">\n                        {{item.key}}\n                      </mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label id=\"example-radio-group-label\">Seat Belt</label>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                      [(ngModel)]=\"gateSecurityTransportReport[i].seatBelt\" name=seatbelt{{i}}>\n                      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\">\n                        {{item.key}}\n                      </mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label id=\"example-radio-group-label\">First Aid</label>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" name=firstAid{{i}}\n                      class=\" example-radio-group\" [(ngModel)]=\"gateSecurityTransportReport[i].firstAid\">\n                      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\">\n                        {{item.key}}\n                      </mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label id=\"example-radio-group-label\">Fire Extinguisher</label>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                      [(ngModel)]=\"gateSecurityTransportReport[i].fireExtenguisher\" name=fireExtinguisher{{i}}>\n                      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\">\n                        {{item.key}}\n                      </mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label id=\"example-radio-group-label\">Emergency Card</label>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                      [(ngModel)]=\"gateSecurityTransportReport[i].emergencyCard\" name=emergencyCard{{i}}>\n                      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\">\n                        {{item.key}}\n                      </mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-1 text-center\">\n              <button class=\"theme-small-button margin-top-7\"\n                (click)=\"manualTruckAssign(gateSecurityTransportReport[i])\"\n                *ngIf=\"(i == gateSecurityTransportReport.length-1)\" matTooltip=\"Add\">\n                <i class=\"fa fa-plus-circle fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n              <button class=\"theme-delete-button margin-top-7\" (click)=\"removeManualTruckAssign(i)\" *ngIf=\"i != 0\"\n                matTooltip=\"remove\">\n                <i class=\"fa fa-minus-circle fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n            <div class=\"col-md-11\">\n              <div class=\"row\">\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label id=\"example-radio-group-label\">Spark Arrestor</label>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                      [(ngModel)]=\"gateSecurityTransportReport[i].sparKArrestor\" name=sparKArrestor{{i}}>\n                      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\">\n                        {{item.key}}\n                      </mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label id=\"example-radio-group-label\">Fitness Certificate</label>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                      [(ngModel)]=\"gateSecurityTransportReport[i].fitnessCert\" name=fitnessCert{{i}}>\n                      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of items\" [value]=\"item.value\">\n                        {{item.key}}\n                      </mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n\n                      \n                      <input matInput placeholder=\"Gross Vehicle Weight (Kg)\" (keypress)=\"service.numberOnly($event)\"\n                      [(ngModel)]=\"gateSecurityTransportReport[i].truckGrossVehicleWt\"\n                      (keypress)=\"helperService.numericOnly($event)\" name=truckGrossVehicleWt{{i}} autocomplete=\"off\">\n\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Unladen Weight (Kg)\" (keypress)=\"service.numberOnly($event)\"\n                      [(ngModel)]=\"gateSecurityTransportReport[i].truckUnladenWt\"\n                      (keypress)=\"helperService.numericOnly($event)\" name=truckUnladenWt{{i}} autocomplete=\"off\">\n\n              \n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n\n\n                    <mat-form-field>\n                      <mat-select placeholder=\"Fuel Type\" name=fuelType{{i}}\n                        [(ngModel)]=\"gateSecurityTransportReport[i].fuelType\">\n                        <mat-option *ngFor=\"let fuelType of fuelType\" [value]=\"fuelType\">{{fuelType}}</mat-option>\n\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n\n\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n\n\n                    <mat-form-field>\n                      <mat-select placeholder=\"BS Norms\" name=bsNorms{{i}}\n                        [(ngModel)]=\"gateSecurityTransportReport[i].bsNorms\">\n                        <mat-option *ngFor=\"let bsNorms of bsNorms\" [value]=\"bsNorms\">{{bsNorms}}</mat-option>\n\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/gate-security/report-truck/report-truck.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/gate-security/report-truck/report-truck.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhdGUtc2VjdXJpdHkvcmVwb3J0LXRydWNrL3JlcG9ydC10cnVjay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/gate-security/report-truck/report-truck.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/gate-security/report-truck/report-truck.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReportTruckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportTruckComponent", function() { return ReportTruckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _public_date_adapters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/date.adapters */ "./src/app/public/date.adapters.ts");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var src_app_services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/helper-service/helper-service.service */ "./src/app/services/helper-service/helper-service.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReportTruckComponent = /** @class */ (function () {
    function ReportTruckComponent(service, toastr, helperService) {
        var _this = this;
        this.service = service;
        this.toastr = toastr;
        this.helperService = helperService;
        this.gpsStatus = [];
        this.gateSecurityTransportReport = [];
        this.gateSecurityIndents = [];
        this.isLoading = false;
        this.truckData = [];
        this.truckInformation = [];
        this.truckDetailsData = [];
        this.addedTruckData = [];
        this.reportedTruckData = [];
        this.truckNumber = '';
        //May 2023 - adding fields to truck reporting
        this.truckCapacity = '';
        //April 2023
        this.fuelType = ['CNG', 'Petrol', 'Diesel', 'Electric'];
        this.bsNorms = ['BS-3', 'BS-4', 'BS-6', 'Others'];
        this.truckgrossVehicleWt = '';
        this.truckUnladenwt = '';
        this.GOApprovalReason = '';
        this.GOApprovedBy = '';
        this.GOApprovedDate = '';
        this.containerNum = '';
        this.driverName = '';
        this.driverNumber = '';
        this.driverLicenseNumber = '';
        this.showDetails = false;
        this.reportSuccess = false;
        this.transporter = '';
        this.indentID = '';
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.fromDate = this.helperService.getTodayDateASString();
        this.ToDate = this.helperService.getTodayDateASString();
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
        this.reportTruckTableShow = false;
        this.IsReportedIndentsShow = false;
        this.page = {
            limit: 10,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.reportedTrucks = [];
        this.isCompletedReport = false;
        this.truckList = [];
        this.destinationList = [];
        this.descriptionList = [];
        this.netRequestedSum = 0;
        this.reportedSum = 0;
        this.rejectedSum = 0;
        this.netBalanceSum = 0;
        this.gpsStatus = [
            {
                "key": "Yes",
                "viewValue": true
            },
            {
                "key": "No",
                "viewValue": false
            }
        ];
        // get gatesecurity statics like reporting ,Wating,Gated In,Loading
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.getTruckStatus).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                _this.gateSecurityStatics = response['data'];
                _this.isLoading = false;
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong ", "! Error");
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    }
    ReportTruckComponent.prototype.ngOnInit = function () {
        this.userRoles = src_app_constants__WEBPACK_IMPORTED_MODULE_5__["constants"].roles;
        //Activation of Tabs
        if (this.service.checkRole() == this.userRoles.rdc_PLN || (this.service.checkRole() == this.userRoles.JIT_OPERATION)) {
            localStorage.setItem("userMenu", "RDC-GAT-REPORT");
        }
        else if ((this.service.checkRole() == this.userRoles.gateSecurity) || (this.service.checkRole() == this.userRoles.rdc_GAT) || (this.service.checkRole() == this.userRoles.JIT_GATE_SECURITY)) {
            localStorage.setItem("userMenu", "GAT-REPORT");
        }
        else {
            localStorage.setItem("userMenu", "fgs-truck-status");
        }
        // For title show
        if ((this.service.checkRole() == this.userRoles.rdc_GAT) || (this.service.checkRole() == this.userRoles.rdc_PLN)) {
            this.title = "Receiving RDC > Report Trucks > Against Indent";
        }
        else if (this.service.checkRole() == this.userRoles.JIT_GATE_SECURITY) {
            this.title = " FGS-JIT > Report Truck > Against Indent";
        }
        else {
            this.title = " FGS > Report Truck > Against Indent";
        }
        // for getting truck type master
        this.getTruckTypeMasterData();
    };
    // for getting truck type master
    ReportTruckComponent.prototype.getTruckTypeMasterData = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.truckTypeMasterData).subscribe(function (response) {
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
    // formateDate(data) {
    //   console.log(data)
    //   let formatted = new Date(data),
    //     mnth = ("0" + (formatted.getMonth() + 1)).slice(-2),
    //     day = ("0" + formatted.getDate()).slice(-2);
    //   this.formattedDate = [day, mnth, formatted.getFullYear()].join("/");
    // }
    ReportTruckComponent.prototype.getTruckDetails = function (id, i) {
        this.isClicked = i;
        var idx = this.truckInformation.findIndex(function (item) {
            return item.indentId == id;
        });
        if (idx !== -1) {
            this.addedTruckData.push(this.truckInformation[idx]);
        }
        else {
            this.showDetails = true;
        }
    };
    ReportTruckComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    // filter transporter list 
    ReportTruckComponent.prototype.getfilterTransporter = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.transporterList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.searchFilter + '?transporter=' + filtervalue).subscribe(function (response) {
                console.log("respio", response);
                _this.transporterList = response['data'].searchResult;
                _this.transporterList = _this.transporterList.slice();
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter gsp provide api
    // getfilterGpsProvider(event) {
    //   let filtervalue = event.target.value;
    //   if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
    //     this.gpsProviderList = [];
    //     this.isLoading = true;
    //     this.service.get_service(ApiserviceService.apisList.searchFilter + '?gpsProvider=' + filtervalue).subscribe(response => {
    //       console.log("respio", response)
    //       this.gpsProviderList = response['data'].searchResult;
    //       this.gpsProviderList = [...this.gpsProviderList]
    //       this.isLoading = false;
    //     }, (err) => {
    //       console.log("Error", err);
    //       this.toastr.error(err ? err : "Something went wrong..", "Error!");
    //       this.isLoading = false;
    //     })
    //   }
    // }
    ReportTruckComponent.prototype.dateValidation = function () {
        var isValidDate = true;
        if (this.fromDate) {
            if (this.ToDate == '' || this.ToDate == null || this.ToDate == undefined) {
                this.toastr.error('Please enter Todate');
                isValidDate = false;
            }
        }
        return isValidDate;
    };
    //Search filter 
    ReportTruckComponent.prototype.indentSearch = function () {
        var _this = this;
        if (this.dateValidation()) {
            this.isLoading = true;
            this.IsReportedIndentsShow = false;
            var obj = this.countryList ? (this.countryList.find(function (a) { return a.description == _this.destCountryName; })) : {};
            var searchData = {
                fromDispatchDate: this.fromDate ? (moment__WEBPACK_IMPORTED_MODULE_7__(this.fromDate).format("DD/MM/YYYY")) : '',
                toDispatchDate: this.ToDate ? (moment__WEBPACK_IMPORTED_MODULE_7__(this.ToDate).format("DD/MM/YYYY")) : '',
                indentID: this.indentID,
                transporter: this.transporter,
                destination: this.destination,
                destCountry: obj ? (obj.value) : ''
            };
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.viewSearchIndents, searchData).subscribe(function (response) {
                console.log(response);
                _this.gateSecurityIndents = [];
                if (response['statusCode'] == 200) {
                    _this.clearSummaryData();
                    _this.gateSecurityIndents = response['data'].indents;
                    _this.gateSecurityIndents = _this.gateSecurityIndents.slice();
                    _this.page.limit = response['data'].pageLength;
                    _this.page.count = response['data'].total;
                    _this.reportTruckTableShow = true;
                    _this.calculateSummaryData();
                    _this.isLoading = false;
                }
                else {
                    _this.isLoading = false;
                    _this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong ", "! Error");
                }
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //clear all  the data
    ReportTruckComponent.prototype.clearAll = function () {
        this.indentID = '';
        this.transporter = '';
        this.fromDate = '';
        this.ToDate = '';
        this.destinationDesc = "";
        this.descriptionList = [];
        this.transporterList = [];
        this.destination = '';
        this.destinationList = [];
        this.destCountryName = '';
    };
    //data table server side pagination
    ReportTruckComponent.prototype.datatablePageData = function (pageInfo) {
        var _this = this;
        this.index = pageInfo.offset;
        this.isLoading = true;
        // this.page.offset = pageInfo.offset;
        console.log("page info", pageInfo);
        var datatabledata = {
            index: pageInfo.offset,
            pageLength: pageInfo.pageSize,
            fromDispatchDate: this.fromDate ? (moment__WEBPACK_IMPORTED_MODULE_7__(this.fromDate).format("DD/MM/YYYY")) : '',
            toDispatchDate: this.ToDate ? (moment__WEBPACK_IMPORTED_MODULE_7__(this.ToDate).format("DD/MM/YYYY")) : '',
            indentID: this.indentID,
            transporter: this.transporter,
            destination: this.destination
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.viewSearchIndents, datatabledata).subscribe(function (response) {
            _this.clearSummaryData();
            _this.gateSecurityIndents = response['data'].indents;
            _this.gateSecurityIndents = _this.gateSecurityIndents.slice();
            _this.page.limit = response['data'].pageLength;
            _this.page.count = response['data'].total;
            _this.calculateSummaryData();
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //   reportIndent(reportIndentData) {
    //     //Check TruckNumber Is entered or not
    //     if (reportIndentData.truckNumber && reportIndentData.truckNumber != null) {
    //       //Check Truck Type Is entered or not
    //       if (reportIndentData.truckType && reportIndentData.truckType != null) {
    //         //Check Driver Name Is entered or not
    //         if (reportIndentData.driverName && reportIndentData.driverName != null) {
    //           //Check DRIVER Contact Is entered or not
    //           if (reportIndentData.driverContact && reportIndentData.driverContact != null) {
    //             //Check DRIVER License Is entered or not
    //             if (reportIndentData.driverLicense && reportIndentData.driverLicense != null) {
    //               //Check Gps Enabled  Is entered or not
    //               // if (reportIndentData.gpsEnabled && reportIndentData.gpsEnabled != null) {
    //               //check GPS provider Data entered or not
    //               // if (reportIndentData.gpsProvider && reportIndentData.gpsProvider != null) {
    //               //   this.reportTruckSendableData(reportIndentData);
    //               // } else {
    //               //   this.toastr.error("Please enter Gps Provider");
    //               // }
    //               //} else {
    //               if (reportIndentData.truckGrossVehicleWt && reportIndentData.truckGrossVehicleWt != null){
    //                 console.log(reportIndentData.truckCapacity);
    //                 this.reportTruckSendableData(reportIndentData);
    //               } else {
    //                 this.toastr.error("Please enter Truck Capacity");  
    //               }
    // //            // }
    //             } else {
    //               this.toastr.error("Please enter driver license number");
    //             }
    //           } else {
    //             this.toastr.error("Please enter driver number");
    //           }
    //         } else {
    //           this.toastr.error("Please enter driver name");
    //         }
    //       } else {
    //         this.toastr.error("Please enter truck type");
    //       }
    //     } else {
    //       this.toastr.error("Please enter truck number");
    //     }
    //   }
    //May 2023
    ReportTruckComponent.prototype.reportIndent = function (reportIndentData) {
        console.log("Printing Data");
        console.log(reportIndentData);
        //Calculate truck capacity 
        reportIndentData.truckCapacity = reportIndentData.truckGrossVehicleWt - reportIndentData.truckUnladenWt;
        //May 2023
        if (reportIndentData.bsNorms && reportIndentData.bsNorms != null) {
            if (reportIndentData.fuelType && reportIndentData.fuelType != null) {
                if (reportIndentData.truckGrossVehicleWt && reportIndentData.truckGrossVehicleWt != null) {
                    if (reportIndentData.truckUnladenWt && reportIndentData.truckUnladenWt != null) {
                        //Check TruckNumber Is entered or not
                        if (reportIndentData.truckNumber && reportIndentData.truckNumber != null) {
                            //Check Truck Type Is entered or not
                            if (reportIndentData.truckType && reportIndentData.truckType != null) {
                                //Check Driver Name Is entered or not
                                if (reportIndentData.driverName && reportIndentData.driverName != null) {
                                    //Check DRIVER Contact Is entered or not
                                    if (reportIndentData.driverContact && reportIndentData.driverContact != null) {
                                        //Check DRIVER License Is entered or not
                                        if (reportIndentData.driverLicense && reportIndentData.driverLicense != null) {
                                            //Check Gps Enabled  Is entered or not
                                            // if (reportIndentData.gpsEnabled && reportIndentData.gpsEnabled != null) {
                                            //check GPS provider Data entered or not
                                            // if (reportIndentData.gpsProvider && reportIndentData.gpsProvider != null) {
                                            //   this.reportTruckSendableData(reportIndentData);
                                            // } else {
                                            //   this.toastr.error("Please enter Gps Provider");
                                            // }
                                            //} else {
                                            this.reportTruckSendableData(reportIndentData);
                                            // }
                                        }
                                        else {
                                            this.toastr.error("Please enter driver license number");
                                        }
                                    }
                                    else {
                                        this.toastr.error("Please enter driver number");
                                    }
                                }
                                else {
                                    this.toastr.error("Please enter driver name");
                                }
                            }
                            else {
                                this.toastr.error("Please enter truck type");
                            }
                        }
                        else {
                            this.toastr.error("Please enter truck number ");
                        }
                    }
                    else {
                        this.toastr.error("Please enter Unladen Weight");
                    }
                }
                else {
                    this.toastr.error("Please enter Gross Vehicle Weight");
                }
            }
            else {
                this.toastr.error("Please select fuel type");
            }
        }
        else {
            this.toastr.error("Please select BS Norms");
        }
    };
    ReportTruckComponent.prototype.addEvent = function (type, event) {
        console.log(event.target.value);
        if (event.target.value) {
            switch (type) {
                /* Checking if selected from date greater than to date.
            Clearing the toDate field when from date greater than to date */
                case "fromDateReport":
                    var checkToDate = this.ToDate;
                    console.log("Check--->1", checkToDate);
                    if (this.ToDate == this.currentDateAsString) {
                        // on page load we are defaluting the  to date with string. Comparing string with date is not possible
                        // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
                        checkToDate = new Date();
                        console.log("Check--->2", checkToDate);
                    }
                    if (this.ToDate && (this.fromDate > checkToDate)) {
                        this.ToDate = '';
                    }
                    // this.ToDate = '';
                    break;
                default:
                    break;
            }
        }
    };
    //get filter destination result
    ReportTruckComponent.prototype.getfilterDestination = function (event) {
        var _this = this;
        this.destinationDesc = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                console.log("respio", response);
                _this.destinationList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //Report truck Sendable data
    ReportTruckComponent.prototype.reportTruckSendableData = function (reportIndentData) {
        var _this = this;
        this.isLoading = true;
        var data = reportIndentData;
        data['indentId'] = this.reportingIndentId;
        data['status'] = "REPORTED";
        var indentdata = this.gateSecurityIndents.find(function (item) { return item.indentId == data.indentId; });
        data.destDis = indentdata.destDis;
        console.log(data);
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.getIndentReportInfo, data).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                var deleteRowIndex = _this.gateSecurityTransportReport.indexOf(reportIndentData);
                _this.gateSecurityTransportReport.splice(deleteRowIndex, 1);
                var resposneData = response['data'];
                // let noOfTrucksReported = resposneData.reported;
                _this.numberofManualEntries = resposneData.netBalance;
                // if (resposneData.reported < resposneData.netRequested) {
                if (_this.numberofManualEntries) {
                    // this.gateSecurityTransportReport = [];
                    var removebleIndex = _this.gateSecurityTransportReport.indexOf(reportIndentData);
                    if (removebleIndex != -1) {
                        _this.gateSecurityTransportReport.splice(removebleIndex, 1);
                    }
                    // Default the truck type from Indent ID
                    var currentIndentObj = _this.gateSecurityIndents.find(function (item) { return item.indentId == _this.reportingIndentId; });
                    if (_this.gateSecurityTransportReport.length == 0) {
                        _this.gateSecurityTransportReport.push({
                            truckNumber: '',
                            containerNum: '',
                            driverName: '',
                            driverContact: '',
                            driverLicense: '',
                            truckType: currentIndentObj.truckType,
                            puc: true,
                            insurance: true,
                            seatBelt: true,
                            firstAid: true,
                            fireExtenguisher: true,
                            fitnessCert: true,
                            emergencyCard: true,
                            sparKArrestor: true
                        });
                    }
                    // this.numberofManualEntries = resposneData.netRequested - resposneData.reported;
                    //   this.gpsProviderList = [];
                }
                else {
                    _this.gateSecurityTransportReport = [];
                }
                var updatebleIndex = _this.gateSecurityIndents.findIndex(function (data) { return data.indentId == _this.reportingIndentId; });
                _this.gateSecurityIndents[updatebleIndex] = resposneData;
                _this.gateSecurityIndents = _this.gateSecurityIndents.slice();
                _this.reportedTrucks = [];
                _this.reportedTrucks = resposneData['reportedTrucks'];
                _this.reportedTrucks = _this.reportedTrucks.slice();
                _this.isLoading = false;
                _this.toastr.success(response['message'] ? response['message'] : " Truck assigned sucessfully", "success");
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong ", "!Error");
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // submit data
    // create manual trcuk assign
    ReportTruckComponent.prototype.manualTruckAssign = function (row) {
        var _this = this;
        // Default the truck type from Indent ID
        var currentIndentObj = this.gateSecurityIndents.find(function (item) { return item.indentId == _this.reportingIndentId; });
        if (this.numberofManualEntries > this.gateSecurityTransportReport.length) {
            this.gateSecurityTransportReport.push({
                truckNumber: '',
                driverName: '',
                driverContact: '',
                driverLicense: '',
                truckType: currentIndentObj.truckType,
                puc: true,
                insurance: true,
                seatBelt: true,
                firstAid: true,
                fireExtenguisher: true,
                fitnessCert: true,
                emergencyCard: true,
                sparKArrestor: true
            });
            this.gateSecurityTransportReport = this.gateSecurityTransportReport.slice();
        }
        else {
            if (!this.truckDetails) {
                this.toastr.error("Can't add more than requested");
            }
            else {
            }
        }
    };
    //set value destination
    ReportTruckComponent.prototype.setDestination = function (value) {
        //  this.destinationDesc = value;
        this.destination = value;
    };
    //set value to destination description
    ReportTruckComponent.prototype.setDestDescription = function (value) {
        this.destinationDesc = value;
    };
    ReportTruckComponent.prototype.getUserDestinationList = function (event) {
        var _this = this;
        this.destination = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.getDestinationDescriptionDataList + event.target.value).subscribe(function (response) {
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
    //getReportedDriversDetails
    ReportTruckComponent.prototype.getReportedDriverDetails = function (truckNumber, Index) {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.getReportedDriverDetails + truckNumber + "&indentId=" + this.reportingIndentId).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.isLoading = false;
                //        this.gateSecurityTransportReport[Index].truckNumber = response['data'].
                _this.gateSecurityTransportReport[Index].containerNum = response['data'].containerNum;
                _this.gateSecurityTransportReport[Index].driverName = response['data'].driverName;
                _this.gateSecurityTransportReport[Index].driverContact = response['data'].driverContact;
                _this.gateSecurityTransportReport[Index].driverLicense = response['data'].driverLicense;
                _this.gateSecurityTransportReport[Index].puc = response['data'].puc;
                _this.gateSecurityTransportReport[Index].insurance = response['data'].insurance;
                _this.gateSecurityTransportReport[Index].seatBelt = response['data'].seatBelt;
                _this.gateSecurityTransportReport[Index].firstAid = response['data'].firstAid;
                _this.gateSecurityTransportReport[Index].fireExtenguisher = response['data'].fireExtenguisher;
                _this.gateSecurityTransportReport[Index].fitnessCert = response['data'].fitnessCert;
                _this.gateSecurityTransportReport[Index].emergencyCard = response['data'].emergencyCard;
                _this.gateSecurityTransportReport[Index].sparKArrestor = response['data'].sparKArrestor;
                _this.gateSecurityTransportReport[Index].truckUnladenWt = response['data'].truckUnladenWt;
                _this.gateSecurityTransportReport[Index].truckGrossVehicleWt = response['data'].truckGrossVehicleWt;
                _this.gateSecurityTransportReport[Index].fuelType = response['data'].fuelType;
                _this.gateSecurityTransportReport[Index].bsNorms = response['data'].bsNorms;
                // this.gateSecurityTransportReport[Index].truckType = response['data'].truckType;
                // this.gateSecurityTransportReport[Index].driverContact = response['data'].driverName;
            }
            else {
                _this.isLoading = false;
                _this.gateSecurityTransportReport[Index].containerNum = '';
                _this.gateSecurityTransportReport[Index].driverName = '';
                _this.gateSecurityTransportReport[Index].driverContact = '';
                _this.gateSecurityTransportReport[Index].driverLicense = '';
                // this.gateSecurityTransportReport[Index].puc = '';
                // this.gateSecurityTransportReport[Index].insurance = '';
                // this.gateSecurityTransportReport[Index].seatBelt = '';
                // this.gateSecurityTransportReport[Index].firstAid = '';
                // this.gateSecurityTransportReport[Index].fireExtenguisher = '';
                // this.gateSecurityTransportReport[Index].fitnessCert = '';
                // this.gateSecurityTransportReport[Index].emergencyCard = '';
                // this.gateSecurityTransportReport[Index].sparKArrestor = '';
                // this.gateSecurityTransportReport[Index].truckType = '';   
                // this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong ", "! Error");
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // report truck details
    ReportTruckComponent.prototype.truckDetails = function (row) {
        this.IsReportedIndentsShow = true;
        this.reportingIndentId = row.indentId;
        var totalTrucksRequested = row.netRequested;
        this.reportedTrucks = row.reportedTrucks;
        this.reportedTrucks = this.reportedTrucks.slice();
        // this.numberofManualEntries = totalTrucksRequested - this.reportedTrucks.length;
        this.numberofManualEntries = row.netBalance;
        this.gateSecurityTransportReport = [];
        // for (let i = 0; i < this.numberofManualEntries; i++) {
        this.manualTruckAssign(row);
        console.log(this.gateSecurityTransportReport);
        // }
        // this.isLoading = true;
        // this.reportingIndentId = row.indentId;
        // let totalTrucksRequested = row.indented;
        // this.gateSecurityTransportReport = [];
        // this.service.get_service(ApiserviceService.apisList.getIndentReportInfo + "?indentId=" + this.reportingIndentId).subscribe(response => {
        //   console.log(response);
        //   if (response['statusCode'] == 200) {
        //     this.reportedTrucks = response['data'];
        //     this.reportedTrucks = [...this.reportedTrucks];
        //     this.reportTruckTableShow = true;
        //     this.numberofManualEntries = totalTrucksRequested - this.reportedTrucks.length;
        //     //for (let i = 0; i < numberofManualEntries; i++) {
        //     this.manualTruckAssign();
        //     console.log(this.gateSecurityTransportReport)
        //     // }
        //     this.isLoading = false;
        //   } else {
        //     this.isLoading = false;
        //     this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong", "!Error")
        //   }
        // }, (err) => {
        //   console.log("Error", err);
        //   this.toastr.error(err ? err : "Something went wrong..", "Error!");
        //   this.isLoading = false;
        // })
    };
    //get filter destination result
    ReportTruckComponent.prototype.countryOfDestinationFilter = function (event, type) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.searchFilter + '?' + type + '=' + filtervalue).subscribe(function (response) {
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
    //manual truck assign removal line 
    ReportTruckComponent.prototype.removeManualTruckAssign = function (index) {
        this.gateSecurityTransportReport.splice(index, 1);
    };
    ReportTruckComponent.prototype.calculateSummaryData = function () {
        if (this.gateSecurityIndents.length > 0) {
            this.netRequestedSum = this.gateSecurityIndents.reduce(function (sum, _a) {
                var netRequested = _a.netRequested;
                return sum + netRequested;
            }, 0);
            this.reportedSum = this.gateSecurityIndents.reduce(function (sum, _a) {
                var reported = _a.reported;
                return sum + reported;
            }, 0);
            this.rejectedSum = this.gateSecurityIndents.reduce(function (sum, _a) {
                var rejected = _a.rejected;
                return sum + rejected;
            }, 0);
            this.netBalanceSum = this.gateSecurityIndents.reduce(function (sum, _a) {
                var netBalance = _a.netBalance;
                return sum + netBalance;
            }, 0);
        }
    };
    ReportTruckComponent.prototype.clearSummaryData = function () {
        this.netRequestedSum = 0;
        this.reportedSum = 0;
        this.rejectedSum = 0;
        this.netBalanceSum = 0;
    };
    ReportTruckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-truck',
            template: __webpack_require__(/*! ./report-truck.component.html */ "./src/app/gate-security/report-truck/report-truck.component.html"),
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"], useClass: _public_date_adapters__WEBPACK_IMPORTED_MODULE_2__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: _public_date_adapters__WEBPACK_IMPORTED_MODULE_2__["APP_DATE_FORMATS"]
                }
            ],
            styles: [__webpack_require__(/*! ./report-truck.component.scss */ "./src/app/gate-security/report-truck/report-truck.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            src_app_services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_6__["HelperServiceService"]])
    ], ReportTruckComponent);
    return ReportTruckComponent;
}());



/***/ }),

/***/ "./src/app/gate-security/report-truck/report-truck.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/gate-security/report-truck/report-truck.module.ts ***!
  \*******************************************************************/
/*! exports provided: ReportTruckModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportTruckModule", function() { return ReportTruckModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _report_truck_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-truck.component */ "./src/app/gate-security/report-truck/report-truck.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _report_truck_component__WEBPACK_IMPORTED_MODULE_4__["ReportTruckComponent"] },
];
var ReportTruckModule = /** @class */ (function () {
    function ReportTruckModule() {
    }
    ReportTruckModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__["CustomDatePipeModule"]
            ],
            declarations: [
                _report_truck_component__WEBPACK_IMPORTED_MODULE_4__["ReportTruckComponent"]
            ]
        })
    ], ReportTruckModule);
    return ReportTruckModule;
}());



/***/ })

}]);
//# sourceMappingURL=gate-security-report-truck-report-truck-module.js.map