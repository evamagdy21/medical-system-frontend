(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{IJrK:function(e,t,a){"use strict";a.r(t),a.d(t,"PharmaciesModule",function(){return p});var i=a("ofXK"),n=a("tyNb"),r=a("fXoL"),o=a("PAVH"),s=a("JqCM"),h=a("3Pt+"),c=a("oOf3");function l(e,t){if(1&e){const e=r.Zb();r.Yb(0,"div",15),r.Yb(1,"div",16),r.jc("click",function(){r.Bc(e);const a=t.$implicit;return r.lc().PharmacyDetails(a._id)}),r.Yb(2,"div",17),r.Ub(3,"img",18),r.Xb(),r.Yb(4,"div",19),r.Yb(5,"h5",20),r.Jc(6),r.Xb(),r.Yb(7,"p"),r.Yb(8,"strong"),r.Jc(9,"Address"),r.Xb(),r.Jc(10),r.Xb(),r.Yb(11,"p"),r.Yb(12,"strong"),r.Jc(13,"Location"),r.Xb(),r.Jc(14),r.Xb(),r.Xb(),r.Xb(),r.Xb()}if(2&e){const e=t.$implicit;r.Hb(3),r.rc("src",e.logo,r.Ec),r.Hb(3),r.Kc(e.name),r.Hb(4),r.Lc(" : ",e.address,""),r.Hb(4),r.Lc(": ",e.location,"")}}const d=function(e,t,a){return{itemsPerPage:e,currentPage:t,totalItems:a}},u=[{path:"",component:(()=>{class e{constructor(e,t,a){this.uaeService=e,this.router=t,this.spinner=a,this.pharmacies=[],this.currentIndex=-1,this.CityBanner="../../../../assets/images/MainBanner.jpg",this.page=1,this.count=0,this.pageSize=5,this.pageSizes=[5,10,15]}ngOnInit(){window.scrollTo(0,0),this.getPharmacies(),this.spinner.show(),this.uaeService.getUaeData().subscribe(e=>{this.City=e.uae,this.UAES=e.uae,console.log(e.uae),this.spinner.hide()})}getPharmacies(){this.spinner.show(),this.uaeService.getPharmacyeData().subscribe(e=>{const{pharmacies:t,totalItems:a}=e;this.pharmacies=t,this.count=a,this.spinner.hide(),console.log(t)})}handlePageChange(e){this.page=e}onUAESelected(e){this.page=1,""==e?this.UAE=this.City:(this.UAE=this.City.filter(t=>t.name==e.target.value),this.CityBanner=this.City.filter(t=>t.name==e.target.value)[0].image),console.log("data"+this.UAE),this.pharmacy=this.UAE.map(e=>e.pharmacies),this.pharmacies=this.pharmacy.flat(),console.log(this.pharmacy),console.log(this.pharmacy.flat())}PharmacyDetails(e){this.router.navigate(["pharmacy-details/",e])}}return e.\u0275fac=function(t){return new(t||e)(r.Tb(o.a),r.Tb(n.e),r.Tb(s.c))},e.\u0275cmp=r.Nb({type:e,selectors:[["app-pharmacies"]],decls:32,vars:12,consts:[[1,"category_banner",2,"background-size","cover","background-repeat","no-repeat","min-height","360px","background-position","center"],[1,"container"],[1,"row","fullscreen","d-flex","align-items-center"],[1,"col-12","text-center","m-auto",2,"padding","7rem"],[1,"form-group","justify-content-center"],["name","uae","required","",1,"custom-select",3,"change"],["disabled","","selected","","hidden","",3,"value"],[1,"row","p-4"],[1,"col-lg-7","col-md-7","col-xl-7","col-sm-7","p-9"],[1,"card"],["class","card-body card-body1 text-center",4,"ngFor","ngForOf"],[1,"text-center"],["previousLabel","Prev","nextLabel","Next",3,"responsive","pageChange"],[1,"col-lg-5","col-md-5","col-xl-5","col-sm-5","p-9"],[1,"paragraph-title"],[1,"card-body","card-body1","text-center"],[1,"row","card-text",3,"click"],[1,"col-lg-3","col-md-12","col-xl-3","col-sm-12"],["alt","Card image cap",1,"card-img-top",3,"src"],[1,"col-lg-9","col-md-12","col-xl-9","col-sm-12","text-left"],[1,"card-title"]],template:function(e,t){1&e&&(r.Yb(0,"section",0),r.Yb(1,"div",1),r.Yb(2,"div",2),r.Yb(3,"div",3),r.Ub(4,"br"),r.Yb(5,"form"),r.Yb(6,"div",4),r.Yb(7,"select",5),r.jc("change",function(e){return t.onUAESelected(e)}),r.Yb(8,"option",6),r.Jc(9,"Select Your City"),r.Xb(),r.Yb(10,"option"),r.Jc(11," Abu Dhabi "),r.Xb(),r.Yb(12,"option"),r.Jc(13," Dubai "),r.Xb(),r.Yb(14,"option"),r.Jc(15," Sharjah "),r.Xb(),r.Yb(16,"option"),r.Jc(17," Ras Al Khaimah "),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Yb(18,"div",1),r.Yb(19,"div",7),r.Yb(20,"div",8),r.Yb(21,"div",9),r.Hc(22,l,15,4,"div",10),r.mc(23,"paginate"),r.Xb(),r.Ub(24,"br"),r.Yb(25,"div",11),r.Yb(26,"pagination-controls",12),r.jc("pageChange",function(e){return t.handlePageChange(e)}),r.Xb(),r.Xb(),r.Xb(),r.Yb(27,"div",13),r.Yb(28,"h2",14),r.Jc(29,"List of Best Pharmacies Providers in UAE (2021)"),r.Xb(),r.Yb(30,"p"),r.Jc(31," Pharmacy profession is evolving steadily in the United Arab Emirates (UAE). This article presents a brief overview of the profession, and highlights some of the advances and challenges that face pharmacy in the UAE. The United Arab Emirates (UAE) is one of the Gulf Cooperation Council Countries of the Middle East. It is a constitutional federation that was established in 2nd of December 1971. The UAE constitutes seven Emirates; Abu Dhabi (the capital), Dubai, Sharjah, Ajman, Umm Al\u2010Qaiwain, Ras Al\u2010Khaimah and Fujairah. It lies between Oman and Saudi Arabia, and has coastal borders on the Arabian Gulf and the Gulf of Oman. The UAE is a rich country and has a gross domestic product (GDP), per capita, of around $49,116 (PPP US$) [1]. Nearly one third of the GDP is attributed to petroleum, oil and gas [2]. The UAE has a diverse and expanding population, estimated to be around four and a half million. UAE citizens however are considerably outnumbered by expatriates (non\u2010citizens), they constitute approximately only one fifth of the overall population. Seventy four per cent of the UAE population aged between 15\u201064 years are expatriates [1]. Expatriates make up the majority of the work force in the country and mostly come from other Arab countries, Iran, South and South East Asia (predominantly from India, Pakistan and the Philippines). The country\u2019s total expenditure on healthcare as a percentage of GDP is 2.6% [3]. It is estimated that 71.6% of that expenditure is provided by the Government and 28.4% is private expenditure. The majority (77.9%) of private expenditure on health is attributed to out\u2010of\u2010pocket expenditure [3]. The continuous increased demand due to the large influx of expatriate workers into the country, especially in the past five years, and rising costs of technology are believed to have over\u2010loaded the publicly funded healthcare services and increased the UAE Ministry of Health\u2019s budget by 4.5% per year [4]. This instigated the Government to invest in the private health sector and mandate medical insurance for expatriates in Abu Dhabi, the largest Emirate in terms of size and population (1.7 million) [5]. Abu Dhabi\u2019s new health insurance program includes three types of policies; basic, enhanced and emergency health policies [5]. By 2007,1.3 million expatriates residing in Abu Dhabi were covered by health insurance [5]. The remaining six Emirates continue to follow the previous health system in delivering healthcare. Whereby, expatriates are required to purchase annual healthcare cards to receive subsidised healthcare services (not including pharmaceuticals). Privatehealth insurance in the remaining six Emirates is voluntarily available to whoever can afford it. Also in recent years, new health authorities namely the Health Authority of Abu Dhabi and the Department of Health and Medical Services of Dubai emerged taking on the management and regulation of health services in Abu Dhabi and Dubai respectively. This role includes licensing pharmacies and registering pharmacists. The new authorities collaborate and have formed partnerships with several international institutions. For example the Health Authority of Abu Dhabi functions in partnership with Johns Hopkins and the Cleveland Clinic among other institutions [6]. Health and pharmacy services in the remaining five Emirates continue to be under the mandate of the UAE Ministry of Health.Pharmacy profession is evolving steadily in the United Arab Emirates (UAE). This article presents a brief overview of the profession, and highlights some of the advances and challenges that face pharmacy in the UAE. The United Arab Emirates (UAE) is one of the Gulf Cooperation Council Countries of the Middle East. It is a constitutional federation that was established in 2nd of December 1971. The UAE constitutes seven Emirates; Abu Dhabi (the capital), Dubai, Sharjah, Ajman, Umm Al\u2010Qaiwain, Ras Al\u2010Khaimah and Fujairah. It lies between Oman and Saudi Arabia, and has coastal borders on the Arabian Gulf and the Gulf of Oman. The UAE is a rich country and has a gross domestic product (GDP), per capita, of around $49,116 (PPP US$) [1]. Nearly one third of the GDP is attributed to petroleum, oil and gas [2]. The UAE has a diverse and expanding population, estimated to be around four and a half million. UAE citizens however are considerably outnumbered by expatriates (non\u2010citizens), they constitute approximately only one fifth of the overall population. Seventy four per cent of the UAE population aged between 15\u201064 years are expatriates [1]. Expatriates make up the majority of the work force in the country and mostly come from other Arab countries, Iran, South and South East Asia (predominantly from India, Pakistan and the Philippines). The country\u2019s total expenditure on healthcare as a percentage of GDP is 2.6% [3]. It is estimated that 71.6% of that expenditure is provided by the Government and 28.4% is private expenditure. The majority (77.9%) of private expenditure on health is attributed to out\u2010of\u2010pocket expenditure [3]. The continuous increased demand due to the large influx of expatriate workers into the country, especially in the past five years, and rising costs of technology are believed to have over\u2010loaded the publicly funded healthcare services and increased the UAE Ministry of Health\u2019s budget by 4.5% per year [4]. This instigated the Government to invest in the private health sector and mandate medical insurance for expatriates in Abu Dhabi, the largest Emirate in terms of size and population (1.7 million) [5]. Abu Dhabi\u2019s new health insurance program includes three types of policies; basic, enhanced and emergency health policies [5]. By 2007,1.3 million expatriates residing in Abu Dhabi were covered by health insurance [5]. The remaining six Emirates continue to follow the previous health system in delivering healthcare. Whereby, expatriates are required to purchase annual healthcare cards to receive subsidised healthcare services (not including pharmaceuticals). Privatehealth insurance in the remaining six Emirates is voluntarily available to whoever can afford it. Also in recent years, new health authorities namely the Health Authority of Abu Dhabi and the Department of Health and Medical Services of Dubai emerged taking on the management and regulation of health services in Abu Dhabi and Dubai respectively. This role includes licensing pharmacies and registering pharmacists. The new authorities collaborate and have formed partnerships with several international institutions. For example the Health Authority of Abu Dhabi functions in partnership with Johns Hopkins and the Cleveland Clinic among other institutions [6]. Health and pharmacy services in the remaining five Emirates continue to be under the mandate of the UAE Ministry of Health. "),r.Xb(),r.Xb(),r.Xb(),r.Xb()),2&e&&(r.Gc("background-image","url("+t.CityBanner+")"),r.Hb(8),r.rc("value",void 0),r.Hb(14),r.rc("ngForOf",r.oc(23,5,t.pharmacies,r.wc(8,d,t.pageSize,t.page,t.count))),r.Hb(4),r.rc("responsive",!0))},directives:[h.j,h.e,h.f,h.g,h.i,i.k,c.c],pipes:[c.b],styles:["h3[_ngcontent-%COMP%]{text-align:center}.card-body.card-body1[_ngcontent-%COMP%]{background-color:#105674;color:#fff;border-bottom:1px solid #fff}.card-body.card-body2[_ngcontent-%COMP%]{background-color:#b0b1b6;color:#fff}.btn[_ngcontent-%COMP%]{background-color:initial;border-color:#fff}.card-img-top[_ngcontent-%COMP%]{width:8rem;height:8rem;background-color:#fff}.card-title[_ngcontent-%COMP%]{font-weight:700}.card-text[_ngcontent-%COMP%]{cursor:pointer}p[_ngcontent-%COMP%]{margin-bottom:0}"]}),e})()}];let b=(()=>{class e{}return e.\u0275mod=r.Rb({type:e}),e.\u0275inj=r.Qb({factory:function(t){return new(t||e)},imports:[[n.i.forChild(u)],n.i]}),e})(),p=(()=>{class e{}return e.\u0275mod=r.Rb({type:e}),e.\u0275inj=r.Qb({factory:function(t){return new(t||e)},imports:[[i.b,b,h.a,h.h,c.a]]}),e})()}}]);