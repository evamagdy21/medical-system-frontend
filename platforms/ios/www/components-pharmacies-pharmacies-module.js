(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pharmacies-pharmacies-module"],{

/***/ "IJrK":
/*!************************************************************!*\
  !*** ./src/app/components/pharmacies/pharmacies.module.ts ***!
  \************************************************************/
/*! exports provided: PharmaciesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmaciesModule", function() { return PharmaciesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pharmacies_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pharmacies-routing.module */ "hif9");
/* harmony import */ var _pharmacies_pharmacies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pharmacies/pharmacies.component */ "RDZF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class PharmaciesModule {
}
PharmaciesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PharmaciesModule });
PharmaciesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function PharmaciesModule_Factory(t) { return new (t || PharmaciesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _pharmacies_routing_module__WEBPACK_IMPORTED_MODULE_1__["PharmaciesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PharmaciesModule, { declarations: [_pharmacies_pharmacies_component__WEBPACK_IMPORTED_MODULE_2__["PharmaciesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _pharmacies_routing_module__WEBPACK_IMPORTED_MODULE_1__["PharmaciesRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"]] }); })();


/***/ }),

/***/ "RDZF":
/*!***************************************************************!*\
  !*** ./src/app/components/pharmacies/pharmacies.component.ts ***!
  \***************************************************************/
/*! exports provided: PharmaciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmaciesComponent", function() { return PharmaciesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_uae_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/uae.service */ "PAVH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function PharmaciesComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PharmaciesComponent_div_22_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const pharmacy_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.PharmacyDetails(pharmacy_r1._id); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pharmacy_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pharmacy_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pharmacy_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", pharmacy_r1.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", pharmacy_r1.location, "");
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
class PharmaciesComponent {
    constructor(uaeService, router, spinner) {
        this.uaeService = uaeService;
        this.router = router;
        this.spinner = spinner;
        /* pagination */
        this.pharmacies = [];
        this.currentIndex = -1;
        this.CityBanner = "../../../../assets/images/MainBanner.jpg";
        this.page = 1;
        this.count = 0;
        this.pageSize = 5;
        this.pageSizes = [5, 10, 15];
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.getPharmacies();
        this.spinner.show();
        this.uaeService.getUaeData().subscribe(res => {
            this.City = res.uae;
            this.UAES = res.uae;
            console.log(res.uae);
            this.spinner.hide();
        });
    }
    getPharmacies() {
        this.spinner.show();
        this.uaeService.getPharmacyeData().subscribe(res => {
            const { pharmacies, totalItems } = res;
            this.pharmacies = pharmacies;
            this.count = totalItems;
            this.spinner.hide();
            console.log(pharmacies);
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
        this.pharmacy = this.UAE.map(o => o.pharmacies);
        this.pharmacies = this.pharmacy.flat();
        console.log(this.pharmacy);
        console.log(this.pharmacy.flat());
    }
    PharmacyDetails(pharmacyId) {
        this.router.navigate(['pharmacy-details/', pharmacyId]);
    }
}
PharmaciesComponent.ɵfac = function PharmaciesComponent_Factory(t) { return new (t || PharmaciesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_uae_service__WEBPACK_IMPORTED_MODULE_1__["UaeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
PharmaciesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PharmaciesComponent, selectors: [["app-pharmacies"]], decls: 32, vars: 12, consts: [[1, "category_banner", 2, "background-size", "cover", "background-repeat", "no-repeat", "min-height", "360px", "background-position", "center"], [1, "container"], [1, "row", "fullscreen", "d-flex", "align-items-center"], [1, "col-12", "text-center", "m-auto", 2, "padding", "7rem"], [1, "form-group", "justify-content-center"], ["name", "uae", "required", "", 1, "custom-select", 3, "change"], ["disabled", "", "selected", "", "hidden", "", 3, "value"], [1, "row", "p-4"], [1, "col-lg-7", "col-md-7", "col-xl-7", "col-sm-7", "p-9"], [1, "card"], ["class", "card-body card-body1 text-center", 4, "ngFor", "ngForOf"], [1, "text-center"], ["previousLabel", "Prev", "nextLabel", "Next", 3, "responsive", "pageChange"], [1, "col-lg-5", "col-md-5", "col-xl-5", "col-sm-5", "p-9"], [1, "paragraph-title"], [1, "card-body", "card-body1", "text-center"], [1, "row", "card-text", 3, "click"], [1, "col-lg-3", "col-md-12", "col-xl-3", "col-sm-12"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "col-lg-9", "col-md-12", "col-xl-9", "col-sm-12", "text-left"], [1, "card-title"]], template: function PharmaciesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PharmaciesComponent_Template_select_change_7_listener($event) { return ctx.onUAESelected($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Ras Al Khaimah ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PharmaciesComponent_div_22_Template, 15, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "pagination-controls", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PharmaciesComponent_Template_pagination_controls_pageChange_26_listener($event) { return ctx.handlePageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "List of Best Pharmacies Providers in UAE (2021)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Pharmacy profession is evolving steadily in the United Arab Emirates (UAE). This article presents a brief overview of the profession, and highlights some of the advances and challenges that face pharmacy in the UAE. The United Arab Emirates (UAE) is one of the Gulf Cooperation Council Countries of the Middle East. It is a constitutional federation that was established in 2nd of December 1971. The UAE constitutes seven Emirates; Abu Dhabi (the capital), Dubai, Sharjah, Ajman, Umm Al\u2010Qaiwain, Ras Al\u2010Khaimah and Fujairah. It lies between Oman and Saudi Arabia, and has coastal borders on the Arabian Gulf and the Gulf of Oman. The UAE is a rich country and has a gross domestic product (GDP), per capita, of around $49,116 (PPP US$) [1]. Nearly one third of the GDP is attributed to petroleum, oil and gas [2]. The UAE has a diverse and expanding population, estimated to be around four and a half million. UAE citizens however are considerably outnumbered by expatriates (non\u2010citizens), they constitute approximately only one fifth of the overall population. Seventy four per cent of the UAE population aged between 15\u201064 years are expatriates [1]. Expatriates make up the majority of the work force in the country and mostly come from other Arab countries, Iran, South and South East Asia (predominantly from India, Pakistan and the Philippines). The country\u2019s total expenditure on healthcare as a percentage of GDP is 2.6% [3]. It is estimated that 71.6% of that expenditure is provided by the Government and 28.4% is private expenditure. The majority (77.9%) of private expenditure on health is attributed to out\u2010of\u2010pocket expenditure [3]. The continuous increased demand due to the large influx of expatriate workers into the country, especially in the past five years, and rising costs of technology are believed to have over\u2010loaded the publicly funded healthcare services and increased the UAE Ministry of Health\u2019s budget by 4.5% per year [4]. This instigated the Government to invest in the private health sector and mandate medical insurance for expatriates in Abu Dhabi, the largest Emirate in terms of size and population (1.7 million) [5]. Abu Dhabi\u2019s new health insurance program includes three types of policies; basic, enhanced and emergency health policies [5]. By 2007,1.3 million expatriates residing in Abu Dhabi were covered by health insurance [5]. The remaining six Emirates continue to follow the previous health system in delivering healthcare. Whereby, expatriates are required to purchase annual healthcare cards to receive subsidised healthcare services (not including pharmaceuticals). Privatehealth insurance in the remaining six Emirates is voluntarily available to whoever can afford it. Also in recent years, new health authorities namely the Health Authority of Abu Dhabi and the Department of Health and Medical Services of Dubai emerged taking on the management and regulation of health services in Abu Dhabi and Dubai respectively. This role includes licensing pharmacies and registering pharmacists. The new authorities collaborate and have formed partnerships with several international institutions. For example the Health Authority of Abu Dhabi functions in partnership with Johns Hopkins and the Cleveland Clinic among other institutions [6]. Health and pharmacy services in the remaining five Emirates continue to be under the mandate of the UAE Ministry of Health.Pharmacy profession is evolving steadily in the United Arab Emirates (UAE). This article presents a brief overview of the profession, and highlights some of the advances and challenges that face pharmacy in the UAE. The United Arab Emirates (UAE) is one of the Gulf Cooperation Council Countries of the Middle East. It is a constitutional federation that was established in 2nd of December 1971. The UAE constitutes seven Emirates; Abu Dhabi (the capital), Dubai, Sharjah, Ajman, Umm Al\u2010Qaiwain, Ras Al\u2010Khaimah and Fujairah. It lies between Oman and Saudi Arabia, and has coastal borders on the Arabian Gulf and the Gulf of Oman. The UAE is a rich country and has a gross domestic product (GDP), per capita, of around $49,116 (PPP US$) [1]. Nearly one third of the GDP is attributed to petroleum, oil and gas [2]. The UAE has a diverse and expanding population, estimated to be around four and a half million. UAE citizens however are considerably outnumbered by expatriates (non\u2010citizens), they constitute approximately only one fifth of the overall population. Seventy four per cent of the UAE population aged between 15\u201064 years are expatriates [1]. Expatriates make up the majority of the work force in the country and mostly come from other Arab countries, Iran, South and South East Asia (predominantly from India, Pakistan and the Philippines). The country\u2019s total expenditure on healthcare as a percentage of GDP is 2.6% [3]. It is estimated that 71.6% of that expenditure is provided by the Government and 28.4% is private expenditure. The majority (77.9%) of private expenditure on health is attributed to out\u2010of\u2010pocket expenditure [3]. The continuous increased demand due to the large influx of expatriate workers into the country, especially in the past five years, and rising costs of technology are believed to have over\u2010loaded the publicly funded healthcare services and increased the UAE Ministry of Health\u2019s budget by 4.5% per year [4]. This instigated the Government to invest in the private health sector and mandate medical insurance for expatriates in Abu Dhabi, the largest Emirate in terms of size and population (1.7 million) [5]. Abu Dhabi\u2019s new health insurance program includes three types of policies; basic, enhanced and emergency health policies [5]. By 2007,1.3 million expatriates residing in Abu Dhabi were covered by health insurance [5]. The remaining six Emirates continue to follow the previous health system in delivering healthcare. Whereby, expatriates are required to purchase annual healthcare cards to receive subsidised healthcare services (not including pharmaceuticals). Privatehealth insurance in the remaining six Emirates is voluntarily available to whoever can afford it. Also in recent years, new health authorities namely the Health Authority of Abu Dhabi and the Department of Health and Medical Services of Dubai emerged taking on the management and regulation of health services in Abu Dhabi and Dubai respectively. This role includes licensing pharmacies and registering pharmacists. The new authorities collaborate and have formed partnerships with several international institutions. For example the Health Authority of Abu Dhabi functions in partnership with Johns Hopkins and the Cleveland Clinic among other institutions [6]. Health and pharmacy services in the remaining five Emirates continue to be under the mandate of the UAE Ministry of Health. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.CityBanner + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 5, ctx.pharmacies, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c0, ctx.pageSize, ctx.page, ctx.count)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"]], styles: ["h3[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.card-body.card-body1[_ngcontent-%COMP%]{\r\n    background-color: #105674;\r\n    color:white;\r\n    border-bottom: 1px solid #ffff;\r\n}\r\n.card-body.card-body2[_ngcontent-%COMP%]{\r\n    background-color: #b0b1b6;\r\n    color:white;\r\n\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border-color: white;\r\n}\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    width: 8rem;\r\n    height: 8rem;\r\n    background-color: white;\r\n}\r\n.card-title[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n.card-text[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBoYXJtYWNpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InBoYXJtYWNpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZC1ib2R5LmNhcmQtYm9keTF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA1Njc0O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmY7XHJcbn1cclxuLmNhcmQtYm9keS5jYXJkLWJvZHkye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IwYjFiNjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG5cclxufVxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYXJkLWltZy10b3B7XHJcbiAgICB3aWR0aDogOHJlbTtcclxuICAgIGhlaWdodDogOHJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2FyZC10ZXh0e1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59Il19 */"] });


/***/ }),

/***/ "hif9":
/*!********************************************************************!*\
  !*** ./src/app/components/pharmacies/pharmacies-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: PharmaciesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmaciesRoutingModule", function() { return PharmaciesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pharmacies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pharmacies.component */ "RDZF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _pharmacies_component__WEBPACK_IMPORTED_MODULE_1__["PharmaciesComponent"] }
];
class PharmaciesRoutingModule {
}
PharmaciesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PharmaciesRoutingModule });
PharmaciesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function PharmaciesRoutingModule_Factory(t) { return new (t || PharmaciesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PharmaciesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=components-pharmacies-pharmacies-module.js.map