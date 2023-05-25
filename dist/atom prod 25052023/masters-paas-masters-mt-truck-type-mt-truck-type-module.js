(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-paas-masters-mt-truck-type-mt-truck-type-module"],{

/***/ "./src/app/masters/paas-masters/mt-truck-type/mt-truck-type.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-truck-type/mt-truck-type.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n    <b> PaaS Masters &gt; Truck Type</b>\n    <span class=\"pull-right refresh-span\">\n        <button class=\"theme-small-button\" (click)=\"displayAddForm()\" matTooltip=\"Add New\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          </button>\n\n          <!-- <button mat-menu-item [routerLink]=\"['/admin/paas-masters/location-scan']\">Location Scan</button> -->\n      <!-- <button class=\"theme-small-button\" [routerLink]=\"['/admin/paas-masters/upload-mt-truck-type']\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n<div class=\"mt-item-fields\" *ngIf=\"isShow\">\n  <div class=\"col-md-12 row\">\n    <div class=\"col-md-12 padding-right-40\">\n      <div class=\"row\">\n        <div class=\"col-md-6 pd-0\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Truck Type\" [(ngModel)]=\"truckType\" name=\"truckType\">\n                  <!-- <input matInput aria-label=\"Truck Type\" placeholder=\"Truck Type\"\n                          (keyup)=\"getfilterDestination($event,'truckType')\" autocomplete=\"off\"\n                          [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"truckType\" name=\"truckType\">\n                        <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                          <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\">\n                            <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                          </mat-option>\n                        </mat-autocomplete> -->\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Truck Description\" [(ngModel)]=\"truckDesc\" name=\"truckDesc\">\n\n                  <!-- <input matInput aria-label=\"Truck Desc\" placeholder=\"Truck Desc\"\n                          (keyup)=\"getfilterDestination($event,'truckDescription')\" autocomplete=\"off\"\n                          [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"truckDesc\" name=\"truckDesc\">\n                        <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                          <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                            <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                          </mat-option>\n                        </mat-autocomplete> -->\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Load Factor\" [(ngModel)]=\"loadFactor\" name=\"loadFactor\">\n                </mat-form-field>\n            </div>\n          </div>\n        </div>\n        <div class='col-md-6 pd-0'>\n          <div class=\"row mg-0\">\n            <div class=\"col-md-4\">\n                <mat-form-field>\n                  <input matInput placeholder=\"TTE Capacity\" [(ngModel)]=\"tteCapacity\" name=\"tteCapacity\">\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Variant1\" [(ngModel)]=\"variant1\" name=\"variant1\">\n                </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"pull-right\">\n      <div class=\"search-fileds\">\n        <button class=\"theme-small-button\" (click)=\"doSubmitSearch()\" matTooltip=\"Search\">\n          <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n<div class=\"mt-item-table\">\n<div>\n<!-- <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [rows]='responseItemsList' [scrollbarH]=\"true\" [externalPaging]=\"true\"\n  (page)=\"datatablePageData($event)\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\"\n  [count]=\"page.count\" [offset]=\"page.offset\"> -->\n  <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [columnMode]=\"'force'\"\n  [rows]='responseItemsList' [externalPaging]=\"true\" (page)=\"datatablePageData($event)\" [scrollbarH]=\"false\"\n  [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\"\n  [offset]=\"page.offset\">\n\n  \n  <ngx-datatable-column name=\"Truck Type\" [width]=\"140\" [resizeable]=\"false\" prop=\"truckType\" [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.truckType}}\n    </ng-template>\n  </ngx-datatable-column>\n\n  <ngx-datatable-column name=\"Truck Description\" [width]=\"160\" [resizeable]=\"false\" prop=\"truckDesc\" [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.truckDesc}}\n    </ng-template>\n  </ngx-datatable-column>\n\n  <ngx-datatable-column name=\"Load Factor\" [width]=\"60\" [resizeable]=\"false\" prop=\"loadFactor\" [cellClass]=\"'text-right'\"\n    [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.loadFactor}}\n    </ng-template>\n  </ngx-datatable-column>\n\n  <ngx-datatable-column name=\"TTE Capacity\" [width]=\"70\" [resizeable]=\"false\" prop=\"tteCapacity\" [cellClass]=\"'text-right'\"\n    [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.tteCapacity}}\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Gross Wt\" [width]=\"70\" [resizeable]=\"false\" prop=\"grossWt\" [cellClass]=\"'text-right'\"\n    [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.grossWt}}\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Gross Wt Uom\" [width]=\"60\" [resizeable]=\"false\" prop=\"grossWtUom\" [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.grossWtUom}}\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Gross Vol\" [width]=\"70\" [resizeable]=\"false\" prop=\"grossVol\" [cellClass]=\"'text-right'\"\n    [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.grossVol}}\n    </ng-template>\n  </ngx-datatable-column>\n\n  <ngx-datatable-column name=\"Gross Vol Uom\" [width]=\"80\" [resizeable]=\"false\" prop=\"grossVolUom\" [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.grossVolUom}}\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Variant1\" [width]=\"90\" [resizeable]=\"false\" prop=\"variant1\" [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.variant1}}\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Variant2\" [width]=\"90\" [resizeable]=\"false\" prop=\"variant2\" [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.variant2}}\n    </ng-template>\n  </ngx-datatable-column>\n\n  <ngx-datatable-column name=\"Insert User\" [width]=\"85\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.insertUser}}\n    </ng-template>\n  </ngx-datatable-column>\n\n  <ngx-datatable-column name=\"Insert Date\" [width]=\"90\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{trimDate(row.insertDate)}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Update User\" [width]=\"85\" [resizeable]=\"false\" prop=\"updateUser\" [sortable]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.updateUser}}\n        </ng-template>\n      </ngx-datatable-column>\n      \n  <ngx-datatable-column name=\"Update Date\" [width]=\"90\" [resizeable]=\"false\" prop=\"updateDate\" [sortable]=\"true\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{trimDate(row.updateDate)}}\n    </ng-template>\n  </ngx-datatable-column>\n\n  <ngx-datatable-column name=\"Action\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"false\">\n    <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n      <button class=\"theme-small-button btn\" matTooltip=\"Modify Item\" (click)=\"showUpdateModel(row)\" [disabled]=\"(row.isError)\">\n        <i class=\"fa fa-edit fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </ng-template>\n  </ngx-datatable-column>\n     <!-- Footer Template starts -->\n     <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedCount\">\n            {{selectedCount.toLocaleString()}} Selected |\n          </span>\n          Showing {{(offset * pageSize)+1}} to {{(rowCount>\n          (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n          {{(rowCount)}} records.\n        </div>\n        <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n          [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n          [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n        </datatable-pager>\n      </ng-template>\n    </ngx-datatable-footer>\n    <!-- Footer Template Ends -->\n</ngx-datatable>\n</div>\n</div>\n</div>\n\n\n\n\n\n\n<br><br>\n<div class=\"mt-item-fields\" *ngIf=\"displayForm\">\n<div class=\"col-md-12 padding-right-40\">\n<mat-card>\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && saveForm(f))\">\n  <h4 class=\"mt-item-header text-center text-primary\">\n    <b> Add New Truck Type</b></h4>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Truck Type\" [(ngModel)]=\"truckTypef\" name=\"truckTypef\" required #qty=\"ngModel\" oninput=\"this.value = this.value.toUpperCase()\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Truck Type is <strong>required</strong></p>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Load Factor\" [(ngModel)]=\"loadFactorf\" name=\"loadFactorf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Load Factor is <strong>required</strong></p>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Truck Desc \" [(ngModel)]=\"truckDescf\" name=\"truckDescf\" required #qty=\"ngModel\" oninput=\"this.value = this.value.toUpperCase()\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Truck Desc is <strong>required</strong></p>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"TTE Capacity\" [(ngModel)]=\"tteCapacityf\" name=\"tteCapacityf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Tte Capacity is <strong>required</strong></p>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Gross Wt\" [(ngModel)]=\"grossWtf\" name=\"grossWtf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Gross Wt is <strong>required</strong></p>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n\n            <mat-select placeholder=\"Gross Wt Uom\" [(ngModel)]=\"grossWtUomf\" name=\"grossWtUomf\" #qty=\"ngModel\"\n                      required>\n                      <mat-option *ngFor=\"let value of wtuoms\" [value]=\"value\">\n                        {{value}}\n                      </mat-option>\n                    </mat-select>\n                    <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                        <p *ngIf=\"qty.errors.required\">Gross Wt Uom is <strong>required</strong>\n                        </p>\n                      </mat-error>\n\n\n          <!-- <input matInput placeholder=\"Gross Wt Uom\" [(ngModel)]=\"grossWtUomf\" name=\"grossWtUomf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Gross Wt Uom is <strong>required</strong></p>\n          </mat-error> -->\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Gross Vol\" [(ngModel)]=\"grossVolf\" name=\"grossVolf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Gross Vol is <strong>required</strong></p>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n\n            <mat-select placeholder=\"Gross Vol Uom\" [(ngModel)]=\"grossVolUomf\" name=\"grossVolUomf\" #qty=\"ngModel\"\n            required>\n            <mat-option *ngFor=\"let value of volumes\" [value]=\"value\">\n              {{value}}\n            </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Gross Vol Uom is <strong>required</strong>\n              </p>\n            </mat-error>\n          <!-- <input matInput placeholder=\"Gross Vol Uom\" [(ngModel)]=\"grossVolUomf\" name=\"grossVolUomf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Gross Vol Uom is <strong>required</strong></p>\n          </mat-error> -->\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Variant 1\" [(ngModel)]=\"variant1f\" name=\"variant1f\" #qty=\"ngModel\" oninput=\"this.value = this.value.toUpperCase()\">\n        \n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Variant 2\" [(ngModel)]=\"variant2f\" name=\"variant2f\" #qty=\"ngModel\" oninput=\"this.value = this.value.toUpperCase()\">\n         \n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <button mat-raised-button color=\"primary\" class=\"btm-action-btn\">Save</button>\n      </div>\n    </div>\n  </div>\n</form>\n</mat-card>\n</div>\n</div>\n\n\n\n\n\n\n\n\n<!--  -->\n<div class=\"modal\" id=\"myModal\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\">\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && updateForm(f))\">\n  <!-- Modal Header -->\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title text-primary\">Update Truck Type</h4>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n  </div>\n  <!-- Modal body -->\n  <div class=\"modal-body\">\n\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"Truck Description\" aria-label=\"State\" [(ngModel)]=\"truckDescu\" name=\"truckDescu\"\n          required autocomplete=\"off\" #truckDescur=\"ngModel\" oninput=\"this.value = this.value.toUpperCase()\">\n        <mat-error *ngIf=\"(f.submitted && truckDescur.invalid)\">\n          <p *ngIf=\"truckDescur.errors.required\">Truck Description is <strong>required</strong>\n          </p>\n        </mat-error>\n        <p class=\"mtop6\">Truck Description</p>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"Load Factor\" aria-label=\"State\" [(ngModel)]=\"loadFactoru\" name=\"loadFactoru\"\n          required autocomplete=\"off\" #loadFactorur=\"ngModel\">\n        <mat-error *ngIf=\"(f.submitted && loadFactorur.invalid)\">\n          <p *ngIf=\"loadFactorur.errors.required\">Load Factor is <strong>required</strong>\n          </p>\n        </mat-error>\n        <p class=\"mtop6\">Load Factor</p>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"TTE Capacity\" aria-label=\"State\" [(ngModel)]=\"tteCapacityu\" name=\"tteCapacityu\"\n          required autocomplete=\"off\" #tteCapacityur=\"ngModel\">\n        <mat-error *ngIf=\"(f.submitted && tteCapacityur.invalid)\">\n          <p *ngIf=\"tteCapacityur.errors.required\">Tte Capacity is <strong>required</strong>\n          </p>\n        </mat-error>\n        <p class=\"mtop6\">TTE Capacity</p>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"Gross Wt is \" aria-label=\"State\" [(ngModel)]=\"grossWtu\" name=\"grossWtu\"\n          required autocomplete=\"off\" #grossWtur=\"ngModel\">\n        <mat-error *ngIf=\"(f.submitted && grossWtur.invalid)\">\n          <p *ngIf=\"grossWtur.errors.required\">Gross Wt is <strong>required</strong>\n          </p>\n        </mat-error>\n        <p class=\"mtop6\">Gross Wt</p>\n      </mat-form-field>\n    </div>\n    <!-- <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"Gross Wt UOM\" aria-label=\"State\" [(ngModel)]=\"grossWtUomu\" name=\"grossWtUomu\"\n          required autocomplete=\"off\" #grossWtUomur=\"ngModel\">\n        <mat-error *ngIf=\"(f.submitted && grossWtUomur.invalid)\">\n          <p *ngIf=\"grossWtUomur.errors.required\">Gross Wt UOM is <strong>required</strong>\n          </p>\n        </mat-error>\n        <p class=\"mtop6\">Gross Wt UOM</p>\n      </mat-form-field>\n    </div> -->\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"Gross Volume is \" aria-label=\"State\" [(ngModel)]=\"grossVolu\" name=\"grossVolu\"\n          required autocomplete=\"off\" #grossVolur=\"ngModel\">\n        <mat-error *ngIf=\"(f.submitted && grossVolur.invalid)\">\n          <p *ngIf=\"grossVolur.errors.required\">Gross Volume is <strong>required</strong>\n          </p>\n        </mat-error>\n        <p class=\"mtop6\">Gross Volume</p>\n      </mat-form-field>\n    </div>\n    <!-- <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"Gross Volume\" aria-label=\"State\" [(ngModel)]=\"grossVolUomu\" name=\"grossVolUomu\"\n          required autocomplete=\"off\" #grossVolUomur=\"ngModel\">\n        <mat-error *ngIf=\"(f.submitted && grossVolUomur.invalid)\">\n          <p *ngIf=\"grossVolUomur.errors.required\">Gross Volume  is <strong>required</strong>\n          </p>\n        </mat-error>\n        <p class=\"mtop6\">Gross Volume</p>\n      </mat-form-field>\n    </div> -->\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"Variant 1\" aria-label=\"State\" [(ngModel)]=\"variant1u\" name=\"variant1u\"\n           autocomplete=\"off\" #variant1ur=\"ngModel\" oninput=\"this.value = this.value.toUpperCase()\">\n           <p class=\"mtop6\">Variant 1</p>\n      </mat-form-field>\n    </div>\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"Variant 2\" aria-label=\"State\" [(ngModel)]=\"variant2u\" name=\"variant2u\"\n           autocomplete=\"off\" #variant2ur=\"ngModel\" oninput=\"this.value = this.value.toUpperCase()\">\n           <p class=\"mtop6\">Variant 2</p>\n      </mat-form-field>\n    </div>\n\n  </div>\n  <!-- Modal footer -->\n  <div class=\"modal-footer\">\n    <!-- <button type=\"button\" class=\"btn btn-danger\" >Close</button> -->\n    <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btm-action-btn\">Update</button>\n    <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\" data-dismiss=\"modal\">Close</button>\n  </div>\n</form>\n</div>\n</div>\n</div>\n<br><br>\n"

/***/ }),

/***/ "./src/app/masters/paas-masters/mt-truck-type/mt-truck-type.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-truck-type/mt-truck-type.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvcGFhcy1tYXN0ZXJzL210LXRydWNrLXR5cGUvbXQtdHJ1Y2stdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/masters/paas-masters/mt-truck-type/mt-truck-type.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-truck-type/mt-truck-type.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MtTruckTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtTruckTypeComponent", function() { return MtTruckTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
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





var MtTruckTypeComponent = /** @class */ (function () {
    function MtTruckTypeComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.isLoading = false;
        this.isShow = true;
        this.salesSku = "";
        this.itemId = "";
        this.compQty = "";
        this.itemSeq = "";
        this.oeCode = "";
        this.insertUser = "";
        this.insertDate = "";
        this.updateUser = "";
        this.updateDate = "";
        this.itemClassification = "";
        this.itemDescription = "";
        this.itemType = "";
        this.itemGroup = "";
        this.itemCategory = "";
        this.tte = "";
        this.effectiveDate = "";
        this.truckType = "";
        this.loadFactor = "";
        this.truckDesc = "";
        this.tteCapacity = "";
        this.grossWt = "";
        this.grossWtUom = "";
        this.grossVol = "";
        this.grossVolUom = "";
        this.variant1 = "";
        this.variant2 = "";
        this.ttId = "";
        this.truckTypef = "";
        this.loadFactorf = "";
        this.truckDescf = "";
        this.tteCapacityf = "";
        this.grossWtf = "";
        this.grossWtUomf = "";
        this.grossVolf = "";
        this.grossVolUomf = "";
        this.variant1f = "";
        this.variant2f = "";
        this.ttIdf = "";
        this.truckTypeu = "";
        this.loadFactoru = "";
        this.truckDescu = "";
        this.tteCapacityu = "";
        this.grossWtu = "";
        this.grossWtUomu = "";
        this.grossVolu = "";
        this.grossVolUomu = "";
        this.variant1u = "";
        this.variant2u = "";
        this.ttIdu = "";
        this.displayForm = false;
        this.editing = {};
        this.page = {
            limit: 100,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        //{value: '', viewValue: 'None'},
        this.wtuoms = ['KG'];
        //{value: '', viewValue: 'None'},
        this.volumes = ['CUMTR'];
        this.insertStatus = "";
        this.insDate = "";
        this.insDatep = "";
        this.updDate = "";
        this.updDatep = "";
        this.month_names = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
        };
    }
    MtTruckTypeComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "paas-master");
    };
    //show the filter
    MtTruckTypeComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    // DataTable Footer
    MtTruckTypeComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    MtTruckTypeComponent.prototype.displayAddForm = function () {
        if (this.displayForm)
            this.displayForm = false;
        else
            this.displayForm = true;
    };
    MtTruckTypeComponent.prototype.upload = function () { };
    MtTruckTypeComponent.prototype.doSubmitSearch = function () {
        var data = {
            truckType: this.truckType,
            truckDesc: this.truckDesc,
            loadFactor: this.loadFactor,
            tteCapacity: this.tteCapacity,
            variant1: this.variant1,
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.doSearch(data);
    };
    MtTruckTypeComponent.prototype.doSearch = function (data) {
        var _this = this;
        console.log("submit data:  " + JSON.stringify(data));
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMtTruckType, data).subscribe(function (response) {
            _this.page.count = response['data'].total;
            _this.page.limit = response['data'].pageLength;
            _this.responseItemsList = response['data'].itemsList;
            console.log("response length: " + _this.responseItemsList.length);
            console.log("response array string: " + JSON.stringify(_this.responseItemsList));
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //server side pagination
    MtTruckTypeComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            truckType: this.truckType,
            truckDesc: this.truckDesc,
            loadFactor: this.loadFactor,
            tteCapacity: this.tteCapacity,
            variant1: this.variant1,
        };
        this.doSearch(bodyData);
    };
    //get filter destination result
    MtTruckTypeComponent.prototype.getfilterDestination = function (event, typeofevent) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            this.isLoading = true;
            //console.log("**** typeofevent "+typeofevent)
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?' + typeofevent + '=' + filtervalue).subscribe(function (response) {
                if (typeofevent === 'truckType') {
                    _this.destinationList = response['data'].searchResult;
                    console.log("DATA:   " + JSON.stringify(_this.destinationList));
                }
                else {
                    _this.sourceList = response['data'].searchResult;
                }
                // console.log("this.destinationList", this.destinationList)
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    MtTruckTypeComponent.prototype.saveForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "truckType": this.truckTypef,
                    "truckDesc": this.truckDescf,
                    "loadFactor": this.loadFactorf,
                    "tteCapacity": this.tteCapacityf,
                    "grossWt": this.grossWtf,
                    "grossWtUom": this.grossWtUomf,
                    "grossVol": this.grossVolf,
                    "grossVolUom": this.grossVolUomf,
                    "variant1": this.variant1f,
                    "variant2": this.variant2f,
                }
            ]
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.addOrUploadMtTruckType, data).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            _this.insertStatus = response['data'].message;
            if (_this.insertStatus === "Sucess") {
                _this.toastr.success(response['message']);
            }
            else if (_this.insertStatus === "Failed") {
                _this.toastr.error("Please check!", "Could not insert record..");
            }
            _this.isLoading = false;
            form.resetForm();
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    MtTruckTypeComponent.prototype.updateForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "truckType": this.truckTypeu,
                    "truckDesc": this.truckDescu,
                    "loadFactor": this.loadFactoru,
                    "tteCapacity": this.tteCapacityu,
                    "grossWt": this.grossWtu,
                    // "grossWtUom": this.grossWtUomu,
                    "grossWtUom": 'KG',
                    "grossVol": this.grossVolu,
                    "grossVolUom": 'CUMTR',
                    "variant1": this.variant1u,
                    "variant2": this.variant2u,
                    "ttId": this.ttIdu,
                }
            ]
        };
        console.log("updateMtTruckType submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.updateMtTruckType, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.isLoading = false;
                _this.doSubmitSearch();
                _this.toastr.success(response['message']);
                $("#myModal").modal('hide');
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
    MtTruckTypeComponent.prototype.showUpdateModel = function (row) {
        this.truckTypeu = row.truckType;
        this.loadFactoru = row.loadFactor;
        this.truckDescu = row.truckDesc;
        this.tteCapacityu = row.tteCapacity;
        this.grossWtu = row.grossWt;
        this.grossWtUomu = row.grossWtUom;
        this.grossVolu = row.grossVol;
        this.grossVolUomu = row.grossVolUom;
        this.variant1u = row.variant1;
        this.variant2u = row.variant2;
        this.ttIdu = row.ttId;
        $("#myModal").modal('show');
    };
    MtTruckTypeComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        if (this.responseItemsList === undefined) {
            this.isLoading = false;
        }
        if (this.responseItemsList.length > 0) {
            var data = {
                truckType: this.truckType,
                truckDesc: this.truckDesc,
                loadFactor: this.loadFactor,
                tteCapacity: this.tteCapacity,
                variant1: this.variant1,
                // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
                pageLength: this.page.count
            };
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMtTruckType, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var excelRawData = response['data'].itemsList.slice();
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        _this.insDate = _this.formatDate(excelRawData[i].insertDate);
                        _this.insDatep = _this.effectiveDate;
                        _this.updDate = _this.formatDate(excelRawData[i].updateDate);
                        _this.updDatep = _this.effectiveDate;
                        var data_1 = {
                            "TruckType": excelRawData[i].truckType,
                            "Truck Desc": excelRawData[i].truckDesc,
                            "LoadFactor": excelRawData[i].loadFactor,
                            "TTE Capacity": excelRawData[i].tteCapacity,
                            "Gross Wt ": excelRawData[i].grossWt,
                            "Gross Wt Uom": excelRawData[i].grossWtUom,
                            "Gross Vol": excelRawData[i].grossVol,
                            "Gross Vol Uom": excelRawData[i].grossVolUom,
                            "Variant 1": excelRawData[i].variant1,
                            "Variant 2": excelRawData[i].variant2,
                            "Insert User   ": excelRawData[i].insertUser,
                            "Insert Date   ": _this.insDatep,
                            "Update User   ": excelRawData[i].updateUser,
                            "Update Date   ": _this.updDatep,
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, 'Truck Type.xlsx');
                    _this.isLoading = false;
                }
                else {
                    _this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
                    _this.isLoading = false;
                }
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
        else {
            // this.toastr.error(response['message']:["Something went wrong..", "Error!"]);
            this.isLoading = false;
        }
    };
    MtTruckTypeComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.page.offset = 0;
        this.doSubmitSearch();
    };
    MtTruckTypeComponent.prototype.formatDate = function (data) {
        if (data != null && data) {
            var formatted = new Date(data), mnth = ("0" + (formatted.getMonth() + 1)).slice(-2), day = ("0" + formatted.getDate()).slice(-2);
            this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
            this.effectiveDate = this.formattedDate;
            return this.formatDate;
        }
        else {
            this.effectiveDate = "";
        }
    };
    MtTruckTypeComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    MtTruckTypeComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    MtTruckTypeComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    MtTruckTypeComponent.prototype.updateValue = function (row, event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex);
        var mtItemIndex = this.responseItemsList.findIndex(function (data) { return data.id == row.id; });
        console.log(cell);
        this.responseItemsList[mtItemIndex][cell] = event.target.value;
        this.responseItemsList = this.responseItemsList.slice();
        console.log('UPDATED!', this.responseItemsList);
    };
    MtTruckTypeComponent.prototype.modifyItem = function (row) {
        var _this = this;
        console.log("---------------");
        console.log(this.editing);
        this.isLoading = true;
        row = __assign({}, row);
        console.log(row);
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.modifyItem, row).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.isLoading = false;
                _this.editing = {};
                _this.toastr.success(response['message']);
                //row = response['data'];
                //this.modifyPlanData= [...this.modifyPlanData]
                // let index = this.modifyPlanData.indexOf(row);
                var index = _this.responseItemsList.findIndex(function (data) { return row.id == data.id; });
                if (index > -1) {
                    _this.responseItemsList[index] = response['data'];
                    _this.responseItemsList = _this.responseItemsList.slice();
                }
                console.log(_this.responseItemsList, "this.responseItemsList");
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
    // clear data
    MtTruckTypeComponent.prototype.clearAll = function () {
        this.truckType = "";
        this.loadFactor = "";
        this.truckDesc = "";
        this.tteCapacity = "";
        this.grossWt = "";
        this.grossWtUom = "";
        this.grossVol = "";
        this.grossVolUom = "";
        this.variant1 = "";
        this.variant2 = "";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], MtTruckTypeComponent.prototype, "table", void 0);
    MtTruckTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mt-truck-type',
            template: __webpack_require__(/*! ./mt-truck-type.component.html */ "./src/app/masters/paas-masters/mt-truck-type/mt-truck-type.component.html"),
            styles: [__webpack_require__(/*! ./mt-truck-type.component.scss */ "./src/app/masters/paas-masters/mt-truck-type/mt-truck-type.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MtTruckTypeComponent);
    return MtTruckTypeComponent;
}());



/***/ }),

/***/ "./src/app/masters/paas-masters/mt-truck-type/mt-truck-type.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-truck-type/mt-truck-type.module.ts ***!
  \****************************************************************************/
/*! exports provided: MtTruckTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtTruckTypeModule", function() { return MtTruckTypeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mt_truck_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mt-truck-type.component */ "./src/app/masters/paas-masters/mt-truck-type/mt-truck-type.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _mt_truck_type_component__WEBPACK_IMPORTED_MODULE_2__["MtTruckTypeComponent"] }
];
var MtTruckTypeModule = /** @class */ (function () {
    function MtTruckTypeModule() {
    }
    MtTruckTypeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [_mt_truck_type_component__WEBPACK_IMPORTED_MODULE_2__["MtTruckTypeComponent"]]
        })
    ], MtTruckTypeModule);
    return MtTruckTypeModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-paas-masters-mt-truck-type-mt-truck-type-module.js.map