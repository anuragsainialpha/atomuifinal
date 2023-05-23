(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gate-security-rdc-intransit-trucks-report-rdc-intransit-trucks-report-module"],{

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

/***/ "./src/app/gate-security/rdc-intransit-trucks-report/rdc-intransit-trucks-report.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/gate-security/rdc-intransit-trucks-report/rdc-intransit-trucks-report.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\">\n</app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\"><b> {{title}} </b>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"Filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n  <div class=\"clearfix\"></div>\n  <div class=\"manualplan-fields\" *ngIf=\"isShow\">\n    <div class=\"row col-md-12\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row tab-loadslip-fields\">\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"shipmentId\" autocomplete=\"off\" name=\"shipmentid\" placeholder=\"Shipment Id\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pd-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Source\" placeholder=\"Source\"\n                  (keyup)=\"getfilterDestination($event,'SOURCE', !isIntransitTruck)\" autocomplete=\"off\"\n                  [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"source\" name=\"source\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                    <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Destination\" placeholder=\"Destination\" (keyup)=\"getfilterDestination($event,'DESTINATION')\"\n                  autocomplete=\"off\" [matAutocomplete]=\"destinationAutocomplete\" [(ngModel)]=\"destination\" name=\"destination\">\n                <mat-autocomplete #destinationAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\">\n                    <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div> -->\n\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n                  [(ngModel)]=\"destination\" name=\"destination\"\n                  (keyup)=\"getfilterDestination($event,'DESTINATION',isIntransitTruck)\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\"\n                    (click)=\"setDestDescription(list.description)\"\n                    (onSelectionChange)=\"setDestDescription(list.description)\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination Description\" aria-label=\"State\"\n                  [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destination\"\n                  (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                    (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                    <span>({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Truck/Container Type\" [(ngModel)]=\"truckType\" name=\"truckType\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"truckNumber\" autocomplete=\"off\" name=\"truck number\"\n                placeholder=\"Truck Number\" oninput=\"this.value = this.value.toUpperCase()\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"transporter\" placeholder=\"Transporter\"\n                  (keyup)=\"getfilterTransporter($event)\" autocomplete=\"off\" [matAutocomplete]=\"transporterAutocomplete\"\n                  [(ngModel)]=\"transporter\" name=\"transporter\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #transporterAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of transporterList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-2\">\n            <mat-form-field>\n              <mat-select placeholder=\"Select Status\" name=\"status\" [(ngModel)]=\"statusType\">\n                <mat-option *ngFor=\"let status of reportTruckStatusList\" [value]=\"status.value\">\n                  {{status.key}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div> -->\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"truckstatusIndetsFilter()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearData()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ngx-datatable #table class='material  ngx-table-custom-scroll ngx-table-tr-custom-scroll'\n    [rows]='rdcGateSecurityTransitTrucks' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"30\"\n    [rowHeight]=\"'auto'\" [limit]=\"rdcpage.limit\" [scrollbarH]=\"true\" [count]=\"rdcpage.count\" [offset]=\"rdcpage.offset\"\n    [externalPaging]=\"true\" (page)=\"rdcGatesecurityDatetablePageData($event)\">\n    <ngx-datatable-column name=\"Truck Number\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckNumber\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckNumber | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Source\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.source}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Dest\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destination\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destination}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Shipment Id\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"shipmentId\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.shipmentId}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Dest Description\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destDis\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destDis}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Truck Type\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckType\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckType | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Transporter\" [width]=\"140\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"transporter\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.transporter | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Source Report Date\" [width]=\"125\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"reportedDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.reportedDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Source Gate Out\" [width]=\"125\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"gateOutDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span *ngIf=\"row.gateOut\">{{row.gateOutDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span>\n        <button mat-raised-button color=\"primary\" *ngIf=\"!(row.gateOut)\" (click)=\"eventTrigger(row,'INTRANSIT')\"\n          class=\"table-btn\">Gate\n          Out</button>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"ETA\" [width]=\"125\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"etaDest\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span>{{row.etaDest | customDateFormat | date:'dd-MMM-yyyy' || '--'}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Driver Name\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"driverName\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span>{{row.driverName}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Driver Number\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"driverName\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span>{{row.driverContact}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- <ngx-datatable-column name=\"Driver License\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"driverName\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span>{{row.driverLicense}}</span>\n      </ng-template>\n    </ngx-datatable-column> -->\n    <ngx-datatable-column name=\"Status\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"status\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.status}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Action\" [width]=\"100\" [resizeable]=\"false\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <button mat-raised-button color=\"primary\" (click)=\"reportTruck(row)\" class=\"table-btn\"\n          *ngIf=\"(!row.truckReported)\">Report</button>\n        <span *ngIf=\"(row.truckReported)\">REPORTED</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- Footer Template starts -->\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedCount\">\n            {{selectedCount.toLocaleString()}} Selected |\n          </span>\n          Showing {{(offset * pageSize)+1}} to {{(rowCount>\n              (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n          {{(rowCount)}} records.\n        </div>\n        <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n          [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n          [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n          (change)=\"table.onFooterPage($event)\">\n        </datatable-pager>\n      </ng-template>\n    </ngx-datatable-footer>\n    <!-- Footer Template Ends -->\n  </ngx-datatable>\n</div>"

/***/ }),

/***/ "./src/app/gate-security/rdc-intransit-trucks-report/rdc-intransit-trucks-report.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/gate-security/rdc-intransit-trucks-report/rdc-intransit-trucks-report.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lightgreen-button {\n  width: 80%;\n  padding: 3px; }\n\n/* Blink for Webkit and others\n   (Chrome, Safari, Firefox, IE, ...)\n   */\n\n@-webkit-keyframes blinker {\n  from {\n    opacity: 1.0; }\n  to {\n    opacity: 0.0; } }\n\n.blink {\n  color: #fff;\n  display: block;\n  padding: 4px;\n  background-color: #5a3094;\n  text-align: center;\n  border-radius: 4px;\n  text-decoration: blink;\n  -webkit-animation-name: blinker;\n  -webkit-animation-duration: 0.6s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-direction: alternate; }\n\n.manulal-plan-header {\n  padding: 5px 0px;\n  margin-bottom: 0px;\n  font-weight: 600; }\n\n.manulal-plan-header span {\n    color: #3F2B53;\n    margin-right: 15px; }\n\n.manualplan-fields {\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0px; }\n\n.manualplan-fields p > i {\n    cursor: pointer; }\n\n.manualplan-fields .col-md-3 {\n    padding: 0px 15px; }\n\n.manualplan-fields .form-group {\n    margin-bottom: 0; }\n\n.manualplan-fields .form-group .mat-form-field .mat-form-field-wrapper {\n      padding-bottom: 0.5em !important; }\n\n.show-entries .mat-form-field-label {\n  display: none !important; }\n\n.manual-plan-table {\n  margin-top: 10px;\n  width: 100%;\n  overflow: hidden;\n  overflow-x: auto; }\n\n.manual-plan-table table {\n    table-layout: fixed;\n    margin-bottom: 0em; }\n\n.manual-plan-table table tr {\n      height: 30px; }\n\n.manual-plan-table table tr th {\n        width: 150px;\n        padding: 0.3rem; }\n\n.manual-plan-table table tr td {\n        width: 150px;\n        padding: 0.25rem; }\n\n.ngx-datatable.material {\n  margin-top: 20px; }\n\n.margin-top-10 {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2F0ZS1zZWN1cml0eS9yZGMtaW50cmFuc2l0LXRydWNrcy1yZXBvcnQvQzpcXFVzZXJzXFxBbnVyYWdTYWluaVxcRG93bmxvYWRzXFxhdG9tLXVpX29yaWdpbmFsXzIxMDkyMDIyXFxhdG9tLXVpL3NyY1xcYXBwXFxnYXRlLXNlY3VyaXR5XFxyZGMtaW50cmFuc2l0LXRydWNrcy1yZXBvcnRcXHJkYy1pbnRyYW5zaXQtdHJ1Y2tzLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2F0ZS1zZWN1cml0eS9yZGMtaW50cmFuc2l0LXRydWNrcy1yZXBvcnQvcmRjLWludHJhbnNpdC10cnVja3MtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nYXRlLXNlY3VyaXR5L3JkYy1pbnRyYW5zaXQtdHJ1Y2tzLXJlcG9ydC9DOlxcVXNlcnNcXEFudXJhZ1NhaW5pXFxEb3dubG9hZHNcXGF0b20tdWlfb3JpZ2luYWxfMjEwOTIwMjJcXGF0b20tdWkvc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFFYjs7SUNFQzs7QURFRDtFQUNJO0lBQU0sWUFBWSxFQUFBO0VBQ2xCO0lBQUksWUFBWSxFQUFBLEVBQUE7O0FBRWxCO0VBQ00sV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3hCLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsMkNBQTBDO0VBQzFDLDhDQUE2QztFQUM3QyxzQ0FBc0MsRUFBQTs7QUFNNUM7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUhwQjtJQUtRLGNFbENjO0lGbUNkLGtCQUFrQixFQUFBOztBQUsxQjtFQUNJLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUhoQjtJQUtRLGVBQWUsRUFBQTs7QUFMdkI7SUFRUSxpQkFBaUIsRUFBQTs7QUFSekI7SUFXUSxnQkFBZ0IsRUFBQTs7QUFYeEI7TUFjZ0IsZ0NBQWdDLEVBQUE7O0FBS2hEO0VBRVEsd0JBQXdCLEVBQUE7O0FBR2hDO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVU7RUFDVixnQkFBZTtFQUNmLGdCQUFlLEVBQUE7O0FBSm5CO0lBTVEsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBOztBQVAxQjtNQVNZLFlBQVcsRUFBQTs7QUFUdkI7UUFXZ0IsWUFBVztRQUNYLGVBQWMsRUFBQTs7QUFaOUI7UUFlZ0IsWUFBVztRQUNYLGdCQUFlLEVBQUE7O0FBTS9CO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nYXRlLXNlY3VyaXR5L3JkYy1pbnRyYW5zaXQtdHJ1Y2tzLXJlcG9ydC9yZGMtaW50cmFuc2l0LXRydWNrcy1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlnaHRncmVlbi1idXR0b257XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nIDozcHg7ICAgXG4gICB9XG4gICAvKiBCbGluayBmb3IgV2Via2l0IGFuZCBvdGhlcnNcbiAgIChDaHJvbWUsIFNhZmFyaSwgRmlyZWZveCwgSUUsIC4uLilcbiAgICovXG4gICBcbiAgIEAtd2Via2l0LWtleWZyYW1lcyBibGlua2VyIHtcbiAgICAgICBmcm9tIHtvcGFjaXR5OiAxLjA7fVxuICAgICAgIHRvIHtvcGFjaXR5OiAwLjA7fVxuICAgICB9XG4gICAgIC5ibGlua3tcbiAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1YTMwOTQ7XG4gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGJsaW5rO1xuICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYmxpbmtlcjtcbiAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO1xuICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O1xuICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gICAgIH1cbiAgIFxuICAgQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xuICAgQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9taXhpbnMnO1xuICAgXG4gICAubWFudWxhbC1wbGFuLWhlYWRlcntcbiAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgIHNwYW57XG4gICAgICAgICAgIGNvbG9yOiAkZGFyay1jb2xvci10aGVtZTtcbiAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAvLyBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgfVxuICAgfVxuICAgLm1hbnVhbHBsYW4tZmllbGRze1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgIHAgPiBpe1xuICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgfVxuICAgICAgIC5jb2wtbWQtM3tcbiAgICAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XG4gICAgICAgfVxuICAgICAgIC5mb3JtLWdyb3Vwe1xuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XG4gICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH1cbiAgICAgICB9XG4gICB9XG4gICAuc2hvdy1lbnRyaWVze1xuICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcbiAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgIH1cbiAgIH1cbiAgIC5tYW51YWwtcGxhbi10YWJsZXtcbiAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgIG92ZXJmbG93LXg6YXV0bztcbiAgICAgICB0YWJsZXtcbiAgICAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMGVtO1xuICAgICAgICAgICB0cntcbiAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xuICAgICAgICAgICAgICAgdGh7XG4gICAgICAgICAgICAgICAgICAgd2lkdGg6MTUwcHg7XG4gICAgICAgICAgICAgICAgICAgcGFkZGluZzowLjNyZW07XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB0ZHtcbiAgICAgICAgICAgICAgICAgICB3aWR0aDoxNTBweDtcbiAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAuMjVyZW07XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH1cbiAgICAgICB9XG4gICB9XG4gICBcbiAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFse1xuICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICB9XG4gICAubWFyZ2luLXRvcC0xMHtcbiAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgfSIsIi5saWdodGdyZWVuLWJ1dHRvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDNweDsgfVxuXG4vKiBCbGluayBmb3IgV2Via2l0IGFuZCBvdGhlcnNcbiAgIChDaHJvbWUsIFNhZmFyaSwgRmlyZWZveCwgSUUsIC4uLilcbiAgICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmtlciB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDEuMDsgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMC4wOyB9IH1cblxuLmJsaW5rIHtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTMwOTQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IGJsaW5rO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBibGlua2VyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7IH1cblxuLm1hbnVsYWwtcGxhbi1oZWFkZXIge1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgLm1hbnVsYWwtcGxhbi1oZWFkZXIgc3BhbiB7XG4gICAgY29sb3I6ICMzRjJCNTM7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4OyB9XG5cbi5tYW51YWxwbGFuLWZpZWxkcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAwcHg7IH1cbiAgLm1hbnVhbHBsYW4tZmllbGRzIHAgPiBpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLm1hbnVhbHBsYW4tZmllbGRzIC5jb2wtbWQtMyB7XG4gICAgcGFkZGluZzogMHB4IDE1cHg7IH1cbiAgLm1hbnVhbHBsYW4tZmllbGRzIC5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XG4gICAgLm1hbnVhbHBsYW4tZmllbGRzIC5mb3JtLWdyb3VwIC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW0gIWltcG9ydGFudDsgfVxuXG4uc2hvdy1lbnRyaWVzIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4ubWFudWFsLXBsYW4tdGFibGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogYXV0bzsgfVxuICAubWFudWFsLXBsYW4tdGFibGUgdGFibGUge1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMGVtOyB9XG4gICAgLm1hbnVhbC1wbGFuLXRhYmxlIHRhYmxlIHRyIHtcbiAgICAgIGhlaWdodDogMzBweDsgfVxuICAgICAgLm1hbnVhbC1wbGFuLXRhYmxlIHRhYmxlIHRyIHRoIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBwYWRkaW5nOiAwLjNyZW07IH1cbiAgICAgIC5tYW51YWwtcGxhbi10YWJsZSB0YWJsZSB0ciB0ZCB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgcGFkZGluZzogMC4yNXJlbTsgfVxuXG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cblxuLm1hcmdpbi10b3AtMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4OyB9XG4iLCIkdGhlbWUtcHVycGxlLWJhY2tncm91bmQtY29sb3I6I0ZBRjlGRTtcbiRkYXJrLWNvbG9yLXRoZW1lOiMzRjJCNTM7XG4kdGhlbWUtcHVycGxlLWNvbG9yOiM1QTMwOTQ7XG4kbGlnaHQtY29sb3ItdGhlbWU6I2Q0YjZmZjtcbiRtZWRpdW0tY29sb3ItdGhlbWU6ICM3NzU4OTk7XG4kdGhlbWUtZ3JleTojYWFhO1xuJHRoZW1lLWxpZ2h0LWdyZXk6ICNjY2M7XG4kdGhlbWUtd2hpdGU6I2ZmZmZmZjtcbiR0aGVtZS1ibGFjazojMDAwO1xuJHRoZW1lLWJsdWUtY29sb3I6IzIxOTZmMztcbiR0aGVtZS1ncmVlbi1jb2xvcjojNDE3NTA1O1xuJHRoZW1lLWxpZ2h0LWdyZWVuLWNvbG9yOiNCOEU5ODY7XG4kdGhlbWUtbGlnaHQtYnJvd24tY29sb3I6I0VDRTE1NSA7XG4kdGhlbWUtYnJvd24tY29sb3I6IzlCOTMyQjtcbiR0aGVtZS1icm93bi1ib3JkZXI6I0NGQzMyRDtcbiR0aGVtZS1zZWFyY2hib3gtYmFja2dyb3VuZC1jb2xvcjojRjlGNEZGO1xuJHRoZW1lLW9wYWN0aXR5LWJvcmRlcjojYmU5NmY1O1xuJHRoZW1lLXJlZC10ZXh0OiNDNzNEM0Q7XG4kdGhlbWUtcmVkLWJhY2tncm91bmQtY29sb3I6ICNGQ0FFQUU7XG4kdGhlbWVuLXJlZC1ib3JkZXItY29sb3I6I0VENzM3MztcbiR0YWJsZS1ib3JkZXItY29sb3I6ICNkZWUyZTY7XG4kc2Vjb25kYXJ5LXRoZW1lOiAjYzI1NjNmO1xuJHNlY29uZGFyeS1saWdodC10aGVtZTogI2VmY2NjNTsiXX0= */"

/***/ }),

/***/ "./src/app/gate-security/rdc-intransit-trucks-report/rdc-intransit-trucks-report.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/gate-security/rdc-intransit-trucks-report/rdc-intransit-trucks-report.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: RdcIntransitTrucksReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdcIntransitTrucksReportComponent", function() { return RdcIntransitTrucksReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RdcIntransitTrucksReportComponent = /** @class */ (function () {
    function RdcIntransitTrucksReportComponent(service, toastr) {
        var _this = this;
        this.service = service;
        this.toastr = toastr;
        this.isShow = true;
        this.rdcGateSecurityTransitTrucks = [];
        this.rdcpage = {
            limit: 10,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 100
        };
        this.descriptionList = [];
        this.sourceList = [];
        this.truckList = [];
        this.isIntransitTruck = true;
        this.userRoles = src_app_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].roles;
        this.reportLocation = localStorage.getItem("sourceID");
        this.isLoading = true;
        this.isLoading = true;
        var data = {
            reportLocation: this.reportLocation,
            type: "INTRANSIT"
        };
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getTruckData, data).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                _this.rdcGateSecurityTransitTrucks = response['data'].truckReportsData;
                _this.rdcGateSecurityTransitTrucks = _this.rdcGateSecurityTransitTrucks.slice();
                _this.rdcpage.limit = response['data'].pageLength;
                _this.rdcpage.count = response['data'].total;
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
    }
    RdcIntransitTrucksReportComponent.prototype.ngOnInit = function () {
        //Activation of Tabs
        if (this.service.checkRole() == this.userRoles.rdc_PLN || (this.service.checkRole() == this.userRoles.JIT_OPERATION)) {
            localStorage.setItem("userMenu", "RDC-GAT-REPORT");
        }
        else if ((this.service.checkRole() == this.userRoles.gateSecurity) || (this.service.checkRole() == this.userRoles.rdc_GAT) || (this.service.checkRole() == this.userRoles.JIT_GATE_SECURITY)) {
            localStorage.setItem("userMenu", "GAT-INTRASIT");
        }
        else {
            localStorage.setItem("userMenu", "fgs-truck-status");
        }
        //show the title based on the Role 
        if (this.service.checkRole() == this.userRoles.gateSecurity) {
            this.title = "FGS > Report Truck >In-Transit Truck";
        }
        else if ((this.service.checkRole() == this.userRoles.JIT_GATE_SECURITY) || (this.service.checkRole() == this.userRoles.JIT_OPERATION)) {
            this.title = " FGS-JIT > Report Trucks > In-Transit Truck";
        }
        else if ((this.service.checkRole() == this.userRoles.fgsOperations2) || (this.service.checkRole() == this.userRoles.fgsOperations1)
            || (this.service.checkRole() == this.userRoles.fgsOperations3) || (this.service.checkRole() == this.userRoles.fgsOperations4)) {
            this.title = "FGS > Report Trucks > In-Transit Truck";
        }
        else {
            this.title = " Receiving RDC > Report Trucks > In-Transit Truck";
        }
        // for getting truck type master
        this.getTruckTypeMasterData();
    };
    // for getting truck type master
    RdcIntransitTrucksReportComponent.prototype.getTruckTypeMasterData = function () {
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
    RdcIntransitTrucksReportComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    RdcIntransitTrucksReportComponent.prototype.rdcGatesecurityDatetablePageData = function (data) {
    };
    //report truck 
    RdcIntransitTrucksReportComponent.prototype.reportTruck = function (data) {
        var _this = this;
        this.isLoading = true;
        var postData = {
            truckNumber: data.truckNumber,
            status: src_app_constants__WEBPACK_IMPORTED_MODULE_3__["rdcReportTruckStatus"].reported,
            destDis: data.destDis,
            gateControlCode: data.gateControlCode,
        };
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.reportIntransitTruck, postData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var modifibleIndex = _this.rdcGateSecurityTransitTrucks.findIndex(function (respData) { return respData.truckNumber == postData.truckNumber; });
                // this.rdcGateSecurityTransitTrucks[modifibleIndex]=response['data'];
                if (modifibleIndex != -1) {
                    // this.rdcGateSecurityTransitTrucks.splice(modifibleIndex, 1);
                    _this.rdcGateSecurityTransitTrucks[modifibleIndex] = response['data'];
                    _this.rdcGateSecurityTransitTrucks = _this.rdcGateSecurityTransitTrucks.slice();
                }
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
    //set value destination
    RdcIntransitTrucksReportComponent.prototype.setDestination = function (value) {
        //  this.destinationDesc = value;
        this.destination = value;
    };
    //set value to destination description
    RdcIntransitTrucksReportComponent.prototype.setDestDescription = function (value) {
        this.destinationDesc = value;
    };
    RdcIntransitTrucksReportComponent.prototype.getUserDestinationList = function (event) {
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
    //event Trigger
    RdcIntransitTrucksReportComponent.prototype.eventTrigger = function (data, typeofevent) {
        var _this = this;
        this.isLoading = true;
        var postData = {
            truckNumber: data.truckNumber,
            status: typeofevent,
            gateControlCode: data.gateControlCode,
            destDis: data.destDis
        };
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.reportIntransitTruck, postData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var replacebleIndex = _this.rdcGateSecurityTransitTrucks.findIndex(function (rawData) { return rawData.truckNumber == data.truckNumber; });
                _this.rdcGateSecurityTransitTrucks[replacebleIndex] = response['data'];
                _this.rdcGateSecurityTransitTrucks = _this.rdcGateSecurityTransitTrucks.slice();
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
    //get filter destination result
    //isIntransitTruck is used to fetch the loggedIn plant Loc in destination LOVs.
    //isIntransitTruck is sent as TRUE in destination search and FALSE in source search.
    RdcIntransitTrucksReportComponent.prototype.getfilterDestination = function (event, typeofFIlte, isIntransitTruck) {
        var _this = this;
        this.destinationDesc = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue + '&isIntransitTruck=' + isIntransitTruck).subscribe(function (response) {
                if (typeofFIlte == 'DESTINATION') {
                    _this.destinationList = response['data'].searchResult;
                    console.log("this.destinationList", _this.destinationList);
                }
                else {
                    _this.sourceList = response['data'].searchResult;
                }
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter Transporter details
    RdcIntransitTrucksReportComponent.prototype.getfilterTransporter = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.transporterList = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?transporter=' + filtervalue).subscribe(function (response) {
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
    //clear data
    RdcIntransitTrucksReportComponent.prototype.clearData = function () {
        this.destination = '';
        this.indentId = "";
        // this.statusType = "";
        this.shipmentId = "";
        this.destinationDesc = "";
        this.descriptionList = [];
        this.transporter = "";
        this.truckNumber = "";
        this.truckType = [];
        this.destinationList = [];
        this.transporterList = [];
        this.source = '';
    };
    RdcIntransitTrucksReportComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    //refersh data 
    RdcIntransitTrucksReportComponent.prototype.refreshData = function () {
        var _this = this;
        this.clearData();
        // this.destination = '';
        // this.indentId = "";
        // this.transporter = "";
        // this.truckNumber = "";
        // this.truckType = "";
        // this.destinationList = [];
        // this.transporterList = [];
        // this.source = '';
        this.table.offset = 0;
        this.isLoading = true;
        var data = {
            reportLocation: this.reportLocation,
            type: "INTRANSIT"
        };
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getTruckData, data).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                _this.rdcGateSecurityTransitTrucks = response['data'].truckReportsData;
                _this.rdcGateSecurityTransitTrucks = _this.rdcGateSecurityTransitTrucks.slice();
                _this.rdcpage.limit = response['data'].pageLength;
                _this.rdcpage.count = response['data'].total;
                _this.isLoading = false;
                // this.toastr.success(response['message'] ? response['message'] : "Success");
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
    // truck status filter creteria
    RdcIntransitTrucksReportComponent.prototype.truckstatusIndetsFilter = function () {
        var _this = this;
        this.table.offset = 0;
        this.isLoading = true;
        var data = {
            destination: this.destination,
            shipmentID: this.shipmentId,
            transporter: this.transporter,
            truckNumber: this.truckNumber,
            truckType: this.truckType,
            source: this.source,
            reportLocation: this.reportLocation,
            type: "INTRANSIT"
        };
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getTruckData, data).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                _this.rdcGateSecurityTransitTrucks = response['data'].truckReportsData;
                _this.rdcGateSecurityTransitTrucks = _this.rdcGateSecurityTransitTrucks.slice();
                _this.rdcpage.limit = response['data'].pageLength;
                _this.rdcpage.count = response['data'].total;
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
    //export excel data
    RdcIntransitTrucksReportComponent.prototype.export = function () {
        var _this = this;
        if (this.rdcGateSecurityTransitTrucks.length > 0) {
            this.isLoading = true;
            var data = {
                'destination': this.destination,
                'shipmentID': this.shipmentId,
                'transporter': this.transporter,
                'truckNumber': this.truckNumber,
                'truckType': this.truckType,
                'source': this.source,
                'reportLocation': this.reportLocation,
                'type': "INTRANSIT",
                'pageLength': this.rdcpage.count,
            };
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getTruckData, data).subscribe(function (response) {
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
                            "Truck Type": excelRawData[i].truckType,
                            "Transporter": excelRawData[i].transporter,
                            "Source Report Date": _this.service.customDateTimeFormat(excelRawData[i].reportedDate),
                            "Source Gate Out": _this.service.customDateTimeFormat(excelRawData[i].gateOutDate),
                            "ETA": _this.service.customDateTimeFormat(excelRawData[i].etaDest),
                            // "Rejection": excelRawData[i].rejectionStatus,
                            "Driver Name": excelRawData[i].driverName,
                            "Driver Number": excelRawData[i].driverContact,
                            // "Driver License":excelRawData[i].driverLicense,
                            "Status": excelRawData[i].status
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](workBook, 'intransitTrucksReport.xlsx');
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"])
    ], RdcIntransitTrucksReportComponent.prototype, "table", void 0);
    RdcIntransitTrucksReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rdc-intransit-trucks-report',
            template: __webpack_require__(/*! ./rdc-intransit-trucks-report.component.html */ "./src/app/gate-security/rdc-intransit-trucks-report/rdc-intransit-trucks-report.component.html"),
            styles: [__webpack_require__(/*! ./rdc-intransit-trucks-report.component.scss */ "./src/app/gate-security/rdc-intransit-trucks-report/rdc-intransit-trucks-report.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], RdcIntransitTrucksReportComponent);
    return RdcIntransitTrucksReportComponent;
}());



/***/ }),

/***/ "./src/app/gate-security/rdc-intransit-trucks-report/rdc-intransit-trucks-report.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/gate-security/rdc-intransit-trucks-report/rdc-intransit-trucks-report.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: rdcTrucksReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rdcTrucksReportModule", function() { return rdcTrucksReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _rdc_intransit_trucks_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rdc-intransit-trucks-report.component */ "./src/app/gate-security/rdc-intransit-trucks-report/rdc-intransit-trucks-report.component.ts");
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _rdc_intransit_trucks_report_component__WEBPACK_IMPORTED_MODULE_7__["RdcIntransitTrucksReportComponent"] },
];
var rdcTrucksReportModule = /** @class */ (function () {
    function rdcTrucksReportModule() {
    }
    rdcTrucksReportModule = __decorate([
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
                _rdc_intransit_trucks_report_component__WEBPACK_IMPORTED_MODULE_7__["RdcIntransitTrucksReportComponent"]
            ]
        })
    ], rdcTrucksReportModule);
    return rdcTrucksReportModule;
}());



/***/ })

}]);
//# sourceMappingURL=gate-security-rdc-intransit-trucks-report-rdc-intransit-trucks-report-module.js.map