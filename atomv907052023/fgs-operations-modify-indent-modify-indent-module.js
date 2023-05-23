(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fgs-operations-modify-indent-modify-indent-module"],{

/***/ "./src/app/fgs-operations/modify-indent/modify-indent.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/fgs-operations/modify-indent/modify-indent.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h4 class=\"manulal-plan-header\">\n    <b>Indents > Modify Indents </b>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refresh()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"Filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h4>\n  <div class=\"clearfix\"></div>\n  <!-- Create Plan by Manual Fields 1st row-->\n  <div class=\"manualplan-fields\" *ngIf=\"IsShow\">\n    <div class=\"col-md-12 row\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row tab-loadslip-fields\">\n          <div class=\"col-md-1 pr-0 pl-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formPicker\" placeholder=\"From Date\" [(ngModel)]=\"fromDate\"\n                  name=\"fromDate\" (dateChange)=\"addEvent('fromDate', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toPicker\" [min]=\"fromDate\" placeholder=\"To Date\"\n                  [(ngModel)]=\"toDate\" name=\"toDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toPicker [disabled]=\"!fromDate\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\" *ngIf=\"check_Role_DP_REP == userRoles.planner3\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event)\" autocomplete=\"off\"\n                [matAutocomplete]=\"sourceAutocomplete\" [(ngModel)]=\"sourceCode\" name=\"source\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Destination\" placeholder=\"Destination\"\n                  (keyup)=\"getfilterDestination($event)\" autocomplete=\"off\" [matAutocomplete]=\"destinationAutocomplete\"\n                  [(ngModel)]=\"destination\" name=\"destination\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #destinationAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\"\n                    (click)=\"setDestDescription(list.description)\"\n                    (onSelectionChange)=\"setDestDescription(list.valdescriptionue)\">\n                    <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination Description\" aria-label=\"State\"\n                  [matAutocomplete]=\"destDisAutocomplete\" [(ngModel)]=\"destinationDesc\" name=\"destination\"\n                  (keyup)=\"getUserDestinationList($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #destDisAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of descriptionList\" [value]=\"list.description\"\n                    (click)=\"setDestination(list.value)\" (onSelectionChange)=\"setDestination(list.value)\">\n                    <span>({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Truck/Container Type\" [(ngModel)]=\"truckType\" name=\"trcktype\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Transporter\" placeholder=\"Transporter\"\n                  (keyup)=\"getfilterTransporter($event,'SEARCH')\" autocomplete=\"off\"\n                  [matAutocomplete]=\"transporterAutocomplete\" [(ngModel)]=\"transporter\" name=\"transporter\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #transporterAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of transporterList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"indentId\" name=\"indentid\" placeholder=\"Indent Id\" oninput=\"this.value = this.value.toUpperCase()\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Category\" [(ngModel)]=\"materialGrp\" name=\"materialGrp\" multiple>\n                  <mat-option *ngFor=\"let category of categoryList\" [value]=\"category\">{{category}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Status\" [(ngModel)]=\"status\" name=\"status\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let data of statuses\" [value]=\"data.value\">{{data.key}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"indentSearch()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"clearfix\"></div>\n  <div class=\"datatable ngx-table-custom-scroll ngx-table-tr-custom-scroll\">\n    <ngx-datatable #table class='material' [rows]='indentData' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n      [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\" [scrollbarH]=\"true\"\n      [externalPaging]=\"true\" [offset]=\"page.offset\" (page)=\"datatablePageData($event)\" [summaryRow]=\"true\"\n      [summaryHeight]=\"'auto'\" [summaryPosition]=\"'bottom'\" [selected]=\"selected\" [selectionType]=\"'checkbox'\"\n      [selectAllRowsOnPage]=\"false\">\n      <ngx-datatable-column name=\"Source\" [width]=\"50\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"SouceLocation\"\n        [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.SouceLocation}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Disp Date\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"dispatchDate\"\n        [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.dispatchDate | customDateFormat | date:'dd-MMM-yyyy'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Dest\" [width]=\"60\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"destination\"\n        [frozenLeft]=\"true\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destination}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Dest Description\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"destDis\"\n        [frozenLeft]=\"freezeLeftValue\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destDis}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Truck/Cont Type\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"truckType\" [frozenLeft]=\"freezeLeftValue\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.truckType}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Transporter\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"transporter\"\n        [frozenLeft]=\"freezeLeftValue\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n          {{row.transporter}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Created Date\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"updateUser\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.insertDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Port Of Discharge\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"pod\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.pod}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Country Of Destination\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n        prop=\"destCountryName\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.destCountryName}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Indent Id\" [width]=\"170\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"indentId\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.indentId}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Frt\" [width]=\"40\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"isFreightAvailable\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.isFreightAvailable}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Cat\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"materailGrp\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.materailGrp}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Indented\" [summaryTemplate]=\"totalIndented\" [width]=\"70\" [resizeable]=\"false\"\n        [sortable]=\"false\" prop=\"indented\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n          <!-- Indents can't be modified If the status closed or Cancelled -->\n          <ng-container *ngIf=\"((row.status !== 'CANCELLED') && (row.status !== 'CLOSED'));else falseCase\">\n            <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-indented'] = true\"\n              *ngIf=\"!editing[rowIndex + '-indented']\">\n              <span class=\"edit-label\">{{row.indented}}\n              </span>\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <mat-form-field *ngIf=\"editing[rowIndex+ '-indented']\">\n              <input matInput [value]=\"row.indented\" (blur)=\"updateValue($event, 'indented', rowIndex)\">\n            </mat-form-field>\n          </ng-container>\n          <ng-template #falseCase>\n            {{row.indented}}\n          </ng-template>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Cancelled\" [summaryTemplate]=\"totalCancelled\" [width]=\"70\" [resizeable]=\"false\"\n        [sortable]=\"false\" prop=\"cancelled\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n          <!-- Indents can't be modified If the status closed or Cancelled -->\n          <ng-container *ngIf=\"((row.status !== 'CANCELLED') && (row.status !== 'CLOSED'));else falseCase\">\n            <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-cancelled'] = true\"\n              *ngIf=\"!editing[rowIndex + '-cancelled']\">\n              <span class=\"edit-label\">{{row.cancelled}}\n              </span>\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <mat-form-field *ngIf=\"editing[rowIndex+ '-cancelled']\">\n              <input matInput [value]=\"row.cancelled\" (blur)=\"updateValue($event, 'cancelled', rowIndex)\">\n            </mat-form-field>\n          </ng-container>\n          <ng-template #falseCase>\n            {{row.cancelled}}\n          </ng-template>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Net Indented\" [summaryTemplate]=\"totalNetIndented\" [width]=\"80\" [resizeable]=\"false\"\n        [sortable]=\"false\" prop=\"netRequested\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">{{row.netRequested}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Trans Confirmed\" [summaryTemplate]=\"totalConfirmed\" [width]=\"75\" [resizeable]=\"false\"\n        [sortable]=\"false\" prop=\"confirmed\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">{{row.confirmed}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Trans Declined\" [summaryTemplate]=\"totalDeclined\" [width]=\"70\" [resizeable]=\"false\"\n        [sortable]=\"false\" prop=\"declined\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">{{row.declined}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"To Be Confirmed\" [summaryTemplate]=\"totalToBeConfirmed\" [width]=\"75\"\n        [resizeable]=\"false\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.toBeConfirmed}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\" Reported\" [summaryTemplate]=\"totalReported\" [width]=\"80\" [resizeable]=\"false\"\n        [sortable]=\"false\" prop=\"reported\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.reported}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\" Rejected\" [summaryTemplate]=\"totalRejected\" [width]=\"80\" [resizeable]=\"false\"\n        [sortable]=\"false\" prop=\"rejected\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.rejected}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Net Balance\" [summaryTemplate]=\"totalNetBalTemplate\" [width]=\"70\" [resizeable]=\"false\"\n        [sortable]=\"true\" prop=\"netBalance\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.netBalance}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Indent Age (Days)\" [width]=\"75\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"indentAge\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.indentAge}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Status\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"status\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.status}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Comments\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"comments\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <span title={{row.comments}} [ngClass]=\"{'cursor-pointer':row.comments?.length>10}\"\n            (click)=\"showComments(row.comments,'comments')\">{{(row.comments?.length>10)?\n            (row.comments | slice:0:10)+'..':(row.comments)}}</span>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Action\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          <!-- Indents can't be modified If the status closed or Cancelled -->\n          <!-- <ng-container *ngIf=\"((row.status !== 'CLOSED') && (row.status !== 'CANCELLED'))\"> -->\n          <!-- Displaying Save button even after Indent is closed -->\n          <ng-container>\n            <button class=\"theme-small-button\" (click)=\"modifyIndent(row)\" matTooltip=\"Update\"\n              *ngIf=\"(row.status != 'CANCELLED')\">\n              <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n            </button>\n            <button class=\"theme-delete-button\" (click)=\"cancelIndent(row)\" matTooltip=\"Cancel Indent\"\n              *ngIf=\"((row.status !== 'CLOSED') && (row.status !== 'CANCELLED'))\">\n              <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-container>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <!-- added check boxes -->\n      <ngx-datatable-column [width]=\"50\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\"\n        [resizeable]=\"false\" [sortable]=\"false\">\n        <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\n          let-selectFn=\"selectFn\" let-row=\"row\" let-rowIndex=\"rowIndex\">\n          <input type=\"checkbox\" [checked]=\"allRowsSelected\"\n            (change)=\"selectFn(!allRowsSelected);onSelectAll($event)\" />\n        </ng-template>\n        <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\" let-row=\"row\"\n          let-rowIndex=\"rowIndex\" let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\n          <input type=\"checkbox\" [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event);onSelect($event,row)\" />\n        </ng-template>\n      </ngx-datatable-column>\n      <!-- Footer Template starts -->\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected |\n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n            [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n            (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n    </ngx-datatable>\n\n    <ng-template #totalIndented let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">\n            {{ totalIndentedCount }}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <!-- Cancelled Count -->\n    <ng-template #totalCancelled let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalCancelledCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalNetIndented let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalNetIndentCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalConfirmed let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalConfirmedCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalDeclined let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalDeclinedCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalToBeConfirmed let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalToBeConfirmedCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalReported let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalReportedCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalRejected let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalRejectedCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #totalNetBalTemplate let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ totalNetBalanceCount}}\n          </span>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n\n<!-- View Loadslips  for coorsponding shipment -->\n<div class=\"modal\" id=\"commentModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{commentHeader}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <p>{{commentMsg}}</p>\n      </div>\n      <!-- Modal footer -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/fgs-operations/modify-indent/modify-indent.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/fgs-operations/modify-indent/modify-indent.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".manualplan-fields {\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0px; }\n  .manualplan-fields p > i {\n    cursor: pointer; }\n  .manualplan-fields .col-md-3 {\n    padding: 0px 15px; }\n  .manualplan-fields .wid-12p {\n    flex: 0 0 12%;\n    max-width: 12%; }\n  .manualplan-fields .wid-13p {\n    flex: 0 0 13%;\n    max-width: 13%; }\n  .manualplan-fields .form-group {\n    margin-bottom: 0; }\n  .manualplan-fields .form-group .mat-form-field .mat-form-field-wrapper {\n      padding-bottom: 0.5em !important; }\n  .manualplan-fields label {\n    display: block; }\n  .margin-top-10 {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmdzLW9wZXJhdGlvbnMvbW9kaWZ5LWluZGVudC9DOlxcVXNlcnNcXEFudXJhZ1NhaW5pXFxEb3dubG9hZHNcXGF0b20tdWlfb3JpZ2luYWxfMjEwOTIwMjJcXGF0b20tdWkvc3JjXFxhcHBcXGZncy1vcGVyYXRpb25zXFxtb2RpZnktaW5kZW50XFxtb2RpZnktaW5kZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7RUFIaEI7SUFLUSxlQUFlLEVBQUE7RUFMdkI7SUFRUSxpQkFBaUIsRUFBQTtFQVJ6QjtJQVdRLGFBQWE7SUFDYixjQUFjLEVBQUE7RUFadEI7SUFlUSxhQUFhO0lBQ2IsY0FBYyxFQUFBO0VBaEJ0QjtJQW1CUSxnQkFBZ0IsRUFBQTtFQW5CeEI7TUFzQmdCLGdDQUFnQyxFQUFBO0VBdEJoRDtJQTJCUSxjQUFjLEVBQUE7RUFJdEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zncy1vcGVyYXRpb25zL21vZGlmeS1pbmRlbnQvbW9kaWZ5LWluZGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvbWl4aW5zJztcblxuXG4ubWFudWFscGxhbi1maWVsZHN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcCA+IGl7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmNvbC1tZC0ze1xuICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgICB9XG4gICAgLndpZC0xMnB7XG4gICAgICAgIGZsZXg6IDAgMCAxMiU7XG4gICAgICAgIG1heC13aWR0aDogMTIlO1xuICAgIH1cbiAgICAud2lkLTEzcHtcbiAgICAgICAgZmxleDogMCAwIDEzJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMyU7XG4gICAgfVxuICAgIC5mb3JtLWdyb3Vwe1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGFiZWx7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgXG59XG4ubWFyZ2luLXRvcC0xMHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/fgs-operations/modify-indent/modify-indent.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/fgs-operations/modify-indent/modify-indent.component.ts ***!
  \*************************************************************************/
/*! exports provided: ModifyIndentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyIndentComponent", function() { return ModifyIndentComponent; });
/* harmony import */ var _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/helper-service/helper-service.service */ "./src/app/services/helper-service/helper-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _public_date_adapters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/date.adapters */ "./src/app/public/date.adapters.ts");
/* harmony import */ var src_app_public_indent_cancel_confirmation_indent_cancel_confirmation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/public/indent-cancel-confirmation/indent-cancel-confirmation.component */ "./src/app/public/indent-cancel-confirmation/indent-cancel-confirmation.component.ts");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
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











var ModifyIndentComponent = /** @class */ (function () {
    function ModifyIndentComponent(service, toastr, helperService, dialog) {
        this.service = service;
        this.toastr = toastr;
        this.helperService = helperService;
        this.dialog = dialog;
        this.editing = {};
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
        this.IsShow = true;
        this.totalIndentedCount = 0;
        this.totalCancelledCount = 0;
        this.totalNetIndentCount = 0;
        this.totalConfirmedCount = 0;
        this.totalDeclinedCount = 0;
        this.totalToBeConfirmedCount = 0;
        this.totalReportedCount = 0;
        this.totalRejectedCount = 0;
        this.totalVIewIndentData = [];
        this.toBeConfirmedCount = 0;
        this.page = {
            limit: 10,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.createIndentSuccess = false;
        this.statuses = [];
        this.status = [];
        this.categoryList = [];
        this.truckList = [];
        this.selected = [];
        this.currentDate = this.helperService.getTodayDate();
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.fromDispatchDate = '';
        this.toDispatchDate = '';
        this.toDate = '';
        this.fromDate = '';
        this.totalNetBalanceCount = 0;
        this.freezeLeftValue = true;
    }
    ModifyIndentComponent.prototype.ngDoCheck = function () {
        var width = $(window).width();
        if (width < 1024) {
            this.freezeLeftValue = false;
        }
        else {
            this.freezeLeftValue = true;
        }
    };
    ModifyIndentComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "fgs-indents");
        this.statuses = src_app_constants__WEBPACK_IMPORTED_MODULE_8__["constants"].indent_Filter_status_list;
        this.userRoles = src_app_constants__WEBPACK_IMPORTED_MODULE_8__["constants"].roles;
        this.check_Role_DP_REP = this.service.checkRole();
        //for getting modify indent data
        var bodyData = {
            'fromDispatchDate': this.currentDate,
            'toDispatchDate': this.currentDate
        };
        this.fromDate = this.currentDateAsString;
        this.toDate = this.fromDate;
        this.getModifyIndentData(bodyData);
        //for getting category master data
        this.getCategoryMasterData();
        // for getting truck type master
        this.getTruckTypeMasterData();
    };
    //for getting modify indent data
    ModifyIndentComponent.prototype.getModifyIndentData = function (bodyData) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.viewSearchIndents, bodyData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.clearAllSum();
                _this.indentData = response['data'].indents;
                for (var _i = 0, _a = _this.indentData; _i < _a.length; _i++) {
                    var rowData = _a[_i];
                    if ((rowData.netRequested) < (rowData.confirmed + rowData.declined)) {
                        rowData['toBeConfirmed'] = 0;
                    }
                    else {
                        rowData['toBeConfirmed'] = (rowData.netRequested) - (rowData.confirmed + rowData.declined);
                    }
                }
                _this.indentData = _this.indentData.slice();
                _this.page.count = response['data'].total;
                _this.page.limit = response['data'].pageLength;
                _this.isLoading = false;
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "!Error");
                _this.isLoading = false;
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //for getting category master data
    ModifyIndentComponent.prototype.getCategoryMasterData = function () {
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
    // for getting truck type master
    ModifyIndentComponent.prototype.getTruckTypeMasterData = function () {
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
    //Show Filter 
    ModifyIndentComponent.prototype.showFilter = function () {
        this.IsShow = !this.IsShow;
    };
    //get filter destination result
    ModifyIndentComponent.prototype.getfilterDestination = function (event) {
        var _this = this;
        this.destinationDesc = '';
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                _this.destinationList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter Transporter details
    ModifyIndentComponent.prototype.getfilterTransporter = function (event, typeofFilter) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.transporterList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?transporter=' + filtervalue).subscribe(function (response) {
                if (typeofFilter == 'SEARCH') {
                    _this.transporterList = response['data'].searchResult;
                }
                else {
                    _this.DatatableTransporterList = response['data'].searchResult;
                }
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //filter material group
    ModifyIndentComponent.prototype.getfilterMaterialGrp = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.materialGrpList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.searchFilter + '?materialGrp=' + filtervalue).subscribe(function (response) {
                _this.materialGrpList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //clear the data
    ModifyIndentComponent.prototype.clearAll = function () {
        this.fromDate = '';
        this.toDate = '';
        this.destination = '';
        this.destinationList = [];
        this.truckType = [];
        this.transporter = '';
        this.transporterList = [];
        this.materialGrp = [];
        this.materialGrpList = [];
        this.indentId = '';
        this.status = [];
        this.source = '';
        this.destinationDesc = '';
    };
    //refersh
    ModifyIndentComponent.prototype.refresh = function () {
        this.table.offset = 0;
        this.clearAll();
        this.clearAllSum();
        this.defaultIndentCount();
        this.selected = [];
        var bodyData = {
            'fromDispatchDate': this.currentDate,
            'toDispatchDate': this.currentDate
        };
        this.fromDate = this.currentDateAsString;
        this.toDate = this.fromDate;
        this.getModifyIndentData(bodyData);
    };
    // Date Validation
    ModifyIndentComponent.prototype.forDateValidation = function () {
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
    //export excel data
    ModifyIndentComponent.prototype.export = function () {
        var _this = this;
        if (this.indentData.length > 0) {
            this.isLoading = true;
            this.forDateValidation();
            var data = {
                'fromDispatchDate': this.fromDispatchDate,
                'toDispatchDate': this.toDispatchDate,
                'destination': this.destination,
                'index': this.index,
                'indentID': this.indentId,
                'materialGrp': this.materialGrp,
                'transporter': this.transporter,
                'truckType': this.truckType,
                'pageLength': this.page.count,
                'status': this.status
            };
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.viewSearchIndents, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var newViewPlanData = response['data'].indents;
                    var excelRawData = newViewPlanData;
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        var toBeConfirmed = 0;
                        if ((excelRawData[i].netRequested) < (excelRawData[i].confirmed + excelRawData[i].declined)) {
                            toBeConfirmed = 0;
                        }
                        else {
                            toBeConfirmed = ((excelRawData[i].netRequested) - (excelRawData[i].confirmed + excelRawData[i].declined));
                        }
                        var data_1 = {
                            "Source": excelRawData[i].SouceLocation,
                            "Dispatch Date": _this.service.customDateFormat(excelRawData[i].dispatchDate),
                            "Destination": excelRawData[i].destination,
                            "Dest Description": excelRawData[i].destDis,
                            "Truck Type": excelRawData[i].truckType,
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
                            "To Be Confirmed": toBeConfirmed,
                            "Reported": excelRawData[i].reported,
                            "Rejected": excelRawData[i].rejected,
                            "Net Balance": excelRawData[i].netBalance,
                            "Indent Age (Days)": excelRawData[i].indentAge,
                            "Status": excelRawData[i].status,
                            "Comments": excelRawData[i].comments
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](workBook, 'modifyIndents.xlsx');
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
    ModifyIndentComponent.prototype.onSelect = function (event, row) {
        if (event.target.checked) {
            this.totalVIewIndentData.push(row);
        }
        else {
            var index = this.totalVIewIndentData.indexOf(row);
            this.totalVIewIndentData.splice(index, 1);
        }
        this.totalCancelledCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var cancelled = _a.cancelled;
            return sum + Number(cancelled);
        }, 0);
        this.totalConfirmedCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var confirmed = _a.confirmed;
            return sum + Number(confirmed);
        }, 0);
        this.totalDeclinedCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var declined = _a.declined;
            return sum + Number(declined);
        }, 0);
        this.totalIndentedCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var indented = _a.indented;
            return sum + Number(indented);
        }, 0);
        this.totalRejectedCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var rejected = _a.rejected;
            return sum + Number(rejected);
        }, 0);
        this.totalReportedCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var reported = _a.reported;
            return sum + Number(reported);
        }, 0);
        this.totalNetIndentCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var netRequested = _a.netRequested;
            return sum + Number(netRequested);
        }, 0);
        this.totalToBeConfirmedCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var toBeConfirmed = _a.toBeConfirmed;
            return sum + Number(toBeConfirmed);
        }, 0);
        this.totalNetBalanceCount = this.totalVIewIndentData.reduce(function (sum, _a) {
            var netBalance = _a.netBalance;
            return sum + Number(netBalance);
        }, 0);
        console.log('totalViewIndentData', this.totalVIewIndentData, this.totalVIewIndentData.length);
    };
    ModifyIndentComponent.prototype.defaultIndentCount = function () {
        this.totalIndentedCount = 0;
        this.totalCancelledCount = 0;
        this.totalConfirmedCount = 0;
        this.totalDeclinedCount = 0;
        this.totalRejectedCount = 0;
        this.totalReportedCount = 0;
        this.totalNetIndentCount = 0;
        this.totalToBeConfirmedCount = 0;
        this.totalNetBalanceCount = 0;
        this.totalVIewIndentData = [];
    };
    ModifyIndentComponent.prototype.clearAllSum = function () {
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
    ModifyIndentComponent.prototype.onSelectAll = function (event) {
        var _this = this;
        this.defaultIndentCount();
        this.indentData.forEach(function (data) {
            _this.onSelect(event, data);
        });
    };
    //show Comments in Modal
    ModifyIndentComponent.prototype.showComments = function (comments, type) {
        if (type == 'loadslip') {
            this.commentHeader = 'Loadslip Comments';
        }
        else {
            this.commentHeader = 'Comments';
        }
        this.commentMsg = comments;
        $('#commentModal').modal('show');
    };
    // datatables with server side pagination
    ModifyIndentComponent.prototype.datatablePageData = function (pageInfo) {
        this.forDateValidation();
        this.clearAllSum();
        this.defaultIndentCount();
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
            'status': this.status
        };
        this.getModifyIndentData(bodyData);
    };
    //Indent Search API
    ModifyIndentComponent.prototype.indentSearch = function () {
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
            'status': this.status
        };
        if (this.fromDate != '' && this.fromDate != null) {
            if (this.toDate != '' && this.toDate != null) {
                this.getModifyIndentData(bodyData);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.getModifyIndentData(bodyData);
        }
    };
    //Update values after Blur From input
    ModifyIndentComponent.prototype.updateValue = function (event, cell, rowIndex) {
        this.indentData[rowIndex][cell] = event.target.value;
        this.indentData = this.indentData.slice();
    };
    ModifyIndentComponent.prototype.modifyIndent = function (data) {
        this.openModifyIndentPopup(data, 'MODIFY');
    };
    //open Modify Indent popup
    ModifyIndentComponent.prototype.openModifyIndentPopup = function (modifybleData, typeofEvent) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_public_indent_cancel_confirmation_indent_cancel_confirmation_component__WEBPACK_IMPORTED_MODULE_7__["IndentCancelConfirmationComponent"], {
            width: '250px',
            data: { comments: modifybleData.comments, type: typeofEvent },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.comments = result;
            if (_this.comments != false) {
                _this.isLoading = true;
                var sendData = {
                    "indentId": modifybleData.indentId,
                    "indented": modifybleData.indented,
                    "cancelled": modifybleData.cancelled,
                    "status": modifybleData.status,
                    "comments": _this.comments,
                    "destDis": modifybleData.destDis,
                    "destCountryName": modifybleData.destCountryName
                };
                var modifybleIndex_1 = _this.indentData.findIndex(function (resp) { return resp.indentId == modifybleData.indentId; });
                _this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.ModifyIndent, sendData).subscribe(function (response) {
                    if (response['statusCode'] == 200) {
                        _this.clearAllSum();
                        // this.indentData[modifybleIndex] = response['data'];
                        // for (let data of this.indentData) {
                        //   // data['toBeConfirmed'] = (data.netRequested) - (data.confirmed + data.declined);
                        //   if ((data.netRequested) < (data.confirmed + data.declined)) {
                        //     data['toBeConfirmed'] = 0;
                        //   } else {
                        //     data['toBeConfirmed'] = (data.netRequested) - (data.confirmed + data.declined);
                        //   }
                        // }
                        var responseData = response['data'];
                        if ((responseData.netRequested) < (responseData.confirmed + responseData.declined)) {
                            responseData['toBeConfirmed'] = 0;
                        }
                        else {
                            responseData['toBeConfirmed'] = (responseData.netRequested) - (responseData.confirmed + responseData.declined);
                        }
                        _this.indentData[modifybleIndex_1] = responseData;
                        _this.indentData = _this.indentData.slice();
                        _this.selected = [];
                        _this.editing = {};
                        _this.totalVIewIndentData = [];
                        // Datable bottom Grid reset 
                        _this.totalIndentedCount = 0;
                        _this.totalCancelledCount = 0;
                        _this.totalNetIndentCount = 0;
                        _this.totalConfirmedCount = 0;
                        _this.totalDeclinedCount = 0;
                        _this.totalToBeConfirmedCount = 0;
                        _this.totalReportedCount = 0;
                        _this.totalRejectedCount = 0;
                        _this.totalNetBalanceCount = 0;
                        _this.isLoading = false;
                    }
                    else {
                        _this.isLoading = false;
                        _this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
                    }
                }, function (err) {
                    _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                    _this.isLoading = false;
                });
            }
        });
    };
    ModifyIndentComponent.prototype.addEvent = function (type, event) {
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
    //open Confirmation popup for Cancellation 
    ModifyIndentComponent.prototype.indentCancelConfirmationPopup = function (sendbleData, typeofEvent) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_public_indent_cancel_confirmation_indent_cancel_confirmation_component__WEBPACK_IMPORTED_MODULE_7__["IndentCancelConfirmationComponent"], {
            width: '250px',
            data: { comments: sendbleData.comments, type: typeofEvent },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.comments = result;
            // If Clicks on Yes (Cancel Indent )
            if (_this.comments != false) {
                _this.isLoading = true;
                var sendData = {
                    "id": sendbleData.id,
                    "indentId": sendbleData.indentId,
                    "dispatchDate": sendbleData.dispatchDate,
                    "source": sendbleData.source,
                    "destination": sendbleData.destination,
                    "truckType": sendbleData.truckType,
                    "transporter": sendbleData.transporter,
                    "materailGrp": sendbleData.materailGrp,
                    "indented": sendbleData.indented,
                    "comments": _this.comments,
                    "tte": sendbleData.tte,
                    "netRequested": sendbleData.netRequested,
                    "cancelled": sendbleData.cancelled,
                    "confirmed": sendbleData.confirmed,
                    "declined": sendbleData.declined,
                    "assigned": sendbleData.assigned,
                    "reported": sendbleData.reported,
                    "rejected": sendbleData.rejected,
                    "netPlaced": sendbleData.netPlaced,
                    "netBalance": sendbleData.netBalance,
                    "status": "CANCELLED",
                    "loadFactor": sendbleData.loadFactor,
                    "destDis": sendbleData.destDis,
                    "destCountryName": sendbleData.destCountryName
                };
                var modifybleIndex_2 = _this.indentData.findIndex(function (resp) { return resp.indentId == sendbleData.indentId; });
                _this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.ModifyIndent, sendData).subscribe(function (response) {
                    if (response['statusCode'] == 200) {
                        _this.clearAllSum();
                        var responseData = response['data'];
                        if ((responseData.netRequested) < (responseData.confirmed + responseData.declined)) {
                            responseData['toBeConfirmed'] = 0;
                        }
                        else {
                            responseData['toBeConfirmed'] = (responseData.netRequested) - (responseData.confirmed + responseData.declined);
                        }
                        _this.indentData[modifybleIndex_2] = responseData;
                        _this.indentData = _this.indentData.slice();
                        _this.editing = {};
                        _this.toastr.success(response['message']);
                        _this.isLoading = false;
                    }
                    else {
                        _this.isLoading = false;
                        _this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
                    }
                }, function (err) {
                    _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                    _this.isLoading = false;
                });
            }
        });
    };
    //cancel Indent 
    ModifyIndentComponent.prototype.cancelIndent = function (data) {
        this.indentCancelConfirmationPopup(data, 'FULLCANCEL');
    };
    ModifyIndentComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    ModifyIndentComponent.prototype.getUserDestinationList = function (event) {
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
    // Filter source location
    ModifyIndentComponent.prototype.getfilterSource = function (event) {
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
    //set value destination
    ModifyIndentComponent.prototype.setDestination = function (value) {
        //  this.destinationDesc = value;
        this.destination = value;
    };
    //set value to destination description
    ModifyIndentComponent.prototype.setDestDescription = function (value) {
        this.destinationDesc = value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"])
    ], ModifyIndentComponent.prototype, "table", void 0);
    ModifyIndentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modify-indent',
            template: __webpack_require__(/*! ./modify-indent.component.html */ "./src/app/fgs-operations/modify-indent/modify-indent.component.html"),
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _public_date_adapters__WEBPACK_IMPORTED_MODULE_6__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: _public_date_adapters__WEBPACK_IMPORTED_MODULE_6__["APP_DATE_FORMATS"]
                }
            ],
            styles: [__webpack_require__(/*! ./modify-indent.component.scss */ "./src/app/fgs-operations/modify-indent/modify-indent.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_0__["HelperServiceService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ModifyIndentComponent);
    return ModifyIndentComponent;
}());



/***/ }),

/***/ "./src/app/fgs-operations/modify-indent/modify-indent.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/fgs-operations/modify-indent/modify-indent.module.ts ***!
  \**********************************************************************/
/*! exports provided: modifyIndentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyIndentModule", function() { return modifyIndentModule; });
/* harmony import */ var _public_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../public/share-module/share-module.module */ "./src/app/public/share-module/share-module.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modify_indent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modify-indent.component */ "./src/app/fgs-operations/modify-indent/modify-indent.component.ts");
/* harmony import */ var src_app_public_indent_cancel_confirmation_indent_cancel_confirmation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/public/indent-cancel-confirmation/indent-cancel-confirmation.component */ "./src/app/public/indent-cancel-confirmation/indent-cancel-confirmation.component.ts");
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { CustomDateFormat } from 'src/app/custom-date-pipe';
var routes = [
    { path: '', component: _modify_indent_component__WEBPACK_IMPORTED_MODULE_8__["ModifyIndentComponent"] },
];
var modifyIndentModule = /** @class */ (function () {
    function modifyIndentModule() {
    }
    modifyIndentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _public_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_0__["ShareModuleModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_10__["CustomDatePipeModule"]
            ],
            declarations: [
                _modify_indent_component__WEBPACK_IMPORTED_MODULE_8__["ModifyIndentComponent"],
            ],
            entryComponents: [
                _modify_indent_component__WEBPACK_IMPORTED_MODULE_8__["ModifyIndentComponent"],
                src_app_public_indent_cancel_confirmation_indent_cancel_confirmation_component__WEBPACK_IMPORTED_MODULE_9__["IndentCancelConfirmationComponent"]
            ]
        })
    ], modifyIndentModule);
    return modifyIndentModule;
}());



/***/ })

}]);
//# sourceMappingURL=fgs-operations-modify-indent-modify-indent-module.js.map