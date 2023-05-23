(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-paas-masters-upload-mt-batch-codes-upload-mt-batch-codes-module"],{

/***/ "./src/app/masters/paas-masters/upload-mt-batch-codes/upload-mt-batch-codes.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/upload-mt-batch-codes/upload-mt-batch-codes.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  create-freight works!\n</p> -->\n<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n      <b>PaaS Masters &gt;</b><a class=\"\" [routerLink]=\"['/admin/paas-masters/mt-batch-codes']\">Batch Codes</a>\n  </h6>\n</div>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-1\"></div>\n    <div class=\"col-md-8\">\n      <div class=\"create-freight \">\n        <div class=\"uploadfile create-freight\">\n          <img src=\"./assets/images/Upload.png\" alt=\"upload image\" class=\"img-fluid\" />\n          <h5>\n            <label for=\"plan-file\">\n              <u>Click here</u> to Upload Files</label>\n          </h5>\n          <input type=\"file\" (change)=\"onFileChange($event)\" value=\"\" id=\"plan-file\" accept=\".xls,.xlsx\" (click)=\"itemsImportInput.value = null\"\n            #itemsImportInput/>\n          <a download href=\"./assets/excel/BatchCodes_template.xlsx\">\n            <p>Download Batch Codes Template</p>\n          </a>\n          <h5 class=\"color-green\" *ngIf=\"gotResponse\">Uploaded Total Records {{totalRecords}} </h5>\n        </div>\n        </div>\n    </div>\n  </div>\n</div>\n\n  <div class=\"clearfix\"></div>\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n            <div class=\"error-log\" *ngIf=\"IsErrorLog\">\n             \n              <mat-card>\n                  <br>\n                <h5 class=\"error-log\">Total Error Records  {{totalErrorRecords}} </h5>\n                <mat-list role=\"list\">\n                  <mat-list-item *ngFor=\"let data of ErrorData\">\n                    Error Record Id {{data.recId}}, Error Message {{data.errorMessage}}</mat-list-item>\n                </mat-list>\n            \n              </mat-card>\n            </div>\n            </div>\n\n       \n          </div>\n        </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/masters/paas-masters/upload-mt-batch-codes/upload-mt-batch-codes.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/upload-mt-batch-codes/upload-mt-batch-codes.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvcGFhcy1tYXN0ZXJzL3VwbG9hZC1tdC1iYXRjaC1jb2Rlcy91cGxvYWQtbXQtYmF0Y2gtY29kZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/masters/paas-masters/upload-mt-batch-codes/upload-mt-batch-codes.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/upload-mt-batch-codes/upload-mt-batch-codes.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: UploadMtBatchCodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadMtBatchCodesComponent", function() { return UploadMtBatchCodesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UploadMtBatchCodesComponent = /** @class */ (function () {
    function UploadMtBatchCodesComponent(router, acitvatedRoute, toastr, service, dialog) {
        this.router = router;
        this.acitvatedRoute = acitvatedRoute;
        this.toastr = toastr;
        this.service = service;
        this.dialog = dialog;
        this.isLoading = false;
        this.responseData = '';
        this.planData = '';
        this.data = [];
        this.IsErrorLog = false;
        this.gotResponse = false;
    }
    UploadMtBatchCodesComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "create-freight");
    };
    UploadMtBatchCodesComponent.prototype.onFileChange = function (event) {
        var _this = this;
        // this.ErrorData="";
        this.gotResponse = false;
        this.IsErrorLog = false;
        this.isLoading = true;
        this.file = event.target.files[0];
        var importedItemFileList = [];
        if (this.file['type'] == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            var fileReader_1 = new FileReader();
            fileReader_1.onload = function (e) {
                _this.arrayBuffer = fileReader_1.result;
                var data = new Uint8Array(_this.arrayBuffer);
                var arr = new Array();
                for (var i = 0; i != data.length; ++i)
                    arr[i] = String.fromCharCode(data[i]);
                var bstr = arr.join("");
                var workbook = xlsx__WEBPACK_IMPORTED_MODULE_1__["read"](bstr, { type: 'binary', cellDates: true, cellNF: false, cellText: false });
                var first_sheet_name = workbook.SheetNames[0];
                var worksheet = workbook.Sheets[first_sheet_name];
                // console.log(XLSX.utils.sheet_to_json(worksheet,{raw:false}));
                // importedItemFileList = XLSX.utils.sheet_to_json(worksheet, { dateNF: "YYYY-MM-DD" });
                importedItemFileList = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(worksheet, { dateNF: "YYYY-MM-DD", raw: false });
                if (importedItemFileList.length > 0) {
                    for (var i = 0; i < importedItemFileList.length; i++) {
                        delete importedItemFileList[i].id;
                    }
                }
                //  delete myObject.regex;
                var filedata = {
                    itemsList: importedItemFileList
                };
                console.log("importedItemFileList", importedItemFileList);
                console.log("POSTING DATA ", JSON.stringify(filedata));
                _this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.addOrUploadMtBatchCodes, filedata).subscribe(function (response) {
                    // this.planData = JSON.stringify(this.responseData);
                    console.log("resposne", response['statusCode']);
                    if (response['statusCode'] == 200) {
                        //   errorsRecords
                        _this.responseData = response['data'];
                        console.log("resposne", _this.responseData);
                        _this.planId = _this.responseData['planId'];
                        _this.toastr.success(response['message']);
                        _this.ErrorData = _this.responseData['errorsRecords'];
                        _this.totalRecords = _this.responseData['totalRecords'];
                        console.log("totalRecords " + _this.totalRecords);
                        _this.gotResponse = true;
                        if (_this.ErrorData != undefined && _this.ErrorData.length > 0) {
                            _this.totalErrorRecords = _this.ErrorData.length;
                            console.log("ErrorData " + _this.ErrorData.length);
                            _this.IsErrorLog = true;
                        }
                        _this.isLoading = false;
                    }
                    else {
                        _this.isLoading = false;
                        //this.openDialog(response['data'])
                        _this.ErrorData = response['data'];
                        _this.IsErrorLog = true;
                    }
                }, function (err) {
                    console.log("Error", err);
                    _this.toastr.error("Something went wrong..", "Error!");
                    _this.isLoading = false;
                });
                // console.log("freightData", JSON.stringify(freightData));
            };
            fileReader_1.readAsArrayBuffer(this.file);
        }
        else {
            this.isLoading = false;
            this.toastr.error("upload only Xlsx files ..", "Error!");
        }
    };
    UploadMtBatchCodesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-mt-batch-codes',
            template: __webpack_require__(/*! ./upload-mt-batch-codes.component.html */ "./src/app/masters/paas-masters/upload-mt-batch-codes/upload-mt-batch-codes.component.html"),
            styles: [__webpack_require__(/*! ./upload-mt-batch-codes.component.scss */ "./src/app/masters/paas-masters/upload-mt-batch-codes/upload-mt-batch-codes.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], UploadMtBatchCodesComponent);
    return UploadMtBatchCodesComponent;
}());



/***/ }),

/***/ "./src/app/masters/paas-masters/upload-mt-batch-codes/upload-mt-batch-codes.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/masters/paas-masters/upload-mt-batch-codes/upload-mt-batch-codes.module.ts ***!
  \********************************************************************************************/
/*! exports provided: UploadMtBatchCodesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadMtBatchCodesModule", function() { return UploadMtBatchCodesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _upload_mt_batch_codes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-mt-batch-codes.component */ "./src/app/masters/paas-masters/upload-mt-batch-codes/upload-mt-batch-codes.component.ts");
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
    { path: '', component: _upload_mt_batch_codes_component__WEBPACK_IMPORTED_MODULE_2__["UploadMtBatchCodesComponent"] }
];
var UploadMtBatchCodesModule = /** @class */ (function () {
    function UploadMtBatchCodesModule() {
    }
    UploadMtBatchCodesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [_upload_mt_batch_codes_component__WEBPACK_IMPORTED_MODULE_2__["UploadMtBatchCodesComponent"]]
        })
    ], UploadMtBatchCodesModule);
    return UploadMtBatchCodesModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-paas-masters-upload-mt-batch-codes-upload-mt-batch-codes-module.js.map