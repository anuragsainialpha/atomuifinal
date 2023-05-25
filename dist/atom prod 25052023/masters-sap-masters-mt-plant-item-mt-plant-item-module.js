(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-sap-masters-mt-plant-item-mt-plant-item-module"],{

/***/ "./src/app/masters/sap-masters/mt-plant-item/mt-plant-item.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/masters/sap-masters/mt-plant-item/mt-plant-item.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n    <b> SAP Masters &gt; Plant Item Weight</b>\n    <span class=\"pull-right refresh-span\">\n      <!-- <button class=\"theme-small-button\" (click)=\"upload()\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n\n\n  \n\n\n  <div class=\"mt-item-fields\" *ngIf=\"isShow\">\n    <div class=\"col-md-12 row\">\n      <div class=\"col-md-12 padding-right-40\">\n        <div class=\"row\">\n          <div class=\"col-md-6 pd-0\">\n            <div class=\"row\">\n             \n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <mat-form-field>\n    \n                        <input matInput placeholder=\"Plant Code\" [(ngModel)]=\"plantCode\" name=\"plantCode\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                        <mat-form-field>\n                          <input matInput placeholder=\"Item Id\" [(ngModel)]=\"itemId\" name=\"itemId\">\n                        </mat-form-field>\n                      </div>\n                    </div>\n  \n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <mat-form-field>\n                        <input matInput [matDatepicker]=\"createIndentDate\" [(ngModel)]=\"indentDate\"\n                          name=\"indentDate\" placeholder=\"Effective Date\" (ngModelChange)=\"formatDate($event)\">\n                        <mat-datepicker-toggle matSuffix [for]=\"createIndentDate\"></mat-datepicker-toggle>\n                        <mat-datepicker #createIndentDate disabled=\"false\"></mat-datepicker>\n                      </mat-form-field>\n                    </div>\n                  </div>\n                  \n\n            </div>\n          </div>\n          <div class='col-md-6 pd-0'>\n            <div class=\"row mg-0\">\n\n            \n            \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-fileds\">\n          <button class=\"theme-small-button\" (click)=\"doSubmitSearch()\" matTooltip=\"Search\">\n            <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [columnMode]=\"'force'\"\n[rows]='responseItemsList' [externalPaging]=\"true\" (page)=\"datatablePageData($event)\" [scrollbarH]=\"false\"\n[headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\"\n[offset]=\"page.offset\">\n\n<!-- <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table \n      [rows]='responseItemsList' [scrollbarH]=\"true\" [headerHeight]=\"50\" \n      [externalPaging]=\"true\" (page)=\"datatablePageData($event)\" \n      [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\" [offset]=\"page.offset\"> -->\n\n<ngx-datatable-column name=\"Plant Code\" [width]=\"120\" [resizeable]=\"false\" prop=\"plantCode\" [sortable]=\"true\">\n  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n    {{row.plantCode}}\n  </ng-template>\n</ngx-datatable-column>\n\n<ngx-datatable-column name=\"Item Id \" [width]=\"120\" [resizeable]=\"false\" prop=\"itemId\" [sortable]=\"true\">\n  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n    {{row.itemId}}\n  </ng-template>\n</ngx-datatable-column>\n<ngx-datatable-column name=\"Effective Date\" [width]=\"120\" [resizeable]=\"false\" prop=\"effectiveDate\" [sortable]=\"true\">\n  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n    {{trimDate(row.effectiveDate)}}\n  </ng-template>\n</ngx-datatable-column>\n<ngx-datatable-column name=\"Weight\" [width]=\"120\" [resizeable]=\"false\" prop=\"weight\" [sortable]=\"true\"\n  [cellClass]=\"'text-right'\">\n  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n    {{row.weight}}\n  </ng-template>\n</ngx-datatable-column>\n<ngx-datatable-column name=\"Weight Uom\" [width]=\"100\" [resizeable]=\"false\" prop=\"weightUom\" [sortable]=\"true\">\n  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n    {{row.weightUom}}\n  </ng-template>\n</ngx-datatable-column>\n<!--           \n        <ngx-datatable-column name=\"Insert User\" [width]=\"140\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.insertUser}}\n          </ng-template>\n        </ngx-datatable-column> -->\n<ngx-datatable-column name=\"Insert Date\" [width]=\"120\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\n  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n    {{trimDate(row.insertDate)}}\n  </ng-template>\n</ngx-datatable-column>\n\n<!-- <ngx-datatable-column name=\"Update User\" [width]=\"140\" [resizeable]=\"false\" prop=\"updateUser\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.updateUser}}\n          </ng-template>\n        </ngx-datatable-column> -->\n<ngx-datatable-column name=\"Update Date\" [width]=\"120\" [resizeable]=\"false\" prop=\"updateDate\" [sortable]=\"true\">\n  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n    {{trimDate(row.updateDate)}}\n  </ng-template>\n</ngx-datatable-column>\n\n   <!-- Footer Template starts -->\n   <ngx-datatable-footer>\n    <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n      let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n      <div class=\"page-count\">\n        <span *ngIf=\"selectedCount\">\n          {{selectedCount.toLocaleString()}} Selected |\n        </span>\n        Showing {{(offset * pageSize)+1}} to {{(rowCount>\n        (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n        {{(rowCount)}} records.\n      </div>\n      <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n        [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n        [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n      </datatable-pager>\n    </ng-template>\n  </ngx-datatable-footer>\n  <!-- Footer Template Ends -->\n\n</ngx-datatable>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/masters/sap-masters/mt-plant-item/mt-plant-item.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/masters/sap-masters/mt-plant-item/mt-plant-item.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mt-item-header {\n  padding: 5px 0px;\n  margin-bottom: 0px;\n  font-weight: 300; }\n  .mt-item-header span {\n    color: #3F2B53;\n    margin-right: 15px; }\n  .mt-item-fields {\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0px; }\n  .mt-item-fields p > i {\n    cursor: pointer; }\n  .mt-item-fields .col-md-3 {\n    padding: 0px 15px; }\n  .mt-item-fields .form-group {\n    margin-bottom: 0; }\n  .mt-item-fields .form-group .mat-form-field .mat-form-field-wrapper {\n      padding-bottom: 0.5em !important; }\n  .mt-item-table {\n  margin-top: 10px;\n  width: 100%;\n  overflow: hidden;\n  overflow-x: auto; }\n  .mt-item-table table {\n    table-layout: fixed;\n    margin-bottom: 0em; }\n  .mt-item-table table tr {\n      height: 30px; }\n  .mt-item-table table tr th {\n        width: 150px;\n        padding: 0.3rem; }\n  .mt-item-table table tr td {\n        width: 150px;\n        padding: 0.25rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVycy9zYXAtbWFzdGVycy9tdC1wbGFudC1pdGVtL0M6XFxVc2Vyc1xcQWJoZXlTb29kXFxPbmVEcml2ZSAtIEFjY2VsYWxwaGEgU29mdHdhcmUgUHZ0LiBMdGRcXERlc2t0b3BcXGF0b20gYXBvbGxvXFxBcG9sbG9cXE5ldy0gQW51cmFnXFxhdG9tLXVpL3NyY1xcYXBwXFxtYXN0ZXJzXFxzYXAtbWFzdGVyc1xcbXQtcGxhbnQtaXRlbVxcbXQtcGxhbnQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFzdGVycy9zYXAtbWFzdGVycy9tdC1wbGFudC1pdGVtL0M6XFxVc2Vyc1xcQWJoZXlTb29kXFxPbmVEcml2ZSAtIEFjY2VsYWxwaGEgU29mdHdhcmUgUHZ0LiBMdGRcXERlc2t0b3BcXGF0b20gYXBvbGxvXFxBcG9sbG9cXE5ldy0gQW51cmFnXFxhdG9tLXVpL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7RUFIcEI7SUFLUSxjQ1BpQjtJRFFqQixrQkFBa0IsRUFBQTtFQUsxQjtFQUNJLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0VBSGhCO0lBS1EsZUFBZSxFQUFBO0VBTHZCO0lBUVEsaUJBQWlCLEVBQUE7RUFSekI7SUFXUSxnQkFBZ0IsRUFBQTtFQVh4QjtNQWNnQixnQ0FBZ0MsRUFBQTtFQUtoRDtFQUNJLGdCQUFnQjtFQUNoQixXQUFVO0VBQ1YsZ0JBQWU7RUFDZixnQkFBZSxFQUFBO0VBSm5CO0lBTVEsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBO0VBUDFCO01BU1ksWUFBVyxFQUFBO0VBVHZCO1FBV2dCLFlBQVc7UUFDWCxlQUFjLEVBQUE7RUFaOUI7UUFlZ0IsWUFBVztRQUNYLGdCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYXN0ZXJzL3NhcC1tYXN0ZXJzL210LXBsYW50LWl0ZW0vbXQtcGxhbnQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9taXhpbnMnO1xyXG5cclxuLm10LWl0ZW0taGVhZGVye1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiAkZGFyay1jb2xvci10aGVtZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgLy8gZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbn1cclxuLm10LWl0ZW0tZmllbGRze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcCA+IGl7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLmNvbC1tZC0ze1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgICAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5tdC1pdGVtLXRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBvdmVyZmxvdy14OmF1dG87XHJcbiAgICB0YWJsZXtcclxuICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBlbTtcclxuICAgICAgICB0cntcclxuICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgICAgIHRoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjAuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowLjI1cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIiR0aGVtZS1wdXJwbGUtYmFja2dyb3VuZC1jb2xvcjojRkFGOUZFO1xuJGRhcmstY29sb3ItdGhlbWU6IzNGMkI1MztcbiR0aGVtZS1wdXJwbGUtY29sb3I6IzVBMzA5NDtcbiRsaWdodC1jb2xvci10aGVtZTojZDRiNmZmO1xuJG1lZGl1bS1jb2xvci10aGVtZTogIzc3NTg5OTtcbiR0aGVtZS1ncmV5OiNhYWE7XG4kdGhlbWUtbGlnaHQtZ3JleTogI2NjYztcbiR0aGVtZS13aGl0ZTojZmZmZmZmO1xuJHRoZW1lLWJsYWNrOiMwMDA7XG4kdGhlbWUtYmx1ZS1jb2xvcjojMjE5NmYzO1xuJHRoZW1lLWdyZWVuLWNvbG9yOiM0MTc1MDU7XG4kdGhlbWUtbGlnaHQtZ3JlZW4tY29sb3I6I0I4RTk4NjtcbiR0aGVtZS1saWdodC1icm93bi1jb2xvcjojRUNFMTU1IDtcbiR0aGVtZS1icm93bi1jb2xvcjojOUI5MzJCO1xuJHRoZW1lLWJyb3duLWJvcmRlcjojQ0ZDMzJEO1xuJHRoZW1lLXNlYXJjaGJveC1iYWNrZ3JvdW5kLWNvbG9yOiNGOUY0RkY7XG4kdGhlbWUtb3BhY3RpdHktYm9yZGVyOiNiZTk2ZjU7XG4kdGhlbWUtcmVkLXRleHQ6I0M3M0QzRDtcbiR0aGVtZS1yZWQtYmFja2dyb3VuZC1jb2xvcjogI0ZDQUVBRTtcbiR0aGVtZW4tcmVkLWJvcmRlci1jb2xvcjojRUQ3MzczO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogI2RlZTJlNjtcbiRzZWNvbmRhcnktdGhlbWU6ICNjMjU2M2Y7XG4kc2Vjb25kYXJ5LWxpZ2h0LXRoZW1lOiAjZWZjY2M1OyJdfQ== */"

/***/ }),

/***/ "./src/app/masters/sap-masters/mt-plant-item/mt-plant-item.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/masters/sap-masters/mt-plant-item/mt-plant-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: MtPlantItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtPlantItemComponent", function() { return MtPlantItemComponent; });
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





var MtPlantItemComponent = /** @class */ (function () {
    function MtPlantItemComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.isLoading = false;
        this.isShow = true;
        //itemId: any = "130043";
        this.itemClassification = "";
        this.itemDescription = "";
        this.itemType = "";
        this.itemGroup = "";
        this.itemCategory = "";
        this.tte = "";
        this.loadFactor = "";
        this.plantCode = "";
        this.effectiveDate = "";
        this.itemId = "";
        this.weight = "";
        this.weightUom = "";
        this.insertUser = "";
        this.insertDate = "";
        this.updateUser = "";
        this.updateDate = "";
        this.indentDate = "";
        this.editing = {};
        this.expiryDate = "";
        this.ttDays = "";
        this.baseFreight = "";
        this.status = "Level2 Approved";
        this.statusList = [{ val: "Unapproved" }, { val: "Level1 Approved" }, { val: "Level2 Approved" }];
        this.page = {
            limit: 100,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.tempEffectiveDate = "";
        this.month_names = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
        };
        this.insDate = "";
        this.insDatep = "";
        this.updDate = "";
        this.updDatep = "";
        this.effDate = "";
        this.effDatep = "";
    }
    MtPlantItemComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "sap-master");
    };
    // For Pagination Footer
    MtPlantItemComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    MtPlantItemComponent.prototype.upload = function () { };
    MtPlantItemComponent.prototype.doSubmitSearch = function () {
        var data = {
            itemId: this.itemId,
            plantCode: this.plantCode,
            effectiveDate: this.effectiveDate,
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.doSearch(data);
    };
    MtPlantItemComponent.prototype.doSearch = function (data) {
        var _this = this;
        this.isLoading = true;
        this.responseItemsList = [];
        console.log("submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMTPLANTItem, data).subscribe(function (response) {
            console.log(response);
            _this.page.count = response['data'].total;
            _this.page.limit = response['data'].pageLength;
            _this.responseItemsList = response['data'].itemsList;
            _this.responseItemsList = _this.responseItemsList.slice();
            // console.log(this.responseItemsList);
            console.log("responseItemsList data:  " + JSON.stringify(_this.responseItemsList));
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    //server side pagination
    MtPlantItemComponent.prototype.datatablePageData = function (pageInfo) {
        var data = {
            index: pageInfo.offset,
            itemId: this.itemId,
            plantCode: this.plantCode,
            effectiveDate: this.effectiveDate,
        };
        this.doSearch(data);
    };
    // clear data
    MtPlantItemComponent.prototype.clearAll = function () {
        this.plantCode = "";
        this.effectiveDate = "";
        this.itemId = "";
        this.formattedDate = "";
        this.indentDate = "";
    };
    MtPlantItemComponent.prototype.formatDate = function (data) {
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
    MtPlantItemComponent.prototype.effformatDate = function (data) {
        console.log(data);
        if (data != null && data) {
            var formatted = new Date(data), mnth = ("0" + (formatted.getMonth() + 0)).slice(-2), day = ("0" + formatted.getDate()).slice(-2);
            this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
            this.effectiveDate = this.formattedDate;
            console.log(this.effectiveDate + "  formattedDate effectiveDate");
            return this.formatDate;
        }
        else {
            this.effectiveDate = "";
        }
    };
    MtPlantItemComponent.prototype.efftrimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        this.tempEffectiveDate = array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    MtPlantItemComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    MtPlantItemComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    MtPlantItemComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    //show the filter
    MtPlantItemComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    // export to excel file
    MtPlantItemComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        if (this.responseItemsList === undefined) {
            this.isLoading = false;
        }
        if (this.responseItemsList.length > 0) {
            var data = {
                itemId: this.itemId,
                plantCode: this.plantCode,
                effectiveDate: this.effectiveDate,
                pageLength: this.page.count
                // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
            };
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMTPLANTItem, data).subscribe(function (response) {
                console.log(response);
                if (response['statusCode'] == 200) {
                    var excelRawData = response['data'].itemsList.slice();
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        _this.insDate = _this.formatDate(excelRawData[i].insertDate);
                        _this.insDatep = _this.effectiveDate;
                        _this.updDate = _this.formatDate(excelRawData[i].updateDate);
                        _this.updDatep = _this.effectiveDate;
                        _this.effDate = _this.efftrimDate(excelRawData[i].effectiveDate);
                        _this.effDatep = _this.tempEffectiveDate;
                        var data_1 = {
                            "Plant Code": excelRawData[i].plantCode,
                            "Item Id ": excelRawData[i].itemId,
                            "Effective Date": _this.effDatep,
                            "Weight  ": excelRawData[i].weight,
                            "Weight Uom   ": excelRawData[i].weightUom,
                            "Insert Date   ": _this.insDatep,
                            "Update Date   ": _this.updDatep,
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, 'Plant Item weight.xlsx');
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
            this.toastr.error('No Records To Generate Excel...', 'Error!');
            this.isLoading = false;
        }
    };
    // Refresh data
    MtPlantItemComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.page.offset = 0;
        this.doSubmitSearch();
    };
    MtPlantItemComponent.prototype.updateValue = function (row, event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex);
        var mtItemIndex = this.responseItemsList.findIndex(function (data) { return data.id == row.id; });
        console.log(cell);
        this.responseItemsList[mtItemIndex][cell] = event.target.value;
        this.responseItemsList = this.responseItemsList.slice();
        console.log('UPDATED!', this.responseItemsList);
    };
    MtPlantItemComponent.prototype.modifyItem = function (row) {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], MtPlantItemComponent.prototype, "table", void 0);
    MtPlantItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mt-plant-item',
            template: __webpack_require__(/*! ./mt-plant-item.component.html */ "./src/app/masters/sap-masters/mt-plant-item/mt-plant-item.component.html"),
            styles: [__webpack_require__(/*! ./mt-plant-item.component.scss */ "./src/app/masters/sap-masters/mt-plant-item/mt-plant-item.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MtPlantItemComponent);
    return MtPlantItemComponent;
}());



/***/ }),

/***/ "./src/app/masters/sap-masters/mt-plant-item/mt-plant-item.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/masters/sap-masters/mt-plant-item/mt-plant-item.module.ts ***!
  \***************************************************************************/
/*! exports provided: MTPlantItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MTPlantItemModule", function() { return MTPlantItemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mt_plant_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mt-plant-item.component */ "./src/app/masters/sap-masters/mt-plant-item/mt-plant-item.component.ts");
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
    { path: '', component: _mt_plant_item_component__WEBPACK_IMPORTED_MODULE_2__["MtPlantItemComponent"] }
];
var MTPlantItemModule = /** @class */ (function () {
    function MTPlantItemModule() {
    }
    MTPlantItemModule = __decorate([
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
                _mt_plant_item_component__WEBPACK_IMPORTED_MODULE_2__["MtPlantItemComponent"]
            ]
        })
    ], MTPlantItemModule);
    return MTPlantItemModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-sap-masters-mt-plant-item-mt-plant-item-module.js.map