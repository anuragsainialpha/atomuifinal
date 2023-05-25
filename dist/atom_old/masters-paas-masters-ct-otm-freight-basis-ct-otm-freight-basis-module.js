(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-paas-masters-ct-otm-freight-basis-ct-otm-freight-basis-module"],{

/***/ "./src/app/masters/paas-masters/ct-otm-freight-basis/ct-otm-freight-basis.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/ct-otm-freight-basis/ct-otm-freight-basis.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"mt-item-header\">\n      <b> PaaS Masters &gt; Otm Freight Basis</b>\n    <span class=\"pull-right refresh-span\">\n        <button class=\"theme-small-button\" (click)=\"displayAddForm()\" matTooltip=\"Add New Valve\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          </button>\n      <!-- <button class=\"theme-small-button\" (click)=\"upload()\" matTooltip=\"Upload excel\">\n        <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n      </button> -->\n      <button class=\"theme-small-button\" (click)=\"export()\" matTooltip=\"Export to excel\">\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"refreshData()\" matTooltip=\"Refresh\">\n        <i class=\"fa fa-repeat fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"theme-small-button\" (click)=\"showFilter()\" matTooltip=\"filter\">\n        <i class=\"fa fa-filter fa-2x\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </h6>\n\n\n\n\n<div class=\"mt-item-fields\" *ngIf=\"isShow\">\n  <div class=\"col-md-12 row\">\n    <div class=\"col-md-12 padding-right-40\">\n      <div class=\"row\">\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Bbasis\" [(ngModel)]=\"basis\" name=\"basis\">\n                </mat-form-field>\n              </div>\n            </div>\n          \n      </div>\n    </div>\n   \n    <div class=\"pull-right\">\n      <div class=\"search-fileds\">\n        <button class=\"theme-small-button\" (click)=\"doSubmitSearch()\" matTooltip=\"Search\">\n          <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"theme-delete-button\" (click)=\"clearAll()\" matTooltip=\"Clear All\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n  <div class=\"mt-item-table\">\n    <div>\n      <ngx-datatable class='material' #table [rows]='responseItemsList' [scrollbarH]=\"true\" \n      [externalPaging]=\"true\" (page)=\"datatablePageData($event)\"\n        [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\" [offset]=\"page.offset\">\n        <ngx-datatable-column name=\"Basis\" [width]=\"320\" [resizeable]=\"false\" prop=\"basis\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.basis}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Description\" [width]=\"350\" [resizeable]=\"false\" prop=\"description\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.description}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"inPaas\" [width]=\"150\" [resizeable]=\"false\" prop=\"inPaas\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.inPaas}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"InOtm\" [width]=\"150\" [resizeable]=\"false\" prop=\"inOtm\" [sortable]=\"true\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.inOtm}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"OtmBasis\" [width]=\"364\" [resizeable]=\"false\" prop=\"otmBasis\" [sortable]=\"true\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.otmBasis}}p\n            </ng-template>\n          </ngx-datatable-column>\n  \n       \n  \n        <!-- <ngx-datatable-column name=\"Action\" [width]=\"120\" [resizeable]=\"false\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\">\n            <button class=\"theme-small-button btn\" matTooltip=\"Modify Item\" (click)=\"showUpdateModel(row)\" [disabled]=\"(row.isError)\">\n              <i class=\"fa fa-edit fa-2x\" aria-hidden=\"true\"></i>\n            </button>\n          </ng-template>\n        </ngx-datatable-column> -->\n  \n      </ngx-datatable>\n    </div>\n  </div>\n  </div>\n\n\n\n<!--  -->\n<div class=\"modal\" id=\"myModal\">\n<div class=\"modal-dialog\">\n<div class=\"modal-content\">\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && updateForm(f))\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title text-primary\">Update Mt Valve</h4>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n  </div>\n  <div class=\"modal-body\">\n      <div class=\"form-group\">\n          <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n            <input matInput placeholder=\"Item Category\" aria-label=\"State\" [(ngModel)]=\"itemCategoryu\" name=\"itemCategoryu\"\n              required autocomplete=\"off\">\n            <mat-error *ngIf=\"(f.submitted && itemCategoryu.invalid)\">\n              <p *ngIf=\"itemCategoryu.errors.required\">Item Category is <strong>required</strong>\n              </p>\n            </mat-error>\n          </mat-form-field>\n        </div>\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\" class=\"example-full-width\">\n        <input matInput placeholder=\"Batch Code\" aria-label=\"State\" [(ngModel)]=\"batchCodeu\" name=\"batchCodeu\"\n          required autocomplete=\"off\">\n        <mat-error *ngIf=\"(f.submitted && batchCodeu.invalid)\">\n          <p *ngIf=\"batchCodeu.errors.required\">Batch Code is\n            <strong>required</strong>\n          </p>\n        </mat-error>\n      </mat-form-field>\n    </div>\n   \n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btm-action-btn\">Update</button>\n    <button type=\"button\" mat-raised-button class=\"mat-default\" color=\"default\" data-dismiss=\"modal\">Close</button>\n  </div>\n</form>\n</div>\n</div>\n</div>\n\n\n\n<br><br>\n<div class=\"mt-item-fields\" *ngIf=\"displayForm\">\n<div class=\"col-md-12 text-center padding-right-40\">\n<mat-card>\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"(f.form.valid && saveForm(f))\">\n  <h4 class=\"mt-item-header text-center text-primary\">\n    <b> Add Mt Valve </b></h4>\n  <br>\n  <div class=\"row\">\n    <!-- <div class=\"col-md-2\">\n            </div> -->\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Item Id\" [(ngModel)]=\"itemIdf\" name=\"itemIdf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Item Id is <strong>required</strong></p>\n            </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Item Description\" [(ngModel)]=\"itemDescriptionf\" name=\"itemDescriptionf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Item Description is <strong>required</strong></p>\n            </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Item Category\" [(ngModel)]=\"itemCategoryf\" name=\"itemCategoryf\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Item Category is <strong>required</strong></p>\n            </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <input matInput placeholder=\"Batch Code\" [(ngModel)]=\"batchCodef\" name=\"batchCodef\" required #qty=\"ngModel\">\n          <mat-error *ngIf=\"(f.submitted && qty.invalid)\">\n              <p *ngIf=\"qty.errors.required\">Batch Code is <strong>required</strong></p>\n            </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col-md-1\">\n      <div class=\"form-group\">\n        <button mat-raised-button color=\"primary\" class=\"btm-action-btn\">Save</button>\n      </div>\n    </div>\n  </div>\n</form>\n</mat-card>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/masters/paas-masters/ct-otm-freight-basis/ct-otm-freight-basis.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/ct-otm-freight-basis/ct-otm-freight-basis.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvcGFhcy1tYXN0ZXJzL2N0LW90bS1mcmVpZ2h0LWJhc2lzL2N0LW90bS1mcmVpZ2h0LWJhc2lzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/masters/paas-masters/ct-otm-freight-basis/ct-otm-freight-basis.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/ct-otm-freight-basis/ct-otm-freight-basis.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CtOtmFreightBasisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtOtmFreightBasisComponent", function() { return CtOtmFreightBasisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CtOtmFreightBasisComponent = /** @class */ (function () {
    function CtOtmFreightBasisComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.isLoading = false;
        this.isShow = true;
        this.basis = "";
        this.description = "";
        this.inPaas = "";
        this.inOtm = "";
        this.otmBasis = "";
        this.salesSku = "";
        this.compQty = "";
        this.itemSeq = "";
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
    CtOtmFreightBasisComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "paas-master");
    };
    //show the filter
    CtOtmFreightBasisComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    CtOtmFreightBasisComponent.prototype.displayAddForm = function () {
        if (this.displayForm)
            this.displayForm = false;
        else
            this.displayForm = true;
    };
    CtOtmFreightBasisComponent.prototype.upload = function () { };
    CtOtmFreightBasisComponent.prototype.doSubmitSearch = function () {
        var data = {
            basis: this.basis,
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.doSearch(data);
    };
    CtOtmFreightBasisComponent.prototype.doSearch = function (data) {
        var _this = this;
        console.log("submit data:  " + JSON.stringify(data));
        this.isLoading = true;
        this.responseItemsList = [];
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getCtOtmFreightBasis, data).subscribe(function (response) {
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
    CtOtmFreightBasisComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            locationId: this.locationId,
            servprov: this.servprov,
            elrFlag: this.elrFlag,
        };
        this.doSearch(bodyData);
    };
    CtOtmFreightBasisComponent.prototype.saveForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "locationId": this.locationIdf,
                    "servprov": this.servprovf,
                    "elrFlag": this.elrFlagf,
                }
            ]
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.uploadMtElr, data).subscribe(function (response) {
            //console.log("response array string: "+JSON.stringify(response));
            _this.isLoading = false;
            _this.toastr.success(response['message']);
            form.resetForm();
        }, function (err) {
            console.log("Error", err);
            _this.toastr.error(err ? err : "Something went wrong..", "Error!");
            _this.isLoading = false;
        });
    };
    CtOtmFreightBasisComponent.prototype.showUpdateModel = function (row) {
        console.log("**********" + row.itemCategory);
        this.locationIdu = row.locationId,
            this.servprovu = row.servprov,
            this.elrFlagu = row.elrFlag,
            console.log("**********" + this.locationIdu);
        $("#myModal").modal('show');
    };
    CtOtmFreightBasisComponent.prototype.updateForm = function (form) {
        var _this = this;
        this.isLoading = true;
        var data = {
            "itemsList": [
                {
                    "locationId": this.locationIdu,
                    "servprov": this.servprovu,
                    "elrFlag": this.elrFlagu,
                }
            ]
        };
        console.log("updateMtTruckType submit data:  " + JSON.stringify(data));
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.updateMtElr, data).subscribe(function (response) {
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
    CtOtmFreightBasisComponent.prototype.export = function () {
        this.isLoading = true;
        if (this.responseItemsList === undefined) {
            this.isLoading = false;
        }
        if (this.responseItemsList.length > 0) {
            var excelRawData = this.responseItemsList.slice();
            var newExcelData = [];
            for (var i = 0; i < excelRawData.length; i++) {
                this.insDate = this.formatDate(excelRawData[i].insertDate);
                this.insDatep = this.effectiveDate;
                this.updDate = this.formatDate(excelRawData[i].updateDate);
                this.updDatep = this.effectiveDate;
                var data = {
                    "Location Id": excelRawData[i].locationId,
                    "Servprov": excelRawData[i].servprov,
                    "Elr Flag": excelRawData[i].elrFlag,
                    "Insert User": excelRawData[i].insertUser,
                    //  "Insert Date": excelRawData[i].insertDate,
                    "Insert Date   ": this.insDatep + this.blank,
                    "Update User": excelRawData[i].updateUser,
                    //  "Update Date": excelRawData[i].updateDate,
                    "Update Date   ": this.updDatep,
                };
                newExcelData.push(data);
            }
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new(); // create a new blank book
            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(newExcelData);
            xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
            xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workBook, 'Elr.xlsx');
            this.isLoading = false;
        }
        else {
            // this.toastr.error(response['message']:["Something went wrong..", "Error!"]);
            this.isLoading = false;
        }
    };
    CtOtmFreightBasisComponent.prototype.formatDate = function (data) {
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
    CtOtmFreightBasisComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    CtOtmFreightBasisComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    CtOtmFreightBasisComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    // clear data
    CtOtmFreightBasisComponent.prototype.clearAll = function () {
        this.locationId = "";
        this.servprov = "";
        this.elrFlag = "";
    };
    CtOtmFreightBasisComponent.prototype.refreshData = function () {
        this.doSubmitSearch();
    };
    CtOtmFreightBasisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ct-otm-freight-basis',
            template: __webpack_require__(/*! ./ct-otm-freight-basis.component.html */ "./src/app/masters/paas-masters/ct-otm-freight-basis/ct-otm-freight-basis.component.html"),
            styles: [__webpack_require__(/*! ./ct-otm-freight-basis.component.scss */ "./src/app/masters/paas-masters/ct-otm-freight-basis/ct-otm-freight-basis.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CtOtmFreightBasisComponent);
    return CtOtmFreightBasisComponent;
}());



/***/ }),

/***/ "./src/app/masters/paas-masters/ct-otm-freight-basis/ct-otm-freight-basis.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/ct-otm-freight-basis/ct-otm-freight-basis.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CtOtmFreightBasisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtOtmFreightBasisModule", function() { return CtOtmFreightBasisModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ct_otm_freight_basis_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ct-otm-freight-basis.component */ "./src/app/masters/paas-masters/ct-otm-freight-basis/ct-otm-freight-basis.component.ts");
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
    { path: '', component: _ct_otm_freight_basis_component__WEBPACK_IMPORTED_MODULE_2__["CtOtmFreightBasisComponent"] }
];
var CtOtmFreightBasisModule = /** @class */ (function () {
    function CtOtmFreightBasisModule() {
    }
    CtOtmFreightBasisModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [_ct_otm_freight_basis_component__WEBPACK_IMPORTED_MODULE_2__["CtOtmFreightBasisComponent"]]
        })
    ], CtOtmFreightBasisModule);
    return CtOtmFreightBasisModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-paas-masters-ct-otm-freight-basis-ct-otm-freight-basis-module.js.map