(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planner-loadslip-planner-view-loadslip-planner-view-module"],{

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

/***/ "./src/app/planner/loadslip-planner-view/loadslip-planner-view.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/planner/loadslip-planner-view/loadslip-planner-view.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    Loadslip > <span>View Load Slip</span>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" *ngIf=\"(confirmedDate != null || isDPREPRole())\" (click)=\"export()\" matTooltip=\"Export Download\">\n            <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"locationBack()\" matTooltip=\"Back\">\n        <i class=\"fa fa-reply\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n  <div class=\"clearfix\"></div>\n  <div class=\"loadslip-fields tab-loadslip-fields\">\n    <div class=\"row margin-bottom-5\">\n      <div class=\"col-md-7\">\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n            <div class='inputbordered'>\n              <div>Source</div>\n              <div>\n                <b>{{userSource || '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pd-0 \">\n            <div class=\"form-group inputbordered\">\n              <div>Destination</div>\n              <div>\n                <b>{{destination?destination:'--' | uppercase}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 pr-0 \">\n            <div class=\"form-group inputbordered\">\n              <div>\n                Truck\n              </div>\n              <div [title]=\"truckType\" [ngClass]=\"{'cursor-pointer':truckType?.length>18}\">\n                <b>{{truckType ? (((truckType?.length>18)? (truckType | slice:0:18)+'..':(truckType)) | uppercase) : '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group inputbordered\">\n              <div>Truck Type</div>\n              <!-- <div>\n                <b>{{truckT?truckT:'--' }}</b>\n              </div> -->\n              <div [title]=\"truckT\" [ngClass]=\"{'cursor-pointer':truckT?.length>20}\">\n                <b>{{truckT ? (((truckT?.length>18)? (truckT | slice:0:18)+'..':(truckT)) | uppercase) : '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pd-0\">\n            <div class=\"form-group inputbordered\">\n              <div>Transporter</div>\n              <!-- <div>\n                <b>{{transporter?transporter:'--' }}</b>\n              </div> -->\n              <div [title]=\"transporter\" [ngClass]=\"{'cursor-pointer':transporter?.length>11}\">\n                <b>{{transporter ? (((transporter?.length>11)? (transporter | slice:0:11)+'..':(transporter)) | uppercase) : '--'}}</b>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-5\">\n        <div class=\"row\">\n          <div class=\"col-md-3 pr-0\">\n            <div class=\"form-group inputbordered\">\n              <div>\n                Ship To\n              </div>\n              <div>\n                <b>{{ShipTo?ShipTo:'--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group inputbordered\">\n              <div>Actual Truck Type</div>\n                <div [title]=\"actualTruckType\" [ngClass]=\"{'cursor-pointer':actualTruckType?.length>11}\">\n                  <b>{{actualTruckType ? (((actualTruckType?.length>11)? (actualTruckType | slice:0:11)+'..':(actualTruckType)) | uppercase) : '--'}}</b>\n                </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 pd-0\">\n            <div class=\"form-group inputbordered\">\n              <div>Variant 1</div>\n              <div>\n                <b>{{variant_ONE || '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group inputbordered\">\n              <div>Frt Avail</div>\n              <div>\n                <b>{{ freightAvailableflag || '--'}}</b>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row margin-bottom-5\">\n      <div class=\"col-md-2\">\n        <div class='bordered'>\n          <div>Shipment No</div>\n          <div>\n            <b>{{shipmentNumber || '--'}}</b>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3 pd-0\">\n        <div class=\"bordered-box\">\n          <div class=\"row text-center h-100\">\n              <div class=\"col-md-4 text-center bordered-box-left-div\">\n                  <div>\n                    TTE Util\n                  </div>\n                  <div [ngClass]=\"(totalTTESeletecd > 100)?'text-danger':'color-green'\">\n                    <b>{{totalTTESeletecd?(totalTTESeletecd | number : '1.2-2'):0 }}%</b>\n                  </div>\n                </div>\n              <div class=\"col-md-4  bordered-box-left-div\">\n              <div>\n                Wt Util\n              </div>\n              <div [ngClass]=\"(totalMaterialWeight > 100)?'text-danger':'color-green'\">\n                <b>{{totalMaterialWeight?(totalMaterialWeight | number : '1.2-2'):0}}%</b>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div>\n                Vol Util\n              </div>\n              <div [ngClass]=\"(totalTruckVolume > 100)?'text-danger':'color-green'\">\n                <b>{{totalTruckVolume?(totalTruckVolume | number : '1.2-2'):0}}%</b>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-5\">\n        <div class=\"row bg-theme h-100\">\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Tyres</div>\n            <div>\n              {{totalTyres?totalTyres:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Tubes</div>\n            <div>\n              {{totalTubes?totalTubes:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Flaps</div>\n            <div>\n              {{totalFlaps?totalFlaps:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div> Valves</div>\n            <div>\n              {{totalValves?totalValves:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Pctr</div>\n            <div>{{totalPctr?totalPctr:0}} </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Others</div>\n            <div>{{totalOthersCount?totalOthersCount:0}} </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Tot Qty</div>\n            <div>{{totalQuantity?totalQuantity:0}} </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2 flow-btns MD-MP customResponsive\">\n        <button mat-raised-button color=\"primary\" class=\"tab-mb-10\">LS on Same Truck(MD)</button>\n        <button mat-raised-button color=\"primary\" class=\"ml-5\">Share Truck(MP)</button>\n\n      </div>\n    <!--  <div class=\"col-md-1 flow-btns MD-MP\">\n        <button mat-raised-button color=\"primary\" class=\"tab-mb-10\">LS on Same Truck(MD)</button>\n      </div>\n      <div class=\"col-md-1 flow-btns\">\n        <button mat-raised-button color=\"primary\">Share Truck(MP)</button>\n      </div>-->\n    </div>\n    <div class=\"row margin-bottom-5\">\n      <div class=\"col-md-2\">\n        <div class='bordered'>\n          <div>Load Slip No </div>\n          <div><b>{{loadslipID || '--'}}</b></div>\n        </div>\n      </div>\n      <div class=\"col-md-1  pd-0\">\n        <div class=\"bordered\">\n          <div>LS Category</div>\n          <div>\n            <b>{{loadslipCategory || '--'}}</b>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-1\">\n        <div class=\"bordered\">\n          <div>\n            Drop Seq\n          </div>\n          <div>\n            <b>{{dropSeq?dropSeq:'--'}}</b>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-1 flow-btns tab-flow-btns width-7-5\">\n        <button *ngIf=\"(bayArrivedDate == null)\" mat-raised-button class=\"mat-default\">Arrived Bay</button>\n        <button *ngIf=\"(bayArrivedDate != null)\" class=\"greenButton\">Arrived Bay <b>: {{bay}}</b> <span>{{bayArrivedDate\n            | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n      </div>\n      <div class=\"col-md-1 flow-btns tab-flow-btns width-7-5\">\n        <button mat-raised-button color=\"default\" class=\"mat-default\"\n          *ngIf=\"(lsPrintDate == null) && (confirmedDate == null)\">Print\n          LS</button>\n        <button class=\"greenButton\" *ngIf=\"(lsPrintDate != null) && (confirmedDate == null)\">Print LS<span>\n            ({{lsPrintDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}})</span></button>\n        <button class=\"greenButton\" *ngIf=\"(confirmedDate != null)\" (click)=\"downloadLoadslip()\">Print Pdf<span> {{(lsPrintDate) | customDateFormat\n            | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n      </div>\n      <div class=\"col-md-1 flow-btns tab-flow-btns width-7-5\">\n        <button mat-raised-button color=\"default\" *ngIf=\"(sendForBarcodeDate == null)\">Send Barcode</button>\n        <button class=\"greenButton\" *ngIf=\"(sendForBarcodeDate != null)\">Send Barcode\n          <span>{{sendForBarcodeDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n      </div>\n      <div class=\"col-md-1 flow-btns tab-flow-btns width-7-5\">\n        <button mat-raised-button color=\"default\" *ngIf=\"(loadingStartDate == null)\">Loading Start</button>\n        <button *ngIf=\"(loadingStartDate != null)\" class=\"greenButton\">Loading Start <span>{{loadingStartDate |\n            customDateFormat |\n            date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n      </div>\n      <div class=\"col-md-1 flow-btns tab-flow-btns width-7-5\">\n        <button mat-raised-button color=\"default\" *ngIf=\"(loadingEndDate == null)\">Loading\n          End</button>\n        <button *ngIf=\"(loadingEndDate != null)\" class=\"greenButton\">Loading End <span>{{loadingEndDate |\n            customDateFormat |\n            date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n      </div>\n      <div class=\"col-md-1 flow-btns tab-flow-btns width-7-5\">\n        <button mat-raised-button color=\"default\" *ngIf=\"(confirmedDate == null)\">Confirm</button>\n        <button *ngIf=\"(confirmedDate != null)\" class=\"greenButton\">Confirm <span>{{confirmedDate | customDateFormat |\n            date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n      </div>\n      <div class=\"col-md-1 flow-btns tab-flow-btns width-7-5\">\n        <button mat-raised-button color=\"default\" *ngIf=\"(releasedDate == null)\">Release</button>\n        <button *ngIf=\"(releasedDate != null)\" class=\"greenButton\">Release <span>{{releasedDate | customDateFormat |\n            date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n      </div>\n      <div class=\"col-md-1 flow-btns tab-flow-btns width-7-5\">\n        <button mat-raised-button color=\"primary\">SO/STO Delete</button>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <div class=\"bordered\">\n          <div>STO/SO</div>\n          <div><b>{{STOSONumber || '--'}}</b></div>\n        </div>\n      </div>\n      <div class=\"col-md-1 pd-0\">\n        <div class=\"bordered\">\n          <div>TTE Qty</div>\n          <div><b>{{totalTTEQty?(totalTTEQty | number : '1.2-2'):0}}</b></div>\n        </div>\n      </div>\n      <div class=\"col-md-1 pr-0\">\n          <div class=\"bordered\">\n          <div>\n              Wt (Kg)\n          </div>\n          <div >\n            <b>{{itemLevelTotalWeight?(itemLevelTotalWeight | number : '1.2-2'):0 }}</b>\n          </div>\n          </div>\n        </div>\n      <div class=\"col-md-1\">\n        <div class=\"bordered\">\n          <div>Category</div>\n          <div>\n            <b>{{(selectedCategories.length>0)?(selectedCategories.toString() | uppercase):'--' }}</b>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-1 pl-0\">\n        <div class=\"bordered\">\n          <div>Indt Cat</div>\n          <div [title]=\"indentCategory\" [ngClass]=\"{'cursor-pointer':indentCategory?.length>15}\">\n            <b>{{indentCategory ? (((indentCategory?.length>15)? (indentCategory | slice:0:15)+'..':(indentCategory)) | uppercase) : '--'}}</b>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-1 pd-0 \">\n        <div class=\"form-group bordered\">\n          <div>Dest Desc</div>\n          <div [title]=\"description\" [ngClass]=\"{'cursor-pointer':description?.length>11}\">\n            <b>{{description ? (((description?.length>11)? (description | slice:0:11)+'..':(description)) | uppercase) : '--'}}</b>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2  \">\n        <div class=\"bordered\">\n          <div>City</div>\n            <!-- <b>{{city ? (city | uppercase) : '--'}}</b> -->\n            <div [title]=\"city\" [ngClass]=\"{'cursor-pointer':city?.length>15}\">\n              <b>{{city ? ((city?.length>15) ? (city | slice:0:15)+'..':(city)| uppercase) : '--'}}</b>\n            </div>\n        </div>\n      </div>\n      <div class=\" col-md-1 flow-btns\" *ngIf=\"elrFlag\">\n        <!-- (click)=\"generateLrNum()\" -->\n        <button class=\"greenButton\" *ngIf=\"generateLr\">Generate LR</button>\n        <button (click)=\"downloadLoadReceipt()\" class=\"greenButton\" *ngIf=\"printLr\">Print\n          LR<span>{{lrNum}}</span></button>\n      </div>\n    </div>\n  </div>\n  <div class=\"mb-3\">\n    <ngx-datatable class='material no-scroll-table' [rows]='loadSlipData' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n       [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [scrollbarH]=\"true\">\n      <ngx-datatable-column name=\"Material Code\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"ITEM_ID\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.ITEM_ID || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Material Description\" [width]=\"250\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"ITEM_DESCRIPTION\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.ITEM_DESCRIPTION || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Cat\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"ITEM_CATEGORY\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.ITEM_CATEGORY || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Batch\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"BATCH_CODE\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.BATCH_CODE || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Priority\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"MIN_PRIORITY\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.MIN_PRIORITY || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Available Qty\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"SUM_QTY\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.SUM_QTY || \"0\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Qty\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"qty\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n          <span>{{row.QTY || \"--\"}} </span>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Scannable\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"isScannable\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.isScannable || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Scan Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"scannedQty\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.scannedQty}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Tube Code\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"TUBE_CODE\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.TUBE_CODE || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Tube Batch\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"tubeBatch\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n          <span *ngIf=\"(confirmedDate != null)  && (confirmedDate != '')\">{{row.tubeBatch}} </span>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Tube Qty\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"totalTubeQty\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totalTubeQty}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Flap Code\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"FLAP_CODE\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.FLAP_CODE || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Flap Batch\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"flapBatch\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n          <span *ngIf=\"(confirmedDate != null)  && (confirmedDate != '')\">{{row.flapBatch}} </span>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Flap Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"totalFlapQty\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totalFlapQty}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Valve Code\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"VALVE_CODE\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.VALVE_CODE || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Valve Batch\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"VALVE_DESC\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.VALVE_DESC || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Valve Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"totalValueQty\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totalValueQty}}\n        </ng-template>\n      </ngx-datatable-column>\n    </ngx-datatable>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/planner/loadslip-planner-view/loadslip-planner-view.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/planner/loadslip-planner-view/loadslip-planner-view.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loadslip-fields {\n  box-shadow: none; }\n  .loadslip-fields .form-group {\n    margin-bottom: 0em; }\n  .loadslip-fields .form-group .mat-form-field-wrapper {\n      padding-bottom: 0em !important; }\n  .loadslip-fields .form-group .mat-form-field-wrapper .mat-form-field-flex {\n        padding-top: 0em; }\n  .loadslip-fields .form-group .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix {\n          border-top: 0em solid transparent;\n          padding: 0em; }\n  .loadslip-fields .bordered {\n    padding: 5px;\n    border: 1px solid #dee2e6;\n    text-align: center; }\n  .loadslip-fields .bordered div {\n      font-size: 12px; }\n  .loadslip-fields .inputbordered {\n    padding: 1px;\n    border: 1px solid #dee2e6;\n    text-align: center; }\n  .loadslip-fields .inputbordered .mat-form-field {\n      top: 8px;\n      padding: 0px 8px; }\n  .loadslip-fields .flow-btns {\n    padding: 5px 0px 5px 15px;\n    text-align: center;\n    margin-bottom: 5px;\n    margin-top: 2px; }\n  .loadslip-fields .flow-btns button {\n      padding: 0px 7px; }\n  .loadslip-fields .flow-btns button.mat-default {\n      background-color: #aaa;\n      color: #555;\n      height: 34px; }\n  .loadslip-fields .col-md-3 {\n    padding: 0px 15px; }\n  .loadslip-fields .col-md-3 .bordered-box {\n      padding: 5px;\n      border: 1px solid #dee2e6; }\n  .loadslip-fields .col-md-3 .bordered-box .col-md-4 {\n        padding: 0px 10px;\n        text-align: center; }\n  .loadslip-fields .col-md-3 .bordered-box .bordered-box-left-div {\n        border-right: 1px solid #dee2e6; }\n  .loadslip-fields .col-md-5 .bg-theme {\n    padding: 5px;\n    margin-right: 0px;\n    background-color: #775899;\n    color: #ffffff;\n    margin-left: 0px; }\n  .loadslip-fields .col-md-5 .bg-theme .col-wid-20p {\n      flex: 0 0 20%;\n      max-width: 20%;\n      text-align: center; }\n  .greenButton {\n  background-color: #417505 !important;\n  padding: 0px 5px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  color: #ffffff;\n  border: none;\n  border-radius: 4px;\n  min-height: 35px; }\n  .greenButton span {\n    font-size: 8px;\n    color: #ffffff;\n    display: block; }\n  .manulal-plan-header {\n  padding: 5px 0px;\n  margin-bottom: 0px;\n  font-weight: 600; }\n  .manulal-plan-header span {\n    color: #3F2B53;\n    margin-right: 15px; }\n  .source-text {\n  margin-top: 5px; }\n  .ngx-datatable.material {\n  margin-top: 10px; }\n  .margin-bottom-5 {\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhbm5lci9sb2Fkc2xpcC1wbGFubmVyLXZpZXcvQzpcXFVzZXJzXFxBbnVyYWdTYWluaVxcRG93bmxvYWRzXFxhdG9tLXVpX29yaWdpbmFsXzIxMDkyMDIyXFxhdG9tLXVpL3NyY1xcYXBwXFxwbGFubmVyXFxsb2Fkc2xpcC1wbGFubmVyLXZpZXdcXGxvYWRzbGlwLXBsYW5uZXItdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGxhbm5lci9sb2Fkc2xpcC1wbGFubmVyLXZpZXcvQzpcXFVzZXJzXFxBbnVyYWdTYWluaVxcRG93bmxvYWRzXFxhdG9tLXVpX29yaWdpbmFsXzIxMDkyMDIyXFxhdG9tLXVpL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBR1Esa0JBQWtCLEVBQUE7RUFIMUI7TUFLWSw4QkFBOEIsRUFBQTtFQUwxQztRQU9nQixnQkFBZ0IsRUFBQTtFQVBoQztVQVNvQixpQ0FBZ0M7VUFDaEMsWUFBWSxFQUFBO0VBVmhDO0lBZ0JRLFlBQVc7SUFDWCx5QkNBb0I7SURFcEIsa0JBQWtCLEVBQUE7RUFuQjFCO01BcUJZLGVBQWUsRUFBQTtFQXJCM0I7SUF5QlEsWUFBVztJQUNYLHlCQ1RvQjtJRFdwQixrQkFBa0IsRUFBQTtFQTVCMUI7TUE4QlksUUFBUTtNQUNSLGdCQUFnQixFQUFBO0VBL0I1QjtJQW1DUSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7RUF0Q3ZCO01Bd0NZLGdCQUFlLEVBQUE7RUF4QzNCO01BMkNZLHNCQ3pDSTtNRDBDSixXQUFXO01BQ1gsWUFBWSxFQUFBO0VBN0N4QjtJQWlEUSxpQkFBaUIsRUFBQTtFQWpEekI7TUFtRFksWUFBVztNQUNYLHlCQ25DZ0IsRUFBQTtFRGpCNUI7UUF1RGdCLGlCQUFpQjtRQUNqQixrQkFBa0IsRUFBQTtFQXhEbEM7UUEyRGdCLCtCQzFDWSxFQUFBO0VEakI1QjtJQWlFWSxZQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQ2xFZ0I7SURtRWhCLGNDaEVRO0lEa0VSLGdCQUFnQixFQUFBO0VBdEU1QjtNQXdFZ0IsYUFBYTtNQUNiLGNBQWM7TUFDZCxrQkFBa0IsRUFBQTtFQUtsQztFQUNJLG9DQUErQztFQUMvQyxnQkFBZ0I7RUFDaEIsK0dBQW1HO0VBQ25HLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBRWxCLGdCQUFnQixFQUFBO0VBUnBCO0lBVVEsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjLEVBQUE7RUFLdEI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0VBSHBCO0lBS1EsY0N2R2lCO0lEd0dqQixrQkFBa0IsRUFBQTtFQUsxQjtFQUNJLGVBQWUsRUFBQTtFQUVuQjtFQUNJLGdCQUFnQixFQUFBO0VBSXBCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGFubmVyL2xvYWRzbGlwLXBsYW5uZXItdmlldy9sb2Fkc2xpcC1wbGFubmVyLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL21peGlucyc7XG5cbi5sb2Fkc2xpcC1maWVsZHMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgLmZvcm0tZ3JvdXB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBlbTtcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMGVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAubWF0LWZvcm0tZmllbGQtZmxleHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMGVtO1xuICAgICAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDowZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJvcmRlcmVkIHtcbiAgICAgICAgcGFkZGluZzo1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmlucHV0Ym9yZGVyZWR7XG4gICAgICAgIHBhZGRpbmc6MXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxke1xuICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggOHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mbG93LWJ0bnN7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHggNXB4IDE1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIHBhZGRpbmc6MHB4IDdweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ubWF0LWRlZmF1bHR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtZ3JleTtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jb2wtbWQtM3tcbiAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XG4gICAgICAgIC5ib3JkZXJlZC1ib3h7XG4gICAgICAgICAgICBwYWRkaW5nOjVweDtcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIC5jb2wtbWQtNHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm9yZGVyZWQtYm94LWxlZnQtZGl2e1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvbC1tZC01IHtcbiAgICAgICAgLmJnLXRoZW1le1xuICAgICAgICAgICAgcGFkZGluZzo1cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtZWRpdW0tY29sb3ItdGhlbWU7XG4gICAgICAgICAgICBjb2xvcjokdGhlbWUtd2hpdGU7XG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgLmNvbC13aWQtMjBwe1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAyMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmdyZWVuQnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1ncmVlbi1jb2xvciAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLy8gbWluLXdpZHRoOiAxMTBweDsgICBcbiAgICBtaW4taGVpZ2h0OiAzNXB4O1xuICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG5cbi5tYW51bGFsLXBsYW4taGVhZGVye1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgc3BhbntcbiAgICAgICAgY29sb3I6ICRkYXJrLWNvbG9yLXRoZW1lO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxufVxuXG5cbi5zb3VyY2UtdGV4dHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5cbi5tYXJnaW4tYm90dG9tLTV7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4iLCIkdGhlbWUtcHVycGxlLWJhY2tncm91bmQtY29sb3I6I0ZBRjlGRTtcbiRkYXJrLWNvbG9yLXRoZW1lOiMzRjJCNTM7XG4kdGhlbWUtcHVycGxlLWNvbG9yOiM1QTMwOTQ7XG4kbGlnaHQtY29sb3ItdGhlbWU6I2Q0YjZmZjtcbiRtZWRpdW0tY29sb3ItdGhlbWU6ICM3NzU4OTk7XG4kdGhlbWUtZ3JleTojYWFhO1xuJHRoZW1lLWxpZ2h0LWdyZXk6ICNjY2M7XG4kdGhlbWUtd2hpdGU6I2ZmZmZmZjtcbiR0aGVtZS1ibGFjazojMDAwO1xuJHRoZW1lLWJsdWUtY29sb3I6IzIxOTZmMztcbiR0aGVtZS1ncmVlbi1jb2xvcjojNDE3NTA1O1xuJHRoZW1lLWxpZ2h0LWdyZWVuLWNvbG9yOiNCOEU5ODY7XG4kdGhlbWUtbGlnaHQtYnJvd24tY29sb3I6I0VDRTE1NSA7XG4kdGhlbWUtYnJvd24tY29sb3I6IzlCOTMyQjtcbiR0aGVtZS1icm93bi1ib3JkZXI6I0NGQzMyRDtcbiR0aGVtZS1zZWFyY2hib3gtYmFja2dyb3VuZC1jb2xvcjojRjlGNEZGO1xuJHRoZW1lLW9wYWN0aXR5LWJvcmRlcjojYmU5NmY1O1xuJHRoZW1lLXJlZC10ZXh0OiNDNzNEM0Q7XG4kdGhlbWUtcmVkLWJhY2tncm91bmQtY29sb3I6ICNGQ0FFQUU7XG4kdGhlbWVuLXJlZC1ib3JkZXItY29sb3I6I0VENzM3MztcbiR0YWJsZS1ib3JkZXItY29sb3I6ICNkZWUyZTY7XG4kc2Vjb25kYXJ5LXRoZW1lOiAjYzI1NjNmO1xuJHNlY29uZGFyeS1saWdodC10aGVtZTogI2VmY2NjNTsiXX0= */"

/***/ }),

/***/ "./src/app/planner/loadslip-planner-view/loadslip-planner-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/planner/loadslip-planner-view/loadslip-planner-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LoadslipPlannerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadslipPlannerViewComponent", function() { return LoadslipPlannerViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoadslipPlannerViewComponent = /** @class */ (function () {
    function LoadslipPlannerViewComponent(service, router, ActivatedRoute, toastr, dialog, location) {
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
        this.truckType = '';
        this.minDate = new Date();
        this.editing = {};
        this.createLoadSlipSuccess = false;
        this.truckTypes = [];
        this.isLoadslipIdAvaliable = false;
        this.totalOthersCount = 0;
        this.selectedCategories = [];
        setTimeout(function () { _this.isLoading = true; }, 0);
        // this.userSource = localStorage.getItem("sourceID");
        this.loadslipID = this.ActivatedRoute.snapshot.params['loadslipId'];
        // this.viewType = this.ActivatedRoute.snapshot.params['viewType']
        console.log(this.ActivatedRoute.snapshot.params);
        this.roles = src_app_constants__WEBPACK_IMPORTED_MODULE_5__["constants"].roles;
        if (this.loadslipID) {
            // Get If Transpoter is registered for e-load receipt
            // this.getElrFlag();
            this.isLoadslipIdAvaliable = true;
            this.getLoadSlipByIdFromServer(this.loadslipID);
            this.menuName = this.ActivatedRoute.snapshot.queryParams['menuName'];
        }
    }
    LoadslipPlannerViewComponent.prototype.ngOnInit = function () {
        if (this.service.checkRole() == this.roles.gateSecurity || this.service.checkRole() == this.roles.rdc_GAT) {
            localStorage.setItem("userMenu", this.menuName);
        }
        else {
            localStorage.setItem("userMenu", "load-slip");
        }
    };
    LoadslipPlannerViewComponent.prototype.getLoadSlipByIdFromServer = function (loadslipID) {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLoadSlipDetailsByID + "/" + loadslipID).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var responseData = response['data'];
                _this.userSource = responseData.source;
                _this.destination = responseData.destination;
                _this.description = responseData.description;
                _this.city = responseData.city;
                _this.shipmentNumber = responseData.shipmentID;
                _this.loadslipCategory = responseData.loadslipCategory;
                _this.bayArrivedDate = responseData.bayArrivedDate;
                _this.loadingStartDate = responseData.loadingStartDate;
                _this.loadingEndDate = responseData.loadingEndDate;
                _this.confirmedDate = responseData.confirmedDate;
                _this.releasedDate = responseData.releasedDate;
                _this.lsPrintDate = responseData.lsPrintDate;
                _this.sendForBarcodeDate = responseData.sendForBarcodeDate;
                _this.bay = responseData.bay;
                _this.ShipTo = responseData.shipTo;
                _this.truckType = responseData.truckNumber;
                _this.multistopTruckNumber = responseData.truckNumber;
                // this.IS_MULTI_STOP = responseData.multiStop;
                _this.totalTyres = responseData.totalTyres;
                _this.totalTubes = responseData.totalTubes;
                _this.totalFlaps = responseData.totalFlaps;
                _this.totalValves = responseData.totalValves;
                _this.totalPctr = responseData.totPctr;
                _this.totalOthersCount = responseData.otherQty;
                _this.dropSeq = responseData.dropSeq;
                _this.freightAvailableflag = responseData.freightAvailableflag;
                _this.STOSONumber = responseData.sostoNumberVal;
                _this.totalTTEQty = responseData.totalTTE;
                _this.totalQuantity = responseData.totQty;
                // Shipment level values
                _this.totalTTESeletecd = responseData.shipmentTTEUtil;
                _this.totalMaterialWeight = responseData.shipmentWeightUtil;
                _this.totalTruckVolume = responseData.shipmentVolumeUtil;
                _this.selectedCategories = responseData.selectedItemCategories;
                _this.indentCategory = responseData.truckIndentCategory;
                //Loads slip values 
                // this.loadslipTteUtil = responseData.tteUtil;
                // this.loadslipWtUtil = responseData.weightUtil;
                // this.loadslipVolUtil = responseData.volumeUtil;
                _this.totalLoadedQty = responseData.totalLoadedQty;
                _this.itemLevelTotalTTE = responseData.totalTTE;
                _this.itemLevelTotalWeight = responseData.totalWeight;
                _this.itemLevelTotalVolume = responseData.totalVolume;
                _this.truckT = responseData.truckType;
                _this.transporter = responseData.servprov;
                // variants & Actual Truck Type
                _this.variant_ONE = responseData.variant1;
                _this.actualTruckType = responseData.actualTruckType;
                // ELR Flag, LR Number
                _this.elrFlag = responseData.elrFlag;
                _this.lrNum = responseData.elrNumber;
                // Set if LR is to be Generated or Printed
                _this.setLrButton();
                //get the loadslip plans & truckdetails
                _this.isLoading = false;
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
    LoadslipPlannerViewComponent.prototype.getElrFlag = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getElrFlag + "?loadslipId=" + this.loadslipID).subscribe(function (response) {
            if (response['statusCode'] == 200 && response["data"] == 'Y') {
                //|| response["data"] == 'N'
                _this.elrFlag = true;
                _this.lrNum = response['opsId'];
            }
        });
    };
    LoadslipPlannerViewComponent.prototype.setLrButton = function () {
        if (this.lrNum !== null && this.lrNum !== undefined) {
            this.printLr = true;
            this.generateLr = false;
        }
        else {
            this.printLr = false;
            this.generateLr = true;
        }
    };
    // download load receipt
    LoadslipPlannerViewComponent.prototype.downloadLoadReceipt = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.printLoadReceipt + "?loadslipId=" + this.loadslipID).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var responseData = response['data'];
                var lrNo = response['opsId'];
                var linkSource = 'data:application/pdf;base64,' + responseData;
                var element = document.createElement('a');
                element.setAttribute('href', linkSource);
                element.setAttribute('download', lrNo);
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
    LoadslipPlannerViewComponent.prototype.setLoadSlipValue = function (responseData) {
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
                    "QTY": data.loadedQty,
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
                    "scannedQty": data.scannedQty,
                    //value details
                    "VALVE_DESC": data.valveBatch,
                    "VALVE_CODE": data.valveSKU,
                    "VALVE_COMP_QTY": data.valveCompQty,
                    "totalValueQty": data.valveQty,
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
        }
    };
    // Download loadslip after trigger CONFIRM event
    LoadslipPlannerViewComponent.prototype.downloadLoadslip = function () {
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
    LoadslipPlannerViewComponent.prototype.locationBack = function () {
        this.location.back();
    };
    LoadslipPlannerViewComponent.prototype.isDPREPRole = function () {
        if (this.service.checkRole() == this.roles.planner3 || this.service.checkRole() == this.roles.L1MGR || this.service.checkRole() == this.roles.L2MGR) {
            return true;
        }
        else {
            return false;
        }
    };
    // Print Excel
    LoadslipPlannerViewComponent.prototype.export = function () {
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
    LoadslipPlannerViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loadslip-planner-view',
            template: __webpack_require__(/*! ./loadslip-planner-view.component.html */ "./src/app/planner/loadslip-planner-view/loadslip-planner-view.component.html"),
            styles: [__webpack_require__(/*! ./loadslip-planner-view.component.scss */ "./src/app/planner/loadslip-planner-view/loadslip-planner-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], LoadslipPlannerViewComponent);
    return LoadslipPlannerViewComponent;
}());



/***/ }),

/***/ "./src/app/planner/loadslip-planner-view/loadslip-planner-view.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/planner/loadslip-planner-view/loadslip-planner-view.module.ts ***!
  \*******************************************************************************/
/*! exports provided: loadslipPlannerViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadslipPlannerViewModule", function() { return loadslipPlannerViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loadslip_planner_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadslip-planner-view.component */ "./src/app/planner/loadslip-planner-view/loadslip-planner-view.component.ts");
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
    { path: '', component: _loadslip_planner_view_component__WEBPACK_IMPORTED_MODULE_4__["LoadslipPlannerViewComponent"] },
    { path: ':loadslipId', component: _loadslip_planner_view_component__WEBPACK_IMPORTED_MODULE_4__["LoadslipPlannerViewComponent"] },
];
var loadslipPlannerViewModule = /** @class */ (function () {
    function loadslipPlannerViewModule() {
    }
    loadslipPlannerViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                src_app_angular_material__WEBPACK_IMPORTED_MODULE_7__["customMaterialModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_2__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__["CustomDatePipeModule"]
            ],
            declarations: [
                _loadslip_planner_view_component__WEBPACK_IMPORTED_MODULE_4__["LoadslipPlannerViewComponent"]
            ]
        })
    ], loadslipPlannerViewModule);
    return loadslipPlannerViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=planner-loadslip-planner-view-loadslip-planner-view-module.js.map