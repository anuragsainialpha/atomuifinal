(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planner-view-plan-view-plan-module"],{

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

/***/ "./src/app/planner/view-plan/view-plan.component.html":
/*!************************************************************!*\
  !*** ./src/app/planner/view-plan/view-plan.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    <b> Dispatch Plan > View Plan</b>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"Filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n  <div class=\"manualplan-fields\">\n    <div class=\"col-md-12 row\" *ngIf=\"isShow\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row\">\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formPicker\" placeholder=\"From Date\" [(ngModel)]=\"fromDate\"\n                  name=\"fromDate\" (dateChange)=\"addEvent('change', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toPicker\" [min]=\"fromDate\" placeholder=\"To Date\"\n                  [(ngModel)]=\"toDate\" name=\"toDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toPicker [disabled]=\"!fromDate\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- Source Input editble for DP_REP role & for external wareHouses -->\n          <!-- Source With Drop doem for DPREP and disable input field for NORMAL USERs -->\n          <div class=\"col-md-1 pl-0\" *ngIf = \"isSoureDisable()\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event)\" [disabled]=\"(isSoureDisable()) \"\n                autocomplete=\"off\" [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"sourceCode\" name=\"source\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\" >\n                <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pr-0\" *ngIf = \"!isSoureDisable()\">\n              <div class=\"form-group cust-form-group\">\n                <mat-form-field class=\"example-full-width\">\n                  <mat-select placeholder=\"Source\" [(ngModel)]=\"sourceCodeList\" name=\"sourceCodeList\"\n                    multiple [disabled]=\"(isSoureDisable()) \">\n                    <mat-option *ngFor=\"let source of openPlanSourceList\" [value]=\"source\">{{source}}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n                  [(ngModel)]=\"destination\" name=\"destination\" (keyup)=\"getUserSearchData($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\"\n                    (click)=\"setDestDescription(list.description)\"\n                    (onSelectionChange)=\"setDestDescription(list.description)\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination Description\" aria-label=\"State\"\n                  [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destination\"\n                  (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                    (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                    <span>({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Material Code\" aria-label=\"Material Code\"\n                  [matAutocomplete]=\"materialCodeAutocomplete\" [(ngModel)]=\"materialCode\" name=\"materialCode\"\n                  (keyup)=\"filterMaterialCode($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #materialCodeAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of materilcodelist\" [value]=\"list.value\"\n                    (click)=\"setMaterialDescription(list.description)\"\n                    (onSelectionChange)=\"setMaterialDescription(list.description)\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Material Description\" aria-label=\"Material Description\"\n                  [matAutocomplete]=\"materialDescritionAutocomplete\" [(ngModel)]=\"materialDescription\"\n                  name=\"materialDescription\" (keyup)=\"filterMaterialDescription($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #materialDescritionAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of materialDescriptionList\" [value]=\"list.description\"\n                    (click)=\"setMaterialCode(list.value)\" (onSelectionChange)=\"setMaterialCode(list.value)\">\n                    <span>{{list.description}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Category\" [(ngModel)]=\"materialGroup\" name=\"materialGroup\" multiple>\n                  <mat-option *ngFor=\"let category of categoryList\" [value]=\"category\">{{category}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"MKT Segment\" [(ngModel)]=\"mktsegment\" name=\"mktsegment\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let mktsegment of mktsegmentList\" [value]=\"mktsegment\">\n                    {{mktsegment}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Plan Id\" [(ngModel)]=\"planId\" name=\"planId\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Plan Status\" [(ngModel)]=\"planStatus\" name=\"planStatus\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let item of planStatusList\" [value]=\"item.value\">\n                    {{item.key}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Status\" [(ngModel)]=\"status\" name=\"status\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let data of statuses\" [value]=\"data.value\">{{data.key}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Insert User\" [(ngModel)]=\"insertUser\" name=\"insertUser\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Update User\" [(ngModel)]=\"updateUser\" name=\"updateUser\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Priority\" [(ngModel)]=\"priority\" name=\"priority\" multiple>\n                  <mat-option value=\"ISNULL\">ISNULL</mat-option>\n                  <mat-option *ngFor=\"let priority of priorityList\" [value]=\"priority\">{{priority}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"plannerSearch()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n    <!--  This filter will visible other user insted of new due allignment -->\n    <!-- <div class=\"row\" *ngIf=\"check_Role_DP_REP != roles.planner3\">\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n          <ng-container >\n           <div class=\"col-md-1 pr-0\">\n             <div class=\"form-group\">\n               <mat-form-field>\n                 <input matInput placeholder=\"Insert User\" [(ngModel)]=\"insertUser\" name=\"insertUser\">\n               </mat-form-field>\n             </div>\n           </div>\n         </ng-container>\n        </div>\n      </div>\n    </div> -->\n  </div>\n  <div class=\"ngx-table-custom-scroll ngx-table-tr-custom-scroll\">\n    <ngx-datatable class='material' #table [rows]='dispatchPlanList' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n      [scrollbarH]=\"true\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [externalPaging]=\"true\" [limit]=\"page.limit\"\n      [count]=\"page.count\" [offset]=\"page.offset\" (page)=\"datatablePageData($event)\" [summaryRow]=\"true\"\n      [summaryHeight]=\"'auto'\" [summaryPosition]=\"'bottom'\" [selected]=\"selected\" [selectionType]=\"'checkbox'\"\n      [selectAllRowsOnPage]=\"false\">\n      <ngx-datatable-column name=\"Plan Id\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"planId\"\n        [summaryFunc]=\"emptySumm\" [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.planId}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Disp Date\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"dispatchDate\"\n        [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.dispatchDate | customDateFormat | date:'dd-MMM-yyyy'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Source\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"sourceLocation\"\n        [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.sourceLocation}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Dest\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destinationLocation\"\n        [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destinationLocation}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Material Code\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"itemId\"\n        [frozenLeft]=\"freezeLeftValue\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.itemId}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Material Description\" [width]=\"220\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"itemDescription\" [frozenLeft]=\"freezeLeftValue\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.itemDescription}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Dest Description\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"destinationDescription\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destinationDescription}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Cat\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"category\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.category}}\n        </ng-template>\n      </ngx-datatable-column>\n      <!-- <ngx-datatable-column name=\"User\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"category\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.insertUser}}\n        </ng-template>\n      </ngx-datatable-column> -->\n      <ngx-datatable-column name=\"TTE\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"tte\"\n        [summaryTemplate]=\"tteCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.tte}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Batch\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"batchCode\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.batchCode}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Pr\" [width]=\"50\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"priority\"\n        [summaryFunc]=\"emptySumm\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.priority}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Mkt Seg\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"marketSegment\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.marketSegment}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Plan Qty\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"quantity\"\n        [summaryTemplate]=\"planQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.quantity?row.quantity:0}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"App Qty\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"approvedQuantity\"\n        [summaryTemplate]=\"apprQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.approvedQuantity?row.approvedQuantity:0}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Un Appr Qty\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"deletedQuantity\" [summaryTemplate]=\"unapprQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.unapprovedQuantity?row.unapprovedQuantity:0}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Appr Del\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"deletedApprQuantity\" [summaryTemplate]=\"apprDeleteQtyCell\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.deletedApprQuantity}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Un Appr Del\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"deletedUnApprQuantity\" [summaryTemplate]=\"unapprDeleteQtyCell\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.deletedUnApprQuantity}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Reserved\" [width]=\"65\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"reservedQuantity\"\n        [summaryTemplate]=\"reservedQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.reservedQuantity?row.reservedQuantity:0}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Loaded\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"loaded\"\n        [summaryTemplate]=\"loadedQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.loaded?row.loaded:0}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Disp\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"dispatchedQuantity\"\n        [summaryTemplate]=\"dispatchedQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.dispatchedQuantity?row.dispatchedQuantity:0}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Avail Qty\" [width]=\"65\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"availableQuantity\" [summaryTemplate]=\"availableQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.availableQuantity?row.availableQuantity:0}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Total Avail Qty\" [width]=\"65\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"availableQuantity\" [summaryTemplate]=\"totalAvailableQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totalAvailableQuantity?row.totalAvailableQuantity:0}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Avail TTE\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"availbleTTE\"\n        [summaryTemplate]=\"totalAvailableTTEPercentageCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.availbleTTE | number : '1.2-2' }}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Truck Count\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckCount\"\n        [summaryTemplate]=\"truckPercentageCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.truckCount | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Weight (Kg)\" [width]='60' [resizeable]=\"false\" [sortable]=\"false\" prop=\"Weight\"\n        [summaryTemplate]=\"weightCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.weight | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Available Weight (Kg)\" [width]='80' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"totalWeight\" [summaryTemplate]=\"totalWeightCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totalWeight | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Weight Util (%) \" [width]='60' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"weightUtil\" [summaryTemplate]=\"totalWeightUtilCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.weightUtil | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Volume (CUMTR)\" [width]='70' [resizeable]=\"false\" [sortable]=\"false\" prop=\"Volume\"\n        [summaryTemplate]=\"volumeCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.volume | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Available Volume (CUMTR)\" [width]='110' [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"totalVolume\" [summaryTemplate]=\"totalVolumeCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totalVolume | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Volume Util (%)\" [width]='80' [resizeable]=\"false\" [sortable]=\"false\" prop=\"volume\"\n        [summaryTemplate]=\"totalVolumeUtilCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.volumeUtil | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Plan Status\" [width]='90' [resizeable]=\"false\" [sortable]=\"false\" prop=\"appStatus\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.status}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Insert User\" [width]='145' [resizeable]=\"false\" [sortable]=\"false\" prop=\"insertUser\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.insertUser}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Update User\" [width]='145' [resizeable]=\"false\" [sortable]=\"false\" prop=\"updateUser\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.updateUser}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Insert Date\" [width]='130' [resizeable]=\"false\" [sortable]=\"false\" prop=\"insertDate\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.insertDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Update Date\" [width]='130' [resizeable]=\"false\" [sortable]=\"false\" prop=\"updateDate\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.updateDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Plan Age (Days)\" [width]='70' [resizeable]=\"false\" [sortable]=\"false\" prop=\"planAge\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.planAge}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Comments\" [width]='100' [resizeable]=\"false\" [sortable]=\"false\" prop=\"comments\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <span [attr.title]=\"row.comments\" (click)=\"showIntegrationMessage(row)\">{{\n            (row.comments?.length>9)? (row.comments | slice:0:9)+'..':(row.comments)}}</span>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Status\" [width]='150' [resizeable]=\"false\" [sortable]=\"true\" prop=\"appStatus\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <button class=\"btn btn-sm lightgreen-button\"\n            [ngClass]=\"(row.appStatus=='APPROVED')?'lightgreen-button':'light-red-color'\">\n            {{row.appStatus}}\n          </button>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column [width]=\"50\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\"\n        [resizeable]=\"false\" [sortable]=\"false\">\n        <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\n          let-selectFn=\"selectFn\" let-row=\"row\" let-rowIndex=\"rowIndex\">\n          <input type=\"checkbox\" [checked]=\"allRowsSelected\"\n            (change)=\"selectFn(!allRowsSelected);onSelectAll($event)\" />\n        </ng-template>\n        <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\" let-row=\"row\"\n          let-rowIndex=\"rowIndex\" let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\n          <input type=\"checkbox\" [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event);onSelect($event,row)\" />\n        </ng-template>\n      </ngx-datatable-column>\n      <!-- Footer Template starts -->\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected |\n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n            [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n    </ngx-datatable>\n\n    <!-- Table bottom grid columns -->\n    <ng-template #tteCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{(tteSum)?(tteSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #planQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{planQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #apprQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{apprQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #unapprQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{unapprQtySum }}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #apprDeleteQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{apprDeleteQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #unapprDeleteQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{unapprDeleteQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #reservedQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{reservedQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #loadedQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{loadedQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #dispatchedQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{dispatchedQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #availableQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{availableQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalAvailableQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{totalAvailableQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #truckPercentageCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{(TruckPercentageSum)?(TruckPercentageSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalAvailableTTEPercentageCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(totalTTEPercentageSum)?(totalTTEPercentageSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #weightCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(weightSum)?(weightSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalWeightCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(totalWeightSum)?(totalWeightSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalWeightUtilCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(totalWeightUtilSum)?(totalWeightUtilSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #volumeCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(volumeSum)?(volumeSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalVolumeCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(totalVolumeSum)?(totalVolumeSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalVolumeUtilCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(totalVolumeUtilSum)?(totalVolumeUtilSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n<div id=\"commnetsModal\" class=\"modal fade\" role=\"dialog\" data-backdrop=\"static\" data-keyboard=\"false\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Comments</h4>\n      </div>\n      <div class=\"modal-body\">\n        {{modalComment}}\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/planner/view-plan/view-plan.component.scss":
/*!************************************************************!*\
  !*** ./src/app/planner/view-plan/view-plan.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW5uZXIvdmlldy1wbGFuL3ZpZXctcGxhbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/planner/view-plan/view-plan.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/planner/view-plan/view-plan.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPlanComponent", function() { return ViewPlanComponent; });
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
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ViewPlanComponent = /** @class */ (function () {
    function ViewPlanComponent(service, toastr, helperService, activatedRoute) {
        this.service = service;
        this.toastr = toastr;
        this.helperService = helperService;
        this.activatedRoute = activatedRoute;
        this.totalTruckPercentage = 0;
        this.totalTTEPercentageSum = 0;
        this.openPlanSourceList = [];
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
        this.totalWeightSum = 0;
        this.weightSum = 0;
        this.volumeSum = 0;
        this.totalWeightUtilSum = 0;
        this.totalVolumeSum = 0;
        this.totalVolumeUtilSum = 0;
        this.fileName = 'viewplans.xlsx';
        this.isShow = true;
        this.descriptionList = [];
        this.page = {
            limit: 10,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.selected = [];
        this.allRowsSelected = false;
        this.materialGroup = [];
        this.status = [];
        this.destination = '';
        this.destinationList = [];
        this.dispatchPlanList = [];
        this.materilcodelist = [];
        this.materialDescription = '';
        this.isLoading = false;
        this.minDate = new Date();
        this.currentDate = this.helperService.getTodayDate();
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.statuses = [];
        this.filterPlanStatus = [];
        this.mktsegmentList = [];
        this.categoryList = [];
        this.fromDispatchDate = '';
        this.toDispatchDate = '';
        this.toDate = '';
        this.fromDate = '';
        this.tteCalculateblePlans = [];
        this.priorityList = [];
        this.priority = [];
        this.isViewPlans = true;
        this.sourceCodeList = [];
        this.freezeLeftValue = true;
    }
    ViewPlanComponent.prototype.ngDoCheck = function () {
        var width = $(window).width();
        if (width < 1024) {
            this.freezeLeftValue = false;
        }
        else {
            this.freezeLeftValue = true;
        }
    };
    ViewPlanComponent.prototype.ngOnInit = function () {
        this.roles = _constants__WEBPACK_IMPORTED_MODULE_8__["constants"].roles;
        localStorage.setItem("userMenu", "dispatch-plan");
        this.statuses = _constants__WEBPACK_IMPORTED_MODULE_8__["constants"].planStatus;
        this.source = localStorage.getItem('sourceID');
        // (localStorage.getItem("sourceID") != null && localStorage.getItem("sourceID") != '') ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
        // this.filterPlanStatus = constants.filterPlanStatus
        var routePlanId = this.activatedRoute.snapshot.params['planId'];
        this.planStatusList = _constants__WEBPACK_IMPORTED_MODULE_8__["constants"].planStatusList;
        this.check_Role_DP_REP = this.service.checkRole();
        // For DP_REP / Externalwarehouse role user can change the source location but other user it can't changes
        // That why we giving default selection
        if (this.isSoureDisable()) {
            this.sourceCode = localStorage.getItem("sourceID");
            this.isViewPlans = false;
            (localStorage.getItem("sourceID") != null && localStorage.getItem("sourceID") != '') ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
        }
        // for getting plan data with planId and without planId
        this.getPlanData(routePlanId);
        //for getting category master data
        this.getCategoryMasterData();
        this.getMarketSegment();
        this.getPriorityList();
        if (this.service.isDPREPRole() || this.service.CheckExtWareHouse()) {
            this.getPlansSourceList();
        }
        else {
            this.openPlanSourceList.push(localStorage.getItem("sourceID"));
        }
    };
    //for getting category master data
    ViewPlanComponent.prototype.getCategoryMasterData = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.categoryMasterData).subscribe(function (response) {
            _this.categoryList = response['data'];
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
        });
    };
    // For getting all the Open Plans source List for DPREP
    ViewPlanComponent.prototype.getPlansSourceList = function () {
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
    ViewPlanComponent.prototype.isSoureDisable = function () {
        // source Not disable for DP_REP, L1_MGR, L2_MGR role & External warehouses, if roles not belongs to DP_REP & External wareHouse we are returning boolean value which makes  disable 
        if ((this.check_Role_DP_REP !== this.roles.planner3 && this.check_Role_DP_REP !== this.roles.L1MGR && this.check_Role_DP_REP !== this.roles.L2MGR)
            && (!this.service.CheckExtWareHouse())) {
            return true;
        }
        else {
            return false;
        }
    };
    ViewPlanComponent.prototype.getMarketSegment = function () {
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
    ViewPlanComponent.prototype.getPriorityList = function () {
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
    // for getting plan data with planId and without planId
    ViewPlanComponent.prototype.getPlanData = function (routePlanId) {
        if (routePlanId) {
            this.isLoading = true;
            this.planId = routePlanId;
            var bodyData = {
                'planId': routePlanId,
                // 'sourceCode': this.sourceCode,
                'isViewPlans': this.isViewPlans,
                'sourceCodeList': this.sourceCodeList
            };
            this.getViewPlanData(bodyData);
        }
        else {
            var bodyData = {
                'fromDispatchDate': this.currentDate,
                "toDispatchDate": this.currentDate,
                // 'sourceCode': this.sourceCode,
                // 'statuses': this.filterPlanStatus,
                'isViewPlans': this.isViewPlans,
                'sourceCodeList': this.sourceCodeList
            };
            this.fromDate = this.currentDateAsString;
            this.toDate = this.fromDate;
            this.getViewPlanData(bodyData);
        }
    };
    // Clearing all the sum values after success response
    ViewPlanComponent.prototype.clearAllSum = function () {
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
    ViewPlanComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    // for getting view plan data
    ViewPlanComponent.prototype.getViewPlanData = function (bodyData) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.planinfo, bodyData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.clearAllSum();
                _this.page.count = response['data'].total;
                _this.page.limit = response['data'].pageLength;
                var responseData = response['data'].planItems;
                // this.standredFTLTTE = response['data'].standardFtlTteCapacity;
                // this.standardFTLWeight = response['data'].standardFtlWeight;
                // this.standardFTLVolumne = response['data'].standardFTLVolumne;
                //  responseData.forEach(element => {
                // // Weight Util values calculations
                // element.weightUtil = (((element.weight ? element.weight : 0) / this.standardFTLWeight) * 100);
                // // Volume Util values calculations
                // element.volumeUtil = (((element.volume ? element.volume : 0) / this.standardFTLVolumne) * 100);
                // if (this.service.checkRole() == this.roles.rdc_PLN) {
                //   element.truckPercentage = (((element.quantity ? element.quantity : 0) * (element.tte ? element.tte : 0)) / this.standredFTLTTE);
                //   element.availableTTE = ((element.quantity ? element.quantity : 0) * (element.tte ? element.tte : 0));
                // } else {
                //   element.truckPercentage = (((element.availableQuantity ? element.availableQuantity : 0) * (element.tte ? element.tte : 0)) / this.standredFTLTTE);
                //   element.availableTTE = ((element.availableQuantity ? element.availableQuantity : 0) * (element.tte ? element.tte : 0));
                // }
                // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
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
                // });
                _this.dispatchPlanList = responseData.slice();
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
    ViewPlanComponent.prototype.addEvent = function (type, event) {
        console.log(event.value);
        console.log("------>To Date", this.toDate);
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
        if (event.target.value) {
            if (this.toDate && (this.fromDate > checkToDate)) {
                this.toDate = '';
            }
        }
        // this.toDate = '';
    };
    ViewPlanComponent.prototype.datatablePageData = function (pageInfo) {
        this.resetSummaryData();
        var offset = pageInfo.offset;
        this.tteCalculateblePlans = [];
        this.selected = [];
        this.forDateValidation();
        this.clearAllSum();
        var bodyData = {
            'fromDispatchDate': this.fromDispatchDate,
            'toDispatchDate': this.toDispatchDate,
            'index': offset,
            'pageLength': pageInfo.pageSize,
            'destinationCode': this.destination,
            'marketSegment': this.mktsegment,
            'materialCode': this.materialCode,
            'materialDescription': this.materialDescription,
            'materialGroup': this.materialGroup,
            'planId': this.planId,
            'status': this.status,
            // 'statuses': this.filterPlanStatus,
            // 'source': this.source,
            'planStatus': this.planStatus,
            // 'sourceCode': this.sourceCode,
            "updateUser": this.updateUser,
            'insertUser': this.insertUser,
            'isViewPlans': this.isViewPlans,
            'priorityList': this.priority,
            'sourceCodeList': this.sourceCodeList
        };
        this.getViewPlanData(bodyData);
    };
    // clear the data what the user entered
    ViewPlanComponent.prototype.clearAll = function () {
        this.destination = '';
        this.mktsegment = [];
        this.materialCode = "";
        this.fromDate = '';
        this.toDate = '';
        this.materialDescription = "";
        this.destinationDesc = "";
        this.materialGroup = [];
        this.descriptionList = [];
        this.planId = null;
        this.status = [];
        this.destinationList = [];
        this.materilcodelist = [];
        this.tteCalculateblePlans = [];
        this.selected = [];
        this.planStatus = [];
        this.insertUser = '';
        this.sourceList = [];
        this.sourceCode = '';
        this.updateUser = '';
        this.priority = [];
        this.sourceCodeList = [];
        // For DP_REP role user can change the source location but other user it can't changes
        // That why we giving default selection
        if (this.isSoureDisable()) {
            this.sourceCode = localStorage.getItem("sourceID");
            (localStorage.getItem("sourceID") != null && localStorage.getItem("sourceID") != '') ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
        }
    };
    // refresh page data
    ViewPlanComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.clearAll();
        this.clearAllSum();
        this.resetSummaryData();
        var bodyData = {
            'fromDispatchDate': this.currentDate,
            "toDispatchDate": this.currentDate,
            // 'sourceCode': this.sourceCode,
            // 'statuses': this.filterPlanStatus,
            'isViewPlans': this.isViewPlans,
            'sourceCodeList': this.sourceCodeList
        };
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.fromDate = this.currentDateAsString;
        this.toDate = this.fromDate;
        this.getViewPlanData(bodyData);
    };
    // filter destination list by user search 
    ViewPlanComponent.prototype.getUserSearchData = function (event) {
        var _this = this;
        this.destinationDesc = '';
        var destfiltervalue = event.target.value;
        if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
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
    ViewPlanComponent.prototype.filterMaterialCode = function (event) {
        var _this = this;
        this.materialDescription = '';
        var filtervalue = event.target.value;
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
    // set material code
    ViewPlanComponent.prototype.setMaterialCode = function (value) {
        var _this = this;
        setTimeout(function () {
            _this.materialCode = value;
        }, 300);
    };
    //set value for material description
    ViewPlanComponent.prototype.setMaterialDescription = function (value) {
        this.materialDescription = value;
    };
    //set value destination
    ViewPlanComponent.prototype.setDestination = function (value) {
        //  this.destinationDesc = value;
        this.destination = value;
    };
    //set value to destination description
    ViewPlanComponent.prototype.setDestDescription = function (value) {
        this.destinationDesc = value;
    };
    ViewPlanComponent.prototype.getUserDestinationList = function (event) {
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
    // Date Validation
    ViewPlanComponent.prototype.forDateValidation = function () {
        if (this.fromDate != '' && this.fromDate != null) {
            this.fromDispatchDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date(this.fromDate)).format("DD/MM/YYYY");
        }
        else {
            this.fromDispatchDate = '';
        }
        if (this.toDate != '' && this.toDate != null) {
            this.toDispatchDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date(this.toDate)).format("DD/MM/YYYY");
        }
        else {
            this.toDispatchDate = '';
        }
    };
    //planner search by using custom filter 
    ViewPlanComponent.prototype.plannerSearch = function () {
        this.tteCalculateblePlans = [];
        this.resetSummaryData();
        this.selected = [];
        this.table.offset = 0;
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
            // 'statuses': this.filterPlanStatus,
            // 'sourceLocation': this.source,
            'planStatus': this.planStatus,
            'insertUser': this.insertUser,
            "updateUser": this.updateUser,
            // 'sourceCode': this.sourceCode,
            'isViewPlans': this.isViewPlans,
            'priorityList': this.priority,
            'sourceCodeList': this.sourceCodeList
        };
        if (this.fromDate != '' && this.fromDate != null) {
            if (this.toDate != '' && this.toDate != null) {
                this.dispatchPlanList = [];
                this.getViewPlanData(bodyData);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.getViewPlanData(bodyData);
        }
    };
    // show filter icon and hide 
    ViewPlanComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    //export excel data
    ViewPlanComponent.prototype.export = function () {
        var _this = this;
        if (this.dispatchPlanList.length > 0) {
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
                // 'statuses': this.filterPlanStatus,
                // 'sourceLocation': this.source,
                'planStatus': this.planStatus,
                'insertUser': this.insertUser,
                "updateUser": this.updateUser,
                // 'sourceCode': this.sourceCode,
                'isViewPlans': this.isViewPlans,
                'priorityList': this.priority,
                'sourceCodeList': this.sourceCodeList
            };
            // this.service.post_service_DownLoadExcel(ApiserviceService.apisList.planinfo, data).subscribe(response => {
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.planinfo, data).subscribe(function (response) {
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
                    var newViewPlanData = response['data'].planItems;
                    var excelRawData = newViewPlanData;
                    var newExcelData = [];
                    var data_1;
                    for (var i = 0; i < excelRawData.length; i++) {
                        // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
                        // For FGS : The Avail TTE and Truck count should be based on Available Qty
                        data_1 = {
                            "planId": excelRawData[i].planId,
                            "Dispatch Date": _this.service.customDateFormat(excelRawData[i].dispatchDate),
                            "Source": excelRawData[i].sourceLocation,
                            "Destination": excelRawData[i].destinationLocation,
                            "Material Code": excelRawData[i].itemId,
                            "Material Description": excelRawData[i].itemDescription,
                            "Dest Description": excelRawData[i].destinationDescription,
                            "Category": excelRawData[i].category,
                            "TTE": +excelRawData[i].tte,
                            "Batch": excelRawData[i].batchCode,
                            "Priority": excelRawData[i].priority,
                            "Mkt Segment": excelRawData[i].marketSegment,
                            "Plan Quantity": +excelRawData[i].quantity,
                            "Approved Quantity": +excelRawData[i].approvedQuantity,
                            "Unapproved Quantity": +excelRawData[i].unapprovedQuantity,
                            "Approved Delete": +excelRawData[i].deletedApprQuantity,
                            "Unapproval Delete": +excelRawData[i].deletedUnApprQuantity,
                            "Reserved": +excelRawData[i].reservedQuantity,
                            "Loaded": +excelRawData[i].loaded,
                            "Dispatch Quantity": +excelRawData[i].dispatchedQuantity,
                            "Avaliable Quantity": +excelRawData[i].availableQuantity,
                            "Total Availble Quantity": +excelRawData[i].totalAvailableQuantity,
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
                            "Status": excelRawData[i].appStatus
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_7__["writeFile"](workBook, 'viewplanData.xlsx');
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
    ViewPlanComponent.prototype.filterMaterialDescription = function (event) {
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
    //truck Percentage
    // truckPercantage(data) {
    //   console.log('trcukpercentage called');
    //   let row = data;
    //   let standredFTLTTE = 122;
    //   return (((row.availableQuantity ? row.availableQuantity : 0) * (row.tte ? row.tte : 0)) / standredFTLTTE)
    // }
    ViewPlanComponent.prototype.onSelect = function (event, data) {
        if (event.target.checked) {
            this.tteCalculateblePlans.push(data);
        }
        else {
            var index = this.tteCalculateblePlans.indexOf(data);
            this.tteCalculateblePlans.splice(index, 1);
        }
        this.tteSum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var tte = _a.tte;
            return sum + tte;
        }, 0);
        this.planQtySum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var quantity = _a.quantity;
            return sum + quantity;
        }, 0);
        this.apprQtySum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var approvedQuantity = _a.approvedQuantity;
            return sum + approvedQuantity;
        }, 0);
        this.unapprQtySum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var unapprovedQuantity = _a.unapprovedQuantity;
            return sum + unapprovedQuantity;
        }, 0);
        this.apprDeleteQtySum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var deletedApprQuantity = _a.deletedApprQuantity;
            return sum + deletedApprQuantity;
        }, 0);
        this.unapprDeleteQtySum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var deletedUnApprQuantity = _a.deletedUnApprQuantity;
            return sum + deletedUnApprQuantity;
        }, 0);
        this.reservedQtySum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var reservedQuantity = _a.reservedQuantity;
            return sum + reservedQuantity;
        }, 0);
        this.loadedQtySum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var loaded = _a.loaded;
            return sum + loaded;
        }, 0);
        this.dispatchedQtySum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var dispatchedQuantity = _a.dispatchedQuantity;
            return sum + dispatchedQuantity;
        }, 0);
        this.availableQtySum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var availableQuantity = _a.availableQuantity;
            return sum + availableQuantity;
        }, 0);
        this.totalAvailableQtySum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var totalAvailableQuantity = _a.totalAvailableQuantity;
            return sum + totalAvailableQuantity;
        }, 0);
        this.totalTTEPercentageSum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var availbleTTE = _a.availbleTTE;
            return sum + availbleTTE;
        }, 0);
        this.TruckPercentageSum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var truckCount = _a.truckCount;
            return sum + truckCount;
        }, 0);
        this.weightSum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var weight = _a.weight;
            return sum + weight;
        }, 0);
        this.totalWeightSum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var totalWeight = _a.totalWeight;
            return sum + totalWeight;
        }, 0);
        this.totalWeightUtilSum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var weightUtil = _a.weightUtil;
            return sum + weightUtil;
        }, 0);
        this.volumeSum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var volume = _a.volume;
            return sum + volume;
        }, 0);
        this.totalVolumeSum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var totalVolume = _a.totalVolume;
            return sum + totalVolume;
        }, 0);
        this.totalVolumeUtilSum = this.tteCalculateblePlans.reduce(function (sum, _a) {
            var volumeUtil = _a.volumeUtil;
            return sum + volumeUtil;
        }, 0);
    };
    //reset the data in the table summary data
    ViewPlanComponent.prototype.resetSummaryData = function () {
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
    };
    // On selection of checkboxes in the table
    ViewPlanComponent.prototype.onSelectAll = function (event) {
        var _this = this;
        this.tteCalculateblePlans = [];
        this.dispatchPlanList.forEach(function (data) {
            _this.onSelect(event, data);
        });
    };
    ViewPlanComponent.prototype.emptySumm = function () {
        return null;
    };
    // Filter source location
    ViewPlanComponent.prototype.getfilterSource = function (event) {
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
    ViewPlanComponent.prototype.showIntegrationMessage = function (row) {
        this.modalComment = row.comments;
        $("#commnetsModal").modal('show');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DatatableComponent"])
    ], ViewPlanComponent.prototype, "table", void 0);
    ViewPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-plan',
            template: __webpack_require__(/*! ./view-plan.component.html */ "./src/app/planner/view-plan/view-plan.component.html"),
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _public_date_adapters__WEBPACK_IMPORTED_MODULE_4__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: _public_date_adapters__WEBPACK_IMPORTED_MODULE_4__["APP_DATE_FORMATS"]
                }
            ],
            styles: [__webpack_require__(/*! ./view-plan.component.scss */ "./src/app/planner/view-plan/view-plan.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__["HelperServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ViewPlanComponent);
    return ViewPlanComponent;
}());



/***/ }),

/***/ "./src/app/planner/view-plan/view-plan.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/planner/view-plan/view-plan.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewlPlanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewlPlanModule", function() { return ViewlPlanModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _view_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-plan.component */ "./src/app/planner/view-plan/view-plan.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _view_plan_component__WEBPACK_IMPORTED_MODULE_4__["ViewPlanComponent"] },
    { path: ':planId', component: _view_plan_component__WEBPACK_IMPORTED_MODULE_4__["ViewPlanComponent"] },
];
var ViewlPlanModule = /** @class */ (function () {
    function ViewlPlanModule() {
    }
    ViewlPlanModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__["CustomDatePipeModule"]
            ],
            declarations: [
                _view_plan_component__WEBPACK_IMPORTED_MODULE_4__["ViewPlanComponent"]
            ],
            providers: [],
        })
    ], ViewlPlanModule);
    return ViewlPlanModule;
}());



/***/ })

}]);
//# sourceMappingURL=planner-view-plan-view-plan-module.js.map