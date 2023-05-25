(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planner-manual-plan-manual-plan-module"],{

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

/***/ "./src/app/planner/manual-plan/manual-plan.component.html":
/*!****************************************************************!*\
  !*** ./src/app/planner/manual-plan/manual-plan.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    <b>Create Plan > Manual Plan</b>\n  </h6>\n  <!-- Create Plan by Manual Fields 1st row-->\n\n  <div class=\"manualplan-fields\">\n    <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && checkIfMaterialCodeIsTyre(f))\">\n      <div class=\"col-md-12 row\">\n        <div class=\"col-md-12 padding-right-40\">\n            <div class=\"row tab-loadslip-fields\">\n        <div class=\"col-md-1 pr-0\">\n          <div class=\"form-group\">\n            <mat-form-field>\n              <input matInput placeholder=\"Dispatch Date\" [min]=\"minDate\" disabled [matDatepicker]=\"createplanDate\"\n                autocomplete=\"off\" [(ngModel)]=\"planDate\" name=\"plandate\" required #dispatachbleDate=\"ngModel\">\n              <mat-datepicker-toggle matSuffix [for]=\"createplanDate\"></mat-datepicker-toggle>\n              <mat-datepicker #createplanDate disabled=\"false\"></mat-datepicker>\n              <mat-error *ngIf=\"(f.submitted && dispatachbleDate.invalid)\">\n                <p *ngIf=\"dispatachbleDate.errors.required\"> Dispatch Date is\n                  <strong>required</strong>\n                </p>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"col-md-1 pr-0\">\n          <div class=\"form-group\">\n            <ng-container *ngIf=\"(check_DP_REP_Role == roles.planner3 || check_DP_REP_Role == roles.L1MGR || check_DP_REP_Role == roles.L2MGR);else otherUsers\">\n              <mat-form-field>\n                <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event)\" autocomplete=\"off\"\n                  [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"plant\" name=\"source\" #sourceLoc=\"ngModel\" oninput=\"this.value = this.value.toUpperCase()\"\n                  required>\n                <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                    <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n                <mat-error *ngIf=\"(f.submitted && sourceLoc.invalid)\">\n                  <p *ngIf=\"sourceLoc.errors.required\">Source is\n                    <strong>required</strong>\n                  </p>\n                </mat-error>\n              </mat-form-field>\n            </ng-container>\n            <ng-template #otherUsers>\n              <mat-form-field>\n                <input matInput placeholder=\"Source\" name=\"plant\" [(ngModel)]=\"plant\" disabled #sourceLocation=\"ngModel\"\n                  required autocomplete=\"off\">\n                <mat-error *ngIf=\"(f.submitted && sourceLocation.invalid)\">\n                  <p *ngIf=\"sourceLocation.errors.required\">Source is\n                    <strong>required</strong>\n                  </p>\n                </mat-error>\n              </mat-form-field>\n            </ng-template>\n          </div>\n        </div>\n        <div class=\"col-md-1 pr-0\">\n          <div class=\"form-group\">\n            <mat-form-field>\n              <input matInput placeholder=\"Destination\" (keyup)=\"getfilterDestination($event)\" autocomplete=\"off\"\n                [matAutocomplete]=\"statesAutocomplete\" [(ngModel)]=\"destination\" name=\"destination\"\n                #destinationLocation=\"ngModel\" oninput=\"this.value = this.value.toUpperCase()\" required>\n              <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\" (click)=\"setDestinationDescription(list.description)\"\n                  (onSelectionChange)=\"setDestinationDescription(list.description)\">\n                  <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n              <mat-error *ngIf=\"(f.submitted && destinationLocation.invalid)\">\n                <p *ngIf=\"destinationLocation.errors.required\">Destination is\n                  <strong>required</strong>\n                </p>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"col-md-2 pr-0\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Destination Description\" aria-label=\"State\" [matAutocomplete]=\"destDisAutocomplete\"\n              [(ngModel)]=\"destinationDesc\" name=\"destinationDesc\" (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n            <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n              <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\" (click)=\"setDestination(list.value)\"\n                (onSelectionChange)=\"setDestination(list.value)\">\n                <span>({{list.description}})</span>\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-2 pr-0\">\n          <div class=\"form-group\">\n            <mat-form-field>\n              <input matInput placeholder=\"Material code\" [matAutocomplete]=\"materilalcodeAutocomplete\" autocomplete=\"off\"\n                [(ngModel)]=\"materialCode\" name=\"materilaCode\" (keyup)=\"getUserSearchMaterial($event)\" #materialcode=\"ngModel\"\n                oninput=\"this.value = this.value.toUpperCase()\" required>\n              <mat-autocomplete #materilalcodeAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of materilcodelist\" [value]=\"list.value\" (click)=\"setMaterialDescription(list.description)\"\n                  (onSelectionChange)=\"setMaterialDescription(list.description)\">\n                  <span>{{list.value}}</span>\n                </mat-option>\n              </mat-autocomplete>\n              <mat-error *ngIf=\"(f.submitted && materialcode.invalid)\">\n                <p *ngIf=\"materialcode.errors.required\">Material Code is\n                  <strong>required</strong>\n                </p>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"col-md-2 pr-0\">\n          <div class=\"form-group\">\n            <!-- <mat-form-field >\n            <mat-label>Material Description</mat-label>\n            <input matInput [(ngModel)]=\"MaterialDescription\" name=\"description\" disabled required #materialDesc=\"ngModel\">\n            <mat-error *ngIf=\"(f.submitted && materialDesc.invalid)\">\n              <p *ngIf=\"materialDesc.errors.required\">Material Description is\n                <strong>required</strong>\n              </p>\n            </mat-error>\n          </mat-form-field> -->\n            <mat-form-field>\n              <input matInput placeholder=\"Material description\" [matAutocomplete]=\"materilalDespAutocomplete\"\n                autocomplete=\"off\" [(ngModel)]=\"MaterialDescription\" name=\"description\" (keyup)=\"filterMaterialDescription($event)\"\n                #materialDesc=\"ngModel\" oninput=\"this.value = this.value.toUpperCase()\" required>\n              <mat-autocomplete #materilalDespAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of materialDescriptionList\" [value]=\"list.description\" (click)=\"setMaterialCode(list.value)\"\n                  (onSelectionChange)=\"setMaterialCode(list.value)\">\n                  <span>{{list.description}}</span>\n                </mat-option>\n              </mat-autocomplete>\n              <mat-error *ngIf=\"(f.submitted && materialDesc.invalid)\">\n                <p *ngIf=\"materialDesc.errors.required\">Material Description is\n                  <strong>required</strong>\n                </p>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"col-md-2 pr-0\">\n          <div class=\"form-group\">\n            <mat-form-field>\n              <mat-select placeholder=\"Batch Code\" [(ngModel)]=\"batchCode\" name=\"batchCode\" #batchcode=\"ngModel\"\n                required>\n                <mat-option [value]=\"\">None</mat-option>\n                <mat-option *ngFor=\"let batchCode of batchCodeList\" [value]=\"batchCode\">\n                  {{batchCode}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"(f.submitted && batchcode.invalid)\">\n                <p *ngIf=\"batchcode.errors.required\">Batch code is\n                  <strong>required</strong>\n                </p>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"col-md-1\">\n          <div class=\"form-group\">\n            <mat-form-field>\n              <input matInput placeholder=\"Quantity\" [(ngModel)]=\"quanitity\" name=\"quanitity\" type=\"number\"\n                autocomplete=\"off\" required #qty=\"ngModel\" (keypress)=\"service.numberOnly($event)\">\n              <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                <p *ngIf=\"qty.errors.required\">Quantity is\n                  <strong>required</strong>\n                </p>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"col-md-1 pr-0\">\n          <div class=\"form-group\">\n            <mat-form-field>\n              <mat-select placeholder=\"Priority\" [(ngModel)]=\"priority\" name=\"priority\" #prior=\"ngModel\">\n                <mat-option [value]=\"\">None</mat-option>\n                <mat-option *ngFor=\"let priority of priorityList\" [value]=\"priority\">\n                  {{priority}}\n                </mat-option>\n              </mat-select>\n              <!-- <mat-error *ngIf=\"(f.submitted && prior.invalid)\">\n                <p *ngIf=\"prior.errors.required\">Priority is\n                  <strong>required</strong>\n                </p>\n              </mat-error> -->\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"col-md-2 pr-0\">\n          <div class=\"form-group comments\">\n            <mat-form-field>\n              <textarea matInput class=\"commentsTextArea\" [(ngModel)]=\"comments\" name=\"comments\" autocomplete=\"off\"\n                placeholder=\"Comments\"></textarea>\n            </mat-form-field>\n          </div>\n        </div>\n        \n        </div>\n        \n        </div>\n        <div class=\"pull-right\">\n            <div class=\"search-fileds\">\n              <button class=\"theme-small-button\" type=\"submit\" matTooltip=\"Add Plan\">\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n              </button>\n              <!-- <button class=\"theme-delete-button\" (click)=\"clearAll(f)\" matTooltip=\"Clear All\">\n              <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n            </button> -->\n            </div>\n          </div>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"clearfix\"></div>\n  <!-- manual plan Details Table -->\n  <div class=\"datatable ngx-table-custom-scroll ngx-table-tr-custom-scroll\">\n    <ngx-datatable class='material' [rows]='planData' [columnMode]=\"'force'\" [headerHeight]=\"50\" [limit]=\"100\"\n      [footerHeight]=\"30\" [rowHeight]=\"'auto'\">\n      <ngx-datatable-column name=\"Dispatch Date\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"dispatchDate\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.dispatchDate | customDateFormat | date:'dd-MMM-yyyy'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Source\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"sourceLocation\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.sourceLocation}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Destination\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destinationLocation\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destinationLocation}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Dest Description\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destinationLocation\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destDis}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Material Code\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"materialCode\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.materialCode}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Material Description\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"materialDescription\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.materialDescription}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Batch Code\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"batchCode\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.batchCode}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Quantity\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"quantity\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.quantity}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Priority\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"priority\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.priority}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Comments\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"comments\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.comments}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Action\" prop=\"id\" [resizeable]=\"false\" [sortable]=\"false\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-id=\"value\">\n          <button class=\"theme-delete-button\" (click)=\"deletePlan(row)\">\n            <i class=\"fa fa-trash-o fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n\n        </ng-template>\n      </ngx-datatable-column>\n    </ngx-datatable>\n  </div>\n  <div class=\"clearfix\"></div>\n  <div align=\"center\">\n    <button mat-raised-button color=\"primary\" class=\"btm-action-btn\" (click)=\"createManualPlan()\" *ngIf=\"(planData.length>0)\">Create\n      plan</button>\n  </div>\n  <div class=\"error-log\" *ngIf=\"IsErrorLog\">\n    <mat-card>\n      <mat-list role=\"list\">\n        <mat-list-item *ngFor=\"let data of ErrorData\">{{data}}</mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n</div>\n\n<!--  Freight Availble or Not Show Modal After creation of Indent -->\n<!-- The Modal -->\n<div class=\"modal\" id=\"errorModal\" data-keyboard=\"false\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center\">Errors !!</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body error-log\">\n        <!-- <p class=\"text-primary text-center \">{{responseData}}</p> -->\n        <!-- <mat-card class=\"no\">\n          <mat-list role=\"list\">\n            <mat-list-item *ngFor=\"let data of ErrorData\">{{data}}</mat-list-item>\n          </mat-list>\n        </mat-card> -->\n        <ul>\n          <li *ngFor=\"let data of ErrorData\">{{data}}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/planner/manual-plan/manual-plan.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/planner/manual-plan/manual-plan.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".manualplan-fields {\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0px; }\n  .manualplan-fields p > i {\n    cursor: pointer; }\n  .manualplan-fields .col-md-3 {\n    padding: 0px 15px; }\n  .manualplan-fields .wid-12p {\n    flex: 0 0 12%;\n    max-width: 12%; }\n  .manualplan-fields .wid-13p {\n    flex: 0 0 13%;\n    max-width: 13%; }\n  .manualplan-fields .form-group {\n    margin-bottom: 0; }\n  .manualplan-fields .form-group .mat-form-field .mat-form-field-wrapper {\n      padding-bottom: 0.5em !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhbm5lci9tYW51YWwtcGxhbi9DOlxcVXNlcnNcXEFiaGV5U29vZFxcT25lRHJpdmUgLSBBY2NlbGFscGhhIFNvZnR3YXJlIFB2dC4gTHRkXFxEZXNrdG9wXFxhdG9tIGFwb2xsb1xcQXBvbGxvXFxOZXctIEFudXJhZ1xcYXRvbS11aS9zcmNcXGFwcFxccGxhbm5lclxcbWFudWFsLXBsYW5cXG1hbnVhbC1wbGFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7RUFIaEI7SUFLUSxlQUFlLEVBQUE7RUFMdkI7SUFRUSxpQkFBaUIsRUFBQTtFQVJ6QjtJQVdRLGFBQWE7SUFDYixjQUFjLEVBQUE7RUFadEI7SUFlUSxhQUFhO0lBQ2IsY0FBYyxFQUFBO0VBaEJ0QjtJQW1CUSxnQkFBZ0IsRUFBQTtFQW5CeEI7TUFzQmdCLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxhbm5lci9tYW51YWwtcGxhbi9tYW51YWwtcGxhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvbWl4aW5zJztcblxuXG4ubWFudWFscGxhbi1maWVsZHN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcCA+IGl7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmNvbC1tZC0ze1xuICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgICB9XG4gICAgLndpZC0xMnB7XG4gICAgICAgIGZsZXg6IDAgMCAxMiU7XG4gICAgICAgIG1heC13aWR0aDogMTIlO1xuICAgIH1cbiAgICAud2lkLTEzcHtcbiAgICAgICAgZmxleDogMCAwIDEzJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMyU7XG4gICAgfVxuICAgIC5mb3JtLWdyb3Vwe1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/planner/manual-plan/manual-plan.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/planner/manual-plan/manual-plan.component.ts ***!
  \**************************************************************/
/*! exports provided: ManualPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualPlanComponent", function() { return ManualPlanComponent; });
/* harmony import */ var _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/helper-service/helper-service.service */ "./src/app/services/helper-service/helper-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _public_date_adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/date.adapters */ "./src/app/public/date.adapters.ts");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _public_manual_plan_success_dialog_manual_plan_success_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/manual-plan-success-dialog/manual-plan-success-dialog.component */ "./src/app/public/manual-plan-success-dialog/manual-plan-success-dialog.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
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









var ManualPlanComponent = /** @class */ (function () {
    function ManualPlanComponent(service, toastr, dialog, helperService) {
        this.service = service;
        this.toastr = toastr;
        this.dialog = dialog;
        this.helperService = helperService;
        this.planData = [];
        this.plant = '';
        this.destination = '';
        this.materialCode = '';
        this.description = "";
        this.batchCode = '';
        this.quanitity = "";
        this.priority = "";
        this.mktsigment = "";
        this.source = '';
        this.index = 0;
        this.destinationList = [];
        this.materilcodelist = [];
        // batchCodelist = [];
        this.minDate = new Date();
        this.IsErrorLog = false;
        // formattedDate = '';
        this.MaterialDescription = '';
        this.isLoading = false;
        this.isValiData = false;
        this.manualplanDate = {
            planitems: []
        };
        this.priorityList = [1, 2, 3];
        this.batchCodeList = [];
        this.descriptionList = [];
        this.batchCodePrefixList = [];
        this.checkBatchCode = false;
    }
    ManualPlanComponent.prototype.ngOnInit = function () {
        this.check_DP_REP_Role = this.service.checkRole();
        this.roles = src_app_constants__WEBPACK_IMPORTED_MODULE_8__["constants"].roles;
        localStorage.setItem("userMenu", "create-plan");
        if (this.check_DP_REP_Role == this.roles.planner3 || this.check_DP_REP_Role == this.roles.L2MGR || this.check_DP_REP_Role == this.roles.L2MGR) {
            this.plant = '';
        }
        else {
            this.plant = localStorage.getItem("sourceID");
        }
        this.planDate = this.helperService.getTodayDateASString();
        // for getting batch code master data
        this.getBatchCodeMasterData();
        this.getBatchCodePrefixes();
    };
    // for getting batch code master data from server
    ManualPlanComponent.prototype.getBatchCodeMasterData = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.batchCodeMasterData).subscribe(function (response) {
            _this.batchCodeList = response['data'];
            _this.isLoading = false;
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    ManualPlanComponent.prototype.deletePlan = function (row) {
        var findIndex = this.planData.indexOf(row);
        this.planData.splice(findIndex, 1);
        this.planData = this.planData.slice();
        console.log(this.planData);
    };
    //get materialcode and coorsponding Description also
    ManualPlanComponent.prototype.getUserSearchMaterial = function (event) {
        var _this = this;
        this.MaterialDescription = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.materilcodelist = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.searchFilter + '?materialCode=' + filtervalue).subscribe(function (response) {
                console.log("respio", response);
                _this.materilcodelist = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
        if (filtervalue == '') {
            this.MaterialDescription = '';
        }
    };
    // Filter source location
    ManualPlanComponent.prototype.getfilterSource = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.sourceList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
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
    ManualPlanComponent.prototype.getUserDestinationList = function (event) {
        var _this = this;
        this.destination = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.getDestinationDescriptionDataList + event.target.value).subscribe(function (response) {
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
    //set value destination
    ManualPlanComponent.prototype.setDestination = function (value) {
        var _this = this;
        //  this.destinationDesc = value;
        setTimeout(function () {
            _this.destination = value;
        }, 200);
    };
    ManualPlanComponent.prototype.setDestinationDescription = function (value) {
        var _this = this;
        setTimeout(function () {
            _this.destinationDesc = value;
        }, 200);
    };
    //filter material description 
    ManualPlanComponent.prototype.filterMaterialDescription = function (event) {
        var _this = this;
        this.materialCode = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.materialDescriptionList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.searchFilter + '?materialDesc=' + filtervalue).subscribe(function (response) {
                console.log("respio", response);
                _this.materialDescriptionList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //set value for material code 
    ManualPlanComponent.prototype.setMaterialCode = function (value) {
        var _this = this;
        setTimeout(function () {
            _this.materialCode = value;
        }, 300);
    };
    ManualPlanComponent.prototype.checkIfMaterialCodeIsTyre = function (form) {
        var _this = this;
        console.log("In method");
        if (this.materialCode) {
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.checkMaterialCodeIsTyre + '?materialCode=' + this.materialCode).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    _this.isLoading = false;
                    _this.checkBatchCode = response['data'];
                    console.log("batchCodeCheck", _this.checkBatchCode);
                    // Validating the form data
                    _this.addplan(form);
                }
            }, function (err) {
                _this.isLoading = false;
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            });
        }
    };
    ManualPlanComponent.prototype.getBatchCodePrefixes = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.getBatchCodePrefixes).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.batchCodePrefixList = response['data'];
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //get bactch code data
    // FilterBacthCode(event) {
    //   let filtervalue = event.target.value;
    //   if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
    //     this.batchCodelist = [];
    //     this.isLoading = true;
    //     this.service.get_service(ApiserviceService.apisList.searchFilter + '?batchCode=' + filtervalue).subscribe(response => {
    //       console.log("respio", response)
    //       this.batchCodelist = response['data'].searchResult;
    //       this.isLoading = false;
    //     }, (err) => {
    //       console.log("Error", err);
    //       this.toastr.error(err ? err : "Something went wrong..", "Error!");
    //       this.isLoading = false;
    //     })
    //   }
    // }
    //get filter destination result
    ManualPlanComponent.prototype.getfilterDestination = function (event) {
        var _this = this;
        this.destinationDesc = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
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
    //Add plan date to Local
    ManualPlanComponent.prototype.addplan = function (form) {
        var data = {
            dispatchDate: this.planDate ? moment__WEBPACK_IMPORTED_MODULE_7__(this.planDate).format('DD/MM/YYYY') : '',
            sourceLocation: this.plant,
            destinationLocation: this.destination,
            materialCode: this.materialCode,
            materialDescription: this.MaterialDescription,
            batchCode: this.batchCode,
            quantity: this.quanitity,
            priority: this.priority,
            marketSegment: this.mktsigment,
            destDis: this.destinationDesc,
            comments: this.comments
        };
        var destinationCheck = this.destinationList.some(function (r) { return r.value === data.destinationLocation; });
        var materialcodeCheck = this.materilcodelist.some(function (r) { return r.value === data.materialCode; });
        if (this.planDate) {
            if (destinationCheck) {
                if (materialcodeCheck) {
                    if (Number(data.quantity) == 0) {
                        this.toastr.error("Quantity should be greater than 0");
                    }
                    else {
                        if (data.marketSegment.length > 10) {
                            this.toastr.error('Market segment length can not be more than 10 characters');
                        }
                        else {
                            console.log("beforeIf");
                            if (this.checkBatchCode) {
                                var index = this.batchCodePrefixList.findIndex(function (item) { return item.LOCATIONID === data.sourceLocation; });
                                // index will be -1 when the given source has no batchCode prefix to check
                                if (index != -1) {
                                    // Check th batch code prefix for plant locations and ext_warehouse locs
                                    var plantLocDetails = this.batchCodePrefixList[index];
                                    if (this.batchCode.startsWith(plantLocDetails.BATCHCODEPREFIX)) {
                                        this.addDataToTable(data);
                                        form.resetForm(); // or form.reset()
                                        this.checkBatchCode = false;
                                    }
                                    else {
                                        this.toastr.error('Batch code ' + data.batchCode + ' is not valid for source loc ' + data.sourceLocation);
                                    }
                                }
                                else {
                                    //When Source other than the plant locs 1007,1001,1002,1004 and ext_warehouse TNR2,TNR4,TNR5,TNR6,TNR7
                                    //No need to check for batch prefix
                                    this.addDataToTable(data);
                                    form.resetForm(); // or form.reset()  
                                    this.checkBatchCode = false;
                                }
                            }
                            else {
                                this.addDataToTable(data);
                                form.resetForm(); // or form.reset()
                                this.checkBatchCode = false;
                            }
                        }
                    }
                }
                else {
                    var checkMaterialDescription = this.materialDescriptionList.some(function (r) { return r.description == data.materialDescription; });
                    if (checkMaterialDescription) {
                        this.addDataToTable(data);
                        form.resetForm(); // or form.reset()
                        this.checkBatchCode = false;
                    }
                    else {
                        this.toastr.error('Material code not valid. Please select material code from list');
                        this.materialCode = '';
                        this.MaterialDescription = '';
                    }
                }
            }
            else {
                var checkDestinationDescription = this.descriptionList.some(function (a) { return a.description == data.destDis; });
                if (checkDestinationDescription) {
                    this.addDataToTable(data);
                    form.resetForm(); // or form.reset()
                    this.checkBatchCode = false;
                }
                else {
                    this.toastr.error('Destination code not valid. Please select destination from list');
                }
            }
        }
        else {
            this.toastr.error('Please enter Dispatch Date');
        }
    };
    ManualPlanComponent.prototype.addDataToTable = function (data) {
        var _this = this;
        this.planData.push(data);
        this.destinationList = [];
        this.materilcodelist = [];
        this.sourceList = [];
        setTimeout(function () {
            if (_this.check_DP_REP_Role == _this.roles.planner3) {
                _this.plant = '';
            }
            else {
                _this.plant = localStorage.getItem("sourceID");
            }
            _this.planDate = _this.helperService.getTodayDateASString();
        }, 200);
        console.log("this is not valid data");
        this.planData = this.planData.slice();
    };
    //open manual plan success creationb of plan
    ManualPlanComponent.prototype.openDialog = function (value) {
        var dialogRef = this.dialog.open(_public_manual_plan_success_dialog_manual_plan_success_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ManualPlanSuccessDialogComponent"], {
            // width: '250px',
            data: { planId: value },
            disableClose: true
        });
    };
    //create plan 
    ManualPlanComponent.prototype.createManualPlan = function () {
        var _this = this;
        var modifiedArr = [];
        for (var i = 0; i < this.planData.length; i++) {
            var data = {
                "Dispatch Date": this.planData[i].dispatchDate,
                "Source Location": this.planData[i].sourceLocation,
                "Destination Location": this.planData[i].destinationLocation,
                "Material Code": this.planData[i].materialCode,
                "Material Description": this.planData[i].materialDescription,
                "Batch Code": this.planData[i].batchCode,
                "Quantity": this.planData[i].quantity,
                "Priority": this.planData[i].priority,
                "Marketing Segment": this.planData[i].marketSegment,
                "Comments": this.planData[i].comments
            };
            modifiedArr.push(data);
        }
        console.log("planData final changes", modifiedArr);
        var senddata = {
            planItems: modifiedArr
        };
        console.log(senddata, "senddata");
        this.isLoading = true;
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.plannerService, senddata).subscribe(function (response) {
            console.log("repsonse of manual plan creation", response);
            if (response['statusCode'] == 200) {
                _this.isLoading = false;
                _this.planData = [];
                _this.toastr.success(response['data'].planStatus ? response['data'].planStatus : "Plan Created successfully..", "Success!");
                var datamodal = {
                    status: response['data'].status,
                    planId: response['data'].planId,
                    message: response['data'].message,
                };
                _this.openDialog(datamodal);
            }
            else {
                // this.isLoading = false;
                // this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
                _this.isLoading = false;
                _this.ErrorData = response['data'];
                $('#errorModal').modal('show');
                // this.toastr.error(this.ErrorData);
                //this.IsErrorLog = true
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //set material description value 
    ManualPlanComponent.prototype.setMaterialDescription = function (value) {
        var _this = this;
        console.log(value);
        setTimeout(function () {
            _this.MaterialDescription = value;
            // this.checkIfMaterialCodeIsTyre();
        }, 200);
    };
    ManualPlanComponent.prototype.clearAll = function (form) {
        var _this = this;
        // form.resetForm(); // or form.reset();
        form.reset();
        setTimeout(function () {
            _this.plant = localStorage.getItem("sourceID");
        }, 200);
        this.destinationList = [];
        this.materilcodelist = [];
        // this.batchCodelist = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], ManualPlanComponent.prototype, "form", void 0);
    ManualPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manual-plan',
            template: __webpack_require__(/*! ./manual-plan.component.html */ "./src/app/planner/manual-plan/manual-plan.component.html"),
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: _public_date_adapters__WEBPACK_IMPORTED_MODULE_3__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: _public_date_adapters__WEBPACK_IMPORTED_MODULE_3__["APP_DATE_FORMATS"]
                },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_2__["ShowOnDirtyErrorStateMatcher"] }
            ],
            styles: [__webpack_require__(/*! ./manual-plan.component.scss */ "./src/app/planner/manual-plan/manual-plan.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__["HelperServiceService"]])
    ], ManualPlanComponent);
    return ManualPlanComponent;
}());



/***/ }),

/***/ "./src/app/planner/manual-plan/manual-plan.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/planner/manual-plan/manual-plan.module.ts ***!
  \***********************************************************/
/*! exports provided: manualPlanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manualPlanModule", function() { return manualPlanModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _manual_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manual-plan.component */ "./src/app/planner/manual-plan/manual-plan.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_manual_plan_success_dialog_manual_plan_success_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/manual-plan-success-dialog/manual-plan-success-dialog.component */ "./src/app/public/manual-plan-success-dialog/manual-plan-success-dialog.component.ts");
/* harmony import */ var _services_auth_guard_planner_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth-guard/planner-auth-guard.service */ "./src/app/services/auth-guard/planner-auth-guard.service.ts");
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _manual_plan_component__WEBPACK_IMPORTED_MODULE_4__["ManualPlanComponent"] },
];
var manualPlanModule = /** @class */ (function () {
    function manualPlanModule() {
    }
    manualPlanModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_10__["CustomDatePipeModule"]
            ],
            declarations: [
                _manual_plan_component__WEBPACK_IMPORTED_MODULE_4__["ManualPlanComponent"],
                _public_manual_plan_success_dialog_manual_plan_success_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ManualPlanSuccessDialogComponent"]
            ],
            providers: [
                _services_auth_guard_planner_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["PlannerAuthGuardService"]
            ],
            entryComponents: [
                _manual_plan_component__WEBPACK_IMPORTED_MODULE_4__["ManualPlanComponent"],
                _public_manual_plan_success_dialog_manual_plan_success_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ManualPlanSuccessDialogComponent"]
            ],
        })
    ], manualPlanModule);
    return manualPlanModule;
}());



/***/ }),

/***/ "./src/app/public/manual-plan-success-dialog/manual-plan-success-dialog.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/public/manual-plan-success-dialog/manual-plan-success-dialog.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content class=\"mat-typography\">\n  <h4 class=\"plan-created-success\" > {{data.planId.message}} !!\n    \n    <!-- Plan With Out errors -->\n    <ng-container *ngIf=\"data.planId.status != 'PLAN_PENDING'\">\n    <!-- FGS PLANNER, DP_REP, L1_MGR AND L2_MGR -->\n    <a [routerLink]=\"['/dispatch-plan/approve-plans',data.planId.planId]\" *ngIf=\"(service.checkRole() == userRoles.planner1) || (service.checkRole() == userRoles.planner2) \n      || (service.checkRole() == userRoles.planner3) || (service.checkRole() == userRoles.L1MGR) || (service.checkRole() == userRoles.L2MGR)\">\n      <span (click)=\"onNoClick()\">{{data.planId.planId}}</span>\n    </a>\n    <!-- FGS OPERATION -->\n    <a [routerLink]=\"['/fgs/approve-plans',data.planId.planId]\" *ngIf=\"(service.checkRole() == userRoles.fgsOperations1) || (service.checkRole() == userRoles.fgsOperations2) || \n      (service.checkRole() == userRoles.fgsOperations3) || (service.checkRole() == userRoles.fgsOperations4)\">\n      <span (click)=\"onNoClick()\">{{data.planId.planId}}</span>\n    </a>\n    <!-- RDC PLAN / OPERATION -->\n    <a [routerLink]=\"['/rdc/approve-plans',data.planId.planId]\" *ngIf=\"(service.checkRole() == userRoles.rdc_PLN)\">\n      <span (click)=\"onNoClick()\">{{data.planId.planId}}</span>\n    </a>\n      </ng-container>\n\n    <!-- Plan with errors -->\n    <ng-container *ngIf=\"data.planId.status === 'PLAN_PENDING'\">\n    <!-- FGS PLANNER, DP_REP, L1_MGR AND L2_MGR -->\n    <a [routerLink]=\"['/plan/pending-plans/view-plan',data.planId.planId]\" *ngIf=\"(service.checkRole() == userRoles.planner1) || (service.checkRole() == userRoles.planner2) \n      || (service.checkRole() == userRoles.planner3) || (service.checkRole() == userRoles.L1MGR) || (service.checkRole() == userRoles.L2MGR)\">\n      <span (click)=\"onNoClick()\">{{data.planId.planId}}</span>\n    </a>\n    <!-- FGS OPERATION -->\n    <a [routerLink]=\"['/fgs/pending-plans/view-plan/',data.planId.planId]\" *ngIf=\"(service.checkRole() == userRoles.fgsOperations1) || (service.checkRole() == userRoles.fgsOperations2) || \n      (service.checkRole() == userRoles.fgsOperations3) || (service.checkRole() == userRoles.fgsOperations4)\">\n      <span (click)=\"onNoClick()\">{{data.planId.planId}}</span>\n    </a>\n    <!-- RDC PLAN / OPERATION -->\n    <a [routerLink]=\"['/rdc/pending-plans/view-plan',data.planId.planId]\" *ngIf=\"(service.checkRole() == userRoles.rdc_PLN)\">\n      <span (click)=\"onNoClick()\">{{data.planId.planId}}</span>\n    </a>\n    </ng-container>\n   \n  </h4>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n\n  <button mat-stroked-button color=\"primary\" [mat-dialog-close]=\"false\" cdkFocusInitial>Close</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/public/manual-plan-success-dialog/manual-plan-success-dialog.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/public/manual-plan-success-dialog/manual-plan-success-dialog.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9tYW51YWwtcGxhbi1zdWNjZXNzLWRpYWxvZy9tYW51YWwtcGxhbi1zdWNjZXNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/public/manual-plan-success-dialog/manual-plan-success-dialog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/public/manual-plan-success-dialog/manual-plan-success-dialog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ManualPlanSuccessDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualPlanSuccessDialogComponent", function() { return ManualPlanSuccessDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
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




var ManualPlanSuccessDialogComponent = /** @class */ (function () {
    function ManualPlanSuccessDialogComponent(service, dialogRef, data) {
        this.service = service;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ManualPlanSuccessDialogComponent.prototype.ngOnInit = function () {
        this.userRoles = src_app_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].roles;
        console.log(this.data);
    };
    ManualPlanSuccessDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ManualPlanSuccessDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manual-plan-success-dialog',
            template: __webpack_require__(/*! ./manual-plan-success-dialog.component.html */ "./src/app/public/manual-plan-success-dialog/manual-plan-success-dialog.component.html"),
            styles: [__webpack_require__(/*! ./manual-plan-success-dialog.component.scss */ "./src/app/public/manual-plan-success-dialog/manual-plan-success-dialog.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ManualPlanSuccessDialogComponent);
    return ManualPlanSuccessDialogComponent;
}());



/***/ })

}]);
//# sourceMappingURL=planner-manual-plan-manual-plan-module.js.map