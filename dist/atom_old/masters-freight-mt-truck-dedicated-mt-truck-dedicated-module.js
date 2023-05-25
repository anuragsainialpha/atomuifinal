(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-freight-mt-truck-dedicated-mt-truck-dedicated-module"],{

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

/***/ "./src/app/masters/freight/mt-truck-dedicated/mt-truck-dedicated.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/masters/freight/mt-truck-dedicated/mt-truck-dedicated.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n    <b> PaaS Master &gt; Truck Dedicated </b>\n    <span class=\"pull-right refresh-span\">\n      <!-- <button class=\"theme-small-button\" (click)=\"upload()\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"displayAddForm()\" matTooltip=\"Add New Truck Dedicated\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </button>\n      <!-- <button class=\"theme-small-button\" [routerLink]=\"['/admin/paas-masters/upload-location-scan']\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n\n\n\n\n\n\n\n  <div class=\"mt-item-fields\">\n    <div class=\"col-md-12 row\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row\">\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formPicker\" placeholder=\"From Expiry Date\"\n                  [(ngModel)]=\"fromExpiryDate\" name=\"fromExpiryDate\" (dateChange)=\"addEvent('fromExpiryDate', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toPicker\" [min]=\"fromExpiryDate\" placeholder=\"To Expiry Date\"\n                  [(ngModel)]=\"toExpiryDate\" name=\"toExpiryDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toPicker [disabled]=\"!fromExpiryDate\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event, 'SEARCH')\" autocomplete=\"off\"\n                [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"sourceLoc\" name=\"sourceLoc\"\n                oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Destination\" placeholder=\"Destination\"\n                  (keyup)=\"getfilterDestination($event, 'SEARCH')\" autocomplete=\"off\"\n                  [matAutocomplete]=\"destinationAutocomplete\" [(ngModel)]=\"destLoc\" name=\"destLoc\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #destinationAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\">\n                    <!-- (click)=\"setDestDescription(list.description)\"\n              (onSelectionChange)=\"setDestDescription(list.valdescriptionue)\" -->\n                    <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-2 pr-0\">\n      <div class=\"form-group\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Destination Description\" aria-label=\"State\"\n            [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destination\"\n            (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n          <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n            <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n              (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n              <span>({{list.description}})</span>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n    </div> -->\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Truck/Container Type\" [(ngModel)]=\"truckType\" name=\"trcktype\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Transporter\" placeholder=\"Transporter\"\n                  (keyup)=\"getfilterTransporter($event,'SEARCH')\" autocomplete=\"off\"\n                  [matAutocomplete]=\"transporterAutocomplete\" [(ngModel)]=\"servprov\" name=\"servprov\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #transporterAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of transporterList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"truckNumber\" name=\"truckNumber\" placeholder=\"Truck Number\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"doSearch()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n  <div class=\"mt-item-table\">\n    <div>\n      <!-- class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' -->\n      <!-- <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table \n        [rows]='resultDataList' [externalPaging]=\"true\"\n        (page)=\"datatablePageData($event)\" [scrollbarH]=\"true\" [headerHeight]=\"50\" \n        [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\n        [limit]=\"page.limit\" [count]=\"page.count\" [offset]=\"page.offset\"> -->\n      <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [columnMode]=\"'force'\"\n        [rows]='resultDataList' [externalPaging]=\"true\" (page)=\"datatablePageData($event)\" [scrollbarH]=\"false\"\n        [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\"\n        [offset]=\"page.offset\">\n\n        <ngx-datatable-column name=\"Source\" [width]=\"100\" [resizeable]=\"false\" prop=\"source\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.sourceLoc}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Source Desc\" [width]=\"100\" [resizeable]=\"false\" prop=\"scannable\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.sourceDesc}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Destination\" [width]=\"100\" [resizeable]=\"false\" prop=\"destLoc\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.destLoc}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Dest Desc\" [width]=\"100\" [resizeable]=\"false\" prop=\"destDesc\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.destDesc}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Service Provider\" [width]=\"100\" [resizeable]=\"false\" prop=\"servprov\"\n          [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.servprov}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Truck Type\" [width]=\"100\" [resizeable]=\"false\" prop=\"truckType\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.truckType}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Truck Number\" [width]=\"100\" [resizeable]=\"false\" prop=\"truckNumber\"\n          [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.truckNumber}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Expiry Date\" [width]=\"100\" [resizeable]=\"false\" prop=\"expiryDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.expiryDate ? (row.expiryDate | customDateFormat | date:'dd-MMM-yyyy') : '--'}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Insert User\" [width]=\"100\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.insertUser}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Insert Date\" [width]=\"100\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.insertDate ? (row.insertDate | customDateFormat | date:'dd-MMM-yyyy HH:mm') : '--'}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Update User\" [width]=\"100\" [resizeable]=\"false\" prop=\"upadteUser\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.updateUser}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Update Date\" [width]=\"100\" [resizeable]=\"false\" prop=\"updateDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.updateDate ? (row.updateDate | customDateFormat | date:'dd-MMM-yyyy HH:mm') : '--'}}\n          </ng-template>\n        </ngx-datatable-column>\n        <!-- <i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"showComments(row.comments,row.loadslipId)\"></i> -->\n        <ngx-datatable-column name=\"Action\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n            <button class=\"theme-small-button btn\" matTooltip=\"Modify Item\" (click)=\"showUpdateModel(row)\">\n              <i class=\"fa fa-edit fa-2x\" aria-hidden=\"true\"></i>\n            </button>\n            <button class=\"theme-delete-button btn\" matTooltip=\"Delete plan\" (click)=\"confirmDeleteAction(row)\">\n              <i class=\"fa fa-trash-o fa-2x\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n        </ngx-datatable-column>\n        <!-- Footer Template starts -->\n        <ngx-datatable-footer>\n          <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n            let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n            <div class=\"page-count\">\n              <span *ngIf=\"selectedCount\">\n                {{selectedCount.toLocaleString()}} Selected |\n              </span>\n              Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n              {{(rowCount)}} records.\n            </div>\n            <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n              [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n              [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n              (change)=\"table.onFooterPage($event)\">\n            </datatable-pager>\n          </ng-template>\n        </ngx-datatable-footer>\n        <!-- Footer Template Ends -->\n      </ngx-datatable>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal\" id=\"editTruck\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && validateUpadteTruckData())\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title text-primary\">Update Truck Dedicated</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"col-md-12 \">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"expiryUpdatePicker\" placeholder=\"Expiry Date\"\n                  [(ngModel)]=\"selectedTruck.expiryDate\" name=\"selectedTruck.expiryDate\" #updateExpiryDate=\"ngModel\"\n                  required>\n                <mat-datepicker-toggle matSuffix [for]=\"expiryUpdatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #expiryUpdatePicker disabled=\"false\"></mat-datepicker>\n                <mat-error *ngIf=\"(f.submitted && updateExpiryDate.invalid)\">\n                  <p *ngIf=\"updateExpiryDate.errors.required\"> Expiry Date is\n                    <strong>required</strong>\n                  </p>\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-12 \">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event, 'UPDATE')\" autocomplete=\"off\"\n                [matAutocomplete]=\"sourceUpdateAutocomplete\" [(ngModel)]=\"selectedTruck.sourceLoc\"\n                name=\"selectedTruck.sourceLoc\" oninput=\"this.value = this.value.toUpperCase()\"\n                #updateSourceLoc=\"ngModel\" required>\n              <mat-autocomplete #sourceUpdateAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceListUpdate\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n              <mat-error *ngIf=\"(f.submitted && updateSourceLoc.invalid)\">\n                <p *ngIf=\"updateSourceLoc.errors.required\"> Source is\n                  <strong>required</strong>\n                </p>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Destination\" placeholder=\"Destination\"\n                  (keyup)=\"getfilterDestination($event, 'UPDATE')\" autocomplete=\"off\"\n                  [matAutocomplete]=\"destinationUpdateAutocomplete\" [(ngModel)]=\"selectedTruck.destLoc\"\n                  name=\"selectedTruck.destLoc\" oninput=\"this.value = this.value.toUpperCase()\" #updateDestLoc=\"ngModel\"\n                  required>\n                <mat-autocomplete #destinationUpdateAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationListUpdate\" [value]=\"list.value\">\n                    <!-- (click)=\"setDestDescription(list.description)\"\n                      (onSelectionChange)=\"setDestDescription(list.valdescriptionue)\" -->\n                    <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n                <mat-error *ngIf=\"(f.submitted && updateDestLoc.invalid)\">\n                  <p *ngIf=\"updateDestLoc.errors.required\"> Destination is\n                    <strong>required</strong>\n                  </p>\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-2 pr-0\">\n              <div class=\"form-group\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Destination Description\" aria-label=\"State\"\n                    [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destination\"\n                    (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                  <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                      (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                      <span>({{list.description}})</span>\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </div>\n            </div> -->\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Truck/Container Type\" [(ngModel)]=\"selectedTruck.truckType\"\n                  name=\"selectedTruck.truckType\" #updateTruckType=\"ngModel\" required>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"(f.submitted && updateTruckType.invalid)\">\n                  <p *ngIf=\"updateTruckType.errors.required\"> Truck Type is\n                    <strong>required</strong>\n                  </p>\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-12 \">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Transporter\" placeholder=\"Transporter\"\n                  (keyup)=\"getfilterTransporter($event,'UPDATE')\" autocomplete=\"off\"\n                  [matAutocomplete]=\"transporterUpdateAutocomplete\" [(ngModel)]=\"selectedTruck.servprov\"\n                  name=\"selectedTruck.servprov\" oninput=\"this.value = this.value.toUpperCase()\"\n                  #updateTransporter=\"ngModel\" required>\n                <mat-autocomplete #transporterUpdateAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of transporterListUpdate\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n                <mat-error *ngIf=\"(f.submitted && updateTransporter.invalid)\">\n                  <p *ngIf=\"updateTransporter.errors.required\"> Transporter is\n                    <strong>required</strong>\n                  </p>\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"selectedTruck.truckNumber\" name=\"selectedTruck.truckNumber\"\n                  placeholder=\"Truck Number\" oninput=\"this.value = this.value.toUpperCase()\"\n                  #updateTruckNumber=\"ngModel\">\n                <mat-error *ngIf=\"(f.submitted && updateTruckNumber.invalid)\">\n                  <p *ngIf=\"updateTruckNumber.errors.required\"> Truck Number is\n                    <strong>required</strong>\n                  </p>\n                </mat-error>\n              </mat-form-field>\n\n            </div>\n          </div>\n        </div>\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <!-- <button type=\"button\" class=\"btn btn-danger\" >Close</button> -->\n          <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btm-action-btn\">Update</button>\n          <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\"\n            data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<br><br>\n\n\n\n\n\n\n\n<!--                         \n                    <input matInput placeholder=\"Location Id\" [(ngModel)]=\"locationIdF\" name=\"locationIdF\" required\n                      #qty=\"ngModel\">\n                    <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                      <p *ngIf=\"qty.errors.required\">Location Id is\n                        <strong>required</strong>\n                      </p>\n                    </mat-error> -->\n<!-- <mat-form-field appearance=\"standard\">\n                              <mat-label>Location Id</mat-label>\n                              <input matInput aria-label=\"Location Id\" (keyup)=\"getfilterDestination($event)\" autocomplete=\"off\"\n                                [matAutocomplete]=\"statesAutocomplete\" [(ngModel)]=\"locationIdF\" name=\"locationIdF\"\n                                #locationIdF=\"ngModel\" required>\n                              <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                                <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\">\n                                  <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                                </mat-option>\n                              </mat-autocomplete>\n                              <mat-error *ngIf=\"(f.submitted && destinationLocation.invalid)\">\n                                <p *ngIf=\"destinationLocation.errors.required\">Location Id is\n                                  <strong>required</strong>\n                                </p>\n                              </mat-error>\n                            </mat-form-field> -->\n\n\n<div class=\"mt-item-fields\" *ngIf=\"displayForm\">\n  <div class=\"col-md-12 padding-right-40\">\n    <mat-card>\n      <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && validateSaveTruck()\">\n        <h4 class=\"mt-item-header text-center text-primary\">\n          <b> Add Truck Dedicated </b></h4>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-1 \">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"expiryPicker\" placeholder=\"Expiry Date\"\n                  [(ngModel)]=\"newTruck.expiryDate\" name=\"newTruck.expiryDate\" #expiryDate=\"ngModel\" required>\n                <mat-datepicker-toggle matSuffix [for]=\"expiryPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #expiryPicker disabled=\"false\"></mat-datepicker>\n                <mat-error *ngIf=\"(f.submitted && expiryDate.invalid)\">\n                  <p *ngIf=\"expiryDate.errors.required\"> Expiry Date is\n                    <strong>required</strong>\n                  </p>\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 \">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event, 'ADD')\" autocomplete=\"off\"\n                [matAutocomplete]=\"sourceAddAutocomplete\" [(ngModel)]=\"newTruck.sourceLoc\" name=\"newTruck.sourceLoc\"\n                oninput=\"this.value = this.value.toUpperCase()\" required #sourceLoc=\"ngModel\">\n              <mat-autocomplete #sourceAddAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceListAdd\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n              <mat-error *ngIf=\"(f.submitted && sourceLoc.invalid)\">\n                <p *ngIf=\"sourceLoc.errors.required\"> Source Location is\n                  <strong>required</strong>\n                </p>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Destination\" placeholder=\"Destination\"\n                  (keyup)=\"getfilterDestination($event, 'ADD')\" autocomplete=\"off\"\n                  [matAutocomplete]=\"destinationAddAutocomplete\" [(ngModel)]=\"newTruck.destLoc\" name=\"newTruck.destLoc\"\n                  oninput=\"this.value = this.value.toUpperCase()\" required #destLoc=\"ngModel\">\n                <mat-autocomplete #destinationAddAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationListAdd\" [value]=\"list.value\">\n                    <!-- (click)=\"setDestDescription(list.description)\"\n                    (onSelectionChange)=\"setDestDescription(list.valdescriptionue)\" -->\n                    <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                  </mat-option>\n\n                </mat-autocomplete>\n                <mat-error *ngIf=\"(f.submitted && destLoc.invalid)\">\n                  <p *ngIf=\"destLoc.errors.required\"> Destination Loc is\n                    <strong>required</strong>\n                  </p>\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination Description\" aria-label=\"State\"\n                  [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destination\"\n                  (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                    (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                    <span>({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div> -->\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Truck/Container Type\" [(ngModel)]=\"newTruck.truckType\"\n                  name=\"newTruck.truckType\" #truckType=\"ngModel\" required>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"(f.submitted && truckType.invalid)\">\n                  <p *ngIf=\"truckType.errors.required\"> Truck Type is\n                    <strong>required</strong>\n                  </p>\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 \">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Transporter\" placeholder=\"Transporter\"\n                  (keyup)=\"getfilterTransporter($event,'ADD')\" autocomplete=\"off\"\n                  [matAutocomplete]=\"transporterAddAutocomplete\" [(ngModel)]=\"newTruck.servprov\"\n                  name=\"newTruck.servprov\" oninput=\"this.value = this.value.toUpperCase()\" required\n                  #transpoter=\"ngModel\">\n                <mat-autocomplete #transporterAddAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of transporterListAdd\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n                <mat-error *ngIf=\"(f.submitted && transpoter.invalid)\">\n                  <p *ngIf=\"transpoter.errors.required\"> Transporter is\n                    <strong>required</strong>\n                  </p>\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"newTruck.truckNumber\" name=\"newTruck.truckNumber\"\n                  placeholder=\"Truck Number\" oninput=\"this.value = this.value.toUpperCase()\" required\n                  #truckNumber=\"ngModel\">\n                <mat-error *ngIf=\"(f.submitted && truckNumber.invalid)\">\n                  <p *ngIf=\"truckNumber.errors.required\"> Truck Number is\n                    <strong>required</strong>\n                  </p>\n                </mat-error>\n              </mat-form-field>\n\n            </div>\n          </div>\n          <div class=\"col-md-1 pull-right\">\n            <button class=\"btn btn-primary\" type=\"submit\" matTooltip=\"Save\">\n              <!-- <i class=\"fa fa-fa-floppy fa-2x\" aria-hidden=\"true\" style=\"color: white\"></i> -->\n              Save\n            </button>\n            <!-- <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n              <i class=\"fa fa-times\" aria-hidden=\"true\"></i> \n            </button> -->\n          </div>\n        </div>\n      </form>\n    </mat-card>\n  </div>\n</div>\n\n\n<!-- Confirm Delete modal -->\n<div class=\"modal\" id=\"confirmDelete\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form name=\"form\" #f=\"ngForm\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title text-primary\">Are you sure you want to delete</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"submit\" mat-raised-button color=\"errors\" class=\"btm-action-btn\"\n            (click)=\"rowlevelDeleteDedicated(selectedRow)\">Delete</button>\n          <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\"\n            data-dismiss=\"modal\">Cancel</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/masters/freight/mt-truck-dedicated/mt-truck-dedicated.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/masters/freight/mt-truck-dedicated/mt-truck-dedicated.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvZnJlaWdodC9tdC10cnVjay1kZWRpY2F0ZWQvbXQtdHJ1Y2stZGVkaWNhdGVkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/masters/freight/mt-truck-dedicated/mt-truck-dedicated.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/masters/freight/mt-truck-dedicated/mt-truck-dedicated.component.ts ***!
  \************************************************************************************/
/*! exports provided: MtTruckDedicatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtTruckDedicatedComponent", function() { return MtTruckDedicatedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MtTruckDedicatedComponent = /** @class */ (function () {
    function MtTruckDedicatedComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.isLoading = false;
        this.isShow = true;
        // salesSku1:any = "";
        // salesSku:any = "";
        // itemId:any = "";
        // compQty:any = "";
        // itemSeq:any = "";
        // oeCode:any = "";
        // itemClassification: any = "";
        // itemDescription: any = "";
        // itemType: any = "";
        // itemGroup: any = "";
        // tte: any = "";
        // loadFactor: any = "";
        // formattedDate: string;
        // 
        this.effectiveDate = "";
        this.locationId = "";
        this.scannable = "";
        this.itemCategory = "";
        this.insertUser = "";
        this.insertDate = "";
        this.updateUser = "";
        this.updateDate = "";
        this.locationIdF = "";
        this.scannableF = "";
        this.itemCategoryF = "";
        this.locationIdu = "";
        this.scannableu = "";
        this.itemCategoryu = "";
        this.displayForm = false;
        this.scannableTypesList = ['Y', 'N'];
        this.editing = {};
        this.page = {
            limit: 100,
            count: 0,
            offset: 0,
            pageSize: 50
        };
        this.sourceLoc = '';
        this.destLoc = '';
        this.toExpiryDate = '';
        this.fromExpiryDate = '';
        this.servprov = '';
        this.truckNumber = '';
        this.truckType = [];
        this.selectedTruck = {
            id: null,
            servprov: null,
            sourceLoc: null,
            sourceDesc: null,
            destDesc: null,
            destLoc: null,
            truckType: null,
            truckNumber: null,
            expiryDate: null,
            insertUser: null,
            updateUser: null,
            insertDate: null,
            updateDate: null,
        };
        this.newTruck = {
            servprov: null,
            sourceLoc: null,
            sourceDesc: null,
            destDesc: null,
            destLoc: null,
            truckType: null,
            truckNumber: null,
            expiryDate: null,
        };
        this.sourceList = [];
        this.truckList = [];
        this.destinationList = [];
        this.transporterList = [];
        this.transporterListUpdate = [];
        this.transporterListAdd = [];
        this.destinationListUpdate = [];
        this.destinationListAdd = [];
        this.sourceListAdd = [];
        this.sourceListUpdate = [];
        this.locationIds = [];
        this.scmGroupList = [];
        this.foods = [
            { value: 'Y', viewValue: 'Y' },
            { value: 'N', viewValue: 'N' }
        ];
        this.ApprovalEditing = {};
        this.pendingPlanList = [];
        this.insertStatus = "";
        this.month_names = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
        };
    }
    MtTruckDedicatedComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "paas-master");
        var data = {};
        this.getLocationIds();
        this.getTruckTypeMasterData();
        this.getTruckDedicatedList(data);
    };
    //show the filter
    MtTruckDedicatedComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    // Datatable Footer
    MtTruckDedicatedComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    MtTruckDedicatedComponent.prototype.emptySumm = function () {
        return null;
    };
    MtTruckDedicatedComponent.prototype.getLocationIds = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLocationIdsList).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            _this.locationIds = response['data'];
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    MtTruckDedicatedComponent.prototype.getTruckDedicatedList = function (data) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getTruckDedicatedList, data).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            if (response['statusCode'] == 200) {
                _this.resultDataList = response['data'].mtTruckDedicatedDtos;
                _this.page.count = response['data'].total;
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
    MtTruckDedicatedComponent.prototype.displayAddForm = function () {
        this.clearNewTruck();
        if (this.displayForm)
            this.displayForm = false;
        else
            this.displayForm = true;
    };
    MtTruckDedicatedComponent.prototype.doSearch = function () {
        this.table.offset = 0;
        this.page.offset = 0;
        var data = {
            sourceLoc: this.sourceLoc,
            destLoc: this.destLoc,
            servprov: this.servprov,
            toExpiryDate: this.toExpiryDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toExpiryDate)).format("DD/MM/YYYY") : null,
            fromExpiryDate: this.fromExpiryDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromExpiryDate)).format("DD/MM/YYYY") : null,
            truckType: this.truckType,
            truckNumber: this.truckNumber,
        };
        if (this.fromExpiryDate != '' && this.fromExpiryDate != null) {
            if (this.toExpiryDate != '' && this.toExpiryDate != null) {
                this.resultDataList = [];
                this.getTruckDedicatedList(data);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.getTruckDedicatedList(data);
        }
        //this.toastr.error("Received http error 404. Please check service urlcccc")
    };
    //server side pagination
    MtTruckDedicatedComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            sourceLoc: this.sourceLoc,
            destLoc: this.destLoc,
            servprov: this.servprov,
            toExpiryDate: this.toExpiryDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toExpiryDate)).format("DD/MM/YYYY") : null,
            fromExpiryDate: this.fromExpiryDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromExpiryDate)).format("DD/MM/YYYY") : null,
            truckType: this.truckType,
            truckNumber: this.truckNumber,
        };
        this.getTruckDedicatedList(bodyData);
    };
    MtTruckDedicatedComponent.prototype.addEvent = function (type, event) {
        if (event.target.value) {
            /* Checking if selected from date greater than to date.
           Clearing the toDate field when from date greater than to date */
            if (this.toExpiryDate && (this.fromExpiryDate > this.toExpiryDate)) {
                this.toExpiryDate = '';
            }
            // this.toExpiryDate = '';
        }
    };
    // Filter source location
    MtTruckDedicatedComponent.prototype.getfilterSource = function (event, typeofFilter) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.sourceList = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                console.log("respio", response);
                if (typeofFilter === 'SEARCH') {
                    _this.sourceList = response['data'].searchResult;
                }
                if (typeofFilter === 'UPDATE') {
                    _this.sourceListUpdate = response['data'].searchResult;
                }
                if (typeofFilter === 'ADD') {
                    _this.sourceListAdd = response['data'].searchResult;
                }
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //get filter destination result
    MtTruckDedicatedComponent.prototype.getfilterDestination = function (event, typeofFilter) {
        var _this = this;
        // this.destinationDesc = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                if (typeofFilter === 'SEARCH') {
                    _this.destinationList = response['data'].searchResult;
                }
                if (typeofFilter === 'UPDATE') {
                    _this.destinationListUpdate = response['data'].searchResult;
                }
                if (typeofFilter === 'ADD') {
                    _this.destinationListAdd = response['data'].searchResult;
                }
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter Transporter details
    MtTruckDedicatedComponent.prototype.getfilterTransporter = function (event, typeofFilter) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.transporterList = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?transporter=' + filtervalue).subscribe(function (response) {
                if (typeofFilter === 'SEARCH') {
                    _this.transporterList = response['data'].searchResult;
                }
                if (typeofFilter === 'UPDATE') {
                    _this.transporterListUpdate = response['data'].searchResult;
                }
                if (typeofFilter === 'ADD') {
                    _this.transporterListAdd = response['data'].searchResult;
                }
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // for getting truck type master
    MtTruckDedicatedComponent.prototype.getTruckTypeMasterData = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.truckTypeMasterData).subscribe(function (response) {
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
    MtTruckDedicatedComponent.prototype.showUpdateModel = function (row) {
        var s = __assign({}, row);
        this.selectedTruck = __assign({}, s);
        var gettheDate = s.expiryDate;
        var splittedData = gettheDate.split("/");
        var createNewDate = splittedData[1] + "/" + splittedData[0] + "/" + splittedData[2];
        // Formatted new key for autopopulation of date for datepicker
        this.selectedTruck.expiryDate = new Date(createNewDate).toISOString();
        $("#editTruck").modal('show');
        row = __assign({}, row);
    };
    MtTruckDedicatedComponent.prototype.clearAll = function () {
        this.sourceLoc = '';
        this.destLoc = '';
        this.toExpiryDate = '';
        this.fromExpiryDate = '';
        this.servprov = '';
        this.truckType = [];
        this.truckNumber = '';
        this.sourceList = [];
        this.destinationList = [];
        this.transporterList = [];
    };
    // Refresh data
    MtTruckDedicatedComponent.prototype.refreshData = function () {
        this.isLoading = true;
        this.clearAll();
        this.table.offset = 0;
        this.page.offset = 0;
        var data = {};
        this.getTruckDedicatedList(data);
        // this.service.post_service(ApiserviceService.apisList.getMtItem, data).subscribe(response => {
        //   if (response['statusCode'] == 200) {
        //     let responseData = response['data'].mtOeBoms;
        //     this.responseItemsList = responseData;
        //     this.responseItemsList = [...this.responseItemsList]
        //     // this.page.count = response['data'].total;
        //     // this.page.limit = response['data'].pageLength;
        //     this.isLoading = false;
        //   } else {
        //     this.isLoading = false;
        //     this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        //   }
        // }, (err) => {
        //   this.toastr.error(err ? err : "Something went wrong..", "Error!");
        //   this.isLoading = false;
        // })
    };
    //UTILS  
    MtTruckDedicatedComponent.prototype.formatDate = function (data) {
        if (data != null && data) {
            var formatted = new Date(data), mnth = ("0" + (formatted.getMonth() + 1)).slice(-2), day = ("0" + formatted.getDate()).slice(-2);
            this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
            this.effectiveDate = this.formattedDate;
            return this.formattedDate;
        }
        else {
            this.effectiveDate = "";
        }
    };
    MtTruckDedicatedComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    MtTruckDedicatedComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    MtTruckDedicatedComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    MtTruckDedicatedComponent.prototype.validateUpadteTruckData = function () {
        if (this.selectedTruck.expiryDate) {
            // Expiry date is not null
            if (this.selectedTruck.sourceLoc) {
                // When source is valid
                if (this.selectedTruck.destLoc) {
                    if (this.selectedTruck.sourceLoc !== this.selectedTruck.destLoc) {
                        // When Dest Loc is valid
                        if (this.selectedTruck.servprov) {
                            // when transporter is valid
                            if (this.selectedTruck.truckType) {
                                // When truck type is not null
                                if (this.selectedTruck.truckNumber) {
                                    // When truck Number is not null
                                    // Updating the truck Dedicated data
                                    this.updateTruckData();
                                }
                                else {
                                    this.toastr.error('Please Enter the truck number', 'Error!');
                                }
                            }
                            else {
                                this.toastr.error('Please select a Truck Type', 'Error!');
                            }
                        }
                        else {
                            this.toastr.error('Please select a valid Transporter', 'Error!');
                        }
                    }
                    else {
                        this.toastr.error('Destination cannot be same as source', 'Error!');
                    }
                }
                else {
                    this.toastr.error('Please select a valid Dest Loc', 'Error!');
                }
            }
            else {
                this.toastr.error('Please select a valid Source Loc', 'Error!');
            }
        }
        else {
            this.toastr.error('Please select the Expiry date', 'Error!');
        }
    };
    MtTruckDedicatedComponent.prototype.updateTruckData = function () {
        var _this = this;
        var selectedExpiryDate = this.selectedTruck.expiryDate;
        this.selectedTruck.expiryDate = selectedExpiryDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(selectedExpiryDate)).format("DD/MM/YYYY") : null;
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.saveTruckDedicated, this.selectedTruck).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var updatedRow_1 = response['data'];
                var index = _this.resultDataList.findIndex(function (item) { return item.id === updatedRow_1.id; });
                _this.resultDataList[index] = updatedRow_1;
                _this.resultDataList = _this.resultDataList.slice();
                $("#editTruck").modal('hide');
                _this.clearUpdateTruckFields();
                _this.clearSelectedTruck();
                _this.toastr.success(response['message'] ? response['message'] : 'Truck Dedicated Details Updated Successfully');
                _this.isLoading = false;
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
                _this.isLoading = false;
            }
        }, function (err) {
            _this.toastr.error(err ? err['message'] : 'Something went wrong...', 'Error!');
            _this.isLoading = false;
        });
    };
    // Validating the truck dedicated data
    MtTruckDedicatedComponent.prototype.validateSaveTruck = function () {
        var _this = this;
        var checkSourceLoc = this.sourceListAdd.some(function (item) { return item.value === _this.newTruck.sourceLoc; });
        var checkDestLoc = this.destinationListAdd.some(function (item) { return item.value === _this.newTruck.destLoc; });
        var checkTransporter = this.transporterListAdd.some(function (item) { return item.value === _this.newTruck.servprov; });
        if (this.newTruck.expiryDate) {
            // Expiry date is not null
            if (checkSourceLoc) {
                // When source is valid
                if (checkDestLoc) {
                    if (this.newTruck.sourceLoc !== this.newTruck.destLoc) {
                        // When Dest Loc is valid
                        if (checkTransporter) {
                            // when transporter is valid
                            if (this.newTruck.truckType) {
                                // When truck type is not null
                                if (this.newTruck.truckNumber) {
                                    // When truck Number is not null
                                    // Saving the truck Dedicated data
                                    this.saveTruck();
                                }
                                else {
                                    this.toastr.error('Please Enter the truck number', 'Error!');
                                }
                            }
                            else {
                                this.toastr.error('Please select a Truck Type', 'Error!');
                            }
                        }
                        else {
                            this.toastr.error('Please select a valid Transporter', 'Error!');
                        }
                    }
                    else {
                        this.toastr.error('Destination cannot same as Source', 'Error!');
                    }
                }
                else {
                    this.toastr.error('Please select a valid Dest Loc', 'Error!');
                }
            }
            else {
                this.toastr.error('Please select a valid Source Loc', 'Error!');
            }
        }
        else {
            this.toastr.error('Please select the Expiry date', 'Error!');
        }
    };
    MtTruckDedicatedComponent.prototype.saveTruck = function () {
        var _this = this;
        var selectedExpiryDate = this.newTruck.expiryDate;
        this.newTruck.expiryDate = selectedExpiryDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(selectedExpiryDate)).format("DD/MM/YYYY") : null;
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.saveTruckDedicated, this.newTruck).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                //  let updatedRow = response['data'];
                // this.resultDataList.unshift(updatedRow);
                // this.resultDataList = [...this.resultDataList];
                _this.resultDataList = response['data'].mtTruckDedicatedDtos.slice();
                _this.page.count = response['data'].total;
                //this.refreshData();
                // this.getTruckDedicatedList();
                _this.displayAddForm();
                _this.clearAddTruckFields();
                _this.clearNewTruck();
                _this.toastr.success(response['message'] ? response['message'] : 'Truck Dedicated Details Saved Successfully');
                _this.isLoading = false;
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
                _this.isLoading = false;
            }
        }, function (err) {
            _this.toastr.error(err ? err['message'] : 'Something went wrong...', 'Error!');
            _this.isLoading = false;
        });
    };
    MtTruckDedicatedComponent.prototype.clearAddTruckFields = function () {
        this.sourceListAdd = [];
        this.destinationListAdd = [];
        this.transporterListAdd = [];
    };
    MtTruckDedicatedComponent.prototype.clearUpdateTruckFields = function () {
        this.sourceListUpdate = [];
        this.destinationListUpdate = [];
        this.transporterListUpdate = [];
    };
    MtTruckDedicatedComponent.prototype.confirmDeleteAction = function (row) {
        this.selectedRow = __assign({}, row);
        $("#confirmDelete").modal('show');
    };
    MtTruckDedicatedComponent.prototype.rowlevelDeleteDedicated = function (row) {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.deleteMTTruckDedicated + '?id=' + row.id).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var deletedRow_1 = response['data'];
                var index = _this.resultDataList.findIndex(function (item) { return item.id === deletedRow_1; });
                _this.resultDataList.splice(index, 1);
                _this.resultDataList = _this.resultDataList.slice();
                _this.page.count = _this.page.count - 1;
                $("#confirmDelete").modal('hide');
                _this.isLoading = false;
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
                _this.isLoading = false;
                $("#confirmDelete").modal('hide');
            }
        }, function (err) {
            _this.toastr.error(err['message'] ? err['message'] : 'Something went wrong...', 'Error!');
            _this.isLoading = false;
            $("#confirmDelete").modal('hide');
        });
    };
    //export excel data
    MtTruckDedicatedComponent.prototype.export = function () {
        var _this = this;
        if (this.resultDataList.length > 0) {
            this.isLoading = true;
            var data = {
                sourceLoc: this.sourceLoc,
                destLoc: this.destLoc,
                servprov: this.servprov,
                toExpiryDate: this.toExpiryDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.toExpiryDate)).format("DD/MM/YYYY") : null,
                fromExpiryDate: this.fromExpiryDate ? moment__WEBPACK_IMPORTED_MODULE_4__(new Date(this.fromExpiryDate)).format("DD/MM/YYYY") : null,
                truckType: this.truckType,
                truckNumber: this.truckNumber,
                // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel ,
                pageLength: this.page.count
            };
            // this.service.post_service_DownLoadExcel(ApiserviceService.apisList.planinfo, data).subscribe(response => {
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getTruckDedicatedList, data).subscribe(function (response) {
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
                    var newViewPlanData = response['data'].mtTruckDedicatedDtos;
                    var excelRawData = newViewPlanData;
                    var newExcelData = [];
                    var data_1;
                    for (var i = 0; i < excelRawData.length; i++) {
                        // For RDC: The Avail TTE and Truck count should be based on Plan Qty and not Available Qty
                        // For FGS : The Avail TTE and Truck count should be based on Available Qty
                        data_1 = {
                            "Source": excelRawData[i].sourceLoc,
                            "Source Desc": excelRawData[i].sourceDesc,
                            "Destination": excelRawData[i].destLoc,
                            "Destination Desc": excelRawData[i].destDesc,
                            "Service Provider": excelRawData[i].servprov,
                            "Truck Type": excelRawData[i].truckType,
                            "Truck Number": excelRawData[i].truckNumber,
                            "Expiry Date": excelRawData[i].expiryDate ? _this.service.customDateFormat(excelRawData[i].expiryDate) : '',
                            "Insert User": excelRawData[i].insertUser,
                            "Insert Date": excelRawData[i].insertDate ? _this.service.customDateTimeFormat(excelRawData[i].insertDate) : '',
                            "Update User": excelRawData[i].updateUser,
                            "Update Date": excelRawData[i].updateDate ? _this.service.customDateFormat(excelRawData[i].updateDate) : ''
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_5__["writeFile"](workBook, 'mtTruckDedicatedData.xlsx');
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
    MtTruckDedicatedComponent.prototype.clearNewTruck = function () {
        this.newTruck = {
            servprov: null,
            sourceLoc: null,
            sourceDesc: null,
            destDesc: null,
            destLoc: null,
            truckType: null,
            truckNumber: null,
            expiryDate: null,
        };
    };
    MtTruckDedicatedComponent.prototype.clearSelectedTruck = function () {
        this.selectedTruck = {
            id: null,
            servprov: null,
            sourceLoc: null,
            sourceDesc: null,
            destDesc: null,
            destLoc: null,
            truckType: null,
            truckNumber: null,
            expiryDate: null,
            insertUser: null,
            updateUser: null,
            insertDate: null,
            updateDate: null,
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"])
    ], MtTruckDedicatedComponent.prototype, "table", void 0);
    MtTruckDedicatedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mt-truck-dedicated',
            template: __webpack_require__(/*! ./mt-truck-dedicated.component.html */ "./src/app/masters/freight/mt-truck-dedicated/mt-truck-dedicated.component.html"),
            styles: [__webpack_require__(/*! ./mt-truck-dedicated.component.scss */ "./src/app/masters/freight/mt-truck-dedicated/mt-truck-dedicated.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MtTruckDedicatedComponent);
    return MtTruckDedicatedComponent;
}());



/***/ }),

/***/ "./src/app/masters/freight/mt-truck-dedicated/mt-truck-dedicated.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/masters/freight/mt-truck-dedicated/mt-truck-dedicated.module.ts ***!
  \*********************************************************************************/
/*! exports provided: MTTruckDedicatedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MTTruckDedicatedModule", function() { return MTTruckDedicatedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mt_truck_dedicated_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mt-truck-dedicated.component */ "./src/app/masters/freight/mt-truck-dedicated/mt-truck-dedicated.component.ts");
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _mt_truck_dedicated_component__WEBPACK_IMPORTED_MODULE_7__["MtTruckDedicatedComponent"] },
];
// const routes: Routes = [
//   { path: '', component: CreateFreightComponent,canActivate:[PlannerAuthGuardService]},
// ];
var MTTruckDedicatedModule = /** @class */ (function () {
    function MTTruckDedicatedModule() {
    }
    MTTruckDedicatedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_3__["LoaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_8__["CustomDatePipeModule"]
            ],
            declarations: [
                _mt_truck_dedicated_component__WEBPACK_IMPORTED_MODULE_7__["MtTruckDedicatedComponent"]
            ],
            entryComponents: [
                _mt_truck_dedicated_component__WEBPACK_IMPORTED_MODULE_7__["MtTruckDedicatedComponent"]
            ],
        })
    ], MTTruckDedicatedModule);
    return MTTruckDedicatedModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-freight-mt-truck-dedicated-mt-truck-dedicated-module.js.map