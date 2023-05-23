(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-paas-masters-location-scan-location-scan-module"],{

/***/ "./src/app/masters/paas-masters/location-scan/location-scan.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/masters/paas-masters/location-scan/location-scan.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n    <b> PaaS Masters &gt; Location Scan </b>\n    <span class=\"pull-right refresh-span\">\n      <!-- <button class=\"theme-small-button\" (click)=\"upload()\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"displayAddForm()\" matTooltip=\"Add New Location\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </button>\n      <!-- <button class=\"theme-small-button\" [routerLink]=\"['/admin/paas-masters/upload-location-scan']\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n\n\n\n\n \n\n\n<div class=\"mt-item-fields\" *ngIf=\"isShow\">\n<div class=\"col-md-12 row\">\n<div class=\"col-md-12 padding-right-40\">\n<div class=\"row\">\n  <div class=\"col-md-6 pd-0\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n          <mat-form-field>\n            <input matInput placeholder=\"Location Id\" [(ngModel)]=\"locationId\" name=\"locationId\">\n          </mat-form-field>\n      </div>\n      <div class=\"col-md-4\">\n          <mat-form-field>\n            <!-- <input matInput placeholder=\"Scannable\" [(ngModel)]=\"scannable\" name=\"scannable\"> -->\n            <mat-select placeholder=\"Scannable\" [(ngModel)]=\"scannable\" name=\"scannable\" #prior=\"ngModel\">\n              <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                {{food.viewValue}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n      </div>\n      <div class=\"col-md-4\">\n          <mat-form-field>\n            <input matInput placeholder=\"Item Category\" [(ngModel)]=\"itemCategory\" name=\"itemCategory\" oninput=\"this.value = this.value.toUpperCase()\">\n          </mat-form-field>\n      </div>\n    </div>\n  </div>\n  <div class='col-md-6 pd-0'>\n    <div class=\"row mg-0\">\n    </div>\n  </div>\n</div>\n</div>\n<div class=\"pull-right\">\n<div class=\"search-fileds\">\n  <button class=\"theme-small-button\" (click)=\"doSubmitSearch()\" matTooltip=\"Search\">\n    <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n  </button>\n  <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n</div>\n</div>\n</div>\n\n\n\n \n\n  <div class=\"mt-item-table\">\n    <div>\n        <!-- class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' -->\n        <!-- <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table \n        [rows]='resultDataList' [externalPaging]=\"true\"\n        (page)=\"datatablePageData($event)\" [scrollbarH]=\"true\" [headerHeight]=\"50\" \n        [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\n        [limit]=\"page.limit\" [count]=\"page.count\" [offset]=\"page.offset\"> -->\n  <ngx-datatable class='material ngx-table-custom-scroll  ngx-table-tr-custom-scroll' #table [columnMode]=\"'force'\"\n    [rows]='resultDataList' [externalPaging]=\"true\" (page)=\"datatablePageData($event)\" [scrollbarH]=\"false\"\n    [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\"\n    [offset]=\"page.offset\">\n  \n    <ngx-datatable-column name=\"Location Id\" [width]=\"100\" [resizeable]=\"false\" prop=\"locationId\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.locationId}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Scannable\" [width]=\"100\" [resizeable]=\"false\" prop=\"scannable\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.scannable}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Item Category\" [width]=\"120\" [resizeable]=\"false\" prop=\"itemCategory\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.itemCategory}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Insert User\" [width]=\"100\" [resizeable]=\"false\" prop=\"insertUser\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.insertUser}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Insert Date\" [width]=\"100\" [resizeable]=\"false\" prop=\"insertDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{formatDate(row.insertDate)}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Update User\" [width]=\"100\" [resizeable]=\"false\" prop=\"updateUser\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.updateUser}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Update Date\" [width]=\"100\" [resizeable]=\"false\" prop=\"updateDate\" [sortable]=\"true\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{trimDate(row.updateDate)}}\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- <i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"showComments(row.comments,row.loadslipId)\"></i> -->\n    <ngx-datatable-column name=\"Action\" [width]=\"80\" [resizeable]=\"false\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n        <button class=\"theme-small-button btn\" matTooltip=\"Modify Item\" (click)=\"showUpdateModel(row)\"\n          [disabled]=\"(row.isError)\">\n          <i class=\"fa fa-edit fa-2x\" aria-hidden=\"true\"></i>\n        </button>\n      </ng-template>\n    </ngx-datatable-column>\n       <!-- Footer Template starts -->\n       <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedCount\">\n              {{selectedCount.toLocaleString()}} Selected |\n            </span>\n            Showing {{(offset * pageSize)+1}} to {{(rowCount>\n            (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n            {{(rowCount)}} records.\n          </div>\n          <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n            [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\" [size]=\"pageSize\"\n            [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\" (change)=\"table.onFooterPage($event)\">\n          </datatable-pager>\n        </ng-template>\n      </ngx-datatable-footer>\n      <!-- Footer Template Ends -->\n  </ngx-datatable>\n    </div>\n  </div>\n</div>\n\n  <div class=\"modal\" id=\"myModal\"><div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form name=\"form\" #f=\"ngForm\"  (ngSubmit)=\"(f.form.valid && updateLocationScan(f))\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title text-primary\">Update Location Scan</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n              <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n                  <mat-select placeholder=\"Scannable\" [(ngModel)]=\"scannableu\" name=\"scannableu\" #prior=\"ngModel\"\n                  required>\n                  <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                    {{food.viewValue}}\n                  </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"(f.submitted && scannableu.invalid)\">\n                  <p *ngIf=\"scannableu.errors.required\">Scannableu is\n                    <strong>required</strong>\n                  </p>\n                </mat-error>\n                <p class=\"mtop6\">Scannable</p>\n              </mat-form-field>\n            </div>\n        </div>\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <!-- <button type=\"button\" class=\"btn btn-danger\" >Close</button> -->\n          <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btm-action-btn\">Update</button>\n          <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </form>\n    </div>\n  </div>\n  </div>\n  <br><br>\n\n\n\n\n\n\n\n  <!--                         \n                    <input matInput placeholder=\"Location Id\" [(ngModel)]=\"locationIdF\" name=\"locationIdF\" required\n                      #qty=\"ngModel\">\n                    <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                      <p *ngIf=\"qty.errors.required\">Location Id is\n                        <strong>required</strong>\n                      </p>\n                    </mat-error> -->\n <!-- <mat-form-field appearance=\"standard\">\n                              <mat-label>Location Id</mat-label>\n                              <input matInput aria-label=\"Location Id\" (keyup)=\"getfilterDestination($event)\" autocomplete=\"off\"\n                                [matAutocomplete]=\"statesAutocomplete\" [(ngModel)]=\"locationIdF\" name=\"locationIdF\"\n                                #locationIdF=\"ngModel\" required>\n                              <mat-autocomplete #statesAutocomplete=\"matAutocomplete\">\n                                <mat-option *ngFor=\"let list of destinationList\" [value]=\"list.value\">\n                                  <span matTooltip={{list.description}}>{{list.value}} - ({{list.description}})</span>\n                                </mat-option>\n                              </mat-autocomplete>\n                              <mat-error *ngIf=\"(f.submitted && destinationLocation.invalid)\">\n                                <p *ngIf=\"destinationLocation.errors.required\">Location Id is\n                                  <strong>required</strong>\n                                </p>\n                              </mat-error>\n                            </mat-form-field> -->\n\n\n<div class=\"mt-item-fields\" *ngIf=\"displayForm\">\n  <div class=\"col-md-12 padding-right-40\">\n    <mat-card>\n      <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && addNewLocation(f))\">\n        <h4 class=\"mt-item-header text-center text-primary\">\n          <b> Add New Location </b></h4>\n        <br>\n        <div class=\"row\">\n          <div class='col-md-1 pd-0'>\n            <div class=\"row mg-0\">\n            </div>\n          </div>\n          <div class=\"col-md-6 pd-0\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                      <mat-select placeholder=\"Location Id\" [(ngModel)]=\"locationIdF\" name=\"locationIdF\" #qty=\"ngModel\" required>\n                          <mat-option *ngFor=\"let loc of locationIds\" [value]=\"loc\">\n                            {{loc}}\n                          </mat-option>\n                        </mat-select>\n                      <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                          <p *ngIf=\"qty.errors.required\">Location Id is <strong>required</strong></p>\n                        </mat-error>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <!-- <input matInput placeholder=\"Scannable\" [(ngModel)]=\"scannableF\" name=\"scannableF\"> -->\n                    <mat-select placeholder=\"Scannable\" [(ngModel)]=\"scannableF\" name=\"scannableF\" #qty=\"ngModel\"\n                      required>\n                      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                        {{food.viewValue}}\n                      </mat-option>\n                    </mat-select>\n                    <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                        <p *ngIf=\"qty.errors.required\">Scannable is <strong>required</strong>\n                        </p>\n                      </mat-error>\n                  </mat-form-field>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class='col-md-5 pd-0'>\n            <div class=\"row mg-0\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <!-- <input matInput placeholder=\"Item Category\" [(ngModel)]=\"itemCategoryF\" name=\"itemCategoryF\"> -->\n                  <mat-form-field appearance=\"standard\">\n                    <mat-label>Item Category</mat-label>\n                    <!-- <input matInput [(ngModel)]=\"itemCategoryF\" name=\"itemCategoryF\" autocomplete=\"off\" required #qty=\"ngModel\">\n                    <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                      <p *ngIf=\"qty.errors.required\">Item Category is\n                        <strong>required</strong>\n                      </p>\n                    </mat-error> -->\n                    <mat-select placeholder=\"Item Category\" [(ngModel)]=\"itemCategoryF\" name=\"itemCategoryF\" #qty=\"ngModel\" required>\n                        <mat-option *ngFor=\"let loc of scmGroupList\" [value]=\"loc\">\n                          {{loc}}\n                        </mat-option>\n                      </mat-select>\n                    <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n                        <p *ngIf=\"qty.errors.required\">Item Category is <strong>required</strong></p>\n                      </mat-error>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <button mat-raised-button color=\"primary\" type=\"submit\" matTooltip=\"Add Location Scan\" class=\"btm-action-btn\">Save</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/masters/paas-masters/location-scan/location-scan.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/masters/paas-masters/location-scan/location-scan.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvcGFhcy1tYXN0ZXJzL2xvY2F0aW9uLXNjYW4vbG9jYXRpb24tc2Nhbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/masters/paas-masters/location-scan/location-scan.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/masters/paas-masters/location-scan/location-scan.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LocationScanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationScanComponent", function() { return LocationScanComponent; });
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





var LocationScanComponent = /** @class */ (function () {
    function LocationScanComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.isLoading = false;
        this.isShow = true;
        // salesSku1:any = "";
        // salesSku:any = "";
        // itemId:any = "";
        // compQty:any = "";
        // itemSeq:any = "";
        // oeCode:any = "";
        // itemClassification: any = "";
        // itemDescription: any = "";
        // itemType: any = "";
        // itemGroup: any = "";
        // tte: any = "";
        // loadFactor: any = "";
        // formattedDate: string;
        // 
        this.effectiveDate = "";
        this.locationId = "";
        this.scannable = "";
        this.itemCategory = "";
        this.insertUser = "";
        this.insertDate = "";
        this.updateUser = "";
        this.updateDate = "";
        this.locationIdF = "";
        this.scannableF = "";
        this.itemCategoryF = "";
        this.locationIdu = "";
        this.scannableu = "";
        this.itemCategoryu = "";
        this.displayForm = false;
        this.scannableTypesList = ['Y', 'N'];
        this.editing = {};
        this.page = {
            limit: 100,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 50
        };
        this.locationIds = [];
        this.scmGroupList = [];
        this.foods = [
            { value: 'Y', viewValue: 'Y' },
            { value: 'N', viewValue: 'N' }
        ];
        this.ApprovalEditing = {};
        this.pendingPlanList = [];
        this.insertStatus = "";
        this.insDate = "";
        this.insDatep = "";
        this.updDate = "";
        this.updDatep = "";
        this.month_names = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
        };
    }
    LocationScanComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "paas-master");
        this.getLocationIds();
        this.getScmgroupsList();
    };
    //show the filter
    LocationScanComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    // Datatable Footer
    LocationScanComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    LocationScanComponent.prototype.emptySumm = function () {
        return null;
    };
    LocationScanComponent.prototype.getLocationIds = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLocationIdsList).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            _this.locationIds = response['data'];
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    LocationScanComponent.prototype.getScmgroupsList = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getScmgroupsList).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            _this.scmGroupList = response['data'];
            _this.isLoading = false;
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    LocationScanComponent.prototype.displayAddForm = function () {
        if (this.displayForm)
            this.displayForm = false;
        else
            this.displayForm = true;
    };
    LocationScanComponent.prototype.doSubmitSearch = function () {
        var data = {
            locationId: this.locationId,
            scannable: this.scannable,
            itemCategory: this.itemCategory,
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.doSearch(data);
    };
    LocationScanComponent.prototype.doSearch = function (data) {
        var _this = this;
        this.isLoading = true;
        console.log("submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLocationScan, data).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.page.count = response['data'].total;
                _this.page.limit = response['data'].pageLength;
                _this.resultDataList = response['data'].locationScanList;
                console.log("response length: " + _this.resultDataList.length);
                console.log("response array string: " + JSON.stringify(_this.resultDataList));
                _this.isLoading = false;
            }
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong 99999", "Error!");
            _this.isLoading = false;
        });
        //this.toastr.error("Received http error 404. Please check service urlcccc")
    };
    //server side pagination
    LocationScanComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            locationId: this.locationId,
            scannable: this.scannable,
            itemCategory: this.itemCategory,
        };
        this.doSearch(bodyData);
    };
    LocationScanComponent.prototype.addNewLocation = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "locationScanList": [
                {
                    "locationId": this.locationIdF,
                    "scannable": this.scannableF,
                    "itemCategory": this.itemCategoryF
                }
            ]
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.addOrUploadLocationScan, data).subscribe(function (response) {
            // console.log("response array string: "+JSON.stringify(response));
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
    LocationScanComponent.prototype.showUpdateModel = function (row) {
        this.locationIdu = row.locationId;
        this.scannableu = row.scannable;
        this.itemCategoryu = row.itemCategory;
        $("#myModal").modal('show');
    };
    LocationScanComponent.prototype.updateLocationScan = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "locationScanList": [
                {
                    "locationId": this.locationIdu,
                    "scannable": this.scannableu,
                    "itemCategory": this.itemCategoryu
                }
            ]
        };
        console.log("updateLocationScan submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.updateLocationScan, data).subscribe(function (response) {
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
    LocationScanComponent.prototype.export = function () {
        var _this = this;
        if (this.resultDataList.length > 0) {
            this.isLoading = true;
            var data = {
                locationId: this.locationId,
                scannable: this.scannable,
                itemCategory: this.itemCategory,
                // pageLength: this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
                pageLength: this.page.count
            };
            this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getLocationScan, data).subscribe(function (response) {
                if (response['statusCode'] == 200) {
                    var excelRawData = response['data'].locationScanList.slice();
                    var newExcelData = [];
                    for (var i = 0; i < excelRawData.length; i++) {
                        _this.insDate = _this.formatDate(excelRawData[i].insertDate);
                        _this.insDatep = _this.effectiveDate;
                        _this.updDate = _this.formatDate(excelRawData[i].updateDate);
                        _this.updDatep = _this.effectiveDate;
                        var data_1 = {
                            "Location Id": excelRawData[i].locationId,
                            "Scannable": excelRawData[i].scannable,
                            "Item Category": excelRawData[i].itemCategory,
                            "Insert User": excelRawData[i].insertUser,
                            "Insert Date  ": _this.insDatep,
                            "Update User ": excelRawData[i].updateUser,
                            "Update Date ": _this.updDatep,
                        };
                        newExcelData.push(data_1);
                    }
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new(); // create a new blank book
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(newExcelData);
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
                    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, 'Location Scan.xlsx');
                    _this.isLoading = false;
                }
                else {
                    _this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
                    _this.isLoading = false;
                }
            }, function (err) {
                console.log("Error", err);
                _this.toastr.error(err ? err : "Something went wrong 99999", "Error!");
                _this.isLoading = false;
            });
        }
        else {
            this.toastr.error('No Data To Generate Excel...', 'Error!');
            this.isLoading = false;
        }
    };
    LocationScanComponent.prototype.clearAll = function () {
        this.locationId = "";
        this.scannable = "";
        this.insertUser = "";
        this.insertDate = "";
        this.updateUser = "";
        this.updateDate = "";
        this.itemCategory = "";
    };
    // Refresh data
    LocationScanComponent.prototype.refreshData = function () {
        this.isLoading = true;
        this.clearAll();
        var data = {};
        this.table.offset = 0;
        this.page.offset = 0;
        this.doSubmitSearch();
        // this.service.post_service(ApiserviceService.apisList.getMtItem, data).subscribe(response => {
        //   if (response['statusCode'] == 200) {
        //     let responseData = response['data'].mtOeBoms;
        //     this.responseItemsList = responseData;
        //     this.responseItemsList = [...this.responseItemsList]
        //     // this.page.count = response['data'].total;
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
    //UTILS  
    LocationScanComponent.prototype.formatDate = function (data) {
        if (data != null && data) {
            var formatted = new Date(data), mnth = ("0" + (formatted.getMonth() + 1)).slice(-2), day = ("0" + formatted.getDate()).slice(-2);
            this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
            this.effectiveDate = this.formattedDate;
            return this.formattedDate;
        }
        else {
            this.effectiveDate = "";
        }
    };
    LocationScanComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    LocationScanComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    LocationScanComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], LocationScanComponent.prototype, "table", void 0);
    LocationScanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location-scan',
            template: __webpack_require__(/*! ./location-scan.component.html */ "./src/app/masters/paas-masters/location-scan/location-scan.component.html"),
            styles: [__webpack_require__(/*! ./location-scan.component.scss */ "./src/app/masters/paas-masters/location-scan/location-scan.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], LocationScanComponent);
    return LocationScanComponent;
}());



/***/ }),

/***/ "./src/app/masters/paas-masters/location-scan/location-scan.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/masters/paas-masters/location-scan/location-scan.module.ts ***!
  \****************************************************************************/
/*! exports provided: LocationScanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationScanModule", function() { return LocationScanModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _location_scan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-scan.component */ "./src/app/masters/paas-masters/location-scan/location-scan.component.ts");
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
    { path: '', component: _location_scan_component__WEBPACK_IMPORTED_MODULE_2__["LocationScanComponent"] }
];
var LocationScanModule = /** @class */ (function () {
    function LocationScanModule() {
    }
    LocationScanModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [_location_scan_component__WEBPACK_IMPORTED_MODULE_2__["LocationScanComponent"]]
        })
    ], LocationScanModule);
    return LocationScanModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-paas-masters-location-scan-location-scan-module.js.map