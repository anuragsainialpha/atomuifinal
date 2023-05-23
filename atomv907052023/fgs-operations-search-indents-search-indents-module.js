(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fgs-operations-search-indents-search-indents-module"],{

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

/***/ "./src/app/fgs-operations/search-indents/search-indents.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/fgs-operations/search-indents/search-indents.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h4 class=\"manulal-plan-header\">\n    <b>Indents > View Indents </b>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refresh()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"Filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h4>\n  <div class=\"clearfix\"></div>\n  <!-- Create Plan by Manual Fields 1st row-->\n  <div class=\"manualplan-fields\" *ngIf=\"IsShow\">\n    <div class=\"col-md-12 row\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row tab-loadslip-fields\">\n          <div class=\"col-md-1 pr-0 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formPicker\" placeholder=\"From Date\" [(ngModel)]=\"fromDate\"\n                  name=\"fromDate\" (dateChange)=\"addEvent('fromDate', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toPicker\" [min]=\"fromDate\" placeholder=\"To Date\"\n                  [(ngModel)]=\"toDate\" name=\"toDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toPicker [disabled]=\"!fromDate\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <!-- check_Role_DP_REP == userRoles.planner3 -->\n          <div class=\"col-md-1 pr-0\" *ngIf=\"service.isDPREPRole()\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event)\" autocomplete=\"off\"\n                [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"sourceCode\" name=\"source\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n                  [(ngModel)]=\"destination\" name=\"destination\" (keyup)=\"getfilterDestination($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\"\n                    (click)=\"setDestDescription(list.description)\"\n                    (onSelectionChange)=\"setDestDescription(list.description)\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination Description\" aria-label=\"State\"\n                  [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destination\"\n                  (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                    (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                    <span>({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Truck/Container Type\" [(ngModel)]=\"truckType\" name=\"trcktype\" multiple>\n                  <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Transporter\" placeholder=\"Transporter\"\n                  (keyup)=\"getfilterTransporter($event)\" autocomplete=\"off\" [matAutocomplete]=\"transporterAutocomplete\"\n                  [(ngModel)]=\"transporter\" name=\"transporter\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #transporterAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of transporterList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"indentId\" name=\"indentid\" placeholder=\"Indent Id\" oninput=\"this.value = this.value.toUpperCase()\"> \n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Category\" [(ngModel)]=\"materialGrp\" name=\"materialGrp\" multiple>\n                  <mat-option *ngFor=\"let category of categoryList\" [value]=\"category\">{{category}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Status\" [(ngModel)]=\"status\" name=\"status\" multiple>\n                  <mat-option *ngFor=\"let data of statuses\" [value]=\"data.value\">{{data.key}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"indentSearch()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"ngx-table-custom-scroll  ngx-table-tr-custom-scroll\">\n    <ngx-datatable #table class='material' [rows]='indentData' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n      [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\" [scrollbarH]=\"true\"\n      [externalPaging]=\"true\" [offset]=\"page.offset\" (page)=\"datatablePageData($event)\" [summaryRow]=\"true\"\n      [summaryHeight]=\"'auto'\" [summaryPosition]=\"'bottom'\" [selected]=\"selected\" [selectionType]=\"'checkbox'\"\n      [selectAllRowsOnPage]=\"false\">\n      <ngx-datatable-column name=\"Source\" [width]=\"50\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"SouceLocation\"\n        [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.SouceLocation}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Disp Date\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"dispatchDate\"\n        [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.dispatchDate | customDateFormat | date:'dd-MMM-yyyy'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Dest\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destination\"\n        [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destination}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Dest Description\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destDis\"\n        [frozenLeft]=\"freezeLeftValue\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destDis}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Truck/Cont Type\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckType\"\n        [frozenLeft]=\"freezeLeftValue\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.truckType}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Created Date\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"updateUser\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.insertDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Port Of Discharge\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"pod\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.pod}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Country Of Destination\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"destCountryName\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destCountryName}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Transporter\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"transporter\"\n        [frozenLeft]=\"freezeLeftValue\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.transporter}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Indent Id\" [width]=\"170\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"indentId\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.indentId}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Frt\" [width]=\"40\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"isFreightAvailable\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.isFreightAvailable}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Cat\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"materailGrp\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.materailGrp}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Indented\" [summaryTemplate]=\"totalIndented\" [width]=\"70\" [resizeable]=\"false\"\n        [sortable]=\"true\" prop=\"indented\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.indented}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Cancelled\" [summaryTemplate]=\"totalCancelled\" [width]=\"70\" [resizeable]=\"false\"\n        [sortable]=\"true\" prop=\"cancelled\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.cancelled}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Net Indented\" [summaryTemplate]=\"totalrequested\" [width]=\"80\" [resizeable]=\"false\"\n        [sortable]=\"true\" prop=\"netRequested\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.netRequested}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Trans Confirmed\" [summaryTemplate]=\"totalConfirmed\" [width]=\"80\" [resizeable]=\"false\"\n        [sortable]=\"true\" prop=\"confirmed\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.confirmed}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Trans Declined\" [summaryTemplate]=\"totalDeclined\" [width]=\"80\" [resizeable]=\"false\"\n        [sortable]=\"true\" prop=\"declined\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.declined}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"To Be Confirmed\" [summaryTemplate]=\"totalToBeConfirmed\" [width]=\"80\"\n        [resizeable]=\"false\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <!-- {{row.netBalance}} -->\n          {{row.toBeConfirmed}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Reported\" [summaryTemplate]=\"totalReported\" [width]=\"70\" [resizeable]=\"false\"\n        [sortable]=\"true\" prop=\"reported\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.reported}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Rejected\" [summaryTemplate]=\"totalRejected\" [width]=\"70\" [resizeable]=\"false\"\n        [sortable]=\"true\" prop=\"rejected\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.rejected}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Net Balance\" [summaryTemplate]=\"totalNetbalance\" [width]=\"70\" [resizeable]=\"false\"\n        [sortable]=\"true\" prop=\"netBalance\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.netBalance}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Indent Age (Days)\" [width]=\"75\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"indentAge\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.indentAge}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Status\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"status\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.status}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Insert User\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"insertUser\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.insertUser}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Update User\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"updateUser\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.updateUser}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Comments\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"comments\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <div [title]=\"row.comments\" [ngClass]=\"{'cursor-pointer':row.comments?.length>10}\"\n            (click)=\"showComments(row.comments,'comments')\" *ngIf=\"(row.comments)\">\n            {{ (row.comments?.length>10)? (row.comments | slice:0:10)+'..':(row.comments) }}\n          </div>\n        </ng-template>\n      </ngx-datatable-column>\n      <!-- Hide the action Buttons for Planner Role -->\n      <div\n        *ngIf=\"(service.checkRole() != userRoles.planner1) && (service.checkRole() != userRoles.planner2) && (service.checkRole() != userRoles.planner3)\">\n        <ngx-datatable-column name=\"Actions\" [width]=\"100\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            <button class=\"theme-delete-button\" (click)=\"GeneratePdf(row.indentId)\" matTooltip=\"Generate Pdf\">\n              <i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i>\n            </button>\n            <button class=\"theme-small-button\" (click)=\"sentEmailToTransporter(row.indentId)\" matTooltip=\"Send E-Mail\">\n              <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n        </ngx-datatable-column>\n      </div>\n      <!-- added check boxes -->\n      <ngx-datatable-column [width]=\"50\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\"\n        [resizeable]=\"false\" [sortable]=\"false\">\n        <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\n          let-selectFn=\"selectFn\" let-row=\"row\" let-rowIndex=\"rowIndex\">\n          <input type=\"checkbox\" [checked]=\"allRowsSelected\"\n            (change)=\"selectFn(!allRowsSelected);onSelectAll($event)\" />\n        </ng-template>\n        <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\" let-row=\"row\"\n          let-rowIndex=\"rowIndex\" let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\n          <input type=\"checkbox\" [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event);onSelect($event,row)\" />\n        </ng-template>\n      </ngx-datatable-column>\n      <!-- Footer Template starts -->\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected |\n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n            [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n            (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n    </ngx-datatable>\n    <ng-template #totalIndented let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{ totalIndentedCount }}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <!-- Cancelled Count -->\n    <ng-template #totalCancelled let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalCancelledCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalrequested let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalNetIndentCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalNetbalance let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalNetBalanceCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalConfirmed let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalConfirmedCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalDeclined let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalDeclinedCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalToBeConfirmed let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalToBeConfirmedCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalReported let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalReportedCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalRejected let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalRejectedCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n\n\n\n<!-- View Loadslips  for coorsponding shipment -->\n<div class=\"modal\" id=\"commentModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{commentHeader}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <p>{{commentMsg}}</p>\n      </div>\n      <!-- Modal footer -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/fgs-operations/search-indents/search-indents.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/fgs-operations/search-indents/search-indents.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".manualplan-fields {\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0px; }\n  .manualplan-fields p > i {\n    cursor: pointer; }\n  .manualplan-fields .col-md-3 {\n    padding: 0px 15px; }\n  .manualplan-fields .wid-12p {\n    flex: 0 0 12%;\n    max-width: 12%; }\n  .manualplan-fields .wid-13p {\n    flex: 0 0 13%;\n    max-width: 13%; }\n  .manualplan-fields .form-group {\n    margin-bottom: 0; }\n  .manualplan-fields .form-group .mat-form-field .mat-form-field-wrapper {\n      padding-bottom: 0.5em !important; }\n  .manualplan-fields label {\n    display: block; }\n  .margin-top-10 {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmdzLW9wZXJhdGlvbnMvc2VhcmNoLWluZGVudHMvQzpcXFVzZXJzXFxBbnVyYWdTYWluaVxcRG93bmxvYWRzXFxhdG9tLXVpX29yaWdpbmFsXzIxMDkyMDIyXFxhdG9tLXVpL3NyY1xcYXBwXFxmZ3Mtb3BlcmF0aW9uc1xcc2VhcmNoLWluZGVudHNcXHNlYXJjaC1pbmRlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7RUFIaEI7SUFLUSxlQUFlLEVBQUE7RUFMdkI7SUFRUSxpQkFBaUIsRUFBQTtFQVJ6QjtJQVdRLGFBQWE7SUFDYixjQUFjLEVBQUE7RUFadEI7SUFlUSxhQUFhO0lBQ2IsY0FBYyxFQUFBO0VBaEJ0QjtJQW1CUSxnQkFBZ0IsRUFBQTtFQW5CeEI7TUFzQmdCLGdDQUFnQyxFQUFBO0VBdEJoRDtJQTJCUSxjQUFjLEVBQUE7RUFHdEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zncy1vcGVyYXRpb25zL3NlYXJjaC1pbmRlbnRzL3NlYXJjaC1pbmRlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9taXhpbnMnO1xuXG5cbi5tYW51YWxwbGFuLWZpZWxkc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBwID4gaXtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuY29sLW1kLTN7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgIH1cbiAgICAud2lkLTEycHtcbiAgICAgICAgZmxleDogMCAwIDEyJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMiU7XG4gICAgfVxuICAgIC53aWQtMTNwe1xuICAgICAgICBmbGV4OiAwIDAgMTMlO1xuICAgICAgICBtYXgtd2lkdGg6IDEzJTtcbiAgICB9XG4gICAgLmZvcm0tZ3JvdXB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsYWJlbHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuLm1hcmdpbi10b3AtMTB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/fgs-operations/search-indents/search-indents.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/fgs-operations/search-indents/search-indents.component.ts ***!
  \***************************************************************************/
/*! exports provided: SearchIndentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIndentsComponent", function() { return SearchIndentsComponent; });
/* harmony import */ var _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/helper-service/helper-service.service */ "./src/app/services/helper-service/helper-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _public_date_adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/date.adapters */ "./src/app/public/date.adapters.ts");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SearchIndentsComponent = /** @class */ (function () {
    function SearchIndentsComponent(service, toastr, helperService) {
        this.service = service;
        this.toastr = toastr;
        this.helperService = helperService;
        this.isLoading = false;
        this.indentData = [];
        this.indentDate = '';
        this.indentId = '';
        this.transporter = '';
        this.source = '';
        this.destination = '';
        this.truckType = [];
        this.materialGrp = [];
        this.count = 0;
        this.totalIndentedCount = 0;
        this.totalCancelledCount = 0;
        this.totalNetIndentCount = 0;
        this.totalNetBalanceCount = 0;
        this.totalConfirmedCount = 0;
        this.totalDeclinedCount = 0;
        this.totalToBeConfirmedCount = 0;
        this.totalReportedCount = 0;
        this.totalRejectedCount = 0;
        this.totalVIewIndentData = [];
        this.toBeConfirmedCount = 0;
        this.IsShow = true;
        this.states = [
            { value: 'dlr-0', viewValue: 'DLR' },
            { value: 'gjr-1', viewValue: 'GJR' }
        ];
        this.page = {
            limit: 10,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.statuses = [];
        this.status = [];
        this.createIndentSuccess = false;
        this.descriptionList = [];
        this.categoryList = [];
        this.truckList = [];
        this.currentDate = this.helperService.getTodayDate();
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.fromDispatchDate = '';
        this.toDispatchDate = '';
        this.toDate = '';
        this.fromDate = '';
        this.selected = [];
        this.freezeLeftValue = true;
    }
    SearchIndentsComponent.prototype.ngDoCheck = function () {
        var width = $(window).width();
        if (width < 1024) {
            this.freezeLeftValue = false;
        }
        else {
            this.freezeLeftValue = true;
        }
    };
    SearchIndentsComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "fgs-indents");
        this.userRoles = src_app_constants__WEBPACK_IMPORTED_MODULE_7__["constants"].roles;
        this.statuses = src_app_constants__WEBPACK_IMPORTED_MODULE_7__["constants"].indent_Filter_status_list;
        this.check_Role_DP_REP = this.service.checkRole();
        // fromDispatchDate: string = '';
        // toDispatchDate: string = '';
        // toDate: string = '';
        // fromDate: string = '';
        //for getting view indent Data from server
        var bodyData = {
            'fromDispatchDate': this.currentDate,
            'toDispatchDate': this.currentDate
        };
        this.fromDate = this.currentDateAsString;
        this.toDate = this.fromDate;
        this.getViewIndentData(bodyData);
        //for getting category master data
        this.getCategoryMasterData();
        // for getting truck type master
        this.getTruckTypeMasterData();
    };
    //for getting view indent Data from server
    SearchIndentsComponent.prototype.getViewIndentData = function (bodyData) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.viewSearchIndents, bodyData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.clearAllSum();
                _this.indentData = response['data'].indents;
                for (var _i = 0, _a = _this.indentData; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if ((item.netRequested) < (item.confirmed + item.declined)) {
                        item['toBeConfirmed'] = 0;
                    }
                    else {
                        item['toBeConfirmed'] = (item.netRequested) - (item.confirmed + item.declined);
                    }
                }
                _this.indentData = _this.indentData.slice();
                _this.page.count = response['data'].total;
                _this.page.limit = response['data'].pageLength;
                _this.isLoading = false;
            }
            else {
                _this.toastr.error(response['message'], "!Error");
                _this.isLoading = false;
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    SearchIndentsComponent.prototype.onSelect = function (event, row) {
        if (event.target.checked) {
            this.totalVIewIndentData.push(row);
        }
        else {
            var index = this.totalVIewIndentData.indexOf(row);
            this.totalVIewIndentData.splice(index, 1);
        }
        this.totalCancelledCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var cancelled = _a.cancelled;
            return sum + cancelled;
        }, 0);
        this.totalConfirmedCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var confirmed = _a.confirmed;
            return sum + confirmed;
        }, 0);
        this.totalDeclinedCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var declined = _a.declined;
            return sum + declined;
        }, 0);
        this.totalIndentedCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var indented = _a.indented;
            return sum + indented;
        }, 0);
        this.totalRejectedCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var rejected = _a.rejected;
            return sum + rejected;
        }, 0);
        this.totalReportedCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var reported = _a.reported;
            return sum + reported;
        }, 0);
        this.totalNetIndentCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var netRequested = _a.netRequested;
            return sum + netRequested;
        }, 0);
        this.totalNetBalanceCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var netBalance = _a.netBalance;
            return sum + netBalance;
        }, 0);
        this.totalToBeConfirmedCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var toBeConfirmed = _a.toBeConfirmed;
            return sum + toBeConfirmed;
        }, 0);
        console.log('totalViewIndentData', this.totalVIewIndentData);
    };
    //set value destination
    SearchIndentsComponent.prototype.setDestination = function (value) {
        //  this.destinationDesc = value;
        this.destination = value;
    };
    SearchIndentsComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    //set value to destination description
    SearchIndentsComponent.prototype.setDestDescription = function (value) {
        this.destinationDesc = value;
    };
    //show Comments in Modal
    SearchIndentsComponent.prototype.showComments = function (comments, type) {
        if (type == 'loadslip') {
            this.commentHeader = 'Loadslip Comments';
        }
        else {
            this.commentHeader = 'Comments';
        }
        this.commentMsg = comments;
        $('#commentModal').modal('show');
    };
    SearchIndentsComponent.prototype.onSelectAll = function (event) {
        var _this = this;
        this.totalIndentedCount = 0;
        this.totalCancelledCount = 0;
        this.totalConfirmedCount = 0;
        this.totalDeclinedCount = 0;
        this.totalRejectedCount = 0;
        this.totalReportedCount = 0;
        this.totalNetIndentCount = 0;
        this.totalNetBalanceCount = 0;
        this.totalToBeConfirmedCount = 0;
        this.totalVIewIndentData = [];
        this.indentData.forEach(function (data) {
            _this.onSelect(event, data);
        });
    };
    SearchIndentsComponent.prototype.clearAllSum = function () {
        this.totalCancelledCount = 0;
        this.totalConfirmedCount = 0;
        this.totalDeclinedCount = 0;
        this.totalIndentedCount = 0;
        this.totalRejectedCount = 0;
        this.totalReportedCount = 0;
        this.totalNetIndentCount = 0;
        this.totalNetBalanceCount = 0;
        this.totalToBeConfirmedCount = 0;
    };
    //for getting category master data
    SearchIndentsComponent.prototype.getCategoryMasterData = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.categoryMasterData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.categoryList = response['data'];
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "!Error");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
        });
    };
    // for getting truck type master
    SearchIndentsComponent.prototype.getTruckTypeMasterData = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.truckTypeMasterData).subscribe(function (response) {
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
    //Show Filter 
    SearchIndentsComponent.prototype.showFilter = function () {
        this.IsShow = !this.IsShow;
    };
    //get filter destination result
    SearchIndentsComponent.prototype.getfilterDestination = function (event) {
        var _this = this;
        this.destinationDesc = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                _this.destinationList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    SearchIndentsComponent.prototype.getUserDestinationList = function (event) {
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
    // filter Transporter details
    SearchIndentsComponent.prototype.getfilterTransporter = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.transporterList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.searchFilter + '?transporter=' + filtervalue).subscribe(function (response) {
                _this.transporterList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //filter material group
    SearchIndentsComponent.prototype.getfilterMaterialGrp = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.materialGrpList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.searchFilter + '?materialGrp=' + filtervalue).subscribe(function (response) {
                _this.materialGrpList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //clear the data
    SearchIndentsComponent.prototype.clearAll = function () {
        this.fromDate = '';
        this.toDate = '';
        this.destination = '';
        this.destinationDesc = '';
        this.descriptionList = [];
        this.destinationList = [];
        this.truckType = [];
        this.transporter = '';
        this.transporterList = [];
        this.materialGrp = [];
        this.materialGrpList = [];
        this.indentId = '';
        this.status = [];
        this.sourceCode = '';
        this.sourceList = [];
    };
    //refersh
    SearchIndentsComponent.prototype.refresh = function () {
        this.table.offset = 0;
        this.clearAll();
        this.clearAllSum();
        this.defaultIndentCount();
        this.selected = [];
        this.fromDate = this.currentDateAsString;
        this.toDate = this.fromDate;
        var bodyData = {
            'fromDispatchDate': this.currentDate,
            'toDispatchDate': this.currentDate
        };
        this.getViewIndentData(bodyData);
    };
    //export excel data
    SearchIndentsComponent.prototype.export = function () {
        var _this = this;
        if (this.indentData.length > 0) {
            this.isLoading = true;
            this.forDateValidation();
            var data = {
                'fromDispatchDate': this.fromDispatchDate,
                'toDispatchDate': this.toDispatchDate,
                'destination': this.destination,
                // 'index': this.index,
                'indentID': this.indentId,
                'materialGrp': this.materialGrp,
                'transporter': this.transporter,
                'truckType': this.truckType,
                'pageLength': this.page.count,
                'status': this.status,
                'source': this.sourceCode
            };
            // this.service.post_service_DownLoadExcel(ApiserviceService.apisList.viewSearchIndents, data).subscribe(response => {
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.viewSearchIndents, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    // Uncomment when export excel is gernerated in backend
                    // var blob = new Blob([response.body], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
                    // var filename = 'IndentsData.xlsx';
                    // const link = window.URL.createObjectURL(blob);
                    // const a = document.createElement('a');
                    // document.body.appendChild(a);
                    // a.setAttribute('style', 'display: none');
                    // a.href = link;
                    // a.download = filename
                    // a.click();
                    // window.URL.revokeObjectURL(link);
                    // a.remove();
                    var newViewPlanData = response['data'].indents;
                    var excelRawData = newViewPlanData;
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        if ((excelRawData[i].netRequested) < (excelRawData[i].confirmed + excelRawData[i].declined)) {
                            excelRawData[i]['toBeConfirmed'] = 0;
                        }
                        else {
                            excelRawData[i]['toBeConfirmed'] = (excelRawData[i].netRequested) - (excelRawData[i].confirmed + excelRawData[i].declined);
                        }
                        var data_1 = {
                            "Source": excelRawData[i].SouceLocation,
                            "Dispatch Date": _this.service.customDateFormat(excelRawData[i].dispatchDate),
                            "Destination": excelRawData[i].destination,
                            "Dest Description": excelRawData[i].destDis,
                            "Truck/Container Type": excelRawData[i].truckType,
                            "Transporter": excelRawData[i].transporter,
                            "Created Date": _this.service.customDateTimeFormat(excelRawData[i].insertDate),
                            "Port Of Discharge": excelRawData[i].pod,
                            "Country Of Destination": excelRawData[i].destCountryName,
                            "Indent Id": excelRawData[i].indentId,
                            "Freight Available": excelRawData[i].isFreightAvailable,
                            "Category": excelRawData[i].materailGrp,
                            "Indented": +excelRawData[i].indented,
                            "Cancelled": +excelRawData[i].cancelled,
                            "Net Indented": +excelRawData[i].netRequested,
                            "Trans Confirmed": +excelRawData[i].confirmed,
                            "Trans Declined": +excelRawData[i].declined,
                            "To Be Confirmed": +excelRawData[i].toBeConfirmed,
                            "Reported": +excelRawData[i].reported,
                            "Rejected": +excelRawData[i].rejected,
                            "Net Balance": +excelRawData[i].netBalance,
                            "Indent Age (Days)": +excelRawData[i].indentAge,
                            "Status": excelRawData[i].status,
                            "Insert User": excelRawData[i].insertUser,
                            "Update User": excelRawData[i].updateUser,
                            "Comments": excelRawData[i].comments
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_6__["writeFile"](workBook, 'ViewIndents.xlsx');
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
    SearchIndentsComponent.prototype.addEvent = function (type, event) {
        if (event.target.value) {
            /* Checking if selected from date greater than to date.
           Clearing the toDate field when from date greater than to date */
            var checkToDate = this.toDate;
            console.log("Check--->1", checkToDate);
            if (this.toDate == this.currentDateAsString) {
                // on page load we are defaluting the  to date with string. Comparing string with date is not possible
                // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
                checkToDate = new Date();
                console.log("Check--->2", checkToDate);
            }
            if (this.toDate && (this.fromDate > checkToDate)) {
                this.toDate = '';
            }
            // this.toDate = '';
        }
    };
    SearchIndentsComponent.prototype.defaultIndentCount = function () {
        this.totalIndentedCount = 0;
        this.totalCancelledCount = 0;
        this.totalConfirmedCount = 0;
        this.totalDeclinedCount = 0;
        this.totalRejectedCount = 0;
        this.totalReportedCount = 0;
        this.totalNetIndentCount = 0;
        this.totalNetBalanceCount = 0;
        this.totalToBeConfirmedCount = 0;
        this.totalVIewIndentData = [];
    };
    // Date Validation
    SearchIndentsComponent.prototype.forDateValidation = function () {
        if (this.fromDate != '' && this.fromDate != null) {
            this.fromDispatchDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(this.fromDate)).format("DD/MM/YYYY");
        }
        else {
            this.fromDispatchDate = '';
        }
        if (this.toDate != '' && this.toDate != null) {
            this.toDispatchDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(this.toDate)).format("DD/MM/YYYY");
        }
        else {
            this.toDispatchDate = '';
        }
    };
    // datatables with server side pagination
    SearchIndentsComponent.prototype.datatablePageData = function (pageInfo) {
        this.forDateValidation();
        this.defaultIndentCount();
        this.clearAllSum();
        this.selected = [];
        var bodyData = {
            'fromDispatchDate': this.fromDispatchDate,
            'toDispatchDate': this.toDispatchDate,
            'index': pageInfo.offset,
            'pageLength': pageInfo.pageSize,
            'indentID': this.indentId,
            'materialGrp': this.materialGrp,
            'transporter': this.transporter,
            'truckType': this.truckType,
            'status': this.status,
            "source": this.sourceCode
        };
        this.getViewIndentData(bodyData);
    };
    //Indent Search API
    SearchIndentsComponent.prototype.indentSearch = function () {
        this.table.offset = 0;
        this.forDateValidation();
        this.defaultIndentCount();
        this.selected = [];
        var bodyData = {
            'fromDispatchDate': this.fromDispatchDate,
            'toDispatchDate': this.toDispatchDate,
            'indentID': this.indentId,
            'materialGrp': this.materialGrp,
            'transporter': this.transporter,
            'truckType': this.truckType,
            'destination': this.destination,
            'status': this.status,
            "source": this.sourceCode
        };
        if (this.fromDate != '' && this.fromDate != null) {
            if (this.toDate != '' && this.toDate != null) {
                this.getViewIndentData(bodyData);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.getViewIndentData(bodyData);
        }
    };
    //send email to the transporter
    SearchIndentsComponent.prototype.sentEmailToTransporter = function (indentID) {
        var _this = this;
        var indentIds = [];
        indentIds.push(indentID);
        var data = {
            indentIds: indentIds
        };
        this.isLoading = true;
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.sendEmail, data).subscribe(function (response) {
            if (response['statusCode'] == '200') {
                _this.isLoading = false;
                _this.toastr.success(response['message']);
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
    //Download PDF of the indent
    SearchIndentsComponent.prototype.GeneratePdf = function (indentID) {
        var _this = this;
        this.isLoading = true;
        var indentIds = [];
        indentIds.push(indentID);
        var data = {
            indentIds: indentIds
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.indentPDF, data).subscribe(function (response) {
            if (response['statusCode'] == '200') {
                var responseData = response['data'];
                var linkSource = 'data:application/pdf;base64,' + responseData;
                var element = document.createElement('a');
                element.setAttribute('href', linkSource);
                element.setAttribute('download', indentID);
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
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
    // Filter source location
    SearchIndentsComponent.prototype.getfilterSource = function (event) {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DatatableComponent"])
    ], SearchIndentsComponent.prototype, "table", void 0);
    SearchIndentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-indents',
            template: __webpack_require__(/*! ./search-indents.component.html */ "./src/app/fgs-operations/search-indents/search-indents.component.html"),
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: _public_date_adapters__WEBPACK_IMPORTED_MODULE_3__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: _public_date_adapters__WEBPACK_IMPORTED_MODULE_3__["APP_DATE_FORMATS"]
                }
            ],
            styles: [__webpack_require__(/*! ./search-indents.component.scss */ "./src/app/fgs-operations/search-indents/search-indents.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__["HelperServiceService"]])
    ], SearchIndentsComponent);
    return SearchIndentsComponent;
}());



/***/ }),

/***/ "./src/app/fgs-operations/search-indents/search-indents.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/fgs-operations/search-indents/search-indents.module.ts ***!
  \************************************************************************/
/*! exports provided: SearchIndentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIndentsModule", function() { return SearchIndentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_indents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-indents.component */ "./src/app/fgs-operations/search-indents/search-indents.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
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









// import { CustomDateFormat } from 'src/app/custom-date-pipe';
var routes = [
    { path: '', component: _search_indents_component__WEBPACK_IMPORTED_MODULE_4__["SearchIndentsComponent"] },
];
var SearchIndentsModule = /** @class */ (function () {
    function SearchIndentsModule() {
    }
    SearchIndentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__["CustomDatePipeModule"]
            ],
            declarations: [
                _search_indents_component__WEBPACK_IMPORTED_MODULE_4__["SearchIndentsComponent"],
            ]
        })
    ], SearchIndentsModule);
    return SearchIndentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=fgs-operations-search-indents-search-indents-module.js.map