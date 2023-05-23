(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planner-plan-with-errors-plan-with-error-module"],{

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

/***/ "./src/app/planner/plan-with-errors/plan-with-error.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/planner/plan-with-errors/plan-with-error.module.ts ***!
  \********************************************************************/
/*! exports provided: planwithErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planwithErrorModule", function() { return planwithErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _plan_with_errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan-with-errors.component */ "./src/app/planner/plan-with-errors/plan-with-errors.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _public_conformation_popup_conformation_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/conformation-popup/conformation-popup.component */ "./src/app/public/conformation-popup/conformation-popup.component.ts");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _public_file_upload_errors_dialog_file_upload_errors_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/file-upload-errors-dialog/file-upload-errors-dialog.component */ "./src/app/public/file-upload-errors-dialog/file-upload-errors-dialog.component.ts");
/* harmony import */ var _public_plan_with_muliple_error_popup_plan_with_muliple_error_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/plan-with-muliple-error-popup/plan-with-muliple-error-popup.component */ "./src/app/public/plan-with-muliple-error-popup/plan-with-muliple-error-popup.component.ts");
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: _plan_with_errors_component__WEBPACK_IMPORTED_MODULE_3__["PlanWithErrorsComponent"] },
    { path: ':planData', component: _plan_with_errors_component__WEBPACK_IMPORTED_MODULE_3__["PlanWithErrorsComponent"] },
    { path: ':planId', component: _plan_with_errors_component__WEBPACK_IMPORTED_MODULE_3__["PlanWithErrorsComponent"] },
];
var planwithErrorModule = /** @class */ (function () {
    function planwithErrorModule() {
    }
    planwithErrorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["customMaterialModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_11__["CustomDatePipeModule"]
            ],
            entryComponents: [
                _plan_with_errors_component__WEBPACK_IMPORTED_MODULE_3__["PlanWithErrorsComponent"],
                _public_conformation_popup_conformation_popup_component__WEBPACK_IMPORTED_MODULE_5__["ConformationPopupComponent"],
                _public_file_upload_errors_dialog_file_upload_errors_dialog_component__WEBPACK_IMPORTED_MODULE_9__["FileUploadErrorsDialogComponent"],
                _public_plan_with_muliple_error_popup_plan_with_muliple_error_popup_component__WEBPACK_IMPORTED_MODULE_10__["PlanWithMulipleErrorPopupComponent"]
            ],
            declarations: [
                _plan_with_errors_component__WEBPACK_IMPORTED_MODULE_3__["PlanWithErrorsComponent"],
                _public_conformation_popup_conformation_popup_component__WEBPACK_IMPORTED_MODULE_5__["ConformationPopupComponent"],
                _public_file_upload_errors_dialog_file_upload_errors_dialog_component__WEBPACK_IMPORTED_MODULE_9__["FileUploadErrorsDialogComponent"],
                _public_plan_with_muliple_error_popup_plan_with_muliple_error_popup_component__WEBPACK_IMPORTED_MODULE_10__["PlanWithMulipleErrorPopupComponent"]
            ],
            providers: [],
        })
    ], planwithErrorModule);
    return planwithErrorModule;
}());



/***/ }),

/***/ "./src/app/planner/plan-with-errors/plan-with-errors.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/planner/plan-with-errors/plan-with-errors.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid plan-with-errors\">\n  <h4 class=\"plan-text\">\n    Plan Id : {{plan?.planId}}\n  </h4>\n  <!-- Plan Stactitics section on Particular Id-->\n  <div class=\"row\">\n    <!-- Left card -->\n    <div class=\"col-md-4 left-card\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <h4 class=\"no-error\">{{plan?.totalRecords}}</h4>\n          <p>Total Records</p>\n        </div>\n        <div class=\"col-md-4\">\n          <h4 class=\"no-error\">{{plan?.totalTyreCount}}</h4>\n          <p>Total Tyre Count</p>\n        </div>\n\n        <div class=\"col-md-4 no-padding\">\n          <h4 class=\"text-danger\">{{plan?.totalErrorRecords}}</h4>\n          <p>Total Records Errored</p>\n        </div>\n      </div>\n    </div>\n\n    <!-- right card -->\n    <div class=\"col-md-8 right-card\">\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n          <h4 [ngClass]=\"(plan?.c6Count > 0 )?'text-danger':'theme-color'\">{{plan?.c6Count}}</h4>\n          <p>Duplicate Records</p>\n        </div>\n        <div class=\"col-md-2\">\n          <h4 [ngClass]=\"(plan?.c2Count > 0 )?'text-danger':'theme-color'\">{{plan?.c2Count}}</h4>\n          <p>No SKU in master</p>\n        </div>\n        <div class=\"col-md-2\">\n          <h4 [ngClass]=\"(plan?.c5Count > 0 )?'text-danger':'theme-color'\">{{plan?.c5Count}}</h4>\n          <p>Wrong batch code</p>\n        </div>\n        <div class=\"col-md-2\">\n          <h4 [ngClass]=\"(plan?.c3Count > 0 )?'text-danger':'theme-color'\">{{plan?.c3Count}}</h4>\n          <p>TTE Not Available</p>\n        </div>\n        <div class=\"col-md-2\">\n          <h4 [ngClass]=\"(plan?.c1Count > 0 )?'text-danger':'theme-color'\">{{plan?.c1Count}}</h4>\n          <p>Location Codes</p>\n        </div>\n        <div class=\"col-md-2\">\n          <h4 [ngClass]=\"(plan?.c4Count > 0 )?'text-danger':'theme-color'\">{{plan?.c4Count}}</h4>\n          <p>Item Category</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Plan with error plans-->\n  <div class=\"tabs-section\" *ngIf=\"(plan?.status=='PLAN_PENDING') && (plan?.totalErrorRecords != 0)\">\n    <mat-tab-group (selectedTabChange)=\"tabsChange($event)\">\n      <mat-tab label=\"Duplicate Records\">\n        <div class=\"datatable\">\n          <ngx-datatable class='material' [rows]='duplicateRecords' [scrollbarH]=\"true\" [columnMode]=\"'force'\"\n            [headerHeight]=\"50\" [limit]=\"200\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\">\n            <ngx-datatable-column name=\"Dispatch Date\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"dispatchDate\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.dispatchDate}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Source\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"sourceLocation\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.sourceLocation}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Destination\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"destinationLocation\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.destinationLocation}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Material Code\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"materialCode\"\n              [width]=\"250\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.materialCode}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Material Description\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"materialDescription\"\n              [width]=\"350\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.materialDescription}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Category\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"category\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.category}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"TTE\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"tte\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.tte}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Batch Code\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"batchCode\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.batchCode}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Quantity\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"quantity\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.quantity}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Priority\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"priority\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.priority}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"MKT Segment\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"marketSegment\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.marketSegment}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Action\" [resizeable]=\"false\" [sortable]=\"false\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n                <button class=\"theme-small-button\" (click)=\"allowDuplicate(row,plan.codesInfo.DUPLICATE_RECORD_CODE,rowIndex)\">\n                  <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n                </button>\n                <button class=\"theme-delete-button\" (click)=\"errorPlandDelete(row,plan.codesInfo.DUPLICATE_RECORD_CODE,rowIndex,status)\">\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                </button>\n              </ng-template>\n            </ngx-datatable-column>\n          </ngx-datatable>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"No SKU in Master\">\n        <ngx-datatable class='material' [rows]='materialCodeRecords' [scrollbarH]=\"true\" [columnMode]=\"'force'\"\n          [headerHeight]=\"50\" [limit]=\"200\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\">\n          <ngx-datatable-column name=\"Dispatch Date\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"dispatchDate\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.dispatchDate | customDateFormat | date:'dd-MMM-yyyy'}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Source\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"sourceLocation\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.sourceLocation}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Destination\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"destinationLocation\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.destinationLocation}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Material Code\" [width]=\"250\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"materialCode\">\n            <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"NoSKUediting[rowIndex + '-materialCode'] = true\"\n                *ngIf=\"!NoSKUediting[rowIndex + '-materialCode']\">\n                {{row.materialCode}}\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <!-- <mat-form-field class=\"example-full-width\" *ngIf=\"NoSKUediting[rowIndex+ '-materialCode']\">\n                <input matInput (blur)=\"updateNoSKU($event, 'materialCode', rowIndex)\" [value]=\"value\" autofocus>\n              </mat-form-field> -->\n              <mat-form-field class=\"example-full-width\" *ngIf=\"NoSKUediting[rowIndex+ '-materialCode']\">\n                <input matInput [matAutocomplete]=\"materialCodeAutocomplete\" (keyup)=\"filterMaterialCodeDatatables($event,rowIndex)\"\n                  (blur)=\"updateNoSKU($event, 'materialCode', rowIndex)\" [value]=\"row.materialCode\" oninput=\"this.value = this.value.toUpperCase()\" autofocus>\n                <mat-autocomplete #materialCodeAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of materilcodelist\" [value]=\"list.value\" (click)=\"setMaterialDesDatatable(list.description,rowIndex)\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Material Description\" [width]=\"350\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"materialDescription\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n              {{row.materialDescription}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Category\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"category\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.category}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"TTE\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"tte\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.tte}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Batch Code\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"batchCode\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.batchCode}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Quantity\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"quantity\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.quantity}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Priority\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"priority\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.priority}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"MKT Segment\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"marketSegment\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.marketSegment}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Action\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template -let-row=\"row\" let-rowIndex=\"rowIndex\">\n              <button class=\"theme-small-button\" (click)=\"updateNoSKUMaster(row,plan.codesInfo.MATERIAL_CODE,rowIndex)\">\n                <i class=\"fa fa-floppy-o fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n              <button class=\"theme-small-button\" (click)='errorPlandDelete(row,plan.codesInfo.MATERIAL_CODE,rowIndex,status)'>\n\n                <i class=\"fa fa-trash-o fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n      </mat-tab>\n      <mat-tab label=\"Wrong Batch Code\">\n        <ngx-datatable class='material' [rows]='batchCodeRecords' [scrollbarH]=\"true\" [columnMode]=\"'force'\"\n          [headerHeight]=\"50\" [limit]=\"200\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\">\n          <ngx-datatable-column name=\"Dispatch Date\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"dispatchDate\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.dispatchDate}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Source\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"sourceLocation\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.sourceLocation}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Destination\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"destinationLocation\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.destinationLocation}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Material Code\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"materialCode\"\n            [width]=\"250\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.materialCode}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Material Description\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"materialDescription\"\n            [width]=\"350\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.materialDescription}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Category\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"category\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.category}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"TTE\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"tte\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.tte}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Batch Code\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"batchCode\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n              <div class=\"edit-field\" (click)=\"batchCodeEditing[rowIndex + '-batchCode'] = true\" *ngIf=\"!batchCodeEditing[rowIndex + '-batchCode']\">\n                {{row.batchCode}}\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <mat-form-field class=\"example-full-width\" *ngIf=\"batchCodeEditing[rowIndex+ '-batchCode']\">\n                <input matInput [matAutocomplete]=\"statesAutocomplete\" (blur)=\"batchCodeEditvalues($event, 'batchCode', rowIndex)\"\n                  [value]=\"row.batchCode\" oninput=\"this.value = this.value.toUpperCase()\" autofocus (keyup)=\"datatablesBatchcode($event)\">\n                <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of datatablesBatchcodeList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Quantity\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"quantity\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.quantity}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Priority\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"priority\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.priority}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"MKT Segment\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"marketSegment\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.marketSegment}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Action\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n              <button class=\"theme-small-button\" (click)=\"updateBatchCode(row,plan.codesInfo.BATCH_CODE,rowIndex)\">\n                <i class=\"fa fa-floppy-o fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n              <button class=\"theme-delete-button\" (click)='errorPlandDelete(row,plan.codesInfo.BATCH_CODE,rowIndex,status)'>\n                <!-- <button class=\"theme-delete-button\" (click)=\"openDialog(row,plan.codesInfo.DUPLICATE_RECORD_CODE,rowIndex)\"> -->\n\n                <i class=\"fa fa-trash-o fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n      </mat-tab>\n      <mat-tab label=\"TTE Not Available\">\n        <ngx-datatable class='material' [rows]='itemTtecodeRecords' [scrollbarH]=\"true\" [columnMode]=\"'force'\"\n          [headerHeight]=\"50\" [limit]=\"200\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\">\n          <ngx-datatable-column name=\"Dispatch Date\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"dispatchDate\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.dispatchDate}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Source\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"sourceLocation\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.sourceLocation}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Destination\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"destinationLocation\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.destinationLocation}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Material Code\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"materialCode\"\n            [width]=\"250\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.materialCode}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Material Description\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"materialDescription\"\n            [width]=\"350\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.materialDescription}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Category\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"category\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.category}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"TTE\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"tte\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.tte}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Batch Code\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"batchCode\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.batchCode}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Quantity\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"quantity\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.quantity}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Priority\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"priority\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.priority}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"MKT Segment\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"marketSegment\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.marketSegment}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Action\" [resizeable]=\"false\" [sortable]=\"false\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n              <button class=\"theme-small-button\" (click)=\"updateTTENotavailable(row,plan.codesInfo.ITEM_TTE_CODE,rowIndex)\">\n                <i class=\"fa fa-floppy-o fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n              <button class=\"theme-delete-button\" (click)='errorPlandDelete(row,plan.codesInfo.ITEM_TTE_CODE,rowIndex,status)'>\n                <i class=\"fa fa-trash-o fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n      </mat-tab>\n      <mat-tab label=\"Location Codes\">\n        <ngx-datatable class='material' [rows]='locationRecords' [scrollbarH]=\"true\" [columnMode]=\"'force'\"\n          [headerHeight]=\"50\" [limit]=\"200\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\">\n          <ngx-datatable-column name=\"Dispatch Date\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"dispatchDate\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.dispatchDate}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Source\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n              <div class=\"edit-field\" (click)=\"locationRecordsEditing[rowIndex + '-sourceLocation'] = true\" *ngIf=\"!locationRecordsEditing[rowIndex + '-sourceLocation']\">\n                {{row.sourceLocation}}\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <mat-form-field class=\"example-full-width\" *ngIf=\"locationRecordsEditing[rowIndex+ '-sourceLocation']\">\n                <input matInput [matAutocomplete]=\"statesAutocomplete\" (blur)=\"updateValue($event, 'sourceLocation', rowIndex)\"\n                  [value]=\"row.sourceLocation\" autofocus (keyup)=\"datatableSoureceLocation($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of datatablesSourceList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </ng-template>\n          </ngx-datatable-column>\n\n\n          <ngx-datatable-column name=\"Destination\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"destinationLocation\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n              <div class=\"edit-field\" (click)=\"locationRecordsEditing[rowIndex + '-destinationLocation'] = true\"\n                *ngIf=\"!locationRecordsEditing[rowIndex + '-destinationLocation']\">\n                {{row.destinationLocation}}\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <mat-form-field class=\"example-full-width\" *ngIf=\"locationRecordsEditing[rowIndex+ '-destinationLocation']\">\n                <input matInput [matAutocomplete]=\"statesAutocomplete\" (blur)=\"updateValue($event, 'destinationLocation', rowIndex)\"\n                  [value]=\"row.destinationLocation\" autofocus (keyup)=\"datatableDestinationLocation($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of datatablesDestinationList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Material Code\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"materialCode\"\n            [width]=\"250\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.materialCode}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Material Description\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"materialDescription\"\n            [width]=\"350\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.materialDescription}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Category\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"category\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.category}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"TTE\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"tte\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.tte}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Batch Code\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"batchCode\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.batchCode}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Quantity\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"quantity\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.quantity}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Priority\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"priority\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.priority}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"MKT Segment\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"marketSegment\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.marketSegment}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Action\" [resizeable]=\"false\" [sortable]=\"false\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n              <button class=\"theme-small-button\" (click)=\"locationRecordsUpdate(row,plan.codesInfo.LOCATION_CODE,rowIndex)\">\n                <i class=\"fa fa-floppy-o fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n              <button class=\"theme-delete-button\" (click)='errorPlandDelete(row,plan.codesInfo.LOCATION_CODE,rowIndex,status)'>\n                <i class=\"fa fa-trash-o fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n      </mat-tab>\n      <mat-tab label=\"Item Category\">\n        <ngx-datatable class='material' [rows]='itemCategoryCodeRecords' [scrollbarH]=\"true\" [columnMode]=\"'force'\"\n          [headerHeight]=\"50\" [limit]=\"200\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\">\n          <ngx-datatable-column name=\"Dispatch Date\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"dispatchDate\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.dispatchDate}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Source\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"sourceLocation\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.sourceLocation}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Destination\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"destinationLocation\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.destinationLocation}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Material Code\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"materialCode\"\n            [width]=\"250\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.materialCode}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Material Description\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"materialDescription\"\n            [width]=\"350\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.materialDescription}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Category\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"category\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.category}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"TTE\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"tte\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.tte}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Batch Code\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"batchCode\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.batchCode}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Quantity\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"quantity\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.quantity}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Priority\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"priority\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.priority}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"MKT Segment\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"marketSegment\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.marketSegment}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Action\" [resizeable]=\"false\" [sortable]=\"false\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n              <button class=\"theme-small-button\" (click)=\"updateItemCategory(row,plan.codesInfo.ITEM_CATEGORY_CODE,rowIndex)\">\n                <i class=\"fa fa-floppy-o fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n              <button class=\"theme-delete-button\" (click)='errorPlandDelete(row,plan.codesInfo.ITEM_CATEGORY_CODE,rowIndex,status)'>\n                <i class=\"fa fa-trash-o fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n  <div class=\"text-center\" *ngIf=\"(plan?.totalErrorRecords == 0) && (plan?.status=='PLAN_PENDING')\">\n    <button mat-raised-button color=\"primary\" class=\"margin-top-50\" (click)=\"createManualPlan()\">Create Plan</button>\n  </div>\n  <div *ngIf=\"(plan?.totalErrorRecords == 0) && (plan?.status=='PLAN_SUCCESS')\" class=\"planwith-success\">\n    <h4 class=\"text-center\">\"Plan is created successfully! :\n      <!-- FGS PLANNER -->\n      <a [routerLink]=\"['/dispatch-plan/approve-plans',planId]\" *ngIf=\"(service.checkRole() == userRoles.planner1) || (service.checkRole() == userRoles.planner2) \n      || (service.checkRole() == userRoles.planner3) || (service.checkRole() == userRoles.L1MGR) || (service.checkRole() == userRoles.L2MGR) \">\n        <span>{{planId}}</span>\n      </a>\n      <!-- FGS OPERATION -->\n      <a [routerLink]=\"['/fgs/approve-plans',planId]\" *ngIf=\"(service.checkRole() == userRoles.fgsOperations1) || (service.checkRole() == userRoles.fgsOperations2) || \n      (service.checkRole() == userRoles.fgsOperations3) || (service.checkRole() == userRoles.fgsOperations4)\">\n        <span>{{planId}}</span>\n      </a>\n      <!-- RDC PLAN / OPERATION -->\n      <a [routerLink]=\"['/rdc/approve-plans',planId]\" *ngIf=\"(service.checkRole() == userRoles.rdc_PLN)\">\n        <span>{{planId}}</span>\n      </a>\n    </h4>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/planner/plan-with-errors/plan-with-errors.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/planner/plan-with-errors/plan-with-errors.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-top-50 {\n  margin-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhbm5lci9wbGFuLXdpdGgtZXJyb3JzL0M6XFxVc2Vyc1xcQW51cmFnU2FpbmlcXERvd25sb2Fkc1xcYXRvbS11aV9vcmlnaW5hbF8yMTA5MjAyMlxcYXRvbS11aS9zcmNcXGFwcFxccGxhbm5lclxccGxhbi13aXRoLWVycm9yc1xccGxhbi13aXRoLWVycm9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxhbm5lci9wbGFuLXdpdGgtZXJyb3JzL3BsYW4td2l0aC1lcnJvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLXRvcC01MHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/planner/plan-with-errors/plan-with-errors.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/planner/plan-with-errors/plan-with-errors.component.ts ***!
  \************************************************************************/
/*! exports provided: PlanWithErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanWithErrorsComponent", function() { return PlanWithErrorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _public_conformation_popup_conformation_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/conformation-popup/conformation-popup.component */ "./src/app/public/conformation-popup/conformation-popup.component.ts");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _public_file_upload_errors_dialog_file_upload_errors_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/file-upload-errors-dialog/file-upload-errors-dialog.component */ "./src/app/public/file-upload-errors-dialog/file-upload-errors-dialog.component.ts");
/* harmony import */ var _public_plan_with_muliple_error_popup_plan_with_muliple_error_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/plan-with-muliple-error-popup/plan-with-muliple-error-popup.component */ "./src/app/public/plan-with-muliple-error-popup/plan-with-muliple-error-popup.component.ts");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PlanWithErrorsComponent = /** @class */ (function () {
    function PlanWithErrorsComponent(dialog, service, toastr, route, activatedRoute) {
        var _this = this;
        this.dialog = dialog;
        this.service = service;
        this.toastr = toastr;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.status = false;
        this.editing = {};
        this.batchCodeList = [];
        this.ELEMENT_DATA = [];
        this.errorCode = '';
        this.duplicateRecords = [];
        this.locationRecords = [];
        this.materialCodeRecords = [];
        this.itemTtecodeRecords = [];
        this.itemCategoryCodeRecords = [];
        this.batchCodeRecords = [];
        this.planwithError = false;
        this.isLoading = false;
        this.NoSKUediting = {};
        this.batchCodeEditing = {};
        this.locationRecordsEditing = {};
        this.isLoading = true;
        if (this.activatedRoute.snapshot.params['planData']) {
            this.planId = this.activatedRoute.snapshot.params['planData'];
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.planData + "?planId=" + this.planId).subscribe(function (repsonse) {
                if (repsonse['statusCode'] == 200) {
                    _this.plan = repsonse['data'];
                    _this.getRecords(_this.plan.codesInfo.DUPLICATE_RECORD_CODE);
                    _this.getRecords(_this.plan.codesInfo.BATCH_CODE);
                    _this.getRecords(_this.plan.codesInfo.ITEM_CATEGORY_CODE);
                    _this.getRecords(_this.plan.codesInfo.ITEM_TTE_CODE);
                    _this.getRecords(_this.plan.codesInfo.MATERIAL_CODE);
                    _this.getRecords(_this.plan.codesInfo.LOCATION_CODE);
                    _this.planwithError = false;
                    if (_this.plan.c1Count == 0 && _this.plan.c2Count == 0
                        && _this.plan.c3Count == 0 && _this.plan.c4Count == 0
                        && _this.plan.c5Count == 0 && _this.plan.c6Count == 0) {
                        _this.isLoading = false;
                    }
                }
                else {
                    _this.planwithError = true;
                    _this.isLoading = false;
                }
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
        console.log("constructor");
    }
    PlanWithErrorsComponent.prototype.ngOnInit = function () {
        console.log("ng onInit");
        console.log("asa", this.ELEMENT_DATA);
        this.userRoles = src_app_constants__WEBPACK_IMPORTED_MODULE_8__["constants"].roles;
    };
    // material code filter api for datatables
    PlanWithErrorsComponent.prototype.filterMaterialCodeDatatables = function (event, rowIndex) {
        var _this = this;
        var indexdata = rowIndex;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.materialCodeRecords[indexdata]['materialDescription'] = '';
            this.materilcodelist = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.searchFilter + '?materialCode=' + filtervalue).subscribe(function (response) {
                console.log("respio", response);
                _this.materilcodelist = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // set values for materila description for datatable
    PlanWithErrorsComponent.prototype.setMaterialDesDatatable = function (value, rowIndex) {
        console.log("value of material description", value);
        this.materialCodeRecords[rowIndex]['materialDescription'] = value;
    };
    // filter batch code in datatable
    PlanWithErrorsComponent.prototype.datatablesBatchcode = function (event) {
        var _this = this;
        console.log(event.target.value);
        var destinationKey = event.target.value;
        if (event.target.value.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.datatablesBatchcodeList = [];
            var index = 0;
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.searchFilter + '?batchCode=' + destinationKey + "&index=" + index).subscribe(function (response) {
                console.log("respio", response);
                _this.datatablesBatchcodeList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //filter source list
    PlanWithErrorsComponent.prototype.datatableSoureceLocation = function (event) {
        var _this = this;
        console.log(event.target.value);
        var sourceKey = event.target.value;
        if (event.target.value.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.datatablesSourceList = [];
            var index = 0;
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.searchFilter + '?destination=' + sourceKey + "&index=" + index).subscribe(function (response) {
                console.log("respio", response);
                _this.datatablesSourceList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    PlanWithErrorsComponent.prototype.datatableDestinationLocation = function (event) {
        var _this = this;
        console.log(event.target.value);
        var sourceKey = event.target.value;
        if (event.target.value.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.datatablesDestinationList = [];
            var index = 0;
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.searchFilter + '?destination=' + sourceKey + "&index=" + index).subscribe(function (response) {
                console.log("respio", response);
                _this.datatablesDestinationList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    PlanWithErrorsComponent.prototype.openDialog = function (row, code, indexvalue) {
        var _this = this;
        var dialogRef = this.dialog.open(_public_conformation_popup_conformation_popup_component__WEBPACK_IMPORTED_MODULE_2__["ConformationPopupComponent"], { disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            if (result) {
                _this.errorPlandDelete(row, code, indexvalue, _this.status);
            }
            else {
                console.log("Nothing to Do");
            }
        });
    };
    //show the duplicate error list in the modal
    PlanWithErrorsComponent.prototype.showDuplicateErrorModal = function (data) {
        var dialogRef = this.dialog.open(_public_file_upload_errors_dialog_file_upload_errors_dialog_component__WEBPACK_IMPORTED_MODULE_6__["FileUploadErrorsDialogComponent"], {
            data: { ErrorData: data },
            disableClose: true
        });
    };
    //get Records Data  (C6 count )
    PlanWithErrorsComponent.prototype.getRecords = function (errorCode) {
        var _this = this;
        this.isLoading = true;
        this.planId = this.plan.planId;
        this.errorCode = errorCode;
        var index = 0;
        if (errorCode == 'C6') {
            if (this.plan.c6Count > 0) {
                this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.planErrors + "?planId=" + this.planId + "&errorCode=" + this.errorCode + "&index=" + index).subscribe(function (response) {
                    console.log("duplicateRecords", response);
                    _this.duplicateRecords = response['data'];
                    _this.duplicateRecords = _this.duplicateRecords.slice();
                    _this.isLoading = false;
                }, function (err) {
                    console.log("Error", err);
                    _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                    _this.isLoading = false;
                });
            }
            else {
                this.duplicateRecords.length = 0;
            }
        }
        else if (errorCode == 'C1') {
            if (this.plan.c1Count > 0) {
                this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.planErrors + "?planId=" + this.planId + "&errorCode=" + this.errorCode + "&index=" + index).subscribe(function (response) {
                    console.log("locationRecords", response);
                    _this.locationRecords = response['data'];
                    _this.locationRecords = _this.locationRecords.slice();
                    _this.isLoading = false;
                }, function (err) {
                    console.log("Error", err);
                    _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                    _this.isLoading = false;
                });
            }
            else {
                this.locationRecords.length = 0;
            }
        }
        else if (errorCode == 'C2') {
            if (this.plan.c2Count > 0) {
                this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.planErrors + "?planId=" + this.planId + "&errorCode=" + this.errorCode + "&index=" + index).subscribe(function (response) {
                    console.log("materialCodeRecords", response);
                    _this.materialCodeRecords = response['data'];
                    _this.materialCodeRecords = _this.materialCodeRecords.slice();
                    _this.isLoading = false;
                }, function (err) {
                    console.log("Error", err);
                    _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                    _this.isLoading = false;
                });
            }
            else {
                this.materialCodeRecords.length = 0;
            }
        }
        else if (errorCode == 'C3') {
            if (this.plan.c3Count > 0) {
                this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.planErrors + "?planId=" + this.planId + "&errorCode=" + this.errorCode + "&index=" + index).subscribe(function (response) {
                    console.log("after delte tte response", response);
                    _this.itemTtecodeRecords = response['data'];
                    _this.itemTtecodeRecords = _this.itemTtecodeRecords.slice();
                    _this.isLoading = false;
                }, function (err) {
                    console.log("Error", err);
                    _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                    _this.isLoading = false;
                });
            }
            else {
                this.itemTtecodeRecords.length = 0;
            }
        }
        else if (errorCode == 'C4') {
            if (this.plan.c4Count > 0) {
                this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.planErrors + "?planId=" + this.planId + "&errorCode=" + this.errorCode + "&index=" + index).subscribe(function (response) {
                    console.log("itemCategoryCodeRecords", response);
                    _this.itemCategoryCodeRecords = response['data'];
                    _this.itemCategoryCodeRecords = _this.itemCategoryCodeRecords.slice();
                    _this.isLoading = false;
                }, function (err) {
                    console.log("Error", err);
                    _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                    _this.isLoading = false;
                });
            }
            else {
                this.itemCategoryCodeRecords.length = 0;
            }
        }
        else if (errorCode == 'C5') {
            if (this.plan.c5Count > 0) {
                this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.planErrors + "?planId=" + this.planId + "&errorCode=" + this.errorCode + "&index=" + index).subscribe(function (response) {
                    console.log("batchCodeRecords", response);
                    _this.batchCodeRecords = response['data'];
                    _this.batchCodeRecords = _this.batchCodeRecords.slice();
                    _this.isLoading = false;
                }, function (err) {
                    console.log("Error", err);
                    _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                    _this.isLoading = false;
                });
            }
            else {
                this.batchCodeRecords.length = 0;
            }
        }
    };
    PlanWithErrorsComponent.prototype.updateValue = function (event, cell, rowIndex, row) {
        //this.editing[rowIndex + '-' + cell] = false;
        this.locationRecords[rowIndex][cell] = event.target.value;
    };
    //get filter result of bacth code
    PlanWithErrorsComponent.prototype.getfilterBactchCode = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.searchFilter + "?batchCode=" + filtervalue).subscribe(function (response) {
                console.log(response);
                _this.batchCodeList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //update NO SKU master material code on inline edit the values
    PlanWithErrorsComponent.prototype.updateNoSKU = function (event, cell, rowIndex) {
        //this.editing[rowIndex + '-' + cell] = false;
        this.materialCodeRecords[rowIndex][cell] = event.target.value;
        this.materialCodeRecords = this.materialCodeRecords.slice();
    };
    //bacth code update the fileds values on edit
    PlanWithErrorsComponent.prototype.batchCodeEditvalues = function (event, cell, rowIndex) {
        this.batchCodeRecords[rowIndex][cell] = event.target.value;
        this.batchCodeRecords = this.batchCodeRecords.slice();
    };
    //location records blur event on edit
    PlanWithErrorsComponent.prototype.locationRecordsBlur = function (event, cell, rowIndex) {
        this.locationRecords[rowIndex][cell] = event.target.value;
        this.locationRecords = this.locationRecords.slice();
    };
    //update no SKU online click
    PlanWithErrorsComponent.prototype.updateNoSKUMaster = function (data, errorData, indexvalue) {
        var _this = this;
        this.isLoading = true;
        var values = {
            errorCode: errorData,
            planItemId: data.id,
            materialCode: data.materialCode
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.errorResolve, values).subscribe(function (response) {
            if (response['statusCode'] == '200') {
                var delebleIndex = _this.materialCodeRecords.indexOf(data);
                _this.materialCodeRecords.splice(delebleIndex, 1);
                _this.plan = response['data'];
                _this.checkIdAnotherTab(errorData, data);
                _this.NoSKUediting = {};
                _this.isLoading = false;
                _this.toastr.success("Error Resolved Successfully", 'Success!');
            }
            else {
                var data_1 = response['data'];
                _this.showDuplicateErrorModal(data_1);
                _this.isLoading = false;
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    PlanWithErrorsComponent.prototype.updateBatchCode = function (data, errorData, indexvalue) {
        var _this = this;
        this.isLoading = true;
        var values = {
            errorCode: errorData,
            planItemId: data.id,
            batchCode: data.batchCode
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.errorResolve, values).subscribe(function (response) {
            if (response['statusCode'] == '200') {
                var delebleBatchCodeIndex = _this.batchCodeRecords.indexOf(data);
                _this.batchCodeRecords.splice(delebleBatchCodeIndex, 1);
                _this.batchCodeEditing = {};
                _this.batchCodeRecords = _this.batchCodeRecords.slice();
                _this.plan = response['data'];
                _this.isLoading = false;
                _this.toastr.success("Error Resolved Successfully", 'Success!');
            }
            else {
                var data_2 = response['data'];
                _this.showDuplicateErrorModal(data_2);
                _this.isLoading = false;
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //Check  TTE Not avaliable 
    PlanWithErrorsComponent.prototype.updateTTENotavailable = function (data, errorData, indexvalue) {
        var _this = this;
        this.isLoading = true;
        var values = {
            errorCode: errorData,
            planItemId: data.id,
            materialCode: data.materialCode
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.errorResolve, values).subscribe(function (response) {
            if (response['statusCode'] == '200') {
                var deletebleTTEIndex = _this.itemTtecodeRecords.indexOf(data);
                _this.itemTtecodeRecords.splice(deletebleTTEIndex, 1);
                _this.itemTtecodeRecords = _this.itemTtecodeRecords.slice();
                _this.plan = response['data'];
                _this.isLoading = false;
                _this.toastr.success("Error Resolved Successfully", 'Success!');
            }
            else {
                var data_3 = response['data'];
                _this.showDuplicateErrorModal(data_3);
                _this.isLoading = false;
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //update location codes 
    PlanWithErrorsComponent.prototype.locationRecordsUpdate = function (data, errorData, indexvalue) {
        var _this = this;
        this.isLoading = true;
        var values = {
            errorCode: errorData,
            planItemId: data.id,
            sourceCode: data.sourceLocation,
            destinationCode: data.destinationLocation
        };
        console.log(values);
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.errorResolve, values).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == '200') {
                var deletebleLocationRecordsIndex = _this.locationRecords.indexOf(data);
                _this.locationRecords.splice(deletebleLocationRecordsIndex, 1);
                _this.locationRecordsEditing = {};
                _this.locationRecords = _this.locationRecords.slice();
                _this.plan = response['data'];
                _this.isLoading = false;
                _this.toastr.success("Error Resolved Successfully", 'Success!');
            }
            else {
                var data_4 = response['data'];
                _this.showDuplicateErrorModal(data_4);
                _this.isLoading = false;
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //update Item category 
    PlanWithErrorsComponent.prototype.updateItemCategory = function (data, errorData, indexvalue) {
        var _this = this;
        this.isLoading = true;
        var values = {
            errorCode: errorData,
            planItemId: data.id,
            materialCode: data.materialCode,
        };
        console.log(values);
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.errorResolve, values).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == '200') {
                var deletebleItemCategoryIndex = _this.itemCategoryCodeRecords.indexOf(data);
                _this.itemCategoryCodeRecords.splice(deletebleItemCategoryIndex, 1);
                _this.itemCategoryCodeRecords = _this.itemCategoryCodeRecords.slice();
                _this.plan = response['data'];
                _this.isLoading = false;
                _this.toastr.success("Error Resolved Successfully", 'Success!');
            }
            else {
                var data_5 = response['data'];
                _this.showDuplicateErrorModal(data_5);
                _this.isLoading = false;
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //Comman delete plan method
    PlanWithErrorsComponent.prototype.errorPlandDelete = function (row, errorCode, rowIndex, status) {
        var _this = this;
        var plan_id = row.id;
        //Delte if the error code was ITEM_CATEGORY_CODE (Item category Tab)
        if (errorCode == 'C4') {
            this.isLoading = true;
            this.service.delete_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.errorPlansDelete + "?id=" + plan_id + "&code=" + errorCode + "&status=" + this.status).subscribe(function (response) {
                console.log(response);
                if (response['statusCode'] == 200) {
                    // this.itemCategoryCodeRecords.splice(rowIndex, 1);
                    var errorPlanDeleteIndex = _this.itemCategoryCodeRecords.indexOf(row);
                    _this.itemCategoryCodeRecords.splice(errorPlanDeleteIndex, 1);
                    _this.itemCategoryCodeRecords = _this.itemCategoryCodeRecords.slice();
                    _this.plan = response['data'];
                    _this.checkIdAnotherTab(errorCode, row);
                    _this.isLoading = false;
                    _this.status = false;
                    _this.toastr.success("Plan Record deleted Successfully", 'Success!');
                }
                else if (response['statusCode'] == 405) {
                    _this.multipleErrorPlanModal(response['message'], row, errorCode, rowIndex, status);
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
        //Delete if the error code was BATCH_CODE (Wrong Batch Code   tab)
        else if (errorCode == 'C5') {
            this.isLoading = true;
            this.service.delete_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.errorPlansDelete + "?id=" + plan_id + "&code=" + errorCode + "&status=" + this.status).subscribe(function (response) {
                console.log(response);
                if (response['statusCode'] == 200) {
                    // this.batchCodeRecords.splice(rowIndex, 1);
                    var errorCodeC5Index = _this.batchCodeRecords.indexOf(row);
                    _this.batchCodeRecords.splice(errorCodeC5Index, 1);
                    _this.batchCodeRecords = _this.batchCodeRecords.slice();
                    _this.checkIdAnotherTab(errorCode, row);
                    _this.plan = response['data'];
                    _this.isLoading = false;
                    _this.status = false;
                    _this.toastr.success("Plan Record deleted Successfully", 'Success!');
                }
                else if (response['statusCode'] == 405) {
                    _this.multipleErrorPlanModal(response['message'], row, errorCode, rowIndex, status);
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
        //Delete if the error code was DUPLICATE_RECORD_CODE (Duplicate Records    tab)
        else if (errorCode == 'C6') {
            this.isLoading = true;
            this.service.delete_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.errorPlansDelete + "?id=" + plan_id + "&code=" + errorCode + "&status=" + this.status).subscribe(function (response) {
                console.log(response);
                if (response['statusCode'] == 200) {
                    // this.duplicateRecords.splice(rowIndex, 1);
                    var DuplicateDeleteIndex = _this.duplicateRecords.indexOf(row);
                    _this.duplicateRecords.splice(DuplicateDeleteIndex, 1);
                    _this.duplicateRecords = _this.duplicateRecords.slice();
                    _this.checkIdAnotherTab(errorCode, row);
                    _this.plan = response['data'];
                    _this.isLoading = false;
                    _this.status = false;
                    _this.toastr.success("Plan Record deleted Successfully", 'Success!');
                }
                else if (response['statusCode'] == 405) {
                    _this.multipleErrorPlanModal(response['message'], row, errorCode, rowIndex, status);
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
        //Delete if the error code was LOCATION_CODE (Location codes  tab)
        else if (errorCode == 'C1') {
            this.isLoading = true;
            this.service.delete_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.errorPlansDelete + "?id=" + plan_id + "&code=" + errorCode + "&status=" + this.status).subscribe(function (response) {
                console.log(response);
                if (response['statusCode'] == 200) {
                    // this.locationRecords.splice(rowIndex, 1);
                    var locationRecordsDeleteIndex = _this.locationRecords.indexOf(row);
                    _this.locationRecords.splice(locationRecordsDeleteIndex, 1);
                    _this.locationRecords = _this.locationRecords.slice();
                    _this.checkIdAnotherTab(errorCode, row);
                    _this.plan = response['data'];
                    _this.isLoading = false;
                    _this.status = false;
                    _this.toastr.success("Plan Record deleted Successfully", 'Success!');
                }
                else if (response['statusCode'] == 405) {
                    _this.multipleErrorPlanModal(response['message'], row, errorCode, rowIndex, status);
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
        //Delete if the error code was MATERIAL_CODE (NO SKU Master  tab)
        else if (errorCode == 'C2') {
            this.isLoading = true;
            this.service.delete_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.errorPlansDelete + "?id=" + plan_id + "&code=" + errorCode + "&status=" + this.status).subscribe(function (response) {
                console.log(response);
                if (response['statusCode'] == 200) {
                    // this.materialCodeRecords.splice(rowIndex, 1);
                    var materialCodeDeleteIndex = _this.materialCodeRecords.indexOf(row);
                    _this.materialCodeRecords.splice(materialCodeDeleteIndex, 1);
                    _this.materialCodeRecords = _this.materialCodeRecords.slice();
                    _this.checkIdAnotherTab(errorCode, row);
                    _this.plan = response['data'];
                    _this.isLoading = false;
                    _this.status = false;
                    _this.toastr.success("Plan Record deleted Successfully", 'Success!');
                }
                else if (response['statusCode'] == 405) {
                    _this.multipleErrorPlanModal(response['message'], row, errorCode, rowIndex, status);
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
        //Delete if the error code was TTE (TTE tab)
        else if (errorCode == 'C3') {
            this.isLoading = true;
            this.service.delete_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.errorPlansDelete + "?id=" + plan_id + "&code=" + errorCode + "&status=" + this.status).subscribe(function (response) {
                console.log(response);
                if (response['statusCode'] == 200) {
                    // this.itemTtecodeRecords.splice(rowIndex, 1);
                    var itemTteCodeDelteIndex = _this.itemTtecodeRecords.indexOf(row);
                    _this.itemTtecodeRecords.splice(itemTteCodeDelteIndex, 1);
                    _this.itemCategoryCodeRecords = _this.itemCategoryCodeRecords.slice();
                    _this.checkIdAnotherTab(errorCode, row);
                    _this.plan = response['data'];
                    _this.isLoading = false;
                    _this.status = false;
                    _this.toastr.success("Plan Record deleted Successfully", 'Success!');
                }
                else if (response['statusCode'] == 405) {
                    _this.multipleErrorPlanModal(response['message'], row, errorCode, rowIndex, status);
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
    //create plan after error resolve 
    PlanWithErrorsComponent.prototype.createManualPlan = function () {
        var _this = this;
        this.isLoading = true;
        var planId = this.planId;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.createPlan + "?id=" + planId).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                _this.toastr.success(response['message'], 'Success!');
                _this.plan['status'] = 'PLAN_SUCCESS';
                console.log(" this.plan", _this.plan);
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
    //check database id exit in another Tab
    PlanWithErrorsComponent.prototype.checkIdAnotherTab = function (code, row) {
        //check the whether id present in any other tab if the there to refetch the data
        if (code != 'C1') {
            //check in Location Codes
            var checkLocationCodes = this.locationRecords.some(function (a) { return a.id === row.id; });
            if (checkLocationCodes)
                this.getRecords(this.plan.codesInfo.LOCATION_CODE);
        }
        // check in NO SKU Master
        if (code != 'C2') {
            var checkNoSKUMaster = this.materialCodeRecords.some(function (a) { return a.id === row.id; });
            if (checkNoSKUMaster)
                this.getRecords(this.plan.codesInfo.MATERIAL_CODE);
        }
        if (code != 'C3') {
            //check in TTE Not avaliable 
            var checkTTENotavaliable = this.itemTtecodeRecords.some(function (a) { return a.id === row.id; });
            if (checkTTENotavaliable)
                this.getRecords(this.plan.codesInfo.ITEM_TTE_CODE);
        }
        if (code != 'C4') {
            //check in Item Category
            var checkItemCategory = this.itemCategoryCodeRecords.some(function (a) { return a.id === row.id; });
            this.getRecords(this.plan.codesInfo.ITEM_CATEGORY_CODE);
        }
        if (code != 'C5') {
            //check in Wrong Batch Code
            var checkWrongBatchCode = this.batchCodeRecords.some(function (a) { return a.id === row.id; });
            if (checkWrongBatchCode)
                this.getRecords(this.plan.codesInfo.BATCH_CODE);
        }
        if (code != 'C6') {
            var checkDuplicateRecords = this.duplicateRecords.some(function (a) { return a.id === row.id; });
            if (checkDuplicateRecords)
                this.getRecords(this.plan.codesInfo.DUPLICATE_RECORD_CODE);
        }
    };
    PlanWithErrorsComponent.prototype.multipleErrorPlanModal = function (dataoferror, row, errorCode, rowIndex, status) {
        var _this = this;
        var dialogRef = this.dialog.open(_public_plan_with_muliple_error_popup_plan_with_muliple_error_popup_component__WEBPACK_IMPORTED_MODULE_7__["PlanWithMulipleErrorPopupComponent"], {
            data: { multipleError: dataoferror },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            if (result) {
                _this.status = true;
                _this.errorPlandDelete(row, errorCode, rowIndex, _this.status);
            }
            else {
                _this.status = false;
                _this.isLoading = false;
            }
        });
    };
    PlanWithErrorsComponent.prototype.allowDuplicate = function (data, errorData, indexvalue) {
        var _this = this;
        this.isLoading = true;
        var values = {
            errorCode: errorData,
            planItemId: data.id,
            duplicateAllowed: true,
        };
        console.log(values);
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"].apisList.errorResolve, values).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == '200') {
                var deletebleItemCategoryIndex = _this.duplicateRecords.indexOf(data);
                _this.duplicateRecords.splice(deletebleItemCategoryIndex, 1);
                _this.duplicateRecords = _this.duplicateRecords.slice();
                _this.plan = response['data'];
                _this.isLoading = false;
                _this.toastr.success("Error Resolved Successfully", 'Success!');
            }
            else {
                var data_6 = response['data'];
                _this.showDuplicateErrorModal(data_6);
                _this.isLoading = false;
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // tabs change action
    PlanWithErrorsComponent.prototype.tabsChange = function (tabIndex) {
        if (tabIndex.index == 0) {
            this.duplicateRecords = this.duplicateRecords.slice();
        }
        else if (tabIndex.index == 1) {
            this.materialCodeRecords = this.materialCodeRecords.slice();
        }
        else if (tabIndex.index == 2) {
            this.batchCodeRecords = this.batchCodeRecords.slice();
        }
        else if (tabIndex.index == 3) {
            this.itemTtecodeRecords = this.itemTtecodeRecords.slice();
        }
        else if (tabIndex.index == 4) {
            this.locationRecords = this.locationRecords.slice();
        }
        else if (tabIndex.index == 5) {
            this.itemCategoryCodeRecords = this.itemCategoryCodeRecords.slice();
        }
    };
    PlanWithErrorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plan-with-errors',
            template: __webpack_require__(/*! ./plan-with-errors.component.html */ "./src/app/planner/plan-with-errors/plan-with-errors.component.html"),
            styles: [__webpack_require__(/*! ./plan-with-errors.component.scss */ "./src/app/planner/plan-with-errors/plan-with-errors.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], PlanWithErrorsComponent);
    return PlanWithErrorsComponent;
}());



/***/ }),

/***/ "./src/app/public/conformation-popup/conformation-popup.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/public/conformation-popup/conformation-popup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Are you sure,do you want to delete ?</h2>\n<mat-dialog-content class=\"mat-typography\">\n\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n  <!-- <button mat-button-raised mat-dialog-close>Cancel</button> -->\n  <button mat-raised-button  color=\"primary\" [mat-dialog-close]=\"true\">Yes</button> &nbsp;\n  <!-- <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button> -->\n  <button mat-stroked-button color=\"primary\" [mat-dialog-close]=\"false\" cdkFocusInitial>No</button>\n</mat-dialog-actions>\n\n\n"

/***/ }),

/***/ "./src/app/public/conformation-popup/conformation-popup.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/public/conformation-popup/conformation-popup.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9jb25mb3JtYXRpb24tcG9wdXAvY29uZm9ybWF0aW9uLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/public/conformation-popup/conformation-popup.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/public/conformation-popup/conformation-popup.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConformationPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConformationPopupComponent", function() { return ConformationPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConformationPopupComponent = /** @class */ (function () {
    function ConformationPopupComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConformationPopupComponent.prototype.ngOnInit = function () {
    };
    ConformationPopupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConformationPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conformation-popup',
            template: __webpack_require__(/*! ./conformation-popup.component.html */ "./src/app/public/conformation-popup/conformation-popup.component.html"),
            styles: [__webpack_require__(/*! ./conformation-popup.component.scss */ "./src/app/public/conformation-popup/conformation-popup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ConformationPopupComponent);
    return ConformationPopupComponent;
}());



/***/ }),

/***/ "./src/app/public/file-upload-errors-dialog/file-upload-errors-dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/public/file-upload-errors-dialog/file-upload-errors-dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content class=\"mat-typography\">\n  <mat-list role=\"list\">\n    <mat-list-item *ngFor=\"let data of data.ErrorData\">{{data}}</mat-list-item>\n    \n  </mat-list>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  \n  <button mat-stroked-button color=\"primary\" [mat-dialog-close]=\"false\" cdkFocusInitial>Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/public/file-upload-errors-dialog/file-upload-errors-dialog.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/public/file-upload-errors-dialog/file-upload-errors-dialog.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9maWxlLXVwbG9hZC1lcnJvcnMtZGlhbG9nL2ZpbGUtdXBsb2FkLWVycm9ycy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/public/file-upload-errors-dialog/file-upload-errors-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/public/file-upload-errors-dialog/file-upload-errors-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FileUploadErrorsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadErrorsDialogComponent", function() { return FileUploadErrorsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FileUploadErrorsDialogComponent = /** @class */ (function () {
    function FileUploadErrorsDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FileUploadErrorsDialogComponent.prototype.ngOnInit = function () {
    };
    FileUploadErrorsDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FileUploadErrorsDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-upload-errors-dialog',
            template: __webpack_require__(/*! ./file-upload-errors-dialog.component.html */ "./src/app/public/file-upload-errors-dialog/file-upload-errors-dialog.component.html"),
            styles: [__webpack_require__(/*! ./file-upload-errors-dialog.component.scss */ "./src/app/public/file-upload-errors-dialog/file-upload-errors-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], FileUploadErrorsDialogComponent);
    return FileUploadErrorsDialogComponent;
}());



/***/ }),

/***/ "./src/app/public/plan-with-muliple-error-popup/plan-with-muliple-error-popup.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/public/plan-with-muliple-error-popup/plan-with-muliple-error-popup.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content class=\"mat-typography\">\n    <h4><b>{{data.multipleError}}</b></h4>\n  </mat-dialog-content>\n  <mat-dialog-actions align=\"center\">\n      <button mat-raised-button  color=\"primary\" [mat-dialog-close]=\"true\">Yes</button> &nbsp;\n      <button mat-stroked-button color=\"primary\" [mat-dialog-close]=\"false\" cdkFocusInitial>No</button>\n  </mat-dialog-actions>\n  "

/***/ }),

/***/ "./src/app/public/plan-with-muliple-error-popup/plan-with-muliple-error-popup.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/public/plan-with-muliple-error-popup/plan-with-muliple-error-popup.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9wbGFuLXdpdGgtbXVsaXBsZS1lcnJvci1wb3B1cC9wbGFuLXdpdGgtbXVsaXBsZS1lcnJvci1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/public/plan-with-muliple-error-popup/plan-with-muliple-error-popup.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/public/plan-with-muliple-error-popup/plan-with-muliple-error-popup.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PlanWithMulipleErrorPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanWithMulipleErrorPopupComponent", function() { return PlanWithMulipleErrorPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PlanWithMulipleErrorPopupComponent = /** @class */ (function () {
    function PlanWithMulipleErrorPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PlanWithMulipleErrorPopupComponent.prototype.ngOnInit = function () {
    };
    PlanWithMulipleErrorPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plan-with-muliple-error-popup',
            template: __webpack_require__(/*! ./plan-with-muliple-error-popup.component.html */ "./src/app/public/plan-with-muliple-error-popup/plan-with-muliple-error-popup.component.html"),
            styles: [__webpack_require__(/*! ./plan-with-muliple-error-popup.component.scss */ "./src/app/public/plan-with-muliple-error-popup/plan-with-muliple-error-popup.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], PlanWithMulipleErrorPopupComponent);
    return PlanWithMulipleErrorPopupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=planner-plan-with-errors-plan-with-error-module.js.map