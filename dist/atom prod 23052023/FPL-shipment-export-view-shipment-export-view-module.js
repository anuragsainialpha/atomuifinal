(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["FPL-shipment-export-view-shipment-export-view-module"],{

/***/ "./src/app/FPL/shipment-export-view/shipment-export-view.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/FPL/shipment-export-view/shipment-export-view.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\">\n</app-loader>\n<div class=\"container-fluid\">\n  <h6><b>Shipment Export View</b>\n    <span class=\"pull-right refresh-span\">\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"Filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n  <div class=\"clearfix\"></div>\n  <div class=\"manualplan-fields\" *ngIf=\"IsShow\">\n    <div class=\"row\">\n      <div class=\"col-md-11\">\n        <div class=\"row\">\n          <div class=\"col-md-2 pr-0\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"model.shipmentId\" name=\"shipment\" autocomplete=\"off\"\n                placeholder=\"Shipment Id\"  oninput=\"this.value = this.value.toUpperCase()\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <div class=\"form-group\">\n              <mat-form-field>\n                <input matInput aria-label=\"Source\" placeholder=\"Source\" autocomplete=\"off\"\n                  (keyup)=\"getfilterDestination($event)\" autocomplete=\"off\" [matAutocomplete]=\"sourceAutocomplete\"\n                  [(ngModel)]=\"model.sourceLoc\" name=\"source\"  oninput=\"this.value = this.value.toUpperCase()\">\n                <mat-autocomplete #sourceAutocomplete=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let list of sourceList\" [value]=\"list.value\">\n                    <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                  </mat-option>\n                </mat-autocomplete>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"model.pol\" name=\"polName\" autocomplete=\"off\" placeholder=\"POL\"  oninput=\"this.value = this.value.toUpperCase()\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"model.pod\" name=\"poDName\" autocomplete=\"off\" placeholder=\"POD\"  oninput=\"this.value = this.value.toUpperCase()\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"model.containerNum\" name=\"containerNumb\" autocomplete=\"off\"\n                placeholder=\"Container Number\"  oninput=\"this.value = this.value.toUpperCase()\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"model.customerName\" name=\"customerName\" autocomplete=\"off\"\n                placeholder=\"Customer Name\"  oninput=\"this.value = this.value.toUpperCase()\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"model.forwarder\" name=\"forwarderName\" autocomplete=\"off\"\n                placeholder=\"Forwarder\"  oninput=\"this.value = this.value.toUpperCase()\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"model.cha\" name=\"chaName\" autocomplete=\"off\" placeholder=\"CHA\"  oninput=\"this.value = this.value.toUpperCase()\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"model.piNum\" name=\"piNumber\" autocomplete=\"off\" placeholder=\"PI Number\"  oninput=\"this.value = this.value.toUpperCase()\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"model.sapInvoice\" name=\"SapInvoice\" autocomplete=\"off\"\n                placeholder=\"SAP Invoice\"  oninput=\"this.value = this.value.toUpperCase()\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-1 pr-0\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"model.bookingNum\" name=\"bookingNumb\" autocomplete=\"off\"\n                placeholder=\"Booking Number\"  oninput=\"this.value = this.value.toUpperCase()\">\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-1 text-center\">\n        <div class=\"margin-top-10\">\n          <button class=\"theme-small-button\" (click)=\"exportShippingFilter()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearData()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n\n\n\n\n  </div>\n  <ngx-datatable #table class='material  ngx-table-custom-scroll ngx-table-tr-custom-scroll' [rows]='shipmentexportdata'\n    [scrollbarH]=\"true\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\"\n    [limit]=\"page.limit\" [count]=\"page.count\" [offset]=\"page.offset\" [externalPaging]=\"true\"\n    (page)=\"serverSidePagination($event)\">\n    <ngx-datatable-column [frozenLeft]=\"true\" name=\"Shipment Id\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"shipmentId\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.shipmentId | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column [frozenLeft]=\"true\" name=\"Source\" [width]=\"50\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"sourceLoc\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sourceLoc | uppercase}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column [frozenLeft]=\"true\" name=\"PI No.\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"piNum\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.piNum}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column [frozenLeft]=\"true\" name=\"Customer Name\" [width]=\"170\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"customerName\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.customerName}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column [frozenLeft]=\"true\" name=\"Pre Inv No.\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"false\"\n      prop=\"preInvNum\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.preInvNum}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Term of Delivery\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"incoTerm\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.incoTerm}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Term of Payment\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"paymetTerms\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.paymetTerms}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"POL\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"pol\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.pol}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"POD\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"pod\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.pod}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"COFD\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"cofd\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.cofd}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Freight Forwarder\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"forwarder\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.forwarder}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Billing Party\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"billingParty\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.billingParty}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Shipping Line\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"shippingLine\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.shippingLine}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Container Number\" [width]=\"125\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"containerNum\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.containerNum }}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Container Pick up Date\" [width]=\"125\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"countPicDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span>{{(row.countPicDate)?(row.countPicDate | customDateFormat | date:'dd-MMM-yyyy'):'' }}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Stuffing/ Billing Date\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"stuffingDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.stuffingDate?(row.stuffingDate | customDateFormat | date:'dd-MMM-yyyy'):''}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Booking Num\" [width]=\"125\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"bookingNum\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span>{{row.bookingNum}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Post Inv No.\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"postInvNum\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        <span>{{row.postInvNum}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Post Inv No. (SAP Invoice)\" [width]=\"125\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"sapInvoice\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.sapInvoice}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Post Inv Amount\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"false\" prop=\"invAmount\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.invAmount}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"CHA\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"cha\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        {{row.cha?row.cha:''}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Planned Vessel Name\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"plannedVessel\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\n        {{row.plannedVessel?row.plannedVessel:''}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Planned vsl ETD Loadport\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"vesslDepartPolDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{(row.vesslDepartPolDate)?(row.vesslDepartPolDate | customDateFormat | date:'dd-MMM-yyyy'):''}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Shipping Bill No.\" [width]=\"100\" [resizeable]=\"false\" prop=\"shippingBill\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.shippingBill}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Shipping Bill Date\" [width]=\"110\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"shippingBillDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{(row.shippingBillDate)?(row.shippingBillDate | customDateFormat | date:'dd-MMM-yyyy'):''}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Container Placed at CFS/Buffer\" [width]=\"120\" [resizeable]=\"false\" prop=\"gateInDateCfs\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{(row.gateInDateCfs)?(row.gateInDateCfs | customDateFormat | date:'dd-MMM-yyyy'):''}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Customs Exams Date\" [width]=\"100\" [resizeable]=\"false\" prop=\"customsExamDate\"\n      [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{(row.customsExamDate)?(row.customsExamDate | customDateFormat | date:'dd-MMM-yyyy'):''}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"LEO Date\" [width]=\"90\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"leoDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{(row.leoDate)?(row.leoDate | customDateFormat | date:'dd-MMM-yyyy'):''}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Container Moved to Port\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"gateOutDateCgs\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{(row.gateOutDateCgs)?(row.gateOutDateCgs | customDateFormat | date:'dd-MMM-yyyy'):''}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Container Gated in\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"gateInDatePort\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{(row.gateInDatePort)?(row.gateInDatePort | customDateFormat | date:'dd-MMM-yyyy'):''}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Actual Vessel Name\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"actualVessel\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.actualVessel}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Actual Vessel SOB/ ETD Date\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\"\n      prop=\"shipmentOnBordDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{(row.shipmentOnBordDate)?(row.shipmentOnBordDate | customDateFormat | date:'dd-MMM-yyyy'):''}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"ETA\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"etaPod\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{(row.etaPod)?(row.etaPod | customDateFormat | date:'dd-MMM-yyyy'):''}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Remarks\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"exportRemarks\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.exportRemarks}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Insert User\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"insertUser\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.insertUser}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Insert Date\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"insertDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{(row.insertDate)?(row.insertDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'):''}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Update User\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"updateUser\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.updateUser}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Update Date\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"updateDate\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{(row.updateDate)?(row.updateDate | customDateFormat | date:'dd-MMM-yyyy,HH:mm'):''}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Is Sync OTM\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"isSyncOtm\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.isSyncOtm}}\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- Footer Template starts -->\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedCount\">\n            {{selectedCount.toLocaleString()}} Selected |\n          </span>\n          Showing {{(offset * pageSize)+1}} to {{(rowCount>\n          (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n          {{(rowCount)}} records.\n        </div>\n        <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n          [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n          [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n          (change)=\"table.onFooterPage($event)\">\n        </datatable-pager>\n      </ng-template>\n    </ngx-datatable-footer>\n    <!-- Footer Template Ends -->\n  </ngx-datatable>\n\n  <!-- View Loadslips  for coorsponding shipment -->\n  <div class=\"modal\" id=\"loadslipsModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Loadslip List</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <ul>\n            <li *ngFor=\"let item of loadslipList;let i=index\">\n              <span>\n                {{i+1}})\n                <span class=\"link\" style=\"margin-left: 10px;margin-right: 50px\"\n                  (click)=\"viewLoadslipnavigation(item)\">{{item.loadlipId}}\n                </span>\n                <span>\n                  {{item.type}}\n                </span>\n              </span>\n            </li>\n          </ul>\n        </div>\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <!-- View Loadslips  for coorsponding shipment -->\n  <div class=\"modal\" id=\"commentModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{commentHeader}}</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <p>{{commentMsg}}</p>\n        </div>\n        <!-- Modal footer -->\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/FPL/shipment-export-view/shipment-export-view.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/FPL/shipment-export-view/shipment-export-view.component.ts ***!
  \****************************************************************************/
/*! exports provided: ShipmentExportViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentExportViewComponent", function() { return ShipmentExportViewComponent; });
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shipment_export_view_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipment-export-view.model */ "./src/app/FPL/shipment-export-view/shipment-export-view.model.ts");
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





var ShipmentExportViewComponent = /** @class */ (function () {
    function ShipmentExportViewComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.model = new _shipment_export_view_model__WEBPACK_IMPORTED_MODULE_4__["exportShippingModel"]();
        this.isLoading = true;
        this.shipmentexportdata = [];
        this.loadslipList = [];
        this.IsShow = true;
        this.page = {
            limit: 100,
            count: 0,
            offset: 0,
            orderBy: "myColumn1",
            orderDir: "desc",
            pageSize: 100
        };
    }
    ShipmentExportViewComponent.prototype.ngOnInit = function () {
        console.log(this.model);
        // activation of tab
        localStorage.setItem('userMenu', 'shipment-export-view');
        this.refreshData();
    };
    ShipmentExportViewComponent.prototype.refreshData = function () {
        this.clearData();
        this.getshipmentExportData(this.model);
    };
    //Show Filter 
    ShipmentExportViewComponent.prototype.showFilter = function () {
        this.IsShow = !this.IsShow;
    };
    ShipmentExportViewComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    ShipmentExportViewComponent.prototype.getshipmentExportData = function (data) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_0__["ApiserviceService"].apisList.getExportShipping, data).subscribe(function (response) {
            if (response['statusCode'] == '200') {
                var repsonseData = response['data'];
                _this.shipmentexportdata = repsonseData.ExportShipmentDto;
                _this.shipmentexportdata = _this.shipmentexportdata.slice();
                _this.page.count = repsonseData.total;
                _this.page.limit = repsonseData.pageLength;
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
    };
    ShipmentExportViewComponent.prototype.serverSidePagination = function (pageInfo) {
        var data = __assign({}, this.model);
        data['pageLength'] = pageInfo.count;
        // data["index"] = 0;
        this.getshipmentExportData(data);
    };
    ShipmentExportViewComponent.prototype.clearData = function () {
        this.sourceList = [];
        this.model = new _shipment_export_view_model__WEBPACK_IMPORTED_MODULE_4__["exportShippingModel"]();
    };
    ShipmentExportViewComponent.prototype.exportShippingFilter = function () {
        this.getshipmentExportData(this.model);
    };
    //get filter destination result
    ShipmentExportViewComponent.prototype.getfilterDestination = function (event) {
        var _this = this;
        var filtervalue = event.target.value;
        if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
            this.sourceList = [];
            this.isLoading = true;
            this.service.get_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_0__["ApiserviceService"].apisList.searchFilter + '?destination=' + filtervalue).subscribe(function (response) {
                _this.sourceList = response['data'].searchResult;
                _this.isLoading = false;
            }, function (err) {
                _this.toastr.error(err ? err : "Something went wrong..", "Error!");
                _this.isLoading = false;
            });
        }
    };
    //export excel data
    ShipmentExportViewComponent.prototype.export = function () {
        var _this = this;
        if (this.shipmentexportdata.length > 0) {
            this.isLoading = true;
            var data = __assign({}, this.model);
            data['pageLength'] = this.page.count;
            this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_0__["ApiserviceService"].apisList.getExportShipping, data).subscribe(function (response) {
                if (response['statusCode'] == '200') {
                    var repsonseData = response['data'];
                    var newViewPlanData = repsonseData.ExportShipmentDto;
                    console.log("newViewPlanData", newViewPlanData);
                    var excelRawData = newViewPlanData;
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        var data_1 = {
                            "Shipment Id": excelRawData[i].shipmentId,
                            "Source": excelRawData[i].sourceLoc,
                            "PI No.": excelRawData[i].piNum,
                            "Customer Name": excelRawData[i].customerName,
                            "Pre Inv No.": excelRawData[i].preInvNum,
                            "Term of Delivery": excelRawData[i].incoTerm,
                            "Term of Payment": excelRawData[i].paymetTerms,
                            "POL": excelRawData[i].pol,
                            "POD": excelRawData[i].pod,
                            "COFD": excelRawData[i].cofd,
                            "Freight Forwarder": excelRawData[i].forwarder,
                            "Billing Party": excelRawData[i].billingParty,
                            "Shipping Line": excelRawData[i].shippingLine,
                            "Container Num": excelRawData[i].containerNum,
                            "Container Pick up Date": _this.service.customDateFormat(excelRawData[i].countPicDate),
                            "Stuffing/ Billing Date": _this.service.customDateFormat(excelRawData[i].stuffingDate),
                            "Booking Num": excelRawData[i].bookingNum,
                            "Post Inv No.": excelRawData[i].postInvNum,
                            "Post Inv No. (SAP Invoice)": excelRawData[i].sapInvoice,
                            "Post Inv Amount": excelRawData[i].invAmount,
                            "CHA": excelRawData[i].cha,
                            "Planned Vessel Name": excelRawData[i].plannedVessel,
                            "Planned vsl ETD Loadport": _this.service.customDateFormat(excelRawData[i].vesslDepartPolDate),
                            "Shipping Bill No.": excelRawData[i].shippingBill,
                            "Shipping Bill Date": _this.service.customDateFormat(excelRawData[i].shippingBillDate),
                            "Container Placed at CFS/Buffer": _this.service.customDateFormat(excelRawData[i].gateInDateCfs),
                            "Custom Exams Date": _this.service.customDateFormat(excelRawData[i].customsExamDate),
                            "LEO Date": _this.service.customDateFormat(excelRawData[i].leoDate),
                            "Container Moved to Port": _this.service.customDateFormat(excelRawData[i].gateOutDateCgs),
                            "Container Gated in": _this.service.customDateFormat(excelRawData[i].gateInDatePort),
                            "Actual Vessel Name": excelRawData[i].actualVessel,
                            "Actual Vessel SOB/ ETD Date": _this.service.customDateFormat(excelRawData[i].shipmentOnBordDate),
                            "ETA": _this.service.customDateFormat(excelRawData[i].etaPod),
                            "Remarks": excelRawData[i].exportRemarks,
                            "Insert User": excelRawData[i].insertUser,
                            "Insert Date": _this.service.customDateTimeFormat(excelRawData[i].insertDate),
                            "Update User": excelRawData[i].updateUser,
                            "Update Date": _this.service.customDateTimeFormat(excelRawData[i].updateDate),
                            "Is Sync OTM": excelRawData[i].isSyncOtm
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(workBook, workSheet, "data"); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, "ShippingExport.xlsx");
                    _this.isLoading = false;
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
        else {
            this.toastr.warning("No data to Export Excel", "! Warning");
        }
    };
    ShipmentExportViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shipment-export-view',
            template: __webpack_require__(/*! ./shipment-export-view.component.html */ "./src/app/FPL/shipment-export-view/shipment-export-view.component.html")
        }),
        __metadata("design:paramtypes", [_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_0__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ShipmentExportViewComponent);
    return ShipmentExportViewComponent;
}());



/***/ }),

/***/ "./src/app/FPL/shipment-export-view/shipment-export-view.model.ts":
/*!************************************************************************!*\
  !*** ./src/app/FPL/shipment-export-view/shipment-export-view.model.ts ***!
  \************************************************************************/
/*! exports provided: exportShippingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportShippingModel", function() { return exportShippingModel; });
// export class Array{
//     public description:string;
//     public value:string;
// }
var exportShippingModel = /** @class */ (function () {
    function exportShippingModel(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return exportShippingModel;
}());



/***/ }),

/***/ "./src/app/FPL/shipment-export-view/shipment-export-view.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/FPL/shipment-export-view/shipment-export-view.module.ts ***!
  \*************************************************************************/
/*! exports provided: shipmentExportViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shipmentExportViewModule", function() { return shipmentExportViewModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/date-pipe-shared.module */ "./src/app/date-pipe-shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shipment_export_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipment-export-view.component */ "./src/app/FPL/shipment-export-view/shipment-export-view.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var src_app_public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _shipment_export_view_component__WEBPACK_IMPORTED_MODULE_4__["ShipmentExportViewComponent"]
    }
];
var shipmentExportViewModule = /** @class */ (function () {
    function shipmentExportViewModule() {
    }
    shipmentExportViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                src_app_date_pipe_shared_module__WEBPACK_IMPORTED_MODULE_1__["CustomDatePipeModule"],
                src_app_angular_material__WEBPACK_IMPORTED_MODULE_6__["customMaterialModule"],
                src_app_public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_7__["LoaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]
            ],
            exports: [],
            declarations: [
                _shipment_export_view_component__WEBPACK_IMPORTED_MODULE_4__["ShipmentExportViewComponent"]
            ],
        })
    ], shipmentExportViewModule);
    return shipmentExportViewModule;
}());



/***/ }),

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



/***/ })

}]);
//# sourceMappingURL=FPL-shipment-export-view-shipment-export-view-module.js.map