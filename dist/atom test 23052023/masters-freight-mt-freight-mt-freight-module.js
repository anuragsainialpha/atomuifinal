(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-freight-mt-freight-mt-freight-module"],{

/***/ "./src/app/masters/freight/mt-freight/mt-freight.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/masters/freight/mt-freight/mt-freight.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n    <b> Freight &gt; MT Freight</b>\n    <span class=\"pull-right refresh-span\">\n      <!-- <button class=\"theme-small-button\" (click)=\"upload()\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n\n  <div class=\"mt-item-fields\" *ngIf=\"isShow\">\n      <div class=\"col-md-12 row\">\n        <div class=\"col-md-12 padding-right-40\">\n          <div class=\"row\">\n\n              <div class=\"col-md-1\">\n                  <mat-form-field>\n                    <input matInput placeholder=\"Servprov\" [(ngModel)]=\"servprov\" name=\"servprov\">\n                  </mat-form-field>\n              </div>\n              <div class=\"col-md-1\">\n                  <mat-form-field>\n                    <input matInput placeholder=\"Source Code\" [(ngModel)]=\"sourceLoc\" name=\"sourceLoc\">\n                  </mat-form-field>\n              </div>\n              <div class=\"col-md-1\">\n                  <mat-form-field>\n                    <input matInput placeholder=\"Dest Code\" [(ngModel)]=\"destLoc\" name=\"destLoc\">\n                  </mat-form-field>\n              </div>\n              <div class=\"col-md-1\">\n                  <mat-form-field>\n                    <input matInput placeholder=\"TruckType\" [(ngModel)]=\"truckType\" name=\"truckType\">\n                  </mat-form-field>\n              </div>\n              <div class=\"col-md-1\">\n                  <mat-form-field>\n                    <input matInput placeholder=\"Variant\" [(ngModel)]=\"condition1\" name=\"condition1\">\n                  </mat-form-field>\n              </div>\n              <div class=\"col-md-1\">\n                  <mat-form-field>\n                    <mat-select name=\"status\" [(value)]=\"status\" placeholder=\"Status\">\n                      <mat-option *ngFor=\"let stat of statusList\" [value]=\"stat.val\">\n                        {{stat.val}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n              </div>\n              <div class=\"col-md-1\">\n                  <mat-form-field>\n                    <input matInput placeholder=\"%\" [(ngModel)]=\"percentile\" name=\"percentile\">\n                  </mat-form-field>\n              </div>\n              <div class=\"col-md-1\">\n                      <mat-form-field>\n                        <input matInput [matDatepicker]=\"createIndentDate\" [(ngModel)]=\"indentDate\"\n                          name=\"indentDate\" placeholder=\"Eff Date\" (ngModelChange)=\"formateDate($event)\">\n                        <mat-datepicker-toggle matSuffix [for]=\"createIndentDate\"></mat-datepicker-toggle>\n                        <mat-datepicker #createIndentDate disabled=\"false\"></mat-datepicker>\n                      </mat-form-field>\n              </div>\n              <div class=\"col-md-1\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"Sap Code\" aria-label=\"State\" autocomplete=\"off\" [(ngModel)]=\"transporterSapCode\" name=\"iransporterSapCode\">\n                    </mat-form-field>\n              </div>\n              <div class=\"col-md-1\">\n                  <mat-form-field>\n                    <input matInput placeholder=\"Src Desc\" [(ngModel)]=\"sourceDesc\" name=\"sourceDesc\">\n                  </mat-form-field>\n              </div>\n              <div class=\"col-md-1\">\n                  <mat-form-field>\n                    <input matInput placeholder=\"Dest Desc\" [(ngModel)]=\"destDesc\" name=\"destDesc\">\n                  </mat-form-field>\n              </div>\n\n          </div>\n          <!-- (ngModelChange)=\"formateDateFromInsert($event)\"  -->\n          <div class=\"row\">\n            <div class=\"col-md-1 pr-0\">\n              <div class=\"form-group\">\n                <mat-form-field>\n                  <input matInput disabled [matDatepicker]=\"formPicker\" placeholder=\"From Insert Date\" [(ngModel)]=\"fromInsertDate\"\n                    name=\"fromInsertDate\"   (dateChange)=\"addEvent('fromInsertDate', $event)\">\n                  <mat-datepicker-toggle matSuffix [for]=\"formPicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #formPicker disabled=\"false\"></mat-datepicker>\n                </mat-form-field>\n              </div>\n            </div>\n            <!-- (ngModelChange)=\"formateDateToInsert($event)\" -->\n            <div class=\"col-md-1 pr-0\">\n              <div class=\"form-group\">\n                <mat-form-field>\n                  <input matInput disabled [matDatepicker]=\"toPicker\" [min]=\"fromInsertDate\" placeholder=\"To Insert Date\"\n                    [(ngModel)]=\"toInsertDate\" name=\"toInsertDate\" >\n                  <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #toPicker [disabled]=\"!fromInsertDate\"></mat-datepicker>\n                </mat-form-field>\n              </div>\n            </div>\n            <!-- <div class=\"col-md-1 pr-0\">\n              <div class=\"form-group\">\n                <mat-form-field>\n                  <input matInput disabled [matDatepicker]=\"expiryPicker\" placeholder=\"Expiry Date\" [(ngModel)]=\"expiryDate\"\n                    name=\"expiryDate\"   (dateChange)=\"addEvent('expiryDate', $event)\">\n                  <mat-datepicker-toggle matSuffix [for]=\"expiryPicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #expiryPicker disabled=\"false\"></mat-datepicker>\n                </mat-form-field>\n              </div>\n            </div> -->\n            <div class=\"col-md-1 \">\n              <div class=\"form-group\">\n                <mat-form-field>\n                  <mat-select placeholder=\"Expiry Date\" [(ngModel)]=\"filterExpiryDate\" name=\"filterExpiryDate\" >\n                    <!-- <mat-option [value]=\"\">None</mat-option> -->\n                    <mat-option *ngFor=\"let item of expiryDateFilterList\" [value]=\"item.key\" >\n                      {{item.value}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"col-md-2 pr-0\" *ngIf = \"showExpiryDate()\">\n              <div class=\"row\">\n                <div class=\"col-md-6 pr-0\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n                      <input matInput disabled [matDatepicker]=\"fromExpiryPicker\" placeholder=\"From Expiry Date\" [(ngModel)]=\"fromExpiryDate\"\n                        name=\"fromExpiryDate\"   (dateChange)=\"addEventExpDate('fromExpiryDate', $event)\">\n                      <mat-datepicker-toggle matSuffix [for]=\"fromExpiryPicker\"></mat-datepicker-toggle>\n                      <mat-datepicker #fromExpiryPicker disabled=\"false\"></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"col-md-6 pr-0\">\n                  <div class=\"form-group\">\n                    <mat-form-field>\n                      <input matInput disabled [matDatepicker]=\"toExpiryPicker\" [min]=\"fromExpiryDate\" placeholder=\"To Expiry Date\" [(ngModel)]=\"toExpiryDate\"\n                        name=\"toExpiryDate\"   >\n                      <mat-datepicker-toggle matSuffix [for]=\"toExpiryPicker\"></mat-datepicker-toggle>\n                      <mat-datepicker #toExpiryPicker [disabled]=\"!fromExpiryDate\"></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"doSearchFilter()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n<!-- <div *ngIf=\"displayBtn\">\n&nbsp;<button [disabled]=\"isDisable\" class=\"makebig btn btn-sm light-red-color\" (click)=\"approveStatusSubmit(buttonLable)\">\n    {{buttonLable}}\n  </button>\n</div>  -->\n\n<div *ngIf=\"isL1Manager && displayBtn\">\n    &nbsp;<button [disabled]=\"isDisable\" *ngIf=\"displayBtn\" class=\"makebig btn btn-sm light-red-color\" (click)=\"approveStatusSubmit(buttonLable)\">\n        {{buttonLable}}\n      </button>\n    </div>\n\n<div *ngIf=\"isL2Manager && displayBtn\">\n  &nbsp;<button [disabled]=\"isDisable\" *ngIf=\"displayBtn\" class=\"makebig btn btn-sm light-red-color\" (click)=\"approveStatusSubmit(buttonLable)\">\n      {{buttonLable}}\n    </button>\n  </div>\n\n\n\n  <div class=\"mt-freight-table\">\n      <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll'  [externalPaging]=\"true\"\n      #table [rows]='mtFreightList' [scrollbarH]=\"true\" [headerHeight]=\"20\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" \n      (page)=\"datatablePageData($event)\" [limit]=\"page.limit\" [count]=\"page.count\"  [offset]=\"page.offset\"\n      [selected]=\"selected\" [selectionType]=\"'checkbox'\" [selectAllRowsOnPage]=\"false\">\n        \n      \n      \n      <!-- name=\"Select All\" prop=\"SelectAll\" -->\n      <!-- <ngx-datatable-column [frozenLeft]=\"true\" [width]=\"30\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\n          <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\" let-selectFn=\"selectFn\">\n            <input type=\"checkbox\" [class.circle]=\"fewChecked\"  (change)=\"selectAllRows($event)\" [checked]=\"isCheckedAll\"/>\n          </ng-template>\n          <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\" let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\n            \n            <input type=\"checkbox\" [class.circle]=\"fewChecked\" (change)=\"modifyFreightItem(row,$event)\" [checked]=\"isCheckedAll\"/>\n          </ng-template>\n      </ngx-datatable-column> -->\n\n      <ngx-datatable-column [frozenLeft]=\"true\" [width]=\"30\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\"\n        [resizeable]=\"false\">\n        <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\n          let-selectFn=\"selectFn\" let-row=\"row\" let-rowIndex=\"rowIndex\">\n          <input type=\"checkbox\" [checked]=\"allRowsSelected\"\n            (change)=\"selectFn(!allRowsSelected);onSelectAll($event)\" />\n        </ng-template>\n        <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\" let-row=\"row\"\n          let-rowIndex=\"rowIndex\" let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\n          <input type=\"checkbox\" [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event);onSelect($event,row)\" />\n        </ng-template>\n      </ngx-datatable-column>\n\n\n\n      <!-- FREEZED CLOUMNS -->\n\n       \n\n        <ngx-datatable-column [frozenLeft]=\"true\" name=\"Servprov\" [width]=\"110\" [resizeable]=\"false\" prop=\"servprov\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.servprov ? row.servprov : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [frozenLeft]=\"true\" name=\"Source Code\" [width]=\"90\" [resizeable]=\"false\" prop=\"sourceLoc\" [sortable]=\"true\" class=\"text-right\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.sourceLoc ? row.sourceLoc : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [frozenLeft]=\"true\"  name=\"Dest Code\" [width]=\"90\" [resizeable]=\"false\" prop=\"destLoc\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.destLoc ? row.destLoc : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [frozenLeft]=\"true\"  name=\"Truck Type\" [width]=\"130\" [resizeable]=\"false\" prop=\"truckType\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.truckType ? row.truckType : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [frozenLeft]=\"true\"  name=\"Variant 1\" [width]=\"70\" [resizeable]=\"false\" prop=\"condition1\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.variant1 ? row.variant1 : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n\n\n       <!-- MOVABLE CLOUMNS -->\n\n       <ngx-datatable-column name=\"Freight\" [width]=\"80\" [resizeable]=\"false\" prop=\"baseFreight\" [sortable]=\"true\" class=\"text-right\"  [cellClass]=\"'text-right'\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.baseFreight ? row.baseFreight : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Curr\" [width]=\"50\" [resizeable]=\"false\" prop=\"baseFreightUom\" [sortable]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.baseFreightUom ? row.baseFreightUom : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Basis\" [width]=\"110\" [resizeable]=\"false\" prop=\"basis\" [sortable]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.basis ? row.basis : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Status\" [width]='120' [resizeable]=\"false\" [sortable]=\"true\" prop=\"appStatus\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <!-- <button class=\"btn btn-sm lightgreen-button\" (click)=\"modifyItem(row)\" [ngClass]=\"(row.status=='Level1 Approved' || row.status=='Level2 Approved'||row.status=='L1 Approved' || row.status=='L2 Approved')?'lightgreen-button':'light-red-color'\"> -->\n            {{row.status?row.status:'Unapproved'}}\n          <!-- </button> -->\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Prev Rate\" [width]=\"80\" [resizeable]=\"false\" prop=\"previousRate\" [sortable]=\"true\" [cellClass]=\"'text-right'\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.previousRate ? row.previousRate : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Diff \" [width]=\"80\" [resizeable]=\"false\" prop=\"diff\" [sortable]=\"true\" class=\"text-right\" [cellClass]=\"'text-right'\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.diff ? row.diff : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"%\" [width]=\"60\" [resizeable]=\"false\" prop=\"percentile\" [sortable]=\"true\" class=\"text-right\" [cellClass]=\"'text-right'\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.percentile ? row.percentile : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Eff Date\" [width]=\"90\" [resizeable]=\"false\" prop=\"effectiveDate\" [sortable]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.effectiveDate ? trimDate(row.effectiveDate) : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <!-- <ngx-datatable-column name=\"Exp Date\" [width]=\"90\" [resizeable]=\"false\" prop=\"expiryDate\" [sortable]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n       {{row.expiryDate ? trimDate(row.expiryDate) : ''}}\n        </ng-template>\n      </ngx-datatable-column> -->\n      <!-- Dispatch plan column -->\n      <ngx-datatable-column [frozenLeft]=\"false\" name=\"Exp Date\" [width]=\"110\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"expiryDate\">\n        <!-- <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <ng-container *ngIf=\"(row.expiryDate == null || row.expiryDate == '')\" >\n            \n            <mat-form-field>\n              <input matInput [matDatepicker]=\"expiryDatePicker\" [min] = \"formatEffectiveDate(row.effectiveDate)\" [(ngModel)]=\"row.selectedExpiryDate\" autofocus name =\"selectedExpiryDate\"\n              (dateChange)=\"updateExpiryDateAtRow(row, rowIndex)\">\n              <mat-datepicker-toggle matSuffix [for]=\"expiryDatePicker\" ></mat-datepicker-toggle>\n              <mat-datepicker #expiryDatePicker></mat-datepicker>\n            </mat-form-field>\n          </ng-container>\n          <ng-container *ngIf=\"row.expiryDate\">\n            {{row.expiryDate ? trimDate(row.expiryDate) : ''}}\n          </ng-container>\n        </ng-template> -->\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <ng-container>\n            <div >\n              <div class=\"edit-field\" title=\"Double click to edit\"\n                (click)=\"editing[rowIndex + '-dispatchDate'] = true\" *ngIf=\"!editing[rowIndex + '-dispatchDate']\">\n                <span class=\"edit-label\">{{row.expiryDate ? trimDate(row.expiryDate) : ''}}\n                </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <mat-form-field *ngIf=\"editing[rowIndex+ '-dispatchDate']\">\n                <input matInput [matDatepicker]=\"rowIndexPicker\" [value]=\"row.selectedExpiryDate\" autofocus\n                  (dateChange)=\"updateExpiryDateAtRow(row, $event, rowIndex)\">\n                <mat-datepicker-toggle matSuffix [for]=\"rowIndexPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #rowIndexPicker></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </ng-container>\n        </ng-template>\n      </ngx-datatable-column>\n      <!-- <ngx-datatable-column name=\"TT\" [width]=\"50\" [resizeable]=\"false\" prop=\"ttDays\" [sortable]=\"true\" [cellClass]=\"'text-right'\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.ttDays ? row.ttDays : ''}}\n        </ng-template>\n      </ngx-datatable-column> -->\n      <ngx-datatable-column name=\"TT Days\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"ttDays\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n          <ng-container>\n            <div >\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-ttDays'] = true\"\n                *ngIf=\"!editing[rowIndex + '-ttDays']\">\n                <span class=\"edit-label\">{{row.ttDays ? row.ttDays : ''}}\n                </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <ng-container *ngIf=\"editing[rowIndex+ '-ttDays']\">\n                <input class=\"table-input\" autofocus (blur)=\"updateValue(row,$event, 'ttDays', rowIndex)\"\n                  [value]=\"row.ttDays\" (keypress)=\"service.numberOnly($event)\" (keyup)=\"showSaveButton($event, row)\">\n              </ng-container>\n            </div>\n          </ng-container>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <!-- <ngx-datatable-column name=\"Distance\" [width]=\"65\" [resizeable]=\"false\" prop=\"distance\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.distance ? row.distance : ''}}\n          </ng-template>\n        </ngx-datatable-column> -->\n        <ngx-datatable-column name=\"Distance\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"distance\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n            <ng-container>\n              <div >\n                <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-distance'] = true\"\n                  *ngIf=\"!editing[rowIndex + '-distance']\">\n                  <span class=\"edit-label\">{{row.distance ? row.distance : ''}}\n                  </span>\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </div>\n                <ng-container *ngIf=\"editing[rowIndex+ '-distance']\">\n                  <input class=\"table-input\" autofocus (blur)=\"updateValue(row,$event, 'distance', rowIndex)\"\n                    [value]=\"row.distance\" (keypress)=\"service.numberOnly($event)\" (keyup)=\"showSaveButton($event, row)\">\n                </ng-container>\n              </div>\n            </ng-container>\n          </ng-template>\n        </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Variant 2\" [width]=\"75\" [resizeable]=\"false\" prop=\"condition2\" [sortable]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.variant2 ? row.variant2 : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n\n\n      \n      <ngx-datatable-column name=\"Rate Type\" [width]=\"70\" [resizeable]=\"false\" prop=\"rateType\" [sortable]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.rateType ? row.rateType : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Loading\" [width]=\"70\" [resizeable]=\"false\" prop=\"loading\" [cellClass]=\"'text-right'\" [sortable]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.loading ? row.loading : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Un Loading\" [width]=\"80\" [resizeable]=\"false\" prop=\"unloading\" [cellClass]=\"'text-right'\" [sortable]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.unloading ? row.unloading : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n\n\n\n      <ngx-datatable-column name=\"Sap Code\" [width]=\"90\" [resizeable]=\"false\" prop=\"transporterSapCode\" [sortable]=\"true\" [cellClass]=\"'text-right'\">\n        <!-- <input type=\"checkbox\" [class.circle]=\"fewChecked\" (change)=\"modifyItem(row,$event)\" [checked]=\"isCheckedAll\"/>&nbsp; \n        <br> -->\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.transporterSapCode ? row.transporterSapCode : ''}}\n        </ng-template>\n      </ngx-datatable-column>\n        <ngx-datatable-column name=\"Source Desc\" [width]=\"170\" [resizeable]=\"false\" prop=\"sourceDesc\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.sourceDesc ? row.sourceDesc : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Dest Desc\" [width]=\"180\" [resizeable]=\"false\" prop=\"destDesc\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.destDesc ? row.destDesc : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Min Value\" [width]=\"70\" [resizeable]=\"false\" prop=\"minValue\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.minValue ? row.minValue : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Min Val Uom\" [width]=\"90\" [resizeable]=\"false\" prop=\"minValueUom\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.minValueUom ? row.minValueUom : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Mode\" [width]=\"60\" [resizeable]=\"false\" prop=\"transportMode\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.transportMode ? row.transportMode :''}}\n          </ng-template>\n        </ngx-datatable-column>\n        \n        <ngx-datatable-column name=\"Src Type\" [width]=\"60\" [resizeable]=\"false\" prop=\"sourceType\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.sourceType ? row.sourceType : ''}}\n            </ng-template>\n          </ngx-datatable-column>\n          \n        <ngx-datatable-column name=\"Others1\" [width]=\"60\" [resizeable]=\"false\" prop=\"Others1\" [cellClass]=\"'text-right'\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.others1 ? row.others1 : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n\n\n        <ngx-datatable-column name=\"Tot Expense\" [width]=\"90\" [resizeable]=\"false\" prop=\"totExpense\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.totExpense ? row.totExpense : ''}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Pay Transporter\" [width]=\"100\" [resizeable]=\"false\" prop=\"payTransporter\" [sortable]=\"true\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.payTransporter ? row.payTransporter : ''}}\n              </ng-template>\n            </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Others1 Code\t\" [width]=\"100\" [resizeable]=\"false\" prop=\"others1Code\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.others1Code\t? row.others1Code : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Others2\" [width]=\"60\" [resizeable]=\"false\" prop=\"others2\" [cellClass]=\"'text-right'\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.others2 ? row.others2 : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Others2 Code\" [width]=\"100\" [resizeable]=\"false\" prop=\"others2 Code\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.others2Code ? row.others2Code : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Others3\" [width]=\"60\" [resizeable]=\"false\" prop=\"others3\" [cellClass]=\"'text-right'\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.others3 ? row.others3 : '' }}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Others3 Code\" [width]=\"100\" [resizeable]=\"false\" prop=\"others3Code\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.others3Code ? row.others3Code : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Insert User\" [width]=\"60\" [resizeable]=\"false\" prop=\"insertUser\" [cellClass]=\"'text-right'\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.insertUser ? row.insertUser : '' }}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Insert Date\" [width]=\"150\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.insertDate ? trimDate(row.insertDate) : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Approval L1 Date\" [width]=\"150\" [resizeable]=\"false\" prop=\"l1ApprovedDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.approval1Date ? trimDate(row.approval1Date) : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Approval L2 Date\" [width]=\"150\" [resizeable]=\"false\" prop=\"l2ApprovedDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.approval2Date ? trimDate(row.approval2Date) : ''}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Remarks\" [width]=\"150\" [resizeable]=\"false\" prop=\"remarks\" [sortable]=\"false\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            <div class=\"edit-field\" [title]=\"row.remarks\"\n            [ngClass]=\"{'cursor-pointer':row.remarks?.length>9}\"\n            (click)=\"showIntegrationMessage(row)\" *ngIf=\"(row.remarks)\">\n            {{(row.remarks?.length>9)?(row.remarks | slice:0:9)+'..':(row.remarks)}}\n          </div>\n            <!-- {{row.remarks}} -->\n          </ng-template>\n        </ngx-datatable-column>\n        <!-- Actions -->\n      <ngx-datatable-column name=\"Action\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\" *ngIf = 'isActionVisible()'>\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n            <button *ngIf= \"row.showSaveButton\" class=\"theme-small-button btn\" matTooltip=\"Modify Freight\" (click)=\"rowLevelModifyFreight(row)\">\n            <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n          </button>\n         \n          <span *ngIf=\"(isShowDeleteFreight(row))\">\n            <button class=\"theme-delete-button btn\" matTooltip=\"Delete plan\" (click)=\"confirmDeleteAction(row)\">\n              <i class=\"fa fa-trash-o fa-2x\" aria-hidden=\"true\"></i>\n            </button>\n          </span>\n        </ng-template>\n      </ngx-datatable-column>\n\n         <!-- Footer Template starts -->\n         <ngx-datatable-footer>\n          <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n            let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n            <div class=\"page-count\">\n              <span *ngIf=\"selectedCount\">\n                {{selectedCount.toLocaleString()}} Selected |\n              </span>\n              Showing {{(offset * pageSize)+1}} to {{(rowCount>\n              (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n              {{(rowCount)}} records.\n            </div>\n            <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n              [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n              [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n            </datatable-pager>\n          </ng-template>\n        </ngx-datatable-footer>\n        <!-- Footer Template Ends -->\n\n      </ngx-datatable>\n  </div>\n</div>\n\n<!-- Confirm Delete modal -->\n<div class=\"modal\" id=\"confirmDelete\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form name=\"form\" #f=\"ngForm\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title text-primary\">Are you sure you want to delete</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"submit\" mat-raised-button color=\"error\" class=\"btm-action-btn\"\n            (click)=\"rowlevelDeleteFreight(selectedRow)\">Delete</button>\n          <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\"\n            data-dismiss=\"modal\">Cancel</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n<!-- <ngx-datatable-column name=\"Base Freight Uom\" [width]=\"120\" [resizeable]=\"false\" prop=\"baseFreightUom\" [sortable]=\"true\">\n  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n    {{row.baseFreightUom}}\n  </ng-template>\n</ngx-datatable-column>\n\n<ngx-datatable-column name=\"Approval1 User\" [width]=\"80\" [resizeable]=\"false\" prop=\"approval1User\" [sortable]=\"true\">\n  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n    {{row.approval1User}}\n  </ng-template>\n</ngx-datatable-column>\n<ngx-datatable-column name=\"Approval1 Date\" [width]=\"80\" [resizeable]=\"false\" prop=\"Approval1Date\" [sortable]=\"true\">\n  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n    {{row.Approval1Date}}\n  </ng-template>\n</ngx-datatable-column>\n<ngx-datatable-column name=\"Approval2 User\" [width]=\"80\" [resizeable]=\"false\" prop=\"Approval2User\" [sortable]=\"true\">\n  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n    {{row.Approval2User}}\n  </ng-template>\n</ngx-datatable-column>\n\n<ngx-datatable-column name=\"Approval2 Date\" [width]=\"80\" [resizeable]=\"false\" prop=\"Approval2Date\" [sortable]=\"true\">\n  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n    {{row.Approval2Date}}\n  </ng-template>\n</ngx-datatable-column> -->\n\n\n\n\n <!--  -->\n\n        <!-- <ngx-datatable-column name=\"Status\" [width]=\"70\" [resizeable]=\"false\" prop=\"Status\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.Status}}\n          </ng-template>\n        </ngx-datatable-column> -->\n       \n        <!-- <ngx-datatable-column name=\"Status\" [width]=\"50\" [resizeable]=\"false\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n            <button class=\"theme-small-button btn\" matTooltip=\"Modify Item\" (click)=\"modifyItem(row)\" [disabled]=\"(row.isError)\">\n              <i class=\"fa fa-refresh fa-2x\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n        </ngx-datatable-column> -->\n\n\n <!-- <ngx-datatable-column name=\"Dest Desc\" [width]=\"70\" [resizeable]=\"false\" prop=\"destDesc\" [sortable]=\"true\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n            <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-tte'] = true\" *ngIf=\"!editing[rowIndex + '-tte']\">\n              <span class=\"edit-label\">{{row.destDesc}}\n              </span>\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <mat-form-field class=\"example-full-width\" *ngIf=\"editing[rowIndex+ '-tte']\">\n              <input matInput (blur)=\"updateValue(row, $event, 'tte', rowIndex)\" [value]=\"row.tte\" autofocus>\n            </mat-form-field>\n          </ng-template>\n        </ngx-datatable-column> -->\n\n        <!-- Modal -->\n<div class=\"modal fade\" id=\"integrationMsgModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\" >Remarks</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p >{{remarks}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"saveComments()\">Save</button> -->\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/masters/freight/mt-freight/mt-freight.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/masters/freight/mt-freight/mt-freight.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvZnJlaWdodC9tdC1mcmVpZ2h0L210LWZyZWlnaHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/masters/freight/mt-freight/mt-freight.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/masters/freight/mt-freight/mt-freight.component.ts ***!
  \********************************************************************/
/*! exports provided: MtFreightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtFreightComponent", function() { return MtFreightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var src_app_services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/helper-service/helper-service.service */ "./src/app/services/helper-service/helper-service.service.ts");
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








var MtFreightComponent = /** @class */ (function () {
    function MtFreightComponent(service, toastr, helperService) {
        this.service = service;
        this.toastr = toastr;
        this.helperService = helperService;
        this.isLoading = false;
        this.isShow = true;
        //filter elements 
        this.transporterSapCode = "";
        this.servprov = "";
        this.sourceLoc = "";
        this.sourceDesc = "";
        this.destLoc = "";
        this.destDesc = "";
        this.truckType = "";
        this.condition1 = "";
        this.effectiveDate = '';
        this.indentDate = '';
        this.expiryDate = "";
        this.ttDays = "";
        this.baseFreight = "";
        this.status = "Level2 Approved";
        this.statusList = [{ val: "Unapproved" }, { val: "Level1 Approved" }, { val: "Level2 Approved" }];
        this.rateType = "";
        this.loading = "";
        this.unloading = "";
        this.others1 = "";
        this.others1Code = "";
        this.others2 = "";
        this.others2Code = "";
        this.others3 = "";
        this.others3Code = "";
        this.distance = "";
        this.totExpense = "";
        this.payTransporter = "";
        this.sourceType = "";
        this.selected = [];
        this.fromInsertDate = '';
        this.toInsertDate = '';
        this.fromInsert = '';
        this.toInsert = '';
        this.page = {
            limit: 200,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.mtFreightCheckedList = [];
        this.editing = {};
        this.buttonLable = "";
        this.isCheckedAll = false;
        this.allRowsSelected = false;
        this.currentPageIndex = 0;
        this.gotResponse = false;
        this.responseData = '';
        this.minRecordIndex = 0;
        this.maxRecordIndex = 0;
        this.isDisable = true;
        this.displayBtn = false;
        this.isL1Manager = false;
        this.isL2Manager = false;
        this.showToAndFromExpDate = false;
        this.fromExpiryDate = null;
        this.toExpiryDate = null;
        this.filterExpiryDate = null;
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.userRole = '';
        this.minDate = new Date();
        this.month_names = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
        };
        // condition1: any = "";
        this.effDate = "";
        this.exppDate = "";
        this.selectionSubmitFlag = false;
    }
    MtFreightComponent.prototype.ngOnInit = function () {
        this.expiryDateFilterList = src_app_constants__WEBPACK_IMPORTED_MODULE_6__["constants"].freightExpiryDateFilterList;
        localStorage.setItem("userMenu", "freight-master");
        this.userRole = localStorage.getItem('role');
        if (this.userRole === "L1_MGR") {
            this.isL1Manager = true;
            this.status = "Unapproved";
            localStorage.setItem("userMenu", "fgs-freight");
        }
        if (this.userRole === "L2_MGR") {
            this.isL2Manager = true;
            this.status = "Level1 Approved";
            localStorage.setItem("userMenu", "fgs-freight");
        }
        this.index = this.page.offset;
        console.log(this.userRole);
        // this.doSearchFilter(); 
        // L1MGR L2MGR  L2_MGR L1_MGR  status
    };
    MtFreightComponent.prototype.setDefaultStatus = function () {
        if (this.userRole === "L1_MGR") {
            this.isL1Manager = true;
            this.status = "Unapproved";
        }
        if (this.userRole === "L2_MGR") {
            this.isL2Manager = true;
            this.status = "Level1 Approved";
        }
    };
    // Datatable footer
    MtFreightComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    //show the filter
    MtFreightComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    // formattedDate: string;
    //formatting the date from datepicker 
    MtFreightComponent.prototype.formateDate = function (data) {
        console.log(data);
        if (data != null && data) {
            var formatted = new Date(data), mnth = ("0" + (formatted.getMonth() + 1)).slice(-2), day = ("0" + formatted.getDate()).slice(-2);
            this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
            this.effectiveDate = this.formattedDate;
            console.log(this.effectiveDate + "  formattedDate effectiveDate");
            return this.formateDate;
        }
        else {
            this.effectiveDate = "";
        }
    };
    MtFreightComponent.prototype.formateDateFromInsert = function (data) {
        console.log(data);
        if (data != null && data) {
            var formatted = new Date(data), mnth = ("0" + (formatted.getMonth() + 1)).slice(-2), day = ("0" + formatted.getDate()).slice(-2);
            this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
            this.fromInsertDate = this.formattedDate;
            console.log(this.fromInsertDate + "  formattedDate effectiveDate");
            return this.formateDate;
        }
        else {
            this.fromInsertDate = "";
        }
    };
    MtFreightComponent.prototype.formateDateToInsert = function (data) {
        console.log(data);
        if (data != null && data) {
            var formatted = new Date(data), mnth = ("0" + (formatted.getMonth() + 1)).slice(-2), day = ("0" + formatted.getDate()).slice(-2);
            this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
            this.toInsertDate = this.formattedDate;
            console.log(this.toInsertDate + "  formattedDate effectiveDate");
            return this.formateDate;
        }
        else {
            this.toInsertDate = "";
        }
    };
    MtFreightComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    MtFreightComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    MtFreightComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    // Pagination
    MtFreightComponent.prototype.datatablePageData = function (pageInfo) {
        this.selected = [];
        this.index = pageInfo.offset;
        var data = {
            transporterSapCode: this.transporterSapCode,
            servprov: this.servprov,
            sourceLoc: this.sourceLoc,
            sourceDesc: this.sourceDesc,
            destLoc: this.destLoc,
            destDesc: this.destDesc,
            truckType: this.truckType,
            condition1: this.condition1,
            effectiveDate: this.effectiveDate,
            expiryDate: this.expiryDate ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.expiryDate)).format("DD-MM-YYYY") : null,
            ttDays: this.ttDays,
            baseFreight: this.baseFreight,
            status: this.status,
            index: this.index,
            pageLength: this.page.limit,
            // toInsertDate:this.toInsertDate,
            // fromInsertDate : this.fromInsertDate,
            toInsertDate: this.toInsertDate ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.toInsertDate)).format("DD-MM-YYYY") : null,
            fromInsertDate: this.fromInsertDate ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.fromInsertDate)).format("DD-MM-YYYY") : null,
            expiryDateFilterType: this.filterExpiryDate,
            fromExpiryDate: this.fromExpiryDate ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.fromExpiryDate)).format("DD-MM-YYYY") : null,
            toExpiryDate: this.toExpiryDate ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.toExpiryDate)).format("DD-MM-YYYY") : null,
        };
        //isL1Manager isL1Manager
        this.displayBtn = true;
        if (this.isL1Manager == true) {
            if (this.status && this.status != null && this.status != '') {
                if (this.status === "Unapproved") {
                    this.buttonLable = "L1 Approve";
                    this.displayBtn = true;
                }
                else if (this.status === "Level1 Approved") {
                    this.buttonLable = "L2 Approve";
                    this.displayBtn = false;
                }
                else if (this.status === "Level2 Approved") {
                    this.isDisable = false;
                    this.displayBtn = false;
                }
            }
            else {
                this.displayBtn = false;
            }
        }
        if (this.isL2Manager == true) {
            if (this.status && this.status != null && this.status != '') {
                if (this.status === "Unapproved") {
                    this.displayBtn = false;
                }
                else if (this.status === "Level1 Approved") {
                    this.buttonLable = "L2 Approve";
                    this.displayBtn = true;
                }
                else if (this.status === "Level2 Approved") {
                    // this.buttonLable="L2 Approved"
                    // this.disableButton="disabled";
                    // this.isDisable=true;
                    this.displayBtn = false;
                }
            }
            else {
                this.displayBtn = false;
            }
        }
        this.searchFilter(data);
    };
    // export to excel file
    MtFreightComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        // this.page.limit = this.page.count;
        var data = {
            transporterSapCode: this.transporterSapCode,
            servprov: this.servprov,
            sourceLoc: this.sourceLoc,
            sourceDesc: this.sourceDesc,
            destLoc: this.destLoc,
            destDesc: this.destDesc,
            truckType: this.truckType,
            condition1: this.condition1,
            effectiveDate: this.effectiveDate,
            expiryDate: this.expiryDate ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.expiryDate)).format("DD-MM-YYYY") : null,
            ttDays: this.ttDays,
            baseFreight: this.baseFreight,
            status: this.status,
            // pageLength: this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
            pageLength: this.page.count,
            // toInsertDate:this.toInsertDate,
            // fromInsertDate : this.fromInsertDate,
            toInsertDate: this.toInsertDate ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.toInsertDate)).format("DD-MM-YYYY") : null,
            fromInsertDate: this.fromInsertDate ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.fromInsertDate)).format("DD-MM-YYYY") : null,
            expiryDateFilterType: this.filterExpiryDate,
            fromExpiryDate: this.fromExpiryDate ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.fromExpiryDate)).format("DD-MM-YYYY") : null,
            toExpiryDate: this.toExpiryDate ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.toExpiryDate)).format("DD-MM-YYYY") : null,
        };
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getFreights, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var mtItemData = response['data'].freights;
                console.log("mtItemData:  " + mtItemData);
                var excelRawData = mtItemData;
                var newExcelData = [];
                for (var i = 0; i < excelRawData.length; i++) {
                    //this.effDate = excelRawData[i].effectiveDate;  
                    //this.effDate = this.formateDate(this.effDate);  
                    //this.exppDate = excelRawData[i].expiryDate;
                    //this.exppDate = this.formateDate(this.exppDate);
                    console.log("**************eff Date: " + _this.effDate + "  " + _this.exppDate);
                    // private String laneCode;
                    //
                    var data_1 = {
                        "Servprov": excelRawData[i].servprov,
                        "Source Loc": excelRawData[i].sourceLoc,
                        "Dest Loc": excelRawData[i].destLoc,
                        "Truck Type": excelRawData[i].truckType,
                        "variant 1": excelRawData[i].variant1,
                        "Freight": excelRawData[i].baseFreight,
                        "Curr": excelRawData[i].baseFreightUom,
                        "Basis": excelRawData[i].basis,
                        "Status": excelRawData[i].status,
                        "Prev Rate": excelRawData[i].previousRate,
                        "Diff": excelRawData[i].diff,
                        "Percentage (%)": excelRawData[i].percentile,
                        "Eff Date": excelRawData[i].effectiveDate ? _this.trimDate(excelRawData[i].effectiveDate) : null,
                        "Exp Date": excelRawData[i].expiryDate ? _this.trimDate(excelRawData[i].expiryDate) : null,
                        "TT Days": excelRawData[i].ttDays,
                        "Distance": excelRawData[i].distance,
                        "variant 2": excelRawData[i].variant2,
                        "Rate Type": excelRawData[i].rateType,
                        "Loading": excelRawData[i].loading,
                        "UnLoading": excelRawData[i].unloading,
                        "Sap Code": excelRawData[i].transporterSapCode,
                        "Source Desc": excelRawData[i].sourceDesc,
                        "Dest Desc": excelRawData[i].destDesc,
                        "Min Value": excelRawData[i].minValue,
                        "Min Value Uom": excelRawData[i].minValueUom,
                        "Mode": excelRawData[i].transportMode,
                        "Src Type": excelRawData[i].sourceType,
                        "Others1": excelRawData[i].others1,
                        "Tot Expense": excelRawData[i].totExpense,
                        "Pay Transporter": excelRawData[i].payTransporter,
                        "Others1 Code": excelRawData[i].others1Code,
                        "Others2": excelRawData[i].others2,
                        "Others2 Code": excelRawData[i].others2Code,
                        "Others3": excelRawData[i].others3,
                        "Others3 Code": excelRawData[i].others3Code,
                        "Insert User": excelRawData[i].insertUser,
                        "Insert Date": excelRawData[i].insertDate ? _this.trimDate(excelRawData[i].insertDate) : null,
                        "Approval L1 Date": excelRawData[i].approval1Date ? _this.trimDate(excelRawData[i].approval1Date) : null,
                        "Approval L2 Date": excelRawData[i].approval2Date ? _this.trimDate(excelRawData[i].approval2Date) : null,
                        "Remarks": excelRawData[i].remarks
                        // "Lane Code": excelRawData[i].laneCode,
                        // "Approval1 User": excelRawData[i].approval1User,
                        // "Approval2 User": excelRawData[i].approval2User,
                        // "Update User": excelRawData[i].updateUser,
                        // "Update Date": excelRawData[i].updateDate,
                        // "Rate Record Id": excelRawData[i].rateRecordId,
                    };
                    console.log("PUSH:  " + data_1);
                    newExcelData.push(data_1);
                }
                var workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new(); // create a new blank book
                var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(newExcelData);
                xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, 'Mt-Freight.xlsx');
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
    // Refresh data
    MtFreightComponent.prototype.refreshData = function () {
        this.isLoading = true;
        this.clearAll();
        this.index = 0;
        this.page.offset = 0;
        this.table.offset = 0;
        this.setDefaultStatus();
        this.selected = [];
        var data = {
            transporterSapCode: this.transporterSapCode,
            servprov: this.servprov,
            sourceLoc: this.sourceLoc,
            sourceDesc: this.sourceDesc,
            destLoc: this.destLoc,
            destDesc: this.destDesc,
            truckType: this.truckType,
            condition1: this.condition1,
            effectiveDate: this.effectiveDate,
            expiryDate: this.expiryDate,
            ttDays: this.ttDays,
            baseFreight: this.baseFreight,
            status: this.status,
            index: this.index,
            pageLength: this.page.limit,
        };
        //isL1Manager isL1Manager
        this.displayBtn = true;
        if (this.isL1Manager == true) {
            if (this.status && this.status != null && this.status != '') {
                if (this.status === "Unapproved") {
                    this.buttonLable = "L1 Approve";
                    this.displayBtn = true;
                }
                else if (this.status === "Level1 Approved") {
                    this.buttonLable = "L2 Approve";
                    this.displayBtn = false;
                }
                else if (this.status === "Level2 Approved") {
                    this.isDisable = false;
                    this.displayBtn = false;
                }
            }
            else {
                this.displayBtn = false;
            }
        }
        if (this.isL2Manager == true) {
            if (this.status && this.status != null && this.status != '') {
                if (this.status === "Unapproved") {
                    this.displayBtn = false;
                }
                else if (this.status === "Level1 Approved") {
                    this.buttonLable = "L2 Approve";
                    this.displayBtn = true;
                }
                else if (this.status === "Level2 Approved") {
                    // this.buttonLable="L2 Approved"
                    // this.disableButton="disabled";
                    // this.isDisable=true;
                    this.displayBtn = false;
                }
            }
            else {
                this.displayBtn = false;
            }
        }
        this.searchFilter(data);
        // let data = {
        //   transporterSapCode: this.transporterSapCode,
        //   servprov: this.servprov,
        //   sourceLoc: this.sourceLoc,
        //   sourceDesc: this.sourceDesc,
        //   destLoc: this.destLoc,
        //   destDesc: this.destDesc,
        //   truckType: this.truckType,
        //   condition1: this.condition1,
        //   effectiveDate: this.effectiveDate,
        //   expiryDate: this.expiryDate,
        //   ttDays: this.ttDays,
        //   baseFreight: this.baseFreight,
        //   status: this.status,
        //   index : this.index
        // }
        // this.service.post_service(ApiserviceService.apisList.getFreights, data).subscribe(response => {
        //   if (response['statusCode'] == 200) {
        //     this.mtFreightList = [];
        //     let responseData = response['data'].items;
        //     this.mtFreightList = responseData;
        //     this.mtFreightList = [...this.mtFreightList];
        //     this.page.count = response['data'].total;
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
    MtFreightComponent.prototype.doSearchFilter = function () {
        this.displayBtn = false;
        this.isCheckedAll = false;
        this.isDisable = false;
        this.buttonLable = "";
        this.selected = [];
        this.table.offset = 0;
        this.page.offset = 0;
        this.index = 0;
        //this.page.offset=0;
        console.log(" PAGE DETAILS***********" + JSON.stringify(this.page));
        console.log(" PAGE DETAILS page.offset***********" + JSON.stringify(this.page.offset));
        // console.log("status:  "+this.status);
        var data = {
            transporterSapCode: this.transporterSapCode,
            servprov: this.servprov,
            sourceLoc: this.sourceLoc,
            sourceDesc: this.sourceDesc,
            destLoc: this.destLoc,
            destDesc: this.destDesc,
            truckType: this.truckType,
            condition1: this.condition1,
            effectiveDate: this.effectiveDate,
            expiryDate: this.expiryDate ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.expiryDate)).format("DD-MM-YYYY") : null,
            ttDays: this.ttDays,
            baseFreight: this.baseFreight,
            status: this.status,
            index: this.index,
            pageLength: this.page.limit,
            // toInsertDate:this.toInsertDate,
            // fromInsertDate : this.fromInsertDate,
            toInsertDate: this.toInsertDate ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.toInsertDate)).format("DD-MM-YYYY") : null,
            fromInsertDate: this.fromInsertDate ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.fromInsertDate)).format("DD-MM-YYYY") : null,
            expiryDateFilterType: this.filterExpiryDate,
            fromExpiryDate: this.fromExpiryDate ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.fromExpiryDate)).format("DD-MM-YYYY") : null,
            toExpiryDate: this.toExpiryDate ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(this.toExpiryDate)).format("DD-MM-YYYY") : null,
        };
        //isL1Manager isL1Manager
        this.displayBtn = true;
        if (this.isL1Manager == true) {
            if (this.status && this.status != null) {
                if (this.status === "Unapproved") {
                    this.buttonLable = "L1 Approve";
                    this.displayBtn = true;
                }
                else if (this.status === "Level1 Approved") {
                    this.buttonLable = "L2 Approve";
                    this.displayBtn = false;
                }
                else if (this.status === "Level2 Approved") {
                    this.isDisable = false;
                    this.displayBtn = false;
                }
            }
            else {
                this.displayBtn = false;
            }
        }
        if (this.isL2Manager == true) {
            if (this.status && this.status != null) {
                if (this.status === "Unapproved") {
                    this.displayBtn = false;
                }
                else if (this.status === "Level1 Approved") {
                    this.buttonLable = "L2 Approve";
                    this.displayBtn = true;
                }
                else if (this.status === "Level2 Approved") {
                    // this.buttonLable="L2 Approved"
                    // this.disableButton="disabled";
                    // this.isDisable=true;
                    this.displayBtn = false;
                }
            }
            else {
                this.displayBtn = false;
            }
        }
        var insertFilter = false;
        var expiryFilter = false;
        if (this.fromInsertDate != '' && this.fromInsertDate != null) {
            if (this.toInsertDate != '' && this.toInsertDate != null) {
                insertFilter = true;
            }
            else {
                this.toastr.error("Please select to Date");
                insertFilter = false;
            }
        }
        else {
            insertFilter = true;
        }
        if (this.fromExpiryDate != '' && this.fromExpiryDate != null) {
            if (this.toExpiryDate != '' && this.toExpiryDate != null) {
                expiryFilter = true;
            }
            else {
                this.toastr.error("Please select to Date");
                expiryFilter = false;
            }
        }
        else {
            expiryFilter = true;
        }
        if (insertFilter && expiryFilter) {
            this.searchFilter(data);
        }
    };
    MtFreightComponent.prototype.searchFilter = function (data) {
        var _this = this;
        this.isLoading = true;
        this.mtFreightList = [];
        console.log("SUMBMITTING FILTER DATA:  \n " + JSON.stringify(data));
        console.log(" PAGE DETAILS***********" + JSON.stringify(this.page));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getFreights, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                // console.log("Error", err);
                _this.mtFreightList = response['data'].freights;
                var responseArray = response['data'].freights.slice();
                _this.page.count = response['data'].total;
                // Formating the  expiry date
                responseArray.forEach(function (element) {
                    // Find the index to update
                    var index = _this.mtFreightList.findIndex(function (ele) { return element.id == ele.id; });
                    // add new column in the object "selectedExpiryDate" for date autopopulate for datepicker
                    var gettheDate = element.expiryDate;
                    if (gettheDate != null && gettheDate != '') {
                        // let splittedData = gettheDate.split("/");
                        // let createNewDate = splittedData[1] + "/" + splittedData[0] + "/" + splittedData[2];
                        var dateFormat = new Date(gettheDate);
                        element.selectedExpiryDate = dateFormat.toISOString();
                        if (index > -1) {
                            _this.mtFreightList[index] = element;
                        }
                    }
                });
                _this.mtFreightList = _this.mtFreightList.slice();
                //  console.log("FRIEGHTS LIST: "+this.mtFreightList);
                console.log("FRIEGHTS LIST: " + JSON.stringify(_this.mtFreightList));
                _this.isLoading = false;
            }
            else {
                _this.toastr.error("Didnot get response..", "Error!");
                _this.isLoading = false;
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // clear data
    MtFreightComponent.prototype.clearAll = function () {
        this.transporterSapCode = '';
        this.servprov = "";
        this.sourceLoc = "";
        this.sourceDesc = '';
        this.destLoc = '';
        this.destDesc = '';
        this.truckType = '';
        this.condition1 = '';
        this.effectiveDate = '';
        this.expiryDate = '';
        this.ttDays = '';
        this.baseFreight = '';
        this.status = '';
        this.toInsertDate = '';
        this.fromInsertDate = '';
        this.toInsert = '';
        this.fromInsert = '';
        this.indentDate = '';
        this.filterExpiryDate = null;
        this.fromExpiryDate = null;
        this.toExpiryDate = null;
        this.showToAndFromExpDate = false;
        /* if (this.userRole === "L1_MGR") {
          this.status = "Unapproved";
        }else if (this.userRole === "L2_MGR") {
          this.status = "Level1 Approved";
        }else{
          this.status = "Level2 Approved";
        } */
    };
    MtFreightComponent.prototype.showExpiryDate = function () {
        if (this.filterExpiryDate && this.filterExpiryDate == 'BETWEEN') {
            return true;
        }
        else {
            return false;
        }
    };
    MtFreightComponent.prototype.updateValue = function (row, event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex);
        var mtItemIndex = this.mtFreightList.findIndex(function (data) { return data.id == row.id; });
        console.log(cell);
        this.mtFreightList[mtItemIndex][cell] = event.target.value;
        this.mtFreightList = this.mtFreightList.slice();
        console.log('UPDATED!', this.mtFreightList);
    };
    MtFreightComponent.prototype.setPage = function (pageInfo) {
        this.allRowsSelected = false;
        this.isCheckedAll = false;
        this.currentPageIndex = pageInfo.offset;
        console.log("***" + JSON.stringify(pageInfo));
    };
    // selectAllRows(event){
    //   if(event.target.checked) {
    //     this.isCheckedAll=true;
    //     console.log("...Current Page Number "+this.currentPageIndex);
    //   } else{
    //     this.isCheckedAll=false;
    //    // console.log("...un checked " +this.isCheckedAll);
    //   }
    // }
    // //USER ROW SELECTION SUBMITION
    // modifyFreightItem(row, event) {
    //   console.log("EVENT ROW: "+JSON.stringify(row));
    //   console.log("---------------" +this.mtFreightCheckedList);
    //   if(event.target.checked) {
    //     if(this.selectionSubmitFlag){
    //       this.mtFreightCheckedList=[];
    //       this.selectionSubmitFlag=false;
    //     }
    //     console.log("...checked "+row.id);
    //      if(this.mtFreightCheckedList.length>0){
    //        for(var i=0 ; i < this.mtFreightCheckedList.length; i++) {
    //          if(this.mtFreightCheckedList[i].id!=row.id){
    //            this.mtFreightCheckedList.push(row);
    //         }
    //        }
    //      }
    //      else{
    //       this.mtFreightCheckedList.push(row);
    //      }
    //   } else{
    //     console.log("...un checked " +row.id);
    //     if(this.mtFreightCheckedList.length>0){
    //       for(var i=0 ; i < this.mtFreightCheckedList.length; i++) {
    //         if(this.mtFreightCheckedList[i].id===row.id){
    //           this.mtFreightCheckedList.splice(i,1);
    //       }
    //       }
    //     }
    //   }
    //   console.log("---------------" +this.mtFreightCheckedList.length);
    //   //this.callAPI(this.mtFreightCheckedList);
    // }
    MtFreightComponent.prototype.onSelect = function (event, data) {
        if (event.target.checked) {
            // if the checkbox checked we need update plan Qty based on the status
            // if the status  APPROVAL PENDING  we need populate Plan Qty
            // if the sattus  APPROVAL_PART we need update only UnAppr QTY
            this.mtFreightCheckedList.push(data);
        }
        else {
            var index = this.mtFreightCheckedList.indexOf(data);
            this.mtFreightCheckedList.splice(index, 1);
        }
        console.log("select", this.mtFreightCheckedList);
    };
    MtFreightComponent.prototype.onSelectAll = function (event) {
        var _this = this;
        this.mtFreightCheckedList = [];
        this.mtFreightList.forEach(function (data) {
            _this.onSelect(event, data);
        });
        console.log("select All", this.mtFreightCheckedList);
    };
    // MULTI SUBMITION
    MtFreightComponent.prototype.approveStatusSubmit = function (submitSelectionLabel) {
        this.isLoading = true;
        this.minRecordIndex = 0;
        this.maxRecordIndex = 0;
        console.log("***** SUBMITTING SELECTED RECORDS  " + submitSelectionLabel);
        //SELECT ALL OPTION
        if (this.isCheckedAll) {
            this.mtFreightCheckedList = [];
            if (this.currentPageIndex === 0) {
                this.minRecordIndex = 0;
                this.maxRecordIndex = this.page.limit;
            }
            else {
                this.minRecordIndex = this.currentPageIndex * this.page.limit;
                this.maxRecordIndex = this.minRecordIndex + this.page.limit;
            }
            this.mtFreightCheckedList = this.mtFreightList.slice(this.minRecordIndex, this.maxRecordIndex);
            this.callAPI(this.mtFreightCheckedList, submitSelectionLabel);
        }
        // CUSTOM SELECTED ROWS LIST
        else {
            this.callAPI(this.mtFreightCheckedList, submitSelectionLabel);
        }
        this.selectionSubmitFlag = true;
    };
    MtFreightComponent.prototype.callAPI = function (freightsList, submitSelectionLabel) {
        var _this = this;
        console.log("call api function selected records: " + freightsList.length);
        for (var i = 0; i < freightsList.length; i++) {
            // delete freightsList[i].test.id;
            if (submitSelectionLabel === "L1 Approve")
                freightsList[i].status = "Level1 Approved";
            if (submitSelectionLabel === "L2 Approve")
                freightsList[i].status = "Level2 Approved";
            if (submitSelectionLabel === "L2 Approved")
                this.disableButton = "disabled";
            //console.log("UPDATED JSON "+JSON.stringify(freightsList[i]))
            // if(submitSelectionLabel==="L2 Approved ")
            // this.mtFreightCheckedList[i].status="L1 Approved";
        }
        var freightData = {
            freights: freightsList
        };
        console.log("SUBMITTING freightData", JSON.stringify(freightData));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.updateFreight, freightData).subscribe(function (response) {
            // this.planData = JSON.stringify(this.responseData);
            console.log("RESPONSE CODE", response['statusCode']);
            if (response['statusCode'] == 200) {
                _this.responseData = response['data'];
                console.log("resposne", _this.responseData);
                _this.toastr.success(response['message']);
                _this.totalRecords = _this.responseData['totalRecords'];
                _this.refreshData();
                console.log("totalRecords " + _this.totalRecords);
                _this.gotResponse = true;
                if (_this.ErrorData != undefined && _this.ErrorData.length > 0) {
                    _this.totalErrorRecords = _this.ErrorData.length;
                    console.log("ErrorData " + _this.ErrorData.length);
                }
                // this.isLoading = false;
            }
            else {
                _this.isLoading = false;
                //this.openDialog(response['data'])
                _this.ErrorData = response['data'];
            }
            _this.mtFreightCheckedList = [];
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error("Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    MtFreightComponent.prototype.isShowDeleteFreight = function (row) {
        if ((this.userRole === "L1_MGR") || (this.userRole === "L2_MGR") || (this.userRole === "ADMIN")) {
            // Once L2 is approved the freight and some one modified the fretaight details then status will be Unapproved 
            // but the record cannot be deleted becoz the record is already stored in OTM/SAP
            // So once the record is approved by L2 it cannot be deleted but it can be modified
            if (row.status !== 'Level2 Approved' && (row.approval2User === null || row.approval2User === '')) {
                return true;
            }
        }
        return false;
    };
    MtFreightComponent.prototype.addEvent = function (type, event) {
        if (event.target.value) {
            /* Checking if selected from date greater than to date.
           Clearing the toDate field when from date greater than to date */
            if (this.toInsertDate && (this.fromInsertDate > this.toInsertDate)) {
                this.toInsertDate = '';
            }
        }
    };
    MtFreightComponent.prototype.addEventExpDate = function (type, event) {
        console.log(event.value);
        console.log("------>To Date", this.toExpiryDate);
        var checkToDate = this.toExpiryDate;
        console.log("Check--->1", checkToDate);
        if (this.toExpiryDate == this.currentDateAsString) {
            // on page load we are defaluting the  to date with string. Comparing string with date is not possible
            // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
            checkToDate = new Date();
            console.log("Check--->2", checkToDate);
        }
        /* Checking if selected from date greater than to date.
        Clearing the toDate field when from date greater than to date */
        if (event.target.value) {
            if (this.toExpiryDate && (this.fromExpiryDate > checkToDate)) {
                this.toExpiryDate = '';
            }
        }
        // this.toDate = '';
    };
    MtFreightComponent.prototype.expiryFilterType = function (key) {
        if (key && key == 'BETWEEN') {
            this.showToAndFromExpDate = true;
        }
        else {
            this.showToAndFromExpDate = false;
        }
    };
    MtFreightComponent.prototype.rowlevelDeleteFreight = function (row) {
        var _this = this;
        if (row.status === "Level2 Approved") {
            this.toastr.error("You cannot delete the record as it is already approved by L2_MGR!", "Error!");
        }
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.deleteFreight + '?rowId=' + row.id).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var deletedRow = response['data'];
                var index = _this.mtFreightList.findIndex(function (item) { return item.id == deletedRow; });
                _this.mtFreightList.splice(index, 1);
                _this.mtFreightList = _this.mtFreightList.slice();
                _this.toastr.success(response['message'] ? response['message'] : 'Something went wrong!');
                _this.isLoading = false;
                $("#confirmDelete").modal('hide');
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Something went wrong!', "Error!");
                $("#confirmDelete").modal('hide');
                _this.isLoading = false;
            }
        }, function (err) {
            _this.toastr.error('Something went wrong!', "Error!");
            _this.isLoading = false;
            $("#confirmDelete").modal('hide');
        });
    };
    MtFreightComponent.prototype.isActionVisible = function () {
        if ((this.userRole === "L1_MGR") || (this.userRole === "L2_MGR") || (this.userRole === "ADMIN")) {
            return true;
        }
        return false;
    };
    MtFreightComponent.prototype.rowLevelModifyFreight = function (row) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.updateFreightDetails, row).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var updateRow_1 = response['data'];
                var index = _this.mtFreightList.findIndex(function (item) { return item.id === updateRow_1.id; });
                if (index > -1) {
                    updateRow_1.selectedExpiryDate = updateRow_1.expiryDate ? new Date(updateRow_1.expiryDate).toISOString() : null;
                    _this.mtFreightList[index] = updateRow_1;
                    _this.editing = {};
                }
                _this.mtFreightList = _this.mtFreightList.slice();
                _this.toastr.success(response['message'] ? response['message'] : 'Row updated successfully');
                _this.isLoading = false;
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
                _this.isLoading = false;
            }
        }, function (err) {
            _this.toastr.error(err['message'] ? err['message'] : 'Something went wrong...', 'Error!');
            _this.isLoading = false;
        });
    };
    MtFreightComponent.prototype.returnFormateDate = function (data) {
        var formatted = new Date(data), mnth = ("0" + (formatted.getMonth() + 1)).slice(-2), day = ("0" + formatted.getDate()).slice(-2);
        return [day, mnth, formatted.getFullYear()].join("/");
    };
    MtFreightComponent.prototype.updateExpiryDateAtRow = function (row, event, rowIndex) {
        var s = __assign({}, row);
        if (event.target.value) {
            console.log(event.target.value);
            var index = this.mtFreightList.findIndex(function (item) { return item.id === s.id; });
            this.mtFreightList[index]['expiryDateString'] = this.returnFormateDate(event.target.value);
            var splittedData = this.mtFreightList[index]['expiryDateString'].split("/");
            var createNewDate = splittedData[1] + "/" + splittedData[0] + "/" + splittedData[2];
            this.mtFreightList[index]['selectedExpiryDate'] = new Date(createNewDate).toISOString();
            // this.mtFreightList[index].expiryDateString = s.selectedExpiryDate ? moment(new Date(s.selectedExpiryDate)).format("DD/MM/YYYY") : null;
            this.mtFreightList[index].isUpdateExpiryDate = true;
            this.mtFreightList[index].showSaveButton = true;
        }
        this.mtFreightList = this.mtFreightList.slice();
        console.log("row", row);
        console.log("list", this.mtFreightList);
    };
    MtFreightComponent.prototype.showSaveButton = function (event, row) {
        if (event.target.value) {
            row.showSaveButton = true;
        }
    };
    MtFreightComponent.prototype.formatEffectiveDate = function (effective) {
        var gettheDate = this.trimDate(effective);
        var splittedData = gettheDate.split("-");
        var createNewDate = splittedData[1] + "/" + splittedData[0] + "/" + splittedData[2];
        // Formatted new key for autopopulation of date for datepicker
        return new Date(createNewDate).toISOString();
    };
    MtFreightComponent.prototype.confirmDeleteAction = function (row) {
        this.selectedRow = __assign({}, row);
        $("#confirmDelete").modal('show');
    };
    MtFreightComponent.prototype.showIntegrationMessage = function (rowdata) {
        this.remarks = rowdata.remarks;
        $('#integrationMsgModal').modal('show');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], MtFreightComponent.prototype, "table", void 0);
    MtFreightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mt-freight',
            template: __webpack_require__(/*! ./mt-freight.component.html */ "./src/app/masters/freight/mt-freight/mt-freight.component.html"),
            styles: [__webpack_require__(/*! ./mt-freight.component.scss */ "./src/app/masters/freight/mt-freight/mt-freight.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_7__["HelperServiceService"]])
    ], MtFreightComponent);
    return MtFreightComponent;
}());

//console.log("--------------- total list size " +  this.mtFreightList.length);
// console.log("---------------INITIAL LENGTH= " +this.mtFreightCheckedList.length);
// console.log("--------------- this.currentPageIndex " + this.currentPageIndex);
//         console.log("***** this.isCheckedAll IF this.minRecordIndex "+this.minRecordIndex)
//         console.log("***** this.isCheckedAll IF this.maxRecordIndex "+this.maxRecordIndex)
//else
// console.log("***** this.currentPageIndex "+this.currentPageIndex)
//console.log("***** this.isCheckedAll else this.minRecordIndex "+this.minRecordIndex)
//       console.log("***** this.isCheckedAll else this.maxRecordIndex "+this.maxRecordIndex)
// console.log("---------------" +this.mtFreightCheckedList.length);


/***/ }),

/***/ "./src/app/masters/freight/mt-freight/mt-freight.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/masters/freight/mt-freight/mt-freight.module.ts ***!
  \*****************************************************************/
/*! exports provided: MTFreightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MTFreightModule", function() { return MTFreightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mt_freight_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mt-freight.component */ "./src/app/masters/freight/mt-freight/mt-freight.component.ts");
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
    { path: '', component: _mt_freight_component__WEBPACK_IMPORTED_MODULE_2__["MtFreightComponent"] },
];
// const routes: Routes = [
//   { path: '', component: CreateFreightComponent,canActivate:[PlannerAuthGuardService]},
// ];
var MTFreightModule = /** @class */ (function () {
    function MTFreightModule() {
    }
    MTFreightModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [
                _mt_freight_component__WEBPACK_IMPORTED_MODULE_2__["MtFreightComponent"]
            ],
            entryComponents: [
                // FileUploadErrorsDialogComponent,
                _mt_freight_component__WEBPACK_IMPORTED_MODULE_2__["MtFreightComponent"]
            ],
        })
    ], MTFreightModule);
    return MTFreightModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-freight-mt-freight-mt-freight-module.js.map