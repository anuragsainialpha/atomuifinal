(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fgs-operations-create-indent-excel-upload-create-indent-module"],{

/***/ "./src/app/fgs-operations/create-indent-excel-upload/create-indent-excel-upload.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/fgs-operations/create-indent-excel-upload/create-indent-excel-upload.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    <b>Create Indent > Upload Indent</b>\n  </h6>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"create-plan\">\n        <div class=\"uploadfile\">\n          <img src=\"./assets/images/Upload.png\" alt=\"upload image\" class=\"img-fluid\" />\n          <h5>\n            <label for=\"plan-file\">\n              <u>Click here</u> to Upload Files</label>\n          </h5>\n          <input type=\"file\" (change)=\"onFileChange($event)\" value=\"\" id=\"plan-file\" accept=\".xls,.xlsx\" (click)=\"itemsImportInput.value = null\"\n            #itemsImportInput />\n          <a download href=\"./assets/excel/Indent_template.xlsx\">\n            <p>Download Indent Template</p>\n          </a>\n          <div class=\"error-log\" *ngIf=\"IsErrorLog\">\n            <mat-card>\n              <mat-list role=\"list\">\n                <mat-list-item *ngFor=\"let data of ErrorData\">{{data}}</mat-list-item>\n\n              </mat-list>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<!--  Freight Availble or Not Show Modal After creation of Indent -->\n<!-- The Modal -->\n<div class=\"modal\" id=\"freightModal\" data-keyboard=\"false\" data-backdrop=\"static\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n  \n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title text-center\">Message !!</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n  \n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <p class=\"text-primary text-center \">{{responseData}}</p>\n        </div>\n  \n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n  \n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/fgs-operations/create-indent-excel-upload/create-indent-excel-upload.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/fgs-operations/create-indent-excel-upload/create-indent-excel-upload.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#freightModal p {\n  word-break: break-all !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmdzLW9wZXJhdGlvbnMvY3JlYXRlLWluZGVudC1leGNlbC11cGxvYWQvQzpcXFVzZXJzXFxBYmhleVNvb2RcXE9uZURyaXZlIC0gQWNjZWxhbHBoYSBTb2Z0d2FyZSBQdnQuIEx0ZFxcRGVza3RvcFxcYXRvbSBhcG9sbG9cXEFwb2xsb1xcTmV3LSBBbnVyYWdcXGF0b20tdWkvc3JjXFxhcHBcXGZncy1vcGVyYXRpb25zXFxjcmVhdGUtaW5kZW50LWV4Y2VsLXVwbG9hZFxcY3JlYXRlLWluZGVudC1leGNlbC11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zncy1vcGVyYXRpb25zL2NyZWF0ZS1pbmRlbnQtZXhjZWwtdXBsb2FkL2NyZWF0ZS1pbmRlbnQtZXhjZWwtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZyZWlnaHRNb2RhbCBwe1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/fgs-operations/create-indent-excel-upload/create-indent-excel-upload.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/fgs-operations/create-indent-excel-upload/create-indent-excel-upload.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CreateIndentExcelUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIndentExcelUploadComponent", function() { return CreateIndentExcelUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
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






var CreateIndentExcelUploadComponent = /** @class */ (function () {
    function CreateIndentExcelUploadComponent(router, acitvatedRoute, toastr, service, dialog) {
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
    }
    CreateIndentExcelUploadComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "fgs-indents");
    };
    CreateIndentExcelUploadComponent.prototype.onFileChange = function (event) {
        var _this = this;
        this.isLoading = true;
        this.IsErrorLog = false;
        this.file = event.target.files[0];
        var excelIndentsList = [];
        if ((this.file['type'] == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || (this.file['type'] == 'application/vnd.ms-excel')) {
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
                // console.log(XLSX.utils.sheet_to_json(worksheet, { raw: false }));
                excelIndentsList = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(worksheet, { dateNF: "DD/MM/YYYY", raw: false });
                var postData = {
                    indents: excelIndentsList
                };
                var ValidData = true;
                excelIndentsList.forEach(function (item) {
                    item.Count = Number(item.Count);
                    if (isNaN(item.Count) || (item.Count <= 0)) {
                        ValidData = false;
                    }
                });
                console.log("importedItemFileList", excelIndentsList);
                if (ValidData) {
                    _this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.manualIndent, postData).subscribe(function (response) {
                        if (response['statusCode'] == 200) {
                            _this.responseData = response['data'];
                            // If freight no availble we will show modal otherwise not showing
                            if (_this.responseData) {
                                $('#freightModal').modal('show');
                            }
                            _this.isLoading = false;
                            _this.toastr.success(response['message']);
                            console.log("resposne", _this.responseData);
                        }
                        else {
                            _this.isLoading = false;
                            _this.ErrorData = response['data'];
                            _this.IsErrorLog = true;
                        }
                    }, function (err) {
                        console.log("Error", err);
                        _this.toastr.error("Something went wrong..", "Error!");
                        _this.isLoading = false;
                    });
                }
                else {
                    _this.isLoading = false;
                    _this.toastr.error('Please enter only Numbers/Non Zeros/Non Negative values for Count');
                }
                console.log(JSON.stringify(postData));
            };
            fileReader_1.readAsArrayBuffer(this.file);
        }
        else {
            this.isLoading = false;
            this.toastr.error("upload only Xlsx files ..", "Error!");
        }
    };
    CreateIndentExcelUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-indent-excel-upload',
            template: __webpack_require__(/*! ./create-indent-excel-upload.component.html */ "./src/app/fgs-operations/create-indent-excel-upload/create-indent-excel-upload.component.html"),
            styles: [__webpack_require__(/*! ./create-indent-excel-upload.component.scss */ "./src/app/fgs-operations/create-indent-excel-upload/create-indent-excel-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], CreateIndentExcelUploadComponent);
    return CreateIndentExcelUploadComponent;
}());



/***/ }),

/***/ "./src/app/fgs-operations/create-indent-excel-upload/create-indent.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/fgs-operations/create-indent-excel-upload/create-indent.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CreateIndentExcelUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIndentExcelUpload", function() { return CreateIndentExcelUpload; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _create_indent_excel_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-indent-excel-upload.component */ "./src/app/fgs-operations/create-indent-excel-upload/create-indent-excel-upload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _create_indent_excel_upload_component__WEBPACK_IMPORTED_MODULE_7__["CreateIndentExcelUploadComponent"] },
];
var CreateIndentExcelUpload = /** @class */ (function () {
    function CreateIndentExcelUpload() {
    }
    CreateIndentExcelUpload = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["customMaterialModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"]
            ],
            declarations: [
                _create_indent_excel_upload_component__WEBPACK_IMPORTED_MODULE_7__["CreateIndentExcelUploadComponent"]
            ],
            entryComponents: []
        })
    ], CreateIndentExcelUpload);
    return CreateIndentExcelUpload;
}());



/***/ })

}]);
//# sourceMappingURL=fgs-operations-create-indent-excel-upload-create-indent-module.js.map