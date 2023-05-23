(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planner-home-home-module"],{

/***/ "./src/app/planner/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/planner/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<!--  *ngIf=\"!checkShow()\" -->\n<div class=\"container-fluid\" *ngIf=\"!isGateRole()\">\n  <div class=\"row\">\n    <div class=\"col-md-12 \">\n      <div class='box'>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <h5 class=\"margin-top-10\"> Truck Status</h5>\n          </div>\n          <div class=\"col-md-3 offset-5\" *ngIf=\"checkShow()\">\n            <mat-form-field class=\"locationDropdown\">\n              <mat-label>Select Location</mat-label>\n              <mat-select name=\"locations\" [(ngModel)]=\"location\" (ngModelChange)=\"getTrcukdetails(location)\">\n                <mat-option *ngFor=\"let item of locations\" [value]=\"item\">\n                  {{item}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"row rounded-box\">\n          <div class=\"col-md-3 truckstatus-card\">\n            <div class=\"media p-3\">\n              <img src=\"assets/images/reported.svg\" class=\"img img-fluid\" style=\"width:30px;\">\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{truckStatusStatics?.reportedTrucksCount?truckStatusStatics?.reportedTrucksCount:0}}</h4>\n\n              </div>\n            </div>\n            <p>Reported &amp; Waiting</p>\n          </div>\n          <div class=\"col-md-3 truckstatus-card\">\n            <div class=\"media p-3\">\n              <img src=\"assets/images/Gated In.svg\" class=\"img img-fluid\" style=\"width:30px;\">\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{truckStatusStatics?.gatedInTrucksCount?truckStatusStatics?.gatedInTrucksCount:0}}</h4>\n              </div>\n            </div>\n            <p>Gated - In</p>\n          </div>\n          <div class=\"col-md-3 truckstatus-card\">\n            <div class=\"media p-3\">\n              <img src=\"assets/images/Loading.svg\" class=\"img img-fluid\" style=\"width:30px;\">\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">{{truckStatusStatics?.trucksLoadingIn?truckStatusStatics?.trucksLoadingIn:0}}\n                </h4>\n              </div>\n            </div>\n            <p>In Loading</p>\n          </div>\n          <div class=\"col-md-3 truckstatus-card\">\n            <div class=\"media p-3\">\n              <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\">\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(truckStatusStatics?.watingMoreThen3HTrucks)?(truckStatusStatics?.watingMoreThen3HTrucks):0}}</h4>\n\n              </div>\n            </div>\n            <p>Waiting (Gated In/Under Loading) >\n              {{(truckStatusStatics?.excessWaitingTime)?(truckStatusStatics?.excessWaitingTime):'X'}}hrs</p>\n          </div>\n          <div class=\"col-md-3 truckstatus-card\">\n            <div class=\"media p-3\">\n              <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\">\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{truckStatusStatics?.excessWaitingLocCount?truckStatusStatics?.excessWaitingLocCount:0}}</h4>\n\n              </div>\n            </div>\n            <p>Reported & Waiting >\n              {{(truckStatusStatics?.excessReportingWaitingTime)?(truckStatusStatics?.excessReportingWaitingTime):'X'}}hrs\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"row\" *ngIf=\"showPlanTables()\">\n    <div class=\"col-md-12\">\n      <div class=\"box\">\n        <h5>Open Plans\n          <span class=\"pull-right\">\n            <!-- <button mat-raised-button color=\"primary\">Export to Excel</button> -->\n            <!-- <button class=\"theme-small-button\" (click)=\"exportOpenPlans()\" matTooltip=\"Export to excel\">\n              <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n            </button> -->\n          </span>\n        </h5>\n        <!-- Filter Row Start -->\n        <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formPicker\" placeholder=\"From Disp Date\"\n                  [(ngModel)]=\"fromDate\" name=\"fromDate\" (dateChange)=\"addEvent('change', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toPicker\" [min]=\"fromDate\" placeholder=\"To Disp Date\"\n                  [(ngModel)]=\"toDate\" name=\"toDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toPicker [disabled]=\"!fromDate\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-2 pr-0\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSource($event)\" [disabled]=\"(isSoureDisable()) \"\n                autocomplete=\"off\" [matAutocomplete]=\"sourceOpenPlanAutocomplete\" [(ngModel)]=\"sourceCode\" name=\"source\"\n                oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourceOpenPlanAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div> -->\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Source\" [(ngModel)]=\"sourceCodeOpenPlanList\" name=\"sourceCodeOpenPlanList\"\n                  multiple [disabled]=\"(isSoureDisable()) \">\n                  <mat-option *ngFor=\"let source of openPlanSourceList\" [value]=\"source\">{{source}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"openPlansAutocomplete\"\n                  [(ngModel)]=\"destination\" name=\"destination\" (keyup)=\"getUserSearchData($event)\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #openPlansAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"MKT Segment\" [(ngModel)]=\"mktsegmentOpenPlan\" name=\"mktsegmentOpenPlan\"\n                  multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let mktsegment of mktsegmentList\" [value]=\"mktsegment\">\n                    {{mktsegment}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Category\" [(ngModel)]=\"materialGroup\" name=\"materialGroup\" multiple>\n                  <mat-option *ngFor=\"let category of categoryList\" [value]=\"category\">{{category}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"App Status\" [(ngModel)]=\"appStatuses\" name=\"appStatuses\" multiple>\n                  <mat-option *ngFor=\"let item of appStatusList\" [value]=\"item.value\">\n                    {{item.key}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Plan Status\" [(ngModel)]=\"planStatusOpenPlan\" name=\"planStatusOpenPlan\">\n                  <mat-option *ngFor=\"let status of planStatusList\" [value]=\"status\">{{status}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\" col-md-1 \">\n            <div class=\"search-fileds\">\n              <button class=\"theme-small-button\" (click)=\"searchOpenPlans()\" matTooltip=\"Search\">\n                <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n              <button class=\"theme-delete-button\" (click)=\"clearAllOpenPlans()\" matTooltip=\"Clear All\">\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n        <!-- Filter Row End -->\n\n        <!-- <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th>No. Of Tyres</th>\n              <th>Equivalent Truck Count</th>\n              <th>Cumm Tyres</th>\n              <th>Cumm Equi Truck Count</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{openPlanData.tyreAvailQtySum}}</td>\n              <td>{{openPlanData.tyreTruckCount | number : '1.2-2'}}</td>\n              <td>{{openPlanData.tyreAvailQtySum}}</td>\n              <td>{{openPlanData.tyreTruckCount | number : '1.2-2'}}</td>\n            </tr>\n            <tr>\n              <td colspan=\"10\" class=\"text-center no-data-row\">No data Available</td>\n            </tr>\n          </tbody>\n        </table> -->\n        <div\n          *ngIf=\"((plansDataDtoList?.length == 0) || (plansDataDtoList?.length > 0 && !plansDataDtoList[0].itemCategory))\">\n          <!-- NORMAL Records -->\n          <div class=\"row rounded-box\">\n            <div class=\"col-md-2 truckstatus-card \">\n              <div class=\"media p-3\">\n                <!-- <img src=\"assets/images/reported.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                <div class=\"media-body\">\n                  <h5 class=\"text-center\">\n                    {{(plansDataDtoList.length>0 ? (plansDataDtoList[0].totalPlanQty ? plansDataDtoList[0].totalPlanQty : 0) : 0) | number}}\n                  </h5>\n                </div>\n              </div>\n              <p>Plan Qty</p>\n            </div>\n            <div class=\"col-md-2 truckstatus-card\">\n              <div class=\"media p-3\">\n                <!-- <img src=\"assets/images/Gated In.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                <div class=\"media-body\">\n                  <h5 class=\"text-center\">\n                    {{(plansDataDtoList.length>0 ? (plansDataDtoList[0].totalAvailQty ? plansDataDtoList[0].totalAvailQty : 0) : 0) | number}}\n                  </h5>\n                </div>\n              </div>\n              <p>Avail Qty</p>\n            </div>\n            <div class=\"col-md-2 truckstatus-card\">\n              <div class=\"media p-3\">\n                <!-- <img src=\"assets/images/Loading.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                <div class=\"media-body\">\n                  <h5 class=\"text-center\">\n                    {{ (plansDataDtoList.length>0 ? (plansDataDtoList[0].totalTotAvailQty ? plansDataDtoList[0].totalTotAvailQty : 0) : 0 )| number}}\n                  </h5>\n                </div>\n              </div>\n              <p>Total Avail Qty</p>\n            </div>\n            <div class=\"col-md-2 truckstatus-card \">\n              <div class=\"media p-3\">\n                <!-- <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                <div class=\"media-body\">\n                  <h5 class=\"text-center\">\n                    {{(plansDataDtoList.length>0 ? (plansDataDtoList[0].totalReservedQty ? plansDataDtoList[0].totalReservedQty : 0)  : 0)| number}}\n                  </h5>\n\n                </div>\n              </div>\n              <p>Total Reserved/Loaded Qty</p>\n            </div>\n            <div class=\"col-md-2 truckstatus-card\">\n              <div class=\"media p-3\">\n                <!-- <img src=\"assets/images/reported.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                <div class=\"media-body\">\n                  <h5 class=\"text-center\">\n                    {{(plansDataDtoList.length>0 ? (plansDataDtoList[0].totalTTE ? plansDataDtoList[0].totalTTE : 0) : 0)| number:'1.2-2'}}\n                  </h5>\n\n                </div>\n              </div>\n              <p>Total TTE</p>\n            </div>\n            <div class=\"col-md-2 truckstatus-card \">\n              <div class=\"media p-3\">\n                <!-- <img src=\"assets/images/Gated In.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                <div class=\"media-body\">\n                  <h5 class=\"text-center\">\n                    {{ (plansDataDtoList.length>0 ? (plansDataDtoList[0].truckCount ? plansDataDtoList[0].truckCount : 0) : 0 )| number:'1.2-2' }}\n                  </h5>\n                </div>\n              </div>\n              <p>Total Truck Count</p>\n            </div>\n          </div>\n          <!-- CUMM Part -->\n          <div class=\"row rounded-box\" style=\"margin-top:  15px;\">\n            <div class=\"col-md-2 truckstatus-card\">\n              <div class=\"media p-3\">\n                <!-- <img src=\"assets/images/reported.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                <div class=\"media-body\">\n                  <h5 class=\"text-center\">\n                    {{(plansDataDtoList.length>0 ? (plansDataDtoList[0].cummTotalPlanQty ? plansDataDtoList[0].cummTotalPlanQty : 0) : 0) | number}}\n                  </h5>\n                </div>\n              </div>\n              <p>Cumm Qty</p>\n            </div>\n            <div class=\"col-md-2 truckstatus-card\">\n              <div class=\"media p-3\">\n                <!-- <img src=\"assets/images/Gated In.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                <div class=\"media-body\">\n                  <h5 class=\"text-center\">\n                    {{(plansDataDtoList.length>0 ? (plansDataDtoList[0].cummTotalAvailQty ? plansDataDtoList[0].cummTotalAvailQty : 0) : 0) | number}}\n                  </h5>\n                </div>\n              </div>\n              <p>Cumm Avail Qty</p>\n            </div>\n            <div class=\"col-md-2 truckstatus-card\">\n              <div class=\"media p-3\">\n                <!-- <img src=\"assets/images/Loading.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                <div class=\"media-body\">\n                  <h5 class=\"text-center\">\n                    {{ (plansDataDtoList.length>0 ? (plansDataDtoList[0].cummTotalTotAvailQty ? plansDataDtoList[0].cummTotalTotAvailQty : 0) : 0 )| number}}\n                  </h5>\n                </div>\n              </div>\n              <p>Cumm Total Avail Qty</p>\n            </div>\n            <div class=\"col-md-2 truckstatus-card\">\n              <div class=\"media p-3\">\n                <!-- <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                <div class=\"media-body\">\n                  <h5 class=\"text-center\">\n                    {{(plansDataDtoList.length>0 ? (plansDataDtoList[0].cummTotalReservedQty ? plansDataDtoList[0].cummTotalReservedQty : 0)  : 0)| number}}\n                  </h5>\n\n                </div>\n              </div>\n              <p>Cumm Reserved/Loaded Qty</p>\n            </div>\n\n            <div class=\"col-md-2 truckstatus-card\">\n              <div class=\"media p-3\">\n                <!-- <img src=\"assets/images/reported.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                <div class=\"media-body\">\n                  <h5 class=\"text-center\">\n                    {{(plansDataDtoList.length>0 ? (plansDataDtoList[0].cummTotalTTE ? plansDataDtoList[0].cummTotalTTE : 0) : 0)| number:'1.2-2'}}\n                  </h5>\n\n                </div>\n              </div>\n              <p>Cumm TTE</p>\n            </div>\n            <div class=\"col-md-2 truckstatus-card\">\n              <div class=\"media p-3\">\n                <!-- <img src=\"assets/images/Gated In.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                <div class=\"media-body\">\n                  <h5 class=\"text-center\">\n                    {{ (plansDataDtoList.length>0 ? (plansDataDtoList[0].cummTruckCount ? plansDataDtoList[0].cummTruckCount : 0) : 0 )| number:'1.2-2'}}\n                  </h5>\n                </div>\n              </div>\n              <p>Cumm Truck Count</p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"(plansDataDtoList?.length > 0 && plansDataDtoList[0].itemCategory)\">\n          <ngx-datatable class='material' [rows]='plansDataDtoList' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n            [scrollbarH]=\"flase\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [summaryRow]=\"true\" [summaryHeight]=\"'auto'\"\n            [summaryPosition]=\"'bottom'\" [scrollbarH]=\"true\">\n            <ngx-datatable-column name=\"Item Category\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"itemCategory\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.itemCategory}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Plan Qty\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"totalPlanQty\" [summaryTemplate]=\"totalPlanQty\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalPlanQty ? row.totalPlanQty : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Avail Qty\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"totalAvailQty\" [summaryTemplate]=\"totalAvailQty\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalAvailQty? row.totalAvailQty : 0 ) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Total Avail Qty\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"totalTotAvailQty\" [summaryTemplate]=\"totalTotAvailQty\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalTotAvailQty ? row.totalTotAvailQty : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Total Reserved/Loaded Qty\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"totalReservedQty\" [summaryTemplate]=\"totalReservedQty\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalReservedQty ? row.totalReservedQty : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Total TTE\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"totalTTE\"\n              [summaryTemplate]=\"totalTTE\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalTTE ? row.totalTTE : 0) | number:'1.2-2'}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Total Truck Count\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"truckCount\" [summaryTemplate]=\"truckCount\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.truckCount? row.truckCount : 0 ) | number:'1.2-2'}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Qty\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTotalPlanQty\" [summaryTemplate]=\"cummTotalPlanQty\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalPlanQty ? row.cummTotalPlanQty : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Avail Qty\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTotalAvailQty\" [summaryTemplate]=\"cummTotalAvailQty\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalAvailQty? row.cummTotalAvailQty : 0 ) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Total Avail Qty\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTotalTotAvailQty\" [summaryTemplate]=\"cummTotalTotAvailQty\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalTotAvailQty ? row.cummTotalTotAvailQty : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Reserved/Loaded Qty\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTotalReservedQty\" [summaryTemplate]=\"cummTotalReservedQty\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalReservedQty ? row.cummTotalReservedQty : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm TTE\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTotalTTE\" [summaryTemplate]=\"cummTotalTTE\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalTTE ? row.cummTotalTTE : 0) | number:'1.2-2'}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Truck Count\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTruckCount\" [summaryTemplate]=\"cummTruckCount\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTruckCount? row.cummTruckCount : 0 ) | number:'1.2-2'}}\n              </ng-template>\n            </ngx-datatable-column>\n          </ngx-datatable>\n          <!-- Table bottom grid columns -->\n          <ng-template #totalPlanQty>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(totalPlanQtySum)?(totalPlanQtySum | number):0 | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #totalAvailQty>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(totalAvailQtySum ? totalAvailQtySum : 0) | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #totalTotAvailQty>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(totalTotAvailQtySum ? totalTotAvailQtySum : 0) | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #totalReservedQty>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(totalReservedQtySum ? totalReservedQtySum : 0 ) | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #totalTTE>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(totalTTESum ? totalTTESum : 0) | number:'1.2-2'}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n\n          <ng-template #truckCount>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(truckCountSum ? truckCountSum : 0) | number:'1.2-2'}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTotalPlanQty>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummTotalPlanQtySum)?(cummTotalPlanQtySum | number):0 | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTotalAvailQty>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummTotalAvailQtySum ? cummTotalAvailQtySum : 0) | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTotalTotAvailQty>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummTotalTotAvailQtySum ? cummTotalTotAvailQtySum : 0) | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTotalReservedQty>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummTotalReservedQtySum ? cummTotalReservedQtySum : 0 ) | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTotalTTE>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummTotalTTESum ? cummTotalTTESum : 0) | number:'1.2-2'}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTruckCount>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummTruckCountSum ? cummTruckCountSum : 0) | number:'1.2-2'}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- ROW 1 OPEN PLANS END -->\n  <!-- DISPATCH PLAN START -->\n\n  <div class=\"row\" *ngIf=\"showPlanTables()\">\n    <div class=\"col-md-12\">\n      <div class=\"box\">\n        <h5>Dispatch Plans\n          <span class=\"pull-right\">\n            <!-- <button mat-raised-button color=\"primary\">Export to Excel</button> -->\n            <!-- <button class=\"theme-small-button\" (click)=\"exportOpenPlans()\" matTooltip=\"Export to excel\">\n              <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n            </button> -->\n          </span>\n        </h5>\n        <!-- Filter Row Start -->\n        <div class=\"row\">\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formDispatchPlanPicker\" placeholder=\"From Disp Date\"\n                  [(ngModel)]=\"fromDateDispatchPlan\" name=\"fromDateDispatchPlan\"\n                  (dateChange)=\"addEventDispatchPlan('change', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formDispatchPlanPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formDispatchPlanPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toDispatchPlanPicker\" [min]=\"fromDateDispatchPlan\"\n                  placeholder=\"To Disp Date\" [(ngModel)]=\"toDateDispatchPlan\" name=\"toDateDispatchPlan\">\n                <mat-datepicker-toggle matSuffix [for]=\"toDispatchPlanPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toDispatchPlanPicker [disabled]=\"!fromDateDispatchPlan\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-2 pr-0\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSourceDispatchPlan($event)\" [disabled]=\"(isSoureDisable()) \"\n                autocomplete=\"off\" [matAutocomplete]=\"sourceDispatchPlanAutocomplete\" [(ngModel)]=\"sourceCodeDispatchPlan\" name=\"sourceDispatchPlan\"\n                oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourceDispatchPlanAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceListDispatchPlan\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div> -->\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Source\" [(ngModel)]=\"sourceCodeDispatchPlanList\"\n                  name=\"sourceCodeDispatchPlanList\" multiple [disabled]=\"(isSoureDisable()) \">\n                  <mat-option *ngFor=\"let source of openPlanSourceList\" [value]=\"source\">{{source}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\"\n                  [matAutocomplete]=\"dispatchPlanAutocomplete\" [(ngModel)]=\"destinationDispatchPlan\"\n                  name=\"destinationDispatchPlan\" (keyup)=\"getUserSearchDataDispatchPlan($event)\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #dispatchPlanAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationListDispatchPlan\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"MKT Segment\" [(ngModel)]=\"mktsegmentDispatchPlan\" name=\"mktsegmentDispatchPlan\"\n                  multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let mktsegment of mktsegmentList\" [value]=\"mktsegment\">\n                    {{mktsegment}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Category\" [(ngModel)]=\"materialGroupDispatchPlan\"\n                  name=\"materialGroupDispatchPlan\" multiple>\n                  <mat-option *ngFor=\"let category of categoryList\" [value]=\"category\">{{category}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Plan Status\" [(ngModel)]=\"planStatusDispatchPlan\"\n                  name=\"planStatusDispatchPlan\">\n                  <mat-option *ngFor=\"let status of planStatusList\" [value]=\"status\">{{status}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\" col-md-1 \">\n            <div class=\"search-fileds\">\n              <button class=\"theme-small-button\" (click)=\"searchDispatchPlan()\" matTooltip=\"Search\">\n                <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n              <button class=\"theme-delete-button\" (click)=\"clearAllDispatchPlan()\" matTooltip=\"Clear All\">\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- Filter Row End -->\n\n        <!-- <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th>No. Of Tyres</th>\n              <th>Equivalent Truck Count</th>\n              <th>Cumm Tyres</th>\n              <th>Cumm Equi Truck Count</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{openPlanData.tyreAvailQtySum}}</td>\n              <td>{{openPlanData.tyreTruckCount | number : '1.2-2'}}</td>\n              <td>{{openPlanData.tyreAvailQtySum}}</td>\n              <td>{{openPlanData.tyreTruckCount | number : '1.2-2'}}</td>\n            </tr>\n            <tr>\n              <td colspan=\"10\" class=\"text-center no-data-row\">No data Available</td>\n            </tr>\n          </tbody>\n        </table> -->\n        <div class=\"row rounded-box\"\n          *ngIf=\"((dispatchPlansDtoList?.length == 0) || (dispatchPlansDtoList?.length > 0 && !dispatchPlansDtoList[0].itemCategory))\">\n          <div class=\"col-md-2 truckstatus-card \">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/reported.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(dispatchPlansDtoList.length>0 ? (dispatchPlansDtoList[0].totalDispatchedQty ? dispatchPlansDtoList[0].totalDispatchedQty : 0) : 0) | number}}\n                </h4>\n              </div>\n            </div>\n            <p>Total Disp Qty</p>\n          </div>\n          <div class=\"col-md-2 truckstatus-card\">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/Gated In.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(dispatchPlansDtoList.length>0 ? (dispatchPlansDtoList[0].totalTTE ? dispatchPlansDtoList[0].totalTTE : 0) : 0) | number:'1.2-2'}}\n                </h4>\n              </div>\n            </div>\n            <p>Disp TTE</p>\n          </div>\n          <div class=\"col-md-2 truckstatus-card\">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/Loading.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{ (dispatchPlansDtoList.length>0 ? (dispatchPlansDtoList[0].truckCount ? dispatchPlansDtoList[0].truckCount : 0) : 0 )| number:'1.2-2'}}\n                </h4>\n              </div>\n            </div>\n            <p>Disp Truck Count</p>\n          </div>\n          <div class=\"col-md-2 truckstatus-card \">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(dispatchPlansDtoList.length>0 ? (dispatchPlansDtoList[0].cummTotalDispatchedQty ? dispatchPlansDtoList[0].cummTotalDispatchedQty : 0)  : 0)| number}}\n                </h4>\n\n              </div>\n            </div>\n            <p>Cumm Disp Qty</p>\n          </div>\n          <div class=\"col-md-2 truckstatus-card\">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/reported.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(dispatchPlansDtoList.length>0 ? (dispatchPlansDtoList[0].cummTotalTTE ? dispatchPlansDtoList[0].cummTotalTTE : 0) : 0)| number:'1.2-2'}}\n                </h4>\n\n              </div>\n            </div>\n            <p>Cumm Disp TTE</p>\n          </div>\n          <div class=\"col-md-2 truckstatus-card \">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/Gated In.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{ (dispatchPlansDtoList.length>0 ? (dispatchPlansDtoList[0].cummTruckCount ? dispatchPlansDtoList[0].cummTruckCount : 0) : 0 )| number:'1.2-2' }}\n                </h4>\n              </div>\n            </div>\n            <p>Cumm Disp Truck Count</p>\n          </div>\n\n        </div>\n        <div *ngIf=\"(dispatchPlansDtoList?.length > 0 && dispatchPlansDtoList[0].itemCategory)\">\n          <ngx-datatable class='material' [rows]='dispatchPlansDtoList' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n            [scrollbarH]=\"false\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [summaryRow]=\"true\" [summaryHeight]=\"'auto'\"\n            [summaryPosition]=\"'bottom'\" [scrollbarH]=\"true\">\n            <ngx-datatable-column name=\"Item Category\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"itemCategory\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.itemCategory}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Total Disp Qty\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"totalDispatchedQty\" [summaryTemplate]=\"totalDispatchedQty\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalDispatchedQty ? row.totalDispatchedQty : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Disp TTE\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"totalTTE\"\n              [summaryTemplate]=\"totalTTE\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalTTE ? row.totalTTE : 0) | number:'1.2-2'}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Disp Truck Count\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"truckCount\" [summaryTemplate]=\"truckCount\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.truckCount? row.truckCount : 0 ) | number:'1.2-2'}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Disp Qty\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTotalDispatchedQty\" [summaryTemplate]=\"cummTotalDispatchedQty\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalDispatchedQty ? row.cummTotalDispatchedQty : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Disp TTE\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTotalTTE\" [summaryTemplate]=\"cummTotalTTE\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalTTE ? row.cummTotalTTE : 0) | number:'1.2-2'}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Disp Truck Count\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTruckCount\" [summaryTemplate]=\"cummTruckCount\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTruckCount? row.cummTruckCount : 0 ) | number:'1.2-2'}}\n              </ng-template>\n            </ngx-datatable-column>\n          </ngx-datatable>\n          <!-- Table bottom grid columns -->\n          <ng-template #totalDispatchedQty>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(totalDispatchQtySum)?(totalDispatchQtySum | number):0 | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #totalTTE>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(totalDispTTESum ? totalDispTTESum : 0) | number:'1.2-2'}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n\n          <ng-template #truckCount>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(truckDispCountSum ? truckDispCountSum : 0) | number:'1.2-2'}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTotalDispatchedQty>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummTotalDispatchQtySum)?(cummTotalDispatchQtySum | number):0 | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTotalTTE>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummTotalDispTTESum ? cummTotalDispTTESum : 0) | number:'1.2-2'}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTruckCount>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummTruckDispCountSum ? cummTruckDispCountSum : 0) | number:'1.2-2'}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- DISPATCH PLAN END -->\n  <!-- Row 2 Start INDENT STATUS -->\n  <div class=\"row\">\n\n    <div class=\"col-md-12\">\n      <div class=\"box\">\n        <h5>Indent Status\n          <span class=\"pull-right\">\n            <!-- <button mat-raised-button color=\"primary\">Export to Excel</button> -->\n            <!-- <button class=\"theme-small-button\" (click)=\"exportIndentStatus()\" matTooltip=\"Export to excel\">\n              <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n            </button> -->\n          </span>\n        </h5>\n        <!-- Filter Row Start -->\n        <div class=\"row\">\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formIndStatusPicker\" placeholder=\"From Disp Date\"\n                  [(ngModel)]=\"fromDateIndStatus\" name=\"fromDateIndStatus\"\n                  (dateChange)=\"addEventIndStatus('change', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formIndStatusPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formIndStatusPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toIndStatusPicker\" [min]=\"fromDateIndStatus\"\n                  placeholder=\"To Disp Date\" [(ngModel)]=\"toDateIndStatus\" name=\"toDateIndStatus\">\n                <mat-datepicker-toggle matSuffix [for]=\"toIndStatusPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toIndStatusPicker [disabled]=\"!fromDateIndStatus\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <mat-form-field class=\"example-full-width\">\n              <!-- Source Input editble for DP_REP role & for external wareHouses -->\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSourceIndStatus($event)\"\n                [disabled]=\"(isSoureDisable() || service.CheckExtWareHouse()) \" autocomplete=\"off\"\n                [matAutocomplete]=\"sourceIndentStatusAutocomplete\" [(ngModel)]=\"sourceCodeIndStatus\"\n                name=\"sourceCodeIndStatus\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourceIndentStatusAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceListIndStatus\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"statesAutocomplete\"\n                  [(ngModel)]=\"destinationIndStatus\" name=\"destinationIndStatus\"\n                  (keyup)=\"getUserSearchDataIndStatus($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationListIndStatus\" [value]=\"list.value\">\n                    <span>{{list.value}} - ({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Transporter\" placeholder=\"Transporter\"\n                  (keyup)=\"getfilterTransporterIndStatus($event)\" autocomplete=\"off\"\n                  [matAutocomplete]=\"transporterAutocomplete\" [(ngModel)]=\"transporterIndStatus\"\n                  name=\"transporterIndStatus\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #transporterAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of transporterListIndStatus\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div> -->\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Transporter\" [(ngModel)]=\"transportersIndStatus\" name=\"transportersIndStatus\"\n                  multiple>\n                  <mat-option *ngFor=\"let trans of transporterList\" [value]=\"trans\"> {{trans}} </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Truck/Container Type\" [(ngModel)]=\"truckType\" name=\"trcktype\" multiple>\n                  <mat-option *ngFor=\"let truck of truckList\" [value]=\"truck.value\"> {{truck.value}} </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Category\" [(ngModel)]=\"materialGroupIndentStatus\"\n                  name=\"materialGroupIndentStatus\" multiple>\n                  <mat-option *ngFor=\"let category of categoryListIndentStatus\" [value]=\"category\">{{category}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\" col-md-1 \">\n            <div class=\"search-fileds\">\n              <button class=\"theme-small-button\" (click)=\"searchIndStatus()\" matTooltip=\"Search\">\n                <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n              <button class=\"theme-delete-button\" (click)=\"clearAllIndStatus()\" matTooltip=\"Clear All\">\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- Filter Row End -->\n        <!-- <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th>Destination</th>\n              <th>Planned TTE</th>\n              <th>Indented TTE</th>\n              <th>Balance TTE</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of secondPlanData;let i=index\">\n              <td>{{data.destination}}</td>\n              <td>{{data.plannedTTE}}</td>\n              <td>{{data.indentedTTE}}</td>\n              <td>{{data.balancedTTE}}</td>\n            </tr>\n            <tr>\n              <td *ngIf=\"secondPlanData.length == 0\" colspan=\"10\" class=\"text-center no-data-row\">No data Available</td>\n            </tr>\n          </tbody>\n        </table> -->\n        <div class=\"row rounded-box\"\n          *ngIf=\"((indentStatusDtoList?.length == 0) || (indentStatusDtoList?.length > 0 && !indentStatusDtoList[0].itemCategory))\">\n          <div class=\"col-lg-6 col-md-12 truckstatus-card custom-bootstrap-grid\">\n            <div class=\"row\">\n              <div class=\"col-md-3 \">\n                <div class=\"media p-3\">\n                  <!-- <img src=\"assets/images/reported.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                  <div class=\"media-body\">\n                    <h4 class=\"text-center\">\n                      {{(indentStatusDtoList.length>0 ? (indentStatusDtoList[0].totalNetIndented ? indentStatusDtoList[0].totalNetIndented : 0) : 0) | number}}\n                    </h4>\n                  </div>\n                </div>\n                <p>Total Indented</p>\n              </div>\n              <div class=\"col-md-3 \">\n                <div class=\"media p-3\">\n                  <!-- <img src=\"assets/images/Gated In.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                  <div class=\"media-body\">\n                    <h4 class=\"text-center\">\n                      {{(indentStatusDtoList.length>0 ? (indentStatusDtoList[0].totalReported ? indentStatusDtoList[0].totalReported : 0) : 0) | number}}\n                    </h4>\n                  </div>\n                </div>\n                <p>Total Reported</p>\n              </div>\n              <div class=\"col-md-3 \">\n                <div class=\"media p-3\">\n                  <!-- <img src=\"assets/images/Loading.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                  <div class=\"media-body\">\n                    <h4 class=\"text-center\">\n                      {{ (indentStatusDtoList.length>0 ? (indentStatusDtoList[0].totalRejected ? indentStatusDtoList[0].totalRejected : 0) : 0 )| number}}\n                    </h4>\n                  </div>\n                </div>\n                <p>Total Rejected</p>\n              </div>\n              <div class=\"col-md-3 br-1\">\n                <div class=\"media p-3\">\n                  <!-- <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                  <div class=\"media-body\">\n                    <h4 class=\"text-center\">\n                      {{(indentStatusDtoList.length>0 ? (indentStatusDtoList[0].totalNetBalance ? indentStatusDtoList[0].totalNetBalance : 0)  : 0)| number}}\n                    </h4>\n\n                  </div>\n                </div>\n                <p>Total Net Balance</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12 truckstatus-card custom-bootstrap-grid\">\n            <div class=\"row\">\n              <div class=\"col-md-3 \">\n                <div class=\"media p-3\">\n                  <!-- <img src=\"assets/images/reported.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                  <div class=\"media-body\">\n                    <h4 class=\"text-center\">\n                      {{(indentStatusDtoList.length>0 ? (indentStatusDtoList[0].cummTotalNetIndented ? indentStatusDtoList[0].cummTotalNetIndented : 0) : 0)| number}}\n                    </h4>\n\n                  </div>\n                </div>\n                <p>Cumm Total Indented</p>\n              </div>\n              <div class=\"col-md-3 \">\n                <div class=\"media p-3\">\n                  <!-- <img src=\"assets/images/Gated In.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                  <div class=\"media-body\">\n                    <h4 class=\"text-center\">\n                      {{ (indentStatusDtoList.length>0 ? (indentStatusDtoList[0].cummTotalReported ? indentStatusDtoList[0].cummTotalReported : 0) : 0 )| number}}\n                    </h4>\n                  </div>\n                </div>\n                <p>Cumm Total Reported</p>\n              </div>\n              <div class=\"col-md-3 \">\n                <div class=\"media p-3\">\n                  <!-- <img src=\"assets/images/Loading.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                  <div class=\"media-body\">\n                    <h4 class=\"text-center\">\n                      {{ (indentStatusDtoList.length>0 ? (indentStatusDtoList[0].cummTotalRejected ? indentStatusDtoList[0].cummTotalRejected : 0) : 0) | number}}\n                    </h4>\n                  </div>\n                </div>\n                <p>Cumm Total Rejected</p>\n              </div>\n              <div class=\"col-md-3 \">\n                <div class=\"media p-3\">\n                  <!-- <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n                  <div class=\"media-body\">\n                    <h4 class=\"text-center\">\n                      {{(indentStatusDtoList.length>0 ? (indentStatusDtoList[0].cummTotalNetBalance ? indentStatusDtoList[0].cummTotalNetBalance : 0) : 0) | number}}\n                    </h4>\n\n                  </div>\n                </div>\n                <p>Cumm Total Net Balance</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"(indentStatusDtoList?.length > 0 && indentStatusDtoList[0].itemCategory)\">\n          <ngx-datatable class='material' [rows]='indentStatusDtoList' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n            [scrollbarH]=\"flase\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [summaryRow]=\"true\" [summaryHeight]=\"'auto'\"\n            [summaryPosition]=\"'bottom'\" [scrollbarH]=\"true\">\n            <ngx-datatable-column name=\"Item Category\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"itemCategory\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.itemCategory}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Total Indented\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"totalNetIndented\" [summaryTemplate]=\"totalNetIndented\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalNetIndented ? row.totalNetIndented : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Total Reported\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"totalReported\" [summaryTemplate]=\"totalReported\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalReported? row.totalReported : 0 ) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Total Rejected\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"totalRejected\" [summaryTemplate]=\"totalRejected\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalRejected ? row.totalRejected : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Net Balance\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"totalNetBalance\" [summaryTemplate]=\"totalNetBalance\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalNetBalance ? row.totalNetBalance : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Total Indented\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTotalNetIndented\" [summaryTemplate]=\"cummTotalNetIndented\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalNetIndented ? row.cummTotalNetIndented : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Total Reported\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTotalReported\" [summaryTemplate]=\"cummTotalReported\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalReported? row.cummTotalReported : 0 ) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Total Rejected\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTotalRejected\" [summaryTemplate]=\"cummTotalRejected\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalRejected ? row.cummTotalRejected : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Net Balance\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTotalNetBalance\" [summaryTemplate]=\"cummTotalNetBalance\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalNetBalance ? row.cummTotalNetBalance : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n          </ngx-datatable>\n          <!-- Table bottom grid columns -->\n          <ng-template #totalNetIndented>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(indentedSum)?(indentedSum | number):0 | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #totalReported>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(reportedSum ? reportedSum : 0) | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #totalRejected>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(rejectedSum ? rejectedSum : 0) | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #totalNetBalance>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(balanceSum ? balanceSum : 0 ) | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTotalNetIndented>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummIndentedSum ? cummIndentedSum : 0) | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTotalReported>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummReportedSum ? cummReportedSum : 0) | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTotalRejected>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummRejectedSum ? cummRejectedSum : 0) | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTotalNetBalance>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummBalanceSum ? cummBalanceSum : 0 ) | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- ROW 2 END -->\n  <!-- ROW 3 START PLACEMENT STATUS -->\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"box\">\n        <h5>Placement Status\n          <span class=\"pull-right\">\n            <!-- <button mat-raised-button color=\"primary\">Export to Excel</button> -->\n            <!-- <button class=\"theme-small-button\" (click)=\"exportIndentStatus()\" matTooltip=\"Export to excel\">\n              <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n            </button> -->\n          </span>\n        </h5>\n        <!-- Filter Row Start -->\n        <div class=\"row\">\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formPlacementPicker\" placeholder=\"From Disp Date\"\n                  [(ngModel)]=\"fromDatePlacement\" name=\"fromDatePlacement\"\n                  (dateChange)=\"addEventPlacement('change', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formPlacementPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formPlacementPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toPlacementPicker\" [min]=\"fromDatePlacement\"\n                  placeholder=\"To Disp Date\" [(ngModel)]=\"toDatePlacement\" name=\"toDatePlacement\">\n                <mat-datepicker-toggle matSuffix [for]=\"toPlacementPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toPlacementPicker [disabled]=\"!fromDatePlacement\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <mat-form-field class=\"example-full-width\">\n              <!-- Source Input editble for DP_REP role & for external wareHouses -->\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSourcePlacement($event)\"\n                [disabled]=\"(isSoureDisable() || service.CheckExtWareHouse()) \" autocomplete=\"off\"\n                [matAutocomplete]=\"sourcePlacementAutocomplete\" [(ngModel)]=\"sourceCodePlacement\"\n                name=\"sourceCodePlacement\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourcePlacementAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceListPlacement\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\"\n                  [matAutocomplete]=\"statesPlacementAutocomplete\" [(ngModel)]=\"destinationPlacement\"\n                  name=\"destinationPlacement\" (keyup)=\"getUserSearchDataPlacement($event)\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #statesPlacementAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationListPlacement\" [value]=\"list.value\">\n                    <span>{{list.value}} - ({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Transporter\" placeholder=\"Transporter\"\n                  (keyup)=\"getfilterTransporterPlacement($event)\" autocomplete=\"off\"\n                  [matAutocomplete]=\"transporterPlacementAutocomplete\" [(ngModel)]=\"transporterPlacement\"\n                  name=\"transporterPlacement\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #transporterPlacementAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of transporterListPlacement\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div> -->\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Transporter\" [(ngModel)]=\"transportersPlacementStatus\"\n                  name=\"transportersPlacementStatus\" multiple>\n                  <mat-option *ngFor=\"let trans of transporterList\" [value]=\"trans\"> {{trans}} </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Truck/Container Type\" [(ngModel)]=\"truckTypePlacement\" name=\"trcktypePlacement\"\n                  multiple>\n                  <mat-option *ngFor=\"let truck of truckListPlacement\" [value]=\"truck.value\"> {{truck.value}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Category\" [(ngModel)]=\"materialGroupPlacement\" name=\"materialGroupPlacement\"\n                  multiple>\n                  <mat-option *ngFor=\"let category of categoryListPlacement\" [value]=\"category\">{{category}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\" col-md-1 \">\n            <div class=\"search-fileds\">\n              <button class=\"theme-small-button\" (click)=\"searchPlacement()\" matTooltip=\"Search\">\n                <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n              <button class=\"theme-delete-button\" (click)=\"clearAllPlacement()\" matTooltip=\"Clear All\">\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- Filter Row End -->\n        <!-- <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th>Destination</th>\n              <th>Planned TTE</th>\n              <th>Indented TTE</th>\n              <th>Balance TTE</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of secondPlanData;let i=index\">\n              <td>{{data.destination}}</td>\n              <td>{{data.plannedTTE}}</td>\n              <td>{{data.indentedTTE}}</td>\n              <td>{{data.balancedTTE}}</td>\n            </tr>\n            <tr>\n              <td *ngIf=\"secondPlanData.length == 0\" colspan=\"10\" class=\"text-center no-data-row\">No data Available</td>\n            </tr>\n          </tbody>\n        </table> -->\n        <div class=\"row rounded-box\"\n          *ngIf=\"((indentStatusDtoList.length == 0) || (placementStatusDtoList?.length > 0 && !placementStatusDtoList[0].itemCategory))\">\n          <div class=\"col-lg-1 col-md-2 truckstatus-card custom-bootstrap-grid\">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/reported.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(placementStatusDtoList.length>0 ? (placementStatusDtoList[0].totalNetIndented ? placementStatusDtoList[0].totalNetIndented : 0) : 0) | number}}\n                </h4>\n\n              </div>\n            </div>\n            <p>Total Indented</p>\n          </div>\n          <div class=\"col-lg-1 col-md-2 truckstatus-card custom-bootstrap-grid\">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/Gated In.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(placementStatusDtoList.length>0 ? (placementStatusDtoList[0].totalReported ? placementStatusDtoList[0].totalReported : 0) : 0) | number}}\n                </h4>\n              </div>\n            </div>\n            <p>Total Reported</p>\n          </div>\n          <div class=\"col-lg-1 col-md-2 truckstatus-card custom-bootstrap-grid\">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/Loading.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(placementStatusDtoList.length>0 ? (placementStatusDtoList[0].totalRejected ? placementStatusDtoList[0].totalRejected : 0) : 0 )| number}}\n                </h4>\n              </div>\n            </div>\n            <p>Total Rejected</p>\n          </div>\n          <div class=\"col-lg-1 col-md-2 truckstatus-card custom-bootstrap-grid\">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(placementStatusDtoList.length>0 ? (placementStatusDtoList[0].totalNetBalance ? placementStatusDtoList[0].totalNetBalance : 0) :0) | number}}\n                </h4>\n\n              </div>\n            </div>\n            <p>Total Net Balance</p>\n          </div>\n          <div class=\"col-lg-1 col-md-2 truckstatus-card custom-bootstrap-grid\">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(placementStatusDtoList.length>0 ? (placementStatusDtoList[0].totalNetPlaced  ? placementStatusDtoList[0].totalNetPlaced : 0) :0 )| number}}\n                </h4>\n\n              </div>\n            </div>\n            <p>Total Net Placed</p>\n          </div>\n          <div class=\"col-lg-1 col-md-2 truckstatus-card custom-bootstrap-grid\">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(placementStatusDtoList.length>0 ? (placementStatusDtoList[0].placementPercentage ? placementStatusDtoList[0].placementPercentage : 0 ) :0)  | number:'1.2-2'}}\n                </h4>\n\n              </div>\n            </div>\n            <p>Placement %</p>\n          </div>\n          <div class=\"col-lg-1 col-md-2 truckstatus-card custom-bootstrap-grid\">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/reported.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(placementStatusDtoList.length>0 ? ( placementStatusDtoList[0].cummTotalNetIndented ? placementStatusDtoList[0].cummTotalNetIndented : 0) : 0) | number}}\n                </h4>\n\n              </div>\n            </div>\n            <p>Cumm Indented</p>\n          </div>\n          <div class=\"col-lg-1 col-md-2 truckstatus-card custom-bootstrap-grid\">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/Gated In.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(placementStatusDtoList.length>0 ? (placementStatusDtoList[0].cummTotalReported ? placementStatusDtoList[0].cummTotalReported : 0) : 0) | number}}\n                </h4>\n              </div>\n            </div>\n            <p>Cumm Reported</p>\n          </div>\n          <div class=\"col-lg-1 col-md-2 truckstatus-card custom-bootstrap-grid\">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/Loading.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(placementStatusDtoList.length>0 ? (placementStatusDtoList[0].cummTotalRejected  ? placementStatusDtoList[0].cummTotalRejected : 0) : 0 )| number}}\n                </h4>\n              </div>\n            </div>\n            <p>Cumm Rejected</p>\n          </div>\n          <div class=\"col-lg-1 col-md-2 truckstatus-card custom-bootstrap-grid\">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(placementStatusDtoList.length>0 ? (placementStatusDtoList[0].cummTotalNetBalance ? placementStatusDtoList[0].cummTotalNetBalance : 0) : 0) | number}}\n                </h4>\n\n              </div>\n            </div>\n            <p>Cumm Net Balance</p>\n          </div>\n          <div class=\"col-lg-1 col-md-2 truckstatus-card custom-bootstrap-grid\">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(placementStatusDtoList.length>0 ? (placementStatusDtoList[0].cummTotalNetPlaced ? placementStatusDtoList[0].cummTotalNetPlaced : 0) :0) | number}}\n                </h4>\n\n              </div>\n            </div>\n            <p>Cumm Net Placed</p>\n          </div>\n          <div class=\"col-lg-1 col-md-2 truckstatus-card custom-bootstrap-grid\">\n            <div class=\"media p-3\">\n              <!-- <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\"> -->\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(placementStatusDtoList.length>0 ? (placementStatusDtoList[0].cummPlacementPercentage ? placementStatusDtoList[0].cummPlacementPercentage : 0 )  : 0 ) | number:'1.2-2'}}\n                </h4>\n\n              </div>\n            </div>\n            <p>Cumm Placement %</p>\n          </div>\n        </div>\n        <div *ngIf=\"(placementStatusDtoList?.length > 0 && placementStatusDtoList[0].itemCategory)\">\n          <ngx-datatable class='material' [rows]='placementStatusDtoList' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n            [scrollbarH]=\"false\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [summaryRow]=\"true\" [summaryHeight]=\"'auto'\"\n            [summaryPosition]=\"'bottom'\" [scrollbarH]=\"true\">\n            <ngx-datatable-column name=\"Item Category\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"itemCategory\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.itemCategory}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Total Indented\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"totalNetIndented\" [summaryTemplate]=\"totalNetIndentedPlacement\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalNetIndented ? row.totalNetIndented : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Total Reported\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"totalReported\" [summaryTemplate]=\"totalReportedPlacement\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalReported? row.totalReported : 0 ) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Total Rejected\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"totalRejected\" [summaryTemplate]=\"totalRejectedPlacement\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalRejected ? row.totalRejected : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Net Balance\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"totalNetBalance\" [summaryTemplate]=\"totalNetBalancePlacement\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalNetBalance ? row.totalNetBalance : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Net Plced\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"netPlaced\"\n              [summaryTemplate]=\"netPlacedPlacement\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.totalNetPlaced ? row.totalNetPlaced : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Placement %\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"placementPercentage\" [summaryTemplate]=\"placementPercentagePlacement\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.placementPercentage ? row.placementPercentage : 0) | number : '1.2-2'}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Total Indented\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTotalNetIndented\" [summaryTemplate]=\"cummTotalNetIndentedPlacement\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalNetIndented ? row.cummTotalNetIndented : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Total Reported\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTotalReported\" [summaryTemplate]=\"cummTotalReportedPlacement\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalReported? row.cummTotalReported : 0 ) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Total Rejected\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTotalRejected\" [summaryTemplate]=\"cummTotalRejectedPlacement\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalRejected ? row.cummTotalRejected : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Net Balance\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummTotalNetBalance\" [summaryTemplate]=\"cummTotalNetBalancePlacement\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalNetBalance ? row.cummTotalNetBalance : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Net Plced\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummNetPlaced\" [summaryTemplate]=\"cummNetPlacedPlacement\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummTotalNetPlaced ? row.cummTotalNetPlaced : 0) | number}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Cumm Placement %\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n              prop=\"cummPlacementPercentage\" [summaryTemplate]=\"cummPlacementPercentagePlacement\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{(row.cummPlacementPercentage ? row.cummPlacementPercentage : 0) | number : '1.2-2'}}\n              </ng-template>\n            </ngx-datatable-column>\n          </ngx-datatable>\n          <!-- Table bottom grid columns -->\n          <ng-template #totalNetIndentedPlacement>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(indentedSumPlacement)?(indentedSumPlacement | number):0}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #totalReportedPlacement>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(reportedSumPlacement ? reportedSumPlacement : 0)  | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #totalRejectedPlacement>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(rejectedSumPlacement ? rejectedSumPlacement : 0)  | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #totalNetBalancePlacement>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(balanceSumPlacement ? balanceSumPlacement : 0)  | number }}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #netPlacedPlacement>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(netPlacedSum ? netPlacedSum : 0 )  | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #placementPercentagePlacement>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{placementPercentageSum ? (placementPercentageSum | number: '1.2-2') : 0 }}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTotalNetIndentedPlacement>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummIndentedSumPlacement ? cummIndentedSumPlacement : 0)  | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTotalReportedPlacement>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummReportedSumPlacement ? cummReportedSumPlacement : 0)  | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTotalRejectedPlacement>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummRejectedSumPlacement ? cummRejectedSumPlacement : 0)  | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummTotalNetBalancePlacement>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummBalanceSumPlacement ? cummBalanceSumPlacement : 0)  | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummNetPlacedPlacement>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{(cummNetPlacedSum ? cummNetPlacedSum : 0)  | number}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template #cummPlacementPercentagePlacement>\n            <div class=\"name-container\">\n              <div class=\"chip\">\n                <span class=\"chip-content\">\n                  {{cummPlacementPercentageSum ? (cummPlacementPercentageSum | number: '1.2-2') : 0}}\n                </span>\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- ROW 3 END -->\n  <!-- ROW 4 START UNRATED SHIPMENT -->\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"box\">\n        <h5>Unrated Shipments\n          <span class=\"pull-right\">\n            <!-- <button mat-raised-button color=\"primary\">Export to Excel</button> -->\n            <!-- <button class=\"theme-small-button\" (click) = \"exportIndentStatus()\" matTooltip=\"Export to excel\">\n            <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n          </button> -->\n          </span>\n        </h5>\n        <!-- Filter Row Start -->\n        <div class=\"row\">\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formShipmentStatusPicker\" placeholder=\"From Insert Date\"\n                  [(ngModel)]=\"fromDateShipmentStatus\" name=\"fromDateShipmentStatus\"\n                  (dateChange)=\"addEventShipmentStatus('change', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formShipmentStatusPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formShipmentStatusPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toShipmentStatusPicker\" [min]=\"fromDateShipmentStatus\"\n                  placeholder=\"To Insert Date\" [(ngModel)]=\"toDateShipmentStatus\" name=\"toDateShipmentStatus\">\n                <mat-datepicker-toggle matSuffix [for]=\"toShipmentStatusPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toShipmentStatusPicker [disabled]=\"!fromDateShipmentStatus\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Source\" [(ngModel)]=\"sourceCodeShipmentStatuses\"\n                  name=\"sourceCodeShipmentStatuses\" multiple\n                  [disabled]=\"(isSoureDisable() || service.CheckExtWareHouse()) \">\n                  <mat-option *ngFor=\"let source of shipmentSourceList\" [value]=\"source\">{{source}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\"\n                  [matAutocomplete]=\"statesShipmentStatusAutocomplete\" [(ngModel)]=\"destinationShipmentStatus\"\n                  name=\"destinationShipmentStatus\" (keyup)=\"getUserSearchDataShipmentStatus($event)\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #statesShipmentStatusAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationListShipmentStatus\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Transporter\" placeholder=\"Transporter\"\n                  (keyup)=\"getfilterTransporterShipmentStatus($event)\" autocomplete=\"off\"\n                  [matAutocomplete]=\"transporterAutocompleteShipmentStatus\" [(ngModel)]=\"transporterShipmentStatus\"\n                  name=\"transporterShipmentStatus\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #transporterAutocompleteShipmentStatus=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of transporterListShipmentStatus\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div> -->\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Transporter\" [(ngModel)]=\"transportersShipmentStatus\"\n                  name=\"transportersShipmentStatus\" multiple>\n                  <mat-option *ngFor=\"let trans of transporterList\" [value]=\"trans\"> {{trans}} </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\" col-md-1 \">\n            <div class=\"search-fileds\">\n              <button class=\"theme-small-button\" (click)=\"searchShipmentStatus()\" matTooltip=\"Search\">\n                <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n              <button class=\"theme-delete-button\" (click)=\"clearAllShipmentStatus()\" matTooltip=\"Clear All\">\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- Filter Row End -->\n\n        <!-- <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>Destination</th>\n            <th>Planned TTE</th>\n            <th>Dispatched TTE</th>\n            <th>Balanced TTE</th>\n            <th>Adherance</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of thirdPlanData;let i=index\">\n            <td>{{data.destination}}</td>\n            <td>{{data.plannedTTE}}</td>\n            <td>{{data.dispatchedTTE}}</td>\n            <td>{{data.balancedTTE}}</td>\n            <td>{{data.adherance}}</td>\n          </tr>\n          <tr>\n            <td *ngIf=\"thirdPlanData.length == 0\" colspan=\"10\" class=\"text-center no-data-row\">No data Available</td>\n          </tr>\n        </tbody>\n      </table> -->\n        <ngx-datatable class='material' [rows]='shipmentStatusDataList' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n          [scrollbarH]=\"false\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [summaryRow]=\"true\" [summaryHeight]=\"'auto'\"\n          [summaryPosition]=\"'bottom'\" [scrollbarH]=\"true\">\n          <ngx-datatable-column name=\"Source\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n            prop=\"shipmentWithNReportLoc\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.shipmentWithNReportLoc}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Shipment Without Freight\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n            prop=\"shipmentWithN\" [summaryTemplate]=\"shipmentWithN\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.shipmentWithN ? row.shipmentWithN : 0) | number}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Shipment With Freight\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n            prop=\"shipmentWithY\" [summaryTemplate]=\"shipmentWithY\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.shipmentWithY? row.shipmentWithY : 0 ) | number}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Total\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"total\"\n            [summaryTemplate]=\"total\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.total ? row.total : 0) | number}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Shipment Without Freight %\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n            prop=\"total\" [summaryTemplate]=\"shipmentWithoutFreightPer\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.total && row.shipmentWithN ? (((row.shipmentWithN ? row.shipmentWithN : 0) / (row.total ? row.total : 0)) *100) : 0) | number : '1.2-2'}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Cumm Without Freight\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n            prop=\"cummShipmentWithN\" [summaryTemplate]=\"cummShipmentWithN\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.cummShipmentWithN ? row.cummShipmentWithN : 0) | number}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Cumm With Freight\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n            prop=\"cummShipmentWithY\" [summaryTemplate]=\"cummShipmentWithY\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.cummShipmentWithY ? row.cummShipmentWithY : 0) | number}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Cumm Total\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"cummTotal\"\n            [summaryTemplate]=\"cummTotal\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.cummTotal ? row.cummTotal : 0) | number}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Cumm Without Freight %\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n            prop=\"total\" [summaryTemplate]=\"cummWithoutFreightPer\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.cummTotal && row.cummShipmentWithN ? (((row.cummShipmentWithN ? row.cummShipmentWithN : 0) / (row.cummTotal ? row.cummTotal : 0)) * 100) : 0) | number: '1.2-2'}}\n            </ng-template>\n          </ngx-datatable-column>\n\n        </ngx-datatable>\n        <!-- Table bottom grid columns -->\n        <ng-template #shipmentWithN>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{(shipmentWithNSum)?(shipmentWithNSum | number):0}}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n        <ng-template #shipmentWithY>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{(shipmentWithYSum ? shipmentWithYSum : 0)  | number}}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n        <ng-template #total>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{(totalSum ? totalSum : 0)  | number}}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n        <ng-template #shipmentWithoutFreightPer>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{(shipmentWithoutFreightPerSum ? shipmentWithoutFreightPerSum : 0)  | number : '1.2-2'}}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n        <ng-template #cummShipmentWithN>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{(cummShipmentWithNSum ? cummShipmentWithNSum : 0)  | number }}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n        <ng-template #cummShipmentWithY>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{(cummShipmentWithYSum ? cummShipmentWithYSum : 0 )  | number}}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n        <ng-template #cummTotal>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{cummTotalSum ? (cummTotalSum | number) : 0 }}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n        <ng-template #cummWithoutFreightPer>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{cummWithoutFreightPerSum ? (cummWithoutFreightPerSum | number: '1.2-2') : 0 }}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n  <!-- ROW 4 END -->\n  <!-- ROW START PLAN UPLOAD -->\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"box \">\n        <h5>Plan Upload\n          <!-- <span class=\"pull-right\">\n            <button mat-raised-button color=\"primary\">Export to Excel</button>\n          </span> -->\n        </h5>\n        <!-- Filter Row Start -->\n        <div class=\"row \">\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formPlanUploadPicker\" placeholder=\"From Disp Date\"\n                  [(ngModel)]=\"fromDatePlanUpload\" name=\"fromDatePlanUpload\"\n                  (dateChange)=\"addEventPlanUpload('change', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formPlanUploadPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formPlanUploadPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toPlanUploadPicker\" [min]=\"fromDatePlanUpload\"\n                  placeholder=\"To Disp Date\" [(ngModel)]=\"toDatePlanUpload\" name=\"toDatePlanUpload\">\n                <mat-datepicker-toggle matSuffix [for]=\"toPlanUploadPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toPlanUploadPicker [disabled]=\"!fromDatePlanUpload\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-1 pr-0\">\n              <mat-form-field class=\"example-full-width\">\n                \n                <input matInput placeholder=\"Source\" (keyup)=\"getfilterSourcePlanUpload($event)\"\n                  [disabled]=\"(isSoureDisable()) \" autocomplete=\"off\" [matAutocomplete]=\"sourcePlanUploadAutocomplete\"\n                  [(ngModel)]=\"sourceCodePlanUpload\" name=\"sourcePlanUpload\"\n                  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #sourcePlanUploadAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of sourceListPlanUpload\" [value]=\"list.value\">\n                    <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div> -->\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Source\" [(ngModel)]=\"sourceCodePlanUploads\" name=\"sourceCodePlanUploads\"\n                  multiple [disabled]=\"(isSoureDisable()) \">\n                  <mat-option *ngFor=\"let source of openPlanSourceList\" [value]=\"source\">{{source}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"PlanUploadAutocomplete\"\n                  [(ngModel)]=\"destinationPlanUpload\" name=\"destinationPlanUpload\"\n                  (keyup)=\"getUserSearchDataPlanUpload($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #PlanUploadAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationListPlanUpload\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Category\" [(ngModel)]=\"materialGroupPlanUpload\" name=\"materialGroupPlanUpload\"\n                  multiple>\n                  <mat-option *ngFor=\"let category of categoryList\" [value]=\"category\">{{category}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"MKT Segment\" [(ngModel)]=\"mktsegmentPlanUpload\" name=\"mktsegmentPlanUpload\"\n                  multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let mktsegment of mktsegmentList\" [value]=\"mktsegment\">\n                    {{mktsegment}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Plan Status\" [(ngModel)]=\"planStatusPlanUpload\" name=\"planStatusPlanUpload\">\n                  <mat-option *ngFor=\"let status of planStatusList\" [value]=\"status\">{{status}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\" col-md-1 \">\n            <div class=\"search-fileds\">\n              <button class=\"theme-small-button\" (click)=\"searchPlanUpload()\" matTooltip=\"Search\">\n                <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n              <button class=\"theme-delete-button\" (click)=\"clearAllPlanUpload()\" matTooltip=\"Clear All\">\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- Filter Row End -->\n        <!-- <table class=\"table table-bordered cust-table\">\n          <thead>\n            <tr>\n              <th>User Roles</th>\n              <th>Total No Of Lines</th>\n              <th>Total No Of Lines %</th>\n              <th>Cumm No Of Lines</th>\n              <th>Cumm No Of Lines %</th>\n            </tr>\n          </thead>\n          <tbody *ngFor=\"let planUploadDto of planUploadDtoList\">\n            <tr>\n              <td colspan=\"5\" style=\"text-align: center; font-size: 15px;background-color: lightgrey\">\n                <b>{{planUploadDto.sourceLoc}}</b></td>\n            </tr>\n            <tr>\n              <td><b>PLN/RDC</b></td>\n              <td>{{(planUploadDto?.uploadedByOthers?planUploadDto?.uploadedByOthers:0) | number}}</td>\n              <td>{{(planUploadDto?.percentageOthers?planUploadDto?.percentageOthers:0) | number:'1.2-2'}}</td>\n              <td>{{(planUploadDto?.cummUploadedByOthers?planUploadDto?.cummUploadedByOthers: 0) | number}}</td>\n              <td>{{(planUploadDto?.cummPercentageOthers?planUploadDto?.cummPercentageOthers:0) | number:'1.2-2'}}</td>\n            </tr>\n            <tr>\n              <td><b>3PL</b></td>\n              <td>{{(planUploadDto?.uploadedBy3PL?planUploadDto?.uploadedBy3PL:0) | number}}</td>\n              <td>{{(planUploadDto?.percentage3PL?planUploadDto?.percentage3PL:0) | number:'1.2-2'}}</td>\n              <td>{{(planUploadDto?.cummUploadedBy3PL?planUploadDto?.cummUploadedBy3PL: 0) | number}}</td>\n              <td>{{(planUploadDto?.cummPercentage3PL?planUploadDto?.cummPercentage3PL:0) | number:'1.2-2'}}</td>\n            </tr>\n          </tbody>\n        </table> -->\n        <ngx-datatable class='material' [rows]='planUploadDtoList' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n          [scrollbarH]=\"false\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [summaryRow]=\"true\" [summaryHeight]=\"'auto'\"\n          [summaryPosition]=\"'bottom'\" [scrollbarH]=\"true\">\n          <ngx-datatable-column name=\"Source\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"sourceLoc\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.sourceLoc}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"No Of Lines By PLN/RDC\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n            prop=\"uploadedByOthers\" [summaryTemplate]=\"uploadedByOthers\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.uploadedByOthers ? row.uploadedByOthers : 0) | number}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"No Of Lines By 3PL\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n            prop=\"uploadedBy3PL\" [summaryTemplate]=\"uploadedBy3PL\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.uploadedBy3PL? row.uploadedBy3PL : 0 ) | number}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"No Of Lines % By PLN/RDC\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n            prop=\"percentageOthers\" [summaryTemplate]=\"percentageOthers\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.percentageOthers ? row.percentageOthers : 0) | number: '1.2-2'}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"No Of Lines % By 3PL\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n            prop=\"total\" [summaryTemplate]=\"percentage3PL\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.percentage3PL ? row.percentage3PL : 0) | number : '1.2-2'}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Cumm No Of Lines By PLN/RDC\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n            prop=\"cummUploadedByOthers\" [summaryTemplate]=\"cummUploadedByOthers\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.cummUploadedByOthers ? row.cummUploadedByOthers : 0) | number}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Cumm No Of Lines By 3PL\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n            prop=\"cummUploadedBy3PL\" [summaryTemplate]=\"cummUploadedBy3PL\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.cummUploadedBy3PL? row.cummUploadedBy3PL : 0 ) | number}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Cumm No Of Lines % By PLN/RDC\" [width]=\"150\" [resizeable]=\"false\"\n            [sortable]=\"true\" prop=\"cummPercentageOthers\" [summaryTemplate]=\"cummPercentageOthers\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.cummPercentageOthers ? row.cummPercentageOthers : 0) | number: '1.2-2'}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"cumm No Of Lines % By 3PL\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n            prop=\"cummPercentage3PL\" [summaryTemplate]=\"cummPercentage3PL\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{(row.cummPercentage3PL ? row.cummPercentage3PL : 0) | number : '1.2-2'}}\n            </ng-template>\n          </ngx-datatable-column>\n\n        </ngx-datatable>\n        <!-- Table bottom grid columns -->\n        <ng-template #uploadedByOthers>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{(uploadedByOthersSum)?(uploadedByOthersSum | number):0}}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n        <ng-template #uploadedBy3PL>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{(uploadedBy3PLSum ? uploadedBy3PLSum : 0)  | number}}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n        <ng-template #percentageOthers>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{(percentageOthersSum ? percentageOthersSum : 0)  | number:'1.2-2'}}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n        <ng-template #percentage3PL>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{(percentage3PLSum ? percentage3PLSum : 0)  | number : '1.2-2'}}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n        <ng-template #cummUploadedByOthers>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{(cummUploadedByOthersSum ? cummUploadedByOthersSum : 0)  | number }}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n        <ng-template #cummUploadedBy3PL>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{(cummUploadedBy3PLSum ? cummUploadedBy3PLSum : 0 )  | number}}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n        <ng-template #cummPercentageOthers>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{cummPercentageOthersSum ? (cummPercentageOthersSum | number:'1.2-2') : 0 }}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n        <ng-template #cummPercentage3PL>\n          <div class=\"name-container\">\n            <div class=\"chip\">\n              <span class=\"chip-content\">\n                {{cummPercentage3PLSum ? (cummPercentage3PLSum | number: '1.2-2') : 0 }}\n              </span>\n            </div>\n          </div>\n        </ng-template>\n\n      </div>\n    </div>\n  </div>\n\n  <!-- ROW END PLAN UPLOAD -->\n  <!-- ROW 5 Start -->\n  <div class=\"row\" *ngIf=\"showPlanTables()\">\n    <div class=\"col-md-12\">\n      <div class=\"box cust-box\">\n        <h5>Ageing\n          <!-- <span class=\"pull-right\">\n          <button mat-raised-button color=\"primary\">Export to Excel</button>\n        </span> -->\n        </h5>\n        <!-- Filter Row Start -->\n        <div class=\"row \">\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formPlanAgeingPicker\" placeholder=\"From Disp Date\"\n                  [(ngModel)]=\"fromDatePlanAgeing\" name=\"fromDatePlanAgeing\"\n                  (dateChange)=\"addEventPlanAgeing('change', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formPlanAgeingPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formPlanAgeingPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toPlanAgeingPicker\" [min]=\"fromDatePlanAgeing\"\n                  placeholder=\"To Disp Date\" [(ngModel)]=\"toDatePlanAgeing\" name=\"toDatePlanAgeing\">\n                <mat-datepicker-toggle matSuffix [for]=\"toPlanAgeingPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toPlanAgeingPicker [disabled]=\"!fromDatePlanAgeing\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-2 pr-0\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSourcePlanAgeing($event)\"\n                [disabled]=\"(isSoureDisable()) \" autocomplete=\"off\" [matAutocomplete]=\"sourcePlanAgeingAutocomplete\"\n                [(ngModel)]=\"sourceCodePlanAgeing\" name=\"sourcePlanAgeing\"\n                oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourcePlanAgeingAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceListPlanAgeing\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div> -->\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Source\" [(ngModel)]=\"sourceCodePlanAgeing\" name=\"sourceCodePlanAgeing\"\n                  [disabled]=\"(isSoureDisable()) \">\n                  <mat-option *ngFor=\"let source of openPlanSourceList\" [value]=\"source\">{{source}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"planAgeingAutocomplete\"\n                  [(ngModel)]=\"destinationPlanAgeing\" name=\"destinationPlanAgeing\"\n                  (keyup)=\"getUserSearchDataPlanAgeing($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #planAgeingAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationListPlanAgeing\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Category\" [(ngModel)]=\"materialGroupPlanAgeing\" name=\"materialGroupPlanAgeing\"\n                  multiple>\n                  <mat-option *ngFor=\"let category of categoryList\" [value]=\"category\">{{category}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"MKT Segment\" [(ngModel)]=\"mktsegmentPlanAgeing\" name=\"mktsegment\" multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let mktsegment of mktsegmentList\" [value]=\"mktsegment\">\n                    {{mktsegment}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Plan Status\" [(ngModel)]=\"planStatusPlanAgeing\" name=\"planStatusPlanAgeing\">\n                  <mat-option *ngFor=\"let status of planStatusList\" [value]=\"status\">{{status}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\" col-md-1 \">\n            <div class=\"search-fileds\">\n              <button class=\"theme-small-button\" (click)=\"searchPlanAgeing()\" matTooltip=\"Search\">\n                <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n              <button class=\"theme-delete-button\" (click)=\"clearAllPlanAgeing()\" matTooltip=\"Clear All\">\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- Filter Row End -->\n        <table class=\"table table-bordered cust-table\">\n          <thead>\n            <tr>\n              <th>Age Bucket</th>\n              <th>No Of Lines</th>\n              <th>Total Avail Qty (Including Reserved+Loaded)</th>\n              <th>Cumm No Of Lines</th>\n              <th>Cumm Total Avail Qty (Including Reserved+Loaded)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <!-- <td>0-2 Days</td> -->\n              <td>\n                <!--<input name=\"myInput\" matInput ng-model=\"firstLineStart\" ng-maxlength=\"2\"> -->\n                <input name=\"firstLineStart\" class=\"cust-input\" [(ngModel)]=\"firstLineStart\" maxlength=\"3\">\n                &nbsp; TO &nbsp;<input name=\"firstLineEnd\" class=\"cust-input\" [(ngModel)]=\"firstLineEnd\" maxlength=\"3\">\n                &nbsp; DAYS\n              </td>\n              <td>{{(planAgeingData?.lessThan2Count?planAgeingData?.lessThan2Count:0) | number}}</td>\n              <td>{{(planAgeingData?.lessThan2?planAgeingData?.lessThan2:0) | number}}</td>\n              <td>{{(planAgeingData?.cummLessThan2Count?planAgeingData?.cummLessThan2Count: 0) | number}}</td>\n              <td>{{(planAgeingData?.cummLessThan2?planAgeingData?.cummLessThan2:0) | number}}</td>\n            </tr>\n            <tr>\n              <!-- <td>2-7 Days</td> -->\n              <td>\n                <!--<input name=\"myInput\" matInput ng-model=\"firstLineStart\" ng-maxlength=\"2\"> -->\n                <input name=\"secondLineStart\" class=\"cust-input\" [(ngModel)]=\"secondLineStart\" maxlength=\"3\">\n                &nbsp; TO &nbsp;<input name=\"secondLineEnd\" class=\"cust-input\" [(ngModel)]=\"secondLineEnd\"\n                  maxlength=\"3\">\n                &nbsp; DAYS\n              </td>\n              <td>{{(planAgeingData?.lessThan7Count?planAgeingData?.lessThan7Count:0) | number}}</td>\n              <td>{{(planAgeingData?.lessThan7?planAgeingData?.lessThan7:0) | number}}</td>\n              <td>{{(planAgeingData?.cummLessThan7Count?planAgeingData?.cummLessThan7Count : 0) | number}}</td>\n              <td>{{(planAgeingData?.cummLessThan7?planAgeingData?.cummLessThan7 : 0) | number}}</td>\n            </tr>\n            <tr>\n              <!-- <td> > 7 Days</td> -->\n              <td>\n                <!--<input name=\"myInput\" matInput ng-model=\"firstLineStart\" ng-maxlength=\"2\"> -->\n                > &nbsp; <input name=\"thirdLine\" class=\"cust-input\" [(ngModel)]=\"thirdLine\" maxlength=\"3\">\n                &nbsp;DAYS\n              </td>\n              <td>{{(planAgeingData?.greaterThan7Count?planAgeingData?.greaterThan7Count:0) | number}}</td>\n              <td>{{(planAgeingData?.greaterThan7?planAgeingData?.greaterThan7:0) | number}}</td>\n              <td>{{(planAgeingData?.cummGreaterThan7Count?planAgeingData?.cummGreaterThan7Count : 0) | number}}</td>\n              <td>{{(planAgeingData?.cummGreaterThan7?planAgeingData?.cummGreaterThan7Count : 0) | number}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  <!-- ROW 5 END -->\n\n  <!-- ROW 6 START DELAYED DAYS -->\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"box cust-box\">\n        <h5>Delayed Days\n          <!-- <span class=\"pull-right\">\n          <button mat-raised-button color=\"primary\">Export to Excel</button>\n        </span> -->\n        </h5>\n        <!-- Filter Row Start -->\n        <div class=\"row \">\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"formDelayedDaysPicker\" placeholder=\"From Insert Date\"\n                  [(ngModel)]=\"fromDateDelayedDays\" name=\"fromDateDelayedDays\"\n                  (dateChange)=\"addEventDelayedDays('change', $event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"formDelayedDaysPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #formDelayedDaysPicker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field>\n                <input matInput disabled [matDatepicker]=\"toDelayedDaysPicker\" [min]=\"fromDateDelayedDays\"\n                  placeholder=\"To Insert Date\" [(ngModel)]=\"toDateDelayedDays\" name=\"toDateDelayedDays\">\n                <mat-datepicker-toggle matSuffix [for]=\"toDelayedDaysPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toDelayedDaysPicker [disabled]=\"!fromDateDelayedDays\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <mat-form-field class=\"example-full-width\">\n              <!-- Source Input editble for DP_REP role & for external wareHouses -->\n              <input matInput placeholder=\"Source\" (keyup)=\"getfilterSourceDelayedDays($event)\"\n                [disabled]=\"(isSoureDisable()  || service.CheckExtWareHouse()) \" autocomplete=\"off\"\n                [matAutocomplete]=\"sourceDelayedDaysAutocomplete\" [(ngModel)]=\"sourceCodeDelayedDays\"\n                name=\"sourceDelayedDays\" oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-autocomplete #sourceDelayedDaysAutocomplete=\"matAutocomplete\">\n                <mat-option *ngFor=\"let list of sourceListDelayedDays\" [value]=\"list.value\">\n                  <span matTooltip={{list.value}}>{{list.value}} - ({{list.description}})</span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Destination\" aria-label=\"State\" [matAutocomplete]=\"delayedDaysAutocomplete\"\n                  [(ngModel)]=\"destinationDelayedDays\" name=\"destinationDelayedDays\"\n                  (keyup)=\"getUserSearchDataDelayedDays($event)\" oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #delayedDaysAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of destinationListDelayedDays\" [value]=\"list.value\">\n                    <span>{{list.value}}</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-2 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Category\" [(ngModel)]=\"materialGroupDelayedDays\"\n                  name=\"materialGroupDelayedDays\" multiple>\n                  <mat-option *ngFor=\"let category of categoryListDelayedDays\" [value]=\"category\">{{category}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"MKT Segment\" [(ngModel)]=\"mktsegmentDelayedDays\" name=\"mktsegmentDelayedDays\"\n                  multiple>\n                  <!-- <mat-option [value]=\"\">None</mat-option> -->\n                  <mat-option *ngFor=\"let mktsegment of mktsegmentList\" [value]=\"mktsegment\">\n                    {{mktsegment}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group cust-form-group\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-select placeholder=\"Shipment Status\" [(ngModel)]=\"shipmentStatusDelayedDays\"\n                  name=\"shipmentStatusDelayedDays\" multiple>\n                  <mat-option *ngFor=\"let status of shipmentStatusList\" [value]=\"status\">{{status}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\" col-md-1 \">\n            <div class=\"search-fileds\">\n              <button class=\"theme-small-button\" (click)=\"searchDelayedDays()\" matTooltip=\"Search\">\n                <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n              </button>\n              <button class=\"theme-delete-button\" (click)=\"clearAllDelayedDays()\" matTooltip=\"Clear All\">\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- Filter Row End -->\n        <table class=\"table table-bordered cust-table\">\n          <thead>\n            <tr>\n              <th>Age Bucket</th>\n              <th>No Of Shipments</th>\n              <th>Cumm No Of Shipments</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <!-- <td>0-2 Days</td> -->\n              <td>\n                <!--<input name=\"myInput\" matInput ng-model=\"firstLineStart\" ng-maxlength=\"2\"> -->\n                <input name=\"firstLineStart\" class=\"cust-input\" [(ngModel)]=\"firstLineStartDelayedDays\" maxlength=\"3\">\n                &nbsp; TO &nbsp;<input name=\"firstLineEnd\" class=\"cust-input\" [(ngModel)]=\"firstLineEndDelayedDays\"\n                  maxlength=\"3\">\n                &nbsp; DAYS\n              </td>\n              <td>{{(delayedDaysDto?.lessThan2?delayedDaysDto?.lessThan2:0) | number}}</td>\n              <td>{{(delayedDaysDto?.cummLessThan2?delayedDaysDto?.cummLessThan2:0) | number}}</td>\n            </tr>\n            <tr>\n              <!-- <td>2-7 Days</td> -->\n              <td>\n                <!--<input name=\"myInput\" matInput ng-model=\"firstLineStart\" ng-maxlength=\"2\"> -->\n                <input name=\"secondLineStart\" class=\"cust-input\" [(ngModel)]=\"secondLineStartDelayedDays\" maxlength=\"3\">\n                &nbsp; TO &nbsp;<input name=\"secondLineEnd\" class=\"cust-input\" [(ngModel)]=\"secondLineEndDelayedDays\"\n                  maxlength=\"3\">\n                &nbsp; DAYS\n              </td>\n              <td>{{(delayedDaysDto?.lessThan7?delayedDaysDto?.lessThan7:0) | number}}</td>\n              <td>{{(delayedDaysDto?.cummLessThan7?delayedDaysDto?.cummLessThan7:0) | number}}</td>\n            </tr>\n            <tr>\n              <!-- <td> > 7 Days</td> -->\n              <td>\n                <!--<input name=\"myInput\" matInput ng-model=\"firstLineStart\" ng-maxlength=\"2\"> -->\n                > &nbsp; <input name=\"thirdLine\" class=\"cust-input\" [(ngModel)]=\"thirdLineDelayedDays\" maxlength=\"3\">\n                &nbsp;DAYS\n              </td>\n              <td>{{(delayedDaysDto?.greaterThan7?delayedDaysDto?.greaterThan7:0) | number}}</td>\n              <td>{{(delayedDaysDto?.cummGreaterThan7?delayedDaysDto?.cummGreaterThan7:0) | number}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- ROW 6 END DELAYED DAYS -->\n<!-- <div class=\"row\">\n    <div class='col-md-6'>\n      <div class='box'>\n        <h5>Truck Status\n        </h5>\n        <div class=\"row rounded-box\">\n          <div class=\"col-md-3 truckstatus-card\">\n            <div class=\"media p-3\">\n              <img src=\"assets/images/reported.svg\" class=\"img img-fluid\" style=\"width:30px;\">\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">{{truckStatusStatics?.reportedTrucksCount?truckStatusStatics?.reportedTrucksCount:0}}</h4>\n\n              </div>\n            </div>\n            <p>Reported &amp; Waiting</p>\n          </div>\n          <div class=\"col-md-3 truckstatus-card\">\n            <div class=\"media p-3\">\n              <img src=\"assets/images/Gated In.svg\" class=\"img img-fluid\" style=\"width:30px;\">\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">{{truckStatusStatics?.gatedInTrucksCount?truckStatusStatics?.gatedInTrucksCount:0}}</h4>\n              </div>\n            </div>\n            <p>Gated - In</p>\n          </div>\n          <div class=\"col-md-3 truckstatus-card\">\n            <div class=\"media p-3\">\n              <img src=\"assets/images/Loading.svg\" class=\"img img-fluid\" style=\"width:30px;\">\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">{{truckStatusStatics?.trucksLoadingIn?truckStatusStatics?.trucksLoadingIn:0}}</h4>\n              </div>\n            </div>\n            <p>In Loading</p>\n          </div>\n          <div class=\"col-md-3 truckstatus-card\">\n            <div class=\"media p-3\">\n              <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\">\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">{{truckStatusStatics?.watingMoreThen3HTrucks?truckStatusStatics?.watingMoreThen3HTrucks:0}}</h4>\n\n              </div>\n            </div>\n            <p>Waiting > Xhrs</p>\n          </div>\n          <div class=\"col-md-3 truckstatus-card\">\n            <div class=\"media p-3\">\n              <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\">\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">{{truckStatusStatics?.excessWaitingLocCount?truckStatusStatics?.excessWaitingLocCount:0}}</h4>\n\n              </div>\n            </div>\n            <p>Reported & Waiting > Xhrs</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='col-md-6'>\n      <div class='box'>\n        <h5>TTE Pending Planner Approval : --\n        </h5>\n      </div>\n    </div>\n  </div> -->\n\n\n<div class=\"container-fluid\" *ngIf=\"isGateRole()\" [ngClass]=\"{'content' : 'isGateRole()'}\">\n  <div class=\"row\">\n    <div class=\"col-md-12 \">\n      <div class='box'>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <h5 class=\"margin-top-10\"> Truck Status</h5>\n          </div>\n          <div class=\"col-md-3 offset-5\" *ngIf=\"checkShow()\">\n            <mat-form-field class=\"locationDropdown\">\n              <mat-label>Select Location</mat-label>\n              <mat-select name=\"locations\" [(ngModel)]=\"location\" (ngModelChange)=\"getTrcukdetails(location)\">\n                <mat-option *ngFor=\"let item of locations\" [value]=\"item\">\n                  {{item}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"row rounded-box\">\n          <div class=\"col-md-3 truckstatus-card\">\n            <div class=\"media p-3\">\n              <img src=\"assets/images/reported.svg\" class=\"img img-fluid\" style=\"width:30px;\">\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{truckStatusStatics?.reportedTrucksCount?truckStatusStatics?.reportedTrucksCount:0}}</h4>\n\n              </div>\n            </div>\n            <p>Reported &amp; Waiting</p>\n          </div>\n          <div class=\"col-md-3 truckstatus-card\">\n            <div class=\"media p-3\">\n              <img src=\"assets/images/Gated In.svg\" class=\"img img-fluid\" style=\"width:30px;\">\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{truckStatusStatics?.gatedInTrucksCount?truckStatusStatics?.gatedInTrucksCount:0}}</h4>\n              </div>\n            </div>\n            <p>Gated - In</p>\n          </div>\n          <div class=\"col-md-3 truckstatus-card\">\n            <div class=\"media p-3\">\n              <img src=\"assets/images/Loading.svg\" class=\"img img-fluid\" style=\"width:30px;\">\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">{{truckStatusStatics?.trucksLoadingIn?truckStatusStatics?.trucksLoadingIn:0}}\n                </h4>\n              </div>\n            </div>\n            <p>In Loading</p>\n          </div>\n          <div class=\"col-md-3 truckstatus-card\">\n            <div class=\"media p-3\">\n              <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\">\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{(truckStatusStatics?.watingMoreThen3HTrucks)?(truckStatusStatics?.watingMoreThen3HTrucks):0}}</h4>\n\n              </div>\n            </div>\n            <p>Waiting (Gated In/Under Loading) >\n              {{(truckStatusStatics?.excessWaitingTime)?(truckStatusStatics?.excessWaitingTime):'X'}}hrs</p>\n          </div>\n          <div class=\"col-md-3 truckstatus-card\">\n            <div class=\"media p-3\">\n              <img src=\"assets/images/waiting.svg\" class=\"img img-fluid\" style=\"width:30px;\">\n              <div class=\"media-body\">\n                <h4 class=\"text-center\">\n                  {{truckStatusStatics?.excessWaitingLocCount?truckStatusStatics?.excessWaitingLocCount:0}}</h4>\n\n              </div>\n            </div>\n            <p>Reported & Waiting >\n              {{(truckStatusStatics?.excessReportingWaitingTime)?(truckStatusStatics?.excessReportingWaitingTime):'X'}}hrs\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/planner/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/planner/home/home.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  margin: 15px 0px;\n  padding: 15px;\n  box-shadow: 0px 0px 8px 1px #dee2e6;\n  background-color: #ffffff;\n  border-radius: 6px; }\n\n.rounded-box {\n  width: 100%;\n  margin: auto;\n  margin-top: 40px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  height: auto;\n  margin-top: 0px; }\n\n.rounded-box .col-md-3.truckstatus-card {\n    border-right: 1px solid #dee2e6;\n    padding: 0px;\n    max-width: 20% !important; }\n\n.rounded-box .col-md-1.truckstatus-card {\n    border-right: 0.5px solid #dee2e6;\n    padding: 0px;\n    max-width: 8.33% !important; }\n\n.rounded-box .col-md-2.truckstatus-card {\n    border-right: 1px solid #dee2e6;\n    padding: 0px;\n    max-width: 20% !important; }\n\n.rounded-box .col-md-2.truckstatus-card p {\n      padding-bottom: 1rem; }\n\n.rounded-box .col-md-6.truckstatus-card {\n    border-right: 1px solid #dee2e6;\n    padding: 0px;\n    max-width: 50% !important; }\n\n.rounded-box .col-md-6.truckstatus-card p {\n      padding-bottom: 1rem; }\n\n.rounded-box div:last-child.col-md-3 {\n    border-right: 0px; }\n\n.rounded-box p {\n    text-align: center; }\n\n.rounded-box h5 {\n    font-size: 1.3rem; }\n\n.rounded-box .form-group {\n    margin-bottom: 0rem; }\n\n.cust-box {\n  padding: 12px; }\n\n.cust-row {\n  height: 3.5rem; }\n\n.cust-form-group {\n  margin-bottom: 4px; }\n\n.cust-table {\n  margin-bottom: 0px; }\n\n.content {\n  width: 60%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%); }\n\n.cust-input {\n  width: 25px;\n  border: 0px;\n  border-bottom: 1px solid black !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhbm5lci9ob21lL0M6XFxVc2Vyc1xcQW51cmFnU2FpbmlcXERvd25sb2Fkc1xcYXRvbS11aV9vcmlnaW5hbF8yMTA5MjAyMlxcYXRvbS11aS9zcmNcXGFwcFxccGxhbm5lclxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGxhbm5lci9ob21lL0M6XFxVc2Vyc1xcQW51cmFnU2FpbmlcXERvd25sb2Fkc1xcYXRvbS11aV9vcmlnaW5hbF8yMTA5MjAyMlxcYXRvbS11aS9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1DQ2N3QjtFRGJ4Qix5QkNBZ0I7RURDaEIsa0JBQWtCLEVBQUE7O0FBS3RCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJDR3dCO0VERnhCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQVBuQjtJQVNRLCtCQ0ZvQjtJREdwQixZQUFXO0lBQ1gseUJBQXlCLEVBQUE7O0FBWGpDO0lBY1EsaUNDUG9CO0lEUXBCLFlBQVc7SUFDWCwyQkFBMkIsRUFBQTs7QUFoQm5DO0lBb0JRLCtCQ2JvQjtJRGNwQixZQUFXO0lBQ1gseUJBQXlCLEVBQUE7O0FBdEJqQztNQXdCWSxvQkFBb0IsRUFBQTs7QUF4QmhDO0lBNEJRLCtCQ3JCb0I7SURzQnBCLFlBQVc7SUFDWCx5QkFBeUIsRUFBQTs7QUE5QmpDO01BZ0NZLG9CQUFvQixFQUFBOztBQWhDaEM7SUFvQ1EsaUJBQWlCLEVBQUE7O0FBcEN6QjtJQXVDUSxrQkFBa0IsRUFBQTs7QUF2QzFCO0lBMENRLGlCQUFpQixFQUFBOztBQTFDekI7SUFrREssbUJBQW1CLEVBQUE7O0FBR3hCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isd0NBQXdDO0VBQ3hDLGdDQUFnQyxFQUFBOztBQUVwQztFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUNBQXlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGFubmVyL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvbWl4aW5zJztcblxuLmJveHtcbiAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMXB4ICAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS13aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4vLyAudGFibGV7XG4vLyAgICAgbWFyZ2luLXRvcDo0MHB4O1xuLy8gfVxuLnJvdW5kZWQtYm94e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIC5jb2wtbWQtMy50cnVja3N0YXR1cy1jYXJke1xuICAgICAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNvbC1tZC0xLnRydWNrc3RhdHVzLWNhcmR7XG4gICAgICAgIGJvcmRlci1yaWdodDowLjVweCBzb2xpZCAgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgICAgICAgcGFkZGluZzowcHg7XG4gICAgICAgIG1heC13aWR0aDogOC4zMyUgIWltcG9ydGFudDtcblxuICAgIH1cbiAgICAuY29sLW1kLTIudHJ1Y2tzdGF0dXMtY2FyZHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgICAgICAgcGFkZGluZzowcHg7XG4gICAgICAgIG1heC13aWR0aDogMjAlICFpbXBvcnRhbnQ7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29sLW1kLTYudHJ1Y2tzdGF0dXMtY2FyZHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgICAgICAgcGFkZGluZzowcHg7XG4gICAgICAgIG1heC13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXY6bGFzdC1jaGlsZC5jb2wtbWQtM3tcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgaDV7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIH1cbiAgICAvLyBoNntcbiAgICAvLyAgICAgZm9udC1zaXplOiAwLjg1cmVtICFpbXBvcnRhbnQ7XG4gICAgLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkZXIgIWltcG9ydGFudDtcbiAgICAvLyB9XG5cbi5mb3JtLWdyb3VwIHtcbiAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbn1cbn1cbi5jdXN0LWJveHtcbiAgICBwYWRkaW5nOiAxMnB4O1xufVxuLmN1c3Qtcm93e1xuICAgIGhlaWdodDogMy41cmVtO1xufVxuLmN1c3QtZm9ybS1ncm91cHtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uY3VzdC10YWJsZXtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgICB3aWR0aDogNjAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5jdXN0LWlucHV0e1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xufVxuXG4vLyAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCB7XG4vLyAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7IFxuLy8gICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuLy8gfVxuIiwiJHRoZW1lLXB1cnBsZS1iYWNrZ3JvdW5kLWNvbG9yOiNGQUY5RkU7XG4kZGFyay1jb2xvci10aGVtZTojM0YyQjUzO1xuJHRoZW1lLXB1cnBsZS1jb2xvcjojNUEzMDk0O1xuJGxpZ2h0LWNvbG9yLXRoZW1lOiNkNGI2ZmY7XG4kbWVkaXVtLWNvbG9yLXRoZW1lOiAjNzc1ODk5O1xuJHRoZW1lLWdyZXk6I2FhYTtcbiR0aGVtZS1saWdodC1ncmV5OiAjY2NjO1xuJHRoZW1lLXdoaXRlOiNmZmZmZmY7XG4kdGhlbWUtYmxhY2s6IzAwMDtcbiR0aGVtZS1ibHVlLWNvbG9yOiMyMTk2ZjM7XG4kdGhlbWUtZ3JlZW4tY29sb3I6IzQxNzUwNTtcbiR0aGVtZS1saWdodC1ncmVlbi1jb2xvcjojQjhFOTg2O1xuJHRoZW1lLWxpZ2h0LWJyb3duLWNvbG9yOiNFQ0UxNTUgO1xuJHRoZW1lLWJyb3duLWNvbG9yOiM5QjkzMkI7XG4kdGhlbWUtYnJvd24tYm9yZGVyOiNDRkMzMkQ7XG4kdGhlbWUtc2VhcmNoYm94LWJhY2tncm91bmQtY29sb3I6I0Y5RjRGRjtcbiR0aGVtZS1vcGFjdGl0eS1ib3JkZXI6I2JlOTZmNTtcbiR0aGVtZS1yZWQtdGV4dDojQzczRDNEO1xuJHRoZW1lLXJlZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkNBRUFFO1xuJHRoZW1lbi1yZWQtYm9yZGVyLWNvbG9yOiNFRDczNzM7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuJHNlY29uZGFyeS10aGVtZTogI2MyNTYzZjtcbiRzZWNvbmRhcnktbGlnaHQtdGhlbWU6ICNlZmNjYzU7Il19 */"

/***/ }),

/***/ "./src/app/planner/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/planner/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/public/date.adapters */ "./src/app/public/date.adapters.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/helper-service/helper-service.service */ "./src/app/services/helper-service/helper-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeComponent = /** @class */ (function () {
    function HomeComponent(service, toastr, helperService) {
        this.service = service;
        this.toastr = toastr;
        this.helperService = helperService;
        this.firstPlanData = [];
        this.secondPlanData = [];
        this.thirdPlanData = [];
        this.fourthPlanData = [];
        this.openPlanSourceList = [];
        this.isLoading = false;
        this.locations = [];
        this.mktsegmentList = [];
        // Open Plans
        this.fromDate = '';
        this.toDate = '';
        this.destination = '';
        this.destinationList = [];
        this.plansDataDtoList = [];
        this.appStatuses = [];
        this.planStatusOpenPlan = 'OPEN';
        this.mktsegmentOpenPlan = [];
        this.sourceCodeOpenPlanList = [];
        // Dispatch Plans
        this.fromDateDispatchPlan = '';
        this.toDateDispatchPlan = '';
        this.destinationDispatchPlan = '';
        this.destinationListDispatchPlan = [];
        this.dispatchPlansDtoList = [];
        this.planStatusDispatchPlan = 'OPEN';
        this.mktsegmentDispatchPlan = [];
        this.materialGroupDispatchPlan = [];
        this.sourceCodeDispatchPlanList = [];
        // Indent Status
        this.fromDateIndStatus = '';
        this.toDateIndStatus = '';
        this.destinationIndStatus = '';
        this.destinationListIndStatus = [];
        this.transporterListIndStatus = [];
        this.transporterIndStatus = '';
        this.indentStatusDtoList = [];
        this.truckList = [];
        this.truckType = [];
        this.categoryListIndentStatus = [];
        this.materialGroup = [];
        this.materialGroupIndentStatus = [];
        this.shipmentSourceList = [];
        this.transportersIndStatus = [];
        // Placement Status
        this.fromDatePlacement = '';
        this.toDatePlacement = '';
        this.destinationPlacement = '';
        this.destinationListPlacement = [];
        this.transporterListPlacement = [];
        this.transporterPlacement = '';
        this.placementStatusDtoList = [];
        this.categoryListPlacement = [];
        this.truckTypePlacement = [];
        this.truckListPlacement = [];
        this.materialGroupPlacement = [];
        this.transportersPlacementStatus = [];
        // Shipment Status
        this.destinationShipmentStatus = '';
        this.fromDateShipmentStatus = '';
        this.toDateShipmentStatus = '';
        this.destinationListShipmentStatus = [];
        this.sourceListShipmentStatus = [];
        this.sourceCodeShipmentStatus = '';
        this.sourceCodeShipmentStatuses = [];
        this.transporterShipmentStatus = '';
        this.transporterListShipmentStatus = [];
        this.shipmentWithNSum = null;
        this.shipmentWithYSum = null;
        this.totalSum = null;
        this.cummShipmentWithNSum = null;
        this.cummShipmentWithYSum = null;
        this.cummTotalSum = null;
        this.shipmentStatusDataList = [];
        this.shipmentWithoutFreightPerSum = null;
        this.cummWithoutFreightPerSum = null;
        this.transportersShipmentStatus = [];
        // Plan Ageing
        this.destinationPlanAgeing = '';
        this.fromDatePlanAgeing = '';
        this.toDatePlanAgeing = '';
        this.destinationListPlanAgeing = [];
        this.sourceListPlanAgeing = [];
        this.sourceCodePlanAgeing = '';
        this.materialGroupPlanAgeing = [];
        this.firstLineStart = 0;
        this.firstLineEnd = 2;
        this.secondLineStart = 3;
        this.secondLineEnd = 5;
        this.thirdLine = 6;
        this.mktsegmentPlanAgeing = [];
        this.planStatusPlanAgeing = 'OPEN';
        // Plan Upload
        this.destinationPlanUpload = '';
        this.fromDatePlanUpload = '';
        this.toDatePlanUpload = '';
        this.destinationListPlanUpload = [];
        this.sourceListPlanUpload = [];
        this.sourceCodePlanUpload = '';
        this.materialGroupPlanUpload = [];
        this.mktsegmentPlanUpload = [];
        this.planStatusPlanUpload = 'OPEN';
        this.planUploadDtoList = [];
        this.sourceCodePlanUploads = [];
        this.appStatusList = [];
        this.uploadedByOthersSum = 0;
        this.uploadedBy3PLSum = 0;
        this.percentageOthersSum = 0;
        this.percentage3PLSum = 0;
        this.cummUploadedByOthersSum = 0;
        this.cummUploadedBy3PLSum = 0;
        this.cummPercentageOthersSum = 0;
        this.cummPercentage3PLSum = 0;
        this.planUploadDto = {
            uploadedBy3PL: null,
            uploadedByOthers: null,
            total: null,
            percentage3PL: null,
            percentageOthers: null,
            cummUploadedBy3PL: null,
            cummUploadedByOthers: null,
            cummTotal: null,
            cummPercentage3PL: null,
            cummPercentageOthers: null,
        };
        // Delayed Days
        this.destinationDelayedDays = '';
        this.fromDateDelayedDays = '';
        this.toDateDelayedDays = '';
        this.destinationListDelayedDays = [];
        this.sourceListDelayedDays = [];
        this.sourceCodeDelayedDays = '';
        this.materialGroupDelayedDays = [];
        this.planStatusDelayedDays = '';
        this.firstLineStartDelayedDays = 0;
        this.firstLineEndDelayedDays = 2;
        this.secondLineStartDelayedDays = 3;
        this.secondLineEndDelayedDays = 5;
        this.thirdLineDelayedDays = 6;
        this.mktsegmentListDelayedDays = [];
        this.mktsegmentDelayedDays = [];
        this.shipmentStatusDelayedDays = ['INTRANSIT'];
        this.shipmentStatusList = ['INTRANSIT', 'COMPLETED'];
        this.categoryListDelayedDays = [];
        this.isOpenPlans = true;
        this.isIndentStatus = true;
        this.isTruckStatus = true;
        this.isShipmentStatus = true;
        this.isPlanAgeing = true;
        this.isPlacementStatus = true;
        this.isDelayedDays = true;
        this.isPlanUpload = true;
        this.isDispatchPlan = true;
        this.openPlanData = {
            tyreTTESum: null,
            tyreAvailQtySum: null,
            tyreTruckCount: null,
            totalApprovedQty: null,
            totalReservedQty: null,
        };
        this.planAgeingData = {
            lessThan2: null,
            lessThan2Count: null,
            lessThan7: null,
            lessThan7Count: null,
            greaterThan7: null,
            greaterThan7Count: null,
            cummLessThan2: null,
            cummLessThan2Count: null,
            cummLessThan7: null,
            cummLessThan7Count: null,
            cummGreaterThan7: null,
            cummGreaterThan7Count: null,
        };
        this.delayedDaysDto = {
            lessThan2: null,
            lessThan7: null,
            greaterThan7: null,
            cummLessThan2: null,
            cummLessThan7: null,
            cummGreaterThan7: null,
        };
        this.planStatusList = ['OPEN', 'COMPLETED'];
        this.planStatus = [];
        this.categoryList = [];
        this.loggedInRole = '';
        this.transporterList = [];
        this.isExtWarehouse = false;
        this.currentDate = this.helperService.getTodayDate();
        this.currentDateAsString = this.helperService.getTodayDateASString();
        this.roles = src_app_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].roles;
        this.isExtWarehouse = localStorage.getItem("isExtWarehouse");
        if (this.isSoureDisable() || this.isExtWarehouse) {
            this.sourceCode = localStorage.getItem("sourceID");
            this.sourceCodeIndStatus = localStorage.getItem("sourceID");
            this.sourceCodeShipmentStatus = localStorage.getItem("sourceID");
            this.sourceCodePlanAgeing = localStorage.getItem("sourceID");
            this.sourceCodePlacement = localStorage.getItem("sourceID");
            this.sourceCodeDelayedDays = localStorage.getItem("sourceID");
            this.sourceCodePlanUpload = localStorage.getItem("sourceID");
            this.sourceCodeDispatchPlan = localStorage.getItem("sourceID");
            this.sourceCode ? this.sourceCodeOpenPlanList.push(this.sourceCode) : null;
            this.sourceCodeDispatchPlan ? this.sourceCodeDispatchPlanList.push(this.sourceCodeDispatchPlan) : null;
            this.setCurrentDateToAllDateFields();
            // localStorage.getItem("sourceID") ? this.sourceCodePlanUploads.push(localStorage.getItem("sourceID")) : null;
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "home");
        localStorage.getItem("sourceID") ? this.sourceCodeShipmentStatuses.push(localStorage.getItem("sourceID")) : null;
        localStorage.getItem("sourceID") ? this.sourceCodePlanUploads.push(localStorage.getItem("sourceID")) : null;
        var data;
        this.loggedInRole = localStorage.getItem("role");
        var dashboardFilterData = {
            'isOpenPlans': true,
            'isIndentStatus': true,
            'isTruckStatus': true,
            'isShipmentStatus': true,
            'isPlanAgeing': true,
            'isPlacementStatus': true,
            'isDelayedDays': true,
            'isPlanUpload': true,
            'isDispatchedPlans': true,
            "sourceLoc": localStorage.getItem("sourceID"),
            "sourceList": this.sourceCodeShipmentStatuses,
            'planStatus': this.planStatusOpenPlan,
            'shipmentStatusList': this.shipmentStatusDelayedDays,
            'fromDispatchDate': this.fromDate ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format("DD/MM/YYYY") : null,
            'toDispatchDate': this.toDate ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format("DD/MM/YYYY") : null,
        };
        this.appStatusList = src_app_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].planStatus;
        // For DP_REP role we need show corresponding plant data on page load
        if (this.checkShow()) {
            this.location = localStorage.getItem("sourceID");
            data = this.location;
        }
        this.reservedOrNotList = src_app_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].ReservedOrNotList;
        this.check_Role_DP_REP = this.service.checkRole();
        // this.getTrcukdetails(data);
        this.getTruckSummaryLocations();
        if (this.isSoureDisable() || this.isExtWarehouse) {
            this.sourceCode = localStorage.getItem("sourceID");
            this.sourceCodeIndStatus = localStorage.getItem("sourceID");
            this.sourceCodeShipmentStatus = localStorage.getItem("sourceID");
            this.sourceCodePlanAgeing = localStorage.getItem("sourceID");
            this.sourceCodePlacement = localStorage.getItem("sourceID");
            this.sourceCodeDelayedDays = localStorage.getItem("sourceID");
            this.sourceCodePlanUpload = localStorage.getItem("sourceID");
            this.sourceCodeDispatchPlan = localStorage.getItem("sourceID");
        }
        this.getDashboardData(dashboardFilterData);
        this.planStatus.push("OPEN");
        this.getCategoryMasterData();
        this.getTruckTypeMasterData();
        this.getMarketSegment();
        this.getShipmentSourceList();
        this.getPlansSourceList();
        this.getTransporterList();
    };
    HomeComponent.prototype.getTrcukdetails = function (location) {
        var _this = this;
        // get Truck status  statics like reporting ,Wating,Gated In,Loading
        this.isLoading = true;
        var loc = location ? location : '';
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getTruckStatus + "?reportLoc=" + loc).subscribe(function (response) {
            console.log(response);
            if (response['statusCode'] == 200) {
                _this.truckStatusStatics = response['data'];
                _this.isLoading = false;
            }
            else {
                _this.isLoading = false;
                _this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong ", "! Error");
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    // Check if logged in user is for JIT OR NOT
    HomeComponent.prototype.showPlanTables = function () {
        if (this.loggedInRole.startsWith('JIT')) {
            return false;
        }
        else {
            return true;
        }
    };
    //for getting category master data
    HomeComponent.prototype.getCategoryMasterData = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.categoryMasterData).subscribe(function (response) {
            _this.categoryList = response['data'];
            _this.categoryListIndentStatus = response['data'];
            _this.categoryListPlacement = response['data'];
            _this.categoryListDelayedDays = response['data'];
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
        });
    };
    HomeComponent.prototype.getMarketSegment = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMarketSegment).subscribe(function (response) {
            if (response['statusCode'] == '200') {
                _this.mktsegmentList = response['data'];
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!');
            }
        });
    };
    HomeComponent.prototype.getTransporterList = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getTransporterList).subscribe(function (response) {
            if (response['statusCode'] == '200') {
                _this.transporterList = response['data'];
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!');
            }
        });
    };
    HomeComponent.prototype.getShipmentSourceList = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getShipmentSources).subscribe(function (response) {
            if (response['statusCode'] == '200') {
                _this.shipmentSourceList = response['data'];
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!');
            }
        });
    };
    HomeComponent.prototype.getPlansSourceList = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getOpenPlansSourceLocs).subscribe(function (response) {
            if (response['statusCode'] == '200') {
                _this.openPlanSourceList = response['data'];
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : 'Some Thing Went Wrong !!!');
            }
        });
    };
    // for getting truck type master
    HomeComponent.prototype.getTruckTypeMasterData = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.truckTypeMasterData).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.truckList = response['data'];
                _this.truckListPlacement = response['data'].slice();
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "!Error");
            }
        }, function (err) {
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
        });
    };
    // OPEN PLANS
    HomeComponent.prototype.addEvent = function (type, event) {
        console.log(event.value);
        if (event.target.value) {
            /* Checking if selected from date greater than to date.
           Clearing the toDate field when from date greater than to date */
            if (this.toDate && (this.fromDate > this.toDate)) {
                this.toDate = '';
            }
        }
        // this.toDate = '';
    };
    HomeComponent.prototype.isSoureDisable = function () {
        // source Not disable for DP_REP, L1_MGR, L2_MGR role & External warehouses, if roles not belongs to DP_REP & External wareHouse we are returning boolean value which makes  disable 
        if ((this.check_Role_DP_REP !== this.roles.planner3 && this.check_Role_DP_REP !== this.roles.L1MGR && this.check_Role_DP_REP !== this.roles.L2MGR)
            && (!this.service.CheckExtWareHouse())) {
            return true;
        }
        else {
            return false;
        }
    };
    // Filter source location
    HomeComponent.prototype.getfilterSource = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.sourceList = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
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
    // filter destination list by user search 
    HomeComponent.prototype.getUserSearchData = function (event) {
        var _this = this;
        var destfiltervalue = event.target.value;
        if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            var index = 0;
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + this.destination + "&index=" + index).subscribe(function (response) {
                _this.destinationList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    HomeComponent.prototype.searchOpenPlans = function () {
        var bodyData = {
            'fromDispatchDate': this.fromDate ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.fromDate)).format("DD/MM/YYYY") : null,
            'toDispatchDate': this.toDate ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.toDate)).format("DD/MM/YYYY") : null,
            'destination': this.destination,
            'sourceLoc': this.sourceCode,
            'isOpenPlans': true,
            // 'isIndentStatus': false,
            // 'isTruckStatus':false,
            'materialGroup': this.materialGroup,
            // 'isShipmentStatus':false,
            'appStatusList': this.appStatuses,
            'planStatus': this.planStatusOpenPlan,
            'marketSegments': this.mktsegmentOpenPlan,
            'sourceList': this.sourceCodeOpenPlanList,
        };
        if (this.fromDate != '' && this.fromDate != null) {
            if (this.toDate != '' && this.toDate != null) {
                this.isOpenPlans = true;
                this.getDashboardData(bodyData);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.isOpenPlans = true;
            this.getDashboardData(bodyData);
        }
    };
    HomeComponent.prototype.clearAllOpenPlans = function () {
        this.destination = '';
        this.fromDate = '';
        this.toDate = '';
        this.destinationList = [];
        this.sourceList = [];
        this.sourceCode = '';
        this.materialGroup = [];
        this.appStatuses = [];
        this.planStatusOpenPlan = '';
        this.mktsegmentOpenPlan = [];
        this.sourceCodeOpenPlanList = [];
        // For DP_REP role user can change the source location but other user it can't changes
        // That why we giving default selection
        if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
            this.sourceCode = localStorage.getItem("sourceID");
            this.sourceCode ? this.sourceCodeOpenPlanList.push(this.sourceCode) : null;
        }
    };
    HomeComponent.prototype.setSummaryDetailsOpenPlans = function () {
        if (this.plansDataDtoList) {
            if (this.plansDataDtoList.length > 0 && this.plansDataDtoList[0].itemCategory) {
                this.totalPlanQtySum = this.plansDataDtoList.reduce(function (sum, _a) {
                    var totalPlanQty = _a.totalPlanQty;
                    return sum + totalPlanQty;
                }, 0);
                this.totalAvailQtySum = this.plansDataDtoList.reduce(function (sum, _a) {
                    var totalAvailQty = _a.totalAvailQty;
                    return sum + totalAvailQty;
                }, 0);
                this.totalTotAvailQtySum = this.plansDataDtoList.reduce(function (sum, _a) {
                    var totalTotAvailQty = _a.totalTotAvailQty;
                    return sum + totalTotAvailQty;
                }, 0);
                this.totalReservedQtySum = this.plansDataDtoList.reduce(function (sum, _a) {
                    var totalReservedQty = _a.totalReservedQty;
                    return sum + totalReservedQty;
                }, 0);
                this.totalTTESum = this.plansDataDtoList.reduce(function (sum, _a) {
                    var totalTTE = _a.totalTTE;
                    return sum + totalTTE;
                }, 0);
                this.truckCountSum = this.plansDataDtoList.reduce(function (sum, _a) {
                    var truckCount = _a.truckCount;
                    return sum + truckCount;
                }, 0);
                this.cummTotalPlanQtySum = this.plansDataDtoList.reduce(function (sum, _a) {
                    var cummTotalPlanQty = _a.cummTotalPlanQty;
                    return sum + cummTotalPlanQty;
                }, 0);
                this.cummTotalAvailQtySum = this.plansDataDtoList.reduce(function (sum, _a) {
                    var cummTotalAvailQty = _a.cummTotalAvailQty;
                    return sum + cummTotalAvailQty;
                }, 0);
                this.cummTotalTotAvailQtySum = this.plansDataDtoList.reduce(function (sum, _a) {
                    var cummTotalTotAvailQty = _a.cummTotalTotAvailQty;
                    return sum + cummTotalTotAvailQty;
                }, 0);
                this.cummTotalReservedQtySum = this.plansDataDtoList.reduce(function (sum, _a) {
                    var cummTotalReservedQty = _a.cummTotalReservedQty;
                    return sum + cummTotalReservedQty;
                }, 0);
                this.cummTotalTTESum = this.plansDataDtoList.reduce(function (sum, _a) {
                    var cummTotalTTE = _a.cummTotalTTE;
                    return sum + cummTotalTTE;
                }, 0);
                this.cummTruckCountSum = this.plansDataDtoList.reduce(function (sum, _a) {
                    var cummTruckCount = _a.cummTruckCount;
                    return sum + cummTruckCount;
                }, 0);
            }
        }
    };
    // OPEN PLANS
    HomeComponent.prototype.addEventDispatchPlan = function (type, event) {
        console.log(event.value);
        /* Checking if selected from date greater than to date.
         Clearing the toDate field when from date greater than to date */
        if (event.target.value) {
            if (this.toDateDispatchPlan && (this.fromDateDispatchPlan > this.toDateDispatchPlan)) {
                this.toDateDispatchPlan = '';
            }
        }
        // this.toDateDispatchPlan = '';
    };
    // Filter source location
    HomeComponent.prototype.getfilterSourceDispatchPlan = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.sourceList = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                console.log("respio", response);
                _this.sourceListDispatchPlan = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter destination list by user search 
    HomeComponent.prototype.getUserSearchDataDispatchPlan = function (event) {
        var _this = this;
        var destfiltervalue = event.target.value;
        if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationList = [];
            var index = 0;
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + this.destinationDispatchPlan + "&index=" + index).subscribe(function (response) {
                _this.destinationListDispatchPlan = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    HomeComponent.prototype.searchDispatchPlan = function () {
        var bodyData = {
            'fromDispatchDate': this.fromDateDispatchPlan ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.fromDateDispatchPlan)).format("DD/MM/YYYY") : null,
            'toDispatchDate': this.toDateDispatchPlan ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.toDateDispatchPlan)).format("DD/MM/YYYY") : null,
            'destination': this.destinationDispatchPlan,
            'sourceLoc': this.sourceCodeDispatchPlan,
            'isDispatchedPlans': true,
            // 'isIndentStatus': false,
            // 'isTruckStatus':false,
            'materialGroup': this.materialGroupDispatchPlan,
            // 'isShipmentStatus':false,
            'planStatus': this.planStatusDispatchPlan,
            'marketSegments': this.mktsegmentDispatchPlan,
            'sourceList': this.sourceCodeDispatchPlanList,
        };
        if (this.fromDateDispatchPlan != '' && this.fromDateDispatchPlan != null) {
            if (this.toDateDispatchPlan != '' && this.toDateDispatchPlan != null) {
                this.isDispatchPlan = true;
                this.getDashboardData(bodyData);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.isDispatchPlan = true;
            this.getDashboardData(bodyData);
        }
    };
    HomeComponent.prototype.clearAllDispatchPlan = function () {
        this.destinationDispatchPlan = '';
        this.fromDateDispatchPlan = '';
        this.toDateDispatchPlan = '';
        this.destinationListDispatchPlan = [];
        this.sourceListDispatchPlan = [];
        this.sourceCodeDispatchPlan = '';
        this.planStatusDispatchPlan = '';
        this.mktsegmentDispatchPlan = [];
        this.materialGroupDispatchPlan = [];
        this.sourceCodeDispatchPlanList = [];
        // For DP_REP role user can change the source location but other user it can't changes
        // That why we giving default selection
        if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
            this.sourceCodeDispatchPlan = localStorage.getItem("sourceID");
            this.sourceCodeDispatchPlan ? this.sourceCodeDispatchPlanList.push(this.sourceCodeDispatchPlan) : null;
        }
    };
    HomeComponent.prototype.setSummaryDetailsDispatchPlan = function () {
        if (this.dispatchPlansDtoList) {
            if (this.dispatchPlansDtoList.length > 0 && this.dispatchPlansDtoList[0].itemCategory) {
                this.totalDispatchQtySum = this.dispatchPlansDtoList.reduce(function (sum, _a) {
                    var totalDispatchedQty = _a.totalDispatchedQty;
                    return sum + totalDispatchedQty;
                }, 0);
                this.totalDispTTESum = this.dispatchPlansDtoList.reduce(function (sum, _a) {
                    var totalTTE = _a.totalTTE;
                    return sum + totalTTE;
                }, 0);
                this.truckDispCountSum = this.dispatchPlansDtoList.reduce(function (sum, _a) {
                    var truckCount = _a.truckCount;
                    return sum + truckCount;
                }, 0);
                this.cummTotalDispatchQtySum = this.dispatchPlansDtoList.reduce(function (sum, _a) {
                    var cummTotalDispatchedQty = _a.cummTotalDispatchedQty;
                    return sum + cummTotalDispatchedQty;
                }, 0);
                this.cummTotalDispTTESum = this.dispatchPlansDtoList.reduce(function (sum, _a) {
                    var cummTotalTTE = _a.cummTotalTTE;
                    return sum + cummTotalTTE;
                }, 0);
                this.cummTruckDispCountSum = this.dispatchPlansDtoList.reduce(function (sum, _a) {
                    var cummTruckCount = _a.cummTruckCount;
                    return sum + cummTruckCount;
                }, 0);
            }
        }
    };
    // Placement Status
    HomeComponent.prototype.addEventPlacement = function (type, event) {
        console.log(event.value);
        /* Checking if selected from date greater than to date.
         Clearing the toDate field when from date greater than to date */
        if (event.target.value) {
            if (this.toDatePlacement && (this.fromDatePlacement > this.toDatePlacement)) {
                this.toDatePlacement = '';
            }
        }
        // this.toDatePlacement = '';
    };
    // Filter source location
    HomeComponent.prototype.getfilterSourcePlacement = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.sourceListPlacement = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                console.log("respio", response);
                _this.sourceListPlacement = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter destination list by user search 
    HomeComponent.prototype.getUserSearchDataPlacement = function (event) {
        var _this = this;
        var destfiltervalue = event.target.value;
        if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationListPlacement = [];
            var index = 0;
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + this.destinationPlacement + "&index=" + index).subscribe(function (response) {
                _this.destinationListPlacement = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter Transporter details
    HomeComponent.prototype.getfilterTransporterPlacement = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.transporterListPlacement = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?transporter=' + filtervalue).subscribe(function (response) {
                _this.transporterListPlacement = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    HomeComponent.prototype.searchPlacement = function () {
        var bodyData = {
            'fromDispatchDate': this.fromDatePlacement ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.fromDatePlacement)).format("DD/MM/YYYY") : null,
            'toDispatchDate': this.toDatePlacement ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.toDatePlacement)).format("DD/MM/YYYY") : null,
            'destination': this.destinationPlacement,
            'sourceLoc': this.sourceCodePlacement,
            // 'transporter': this.transporterPlacement,
            'isPlacementStatus': true,
            'materialGroup': this.materialGroupPlacement,
            'truckTypes': this.truckTypePlacement,
            'transporterList': this.transportersPlacementStatus,
        };
        if (this.fromDatePlacement != '' && this.fromDatePlacement != null) {
            if (this.toDatePlacement != '' && this.toDatePlacement != null) {
                this.isPlacementStatus = true;
                this.getDashboardData(bodyData);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.isPlacementStatus = true;
            this.getDashboardData(bodyData);
        }
    };
    HomeComponent.prototype.clearAllPlacement = function () {
        this.destinationPlacement = '';
        this.fromDatePlacement = '';
        this.toDatePlacement = '';
        this.destinationListPlacement = [];
        this.sourceListPlacement = [];
        this.sourceCodePlacement = '';
        this.transporterPlacement = '';
        this.materialGroupPlacement = [];
        this.truckTypePlacement = [];
        this.transportersPlacementStatus = [];
        // For DP_REP role user can change the source location but other user it can't changes
        // That why we giving default selection
        if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
            this.sourceCodePlacement = localStorage.getItem("sourceID");
        }
    };
    HomeComponent.prototype.setSummaryDetailsPlacement = function () {
        if (this.placementStatusDtoList) {
            if (this.placementStatusDtoList.length > 0 && this.placementStatusDtoList[0].itemCategory) {
                this.indentedSumPlacement = this.placementStatusDtoList.reduce(function (sum, _a) {
                    var totalNetIndented = _a.totalNetIndented;
                    return sum + totalNetIndented;
                }, 0);
                this.reportedSumPlacement = this.placementStatusDtoList.reduce(function (sum, _a) {
                    var totalReported = _a.totalReported;
                    return sum + totalReported;
                }, 0);
                this.rejectedSumPlacement = this.placementStatusDtoList.reduce(function (sum, _a) {
                    var totalRejected = _a.totalRejected;
                    return sum + totalRejected;
                }, 0);
                this.balanceSumPlacement = this.placementStatusDtoList.reduce(function (sum, _a) {
                    var totalNetBalance = _a.totalNetBalance;
                    return sum + totalNetBalance;
                }, 0);
                this.netPlacedSum = this.placementStatusDtoList.reduce(function (sum, _a) {
                    var totalNetPlaced = _a.totalNetPlaced;
                    return sum + totalNetPlaced;
                }, 0);
                // this.placementPercentageSum = (this.placementStatusDtoList.reduce((sum, { placementPercentage }) => sum + placementPercentage, 0));
                this.placementPercentageSum = (this.netPlacedSum / this.indentedSumPlacement) * 100;
                this.cummIndentedSumPlacement = this.placementStatusDtoList.reduce(function (sum, _a) {
                    var cummTotalNetIndented = _a.cummTotalNetIndented;
                    return sum + cummTotalNetIndented;
                }, 0);
                this.cummReportedSumPlacement = this.placementStatusDtoList.reduce(function (sum, _a) {
                    var cummTotalReported = _a.cummTotalReported;
                    return sum + cummTotalReported;
                }, 0);
                this.cummRejectedSumPlacement = this.placementStatusDtoList.reduce(function (sum, _a) {
                    var cummTotalRejected = _a.cummTotalRejected;
                    return sum + cummTotalRejected;
                }, 0);
                this.cummBalanceSumPlacement = this.placementStatusDtoList.reduce(function (sum, _a) {
                    var cummTotalNetBalance = _a.cummTotalNetBalance;
                    return sum + cummTotalNetBalance;
                }, 0);
                this.cummNetPlacedSum = this.placementStatusDtoList.reduce(function (sum, _a) {
                    var cummTotalNetPlaced = _a.cummTotalNetPlaced;
                    return sum + cummTotalNetPlaced;
                }, 0);
                // this.cummPlacementPercentageSum = this.placementStatusDtoList.reduce((sum, { cummPlacementPercentage }) => sum + cummPlacementPercentage, 0) ;
                this.cummPlacementPercentageSum = (this.cummNetPlacedSum / this.cummIndentedSumPlacement) * 100;
            }
        }
    };
    // INDENT STATUS
    HomeComponent.prototype.addEventIndStatus = function (type, event) {
        console.log(event.value);
        /* Checking if selected from date greater than to date.
         Clearing the toDate field when from date greater than to date */
        if (event.target.value) {
            if (this.toDateIndStatus && (this.fromDateIndStatus > this.toDateIndStatus)) {
                this.toDateIndStatus = '';
            }
        }
        // this.toDateIndStatus = '';
    };
    // Filter source location
    HomeComponent.prototype.getfilterSourceIndStatus = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.sourceListIndStatus = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                console.log("respio", response);
                _this.sourceListIndStatus = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter destination list by user search 
    HomeComponent.prototype.getUserSearchDataIndStatus = function (event) {
        var _this = this;
        var destfiltervalue = event.target.value;
        if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationListIndStatus = [];
            var index = 0;
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + this.destinationIndStatus + "&index=" + index).subscribe(function (response) {
                _this.destinationListIndStatus = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter Transporter details
    HomeComponent.prototype.getfilterTransporterIndStatus = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.transporterListIndStatus = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?transporter=' + filtervalue).subscribe(function (response) {
                _this.transporterListIndStatus = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    HomeComponent.prototype.searchIndStatus = function () {
        var bodyData = {
            'fromDispatchDate': this.fromDateIndStatus ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.fromDateIndStatus)).format("DD/MM/YYYY") : null,
            'toDispatchDate': this.toDateIndStatus ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.toDateIndStatus)).format("DD/MM/YYYY") : null,
            'destination': this.destinationIndStatus,
            'sourceLoc': this.sourceCodeIndStatus,
            // 'transporter': this.transporterIndStatus,
            'isIndentStatus': true,
            'materialGroup': this.materialGroupIndentStatus,
            'truckTypes': this.truckType,
            'transporterList': this.transportersIndStatus,
        };
        if (this.fromDateIndStatus != '' && this.fromDateIndStatus != null) {
            if (this.toDateIndStatus != '' && this.toDateIndStatus != null) {
                this.isIndentStatus = true;
                this.getDashboardData(bodyData);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.isIndentStatus = true;
            this.getDashboardData(bodyData);
        }
    };
    HomeComponent.prototype.clearAllIndStatus = function () {
        this.destinationIndStatus = '';
        this.fromDateIndStatus = '';
        this.toDateIndStatus = '';
        this.destinationListIndStatus = [];
        this.sourceListIndStatus = [];
        this.sourceCodeIndStatus = '';
        this.transporterIndStatus = '';
        this.materialGroupIndentStatus = [];
        this.truckType = [];
        this.transportersIndStatus = [];
        // For DP_REP role user can change the source location but other user it can't changes
        // That why we giving default selection
        if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
            this.sourceCodeIndStatus = localStorage.getItem("sourceID");
        }
    };
    HomeComponent.prototype.setSummaryDetails = function () {
        if (this.indentStatusDtoList) {
            if (this.indentStatusDtoList.length > 0 && this.indentStatusDtoList[0].itemCategory) {
                this.indentedSum = this.indentStatusDtoList.reduce(function (sum, _a) {
                    var totalNetIndented = _a.totalNetIndented;
                    return sum + totalNetIndented;
                }, 0);
                this.reportedSum = this.indentStatusDtoList.reduce(function (sum, _a) {
                    var totalReported = _a.totalReported;
                    return sum + totalReported;
                }, 0);
                this.rejectedSum = this.indentStatusDtoList.reduce(function (sum, _a) {
                    var totalRejected = _a.totalRejected;
                    return sum + totalRejected;
                }, 0);
                this.balanceSum = this.indentStatusDtoList.reduce(function (sum, _a) {
                    var totalNetBalance = _a.totalNetBalance;
                    return sum + totalNetBalance;
                }, 0);
                this.cummIndentedSum = this.indentStatusDtoList.reduce(function (sum, _a) {
                    var cummTotalNetIndented = _a.cummTotalNetIndented;
                    return sum + cummTotalNetIndented;
                }, 0);
                this.cummReportedSum = this.indentStatusDtoList.reduce(function (sum, _a) {
                    var cummTotalReported = _a.cummTotalReported;
                    return sum + cummTotalReported;
                }, 0);
                this.cummRejectedSum = this.indentStatusDtoList.reduce(function (sum, _a) {
                    var cummTotalRejected = _a.cummTotalRejected;
                    return sum + cummTotalRejected;
                }, 0);
                this.cummBalanceSum = this.indentStatusDtoList.reduce(function (sum, _a) {
                    var cummTotalNetBalance = _a.cummTotalNetBalance;
                    return sum + cummTotalNetBalance;
                }, 0);
            }
        }
    };
    // Shipment STATUS
    HomeComponent.prototype.addEventShipmentStatus = function (type, event) {
        console.log(event.value);
        /* Checking if selected from date greater than to date.
         Clearing the toDate field when from date greater than to date */
        if (event.target.value) {
            if (this.toDateShipmentStatus && (this.fromDateShipmentStatus > this.toDateShipmentStatus)) {
                this.toDateShipmentStatus = '';
            }
        }
        // this.toDateShipmentStatus = '';
    };
    // Filter source location
    HomeComponent.prototype.getfilterSourceShipmentStatus = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.sourceListShipmentStatus = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                console.log("respio", response);
                _this.sourceListShipmentStatus = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter destination list by user search 
    HomeComponent.prototype.getUserSearchDataShipmentStatus = function (event) {
        var _this = this;
        var destfiltervalue = event.target.value;
        if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationListShipmentStatus = [];
            var index = 0;
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + this.destinationShipmentStatus + "&index=" + index).subscribe(function (response) {
                _this.destinationListShipmentStatus = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter Transporter details
    HomeComponent.prototype.getfilterTransporterShipmentStatus = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.transporterListShipmentStatus = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?transporter=' + filtervalue).subscribe(function (response) {
                _this.transporterListShipmentStatus = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    HomeComponent.prototype.searchShipmentStatus = function () {
        var bodyData = {
            'fromDispatchDate': this.fromDateShipmentStatus ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.fromDateShipmentStatus)).format("DD/MM/YYYY") : null,
            'toDispatchDate': this.toDateShipmentStatus ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.toDateShipmentStatus)).format("DD/MM/YYYY") : null,
            'destination': this.destinationShipmentStatus,
            'sourceLoc': this.sourceCodeShipmentStatus,
            // 'transporter': this.transporterShipmentStatus,
            // 'isIndentStatus': false,
            // 'isOpenPlans':false,
            // 'isTruckStatus':false,
            'isShipmentStatus': true,
            "sourceList": this.sourceCodeShipmentStatuses,
            'transporterList': this.transportersShipmentStatus,
        };
        if (this.fromDateShipmentStatus != '' && this.fromDateShipmentStatus != null) {
            if (this.toDateShipmentStatus != '' && this.toDateShipmentStatus != null) {
                this.isShipmentStatus = true;
                this.getDashboardData(bodyData);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.isShipmentStatus = true;
            this.getDashboardData(bodyData);
        }
    };
    HomeComponent.prototype.setSummaryDetailsShipmentStatus = function () {
        if (this.shipmentStatusDataList) {
            if (this.shipmentStatusDataList.length > 0 && this.shipmentStatusDataList[0].shipmentWithNReportLoc) {
                this.shipmentWithNSum = this.shipmentStatusDataList.reduce(function (sum, _a) {
                    var shipmentWithN = _a.shipmentWithN;
                    return sum + shipmentWithN;
                }, 0);
                this.shipmentWithYSum = this.shipmentStatusDataList.reduce(function (sum, _a) {
                    var shipmentWithY = _a.shipmentWithY;
                    return sum + shipmentWithY;
                }, 0);
                this.totalSum = this.shipmentStatusDataList.reduce(function (sum, _a) {
                    var total = _a.total;
                    return sum + total;
                }, 0);
                this.cummShipmentWithNSum = this.shipmentStatusDataList.reduce(function (sum, _a) {
                    var cummShipmentWithN = _a.cummShipmentWithN;
                    return sum + cummShipmentWithN;
                }, 0);
                this.cummShipmentWithYSum = this.shipmentStatusDataList.reduce(function (sum, _a) {
                    var cummShipmentWithY = _a.cummShipmentWithY;
                    return sum + cummShipmentWithY;
                }, 0);
                this.cummTotalSum = this.shipmentStatusDataList.reduce(function (sum, _a) {
                    var cummTotal = _a.cummTotal;
                    return sum + cummTotal;
                }, 0);
                this.shipmentWithoutFreightPerSum = (this.shipmentWithNSum / this.totalSum) * 100;
                this.cummWithoutFreightPerSum = (this.cummShipmentWithNSum / this.cummTotalSum) * 100;
            }
        }
    };
    HomeComponent.prototype.clearAllShipmentStatus = function () {
        this.destinationShipmentStatus = '';
        this.fromDateShipmentStatus = '';
        this.toDateShipmentStatus = '';
        this.destinationListShipmentStatus = [];
        this.sourceListShipmentStatus = [];
        this.sourceCodeShipmentStatus = '';
        this.transporterShipmentStatus = '';
        this.transporterListShipmentStatus = [];
        this.sourceCodeShipmentStatuses = [];
        this.transportersShipmentStatus = [];
        // For DP_REP role user can change the source location but other user it can't changes
        // That why we giving default selection
        if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
            this.sourceCodeShipmentStatus = localStorage.getItem("sourceID");
            this.sourceCodeShipmentStatuses.push(localStorage.getItem("sourceID"));
        }
    };
    // PLAN Upload
    HomeComponent.prototype.addEventPlanUpload = function (type, event) {
        console.log(event.value);
        /* Checking if selected from date greater than to date.
        Clearing the toDate field when from date greater than to date */
        if (event.target.value) {
            if (this.toDatePlanUpload && (this.fromDatePlanUpload > this.toDatePlanUpload)) {
                this.toDatePlanUpload = '';
            }
        }
        // this.toDatePlanUpload = '';
    };
    // Filter source location
    HomeComponent.prototype.getfilterSourcePlanUpload = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.sourceListPlanUpload = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                console.log("respio", response);
                _this.sourceListPlanUpload = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter destination list by user search 
    HomeComponent.prototype.getUserSearchDataPlanUpload = function (event) {
        var _this = this;
        var destfiltervalue = event.target.value;
        if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationListPlanUpload = [];
            var index = 0;
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + this.destinationPlanUpload + "&index=" + index).subscribe(function (response) {
                _this.destinationListPlanUpload = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    HomeComponent.prototype.searchPlanUpload = function () {
        var bodyData = {
            'fromDispatchDate': this.fromDatePlanUpload ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.fromDatePlanUpload)).format("DD/MM/YYYY") : null,
            'toDispatchDate': this.toDatePlanUpload ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.toDatePlanUpload)).format("DD/MM/YYYY") : null,
            'destination': this.destinationPlanUpload,
            'sourceLoc': this.sourceCodePlanUpload,
            'isPlanUpload': true,
            // 'isIndentStatus': false,
            // 'isTruckStatus':false,
            'materialGroup': this.materialGroupPlanUpload,
            // 'isShipmentStatus':false,
            'marketSegments': this.mktsegmentPlanUpload,
            'planStatus': this.planStatusPlanUpload,
            "sourceList": this.sourceCodePlanUploads,
        };
        if (this.fromDatePlanUpload != '' && this.fromDatePlanUpload != null) {
            if (this.toDatePlanUpload != '' && this.toDatePlanUpload != null) {
                this.isPlanUpload = true;
                this.getDashboardData(bodyData);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.isPlanUpload = true;
            this.getDashboardData(bodyData);
        }
    };
    HomeComponent.prototype.clearAllPlanUpload = function () {
        this.destinationPlanUpload = '';
        this.fromDatePlanUpload = '';
        this.toDatePlanUpload = '';
        this.destinationListPlanUpload = [];
        this.sourceListPlanUpload = [];
        this.sourceCodePlanUpload = '';
        this.materialGroupPlanUpload = [];
        this.planStatusPlanUpload = '';
        this.mktsegmentPlanUpload = [];
        this.sourceCodePlanUploads = [];
        // For DP_REP role user can change the source location but other user it can't changes
        // That why we giving default selection
        if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
            this.sourceCodePlanUploads.push(localStorage.getItem("sourceID"));
        }
    };
    HomeComponent.prototype.setSummaryDataForPlanUpload = function () {
        if (this.planUploadDtoList && this.planUploadDtoList.length > 0) {
            this.uploadedByOthersSum = this.planUploadDtoList.reduce(function (sum, _a) {
                var uploadedByOthers = _a.uploadedByOthers;
                return sum + uploadedByOthers;
            }, 0);
            this.uploadedBy3PLSum = this.planUploadDtoList.reduce(function (sum, _a) {
                var uploadedBy3PL = _a.uploadedBy3PL;
                return sum + uploadedBy3PL;
            }, 0);
            this.percentageOthersSum = (this.uploadedByOthersSum / (this.uploadedByOthersSum + this.uploadedBy3PLSum)) * 100;
            this.percentage3PLSum = (this.uploadedBy3PLSum / (this.uploadedByOthersSum + this.uploadedBy3PLSum)) * 100;
            this.cummUploadedByOthersSum = this.planUploadDtoList.reduce(function (sum, _a) {
                var cummUploadedByOthers = _a.cummUploadedByOthers;
                return sum + cummUploadedByOthers;
            }, 0);
            this.cummUploadedBy3PLSum = this.planUploadDtoList.reduce(function (sum, _a) {
                var cummUploadedBy3PL = _a.cummUploadedBy3PL;
                return sum + cummUploadedBy3PL;
            }, 0);
            this.cummPercentageOthersSum = (this.cummUploadedByOthersSum / (this.cummUploadedByOthersSum + this.cummUploadedBy3PLSum)) * 100;
            this.cummPercentage3PLSum = (this.cummUploadedBy3PLSum / (this.cummUploadedByOthersSum + this.cummUploadedBy3PLSum)) * 100;
        }
    };
    // PLANS AGEING
    HomeComponent.prototype.addEventPlanAgeing = function (type, event) {
        console.log(event.value);
        /* Checking if selected from date greater than to date.
         Clearing the toDate field when from date greater than to date */
        if (event.target.value) {
            if (this.toDatePlanAgeing && (this.fromDatePlanAgeing > this.toDatePlanAgeing)) {
                this.toDatePlanAgeing = '';
            }
        }
        // this.toDatePlanAgeing = '';
    };
    // Filter source location
    HomeComponent.prototype.getfilterSourcePlanAgeing = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.sourceListPlanAgeing = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                console.log("respio", response);
                _this.sourceListPlanAgeing = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter destination list by user search 
    HomeComponent.prototype.getUserSearchDataPlanAgeing = function (event) {
        var _this = this;
        var destfiltervalue = event.target.value;
        if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationListPlanAgeing = [];
            var index = 0;
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + this.destinationPlanAgeing + "&index=" + index).subscribe(function (response) {
                _this.destinationListPlanAgeing = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    HomeComponent.prototype.searchPlanAgeing = function () {
        var bodyData = {
            'fromDispatchDateAgeing': this.fromDatePlanAgeing ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.fromDatePlanAgeing)).format("DD/MM/YYYY") : null,
            'toDispatchDateAgeing': this.toDatePlanAgeing ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.toDatePlanAgeing)).format("DD/MM/YYYY") : null,
            'destination': this.destinationPlanAgeing,
            'sourceLoc': this.sourceCodePlanAgeing,
            'isPlanAgeing': true,
            // 'isIndentStatus': false,
            // 'isTruckStatus':false,
            'materialGroup': this.materialGroupPlanAgeing,
            // 'isShipmentStatus':false,
            'firstLineStart': this.firstLineStart,
            'firstLineEnd': this.firstLineEnd,
            'secondLineStart': this.secondLineStart,
            'secondLineEnd': this.secondLineEnd,
            'thirdLine': this.thirdLine,
            'marketSegments': this.mktsegmentPlanAgeing,
            'planStatus': this.planStatusPlanAgeing,
        };
        if (this.fromDatePlanAgeing != '' && this.fromDatePlanAgeing != null) {
            if (this.toDatePlanAgeing != '' && this.toDatePlanAgeing != null) {
                this.isPlanAgeing = true;
                this.getDashboardData(bodyData);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.isPlanAgeing = true;
            this.getDashboardData(bodyData);
        }
    };
    HomeComponent.prototype.clearAllPlanAgeing = function () {
        this.destinationPlanAgeing = '';
        this.fromDatePlanAgeing = '';
        this.toDatePlanAgeing = '';
        this.destinationListPlanAgeing = [];
        this.sourceListPlanAgeing = [];
        this.sourceCodePlanAgeing = '';
        this.materialGroupPlanAgeing = [];
        this.planStatusPlanAgeing = '';
        this.firstLineStart = 0;
        this.firstLineEnd = 2;
        this.secondLineStart = 3;
        this.secondLineEnd = 5;
        this.thirdLine = 6;
        this.mktsegmentPlanAgeing = [];
        // For DP_REP role user can change the source location but other user it can't changes
        // That why we giving default selection
        if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
            this.sourceCodePlanAgeing = localStorage.getItem("sourceID");
        }
    };
    // DELAYED DAYS
    HomeComponent.prototype.addEventDelayedDays = function (type, event) {
        console.log(event.value);
        /* Checking if selected from date greater than to date.
         Clearing the toDate field when from date greater than to date */
        if (event.target.value) {
            if (this.toDateDelayedDays && (this.fromDateDelayedDays > this.toDateDelayedDays)) {
                this.toDateDelayedDays = '';
            }
        }
        // this.toDateDelayedDays = '';
    };
    // Filter source location
    HomeComponent.prototype.getfilterSourceDelayedDays = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.sourceListDelayedDays = [];
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                console.log("respio", response);
                _this.sourceListDelayedDays = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    // filter destination list by user search 
    HomeComponent.prototype.getUserSearchDataDelayedDays = function (event) {
        var _this = this;
        var destfiltervalue = event.target.value;
        if (destfiltervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.destinationListDelayedDays = [];
            var index = 0;
            this.isLoading = true;
            this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.searchFilter + '?destination=' + this.destinationDelayedDays + "&index=" + index).subscribe(function (response) {
                _this.destinationListDelayedDays = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    HomeComponent.prototype.searchDelayedDays = function () {
        var bodyData = {
            'fromDispatchDateAgeing': this.fromDateDelayedDays ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.fromDateDelayedDays)).format("DD/MM/YYYY") : null,
            'toDispatchDateAgeing': this.toDateDelayedDays ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.toDateDelayedDays)).format("DD/MM/YYYY") : null,
            'destination': this.destinationDelayedDays,
            'sourceLoc': this.sourceCodeDelayedDays,
            'isDelayedDays': true,
            // 'isIndentStatus': false,
            // 'isTruckStatus':false,
            'materialGroup': this.materialGroupDelayedDays,
            // 'isShipmentStatus':false,
            'firstLineStart': this.firstLineStartDelayedDays,
            'firstLineEnd': this.firstLineEndDelayedDays,
            'secondLineStart': this.secondLineStartDelayedDays,
            'secondLineEnd': this.secondLineEndDelayedDays,
            'thirdLine': this.thirdLineDelayedDays,
            'marketSegments': this.mktsegmentDelayedDays,
            'shipmentStatusList': this.shipmentStatusDelayedDays,
        };
        if (this.fromDateDelayedDays != '' && this.fromDateDelayedDays != null) {
            if (this.toDateDelayedDays != '' && this.toDateDelayedDays != null) {
                this.isDelayedDays = true;
                this.getDashboardData(bodyData);
            }
            else {
                this.toastr.error("Please select To Date", "!Error");
            }
        }
        else {
            this.isDelayedDays = true;
            this.getDashboardData(bodyData);
        }
    };
    HomeComponent.prototype.clearAllDelayedDays = function () {
        this.destinationDelayedDays = '';
        this.fromDateDelayedDays = '';
        this.toDateDelayedDays = '';
        this.destinationListDelayedDays = [];
        this.sourceListDelayedDays = [];
        this.sourceCodeDelayedDays = '';
        this.materialGroupDelayedDays = [];
        this.shipmentStatusDelayedDays = [];
        this.firstLineStartDelayedDays = 0;
        this.firstLineEndDelayedDays = 2;
        this.secondLineStartDelayedDays = 3;
        this.secondLineEndDelayedDays = 5;
        this.thirdLineDelayedDays = 6;
        this.mktsegmentDelayedDays = [];
        // For DP_REP role user can change the source location but other user it can't changes
        // That why we giving default selection
        if (this.isSoureDisable() || this.service.CheckExtWareHouse()) {
            this.sourceCodeDelayedDays = localStorage.getItem("sourceID");
        }
    };
    HomeComponent.prototype.getTruckSummaryLocations = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getSummaryLocations).subscribe(function (respone) {
            _this.locations = respone['data'];
        });
    };
    HomeComponent.prototype.checkShow = function () {
        var role = localStorage.getItem('role');
        if (role) {
            if (role == this.roles.planner3 || role == this.roles.L2MGR || role == this.roles.L1MGR) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    HomeComponent.prototype.getDashboardData = function (data) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getDashboardData, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                if (_this.isOpenPlans) {
                    _this.plansDataDtoList = response['data'].plansDataDtos;
                    _this.setSummaryDetailsOpenPlans();
                    _this.isOpenPlans = false;
                }
                if (_this.isIndentStatus) {
                    _this.indentStatusDtoList = response['data'].indentStatusDtos.slice();
                    // this.pageLengthIndentStatus = response['data'].indentStatusDto.total;
                    _this.pageLengthIndentStatus = _this.indentStatusDtoList.reduce(function (sum, _a) {
                        var total = _a.total;
                        return sum + total;
                    }, 0);
                    _this.isIndentStatus = false;
                    _this.setSummaryDetails();
                }
                if (_this.isTruckStatus) {
                    _this.truckStatusStatics = {};
                    _this.truckStatusStatics = response['data'].truckReportDto;
                    _this.isTruckStatus = false;
                }
                if (_this.isShipmentStatus) {
                    _this.shipmentStatusDataList = response['data'].shipmentStatusList;
                    _this.setSummaryDetailsShipmentStatus();
                    _this.isShipmentStatus = false;
                }
                if (_this.isPlanAgeing) {
                    _this.planAgeingData = response['data'].planAgeing;
                    _this.isPlanAgeing = false;
                }
                if (_this.isDelayedDays) {
                    _this.delayedDaysDto = response['data'].delayedDays;
                    _this.isDelayedDays = false;
                }
                if (_this.isPlacementStatus) {
                    _this.placementStatusDtoList = response['data'].placementStatusDtos.slice();
                    _this.setSummaryDetailsPlacement();
                    _this.isPlacementStatus = false;
                }
                if (_this.isPlanUpload) {
                    _this.planUploadDtoList = response['data'].planUploadDtos;
                    _this.setSummaryDataForPlanUpload();
                    _this.isPlanUpload = false;
                }
                if (_this.isDispatchPlan) {
                    _this.dispatchPlansDtoList = response['data'].dispatchedPlansDataList;
                    _this.setSummaryDetailsDispatchPlan();
                    _this.isDispatchPlan = false;
                }
                _this.isLoading = false;
            }
            else {
                _this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
                _this.isLoading = false;
            }
        }, function (err) {
            _this.toastr.error(err ? err['message'] : 'Something went wrong...!', 'Error!');
            _this.isLoading = false;
        });
    };
    // Export Excel for Open Plans
    HomeComponent.prototype.exportOpenPlans = function () {
        var _this = this;
        if (this.openPlanPageLength > 0) {
            this.isLoading = true;
            var data = {
                'fromDispatchDate': this.fromDate ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.fromDate)).format("DD/MM/YYYY") : null,
                'toDispatchDate': this.toDate ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.toDate)).format("DD/MM/YYYY") : null,
                'destinationCode': this.destination,
                // 'index': this.page.offset,
                'pageLength': this.openPlanPageLength,
                // 'statuses': this.filterPlanStatus,
                // 'sourceLocation': this.source,
                'planStatus': this.planStatus,
                'sourceCode': this.sourceCode,
                'itemClassification': "TYRE",
                'materialGroup': this.materialGroup,
            };
            // this.service.post_service_DownLoadExcel(ApiserviceService.apisList.planinfo, data).subscribe(response => {
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.planinfo, data).subscribe(function (response) {
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
                            "TTE": excelRawData[i].tte,
                            "Batch": excelRawData[i].batchCode,
                            "Priority": excelRawData[i].priority,
                            "Mkt Segment": excelRawData[i].marketSegment,
                            "Plan Quantity": excelRawData[i].quantity,
                            "Approved Quantity": excelRawData[i].approvedQuantity,
                            "Unapproved Quantity": excelRawData[i].unapprovedQuantity,
                            "Approved Delete": excelRawData[i].deletedApprQuantity,
                            "Unapproval Delete": excelRawData[i].deletedUnApprQuantity,
                            "Reserved": excelRawData[i].reservedQuantity,
                            "Loaded": excelRawData[i].loaded,
                            "Dispatch Quantity": excelRawData[i].dispatchedQuantity,
                            "Avaliable Quantity": excelRawData[i].availableQuantity,
                            "Total Availble Quantity": excelRawData[i].totalAvailableQuantity,
                            "Avail TTE": excelRawData[i].availbleTTE ? excelRawData[i].availbleTTE.toFixed(2) : 0,
                            "Truck Count": excelRawData[i].truckCount ? excelRawData[i].truckCount.toFixed(2) : 0,
                            "Weight (Kg)": excelRawData[i].weight ? excelRawData[i].weight.toFixed(2) : 0,
                            "Available Weight (Kg)": excelRawData[i].totalWeight ? excelRawData[i].totalWeight.toFixed(2) : 0,
                            "Weight Util (%)": excelRawData[i].weightUtil ? excelRawData[i].weightUtil.toFixed(2) : 0,
                            "Volume (CUMTR)": excelRawData[i].volume ? excelRawData[i].volume.toFixed(2) : 0,
                            "Available Volume (CUMTR)": excelRawData[i].totalVolume ? excelRawData[i].totalVolume.toFixed(2) : 0,
                            "Volume Util (%)": excelRawData[i].volumeUtil ? excelRawData[i].volumeUtil.toFixed(2) : 0,
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
    // Excel for Indent Status
    HomeComponent.prototype.exportIndentStatus = function () {
        var _this = this;
        if (this.pageLengthIndentStatus > 0) {
            this.isLoading = true;
            var data = {
                'fromDispatchDate': this.fromDateIndStatus ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.fromDateIndStatus)).format("DD/MM/YYYY") : null,
                'toDispatchDate': this.toDateIndStatus ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(this.toDateIndStatus)).format("DD/MM/YYYY") : null,
                'destination': this.destinationIndStatus,
                // 'index': this.index,
                'transporter': this.transporterIndStatus,
                'pageLength': this.pageLengthIndentStatus,
                'source': this.sourceCodeIndStatus,
                'status': this.planStatus,
                'truckType': this.truckType,
            };
            // this.service.post_service_DownLoadExcel(ApiserviceService.apisList.viewSearchIndents, data).subscribe(response => {
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.viewSearchIndents, data).subscribe(function (response) {
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
                        var data_2 = {
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
                        newExcelData.push(data_2);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_7__["writeFile"](workBook, 'ViewIndents.xlsx');
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
    HomeComponent.prototype.isGateRole = function () {
        if (this.service.checkRole() == this.roles.JIT_GATE_SECURITY || this.service.checkRole() == this.roles.gateSecurity ||
            this.service.checkRole() == this.roles.rdc_GAT || this.service.checkRole() == this.roles.JIT_OPERATION) {
            return true;
        }
        else {
            return false;
        }
    };
    HomeComponent.prototype.setCurrentDateToAllDateFields = function () {
        this.fromDate = this.currentDateAsString;
        this.toDate = this.currentDateAsString;
        this.fromDateDispatchPlan = this.currentDateAsString;
        this.toDateDispatchPlan = this.currentDateAsString;
        this.fromDateIndStatus = this.currentDateAsString;
        this.toDateIndStatus = this.currentDateAsString;
        this.fromDatePlacement = this.currentDateAsString;
        this.toDatePlacement = this.currentDateAsString;
        this.fromDateShipmentStatus = this.currentDateAsString;
        this.toDateShipmentStatus = this.currentDateAsString;
        this.fromDatePlanUpload = this.currentDateAsString;
        this.toDatePlanUpload = this.currentDateAsString;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/planner/home/home.component.html"),
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_5__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: src_app_public_date_adapters__WEBPACK_IMPORTED_MODULE_5__["APP_DATE_FORMATS"]
                }
            ],
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/planner/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_services_helper_service_helper_service_service__WEBPACK_IMPORTED_MODULE_8__["HelperServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/planner/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/planner/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: homeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeModule", function() { return homeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/planner/home/home.component.ts");
/* harmony import */ var src_app_public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
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
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
];
var homeModule = /** @class */ (function () {
    function homeModule() {
    }
    homeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["customMaterialModule"],
                src_app_public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ],
            providers: [],
        })
    ], homeModule);
    return homeModule;
}());



/***/ })

}]);
//# sourceMappingURL=planner-home-home-module.js.map