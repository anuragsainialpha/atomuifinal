(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-paas-masters-mt-material-group-mt-material-group-module"],{

/***/ "./src/app/masters/paas-masters/mt-material-group/mt-material-group.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-material-group/mt-material-group.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n      <b> PaaS Masters &gt; Material Group</b>\n    <span class=\"pull-right refresh-span\">\n        <button class=\"theme-small-button\" (click)=\"displayAddForm()\" matTooltip=\"Add New\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          </button>\n      <!-- <button class=\"theme-small-button\" (click)=\"upload()\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n\n      <!-- <button class=\"theme-small-button\" [routerLink]=\"['/admin/paas-masters/upload-mt-material-group']\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n\n\n\n<div class=\"mt-item-fields\" *ngIf=\"isShow\">\n<div class=\"col-md-12 row\">\n  <div class=\"col-md-12 padding-right-40\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n          <mat-form-field>\n            <input matInput placeholder=\"Material Group Id\" [(ngModel)]=\"materialGroupId\" name=\"materialGroupId\">\n          </mat-form-field>\n      </div>\n      <div class=\"col-md-3\">\n            <mat-form-field>\n              <input matInput placeholder=\"SCM Group\" [(ngModel)]=\"scmGroup\" name=\"scmGroup\">\n            </mat-form-field>\n        </div>\n\n      <!-- <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <mat-form-field>\n            <input matInput placeholder=\"Description 1\" [(ngModel)]=\"description1\" name=\"description1\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <mat-form-field>\n            <input matInput placeholder=\"Description 2\" [(ngModel)]=\"description2\" name=\"description2\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <mat-form-field>\n            <input matInput placeholder=\"Mg Id\" [(ngModel)]=\"mgId\" name=\"mgId\">\n          </mat-form-field>\n        </div>\n      </div> -->\n    </div>\n  </div>\n  <div class=\"pull-right\">\n    <div class=\"search-fileds\">\n      <button class=\"theme-small-button\" (click)=\"doSubmitSearch()\" matTooltip=\"Search\">\n        <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n        <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n</div>\n\n\n  <div class=\"mt-item-table\">\n      <!-- <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [rows]='responseItemsList' [scrollbarH]=\"true\" \n      [externalPaging]=\"true\" (page)=\"datatablePageData($event)\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\" [offset]=\"page.offset\">\n         -->\n      <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [columnMode]=\"'force'\"\n      [rows]='responseItemsList' [externalPaging]=\"true\" (page)=\"datatablePageData($event)\" [scrollbarH]=\"false\"\n      [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\"\n      [offset]=\"page.offset\">\n      <ngx-datatable-column name=\"Material Group Id\" [width]=\"160\" [resizeable]=\"false\" prop=\"materialGroupId\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.materialGroupId}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Description 1\" [width]=\"220\" [resizeable]=\"false\" prop=\"itemId\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.description_1}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Description 2\" [width]=\"210\" [resizeable]=\"false\" prop=\"compQty\"  [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.description_2}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"SCM Group\" [width]=\"130\" [resizeable]=\"false\" prop=\"itemSeq\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.scmGroup}}\n          </ng-template>\n        </ngx-datatable-column>\n        <!-- <ngx-datatable-column name=\"MG Id\" [width]=\"100\" [resizeable]=\"false\" prop=\"itemSeq\" [cellClass]=\"'text-right'\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.mgId}}\n            </ng-template>\n          </ngx-datatable-column> -->\n\n          <ngx-datatable-column name=\"Insert User\" [width]=\"120\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{row.insertUser}}\n              </ng-template>\n            </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Insert Date\" [width]=\"120\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{trimDate(row.insertDate)}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Update User\" [width]=\"120\" [resizeable]=\"false\" prop=\"updateUser\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.updateUser}}\n            </ng-template>\n          </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Update Date\" [width]=\"120\" [resizeable]=\"false\" prop=\"updateDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{trimDate(row.updateDate)}}\n          </ng-template>\n        </ngx-datatable-column>\n\n\n        <ngx-datatable-column name=\"Action\" [width]=\"100\" [resizeable]=\"false\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n            <button class=\"theme-small-button btn\" matTooltip=\"Modify\" (click)=\"showUpdateModel(row)\" [disabled]=\"(row.isError)\">\n              <i class=\"fa fa-edit fa-2x\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n        </ngx-datatable-column>\n           <!-- Footer Template starts -->\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected |\n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n            [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n      </ngx-datatable>\n  </div>\n</div>\n\n\n\n\n<!--  -->\n<div class=\"modal\" id=\"myModal\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\">\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && updateMtMaterialGroup(f))\">\n<div class=\"modal-header\">\n  <h4 class=\"modal-title text-primary\">Update Material Group</h4>\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n</div>\n<div class=\"modal-body\">\n  \n  <!-- <div class=\"form-group\">\n    <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n      <input matInput placeholder=\"Material Group Id\" aria-label=\"State\" [(ngModel)]=\"materialGroupIdu\" name=\"materialGroupIdu\"\n        required autocomplete=\"off\">\n      <mat-error *ngIf=\"(f.submitted && materialGroupIdu.invalid)\">\n        <p *ngIf=\"locationIdu.errors.required\">Material Group Id is <strong>required</strong> </p>\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div class=\"form-group\">\n    <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n      <input matInput placeholder=\"Description1\" aria-label=\"State\" [(ngModel)]=\"description1u\" name=\"description1u\"\n        required autocomplete=\"off\">\n      <mat-error *ngIf=\"(f.submitted && description1u.invalid)\">\n        <p *ngIf=\"description1u.errors.required\">Description 1 is <strong>required</strong> </p>\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div class=\"form-group\">\n    <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n      <input matInput placeholder=\"Description2\" aria-label=\"State\" [(ngModel)]=\"description2u\" name=\"description2u\"\n        required autocomplete=\"off\">\n      <mat-error *ngIf=\"(f.submitted && description2u.invalid)\">\n        <p *ngIf=\"description2u.errors.required\">Description 2 is <strong>required</strong> </p>\n      </mat-error>\n    </mat-form-field>\n  </div> -->\n\n  <div class=\"form-group\">\n    <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n       <input matInput placeholder=\"SCM Group\" aria-label=\"State\" [(ngModel)]=\"scmGroupu\" name=\"scmGroupu\"\n        required autocomplete=\"off\" oninput=\"this.value = this.value.toUpperCase()\">\n      <mat-error *ngIf=\"(f.submitted && scmGroupu.invalid)\">\n        <p *ngIf=\"scmGroupu.errors.required\">Scm Group is <strong>required</strong> </p>\n      </mat-error> \n\n      <!-- <mat-select placeholder=\"SCM Group\" [(ngModel)]=\"scmGroupu\" name=\"scmGroupu\" #qty=\"ngModel\" required>\n          <mat-option *ngFor=\"let loc of scmGroupList\" [value]=\"loc\">\n            {{loc}}\n          </mat-option>\n        </mat-select>\n      <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n          <p *ngIf=\"qty.errors.required\">SCM Group is <strong>required</strong></p>\n        </mat-error> -->\n\n\n      <p class=\"mtop6\">SCM Group</p>\n    </mat-form-field>\n  </div>\n\n</div>\n<div class=\"modal-footer\">\n  <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btm-action-btn\">Save</button>\n  <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\" data-dismiss=\"modal\">Close</button>\n</div>\n</form>\n</div>\n</div>\n</div>\n\n\n\n\n\n<br><br>\n<div class=\"mt-item-fields\" *ngIf=\"displayForm\">\n<div class=\"col-md-12 text-center padding-right-40\">\n<mat-card>\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && addMtMaterialGroup(f))\">\n  <h4 class=\"mt-item-header text-center text-primary\">\n    <b> Add New Material Group </b></h4>\n  <br>\n  <div class=\"row\">\n\n      <div class=\"col-md-1\">\n          <div class=\"form-group\">\n          </div>\n        </div>\n\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <!-- <input matInput placeholder=\"Material Group Id\" [(ngModel)]=\"materialGroupIdf\" name=\"materialGroupIdf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n            <p *ngIf=\"qty.errors.required\">Material Group Id is <strong>required</strong></p>\n          </mat-error> -->\n\n          <mat-select placeholder=\"Material Group Id\" [(ngModel)]=\"materialGroupIdf\" name=\"materialGroupIdf\" #qty=\"ngModel\" required oninput=\"this.value = this.value.toUpperCase()\">\n              <mat-option *ngFor=\"let loc of itemGroupsList\" [value]=\"loc\">\n                {{loc}}\n              </mat-option>\n            </mat-select>\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Material Group Id is <strong>required</strong></p>\n            </mat-error>\n\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Description 1\" [(ngModel)]=\"description1f\" name=\"description1f\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Description 1 is <strong>required</strong></p>\n            </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Description 2\" [(ngModel)]=\"description2f\" name=\"description2f\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Description 2 is <strong>required</strong></p>\n            </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n\n\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"SCM Group\" [(ngModel)]=\"scmGroupf\" name=\"scmGroupf\" required #qty=\"ngModel\" oninput=\"this.value = this.value.toUpperCase()\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Scm Group is <strong>required</strong></p>\n            </mat-error>\n\n            <!-- <mat-select placeholder=\"SCM Group\" [(ngModel)]=\"scmGroupf\" name=\"scmGroupf\" #qty=\"ngModel\" required>\n                <mat-option *ngFor=\"let loc of scmGroupList\" [value]=\"loc\">\n                  {{loc}}\n                </mat-option>\n              </mat-select>\n            <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                <p *ngIf=\"qty.errors.required\">SCM Group is <strong>required</strong></p>\n              </mat-error> -->\n\n              \n        </mat-form-field>\n      </div>\n    </div>\n    <!-- <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Mg Id\" [(ngModel)]=\"mgIdf\" name=\"mgIdf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Mg Id is <strong>required</strong></p>\n            </mat-error>\n        </mat-form-field>\n      </div>\n    </div> -->\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <button mat-raised-button color=\"primary\" class=\"btm-action-btn\">Save</button>\n      </div>\n    </div>\n  </div>\n</form>\n</mat-card>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/masters/paas-masters/mt-material-group/mt-material-group.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-material-group/mt-material-group.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvcGFhcy1tYXN0ZXJzL210LW1hdGVyaWFsLWdyb3VwL210LW1hdGVyaWFsLWdyb3VwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/masters/paas-masters/mt-material-group/mt-material-group.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-material-group/mt-material-group.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MtMaterialGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtMaterialGroupComponent", function() { return MtMaterialGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MtMaterialGroupComponent = /** @class */ (function () {
    function MtMaterialGroupComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.isLoading = false;
        this.isShow = true;
        this.salesSku = "";
        this.itemId = "";
        this.compQty = "";
        this.itemSeq = "";
        this.oeCode = "";
        this.itemClassification = "";
        this.itemDescription = "";
        this.itemType = "";
        this.itemGroup = "";
        this.itemCategory = "";
        this.tte = "";
        this.loadFactor = "";
        this.effectiveDate = "";
        this.materialGroupIdf = "";
        this.description1f = "";
        this.description2f = "";
        this.scmGroupf = "";
        this.mgIdf = "";
        this.materialGroupIdu = "";
        this.description1u = "";
        this.description2u = "";
        this.scmGroupu = "";
        this.mgIdu = "";
        this.materialGroupId = "";
        this.description1 = "";
        this.description2 = "";
        this.scmGroup = "";
        this.mgId = "";
        this.insertUser = "";
        this.insertDate = "";
        this.updateUser = "";
        this.updateDate = "";
        this.editing = {};
        this.page = {
            limit: 100,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.itemGroupsList = [];
        this.scmGroupList = [];
        this.insertStatus = "";
        this.insDate = "";
        this.insDatep = "";
        this.updDate = "";
        this.updDatep = "";
        this.displayForm = false;
        this.month_names = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
        };
    }
    MtMaterialGroupComponent.prototype.showUpdateModel = function (row) {
        this.materialGroupIdu = row.materialGroupId;
        this.description1u = row.description_1;
        this.description2u = row.description_2;
        this.scmGroupu = row.scmGroup;
        this.mgIdu = row.mgId;
        $("#myModal").modal('show');
    };
    MtMaterialGroupComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "paas-master");
        this.getItemGroupsList();
        this.getScmgroupsList();
    };
    //show the filter
    MtMaterialGroupComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    MtMaterialGroupComponent.prototype.upload = function () { };
    // Datatable Footer
    MtMaterialGroupComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    MtMaterialGroupComponent.prototype.getItemGroupsList = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getItemGroupsList).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            _this.itemGroupsList = response['data'];
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    MtMaterialGroupComponent.prototype.getScmgroupsList = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getScmgroupsList).subscribe(function (response) {
            console.log("response array string: " + JSON.stringify(response));
            _this.scmGroupList = response['data'];
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    MtMaterialGroupComponent.prototype.doSubmitSearch = function () {
        var data = {
            materialGroupId: this.materialGroupId,
            description1: this.description1,
            description2: this.description2,
            scmGroup: this.scmGroup,
            mgId: this.mgId,
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.doSearch(data);
    };
    MtMaterialGroupComponent.prototype.doSearch = function (data) {
        var _this = this;
        console.log("submit data:  " + JSON.stringify(data));
        this.isLoading = true;
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMtMaterialGroup, data).subscribe(function (response) {
            _this.page.count = response['data'].total;
            _this.page.limit = response['data'].pageLength;
            _this.responseItemsList = response['data'].mtMaterialGroupList;
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
    MtMaterialGroupComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            materialGroupId: this.materialGroupId,
            description1: this.description1,
            description2: this.description2,
            scmGroup: this.scmGroup,
            mgId: this.mgId,
        };
        this.doSearch(bodyData);
    };
    //"mgId":this.mgIdf
    MtMaterialGroupComponent.prototype.addMtMaterialGroup = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "mtMaterialGroupList": [
                {
                    "materialGroupId": this.materialGroupIdf,
                    "description_1": this.description1f,
                    "description_2": this.description2f,
                    "scmGroup": this.scmGroupf,
                }
            ]
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.addOrUploadMtMaterialGroup, data).subscribe(function (response) {
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
    MtMaterialGroupComponent.prototype.updateMtMaterialGroup = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "mtMaterialGroupList": [
                {
                    "materialGroupId": this.materialGroupIdu,
                    "description_1": this.description1u,
                    "description_2": this.description2u,
                    "scmGroup": this.scmGroupu,
                    "mgId": this.mgIdu
                }
            ]
        };
        console.log("MtMaterialGroup submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.updateMtMaterialGroup, data).subscribe(function (response) {
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
    MtMaterialGroupComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        if (this.responseItemsList === undefined) {
            this.isLoading = false;
        }
        if (this.responseItemsList.length > 0) {
            var data = {
                materialGroupId: this.materialGroupId,
                description1: this.description1,
                description2: this.description2,
                scmGroup: this.scmGroup,
                mgId: this.mgId,
                // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
                pageLength: this.page.count
            };
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMtMaterialGroup, data).subscribe(function (response) {
                // this.page.count = response['data'].total;
                // this.page.limit = response['data'].pageLength;
                // this.responseItemsList = response['data'].mtMaterialGroupList;
                // console.log("response length: " + this.responseItemsList.length);
                // console.log("response array string: " + JSON.stringify(this.responseItemsList));
                if (response['statusCode'] == 200) {
                    var excelRawData = response['data'].mtMaterialGroupList.slice();
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        _this.insDate = _this.formatDate(excelRawData[i].insertDate);
                        _this.insDatep = _this.effectiveDate;
                        _this.updDate = _this.formatDate(excelRawData[i].updateDate);
                        _this.updDatep = _this.effectiveDate;
                        // console.log("******* "+this.datap1);
                        var data_1 = {
                            "MaterialGroup Id ": excelRawData[i].materialGroupId,
                            "Description1  ": excelRawData[i].description_1,
                            "Description2  ": excelRawData[i].description_2,
                            "ScmGroup": excelRawData[i].scmGroup,
                            "Insert User": excelRawData[i].insertUser,
                            "Insert Date  ": _this.insDatep,
                            "Update User ": excelRawData[i].updateUser,
                            "Update Date ": _this.updDatep,
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(newExcelData);
                    var wsrows = [
                        { hpt: 12 },
                        { hpx: 22 },
                    ];
                    workSheet['!rows'] = wsrows;
                    workSheet["!ref"];
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, 'Material Group.xlsx');
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
            this.toastr.error('No records to generate excel...', 'Error!');
            this.isLoading = false;
        }
    };
    MtMaterialGroupComponent.prototype.clearAll = function () {
        this.materialGroupId = "";
        this.description1 = "";
        this.description2 = "";
        this.scmGroup = "";
        this.mgId = "";
        this.insertUser = "";
        this.insertDate = "";
        this.updateUser = "";
        this.updateDate = "";
    };
    MtMaterialGroupComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.page.offset = 0;
        this.doSubmitSearch();
    };
    MtMaterialGroupComponent.prototype.displayAddForm = function () {
        if (this.displayForm)
            this.displayForm = false;
        else
            this.displayForm = true;
    };
    MtMaterialGroupComponent.prototype.formatDate = function (data) {
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
    MtMaterialGroupComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    MtMaterialGroupComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    MtMaterialGroupComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], MtMaterialGroupComponent.prototype, "table", void 0);
    MtMaterialGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mt-material-group',
            template: __webpack_require__(/*! ./mt-material-group.component.html */ "./src/app/masters/paas-masters/mt-material-group/mt-material-group.component.html"),
            styles: [__webpack_require__(/*! ./mt-material-group.component.scss */ "./src/app/masters/paas-masters/mt-material-group/mt-material-group.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MtMaterialGroupComponent);
    return MtMaterialGroupComponent;
}());



/***/ }),

/***/ "./src/app/masters/paas-masters/mt-material-group/mt-material-group.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-material-group/mt-material-group.module.ts ***!
  \************************************************************************************/
/*! exports provided: MtMaterialGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtMaterialGroupModule", function() { return MtMaterialGroupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mt_material_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mt-material-group.component */ "./src/app/masters/paas-masters/mt-material-group/mt-material-group.component.ts");
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
    { path: '', component: _mt_material_group_component__WEBPACK_IMPORTED_MODULE_2__["MtMaterialGroupComponent"] }
];
var MtMaterialGroupModule = /** @class */ (function () {
    function MtMaterialGroupModule() {
    }
    MtMaterialGroupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [_mt_material_group_component__WEBPACK_IMPORTED_MODULE_2__["MtMaterialGroupComponent"]]
        })
    ], MtMaterialGroupModule);
    return MtMaterialGroupModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-paas-masters-mt-material-group-mt-material-group-module.js.map