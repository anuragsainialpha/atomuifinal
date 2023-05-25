(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planner-create-plan-create-plan-module"],{

/***/ "./src/app/planner/create-plan/create-plan.component.html":
/*!****************************************************************!*\
  !*** ./src/app/planner/create-plan/create-plan.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    <b>Create Plan > Upload Plan</b>\n  </h6>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"create-plan\">\n        <div class=\"uploadfile\">\n          <img src=\"./assets/images/Upload.png\" alt=\"upload image\" class=\"img-fluid\" />\n          <h5>\n            <label for=\"plan-file\">\n              <u>Click here</u> to Upload Files</label>\n          </h5>\n          <input type=\"file\" (change)=\"onFileChange($event)\" value=\"\" id=\"plan-file\" accept=\".xls,.xlsx\" (click)=\"itemsImportInput.value = null\"\n            #itemsImportInput/>\n          <a download href=\"./assets/excel/Plan_template.xlsx\">\n            <p>Download Dispatch Plan Template</p>\n          </a>\n          <div class=\"error-log\" *ngIf=\"IsErrorLog\">\n            <mat-card>\n              <mat-list role=\"list\">\n                <mat-list-item *ngFor=\"let data of ErrorData\">{{data}}</mat-list-item>\n              </mat-list>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/planner/create-plan/create-plan.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/planner/create-plan/create-plan.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW5uZXIvY3JlYXRlLXBsYW4vY3JlYXRlLXBsYW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/planner/create-plan/create-plan.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/planner/create-plan/create-plan.component.ts ***!
  \**************************************************************/
/*! exports provided: CreatePlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlanComponent", function() { return CreatePlanComponent; });
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






var CreatePlanComponent = /** @class */ (function () {
    function CreatePlanComponent(router, acitvatedRoute, toastr, service, dialog) {
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
    CreatePlanComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "create-plan");
    };
    CreatePlanComponent.prototype.onFileChange = function (event) {
        var _this = this;
        this.IsErrorLog = false;
        this.isLoading = true;
        this.file = event.target.files[0];
        var importedItemFileList = [];
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
                importedItemFileList = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(worksheet, { dateNF: "DD/MM/YYYY", raw: false });
                var plannerData = {
                    planItems: importedItemFileList
                };
                var ValidData = true;
                importedItemFileList.forEach(function (item) {
                    item.Quantity = Number(item.Quantity);
                    item.Priority = (item.Priority) ? (Number(item.Priority)) : '';
                    // For Quantity validation 
                    if (isNaN(item.Quantity) || (item.Quantity <= 0)) {
                        ValidData = false;
                    }
                    // For priority validation , priority not mandatory fileld that logic small diff from quantity validation
                    if ((item.Priority) || (item.Priority === 0)) {
                        if (isNaN(item.Priority) || (item.Priority <= 0)) {
                            ValidData = false;
                        }
                    }
                });
                console.log("importedItemFileList", importedItemFileList);
                if (ValidData) {
                    _this.service.post_service(_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"].apisList.plannerService, plannerData).subscribe(function (response) {
                        if (response['statusCode'] == 200) {
                            _this.responseData = response['data'];
                            _this.planId = _this.responseData['planId'];
                            _this.router.navigateByUrl('/plan/pending-plans/view-plan/' + _this.planId);
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
                    _this.toastr.error("Plese enter only Number / Non Zeros / Non Negative values for Quantity and Priority");
                }
                console.log("planndata", JSON.stringify(plannerData));
            };
            fileReader_1.readAsArrayBuffer(this.file);
        }
        else {
            this.isLoading = false;
            this.toastr.error("upload only Xlsx files ..", "Error!");
        }
    };
    CreatePlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-plan',
            template: __webpack_require__(/*! ./create-plan.component.html */ "./src/app/planner/create-plan/create-plan.component.html"),
            styles: [__webpack_require__(/*! ./create-plan.component.scss */ "./src/app/planner/create-plan/create-plan.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], CreatePlanComponent);
    return CreatePlanComponent;
}());



/***/ }),

/***/ "./src/app/planner/create-plan/create-plan.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/planner/create-plan/create-plan.module.ts ***!
  \***********************************************************/
/*! exports provided: CreatePlanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlanModule", function() { return CreatePlanModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_plan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-plan.component */ "./src/app/planner/create-plan/create-plan.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_guard_planner_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth-guard/planner-auth-guard.service */ "./src/app/services/auth-guard/planner-auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _create_plan_component__WEBPACK_IMPORTED_MODULE_3__["CreatePlanComponent"] },
];
var CreatePlanModule = /** @class */ (function () {
    function CreatePlanModule() {
    }
    CreatePlanModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            declarations: [
                _create_plan_component__WEBPACK_IMPORTED_MODULE_3__["CreatePlanComponent"],
            ],
            entryComponents: [
                // FileUploadErrorsDialogComponent,
                _create_plan_component__WEBPACK_IMPORTED_MODULE_3__["CreatePlanComponent"]
            ],
            providers: [
                _services_auth_guard_planner_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["PlannerAuthGuardService"]
            ],
        })
    ], CreatePlanModule);
    return CreatePlanModule;
}());



/***/ })

}]);
//# sourceMappingURL=planner-create-plan-create-plan-module.js.map