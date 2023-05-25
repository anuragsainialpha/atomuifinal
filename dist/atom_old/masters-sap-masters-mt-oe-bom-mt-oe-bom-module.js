(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-sap-masters-mt-oe-bom-mt-oe-bom-module"],{

/***/ "./src/app/masters/sap-masters/mt-oe-bom/mt-oe-bom.component.html":
/*!************************************************************************!*\
  !*** ./src/app/masters/sap-masters/mt-oe-bom/mt-oe-bom.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n    <b> SAP Masters &gt; OE BOM</b>\n    <span class=\"pull-right refresh-span\">\n      <!-- <button class=\"theme-small-button\" (click)=\"upload()\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n\n  <div class=\"mt-item-fields\" *ngIf=\"isShow\">\n    <div class=\"col-md-12 row\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row\">\n\n          <div class=\"col-md-6 pd-0\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Sales SKU\" [(ngModel)]=\"salesSku\" name=\"salesSku\">\n                        </mat-form-field>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <mat-form-field>\n                          <input matInput placeholder=\"Item Id\" [(ngModel)]=\"itemId\" name=\"itemId\">\n                        \n                      </mat-form-field>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <mat-form-field>\n                          <input matInput placeholder=\"OE Code\" [(ngModel)]=\"oeCode\" name=\"oeCode\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n                 \n            </div>\n          </div>\n\n          <div class='col-md-6 pd-0'>\n            <div class=\"row mg-0\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"doSubmitSearch()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n      <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table  \n      [columnMode]=\"'force'\" [rows]='mtOEBOMList' \n      [externalPaging]=\"true\" (page)=\"datatablePageData($event)\" [scrollbarH]=\"false\" \n      [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" \n      [count]=\"page.count\" [offset]=\"page.offset\">\n       \n      <ngx-datatable-column name=\"Sales SKU\" [width]=\"120\" [resizeable]=\"false\" prop=\"salesSku\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.salesSku}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Item Id\" [width]=\"60\" [resizeable]=\"false\" prop=\"itemId\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.itemId}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Comp Qty\" [width]=\"10\" [resizeable]=\"false\" prop=\"compQty\" [cellClass]=\"'text-right'\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.compQty}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Item Seq\" [width]=\"10\" [resizeable]=\"false\" prop=\"itemSeq\" [cellClass]=\"'text-right'\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.itemSeq}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"OE Code\" [width]=\"60\" [resizeable]=\"false\" prop=\"oeCode\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.oeCode}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Insert Date\" [width]=\"50\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{trimDate(row.insertDate)}}\n            </ng-template>\n          </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Update Date\" [width]=\"60\" [resizeable]=\"false\" prop=\"updateDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{trimDate(row.updateDate)}}\n          </ng-template>\n        </ngx-datatable-column>\n           <!-- Footer Template starts -->\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected |\n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n            [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n     \n      </ngx-datatable>\n    </div>\n"

/***/ }),

/***/ "./src/app/masters/sap-masters/mt-oe-bom/mt-oe-bom.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/masters/sap-masters/mt-oe-bom/mt-oe-bom.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mt-item-header {\n  padding: 5px 0px;\n  margin-bottom: 0px;\n  font-weight: 300; }\n  .mt-item-header span {\n    color: #3F2B53;\n    margin-right: 15px; }\n  .mt-item-fields {\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0px; }\n  .mt-item-fields p > i {\n    cursor: pointer; }\n  .mt-item-fields .col-md-3 {\n    padding: 0px 15px; }\n  .mt-item-fields .form-group {\n    margin-bottom: 0; }\n  .mt-item-fields .form-group .mat-form-field .mat-form-field-wrapper {\n      padding-bottom: 0.5em !important; }\n  .mt-item-table {\n  margin-top: 10px;\n  width: 100%;\n  overflow: hidden;\n  overflow-x: auto; }\n  .mt-item-table table {\n    table-layout: fixed;\n    margin-bottom: 0em; }\n  .mt-item-table table tr {\n      height: 30px; }\n  .mt-item-table table tr th {\n        width: 150px;\n        padding: 0.3rem; }\n  .mt-item-table table tr td {\n        width: 150px;\n        padding: 0.25rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVycy9zYXAtbWFzdGVycy9tdC1vZS1ib20vQzpcXFVzZXJzXFxBYmhleVNvb2RcXE9uZURyaXZlIC0gQWNjZWxhbHBoYSBTb2Z0d2FyZSBQdnQuIEx0ZFxcRGVza3RvcFxcYXRvbSBhcG9sbG9cXEFwb2xsb1xcTmV3LSBBbnVyYWdcXGF0b20tdWkvc3JjXFxhcHBcXG1hc3RlcnNcXHNhcC1tYXN0ZXJzXFxtdC1vZS1ib21cXG10LW9lLWJvbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFzdGVycy9zYXAtbWFzdGVycy9tdC1vZS1ib20vQzpcXFVzZXJzXFxBYmhleVNvb2RcXE9uZURyaXZlIC0gQWNjZWxhbHBoYSBTb2Z0d2FyZSBQdnQuIEx0ZFxcRGVza3RvcFxcYXRvbSBhcG9sbG9cXEFwb2xsb1xcTmV3LSBBbnVyYWdcXGF0b20tdWkvc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTtFQUhwQjtJQUtRLGNDUGlCO0lEUWpCLGtCQUFrQixFQUFBO0VBSzFCO0VBQ0ksNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7RUFIaEI7SUFLUSxlQUFlLEVBQUE7RUFMdkI7SUFRUSxpQkFBaUIsRUFBQTtFQVJ6QjtJQVdRLGdCQUFnQixFQUFBO0VBWHhCO01BY2dCLGdDQUFnQyxFQUFBO0VBS2hEO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVU7RUFDVixnQkFBZTtFQUNmLGdCQUFlLEVBQUE7RUFKbkI7SUFNUSxtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7RUFQMUI7TUFTWSxZQUFXLEVBQUE7RUFUdkI7UUFXZ0IsWUFBVztRQUNYLGVBQWMsRUFBQTtFQVo5QjtRQWVnQixZQUFXO1FBQ1gsZ0JBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvc2FwLW1hc3RlcnMvbXQtb2UtYm9tL210LW9lLWJvbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9taXhpbnMnO1xyXG5cclxuLm10LWl0ZW0taGVhZGVye1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiAkZGFyay1jb2xvci10aGVtZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgLy8gZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbn1cclxuLm10LWl0ZW0tZmllbGRze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcCA+IGl7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLmNvbC1tZC0ze1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgICAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5tdC1pdGVtLXRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBvdmVyZmxvdy14OmF1dG87XHJcbiAgICB0YWJsZXtcclxuICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBlbTtcclxuICAgICAgICB0cntcclxuICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgICAgIHRoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjAuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowLjI1cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIiR0aGVtZS1wdXJwbGUtYmFja2dyb3VuZC1jb2xvcjojRkFGOUZFO1xuJGRhcmstY29sb3ItdGhlbWU6IzNGMkI1MztcbiR0aGVtZS1wdXJwbGUtY29sb3I6IzVBMzA5NDtcbiRsaWdodC1jb2xvci10aGVtZTojZDRiNmZmO1xuJG1lZGl1bS1jb2xvci10aGVtZTogIzc3NTg5OTtcbiR0aGVtZS1ncmV5OiNhYWE7XG4kdGhlbWUtbGlnaHQtZ3JleTogI2NjYztcbiR0aGVtZS13aGl0ZTojZmZmZmZmO1xuJHRoZW1lLWJsYWNrOiMwMDA7XG4kdGhlbWUtYmx1ZS1jb2xvcjojMjE5NmYzO1xuJHRoZW1lLWdyZWVuLWNvbG9yOiM0MTc1MDU7XG4kdGhlbWUtbGlnaHQtZ3JlZW4tY29sb3I6I0I4RTk4NjtcbiR0aGVtZS1saWdodC1icm93bi1jb2xvcjojRUNFMTU1IDtcbiR0aGVtZS1icm93bi1jb2xvcjojOUI5MzJCO1xuJHRoZW1lLWJyb3duLWJvcmRlcjojQ0ZDMzJEO1xuJHRoZW1lLXNlYXJjaGJveC1iYWNrZ3JvdW5kLWNvbG9yOiNGOUY0RkY7XG4kdGhlbWUtb3BhY3RpdHktYm9yZGVyOiNiZTk2ZjU7XG4kdGhlbWUtcmVkLXRleHQ6I0M3M0QzRDtcbiR0aGVtZS1yZWQtYmFja2dyb3VuZC1jb2xvcjogI0ZDQUVBRTtcbiR0aGVtZW4tcmVkLWJvcmRlci1jb2xvcjojRUQ3MzczO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogI2RlZTJlNjtcbiRzZWNvbmRhcnktdGhlbWU6ICNjMjU2M2Y7XG4kc2Vjb25kYXJ5LWxpZ2h0LXRoZW1lOiAjZWZjY2M1OyJdfQ== */"

/***/ }),

/***/ "./src/app/masters/sap-masters/mt-oe-bom/mt-oe-bom.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/masters/sap-masters/mt-oe-bom/mt-oe-bom.component.ts ***!
  \**********************************************************************/
/*! exports provided: MtOeBomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtOeBomComponent", function() { return MtOeBomComponent; });
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





var MtOeBomComponent = /** @class */ (function () {
    function MtOeBomComponent(service, toastr) {
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
        this.loadFactor = "";
        this.effectiveDate = "";
        this.editing = {};
        this.page = {
            limit: 100,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.month_names = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
        };
        this.insDate = "";
        this.insDatep = "";
        this.updDate = "";
        this.updDatep = "";
    }
    MtOeBomComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "sap-master");
    };
    //show the filter
    MtOeBomComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    MtOeBomComponent.prototype.upload = function () { };
    MtOeBomComponent.prototype.doSubmitSearch = function () {
        var data = {
            itemId: this.itemId,
            oeCode: this.oeCode,
            salesSku: this.salesSku
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.doSearch(data);
    };
    MtOeBomComponent.prototype.doSearch = function (data) {
        var _this = this;
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMTOEBom, data).subscribe(function (response) {
            console.log(response);
            _this.mtOEBOMList = response['data'].mtOeBoms;
            _this.page.count = response['data'].total;
            _this.page.limit = response['data'].pageLength;
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //server side pagination
    MtOeBomComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            itemId: this.itemId,
            oeCode: this.oeCode,
        };
        this.doSearch(bodyData);
    };
    MtOeBomComponent.prototype.formatDate = function (data) {
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
    MtOeBomComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    MtOeBomComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    MtOeBomComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    MtOeBomComponent.prototype.updateValue = function (row, event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex);
        var mtItemIndex = this.mtOEBOMList.findIndex(function (data) { return data.id == row.id; });
        console.log(cell);
        this.mtOEBOMList[mtItemIndex][cell] = event.target.value;
        this.mtOEBOMList = this.mtOEBOMList.slice();
        console.log('UPDATED!', this.mtOEBOMList);
    };
    MtOeBomComponent.prototype.modifyItem = function (row) {
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
                var index = _this.mtOEBOMList.findIndex(function (data) { return row.id == data.id; });
                if (index > -1) {
                    _this.mtOEBOMList[index] = response['data'];
                    _this.mtOEBOMList = _this.mtOEBOMList.slice();
                }
                console.log(_this.mtOEBOMList, "this.mtOEBOMList");
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
    MtOeBomComponent.prototype.clearAll = function () {
        this.itemId = "";
        this.oeCode = "";
        this.salesSku = "";
    };
    // export to excel file
    MtOeBomComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        if (this.mtOEBOMList === undefined) {
            this.isLoading = false;
        }
        var data = {
            itemId: this.itemId,
            oeCode: this.oeCode,
            salesSku: this.salesSku,
            pageLength: this.page.count
            // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
        };
        if (this.mtOEBOMList.length > 0) {
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMTOEBom, data).subscribe(function (response) {
                console.log(response);
                if (response['statusCode'] == 200) {
                    var excelRawData = response['data'].mtOeBoms.slice();
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        _this.insDate = _this.formatDate(excelRawData[i].insertDate);
                        _this.insDatep = _this.effectiveDate;
                        _this.updDate = _this.formatDate(excelRawData[i].updateDate);
                        _this.updDatep = _this.effectiveDate;
                        var data_1 = {
                            "Sales SKU": excelRawData[i].salesSku,
                            "Item Id": excelRawData[i].itemId,
                            "Comp Qty ": excelRawData[i].compQty,
                            "Item Seq  ": excelRawData[i].itemSeq,
                            "OE Code   ": excelRawData[i].oeCode,
                            "Insert Date   ": _this.insDatep,
                            "Update Date   ": _this.updDatep,
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, 'OE Bom.xlsx');
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
            this.toastr.error("No Records To Generate Excel..", "Error!");
            this.isLoading = false;
        }
    };
    // // export to excel file
    // export() {
    //   this.isLoading = true;
    //   let data = {
    //     itemId: this.itemId,
    //     classification: this.itemClassification,
    //     description: this.itemDescription,
    //     type: this.itemType,
    //     group: this.itemGroup,
    //     category: this.itemCategory,
    //     tte: this.tte,
    //     loadfactor: this.loadFactor
    //   }
    //   this.service.post_service(ApiserviceService.apisList.getMtItem, data).subscribe(response => {
    //     if (response['statusCode'] == 200) {
    //       let mtItemData = response['data'].items;
    //       let excelRawData = mtItemData;
    //       let newExcelData = [];
    //       for (let i = 0; i < excelRawData.length; i++) {
    //         let data = {
    //           "Item Id": excelRawData[i].id,
    //           "Item Classification": excelRawData[i].classification,
    //           "Item Description": excelRawData[i].description,
    //           "Item Type": excelRawData[i].type,
    //           "Item Group": excelRawData[i].group,
    //           "TTE": excelRawData[i].tte,
    //           "Load Factor": excelRawData[i].loadFactor,
    //           "Gross Wt": excelRawData[i].grossWt,
    //           "Gross Wt UOM": excelRawData[i].grossWtUom,
    //           "Net Wt": excelRawData[i].netWt,
    //           "Net Wt UOM": excelRawData[i].netWtUom,
    //           "Volume": excelRawData[i].volume,
    //           "Volume UOM": excelRawData[i].volUom,
    //           "Length": excelRawData[i].length,
    //           "Length UOM": excelRawData[i].lenUom,
    //           "Width": excelRawData[i].width,
    //           "Width UOM": excelRawData[i].wdUom,
    //           "Height": excelRawData[i].height,
    //           "Height UOM": excelRawData[i].htUom,
    //           "Diameter": excelRawData[i].diameter,
    //           "Diameter UOM": excelRawData[i].dmUom,
    //           "Item Category": excelRawData[i].itemCategory
    //         }
    //         newExcelData.push(data)
    //       }
    //       const workBook = XLSX.utils.book_new(); // create a new blank book
    //       const workSheet = XLSX.utils.json_to_sheet(newExcelData);
    //       XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
    //       XLSX.writeFile(workBook, 'MtItemData.xlsx');
    //       this.isLoading = false;
    //     } else {
    //       this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
    //       this.isLoading = false;
    //     }
    //   }, (err) => {
    //     console.log("Error", err);
    //     this.toastr.error(err ? err : "Something went wrong..", "Error!");
    //     this.isLoading = false;
    //   })
    // }
    MtOeBomComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.page.offset = 0;
        this.doSubmitSearch();
    };
    // For Pagination Footer
    MtOeBomComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], MtOeBomComponent.prototype, "table", void 0);
    MtOeBomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mt-oe-bom',
            template: __webpack_require__(/*! ./mt-oe-bom.component.html */ "./src/app/masters/sap-masters/mt-oe-bom/mt-oe-bom.component.html"),
            styles: [__webpack_require__(/*! ./mt-oe-bom.component.scss */ "./src/app/masters/sap-masters/mt-oe-bom/mt-oe-bom.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MtOeBomComponent);
    return MtOeBomComponent;
}());



/***/ }),

/***/ "./src/app/masters/sap-masters/mt-oe-bom/mt-oe-bom.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/masters/sap-masters/mt-oe-bom/mt-oe-bom.module.ts ***!
  \*******************************************************************/
/*! exports provided: MTOeBomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MTOeBomModule", function() { return MTOeBomModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mt_oe_bom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mt-oe-bom.component */ "./src/app/masters/sap-masters/mt-oe-bom/mt-oe-bom.component.ts");
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
    { path: '', component: _mt_oe_bom_component__WEBPACK_IMPORTED_MODULE_2__["MtOeBomComponent"] }
];
var MTOeBomModule = /** @class */ (function () {
    function MTOeBomModule() {
    }
    MTOeBomModule = __decorate([
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
                _mt_oe_bom_component__WEBPACK_IMPORTED_MODULE_2__["MtOeBomComponent"]
            ]
        })
    ], MTOeBomModule);
    return MTOeBomModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-sap-masters-mt-oe-bom-mt-oe-bom-module.js.map