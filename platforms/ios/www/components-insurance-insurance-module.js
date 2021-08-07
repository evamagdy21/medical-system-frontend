(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-insurance-insurance-module"],{

/***/ "NkGt":
/*!******************************************************************!*\
  !*** ./src/app/components/insurance/insurance-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: InsuranceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceRoutingModule", function() { return InsuranceRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _insurance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insurance.component */ "Wpgh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _insurance_component__WEBPACK_IMPORTED_MODULE_1__["InsuranceComponent"] }
];
class InsuranceRoutingModule {
}
InsuranceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InsuranceRoutingModule });
InsuranceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function InsuranceRoutingModule_Factory(t) { return new (t || InsuranceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InsuranceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Q2HD":
/*!**********************************************************!*\
  !*** ./src/app/components/insurance/insurance.module.ts ***!
  \**********************************************************/
/*! exports provided: InsuranceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceModule", function() { return InsuranceModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _insurance_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insurance-routing.module */ "NkGt");
/* harmony import */ var _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../insurance/insurance.component */ "Wpgh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class InsuranceModule {
}
InsuranceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: InsuranceModule });
InsuranceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function InsuranceModule_Factory(t) { return new (t || InsuranceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _insurance_routing_module__WEBPACK_IMPORTED_MODULE_1__["InsuranceRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](InsuranceModule, { declarations: [_insurance_insurance_component__WEBPACK_IMPORTED_MODULE_2__["InsuranceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _insurance_routing_module__WEBPACK_IMPORTED_MODULE_1__["InsuranceRoutingModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "Wpgh":
/*!*************************************************************!*\
  !*** ./src/app/components/insurance/insurance.component.ts ***!
  \*************************************************************/
/*! exports provided: InsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceComponent", function() { return InsuranceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_uae_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/uae.service */ "PAVH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function InsuranceComponent_div_20_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Founded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const insurance_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", insurance_r1.founded, "");
} }
function InsuranceComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsuranceComponent_div_20_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const insurance_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.InsuranceDetails(insurance_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InsuranceComponent_div_20_div_15_Template, 5, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const insurance_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", insurance_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](insurance_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", insurance_r1.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", insurance_r1.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", insurance_r1.founded != null);
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
class InsuranceComponent {
    constructor(uaeService, router, spinner) {
        this.uaeService = uaeService;
        this.router = router;
        this.spinner = spinner;
        /* pagination */
        this.insurance_companies = [];
        this.currentIndex = -1;
        this.CityBanner = "../../../../assets/images/MainBanner.jpg";
        this.page = 1;
        this.count = 0;
        this.pageSize = 5;
        this.pageSizes = [5, 10, 15];
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.getInsuranceCompanies();
        this.spinner.show();
        this.uaeService.getUaeData().subscribe(res => {
            this.City = res.uae;
            this.UAES = res.uae;
            console.log(res.uae);
            this.spinner.hide();
        });
    }
    getInsuranceCompanies() {
        this.spinner.show();
        this.uaeService.getInsuranceData().subscribe(res => {
            const { insurance_companies, totalItems } = res;
            this.insurance_companies = insurance_companies;
            this.count = totalItems;
            this.spinner.hide();
            console.log(insurance_companies);
            // this.insurance_companies = res.result.flat();
        });
    }
    handlePageChange(event) {
        this.page = event;
        // this.getHospitals();
    }
    onUAESelected(SelectedUAEName) {
        this.page = 1;
        if (SelectedUAEName == "")
            this.UAE = this.City;
        else {
            this.UAE = this.City.filter((c => c.name == SelectedUAEName.target.value));
            this.CityBanner = this.City.filter(c => c.name == SelectedUAEName.target.value)[0].image;
        }
        console.log("data" + this.UAE);
        this.insurance = this.UAE.map(o => o.insurance_companies);
        this.insurance_companies = this.insurance.flat();
        console.log(this.insurance);
        console.log(this.insurance.flat());
    }
    InsuranceDetails(insuranceId) {
        this.router.navigate(['insurance-details/', insuranceId]);
    }
}
InsuranceComponent.ɵfac = function InsuranceComponent_Factory(t) { return new (t || InsuranceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_uae_service__WEBPACK_IMPORTED_MODULE_1__["UaeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
InsuranceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InsuranceComponent, selectors: [["app-insurance"]], decls: 42, vars: 12, consts: [[1, "category_banner", 2, "background-size", "cover", "background-repeat", "no-repeat", "min-height", "360px", "background-position", "center"], [1, "container"], [1, "row", "fullscreen", "d-flex", "align-items-center"], [1, "col-12", "text-center", "m-auto", 2, "padding", "7rem"], [1, "form-group", "justify-content-center"], ["name", "uae", "required", "", 1, "custom-select", 3, "change"], ["disabled", "", "selected", "", "hidden", "", 3, "value"], [1, "row", "p-4"], [1, "col-lg-7", "col-md-7", "col-xl-7", "col-sm-7", "p-9"], [1, "card"], ["class", "card-body card-body1 text-center", 4, "ngFor", "ngForOf"], [1, "text-center"], ["previousLabel", "Prev", "nextLabel", "Next", 3, "responsive", "pageChange"], [1, "col-lg-5", "col-md-5", "col-xl-5", "col-sm-5", "p-9"], [1, "paragraph-title"], [1, "card-body", "card-body1", "text-center"], [1, "row", "card-text", 3, "click"], [1, "col-lg-3", "col-md-12", "col-xl-3", "col-sm-12"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "col-lg-9", "col-md-12", "col-xl-9", "col-sm-12", "text-left"], [1, "card-title"], [4, "ngIf"]], template: function InsuranceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InsuranceComponent_Template_select_change_7_listener($event) { return ctx.onUAESelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Your City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Abu Dhabi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Dubai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Sharjah ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InsuranceComponent_div_20_Template, 16, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pagination-controls", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function InsuranceComponent_Template_pagination_controls_pageChange_24_listener($event) { return ctx.handlePageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "List of 90 Best Insurance Providers in UAE (2021)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Under the Thiqa programme, the Emirate of Abu Dhabi, the capital of the UAE, provides a full medical cover for its citizens. With the Thiqa card, the citizens can get full and comprehensive access to a large number of public and private healthcare providers in the city.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Health insurance in the UAE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " can bring in benefits and coverage in times of need for the patients. Compare the best & cheapest health insurance companies in the UAE In the city of Dubai, the Saada is the health insurance programme that helps cover all citizens with care and concern. If you are a resident expatriate, the cost of healthcare can be huge in this country.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Health insurance in UAE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "often mandatory for all expats to have. The extent of the health insurance coverage is often determined by the kind of work the worker does and the salary he or she gets. The designation and the sector often determine the kind of insurance an expat can avail. In the emirate of Abu Dhabi, employers and sponsors should be able to provide for the best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "health insurance in UAE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "for its employee, one spouse and up to three children not above 18 years of age. In the emirate of Dubai, the company that brings in the foreign worker should provide health insurance coverage for him or her. Sponsors are required to cover the dependents as well. There are many lists of the best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "health insurance in UAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "; you can have a look at the one given below for an idea about some providers that can help you at the time of a medical emergency and need. Medarabia has put together profiles of some of the providers of best health insurance in UAE. Below you will find the location map, address information, contact details, patient reviews to help you find the right one. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.CityBanner + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 5, ctx.insurance_companies, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c0, ctx.pageSize, ctx.page, ctx.count)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"]], styles: ["h3[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.card-body.card-body1[_ngcontent-%COMP%]{\r\n    background-color: #105674;\r\n    color:white;\r\n    border-bottom: 1px solid #ffff;\r\n}\r\n.card-body.card-body2[_ngcontent-%COMP%]{\r\n    background-color: #b0b1b6;\r\n    color:white;\r\n\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border-color: white;\r\n}\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    width: 8rem;\r\n    height: 8rem;\r\n    background-color: white;\r\n}\r\n.card-title[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n.card-text[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3VyYW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXOztBQUVmO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUdBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiaW5zdXJhbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNhcmQtYm9keS5jYXJkLWJvZHkxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwNTY3NDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmO1xyXG59XHJcbi5jYXJkLWJvZHkuY2FyZC1ib2R5MntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGIxYjY7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuXHJcbn1cclxuLmJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FyZC1pbWctdG9we1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5jYXJkLXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNhcmQtdGV4dHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5we1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=components-insurance-insurance-module.js.map