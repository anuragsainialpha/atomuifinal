(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["export-export-create-load-slip-export-create-load-slip-module"],{

/***/ "./src/app/export/export-create-load-slip/export-create-load-slip.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/export/export-create-load-slip/export-create-load-slip.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\"> Loadslip >\n    <span>{{title}}\n      <span class=\"pull-right refresh-span\" *ngIf=\"(this.loadslipID && !this.viewType)\">\n        <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export Download\">\n          <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n        </button>\n      </span>\n    </span>\n  </h6>\n  <div class=\"clearfix\"></div>\n  <div class=\"loadslip-fields tab-loadslip-fields\">\n    <div class=\"row margin-bottom-5\">\n      <div class=\"col-md-7\">\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n            <div class='inputbordered'>\n              <div>Source</div>\n              <div>\n                <b>{{userSource}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pd-0\">\n            <div class=\"form-group inputbordered\">\n              <mat-form-field appearance=\"standard\" *ngIf=\"!checkMultiStop()\">\n                <mat-select placeholder=\"Container\" [(ngModel)]=\"containerNum\" name=\"containerNum\"\n                  (ngModelChange)=\"getLoadSlipUtilazations($event)\">\n                  <mat-option *ngFor=\"let truckType of truckTypes;let i=index\" [value]=\"truckType.CONTAINER_NUM\">\n                    {{truckType.CONTAINER_NUM | uppercase}} <span *ngIf=\"truckType.ITEM_CATEGORY\">&nbsp; - &nbsp;\n                      ({{truckType.ITEM_CATEGORY}})</span>\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <div *ngIf=\"checkMultiStop()\">\n                <div>Container</div>\n                <div>\n                  <b>{{containerNum || '--'}}</b>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"form-group inputbordered\">\n              <div>Container Type</div>\n              <div>\n                <b>{{truckT?truckT:'--' }}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2  pd-0\">\n            <div class=\"form-group inputbordered\">\n              <div>Transporter</div>\n              <div>\n                <b>{{transporter?transporter:'--' }}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"form-group inputbordered\">\n              <div>Destination</div>\n              <div>\n                <b>{{destination?destination:'--' | uppercase}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <div class=\"inputbordered\">\n              <div>LS Category</div>\n              <div>\n                <b>{{loadslipCategory || '--'}}</b>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-5\">\n        <div class=\"row\">\n          <div class=\"col-md-2 pd-0\">\n            <div class=\"form-group inputbordered\">\n              <div>Dest Desc</div>\n              <div [title]=\"description\" [ngClass]=\"{'cursor-pointer':description?.length>8}\">\n                <b>{{description ? (description?.length>8) ? (description | slice:0:8)+'..':(description) : '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group inputbordered\">\n              <mat-form-field appearance=\"standard\">\n                <mat-select placeholder=\"Ship To\" [(ngModel)]=\"ShipTo\" name=\"shito\">\n                  <mat-option *ngFor=\"let shipPlace of shiptoPlaceList;let i=index\" [value]=\"shipPlace\">\n                    {{shipPlace}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-3 pl-0\">\n            <div class=\"form-group inputbordered\">\n              <mat-form-field appearance=\"standard\" *ngIf=\"!checkMultiStop()\">\n                <!-- <mat-select [(ngModel)]=\"actualTruckType\" name=\"actualTruckType\" placeholder=\"Actual Truck Type\"\n                  (selectionChange)=\"getLoadSlipUtilazations(containerNum)\">\n                  <mat-option selected>None</mat-option>\n                  <mat-option *ngFor=\"let list of actualTruckTypeList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-select> -->\n                <mat-select placeholder=\"Actual Truck Type\" [(ngModel)]=\"actualTruckType\" name=\"actualTruckType\"\n                  (selectionChange)=\"getLoadSlipUtilazations(containerNum)\">\n                  <mat-option selected>None</mat-option>\n                  <mat-optgroup *ngFor=\"let group of truckTypeClass\" [label]=\"group.name\" [disabled]=\"group.disabled\">\n                    <mat-option *ngFor=\"let type of group.mtTruckTypeInfos\" [value]=\"type.value\"\n                      style=\"font-weight: normal\">\n                      {{type.value}}\n                    </mat-option>\n                  </mat-optgroup>\n                </mat-select>\n              </mat-form-field>\n              <div *ngIf=\"checkMultiStop()\">\n                <div>Actual Truck Type</div>\n                <div>\n                  <b>{{actualTruckType || '--'}}</b>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <div class=\"form-group inputbordered\">\n              <mat-form-field appearance=\"standard\" *ngIf=\"!checkMultiStop()\">\n                <mat-select placeholder=\"Variant 1\" [(ngModel)]=\"variant_ONE\" name=\"variant_ONE\"\n                  (selectionChange)=\"getLoadSlipUtilazations(containerNum)\">\n                  <mat-option selected>None</mat-option>\n                  <mat-option *ngFor=\"let item of variant_one_List\" [value]=\"item\">\n                    {{item | uppercase}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <div *ngIf=\"checkMultiStop()\">\n                <div>Variant 1</div>\n                <div>\n                  <b>{{variant_ONE || '--'}}</b>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <div class=\"form-group inputbordered\">\n              <div>Frt Avail</div>\n              <div>\n                <b>{{ freightAvailableflag || '--'}}</b>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"row margin-bottom-5\">\n      <div class=\"col-md-2\">\n        <div class=\"row\">\n          <div class=\"col-md-7 pr-0\">\n            <div class=\"bordered\">\n              <div>Truck No</div>\n              <div>\n                <b>{{truckType || '--'}}\n                  <!-- <span *ngIf=\"indentCategory\">&nbsp; - &nbsp;({{indentCategory}})</span> -->\n                </b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class='bordered'>\n              <div>TTE Qty </div>\n              <div><b>{{totalTTE ? (totalTTE | number : '1.2-2') : '--' }}</b></div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-md-3 pd-0\">\n        <div class=\"bordered-box\">\n          <div class=\"row text-center\" >\n              <div class=\"col-md-3  bordered-box-left-div\">\n                  <div>\n                      Wt (Kg)\n                  </div>\n                  <div >\n                    <b>{{totalWeight?(totalWeight | number : '1.2-2'):0}}</b>\n                  </div>\n                </div>\n            <div class=\"col-md-3 text-center bordered-box-left-div\">\n              <div>\n                TTE Util\n              </div>\n              <div [ngClass]=\"(totalTTESeletecd > 100)?'text-danger':'color-green'\">\n                <b>{{totalTTESeletecd?(totalTTESeletecd | number : '1.2-2'):0 }}%</b>\n              </div>\n            </div>\n            \n            <div class=\"col-md-3  bordered-box-left-div\">\n              <div>\n                Wt Util\n              </div>\n              <div [ngClass]=\"(totalMaterialWeight > 100)?'text-danger':'color-green'\">\n                <b>{{totalMaterialWeight?(totalMaterialWeight | number : '1.2-2'):0}}%</b>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div>\n                Vol Util\n              </div>\n              <div [ngClass]=\"(totalTruckVolume > 100)?'text-danger':'color-green'\">\n                <b>{{totalTruckVolume?(totalTruckVolume | number : '1.2-2'):0}}%</b>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-5\">\n        <!-- <div class=\"row bg-theme\">\n          <div class=\"col-md-2 col-wid-20p\">\n            <div>Tyres</div>\n            <div>\n              {{totalTyres?totalTyres:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-20p\">\n            <div>Tubes</div>\n            <div>\n              {{totalTubes?totalTubes:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-20p\">\n            <div>Flaps</div>\n            <div>\n              {{totalFlaps?totalFlaps:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-20p\">\n            <div> Valves</div>\n            <div>\n              {{totalValves?totalValves:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-20p\">\n            <div>Pctr</div>\n            <div>{{totalPctr?totalPctr:0}} </div>\n          </div>\n        </div> -->\n        <div class=\"row bg-theme export-padding h-100\">\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Tyres</div>\n            <div>\n              {{totalTyres?totalTyres:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Tubes</div>\n            <div>\n              {{totalTubes?totalTubes:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Flaps</div>\n            <div>\n              {{totalFlaps?totalFlaps:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div> Valves</div>\n            <div>\n              {{totalValves?totalValves:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Pctr</div>\n            <div>{{totalPctr?totalPctr:0}} </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Others</div>\n            <div>{{totalOthersCount?totalOthersCount:0}} </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Tot Qty</div>\n            <div>{{totalQuantity?totalQuantity:0}} </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2 flow-btns font-11 MD-MP\">\n        <button mat-raised-button mat-raised-button color=\"primary\" class=\"btm-action-btn tab-mb-10\" (click)=\"onOpenModal()\"\n          data-target=\"#myModal\">{{invoiceBtn}} </button>\n        <button mat-raised-button color=\"primary\" [disabled]=\"!isDraftMode\" (click)=\"shareTruckDestinationList()\">Share\n          Truck(MP)</button>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"row\">\n          <div class=\"col-md-6 \">\n            <div class='bordered'>\n              <div>Shipment No</div>\n              <div>\n                <b>{{shipmentNumber || '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 pd-0\">\n            <div class='bordered'>\n              <div>Load Slip No </div>\n              <div><b>{{loadslipID || '--'}}</b></div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-1 pr-0\">\n        <div class=\"form-group bordered\">\n          <div>Cntry of Dest</div>\n          <div>\n            <!-- <b class=\"font-11\">{{countryOfDestination?countryOfDestination:'--' }}</b> -->\n            <div [title]=\"countryOfDestination\" [ngClass]=\"{'cursor-pointer':countryOfDestination?.length>8}\">\n              <b>{{countryOfDestination ? (((countryOfDestination?.length>8)? (countryOfDestination | slice:0:8)+'..':(countryOfDestination)) | uppercase) : '--'}}</b>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"row\">\n          <div class=\"col-md-4 pr-0\">\n            <div class='bordered'>\n              <div>Indt Cat </div>\n              <div [title]=\"indentCategory\" [ngClass]=\"{'cursor-pointer':indentCategory?.length>11}\">\n                <b>{{indentCategory ? (((indentCategory?.length>11)? (indentCategory | slice:0:11)+'..':(indentCategory)) | uppercase) : '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 pr-0\">\n            <div class='bordered'>\n              <div>City</div>\n              <div>\n                <!-- <b>{{city?city:'--'}}</b> -->\n                <div [title]=\"city\" [ngClass]=\"{'cursor-pointer':city?.length>8}\">\n                  <b>{{city ? (((city?.length>8)? (city | slice:0:8)+'..':(city)) | uppercase) : '--'}}</b>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 \">\n            <div class=\"form-group inputbordered dropdownSeq\">\n              <mat-form-field appearance=\"standard\">\n                <mat-select placeholder=\"Drop Seq\" [(ngModel)]=\"dropSeq\" name=\"dropSeq\">\n                  <mat-option *ngFor=\"let item of dropSeqList;let i=index\" [value]=\"item\">\n                    {{item}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-md-1 pl-0 flow-btns tab-flow-btns exportLoadBtns\">\n        <!-- [disabled]=\"releasedDate != null\" -->\n        <button *ngIf=\"(bayArrivedDate == null)\" mat-raised-button (click)=\"eventCall(loadslipID,'ARRIVED_BAY')\"\n          class=\"mat-default\" >Arrived\n          Bay</button>\n        <button *ngIf=\"(bayArrivedDate != null)\" class=\"greenButton\">Arrived Bay <b>: {{bay}}</b> <span>{{bayArrivedDate\n            | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n      </div>\n      <div class=\"col-md-1 pl-0 flow-btns tab-flow-btns exportLoadBtns\">\n        <button mat-raised-button color=\"default\" (click)=\"saveAsDraft_Print_trigger('PRINT')\" class=\"mat-default\"\n          *ngIf=\"(lsPrintDate == null) && (releasedDate == null)\">Print\n          LS</button>\n        <button (click)=\"saveAsDraft_Print_trigger('PRINT')\" class=\"greenButton\"\n          *ngIf=\"(lsPrintDate != null) && (releasedDate == null)\">Print\n          LS<span> ({{(lsPrintDate) | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}})</span></button>\n        <button (click)=\"downloadLoadslip()\" class=\"greenButton\" *ngIf=\"(releasedDate != null)\">Print\n          Pdf<span> ({{(lsPrintDate) | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}})</span></button>\n      </div>\n      <div class=\"col-md-1 flow-btns tab-flow-btns exportLoadBtns\">\n        <button mat-raised-button color=\"default\" *ngIf=\"(loadingStartDate == null)\"\n          (click)=\"eventCall(loadslipID,'LOADING_START')\" >Loading\n          Start</button>\n        <button *ngIf=\"(loadingStartDate != null)\" class=\"greenButton\">Loading Start <span>{{loadingStartDate |\n            customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n      </div>\n      <div class=\"col-md-1 flow-btns tab-flow-btns  tab-pl-15 exportLoadBtns\">\n        <button mat-raised-button color=\"default\" *ngIf=\"(loadingEndDate == null)\"\n          (click)=\"eventCall(loadslipID,'LOADING_END')\">Loading\n          End</button>\n        <button *ngIf=\"(loadingEndDate != null)\" class=\"greenButton\">Loading End <span>{{loadingEndDate |\n            customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n      </div>\n      <div class=\"col-md-1 flow-btns tab-flow-btns tab-pl-15 exportLoadBtns\">\n        <button mat-raised-button color=\"default\" [disabled]=\"(IS_RELEASE) || (loadSlipData.length == 0)\"\n          *ngIf=\"(releasedDate == null)\" (click)=\"eventCall(loadslipID,'RELEASED')\">Release</button>\n        <button *ngIf=\"(releasedDate != null)\" class=\"greenButton\">Release <span>{{releasedDate | customDateFormat |\n            date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mb-3\">\n    <ngx-datatable class='material' [rows]='loadSlipData' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n       [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [summaryRow]=\"true\" [summaryHeight]=\"'auto'\"\n      [summaryPosition]=\"'bottom'\" [scrollbarH]=\"true\">\n      <ngx-datatable-column name=\"Invoice Number\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"INVOICE_NUMBER\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.INVOICE_NUMBER || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Material Code\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"ITEM_ID\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.ITEM_ID || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Material Description\" [width]=\"250\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"ITEM_DESCRIPTION\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.ITEM_DESCRIPTION || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Cat\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"ITEM_CATEGORY\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.ITEM_CATEGORY || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Qty\" [width]=\"40\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"QTY\"\n        [summaryFunc]=\"qtySumm\" [summaryTemplate]=\"qtSummaryCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.QTY || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Weight\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"WEIGHT\"\n        [summaryFunc]=\"weightSumm\" [summaryTemplate]=\"weSummaryCell\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.WEIGHT || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n    </ngx-datatable>\n    <ng-template #weSummaryCell let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\" style=\"padding-left:0px !important\">\n          <span class=\"chip-content\">{{ weightSumm?(weightSumm | number :\n            '1.2-2'):0}} Kg/{{metricTon?(metricTon | number :'1.2-2'):0}} MT</span>\n          <!-- <span class=\"chip-content\">Total Qty : {{ qtySumm }}</span> -->\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #qtSummaryCell let-row=\"row\" let-value=\"value\">\n      <div class=\"name-container\">\n        <div class=\"chip\">\n          <span class=\"chip-content\">{{ qtySumm?qtySumm:0}}</span>\n          <!-- <span class=\"chip-content\">Total Qty : {{ qtySumm }}</span> -->\n        </div>\n      </div>\n    </ng-template>\n    <!-- <ng-template>\n      <div style=\"padding: 5px 10px\">\n        <div class=\"pull-right\">\n          <strong>Total Qty</strong>: {{totalTyres?totalTyres:0}}\n        </div>\n      </div>\n    </ng-template> -->\n  </div>\n\n  <div align=\"center\" *ngIf=\"truckType\">\n    <button mat-stroked-button color=\"primary\" class=\"mr-3\" (click)=\"cancelLoadslipCreation()\"\n      *ngIf=\"!(loadslipID)\">Cancel</button>\n    <button mat-raised-button color=\"primary\" class=\"btm-action-btn\" (click)=\"saveAsDraft_Print_trigger('DRAFT')\"\n      *ngIf=\"isDraftMode\">Save\n      as Draft</button>\n    <!-- <button (click)=\"show(12345,'DRAFT')\"> show</button> -->\n  </div>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\" style=\"width: 100%\">\n      <div class=\"modal-header \">\n        <h4 class=\"modal-title\" style=\"font-size: 16px\">Invoice\n          <button type=\"button\" class=\"close pull-right\" data-dismiss=\"modal\">&times;</button>\n        </h4>\n      </div>\n      <div class=\"modal-body\" style=\"height: 250px;overflow-y: auto\">\n        <div class=\"table-responsive\">\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table\">\n            <!-- Checkbox Column -->\n            <ng-container matColumnDef=\"select\">\n              <th mat-header-cell *matHeaderCellDef>\n                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                  [checked]=\"selection.hasValue() && isAllSelected()\"\n                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                </mat-checkbox>\n              </th>\n              <td mat-cell *matCellDef=\"let row\">\n                <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n                  [checked]=\"selection.isSelected(row)\">\n                </mat-checkbox>\n              </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"invoiceNumber\">\n              <th mat-header-cell *matHeaderCellDef> Invoice No </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.invoiceNumber}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"deliveryNumber\">\n              <th mat-header-cell *matHeaderCellDef> Delivery No </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.deliveryNumber}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"containerNum\">\n              <th mat-header-cell *matHeaderCellDef> Container No </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.containerNum}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"destLoc\">\n              <th mat-header-cell *matHeaderCellDef> Destination </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.destLoc}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"invoiceDate\">\n              <th mat-header-cell *matHeaderCellDef> Invoice Date </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.invoiceDate}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"billTo\">\n              <th mat-header-cell *matHeaderCellDef> Bill To </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.billTo}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"billToName\">\n              <th mat-header-cell *matHeaderCellDef> Bill To Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.billToName}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"shipTo\">\n              <th mat-header-cell *matHeaderCellDef> Ship To </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.shipTo}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"shipToName\">\n              <th mat-header-cell *matHeaderCellDef> Ship To Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.shipToName}} </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </tr>\n          </table>\n        </div>\n      </div>\n      <div class=\"modal-footer\" *ngIf=\"isDraftMode\">\n        <button mat-raised-button color=\"primary\" (click)=\"confirmInvoiceForExport()\"\n          data-dismiss=\"modal\">Confirm</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- modal for share truck -->\n<div class=\"modal\" id=\"shareTruckModal\" data-keyboard=\"false\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Select Pickup Location</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <mat-form-field appearance=\"standard\">\n          <mat-select [(ngModel)]=\"shareTruckLocation\" name=\"shareTruckLocation\" placeholder=\"Select Pickup Location\">\n            <mat-option *ngFor=\"let sharebledestination of shareTrcukDestinations\" [value]=\"sharebledestination\">\n              {{sharebledestination}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"shareTruck()\">Confirm</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/export/export-create-load-slip/export-create-load-slip.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/export/export-create-load-slip/export-create-load-slip.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ExportCreateLoadSlipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportCreateLoadSlipComponent", function() { return ExportCreateLoadSlipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_public_loadslip_cancel_popup_loadslip_cancel_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/public/loadslip-cancel-popup/loadslip-cancel-popup.component */ "./src/app/public/loadslip-cancel-popup/loadslip-cancel-popup.component.ts");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var src_app_public_loadslip_success_dialog_loadslip_success_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/public/loadslip-success-dialog/loadslip-success-dialog.component */ "./src/app/public/loadslip-success-dialog/loadslip-success-dialog.component.ts");
/* harmony import */ var src_app_public_create_loadslips_error_popup_create_loadslips_error_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/public/create-loadslips-error-popup/create-loadslips-error-popup.component */ "./src/app/public/create-loadslips-error-popup/create-loadslips-error-popup.component.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ExportCreateLoadSlipComponent = /** @class */ (function () {
    function ExportCreateLoadSlipComponent(service, router, ActivatedRoute, toastr, dialog) {
        this.service = service;
        this.router = router;
        this.ActivatedRoute = ActivatedRoute;
        this.toastr = toastr;
        this.dialog = dialog;
        this.isLoading = false;
        this.page = {
            limit: 10,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.limitOptions = [
            { key: '10', value: 10 },
            { key: '20', value: 20 },
            { key: '30', value: 30 },
            { key: '50', value: 50 },
            { key: '100', value: 100 }
        ];
        this.loadSlipData = [];
        this.source = '';
        this.destination = '';
        this.truckType = '';
        this.minDate = new Date();
        this.editing = {};
        this.createLoadSlipSuccess = false;
        this.truckTypes = [];
        this.isLoadslipIdAvaliable = false;
        this.IS_RELEASE = true;
        this.displayedColumns = ['select', 'invoiceNumber', 'deliveryNumber', 'containerNum', 'destLoc', 'invoiceDate', 'billTo', 'billToName', 'shipTo', 'shipToName'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](true, []);
        this.invoiceDataList = [];
        this.invoiceData = [];
        this.isConfirmed = false;
        this.selectedInvoiceListItems = [];
        this.finalInvoiceList = [];
        this.dropSeqList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.loadslipTteUtil = 0;
        this.loadslipWtUtil = 0;
        this.loadslipVolUtil = 0;
        this.variant_one_List = [];
        this.variant_two_List = [];
        this.shareTrcukDestinations = [];
        this.isDraftMode = true;
        this.weightSumm = 0;
        this.qtySumm = 0;
        this.metricTon = 0;
        this.IsUpdate = false;
        this.totalQuantity = 0;
    }
    ExportCreateLoadSlipComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "load-slip");
        //  this.isLoading = true; 
        this.userSource = localStorage.getItem("sourceID");
        this.loadslipID = this.ActivatedRoute.snapshot.params['loadslipId'];
        this.viewType = this.ActivatedRoute.snapshot.params['viewType'];
        this.route_shipmentNumber = this.ActivatedRoute.snapshot.queryParams['shipmentNumber'];
        this.shipmentNumber = this.route_shipmentNumber;
        this.roles = src_app_constants__WEBPACK_IMPORTED_MODULE_6__["constants"].roles;
        this.pageSize = 20;
        this.page.limit = 20;
        if (!this.loadslipID) {
            this.title = 'Create Load Slip For Export';
            this.invoiceBtn = 'Add Invoice';
        }
        else if (this.loadslipID && !this.viewType) {
            this.title = 'Drafted Load Slip For Export';
            this.invoiceBtn = 'Edit Invoice';
        }
        else if (this.loadslipID && this.viewType) {
            this.title = 'View Load Slip For Export';
            this.invoiceBtn = 'View Invoice';
        }
        if (this.loadslipID) {
            this.getLoadSlipsDetailsById();
        }
        else if (this.route_shipmentNumber) {
            this.getLoadSlipUtilizationsForExportShareTuck(this.route_shipmentNumber);
            // this.getGateInContainer();
        }
        else {
            this.getGateInContainer();
        }
        // get variants 
        this.getvariants();
    };
    ExportCreateLoadSlipComponent.prototype.getLoadSlipUtilizationsForExportShareTuck = function (shipmentNumber) {
        var _this = this;
        this.isLoading = true;
        var data = {
            // 'truckNumber': this.truckNumber,
            // 'trucktype': this.truckType,
            'shipmentId': shipmentNumber,
            // 'destLoc': this.destination,
            // 'loadSlipId': this.loadslipID,
            'type': 'FGS_EXP',
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLoadSlipUtlizationsForExport, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var truckRepsonseData = response['data'];
                // this.loadSlipData = [];
                _this.loadslipUtilizationData = truckRepsonseData['loadSlipUtilizationDto'];
                _this.totalTTESeletecd = _this.loadslipUtilizationData.shipmentTotalTTEUtil;
                _this.totalMaterialWeight = _this.loadslipUtilizationData.shipmentTotalWtUtil;
                _this.totalTruckVolume = _this.loadslipUtilizationData.shipmentTotalVolUtil;
                _this.multistopTruckNumber = _this.loadslipUtilizationData.truckNumber;
                _this.multistopTruckType = _this.loadslipUtilizationData.truckType;
                _this.actualTruckType = _this.loadslipUtilizationData.actualTruckType;
                _this.variant_ONE = _this.loadslipUtilizationData.variant1;
                _this.destination = _this.loadslipUtilizationData.destLoc;
                _this.truckType = _this.loadslipUtilizationData.truckNumber;
                _this.containerNum = _this.loadslipUtilizationData.containerNum;
                _this.invoiceDataList = truckRepsonseData['delInvHeaders'];
                _this.truckT = _this.loadslipUtilizationData.truckType;
                _this.transporter = _this.loadslipUtilizationData.servprov;
                _this.countryOfDestination = _this.loadslipUtilizationData.countryName;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.invoiceDataList);
                // setTimeout(() => {
                _this.isLoading = false;
                // }, 500);
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // Check multi stop 
    ExportCreateLoadSlipComponent.prototype.checkMultiStop = function () {
        //check multi stop on based on the shipmentNumber,TruckNumber,Typeof truck if we get from the Route Params
        // We can the Boolean of MULTI stop 
        if ((this.route_shipmentNumber) || (this.IS_MULTI_STOP)) {
            return true;
        }
        else {
            return false;
        }
    };
    // loadslip same trcuk navigation
    ExportCreateLoadSlipComponent.prototype.loadslipOnSameTruckNavigation = function () {
        if (this.shipmentNumber) {
            this.router.navigate(['/fgs/create-load-slip-for-export'], { queryParams: { shipmentNumber: this.shipmentNumber } });
        }
        else {
            this.toastr.error('Please Create a Loadslip');
        }
    };
    //share Truck destination list
    ExportCreateLoadSlipComponent.prototype.shareTruckDestinationList = function () {
        var _this = this;
        if (this.loadslipID) {
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.shareTruckDestions).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    _this.shareTrcukDestinations = response['data'];
                    if (_this.shareTrcukDestinations) {
                        $('#shareTruckModal').modal('show');
                    }
                    _this.isLoading = false;
                }
                else {
                    _this.isLoading = false;
                    _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error");
                }
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
        else {
            this.toastr.warning("Please create a Loadslip", "!! Warning");
        }
    };
    //share truck Server API
    ExportCreateLoadSlipComponent.prototype.shareTruck = function () {
        var _this = this;
        this.isLoading = true;
        if (this.shareTruckLocation) {
            var data = {};
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.shareTruck + "?shipmentId=" + this.shipmentNumber + '&pickupLoc=' + this.shareTruckLocation, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    _this.toastr.success(response['message']);
                    // this.shareTrcukDestinations = response['data'];
                    _this.shareTrcukDestinations = [];
                    $('#shareTruckModal').modal('hide');
                    _this.isLoading = false;
                }
                else {
                    _this.isLoading = false;
                    _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error");
                }
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
        else {
            this.toastr.warning("Please select a pickup location...", 'Warning!');
            this.isLoading = false;
        }
    };
    // get master variants data
    ExportCreateLoadSlipComponent.prototype.getvariants = function () {
        var _this = this;
        //this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getVariants).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var responseData = response['data'];
                _this.variant_one_List = responseData.variant1;
                _this.variant_two_List = responseData.variant2;
                //this.isLoading = false;
                // get the list of actual trucktypes
                // this.getActualTruckTypeList();
            }
            else {
                // this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error");
            }
        });
    };
    // get the list of actual truck type
    ExportCreateLoadSlipComponent.prototype.getActualTruckTypeList = function () {
        var _this = this;
        this.actualTruckTypeList = [];
        //this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMasterTruckstype).subscribe(function (response) {
            console.log("respio", response);
            _this.actualTruckTypeList = response['data'];
            //this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // Truck types based on destination
    ExportCreateLoadSlipComponent.prototype.getTruckTypesForDest = function (destination) {
        var _this = this;
        if (destination) {
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMasterTruckTypesWithDest + '?sourceLoc=' + this.userSource + '&destLoc=' + destination).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    _this.truckTypeClass = response['data'];
                }
                else {
                    _this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...!', 'errError!');
                }
            }, function (err) {
                _this.toastr.error(err ? err : 'Something went wrong...', 'Error!');
            });
        }
    };
    // for getting gate in container list 
    ExportCreateLoadSlipComponent.prototype.getGateInContainer = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getExportGateInContainer + "?type=FGS_EXP&loadslipId=").subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var responseData = response['data'];
                _this.truckTypes = responseData['gatedInTrucks'];
                _this.isLoading = false;
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong !", "!Error");
                _this.isLoading = false;
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // for getting load slip details by load slip id from server
    ExportCreateLoadSlipComponent.prototype.getLoadSlipsDetailsById = function () {
        var _this = this;
        this.isLoadslipIdAvaliable = true;
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLoadSlipDetailsByID + "/" + this.loadslipID).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var responseData = response['data'];
                _this.destination = responseData.destination;
                _this.description = responseData.description;
                _this.indentCategory = responseData.truckIndentCategory;
                _this.city = responseData.city;
                _this.shipmentNumber = responseData.shipmentID;
                _this.loadslipCategory = responseData.loadslipCategory;
                _this.bayArrivedDate = responseData.bayArrivedDate;
                _this.loadingStartDate = responseData.loadingStartDate;
                _this.loadingEndDate = responseData.loadingEndDate;
                _this.confirmedDate = responseData.confirmedDate;
                _this.releasedDate = responseData.releasedDate;
                _this.lsPrintDate = responseData.lsPrintDate;
                _this.bay = responseData.bay;
                _this.ShipTo = responseData.shipTo;
                _this.truckType = responseData.truckNumber;
                _this.multistopTruckNumber = responseData.truckNumber;
                _this.indentCategory = responseData.truckIndentCategory;
                _this.IS_MULTI_STOP = responseData.multiStop;
                _this.totalTyres = responseData.totalTyres;
                _this.totalTubes = responseData.totalTubes;
                _this.totalFlaps = responseData.totalFlaps;
                _this.totalValves = responseData.totalValves;
                _this.totalPctr = responseData.totPctr;
                _this.totalValves = responseData.totalValves;
                _this.totalOthersCount = responseData.otherQty;
                _this.totalQuantity = responseData.totQty;
                _this.dropSeq = responseData.dropSeq;
                _this.freightAvailableflag = responseData.freightAvailableflag;
                // Shipment level values
                _this.totalTTESeletecd = responseData.shipmentTTEUtil;
                _this.totalMaterialWeight = responseData.shipmentWeightUtil;
                _this.totalTruckVolume = responseData.shipmentVolumeUtil;
                //Loads slip values 
                _this.loadslipTteUtil = responseData.tteUtil;
                _this.loadslipWtUtil = responseData.weightUtil;
                _this.loadslipVolUtil = responseData.volumeUtil;
                _this.totalLoadedQty = responseData.totalLoadedQty;
                _this.totalTTE = responseData.totalTTE;
                _this.totalWeight = responseData.totalWeight;
                _this.totalVolume = responseData.totalVolume;
                // variants & Actual Truck Type
                _this.variant_ONE = responseData.variant1;
                _this.actualTruckType = responseData.actualTruckType;
                _this.containerNum = responseData.containerNum;
                _this.invoiceDataList = responseData['delInvHeaderList'];
                _this.IS_MULTI_STOP = responseData.multiStop;
                _this.isDraftMode = responseData.isInDraft;
                _this.truckT = responseData.truckType;
                _this.transporter = responseData.servprov;
                _this.countryOfDestination = responseData.countryName;
                // if view type is print checking condition for display invoice list else 
                if (_this.isDraftMode) {
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.invoiceDataList);
                    var selectedItems = [];
                    for (var i = 0; i < _this.invoiceDataList.length; i++) {
                        if (_this.invoiceDataList[i].loadslipId == _this.loadslipID) {
                            selectedItems.push(_this.invoiceDataList[i]);
                        }
                    }
                    _this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](true, selectedItems);
                    _this.IS_RELEASE = (selectedItems.length > 0) ? false : true;
                }
                else {
                    for (var i = 0; i < _this.invoiceDataList.length; i++) {
                        if (_this.invoiceDataList[i].loadslipId == _this.loadslipID) {
                            _this.selectedInvoiceListItems.push(_this.invoiceDataList[i]);
                            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.selectedInvoiceListItems);
                        }
                    }
                    _this.IS_RELEASE = (_this.selectedInvoiceListItems.length > 0) ? false : true;
                    _this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](true, _this.selectedInvoiceListItems);
                }
                _this.getTruckTypesForDest(_this.destination);
                // for getting container list based on loadslipId and type in draft mode
                _this.getContainerListBaseLoadslipId(responseData);
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // for getting container list based on loadslipId and type in draft mode
    ExportCreateLoadSlipComponent.prototype.getContainerListBaseLoadslipId = function (responseData) {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getExportGateInContainer + "?type=FGS_EXP&loadslipId=" + this.loadslipID).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var dataResponse = response['data'];
                _this.truckTypes = dataResponse['gatedInTrucks'];
                var newObject = {
                    "CONTAINER_NUM": responseData.containerNum,
                    "DEST_LOC": responseData.destination,
                    "TRUCK_NUMBER": responseData.truckNumber,
                    "TRUCK_TYPE": responseData.truckType,
                    "SERVPROV": responseData.servprov,
                    "ITEM_CATEGORY": responseData.truckIndentCategory,
                    "DEST_DESC": responseData.description
                };
                var findTrcuk = _this.truckTypes.findIndex(function (data) { return data.TRUCK_NUMBER == responseData.truckNumber; });
                if (findTrcuk == -1) {
                    _this.truckTypes.push(newObject);
                }
                _this.shiptoPlaceList = responseData.shipmentToLocs;
                var trackingObj = _this.truckTypes.find(function (truckObj) { return truckObj.TRUCK_NUMBER == _this.truckType; });
                var respData = trackingObj;
                // for getting loadslip utilization data for export from server
                _this.getLoadSlipUtilizationsForExport(respData.TRUCK_NUMBER, respData.TRUCK_TYPE, _this.shipmentNumber);
                // this.isLoading = false;
                // Set table data
                _this.setLoadSlipDraftData(responseData);
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong !", "!Error");
                _this.isLoading = false;
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // for getting loadslip utilization data for export from server
    ExportCreateLoadSlipComponent.prototype.getLoadSlipUtilizationsForExport = function (truckNumber, truckType, shipmentNumber) {
        var _this = this;
        this.isLoading = true;
        var data = {
            'truckNumber': truckNumber,
            'trucktype': truckType,
            'shipmentId': shipmentNumber,
            'destLoc': this.destination,
            'loadSlipId': this.loadslipID,
            'type': 'FGS_EXP',
            'actucaltrucktype': this.actualTruckType,
            'variant1': this.variant_ONE
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLoadSlipUtlizationsForExport, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var truckRepsonseData = response['data'];
                // this.loadSlipData = [];
                _this.loadslipUtilizationData = truckRepsonseData['loadSlipUtilizationDto'];
                _this.totalTTESeletecd = _this.loadslipUtilizationData.shipmentTotalTTEUtil;
                _this.totalMaterialWeight = _this.loadslipUtilizationData.shipmentTotalWtUtil;
                _this.totalTruckVolume = _this.loadslipUtilizationData.shipmentTotalVolUtil;
                // this.multistopTruckNumber = this.loadslipUtilizationData.truckNumber;
                // this.multistopTruckType = this.loadslipUtilizationData.truckType;
                // this.actualTruckType = this.loadslipUtilizationData.actualTruckType;
                // this.variant_ONE = this.loadslipUtilizationData.variant1;
                // this.destination = this.loadslipUtilizationData.destLoc;
                // this.containerNum = this.loadslipUtilizationData.containerNum;
                // this.truckType = this.loadslipUtilizationData.truckNumber;
                // this.invoiceDataList = truckRepsonseData['delInvHeaders'];
                // this.dataSource = new MatTableDataSource<PeriodicElement>(this.invoiceDataList);
                if (truckRepsonseData.delInvHeaders && _this.invoiceDataList.length == 0) {
                    _this.invoiceDataList = truckRepsonseData.delInvHeaders;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.invoiceDataList);
                }
                _this.isLoading = false;
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // for setting loadslip details data 
    ExportCreateLoadSlipComponent.prototype.setLoadSlipDraftData = function (responseData) {
        var _this = this;
        // this.isLoading = true;
        this.IS_RELEASE = ((responseData.loadslipDraftDataDtos) ? (responseData.loadslipDraftDataDtos.length > 0) : []) ? false : true;
        if (responseData.loadslipDraftDataDtos) {
            // this.totalTyres = 0;
            // this.totalTubes = 0;
            // this.totalFlaps = 0;
            // this.totalValves = 0;
            // this.totalPctr = 0;
            responseData.loadslipDraftDataDtos.forEach(function (data) {
                var newData = {
                    "BATCH_CODE": data.batchCode,
                    "QTY": data.loadedQty,
                    "lineNumber": data.lineNumber,
                    "ITEM_DESCRIPTION": data.itemDesc,
                    "ITEM_ID": data.itemId,
                    "VOLUME": data.grossVol,
                    "WEIGHT": data.weight,
                    "TTE": data.tte,
                    "SUM_QTY": data.availableQty,
                    "ITEM_CATEGORY": data.itemCategory,
                    "MIN_PRIORITY": data.priority,
                    "isScannable": data.isScannable,
                    // flap details
                    // "FLAP_DESC": data.flapSKU,
                    "flapBatch": data.flapBatch,
                    "FLAP_CODE": data.flapSKU,
                    "FLAP_COMP_QTY": data.flapCompQty,
                    "totalFlapQty": data.falpQty,
                    //tube details
                    "tubeBatch": data.tubeBatch,
                    "TUBE_CODE": data.tubeSKU,
                    "TUBE_COMP_QTY": data.tubeCompQty,
                    "totalTubeQty": data.tubeQty,
                    //value details
                    "VALVE_DESC": data.valveBatch,
                    "VALVE_CODE": data.valveSKU,
                    "VALVE_COMP_QTY": data.valveCompQty,
                    "totalValueQty": data.valveQty,
                    "INVOICE_NUMBER": data.invoiceNumber,
                    "LINE_NUMBER": data.lineNumber
                    // "weight": data.weight
                };
                _this.loadSlipData.push(newData);
                _this.loadSlipData = _this.loadSlipData.slice();
            });
            this.weightSumm = 0;
            this.qtySumm = 0;
            this.metricTon = 0;
            this.weightSummaryCell();
            // this.totalTyres = responseData.totalTyres;
            // this.totalTubes = responseData.totalTubes;
            // this.totalFlaps = responseData.totalFlaps;
            // this.totalValves = responseData.totalValves;
            // this.totalPctr = responseData.totalpctr;
            // this.totalTTESeletecd = responseData.tteUtil;
            // this.totalMaterialWeight = responseData.weightUtil;
            // this.totalTruckVolume = responseData.volumeUtil;
            // this.totalLoadedQty = responseData.totalLoadedQty;
            // this.totalTTE = responseData.totalTTE;
            // this.totalWeight = responseData.totalWeight;
            // this.totalVolume = responseData.totalVolume;
        }
        // this.isLoading = false;
    };
    ExportCreateLoadSlipComponent.prototype.onPageSizeChanged = function (event) {
        this.page.limit = event;
        this.page.pageSize = this.pageSize;
    };
    ExportCreateLoadSlipComponent.prototype.createLoadSlip = function () {
        this.createLoadSlipSuccess = true;
    };
    // get Load slip Utilizations for export
    ExportCreateLoadSlipComponent.prototype.getLoadSlipUtilazations = function (containerNumber) {
        var _this = this;
        this.isLoading = true;
        // this.clearFields();
        // Here we getting only truck number based on the truck number we are getting container number ,destination location,truck type
        var trackingObj = this.truckTypes.find(function (truckObj) { return truckObj.CONTAINER_NUM == containerNumber; });
        // whole object
        var respData = trackingObj;
        //splitting those details
        this.truckType = respData.TRUCK_NUMBER;
        this.containerNum = trackingObj.CONTAINER_NUM;
        this.destination = trackingObj.DEST_LOC;
        this.truckT = trackingObj.TRUCK_TYPE;
        this.transporter = trackingObj.SERVPROV;
        this.indentCategory = trackingObj.ITEM_CATEGORY;
        this.description = trackingObj.DEST_DESC;
        this.countryOfDestination = trackingObj.COUNTRYNAME;
        var data = {
            'truckNumber': respData.TRUCK_NUMBER,
            'trucktype': respData.TRUCK_TYPE,
            'shipmentId': this.shipmentNumber,
            'destLoc': this.destination,
            'loadSlipId': this.loadslipID,
            'type': 'FGS_EXP',
            'actucaltrucktype': this.actualTruckType,
            'variant1': this.variant_ONE,
            'souceLoc': this.userSource,
            'trasporter': this.transporter
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLoadSlipUtlizationsForExport, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var repsonseData = response['data'];
                _this.invoiceDataList = repsonseData.delInvHeaders;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.invoiceDataList);
                _this.loadslipUtilizationData = repsonseData['loadSlipUtilizationDto'];
                // If we selected the Container Table data is populated ,then Actual truck type or variant selected manual calculate the values
                _this.ManualTTE_Weight_volume_Calculation();
                _this.city = _this.loadslipUtilizationData.city;
                _this.variant_ONE = _this.loadslipUtilizationData.variant1;
                _this.getTruckTypesForDest(_this.destination);
                _this.isLoading = false;
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // Calculate manual TTE ,Material Weight ,Total Volume
    ExportCreateLoadSlipComponent.prototype.ManualTTE_Weight_volume_Calculation = function () {
        var loadslipItemLevelTTE = 0;
        var LoadslipItemLevelWeight = 0;
        var LoadslipItemLevelVolume = 0;
        this.loadSlipData.forEach(function (row) {
            if (row.QTY != null) {
                var QTY = Number(row.QTY);
                // Item Level Calculations
                loadslipItemLevelTTE += QTY * (row.TTE ? row.TTE : 0);
                //TODO
                LoadslipItemLevelWeight += 1 * (row.WEIGHT ? row.WEIGHT : 0);
                LoadslipItemLevelVolume += QTY * (row.VOLUME ? row.VOLUME : 0);
            }
        });
        //total Material Weight  filled In the Truck
        if (this.loadslipUtilizationData.truckWeightCapacity != null && this.loadslipUtilizationData.truckWeightCapacity != 0) {
            this.totalMaterialWeight = ((LoadslipItemLevelWeight / this.loadslipUtilizationData.truckWeightCapacity) * 100);
        }
        else {
            this.totalMaterialWeight = 0;
        }
        //Total  TTE filled int the Truck
        if (this.loadslipUtilizationData.tteCapacity != null && this.loadslipUtilizationData.tteCapacity != 0) {
            //Check TTE Util for Multi-Drop or Noramal Loadslip creation
            this.totalTTESeletecd = ((loadslipItemLevelTTE / this.loadslipUtilizationData.tteCapacity) * 100);
        }
        else {
            this.totalTTESeletecd = 0;
        }
        // Total Volume Occupied in The Truck 
        if (this.loadslipUtilizationData.truckVolumeCapacity != null && this.loadslipUtilizationData.truckVolumeCapacity != 0) {
            this.totalTruckVolume = ((LoadslipItemLevelVolume / this.loadslipUtilizationData.truckVolumeCapacity) * 100);
        }
        else {
            this.totalTruckVolume = 0;
        }
    };
    // Load slips events trigger
    ExportCreateLoadSlipComponent.prototype.eventCall = function (loadSlipID, eventType) {
        var _this = this;
        if (loadSlipID) {
            this.isLoading = true;
            var data = {
                loadslipID: loadSlipID,
                eventType: eventType
            };
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.updateLoadSlipevent, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    _this.toastr.success(response['message']);
                    //Event type if Draft
                    var responseData = response['data']['data'];
                    _this.bayArrivedDate = responseData.bayArrivedDate;
                    _this.loadingStartDate = responseData.loadingStartDate;
                    _this.loadingEndDate = responseData.loadingEndDate;
                    _this.confirmedDate = responseData.confirmedDate;
                    _this.releasedDate = responseData.releasedDate;
                    _this.lsPrintDate = responseData.lsPrintDate;
                    _this.bay = responseData.bay;
                    _this.isLoading = false;
                }
                else {
                    _this.isLoading = false;
                    _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error");
                }
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
        else {
            this.toastr.warning("Please create a Loadslip", "!! Warning");
        }
    };
    //save as draft or print eEvents trigger
    ExportCreateLoadSlipComponent.prototype.saveAsDraft_Print_trigger = function (eventType) {
        this.isLoading = true;
        var linenumber;
        var newDraftableDataArray = [];
        this.loadSlipData.forEach(function (data, index) {
            if (data.QTY) {
                linenumber = index + 1;
                var newArray = {
                    "batchCode": data.BATCH_CODE,
                    "falpQty": data.totalFlapQty,
                    "flapBatch": data.flapBatch,
                    "flapSKU": data.FLAP_CODE,
                    "grossVol": data.VOLUME,
                    "grossWt": data.WEIGHT,
                    "itemDesc": data.ITEM_DESCRIPTION,
                    "itemId": data.ITEM_ID,
                    "lineNumber": linenumber,
                    "loadedQty": data.QTY,
                    'itemCategory': data.ITEM_CATEGORY,
                    "tte": data.TTE,
                    "invoiceNumber": data.INVOICE_NUMBER,
                    "tubeBatch": data.tubeBatch,
                    "tubeQty": data.totalTubeQty,
                    "tubeSKU": data.TUBE_CODE,
                    // "valveBatch": data.VALVE_DESC,
                    "valveBatch": '',
                    "valveQty": data.totalValueQty,
                    "valveSKU": data.VALVE_CODE,
                };
                newDraftableDataArray.push(newArray);
            }
        });
        if (this.loadslipID) {
            if (!this.isConfirmed) {
                this.finalInvoiceList = [];
                for (var i = 0; i < this.invoiceDataList.length; i++) {
                    if (this.invoiceDataList[i].loadslipId == this.loadslipID) {
                        this.finalInvoiceList.push(this.invoiceDataList[i].invoiceNumber);
                    }
                }
            }
            //Check whether it is save or Update
            this.IsUpdate = true;
        }
        else {
            this.IsUpdate = false;
        }
        var sendbleTTEUtil = 0;
        var sendableWEIGHTUtil = 0;
        var sendableVOLUMEUtil = 0;
        var multiloadslipItemLevelTTE = 0;
        var multiLoadslipItemLevelWeight = 0;
        var multiLoadslipItemLevelVolume = 0;
        if (this.checkMultiStop()) {
            // MULTI STOP TTE , WEIGHT, VOLUME
            this.loadSlipData.forEach(function (row) {
                if (row.QTY != null) {
                    var QTY = Number(row.QTY);
                    multiloadslipItemLevelTTE += QTY * (row.TTE ? row.TTE : 0);
                    //Todo
                    multiLoadslipItemLevelWeight += 1 * (row.WEIGHT ? row.WEIGHT : 0);
                    multiLoadslipItemLevelVolume += QTY * (row.VOLUME ? row.VOLUME : 0);
                }
            });
            //total Material Weight  filled In the Truck
            if (this.loadslipUtilizationData.truckWeightCapacity != null && this.loadslipUtilizationData.truckWeightCapacity != 0) {
                sendableWEIGHTUtil = ((multiLoadslipItemLevelWeight / this.loadslipUtilizationData.truckWeightCapacity) * 100);
            }
            //Total  TTE filled int the Truck
            if (this.loadslipUtilizationData.tteCapacity != null && this.loadslipUtilizationData.tteCapacity != 0) {
                //Check TTE Util for Multi-Drop or Noramal Loadslip creation
                sendbleTTEUtil = ((multiloadslipItemLevelTTE / this.loadslipUtilizationData.tteCapacity) * 100);
            }
            // Total Volume Occupied in The Truck 
            if (this.loadslipUtilizationData.truckVolumeCapacity != null && this.loadslipUtilizationData.truckVolumeCapacity != 0) {
                sendableVOLUMEUtil = ((multiLoadslipItemLevelVolume / this.loadslipUtilizationData.truckVolumeCapacity) * 100);
            }
            // sendbleTTEUtil = Number(this.totalTTESeletecd - this.loadslipUtilizationData.shipmentTotalTTEUtil);
            // sendableWEIGHTUtil = Number(this.totalMaterialWeight ? (this.totalMaterialWeight - this.loadslipUtilizationData.shipmentTotalWtUtil) : 0);
            // sendableVOLUMEUtil = Number(this.totalTruckVolume ? (this.totalTruckVolume - this.loadslipUtilizationData.shipmentTotalVolUtil) : 0);
        }
        else {
            // SINGLE STOP TTE ,WEIGHT, VOLUME
            sendbleTTEUtil = Number(this.totalTTESeletecd);
            sendableWEIGHTUtil = Number(this.totalMaterialWeight ? this.totalMaterialWeight : 0);
            sendableVOLUMEUtil = Number(this.totalTruckVolume ? this.totalTruckVolume : 0);
        }
        var saveasDraftData = {
            'source': this.userSource,
            'destination': this.destination,
            'truckNumber': this.truckType,
            'containerNum': this.containerNum,
            'loadslipDraftDataDtos': newDraftableDataArray,
            'action': eventType,
            'loadSlipId': this.loadslipID,
            'tteUtil': sendbleTTEUtil,
            'weightUtil': sendableWEIGHTUtil,
            'volumeUtil': sendableVOLUMEUtil,
            'totalTyres': this.totalTyres,
            'totalTubes': this.totalTubes,
            'totalFlaps': this.totalFlaps,
            'totalValves': this.totalValves,
            'totPctr': this.totalPctr,
            'otherQty': this.totalOthersCount,
            'totalLoadedQty': this.totalLoadedQty,
            'totalTTE': this.totalTTE,
            'totalWeight': this.totalWeight,
            'totalVolume': this.totalVolume,
            'shipTo': this.ShipTo,
            'invoiceList': this.finalInvoiceList,
            'type': 'FGS_EXP',
            'shipmentID': this.shipmentNumber,
            'actualTruckType': this.actualTruckType,
            'variant1': this.variant_ONE,
            'dropSeq': this.dropSeq
        };
        // if (eventType != 'PRINT') {
        //   //check type of Save Single Stop or Multi Stop
        //   if (this.checkMultiStop()) {
        //     this.saveAsDraftMultiStopAPI(saveasDraftData)
        //   } else {
        //     // for saving loadslip for export in draft mode
        //     this.saveLoadslipDraftForExport(saveasDraftData);
        //   }
        // }
        // else {
        //   //check type of Save Single Stop or Multi Stop
        //   if (this.checkMultiStop()) {
        //     this.MultiStopPrintServerAPI(saveasDraftData)
        //   } else {
        //     // for print  loadslip for export 
        //     this.saveLoadslipPrintForExport(saveasDraftData);
        //   }
        // }
        var HTTPAPI;
        if (this.truckType) {
            if (this.checkMultiStop()) {
                HTTPAPI = _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.multipleDropLoadSlip;
                this.saveLoadslipDraftForExport(saveasDraftData, HTTPAPI);
            }
            else {
                HTTPAPI = _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.loadslidSaveasDraft;
                // for saving loadslip for export in draft mode
                this.saveLoadslipDraftForExport(saveasDraftData, HTTPAPI);
            }
        }
        else {
            this.isLoading = false;
            this.toastr.error("Please select a Truck", " ! Error ");
        }
    };
    // for saving loadslip for export in draft mode
    ExportCreateLoadSlipComponent.prototype.saveLoadslipDraftForExport = function (saveasDraftData, HTTPAPI) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(HTTPAPI, saveasDraftData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.toastr.success(response['message']);
                _this.loadSlipData = [];
                // let responseData = response['data'].loadslipDraftDto.loadslipDraftDataDtos;
                var responseData = response['data'].loadslipDraftDto ? (response['data'].loadslipDraftDto) : {};
                _this.totalOthersCount = response['data'].otherQty;
                _this.totalQuantity = response['data'].totQty;
                _this.setLoadSlipDraftData(responseData);
                // responseData.forEach(data => {
                //   let newData = {
                //     "BATCH_CODE": data.batchCode,
                //     "qty": data.loadedQty,
                //     "QTY": data.loadedQty,
                //     "lineNumber": data.lineNumber,
                //     "ITEM_DESCRIPTION": data.itemDesc,
                //     "ITEM_ID": data.itemId,
                //     "VOLUME": data.grossVol,
                //     "WEIGHT": data.grossWt,
                //     "TTE": data.tte,
                //     "SUM_QTY": data.availableQty,
                //     "ITEM_CATEGORY": data.itemCategory,
                //     "MIN_PRIORITY": data.priority,
                //     "isScannable": data.isScannable,
                //     // flap details
                //     // "FLAP_DESC": data.flapSKU,
                //     "flapBatch": data.flapBatch,
                //     "FLAP_CODE": data.flapSKU,
                //     "FLAP_COMP_QTY": data.flapCompQty,
                //     "totalFlapQty": data.falpQty,
                //     //tube details
                //     "tubeBatch": data.tubeBatch,
                //     "TUBE_CODE": data.tubeSKU,
                //     "TUBE_COMP_QTY": data.tubeCompQty,
                //     "totalTubeQty": data.tubeQty,
                //     //value details
                //     "VALVE_DESC": data.valveBatch,
                //     "VALVE_CODE": data.valveSKU,
                //     "VALVE_COMP_QTY": data.valveCompQty,
                //     "totalValueQty": data.valveQty,
                //     "INVOICE_NUMBER": data.invoiceNumber,
                //     "LINE_NUMBER": data.lineNumber
                //   };
                //   this.loadSlipData.push(newData);
                //   this.loadSlipData = [...this.loadSlipData];
                // });
                if (_this.loadslipID) {
                    _this.lsPrintDate = response['data'].lsPrintDate;
                }
                var BASE64 = response['data'].loadslip;
                if (BASE64) {
                    var linkSource = 'data:application/pdf;base64,' + BASE64;
                    var element = document.createElement('a');
                    element.setAttribute('href', linkSource);
                    element.setAttribute('download', response['data'].loadSlipId);
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                }
                if (response['data'].loadSlipId) {
                    // this.showLoadslipInModal(response['data'].loadSlipId, "DRAFT");
                    _this.showLoadslipInModal(response['data'].loadSlipId, saveasDraftData.action, _this.IsUpdate, response['data']);
                }
                _this.isLoading = false;
            }
            else {
                // this.openloadsliperrorPopup(response['data'])
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // // for print  loadslip for export 
    // saveLoadslipPrintForExport(saveasDraftData) {
    //   this.isLoading = true;
    //   this.service.downloadPDF(ApiserviceService.apisList.loadslidSaveasDraft, saveasDraftData).subscribe((response: any) => {
    //     if (response.statusCode == 200) {
    //       if (this.loadslipID) {
    //         this.lsPrintDate = response['data'].lsPrintDate;
    //       }
    //       const linkSource = 'data:application/pdf;base64,' + response['data'].PDF_DATA;
    //       var element = document.createElement('a');
    //       element.setAttribute('href', linkSource);
    //       element.setAttribute('download', response['data'].LOADSLIP_ID);
    //       document.body.appendChild(element);
    //       element.click();
    //       document.body.removeChild(element);
    //       if (response['data'].LOADSLIP_ID) {
    //         // PRINT
    //         // this.showLoadslipInModal(response['data'].LOADSLIP_ID, "PRINT");
    //         this.showLoadslipInModal(response['data'].LOADSLIP_ID, "PRINT", this.IsUpdate, response['data']);
    //       }
    //       this.isLoading = false;
    //     } else {
    //       if (response['data']) {
    //         this.openloadsliperrorPopup(response['data'])
    //       }
    //       this.isLoading = false;
    //     }
    //   }, (err) => {
    //     this.toastr.error(err ? err : "Something went wrong..", "Error!");
    //     this.isLoading = false;
    //   });
    // }
    // // save As Draft Multi stop API
    // saveAsDraftMultiStopAPI(saveasDraftData) {
    //   this.isLoading = true;
    //   this.service.post_service(ApiserviceService.apisList.multipleDropLoadSlip, saveasDraftData).subscribe(response => {
    //     if (response['statusCode'] == 200) {
    //       this.toastr.success(response['message']);
    //       this.loadSlipData = [];
    //       let responseData = response['data'].loadslipDraftDto.loadslipDraftDataDtos;
    //       responseData.forEach(data => {
    //         let newData = {
    //           "BATCH_CODE": data.batchCode,
    //           "qty": data.loadedQty,
    //           "QTY": data.loadedQty,
    //           "lineNumber": data.lineNumber,
    //           "ITEM_DESCRIPTION": data.itemDesc,
    //           "ITEM_ID": data.itemId,
    //           "VOLUME": data.grossVol,
    //           "WEIGHT": data.grossWt,
    //           "TTE": data.tte,
    //           "SUM_QTY": data.availableQty,
    //           "ITEM_CATEGORY": data.itemCategory,
    //           "MIN_PRIORITY": data.priority,
    //           "isScannable": data.isScannable,
    //           // flap details
    //           // "FLAP_DESC": data.flapSKU,
    //           "flapBatch": data.flapBatch,
    //           "FLAP_CODE": data.flapSKU,
    //           "FLAP_COMP_QTY": data.flapCompQty,
    //           "totalFlapQty": data.falpQty,
    //           //tube details
    //           "tubeBatch": data.tubeBatch,
    //           "TUBE_CODE": data.tubeSKU,
    //           "TUBE_COMP_QTY": data.tubeCompQty,
    //           "totalTubeQty": data.tubeQty,
    //           //value details
    //           "VALVE_DESC": data.valveBatch,
    //           "VALVE_CODE": data.valveSKU,
    //           "VALVE_COMP_QTY": data.valveCompQty,
    //           "totalValueQty": data.valveQty,
    //           "INVOICE_NUMBER": data.invoiceNumber,
    //           "LINE_NUMBER": data.lineNumber
    //         };
    //         this.loadSlipData.push(newData);
    //         this.loadSlipData = [...this.loadSlipData];
    //         console.log(this.loadSlipData, "this.loadSlipData")
    //       });
    //       if (response['data'].loadSlipId) {
    //         // this.showLoadslipInModal(response['data'].loadSlipId, "DRAFT");
    //         this.showLoadslipInModal(response['data'].loadSlipId, "DRAFT", this.IsUpdate, response['data']);
    //       }
    //       this.isLoading = false;
    //     } else {
    //       if (response['data']) {
    //         this.openloadsliperrorPopup(response['data'])
    //       }
    //       this.isLoading = false;
    //     }
    //   })
    // }
    // // Signle stop or Loadslip updation Print API
    // MultiStopPrintServerAPI(saveasDraftData) {
    //   this.isLoading = true;
    //   this.service.downloadPDF(ApiserviceService.apisList.multipleDropLoadSlip, saveasDraftData).subscribe((response: any) => {
    //     if (response.statusCode == 200) {
    //       if (this.loadslipID) {
    //         this.lsPrintDate = response['data'].lsPrintDate;
    //       }
    //       const linkSource = 'data:application/pdf;base64,' + response['data'].PDF_DATA;
    //       var element = document.createElement('a');
    //       element.setAttribute('href', linkSource);
    //       element.setAttribute('download', response['data'].LOADSLIP_ID);
    //       document.body.appendChild(element);
    //       element.click();
    //       document.body.removeChild(element);
    //       //PRINT
    //       // this.showLoadslipInModal(response['data'].LOADSLIP_ID, "PRINT");
    //       this.showLoadslipInModal(response['data'].LOADSLIP_ID, "PRINT", this.IsUpdate, response['data']);
    //       this.isLoading = false;
    //     } else {
    //       if (response['data']) {
    //         this.openloadsliperrorPopup(response['data'])
    //       }
    //       this.isLoading = false;
    //     }
    //     console.log(response)
    //   }, (err) => {
    //     console.log("Error", err);
    //     this.toastr.error(err ? err : "Something went wrong..", "Error!");
    //     this.isLoading = false;
    //   })
    // }
    //open loadslip error list 
    ExportCreateLoadSlipComponent.prototype.openloadsliperrorPopup = function (errorList) {
        var dialogRef = this.dialog.open(src_app_public_create_loadslips_error_popup_create_loadslips_error_popup_component__WEBPACK_IMPORTED_MODULE_8__["CreateLoadslipsErrorPopupComponent"], {
            data: errorList,
            disableClose: true
        });
    };
    // Show loadslipId with success POPUP
    ExportCreateLoadSlipComponent.prototype.showLoadslipInModal = function (value, typeofevent, IsUpdate, response) {
        var dialogRef = this.dialog.open(src_app_public_loadslip_success_dialog_loadslip_success_dialog_component__WEBPACK_IMPORTED_MODULE_7__["LoadslipSuccessDialogComponent"], {
            data: {
                loadslipId: value,
                type: typeofevent,
                isupdate: IsUpdate,
                loadslipData: response
            },
            disableClose: true
        });
        //reset the data which user selected after successful load slip creation
        if (!this.loadslipID) {
            this.clearFields();
            this.ShipTo = '';
        }
    };
    ExportCreateLoadSlipComponent.prototype.clearFields = function () {
        if (!this.checkMultiStop()) {
            this.totalMaterialWeight = '';
            this.totalTTESeletecd = '';
            this.totalTruckVolume = '';
        }
        this.totalTyres = '';
        this.totalTubes = '';
        this.totalFlaps = '';
        this.totalValves = '';
        this.destination = '';
        this.truckType = '';
        this.containerNum = '';
        // this.loadSlipData = [];
        // this.invoiceDataList = [];
        // this.masterToggle();
    };
    //clear user enter data
    ExportCreateLoadSlipComponent.prototype.cancelLoadslipCreation = function () {
        var _this = this;
        this.isLoading = true;
        var dialogRef = this.dialog.open(src_app_public_loadslip_cancel_popup_loadslip_cancel_popup_component__WEBPACK_IMPORTED_MODULE_5__["LoadslipCancelPopupComponent"], { disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.totalMaterialWeight = '';
                _this.totalTTESeletecd = '';
                _this.totalTruckVolume = '';
                _this.totalTyres = '';
                _this.totalTubes = '';
                _this.totalValves = '';
                _this.destination = '';
                _this.totalFlaps = '';
                _this.truckType = '';
                _this.loadSlipData = [];
                _this.containerNum = '';
                _this.truckT = '';
                _this.transporter = '';
                _this.loadslipCategory = '';
                _this.ShipTo = '';
                _this.actualTruckType = '';
                _this.variant_ONE = '';
                _this.freightAvailableflag = '';
                _this.loadSlipData.forEach(function (data) {
                    data.qty = 0;
                });
                _this.loadSlipData = _this.loadSlipData.slice();
                _this.description = '';
                _this.indentCategory = '';
                _this.city = '';
            }
            _this.isLoading = false;
        });
    };
    // Download loadslip after trigger CONFIRM event
    ExportCreateLoadSlipComponent.prototype.downloadLoadslip = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.printLoadslip + "?loadslipId=" + this.loadslipID).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var responseData = response['data'];
                var linkSource = 'data:application/pdf;base64,' + responseData;
                var element = document.createElement('a');
                element.setAttribute('href', linkSource);
                element.setAttribute('download', _this.loadslipID);
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
                _this.isLoading = false;
                _this.toastr.success(response['message']);
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    /** Whether the number of selected elements matches the total number of rows. */
    ExportCreateLoadSlipComponent.prototype.isAllSelected = function () {
        if (this.viewType) {
            var numSelected = this.selection.selected.length;
            var numRows = this.selectedInvoiceListItems.length;
            return numSelected === numRows;
        }
        else {
            var numSelected = this.selection.selected.length;
            var numRows = this.invoiceDataList.length;
            return numSelected === numRows;
        }
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    ExportCreateLoadSlipComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.viewType) {
            this.isAllSelected() ? this.selection.clear() : this.selectedInvoiceListItems.forEach(function (row) { return _this.selection.select(row); });
        }
        else {
            this.isAllSelected() ? this.selection.clear() : this.invoiceDataList.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    // for confirm invoice list for export
    ExportCreateLoadSlipComponent.prototype.confirmInvoiceForExport = function () {
        var _this = this;
        this.isConfirmed = true;
        this.finalInvoiceList = [];
        for (var _i = 0, _a = this.selection.selected; _i < _a.length; _i++) {
            var iterator = _a[_i];
            this.invoiceData = iterator['invoiceNumber'];
            this.finalInvoiceList.push(this.invoiceData);
        }
        var body = {
            'invoiceList': this.finalInvoiceList
        };
        if (this.finalInvoiceList.length) {
            this.loadSlipData = [];
            $('#myModal').modal('hide');
            this.isLoading = true;
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.sendInvoiceList, body).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    _this.isLoading = false;
                    var data = response['data'];
                    _this.totalTyres = 0;
                    _this.totalTubes = 0;
                    _this.totalFlaps = 0;
                    _this.totalValves = 0;
                    _this.totalLoadedQty = 0;
                    _this.totalTTE = 0;
                    _this.totalWeight = 0;
                    _this.totalPctr = 0;
                    _this.totalVolume = 0;
                    _this.totalOthersCount = 0;
                    data['exportInfoDtoList'].forEach(function (data) {
                        var newData = {
                            "BATCH_CODE": data.batchCode,
                            "qty": data.loadedQty,
                            "lineNumber": data.lineNumber,
                            "ITEM_DESCRIPTION": data.description,
                            "ITEM_ID": data.itemId,
                            "VOLUME": data.grossVol,
                            "WEIGHT": data.weight,
                            "TTE": data.tte,
                            "SUM_QTY": data.availableQty,
                            "QTY": data.qty,
                            "ITEM_CATEGORY": data.category,
                            "MIN_PRIORITY": data.priority,
                            "isScannable": data.isScannable,
                            // flap details
                            // "FLAP_DESC": data.flapSKU,
                            "flapBatch": data.flapBatch,
                            "FLAP_CODE": data.flapSKU,
                            "FLAP_COMP_QTY": data.flapCompQty,
                            "totalFlapQty": data.falpQty,
                            "LINE_NUMBER": data.sapLineNo,
                            //tube details
                            "tubeBatch": data.tubeBatch,
                            "TUBE_CODE": data.tubeSKU,
                            "TUBE_COMP_QTY": data.tubeCompQty,
                            "totalTubeQty": data.tubeQty,
                            //value details
                            "VALVE_DESC": data.valveBatch,
                            "VALVE_CODE": data.valveSKU,
                            "VALVE_COMP_QTY": data.valveCompQty,
                            "totalValueQty": data.valveQty,
                            "INVOICE_NUMBER": data.invoiceNumber,
                        };
                        var qty = Number(data.qty);
                        // totalweight += qty * (data.grossWt ? data.grossWt : 0);
                        // totalTTE += qty * (data.tte ? data.tte : 0);
                        // totalVolume += qty * (data.volume ? data.volume : 0);
                        _this.totalTTE += qty * (data.tte ? data.tte : 0);
                        _this.totalWeight += 1 * (data.weight ? data.weight : 0);
                        _this.totalVolume += qty * (data.grossVol ? data.grossVol : 0);
                        // if (data.classification == 'TYRE') {
                        //   this.totalTyres += qty;
                        // } else if (data.classification == 'TUBE') {
                        //   this.totalTubes += qty;
                        // } else if (data.classification == 'FLAP') {
                        //   this.totalFlaps += qty;
                        // } else if (data.classification == 'VALVE') {
                        //   this.totalValves += qty;
                        // } else if (data.classification == 'PCTR') {
                        //   this.totalPctr += qty;
                        // }
                        switch (data.classification) {
                            // for Total tubes
                            case 'TUBE':
                                _this.totalTubes += parseInt(data.qty ? data.qty : 0);
                                break;
                            // for total Flaps
                            case 'FLAP':
                                _this.totalFlaps += parseInt(data.qty ? data.qty : 0);
                                break;
                            // for Valves
                            case 'VALVE':
                                _this.totalValves += parseInt(data.qty ? data.qty : 0);
                                break;
                            case 'TYRE':
                                // if it is PCTR
                                if (data.category === 'PCTR') {
                                    _this.totalPctr += parseInt(data.qty ? data.qty : 0);
                                    //It it is tyre
                                }
                                else {
                                    _this.totalTyres += parseInt(data.qty);
                                    _this.totalTubes += parseInt(data.totalTubeQty ? data.totalTubeQty : 0);
                                    _this.totalFlaps += parseInt(data.totalFlapQty ? data.totalFlapQty : 0);
                                    _this.totalValves += parseInt(data.totalValueQty ? data.totalValueQty : 0);
                                }
                                break;
                            //  default is tyres
                            default:
                                // For others 
                                _this.totalOthersCount += Number(data.qty ? data.qty : 0);
                                break;
                        }
                        // this.totalTyres += qty;
                        // this.totalTubes += qty * (data.TUBE_COMP_QTY ? data.TUBE_COMP_QTY : 0);
                        // this.totalFlaps += qty * (data.FLAP_COMP_QTY ? data.FLAP_COMP_QTY : 0);
                        // this.totalValves += qty * (data.VALVE_COMP_QTY ? data.VALVE_COMP_QTY : 0);
                        _this.totalLoadedQty += qty;
                        _this.loadSlipData.push(newData);
                        _this.loadSlipData = _this.loadSlipData.slice();
                    });
                    _this.weightSumm = 0;
                    _this.qtySumm = 0;
                    _this.metricTon = 0;
                    _this.weightSummaryCell();
                    if (_this.loadslipUtilizationData != undefined && _this.loadslipUtilizationData.truckWeightCapacity != null && _this.loadslipUtilizationData.truckWeightCapacity != 0) {
                        if (_this.checkMultiStop()) {
                            _this.totalMaterialWeight = ((_this.totalWeight / _this.loadslipUtilizationData.truckWeightCapacity) * 100);
                            _this.totalMaterialWeight = (_this.totalMaterialWeight + _this.loadslipUtilizationData.shipmentTotalWtUtil) - _this.loadslipWtUtil;
                        }
                        else {
                            _this.totalMaterialWeight = ((_this.totalWeight / _this.loadslipUtilizationData.truckWeightCapacity) * 100);
                        }
                        // this.totalMaterialWeight = ((this.totalWeight / this.loadslipUtilizationData.truckWeightCapacity) * 100);
                    }
                    if (_this.loadslipUtilizationData != undefined && _this.loadslipUtilizationData.tteCapacity != null && _this.loadslipUtilizationData.tteCapacity != 0) {
                        //Check TTE Util for Multi-Drop or Noramal Loadslip creation
                        if (_this.checkMultiStop()) {
                            _this.totalTTESeletecd = ((_this.totalTTE / _this.loadslipUtilizationData.tteCapacity) * 100);
                            _this.totalTTESeletecd = (_this.totalTTESeletecd + _this.loadslipUtilizationData.shipmentTotalTTEUtil) - _this.loadslipTteUtil;
                        }
                        else {
                            _this.totalTTESeletecd = ((_this.totalTTE / _this.loadslipUtilizationData.tteCapacity) * 100);
                        }
                        // this.totalTTESeletecd = ((this.totalTTE / this.loadslipUtilizationData.tteCapacity) * 100);
                    }
                    if (_this.loadslipUtilizationData != undefined && _this.loadslipUtilizationData.truckVolumeCapacity != null && _this.loadslipUtilizationData.truckVolumeCapacity != 0) {
                        if (_this.checkMultiStop()) {
                            _this.totalTruckVolume = ((_this.totalVolume / _this.loadslipUtilizationData.truckVolumeCapacity) * 100);
                            _this.totalTruckVolume = (_this.totalTruckVolume + _this.loadslipUtilizationData.shipmentTotalVolUtil) - _this.loadslipVolUtil;
                        }
                        else {
                            _this.totalTruckVolume = ((_this.totalVolume / _this.loadslipUtilizationData.truckVolumeCapacity) * 100);
                        }
                        // this.totalTruckVolume = ((this.totalVolume / this.loadslipUtilizationData.truckVolumeCapacity) * 100)
                    }
                }
                else {
                    _this.isLoading = false;
                    _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error");
                }
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
        else {
            // this.toastr.error("Please select invoice", "!Error");
            // without Selection of invoices we have clear values of tteutile,weightutil,volumeUtil,tubes,flaps,valves,tteQty,totalLoadedQty
            // for multistop no need empty the values tteUtil,weightUtil,volumeUtil
            // get the utlization values assign those values
            // we can't reset the values because previous loadslip contains the tte util values
            // without shipment , in multistop selected invoices, not created loadslip, then again unselected invoices at this situtation we need take values from utlization values  
            if (this.checkMultiStop()) {
                this.totalTTESeletecd = this.loadslipUtilizationData.shipmentTotalTTEUtil;
                this.totalMaterialWeight = this.loadslipUtilizationData.shipmentTotalWtUtil;
                this.totalTruckVolume = this.loadslipUtilizationData.shipmentTotalVolUtil;
            }
            else {
                this.totalMaterialWeight = '';
                this.totalTTESeletecd = '';
                this.totalTruckVolume = '';
            }
            this.totalTyres = '';
            this.totalTubes = '';
            this.totalFlaps = '';
            this.totalValves = '';
            this.totalLoadedQty = '';
            this.loadSlipData = [];
            this.totalTTE = 0;
            this.totalVolume = 0;
            this.totalWeight = 0;
            this.totalPctr = '';
        }
    };
    // for open invoice list modal
    ExportCreateLoadSlipComponent.prototype.onOpenModal = function () {
        var _this = this;
        // if (!this.isConfirmed || !this.selection.selected.length) {
        var selectedItems = [];
        var _loop_1 = function (i) {
            // if (this.invoiceDataList[i].loadslipId != null) {
            //   selectedItems.push(this.invoiceDataList[i]);
            // } else {
            this_1.loadSlipData.forEach(function (element) {
                if (element.INVOICE_NUMBER == _this.invoiceDataList[i].invoiceNumber) {
                    selectedItems.push(_this.invoiceDataList[i]);
                    return;
                }
            });
            // }
            // }
            this_1.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](true, selectedItems);
        };
        var this_1 = this;
        for (var i = 0; i < this.invoiceDataList.length; i++) {
            _loop_1(i);
        }
        $('#myModal').modal('show');
    };
    ExportCreateLoadSlipComponent.prototype.weightSummaryCell = function () {
        //  return "Total Weight: " + 10
        // return 'Weight summary: ' + this.loadSlipData.map(row => row['WEIGHT'])
        //   .reduce((res, cell) => res += cell, 0);
        var _this = this;
        this.loadSlipData.forEach(function (item) {
            _this.weightSumm += item.WEIGHT;
            _this.qtySumm += item.QTY;
        });
        this.metricTon = this.weightSumm / 1000;
    };
    // Print Excel
    ExportCreateLoadSlipComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service_DownLoadExcel(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.printLoadslip + '?loadslipId=' + this.loadslipID + '&excel=' + true).subscribe(function (response) {
            if (response) {
                // Uncomment when export excel is generated in backend
                var blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                // var filename = 'LoadslipDetails.xlsx';
                var filename = _this.loadslipID + '.xlsx';
                var link = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                document.body.appendChild(a);
                a.setAttribute('style', 'display: none');
                a.href = link;
                a.download = filename;
                a.click();
                window.URL.revokeObjectURL(link);
                a.remove();
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('weSummaryCell'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ExportCreateLoadSlipComponent.prototype, "weSummaryCell", void 0);
    ExportCreateLoadSlipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-create-load-slip',
            template: __webpack_require__(/*! ./export-create-load-slip.component.html */ "./src/app/export/export-create-load-slip/export-create-load-slip.component.html")
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ExportCreateLoadSlipComponent);
    return ExportCreateLoadSlipComponent;
}());



/***/ }),

/***/ "./src/app/export/export-create-load-slip/export-create-load-slip.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/export/export-create-load-slip/export-create-load-slip.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ExportCreateLoadSlipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportCreateLoadSlipModule", function() { return ExportCreateLoadSlipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _export_create_load_slip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./export-create-load-slip.component */ "./src/app/export/export-create-load-slip/export-create-load-slip.component.ts");
/* harmony import */ var src_app_public_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/public/share-module/share-module.module */ "./src/app/public/share-module/share-module.module.ts");
/* harmony import */ var src_app_public_loadslip_cancel_popup_loadslip_cancel_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/public/loadslip-cancel-popup/loadslip-cancel-popup.component */ "./src/app/public/loadslip-cancel-popup/loadslip-cancel-popup.component.ts");
/* harmony import */ var src_app_public_loadslip_success_dialog_loadslip_success_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/public/loadslip-success-dialog/loadslip-success-dialog.component */ "./src/app/public/loadslip-success-dialog/loadslip-success-dialog.component.ts");
/* harmony import */ var src_app_public_create_loadslips_error_popup_create_loadslips_error_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/public/create-loadslips-error-popup/create-loadslips-error-popup.component */ "./src/app/public/create-loadslips-error-popup/create-loadslips-error-popup.component.ts");
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', component: _export_create_load_slip_component__WEBPACK_IMPORTED_MODULE_7__["ExportCreateLoadSlipComponent"] },
    { path: ':loadslipId', component: _export_create_load_slip_component__WEBPACK_IMPORTED_MODULE_7__["ExportCreateLoadSlipComponent"] },
    { path: ':loadslipId/:viewType', component: _export_create_load_slip_component__WEBPACK_IMPORTED_MODULE_7__["ExportCreateLoadSlipComponent"] },
];
var ExportCreateLoadSlipModule = /** @class */ (function () {
    function ExportCreateLoadSlipModule() {
    }
    ExportCreateLoadSlipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["customMaterialModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                src_app_public_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_8__["ShareModuleModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_12__["CustomDatePipeModule"]
            ],
            declarations: [
                _export_create_load_slip_component__WEBPACK_IMPORTED_MODULE_7__["ExportCreateLoadSlipComponent"],
            ],
            entryComponents: [
                _export_create_load_slip_component__WEBPACK_IMPORTED_MODULE_7__["ExportCreateLoadSlipComponent"],
                src_app_public_loadslip_cancel_popup_loadslip_cancel_popup_component__WEBPACK_IMPORTED_MODULE_9__["LoadslipCancelPopupComponent"],
                src_app_public_loadslip_success_dialog_loadslip_success_dialog_component__WEBPACK_IMPORTED_MODULE_10__["LoadslipSuccessDialogComponent"],
                src_app_public_create_loadslips_error_popup_create_loadslips_error_popup_component__WEBPACK_IMPORTED_MODULE_11__["CreateLoadslipsErrorPopupComponent"],
            ]
        })
    ], ExportCreateLoadSlipModule);
    return ExportCreateLoadSlipModule;
}());



/***/ })

}]);
//# sourceMappingURL=export-export-create-load-slip-export-create-load-slip-module.js.map