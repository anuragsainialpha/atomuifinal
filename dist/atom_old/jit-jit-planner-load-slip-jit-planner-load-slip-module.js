(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jit-jit-planner-load-slip-jit-planner-load-slip-module"],{

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

/***/ "./src/app/jit/jit-planner-load-slip/jit-planner-load-slip.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/jit/jit-planner-load-slip/jit-planner-load-slip.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    Loadslip > <span>View Load Slip For JIT</span>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export Download\" *ngIf='releasedDate != null'>\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"locationBack()\" matTooltip=\"Back\">\n        <i class=\"fa fa-reply\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n  <div class=\"clearfix\"></div>\n  <div class=\"loadslip-fields tab-loadslip-fields\">\n    <div class=\"row margin-bottom-5\">\n      <div class=\"col-md-7\">\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n            <div class='inputbordered'>\n              <div>Source</div>\n              <div>\n                <b>{{userSource || '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pd-0 \">\n            <div class=\"form-group inputbordered\">\n              <div>Destination</div>\n              <div>\n                <b>{{destination?destination:'--' | uppercase}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class='form-group inputbordered'>\n              <div>Dest Desc </div>\n              <div [title]=\"description\" [ngClass]=\"{'cursor-pointer':description?.length>8}\">\n                <b>{{description ? (((description?.length>8)? (description | slice:0:8)+'..':(description)) | uppercase) : '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0 \">\n            <div class=\"form-group inputbordered\">\n              <div>\n                Truck\n              </div>\n              <div>\n                <b>{{truckType?truckType:'--'}} <span *ngIf=\"indentCategory\"> - ({{indentCategory}})</span></b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"form-group inputbordered\">\n              <div>Truck Type</div>\n              <div>\n                <b>{{truckT?truckT:'--' }}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pd-0\">\n            <div class=\"form-group inputbordered\">\n              <div>Transporter</div>\n              <div>\n                <b>{{transporter?transporter:'--' }}</b>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-5\">\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n            <div class=\"inputbordered\">\n              <div>Category</div>\n              <div>\n                <b>{{loadslipCategory || '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 pr-0\">\n            <div class=\"form-group inputbordered\">\n              <div>\n                Ship To\n              </div>\n              <div>\n                <b>{{ShipTo?ShipTo:'--'}}</b>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-3\">\n            <div class=\"form-group inputbordered\">\n              <div>Actual Truck Type</div>\n              <div>\n                <b>{{actualTruckType || '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pd-0\">\n            <div class=\"form-group inputbordered\">\n              <div>Variant 1</div>\n              <div>\n                <b>{{variant_ONE || '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"form-group inputbordered\">\n              <div>Frt Avail</div>\n              <div>\n                <b>{{ freightAvailableflag || '--'}}</b>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"row margin-bottom-5\">\n      <div class=\"col-md-2\">\n        <div class='bordered'>\n          <div>Shipment No</div>\n          <div>\n            <b>{{shipmentNumber || '--'}}</b>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3 pd-0\">\n        <div class=\"bordered-box\">\n          <div class=\"row text-center\">\n              <div class=\"col-md-3 text-center bordered-box-left-div\">\n                  <div>\n                    Wt (Kg\n                  </div>\n                  <div >\n                    <b>{{itemLevelTotalWeight?(itemLevelTotalWeight | number : '1.2-2'):0 }}</b>\n                  </div>\n                </div>\n            <div class=\"col-md-3 text-center bordered-box-left-div\">\n              <div>\n                TTE Util\n              </div>\n              <div [ngClass]=\"(totalTTESeletecd > 100)?'text-danger':'color-green'\">\n                <b>{{totalTTESeletecd?(totalTTESeletecd | number : '1.2-2'):0 }}%</b>\n              </div>\n            </div>\n           \n            <div class=\"col-md-3  bordered-box-left-div\">\n              <div>\n                Wt Util\n              </div>\n              <div [ngClass]=\"(totalMaterialWeight > 100)?'text-danger':'color-green'\">\n                <b>{{totalMaterialWeight?(totalMaterialWeight | number : '1.2-2'):0}}%</b>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div>\n                Vol Util\n              </div>\n              <div [ngClass]=\"(totalTruckVolume > 100)?'text-danger':'color-green'\">\n                <b>{{totalTruckVolume?(totalTruckVolume | number : '1.2-2'):0}}%</b>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-5 pr-0\">\n        <!-- <div class=\"row bg-theme\">\n          <div class=\"col-md-2 col-wid-20p\">\n            <div>Tyres</div>\n            <div>\n              {{totalTyres?totalTyres:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-20p\">\n            <div>Tubes</div>\n            <div>\n              {{totalTubes?totalTubes:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-20p\">\n            <div>Flaps</div>\n            <div>\n              {{totalFlaps?totalFlaps:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-20p\">\n            <div> Valves</div>\n            <div>\n              {{totalValves?totalValves:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-20p\">\n            <div>Pctr</div>\n            <div>{{totalPctr?totalPctr:0}} </div>\n          </div>\n        </div> -->\n        <div class=\"row bg-theme export-padding\">\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Tyres</div>\n            <div>\n              {{totalTyres?totalTyres:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Tubes</div>\n            <div>\n              {{totalTubes?totalTubes:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Flaps</div>\n            <div>\n              {{totalFlaps?totalFlaps:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div> Valves</div>\n            <div>\n              {{totalValves?totalValves:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Pctr</div>\n            <div>{{totalPctr?totalPctr:0}} </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Others</div>\n            <div>{{totalOthersCount?totalOthersCount:0}} </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Tot Qty</div>\n            <div>{{totalQuantity?totalQuantity:0}} </div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"col-md-1 flow-btns\">\n        <button mat-raised-button color=\"primary\">LS on Same Truck</button>\n      </div> -->\n      <div class=\"col-md-2 pl-0 flow-btns font-11 jitResponsiveBtns\">\n        <button mat-raised-button mat-raised-button color=\"primary\" class=\"btm-action-btn tab-mb-10\" (click)=\"onOpenModal()\"\n          data-target=\"#myModal\">View Invoice </button>\n        <button mat-raised-button color=\"primary\">Share Truck(MP)</button>\n      </div>\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <div class='bordered'>\n          <div>Load Slip No </div>\n          <div><b>{{loadslipID || '--'}}</b></div>\n        </div>\n      </div>\n      <div class=\"col-md-1 pl-0\">\n        <div class=\"bordered\">\n          <div>\n            Drop Seq\n          </div>\n          <div>\n            <b>{{dropSeq?dropSeq:'--'}}</b>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-1 pl-0\">\n        <div class='bordered'>\n          <div>TTE Qty </div>\n          <div><b>{{totalTTE ? (totalTTE | number:'1.2-2') : '--'}}</b></div>\n        </div>\n      </div>\n      <div class=\"col-md-1 pl-0\">\n        <div class='bordered'>\n          <div>Indt Cat</div>\n          <div [title]=\"indentCategory\" [ngClass]=\"{'cursor-pointer':indentCategory?.length>15}\">\n            <b>{{indentCategory ? (((indentCategory?.length>15)? (indentCategory | slice:0:15)+'..':(indentCategory)) | uppercase) : '--'}}</b>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-1 pl-0\">\n        <div class='bordered'>\n          <div>Cntry Of Dest </div>\n          <div [title]=\"countryOfDestination\" [ngClass]=\"{'cursor-pointer':countryOfDestination?.length>15}\">\n            <b>{{countryOfDestination ? (((countryOfDestination?.length>15)? (countryOfDestination | slice:0:15)+'..':(countryOfDestination)) | uppercase) : '--'}}</b>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-1 pl-0\">\n        <div class=\"bordered\">\n          <div>\n            City\n          </div>\n          <div>\n            <!-- <b>{{city?city:'--'}}</b> -->\n            <div [title]=\"city\" [ngClass]=\"{'cursor-pointer':city?.length>8}\">\n              <b>{{city ? (city?.length>8) ? (city | slice:0:8)+'..':(city) : '--'}}</b>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-1 pl-0 flow-btns tab-flow-btns width-8\">\n        <button *ngIf=\"(bayArrivedDate == null)\" mat-raised-button class=\"mat-default\">Arrived Bay</button>\n        <button *ngIf=\"(bayArrivedDate != null)\" class=\"greenButton\">Arrived Bay <b>: {{bay}}</b> <span>{{bayArrivedDate\n            | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n      </div>\n      <div class=\"col-md-1 pl-0 flow-btns tab-flow-btns width-8\">\n        <button mat-raised-button color=\"default\" class=\"mat-default\"\n          *ngIf=\"(lsPrintDate == null) && (releasedDate == null)\">Print\n          LS</button>\n        <button class=\"greenButton\" *ngIf=\"(lsPrintDate != null) && (releasedDate == null)\"\n          (click)=\"downloadLoadslip()\">Print LS<span>\n            ({{(lsPrintDate) | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}})</span></button>\n        <button class=\"greenButton\" *ngIf=\"(releasedDate != null)\" (click)=\"downloadLoadslip()\">Print Pdf<span>\n            ({{(lsPrintDate) | customDateFormat\n            | date:'dd-MMM-yyyy,HH:mm'}})</span></button>\n      </div>\n      <!-- <div class=\"col-md-2 flow-btns\">\n        <button mat-raised-button color=\"default\">Send for Barcode</button>\n      </div> -->\n      <div class=\"col-md-1  flow-btns tab-flow-btns width-8\">\n        <button mat-raised-button color=\"default\" *ngIf=\"(loadingStartDate == null)\">Loading\n          Start</button>\n        <button *ngIf=\"(loadingStartDate != null)\" class=\"greenButton\">Loading Start <span>{{loadingStartDate |\n            customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n      </div>\n      <div class=\"col-md-1  flow-btns tab-flow-btns width-8\">\n        <button mat-raised-button color=\"default\" *ngIf=\"(loadingEndDate == null)\">Loading\n          End</button>\n        <button *ngIf=\"(loadingEndDate != null)\" class=\"greenButton\">Loading End <span>{{loadingEndDate |\n            customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n      </div>\n      <div class=\"col-md-1 flow-btns tab-flow-btns width-8\">\n        <button mat-raised-button color=\"default\" *ngIf=\"(releasedDate == null)\">Release</button>\n        <button *ngIf=\"(releasedDate != null)\" class=\"greenButton\">Release <span>{{releasedDate | customDateFormat |\n            date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"mb-3\">\n    <ngx-datatable class='material' [rows]='loadSlipData' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n       [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [summaryRow]=\"true\" [summaryHeight]=\"'auto'\"\n      [summaryPosition]=\"'bottom'\">\n      <ngx-datatable-column name=\"Invoice Number\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"INVOICE_NUMBER\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.INVOICE_NUMBER || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Material Code\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"ITEM_ID\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.ITEM_ID || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Material Description\" [width]=\"250\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"ITEM_DESCRIPTION\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.ITEM_DESCRIPTION || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Cat\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"ITEM_CATEGORY\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.ITEM_CATEGORY || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Qty\" [width]=\"40\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"qty\"\n        [summaryFunc]=\"qtySumm\" [summaryTemplate]=\"qtSummaryCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.qty || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Weight\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"weight\"\n        [summaryFunc]=\"weightSumm\" [summaryTemplate]=\"weSummaryCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.weight || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n    </ngx-datatable>\n    <ng-template #weSummaryCell let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ weightSumm?(weightSumm | number : '1.2-2'):0}} Kg\n            /{{metricTon?(metricTon | number :'1.2-2'):0}} MT\n          </span>\n          <!-- <span class=\"chip-content\">Total Qty : {{ qtySumm }}</span> -->\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #qtSummaryCell let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ qtySumm?qtySumm:0}}</span>\n          <!-- <span class=\"chip-content\">Total Qty : {{ qtySumm }}</span> -->\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header \">\n        <h4 class=\"modal-title\" style=\"font-size: 16px\">Invoice\n          <button type=\"button\" class=\"close pull-right\" (click)=\"onCloseHandled()\">&times;</button>\n        </h4>\n      </div>\n      <div class=\"modal-body\" style=\"height: 250px;overflow-y: auto\">\n        <div class=\"table-responsive\">\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table\">\n            <!-- Checkbox Column -->\n            <ng-container matColumnDef=\"select\">\n              <th mat-header-cell *matHeaderCellDef>\n                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                  [checked]=\"selection.hasValue() && isAllSelected()\"\n                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                </mat-checkbox>\n              </th>\n              <td mat-cell *matCellDef=\"let row\">\n                <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n                  [checked]=\"selection.isSelected(row)\">\n\n                </mat-checkbox>\n              </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"invoiceNumber\">\n              <th mat-header-cell *matHeaderCellDef> Invoice Number </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.invoiceNumber}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"deliveryNumber\">\n              <th mat-header-cell *matHeaderCellDef> Delivery Number </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.deliveryNumber}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"truckNumber\">\n              <th mat-header-cell *matHeaderCellDef> Truck Number </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.truckNumber}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"destLoc\">\n              <th mat-header-cell *matHeaderCellDef> Destination </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.destLoc}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"invoiceDate\">\n              <th mat-header-cell *matHeaderCellDef> Invoice Date </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.invoiceDate}} </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </tr>\n          </table>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/jit/jit-planner-load-slip/jit-planner-load-slip.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/jit/jit-planner-load-slip/jit-planner-load-slip.component.ts ***!
  \******************************************************************************/
/*! exports provided: JitPlannerLoadSlipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JitPlannerLoadSlipComponent", function() { return JitPlannerLoadSlipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var JitPlannerLoadSlipComponent = /** @class */ (function () {
    function JitPlannerLoadSlipComponent(service, router, ActivatedRoute, toastr, dialog, location) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.ActivatedRoute = ActivatedRoute;
        this.toastr = toastr;
        this.dialog = dialog;
        this.location = location;
        this.isLoading = false;
        this.page = {
            limit: 10,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.limitOptions = [
            { key: '10', value: 10 },
            { key: '20', value: 20 },
            { key: '30', value: 30 },
            { key: '50', value: 50 },
            { key: '100', value: 100 }
        ];
        this.loadSlipData = [];
        this.source = '';
        this.destination = '';
        this.countryOfDestination = '';
        this.truckType = '';
        this.minDate = new Date();
        this.editing = {};
        this.createLoadSlipSuccess = false;
        this.truckTypes = [];
        this.isLoadslipIdAvaliable = false;
        this.displayedColumns = ['select', 'invoiceNumber', 'deliveryNumber', 'truckNumber', 'destLoc', 'invoiceDate'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.invoiceDataList = [];
        this.selectedInvoiceListItems = [];
        this.isConfirmed = false;
        this.finalInvoiceList = [];
        this.selectedInvoiceItems = [];
        this.weightSumm = 0;
        this.qtySumm = 0;
        this.metricTon = 0;
        this.totalOthersCount = 0;
        this.totalQuantity = 0;
        setTimeout(function () { _this.isLoading = true; }, 0);
        // this.userSource = localStorage.getItem("sourceID");
        this.loadslipID = this.ActivatedRoute.snapshot.params['loadslipId'];
        // this.viewType = this.ActivatedRoute.snapshot.params['viewType']
        console.log(this.ActivatedRoute.snapshot.params);
        this.roles = src_app_constants__WEBPACK_IMPORTED_MODULE_5__["constants"].roles;
        this.menuName = this.ActivatedRoute.snapshot.queryParams['menuName'];
        if (this.loadslipID) {
            this.isLoadslipIdAvaliable = true;
            this.getLoadSlipByIdFromServer(this.loadslipID);
        }
    }
    JitPlannerLoadSlipComponent.prototype.ngOnInit = function () {
        if (this.service.checkRole() == 'JIT_GAT') {
            localStorage.setItem("userMenu", this.menuName);
        }
        else {
            localStorage.setItem("userMenu", "load-slip");
        }
        this.pageSize = 20;
        this.page.limit = 20;
    };
    JitPlannerLoadSlipComponent.prototype.getLoadSlipByIdFromServer = function (loadslipID) {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLoadSlipDetailsByID + "/" + loadslipID).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var responseData = response['data'];
                _this.destination = responseData.destination;
                _this.shipmentNumber = responseData.shipmentID;
                _this.loadslipCategory = responseData.loadslipCategory;
                _this.bayArrivedDate = responseData.bayArrivedDate;
                _this.loadingStartDate = responseData.loadingStartDate;
                _this.loadingEndDate = responseData.loadingEndDate;
                _this.confirmedDate = responseData.confirmedDate;
                _this.releasedDate = responseData.releasedDate;
                _this.lsPrintDate = responseData.lsPrintDate;
                _this.bay = responseData.bay;
                _this.ShipTo = responseData.shipTo;
                _this.truckType = responseData.truckNumber;
                _this.totalTyres = responseData.totalTyres;
                _this.totalTubes = responseData.totalTubes;
                _this.totalFlaps = responseData.totalFlaps;
                _this.totalValves = responseData.totalValves;
                _this.totalPctr = responseData.totPctr;
                _this.userSource = responseData.source;
                _this.multistopTruckNumber = responseData.truckNumber;
                // this.IS_MULTI_STOP = responseData.multiStop;
                _this.totalTyres = responseData.totalTyres;
                _this.totalTubes = responseData.totalTubes;
                _this.totalFlaps = responseData.totalFlaps;
                _this.totalValves = responseData.totalValves;
                _this.totalPctr = responseData.totPctr;
                _this.totalOthersCount = responseData.otherQty;
                _this.totalQuantity = responseData.totQty;
                _this.dropSeq = responseData.dropSeq;
                _this.freightAvailableflag = responseData.freightAvailableflag;
                // Shipment level values
                _this.totalTTESeletecd = responseData.shipmentTTEUtil;
                _this.totalMaterialWeight = responseData.shipmentWeightUtil;
                _this.totalTruckVolume = responseData.shipmentVolumeUtil;
                //Loads slip values 
                // this.loadslipTteUtil = responseData.tteUtil;
                // this.loadslipWtUtil = responseData.weightUtil;
                // this.loadslipVolUtil = responseData.volumeUtil;
                _this.totalLoadedQty = responseData.totalLoadedQty;
                _this.itemLevelTotalTTE = responseData.totalTTE;
                _this.itemLevelTotalWeight = responseData.totalWeight;
                _this.itemLevelTotalVolume = responseData.totalVolume;
                // variants & Actual Truck Type
                _this.variant_ONE = responseData.variant1;
                _this.actualTruckType = responseData.actualTruckType;
                _this.truckT = responseData.truckType;
                _this.transporter = responseData.servprov;
                _this.city = responseData.city;
                _this.countryOfDestination = responseData.countryName;
                _this.indentCategory = responseData.truckIndentCategory;
                _this.description = responseData.description;
                _this.totalTTE = responseData.totalTTE;
                _this.invoiceDataList = responseData['delInvHeaderList'];
                for (var i = 0; i < _this.invoiceDataList.length; i++) {
                    if (_this.invoiceDataList[i].loadslipId == _this.loadslipID) {
                        _this.selectedInvoiceListItems.push(_this.invoiceDataList[i]);
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.selectedInvoiceListItems);
                    }
                }
                _this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, _this.selectedInvoiceListItems);
                _this.setLoadSlipValue(responseData);
                _this.isLoading = false;
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    JitPlannerLoadSlipComponent.prototype.setLoadSlipValue = function (responseData) {
        var _this = this;
        if (responseData.loadslipDraftDataDtos) {
            this.totalTyres = 0;
            this.totalTubes = 0;
            this.totalFlaps = 0;
            this.totalValves = 0;
            this.totalPctr = 0;
            responseData.loadslipDraftDataDtos.forEach(function (data) {
                var newData = {
                    "BATCH_CODE": data.batchCode,
                    "qty": data.loadedQty,
                    "lineNumber": data.lineNumber,
                    "ITEM_DESCRIPTION": data.itemDesc,
                    "ITEM_ID": data.itemId,
                    "VOLUME": data.grossVol,
                    "WEIGHT": data.grossWt,
                    "TTE": data.tte,
                    "SUM_QTY": data.availableQty,
                    "ITEM_CATEGORY": data.itemCategory,
                    "MIN_PRIORITY": data.priority,
                    "isScannable": data.isScannable,
                    // flap details
                    // "FLAP_DESC": data.flapSKU,
                    "flapBatch": data.flapBatch,
                    "FLAP_CODE": data.flapSKU,
                    "FLAP_COMP_QTY": data.flapCompQty,
                    "totalFlapQty": data.falpQty,
                    //tube details
                    "tubeBatch": data.tubeBatch,
                    "TUBE_CODE": data.tubeSKU,
                    "TUBE_COMP_QTY": data.tubeCompQty,
                    "totalTubeQty": data.tubeQty,
                    //value details
                    "VALVE_DESC": data.valveBatch,
                    "VALVE_CODE": data.valveSKU,
                    "VALVE_COMP_QTY": data.valveCompQty,
                    "totalValueQty": data.valveQty,
                    "INVOICE_NUMBER": data.invoiceNumber,
                    "weight": data.weight
                };
                _this.loadSlipData.push(newData);
                _this.loadSlipData = _this.loadSlipData.slice();
            });
            this.totalTyres = responseData.totalTyres;
            this.totalTubes = responseData.totalTubes;
            this.totalFlaps = responseData.totalFlaps;
            this.totalValves = responseData.totalValves;
            this.totalPctr = responseData.totPctr;
            this.totalTTESeletecd = responseData.tteUtil;
            this.totalMaterialWeight = responseData.weightUtil;
            this.totalTruckVolume = responseData.volumeUtil;
            this.totalLoadedQty = responseData.totalLoadedQty;
            this.itemLevelTotalTTE = responseData.totalTTE;
            this.itemLevelTotalWeight = responseData.totalWeight;
            this.itemLevelTotalVolume = responseData.totalVolume;
            this.weightSummaryCell();
        }
    };
    /** Whether the number of selected elements matches the total number of rows. */
    JitPlannerLoadSlipComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.selectedInvoiceListItems.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    JitPlannerLoadSlipComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ? this.selection.clear() : this.selectedInvoiceListItems.forEach(function (row) { return _this.selection.select(row); });
    };
    JitPlannerLoadSlipComponent.prototype.onOpenModal = function () {
        $('#myModal').modal('show');
    };
    JitPlannerLoadSlipComponent.prototype.onCloseHandled = function () {
        $('#myModal').modal('hide');
    };
    JitPlannerLoadSlipComponent.prototype.weightSummaryCell = function () {
        var _this = this;
        this.loadSlipData.forEach(function (item) {
            _this.weightSumm += item.WEIGHT;
            _this.qtySumm += item.qty;
        });
        this.metricTon = this.weightSumm / 1000;
    };
    // Download loadslip after trigger CONFIRM event
    JitPlannerLoadSlipComponent.prototype.downloadLoadslip = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.printLoadslip + "?loadslipId=" + this.loadslipID).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var responseData = response['data'];
                var linkSource = 'data:application/pdf;base64,' + responseData;
                var element = document.createElement('a');
                element.setAttribute('href', linkSource);
                element.setAttribute('download', _this.loadslipID);
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
                _this.isLoading = false;
                _this.toastr.success(response['message']);
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error");
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    JitPlannerLoadSlipComponent.prototype.locationBack = function () {
        this.location.back();
    };
    // Print Excel
    JitPlannerLoadSlipComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service_DownLoadExcel(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.printLoadslip + '?loadslipId=' + this.loadslipID + '&excel=' + true).subscribe(function (response) {
            if (response.body.type == 'application/json') {
                //  When user requests for excel for cancelled LS then the return type will be 'application/json'
                // Other wise it will of type blob
                _this.isLoading = false;
                _this.toastr.error("Loadslip is found as cancelled...", "Error!");
            }
            else if (response) {
                // Uncomment when export excel is generated in backend
                var blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                // var filename = 'LoadslipDetails.xlsx';
                var filename = _this.loadslipID + '.xlsx';
                var link = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                document.body.appendChild(a);
                a.setAttribute('style', 'display: none');
                a.href = link;
                a.download = filename;
                a.click();
                window.URL.revokeObjectURL(link);
                a.remove();
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
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('weSummaryCell'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], JitPlannerLoadSlipComponent.prototype, "weSummaryCell", void 0);
    JitPlannerLoadSlipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jit-planner-load-slip',
            template: __webpack_require__(/*! ./jit-planner-load-slip.component.html */ "./src/app/jit/jit-planner-load-slip/jit-planner-load-slip.component.html")
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], JitPlannerLoadSlipComponent);
    return JitPlannerLoadSlipComponent;
}());



/***/ }),

/***/ "./src/app/jit/jit-planner-load-slip/jit-planner-load-slip.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/jit/jit-planner-load-slip/jit-planner-load-slip.module.ts ***!
  \***************************************************************************/
/*! exports provided: JitPlannerLoadSlipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JitPlannerLoadSlipModule", function() { return JitPlannerLoadSlipModule; });
/* harmony import */ var _jit_planner_load_slip_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jit-planner-load-slip.component */ "./src/app/jit/jit-planner-load-slip/jit-planner-load-slip.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _jit_planner_load_slip_component__WEBPACK_IMPORTED_MODULE_0__["JitPlannerLoadSlipComponent"] },
    { path: ':loadslipId', component: _jit_planner_load_slip_component__WEBPACK_IMPORTED_MODULE_0__["JitPlannerLoadSlipComponent"] },
    { path: ':loadslipId/:viewType', component: _jit_planner_load_slip_component__WEBPACK_IMPORTED_MODULE_0__["JitPlannerLoadSlipComponent"] },
];
var JitPlannerLoadSlipModule = /** @class */ (function () {
    function JitPlannerLoadSlipModule() {
    }
    JitPlannerLoadSlipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                src_app_angular_material__WEBPACK_IMPORTED_MODULE_7__["customMaterialModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_3__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__["CustomDatePipeModule"]
            ],
            declarations: [_jit_planner_load_slip_component__WEBPACK_IMPORTED_MODULE_0__["JitPlannerLoadSlipComponent"]]
        })
    ], JitPlannerLoadSlipModule);
    return JitPlannerLoadSlipModule;
}());



/***/ })

}]);
//# sourceMappingURL=jit-jit-planner-load-slip-jit-planner-load-slip-module.js.map