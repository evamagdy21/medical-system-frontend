(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-hospitals-hospitals-details-hospitals-details-module"],{

/***/ "Jdsc":
/*!************************************************************************************!*\
  !*** ./src/app/components/hospitals/hospitals-details/hospitals-details.module.ts ***!
  \************************************************************************************/
/*! exports provided: HospitalsDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsDetailsModule", function() { return HospitalsDetailsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _hospitals_details_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hospitals-details-routing.module */ "delf");
/* harmony import */ var _hospitals_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hospitals-details.component */ "pj0Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class HospitalsDetailsModule {
}
HospitalsDetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HospitalsDetailsModule });
HospitalsDetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function HospitalsDetailsModule_Factory(t) { return new (t || HospitalsDetailsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _hospitals_details_routing_module__WEBPACK_IMPORTED_MODULE_1__["HospitalsDetailsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HospitalsDetailsModule, { declarations: [_hospitals_details_component__WEBPACK_IMPORTED_MODULE_2__["HospitalsDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _hospitals_details_routing_module__WEBPACK_IMPORTED_MODULE_1__["HospitalsDetailsRoutingModule"]] }); })();


/***/ }),

/***/ "PAVH":
/*!****************************************!*\
  !*** ./src/app/service/uae.service.ts ***!
  \****************************************/
/*! exports provided: UaeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UaeService", function() { return UaeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class UaeService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // node/express api
        this.Rest_API = 'https://medicalsystem.herokuapp.com/uae';
        // Rest_API: string = 'http://localhost:3000/uae';
        // http headers
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('content-Type', 'application/json');
    }
    // GET uae DATA
    getUaeData() {
        return this.httpClient.get(`${this.Rest_API}`);
    }
    // GET all hospitals DATA
    getHospitalsData() {
        return this.httpClient.get(`${this.Rest_API}/hospitals`);
    }
    // get hospitals details
    getHospitalsDetails(hospitalId) {
        return this.httpClient.get(`${this.Rest_API}/hospitals/${hospitalId}`);
    }
    // GET all insurance companies DATA
    getInsuranceData() {
        return this.httpClient.get(`${this.Rest_API}/insurance-companies`);
    }
    // get Insurance companies Details
    getInsuranceDetails(insurancelId) {
        return this.httpClient.get(`${this.Rest_API}/insurance-companies/${insurancelId}`);
    }
    // GET all pharmacies DATA
    getPharmacyeData() {
        return this.httpClient.get(`${this.Rest_API}/pharmacies`);
    }
    // get pharmacy Details
    getPharmacyDetails(pharmacyId) {
        return this.httpClient.get(`${this.Rest_API}/pharmacies/${pharmacyId}`);
    }
}
UaeService.ɵfac = function UaeService_Factory(t) { return new (t || UaeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UaeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UaeService, factory: UaeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "delf":
/*!********************************************************************************************!*\
  !*** ./src/app/components/hospitals/hospitals-details/hospitals-details-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: HospitalsDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsDetailsRoutingModule", function() { return HospitalsDetailsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _hospitals_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hospitals-details.component */ "pj0Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _hospitals_details_component__WEBPACK_IMPORTED_MODULE_1__["HospitalsDetailsComponent"] }
];
class HospitalsDetailsRoutingModule {
}
HospitalsDetailsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HospitalsDetailsRoutingModule });
HospitalsDetailsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function HospitalsDetailsRoutingModule_Factory(t) { return new (t || HospitalsDetailsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HospitalsDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "pj0Q":
/*!***************************************************************************************!*\
  !*** ./src/app/components/hospitals/hospitals-details/hospitals-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HospitalsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsDetailsComponent", function() { return HospitalsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_uae_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/uae.service */ "PAVH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HospitalsDetailsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Founded :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.hospitalDeails.hospitals_clinics.founded, "");
} }
function HospitalsDetailsComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phonee Number :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.hospitalDeails.hospitals_clinics.phone, "");
} }
function HospitalsDetailsComponent_li_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HospitalsDetailsComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Leadership :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.hospitalDeails.hospitals_clinics.leadership, "");
} }
function HospitalsDetailsComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Number Of Staff :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.hospitalDeails.hospitals_clinics.numberOfStaff, "");
} }
function HospitalsDetailsComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Number Of Beds :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.hospitalDeails.hospitals_clinics.numberOfBeds, "");
} }
function HospitalsDetailsComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Postal Code :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.hospitalDeails.hospitals_clinics.postalCode, "");
} }
function HospitalsDetailsComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Working Hours :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.hospitalDeails.hospitals_clinics.timings, "");
} }
function HospitalsDetailsComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Expertise :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.hospitalDeails.hospitals_clinics.expertise, "");
} }
class HospitalsDetailsComponent {
    constructor(activatedRoute, uaeService) {
        this.activatedRoute = activatedRoute;
        this.uaeService = uaeService;
        this.hospitalId = this.activatedRoute.snapshot.params["hospitalId"];
        this.getHospitalDetails(this.hospitalId);
    }
    ngOnInit() {
        window.scrollTo(0, 0);
    }
    getHospitalDetails(hospitalId) {
        this.uaeService.getHospitalsDetails(hospitalId).subscribe(res => {
            this.hospitalDeails = res;
            console.log(this.hospitalDeails.hospitals_clinics.name);
        });
    }
}
HospitalsDetailsComponent.ɵfac = function HospitalsDetailsComponent_Factory(t) { return new (t || HospitalsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_uae_service__WEBPACK_IMPORTED_MODULE_2__["UaeService"])); };
HospitalsDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HospitalsDetailsComponent, selectors: [["app-hospitals-details"]], decls: 51, vars: 15, consts: [[1, "container", 2, "padding-top", "12px"], [1, "row"], [1, "col-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/home"], ["routerLink", "/hospitals-clinics"], ["active", "", "aria-current", "page", 1, "breadcrumb-item"], [1, "col-lg-12", "col-md-12", "col-xl-12", "col-sm-12", "p-9"], [1, "card"], [1, "card-body", "card-body1", "text-center"], [1, "row", "card-text"], [1, "col-lg-3", "col-md-12", "col-xl-3", "col-sm-12"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "col-lg-12", "col-md-12", "col-xl-9", "col-sm-12", "text-left"], [1, "card-title"], [4, "ngIf"], [1, "title"], [1, "data"], ["target", "_blank", 1, "title", 2, "color", "white", "text-decoration-line", "underline", 3, "href"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", "role", "presentation", 4, "ngIf"], ["role", "presentation", 1, "nav-item"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], ["id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"]], template: function HospitalsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hospital &Clinics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HospitalsDetailsComponent_div_23_Template, 7, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Address :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HospitalsDetailsComponent_div_30_Template, 7, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Visit Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HospitalsDetailsComponent_li_36_Template, 3, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "More Informtion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HospitalsDetailsComponent_div_44_Template, 7, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, HospitalsDetailsComponent_div_45_Template, 7, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, HospitalsDetailsComponent_div_46_Template, 7, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, HospitalsDetailsComponent_div_47_Template, 7, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, HospitalsDetailsComponent_div_48_Template, 7, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, HospitalsDetailsComponent_div_49_Template, 7, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hospitalDeails.hospitals_clinics.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.hospitalDeails.hospitals_clinics.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hospitalDeails.hospitals_clinics.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hospitalDeails.hospitals_clinics.founded != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hospitalDeails.hospitals_clinics.address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hospitalDeails.hospitals_clinics.phone != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.hospitalDeails.hospitals_clinics.websiteLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hospitalDeails.hospitals_clinics.overview != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hospitalDeails.hospitals_clinics.overview, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hospitalDeails.hospitals_clinics.leadership != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hospitalDeails.hospitals_clinics.numberOfStaff != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hospitalDeails.hospitals_clinics.numberOfBeds != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hospitalDeails.hospitals_clinics.postalCode != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hospitalDeails.hospitals_clinics.timings != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hospitalDeails.hospitals_clinics.expertise != null);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".title[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    \r\n}\r\n.data[_ngcontent-%COMP%]{\r\n    display: inline;\r\n}\r\na[_ngcontent-%COMP%]{\r\n   text-decoration: none;\r\n   color: black;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n    background-color: #105674;\r\n    color:white;\r\n    \r\n}\r\n.tab-content[_ngcontent-%COMP%] {\r\n    border: 1px solid;\r\n    padding: inherit;\r\n    border-color: #dee2e6 #dee2e6 #fff;\r\n    border-bottom: 1px solid  #dee2e6;\r\n}\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvc3BpdGFscy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0dBQ0cscUJBQXFCO0dBQ3JCLFlBQVk7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6Imhvc3BpdGFscy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBcclxufVxyXG4uZGF0YXtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5he1xyXG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwNTY3NDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgXHJcbn1cclxuLnRhYi1jb250ZW50IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZzogaW5oZXJpdDtcclxuICAgIGJvcmRlci1jb2xvcjogI2RlZTJlNiAjZGVlMmU2ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgICNkZWUyZTY7XHJcbn1cclxuLmNhcmQtaW1nLXRvcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=components-hospitals-hospitals-details-hospitals-details-module.js.map