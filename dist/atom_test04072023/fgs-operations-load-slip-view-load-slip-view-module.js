(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fgs-operations-load-slip-view-load-slip-view-module"],{

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

/***/ "./src/app/fgs-operations/load-slip-view/load-slip-view.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/fgs-operations/load-slip-view/load-slip-view.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    Loadslip > <span>View Load Slip</span>\n    <span class=\"pull-right refresh-span\">\n        <!-- <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export Download\">\n            <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n          </button> -->\n      <button class=\"theme-small-button\" (click)=\"locationBack()\" matTooltip=\"Back\">\n        <i class=\"fa fa-reply\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n  <div class=\"clearfix\"></div>\n  <div class=\"loadslip-fields\">\n    <div class=\"row margin-bottom-5\">\n      <div class=\"col-md-7\">\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n            <div class='bordered'>\n              <div>Source</div>\n              <div>\n                <b>{{userSource || '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pd-0 \">\n            <div class=\"form-group bordered\">\n              <div>Destination</div>\n              <div>\n                <b>{{destination?destination:'--' | uppercase}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n              <div class=\"form-group bordered\">\n                <div>Dest Desc</div>\n                <div [title]=\"description\" [ngClass]=\"{'cursor-pointer':description?.length>9}\" >\n                    <b>{{description ? (description?.length>9) ? (description | slice:0:9)+'..':(description) : '--'}}</b>\n                </div>\n              </div>\n            </div>\n          <div class=\"col-md-2 pr-0 \">\n            <div class=\"form-group bordered\">\n              <div>\n                Truck\n              </div>\n              <!-- <div>\n                <b>{{truckT?truckT:'--' }} \n                  <span *ngIf = \"truckIndentCategory\"> &nbsp; - &nbsp;({{truckIndentCategory}})</span>\n                </b>\n              </div> -->\n              <div [title]=\"fullTruckNumCat\" [ngClass]=\"{'cursor-pointer':fullTruckNumCat?.length>9}\" >\n                <b>{{fullTruckNumCat ? (fullTruckNumCat?.length>9) ? (fullTruckNumCat | slice:0:9)+'..':(fullTruckNumCat) : '--'}}</b>\n            </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group bordered\">\n              <div>Truck Type</div>\n              <div>\n                <b>{{truckType?truckType:'--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group bordered\">\n              <div>Transporter</div>\n              <div>\n                <b>{{transporter?transporter:'--' }}</b>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-5\">\n        <div class=\"row\">\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group bordered\">\n              <div>Indt Cat</div>\n              <div>\n                <b>{{truckIndentCategory?truckIndentCategory:'--' }}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 \">\n            <div class=\"form-group bordered\">\n              <div>\n                Ship To\n              </div>\n              <div>\n                <b>{{ShipTo?ShipTo:'--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 pl-0\">\n            <div class=\"form-group bordered\">\n              <div>Actual Truck Type</div>\n              <div>\n                <b>{{actualTruckType || '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <div class=\"form-group bordered\">\n              <div>Variant 1</div>\n              <div>\n                <b>{{variant_ONE || '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <div class=\"form-group bordered\">\n              <div>Frt Avail</div>\n              <div>\n                <b>{{ freightAvailableflag || '--'}}</b>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row margin-bottom-5\">\n     <div class=\"col-md-7\">\n       <div class=\"row\">\n         <div class=\"col-md-5\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class='bordered'>\n                <div>Shipment No</div>\n                <!-- <div [title]=\"shipmentNumber\" [ngClass]=\"{'cursor-pointer':shipmentNumber?.length>13}\">\n                    <b>{{shipmentNumber ? (((shipmentNumber?.length>13)? (shipmentNumber | slice:0:13)+'..':(shipmentNumber)) | uppercase) : '--'}}</b>\n                  </div> -->\n                  <b>{{shipmentNumber ? (shipmentNumber| uppercase) : '--'}}</b>\n              </div>\n            </div>\n            <div class=\"col-md-6 pd-0\">\n              <div class='bordered'>\n                <div>Load Slip No </div>\n                <div><b>{{loadslipID || '--'}}</b></div>\n              </div>\n            </div>\n          </div>\n         </div>\n          <div class=\"col-md-6\">\n              <div class=\"row text-center\">\n                  <div class=\"col-md-3 pr-0\">\n                      <div class='bordered'>\n                        <div> Wt (Kg)</div>\n                        <div >\n                          <b>{{totalWeight?(totalWeight | number : '1.2-2'):0}}</b>\n                        </div>\n                      </div>\n                    </div>\n                <div class=\"col-md-3 pr-0\">\n                      <div class='bordered'>\n                        <div> TTE Util</div>\n                        <div [ngClass]=\"(totalTTESelected > 100)?'text-danger':'color-green'\">\n                          <b>{{totalTTESelected?(totalTTESelected | number : '1.2-2'):0 }}%</b>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-3 pr-0\">\n                      <div class='bordered'>\n                        <div> Wt Util</div>\n                        <div [ngClass]=\"(totalMaterialWeight > 100)?'text-danger':'color-green'\">\n                          <b>{{totalMaterialWeight?(totalMaterialWeight | number : '1.2-2'):0}}%</b>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 \">\n                      <div class='bordered'>\n                        <div> Vol Util</div>\n                        <div [ngClass]=\"(totalTruckVolume > 100)?'text-danger':'color-green'\">\n                          <b>{{totalTruckVolume?(totalTruckVolume | number : '1.2-2'):0}}%</b>\n                        </div>\n                      </div>\n                    </div>\n              </div>\n          </div>\n            <div class=\"col-md-1 pd-0\">\n              <div class='bordered'>\n                <div>Tyres</div>\n                <div>\n                  <b>\n                    {{totalTyres?totalTyres:0}}\n                  </b>\n                </div>\n              </div>\n            </div>\n       </div>\n      \n     </div>\n      <div class=\"col-md-5\">\n        <div class=\"row\">\n            <div class=\"col-md-2 pr-0\">\n                <div class='bordered'>\n                  <div>Tubes</div>\n                  <div>\n                    <b>\n                      {{totalTubes?totalTubes:0}}\n                    </b>\n                  </div>\n                </div>\n              </div>\n            <div class=\"col-md-2 pr-0\">\n                <div class='bordered'>\n                  <div>Flaps</div>\n                  <div>\n                    <b>\n                      {{totalFlaps?totalFlaps:0}}\n                    </b>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-2 pr-0\">\n                <div class='bordered'>\n                  <div> Valves</div>\n                  <div>\n                    <b>\n                      {{totalValves?totalValves:0}}\n                    </b>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-2 pr-0\">\n                <div class='bordered'>\n                  <div>Pctr</div>\n                  <div><b>{{totalPctr?totalPctr:0}}</b> </div>\n                </div>\n              </div>\n              <div class=\"col-md-2 pr-0\">\n                <div class='bordered'>\n                  <div>Tot Qty</div>\n                  <div><b>{{totalQty?totalQty:0}}</b></div>\n                </div>\n              </div>\n              <div class=\"col-md-2\">\n                <div class=\"bordered\">\n                  <div>DSeq</div>\n                  <div>\n                    <b>{{dropSeq?dropSeq:'--'}}</b>\n                  </div>\n                </div>\n              </div>\n\n        </div>\n\n      </div>\n    </div>\n    <div class=\"row margin-bottom-5\">\n      <div class=\"col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-md-2 pr-0\">\n            <div class='bordered'>\n              <div>Other Qty</div>\n              <div>\n                <b>{{otherQty?otherQty:0}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"bordered\">\n              <div>Category</div>\n              <div>\n                <b>{{loadslipCategory || '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"bordered\">\n              <div>\n                Arrived Bay\n              </div>\n              <!-- <div>\n                <b> {{bayArrivedDate ? (bayArrivedDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm') : '--'}} </b>\n              </div> -->\n              <div [title]=\"bayArrivedDate\" [ngClass]=\"{'cursor-pointer':bayArrivedDate?.length>9}\" >\n                <b>{{bayArrivedDate ? (bayArrivedDate?.length>9) ? (bayArrivedDate | slice:0:9)+'..':(bayArrivedDate) : '--'}}</b>\n            </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"bordered\">\n              <div>\n                Print LS\n              </div>\n             <!--  <div>\n                <b> {{lsPrintDate ? (lsPrintDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm') : '--'}} </b>\n              </div> -->\n              <div [title]=\"lsPrintDate\" [ngClass]=\"{'cursor-pointer':lsPrintDate?.length>9}\" >\n                <b>{{lsPrintDate ? (lsPrintDate?.length>9) ? (lsPrintDate | slice:0:9)+'..':(lsPrintDate) : '--'}}</b>\n            </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"bordered\">\n              <div>\n                Send Barcode\n              </div>\n              <!-- <div>\n                <b> {{sendForBarcodeDate ? (sendForBarcodeDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm') : '--'}}\n                </b>\n              </div> -->\n              <div [title]=\"sendForBarcodeDate\" [ngClass]=\"{'cursor-pointer':sendForBarcodeDate?.length>9}\" >\n                <b>{{sendForBarcodeDate ? (sendForBarcodeDate?.length>9) ? (sendForBarcodeDate | slice:0:9)+'..':(sendForBarcodeDate) : '--'}}</b>\n            </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"bordered\">\n              <div>\n                Loading Start\n              </div>\n              <!-- <div>\n                <b> {{loadingStartDate ? (loadingStartDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm') : '--'}} </b>\n              </div> -->\n              <div [title]=\"loadingStartDate\" [ngClass]=\"{'cursor-pointer':loadingStartDate?.length>9}\" >\n                <b>{{loadingStartDate ? (loadingStartDate?.length>9) ? (loadingStartDate | slice:0:9)+'..':(loadingStartDate) : '--'}}</b>\n            </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"row\">\n          \n          <div class=\"col-md-2 pr-0\">\n            <div class=\"bordered\">\n              <div>\n                Loading End\n              </div>\n              <!-- <div>\n                <b> {{loadingEndDate ? (loadingEndDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm') : '--'}} </b>\n              </div> -->\n              <div [title]=\"loadingEndDate\" [ngClass]=\"{'cursor-pointer':loadingEndDate?.length>9}\" >\n                <b>{{loadingEndDate ? (loadingEndDate?.length>9) ? (loadingEndDate | slice:0:9)+'..':(loadingEndDate) : '--'}}</b>\n            </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"bordered\">\n              <div>\n                Conf Time\n              </div>\n              <!-- <div>\n                <b> {{confirmedDate ? (confirmedDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm') : '--'}} </b>\n              </div> -->\n              <div [title]=\"confirmedDate\" [ngClass]=\"{'cursor-pointer':confirmedDate?.length>9}\" >\n                <b>{{confirmedDate ? (confirmedDate?.length>9) ? (confirmedDate | slice:0:9)+'..':(confirmedDate) : '--'}}</b>\n            </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"bordered\">\n              <div>\n                Release Time\n              </div>\n              <!-- <div>\n                <b> {{releasedDate ? (releasedDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm') : '--'}} </b>\n              </div> -->\n              <div [title]=\"releasedDate\" [ngClass]=\"{'cursor-pointer':releasedDate?.length>9}\" >\n                <b>{{releasedDate ? (releasedDate?.length>9) ? (releasedDate | slice:0:9)+'..':(releasedDate) : '--'}}</b>\n            </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"bordered\">\n              <div>\n                STO/SO\n              </div>\n              <!-- <div>\n                <b> {{stoso ? stoso : '--'}} </b>\n              </div> -->\n              <div [title]=\"stoso\" [ngClass]=\"{'cursor-pointer':stoso?.length>9}\" >\n                <b>{{stoso ? (stoso?.length>9) ? (stoso | slice:0:9)+'..':(stoso) : '--'}}</b>\n            </div>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"bordered\">\n              <div>\n                TTE QTY\n              </div>\n              <div>\n                <b> {{tteQty ? (tteQty | number : '1.2-2') : '--'}} </b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <div class='bordered'>\n              <div>City</div>\n              <div [title]=\"city\" [ngClass]=\"{'cursor-pointer':city?.length>8}\">\n                <b>{{city ? (((city?.length>8)? (city | slice:0:8)+'..':(city)) | uppercase) : '--'}}</b>\n              </div>\n            </div>\n          </div>\n\n          \n          \n          \n\n        </div>\n        \n      </div>\n    </div>\n  </div>\n  <ngx-datatable class='material ' #table [columnMode]=\"'force'\" [headerHeight]=\"50\" [rows]=\"invoiceData\"\n    [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [scrollbarH]=\"horizontalScroll()\">\n    <ngx-datatable-column name=\"STO SO Number\" [width]=\"140\" [resizeable]=\"false\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.stoSoNum}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Invoice Number\" [width]=\"140\" [resizeable]=\"false\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.invoieNum}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"GRN Number\" [width]=\"140\" [resizeable]=\"false\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.grnNum}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Item Id\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.itemId}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Item Description\" [width]=\"220\" [resizeable]=\"false\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.itemDesc}} </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Source\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.souceLoc}} </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Destination\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destLoc}} </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Load Slip QTY\" [width]=\"170\" [resizeable]=\"false\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.loadslipQty}} </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Invoice QTY\" [width]=\"170\" [resizeable]=\"false\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.invoiceQty}} </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"GRN QTY\" [width]=\"170\" [resizeable]=\"false\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.grnQty}} </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"DIT QTY\" [width]=\"170\" [resizeable]=\"false\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.ditQty}} </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Short QTY\" [width]=\"170\" [resizeable]=\"false\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.shotQty}} </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n</div>"

/***/ }),

/***/ "./src/app/fgs-operations/load-slip-view/load-slip-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/fgs-operations/load-slip-view/load-slip-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: LoadSlipViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSlipViewComponent", function() { return LoadSlipViewComponent; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoadSlipViewComponent = /** @class */ (function () {
    function LoadSlipViewComponent(service, router, ActivatedRoute, toastr, location) {
        this.service = service;
        this.router = router;
        this.ActivatedRoute = ActivatedRoute;
        this.toastr = toastr;
        this.location = location;
        this.isLoading = false;
        this.invoiceData = new Array();
        this.loadslipID = this.ActivatedRoute.snapshot.params['loadslipId'];
    }
    LoadSlipViewComponent.prototype.ngOnInit = function () {
        if (this.loadslipID) {
            this.getLoadslipDataById(this.loadslipID);
        }
    };
    LoadSlipViewComponent.prototype.horizontalScroll = function () {
        var width = $(window).width();
        if (width < 1280) {
            return true;
        }
        return false;
    };
    LoadSlipViewComponent.prototype.getLoadslipDataById = function (loadSlipId) {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getInvoiceDetailsById + loadSlipId).subscribe(function (response) {
            _this.isLoading = false;
            if (response['statusCode'] == 200) {
                var responseData = response['data'];
                _this.invoiceData = responseData.invoiceDataDtos;
                _this.userSource = responseData.loadslipDraftDto.source;
                _this.destination = responseData.loadslipDraftDto.destination;
                _this.description = responseData.loadslipDraftDto.description;
                _this.truckType = responseData.loadslipDraftDto.truckType;
                _this.truckT = responseData.loadslipDraftDto.truckNumber;
                _this.transporter = responseData.loadslipDraftDto.servprov;
                _this.ShipTo = responseData.loadslipDraftDto.shipTo;
                _this.actualTruckType = responseData.loadslipDraftDto.actualTruckType;
                _this.variant_ONE = responseData.loadslipDraftDto.variant1;
                _this.freightAvailableflag = responseData.loadslipDraftDto.freightAvailableflag;
                _this.shipmentNumber = responseData.loadslipDraftDto.shipmentID;
                _this.loadslipID = responseData.loadslipDraftDto.loadSlipId;
                _this.totalTTESelected = responseData.loadslipDraftDto.tteUtil;
                _this.totalMaterialWeight = responseData.loadslipDraftDto.weightUtil;
                _this.totalTruckVolume = responseData.loadslipDraftDto.volumeUtil;
                _this.totalTyres = responseData.loadslipDraftDto.totalTyres;
                _this.totalTubes = responseData.loadslipDraftDto.totalTubes;
                _this.totalFlaps = responseData.loadslipDraftDto.totalFlaps;
                _this.totalValves = responseData.loadslipDraftDto.totalValves;
                _this.totalPctr = responseData.loadslipDraftDto.totPctr;
                _this.dropSeq = responseData.loadslipDraftDto.dropSeq;
                _this.loadslipCategory = responseData.loadslipDraftDto.loadslipCategory;
                _this.bayArrivedDate = responseData.loadslipDraftDto.bayArrivedDate;
                _this.lsPrintDate = responseData.loadslipDraftDto.lsPrintDate;
                _this.sendForBarcodeDate = responseData.loadslipDraftDto.sendForBarcodeDate;
                _this.loadingStartDate = responseData.loadslipDraftDto.loadingStartDate;
                _this.loadingEndDate = responseData.loadslipDraftDto.loadingEndDate;
                _this.stoso = responseData.loadslipDraftDto.sostoNumberVal;
                _this.tteQty = responseData.loadslipDraftDto.totalTTE;
                _this.totalQty = responseData.loadslipDraftDto.totQty;
                _this.otherQty = responseData.loadslipDraftDto.otherQty;
                _this.releasedDate = responseData.loadslipDraftDto.releasedDate;
                _this.confirmedDate = responseData.loadslipDraftDto.confirmedDate;
                _this.truckIndentCategory = responseData.loadslipDraftDto.truckIndentCategory;
                _this.city = responseData.loadslipDraftDto.city;
                _this.totalWeight = responseData.loadslipDraftDto.totalWeight;
                _this.fullTruckNumCat = _this.truckIndentCategory ? _this.truckT + ' - (' + _this.truckIndentCategory + ')' : _this.truckT;
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
    LoadSlipViewComponent.prototype.locationBack = function () {
        this.location.back();
    };
    // Print Excel
    LoadSlipViewComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service_DownLoadExcel(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.printLoadslip + '?loadslipId=' + this.loadslipID + '&excel=' + true).subscribe(function (response) {
            if (response) {
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
    LoadSlipViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-load-slip-view',
            template: __webpack_require__(/*! ./load-slip-view.component.html */ "./src/app/fgs-operations/load-slip-view/load-slip-view.component.html")
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], LoadSlipViewComponent);
    return LoadSlipViewComponent;
}());



/***/ }),

/***/ "./src/app/fgs-operations/load-slip-view/load-slip-view.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/fgs-operations/load-slip-view/load-slip-view.module.ts ***!
  \************************************************************************/
/*! exports provided: LoadSlipViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSlipViewModule", function() { return LoadSlipViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _load_slip_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./load-slip-view.component */ "./src/app/fgs-operations/load-slip-view/load-slip-view.component.ts");
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _load_slip_view_component__WEBPACK_IMPORTED_MODULE_6__["LoadSlipViewComponent"] },
    { path: ':loadslipId', component: _load_slip_view_component__WEBPACK_IMPORTED_MODULE_6__["LoadSlipViewComponent"] },
];
var LoadSlipViewModule = /** @class */ (function () {
    function LoadSlipViewModule() {
    }
    LoadSlipViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_7__["CustomDatePipeModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
            ],
            declarations: [
                _load_slip_view_component__WEBPACK_IMPORTED_MODULE_6__["LoadSlipViewComponent"]
            ],
            providers: [],
        })
    ], LoadSlipViewModule);
    return LoadSlipViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=fgs-operations-load-slip-view-load-slip-view-module.js.map