(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planner-modify-plan-modify-plan-module"],{

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

/***/ "./src/app/planner/modify-plan/modify-plan.component.html":
/*!****************************************************************!*\
  !*** ./src/app/planner/modify-plan/modify-plan.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h4 class=\"manulal-plan-header \">\n    Dispatch Plan > Modify Plan\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h4>\n  <div class=\"manualplan-fields\">\n    <div class=\"col-md-12 row\" *ngIf=\"isShow\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row\">\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formPicker\" placeholder=\"From Date\" [(ngModel)]=\"fromDate\"\n                  name=\"fromDate\" (dateChange)=\"addEvent('fromDate', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toPicker\" [min]=\"fromDate\" placeholder=\"To Date\"\n                  [(ngModel)]=\"toDate\" name=\"toDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toPicker [disabled]=\"!fromDate\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- check_Role_DP_REP == roles.planner3  -->\n          <!-- <div class=\"col-md-1 pl-0\" *ngIf=\"service.isDPREPRole()\">\n            <mat-form-field>\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event)\" autocomplete=\"off\"\n                [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"sourceCode\" name=\"source\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div> -->\n          <div class=\"col-md-1 pl-0\" *ngIf = \"isSoureDisable()\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event)\" [disabled]=\"(isSoureDisable()) \"\n                autocomplete=\"off\" [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"sourceCode\" name=\"source\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\" >\n                <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pr-0\" *ngIf = \"!isSoureDisable()\">\n              <div class=\"form-group cust-form-group\">\n                <mat-form-field class=\"example-full-width\">\n                  <mat-select placeholder=\"Source\" [(ngModel)]=\"sourceCodeList\" name=\"sourceCodeList\"\n                    multiple [disabled]=\"(isSoureDisable()) \">\n                    <mat-option *ngFor=\"let source of openPlanSourceList\" [value]=\"source\">{{source}}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n                  [(ngModel)]=\"destination\" name=\"destination\" (keyup)=\"getUserSearchData($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\"\n                    (click)=\"setDestDescription(list.description)\"\n                    (onSelectionChange)=\"setDestDescription(list.description)\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Destination Description\" aria-label=\"State\"\n                  [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destination\"\n                  (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                    (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                    <span>({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Material Code\" aria-label=\"Material Code\"\n                  [matAutocomplete]=\"materialCodeAutocomplete\" [(ngModel)]=\"materialCode\" name=\"materialCode\"\n                  (keyup)=\"filterMaterialCode($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #materialCodeAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of materilcodelist\" [value]=\"list.value\"\n                    (click)=\"setMaterialDescription(list.description)\"\n                    (onSelectionChange)=\"setMaterialDescription(list.description)\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Material Description\" aria-label=\"Material Description\"\n                  [matAutocomplete]=\"materialDescriptionAutocomplete\" [(ngModel)]=\"materialDescription\"\n                  name=\"materialDescription\" (keyup)=\"filterMaterialDescription($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #materialDescriptionAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of materialDescriptionList\" [value]=\"list.description\"\n                    (click)=\"setMaterialCode(list.value)\" (onSelectionChange)=\"setMaterialCode(list.value)\">\n                    <span>{{list.description}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Category\" [(ngModel)]=\"materialGroup\" name=\"materialGroup\" multiple>\n                  <mat-option *ngFor=\"let category of categoryList\" [value]=\"category\">{{category}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"MKT Segment\" [(ngModel)]=\"mktsegment\" name=\"mktsegment\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let mktsegment of mktsegmentList\" [value]=\"mktsegment\">\n                    {{mktsegment}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Plan Id\" [(ngModel)]=\"planId\" name=\"planId\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Plan Status\" [(ngModel)]=\"planStatus\" name=\"planStatus\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let item of planStatusList\" [value]=\"item.value\">\n                    {{item.key}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Status\" [(ngModel)]=\"status\" name=\"status\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let data of statuses\" [value]=\"data.value\">{{data.key}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput placeholder=\"Insert User\" [(ngModel)]=\"insertUser\" name=\"insertUser\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Priority\" [(ngModel)]=\"priority\" name=\"priority\" multiple>\n                  <mat-option value=\"ISNULL\">ISNULL</mat-option>\n                  <mat-option *ngFor=\"let priority of priorityList\" [value]=\"priority\">{{priority}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"plannerSearch()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"clearfix\"></div>\n  <div class=\"datatable ngx-table-custom-scroll ngx-table-tr-custom-scroll\">\n    <!-- Data table starts -->\n    <ngx-datatable #table class=\"material\" [columnMode]=\"'force'\" [scrollbarH]=\"true\" [headerHeight]=\"50\"\n      [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [rows]=\"modifyPlanData\" [externalPaging]=\"true\" [limit]=\"page.limit\"\n      [count]=\"page.count\" [offset]=\"page.offset\" (page)=\"datatablePageData($event)\" [selected]=\"selected\"\n      [selectionType]=\"'checkbox'\" [selectAllRowsOnPage]=\"false\" [summaryRow]=\"true\" [summaryHeight]=\"'auto'\"\n      [summaryPosition]=\"'bottom'\">\n      <ngx-datatable-column [width]=\"50\" [frozenLeft]=\"true\" *ngIf=\"!responsiveHideShow\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\"\n      [resizeable]=\"false\" [sortable]=\"false\">\n      <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\n        let-selectFn=\"selectFn\" let-row=\"row\" let-rowIndex=\"rowIndex\">\n        <input type=\"checkbox\" [checked]=\"allRowsSelected\"\n          (change)=\"selectFn(!allRowsSelected);onSelectAll($event)\" />\n      </ng-template>\n      <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\" let-row=\"row\"\n        let-rowIndex=\"rowIndex\" let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\n        <input type=\"checkbox\" [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event);onSelect($event,row)\" />\n      </ng-template>\n    </ngx-datatable-column>\n      <ngx-datatable-column name=\"Action\" [frozenLeft]=\"true\" *ngIf=\"!responsiveHideShow\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"false\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <!-- (row.dispatchedQuantity == 0) && (row.reservedQuantity == 0) -->\n          <button class=\"theme-small-button btn\" matTooltip=\"Modify plan\" (click)=\"rowLevelModifyPlan(row)\"\n            [disabled]=\"(row.isError)\">\n            <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n          </button>\n          <!-- Commented as per new requiremet on 11/07/2019 -->\n          <!-- If the Dispatch Qty & Reserved Qty & Loaded Qty is there He cant do any delet action -->\n          <!-- <span *ngIf=\"(row.dispatchedQuantity == 0) && (row.reservedQuantity == 0) && (row.loaded == 0)\">\n            <button class=\"theme-delete-button btn\" matTooltip=\"Delete plan\" (click)=\"rowlevelDeletePlan(row)\">\n              <i class=\"fa fa-trash-o fa-2x\" aria-hidden=\"true\"></i>\n            </button>\n          </span> -->\n        </ng-template>\n      </ngx-datatable-column>\n      <!-- Plan Id column -->\n      <ngx-datatable-column [frozenLeft]=\"true\" name=\"Plan Id\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"planId\" [summaryFunc]=\"emptySumm\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.planId}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <!-- Dispatch plan column -->\n      <ngx-datatable-column [frozenLeft]=\"true\" name=\"Disp Date\" [width]=\"110\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"dispatchDate\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <ng-container *ngIf=\"row.status !== 'COMPLETED'\">\n            <div *ngIf=\"isView(row)\">\n              {{row.dispatchDate | customDateFormat | date:'dd-MMM-yyyy'}}\n            </div>\n            <div *ngIf=\"isEdit(row)\">\n              <div class=\"edit-field\" title=\"Double click to edit\"\n                (click)=\"editing[rowIndex + '-dispatchDate'] = true\" *ngIf=\"!editing[rowIndex + '-dispatchDate']\">\n                <span class=\"edit-label\">{{row.dispatchDate | customDateFormat | date:'dd-MMM-yyyy'}}\n                </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <mat-form-field *ngIf=\"editing[rowIndex+ '-dispatchDate']\">\n                <input matInput [matDatepicker]=\"rowIndexPicker\" [value]=\"row.formattedDate\" autofocus\n                  (dateChange)=\"updateValue(row,$event,'dispatchDate',rowIndex)\">\n                <mat-datepicker-toggle matSuffix [for]=\"rowIndexPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #rowIndexPicker></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"row.status === 'COMPLETED'\">\n            {{row.dispatchDate | customDateFormat | date:'dd-MMM-yyyy'}}\n          </ng-container>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <!-- Source column -->\n      <ngx-datatable-column [frozenLeft]=\"true\" name=\"Source\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"sourceLocation\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.sourceLocation}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <!-- Destination Column -->\n      <ngx-datatable-column [frozenLeft]=\"true\" name=\"Dest\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"destinationLocation\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <ng-container *ngIf=\"row.status !== 'COMPLETED'\">\n            <div *ngIf=\"isEdit(row)\">\n              <div class=\"edit-field\" title=\"Double click to edit\"\n                (click)=\"editing[rowIndex + '-destinationLocation'] = true\"\n                *ngIf=\"!editing[rowIndex + '-destinationLocation']\">\n                <span class=\"edit-label\">{{row.destinationLocation}}\n                </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <mat-form-field *ngIf=\"editing[rowIndex+ '-destinationLocation']\">\n                <input matInput [matAutocomplete]=\"datatableDestAutocomplete\"\n                  (blur)=\"updateValue(row,$event, 'destinationLocation', rowIndex)\" [value]=\"row.destinationLocation\"\n                  autofocus (keyup)=\"getdatatableDestinatinList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #datatableDestAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of datatableDestinationList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"isView(row)\">\n              {{row.destinationLocation}}</div>\n          </ng-container>\n          <ng-container *ngIf=\"row.status === 'COMPLETED'\">\n            {{row.destinationLocation}}\n          </ng-container>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <!-- Material Code -->\n      <ngx-datatable-column [frozenLeft]=\"freezeLeftValue\" name=\"Material Code\" [width]=\"130\" [resizeable]=\"false\"\n        [sortable]=\"false\" prop=\"itemId\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <ng-container *ngIf=\"row.status !== 'COMPLETED'\">\n            <div *ngIf=\"isEdit(row)\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-itemId'] = true\"\n                *ngIf=\"!editing[rowIndex + '-itemId']\">\n                <span class=\"edit-label\">{{row.itemId}}\n                </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <mat-form-field *ngIf=\"editing[rowIndex+ '-itemId']\">\n                <input autofocus matInput [matAutocomplete]=\"datatableMaterialCodeAutocomplete\"\n                  (blur)=\"updateValue(row,$event, 'itemId', rowIndex)\" [value]=\"row.itemId\"\n                  (keyup)=\"filterMaterialCodeDatatables($event,rowIndex)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #datatableMaterialCodeAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of datamaterilcodelist;let i=index\" [value]=\"list.value\"\n                    (click)=\"setMaterialDesDatatable(list.description,rowIndex)\"\n                    (onSelectionChange)=\"setMaterialDesDatatable(list.description,rowIndex)\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"isView(row)\">{{row.itemId}}\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"row.status === 'COMPLETED'\">\n            {{row.itemId}}\n          </ng-container>\n        </ng-template>\n      </ngx-datatable-column>\n      <!-- Material Description -->\n      <ngx-datatable-column [frozenLeft]=\"freezeLeftValue\" name=\"Material Description\" [width]=\"220\" [resizeable]=\"false\"\n        [sortable]=\"false\" prop=\"itemDescription\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.itemDescription}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <!-- Destination Description -->\n      <ngx-datatable-column name=\"Dest Description\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"destinationDescription\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          {{row.destinationDescription}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Cat\" [width]=\"50\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"category\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.category}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"TTE\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"tte\"\n        [summaryTemplate]=\"tteCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.tte}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <!-- Batch Code -->\n      <ngx-datatable-column name=\"Batch\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"batchCode\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <ng-container *ngIf=\"row.status !== 'COMPLETED'\">\n            <div *ngIf=\"isEdit(row)\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-batchCode'] = true\"\n                *ngIf=\"!editing[rowIndex + '-batchCode']\">\n                <span class=\"edit-label\">{{row.batchCode}}\n                </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <mat-form-field *ngIf=\"editing[rowIndex+ '-batchCode']\">\n                <input matInput [matAutocomplete]=\"datatableBatchcodeAutocomplete\"\n                  (blur)=\"updateValue(row,$event, 'batchCode', rowIndex)\" [value]=\"row.batchCode\" autofocus\n                  (keyup)=\"datatablesBatchcode($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #datatableBatchcodeAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of datatablesBatchcodeList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"isView(row)\">\n              {{row.batchCode}}\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"row.status === 'COMPLETED'\">\n            {{row.batchCode}}\n          </ng-container>\n        </ng-template>\n      </ngx-datatable-column>\n\n\n      <!-- Priority -->\n      <ngx-datatable-column name=\"Pr\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"priority\"\n        [summaryFunc]=\"emptySumm\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <!-- plan status is completed then can't edit the field -->\n          <ng-container *ngIf=\"row.status !== 'COMPLETED'\">\n            <div *ngIf=\"isEdit(row)\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-priority'] = true\"\n                *ngIf=\"!editing[rowIndex + '-priority']\">\n                <span class=\"edit-label\">{{row.priority}}\n                </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <ng-container *ngIf=\"editing[rowIndex+ '-priority']\">\n                <input class=\"table-input\" autofocus (blur)=\"updateValue(row,$event, 'priority', rowIndex)\"\n                  [value]=\"row.priority\" (keypress)=\"service.numberOnly($event)\">\n              </ng-container>\n            </div>\n            <div *ngIf=\"isView(row)\">\n              {{row.priority}}\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"row.status === 'COMPLETED'\">\n            {{row.priority}}\n          </ng-container>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <!--MKT segment  -->\n      <ngx-datatable-column name=\"MKT Seg\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"marketSegment\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <ng-container *ngIf=\"row.status !== 'COMPLETED'\">\n            <div *ngIf=\"isEdit(row)\">\n              <div class=\"edit-field\" title=\"Double click to edit\"\n                (click)=\"editing[rowIndex + '-marketSegment'] = true\" *ngIf=\"!editing[rowIndex + '-marketSegment']\">\n                <span class=\"edit-label\">{{row.marketSegment}}\n                </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <ng-container *ngIf=\"editing[rowIndex + '-marketSegment']\">\n                <mat-select autofocus placeholder=\"MKT Segment\" [ngModel]=\"row.marketSegment\"\n                  name=\"mktsegment{{rowIndex}}\" (ngModelChange)=\"updateValue(row,$event, 'marketSegment', rowIndex)\">\n                  <mat-option *ngFor=\"let mktsegment of mktsegmentList\" [value]=\"mktsegment\">\n                    {{mktsegment}}\n                  </mat-option>\n                </mat-select>\n              </ng-container>\n            </div>\n            <div *ngIf=\"isView(row)\">\n              {{row.marketSegment}}\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"row.status === 'COMPLETED'\">\n            {{row.marketSegment}}\n          </ng-container>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <!-- Quantity-->\n      <ngx-datatable-column name=\"Plan Qty\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"quantity\"\n        [summaryTemplate]=\"planQtyCell\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <ng-container *ngIf=\"row.status !== 'COMPLETED'\">\n            <div *ngIf=\"isEdit(row)\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-quantity'] = true\"\n                *ngIf=\"!editing[rowIndex + '-quantity']\">\n                <span class=\"edit-label\">{{row.quantity}}\n                </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <ng-container *ngIf=\"editing[rowIndex+ '-quantity']\">\n                <input class=\"table-input\" autofocus (blur)=\"updateValue(row,$event, 'quantity', rowIndex)\"\n                  [value]=\"row.quantity\" (input)=\"editPlanQty($event,row,rowIndex)\"\n                  (keypress)=\"service.numberOnly($event)\">\n              </ng-container>\n            </div>\n            <div *ngIf=\"isView(row)\">\n              {{row.quantity}}\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"(row.status === 'COMPLETED')\">\n            {{row.quantity}}\n          </ng-container>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <!-- Approve Quantity -->\n      <ngx-datatable-column name=\"App Qty\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"approvedQuantity\"\n        [summaryTemplate]=\"apprQtyCell\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.approvedQuantity}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Un Appr Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"unapprovedQuantity\" [summaryTemplate]=\"unapprQtyCell\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.unapprovedQuantity}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Appr Del\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"deletedApprQuantity\" [summaryTemplate]=\"apprDeleteQtyCell\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.deletedApprQuantity}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Un Appr Del\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"deletedUnApprQuantity\" [summaryTemplate]=\"unapprDeleteQtyCell\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.deletedUnApprQuantity}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Reserved\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"reservedQuantity\"\n        [summaryTemplate]=\"reservedQtyCell\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.reservedQuantity}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Loaded\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"loaded\"\n        [summaryTemplate]=\"loadedQtyCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{(row.loaded)?(row.loaded):0}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Disp\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"dispatchedQuantity\"\n        [summaryTemplate]=\"dispatchedQtyCell\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.dispatchedQuantity}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Avail Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"availableQuantity\" [summaryTemplate]=\"availableQtyCell\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.availableQuantity}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Tot Avail Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"totalAvailableQuantity\" [summaryTemplate]=\"totalAvailableQtyCell\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div>\n            {{row.totalAvailableQuantity}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Qty to be Del Appr\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"deleteApprQuantity\" [summaryFunc]=\"emptySumm\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div *ngIf=\"(((row.totalAvailableQuantity)?(row.totalAvailableQuantity):0) > 0)\">\n            <div class=\"edit-field\" title=\"Double click to edit\"\n              (click)=\"editing[rowIndex + '-deleteApprQuantity'] = true\"\n              *ngIf=\"!editing[rowIndex + '-deleteApprQuantity']\">\n              <span class=\"edit-label\">{{row.deleteApprQuantity}}\n              </span>\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <ng-container *ngIf=\"editing[rowIndex + '-deleteApprQuantity']\">\n              <input class=\"table-input\" autofocus type=\"number\" min=\"0\"\n                (blur)=\"updateValue(row,$event, 'deleteApprQuantity', rowIndex)\" [value]=\"row.deleteApprQuantity\"\n                (input)=\"deleteApprQty($event,row,rowIndex)\" (keypress)=\"service.numberOnly($event)\">\n            </ng-container>\n          </div>\n          <div *ngIf=\"(((row.totalAvailableQuantity)?(row.totalAvailableQuantity):0) == 0)\">\n            {{row.deleteApprQuantity}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Qty to be Del Un Appr\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"deleteUnApprQuantity\" [summaryFunc]=\"emptySumm\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <div *ngIf=\"(((row.totalAvailableQuantity)?(row.totalAvailableQuantity):0) > 0)\">\n            <div class=\"edit-field\" title=\"Double click to edit\"\n              (click)=\"editing[rowIndex + '-deleteUnApprQuantity'] = true\"\n              *ngIf=\"!editing[rowIndex + '-deleteUnApprQuantity']\">\n              <span class=\"edit-label\">{{row.deleteUnApprQuantity}}\n              </span>\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <ng-container *ngIf=\"editing[rowIndex + '-deleteUnApprQuantity']\">\n              <input class=\"table-input\" autofocus oncopy=\"return false\" oncut=\"return false\" onpaste=\"return false\"\n                (blur)=\"updateValue(row,$event, 'deleteUnApprQuantity', rowIndex)\" [value]=\"row.deleteUnApprQuantity\"\n                (input)=\"deleteUnApprQty($event,row,rowIndex)\" (keypress)=\"service.numberOnly($event)\">\n            </ng-container>\n          </div>\n          <div *ngIf=\"(((row.totalAvailableQuantity)?(row.totalAvailableQuantity):0) == 0)\">\n            {{row.deleteUnApprQuantity}}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Avail TTE\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"availbleTTE\"\n        [summaryTemplate]=\"totalAvailableTTEPercentageCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.availbleTTE | number : '1.2-2' }}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Truck Count\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckCount\"\n        [summaryTemplate]=\"truckPercentageCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.truckCount | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Weight (Kg)\" [width]='60' [resizeable]=\"false\" [sortable]=\"false\" prop=\"Weight\"\n      [summaryTemplate]=\"weightCell\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.weight | number : '1.2-2'}}\n      </ng-template>\n    </ngx-datatable-column>\n      <ngx-datatable-column name=\"Available Weight (Kg)\" [width]='80' [resizeable]=\"false\" [sortable]=\"false\" prop=\"totalWeight\"\n        [summaryTemplate]=\"totalWeightCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totalWeight | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Weight Util (%)\" [width]='60' [resizeable]=\"false\" [sortable]=\"false\" prop=\"weightUtil\"\n        [summaryTemplate]=\"totalWeightUtilCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.weightUtil | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Volume (CUMTR)\" [width]='70' [resizeable]=\"false\" [sortable]=\"false\" prop=\"Volume\"\n        [summaryTemplate]=\"volumeCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.volume | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Available Volume (CUMTR)\" [width]='110' [resizeable]=\"false\" [sortable]=\"false\" prop=\"totalVolume\"\n        [summaryTemplate]=\"totalVolumeCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totalVolume | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Volume Util (%)\" [width]='80' [resizeable]=\"false\" [sortable]=\"false\" prop=\"volume\"\n        [summaryTemplate]=\"totalVolumeUtilCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.volumeUtil | number : '1.2-2'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Plan Status\" [width]='100' [resizeable]=\"false\" [sortable]=\"false\" prop=\"appStatus\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.status}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Insert User\" [width]=\"145\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"insertUser\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          {{row.insertUser}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Update User\" [width]='145' [resizeable]=\"false\" [sortable]=\"false\" prop=\"updateUser\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.updateUser}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Insert Date\" [width]='130' [resizeable]=\"false\" [sortable]=\"false\" prop=\"insertDate\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.insertDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Update Date\" [width]='130' [resizeable]=\"false\" [sortable]=\"false\" prop=\"updateDate\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.updateDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Plan Age (Days)\" [width]='70' [resizeable]=\"false\" [sortable]=\"false\" prop=\"planAge\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.planAge}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Comments\" [width]='100' [resizeable]=\"false\" [sortable]=\"false\" prop=\"comments\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <span [attr.title]=\"row.comments\" (click)=\"showIntegrationMessage(row)\">{{\n            (row.comments?.length>9)? (row.comments | slice:0:9)+'..':(row.comments)}}</span>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Status\" [width]='140' [resizeable]=\"false\" [sortable]=\"false\" prop=\"appStatus\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <button class=\"btn btn-sm lightgreen-button\"\n            [ngClass]=\"(row.appStatus=='APPROVED')?'lightgreen-button':'light-red-color'\">\n            {{row.appStatus}}\n          </button>\n        </ng-template>\n      </ngx-datatable-column>\n      <!-- Actions -->\n      <ngx-datatable-column name=\"Action\"  *ngIf=\"responsiveHideShow\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <!-- (row.dispatchedQuantity == 0) && (row.reservedQuantity == 0) -->\n          <button class=\"theme-small-button btn\" matTooltip=\"Modify plan\" (click)=\"rowLevelModifyPlan(row)\"\n            [disabled]=\"(row.isError)\">\n            <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n          </button>\n          <!-- Commented as per new requiremet on 11/07/2019 -->\n          <!-- If the Dispatch Qty & Reserved Qty & Loaded Qty is there He cant do any delet action -->\n          <!-- <span *ngIf=\"(row.dispatchedQuantity == 0) && (row.reservedQuantity == 0) && (row.loaded == 0)\">\n            <button class=\"theme-delete-button btn\" matTooltip=\"Delete plan\" (click)=\"rowlevelDeletePlan(row)\">\n              <i class=\"fa fa-trash-o fa-2x\" aria-hidden=\"true\"></i>\n            </button>\n          </span> -->\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column [width]=\"50\" *ngIf=\"responsiveHideShow\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\"\n        [resizeable]=\"false\" [sortable]=\"false\">\n        <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\n          let-selectFn=\"selectFn\" let-row=\"row\" let-rowIndex=\"rowIndex\">\n          <input type=\"checkbox\" [checked]=\"allRowsSelected\"\n            (change)=\"selectFn(!allRowsSelected);onSelectAll($event)\" />\n        </ng-template>\n        <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\" let-row=\"row\"\n          let-rowIndex=\"rowIndex\" let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\n          <input type=\"checkbox\" [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event);onSelect($event,row)\" />\n        </ng-template>\n      </ngx-datatable-column>\n       <!-- Footer Template starts -->\n       <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\" let-selectedCount=\"selectedCount\"\n          let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected | \n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n            [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n    </ngx-datatable>\n    <!-- Table bottom grid columns -->\n    <ng-template #tteCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{(tteSum)?(tteSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #planQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{planQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #apprQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{apprQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #unapprQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{unapprQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #apprDeleteQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{apprDeleteQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #unapprDeleteQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{unapprDeleteQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #reservedQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{reservedQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #loadedQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{loadedQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #dispatchedQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{dispatchedQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #availableQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{availableQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalAvailableQtyCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{totalAvailableQtySum}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #truckPercentageCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{(TruckPercentageSum)?(TruckPercentageSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalAvailableTTEPercentageCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(totalTTEPercentageSum)?(totalTTEPercentageSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #weightCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(weightSum)?(weightSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalWeightCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(totalWeightSum)?(totalWeightSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalWeightUtilCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(totalWeightUtilSum)?(totalWeightUtilSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #volumeCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(volumeSum)?(volumeSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalVolumeCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(totalVolumeSum)?(totalVolumeSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalVolumeUtilCell>\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{(totalVolumeUtilSum)?(totalVolumeUtilSum | number :'1.2-2'):0}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <!-- Data table ends -->\n\n    <div class=\"text-center margin-TB-20\">\n      <button mat-raised-button color=\"primary\" class=\"btm-action-btn mb-3\" (click)=\"multilevelModifyPlan()\"\n        *ngIf=\"(markasDeletePlans.length > 0)\">Save</button>\n        <!-- Commented as per requiremented on 12/07/2019 -->\n      <!-- <button mat-raised-button color=\"primary\" class=\"mb-3\" (click)=\"multilevelDeletePlan()\"\n        *ngIf=\"(markasDeletePlans.length > 0)\">Delete</button> -->\n    </div>\n  </div>\n</div>\n\n\n<div id=\"commnetsModal\" class=\"modal fade\" role=\"dialog\" data-backdrop=\"static\" data-keyboard=\"false\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Comments</h4>\n      </div>\n      <div class=\"modal-body\">\n        {{modalComment}}\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/planner/modify-plan/modify-plan.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/planner/modify-plan/modify-plan.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW5uZXIvbW9kaWZ5LXBsYW4vbW9kaWZ5LXBsYW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/planner/modify-plan/modify-plan.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/planner/modify-plan/modify-plan.component.ts ***!
  \**************************************************************/
/*! exports provided: ModifyPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyPlanComponent", function() { return ModifyPlanComponent; });
/* harmony import */ var _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/helper-service/helper-service.service */ "./src/app/services/helper-service/helper-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _public_date_adapters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/date.adapters */ "./src/app/public/date.adapters.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* harmony import */ var src_app_public_modify_plan_delete_confirmation_modify_plan_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/public/modify-plan-delete-confirmation/modify-plan-delete-confirmation.component */ "./src/app/public/modify-plan-delete-confirmation/modify-plan-delete-confirmation.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ModifyPlanComponent = /** @class */ (function () {
    function ModifyPlanComponent(service, toastr, helperService, dialog) {
        this.service = service;
        this.toastr = toastr;
        this.helperService = helperService;
        this.dialog = dialog;
        this.isError = false;
        this.datamaterilcodelist = [];
        this.isLoading = false;
        this.isShow = true;
        this.editing = {};
        this.modifyPlanData = [];
        this.editableArr = [];
        this.statuses = [];
        this.planData = [];
        this.openPlanSourceList = [];
        this.page = {
            limit: 10,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.materialGroup = [];
        this.destination = '';
        this.descriptionList = [];
        this.destinationList = [];
        this.materilcodelist = [];
        this.materialDescription = '';
        this.minDate = new Date();
        this.selected = [];
        this.planInfoIds = [];
        this.filterPlanStatus = [];
        this.currentDate = this.helperService.getTodayDate();
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.mktsegmentList = [];
        this.categoryList = [];
        this.fromDispatchDate = '';
        this.toDispatchDate = '';
        this.toDate = '';
        this.fromDate = '';
        this.markasDeletePlans = [];
        this.sourceCodeList = [];
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
        this.standardFTLVolumne = 0;
        this.priorityList = [];
        this.priority = [];
        this.freezeLeftValue = true;
        this.responsiveHideShow = true;
    }
    ModifyPlanComponent.prototype.ngDoCheck = function () {
        var width = $(window).width();
        if (width <= 1024) {
            this.freezeLeftValue = false;
            this.responsiveHideShow = false;
        }
        else {
            this.freezeLeftValue = true;
            this.responsiveHideShow = true;
        }
    };
    ModifyPlanComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "dispatch-plan");
        this.statuses = _constants__WEBPACK_IMPORTED_MODULE_7__["constants"].planStatus;
        this.filterPlanStatus = _constants__WEBPACK_IMPORTED_MODULE_7__["constants"].filterPlanStatus;
        this.source = localStorage.getItem("sourceID");
        // localStorage.getItem("sourceID") ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
        this.roles = _constants__WEBPACK_IMPORTED_MODULE_7__["constants"].roles;
        this.index = 0;
        this.planStatusList = _constants__WEBPACK_IMPORTED_MODULE_7__["constants"].planStatusList;
        this.check_Role_DP_REP = this.service.checkRole();
        if (this.isSoureDisable()) {
            this.sourceCode = localStorage.getItem("sourceID");
            (localStorage.getItem("sourceID") != null && localStorage.getItem("sourceID") != '') ? this.sourceCodeList.push(localStorage.getItem("sourceID")) : null;
        }
        //for getting modify plan 
        var bodyData = {
            'fromDispatchDate': this.currentDate,
            'toDispatchDate': this.currentDate,
            'statuses': this.filterPlanStatus,
            // 'sourceLocation': this.source,
            'sourceCodeList': this.sourceCodeList,
        };
        this.fromDate = this.currentDateAsString;
        this.toDate = this.fromDate;
        this.getModifyPlan(bodyData);
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
    ModifyPlanComponent.prototype.isSoureDisable = function () {
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
    ModifyPlanComponent.prototype.getPlansSourceList = function () {
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
    //for getting modify plan 
    ModifyPlanComponent.prototype.getModifyPlan = function (bodyData) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.planinfo, bodyData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var responseData = response['data'].planItems;
                _this.clearAllSum();
                responseData.forEach(function (element) {
                    // for Row Level TTE count,weight util calculation standred values
                    _this.standredFTLTTE = response['data'].standardFtlTteCapacity;
                    _this.standardFTLWeight = response['data'].standardFtlWeight;
                    _this.standardFTLVolumne = response['data'].standardFTLVolumne;
                    var gettheDate = element.dispatchDate;
                    var splittedData = gettheDate.split("/");
                    var createNewDate = splittedData[1] + "/" + splittedData[0] + "/" + splittedData[2];
                    // Formatted new key for autopopulation of date for datepicker
                    element.formattedDate = new Date(createNewDate).toISOString();
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
                });
                _this.modifyPlanData = responseData.slice();
                _this.page.count = response['data'].total;
                _this.page.limit = response['data'].pageLength;
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
    //for getting category master data
    ModifyPlanComponent.prototype.getCategoryMasterData = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.categoryMasterData).subscribe(function (response) {
            _this.categoryList = response['data'];
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
        });
    };
    ModifyPlanComponent.prototype.getPriorityList = function () {
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
    ModifyPlanComponent.prototype.getMarketSegment = function () {
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
    // onPageSizeChanged(event) {
    //   this.page.limit = event;
    //   this.page.pageSize = this.pageSize;
    //   this.datatablePageData(this.page);
    // }
    ModifyPlanComponent.prototype.isEdit = function (row) {
        var dispQty = (row.dispatchedQuantity) ? (row.dispatchedQuantity) : 0;
        var reserveQty = (row.reservedQuantity) ? (row.reservedQuantity) : 0;
        var loadQty = (row.loaded) ? (row.loaded) : 0;
        if ((dispQty == 0) && (reserveQty == 0) && (loadQty == 0)) {
            return true;
        }
        else {
            return false;
        }
    };
    ModifyPlanComponent.prototype.isView = function (row) {
        var dispQty = (row.dispatchedQuantity) ? (row.dispatchedQuantity) : 0;
        var reserveQty = (row.reservedQuantity) ? (row.reservedQuantity) : 0;
        var loadQty = (row.loaded) ? (row.loaded) : 0;
        if ((dispQty > 0) || (reserveQty > 0) || (loadQty > 0)) {
            return true;
        }
        else {
            return false;
        }
    };
    ModifyPlanComponent.prototype.datatablePageData = function (pageInfo) {
        this.selected = [];
        this.markasDeletePlans = [];
        this.index = pageInfo.offset;
        this.forDateValidation();
        this.clearAllSum();
        var bodyData = {
            'fromDispatchDate': this.fromDispatchDate,
            'toDispatchDate': this.toDispatchDate,
            'index': pageInfo.offset,
            'pageLength': pageInfo.pageSize,
            'destinationCode': this.destination,
            'marketSegment': this.mktsegment,
            'materialCode': this.materialCode,
            'materialDescription': this.materialDescription,
            'materialGroup': this.materialGroup,
            'planId': this.planId,
            'status': this.status,
            'statuses': this.filterPlanStatus,
            // 'sourceLocation': this.source,
            // 'sourceCode': this.sourceCode,
            'planStatus': this.planStatus,
            'insertUser': this.insertUser,
            'priorityList': this.priority,
            'sourceCodeList': this.sourceCodeList,
        };
        this.getModifyPlan(bodyData);
    };
    ModifyPlanComponent.prototype.returnFormateDate = function (data) {
        var formatted = new Date(data), mnth = ("0" + (formatted.getMonth() + 1)).slice(-2), day = ("0" + formatted.getDate()).slice(-2);
        return [day, mnth, formatted.getFullYear()].join("/");
    };
    ModifyPlanComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    ModifyPlanComponent.prototype.updateValue = function (row, event, cell, rowIndex) {
        var modifyIndex = this.modifyPlanData.findIndex(function (data) { return data.id == row.id; });
        if (cell == 'dispatchDate') {
            this.modifyPlanData[modifyIndex][cell] = this.returnFormateDate(event.target.value);
            var splittedData = this.modifyPlanData[modifyIndex][cell].split("/");
            var createNewDate = splittedData[1] + "/" + splittedData[0] + "/" + splittedData[2];
            this.modifyPlanData[modifyIndex]['formattedDate'] = new Date(createNewDate).toISOString();
        }
        else if (cell == 'deleteApprQuantity') {
            this.modifyPlanData[modifyIndex][cell] = (event.target.value == "") ? 0 : event.target.value;
        }
        else {
            this.modifyPlanData[modifyIndex][cell] = (event.target !== undefined) ? (event.target.value) : event;
            console.log(this.modifyPlanData[modifyIndex][cell]);
        }
        // this.editing[modifyIndex + '-' + cell] = false;
        this.modifyPlanData = this.modifyPlanData.slice();
    };
    // Row level Modify Plans
    ModifyPlanComponent.prototype.rowLevelModifyPlan = function (row) {
        var arry = [];
        if (row.deleteUnApprQuantity == '')
            row.deleteUnApprQuantity = 0;
        if (row.deleteApprQuantity == '')
            row.deleteApprQuantity = 0;
        arry.push(row);
        this.modifyService(arry);
    };
    // Multi level modify plans
    ModifyPlanComponent.prototype.multilevelModifyPlan = function () {
        // for(let plan of this.markasDeletePlans){
        //   if(plan['deleteApprQuantity'] == ""){
        //     plan['deleteApprQuantity'] = 0
        //   }
        // }
        var data = this.markasDeletePlans;
        this.modifyService(data);
    };
    //Modify Plans service 
    ModifyPlanComponent.prototype.modifyService = function (data) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.modifyPlan, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.editing = {};
                _this.selected = [];
                _this.markasDeletePlans = [];
                _this.clearAllSum();
                var responseArray = response['data'];
                responseArray.forEach(function (element) {
                    // Find the index to update
                    var index = _this.modifyPlanData.findIndex(function (ele) { return element.id == ele.id; });
                    // add new column in the object "formattedDate" for date autopopulate for datepicker
                    var gettheDate = element.dispatchDate;
                    var splittedData = gettheDate.split("/");
                    var createNewDate = splittedData[1] + "/" + splittedData[0] + "/" + splittedData[2];
                    element.formattedDate = new Date(createNewDate).toISOString();
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
                    if (index > -1) {
                        _this.modifyPlanData[index] = element;
                    }
                });
                _this.modifyPlanData = _this.modifyPlanData.slice();
                _this.isLoading = false;
                _this.toastr.success(response['message']);
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // Delete plan data
    ModifyPlanComponent.prototype.rowlevelDeletePlan = function (row) {
        var arr = [];
        arr.push(row.id);
        this.openDelteConformationPopup(arr);
    };
    ModifyPlanComponent.prototype.multilevelDeletePlan = function () {
        var arr = [];
        this.markasDeletePlans.forEach(function (element) {
            if ((element.dispatchedQuantity == 0) && (element.reservedQuantity == 0) && (element.loaded == 0)) {
                arr.push(element.id);
            }
        });
        this.openDelteConformationPopup(arr);
    };
    ModifyPlanComponent.prototype.openDelteConformationPopup = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_public_modify_plan_delete_confirmation_modify_plan_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_8__["ModifyPlanDeleteConfirmationComponent"], { disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.isLoading = true;
                _this.deleteService(data);
            }
        });
    };
    // Delete service
    ModifyPlanComponent.prototype.deleteService = function (data) {
        var _this = this;
        this.service.delete_service_multiParam(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.ModifyPlansdelete, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.isLoading = false;
                _this.selected = [];
                _this.markasDeletePlans = [];
                _this.clearAllSum();
                data.forEach(function (element) {
                    var index = _this.modifyPlanData.findIndex(function (item) { return item.id == element; });
                    _this.modifyPlanData.splice(index, 1);
                });
                _this.modifyPlanData = _this.modifyPlanData.slice();
                _this.toastr.success(response['message']);
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // clear the data what the user entered
    ModifyPlanComponent.prototype.clearAll = function () {
        this.destination = '';
        this.mktsegment = [];
        this.materialCode = "";
        this.fromDate = '';
        this.toDate = '';
        this.materialDescription = "";
        this.destinationDesc = "";
        this.descriptionList = [];
        this.materialGroup = [];
        this.planId = null;
        this.status = [];
        this.materilcodelist = [];
        this.destinationList = [];
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
    ModifyPlanComponent.prototype.refreshData = function () {
        this.selected = [];
        this.markasDeletePlans = [];
        this.modifyPlanData = [];
        this.table.offset = 0;
        this.clearAll();
        this.forDateValidation();
        this.clearAllSum();
        var bodyData = {
            'fromDispatchDate': this.currentDate,
            'toDispatchDate': this.currentDate,
            'destinationCode': this.destination,
            'index': 0,
            'marketSegment': this.mktsegment,
            'materialCode': this.materialCode,
            'materialDescription': this.materialDescription,
            'materialGroup': this.materialGroup,
            'pageLength': this.page.limit,
            'planId': this.planId,
            'status': this.status,
            'statuses': this.filterPlanStatus,
            // 'sourceLocation': this.source,
            'insertUser': this.insertUser,
            // 'sourceCode': this.sourceCode
            'sourceCodeList': this.sourceCodeList
        };
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.fromDate = this.currentDateAsString;
        this.toDate = this.fromDate;
        this.getModifyPlan(bodyData);
    };
    // filter destination list
    ModifyPlanComponent.prototype.getUserSearchData = function (event) {
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
    //filter material description 
    ModifyPlanComponent.prototype.filterMaterialDescription = function (event) {
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
    // set material code
    ModifyPlanComponent.prototype.setMaterialCode = function (value) {
        var _this = this;
        setTimeout(function () {
            _this.materialCode = value;
        }, 300);
    };
    // filter destination lsit for datatable
    ModifyPlanComponent.prototype.getdatatableDestinatinList = function (event) {
        var _this = this;
        var destinationKey = event.target.value;
        if (event.target.value.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.datatableDestinationList = [];
            var index = 0;
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?destination=' + destinationKey + "&index=" + index).subscribe(function (response) {
                _this.datatableDestinationList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter batch code in datatable
    ModifyPlanComponent.prototype.datatablesBatchcode = function (event) {
        var _this = this;
        var destinationKey = event.target.value;
        if (event.target.value.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.datatablesBatchcodeList = [];
            var index = 0;
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?batchCode=' + destinationKey + "&index=" + index).subscribe(function (response) {
                _this.datatablesBatchcodeList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //filter material code by user input
    ModifyPlanComponent.prototype.filterMaterialCode = function (event, rowIndex) {
        var _this = this;
        var filtervalue = event.target.value;
        this.materialDescription = '';
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.materilcodelist = [];
            this.materialDescription = '';
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?materialCode=' + filtervalue).subscribe(function (response) {
                _this.materilcodelist = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // material code filter api for datatables
    ModifyPlanComponent.prototype.filterMaterialCodeDatatables = function (event, rowIndex) {
        var _this = this;
        var indexdata = rowIndex;
        var filtervalue = event.target.value;
        this.modifyPlanData[indexdata]['itemDescription'] = '';
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.datamaterilcodelist = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?materialCode=' + filtervalue).subscribe(function (response) {
                _this.datamaterilcodelist = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //set value for material description
    ModifyPlanComponent.prototype.setMaterialDescription = function (value) {
        this.materialDescription = value;
    };
    // set values for materila description for datatable
    ModifyPlanComponent.prototype.setMaterialDesDatatable = function (value, rowIndex) {
        var _this = this;
        setTimeout(function () {
            _this.modifyPlanData[rowIndex]['itemDescription'] = value;
        }, 200);
    };
    // Date Validation
    ModifyPlanComponent.prototype.forDateValidation = function () {
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
    ModifyPlanComponent.prototype.plannerSearch = function () {
        this.selected = [];
        this.markasDeletePlans = [];
        this.table.offset = 0;
        this.forDateValidation();
        var bodyData = {
            'fromDispatchDate': this.fromDispatchDate,
            'toDispatchDate': this.toDispatchDate,
            'destinationCode': this.destination,
            'index': this.page.offset,
            'marketSegment': this.mktsegment,
            'materialCode': this.materialCode,
            'materialDescription': this.materialDescription,
            'materialGroup': this.materialGroup,
            'pageLength': this.page.limit,
            'planId': this.planId,
            'status': this.status,
            'statuses': this.filterPlanStatus,
            // 'sourceLocation': this.source,
            // 'sourceCode': this.sourceCode,
            'planStatus': this.planStatus,
            'insertUser': this.insertUser,
            'priorityList': this.priority,
            'sourceCodeList': this.sourceCodeList
        };
        if (this.fromDate != '' && this.fromDate != null) {
            if (this.toDate != '' && this.toDate != null) {
                this.modifyPlanData = [];
                this.getModifyPlan(bodyData);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.getModifyPlan(bodyData);
        }
    };
    ModifyPlanComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    ModifyPlanComponent.prototype.deleteApprQty = function (event, row, rowIndex) {
        var rowData = row;
        ///rowData.deletedUnApprQuantity = 0;
        if (Number(event.target.value) <= row.availableQuantity) {
            //proced further
            row.isError = false;
        }
        else {
            row.isError = true;
            this.toastr.error("Approval Delete Quantity sholud be less than or equal to Avaliable Quantity");
        }
    };
    ModifyPlanComponent.prototype.deleteUnApprQty = function (event, row, rowIndex) {
        var rowData = row;
        //rowData.deletedUnApprQuantity = 0;
        // if (Number(event.target.value) <= (row.unapprovedQuantity - row.deletedUnApprQuantity)) 
        if (Number(event.target.value) <= (row.unapprovedQuantity)) {
            //proced further
            row.isError = false;
        }
        else {
            row.isError = true;
            this.toastr.error("UnApproval Delete Quantity sholud be less than or equal to Un Approved Quantity");
        }
    };
    ModifyPlanComponent.prototype.editPlanQty = function (event, row, rowIndex) {
        var rowData = row;
        //rowData.deletedUnApprQuantity = 0;
        if (Number(event.target.value) >= (row.approvedQuantity)) {
            //proced further
            row.isError = false;
        }
        else {
            row.isError = true;
            this.toastr.error(" Quantity sholud be more than or equal to Approved Quantity");
        }
    };
    ModifyPlanComponent.prototype.onSelect = function (event, data) {
        if (event.target.checked) {
            if (data.availableQuantity > 0) {
                data.deleteApprQuantity = data.availableQuantity;
            }
            this.markasDeletePlans.push(data);
        }
        else {
            data.deleteApprQuantity = 0;
            var index = this.markasDeletePlans.indexOf(data);
            this.markasDeletePlans.splice(index, 1);
        }
        console.log(this.markasDeletePlans, "markasDeletePlans");
        this.tteSum = this.markasDeletePlans.reduce(function (sum, _a) {
            var tte = _a.tte;
            return sum + tte;
        }, 0);
        this.planQtySum = this.markasDeletePlans.reduce(function (sum, _a) {
            var quantity = _a.quantity;
            return sum + quantity;
        }, 0);
        this.apprQtySum = this.markasDeletePlans.reduce(function (sum, _a) {
            var approvedQuantity = _a.approvedQuantity;
            return sum + approvedQuantity;
        }, 0);
        this.unapprQtySum = this.markasDeletePlans.reduce(function (sum, _a) {
            var unapprovedQuantity = _a.unapprovedQuantity;
            return sum + unapprovedQuantity;
        }, 0);
        this.apprDeleteQtySum = this.markasDeletePlans.reduce(function (sum, _a) {
            var deletedApprQuantity = _a.deletedApprQuantity;
            return sum + deletedApprQuantity;
        }, 0);
        this.unapprDeleteQtySum = this.markasDeletePlans.reduce(function (sum, _a) {
            var deletedUnApprQuantity = _a.deletedUnApprQuantity;
            return sum + deletedUnApprQuantity;
        }, 0);
        this.reservedQtySum = this.markasDeletePlans.reduce(function (sum, _a) {
            var reservedQuantity = _a.reservedQuantity;
            return sum + reservedQuantity;
        }, 0);
        this.loadedQtySum = this.markasDeletePlans.reduce(function (sum, _a) {
            var loaded = _a.loaded;
            return sum + loaded;
        }, 0);
        this.dispatchedQtySum = this.markasDeletePlans.reduce(function (sum, _a) {
            var dispatchedQuantity = _a.dispatchedQuantity;
            return sum + dispatchedQuantity;
        }, 0);
        this.availableQtySum = this.markasDeletePlans.reduce(function (sum, _a) {
            var availableQuantity = _a.availableQuantity;
            return sum + availableQuantity;
        }, 0);
        this.totalAvailableQtySum = this.markasDeletePlans.reduce(function (sum, _a) {
            var totalAvailableQuantity = _a.totalAvailableQuantity;
            return sum + totalAvailableQuantity;
        }, 0);
        this.totalTTEPercentageSum = this.markasDeletePlans.reduce(function (sum, _a) {
            var availbleTTE = _a.availbleTTE;
            return sum + availbleTTE;
        }, 0);
        this.TruckPercentageSum = this.markasDeletePlans.reduce(function (sum, _a) {
            var truckCount = _a.truckCount;
            return sum + truckCount;
        }, 0);
        this.weightSum = this.markasDeletePlans.reduce(function (sum, _a) {
            var weight = _a.weight;
            return sum + weight;
        }, 0);
        this.totalWeightSum = this.markasDeletePlans.reduce(function (sum, _a) {
            var totalWeight = _a.totalWeight;
            return sum + totalWeight;
        }, 0);
        this.totalWeightUtilSum = this.markasDeletePlans.reduce(function (sum, _a) {
            var weightUtil = _a.weightUtil;
            return sum + weightUtil;
        }, 0);
        this.volumeSum = this.markasDeletePlans.reduce(function (sum, _a) {
            var volume = _a.volume;
            return sum + volume;
        }, 0);
        this.totalVolumeSum = this.markasDeletePlans.reduce(function (sum, _a) {
            var totalVolume = _a.totalVolume;
            return sum + totalVolume;
        }, 0);
        this.totalVolumeUtilSum = this.markasDeletePlans.reduce(function (sum, _a) {
            var volumeUtil = _a.volumeUtil;
            return sum + volumeUtil;
        }, 0);
    };
    ModifyPlanComponent.prototype.onSelectAll = function (event) {
        var _this = this;
        this.markasDeletePlans = [];
        this.modifyPlanData.forEach(function (data) {
            _this.onSelect(event, data);
        });
    };
    ModifyPlanComponent.prototype.markasDelete = function () {
        // this.markasDeletePlans
    };
    // Clearing all the sum values after success response
    ModifyPlanComponent.prototype.clearAllSum = function () {
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
    //export excel data
    ModifyPlanComponent.prototype.export = function () {
        var _this = this;
        if (this.modifyPlanData.length > 0) {
            this.forDateValidation();
            var data = {
                'fromDispatchDate': this.fromDispatchDate,
                'toDispatchDate': this.toDispatchDate,
                'destinationCode': this.destination,
                // 'index': this.index,
                'marketSegment': this.mktsegment,
                'materialCode': this.materialCode,
                'materialDescription': this.materialDescription,
                'materialGroup': this.materialGroup,
                'pageLength': this.page.count,
                'planId': this.planId,
                'status': this.status,
                'statuses': this.filterPlanStatus,
                // 'sourceLocation': this.source,
                'sourceCodeList': this.sourceCodeList,
                'planStatus': this.planStatus,
                'insertUser': this.insertUser,
                'priorityList': this.priority,
            };
            this.isLoading = true;
            this.newModifyPlanData = [];
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.planinfo, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    _this.newModifyPlanData = response['data'].planItems;
                    var excelRawData = _this.newModifyPlanData;
                    var newExcelData = [];
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
                        var data_1 = {
                            "PlanId": excelRawData[i].planId,
                            "Dispatch Date": excelRawData[i].dispatchDate,
                            "Source": excelRawData[i].sourceLocation,
                            "Destination": excelRawData[i].destinationLocation,
                            "Material Code": excelRawData[i].itemId,
                            "Material Description": excelRawData[i].itemDescription,
                            "Dest Description": excelRawData[i].destinationDescription,
                            "Category": excelRawData[i].category,
                            // "Insert User": excelRawData[i].insertUser,
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
                            "Quantity to be Delete Approval": +excelRawData[i].deleteApprQuantity,
                            "Quantity to be Delete UnApproval": +excelRawData[i].deleteUnApprQuantity,
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
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_6__["writeFile"](workBook, 'modifyplanData.xlsx');
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
    //set value destination
    ModifyPlanComponent.prototype.setDestination = function (value) {
        //  this.destinationDesc = value;
        this.destination = value;
    };
    //set value to destination description
    ModifyPlanComponent.prototype.setDestDescription = function (value) {
        this.destinationDesc = value;
    };
    ModifyPlanComponent.prototype.getUserDestinationList = function (event) {
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
    ModifyPlanComponent.prototype.addEvent = function (type, event) {
        if (event.target.value) {
            var checkToDate = this.toDate;
            console.log("Check--->1", checkToDate);
            if (this.toDate === this.currentDateAsString) {
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
    ModifyPlanComponent.prototype.emptySumm = function () {
        return null;
    };
    // Filter source location
    ModifyPlanComponent.prototype.getfilterSource = function (event) {
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
    ModifyPlanComponent.prototype.showIntegrationMessage = function (row) {
        this.modalComment = row.comments;
        $("#commnetsModal").modal('show');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"])
    ], ModifyPlanComponent.prototype, "table", void 0);
    ModifyPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modify-plan',
            template: __webpack_require__(/*! ./modify-plan.component.html */ "./src/app/planner/modify-plan/modify-plan.component.html"),
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _public_date_adapters__WEBPACK_IMPORTED_MODULE_4__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: _public_date_adapters__WEBPACK_IMPORTED_MODULE_4__["APP_DATE_FORMATS"]
                }
            ],
            styles: [__webpack_require__(/*! ./modify-plan.component.scss */ "./src/app/planner/modify-plan/modify-plan.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__["HelperServiceService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ModifyPlanComponent);
    return ModifyPlanComponent;
}());



/***/ }),

/***/ "./src/app/planner/modify-plan/modify-plan.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/planner/modify-plan/modify-plan.module.ts ***!
  \***********************************************************/
/*! exports provided: ModifyPlanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyPlanModule", function() { return ModifyPlanModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _modify_plan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modify-plan.component */ "./src/app/planner/modify-plan/modify-plan.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_public_modify_plan_delete_confirmation_modify_plan_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/public/modify-plan-delete-confirmation/modify-plan-delete-confirmation.component */ "./src/app/public/modify-plan-delete-confirmation/modify-plan-delete-confirmation.component.ts");
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: _modify_plan_component__WEBPACK_IMPORTED_MODULE_6__["ModifyPlanComponent"] },
];
var ModifyPlanModule = /** @class */ (function () {
    function ModifyPlanModule() {
    }
    ModifyPlanModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_9__["CustomDatePipeModule"]
            ],
            declarations: [
                _modify_plan_component__WEBPACK_IMPORTED_MODULE_6__["ModifyPlanComponent"],
                src_app_public_modify_plan_delete_confirmation_modify_plan_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_8__["ModifyPlanDeleteConfirmationComponent"]
            ],
            providers: [],
            entryComponents: [
                _modify_plan_component__WEBPACK_IMPORTED_MODULE_6__["ModifyPlanComponent"],
                src_app_public_modify_plan_delete_confirmation_modify_plan_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_8__["ModifyPlanDeleteConfirmationComponent"]
            ]
        })
    ], ModifyPlanModule);
    return ModifyPlanModule;
}());



/***/ }),

/***/ "./src/app/public/modify-plan-delete-confirmation/modify-plan-delete-confirmation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/public/modify-plan-delete-confirmation/modify-plan-delete-confirmation.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Are you sure,do you want to delete ?</h2>\n<mat-dialog-content class=\"mat-typography\">\n\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n  <!-- <button mat-button-raised mat-dialog-close>Cancel</button> -->\n  <button mat-raised-button  color=\"primary\" [mat-dialog-close]=\"true\">Yes</button> &nbsp;\n  <!-- <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button> -->\n  <button mat-stroked-button color=\"primary\" [mat-dialog-close]=\"false\" cdkFocusInitial>No</button>\n</mat-dialog-actions>\n\n\n"

/***/ }),

/***/ "./src/app/public/modify-plan-delete-confirmation/modify-plan-delete-confirmation.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/public/modify-plan-delete-confirmation/modify-plan-delete-confirmation.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9tb2RpZnktcGxhbi1kZWxldGUtY29uZmlybWF0aW9uL21vZGlmeS1wbGFuLWRlbGV0ZS1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/public/modify-plan-delete-confirmation/modify-plan-delete-confirmation.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/public/modify-plan-delete-confirmation/modify-plan-delete-confirmation.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ModifyPlanDeleteConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyPlanDeleteConfirmationComponent", function() { return ModifyPlanDeleteConfirmationComponent; });
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


var ModifyPlanDeleteConfirmationComponent = /** @class */ (function () {
    function ModifyPlanDeleteConfirmationComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ModifyPlanDeleteConfirmationComponent.prototype.ngOnInit = function () {
    };
    ModifyPlanDeleteConfirmationComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ModifyPlanDeleteConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify-plan-delete-confirmation',
            template: __webpack_require__(/*! ./modify-plan-delete-confirmation.component.html */ "./src/app/public/modify-plan-delete-confirmation/modify-plan-delete-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./modify-plan-delete-confirmation.component.scss */ "./src/app/public/modify-plan-delete-confirmation/modify-plan-delete-confirmation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ModifyPlanDeleteConfirmationComponent);
    return ModifyPlanDeleteConfirmationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=planner-modify-plan-modify-plan-module.js.map