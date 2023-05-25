(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gate-security-share-truck-share-truck-module"],{

/***/ "./src/app/gate-security/share-truck/share-truck.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/gate-security/share-truck/share-truck.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"isLoading\"></app-loader>\n\n<div class=\"container-fluid\">\n  <h6 class=\"manulal-plan-header\">\n    <span>\n      Truck Status > Shared Truck\n    </span>\n  </h6>\n\n  <div class=\"clearfix\"></div>\n\n  <ngx-datatable class='material' #table [rows]='shareedTrucksData' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"30\"\n    [rowHeight]=\"'auto'\" [limit]=\"page.limit\" [count]=\"page.count\" [offset]=\"page.offset\" [scrollbarH]=\"true\" (page)=\"datatablePageData($event)\">\n    <ngx-datatable-column name=\"Shipment Id\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"shipmentId\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.shipmentId}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Order Type\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"type\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.type}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Truck Number\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckNumber\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckNumber}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column *ngIf=\"((service.checkRole() != userRoles.JIT_OPERATION))\" name=\"Container Number\" [width]=\"200\"\n      [resizeable]=\"false\" [sortable]=\"true\" prop=\"containerNum\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.containerNum}}\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- <ngx-datatable-column *ngIf=\"((service.checkRole() != userRoles.JIT_OPERATION))\" name=\"Container Number\" [width]=\"200\"\n      [resizeable]=\"false\" [sortable]=\"true\" prop=\"containerNum\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.containerNum}}\n      </ng-template>\n    </ngx-datatable-column> -->\n    <ngx-datatable-column *ngIf=\"((service.checkRole() == userRoles.JIT_OPERATION))\" name=\"Truck Type\" [width]=\"200\"\n      [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckType\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckType}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column *ngIf=\"((service.checkRole() != userRoles.JIT_OPERATION))\" name=\"Truck/Container Type\"\n      [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckType\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.truckType}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Actual Truck Type\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckType\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.actualTruckType}}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Variant1\" [width]=\"200\" [resizeable]=\"false\" [sortable]=\"true\" prop=\"truckType\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        {{row.variant1}}\n      </ng-template>\n    </ngx-datatable-column>\n    <!-- This page we are giving access the DP_REP role that Why this column not visible for DP_REP role -->\n    <ng-container *ngIf=\"(ROLE_DP_REP !== 'DP_REP')\">\n        <ngx-datatable-column name=\"Actions\" [width]=\"150\" [resizeable]=\"false\" [sortable]=\"false\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              <button mat-raised-button color=\"primary\" class=\"table-btn\" (click)=\"shareTruck(row)\" [disabled] = \"(row.allowCreateLS == false)\" >\n                {{ (row.allowCreateLS == true) ? 'Create Loadslip' : 'Truck Not Gated In'}}\n              </button>\n            </ng-template>\n          </ngx-datatable-column>\n    </ng-container>\n    <!-- Footer Template starts -->\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedCount\">\n            {{selectedCount.toLocaleString()}} Selected |\n          </span>\n          Showing {{(offset * pageSize)+1}} to {{(rowCount>\n          (curPage*pageSize))?(curPage*pageSize):(rowCount)}} of\n          {{(rowCount)}} records.\n        </div>\n        <datatable-pager [pagerLeftArrowIcon]=\"'datatable-icon-left'\" [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n          [pagerPreviousIcon]=\"'datatable-icon-prev'\" [pagerNextIcon]=\"'datatable-icon-skip'\" [page]=\"curPage\"\n          [size]=\"pageSize\" [count]=\"rowCount\" [hidden]=\"!((rowCount / pageSize) > 1)\"\n          (change)=\"table.onFooterPage($event)\">\n        </datatable-pager>\n      </ng-template>\n    </ngx-datatable-footer>\n    <!-- Footer Template Ends -->\n  </ngx-datatable>\n</div>"

/***/ }),

/***/ "./src/app/gate-security/share-truck/share-truck.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/gate-security/share-truck/share-truck.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhdGUtc2VjdXJpdHkvc2hhcmUtdHJ1Y2svc2hhcmUtdHJ1Y2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/gate-security/share-truck/share-truck.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/gate-security/share-truck/share-truck.component.ts ***!
  \********************************************************************/
/*! exports provided: ShareTruckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareTruckComponent", function() { return ShareTruckComponent; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/apiservice.service */ "./src/app/services/api/apiservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShareTruckComponent = /** @class */ (function () {
    function ShareTruckComponent(service, toastr, router, ActivatedRoute) {
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.ActivatedRoute = ActivatedRoute;
        this.page = {
            limit: 10,
            count: 0,
            offset: 0,
            orderBy: 'myColumn1',
            orderDir: 'desc',
            pageSize: 10
        };
        this.isLoading = false;
        this.shareedTrucksData = [];
    }
    ShareTruckComponent.prototype.ngOnInit = function () {
        localStorage.setItem("userMenu", "fgs-truck-status");
        this.userRoles = _constants__WEBPACK_IMPORTED_MODULE_0__["constants"].roles;
        this.getSharedTrucks();
        this.ROLE_DP_REP = this.service.checkRole();
    };
    //get ALl the Trucks which are shared with this plant
    ShareTruckComponent.prototype.getSharedTrucks = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get_service(src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"].apisList.getShareTrcuks).subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.shareedTrucksData = response['data'];
                _this.shareedTrucksData = _this.shareedTrucksData.slice();
                _this.isLoading = false;
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
    // Server side pagination
    ShareTruckComponent.prototype.datatablePageData = function (data) {
    };
    ShareTruckComponent.prototype.onFooterPage = function (pageInfo) {
        console.log(pageInfo);
    };
    ShareTruckComponent.prototype.shareTruck = function (shareTruckData) {
        var shipmentId = shareTruckData.shipmentId;
        var type = shareTruckData.type;
        if (type == 'FGS_EXP') {
            this.router.navigate(['/fgs/create-load-slip-for-export'], { queryParams: { shipmentNumber: shipmentId } });
        }
        else if (type == 'JIT_OEM') {
            this.router.navigate(['/jit/create-load-slip-for-jit'], { queryParams: { shipmentNumber: shipmentId, isShareTruck: 'true' } });
        }
        else {
            this.router.navigate(['/fgs/create-load-slip'], { queryParams: { shipmentNumber: shipmentId } });
        }
    };
    ShareTruckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-share-truck',
            template: __webpack_require__(/*! ./share-truck.component.html */ "./src/app/gate-security/share-truck/share-truck.component.html"),
            styles: [__webpack_require__(/*! ./share-truck.component.scss */ "./src/app/gate-security/share-truck/share-truck.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ShareTruckComponent);
    return ShareTruckComponent;
}());



/***/ }),

/***/ "./src/app/gate-security/share-truck/share-truck.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/gate-security/share-truck/share-truck.module.ts ***!
  \*****************************************************************/
/*! exports provided: shareTruckModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareTruckModule", function() { return shareTruckModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-material */ "./src/app/angular-material.ts");
/* harmony import */ var _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/loader/loader-shared.module */ "./src/app/public/loader/loader-shared.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _share_truck_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./share-truck.component */ "./src/app/gate-security/share-truck/share-truck.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _share_truck_component__WEBPACK_IMPORTED_MODULE_7__["ShareTruckComponent"] },
];
var shareTruckModule = /** @class */ (function () {
    function shareTruckModule() {
    }
    shareTruckModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["customMaterialModule"],
                _public_loader_loader_shared_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"]
            ],
            declarations: [
                _share_truck_component__WEBPACK_IMPORTED_MODULE_7__["ShareTruckComponent"]
            ]
        })
    ], shareTruckModule);
    return shareTruckModule;
}());



/***/ })

}]);
//# sourceMappingURL=gate-security-share-truck-share-truck-module.js.map