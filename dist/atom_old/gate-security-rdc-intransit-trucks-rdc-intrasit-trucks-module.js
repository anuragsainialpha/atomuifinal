(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gate-security-rdc-intransit-trucks-rdc-intrasit-trucks-module"],{

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

/***/ "./src/app/gate-security/rdc-intransit-trucks/rdc-intransit-trucks.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/gate-security/rdc-intransit-trucks/rdc-intransit-trucks.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\">\n</app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\"><b>{{title}} </b>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"Filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n  <div class=\"clearfix\"></div>\n  <div class=\"manualplan-fields\" *ngIf=\"isShow\">\n    <div class=\"col-md-12 row\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row tab-loadslip-fields\">\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"shipmentId\" autocomplete=\"off\" name=\"shipmentid\" placeholder=\"Shipment Id\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pd-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Source\" placeholder=\"Source\" (keyup)=\"getfilterDestination($event,'SOURCE', !isIntransitTruck)\"\n                  autocomplete=\"off\" [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"source\" name=\"source\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                    <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Destination\" placeholder=\"Destination\" (keyup)=\"getfilterDestination($event,'DESTINATION')\"\n                  autocomplete=\"off\" [matAutocomplete]=\"destinationAutocomplete\" [(ngModel)]=\"destination\" name=\"destination\">\n                <mat-autocomplete #destinationAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\">\n                    <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div> -->\n\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n                  [(ngModel)]=\"destination\" name=\"destination\" (keyup)=\"getfilterDestination($event,'DESTINATION', isIntransitTruck)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\" (click)=\"setDestDescription(list.description)\"\n                    (onSelectionChange)=\"setDestDescription(list.description)\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination Description\" aria-label=\"State\" [matAutocomplete]=\"destDisAutocomplete\"\n                  [(ngModel)]=\"destinationDesc\" name=\"destination\" (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\" (click)=\"setDestination(list.value)\"\n                    (onSelectionChange)=\"setDestination(list.value)\">\n                    <span>({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n\n\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Truck/Container Type\" [(ngModel)]=\"truckType\" name=\"truckType\" multiple>\n                  <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"truckNumber\" autocomplete=\"off\" name=\"truck number\" placeholder=\"Truck Number\" oninput=\"this.value = this.value.toUpperCase()\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"transporter\" placeholder=\"Transporter\" (keyup)=\"getfilterTransporter($event)\"\n                  autocomplete=\"off\" [matAutocomplete]=\"transporterAutocomplete\" [(ngModel)]=\"transporter\" name=\"transporter\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #transporterAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of transporterList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-2\">\n            <mat-form-field>\n              <mat-select placeholder=\"Select Status\" name=\"status\" [(ngModel)]=\"statusType\">\n                <mat-option *ngFor=\"let status of reportTruckStatusList\" [value]=\"status.value\">\n                  {{status.key}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div> -->\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"truckstatusIndetsFilter()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearData()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ngx-datatable #table class='material  ngx-table-custom-scroll ngx-table-tr-custom-scroll' [rows]='rdcGateSecurityTransitTrucks'\n    [scrollbarH]=\"true\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [limit]=\"rdcpage.limit\"\n    [count]=\"rdcpage.count\" [offset]=\"rdcpage.offset\" [externalPaging]=\"true\" (page)=\"rdcGatesecurityDatetablePageData($event)\">\n    <ngx-datatable-column name=\"Truck Number\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckNumber\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckNumber | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Source\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"source\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.source}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Dest\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destination\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destination}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Shipment Id\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"shipmentId\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.shipmentId}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Dest Description\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destDis\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destDis}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Truck Type\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckType\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckType | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Transporter\" [width]=\"140\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"transporter\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.transporter | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- <ngx-datatable-column name=\"Gate In\" [width]=\"180\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"gateIn\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span *ngIf=\"row.gateIn\">{{row.gateInDate}}</span>\n        <button mat-raised-button color=\"primary\" *ngIf=\"!(row.gateIn)\" (click)=\"gateInTruck(row,rowIndex)\" class=\"table-btn\">Gate\n          In</button>\n      </ng-template>\n    </ngx-datatable-column> -->\n    <ngx-datatable-column name=\"Source Gate Out\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"gateOutDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span>{{row.gateOutDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"ETA\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"etaDest\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span>{{row.etaDest | customDateFormat | date:'dd-MMM-yyyy' || '--'}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Driver Name\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"driverName\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span>{{row.driverName}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Driver Number\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"driverName\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span>{{row.driverContact}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- <ngx-datatable-column name=\"Driver License\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"driverName\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span>{{row.driverLicense}}</span>\n      </ng-template>\n    </ngx-datatable-column> -->\n    <ngx-datatable-column name=\"Status\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"status\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.status}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Action\" [width]=\"220\" [resizeable]=\"false\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <button mat-raised-button color=\"primary\" (click)=\"viewLoadslip(row.shipmentId,'loadslipView')\" class=\"table-btn mr-10\">View\n          Loadslips\n        </button>\n        <button mat-raised-button color=\"primary\" (click)=\"viewLoadslip(row.shipmentId,'invoiceView')\" class=\"table-btn\">LoadSlip\n          Invoice\n        </button>\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- Footer Template starts -->\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedCount\">\n            {{selectedCount.toLocaleString()}} Selected |\n          </span>\n          Showing {{(offset * pageSize)+1}} to {{(rowCount>\n          (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n          {{(rowCount)}} records.\n        </div>\n        <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n          [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n          [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n          (change)=\"table.onFooterPage($event)\">\n        </datatable-pager>\n      </ng-template>\n    </ngx-datatable-footer>\n    <!-- Footer Template Ends -->\n  </ngx-datatable>\n</div>\n\n\n<!-- View Loadslips  for coorsponding shipment -->\n<div class=\"modal\" id=\"loadslipsModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Loadslip List</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <ul>\n          <li *ngFor=\"let item of loadslipList;let i=index\">\n            <span>\n              {{i+1}})\n              <span class=\"link\" style=\"margin-left: 10px;margin-right: 50px\" (click)=\"viewLoadslipnavigation(item)\">{{item.loadlipId}}\n              </span>\n              <span>\n                {{item.type}}\n              </span>\n            </span>\n          </li>\n        </ul>\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/gate-security/rdc-intransit-trucks/rdc-intransit-trucks.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/gate-security/rdc-intransit-trucks/rdc-intransit-trucks.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lightgreen-button {\n  width: 80%;\n  padding: 3px; }\n\n/* Blink for Webkit and others\n   (Chrome, Safari, Firefox, IE, ...)\n   */\n\n@-webkit-keyframes blinker {\n  from {\n    opacity: 1.0; }\n  to {\n    opacity: 0.0; } }\n\n.blink {\n  color: #fff;\n  display: block;\n  padding: 4px;\n  background-color: #5a3094;\n  text-align: center;\n  border-radius: 4px;\n  text-decoration: blink;\n  -webkit-animation-name: blinker;\n  -webkit-animation-duration: 0.6s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-direction: alternate; }\n\n.manulal-plan-header {\n  padding: 5px 0px;\n  margin-bottom: 0px;\n  font-weight: 600; }\n\n.manulal-plan-header span {\n    color: #3F2B53;\n    margin-right: 15px; }\n\n.manualplan-fields {\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0px; }\n\n.manualplan-fields p > i {\n    cursor: pointer; }\n\n.manualplan-fields .col-md-3 {\n    padding: 0px 15px; }\n\n.manualplan-fields .form-group {\n    margin-bottom: 0; }\n\n.manualplan-fields .form-group .mat-form-field .mat-form-field-wrapper {\n      padding-bottom: 0.5em !important; }\n\n.show-entries .mat-form-field-label {\n  display: none !important; }\n\n.manual-plan-table {\n  margin-top: 10px;\n  width: 100%;\n  overflow: hidden;\n  overflow-x: auto; }\n\n.manual-plan-table table {\n    table-layout: fixed;\n    margin-bottom: 0em; }\n\n.manual-plan-table table tr {\n      height: 30px; }\n\n.manual-plan-table table tr th {\n        width: 150px;\n        padding: 0.3rem; }\n\n.manual-plan-table table tr td {\n        width: 150px;\n        padding: 0.25rem; }\n\n.ngx-datatable.material {\n  margin-top: 20px; }\n\n.margin-top-10 {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2F0ZS1zZWN1cml0eS9yZGMtaW50cmFuc2l0LXRydWNrcy9DOlxcVXNlcnNcXEFiaGV5U29vZFxcT25lRHJpdmUgLSBBY2NlbGFscGhhIFNvZnR3YXJlIFB2dC4gTHRkXFxEZXNrdG9wXFxhdG9tIGFwb2xsb1xcQXBvbGxvXFxOZXctIEFudXJhZ1xcYXRvbS11aS9zcmNcXGFwcFxcZ2F0ZS1zZWN1cml0eVxccmRjLWludHJhbnNpdC10cnVja3NcXHJkYy1pbnRyYW5zaXQtdHJ1Y2tzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nYXRlLXNlY3VyaXR5L3JkYy1pbnRyYW5zaXQtdHJ1Y2tzL3JkYy1pbnRyYW5zaXQtdHJ1Y2tzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nYXRlLXNlY3VyaXR5L3JkYy1pbnRyYW5zaXQtdHJ1Y2tzL0M6XFxVc2Vyc1xcQWJoZXlTb29kXFxPbmVEcml2ZSAtIEFjY2VsYWxwaGEgU29mdHdhcmUgUHZ0LiBMdGRcXERlc2t0b3BcXGF0b20gYXBvbGxvXFxBcG9sbG9cXE5ldy0gQW51cmFnXFxhdG9tLXVpL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBRWI7O0lDRUM7O0FERUQ7RUFDSTtJQUFNLFlBQVksRUFBQTtFQUNsQjtJQUFJLFlBQVksRUFBQSxFQUFBOztBQUVsQjtFQUNNLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN4QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLDJDQUEwQztFQUMxQyw4Q0FBNkM7RUFDN0Msc0NBQXNDLEVBQUE7O0FBTTVDO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFIcEI7SUFLUSxjRWxDYztJRm1DZCxrQkFBa0IsRUFBQTs7QUFLMUI7RUFDSSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFIaEI7SUFLUSxlQUFlLEVBQUE7O0FBTHZCO0lBUVEsaUJBQWlCLEVBQUE7O0FBUnpCO0lBV1EsZ0JBQWdCLEVBQUE7O0FBWHhCO01BY2dCLGdDQUFnQyxFQUFBOztBQUtoRDtFQUVRLHdCQUF3QixFQUFBOztBQUdoQztFQUNJLGdCQUFnQjtFQUNoQixXQUFVO0VBQ1YsZ0JBQWU7RUFDZixnQkFBZSxFQUFBOztBQUpuQjtJQU1RLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTs7QUFQMUI7TUFTWSxZQUFXLEVBQUE7O0FBVHZCO1FBV2dCLFlBQVc7UUFDWCxlQUFjLEVBQUE7O0FBWjlCO1FBZWdCLFlBQVc7UUFDWCxnQkFBZSxFQUFBOztBQU0vQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2F0ZS1zZWN1cml0eS9yZGMtaW50cmFuc2l0LXRydWNrcy9yZGMtaW50cmFuc2l0LXRydWNrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saWdodGdyZWVuLWJ1dHRvbntcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmcgOjNweDsgICBcbiAgIH1cbiAgIC8qIEJsaW5rIGZvciBXZWJraXQgYW5kIG90aGVyc1xuICAgKENocm9tZSwgU2FmYXJpLCBGaXJlZm94LCBJRSwgLi4uKVxuICAgKi9cbiAgIFxuICAgQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rZXIge1xuICAgICAgIGZyb20ge29wYWNpdHk6IDEuMDt9XG4gICAgICAgdG8ge29wYWNpdHk6IDAuMDt9XG4gICAgIH1cbiAgICAgLmJsaW5re1xuICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVhMzA5NDtcbiAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogYmxpbms7XG4gICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBibGlua2VyO1xuICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNnM7XG4gICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7XG4gICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7XG4gICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgICAgfVxuICAgXG4gICBAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XG4gICBAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL21peGlucyc7XG4gICBcbiAgIC5tYW51bGFsLXBsYW4taGVhZGVye1xuICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgc3BhbntcbiAgICAgICAgICAgY29sb3I6ICRkYXJrLWNvbG9yLXRoZW1lO1xuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICB9XG4gICB9XG4gICAubWFudWFscGxhbi1maWVsZHN7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgcCA+IGl7XG4gICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICB9XG4gICAgICAgLmNvbC1tZC0ze1xuICAgICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgICAgICB9XG4gICAgICAgLmZvcm0tZ3JvdXB7XG4gICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcbiAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgIH1cbiAgIH1cbiAgIC5zaG93LWVudHJpZXN7XG4gICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xuICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgfVxuICAgLm1hbnVhbC1wbGFuLXRhYmxle1xuICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgb3ZlcmZsb3cteDphdXRvO1xuICAgICAgIHRhYmxle1xuICAgICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwZW07XG4gICAgICAgICAgIHRye1xuICAgICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgICAgICAgICAgICB0aHtcbiAgICAgICAgICAgICAgICAgICB3aWR0aDoxNTBweDtcbiAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAuM3JlbTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIHRke1xuICAgICAgICAgICAgICAgICAgIHdpZHRoOjE1MHB4O1xuICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MC4yNXJlbTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgIH1cbiAgIH1cbiAgIFxuICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWx7XG4gICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgIH1cbiAgIC5tYXJnaW4tdG9wLTEwe1xuICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICB9XG4gIFxuICAgXG4gICIsIi5saWdodGdyZWVuLWJ1dHRvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDNweDsgfVxuXG4vKiBCbGluayBmb3IgV2Via2l0IGFuZCBvdGhlcnNcbiAgIChDaHJvbWUsIFNhZmFyaSwgRmlyZWZveCwgSUUsIC4uLilcbiAgICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmtlciB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDEuMDsgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMC4wOyB9IH1cblxuLmJsaW5rIHtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTMwOTQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IGJsaW5rO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBibGlua2VyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7IH1cblxuLm1hbnVsYWwtcGxhbi1oZWFkZXIge1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgLm1hbnVsYWwtcGxhbi1oZWFkZXIgc3BhbiB7XG4gICAgY29sb3I6ICMzRjJCNTM7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4OyB9XG5cbi5tYW51YWxwbGFuLWZpZWxkcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAwcHg7IH1cbiAgLm1hbnVhbHBsYW4tZmllbGRzIHAgPiBpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLm1hbnVhbHBsYW4tZmllbGRzIC5jb2wtbWQtMyB7XG4gICAgcGFkZGluZzogMHB4IDE1cHg7IH1cbiAgLm1hbnVhbHBsYW4tZmllbGRzIC5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XG4gICAgLm1hbnVhbHBsYW4tZmllbGRzIC5mb3JtLWdyb3VwIC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW0gIWltcG9ydGFudDsgfVxuXG4uc2hvdy1lbnRyaWVzIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4ubWFudWFsLXBsYW4tdGFibGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogYXV0bzsgfVxuICAubWFudWFsLXBsYW4tdGFibGUgdGFibGUge1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMGVtOyB9XG4gICAgLm1hbnVhbC1wbGFuLXRhYmxlIHRhYmxlIHRyIHtcbiAgICAgIGhlaWdodDogMzBweDsgfVxuICAgICAgLm1hbnVhbC1wbGFuLXRhYmxlIHRhYmxlIHRyIHRoIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBwYWRkaW5nOiAwLjNyZW07IH1cbiAgICAgIC5tYW51YWwtcGxhbi10YWJsZSB0YWJsZSB0ciB0ZCB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgcGFkZGluZzogMC4yNXJlbTsgfVxuXG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cblxuLm1hcmdpbi10b3AtMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4OyB9XG4iLCIkdGhlbWUtcHVycGxlLWJhY2tncm91bmQtY29sb3I6I0ZBRjlGRTtcbiRkYXJrLWNvbG9yLXRoZW1lOiMzRjJCNTM7XG4kdGhlbWUtcHVycGxlLWNvbG9yOiM1QTMwOTQ7XG4kbGlnaHQtY29sb3ItdGhlbWU6I2Q0YjZmZjtcbiRtZWRpdW0tY29sb3ItdGhlbWU6ICM3NzU4OTk7XG4kdGhlbWUtZ3JleTojYWFhO1xuJHRoZW1lLWxpZ2h0LWdyZXk6ICNjY2M7XG4kdGhlbWUtd2hpdGU6I2ZmZmZmZjtcbiR0aGVtZS1ibGFjazojMDAwO1xuJHRoZW1lLWJsdWUtY29sb3I6IzIxOTZmMztcbiR0aGVtZS1ncmVlbi1jb2xvcjojNDE3NTA1O1xuJHRoZW1lLWxpZ2h0LWdyZWVuLWNvbG9yOiNCOEU5ODY7XG4kdGhlbWUtbGlnaHQtYnJvd24tY29sb3I6I0VDRTE1NSA7XG4kdGhlbWUtYnJvd24tY29sb3I6IzlCOTMyQjtcbiR0aGVtZS1icm93bi1ib3JkZXI6I0NGQzMyRDtcbiR0aGVtZS1zZWFyY2hib3gtYmFja2dyb3VuZC1jb2xvcjojRjlGNEZGO1xuJHRoZW1lLW9wYWN0aXR5LWJvcmRlcjojYmU5NmY1O1xuJHRoZW1lLXJlZC10ZXh0OiNDNzNEM0Q7XG4kdGhlbWUtcmVkLWJhY2tncm91bmQtY29sb3I6ICNGQ0FFQUU7XG4kdGhlbWVuLXJlZC1ib3JkZXItY29sb3I6I0VENzM3MztcbiR0YWJsZS1ib3JkZXItY29sb3I6ICNkZWUyZTY7XG4kc2Vjb25kYXJ5LXRoZW1lOiAjYzI1NjNmO1xuJHNlY29uZGFyeS1saWdodC10aGVtZTogI2VmY2NjNTsiXX0= */"

/***/ }),

/***/ "./src/app/gate-security/rdc-intransit-trucks/rdc-intransit-trucks.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/gate-security/rdc-intransit-trucks/rdc-intransit-trucks.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RdcIntransitTrucksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdcIntransitTrucksComponent", function() { return RdcIntransitTrucksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RdcIntransitTrucksComponent = /** @class */ (function () {
    function RdcIntransitTrucksComponent(service, toastr, router) {
        var _this = this;
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.isLoading = false;
        this.editing = {};
        this.editingFgs = {};
        this.gateSecurityIndents = [];
        this.rdcpage = {
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
        this.rdcGateSecurityTransitTrucks = [];
        this.sourceList = [];
        this.loadslipList = [];
        this.truckList = [];
        this.isIntransitTruck = true;
        this.userRoles = src_app_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].roles;
        this.typeOfTruckReport = src_app_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].truckReportTypes;
        this.reportTruckStatusList = src_app_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].truckInventoryStatusList;
        this.reportLocation = localStorage.getItem('sourceID');
        this.isLoading = true;
        var data = {
            reportLocation: this.reportLocation,
            type: "INTRANSIT"
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getTruckData, data).subscribe(function (response) {
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
    RdcIntransitTrucksComponent.prototype.ngOnInit = function () {
        //show the title based on the Role 
        if (this.service.checkRole() == this.userRoles.gateSecurity) {
            this.title = "FGS > In-Transit Truck";
        }
        else if ((this.service.checkRole() == this.userRoles.JIT_GATE_SECURITY) || (this.service.checkRole() == this.userRoles.JIT_OPERATION)) {
            this.title = "FGS-JIT > In-Transit Trucks";
        }
        else if ((this.service.checkRole() == this.userRoles.fgsOperations2) || (this.service.checkRole() == this.userRoles.fgsOperations1)
            || (this.service.checkRole() == this.userRoles.fgsOperations3) || (this.service.checkRole() == this.userRoles.fgsOperations4)) {
            this.title = "FGS > In-Transit Trucks";
        }
        else if (this.service.checkRole() == this.userRoles.ABU_PLN) {
            this.title = "In-Transit Trucks";
        }
        else if (this.service.isDPREPRole()) {
            this.title = "Truck Status > In-Transit Truck";
        }
        else {
            this.title = "Receiving RDC > In-Transit Trucks";
        }
        //Activation of Tabs
        // if (this.service.checkRole() == this.userRoles.rdc_PLN) {
        //   localStorage.setItem("userMenu", "RDC-GAT-REPORT");
        // } else {
        localStorage.setItem("userMenu", "fgs-truck-status");
        // }
        // for getting truck type master
        this.getTruckTypeMasterData();
    };
    // for getting truck type master
    RdcIntransitTrucksComponent.prototype.getTruckTypeMasterData = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.truckTypeMasterData).subscribe(function (response) {
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
    RdcIntransitTrucksComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    //clear data
    RdcIntransitTrucksComponent.prototype.clearData = function () {
        this.destination = '';
        this.indentId = "";
        this.statusType = "";
        this.transporter = "";
        this.truckNumber = "";
        this.truckType = [];
        this.shipmentId = '';
        this.destinationDesc = "";
        this.descriptionList = [];
        this.destinationList = [];
        this.transporterList = [];
        this.source = '';
    };
    //refersh data 
    RdcIntransitTrucksComponent.prototype.refreshData = function () {
        var _this = this;
        this.clearData();
        // this.destination = '';
        // this.indentId = "";
        // this.statusType = "";
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
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getTruckData, data).subscribe(function (response) {
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
    RdcIntransitTrucksComponent.prototype.truckstatusIndetsFilter = function () {
        var _this = this;
        this.isLoading = true;
        this.table.offset = 0;
        var data = {
            destination: this.destination,
            source: this.source,
            shipmentID: this.shipmentId,
            transporter: this.transporter,
            truckNumber: this.truckNumber,
            truckType: this.truckType,
            reportLocation: this.reportLocation,
            type: "INTRANSIT"
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getTruckData, data).subscribe(function (response) {
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
    RdcIntransitTrucksComponent.prototype.rdcGatesecurityDatetablePageData = function (pageInfo) {
        var _this = this;
        this.isLoading = true;
        console.log("page info", pageInfo);
        var datatabledata = {
            index: pageInfo.offset,
            pageLength: pageInfo.pageSize,
            destination: this.destination,
            source: this.source,
            indentID: this.indentId,
            transporter: this.transporter,
            truckNumber: this.truckNumber,
            truckType: this.truckType,
            reportLocation: this.reportLocation,
            type: "INTRANSIT"
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getTruckData, datatabledata).subscribe(function (response) {
            _this.rdcGateSecurityTransitTrucks = response['data'].truckReportsData;
            _this.rdcGateSecurityTransitTrucks = _this.rdcGateSecurityTransitTrucks.slice();
            _this.rdcpage.limit = response['data'].pageLength;
            _this.rdcpage.count = response['data'].total;
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    RdcIntransitTrucksComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    //get filter destination result
    //isIntransitTruck is used to fetch the loggedIn plant Loc in destination LOVs.
    //isIntransitTruck is sent as TRUE in destination search and FALSE in source search.
    RdcIntransitTrucksComponent.prototype.getfilterDestination = function (event, typeofEvent, isIntransitTruck) {
        var _this = this;
        this.destinationDesc = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue + '&isIntransitTruck=' + isIntransitTruck).subscribe(function (response) {
                if (typeofEvent == 'SOURCE') {
                    _this.sourceList = response['data'].searchResult;
                }
                else {
                    _this.destinationList = response['data'].searchResult;
                    console.log("this.destinationList", _this.destinationList);
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
    RdcIntransitTrucksComponent.prototype.getfilterTransporter = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.transporterList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?transporter=' + filtervalue).subscribe(function (response) {
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
    RdcIntransitTrucksComponent.prototype.filterGateSecuirtyIndents = function () {
        var _this = this;
        this.isLoading = true;
        var data = {
            indentID: this.indentId,
            transporter: this.transporter,
            truckType: this.truckType,
            destination: this.destination
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.viewSearchIndents, data).subscribe(function (response) {
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
                _this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //set value destination
    RdcIntransitTrucksComponent.prototype.setDestination = function (value) {
        //  this.destinationDesc = value;
        this.destination = value;
    };
    //set value to destination description
    RdcIntransitTrucksComponent.prototype.setDestDescription = function (value) {
        this.destinationDesc = value;
    };
    RdcIntransitTrucksComponent.prototype.getUserDestinationList = function (event) {
        var _this = this;
        this.destination = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getDestinationDescriptionDataList + event.target.value).subscribe(function (response) {
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
    //export excel data
    RdcIntransitTrucksComponent.prototype.export = function () {
        var _this = this;
        if (this.rdcGateSecurityTransitTrucks.length > 0) {
            this.isLoading = true;
            var data = {
                'destination': this.destination,
                'source': this.source,
                'shipmentID': this.shipmentId,
                'transporter': this.transporter,
                'truckNumber': this.truckNumber,
                'truckType': this.truckType,
                'reportLocation': this.reportLocation,
                'type': "INTRANSIT",
                'pageLength': this.rdcpage.count,
            };
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getTruckData, data).subscribe(function (response) {
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
                            "Shipment ID": excelRawData[i].shipmentId,
                            "Dest Description": excelRawData[i].destDis,
                            "Truck Type": excelRawData[i].truckType,
                            "Transporter": excelRawData[i].transporter,
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
                    xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](workBook, 'intransitTrucks.xlsx');
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
    // view loadslips for cooresponding shipment Id
    RdcIntransitTrucksComponent.prototype.viewLoadslip = function (shipmentNumber, view) {
        var _this = this;
        this.isLoading = true;
        this.loadSlipType = view;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.openLoadslipDetails + "?shipmentId=" + shipmentNumber).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                if (response['data']) {
                    _this.loadslipList = response['data'];
                    if (_this.loadslipList.length == 1) {
                        _this.viewLoadslipnavigation(_this.loadslipList[0]);
                    }
                    else if (_this.loadslipList.length > 1) {
                        $("#loadslipsModal").modal('show');
                    }
                    // $("#loadslipsModal").modal('show');
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
    // Navigate to loadslip view
    RdcIntransitTrucksComponent.prototype.viewLoadslipnavigation = function (item) {
        $("#loadslipsModal").modal('hide');
        var loadSlipId = item['loadlipId'];
        var type = item.type;
        // this.router.navigateByUrl('/load-slip-qty-view/' + loadSlipId);
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DatatableComponent"])
    ], RdcIntransitTrucksComponent.prototype, "table", void 0);
    RdcIntransitTrucksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rdc-intransit-trucks',
            template: __webpack_require__(/*! ./rdc-intransit-trucks.component.html */ "./src/app/gate-security/rdc-intransit-trucks/rdc-intransit-trucks.component.html"),
            styles: [__webpack_require__(/*! ./rdc-intransit-trucks.component.scss */ "./src/app/gate-security/rdc-intransit-trucks/rdc-intransit-trucks.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RdcIntransitTrucksComponent);
    return RdcIntransitTrucksComponent;
}());



/***/ }),

/***/ "./src/app/gate-security/rdc-intransit-trucks/rdc-intrasit-trucks.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/gate-security/rdc-intransit-trucks/rdc-intrasit-trucks.module.ts ***!
  \**********************************************************************************/
/*! exports provided: rdcIntransitTrucksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rdcIntransitTrucksModule", function() { return rdcIntransitTrucksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _rdc_intransit_trucks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rdc-intransit-trucks.component */ "./src/app/gate-security/rdc-intransit-trucks/rdc-intransit-trucks.component.ts");
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _rdc_intransit_trucks_component__WEBPACK_IMPORTED_MODULE_7__["RdcIntransitTrucksComponent"] },
];
var rdcIntransitTrucksModule = /** @class */ (function () {
    function rdcIntransitTrucksModule() {
    }
    rdcIntransitTrucksModule = __decorate([
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
                _rdc_intransit_trucks_component__WEBPACK_IMPORTED_MODULE_7__["RdcIntransitTrucksComponent"]
            ]
        })
    ], rdcIntransitTrucksModule);
    return rdcIntransitTrucksModule;
}());



/***/ })

}]);
//# sourceMappingURL=gate-security-rdc-intransit-trucks-rdc-intrasit-trucks-module.js.map