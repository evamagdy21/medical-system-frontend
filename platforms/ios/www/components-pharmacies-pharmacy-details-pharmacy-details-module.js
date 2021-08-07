(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pharmacies-pharmacy-details-pharmacy-details-module"],{

/***/ "Eo6D":
/*!**************************************************************************************!*\
  !*** ./src/app/components/pharmacies/pharmacy-details/pharmacy-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PharmacyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacyDetailsComponent", function() { return PharmacyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_uae_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/uae.service */ "PAVH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PharmacyDetailsComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phone Number :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.PharmacyDetails.pharmacies.phone, "");
} }
function PharmacyDetailsComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PharmacyDetailsComponent_li_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "More Informtion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PharmacyDetailsComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Working Hours :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.PharmacyDetails.pharmacies.timings, "");
} }
class PharmacyDetailsComponent {
    constructor(activatedRoute, uaeService) {
        this.activatedRoute = activatedRoute;
        this.uaeService = uaeService;
        this.pharmacyId = this.activatedRoute.snapshot.params["pharmacyId"];
        this.getPharmacyDetails(this.pharmacyId);
    }
    ngOnInit() {
        window.scrollTo(0, 0);
    }
    getPharmacyDetails(pharmacyId) {
        this.uaeService.getPharmacyDetails(pharmacyId).subscribe(res => {
            this.PharmacyDetails = res;
            console.log(this.PharmacyDetails.pharmacies.timings);
        });
    }
}
PharmacyDetailsComponent.ɵfac = function PharmacyDetailsComponent_Factory(t) { return new (t || PharmacyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_uae_service__WEBPACK_IMPORTED_MODULE_2__["UaeService"])); };
PharmacyDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PharmacyDetailsComponent, selectors: [["app-pharmacy-details"]], decls: 43, vars: 10, consts: [[1, "container", 2, "padding-top", "12px"], [1, "row"], [1, "col-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/home"], ["routerLink", "/pharmacies"], ["active", "", "aria-current", "page", 1, "breadcrumb-item"], [1, "col-lg-12", "col-md-12", "col-xl-12", "col-sm-12", "p-9"], [1, "card"], [1, "card-body", "card-body1", "text-center"], [1, "row", "card-text"], [1, "col-lg-3", "col-md-12", "col-xl-3", "col-sm-12"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "col-lg-12", "col-md-12", "col-xl-9", "col-sm-12", "text-left"], [1, "card-title"], [1, "title"], [1, "data"], [4, "ngIf"], ["target", "_blank", 1, "title", 2, "color", "white", "text-decoration-line", "underline", 3, "href"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", "role", "presentation", 4, "ngIf"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], ["role", "presentation", 1, "nav-item"], ["id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"]], template: function PharmacyDetailsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pharmacies ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Address :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PharmacyDetailsComponent_div_29_Template, 7, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Visit Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PharmacyDetailsComponent_li_35_Template, 3, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PharmacyDetailsComponent_li_36_Template, 3, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PharmacyDetailsComponent_div_41_Template, 7, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.PharmacyDetails.pharmacies.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.PharmacyDetails.pharmacies.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.PharmacyDetails.pharmacies.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.PharmacyDetails.pharmacies.address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PharmacyDetails.pharmacies.phone != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.PharmacyDetails.pharmacies.websiteLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PharmacyDetails.pharmacies.overview != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PharmacyDetails.pharmacies.timings != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.PharmacyDetails.pharmacies.overview, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PharmacyDetails.pharmacies.timings != null);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".title[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    \r\n}\r\n.data[_ngcontent-%COMP%]{\r\n    display: inline;\r\n}\r\na[_ngcontent-%COMP%]{\r\n   text-decoration: none;\r\n   color: black;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n    background-color: #105674;\r\n    color:white;\r\n    \r\n}\r\n.tab-content[_ngcontent-%COMP%] {\r\n    border: 1px solid;\r\n    padding: inherit;\r\n    border-color: #dee2e6 #dee2e6 #fff;\r\n    border-bottom: 1px solid  #dee2e6;\r\n}\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBoYXJtYWN5LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7R0FDRyxxQkFBcUI7R0FDckIsWUFBWTtBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoicGhhcm1hY3ktZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgXHJcbn1cclxuLmRhdGF7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuYXtcclxuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDU2NzQ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIFxyXG59XHJcbi50YWItY29udGVudCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTYgI2RlZTJlNiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICAjZGVlMmU2O1xyXG59XHJcbi5jYXJkLWltZy10b3B7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Ljc4":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/pharmacies/pharmacy-details/pharmacy-details-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: PharmacyDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacyDetailsRoutingModule", function() { return PharmacyDetailsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pharmacy_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pharmacy-details.component */ "Eo6D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _pharmacy_details_component__WEBPACK_IMPORTED_MODULE_1__["PharmacyDetailsComponent"] }
];
class PharmacyDetailsRoutingModule {
}
PharmacyDetailsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PharmacyDetailsRoutingModule });
PharmacyDetailsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function PharmacyDetailsRoutingModule_Factory(t) { return new (t || PharmacyDetailsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PharmacyDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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

/***/ "PsAW":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pharmacies/pharmacy-details/pharmacy-details.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PharmacyDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacyDetailsModule", function() { return PharmacyDetailsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pharmacy_details_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pharmacy-details-routing.module */ "Ljc4");
/* harmony import */ var _pharmacy_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pharmacy-details.component */ "Eo6D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PharmacyDetailsModule {
}
PharmacyDetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PharmacyDetailsModule });
PharmacyDetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function PharmacyDetailsModule_Factory(t) { return new (t || PharmacyDetailsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _pharmacy_details_routing_module__WEBPACK_IMPORTED_MODULE_1__["PharmacyDetailsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PharmacyDetailsModule, { declarations: [_pharmacy_details_component__WEBPACK_IMPORTED_MODULE_2__["PharmacyDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _pharmacy_details_routing_module__WEBPACK_IMPORTED_MODULE_1__["PharmacyDetailsRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=components-pharmacies-pharmacy-details-pharmacy-details-module.js.map