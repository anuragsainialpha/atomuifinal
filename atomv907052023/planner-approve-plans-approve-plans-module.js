(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planner-approve-plans-approve-plans-module"],{

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

/***/ "./src/app/planner/approve-plans/approve-plans.component.html":
/*!********************************************************************!*\
  !*** ./src/app/planner/approve-plans/approve-plans.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    Dispatch Plan > Approve Plan\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n  <div class=\"manualplan-fields\">\n    <div class=\"col-md-12 row\" *ngIf=\"isShow\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row\">\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formPicker\" placeholder=\"From Date\" [(ngModel)]=\"fromDate\"\n                  name=\"fromDate\" (dateChange)=\"addEvent('fromDate', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toPicker\" [min]=\"fromDate\" placeholder=\"To Date\"\n                  [(ngModel)]=\"toDate\" name=\"toDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toPicker [disabled]=\"!fromDate\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- check_Role_DP_REP == roles.planner3  -->\n          <!-- <div class=\"col-md-1 pl-0\" *ngIf=\"service.isDPREPRole()\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event)\" autocomplete=\"off\"\n                [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"sourceCode\" name=\"source\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div> -->\n          <!-- Source With Drop doem for DPREP and disable input field for NORMAL USERs -->\n          <div class=\"col-md-1 pl-0\" *ngIf = \"isSoureDisable()\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event)\" [disabled]=\"(isSoureDisable()) \"\n                autocomplete=\"off\" [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"sourceCode\" name=\"source\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\" >\n                <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pr-0\" *ngIf = \"!isSoureDisable()\">\n              <div class=\"form-group cust-form-group\">\n                <mat-form-field class=\"example-full-width\">\n                  <mat-select placeholder=\"Source\" [(ngModel)]=\"sourceCodeList\" name=\"sourceCodeList\"\n                    multiple [disabled]=\"(isSoureDisable()) \">\n                    <mat-option *ngFor=\"let source of openPlanSourceList\" [value]=\"source\">{{source}}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n                  [(ngModel)]=\"destination\" name=\"destination\" (keyup)=\"getUserSearchData($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\"\n                    (click)=\"setDestDescription(list.description)\"\n                    (onSelectionChange)=\"setDestDescription(list.description)\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination Description\" aria-label=\"State\"\n                  [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destination\"\n                  (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                    (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                    <span>({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Material Code\" aria-label=\"Material Code\"\n                  [matAutocomplete]=\"materialCodeAutocomplete\" [(ngModel)]=\"materialCode\" name=\"materialCode\"\n                  (keyup)=\"filterMaterialCode($event)\" autocomplete=\"off\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #materialCodeAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of materilcodelist\" [value]=\"list.value\"\n                    (click)=\"setMaterialDescription(list.description)\"\n                    (onSelectionChange)=\"setMaterialDescription(list.description)\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Material Description\" aria-label=\"Material Description\"\n                  [matAutocomplete]=\"materialDescriptionAutocomplete\" [(ngModel)]=\"materialDescription\"\n                  name=\"materialDescription\" autocomplete=\"off\" (keyup)=\"filterMaterialDescription($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #materialDescriptionAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of materialDescriptionList\" [value]=\"list.description\"\n                    (click)=\"setMaterialCode(list.value)\" (onSelectionChange)=\"setMaterialCode(list.value)\">\n                    <span>{{list.description}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Category\" [(ngModel)]=\"materialGroup\" name=\"materialGroup\" multiple>\n                  <mat-option *ngFor=\"let category of categoryList\" [value]=\"category\">{{category}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"MKT Segment\" [(ngModel)]=\"mktsegment\" name=\"mktsegment\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let mktsegment of mktsegmentList\" [value]=\"mktsegment\">\n                    {{mktsegment}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Plan Id\" [(ngModel)]=\"planId\" autocomplete=\"off\" name=\"planId\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Plan Status\" [(ngModel)]=\"planStatus\" name=\"planStatus\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let item of planStatusList\" [value]=\"item.value\">\n                    {{item.key}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Status\" [(ngModel)]=\"status\" name=\"status\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let data of statuses\" [value]=\"data.value\">{{data.key}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Insert User\" [(ngModel)]=\"insertUser\" name=\"insertUser\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Priority\" [(ngModel)]=\"priority\" name=\"priority\" multiple>\n                  <mat-option value=\"ISNULL\">ISNULL</mat-option>\n                  <mat-option *ngFor=\"let priority of priorityList\" [value]=\"priority\">{{priority}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n                  [(ngModel)]=\"destination\" name=\"destination\" (keyup)=\"getUserSearchData($event)\" autocomplete=\"off\">\n                <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\">\n                    <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div> -->\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"plannerSearch()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"clearfix\"></div>\n  <div class=\"datatable\">\n    <ngx-datatable #table class='material ngx-table-custom-scroll ngx-table-tr-custom-scroll' [rows]='pendingPlanList'\n      [columnMode]=\"'force'\" [count]=\"page.count\" [externalPaging]=\"true\" [headerHeight]=\"50\" [limit]=\"page.limit\"\n      [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [selected]=\"selected\" [selectionType]=\"'checkbox'\"\n      [selectAllRowsOnPage]=\"false\" [scrollbarH]=\"true\" (activate)=\"onActivate($event)\" [offset]=\"page.offset\"\n      (page)=\"datatablePageData($event)\" [summaryRow]=\"true\" [summaryHeight]=\"'auto'\" [summaryPosition]=\"'bottom'\">\n\n      <ngx-datatable-column name=\"Plan Id\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"planId\"\n        [summaryFunc]=\"emptySumm\" [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.planId}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Disp Date\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"dispatchDate\"\n        [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.dispatchDate | customDateFormat | date:'dd-MMM-yyyy'}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Source\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"sourceLocation\"\n        [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.sourceLocation}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Dest\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"destinationLocation\"\n        [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destinationLocation}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Material Code\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"itemId\"\n        [frozenLeft]=\"freezeLeftValue\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.itemId}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column [cellClass]=\"'myClass'\" name=\"Material Description\" [width]=\"210\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"itemDescription\" [frozenLeft]=\"freezeLeftValue\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.itemDescription}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Dest Description\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"destinationDescription\">\n        <ng-template ngx-datatable-cell-template let-row=\"row\">\n          <div>\n            {{row.destinationDescription}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Cat\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"category\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.category}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"TTE\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"tte\"\n        [summaryTemplate]=\"tteCell\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.tte}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Batch\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"batchCode\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.batchCode}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Pr\" [width]=\"50\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"priority\"\n        [summaryFunc]=\"emptySumm\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.priority}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"MKT Seg\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"marketSegment\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.marketSegment}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Plan Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"quantity\"\n        [summaryTemplate]=\"planQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.quantity}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Appr Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"approvedQuantity\"\n        [summaryTemplate]=\"apprQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.approvedQuantity?row.approvedQuantity:0}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Un Appr Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"unapprovedQuantity\" [summaryTemplate]=\"unapprQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.unapprovedQuantity?row.unapprovedQuantity:0}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Appr Del\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"deletedApprQuantity\" [summaryTemplate]=\"apprDeleteQtyCell\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.deletedApprQuantity}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Un Appr Del\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"deletedUnApprQuantity\" [summaryTemplate]=\"unapprDeleteQtyCell\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.deletedUnApprQuantity}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Reserved\" [width]=\"65\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"reservedQuantity\"\n        [summaryTemplate]=\"reservedQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.reservedQuantity?row.reservedQuantity:0}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Loaded\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"loaded\"\n        [summaryTemplate]=\"loadedQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.loaded?row.loaded:0}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Disp\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"dispatchedQuantity\"\n        [summaryTemplate]=\"dispatchedQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.dispatchedQuantity?row.dispatchedQuantity:0}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Avail Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"availableQuantity\" [summaryTemplate]=\"availableQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.availableQuantity}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Total Available\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"totalAvailableQuantity\" [summaryTemplate]=\"totalAvailableQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totalAvailableQuantity}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\" Qty to be Appr\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"approvalQuantity\" [summaryFunc]=\"emptySumm\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <ng-container *ngIf=\"row.status !== 'COMPLETED'\">\n            <div class=\"edit-field\" title=\"Double click to edit\"\n              (click)=\"ApprovalEditing[rowIndex + '-approvalQuantity'] = true\"\n              *ngIf=\"!ApprovalEditing[rowIndex + '-approvalQuantity']\">\n              {{row.approvalQuantity}}\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <div *ngIf=\"ApprovalEditing[rowIndex + '-approvalQuantity']\">\n              <input type=\"text\" class=\"table-input\" [value]=\"(row.approvalQuantity!=0)?row.approvalQuantity:''\"\n                (input)=\"editApprovalQuantity($event,row,'approvalQuantity')\" oncopy=\"return false\" oncut=\"return false\"\n                onpaste=\"return false\" (keypress)=\"service.numberOnly($event)\">\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"row.status == 'COMPLETED'\">\n            {{row.approvalQuantity}}\n          </ng-container>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Qty to be Un Appr\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"unapprovalQuantity\" [summaryFunc]=\"emptySumm\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <ng-container *ngIf=\"row.status !== 'COMPLETED'\">\n            <div class=\"edit-field\" title=\"Double click to edit\"\n              (click)=\"ApprovalEditing[rowIndex + '-unapprovalQuantity'] = true\"\n              *ngIf=\"!ApprovalEditing[rowIndex + '-unapprovalQuantity']\">\n              {{row.unapprovalQuantity?row.unapprovalQuantity:0}}\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <div *ngIf=\"ApprovalEditing[rowIndex + '-unapprovalQuantity']\">\n              <input type=\"text\" class=\"table-input\" [value]=\"(row.unapprovalQuantity != 0)?row.unapprovalQuantity:''\"\n                (input)=\"editUnApprovalQuantity($event,row,'unapprovalQuantity')\" oncopy=\"return false\"\n                oncut=\"return false\" onpaste=\"return false\" (keypress)=\"service.numberOnly($event)\">\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"row.status == 'COMPLETED'\">\n            {{row.unapprovalQuantity?row.unapprovalQuantity:0}}\n          </ng-container>\n          <div class=\"clearfix\"></div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Avail TTE\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"availbleTTE\"\n        [summaryTemplate]=\"totalAvailableTTEPercentageCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.availbleTTE | number : '1.2-2' }}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Truck Count\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckCount\"\n        [summaryTemplate]=\"truckPercentageCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.truckCount | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Weight (Kg)\" [width]='60' [resizeable]=\"false\" [sortable]=\"false\" prop=\"Weight\"\n      [summaryTemplate]=\"weightCell\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.weight | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Available Weight (Kg)\" [width]='80' [resizeable]=\"false\" [sortable]=\"false\" prop=\"totalWeight\"\n      [summaryTemplate]=\"totalWeightCell\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totalWeight | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n      <ngx-datatable-column name=\"Weight Util (%)\" [width]='60' [resizeable]=\"false\" [sortable]=\"false\" prop=\"weightUtil\"\n        [summaryTemplate]=\"totalWeightUtilCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.weightUtil | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Volume (CUMTR)\" [width]='70' [resizeable]=\"false\" [sortable]=\"false\" prop=\"Volume\"\n      [summaryTemplate]=\"volumeCell\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.volume | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Available Volume (CUMTR)\" [width]='110' [resizeable]=\"false\" [sortable]=\"false\" prop=\"totalVolume\"\n      [summaryTemplate]=\"totalVolumeCell\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.totalVolume | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n      <ngx-datatable-column name=\"Volume Util (%)\" [width]='80' [resizeable]=\"false\" [sortable]=\"false\" prop=\"volume\"\n        [summaryTemplate]=\"totalVolumeUtilCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.volumeUtil | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Plan Status\" [width]='100' [resizeable]=\"false\" [sortable]=\"false\" prop=\"appStatus\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.status}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Insert User\" [width]=\"145\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"insertUser\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.insertUser}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Update User\" [width]='145' [resizeable]=\"false\" [sortable]=\"false\" prop=\"updateUser\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.updateUser}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Insert Date\" [width]='130' [resizeable]=\"false\" [sortable]=\"false\" prop=\"insertDate\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.insertDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Update Date\" [width]='130' [resizeable]=\"false\" [sortable]=\"false\" prop=\"updateDate\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.updateDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Plan Age (Days)\" [width]='70' [resizeable]=\"false\" [sortable]=\"false\" prop=\"planAge\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.planAge}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Comments\" [width]='100' [resizeable]=\"false\" [sortable]=\"false\" prop=\"comments\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <span [attr.title]=\"row.comments\" (click)=\"showIntegrationMessage(row)\">{{\n            (row.comments?.length>9)? (row.comments | slice:0:9)+'..':(row.comments)}}</span>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Status\" [width]='160' [resizeable]=\"false\" [sortable]=\"false\" prop=\"appStatus\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <button class=\"btn btn-sm lightgreen-button\"\n            [ngClass]=\"(row.appStatus=='APPROVED')?'lightgreen-button':'light-red-color'\">\n            {{row.appStatus}}\n          </button>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column [width]=\"50\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\"\n        [resizeable]=\"false\" [sortable]=\"false\">\n        <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\n          let-selectFn=\"selectFn\" let-row=\"row\" let-rowIndex=\"rowIndex\">\n          <input type=\"checkbox\" [checked]=\"allRowsSelected\"\n            (change)=\"selectFn(!allRowsSelected);onSelectAll($event)\" />\n        </ng-template>\n        <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\" let-row=\"row\"\n          let-rowIndex=\"rowIndex\" let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\n          <input type=\"checkbox\" [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event);onSelect($event,row)\" />\n        </ng-template>\n      </ngx-datatable-column>\n\n      <!-- Footer Template starts -->\n      <ngx-datatable-footer>\n          <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\" let-selectedCount=\"selectedCount\"\n            let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n            <div class=\"page-count\">\n              <span *ngIf=\"selectedCount\">\n                {{selectedCount.toLocaleString()}} Selected | \n              </span>\n              Showing {{(offset * pageSize)+1}} to {{(rowCount>\n              (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n              {{(rowCount)}} records.\n            </div>\n            <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n              [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n              [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n            </datatable-pager>\n          </ng-template>\n        </ngx-datatable-footer>\n        <!-- Footer Template Ends -->\n    </ngx-datatable>\n    <!-- Table bottom grid columns -->\n    <ng-template #tteCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{(tteSum)?(tteSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #planQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{planQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #apprQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{apprQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #unapprQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{unapprQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #apprDeleteQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{apprDeleteQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #unapprDeleteQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{unapprDeleteQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #reservedQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{reservedQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #loadedQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{loadedQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #dispatchedQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{dispatchedQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #availableQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{availableQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalAvailableQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{totalAvailableQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #truckPercentageCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{(TruckPercentageSum)?(TruckPercentageSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalAvailableTTEPercentageCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(totalTTEPercentageSum)?(totalTTEPercentageSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalWeightCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(totalWeightSum)?(totalWeightSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #weightCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(weightSum)?(weightSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalWeightUtilCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(totalWeightUtilSum)?(totalWeightUtilSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #volumeCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(volumeSum)?(volumeSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalVolumeCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(totalVolumeSum)?(totalVolumeSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalVolumeUtilCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(totalVolumeUtilSum)?(totalVolumeUtilSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n  <div align=\"center\" *ngIf=\"planItemInfo.length\">\n    <button mat-raised-button color=\"primary\" class=\"btm-action-btn mb-3\" (click)=\"approvePlan()\">Approve</button>\n  </div>\n</div>\n\n\n\n\n<div id=\"commnetsModal\" class=\"modal fade\" role=\"dialog\" data-backdrop=\"static\" data-keyboard=\"false\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Comments</h4>\n      </div>\n      <div class=\"modal-body\">\n        {{modalComment}}\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/planner/approve-plans/approve-plans.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/planner/approve-plans/approve-plans.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".manulal-plan-header {\n  padding: 5px 0px;\n  margin-bottom: 0px;\n  font-weight: 600; }\n  .manulal-plan-header span {\n    color: #3F2B53;\n    margin-right: 15px; }\n  .manualplan-fields {\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0px; }\n  .manualplan-fields p > i {\n    cursor: pointer; }\n  .manualplan-fields .col-md-3 {\n    padding: 0px 15px; }\n  .manualplan-fields .form-group {\n    margin-bottom: 0; }\n  .manualplan-fields .form-group .mat-form-field .mat-form-field-wrapper {\n      padding-bottom: 0.5em !important; }\n  .show-entries .mat-form-field-label {\n  display: none !important; }\n  .manual-plan-table {\n  margin-top: 10px;\n  width: 100%;\n  overflow: hidden;\n  overflow-x: auto; }\n  .manual-plan-table table {\n    table-layout: fixed;\n    margin-bottom: 0em; }\n  .manual-plan-table table tr {\n      height: 30px; }\n  .manual-plan-table table tr th {\n        width: 150px;\n        padding: 0.3rem; }\n  .manual-plan-table table tr td {\n        width: 150px;\n        padding: 0.25rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhbm5lci9hcHByb3ZlLXBsYW5zL0M6XFxVc2Vyc1xcQW51cmFnU2FpbmlcXERvd25sb2Fkc1xcYXRvbS11aV9vcmlnaW5hbF8yMTA5MjAyMlxcYXRvbS11aS9zcmNcXGFwcFxccGxhbm5lclxcYXBwcm92ZS1wbGFuc1xcYXBwcm92ZS1wbGFucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGxhbm5lci9hcHByb3ZlLXBsYW5zL0M6XFxVc2Vyc1xcQW51cmFnU2FpbmlcXERvd25sb2Fkc1xcYXRvbS11aV9vcmlnaW5hbF8yMTA5MjAyMlxcYXRvbS11aS9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0VBSHBCO0lBS1EsY0NSaUI7SURTakIsa0JBQWtCLEVBQUE7RUFLMUI7RUFDSSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtFQUhoQjtJQUtRLGVBQWUsRUFBQTtFQUx2QjtJQVFRLGlCQUFpQixFQUFBO0VBUnpCO0lBV1EsZ0JBQWdCLEVBQUE7RUFYeEI7TUFjZ0IsZ0NBQWdDLEVBQUE7RUFLaEQ7RUFFUSx3QkFBd0IsRUFBQTtFQUdoQztFQUNJLGdCQUFnQjtFQUNoQixXQUFVO0VBQ1YsZ0JBQWU7RUFDZixnQkFBZSxFQUFBO0VBSm5CO0lBTVEsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBO0VBUDFCO01BU1ksWUFBVyxFQUFBO0VBVHZCO1FBV2dCLFlBQVc7UUFDWCxlQUFjLEVBQUE7RUFaOUI7UUFlZ0IsWUFBVztRQUNYLGdCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGFubmVyL2FwcHJvdmUtcGxhbnMvYXBwcm92ZS1wbGFucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9taXhpbnMnO1xuXG4ubWFudWxhbC1wbGFuLWhlYWRlcntcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHNwYW57XG4gICAgICAgIGNvbG9yOiAkZGFyay1jb2xvci10aGVtZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAvLyBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxufVxuLm1hbnVhbHBsYW4tZmllbGRze1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHAgPiBpe1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5jb2wtbWQtM3tcbiAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XG4gICAgfVxuICAgIC5mb3JtLWdyb3Vwe1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uc2hvdy1lbnRyaWVze1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5tYW51YWwtcGxhbi10YWJsZXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIG92ZXJmbG93LXg6YXV0bztcbiAgICB0YWJsZXtcbiAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMGVtO1xuICAgICAgICB0cntcbiAgICAgICAgICAgIGhlaWdodDozMHB4O1xuICAgICAgICAgICAgdGh7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTUwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowLjNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZHtcbiAgICAgICAgICAgICAgICB3aWR0aDoxNTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjAuMjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkdGhlbWUtcHVycGxlLWJhY2tncm91bmQtY29sb3I6I0ZBRjlGRTtcbiRkYXJrLWNvbG9yLXRoZW1lOiMzRjJCNTM7XG4kdGhlbWUtcHVycGxlLWNvbG9yOiM1QTMwOTQ7XG4kbGlnaHQtY29sb3ItdGhlbWU6I2Q0YjZmZjtcbiRtZWRpdW0tY29sb3ItdGhlbWU6ICM3NzU4OTk7XG4kdGhlbWUtZ3JleTojYWFhO1xuJHRoZW1lLWxpZ2h0LWdyZXk6ICNjY2M7XG4kdGhlbWUtd2hpdGU6I2ZmZmZmZjtcbiR0aGVtZS1ibGFjazojMDAwO1xuJHRoZW1lLWJsdWUtY29sb3I6IzIxOTZmMztcbiR0aGVtZS1ncmVlbi1jb2xvcjojNDE3NTA1O1xuJHRoZW1lLWxpZ2h0LWdyZWVuLWNvbG9yOiNCOEU5ODY7XG4kdGhlbWUtbGlnaHQtYnJvd24tY29sb3I6I0VDRTE1NSA7XG4kdGhlbWUtYnJvd24tY29sb3I6IzlCOTMyQjtcbiR0aGVtZS1icm93bi1ib3JkZXI6I0NGQzMyRDtcbiR0aGVtZS1zZWFyY2hib3gtYmFja2dyb3VuZC1jb2xvcjojRjlGNEZGO1xuJHRoZW1lLW9wYWN0aXR5LWJvcmRlcjojYmU5NmY1O1xuJHRoZW1lLXJlZC10ZXh0OiNDNzNEM0Q7XG4kdGhlbWUtcmVkLWJhY2tncm91bmQtY29sb3I6ICNGQ0FFQUU7XG4kdGhlbWVuLXJlZC1ib3JkZXItY29sb3I6I0VENzM3MztcbiR0YWJsZS1ib3JkZXItY29sb3I6ICNkZWUyZTY7XG4kc2Vjb25kYXJ5LXRoZW1lOiAjYzI1NjNmO1xuJHNlY29uZGFyeS1saWdodC10aGVtZTogI2VmY2NjNTsiXX0= */"

/***/ }),

/***/ "./src/app/planner/approve-plans/approve-plans.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/planner/approve-plans/approve-plans.component.ts ***!
  \******************************************************************/
/*! exports provided: ApprovePlansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovePlansComponent", function() { return ApprovePlansComponent; });
/* harmony import */ var _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/helper-service/helper-service.service */ "./src/app/services/helper-service/helper-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _public_date_adapters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/date.adapters */ "./src/app/public/date.adapters.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_public_approve_plan_errors_approve_plan_errors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/public/approve-plan-errors/approve-plan-errors.component */ "./src/app/public/approve-plan-errors/approve-plan-errors.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ApprovePlansComponent = /** @class */ (function () {
    function ApprovePlansComponent(service, toastr, helperService, activatedRoute, dialog) {
        this.service = service;
        this.toastr = toastr;
        this.helperService = helperService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.ApprovalEditing = {};
        this.isShow = true;
        this.planData = [];
        this.page = {
            limit: 200,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.materialGroup = [];
        this.openPlanSourceList = [];
        this.destination = '';
        this.destinationDesc = '';
        this.descriptionList = [];
        this.destinationList = [];
        this.pendingPlanList = [];
        this.materilcodelist = [];
        this.materialDescription = '';
        this.isLoading = false;
        this.minDate = new Date();
        this.selected = [];
        this.planItemInfo = [];
        this.allRowsSelected = false;
        this.statuses = [];
        this.filterPlanStatus = [];
        this.mktsegmentList = [];
        this.categoryList = [];
        this.currentDate = this.helperService.getTodayDate();
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.fromDispatchDate = '';
        this.toDispatchDate = '';
        this.toDate = '';
        this.fromDate = '';
        this.totalTruckPercentage = 0;
        this.totalTTEPercentageSum = 0;
        this.tteSum = 0;
        this.planQtySum = 0;
        this.apprQtySum = 0;
        this.unapprQtySum = 0;
        this.apprDeleteQtySum = 0;
        this.unapprDeleteQtySum = 0;
        this.reservedQtySum = 0;
        this.loadedQtySum = 0;
        this.dispatchedQtySum = 0;
        this.availableQtySum = 0;
        this.totalAvailableQtySum = 0;
        this.TruckPercentageSum = 0;
        this.weightSum = 0;
        this.volumeSum = 0;
        this.totalWeightSum = 0;
        this.totalWeightUtilSum = 0;
        this.totalVolumeSum = 0;
        this.totalVolumeUtilSum = 0;
        this.priorityList = [];
        this.priority = [];
        this.sourceCodeList = [];
        this.freezeLeftValue = true;
    }
    ApprovePlansComponent.prototype.ngDoCheck = function () {
        var width = $(window).width();
        if (width < 1024) {
            this.freezeLeftValue = false;
        }
        else {
            this.freezeLeftValue = true;
        }
    };
    ApprovePlansComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "dispatch-plan");
        this.statuses = _constants__WEBPACK_IMPORTED_MODULE_8__["constants"].planStatus;
        this.filterPlanStatus = _constants__WEBPACK_IMPORTED_MODULE_8__["constants"].filterPlanStatus;
        // (localStorage.getItem("sourceID") != null && localStorage.getItem("sourceID") != '') ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
        this.source = localStorage.getItem("sourceID");
        this.pageSize = 10;
        var routePlanId = this.activatedRoute.snapshot.params['planId'];
        this.planId = routePlanId;
        this.roles = _constants__WEBPACK_IMPORTED_MODULE_8__["constants"].roles;
        this.check_Role_DP_REP = this.service.checkRole();
        this.planStatusList = _constants__WEBPACK_IMPORTED_MODULE_8__["constants"].planStatusList;
        if (this.isSoureDisable()) {
            this.sourceCode = localStorage.getItem("sourceID");
            (localStorage.getItem("sourceID") != null && localStorage.getItem("sourceID") != '') ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
        }
        if (this.service.isDPREPRole() || this.service.CheckExtWareHouse()) {
            this.getPlansSourceList();
        }
        else {
            this.openPlanSourceList.push(localStorage.getItem("sourceID"));
        }
        //check the page is search with Particular plan Id  or not ,If it true 
        this.getPlanData(routePlanId);
        //for getting category master data
        this.getCategoryMasterData();
        this.getMarketSegment();
        this.getPriorityList();
    };
    ApprovePlansComponent.prototype.isSoureDisable = function () {
        // source Not disable for DP_REP, L1_MGR, L2_MGR role & External warehouses, if roles not belongs to DP_REP & External wareHouse we are returning boolean value which makes  disable 
        if ((this.check_Role_DP_REP !== this.roles.planner3 && this.check_Role_DP_REP !== this.roles.L1MGR && this.check_Role_DP_REP !== this.roles.L2MGR)
            && (!this.service.CheckExtWareHouse())) {
            return true;
        }
        else {
            return false;
        }
    };
    // For getting all the Open Plans source List for DPREP
    ApprovePlansComponent.prototype.getPlansSourceList = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getOpenPlansSourceLocs).subscribe(function (response) {
            if (response['statusCode'] == '200') {
                _this.openPlanSourceList = response['data'];
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!');
            }
        });
    };
    //check the page is search with Particular plan Id  or not ,If it true 
    ApprovePlansComponent.prototype.getPlanData = function (routePlanId) {
        if (routePlanId) {
            var bodyData = {
                'planId': routePlanId,
                'statuses': this.filterPlanStatus,
                // 'sourceLocation': this.source,
                'pageLength': this.page.limit,
                'sourceCodeList': this.sourceCodeList
            };
            this.getApprovePlan(bodyData);
        }
        else {
            //get the all plans which are for dispach(successfully created)
            var bodyData = {
                'statuses': this.filterPlanStatus,
                // 'sourceLocation': this.source,
                'fromDispatchDate': this.currentDate,
                'toDispatchDate': this.currentDate,
                'pageLength': this.page.limit,
                'sourceCodeList': this.sourceCodeList
            };
            this.fromDate = this.currentDateAsString;
            this.toDate = this.fromDate;
            this.getApprovePlan(bodyData);
        }
    };
    //for getting approve data
    ApprovePlansComponent.prototype.getApprovePlan = function (bodyData) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.planinfo, bodyData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.clearAllSum();
                var responseData = response['data'].planItems;
                // this.standredFTLTTE = response['data'].standardFtlTteCapacity;
                // this.standardFTLWeight = response['data'].standardFtlWeight;
                // this.standardFTLVolumne = response['data'].standardFTLVolumne;
                // responseData.forEach(element => {
                //   // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
                //   if (this.service.checkRole() == this.roles.rdc_PLN) {
                //     element.truckPercentage = (((element.quantity ? element.quantity : 0) * (element.tte ? element.tte : 0)) / this.standredFTLTTE);
                //     element.availableTTE = ((element.quantity ? element.quantity : 0) * (element.tte ? element.tte : 0));
                //     // Weight Util values calculations
                //     element.weightUtil = ((((element.quantity ? element.quantity : 0) * (element.weight ? element.weight : 0)) / this.standardFTLWeight) * 100);
                //     // Volume Util values calculations
                //     element.volumeUtil = ((((element.quantity ? element.quantity : 0) * (element.volume ? element.volume : 0)) / this.standardFTLVolumne) * 100);
                //   } else {
                //     element.truckPercentage = (((element.availableQuantity ? element.availableQuantity : 0) * (element.tte ? element.tte : 0)) / this.standredFTLTTE);
                //     element.availableTTE = ((element.availableQuantity ? element.availableQuantity : 0) * (element.tte ? element.tte : 0));
                //     // Weight Util values calculations
                //     element.weightUtil = ((((element.availableQuantity ? element.availableQuantity : 0) * (element.weight ? element.weight : 0)) / this.standardFTLWeight) * 100);
                //     // Volume Util values calculations
                //     element.volumeUtil = ((((element.availableQuantity ? element.availableQuantity : 0) * (element.volume ? element.volume : 0)) / this.standardFTLVolumne) * 100);
                //   }
                // });
                _this.pendingPlanList = responseData.slice();
                _this.page.count = response['data'].total;
                // this.page.limit = response['data'].pageLength
                _this.isLoading = false;
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'], "! Error");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //set value destination
    ApprovePlansComponent.prototype.setDestination = function (value) {
        //  this.destinationDesc = value;
        this.destination = value;
    };
    //set value to destination description
    ApprovePlansComponent.prototype.setDestDescription = function (value) {
        this.destinationDesc = value;
    };
    ApprovePlansComponent.prototype.getPriorityList = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getPriorityList).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.priorityList = response['data'];
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!');
            }
        }, function (err) {
            _this.toastr.error('Some Thing Went Wrong !!!');
        });
    };
    ApprovePlansComponent.prototype.getMarketSegment = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getMarketSegment).subscribe(function (response) {
            if (response['statusCode'] == '200') {
                _this.mktsegmentList = response['data'];
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!');
            }
        });
    };
    ApprovePlansComponent.prototype.getUserDestinationList = function (event) {
        var _this = this;
        this.destination = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getDestinationDescriptionDataList + event.target.value).subscribe(function (response) {
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
    //for getting category master data
    ApprovePlansComponent.prototype.getCategoryMasterData = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.categoryMasterData).subscribe(function (response) {
            _this.categoryList = response['data'];
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
        });
    };
    ApprovePlansComponent.prototype.onSelect = function (event, data) {
        if (event.target.checked) {
            // if the checkbox checked we need update plan Qty based on the status
            // if the status  APPROVAL PENDING  we need populate Plan Qty
            // if the sattus  APPROVAL_PART we need update only UnAppr QTY
            if (data.appStatus == 'APPROVAL PENDING') {
                data.approvalQuantity = data.quantity;
            }
            else if (data.appStatus == "APPROVED PART") {
                data.approvalQuantity = data.unapprovedQuantity;
            }
            this.planItemInfo.push(data);
        }
        else {
            data.approvalQuantity = 0;
            data.unapprovalQuantity = 0;
            var index = this.planItemInfo.indexOf(data);
            this.planItemInfo.splice(index, 1);
        }
        this.tteSum = this.planItemInfo.reduce(function (sum, _a) {
            var tte = _a.tte;
            return sum + tte;
        }, 0);
        this.planQtySum = this.planItemInfo.reduce(function (sum, _a) {
            var quantity = _a.quantity;
            return sum + quantity;
        }, 0);
        this.apprQtySum = this.planItemInfo.reduce(function (sum, _a) {
            var approvedQuantity = _a.approvedQuantity;
            return sum + approvedQuantity;
        }, 0);
        this.unapprQtySum = this.planItemInfo.reduce(function (sum, _a) {
            var unapprovedQuantity = _a.unapprovedQuantity;
            return sum + unapprovedQuantity;
        }, 0);
        this.apprDeleteQtySum = this.planItemInfo.reduce(function (sum, _a) {
            var deletedApprQuantity = _a.deletedApprQuantity;
            return sum + deletedApprQuantity;
        }, 0);
        this.unapprDeleteQtySum = this.planItemInfo.reduce(function (sum, _a) {
            var deletedUnApprQuantity = _a.deletedUnApprQuantity;
            return sum + deletedUnApprQuantity;
        }, 0);
        this.reservedQtySum = this.planItemInfo.reduce(function (sum, _a) {
            var reservedQuantity = _a.reservedQuantity;
            return sum + reservedQuantity;
        }, 0);
        this.loadedQtySum = this.planItemInfo.reduce(function (sum, _a) {
            var loaded = _a.loaded;
            return sum + loaded;
        }, 0);
        this.dispatchedQtySum = this.planItemInfo.reduce(function (sum, _a) {
            var dispatchedQuantity = _a.dispatchedQuantity;
            return sum + dispatchedQuantity;
        }, 0);
        this.availableQtySum = this.planItemInfo.reduce(function (sum, _a) {
            var availableQuantity = _a.availableQuantity;
            return sum + availableQuantity;
        }, 0);
        this.totalAvailableQtySum = this.planItemInfo.reduce(function (sum, _a) {
            var totalAvailableQuantity = _a.totalAvailableQuantity;
            return sum + totalAvailableQuantity;
        }, 0);
        this.totalTTEPercentageSum = this.planItemInfo.reduce(function (sum, _a) {
            var availbleTTE = _a.availbleTTE;
            return sum + availbleTTE;
        }, 0);
        this.TruckPercentageSum = this.planItemInfo.reduce(function (sum, _a) {
            var truckCount = _a.truckCount;
            return sum + truckCount;
        }, 0);
        this.weightSum = this.planItemInfo.reduce(function (sum, _a) {
            var weight = _a.weight;
            return sum + weight;
        }, 0);
        this.totalWeightSum = this.planItemInfo.reduce(function (sum, _a) {
            var totalWeight = _a.totalWeight;
            return sum + totalWeight;
        }, 0);
        this.totalWeightUtilSum = this.planItemInfo.reduce(function (sum, _a) {
            var weightUtil = _a.weightUtil;
            return sum + weightUtil;
        }, 0);
        this.volumeSum = this.planItemInfo.reduce(function (sum, _a) {
            var volume = _a.volume;
            return sum + volume;
        }, 0);
        this.totalVolumeSum = this.planItemInfo.reduce(function (sum, _a) {
            var totalVolume = _a.totalVolume;
            return sum + totalVolume;
        }, 0);
        this.totalVolumeUtilSum = this.planItemInfo.reduce(function (sum, _a) {
            var volumeUtil = _a.volumeUtil;
            return sum + volumeUtil;
        }, 0);
    };
    ApprovePlansComponent.prototype.onSelectAll = function (event) {
        var _this = this;
        this.planItemInfo = [];
        this.TruckPercentageSum = 0;
        this.totalTTEPercentageSum = 0;
        this.pendingPlanList.forEach(function (data) {
            _this.onSelect(event, data);
        });
    };
    // Clearing all the sum values after success response
    ApprovePlansComponent.prototype.clearAllSum = function () {
        this.tteSum = 0;
        this.planQtySum = 0;
        this.apprQtySum = 0;
        this.unapprQtySum = 0;
        this.apprDeleteQtySum = 0;
        this.unapprDeleteQtySum = 0;
        this.reservedQtySum = 0;
        this.loadedQtySum = 0;
        this.dispatchedQtySum = 0;
        this.availableQtySum = 0;
        this.totalAvailableQtySum = 0;
        this.totalTTEPercentageSum = 0;
        this.TruckPercentageSum = 0;
        this.weightSum = 0;
        this.totalWeightSum = 0;
        this.totalWeightUtilSum = 0;
        this.volumeSum = 0;
        this.totalVolumeSum = 0;
        this.totalVolumeUtilSum = 0;
    };
    ApprovePlansComponent.prototype.onActivate = function (event) {
        if (event.type == 'checkbox') {
            //Stop event propagation and let onSelect() work
            event.event.stopPropagation();
        }
        else {
            //Do somethings when you click on rows
        }
    };
    // onPageSizeChanged(event) {
    //   this.page.limit = event;
    //   this.page.pageSize = this.pageSize;
    //   this.datatablePageData(this.page);
    // }
    ApprovePlansComponent.prototype.datatablePageData = function (pageInfo) {
        this.planItemInfo = [];
        this.pendingPlanList = [];
        this.selected = [];
        this.index = pageInfo.offset;
        this.forDateValidation();
        var bodyData = {
            'fromDispatchDate': this.fromDispatchDate,
            'toDispatchDate': this.toDispatchDate,
            'index': pageInfo.offset,
            'pageLength': this.page.limit,
            'destinationCode': this.destination,
            'marketSegment': this.mktsegment,
            'materialCode': this.materialCode,
            'materialDescription': this.materialDescription,
            'materialGroup': this.materialGroup,
            'planId': this.planId,
            'status': this.status,
            'statuses': this.filterPlanStatus,
            // 'sourceLocation': this.source,
            'planStatus': this.planStatus,
            'insertUser': this.insertUser,
            // 'sourceCode': this.sourceCode,
            'priorityList': this.priority,
            'sourceCodeList': this.sourceCodeList
        };
        this.getApprovePlan(bodyData);
    };
    ApprovePlansComponent.prototype.addEvent = function (type, event) {
        if (event.target.value) {
            var checkToDate = this.toDate;
            console.log("Check--->1", checkToDate);
            if (this.toDate == this.currentDateAsString) {
                // on page load we are defaluting the  to date with string. Comparing string with date is not possible
                // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
                checkToDate = new Date();
                console.log("Check--->2", checkToDate);
            }
            /* Checking if selected from date greater than to date.
           Clearing the toDate field when from date greater than to date */
            if (this.toDate && (this.fromDate > checkToDate)) {
                this.toDate = '';
            }
        }
    };
    // clear the data what the user entered
    ApprovePlansComponent.prototype.clearAll = function () {
        this.destination = '';
        this.mktsegment = [];
        this.materialCode = "";
        this.materialDescription = "";
        this.destinationDesc = "";
        this.descriptionList = [];
        this.materialGroup = [];
        this.planId = null;
        this.status = [];
        this.destinationList = [];
        this.materilcodelist = [];
        this.fromDate = '';
        this.toDate = '';
        this.planStatus = [];
        this.insertUser = '';
        this.sourceCode = '';
        this.sourceList = [];
        this.priority = [];
        this.sourceCodeList = [];
        if (this.isSoureDisable()) {
            this.sourceCode = localStorage.getItem("sourceID");
            (localStorage.getItem("sourceID") != null && localStorage.getItem("sourceID") != '') ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
        }
    };
    //refersh data
    ApprovePlansComponent.prototype.refreshData = function () {
        this.ApprovalEditing = {};
        this.table.offset = 0;
        this.selected = [];
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.fromDate = this.currentDateAsString;
        this.toDate = this.fromDate;
        this.pendingPlanList = [];
        this.planItemInfo = [];
        this.clearAll();
        this.clearAllSum();
        this.fromDate = this.currentDateAsString;
        this.toDate = this.fromDate;
        this.forDateValidation();
        var bodyData = {
            'fromDispatchDate': this.fromDispatchDate,
            'toDispatchDate': this.toDispatchDate,
            'planId': this.planId,
            'statuses': this.filterPlanStatus,
            'pageLength': this.page.limit,
            'sourceCodeList': this.sourceCodeList
        };
        this.getApprovePlan(bodyData);
    };
    ApprovePlansComponent.prototype.getUserSearchData = function (event) {
        var _this = this;
        this.destinationDesc = '';
        if (event.target.value.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            var index = 0;
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?destination=' + this.destination + "&index=" + index).subscribe(function (response) {
                _this.destinationList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //filter material code by user input
    ApprovePlansComponent.prototype.filterMaterialCode = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        this.materialDescription = '';
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.materilcodelist = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?materialCode=' + filtervalue).subscribe(function (response) {
                _this.materilcodelist = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
        if (filtervalue == '') {
            this.materialDescription = '';
            this.materilcodelist = [];
        }
        if (filtervalue.length > 1 && event.keyCode == 13) {
            this.materilcodelist.forEach(function (item) {
                if (item.value == filtervalue) {
                    _this.setMaterialDescription(item.description);
                }
            });
        }
    };
    // Date Validation
    ApprovePlansComponent.prototype.forDateValidation = function () {
        if (this.fromDate != '' && this.fromDate != null) {
            this.fromDispatchDate = moment__WEBPACK_IMPORTED_MODULE_9__(new Date(this.fromDate)).format("DD/MM/YYYY");
        }
        else {
            this.fromDispatchDate = '';
        }
        if (this.toDate != '' && this.toDate != null) {
            this.toDispatchDate = moment__WEBPACK_IMPORTED_MODULE_9__(new Date(this.toDate)).format("DD/MM/YYYY");
        }
        else {
            this.toDispatchDate = '';
        }
    };
    //set value for material description
    ApprovePlansComponent.prototype.setMaterialDescription = function (value) {
        this.materialDescription = value;
    };
    ApprovePlansComponent.prototype.plannerSearch = function () {
        this.ApprovalEditing = {};
        this.selected = [];
        this.table.offset = 0;
        this.pendingPlanList = [];
        this.planItemInfo = [];
        this.forDateValidation();
        var bodyData = {
            'fromDispatchDate': this.fromDispatchDate,
            'toDispatchDate': this.toDispatchDate,
            'destinationCode': this.destination,
            // 'index': this.page.offset,
            'marketSegment': this.mktsegment,
            'materialCode': this.materialCode,
            'materialDescription': this.materialDescription,
            'materialGroup': this.materialGroup,
            'pageLength': this.page.limit,
            'planId': this.planId,
            'status': this.status,
            'statuses': this.filterPlanStatus,
            // 'sourceLocation': this.source,
            'planStatus': this.planStatus,
            'insertUser': this.insertUser,
            // 'sourceCode': this.sourceCode,
            'priorityList': this.priority,
            'sourceCodeList': this.sourceCodeList
        };
        if (this.fromDate != '' && this.fromDate != null) {
            if (this.toDate != '' && this.toDate != null) {
                this.pendingPlanList = [];
                this.getApprovePlan(bodyData);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.getApprovePlan(bodyData);
        }
    };
    ApprovePlansComponent.prototype.approvePlan = function () {
        var _this = this;
        this.isLoading = true;
        var approvePlanInfo = {
            planItems: this.planItemInfo,
            index: this.page.offset,
            pageLength: this.page.limit
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.approvePlanInfo, approvePlanInfo).subscribe(function (response) {
            _this.isLoading = false;
            //get the fresh data of approve plans data
            if (response['statusCode'] == 200) {
                _this.ApprovalEditing = {};
                var responseData = response['data'];
                _this.selected = [];
                _this.planItemInfo = [];
                _this.clearAllSum();
                responseData.planItems.forEach(function (element) {
                    // // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
                    // if (this.service.checkRole() == this.roles.rdc_PLN) {
                    //   element.truckPercentage = (((element.quantity ? element.quantity : 0) * (element.tte ? element.tte : 0)) / this.standredFTLTTE);
                    //   element.availableTTE = ((element.quantity ? element.quantity : 0) * (element.tte ? element.tte : 0));
                    //   // Weight Util values calculations
                    //   element.weightUtil = ((((element.quantity ? element.quantity : 0) * (element.weight ? element.weight : 0)) / this.standardFTLWeight) * 100);
                    //   // Volume Util values calculations
                    //   element.volumeUtil = ((((element.quantity ? element.quantity : 0) * (element.volume ? element.volume : 0)) / this.standardFTLVolumne) * 100);
                    // } else {
                    //   element.truckPercentage = (((element.availableQuantity ? element.availableQuantity : 0) * (element.tte ? element.tte : 0)) / this.standredFTLTTE);
                    //   element.availableTTE = ((element.availableQuantity ? element.availableQuantity : 0) * (element.tte ? element.tte : 0));
                    //   // Weight Util values calculations
                    //   element.weightUtil = ((((element.availableQuantity ? element.availableQuantity : 0) * (element.weight ? element.weight : 0)) / this.standardFTLWeight) * 100);
                    //   // Volume Util values calculations
                    //   element.volumeUtil = ((((element.availableQuantity ? element.availableQuantity : 0) * (element.volume ? element.volume : 0)) / this.standardFTLVolumne) * 100);
                    // }
                    var updatebleIndex = _this.pendingPlanList.findIndex(function (value) { return value.id == element.id; });
                    _this.pendingPlanList[updatebleIndex] = element;
                    _this.pendingPlanList = _this.pendingPlanList.slice();
                });
                _this.toastr.success(response['message']);
            }
            else {
                _this.openErrorDialog(response['data']);
                // this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
                _this.isLoading = false;
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //open Error list Dialog
    ApprovePlansComponent.prototype.openErrorDialog = function (value) {
        var dialogRef = this.dialog.open(src_app_public_approve_plan_errors_approve_plan_errors_component__WEBPACK_IMPORTED_MODULE_10__["ApprovePlanErrorsComponent"], {
            // width: '250px',
            data: { errorData: value },
            disableClose: true
        });
    };
    // edit  apporoval quantity
    ApprovePlansComponent.prototype.updateApprovalPlan = function (event, cell, rowIndex, row) {
        var getIndex = this.pendingPlanList.findIndex(function (data) { return data.id == row.id; });
        this.pendingPlanList[getIndex][cell] = Number(event.target.value);
        this.pendingPlanList = this.pendingPlanList.slice();
    };
    // update the values which was given user
    ApprovePlansComponent.prototype.editApprovalQuantity = function (event, row, cell) {
        //let find the index of modified
        var modifiedIndex = this.pendingPlanList.findIndex(function (item) { return (item.planId == row.planId) && (item.lineNumber == row.lineNumber); });
        //Make the Qty to be UnApproved to be Zero if entered
        this.pendingPlanList[modifiedIndex]['unapprovalQuantity'] = 0;
        //If user enter Negitive values
        if (Number(event.target.value) < 0) {
            this.pendingPlanList[modifiedIndex][cell] = 0;
            event.target.value = 0;
        }
        else if ((row.quantity - row.approvedQuantity) < Number(event.target.value)) {
            event.target.value = 0;
            this.pendingPlanList[modifiedIndex][cell] = 0;
            this.toastr.error('Invalid Quantity to be approved');
        }
        else {
            this.pendingPlanList[modifiedIndex][cell] = Number(event.target.value);
        }
        this.pendingPlanList = this.pendingPlanList.slice();
    };
    ApprovePlansComponent.prototype.editUnApprovalQuantity = function (event, row, cell) {
        var repsonsedata = row;
        //let find the index of modified
        var modifiedIndex = this.pendingPlanList.findIndex(function (item) { return (item.planId == row.planId) && (item.lineNumber == row.lineNumber); });
        //Make the Qty to be UnApproved to be Zero if entered
        this.pendingPlanList[modifiedIndex]['approvalQuantity'] = 0;
        //If user enter Negitive values
        if (Number(event.target.value) < 0) {
            this.pendingPlanList[modifiedIndex][cell] = 0;
            event.target.value = 0;
        }
        else if (row.approvedQuantity == 0) {
            event.target.value = 0;
            this.pendingPlanList[modifiedIndex][cell] = 0;
            this.toastr.error("please approve quantity before unapproved !");
        }
        else if ((Number(event.target.value) > repsonsedata.approvedQuantity)) {
            this.pendingPlanList[modifiedIndex][cell] = 0;
            event.target.value = 0;
            this.toastr.error("Un Approval Quantity should not greater than approved Quantity");
        }
        else {
            this.pendingPlanList[modifiedIndex][cell] = Number(event.target.value);
        }
        this.pendingPlanList = this.pendingPlanList.slice();
    };
    //show the filter
    ApprovePlansComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    //export excel data
    ApprovePlansComponent.prototype.export = function () {
        var _this = this;
        if (this.pendingPlanList.length > 0) {
            this.isLoading = true;
            this.forDateValidation();
            var data = {
                'fromDispatchDate': this.fromDispatchDate,
                'toDispatchDate': this.toDispatchDate,
                'destinationCode': this.destination,
                // 'index': this.page.offset,
                'marketSegment': this.mktsegment,
                'materialCode': this.materialCode,
                'materialDescription': this.materialDescription,
                'materialGroup': this.materialGroup,
                'pageLength': this.page.count,
                'planId': this.planId,
                'status': this.status,
                'statuses': this.filterPlanStatus,
                // 'sourceLocation': this.source,
                'planStatus': this.planStatus,
                'insertUser': this.insertUser,
                // 'sourceCode': this.sourceCode,
                'priorityList': this.priority,
                'sourceCodeList': this.sourceCodeList,
            };
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.planinfo, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var newApprovePlanData = response['data'].planItems;
                    var excelRawData = newApprovePlanData;
                    var newExcelData = [];
                    var data_1;
                    for (var i = 0; i < excelRawData.length; i++) {
                        // // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
                        // // For FGS : The Avail TTE and Truck count should be based on Available Qty
                        // let availbleTTE; let truckCount;
                        // if (this.service.checkRole() == this.roles.rdc_PLN) {
                        //   availbleTTE = ((excelRawData[i].quantity ? excelRawData[i].quantity : 0) * (excelRawData[i].tte ? excelRawData[i].tte : 0));
                        //   truckCount = (((excelRawData[i].quantity ? excelRawData[i].quantity : 0) * (excelRawData[i].tte ? excelRawData[i].tte : 0)) / this.standredFTLTTE);
                        //   // Weight Util values calculations
                        //   excelRawData[i].weightUtil = ((((excelRawData[i].quantity ? excelRawData[i].quantity : 0) * (excelRawData[i].weight ? excelRawData[i].weight : 0)) / this.standardFTLWeight) * 100);
                        //   // Volume Util values calculations
                        //   excelRawData[i].volumeUtil = ((((excelRawData[i].quantity ? excelRawData[i].quantity : 0) * (excelRawData[i].volume ? excelRawData[i].volume : 0)) / this.standardFTLVolumne) * 100);
                        // } else {
                        //   availbleTTE = ((excelRawData[i].availableQuantity ? excelRawData[i].availableQuantity : 0) * (excelRawData[i].tte ? excelRawData[i].tte : 0));
                        //   truckCount = (((excelRawData[i].availableQuantity ? excelRawData[i].availableQuantity : 0) * (excelRawData[i].tte ? excelRawData[i].tte : 0)) / this.standredFTLTTE);
                        //   // Weight Util values calculations
                        //   excelRawData[i].weightUtil = ((((excelRawData[i].availableQuantity ? excelRawData[i].availableQuantity : 0) * (excelRawData[i].weight ? excelRawData[i].weight : 0)) / this.standardFTLWeight) * 100);
                        //   // Volume Util values calculations
                        //   excelRawData[i].volumeUtil = ((((excelRawData[i].availableQuantity ? excelRawData[i].availableQuantity : 0) * (excelRawData[i].volume ? excelRawData[i].volume : 0)) / this.standardFTLVolumne) * 100);
                        // }
                        data_1 = {
                            "plan Id": excelRawData[i].planId,
                            "Dispatch Date": _this.service.customDateFormat(excelRawData[i].dispatchDate),
                            "Source": excelRawData[i].sourceLocation,
                            "Destination": excelRawData[i].destinationLocation,
                            "Material Code": excelRawData[i].itemId,
                            "Material Description": excelRawData[i].itemDescription,
                            "Dest Description": excelRawData[i].destinationDescription,
                            "Category": excelRawData[i].category,
                            "TTE": +excelRawData[i].tte,
                            "Batch code": excelRawData[i].batchCode,
                            "Priority": excelRawData[i].priority,
                            "MKT segment": excelRawData[i].marketSegment,
                            "Plan Quantity": +excelRawData[i].quantity,
                            "Approved Quantity": +excelRawData[i].approvedQuantity,
                            "Un Approved Quantity": +excelRawData[i].unapprovedQuantity,
                            "Approved Deleted": +excelRawData[i].deletedApprQuantity,
                            "UnApproved Deleted": +excelRawData[i].deletedUnApprQuantity,
                            "Reserved": +excelRawData[i].reservedQuantity,
                            "Loaded": +excelRawData[i].loaded,
                            "Dispatched Quantity": +excelRawData[i].dispatchedQuantity,
                            "Available Quantity": +excelRawData[i].availableQuantity,
                            "Total Available Quantity": +excelRawData[i].totalAvailableQuantity,
                            "Quantity to be Approval": +excelRawData[i].approvalQuantity,
                            "Quantity to be UnApproval": +excelRawData[i].unapprovalQuantity,
                            "Avail TTE": excelRawData[i].availbleTTE ? +excelRawData[i].availbleTTE.toFixed(2) : 0,
                            "Truck Count": excelRawData[i].truckCount ? +excelRawData[i].truckCount.toFixed(2) : 0,
                            "Weight (Kg)": excelRawData[i].weight ? +excelRawData[i].weight.toFixed(2) : 0,
                            "Available Weight (Kg)": excelRawData[i].totalWeight ? +excelRawData[i].totalWeight.toFixed(2) : 0,
                            "Weight Util (%)": excelRawData[i].weightUtil ? +excelRawData[i].weightUtil.toFixed(2) : 0,
                            "Volume (CUMTR)": excelRawData[i].volume ? +excelRawData[i].volume.toFixed(2) : 0,
                            "Available Volume (CUMTR)": excelRawData[i].totalVolume ? +excelRawData[i].totalVolume.toFixed(2) : 0,
                            "Volume Util (%)": excelRawData[i].volumeUtil ? +excelRawData[i].volumeUtil.toFixed(2) : 0,
                            "Plan Status": excelRawData[i].status,
                            "Insert User": excelRawData[i].insertUser,
                            "Update User": excelRawData[i].updateUser,
                            "Insert Date": _this.service.customDateTimeFormat(excelRawData[i].insertDate),
                            "Update Date": _this.service.customDateTimeFormat(excelRawData[i].updateDate),
                            "Plan Age (Days)": excelRawData[i].planAge,
                            "Comments": excelRawData[i].comments,
                            "status": excelRawData[i].appStatus
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_7__["writeFile"](workBook, 'ApprovedPlans.xlsx');
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
    //filter material description 
    ApprovePlansComponent.prototype.filterMaterialDescription = function (event) {
        var _this = this;
        this.materialCode = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.materialDescriptionList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?materialDesc=' + filtervalue).subscribe(function (response) {
                _this.materialDescriptionList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    ApprovePlansComponent.prototype.emptySumm = function () {
        return null;
    };
    // set material code 
    ApprovePlansComponent.prototype.setMaterialCode = function (value) {
        var _this = this;
        setTimeout(function () {
            _this.materialCode = value;
        }, 300);
    };
    // Filter source location
    ApprovePlansComponent.prototype.getfilterSource = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.sourceList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
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
    // show Comments
    ApprovePlansComponent.prototype.showIntegrationMessage = function (row) {
        this.modalComment = row.comments;
        $("#commnetsModal").modal('show');
    };
    ApprovePlansComponent.prototype.onFooterPage = function (data) {
        console.log(data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["DatatableComponent"])
    ], ApprovePlansComponent.prototype, "table", void 0);
    ApprovePlansComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-approve-plans',
            template: __webpack_require__(/*! ./approve-plans.component.html */ "./src/app/planner/approve-plans/approve-plans.component.html"),
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _public_date_adapters__WEBPACK_IMPORTED_MODULE_4__["AppDateAdapter"] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: _public_date_adapters__WEBPACK_IMPORTED_MODULE_4__["APP_DATE_FORMATS"] }
            ],
            styles: [__webpack_require__(/*! ./approve-plans.component.scss */ "./src/app/planner/approve-plans/approve-plans.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__["HelperServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ApprovePlansComponent);
    return ApprovePlansComponent;
}());



/***/ }),

/***/ "./src/app/planner/approve-plans/approve-plans.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/planner/approve-plans/approve-plans.module.ts ***!
  \***************************************************************/
/*! exports provided: approvePlanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approvePlanModule", function() { return approvePlanModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _approve_plans_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approve-plans.component */ "./src/app/planner/approve-plans/approve-plans.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_public_approve_plan_errors_approve_plan_errors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/public/approve-plan-errors/approve-plan-errors.component */ "./src/app/public/approve-plan-errors/approve-plan-errors.component.ts");
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: _approve_plans_component__WEBPACK_IMPORTED_MODULE_4__["ApprovePlansComponent"] },
    { path: ':planId', component: _approve_plans_component__WEBPACK_IMPORTED_MODULE_4__["ApprovePlansComponent"] },
];
var approvePlanModule = /** @class */ (function () {
    function approvePlanModule() {
    }
    approvePlanModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_9__["CustomDatePipeModule"]
            ],
            declarations: [
                _approve_plans_component__WEBPACK_IMPORTED_MODULE_4__["ApprovePlansComponent"],
                src_app_public_approve_plan_errors_approve_plan_errors_component__WEBPACK_IMPORTED_MODULE_8__["ApprovePlanErrorsComponent"]
            ],
            entryComponents: [
                src_app_public_approve_plan_errors_approve_plan_errors_component__WEBPACK_IMPORTED_MODULE_8__["ApprovePlanErrorsComponent"],
                _approve_plans_component__WEBPACK_IMPORTED_MODULE_4__["ApprovePlansComponent"]
            ],
            providers: [],
        })
    ], approvePlanModule);
    return approvePlanModule;
}());



/***/ }),

/***/ "./src/app/public/approve-plan-errors/approve-plan-errors.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/public/approve-plan-errors/approve-plan-errors.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content class=\"mat-typography\">\n <p *ngFor =\"let error of data.errorData\" class=\"text-danger\">{{error}}</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n    <button mat-stroked-button color=\"primary\" [mat-dialog-close]=\"false\" cdkFocusInitial>Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/public/approve-plan-errors/approve-plan-errors.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/public/approve-plan-errors/approve-plan-errors.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9hcHByb3ZlLXBsYW4tZXJyb3JzL2FwcHJvdmUtcGxhbi1lcnJvcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/public/approve-plan-errors/approve-plan-errors.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/public/approve-plan-errors/approve-plan-errors.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ApprovePlanErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovePlanErrorsComponent", function() { return ApprovePlanErrorsComponent; });
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


var ApprovePlanErrorsComponent = /** @class */ (function () {
    function ApprovePlanErrorsComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ApprovePlanErrorsComponent.prototype.ngOnInit = function () {
    };
    ApprovePlanErrorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approve-plan-errors',
            template: __webpack_require__(/*! ./approve-plan-errors.component.html */ "./src/app/public/approve-plan-errors/approve-plan-errors.component.html"),
            styles: [__webpack_require__(/*! ./approve-plan-errors.component.scss */ "./src/app/public/approve-plan-errors/approve-plan-errors.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ApprovePlanErrorsComponent);
    return ApprovePlanErrorsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=planner-approve-plans-approve-plans-module.js.map