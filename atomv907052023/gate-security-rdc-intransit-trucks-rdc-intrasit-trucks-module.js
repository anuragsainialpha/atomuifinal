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

module.exports = ".lightgreen-button {\n  width: 80%;\n  padding: 3px; }\n\n/* Blink for Webkit and others\n   (Chrome, Safari, Firefox, IE, ...)\n   */\n\n@-webkit-keyframes blinker {\n  from {\n    opacity: 1.0; }\n  to {\n    opacity: 0.0; } }\n\n.blink {\n  color: #fff;\n  display: block;\n  padding: 4px;\n  background-color: #5a3094;\n  text-align: center;\n  border-radius: 4px;\n  text-decoration: blink;\n  -webkit-animation-name: blinker;\n  -webkit-animation-duration: 0.6s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-direction: alternate; }\n\n.manulal-plan-header {\n  padding: 5px 0px;\n  margin-bottom: 0px;\n  font-weight: 600; }\n\n.manulal-plan-header span {\n    color: #3F2B53;\n    margin-right: 15px; }\n\n.manualplan-fields {\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0px; }\n\n.manualplan-fields p > i {\n    cursor: pointer; }\n\n.manualplan-fields .col-md-3 {\n    padding: 0px 15px; }\n\n.manualplan-fields .form-group {\n    margin-bottom: 0; }\n\n.manualplan-fields .form-group .mat-form-field .mat-form-field-wrapper {\n      padding-bottom: 0.5em !important; }\n\n.show-entries .mat-form-field-label {\n  display: none !important; }\n\n.manual-plan-table {\n  margin-top: 10px;\n  width: 100%;\n  overflow: hidden;\n  overflow-x: auto; }\n\n.manual-plan-table table {\n    table-layout: fixed;\n    margin-bottom: 0em; }\n\n.manual-plan-table table tr {\n      height: 30px; }\n\n.manual-plan-table table tr th {\n        width: 150px;\n        padding: 0.3rem; }\n\n.manual-plan-table table tr td {\n        width: 150px;\n        padding: 0.25rem; }\n\n.ngx-datatable.material {\n  margin-top: 20px; }\n\n.margin-top-10 {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2F0ZS1zZWN1cml0eS9yZGMtaW50cmFuc2l0LXRydWNrcy9DOlxcVXNlcnNcXEFudXJhZ1NhaW5pXFxEb3dubG9hZHNcXGF0b20tdWlfb3JpZ2luYWxfMjEwOTIwMjJcXGF0b20tdWkvc3JjXFxhcHBcXGdhdGUtc2VjdXJpdHlcXHJkYy1pbnRyYW5zaXQtdHJ1Y2tzXFxyZGMtaW50cmFuc2l0LXRydWNrcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2F0ZS1zZWN1cml0eS9yZGMtaW50cmFuc2l0LXRydWNrcy9yZGMtaW50cmFuc2l0LXRydWNrcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2F0ZS1zZWN1cml0eS9yZGMtaW50cmFuc2l0LXRydWNrcy9DOlxcVXNlcnNcXEFudXJhZ1NhaW5pXFxEb3dubG9hZHNcXGF0b20tdWlfb3JpZ2luYWxfMjEwOTIwMjJcXGF0b20tdWkvc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFFYjs7SUNFQzs7QURFRDtFQUNJO0lBQU0sWUFBWSxFQUFBO0VBQ2xCO0lBQUksWUFBWSxFQUFBLEVBQUE7O0FBRWxCO0VBQ00sV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3hCLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsMkNBQTBDO0VBQzFDLDhDQUE2QztFQUM3QyxzQ0FBc0MsRUFBQTs7QUFNNUM7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUhwQjtJQUtRLGNFbENjO0lGbUNkLGtCQUFrQixFQUFBOztBQUsxQjtFQUNJLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUhoQjtJQUtRLGVBQWUsRUFBQTs7QUFMdkI7SUFRUSxpQkFBaUIsRUFBQTs7QUFSekI7SUFXUSxnQkFBZ0IsRUFBQTs7QUFYeEI7TUFjZ0IsZ0NBQWdDLEVBQUE7O0FBS2hEO0VBRVEsd0JBQXdCLEVBQUE7O0FBR2hDO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVU7RUFDVixnQkFBZTtFQUNmLGdCQUFlLEVBQUE7O0FBSm5CO0lBTVEsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBOztBQVAxQjtNQVNZLFlBQVcsRUFBQTs7QUFUdkI7UUFXZ0IsWUFBVztRQUNYLGVBQWMsRUFBQTs7QUFaOUI7UUFlZ0IsWUFBVztRQUNYLGdCQUFlLEVBQUE7O0FBTS9CO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nYXRlLXNlY3VyaXR5L3JkYy1pbnRyYW5zaXQtdHJ1Y2tzL3JkYy1pbnRyYW5zaXQtdHJ1Y2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpZ2h0Z3JlZW4tYnV0dG9ue1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcGFkZGluZyA6M3B4OyAgIFxuICAgfVxuICAgLyogQmxpbmsgZm9yIFdlYmtpdCBhbmQgb3RoZXJzXG4gICAoQ2hyb21lLCBTYWZhcmksIEZpcmVmb3gsIElFLCAuLi4pXG4gICAqL1xuICAgXG4gICBALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmtlciB7XG4gICAgICAgZnJvbSB7b3BhY2l0eTogMS4wO31cbiAgICAgICB0byB7b3BhY2l0eTogMC4wO31cbiAgICAgfVxuICAgICAuYmxpbmt7XG4gICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWEzMDk0O1xuICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBibGluaztcbiAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJsaW5rZXI7XG4gICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbiAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTtcbiAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDtcbiAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICAgICB9XG4gICBcbiAgIEBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcbiAgIEBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvbWl4aW5zJztcbiAgIFxuICAgLm1hbnVsYWwtcGxhbi1oZWFkZXJ7XG4gICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICBzcGFue1xuICAgICAgICAgICBjb2xvcjogJGRhcmstY29sb3ItdGhlbWU7XG4gICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgLy8gZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAvLyBmb250LXdlaWdodDogNTAwO1xuICAgICAgIH1cbiAgIH1cbiAgIC5tYW51YWxwbGFuLWZpZWxkc3tcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICBwID4gaXtcbiAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgIH1cbiAgICAgICAuY29sLW1kLTN7XG4gICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgICAgIH1cbiAgICAgICAuZm9ybS1ncm91cHtcbiAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xuICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgICAgfVxuICAgfVxuICAgLnNob3ctZW50cmllc3tcbiAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWx7XG4gICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICB9XG4gICB9XG4gICAubWFudWFsLXBsYW4tdGFibGV7XG4gICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICBvdmVyZmxvdy14OmF1dG87XG4gICAgICAgdGFibGV7XG4gICAgICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBlbTtcbiAgICAgICAgICAgdHJ7XG4gICAgICAgICAgICAgICBoZWlnaHQ6MzBweDtcbiAgICAgICAgICAgICAgIHRoe1xuICAgICAgICAgICAgICAgICAgIHdpZHRoOjE1MHB4O1xuICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MC4zcmVtO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgdGR7XG4gICAgICAgICAgICAgICAgICAgd2lkdGg6MTUwcHg7XG4gICAgICAgICAgICAgICAgICAgcGFkZGluZzowLjI1cmVtO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgICAgfVxuICAgfVxuICAgXG4gICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbHtcbiAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgfVxuICAgLm1hcmdpbi10b3AtMTB7XG4gICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgIH1cbiAgXG4gICBcbiAgIiwiLmxpZ2h0Z3JlZW4tYnV0dG9uIHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogM3B4OyB9XG5cbi8qIEJsaW5rIGZvciBXZWJraXQgYW5kIG90aGVyc1xuICAgKENocm9tZSwgU2FmYXJpLCBGaXJlZm94LCBJRSwgLi4uKVxuICAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBibGlua2VyIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMS4wOyB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwLjA7IH0gfVxuXG4uYmxpbmsge1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhMzA5NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogYmxpbms7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJsaW5rZXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTsgfVxuXG4ubWFudWxhbC1wbGFuLWhlYWRlciB7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAubWFudWxhbC1wbGFuLWhlYWRlciBzcGFuIHtcbiAgICBjb2xvcjogIzNGMkI1MztcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7IH1cblxuLm1hbnVhbHBsYW4tZmllbGRzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDBweDsgfVxuICAubWFudWFscGxhbi1maWVsZHMgcCA+IGkge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAubWFudWFscGxhbi1maWVsZHMgLmNvbC1tZC0zIHtcbiAgICBwYWRkaW5nOiAwcHggMTVweDsgfVxuICAubWFudWFscGxhbi1maWVsZHMgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7IH1cbiAgICAubWFudWFscGxhbi1maWVsZHMgLmZvcm0tZ3JvdXAgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbSAhaW1wb3J0YW50OyB9XG5cbi5zaG93LWVudHJpZXMgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5tYW51YWwtcGxhbi10YWJsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBhdXRvOyB9XG4gIC5tYW51YWwtcGxhbi10YWJsZSB0YWJsZSB7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwZW07IH1cbiAgICAubWFudWFsLXBsYW4tdGFibGUgdGFibGUgdHIge1xuICAgICAgaGVpZ2h0OiAzMHB4OyB9XG4gICAgICAubWFudWFsLXBsYW4tdGFibGUgdGFibGUgdHIgdGgge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbTsgfVxuICAgICAgLm1hbnVhbC1wbGFuLXRhYmxlIHRhYmxlIHRyIHRkIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtOyB9XG5cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIHtcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxuXG4ubWFyZ2luLXRvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cbiIsIiR0aGVtZS1wdXJwbGUtYmFja2dyb3VuZC1jb2xvcjojRkFGOUZFO1xuJGRhcmstY29sb3ItdGhlbWU6IzNGMkI1MztcbiR0aGVtZS1wdXJwbGUtY29sb3I6IzVBMzA5NDtcbiRsaWdodC1jb2xvci10aGVtZTojZDRiNmZmO1xuJG1lZGl1bS1jb2xvci10aGVtZTogIzc3NTg5OTtcbiR0aGVtZS1ncmV5OiNhYWE7XG4kdGhlbWUtbGlnaHQtZ3JleTogI2NjYztcbiR0aGVtZS13aGl0ZTojZmZmZmZmO1xuJHRoZW1lLWJsYWNrOiMwMDA7XG4kdGhlbWUtYmx1ZS1jb2xvcjojMjE5NmYzO1xuJHRoZW1lLWdyZWVuLWNvbG9yOiM0MTc1MDU7XG4kdGhlbWUtbGlnaHQtZ3JlZW4tY29sb3I6I0I4RTk4NjtcbiR0aGVtZS1saWdodC1icm93bi1jb2xvcjojRUNFMTU1IDtcbiR0aGVtZS1icm93bi1jb2xvcjojOUI5MzJCO1xuJHRoZW1lLWJyb3duLWJvcmRlcjojQ0ZDMzJEO1xuJHRoZW1lLXNlYXJjaGJveC1iYWNrZ3JvdW5kLWNvbG9yOiNGOUY0RkY7XG4kdGhlbWUtb3BhY3RpdHktYm9yZGVyOiNiZTk2ZjU7XG4kdGhlbWUtcmVkLXRleHQ6I0M3M0QzRDtcbiR0aGVtZS1yZWQtYmFja2dyb3VuZC1jb2xvcjogI0ZDQUVBRTtcbiR0aGVtZW4tcmVkLWJvcmRlci1jb2xvcjojRUQ3MzczO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogI2RlZTJlNjtcbiRzZWNvbmRhcnktdGhlbWU6ICNjMjU2M2Y7XG4kc2Vjb25kYXJ5LWxpZ2h0LXRoZW1lOiAjZWZjY2M1OyJdfQ== */"

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