(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fgs-operations-cls-data-cls-data-module"],{

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

/***/ "./src/app/fgs-operations/cls-data/cls-data.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/fgs-operations/cls-data/cls-data.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    <b> Truck Status > Export Tracking</b>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <!--  <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"Filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button> -->\n    </span>\n  </h6>\n  <div class=\"manualplan-fields\">\n    <div class=\"col-md-12 row\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row\">\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Source\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n                  [(ngModel)]=\"sourceCode\" name=\"sourceCode\" (keyup)=\"getfilterSource($event)\"\n                  oninput=\"this.value = this.value.toUpperCase()\" [disabled]=\"(isSoureDisable()) \">\n                <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\"\n                    (click)=\"setDestDescription(list.description)\"\n                    (onSelectionChange)=\"setDestDescription(list.description)\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Shipment Id\" [(ngModel)]=\"shipmentId\" name=\"shipmentId\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"fromSipmentOnboardDatePicker\"\n                  placeholder=\"From Shipped On-Board Date\" [(ngModel)]=\"fromShipmentOnboardDate\"\n                  name=\"fromShipmentOnboardDate\" (dateChange)=\"addEvent('change', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"fromSipmentOnboardDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #fromSipmentOnboardDatePicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toSipmentOnboardDatePicker\" [min]=\"fromShipmentOnboardDate\"\n                  placeholder=\"To Shipped On-Board Date\" [(ngModel)]=\"toShipmentOnboardDate\" name=\"toShipmentOnboardDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toSipmentOnboardDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toSipmentOnboardDatePicker [disabled]=\"!fromShipmentOnboardDate\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- Insert Date Filter -->\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"fromInsertDatePicker\" placeholder=\"From Insert Date\"\n                  [(ngModel)]=\"fromInsertDate\" name=\"fromInsertDate\"\n                  (dateChange)=\"addEventInsertDate('change', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"fromInsertDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #fromInsertDatePicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toInsertDatePicker\" [min]=\"fromInsertDate\"\n                  placeholder=\"To Insert Date\" [(ngModel)]=\"toInsertDate\" name=\"toInsertDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toInsertDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toInsertDatePicker [disabled]=\"!fromInsertDate\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- Gate Out Date Filter -->\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"fromGateOutDatePicker\" placeholder=\"From Gate Out Date\"\n                  [(ngModel)]=\"fromGateOutDate\" name=\"fromGateOutDate\" (dateChange)=\"addEventGateOut('change', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"fromGateOutDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #fromGateOutDatePicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toGateOutDatePicker\" [min]=\"fromGateOutDate\"\n                  placeholder=\"To Gate Out Date\" [(ngModel)]=\"toGateOutDate\" name=\"toGateOutDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toGateOutDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toGateOutDatePicker [disabled]=\"!fromGateOutDate\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- SAP DATE FILTER -->\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"fromSapInvDatePicker\" placeholder=\"From Sap Inv Date\"\n                  [(ngModel)]=\"fromSapInvDate\" name=\"fromSapInvDate\" (dateChange)=\"addEventSapInvDate('change', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"fromSapInvDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #fromSapInvDatePicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toSapInvDatePicker\" [min]=\"fromSapInvDate\"\n                  placeholder=\"To Sap Inv Date\" [(ngModel)]=\"toSapInvDate\" name=\"toSapInvDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toSapInvDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toSapInvDatePicker [disabled]=\"!fromSapInvDate\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"clsSearch()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n    <!--  This filter will visible other user insted of new due allignment -->\n    <!-- <div class=\"row\" *ngIf=\"check_Role_DP_REP != roles.planner3\">\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n          <ng-container >\n           <div class=\"col-md-1 pr-0\">\n             <div class=\"form-group\">\n               <mat-form-field>\n                 <input matInput placeholder=\"Insert User\" [(ngModel)]=\"insertUser\" name=\"insertUser\">\n               </mat-form-field>\n             </div>\n           </div>\n         </ng-container>\n        </div>\n      </div>\n    </div> -->\n  </div>\n  <div class=\"ngx-table-custom-scroll ngx-table-tr-custom-scroll\">\n    <ngx-datatable class='material' #table [rows]='clsDataList' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n      [scrollbarH]=\"true\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [externalPaging]=\"true\" [limit]=\"page.limit\"\n      [count]=\"page.count\" [offset]=\"page.offset\" (page)=\"datatablePageData($event)\">\n      <ngx-datatable-column name=\"Source Loc\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"shipmentId\"\n        [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.sourceLoc}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Dest Loc\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destLoc\"\n        [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destLoc}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Shipment Id\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"shipmentId\"\n        [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.shipmentId}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Loadslip Id\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"loadslipId\"\n        [frozenLeft]=\"freezeLeftValue\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.loadslipId}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Gate Out Date\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"gateouDateStr\" [frozenLeft]=\"false\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.gateouDateStr ? (row.gateouDateStr | customDateFormat | date:'dd-MMM-yyyy,HH:mm' ) : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Container Num\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"containerNum\" [frozenLeft]=\"false\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.containerNum}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"STO/SO Num\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"stosoNum\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.stosoNum}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Delivery\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"delivery\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.delivery}}\n        </ng-template>\n      </ngx-datatable-column>\n      <!-- <ngx-datatable-column name=\"User\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"category\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.insertUser}}\n        </ng-template>\n      </ngx-datatable-column> -->\n      <ngx-datatable-column name=\"SAP Invoice\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"sapInvoice\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.sapInvoice}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"SAP Inv Date\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"sapInvoiceDateStr\" [frozenLeft]=\"false\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.sapInvoiceDateStr ? (row.sapInvoiceDateStr | customDateFormat | date:'dd-MMM-yyyy' ) : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Custom Inv Num\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"customInvNumber\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.customInvNumber}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"PI No\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"piNo\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.piNo}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Customer Name\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"customerName\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.customerName}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Inco Term\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"incoterm\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.incoterm}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"POL\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"pol\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.pol}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"POD\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"pod\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.pod}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Billing Party\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"billingParty\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.billingParty}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Shipping Line\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"shippingLine\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.shippingLine}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Cont Pick Date\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"contPickDateStr\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.contPickDateStr ? (row.contPickDateStr | customDateFormat | date:'dd-MMM-yyyy' ) : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Stuffing Date\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"stuffingDateStr\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.stuffingDateStr ? (row.stuffingDateStr | customDateFormat | date:'dd-MMM-yyyy' ) : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Booking Num\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"bookingNum\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.bookingNum}}\n        </ng-template>\n      </ngx-datatable-column>\n       <ngx-datatable-column name=\"Pre Inv No\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"preInvNo\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.preInvNo}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Post Inv No\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"postInvNo\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.postInvNo}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"CHA\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"cha\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.cha}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Planned Vessel\" [width]='120' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"plannedVessel\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.plannedVessel}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Vessel Depart Pol Date\" [width]='150' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"vesselDepartPolDateStr\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.vesselDepartPolDateStr ? (row.vesselDepartPolDateStr | customDateFormat | date:'dd-MMM-yyyy' ) : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Shipping Bill\" [width]='120' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"shippinBill\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.shippinBill}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Shipping Bill Date\" [width]='150' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"Volume\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.shippingBillDateStr ? (row.shippingBillDateStr | customDateFormat | date:'dd-MMM-yyyy' ) : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Gate In Date\" [width]='150' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"gateInDateStr\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.gateInDateStr ? (row.gateInDateStr | customDateFormat | date:'dd-MMM-yyyy' ) : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Customs Exam Date\" [width]='150' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"volume\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.customsExamDateStr ? (row.customsExamDateStr | customDateFormat | date:'dd-MMM-yyyy' ) : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Gate Out CFS Date\" [width]='150' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"gateoutDateCfsStr\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.gateoutDateCfsStr ? (row.gateoutDateCfsStr | customDateFormat | date:'dd-MMM-yyyy' ) : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Gate In Port Date\" [width]='150' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"gateinDatePortStr\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.gateinDatePortStr ? (row.gateinDatePortStr | customDateFormat | date:'dd-MMM-yyyy' ) : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Actual Vessel\" [width]='120' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"actualVessel\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.actualVessel}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Shipped On-Board Date\" [width]='150' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"shippedOnboardDateStr\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.shippedOnboardDateStr ? (row.shippedOnboardDateStr | customDateFormat | date:'dd-MMM-yyyy' ) : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Export Remark\" [width]='120' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"eportRemark\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.eportRemark}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Is Sync OTM\" [width]='120' [resizeable]=\"false\" [sortable]=\"false\" prop=\"isSyncOtm\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.isSyncOtm}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"COFD\" [width]='120' [resizeable]=\"false\" [sortable]=\"false\" prop=\"cofd\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.cofd}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"ETA POD\" [width]='150' [resizeable]=\"false\" [sortable]=\"false\" prop=\"etaPodStr\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.etaPodStr ? (row.etaPodStr | customDateFormat | date:'dd-MMM-yyyy') : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Forwarder\" [width]='120' [resizeable]=\"false\" [sortable]=\"false\" prop=\"forwarder\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.forwarder}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"LEO Date\" [width]='150' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"shippedOnboardDateStr\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.leoDateStr ? (row.leoDateStr | customDateFormat | date:'dd-MMM-yyyy' ) : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"INV Amount\" [width]='120' [resizeable]=\"false\" [sortable]=\"false\" prop=\"invAmount\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.invAmount}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Payment Terms\" [width]='120' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"paymentTerms\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.paymentTerms}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Status\" [width]='120' [resizeable]=\"false\" [sortable]=\"false\" prop=\"status\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.status}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Insert Date\" [width]='150' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"insertDateStr\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.insertDateStr ? (row.insertDateStr | customDateFormat | date:'dd-MMM-yyyy,HH:mm') : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <!-- Footer Template starts -->\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected |\n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n            [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n            (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n    </ngx-datatable>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/fgs-operations/cls-data/cls-data.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/fgs-operations/cls-data/cls-data.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zncy1vcGVyYXRpb25zL2Nscy1kYXRhL2Nscy1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/fgs-operations/cls-data/cls-data.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/fgs-operations/cls-data/cls-data.component.ts ***!
  \***************************************************************/
/*! exports provided: ClsDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClsDataComponent", function() { return ClsDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/public/date.adapters */ "./src/app/public/date.adapters.ts");
/* harmony import */ var src_app_services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/helper-service/helper-service.service */ "./src/app/services/helper-service/helper-service.service.ts");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ClsDataComponent = /** @class */ (function () {
    function ClsDataComponent(service, toastr, helperService) {
        this.service = service;
        this.toastr = toastr;
        this.helperService = helperService;
        this.page = {
            limit: 100,
            count: 0,
            offset: 0,
            pageSize: 50
        };
        this.clsDataList = [];
        this.isLoading = false;
        this.currentDate = this.helperService.getTodayDate();
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.shipmentId = '';
        this.sourceLoc = '';
        this.fromInsertDate = '';
        this.toInsertDate = '';
        this.fromShipmentOnboardDate = '';
        this.toShipmentOnboardDate = '';
        this.fromSapInvDate = '';
        this.toSapInvDate = '';
        this.fromGateOutDate = '';
        this.toGateOutDate = '';
        this.freezeLeftValue = true;
    }
    ClsDataComponent.prototype.ngDoCheck = function () {
        var width = $(window).width();
        if (width < 1024) {
            this.freezeLeftValue = false;
        }
        else {
            this.freezeLeftValue = true;
        }
    };
    ClsDataComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "fgs-truck-status");
        this.roles = src_app_constants__WEBPACK_IMPORTED_MODULE_9__["constants"].roles;
        if (this.isSoureDisable()) {
            this.sourceCode = localStorage.getItem("sourceID");
        }
        var data = {};
        this.getClsData(data);
    };
    ClsDataComponent.prototype.addEvent = function (type, event) {
        console.log(event.value);
        console.log("------>To Date", this.toShipmentOnboardDate);
        var checkToDate = this.toShipmentOnboardDate;
        console.log("Check--->1", checkToDate);
        if (this.toShipmentOnboardDate == this.currentDateAsString) {
            // on page load we are defaluting the  to date with string. Comparing string with date is not possible
            // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
            checkToDate = new Date();
            console.log("Check--->2", checkToDate);
        }
        /* Checking if selected from date greater than to date.
        Clearing the toDate field when from date greater than to date */
        if (event.target.value) {
            if (this.toShipmentOnboardDate && (this.fromShipmentOnboardDate > checkToDate)) {
                this.toShipmentOnboardDate = '';
            }
        }
        // this.toDate = '';
    };
    ClsDataComponent.prototype.addEventInsertDate = function (type, event) {
        console.log(event.value);
        console.log("------>To Date", this.toInsertDate);
        var checkToDate = this.toInsertDate;
        console.log("Check--->1", checkToDate);
        if (this.toInsertDate == this.currentDateAsString) {
            // on page load we are defaluting the  to date with string. Comparing string with date is not possible
            // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
            checkToDate = new Date();
            console.log("Check--->2", checkToDate);
        }
        /* Checking if selected from date greater than to date.
        Clearing the toDate field when from date greater than to date */
        if (event.target.value) {
            if (this.toInsertDate && (this.fromInsertDate > checkToDate)) {
                this.toInsertDate = '';
            }
        }
        // this.toDate = '';
    };
    ClsDataComponent.prototype.addEventSapInvDate = function (type, event) {
        console.log(event.value);
        console.log("------>To Date", this.toSapInvDate);
        var checkToDate = this.toSapInvDate;
        console.log("Check--->1", checkToDate);
        if (this.toSapInvDate == this.currentDateAsString) {
            // on page load we are defaluting the  to date with string. Comparing string with date is not possible
            // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
            checkToDate = new Date();
            console.log("Check--->2", checkToDate);
        }
        /* Checking if selected from date greater than to date.
        Clearing the toDate field when from date greater than to date */
        if (event.target.value) {
            if (this.toSapInvDate && (this.fromSapInvDate > checkToDate)) {
                this.toSapInvDate = '';
            }
        }
        // this.toDate = '';
    };
    ClsDataComponent.prototype.addEventGateOut = function (type, event) {
        console.log(event.value);
        console.log("------>To Date", this.toGateOutDate);
        var checkToDate = this.toGateOutDate;
        console.log("Check--->1", checkToDate);
        if (this.toGateOutDate == this.currentDateAsString) {
            // on page load we are defaluting the  to date with string. Comparing string with date is not possible
            // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
            checkToDate = new Date();
            console.log("Check--->2", checkToDate);
        }
        /* Checking if selected from date greater than to date.
        Clearing the toDate field when from date greater than to date */
        if (event.target.value) {
            if (this.toGateOutDate && (this.fromGateOutDate > checkToDate)) {
                this.toGateOutDate = '';
            }
        }
        // this.toDate = '';
    };
    // Filter source location
    ClsDataComponent.prototype.getfilterSource = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.sourceList = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
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
    ClsDataComponent.prototype.isSoureDisable = function () {
        // source Not disable for DP_REP, L1_MGR, L2_MGR role & External warehouses, if roles not belongs to DP_REP & External wareHouse we are returning boolean value which makes  disable 
        if ((this.service.checkRole() !== this.roles.planner3 && this.service.checkRole() !== this.roles.L1MGR && this.service.checkRole() !== this.roles.L2MGR) && this.service.checkRole() !== this.roles.FPL) {
            return true;
        }
        else {
            return false;
        }
    };
    ClsDataComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    ClsDataComponent.prototype.datatablePageData = function (pageInfo) {
        var offset = pageInfo.offset;
        var bodyData = {
            index: offset,
            shipmentId: this.shipmentId,
            sourceLoc: this.sourceCode,
            fromInsertDate: this.fromInsertDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromInsertDate)).format("DD/MM/YYYY") : null,
            toInsertDate: this.toInsertDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toInsertDate)).format("DD/MM/YYYY") : null,
            fromShipmentOnboardDate: this.fromShipmentOnboardDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromShipmentOnboardDate)).format("DD/MM/YYYY") : null,
            toShipmentOnboardDate: this.toShipmentOnboardDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toShipmentOnboardDate)).format("DD/MM/YYYY") : null,
            fromGateOutDate: this.fromGateOutDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromGateOutDate)).format("DD/MM/YYYY") : null,
            toGateOutDate: this.toGateOutDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toGateOutDate)).format("DD/MM/YYYY") : null,
            fromSapInvDate: this.fromSapInvDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromSapInvDate)).format("DD/MM/YYYY") : null,
            toSapInvDate: this.toSapInvDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toSapInvDate)).format("DD/MM/YYYY") : null,
        };
        this.getClsData(bodyData);
    };
    // clear the data what the user entered
    ClsDataComponent.prototype.clearAll = function () {
        this.shipmentId = '';
        this.sourceCode = '';
        this.fromGateOutDate = '';
        this.toGateOutDate = '';
        this.fromInsertDate = '';
        this.toInsertDate = '';
        this.fromShipmentOnboardDate = '';
        this.toShipmentOnboardDate = '';
        this.fromSapInvDate = '';
        this.toSapInvDate = '';
        // For DP_REP role user can change the source location but other user it can't changes
        // That why we giving default selection
        if (this.isSoureDisable()) {
            this.sourceCode = localStorage.getItem("sourceID");
        }
    };
    // refresh page data
    ClsDataComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.page.offset = 0;
        this.clearAll();
        var bodyData = {};
        this.getClsData(bodyData);
    };
    ClsDataComponent.prototype.clsSearch = function () {
        this.table.offset = 0;
        var bodyData = {
            shipmentId: this.shipmentId,
            sourceLoc: this.sourceCode,
            fromInsertDate: this.fromInsertDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromInsertDate)).format("DD/MM/YYYY") : null,
            toInsertDate: this.toInsertDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toInsertDate)).format("DD/MM/YYYY") : null,
            fromShipmentOnboardDate: this.fromShipmentOnboardDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromShipmentOnboardDate)).format("DD/MM/YYYY") : null,
            toShipmentOnboardDate: this.toShipmentOnboardDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toShipmentOnboardDate)).format("DD/MM/YYYY") : null,
            fromGateOutDate: this.fromGateOutDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromGateOutDate)).format("DD/MM/YYYY") : null,
            toGateOutDate: this.toGateOutDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toGateOutDate)).format("DD/MM/YYYY") : null,
            fromSapInvDate: this.fromSapInvDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromSapInvDate)).format("DD/MM/YYYY") : null,
            toSapInvDate: this.toSapInvDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toSapInvDate)).format("DD/MM/YYYY") : null,
        };
        var insertdate = false;
        var gateOutDate = false;
        var sipmentDate = false;
        var sapInvDate = false;
        if (this.fromShipmentOnboardDate != '' && this.fromShipmentOnboardDate != null) {
            if (this.toShipmentOnboardDate != '' && this.toShipmentOnboardDate != null) {
                sipmentDate = true;
            }
            else {
                sipmentDate = false;
                this.toastr.error("Please select To Shipment On-Board Date", "!Error");
            }
        }
        else {
            sipmentDate = true;
        }
        if (this.fromGateOutDate != '' && this.fromGateOutDate != null) {
            if (this.toGateOutDate != '' && this.toGateOutDate != null) {
                gateOutDate = true;
            }
            else {
                gateOutDate = false;
                this.toastr.error("Please select To Gate Out Date", "!Error");
            }
        }
        else {
            gateOutDate = true;
        }
        if (this.fromInsertDate != '' && this.fromInsertDate != null) {
            if (this.toInsertDate != '' && this.toInsertDate != null) {
                insertdate = true;
            }
            else {
                insertdate = false;
                this.toastr.error("Please select To Insert Date", "!Error");
            }
        }
        else {
            insertdate = true;
        }
        if (this.fromSapInvDate != '' && this.fromSapInvDate != null) {
            if (this.toSapInvDate != '' && this.toSapInvDate != null) {
                sapInvDate = true;
            }
            else {
                sapInvDate = false;
                this.toastr.error("Please select To Shipment On-Board Date", "!Error");
            }
        }
        else {
            sapInvDate = true;
        }
        if (insertdate && gateOutDate && sipmentDate && sapInvDate) {
            this.getClsData(bodyData);
        }
    };
    ClsDataComponent.prototype.getClsData = function (data) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.getClsData, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.clsDataList = response['data'].content;
                _this.page.count = response['data'].totalElements;
                _this.isLoading = false;
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
                _this.isLoading = false;
            }
        }, function (err) {
            _this.toastr.error(err ? err : 'Something went wrong...', 'Error!');
            _this.isLoading = false;
        });
    };
    //export excel data
    ClsDataComponent.prototype.export = function () {
        var _this = this;
        if (this.clsDataList.length > 0) {
            this.isLoading = true;
            var data = {
                shipmentId: this.shipmentId,
                sourceLoc: this.sourceCode,
                fromInsertDate: this.fromInsertDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromInsertDate)).format("DD/MM/YYYY") : null,
                toInsertDate: this.toInsertDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toInsertDate)).format("DD/MM/YYYY") : null,
                fromShipmentOnboardDate: this.fromShipmentOnboardDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromShipmentOnboardDate)).format("DD/MM/YYYY") : null,
                toShipmentOnboardDate: this.toShipmentOnboardDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toShipmentOnboardDate)).format("DD/MM/YYYY") : null,
                fromGateOutDate: this.fromGateOutDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromGateOutDate)).format("DD/MM/YYYY") : null,
                toGateOutDate: this.toGateOutDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toGateOutDate)).format("DD/MM/YYYY") : null,
                fromSapInvDate: this.fromSapInvDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromSapInvDate)).format("DD/MM/YYYY") : null,
                toSapInvDate: this.toSapInvDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toSapInvDate)).format("DD/MM/YYYY") : null,
                pageLength: this.page.count,
            };
            // this.service.post_service_DownLoadExcel(ApiserviceService.apisList.planinfo, data).subscribe(response => {
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.getClsData, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    // Uncomment when export excel is generated in backend
                    // var blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                    //   var filename = 'viewDispatchPlans.xlsx';
                    //   const link = window.URL.createObjectURL(blob);
                    //   const a = document.createElement('a');
                    //   document.body.appendChild(a);
                    //   a.setAttribute('style', 'display: none');
                    //   a.href = link;
                    //   a.download = filename
                    //   a.click();
                    //   window.URL.revokeObjectURL(link);
                    //   a.remove();
                    var newViewPlanData = response['data'].content;
                    var excelRawData = newViewPlanData;
                    var newExcelData = [];
                    var data_1;
                    for (var i = 0; i < excelRawData.length; i++) {
                        // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
                        // For FGS : The Avail TTE and Truck count should be based on Available Qty
                        data_1 = {
                            "Source Loc": excelRawData[i].sourceLoc,
                            "Dest Loc": excelRawData[i].destLoc,
                            "Shipment Id": excelRawData[i].shipmentId,
                            "Loadslip Id": excelRawData[i].loadslipId,
                            "Gate Out Date": excelRawData[i].gateouDateStr ? _this.service.customDateTimeFormat(excelRawData[i].gateouDateStr) : '',
                            "Container Num": excelRawData[i].containerNum,
                            "STO/SO Num": excelRawData[i].stosoNum,
                            "Delivery": excelRawData[i].delivery,
                            "SAP Invoice": excelRawData[i].sapInvoice,
                            "SAP Inv Date": excelRawData[i].sapInvoiceDateStr ? _this.service.customDateFormat(excelRawData[i].sapInvoiceDateStr) : '',
                            "Custom Inv Num": excelRawData[i].customInvNumber,
                            "PI No": excelRawData[i].piNo,
                            "Customer Name": excelRawData[i].customerName,
                            "Inco Term": excelRawData[i].incoterm,
                            "POL": excelRawData[i].pol,
                            "POD": excelRawData[i].pod,
                            "Billing Party": excelRawData[i].billingParty,
                            "Shipping Line": excelRawData[i].shippingLine,
                            "Cont Pick Date": excelRawData[i].contPickDateStr ? _this.service.customDateFormat(excelRawData[i].contPickDateStr) : '',
                            "Stuffing Date": excelRawData[i].stuffingDateStr ? _this.service.customDateFormat(excelRawData[i].stuffingDateStr) : '',
                            "Booking Num": excelRawData[i].bookingNum,
                            "Pre Inv No": excelRawData[i].preInvNo,
                            "Post Inv No": excelRawData[i].postInvNo,
                            "CHA": excelRawData[i].cha,
                            "Planned Vessel": excelRawData[i].plannedVessel,
                            "Vessel Depart Pol Date": excelRawData[i].vesselDepartPolDateStr ? _this.service.customDateFormat(excelRawData[i].vesselDepartPolDateStr) : '',
                            "Shipping Bill": excelRawData[i].shippinBill,
                            "Shipping Bill Date": excelRawData[i].shippingBillDateStr ? _this.service.customDateFormat(excelRawData[i].shippingBillDateStr) : '',
                            "Gate In Date": excelRawData[i].gateInDateStr ? _this.service.customDateFormat(excelRawData[i].gateInDateStr) : '',
                            "Customs Exam Date": excelRawData[i].customsExamDateStr ? _this.service.customDateFormat(excelRawData[i].customsExamDateStr) : '',
                            "Gate Out CFS Date": excelRawData[i].gateoutDateCfsStr ? _this.service.customDateFormat(excelRawData[i].gateoutDateCfsStr) : '',
                            "Gate In Port Date": excelRawData[i].gateinDatePortStr ? _this.service.customDateFormat(excelRawData[i].gateinDatePortStr) : '',
                            "Actual Vessel": excelRawData[i].actualVessel,
                            "Shipped On-Board Date": excelRawData[i].shippedOnboardDateStr ? _this.service.customDateFormat(excelRawData[i].shippedOnboardDateStr) : '',
                            "Export Remark": excelRawData[i].eportRemark,
                            "Is Sync OTM": excelRawData[i].isSyncOtm,
                            "COFD": excelRawData[i].cofd,
                            "ETA POD": excelRawData[i].etaPodStr ? _this.service.customDateFormat(excelRawData[i].etaPodStr) : '',
                            "Forwarder": excelRawData[i].forwarder,
                            "LEO Date": excelRawData[i].leoDateStr ? _this.service.customDateFormat(excelRawData[i].leoDateStr) : '',
                            "INV Amount": excelRawData[i].invAmount,
                            "Payment Terms": excelRawData[i].paymentTerms,
                            "Status": excelRawData[i].status,
                            "Insert Date": excelRawData[i].insertDateStr ? _this.service.customDateTimeFormat(excelRawData[i].insertDateStr) : '',
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_6__["writeFile"](workBook, 'ClsData.xlsx');
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], ClsDataComponent.prototype, "table", void 0);
    ClsDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cls-data',
            template: __webpack_require__(/*! ./cls-data.component.html */ "./src/app/fgs-operations/cls-data/cls-data.component.html"),
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_7__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_7__["APP_DATE_FORMATS"]
                }
            ],
            styles: [__webpack_require__(/*! ./cls-data.component.scss */ "./src/app/fgs-operations/cls-data/cls-data.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_8__["HelperServiceService"]])
    ], ClsDataComponent);
    return ClsDataComponent;
}());



/***/ }),

/***/ "./src/app/fgs-operations/cls-data/cls-data.module.ts":
/*!************************************************************!*\
  !*** ./src/app/fgs-operations/cls-data/cls-data.module.ts ***!
  \************************************************************/
/*! exports provided: ClsDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClsDataModule", function() { return ClsDataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
/* harmony import */ var _cls_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cls-data.component */ "./src/app/fgs-operations/cls-data/cls-data.component.ts");
/* harmony import */ var src_app_public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var src_app_angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/angular-material */ "./src/app/angular-material.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _cls_data_component__WEBPACK_IMPORTED_MODULE_6__["ClsDataComponent"] },
];
// const routes: Routes = [
//   { path: '', component: CreateFreightComponent,canActivate:[PlannerAuthGuardService]},
// ];
var ClsDataModule = /** @class */ (function () {
    function ClsDataModule() {
    }
    ClsDataModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_7__["LoaderModule"],
                src_app_angular_material__WEBPACK_IMPORTED_MODULE_8__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_5__["CustomDatePipeModule"]
            ],
            declarations: [
                _cls_data_component__WEBPACK_IMPORTED_MODULE_6__["ClsDataComponent"]
            ],
            entryComponents: [
                _cls_data_component__WEBPACK_IMPORTED_MODULE_6__["ClsDataComponent"]
            ],
        })
    ], ClsDataModule);
    return ClsDataModule;
}());



/***/ })

}]);
//# sourceMappingURL=fgs-operations-cls-data-cls-data-module.js.map