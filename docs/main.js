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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/toasts-container/toasts-container.component */ 8191);



class AppComponent {
  constructor() {
    this.title = 'Multi Layout';
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
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[1, "d-none"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-toasts")(1, "router-outlet", 0);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_0__.ToastsContainer],
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
/* harmony import */ var C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
    return (0,C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
/* harmony import */ var C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
    return (0,C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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