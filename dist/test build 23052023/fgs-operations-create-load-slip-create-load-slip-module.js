(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fgs-operations-create-load-slip-create-load-slip-module"],{

/***/ "./src/app/fgs-operations/create-load-slip/create-load-slip.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/fgs-operations/create-load-slip/create-load-slip.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    Loadslip >\n    <span *ngIf=\"!loadslipID\">Create Load Slip</span>\n    <span *ngIf=\"(loadslipID && !viewType)\">Drafted Load Slip\n      <span class=\"pull-right refresh-span\">\n        <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export Download\">\n          <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n        </button>\n      </span>\n    </span>\n    <span *ngIf=\"(loadslipID && viewType)\">View Load Slip</span>\n  </h6>\n  <div class=\"clearfix\"></div>\n  <div class=\"loadslip-fields tab-loadslip-fields\">\n    <div class=\"row margin-bottom-5\">\n      <div class=\"col-md-7\">\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n            <div class='inputbordered'>\n              <div>Source</div>\n              <div>\n                <b>{{userSource}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pl-0\">\n            <div class=\"form-group inputbordered\">\n              <mat-form-field *ngIf=\"!isLoadslipIdAvaliable\">\n                <mat-select placeholder=\"Destination\" [(ngModel)]=\"destination\" name=\"destination\"\n                  (ngModelChange)=\"getTrucksList(destination,category,'destinationFilter')\" required>\n                  <mat-option *ngFor=\"let dest of destinationList\" [value]=\"dest.dest_loc\">\n                    {{dest.dest_loc | uppercase}}<span *ngIf=\"dest.dest_desc\">&nbsp; -\n                      &nbsp;({{dest.dest_desc | uppercase}})</span>\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <div *ngIf=\"isLoadslipIdAvaliable\">\n                <div>Destination</div>\n                <div>\n                  <b>{{destination?destination:'--' | uppercase}}</b>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pd-0\">\n            <div class=\"form-group inputbordered\">\n              <!-- (isLoadslipIdAvaliable?!isLoadslipIdAvaliable:!shipmentNumber) -->\n\n              <!-- *ngIf=\"(checkMultiStop())? !checkMultiStop(): !confirmedDate\" -->\n              <!-- The above condition logic was  -->\n              <!-- 1) Loadslip truck,variant,actual truck type can editble only in single loadslip in a shipmentNumber\n                2)Not works in Multi pick/Drop  -->\n\n              <mat-form-field *ngIf=\"(checkMultiStop())? !checkMultiStop(): !confirmedDate\">\n                <mat-select placeholder=\"Truck\" [(ngModel)]=\"truckType\" name=\"truckType\"\n                  (ngModelChange)=\"defaultTruckData();getLoadSlipUtilazations($event)\">\n                  <mat-option [value]=\"\">None</mat-option>\n                  <mat-option *ngFor=\"let truckType of truckTypes;let i=index\" [value]=\"truckType.TRUCK_NUMBER\">\n                    {{truckType.TRUCK_NUMBER | uppercase}} <span *ngIf=\"truckType.ITEM_CATEGORY\">&nbsp;\n                      - &nbsp;({{truckType.ITEM_CATEGORY | uppercase}})</span>\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <div *ngIf=\"(checkMultiStop())? checkMultiStop(): confirmedDate\">\n                <div>Truck</div>\n                <div>\n                  <b>{{multistopTruckNumber || '--'}} <span *ngIf=\"multistopTruckNumber && indentCategory\">&nbsp;\n                      - &nbsp;({{indentCategory | uppercase}})</span></b>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group inputbordered\">\n              <div>Truck Type</div>\n              <div>\n                <b>{{truckT?truckT:'--' }}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 pd-0\">\n            <div class=\"form-group inputbordered\">\n              <div>Transporter</div>\n              <div>\n                <b>{{transporter?transporter:'--' }}</b>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-5\">\n        <div class=\"row\">\n          <div class=\"col-md-3 pr-0\">\n            <div class=\"form-group inputbordered\">\n              <mat-form-field>\n                <mat-select placeholder=\"Ship To\" [(ngModel)]=\"ShipTo\" name=\"shito\">\n                  <mat-option *ngFor=\"let shipPlace of shiptoPlaceList;let i=index\" [value]=\"shipPlace\">\n                    {{shipPlace}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"col-md-3 \">\n            <div class=\"form-group inputbordered\">\n              <mat-form-field *ngIf=\"(checkMultiStop())? !checkMultiStop(): !confirmedDate\">\n                <!-- <mat-select [(ngModel)]=\"actualTruckType\" name=\"actualTruckType\" placeholder=\"Actual Truck Type\"\n                  (selectionChange)=\"getLoadSlipUtilazations(truckType)\">\n                  <mat-option selected>None</mat-option>\n                  <mat-option *ngFor=\"let list of actualTruckTypeList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-select> -->\n                <mat-select placeholder=\"Actual Truck Type\" [(ngModel)]=\"actualTruckType\" name=\"actualTruckType\"\n                  (selectionChange)=\"getLoadSlipUtilazations(truckType)\">\n                  <mat-option selected>None</mat-option>\n                  <mat-optgroup *ngFor=\"let group of truckTypeClass\" [label]=\"group.name\" [disabled]=\"group.disabled\">\n                    <mat-option *ngFor=\"let type of group.mtTruckTypeInfos\" [value]=\"type.value\"\n                      style=\"font-weight: normal\">\n                      {{type.value}}\n                    </mat-option>\n                  </mat-optgroup>\n                </mat-select>\n              </mat-form-field>\n              <div *ngIf=\"(checkMultiStop())? checkMultiStop(): confirmedDate\">\n                <div>Actual Truck Type</div>\n                <div>\n                  <b>{{actualTruckType || '--'}}</b>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 pd-0\">\n            <div class=\"form-group inputbordered\">\n              <mat-form-field *ngIf=\"(checkMultiStop())? !checkMultiStop(): !confirmedDate\">\n                <mat-select placeholder=\"Variant 1\" [(ngModel)]=\"variant_ONE\" name=\"variant_ONE\"\n                  (selectionChange)=\"getLoadSlipUtilazations(truckType)\">\n                  <mat-option selected>None</mat-option>\n                  <mat-option *ngFor=\"let item of variant_one_List\" [value]=\"item\">\n                    {{item | uppercase}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <div *ngIf=\"(checkMultiStop())? checkMultiStop(): confirmedDate\">\n                <div>Variant 1</div>\n                <div>\n                  <b>{{variant_ONE || '--'}}</b>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group inputbordered\">\n              <!-- <mat-form-field appearance=\"standard\">\n                <mat-select placeholder=\"Variant 2\" [(ngModel)]=\"variant_TWO\" name=\"variantvariant_TWO_ONE\">\n                  <mat-option *ngFor=\"let item of variant_two_List\" [value]=\"item\">\n                    {{item | uppercase}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field> -->\n\n              <div>Frt Avail</div>\n              <div>\n                <b>{{ freightAvailableflag || '--'}}</b>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row margin-bottom-5\">\n      <div class=\"col-md-2\">\n        <div class='bordered'>\n          <div>Shipment No</div>\n          <div>\n            <b>{{shipmentNumber || '--'}}</b>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3 pd-0\">\n        <div class=\"bordered-box\">\n          <div class=\"row text-center h-100\">\n            <div class=\"col-md-4 col-4 text-center bordered-box-left-div\">\n              <div>\n                TTE Util\n              </div>\n              <div [ngClass]=\"(totalTTESeletecd > 100)?'text-danger':'color-green'\">\n                <b>{{totalTTESeletecd?(totalTTESeletecd | number : '1.2-2'):0 }}%</b>\n              </div>\n            </div>\n            <div class=\"col-md-4 col-4 bordered-box-left-div\">\n              <div>\n                Wt Util\n              </div>\n              <div [ngClass]=\"(totalMaterialWeight > 100)?'text-danger':'color-green'\">\n                <b>{{totalMaterialWeight?(totalMaterialWeight | number : '1.2-2'):0}}%</b>\n              </div>\n            </div>\n            <div class=\"col-md-4 col-4\">\n              <div>\n                Vol Util\n              </div>\n              <div [ngClass]=\"(totalTruckVolume > 100)?'text-danger':'color-green'\">\n                <b>{{totalTruckVolume?(totalTruckVolume | number : '1.2-2'):0}}%</b>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-5\">\n        <div class=\"row bg-theme\">\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Tyres</div>\n            <div>\n              {{totalTyres?totalTyres:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Tubes</div>\n            <div>\n              {{totalTubes?totalTubes:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Flaps</div>\n            <div>\n              {{totalFlaps?totalFlaps:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div> Valves</div>\n            <div>\n              {{totalValves?totalValves:0}}\n            </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Pctr</div>\n            <div>{{totalPctr?totalPctr:0}} </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Others</div>\n            <div>{{totalOthersCount?totalOthersCount:0}} </div>\n          </div>\n          <div class=\"col-md-2 col-wid-16p\">\n            <div>Tot Qty</div>\n            <div>{{totalQuantity?totalQuantity:0}} </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-2 flow-btns MD-MP screenResponsive\">\n        <button mat-raised-button color=\"primary\" [disabled]=\"!isDraftMode\" class=\"tab-mb-10\"\n          (click)=loadslipOnSameTruckNavigation()>\n          LS on Same Truck(MD)</button>\n        <button mat-raised-button color=\"primary\" class=\"ml-5\" [disabled]=\"!isDraftMode\"\n          (click)=\"shareTruckDestinationList()\">Share\n          Truck(MP)</button>\n      </div>\n\n    </div>\n    <div class=\"row margin-bottom-5\">\n      <div class=\"col-md-4\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class='bordered'>\n              <div>Load Slip No </div>\n              <div><b>{{loadslipID || '--'}}</b></div>\n            </div>\n          </div>\n          <div class=\"col-md-3 pd-0\">\n            <div class=\"bordered\">\n              <div>LS Category</div>\n              <div>\n                <b>{{loadslipCategory || '--'}}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 \">\n            <div class=\"form-group inputbordered categoryDropdown \">\n              <mat-form-field appearance=\"standard\">\n                <mat-select placeholder=\"Drop Seq\" [(ngModel)]=\"dropSeq\" name=\"dropSeq\">\n                  <mat-option *ngFor=\"let item of dropSeqList;let i=index\" [value]=\"item\">\n                    {{item}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-8 pd-0\">\n        <div class=\"flow-btns tab-flow-btns width-12-5\">\n          <!-- [disabled]=\"confirmedDate != null\" -->\n          <button *ngIf=\"(bayArrivedDate == null)\" mat-raised-button (click)=\"eventCall(loadslipID,'ARRIVED_BAY')\"\n            class=\"mat-default\">Arrived\n            Bay</button>\n          <button *ngIf=\"(bayArrivedDate != null)\" class=\"greenButton\">Arrived\n            Bay <b>: {{bay}}</b> <span>{{bayArrivedDate\n              | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n        </div>\n        <div class=\"flow-btns tab-flow-btns width-12-5\">\n          <button mat-raised-button color=\"default\" (click)=\"saveAsDraft_Print_trigger('PRINT')\" class=\"mat-default\"\n            *ngIf=\"(lsPrintDate == null) && (confirmedDate == null)\">Print LS</button>\n          <button (click)=\"saveAsDraft_Print_trigger('PRINT')\" class=\"greenButton\"\n            *ngIf=\"(lsPrintDate != null) && (confirmedDate == null)\">Print\n            LS<span> {{lsPrintDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n          <button (click)=\"downloadLoadslip()\" class=\"greenButton\" *ngIf=\"(confirmedDate != null)\">Print\n            Pdf<span> {{lsPrintDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n        </div>\n        <div class=\"flow-btns tab-flow-btns width-12-5\">\n          <button mat-raised-button color=\"default\" (click)=\"sendForBarcode()\" *ngIf=\"(sendForBarcodeDate == null)\">Send\n            Barcode</button>\n          <button class=\"greenButton\" *ngIf=\"(sendForBarcodeDate != null)\" (click)=\"sendForBarcode()\"\n            [disabled]=\"(confirmedDate)\">Send Barcode\n            <span>{{sendForBarcodeDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n        </div>\n        <div class=\"flow-btns tab-flow-btns width-12-5\">\n          <button mat-raised-button color=\"default\" *ngIf=\"(loadingStartDate == null)\"\n            (click)=\"eventCall(loadslipID,'LOADING_START')\">Loading\n            Start</button>\n          <button *ngIf=\"(loadingStartDate != null)\" class=\"greenButton\">Loading Start <span>{{loadingStartDate |\n              customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n        </div>\n        <div class=\"flow-btns tab-flow-btns width-12-5\">\n          <button mat-raised-button color=\"default\" *ngIf=\"(loadingEndDate == null)\"\n            (click)=\"eventCall(loadslipID,'LOADING_END')\">Loading\n            End</button>\n          <button *ngIf=\"(loadingEndDate != null)\" class=\"greenButton\">Loading End <span>{{loadingEndDate |\n              customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n        </div>\n        <div class=\"flow-btns tab-flow-btns width-12-5\">\n          <button mat-raised-button color=\"default\" *ngIf=\"!sostoNumber\"\n            (click)=\"eventCall(loadslipID,'CONFIRM')\">Confirm</button>\n          <button *ngIf=\"sostoNumber\" class=\"greenButton\">Confirm\n            <span>{{confirmedDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n        </div>\n        <div class=\"flow-btns tab-flow-btns width-12-5\">\n\n        \n            \n            <button mat-raised-button color=\"default\"\n              *ngIf=\"(releasedDate == null)\"\n              (click)=\"eventCall(loadslipID,'RELEASED')\" [disabled]=\"!(sapInvoice)\">Release </button>\n\n          <button *ngIf=\"(releasedDate != null)\" class=\"greenButton\">Release <span>{{releasedDate | customDateFormat |\n              date:'dd-MMM-yyyy,HH:mm'}}</span></button>\n        </div>\n        <div class=\"flow-btns tab-flow-btns width-12-5\">\n          <button mat-raised-button color=\"primary\" (click)=\"stosoDelete(loadslipID)\"\n            [disabled]=\"(sostoNumber && sapInvoice) ||  (!sostoNumber)\">STO/SO\n            Delete</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"bordered\">\n              <div>STO/SO</div>\n              <div><b>{{STOSONumber || '--'}}</b></div>\n            </div>\n          </div>\n          <div class=\"col-md-3  pl-0\">\n            <div class=\"bordered\">\n              <div>TTE Qty</div>\n              <div><b>{{totalTTEQty?(totalTTEQty | number : '1.2-2'):0}}</b></div>\n            </div>\n          </div>\n          <div class=\"col-md-3  pd-0\">\n            <div class=\"bordered\">\n              <div>\n                Wt (Kg)\n              </div>\n              <div>\n                <b>{{itemLevelTotalWeight?(itemLevelTotalWeight | number : '1.2-2'):0}}</b>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"row\">\n          <div class=\"col-md-2  pr-0\">\n            <div class=\"form-group inputbordered categoryDropdown\" *ngIf=\"!confirmedDate\">\n              <mat-form-field appearance=\"standard\">\n                <mat-select placeholder=\"LS Category\" [(ngModel)]=\"category\" name=\"cat\" #categorySelect\n                  (openedChange)=\"openedChange($event,destination,category,'categoryFilter')\" multiple>\n                  <mat-option *ngFor=\"let item of categoryList\" [value]=\"item\">\n                    {{item | uppercase}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"confirmedDate\">\n              <div class=\"bordered\">\n                <div>Category</div>\n                <div>\n                  <b>{{(selectedCategories.length>0)?(selectedCategories.toString() | uppercase):'--' }}</b>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\" col-md-1 flow-btns tab-flow-btns\" *ngIf=\"elrFlag\">\n            <!-- class=\"greenButton\" -->\n            <button (click)=\"generateLrNum()\" mat-raised-button color=\"default\" *ngIf=\"generateLr\">Generate LR</button>\n            <button (click)=\"downloadLoadReceipt()\" class=\"greenButton\" *ngIf=\"printLr\">Print\n              LR<span>{{lrNum}}</span></button>\n          </div>\n          <div class=\"col-md-1\">\n            <div class=\"bordered\">\n              <div>Indt Cat</div>\n              <div>\n                <b>{{indentCategory?(indentCategory | uppercase):'--' }}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2 pd-0\">\n            <div class=\"form-group bordered\">\n              <mat-form-field *ngIf=\"!isLoadslipIdAvaliable\" appearance=\"standard\" class=\"padding-top-5\">\n                <mat-select placeholder=\"Dest Description\" [(ngModel)]=\"description\" name=\"description\"\n                  (ngModelChange)=\"getTrucksList(description,category,'destinationFilter')\">\n                  <mat-option *ngFor=\"let dest of descriptionList\" [value]=\"dest.dest_desc\">\n                    {{dest.dest_desc | uppercase}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <div *ngIf=\"isLoadslipIdAvaliable\">\n                <div>Dest Desc</div>\n                <div [title]=\"description\" [ngClass]=\"{'cursor-pointer':description?.length>14}\">\n                  <!-- <b>{{description?description:'--' | uppercase}}</b> -->\n                  <b>{{description ? (((description?.length>14)? (description | slice:0:14)+'..':(description)) |\n                    uppercase) : '--'}}</b>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"bordered\">\n              <div>City</div>\n              <div>\n                <!-- <b>{{city?city:'--' | uppercase}}</b> -->\n                <div [title]=\"city\" [ngClass]=\"{'cursor-pointer':city?.length>20}\">\n                  <b>{{city ? (city?.length>20) ? (city | slice:0:20)+'..':(city) : '--'}}</b>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-1\">\n            <div class=\"bordered\">\n              <div>Consent Status</div>\n              <div>\n                <b>{{trackingConsentStatus?(trackingConsentStatus):'--' }}</b>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-1\">\n            <div class=\"bordered\">\n              <div>Telecom Provider</div>\n              <div>\n                <b>{{consentPhoneTelecom?(consentPhoneTelecom | uppercase):'--' }}</b>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"col-sm-2\">\n            \n            <div class=\"row\">\n              <div class=\"col-sm-6 col-md-7 col-7\">\n                <div class=\"flow-btns tab-flow-btns\">\n                  <button mat-raised-button color=\"primary\"\n                    *ngIf=\"(trackingConsentStatus!='Success' || row.trackingConsentStatus!=null)\"\n                    [disabled]=\"trackingConsentStatus == 'Success'\" (click)=\"checkConsentLoadSlip(loadslipID,'RETRY')\"\n                    class=\"table-btn mr-10\">Check Consent\n                  </button>\n                </div>\n              </div>\n              <div class=\"col-sm-6 col-md-5 col-5\">\n                <div class=\"flow-btns tab-flow-btns\">\n                  \n                  <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"fileInput.click()\" class=\"table-btn mr-10\">\n                    <span>Upload</span>\n                    <input #fileInput type=\"file\" (change)=\"onFileInput($event)\" style=\"display:none;\" accept=\".png, .jpg, .jpeg, .pdf\" />\n                  </button>\n             \n                </div>\n              </div>\n              \n            </div>\n            <div class=\"row\" *ngIf=\"totalMaterialWeight < 95\">\n              <div class=\"col-sm-12\">\n                <div class=\"form-group inputbordered width-6-5\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"Approval Reason\" [(ngModel)]=\"goApprovalReason\" name=\"goApprovalReason\"\n                    >\n                    <mat-option [value]=\"\"></mat-option>\n                     \n                     <mat-option *ngFor=\"let goApprovalReason of goApprovalReasonList;\" [value]=\"goApprovalReason\">\n                      {{goApprovalReason}}\n                    </mat-option>\n\n                  \n                   \n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n          <div class=\"col-sm-1\">\n            <div class=\"bordered\">\n              <div>Truck Capacity</div>\n              <div>\n                <b>{{truckCapacity}}</b>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mb-3\">\n    <div class=\"datatable\">\n      <ngx-datatable class='material no-scroll-table' [rows]='loadSlipData' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n        [limit]=\"200\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [rowClass]=\"getRowClass\" [scrollbarH]=\"true\">\n        <ngx-datatable-column name=\"Material Code\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"ITEM_ID\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.ITEM_ID || \"--\"}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Material Description\" [width]=\"250\" [resizeable]=\"false\" [sortable]=\"false\"\n          prop=\"ITEM_DESCRIPTION\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.ITEM_DESCRIPTION || \"--\"}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Cat\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"ITEM_CATEGORY\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.ITEM_CATEGORY || \"--\"}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Batch\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"BATCH_CODE\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n            <!-- Batch Code can editble only for RDC , not for FGS -->\n            <!-- FGS ROLES -->\n            <ng-container *ngIf=\"!is_Role_RDC()\">\n              <span> {{row.BATCH_CODE}} </span>\n            </ng-container>\n            <!-- RDC ROLE -->\n            <ng-container *ngIf=\"is_Role_RDC()\">\n              <div *ngIf=\"!sostoNumber\">\n                <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-BATCH_CODE'] = true\"\n                  *ngIf=\"!editing[rowIndex + '-BATCH_CODE']\">\n                  <span class=\"edit-label\"> {{row.BATCH_CODE}} </span>\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </div>\n                <div *ngIf=\"editing[rowIndex + '-BATCH_CODE']\">\n                  <input class=\"input-field\" (keyup)=\"updateValue($event, 'BATCH_CODE', rowIndex,row)\"\n                    autocomplete=\"off\" *ngIf=\"editing[rowIndex+ '-BATCH_CODE']\" type=\"text\" [value]=\"row.BATCH_CODE\"\n                    oninput=\"this.value = this.value.toUpperCase()\" />\n                </div>\n              </div>\n              <div *ngIf=\"sostoNumber\">\n                <span class=\"edit-label\"> {{row.BATCH_CODE}} </span>\n              </div>\n            </ng-container>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Priority\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"MIN_PRIORITY\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.MIN_PRIORITY || \"--\"}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Available Qty\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"SUM_QTY\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.SUM_QTY || \"0\"}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Qty\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"qty\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\"\n            let-row=\"row\">\n            <div *ngIf=\"!sostoNumber\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-qty'] = true\"\n                *ngIf=\"!editing[rowIndex + '-qty']\">\n                <span class=\"edit-label\">{{row.qty || \"--\"}} </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <mat-form-field *ngIf=\"editing[rowIndex + '-qty']\">\n                <input matInput (keyup)=\"updateValue($event, 'qty', rowIndex,row)\" (blur)=\"calculateMaterialWeight(row)\"\n                  (keypress)=\"service.numberOnly($event)\" autocomplete=\"off\" *ngIf=\"editing[rowIndex+ '-qty']\"\n                  type=\"text\" [value]=\"row.qty?row.qty:''\" />\n              </mat-form-field>\n            </div>\n            <span *ngIf=\"sostoNumber\">{{row.qty || \"--\"}} </span>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Scannable\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"scanQty\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.isScannable || \"--\"}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Scan Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"scannedQty\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.scannedQty || \"0\"}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Tube Code\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"TUBE_CODE\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n            <div *ngIf=\"!sostoNumber\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-TUBE_CODE'] = true\"\n                *ngIf=\"!editing[rowIndex + '-TUBE_CODE']\">\n                <span class=\"edit-label\"> {{row.TUBE_CODE}} </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <div *ngIf=\"editing[rowIndex + '-TUBE_CODE']\">\n                <input class=\"input-field\" (keyup)=\"updateValue($event, 'TUBE_CODE', rowIndex,row)\" autocomplete=\"off\"\n                  type=\"text\" [value]=\"row.TUBE_CODE\" oninput=\"this.value = this.value.toUpperCase()\" />\n              </div>\n            </div>\n            <div *ngIf=\"sostoNumber\">\n              <span class=\"edit-label\"> {{row.TUBE_CODE}} </span>\n            </div>\n\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Tube Batch\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"tubeBatch\">\n\n          <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n            <div *ngIf=\"!sostoNumber\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-tubeBatch'] = true\"\n                *ngIf=\"!editing[rowIndex + '-tubeBatch']\">\n                <span class=\"edit-label\"> {{row.tubeBatch}} </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"\n                  *ngIf=\"((row.tubeBatch) || (row.tubeBatch == undefined) )\"></i>\n              </div>\n              <mat-form-field *ngIf=\"editing[rowIndex + '-tubeBatch']\">\n                <input matInput (keyup)=\"updateValue($event, 'tubeBatch', rowIndex,row)\" autocomplete=\"off\"\n                  *ngIf=\"editing[rowIndex+ '-tubeBatch']\" type=\"text\" [value]=\"row.tubeBatch\"\n                  oninput=\"this.value = this.value.toUpperCase()\" />\n              </mat-form-field>\n            </div>\n            <span *ngIf=\"sostoNumber\">{{row.tubeBatch}} </span>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Tube Qty\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"totalTubeQty\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n            <div *ngIf=\"!sostoNumber\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-totalTubeQty'] = true\"\n                *ngIf=\"!editing[rowIndex + '-totalTubeQty']\">\n                <span class=\"edit-label\"> {{row.totalTubeQty}} </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <div *ngIf=\"editing[rowIndex + '-totalTubeQty']\">\n                <input class=\"input-field\" (keyup)=\"updateValue($event, 'totalTubeQty', rowIndex,row)\"\n                  autocomplete=\"off\" type=\"text\" [value]=\"row.totalTubeQty\" />\n              </div>\n            </div>\n            <div *ngIf=\"sostoNumber\">\n              <span class=\"edit-label\"> {{row.totalTubeQty}} </span>\n            </div>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Flap Code\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"FLAP_CODE\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n            <div *ngIf=\"!sostoNumber\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-FLAP_CODE'] = true\"\n                *ngIf=\"!editing[rowIndex + '-FLAP_CODE']\">\n                <span class=\"edit-label\"> {{row.FLAP_CODE}} </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <div *ngIf=\"editing[rowIndex + '-FLAP_CODE']\">\n                <input class=\"input-field\" (keyup)=\"updateValue($event, 'FLAP_CODE', rowIndex,row)\" autocomplete=\"off\"\n                  type=\"text\" [value]=\"row.FLAP_CODE\" oninput=\"this.value = this.value.toUpperCase()\" />\n              </div>\n            </div>\n            <div *ngIf=\"sostoNumber\">\n              <span class=\"edit-label\"> {{row.FLAP_CODE}} </span>\n            </div>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Flap Batch\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"flapBatch\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n            <div *ngIf=\"!sostoNumber\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-flapBatch'] = true\"\n                *ngIf=\"!editing[rowIndex + '-flapBatch']\">\n                <span class=\"edit-label\"> {{row.flapBatch}} </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <mat-form-field *ngIf=\"editing[rowIndex + '-flapBatch']\">\n                <input matInput (keyup)=\"updateValue($event, 'flapBatch', rowIndex,row)\" autocomplete=\"off\"\n                  *ngIf=\"editing[rowIndex+ '-flapBatch']\" type=\"text\" [value]=\"row.flapBatch\"\n                  oninput=\"this.value = this.value.toUpperCase()\" />\n              </mat-form-field>\n            </div>\n            <span *ngIf=\"sostoNumber\">{{row.flapBatch}} </span>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Flap Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"totalFlapQty\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n            <div *ngIf=\"!sostoNumber\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-totalFlapQty'] = true\"\n                *ngIf=\"!editing[rowIndex + '-totalFlapQty']\">\n                <span class=\"edit-label\"> {{row.totalFlapQty}} </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <div *ngIf=\"editing[rowIndex + '-totalFlapQty']\">\n                <input class=\"input-field\" (keyup)=\"updateValue($event, 'totalFlapQty', rowIndex,row)\"\n                  autocomplete=\"off\" type=\"text\" [value]=\"row.totalFlapQty\" />\n              </div>\n            </div>\n            <div *ngIf=\"sostoNumber\">\n              <span class=\"edit-label\"> {{row.totalFlapQty}} </span>\n            </div>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Valve Code\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"VALVE_CODE\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n            <div *ngIf=\"!sostoNumber\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-VALVE_CODE'] = true\"\n                *ngIf=\"!editing[rowIndex + '-VALVE_CODE']\">\n                <span class=\"edit-label\"> {{row.VALVE_CODE}} </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <div *ngIf=\"editing[rowIndex + '-VALVE_CODE']\">\n                <input class=\"input-field\" (keyup)=\"updateValue($event, 'VALVE_CODE', rowIndex,row)\" autocomplete=\"off\"\n                  type=\"text\" [value]=\"row.VALVE_CODE\" oninput=\"this.value = this.value.toUpperCase()\" />\n              </div>\n            </div>\n            <div *ngIf=\"sostoNumber\">\n              <span class=\"edit-label\"> {{row.VALVE_CODE}} </span>\n            </div>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Valve Batch\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\"\n          prop=\"VALVE_DESC\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n            <div *ngIf=\"!sostoNumber\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-valveBatch'] = true\"\n                *ngIf=\"!editing[rowIndex + '-valveBatch']\">\n                <span class=\"edit-label\"> {{row.valveBatch}} </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <div *ngIf=\"editing[rowIndex + '-valveBatch']\">\n                <input class=\"input-field\" (keyup)=\"updateValue($event, 'valveBatch', rowIndex,row)\" autocomplete=\"off\"\n                  type=\"text\" [value]=\"row.valveBatch\" oninput=\"this.value = this.value.toUpperCase()\" />\n              </div>\n            </div>\n            <div *ngIf=\"sostoNumber\">\n              <span class=\"edit-label\"> {{row.valveBatch}} </span>\n            </div>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Valve Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\"\n          prop=\"totalValueQty\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n            <div *ngIf=\"!sostoNumber\">\n              <div class=\"edit-field\" title=\"Double click to edit\" (click)=\"editing[rowIndex + '-totalValueQty'] = true\"\n                *ngIf=\"!editing[rowIndex + '-totalValueQty']\">\n                <span class=\"edit-label\"> {{row.totalValueQty}} </span>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <div *ngIf=\"editing[rowIndex + '-totalValueQty']\">\n                <input class=\"input-field\" (keyup)=\"updateValue($event, 'totalValueQty', rowIndex,row)\"\n                  autocomplete=\"off\" type=\"text\" [value]=\"row.totalValueQty\" />\n              </div>\n            </div>\n            <div *ngIf=\"sostoNumber\">\n              <span class=\"edit-label\"> {{row.totalValueQty}} </span>\n            </div>\n          </ng-template>\n        </ngx-datatable-column>\n        <!-- Colums enable only if the STO/SO Number is available -->\n        <div *ngIf=\"!sostoNumber\">\n          <ngx-datatable-column name=\"Actions\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\"\n            prop=\"totalValueQty\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              <!-- Split only visible for RDC role and if loadslip created  -->\n              <button class=\"theme-small-button\" (click)=\"split(row)\"\n                *ngIf=\"(service.checkRole() == roles.rdc_PLN) && (isLoadslipIdAvaliable) && ((row.isSplit != 'Y') || (row.isSplit == ''))\">\n                <i class=\"fa fa-code-fork fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n              <!--  Delete Button only visible if the loadslip is created -->\n              <button class=\"theme-delete-button\" (click)=\"deleteRow(row)\"\n                *ngIf=\"isLoadslipIdAvaliable && ((row.canLSItemDeleted) || (row.destinationItem))\">\n                <i class=\"fa fa-trash fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n            </ng-template>\n          </ngx-datatable-column>\n        </div>\n\n\n      </ngx-datatable>\n    </div>\n  </div>\n  <div align=\"center\" *ngIf=\"loadSlipData.length > 0\">\n    <button mat-stroked-button color=\"primary\" class=\"mr-3\" (click)=\"cancelLoadslipCreation()\"\n      *ngIf=\"!(loadslipID)\">Cancel</button>\n\n    <button mat-raised-button color=\"primary\" type=\"button\" class=\"btm-action-btn\"\n      (click)=\"saveAsDraft_Print_trigger('DRAFT')\" [disabled]=\"isScanItemCheck\" *ngIf=\"!sostoNumber\">Save\n      as Draft</button>\n  </div>\n  <div class=\"mb-3\" *ngIf=\"(destinationWisePlans.length > 0) && (loadslipID) && !sostoNumber\">\n    <ngx-datatable class='material no-scroll-table destination-table ' [rows]='destinationWisePlans'\n      [columnMode]=\"'force'\" [headerHeight]=\"50\" [limit]=\"200\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\n      [scrollbarH]=\"true\">\n      <ngx-datatable-column name=\"Material Code\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"ITEM_ID\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.ITEM_ID || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Material Description\" [width]=\"250\" [resizeable]=\"false\" [sortable]=\"false\"\n        prop=\"ITEM_DESCRIPTION\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.ITEM_DESCRIPTION || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Cat\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"ITEM_CATEGORY\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.ITEM_CATEGORY || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Batch\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"BATCH_CODE\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.BATCH_CODE || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Priority\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"MIN_PRIORITY\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.MIN_PRIORITY || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Available Qty\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"SUM_QTY\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.SUM_QTY || \"0\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Qty\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"qty\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n          <span>{{row.qty || \"--\"}} </span>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Scannable\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"scanQty\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.isScannable || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Scan Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"scanQty\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.scanQty || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Tube Code\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"TUBE_CODE\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.TUBE_CODE || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Tube Batch\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"tubeBatch\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n          <span>{{row.tubeBatch}} </span>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Tube Qty\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"totalTubeQty\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totalTubeQty?row.totalTubeQty:''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Flap Code\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"FLAP_CODE\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.FLAP_CODE || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Flap Batch\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"flapBatch\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n          <span>{{row.flapBatch}} </span>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Flap Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"totalFlapQty\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totalFlapQty?row.totalFlapQty:''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Valve Code\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"VALVE_CODE\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.VALVE_CODE || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Valve Batch\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"VALVE_DESC\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.valveBatch || \"--\"}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Valve Qty\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"totalValueQty\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\n          {{row.totalValueQty?row.totalValueQty:''}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Actions\" [width]=\"70\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"totalValueQty\">\n        <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n          <button class=\"theme-small-button\" (click)=\"add(row,rowIndex)\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          </button>\n        </ng-template>\n      </ngx-datatable-column>\n    </ngx-datatable>\n  </div>\n\n</div>\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\" data-keyboard=\"false\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Select Pickup Location</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <mat-form-field>\n          <mat-select [(ngModel)]=\"shareTruckLocation\" name=\"shareTruckLocation\" placeholder=\"Select Pickup Location\">\n            <mat-option *ngFor=\"let sharebledestination of shareTrcukDestinations\" [value]=\"sharebledestination\">\n              {{sharebledestination}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"shareTruck()\">Confirm</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal\" id=\"confirmeeventresposeModal\" data-keyboard=\"false\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n          Message !!!\n        </h4>\n        <button type=\"button\" data-dismiss=\"modal\" class=\"close\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <p class=\"text-center\">{{confirmeventmessage}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/fgs-operations/create-load-slip/create-load-slip.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/fgs-operations/create-load-slip/create-load-slip.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zncy1vcGVyYXRpb25zL2NyZWF0ZS1sb2FkLXNsaXAvY3JlYXRlLWxvYWQtc2xpcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/fgs-operations/create-load-slip/create-load-slip.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/fgs-operations/create-load-slip/create-load-slip.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateLoadSlipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLoadSlipComponent", function() { return CreateLoadSlipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_public_loadslip_cancel_popup_loadslip_cancel_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/public/loadslip-cancel-popup/loadslip-cancel-popup.component */ "./src/app/public/loadslip-cancel-popup/loadslip-cancel-popup.component.ts");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var src_app_public_loadslip_success_dialog_loadslip_success_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/public/loadslip-success-dialog/loadslip-success-dialog.component */ "./src/app/public/loadslip-success-dialog/loadslip-success-dialog.component.ts");
/* harmony import */ var src_app_public_create_loadslips_error_popup_create_loadslips_error_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/public/create-loadslips-error-popup/create-loadslips-error-popup.component */ "./src/app/public/create-loadslips-error-popup/create-loadslips-error-popup.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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










var CreateLoadSlipComponent = /** @class */ (function () {
    function CreateLoadSlipComponent(service, router, ActivatedRoute, toastr, dialog) {
        this.service = service;
        this.router = router;
        this.ActivatedRoute = ActivatedRoute;
        this.toastr = toastr;
        this.dialog = dialog;
        this.shareTrcukDestinations = [];
        this.isLoading = false;
        this.destinationWisePlans = [];
        this.page = {
            limit: 100,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.actualTruckTypeList = [];
        this.loadSlipData = [];
        this.source = '';
        this.destination = '';
        this.truckType = '';
        this.minDate = new Date();
        this.editing = {};
        this.createLoadSlipSuccess = false;
        this.truckTypes = [];
        this.isLoadslipIdAvaliable = false;
        this.loadslipTteUtil = 0;
        this.loadslipWtUtil = 0;
        this.loadslipVolUtil = 0;
        this.variant_one_List = [];
        this.variant_two_List = [];
        this.dropSeqList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.lastSplittedItems = {};
        this.isDraftMode = true;
        this.isScanItemCheck = false;
        this.totalTTEQty = 0;
        this.generateLr = false;
        this.totalOthersCount = 0;
        this.selectedCategories = [];
        this.goApprovalReasonList = [];
        this.getRowClass = function (row) {
            console.log('rowClass');
            return {
                'row-color': (row.isSplit == 'Y'),
                'row-red-color': (row.destinationItem)
            };
        };
    }
    CreateLoadSlipComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "load-slip");
        this.isLoading = true;
        this.userSource = localStorage.getItem("sourceID");
        this.loadslipID = this.ActivatedRoute.snapshot.params['loadslipId'];
        this.viewType = this.ActivatedRoute.snapshot.params['viewType'];
        this.route_shipmentNumber = this.ActivatedRoute.snapshot.queryParams['shipmentNumber'];
        this.shipmentNumber = this.route_shipmentNumber;
        this.roles = src_app_constants__WEBPACK_IMPORTED_MODULE_6__["constants"].roles;
        this.pageSize = 20;
        this.page.limit = 20;
        // For Normal Loadslip Procress
        if (this.loadslipID) {
            this.isLoadslipIdAvaliable = true;
            // Get If Transpoter is registered for e-load receipt
            // this.getElrFlag();
            this.getLoadSlipDetailsById();
        }
        else if (this.route_shipmentNumber) {
            this.getLoadSlipUtilazationFromServer('', '', this.route_shipmentNumber);
            this.getDestinationList();
        }
        else {
            this.getDestinationList();
        }
        // get variants 
        this.getvariants();
        this.goApprovalReasonList = ['Lesser Dimension Truck', 'Unavailability of a sufficient plan', 'Plan for SXL truck but loaded the MXL truck : SXL Truck not Available', 'The required truck type is not available', 'OE Dispatch: Load as per OE Standards', 'Truck loaded with fewer tyres because of safety reasons'];
    };
    // Check multi stop 
    CreateLoadSlipComponent.prototype.checkMultiStop = function () {
        //check multi stop on based on the shipmentNumber,TruckNumber,Typeof truck if we get from the Route Params
        // We can the Boolean of MULTI stop 
        if ((this.route_shipmentNumber) || (this.IS_MULTI_STOP)) {
            return true;
        }
        else {
            return false;
        }
    };
    CreateLoadSlipComponent.prototype.getElrFlag = function () {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getElrFlag + "?loadslipId=" + this.loadslipID).subscribe(function (response) {
            if (response['statusCode'] == 200 && response["data"] == 'Y') {
                //|| response["data"] == 'N'
                _this.elrFlag = true;
                _this.lrNum = response['opsId'];
            }
        });
    };
    CreateLoadSlipComponent.prototype.setLrButton = function () {
        if (this.lrNum !== null && this.lrNum !== undefined) {
            this.printLr = true;
            this.generateLr = false;
        }
        else {
            this.printLr = false;
            this.generateLr = true;
        }
    };
    // Generate Lr number
    CreateLoadSlipComponent.prototype.generateLrNum = function () {
        var _this = this;
        console.log("**** generateLrNum");
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.generateLrNum + "?loadslipId=" + this.loadslipID).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.lrNum = response["opsId"];
                _this.generateLr = false;
                _this.printLr = true;
                _this.isLoading = false;
            }
        });
    };
    // download load receipt
    CreateLoadSlipComponent.prototype.downloadLoadReceipt = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.printLoadReceipt + "?loadslipId=" + this.loadslipID).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var responseData = response['data'];
                var lrNo = response['opsId'];
                var linkSource = 'data:application/pdf;base64,' + responseData;
                var element = document.createElement('a');
                element.setAttribute('href', linkSource);
                element.setAttribute('download', lrNo);
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
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    CreateLoadSlipComponent.prototype.getLoadSlipDetailsById = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLoadSlipDetailsByID + "/" + this.loadslipID).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var responseData = response['data'];
                _this.destination = responseData.destination;
                _this.description = responseData.description;
                _this.city = responseData.city;
                _this.shipmentNumber = responseData.shipmentID;
                _this.loadslipCategory = responseData.loadslipCategory;
                _this.bayArrivedDate = responseData.bayArrivedDate;
                _this.loadingStartDate = responseData.loadingStartDate;
                _this.loadingEndDate = responseData.loadingEndDate;
                _this.confirmedDate = responseData.confirmedDate;
                _this.releasedDate = responseData.releasedDate;
                _this.lsPrintDate = responseData.lsPrintDate;
                _this.sendForBarcodeDate = responseData.sendForBarcodeDate;
                _this.bay = responseData.bay;
                _this.ShipTo = responseData.shipTo;
                _this.truckType = responseData.truckNumber;
                _this.IS_Truck_Part_of_Loadslip = responseData.truckNumber;
                _this.multistopTruckNumber = responseData.truckNumber;
                _this.IS_MULTI_STOP = responseData.multiStop;
                _this.totalTyres = responseData.totalTyres;
                _this.totalTubes = responseData.totalTubes;
                _this.totalFlaps = responseData.totalFlaps;
                _this.totalValves = responseData.totalValves;
                _this.totalPctr = responseData.totPctr;
                _this.totalOthersCount = responseData.otherQty;
                _this.dropSeq = responseData.dropSeq;
                _this.freightAvailableflag = responseData.freightAvailableflag;
                _this.sostoNumber = responseData.sostoNumber;
                _this.sapInvoice = responseData.sapInvoice;
                _this.STOSONumber = responseData.sostoNumberVal;
                _this.totalTTEQty = responseData.totalTTE;
                _this.totalQuantity = responseData.totQty;
                _this.totalWeight = responseData.totalWeight;
                // loadslip selecte categories 
                _this.selectedCategories = responseData.selectedItemCategories;
                // Last splitted object
                _this.lastSplittedItems = responseData.splitNumbersMap;
                // Shipment level values
                _this.totalTTESeletecd = responseData.shipmentTTEUtil;
                _this.totalMaterialWeight = responseData.shipmentWeightUtil;
                _this.totalTruckVolume = responseData.shipmentVolumeUtil;
                //Loads slip values 
                _this.loadslipTteUtil = responseData.tteUtil;
                _this.loadslipWtUtil = responseData.weightUtil;
                _this.loadslipVolUtil = responseData.volumeUtil;
                _this.totalLoadedQty = responseData.totalLoadedQty;
                _this.itemLevelTotalTTE = responseData.totalTTE;
                _this.itemLevelTotalWeight = responseData.totalWeight;
                _this.itemLevelTotalVolume = responseData.totalVolume;
                _this.truckT = responseData.truckType;
                _this.transporter = responseData.servprov;
                _this.indentCategory = responseData.truckIndentCategory;
                // variants & Actual Truck Type
                _this.variant_ONE = responseData.variant1;
                _this.actualTruckType = responseData.actualTruckType;
                _this.truckCapacity = responseData.truckWeightCapacity;
                _this.isDraftMode = responseData.isInDraft;
                // ELR Flag, LR Number
                _this.elrFlag = responseData.elrFlag;
                _this.lrNum = responseData.elrNumber;
                _this.trackingConsentStatus = responseData.trackingConsentStatus;
                _this.consentPhoneTelecom = responseData.consentPhoneTelecom;
                // Set if LR is to be Generated or Printed
                _this.setLrButton();
                _this.isLoading = false;
                _this.getTruckTypesForDest(_this.destination);
                // this.truckCapacity = responseData.truckCapacity;
                //get the loadslip plans & truckdetails
                _this.getLoadslipPlanByDestination(responseData, _this.destination, '');
                _this.goApprovalReason = responseData.goApprovalReason;
                console.log("Response Go Approval", responseData.goApprovalReason, "and local variable: ", _this.goApprovalReason);
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong");
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            // this.isLoading = false;
        });
    };
    CreateLoadSlipComponent.prototype.getLoadslipPlanByDestination = function (responseData, destination, category) {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLoadSlipsPlans + "?destLoc=" + destination + "&loadslipId=" + this.loadslipID + "&itemCategory=" + category).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                var repsonseData = response['data'];
                // Trucktype save data from server
                _this.truckTypes = repsonseData.gatedInTrucks;
                // Form Market segment (TUBE,FLAP,VALVE batch code )
                _this.marketSegmentMap = repsonseData.marketSegmentMap;
                // destination related plans list
                _this.destinationWisePlans = repsonseData.loadSlipPlans;
                // category list 
                _this.categoryList = repsonseData.itemCategories;
                // this.category = this.selectedCategories;
                // Logic for Tube Batch & Flap batch 
                // 1. Currently we are defaulting Batch Code for Tube and Flap as below:
                //If tyre batch code ends with CC(last 2 digits), then default Tube and Flap batch code to BOCC.
                // If tyre batch code ends with KZ(last 2 digits), then default Tube and Flap batch code to BOKZ.
                //a.Marketing segment is REP: BOAW
                //b.Marketing segment is OE: BOOE
                //c.Marketing segment is EXPORT: BOEX
                _this.destinationWisePlans.forEach(function (data) {
                    if (data.BATCH_CODE.endsWith('CC')) {
                        if (data['TUBE_CODE']) {
                            data['tubeBatch'] = 'BOCC';
                        }
                        if (data['FLAP_CODE']) {
                            data['flapBatch'] = 'BOCC';
                        }
                    }
                    else if (data.BATCH_CODE.endsWith('KZ')) {
                        if (data['TUBE_CODE']) {
                            data['tubeBatch'] = 'BOKZ';
                        }
                        if (data['FLAP_CODE']) {
                            data['flapBatch'] = 'BOKZ';
                        }
                    }
                    else {
                        if (data['TUBE_CODE']) {
                            data['tubeBatch'] = _this.getBOMbatchCode(data.MARKET_SEGMENT);
                        }
                        if (data['FLAP_CODE']) {
                            data['flapBatch'] = _this.getBOMbatchCode(data.MARKET_SEGMENT);
                        }
                    }
                });
                _this.destinationWisePlans = _this.destinationWisePlans.slice();
                //Add a new Object Which are getting from server
                var newObject = {
                    "TRUCK_NUMBER": responseData.truckNumber,
                    "TRUCK_TYPE": responseData.truckType,
                    "SERVPROV": responseData.servprov,
                    "ITEM_CATEGORY": responseData.truckIndentCategory
                };
                // Push the data into the object If it is not availble in the data for Default Selection
                var findTruck = _this.truckTypes.findIndex(function (data) { return data.TRUCK_NUMBER == responseData.truckNumber; });
                if (findTruck == -1 && newObject.TRUCK_NUMBER) {
                    // To avoid adding empty object
                    _this.truckTypes.push(newObject);
                }
                _this.shiptoPlaceList = repsonseData.shipmentToLocs;
                _this.trackDetailsObj = _this.truckTypes.find(function (truckObj) { return truckObj.TRUCK_NUMBER == _this.truckType; });
                var respData = _this.trackDetailsObj;
                _this.isLoading = false;
                if (respData) {
                    //get the Utilization data
                    _this.getLoadSlipUtilazationFromServer(respData.TRUCK_NUMBER, respData.TRUCK_TYPE, _this.shipmentNumber);
                }
                // this.isLoading = false;
                // Set table data
                _this.setLoadslipDatatableData(responseData);
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error");
                return false;
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            //this.isLoading = false;
            return false;
        });
    };
    //get Destination wise plans after save as Draft
    CreateLoadSlipComponent.prototype.destinationwisePlans = function (destination) {
        var _this = this;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLoadSlipsPlans + "?destLoc=" + destination + "&loadslipId=" + this.loadslipID).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                var repsonseData = response['data'];
                // destination related plans list
                _this.destinationWisePlans = repsonseData.loadSlipPlans;
                _this.destinationWisePlans = _this.destinationWisePlans.slice();
                _this.marketSegmentMap = repsonseData.marketSegmentMap;
                _this.categoryList = repsonseData.itemCategories;
                _this.destinationWisePlans.forEach(function (data) {
                    if (data.BATCH_CODE.endsWith('CC')) {
                        if (data['TUBE_CODE']) {
                            data['tubeBatch'] = 'BOCC';
                        }
                        if (data['FLAP_CODE']) {
                            data['flapBatch'] = 'BOCC';
                        }
                    }
                    else if (data.BATCH_CODE.endsWith('KZ')) {
                        if (data['TUBE_CODE']) {
                            data['tubeBatch'] = 'BOKZ';
                        }
                        if (data['FLAP_CODE']) {
                            data['flapBatch'] = 'BOKZ';
                        }
                    }
                    else {
                        if (data['TUBE_CODE']) {
                            data['tubeBatch'] = _this.getBOMbatchCode(data.MARKET_SEGMENT);
                        }
                        if (data['FLAP_CODE']) {
                            data['flapBatch'] = _this.getBOMbatchCode(data.MARKET_SEGMENT);
                        }
                    }
                    if (_this.service.checkRole() == _this.roles.rdc_PLN) {
                        data['qty'] = data.SUM_QTY;
                    }
                });
                _this.destinationWisePlans = _this.destinationWisePlans.slice();
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
        });
    };
    CreateLoadSlipComponent.prototype.setLoadslipDatatableData = function (responseData) {
        var _this = this;
        this.loadSlipData = [];
        if (responseData.loadslipDraftDataDtos) {
            responseData.loadslipDraftDataDtos.forEach(function (data) {
                var newData = {
                    "BATCH_CODE": data.batchCode,
                    "qty": data.loadedQty,
                    "lineNumber": data.lineNumber,
                    "ITEM_DESCRIPTION": data.itemDesc,
                    "ITEM_ID": data.itemId,
                    "VOLUME": data.grossVol,
                    "WEIGHT": data.grossWt,
                    "TTE": data.tte,
                    "SUM_QTY": data.availableQty,
                    "ITEM_CATEGORY": data.itemCategory,
                    "ITEM_CLASSIFICATION": data.itemClassification,
                    "MIN_PRIORITY": data.priority,
                    "isScannable": data.isScannable,
                    "scannedQty": data.scannedQty,
                    "isSplit": data.isSplit,
                    // flap details
                    "FLAP_DESC": data.flapDesc,
                    "flapBatch": data.flapBatch,
                    "FLAP_CODE": data.flapSKU,
                    "FLAP_COMP_QTY": data.flapCompQty,
                    "totalFlapQty": data.falpQty,
                    //tube details
                    "tubeBatch": data.tubeBatch,
                    "TUBE_CODE": data.tubeSKU,
                    "TUBE_COMP_QTY": data.tubeCompQty,
                    "totalTubeQty": data.tubeQty,
                    "TUBE_DESC": data.tubeDesc,
                    //value details
                    "valveBatch": data.valveBatch,
                    "VALVE_DESC": data.valveDesc,
                    "VALVE_CODE": data.valveSKU,
                    "VALVE_COMP_QTY": data.valveCompQty,
                    "totalValueQty": data.valveQty,
                    "canLSItemDeleted": data.canLSItemDeleted
                };
                _this.loadSlipData.push(newData);
                _this.loadSlipData = _this.loadSlipData.slice();
            });
        }
    };
    CreateLoadSlipComponent.prototype.getLoadSlipUtilazationFromServer = function (truckNumber, truckType, shipmentNumber) {
        var _this = this;
        this.isLoading = true;
        var data = {
            truckNumber: truckNumber,
            trucktype: truckType,
            shipmentId: shipmentNumber,
            actucaltrucktype: this.actualTruckType,
            variant1: this.variant_ONE
        };
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLoadSlipUtlizations, data).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                var truckRepsonseData = response['data'];
                _this.loadslipUtilizationData = truckRepsonseData;
                _this.totalTTESeletecd = _this.loadslipUtilizationData.shipmentTotalTTEUtil;
                _this.totalMaterialWeight = _this.loadslipUtilizationData.shipmentTotalWtUtil;
                _this.totalTruckVolume = _this.loadslipUtilizationData.shipmentTotalVolUtil;
                _this.multistopTruckNumber = _this.loadslipUtilizationData.truckNumber;
                _this.multistopTruckType = _this.loadslipUtilizationData.truckType;
                _this.actualTruckType = _this.loadslipUtilizationData.actualTruckType;
                _this.variant_ONE = _this.loadslipUtilizationData.variant1;
                _this.truckT = _this.loadslipUtilizationData.truckType;
                _this.transporter = _this.loadslipUtilizationData.servprov;
                _this.indentCategory = _this.loadslipUtilizationData.truckIndentCategory;
                _this.isLoading = false;
                _this.truckCapacity = _this.loadslipUtilizationData.truckWeightCapacity;
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
    };
    // get the destination list which are under Approval & partiallty Apporved
    CreateLoadSlipComponent.prototype.getDestinationList = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getOpenDestinations).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                _this.destinationList = response['data'].destinationList;
                _this.descriptionList = response['data'].descriptionList;
                _this.isLoading = false;
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong !", "!Error");
                _this.isLoading = false;
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //get the Truck type list
    CreateLoadSlipComponent.prototype.getTrucksList = function (destination, category, filterType) {
        // Before loadslip creation we can change destination,description
        // after loadslip creation those are not editble fields,destination list also not available
        if (!this.isLoadslipIdAvaliable) {
            var index = null;
            index = this.destinationList.findIndex(function (item) { return item.dest_loc == destination; });
            if (index == -1) {
                index = this.destinationList.findIndex(function (item) { return item.dest_desc == destination; });
            }
            this.destination = this.destinationList[index].dest_loc;
            this.description = this.destinationList[index].dest_desc;
            destination = this.destination;
        }
        this.getLoadSlipsPlansData(destination, category, filterType);
        // Empty below fields if we changed destination
        if (filterType == 'destinationFilter') {
            this.totalTyres = '';
            this.totalTubes = '';
            this.totalValves = '';
            this.truckType = '';
            // If the Shipemnt is not a multistop clear data of TTE Util ,VOUEME Util, Weight Util
            if (!this.checkMultiStop()) {
                this.totalMaterialWeight = 0;
                this.totalTTESeletecd = 0;
                this.totalTruckVolume = 0;
                this.truckT = '';
                this.transporter = '';
                this.indentCategory = '';
                this.totalTTEQty = 0;
                this.variant_ONE = '';
                this.actualTruckType = '';
                this.truckCapacity = '';
            }
        }
    };
    // Truck types based on destination
    CreateLoadSlipComponent.prototype.getTruckTypesForDest = function (destination) {
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
    CreateLoadSlipComponent.prototype.getLoadSlipsPlansData = function (dest, category, filterType) {
        var _this = this;
        this.isLoading = true;
        // to close Category Select 
        this.categorySelect.close();
        var destination = dest;
        var cat = category ? category.toString() : '';
        if (filterType == 'destinationFilter') {
            this.category = [];
            cat = "";
        }
        var loadslipId = this.loadslipID ? this.loadslipID : '';
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLoadSlipsPlans + "?destLoc=" + destination + "&itemCategory=" + cat + "&loadslipId=" + loadslipId).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                var repsonseData = response['data'];
                // If it is first time creation of loadslip
                // Before Loadslip creation we are considering the data loadslip items
                if (!_this.isLoadslipIdAvaliable) {
                    _this.loadSlipData = repsonseData.loadSlipPlans;
                    _this.marketSegmentMap = repsonseData.marketSegmentMap;
                    _this.categoryList = repsonseData.itemCategories;
                    // to get city after destination selection
                    _this.city = repsonseData.city;
                    // 1. Currently we are defaulting Batch Code for Tube and Flap as below:
                    //a.Marketing segment is REP: BOAW
                    //b.Marketing segment is OE: BOOE
                    //c.Marketing segment is EXPORT: BOEX
                    //If tyre batch code ends with CC(last 2 digits), then default Tube and Flap batch code to BOCC.
                    // If tyre batch code ends with KZ(last 2 digits), then default Tube and Flap batch code to BOKZ.
                    _this.loadSlipData.forEach(function (data, index) {
                        if (data.BATCH_CODE.endsWith('CC')) {
                            if (data['TUBE_CODE']) {
                                data['tubeBatch'] = 'BOCC';
                            }
                            if (data['FLAP_CODE']) {
                                data['flapBatch'] = 'BOCC';
                            }
                        }
                        else if (data.BATCH_CODE.endsWith('KZ')) {
                            if (data['TUBE_CODE']) {
                                data['tubeBatch'] = 'BOKZ';
                            }
                            if (data['FLAP_CODE']) {
                                data['flapBatch'] = 'BOKZ';
                            }
                        }
                        else {
                            if (data['TUBE_CODE']) {
                                data['tubeBatch'] = _this.getBOMbatchCode(data.MARKET_SEGMENT);
                            }
                            if (data['FLAP_CODE']) {
                                data['flapBatch'] = _this.getBOMbatchCode(data.MARKET_SEGMENT);
                            }
                        }
                        if (_this.service.checkRole() == _this.roles.rdc_PLN) {
                            // for RDC role we are defaulting qty , that why we need defalut tubeQty,FlapQty
                            data['qty'] = data.SUM_QTY;
                            // total tube quantity caluculation 
                            data.totalTubeQty = (Number(data.TUBE_COMP_QTY) ? Number(data.TUBE_COMP_QTY) : 0) * (Number(data.qty) ? Number(data.qty) : 0);
                            //total flap qunatity caluculation
                            data.totalFlapQty = (Number(data.FLAP_COMP_QTY) ? Number(data.FLAP_COMP_QTY) : 0) * (Number(data.qty) ? Number(data.qty) : 0);
                            _this.ManualTTE_Weight_volume_Calculation();
                        }
                        _this.loadSlipData = _this.loadSlipData.slice();
                    });
                }
                else {
                    // If the Loadslip created we are considering the response data as below grid loadslipItems
                    var repsonseData_1 = response['data'];
                    // // Trucktype save data from server
                    // this.truckTypes = repsonseData.gatedInTrucks;
                    // Form Market segment (TUBE,FLAP,VALVE batch code )
                    _this.marketSegmentMap = repsonseData_1.marketSegmentMap;
                    // destination related plans list
                    _this.destinationWisePlans = repsonseData_1.loadSlipPlans;
                    // category list 
                    // this.categoryList = repsonseData.itemCategories
                    // this.category = this.selectedCategories;
                    // Logic for Tube Batch & Flap batch 
                    // 1. Currently we are defaulting Batch Code for Tube and Flap as below:
                    //If tyre batch code ends with CC(last 2 digits), then default Tube and Flap batch code to BOCC.
                    // If tyre batch code ends with KZ(last 2 digits), then default Tube and Flap batch code to BOKZ.
                    //a.Marketing segment is REP: BOAW
                    //b.Marketing segment is OE: BOOE
                    //c.Marketing segment is EXPORT: BOEX
                    _this.destinationWisePlans.forEach(function (data) {
                        if (data.BATCH_CODE.endsWith('CC')) {
                            if (data['TUBE_CODE']) {
                                data['tubeBatch'] = 'BOCC';
                            }
                            if (data['FLAP_CODE']) {
                                data['flapBatch'] = 'BOCC';
                            }
                        }
                        else if (data.BATCH_CODE.endsWith('KZ')) {
                            if (data['TUBE_CODE']) {
                                data['tubeBatch'] = 'BOKZ';
                            }
                            if (data['FLAP_CODE']) {
                                data['flapBatch'] = 'BOKZ';
                            }
                        }
                        else {
                            if (data['TUBE_CODE']) {
                                data['tubeBatch'] = _this.getBOMbatchCode(data.MARKET_SEGMENT);
                            }
                            if (data['FLAP_CODE']) {
                                data['flapBatch'] = _this.getBOMbatchCode(data.MARKET_SEGMENT);
                            }
                        }
                    });
                    _this.destinationWisePlans = _this.destinationWisePlans.slice();
                }
                // if the filter was destination we need the fetch new truck list 
                // for category filter no need reset the trcuklist ,still remains same list
                if (filterType == 'destinationFilter') {
                    _this.truckTypes = repsonseData.gatedInTrucks;
                }
                _this.shiptoPlaceList = repsonseData.shipmentToLocs;
                _this.isLoading = false;
                _this.getTruckTypesForDest(destination);
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
    };
    //
    CreateLoadSlipComponent.prototype.getBOMbatchCode = function (key) {
        console.log(key);
        return this.marketSegmentMap[key];
    };
    // Update Angular data tablesd
    CreateLoadSlipComponent.prototype.updateValue = function (event, cell, rowIndex, row) {
        var eventValue = event.target.value;
        this.loadSlipData[rowIndex][cell] = eventValue;
        this.loadSlipData = this.loadSlipData.slice();
        console.log('UPDATED!', this.loadSlipData[rowIndex][cell]);
        console.log(this.totalMaterialWeight, "taoafaffsj");
        if (this.totalMaterialWeight < 95)
            this.totalMaterialWeightFlag = true;
        else
            this.totalMaterialWeightFlag = '';
    };
    CreateLoadSlipComponent.prototype.calculateMaterialWeight = function (row) {
        var _this = this;
        // If the scan Qty is he can't do qty as zero 
        if ((row.scannedQty > 0) && ((row.qty == 0) || (row.qty == ''))) {
            this.isScanItemCheck = true;
            this.toastr.error("Qty sholud grather than Zero");
        }
        else {
            this.isScanItemCheck = false;
            this.totalLoadedQty = 0;
            this.itemLevelTotalTTE = 0;
            this.itemLevelTotalWeight = 0;
            this.itemLevelTotalVolume = 0;
            this.totalTTEQty = 0;
            // total tube quantity caluculation 
            row.totalTubeQty = (Number(row.TUBE_COMP_QTY) ? Number(row.TUBE_COMP_QTY) : 0) * (Number(row.qty) ? Number(row.qty) : 0);
            //total flap qunatity caluculation
            row.totalFlapQty = (Number(row.FLAP_COMP_QTY) ? Number(row.FLAP_COMP_QTY) : 0) * (Number(row.qty) ? Number(row.qty) : 0);
            //total flap quantity caluculation
            // row.totalValueQty = (Number(row.VALVE_COMP_QTY) ? Number(row.VALVE_COMP_QTY) : 0) * (Number(row.qty) ? Number(row.qty) : 0);
            this.loadSlipData.forEach(function (row) {
                if (row.qty && (row.qty != null)) {
                    var qty = Number(row.qty);
                    // Item Level Calculations
                    _this.itemLevelTotalTTE += qty * (row.TTE ? row.TTE : 0);
                    _this.itemLevelTotalWeight += qty * (row.WEIGHT ? row.WEIGHT : 0);
                    _this.itemLevelTotalVolume += qty * (row.VOLUME ? row.VOLUME : 0);
                    _this.totalLoadedQty += qty;
                }
            });
            //total TTE QTY for View LS page
            this.totalTTEQty = this.itemLevelTotalTTE;
            //total Material Weight  filled In the Truck
            if ((this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : '') != null && (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : '') != 0) {
                // Check multi-Drop or Normal Creation for Adding Weight Util
                if (this.checkMultiStop()) {
                    this.totalMaterialWeight = ((this.itemLevelTotalWeight / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : '')) * 100);
                    this.totalMaterialWeight = (this.totalMaterialWeight + (this.loadslipUtilizationData ? this.loadslipUtilizationData.shipmentTotalWtUtil : '')) - this.loadslipWtUtil;
                }
                else {
                    this.totalMaterialWeight = ((this.itemLevelTotalWeight / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : '')) * 100);
                }
            }
            //Total  TTE filled int the Truck
            if ((this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : '') != null && (this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : '') != 0) {
                //Check TTE Util for Multi-Drop or Noramal Loadslip creation
                if (this.checkMultiStop()) {
                    this.totalTTESeletecd = ((this.itemLevelTotalTTE / (this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : '')) * 100);
                    this.totalTTESeletecd = (this.totalTTESeletecd + (this.loadslipUtilizationData ? this.loadslipUtilizationData.shipmentTotalTTEUtil : '')) - this.loadslipTteUtil;
                }
                else {
                    this.totalTTESeletecd = ((this.itemLevelTotalTTE / (this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : '')) * 100);
                }
            }
            // Total Volume Occupied in The Truck 
            if ((this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : '') != null && (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : '') != 0) {
                if (this.checkMultiStop()) {
                    this.totalTruckVolume = ((this.itemLevelTotalVolume / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : '')) * 100);
                    this.totalTruckVolume = (this.totalTruckVolume + (this.loadslipUtilizationData ? this.loadslipUtilizationData.shipmentTotalVolUtil : '')) - this.loadslipVolUtil;
                }
                else {
                    this.totalTruckVolume = ((this.itemLevelTotalVolume / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : '')) * 100);
                }
            }
        }
    };
    // get Load slip Utilizations 
    CreateLoadSlipComponent.prototype.getLoadSlipUtilazations = function (truckNumber) {
        var _this = this;
        // Before marking the service call we are checking whether truck is select or None
        // If the truck is there is there we are service
        // If the value is none we are going reset trucktype,Transporter,shipTo, Actual truck type,variant,TTE values
        if (truckNumber) {
            this.isLoading = true;
            // the below 3 lines of  code for gettting the current truck selected and get the truckNumber,TruckType,Transporter
            var trackingObj = truckNumber ? (this.truckTypes.find(function (truckObj) { return truckObj.TRUCK_NUMBER == truckNumber; })) : '';
            // if (this.shipmentNumber) {
            //   this.truckT = this.loadslipUtilizationData ? this.loadslipUtilizationData.truckType : '';
            //   this.transporter = this.loadslipUtilizationData ? this.loadslipUtilizationData.servprov : '';
            // } else {
            this.truckT = trackingObj ? trackingObj.TRUCK_TYPE : '';
            this.transporter = trackingObj ? trackingObj.SERVPROV : '';
            this.indentCategory = trackingObj ? trackingObj.ITEM_CATEGORY : '';
            this.truckCapacity = trackingObj ? trackingObj.PASSING_WEIGHT : '';
            // }
            var data = {
                truckNumber: trackingObj ? trackingObj.TRUCK_NUMBER : '',
                trucktype: trackingObj ? trackingObj.TRUCK_TYPE : '',
                shipmentId: this.shipmentNumber,
                actucaltrucktype: this.actualTruckType,
                variant1: this.variant_ONE,
                trasporter: trackingObj ? trackingObj.SERVPROV : '',
                souceLoc: this.userSource,
                destLoc: this.destination,
                truckCapacity: trackingObj ? trackingObj.PASSING_WEIGHT : '',
            };
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLoadSlipUtlizations, data).subscribe(function (response) {
                console.log(response);
                if (response['statusCode'] == 200) {
                    var repsonseData = response['data'];
                    _this.loadslipUtilizationData = repsonseData;
                    _this.ShipTo = _this.loadslipUtilizationData.shipToDestination;
                    _this.variant_ONE = _this.loadslipUtilizationData.variant1;
                    _this.ManualTTE_Weight_volume_Calculation();
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
            this.totalMaterialWeight = '';
            this.totalTTESeletecd = '';
            this.totalTruckVolume = '';
            this.truckType = '';
            this.truckT = '';
            this.transporter = '';
            this.indentCategory = '';
            this.actualTruckType = '';
            this.variant_ONE = '';
            this.loadslipUtilizationData = {};
        }
    };
    // Calculate manual TTE ,Material Weight ,Total Volume
    CreateLoadSlipComponent.prototype.ManualTTE_Weight_volume_Calculation = function () {
        var _this = this;
        this.totalLoadedQty = 0;
        this.itemLevelTotalTTE = 0;
        this.itemLevelTotalWeight = 0;
        this.itemLevelTotalVolume = 0;
        this.totalMaterialWeight = 0;
        this.totalTTESeletecd = 0;
        this.totalTruckVolume = 0;
        this.totalTTEQty = 0;
        this.loadSlipData.forEach(function (row) {
            if (row.qty != null) {
                var qty = Number(row.qty);
                // Item Level Calculations
                _this.itemLevelTotalTTE += qty * (row.TTE ? row.TTE : 0);
                _this.itemLevelTotalWeight += qty * (row.WEIGHT ? row.WEIGHT : 0);
                _this.itemLevelTotalVolume += qty * (row.VOLUME ? row.VOLUME : 0);
                _this.totalLoadedQty += qty;
                // total tube quantity caluculation 
                // row.totalTubeQty = (Number(row.TUBE_COMP_QTY) ? Number(row.TUBE_COMP_QTY) : 0) * (Number(row.qty) ? Number(row.qty) : 0);
                //total flap qunatity caluculation
                // row.totalFlapQty = (Number(row.FLAP_COMP_QTY) ? Number(row.FLAP_COMP_QTY) : 0) * (Number(row.qty) ? Number(row.qty) : 0);
                //total flap quantity caluculation
                // row.totalValueQty = (Number(row.VALVE_COMP_QTY) ? Number(row.VALVE_COMP_QTY) : 0) * (Number(row.qty) ? Number(row.qty) : 0)
            }
        });
        //total TTE QTY for View LS page
        //code added on 17.05.2023 ( upto line 950)   RDC LOADSLIP Generation
        this.totalTTEQty = this.itemLevelTotalTTE;
        if ((this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : 0) != null && (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : 0) != 0) {
            this.truckCapacity = this.loadslipUtilizationData.truckWeightCapacity;
        }
        else {
            this.truckCapacity = 0;
        }
        //total Material Weight  filled In the Truck
        if ((this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : 0) != null && (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : 0) != 0) {
            // Check multi-Drop or Normal Creation for Adding Weight Util
            if (this.checkMultiStop()) {
                this.totalMaterialWeight = ((this.itemLevelTotalWeight / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : 0)) * 100);
                this.totalMaterialWeight = (this.totalMaterialWeight + (this.loadslipUtilizationData ? this.loadslipUtilizationData.shipmentTotalWtUtil : 0)) - this.loadslipWtUtil;
            }
            else {
                this.totalMaterialWeight = ((this.itemLevelTotalWeight / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : 0)) * 100);
            }
        }
        else {
            this.totalMaterialWeight = 0;
        }
        //Total  TTE filled int the Truck
        if ((this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : 0) != null && (this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : 0) != 0) {
            //Check TTE Util for Multi-Drop or Noramal Loadslip creation
            if (this.checkMultiStop()) {
                this.totalTTESeletecd = ((this.itemLevelTotalTTE / (this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : 0)) * 100);
                this.totalTTESeletecd = (this.totalTTESeletecd + (this.loadslipUtilizationData ? this.loadslipUtilizationData.shipmentTotalTTEUtil : 0)) - this.loadslipTteUtil;
            }
            else {
                this.totalTTESeletecd = ((this.itemLevelTotalTTE / (this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : 0)) * 100);
            }
        }
        else {
            this.totalTTESeletecd = 0;
        }
        // Total Volume Occupied in The Truck 
        if ((this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : 0) != null && (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : 0) != 0) {
            if (this.checkMultiStop()) {
                this.totalTruckVolume = ((this.itemLevelTotalVolume / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : 0)) * 100);
                this.totalTruckVolume = (this.totalTruckVolume + (this.loadslipUtilizationData ? this.loadslipUtilizationData.shipmentTotalVolUtil : 0)) - this.loadslipVolUtil;
            }
            else {
                this.totalTruckVolume = (this.itemLevelTotalVolume / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : 0)) * 100;
            }
        }
        else {
            this.totalTruckVolume = 0;
        }
    };
    // Load slips events trigger
    CreateLoadSlipComponent.prototype.eventCall = function (loadSlipID, eventType) {
        var _this = this;
        // check whether loadslip created or not
        if (loadSlipID) {
            console.log(eventType + "," + this.loadslipID);
            console.log(eventType, this.totalMaterialWeight, this.goApprovalReason);
            console.log(this.service.checkRole());
            if ((eventType == 'RELEASED' && (this.totalMaterialWeight < 95 && this.goApprovalReason == null) &&
                (this.service.checkRole() == this.roles.fgsOperations1 ||
                    this.service.checkRole() == this.roles.fgsOperations2))) {
                this.toastr.info("Could not release the shipment. Please select Approval Reason for lesser utilization!");
            }
            // If is event type confirm and there is not truck should validated  
            else if ((eventType == 'CONFIRM') && !this.truckType) {
                this.toastr.error("Please select truck before confirm event", "! Error");
            }
            else {
                this.isLoading = true;
                console.log("Else is True:" + eventType + "," + this.loadslipID);
                var data = {
                    loadslipID: loadSlipID,
                    eventType: eventType
                };
                console.log("Reached Trigger API:" + data['loadslipID']);
                //this.toastr.info("Reached Trigger API:");
                this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.updateLoadSlipevent, data).subscribe(function (response) {
                    console.log("Response Received:" + JSON.stringify({ data: response }, null, 4));
                    //this.toastr.info("Response Received:" + response['data']);
                    var stoSTOMessage = '';
                    stoSTOMessage = response['message'];
                    if (response['statusCode'] == 200) {
                        //Event type if Draft
                        if (response['data']) {
                            _this.toastr.success(stoSTOMessage);
                            var responseData = response['data']['data'];
                            _this.bayArrivedDate = responseData.bayArrivedDate;
                            _this.loadingStartDate = responseData.loadingStartDate;
                            _this.loadingEndDate = responseData.loadingEndDate;
                            _this.confirmedDate = responseData.confirmedDate;
                            _this.releasedDate = responseData.releasedDate;
                            _this.lsPrintDate = responseData.lsPrintDate;
                            _this.sendForBarcodeDate = responseData.sendForBarcodeDate;
                            _this.bay = responseData.bay;
                            _this.sostoNumber = responseData.sostoNumber;
                            _this.STOSONumber = responseData.sostoNumberVal;
                            _this.multistopTruckNumber = responseData.truckNumber;
                            _this.selectedCategories = responseData.selectedItemCategories;
                            _this.setLoadslipDatatableData(responseData);
                            _this.goApprovalReason = responseData.goApprovalReason;
                        }
                        // For the confirm event we are showing whether STO/SO creation success or failure
                        if (eventType == 'CONFIRM') {
                            $('#confirmeeventresposeModal').modal('show');
                            _this.confirmeventmessage = stoSTOMessage;
                        }
                        _this.isLoading = false;
                    }
                    else {
                        _this.isLoading = false;
                        console.log("Error:", response['message']);
                        _this.toastr.info("Error" + response['message']);
                        _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error");
                    }
                }, function (err) {
                    console.log("Error", err);
                    _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                    _this.isLoading = false;
                });
            }
        }
        else {
            this.toastr.warning("Please create a Loadslip", "!! Warning");
        }
    };
    //save as draft or print eEvents trigger
    CreateLoadSlipComponent.prototype.saveAsDraft_Print_trigger = function (eventType) {
        var _this = this;
        this.isLoading = true;
        this.category = [];
        var linenumber;
        var Is_Qty_entered = 0;
        this.totalTyres = 0;
        this.totalTubes = 0;
        this.totalFlaps = 0;
        this.totalValves = 0;
        this.totalPctr = 0;
        this.totalOthersCount = 0;
        var newDraftableDataArray = [];
        var index = 1;
        this.loadSlipData.forEach(function (data) {
            if (data.qty && data.qty != 0) {
                // For the line Number value we are checking below the condition
                // If it has loadslip ID we are considering the value which is coming from backend
                // Otherwise we are considering as Index value
                if (_this.loadslipID) {
                    linenumber = data.lineNumber;
                }
                else {
                    linenumber = index;
                }
                index++;
                var newArray = {
                    "batchCode": data.BATCH_CODE,
                    "falpQty": data.totalFlapQty,
                    "flapBatch": data.flapBatch,
                    "flapSKU": data.FLAP_CODE,
                    "flapDesc": data.FLAP_DESC,
                    "scannedQty": data.scannedQty,
                    "grossVol": data.VOLUME,
                    "grossWt": data.WEIGHT,
                    "itemDesc": data.ITEM_DESCRIPTION,
                    "itemCategory": data.ITEM_CATEGORY,
                    "itemId": data.ITEM_ID,
                    "lineNumber": linenumber,
                    "loadedQty": data.qty,
                    "tte": data.TTE,
                    "isSplit": data.isSplit,
                    "tubeBatch": data.tubeBatch,
                    "tubeQty": data.totalTubeQty,
                    "tubeSKU": data.TUBE_CODE,
                    "tubeDesc": data.TUBE_DESC,
                    "valveBatch": data.valveBatch,
                    "valveQty": data.totalValueQty,
                    "valveSKU": data.VALVE_CODE,
                    "valveDesc": data.VALVE_DESC
                };
                newDraftableDataArray.push(newArray);
                // This Is_Qty_entered key checking whether any of the item Enter a valve or not
                // If the value entered we are increasing valve by one
                // Below we are checking the variable value Zero or not
                Is_Qty_entered = Is_Qty_entered + 1;
                console.log("****2 " + _this.lrNum);
                switch (data.ITEM_CLASSIFICATION) {
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
                        if (data.ITEM_CATEGORY === 'PCTR') {
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
            }
        });
        console.log("****3 " + this.lrNum);
        //check user entered Qty (Qty in Qty column) or Not
        if (Is_Qty_entered != 0) {
            console.log("****4 " + this.lrNum);
            //Send Different TTE based on the Type of shipment (MULTI DROP/SINGLE DROP)
            //If it is Single stop Send the  TTE what we got from calculation
            // If the Multi Stop Remove TTE (Loadslip level TTE) from Total TTE 
            var sendbleTTEUtil = 0;
            var sendableWEIGHTUtil = 0;
            var sendableVOLUMEUtil = 0;
            var multiloadslipItemLevelTTE_1 = 0;
            var multiLoadslipItemLevelWeight_1 = 0;
            var multiLoadslipItemLevelVolume_1 = 0;
            if (this.checkMultiStop()) {
                // MULTI STOP TTE , WEIGHT, VOLUME
                this.loadSlipData.forEach(function (row) {
                    if (row.qty != null) {
                        var qty = Number(row.qty);
                        // Item Level Calculations
                        multiloadslipItemLevelTTE_1 += qty * (row.TTE ? row.TTE : 0);
                        multiLoadslipItemLevelWeight_1 += qty * (row.WEIGHT ? row.WEIGHT : 0);
                        multiLoadslipItemLevelVolume_1 += qty * (row.VOLUME ? row.VOLUME : 0);
                    }
                });
                //total Material Weight  filled In the Truck
                if (this.loadslipUtilizationData.truckWeightCapacity != null && this.loadslipUtilizationData.truckWeightCapacity != 0) {
                    sendableWEIGHTUtil = ((multiLoadslipItemLevelWeight_1 / this.loadslipUtilizationData.truckWeightCapacity) * 100);
                }
                //Total  TTE filled int the Truck
                if (this.loadslipUtilizationData.tteCapacity != null && this.loadslipUtilizationData.tteCapacity != 0) {
                    //Check TTE Util for Multi-Drop or Noramal Loadslip creation
                    sendbleTTEUtil = ((multiloadslipItemLevelTTE_1 / this.loadslipUtilizationData.tteCapacity) * 100);
                }
                // Total Volume Occupied in The Truck 
                if (this.loadslipUtilizationData.truckVolumeCapacity != null && this.loadslipUtilizationData.truckVolumeCapacity != 0) {
                    sendableVOLUMEUtil = ((multiLoadslipItemLevelVolume_1 / this.loadslipUtilizationData.truckVolumeCapacity) * 100);
                }
            }
            else {
                // SINGLE STOP TTE ,WEIGHT, VOLUME
                sendbleTTEUtil = Number(this.totalTTESeletecd);
                sendableWEIGHTUtil = Number(this.totalMaterialWeight ? this.totalMaterialWeight : 0);
                sendableVOLUMEUtil = Number(this.totalTruckVolume ? this.totalTruckVolume : 0);
            }
            var saveasDraftData = {
                source: this.userSource,
                destination: this.destination,
                truckNumber: this.truckType,
                loadslipDraftDataDtos: newDraftableDataArray,
                action: eventType,
                loadSlipId: this.loadslipID,
                tteUtil: sendbleTTEUtil,
                weightUtil: sendableWEIGHTUtil,
                volumeUtil: sendableVOLUMEUtil,
                totalTyres: this.totalTyres,
                totalTubes: this.totalTubes,
                totalFlaps: this.totalFlaps,
                totalValves: this.totalValves,
                totPctr: this.totalPctr,
                otherQty: this.totalOthersCount,
                totalLoadedQty: this.totalLoadedQty,
                totalTTE: this.itemLevelTotalTTE,
                totalWeight: this.itemLevelTotalWeight,
                totalVolume: this.itemLevelTotalVolume,
                shipTo: this.ShipTo,
                shipmentID: this.shipmentNumber,
                actualTruckType: this.actualTruckType,
                variant1: this.variant_ONE,
                variant2: this.variant_TWO,
                dropSeq: this.dropSeq,
                goApprovalReason: this.goApprovalReason
            };
            //Check whether it is save or Update
            if (this.loadslipID) {
                this.IsUpdate = true;
            }
            else {
                this.IsUpdate = false;
            }
            // Check Whether Batchcode exit or not 
            // if condition returns the true if BATCH_CODE was null or empty, then we are checking reverse using '!' symbol
            // That means we checking , there is not empty and Null condition for BATCH_CODE
            if (!this.loadSlipData.some(function (item) { return (item.BATCH_CODE == null || item.BATCH_CODE == ""); })) {
                if (this.checkMultiStop()) {
                    var HTTPAPI = _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.multipleDropLoadSlip;
                    this.loadslipsave(saveasDraftData, HTTPAPI);
                }
                else {
                    var HTTPAPI = _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.loadslidSaveasDraft;
                    this.loadslipsave(saveasDraftData, HTTPAPI);
                }
            }
            else {
                this.isLoading = false;
                this.toastr.error("Please enter Batch code", "! Error");
            }
            this.editing = {};
        }
        else {
            this.isLoading = false;
            this.toastr.warning("Please enter Quantity", "! Warning");
        }
    };
    // end of 
    // save as Draft Server API
    CreateLoadSlipComponent.prototype.loadslipsave = function (saveasDraftData, HTTPAPI) {
        var _this = this;
        this.service.post_service(HTTPAPI, saveasDraftData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.isLoading = false;
                var totalResponse = response['data'];
                var responseData = totalResponse.loadslipDraftDto;
                _this.loadslipCategory = responseData.loadslipCategory;
                if (_this.loadslipID) {
                    _this.destinationwisePlans(_this.destination);
                }
                // ELR Flag, LR Number
                _this.elrFlag = responseData.elrFlag;
                _this.lrNum = responseData.elrNumber;
                // Set if LR is to be Generated or Printed
                _this.setLrButton();
                _this.loadSlipData = [];
                _this.actualTruckType = totalResponse.actucalTruckType;
                _this.variant_ONE = totalResponse.variant1;
                _this.truckT = totalResponse.loadslipDraftDto.truckType;
                // IS_Truck_Part_of_Loadslip variable for use for LS on same truck 
                // we are taking variable because "trckT" and  "TruckType " variable can modified if we select the truck
                // We dnt know whether they are part of loadslip or not (Done saveasDraft or not), that we are we are taking another variable considering the values from the backend
                _this.IS_Truck_Part_of_Loadslip = _this.truckT;
                _this.transporter = totalResponse.loadslipDraftDto.servprov;
                _this.indentCategory = totalResponse.loadslipDraftDto.truckIndentCategory;
                _this.freightAvailableflag = totalResponse.loadslipDraftDto.freightAvailableflag;
                // Last splitted object
                _this.lastSplittedItems = totalResponse.loadslipDraftDto.splitNumbersMap;
                _this.totalQuantity = totalResponse.loadslipDraftDto.totQty;
                _this.selectedCategories = totalResponse.selectedItemCategories;
                _this.setLoadslipDatatableData(responseData);
                // For showing the Toaster messages
                switch (saveasDraftData.action) {
                    case 'DRAFT':
                        if (_this.loadslipID) {
                            _this.toastr.success("Loadslip Updated Successfully !!", 'Success');
                        }
                        else {
                            _this.toastr.success("Loadslip Created Successfully !!", 'Success');
                        }
                        break;
                    default:
                        if (_this.loadslipID) {
                            _this.lsPrintDate = response['data'].lsPrintDate;
                        }
                        _this.toastr.success("Loadslip Printed Successfully !!", 'Success');
                        break;
                }
                if (response['data'].loadSlipId) {
                    _this.showLoadslipInModal(response['data'].loadSlipId, saveasDraftData.action, _this.IsUpdate, response['data']);
                }
                var base64Data = response['data'].loadslip;
                if (base64Data) {
                    var linkSource = 'data:application/pdf;base64,' + base64Data;
                    var element = document.createElement('a');
                    element.setAttribute('href', linkSource);
                    element.setAttribute('download', response['data'].loadSlipId);
                    document.body.appendChild(element);
                    element.click();
                }
            }
            else {
                if (response['data']) {
                    _this.openloadsliperrorPopup(response['data']);
                }
                _this.isLoading = false;
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //open loadslip error list 
    CreateLoadSlipComponent.prototype.openloadsliperrorPopup = function (errorList) {
        var dialogRef = this.dialog.open(src_app_public_create_loadslips_error_popup_create_loadslips_error_popup_component__WEBPACK_IMPORTED_MODULE_8__["CreateLoadslipsErrorPopupComponent"], {
            data: errorList,
            disableClose: true
        });
    };
    // Show loadslipId with success POPUP
    CreateLoadSlipComponent.prototype.showLoadslipInModal = function (value, typeofevent, IsUpdate, response) {
        var dialogRef = this.dialog.open(src_app_public_loadslip_success_dialog_loadslip_success_dialog_component__WEBPACK_IMPORTED_MODULE_7__["LoadslipSuccessDialogComponent"], {
            data: { loadslipId: value, type: typeofevent, isupdate: IsUpdate, loadslipData: response },
            disableClose: true
        });
        //reset the data which user selected after successful load slip creation
        if (!this.loadslipID) {
            this.totalMaterialWeight = '';
            this.totalTTESeletecd = '';
            this.totalTruckVolume = '';
            this.totalTyres = '';
            this.totalTubes = '';
            this.totalFlaps = '';
            this.totalValves = '';
            this.destination = '';
            this.description = '';
            this.truckType = '';
            this.loadSlipData = [];
            this.ShipTo = '';
        }
    };
    //clear user enter data
    CreateLoadSlipComponent.prototype.cancelLoadslipCreation = function () {
        var _this = this;
        this.isLoading = true;
        var dialogRef = this.dialog.open(src_app_public_loadslip_cancel_popup_loadslip_cancel_popup_component__WEBPACK_IMPORTED_MODULE_5__["LoadslipCancelPopupComponent"], { disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            if (result) {
                _this.totalMaterialWeight = '';
                _this.totalTTESeletecd = '';
                _this.totalTruckVolume = '';
                _this.totalTyres = '';
                _this.totalTubes = '';
                _this.totalValves = '';
                _this.destination = '';
                _this.totalFlaps = '';
                _this.loadSlipData = [];
                _this.truckType = '';
                _this.truckT = '';
                _this.transporter = '';
                _this.indentCategory = '';
                _this.actualTruckType = '';
                _this.variant_ONE = '';
                _this.freightAvailableflag = '';
                _this.dropSeq = '';
                _this.totalTTEQty = 0;
                _this.description = '';
                _this.loadSlipData = _this.loadSlipData.slice();
                _this.indentCategory = '';
                _this.description = '';
                _this.city = '';
            }
            _this.isLoading = false;
        });
    };
    // Download loadslip after trigger CONFIRM event
    CreateLoadSlipComponent.prototype.downloadLoadslip = function () {
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
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //sent for barcode scanning
    CreateLoadSlipComponent.prototype.sendForBarcode = function () {
        var _this = this;
        // check whether loadslip created or not
        if (this.loadslipID) {
            this.isLoading = true;
            var data = {};
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.sendToSAPForCodeScan + "/" + this.loadslipID, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    _this.isLoading = false;
                    _this.toastr.success(response['message']);
                    _this.sendForBarcodeDate = response['data'].data.sendForBarcodeDate;
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
    // loadslip same trcuk navigation
    CreateLoadSlipComponent.prototype.loadslipOnSameTruckNavigation = function () {
        var _this = this;
        if (this.shipmentNumber) {
            if (this.IS_Truck_Part_of_Loadslip) {
                this.isLoading = true;
                this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.isLsOnSameTruckAllowed + "?shipmentId=" + this.shipmentNumber).subscribe(function (response) {
                    if (response['statusCode'] == 200) {
                        _this.isLoading = false;
                        if ((_this.service.checkRole() == _this.roles.fgsOperations1) || (_this.service.checkRole() == _this.roles.fgsOperations2)
                            || (_this.service.checkRole() == _this.roles.fgsOperations3) || (_this.service.checkRole() == _this.roles.fgsOperations4)) {
                            _this.router.navigate(['/fgs/create-load-slip'], { queryParams: { shipmentNumber: _this.shipmentNumber } });
                        }
                        else if (_this.service.checkRole() == _this.roles.rdc_PLN) {
                            _this.router.navigate(['/rdc/create-load-slip'], { queryParams: { shipmentNumber: _this.shipmentNumber } });
                        }
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
                this.toastr.error("Please select truck before Ls on same Truck", "! Error");
            }
        }
        else {
            this.toastr.warning('Please Create a Loadslip');
        }
    };
    //share Truck destination list
    CreateLoadSlipComponent.prototype.shareTruckDestinationList = function () {
        var _this = this;
        if (this.shipmentNumber) {
            if (this.IS_Truck_Part_of_Loadslip) {
                this.isLoading = true;
                this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.shareTruckDestions).subscribe(function (response) {
                    if (response['statusCode'] == 200) {
                        _this.shareTrcukDestinations = response['data'];
                        $('#myModal').modal('show');
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
                this.toastr.warning("Please select truck before Share Truck", "! Error");
            }
        }
        else {
            this.toastr.warning('Please Create a Loadslip');
        }
    };
    //share truck Server API
    CreateLoadSlipComponent.prototype.shareTruck = function () {
        var _this = this;
        this.isLoading = true;
        if (this.shareTruckLocation) {
            var data = {};
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.shareTruck + "?shipmentId=" + this.shipmentNumber + '&pickupLoc=' + this.shareTruckLocation, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    _this.toastr.success(response['message']);
                    _this.shareTrcukDestinations = [];
                    $('#myModal').modal('hide');
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
    CreateLoadSlipComponent.prototype.getvariants = function () {
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
    CreateLoadSlipComponent.prototype.getActualTruckTypeList = function () {
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
    CreateLoadSlipComponent.prototype.split = function (data) {
        console.log(data);
        // below line code for parent, set to not splitted that why isSplit is 'N', for child isSplit will be 'Y'
        data['isSplit'] = 'N';
        var rowData = __assign({}, data);
        rowData.BATCH_CODE = '';
        rowData.qty = 0;
        rowData.scannedQty = 0;
        rowData.totalValueQty = 0;
        // Below line child item that why isSplit was 'Y'
        rowData['isSplit'] = 'Y';
        // index here from the line number of item
        var current_index = data.lineNumber;
        var pushble_index;
        var addbleNumber = 0.1;
        if (this.lastSplittedItems[current_index + 'line']) {
            var lastModified_1 = this.lastSplittedItems[current_index + 'line'];
            pushble_index = this.loadSlipData.findIndex(function (item) { return item.lineNumber === lastModified_1; });
            var new_value = Math.round((lastModified_1 + addbleNumber) * 1e12) / 1e12;
            this.lastSplittedItems[current_index + 'line'] = new_value;
            rowData.lineNumber = new_value;
        }
        else {
            pushble_index = this.loadSlipData.findIndex(function (item) { return item.lineNumber == data.lineNumber; });
            rowData.lineNumber = rowData.lineNumber + addbleNumber;
            this.lastSplittedItems[data.lineNumber + "line"] = rowData.lineNumber;
        }
        //check whether the the item is present in the list or not
        if (pushble_index != -1) {
            // Add +1 for Index start with '0'
            pushble_index = pushble_index + 1;
        }
        else {
            pushble_index = this.loadSlipData.findIndex(function (item) { return item.lineNumber == data.lineNumber + 1; });
            if (pushble_index != -1) {
                pushble_index = pushble_index;
            }
            else {
                var comparebleLineNumber_1 = data.lineNumber + 1;
                for (var i = 1; i <= this.loadSlipData.length; i++) {
                    var isExit_lineNumber = this.loadSlipData.some(function (item) { return item.lineNumber == comparebleLineNumber_1; });
                    if (isExit_lineNumber) {
                        pushble_index = this.loadSlipData.findIndex(function (item) { return item.lineNumber == comparebleLineNumber_1; });
                        break;
                    }
                    else {
                        comparebleLineNumber_1++;
                        if (i == this.loadSlipData.length) {
                            // pushble_index = data.lineNumber;
                            pushble_index = this.loadSlipData.findIndex(function (item) { return item.lineNumber == data.lineNumber; }) + 1;
                            break;
                        }
                        else {
                            continue;
                        }
                    }
                }
            }
        }
        this.loadSlipData.splice(pushble_index, 0, rowData);
        // this.loadSlipData.push(this.lastSplittedItems)
        this.loadSlipData = this.loadSlipData.slice();
        console.log(this.loadSlipData, "this.lastSplittedItems", this.lastSplittedItems);
    };
    CreateLoadSlipComponent.prototype.deleteRow = function (data) {
        var _this = this;
        //check the deletion whether a PARENT / CHILD 
        // if child delete single record
        // if parent delete all childs aswell including parent 
        var deletebleIndex;
        var inboundValue;
        var outBiundValue;
        if (data.isSplit == 'N') {
            // For Parent 
            inboundValue = data.lineNumber;
            outBiundValue = inboundValue + 1;
            var copyLoadSlipData = this.loadSlipData.slice();
            copyLoadSlipData.forEach(function (item) {
                // Line Number Not lessthan Inbound value && Not grather than Outbound value
                if ((item.lineNumber >= inboundValue) && (item.lineNumber < outBiundValue)) {
                    // deletebleIndex = this.loadSlipData.findIndex(item => item.lineNumber == data.lineNumber);
                    deletebleIndex = _this.loadSlipData.findIndex(function (currentItem) { return currentItem.lineNumber == item.lineNumber; });
                    if (item['destinationItem'] && (item.isSplit == 'N')) {
                        // Revert back the values to the intial state of the object
                        item.qty = null;
                        _this.destinationWisePlans.push(item);
                    }
                    // Delete item from Loadslip Items
                    _this.loadSlipData.splice(deletebleIndex, 1);
                }
            });
        }
        else if (data.isSplit == 'Y') {
            // For Child
            deletebleIndex = this.loadSlipData.findIndex(function (item) { return item.lineNumber == data.lineNumber; });
            // Delete item from Loadslip Items
            this.loadSlipData.splice(deletebleIndex, 1);
        }
        else if (data['destinationItem']) {
            deletebleIndex = this.loadSlipData.findIndex(function (currentItem) { return currentItem.lineNumber == data.lineNumber; });
            // Revert back the values to the intial state of the object
            data.qty = null;
            this.destinationWisePlans.push(data);
            this.loadSlipData.splice(deletebleIndex, 1);
        }
        this.destinationWisePlans = this.destinationWisePlans.slice();
        this.loadSlipData = this.loadSlipData.slice();
        // this.ManualTTE_Weight_volume_Calculation();
        this.calculateMaterialWeight(data);
        console.log(this.loadSlipData, "this.loadSlipData");
    };
    CreateLoadSlipComponent.prototype.add = function (data) {
        console.log(data);
        var rowData = __assign({}, data);
        var indexofSplice = this.destinationWisePlans.findIndex(function (item) { return (item.ITEM_ID == rowData.ITEM_ID) && (item.BATCH_CODE == rowData.BATCH_CODE); });
        var loadslipLength = this.loadSlipData.length;
        if (loadslipLength == 0) {
            // if length is Zero add Item at 1 Index of Loadslip items
            rowData.lineNumber = 1;
        }
        else {
            // rowData.lineNumber = parseInt(this.loadSlipData[loadslipLength - 1].lineNumber) + 1;
            rowData.lineNumber = parseInt(Math.max.apply(null, this.loadSlipData.map(function (item) { return item.lineNumber; }))) + 1;
        }
        // For Identification from the destination item ,By this parameter we are diriving color for the line as light orage color
        rowData['destinationItem'] = true;
        if (this.service.checkRole() == this.roles.rdc_PLN) {
            rowData.qty = data.SUM_QTY;
            rowData.totalTubeQty = (Number(rowData.TUBE_COMP_QTY) ? Number(rowData.TUBE_COMP_QTY) : 0) * (Number(rowData.qty) ? Number(rowData.qty) : 0);
            rowData.totalFlapQty = (Number(rowData.FLAP_COMP_QTY) ? Number(rowData.FLAP_COMP_QTY) : 0) * (Number(rowData.qty) ? Number(rowData.qty) : 0);
        }
        this.loadSlipData = this.loadSlipData.concat([rowData]);
        this.destinationWisePlans.splice(indexofSplice, 1);
        this.destinationWisePlans = this.destinationWisePlans.slice();
        this.calculateMaterialWeight(data);
    };
    CreateLoadSlipComponent.prototype.IsIntiger = function (n) {
        return n % 1 === 0;
    };
    CreateLoadSlipComponent.prototype.stosoDelete = function (loadslip) {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.stosoDelete + "?loadslipId=" + loadslip).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                var responsedata = response['data'];
                _this.sostoNumber = responsedata.sostoNumber;
                _this.STOSONumber = responsedata.sostoNumberVal;
                _this.lsPrintDate = responsedata.lsPrintDate;
                _this.confirmedDate = responsedata.confirmedDate;
                _this.setLoadslipDatatableData(responsedata);
                _this.isLoading = false;
                _this.toastr.success(response['message']);
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
    };
    CreateLoadSlipComponent.prototype.is_Role_RDC = function () {
        if (this.service.checkRole() == this.roles.rdc_PLN) {
            return true;
        }
        else {
            return false;
        }
    };
    // If the truck got chages then defalut to empty Actual trucktype,Variant1
    CreateLoadSlipComponent.prototype.defaultTruckData = function () {
        this.actualTruckType = '';
        this.variant_ONE = '';
        this.truckCapacity = '';
    };
    CreateLoadSlipComponent.prototype.openedChange = function (opened, dest, category, typefilter) {
        console.log(opened);
        if (!opened) {
            this.getTrucksList(dest, category, typefilter);
        }
    };
    // Print Excel
    CreateLoadSlipComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service_DownLoadExcel(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.printLoadslip + '?loadslipId=' + this.loadslipID + '&excel=' + true).subscribe(function (response) {
            if (response) {
                // Uncomment when export excel is generated in backend
                var blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
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
                _this.toastr.error(response['message'] ? response['message'] : "Something went wrong..in response", "Error!");
                _this.isLoading = false;
            }
        }, function (err) {
            console.log(err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    CreateLoadSlipComponent.prototype.checkConsentLoadSlip = function (loadSlipID, eventType) {
        this.trackingConsentStatus = 'Checking Consent Initiated';
        this.eventCall(loadSlipID, eventType);
    };
    CreateLoadSlipComponent.prototype.onFileInput = function (event) {
        var _this = this;
        this.files = event.target.files[0];
        console.log(this.files);
        var url = 'https://otmgtm-test-a563219.otm.em2.oraclecloud.com/logisticsRestApi/resources-int/v2/documents';
        //let url = 'https://otmgtm-test-a563219.otm.em2.oraclecloud.com/GC3/glog.integration.servlet.WMServlet';
        var formData = new FormData();
        formData.append("myfile", this.files);
        var reader = new FileReader();
        reader.readAsDataURL(this.files);
        var domainName = 'ATL';
        var documentXid = this.loadslipID;
        var datecurr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(), 'yyyy-MM-dd hh24-mi-ss', 'en');
        reader.onload = function () {
            console.log(reader.result);
            var documentData = {
                "documentXid": _this.shipmentNumber + "-" + datecurr,
                "domainName": "ATL",
                "contents": { "items": [{ "documentContentGid": "ATL." + _this.shipmentNumber + "-" + datecurr,
                            "domainName": "ATL",
                            "isAwaitingVirusCheck": false,
                            "blobContent": "iVBORw0KGgoAAAANSUhEUgAAADUAAAAOCAYAAACPW1QeAAAAAXNSR0IArs4c6QAAAeJJREFUSEtjfPL17v/ME/YM736+YijXmc7gK5vEAAKffr9jyDvpzvDk212GNqNVDGYiLmBxUsDE68UMqx9MYQhVyGHI1+yFa938eB5D55VMBnMRV4Ze0y1EGVl82ofh5JvdKG5E1ggzE2QXI7KnhNjFGKZbHGSQ5lIaPp4C+RwWerhiChZiILUczNx4Y5GUmILZd+fzJXAEIAcwiI8eU0+/3WOApTCQWn/ZVIb5d1rBqQIlppAdqsFvhJH8kD2EHPXIyRZZnFhPoXsIZgZyoCF7yl4iAOw2WAAg24niKZAEzLcqvHoMrUYrGarPhcPzFEi+6lwYAxcLNzyJwtIxSP0k850MfKxCKPkD5ilcmQaWKrCZA9MLU4PsKZB5oDyJHJsweQxPdRlvYOi4nAEOAW+ZeIabH8/DPXX89XaMTA8L4Xe/XsA9ii2mCHkKWyEAS15CbBLgAGu8EAcvKO59uYrhFqwFBchiUCEBMgwUIyDAyczF8P3vN3C+efn9ETh0kEsyYj1FqPSDxQpyMqaqp0AlH3KygaVrSpIfIU9Rmvx4WQXgeQwj+aEX56BkiC2zoienQV1QwDwFcjQs9NCL7cFYpIPc6CwZwrD1yUJIkf7/////RFXpQ0jRqKeGSmQNy5gCAFsjSIMbS6aLAAAAAElFTkSuQmCC" }] }
            };
            //    '<otm:Transmission xmlns:otm="http://xmlns.oracle.com/apps/otm/transmission/v6.4" xmlns:gtm="http://xmlns.oracle.com/apps/gtm/transmission/v6.4"><otm:TransmissionHeader><otm:SenderTransmissionNo>ATOM</otm:SenderTransmissionNo></otm:TransmissionHeader><otm:TransmissionBody><otm:GLogXMLElement><otm:Document><otm:DocumentGid><otm:Gid><otm:DomainName>ATL</otm:DomainName><otm:Xid>'+this.shipmentNumber + '-' + datecurr +'</otm:Xid></otm:Gid></otm:DocumentGid><otm:TransactionCode>IU</otm:TransactionCode><otm:DocumentOwner><otm:DataQueryTypeGid><otm:Gid><otm:Xid>SHIPMENT</otm:Xid></otm:Gid></otm:DataQueryTypeGid><otm:ObjectGid><otm:Gid><otm:DomainName>ATL</otm:DomainName><otm:Xid>'+this.shipmentNumber + '-' + datecurr +'</otm:Xid></otm:Gid></otm:ObjectGid></otm:DocumentOwner><otm:DocumentContent><otm:DocContentBinary>iVBORw0KGgoAAAANSUhEUgAAADUAAAAOCAYAAACPW1QeAAAAAXNSR0IArs4c6QAAAeJJREFUSEtjfPL17v/ME/YM736+YijXmc7gK5vEAAKffr9jyDvpzvDk212GNqNVDGYiLmBxUsDE68UMqx9MYQhVyGHI1+yFa938eB5D55VMBnMRV4Ze0y1EGVl82ofh5JvdKG5E1ggzE2QXI7KnhNjFGKZbHGSQ5lIaPp4C+RwWerhiChZiILUczNx4Y5GUmILZd+fzJXAEIAcwiI8eU0+/3WOApTCQWn/ZVIb5d1rBqQIlppAdqsFvhJH8kD2EHPXIyRZZnFhPoXsIZgZyoCF7yl4iAOw2WAAg24niKZAEzLcqvHoMrUYrGarPhcPzFEi+6lwYAxcLNzyJwtIxSP0k850MfKxCKPkD5ilcmQaWKrCZA9MLU4PsKZB5oDyJHJsweQxPdRlvYOi4nAEOAW+ZeIabH8/DPXX89XaMTA8L4Xe/XsA9ii2mCHkKWyEAS15CbBLgAGu8EAcvKO59uYrhFqwFBchiUCEBMgwUIyDAyczF8P3vN3C+efn9ETh0kEsyYj1FqPSDxQpyMqaqp0AlH3KygaVrSpIfIU9Rmvx4WQXgeQwj+aEX56BkiC2zoienQV1QwDwFcjQs9NCL7cFYpIPc6CwZwrD1yUJIkf7/////RFXpQ0jRqKeGSmQNy5gCAFsjSIMbS6aLAAAAAElFTkSuQmCC</otm:DocContentBinary></otm:DocumentContent></otm:Document></otm:GLogXMLElement></otm:TransmissionBody></otm:Transmission>'
            console.log(documentData);
            _this.service.post_otm_service(url, documentData).subscribe(function (response) {
                if (response['statusCode'] == 200 && response["data"] == 'Y') {
                    //|| response["data"] == 'N'
                    console.log('Image Uploaded');
                }
                else {
                    console.log(response['statusCode']);
                }
            });
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('categorySelect'),
        __metadata("design:type", Object)
    ], CreateLoadSlipComponent.prototype, "categorySelect", void 0);
    CreateLoadSlipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-load-slip',
            template: __webpack_require__(/*! ./create-load-slip.component.html */ "./src/app/fgs-operations/create-load-slip/create-load-slip.component.html"),
            styles: [__webpack_require__(/*! ./create-load-slip.component.scss */ "./src/app/fgs-operations/create-load-slip/create-load-slip.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], CreateLoadSlipComponent);
    return CreateLoadSlipComponent;
}());



/***/ }),

/***/ "./src/app/fgs-operations/create-load-slip/create-load-slip.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/fgs-operations/create-load-slip/create-load-slip.module.ts ***!
  \****************************************************************************/
/*! exports provided: CreateLoadSlipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLoadSlipModule", function() { return CreateLoadSlipModule; });
/* harmony import */ var src_app_public_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/public/share-module/share-module.module */ "./src/app/public/share-module/share-module.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _create_load_slip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-load-slip.component */ "./src/app/fgs-operations/create-load-slip/create-load-slip.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__);
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
    { path: '', component: _create_load_slip_component__WEBPACK_IMPORTED_MODULE_3__["CreateLoadSlipComponent"] },
    { path: ':loadslipId', component: _create_load_slip_component__WEBPACK_IMPORTED_MODULE_3__["CreateLoadSlipComponent"] },
    { path: ':loadslipId/:viewType', component: _create_load_slip_component__WEBPACK_IMPORTED_MODULE_3__["CreateLoadSlipComponent"] },
    { path: ':shipmentId/:truckNumber/:typeOfTruck/:variant1/:actualTruckType', component: _create_load_slip_component__WEBPACK_IMPORTED_MODULE_3__["CreateLoadSlipComponent"] }
];
var CreateLoadSlipModule = /** @class */ (function () {
    function CreateLoadSlipModule() {
    }
    CreateLoadSlipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["customMaterialModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_7__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
                src_app_public_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_0__["ShareModuleModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_12__["CustomDatePipeModule"]
            ],
            declarations: [
                _create_load_slip_component__WEBPACK_IMPORTED_MODULE_3__["CreateLoadSlipComponent"],
            ],
            entryComponents: [
                _create_load_slip_component__WEBPACK_IMPORTED_MODULE_3__["CreateLoadSlipComponent"],
                src_app_public_loadslip_cancel_popup_loadslip_cancel_popup_component__WEBPACK_IMPORTED_MODULE_9__["LoadslipCancelPopupComponent"],
                src_app_public_loadslip_success_dialog_loadslip_success_dialog_component__WEBPACK_IMPORTED_MODULE_10__["LoadslipSuccessDialogComponent"],
                src_app_public_create_loadslips_error_popup_create_loadslips_error_popup_component__WEBPACK_IMPORTED_MODULE_11__["CreateLoadslipsErrorPopupComponent"],
            ]
        })
    ], CreateLoadSlipModule);
    return CreateLoadSlipModule;
}());



/***/ })

}]);
//# sourceMappingURL=fgs-operations-create-load-slip-create-load-slip-module.js.map