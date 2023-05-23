(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transporter-assign-trucks-assign-trucks-module"],{

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

/***/ "./src/app/transporter/assign-trucks/assign-trucks.component.html":
/*!************************************************************************!*\
  !*** ./src/app/transporter/assign-trucks/assign-trucks.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h4 class=\"manulal-plan-header\">\n    Assign Truck\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"Filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h4>\n  <div class=\"clearfix\"></div>\n  <div class=\"manualplan-fields\" *ngIf=\"IsShow\">\n    <div class=\"col-md-12 row\">\n        <div class=\"col-md-12 padding-right-40\">\n            <div class=\"row tab-loadslip-fields\">\n      <div class=\"col-md-1 pr-0\">\n        <div class=\"form-group\">\n          <mat-form-field>\n            <input matInput disabled placeholder=\"From Date\" [matDatepicker]=\"fromDate\" [(ngModel)]=\"startDate\"\n              name=\"startDate\" (dateChange)=\"addEvent('change', $event)\">\n            <mat-datepicker-toggle matSuffix [for]=\"fromDate\"></mat-datepicker-toggle>\n            <mat-datepicker #fromDate disabled=\"false\"></mat-datepicker>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"col-md-1 pr-0\">\n        <div class=\"form-group\">\n          <mat-form-field>\n            <input matInput disabled placeholder=\"To Date\" [matDatepicker]=\"toDate\" [min]=\"startDate\"\n              [(ngModel)]=\"endDate\" name=\"endDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"toDate\"></mat-datepicker-toggle>\n            <mat-datepicker #toDate [disabled]=\"!startDate\"></mat-datepicker>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"col-md-1 pr-0\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event)\" autocomplete=\"off\"\n            [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"sourceCode\" name=\"source\" oninput=\"this.value = this.value.toUpperCase()\">\n          <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n            <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n              <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      \n      <div class=\"col-md-1 pr-0\">\n        <div class=\"form-group\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n              [(ngModel)]=\"destination\" name=\"destination\" (keyup)=\"getfilterDestination($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n            <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n              <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\"\n                (click)=\"setDestDescription(list.description)\"\n                (onSelectionChange)=\"setDestDescription(list.description)\">\n                <span>{{list.value}}</span>\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"col-md-1 pr-0\">\n        <div class=\"form-group\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Destination Description\" aria-label=\"State\"\n              [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destination\"\n              (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n            <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n              <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                <span>({{list.description}})</span>\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"col-md-2 pr-0\">\n        <div class=\"form-group\">\n          <mat-form-field>\n            <mat-select placeholder=\"Truck Type\" [(ngModel)]=\"truckType\" name=\"truckType\" multiple>\n              <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n      <!-- <div class=\"col-md-1 pr-0\">\n        <div class=\"form-group\">\n          <mat-form-field>\n            <input matInput aria-label=\"Transporter\" placeholder=\"Transporter\"\n              (keyup)=\"getfilterTransporter($event)\" autocomplete=\"off\" [matAutocomplete]=\"transporterAutocomplete\"\n              [(ngModel)]=\"transporter\" name=\"transporter\">\n            <mat-autocomplete #transporterAutocomplete=\"matAutocomplete\">\n              <mat-option *ngFor=\"let list of transporterList\" [value]=\"list.value\">\n                <span>{{list.value}}</span>\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n      </div> -->\n      <div class=\"col-md-2 pr-0\">\n        <div class=\"form-group\">\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"indentId\" placeholder=\"Indent Id\" name=\"indentId\" oninput=\"this.value = this.value.toUpperCase()\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"col-md-1 pr-0\">\n        <div class=\"form-group\">\n          <mat-form-field>\n            <mat-select placeholder=\"Category\" [(ngModel)]=\"materialGrp\" name=\"materialGrp\" multiple>\n              <mat-option *ngFor=\"let category of categoryList\" [value]=\"category\">{{category}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"col-md-1 pr-0\">\n        <div class=\"form-group\">\n          <mat-form-field>\n            <mat-select placeholder=\"Status\" [(ngModel)]=\"status\" name=\"status\" multiple>\n              <mat-option *ngFor=\"let data of statuses\" [value]=\"data.value\">{{data.key}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n      \n      </div>\n    </div>\n    <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"fiterData()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ngx-datatable #table class='material  ngx-table-custom-scroll ngx-table-tr-custom-scroll' [rows]='transporterIndents'\n    [scrollbarH]=\"true\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\"\n    [externalPaging]=\"true\" [count]=\"page.count\" [limit]=\"page.limit\" [offset]=\"page.offset\"\n    (page)=\"datatablePageData($event)\">\n    <ngx-datatable-column name=\"Source\" [width]=\"70\" [sortable]=\"true\" prop=\"SouceLocation\" [frozenLeft]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.SouceLocation}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Disp Date\" [width]=\"90\" [sortable]=\"true\" prop=\"dispatchDate\" [frozenLeft]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.dispatchDate | customDateFormat | date:'dd-MMM-yyyy'}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Dest\" [width]=\"70\" [sortable]=\"true\" prop=\"destination\" [frozenLeft]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destination}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Dest Description\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"destDis\"\n    [frozenLeft]=\"freezeLeftValue\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destDis}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Truck/Cont Type\" [width]=\"120\" [sortable]=\"true\" prop=\"truckType\" >\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckType}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Transporter\" [width]=\"120\" [sortable]=\"true\" prop=\"transporter\" >\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.transporter}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Created Date\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"updateUser\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.insertDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Port Of Dispatch\" [width]=\"120\" [sortable]=\"true\" prop=\"pod\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.pod}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Country Of Destination\" [width]=\"120\" [sortable]=\"true\" prop=\"destCountryName\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.destCountryName}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Indent Id\" [width]=\"170\" [sortable]=\"true\" prop=\"indentId\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.indentId}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Fr\" [width]=\"40\" [sortable]=\"true\" prop=\"isFreightAvailable\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.isFreightAvailable}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Cat\" [width]=\"80\" [sortable]=\"true\" prop=\"materailGrp\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.materailGrp}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Indented\" [width]=\"70\" [sortable]=\"true\" prop=\"indented\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.indented}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Cancelled\" [width]=\"70\" [sortable]=\"true\" prop=\"cancelled\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.cancelled}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Net Indented\" [width]=\"70\" [sortable]=\"true\" prop=\"netRequested\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.netRequested}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Trans Confirmed\" [width]=\"80\" [sortable]=\"true\" prop=\"confirmed\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n        <div *ngIf=\"(row.status != 'CANCELLED') && (row.status != 'CLOSED') \">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-confirmed'] = true\"\n            *ngIf=\"!editing[rowIndex + '-confirmed']\">\n            <span class=\"edit-label\">\n              {{row.confirmed?row.confirmed:0}}\n            </span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <mat-form-field *ngIf=\"editing[rowIndex + '-confirmed']\">\n            <input matInput (blur)=\"updateValue($event, 'confirmed', row)\" autocomplete=\"off\"\n              [value]=\"row.confirmed?row.confirmed:0\" (keypress)=\"service.numberOnly($event)\" />\n          </mat-form-field>\n        </div>\n        <div *ngIf=\"(row.status == 'CANCELLED') && (row.status == 'CLOSED')\">\n          {{row.confirmed?row.confirmed:0}}\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Trans Declined\" [width]=\"80\" [sortable]=\"true\" prop=\"declined\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n        <div *ngIf=\"(row.status != 'CANCELLED') && (row.status != 'CLOSED')\">\n          <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-declined'] = true\"\n            *ngIf=\"!editing[rowIndex + '-declined']\">\n            <span class=\"edit-label\">\n              {{row.declined?row.declined:0}}\n            </span>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n          </div>\n          <mat-form-field *ngIf=\"editing[rowIndex + '-declined']\">\n            <input matInput (change)=\"updateValue($event, 'declined', row)\" autocomplete=\"off\" [value]=\"row.declined\"\n              (keypress)=\"service.numberOnly($event)\" />\n          </mat-form-field>\n        </div>\n        <div *ngIf=\"(row.status == 'CANCELLED') && (row.status == 'CLOSED')\">\n          {{row.declined?row.declined:0}}\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"To Be Confirmed\" [width]=\"80\" [sortable]=\"true\" prop=\"netRequested\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.toBeConfirmed?row.toBeConfirmed:0}}\n        <!-- {{(row.netRequested) - (row.confirmed +row.declined)}} -->\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Reported\" [width]=\"70\" [sortable]=\"true\" prop=\"reported\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.reported?row.reported:0}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Rejected\" [width]=\"70\" [sortable]=\"true\" prop=\"rejected\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.rejected?row.rejected:0}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Net Balance\" [width]=\"70\" [sortable]=\"true\" prop=\"netBalance\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.netBalance?row.netBalance:0}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Indent Age (Days)\" [width]=\"75\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"indentAge\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.indentAge}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Status\" [width]=\"80\" [sortable]=\"true\" prop=\"status\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.status}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Insert User\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"insertUser\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.insertUser}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Update User\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"updateUser\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.updateUser}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Comments\" [width]=\"130\" [sortable]=\"true\" prop=\"comments\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <div [title]=\"row.comments\" [ngClass]=\"{'cursor-pointer':row.comments?.length>10}\"\n          (click)=\"showComments(row.comments)\" *ngIf=\"row.comments\">\n          {{(row.comments?.length>10)? (row.comments | slice:0:10)+'..':(row.comments)}}\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Actions\" [width]=\"80\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <button class=\"btn theme-small-button\" (click)=\"UpdateIndent(row)\"\n          [disabled]=\"(row.status == 'CANCELLED') || (row.status == 'CLOSED')\" matTooltip=\"Update Indent\">\n          <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n        </button>\n        <!-- <button class=\"theme-delete-button\" (click)=\"assignDriver(row)\" matTooltip=\"Assign Driver\">\n            <i class=\"fa fa-truck\" aria-hidden=\"true\"></i>\n          </button> -->\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- Footer Template starts -->\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedCount\">\n            {{selectedCount.toLocaleString()}} Selected |\n          </span>\n          Showing {{(offset * pageSize)+1}} to {{(rowCount>\n              (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n          {{(rowCount)}} records.\n        </div>\n        <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n          [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n          [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n          (change)=\"table.onFooterPage($event)\">\n        </datatable-pager>\n      </ng-template>\n    </ngx-datatable-footer>\n    <!-- Footer Template Ends -->\n  </ngx-datatable>\n\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"integrationMsgModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Comment</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{commentsMsg}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"saveComments()\">Save</button> -->\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/transporter/assign-trucks/assign-trucks.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/transporter/assign-trucks/assign-trucks.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".manualplan-fields {\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0px; }\n  .manualplan-fields p > i {\n    cursor: pointer; }\n  .manualplan-fields .col-md-3 {\n    padding: 0px 15px; }\n  .manualplan-fields .wid-12p {\n    flex: 0 0 12%;\n    max-width: 12%; }\n  .manualplan-fields .wid-13p {\n    flex: 0 0 13%;\n    max-width: 13%; }\n  .manualplan-fields .form-group {\n    margin-bottom: 0; }\n  .manualplan-fields .form-group .mat-form-field .mat-form-field-wrapper {\n      padding-bottom: 0.5em !important; }\n  .manualplan-fields label {\n    display: block; }\n  .margin-top-10 {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNwb3J0ZXIvYXNzaWduLXRydWNrcy9DOlxcVXNlcnNcXEFudXJhZ1NhaW5pXFxEb3dubG9hZHNcXGF0b20tdWlfb3JpZ2luYWxfMjEwOTIwMjJcXGF0b20tdWkvc3JjXFxhcHBcXHRyYW5zcG9ydGVyXFxhc3NpZ24tdHJ1Y2tzXFxhc3NpZ24tdHJ1Y2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7RUFIaEI7SUFLUSxlQUFlLEVBQUE7RUFMdkI7SUFRUSxpQkFBaUIsRUFBQTtFQVJ6QjtJQVdRLGFBQWE7SUFDYixjQUFjLEVBQUE7RUFadEI7SUFlUSxhQUFhO0lBQ2IsY0FBYyxFQUFBO0VBaEJ0QjtJQW1CUSxnQkFBZ0IsRUFBQTtFQW5CeEI7TUFzQmdCLGdDQUFnQyxFQUFBO0VBdEJoRDtJQTJCUSxjQUFjLEVBQUE7RUFHdEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RyYW5zcG9ydGVyL2Fzc2lnbi10cnVja3MvYXNzaWduLXRydWNrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvbWl4aW5zJztcblxuXG4ubWFudWFscGxhbi1maWVsZHN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcCA+IGl7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmNvbC1tZC0ze1xuICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgICB9XG4gICAgLndpZC0xMnB7XG4gICAgICAgIGZsZXg6IDAgMCAxMiU7XG4gICAgICAgIG1heC13aWR0aDogMTIlO1xuICAgIH1cbiAgICAud2lkLTEzcHtcbiAgICAgICAgZmxleDogMCAwIDEzJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMyU7XG4gICAgfVxuICAgIC5mb3JtLWdyb3Vwe1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGFiZWx7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbi5tYXJnaW4tdG9wLTEwe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/transporter/assign-trucks/assign-trucks.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/transporter/assign-trucks/assign-trucks.component.ts ***!
  \**********************************************************************/
/*! exports provided: AssignTrucksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignTrucksComponent", function() { return AssignTrucksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/public/date.adapters */ "./src/app/public/date.adapters.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/helper-service/helper-service.service */ "./src/app/services/helper-service/helper-service.service.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AssignTrucksComponent = /** @class */ (function () {
    function AssignTrucksComponent(router, activateRoute, service, toastr, helperService) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.service = service;
        this.toastr = toastr;
        this.helperService = helperService;
        this.transporterIndents = [];
        this.gpsStatus = [
            { value: 'YES', viewValue: 'Yes' },
            { value: 'NO', viewValue: 'No' },
        ];
        this.page = {
            limit: 10,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.IsShow = true;
        this.truckData = [];
        this.driverData = [];
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.startDate = this.currentDateAsString;
        this.endDate = this.currentDateAsString;
        this.indentId = '';
        this.destination = '';
        this.descriptionList = [];
        this.truckType = [];
        this.objDriverData = {
            indentId: '',
            truckNumber: '',
            truckType: '',
            driver: '',
            mobile: '',
            licenseNumber: '',
            rcWeight: '',
            length: '',
            width: '',
            height: '',
            isGPS: true,
            gpsProvider: ''
        };
        // minDate = new Date();
        this.IsAssignDriver = false;
        this.editing = {};
        this.truckList = [];
        this.statuses = [];
        this.freezeLeftValue = false;
        this.sourceCode = '';
        var data = {
            'fromDispatchDate': this.startDate ? (moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format("DD/MM/YYYY")) : '',
            'toDispatchDate': this.endDate ? (moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('DD/MM/YYYY')) : '',
        };
        this.getAssignTrucksData(data);
    }
    AssignTrucksComponent.prototype.ngDoCheck = function () {
        var width = $(window).width();
        if (width < 1024) {
            this.freezeLeftValue = false;
        }
        else {
            this.freezeLeftValue = true;
        }
    };
    AssignTrucksComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "assign-trucks");
        this.statuses = src_app_constants__WEBPACK_IMPORTED_MODULE_10__["constants"].indent_Filter_status_list;
        // for getting truck type master
        this.getTruckTypeMasterData();
        //for getting category master data
        this.getCategoryMasterData();
    };
    AssignTrucksComponent.prototype.getAssignTrucksData = function (data) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.transporterIndent, data).subscribe(function (response) {
            console.log("response", response);
            if (response['statusCode'] == 200) {
                var responseData = response['data'];
                for (var _i = 0, _a = responseData.indents; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if ((item.netRequested) < (item.confirmed + item.declined)) {
                        item['toBeConfirmed'] = 0;
                    }
                    else {
                        item['toBeConfirmed'] = (item.netRequested) - (item.confirmed + item.declined);
                    }
                }
                _this.transporterIndents = responseData.indents;
                _this.transporterIndents = _this.transporterIndents.slice();
                _this.page.limit = responseData.pageLength;
                _this.page.count = responseData.total;
                // this.page.offset = responseData.index;
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
    AssignTrucksComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    // for getting truck type master
    AssignTrucksComponent.prototype.getTruckTypeMasterData = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.truckTypeMasterData).subscribe(function (response) {
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
    AssignTrucksComponent.prototype.updateValue = function (event, cell, row) {
        // this.editing[rowIndex + '-' + cell] = false;
        var modifiedIndex = this.transporterIndents.findIndex(function (item) { return item.indentId == row.indentId; });
        this.transporterIndents[modifiedIndex][cell] = Number(event.target.value);
        this.transporterIndents = this.transporterIndents.slice();
        console.log('UPDATED!', this.transporterIndents[modifiedIndex][cell]);
    };
    AssignTrucksComponent.prototype.showFilter = function () {
        this.IsShow = !this.IsShow;
    };
    //get filter destination result
    AssignTrucksComponent.prototype.getfilterDestination = function (event) {
        var _this = this;
        this.destinationDesc = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
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
    //clear All  the Data
    AssignTrucksComponent.prototype.clearAll = function () {
        this.startDate = '';
        this.endDate = '';
        this.indentId = '';
        this.destination = '';
        this.destinationDesc = '';
        this.descriptionList = [];
        this.destinationList = [];
        this.truckType = [];
        this.endDate = '';
        this.materialGrp = [];
        this.status = [];
        this.transporter = '';
        this.sourceList = [];
        this.sourceCode = '';
    };
    //set value destination
    AssignTrucksComponent.prototype.setDestination = function (value) {
        //  this.destinationDesc = value;
        this.destination = value;
    };
    //set value to destination description
    AssignTrucksComponent.prototype.setDestDescription = function (value) {
        this.destinationDesc = value;
    };
    AssignTrucksComponent.prototype.getUserDestinationList = function (event) {
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
    AssignTrucksComponent.prototype.refreshData = function () {
        this.page.offset = 0;
        this.clearAll();
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.startDate = this.currentDateAsString;
        this.endDate = this.helperService.getTodayDateASString();
        var data = {
            'fromDispatchDate': this.startDate ? (moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format("DD/MM/YYYY")) : '',
            'toDispatchDate': this.endDate ? (moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('DD/MM/YYYY')) : '',
        };
        this.getAssignTrucksData(data);
    };
    AssignTrucksComponent.prototype.export = function () {
        var _this = this;
        if (this.transporterIndents.length > 0) {
            this.isLoading = true;
            var startDate = void 0;
            var endDate = void 0;
            if (this.startDate && this.startDate != null) {
                startDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.startDate)).format("DD/MM/YYYY");
            }
            if (this.endDate && this.endDate != null) {
                endDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.endDate)).format("DD/MM/YYYY");
            }
            var data = {
                // 'indentID': this.indentId,
                // 'destination': this.destination,
                // 'fromDispatchDate': startDate,
                // 'toDispatchDate': endDate,
                // 'truckType': this.truckType,
                'fromDispatchDate': startDate,
                'toDispatchDate': endDate,
                'indentID': this.indentId,
                'transporter': this.transporter,
                'truckType': this.truckType,
                'destination': this.destination,
                'materialGrp': this.materialGrp,
                'status': this.status,
                'index': this.index,
                'pageLength': this.page.count,
                'source': this.sourceCode
            };
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.transporterIndent, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var newViewPlanData = response['data'].indents;
                    console.log("newViewPlanData", newViewPlanData);
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
                            "Indented": excelRawData[i].indented,
                            "Cancelled": excelRawData[i].cancelled,
                            "Net Indented": excelRawData[i].netRequested,
                            "Trans Confirmed": excelRawData[i].confirmed,
                            "Trans Declined": excelRawData[i].declined,
                            "To Be Confirmed": excelRawData[i].toBeConfirmed,
                            "Reported": excelRawData[i].reported,
                            "Rejected": excelRawData[i].rejected,
                            "Net Balance": excelRawData[i].netBalance,
                            "Indent Age (Days)": excelRawData[i].indentAge,
                            "Status": excelRawData[i].status,
                            "Insert User": excelRawData[i].insertUser,
                            "Update User": excelRawData[i].updateUser,
                            "Comments": excelRawData[i].comments
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_7__["writeFile"](workBook, 'assignTrucks.xlsx');
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
        }
        else {
            this.toastr.error("No records found to export", "Error!");
        }
    };
    //server side pagination 
    AssignTrucksComponent.prototype.datatablePageData = function (pageInfo) {
        this.transporterIndents = [];
        this.index = pageInfo.offset;
        var startDate;
        var endDate;
        if (this.startDate && this.startDate != null) {
            startDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.startDate)).format("DD/MM/YYYY");
        }
        if (this.endDate && this.endDate != null) {
            endDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.endDate)).format("DD/MM/YYYY");
        }
        var datatabledata = {
            index: pageInfo.offset,
            pageLength: pageInfo.pageSize,
            indentID: this.indentId,
            destination: this.destination,
            fromDispatchDate: startDate,
            toDispatchDate: endDate,
            truckType: this.truckType,
            source: this.sourceCode
        };
        this.getAssignTrucksData(datatabledata);
    };
    //update Indent from Transporter
    AssignTrucksComponent.prototype.UpdateIndent = function (row) {
        var _this = this;
        this.isLoading = true;
        var data = {
            confirmed: row.confirmed,
            declined: row.declined,
            indentId: row.indentId
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.updateIndent, data).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                var updatebleIndex = _this.transporterIndents.findIndex(function (resp) { return resp.indentId == row.indentId; });
                var responseData = response['data'];
                if ((responseData.netRequested) < (responseData.confirmed + responseData.declined)) {
                    responseData['toBeConfirmed'] = 0;
                }
                else {
                    responseData['toBeConfirmed'] = (responseData.netRequested) - (responseData.confirmed + responseData.declined);
                }
                _this.transporterIndents[updatebleIndex] = responseData;
                _this.transporterIndents = _this.transporterIndents.slice();
                _this.toastr.success(response['message']);
                _this.editing = {};
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
    //assignDriver Details
    AssignTrucksComponent.prototype.assignDriver = function (rowData) {
        this.reportedTrucks = [];
        var totalTrucksRequested = rowData.indented;
        this.numberofManualEntries = totalTrucksRequested - this.reportedTrucks.length;
        var resporterTrucks = rowData.reportedTrucks;
        this.reportedTrucks = resporterTrucks;
        this.reportedTrucks = this.reportedTrucks.slice();
        // this.manualTruckAssign();
        this.IsReportedIndentsShow = true;
        console.log(this.reportedTrucks);
    };
    //filter creteria
    AssignTrucksComponent.prototype.fiterData = function () {
        this.table.offset = 0;
        var startDate;
        var endDate;
        if (this.startDate && this.startDate != null) {
            startDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.startDate)).format("DD/MM/YYYY");
        }
        if (this.endDate && this.endDate != null) {
            endDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.endDate)).format("DD/MM/YYYY");
        }
        var data = {
            // indentID: this.indentId,
            // destination: this.destination,
            // fromDispatchDate: startDate,
            // toDispatchDate: endDate,
            // truckType: this.truckType,
            'fromDispatchDate': startDate,
            'toDispatchDate': endDate,
            'indentID': this.indentId,
            'transporter': this.transporter,
            'truckType': this.truckType,
            'destination': this.destination,
            'materialGrp': this.materialGrp,
            'status': this.status,
            'source': this.sourceCode
        };
        if (this.startDate) {
            if (this.endDate) {
                this.getAssignTrucksData(data);
            }
            else {
                this.toastr.error("Please select To Date", "! Error");
            }
        }
        else {
            this.getAssignTrucksData(data);
        }
    };
    // filter Transporter details
    AssignTrucksComponent.prototype.getfilterTransporter = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.transporterList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?transporter=' + filtervalue).subscribe(function (response) {
                _this.transporterList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //for getting category master data
    AssignTrucksComponent.prototype.getCategoryMasterData = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.categoryMasterData).subscribe(function (response) {
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
    AssignTrucksComponent.prototype.showComments = function (comments) {
        this.commentsMsg = comments;
        $('#integrationMsgModal').modal('show');
    };
    AssignTrucksComponent.prototype.addEvent = function (type, event) {
        console.log(event.value);
        if (event.target.value) {
            var checkToDate = this.endDate;
            if (this.endDate == this.currentDateAsString) {
                checkToDate = new Date();
            }
            if (this.endDate && (this.startDate > checkToDate)) {
                this.endDate = '';
            }
        }
        // this.endDate = '';
    };
    AssignTrucksComponent.prototype.getfilterSource = function (event) {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["DatatableComponent"])
    ], AssignTrucksComponent.prototype, "table", void 0);
    AssignTrucksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-trucks',
            template: __webpack_require__(/*! ./assign-trucks.component.html */ "./src/app/transporter/assign-trucks/assign-trucks.component.html"),
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_6__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_6__["APP_DATE_FORMATS"]
                }
            ],
            styles: [__webpack_require__(/*! ./assign-trucks.component.scss */ "./src/app/transporter/assign-trucks/assign-trucks.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_8__["HelperServiceService"]])
    ], AssignTrucksComponent);
    return AssignTrucksComponent;
}());



/***/ }),

/***/ "./src/app/transporter/assign-trucks/assign-trucks.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/transporter/assign-trucks/assign-trucks.module.ts ***!
  \*******************************************************************/
/*! exports provided: AssignTrucksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignTrucksModule", function() { return AssignTrucksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assign_trucks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assign-trucks.component */ "./src/app/transporter/assign-trucks/assign-trucks.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _assign_trucks_component__WEBPACK_IMPORTED_MODULE_4__["AssignTrucksComponent"] },
];
var AssignTrucksModule = /** @class */ (function () {
    function AssignTrucksModule() {
    }
    AssignTrucksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_7__["LoaderModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__["CustomDatePipeModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__["CustomDatePipeModule"]
            ],
            declarations: [
                _assign_trucks_component__WEBPACK_IMPORTED_MODULE_4__["AssignTrucksComponent"]
            ]
        })
    ], AssignTrucksModule);
    return AssignTrucksModule;
}());



/***/ })

}]);
//# sourceMappingURL=transporter-assign-trucks-assign-trucks-module.js.map