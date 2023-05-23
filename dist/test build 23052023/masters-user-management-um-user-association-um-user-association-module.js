(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-user-management-um-user-association-um-user-association-module"],{

/***/ "./src/app/masters/user-management/um-user-association/um-user-association.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/masters/user-management/um-user-association/um-user-association.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n      <b> User Management &gt; User Association</b>\n    <span class=\"pull-right refresh-span\">\n        <button class=\"theme-small-button\" (click)=\"displayAddForm()\" matTooltip=\"Add\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          </button>\n      <!-- <button class=\"theme-small-button\" (git sclick)=\"upload()\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n\n\n\n<div class=\"mt-item-fields\" *ngIf=\"isShow\">\n  <div class=\"col-md-12 row\">\n    <div class=\"col-md-12 padding-right-40\">\n      <div class=\"row\">\n\n            <div class=\"col-md-2\">\n                <mat-form-field>\n                  <input matInput placeholder=\"User Id\" [(ngModel)]=\"userId\" name=\"userId\">\n                  <!-- <mat-select placeholder=\"User Id\" [(ngModel)]=\"userId\" name=\"userId\" #prior=\"ngModel\">\n                      <mat-option *ngFor=\"let loc of userIds\" [value]=\"loc\">\n                        {{loc}}\n                      </mat-option>\n                    </mat-select> -->\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-md-2\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Association Identifier\" [(ngModel)]=\"associationIdentifier\" name=\"associationIdentifier\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-md-2\">\n                  <mat-form-field>\n                    <input matInput placeholder=\"Serprov\" [(ngModel)]=\"associationValue\" name=\"associationValue\">\n                    <!-- <mat-select placeholder=\"Servprov\" [(ngModel)]=\"associationValue\" name=\"associationValue\" #prior=\"ngModel\">\n                        <mat-option *ngFor=\"let loc of servProsArray\" [value]=\"loc\">\n                          {{loc}}\n                        </mat-option>\n                      </mat-select> -->\n                  </mat-form-field>\n              </div>\n      </div>\n    </div>\n   \n    <div class=\"pull-right\">\n      <div class=\"search-fileds\">\n        <button class=\"theme-small-button\" (click)=\"doSubmitSearch()\" matTooltip=\"Search\">\n          <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n  <div class=\"mt-item-table\">\n      <!-- <ngx-datatable class='material' #table [rows]='responseItemsList'\n       [scrollbarH]=\"false\" [externalPaging]=\"true\" (page)=\"datatablePageData($event)\"\n        [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\" [offset]=\"page.offset\"> -->\n        <ngx-datatable class='material' #table [rows]='responseItemsList' [columnMode]=\"'force'\" [headerHeight]=\"50\"\n        [scrollbarH]=\"false\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [externalPaging]=\"true\" [limit]=\"page.limit\"\n        [count]=\"page.count\" [offset]=\"page.offset\" (page)=\"datatablePageData($event)\">\n        <ngx-datatable-column name=\"User Id\" [width]=\"230\" [resizeable]=\"false\" prop=\"userId\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.userId}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Association Identifier\" [width]=\"250\" [resizeable]=\"false\" prop=\"associationIdentifier\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.associationIdentifier}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Servprov\" [width]=\"205\" [resizeable]=\"false\" prop=\"associationValue\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.associationValue}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Insert User\" [width]=\"130\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.insertUser}}\n            </ng-template>\n          </ngx-datatable-column>\n        <ngx-datatable-column name=\"Insert Date\" [width]=\"130\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{trimDate(row.insertDate)}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Update User\" [width]=\"130\" [resizeable]=\"false\" prop=\"updateUser\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.updateUser}}\n            </ng-template>\n          </ngx-datatable-column>\n        <ngx-datatable-column name=\"Update Date\" [width]=\"130\" [resizeable]=\"false\" prop=\"updateDate\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{trimDate(row.updateDate)}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Action\" [width]=\"130\" [resizeable]=\"false\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n            <button class=\"theme-small-button btn\" matTooltip=\"Modify Item\" (click)=\"showUpdateModel(row)\" [disabled]=\"(row.isError)\">\n              <i class=\"fa fa-edit fa-2x\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n        </ngx-datatable-column>\n           <!-- Footer Template starts -->\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected |\n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n            [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n  \n      </ngx-datatable>\n  </div>\n  </div>\n\n\n\n\n\n\n  <!-- <div class=\"form-group\">\n            <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n              <input matInput placeholder=\"User Id\" aria-label=\"State\" [(ngModel)]=\"userIdu\" name=\"userIdu\"\n                required autocomplete=\"off\">\n              <mat-error *ngIf=\"(f.submitted && userIdu.invalid)\">\n                <p *ngIf=\"userIdu.errors.required\">User Id is <strong>required</strong>\n                </p>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"form-group\">\n            <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n              <input matInput placeholder=\"Association Identifier\" aria-label=\"State\" [(ngModel)]=\"associationIdentifieru\" name=\"associationIdentifieru\"\n                required autocomplete=\"off\">\n              <mat-error *ngIf=\"(f.submitted && associationIdentifieru.invalid)\">\n                <p *ngIf=\"associationIdentifieru.errors.required\">Association Identifier is <strong>required</strong>\n                </p>\n              </mat-error>\n            </mat-form-field>\n          </div> -->\n           <!-- <input matInput placeholder=\"Association Value\" aria-label=\"State\" [(ngModel)]=\"associationValueu\" name=\"associationValueu\"\n                required autocomplete=\"off\">\n              <mat-error *ngIf=\"(f.submitted && associationValueu.invalid)\">\n                <p *ngIf=\"associationValueu.errors.required\">Association Value Value is <strong>required</strong>\n                </p>\n              </mat-error> -->\n\n<!--  -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && updateForm(f))\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title text-primary\">Update User Association</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n              <mat-select placeholder=\"Servprov\" [(ngModel)]=\"associationValueu\" name=\"associationValueu\" #prior=\"ngModel\" required>\n                  <mat-option *ngFor=\"let loc of servProsArray\" [value]=\"loc\">\n                    {{loc}}\n                  </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"(f.submitted && associationValueu.invalid)\">\n                    <p *ngIf=\"associationValueu.errors.required\">Association Value Value is <strong>required</strong>\n                    </p>\n                  </mat-error>\n                  <p class=\"mtop6\">Servprov</p>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btm-action-btn\">Update</button>\n          <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n<br><br>\n<div class=\"mt-item-fields\" *ngIf=\"displayForm\">\n<div class=\"col-md-12 text-center padding-right-40\">\n<mat-card>\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && saveForm(f))\">\n  <h4 class=\"mt-item-header text-center text-primary\">\n    <b> Add User Association</b></h4>\n  <br>\n  <div class=\"row\">\n    <!-- <div class=\"col-md-2\">\n            </div> -->\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <mat-form-field>\n\n            <mat-select placeholder=\"User Id\" [(ngModel)]=\"userIdf\" name=\"userIdf\" #prior=\"ngModel\" required>\n                <mat-option *ngFor=\"let loc of userIds\" [value]=\"loc\">\n                  {{loc}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                  <p *ngIf=\"qty.errors.required\">User Id is <strong>required</strong></p>\n                </mat-error>\n\n          <!-- <input matInput placeholder=\"User Id\" [(ngModel)]=\"userIdf\" name=\"userIdf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">User Id is <strong>required</strong></p>\n            </mat-error> -->\n\n        </mat-form-field>\n      </div>\n    </div>\n    \n    <!-- <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Association Identifier\" [(ngModel)]=\"associationIdentifierf\" name=\"associationIdentifierf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Association Identifier is <strong>required</strong></p>\n            </mat-error>\n        </mat-form-field>\n      </div>\n    </div> -->\n\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <mat-form-field>\n\n            <mat-select placeholder=\"Servprov\" [(ngModel)]=\"associationValuef\" name=\"associationValuef\" #prior=\"ngModel\" required>\n                <mat-option *ngFor=\"let loc of servProsArray\" [value]=\"loc\">\n                  {{loc}}\n                </mat-option>\n              </mat-select>\n            <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                <p *ngIf=\"qty.errors.required\">Serv Prov is <strong>required</strong></p>\n              </mat-error>\n\n\n          <!-- <input matInput placeholder=\"Serprov\" [(ngModel)]=\"associationValuef\" name=\"associationValuef\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Serprov is <strong>required</strong></p>\n            </mat-error> -->\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-1\">\n      <div class=\"form-group\">\n        <button mat-raised-button color=\"primary\" class=\"btm-action-btn\">Save</button>\n      </div>\n    </div>\n  </div>\n</form>\n</mat-card>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/masters/user-management/um-user-association/um-user-association.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/masters/user-management/um-user-association/um-user-association.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvdXNlci1tYW5hZ2VtZW50L3VtLXVzZXItYXNzb2NpYXRpb24vdW0tdXNlci1hc3NvY2lhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/masters/user-management/um-user-association/um-user-association.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/masters/user-management/um-user-association/um-user-association.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: UmUserAssociationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmUserAssociationComponent", function() { return UmUserAssociationComponent; });
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





var UmUserAssociationComponent = /** @class */ (function () {
    function UmUserAssociationComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.isLoading = false;
        this.isShow = true;
        this.userId = "";
        this.associationIdentifier = "";
        this.associationValue = "";
        this.uaId = "";
        this.userIdu = "";
        this.associationIdentifieru = "";
        this.associationValueu = "";
        this.uaIdu = "";
        this.userIdf = "";
        this.associationIdentifierf = "";
        this.associationValuef = "";
        this.oeCode = "";
        this.itemIdf = "";
        this.itemDescriptionf = "";
        this.itemCategoryf = "";
        this.batchCodef = "";
        this.valveIdf = "";
        this.itemId = "";
        this.itemDescription = "";
        this.itemCategory = "";
        this.batchCode = "";
        this.valveId = "";
        this.itemIdu = "";
        this.itemDescriptionu = "";
        this.itemCategoryu = "";
        this.batchCodeu = "";
        this.valveIdu = "";
        this.locationId = "";
        this.servprov = "";
        this.elrFlag = "";
        this.locationIdf = "";
        this.servprovf = "";
        this.elrFlagf = "";
        this.locationIdu = "";
        this.servprovu = "";
        this.elrFlagu = "";
        this.insertUser = "";
        this.insertDate = "";
        this.updateUser = "";
        this.updateDate = "";
        this.itemClassification = "";
        this.itemType = "";
        this.itemGroup = "";
        this.tte = "";
        this.loadFactor = "";
        this.effectiveDate = "";
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
        this.userIds = [];
        this.servProsArray = [];
        this.insertStatus = "";
        this.foods = [
            { value: '', viewValue: 'None' },
            { value: 'Y', viewValue: 'Y' },
            { value: 'N', viewValue: 'N' }
        ];
        this.insDate = "";
        this.insDatep = "";
        this.updDate = "";
        this.updDatep = "";
        this.blank = "     ";
        this.month_names = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
        };
    }
    UmUserAssociationComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "user-management");
        this.getUserIds();
        this.getServpros();
    };
    //show the filter
    UmUserAssociationComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    // Datatable Footer
    UmUserAssociationComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    UmUserAssociationComponent.prototype.displayAddForm = function () {
        if (this.displayForm)
            this.displayForm = false;
        else
            this.displayForm = true;
    };
    UmUserAssociationComponent.prototype.getUserIds = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getUserIdsList).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            _this.userIds = response['data'];
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    UmUserAssociationComponent.prototype.getServpros = function () {
        var _this = this;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getServPros).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            _this.servProsArray = response['data'];
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    UmUserAssociationComponent.prototype.upload = function () { };
    UmUserAssociationComponent.prototype.doSubmitSearch = function () {
        var data = {
            userId: this.userId,
            associationIdentifier: this.associationIdentifier,
            associationValue: this.associationValue,
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.doSearch(data);
    };
    UmUserAssociationComponent.prototype.doSearch = function (data) {
        var _this = this;
        console.log("submit data:  " + JSON.stringify(data));
        this.isLoading = true;
        this.responseItemsList = [];
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getUserAssociation, data).subscribe(function (response) {
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
    UmUserAssociationComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            locationId: this.locationId,
            servprov: this.servprov,
            elrFlag: this.elrFlag,
        };
        this.doSearch(bodyData);
    };
    UmUserAssociationComponent.prototype.saveForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "userId": this.userIdf,
                    //  "associationIdentifier": this.associationIdentifierf,
                    "associationIdentifier": 'SERVPROV',
                    "associationValue": this.associationValuef,
                }
            ]
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.uploadUserAssociation, data).subscribe(function (response) {
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
    UmUserAssociationComponent.prototype.showUpdateModel = function (row) {
        console.log("**********" + row.itemCategory);
        this.userIdu = row.userId,
            this.associationIdentifieru = row.associationIdentifier,
            this.associationValueu = row.associationValue,
            this.uaIdu = row.uaId,
            console.log("**********" + this.associationIdentifier);
        $("#myModal").modal('show');
    };
    UmUserAssociationComponent.prototype.updateForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "userId": this.userIdu,
                    "associationIdentifier": this.associationIdentifieru,
                    "associationValue": this.associationValueu,
                    "uaId": this.uaIdu,
                }
            ]
        };
        console.log("updateMtTruckType submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.updateUserAssociation, data).subscribe(function (response) {
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
    // export to excel file
    UmUserAssociationComponent.prototype.export = function () {
        var _this = this;
        this.isLoading = true;
        if (this.responseItemsList === undefined) {
            this.isLoading = false;
        }
        if (this.responseItemsList.length > 0) {
            var data = {
                userId: this.userId,
                associationIdentifier: this.associationIdentifier,
                associationValue: this.associationValue,
                pageLength: this.page.count
                // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
            };
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getUserAssociation, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var excelRawData = response['data'].itemsList.slice();
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        _this.insDate = _this.formatDate(excelRawData[i].insertDate);
                        _this.insDatep = _this.effectiveDate;
                        _this.updDate = _this.formatDate(excelRawData[i].updateDate);
                        _this.updDatep = _this.effectiveDate;
                        var data_1 = {
                            "UserId": excelRawData[i].userId,
                            //  "Association Identifier": excelRawData[i].associationIdentifier,
                            "Association Identifier": 'SERVPROV',
                            "Servprov": excelRawData[i].associationValue,
                            "Insert User": excelRawData[i].insertUser,
                            //  "Insert Date": excelRawData[i].insertDate,
                            "Insert Date   ": _this.insDatep + _this.blank,
                            "Update User": excelRawData[i].updateUser,
                            //  "Update Date": excelRawData[i].updateDate,
                            "Update Date   ": _this.updDatep,
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, 'User Association.xlsx');
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
    UmUserAssociationComponent.prototype.formatDate = function (data) {
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
    UmUserAssociationComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    UmUserAssociationComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    UmUserAssociationComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    // clear data
    UmUserAssociationComponent.prototype.clearAll = function () {
        this.userId = "";
        this.associationIdentifier = "";
        this.associationValue = "";
    };
    UmUserAssociationComponent.prototype.refreshData = function () {
        this.table.offset = 0;
        this.page.offset = 0;
        this.doSubmitSearch();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], UmUserAssociationComponent.prototype, "table", void 0);
    UmUserAssociationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-um-user-association',
            template: __webpack_require__(/*! ./um-user-association.component.html */ "./src/app/masters/user-management/um-user-association/um-user-association.component.html"),
            styles: [__webpack_require__(/*! ./um-user-association.component.scss */ "./src/app/masters/user-management/um-user-association/um-user-association.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], UmUserAssociationComponent);
    return UmUserAssociationComponent;
}());



/***/ }),

/***/ "./src/app/masters/user-management/um-user-association/um-user-association.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/masters/user-management/um-user-association/um-user-association.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: UmUserAssociationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmUserAssociationModule", function() { return UmUserAssociationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _um_user_association_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./um-user-association.component */ "./src/app/masters/user-management/um-user-association/um-user-association.component.ts");
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
    { path: '', component: _um_user_association_component__WEBPACK_IMPORTED_MODULE_2__["UmUserAssociationComponent"] }
];
var UmUserAssociationModule = /** @class */ (function () {
    function UmUserAssociationModule() {
    }
    UmUserAssociationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [_um_user_association_component__WEBPACK_IMPORTED_MODULE_2__["UmUserAssociationComponent"]]
        })
    ], UmUserAssociationModule);
    return UmUserAssociationModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-user-management-um-user-association-um-user-association-module.js.map