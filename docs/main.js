(self["webpackChunkmulti_layout"] = self["webpackChunkmulti_layout"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _syllogimous_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./syllogimous/pages/settings/settings.component */ 6708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/toasts-container/toasts-container.component */ 8191);




class AppComponent {
  constructor() {
    this.title = 'Multi Layout';
    (0,_syllogimous_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__.loadColorBlindnessMode)();
    const cwarn = console.warn;
    window.console.warn = (...args) => {
      if (typeof args[0] === "string" && args[0].includes("It looks like you're using the disabled attribute")) {
        return;
      }
      cwarn(...args);
    };
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[1, "d-none"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-toasts")(1, "router-outlet", 0);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_1__.ToastsContainer],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_syllogimous_syllogimous_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./syllogimous/syllogimous.module */ 3456)).then(m => m.SyllogimousModule)
}];
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 4465:
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/uuid */ 3488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ToastService {
  constructor() {
    this.toasts = [];
  }
  show(textOrTpl, options = {}) {
    this.toasts.push({
      textOrTpl,
      guid: (0,_utils_uuid__WEBPACK_IMPORTED_MODULE_0__.guid)(),
      position: "top-right",
      ...options
    });
  }
  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
  static {
    this.ɵfac = function ToastService_Factory(t) {
      return new (t || ToastService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ToastService,
      factory: ToastService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3472:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/back-button/back-button.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackButtonComponent": () => (/* binding */ BackButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


class BackButtonComponent {
  constructor(location) {
    this.location = location;
  }
  goBack() {
    this.location.back();
  }
  static {
    this.ɵfac = function BackButtonComponent_Factory(t) {
      return new (t || BackButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BackButtonComponent,
      selectors: [["app-back-button"]],
      decls: 2,
      vars: 0,
      consts: [[1, "btn", "btn-outline-primary", 3, "click"]],
      template: function BackButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackButtonComponent_Template_button_click_0_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Back\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6800:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb-router/breadcrumb-router.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbRouterComponent": () => (/* binding */ BreadcrumbRouterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function BreadcrumbRouterComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3)(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const segment_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", last_r2)("text-decoration-none", last_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", segment_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](segment_r1.label);
  }
}
class BreadcrumbRouterComponent {
  constructor(locationStrategy) {
    this.locationStrategy = locationStrategy;
    // Remove baseHref to work with GitHub pages
    const baseHref = this.locationStrategy.getBaseHref();
    let pathname = location.pathname;
    if (baseHref !== '/') pathname = '/' + location.pathname.replaceAll(baseHref, '');
    const labels = pathname.split('/').slice(1);
    this.incrementalSegments = [];
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const path = '/' + labels.slice(0, i + 1).join('/');
      this.incrementalSegments.push({
        label,
        path
      });
    }
  }
  static {
    this.ɵfac = function BreadcrumbRouterComponent_Factory(t) {
      return new (t || BreadcrumbRouterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.LocationStrategy));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BreadcrumbRouterComponent,
      selectors: [["app-breadcrumb-router"]],
      decls: 3,
      vars: 1,
      consts: [["aria-label", "breadcrumb", 1, "p-3"], [1, "breadcrumb", "m-0", "mb-md-3"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [1, "breadcrumb-item", 3, "routerLink"]],
      template: function BreadcrumbRouterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "ol", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbRouterComponent_li_2_Template, 3, 6, "li", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.incrementalSegments);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5624:
/*!******************************************************!*\
  !*** ./src/app/shared/components/chart.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppChartComponent": () => (/* binding */ AppChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ 3070);



class AppChartComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    // Event emitted after Chartist chart has been initialized.
    // Event handler function will receive chart instance argument.
    this.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    if (this.configuration.type && this.configuration.data) {
      this.renderChart();
    }
  }
  ngOnChanges(changes) {
    this.update(changes);
  }
  ngOnDestroy() {
    if (this.chart) {
      this.chart.detach();
      this.chart = null;
    }
  }
  renderChart() {
    const nativeElement = this.elementRef.nativeElement;
    const {
      type,
      data,
      options,
      responsiveOptions
    } = this.configuration;
    if (type === "Bar") {
      this.chart = new chartist__WEBPACK_IMPORTED_MODULE_1__.BarChart(nativeElement, data, options, responsiveOptions);
    } else if (type === "Line") {
      this.chart = new chartist__WEBPACK_IMPORTED_MODULE_1__.LineChart(nativeElement, data, options, responsiveOptions);
    } else if (type === "Pie") {
      this.chart = new chartist__WEBPACK_IMPORTED_MODULE_1__.PieChart(nativeElement, data, options, responsiveOptions);
    } else {
      throw new Error(`${type} is not a known chart type`);
    }
    if (this.events) {
      this.bindEvents();
    }
    this.initialized.emit(this.chart);
  }
  update(changes) {
    const {
      type,
      data,
      options
    } = this.configuration;
    if (!type || !data) {
      return;
    }
    const changedConfiguration = changes.configuration.currentValue;
    if (!this.chart || changedConfiguration.type !== type) {
      this.renderChart();
    } else if ("data" in changedConfiguration || "options" in changedConfiguration) {
      this.chart.update(data, options);
    }
  }
  bindEvents() {
    for (const event of Object.keys(this.events)) {
      this.chart?.on(event, this.events[event]);
    }
  }
  static {
    this.ɵfac = function AppChartComponent_Factory(t) {
      return new (t || AppChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppChartComponent,
      selectors: [["app-chart"]],
      inputs: {
        configuration: "configuration",
        events: "events"
      },
      outputs: {
        initialized: "initialized"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function AppChartComponent_Template(rf, ctx) {},
      styles: ["[_nghost-%COMP%] {\n          display: block;\n        }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFDUTtVQUNFLGNBQWM7UUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5850:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/copy-paster/copy-paster.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyPasterComponent": () => (/* binding */ CopyPasterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CopyPasterComponent {
  constructor() {
    this.hasCopied = false;
  }
  copy() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.hasCopied = true;
    setTimeout(() => this.hasCopied = false, 3000);
  }
  static {
    this.ɵfac = function CopyPasterComponent_Factory(t) {
      return new (t || CopyPasterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CopyPasterComponent,
      selectors: [["app-copy-paster"]],
      inputs: {
        value: "value"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "btn", "btn-primary", 3, "click"]],
      template: function CopyPasterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CopyPasterComponent_Template_button_click_0_listener() {
            return ctx.copy();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hasCopied ? "Copied!" : "Copy", "\n");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1224:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-form/dynamic-form.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormComponent": () => (/* binding */ DynamicFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var src_app_utils_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/json */ 4037);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input/input.component */ 2371);







function DynamicFormComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 4);
  }
  if (rf & 2) {
    const f_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", f_r1.filler, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
const _c0 = function () {
  return [];
};
function DynamicFormComponent_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-input", 5);
  }
  if (rf & 2) {
    const f_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", f_r1.label)("name", f_r1.field)("helper", f_r1.helper || "")("type", f_r1.type)("minlength", f_r1.minlength)("maxlength", f_r1.maxlength)("min", f_r1.min)("max", f_r1.max)("step", f_r1.step)("options", f_r1.options || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c0))("ngControl", f_r1.ngControl);
  }
}
function DynamicFormComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DynamicFormComponent_ng_container_1_div_1_Template, 1, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DynamicFormComponent_ng_container_1_ng_template_2_Template, 1, 12, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", f_r1.filler)("ngIfElse", _r3);
  }
}
class DynamicFormComponent {
  constructor() {
    this.gap = "1rem";
    this.fields = [];
    this.emitInitial = false;
    this.formValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this._fields = [];
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  get formValue() {
    return {
      ...this.form.getRawValue()
    };
  }
  ngOnInit() {
    if (this.emitInitial) {
      this.formValueChanged.emit(this.form.getRawValue());
    }
  }
  ngOnChanges() {
    if (!this.fields.length) {
      return;
    }
    this._fields = (0,src_app_utils_json__WEBPACK_IMPORTED_MODULE_0__.jsonCopy)(this.fields);
    this.destroy$.next();
    const formGroup = {};
    for (const f of this._fields) {
      if ("filler" in f) {
        continue;
      }
      const formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(f.value);
      f.ngControl = formControl;
      formGroup[f.field] = formControl;
    }
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup(formGroup);
    this.form.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(() => {
      this.formValueChanged.emit(this.form.getRawValue());
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  static {
    this.ɵfac = function DynamicFormComponent_Factory(t) {
      return new (t || DynamicFormComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DynamicFormComponent,
      selectors: [["app-dynamic-form"]],
      inputs: {
        gap: "gap",
        fields: "fields",
        emitInitial: "emitInitial"
      },
      outputs: {
        formValueChanged: "formValueChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "d-grid"], [4, "ngFor", "ngForOf"], [3, "innerHTML", 4, "ngIf", "ngIfElse"], ["inputField", ""], [3, "innerHTML"], [3, "label", "name", "helper", "type", "minlength", "maxlength", "min", "max", "step", "options", "ngControl"]],
      template: function DynamicFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DynamicFormComponent_ng_container_1_Template, 4, 2, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("gap", ctx.gap);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx._fields);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _input_input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5150:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/holy-grail/holy-grail.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HolyGrailComponent": () => (/* binding */ HolyGrailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _holy_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./holy-sidebar.service */ 5777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function HolyGrailComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HolyGrailComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.sidebarService.toggleLeft());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HolyGrailComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HolyGrailComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.sidebarService.toggleRight());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = [[["", "sidebarLeftHeader", ""]], [["", "sidebarLeftContent", ""]], [["", "navbarContent", ""]], [["", "mainContent", ""]], [["", "footerContent", ""]], [["", "sidebarRightHeader", ""]], [["", "sidebarRightContent", ""]]];
const _c1 = ["[sidebarLeftHeader]", "[sidebarLeftContent]", "[navbarContent]", "[mainContent]", "[footerContent]", "[sidebarRightHeader]", "[sidebarRightContent]"];
class HolyGrailComponent {
  constructor(sidebarService, router) {
    this.sidebarService = sidebarService;
    this.router = router;
    this.hasSidebarLeft = true;
    this.hasSidebarRight = true;
  }
  ngOnInit() {
    if (window.innerWidth > 700) {
      this.sidebarService.isLeftOpen = this.hasSidebarLeft;
      this.sidebarService.isRightOpen = this.hasSidebarRight;
    }
  }
  static {
    this.ɵfac = function HolyGrailComponent_Factory(t) {
      return new (t || HolyGrailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_holy_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.HolySidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HolyGrailComponent,
      selectors: [["app-holy-grail"]],
      inputs: {
        hasSidebarLeft: "hasSidebarLeft",
        hasSidebarRight: "hasSidebarRight"
      },
      ngContentSelectors: _c1,
      decls: 30,
      vars: 6,
      consts: [[1, "sb-layout"], [1, "sb-layout__side", "sb-layout__side--l"], [1, "sb-header"], [1, "btn", 3, "click"], [1, "sb-content"], [1, "sb-layout__nav"], [1, "navbar", "navbar-light", "bg-white", "h-100"], [1, "container-fluid"], [1, "d-flex", "align-items-center"], ["class", "btn", 3, "click", 4, "ngIf"], [2, "flex-grow", "1"], [1, "sb-layout__main"], [1, "sb-layout__footer"], [1, "sb-layout__side", "sb-layout__side--r"], [1, "fa", "fa-bars"]],
      template: function HolyGrailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HolyGrailComponent_Template_button_click_5_listener() {
            return ctx.sidebarService.toggleLeft();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](8, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "nav", 6)(11, "div", 7)(12, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HolyGrailComponent_button_13_Template, 2, 0, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](15, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HolyGrailComponent_button_17_Template, 2, 0, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "main", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](19, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "footer", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](21, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "aside", 13)(23, "div", 2)(24, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HolyGrailComponent_Template_button_click_24_listener() {
            return ctx.sidebarService.toggleRight();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](27, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](29, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-open", ctx.sidebarService.isLeftOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasSidebarLeft);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasSidebarRight);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-open", ctx.sidebarService.isRightOpen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
      styles: [".sb-layout[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-areas: \r\n        \"side-l navbar side-r\"\r\n        \"side-l main side-r\"\r\n        \"side-l footer side-r\";\r\n    grid-template-columns: auto 1fr auto;\r\n    grid-template-rows: min-content 1fr min-content;\r\n    height: 100svh;\r\n}\r\n\r\n.sb-layout__side[_ngcontent-%COMP%] {\r\n    background: rgba(var(--app-gray_50), 1);\r\n    display: flex;\r\n    flex-direction: column;\r\n    opacity: 1;\r\n    overflow: hidden;\r\n    transition:\r\n        opacity 200ms ease 200ms,\r\n        padding 200ms ease,\r\n        width 200ms ease;\r\n    width: clamp(25ch, 25vw, 30ch);\r\n    z-index: 1001;\r\n}\r\n\r\n.sb-layout__side[_ngcontent-%COMP%]:not(.is-open) {\r\n    opacity: 0;\r\n    padding: 0;\r\n    transition:\r\n        opacity 200ms ease,\r\n        padding 200ms ease 200ms,\r\n        width 200ms ease 200ms;\r\n    width: 0;\r\n}\r\n\r\n.sb-layout__side--l[_ngcontent-%COMP%] {\r\n    grid-area: side-l;\r\n    border-right: 1px solid rgba(var(--app-gray_900), 0.1);\r\n}\r\n\r\n.sb-layout__side--r[_ngcontent-%COMP%] {\r\n    grid-area: side-r;\r\n    border-left: 1px solid rgba(var(--app-gray_900), 0.1);\r\n}\r\n\r\n.sb-layout__nav[_ngcontent-%COMP%] {\r\n    grid-area: navbar;\r\n    z-index: 1000;\r\n    min-height: 66px;\r\n    border-bottom: 1px solid rgba(var(--app-gray_900), 0.1);\r\n}\r\n\r\n.sb-layout__main[_ngcontent-%COMP%] {\r\n    grid-area: main;\r\n    overflow: auto;\r\n    position: relative;\r\n}\r\n\r\n.sb-layout__footer[_ngcontent-%COMP%] {\r\n    grid-area: footer;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .sb-layout__side[_ngcontent-%COMP%] {\r\n        min-height: 100svh;\r\n        position: fixed;\r\n        width: 85vw;\r\n    }\r\n    .sb-layout__side--l[_ngcontent-%COMP%] {\r\n        box-shadow: 4px 0 8px 3px #0002;\r\n        left: 0;\r\n        z-index: 1001;\r\n    }\r\n    .sb-layout__side--r[_ngcontent-%COMP%] {\r\n        box-shadow: -4px 0 8px 3px #0002;\r\n        right: 0;\r\n        z-index: 1002;\r\n    }\r\n}\r\n\r\n.menu-toggle[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.sb-header[_ngcontent-%COMP%] {\r\n    min-height: 66px;\r\n    border-bottom: 1px solid rgba(var(--app-gray_900),0.1);\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 0 0.75rem;\r\n}\r\n\r\n.sb-content[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n    position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaG9seS1ncmFpbC9ob2x5LWdyYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2I7Ozs4QkFHMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLCtDQUErQztJQUMvQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQjs7O3dCQUdvQjtJQUNwQiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1Y7Ozs4QkFHMEI7SUFDMUIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixXQUFXO0lBQ2Y7SUFDQTtRQUNJLCtCQUErQjtRQUMvQixPQUFPO1FBQ1AsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0NBQWdDO1FBQ2hDLFFBQVE7UUFDUixhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzREFBc0Q7SUFDdEQsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIi5zYi1sYXlvdXQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgICAgIFwic2lkZS1sIG5hdmJhciBzaWRlLXJcIlxyXG4gICAgICAgIFwic2lkZS1sIG1haW4gc2lkZS1yXCJcclxuICAgICAgICBcInNpZGUtbCBmb290ZXIgc2lkZS1yXCI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcclxuICAgIGhlaWdodDogMTAwc3ZoO1xyXG59XHJcblxyXG4uc2ItbGF5b3V0X19zaWRlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tYXBwLWdyYXlfNTApLCAxKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAgIG9wYWNpdHkgMjAwbXMgZWFzZSAyMDBtcyxcclxuICAgICAgICBwYWRkaW5nIDIwMG1zIGVhc2UsXHJcbiAgICAgICAgd2lkdGggMjAwbXMgZWFzZTtcclxuICAgIHdpZHRoOiBjbGFtcCgyNWNoLCAyNXZ3LCAzMGNoKTtcclxuICAgIHotaW5kZXg6IDEwMDE7XHJcbn1cclxuXHJcbi5zYi1sYXlvdXRfX3NpZGU6bm90KC5pcy1vcGVuKSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRyYW5zaXRpb246XHJcbiAgICAgICAgb3BhY2l0eSAyMDBtcyBlYXNlLFxyXG4gICAgICAgIHBhZGRpbmcgMjAwbXMgZWFzZSAyMDBtcyxcclxuICAgICAgICB3aWR0aCAyMDBtcyBlYXNlIDIwMG1zO1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5zYi1sYXlvdXRfX3NpZGUtLWwge1xyXG4gICAgZ3JpZC1hcmVhOiBzaWRlLWw7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKHZhcigtLWFwcC1ncmF5XzkwMCksIDAuMSk7XHJcbn1cclxuXHJcbi5zYi1sYXlvdXRfX3NpZGUtLXIge1xyXG4gICAgZ3JpZC1hcmVhOiBzaWRlLXI7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEodmFyKC0tYXBwLWdyYXlfOTAwKSwgMC4xKTtcclxufVxyXG5cclxuLnNiLWxheW91dF9fbmF2IHtcclxuICAgIGdyaWQtYXJlYTogbmF2YmFyO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIG1pbi1oZWlnaHQ6IDY2cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1hcHAtZ3JheV85MDApLCAwLjEpO1xyXG59XHJcblxyXG4uc2ItbGF5b3V0X19tYWluIHtcclxuICAgIGdyaWQtYXJlYTogbWFpbjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2ItbGF5b3V0X19mb290ZXIge1xyXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLnNiLWxheW91dF9fc2lkZSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwc3ZoO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB3aWR0aDogODV2dztcclxuICAgIH1cclxuICAgIC5zYi1sYXlvdXRfX3NpZGUtLWwge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDRweCAwIDhweCAzcHggIzAwMDI7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB6LWluZGV4OiAxMDAxO1xyXG4gICAgfVxyXG4gICAgLnNiLWxheW91dF9fc2lkZS0tciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogLTRweCAwIDhweCAzcHggIzAwMDI7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTAwMjtcclxuICAgIH1cclxufVxyXG5cclxuLm1lbnUtdG9nZ2xlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uc2ItaGVhZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDY2cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1hcHAtZ3JheV85MDApLDAuMSk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAgMC43NXJlbTtcclxufVxyXG5cclxuLnNiLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5777:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/holy-grail/holy-sidebar.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HolySidebarService": () => (/* binding */ HolySidebarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);


class HolySidebarService {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this.isLeftOpen = true;
    this.isRightOpen = true;
    if (window.innerWidth <= 700) {
      this.isLeftOpen = false;
      this.isRightOpen = false;
    }
  }
  toggleLeft() {
    this.isLeftOpen = !this.isLeftOpen;
  }
  toggleRight() {
    this.isRightOpen = !this.isRightOpen;
  }
  static {
    this.ɵfac = function HolySidebarService_Factory(t) {
      return new (t || HolySidebarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HolySidebarService,
      factory: HolySidebarService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7655:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/image-uploader-preview/image-uploader-preview.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageUploaderPreviewComponent": () => (/* binding */ ImageUploaderPreviewComponent),
/* harmony export */   "formatBytes": () => (/* binding */ formatBytes)
/* harmony export */ });
/* harmony import */ var C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/toast.service */ 4465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);






const _c0 = ["fileUploadForm"];
const _c1 = ["fileDrag"];
function ImageUploaderPreviewComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Select an image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ImageUploaderPreviewComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageUploaderPreviewComponent_button_12_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.reset($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Remove image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes';
  const k = 1000;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
class ImageUploaderPreviewComponent {
  constructor(toaster) {
    this.toaster = toaster;
    this.base64 = null;
    this.maxSize = 1000000;
    this.fileDragHidden = false;
    this.disabled = false;
    this.onImageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  fileSelectHandler(e) {
    // Fetch FileList object
    const element = e.target;
    const files = element.files || e.dataTransfer.files;
    const file = (files || [])[0];
    // Cancel event and hover styling
    this.fileDragHover(e);
    this.parseFile(file);
  }
  fileDragHover(e) {
    e.stopPropagation();
    e.preventDefault();
    const dragEl = this.fileDrag.nativeElement;
    dragEl.className = e.type === "dragover" ? "hover" : "modal-body file-upload";
  }
  parseFile(file) {
    var _this = this;
    return (0,C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const extCheck = /\.(?=gif|jpg|png|jpeg)/gi.test(file.name);
      const fileDetails = yield _this.getFileBase64(file);
      if (!extCheck) {
        const message = "The file provided is not supported.";
        console.error(message);
        _this.toaster.show(message, {
          classname: "bg-danger text-light"
        });
        _this.reset();
      } else if (fileDetails.size > _this.maxSize) {
        const message = `The image provided exceeds ${formatBytes(_this.maxSize)}.`;
        console.error(message);
        _this.toaster.show(message, {
          classname: "bg-danger text-light"
        });
        _this.reset();
      } else {
        _this.base64 = fileDetails.base64;
        _this.onImageChange.emit(_this.base64);
      }
    })();
  }
  reset(e) {
    this.base64 = null;
    this.onImageChange.emit(this.base64);
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (this.fileUploadForm) {
      this.fileUploadForm.nativeElement.reset();
    }
  }
  getFileBase64(file) {
    return new Promise(resolve => {
      const details = {};
      details.filetype = file.type;
      details.size = file.size;
      details.filename = file.name;
      const reader = new FileReader();
      reader.onload = e => {
        const base64 = btoa(e.target?.result);
        details.base64 = base64;
        resolve(details);
      };
      reader.readAsBinaryString(file);
    });
  }
  static {
    this.ɵfac = function ImageUploaderPreviewComponent_Factory(t) {
      return new (t || ImageUploaderPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ImageUploaderPreviewComponent,
      selectors: [["app-image-uploader-preview"]],
      viewQuery: function ImageUploaderPreviewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.fileUploadForm = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.fileDrag = _t.first);
        }
      },
      inputs: {
        base64: "base64",
        maxSize: "maxSize",
        fileDragHidden: "fileDragHidden",
        disabled: "disabled"
      },
      outputs: {
        onImageChange: "onImageChange"
      },
      decls: 13,
      vars: 16,
      consts: [["id", "file-upload-form", 1, "uploader"], ["fileUploadForm", ""], ["id", "file-upload", "type", "file", "name", "fileUpload", "accept", "image/*", 3, "change"], ["for", "file-upload", "id", "file-drag", 3, "dragover", "dragleave", "drop"], ["fileDrag", ""], ["id", "file-image", "alt", "Preview", 3, "src"], ["id", "start"], [1, "fa", "fa-download"], ["id", "file-upload-btn", "class", "btn btn-primary", 4, "ngIf"], [1, "text-center"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], ["id", "file-upload-btn", 1, "btn", "btn-primary"], [1, "btn", "btn-danger", 3, "click"]],
      template: function ImageUploaderPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0, 1)(2, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ImageUploaderPreviewComponent_Template_input_change_2_listener($event) {
            return ctx.fileSelectHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 3, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragover", function ImageUploaderPreviewComponent_Template_label_dragover_3_listener($event) {
            return ctx.fileDragHover($event);
          })("dragleave", function ImageUploaderPreviewComponent_Template_label_dragleave_3_listener($event) {
            return ctx.fileDragHover($event);
          })("drop", function ImageUploaderPreviewComponent_Template_label_drop_3_listener($event) {
            return ctx.fileSelectHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ImageUploaderPreviewComponent_span_10_Template, 2, 0, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ImageUploaderPreviewComponent_button_12_Template, 2, 0, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("not-clickable", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("d-none", ctx.fileDragHidden);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hidden", !ctx.base64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.base64 ? "data:image/png;base64," + ctx.base64 : "#", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hidden", ctx.base64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("fa-download", !ctx.disabled)("fa-picture-o", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.disabled ? "Image is not present" : "Select an image or drag here", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.disabled && ctx.base64);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: ["[_nghost-%COMP%], .uploader[_ngcontent-%COMP%] {\r\n    display: grid;\r\n}\r\n\r\n.uploader[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    max-width: 600px;\r\n    width: 100%;\r\n}\r\n\r\n.uploader[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 1.5rem;\r\n    text-align: center;\r\n    background: rgba(var(--app-primary_0), 1);\r\n    border-radius: var(--border-radius_md);\r\n    border: 3px solid rgba(var(--app-gray_100), 1);\r\n    transition: all 0.2s ease;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.uploader[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\r\n    border-color: rgba(var(--app-primary_500), 1);\r\n}\r\n\r\n.uploader[_ngcontent-%COMP%]   label.hover[_ngcontent-%COMP%] {\r\n    border: 3px solid rgba(var(--app-primary_500), 1);\r\n    box-shadow: inset 0 0 0 6px #eee;\r\n}\r\n\r\n.uploader[_ngcontent-%COMP%]   label.hover[_ngcontent-%COMP%]   #start[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%] {\r\n    transform: scale(0.8);\r\n    opacity: 0.3;\r\n}\r\n\r\n.uploader[_ngcontent-%COMP%]   #start[_ngcontent-%COMP%] {\r\n    float: left;\r\n    clear: both;\r\n    width: 100%;\r\n}\r\n\r\n.uploader[_ngcontent-%COMP%]   #start.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.uploader[_ngcontent-%COMP%]   #start[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    margin-bottom: 1rem;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.uploader[_ngcontent-%COMP%]   #response[_ngcontent-%COMP%] {\r\n    float: left;\r\n    clear: both;\r\n    width: 100%;\r\n}\r\n\r\n.uploader[_ngcontent-%COMP%]   #response.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.uploader[_ngcontent-%COMP%]   #response[_ngcontent-%COMP%]   #messages[_ngcontent-%COMP%] {\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.uploader[_ngcontent-%COMP%]   #file-image[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    margin: 0 auto 0.5rem auto;\r\n    width: auto;\r\n    height: auto;\r\n    max-width: 180px;\r\n}\r\n\r\n.uploader[_ngcontent-%COMP%]   #file-image.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.uploader[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.uploader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    margin: 0 0 0.5rem 0;\r\n    color: #5f6982;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW1hZ2UtdXBsb2FkZXItcHJldmlldy9pbWFnZS11cGxvYWRlci1wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsc0NBQXNDO0lBQ3RDLDhDQUE4QztJQUM5Qyx5QkFBeUI7SUFDekIseUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCwgLnVwbG9hZGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuXHJcbi51cGxvYWRlciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnVwbG9hZGVyIGxhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1hcHAtcHJpbWFyeV8wKSwgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzX21kKTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEodmFyKC0tYXBwLWdyYXlfMTAwKSwgMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi51cGxvYWRlciBsYWJlbDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEodmFyKC0tYXBwLXByaW1hcnlfNTAwKSwgMSk7XHJcbn1cclxuXHJcbi51cGxvYWRlciBsYWJlbC5ob3ZlciB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKHZhcigtLWFwcC1wcmltYXJ5XzUwMCksIDEpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNnB4ICNlZWU7XHJcbn1cclxuXHJcbi51cGxvYWRlciBsYWJlbC5ob3ZlciAjc3RhcnQgaS5mYSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi51cGxvYWRlciAjc3RhcnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udXBsb2FkZXIgI3N0YXJ0LmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udXBsb2FkZXIgI3N0YXJ0IGkuZmEge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4udXBsb2FkZXIgI3Jlc3BvbnNlIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnVwbG9hZGVyICNyZXNwb25zZS5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnVwbG9hZGVyICNyZXNwb25zZSAjbWVzc2FnZXMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4udXBsb2FkZXIgI2ZpbGUtaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMC41cmVtIGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTgwcHg7XHJcbn1cclxuXHJcbi51cGxvYWRlciAjZmlsZS1pbWFnZS5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnVwbG9hZGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnVwbG9hZGVyIGRpdiB7XHJcbiAgICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcclxuICAgIGNvbG9yOiAjNWY2OTgyO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 167:
/*!******************************************************!*\
  !*** ./src/app/shared/components/input/constants.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DUMMY_VALUE_ACCESSOR": () => (/* binding */ DUMMY_VALUE_ACCESSOR),
/* harmony export */   "defaultFilter": () => (/* binding */ defaultFilter),
/* harmony export */   "defaultFormatter": () => (/* binding */ defaultFormatter),
/* harmony export */   "defaultLimitTextFactory": () => (/* binding */ defaultLimitTextFactory),
/* harmony export */   "supportedTypes": () => (/* binding */ supportedTypes)
/* harmony export */ });
const DUMMY_VALUE_ACCESSOR = {
  writeValue() {},
  registerOnChange() {},
  registerOnTouched() {}
};
const supportedTypes = ["text", "textarea", "password", "number", "range", "year", "date", "time", "datetime", "select", "checkbox", "radio", "autocomplete", "tagger"];
const defaultLimitTextFactory = limit => {
  return "Limited to " + limit + " items, type for more results.";
};
const defaultFormatter = (item, index) => {
  if (typeof item === "object") {
    return Object.values(item).join(" ");
  } else if (typeof item === "string") {
    return item;
  }
  return "";
};
const defaultFilter = (term, item) => {
  if (typeof item === "object") {
    const stringifiedValues = JSON.stringify(Object.values(item)).toLowerCase();
    return stringifiedValues.includes(term.toLowerCase());
  } else if (typeof item === "string") {
    return item.toLowerCase().includes(term.toLowerCase());
  } else {
    return true;
  }
};

/***/ }),

/***/ 2371:
/*!************************************************************!*\
  !*** ./src/app/shared/components/input/input.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var src_app_utils_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/uuid */ 3488);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ 167);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _directives_text2mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/text2mask */ 338);











function InputComponent_ng_template_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ngControl_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Minimum ", ngControl_r9.errors == null ? null : ngControl_r9.errors.min.min, " ");
  }
}
function InputComponent_ng_template_0_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ngControl_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Maximum ", ngControl_r9.errors == null ? null : ngControl_r9.errors.max.max, " ");
  }
}
function InputComponent_ng_template_0_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function InputComponent_ng_template_0_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Invalid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function InputComponent_ng_template_0_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ngControl_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Minimum length ", ngControl_r9.errors == null ? null : ngControl_r9.errors.minlength.requiredLength, " ");
  }
}
function InputComponent_ng_template_0_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ngControl_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Maximum length ", ngControl_r9.errors == null ? null : ngControl_r9.errors.maxlength.requiredLength, " ");
  }
}
function InputComponent_ng_template_0_ng_container_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Invalid format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function InputComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InputComponent_ng_template_0_ng_container_1_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_template_0_ng_container_1_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, InputComponent_ng_template_0_ng_container_1_div_3_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InputComponent_ng_template_0_ng_container_1_div_4_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InputComponent_ng_template_0_ng_container_1_div_5_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, InputComponent_ng_template_0_ng_container_1_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, InputComponent_ng_template_0_ng_container_1_div_7_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ngControl_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ngControl_r9.errors == null ? null : ngControl_r9.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ngControl_r9.errors == null ? null : ngControl_r9.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ngControl_r9.errors == null ? null : ngControl_r9.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ngControl_r9.errors == null ? null : ngControl_r9.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ngControl_r9.errors == null ? null : ngControl_r9.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ngControl_r9.errors == null ? null : ngControl_r9.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ngControl_r9.errors == null ? null : ngControl_r9.errors.pattern);
  }
}
function InputComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InputComponent_ng_template_0_ng_container_1_Template, 8, 7, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.onlyCustomErrors);
  }
}
const _c0 = function (a0) {
  return {
    mask: a0
  };
};
function InputComponent_ng_container_2_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r34.disabled)("is-invalid", ctx_r34.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r34.disabled ? -1 : 0)("textMask", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, ctx_r34.mask))("formControl", ctx_r34.ngControl)("id", ctx_r34._name)("placeholder", ctx_r34.placeholder)("minlength", ctx_r34.minLength)("maxlength", ctx_r34.maxLength);
  }
}
function InputComponent_ng_container_2_ng_container_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "input", 14);
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r36.disabled)("is-invalid", ctx_r36.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r36.disabled ? -1 : 0)("formControl", ctx_r36.ngControl)("id", ctx_r36._name)("placeholder", ctx_r36.placeholder)("minlength", ctx_r36.minLength)("maxlength", ctx_r36.maxLength);
  }
}
function InputComponent_ng_container_2_ng_container_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_container_2_ng_container_2_i_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputComponent_ng_container_2_ng_container_2_i_8_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r39.ngControl.setValue(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    $implicit: a0
  };
};
function InputComponent_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_container_2_ng_container_2_ng_container_2_Template, 2, 13, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, InputComponent_ng_container_2_ng_container_2_ng_template_3_Template, 1, 10, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, InputComponent_ng_container_2_ng_container_2_ng_container_7_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, InputComponent_ng_container_2_ng_container_2_i_8_Template, 1, 0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r23.mask)("ngIfElse", _r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r23._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r23.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c1, ctx_r23.ngControl));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r23.ngControl.value && ctx_r23.ngControl.status !== "DISABLED" && !ctx_r23.disabled);
  }
}
function InputComponent_ng_container_2_ng_container_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_container_2_ng_container_3_i_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputComponent_ng_container_2_ng_container_3_i_6_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r43.ngControl.setValue(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function InputComponent_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InputComponent_ng_container_2_ng_container_3_ng_container_5_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, InputComponent_ng_container_2_ng_container_3_i_6_Template, 1, 0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r24.disabled)("is-invalid", ctx_r24.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r24.disabled ? -1 : 0)("formControl", ctx_r24.ngControl)("id", ctx_r24._name)("placeholder", ctx_r24.placeholder)("minlength", ctx_r24.minLength)("maxlength", ctx_r24.maxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r24._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r24.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c1, ctx_r24.ngControl));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r24.ngControl.value && ctx_r24.ngControl.status !== "DISABLED" && !ctx_r24.disabled);
  }
}
function InputComponent_ng_container_2_ng_container_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InputComponent_ng_container_2_ng_container_4_ng_container_5_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r25.disabled)("is-invalid", ctx_r25.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r25.disabled ? -1 : 0)("formControl", ctx_r25.ngControl)("id", ctx_r25._name)("placeholder", ctx_r25.placeholder)("step", ctx_r25.step)("min", ctx_r25.min)("max", ctx_r25.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r25._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r25.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c1, ctx_r25.ngControl));
  }
}
function InputComponent_ng_container_2_ng_container_5_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_container_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InputComponent_ng_container_2_ng_container_5_ng_container_5_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r26.disabled)("is-invalid", ctx_r26.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r26.disabled ? -1 : 0)("formControl", ctx_r26.ngControl)("id", ctx_r26._name)("placeholder", ctx_r26.placeholder)("minlength", ctx_r26.minLength)("maxlength", ctx_r26.maxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r26._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r26.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c1, ctx_r26.ngControl));
  }
}
function InputComponent_ng_container_2_ng_container_6_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", opt_r49.value)("disabled", opt_r49.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", opt_r49.text, " ");
  }
}
function InputComponent_ng_container_2_ng_container_6_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8)(2, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, InputComponent_ng_container_2_ng_container_6_option_3_Template, 2, 3, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, InputComponent_ng_container_2_ng_container_6_ng_container_6_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r27.disabled)("is-invalid", ctx_r27.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r27.disabled ? -1 : 0)("formControl", ctx_r27.ngControl)("id", ctx_r27._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r27.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r27.disabled ? "nowhere" : ctx_r27._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r27.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c1, ctx_r27.ngControl));
  }
}
function InputComponent_ng_container_2_ng_container_7_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", opt_r52.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", opt_r52.text, " ");
  }
}
function InputComponent_ng_container_2_ng_container_7_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_container_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8)(2, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, InputComponent_ng_container_2_ng_container_7_option_3_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, InputComponent_ng_container_2_ng_container_7_ng_container_6_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r28.disabled)("is-invalid", ctx_r28.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r28.disabled ? -1 : 0)("formControl", ctx_r28.ngControl)("id", ctx_r28._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r28.yearOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r28.disabled ? "nowhere" : ctx_r28._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r28.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c1, ctx_r28.ngControl));
  }
}
function InputComponent_ng_container_2_ng_container_8_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_container_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InputComponent_ng_container_2_ng_container_8_ng_container_5_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r29.disabled)("is-invalid", ctx_r29.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r29.disabled ? -1 : 0)("placeholder", ctx_r29.placeholder)("id", ctx_r29._name)("name", ctx_r29.name)("formControl", ctx_r29.ngControl)("min", ctx_r29.min)("max", ctx_r29.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r29._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r29.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c1, ctx_r29.ngControl));
  }
}
function InputComponent_ng_container_2_ng_container_9_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_container_2_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InputComponent_ng_container_2_ng_container_9_ng_container_5_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r30.disabled)("is-invalid", ctx_r30.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r30.disabled ? -1 : 0)("placeholder", ctx_r30.placeholder)("id", ctx_r30._name)("name", ctx_r30.name)("formControl", ctx_r30.ngControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r30._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r30.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c1, ctx_r30.ngControl));
  }
}
function InputComponent_ng_container_2_ng_container_10_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_container_2_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InputComponent_ng_container_2_ng_container_10_ng_container_5_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r31.disabled)("is-invalid", ctx_r31.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r31.disabled ? -1 : 0)("placeholder", ctx_r31.placeholder)("id", ctx_r31._name)("name", ctx_r31.name)("formControl", ctx_r31.ngControl)("min", ctx_r31.min)("max", ctx_r31.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r31._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r31.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c1, ctx_r31.ngControl));
  }
}
function InputComponent_ng_container_2_ng_container_11_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_container_2_ng_container_11_i_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputComponent_ng_container_2_ng_container_11_i_7_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r59.ngControl.setValue(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function InputComponent_ng_container_2_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 27)(2, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InputComponent_ng_container_2_ng_container_11_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r61.autocompleteChoice = $event);
    })("focus", function InputComponent_ng_container_2_ng_container_11_Template_input_focus_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r63.focus$.next($event.target.value));
    })("click", function InputComponent_ng_container_2_ng_container_11_Template_input_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62);
      const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r64.onAutocompleteClick(_r56, $event));
    })("change", function InputComponent_ng_container_2_ng_container_11_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r65.markAsTouched());
    })("blur", function InputComponent_ng_container_2_ng_container_11_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r66.markAsTouched());
    })("selectItem", function InputComponent_ng_container_2_ng_container_11_Template_input_selectItem_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r67.selectItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, InputComponent_ng_container_2_ng_container_11_ng_container_6_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, InputComponent_ng_container_2_ng_container_11_i_7_Template, 1, 0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ctx_r32.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "autocomplete-" + ctx_r32.guid)("id", ctx_r32._name)("placeholder", ctx_r32.placeholder)("ngbTypeahead", ctx_r32.search)("inputFormatter", ctx_r32.formatter)("resultFormatter", ctx_r32.formatter)("resultTemplate", ctx_r32.template)("editable", false)("disabled", ctx_r32.disabled)("ngModel", ctx_r32.autocompleteChoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r32._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r32.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c1, ctx_r32.ngControl));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r32.ngControl.value && ctx_r32.ngControl.status !== "DISABLED" && !ctx_r32.disabled);
  }
}
function InputComponent_ng_container_2_ng_container_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 33)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputComponent_ng_container_2_ng_container_12_span_3_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r74);
      const tag_r71 = restoredCtx.$implicit;
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r73.removeTag(tag_r71));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r71 = ctx.$implicit;
    const i_r72 = ctx.index;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r68.formatter(tag_r71, i_r72));
  }
}
function InputComponent_ng_container_2_ng_container_12_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_container_2_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div")(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, InputComponent_ng_container_2_ng_container_12_span_3_Template, 5, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 27)(5, "input", 32, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InputComponent_ng_container_2_ng_container_12_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r75.autocompleteChoice = $event);
    })("focus", function InputComponent_ng_container_2_ng_container_12_Template_input_focus_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r76);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r77.focus$.next($event.target.value));
    })("click", function InputComponent_ng_container_2_ng_container_12_Template_input_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r76);
      const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r78.onAutocompleteClick(_r69, $event));
    })("change", function InputComponent_ng_container_2_ng_container_12_Template_input_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r76);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r79.markAsTouched());
    })("blur", function InputComponent_ng_container_2_ng_container_12_Template_input_blur_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r76);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r80.markAsTouched());
    })("selectItem", function InputComponent_ng_container_2_ng_container_12_Template_input_selectItem_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r76);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r81.taggerChoiceSelected($event));
    })("keyup.enter", function InputComponent_ng_container_2_ng_container_12_Template_input_keyup_enter_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r76);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r82.freeTagOnEnter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, InputComponent_ng_container_2_ng_container_12_ng_container_9_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r33.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ctx_r33.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "autocomplete-" + ctx_r33.guid)("id", ctx_r33._name)("placeholder", ctx_r33.placeholder)("ngbTypeahead", ctx_r33.search)("inputFormatter", ctx_r33.formatter)("resultFormatter", ctx_r33.formatter)("resultTemplate", ctx_r33.template)("editable", false)("disabled", ctx_r33.disabled)("ngModel", ctx_r33.autocompleteChoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r33._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r33.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c1, ctx_r33.ngControl));
  }
}
function InputComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0)(1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_container_2_ng_container_2_Template, 9, 9, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, InputComponent_ng_container_2_ng_container_3_Template, 7, 17, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InputComponent_ng_container_2_ng_container_4_Template, 6, 17, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InputComponent_ng_container_2_ng_container_5_Template, 6, 16, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, InputComponent_ng_container_2_ng_container_6_Template, 7, 14, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, InputComponent_ng_container_2_ng_container_7_Template, 7, 14, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, InputComponent_ng_container_2_ng_container_8_Template, 6, 17, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, InputComponent_ng_container_2_ng_container_9_Template, 6, 15, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, InputComponent_ng_container_2_ng_container_10_Template, 6, 17, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, InputComponent_ng_container_2_ng_container_11_Template, 8, 19, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, InputComponent_ng_container_2_ng_container_12_Template, 10, 19, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "year");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "autocomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "tagger");
  }
}
function InputComponent_ng_template_3_ng_container_1_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r94.disabled ? "nowhere" : ctx_r94._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r94.label);
  }
}
function InputComponent_ng_template_3_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r95.disabled)("is-invalid", ctx_r95.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r95.disabled ? -1 : 0)("textMask", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, ctx_r95.mask))("formControl", ctx_r95.ngControl)("id", ctx_r95._name)("placeholder", ctx_r95.placeholder)("minlength", ctx_r95.minLength)("maxlength", ctx_r95.maxLength);
  }
}
function InputComponent_ng_template_3_ng_container_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "input", 14);
  }
  if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r97.disabled)("is-invalid", ctx_r97.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r97.disabled ? -1 : 0)("formControl", ctx_r97.ngControl)("id", ctx_r97._name)("placeholder", ctx_r97.placeholder)("minlength", ctx_r97.minLength)("maxlength", ctx_r97.maxLength);
  }
}
function InputComponent_ng_template_3_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_template_3_ng_container_1_i_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputComponent_ng_template_3_ng_container_1_i_8_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r101);
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r100.ngControl.setValue(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function InputComponent_ng_template_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_template_3_ng_container_1_label_2_Template, 2, 2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InputComponent_ng_template_3_ng_container_1_ng_container_4_Template, 2, 13, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InputComponent_ng_template_3_ng_container_1_ng_template_5_Template, 1, 10, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, InputComponent_ng_template_3_ng_container_1_ng_container_7_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, InputComponent_ng_template_3_ng_container_1_i_8_Template, 1, 0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r83.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r83.mask)("ngIfElse", _r96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c1, ctx_r83.ngControl));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r83.ngControl.value && ctx_r83.ngControl.status !== "DISABLED" && !ctx_r83.disabled);
  }
}
function InputComponent_ng_template_3_ng_container_2_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r102.disabled ? "nowhere" : ctx_r102._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r102.label);
  }
}
function InputComponent_ng_template_3_ng_container_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_template_3_ng_container_2_i_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputComponent_ng_template_3_ng_container_2_i_6_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r105.ngControl.setValue(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function InputComponent_ng_template_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_template_3_ng_container_2_label_2_Template, 2, 2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InputComponent_ng_template_3_ng_container_2_ng_container_5_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, InputComponent_ng_template_3_ng_container_2_i_6_Template, 1, 0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r84.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r84.disabled)("is-invalid", ctx_r84.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r84.disabled ? -1 : 0)("formControl", ctx_r84.ngControl)("id", ctx_r84._name)("placeholder", ctx_r84.placeholder)("minlength", ctx_r84.minLength)("maxlength", ctx_r84.maxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c1, ctx_r84.ngControl));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r84.ngControl.value && ctx_r84.ngControl.status !== "DISABLED" && !ctx_r84.disabled);
  }
}
function InputComponent_ng_template_3_ng_container_3_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r107.disabled ? "nowhere" : ctx_r107._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r107.label);
  }
}
function InputComponent_ng_template_3_ng_container_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_template_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_template_3_ng_container_3_label_2_Template, 2, 2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InputComponent_ng_template_3_ng_container_3_ng_container_4_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r85.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r85.disabled)("is-invalid", ctx_r85.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r85.disabled ? -1 : 0)("formControl", ctx_r85.ngControl)("id", ctx_r85._name)("placeholder", ctx_r85.placeholder)("step", ctx_r85.step)("min", ctx_r85.min)("max", ctx_r85.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c1, ctx_r85.ngControl));
  }
}
function InputComponent_ng_template_3_ng_container_4_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r109.disabled ? "nowhere" : ctx_r109._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r109.label);
  }
}
function InputComponent_ng_template_3_ng_container_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_template_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_template_3_ng_container_4_label_2_Template, 2, 2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "textarea", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InputComponent_ng_template_3_ng_container_4_ng_container_4_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r86.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r86.disabled)("is-invalid", ctx_r86.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r86.disabled ? -1 : 0)("formControl", ctx_r86.ngControl)("id", ctx_r86._name)("placeholder", ctx_r86.placeholder)("minlength", ctx_r86.minLength)("maxlength", ctx_r86.maxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c1, ctx_r86.ngControl));
  }
}
function InputComponent_ng_template_3_ng_container_5_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r111.disabled ? "nowhere" : ctx_r111._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r111.label);
  }
}
function InputComponent_ng_template_3_ng_container_5_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", opt_r114.value)("disabled", opt_r114.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", opt_r114.text, " ");
  }
}
function InputComponent_ng_template_3_ng_container_5_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_template_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_template_3_ng_container_5_label_2_Template, 2, 2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InputComponent_ng_template_3_ng_container_5_option_4_Template, 2, 3, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InputComponent_ng_template_3_ng_container_5_ng_container_5_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r87.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r87.disabled)("is-invalid", ctx_r87.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r87.disabled ? -1 : 0)("formControl", ctx_r87.ngControl)("id", ctx_r87._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r87.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c1, ctx_r87.ngControl));
  }
}
function InputComponent_ng_template_3_ng_container_6_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r115.disabled ? "nowhere" : ctx_r115._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r115.label);
  }
}
function InputComponent_ng_template_3_ng_container_6_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", opt_r118.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", opt_r118.text, " ");
  }
}
function InputComponent_ng_template_3_ng_container_6_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_template_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_template_3_ng_container_6_label_2_Template, 2, 2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InputComponent_ng_template_3_ng_container_6_option_4_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InputComponent_ng_template_3_ng_container_6_ng_container_5_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r88.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r88.disabled)("is-invalid", ctx_r88.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r88.disabled ? -1 : 0)("formControl", ctx_r88.ngControl)("id", ctx_r88._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r88.yearOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c1, ctx_r88.ngControl));
  }
}
function InputComponent_ng_template_3_ng_container_7_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r119.disabled ? "nowhere" : ctx_r119._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r119.label);
  }
}
function InputComponent_ng_template_3_ng_container_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_template_3_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_template_3_ng_container_7_label_2_Template, 2, 2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InputComponent_ng_template_3_ng_container_7_ng_container_4_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r89.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r89.disabled)("is-invalid", ctx_r89.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r89.disabled ? -1 : 0)("placeholder", ctx_r89.placeholder)("id", ctx_r89._name)("name", ctx_r89.name)("formControl", ctx_r89.ngControl)("min", ctx_r89.min)("max", ctx_r89.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c1, ctx_r89.ngControl));
  }
}
function InputComponent_ng_template_3_ng_container_8_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r121.disabled ? "nowhere" : ctx_r121._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r121.label);
  }
}
function InputComponent_ng_template_3_ng_container_8_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_template_3_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_template_3_ng_container_8_label_2_Template, 2, 2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InputComponent_ng_template_3_ng_container_8_ng_container_4_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r90.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r90.disabled)("is-invalid", ctx_r90.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r90.disabled ? -1 : 0)("placeholder", ctx_r90.placeholder)("id", ctx_r90._name)("name", ctx_r90.name)("formControl", ctx_r90.ngControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c1, ctx_r90.ngControl));
  }
}
function InputComponent_ng_template_3_ng_container_9_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r123.disabled ? "nowhere" : ctx_r123._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r123.label);
  }
}
function InputComponent_ng_template_3_ng_container_9_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_template_3_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_template_3_ng_container_9_label_2_Template, 2, 2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InputComponent_ng_template_3_ng_container_9_ng_container_4_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r91.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r91.disabled)("is-invalid", ctx_r91.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r91.disabled ? -1 : 0)("placeholder", ctx_r91.placeholder)("id", ctx_r91._name)("name", ctx_r91.name)("formControl", ctx_r91.ngControl)("min", ctx_r91.min)("max", ctx_r91.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c1, ctx_r91.ngControl));
  }
}
function InputComponent_ng_template_3_ng_container_10_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r125._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r125.label);
  }
}
function InputComponent_ng_template_3_ng_container_10_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_template_3_ng_container_10_i_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputComponent_ng_template_3_ng_container_10_i_7_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r130);
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r129.ngControl.setValue(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function InputComponent_ng_template_3_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_template_3_ng_container_10_label_2_Template, 2, 2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 37)(4, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InputComponent_ng_template_3_ng_container_10_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r132);
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r131.autocompleteChoice = $event);
    })("focus", function InputComponent_ng_template_3_ng_container_10_Template_input_focus_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r132);
      const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r133.focus$.next($event.target.value));
    })("click", function InputComponent_ng_template_3_ng_container_10_Template_input_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r132);
      const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
      const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r134.onAutocompleteClick(_r126, $event));
    })("change", function InputComponent_ng_template_3_ng_container_10_Template_input_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r132);
      const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r135.markAsTouched());
    })("blur", function InputComponent_ng_template_3_ng_container_10_Template_input_blur_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r132);
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r136.markAsTouched());
    })("selectItem", function InputComponent_ng_template_3_ng_container_10_Template_input_selectItem_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r132);
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r137.selectItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, InputComponent_ng_template_3_ng_container_10_ng_container_6_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, InputComponent_ng_template_3_ng_container_10_i_7_Template, 1, 0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r92.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ctx_r92.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "autocomplete-" + ctx_r92.guid)("id", ctx_r92._name)("placeholder", ctx_r92.placeholder)("ngbTypeahead", ctx_r92.search)("inputFormatter", ctx_r92.formatter)("resultFormatter", ctx_r92.formatter)("resultTemplate", ctx_r92.template)("editable", false)("disabled", ctx_r92.disabled)("ngModel", ctx_r92.autocompleteChoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c1, ctx_r92.ngControl));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r92.ngControl.value && ctx_r92.ngControl.status !== "DISABLED" && !ctx_r92.disabled);
  }
}
function InputComponent_ng_template_3_ng_container_11_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r138._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r138.label);
  }
}
function InputComponent_ng_template_3_ng_container_11_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 33)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputComponent_ng_template_3_ng_container_11_span_4_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r145);
      const tag_r142 = restoredCtx.$implicit;
      const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r144.removeTag(tag_r142));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r142 = ctx.$implicit;
    const i_r143 = ctx.index;
    const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r139.formatter(tag_r142, i_r143));
  }
}
function InputComponent_ng_template_3_ng_container_11_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_template_3_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_template_3_ng_container_11_label_2_Template, 2, 2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InputComponent_ng_template_3_ng_container_11_span_4_Template, 5, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 32, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InputComponent_ng_template_3_ng_container_11_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r147);
      const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r146.autocompleteChoice = $event);
    })("focus", function InputComponent_ng_template_3_ng_container_11_Template_input_focus_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r147);
      const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r148.focus$.next($event.target.value));
    })("click", function InputComponent_ng_template_3_ng_container_11_Template_input_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r147);
      const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
      const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r149.onAutocompleteClick(_r140, $event));
    })("change", function InputComponent_ng_template_3_ng_container_11_Template_input_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r147);
      const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r150.markAsTouched());
    })("blur", function InputComponent_ng_template_3_ng_container_11_Template_input_blur_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r147);
      const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r151.markAsTouched());
    })("selectItem", function InputComponent_ng_template_3_ng_container_11_Template_input_selectItem_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r147);
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r152.taggerChoiceSelected($event));
    })("keyup.enter", function InputComponent_ng_template_3_ng_container_11_Template_input_keyup_enter_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r147);
      const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r153.freeTagOnEnter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, InputComponent_ng_template_3_ng_container_11_ng_container_7_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r93.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r93.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ctx_r93.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "autocomplete-" + ctx_r93.guid)("id", ctx_r93._name)("placeholder", ctx_r93.placeholder)("ngbTypeahead", ctx_r93.search)("inputFormatter", ctx_r93.formatter)("resultFormatter", ctx_r93.formatter)("resultTemplate", ctx_r93.template)("editable", false)("disabled", ctx_r93.disabled)("ngModel", ctx_r93.autocompleteChoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c1, ctx_r93.ngControl));
  }
}
function InputComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InputComponent_ng_template_3_ng_container_1_Template, 9, 8, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_template_3_ng_container_2_Template, 7, 16, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, InputComponent_ng_template_3_ng_container_3_Template, 5, 16, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InputComponent_ng_template_3_ng_container_4_Template, 5, 15, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InputComponent_ng_template_3_ng_container_5_Template, 6, 13, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, InputComponent_ng_template_3_ng_container_6_Template, 6, 13, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, InputComponent_ng_template_3_ng_container_7_Template, 5, 16, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, InputComponent_ng_template_3_ng_container_8_Template, 5, 14, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, InputComponent_ng_template_3_ng_container_9_Template, 5, 16, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, InputComponent_ng_template_3_ng_container_10_Template, 8, 18, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, InputComponent_ng_template_3_ng_container_11_Template, 8, 18, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "year");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "autocomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "tagger");
  }
}
function InputComponent_ng_container_6_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r154.disabled ? "nowhere" : ctx_r154._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r154.label, " ");
  }
}
function InputComponent_ng_container_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, InputComponent_ng_container_6_label_3_Template, 2, 2, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InputComponent_ng_container_6_ng_container_4_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r5.disabled)("is-invalid", ctx_r5.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r5.disabled ? -1 : 0)("formControl", ctx_r5.ngControl)("id", ctx_r5._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c1, ctx_r5.ngControl));
  }
}
function InputComponent_ng_container_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const opt_r157 = ctx.$implicit;
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r156.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r156.disabled ? -1 : 0)("value", opt_r157.value)("name", ctx_r156.name)("id", opt_r157._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r156.disabled ? "nowhere" : opt_r157._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", opt_r157.text, " ");
  }
}
function InputComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_container_7_div_2_Template, 4, 8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.options);
  }
}
function InputComponent_ng_container_8_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", ctx_r158.disabled ? "nowhere" : ctx_r158._name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r158.label, " ", !ctx_r158.noParenthesisValue && ctx_r158.ngControl.value !== undefined && ctx_r158.ngControl.value !== null && ctx_r158.ngControl.value !== "" ? "(" + ctx_r158.ngControl.value + ")" : "", "");
  }
}
function InputComponent_ng_container_8_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function InputComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_container_8_label_2_Template, 2, 3, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, InputComponent_ng_container_8_ng_container_4_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pseudo-disabled", ctx_r7.disabled)("is-invalid", ctx_r7.isInvalid());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", ctx_r7.disabled ? -1 : 0)("formControl", ctx_r7.ngControl)("id", ctx_r7._name)("name", ctx_r7.name)("step", ctx_r7.step)("min", ctx_r7.min)("max", ctx_r7.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c1, ctx_r7.ngControl));
  }
}
function InputComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.helper);
  }
}
const _c2 = [[["", "customErrors", ""]]];
const _c3 = ["[customErrors]"];
class InputComponent {
  set _min(val) {
    this.min = val;
    this.yearOptions = this.getYearOptions(true);
  }
  set _max(val) {
    this.max = val;
    this.yearOptions = this.getYearOptions(true);
  }
  set autocompleteChoice(value) {
    this._autocompleteChoice = value;
    this.onAutocompleteChange(value);
  }
  get autocompleteChoice() {
    return this._autocompleteChoice;
  }
  set options(options) {
    this.options$.next(options);
  }
  get options() {
    if (this.freeTag) {
      return [];
    }
    return this.options$.getValue();
  }
  constructor(formControlName) {
    this.formControlName = formControlName;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.currYear = new Date().getFullYear();
    this.yearPlusMinus = 6; // Example: 2017 ... 2023 ... 2029
    this.yearOptions = this.getYearOptions();
    this.floatingLabel = false;
    this.feedback = true;
    this.disabled = false;
    this.type = "text";
    this.placeholder = ' ';
    this.onlyCustomErrors = false;
    this.noParenthesisValue = false;
    // Autocomplete and tagger properties
    this.deduped = true;
    this.freeTag = false;
    this.limit = false;
    this.limitTextMaker = _constants__WEBPACK_IMPORTED_MODULE_2__.defaultLimitTextFactory;
    this.formatter = _constants__WEBPACK_IMPORTED_MODULE_2__.defaultFormatter;
    this.filter = _constants__WEBPACK_IMPORTED_MODULE_2__.defaultFilter;
    this.selectItemEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.options$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
    this.tags = [];
    if (this.formControlName) {
      this.formControlName.valueAccessor = _constants__WEBPACK_IMPORTED_MODULE_2__.DUMMY_VALUE_ACCESSOR;
    }
  }
  ngOnInit() {
    // Provide compatibility with formControlName directive
    if (!this.ngControl && this.formControlName) {
      this.ngControl = this.formControlName.control;
    }
    this.handleErrors();
    this.guid = (0,src_app_utils_uuid__WEBPACK_IMPORTED_MODULE_1__.guid)();
    this._name = this.name + "-" + this.guid;
    this.addOptionIds();
    if (this.type === "autocomplete") {
      this.setAutocompleteDefault();
      this.setAutocompleteSearch();
      this.setAutocompleteReactivity();
    }
    if (this.type === "tagger") {
      this.setTaggerDefault();
      this.setAutocompleteSearch();
      this.setTaggerReactivity();
    }
    if (["autocomplete", "tagger"].includes(this.type) && this.limit) {
      this.appendLimitExplainerStylesheet();
    }
    // Sync this.disabled value to ngControl status
    if (this.ngControl.disabled) {
      this.disabled = true;
    }
    this.ngControl.statusChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(status => status === "DISABLED"), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(disabled => this.disabled !== disabled)).subscribe(disabled => {
      this.disabled = disabled;
    });
  }
  ngOnChanges(changes) {
    // Sync ngControl status with this.disabled value
    if (changes.disabled && this.ngControl) {
      if (changes.disabled.currentValue) {
        this.ngControl.disable({
          onlySelf: true,
          emitEvent: false
        });
      } else {
        this.ngControl.enable({
          onlySelf: true,
          emitEvent: false
        });
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    if (["autocomplete", "tagger"].includes(this.type) && this.limit) {
      this.removeLimitExplainerStylesheet();
    }
  }
  handleErrors() {
    if (!_constants__WEBPACK_IMPORTED_MODULE_2__.supportedTypes.includes(this.type)) {
      throw Error("Type " + this.type + " is not supported.");
    }
    if (!this.ngControl) {
      throw Error("app-input needs a ngControl");
    }
    if (!this.name) {
      throw Error("app-input needs a name");
    }
    if (this.type === "select" || this.type === "radio") {
      if (!this.options || this.options && !Array.isArray(this.options)) {
        throw Error("Select and radio need the options array");
      }
    }
    if (this.type === "autocomplete" && !this.customSearch) {
      if (!this.options || this.options && !Array.isArray(this.options)) {
        throw Error("Autocomplete without a custom search needs the options array");
      }
    }
    if (this.type === "tagger" && !this.freeTag) {
      if (!this.options || this.options && !Array.isArray(this.options)) {
        throw Error("Tagger without a free tag needs the options array");
      }
    }
  }
  isInvalid() {
    return this.ngControl.touched && this.ngControl.errors;
  }
  getYearOptions(fromSetter = false) {
    if (fromSetter && this.type !== "year") {
      return [];
    }
    // Dynamically create the list of years
    const min = this.min ? parseInt(this.min) : this.currYear - this.yearPlusMinus;
    const max = this.max ? parseInt(this.max) : this.currYear + this.yearPlusMinus;
    if (max < min) {
      throw new Error('"max" cannot be less than "min"');
    }
    return Array(max - min).fill(0).map((_, index) => min + index).map(year => ({
      text: year + "",
      value: year
    }));
  }
  // Start of Autocomplete
  appendLimitExplainerStylesheet() {
    // Create CSS for description
    const css = `input[role="combobox"].autocomplete-${this.guid} + ngb-typeahead-window::before {
    content: "${this.limitTextMaker(this.limit)}";
    white-space: pre;
    color: #888;
    display: block;
    font-size: 0.9rem;
    padding: 0 10px 5px;
    text-align: center;
}`;
    // Create stylesheet
    const style = document.createElement("style");
    style.id = "autocomplete-" + this.guid;
    style.appendChild(document.createTextNode(css));
    // Append stylesheet to head
    const head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
  }
  removeLimitExplainerStylesheet() {
    const el = document.getElementById("autocomplete-" + this.guid);
    el.remove();
  }
  // Add an ids to options in order to differentiate radios
  addOptionIds() {
    this.options$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(options => {
      if (this.type === "radio" && options && Array.isArray(options)) {
        options.forEach(opt => opt._id = this.name + "-" + (0,src_app_utils_uuid__WEBPACK_IMPORTED_MODULE_1__.guid)());
      }
    });
  }
  setAutocompleteSearch() {
    this.search = text$ => {
      const debouncedText$ = text$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)());
      const clicksWithClosedPopup$ = this.click$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(() => !this.instance.isPopupOpen()));
      const inputFocus$ = this.focus$;
      const combined$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(debouncedText$, inputFocus$, clicksWithClosedPopup$);
      let searchObs$;
      if (this.customSearch) {
        searchObs$ = this.customSearch(combined$);
      } else {
        searchObs$ = combined$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(term => {
          if (this.options) {
            return this.options.filter(value => this.filter(term, value));
          }
          return [];
        }));
      }
      if (this.limit) {
        return searchObs$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(array => array.slice(0, this.limit)));
      }
      return searchObs$;
    };
  }
  setAutocompleteDefault() {
    if (this.ngControl.value) {
      this.autocompleteChoice = this.ngControl.value;
    }
  }
  setAutocompleteReactivity() {
    this.ngControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(value => {
      this._autocompleteChoice = value;
    });
  }
  onAutocompleteChange(value) {
    const input = document.getElementById(this._name);
    if (this.isInvalid()) {
      input?.classList.add("is-invalid");
    } else {
      input?.classList.remove("is-invalid");
    }
    if (this.type !== "tagger" && this.ngControl.value !== value) {
      this.ngControl.setValue(value);
    }
  }
  onAutocompleteClick(instance, event) {
    this.instance = instance;
    this.click$.next(event.target.value);
  }
  selectItem(selectEvent) {
    this.selectItemEmitter.emit(selectEvent);
  }
  // End of Autocomplete
  // Start of Tagger
  setTaggerDefault() {
    if (this.ngControl.value) {
      this.tags = this.ngControl.value;
    }
  }
  setTaggerReactivity() {
    this.ngControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(tags => Array.isArray(tags))).subscribe(tags => {
      this.tags = tags;
    });
  }
  taggerChoiceSelected(value) {
    if (this.deduped && this.tags?.some(tag => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(tag, value.item))) {
      console.warn("Entry already present");
    } else {
      this.ngControl.setValue([...this.tags, value.item]);
    }
    setTimeout(() => this._autocompleteChoice = null, 0);
  }
  freeTagOnEnter(event) {
    if (!this.freeTag) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const value = event.target.value;
    if (value === "") {
      return;
    }
    const trimmed = value.trim();
    if (this.deduped && this.tags.some(tag => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(tag, trimmed))) {
      console.warn("Entry already present");
    } else {
      this.ngControl.setValue([...this.tags, trimmed]);
    }
    setTimeout(() => this._autocompleteChoice = null, 0);
  }
  removeTag(item) {
    const itemIndex = this.tags.lastIndexOf(item);
    if (itemIndex > -1) {
      this.ngControl.setValue([...this.tags.slice(0, itemIndex), ...this.tags.slice(itemIndex + 1)]);
      setTimeout(() => this._autocompleteChoice = null, 0);
    }
  }
  // End of Tagger
  markAsTouched() {
    this.ngControl.markAsTouched();
  }
  static {
    this.ɵfac = function InputComponent_Factory(t) {
      return new (t || InputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControl, 10));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: InputComponent,
      selectors: [["app-input"]],
      inputs: {
        floatingLabel: "floatingLabel",
        feedback: "feedback",
        disabled: "disabled",
        type: "type",
        placeholder: "placeholder",
        onlyCustomErrors: "onlyCustomErrors",
        noParenthesisValue: "noParenthesisValue",
        step: "step",
        _min: ["min", "_min"],
        _max: ["max", "_max"],
        minLength: ["minlength", "minLength"],
        maxLength: ["maxlength", "maxLength"],
        name: "name",
        label: "label",
        helper: "helper",
        mask: "mask",
        ngControl: "ngControl",
        deduped: "deduped",
        freeTag: "freeTag",
        limit: "limit",
        limitTextMaker: ["limitTextFactory", "limitTextMaker"],
        formatter: "formatter",
        filter: "filter",
        template: "template",
        customSearch: "customSearch",
        options: "options"
      },
      outputs: {
        selectItemEmitter: "selectItem"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ControlContainer,
        useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c3,
      decls: 10,
      vars: 7,
      consts: [["invalidFeedback", ""], [4, "ngIf", "ngIfElse"], ["fixedLabel", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "form-text input-helper", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], [1, "form-floating"], ["withoutMask", ""], [3, "for"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "reset-field reset-field--floating bi bi-x-lg", 3, "click", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "tabindex", "textMask", "formControl", "id", "placeholder", "minlength", "maxlength"], ["type", "text", 1, "form-control", 3, "tabindex", "formControl", "id", "placeholder", "minlength", "maxlength"], [1, "reset-field", "reset-field--floating", "bi", "bi-x-lg", 3, "click"], ["type", "password", 1, "form-control", 3, "tabindex", "formControl", "id", "placeholder", "minlength", "maxlength"], ["type", "number", 1, "form-control", 3, "tabindex", "formControl", "id", "placeholder", "step", "min", "max"], [1, "form-control", 2, "height", "100px", 3, "tabindex", "formControl", "id", "placeholder", "minlength", "maxlength"], [1, "form-select", 3, "tabindex", "formControl", "id"], [3, "ngValue", "disabled", 4, "ngFor", "ngForOf"], [3, "ngValue", "disabled"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["type", "date", 1, "form-control", 3, "tabindex", "placeholder", "id", "name", "formControl", "min", "max"], ["type", "time", 1, "form-control", 3, "tabindex", "placeholder", "id", "name", "formControl"], ["type", "datetime-local", 1, "form-control", 3, "tabindex", "placeholder", "id", "name", "formControl", "min", "max"], [1, "form-floating", "position-relative"], ["type", "text", 1, "form-control", 3, "ngClass", "id", "placeholder", "ngbTypeahead", "inputFormatter", "resultFormatter", "resultTemplate", "editable", "disabled", "ngModel", "ngModelChange", "focus", "click", "change", "blur", "selectItem"], ["instance", "ngbTypeahead"], [1, "tagger-array"], ["class", "badge d-flex align-items-center fs-6 rounded-pill bg-secondary", 4, "ngFor", "ngForOf"], ["type", "text", 1, "form-control", 3, "ngClass", "id", "placeholder", "ngbTypeahead", "inputFormatter", "resultFormatter", "resultTemplate", "editable", "disabled", "ngModel", "ngModelChange", "focus", "click", "change", "blur", "selectItem", "keyup.enter"], [1, "badge", "d-flex", "align-items-center", "fs-6", "rounded-pill", "bg-secondary"], ["type", "button", 1, "btn", "p-0", "lh-0", "fs-6", "text-white", 3, "click"], [1, "bi", "bi-x"], ["class", "form-label", 3, "for", 4, "ngIf"], [1, "position-relative"], ["class", "reset-field reset-field--fixed bi bi-x-lg", 3, "click", 4, "ngIf"], [1, "form-label", 3, "for"], [1, "reset-field", "reset-field--fixed", "bi", "bi-x-lg", 3, "click"], ["rows", "3", 1, "form-control", 3, "tabindex", "formControl", "id", "placeholder", "minlength", "maxlength"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "tabindex", "formControl", "id"], ["class", "form-check-label", 3, "for", 4, "ngIf"], [1, "form-check-label", 3, "for"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["type", "radio", 1, "form-check-input", 3, "tabindex", "value", "name", "id"], ["type", "range", 1, "form-range", 3, "tabindex", "formControl", "id", "name", "step", "min", "max"], [1, "form-text", "input-helper"]],
      template: function InputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, InputComponent_ng_template_0_Template, 3, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InputComponent_ng_container_2_Template, 13, 12, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, InputComponent_ng_template_3_Template, 12, 12, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, InputComponent_ng_container_6_Template, 5, 12, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, InputComponent_ng_container_7_Template, 3, 1, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, InputComponent_ng_container_8_Template, 5, 16, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, InputComponent_div_9_Template, 2, 1, "div", 5);
        }
        if (rf & 2) {
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.floatingLabel)("ngIfElse", _r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.type);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "checkbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "radio");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "range");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.helper);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbTypeahead, _directives_text2mask__WEBPACK_IMPORTED_MODULE_3__.MaskedInputDirective],
      styles: ["[_nghost-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.reset-field[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 0.75rem;\r\n    line-height: 1;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%]:not(:empty)    ~ .reset-field[_ngcontent-%COMP%] {\r\n    right: 2rem;\r\n}\r\n\r\n.reset-field[_ngcontent-%COMP%]:has( ~ .invalid-feedback[_ngcontent-%COMP%]:not(:empty)) {\r\n    right: 2rem;\r\n}\r\n\r\n.reset-field.reset-field--floating[_ngcontent-%COMP%] {\r\n    top: 1.325rem;\r\n}\r\n\r\n.reset-field.reset-field--fixed[_ngcontent-%COMP%] {\r\n    top: 0.675rem;\r\n}\r\n\r\n.tagger-array[_ngcontent-%COMP%] {\r\n    border: 1px dashed #ccc;\r\n    border-radius: var(--border-radius_md);\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 0.5rem;\r\n    margin-bottom: 0.5rem;\r\n    padding: 0.375rem;\r\n}\r\n\r\n.tagger-array[_ngcontent-%COMP%]:empty::before {\r\n    content: \"Selected items will be shown here\";\r\n    color: #ccc;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsV0FBVztBQUNmIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5yZXNldC1maWVsZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMC43NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFjazpub3QoOmVtcHR5KSB+IC5yZXNldC1maWVsZCB7XHJcbiAgICByaWdodDogMnJlbTtcclxufVxyXG5cclxuLnJlc2V0LWZpZWxkOmhhcyh+IC5pbnZhbGlkLWZlZWRiYWNrOm5vdCg6ZW1wdHkpKSB7XHJcbiAgICByaWdodDogMnJlbTtcclxufVxyXG5cclxuLnJlc2V0LWZpZWxkLnJlc2V0LWZpZWxkLS1mbG9hdGluZyB7XHJcbiAgICB0b3A6IDEuMzI1cmVtO1xyXG59XHJcblxyXG4ucmVzZXQtZmllbGQucmVzZXQtZmllbGQtLWZpeGVkIHtcclxuICAgIHRvcDogMC42NzVyZW07XHJcbn1cclxuXHJcbi50YWdnZXItYXJyYXkge1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzX21kKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMzc1cmVtO1xyXG59XHJcblxyXG4udGFnZ2VyLWFycmF5OmVtcHR5OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJTZWxlY3RlZCBpdGVtcyB3aWxsIGJlIHNob3duIGhlcmVcIjtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3252:
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/linear-loading-indicator.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinearLoadingIndicatorComponent": () => (/* binding */ LinearLoadingIndicatorComponent)
/* harmony export */ });
/* harmony import */ var C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_utils_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/promise */ 497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function LinearLoadingIndicatorComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const char_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", char_r1, " ");
  }
}
const size = 32;
const spacing = 8;
class LinearLoadingIndicatorComponent {
  constructor() {
    this._text = "loading";
    this.chars = this._text.split("");
    this.i = 0;
    this.stop = false;
  }
  set text(value) {
    this._text = value;
    this.chars = value.split("");
  }
  ngAfterViewInit() {
    // Get items
    this.lliList = [...document.querySelectorAll(".lli-item")];
    // Set parent width
    document.querySelector(".lli-list").style.width = this.lliList.length * size + (this.lliList.length - 1) * spacing + "px";
    // Calculate left offsets
    this.positions = Array(this.lliList.length).fill(0).map((_, index) => index * (size + spacing));
    this.loop();
  }
  ngOnDestroy() {
    this.stop = true;
  }
  loop() {
    var _this = this;
    return (0,C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Avoid infinite loop
      if (_this.stop) return;
      // Set initial positions
      for (let j = 0; j < _this.lliList.length; j++) {
        _this.lliList[(j + _this.i) % _this.lliList.length].style.left = _this.positions[j] + "px";
      }
      yield (0,src_app_utils_promise__WEBPACK_IMPORTED_MODULE_1__.delay)(300);
      // Set active (raise it)
      const active = _this.lliList[_this.i % _this.lliList.length];
      active.classList.add("lli-item--active");
      // Shift elements to the left
      for (let j = 0; j < _this.lliList.length; j++) {
        yield (0,src_app_utils_promise__WEBPACK_IMPORTED_MODULE_1__.delay)(300);
        _this.lliList[(j + _this.i + 1) % _this.lliList.length].style.left = _this.positions[j] + "px";
      }
      // Shift active element to the end
      active.style.left = _this.positions[_this.lliList.length - 1] + "px";
      // Remove active state (lower it)
      yield (0,src_app_utils_promise__WEBPACK_IMPORTED_MODULE_1__.delay)(300);
      active.classList.remove("lli-item--active");
      // Rinse and repeat
      _this.i++;
      _this.loop();
    })();
  }
  static {
    this.ɵfac = function LinearLoadingIndicatorComponent_Factory(t) {
      return new (t || LinearLoadingIndicatorComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LinearLoadingIndicatorComponent,
      selectors: [["app-linear-loading-indicator"]],
      inputs: {
        text: "text"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "lli-list"], ["class", "lli-item", 4, "ngFor", "ngForOf"], [1, "lli-item"]],
      template: function LinearLoadingIndicatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LinearLoadingIndicatorComponent_div_1_Template, 2, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.chars);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
      styles: [".lli-list[_ngcontent-%COMP%] {\n            position: relative;\n            height: 32px;\n            margin: 0 auto;\n        }\n\n        .lli-item[_ngcontent-%COMP%] {\n            position: absolute;\n            width: 32px;\n            height: 32px;\n            display: grid;\n            place-items: center;\n            background: rgba(var(--app-primary_500), 1);\n            box-shadow: 0 0 10px #0002;\n            color: rgba(var(--app-gray_0), 1);\n            font-weight: bold;\n            top: 0px;\n            left: 0px;\n            text-transform: uppercase;\n            transition:\n                border-radius 300ms ease,\n                top 300ms ease,\n                left 300ms ease;\n        }\n\n        .lli-item.lli-item--active[_ngcontent-%COMP%] {\n            background: rgba(var(--app-primary_200), 1);\n            border-radius: 50%;\n            top: -40px;\n        }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGluZWFyLWxvYWRpbmctaW5kaWNhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUVRO1lBQ0ksa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixjQUFjO1FBQ2xCOztRQUVBO1lBQ0ksa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxZQUFZO1lBQ1osYUFBYTtZQUNiLG1CQUFtQjtZQUNuQiwyQ0FBMkM7WUFDM0MsMEJBQTBCO1lBQzFCLGlDQUFpQztZQUNqQyxpQkFBaUI7WUFDakIsUUFBUTtZQUNSLFNBQVM7WUFDVCx5QkFBeUI7WUFDekI7OzsrQkFHbUI7UUFDdkI7O1FBRUE7WUFDSSwyQ0FBMkM7WUFDM0Msa0JBQWtCO1lBQ2xCLFVBQVU7UUFDZCIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgICAgIC5sbGktbGlzdCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5sbGktaXRlbSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1hcHAtcHJpbWFyeV81MDApLCAxKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMwMDAyO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0tYXBwLWdyYXlfMCksIDEpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgMzAwbXMgZWFzZSxcbiAgICAgICAgICAgICAgICB0b3AgMzAwbXMgZWFzZSxcbiAgICAgICAgICAgICAgICBsZWZ0IDMwMG1zIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAubGxpLWl0ZW0ubGxpLWl0ZW0tLWFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWFwcC1wcmltYXJ5XzIwMCksIDEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgdG9wOiAtNDBweDtcbiAgICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 584:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/monthpicker/monthpicker.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonthpickerComponent": () => (/* binding */ MonthpickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var src_app_utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/dom */ 7694);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);







const _c0 = ["dd"];
const _c1 = ["mp"];
function MonthpickerComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MonthpickerComponent_ng_template_0_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r14.openDropdown($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.blur());
    })("keypress", function MonthpickerComponent_ng_template_0_Template_input_keypress_0_listener($event) {
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("form-control-sm", ctx_r1.size === "sm")("form-control-lg", ctx_r1.size === "lg")("pseudo-disabled", ctx_r1.disabled)("is-invalid", ctx_r1.touched && ctx_r1.ngControl.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx_r1.name)("placeholder", ctx_r1.placeholder)("formControl", ctx_r1.ngControl);
  }
}
function MonthpickerComponent_label_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthpickerComponent_label_4_Template_label_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.openDropdown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.label, " ");
  }
}
function MonthpickerComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 20);
  }
}
function MonthpickerComponent_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function MonthpickerComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MonthpickerComponent_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.label);
  }
}
function MonthpickerComponent_ng_template_8_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function MonthpickerComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MonthpickerComponent_ng_template_8_ng_container_0_Template, 1, 0, "ng-container", 22);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r0);
  }
}
function MonthpickerComponent_i_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthpickerComponent_i_10_Template_i_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.reset($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MonthpickerComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MonthpickerComponent_div_15_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const y_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", y_r24.selected)("value", y_r24.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", y_r24.year, " ");
  }
}
function MonthpickerComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24)(1, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MonthpickerComponent_div_15_Template_select_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.onYearSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MonthpickerComponent_div_15_option_2_Template, 2, 3, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.years);
  }
}
function MonthpickerComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthpickerComponent_button_17_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);
      const m_r27 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.onMonthSelected(m_r27.number));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("highlight", m_r27.current);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", m_r27.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", m_r27.name, " ");
  }
}
function MonthpickerComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.helper);
  }
}
class MonthpickerComponent {
  constructor() {
    this.years = [];
    this.months = [];
    this.today = new Date();
    this.currYear = this.today.getFullYear();
    this.currMonth = this.today.getMonth();
    this.year = this.currYear;
    this.touched = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.blur = src_app_utils_dom__WEBPACK_IMPORTED_MODULE_0__.blur;
    this.size = "md";
    this.placeholder = "yyyy-mm";
    this.disabled = false;
    this.floatingLabel = false;
    this.lookahead = 10;
    this.lookbehind = 10;
    this.removeYear = false;
    this.monthNames = [];
    this.monthSelectEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  set _minDate(v) {
    // The default year selection when minDate.year is future
    // is exactly minDate.year therefore this.year has to
    // be moved forward
    if (v && v.year > this.year) {
      this.year = v.year;
    }
    this.minDate = v;
    this.updateMonthpickerModel();
  }
  set _maxDate(v) {
    // The default year selection when maxDate.year is past
    // is exactly maxDate.year therefore this.year has to
    // be moved backward
    if (v && v.year < this.year) {
      this.year = v.year;
    }
    this.maxDate = v;
    this.updateMonthpickerModel();
  }
  ngOnInit() {
    // Construct monthNames
    for (let month = 0; month < 12; month++) {
      const date = new Date(this.year, month, 1);
      const monthName = date.toLocaleString("default", {
        month: "long"
      });
      this.monthNames.push(monthName);
    }
    this.handleErrors();
    this.updateMonthpickerModel();
  }
  ngAfterViewInit() {
    if (this.ngControl.value) {
      this.setMonthpickerInputValue(this.ngControl.value);
    }
    this.ngControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(value => this.setMonthpickerInputValue(value));
  }
  setMonthpickerInputValue(value) {
    if (!value) {
      this.monthpicker.nativeElement.value = "";
      return;
    }
    const {
      year,
      month
    } = value;
    const inputText = this.removeYear ? this.monthNames[month - 1] : year + "-" + month;
    this.monthpicker.nativeElement.value = inputText;
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  handleErrors() {
    if (!this.ngControl) throw Error("app-monthpicker needs a ngControl.");
    if (!this.name) throw Error("app-monthpicker needs a name.");
  }
  updateMonthpickerModel() {
    this.createYears();
    this.createMonths();
  }
  createYears() {
    this.years = [];
    const start = this.minDate?.year || this.currYear - this.lookbehind;
    const end = this.maxDate?.year || this.currYear + this.lookahead;
    for (let year = start; year <= end; year++) {
      this.years.push({
        selected: year === this.year,
        year
      });
    }
  }
  createMonths() {
    this.months = [];
    for (let month = 0; month < 12; month++) {
      const monthName = (this.monthNames[month] || "NA").slice(0, 3);
      const aboveMax = this.maxDate && (this.maxDate.year < this.year || this.maxDate.year === this.year && this.maxDate.month < month + 1) || false;
      const belowMin = this.minDate && (this.minDate.year > this.year || this.minDate.year === this.year && this.minDate.month > month + 1) || false;
      this.months.push({
        disabled: aboveMax || belowMin,
        current: this.year === this.currYear && month === this.currMonth,
        number: month + 1,
        name: monthName
      });
    }
  }
  onYearSelected(evt) {
    this.year = +evt.target.value;
    this.months = [];
    this.createMonths();
  }
  onMonthSelected(monthNumber) {
    this.touched = true;
    const selection = {
      year: this.removeYear ? 0 : this.year,
      month: monthNumber
    };
    this.monthSelectEmitter.emit(selection);
    this.ngControl.setValue(selection);
    this.dropdown.close();
  }
  reset(evt) {
    evt.stopPropagation();
    if (this.disabled) return;
    this.ngControl.setValue(null);
  }
  openDropdown(evt) {
    evt.stopPropagation();
    if (this.disabled) return;
    this.dropdown.open();
  }
  static {
    this.ɵfac = function MonthpickerComponent_Factory(t) {
      return new (t || MonthpickerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MonthpickerComponent,
      selectors: [["app-monthpicker"]],
      viewQuery: function MonthpickerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.monthpicker = _t.first);
        }
      },
      inputs: {
        ngControl: "ngControl",
        size: "size",
        name: "name",
        label: "label",
        placeholder: "placeholder",
        helper: "helper",
        disabled: "disabled",
        floatingLabel: "floatingLabel",
        lookahead: "lookahead",
        lookbehind: "lookbehind",
        removeYear: "removeYear",
        _minDate: ["minDate", "_minDate"],
        _maxDate: ["maxDate", "_maxDate"]
      },
      outputs: {
        monthSelectEmitter: "monthSelect"
      },
      decls: 19,
      vars: 11,
      consts: [["mpInputTemplate", ""], ["ngbDropdown", ""], ["dd", "ngbDropdown"], ["class", "form-label", 3, "click", 4, "ngIf"], [1, "app-monthpicker"], ["class", "app-monthpicker__toggle", "ngbDropdownToggle", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["fixedLabel", ""], ["class", "app-monthpicker__reset-icon bi bi-x-lg", 3, "click", 4, "ngIf"], [1, "app-monthpicker__calendar-icon", "bi", "bi-calendar3", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "p-3"], ["class", "d-grid mb-3", "style", "justify-items: center;", 4, "ngIf"], [1, "d-grid", "gap-2", 2, "grid-template-columns", "repeat(3, 1fr)"], ["class", "btn btn-outline-primary text-uppercase", 3, "highlight", "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "form-text", 4, "ngIf"], [1, "app-month-picker__input", "form-control", 3, "name", "placeholder", "formControl", "focus", "keypress"], ["mp", ""], [1, "form-label", 3, "click"], ["ngbDropdownToggle", "", 1, "app-monthpicker__toggle"], [1, "form-floating"], [4, "ngTemplateOutlet"], [1, "app-monthpicker__reset-icon", "bi", "bi-x-lg", 3, "click"], [1, "d-grid", "mb-3", 2, "justify-items", "center"], [1, "form-select", 2, "max-width", "7.5rem", 3, "change"], [3, "selected", "value", 4, "ngFor", "ngForOf"], [3, "selected", "value"], [1, "btn", "btn-outline-primary", "text-uppercase", 3, "disabled", "click"], [1, "form-text"]],
      template: function MonthpickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MonthpickerComponent_ng_template_0_Template, 2, 11, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MonthpickerComponent_label_4_Template, 2, 1, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MonthpickerComponent_div_6_Template, 1, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MonthpickerComponent_ng_container_7_Template, 5, 2, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MonthpickerComponent_ng_template_8_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MonthpickerComponent_i_10_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthpickerComponent_Template_i_click_11_listener($event) {
            return ctx.openDropdown($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MonthpickerComponent_div_13_Template, 2, 0, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MonthpickerComponent_div_15_Template, 3, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MonthpickerComponent_button_17_Template, 2, 4, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MonthpickerComponent_div_18_Template, 2, 1, "div", 16);
        }
        if (rf & 2) {
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.label && !ctx.floatingLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.floatingLabel)("ngIfElse", _r6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ngControl.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-block", ctx.touched && ctx.ngControl.errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ngControl.errors == null ? null : ctx.ngControl.errors.required);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.removeYear);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.months);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.helper);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu],
      styles: [".highlight[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\r\n}\r\n\r\n.app-monthpicker[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.app-monthpicker__toggle[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    inset: 0 0 0 0;\r\n}\r\n\r\n.app-monthpicker__toggle[_ngcontent-%COMP%]::after {\r\n    all: unset !important;\r\n}\r\n\r\n.app-monthpicker__reset-icon[_ngcontent-%COMP%], .app-monthpicker__calendar-icon[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    z-index: 1;\r\n}\r\n\r\n.app-monthpicker__reset-icon[_ngcontent-%COMP%] {\r\n    right: 2.25rem;\r\n}\r\n\r\n.app-monthpicker__calendar-icon[_ngcontent-%COMP%] {\r\n    right: 0.75rem;\r\n}\r\n\r\n.app-month-picker__input.is-invalid[_ngcontent-%COMP%]    ~ .app-monthpicker__reset-icon[_ngcontent-%COMP%] {\r\n    right: 3.75rem;\r\n}\r\n\r\n.app-month-picker__input.is-invalid[_ngcontent-%COMP%]    ~ .app-monthpicker__calendar-icon[_ngcontent-%COMP%] {\r\n    right: 2.25rem;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9udGhwaWNrZXIvbW9udGhwaWNrZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZ2hsaWdodCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjI1cmVtIHJnYmEoMTMsIDExMCwgMjUzLCAwLjI1KTtcclxufVxyXG5cclxuLmFwcC1tb250aHBpY2tlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hcHAtbW9udGhwaWNrZXJfX3RvZ2dsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBpbnNldDogMCAwIDAgMDtcclxufVxyXG5cclxuLmFwcC1tb250aHBpY2tlcl9fdG9nZ2xlOjphZnRlciB7XHJcbiAgICBhbGw6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hcHAtbW9udGhwaWNrZXJfX3Jlc2V0LWljb24sXHJcbi5hcHAtbW9udGhwaWNrZXJfX2NhbGVuZGFyLWljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uYXBwLW1vbnRocGlja2VyX19yZXNldC1pY29uIHtcclxuICAgIHJpZ2h0OiAyLjI1cmVtO1xyXG59XHJcblxyXG4uYXBwLW1vbnRocGlja2VyX19jYWxlbmRhci1pY29uIHtcclxuICAgIHJpZ2h0OiAwLjc1cmVtO1xyXG59XHJcblxyXG4uYXBwLW1vbnRoLXBpY2tlcl9faW5wdXQuaXMtaW52YWxpZCB+IC5hcHAtbW9udGhwaWNrZXJfX3Jlc2V0LWljb24ge1xyXG4gICAgcmlnaHQ6IDMuNzVyZW07XHJcbn1cclxuXHJcbi5hcHAtbW9udGgtcGlja2VyX19pbnB1dC5pcy1pbnZhbGlkIH4gLmFwcC1tb250aHBpY2tlcl9fY2FsZW5kYXItaWNvbiB7XHJcbiAgICByaWdodDogMi4yNXJlbTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8047:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/search-router/search-router.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchRouterComponent": () => (/* binding */ SearchRouterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../input/input.component */ 2371);






function SearchRouterComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngb-highlight", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r2 = ctx.result;
    const t_r3 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", r_r2.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("result", r_r2.title)("term", t_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r2.path);
  }
}
class SearchRouterComponent {
  constructor(router) {
    this.router = router;
    this.cmpControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
    this.cmpFormatter = cmp => cmp.title;
    this.cmpControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)(value => !!value), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(value => this.router.navigateByUrl(value.path))).subscribe();
  }
  static {
    this.ɵfac = function SearchRouterComponent_Factory(t) {
      return new (t || SearchRouterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SearchRouterComponent,
      selectors: [["app-search-router"]],
      inputs: {
        searchRoutes: "searchRoutes"
      },
      decls: 3,
      vars: 5,
      consts: [["type", "autocomplete", "name", "component", "label", "Search a component \u2315", 3, "floatingLabel", "options", "formatter", "template", "ngControl"], ["rt", ""], [3, "routerLink"], [2, "font-size", "1.05rem", 3, "result", "term"], [2, "font-size", "0.8rem", "padding-left", "0.25rem", "margin-bottom", "0.25rem"]],
      template: function SearchRouterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-input", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchRouterComponent_ng_template_1_Template, 4, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("floatingLabel", true)("options", ctx.searchRoutes)("formatter", ctx.cmpFormatter)("template", _r0)("ngControl", ctx.cmpControl);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbHighlight, _input_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6709:
/*!************************************************************!*\
  !*** ./src/app/shared/components/table/table.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableComponent": () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var src_app_utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/object */ 8007);
/* harmony import */ var src_app_utils_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/uuid */ 3488);
/* harmony import */ var _directives_sortable_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/sortable-header */ 5760);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/input.component */ 2371);
/* harmony import */ var _directives_ng_let__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/ng-let */ 138);












function TableComponent_ng_template_0_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ps_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", ps_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ps_r11);
  }
}
function TableComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "ngb-pagination", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function TableComponent_ng_template_0_Template_ngb_pagination_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.page = $event);
    })("pageChange", function TableComponent_ng_template_0_Template_ngb_pagination_pageChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.paginate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TableComponent_ng_template_0_Template_select_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.pageSize = $event);
    })("ngModelChange", function TableComponent_ng_template_0_Template_select_ngModelChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.paginate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TableComponent_ng_template_0_option_3_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collectionSize", ctx_r1.collectionSize)("page", ctx_r1.page)("pageSize", ctx_r1.pageSize)("maxSize", 3)("rotate", true)("boundaryLinks", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.pageSizes);
  }
}
function TableComponent_div_2_app_input_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-input", 17);
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngControl", ctx_r17.searchInput)("name", "search-input-" + ctx_r17._guid);
  }
}
function TableComponent_div_2_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function TableComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TableComponent_div_2_div_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r0);
  }
}
function TableComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TableComponent_div_2_app_input_2_Template, 1, 2, "app-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TableComponent_div_2_div_3_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.searchable);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.paginated);
  }
}
function TableComponent_th_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18)(1, "div", 19)(2, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TableComponent_th_7_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.currentTarget.checked ? ctx_r20.onEveryRowSelect() : ctx_r20.onEveryRowDeselect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function TableComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "th", 18);
  }
}
function TableComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function TableComponent_ng_container_11_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td")(1, "div", 19)(2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TableComponent_ng_container_11_ng_container_1_td_2_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](item_r22._selected = $event);
    })("change", function TableComponent_ng_container_11_ng_container_1_td_2_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.currentTarget.checked ? ctx_r34.onRowSelect(item_r22) : ctx_r34.onRowDeselect(item_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r22._selected);
  }
}
function TableComponent_ng_container_11_ng_container_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td")(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TableComponent_ng_container_11_ng_container_1_td_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39);
      const _row_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngLet;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_row_r25.collapsed = !_row_r25.collapsed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _row_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngLet;
    const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "row-expand-trigger-" + i_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-expanded", !_row_r25.collapsed);
  }
}
function TableComponent_ng_container_11_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function TableComponent_ng_container_11_ng_container_1_tr_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    $implicit: a0,
    index: a1,
    term$: a2
  };
};
function TableComponent_ng_container_11_ng_container_1_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 27)(1, "td", 28)(2, "div", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngbCollapseChange", function TableComponent_ng_container_11_ng_container_1_tr_5_Template_div_ngbCollapseChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const _row_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngLet;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_row_r25.collapsed = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TableComponent_ng_container_11_ng_container_1_tr_5_ng_container_4_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _row_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngLet;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const item_r22 = ctx_r48.$implicit;
    const i_r23 = ctx_r48.index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", ctx_r29.colspan + (ctx_r29.rowExpand ? 1 : 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbCollapse", _row_r25.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r29.rowExpand)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](4, _c0, item_r22, i_r23, ctx_r29.lastTerm$));
  }
}
function TableComponent_ng_container_11_ng_container_1_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 31);
  }
}
function TableComponent_ng_container_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TableComponent_ng_container_11_ng_container_1_td_2_Template, 3, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TableComponent_ng_container_11_ng_container_1_td_3_Template, 2, 2, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TableComponent_ng_container_11_ng_container_1_ng_container_4_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TableComponent_ng_container_11_ng_container_1_tr_5_Template, 5, 8, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TableComponent_ng_container_11_ng_container_1_tr_6_Template, 1, 0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const item_r22 = ctx_r49.$implicit;
    const i_r23 = ctx_r49.index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("animated", ctx_r24.animated);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r24.selectable);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r24.rowExpand);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r24.tbody)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](8, _c0, item_r22, i_r23, ctx_r24.lastTerm$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r24.rowExpand);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r24.rowExpand);
  }
}
const _c1 = function () {
  return {
    collapsed: true
  };
};
function TableComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TableComponent_ng_container_11_ng_container_1_Template, 7, 12, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngLet", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c1));
  }
}
function TableComponent_td_13_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function TableComponent_td_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TableComponent_td_13_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r50.emptyTemplate);
  }
}
function TableComponent_td_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r52.emptyMessage);
  }
}
function TableComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TableComponent_td_13_ng_container_1_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TableComponent_td_13_ng_template_2_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", ctx_r7.colspan + (ctx_r7.rowExpand ? 1 : 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.emptyTemplate)("ngIfElse", _r51);
  }
}
function TableComponent_tfoot_15_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function TableComponent_tfoot_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tfoot")(1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TableComponent_tfoot_15_ng_container_2_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.tfoot);
  }
}
function TableComponent_div_17_app_input_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-input", 17);
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngControl", ctx_r55.searchInputRelay)("name", "search-input-relay-" + ctx_r55._guid);
  }
}
function TableComponent_div_17_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function TableComponent_div_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TableComponent_div_17_div_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r0);
  }
}
function TableComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TableComponent_div_17_app_input_2_Template, 1, 2, "app-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TableComponent_div_17_div_3_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.searchable);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.paginated);
  }
}
const _c2 = function (a0) {
  return {
    "max-height": a0
  };
};
class TableComponent {
  constructor() {
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this._guid = "app-table-" + (0,src_app_utils_uuid__WEBPACK_IMPORTED_MODULE_1__.guid)();
    this.animated = false;
    this.showFootIfEmpty = false;
    this.trackByFn = (index, item) => item;
    this.emptyMessage = "No results to display";
    this.stickyHead = false;
    this.maxHeight = false;
    this.tableFixed = false;
    this.colspan = 99;
    // Search and pagination fields
    this.searchable = false;
    this.paginated = false;
    this.pageSize = 5;
    this.pageSizes = [5, 10, 25, 50];
    this.duplicateControls = false;
    this.paginatedItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
    this.page = 1;
    this.searchInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("", {
      nonNullable: true
    });
    this.searchInputRelay = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("", {
      nonNullable: true
    });
    this.lastTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject("");
    this.filteredItems = [];
    this.lastColumn = "";
    this.lastDirection = "";
    this.sortedItems = [];
    // Selectable fields
    this.selectable = false;
    this.rowSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.rowDeselected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  get selectedRows() {
    return this.paginatedItems$.getValue().filter(item => item._selected);
  }
  ngOnInit() {
    if (!this.thead) {
      throw Error("AppTable needs a thead template");
    }
    if (!this.tbody) {
      throw Error("AppTable needs a tbody template");
    }
    if (!this.items || this.items && !Array.isArray(this.items)) {
      throw Error("AppTable needs the items array");
    }
    // Double controls needs to keep the two search inputs in-sync
    const [a, b] = [this.searchInput, this.searchInputRelay];
    const opt = {
      onlySelf: true,
      emitEvent: false,
      emitModelToViewChange: true
    };
    a.valueChanges.subscribe(v => b.setValue(v, opt));
    b.valueChanges.subscribe(v => a.setValue(v, opt));
    // Set reactive search on both search controls
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(a.valueChanges, b.valueChanges).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(term => {
      this.lastTerm$.next(term);
      this.search();
    })).subscribe();
  }
  ngOnChanges(changes) {
    if ("items" in changes) {
      const previousItems = changes.items.previousValue;
      const items = changes.items.currentValue;
      if (!items || !Array.isArray(items)) {
        console.warn("Items must have a value and be an array.");
      } else if (previousItems !== items) {
        if (!this.paginated) this.pageSize = items.length;
        this.collectionSize = items.length;
        this.search();
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  search() {
    this.filter();
    this.sort({
      column: this.lastColumn,
      direction: this.lastDirection
    });
  }
  filter() {
    const term = (this.lastTerm$.getValue() || "").toLowerCase();
    this.filteredItems = this.items.filter(item => {
      // Targeted search by fields provided in searchable array
      if (this.searchable && Array.isArray(this.searchable) && this.searchable.length) {
        return this.searchable.some(path => (((0,src_app_utils_object__WEBPACK_IMPORTED_MODULE_0__.resolve)(path, item) || "") + "").toLowerCase().includes(term));
      }
      // Global hacky search
      const serialized = JSON.stringify(item).toLowerCase();
      return serialized.includes(term);
    });
    this.collectionSize = this.filteredItems.length;
  }
  sort({
    column,
    direction
  }) {
    if (!this.headers) {
      this.sortedItems = this.filteredItems;
      this.paginate();
      return;
    }
    // Reset others column direction
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });
    if (column === "" || direction === "") {
      this.sortedItems = this.filteredItems;
    } else {
      this.sortedItems = [...this.filteredItems].sort((a, b) => {
        const compared = (0,_directives_sortable_header__WEBPACK_IMPORTED_MODULE_2__.compare)((0,src_app_utils_object__WEBPACK_IMPORTED_MODULE_0__.resolve)(column, a), (0,src_app_utils_object__WEBPACK_IMPORTED_MODULE_0__.resolve)(column, b));
        return direction === "asc" ? compared : -compared;
      });
    }
    this.lastColumn = column;
    this.lastDirection = direction;
    this.paginate();
  }
  paginate() {
    // Deselect items (to prevent keeping items not in view selected)
    this.sortedItems.forEach(item => item._selected = false);
    const slice = this.sortedItems.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    this.paginatedItems$.next(slice);
  }
  onRowSelect(item) {
    this.rowSelected.emit(item);
  }
  onRowDeselect(item) {
    this.rowDeselected.emit(item);
  }
  onEveryRowSelect() {
    const items = this.paginatedItems$.getValue();
    items.forEach(item => item._selected = true);
  }
  onEveryRowDeselect() {
    const items = this.paginatedItems$.getValue();
    items.forEach(item => item._selected = false);
  }
  static {
    this.ɵfac = function TableComponent_Factory(t) {
      return new (t || TableComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: TableComponent,
      selectors: [["app-table"]],
      contentQueries: function TableComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, _directives_sortable_header__WEBPACK_IMPORTED_MODULE_2__.AppSortableHeader, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.headers = _t);
        }
      },
      inputs: {
        thead: "thead",
        tbody: "tbody",
        animated: "animated",
        rowExpand: "rowExpand",
        tfoot: "tfoot",
        showFootIfEmpty: "showFootIfEmpty",
        items: "items",
        trackByFn: "trackByFn",
        emptyTemplate: "emptyTemplate",
        emptyMessage: "emptyMessage",
        stickyHead: "stickyHead",
        maxHeight: "maxHeight",
        tableFixed: "tableFixed",
        colspan: "colspan",
        searchable: "searchable",
        paginated: "paginated",
        pageSize: "pageSize",
        pageSizes: "pageSizes",
        duplicateControls: "duplicateControls",
        selectable: "selectable"
      },
      outputs: {
        rowSelected: "rowSelected",
        rowDeselected: "rowDeselected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
      decls: 18,
      vars: 22,
      consts: [["paginationTemplate", ""], ["class", "d-flex justify-content-center justify-content-lg-between flex-wrap gap-2 p-3 mb-2", 4, "ngIf"], [1, "table-responsive", 3, "ngStyle"], [1, "table", "table-striped"], ["style", "width: 60px", 4, "ngIf"], [4, "ngTemplateOutlet"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["class", "d-flex justify-content-center justify-content-lg-between flex-wrap gap-2 p-3", 4, "ngIf"], [1, "d-flex", "flex-wrap", "justify-content-center", "gap-2"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"], [1, "form-select", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "d-flex", "justify-content-center", "justify-content-lg-between", "flex-wrap", "gap-2", "p-3", "mb-2"], ["style", "max-width: 250px", "placeholder", "Search \u2315", 3, "ngControl", "name", 4, "ngIf"], ["class", "d-flex flex-wrap justify-content-center gap-2", 4, "ngIf"], ["placeholder", "Search \u2315", 2, "max-width", "250px", 3, "ngControl", "name"], [2, "width", "60px"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "change"], [4, "ngLet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "has-row-expand", 4, "ngIf"], ["class", "hidden", 4, "ngIf"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange", "change"], ["aria-controls", "collapseExample", 1, "btn", "collapse-toggle", 3, "id", "click"], [1, "has-row-expand"], [1, "row-expand"], [3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "hidden"], [4, "ngIf", "ngIfElse"], ["showEmptyMessage", ""], [1, "p-3", "text-center"], [1, "d-flex", "justify-content-center", "justify-content-lg-between", "flex-wrap", "gap-2", "p-3"]],
      template: function TableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TableComponent_ng_template_0_Template, 4, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TableComponent_div_2_Template, 4, 2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "table", 3)(5, "thead")(6, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TableComponent_th_7_Template, 3, 0, "th", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TableComponent_th_8_Template, 1, 0, "th", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, TableComponent_ng_container_9_Template, 1, 0, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, TableComponent_ng_container_11_Template, 2, 2, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, TableComponent_td_13_Template, 4, 3, "td", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TableComponent_tfoot_15_Template, 3, 1, "tfoot", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, TableComponent_div_17_Template, 4, 2, "div", 8);
        }
        if (rf & 2) {
          let tmp_9_0;
          let tmp_10_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.searchable || ctx.paginated);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c2, ctx.maxHeight));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("table-layout", ctx.tableFixed ? "fixed" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sticky-head", ctx.stickyHead);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectable);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.rowExpand);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.thead);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 14, ctx.paginatedItems$))("ngForTrackBy", ctx.trackByFn);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 16, ctx.paginatedItems$)) == null ? null : tmp_9_0.length));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.tfoot && (ctx.showFootIfEmpty || ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 18, ctx.paginatedItems$)) == null ? null : tmp_10_0.length)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.duplicateControls && (ctx.searchable || ctx.paginated));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPagination, _input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _directives_ng_let__WEBPACK_IMPORTED_MODULE_4__.LetDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
      styles: ["[_nghost-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngb-highlight {\r\n    background-color: #ff0;\r\n}\r\n\r\n[_nghost-%COMP%]     th {\r\n    white-space: nowrap;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n}\r\n\r\n.animated[_ngcontent-%COMP%] {\r\n    animation: forwards ease-out 300ms _ngcontent-%COMP%_FadeIn;\r\n    filter: blur(2px);\r\n    left: -5px;\r\n    opacity: 0;\r\n    position: relative;\r\n}\r\n\r\n.animated[_ngcontent-%COMP%]:nth-child(1) { animation-delay: 20ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(2) { animation-delay: 40ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(3) { animation-delay: 60ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(4) { animation-delay: 80ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(5) { animation-delay: 100ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(6) { animation-delay: 120ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(7) { animation-delay: 140ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(8) { animation-delay: 160ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(9) { animation-delay: 180ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(10) { animation-delay: 200ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(11) { animation-delay: 220ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(12) { animation-delay: 240ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(13) { animation-delay: 260ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(14) { animation-delay: 280ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(15) { animation-delay: 300ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(16) { animation-delay: 320ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(17) { animation-delay: 340ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(18) { animation-delay: 360ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(19) { animation-delay: 380ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(20) { animation-delay: 400ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(21) { animation-delay: 420ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(22) { animation-delay: 440ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(23) { animation-delay: 460ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(24) { animation-delay: 480ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(25) { animation-delay: 500ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(26) { animation-delay: 520ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(27) { animation-delay: 540ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(28) { animation-delay: 560ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(29) { animation-delay: 580ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(30) { animation-delay: 600ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(31) { animation-delay: 620ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(32) { animation-delay: 640ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(33) { animation-delay: 660ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(34) { animation-delay: 680ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(35) { animation-delay: 700ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(36) { animation-delay: 720ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(37) { animation-delay: 740ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(38) { animation-delay: 760ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(39) { animation-delay: 780ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(40) { animation-delay: 800ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(41) { animation-delay: 820ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(42) { animation-delay: 840ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(43) { animation-delay: 860ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(44) { animation-delay: 880ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(45) { animation-delay: 900ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(46) { animation-delay: 920ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(47) { animation-delay: 940ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(48) { animation-delay: 960ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(49) { animation-delay: 980ms }\r\n.animated[_ngcontent-%COMP%]:nth-child(50) { animation-delay: 1000ms }\r\n\r\n@keyframes _ngcontent-%COMP%_FadeIn {\r\n    from {\r\n        filter: blur(2px);\r\n        left: -5px;\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        filter: blur(0px);\r\n        left: 0;\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.row-expand[_ngcontent-%COMP%] {\r\n    background: #0000 !important;\r\n    border: none;\r\n    padding: 0 !important;\r\n}\r\n\r\n.collapse-toggle[_ngcontent-%COMP%]::after {\r\n    content: '\\F283';\r\n    display: inline-block;\r\n    font-family: bootstrap-icons !important;\r\n    font-style: normal;\r\n    font-weight: normal !important;\r\n    font-variant: normal;\r\n    text-transform: none;\r\n    line-height: 1;\r\n    vertical-align: -0.125em;\r\n}\r\n\r\n.collapse-toggle[aria-expanded=\"true\"][_ngcontent-%COMP%]::after {\r\n    content: '\\F27D';\r\n}\r\n\r\n.collapse-toggle.collapsed[_ngcontent-%COMP%]::after {\r\n    content: '\\F283';\r\n}\r\n\r\ntfoot[_ngcontent-%COMP%] {\r\n    background: rgba(var(--app-gray_800), 1);\r\n    color: rgba(var(--app-gray_0), 1)\r\n}\r\n\r\n.sticky-head[_ngcontent-%COMP%] {\r\n    background: rgba(var(--app-gray_0), 1);\r\n    box-shadow: 0 2px 16px 0 #0002;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (max-width: 650px) {\r\n\r\n    thead[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    \r\n    [_nghost-%COMP%]     td {\r\n        display: grid;\r\n    }\r\n\r\n    [_nghost-%COMP%]     td::before {\r\n        content: attr(data-label);\r\n        font-weight: bold;\r\n    }\r\n}\r\n\r\n@media (min-width: 650px) {\r\n\r\n    [_nghost-%COMP%]     .table > thead > tr > th:first-child, [_nghost-%COMP%]     .table > tbody > tr > td:not(.row-expand):first-child {\r\n        padding-left: 1.5rem !important;\r\n    }\r\n\r\n    [_nghost-%COMP%]     .table > thead > tr > th:last-child, [_nghost-%COMP%]     .table > tbody > tr > td:not(.row-expand):last-child {\r\n        padding-right: 1.5rem !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQSx5QkFBeUIsc0JBQXNCO0FBQy9DLHlCQUF5QixzQkFBc0I7QUFDL0MseUJBQXlCLHNCQUFzQjtBQUMvQyx5QkFBeUIsc0JBQXNCO0FBQy9DLHlCQUF5Qix1QkFBdUI7QUFDaEQseUJBQXlCLHVCQUF1QjtBQUNoRCx5QkFBeUIsdUJBQXVCO0FBQ2hELHlCQUF5Qix1QkFBdUI7QUFDaEQseUJBQXlCLHVCQUF1QjtBQUNoRCwwQkFBMEIsdUJBQXVCO0FBQ2pELDBCQUEwQix1QkFBdUI7QUFDakQsMEJBQTBCLHVCQUF1QjtBQUNqRCwwQkFBMEIsdUJBQXVCO0FBQ2pELDBCQUEwQix1QkFBdUI7QUFDakQsMEJBQTBCLHVCQUF1QjtBQUNqRCwwQkFBMEIsdUJBQXVCO0FBQ2pELDBCQUEwQix1QkFBdUI7QUFDakQsMEJBQTBCLHVCQUF1QjtBQUNqRCwwQkFBMEIsdUJBQXVCO0FBQ2pELDBCQUEwQix1QkFBdUI7QUFDakQsMEJBQTBCLHVCQUF1QjtBQUNqRCwwQkFBMEIsdUJBQXVCO0FBQ2pELDBCQUEwQix1QkFBdUI7QUFDakQsMEJBQTBCLHVCQUF1QjtBQUNqRCwwQkFBMEIsdUJBQXVCO0FBQ2pELDBCQUEwQix1QkFBdUI7QUFDakQsMEJBQTBCLHVCQUF1QjtBQUNqRCwwQkFBMEIsdUJBQXVCO0FBQ2pELDBCQUEwQix1QkFBdUI7QUFDakQsMEJBQTBCLHVCQUF1QjtBQUNqRCwwQkFBMEIsdUJBQXVCO0FBQ2pELDBCQUEwQix1QkFBdUI7QUFDakQsMEJBQTBCLHVCQUF1QjtBQUNqRCwwQkFBMEIsdUJBQXVCO0FBQ2pELDBCQUEwQix1QkFBdUI7QUFDakQsMEJBQTBCLHVCQUF1QjtBQUNqRCwwQkFBMEIsdUJBQXVCO0FBQ2pELDBCQUEwQix1QkFBdUI7QUFDakQsMEJBQTBCLHVCQUF1QjtBQUNqRCwwQkFBMEIsdUJBQXVCO0FBQ2pELDBCQUEwQix1QkFBdUI7QUFDakQsMEJBQTBCLHVCQUF1QjtBQUNqRCwwQkFBMEIsdUJBQXVCO0FBQ2pELDBCQUEwQix1QkFBdUI7QUFDakQsMEJBQTBCLHVCQUF1QjtBQUNqRCwwQkFBMEIsdUJBQXVCO0FBQ2pELDBCQUEwQix1QkFBdUI7QUFDakQsMEJBQTBCLHVCQUF1QjtBQUNqRCwwQkFBMEIsdUJBQXVCO0FBQ2pELDBCQUEwQix3QkFBd0I7O0FBRWxEO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLE9BQU87UUFDUCxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEM7QUFDSjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0Qyw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUk7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6QixpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTs7SUFFSTs7UUFFSSwrQkFBK0I7SUFDbkM7O0lBRUE7O1FBRUksZ0NBQWdDO0lBQ3BDO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItaGlnaGxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB0aCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5hbmltYXRlZCB7XHJcbiAgICBhbmltYXRpb246IGZvcndhcmRzIGVhc2Utb3V0IDMwMG1zIEZhZGVJbjtcclxuICAgIGZpbHRlcjogYmx1cigycHgpO1xyXG4gICAgbGVmdDogLTVweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hbmltYXRlZDpudGgtY2hpbGQoMSkgeyBhbmltYXRpb24tZGVsYXk6IDIwbXMgfVxyXG4uYW5pbWF0ZWQ6bnRoLWNoaWxkKDIpIHsgYW5pbWF0aW9uLWRlbGF5OiA0MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgzKSB7IGFuaW1hdGlvbi1kZWxheTogNjBtcyB9XHJcbi5hbmltYXRlZDpudGgtY2hpbGQoNCkgeyBhbmltYXRpb24tZGVsYXk6IDgwbXMgfVxyXG4uYW5pbWF0ZWQ6bnRoLWNoaWxkKDUpIHsgYW5pbWF0aW9uLWRlbGF5OiAxMDBtcyB9XHJcbi5hbmltYXRlZDpudGgtY2hpbGQoNikgeyBhbmltYXRpb24tZGVsYXk6IDEyMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCg3KSB7IGFuaW1hdGlvbi1kZWxheTogMTQwbXMgfVxyXG4uYW5pbWF0ZWQ6bnRoLWNoaWxkKDgpIHsgYW5pbWF0aW9uLWRlbGF5OiAxNjBtcyB9XHJcbi5hbmltYXRlZDpudGgtY2hpbGQoOSkgeyBhbmltYXRpb24tZGVsYXk6IDE4MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgxMCkgeyBhbmltYXRpb24tZGVsYXk6IDIwMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgxMSkgeyBhbmltYXRpb24tZGVsYXk6IDIyMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgxMikgeyBhbmltYXRpb24tZGVsYXk6IDI0MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgxMykgeyBhbmltYXRpb24tZGVsYXk6IDI2MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgxNCkgeyBhbmltYXRpb24tZGVsYXk6IDI4MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgxNSkgeyBhbmltYXRpb24tZGVsYXk6IDMwMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgxNikgeyBhbmltYXRpb24tZGVsYXk6IDMyMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgxNykgeyBhbmltYXRpb24tZGVsYXk6IDM0MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgxOCkgeyBhbmltYXRpb24tZGVsYXk6IDM2MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgxOSkgeyBhbmltYXRpb24tZGVsYXk6IDM4MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgyMCkgeyBhbmltYXRpb24tZGVsYXk6IDQwMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgyMSkgeyBhbmltYXRpb24tZGVsYXk6IDQyMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgyMikgeyBhbmltYXRpb24tZGVsYXk6IDQ0MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgyMykgeyBhbmltYXRpb24tZGVsYXk6IDQ2MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgyNCkgeyBhbmltYXRpb24tZGVsYXk6IDQ4MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgyNSkgeyBhbmltYXRpb24tZGVsYXk6IDUwMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgyNikgeyBhbmltYXRpb24tZGVsYXk6IDUyMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgyNykgeyBhbmltYXRpb24tZGVsYXk6IDU0MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgyOCkgeyBhbmltYXRpb24tZGVsYXk6IDU2MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgyOSkgeyBhbmltYXRpb24tZGVsYXk6IDU4MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgzMCkgeyBhbmltYXRpb24tZGVsYXk6IDYwMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgzMSkgeyBhbmltYXRpb24tZGVsYXk6IDYyMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgzMikgeyBhbmltYXRpb24tZGVsYXk6IDY0MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgzMykgeyBhbmltYXRpb24tZGVsYXk6IDY2MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgzNCkgeyBhbmltYXRpb24tZGVsYXk6IDY4MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgzNSkgeyBhbmltYXRpb24tZGVsYXk6IDcwMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgzNikgeyBhbmltYXRpb24tZGVsYXk6IDcyMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgzNykgeyBhbmltYXRpb24tZGVsYXk6IDc0MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgzOCkgeyBhbmltYXRpb24tZGVsYXk6IDc2MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCgzOSkgeyBhbmltYXRpb24tZGVsYXk6IDc4MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCg0MCkgeyBhbmltYXRpb24tZGVsYXk6IDgwMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCg0MSkgeyBhbmltYXRpb24tZGVsYXk6IDgyMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCg0MikgeyBhbmltYXRpb24tZGVsYXk6IDg0MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCg0MykgeyBhbmltYXRpb24tZGVsYXk6IDg2MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCg0NCkgeyBhbmltYXRpb24tZGVsYXk6IDg4MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCg0NSkgeyBhbmltYXRpb24tZGVsYXk6IDkwMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCg0NikgeyBhbmltYXRpb24tZGVsYXk6IDkyMG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCg0NykgeyBhbmltYXRpb24tZGVsYXk6IDk0MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCg0OCkgeyBhbmltYXRpb24tZGVsYXk6IDk2MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCg0OSkgeyBhbmltYXRpb24tZGVsYXk6IDk4MG1zIH1cclxuLmFuaW1hdGVkOm50aC1jaGlsZCg1MCkgeyBhbmltYXRpb24tZGVsYXk6IDEwMDBtcyB9XHJcblxyXG5Aa2V5ZnJhbWVzIEZhZGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcclxuICAgICAgICBsZWZ0OiAtNXB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgZmlsdGVyOiBibHVyKDBweCk7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucm93LWV4cGFuZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sbGFwc2UtdG9nZ2xlOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnXFxGMjgzJztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiBib290c3RyYXAtaWNvbnMgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiAtMC4xMjVlbTtcclxufVxyXG5cclxuLmNvbGxhcHNlLXRvZ2dsZVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ1xcRjI3RCc7XHJcbn1cclxuXHJcbi5jb2xsYXBzZS10b2dnbGUuY29sbGFwc2VkOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnXFxGMjgzJztcclxufVxyXG5cclxudGZvb3Qge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1hcHAtZ3JheV84MDApLCAxKTtcclxuICAgIGNvbG9yOiByZ2JhKHZhcigtLWFwcC1ncmF5XzApLCAxKVxyXG59XHJcblxyXG4uc3RpY2t5LWhlYWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1hcHAtZ3JheV8wKSwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxNnB4IDAgIzAwMDI7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcblxyXG4gICAgdGhlYWQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDpob3N0IDo6bmctZGVlcCB0ZCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgIH1cclxuXHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgdGQ6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY1MHB4KSB7XHJcblxyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC50YWJsZSA+IHRoZWFkID4gdHIgPiB0aDpmaXJzdC1jaGlsZCxcclxuICAgIDpob3N0IDo6bmctZGVlcCAudGFibGUgPiB0Ym9keSA+IHRyID4gdGQ6bm90KC5yb3ctZXhwYW5kKTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoOmxhc3QtY2hpbGQsXHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkOm5vdCgucm93LWV4cGFuZCk6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8191:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/toasts-container/toasts-container.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastsContainer": () => (/* binding */ ToastsContainer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/toast.service */ 4465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





function ToastsContainer_ng_template_0_ng_container_0_ngb_toast_1_ng_template_3_ng_template_0_Template(rf, ctx) {}
function ToastsContainer_ng_template_0_ng_container_0_ngb_toast_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToastsContainer_ng_template_0_ng_container_0_ngb_toast_1_ng_template_3_ng_template_0_Template, 0, 0, "ng-template", 15);
  }
  if (rf & 2) {
    const toast_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", toast_r9.textOrTpl);
  }
}
function ToastsContainer_ng_template_0_ng_container_0_ngb_toast_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const toast_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](toast_r9.textOrTpl);
  }
}
function ToastsContainer_ng_template_0_ng_container_0_ngb_toast_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-toast", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("hidden", function ToastsContainer_ng_template_0_ng_container_0_ngb_toast_1_Template_ngb_toast_hidden_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const toast_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.toastService.remove(toast_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ToastsContainer_ng_template_0_ng_container_0_ngb_toast_1_ng_template_3_Template, 1, 1, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ToastsContainer_ng_template_0_ng_container_0_ngb_toast_1_ng_template_4_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastsContainer_ng_template_0_ng_container_0_ngb_toast_1_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.deleteToast(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const toast_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](toast_r9.classname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autohide", true)("delay", toast_r9.delay || 5000);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.isTemplate(toast_r9))("ngIfElse", _r13);
  }
}
function ToastsContainer_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ToastsContainer_ng_template_0_ng_container_0_ngb_toast_1_Template, 8, 6, "ngb-toast", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const toast_r9 = ctx.$implicit;
    const position_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().position;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", toast_r9.position === position_r7);
  }
}
function ToastsContainer_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToastsContainer_ng_template_0_ng_container_0_Template, 2, 1, "ng-container", 6);
  }
  if (rf & 2) {
    const toasts_r6 = ctx.toasts;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", toasts_r6)("ngForTrackBy", ctx_r1.trackById);
  }
}
function ToastsContainer_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function ToastsContainer_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function ToastsContainer_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function ToastsContainer_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c0 = function (a0) {
  return {
    toasts: a0,
    position: "top-left"
  };
};
const _c1 = function (a0) {
  return {
    toasts: a0,
    position: "top-right"
  };
};
const _c2 = function (a0) {
  return {
    toasts: a0,
    position: "bottom-right"
  };
};
const _c3 = function (a0) {
  return {
    toasts: a0,
    position: "bottom-left"
  };
};
class ToastsContainer {
  constructor(toastService) {
    this.toastService = toastService;
  }
  isTemplate(toast) {
    return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef;
  }
  deleteToast(index) {
    this.toastService.toasts.splice(index, 1);
  }
  filterToasts(position) {
    return this.toastService.toasts.filter(t => t.position === position);
  }
  trackById(index, toast) {
    return toast.guid;
  }
  static {
    this.ɵfac = function ToastsContainer_Factory(t) {
      return new (t || ToastsContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ToastsContainer,
      selectors: [["app-toasts"]],
      decls: 10,
      vars: 16,
      consts: [["toastTemplate", ""], [1, "toast-container", "position-fixed", "top-0", "start-0", "p-3"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], [1, "toast-container", "position-fixed", "bottom-0", "end-0", "p-3"], [1, "toast-container", "position-fixed", "bottom-0", "start-0", "p-3"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["style", "font-size: 1.15rem; width: 500px;", 3, "class", "autohide", "delay", "hidden", 4, "ngIf"], [2, "font-size", "1.15rem", "width", "500px", 3, "autohide", "delay", "hidden"], [1, "d-flex", "align-items-start"], [2, "flex", "1 0 0"], [3, "ngIf", "ngIfElse"], ["text", ""], [2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-x-lg"], [3, "ngTemplateOutlet"]],
      template: function ToastsContainer_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToastsContainer_ng_template_0_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ToastsContainer_ng_container_3_Template, 1, 0, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ToastsContainer_ng_container_5_Template, 1, 0, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ToastsContainer_ng_container_7_Template, 1, 0, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ToastsContainer_ng_container_9_Template, 1, 0, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.toastService.toasts));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, ctx.toastService.toasts));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c2, ctx.toastService.toasts));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c3, ctx.toastService.toasts));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbToast],
      styles: ["[_nghost-%COMP%] {\r\n    position: relative;\r\n    z-index: 9999;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9hc3RzLWNvbnRhaW5lci90b2FzdHMtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4354:
/*!************************************************!*\
  !*** ./src/app/shared/directives/highlight.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightDirective": () => (/* binding */ HighlightDirective)
/* harmony export */ });
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js */ 7722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class HighlightDirective {
  set hl(code) {
    const el = this.el.nativeElement;
    el.innerHTML = highlight_js__WEBPACK_IMPORTED_MODULE_0__["default"].highlightAuto(code).value;
    el.style.position = "relative";
    el.style.paddingLeft = "2.5rem";
    el.style.lineHeight = "1rem";
    el.style.overflow = "hidden";
    for (let i = 0; i < 250; i++) {
      const ln = document.createElement("DIV");
      ln.innerHTML = String(i + 1);
      ln.style.position = "absolute";
      ln.style.top = String(i + 1 + "rem");
      ln.style.left = "0";
      ln.style.borderRight = "1px solid";
      ln.style.width = "2rem";
      ln.style.height = "1rem";
      ln.style.textAlign = "center";
      el.appendChild(ln);
    }
  }
  constructor(el) {
    this.el = el;
  }
  static {
    this.ɵfac = function HighlightDirective_Factory(t) {
      return new (t || HighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: HighlightDirective,
      selectors: [["", "hl", ""]],
      inputs: {
        hl: "hl"
      }
    });
  }
}

/***/ }),

/***/ 138:
/*!*********************************************!*\
  !*** ./src/app/shared/directives/ng-let.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LetDirective": () => (/* binding */ LetDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LetDirective {
  constructor(vcr, tr) {
    this.ctx = {
      ngLet: null
    };
    vcr.createEmbeddedView(tr, this.ctx);
  }
  set ngLet(value) {
    this.ctx.ngLet = value;
  }
  static {
    this.ɵfac = function LetDirective_Factory(t) {
      return new (t || LetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: LetDirective,
      selectors: [["", "ngLet", ""]],
      inputs: {
        ngLet: "ngLet"
      }
    });
  }
}

/***/ }),

/***/ 5760:
/*!******************************************************!*\
  !*** ./src/app/shared/directives/sortable-header.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSortableHeader": () => (/* binding */ AppSortableHeader),
/* harmony export */   "compare": () => (/* binding */ compare)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


const rotate = {
  asc: 'desc',
  desc: '',
  '': 'asc'
};
function compare(v1, v2) {
  // Let's put non values on top of the comparison
  const v1IsNonValue = v1 === null || v1 === undefined;
  const v2IsNonValue = v2 === null || v2 === undefined;
  if (v1IsNonValue && v2IsNonValue) return 0;
  if (v1IsNonValue) return -1;
  if (v2IsNonValue) return 1;
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
class AppSortableHeader {
  constructor() {
    this.sortable = '';
    this.direction = '';
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({
      column: this.sortable,
      direction: this.direction
    });
  }
  static {
    this.ɵfac = function AppSortableHeader_Factory(t) {
      return new (t || AppSortableHeader)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AppSortableHeader,
      selectors: [["th", "sortable", ""]],
      hostVars: 4,
      hostBindings: function AppSortableHeader_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppSortableHeader_click_HostBindingHandler() {
            return ctx.rotate();
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
        }
      },
      inputs: {
        sortable: "sortable",
        direction: "direction"
      },
      outputs: {
        sort: "sort"
      }
    });
  }
}

/***/ }),

/***/ 338:
/*!************************************************!*\
  !*** ./src/app/shared/directives/text2mask.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MASKEDINPUT_VALUE_ACCESSOR": () => (/* binding */ MASKEDINPUT_VALUE_ACCESSOR),
/* harmony export */   "MaskedInputDirective": () => (/* binding */ MaskedInputDirective),
/* harmony export */   "TextMaskConfig": () => (/* binding */ TextMaskConfig),
/* harmony export */   "conformToMask": () => (/* reexport safe */ _deps_text2mask_textMaskCore__WEBPACK_IMPORTED_MODULE_0__.conformToMask)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4666);
/* harmony import */ var _deps_text2mask_textMaskCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deps/text2mask/textMaskCore */ 1921);
/* harmony import */ var _deps_text2mask_textMaskCore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deps_text2mask_textMaskCore__WEBPACK_IMPORTED_MODULE_0__);





class TextMaskConfig {}
const MASKEDINPUT_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => MaskedInputDirective),
  multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
  const userAgent = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["ɵgetDOM"])() ? (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["ɵgetDOM"])().getUserAgent() : '';
  return /android (\d+)/.test(userAgent.toLowerCase());
}
class MaskedInputDirective {
  constructor(_renderer, _elementRef, _compositionMode) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._compositionMode = _compositionMode;
    this.textMaskConfig = {
      mask: [],
      guide: true,
      placeholderChar: '_',
      pipe: undefined,
      keepCharPositions: false
    };
    this.onChange = _ => {};
    this.onTouched = () => {};
    /** Whether the user is creating a composition string (IME events). */
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  ngOnChanges(changes) {
    this._setupMask(true);
    if (this.textMaskInputElement !== undefined) {
      this.textMaskInputElement.update(this.inputElement.value);
    }
  }
  writeValue(value) {
    this._setupMask();
    // set the initial value for cases where the mask is disabled
    const normalizedValue = value == null ? '' : value;
    this._renderer.setProperty(this.inputElement, 'value', normalizedValue);
    if (this.textMaskInputElement !== undefined) {
      this.textMaskInputElement.update(value);
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this._setupMask();
      if (this.textMaskInputElement !== undefined) {
        this.textMaskInputElement.update(value);
        // get the updated value
        value = this.inputElement.value;
        this.onChange(value);
      }
    }
  }
  _setupMask(create = false) {
    if (!this.inputElement) {
      if (this._elementRef.nativeElement.tagName.toUpperCase() === 'INPUT') {
        // `textMask` directive is used directly on an input element
        this.inputElement = this._elementRef.nativeElement;
      } else {
        // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
        this.inputElement = this._elementRef.nativeElement.getElementsByTagName('INPUT')[0];
      }
    }
    if (this.inputElement && create) {
      this.textMaskInputElement = (0,_deps_text2mask_textMaskCore__WEBPACK_IMPORTED_MODULE_0__.createTextMaskInputElement)(Object.assign({
        inputElement: this.inputElement
      }, this.textMaskConfig));
    }
  }
  _compositionStart() {
    this._composing = true;
  }
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this._handleInput(value);
  }
  static {
    this.ɵfac = function MaskedInputDirective_Factory(t) {
      return new (t || MaskedInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.COMPOSITION_BUFFER_MODE, 8));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MaskedInputDirective,
      selectors: [["", "textMask", ""]],
      hostBindings: function MaskedInputDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function MaskedInputDirective_input_HostBindingHandler($event) {
            return ctx._handleInput($event.target.value);
          })("blur", function MaskedInputDirective_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("compositionstart", function MaskedInputDirective_compositionstart_HostBindingHandler() {
            return ctx._compositionStart();
          })("compositionend", function MaskedInputDirective_compositionend_HostBindingHandler($event) {
            return ctx._compositionEnd($event.target.value);
          });
        }
      },
      inputs: {
        textMaskConfig: ["textMask", "textMaskConfig"]
      },
      exportAs: ["textMask"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MASKEDINPUT_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
    });
  }
}


/***/ }),

/***/ 2012:
/*!************************************************!*\
  !*** ./src/app/shared/pipes/hack-case.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HackCasePipe": () => (/* binding */ HackCasePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HackCasePipe {
  transform(value, ...args) {
    console.log(args);
    const leet = {
      'a': 4,
      'e': 3,
      'l': 1,
      't': 7,
      'z': 2,
      'o': 0
    };
    if (typeof value !== 'string') return "(not a string)";
    const chars = value.split('');
    let outStr = '';
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      if (leet[char] !== undefined) {
        outStr += leet[char];
      } else {
        outStr += char;
      }
    }
    return outStr;
  }
  static {
    this.ɵfac = function HackCasePipe_Factory(t) {
      return new (t || HackCasePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "hackCase",
      type: HackCasePipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/back-button/back-button.component */ 3472);
/* harmony import */ var _components_breadcrumb_router_breadcrumb_router_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/breadcrumb-router/breadcrumb-router.component */ 6800);
/* harmony import */ var _components_copy_paster_copy_paster_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/copy-paster/copy-paster.component */ 5850);
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/input/input.component */ 2371);
/* harmony import */ var _components_search_router_search_router_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search-router/search-router.component */ 8047);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/table/table.component */ 6709);
/* harmony import */ var _components_monthpicker_monthpicker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/monthpicker/monthpicker.component */ 584);
/* harmony import */ var _components_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chart.component */ 5624);
/* harmony import */ var _components_image_uploader_preview_image_uploader_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/image-uploader-preview/image-uploader-preview.component */ 7655);
/* harmony import */ var _components_holy_grail_holy_grail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/holy-grail/holy-grail.component */ 5150);
/* harmony import */ var _components_linear_loading_indicator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/linear-loading-indicator.component */ 3252);
/* harmony import */ var _directives_ng_let__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/ng-let */ 138);
/* harmony import */ var _directives_text2mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/text2mask */ 338);
/* harmony import */ var _directives_sortable_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/sortable-header */ 5760);
/* harmony import */ var _pipes_hack_case_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/hack-case.pipe */ 2012);
/* harmony import */ var _directives_highlight__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/highlight */ 4354);
/* harmony import */ var _components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/toasts-container/toasts-container.component */ 8191);
/* harmony import */ var _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dynamic-form/dynamic-form.component */ 1224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);


























class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ScrollingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ScrollingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [
    // Components
    _components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_0__.BackButtonComponent, _components_breadcrumb_router_breadcrumb_router_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbRouterComponent, _components_copy_paster_copy_paster_component__WEBPACK_IMPORTED_MODULE_2__.CopyPasterComponent, _components_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _components_search_router_search_router_component__WEBPACK_IMPORTED_MODULE_4__.SearchRouterComponent, _components_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _components_monthpicker_monthpicker_component__WEBPACK_IMPORTED_MODULE_6__.MonthpickerComponent, _components_chart_component__WEBPACK_IMPORTED_MODULE_7__.AppChartComponent, _components_image_uploader_preview_image_uploader_preview_component__WEBPACK_IMPORTED_MODULE_8__.ImageUploaderPreviewComponent, _components_holy_grail_holy_grail_component__WEBPACK_IMPORTED_MODULE_9__.HolyGrailComponent, _components_linear_loading_indicator_component__WEBPACK_IMPORTED_MODULE_10__.LinearLoadingIndicatorComponent, _components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_16__.ToastsContainer, _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_17__.DynamicFormComponent,
    // Directives
    _directives_ng_let__WEBPACK_IMPORTED_MODULE_11__.LetDirective, _directives_text2mask__WEBPACK_IMPORTED_MODULE_12__.MaskedInputDirective, _directives_sortable_header__WEBPACK_IMPORTED_MODULE_13__.AppSortableHeader, _directives_highlight__WEBPACK_IMPORTED_MODULE_15__.HighlightDirective,
    // Pipes
    _pipes_hack_case_pipe__WEBPACK_IMPORTED_MODULE_14__.HackCasePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__.CdkDrag, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ScrollingModule],
    exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__.CdkDrag, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ScrollingModule,
    // Components
    _components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_0__.BackButtonComponent, _components_breadcrumb_router_breadcrumb_router_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbRouterComponent, _components_copy_paster_copy_paster_component__WEBPACK_IMPORTED_MODULE_2__.CopyPasterComponent, _components_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _components_search_router_search_router_component__WEBPACK_IMPORTED_MODULE_4__.SearchRouterComponent, _components_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _components_monthpicker_monthpicker_component__WEBPACK_IMPORTED_MODULE_6__.MonthpickerComponent, _components_chart_component__WEBPACK_IMPORTED_MODULE_7__.AppChartComponent, _components_image_uploader_preview_image_uploader_preview_component__WEBPACK_IMPORTED_MODULE_8__.ImageUploaderPreviewComponent, _components_holy_grail_holy_grail_component__WEBPACK_IMPORTED_MODULE_9__.HolyGrailComponent, _components_linear_loading_indicator_component__WEBPACK_IMPORTED_MODULE_10__.LinearLoadingIndicatorComponent, _components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_16__.ToastsContainer, _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_17__.DynamicFormComponent,
    // Directives
    _directives_ng_let__WEBPACK_IMPORTED_MODULE_11__.LetDirective, _directives_text2mask__WEBPACK_IMPORTED_MODULE_12__.MaskedInputDirective, _directives_sortable_header__WEBPACK_IMPORTED_MODULE_13__.AppSortableHeader, _directives_highlight__WEBPACK_IMPORTED_MODULE_15__.HighlightDirective,
    // Pipes
    _pipes_hack_case_pipe__WEBPACK_IMPORTED_MODULE_14__.HackCasePipe]
  });
})();

/***/ }),

/***/ 7591:
/*!**************************************************************************************!*\
  !*** ./src/app/syllogimous/components/card/card-dropdown/card-dropdown.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardDropdownComponent": () => (/* binding */ CardDropdownComponent)
/* harmony export */ });
/* harmony import */ var C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_syllogimous_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/syllogimous/constants/local-storage.constants */ 6376);
/* harmony import */ var src_app_syllogimous_constants_game_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/syllogimous/constants/game.constants */ 6904);
/* harmony import */ var src_app_utils_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/file */ 2875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_syllogimous_services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/syllogimous/services/game.service */ 6513);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);









function CardDropdownComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Are you sure?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_ng_template_0_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const modal_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](modal_r5.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " All your progresses will be deleted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Are you sure you want to proceed with the reset? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 17)(9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_ng_template_0_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const modal_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](modal_r5.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_ng_template_0_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const modal_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](modal_r5.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CardDropdownComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Lightmode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function CardDropdownComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Darkmode ");
  }
}
class CardDropdownComponent {
  constructor(game, router, modalService) {
    this.game = game;
    this.router = router;
    this.modalService = modalService;
    this.EnumScreens = src_app_syllogimous_constants_game_constants__WEBPACK_IMPORTED_MODULE_2__.EnumScreens;
  }
  ngAfterViewInit() {
    this.toggleDarkmode(true);
  }
  resetGame(content) {
    var _this = this;
    return (0,C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.modalService.open(content, {
        centered: true
      }).result;
      for (const lsProp of src_app_syllogimous_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_1__.LS_PROPS) {
        localStorage.removeItem(lsProp);
      }
      location.reload();
    })();
  }
  toggleDarkmode(initial = false) {
    if (!initial) {
      localStorage.setItem("darkmode", JSON.stringify(!this.getDarkmode()));
    }
    if (this.getDarkmode()) {
      document.querySelector("html")?.setAttribute("darkmode", "");
    } else {
      document.querySelector("html")?.removeAttribute("darkmode");
    }
  }
  getDarkmode() {
    return JSON.parse(localStorage.getItem("darkmode") || "false");
  }
  isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  createFileInput() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
    fileInput.style.display = "none";
    return fileInput;
  }
  import() {
    var _this2 = this;
    return (0,C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let importJson = null;
      if (_this2.isSafari()) {
        importJson = prompt("Paste your JSON here");
        if (!importJson || typeof importJson !== "string") {
          return alert("Invalid/missing JSON file");
        }
      } else {
        importJson = yield new Promise(resolve => {
          const fileInput = _this2.createFileInput();
          fileInput.onchange = /*#__PURE__*/function () {
            var _ref = (0,C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (evt) {
              const file = evt.target.files[0];
              if (!file) {
                return alert("No JSON file selected");
              }
              resolve(yield new Promise(resolve => {
                const reader = new FileReader();
                reader.onload = e => {
                  const importJson = e.target?.result;
                  if (!importJson || typeof importJson !== "string") {
                    return alert("Invalid JSON file");
                  }
                  resolve(importJson);
                };
                reader.readAsText(file);
              }));
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }();
          fileInput.click();
        });
      }
      if (!importJson || typeof importJson !== "string") {
        return alert("Invalid JSON file");
      }
      const confirmation = confirm("Importing will overwrite all existing settings. Are you sure?");
      if (!confirmation) {
        return;
      }
      const data = JSON.parse(importJson);
      for (const [key, value] of Object.entries(data)) {
        if (key === src_app_syllogimous_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_1__.LS_HISTORY) {
          const parsed = JSON.parse(value).slice(0, 1000);
          localStorage.setItem(key, JSON.stringify(parsed));
        } else {
          localStorage.setItem(key, value);
        }
      }
      setTimeout(() => {
        alert("Import completed successfully!");
        window.location.reload();
      }, 400);
    })();
  }
  export() {
    const exportJson = {};
    for (const lsProp of src_app_syllogimous_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_1__.LS_PROPS) {
      const propVal = localStorage.getItem(lsProp);
      if (propVal) {
        exportJson[lsProp] = propVal;
      }
    }
    (0,src_app_utils_file__WEBPACK_IMPORTED_MODULE_3__.downloadFile)(new Blob([JSON.stringify(exportJson)], {
      type: "text/plain"
    }), `syllogimous-export_${new Date().toLocaleDateString("sv")}.json`);
    setTimeout(() => alert("Export completed successfully!"), 400);
  }
  static {
    this.ɵfac = function CardDropdownComponent_Factory(t) {
      return new (t || CardDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_syllogimous_services_game_service__WEBPACK_IMPORTED_MODULE_4__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CardDropdownComponent,
      selectors: [["app-card-dropdown"]],
      decls: 46,
      vars: 2,
      consts: [["content", ""], ["ngbDropdown", "", "container", "body"], ["ngbDropdownToggle", "", 1, "btn"], ["ngbDropdownMenu", ""], [1, "text-muted", "ms-3"], ["ngbDropdownItem", "", 3, "click"], [1, "dropdown-divider"], [1, "bi", "bi-upload"], [1, "bi", "bi-download"], [4, "ngIf", "ngIfElse"], ["darkmode", ""], [1, "bi", "bi-trash3"], ["ngbDropdownItem", "", "href", "https://www.linkedin.com/in/f3d3r1c07r0774/", "target", "_blank"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "bi", "bi-sun"], [1, "bi", "bi-moon"]],
      template: function CardDropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CardDropdownComponent_ng_template_0_Template, 13, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div")(3, "div", 1)(4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "More");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3)(7, "small", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Pages");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_9_listener() {
            return ctx.router.navigate([ctx.EnumScreens.Start]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Start");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_11_listener() {
            return ctx.router.navigate([ctx.EnumScreens.Intro]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Intro");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_13_listener() {
            return ctx.router.navigate([ctx.EnumScreens.Stats]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Stats");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_15_listener() {
            return ctx.router.navigate([ctx.EnumScreens.History]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "History");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_17_listener() {
            return ctx.router.navigate([ctx.EnumScreens.Settings]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_19_listener() {
            return ctx.router.navigate([ctx.EnumScreens.Tutorials]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Tutorials");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_21_listener() {
            return ctx.router.navigate([ctx.EnumScreens.PlaygroundMode]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Playground");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "small", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Functions");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_26_listener() {
            return ctx.import();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Import ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_29_listener() {
            return ctx.export();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Export");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_32_listener() {
            return ctx.toggleDarkmode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, CardDropdownComponent_ng_container_33_Template, 3, 0, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, CardDropdownComponent_ng_template_34_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.resetGame(_r0));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " Reset Game");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "small", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Links");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_42_listener() {
            return ctx.router.navigate([ctx.EnumScreens.OtherGames]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Other Games");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "About the Author");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getDarkmode())("ngIfElse", _r3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownItem],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8640:
/*!***************************************************************!*\
  !*** ./src/app/syllogimous/components/card/card.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _constants_game_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/game.constants */ 6904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game.service */ 6513);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _card_dropdown_card_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-dropdown/card-dropdown.component */ 7591);






function CardComponent_ng_template_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tier_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx_r2.TIER_COLORS[tier_r3].bgColor)("color", ctx_r2.TIER_COLORS[tier_r3].textColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tier_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate4"](" ", ctx_r2.TIER_SCORE_RANGES[tier_r3].maxScore === ctx_r2.Infinity ? "above" : "", " ", ctx_r2.TIER_SCORE_RANGES[tier_r3].minScore === -ctx_r2.Infinity ? "" : ctx_r2.TIER_SCORE_RANGES[tier_r3].minScore, " ", ctx_r2.TIER_SCORE_RANGES[tier_r3].maxScore === ctx_r2.Infinity ? "" : ctx_r2.TIER_SCORE_RANGES[tier_r3].minScore === -ctx_r2.Infinity ? "below" : "-", " ", ctx_r2.TIER_SCORE_RANGES[tier_r3].maxScore === ctx_r2.Infinity ? "" : ctx_r2.TIER_SCORE_RANGES[tier_r3].maxScore + 1, " pts ");
  }
}
function CardComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CardComponent_ng_template_7_div_1_Template, 4, 9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.tiers);
  }
}
const _c0 = [[["", "body", ""]], [["", "footer", ""]]];
const _c1 = ["[body]", "[footer]"];
class CardComponent {
  constructor(game) {
    this.game = game;
    this.TIER_COLORS = _constants_game_constants__WEBPACK_IMPORTED_MODULE_0__.TIER_COLORS;
    this.TIER_SCORE_RANGES = _constants_game_constants__WEBPACK_IMPORTED_MODULE_0__.TIER_SCORE_RANGES;
    this.tiers = Object.values(_constants_game_constants__WEBPACK_IMPORTED_MODULE_0__.EnumTiers);
    this.Infinity = Infinity;
  }
  static {
    this.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_1__.GameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      ngContentSelectors: _c1,
      decls: 17,
      vars: 8,
      consts: [[1, "playcard", "card"], [1, "playcard-header", "card-header"], [1, "playcard-toolbar"], ["triggers", "click", 1, "tier-badge", "badge", "clickable", "fs-6", 3, "ngbTooltip", "autoClose"], [1, "bi", "bi-info-circle"], ["tierTooltip", ""], [1, "text-muted", "ms-2"], [1, "card-body", "p-0", "overflow-hidden", "position-relative"], [1, "playcard-body"], [1, "playcard-footer", "card-footer"], [1, "text-start"], [4, "ngFor", "ngForOf"], [1, "badge", 2, "width", "80px"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CardComponent_ng_template_7_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-card-dropdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7)(13, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](16, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx.TIER_COLORS[ctx.game.tier].bgColor)("color", ctx.TIER_COLORS[ctx.game.tier].textColor);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbTooltip", _r0)("autoClose", "outside");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.game.tier, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.game.score, " pts");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltip, _card_dropdown_card_dropdown_component__WEBPACK_IMPORTED_MODULE_2__.CardDropdownComponent],
      styles: ["[_nghost-%COMP%]     .playcard-header {\n  border-bottom: 1px solid rgba(var(--app-gray_1000), 1);\n  background: rgba(0, 0, 0, 0);\n}\n[_nghost-%COMP%]     .playcard-footer {\n  border-top: 1px solid rgba(var(--app-gray_1000), 1);\n  background: rgba(0, 0, 0, 0);\n}\n[_nghost-%COMP%]     .playcard-header:empty, [_nghost-%COMP%]     .playcard-footer:empty {\n  padding: 0;\n}\n[_nghost-%COMP%]     .playcard-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .subject {\n  font-weight: 700;\n}\n[_nghost-%COMP%]     .is-negated {\n  color: var(--negated-color);\n  font-style: italic;\n}\n[_nghost-%COMP%]     .tier-badge {\n  border: 1px solid;\n}\n\n.great-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-evenly;\n  bottom: 100%;\n  font-size: 3.25rem;\n  line-height: 1;\n  text-transform: uppercase;\n  font-weight: 900;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.great-title-version[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  text-transform: lowercase;\n  margin-bottom: 0.25rem;\n}\n\n.playcard[_ngcontent-%COMP%] {\n  width: min(38rem, 100vw);\n  height: min(42rem, 100svh);\n  background-color: rgba(var(--app-gray_0), 1);\n  overflow: hidden;\n}\n\n.playcard-body[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  place-items: center;\n  height: 100%;\n  overflow: auto;\n  padding: 1rem;\n  background-image: linear-gradient(62deg, rgba(142, 197, 252, 0.25) 0%, rgba(224, 195, 252, 0.25) 100%);\n}\n\n@media (max-width: 768px) {\n  .great-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .playcard[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 100svh;\n    border-radius: 0;\n    box-shadow: none;\n    margin: 0;\n    border: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxzREFBQTtFQUNBLDRCQUFBO0FBQVI7QUFHSTtFQUNJLG1EQUFBO0VBQ0EsNEJBQUE7QUFEUjtBQUlJOztFQUVJLFVBQUE7QUFGUjtBQUtJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFIUjtBQU1JO0VBQ0ksZ0JBQUE7QUFKUjtBQU9JO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtBQUxSO0FBUUk7RUFDSSxpQkFBQTtBQU5SOztBQVVBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBUEo7O0FBVUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFQSjs7QUFVQTtFQUNJLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FBUEo7O0FBVUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNHQUFBO0FBUEo7O0FBVUE7RUFDSTtJQUNJLGFBQUE7RUFQTjtFQVVFO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7RUFSTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgIC5wbGF5Y2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLWFwcC1ncmF5XzEwMDApLCAxKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICAucGxheWNhcmQtZm9vdGVyIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSh2YXIoLS1hcHAtZ3JheV8xMDAwKSwgMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsYXljYXJkLWhlYWRlcjplbXB0eSwgXHJcbiAgICAucGxheWNhcmQtZm9vdGVyOmVtcHR5IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wbGF5Y2FyZC10b29sYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3ViamVjdCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuXHJcbiAgICAuaXMtbmVnYXRlZCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLW5lZ2F0ZWQtY29sb3IpO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuXHJcbiAgICAudGllci1iYWRnZSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ncmVhdC10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAzLjI1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5ncmVhdC10aXRsZS12ZXJzaW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG59XHJcblxyXG4ucGxheWNhcmQge1xyXG4gICAgd2lkdGg6IG1pbigzOHJlbSwgMTAwdncpO1xyXG4gICAgaGVpZ2h0OiBtaW4oNDJyZW0sIDEwMHN2aCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWFwcC1ncmF5XzApLCAxKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wbGF5Y2FyZC1ib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDYyZGVnLCByZ2JhKDE0MiwgMTk3LCAyNTIsIDAuMjUpIDAlLCByZ2JhKDIyNCwgMTk1LCAyNTIsIDAuMjUpIDEwMCUpO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmdyZWF0LXRpdGxlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5wbGF5Y2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDogMTAwc3ZoO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8487:
/*!*******************************************************************************************!*\
  !*** ./src/app/syllogimous/components/modal-level-change/modal-level-change.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalLevelChangeComponent": () => (/* binding */ ModalLevelChangeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function ModalLevelChangeComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
  }
  if (rf & 2) {
    const content_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", content_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
class ModalLevelChangeComponent {
  constructor(activeModal) {
    this.activeModal = activeModal;
    this.contents = [];
  }
  ngOnInit() {
    if (this.content) {
      this.contents = this.content.split("\n");
    }
  }
  static {
    this.ɵfac = function ModalLevelChangeComponent_Factory(t) {
      return new (t || ModalLevelChangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalLevelChangeComponent,
      selectors: [["app-modal-level-change"]],
      inputs: {
        title: "title",
        content: "content"
      },
      decls: 6,
      vars: 2,
      consts: [[1, "modal-body", "p-5", "text-center"], [3, "innerHTML"], [1, "my-4", 2, "font-size", "1.15rem"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click"]],
      template: function ModalLevelChangeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h4", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalLevelChangeComponent_div_3_Template, 1, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalLevelChangeComponent_Template_button_click_4_listener() {
            return ctx.activeModal.close("Ok click");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Got It!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contents);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6904:
/*!*********************************************************!*\
  !*** ./src/app/syllogimous/constants/game.constants.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnumScreens": () => (/* binding */ EnumScreens),
/* harmony export */   "EnumTiers": () => (/* binding */ EnumTiers),
/* harmony export */   "INF": () => (/* binding */ INF),
/* harmony export */   "NO_DATA": () => (/* binding */ NO_DATA),
/* harmony export */   "ORDERED_QUESTION_TYPES": () => (/* binding */ ORDERED_QUESTION_TYPES),
/* harmony export */   "ORDERED_TIERS": () => (/* binding */ ORDERED_TIERS),
/* harmony export */   "TIERS_MATRIX": () => (/* binding */ TIERS_MATRIX),
/* harmony export */   "TIER_COLORS": () => (/* binding */ TIER_COLORS),
/* harmony export */   "TIER_SCORE_ADJUSTMENTS": () => (/* binding */ TIER_SCORE_ADJUSTMENTS),
/* harmony export */   "TIER_SCORE_RANGES": () => (/* binding */ TIER_SCORE_RANGES)
/* harmony export */ });
/* harmony import */ var _question_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.constants */ 6189);

const INF = Infinity;
var EnumScreens;
(function (EnumScreens) {
  EnumScreens["Intro"] = "Intro";
  EnumScreens["Start"] = "Start";
  EnumScreens["Tutorial"] = "Tutorial";
  EnumScreens["Game"] = "Game";
  EnumScreens["Feedback"] = "Feedback";
  EnumScreens["History"] = "History";
  EnumScreens["Tutorials"] = "Tutorials";
  EnumScreens["Stats"] = "Stats";
  EnumScreens["PlaygroundMode"] = "Playground Mode";
  EnumScreens["Settings"] = "Settings";
  EnumScreens["TiersMatrix"] = "Tiers Matrix";
  EnumScreens["OtherGames"] = "Other Games";
})(EnumScreens || (EnumScreens = {}));
var EnumTiers;
(function (EnumTiers) {
  EnumTiers["Adept"] = "Adept";
  EnumTiers["Scholar"] = "Scholar";
  EnumTiers["Savant"] = "Savant";
  EnumTiers["Expert"] = "Expert";
  EnumTiers["Mastermind"] = "Mastermind";
  EnumTiers["Visionary"] = "Visionary";
  EnumTiers["Genius"] = "Genius";
  EnumTiers["Virtuoso"] = "Virtuoso";
  EnumTiers["Luminary"] = "Luminary";
  EnumTiers["Prodigy"] = "Prodigy";
  EnumTiers["Oracle"] = "Oracle";
  EnumTiers["Sage"] = "Sage";
  EnumTiers["Philosopher"] = "Philosopher";
  EnumTiers["Mystic"] = "Mystic";
  EnumTiers["Transcendent"] = "Transcendent";
})(EnumTiers || (EnumTiers = {}));
const TIER_COLORS = {
  [EnumTiers.Adept]: {
    bgColor: "#F0F8FF",
    textColor: "#045D56"
  },
  [EnumTiers.Scholar]: {
    bgColor: "#ADD8E6",
    textColor: "#013220"
  },
  [EnumTiers.Savant]: {
    bgColor: "#E6E6FA",
    textColor: "#4B0082"
  },
  [EnumTiers.Expert]: {
    bgColor: "#D8BFD8",
    textColor: "#8B008B"
  },
  [EnumTiers.Mastermind]: {
    bgColor: "#DDA0DD",
    textColor: "#483D8B"
  },
  [EnumTiers.Visionary]: {
    bgColor: "#B0E0E6",
    textColor: "#002366"
  },
  [EnumTiers.Genius]: {
    bgColor: "#AFEEEE",
    textColor: "#004953"
  },
  [EnumTiers.Virtuoso]: {
    bgColor: "#00CED1",
    textColor: "#002D62"
  },
  [EnumTiers.Luminary]: {
    bgColor: "#98FB98",
    textColor: "#006400"
  },
  [EnumTiers.Prodigy]: {
    bgColor: "#FFFACD",
    textColor: "#556B2F"
  },
  [EnumTiers.Oracle]: {
    bgColor: "#FFDAB9",
    textColor: "#A0522D"
  },
  [EnumTiers.Sage]: {
    bgColor: "#FFC0CB",
    textColor: "#8B0000"
  },
  [EnumTiers.Philosopher]: {
    bgColor: "#D8BFD8",
    textColor: "#4A235A"
  },
  [EnumTiers.Mystic]: {
    bgColor: "#C71585",
    textColor: "#FFE4E1"
  },
  [EnumTiers.Transcendent]: {
    bgColor: "#4B0082",
    textColor: "#F0F8FF"
  } // Indigo with Alice Blue
};

const NO_DATA = "--";
const TIER_SCORE_RANGES = {
  [EnumTiers.Adept]: {
    minScore: -INF,
    maxScore: 249
  },
  [EnumTiers.Scholar]: {
    minScore: 250,
    maxScore: 499
  },
  [EnumTiers.Savant]: {
    minScore: 500,
    maxScore: 749
  },
  [EnumTiers.Expert]: {
    minScore: 750,
    maxScore: 999
  },
  [EnumTiers.Mastermind]: {
    minScore: 1000,
    maxScore: 1249
  },
  [EnumTiers.Visionary]: {
    minScore: 1250,
    maxScore: 1499
  },
  [EnumTiers.Genius]: {
    minScore: 1500,
    maxScore: 1749
  },
  [EnumTiers.Virtuoso]: {
    minScore: 1750,
    maxScore: 1999
  },
  [EnumTiers.Luminary]: {
    minScore: 2000,
    maxScore: 2249
  },
  [EnumTiers.Prodigy]: {
    minScore: 2250,
    maxScore: 2499
  },
  [EnumTiers.Oracle]: {
    minScore: 2500,
    maxScore: 2749
  },
  [EnumTiers.Sage]: {
    minScore: 2750,
    maxScore: 2999
  },
  [EnumTiers.Philosopher]: {
    minScore: 3000,
    maxScore: 3249
  },
  [EnumTiers.Mystic]: {
    minScore: 3250,
    maxScore: 3499
  },
  [EnumTiers.Transcendent]: {
    minScore: 3500,
    maxScore: INF
  }
};
const TIER_SCORE_ADJUSTMENTS = {
  [EnumTiers.Adept]: {
    increment: 10,
    decrement: 10
  },
  [EnumTiers.Scholar]: {
    increment: 10,
    decrement: 10
  },
  [EnumTiers.Savant]: {
    increment: 10,
    decrement: 10
  },
  [EnumTiers.Expert]: {
    increment: 10,
    decrement: 10
  },
  [EnumTiers.Mastermind]: {
    increment: 10,
    decrement: 10
  },
  [EnumTiers.Visionary]: {
    increment: 10,
    decrement: 10
  },
  [EnumTiers.Genius]: {
    increment: 10,
    decrement: 10
  },
  [EnumTiers.Virtuoso]: {
    increment: 10,
    decrement: 10
  },
  [EnumTiers.Luminary]: {
    increment: 10,
    decrement: 10
  },
  [EnumTiers.Prodigy]: {
    increment: 10,
    decrement: 10
  },
  [EnumTiers.Oracle]: {
    increment: 10,
    decrement: 10
  },
  [EnumTiers.Sage]: {
    increment: 10,
    decrement: 10
  },
  [EnumTiers.Philosopher]: {
    increment: 10,
    decrement: 10
  },
  [EnumTiers.Mystic]: {
    increment: 10,
    decrement: 10
  },
  [EnumTiers.Transcendent]: {
    increment: 10,
    decrement: 10
  }
};
const ORDERED_TIERS = Object.keys(TIER_SCORE_RANGES);
const ORDERED_QUESTION_TYPES = [_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Distinction, _question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.ComparisonNumerical, _question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.ComparisonChronological, _question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Syllogism, _question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.LinearArrangement, _question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.CircularArrangement, _question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Direction, _question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Direction3DSpatial, _question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Direction3DTemporal, _question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.GraphMatching, _question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Analogy, _question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Binary];
const TIERS_MATRIX = {
  0: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  1: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  2: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  3: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  4: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  5: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  6: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  7: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  8: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  10: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  11: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  12: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  13: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  14: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
};

/***/ }),

/***/ 6376:
/*!******************************************************************!*\
  !*** ./src/app/syllogimous/constants/local-storage.constants.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LS_COLOR_BLINDNESS_MODE": () => (/* binding */ LS_COLOR_BLINDNESS_MODE),
/* harmony export */   "LS_DAILY_GOAL": () => (/* binding */ LS_DAILY_GOAL),
/* harmony export */   "LS_DAILY_PROGRESS": () => (/* binding */ LS_DAILY_PROGRESS),
/* harmony export */   "LS_DONT_SHOW": () => (/* binding */ LS_DONT_SHOW),
/* harmony export */   "LS_GAME_MODE": () => (/* binding */ LS_GAME_MODE),
/* harmony export */   "LS_HISTORY": () => (/* binding */ LS_HISTORY),
/* harmony export */   "LS_PG_SETTINGS": () => (/* binding */ LS_PG_SETTINGS),
/* harmony export */   "LS_PREMISES_DOWN_THRESHOLD": () => (/* binding */ LS_PREMISES_DOWN_THRESHOLD),
/* harmony export */   "LS_PREMISES_UP_THRESHOLD": () => (/* binding */ LS_PREMISES_UP_THRESHOLD),
/* harmony export */   "LS_PROPS": () => (/* binding */ LS_PROPS),
/* harmony export */   "LS_SCORE": () => (/* binding */ LS_SCORE),
/* harmony export */   "LS_TIMER": () => (/* binding */ LS_TIMER),
/* harmony export */   "LS_TRAINING_UNIT": () => (/* binding */ LS_TRAINING_UNIT),
/* harmony export */   "LS_TRAINING_UNIT_LENGTH": () => (/* binding */ LS_TRAINING_UNIT_LENGTH),
/* harmony export */   "LS_WEEKLY_GOAL": () => (/* binding */ LS_WEEKLY_GOAL)
/* harmony export */ });
/* harmony import */ var _question_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.constants */ 6189);
/* harmony import */ var _game_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.constants */ 6904);


const LS_DONT_SHOW = "SYL_DONT_SHOW:";
const LS_HISTORY = "SYL_HISTORY";
const LS_TIMER = "SYL_TIMER_TYPE";
const LS_GAME_MODE = "SYL_GAME_MODE";
const LS_DAILY_PROGRESS = "SYL_DAILY_PROGRESS";
const LS_PG_SETTINGS = "SYL_PG_SETTINGSv1";
const LS_DAILY_GOAL = "SYL_DAILY_GOAL";
const LS_WEEKLY_GOAL = "SYL_WEEKLY_GOAL";
const LS_TRAINING_UNIT = "SYL_TRAINING_UNIT:";
const LS_TRAINING_UNIT_LENGTH = "SYL_TRAINING_UNIT_LENGTH";
const LS_PREMISES_UP_THRESHOLD = "SYL_PREMISES_UP_THRESHOLD";
const LS_PREMISES_DOWN_THRESHOLD = "SYL_PREMISES_DOWN_THRESHOLD";
const LS_SCORE = "SYL_SCORE";
const LS_COLOR_BLINDNESS_MODE = "SYL_COLOR_BLINDNESS_MODE";
const LS_PROPS = [LS_HISTORY, LS_TIMER, LS_GAME_MODE, LS_DAILY_PROGRESS, LS_PG_SETTINGS, LS_DAILY_GOAL, LS_WEEKLY_GOAL, LS_TRAINING_UNIT_LENGTH, LS_PREMISES_UP_THRESHOLD, LS_PREMISES_DOWN_THRESHOLD, LS_SCORE];
for (const screen of Object.values(_game_constants__WEBPACK_IMPORTED_MODULE_1__.EnumScreens)) {
  LS_PROPS.push(LS_DONT_SHOW + screen);
}
for (const type of Object.values(_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType)) {
  LS_PROPS.push(LS_DONT_SHOW + type);
  LS_PROPS.push(LS_TRAINING_UNIT + type);
}

/***/ }),

/***/ 6189:
/*!*************************************************************!*\
  !*** ./src/app/syllogimous/constants/question.constants.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnumArrangements": () => (/* binding */ EnumArrangements),
/* harmony export */   "EnumQuestionType": () => (/* binding */ EnumQuestionType),
/* harmony export */   "NOUNS": () => (/* binding */ NOUNS),
/* harmony export */   "NUMBER_WORDS": () => (/* binding */ NUMBER_WORDS),
/* harmony export */   "getEmojis": () => (/* binding */ getEmojis),
/* harmony export */   "getStrings": () => (/* binding */ getStrings)
/* harmony export */ });
var EnumQuestionType;
(function (EnumQuestionType) {
  EnumQuestionType["Distinction"] = "Distinction";
  EnumQuestionType["ComparisonNumerical"] = "Comparison Numerical";
  EnumQuestionType["ComparisonChronological"] = "Comparison Chronological";
  EnumQuestionType["Syllogism"] = "Syllogism";
  EnumQuestionType["Direction"] = "Direction";
  EnumQuestionType["Direction3DSpatial"] = "Direction3D Spatial";
  EnumQuestionType["Direction3DTemporal"] = "Direction3D Temporal";
  EnumQuestionType["LinearArrangement"] = "Linear Arrangement";
  EnumQuestionType["CircularArrangement"] = "Circular Arrangement";
  EnumQuestionType["GraphMatching"] = "Graph Matching";
  EnumQuestionType["Analogy"] = "Analogy";
  EnumQuestionType["Binary"] = "Binary";
})(EnumQuestionType || (EnumQuestionType = {}));
var EnumArrangements;
(function (EnumArrangements) {
  EnumArrangements["AdjacentLeft"] = "is adjacent and left of";
  EnumArrangements["AdjacentRight"] = "is adjacent and right of";
  EnumArrangements["Next"] = "is next to";
  EnumArrangements["NStepsLeft"] = "is # steps left of";
  EnumArrangements["NStepsRight"] = "is # steps right of";
  EnumArrangements["Left"] = "is at the left of";
  EnumArrangements["Right"] = "is at the right of";
  EnumArrangements["InFront"] = "is diametrically opposite to";
})(EnumArrangements || (EnumArrangements = {}));
;
const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let strings = [];
const getStrings = () => {
  const consonants = "QRSTVWXZ";
  const vowels = "AEIOU";
  if (strings.length === 0) {
    for (const c1 of consonants) {
      for (const v1 of vowels) {
        for (const c2 of consonants) {
          strings.push(c1 + v1 + c2);
        }
      }
    }
  }
  return strings;
};
let emojis = [];
const getEmojis = () => {
  if (emojis.length > 0) {
    return emojis;
  }
  const emojiRanges = [{
    start: 0x1F600,
    end: 0x1F64F
  }, {
    start: 0x1F300,
    end: 0x1F5FF
  } // Misc Symbols and Pictographs
  // { start: 0x1F680, end: 0x1F6FF }, // Transport and Map Symbols
  // { start: 0x1F700, end: 0x1F77F }, // Alchemical Symbols
  // { start: 0x2600,  end: 0x26FF },  // Miscellaneous Symbols
  ];

  for (const range of emojiRanges) {
    for (let codePoint = range.start; codePoint <= range.end; codePoint++) {
      emojis.push(String.fromCodePoint(codePoint));
    }
  }
  return emojis;
};
getEmojis();
const NOUNS = ["Acrobat", "Afro", "Albatross", "Algae", "Alligator", "Almond", "Alpaca", "Amber", "Ambulance", "Amethyst", "Amulet", "Andes", "Ankle", "Anklet", "Ant", "Antlers", "Anvil", "Apartment", "Apple", "Apricot", "Aquarium", "Arch", "Architect", "Arena", "Armadillo", "Armchair", "Armor", "Arrow", "Artichoke", "Artist", "Asteroid", "Astronaut", "Athlete", "Atom", "Attic", "Aubergine", "Aunt", "Avocado", "Baboon", "Baby", "Back", "Backpack", "Badge", "Badger", "Bag", "Bagel", "Bakery", "Baklava", "Balcony", "Bald", "Ball", "Ballerina", "Balloon", "Bamboo", "Banana", "Bandage", "Bandana", "Banjo", "Bank", "Banner", "Bar", "Barbecue", "Barbell", "Barbie", "Barge", "Barley", "Barn", "Barracuda", "Barrel", "Baseball", "Basement", "Basin", "Basket", "Basketball", "Bass", "Bassoon", "Bat", "Bathrobe", "Bathroom", "Bathtub", "Bayonet", "Beach", "Bead", "Beanbag", "Beanie", "Beans", "Beanstalk", "Bear", "Beard", "Beast", "Beaver", "Bed", "Bedbug", "Bedroom", "Beehive", "Beer", "Beet", "Beetle", "Bell", "Belt", "Bench", "Beret", "Bermudas", "Berry", "Bicycle", "Bigfoot", "Bike", "Bikini", "Bill", "Binoculars", "Birch", "Bird", "Birdcage", "Biscotti", "Biscuit", "Bison", "Black", "Blackberry", "Blackboard", "Blade", "Blazer", "Blender", "Blimp", "Blind", "Block", "Blouse", "Blowfish", "Blueberry", "Blush", "Boa", "Board", "Boardwalk", "Boat", "Bobcat", "Bobsled", "Body", "Bog", "Boiler", "Bolt", "Bomb", "Bonbon", "Bones", "Bonsai", "Book", "Bookcase", "Bookend", "Booklet", "Bookstore", "Boombox", "Booster", "Booth", "Boots", "Booty", "Boulevard", "Bow", "Bowling", "Box", "Boxer", "Boy", "Brace", "Bracelet", "Brain", "Brake", "Branch", "Brandy", "Brass", "Brassiere", "Brave", "Brazier", "Bread", "Breakfast", "Brick", "Bridal", "Bridge", "Briefcase", "Broadway", "Broccoli", "Broker", "Broom", "Broth", "Brother", "Brunette", "Brush", "Bubble", "Bucket", "Buckles", "Bud", "Buffalo", "Buffet", "Builder", "Bulb", "Bulldozer", "Bullet", "Bumper", "Bun", "Buoy", "Burger", "Burrito", "Bus", "Bush", "Butcher", "Butler", "Butter", "Buttercup", "Button", "Buttons", "Cab", "Cabbage", "Cabin", "Cabinet", "Cable", "Cacao", "Cactus", "Cadet", "Cafe", "Cage", "Cake", "Calculator", "Calendar", "Calf", "Caliber", "Call", "Camcorder", "Camel", "Camera", "Camp", "Campfire", "Can", "Canal", "Candle", "Candy", "Cane", "Cannoli", "Canoe", "Canon", "Canopy", "Canvas", "Canyon", "Cap", "Cape", "Cappuccino", "Captain", "Car", "Carbon", "Card", "Cardboard", "Cardigan", "Cargo", "Carp", "Carpenter", "Carpet", "Carriage", "Carrot", "Cart", "Cartoon", "Cartridge", "Cascade", "Case", "Cash", "Cashier", "Casino", "Casket", "Cast", "Castle", "Cat", "Catalog", "Catcher", "Caterpillar", "Cauldron", "Cave", "Caviar", "Ceiling", "Cell", "Cellar", "Cello", "Cement", "Cemetery", "Center", "Ceramic", "Cereal", "Certificate", "Chain", "Chair", "Chalk", "Chamber", "Chameleon", "Champagne", "Championship", "Chandelier", "Changer", "Channel", "Chapel", "Charger", "Chariot", "Chateau", "Check", "Checkbook", "Cheek", "Cheeks", "Cheer", "Cheese", "Cheetah", "Chef", "Cherry", "Chest", "Chestnut", "Chick", "Chicken", "Child", "Children", "Chili", "Chimney", "Chin", "China", "Chip", "Chips", "Chisel", "Chocolate", "Choir", "Choker", "Chop", "Chopper", "Chord", "Christmas", "Chrome", "Chuckle", "Church", "Cider", "Cigar", "Cinema", "Circle", "Circus", "Citadel", "Citizen", "City", "Clam", "Clamp", "Clap", "Clarinet", "Class", "Classroom", "Claw", "Clay", "Cleaner", "Clearing", "Clerk", "Click", "Client", "Cliff", "Climber", "Clip", "Clock", "Closet", "Cloth", "Clothes", "Cloud", "Club", "Coach", "Coal", "Coast", "Coat", "Cobalt", "Cobra", "Cockpit", "Cocktail", "Coconut", "Coffee", "Coil", "Coin", "Collar", "Collection", "College", "Colonel", "Colony", "Column", "Comb", "Comedy", "Commander", "Commission", "Computer", "Concert", "Condor", "Cone", "Confetti", "Container", "Contest", "Continent", "Cook", "Cooker", "Cookie", "Cookware", "Cooler", "Copper", "Copy", "Coral", "Cord", "Cork", "Corn", "Corner", "Corral", "Costume", "Cottage", "Cotton", "Couch", "Cougar", "Cousin", "Cow", "Cowboy", "Crab", "Crack", "Cracker", "Crane", "Crate", "Crater", "Cravat", "Crayon", "Creature", "Creme", "Crest", "Crib", "Cricket", "Crisp", "Critter", "Crocodile", "Croissant", "Cross", "Crossbow", "Crow", "Crown", "Crucible", "Crumb", "Crust", "Crystal", "Cucumber", "Cuff", "Cup", "Cupcake", "Currency", "Curtain", "Cushion", "Cymbal", "Daffodil", "Dagger", "Dahlia", "Daisy", "Dam", "Dancer", "Dandelion", "Dart", "Date", "Dates", "Daughter", "Dealer", "Deck", "Decoder", "Decoy", "Deer", "Demon", "Den", "Denim", "Dentist", "Deodorant", "Deputy", "Desert", "Designer", "Desk", "Dessert", "Detective", "Devil", "Diamond", "Diaper", "Diary", "Dice", "Dictator", "Digger", "Dime", "Diner", "Dinghy", "Dinosaur", "Diploma", "Diplomat", "Director", "Dirt", "Disco", "Dish", "Disk", "Diver", "Diving", "Djinn", "Dock", "Doctor", "Doe", "Dog", "Doll", "Dollar", "Dolphin", "Donkey", "Donor", "Door", "Doorknob", "Doorstep", "Dorm", "Dot", "Dough", "Dove", "Dragon", "Dragonfly", "Drain", "Drape", "Drawer", "Dress", "Dresser", "Drill", "Drink", "Driver", "Driveway", "Drone", "Drop", "Drug", "Drum", "Drummer", "Duck", "Duct", "Duel", "Dumbbell", "Dump", "Dune", "Dynamite", "Eagle", "Ear", "Earlobe", "Earn", "Earrings", "Ears", "Eclipse", "Eel", "Egg", "Eggplant", "Elbow", "Elder", "Elephant", "Elevator", "Elf", "Elk", "Ellipse", "Escort", "Eye", "Eyebrow", "Eyelid", "Factory", "Fairy", "Fan", "Fang", "Farm", "Farmer", "Fat", "Father", "Faucet", "Fax", "Feast", "Feed", "Fence", "Ferry", "Field", "Fig", "Fight", "Figure", "Film", "Finger", "Fire", "Firearm", "Fireplace", "Firework", "Firm", "Fish", "Fisherman", "Fist", "Flag", "Flame", "Flamingo", "Flannel", "Flash", "Flat", "Flea", "Fleet", "Flock", "Floor", "Florist", "Flour", "Flower", "Flute", "Fly", "Foam", "Fog", "Foil", "Fondue", "Food", "Foot", "Football", "Footprint", "Ford", "Forest", "Fork", "Fortress", "Fossil", "Fountain", "Fox", "Fracture", "France", "Freeze", "Fridge", "Frog", "Front", "Frost", "Fruit", "Fry", "Fuel", "Fur", "Furniture", "Galaxy", "Gander", "Gang", "Garage", "Garb", "Garden", "Garland", "Garlic", "Garment", "Gas", "Gasket", "Gate", "Gateway", "Gauge", "Gear", "Gecko", "Gel", "Gem", "Geranium", "Gesture", "Ghost", "Giant", "Gift", "Ginger", "Giraffe", "Girl", "Glass", "Glasses", "Glen", "Gloves", "Glue", "Gnat", "Goat", "Gold", "Goldfish", "Golf", "Gondola", "Gong", "Goose", "Gopher", "Gorilla", "Gothic", "Governor", "Graffiti", "Grains", "Granite", "Grape", "Grapes", "Graph", "Grass", "Grasshopper", "Gravy", "Grease", "Great", "Green", "Greenhouse", "Grid", "Grin", "Grocery", "Guitar", "Gull", "Gum", "Gun", "Gym", "Gymnast", "Hair", "Haircut", "Ham", "Hamburger", "Hammer", "Hand", "Handbag", "Handle", "Hangar", "Hanger", "Harbor", "Harpoon", "Hat", "Hatch", "Hatchet", "Hawk", "Hay", "Haze", "Head", "Headband", "Headlight", "Headline", "Headphone", "Headquarters", "Hearse", "Heart", "Heater", "Heels", "Helicopter", "Helmet", "Hen", "Herb", "Herbs", "Herring", "Hide", "Highway", "Hike", "Hill", "Hinge", "Hippopotamus", "Hit", "Hive", "Hockey", "Hog", "Hole", "Home", "Honey", "Hood", "Hoof", "Hook", "Horn", "Horse", "Hose", "Hospital", "Hostel", "Hostess", "Hot", "Hotel", "Hour", "Housing", "Howl", "Hub", "Huddle", "Hull", "Human", "Hummingbird", "Hump", "Hurricane", "Hut", "Hydrant", "Ice", "Iceberg", "Icecream", "Iguana", "Impala", "Inbox", "India", "Indigo", "Infant", "Injection", "Ink", "Insect", "Inspector", "Interpreter", "Invoice", "Iris", "Iron", "Island", "Jacket", "Jackpot", "Jade", "Jaguar", "Jail", "Jam", "Jar", "Jasmine", "Jaw", "Jazz", "Jeans", "Jeep", "Jelly", "Jellyfish", "Jet", "Jewel", "Jewelry", "Jockey", "Jog", "Journal", "Jug", "Juggler", "Juice", "Juicer", "Jump", "Jumper", "Jungle", "Kale", "Kangaroo", "Kayak", "Keel", "Kelp", "Kettle", "Key", "Keyboard", "Kick", "Kid", "Kidney", "King", "Kiss", "Kitchen", "Kite", "Kitten", "Kiwi", "Knee", "Knife", "Knight", "Knob", "Knot", "Koala", "Ladder", "Lady", "Ladybug", "Lake", "Lamb", "Lamp", "Lantern", "Laptop", "Laser", "Laundry", "Lava", "Lavender", "Lawn", "Lawyer", "Lead", "Leaf", "League", "Leash", "Leather", "Leave", "Leaves", "Ledge", "Leech", "Leg", "Legging", "Leggings", "Lemon", "Lemonade", "Lens", "Leopard", "Letter", "Lever", "Library", "Lid", "Light", "Lighthouse", "Lightning", "Lilac", "Lily", "Lime", "Liner", "Lion", "Lip", "Lips", "Litter", "Lizard", "Llama", "Loaf", "Lobster", "Lock", "Locomotive", "Lodge", "Lollipop", "Luggage", "Lunchbox", "Lung", "Lynx", "Lyre", "Lyric", "Machine", "Magician", "Magnet", "Magnolia", "Mail", "Mailbox", "Makeup", "Man", "Mango", "Manhole", "Mansion", "Map", "Maple", "Marble", "Mars", "Martian", "Mask", "Matrix", "Mattress", "Mature", "Meadow", "Meal", "Measure", "Meat", "Mechanic", "Medal", "Medicine", "Melon", "Menu", "Mercury", "Meteor", "Meter", "Microphone", "Microscope", "Microwave", "Mile", "Milk", "Mill", "Miller", "Miss", "Mist", "Mister", "Mistress", "Mitt", "Mitten", "Mixer", "Mobile", "Mock", "Mole", "Molecule", "Money", "Monopoly", "Monument", "Moon", "Moose", "Mop", "Mosaic", "Mosque", "Mosquito", "Moss", "Mother", "Motor", "Motorcycle", "Mountain", "Mouse", "Moustache", "Mouth", "Movie", "Mud", "Mug", "Mulch", "Muscle", "Museum", "Mushroom", "Musician", "Nail", "Napkin", "Nautilus", "Navy", "Neck", "Necklace", "Needle", "Nest", "Newspaper", "Night", "Ninja", "Noodles", "North", "Nose", "Notebook", "Nun", "Nurse", "Nut", "Nylon", "Oar", "Oat", "Oboe", "Ocean", "Octopus", "Oil", "Olive", "Omelet", "Onion", "Orange", "Orchid", "Organ", "Ornament", "Ostrich", "Otter", "Oval", "Oven", "Owl", "Ox", "Oyster", "Pad", "Pail", "Paint", "Painter", "Palace", "Palette", "Palm", "Pan", "Pancake", "Panda", "Panel", "Pansy", "Panther", "Pants", "Parachute", "Parfume", "Park", "Parrot", "Passport", "Pasta", "Paste", "Pastor", "Pastry", "Paw", "Pawn", "Peacock", "Peanut", "Pear", "Peasant", "Pedal", "Pedestrian", "Pediatrician", "Peel", "Pen", "Pencil", "Pendant", "Penguin", "Penny", "Pepper", "Pest", "Pet", "Pharmacist", "Pharmacy", "Phone", "Photo", "Piano", "Pickle", "Pie", "Pier", "Pig", "Pigeon", "Pigment", "Pike", "Pilgrim", "Pill", "Pillar", "Pillow", "Pin", "Pineapple", "Pink", "Pipe", "Pirate", "Pitcher", "Pizza", "Plan", "Plane", "Plant", "Plasma", "Plastic", "Plate", "Plates", "Plow", "Plumber", "Plume", "Pocket", "Poker", "Police", "Policeman", "Polish", "Politician", "Polo", "Pond", "Pony", "Pool", "Pop", "Popcorn", "Pope", "Poppy", "Porch", "Pork", "Post", "Postman", "Pot", "Potato", "Pottery", "Pouch", "Pound", "Powder", "Prairie", "Pregnancy", "Pretzel", "Prey", "Price", "Priest", "Print", "Printer", "Prism", "Prison", "Produce", "Projection", "Promenade", "Propeller", "Protein", "Pub", "Puddle", "Puff", "Pulley", "Pump", "Pumpkin", "Punch", "Pupil", "Puppet", "Puppy", "Purple", "Purse", "Push", "Puzzle", "Pyramid", "Python", "Quartz", "Quiz", "Rabbit", "Raccoon", "Radar", "Radiator", "Radio", "Rag", "Rail", "Railroad", "Rain", "Rainbow", "Ram", "Ranch", "Receiver", "Recipe", "Red", "Reed", "Referee", "Refrigerator", "Relic", "Resort", "Restaurant", "Ribbon", "Ribs", "Rice", "Rider", "Rifle", "Ring", "Rink", "Road", "Robot", "Rock", "Rocket", "Rod", "Roller", "Roof", "Room", "Root", "Rope", "Rose", "Rot", "Rowboat", "Rubber", "Rug", "Rugby", "Ruins", "Ruler", "Rust", "Sack", "Sacred", "Saddle", "Saffron", "Sailboat", "Sailor", "Salad", "Salmon", "Salon", "Salt", "Sandal", "Sandals", "Sandcastle", "Sandwich", "Sapphire", "Satellite", "Satin", "Sauce", "Saucer", "Savage", "Saw", "Saxophone", "Scale", "Scanner", "Scarecrow", "Scarf", "School", "Scissors", "Scooter", "Screen", "Screw", "Sculptor", "Sculpture", "Seal", "Seat", "Seed", "Shack", "Shampoo", "Shark", "Shed", "Sheep", "Sheet", "Shelf", "Shell", "Shelter", "Shield", "Ship", "Shirt", "Shoe", "Shoes", "Shop", "Shorts", "Shower", "Shrimp", "Sick", "Sidewalk", "Silk", "Silver", "Singer", "Sink", "Skate", "Skater", "Skeleton", "Ski", "Skin", "Skirt", "Skull", "Skunk", "Sky", "Skyscraper", "Sleep", "Slice", "Slide", "Slipper", "Slippers", "Slug", "Smoke", "Snack", "Snake", "Sneaker", "Sneeze", "Sniff", "Snow", "Snowball", "Snowboard", "Snowflake", "Snowman", "Soap", "Soccer", "Sock", "Socks", "Soda", "Sofa", "Soil", "Soldier", "Son", "Sorbet", "Soup", "Spade", "Spaghetti", "Spare", "Sparrow", "Speaker", "Spear", "Spider", "Spiral", "Spirit", "Spit", "Splash", "Split", "Sponge", "Spoon", "Spray", "Spring", "Sprinkler", "Squad", "Square", "Squat", "Squirrel", "Stain", "Stair", "Stamp", "Star", "Station", "Stereo", "Stick", "Sticker", "Stitch", "Stomach", "Stove", "Strap", "Straw", "Strawberry", "Stream", "Street", "Strobe", "Submarine", "Subway", "Succulent", "Sugar", "Suit", "Suitcase", "Sulfur", "Sun", "Sundae", "Sunflower", "Sunglasses", "Supermarket", "Supernova", "Surfboard", "Surgeon", "Sushi", "Swamp", "Swan", "Swarm", "Sweater", "Sweet", "Swim", "Swimmer", "Sword", "Table", "Tablet", "Taco", "Tail", "Tailor", "Tangerine", "Tank", "Tanker", "Tap", "Tape", "Target", "Tattoo", "Tavern", "Taxi", "Tea", "Teacher", "Tear", "Teddy", "Teeth", "Telephone", "Telescope", "Television", "Temple", "Tennis", "Terrarium", "Textbook", "Theater", "Thermometer", "Thermos", "Thief", "Thigh", "Thorn", "Throne", "Throttle", "Thunder", "Tiger", "Tile", "Timer", "Tin", "Tire", "Toad", "Toast", "Toaster", "Tobacco", "Toe", "Toes", "Toilet", "Tomato", "Tomb", "Tongue", "Tool", "Tooth", "Tortilla", "Tortoise", "Towel", "Tower", "Town", "Toy", "Tractor", "Trader", "Tram", "Trampoline", "Trap", "Tray", "Treasure", "Tree", "Triangle", "Tribe", "Tricycle", "Trolley", "Troop", "Trophy", "Trousers", "Trout", "Truck", "Truffle", "Trumpet", "Trunk", "Tube", "Tulip", "Tuna", "Tunnel", "Turban", "Turbine", "Turkey", "Turtle", "Tusk", "Twine", "Umbrella", "Underwear", "Unicorn", "Uniform", "Vaccine", "Vacuum", "Valentine", "Van", "Vanilla", "Vase", "Vault", "Vegetable", "Vehicle", "Vessel", "Villa", "Vinegar", "Vinyl", "Violet", "Violin", "Violinist", "Viper", "Volcano", "Vortex", "Vulture", "Wafer", "Waffle", "Wagon", "Waiter", "Wallet", "Walnut", "Wardrobe", "Warrior", "Wasabi", "Waste", "Watch", "Water", "Waterfall", "Wax", "Weapon", "Weasel", "Wedding", "Whale", "Wheat", "Wheel", "Whip", "White", "Wick", "Widow", "Wife", "Willow", "Window", "Wing", "Winter", "Witch", "Wobble", "Wolf", "Woman", "Wood", "Woodpecker", "Wool", "Worm", "Wrench", "Wrestler", "Writer", "Xylophone", "Yacht", "Yam", "Yoga", "Yogurt", "Yolk", "Zebra", "Zen", "Zero", "Zip", "Zipper", "Zoo"];

/***/ }),

/***/ 8266:
/*!*************************************************************!*\
  !*** ./src/app/syllogimous/constants/settings.constants.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ENABLED_FLAGS": () => (/* binding */ DEFAULT_ENABLED_FLAGS),
/* harmony export */   "EnumQuestionGroup": () => (/* binding */ EnumQuestionGroup),
/* harmony export */   "QUESTION_TYPE_SETTING_PARAMS": () => (/* binding */ QUESTION_TYPE_SETTING_PARAMS)
/* harmony export */ });
/* harmony import */ var _question_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.constants */ 6189);

var EnumQuestionGroup;
(function (EnumQuestionGroup) {
  EnumQuestionGroup["Comparison"] = "Comparison";
  EnumQuestionGroup["Direction"] = "Direction";
  EnumQuestionGroup["Arrangement"] = "Arrangement";
})(EnumQuestionGroup || (EnumQuestionGroup = {}));
const QUESTION_TYPE_SETTING_PARAMS = {
  [_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Distinction]: {
    enabled: true,
    minNumOfPremises: 2,
    maxNumOfPremises: 20,
    basic: true
  },
  [_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.ComparisonNumerical]: {
    enabled: true,
    minNumOfPremises: 2,
    maxNumOfPremises: 20,
    basic: true,
    group: EnumQuestionGroup.Comparison
  },
  [_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.ComparisonChronological]: {
    enabled: true,
    minNumOfPremises: 2,
    maxNumOfPremises: 20,
    basic: true,
    group: EnumQuestionGroup.Comparison
  },
  [_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Syllogism]: {
    enabled: true,
    minNumOfPremises: 2,
    maxNumOfPremises: 20,
    basic: true
  },
  [_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.LinearArrangement]: {
    enabled: true,
    minNumOfPremises: 2,
    maxNumOfPremises: 20,
    basic: true,
    group: EnumQuestionGroup.Arrangement
  },
  [_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.CircularArrangement]: {
    enabled: true,
    minNumOfPremises: 2,
    maxNumOfPremises: 20,
    basic: true,
    group: EnumQuestionGroup.Arrangement
  },
  [_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Direction]: {
    enabled: true,
    minNumOfPremises: 2,
    maxNumOfPremises: 20,
    basic: true,
    group: EnumQuestionGroup.Direction
  },
  [_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Direction3DSpatial]: {
    enabled: true,
    minNumOfPremises: 2,
    maxNumOfPremises: 20,
    basic: true,
    group: EnumQuestionGroup.Direction
  },
  [_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Direction3DTemporal]: {
    enabled: true,
    minNumOfPremises: 2,
    maxNumOfPremises: 20,
    basic: true,
    group: EnumQuestionGroup.Direction
  },
  [_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.GraphMatching]: {
    enabled: true,
    minNumOfPremises: 2,
    maxNumOfPremises: 20,
    basic: false
  },
  [_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Analogy]: {
    enabled: true,
    minNumOfPremises: 3,
    maxNumOfPremises: 20,
    basic: false
  },
  [_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Binary]: {
    enabled: true,
    minNumOfPremises: 4,
    maxNumOfPremises: 20,
    basic: false
  }
};
const DEFAULT_ENABLED_FLAGS = {
  useEmojis: false,
  meaningfulWords: true,
  meta: true,
  negation: true,
  binary: {
    and: true,
    nand: true,
    or: true,
    nor: true,
    xor: true,
    xnor: true
  }
};

/***/ }),

/***/ 4338:
/*!**************************************************************!*\
  !*** ./src/app/syllogimous/constants/syllogism.constants.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FORMS": () => (/* binding */ FORMS),
/* harmony export */   "SYL_IMMEDIATE_INFERENCES": () => (/* binding */ SYL_IMMEDIATE_INFERENCES),
/* harmony export */   "SYL_KINDS": () => (/* binding */ SYL_KINDS),
/* harmony export */   "SYL_TRUE_CONCLUSIONS": () => (/* binding */ SYL_TRUE_CONCLUSIONS),
/* harmony export */   "SYL_TRUE_CONCLUSIONS_KEYS": () => (/* binding */ SYL_TRUE_CONCLUSIONS_KEYS),
/* harmony export */   "VALID_RULES": () => (/* binding */ VALID_RULES)
/* harmony export */ });
const VALID_RULES = ["0001", "1011", "0221", "1231", "0021", "1031", "0112", "1012", "1232", "0332", "0132", "1032", "0223", "2023", "3033", "1233", "0023", "1033", "0114", "2024", "1234", "0134", "1034", "0024"];
const FORMS = [['All <span class="subject">$</span> is <span class="subject">$</span>', 'No <span class="subject">$</span> is <span class="subject">$</span>', 'Some <span class="subject">$</span> is <span class="subject">$</span>', 'Some <span class="subject">$</span> is not <span class="subject">$</span>'], ['<span class="is-negated">No</span> <span class="subject">$</span> is <span class="subject">$</span>', '<span class="is-negated">All</span> <span class="subject">$</span> is <span class="subject">$</span>', 'Some <span class="subject">$</span> <span class="is-negated">is not</span> <span class="subject">$</span>', 'Some <span class="subject">$</span> <span class="is-negated">is</span> <span class="subject">$</span>']];
const SYL_KINDS = ["all", "no", "some", "some_not"];
/** Immediate inferences (1 premise) without existential import */
const SYL_IMMEDIATE_INFERENCES = [{
  kind: "no",
  conclKind: "no",
  swap: true
}, {
  kind: "some",
  conclKind: "some",
  swap: true
}];
/** Syllogistic table: "kind1,kind2,figure" -> valid kind3 list */
const SYL_TRUE_CONCLUSIONS = {
  // Figure 1: M-P, S-M => S-P
  "all,all,1": ["all", "some"],
  "no,all,1": ["no", "some_not"],
  "all,some,1": ["some"],
  "no,some,1": ["some_not"],
  // Figure 2: P-M, S-M => S-P
  "all,no,2": ["no", "some_not"],
  "no,all,2": ["no", "some_not"],
  "all,some_not,2": ["some_not"],
  "no,some,2": ["some_not"],
  // Figure 3: M-P, M-S => S-P
  "all,all,3": ["some"],
  "some,all,3": ["some"],
  "all,some,3": ["some"],
  "no,all,3": ["some_not"],
  "some_not,all,3": ["some_not"],
  "no,some,3": ["some_not"],
  // Figure 4: P-M, M-S => S-P
  "all,no,4": ["no", "some_not"],
  "all,all,4": ["some"],
  "some,all,4": ["some"],
  "no,all,4": ["some_not"],
  "no,some,4": ["some_not"]
};
const SYL_TRUE_CONCLUSIONS_KEYS = Object.keys(SYL_TRUE_CONCLUSIONS);

/***/ }),

/***/ 2631:
/*!*******************************************************!*\
  !*** ./src/app/syllogimous/models/question.models.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Question": () => (/* binding */ Question)
/* harmony export */ });
class Question {
  constructor(type) {
    this.isValid = false;
    this.premises = [];
    this.conclusion = "";
    this.createdAt = new Date().getTime();
    this.answeredAt = new Date().getTime();
    this.negations = 0;
    this.metaRelations = 0;
    this.timerTypeOnAnswer = "0";
    this.userScore = 0;
    this.playgroundMode = false;
    // Technical fields
    this.rule = "";
    this.bucket = [];
    this.buckets = [];
    this.coords = [];
    this.coords3D = [];
    this.graphPremises = [];
    this.graphConclusion = [];
    this.type = type;
  }
}

/***/ }),

/***/ 5003:
/*!*******************************************************!*\
  !*** ./src/app/syllogimous/models/settings.models.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionSettings": () => (/* binding */ QuestionSettings),
/* harmony export */   "Settings": () => (/* binding */ Settings),
/* harmony export */   "areSettingsInvalid": () => (/* binding */ areSettingsInvalid),
/* harmony export */   "canGenerateQuestion": () => (/* binding */ canGenerateQuestion)
/* harmony export */ });
/* harmony import */ var src_app_utils_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/json */ 4037);
/* harmony import */ var _constants_question_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/question.constants */ 6189);
/* harmony import */ var _constants_settings_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/settings.constants */ 8266);
/* harmony import */ var _utils_question_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/question.utils */ 8251);




const getNumOfEnabledQuestions = (settings, basicQuestionFilter) => {
  return Object.values(settings.question).filter(qs => qs.basic === basicQuestionFilter).reduce((a, c) => a + (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_3__.b2n)(c.enabled), 0);
};
const getNumOfEnabledOperators = settings => {
  return Object.values(settings.enabled.binary).reduce((a, c) => a + (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_3__.b2n)(c), 0);
};
function canGenerateQuestion(questionType, numOfPremises, settings) {
  const enoughPremises = numOfPremises >= settings.question[questionType].minNumOfPremises;
  if (settings.question[questionType].basic || questionType === _constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType.GraphMatching) {
    return enoughPremises;
  }
  return enoughPremises && getNumOfEnabledQuestions(settings, true) >= 2;
}
function areSettingsInvalid(settings) {
  const numOfEnabledBasicQuestions = getNumOfEnabledQuestions(settings, true);
  const numOfEnabledQuestions = numOfEnabledBasicQuestions + getNumOfEnabledQuestions(settings, false);
  const numOfEnabledOperators = getNumOfEnabledOperators(settings);
  const isAnalogyEnabled = settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType.Analogy].enabled;
  const isBinaryEnabled = settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType.Binary].enabled;
  if (numOfEnabledQuestions < 1) {
    return "You need at least one question type";
  }
  if ((isAnalogyEnabled || isBinaryEnabled) && numOfEnabledBasicQuestions < 2) {
    return "Analogy/binary type of questions need at least two other basic question types";
  }
  if (isBinaryEnabled && numOfEnabledOperators < 2) {
    return "Binary needs at least two operators";
  }
  return null;
}
class QuestionSettings {
  constructor(params) {
    this.minNumOfPremises = params.minNumOfPremises;
    this.maxNumOfPremises = params.maxNumOfPremises;
    this.basic = params.basic;
    this.group = params.group;
    // Some props are immutable because they are user for validation
    this.freezeProp("minNumOfPremises");
    this.freezeProp("maxNumOfPremises");
    this.freezeProp("basic");
    this.freezeProp("group");
    this.enabled = params.enabled;
    this.setNumOfPremises(params.numOfPremises || params.minNumOfPremises);
  }
  freezeProp(prop) {
    Object.defineProperty(this, prop, {
      configurable: false,
      writable: false
    });
  }
  setNumOfPremises(numOfPremises) {
    this.numOfPremises = this.clampNumOfPremises(numOfPremises);
  }
  getNumOfPremises() {
    return this.numOfPremises;
  }
  clampNumOfPremises(numOfPremises) {
    return Math.max(this.minNumOfPremises, Math.min(this.maxNumOfPremises, numOfPremises));
  }
}
class Settings {
  constructor(settings) {
    this.configSettings = settings;
    this.enabled = (0,src_app_utils_json__WEBPACK_IMPORTED_MODULE_0__.jsonCopy)(_constants_settings_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ENABLED_FLAGS);
    this.enabled = {
      ...this.enabled,
      ...settings?.enabled
    };
    this.initQuestionSettings(_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType.Distinction);
    this.initQuestionSettings(_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType.ComparisonNumerical);
    this.initQuestionSettings(_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType.ComparisonChronological);
    this.initQuestionSettings(_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType.Syllogism);
    this.initQuestionSettings(_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType.LinearArrangement);
    this.initQuestionSettings(_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType.CircularArrangement);
    this.initQuestionSettings(_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType.Direction);
    this.initQuestionSettings(_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType.Direction3DSpatial);
    this.initQuestionSettings(_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType.Direction3DTemporal);
    this.initQuestionSettings(_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType.GraphMatching);
    this.initQuestionSettings(_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType.Analogy);
    this.initQuestionSettings(_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType.Binary);
  }
  initQuestionSettings(type) {
    if (!this.question) {
      this.question = {};
    }
    this.question[type] = new QuestionSettings(
    // @ts-ignore
    this.configSettings?.question[type] || _constants_settings_constants__WEBPACK_IMPORTED_MODULE_2__.QUESTION_TYPE_SETTING_PARAMS[type]);
  }
  setEnable(prop, value) {
    this.enabled[prop] = value;
    return this;
  }
  setQuestionSettings(type, enabled, numOfPremises) {
    this.question[type].enabled = enabled;
    this.question[type].setNumOfPremises(numOfPremises);
    return this;
  }
}

/***/ }),

/***/ 9871:
/*!*******************************************************************************************!*\
  !*** ./src/app/syllogimous/pages/settings/game-mode-choose/game-mode-choose.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameModeChooseComponent": () => (/* binding */ GameModeChooseComponent)
/* harmony export */ });
/* harmony import */ var C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/local-storage.constants */ 6376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);




class GameModeChooseComponent {
  constructor() {}
  ngAfterViewInit() {
    const gameMode = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_1__.LS_GAME_MODE) || '0';
    document.querySelector(`#mode-choice-${gameMode}`).checked = true;
  }
  setMode(gameMode) {
    return (0,C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_1__.LS_GAME_MODE, gameMode);
    })();
  }
  static {
    this.ɵfac = function GameModeChooseComponent_Factory(t) {
      return new (t || GameModeChooseComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: GameModeChooseComponent,
      selectors: [["app-game-mode-choose"]],
      decls: 13,
      vars: 0,
      consts: [[1, "game-mode-choices"], [1, "game-mode-choice"], ["type", "radio", "id", "mode-choice-0", "name", "mode-kind", 3, "click"], ["for", "mode-choice-0", "ngbTooltip", "View all premises on the screen simultaneously"], ["type", "radio", "id", "mode-choice-1", "name", "mode-kind", 3, "click"], ["for", "mode-choice-1", "ngbTooltip", "View one premise at a time in a carousel format"], ["type", "radio", "id", "mode-choice-2", "name", "mode-kind", 3, "click"], ["for", "mode-choice-2", "ngbTooltip", "View one premise at a time in a carousel format without going back"]],
      template: function GameModeChooseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GameModeChooseComponent_Template_input_click_2_listener() {
            return ctx.setMode("0");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "View all premises");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1)(6, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GameModeChooseComponent_Template_input_click_6_listener() {
            return ctx.setMode("1");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Carousel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1)(10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GameModeChooseComponent_Template_input_click_10_listener() {
            return ctx.setMode("2");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Carousel (no back)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip],
      styles: ["[_nghost-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.game-mode-choices[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    justify-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.game-mode-choice[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n    display: flex;\r\n    gap: 0.25rem;\r\n}\r\n\r\n.game-mode-choice[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .game-mode-choices[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n        gap: 0.5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvcGFnZXMvc2V0dGluZ3MvZ2FtZS1tb2RlLWNob29zZS9nYW1lLW1vZGUtY2hvb3NlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxxQkFBcUI7SUFDckIsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO1FBQzFCLFdBQVc7SUFDZjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5nYW1lLW1vZGUtY2hvaWNlcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmdhbWUtbW9kZS1jaG9pY2Uge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5nYW1lLW1vZGUtY2hvaWNlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZ2FtZS1tb2RlLWNob2ljZXMge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3135:
/*!***************************************************************************************************!*\
  !*** ./src/app/syllogimous/pages/settings/modal-timer-settings/modal-timer-settings.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LS_CUSTOM_TIMERS_KEY": () => (/* binding */ LS_CUSTOM_TIMERS_KEY),
/* harmony export */   "ModalTimerSettingsComponent": () => (/* binding */ ModalTimerSettingsComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var src_app_syllogimous_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/syllogimous/constants/question.constants */ 6189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _shared_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form/dynamic-form.component */ 1224);





const LS_CUSTOM_TIMERS_KEY = "SYL_CUSTOM_TIMERS";
class ModalTimerSettingsComponent {
  constructor(activeModal) {
    this.activeModal = activeModal;
    this.fields = [];
    this.formData = {};
    this.load();
    for (const type of Object.values(src_app_syllogimous_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType)) {
      this.fields.push({
        field: type,
        label: type,
        type: "range",
        value: this.formData[type] || 90,
        min: 15,
        max: 240,
        step: 5
      });
    }
  }
  load() {
    this.formData = JSON.parse(localStorage.getItem(LS_CUSTOM_TIMERS_KEY) || "{}");
  }
  save() {
    localStorage.setItem(LS_CUSTOM_TIMERS_KEY, JSON.stringify(this.formData));
    this.activeModal.close("Closed");
  }
  static {
    this.ɵfac = function ModalTimerSettingsComponent_Factory(t) {
      return new (t || ModalTimerSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ModalTimerSettingsComponent,
      selectors: [["app-modal-timer-settings"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 11,
      vars: 1,
      consts: [[1, "modal-body", "text-center"], [1, "my-4", "text-start", 2, "font-size", "1.15rem"], [1, "timers-overflow"], [3, "fields", "formValueChanged"], [1, "d-flex", "gap-3", "justify-content-center"], [1, "btn", "btn-outline-secondary", 2, "width", "100px", 3, "click"], [1, "btn", "btn-primary", 2, "width", "100px", 3, "click"]],
      template: function ModalTimerSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Timer Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "app-dynamic-form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("formValueChanged", function ModalTimerSettingsComponent_Template_app_dynamic_form_formValueChanged_5_listener($event) {
            return ctx.formData = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalTimerSettingsComponent_Template_button_click_7_listener() {
            return ctx.activeModal.dismiss();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalTimerSettingsComponent_Template_button_click_9_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Save");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fields", ctx.fields);
        }
      },
      dependencies: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _shared_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__.DynamicFormComponent],
      styles: [".timers-overflow[_ngcontent-%COMP%] {\r\n    max-height: 450px;\r\n    overflow-y: auto;\r\n    padding: 2.5% 20% 2.5% 2.5%;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvcGFnZXMvc2V0dGluZ3MvbW9kYWwtdGltZXItc2V0dGluZ3MvbW9kYWwtdGltZXItc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWVycy1vdmVyZmxvdyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0NTBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyLjUlIDIwJSAyLjUlIDIuNSU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6708:
/*!******************************************************************!*\
  !*** ./src/app/syllogimous/pages/settings/settings.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent),
/* harmony export */   "loadColorBlindnessMode": () => (/* binding */ loadColorBlindnessMode)
/* harmony export */ });
/* harmony import */ var _constants_game_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/game.constants */ 6904);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/progress-and-performance.service */ 2740);
/* harmony import */ var _constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/local-storage.constants */ 6376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/game.service */ 6513);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/card/card.component */ 8640);
/* harmony import */ var _timer_choose_timer_choose_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timer-choose/timer-choose.component */ 1532);
/* harmony import */ var _game_mode_choose_game_mode_choose_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-mode-choose/game-mode-choose.component */ 9871);












const loadColorBlindnessMode = () => {
  const blindnessModeColor = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_2__.LS_COLOR_BLINDNESS_MODE);
  if (blindnessModeColor) {
    const [text, value] = blindnessModeColor.split(";");
    console.log("Loaded color blindness mode:", {
      text,
      value
    });
    document.documentElement.style.setProperty('--negated-color', value);
  }
};
class SettingsComponent {
  constructor(router, game, progressAndPerformanceService) {
    this.router = router;
    this.game = game;
    this.progressAndPerformanceService = progressAndPerformanceService;
    this.Math = Math;
    this.EnumScreens = _constants_game_constants__WEBPACK_IMPORTED_MODULE_0__.EnumScreens;
    this.dailyProgressMinutes = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(_services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_DAILY_GOAL);
    this.weeklyProgressMinutes = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(_services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_WEEKLY_GOAL);
    this.trainingUnitLength = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(_services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_TRAINING_UNIT_LENGTH);
    this.premisesUpThreshold = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(_services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_PREMISES_UP_THRESHOLD);
    this.premisesDownThreshold = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(_services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_PREMISES_DOWN_THRESHOLD);
    this.colorBlindnessChoices = [{
      text: "None",
      value: "rgb(128, 0, 0)"
    }, {
      text: "Protanopia",
      value: "rgb(73, 71, 0)"
    }, {
      text: "Deuteranopia",
      value: "rgb(80, 90, 0)"
    }, {
      text: "Tritanopia",
      value: "rgb(122, 0, 0)"
    }, {
      text: "Achromatopsia",
      value: "rgb(38, 38, 38)"
    }];
    this.colorBlindnessMode = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.colorBlindnessChoices[0].value, {
      nonNullable: true
    });
    // Playtime stuff     
    const daily = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_2__.LS_DAILY_GOAL);
    this.dailyProgressMinutes.setValue(Number(daily) || _services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_DAILY_GOAL);
    this.dailyProgressMinutes.valueChanges.subscribe(v => localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_2__.LS_DAILY_GOAL, String(v)));
    const weekly = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_2__.LS_WEEKLY_GOAL);
    this.weeklyProgressMinutes.setValue(Number(weekly) || _services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_WEEKLY_GOAL);
    this.weeklyProgressMinutes.valueChanges.subscribe(v => localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_2__.LS_WEEKLY_GOAL, String(v)));
    // Training unit stuff
    const {
      trainingUnitLength,
      premisesUpThreshold,
      premisesDownThreshold
    } = this.progressAndPerformanceService.getTrainingUnitSettings();
    this.trainingUnitLength.setValue(trainingUnitLength);
    this.trainingUnitLength.valueChanges.subscribe(v => localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_2__.LS_TRAINING_UNIT_LENGTH, String(v)));
    this.premisesUpThreshold.setValue(premisesUpThreshold);
    this.premisesUpThreshold.valueChanges.subscribe(v => localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_2__.LS_PREMISES_UP_THRESHOLD, String(v)));
    this.premisesDownThreshold.setValue(premisesDownThreshold);
    this.premisesDownThreshold.valueChanges.subscribe(v => localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_2__.LS_PREMISES_DOWN_THRESHOLD, String(v)));
    const colorBlindnessMode = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_2__.LS_COLOR_BLINDNESS_MODE);
    if (colorBlindnessMode) {
      const [text, value] = colorBlindnessMode.split(";");
      this.colorBlindnessMode.setValue(value);
    }
    this.colorBlindnessMode.valueChanges.subscribe(value => {
      const text = this.colorBlindnessChoices.find(choice => choice.value === value)?.text;
      const cmpKey = text + ";" + value;
      localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_2__.LS_COLOR_BLINDNESS_MODE, cmpKey);
      loadColorBlindnessMode();
    });
  }
  static {
    this.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_3__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__.ProgressAndPerformanceService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      decls: 45,
      vars: 17,
      consts: [["body", "", 1, "d-grid", "py-3", "px-md-3", 2, "gap", "2rem"], [1, "card", "shadow-sm"], [1, "card-header", "py-2", "small"], [1, "card-body"], [1, "d-grid", 2, "gap", "0.75rem"], ["type", "select", "name", "colorBlindnessMode", "label", "Color blindness mode", "placeholder", "Color blindness mode", 3, "ngControl", "options"], [1, "text-muted", "small"], [1, "is-negated"], ["type", "range", "min", "15", "max", "60", "step", "5", "name", "dailyProgressMinutes", 3, "label", "ngControl", "noParenthesisValue"], ["type", "range", "min", "60", "max", "240", "step", "5", "name", "weeklyProgressMinutes", 3, "label", "ngControl", "noParenthesisValue"], [1, "d-grid", 2, "gap", "1rem"], ["type", "range", "min", "10", "max", "30", "step", "5", "name", "trainingUnitLength", 3, "label", "ngControl", "noParenthesisValue"], ["type", "range", "min", "0", "max", "0.9", "step", "0.1", "helper", "Percentage of incorrect answers at which premises will decrease", "name", "premisesDownThreshold", 3, "label", "ngControl", "noParenthesisValue"], ["type", "range", "min", "0.1", "max", "1", "step", "0.1", "helper", "Percentage of correct answers required for premises to increase", "name", "premisesUpThreshold", 3, "label", "ngControl", "noParenthesisValue"], ["footer", "", 1, "playcard-toolbar"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-play-fill"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-card")(1, "div", 0)(2, "div", 1)(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Game mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "app-game-mode-choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 1)(8, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Timer mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "app-timer-choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 1)(13, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Accessibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 3)(16, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "app-input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "This changes the color of the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "inversion cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 1)(23, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Playtime settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 3)(26, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "app-input", 8)(28, "app-input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 1)(30, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Performance tracker");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 3)(33, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "app-input", 11)(35, "app-input", 12)(36, "app-input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 14)(38, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_38_listener() {
            return ctx.router.navigate([ctx.EnumScreens.Start]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](39, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, " Start ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div")(42, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_42_listener() {
            return ctx.game.playArcadeMode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, " Play ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngControl", ctx.colorBlindnessMode)("options", ctx.colorBlindnessChoices);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", "Daily goal: " + ctx.dailyProgressMinutes.value + " minutes")("ngControl", ctx.dailyProgressMinutes)("noParenthesisValue", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", "Weekly goal: " + ctx.weeklyProgressMinutes.value + " minutes")("ngControl", ctx.weeklyProgressMinutes)("noParenthesisValue", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", "Sample size: " + ctx.trainingUnitLength.value + " questions")("ngControl", ctx.trainingUnitLength)("noParenthesisValue", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", "Premises decrease threshold: " + ctx.Math.round((ctx.premisesDownThreshold.value || 0) * 100) + "%")("ngControl", ctx.premisesDownThreshold)("noParenthesisValue", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", "Premises increase threshold: " + ctx.Math.round((ctx.premisesUpThreshold.value || 0) * 100) + "%")("ngControl", ctx.premisesUpThreshold)("noParenthesisValue", true);
        }
      },
      dependencies: [_shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__.CardComponent, _timer_choose_timer_choose_component__WEBPACK_IMPORTED_MODULE_6__.TimerChooseComponent, _game_mode_choose_game_mode_choose_component__WEBPACK_IMPORTED_MODULE_7__.GameModeChooseComponent],
      styles: ["@media (max-width: 768px) {\r\n    [_nghost-%COMP%]     input[type=\"range\"] {\r\n        max-width: 80%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgaW5wdXRbdHlwZT1cInJhbmdlXCJdIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1532:
/*!***********************************************************************************!*\
  !*** ./src/app/syllogimous/pages/settings/timer-choose/timer-choose.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerChooseComponent": () => (/* binding */ TimerChooseComponent)
/* harmony export */ });
/* harmony import */ var C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/local-storage.constants */ 6376);
/* harmony import */ var _modal_timer_settings_modal_timer_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-timer-settings/modal-timer-settings.component */ 3135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





class TimerChooseComponent {
  constructor(modalService) {
    this.modalService = modalService;
  }
  ngAfterViewInit() {
    const timerType = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_1__.LS_TIMER) || '0';
    document.querySelector(`#timer-choice-${timerType}`).checked = true;
  }
  setTimer(timerType) {
    var _this = this;
    return (0,C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_1__.LS_TIMER, timerType);
      if (timerType === "1") {
        const modalRef = _this.modalService.open(_modal_timer_settings_modal_timer_settings_component__WEBPACK_IMPORTED_MODULE_2__.ModalTimerSettingsComponent, {
          centered: true
        });
        yield modalRef.result;
      }
    })();
  }
  static {
    this.ɵfac = function TimerChooseComponent_Factory(t) {
      return new (t || TimerChooseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TimerChooseComponent,
      selectors: [["app-timer-choose"]],
      decls: 13,
      vars: 0,
      consts: [[1, "timer-choices"], [1, "timer-choice"], ["type", "radio", "id", "timer-choice-2", "name", "timer-kind", 3, "click"], ["for", "timer-choice-2", "ngbTooltip", "Timer adapts as you play"], ["type", "radio", "id", "timer-choice-1", "name", "timer-kind", 3, "click"], ["for", "timer-choice-1", "ngbTooltip", "Choose your own timers"], ["type", "radio", "id", "timer-choice-0", "name", "timer-kind", 3, "click"], ["for", "timer-choice-0", "ngbTooltip", "No timer at all"]],
      template: function TimerChooseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TimerChooseComponent_Template_input_click_2_listener() {
            return ctx.setTimer("2");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Adaptive timer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1)(6, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TimerChooseComponent_Template_input_click_6_listener() {
            return ctx.setTimer("1");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Custom timer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 1)(10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TimerChooseComponent_Template_input_click_10_listener() {
            return ctx.setTimer("0");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Timer disabled");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTooltip],
      styles: ["[_nghost-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.timer-choices[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    justify-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.timer-choice[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n    display: flex;\r\n    gap: 0.25rem;\r\n}\r\n\r\n.timer-choice[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .timer-choices[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n        gap: 0.5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvcGFnZXMvc2V0dGluZ3MvdGltZXItY2hvb3NlL3RpbWVyLWNob29zZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtRQUMxQixXQUFXO0lBQ2Y7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udGltZXItY2hvaWNlcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnRpbWVyLWNob2ljZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC4yNXJlbTtcclxufVxyXG5cclxuLnRpbWVyLWNob2ljZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRpbWVyLWNob2ljZXMge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6002:
/*!************************************************************!*\
  !*** ./src/app/syllogimous/services/game-timer.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameTimerService": () => (/* binding */ GameTimerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GameTimerService {
  constructor() {
    this.remainingSeconds = 0;
    this.running = false;
  }
  start(seconds) {
    return new Promise((resolve, reject) => {
      if (this.running) {
        return reject("GameTimerService: Already running");
      }
      if (seconds == null) {
        seconds = this.remainingSeconds;
      }
      if (seconds <= 0) {
        return reject("GameTimerService: Invalid seconds");
      }
      this.remainingSeconds = seconds;
      this.running = true;
      this.interval = setInterval(() => {
        if (this.remainingSeconds > 0) {
          this.remainingSeconds--;
          if (this.remainingSeconds === 0) {
            this.stop();
            return resolve();
          }
        }
      }, 1000);
    });
  }
  pause() {
    if (!this.running) {
      return console.warn("GameTimerService: Not running");
    }
    this.running = false;
    clearInterval(this.interval);
  }
  stop() {
    this.pause();
    this.remainingSeconds = 0;
  }
  static {
    this.ɵfac = function GameTimerService_Factory(t) {
      return new (t || GameTimerService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GameTimerService,
      factory: GameTimerService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6513:
/*!******************************************************!*\
  !*** ./src/app/syllogimous/services/game.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameService": () => (/* binding */ GameService)
/* harmony export */ });
/* harmony import */ var C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _models_question_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/question.models */ 2631);
/* harmony import */ var _utils_question_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/question.utils */ 8251);
/* harmony import */ var _utils_syllogism_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/syllogism.utils */ 9879);
/* harmony import */ var _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/question.constants */ 6189);
/* harmony import */ var _constants_game_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/game.constants */ 6904);
/* harmony import */ var _constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/local-storage.constants */ 6376);
/* harmony import */ var _components_modal_level_change_modal_level_change_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modal-level-change/modal-level-change.component */ 8487);
/* harmony import */ var _models_settings_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/settings.models */ 5003);
/* harmony import */ var src_app_utils_uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utils/uuid */ 3488);
/* harmony import */ var _constants_settings_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants/settings.constants */ 8266);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/logger */ 3476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _progress_and_performance_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./progress-and-performance.service */ 2740);
/* harmony import */ var _game_timer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game-timer.service */ 6002);


















class GameService {
  get score() {
    return this._score;
  }
  set score(value) {
    this._score = value;
    localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_6__.LS_SCORE, JSON.stringify(value));
  }
  get tier() {
    for (const tier of Object.values(_constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.EnumTiers)) {
      const range = _constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.TIER_SCORE_RANGES[tier];
      if (this.score >= range.minScore && this.score <= range.maxScore) {
        return tier;
      }
    }
    return _constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.EnumTiers.Adept;
  }
  get settings() {
    return this.playgroundSettings || this.getSettingsFromTier(this.tier);
  }
  get questions() {
    let questions = [];
    const history = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_6__.LS_HISTORY);
    if (history) {
      questions = JSON.parse(history).slice(0, 1000);
    }
    return questions;
  }
  constructor(modalService, router, progressAndPerformanceService, gameTimerService) {
    this.modalService = modalService;
    this.router = router;
    this.progressAndPerformanceService = progressAndPerformanceService;
    this.gameTimerService = gameTimerService;
    this._score = 0;
    this.history = [];
    this.logger = new _utils_logger__WEBPACK_IMPORTED_MODULE_11__.Logger("info", true);
    this.loadScore();
    window.syllogimous = this;
    // Create a first dummy question to avoid null pointer etc...
    const firstDummyQuestion = this.createSyllogism(2);
    firstDummyQuestion.conclusion = "!";
    this.question = firstDummyQuestion;
  }
  loadScore() {
    const lsScore = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_6__.LS_SCORE);
    if (lsScore) {
      this.score = JSON.parse(lsScore);
    }
  }
  pushIntoHistory(question) {
    localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_6__.LS_HISTORY, JSON.stringify([question, ...this.questions]));
  }
  /** Given an EnumTiers value construct a Settings instance */
  getSettingsFromTier(tier) {
    const tierIdx = _constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.ORDERED_TIERS.findIndex(_tier => _tier === tier);
    const settings = new _models_settings_models__WEBPACK_IMPORTED_MODULE_8__.Settings();
    settings.setEnable("negation", false);
    settings.setEnable("meta", false);
    for (let i = 0; i < _constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.TIERS_MATRIX[tierIdx].length; i++) {
      const questionType = _constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.ORDERED_QUESTION_TYPES[i];
      const isActive = !!_constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.TIERS_MATRIX[tierIdx][i];
      const numOfPremises = this.progressAndPerformanceService.getTrainingUnit(questionType).premises;
      settings.setQuestionSettings(questionType, isActive, numOfPremises);
    }
    if (tierIdx > 5) {
      settings.setEnable("negation", true);
    }
    if (tierIdx > 6) {
      settings.setEnable("meta", true);
    }
    return settings;
  }
  /** Given question type and number of premises, returns a question creator function */
  getCreateFn(questionType, numOfPremises) {
    return {
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Distinction]: () => this.createDistinction(numOfPremises),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.ComparisonNumerical]: () => this.createComparison(numOfPremises, _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.ComparisonNumerical),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.ComparisonChronological]: () => this.createComparison(numOfPremises, _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.ComparisonChronological),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Syllogism]: () => this.createSyllogism(numOfPremises),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.LinearArrangement]: () => this.createArrangement(numOfPremises, _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.LinearArrangement),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.CircularArrangement]: () => this.createArrangement(numOfPremises, _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.CircularArrangement),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Direction]: () => this.createDirection(numOfPremises),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Direction3DSpatial]: () => this.createDirection3D(numOfPremises, _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Direction3DSpatial),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Direction3DTemporal]: () => this.createDirection3D(numOfPremises, _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Direction3DTemporal),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.GraphMatching]: () => this.createGraphMatching(numOfPremises),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Analogy]: () => this.createAnalogy(numOfPremises),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Binary]: () => this.createBinary(numOfPremises)
    }[questionType];
  }
  /** Return a random question based on the current settings */
  createRandomQuestion(numOfPremises, basic) {
    const settings = this.settings;
    this.logger.info("Settings", settings);
    this.logger.info("Training units", this.progressAndPerformanceService.getAllTrainingUnits());
    const typeSettingTuples = Object.entries(settings.question);
    const getQuestionGroup = qg => typeSettingTuples.filter(([qt, qs]) => qs.group == qg);
    const groupsOfQuestions = [getQuestionGroup(undefined), getQuestionGroup(_constants_settings_constants__WEBPACK_IMPORTED_MODULE_10__.EnumQuestionGroup.Comparison), getQuestionGroup(_constants_settings_constants__WEBPACK_IMPORTED_MODULE_10__.EnumQuestionGroup.Direction), getQuestionGroup(_constants_settings_constants__WEBPACK_IMPORTED_MODULE_10__.EnumQuestionGroup.Arrangement)];
    const choices = [];
    // Pick one question from each group so that the distribution is uniform
    // The "isUndefinedGroup" predicate is used to push all ungrouped question into choices
    for (const grouped of groupsOfQuestions) {
      const isUndefinedGroup = grouped === groupsOfQuestions[0];
      const groupChoices = isUndefinedGroup ? choices : [];
      for (const [qt, qs] of grouped) {
        const shouldIncludeQuestion = basic == undefined ? true : qs.basic === basic;
        if (qs.enabled && shouldIncludeQuestion) {
          groupChoices.push(this.getCreateFn(qt, qs.clampNumOfPremises(numOfPremises || qs.getNumOfPremises())));
        }
      }
      if (!isUndefinedGroup && groupChoices.length) {
        choices.push((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(groupChoices, 1).picked[0]);
      }
    }
    if (!choices.length) {
      this.logger.warn("NO CHOICES AVAILABLE!");
    }
    const randomQuestion = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(choices, 1).picked[0]();
    this.logger.info("Random question", randomQuestion);
    return randomQuestion;
  }
  skipIntro(dontShowAnymore) {
    if (dontShowAnymore) {
      localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_6__.LS_DONT_SHOW + _constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.EnumScreens.Intro, "1");
    }
    this.router.navigate([_constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.EnumScreens.Start]);
  }
  play() {
    this.question = this.createRandomQuestion();
    if (this.playgroundSettings) {
      this.router.navigate([_constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.EnumScreens.Game]);
    } else {
      if (!localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_6__.LS_DONT_SHOW + this.question.type)) {
        this.router.navigate([_constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.EnumScreens.Tutorial, this.question.type]);
      } else {
        this.router.navigate([_constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.EnumScreens.Game]);
      }
    }
  }
  playArcadeMode() {
    this.playgroundSettings = undefined;
    this.play();
  }
  skipTutorial(dontShowAnymore) {
    if (dontShowAnymore) {
      localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_6__.LS_DONT_SHOW + this.question.type, "1");
    }
    this.router.navigate([_constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.EnumScreens.Game]);
  }
  checkQuestion(value) {
    var _this = this;
    return (0,C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.question.userAnswer = value;
      _this.question.answeredAt = Date.now();
      _this.question.timerTypeOnAnswer = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_6__.LS_TIMER) || "0";
      _this.question.playgroundMode = _this.settings === _this.playgroundSettings;
      const type = _this.question.type;
      const isQuestionValid = _this.question.userAnswer === _this.question.isValid;
      // Playground doesn't progress tiers
      if (!_this.question.playgroundMode) {
        if (value == null) {
          _this.progressAndPerformanceService.updateTrainingUnit(type, {
            timeout: 1
          });
        } else if (isQuestionValid) {
          _this.progressAndPerformanceService.updateTrainingUnit(type, {
            right: 1
          });
        } else {
          _this.progressAndPerformanceService.updateTrainingUnit(type, {
            wrong: 1
          });
        }
        const {
          right,
          timeout,
          wrong
        } = _this.progressAndPerformanceService.calcTrainingUnitPercentages(type);
        const {
          trainingUnitLength,
          premisesUpThreshold,
          premisesDownThreshold
        } = _this.progressAndPerformanceService.getTrainingUnitSettings();
        if (right + timeout + wrong >= trainingUnitLength) {
          _this.progressAndPerformanceService.restartTrainingUnit(_this.question.type);
          const {
            premises
          } = _this.progressAndPerformanceService.getTrainingUnit(type);
          const {
            minNumOfPremises,
            maxNumOfPremises
          } = _constants_settings_constants__WEBPACK_IMPORTED_MODULE_10__.QUESTION_TYPE_SETTING_PARAMS[type];
          if ((timeout + wrong) / trainingUnitLength >= premisesDownThreshold) {
            if (premises > minNumOfPremises) {
              _this.gameTimerService.stop();
              const modalRef = _this.modalService.open(_components_modal_level_change_modal_level_change_component__WEBPACK_IMPORTED_MODULE_7__.ModalLevelChangeComponent, {
                centered: true
              });
              modalRef.componentInstance.title = "Number of Premises Decreased";
              modalRef.componentInstance.content = `Your last <b>${trainingUnitLength}</b> answers for<br><b class="modal-level-type">${type}</b><br>have yielded this results:<div class="d-flex flex-row justify-content-center my-3"><span class="p-2"><b>${right}</b> right</span><span class="p-2 border-start border-end"><b>${timeout}</b> timeout</span><span class="p-2"><b>${wrong}</b> wrong</span></div>The number of premises for<br><b class="modal-level-type">${type}</b><br>has <b>decreased</b> to ${premises - 1}.`;
              yield modalRef.result;
            }
            _this.progressAndPerformanceService.updateTrainingUnit(type, {
              premises: -1
            });
          } else if (right / trainingUnitLength >= premisesUpThreshold) {
            if (premises < maxNumOfPremises) {
              _this.gameTimerService.stop();
              const modalRef = _this.modalService.open(_components_modal_level_change_modal_level_change_component__WEBPACK_IMPORTED_MODULE_7__.ModalLevelChangeComponent, {
                centered: true
              });
              modalRef.componentInstance.title = "Number of Premises Increased";
              modalRef.componentInstance.content = `Your last <b>${trainingUnitLength}</b> answers for<br><b class="modal-level-type">${type}</b><br>have yielded this results:<div class="d-flex flex-row justify-content-center my-3"><span class="p-2"><b>${right}</b> right</span><span class="p-2 border-start border-end"><b>${timeout}</b> timeout</span><span class="p-2"><b>${wrong}</b> wrong</span></div>The number of premises for<br><b class="modal-level-type">${type}</b><br>has <b>increased</b> to ${premises + 1}.`;
              yield modalRef.result;
            }
            _this.progressAndPerformanceService.updateTrainingUnit(type, {
              premises: 1
            });
          }
        }
        // Adjust tier based on score
        const currTier = _this.tier;
        let ds = 0;
        if (isQuestionValid) {
          _this.score += _constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.TIER_SCORE_ADJUSTMENTS[_this.tier].increment;
          ds += 1;
        } else {
          _this.score = Math.max(0, _this.score - _constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.TIER_SCORE_ADJUSTMENTS[_this.tier].decrement);
          if (_this.score > 0) {
            ds -= 1;
          }
        }
        _this.question.userScore = _this.score;
        const nextTier = _this.tier;
        // Level up/down
        if (currTier !== nextTier) {
          _this.gameTimerService.stop();
          const modalRef = _this.modalService.open(_components_modal_level_change_modal_level_change_component__WEBPACK_IMPORTED_MODULE_7__.ModalLevelChangeComponent, {
            centered: true
          });
          if (ds > 0) {
            modalRef.componentInstance.title = "Level Up";
            modalRef.componentInstance.content = "Your hard work is paying off.<br>Keep going to unlock more question types and points!";
          } else if (ds < 0) {
            modalRef.componentInstance.title = "Level Down";
            modalRef.componentInstance.content = "Take this as a learning step.<br>Refocus your efforts and you’ll be back on top in no time!";
          }
        }
      }
      _this.pushIntoHistory(_this.question);
      _this.progressAndPerformanceService.setDailyProgress(_this.progressAndPerformanceService.getToday(), _this.question.answeredAt - _this.question.createdAt);
      _this.router.navigate([_constants_game_constants__WEBPACK_IMPORTED_MODULE_5__.EnumScreens.Feedback]);
    })();
  }
  createDistinction(numOfPremises) {
    this.logger.info("createDistinction");
    const type = _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Distinction;
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_8__.canGenerateQuestion)(type, numOfPremises, settings)) {
      throw new Error("Cannot generate.");
    }
    const length = numOfPremises + 1;
    const symbols = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomSymbols)(settings, length);
    const question = new _models_question_models__WEBPACK_IMPORTED_MODULE_1__.Question(type);
    do {
      const rnd = Math.floor(Math.random() * symbols.length);
      const first = symbols.splice(rnd, 1);
      let prev = first;
      let curr = [];
      question.buckets = [[prev], []];
      let prevBucket = 0;
      question.premises = [];
      for (let i = 0; i < length - 1; i++) {
        const rnd = Math.floor(Math.random() * symbols.length);
        curr = symbols.splice(rnd, 1);
        const isSameAs = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
        const relation = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getRelation)(settings, type, isSameAs);
        question.premises.push(`<span class="subject">${prev}</span> is ${relation} <span class="subject">${curr}</span>`);
        if (!isSameAs) {
          prevBucket = (prevBucket + 1) % 2;
        }
        question.buckets[prevBucket].push(curr);
        prev = curr;
      }
      // All same is useless, in that case repeat
      if (!question.buckets[0].length || !question.buckets[1].length) {
        return this.createDistinction(numOfPremises);
      }
      (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.createMetaRelationships)(settings, question, length);
      const isSameAs = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
      const relation = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getRelation)(settings, type, isSameAs);
      question.conclusion = `<span class="subject">${first}</span> is ${relation} <span class="subject">${curr}</span>`;
      question.isValid = isSameAs ? question.buckets[0].includes(curr) : question.buckets[1].includes(curr);
    } while ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.isPremiseLikeConclusion)(question.premises, question.conclusion));
    (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.shuffle)(question.premises);
    return question;
  }
  createComparison(numOfPremises, type) {
    this.logger.info("createComparison:", type);
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_8__.canGenerateQuestion)(type, numOfPremises, settings)) {
      throw new Error("Cannot generate.");
    }
    const length = numOfPremises + 1;
    const question = new _models_question_models__WEBPACK_IMPORTED_MODULE_1__.Question(type);
    do {
      question.bucket = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomSymbols)(settings, length);
      question.premises = [];
      const sign = [-1, 1][Math.floor(Math.random() * 2)];
      let next = "";
      for (let i = 0; i < length - 1; i++) {
        const curr = question.bucket[i];
        next = question.bucket[i + 1];
        const isMoreOrAfter = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
        const [first, last] = sign === 1 === isMoreOrAfter ? [next, curr] : [curr, next];
        const relation = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getRelation)(settings, type, isMoreOrAfter);
        question.premises.push(`<span class="subject">${first}</span> is ${relation} <span class="subject">${last}</span>`);
      }
      (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.createMetaRelationships)(settings, question, length);
      const a = Math.floor(Math.random() * question.bucket.length);
      let b = Math.floor(Math.random() * question.bucket.length);
      while (a === b) {
        b = Math.floor(Math.random() * question.bucket.length);
      }
      const isMoreOrAfter = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
      const relation = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getRelation)(settings, type, isMoreOrAfter);
      question.conclusion = `<span class="subject">${question.bucket[a]}</span> is ${relation} <span class="subject">${question.bucket[b]}</span>`;
      question.isValid = isMoreOrAfter ? sign === 1 && a > b || sign === -1 && a < b : sign === 1 && a < b || sign === -1 && a > b;
    } while ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.isPremiseLikeConclusion)(question.premises, question.conclusion));
    (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.shuffle)(question.premises);
    return question;
  }
  createArrangement(numOfPremises, type) {
    this.logger.info("createArrangement:", type);
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_8__.canGenerateQuestion)(type, numOfPremises, settings)) {
      throw new Error("Cannot generate.");
    }
    const numOfEls = numOfPremises + 1;
    const isLinear = type === _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.LinearArrangement;
    const getWays = isLinear ? _utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getLinearWays : _utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getCircularWays;
    const symbols = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getSymbols)(settings);
    const words = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(symbols, numOfEls).picked;
    const question = new _models_question_models__WEBPACK_IMPORTED_MODULE_1__.Question(type);
    question.instructions = [];
    question.instructions.push(`There are <b>${_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.NUMBER_WORDS[numOfEls] || numOfEls} subjects</b> along a <b>${isLinear ? "linear" : "circular"}</b> path.`);
    const relationshipAlreadyExistent = (a, b) => premises.find(({
      a: pA,
      b: pB
    }) => pA === a && pB === b || pA === b && pB === a);
    let premises = [];
    let subjects = [...words];
    let a = undefined;
    let safe = 1e2;
    while (safe-- && premises.length < numOfEls - 1) {
      let premise = undefined;
      let safe = 1e2;
      while (safe-- && premise == undefined) {
        // Pick A
        a = a || (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(subjects, 1).picked[0];
        this.logger.info("a", a);
        const aid = words.indexOf(a);
        // Pick B
        const b = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(subjects.filter(sub => sub !== a), 1).picked[0];
        this.logger.info("b", b);
        const bid = words.indexOf(b);
        // Pick a way between A and B and check there are no connections already established between A and B
        const [wayDescription, wayData] = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(Object.entries(getWays(aid, bid, numOfEls)), 1).picked[0];
        if (wayData.possible && !relationshipAlreadyExistent(a, b)) {
          premise = {
            a,
            b,
            relationship: {
              description: wayDescription,
              steps: wayData.steps
            },
            metaRelationships: [],
            uid: (0,src_app_utils_uuid__WEBPACK_IMPORTED_MODULE_9__.guid)()
          };
          subjects = subjects.filter(s => s !== a && s !== b);
          a = b;
        }
      }
      if (safe <= 0) {
        throw new Error("MAXIMUM ITERATION COUNT REACHED!");
      }
      premises.push(premise);
    }
    if (safe <= 0) {
      throw new Error("MAXIMUM ITERATION COUNT REACHED!");
    }
    (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.horizontalShuffleArrangement)(premises);
    (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.shuffle)(premises);
    (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.metarelateArrangement)(premises);
    let b = undefined;
    safe = 1e2;
    while (safe-- && b == undefined) {
      const subject = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(words, 1).picked[0];
      if (subject !== a && !relationshipAlreadyExistent(a, subject)) {
        b = subject;
      }
    }
    if (safe <= 0) {
      throw new Error("MAXIMUM ITERATION COUNT REACHED!");
    }
    const [aid, bid] = [words.indexOf(a), words.indexOf(b)];
    const ways = getWays(aid, bid, numOfEls, true);
    this.logger.info("a", a);
    this.logger.info("a", b);
    this.logger.info("ways", ways);
    question.isValid = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
    const conclusions = Object.entries(ways).filter(([description, data]) => data.possible === question.isValid);
    const picked = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(conclusions, 1).picked[0];
    const description = picked[0];
    const steps = picked[1].steps;
    const interpolated = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.interpolateArrangementRelationship)({
      description,
      steps
    }, settings);
    question.conclusion = `<span class="subject">${a}</span> ${interpolated} <span class="subject">${b}</span>`;
    // Next to relationship with 3 elements are useless, in that case regenerate
    if (!isLinear && numOfEls === 3 && interpolated === _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumArrangements.Next) {
      return this.createArrangement(numOfPremises, type);
    }
    question.rule = words.join(", ");
    const metaRelationshipLookupMap = {};
    question.premises = premises.map(({
      a,
      b,
      relationship,
      metaRelationships,
      uid
    }) => {
      if (settings.enabled.meta && (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)() && metaRelationships.length && !metaRelationshipLookupMap[uid]) {
        const premise = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(metaRelationships, 1).picked[0];
        metaRelationshipLookupMap[premise.uid] = true;
        return `<span class="subject">${a}</span> to <span class="subject">${b}</span> has the same relation as <span class="subject">${premise.a}</span> to <span class="subject">${premise.b}</span>`;
      }
      const {
        description,
        steps
      } = relationship;
      const interpolated = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.interpolateArrangementRelationship)({
        description,
        steps
      }, settings);
      return `<span class="subject">${a}</span> ${interpolated} <span class="subject">${b}</span>`;
    });
    return question;
  }
  createDirection(numOfPremises) {
    this.logger.info("createDirection");
    const type = _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Direction;
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_8__.canGenerateQuestion)(type, numOfPremises, settings)) {
      throw new Error("Cannot generate.");
    }
    const numOfEls = numOfPremises + 1;
    const symbols = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getSymbols)(settings);
    const words = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(symbols, numOfEls).picked;
    const question = new _models_question_models__WEBPACK_IMPORTED_MODULE_1__.Question(type);
    const sideSize = 1 + Math.round(Math.sqrt(numOfEls));
    const cardinalOppositeMap = {
      "North": "South",
      "South": "North",
      "East": "West",
      "West": "East"
    };
    // Give random coords to each subject
    const coords = [];
    let pool = [...words];
    while (pool.length) {
      let ri;
      let rj;
      while (ri == null || rj == null || coords.find(([_, x, y]) => ri === x && rj === y)) {
        ri = Math.floor(Math.random() * sideSize);
        rj = Math.floor(Math.random() * sideSize);
      }
      const {
        picked,
        remaining
      } = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(pool, 1);
      coords.push([picked[0], ri, rj]);
      pool = remaining;
    }
    question.coords = coords;
    this.logger.info("Coords", coords);
    // Create pairs of subjects
    let copyOfCoords = [...coords];
    const pairs = [];
    const pairAlreadyEstablished = (a, b) => pairs.find(([x, y]) => x[0] === a && y[0] === b || x[0] === b && y[0] === a);
    for (let i = 0; i < numOfEls - 1; i++) {
      const {
        picked,
        remaining
      } = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(copyOfCoords, 1);
      const subject = i === 0 ? (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(remaining, 1).picked[0] : (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(pairs, 1).picked[0][Math.floor(Math.random() * 2)];
      const a = picked[0][0];
      const b = subject[0];
      if (a === b || pairAlreadyEstablished(a, b)) {
        i--;
        continue;
      }
      pairs.push([picked[0], subject]);
      copyOfCoords = remaining;
    }
    const usedCoords = Object.values(pairs.reduce((a, c) => {
      a[c[0][0]] = c[0];
      a[c[1][0]] = c[1];
      return a;
    }, {}));
    // Add one more pair that will represent the conclusion
    let coorda;
    let coordb;
    let safe = 1e2;
    while (safe-- && (!coorda || !coordb || pairAlreadyEstablished(coorda[0], coordb[0]))) {
      [coorda, coordb] = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(usedCoords, 2).picked;
    }
    if (safe < 1) {
      this.logger.error("MAXIMUM ITERATION COUNT REACHED!");
      return this.createDirection(numOfPremises);
    }
    pairs.push([coorda, coordb]);
    this.logger.info("Pairs", pairs);
    // Calculate cardinals and relationship of each pair
    const premises = [];
    const getRelationship = (cardinals, tweaked = false) => {
      let relationship = "";
      if (!tweaked && cardinals.every(c => c[1] === 1)) {
        relationship = "adjacent and " + cardinals[0][0];
        if (cardinals.length === 2) {
          relationship += "-" + cardinals[1][0];
        }
      } else {
        const numStepsVertical = _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.NUMBER_WORDS[cardinals[0][1]] || cardinals[0][1];
        relationship = numStepsVertical + " step" + (cardinals[0][1] > 1 ? "s" : "") + " " + cardinals[0][0];
        if (cardinals.length === 2) {
          const numStepsHorizontal = _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.NUMBER_WORDS[cardinals[1][1]] || cardinals[1][1];
          relationship += " and " + numStepsHorizontal + " step" + (cardinals[1][1] > 1 ? "s" : "") + " " + cardinals[1][0];
        }
      }
      return relationship;
    };
    for (const pair of pairs) {
      const [subja, subjb] = pair;
      const [a, ax, ay] = subja;
      const [b, bx, by] = subjb;
      const cardinals = [];
      const diffy = ay - by;
      const absdiffy = Math.abs(diffy);
      const diffx = ax - bx;
      const absdiffx = Math.abs(diffx);
      if (diffy > 0) {
        cardinals.push(["North", absdiffy]);
      } else if (diffy < 0) {
        cardinals.push(["South", absdiffy]);
      }
      if (diffx > 0) {
        cardinals.push(["East", absdiffx]);
      } else if (diffx < 0) {
        cardinals.push(["West", absdiffx]);
      }
      premises.push({
        pair,
        cardinals,
        relationship: getRelationship(cardinals),
        uid: (0,src_app_utils_uuid__WEBPACK_IMPORTED_MODULE_9__.guid)()
      });
    }
    this.logger.info("Premises", premises);
    // Sanity check, this fixes a bug with analogy questions
    if (new Set(premises.map(x => x.pair[0][0])).size !== coords.length) {
      this.logger.error("Missing subject in premises");
      return this.createDirection(numOfPremises);
    }
    // Extract the last premise and say it's the conclusion
    // Flip a coin and either keep or tweak the conclusion
    let conclusion = premises.pop();
    let tweaked = false;
    const isValid = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
    if (isValid) {
      this.logger.info("Keep conclusion");
    } else {
      this.logger.info("Tweak conclusion");
      const rndIdx = Math.floor(Math.random() * conclusion.cardinals.length);
      if ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)()) {
        this.logger.info("Add one to one cardinal");
        conclusion.cardinals[rndIdx][1]++;
      } else {
        this.logger.info("One cardinal flipped");
        conclusion.cardinals[rndIdx][0] = cardinalOppositeMap[conclusion.cardinals[rndIdx][0]];
      }
      tweaked = true;
    }
    // Regenerate conclusion relationship
    conclusion.relationship = getRelationship(conclusion.cardinals, tweaked);
    this.logger.info("Conclusion", conclusion);
    const negateRelationship = relationship => {
      return relationship.replaceAll(/(north|south|east|west)/gi, substr => {
        if ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)()) {
          question.negations++;
          return `<span class="is-negated">${cardinalOppositeMap[substr]}</span>`;
        }
        return substr;
      });
    };
    const stringifyProposition = p => {
      const relationship = settings.enabled.negation ? negateRelationship(p.relationship) : p.relationship;
      return `<span class="subject">${p.pair[0][0]}</span> is ${relationship} of <span class="subject">${p.pair[1][0]}</span>`;
    };
    (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.shuffle)(premises);
    question.isValid = isValid;
    question.premises = premises.map(stringifyProposition);
    question.conclusion = stringifyProposition(conclusion);
    question.notes = ["Note that cardinal directions are exact and direct<br>(e.g., \"north\" is not \"north-east\" or \"north-west\")"];
    // TODO: Create meta relationship
    return question;
  }
  createDirection3D(numOfPremises, type) {
    this.logger.info("createDirection3D");
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_8__.canGenerateQuestion)(type, numOfPremises, settings)) {
      throw new Error("Cannot generate.");
    }
    const numOfEls = numOfPremises + 1;
    const symbols = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getSymbols)(settings);
    const words = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(symbols, numOfEls).picked;
    const question = new _models_question_models__WEBPACK_IMPORTED_MODULE_1__.Question(type);
    const isSpatial = type === _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Direction3DSpatial;
    const sideSize = 1 + Math.round(Math.cbrt(numOfEls));
    const trasversalOpposite = {
      "before": "after",
      "after": "before",
      "below": "above",
      "above": "below"
    };
    const cardinalOppositeMap = {
      "North": "South",
      "South": "North",
      "East": "West",
      "West": "East"
    };
    // Give random coords to each subject
    const coords = [];
    const alreadyHasCoords = (ri, rj, rk) => {
      return coords.find(([_, x, y, k]) => ri === x && rj === y && rk === k);
    };
    let pool = [...words];
    while (pool.length) {
      let ri;
      let rj;
      let rt;
      while (ri == null || rj == null || rt == null || alreadyHasCoords(ri, rj, rt)) {
        ri = Math.floor(Math.random() * sideSize);
        rj = Math.floor(Math.random() * sideSize);
        rt = Math.floor(Math.random() * sideSize);
      }
      const {
        picked,
        remaining
      } = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(pool, 1);
      coords.push([picked[0], ri, rj, rt]);
      pool = remaining;
    }
    this.logger.info("All coords", coords);
    // Create pairs of subjects
    let copyOfCoords = [...coords];
    const pairs = [];
    const subjectsAlreadyIncluded = (a, b) => pairs.find(([x, y]) => x[0] === a && y[0] === b || x[0] === b && y[0] === a);
    for (let i = 0; i < numOfEls - 1; i++) {
      const {
        picked,
        remaining
      } = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(copyOfCoords, 1);
      const subject = i === 0 ? (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(remaining, 1).picked[0] : (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(pairs, 1).picked[0][Math.floor(Math.random() * 2)];
      const a = picked[0][0];
      const b = subject[0];
      if (a === b || subjectsAlreadyIncluded(a, b)) {
        i--;
        continue;
      }
      pairs.push([picked[0], subject]);
      copyOfCoords = remaining;
    }
    const usedCoords = Object.values(pairs.reduce((a, c) => {
      a[c[0][0]] = c[0];
      a[c[1][0]] = c[1];
      return a;
    }, {}));
    question.coords3D = usedCoords;
    this.logger.info("Used coords", usedCoords);
    // Add one more pair that will represent the conclusion
    let coorda;
    let coordb;
    let safe = 1e2;
    while (safe-- && (!coorda || !coordb || subjectsAlreadyIncluded(coorda[0], coordb[0]))) {
      [coorda, coordb] = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(usedCoords, 2).picked;
    }
    if (safe < 1) {
      this.logger.error("MAXIMUM ITERATION COUNT REACHED!");
      return this.createDirection3D(numOfPremises, type);
    }
    pairs.push([coorda, coordb]);
    this.logger.info("Pairs", pairs);
    // Calculate relationship of each pair
    const premises = [];
    const getTrasversalRelationship = tdiff => {
      const absdiff = Math.abs(tdiff);
      const s = absdiff > 1 ? "s" : "";
      const n = _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.NUMBER_WORDS[absdiff] || absdiff;
      if (isSpatial) {
        if (tdiff === 0) {
          return "on the same level";
        } else if (tdiff < 0) {
          return `${n} level${s} below`;
        } else {
          return `${n} level${s} above`;
        }
      } else {
        if (tdiff === 0) {
          return "at the same time";
        } else if (tdiff < 0) {
          return `${n} hour${s} before`;
        } else {
          return `${n} hour${s} after`;
        }
      }
    };
    const SAME_CARDINAL_DIRECTION = "in the same cardinal position";
    const getCardinalRelationship = _cardinals => {
      if (_cardinals.every(c => c[1] === 0)) {
        return SAME_CARDINAL_DIRECTION;
      }
      const cardinals = _cardinals.filter(c => c[1] !== 0);
      let relationship = "";
      const numStepsVertical = _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.NUMBER_WORDS[cardinals[0][1]] || cardinals[0][1];
      const s = cardinals[0][1] > 1 ? "s" : "";
      relationship = `${numStepsVertical} step${s} ${cardinals[0][0]}`;
      if (cardinals.length === 2) {
        const numStepsHorizontal = _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.NUMBER_WORDS[cardinals[1][1]] || cardinals[1][1];
        const s = cardinals[1][1] > 1 ? "s" : "";
        relationship += ` and ${numStepsHorizontal} step${s} ${cardinals[1][0]}`;
      }
      return relationship;
    };
    for (const pair of pairs) {
      const [subja, subjb] = pair;
      const [a, ax, ay, at] = subja;
      const [b, bx, by, bt] = subjb;
      const trasversalDifference = at - bt;
      const cardinals = [];
      const diffy = ay - by;
      const absdiffy = Math.abs(diffy);
      const diffx = ax - bx;
      const absdiffx = Math.abs(diffx);
      if (diffy > 0) {
        cardinals.push(["North", absdiffy]);
      } else if (diffy < 0) {
        cardinals.push(["South", absdiffy]);
      } else {
        cardinals.push(["!", 0]);
      }
      if (diffx > 0) {
        cardinals.push(["East", absdiffx]);
      } else if (diffx < 0) {
        cardinals.push(["West", absdiffx]);
      } else {
        cardinals.push(["!", 0]);
      }
      const trasversalRelationship = getTrasversalRelationship(trasversalDifference);
      const cardinalRelationship = getCardinalRelationship(cardinals);
      const connector = cardinalRelationship === SAME_CARDINAL_DIRECTION ? " and " : cardinalRelationship.indexOf(" and ") > -1 ? ", " : " and ";
      const relationship = trasversalRelationship + connector + cardinalRelationship;
      premises.push({
        pair,
        trasversalDifference,
        cardinals,
        relationship,
        uid: (0,src_app_utils_uuid__WEBPACK_IMPORTED_MODULE_9__.guid)()
      });
    }
    this.logger.info("Premises", premises);
    // Extract the last premise and say it's the conclusion
    // Flip a coin and either keep or tweak the conclusion
    let conclusion = premises.pop();
    const isValid = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
    if (isValid) {
      this.logger.info("Keep conclusion");
      // Filter out collinear cardinals
      conclusion.cardinals = conclusion.cardinals.filter(c => c[0] !== "!");
    } else {
      this.logger.info("Tweak conclusion");
      if ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)()) {
        this.logger.info("Invert trasversal difference");
        conclusion.trasversalDifference = conclusion.trasversalDifference * -1;
      }
      // Filter out collinear cardinals and zero cardinals
      conclusion.cardinals = conclusion.cardinals.filter(c => c[0] !== "!" && c[1] !== 0);
      if (!conclusion.cardinals.length) {
        return this.createDirection3D(numOfPremises, type);
      }
      const rndIdx = Math.floor(Math.random() * conclusion.cardinals.length);
      if ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)()) {
        this.logger.info("One cardinal flipped");
        conclusion.cardinals[rndIdx][0] = cardinalOppositeMap[conclusion.cardinals[rndIdx][0]];
      } else {
        this.logger.info("Add one to one cardinal");
        conclusion.cardinals[rndIdx][1]++;
      }
    }
    // Regenerate conclusion relationship
    conclusion.trasversalDifference = conclusion.pair[0][3] - conclusion.pair[1][3];
    const trasversalRelationship = getTrasversalRelationship(conclusion.trasversalDifference);
    const cardinalRelationship = getCardinalRelationship(conclusion.cardinals);
    const connector = cardinalRelationship === SAME_CARDINAL_DIRECTION ? " and " : cardinalRelationship.indexOf(" and ") > -1 ? ", " : " and ";
    conclusion.relationship = trasversalRelationship + connector + cardinalRelationship;
    this.logger.info("Conclusion", conclusion);
    const negateRelationship = relationship => {
      return relationship.replaceAll(/(before|after|below|above)/gi, substr => {
        if ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)()) {
          question.negations++;
          return `<span class="is-negated">${trasversalOpposite[substr]}</span>`;
        }
        return substr;
      }).replaceAll(/(north|south|east|west)/gi, substr => {
        if ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)()) {
          question.negations++;
          return `<span class="is-negated">${cardinalOppositeMap[substr]}</span>`;
        }
        return substr;
      });
    };
    const stringifyProposition = p => {
      const relationship = settings.enabled.negation ? negateRelationship(p.relationship) : p.relationship;
      return `<span class="subject">${p.pair[0][0]}</span> is ${relationship} of <span class="subject">${p.pair[1][0]}</span>`;
    };
    (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.shuffle)(premises);
    question.isValid = isValid;
    question.premises = premises.map(stringifyProposition);
    question.conclusion = stringifyProposition(conclusion);
    question.notes = ["Note that cardinal directions are exact and direct<br>(e.g., \"north\" is not \"north-east\" or \"north-west\")"];
    // TODO: Create meta relationship
    return question;
  }
  createGraphMatching(numOfPremises) {
    this.logger.info("createGraphMatching");
    const type = _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.GraphMatching;
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_8__.canGenerateQuestion)(type, numOfPremises, settings)) {
      throw new Error("Cannot generate.");
    }
    const numOfEls = numOfPremises + 1;
    const symbols = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getSymbols)(settings);
    const words = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(symbols, numOfEls).picked;
    const question = new _models_question_models__WEBPACK_IMPORTED_MODULE_1__.Question(type);
    let edgeList = [];
    const inverseMap = {
      "→": "←",
      "←": "→"
    };
    const _words = [...words];
    const isWordUsed = w => edgeList.reduce((a, c) => (a.add(c[0]), a.add(c[2]), a), new Set()).has(w);
    const notAllUsed = () => _words.some(w => !isWordUsed(w));
    const edgeAlreadyExists = (a, b) => edgeList.some(([_a, _, _b]) => _a === a && _b === b || _a === b && _b === a);
    let safe = 1e3;
    while (safe-- && notAllUsed()) {
      const [a, b] = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(_words, 2).picked;
      if (edgeAlreadyExists(a, b)) {
        continue;
      }
      const newEdge = Math.random() < 0.25 ? [a, "↔", b] : (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)() ? [a, "→", b] : [a, "←", b];
      edgeList.push(newEdge);
      if (_words.length > 2 && (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)()) {
        const subject = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)() ? a : b;
        const foundIdx = _words.indexOf(subject);
        _words.splice(foundIdx, 1);
      }
    }
    if (safe <= 0) {
      throw new Error("MAXIMUM NUMBER OF ITERATIONS REACHED!");
    }
    const edgeDiscrepancyCount = edgeList.length !== numOfPremises;
    const all3ElementsAre2Way = numOfEls === 3 && edgeList.every(([a, rel, b]) => rel === "↔");
    if (edgeDiscrepancyCount || all3ElementsAre2Way) {
      return this.createGraphMatching(numOfPremises);
    }
    const newWords = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(symbols, numOfEls).picked;
    let edgeList2 = edgeList.map(([a, rel, b]) => [newWords[words.indexOf(a)], rel, newWords[words.indexOf(b)]]);
    question.isValid = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
    if (!question.isValid) {
      this.logger.info("Modifying graph in an invalid way");
      while ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.areGraphsIsomorphic)(edgeList, edgeList2)) {
        const {
          picked
        } = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(edgeList2, 1);
        const [a, rel, b] = picked[0];
        if (rel === "→" || rel === "←") {
          if (Math.random() < 0.15) {
            this.logger.info("Swap 1-way for 2-way");
            picked[0][1] = "↔";
          } else if ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)()) {
            this.logger.info("Rotate 1-way direction");
            picked[0][1] = inverseMap[picked[0][1]];
          }
        } else if (Math.random() < 0.15) {
          this.logger.info("Swap 2-way for 1-way");
          picked[0][1] = {
            "true": "→",
            "false": "←"
          }[String((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)())];
        }
        if ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)() && numOfEls > 3) {
          const rndBool = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
          const bool2subject = {
            "true": 0,
            "false": 2
          };
          const subjectPosIdx = bool2subject[String(rndBool)];
          const subjectNegIdx = bool2subject[String(!rndBool)];
          const {
            picked: picked2
          } = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(edgeList2, 1);
          let picked;
          while (!picked || picked === picked2[0][subjectPosIdx] || picked === picked2[0][subjectNegIdx]) {
            picked = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(newWords, 1).picked[0];
          }
          this.logger.info("Change an edge by connecting a/b to a different subject", [picked2[0][subjectPosIdx], picked]);
          picked2[0][subjectPosIdx] = picked;
        }
      }
    }
    const horizontalShuffle = _edgeList => _edgeList.map(([a, rel, b]) => {
      this.logger.info("Before", [a, rel, b]);
      let result;
      if ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)() && (rel === "→" || rel === "←")) {
        result = [b, inverseMap[rel], a];
      } else {
        result = [a, rel, b];
      }
      this.logger.info("After", result);
      return result;
    });
    (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.shuffle)(edgeList);
    edgeList = horizontalShuffle(edgeList);
    question.graphPremises = edgeList;
    this.logger.info("EdgeList", edgeList);
    (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.shuffle)(edgeList2);
    edgeList2 = horizontalShuffle(edgeList2);
    question.graphConclusion = edgeList2;
    this.logger.info("EdgeList2", edgeList2);
    const usedEdges = new Set();
    const readable = (edges, edge, negated = false, meta = false) => {
      const getSubject = subject => `<span class="subject">${subject}</span>`;
      const readMap = {
        "→": "goes to",
        "←": "comes from",
        "↔": "is connected to"
      };
      let relationship = readMap[edge[1]];
      let isMetaRelated = false;
      if (meta) {
        const getEdgeKey = edge => [...edge].join(";");
        const edgeKey = getEdgeKey(edge);
        const pickedEdge = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(edges, 1).picked[0];
        const pickedEdgeKey = getEdgeKey(pickedEdge);
        if (!usedEdges.has(pickedEdgeKey) && edgeKey !== pickedEdgeKey && edge[1] === pickedEdge[1]) {
          usedEdges.add(edgeKey);
          usedEdges.add(pickedEdgeKey);
          if ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)() && edge[1] !== "↔") {
            relationship = `the inverse of ${getSubject(pickedEdge[2])} to ${getSubject(pickedEdge[0])}`;
          } else {
            relationship = `${getSubject(pickedEdge[0])} is to ${getSubject(pickedEdge[2])}`;
          }
          isMetaRelated = true;
          this.logger.info("Metarelated");
          question.metaRelations++;
        }
      } else if (negated && (edge[1] === "→" || edge[1] === "←")) {
        this.logger.info("Negated");
        question.negations++;
        relationship = `<span class="is-negated">${readMap[inverseMap[edge[1]]]}</span>`;
      }
      return isMetaRelated ? `${getSubject(edge[0])} is to ${getSubject(edge[2])} as ${relationship}` : `${getSubject(edge[0])} ${relationship} ${getSubject(edge[2])}`;
    };
    question.premises = edgeList.map((edge, _, edges) => readable(edges, edge, settings.enabled.negation && (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)(), settings.enabled.meta && (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)()));
    question.conclusion = edgeList2.map((edge, _, edges) => readable(edges, edge, settings.enabled.negation && (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)(), settings.enabled.meta && (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)()));
    question.instructions = ["Check isomorphism between premise and conclusion graphs."];
    return question;
  }
  createAnalogy(length) {
    this.logger.info("createAnalogy");
    const topType = _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Analogy;
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_8__.canGenerateQuestion)(topType, length, settings)) {
      throw new Error("Cannot generate.");
    }
    const choiceIndices = [];
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Distinction].enabled) {
      choiceIndices.push(0);
    }
    // Randomly pick one comparison question from the comparison questions enabled
    const comparisonChoices = [];
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.ComparisonNumerical].enabled) {
      comparisonChoices.push(1);
    }
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.ComparisonChronological].enabled) {
      comparisonChoices.push(2);
    }
    if (comparisonChoices.length) {
      choiceIndices.push((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(comparisonChoices, 1).picked[0]);
    }
    // Randomly pick one direction question from the direction questions enabled
    const directionsChoices = [];
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Direction].enabled) {
      directionsChoices.push(3);
    }
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Direction3DSpatial].enabled) {
      directionsChoices.push(4);
    }
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Direction3DTemporal].enabled) {
      directionsChoices.push(5);
    }
    if (directionsChoices.length) {
      choiceIndices.push((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(directionsChoices, 1).picked[0]);
    }
    // Randomly pick one arrangement from enabled arrangements
    const arrangementChoices = [];
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.LinearArrangement].enabled) {
      arrangementChoices.push(6);
    }
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.CircularArrangement].enabled) {
      arrangementChoices.push(7);
    }
    if (arrangementChoices.length) {
      choiceIndices.push((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(arrangementChoices, 1).picked[0]);
    }
    const choiceIndex = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(choiceIndices, 1).picked[0];
    let question = new _models_question_models__WEBPACK_IMPORTED_MODULE_1__.Question(topType);
    let isValidSame;
    let a, b, c, d;
    let indexOfA, indexOfB, indexOfC, indexOfD;
    const flip = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
    switch (choiceIndex) {
      case 0:
        question = this.createDistinction(length);
        question.type = topType;
        question.conclusion = "";
        [a, b, c, d] = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)([...question.buckets[0], ...question.buckets[1]], 4).picked;
        question.conclusion += `<span class="subject">${a}</span> to <span class="subject">${b}</span>`;
        [indexOfA, indexOfB, indexOfC, indexOfD] = [Number(question.buckets[0].indexOf(a) !== -1), Number(question.buckets[0].indexOf(b) !== -1), Number(question.buckets[0].indexOf(c) !== -1), Number(question.buckets[0].indexOf(d) !== -1)];
        isValidSame = indexOfA === indexOfB && indexOfC === indexOfD || indexOfA !== indexOfB && indexOfC !== indexOfD;
        break;
      case 1:
      case 2:
        const type = choiceIndex === 1 ? _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.ComparisonNumerical : _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.ComparisonChronological;
        question = this.createComparison(length, type);
        question.type = topType;
        question.conclusion = "";
        [a, b, c, d] = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(question.bucket, 4).picked;
        question.conclusion += `<span class="subject">${a}</span> to <span class="subject">${b}</span>`;
        [indexOfA, indexOfB] = [question.bucket.indexOf(a), question.bucket.indexOf(b)];
        [indexOfC, indexOfD] = [question.bucket.indexOf(c), question.bucket.indexOf(d)];
        isValidSame = indexOfA > indexOfB && indexOfC > indexOfD || indexOfA < indexOfB && indexOfC < indexOfD;
        break;
      case 3:
        while (flip !== isValidSame) {
          question = this.createDirection(length);
          question.type = topType;
          question.conclusion = "";
          const [coordsa, coordsb, coordsc, coordsd] = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(question.coords, 4).picked;
          [a, b, c, d] = [coordsa[0], coordsb[0], coordsc[0], coordsd[0]];
          question.conclusion += `<span class="subject">${a}</span> to <span class="subject">${b}</span>`;
          const dxatob = coordsa[1] - coordsb[1];
          const dyatob = coordsa[2] - coordsb[2];
          const dxctod = coordsc[1] - coordsd[1];
          const dyctod = coordsc[2] - coordsd[2];
          isValidSame = dxatob === dxctod && dyatob === dyctod;
        }
        break;
      case 4:
      case 5:
        {
          const type = choiceIndex === 4 ? _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Direction3DSpatial : _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Direction3DTemporal;
          while (flip !== isValidSame) {
            question = this.createDirection3D(length, type);
            question.type = topType;
            question.conclusion = "";
            const [coordsa, coordsb, coordsc, coordsd] = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(question.coords3D, 4).picked;
            [a, b, c, d] = [coordsa[0], coordsb[0], coordsc[0], coordsd[0]];
            question.conclusion += `<span class="subject">${a}</span> to <span class="subject">${b}</span>`;
            const dxatob = coordsa[1] - coordsb[1];
            const dyatob = coordsa[2] - coordsb[2];
            const dtatob = coordsa[3] - coordsb[3];
            const dxctod = coordsc[1] - coordsd[1];
            const dyctod = coordsc[2] - coordsd[2];
            const dtctod = coordsc[3] - coordsd[3];
            isValidSame = dxatob === dxctod && dyatob === dyctod && dtatob === dtctod;
          }
          break;
        }
      case 6:
      case 7:
        {
          const type = choiceIndex === 6 ? _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.LinearArrangement : _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.CircularArrangement;
          const isLinear = type === _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.LinearArrangement;
          question = this.createArrangement(length, type);
          question.type = topType;
          question.conclusion = "";
          question.notes = [];
          if (isLinear) {
            question.notes.push("Proximity makes the relationship alike.");
          } else {
            question.notes.push("Proximity and diametrical opposition makes the relationship alike.");
          }
          const subjects = question.rule.split(", ");
          [a, b, c, d] = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(subjects, 4).picked;
          question.conclusion += `<span class="subject">${a}</span> to <span class="subject">${b}</span>`;
          const [idxA, idxB, idxC, idxD] = [subjects.indexOf(a), subjects.indexOf(b), subjects.indexOf(c), subjects.indexOf(d)];
          const getWays = isLinear ? _utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getLinearWays : _utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getCircularWays;
          const waysA2B = getWays(idxA, idxB, length + 1, true, true);
          const waysC2D = getWays(idxC, idxD, length + 1, true, true);
          this.logger.info("Ways A2B", waysA2B);
          this.logger.info("Ways C2D", waysC2D);
          isValidSame = false;
          for (const key in waysA2B) {
            if (waysA2B[key].possible && waysC2D[key].possible && waysA2B[key].steps === waysC2D[key].steps) {
              isValidSame = true;
            }
          }
          this.logger.info('Is a valid "same" relationship?', isValidSame);
          break;
        }
    }
    if (isValidSame === undefined) {
      throw new Error("Shouldn't be here...");
    }
    const isSameRelationship = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
    question.isValid = isSameRelationship ? isValidSame : !isValidSame;
    if (settings.enabled.negation && (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)()) {
      question.negations++;
      question.conclusion += `<div class="analogy-conclusion is-negated">is ${isSameRelationship ? 'unlike' : 'alike'}</div>`;
    } else {
      question.conclusion += `<div class="analogy-conclusion">is ${isSameRelationship ? 'alike' : 'unlike'}</div>`;
    }
    question.conclusion += `<span class="subject">${c}</span> to <span class="subject">${d}</span>`;
    return question;
  }
  createBinary(numOfPremises) {
    this.logger.info("createBinary");
    const topType = _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Binary;
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_8__.canGenerateQuestion)(topType, numOfPremises, settings)) {
      throw new Error("Cannot generate.");
    }
    const operands = [];
    const operandNames = [];
    const operandTemplates = [];
    if (settings.enabled.binary.and) {
      operands.push("a&&b");
      operandNames.push("AND");
      operandTemplates.push('$a <div class="is-connector">and</div> $b');
    }
    if (settings.enabled.binary.nand) {
      operands.push("!(a&&b)");
      operandNames.push("NAND");
      operandTemplates.push('$a <div class="is-connector">and</div> $b <div class="is-connector">are not both true</div>');
    }
    if (settings.enabled.binary.or) {
      operands.push("a||b");
      operandNames.push("OR");
      operandTemplates.push('$a <div class="is-connector">or</div> $b');
    }
    if (settings.enabled.binary.nor) {
      operands.push("!(a||b)");
      operandNames.push("NOR");
      operandTemplates.push('$a <div class="is-connector">and</div> $b <div class="is-connector">are both false</div>');
    }
    if (settings.enabled.binary.xor) {
      operands.push("!(a&&b)&&(a||b)");
      operandNames.push("XOR");
      operandTemplates.push('$a <div class="is-connector">differs from</div> $b');
    }
    if (settings.enabled.binary.xnor) {
      operands.push("!(!(a&&b)&&(a||b))");
      operandNames.push("XNOR");
      operandTemplates.push('$a <div class="is-connector">is equal to</div> $b');
    }
    const question = new _models_question_models__WEBPACK_IMPORTED_MODULE_1__.Question(topType);
    const flip = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
    const operandIndex = Math.floor(Math.random() * operands.length);
    const operand = operands[operandIndex];
    let safe = 1e2;
    do {
      const a = this.createRandomQuestion(Math.floor(numOfPremises / 2), true);
      const b = this.createRandomQuestion(Math.ceil(numOfPremises / 2), true);
      const choices = [a, b];
      question.instructions = [(0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.fixBinaryInstructions)(a), (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.fixBinaryInstructions)(b)].filter(instr => !!instr);
      question.premises = [...choices[0].premises, ...choices[1].premises];
      (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.shuffle)(question.premises);
      question.conclusion = operandTemplates[operandIndex].replace("$a", Array.isArray(choices[0].conclusion) ? choices[0].conclusion[0] : choices[0].conclusion).replace("$b", Array.isArray(choices[1].conclusion) ? choices[1].conclusion[0] : choices[1].conclusion);
      question.isValid = eval(operand.replaceAll("a", String(choices[0].isValid)).replaceAll("b", String(choices[1].isValid)));
    } while (safe-- && flip !== question.isValid);
    if (safe <= 0) {
      throw new Error("MAXIMUM NUMBER OF ITERATIONS REACHED!");
    }
    return question;
  }
  createSyllogismOld(numOfPremises) {
    this.logger.info("createSyllogism");
    const type = _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Syllogism;
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_8__.canGenerateQuestion)(type, numOfPremises, settings)) {
      throw new Error("Cannot generate.");
    }
    const length = numOfPremises + 1;
    const question = new _models_question_models__WEBPACK_IMPORTED_MODULE_1__.Question(type);
    question.isValid = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
    do {
      question.rule = question.isValid ? (0,_utils_syllogism_utils__WEBPACK_IMPORTED_MODULE_3__.getRandomRuleValid)() : (0,_utils_syllogism_utils__WEBPACK_IMPORTED_MODULE_3__.getRandomRuleInvalid)();
      question.bucket = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomSymbols)(settings, length);
      question.premises = [];
      [question.premises[0], question.premises[1], question.conclusion] = (0,_utils_syllogism_utils__WEBPACK_IMPORTED_MODULE_3__.getSyllogism)(settings, question.bucket[0], question.bucket[1], question.bucket[2], question.isValid ? (0,_utils_syllogism_utils__WEBPACK_IMPORTED_MODULE_3__.getRandomRuleValid)() : (0,_utils_syllogism_utils__WEBPACK_IMPORTED_MODULE_3__.getRandomRuleInvalid)());
    } while ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.isPremiseLikeConclusion)(question.premises, question.conclusion));
    for (let i = 3; i < length; i++) {
      const rnd = Math.floor(Math.random() * (i - 1));
      const flip = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
      const [p, m] = flip ? [question.bucket[i], question.bucket[rnd]] : [question.bucket[rnd], question.bucket[i]];
      question.premises.push((0,_utils_syllogism_utils__WEBPACK_IMPORTED_MODULE_3__.getSyllogism)(settings, "#####", p, m, (0,_utils_syllogism_utils__WEBPACK_IMPORTED_MODULE_3__.getRandomRuleInvalid)())[0]);
    }
    (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.shuffle)(question.premises);
    return question;
  }
  createSyllogism(numOfPremises) {
    this.logger.info("createSyllogism");
    const type = _constants_question_constants__WEBPACK_IMPORTED_MODULE_4__.EnumQuestionType.Syllogism;
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_8__.canGenerateQuestion)(type, numOfPremises, settings)) {
      throw new Error("Cannot generate.");
    }
    // @ts-ignore
    if (false) {}
    const question = new _models_question_models__WEBPACK_IMPORTED_MODULE_1__.Question(type);
    const minDepth = Math.min(2, numOfPremises);
    const maxDepth = numOfPremises;
    const chainDepth = Math.floor(Math.random() * (maxDepth - minDepth + 1)) + minDepth;
    const chainTermsNeeded = chainDepth + 1;
    const numDistractors = numOfPremises - chainDepth;
    const minExtra = Math.ceil(numDistractors / chainTermsNeeded);
    const maxExtra = numDistractors;
    const extra = Math.floor(Math.random() * (maxExtra - minExtra + 1)) + minExtra;
    const poolSize = chainTermsNeeded + extra;
    const termPool = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomSymbols)(settings, poolSize);
    const wantTrue = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
    const {
      premises,
      conclusion,
      conclusionIsTrue
    } = (0,_utils_syllogism_utils__WEBPACK_IMPORTED_MODULE_3__.generatePolysyllogism)({
      nPremises: numOfPremises,
      chainDepth,
      termPool,
      trueConclusion: wantTrue
    });
    const negated = settings.enabled.negation && (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
    question.bucket = termPool;
    question.isValid = conclusionIsTrue;
    question.premises = premises.map(p => (0,_utils_syllogism_utils__WEBPACK_IMPORTED_MODULE_3__.formatSylPremise)(p, negated));
    question.conclusion = (0,_utils_syllogism_utils__WEBPACK_IMPORTED_MODULE_3__.formatSylPremise)(conclusion, negated);
    return question;
  }
  static {
    this.ɵfac = function GameService_Factory(t) {
      return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_12__.ProgressAndPerformanceService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_game_timer_service__WEBPACK_IMPORTED_MODULE_13__.GameTimerService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
      token: GameService,
      factory: GameService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 2740:
/*!**************************************************************************!*\
  !*** ./src/app/syllogimous/services/progress-and-performance.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_DAILY_GOAL": () => (/* binding */ DEFAULT_DAILY_GOAL),
/* harmony export */   "DEFAULT_PREMISES_DOWN_THRESHOLD": () => (/* binding */ DEFAULT_PREMISES_DOWN_THRESHOLD),
/* harmony export */   "DEFAULT_PREMISES_UP_THRESHOLD": () => (/* binding */ DEFAULT_PREMISES_UP_THRESHOLD),
/* harmony export */   "DEFAULT_TRAINING_UNIT_LENGTH": () => (/* binding */ DEFAULT_TRAINING_UNIT_LENGTH),
/* harmony export */   "DEFAULT_WEEKLY_GOAL": () => (/* binding */ DEFAULT_WEEKLY_GOAL),
/* harmony export */   "ProgressAndPerformanceService": () => (/* binding */ ProgressAndPerformanceService)
/* harmony export */ });
/* harmony import */ var _constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/local-storage.constants */ 6376);
/* harmony import */ var _constants_question_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/question.constants */ 6189);
/* harmony import */ var _constants_settings_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/settings.constants */ 8266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




const DEFAULT_DAILY_GOAL = 30;
const DEFAULT_WEEKLY_GOAL = 120;
const DEFAULT_TRAINING_UNIT_LENGTH = 10;
const DEFAULT_PREMISES_UP_THRESHOLD = 0.9;
const DEFAULT_PREMISES_DOWN_THRESHOLD = 0.5;
class ProgressAndPerformanceService {
  get DAILY_GOAL() {
    const dailyLS = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__.LS_DAILY_GOAL);
    return Number(dailyLS || DEFAULT_DAILY_GOAL) * 60 * 1000;
  }
  get WEEKLY_GOAL() {
    const weeklyLS = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__.LS_WEEKLY_GOAL);
    return Number(weeklyLS || DEFAULT_WEEKLY_GOAL) * 60 * 1000;
  }
  getToday() {
    return new Date().toISOString().split("T")[0];
  }
  getDailyProgress() {
    const lsDailyProgress = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__.LS_DAILY_PROGRESS);
    if (!lsDailyProgress) {
      return {};
    }
    return JSON.parse(lsDailyProgress);
  }
  setDailyProgress(isoDate, ms) {
    const dailyProgress = this.getDailyProgress();
    dailyProgress[isoDate] = dailyProgress[isoDate] || 0;
    dailyProgress[isoDate] += ms;
    localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__.LS_DAILY_PROGRESS, JSON.stringify(dailyProgress));
  }
  calcDailyProgress(isoDate) {
    return Math.max(0, Math.min(100, Math.floor(100 * (this.getDailyProgress()[isoDate] || 0) / this.DAILY_GOAL)));
  }
  getWeekStartDate(isoDate) {
    const date = new Date(isoDate);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff)).toISOString().split('T')[0];
  }
  calcWeeklyProgress(isoDate) {
    const weekStartDate = this.getWeekStartDate(isoDate);
    const dailyProgress = this.getDailyProgress();
    let weeklyTotal = 0;
    // Sum up all days in the week
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStartDate);
      date.setDate(date.getDate() + i);
      const currentDate = date.toISOString().split('T')[0];
      weeklyTotal += dailyProgress[currentDate] || 0;
    }
    return Math.max(0, Math.min(100, Math.floor(100 * weeklyTotal / this.WEEKLY_GOAL)));
  }
  getTimePlayed(isoDate) {
    return this.getDailyProgress()[isoDate] || 0;
  }
  getTimePlayedThisWeek(isoDate) {
    const weekStartDate = this.getWeekStartDate(isoDate);
    const dailyProgress = this.getDailyProgress();
    let weeklyTotal = 0;
    // Sum up all days in the week
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStartDate);
      date.setDate(date.getDate() + i);
      const currentDate = date.toISOString().split('T')[0];
      weeklyTotal += dailyProgress[currentDate] || 0;
    }
    return weeklyTotal;
  }
  getTrainingUnitSettings() {
    const trainingUnitLengthLS = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__.LS_TRAINING_UNIT_LENGTH);
    const trainingUnitLength = Number(trainingUnitLengthLS) || DEFAULT_TRAINING_UNIT_LENGTH;
    const premisesDownThresholdLS = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__.LS_PREMISES_DOWN_THRESHOLD);
    const premisesDownThreshold = Number(premisesDownThresholdLS) || DEFAULT_PREMISES_DOWN_THRESHOLD;
    const premisesUpThresholdLS = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__.LS_PREMISES_UP_THRESHOLD);
    const premisesUpThreshold = Number(premisesUpThresholdLS) || DEFAULT_PREMISES_UP_THRESHOLD;
    return {
      trainingUnitLength,
      premisesUpThreshold,
      premisesDownThreshold
    };
  }
  getTrainingUnit(type) {
    const ls = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__.LS_TRAINING_UNIT + type);
    if (!ls) {
      return {
        premises: _constants_settings_constants__WEBPACK_IMPORTED_MODULE_2__.QUESTION_TYPE_SETTING_PARAMS[type].minNumOfPremises,
        right: 0,
        timeout: 0,
        wrong: 0
      };
    }
    return JSON.parse(ls);
  }
  getAllTrainingUnits() {
    const typeTrainingUnitMap = {};
    for (const type of Object.values(_constants_question_constants__WEBPACK_IMPORTED_MODULE_1__.EnumQuestionType)) {
      typeTrainingUnitMap[type] = this.getTrainingUnit(type);
    }
    return typeTrainingUnitMap;
  }
  updateTrainingUnit(type, opts) {
    const trainingUnit = this.getTrainingUnit(type);
    const {
      minNumOfPremises,
      maxNumOfPremises
    } = _constants_settings_constants__WEBPACK_IMPORTED_MODULE_2__.QUESTION_TYPE_SETTING_PARAMS[type];
    trainingUnit.premises += opts.premises || 0;
    trainingUnit.premises = Math.max(minNumOfPremises, Math.min(maxNumOfPremises, trainingUnit.premises));
    trainingUnit.right += opts.right || 0;
    trainingUnit.timeout += opts.timeout || 0;
    trainingUnit.wrong += opts.wrong || 0;
    localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__.LS_TRAINING_UNIT + type, JSON.stringify(trainingUnit));
  }
  restartTrainingUnit(type) {
    const trainingUnit = this.getTrainingUnit(type);
    trainingUnit.right = 0;
    trainingUnit.timeout = 0;
    trainingUnit.wrong = 0;
    localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__.LS_TRAINING_UNIT + type, JSON.stringify(trainingUnit));
  }
  calcTrainingUnitPercentages(type) {
    const trainingUnitLengthLS = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__.LS_TRAINING_UNIT_LENGTH);
    const trainingUnitLength = Number(trainingUnitLengthLS) || DEFAULT_TRAINING_UNIT_LENGTH;
    const {
      right,
      timeout,
      wrong
    } = this.getTrainingUnit(type);
    const percentageRight = Math.max(0, Math.min(1, right / trainingUnitLength)) * 100;
    const percentageTimeout = Math.max(0, Math.min(1, timeout / trainingUnitLength)) * 100;
    const percentageWrong = Math.max(0, Math.min(1, wrong / trainingUnitLength)) * 100;
    return {
      right,
      timeout,
      wrong,
      percentageRight,
      percentageTimeout,
      percentageWrong
    };
  }
  static {
    this.ɵfac = function ProgressAndPerformanceService_Factory(t) {
      return new (t || ProgressAndPerformanceService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ProgressAndPerformanceService,
      factory: ProgressAndPerformanceService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3476:
/*!*********************************************!*\
  !*** ./src/app/syllogimous/utils/logger.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logger": () => (/* binding */ Logger)
/* harmony export */ });
class Logger {
  constructor(level = "info", isVerbose = false) {
    this.level = level;
    this.isVerbose = isVerbose;
  }
  setLevel(level) {
    this.level = level;
  }
  setVerbose(isVerbose) {
    this.isVerbose = isVerbose;
  }
  shouldLog(level) {
    const order = {
      "debug": 0,
      "info": 1,
      "warn": 2,
      "error": 3
    };
    return order[level] >= order[this.level];
  }
  log(level, message, ...optionalParams) {
    if (this.shouldLog(level)) {
      if (this.isVerbose) {
        console.log(`[${level.toUpperCase()}]`, message, ...optionalParams);
      } else {
        console.log(`[${level.toUpperCase()}]`, message);
      }
    }
  }
  debug(message, ...optionalParams) {
    this.log("debug", message, ...optionalParams);
  }
  info(message, ...optionalParams) {
    this.log("info", message, ...optionalParams);
  }
  warn(message, ...optionalParams) {
    this.log("warn", message, ...optionalParams);
  }
  error(message, ...optionalParams) {
    this.log("error", message, ...optionalParams);
  }
}

/***/ }),

/***/ 8251:
/*!*****************************************************!*\
  !*** ./src/app/syllogimous/utils/question.utils.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areGraphsIsomorphic": () => (/* binding */ areGraphsIsomorphic),
/* harmony export */   "b2n": () => (/* binding */ b2n),
/* harmony export */   "coinFlip": () => (/* binding */ coinFlip),
/* harmony export */   "createMetaRelationships": () => (/* binding */ createMetaRelationships),
/* harmony export */   "extractSubjects": () => (/* binding */ extractSubjects),
/* harmony export */   "fixBinaryInstructions": () => (/* binding */ fixBinaryInstructions),
/* harmony export */   "genBinKey": () => (/* binding */ genBinKey),
/* harmony export */   "getCircularWays": () => (/* binding */ getCircularWays),
/* harmony export */   "getLinearWays": () => (/* binding */ getLinearWays),
/* harmony export */   "getMetaReplacer": () => (/* binding */ getMetaReplacer),
/* harmony export */   "getRandomSymbols": () => (/* binding */ getRandomSymbols),
/* harmony export */   "getRelation": () => (/* binding */ getRelation),
/* harmony export */   "getSymbols": () => (/* binding */ getSymbols),
/* harmony export */   "horizontalShuffleArrangement": () => (/* binding */ horizontalShuffleArrangement),
/* harmony export */   "interpolateArrangementRelationship": () => (/* binding */ interpolateArrangementRelationship),
/* harmony export */   "isPremiseLikeConclusion": () => (/* binding */ isPremiseLikeConclusion),
/* harmony export */   "metarelateArrangement": () => (/* binding */ metarelateArrangement),
/* harmony export */   "pickUniqueItems": () => (/* binding */ pickUniqueItems),
/* harmony export */   "shuffle": () => (/* binding */ shuffle)
/* harmony export */ });
/* harmony import */ var _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/question.constants */ 6189);


const b2n = b => +b;
function genBinKey(booleans) {
  return booleans.map(value => value ? '1' : '0').join('');
}
function coinFlip() {
  return Math.random() > 0.5;
}
function pickUniqueItems(array, n) {
  const copy = [...array];
  const picked = [];
  while (n > 0) {
    const rnd = Math.floor(Math.random() * copy.length);
    picked.push(copy.splice(rnd, 1)[0]);
    n--;
  }
  return {
    picked,
    remaining: copy
  };
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
function extractSubjects(phrase) {
  return [...phrase.matchAll(/<span class="subject">(.*?)<\/span>/g)].map(a => a[1]);
}
function isPremiseLikeConclusion(premises, conclusion) {
  const subjectsOfPremises = premises.map(p => extractSubjects(p));
  const subjectsOfConclusion = extractSubjects(conclusion);
  for (const subjects of subjectsOfPremises) {
    const toCompare = subjectsOfConclusion[0] + subjectsOfConclusion[1];
    if (subjects[0] + subjects[1] === toCompare || subjects[1] + subjects[0] === toCompare) return true;
  }
  return false;
}
function getSymbols(settings) {
  return settings.enabled.useEmojis ? [...(0,_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.getEmojis)()] : settings.enabled.meaningfulWords ? [..._constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.NOUNS] : [...(0,_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.getStrings)()];
}
function getRandomSymbols(settings, length) {
  const symbols = getSymbols(settings);
  const seen = new Set();
  return Array(length).fill(0).map(() => {
    let rnd = Math.floor(Math.random() * symbols.length);
    while (seen.has(rnd)) {
      rnd = Math.floor(Math.random() * symbols.length);
    }
    seen.add(rnd);
    return symbols[rnd];
  });
}
function getMetaReplacer(settings, choosenPair, relations, negations) {
  const choosenSubjects = [...choosenPair.picked[0].matchAll(/<span class="subject">(.*?)<\/span>/g)];
  const [a, b] = choosenSubjects.map(m => m[1]);
  const isSameAs = relations[0] === relations[1] === (negations[0] === negations[1]);
  const relation = getRelation(settings, _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Distinction, isSameAs);
  return `$1 ${relation} (<span class="subject">${a}</span> to <span class="subject">${b}</span>) to `;
}
function getRelation(settings, type, isPositive) {
  let positive = "";
  let negative = "";
  switch (type) {
    case _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Distinction:
      positive = "same as";
      negative = "opposite of";
      break;
    case _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.ComparisonNumerical:
      positive = "more than";
      negative = "less than";
      break;
    case _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.ComparisonChronological:
      positive = "after";
      negative = "before";
      break;
  }
  let relation = isPositive ? positive : negative;
  if (settings.enabled.negation && coinFlip()) {
    switch (relation) {
      case positive:
        relation = `<span class="is-negated">${negative}</span>`;
        break;
      case negative:
        relation = `<span class="is-negated">${positive}</span>`;
        break;
    }
  }
  return relation;
}
function createMetaRelationships(settings, question, length) {
  // Substitute a variable number of premises with meta-relations
  if (settings.enabled.meta && coinFlip()) {
    const numOfMetaRelationships = 1 + Math.floor(Math.random() * Math.floor((length - 1) / 2));
    question.metaRelations += numOfMetaRelationships;
    let subjects = [];
    if (question.type === _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Distinction) {
      subjects = question.buckets.reduce((a, c, i) => [...a, ...c.map(b => ({
        value: i,
        subject: b[0]
      }))], []);
    } else {
      subjects = question.bucket.map((c, i, a) => ({
        value: a.length - i,
        subject: c
      }), []);
    }
    const {
      picked: pickedPremises,
      remaining: remainingPremises
    } = pickUniqueItems(question.premises, numOfMetaRelationships);
    const pickedPremisesSubjects = pickedPremises.map(extractSubjects);
    const remainingPremisesSubjects = remainingPremises.map(extractSubjects);
    const bidirectionalRelationshipMap = remainingPremisesSubjects.reduce((acc, [a, b]) => (acc[a] = acc[a] || [], acc[a].push(b), acc[b] = acc[b] || [], acc[b].push(a), acc), {});
    const newPremises = [];
    for (const premiseSubjects of pickedPremisesSubjects) {
      const [a, b] = premiseSubjects.map(ps => subjects.find(s => ps === s.subject));
      const {
        picked
      } = pickUniqueItems(Object.entries(bidirectionalRelationshipMap), 1);
      let _c = "";
      let _d = "";
      if (picked[0][1].length > 1) {
        // Indirect relation
        _c = picked[0][1][0];
        _d = picked[0][1][1];
      } else {
        _c = picked[0][0]; // Direct relation
        _d = picked[0][1][0];
      }
      const c = subjects.find(s => s.subject === _c);
      const d = subjects.find(s => s.subject === _d);
      let isSame = false;
      if (question.type === _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Distinction) {
        isSame = a.value === b.value === (c.value === d.value);
      } else {
        isSame = a.value < b.value === c.value < d.value;
      }
      if (isSame) {
        // Same
        if (settings.enabled.negation && coinFlip()) {
          newPremises.push(`<span class="subject">${a.subject}</span> relates to <span class="subject">${b.subject}</span> in the <span class="is-negated">opposite</span> way that <span class="subject">${c.subject}</span> relates to <span class="subject">${d.subject}</span>`);
        } else {
          newPremises.push(`<span class="subject">${a.subject}</span> relates to <span class="subject">${b.subject}</span> in the same way that <span class="subject">${c.subject}</span> relates to <span class="subject">${d.subject}</span>`);
        }
      } else {
        // Different
        if (settings.enabled.negation && coinFlip()) {
          newPremises.push(`<span class="subject">${a.subject}</span> relates to <span class="subject">${b.subject}</span> in the <span class="is-negated">same</span> way that <span class="subject">${c.subject}</span> relates to <span class="subject">${d.subject}</span>`);
        } else {
          newPremises.push(`<span class="subject">${a.subject}</span> relates to <span class="subject">${b.subject}</span> in the opposite way that <span class="subject">${c.subject}</span> relates to <span class="subject">${d.subject}</span>`);
        }
      }
    }
    newPremises.push(...remainingPremises);
    question.premises = newPremises;
  }
}
/** This methods modifies some premises with meta-relationships */
function metarelateArrangement(premises) {
  premises.forEach(premise => {
    premise.metaRelationships = premises.filter(p => p.uid !== premise.uid).filter(p => p.relationship.description === premise.relationship.description && p.relationship.steps === premise.relationship.steps);
  });
}
function horizontalShuffleArrangement(premises) {
  const switchSubjects = premise => [premise.a, premise.b] = [premise.b, premise.a];
  premises.forEach(premise => {
    if (premise.relationship && coinFlip()) {
      switch (premise.relationship.description) {
        case _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.AdjacentLeft:
          {
            premise.relationship.description = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.AdjacentRight;
            switchSubjects(premise);
            break;
          }
        case _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.AdjacentRight:
          {
            premise.relationship.description = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.AdjacentLeft;
            switchSubjects(premise);
            break;
          }
        case _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.NStepsLeft:
          {
            premise.relationship.description = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.NStepsRight;
            switchSubjects(premise);
            break;
          }
        case _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.NStepsRight:
          {
            premise.relationship.description = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.NStepsLeft;
            switchSubjects(premise);
            break;
          }
        case _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.Next:
          {
            switchSubjects(premise);
            break;
          }
        case _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.InFront:
          {
            switchSubjects(premise);
            break;
          }
        case _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.Left:
          {
            premise.relationship.description = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.Right;
            switchSubjects(premise);
            break;
          }
        case _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.Right:
          {
            premise.relationship.description = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.Left;
            switchSubjects(premise);
            break;
          }
      }
    }
  });
}
function getLinearWays(i, j, _, forConclusion = false, precise = false) {
  const isAdjLeft = i + 1 === j;
  const isAdjRight = i - 1 === j;
  const isNext = isAdjLeft || isAdjRight;
  const isLeft = i < j;
  const isRight = i > j;
  const steps = Math.abs(i - j);
  const ways = {
    [_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.AdjacentLeft]: {
      possible: isAdjLeft,
      steps
    },
    [_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.AdjacentRight]: {
      possible: isAdjRight,
      steps
    },
    [_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.NStepsLeft]: {
      possible: isLeft,
      steps
    },
    [_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.NStepsRight]: {
      possible: isRight,
      steps
    }
  };
  if (forConclusion) {
    ways[_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.Next] = {
      possible: isNext,
      steps
    };
    if (!precise) {
      ways[_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.Left] = {
        possible: isLeft,
        steps: -Infinity
      };
      ways[_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.Right] = {
        possible: isRight,
        steps: -Infinity
      };
    }
  }
  return ways;
}
;
function getCircularWays(i, j, numOfEls, forConclusion = false, precise = false) {
  const getAdjLeft = i => (numOfEls + (i + 1)) % numOfEls;
  const getAdjRight = i => (numOfEls + (i - 1)) % numOfEls;
  const getInFront = i => (i + numOfEls / 2) % numOfEls;
  const getCWDist = (i, j) => (j - i + numOfEls) % numOfEls;
  const getCCWDist = (i, j) => numOfEls - getCWDist(i, j);
  // Set i to 0 and calc j relative to that
  j = (numOfEls + (j - i)) % numOfEls;
  i = 0;
  const isAdjLeft = getAdjLeft(i) === j;
  const isAdjRight = getAdjRight(i) === j;
  const isNext = isAdjLeft || isAdjRight;
  const isLeft = j < getInFront(i);
  const isRight = j > getInFront(i);
  const steps = Math.min(getCWDist(i, j), getCCWDist(i, j));
  const ways = {
    [_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.AdjacentLeft]: {
      possible: isAdjLeft,
      steps
    },
    [_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.AdjacentRight]: {
      possible: isAdjRight,
      steps
    },
    [_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.NStepsLeft]: {
      possible: isLeft || steps === numOfEls / 2,
      steps
    },
    [_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.NStepsRight]: {
      possible: isRight || steps === numOfEls / 2,
      steps
    }
  };
  // Even num of els do have diametrically opposite els
  if (numOfEls % 2 === 0) {
    ways[_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.InFront] = {
      possible: getInFront(i) === j,
      steps
    };
  }
  if (forConclusion) {
    ways[_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.Next] = {
      possible: isNext,
      steps
    };
    if (!precise) {
      ways[_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.Left] = {
        possible: isLeft,
        steps: -Infinity
      };
      ways[_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumArrangements.Right] = {
        possible: isRight,
        steps: -Infinity
      };
    }
  }
  return ways;
}
;
function interpolateArrangementRelationship(relationship, settings) {
  const numWord = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_WORDS[relationship.steps];
  const interpolatedWithSteps = relationship.description.replace(/# steps/, () => relationship.steps === 1 ? " adjacent and" : (numWord || relationship.steps) + " steps");
  if (settings.enabled.negation && coinFlip()) {
    // TODO: This method should return the number of negations applied
    return interpolatedWithSteps.replaceAll(/(left|right)/gi, substr => `<span class="is-negated">${substr === "left" ? "right" : "left"}</span>`);
  }
  return interpolatedWithSteps;
}
function fixBinaryInstructions(q) {
  const htmlify = rule => rule.split(", ").map(str => `<span class="subject">${str}</span>`).join(", ");
  switch (q.type) {
    case _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.LinearArrangement:
      {
        return htmlify(q.rule) + " are arranged in a <b>linear</b> way.";
      }
    case _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.CircularArrangement:
      {
        return htmlify(q.rule) + " are arranged in a <b>circular</b> way.";
      }
    default:
      {
        return "";
      }
  }
}
function buildGraph(edgeList) {
  const graph = {};
  edgeList.forEach(edge => {
    const [u, symbol, v] = edge;
    if (!graph[u]) graph[u] = {
      out: new Set(),
      in: new Set()
    };
    if (!graph[v]) graph[v] = {
      out: new Set(),
      in: new Set()
    };
    if (symbol === "→") {
      graph[u].out.add(v);
      graph[v].in.add(u);
    } else if (symbol === "←") {
      graph[v].out.add(u);
      graph[u].in.add(v);
    } else if (symbol === "↔") {
      // Bidirectional: add edges in both directions
      graph[u].out.add(v);
      graph[u].in.add(v);
      graph[v].out.add(u);
      graph[v].in.add(u);
    }
  });
  return graph;
}
/** Checks if two directed graphs (given as edge lists) are isomorphic */
function areGraphsIsomorphic(edgeList1, edgeList2) {
  const graph1 = buildGraph(edgeList1);
  const graph2 = buildGraph(edgeList2);
  const vertices1 = Object.keys(graph1);
  const vertices2 = Object.keys(graph2);
  // Quick check: graphs must have the same number of vertices
  if (vertices1.length !== vertices2.length) return false;
  // Quick check: compare sorted degree pairs [in-degree, out-degree]
  const degrees1 = vertices1.map(v => `${graph1[v].in.size},${graph1[v].out.size}`).sort().join(',');
  const degrees2 = vertices2.map(v => `${graph2[v].in.size},${graph2[v].out.size}`).sort().join(',');
  if (degrees1 !== degrees2) return false;
  const mapping = {}; // Mapping from graph1 vertices to graph2 vertices
  const used = new Set(); // Set of graph2 vertices that have been mapped
  // Checks the current partial mapping for consistency
  function isValidMapping() {
    for (const u of vertices1) {
      if (mapping[u]) {
        for (const v of graph1[u].out) {
          if (mapping[v]) {
            // Check that the mapped edge exists in graph2
            if (!graph2[mapping[u]].out.has(mapping[v])) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
  // Recursively tries to assign each vertex in graph1 to a vertex in graph2
  function backtrack(index) {
    if (index === vertices1.length) {
      // All vertices have been successfully mapped
      return true;
    }
    const u = vertices1[index];
    for (const v of vertices2) {
      if (!used.has(v)) {
        // Check if in-degree and out-degree match
        if (graph1[u].in.size === graph2[v].in.size && graph1[u].out.size === graph2[v].out.size) {
          mapping[u] = v;
          used.add(v);
          if (isValidMapping() && backtrack(index + 1)) {
            return true;
          }
          // Backtrack
          delete mapping[u];
          used.delete(v);
        }
      }
    }
    return false;
  }
  return backtrack(0);
}

/***/ }),

/***/ 9879:
/*!******************************************************!*\
  !*** ./src/app/syllogimous/utils/syllogism.utils.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatSylPremise": () => (/* binding */ formatSylPremise),
/* harmony export */   "generatePolysyllogism": () => (/* binding */ generatePolysyllogism),
/* harmony export */   "getRandomRuleInvalid": () => (/* binding */ getRandomRuleInvalid),
/* harmony export */   "getRandomRuleValid": () => (/* binding */ getRandomRuleValid),
/* harmony export */   "getSyllogism": () => (/* binding */ getSyllogism)
/* harmony export */ });
/* harmony import */ var _constants_syllogism_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/syllogism.constants */ 4338);
/* harmony import */ var _question_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question.utils */ 8251);


//    ____  __    ____     _____________   ____________  ___  __________  ____ 
//   / __ \/ /   / __ \   / ____/ ____/ | / / ____/ __ \/   |/_  __/ __ \/ __ \
//  / / / / /   / / / /  / / __/ __/ /  |/ / __/ / /_/ / /| | / / / / / / /_/ /
// / /_/ / /___/ /_/ /  / /_/ / /___/ /|  / /___/ _, _/ ___ |/ / / /_/ / _, _/ 
// \____/_____/_____/   \____/_____/_/ |_/_____/_/ |_/_/  |_/_/  \____/_/ |_|  
function getRandomRuleValid() {
  return _constants_syllogism_constants__WEBPACK_IMPORTED_MODULE_0__.VALID_RULES[Math.floor(Math.random() * _constants_syllogism_constants__WEBPACK_IMPORTED_MODULE_0__.VALID_RULES.length)];
}
function getRandomRuleInvalid() {
  let rule;
  while (!rule || _constants_syllogism_constants__WEBPACK_IMPORTED_MODULE_0__.VALID_RULES.includes(rule)) {
    rule = "";
    for (let i = 0; i < 3; i++) {
      rule += Math.floor(Math.random() * 4); // Form
    }

    rule += 1 + Math.floor(Math.random() * 4); // Figure
  }

  return rule;
}
function getSyllogism(settings, s, p, m, rule) {
  const _forms = !settings.enabled.negation ? _constants_syllogism_constants__WEBPACK_IMPORTED_MODULE_0__.FORMS[0] : (0,_question_utils__WEBPACK_IMPORTED_MODULE_1__.pickUniqueItems)(_constants_syllogism_constants__WEBPACK_IMPORTED_MODULE_0__.FORMS, 1).picked[0];
  let major = _forms[+rule[0]];
  let minor = _forms[+rule[1]];
  let conclusion = _forms[+rule[2]];
  const figure = +rule[3];
  switch (figure) {
    case 1:
      major = major.replace("$", m);
      major = major.replace("$", p);
      minor = minor.replace("$", s);
      minor = minor.replace("$", m);
      break;
    case 2:
      major = major.replace("$", p);
      major = major.replace("$", m);
      minor = minor.replace("$", s);
      minor = minor.replace("$", m);
      break;
    case 3:
      major = major.replace("$", m);
      major = major.replace("$", p);
      minor = minor.replace("$", m);
      minor = minor.replace("$", s);
      break;
    case 4:
      major = major.replace("$", p);
      major = major.replace("$", m);
      minor = minor.replace("$", m);
      minor = minor.replace("$", s);
      break;
  }
  conclusion = conclusion.replace("$", s);
  conclusion = conclusion.replace("$", p);
  return [major, minor, conclusion];
}
//     _   _________       __   _____________   ____________  ___  __________  ____ 
//    / | / / ____/ |     / /  / ____/ ____/ | / / ____/ __ \/   |/_  __/ __ \/ __ \
//   /  |/ / __/  | | /| / /  / / __/ __/ /  |/ / __/ / /_/ / /| | / / / / / / /_/ /
//  / /|  / /___  | |/ |/ /  / /_/ / /___/ /|  / /___/ _, _/ ___ |/ / / /_/ / _, _/ 
// /_/ |_/_____/  |__/|__/   \____/_____/_/ |_/_____/_/ |_/_/  |_/_/  \____/_/ |_|  
function sylNegate(premise) {
  const [a, k, b] = premise;
  const map = {
    "all": [a, "some_not", b],
    "no": [a, "some", b],
    "some": [a, "no", b],
    "some_not": [a, "all", b]
  };
  return map[k];
}
function sylUnion(a, b) {
  const r = new Set(a);
  for (const x of b) r.add(x);
  return r;
}
function sylIntersect(a, b) {
  const r = new Set();
  for (const x of a) if (b.has(x)) r.add(x);
  return r;
}
function sylIsConsistent(premises) {
  const terms = new Set();
  for (const [a,, b] of premises) {
    terms.add(a);
    terms.add(b);
  }
  if (!terms.size) return true;
  const subset = new Map();
  const disjoint = new Map();
  for (const t of terms) {
    subset.set(t, new Set([t]));
    disjoint.set(t, new Set());
  }
  for (const [a, k, b] of premises) {
    if (k === "all") subset.get(a).add(b);else if (k === "no") {
      disjoint.get(a).add(b);
      disjoint.get(b).add(a);
    }
  }
  // Transitive closure of subset
  let changed = true;
  while (changed) {
    changed = false;
    for (const x of terms) {
      const sx = subset.get(x);
      const initial = sx.size;
      const extra = new Set();
      for (const y of sx) for (const z of subset.get(y)) extra.add(z);
      for (const z of extra) sx.add(z);
      if (sx.size > initial) changed = true;
    }
  }
  // Propagate disjointness through subset and symmetrize
  changed = true;
  while (changed) {
    changed = false;
    for (const x of terms) {
      const dx = disjoint.get(x);
      const initial = dx.size;
      const extra = new Set();
      for (const y of subset.get(x)) for (const z of disjoint.get(y)) extra.add(z);
      for (const z of extra) dx.add(z);
      if (dx.size > initial) changed = true;
    }
    for (const x of terms) for (const y of disjoint.get(x)) {
      const dy = disjoint.get(y);
      if (!dy.has(x)) {
        dy.add(x);
        changed = true;
      }
    }
  }
  // Existential import: a term must not be subset+disjoint of itself
  for (const t of terms) {
    if (sylIntersect(subset.get(t), disjoint.get(t)).size) return false;
  }
  for (const [a, k, b] of premises) {
    if (k === "some") {
      const mustIn = sylUnion(subset.get(a), subset.get(b));
      const mustOut = sylUnion(disjoint.get(a), disjoint.get(b));
      if (sylIntersect(mustIn, mustOut).size) return false;
    } else if (k === "some_not") {
      const mustIn = subset.get(a);
      const mustOut = sylUnion(disjoint.get(a), new Set([b]));
      if (sylIntersect(mustIn, mustOut).size) return false;
    }
  }
  return true;
}
function sylEntails(premises, conclusion) {
  return !sylIsConsistent([...premises, sylNegate(conclusion)]);
}
function sylApplySyllogism(premisesDict, figure, word1, word2, word3, kind1, kind2, kind3, addKind1) {
  const setPair = (a, b, k) => {
    if (!premisesDict[a]) premisesDict[a] = {};
    premisesDict[a][b] = k;
  };
  switch (figure) {
    case "1":
      // M-P, S-M => S-P
      if (addKind1) setPair(word1, word2, kind1);
      setPair(word3, word1, kind2);
      return [word3, word2, kind3];
    case "2":
      // P-M, S-M => S-P
      if (addKind1) setPair(word1, word2, kind1);
      setPair(word3, word2, kind2);
      return [word3, word1, kind3];
    case "3":
      // M-P, M-S => S-P
      if (addKind1) setPair(word1, word2, kind1);
      setPair(word1, word3, kind2);
      return [word3, word2, kind3];
    case "4":
      // P-M, M-S => S-P
      if (addKind1) setPair(word1, word2, kind1);
      setPair(word2, word3, kind2);
      return [word3, word1, kind3];
    default:
      throw new Error("Invalid figure: " + figure);
  }
}
function sylDictToList(premisesDict) {
  const out = [];
  for (const a of Object.keys(premisesDict)) {
    for (const b of Object.keys(premisesDict[a])) {
      out.push([a, premisesDict[a][b], b]);
    }
  }
  return out;
}
function sylRandPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function sylShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function sylPairKey([a,, b]) {
  return a < b ? `${a}|${b}` : `${b}|${a}`;
}
function* sylShortPremisePaths(premises, w1, w2, maxLen) {
  const adj = new Map();
  premises.forEach((p, idx) => {
    const [a,, b] = p;
    if (!adj.has(a)) adj.set(a, []);
    if (!adj.has(b)) adj.set(b, []);
    adj.get(a).push({
      idx,
      other: b
    });
    adj.get(b).push({
      idx,
      other: a
    });
  });
  const usedEdge = new Set();
  const usedNode = new Set([w1]);
  const stack = [];
  function* dfs(node) {
    if (node === w2 && stack.length > 0) {
      yield stack.slice();
      return;
    }
    if (stack.length >= maxLen) return;
    for (const {
      idx,
      other
    } of adj.get(node) || []) {
      if (usedEdge.has(idx)) continue;
      if (usedNode.has(other) && other !== w2) continue;
      usedEdge.add(idx);
      usedNode.add(other);
      stack.push(idx);
      yield* dfs(other);
      stack.pop();
      usedNode.delete(other);
      usedEdge.delete(idx);
    }
  }
  yield* dfs(w1);
}
function sylHasShorterProof(premises, conclusion, chainDepth) {
  const [w1,, w2] = conclusion;
  for (const idxs of sylShortPremisePaths(premises, w1, w2, chainDepth - 1)) {
    const subset = idxs.map(i => premises[i]);
    if (sylEntails(subset, conclusion)) return true;
  }
  return false;
}
function sylRelationDeterminableShort(premises, w1, w2, chainDepth) {
  for (const idxs of sylShortPremisePaths(premises, w1, w2, chainDepth - 1)) {
    const subset = idxs.map(i => premises[i]);
    for (const [a, b] of [[w1, w2], [w2, w1]]) {
      for (const k of _constants_syllogism_constants__WEBPACK_IMPORTED_MODULE_0__.SYL_KINDS) {
        if (sylEntails(subset, [a, k, b])) return true;
      }
    }
  }
  return false;
}
function generatePolysyllogism(opts) {
  const {
    nPremises,
    chainDepth,
    termPool,
    trueConclusion
  } = opts;
  if (chainDepth < 1) throw new Error("chainDepth must be >= 1");
  if (chainDepth > nPremises) throw new Error("chainDepth must be <= nPremises");
  const chainTermsNeeded = chainDepth + 1;
  const numDistractors = nPremises - chainDepth;
  if (termPool.length < chainTermsNeeded) {
    throw new Error("not enough terms in termPool");
  }
  while (true) {
    const pool = sylShuffle([...termPool]);
    const chainTerms = pool.slice(0, chainTermsNeeded);
    const distractorTerms = pool;
    const premisesDict = {};
    let w1, w2, conclusion;
    let failed = false;
    if (chainDepth === 1) {
      const [wA, wB] = chainTerms;
      const inf = sylRandPick(_constants_syllogism_constants__WEBPACK_IMPORTED_MODULE_0__.SYL_IMMEDIATE_INFERENCES);
      premisesDict[wA] = {
        [wB]: inf.kind
      };
      w1 = inf.swap ? wB : wA;
      w2 = inf.swap ? wA : wB;
      conclusion = inf.conclKind;
    } else {
      const [word1, word2, word3, ...otherWords] = chainTerms;
      const initKey = sylRandPick(_constants_syllogism_constants__WEBPACK_IMPORTED_MODULE_0__.SYL_TRUE_CONCLUSIONS_KEYS);
      const [k1, k2, fig] = initKey.split(",");
      const k3 = sylRandPick(_constants_syllogism_constants__WEBPACK_IMPORTED_MODULE_0__.SYL_TRUE_CONCLUSIONS[initKey]);
      [w1, w2, conclusion] = sylApplySyllogism(premisesDict, fig, word1, word2, word3, k1, k2, k3, true);
      for (let i = 0; i < chainDepth - 2; i++) {
        const newWord = otherWords[i];
        const kind1 = conclusion;
        const variants = [];
        for (const key of _constants_syllogism_constants__WEBPACK_IMPORTED_MODULE_0__.SYL_TRUE_CONCLUSIONS_KEYS) {
          const [pK1, pK2, pFig] = key.split(",");
          if (pK1 !== kind1) continue;
          for (const k3i of _constants_syllogism_constants__WEBPACK_IMPORTED_MODULE_0__.SYL_TRUE_CONCLUSIONS[key]) {
            variants.push([pK2, pFig, k3i]);
          }
        }
        if (variants.length === 0) {
          failed = true;
          break;
        }
        const [kind2, figure_i, kind3] = sylRandPick(variants);
        [w1, w2, conclusion] = sylApplySyllogism(premisesDict, figure_i, w1, w2, newWord, kind1, kind2, kind3, false);
      }
    }
    if (failed) continue;
    let finalConclusion = [w1, conclusion, w2];
    const distractorPremises = [];
    const chainPremises = sylDictToList(premisesDict);
    const seenKeys = new Set(chainPremises.map(sylPairKey));
    let dFailed = false;
    for (let i = 0; i < numDistractors; i++) {
      let placed = false;
      for (let tries = 0; tries < 200; tries++) {
        let i1, i2;
        do {
          i1 = sylRandPick(distractorTerms);
          i2 = sylRandPick(distractorTerms);
        } while (i1 === i2 || !chainTerms.includes(i1) && !chainTerms.includes(i2));
        const trial = [i1, sylRandPick(_constants_syllogism_constants__WEBPACK_IMPORTED_MODULE_0__.SYL_KINDS), i2];
        const key = sylPairKey(trial);
        if (seenKeys.has(key)) continue;
        const current = [...chainPremises, ...distractorPremises];
        if (sylEntails(current, trial)) continue;
        if (!sylIsConsistent([...current, trial])) continue;
        if (sylHasShorterProof([...current, trial], finalConclusion, chainDepth)) continue; // strict chainDepth [true conclusion]
        distractorPremises.push(trial);
        seenKeys.add(key);
        placed = true;
        break;
      }
      if (!placed) {
        dFailed = true;
        break;
      }
    }
    if (dFailed) continue;
    const premises = [...sylDictToList(premisesDict), ...distractorPremises];
    let conclusionIsTrue = true;
    if (premises.length !== nPremises) continue;
    if (!sylIsConsistent(premises)) continue;
    if (!sylEntails(premises, finalConclusion)) continue;
    if (!trueConclusion) {
      const [cl, ck, cr] = finalConclusion;
      const alternatives = [];
      for (const k of _constants_syllogism_constants__WEBPACK_IMPORTED_MODULE_0__.SYL_KINDS) {
        for (const [a, b] of [[cl, cr], [cr, cl]]) {
          if (a === cl && b === cr && k === ck) continue;
          const alt = [a, k, b];
          if (sylEntails(premises, alt)) continue;
          if (sylRelationDeterminableShort(premises, a, b, chainDepth)) continue; // strict chainDepth [false conclusion]
          alternatives.push(alt);
        }
      }
      finalConclusion = alternatives.length ? sylRandPick(alternatives) : sylNegate(finalConclusion);
      conclusionIsTrue = false;
    }
    sylShuffle(premises);
    if (!sylIsConsistent(premises)) {
      console.log("Internal: premises are inconsistent");
      continue;
    }
    if (conclusionIsTrue) {
      if (!sylEntails(premises, finalConclusion)) {
        console.log("Internal: true conclusion not entailed");
        continue;
      }
    } else {
      if (sylEntails(premises, finalConclusion)) {
        console.log("Internal: false conclusion is entailed");
        continue;
      }
      if (sylRelationDeterminableShort(premises, w1, w2, chainDepth)) {
        // strict chainDepth [false conclusion]
        continue;
      }
    }
    return {
      premises,
      conclusion: finalConclusion,
      conclusionIsTrue
    };
  }
}
function formatSylPremise([a, k, b], negated = false) {
  const A = `<span class="subject">${a}</span>`;
  const B = `<span class="subject">${b}</span>`;
  if (!negated) {
    switch (k) {
      case "all":
        return `All ${A} is ${B}`;
      case "no":
        return `No ${A} is ${B}`;
      case "some":
        return `Some ${A} is ${B}`;
      case "some_not":
        return `Some ${A} is not ${B}`;
    }
  } else {
    switch (k) {
      case "all":
        return `<span class="is-negated">No</span> ${A} is ${B}`;
      case "no":
        return `<span class="is-negated">All</span> ${A} is ${B}`;
      case "some":
        return `Some ${A} <span class="is-negated">is not</span> ${B}`;
      case "some_not":
        return `Some ${A} <span class="is-negated">is</span> ${B}`;
    }
  }
}

/***/ }),

/***/ 7694:
/*!******************************!*\
  !*** ./src/app/utils/dom.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blur": () => (/* binding */ blur),
/* harmony export */   "delayedScrollTo": () => (/* binding */ delayedScrollTo)
/* harmony export */ });
function delayedScrollTo(queryString, ms) {
  ms = ms || 150;
  setTimeout(() => document.querySelector(queryString)?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
  }), ms);
}
function blur() {
  document.activeElement?.blur();
}

/***/ }),

/***/ 2875:
/*!*******************************!*\
  !*** ./src/app/utils/file.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "downloadFile": () => (/* binding */ downloadFile),
/* harmony export */   "downloadFromURL": () => (/* binding */ downloadFromURL)
/* harmony export */ });
function downloadFile(result, fileNameWithExt, customType) {
  const link = document.createElement("A");
  const file = new Blob([result], {
    type: customType || "text/plain"
  });
  link.href = URL.createObjectURL(file);
  link.download = fileNameWithExt;
  link.click();
  URL.revokeObjectURL(link.href);
}
function downloadFromURL(url) {
  const dl = document.createElement("a");
  dl.target = "_blank";
  dl.download = url;
  dl.href = url;
  dl.click();
}

/***/ }),

/***/ 4037:
/*!*******************************!*\
  !*** ./src/app/utils/json.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jsonCopy": () => (/* binding */ jsonCopy),
/* harmony export */   "parseJwt": () => (/* binding */ parseJwt)
/* harmony export */ });
function jsonCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(atob(base64));
}

/***/ }),

/***/ 8007:
/*!*********************************!*\
  !*** ./src/app/utils/object.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyObject": () => (/* binding */ emptyObject),
/* harmony export */   "lookmap": () => (/* binding */ lookmap),
/* harmony export */   "replaceProps": () => (/* binding */ replaceProps),
/* harmony export */   "resolve": () => (/* binding */ resolve),
/* harmony export */   "singlifyLookmap": () => (/* binding */ singlifyLookmap)
/* harmony export */ });
function resolve(path, obj = self, separator = '.') {
  const properties = path.split(separator);
  return properties.reduce((prev, curr) => prev?.[curr], obj);
}
;
function lookmap(key, array) {
  return array.reduce((a, b) => {
    const _b = b;
    a[_b[key]] = a[_b[key]] || [];
    a[_b[key]].push(b);
    return a;
  }, {});
}
function singlifyLookmap(input) {
  const result = {};
  Object.keys(input).forEach(key => result[key] = input[key][0]);
  return result;
}
function emptyObject(object) {
  if (typeof object !== "object") throw new Error("Argument object of emptyObject is not an object.");
  for (const key in object) {
    delete object[key];
  }
  return object;
}
function replaceProps(object, props) {
  if (typeof object !== "object") throw new Error("Argument object of replaceProps is not an object.");
  if (typeof props !== "object") throw new Error("Argument props of replaceProps is not an object.");
  return Object.assign(object, props);
}

/***/ }),

/***/ 497:
/*!**********************************!*\
  !*** ./src/app/utils/promise.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
function delay(ms) {
  return new Promise(res => setTimeout(() => res(1), ms));
}

/***/ }),

/***/ 3488:
/*!*******************************!*\
  !*** ./src/app/utils/uuid.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guid": () => (/* binding */ guid),
/* harmony export */   "suid": () => (/* binding */ suid)
/* harmony export */ });
function guid() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
function suid(length = 40) {
  return Math.random().toString(36).substring(2, 2 + Math.floor(length / 2)) + Math.random().toString(36).substring(2, 2 + Math.round(length / 2));
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/// <reference types="@angular/localize" />


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 1921:
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/deps/text2mask/textMaskCore.js ***!
  \******************************************************************/
/***/ (function(module) {

!function (e, r) {
   true ? module.exports = r() : 0;
}(this, function () {
  return function (e) {
    function r(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {
        exports: {},
        id: n,
        loaded: !1
      };
      return e[n].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports;
    }
    var t = {};
    return r.m = e, r.c = t, r.p = "", r(0);
  }([function (e, r, t) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = t(3);
    Object.defineProperty(r, "conformToMask", {
      enumerable: !0,
      get: function () {
        return n(o).default;
      }
    });
    var i = t(2);
    Object.defineProperty(r, "adjustCaretPosition", {
      enumerable: !0,
      get: function () {
        return n(i).default;
      }
    });
    var a = t(5);
    Object.defineProperty(r, "createTextMaskInputElement", {
      enumerable: !0,
      get: function () {
        return n(a).default;
      }
    });
  }, function (e, r) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.placeholderChar = "_", r.strFunction = "function";
  }, function (e, r) {
    "use strict";

    function t(e) {
      var r = e.previousConformedValue,
        t = void 0 === r ? o : r,
        i = e.previousPlaceholder,
        a = void 0 === i ? o : i,
        u = e.currentCaretPosition,
        l = void 0 === u ? 0 : u,
        s = e.conformedValue,
        f = e.rawValue,
        d = e.placeholderChar,
        c = e.placeholder,
        p = e.indexesOfPipedChars,
        v = void 0 === p ? n : p,
        h = e.caretTrapIndexes,
        m = void 0 === h ? n : h;
      if (0 === l || !f.length) return 0;
      var y = f.length,
        g = t.length,
        b = c.length,
        C = s.length,
        P = y - g,
        k = P > 0,
        x = 0 === g,
        O = P > 1 && !k && !x;
      if (O) return l;
      var T = k && (t === s || s === c),
        w = 0,
        M = void 0,
        S = void 0;
      if (T) w = l - P;else {
        var j = s.toLowerCase(),
          _ = f.toLowerCase(),
          V = _.substr(0, l).split(o),
          A = V.filter(function (e) {
            return j.indexOf(e) !== -1;
          });
        S = A[A.length - 1];
        var N = a.substr(0, A.length).split(o).filter(function (e) {
            return e !== d;
          }).length,
          E = c.substr(0, A.length).split(o).filter(function (e) {
            return e !== d;
          }).length,
          F = E !== N,
          R = void 0 !== a[A.length - 1] && void 0 !== c[A.length - 2] && a[A.length - 1] !== d && a[A.length - 1] !== c[A.length - 1] && a[A.length - 1] === c[A.length - 2];
        !k && (F || R) && N > 0 && c.indexOf(S) > -1 && void 0 !== f[l] && (M = !0, S = f[l]);
        for (var I = v.map(function (e) {
            return j[e];
          }), J = I.filter(function (e) {
            return e === S;
          }).length, W = A.filter(function (e) {
            return e === S;
          }).length, q = c.substr(0, c.indexOf(d)).split(o).filter(function (e, r) {
            return e === S && f[r] !== e;
          }).length, L = q + W + J + (M ? 1 : 0), z = 0, B = 0; B < C; B++) {
          var D = j[B];
          if (w = B + 1, D === S && z++, z >= L) break;
        }
      }
      if (k) {
        for (var G = w, H = w; H <= b; H++) if (c[H] === d && (G = H), c[H] === d || m.indexOf(H) !== -1 || H === b) return G;
      } else if (M) {
        for (var K = w - 1; K >= 0; K--) if (s[K] === S || m.indexOf(K) !== -1 || 0 === K) return K;
      } else for (var Q = w; Q >= 0; Q--) if (c[Q - 1] === d || m.indexOf(Q) !== -1 || 0 === Q) return Q;
    }
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = t;
    var n = [],
      o = "";
  }, function (e, r, t) {
    "use strict";

    function n() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (!(0, i.isArray)(r)) {
        if (("undefined" == typeof r ? "undefined" : o(r)) !== a.strFunction) throw new Error("Text-mask:conformToMask; The mask property must be an array.");
        r = r(e, t), r = (0, i.processCaretTraps)(r).maskWithoutCaretTraps;
      }
      var n = t.guide,
        s = void 0 === n || n,
        f = t.previousConformedValue,
        d = void 0 === f ? l : f,
        c = t.placeholderChar,
        p = void 0 === c ? a.placeholderChar : c,
        v = t.placeholder,
        h = void 0 === v ? (0, i.convertMaskToPlaceholder)(r, p) : v,
        m = t.currentCaretPosition,
        y = t.keepCharPositions,
        g = s === !1 && void 0 !== d,
        b = e.length,
        C = d.length,
        P = h.length,
        k = r.length,
        x = b - C,
        O = x > 0,
        T = m + (O ? -x : 0),
        w = T + Math.abs(x);
      if (y === !0 && !O) {
        for (var M = l, S = T; S < w; S++) h[S] === p && (M += p);
        e = e.slice(0, T) + M + e.slice(T, b);
      }
      for (var j = e.split(l).map(function (e, r) {
          return {
            char: e,
            isNew: r >= T && r < w
          };
        }), _ = b - 1; _ >= 0; _--) {
        var V = j[_].char;
        if (V !== p) {
          var A = _ >= T && C === k;
          V === h[A ? _ - x : _] && j.splice(_, 1);
        }
      }
      var N = l,
        E = !1;
      e: for (var F = 0; F < P; F++) {
        var R = h[F];
        if (R === p) {
          if (j.length > 0) for (; j.length > 0;) {
            var I = j.shift(),
              J = I.char,
              W = I.isNew;
            if (J === p && g !== !0) {
              N += p;
              continue e;
            }
            if (r[F].test(J)) {
              if (y === !0 && W !== !1 && d !== l && s !== !1 && O) {
                for (var q = j.length, L = null, z = 0; z < q; z++) {
                  var B = j[z];
                  if (B.char !== p && B.isNew === !1) break;
                  if (B.char === p) {
                    L = z;
                    break;
                  }
                }
                null !== L ? (N += J, j.splice(L, 1)) : F--;
              } else N += J;
              continue e;
            }
            E = !0;
          }
          g === !1 && (N += h.substr(F, P));
          break;
        }
        N += R;
      }
      if (g && O === !1) {
        for (var D = null, G = 0; G < N.length; G++) h[G] === p && (D = G);
        N = null !== D ? N.substr(0, D + 1) : l;
      }
      return {
        conformedValue: N,
        meta: {
          someCharsRejected: E
        }
      };
    }
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    r.default = n;
    var i = t(4),
      a = t(1),
      u = [],
      l = "";
  }, function (e, r, t) {
    "use strict";

    function n() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.placeholderChar;
      if (!o(e)) throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");
      if (e.indexOf(r) !== -1) throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n" + ("The placeholder character that was received is: " + JSON.stringify(r) + "\n\n") + ("The mask that was received is: " + JSON.stringify(e)));
      return e.map(function (e) {
        return e instanceof RegExp ? r : e;
      }).join("");
    }
    function o(e) {
      return Array.isArray && Array.isArray(e) || e instanceof Array;
    }
    function i(e) {
      return "string" == typeof e || e instanceof String;
    }
    function a(e) {
      return "number" == typeof e && void 0 === e.length && !isNaN(e);
    }
    function u(e) {
      return "undefined" == typeof e || null === e;
    }
    function l(e) {
      for (var r = [], t = void 0; t = e.indexOf(d), t !== -1;) r.push(t), e.splice(t, 1);
      return {
        maskWithoutCaretTraps: e,
        indexes: r
      };
    }
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.convertMaskToPlaceholder = n, r.isArray = o, r.isString = i, r.isNumber = a, r.isNil = u, r.processCaretTraps = l;
    var s = t(1),
      f = [],
      d = "[]";
  }, function (e, r, t) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function o(e) {
      var r = {
        previousConformedValue: void 0,
        previousPlaceholder: void 0
      };
      return {
        state: r,
        update: function (t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
            o = n.inputElement,
            s = n.mask,
            d = n.guide,
            m = n.pipe,
            g = n.placeholderChar,
            b = void 0 === g ? v.placeholderChar : g,
            C = n.keepCharPositions,
            P = void 0 !== C && C,
            k = n.showMask,
            x = void 0 !== k && k;
          if ("undefined" == typeof t && (t = o.value), t !== r.previousConformedValue) {
            ("undefined" == typeof s ? "undefined" : l(s)) === y && void 0 !== s.pipe && void 0 !== s.mask && (m = s.pipe, s = s.mask);
            var O = void 0,
              T = void 0;
            if (s instanceof Array && (O = (0, p.convertMaskToPlaceholder)(s, b)), s !== !1) {
              var w = a(t),
                M = o.selectionEnd,
                S = r.previousConformedValue,
                j = r.previousPlaceholder,
                _ = void 0;
              if (("undefined" == typeof s ? "undefined" : l(s)) === v.strFunction) {
                if (T = s(w, {
                  currentCaretPosition: M,
                  previousConformedValue: S,
                  placeholderChar: b
                }), T === !1) return;
                var V = (0, p.processCaretTraps)(T),
                  A = V.maskWithoutCaretTraps,
                  N = V.indexes;
                T = A, _ = N, O = (0, p.convertMaskToPlaceholder)(T, b);
              } else T = s;
              var E = {
                  previousConformedValue: S,
                  guide: d,
                  placeholderChar: b,
                  pipe: m,
                  placeholder: O,
                  currentCaretPosition: M,
                  keepCharPositions: P
                },
                F = (0, c.default)(w, T, E),
                R = F.conformedValue,
                I = ("undefined" == typeof m ? "undefined" : l(m)) === v.strFunction,
                J = {};
              I && (J = m(R, u({
                rawValue: w
              }, E)), J === !1 ? J = {
                value: S,
                rejected: !0
              } : (0, p.isString)(J) && (J = {
                value: J
              }));
              var W = I ? J.value : R,
                q = (0, f.default)({
                  previousConformedValue: S,
                  previousPlaceholder: j,
                  conformedValue: W,
                  placeholder: O,
                  rawValue: w,
                  currentCaretPosition: M,
                  placeholderChar: b,
                  indexesOfPipedChars: J.indexesOfPipedChars,
                  caretTrapIndexes: _
                }),
                L = W === O && 0 === q,
                z = x ? O : h,
                B = L ? z : W;
              r.previousConformedValue = B, r.previousPlaceholder = O, o.value !== B && (o.value = B, i(o, q));
            }
          }
        }
      };
    }
    function i(e, r) {
      document.activeElement === e && (g ? b(function () {
        return e.setSelectionRange(r, r, m);
      }, 0) : e.setSelectionRange(r, r, m));
    }
    function a(e) {
      if ((0, p.isString)(e)) return e;
      if ((0, p.isNumber)(e)) return String(e);
      if (void 0 === e || null === e) return h;
      throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " + JSON.stringify(e));
    }
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var u = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
      },
      l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      };
    r.default = o;
    var s = t(2),
      f = n(s),
      d = t(3),
      c = n(d),
      p = t(4),
      v = t(1),
      h = "",
      m = "none",
      y = "object",
      g = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
      b = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : setTimeout;
  }]);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6344), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map