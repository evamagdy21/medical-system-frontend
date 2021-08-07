(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-hospitals-hospitals-module"],{

/***/ "Ctsp":
/*!******************************************************************!*\
  !*** ./src/app/components/hospitals/hospitals-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: HospitalsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsRoutingModule", function() { return HospitalsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _hospitals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hospitals.component */ "Olww");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _hospitals_component__WEBPACK_IMPORTED_MODULE_1__["HospitalsComponent"] }
];
class HospitalsRoutingModule {
}
HospitalsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HospitalsRoutingModule });
HospitalsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function HospitalsRoutingModule_Factory(t) { return new (t || HospitalsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HospitalsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Olww":
/*!*************************************************************!*\
  !*** ./src/app/components/hospitals/hospitals.component.ts ***!
  \*************************************************************/
/*! exports provided: HospitalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsComponent", function() { return HospitalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_uae_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/uae.service */ "PAVH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function HospitalsComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cityname_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cityname_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cityname_r2.name, " ");
} }
function HospitalsComponent_div_15_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Founded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hospital_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", hospital_r3.founded, "");
} }
function HospitalsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HospitalsComponent_div_15_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const hospital_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.HospitalDetails(hospital_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 22);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HospitalsComponent_div_15_div_15_Template, 5, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hospital_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", hospital_r3.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hospital_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", hospital_r3.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", hospital_r3.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", hospital_r3.founded != null);
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
class HospitalsComponent {
    constructor(uaeService, router, spinner) {
        this.uaeService = uaeService;
        this.router = router;
        this.spinner = spinner;
        /* pagination */
        this.hospitals_clinics = [];
        this.currentIndex = -1;
        this.title = '';
        this.CityBanner = "../../../../assets/images/MainBanner.jpg";
        this.page = 1;
        this.count = 0;
        this.pageSize = 5;
        this.pageSizes = [5, 10, 15];
    }
    ngOnInit() {
        // /** spinner starts on init */
        // this.spinner.show();
        // setTimeout(() => {
        //   /** spinner ends after 5 seconds */
        //   this.spinner.hide();
        // }, 5000);
        window.scrollTo(0, 0);
        this.getHospitals();
        this.spinner.show();
        this.uaeService.getUaeData().subscribe(res => {
            this.UAES = res.uae;
            this.City = res.uae;
            this.spinner.hide();
            console.log("jjjjjjjjj" + res);
            console.log("UAEEEE" + JSON.stringify(this.UAE));
        });
    }
    getHospitals() {
        this.spinner.show();
        this.uaeService.getHospitalsData().subscribe(res => {
            const { hospitals_clinics, totalItems } = res;
            this.hospitals_clinics = hospitals_clinics;
            this.count = totalItems;
            this.spinner.hide();
            console.log(res);
        });
    }
    handlePageChange(event) {
        this.page = event;
        // this.getHospitals();
    }
    // handlePageSizeChange(event: any): void {
    //   this.pageSize = event.target.value;
    //   this.page = 1;
    //   this.getHospitals();
    // }
    onUAESelected(SelectedUAEName) {
        this.page = 1;
        if (SelectedUAEName == "")
            this.UAE = this.City;
        else {
            this.UAE = this.City.filter((c => c.name == SelectedUAEName.target.value));
            this.CityBanner = this.City.filter(c => c.name == SelectedUAEName.target.value)[0].image;
        }
        console.log("data" + this.UAE);
        this.hospitals = this.UAE.map(o => o.hospitals_clinics);
        this.hospitals_clinics = this.hospitals.flat();
        console.log(this.hospitals);
        console.log(this.hospitals.flat());
    }
    HospitalDetails(hospitalId) {
        this.router.navigate(['hospital-details/', hospitalId]);
    }
}
HospitalsComponent.ɵfac = function HospitalsComponent_Factory(t) { return new (t || HospitalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_uae_service__WEBPACK_IMPORTED_MODULE_1__["UaeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
HospitalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HospitalsComponent, selectors: [["app-hospitals"]], decls: 36, vars: 13, consts: [[1, "category_banner", 2, "background-size", "cover", "background-repeat", "no-repeat", "min-height", "360px", "background-position", "center"], [1, "container"], [1, "row", "fullscreen", "d-flex", "align-items-center"], [1, "col-12", "text-center", "m-auto", 2, "padding", "7rem"], [1, "form-group", "justify-content-center"], ["name", "uae", "required", "", 1, "custom-select", 3, "change"], ["disabled", "", "selected", "", "hidden", "", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "p-4"], [1, "col-lg-7", "col-md-7", "col-xl-7", "col-sm-7", "p-9"], [1, "card"], ["class", "card-body card-body1 text-center", 4, "ngFor", "ngForOf"], [1, "text-center"], ["previousLabel", "Prev", "nextLabel", "Next", 3, "responsive", "pageChange"], [1, "col-lg-5", "col-md-5", "col-xl-5", "col-sm-5", "p-9"], [1, "paragraph-title"], [3, "value"], [1, "card-body", "card-body1", "text-center"], [1, "row", "card-text", 3, "click"], [1, "col-lg-3", "col-md-12", "col-xl-3", "col-sm-12"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "col-lg-9", "col-md-12", "col-xl-9", "col-sm-12", "text-left"], [1, "card-title"], [4, "ngIf"]], template: function HospitalsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HospitalsComponent_Template_select_change_7_listener($event) { return ctx.onUAESelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Your City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HospitalsComponent_option_10_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HospitalsComponent_div_15_Template, 16, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pagination-controls", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function HospitalsComponent_Template_pagination_controls_pageChange_19_listener($event) { return ctx.handlePageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "List of Best Clinics & Hospitals in UAE (2021)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "With some of the best clinics in UAE, the country is poised to become the global medical tourism hub in the next 5 years. The country has some of the most advanced healthcare facilities in the entire world.Since the UAE offers state of the art medical facilities with excellent medical staff that is trained and highly skilled, most of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "hospital and clinics in the UAE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " have a significant expenditure on public health and awareness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Which are the best hospitals in the UAE?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " In 2000, the country had only three hospitals in the UAE that had international accreditation. By 2016, there were 55 hospitals throughout the country that had the JCI accreditation. Most of these hospitals have introduced best practices and patented medicines that are approved by the USFDA or better known as the US Food and Drug Administration. This accreditation has enabled the availability of highest quality care and medicines with patents drawn from across the world. The country is well equipped to deal with millions coming to its shores for better treatment facilities and proper care. With the public and private sector working closely to build more hospitals and recruit highly qualified foreign doctors and medical staff, the quality of healthcare is going to rise more significantly. Medarabia has put together profiles of some of the best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "hospital and clinics in the UAE.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Below, you will find the clinic address, contact number, reviews, and website to help you find the right one. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.CityBanner + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.City);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 6, ctx.hospitals_clinics, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](9, _c0, ctx.pageSize, ctx.page, ctx.count)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"]], styles: ["h3[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.card-body.card-body1[_ngcontent-%COMP%]{\r\n    background-color: #105674;\r\n    color:white;\r\n    border-bottom: 1px solid #ffff;\r\n}\r\n.card-body.card-body2[_ngcontent-%COMP%]{\r\n    background-color: #b0b1b6;\r\n    color:white;\r\n\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border-color: white;\r\n}\r\n.card-img-top[_ngcontent-%COMP%]{\r\n    width: 8rem;\r\n    height: 8rem;\r\n    background-color: white;\r\n}\r\n.card-title[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n.card-text[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvc3BpdGFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXOztBQUVmO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUdBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiaG9zcGl0YWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNhcmQtYm9keS5jYXJkLWJvZHkxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwNTY3NDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmO1xyXG59XHJcbi5jYXJkLWJvZHkuY2FyZC1ib2R5MntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGIxYjY7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuXHJcbn1cclxuLmJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FyZC1pbWctdG9we1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5jYXJkLXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNhcmQtdGV4dHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5we1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "u5VC":
/*!**********************************************************!*\
  !*** ./src/app/components/hospitals/hospitals.module.ts ***!
  \**********************************************************/
/*! exports provided: HospitalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsModule", function() { return HospitalsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _hospitals_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hospitals-routing.module */ "Ctsp");
/* harmony import */ var _hospitals_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hospitals.component */ "Olww");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class HospitalsModule {
}
HospitalsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: HospitalsModule });
HospitalsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function HospitalsModule_Factory(t) { return new (t || HospitalsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _hospitals_routing_module__WEBPACK_IMPORTED_MODULE_1__["HospitalsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HospitalsModule, { declarations: [_hospitals_component__WEBPACK_IMPORTED_MODULE_2__["HospitalsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _hospitals_routing_module__WEBPACK_IMPORTED_MODULE_1__["HospitalsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=components-hospitals-hospitals-module.js.map