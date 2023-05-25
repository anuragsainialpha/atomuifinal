(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-paas-masters-mt-truck-mt-truck-module"],{

/***/ "./src/app/masters/paas-masters/mt-truck/mt-truck.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-truck/mt-truck.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mt-truck works!\n</p>\n"

/***/ }),

/***/ "./src/app/masters/paas-masters/mt-truck/mt-truck.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-truck/mt-truck.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcnMvcGFhcy1tYXN0ZXJzL210LXRydWNrL210LXRydWNrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/masters/paas-masters/mt-truck/mt-truck.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-truck/mt-truck.component.ts ***!
  \*********************************************************************/
/*! exports provided: MtTruckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtTruckComponent", function() { return MtTruckComponent; });
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




var MtTruckComponent = /** @class */ (function () {
    function MtTruckComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.isLoading = false;
        this.isShow = true;
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
    MtTruckComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "paas-master");
    };
    //show the filter
    MtTruckComponent.prototype.showFilter = function () {
        this.isShow = !this.isShow;
    };
    MtTruckComponent.prototype.displayAddForm = function () {
        if (this.displayForm)
            this.displayForm = false;
        else
            this.displayForm = true;
    };
    MtTruckComponent.prototype.upload = function () { };
    MtTruckComponent.prototype.doSubmitSearch = function () {
        var data = {
            locationId: this.locationId,
            servprov: this.servprov,
            elrFlag: this.elrFlag,
        };
        console.log("submit data:  " + JSON.stringify(data));
        this.doSearch(data);
    };
    MtTruckComponent.prototype.doSearch = function (data) {
        var _this = this;
        console.log("submit data:  " + JSON.stringify(data));
        this.isLoading = true;
        this.responseItemsList = [];
        this.service.post_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"].apisList.getMtElr, data).subscribe(function (response) {
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
    MtTruckComponent.prototype.datatablePageData = function (pageInfo) {
        var bodyData = {
            index: pageInfo.offset,
            locationId: this.locationId,
            servprov: this.servprov,
            elrFlag: this.elrFlag,
        };
        this.doSearch(bodyData);
    };
    MtTruckComponent.prototype.saveForm = function (form) {
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
    MtTruckComponent.prototype.showUpdateModel = function (row) {
        console.log("**********" + row.itemCategory);
        this.locationIdu = row.locationId,
            this.servprovu = row.servprov,
            this.elrFlagu = row.elrFlag,
            console.log("**********" + this.locationIdu);
        $("#myModal").modal('show');
    };
    MtTruckComponent.prototype.updateForm = function (form) {
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
    MtTruckComponent.prototype.export = function () {
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
    MtTruckComponent.prototype.formatDate = function (data) {
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
    MtTruckComponent.prototype.trimDate = function (date) {
        if (date === "" || date === undefined)
            return "";
        else
            var array = date.substring(0, 10).split("-");
        return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
    };
    MtTruckComponent.prototype.trimEmpty = function (val) {
        if (val === "" || val === undefined)
            return "";
        else {
            console.log(typeof val);
            console.log(val + "----" + val.length);
            // return val.trim();
        }
    };
    MtTruckComponent.prototype.getMonth = function (number) {
        return this.month_names[number];
    };
    // clear data
    MtTruckComponent.prototype.clearAll = function () {
        this.locationId = "";
        this.servprov = "";
        this.elrFlag = "";
    };
    MtTruckComponent.prototype.refreshData = function () {
        this.doSubmitSearch();
    };
    MtTruckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mt-truck',
            template: __webpack_require__(/*! ./mt-truck.component.html */ "./src/app/masters/paas-masters/mt-truck/mt-truck.component.html"),
            styles: [__webpack_require__(/*! ./mt-truck.component.scss */ "./src/app/masters/paas-masters/mt-truck/mt-truck.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_1__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MtTruckComponent);
    return MtTruckComponent;
}());



/***/ }),

/***/ "./src/app/masters/paas-masters/mt-truck/mt-truck.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/masters/paas-masters/mt-truck/mt-truck.module.ts ***!
  \******************************************************************/
/*! exports provided: MtTruckModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtTruckModule", function() { return MtTruckModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mt_truck_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mt-truck.component */ "./src/app/masters/paas-masters/mt-truck/mt-truck.component.ts");
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
    { path: '', component: _mt_truck_component__WEBPACK_IMPORTED_MODULE_2__["MtTruckComponent"] }
];
var MtTruckModule = /** @class */ (function () {
    function MtTruckModule() {
    }
    MtTruckModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["customMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [_mt_truck_component__WEBPACK_IMPORTED_MODULE_2__["MtTruckComponent"]]
        })
    ], MtTruckModule);
    return MtTruckModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-paas-masters-mt-truck-mt-truck-module.js.map