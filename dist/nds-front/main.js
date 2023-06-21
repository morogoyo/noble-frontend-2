"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["main"],{

/***/ 5197:
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/authentication/auth-service.service */ 5998);



class AuthGuard {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  canActivate(route, state) {
    const currentUser = this.authService.user;
    if (this.authService.getAuthenticatedToken()) {
      console.log('Auth guard still needs logic');
      console.log(this.authService.getAuthenticatedUser(), this.authService.getAuthenticatedToken());
      console.log('THIS IS THE VALUE OF THE USER ' + this.authService.userValue);
      // return this.router.navigate(['client','view'], {queryParams: {returnUrl: state.url}});
      return true;
    } else {
      return this.router.navigate(['authentication', 'login-2'], {
        queryParams: {
          returnUrl: state.url
        }
      });
    }
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full-layout/full-layout.component */ 5681);
/* harmony import */ var _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/common-layout/common-layout.component */ 9792);
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ 578);
/* harmony import */ var _shared_routes_common_layout_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/routes/common-layout.routes */ 5301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const appRoutes = [{
  path: '',
  redirectTo: '/dashboard/home',
  pathMatch: 'full'
}, {
  path: '',
  component: _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_1__.CommonLayoutComponent,
  children: _shared_routes_common_layout_routes__WEBPACK_IMPORTED_MODULE_3__.CommonLayout_ROUTES
}, {
  path: '',
  component: _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_0__.FullLayoutComponent,
  children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_2__.FullLayout_ROUTES
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(appRoutes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 2976:
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL_AUTH": () => (/* binding */ API_URL_AUTH),
/* harmony export */   "REST_API_SERVER": () => (/* binding */ REST_API_SERVER),
/* harmony export */   "TODO_JPA_API_URL": () => (/* binding */ TODO_JPA_API_URL)
/* harmony export */ });
const API_URL_AUTH = 'http://localhost:8080/authenticate';
const TODO_JPA_API_URL = 'http://localhost:8080/jpa';
const REST_API_SERVER = 'http://localhost:8080';

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3262);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 8950);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 8667);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/en */ 9137);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _shared_template_template_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/template/template.module */ 3964);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/common-layout/common-layout.component */ 9792);
/* harmony import */ var _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/full-layout/full-layout.component */ 5681);
/* harmony import */ var ng_chartjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-chartjs */ 7336);
/* harmony import */ var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/theme-constant.service */ 7341);
/* harmony import */ var _client_client_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/client.module */ 7808);
/* harmony import */ var _leads_leads_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leads/leads.module */ 7036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);

















(0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__["default"]);
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  providers: [{
    provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__.NZ_I18N,
    useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__.en_US
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__.PathLocationStrategy
  }, _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_6__.ThemeConstantService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__.NzBreadCrumbModule, _shared_template_template_module__WEBPACK_IMPORTED_MODULE_1__.TemplateModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ng_chartjs__WEBPACK_IMPORTED_MODULE_16__.NgChartjsModule, _client_client_module__WEBPACK_IMPORTED_MODULE_7__.ClientModule, _leads_leads_module__WEBPACK_IMPORTED_MODULE_8__.LeadsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_4__.CommonLayoutComponent, _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_5__.FullLayoutComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__.NzBreadCrumbModule, _shared_template_template_module__WEBPACK_IMPORTED_MODULE_1__.TemplateModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ng_chartjs__WEBPACK_IMPORTED_MODULE_16__.NgChartjsModule, _client_client_module__WEBPACK_IMPORTED_MODULE_7__.ClientModule, _leads_leads_module__WEBPACK_IMPORTED_MODULE_8__.LeadsModule]
  });
})();

/***/ }),

/***/ 6932:
/*!***********************************************************!*\
  !*** ./src/app/client/add-client/add-client.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddClientComponent": () => (/* binding */ AddClientComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/client/client.service */ 1412);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class AddClientComponent {
  constructor(fb, httpService, router) {
    this.fb = fb;
    this.httpService = httpService;
    this.router = router;
    this.insertClient = this.fb.group({
      fname: [''],
      lname: [''],
      username: [''],
      password: [''],
      streetAddress: [''],
      city: [''],
      state: [''],
      zip: [''],
      dateOfBirth: [''],
      gender: [''],
      email: [''],
      role: [''],
      adminURL: [''],
      siteURL: [''],
      services: ['']
    });
    this.testVariable = [];
  }
  onClickSubmitClientData() {
    console.warn(this.insertClient.value);
    this.httpService.addClient(this.insertClient.value).subscribe(d => {
      console.log('Added new User');
      // todo need to figure out where to redirect this call
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    }, () => {});
  }
  ngOnInit() {}
}
AddClientComponent.ɵfac = function AddClientComponent_Factory(t) {
  return new (t || AddClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_0__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
AddClientComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AddClientComponent,
  selectors: [["app-add-client"]],
  decls: 98,
  vars: 1,
  consts: [[2, "padding", "13px"], ["id", "wrapper"], ["id", "content-wrapper", 1, "d-flex", "flex-column"], ["id", "content"], [1, "container-fluid"], [1, "d-sm-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "text-dark", "mb-0"], ["role", "button", "href", "#", 1, "btn", "btn-primary", "btn-sm", "d-none", "d-sm-inline-block"], [1, "fas", "fa-download", "fa-sm", "text-white-50"], [1, "container"], [1, "card", "card-register", "mx-auto", "mt-5"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "form-row"], [1, "col-md-6"], [1, "form-label-group"], ["type", "text", "id", "firstName", "formControlName", "fname", "placeholder", "First name", "required", "required", "autofocus", "autofocus", 1, "form-control"], ["for", "firstName"], ["type", "text", "id", "lastName", "placeholder", "lname", "required", "required", "formControlName", "lname", 1, "form-control"], ["for", "lastName"], ["type", "email", "id", "inputEmail", "formControlName", "email", "placeholder", "Email address", "required", "required", 1, "form-control"], ["for", "inputEmail"], ["type", "text", "id", "username", "formControlName", "username", "placeholder", "User Name", "required", "required", 1, "form-control"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Password", "required", "required", 1, "form-control"], ["type", "text", "id", "address", "formControlName", "address", "placeholder", "Street Address", "required", "required", 1, "form-control"], ["type", "text", "id", "city", "formControlName", "city", "placeholder", "city", "required", "required", 1, "form-control"], ["type", "text", "id", "state", "formControlName", "state", "placeholder", "state", "required", "required", 1, "form-control"], ["type", "text", "id", "zip", "formControlName", "zip", "placeholder", "zip", 1, "form-control"], ["type", "text", "id", "dateOfBirth", "formControlName", "dateOfBirth", "placeholder", "dateOfBirth", "required", "required", 1, "form-control"], ["type", "text", "id", "role", "formControlName", "role", "placeholder", "role", "required", "required", 1, "form-control"], ["type", "text", "id", "services", "formControlName", "services", "placeholder", "services", 1, "form-control"], ["type", "text", "id", "adminURL", "formControlName", "adminURL", "placeholder", "adminURL", 1, "form-control"], ["type", "text", "id", "siteURL", "formControlName", "siteURL", "placeholder", "siteURL", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-shadow"], [1, "text-center"], ["href", "login.html", 1, "d-block", "small", "mt-3"], ["href", "forgot-password.html", 1, "d-block", "small"]],
  template: function AddClientComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Add Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u00A0Generate Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div")(12, "div", 9)(13, "div", 10)(14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Register an Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12)(17, "form", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddClientComponent_Template_form_ngSubmit_17_listener() {
        return ctx.onClickSubmitClientData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "First name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16)(26, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Last name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14)(31, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14)(36, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "User Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 14)(41, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 14)(46, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 14)(51, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "city");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 14)(56, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "state");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 14)(61, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "zipcode");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 14)(66, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "dateOfBirth");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Role");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 14)(75, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 14)(80, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "adminURL");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 14)(85, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "siteURL");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "LOGIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 36)(92, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Login Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.insertClient);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1917:
/*!*****************************************************************!*\
  !*** ./src/app/client/client-assets/client-assets.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientAssetsComponent": () => (/* binding */ ClientAssetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_client_client_assets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/client/client-assets.service */ 735);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class ClientAssetsComponent {
  constructor(fb, httpService, router) {
    this.fb = fb;
    this.httpService = httpService;
    this.router = router;
    this.insertAdminUrl = this.fb.group({
      url: [''],
      email: ['']
    });
    this.testVariable = [];
  }
  onClickSubmitClientData() {
    console.warn(this.insertAdminUrl.value);
    this.httpService.addAdminUrl(this.insertAdminUrl.value).subscribe(d => {
      console.log('Added new Admin URL');
      // todo need to figure out where to redirect this call
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    }, () => {});
  }
  ngOnInit() {}
}
ClientAssetsComponent.ɵfac = function ClientAssetsComponent_Factory(t) {
  return new (t || ClientAssetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_client_client_assets_service__WEBPACK_IMPORTED_MODULE_0__.ClientAssetsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
ClientAssetsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ClientAssetsComponent,
  selectors: [["app-client-assets"]],
  decls: 3853,
  vars: 0,
  consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["content", "Responsive bootstrap 4 admin template", "name", "description"], ["content", "Coderthemes", "name", "author"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["rel", "shortcut icon", "href", "assets/images/favicon.ico"], ["id", "topnav"], [1, "wrapper"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "page-title"], [1, "card-box"], [1, "header-title"], [1, "sub-header"], ["id", "datatable", 1, "table", "table-bordered", "dt-responsive", "nowrap", 2, "border-collapse", "collapse", "border-spacing", "0", "width", "100%"], ["id", "datatable-buttons", 1, "table", "table-striped", "table-bordered", "dt-responsive", "nowrap", 2, "border-collapse", "collapse", "border-spacing", "0", "width", "100%"], ["id", "key-table", 1, "table", "table-bordered", "dt-responsive", "nowrap", 2, "border-collapse", "collapse", "border-spacing", "0", "width", "100%"], ["id", "responsive-datatable", 1, "table", "table-bordered", "table-bordered", "dt-responsive", "nowrap", 2, "border-collapse", "collapse", "border-spacing", "0", "width", "100%"], ["id", "selection-datatable", 1, "table", "table-bordered", "dt-responsive", "nowrap", 2, "border-collapse", "collapse", "border-spacing", "0", "width", "100%"]],
  template: function ClientAssetsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "head");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "meta", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Datatables | Uplon - Responsive Bootstrap 4 Admin Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "meta", 1)(5, "meta", 2)(6, "meta", 3)(7, "meta", 4)(8, "link", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "body")(10, "header", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " @@include('./partials/topbar.html') @@include('./partials/horizontal-nav.html') ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "ol", 13)(19, "li", 14)(20, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Uplon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 14)(23, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Tables");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Data Tables");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h4", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Data Tables");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 9)(30, "div", 10)(31, "div", 18)(32, "h4", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Default Example");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " / Rene es un hijo de putaDataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "$().DataTable();");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "table", 21)(40, "thead")(41, "tr")(42, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Position");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Office");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Start date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Salary");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "tbody")(55, "tr")(56, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Tiger Nixon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "System Architect");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "61");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "2011/04/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "$320,800");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tr")(69, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Garrett Winters");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Accountant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "63");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "2011/07/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "$170,750");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "tr")(82, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Ashton Cox");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Junior Technical Author");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "66");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "2009/01/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "$86,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "tr")(95, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Cedric Kelly");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Senior Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "2012/03/29");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "$433,060");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "tr")(108, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Airi Satou");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Accountant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "2008/11/28");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "$162,700");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "tr")(121, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Brielle Williamson");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Integration Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "61");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "2012/12/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "$372,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "tr")(134, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Herrod Chandler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Sales Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "2012/08/06");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "$137,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "tr")(147, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Rhona Davidson");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Integration Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "2010/10/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "$327,900");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "tr")(160, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Colleen Hurst");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "39");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "2009/09/15");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "$205,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "tr")(173, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Sonya Frost");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "23");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "2008/12/13");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "$103,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "tr")(186, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Jena Gaines");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "2008/12/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "$90,560");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "tr")(199, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Quinn Flynn");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Support Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "2013/03/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "$342,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "tr")(212, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Charde Marshall");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "2008/10/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "$470,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "tr")(225, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Haley Kennedy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Senior Marketing Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "2012/12/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "$313,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "tr")(238, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Tatyana Fitzpatrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "19");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "2010/03/17");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "$385,750");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "tr")(251, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "Michael Silva");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "Marketing Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "66");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "2012/11/27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "$198,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "tr")(264, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "Paul Byrd");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "Chief Financial Officer (CFO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "2010/06/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "$725,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "tr")(277, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "Gloria Little");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "Systems Administrator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "2009/04/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "$237,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "tr")(290, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, "Bradley Greer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, "2012/10/13");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "$132,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "tr")(303, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Dai Rios");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "Personnel Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "2012/09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, "$217,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "tr")(316, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Jenette Caldwell");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319, "Development Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, "2011/09/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "$345,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "tr")(329, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, "Yuri Berry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Chief Marketing Officer (CMO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "2009/06/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, "$675,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "tr")(342, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "Caesar Vance");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, "Pre-Sales Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "21");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, "2011/12/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, "$106,450");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "tr")(355, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "Doris Wilder");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "Sales Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "Sidney");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, "23");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, "2010/09/20");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, "$85,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "tr")(368, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](369, "Angelica Ramos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](371, "Chief Executive Officer (CEO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](373, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](375, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, "2009/10/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](379, "$1,200,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "tr")(381, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](382, "Gavin Joyce");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](388, "42");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](390, "2010/12/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "$92,575");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "tr")(394, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](395, "Jennifer Chang");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](397, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](399, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](401, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](403, "2010/11/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "$357,650");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "tr")(407, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](408, "Brenden Wagner");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](412, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](414, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](416, "2011/06/07");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](418, "$206,850");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "tr")(420, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](421, "Fiona Green");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, "Chief Operating Officer (COO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](427, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](429, "2010/03/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](431, "$850,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "tr")(433, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](434, "Shou Itou");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](436, "Regional Marketing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](438, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](440, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](441, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](442, "2011/08/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](444, "$163,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "tr")(446, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](447, "Michelle House");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](449, "Integration Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](451, "Sidney");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](453, "37");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](455, "2011/06/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](457, "$95,400");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "tr")(459, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, "Suki Burks");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](462, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](464, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](466, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](467, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](468, "2009/10/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](469, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](470, "$114,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](471, "tr")(472, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](473, "Prescott Bartlett");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](474, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](475, "Technical Author");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](477, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](478, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](479, "27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](480, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](481, "2011/05/07");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](482, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](483, "$145,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "tr")(485, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](486, "Gavin Cortez");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](487, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](488, "Team Leader");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](489, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](490, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](491, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](492, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](494, "2008/10/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](496, "$235,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "tr")(498, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](499, "Martena Mccray");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](500, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](501, "Post-Sales support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](502, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](503, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](504, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](505, "46");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](507, "2011/03/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](509, "$324,050");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](510, "tr")(511, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](512, "Unity Butler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](514, "Marketing Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](515, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](516, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](517, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](518, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](520, "2009/12/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](522, "$85,675");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "tr")(524, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](525, "Howard Hatfield");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](526, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](527, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](528, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](529, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](530, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](531, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](532, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](533, "2008/12/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](534, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](535, "$164,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](536, "tr")(537, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](538, "Hope Fuentes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](540, "Secretary");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](541, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](542, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](543, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](544, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](545, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](546, "2010/02/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](547, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](548, "$109,850");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](549, "tr")(550, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](551, "Vivian Harrell");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](552, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](553, "Financial Controller");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](554, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](555, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](556, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](557, "62");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](558, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](559, "2009/02/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](560, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](561, "$452,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](562, "tr")(563, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](564, "Timothy Mooney");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](565, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](566, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](567, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](568, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](569, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](570, "37");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](571, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](572, "2008/12/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](573, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](574, "$136,200");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](575, "tr")(576, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](577, "Jackson Bradshaw");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](578, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](579, "Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](580, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](581, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](582, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](583, "65");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](584, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](585, "2008/09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](586, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](587, "$645,750");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](588, "tr")(589, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](590, "Olivia Liang");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](591, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](592, "Support Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](593, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](594, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](595, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](596, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](597, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](598, "2011/02/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](599, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](600, "$234,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](601, "tr")(602, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](603, "Bruno Nash");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](604, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](605, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](606, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](607, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](608, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](609, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](610, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](611, "2011/05/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](612, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](613, "$163,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](614, "tr")(615, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](616, "Sakura Yamamoto");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](617, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](618, "Support Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](619, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](620, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](621, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](622, "37");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](623, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](624, "2009/08/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](625, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](626, "$139,575");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](627, "tr")(628, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](629, "Thor Walton");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](630, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](631, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](632, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](633, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](634, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](635, "61");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](636, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](637, "2013/08/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](638, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](639, "$98,540");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](640, "tr")(641, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](642, "Finn Camacho");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](643, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](644, "Support Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](645, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](646, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](647, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](648, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](649, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](650, "2009/07/07");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](651, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](652, "$87,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](653, "tr")(654, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](655, "Serge Baldwin");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](656, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](657, "Data Coordinator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](658, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](659, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](660, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](661, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](662, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](663, "2012/04/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](664, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](665, "$138,575");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](666, "tr")(667, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](668, "Zenaida Frank");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](669, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](670, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](671, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](672, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](673, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](674, "63");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](675, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](676, "2010/01/04");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](677, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](678, "$125,250");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](679, "tr")(680, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](681, "Zorita Serrano");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](682, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](683, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](684, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](685, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](686, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](687, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](688, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](689, "2012/06/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](690, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](691, "$115,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](692, "tr")(693, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](694, "Jennifer Acosta");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](695, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](696, "Junior Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](697, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](698, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](699, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](700, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](701, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](702, "2013/02/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](703, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](704, "$75,650");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](705, "tr")(706, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](707, "Cara Stevens");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](708, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](709, "Sales Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](710, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](711, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](712, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](713, "46");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](714, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](715, "2011/12/06");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](716, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](717, "$145,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](718, "tr")(719, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](720, "Hermione Butler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](721, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](722, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](723, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](724, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](725, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](726, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](727, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](728, "2011/03/21");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](729, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](730, "$356,250");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](731, "tr")(732, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](733, "Lael Greer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](734, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](735, "Systems Administrator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](736, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](737, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](738, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](739, "21");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](740, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](741, "2009/02/27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](742, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](743, "$103,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](744, "tr")(745, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](746, "Jonas Alexander");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](747, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](748, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](749, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](750, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](751, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](752, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](753, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](754, "2010/07/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](755, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](756, "$86,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](757, "tr")(758, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](759, "Shad Decker");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](760, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](761, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](762, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](763, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](764, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](765, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](766, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](767, "2008/11/13");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](768, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](769, "$183,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](770, "tr")(771, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](772, "Michael Bruce");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](773, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](774, "Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](775, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](776, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](777, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](778, "29");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](779, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](780, "2011/06/27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](781, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](782, "$183,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](783, "tr")(784, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](785, "Donna Snider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](786, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](787, "Customer Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](788, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](789, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](790, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](791, "27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](792, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](793, "2011/01/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](794, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](795, "$112,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](796, "div", 9)(797, "div", 10)(798, "div", 18)(799, "h4", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](800, "Buttons example");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](801, "p", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](802, " The Buttons extension for DataTables provides a common set of options, API methods and styling to display buttons on a page that will interact with a DataTable. The core library provides the based framework upon which plug-ins can built. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](803, "table", 22)(804, "thead")(805, "tr")(806, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](807, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](808, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](809, "Position");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](810, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](811, "Office");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](812, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](813, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](814, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](815, "Start date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](816, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](817, "Salary");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](818, "tbody")(819, "tr")(820, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](821, "Tiger Nixon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](822, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](823, "System Architect");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](824, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](825, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](826, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](827, "61");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](828, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](829, "2011/04/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](830, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](831, "$320,800");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](832, "tr")(833, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](834, "Garrett Winters");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](835, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](836, "Accountant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](837, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](838, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](839, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](840, "63");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](841, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](842, "2011/07/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](843, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](844, "$170,750");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](845, "tr")(846, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](847, "Ashton Cox");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](848, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](849, "Junior Technical Author");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](850, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](851, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](852, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](853, "66");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](854, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](855, "2009/01/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](856, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](857, "$86,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](858, "tr")(859, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](860, "Cedric Kelly");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](861, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](862, "Senior Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](863, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](864, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](865, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](866, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](867, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](868, "2012/03/29");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](869, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](870, "$433,060");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](871, "tr")(872, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](873, "Airi Satou");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](874, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](875, "Accountant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](876, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](877, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](878, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](879, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](880, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](881, "2008/11/28");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](882, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](883, "$162,700");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](884, "tr")(885, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](886, "Brielle Williamson");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](887, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](888, "Integration Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](889, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](890, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](891, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](892, "61");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](893, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](894, "2012/12/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](895, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](896, "$372,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](897, "tr")(898, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](899, "Herrod Chandler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](900, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](901, "Sales Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](902, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](903, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](904, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](905, "59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](906, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](907, "2012/08/06");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](908, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](909, "$137,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](910, "tr")(911, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](912, "Rhona Davidson");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](913, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](914, "Integration Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](915, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](916, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](917, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](918, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](919, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](920, "2010/10/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](921, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](922, "$327,900");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](923, "tr")(924, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](925, "Colleen Hurst");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](926, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](927, "Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](928, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](929, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](930, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](931, "39");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](932, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](933, "2009/09/15");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](934, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](935, "$205,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](936, "tr")(937, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](938, "Sonya Frost");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](939, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](940, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](941, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](942, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](943, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](944, "23");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](945, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](946, "2008/12/13");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](947, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](948, "$103,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](949, "tr")(950, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](951, "Jena Gaines");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](952, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](953, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](954, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](955, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](956, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](957, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](958, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](959, "2008/12/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](960, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](961, "$90,560");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](962, "tr")(963, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](964, "Quinn Flynn");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](965, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](966, "Support Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](967, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](968, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](969, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](970, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](971, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](972, "2013/03/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](973, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](974, "$342,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](975, "tr")(976, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](977, "Charde Marshall");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](978, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](979, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](980, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](981, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](982, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](983, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](984, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](985, "2008/10/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](986, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](987, "$470,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](988, "tr")(989, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](990, "Haley Kennedy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](991, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](992, "Senior Marketing Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](993, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](994, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](995, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](996, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](997, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](998, "2012/12/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](999, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1000, "$313,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1001, "tr")(1002, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1003, "Tatyana Fitzpatrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1004, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1005, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1006, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1007, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1008, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1009, "19");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1010, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1011, "2010/03/17");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1012, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1013, "$385,750");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1014, "tr")(1015, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1016, "Michael Silva");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1017, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1018, "Marketing Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1019, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1020, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1021, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1022, "66");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1023, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1024, "2012/11/27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1025, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1026, "$198,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1027, "tr")(1028, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1029, "Paul Byrd");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1030, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1031, "Chief Financial Officer (CFO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1032, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1033, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1034, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1035, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1036, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1037, "2010/06/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1038, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1039, "$725,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1040, "tr")(1041, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1042, "Gloria Little");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1043, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1044, "Systems Administrator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1045, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1046, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1047, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1048, "59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1049, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1050, "2009/04/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1051, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1052, "$237,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1053, "tr")(1054, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1055, "Bradley Greer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1056, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1057, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1058, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1059, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1060, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1061, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1062, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1063, "2012/10/13");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1064, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1065, "$132,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1066, "tr")(1067, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1068, "Dai Rios");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1069, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1070, "Personnel Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1071, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1072, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1073, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1074, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1075, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1076, "2012/09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1077, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1078, "$217,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1079, "tr")(1080, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1081, "Jenette Caldwell");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1082, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1083, "Development Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1084, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1085, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1086, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1087, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1088, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1089, "2011/09/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1090, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1091, "$345,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1092, "tr")(1093, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1094, "Yuri Berry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1095, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1096, "Chief Marketing Officer (CMO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1097, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1098, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1099, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1100, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1101, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1102, "2009/06/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1103, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1104, "$675,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1105, "tr")(1106, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1107, "Caesar Vance");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1108, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1109, "Pre-Sales Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1110, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1111, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1112, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1113, "21");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1114, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1115, "2011/12/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1116, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1117, "$106,450");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1118, "tr")(1119, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1120, "Doris Wilder");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1121, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1122, "Sales Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1123, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1124, "Sidney");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1125, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1126, "23");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1127, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1128, "2010/09/20");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1129, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1130, "$85,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1131, "tr")(1132, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1133, "Angelica Ramos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1134, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1135, "Chief Executive Officer (CEO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1136, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1137, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1138, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1139, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1140, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1141, "2009/10/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1142, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1143, "$1,200,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1144, "tr")(1145, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1146, "Gavin Joyce");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1147, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1148, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1149, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1150, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1151, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1152, "42");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1153, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1154, "2010/12/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1155, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1156, "$92,575");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1157, "tr")(1158, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1159, "Jennifer Chang");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1160, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1161, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1162, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1163, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1164, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1165, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1166, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1167, "2010/11/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1168, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1169, "$357,650");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1170, "tr")(1171, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1172, "Brenden Wagner");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1173, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1174, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1175, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1176, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1177, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1178, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1179, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1180, "2011/06/07");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1181, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1182, "$206,850");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1183, "tr")(1184, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1185, "Fiona Green");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1186, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1187, "Chief Operating Officer (COO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1188, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1189, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1190, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1191, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1192, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1193, "2010/03/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1194, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1195, "$850,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1196, "tr")(1197, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1198, "Shou Itou");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1199, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1200, "Regional Marketing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1201, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1202, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1203, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1204, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1205, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1206, "2011/08/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1207, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1208, "$163,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1209, "tr")(1210, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1211, "Michelle House");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1212, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1213, "Integration Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1214, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1215, "Sidney");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1216, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1217, "37");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1218, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1219, "2011/06/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1220, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1221, "$95,400");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1222, "tr")(1223, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1224, "Suki Burks");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1225, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1226, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1227, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1228, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1229, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1230, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1231, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1232, "2009/10/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1233, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1234, "$114,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1235, "tr")(1236, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1237, "Prescott Bartlett");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1238, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1239, "Technical Author");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1240, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1241, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1242, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1243, "27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1244, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1245, "2011/05/07");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1246, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1247, "$145,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1248, "tr")(1249, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1250, "Gavin Cortez");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1251, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1252, "Team Leader");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1253, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1254, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1255, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1256, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1257, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1258, "2008/10/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1259, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1260, "$235,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1261, "tr")(1262, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1263, "Martena Mccray");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1264, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1265, "Post-Sales support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1266, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1267, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1268, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1269, "46");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1270, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1271, "2011/03/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1272, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1273, "$324,050");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1274, "tr")(1275, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1276, "Unity Butler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1277, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1278, "Marketing Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1279, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1280, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1281, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1282, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1283, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1284, "2009/12/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1285, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1286, "$85,675");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1287, "tr")(1288, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1289, "Howard Hatfield");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1290, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1291, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1292, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1293, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1294, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1295, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1296, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1297, "2008/12/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1298, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1299, "$164,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1300, "tr")(1301, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1302, "Hope Fuentes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1303, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1304, "Secretary");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1305, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1306, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1307, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1308, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1309, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1310, "2010/02/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1311, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1312, "$109,850");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1313, "tr")(1314, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1315, "Vivian Harrell");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1316, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1317, "Financial Controller");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1318, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1319, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1320, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1321, "62");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1322, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1323, "2009/02/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1324, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1325, "$452,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1326, "tr")(1327, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1328, "Timothy Mooney");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1329, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1330, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1331, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1332, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1333, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1334, "37");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1335, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1336, "2008/12/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1337, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1338, "$136,200");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1339, "tr")(1340, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1341, "Jackson Bradshaw");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1342, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1343, "Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1344, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1345, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1346, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1347, "65");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1348, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1349, "2008/09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1350, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1351, "$645,750");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1352, "tr")(1353, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1354, "Olivia Liang");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1355, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1356, "Support Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1357, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1358, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1359, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1360, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1361, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1362, "2011/02/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1363, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1364, "$234,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1365, "tr")(1366, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1367, "Bruno Nash");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1368, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1369, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1370, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1371, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1372, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1373, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1374, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1375, "2011/05/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1376, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1377, "$163,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1378, "tr")(1379, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1380, "Sakura Yamamoto");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1381, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1382, "Support Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1383, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1384, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1385, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1386, "37");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1387, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1388, "2009/08/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1389, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1390, "$139,575");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1391, "tr")(1392, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1393, "Thor Walton");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1394, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1395, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1396, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1397, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1398, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1399, "61");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1400, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1401, "2013/08/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1402, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1403, "$98,540");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1404, "tr")(1405, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1406, "Finn Camacho");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1407, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1408, "Support Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1409, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1410, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1411, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1412, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1413, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1414, "2009/07/07");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1415, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1416, "$87,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1417, "tr")(1418, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1419, "Serge Baldwin");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1420, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1421, "Data Coordinator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1422, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1423, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1424, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1425, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1426, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1427, "2012/04/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1428, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1429, "$138,575");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1430, "tr")(1431, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1432, "Zenaida Frank");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1433, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1434, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1435, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1436, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1437, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1438, "63");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1439, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1440, "2010/01/04");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1441, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1442, "$125,250");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1443, "tr")(1444, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1445, "Zorita Serrano");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1446, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1447, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1448, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1449, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1450, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1451, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1452, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1453, "2012/06/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1454, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1455, "$115,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1456, "tr")(1457, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1458, "Jennifer Acosta");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1459, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1460, "Junior Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1461, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1462, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1463, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1464, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1465, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1466, "2013/02/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1467, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1468, "$75,650");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1469, "tr")(1470, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1471, "Cara Stevens");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1472, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1473, "Sales Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1474, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1475, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1476, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1477, "46");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1478, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1479, "2011/12/06");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1480, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1481, "$145,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1482, "tr")(1483, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1484, "Hermione Butler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1485, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1486, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1487, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1488, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1489, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1490, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1491, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1492, "2011/03/21");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1493, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1494, "$356,250");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1495, "tr")(1496, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1497, "Lael Greer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1498, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1499, "Systems Administrator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1500, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1501, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1502, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1503, "21");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1504, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1505, "2009/02/27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1506, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1507, "$103,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1508, "tr")(1509, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1510, "Jonas Alexander");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1511, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1512, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1513, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1514, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1515, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1516, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1517, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1518, "2010/07/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1519, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1520, "$86,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1521, "tr")(1522, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1523, "Shad Decker");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1524, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1525, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1526, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1527, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1528, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1529, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1530, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1531, "2008/11/13");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1532, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1533, "$183,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1534, "tr")(1535, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1536, "Michael Bruce");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1537, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1538, "Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1539, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1540, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1541, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1542, "29");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1543, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1544, "2011/06/27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1545, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1546, "$183,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1547, "tr")(1548, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1549, "Donna Snider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1550, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1551, "Customer Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1552, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1553, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1554, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1555, "27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1556, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1557, "2011/01/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1558, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1559, "$112,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1560, "div", 9)(1561, "div", 10)(1562, "div", 18)(1563, "h4", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1564, "KeyTable example");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1565, "p", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1566, " KeyTable provides Excel like cell navigation on any table. Events (focus, blur, action etc) can be assigned to individual cells, columns, rows or all cells. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1567, "table", 23)(1568, "thead")(1569, "tr")(1570, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1571, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1572, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1573, "Position");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1574, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1575, "Office");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1576, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1577, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1578, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1579, "Start date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1580, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1581, "Salary");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1582, "tbody")(1583, "tr")(1584, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1585, "Tiger Nixon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1586, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1587, "System Architect");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1588, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1589, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1590, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1591, "61");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1592, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1593, "2011/04/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1594, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1595, "$320,800");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1596, "tr")(1597, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1598, "Garrett Winters");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1599, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1600, "Accountant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1601, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1602, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1603, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1604, "63");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1605, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1606, "2011/07/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1607, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1608, "$170,750");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1609, "tr")(1610, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1611, "Ashton Cox");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1612, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1613, "Junior Technical Author");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1614, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1615, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1616, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1617, "66");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1618, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1619, "2009/01/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1620, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1621, "$86,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1622, "tr")(1623, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1624, "Cedric Kelly");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1625, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1626, "Senior Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1627, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1628, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1629, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1630, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1631, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1632, "2012/03/29");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1633, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1634, "$433,060");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1635, "tr")(1636, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1637, "Airi Satou");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1638, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1639, "Accountant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1640, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1641, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1642, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1643, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1644, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1645, "2008/11/28");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1646, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1647, "$162,700");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1648, "tr")(1649, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1650, "Brielle Williamson");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1651, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1652, "Integration Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1653, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1654, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1655, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1656, "61");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1657, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1658, "2012/12/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1659, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1660, "$372,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1661, "tr")(1662, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1663, "Herrod Chandler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1664, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1665, "Sales Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1666, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1667, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1668, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1669, "59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1670, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1671, "2012/08/06");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1672, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1673, "$137,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1674, "tr")(1675, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1676, "Rhona Davidson");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1677, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1678, "Integration Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1679, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1680, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1681, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1682, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1683, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1684, "2010/10/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1685, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1686, "$327,900");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1687, "tr")(1688, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1689, "Colleen Hurst");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1690, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1691, "Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1692, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1693, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1694, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1695, "39");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1696, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1697, "2009/09/15");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1698, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1699, "$205,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1700, "tr")(1701, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1702, "Sonya Frost");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1703, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1704, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1705, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1706, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1707, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1708, "23");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1709, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1710, "2008/12/13");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1711, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1712, "$103,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1713, "tr")(1714, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1715, "Jena Gaines");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1716, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1717, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1718, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1719, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1720, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1721, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1722, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1723, "2008/12/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1724, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1725, "$90,560");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1726, "tr")(1727, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1728, "Quinn Flynn");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1729, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1730, "Support Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1731, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1732, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1733, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1734, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1735, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1736, "2013/03/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1737, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1738, "$342,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1739, "tr")(1740, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1741, "Charde Marshall");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1742, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1743, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1744, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1745, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1746, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1747, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1748, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1749, "2008/10/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1750, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1751, "$470,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1752, "tr")(1753, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1754, "Haley Kennedy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1755, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1756, "Senior Marketing Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1757, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1758, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1759, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1760, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1761, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1762, "2012/12/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1763, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1764, "$313,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1765, "tr")(1766, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1767, "Tatyana Fitzpatrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1768, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1769, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1770, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1771, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1772, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1773, "19");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1774, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1775, "2010/03/17");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1776, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1777, "$385,750");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1778, "tr")(1779, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1780, "Michael Silva");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1781, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1782, "Marketing Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1783, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1784, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1785, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1786, "66");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1787, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1788, "2012/11/27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1789, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1790, "$198,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1791, "tr")(1792, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1793, "Paul Byrd");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1794, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1795, "Chief Financial Officer (CFO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1796, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1797, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1798, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1799, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1800, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1801, "2010/06/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1802, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1803, "$725,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1804, "tr")(1805, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1806, "Gloria Little");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1807, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1808, "Systems Administrator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1809, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1810, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1811, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1812, "59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1813, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1814, "2009/04/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1815, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1816, "$237,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1817, "tr")(1818, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1819, "Bradley Greer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1820, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1821, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1822, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1823, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1824, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1825, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1826, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1827, "2012/10/13");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1828, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1829, "$132,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1830, "tr")(1831, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1832, "Dai Rios");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1833, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1834, "Personnel Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1835, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1836, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1837, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1838, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1839, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1840, "2012/09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1841, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1842, "$217,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1843, "tr")(1844, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1845, "Jenette Caldwell");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1846, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1847, "Development Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1848, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1849, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1850, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1851, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1852, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1853, "2011/09/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1854, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1855, "$345,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1856, "tr")(1857, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1858, "Yuri Berry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1859, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1860, "Chief Marketing Officer (CMO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1861, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1862, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1863, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1864, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1865, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1866, "2009/06/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1867, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1868, "$675,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1869, "tr")(1870, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1871, "Caesar Vance");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1872, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1873, "Pre-Sales Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1874, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1875, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1876, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1877, "21");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1878, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1879, "2011/12/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1880, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1881, "$106,450");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1882, "tr")(1883, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1884, "Doris Wilder");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1885, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1886, "Sales Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1887, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1888, "Sidney");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1889, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1890, "23");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1891, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1892, "2010/09/20");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1893, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1894, "$85,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1895, "tr")(1896, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1897, "Angelica Ramos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1898, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1899, "Chief Executive Officer (CEO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1900, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1901, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1902, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1903, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1904, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1905, "2009/10/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1906, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1907, "$1,200,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1908, "tr")(1909, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1910, "Gavin Joyce");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1911, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1912, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1913, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1914, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1915, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1916, "42");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1917, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1918, "2010/12/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1919, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1920, "$92,575");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1921, "tr")(1922, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1923, "Jennifer Chang");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1924, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1925, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1926, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1927, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1928, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1929, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1930, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1931, "2010/11/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1932, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1933, "$357,650");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1934, "tr")(1935, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1936, "Brenden Wagner");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1937, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1938, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1939, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1940, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1941, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1942, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1943, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1944, "2011/06/07");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1945, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1946, "$206,850");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1947, "tr")(1948, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1949, "Fiona Green");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1950, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1951, "Chief Operating Officer (COO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1952, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1953, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1954, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1955, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1956, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1957, "2010/03/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1958, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1959, "$850,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1960, "tr")(1961, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1962, "Shou Itou");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1963, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1964, "Regional Marketing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1965, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1966, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1967, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1968, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1969, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1970, "2011/08/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1971, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1972, "$163,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1973, "tr")(1974, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1975, "Michelle House");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1976, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1977, "Integration Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1978, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1979, "Sidney");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1980, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1981, "37");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1982, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1983, "2011/06/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1984, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1985, "$95,400");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1986, "tr")(1987, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1988, "Suki Burks");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1989, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1990, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1991, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1992, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1993, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1994, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1995, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1996, "2009/10/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1997, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1998, "$114,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1999, "tr")(2000, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2001, "Prescott Bartlett");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2002, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2003, "Technical Author");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2004, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2005, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2006, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2007, "27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2008, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2009, "2011/05/07");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2010, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2011, "$145,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2012, "tr")(2013, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2014, "Gavin Cortez");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2015, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2016, "Team Leader");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2017, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2018, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2019, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2020, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2021, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2022, "2008/10/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2023, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2024, "$235,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2025, "tr")(2026, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2027, "Martena Mccray");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2028, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2029, "Post-Sales support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2030, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2031, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2032, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2033, "46");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2034, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2035, "2011/03/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2036, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2037, "$324,050");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2038, "tr")(2039, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2040, "Unity Butler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2041, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2042, "Marketing Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2043, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2044, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2045, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2046, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2047, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2048, "2009/12/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2049, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2050, "$85,675");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2051, "tr")(2052, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2053, "Howard Hatfield");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2054, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2055, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2056, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2057, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2058, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2059, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2060, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2061, "2008/12/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2062, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2063, "$164,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2064, "tr")(2065, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2066, "Hope Fuentes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2067, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2068, "Secretary");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2069, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2070, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2071, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2072, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2073, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2074, "2010/02/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2075, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2076, "$109,850");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2077, "tr")(2078, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2079, "Vivian Harrell");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2080, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2081, "Financial Controller");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2082, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2083, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2084, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2085, "62");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2086, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2087, "2009/02/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2088, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2089, "$452,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2090, "tr")(2091, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2092, "Timothy Mooney");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2093, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2094, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2095, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2096, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2097, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2098, "37");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2099, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2100, "2008/12/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2101, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2102, "$136,200");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2103, "tr")(2104, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2105, "Jackson Bradshaw");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2106, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2107, "Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2108, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2109, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2110, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2111, "65");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2112, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2113, "2008/09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2114, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2115, "$645,750");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2116, "tr")(2117, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2118, "Olivia Liang");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2119, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2120, "Support Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2121, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2122, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2123, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2124, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2125, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2126, "2011/02/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2127, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2128, "$234,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2129, "tr")(2130, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2131, "Bruno Nash");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2132, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2133, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2134, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2135, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2136, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2137, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2138, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2139, "2011/05/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2140, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2141, "$163,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2142, "tr")(2143, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2144, "Sakura Yamamoto");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2145, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2146, "Support Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2147, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2148, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2149, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2150, "37");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2151, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2152, "2009/08/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2153, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2154, "$139,575");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2155, "tr")(2156, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2157, "Thor Walton");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2158, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2159, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2160, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2161, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2162, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2163, "61");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2164, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2165, "2013/08/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2166, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2167, "$98,540");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2168, "tr")(2169, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2170, "Finn Camacho");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2171, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2172, "Support Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2173, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2174, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2175, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2176, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2177, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2178, "2009/07/07");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2179, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2180, "$87,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2181, "tr")(2182, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2183, "Serge Baldwin");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2184, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2185, "Data Coordinator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2186, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2187, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2188, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2189, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2190, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2191, "2012/04/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2192, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2193, "$138,575");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2194, "tr")(2195, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2196, "Zenaida Frank");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2197, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2198, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2199, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2200, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2201, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2202, "63");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2203, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2204, "2010/01/04");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2205, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2206, "$125,250");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2207, "tr")(2208, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2209, "Zorita Serrano");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2210, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2211, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2212, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2213, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2214, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2215, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2216, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2217, "2012/06/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2218, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2219, "$115,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2220, "tr")(2221, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2222, "Jennifer Acosta");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2223, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2224, "Junior Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2225, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2226, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2227, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2228, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2229, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2230, "2013/02/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2231, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2232, "$75,650");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2233, "tr")(2234, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2235, "Cara Stevens");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2236, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2237, "Sales Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2238, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2239, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2240, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2241, "46");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2242, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2243, "2011/12/06");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2244, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2245, "$145,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2246, "tr")(2247, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2248, "Hermione Butler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2249, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2250, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2251, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2252, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2253, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2254, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2255, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2256, "2011/03/21");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2257, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2258, "$356,250");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2259, "tr")(2260, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2261, "Lael Greer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2262, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2263, "Systems Administrator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2264, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2265, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2266, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2267, "21");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2268, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2269, "2009/02/27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2270, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2271, "$103,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2272, "tr")(2273, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2274, "Jonas Alexander");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2275, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2276, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2277, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2278, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2279, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2280, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2281, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2282, "2010/07/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2283, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2284, "$86,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2285, "tr")(2286, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2287, "Shad Decker");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2288, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2289, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2290, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2291, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2292, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2293, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2294, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2295, "2008/11/13");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2296, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2297, "$183,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2298, "tr")(2299, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2300, "Michael Bruce");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2301, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2302, "Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2303, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2304, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2305, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2306, "29");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2307, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2308, "2011/06/27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2309, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2310, "$183,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2311, "tr")(2312, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2313, "Donna Snider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2314, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2315, "Customer Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2316, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2317, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2318, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2319, "27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2320, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2321, "2011/01/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2322, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2323, "$112,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2324, "div", 9)(2325, "div", 10)(2326, "div", 18)(2327, "h4", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2328, "Responsive example");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2329, "p", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2330, " Responsive is an extension for DataTables that resolves that problem by optimising the table's layout for different screen sizes through the dynamic insertion and removal of columns from the table. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2331, "table", 24)(2332, "thead")(2333, "tr")(2334, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2335, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2336, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2337, "Position");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2338, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2339, "Office");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2340, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2341, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2342, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2343, "Start date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2344, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2345, "Salary");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2346, "tbody")(2347, "tr")(2348, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2349, "Tiger Nixon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2350, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2351, "System Architect");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2352, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2353, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2354, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2355, "61");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2356, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2357, "2011/04/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2358, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2359, "$320,800");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2360, "tr")(2361, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2362, "Garrett Winters");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2363, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2364, "Accountant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2365, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2366, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2367, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2368, "63");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2369, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2370, "2011/07/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2371, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2372, "$170,750");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2373, "tr")(2374, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2375, "Ashton Cox");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2376, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2377, "Junior Technical Author");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2378, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2379, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2380, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2381, "66");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2382, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2383, "2009/01/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2384, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2385, "$86,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2386, "tr")(2387, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2388, "Cedric Kelly");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2389, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2390, "Senior Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2391, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2392, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2393, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2394, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2395, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2396, "2012/03/29");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2397, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2398, "$433,060");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2399, "tr")(2400, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2401, "Airi Satou");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2402, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2403, "Accountant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2404, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2405, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2406, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2407, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2408, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2409, "2008/11/28");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2410, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2411, "$162,700");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2412, "tr")(2413, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2414, "Brielle Williamson");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2415, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2416, "Integration Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2417, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2418, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2419, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2420, "61");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2421, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2422, "2012/12/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2423, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2424, "$372,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2425, "tr")(2426, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2427, "Herrod Chandler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2428, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2429, "Sales Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2430, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2431, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2432, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2433, "59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2434, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2435, "2012/08/06");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2436, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2437, "$137,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2438, "tr")(2439, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2440, "Rhona Davidson");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2441, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2442, "Integration Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2443, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2444, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2445, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2446, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2447, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2448, "2010/10/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2449, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2450, "$327,900");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2451, "tr")(2452, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2453, "Colleen Hurst");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2454, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2455, "Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2456, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2457, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2458, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2459, "39");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2460, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2461, "2009/09/15");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2462, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2463, "$205,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2464, "tr")(2465, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2466, "Sonya Frost");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2467, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2468, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2469, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2470, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2471, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2472, "23");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2473, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2474, "2008/12/13");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2475, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2476, "$103,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2477, "tr")(2478, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2479, "Jena Gaines");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2480, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2481, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2482, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2483, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2484, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2485, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2486, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2487, "2008/12/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2488, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2489, "$90,560");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2490, "tr")(2491, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2492, "Quinn Flynn");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2493, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2494, "Support Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2495, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2496, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2497, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2498, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2499, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2500, "2013/03/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2501, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2502, "$342,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2503, "tr")(2504, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2505, "Charde Marshall");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2506, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2507, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2508, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2509, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2510, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2511, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2512, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2513, "2008/10/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2514, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2515, "$470,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2516, "tr")(2517, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2518, "Haley Kennedy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2519, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2520, "Senior Marketing Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2521, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2522, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2523, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2524, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2525, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2526, "2012/12/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2527, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2528, "$313,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2529, "tr")(2530, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2531, "Tatyana Fitzpatrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2532, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2533, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2534, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2535, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2536, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2537, "19");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2538, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2539, "2010/03/17");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2540, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2541, "$385,750");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2542, "tr")(2543, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2544, "Michael Silva");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2545, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2546, "Marketing Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2547, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2548, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2549, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2550, "66");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2551, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2552, "2012/11/27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2553, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2554, "$198,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2555, "tr")(2556, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2557, "Paul Byrd");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2558, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2559, "Chief Financial Officer (CFO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2560, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2561, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2562, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2563, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2564, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2565, "2010/06/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2566, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2567, "$725,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2568, "tr")(2569, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2570, "Gloria Little");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2571, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2572, "Systems Administrator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2573, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2574, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2575, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2576, "59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2577, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2578, "2009/04/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2579, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2580, "$237,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2581, "tr")(2582, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2583, "Bradley Greer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2584, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2585, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2586, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2587, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2588, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2589, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2590, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2591, "2012/10/13");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2592, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2593, "$132,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2594, "tr")(2595, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2596, "Dai Rios");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2597, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2598, "Personnel Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2599, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2600, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2601, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2602, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2603, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2604, "2012/09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2605, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2606, "$217,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2607, "tr")(2608, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2609, "Jenette Caldwell");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2610, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2611, "Development Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2612, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2613, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2614, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2615, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2616, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2617, "2011/09/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2618, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2619, "$345,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2620, "tr")(2621, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2622, "Yuri Berry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2623, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2624, "Chief Marketing Officer (CMO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2625, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2626, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2627, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2628, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2629, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2630, "2009/06/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2631, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2632, "$675,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2633, "tr")(2634, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2635, "Caesar Vance");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2636, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2637, "Pre-Sales Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2638, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2639, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2640, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2641, "21");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2642, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2643, "2011/12/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2644, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2645, "$106,450");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2646, "tr")(2647, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2648, "Doris Wilder");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2649, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2650, "Sales Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2651, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2652, "Sidney");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2653, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2654, "23");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2655, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2656, "2010/09/20");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2657, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2658, "$85,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2659, "tr")(2660, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2661, "Angelica Ramos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2662, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2663, "Chief Executive Officer (CEO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2664, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2665, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2666, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2667, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2668, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2669, "2009/10/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2670, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2671, "$1,200,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2672, "tr")(2673, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2674, "Gavin Joyce");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2675, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2676, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2677, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2678, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2679, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2680, "42");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2681, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2682, "2010/12/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2683, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2684, "$92,575");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2685, "tr")(2686, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2687, "Jennifer Chang");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2688, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2689, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2690, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2691, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2692, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2693, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2694, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2695, "2010/11/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2696, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2697, "$357,650");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2698, "tr")(2699, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2700, "Brenden Wagner");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2701, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2702, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2703, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2704, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2705, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2706, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2707, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2708, "2011/06/07");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2709, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2710, "$206,850");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2711, "tr")(2712, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2713, "Fiona Green");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2714, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2715, "Chief Operating Officer (COO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2716, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2717, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2718, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2719, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2720, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2721, "2010/03/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2722, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2723, "$850,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2724, "tr")(2725, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2726, "Shou Itou");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2727, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2728, "Regional Marketing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2729, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2730, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2731, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2732, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2733, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2734, "2011/08/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2735, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2736, "$163,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2737, "tr")(2738, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2739, "Michelle House");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2740, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2741, "Integration Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2742, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2743, "Sidney");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2744, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2745, "37");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2746, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2747, "2011/06/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2748, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2749, "$95,400");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2750, "tr")(2751, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2752, "Suki Burks");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2753, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2754, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2755, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2756, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2757, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2758, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2759, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2760, "2009/10/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2761, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2762, "$114,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2763, "tr")(2764, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2765, "Prescott Bartlett");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2766, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2767, "Technical Author");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2768, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2769, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2770, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2771, "27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2772, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2773, "2011/05/07");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2774, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2775, "$145,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2776, "tr")(2777, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2778, "Gavin Cortez");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2779, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2780, "Team Leader");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2781, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2782, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2783, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2784, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2785, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2786, "2008/10/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2787, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2788, "$235,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2789, "tr")(2790, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2791, "Martena Mccray");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2792, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2793, "Post-Sales support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2794, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2795, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2796, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2797, "46");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2798, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2799, "2011/03/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2800, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2801, "$324,050");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2802, "tr")(2803, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2804, "Unity Butler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2805, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2806, "Marketing Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2807, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2808, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2809, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2810, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2811, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2812, "2009/12/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2813, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2814, "$85,675");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2815, "tr")(2816, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2817, "Howard Hatfield");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2818, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2819, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2820, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2821, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2822, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2823, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2824, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2825, "2008/12/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2826, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2827, "$164,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2828, "tr")(2829, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2830, "Hope Fuentes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2831, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2832, "Secretary");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2833, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2834, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2835, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2836, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2837, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2838, "2010/02/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2839, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2840, "$109,850");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2841, "tr")(2842, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2843, "Vivian Harrell");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2844, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2845, "Financial Controller");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2846, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2847, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2848, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2849, "62");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2850, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2851, "2009/02/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2852, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2853, "$452,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2854, "tr")(2855, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2856, "Timothy Mooney");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2857, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2858, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2859, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2860, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2861, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2862, "37");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2863, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2864, "2008/12/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2865, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2866, "$136,200");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2867, "tr")(2868, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2869, "Jackson Bradshaw");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2870, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2871, "Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2872, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2873, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2874, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2875, "65");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2876, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2877, "2008/09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2878, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2879, "$645,750");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2880, "tr")(2881, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2882, "Olivia Liang");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2883, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2884, "Support Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2885, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2886, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2887, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2888, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2889, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2890, "2011/02/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2891, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2892, "$234,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2893, "tr")(2894, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2895, "Bruno Nash");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2896, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2897, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2898, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2899, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2900, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2901, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2902, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2903, "2011/05/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2904, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2905, "$163,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2906, "tr")(2907, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2908, "Sakura Yamamoto");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2909, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2910, "Support Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2911, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2912, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2913, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2914, "37");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2915, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2916, "2009/08/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2917, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2918, "$139,575");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2919, "tr")(2920, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2921, "Thor Walton");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2922, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2923, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2924, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2925, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2926, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2927, "61");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2928, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2929, "2013/08/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2930, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2931, "$98,540");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2932, "tr")(2933, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2934, "Finn Camacho");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2935, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2936, "Support Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2937, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2938, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2939, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2940, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2941, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2942, "2009/07/07");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2943, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2944, "$87,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2945, "tr")(2946, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2947, "Serge Baldwin");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2948, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2949, "Data Coordinator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2950, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2951, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2952, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2953, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2954, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2955, "2012/04/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2956, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2957, "$138,575");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2958, "tr")(2959, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2960, "Zenaida Frank");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2961, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2962, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2963, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2964, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2965, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2966, "63");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2967, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2968, "2010/01/04");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2969, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2970, "$125,250");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2971, "tr")(2972, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2973, "Zorita Serrano");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2974, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2975, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2976, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2977, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2978, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2979, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2980, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2981, "2012/06/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2982, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2983, "$115,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2984, "tr")(2985, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2986, "Jennifer Acosta");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2987, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2988, "Junior Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2989, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2990, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2991, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2992, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2993, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2994, "2013/02/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2995, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2996, "$75,650");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2997, "tr")(2998, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2999, "Cara Stevens");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3000, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3001, "Sales Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3002, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3003, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3004, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3005, "46");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3006, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3007, "2011/12/06");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3008, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3009, "$145,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3010, "tr")(3011, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3012, "Hermione Butler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3013, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3014, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3015, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3016, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3017, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3018, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3019, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3020, "2011/03/21");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3021, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3022, "$356,250");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3023, "tr")(3024, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3025, "Lael Greer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3026, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3027, "Systems Administrator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3028, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3029, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3030, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3031, "21");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3032, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3033, "2009/02/27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3034, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3035, "$103,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3036, "tr")(3037, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3038, "Jonas Alexander");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3039, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3040, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3041, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3042, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3043, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3044, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3045, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3046, "2010/07/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3047, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3048, "$86,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3049, "tr")(3050, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3051, "Shad Decker");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3052, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3053, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3054, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3055, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3056, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3057, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3058, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3059, "2008/11/13");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3060, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3061, "$183,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3062, "tr")(3063, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3064, "Michael Bruce");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3065, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3066, "Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3067, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3068, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3069, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3070, "29");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3071, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3072, "2011/06/27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3073, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3074, "$183,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3075, "tr")(3076, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3077, "Donna Snider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3078, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3079, "Customer Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3080, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3081, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3082, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3083, "27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3084, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3085, "2011/01/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3086, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3087, "$112,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3088, "div", 9)(3089, "div", 10)(3090, "div", 18)(3091, "h4", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3092, "Multi item selection");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3093, "p", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3094, " This example shows the multi option. Note how a click on a row will toggle its selected state without effecting other rows, unlike the os and single options shown in other examples. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3095, "table", 25)(3096, "thead")(3097, "tr")(3098, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3099, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3100, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3101, "Position");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3102, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3103, "Office");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3104, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3105, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3106, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3107, "Start date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3108, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3109, "Salary");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3110, "tbody")(3111, "tr")(3112, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3113, "Tiger Nixon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3114, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3115, "System Architect");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3116, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3117, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3118, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3119, "61");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3120, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3121, "2011/04/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3122, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3123, "$320,800");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3124, "tr")(3125, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3126, "Garrett Winters");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3127, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3128, "Accountant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3129, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3130, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3131, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3132, "63");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3133, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3134, "2011/07/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3135, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3136, "$170,750");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3137, "tr")(3138, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3139, "Ashton Cox");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3140, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3141, "Junior Technical Author");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3142, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3143, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3144, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3145, "66");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3146, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3147, "2009/01/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3148, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3149, "$86,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3150, "tr")(3151, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3152, "Cedric Kelly");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3153, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3154, "Senior Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3155, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3156, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3157, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3158, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3159, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3160, "2012/03/29");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3161, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3162, "$433,060");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3163, "tr")(3164, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3165, "Airi Satou");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3166, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3167, "Accountant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3168, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3169, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3170, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3171, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3172, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3173, "2008/11/28");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3174, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3175, "$162,700");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3176, "tr")(3177, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3178, "Brielle Williamson");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3179, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3180, "Integration Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3181, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3182, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3183, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3184, "61");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3185, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3186, "2012/12/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3187, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3188, "$372,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3189, "tr")(3190, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3191, "Herrod Chandler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3192, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3193, "Sales Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3194, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3195, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3196, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3197, "59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3198, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3199, "2012/08/06");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3200, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3201, "$137,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3202, "tr")(3203, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3204, "Rhona Davidson");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3205, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3206, "Integration Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3207, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3208, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3209, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3210, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3211, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3212, "2010/10/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3213, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3214, "$327,900");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3215, "tr")(3216, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3217, "Colleen Hurst");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3218, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3219, "Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3220, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3221, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3222, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3223, "39");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3224, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3225, "2009/09/15");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3226, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3227, "$205,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3228, "tr")(3229, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3230, "Sonya Frost");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3231, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3232, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3233, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3234, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3235, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3236, "23");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3237, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3238, "2008/12/13");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3239, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3240, "$103,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3241, "tr")(3242, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3243, "Jena Gaines");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3244, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3245, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3246, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3247, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3248, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3249, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3250, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3251, "2008/12/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3252, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3253, "$90,560");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3254, "tr")(3255, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3256, "Quinn Flynn");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3257, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3258, "Support Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3259, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3260, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3261, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3262, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3263, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3264, "2013/03/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3265, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3266, "$342,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3267, "tr")(3268, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3269, "Charde Marshall");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3270, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3271, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3272, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3273, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3274, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3275, "36");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3276, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3277, "2008/10/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3278, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3279, "$470,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3280, "tr")(3281, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3282, "Haley Kennedy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3283, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3284, "Senior Marketing Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3285, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3286, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3287, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3288, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3289, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3290, "2012/12/18");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3291, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3292, "$313,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3293, "tr")(3294, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3295, "Tatyana Fitzpatrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3296, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3297, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3298, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3299, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3300, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3301, "19");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3302, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3303, "2010/03/17");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3304, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3305, "$385,750");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3306, "tr")(3307, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3308, "Michael Silva");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3309, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3310, "Marketing Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3311, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3312, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3313, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3314, "66");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3315, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3316, "2012/11/27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3317, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3318, "$198,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3319, "tr")(3320, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3321, "Paul Byrd");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3322, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3323, "Chief Financial Officer (CFO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3324, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3325, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3326, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3327, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3328, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3329, "2010/06/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3330, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3331, "$725,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3332, "tr")(3333, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3334, "Gloria Little");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3335, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3336, "Systems Administrator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3337, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3338, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3339, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3340, "59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3341, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3342, "2009/04/10");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3343, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3344, "$237,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3345, "tr")(3346, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3347, "Bradley Greer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3348, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3349, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3350, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3351, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3352, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3353, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3354, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3355, "2012/10/13");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3356, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3357, "$132,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3358, "tr")(3359, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3360, "Dai Rios");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3361, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3362, "Personnel Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3363, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3364, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3365, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3366, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3367, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3368, "2012/09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3369, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3370, "$217,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3371, "tr")(3372, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3373, "Jenette Caldwell");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3374, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3375, "Development Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3376, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3377, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3378, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3379, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3380, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3381, "2011/09/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3382, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3383, "$345,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3384, "tr")(3385, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3386, "Yuri Berry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3387, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3388, "Chief Marketing Officer (CMO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3389, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3390, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3391, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3392, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3393, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3394, "2009/06/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3395, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3396, "$675,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3397, "tr")(3398, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3399, "Caesar Vance");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3400, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3401, "Pre-Sales Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3402, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3403, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3404, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3405, "21");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3406, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3407, "2011/12/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3408, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3409, "$106,450");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3410, "tr")(3411, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3412, "Doris Wilder");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3413, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3414, "Sales Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3415, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3416, "Sidney");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3417, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3418, "23");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3419, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3420, "2010/09/20");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3421, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3422, "$85,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3423, "tr")(3424, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3425, "Angelica Ramos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3426, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3427, "Chief Executive Officer (CEO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3428, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3429, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3430, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3431, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3432, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3433, "2009/10/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3434, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3435, "$1,200,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3436, "tr")(3437, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3438, "Gavin Joyce");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3439, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3440, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3441, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3442, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3443, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3444, "42");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3445, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3446, "2010/12/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3447, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3448, "$92,575");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3449, "tr")(3450, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3451, "Jennifer Chang");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3452, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3453, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3454, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3455, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3456, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3457, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3458, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3459, "2010/11/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3460, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3461, "$357,650");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3462, "tr")(3463, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3464, "Brenden Wagner");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3465, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3466, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3467, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3468, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3469, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3470, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3471, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3472, "2011/06/07");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3473, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3474, "$206,850");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3475, "tr")(3476, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3477, "Fiona Green");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3478, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3479, "Chief Operating Officer (COO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3480, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3481, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3482, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3483, "48");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3484, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3485, "2010/03/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3486, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3487, "$850,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3488, "tr")(3489, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3490, "Shou Itou");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3491, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3492, "Regional Marketing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3493, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3494, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3495, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3496, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3497, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3498, "2011/08/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3499, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3500, "$163,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3501, "tr")(3502, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3503, "Michelle House");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3504, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3505, "Integration Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3506, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3507, "Sidney");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3508, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3509, "37");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3510, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3511, "2011/06/02");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3512, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3513, "$95,400");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3514, "tr")(3515, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3516, "Suki Burks");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3517, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3518, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3519, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3520, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3521, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3522, "53");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3523, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3524, "2009/10/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3525, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3526, "$114,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3527, "tr")(3528, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3529, "Prescott Bartlett");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3530, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3531, "Technical Author");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3532, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3533, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3534, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3535, "27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3536, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3537, "2011/05/07");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3538, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3539, "$145,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3540, "tr")(3541, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3542, "Gavin Cortez");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3543, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3544, "Team Leader");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3545, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3546, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3547, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3548, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3549, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3550, "2008/10/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3551, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3552, "$235,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3553, "tr")(3554, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3555, "Martena Mccray");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3556, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3557, "Post-Sales support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3558, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3559, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3560, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3561, "46");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3562, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3563, "2011/03/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3564, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3565, "$324,050");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3566, "tr")(3567, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3568, "Unity Butler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3569, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3570, "Marketing Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3571, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3572, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3573, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3574, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3575, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3576, "2009/12/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3577, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3578, "$85,675");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3579, "tr")(3580, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3581, "Howard Hatfield");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3582, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3583, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3584, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3585, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3586, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3587, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3588, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3589, "2008/12/16");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3590, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3591, "$164,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3592, "tr")(3593, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3594, "Hope Fuentes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3595, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3596, "Secretary");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3597, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3598, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3599, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3600, "41");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3601, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3602, "2010/02/12");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3603, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3604, "$109,850");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3605, "tr")(3606, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3607, "Vivian Harrell");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3608, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3609, "Financial Controller");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3610, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3611, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3612, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3613, "62");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3614, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3615, "2009/02/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3616, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3617, "$452,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3618, "tr")(3619, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3620, "Timothy Mooney");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3621, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3622, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3623, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3624, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3625, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3626, "37");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3627, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3628, "2008/12/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3629, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3630, "$136,200");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3631, "tr")(3632, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3633, "Jackson Bradshaw");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3634, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3635, "Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3636, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3637, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3638, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3639, "65");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3640, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3641, "2008/09/26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3642, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3643, "$645,750");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3644, "tr")(3645, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3646, "Olivia Liang");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3647, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3648, "Support Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3649, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3650, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3651, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3652, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3653, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3654, "2011/02/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3655, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3656, "$234,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3657, "tr")(3658, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3659, "Bruno Nash");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3660, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3661, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3662, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3663, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3664, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3665, "38");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3666, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3667, "2011/05/03");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3668, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3669, "$163,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3670, "tr")(3671, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3672, "Sakura Yamamoto");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3673, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3674, "Support Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3675, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3676, "Tokyo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3677, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3678, "37");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3679, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3680, "2009/08/19");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3681, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3682, "$139,575");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3683, "tr")(3684, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3685, "Thor Walton");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3686, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3687, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3688, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3689, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3690, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3691, "61");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3692, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3693, "2013/08/11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3694, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3695, "$98,540");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3696, "tr")(3697, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3698, "Finn Camacho");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3699, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3700, "Support Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3701, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3702, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3703, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3704, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3705, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3706, "2009/07/07");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3707, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3708, "$87,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3709, "tr")(3710, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3711, "Serge Baldwin");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3712, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3713, "Data Coordinator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3714, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3715, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3716, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3717, "64");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3718, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3719, "2012/04/09");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3720, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3721, "$138,575");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3722, "tr")(3723, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3724, "Zenaida Frank");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3725, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3726, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3727, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3728, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3729, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3730, "63");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3731, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3732, "2010/01/04");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3733, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3734, "$125,250");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3735, "tr")(3736, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3737, "Zorita Serrano");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3738, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3739, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3740, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3741, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3742, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3743, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3744, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3745, "2012/06/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3746, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3747, "$115,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3748, "tr")(3749, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3750, "Jennifer Acosta");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3751, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3752, "Junior Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3753, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3754, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3755, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3756, "43");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3757, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3758, "2013/02/01");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3759, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3760, "$75,650");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3761, "tr")(3762, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3763, "Cara Stevens");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3764, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3765, "Sales Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3766, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3767, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3768, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3769, "46");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3770, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3771, "2011/12/06");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3772, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3773, "$145,600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3774, "tr")(3775, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3776, "Hermione Butler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3777, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3778, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3779, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3780, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3781, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3782, "47");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3783, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3784, "2011/03/21");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3785, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3786, "$356,250");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3787, "tr")(3788, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3789, "Lael Greer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3790, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3791, "Systems Administrator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3792, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3793, "London");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3794, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3795, "21");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3796, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3797, "2009/02/27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3798, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3799, "$103,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3800, "tr")(3801, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3802, "Jonas Alexander");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3803, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3804, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3805, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3806, "San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3807, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3808, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3809, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3810, "2010/07/14");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3811, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3812, "$86,500");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3813, "tr")(3814, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3815, "Shad Decker");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3816, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3817, "Regional Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3818, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3819, "Edinburgh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3820, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3821, "51");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3822, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3823, "2008/11/13");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3824, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3825, "$183,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3826, "tr")(3827, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3828, "Michael Bruce");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3829, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3830, "Javascript Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3831, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3832, "Singapore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3833, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3834, "29");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3835, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3836, "2011/06/27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3837, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3838, "$183,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3839, "tr")(3840, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3841, "Donna Snider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3842, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3843, "Customer Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3844, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3845, "New York");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3846, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3847, "27");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3848, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3849, "2011/01/25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3850, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3851, "$112,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3852, " @@include('./partials/footer.html') @@include('./partials/right-sidebar.html') ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3244:
/*!************************************************!*\
  !*** ./src/app/client/client-routes.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRoutes": () => (/* binding */ ClientRoutes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _view_client_view_client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-client/view-client.component */ 7662);
/* harmony import */ var _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-client/add-client.component */ 6932);
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/auth.guard */ 5197);
/* harmony import */ var _client_assets_client_assets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-assets/client-assets.component */ 1917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const clientRoutesModule = [{
  path: 'add',
  component: _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_1__.AddClientComponent,
  canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}, {
  path: 'view',
  component: _view_client_view_client_component__WEBPACK_IMPORTED_MODULE_0__.ViewClientComponent,
  canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}, {
  path: 'admin-url',
  component: _client_assets_client_assets_component__WEBPACK_IMPORTED_MODULE_3__.ClientAssetsComponent,
  canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}];
class ClientRoutes {}
ClientRoutes.ɵfac = function ClientRoutes_Factory(t) {
  return new (t || ClientRoutes)();
};
ClientRoutes.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ClientRoutes
});
ClientRoutes.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(clientRoutesModule), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ClientRoutes, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 7808:
/*!*****************************************!*\
  !*** ./src/app/client/client.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientModule": () => (/* binding */ ClientModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-client/add-client.component */ 6932);
/* harmony import */ var _view_client_view_client_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-client/view-client.component */ 7662);
/* harmony import */ var _client_assets_client_assets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-assets/client-assets.component */ 1917);
/* harmony import */ var _client_routes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-routes.module */ 3244);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







class ClientModule {}
ClientModule.ɵfac = function ClientModule_Factory(t) {
  return new (t || ClientModule)();
};
ClientModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ClientModule
});
ClientModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _client_routes_module__WEBPACK_IMPORTED_MODULE_3__.ClientRoutes, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ClientModule, {
    declarations: [_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_0__.AddClientComponent, _view_client_view_client_component__WEBPACK_IMPORTED_MODULE_1__.ViewClientComponent, _client_assets_client_assets_component__WEBPACK_IMPORTED_MODULE_2__.ClientAssetsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _client_routes_module__WEBPACK_IMPORTED_MODULE_3__.ClientRoutes, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 7662:
/*!*************************************************************!*\
  !*** ./src/app/client/view-client/view-client.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewClientComponent": () => (/* binding */ ViewClientComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/client/client.service */ 1412);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function ViewClientComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const client_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](client_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](client_r1.userInfo.fname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](client_r1.userInfo.lname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](client_r1.userInfo.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](client_r1.userInfo.phoneNumber || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](client_r1.userInfo.address || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](client_r1.userInfo.city || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](client_r1.userInfo.state || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](client_r1.userInfo.zipcode || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](client_r1.userInfo.companyName || "NA");
  }
}
class ViewClientComponent {
  constructor(clientService) {
    this.clientService = clientService;
  }
  ngOnInit() {
    this.getAllClients();
  }
  getAllClients() {
    this.clientService.getClients().subscribe(data => {
      console.log('this is the getAllClients() that is giving me shit ');
      console.log(data);
      this.clients = data;
    });
  }
}
ViewClientComponent.ɵfac = function ViewClientComponent_Factory(t) {
  return new (t || ViewClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_0__.ClientService));
};
ViewClientComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ViewClientComponent,
  selectors: [["app-view-client"]],
  decls: 32,
  vars: 1,
  consts: [[1, "col-lg-12", "col-md-12", "mb-4"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]],
  template: function ViewClientComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Striped Rows");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 4)(6, "thead")(7, "tr")(8, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "ID#");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "First");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Last");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "phoneNumber");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Street Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "city");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "state");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "zipcode");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "companyName");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "address");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ViewClientComponent_tr_31_Template, 21, 10, "tr", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.clients);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9792:
/*!******************************************************************!*\
  !*** ./src/app/layouts/common-layout/common-layout.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonLayoutComponent": () => (/* binding */ CommonLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/theme-constant.service */ 7341);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 8667);
/* harmony import */ var _shared_template_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/template/header/header.component */ 7518);
/* harmony import */ var _shared_template_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/template/side-nav/side-nav.component */ 4567);
/* harmony import */ var _shared_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/template/footer/footer.component */ 1461);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);











function CommonLayoutComponent_div_5_h4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const breadcrumbs_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](breadcrumbs_r3[breadcrumbs_r3.length - 1].label);
  }
}
function CommonLayoutComponent_div_5_nz_breadcrumb_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-breadcrumb-item")(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const breadcrumb_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", breadcrumb_r4.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", breadcrumb_r4.label, " ");
  }
}
function CommonLayoutComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CommonLayoutComponent_div_5_h4_1_Template, 2, 1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-breadcrumb", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CommonLayoutComponent_div_5_nz_breadcrumb_item_5_Template, 3, 2, "nz-breadcrumb-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx_r0.breadcrumbs$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, ctx_r0.breadcrumbs$));
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    "is-folded": a0,
    "is-side-nav-dark": a1,
    "is-expand": a2
  };
};
class CommonLayoutComponent {
  constructor(router, activatedRoute, themeService) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.themeService = themeService;
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => {
      let child = this.activatedRoute.firstChild;
      while (child) {
        if (child.firstChild) {
          child = child.firstChild;
        } else if (child.snapshot.data && child.snapshot.data['headerDisplay']) {
          return child.snapshot.data['headerDisplay'];
        } else {
          return null;
        }
      }
      return null;
    })).subscribe(data => {
      this.contentHeaderDisplay = data;
    });
  }
  ngOnInit() {
    this.breadcrumbs$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(new _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd(0, '/', '/')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(data => this.buildBreadCrumb(this.activatedRoute.root)));
    this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
    this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
    this.themeService.selectedHeaderColor.subscribe(color => this.selectedHeaderColor = color);
    this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
  }
  buildBreadCrumb(route, url = '', breadcrumbs = []) {
    let label = '',
      path = '/',
      display = null;
    if (route.routeConfig) {
      if (route.routeConfig.data) {
        label = route.routeConfig.data['title'];
        path += route.routeConfig.path;
      }
    } else {
      label = 'Dashboard';
      path += 'dashboard';
    }
    const nextUrl = path && path !== '/dashboard' ? `${url}${path}` : url;
    const breadcrumb = {
      label: label,
      url: nextUrl
    };
    const newBreadcrumbs = label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
CommonLayoutComponent.ɵfac = function CommonLayoutComponent_Factory(t) {
  return new (t || CommonLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_0__.ThemeConstantService));
};
CommonLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CommonLayoutComponent,
  selectors: [["app-common-layout"]],
  decls: 8,
  vars: 9,
  consts: [[3, "ngClass"], [1, "page-container"], [1, "main-content"], ["class", "main-content-header", 4, "ngIf"], [1, "main-content-header"], ["class", "page-title", 4, "ngIf"], ["nzSeparator", ">"], ["nz-icon", "", "nzType", "home", 1, "m-r-5", "text-gray"], [4, "ngFor", "ngForOf"], [1, "page-title"], [3, "routerLink"]],
  template: function CommonLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-header")(2, "app-sidenav");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CommonLayoutComponent_div_5_Template, 7, 6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("common-layout ", "is-" + ctx.selectedHeaderColor, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](5, _c0, ctx.isFolded, ctx.isSideNavDark, ctx.isExpand));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.contentHeaderDisplay !== "none");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_11__.NzBreadCrumbComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_11__.NzBreadCrumbItemComponent, _shared_template_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _shared_template_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__.SideNavComponent, _shared_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 5681:
/*!**************************************************************!*\
  !*** ./src/app/layouts/full-layout/full-layout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullLayoutComponent": () => (/* binding */ FullLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class FullLayoutComponent {
  constructor() {}
}
FullLayoutComponent.ɵfac = function FullLayoutComponent_Factory(t) {
  return new (t || FullLayoutComponent)();
};
FullLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FullLayoutComponent,
  selectors: [["app-full-layout"]],
  decls: 1,
  vars: 0,
  template: function FullLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 2856:
/*!********************************************************!*\
  !*** ./src/app/leads/add-leads/add-leads.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLeadsComponent": () => (/* binding */ AddLeadsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_leads_leads_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/leads/leads.service */ 7458);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class AddLeadsComponent {
  constructor(fb, httpService, router) {
    this.fb = fb;
    this.httpService = httpService;
    this.router = router;
    this.title = "Add Leads";
    this.insertLead = this.fb.group({
      fname: [''],
      lname: [''],
      primaryPhoneNumber: [''],
      streetAddress: [''],
      city: [''],
      state: [''],
      zip: [''],
      email: [''],
      leadSource: [''],
      dateCreated: [''],
      market: [''],
      ownerName: [''],
      ownerMailingAddress: [''],
      numberOfBedrooms: [''],
      numberOfBathrooms: [''],
      aproxSqFt: [''],
      lotSizeSqFt: [''],
      yearBuilt: [''],
      houseType: [''],
      estimatedValue: [''],
      mortgageAmount: [''],
      mortgageDate: [''],
      texAssessedYear: [''],
      taxAssessedValue: [''],
      taxBilledAmount: [''],
      lastSoldDate: [''],
      lastSoldPrice: [''],
      priorSaleDate: [''],
      priorSalePrice: [''],
      isGarage: [''],
      isBasement: [''],
      expectedSalesPrice: [''],
      AllCashSellingPrice: [''],
      realEstateAgent: [''],
      currentMortgage: [''],
      sellTiming: [''],
      vacant: [''],
      sellReason: [''],
      delinquentRent: [''],
      whoPaysForUtilities: [''],
      vacantProperties: [''],
      managementCompany: [''],
      unitCount: [''],
      leaseType: [''],
      meteredUtilities: [''],
      ownershipLength: [''],
      taxes: [''],
      insurance: [''],
      unitMix: [''],
      freeAndClearProperty: [''],
      deferredMaintenance: [''],
      ownerFinancing: ['']
    });
    this.testVariable = [];
  }
  onClickSubmitClientData() {
    console.warn(this.insertLead.value);
    this.httpService.addLeads(this.insertLead.value).subscribe(d => {
      console.log('Added new Lead');
      //todo need to redirect to the leads view with kanban board.
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    }, () => {});
  }
  ngOnInit() {}
}
AddLeadsComponent.ɵfac = function AddLeadsComponent_Factory(t) {
  return new (t || AddLeadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_leads_leads_service__WEBPACK_IMPORTED_MODULE_0__.LeadsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
AddLeadsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AddLeadsComponent,
  selectors: [["app-add-leads"]],
  decls: 233,
  vars: 1,
  consts: [[2, "padding", "13px"], ["id", "wrapper"], ["id", "content-wrapper", 1, "d-flex", "flex-column"], ["id", "content"], [1, "container-fluid"], [1, "d-sm-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "container"], [1, "card", "card-register", "mx-auto", "mt-5"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "form-row"], [1, "col-md-6"], [1, "form-label-group"], ["type", "text", "id", "firstName", "formControlName", "fname", "placeholder", "First name", "required", "required", "autofocus", "autofocus", 1, "form-control"], ["for", "firstName"], ["type", "text", "id", "lastName", "placeholder", "lname", "required", "required", "formControlName", "lname", 1, "form-control"], ["for", "lastName"], ["type", "email", "id", "inputEmail", "formControlName", "email", "placeholder", "Email address", "required", "required", 1, "form-control"], ["for", "inputEmail"], ["type", "text", "id", "username", "formControlName", "leadSource", "placeholder", "User Name", "required", "required", 1, "form-control"], ["type", "password", "id", "market", "formControlName", "market", "placeholder", "market", "required", "required", 1, "form-control"], ["for", "market"], ["type", "text", "id", "streetAddress", "formControlName", "streetAddress", "placeholder", "Street Address", "required", "required", 1, "form-control"], ["type", "text", "id", "city", "formControlName", "city", "placeholder", "city", "required", "required", 1, "form-control"], ["type", "text", "id", "state", "formControlName", "state", "placeholder", "state", "required", "required", 1, "form-control"], ["type", "text", "id", "zip", "formControlName", "zip", "placeholder", "zip", 1, "form-control"], ["type", "text", "id", "numberOfBedrooms", "formControlName", "numberOfBedrooms", "placeholder", "numberOfBedrooms", 1, "form-control"], ["type", "text", "id", "numberOfBathrooms", "formControlName", "numberOfBathrooms", "placeholder", "numberOfBathrooms", 1, "form-control"], ["type", "text", "id", "aproxSqFt", "formControlName", "aproxSqFt", "placeholder", "aproxSqFt", 1, "form-control"], ["type", "text", "id", "lotSizeSqFt", "formControlName", "lotSizeSqFt", "placeholder", "lotSizeSqFt", 1, "form-control"], ["for", "lotSizeSqFt"], ["type", "text", "id", "yearBuilt", "formControlName", "yearBuilt", "placeholder", "yearBuilt", 1, "form-control"], ["for", "yearBuilt"], ["type", "text", "id", "houseType", "formControlName", "houseType", "placeholder", "houseType", 1, "form-control"], ["for", "houseType"], ["type", "text", "id", "estimatedValue", "formControlName", "estimatedValue", "placeholder", "estimatedValue", 1, "form-control"], ["for", "estimatedValue"], ["type", "text", "id", "mortgageAmount", "formControlName", "mortgageAmount", "placeholder", "mortgageAmount", 1, "form-control"], ["for", "mortgageAmount"], ["type", "text", "id", "mortgageDate", "formControlName", "mortgageDate", "placeholder", "mortgageDate", 1, "form-control"], ["for", "mortgageDate"], ["type", "text", "id", "texAssessedYear", "formControlName", "texAssessedYear", "placeholder", "texAssessedYear", 1, "form-control"], ["for", "texAssessedYear"], ["type", "text", "id", "taxAssessedValue", "formControlName", "taxAssessedValue", "placeholder", "taxAssessedValue", 1, "form-control"], ["for", "taxAssessedValue"], ["type", "text", "id", "taxBilledAmount", "formControlName", "taxBilledAmount", "placeholder", "taxBilledAmount", 1, "form-control"], ["for", "taxBilledAmount"], ["type", "text", "id", "lastSoldDate", "formControlName", "lastSoldDate", "placeholder", "lastSoldDate", 1, "form-control"], ["for", "lastSoldDate"], ["type", "text", "id", "priorSaleDate", "formControlName", "priorSaleDate", "placeholder", "priorSaleDate", 1, "form-control"], ["for", "priorSaleDate"], ["type", "text", "id", "isGarage", "formControlName", "isGarage", "placeholder", "isGarage", 1, "form-control"], ["for", "isGarage"], ["type", "text", "id", "AllCashSellingPrice", "formControlName", "AllCashSellingPrice", "placeholder", "AllCashSellingPrice", 1, "form-control"], ["for", "AllCashSellingPrice"], ["type", "text", "id", "realEstateAgent", "formControlName", "realEstateAgent", "placeholder", "realEstateAgent", 1, "form-control"], ["for", "realEstateAgent"], ["type", "text", "id", "currentMortgage", "formControlName", "currentMortgage", "placeholder", "currentMortgage", 1, "form-control"], ["for", "currentMortgage"], ["type", "text", "id", "sellTiming", "formControlName", "sellTiming", "placeholder", "sellTiming", 1, "form-control"], ["for", "sellTiming"], ["type", "text", "id", "vacant", "formControlName", "vacant", "placeholder", "vacant", 1, "form-control"], ["for", "vacant"], ["type", "text", "id", "sellReason", "formControlName", "sellReason", "placeholder", "sellReason", 1, "form-control"], ["for", "sellReason"], ["type", "text", "id", "delinquentRent", "formControlName", "delinquentRent", "placeholder", "delinquentRent", 1, "form-control"], ["for", "delinquentRent"], ["type", "text", "id", "whoPaysForUtilities", "formControlName", "whoPaysForUtilities", "placeholder", "whoPaysForUtilities", 1, "form-control"], ["for", "whoPaysForUtilities"], ["type", "text", "id", "vacantProperties", "formControlName", "vacantProperties", "placeholder", "vacantProperties", 1, "form-control"], ["for", "vacantProperties"], ["type", "text", "id", "managementCompany", "formControlName", "managementCompany", "placeholder", "managementCompany", 1, "form-control"], ["for", "managementCompany"], ["type", "text", "id", "leaseType", "formControlName", "leaseType", "placeholder", "leaseType", 1, "form-control"], ["for", "leaseType"], ["type", "text", "id", "meteredUtilities", "formControlName", "meteredUtilities", "placeholder", "meteredUtilities", 1, "form-control"], ["for", "meteredUtilities"], ["type", "text", "id", "ownershipLength", "formControlName", "ownershipLength", "placeholder", "ownershipLength", 1, "form-control"], ["for", "ownershipLength"], ["type", "text", "id", "taxes", "formControlName", "taxes", "placeholder", "taxes", 1, "form-control"], ["for", "taxes"], ["type", "text", "id", "insurance", "formControlName", "insurance", "placeholder", "insurance", 1, "form-control"], ["for", "insurance"], ["type", "text", "id", "unitMix", "formControlName", "unitMix", "placeholder", "unitMix", 1, "form-control"], ["for", "unitMix"], ["type", "text", "id", "freeAndClearProperty", "formControlName", "freeAndClearProperty", "placeholder", "freeAndClearProperty", 1, "form-control"], ["for", "freeAndClearProperty"], ["type", "text", "id", "deferredMaintenance", "formControlName", "deferredMaintenance", "placeholder", "deferredMaintenance", 1, "form-control"], ["for", "deferredMaintenance"], ["type", "text", "id", "ownerFinancing", "formControlName", "ownerFinancing", "placeholder", "ownerFinancing", 1, "form-control"], ["for", "ownerFinancing"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-shadow"]],
  template: function AddLeadsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "div", 6)(8, "div", 7)(9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Register an Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddLeadsComponent_Template_form_ngSubmit_12_listener() {
        return ctx.onClickSubmitClientData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "First name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13)(21, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Last name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11)(26, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 11)(31, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "leadSource");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 11)(36, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "market");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 11)(41, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Street Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 11)(46, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "city");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 11)(51, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "state");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 11)(56, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "zipcode");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 11)(61, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "numberOfBedrooms");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "numberOfBathrooms");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 11)(70, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "aproxSqFt");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 11)(75, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "lotSizeSqFt");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 11)(80, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "yearBuilt");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 11)(85, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "houseType");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 11)(90, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "estimatedValue");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 11)(95, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "mortgageAmount");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 11)(100, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "label", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "mortgageDate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 11)(105, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "texAssessedYear");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 11)(110, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "input", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "taxAssessedValue");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 11)(115, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "input", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "label", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "taxBilledAmount");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 11)(120, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "input", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "lastSoldDate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 11)(125, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "input", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "label", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "priorSaleDate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 11)(130, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "input", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "label", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "isGarage");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 11)(135, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "input", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "label", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "AllCashSellingPrice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 11)(140, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "input", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "realEstateAgent");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 11)(145, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "input", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "label", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "currentMortgage");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 11)(150, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "input", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "label", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "sellTiming");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 11)(155, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "input", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "label", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "vacant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 11)(160, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "input", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "label", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "sellReason");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 11)(165, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "input", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "label", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "delinquentRent");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 11)(170, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "input", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "label", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "whoPaysForUtilities");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 11)(175, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "input", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "label", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "vacantProperties");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 11)(180, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "input", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "label", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "managementCompany");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 11)(185, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "input", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "label", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "leaseType");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 11)(190, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "input", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "label", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "meteredUtilities");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 11)(195, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "label", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "ownershipLength");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 11)(200, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "input", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "label", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "taxes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 11)(205, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "label", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "insurance");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 11)(210, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "input", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "label", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "unitMix");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 11)(215, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "input", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "freeAndClearProperty");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 11)(220, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "input", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "label", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "deferredMaintenance");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 11)(225, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "input", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "label", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "ownerFinancing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "button", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Add lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](232, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.insertLead);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4440:
/*!**************************************************************!*\
  !*** ./src/app/leads/delete-leads/delete-leads.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteLeadsComponent": () => (/* binding */ DeleteLeadsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_leads_leads_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/leads/leads.service */ 7458);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class DeleteLeadsComponent {
  constructor(fb, httpService, router) {
    this.fb = fb;
    this.httpService = httpService;
    this.router = router;
    this.title = "Add Leads";
    this.insertLead = this.fb.group({
      fname: [''],
      lname: [''],
      primaryPhoneNumber: [''],
      streetAddress: [''],
      city: [''],
      state: [''],
      zip: [''],
      email: [''],
      leadSource: [''],
      dateCreated: [''],
      market: [''],
      ownerName: [''],
      ownerMailingAddress: [''],
      numberOfBedrooms: [''],
      numberOfBathrooms: [''],
      aproxSqFt: [''],
      lotSizeSqFt: [''],
      yearBuilt: [''],
      houseType: [''],
      estimatedValue: [''],
      mortgageAmount: [''],
      mortgageDate: [''],
      texAssessedYear: [''],
      taxAssessedValue: [''],
      taxBilledAmount: [''],
      lastSoldDate: [''],
      lastSoldPrice: [''],
      priorSaleDate: [''],
      priorSalePrice: [''],
      isGarage: [''],
      isBasement: [''],
      expectedSalesPrice: [''],
      AllCashSellingPrice: [''],
      realEstateAgent: [''],
      currentMortgage: [''],
      sellTiming: [''],
      vacant: [''],
      sellReason: [''],
      delinquentRent: [''],
      whoPaysForUtilities: [''],
      vacantProperties: [''],
      managementCompany: [''],
      unitCount: [''],
      leaseType: [''],
      meteredUtilities: [''],
      ownershipLength: [''],
      taxes: [''],
      insurance: [''],
      unitMix: [''],
      freeAndClearProperty: [''],
      deferredMaintenance: [''],
      ownerFinancing: ['']
    });
    this.testVariable = [];
  }
  ngOnInit() {}
  onClickDeleteLead() {
    console.warn(this.insertLead.value);
    this.httpService.addLeads(this.insertLead.value).subscribe(d => {
      console.log('Added new Lead');
      //todo need to redirect to the leads view with kanban board.
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    }, () => {});
  }
}
DeleteLeadsComponent.ɵfac = function DeleteLeadsComponent_Factory(t) {
  return new (t || DeleteLeadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_leads_leads_service__WEBPACK_IMPORTED_MODULE_0__.LeadsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
DeleteLeadsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DeleteLeadsComponent,
  selectors: [["app-delete-leads"]],
  decls: 2,
  vars: 0,
  template: function DeleteLeadsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "delete-leads works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6987:
/*!**********************************************!*\
  !*** ./src/app/leads/leads-routes.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadsRoutes": () => (/* binding */ LeadsRoutes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _add_leads_add_leads_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-leads/add-leads.component */ 2856);
/* harmony import */ var _read_leads_read_leads_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read-leads/read-leads.component */ 7416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const leadsRoutModule = [{
  path: 'addleads',
  component: _add_leads_add_leads_component__WEBPACK_IMPORTED_MODULE_0__.AddLeadsComponent
}, {
  path: 'readleads',
  component: _read_leads_read_leads_component__WEBPACK_IMPORTED_MODULE_1__.ReadLeadsComponent
}
// {path: 'add-leads', component: AddLeadsComponent},
// {path: 'add-leads', component: AddLeadsComponent}
];

class LeadsRoutes {}
LeadsRoutes.ɵfac = function LeadsRoutes_Factory(t) {
  return new (t || LeadsRoutes)();
};
LeadsRoutes.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: LeadsRoutes
});
LeadsRoutes.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(leadsRoutModule), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LeadsRoutes, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 7036:
/*!***************************************!*\
  !*** ./src/app/leads/leads.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadsModule": () => (/* binding */ LeadsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _add_leads_add_leads_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-leads/add-leads.component */ 2856);
/* harmony import */ var _delete_leads_delete_leads_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-leads/delete-leads.component */ 4440);
/* harmony import */ var _read_leads_read_leads_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read-leads/read-leads.component */ 7416);
/* harmony import */ var _update_leads_update_leads_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-leads/update-leads.component */ 7974);
/* harmony import */ var _leads_routes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leads-routes.module */ 6987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








class LeadsModule {}
LeadsModule.ɵfac = function LeadsModule_Factory(t) {
  return new (t || LeadsModule)();
};
LeadsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: LeadsModule
});
LeadsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _leads_routes_module__WEBPACK_IMPORTED_MODULE_4__.LeadsRoutes, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LeadsModule, {
    declarations: [_add_leads_add_leads_component__WEBPACK_IMPORTED_MODULE_0__.AddLeadsComponent, _delete_leads_delete_leads_component__WEBPACK_IMPORTED_MODULE_1__.DeleteLeadsComponent, _read_leads_read_leads_component__WEBPACK_IMPORTED_MODULE_2__.ReadLeadsComponent, _update_leads_update_leads_component__WEBPACK_IMPORTED_MODULE_3__.UpdateLeadsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _leads_routes_module__WEBPACK_IMPORTED_MODULE_4__.LeadsRoutes, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 7416:
/*!**********************************************************!*\
  !*** ./src/app/leads/read-leads/read-leads.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadLeadsComponent": () => (/* binding */ ReadLeadsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_leads_leads_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/leads/leads.service */ 7458);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function ReadLeadsComponent_tr_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const lead_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.id || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.fname || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.lname || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.email || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.phoneNumber || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.address || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.city || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.state || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.zipcode || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.companyName || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.ownerMailingAddress || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.realEstateAgent || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.priorSalePrice || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.priorSaleDate || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.lastSoldPrice || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.lastSoldDate || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.taxBilledAmount || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.taxAssessedValue || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.taxAssessedYear || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.mortgageDate || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.mortgageAmount || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.estimatedValue || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.houseType || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.yearBuilt || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.lotSizeSqFt || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.aproxSqFt || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.numberOfBathrooms || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.numberOfBedrooms || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.sellReason || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.delinquentRent || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.allCashSellingPrice || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.expectedSalesPrice || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.isBasement || "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lead_r1.isGarage || "NA");
  }
}
class ReadLeadsComponent {
  constructor(leadService) {
    this.leadService = leadService;
  }
  ngOnInit() {
    this.getAllLeads();
  }
  getAllLeads() {
    this.leadService.getLeads().subscribe(data => {
      console.log(data);
      this.leads = data;
    });
  }
}
ReadLeadsComponent.ɵfac = function ReadLeadsComponent_Factory(t) {
  return new (t || ReadLeadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_leads_leads_service__WEBPACK_IMPORTED_MODULE_0__.LeadsService));
};
ReadLeadsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ReadLeadsComponent,
  selectors: [["app-read-leads"]],
  decls: 77,
  vars: 1,
  consts: [[1, "col-lg-12", "col-md-12", "mb-4"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]],
  template: function ReadLeadsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Striped Rows");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 4)(6, "thead")(7, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ID#");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "First");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Last");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "phoneNumber");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Street Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "city");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "state");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "zipcode");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "companyName");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Owners Mailing address");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "realEstateAgent");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "priorSalePrice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "priorSaleDate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "lastSoldPrice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "lastSoldDate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "taxBilledAmount");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "taxAssessedValue");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "taxAssessedYear");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "mortgageDate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "mortgageAmount");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "estimatedValue");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "houseType");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "yearBuilt");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "lotSizeSqFt");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "aproxSqFt");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Number of Bathrooms");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Number of Bedrooms");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "sellReason");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "delinquentRent");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "allCashSellingPrice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "expectedSalesPrice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "isBasement");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "isGarage");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, ReadLeadsComponent_tr_76_Template, 69, 34, "tr", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.leads);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7974:
/*!**************************************************************!*\
  !*** ./src/app/leads/update-leads/update-leads.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateLeadsComponent": () => (/* binding */ UpdateLeadsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_leads_leads_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/leads/leads.service */ 7458);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class UpdateLeadsComponent {
  constructor(fb, httpService, router) {
    this.fb = fb;
    this.httpService = httpService;
    this.router = router;
    this.title = "Add Leads";
    this.insertLead = this.fb.group({
      fname: [''],
      lname: [''],
      primaryPhoneNumber: [''],
      streetAddress: [''],
      city: [''],
      state: [''],
      zip: [''],
      email: [''],
      leadSource: [''],
      dateCreated: [''],
      market: [''],
      ownerName: [''],
      ownerMailingAddress: [''],
      numberOfBedrooms: [''],
      numberOfBathrooms: [''],
      aproxSqFt: [''],
      lotSizeSqFt: [''],
      yearBuilt: [''],
      houseType: [''],
      estimatedValue: [''],
      mortgageAmount: [''],
      mortgageDate: [''],
      texAssessedYear: [''],
      taxAssessedValue: [''],
      taxBilledAmount: [''],
      lastSoldDate: [''],
      lastSoldPrice: [''],
      priorSaleDate: [''],
      priorSalePrice: [''],
      isGarage: [''],
      isBasement: [''],
      expectedSalesPrice: [''],
      AllCashSellingPrice: [''],
      realEstateAgent: [''],
      currentMortgage: [''],
      sellTiming: [''],
      vacant: [''],
      sellReason: [''],
      delinquentRent: [''],
      whoPaysForUtilities: [''],
      vacantProperties: [''],
      managementCompany: [''],
      unitCount: [''],
      leaseType: [''],
      meteredUtilities: [''],
      ownershipLength: [''],
      taxes: [''],
      insurance: [''],
      unitMix: [''],
      freeAndClearProperty: [''],
      deferredMaintenance: [''],
      ownerFinancing: ['']
    });
    this.testVariable = [];
  }
  onClickUpdateLead() {
    console.warn(this.insertLead.value);
    this.httpService.addLeads(this.insertLead.value).subscribe(d => {
      console.log('Added new Lead');
      //todo need to redirect to the leads view with kanban board.
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    }, () => {});
  }
  ngOnInit() {}
}
UpdateLeadsComponent.ɵfac = function UpdateLeadsComponent_Factory(t) {
  return new (t || UpdateLeadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_leads_leads_service__WEBPACK_IMPORTED_MODULE_0__.LeadsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
UpdateLeadsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: UpdateLeadsComponent,
  selectors: [["app-update-leads"]],
  decls: 2,
  vars: 0,
  template: function UpdateLeadsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "update-leads works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 17:
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/side-nav.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavDirective": () => (/* binding */ SideNavDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SideNavDirective {
  ngAfterViewChecked() {
    $('.side-nav .side-nav-menu:not(.ant-menu-inline-collapsed) li a').click(function (event) {
      if ($(this).parent().hasClass("ant-menu-submenu-open")) {
        $(this).parent().children('.dropdown-menu').slideUp(200, function () {
          $(this).parent().removeClass("ant-menu-submenu-open");
        });
      } else {
        $(this).parent().parent().children('li.ant-menu-submenu-open').children('.dropdown-menu').slideUp(100);
        $(this).parent().parent().children('li.ant-menu-submenu-open').children('a').removeClass('ant-menu-submenu-open');
        $(this).parent().parent().children('li.ant-menu-submenu-open').removeClass("ant-menu-submenu-open");
        $(this).parent().children('.dropdown-menu').slideDown(100, function () {
          $(this).parent().addClass("ant-menu-submenu-open");
        });
      }
    });
  }
}
SideNavDirective.ɵfac = function SideNavDirective_Factory(t) {
  return new (t || SideNavDirective)();
};
SideNavDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: SideNavDirective,
  selectors: [["", "sideNav", ""]]
});

/***/ }),

/***/ 6903:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPipe": () => (/* binding */ SearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SearchPipe {
  transform(value, keys, term) {
    if (!term) return value;
    return (value || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
  }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) {
  return new (t || SearchPipe)();
};
SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "search",
  type: SearchPipe,
  pure: true
});

/***/ }),

/***/ 5301:
/*!*******************************************************!*\
  !*** ./src/app/shared/routes/common-layout.routes.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonLayout_ROUTES": () => (/* binding */ CommonLayout_ROUTES)
/* harmony export */ });
const CommonLayout_ROUTES = [{
  path: 'dashboard',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../dashboard/dashboard.module */ 4814)).then(m => m.DashboardModule)
}, {
  path: 'client',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../client/client.module */ 7808)).then(m => m.ClientModule)
}, {
  path: 'leads',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../leads/leads.module */ 7036)).then(m => m.LeadsModule)
}];

/***/ }),

/***/ 578:
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullLayout_ROUTES": () => (/* binding */ FullLayout_ROUTES)
/* harmony export */ });
const FullLayout_ROUTES = [{
  path: 'authentication',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../authentication/authentication.module */ 1082)).then(m => m.AuthenticationModule)
}];

/***/ }),

/***/ 5998:
/*!************************************************************************!*\
  !*** ./src/app/shared/services/authentication/auth-service.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACCESS_CONTROL_ALLOW_HEADERS": () => (/* binding */ ACCESS_CONTROL_ALLOW_HEADERS),
/* harmony export */   "ACCESS_CONTROL_ALLOW_METHODS": () => (/* binding */ ACCESS_CONTROL_ALLOW_METHODS),
/* harmony export */   "ACCESS_CONTROL_ALLOW_ORIGIN": () => (/* binding */ ACCESS_CONTROL_ALLOW_ORIGIN),
/* harmony export */   "AUTHENTICATED_USER": () => (/* binding */ AUTHENTICATED_USER),
/* harmony export */   "AuthService": () => (/* binding */ AuthService),
/* harmony export */   "AuthenticationBean": () => (/* binding */ AuthenticationBean),
/* harmony export */   "CONTENT_TYPE": () => (/* binding */ CONTENT_TYPE),
/* harmony export */   "ORIGIN": () => (/* binding */ ORIGIN),
/* harmony export */   "TOKEN": () => (/* binding */ TOKEN)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);







const TOKEN = 'token';
const AUTHENTICATED_USER = 'authenticatedUser';
const CONTENT_TYPE = 'application/json';
const ACCESS_CONTROL_ALLOW_ORIGIN = '*';
const ORIGIN = 'http://localhost:4200';
const ACCESS_CONTROL_ALLOW_METHODS = 'PUT, DELETE, POST, GET, OPTIONS';
const ACCESS_CONTROL_ALLOW_HEADERS = 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept';
class AuthService {
  constructor(router, http) {
    this.router = router;
    this.http = http;
    // url = "http://localhost:8080/authenticate";
    this.httpOptions = {
      // tslint:disable-next-line:max-line-length
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': CONTENT_TYPE,
        'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
        'Access-Control-Allow-Methods': ACCESS_CONTROL_ALLOW_METHODS,
        'Access-Control-Allow-Headers': ACCESS_CONTROL_ALLOW_HEADERS
      })
    };
    this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.user = this.userSubject.asObservable();
  }
  get userValue() {
    return this.userSubject.value;
  }
  login(data) {
    this.userCreds = {
      username: data.userName,
      password: data.password
    };
    this.authCall = this.http.post(`${_app_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL_AUTH}`, this.userCreds, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => {
      localStorage.setItem(AUTHENTICATED_USER, `${data.userName}`);
      localStorage.setItem(TOKEN, `Bearer ${data.token}`);
      sessionStorage.setItem(AUTHENTICATED_USER, `${data.userName}`);
      sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
      this.userSubject.next(data);
      // this.startRefreshTokenTimer();  Need to fix the refresh token method
      return data;
    }));
    console.log(this.authCall);
    return this.authCall;
  }
  logout() {
    console.log('logging out');
    localStorage.setItem(AUTHENTICATED_USER, '');
    localStorage.setItem(TOKEN, '');
  }
  refreshToken() {
    return this.http.post(`${_app_constants__WEBPACK_IMPORTED_MODULE_0__.REST_API_SERVER}/refresh`, {}, {
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(user => {
      this.userSubject.next(user);
      this.startRefreshTokenTimer();
      return user;
    }));
  }
  // need to fix VVVVVVVVVV  method
  startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(this.userValue.jwtToken.split('.')[1]));
    //
    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - 60 * 1000;
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }
  stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
  getAuthenticatedUser() {
    return localStorage.getItem(AUTHENTICATED_USER);
  }
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return localStorage.getItem(TOKEN);
    }
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});
// Need to find out what this is doing before deleting
class AuthenticationBean {
  constructor(message) {
    this.message = message;
  }
}

/***/ }),

/***/ 735:
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/client/client-assets.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientAssetsService": () => (/* binding */ ClientAssetsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authentication/auth-service.service */ 5998);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _httpInterceptor_http_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpInterceptor/http-jwt-interceptor.service */ 564);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);







class ClientAssetsService {
  constructor(httpClient, httpIntercept, router) {
    this.httpClient = httpClient;
    this.httpIntercept = httpIntercept;
    this.router = router;
    this.REST_API_SERVER = `${_app_constants__WEBPACK_IMPORTED_MODULE_1__.REST_API_SERVER}`;
    this.httpOptions = {
      // tslint:disable-next-line:max-line-length
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.CONTENT_TYPE,
        'Access-Control-Allow-Origin': _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.ACCESS_CONTROL_ALLOW_ORIGIN,
        Origin: _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.ORIGIN,
        'Access-Control-Allow-Methods': _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.ACCESS_CONTROL_ALLOW_METHODS,
        'Access-Control-Allow-Headers': _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.ACCESS_CONTROL_ALLOW_HEADERS
      })
    };
  }
  getAdminUrl() {
    this.uri = '/admin/get';
    //
    return this.httpClient.get(this.REST_API_SERVER + this.uri, this.httpOptions);
    // return Observable.create();  // only for testing a return
  }

  addAdminUrl(data) {
    this.adminUrl = {
      id: data.id,
      email: data.email,
      url: data.url
    };
    console.log(this.adminUrl.toString());
    this.uri = '/admin/add';
    return this.httpClient.post(this.REST_API_SERVER + this.uri, this.adminUrl, this.httpOptions);
  }
}
ClientAssetsService.ɵfac = function ClientAssetsService_Factory(t) {
  return new (t || ClientAssetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_httpInterceptor_http_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_2__.HttpJWTInterceptorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
ClientAssetsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: ClientAssetsService,
  factory: ClientAssetsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1412:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/client/client.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientService": () => (/* binding */ ClientService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authentication/auth-service.service */ 5998);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _httpInterceptor_http_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpInterceptor/http-jwt-interceptor.service */ 564);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);







class ClientService {
  constructor(httpClient, httpIntercept, router) {
    this.httpClient = httpClient;
    this.httpIntercept = httpIntercept;
    this.router = router;
    // todo need to figure out how to pass in headers dont have clear example
    // long time since I have done it
    this.REST_API_SERVER = `${_app_constants__WEBPACK_IMPORTED_MODULE_1__.REST_API_SERVER}`;
    this.httpOptions = {
      // tslint:disable-next-line:max-line-length
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.CONTENT_TYPE,
        'Access-Control-Allow-Origin': _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.ACCESS_CONTROL_ALLOW_ORIGIN,
        Origin: _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.ORIGIN,
        'Access-Control-Allow-Methods': _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.ACCESS_CONTROL_ALLOW_METHODS,
        'Access-Control-Allow-Headers': _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.ACCESS_CONTROL_ALLOW_HEADERS
      })
    };
  }
  getClients() {
    this.uri = '/client/all';
    console.log('this is the getClient() before  the call');
    const call = this.httpClient.get(this.REST_API_SERVER + this.uri, this.httpOptions);
    console.log('this is the getClient()  after the call');
    console.log('this is the actual call to the backend' + call);
    return call;
  }
  addClient(data) {
    this.client = {
      fname: data.fname,
      lname: data.lname,
      username: data.username,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      userInfo: {
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        zip: data.zip,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender
      },
      clientAssets: {
        email: data.email,
        id: data.id,
        adminURL: data.adminURL,
        siteURL: data.siteURL,
        services: data.services
      },
      propertyDetails: {
        ownerName: data.ownerName,
        ownerMailingAddress: data.ownerMailingAddress,
        numberOfBedrooms: data.numberOfBedrooms,
        numberOfBathrooms: data.numberOfBathrooms,
        aproxSqFt: data.aproxSqFt,
        lotSizeSqFt: data.lotSizeSqFt,
        yearBuilt: data.yearBuilt,
        houseType: data.houseType,
        estimatedValue: data.estimatedValue,
        mortgageAmount: data.mortgageAmount,
        mortgageDate: data.mortgageDate,
        taxAssessedYear: data.taxAssessedYear,
        taxAssessedValue: data.taxAssessedValue,
        taxBilledAmount: data.taxBilledAmount,
        lastSoldDate: data.lastSoldDate,
        lastSoldPrice: data.lastSoldPrice,
        priorSaleDate: data.priorSaleDate,
        priorSalePrice: data.priorSalePrice,
        isGarage: data.isGarage,
        isBasement: data.isBasement,
        expectedSalesPrice: data.expectedSalesPrice,
        allCashSellingPrice: data.allCashSellingPrice,
        realEstateAgent: data.realEstateAgent,
        sellTiming: data.sellTiming,
        vacant: data.vacant,
        sellReason: data.sellReason,
        delinquentRent: data.delinquentRent,
        propertyDetails: data.propertyDetails
      },
      email: data.email,
      role: data.role
    };
    console.log(this.client.toString());
    this.uri = '/client/add';
    return this.httpClient.post(this.REST_API_SERVER + this.uri, this.client, this.httpOptions);
  }
}
ClientService.ɵfac = function ClientService_Factory(t) {
  return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_httpInterceptor_http_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_2__.HttpJWTInterceptorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
ClientService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: ClientService,
  factory: ClientService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 564:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/services/httpInterceptor/http-jwt-interceptor.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpJWTInterceptorService": () => (/* binding */ HttpJWTInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authentication/auth-service.service */ 5998);


class HttpJWTInterceptorService {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    console.log('this interceptor is working');
    const token = this.authService.getAuthenticatedToken();
    console.log(token);
    const username = this.authService.getAuthenticatedUser();
    console.log(username);
    console.log(token, username);
    if (true) {
      console.log('..............................??????????????????????????????//////////////////////////////.......................>>>>>>>>>>>>>..........');
      console.log(token, username);
      const newReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
      return next.handle(newReq); // edited request headers
    }

    return next.handle(req); // non-edited request headers
  }
}

HttpJWTInterceptorService.ɵfac = function HttpJWTInterceptorService_Factory(t) {
  return new (t || HttpJWTInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
HttpJWTInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: HttpJWTInterceptorService,
  factory: HttpJWTInterceptorService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7458:
/*!********************************************************!*\
  !*** ./src/app/shared/services/leads/leads.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadsService": () => (/* binding */ LeadsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app.constants */ 2976);
/* harmony import */ var _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/auth-service.service */ 5998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class LeadsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    // todo need to figure out how to pass in headers dont have clear example
    // long time since I have done it
    this.REST_API_SERVER = `${_app_constants__WEBPACK_IMPORTED_MODULE_0__.REST_API_SERVER}`;
    this.uri = '/leads';
    this.httpOptions = {
      // tslint:disable-next-line:max-line-length
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'Content-Type': _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.CONTENT_TYPE,
        'Access-Control-Allow-Origin': _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.ACCESS_CONTROL_ALLOW_ORIGIN,
        Origin: _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.ORIGIN,
        'Access-Control-Allow-Methods': _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.ACCESS_CONTROL_ALLOW_METHODS,
        'Access-Control-Allow-Headers': _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.ACCESS_CONTROL_ALLOW_HEADERS
      })
    };
  }
  getLeads() {
    //
    return this.httpClient.get(this.REST_API_SERVER + this.uri + '/all', this.httpOptions);
    // return Observable.create();  // only for testing a return
  }

  addLeads(data) {
    /* TODO: Need to fix first name issue on property details. issue is that I am not able to use the full name
     *  'continuation' concatenation intead of creating a new property for it.
     */
    this.client = {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      password: '',
      passwordConfirm: '',
      role: '',
      username: '',
      clientAssets: {},
      userInfo: {
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        zip: data.zip,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender
      },
      propertyDetails: {
        ownerName: data.lname,
        ownerMailingAddress: data.ownerMailingAddress,
        numberOfBedrooms: data.numberOfBedrooms,
        numberOfBathrooms: data.numberOfBathrooms,
        aproxSqFt: data.aproxSqFt,
        lotSizeSqFt: data.lotSizeSqFt,
        yearBuilt: data.yearBuilt,
        houseType: data.houseType,
        estimatedValue: data.estimatedValue,
        mortgageAmount: data.mortgageAmount,
        mortgageDate: data.mortgageDate,
        taxAssessedYear: data.taxAssessedYear,
        taxAssessedValue: data.taxAssessedValue,
        taxBilledAmount: data.taxBilledAmount,
        lastSoldDate: data.lastSoldDate,
        lastSoldPrice: data.lastSoldPrice,
        priorSaleDate: data.priorSaleDate,
        priorSalePrice: data.priorSalePrice,
        isGarage: data.isGarage,
        isBasement: data.isBasement,
        expectedSalesPrice: data.expectedSalesPrice,
        allCashSellingPrice: data.allCashSellingPrice,
        realEstateAgent: data.realEstateAgent,
        sellTiming: data.sellTiming,
        vacant: data.vacant,
        sellReason: data.sellReason,
        delinquentRent: data.delinquentRent
      }
    };
    console.log(this.client.toString());
    return this.httpClient.post(this.REST_API_SERVER + this.uri + '/add', this.client, this.httpOptions);
  }
  updateLeads(data) {
    /* TODO: Need to fix first name issue on property details. issue is that I am not able to use the full name
     *  'continuation' concatenation instead of creating a new property for it.
     */
    this.client = {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      password: '',
      passwordConfirm: '',
      role: '',
      username: '',
      clientAssets: {},
      userInfo: {
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        zip: data.zip,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender
      },
      propertyDetails: {
        ownerName: data.lname,
        ownerMailingAddress: data.ownerMailingAddress,
        numberOfBedrooms: data.numberOfBedrooms,
        numberOfBathrooms: data.numberOfBathrooms,
        aproxSqFt: data.aproxSqFt,
        lotSizeSqFt: data.lotSizeSqFt,
        yearBuilt: data.yearBuilt,
        houseType: data.houseType,
        estimatedValue: data.estimatedValue,
        mortgageAmount: data.mortgageAmount,
        mortgageDate: data.mortgageDate,
        taxAssessedYear: data.taxAssessedYear,
        taxAssessedValue: data.taxAssessedValue,
        taxBilledAmount: data.taxBilledAmount,
        lastSoldDate: data.lastSoldDate,
        lastSoldPrice: data.lastSoldPrice,
        priorSaleDate: data.priorSaleDate,
        priorSalePrice: data.priorSalePrice,
        isGarage: data.isGarage,
        isBasement: data.isBasement,
        expectedSalesPrice: data.expectedSalesPrice,
        allCashSellingPrice: data.allCashSellingPrice,
        realEstateAgent: data.realEstateAgent,
        sellTiming: data.sellTiming,
        vacant: data.vacant,
        sellReason: data.sellReason,
        delinquentRent: data.delinquentRent
      }
    };
    console.log(this.client.toString());
    return this.httpClient.post(this.REST_API_SERVER + this.uri + '/update', this.client, this.httpOptions);
  }
  deleteLead(data) {
    /* TODO: Need to fix first name issue on property details. issue is that I am not able to use the full name
     *  'continuation' concatenation instead of creating a new property for it.
     */
    this.toDelete = {
      email: data.email
    };
    console.log(this.client.toString());
    return this.httpClient.post(this.REST_API_SERVER + this.uri + '/update', this.client, this.httpOptions);
  }
}
LeadsService.ɵfac = function LeadsService_Factory(t) {
  return new (t || LeadsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
LeadsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: LeadsService,
  factory: LeadsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7341:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/theme-constant.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeConstantService": () => (/* binding */ ThemeConstantService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ThemeConstantService {
  constructor() {
    // Theme Config
    this.isMenuFolded = false;
    this.isSideNavDark = false;
    this.headerColor = 'default';
    this.colorConfig = {
      colors: {
        magenta: '#eb2f96',
        magentaLight: 'rgba(235, 47, 150, 0.05)',
        red: '#de4436',
        redLight: 'rgba(222, 68, 54, 0.05)',
        volcano: '#fa541c',
        volcanoLight: 'rgba(250, 84, 28, 0.05)',
        orange: '#fa8c16',
        orangeLight: 'rgba(250, 140, 22, 0.1)',
        gold: '#ffc107',
        goldLight: 'rgba(255, 193, 7, 0.1)',
        lime: '#a0d911',
        limeLight: 'rgba(160, 217, 17, 0.1)',
        green: '#52c41a',
        greenLight: 'rgba(82, 196, 26, 0.1)',
        cyan: "#05c9a7",
        cyanLight: 'rgba(0, 201, 167, 0.1)',
        blue: '#3f87f5',
        blueLight: 'rgba(63, 135, 245, 0.15)',
        geekBlue: '#2f54eb',
        geekBlueLight: 'rgba(47, 84, 235, 0.1)',
        purple: '#886cff',
        purpleLight: 'rgba(136, 108, 255, 0.1)',
        gray: '#53535f',
        grayLight: '#77838f',
        grayLighter: '#ededed',
        grayLightest: '#f1f2f3',
        border: '#edf2f9',
        white: '#ffffff',
        dark: '#2a2a2a',
        transparent: 'rgba(255, 255, 255, 0)'
      }
    };
    this.isMenuFoldedActived = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.isMenuFolded);
    this.isMenuFoldedChanges = this.isMenuFoldedActived.asObservable();
    this.isSideNavDarkActived = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.isSideNavDark);
    this.isSideNavDarkChanges = this.isSideNavDarkActived.asObservable();
    this.isExpandActived = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isExpandChanges = this.isExpandActived.asObservable();
    this.currentHeaderColor = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.headerColor);
    this.selectedHeaderColor = this.currentHeaderColor.asObservable();
  }
  get() {
    return this.colorConfig;
  }
  toggleFold(isFolded) {
    this.isMenuFoldedActived.next(isFolded);
  }
  toogleSideNavDark(isDark) {
    this.isSideNavDarkActived.next(isDark);
  }
  toggleExpand(isExpand) {
    this.isExpandActived.next(isExpand);
  }
  changeHeaderColor(color) {
    this.currentHeaderColor.next(color);
  }
}
ThemeConstantService.ɵfac = function ThemeConstantService_Factory(t) {
  return new (t || ThemeConstantService)();
};
ThemeConstantService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ThemeConstantService,
  factory: ThemeConstantService.ɵfac
});

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 3923);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);
/* harmony import */ var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/theme-constant.service */ 7341);
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/search.pipe */ 6903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);










class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_0__.ThemeConstantService],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__.NzToolTipModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientJsonpModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchPipe],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__.NzToolTipModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientJsonpModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule, _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchPipe]
  });
})();

/***/ }),

/***/ 1461:
/*!************************************************************!*\
  !*** ./src/app/shared/template/footer/footer.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 9,
  vars: 0,
  consts: [[1, "footer"], [1, "footer-content", "justify-content-between"], [1, "m-b-0"], ["href", "", 1, "text-gray", "m-r-15"], ["href", "", 1, "text-gray"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Copyright \u00A9 2022 Noble Digital Services. All rights reserved.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span")(5, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Term & Conditions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Privacy & Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 7518:
/*!************************************************************!*\
  !*** ./src/app/shared/template/header/header.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/theme-constant.service */ 7341);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 8611);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6495);
/* harmony import */ var _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quick-view/quick-view.component */ 1435);






function HeaderComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-quick-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
class HeaderComponent {
  constructor(themeService) {
    this.themeService = themeService;
    this.searchVisible = false;
    this.quickViewVisible = false;
    this.notificationList = [{
      title: 'You received a new message',
      time: '8 min',
      icon: 'mail',
      color: 'ant-avatar-' + 'blue'
    }, {
      title: 'New user registered',
      time: '7 hours',
      icon: 'user-add',
      color: 'ant-avatar-' + 'cyan'
    }, {
      title: 'System Alert',
      time: '8 hours',
      icon: 'warning',
      color: 'ant-avatar-' + 'red'
    }, {
      title: 'You have a new update',
      time: '2 days',
      icon: 'sync',
      color: 'ant-avatar-' + 'gold'
    }];
  }
  ngOnInit() {
    this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
    this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
  }
  toggleFold() {
    this.isFolded = !this.isFolded;
    this.themeService.toggleFold(this.isFolded);
  }
  toggleExpand() {
    this.isFolded = false;
    this.isExpand = !this.isExpand;
    this.themeService.toggleExpand(this.isExpand);
    this.themeService.toggleFold(this.isFolded);
  }
  searchToggle() {
    this.searchVisible = !this.searchVisible;
  }
  quickViewToggle() {
    this.quickViewVisible = !this.quickViewVisible;
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_0__.ThemeConstantService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 23,
  vars: 5,
  consts: [[1, "header"], [1, "logo", "logo-dark"], ["href", ""], ["src", "assets/images/logo/logo.png", "alt", "Logo"], ["src", "assets/images/logo/logo-fold.png", "alt", "Logo", 1, "logo-fold"], [1, "logo", "logo-white"], ["src", "assets/images/logo/logo-white.png", "alt", "Logo"], ["src", "assets/images/logo/logo-fold-white.png", "alt", "Logo", 1, "logo-fold"], [1, "nav-wrap"], [1, "nav-left"], [1, "desktop-toggle"], [3, "click"], ["nz-icon", "", "theme", "outline", 3, "nzType"], [1, "mobile-toggle"], [1, "nav-right"], ["nz-icon", "", "nzType", "appstore", "theme", "outline"], ["nzTitle", "Quick View", "nzPlacement", "right", 3, "nzWidth", "nzClosable", "nzVisible", "nzOnClose"], [4, "nzDrawerContent"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3)(4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 6)(8, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "ul", 9)(11, "li", 10)(12, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_12_listener() {
        return ctx.toggleFold();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 13)(15, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() {
        return ctx.toggleExpand();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ul", 14)(18, "li")(19, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_19_listener() {
        return ctx.quickViewToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "nz-drawer", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnClose", function HeaderComponent_Template_nz_drawer_nzOnClose_21_listener() {
        return ctx.quickViewToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, HeaderComponent_ng_container_22_Template, 2, 0, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.isFolded ? "menu-unfold" : "menu-fold");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.isExpand ? "menu-fold" : "menu-unfold");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzWidth", 280)("nzClosable", false)("nzVisible", ctx.quickViewVisible);
    }
  },
  dependencies: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_4__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_4__.NzDrawerContentDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__.QuickViewComponent],
  encapsulation: 2
});

/***/ }),

/***/ 1435:
/*!********************************************************************!*\
  !*** ./src/app/shared/template/quick-view/quick-view.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickViewComponent": () => (/* binding */ QuickViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/theme-constant.service */ 7341);


class QuickViewComponent {
  constructor(themeService) {
    this.themeService = themeService;
  }
  ngOnInit() {
    this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
    this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
    this.themeService.selectedHeaderColor.subscribe(color => this.selectedHeaderColor = color);
  }
  changeHeaderColor() {
    this.themeService.changeHeaderColor(this.selectedHeaderColor);
  }
  toggleSideNavDark() {
    this.themeService.toogleSideNavDark(this.isSideNavDark);
  }
  toggleFold() {
    this.themeService.toggleFold(this.isFolded);
  }
}
QuickViewComponent.ɵfac = function QuickViewComponent_Factory(t) {
  return new (t || QuickViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_0__.ThemeConstantService));
};
QuickViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: QuickViewComponent,
  selectors: [["app-quick-view"]],
  decls: 0,
  vars: 0,
  template: function QuickViewComponent_Template(rf, ctx) {},
  encapsulation: 2
});

/***/ }),

/***/ 7371:
/*!************************************************************!*\
  !*** ./src/app/shared/template/search/search.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 4178);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ 2533);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6495);
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/search.pipe */ 6903);








function SearchComponent_ng_container_3_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SearchComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_ng_container_3_h5_1_Template, 2, 0, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nz-avatar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9)(5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const count_r6 = ctx.ngForOf;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r7 < 1 && count_r6.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzIcon", item_r5.icon)("ngClass", item_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.desc);
  }
}
function SearchComponent_ng_container_6_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Members");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SearchComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_ng_container_6_h5_1_Template, 2, 0, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nz-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9)(5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const count_r10 = ctx.ngForOf;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r11 < 1 && count_r10.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSrc", item_r9.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.desc);
  }
}
function SearchComponent_ng_container_9_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "News");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SearchComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_ng_container_9_h5_1_Template, 2, 0, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nz-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9)(5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const count_r14 = ctx.ngForOf;
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r15 < 1 && count_r14.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSrc", item_r13.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r13.desc);
  }
}
function SearchComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 17);
  }
}
class SearchComponent {
  constructor() {
    this.files = [{
      title: 'Quater Report.exl',
      desc: 'by Finance',
      icon: 'file-excel',
      color: 'ant-avatar-' + 'cyan'
    }, {
      title: 'Documentaion.docx',
      desc: 'by Developers',
      icon: 'file-word',
      color: 'ant-avatar-' + 'blue'
    }, {
      title: 'Recipe.txt',
      desc: 'by The Chef',
      icon: 'file-text',
      color: 'ant-avatar-' + 'purple'
    }, {
      title: 'Project Requirement.pdf',
      desc: 'by Project Manager',
      icon: 'file-pdf',
      color: 'ant-avatar-' + 'red'
    }];
    this.members = [{
      title: 'Erin Gonzales',
      desc: 'UI/UX Designer',
      img: 'assets/images/avatars/thumb-1.jpg'
    }, {
      title: 'Darryl Day',
      desc: 'Software Engineer',
      img: 'assets/images/avatars/thumb-2.jpg'
    }, {
      title: 'Marshall Nichols ',
      desc: 'Data Analyst',
      img: 'assets/images/avatars/thumb-3.jpg'
    }];
    this.feeds = [{
      title: '5 Best Handwriting Fonts',
      desc: '25 Nov 2018',
      img: 'assets/images/others/img-1.jpg'
    }];
  }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) {
  return new (t || SearchComponent)();
};
SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SearchComponent,
  selectors: [["app-search"]],
  decls: 13,
  vars: 17,
  consts: [[3, "nzPrefix"], ["type", "text", "nz-input", "", "placeholder", "Search", 3, "ngModel", "ngModelChange"], [1, "m-t-30"], [4, "ngFor", "ngForOf"], ["class", "d-flex m-b-30", 4, "ngFor", "ngForOf"], ["prefixTemplate", ""], ["class", "m-b-20", 4, "ngIf"], [1, "d-flex", "m-b-30"], [3, "nzIcon", "ngClass"], [1, "m-l-15"], [1, "text-dark", "m-b-0", "font-weight-semibold"], [1, "m-b-0", "text-muted", "font-size-13"], [1, "m-b-20"], [3, "nzSrc"], [1, "m-b-0", "text-dark", "font-weight-semibold"], ["nz-icon", "", "nzType", "clock-circle", "theme", "outline"], [1, "m-l-10"], ["nz-icon", "", "nzType", "search"]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-input-group", 0)(1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.search = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchComponent_ng_container_3_Template, 9, 5, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SearchComponent_ng_container_6_Template, 9, 4, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SearchComponent_ng_container_9_Template, 11, 4, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SearchComponent_ng_template_11_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPrefix", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.search);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](4, 5, ctx.files, "title", ctx.search));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](7, 9, ctx.members, "title", ctx.search));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](10, 13, ctx.feeds, "title", ctx.search));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__.NzAvatarComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_0__.SearchPipe],
  encapsulation: 2
});

/***/ }),

/***/ 2159:
/*!********************************************************************!*\
  !*** ./src/app/shared/template/side-nav/side-nav-routes.config.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = [{
  path: '',
  title: 'Dashboard',
  iconType: 'nzIcon',
  iconTheme: 'outline',
  icon: 'dashboard',
  submenu: []
}, {
  path: '',
  title: 'Client Menu',
  iconType: '',
  icon: '',
  iconTheme: '',
  submenu: [{
    path: 'client/view',
    title: 'Clients',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: '',
    submenu: []
  }, {
    path: 'client/add',
    title: 'Add Client',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: '',
    submenu: []
  }, {
    path: 'client/admin-url',
    title: 'Assets',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: '',
    submenu: []
  }]
}, {
  path: 'client/view',
  title: 'client View',
  iconType: 'nzIcon',
  iconTheme: 'outline',
  icon: 'dashboard',
  submenu: []
}];

/***/ }),

/***/ 4567:
/*!****************************************************************!*\
  !*** ./src/app/shared/template/side-nav/side-nav.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavComponent": () => (/* binding */ SideNavComponent)
/* harmony export */ });
/* harmony import */ var _side_nav_routes_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-nav-routes.config */ 2159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/theme-constant.service */ 7341);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6495);
/* harmony import */ var _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/side-nav.directive */ 17);









function SideNavComponent_li_2_a_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 11);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", item_r1.icon)("theme", item_r1.iconTheme);
  }
}
const _c0 = function (a0, a1) {
  return [a0, a1];
};
function SideNavComponent_li_2_a_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 12);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c0, item_r1.iconTheme, item_r1.icon));
  }
}
function SideNavComponent_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SideNavComponent_li_2_a_1_i_1_Template, 1, 2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SideNavComponent_li_2_a_1_i_2_Template, 1, 4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.iconType == "nzIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.iconType == "fontawesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.title);
  }
}
function SideNavComponent_li_2_a_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 11);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", item_r1.icon)("theme", item_r1.iconTheme);
  }
}
function SideNavComponent_li_2_a_2_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 12);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c0, item_r1.iconTheme, item_r1.icon));
  }
}
function SideNavComponent_li_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SideNavComponent_li_2_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SideNavComponent_li_2_a_2_i_1_Template, 1, 2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SideNavComponent_li_2_a_2_i_2_Template, 1, 4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", item_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.iconType == "nzIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.iconType == "fontawesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.title);
  }
}
function SideNavComponent_li_2_ul_3_li_1_a_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 11);
  }
  if (rf & 2) {
    const subItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", subItem_r18.icon)("theme", subItem_r18.iconTheme);
  }
}
function SideNavComponent_li_2_ul_3_li_1_a_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 12);
  }
  if (rf & 2) {
    const subItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c0, subItem_r18.iconTheme, subItem_r18.icon));
  }
}
function SideNavComponent_li_2_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SideNavComponent_li_2_ul_3_li_1_a_1_i_1_Template, 1, 2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SideNavComponent_li_2_ul_3_li_1_a_1_i_2_Template, 1, 4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", subItem_r18.iconType == "nzIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", subItem_r18.iconType == "fontawesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](subItem_r18.title);
  }
}
function SideNavComponent_li_2_ul_3_li_1_a_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 11);
  }
  if (rf & 2) {
    const subItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", subItem_r18.icon)("theme", subItem_r18.iconTheme);
  }
}
function SideNavComponent_li_2_ul_3_li_1_a_2_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 12);
  }
  if (rf & 2) {
    const subItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c0, subItem_r18.iconTheme, subItem_r18.icon));
  }
}
function SideNavComponent_li_2_ul_3_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SideNavComponent_li_2_ul_3_li_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SideNavComponent_li_2_ul_3_li_1_a_2_i_1_Template, 1, 2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SideNavComponent_li_2_ul_3_li_1_a_2_i_2_Template, 1, 4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", subItem_r18.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", subItem_r18.iconType == "nzIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", subItem_r18.iconType == "fontawesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](subItem_r18.title);
  }
}
function SideNavComponent_li_2_ul_3_li_1_ul_3_li_1_a_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 11);
  }
  if (rf & 2) {
    const subItem_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", subItem_r35.icon)("theme", subItem_r35.iconTheme);
  }
}
function SideNavComponent_li_2_ul_3_li_1_ul_3_li_1_a_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 12);
  }
  if (rf & 2) {
    const subItem_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c0, subItem_r35.iconTheme, subItem_r35.icon));
  }
}
function SideNavComponent_li_2_ul_3_li_1_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SideNavComponent_li_2_ul_3_li_1_ul_3_li_1_a_1_i_1_Template, 1, 2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SideNavComponent_li_2_ul_3_li_1_ul_3_li_1_a_1_i_2_Template, 1, 4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subItem_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", subItem_r35.iconType == "nzIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", subItem_r35.iconType == "fontawesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](subItem_r35.title);
  }
}
function SideNavComponent_li_2_ul_3_li_1_ul_3_li_1_a_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 11);
  }
  if (rf & 2) {
    const subItem_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", subItem_r35.icon)("theme", subItem_r35.iconTheme);
  }
}
function SideNavComponent_li_2_ul_3_li_1_ul_3_li_1_a_2_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 12);
  }
  if (rf & 2) {
    const subItem_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c0, subItem_r35.iconTheme, subItem_r35.icon));
  }
}
function SideNavComponent_li_2_ul_3_li_1_ul_3_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SideNavComponent_li_2_ul_3_li_1_ul_3_li_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r47.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SideNavComponent_li_2_ul_3_li_1_ul_3_li_1_a_2_i_1_Template, 1, 2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SideNavComponent_li_2_ul_3_li_1_ul_3_li_1_a_2_i_2_Template, 1, 4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subItem_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", subItem_r35.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", subItem_r35.iconType == "nzIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", subItem_r35.iconType == "fontawesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](subItem_r35.title);
  }
}
const _c1 = function () {
  return {
    exact: true
  };
};
function SideNavComponent_li_2_ul_3_li_1_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SideNavComponent_li_2_ul_3_li_1_ul_3_li_1_a_1_Template, 6, 3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SideNavComponent_li_2_ul_3_li_1_ul_3_li_1_a_2_Template, 5, 4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subItem_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", subItem_r35.submenu.length > 0 ? "ant-menu-submenu ant-menu-submenu-inline" : "ant-menu-item")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", subItem_r35.submenu.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", subItem_r35.submenu.length === 0);
  }
}
function SideNavComponent_li_2_ul_3_li_1_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SideNavComponent_li_2_ul_3_li_1_ul_3_li_1_Template, 3, 5, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", subItem_r18.submenu);
  }
}
function SideNavComponent_li_2_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SideNavComponent_li_2_ul_3_li_1_a_1_Template, 6, 3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SideNavComponent_li_2_ul_3_li_1_a_2_Template, 5, 4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SideNavComponent_li_2_ul_3_li_1_ul_3_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subItem_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", subItem_r18.submenu.length > 0 ? "ant-menu-submenu ant-menu-submenu-inline" : "ant-menu-item")("routerLinkActive", subItem_r18.submenu.length > 0 ? "ant-menu-submenu-open" : "ant-menu-item-selected")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", subItem_r18.submenu.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", subItem_r18.submenu.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", subItem_r18.submenu.length > 0);
  }
}
function SideNavComponent_li_2_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SideNavComponent_li_2_ul_3_li_1_Template, 4, 7, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r1.submenu);
  }
}
function SideNavComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SideNavComponent_li_2_a_1_Template, 6, 3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SideNavComponent_li_2_a_2_Template, 5, 4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SideNavComponent_li_2_ul_3_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", item_r1.submenu.length > 0 ? "ant-menu-submenu ant-menu-submenu-inline" : "ant-menu-item")("routerLinkActive", item_r1.submenu.length > 0 ? "ant-menu-submenu-open" : "ant-menu-item-selected")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.submenu.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.submenu.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.submenu.length > 0);
  }
}
const _c2 = function (a0, a1) {
  return {
    "ant-menu-inline-collapsed": a0,
    "ant-menu-dark": a1
  };
};
class SideNavComponent {
  constructor(themeService) {
    this.themeService = themeService;
  }
  ngOnInit() {
    this.menuItems = _side_nav_routes_config__WEBPACK_IMPORTED_MODULE_0__.ROUTES.filter(menuItem => menuItem);
    this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
    this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
    this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
  }
  closeMobileMenu() {
    if (window.innerWidth < 992) {
      this.isFolded = false;
      this.isExpand = !this.isExpand;
      this.themeService.toggleExpand(this.isExpand);
      this.themeService.toggleFold(this.isFolded);
    }
  }
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) {
  return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__.ThemeConstantService));
};
SideNavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SideNavComponent,
  selectors: [["app-sidenav"]],
  decls: 3,
  vars: 5,
  consts: [["sideNav", "", 1, "side-nav"], [1, "ant-menu", "ant-menu-root", "ant-menu-inline", "side-nav-menu", 3, "ngClass"], [3, "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["href", "javascript:void(0);", "class", "ant-menu-submenu-title", 4, "ngIf"], [3, "routerLink", "click", 4, "ngIf"], ["class", "ant-menu ant-menu-inline ant-menu-sub dropdown-menu", 4, "ngIf"], ["href", "javascript:void(0);", 1, "ant-menu-submenu-title"], ["nz-icon", "", 3, "nzType", "theme", 4, "ngIf"], ["class", "m-r-10", 3, "ngClass", 4, "ngIf"], [1, "ant-menu-submenu-arrow"], ["nz-icon", "", 3, "nzType", "theme"], [1, "m-r-10", 3, "ngClass"], [3, "routerLink", "click"], [1, "ant-menu", "ant-menu-inline", "ant-menu-sub", "dropdown-menu"], ["href", "javascript:void(0);", "class", "ant-menu-submenu-title p-l-50", 4, "ngIf"], ["class", "p-l-30", 3, "routerLink", "click", 4, "ngIf"], ["href", "javascript:void(0);", 1, "ant-menu-submenu-title", "p-l-50"], [1, "p-l-30", 3, "routerLink", "click"], ["routerLinkActive", "ant-menu-item-selected", 3, "ngClass", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["routerLinkActive", "ant-menu-item-selected", 3, "ngClass", "routerLinkActiveOptions"], ["class", "p-l-50", 3, "routerLink", "click", 4, "ngIf"], [1, "p-l-50", 3, "routerLink", "click"]],
  template: function SideNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "perfect-scrollbar", 0)(1, "ul", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SideNavComponent_li_2_Template, 4, 7, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c2, ctx.isFolded, ctx.isSideNavDark));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_2__.SideNavDirective],
  encapsulation: 2
});

/***/ }),

/***/ 3964:
/*!****************************************************!*\
  !*** ./src/app/shared/template/template.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateModule": () => (/* binding */ TemplateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared.module */ 4466);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 4178);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/badge */ 8757);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/radio */ 5953);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 5756);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/list */ 7555);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 8611);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/divider */ 2857);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/switch */ 6496);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ 2533);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ 7619);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 7518);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ 7371);
/* harmony import */ var _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quick-view/quick-view.component */ 1435);
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-nav/side-nav.component */ 4567);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ 1461);
/* harmony import */ var _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/side-nav.directive */ 17);
/* harmony import */ var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/theme-constant.service */ 7341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);





















const antdModule = [ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__.NzAvatarModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_9__.NzBadgeModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__.NzRadioModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__.NzDropDownModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_12__.NzListModule, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__.NzDrawerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_14__.NzDividerModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_15__.NzSwitchModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonModule];
class TemplateModule {}
TemplateModule.ɵfac = function TemplateModule_Factory(t) {
  return new (t || TemplateModule)();
};
TemplateModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
  type: TemplateModule
});
TemplateModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
  providers: [_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_7__.ThemeConstantService],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, antdModule, _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](TemplateModule, {
    declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_3__.QuickViewComponent, _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__.SideNavComponent, _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_6__.SideNavDirective, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__.NzAvatarModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_9__.NzBadgeModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__.NzRadioModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__.NzDropDownModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_12__.NzListModule, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__.NzDrawerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_14__.NzDividerModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_15__.NzSwitchModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_3__.QuickViewComponent, _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__.SideNavComponent, _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_6__.SideNavDirective, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent]
  });
})();

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map