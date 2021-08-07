(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-insurance-insurance-details-insurance-details-module"],{

/***/ "+Vkw":
/*!********************************************************************************************!*\
  !*** ./src/app/components/insurance/insurance-details/insurance-details-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: InsuranceDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceDetailsRoutingModule", function() { return InsuranceDetailsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _insurance_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insurance-details.component */ "IDC0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _insurance_details_component__WEBPACK_IMPORTED_MODULE_1__["InsuranceDetailsComponent"] }
];
class InsuranceDetailsRoutingModule {
}
InsuranceDetailsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InsuranceDetailsRoutingModule });
InsuranceDetailsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function InsuranceDetailsRoutingModule_Factory(t) { return new (t || InsuranceDetailsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InsuranceDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Bt0J":
/*!************************************************************************************!*\
  !*** ./src/app/components/insurance/insurance-details/insurance-details.module.ts ***!
  \************************************************************************************/
/*! exports provided: InsuranceDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceDetailsModule", function() { return InsuranceDetailsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _insurance_details_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insurance-details-routing.module */ "+Vkw");
/* harmony import */ var _insurance_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insurance-details.component */ "IDC0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class InsuranceDetailsModule {
}
InsuranceDetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: InsuranceDetailsModule });
InsuranceDetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function InsuranceDetailsModule_Factory(t) { return new (t || InsuranceDetailsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _insurance_details_routing_module__WEBPACK_IMPORTED_MODULE_1__["InsuranceDetailsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](InsuranceDetailsModule, { declarations: [_insurance_details_component__WEBPACK_IMPORTED_MODULE_2__["InsuranceDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _insurance_details_routing_module__WEBPACK_IMPORTED_MODULE_1__["InsuranceDetailsRoutingModule"]] }); })();


/***/ }),

/***/ "IDC0":
/*!***************************************************************************************!*\
  !*** ./src/app/components/insurance/insurance-details/insurance-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: InsuranceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceDetailsComponent", function() { return InsuranceDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_uae_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/uae.service */ "PAVH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function InsuranceDetailsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.InsuranceDetails.insurance_companies.founded, "");
} }
function InsuranceDetailsComponent_div_30_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.InsuranceDetails.insurance_companies.phone, "");
} }
function InsuranceDetailsComponent_li_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InsuranceDetailsComponent_li_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "More Informtion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InsuranceDetailsComponent_div_42_Template(rf, ctx) { if (rf & 1) {
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
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.InsuranceDetails.insurance_companies.leadership, "");
} }
function InsuranceDetailsComponent_div_43_Template(rf, ctx) { if (rf & 1) {
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
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.InsuranceDetails.insurance_companies.timings, "");
} }
class InsuranceDetailsComponent {
    constructor(activatedRoute, uaeService) {
        this.activatedRoute = activatedRoute;
        this.uaeService = uaeService;
        this.insuranceId = this.activatedRoute.snapshot.params["insuranceId"];
        this.getinsuranceDetails(this.insuranceId);
    }
    ngOnInit() {
        window.scrollTo(0, 0);
    }
    getinsuranceDetails(insuranceId) {
        this.uaeService.getInsuranceDetails(insuranceId).subscribe(res => {
            this.InsuranceDetails = res;
            console.log(this.InsuranceDetails.insurance_companies.name);
        });
    }
}
InsuranceDetailsComponent.ɵfac = function InsuranceDetailsComponent_Factory(t) { return new (t || InsuranceDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_uae_service__WEBPACK_IMPORTED_MODULE_2__["UaeService"])); };
InsuranceDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InsuranceDetailsComponent, selectors: [["app-insurance-details"]], decls: 45, vars: 12, consts: [[1, "container", 2, "padding-top", "12px"], [1, "row"], [1, "col-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/home"], ["routerLink", "/insurance"], ["active", "", "aria-current", "page", 1, "breadcrumb-item"], [1, "col-lg-12", "col-md-12", "col-xl-12", "col-sm-12", "p-9"], [1, "card"], [1, "card-body", "card-body1", "text-center"], [1, "row", "card-text"], [1, "col-lg-3", "col-md-12", "col-xl-3", "col-sm-12"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "col-lg-12", "col-md-12", "col-xl-9", "col-sm-12", "text-left"], [1, "card-title"], [4, "ngIf"], [1, "title"], [1, "data"], ["target", "_blank", 1, "title", 2, "color", "white", "text-decoration-line", "underline", 3, "href"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", "role", "presentation", 4, "ngIf"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], ["role", "presentation", 1, "nav-item"], ["id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"]], template: function InsuranceDetailsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Insurance Companies ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InsuranceDetailsComponent_div_23_Template, 7, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Address :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, InsuranceDetailsComponent_div_30_Template, 7, 1, "div", 17);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, InsuranceDetailsComponent_li_36_Template, 3, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, InsuranceDetailsComponent_li_37_Template, 3, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, InsuranceDetailsComponent_div_42_Template, 7, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, InsuranceDetailsComponent_div_43_Template, 7, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.InsuranceDetails.insurance_companies.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.InsuranceDetails.insurance_companies.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.InsuranceDetails.insurance_companies.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.InsuranceDetails.insurance_companies.founded != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.InsuranceDetails.insurance_companies.address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.InsuranceDetails.insurance_companies.phone != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.InsuranceDetails.insurance_companies.websiteLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.InsuranceDetails.insurance_companies.overview != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.InsuranceDetails.insurance_companies.timings != null && ctx.InsuranceDetails.insurance_companies.leadership != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.InsuranceDetails.insurance_companies.overview, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.InsuranceDetails.insurance_companies.leadership != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.InsuranceDetails.insurance_companies.timings != null);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".title[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    \r\n}\r\n.data[_ngcontent-%COMP%]{\r\n    display: inline;\r\n}\r\na[_ngcontent-%COMP%]{\r\n   text-decoration: none;\r\n   color: black;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n    background-color: #105674;\r\n    color:white;\r\n    \r\n}\r\n.tab-content[_ngcontent-%COMP%] {\r\n    border: 1px solid;\r\n    padding: inherit;\r\n    border-color: #dee2e6 #dee2e6 #fff;\r\n    border-bottom: 1px solid  #dee2e6;\r\n}\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3VyYW5jZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0dBQ0cscUJBQXFCO0dBQ3JCLFlBQVk7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6Imluc3VyYW5jZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBcclxufVxyXG4uZGF0YXtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5he1xyXG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwNTY3NDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgXHJcbn1cclxuLnRhYi1jb250ZW50IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZzogaW5oZXJpdDtcclxuICAgIGJvcmRlci1jb2xvcjogI2RlZTJlNiAjZGVlMmU2ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgICNkZWUyZTY7XHJcbn1cclxuLmNhcmQtaW1nLXRvcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Il19 */"] });


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


/***/ })

}]);
//# sourceMappingURL=components-insurance-insurance-details-insurance-details-module.js.map