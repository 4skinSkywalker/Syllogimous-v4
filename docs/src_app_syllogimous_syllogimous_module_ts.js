"use strict";
(self["webpackChunkmulti_layout"] = self["webpackChunkmulti_layout"] || []).push([["src_app_syllogimous_syllogimous_module_ts"],{

/***/ 7591:
/*!**************************************************************************************!*\
  !*** ./src/app/syllogimous/components/card/card-dropdown/card-dropdown.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardDropdownComponent": () => (/* binding */ CardDropdownComponent)
/* harmony export */ });
/* harmony import */ var C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_syllogimous_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/syllogimous/constants/local-storage.constants */ 6376);
/* harmony import */ var src_app_syllogimous_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/syllogimous/constants/syllogimous.constants */ 9182);
/* harmony import */ var src_app_utils_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/file */ 2875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_syllogimous_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/syllogimous/services/syllogimous.service */ 3943);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);









function CardDropdownComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Are you sure?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_ng_template_0_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const modal_r6 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](modal_r6.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " All your progresses will be deleted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Are you sure you want to proceed with the reset? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 19)(9, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_ng_template_0_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const modal_r6 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](modal_r6.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_ng_template_0_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const modal_r6 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](modal_r6.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CardDropdownComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Lightmode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function CardDropdownComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Darkmode ");
  }
}
class CardDropdownComponent {
  constructor(sylSrv, router, modalService) {
    this.sylSrv = sylSrv;
    this.router = router;
    this.modalService = modalService;
    this.EnumScreens = src_app_syllogimous_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_2__.EnumScreens;
  }
  ngAfterViewInit() {
    this.toggleDarkmode(true);
  }
  resetGame(content) {
    var _this = this;
    return (0,C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  import(evt) {
    const file = evt.target.files[0];
    if (!file) {
      alert("No JSON file selected");
      return;
    }
    const reader = new FileReader();
    reader.onload = e => {
      const importJson = e.target?.result;
      if (!importJson || typeof importJson !== "string") {
        alert("Invalid JSON file");
        return;
      }
      const confirmation = confirm("Importing will overwrite all existing settings. Are you sure?");
      if (!confirmation) {
        return;
      }
      const data = JSON.parse(importJson);
      for (const [key, value] of Object.entries(data)) {
        localStorage.setItem(key, value);
      }
      setTimeout(() => {
        alert("Import completed successfully!");
        window.location.reload();
      }, 400);
    };
    reader.readAsText(file);
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
      return new (t || CardDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_syllogimous_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_4__.SyllogimousService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CardDropdownComponent,
      selectors: [["app-card-dropdown"]],
      decls: 48,
      vars: 2,
      consts: [["content", ""], ["ngbDropdown", "", "container", "body"], ["ngbDropdownToggle", "", 1, "btn"], ["ngbDropdownMenu", ""], [1, "text-muted", "ms-3"], ["ngbDropdownItem", "", 3, "click"], [1, "dropdown-divider"], ["type", "file", "accept", ".json", "hidden", "", 3, "change"], ["importInput", ""], [1, "bi", "bi-upload"], [1, "bi", "bi-download"], [4, "ngIf", "ngIfElse"], ["darkmode", ""], [1, "bi", "bi-trash3"], ["ngbDropdownItem", "", "href", "https://www.linkedin.com/in/f3d3r1c07r0774/", "target", "_blank"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "bi", "bi-sun"], [1, "bi", "bi-moon"]],
      template: function CardDropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
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
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
            const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](28);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r2.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "input", 7, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CardDropdownComponent_Template_input_change_27_listener($event) {
            return ctx.import($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " Import ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_31_listener() {
            return ctx.export();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Export");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_34_listener() {
            return ctx.toggleDarkmode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, CardDropdownComponent_ng_container_35_Template, 3, 0, "ng-container", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, CardDropdownComponent_ng_template_36_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.resetGame(_r0));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " Reset Game");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "small", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Links");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CardDropdownComponent_Template_button_click_44_listener() {
            return ctx.router.navigate([ctx.EnumScreens.OtherGames]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Other Games");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "About the Author");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getDarkmode())("ngIfElse", _r4);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/syllogimous.constants */ 9182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/syllogimous.service */ 3943);
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
  constructor(sylSrv) {
    this.sylSrv = sylSrv;
    this.TIER_COLORS = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.TIER_COLORS;
    this.TIER_SCORE_RANGES = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.TIER_SCORE_RANGES;
    this.tiers = Object.values(_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.EnumTiers);
    this.Infinity = Infinity;
  }
  static {
    this.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__.SyllogimousService));
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
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx.TIER_COLORS[ctx.sylSrv.tier].bgColor)("color", ctx.TIER_COLORS[ctx.sylSrv.tier].textColor);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbTooltip", _r0)("autoClose", "outside");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.sylSrv.tier, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.sylSrv.score, " pts");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltip, _card_dropdown_card_dropdown_component__WEBPACK_IMPORTED_MODULE_2__.CardDropdownComponent],
      styles: ["[_nghost-%COMP%]     .playcard-header {\n  border-bottom: 1px solid rgba(var(--app-gray_1000), 1);\n  background: rgba(0, 0, 0, 0);\n}\n[_nghost-%COMP%]     .playcard-footer {\n  border-top: 1px solid rgba(var(--app-gray_1000), 1);\n  background: rgba(0, 0, 0, 0);\n}\n[_nghost-%COMP%]     .playcard-header:empty, [_nghost-%COMP%]     .playcard-footer:empty {\n  padding: 0;\n}\n[_nghost-%COMP%]     .playcard-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .subject {\n  font-weight: 700;\n}\n[_nghost-%COMP%]     .is-negated {\n  color: #800000;\n  font-style: italic;\n}\n[_nghost-%COMP%]     .tier-badge {\n  border: 1px solid;\n}\n\n.great-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-evenly;\n  bottom: 100%;\n  font-size: 3.25rem;\n  line-height: 1;\n  text-transform: uppercase;\n  font-weight: 900;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.great-title-version[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  text-transform: lowercase;\n  margin-bottom: 0.25rem;\n}\n\n.playcard[_ngcontent-%COMP%] {\n  width: min(38rem, 100vw);\n  height: min(42rem, 100svh);\n  background-color: rgba(var(--app-gray_0), 1);\n  overflow: hidden;\n}\n\n.playcard-body[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  place-items: center;\n  height: 100%;\n  overflow: auto;\n  padding: 1rem;\n  background-image: linear-gradient(62deg, rgba(142, 197, 252, 0.25) 0%, rgba(224, 195, 252, 0.25) 100%);\n}\n\n@media (max-width: 768px) {\n  .great-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .playcard[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 100svh;\n    border-radius: 0;\n    box-shadow: none;\n    margin: 0;\n    border: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxzREFBQTtFQUNBLDRCQUFBO0FBQVI7QUFHSTtFQUNJLG1EQUFBO0VBQ0EsNEJBQUE7QUFEUjtBQUlJOztFQUVJLFVBQUE7QUFGUjtBQUtJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFIUjtBQU1JO0VBQ0ksZ0JBQUE7QUFKUjtBQU9JO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBTFI7QUFRSTtFQUNJLGlCQUFBO0FBTlI7O0FBVUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFQSjs7QUFVQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQVBKOztBQVVBO0VBQ0ksd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUFQSjs7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0dBQUE7QUFQSjs7QUFVQTtFQUNJO0lBQ0ksYUFBQTtFQVBOO0VBVUU7SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtFQVJOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xyXG4gICAgLnBsYXljYXJkLWhlYWRlciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodmFyKC0tYXBwLWdyYXlfMTAwMCksIDEpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wbGF5Y2FyZC1mb290ZXIge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKHZhcigtLWFwcC1ncmF5XzEwMDApLCAxKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICAucGxheWNhcmQtaGVhZGVyOmVtcHR5LCBcclxuICAgIC5wbGF5Y2FyZC1mb290ZXI6ZW1wdHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsYXljYXJkLXRvb2xiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdWJqZWN0IHtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5pcy1uZWdhdGVkIHtcclxuICAgICAgICBjb2xvcjogIzgwMDAwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpZXItYmFkZ2Uge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZ3JlYXQtdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMy4yNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZ3JlYXQtdGl0bGUtdmVyc2lvbiB7XHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxufVxyXG5cclxuLnBsYXljYXJkIHtcclxuICAgIHdpZHRoOiBtaW4oMzhyZW0sIDEwMHZ3KTtcclxuICAgIGhlaWdodDogbWluKDQycmVtLCAxMDBzdmgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1hcHAtZ3JheV8wKSwgMSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucGxheWNhcmQtYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg2MmRlZywgcmdiYSgxNDIsIDE5NywgMjUyLCAwLjI1KSAwJSwgcmdiYSgyMjQsIDE5NSwgMjUyLCAwLjI1KSAxMDAlKTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5ncmVhdC10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAucGxheWNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBoZWlnaHQ6IDEwMHN2aDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8487:
/*!*******************************************************************************************!*\
  !*** ./src/app/syllogimous/components/modal-level-change/modal-level-change.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 1135:
/*!*******************************************************************************************************!*\
  !*** ./src/app/syllogimous/components/progress-and-performance/progress-and-performance.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyProgressComponent": () => (/* binding */ DailyProgressComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_syllogimous_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/syllogimous.service */ 3943);
/* harmony import */ var _services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/progress-and-performance.service */ 2740);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





function DailyProgressComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Weekly time goal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r0.weeklyProgressPercentage + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("progress-2", ctx_r0.weeklyProgressPercentage > 10)("progress-3", ctx_r0.weeklyProgressPercentage > 20)("progress-4", ctx_r0.weeklyProgressPercentage > 30)("progress-5", ctx_r0.weeklyProgressPercentage > 40)("progress-6", ctx_r0.weeklyProgressPercentage > 50)("progress-7", ctx_r0.weeklyProgressPercentage > 60)("progress-8", ctx_r0.weeklyProgressPercentage > 70)("progress-9", ctx_r0.weeklyProgressPercentage > 80)("progress-10", ctx_r0.weeklyProgressPercentage > 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.weeklyProgressPercentage, " %");
  }
}
function DailyProgressComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7)(2, "div", 8)(3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10)(6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11)(9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r1.trainingUnitPercentage.percentageRight + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.trainingUnitPercentage.right, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r1.trainingUnitPercentage.percentageTimeout + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.trainingUnitPercentage.timeout, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r1.trainingUnitPercentage.percentageWrong + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.trainingUnitPercentage.wrong, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.sylSrv.question.type);
  }
}
class DailyProgressComponent {
  constructor(sylSrv, progressAndPerformanceService) {
    this.sylSrv = sylSrv;
    this.progressAndPerformanceService = progressAndPerformanceService;
    this.feedbackPage = false;
    this.playgroundMode = false;
    this.debug = false;
    this.dailyProgressPercentage = 0;
    this.weeklyProgressPercentage = 0;
    this.trainingUnitPercentage = {
      right: 0,
      timeout: 0,
      wrong: 0,
      percentageRight: 0,
      percentageTimeout: 0,
      percentageWrong: 0
    };
    const today = progressAndPerformanceService.getToday();
    this.dailyProgressPercentage = progressAndPerformanceService.calcDailyProgress(today);
    this.weeklyProgressPercentage = progressAndPerformanceService.calcWeeklyProgress(today);
    this.trainingUnitPercentage = progressAndPerformanceService.calcTrainingUnitPercentages(sylSrv.question.type);
  }
  static {
    this.ɵfac = function DailyProgressComponent_Factory(t) {
      return new (t || DailyProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_0__.SyllogimousService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__.ProgressAndPerformanceService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DailyProgressComponent,
      selectors: [["app-progress-and-performance"]],
      inputs: {
        feedbackPage: "feedbackPage",
        playgroundMode: "playgroundMode",
        debug: "debug"
      },
      decls: 11,
      vars: 23,
      consts: [[1, "progressbars-wrap"], [1, "progressbars"], [1, "progress", "progressbar"], [1, "progress-bar", "progress-1", "position-relative", "overflow-visible"], [1, "me-2"], [1, "progress-label"], [4, "ngIf"], [1, "progress", "progressbar", "partials"], ["ngbTooltip", "This section represents the percentage of questions you have answered correctly for this question type over the last 10 questions of the same type.", "container", "body", 1, "progress-bar", "text-center"], [1, "px-2"], ["ngbTooltip", "This section shows the percentage of questions that timed out before you could answer for this question type over the last 10 questions of the same type.", "container", "body", 1, "progress-bar", "text-center"], ["ngbTooltip", "This section indicates the percentage of questions you answered incorrectly for this question type over the last 10 questions of the same type.", "container", "body", 1, "progress-bar", "text-center", "position-relative", "overflow-visible"]],
      template: function DailyProgressComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Daily time goal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DailyProgressComponent_ng_container_9_Template, 7, 21, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DailyProgressComponent_ng_container_10_Template, 13, 10, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.dailyProgressPercentage + "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("progress-2", ctx.dailyProgressPercentage > 10)("progress-3", ctx.dailyProgressPercentage > 20)("progress-4", ctx.dailyProgressPercentage > 30)("progress-5", ctx.dailyProgressPercentage > 40)("progress-6", ctx.dailyProgressPercentage > 50)("progress-7", ctx.dailyProgressPercentage > 60)("progress-8", ctx.dailyProgressPercentage > 70)("progress-9", ctx.dailyProgressPercentage > 80)("progress-10", ctx.dailyProgressPercentage > 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.dailyProgressPercentage, " %");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.feedbackPage);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.playgroundMode && ctx.feedbackPage && ctx.debug);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTooltip],
      styles: ["[_nghost-%COMP%]     .progressbar .progress-bar {\n  text-align: right;\n}\n\n.progressbars-wrap[_ngcontent-%COMP%] {\n  padding: 8px;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\n\n.progressbars[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n\n.progressbar[_ngcontent-%COMP%] {\n  height: 1.25rem;\n}\n\n.progressbar[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid !important;\n}\n\n.progress-1[_ngcontent-%COMP%] {\n  background-color: #E74C3C;\n}\n\n.progress-2[_ngcontent-%COMP%] {\n  background-color: #E67E22;\n}\n\n.progress-3[_ngcontent-%COMP%] {\n  background-color: #F39C12;\n}\n\n.progress-4[_ngcontent-%COMP%] {\n  background-color: #F1C40F;\n}\n\n.progress-5[_ngcontent-%COMP%] {\n  background-color: #D4AC0D;\n}\n\n.progress-6[_ngcontent-%COMP%] {\n  background-color: #A3CB38;\n}\n\n.progress-7[_ngcontent-%COMP%] {\n  background-color: #82E0AA;\n}\n\n.progress-8[_ngcontent-%COMP%] {\n  background-color: #58D68D;\n}\n\n.progress-9[_ngcontent-%COMP%] {\n  background-color: #2ECC71;\n}\n\n.progress-10[_ngcontent-%COMP%] {\n  background-color: #27AE60;\n}\n\n.progress-label[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 100%;\n  padding-left: 4px;\n  color: rgba(var(--app-gray_1000), 1);\n}\n\n.progressbar.partials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #34A853 !important;\n  color: #F1FFF3;\n}\n.progressbar.partials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #8A8A8A !important;\n  color: #F9F9F9;\n}\n.progressbar.partials[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #B8535E !important;\n  color: #FFEFF0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvY29tcG9uZW50cy9wcm9ncmVzcy1hbmQtcGVyZm9ybWFuY2UvcHJvZ3Jlc3MtYW5kLXBlcmZvcm1hbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7QUFBUjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBSUE7RUFDSSxtQ0FBQTtBQURKOztBQUtBO0VBQ0kseUJBQUE7QUFGSjs7QUFLQTtFQUNJLHlCQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtBQUZKOztBQUtBO0VBQ0kseUJBQUE7QUFGSjs7QUFLQTtFQUNJLHlCQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtBQUZKOztBQUtBO0VBQ0kseUJBQUE7QUFGSjs7QUFLQTtFQUNJLHlCQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtBQUZKOztBQUtBO0VBQ0kseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7QUFGSjs7QUFNSTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtBQUhSO0FBS0k7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7QUFIUjtBQUtJO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0FBSFIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xyXG4gICAgLnByb2dyZXNzYmFyIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZ3Jlc3NiYXJzLXdyYXAge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByb2dyZXNzYmFycyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5wcm9ncmVzc2JhciB7XHJcbiAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbn1cclxuXHJcbi5wcm9ncmVzc2Jhcjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnByb2dyZXNzLTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3NEMzQztcclxufVxyXG5cclxuLnByb2dyZXNzLTIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2N0UyMjtcclxufVxyXG5cclxuLnByb2dyZXNzLTMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzOUMxMjtcclxufVxyXG5cclxuLnByb2dyZXNzLTQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxQzQwRjtcclxufVxyXG5cclxuLnByb2dyZXNzLTUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q0QUMwRDtcclxufVxyXG5cclxuLnByb2dyZXNzLTYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0EzQ0IzODtcclxufVxyXG5cclxuLnByb2dyZXNzLTcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgyRTBBQTtcclxufVxyXG5cclxuLnByb2dyZXNzLTgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4RDY4RDtcclxufVxyXG5cclxuLnByb2dyZXNzLTkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFQ0M3MTtcclxufVxyXG5cclxuLnByb2dyZXNzLTEwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyN0FFNjA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBjb2xvcjogcmdiYSh2YXIoLS1hcHAtZ3JheV8xMDAwKSwgMSk7XHJcbn1cclxuXHJcbi5wcm9ncmVzc2Jhci5wYXJ0aWFscyB7XHJcbiAgICA+IDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNEE4NTMgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI0YxRkZGMztcclxuICAgIH1cclxuICAgID4gOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhBOEE4QSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjRjlGOUY5O1xyXG4gICAgfVxyXG4gICAgPiA6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjg1MzVFICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNGRkVGRjA7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6376:
/*!******************************************************************!*\
  !*** ./src/app/syllogimous/constants/local-storage.constants.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
/* harmony import */ var _syllogimous_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syllogimous.constants */ 9182);


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
const LS_PROPS = [LS_HISTORY, LS_TIMER, LS_GAME_MODE, LS_DAILY_PROGRESS, LS_PG_SETTINGS, LS_DAILY_GOAL, LS_WEEKLY_GOAL, LS_TRAINING_UNIT_LENGTH, LS_PREMISES_UP_THRESHOLD, LS_PREMISES_DOWN_THRESHOLD, LS_SCORE];
for (const screen of Object.values(_syllogimous_constants__WEBPACK_IMPORTED_MODULE_1__.EnumScreens)) {
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnumArrangements": () => (/* binding */ EnumArrangements),
/* harmony export */   "EnumQuestionType": () => (/* binding */ EnumQuestionType),
/* harmony export */   "FORMS": () => (/* binding */ FORMS),
/* harmony export */   "NOUNS": () => (/* binding */ NOUNS),
/* harmony export */   "NUMBER_WORDS": () => (/* binding */ NUMBER_WORDS),
/* harmony export */   "STRINGS": () => (/* binding */ STRINGS),
/* harmony export */   "VALID_RULES": () => (/* binding */ VALID_RULES)
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
const STRINGS = ["QAW", "QAR", "QAT", "QAP", "QAS", "QAD", "QAF", "QAG", "QAK", "QAL", "QAZ", "QAX", "QAC", "QAV", "QAB", "QAN", "QAM", "QEW", "QER", "QET", "QEP", "QES", "QED", "QEF", "QEG", "QEK", "QEL", "QEZ", "QEX", "QEC", "QEV", "QEB", "QEN", "QEM", "QIW", "QIR", "QIT", "QIP", "QIS", "QID", "QIF", "QIG", "QIK", "QIL", "QIZ", "QIX", "QIC", "QIV", "QIB", "QIN", "QIM", "QOW", "QOR", "QOT", "QOP", "QOS", "QOD", "QOF", "QOG", "QOK", "QOL", "QOZ", "QOX", "QOC", "QOV", "QOB", "QON", "QOM", "QUW", "QUR", "QUT", "QUP", "QUS", "QUD", "QUF", "QUG", "QUK", "QUL", "QUZ", "QUX", "QUC", "QUV", "QUB", "QUN", "QUM", "WAQ", "WAR", "WAT", "WAP", "WAS", "WAD", "WAF", "WAG", "WAK", "WAL", "WAZ", "WAX", "WAC", "WAV", "WAB", "WAN", "WAM", "WEQ", "WER", "WET", "WEP", "WES", "WED", "WEF", "WEG", "WEK", "WEL", "WEZ", "WEX", "WEC", "WEV", "WEB", "WEN", "WEM", "WIQ", "WIR", "WIT", "WIP", "WIS", "WID", "WIF", "WIG", "WIK", "WIL", "WIZ", "WIX", "WIC", "WIV", "WIB", "WIN", "WIM", "WOQ", "WOR", "WOT", "WOP", "WOS", "WOD", "WOF", "WOG", "WOK", "WOL", "WOZ", "WOX", "WOC", "WOV", "WOB", "WON", "WOM", "WUQ", "WUR", "WUT", "WUP", "WUS", "WUD", "WUF", "WUG", "WUK", "WUL", "WUZ", "WUX", "WUC", "WUV", "WUB", "WUN", "WUM", "RAQ", "RAW", "RAT", "RAP", "RAS", "RAD", "RAF", "RAG", "RAK", "RAL", "RAZ", "RAX", "RAC", "RAV", "RAB", "RAN", "RAM", "REQ", "REW", "RET", "REP", "RES", "RED", "REF", "REG", "REK", "REL", "REZ", "REX", "REC", "REV", "REB", "REN", "REM", "RIQ", "RIW", "RIT", "RIP", "RIS", "RID", "RIF", "RIG", "RIK", "RIL", "RIZ", "RIX", "RIC", "RIV", "RIB", "RIN", "RIM", "ROQ", "ROW", "ROT", "ROP", "ROS", "ROD", "ROF", "ROG", "ROK", "ROL", "ROZ", "ROX", "ROC", "ROV", "ROB", "RON", "ROM", "RUQ", "RUW", "RUT", "RUP", "RUS", "RUD", "RUF", "RUG", "RUK", "RUL", "RUZ", "RUX", "RUC", "RUV", "RUB", "RUN", "RUM", "TAQ", "TAW", "TAR", "TAP", "TAS", "TAD", "TAF", "TAG", "TAK", "TAL", "TAZ", "TAX", "TAC", "TAV", "TAB", "TAN", "TAM", "TEQ", "TEW", "TER", "TEP", "TES", "TED", "TEF", "TEG", "TEK", "TEL", "TEZ", "TEX", "TEC", "TEV", "TEB", "TEN", "TEM", "TIQ", "TIW", "TIR", "TIP", "TIS", "TID", "TIF", "TIG", "TIK", "TIL", "TIZ", "TIX", "TIC", "TIV", "TIB", "TIN", "TIM", "TOQ", "TOW", "TOR", "TOP", "TOS", "TOD", "TOF", "TOG", "TOK", "TOL", "TOZ", "TOX", "TOC", "TOV", "TOB", "TON", "TOM", "TUQ", "TUW", "TUR", "TUP", "TUS", "TUD", "TUF", "TUG", "TUK", "TUL", "TUZ", "TUX", "TUC", "TUV", "TUB", "TUN", "TUM", "PAQ", "PAW", "PAR", "PAT", "PAS", "PAD", "PAF", "PAG", "PAK", "PAL", "PAZ", "PAX", "PAC", "PAV", "PAB", "PAN", "PAM", "PEQ", "PEW", "PER", "PET", "PES", "PED", "PEF", "PEG", "PEK", "PEL", "PEZ", "PEX", "PEC", "PEV", "PEB", "PEN", "PEM", "PIQ", "PIW", "PIR", "PIT", "PIS", "PID", "PIF", "PIG", "PIK", "PIL", "PIZ", "PIX", "PIC", "PIV", "PIB", "PIN", "PIM", "POQ", "POW", "POR", "POT", "POS", "POD", "POF", "POG", "POK", "POL", "POZ", "POX", "POC", "POV", "POB", "PON", "POM", "PUQ", "PUW", "PUR", "PUT", "PUS", "PUD", "PUF", "PUG", "PUK", "PUL", "PUZ", "PUX", "PUC", "PUV", "PUB", "PUN", "PUM", "SAQ", "SAW", "SAR", "SAT", "SAP", "SAD", "SAF", "SAG", "SAK", "SAL", "SAZ", "SAX", "SAC", "SAV", "SAB", "SAN", "SAM", "SEQ", "SEW", "SER", "SET", "SEP", "SED", "SEF", "SEG", "SEK", "SEL", "SEZ", "SEX", "SEC", "SEV", "SEB", "SEN", "SEM", "SIQ", "SIW", "SIR", "SIT", "SIP", "SID", "SIF", "SIG", "SIK", "SIL", "SIZ", "SIX", "SIC", "SIV", "SIB", "SIN", "SIM", "SOQ", "SOW", "SOR", "SOT", "SOP", "SOD", "SOF", "SOG", "SOK", "SOL", "SOZ", "SOX", "SOC", "SOV", "SOB", "SON", "SOM", "SUQ", "SUW", "SUR", "SUT", "SUP", "SUD", "SUF", "SUG", "SUK", "SUL", "SUZ", "SUX", "SUC", "SUV", "SUB", "SUN", "SUM", "DAQ", "DAW", "DAR", "DAT", "DAP", "DAS", "DAF", "DAG", "DAK", "DAL", "DAZ", "DAX", "DAC", "DAV", "DAB", "DAN", "DAM", "DEQ", "DEW", "DER", "DET", "DEP", "DES", "DEF", "DEG", "DEK", "DEL", "DEZ", "DEX", "DEC", "DEV", "DEB", "DEN", "DEM", "DIQ", "DIW", "DIR", "DIT", "DIP", "DIS", "DIF", "DIG", "DIK", "DIL", "DIZ", "DIX", "DIC", "DIV", "DIB", "DIN", "DIM", "DOQ", "DOW", "DOR", "DOT", "DOP", "DOS", "DOF", "DOG", "DOK", "DOL", "DOZ", "DOX", "DOC", "DOV", "DOB", "DON", "DOM", "DUQ", "DUW", "DUR", "DUT", "DUP", "DUS", "DUF", "DUG", "DUK", "DUL", "DUZ", "DUX", "DUC", "DUV", "DUB", "DUN", "DUM", "FAQ", "FAW", "FAR", "FAT", "FAP", "FAS", "FAD", "FAG", "FAK", "FAL", "FAZ", "FAX", "FAC", "FAV", "FAB", "FAN", "FAM", "FEQ", "FEW", "FER", "FET", "FEP", "FES", "FED", "FEG", "FEK", "FEL", "FEZ", "FEX", "FEC", "FEV", "FEB", "FEN", "FEM", "FIQ", "FIW", "FIR", "FIT", "FIP", "FIS", "FID", "FIG", "FIK", "FIL", "FIZ", "FIX", "FIC", "FIV", "FIB", "FIN", "FIM", "FOQ", "FOW", "FOR", "FOT", "FOP", "FOS", "FOD", "FOG", "FOK", "FOL", "FOZ", "FOX", "FOC", "FOV", "FOB", "FON", "FOM", "FUQ", "FUW", "FUR", "FUT", "FUP", "FUS", "FUD", "FUG", "FUK", "FUL", "FUZ", "FUX", "FUC", "FUV", "FUB", "FUN", "FUM", "GAQ", "GAW", "GAR", "GAT", "GAP", "GAS", "GAD", "GAF", "GAK", "GAL", "GAZ", "GAX", "GAC", "GAV", "GAB", "GAN", "GAM", "GEQ", "GEW", "GER", "GET", "GEP", "GES", "GED", "GEF", "GEK", "GEL", "GEZ", "GEX", "GEC", "GEV", "GEB", "GEN", "GEM", "GIQ", "GIW", "GIR", "GIT", "GIP", "GIS", "GID", "GIF", "GIK", "GIL", "GIZ", "GIX", "GIC", "GIV", "GIB", "GIN", "GIM", "GOQ", "GOW", "GOR", "GOT", "GOP", "GOS", "GOD", "GOF", "GOK", "GOL", "GOZ", "GOX", "GOC", "GOV", "GOB", "GON", "GOM", "GUQ", "GUW", "GUR", "GUT", "GUP", "GUS", "GUD", "GUF", "GUK", "GUL", "GUZ", "GUX", "GUC", "GUV", "GUB", "GUN", "GUM", "KAQ", "KAW", "KAR", "KAT", "KAP", "KAS", "KAD", "KAF", "KAG", "KAL", "KAZ", "KAX", "KAC", "KAV", "KAB", "KAN", "KAM", "KEQ", "KEW", "KER", "KET", "KEP", "KES", "KED", "KEF", "KEG", "KEL", "KEZ", "KEX", "KEC", "KEV", "KEB", "KEN", "KEM", "KIQ", "KIW", "KIR", "KIT", "KIP", "KIS", "KID", "KIF", "KIG", "KIL", "KIZ", "KIX", "KIC", "KIV", "KIB", "KIN", "KIM", "KOQ", "KOW", "KOR", "KOT", "KOP", "KOS", "KOD", "KOF", "KOG", "KOL", "KOZ", "KOX", "KOC", "KOV", "KOB", "KON", "KOM", "KUQ", "KUW", "KUR", "KUT", "KUP", "KUS", "KUD", "KUF", "KUG", "KUL", "KUZ", "KUX", "KUC", "KUV", "KUB", "KUN", "KUM", "LAQ", "LAW", "LAR", "LAT", "LAP", "LAS", "LAD", "LAF", "LAG", "LAK", "LAZ", "LAX", "LAC", "LAV", "LAB", "LAN", "LAM", "LEQ", "LEW", "LER", "LET", "LEP", "LES", "LED", "LEF", "LEG", "LEK", "LEZ", "LEX", "LEC", "LEV", "LEB", "LEN", "LEM", "LIQ", "LIW", "LIR", "LIT", "LIP", "LIS", "LID", "LIF", "LIG", "LIK", "LIZ", "LIX", "LIC", "LIV", "LIB", "LIN", "LIM", "LOQ", "LOW", "LOR", "LOT", "LOP", "LOS", "LOD", "LOF", "LOG", "LOK", "LOZ", "LOX", "LOC", "LOV", "LOB", "LON", "LOM", "LUQ", "LUW", "LUR", "LUT", "LUP", "LUS", "LUD", "LUF", "LUG", "LUK", "LUZ", "LUX", "LUC", "LUV", "LUB", "LUN", "LUM", "ZAQ", "ZAW", "ZAR", "ZAT", "ZAP", "ZAS", "ZAD", "ZAF", "ZAG", "ZAK", "ZAL", "ZAX", "ZAC", "ZAV", "ZAB", "ZAN", "ZAM", "ZEQ", "ZEW", "ZER", "ZET", "ZEP", "ZES", "ZED", "ZEF", "ZEG", "ZEK", "ZEL", "ZEX", "ZEC", "ZEV", "ZEB", "ZEN", "ZEM", "ZIQ", "ZIW", "ZIR", "ZIT", "ZIP", "ZIS", "ZID", "ZIF", "ZIG", "ZIK", "ZIL", "ZIX", "ZIC", "ZIV", "ZIB", "ZIN", "ZIM", "ZOQ", "ZOW", "ZOR", "ZOT", "ZOP", "ZOS", "ZOD", "ZOF", "ZOG", "ZOK", "ZOL", "ZOX", "ZOC", "ZOV", "ZOB", "ZON", "ZOM", "ZUQ", "ZUW", "ZUR", "ZUT", "ZUP", "ZUS", "ZUD", "ZUF", "ZUG", "ZUK", "ZUL", "ZUX", "ZUC", "ZUV", "ZUB", "ZUN", "ZUM", "XAQ", "XAW", "XAR", "XAT", "XAP", "XAS", "XAD", "XAF", "XAG", "XAK", "XAL", "XAZ", "XAC", "XAV", "XAB", "XAN", "XAM", "XEQ", "XEW", "XER", "XET", "XEP", "XES", "XED", "XEF", "XEG", "XEK", "XEL", "XEZ", "XEC", "XEV", "XEB", "XEN", "XEM", "XIQ", "XIW", "XIR", "XIT", "XIP", "XIS", "XID", "XIF", "XIG", "XIK", "XIL", "XIZ", "XIC", "XIV", "XIB", "XIN", "XIM", "XOQ", "XOW", "XOR", "XOT", "XOP", "XOS", "XOD", "XOF", "XOG", "XOK", "XOL", "XOZ", "XOC", "XOV", "XOB", "XON", "XOM", "XUQ", "XUW", "XUR", "XUT", "XUP", "XUS", "XUD", "XUF", "XUG", "XUK", "XUL", "XUZ", "XUC", "XUV", "XUB", "XUN", "XUM", "CAQ", "CAW", "CAR", "CAT", "CAP", "CAS", "CAD", "CAF", "CAG", "CAK", "CAL", "CAZ", "CAX", "CAV", "CAB", "CAN", "CAM", "CEQ", "CEW", "CER", "CET", "CEP", "CES", "CED", "CEF", "CEG", "CEK", "CEL", "CEZ", "CEX", "CEV", "CEB", "CEN", "CEM", "CIQ", "CIW", "CIR", "CIT", "CIP", "CIS", "CID", "CIF", "CIG", "CIK", "CIL", "CIZ", "CIX", "CIV", "CIB", "CIN", "CIM", "COQ", "COW", "COR", "COT", "COP", "COS", "COD", "COF", "COG", "COK", "COL", "COZ", "COX", "COV", "COB", "CON", "COM", "CUQ", "CUW", "CUR", "CUT", "CUP", "CUS", "CUD", "CUF", "CUG", "CUK", "CUL", "CUZ", "CUX", "CUV", "CUB", "CUN", "CUM", "VAQ", "VAW", "VAR", "VAT", "VAP", "VAS", "VAD", "VAF", "VAG", "VAK", "VAL", "VAZ", "VAX", "VAC", "VAB", "VAN", "VAM", "VEQ", "VEW", "VER", "VET", "VEP", "VES", "VED", "VEF", "VEG", "VEK", "VEL", "VEZ", "VEX", "VEC", "VEB", "VEN", "VEM", "VIQ", "VIW", "VIR", "VIT", "VIP", "VIS", "VID", "VIF", "VIG", "VIK", "VIL", "VIZ", "VIX", "VIC", "VIB", "VIN", "VIM", "VOQ", "VOW", "VOR", "VOT", "VOP", "VOS", "VOD", "VOF", "VOG", "VOK", "VOL", "VOZ", "VOX", "VOC", "VOB", "VON", "VOM", "VUQ", "VUW", "VUR", "VUT", "VUP", "VUS", "VUD", "VUF", "VUG", "VUK", "VUL", "VUZ", "VUX", "VUC", "VUB", "VUN", "VUM", "BAQ", "BAW", "BAR", "BAT", "BAP", "BAS", "BAD", "BAF", "BAG", "BAK", "BAL", "BAZ", "BAX", "BAC", "BAV", "BAN", "BAM", "BEQ", "BEW", "BER", "BET", "BEP", "BES", "BED", "BEF", "BEG", "BEK", "BEL", "BEZ", "BEX", "BEC", "BEV", "BEN", "BEM", "BIQ", "BIW", "BIR", "BIT", "BIP", "BIS", "BID", "BIF", "BIG", "BIK", "BIL", "BIZ", "BIX", "BIC", "BIV", "BIN", "BIM", "BOQ", "BOW", "BOR", "BOT", "BOP", "BOS", "BOD", "BOF", "BOG", "BOK", "BOL", "BOZ", "BOX", "BOC", "BOV", "BON", "BOM", "BUQ", "BUW", "BUR", "BUT", "BUP", "BUS", "BUD", "BUF", "BUG", "BUK", "BUL", "BUZ", "BUX", "BUC", "BUV", "BUN", "BUM", "NAQ", "NAW", "NAR", "NAT", "NAP", "NAS", "NAD", "NAF", "NAG", "NAK", "NAL", "NAZ", "NAX", "NAC", "NAV", "NAB", "NAM", "NEQ", "NEW", "NER", "NET", "NEP", "NES", "NED", "NEF", "NEG", "NEK", "NEL", "NEZ", "NEX", "NEC", "NEV", "NEB", "NEM", "NIQ", "NIW", "NIR", "NIT", "NIP", "NIS", "NID", "NIF", "NIG", "NIK", "NIL", "NIZ", "NIX", "NIC", "NIV", "NIB", "NIM", "NOQ", "NOW", "NOR", "NOT", "NOP", "NOS", "NOD", "NOF", "NOG", "NOK", "NOL", "NOZ", "NOX", "NOC", "NOV", "NOB", "NOM", "NUQ", "NUW", "NUR", "NUT", "NUP", "NUS", "NUD", "NUF", "NUG", "NUK", "NUL", "NUZ", "NUX", "NUC", "NUV", "NUB", "NUM", "MAQ", "MAW", "MAR", "MAT", "MAP", "MAS", "MAD", "MAF", "MAG", "MAK", "MAL", "MAZ", "MAX", "MAC", "MAV", "MAB", "MAN", "MEQ", "MEW", "MER", "MET", "MEP", "MES", "MED", "MEF", "MEG", "MEK", "MEL", "MEZ", "MEX", "MEC", "MEV", "MEB", "MEN", "MIQ", "MIW", "MIR", "MIT", "MIP", "MIS", "MID", "MIF", "MIG", "MIK", "MIL", "MIZ", "MIX", "MIC", "MIV", "MIB", "MIN", "MOQ", "MOW", "MOR", "MOT", "MOP", "MOS", "MOD", "MOF", "MOG", "MOK", "MOL", "MOZ", "MOX", "MOC", "MOV", "MOB", "MON", "MUQ", "MUW", "MUR", "MUT", "MUP", "MUS", "MUD", "MUF", "MUG", "MUK", "MUL", "MUZ", "MUX", "MUC", "MUV", "MUB", "MUN"];
const VALID_RULES = ["0001", "1011", "0221", "1231", "0021", "1031", "0112", "1012", "1232", "0332", "0132", "1032", "0223", "2023", "3033", "1233", "0023", "1033", "0114", "2024", "1234", "0134", "1034", "0024"];
const FORMS = [['All <span class="subject">$</span> is <span class="subject">$</span>', 'No <span class="subject">$</span> is <span class="subject">$</span>', 'Some <span class="subject">$</span> is <span class="subject">$</span>', 'Some <span class="subject">$</span> is not <span class="subject">$</span>'], ['<span class="is-negated">No</span> <span class="subject">$</span> is <span class="subject">$</span>', '<span class="is-negated">All</span> <span class="subject">$</span> is <span class="subject">$</span>', 'Some <span class="subject">$</span> <span class="is-negated">is not</span> <span class="subject">$</span>', 'Some <span class="subject">$</span> <span class="is-negated">is</span> <span class="subject">$</span>']];
const NOUNS = ["Acrobat", "Afro", "Albatross", "Algae", "Alligator", "Almond", "Alpaca", "Amber", "Ambulance", "Amethyst", "Amulet", "Andes", "Ankle", "Anklet", "Ant", "Antlers", "Anvil", "Apartment", "Apple", "Apricot", "Aquarium", "Arch", "Architect", "Arena", "Armadillo", "Armchair", "Armor", "Arrow", "Artichoke", "Artist", "Asteroid", "Astronaut", "Athlete", "Atom", "Attic", "Aubergine", "Aunt", "Avocado", "Baboon", "Baby", "Back", "Backpack", "Badge", "Badger", "Bag", "Bagel", "Bakery", "Baklava", "Balcony", "Bald", "Ball", "Ballerina", "Balloon", "Bamboo", "Banana", "Bandage", "Bandana", "Banjo", "Bank", "Banner", "Bar", "Barbecue", "Barbell", "Barbie", "Barge", "Barley", "Barn", "Barracuda", "Barrel", "Baseball", "Basement", "Basin", "Basket", "Basketball", "Bass", "Bassoon", "Bat", "Bathrobe", "Bathroom", "Bathtub", "Bayonet", "Beach", "Bead", "Beanbag", "Beanie", "Beans", "Beanstalk", "Bear", "Beard", "Beast", "Beaver", "Bed", "Bedbug", "Bedroom", "Beehive", "Beer", "Beet", "Beetle", "Bell", "Belt", "Bench", "Beret", "Bermudas", "Berry", "Bicycle", "Bigfoot", "Bike", "Bikini", "Bill", "Binoculars", "Birch", "Bird", "Birdcage", "Biscotti", "Biscuit", "Bison", "Black", "Blackberry", "Blackboard", "Blade", "Blazer", "Blender", "Blimp", "Blind", "Block", "Blouse", "Blowfish", "Blueberry", "Blush", "Boa", "Board", "Boardwalk", "Boat", "Bobcat", "Bobsled", "Body", "Bog", "Boiler", "Bolt", "Bomb", "Bonbon", "Bones", "Bonsai", "Book", "Bookcase", "Bookend", "Booklet", "Bookstore", "Boombox", "Booster", "Booth", "Boots", "Booty", "Boulevard", "Bow", "Bowling", "Box", "Boxer", "Boy", "Brace", "Bracelet", "Brain", "Brake", "Branch", "Brandy", "Brass", "Brassiere", "Brave", "Brazier", "Bread", "Breakfast", "Brick", "Bridal", "Bridge", "Briefcase", "Broadway", "Broccoli", "Broker", "Broom", "Broth", "Brother", "Brunette", "Brush", "Bubble", "Bucket", "Buckles", "Bud", "Buffalo", "Buffet", "Builder", "Bulb", "Bulldozer", "Bullet", "Bumper", "Bun", "Buoy", "Burger", "Burrito", "Bus", "Bush", "Butcher", "Butler", "Butter", "Buttercup", "Button", "Buttons", "Cab", "Cabbage", "Cabin", "Cabinet", "Cable", "Cacao", "Cactus", "Cadet", "Cafe", "Cage", "Cake", "Calculator", "Calendar", "Calf", "Caliber", "Call", "Camcorder", "Camel", "Camera", "Camp", "Campfire", "Can", "Canal", "Candle", "Candy", "Cane", "Cannoli", "Canoe", "Canon", "Canopy", "Canvas", "Canyon", "Cap", "Cape", "Cappuccino", "Captain", "Car", "Carbon", "Card", "Cardboard", "Cardigan", "Cargo", "Carp", "Carpenter", "Carpet", "Carriage", "Carrot", "Cart", "Cartoon", "Cartridge", "Cascade", "Case", "Cash", "Cashier", "Casino", "Casket", "Cast", "Castle", "Cat", "Catalog", "Catcher", "Caterpillar", "Cauldron", "Cave", "Caviar", "Ceiling", "Cell", "Cellar", "Cello", "Cement", "Cemetery", "Center", "Ceramic", "Cereal", "Certificate", "Chain", "Chair", "Chalk", "Chamber", "Chameleon", "Champagne", "Championship", "Chandelier", "Changer", "Channel", "Chapel", "Charger", "Chariot", "Chateau", "Check", "Checkbook", "Cheek", "Cheeks", "Cheer", "Cheese", "Cheetah", "Chef", "Cherry", "Chest", "Chestnut", "Chick", "Chicken", "Child", "Children", "Chili", "Chimney", "Chin", "China", "Chip", "Chips", "Chisel", "Chocolate", "Choir", "Choker", "Chop", "Chopper", "Chord", "Christmas", "Chrome", "Chuckle", "Church", "Cider", "Cigar", "Cinema", "Circle", "Circus", "Citadel", "Citizen", "City", "Clam", "Clamp", "Clap", "Clarinet", "Class", "Classroom", "Claw", "Clay", "Cleaner", "Clearing", "Clerk", "Click", "Client", "Cliff", "Climber", "Clip", "Clock", "Closet", "Cloth", "Clothes", "Cloud", "Club", "Coach", "Coal", "Coast", "Coat", "Cobalt", "Cobra", "Cockpit", "Cocktail", "Coconut", "Coffee", "Coil", "Coin", "Collar", "Collection", "College", "Colonel", "Colony", "Column", "Comb", "Comedy", "Commander", "Commission", "Computer", "Concert", "Condor", "Cone", "Confetti", "Container", "Contest", "Continent", "Cook", "Cooker", "Cookie", "Cookware", "Cooler", "Copper", "Copy", "Coral", "Cord", "Cork", "Corn", "Corner", "Corral", "Costume", "Cottage", "Cotton", "Couch", "Cougar", "Cousin", "Cow", "Cowboy", "Crab", "Crack", "Cracker", "Crane", "Crate", "Crater", "Cravat", "Crayon", "Creature", "Creme", "Crest", "Crib", "Cricket", "Crisp", "Critter", "Crocodile", "Croissant", "Cross", "Crossbow", "Crow", "Crown", "Crucible", "Crumb", "Crust", "Crystal", "Cucumber", "Cuff", "Cup", "Cupcake", "Currency", "Curtain", "Cushion", "Cymbal", "Daffodil", "Dagger", "Dahlia", "Daisy", "Dam", "Dancer", "Dandelion", "Dart", "Date", "Dates", "Daughter", "Dealer", "Deck", "Decoder", "Decoy", "Deer", "Demon", "Den", "Denim", "Dentist", "Deodorant", "Deputy", "Desert", "Designer", "Desk", "Dessert", "Detective", "Devil", "Diamond", "Diaper", "Diary", "Dice", "Dictator", "Digger", "Dime", "Diner", "Dinghy", "Dinosaur", "Diploma", "Diplomat", "Director", "Dirt", "Disco", "Dish", "Disk", "Diver", "Diving", "Djinn", "Dock", "Doctor", "Doe", "Dog", "Doll", "Dollar", "Dolphin", "Donkey", "Donor", "Door", "Doorknob", "Doorstep", "Dorm", "Dot", "Dough", "Dove", "Dragon", "Dragonfly", "Drain", "Drape", "Drawer", "Dress", "Dresser", "Drill", "Drink", "Driver", "Driveway", "Drone", "Drop", "Drug", "Drum", "Drummer", "Duck", "Duct", "Duel", "Dumbbell", "Dump", "Dune", "Dynamite", "Eagle", "Ear", "Earlobe", "Earn", "Earrings", "Ears", "Eclipse", "Eel", "Egg", "Eggplant", "Elbow", "Elder", "Elephant", "Elevator", "Elf", "Elk", "Ellipse", "Escort", "Eye", "Eyebrow", "Eyelid", "Factory", "Fairy", "Fan", "Fang", "Farm", "Farmer", "Fat", "Father", "Faucet", "Fax", "Feast", "Feed", "Fence", "Ferry", "Field", "Fig", "Fight", "Figure", "Film", "Finger", "Fire", "Firearm", "Fireplace", "Firework", "Firm", "Fish", "Fisherman", "Fist", "Flag", "Flame", "Flamingo", "Flannel", "Flash", "Flat", "Flea", "Fleet", "Flock", "Floor", "Florist", "Flour", "Flower", "Flute", "Fly", "Foam", "Fog", "Foil", "Fondue", "Food", "Foot", "Football", "Footprint", "Ford", "Forest", "Fork", "Fortress", "Fossil", "Fountain", "Fox", "Fracture", "France", "Freeze", "Fridge", "Frog", "Front", "Frost", "Fruit", "Fry", "Fuel", "Fur", "Furniture", "Galaxy", "Gander", "Gang", "Garage", "Garb", "Garden", "Garland", "Garlic", "Garment", "Gas", "Gasket", "Gate", "Gateway", "Gauge", "Gear", "Gecko", "Gel", "Gem", "Geranium", "Gesture", "Ghost", "Giant", "Gift", "Ginger", "Giraffe", "Girl", "Glass", "Glasses", "Glen", "Gloves", "Glue", "Gnat", "Goat", "Gold", "Goldfish", "Golf", "Gondola", "Gong", "Goose", "Gopher", "Gorilla", "Gothic", "Governor", "Graffiti", "Grains", "Granite", "Grape", "Grapes", "Graph", "Grass", "Grasshopper", "Gravy", "Grease", "Great", "Green", "Greenhouse", "Grid", "Grin", "Grocery", "Guitar", "Gull", "Gum", "Gun", "Gym", "Gymnast", "Hair", "Haircut", "Ham", "Hamburger", "Hammer", "Hand", "Handbag", "Handle", "Hangar", "Hanger", "Harbor", "Harpoon", "Hat", "Hatch", "Hatchet", "Hawk", "Hay", "Haze", "Head", "Headband", "Headlight", "Headline", "Headphone", "Headquarters", "Hearse", "Heart", "Heater", "Heels", "Helicopter", "Helmet", "Hen", "Herb", "Herbs", "Herring", "Hide", "Highway", "Hike", "Hill", "Hinge", "Hippopotamus", "Hit", "Hive", "Hockey", "Hog", "Hole", "Home", "Honey", "Hood", "Hoof", "Hook", "Horn", "Horse", "Hose", "Hospital", "Hostel", "Hostess", "Hot", "Hotel", "Hour", "Housing", "Howl", "Hub", "Huddle", "Hull", "Human", "Hummingbird", "Hump", "Hurricane", "Hut", "Hydrant", "Ice", "Iceberg", "Icecream", "Iguana", "Impala", "Inbox", "India", "Indigo", "Infant", "Injection", "Ink", "Insect", "Inspector", "Interpreter", "Invoice", "Iris", "Iron", "Island", "Jacket", "Jackpot", "Jade", "Jaguar", "Jail", "Jam", "Jar", "Jasmine", "Jaw", "Jazz", "Jeans", "Jeep", "Jelly", "Jellyfish", "Jet", "Jewel", "Jewelry", "Jockey", "Jog", "Journal", "Jug", "Juggler", "Juice", "Juicer", "Jump", "Jumper", "Jungle", "Kale", "Kangaroo", "Kayak", "Keel", "Kelp", "Kettle", "Key", "Keyboard", "Kick", "Kid", "Kidney", "King", "Kiss", "Kitchen", "Kite", "Kitten", "Kiwi", "Knee", "Knife", "Knight", "Knob", "Knot", "Koala", "Ladder", "Lady", "Ladybug", "Lake", "Lamb", "Lamp", "Lantern", "Laptop", "Laser", "Laundry", "Lava", "Lavender", "Lawn", "Lawyer", "Lead", "Leaf", "League", "Leash", "Leather", "Leave", "Leaves", "Ledge", "Leech", "Leg", "Legging", "Leggings", "Lemon", "Lemonade", "Lens", "Leopard", "Letter", "Lever", "Library", "Lid", "Light", "Lighthouse", "Lightning", "Lilac", "Lily", "Lime", "Liner", "Lion", "Lip", "Lips", "Litter", "Lizard", "Llama", "Loaf", "Lobster", "Lock", "Locomotive", "Lodge", "Lollipop", "Luggage", "Lunchbox", "Lung", "Lynx", "Lyre", "Lyric", "Machine", "Magician", "Magnet", "Magnolia", "Mail", "Mailbox", "Makeup", "Man", "Mango", "Manhole", "Mansion", "Map", "Maple", "Marble", "Mars", "Martian", "Mask", "Matrix", "Mattress", "Mature", "Meadow", "Meal", "Measure", "Meat", "Mechanic", "Medal", "Medicine", "Melon", "Menu", "Mercury", "Meteor", "Meter", "Microphone", "Microscope", "Microwave", "Mile", "Milk", "Mill", "Miller", "Miss", "Mist", "Mister", "Mistress", "Mitt", "Mitten", "Mixer", "Mobile", "Mock", "Mole", "Molecule", "Money", "Monopoly", "Monument", "Moon", "Moose", "Mop", "Mosaic", "Mosque", "Mosquito", "Moss", "Mother", "Motor", "Motorcycle", "Mountain", "Mouse", "Moustache", "Mouth", "Movie", "Mud", "Mug", "Mulch", "Muscle", "Museum", "Mushroom", "Musician", "Nail", "Napkin", "Nautilus", "Navy", "Neck", "Necklace", "Needle", "Nest", "Newspaper", "Night", "Ninja", "Noodles", "North", "Nose", "Notebook", "Nun", "Nurse", "Nut", "Nylon", "Oar", "Oat", "Oboe", "Ocean", "Octopus", "Oil", "Olive", "Omelet", "Onion", "Orange", "Orchid", "Organ", "Ornament", "Ostrich", "Otter", "Oval", "Oven", "Owl", "Ox", "Oyster", "Pad", "Pail", "Paint", "Painter", "Palace", "Palette", "Palm", "Pan", "Pancake", "Panda", "Panel", "Pansy", "Panther", "Pants", "Parachute", "Parfume", "Park", "Parrot", "Passport", "Pasta", "Paste", "Pastor", "Pastry", "Paw", "Pawn", "Peacock", "Peanut", "Pear", "Peasant", "Pedal", "Pedestrian", "Pediatrician", "Peel", "Pen", "Pencil", "Pendant", "Penguin", "Penny", "Pepper", "Pest", "Pet", "Pharmacist", "Pharmacy", "Phone", "Photo", "Piano", "Pickle", "Pie", "Pier", "Pig", "Pigeon", "Pigment", "Pike", "Pilgrim", "Pill", "Pillar", "Pillow", "Pin", "Pineapple", "Pink", "Pipe", "Pirate", "Pitcher", "Pizza", "Plan", "Plane", "Plant", "Plasma", "Plastic", "Plate", "Plates", "Plow", "Plumber", "Plume", "Pocket", "Poker", "Police", "Policeman", "Polish", "Politician", "Polo", "Pond", "Pony", "Pool", "Pop", "Popcorn", "Pope", "Poppy", "Porch", "Pork", "Post", "Postman", "Pot", "Potato", "Pottery", "Pouch", "Pound", "Powder", "Prairie", "Pregnancy", "Pretzel", "Prey", "Price", "Priest", "Print", "Printer", "Prism", "Prison", "Produce", "Projection", "Promenade", "Propeller", "Protein", "Pub", "Puddle", "Puff", "Pulley", "Pump", "Pumpkin", "Punch", "Pupil", "Puppet", "Puppy", "Purple", "Purse", "Push", "Puzzle", "Pyramid", "Python", "Quartz", "Quiz", "Rabbit", "Raccoon", "Radar", "Radiator", "Radio", "Rag", "Rail", "Railroad", "Rain", "Rainbow", "Ram", "Ranch", "Receiver", "Recipe", "Red", "Reed", "Referee", "Refrigerator", "Relic", "Resort", "Restaurant", "Ribbon", "Ribs", "Rice", "Rider", "Rifle", "Ring", "Rink", "Road", "Robot", "Rock", "Rocket", "Rod", "Roller", "Roof", "Room", "Root", "Rope", "Rose", "Rot", "Rowboat", "Rubber", "Rug", "Rugby", "Ruins", "Ruler", "Rust", "Sack", "Sacred", "Saddle", "Saffron", "Sailboat", "Sailor", "Salad", "Salmon", "Salon", "Salt", "Sandal", "Sandals", "Sandcastle", "Sandwich", "Sapphire", "Satellite", "Satin", "Sauce", "Saucer", "Savage", "Saw", "Saxophone", "Scale", "Scanner", "Scarecrow", "Scarf", "School", "Scissors", "Scooter", "Screen", "Screw", "Sculptor", "Sculpture", "Seal", "Seat", "Seed", "Shack", "Shampoo", "Shark", "Shed", "Sheep", "Sheet", "Shelf", "Shell", "Shelter", "Shield", "Ship", "Shirt", "Shoe", "Shoes", "Shop", "Shorts", "Shower", "Shrimp", "Sick", "Sidewalk", "Silk", "Silver", "Singer", "Sink", "Skate", "Skater", "Skeleton", "Ski", "Skin", "Skirt", "Skull", "Skunk", "Sky", "Skyscraper", "Sleep", "Slice", "Slide", "Slipper", "Slippers", "Slug", "Smoke", "Snack", "Snake", "Sneaker", "Sneeze", "Sniff", "Snow", "Snowball", "Snowboard", "Snowflake", "Snowman", "Soap", "Soccer", "Sock", "Socks", "Soda", "Sofa", "Soil", "Soldier", "Son", "Sorbet", "Soup", "Spade", "Spaghetti", "Spare", "Sparrow", "Speaker", "Spear", "Spider", "Spiral", "Spirit", "Spit", "Splash", "Split", "Sponge", "Spoon", "Spray", "Spring", "Sprinkler", "Squad", "Square", "Squat", "Squirrel", "Stain", "Stair", "Stamp", "Star", "Station", "Stereo", "Stick", "Sticker", "Stitch", "Stomach", "Stove", "Strap", "Straw", "Strawberry", "Stream", "Street", "Strobe", "Submarine", "Subway", "Succulent", "Sugar", "Suit", "Suitcase", "Sulfur", "Sun", "Sundae", "Sunflower", "Sunglasses", "Supermarket", "Supernova", "Surfboard", "Surgeon", "Sushi", "Swamp", "Swan", "Swarm", "Sweater", "Sweet", "Swim", "Swimmer", "Sword", "Table", "Tablet", "Taco", "Tail", "Tailor", "Tangerine", "Tank", "Tanker", "Tap", "Tape", "Target", "Tattoo", "Tavern", "Taxi", "Tea", "Teacher", "Tear", "Teddy", "Teeth", "Telephone", "Telescope", "Television", "Temple", "Tennis", "Terrarium", "Textbook", "Theater", "Thermometer", "Thermos", "Thief", "Thigh", "Thorn", "Throne", "Throttle", "Thunder", "Tiger", "Tile", "Timer", "Tin", "Tire", "Toad", "Toast", "Toaster", "Tobacco", "Toe", "Toes", "Toilet", "Tomato", "Tomb", "Tongue", "Tool", "Tooth", "Tortilla", "Tortoise", "Towel", "Tower", "Town", "Toy", "Tractor", "Trader", "Tram", "Trampoline", "Trap", "Tray", "Treasure", "Tree", "Triangle", "Tribe", "Tricycle", "Trolley", "Troop", "Trophy", "Trousers", "Trout", "Truck", "Truffle", "Trumpet", "Trunk", "Tube", "Tulip", "Tuna", "Tunnel", "Turban", "Turbine", "Turkey", "Turtle", "Tusk", "Twine", "Umbrella", "Underwear", "Unicorn", "Uniform", "Vaccine", "Vacuum", "Valentine", "Van", "Vanilla", "Vase", "Vault", "Vegetable", "Vehicle", "Vessel", "Villa", "Vinegar", "Vinyl", "Violet", "Violin", "Violinist", "Viper", "Volcano", "Vortex", "Vulture", "Wafer", "Waffle", "Wagon", "Waiter", "Wallet", "Walnut", "Wardrobe", "Warrior", "Wasabi", "Waste", "Watch", "Water", "Waterfall", "Wax", "Weapon", "Weasel", "Wedding", "Whale", "Wheat", "Wheel", "Whip", "White", "Wick", "Widow", "Wife", "Willow", "Window", "Wing", "Winter", "Witch", "Wobble", "Wolf", "Woman", "Wood", "Woodpecker", "Wool", "Worm", "Wrench", "Wrestler", "Writer", "Xylophone", "Yacht", "Yam", "Yoga", "Yogurt", "Yolk", "Zebra", "Zen", "Zero", "Zip", "Zipper", "Zoo"];

/***/ }),

/***/ 8266:
/*!*************************************************************!*\
  !*** ./src/app/syllogimous/constants/settings.constants.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 9182:
/*!****************************************************************!*\
  !*** ./src/app/syllogimous/constants/syllogimous.constants.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnumScreens": () => (/* binding */ EnumScreens),
/* harmony export */   "EnumTiers": () => (/* binding */ EnumTiers),
/* harmony export */   "INF": () => (/* binding */ INF),
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

/***/ 2631:
/*!*******************************************************!*\
  !*** ./src/app/syllogimous/models/question.models.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    this.enabled = settings?.enabled || (0,src_app_utils_json__WEBPACK_IMPORTED_MODULE_0__.jsonCopy)(_constants_settings_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ENABLED_FLAGS);
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

/***/ 5006:
/*!****************************************************!*\
  !*** ./src/app/syllogimous/models/stats.models.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeBasedStats": () => (/* binding */ TypeBasedStats),
/* harmony export */   "TypeBasedStatsInner": () => (/* binding */ TypeBasedStatsInner),
/* harmony export */   "TypeBasedStatsInner2": () => (/* binding */ TypeBasedStatsInner2)
/* harmony export */ });
/* harmony import */ var _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/question.constants */ 6189);
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

class TypeBasedStats {
  constructor() {
    this[_a] = new TypeBasedStatsInner(_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Syllogism);
    this[_b] = new TypeBasedStatsInner(_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Distinction);
    this[_c] = new TypeBasedStatsInner(_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.ComparisonNumerical);
    this[_d] = new TypeBasedStatsInner(_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.ComparisonChronological);
    this[_e] = new TypeBasedStatsInner(_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.LinearArrangement);
    this[_f] = new TypeBasedStatsInner(_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.CircularArrangement);
    this[_g] = new TypeBasedStatsInner(_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Direction);
    this[_h] = new TypeBasedStatsInner(_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Direction3DSpatial);
    this[_j] = new TypeBasedStatsInner(_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Direction3DTemporal);
    this[_k] = new TypeBasedStatsInner(_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.GraphMatching);
    this[_l] = new TypeBasedStatsInner(_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Analogy);
    this[_m] = new TypeBasedStatsInner(_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Binary);
  }
  static {
    _a = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Syllogism, _b = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Distinction, _c = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.ComparisonNumerical, _d = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.ComparisonChronological, _e = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.LinearArrangement, _f = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.CircularArrangement, _g = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Direction, _h = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Direction3DSpatial, _j = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Direction3DTemporal, _k = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.GraphMatching, _l = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Analogy, _m = _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType.Binary;
  }
}
class TypeBasedStatsInner {
  constructor(type) {
    this.completed = 0;
    this.accuracy = 0;
    this.stats = {
      "2": new TypeBasedStatsInner2(),
      "3": new TypeBasedStatsInner2(),
      "4": new TypeBasedStatsInner2(),
      "5": new TypeBasedStatsInner2(),
      "6+": new TypeBasedStatsInner2()
    };
    this.type = type;
  }
}
class TypeBasedStatsInner2 {
  constructor() {
    this.sum = 0;
    this.count = 0;
    this.fastest = 0;
    this.slowest = 0;
    this.correct = 0;
    this.incorrect = 0;
    this.timeout = 0;
    this.last10Sum = 0;
    this.last10Count = 0;
    this.last10Fastest = 0;
    this.last10Slowest = 0;
    this.last10Correct = 0;
    this.last10Incorrect = 0;
    this.last10Timeout = 0;
  }
}

/***/ }),

/***/ 7089:
/*!******************************************************************!*\
  !*** ./src/app/syllogimous/pages/feedback/feedback.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackComponent": () => (/* binding */ FeedbackComponent)
/* harmony export */ });
/* harmony import */ var _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/syllogimous.constants */ 9182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/syllogimous.service */ 3943);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card/card.component */ 8640);
/* harmony import */ var _components_progress_and_performance_progress_and_performance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/progress-and-performance/progress-and-performance.component */ 1135);







function FeedbackComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const d_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("feedback-timeout", d_r1.timeout)("feedback-correct", !d_r1.timeout && d_r1.validity)("feedback-incorrect", !d_r1.timeout && !d_r1.validity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", d_r1.timeout ? "Timeout" : d_r1.validity ? "Correct" : "Incorrect", " ");
  }
}
const _c0 = function (a0, a1) {
  return {
    timeout: a0,
    validity: a1
  };
};
class FeedbackComponent {
  constructor(sylSrv, router) {
    this.sylSrv = sylSrv;
    this.router = router;
    this.EnumScreens = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.EnumScreens;
  }
  static {
    this.ɵfac = function FeedbackComponent_Factory(t) {
      return new (t || FeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__.SyllogimousService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FeedbackComponent,
      selectors: [["app-feedback"]],
      decls: 13,
      vars: 6,
      consts: [["body", ""], [3, "feedbackPage", "playgroundMode"], ["class", "feedback-wrap", 3, "feedback-timeout", "feedback-correct", "feedback-incorrect", 4, "ngIf"], ["footer", "", 1, "playcard-toolbar"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-play-fill"], [1, "feedback-wrap"], [1, "fs-1", "fw-bold", "text-uppercase"]],
      template: function FeedbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-card")(1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-progress-and-performance", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FeedbackComponent_div_3_Template, 3, 7, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "div")(6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FeedbackComponent_Template_button_click_6_listener() {
            return ctx.router.navigate([ctx.EnumScreens.Start]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Start ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div")(10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FeedbackComponent_Template_button_click_10_listener() {
            return ctx.sylSrv.play();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Play ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("feedbackPage", true)("playgroundMode", ctx.sylSrv.settings === ctx.sylSrv.playgroundSettings);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c0, ctx.sylSrv.question.userAnswer === undefined, ctx.sylSrv.question.userAnswer === ctx.sylSrv.question.isValid));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _components_progress_and_performance_progress_and_performance_component__WEBPACK_IMPORTED_MODULE_3__.DailyProgressComponent],
      styles: [".feedback-wrap[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    display: grid;\r\n    place-items: center;\r\n}\r\n\r\n.feedback-correct[_ngcontent-%COMP%] {\r\n    background: #D4EDDA;\r\n    color: #155724;\r\n}\r\n\r\n.feedback-incorrect[_ngcontent-%COMP%] {\r\n    background: #F8D7DA;\r\n    color: #721C24;\r\n}\r\n\r\n.feedback-timeout[_ngcontent-%COMP%] {\r\n    background: #E0E0E0;\r\n    color: #424242;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvcGFnZXMvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5mZWVkYmFjay13cmFwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmVlZGJhY2stY29ycmVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDRFRERBO1xyXG4gICAgY29sb3I6ICMxNTU3MjQ7XHJcbn1cclxuXHJcbi5mZWVkYmFjay1pbmNvcnJlY3Qge1xyXG4gICAgYmFja2dyb3VuZDogI0Y4RDdEQTtcclxuICAgIGNvbG9yOiAjNzIxQzI0O1xyXG59XHJcblxyXG4uZmVlZGJhY2stdGltZW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xyXG4gICAgY29sb3I6ICM0MjQyNDI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 848:
/*!**********************************************************!*\
  !*** ./src/app/syllogimous/pages/game/game.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameComponent": () => (/* binding */ GameComponent)
/* harmony export */ });
/* harmony import */ var C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/local-storage.constants */ 6376);
/* harmony import */ var _settings_modal_timer_settings_modal_timer_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/modal-timer-settings/modal-timer-settings.component */ 3135);
/* harmony import */ var _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/syllogimous.constants */ 9182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_syllogimous_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/syllogimous.service */ 3943);
/* harmony import */ var _services_game_timer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/game-timer.service */ 6002);
/* harmony import */ var _services_stats_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/stats.service */ 1750);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/card/card.component */ 8640);












function GameComponent_ng_template_0_ng_container_0_div_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 25);
  }
  if (rf & 2) {
    const instruction_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", instruction_r22, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function GameComponent_ng_template_0_ng_container_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, GameComponent_ng_template_0_ng_container_0_div_1_div_1_div_4_Template, 1, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const info_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", info_r17.instructions);
  }
}
function GameComponent_ng_template_0_ng_container_0_div_1_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 25);
  }
  if (rf & 2) {
    const note_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", note_r25, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function GameComponent_ng_template_0_ng_container_0_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GameComponent_ng_template_0_ng_container_0_div_1_div_2_div_1_Template, 1, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const info_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", info_r17.notes);
  }
}
function GameComponent_ng_template_0_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GameComponent_ng_template_0_ng_container_0_div_1_div_1_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, GameComponent_ng_template_0_ng_container_0_div_1_div_2_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const info_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", info_r17.instructions == null ? null : info_r17.instructions.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", info_r17.notes == null ? null : info_r17.notes.length);
  }
}
function GameComponent_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GameComponent_ng_template_0_ng_container_0_div_1_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const info_r17 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (info_r17.instructions == null ? null : info_r17.instructions.length) || (info_r17.notes == null ? null : info_r17.notes.length));
  }
}
const _c0 = function (a0, a1) {
  return {
    instructions: a0,
    notes: a1
  };
};
function GameComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, GameComponent_ng_template_0_ng_container_0_Template, 2, 1, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c0, ctx_r1.sylSrv.question.instructions, ctx_r1.sylSrv.question.notes));
  }
}
function GameComponent_ngb_progressbar_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ngb-progressbar", 27)(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 100 * ctx_r2.gameTimerService.remainingSeconds / ctx_r2.timerTimeSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r2.gameTimerService.remainingSeconds, " s");
  }
}
function GameComponent_9_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function GameComponent_9_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GameComponent_9_ng_template_0_ng_container_1_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r0);
  }
}
function GameComponent_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, GameComponent_9_ng_template_0_Template, 2, 1, "ng-template", 29);
  }
}
function GameComponent_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30)(1, "div")(2, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const last_r32 = ctx_r34.last;
    const i_r31 = ctx_r34.index;
    const p_r30 = ctx_r34.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](last_r32 ? "Last premise" : "Premise " + (i_r31 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", p_r30, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function GameComponent_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, GameComponent_10_ng_template_0_Template, 5, 2, "ng-template", 29);
  }
}
function GameComponent_ng_container_11_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30)(1, "div")(2, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const last_r38 = ctx_r40.last;
    const i_r37 = ctx_r40.index;
    const c_r36 = ctx_r40.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](last_r38 ? "Last conclusion" : "Conclusion " + (i_r37 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", c_r36, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function GameComponent_ng_container_11_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, GameComponent_ng_container_11_1_ng_template_0_Template, 5, 2, "ng-template", 29);
  }
}
function GameComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GameComponent_ng_container_11_1_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r6.sylSrv.question.conclusion);
  }
}
function GameComponent_ng_template_12_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30)(1, "div")(2, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Conclusion");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r41.sylSrv.question.conclusion, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function GameComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, GameComponent_ng_template_12_ng_template_0_Template, 5, 1, "ng-template", 29);
  }
}
function GameComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function GameComponent_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 25);
  }
  if (rf & 2) {
    const p_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", p_r44, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function GameComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GameComponent_div_26_div_1_Template, 1, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const premises_r42 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", premises_r42);
  }
}
function GameComponent_div_27_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 25);
  }
  if (rf & 2) {
    const c_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", c_r48, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function GameComponent_div_27_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GameComponent_div_27_div_3_div_1_Template, 1, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const conclusions_r46 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", conclusions_r46);
  }
}
function GameComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Conclusion");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, GameComponent_div_27_div_3_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r11.sylSrv.question.conclusion);
  }
}
function GameComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Conclusion");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r13.sylSrv.question.conclusion, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function GameComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GameComponent_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r49.sylSrv.checkQuestion(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function GameComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GameComponent_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r51.sylSrv.checkQuestion(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    width: a0
  };
};
class GameComponent {
  constructor(sylSrv, gameTimerService, statsService, router) {
    var _this = this;
    this.sylSrv = sylSrv;
    this.gameTimerService = gameTimerService;
    this.statsService = statsService;
    this.router = router;
    this.Array = Array;
    this.timerTimeSeconds = 0;
    this.trueButtonToTheRight = false;
    this.kickTimer = /*#__PURE__*/(0,C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.gameTimerService.start(_this.timerTimeSeconds);
      _this.sylSrv.checkQuestion();
    });
    this.timerType = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_1__.LS_TIMER) || '0';
    this.gameMode = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_1__.LS_GAME_MODE) || '0';
    this.trueButtonToTheRight = Math.random() > 0.5;
    if (this.sylSrv.question.conclusion === "!") {
      this.router.navigate([_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_3__.EnumScreens.Start]);
    }
  }
  ngOnInit() {
    switch (this.timerType) {
      case '1':
        {
          console.log("Custom timer");
          const customTimers = JSON.parse(localStorage.getItem(_settings_modal_timer_settings_modal_timer_settings_component__WEBPACK_IMPORTED_MODULE_2__.LS_CUSTOM_TIMERS_KEY) || "{}");
          this.timerTimeSeconds = customTimers[this.sylSrv.question.type] || 90;
          this.kickTimer();
          break;
        }
      case '2':
        {
          console.log("Adaptive timer");
          const correctRate = 0.5;
          const incorrectRate = 1;
          const timeoutRate = 1.5;
          const newLevelBonus = 15;
          const negationBonus = 3;
          const metaRelationBonus = 4;
          this.timerTimeSeconds = 90;
          const questionType = this.sylSrv.question.type;
          const questionPremises = this.sylSrv.question.premises.length;
          const {
            typeBasedStats
          } = this.statsService.calcStats(this.timerType);
          const tbs = typeBasedStats[questionType];
          if (tbs?.stats) {
            const prevStats = tbs.stats[questionPremises - 1];
            const currStats = tbs.stats[questionPremises];
            let avgTimeToRespond = this.timerTimeSeconds;
            if (currStats && currStats.count > 2) {
              avgTimeToRespond = currStats.last10Sum / 1000 / (currStats.last10Count || 1);
              avgTimeToRespond -= correctRate * currStats.last10Correct;
              avgTimeToRespond += incorrectRate * currStats.last10Incorrect;
              avgTimeToRespond += timeoutRate * currStats.last10Timeout;
            } else if (prevStats && prevStats.count > 2) {
              avgTimeToRespond = prevStats.last10Sum / 1000 / (prevStats.last10Count || 1);
              avgTimeToRespond -= correctRate * prevStats.last10Correct;
              avgTimeToRespond += incorrectRate * prevStats.last10Incorrect;
              avgTimeToRespond += timeoutRate * prevStats.last10Timeout;
              avgTimeToRespond += newLevelBonus; // Bonus for the new level
            }

            avgTimeToRespond += negationBonus * this.sylSrv.question.negations;
            avgTimeToRespond += metaRelationBonus * this.sylSrv.question.metaRelations;
            this.timerTimeSeconds = Math.floor(Math.max(0, avgTimeToRespond));
          }
          this.kickTimer();
          break;
        }
      default:
        {
          console.log("No timer");
        }
    }
  }
  ngOnDestroy() {
    this.gameTimerService.stop();
  }
  static {
    this.ɵfac = function GameComponent_Factory(t) {
      return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_4__.SyllogimousService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_game_timer_service__WEBPACK_IMPORTED_MODULE_5__.GameTimerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_stats_service__WEBPACK_IMPORTED_MODULE_6__.StatsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: GameComponent,
      selectors: [["app-game"]],
      decls: 35,
      vars: 21,
      consts: [["questionInstructionsAndNotes", ""], ["body", "", 1, "battlefield", 3, "ngStyle"], [1, "timerbar-wrap"], ["class", "timerbar", "type", "success", 3, "value", 4, "ngIf"], [2, "border", "0", "box-shadow", "none", 3, "interval", "showNavigationArrows", "showNavigationIndicators"], ["carousel", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["conclusionsIsStringCarouselTemplate", ""], [1, "flex-between", "p-3", 2, "position", "absolute", "left", "0", "bottom", "0", "width", "100%"], [1, "btn", "border-0", 2, "box-shadow", "none", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "bi", "bi-arrow-right"], [1, "d-grid", "gap-4"], [4, "ngTemplateOutlet"], [1, "small", "text-muted"], ["class", "premises", 4, "ngIf"], ["conclusionIsStringTemplate", ""], ["footer", "", 1, "d-flex", "gap-3", "justify-content-center"], ["class", "btn btn-lg btn-success col-md-3 col-4", 3, "click", 4, "ngIf"], [1, "btn", "btn-lg", "btn-danger", "col-md-3", "col-4", 3, "click"], ["class", "notes", 4, "ngIf"], [1, "instructions"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "notes"], ["type", "success", 1, "timerbar", 3, "value"], [1, "me-2"], ["ngbSlide", ""], [2, "display", "grid", "place-items", "center"], [1, "text-muted"], [1, "premises"], ["class", "conclusions", 4, "ngIf"], [1, "conclusions"], [1, "btn", "btn-lg", "btn-success", "col-md-3", "col-4", 3, "click"]],
      template: function GameComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, GameComponent_ng_template_0_Template, 1, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "app-card")(3, "div", 1)(4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, GameComponent_ngb_progressbar_5_Template, 3, 2, "ngb-progressbar", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div")(7, "ngb-carousel", 4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, GameComponent_9_Template, 1, 0, null, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, GameComponent_10_Template, 1, 0, null, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, GameComponent_ng_container_11_Template, 2, 1, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, GameComponent_ng_template_12_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 10)(15, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GameComponent_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r53);
            const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r3.prev());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Prev");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GameComponent_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r53);
            const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r3.next());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Next ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, GameComponent_ng_container_22_Template, 1, 0, "ng-container", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div")(24, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Premises");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, GameComponent_div_26_Template, 2, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, GameComponent_div_27_Template, 4, 1, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, GameComponent_ng_template_28_Template, 4, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, GameComponent_button_31_Template, 2, 0, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GameComponent_Template_button_click_32_listener() {
            return ctx.sylSrv.checkQuestion(false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, GameComponent_button_34_Template, 2, 0, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);
          const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](13);
          const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](19, _c1, ctx.gameMode === "1" ? "100%" : "auto"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.timerType !== "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("d-none", ctx.gameMode !== "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("interval", 999999999)("showNavigationArrows", false)("showNavigationIndicators", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.sylSrv.question.instructions == null ? null : ctx.sylSrv.question.instructions.length) || (ctx.sylSrv.question.notes == null ? null : ctx.sylSrv.question.notes.length));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.sylSrv.question.premises);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.Array.isArray(ctx.sylSrv.question.conclusion))("ngIfElse", _r7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("d-none", ctx.gameMode === "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sylSrv.question.premises);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.Array.isArray(ctx.sylSrv.question.conclusion))("ngIfElse", _r12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.trueButtonToTheRight);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.trueButtonToTheRight);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbSlide, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbProgressbar, _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__.CardComponent],
      styles: ["[_nghost-%COMP%]     .timerbar .progress-bar {\r\n    text-align: right;\r\n}\r\n\r\n.battlefield[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    line-height: 1.3;\r\n    margin-block: 1rem;\r\n}\r\n\r\n.timerbar-wrap[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    position: absolute;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n\r\n.timerbar[_ngcontent-%COMP%] {\r\n    height: 1.25rem;\r\n}\r\n\r\n.premises[_ngcontent-%COMP%], .conclusions[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    gap: 0.75rem;\r\n}\r\n\r\n.instructions[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    gap: 0.5rem;\r\n    font-size: 1.4rem;\r\n    line-height: 1.1;\r\n    margin-block: 0.5rem;\r\n}\r\n.notes[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    gap: 0.25rem;\r\n    font-size: 1.2rem;\r\n    line-height: 1.2;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvcGFnZXMvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC50aW1lcmJhciAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYmF0dGxlZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xyXG59XHJcblxyXG4udGltZXJiYXItd3JhcCB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi50aW1lcmJhciB7XHJcbiAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbn1cclxuXHJcbi5wcmVtaXNlcyxcclxuLmNvbmNsdXNpb25zIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5pbnN0cnVjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgbWFyZ2luLWJsb2NrOiAwLjVyZW07XHJcbn1cclxuLm5vdGVzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBnYXA6IDAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5773:
/*!****************************************************************!*\
  !*** ./src/app/syllogimous/pages/history/history.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryComponent": () => (/* binding */ HistoryComponent)
/* harmony export */ });
/* harmony import */ var _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/syllogimous.constants */ 9182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/syllogimous.service */ 3943);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/toast.service */ 4465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/card/card.component */ 8640);








function HistoryComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Play to see something here");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HistoryComponent_div_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.sylSrv.playArcadeMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Play ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function HistoryComponent_div_4_div_6_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 28);
  }
  if (rf & 2) {
    const instruction_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", instruction_r14, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function HistoryComponent_div_4_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HistoryComponent_div_4_div_6_div_1_div_4_Template, 1, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", q_r5.instructions);
  }
}
function HistoryComponent_div_4_div_6_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 28);
  }
  if (rf & 2) {
    const note_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", note_r17, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function HistoryComponent_div_4_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HistoryComponent_div_4_div_6_div_2_div_1_Template, 1, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", q_r5.notes);
  }
}
function HistoryComponent_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HistoryComponent_div_4_div_6_div_1_Template, 5, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HistoryComponent_div_4_div_6_div_2_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r5.instructions == null ? null : q_r5.instructions.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r5.notes == null ? null : q_r5.notes.length);
  }
}
function HistoryComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 28);
  }
  if (rf & 2) {
    const p_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", p_r20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function HistoryComponent_div_4_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 28);
  }
  if (rf & 2) {
    const c_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", c_r22, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function HistoryComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Conclusion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HistoryComponent_div_4_div_12_div_4_Template, 1, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", q_r5.conclusion);
  }
}
function HistoryComponent_div_4_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Conclusion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", q_r5.conclusion, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function HistoryComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HistoryComponent_div_4_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const q_r5 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.copyQuestion(q_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, HistoryComponent_div_4_div_6_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div")(8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Premises");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, HistoryComponent_div_4_div_11_Template, 1, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, HistoryComponent_div_4_div_12_Template, 5, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, HistoryComponent_div_4_ng_template_13_Template, 4, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "small", 22)(16, "div", 23)(17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 23)(21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 23)(25, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "User Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 23)(29, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r5 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("timeout", q_r5.userAnswer === undefined)("correct", q_r5.userAnswer !== undefined && q_r5.userAnswer === q_r5.isValid)("incorrect", q_r5.userAnswer !== undefined && q_r5.userAnswer !== q_r5.isValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r5.playgroundMode ? "Playground Mode" : "Arcade Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r5.instructions == null ? null : q_r5.instructions.length) || (q_r5.notes == null ? null : q_r5.notes.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", q_r5.premises);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.Array.isArray(q_r5.conclusion))("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", q_r5.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", q_r5.isValid, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", q_r5.userAnswer === undefined ? "Timeout" : q_r5.userAnswer, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", q_r5.userAnswer === undefined ? "Timeout" : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](32, 15, (q_r5.answeredAt - q_r5.createdAt) / 1000, ".1-1") + "s", " ");
  }
}
function HistoryComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31)(1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HistoryComponent_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r27.loadMoreQuestions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Load More");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class HistoryComponent {
  constructor(sylSrv, router, toaster) {
    this.sylSrv = sylSrv;
    this.router = router;
    this.toaster = toaster;
    this.Array = Array;
    this.EnumScreens = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.EnumScreens;
    this.allQuestions = [];
    this.questions = [];
    this.sliceIdx = -25;
  }
  ngOnInit() {
    this.allQuestions = this.sylSrv.questions;
    this.loadMoreQuestions();
  }
  loadMoreQuestions() {
    this.sliceIdx += 25;
    this.questions.push(...this.allQuestions.slice(this.sliceIdx, this.sliceIdx + 25));
  }
  copyQuestion(q) {
    const el = document.createElement("TEXTAREA");
    document.body.appendChild(el);
    el.value = JSON.stringify(q, null, 2);
    el.focus();
    el.select();
    document.execCommand("copy");
    this.toaster.show("Question raw JSON data copied into your clipboard!", {
      classname: "bg-success text-light"
    });
    document.body.removeChild(el);
  }
  static {
    this.ɵfac = function HistoryComponent_Factory(t) {
      return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__.SyllogimousService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: HistoryComponent,
      selectors: [["app-history"]],
      decls: 13,
      vars: 5,
      consts: [["body", "", 1, "p-3"], ["class", "text-center", 4, "ngIf"], [1, "d-grid", "py-3", 2, "gap", "2rem"], ["class", "card mx-md-3", 3, "timeout", "correct", "incorrect", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["footer", "", 1, "playcard-toolbar"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "text-center"], [1, "mb-3"], [1, "btn", "btn-lg", "btn-primary", 3, "click"], [1, "bi", "bi-play-fill"], [1, "card", "mx-md-3"], [1, "mode-title"], ["ngbTooltip", "Click here to copy the question raw JSON data", 1, "copy-paste", 3, "click"], [1, "question-text"], [4, "ngIf"], [1, "small", "text-muted", "mb-1"], [1, "premises"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["conclusionIsStringTemplate", ""], [1, "d-grid", 2, "grid-template-columns", "repeat(4, 1fr)"], [1, "bd-left"], [1, "fw-bold"], ["class", "notes", 4, "ngIf"], [1, "small", "text-muted"], [1, "instructions"], [3, "innerHTML"], [1, "notes"], [1, "conclusions"], [1, "d-flex", "justify-content-center"], [1, "btn", "btn-primary", 3, "click"]],
      template: function HistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-card")(1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HistoryComponent_div_2_Template, 6, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HistoryComponent_div_4_Template, 33, 18, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HistoryComponent_div_5_Template, 3, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "div")(8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HistoryComponent_Template_button_click_8_listener() {
            return ctx.router.navigate([ctx.EnumScreens.Start]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Start ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.questions.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.questions);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.questions.length && ctx.questions.length !== ctx.allQuestions.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.questions.length, " / ", ctx.allQuestions.length, "");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltip, _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__.CardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
      styles: ["[body][_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    max-height: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n.question-text[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    max-height: 350px;\r\n    padding: 0.75rem;\r\n    display: grid;\r\n    gap: 1rem;\r\n    line-height: 1.3;\r\n}\r\n\r\n.premises[_ngcontent-%COMP%], .conclusions[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.correct[_ngcontent-%COMP%] {\r\n    background-color: #D4EDDA88;\r\n    color: #000;\r\n}\r\n\r\n.incorrect[_ngcontent-%COMP%] {\r\n    background-color: #F8D7DA88;\r\n    color: #000;\r\n}\r\n\r\n.timeout[_ngcontent-%COMP%] {\r\n    background-color: #E0E0E088;\r\n    color: #000;\r\n}\r\n\r\n\r\n.bd-left[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #0006;\r\n    border-left: 1px solid #0006;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.bd-left[_ngcontent-%COMP%]:first-child {\r\n    border-left: none;\r\n}\r\n\r\n.mode-title[_ngcontent-%COMP%] {\r\n    padding: 0.25rem 0.75rem;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.copy-paste[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0rem;\r\n    right: 0rem;\r\n    height: 2rem;\r\n    width: 2rem;\r\n    opacity: 0;\r\n}\r\n\r\n.instructions[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    gap: 0.25rem;\r\n    font-size: 0.95rem;\r\n    line-height: 1.1;\r\n    margin-block: 0.25rem;\r\n}\r\n.notes[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    gap: 0.125rem;\r\n    font-size: 0.85rem;\r\n    line-height: 1.2;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJbYm9keV0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5xdWVzdGlvbi10ZXh0IHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAzNTBweDtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxufVxyXG5cclxuLnByZW1pc2VzLFxyXG4uY29uY2x1c2lvbnMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uY29ycmVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRFRERBODg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmluY29ycmVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhEN0RBODg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnRpbWVvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDg4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcblxyXG4uYmQtbGVmdCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDY7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA2O1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4uYmQtbGVmdDpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxufVxyXG5cclxuLm1vZGUtdGl0bGUge1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5jb3B5LXBhc3RlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHJlbTtcclxuICAgIHJpZ2h0OiAwcmVtO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uaW5zdHJ1Y3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBnYXA6IDAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgbWFyZ2luLWJsb2NrOiAwLjI1cmVtO1xyXG59XHJcbi5ub3RlcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAwLjEyNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3995:
/*!************************************************************!*\
  !*** ./src/app/syllogimous/pages/intro/intro.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroComponent": () => (/* binding */ IntroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_syllogimous_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/syllogimous.service */ 3943);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/card/card.component */ 8640);



class IntroComponent {
  constructor(sylSrv) {
    this.sylSrv = sylSrv;
  }
  static {
    this.ɵfac = function IntroComponent_Factory(t) {
      return new (t || IntroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_0__.SyllogimousService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: IntroComponent,
      selectors: [["app-intro"]],
      decls: 30,
      vars: 0,
      consts: [["body", "", 1, "py-3", "px-md-3"], ["href", "https://en.wikipedia.org/wiki/Relational_frame_theory", "target", "_blank"], [1, "d-grid", "justify-content-start", "gap-1"], ["href", "https://groups.google.com/g/brain-training", "target", "_blank"], ["href", "https://t.me/brain_training", "target", "_blank"], ["footer", "", 1, "playcard-toolbar"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "dontShowAnymore", 1, "form-check-input"], ["dontShowAnymore", ""], ["for", "dontShowAnymore", 1, "form-check-label"], [1, "btn", "btn-outline-primary", 3, "click"]],
      template: function IntroComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-card")(1, "div", 0)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Welcome to Syllogimous!");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Syllogimous v4 takes classic logic challenges and turns them into a brain workout. This latest version introduces new features designed to enhance your brain training experience.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Syllogimous is based on ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Relational Frame Theory (RFT)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, ", a psychological theory that suggests that the fundamental process of human thought involves forming relationships between concepts. Studies indicate that training in relational skills can significantly enhance cognitive functions.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Therefore, by playing Syllogimous, you're boosting your problem-solving skills, hopefully while having fun.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Useful Links");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 2)(16, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Brain Training Google Groups");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Brain Training Telegram");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5)(21, "div")(22, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 7, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Don't show anymore ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div")(28, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IntroComponent_Template_button_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](24);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.sylSrv.skipIntro(_r0.checked));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Skip Intro");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9105:
/*!************************************************************************!*\
  !*** ./src/app/syllogimous/pages/other-games/other-games.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherGamesComponent": () => (/* binding */ OtherGamesComponent)
/* harmony export */ });
/* harmony import */ var _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/syllogimous.constants */ 9182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/card/card.component */ 8640);




class OtherGamesComponent {
  constructor(router) {
    this.router = router;
    this.EnumScreens = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.EnumScreens;
  }
  static {
    this.ɵfac = function OtherGamesComponent_Factory(t) {
      return new (t || OtherGamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: OtherGamesComponent,
      selectors: [["app-other-games"]],
      decls: 43,
      vars: 0,
      consts: [["body", "", 1, "py-3", "px-md-3"], [1, "d-grid", "gap-3"], [1, "section-minititle"], [1, "d-grid", "justify-content-start"], ["href", "https://4skinskywalker.github.io/3D-Hyper-N-back/", "target", "_blank"], ["href", "https://4skinskywalker.github.io/3D-Dual-N-back-Cubeception/", "target", "_blank"], ["href", "https://4skinskywalker.github.io/3D-Dual-N-back-Cube-in-the-Middle/", "target", "_blank"], ["href", "https://4skinskywalker.github.io/3d-rotation/", "target", "_blank"], ["href", "https://4skinskywalker.github.io/Mental-Rotation-Training/", "target", "_blank"], ["href", "https://4skinskywalker.github.io/logi-number/", "target", "_blank"], ["href", "https://4skinskywalker.github.io/Word-Memorization-Training/", "target", "_blank"], ["footer", "", 1, "playcard-toolbar"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-arrow-left"]],
      template: function OtherGamesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-card")(1, "div", 0)(2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Feel free to explore a collection of games I've created over the years. Take a moment to check them out and challenge your mind!");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "I'd love to hear your ideas and opinions, so don't hesitate to share them, you can find me on Telegram ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "@FredoCorleone");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Wishing you a great life and happy brain training!");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 1)(12, "div")(13, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "N-back Games");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 3)(16, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "3D Hyper N-back");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "3D Dual N-back (Cubeception)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "3D Dual N-back (Cube in the Middle)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div")(23, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Mental Rotation Games");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 3)(26, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "3D Rotation");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Box Mental Rotation");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div")(31, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Miscellaneous Games");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 3)(34, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Logi Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Word Memorization Training");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 11)(39, "div")(40, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OtherGamesComponent_Template_button_click_40_listener() {
            return ctx.router.navigate([ctx.EnumScreens.Start]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Start ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2120:
/*!********************************************************************************!*\
  !*** ./src/app/syllogimous/pages/playground-mode/playground-mode.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaygroundModeComponent": () => (/* binding */ PlaygroundModeComponent)
/* harmony export */ });
/* harmony import */ var C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_syllogimous_models_settings_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/syllogimous/models/settings.models */ 5003);
/* harmony import */ var _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/syllogimous.constants */ 9182);
/* harmony import */ var _constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/local-storage.constants */ 6376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var src_app_syllogimous_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/syllogimous/services/syllogimous.service */ 3943);
/* harmony import */ var _shared_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/dynamic-form/dynamic-form.component */ 1224);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/card/card.component */ 8640);
/* harmony import */ var _settings_timer_choose_timer_choose_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../settings/timer-choose/timer-choose.component */ 1532);
/* harmony import */ var _settings_game_mode_choose_game_mode_choose_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../settings/game-mode-choose/game-mode-choose.component */ 9871);












function PlaygroundModeComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12)(1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PlaygroundModeComponent_ng_template_0_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r2.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 16)(7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PlaygroundModeComponent_ng_template_0_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r2.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.validationError, " ");
  }
}
function capitalize(val) {
  return val[0].toUpperCase() + val.slice(1);
}
function decomposeCamelCase(val) {
  const splitted = val.split(/(?=[A-Z][a-z])/);
  return splitted.map(x => capitalize(x)).join(" ");
}
class PlaygroundModeComponent {
  constructor(router, modalService, sylSrv) {
    this.router = router;
    this.modalService = modalService;
    this.sylSrv = sylSrv;
    this.EnumScreens = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_2__.EnumScreens;
    this.fields = [];
    this.formData = {};
    this.validationError = null;
    const settings = this.loadPlaygroundSettings() || new src_app_syllogimous_models_settings_models__WEBPACK_IMPORTED_MODULE_1__.Settings();
    this.genericEnables = Object.entries(settings.enabled).filter(([field]) => field !== "binary");
    this.binaryEnables = Object.entries(settings.enabled.binary);
    this.questionControls = Object.entries(settings.question);
    // Create generic boolean controls
    for (const [field, value] of this.genericEnables) {
      this.fields.push({
        type: "checkbox",
        label: decomposeCamelCase(field),
        field,
        value
      });
    }
    // Create controls for questions (enable checkbox and num of premises slider)
    let isFirst = true;
    for (const [qt, qs] of this.questionControls) {
      const filler = isFirst ? '<div class="pt-3"></div>' : "<div></div>";
      isFirst = false;
      this.fields.push({
        filler,
        field: "",
        label: ""
      }, {
        field: qt,
        label: decomposeCamelCase(qt),
        type: "checkbox",
        value: qs.enabled
      }, {
        field: qt + "premises",
        label: "Number of Premises",
        type: "range",
        value: qs.getNumOfPremises(),
        min: qs.minNumOfPremises,
        max: qs.maxNumOfPremises,
        step: 1
      });
    }
    // Create binary boolean controls
    for (const [field, value] of this.binaryEnables) {
      this.fields.push({
        type: "checkbox",
        label: decomposeCamelCase(field),
        field,
        value
      });
    }
  }
  play(content) {
    var _this = this;
    return (0,C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const settings = new src_app_syllogimous_models_settings_models__WEBPACK_IMPORTED_MODULE_1__.Settings();
      // Set generic boolean values
      for (const [field, value] of _this.genericEnables) {
        settings.enabled[field] = _this.formData[field];
      }
      // Set binary boolean values
      for (const [field, value] of _this.binaryEnables) {
        settings.enabled.binary[field] = _this.formData[field];
      }
      // Set question enables and num of premises
      for (const [qt, qs] of _this.questionControls) {
        const _qt = qt;
        settings.question[_qt].enabled = _this.formData[_qt];
        settings.question[_qt].setNumOfPremises(_this.formData[_qt + "premises"]);
      }
      // Check configuration
      _this.validationError = (0,src_app_syllogimous_models_settings_models__WEBPACK_IMPORTED_MODULE_1__.areSettingsInvalid)(settings);
      if (_this.validationError) {
        yield _this.modalService.open(content, {
          centered: true
        }).result;
        return;
      }
      _this.sylSrv.playgroundSettings = settings;
      console.log("Playground settings", settings);
      _this.savePlaygroundSettings(settings);
      _this.sylSrv.play();
    })();
  }
  loadPlaygroundSettings() {
    const serialized = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_3__.LS_PG_SETTINGS);
    if (serialized) {
      const deserialized = JSON.parse(serialized);
      return new src_app_syllogimous_models_settings_models__WEBPACK_IMPORTED_MODULE_1__.Settings(deserialized);
    }
    return undefined;
  }
  savePlaygroundSettings(settings) {
    localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_3__.LS_PG_SETTINGS, JSON.stringify(settings));
  }
  static {
    this.ɵfac = function PlaygroundModeComponent_Factory(t) {
      return new (t || PlaygroundModeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_syllogimous_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_4__.SyllogimousService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: PlaygroundModeComponent,
      selectors: [["app-playground-Mode"]],
      decls: 30,
      vars: 2,
      consts: [["content", ""], ["body", "", 1, "d-grid", "py-3", "px-md-3", 2, "gap", "2rem"], [1, "text-center", "lead"], [1, "card", "shadow-sm"], [1, "card-header", "py-2", "small"], [1, "card-body"], ["gap", "0.5rem", 3, "fields", "emitInitial", "formValueChanged"], ["footer", "", 1, "playcard-toolbar"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-play-fill"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], [1, "btn", "btn-danger", 3, "click"]],
      template: function PlaygroundModeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, PlaygroundModeComponent_ng_template_0_Template, 9, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "app-card")(3, "div", 1)(4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Playground is a freestyle mode where questions are just for practice, they don't count for points or stats.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 3)(7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Game mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "app-game-mode-choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 3)(12, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Timer mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "app-timer-choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 3)(17, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Questions and premises");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 5)(20, "app-dynamic-form", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("formValueChanged", function PlaygroundModeComponent_Template_app_dynamic_form_formValueChanged_20_listener($event) {
            return ctx.formData = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 7)(22, "div")(23, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PlaygroundModeComponent_Template_button_click_23_listener() {
            return ctx.router.navigate([ctx.EnumScreens.Start]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " Start ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div")(27, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PlaygroundModeComponent_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.play(_r0));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, " Play ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fields", ctx.fields)("emitInitial", true);
        }
      },
      dependencies: [_shared_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_5__.DynamicFormComponent, _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__.CardComponent, _settings_timer_choose_timer_choose_component__WEBPACK_IMPORTED_MODULE_7__.TimerChooseComponent, _settings_game_mode_choose_game_mode_choose_component__WEBPACK_IMPORTED_MODULE_8__.GameModeChooseComponent],
      styles: ["@media (max-width: 768px) {\r\n    [_nghost-%COMP%]     input[type=\"range\"] {\r\n        max-width: 80%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvcGFnZXMvcGxheWdyb3VuZC1tb2RlL3BsYXlncm91bmQtbW9kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIDpob3N0IDo6bmctZGVlcCBpbnB1dFt0eXBlPVwicmFuZ2VcIl0ge1xyXG4gICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9871:
/*!*******************************************************************************************!*\
  !*** ./src/app/syllogimous/pages/settings/game-mode-choose/game-mode-choose.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameModeChooseComponent": () => (/* binding */ GameModeChooseComponent)
/* harmony export */ });
/* harmony import */ var C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
    return (0,C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      decls: 9,
      vars: 0,
      consts: [[1, "game-mode-choices"], [1, "game-mode-choice"], ["type", "radio", "id", "mode-choice-0", "name", "mode-kind", 3, "click"], ["for", "mode-choice-0", "ngbTooltip", "View all premises on the screen simultaneously"], ["type", "radio", "id", "mode-choice-1", "name", "mode-kind", 3, "click"], ["for", "mode-choice-1", "ngbTooltip", "View one premise at a time in a carousel format"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip],
      styles: ["[_nghost-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.game-mode-choices[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    gap: 1rem;\r\n}\r\n\r\n.game-mode-choice[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n    display: flex;\r\n    gap: 0.25rem;\r\n}\r\n\r\n.game-mode-choice[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .game-mode-choices[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n        gap: 0.5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvcGFnZXMvc2V0dGluZ3MvZ2FtZS1tb2RlLWNob29zZS9nYW1lLW1vZGUtY2hvb3NlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7UUFDMUIsV0FBVztJQUNmO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmdhbWUtbW9kZS1jaG9pY2VzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uZ2FtZS1tb2RlLWNob2ljZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC4yNXJlbTtcclxufVxyXG5cclxuLmdhbWUtbW9kZS1jaG9pY2Uge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5nYW1lLW1vZGUtY2hvaWNlcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3135:
/*!***************************************************************************************************!*\
  !*** ./src/app/syllogimous/pages/settings/modal-timer-settings/modal-timer-settings.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/syllogimous.constants */ 9182);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/progress-and-performance.service */ 2740);
/* harmony import */ var _constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/local-storage.constants */ 6376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_syllogimous_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/syllogimous.service */ 3943);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/card/card.component */ 8640);
/* harmony import */ var _timer_choose_timer_choose_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timer-choose/timer-choose.component */ 1532);
/* harmony import */ var _game_mode_choose_game_mode_choose_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-mode-choose/game-mode-choose.component */ 9871);












class SettingsComponent {
  constructor(router, sylSrv, progressAndPerformanceService) {
    this.router = router;
    this.sylSrv = sylSrv;
    this.progressAndPerformanceService = progressAndPerformanceService;
    this.Math = Math;
    this.EnumScreens = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.EnumScreens;
    this.dailyProgressMinutes = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(_services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_DAILY_GOAL);
    this.weeklyProgressMinutes = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(_services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_WEEKLY_GOAL);
    this.trainingUnitLength = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(_services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_TRAINING_UNIT_LENGTH);
    this.premisesUpThreshold = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(_services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_PREMISES_UP_THRESHOLD);
    this.premisesDownThreshold = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(_services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_PREMISES_DOWN_THRESHOLD);
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
  }
  static {
    this.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_3__.SyllogimousService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_1__.ProgressAndPerformanceService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      decls: 35,
      vars: 15,
      consts: [["body", "", 1, "d-grid", "py-3", "px-md-3", 2, "gap", "2rem"], [1, "card", "shadow-sm"], [1, "card-header", "py-2", "small"], [1, "card-body"], [1, "d-grid", 2, "gap", "0.75rem"], ["type", "range", "min", "15", "max", "60", "step", "5", "name", "dailyProgressMinutes", 3, "label", "ngControl", "noParenthesisValue"], ["type", "range", "min", "60", "max", "240", "step", "5", "name", "weeklyProgressMinutes", 3, "label", "ngControl", "noParenthesisValue"], [1, "d-grid", 2, "gap", "1rem"], ["type", "range", "min", "10", "max", "30", "step", "5", "name", "trainingUnitLength", 3, "label", "ngControl", "noParenthesisValue"], ["type", "range", "min", "0", "max", "0.9", "step", "0.1", "helper", "Percentage of incorrect answers at which premises will decrease", "name", "premisesDownThreshold", 3, "label", "ngControl", "noParenthesisValue"], ["type", "range", "min", "0.1", "max", "1", "step", "0.1", "helper", "Percentage of correct answers required for premises to increase", "name", "premisesUpThreshold", 3, "label", "ngControl", "noParenthesisValue"], ["footer", "", 1, "playcard-toolbar"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-play-fill"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Playtime settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 3)(16, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "app-input", 5)(18, "app-input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 1)(20, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Performance tracker");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 3)(23, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "app-input", 8)(25, "app-input", 9)(26, "app-input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 11)(28, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_28_listener() {
            return ctx.router.navigate([ctx.EnumScreens.Start]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, " Start ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div")(32, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_32_listener() {
            return ctx.sylSrv.playArcadeMode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, " Play ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerChooseComponent": () => (/* binding */ TimerChooseComponent)
/* harmony export */ });
/* harmony import */ var C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
    return (0,C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      styles: ["[_nghost-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.timer-choices[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    gap: 1rem;\r\n}\r\n\r\n.timer-choice[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n    display: flex;\r\n    gap: 0.25rem;\r\n}\r\n\r\n.timer-choice[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .timer-choices[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n        gap: 0.5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvcGFnZXMvc2V0dGluZ3MvdGltZXItY2hvb3NlL3RpbWVyLWNob29zZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO1FBQzFCLFdBQVc7SUFDZjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi50aW1lci1jaG9pY2VzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4udGltZXItY2hvaWNlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjI1cmVtO1xyXG59XHJcblxyXG4udGltZXItY2hvaWNlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudGltZXItY2hvaWNlcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2080:
/*!************************************************************!*\
  !*** ./src/app/syllogimous/pages/start/start.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartComponent": () => (/* binding */ StartComponent)
/* harmony export */ });
/* harmony import */ var _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/syllogimous.constants */ 9182);
/* harmony import */ var src_app_utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/date */ 9322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_syllogimous_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/syllogimous.service */ 3943);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/progress-and-performance.service */ 2740);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/card/card.component */ 8640);
/* harmony import */ var _components_progress_and_performance_progress_and_performance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/progress-and-performance/progress-and-performance.component */ 1135);









class StartComponent {
  constructor(sylSrv, router, progressAndPerformanceService) {
    this.sylSrv = sylSrv;
    this.router = router;
    this.progressAndPerformanceService = progressAndPerformanceService;
    this.EnumScreens = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.EnumScreens;
    this.formatTime = src_app_utils_date__WEBPACK_IMPORTED_MODULE_1__.formatTime;
    this.TIER_SCORE_RANGES = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.TIER_SCORE_RANGES;
    this.tiers = Object.values(_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.EnumTiers);
    this.nextTier = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.EnumTiers.Savant;
    this.pointsRemaining = 0;
    this.questions = [];
    this.correctQs = [];
    this.incorrectQs = [];
    this.unansweredQs = [];
    this.currentStreak = [];
    this.longestStreak = [];
    this.timePlayedToday = 0;
    this.timePlayedThisWeek = 0;
    this.timePlayedToday = progressAndPerformanceService.getTimePlayed(progressAndPerformanceService.getToday());
    this.timePlayedThisWeek = progressAndPerformanceService.getTimePlayedThisWeek(progressAndPerformanceService.getToday());
  }
  ngOnInit() {
    const currTierIdx = this.tiers.findIndex(tier => tier === this.sylSrv.tier);
    this.nextTier = this.tiers[currTierIdx + 1] || "--";
    this.pointsRemaining = this.nextTier ? _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.TIER_SCORE_RANGES[this.nextTier].minScore - this.sylSrv.score : 0;
    this.questions = this.sylSrv.questions;
    this.correctQs = this.questions.filter(q => q.userAnswer !== undefined && q.isValid === q.userAnswer);
    this.incorrectQs = this.questions.filter(q => q.userAnswer !== undefined && q.isValid !== q.userAnswer);
    this.unansweredQs = this.questions.filter(q => q.userAnswer === undefined);
    for (const q of this.questions) {
      if (q.isValid !== q.userAnswer) {
        break;
      }
      this.currentStreak.push(q);
    }
    let streak = [];
    for (const q of this.questions) {
      if (q.isValid !== q.userAnswer) {
        if (streak.length > this.longestStreak.length) {
          this.longestStreak = streak;
          streak = [];
        }
        continue;
      }
      streak.push(q);
    }
  }
  static {
    this.ɵfac = function StartComponent_Factory(t) {
      return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_2__.SyllogimousService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_3__.ProgressAndPerformanceService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: StartComponent,
      selectors: [["app-start"]],
      decls: 57,
      vars: 11,
      consts: [["body", "", 2, "min-width", "320px", "padding-top", "3rem"], [1, "list-group", "mb-4"], [1, "list-group-item", "flex-between"], [1, "text-muted"], [1, "bi", "bi-info-circle", "ms-1", 3, "ngbTooltip"], [1, "text-center"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-gear"], ["footer", "", 1, "text-center", "d-flex", "justify-content-center", "gap-3"], [1, "btn", "btn-primary", 2, "width", "150px", 3, "click"], [1, "btn", "btn-outline-primary", 2, "width", "150px", 3, "click"]],
      template: function StartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-card")(1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-progress-and-performance");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ul", 1)(4, "li", 2)(5, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Tier");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "small", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, ")");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "li", 2)(14, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Correct");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "li", 2)(19, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Timeout");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "li", 2)(24, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Incorrect");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "li", 2)(29, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Longest Streak");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "li", 2)(34, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Current Streak");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "li", 2)(39, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Playtime Today");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "li", 2)(44, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Playtime This Week");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 5)(49, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StartComponent_Template_a_click_49_listener() {
            return ctx.router.navigate([ctx.EnumScreens.Settings]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, " Settings ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 8)(53, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StartComponent_Template_button_click_53_listener() {
            return ctx.sylSrv.playArcadeMode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Arcade");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StartComponent_Template_button_click_55_listener() {
            return ctx.router.navigate([ctx.EnumScreens.PlaygroundMode]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Playground");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.sylSrv.tier, " ", ctx.sylSrv.score, " pts ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(next ", ctx.nextTier, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbTooltip", ctx.pointsRemaining + " pts left to this next level");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.correctQs.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.unansweredQs.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.incorrectQs.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.longestStreak.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentStreak.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.formatTime(ctx.timePlayedToday));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.formatTime(ctx.timePlayedThisWeek));
        }
      },
      dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTooltip, _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__.CardComponent, _components_progress_and_performance_progress_and_performance_component__WEBPACK_IMPORTED_MODULE_5__.DailyProgressComponent],
      styles: ["[_nghost-%COMP%]     .list-group-item {\r\n    padding: 0.35rem 0.85rem;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvcGFnZXMvc3RhcnQvc3RhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwLjM1cmVtIDAuODVyZW07XHJcbn1cclxuXHJcbmlucHV0LCBsYWJlbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 7018:
/*!************************************************************************************!*\
  !*** ./src/app/syllogimous/pages/stats/accuracy-stats/accuracy-stats.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccuracyStatsComponent": () => (/* binding */ AccuracyStatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_syllogimous_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/syllogimous/services/syllogimous.service */ 3943);


class AccuracyStatsComponent {
  constructor(sylSrv) {
    this.sylSrv = sylSrv;
    this.questions = [];
    this.correctQs = [];
    this.incorrectQs = [];
    this.unansweredQs = [];
    this.currentStreak = [];
    this.longestStreak = [];
  }
  ngOnInit() {
    this.questions = this.sylSrv.questions;
    this.correctQs = this.questions.filter(q => q.userAnswer !== undefined && q.isValid === q.userAnswer);
    this.incorrectQs = this.questions.filter(q => q.userAnswer !== undefined && q.isValid !== q.userAnswer);
    this.unansweredQs = this.questions.filter(q => q.userAnswer === undefined);
    for (const q of this.questions) {
      if (q.isValid !== q.userAnswer) {
        break;
      }
      this.currentStreak.push(q);
    }
    let streak = [];
    for (const q of this.questions) {
      if (q.isValid !== q.userAnswer) {
        if (streak.length > this.longestStreak.length) {
          this.longestStreak = streak;
          streak = [];
        }
        continue;
      }
      streak.push(q);
    }
  }
  static {
    this.ɵfac = function AccuracyStatsComponent_Factory(t) {
      return new (t || AccuracyStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_syllogimous_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_0__.SyllogimousService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AccuracyStatsComponent,
      selectors: [["app-accuracy-stats"]],
      decls: 28,
      vars: 5,
      consts: [[1, "text-center"], [1, "list-group"], [1, "list-group-item", "flex-between"]],
      template: function AccuracyStatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Accuracy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 1)(3, "li", 2)(4, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Correct Answers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 2)(9, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Incorrect Answers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 2)(14, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Unanswered Questions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 2)(19, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Current Streak");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 2)(24, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Longest Streak");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.correctQs.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.incorrectQs.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.unansweredQs.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentStreak.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.longestStreak.length);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3534:
/*!************************************************************************************!*\
  !*** ./src/app/syllogimous/pages/stats/error-analysis/error-analysis.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorAnalysisComponent": () => (/* binding */ ErrorAnalysisComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_syllogimous_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/syllogimous/services/syllogimous.service */ 3943);


class ErrorAnalysisComponent {
  constructor(sylSrv) {
    this.sylSrv = sylSrv;
    this.questions = [];
    this.mostCommonMistake = "No Mistakes Yet";
    this.leastCommonMistake = "No Mistakes Yet";
  }
  ngOnInit() {
    this.questions = this.sylSrv.questions;
    const typeMistakesCount = {};
    this.questions.filter(q => q.isValid !== q.userAnswer).forEach(q => {
      typeMistakesCount[q.type] = typeMistakesCount[q.type] || 0;
      typeMistakesCount[q.type]++;
    });
    const sorted = Object.entries(typeMistakesCount).sort((a, b) => a[1] - b[1]);
    if (sorted.length) {
      this.mostCommonMistake = sorted[sorted.length - 1][0];
      this.leastCommonMistake = sorted[0][0];
    }
  }
  static {
    this.ɵfac = function ErrorAnalysisComponent_Factory(t) {
      return new (t || ErrorAnalysisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_syllogimous_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_0__.SyllogimousService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ErrorAnalysisComponent,
      selectors: [["app-error-analysis"]],
      decls: 17,
      vars: 2,
      consts: [[1, "text-center"], [1, "list-group"], [1, "list-group-item", "align-items-center", "flex-between"]],
      template: function ErrorAnalysisComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Error Analysis");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 1)(3, "li", 2)(4, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Most Common");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Mistake Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 2)(11, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Least Common");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Mistake Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.mostCommonMistake);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.leastCommonMistake);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5567:
/*!************************************************************!*\
  !*** ./src/app/syllogimous/pages/stats/stats.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsComponent": () => (/* binding */ StatsComponent)
/* harmony export */ });
/* harmony import */ var _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/syllogimous.constants */ 9182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_stats_export_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/stats-export.service */ 1506);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card/card.component */ 8640);
/* harmony import */ var _accuracy_stats_accuracy_stats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accuracy-stats/accuracy-stats.component */ 7018);
/* harmony import */ var _error_analysis_error_analysis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-analysis/error-analysis.component */ 3534);
/* harmony import */ var _tier_stats_tier_stats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tier-stats/tier-stats.component */ 1204);
/* harmony import */ var _time_based_stats_time_based_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time-based-stats/time-based-stats.component */ 7639);
/* harmony import */ var _type_based_stats_type_based_stats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./type-based-stats/type-based-stats.component */ 7982);










class StatsComponent {
  constructor(router, statsExportService) {
    this.router = router;
    this.statsExportService = statsExportService;
    this.EnumScreens = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.EnumScreens;
  }
  exportStats() {
    this.statsExportService.exportStats();
  }
  static {
    this.ɵfac = function StatsComponent_Factory(t) {
      return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_stats_export_service__WEBPACK_IMPORTED_MODULE_1__.StatsExportService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: StatsComponent,
      selectors: [["app-stats"]],
      decls: 16,
      vars: 0,
      consts: [["body", "", 1, "d-grid", "gap-5", "py-4", "px-md-3", 2, "min-width", "320px"], ["footer", "", 1, "playcard-toolbar"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "bi", "bi-download"]],
      template: function StatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-card")(1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-tier-stats")(3, "app-accuracy-stats")(4, "app-time-based-stats")(5, "app-type-based-stats")(6, "app-error-analysis");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 1)(8, "div")(9, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StatsComponent_Template_button_click_9_listener() {
            return ctx.router.navigate([ctx.EnumScreens.Start]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " Start ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div")(13, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StatsComponent_Template_button_click_13_listener() {
            return ctx.exportStats();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Export CSV ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _accuracy_stats_accuracy_stats_component__WEBPACK_IMPORTED_MODULE_3__.AccuracyStatsComponent, _error_analysis_error_analysis_component__WEBPACK_IMPORTED_MODULE_4__.ErrorAnalysisComponent, _tier_stats_tier_stats_component__WEBPACK_IMPORTED_MODULE_5__.TierStatsComponent, _time_based_stats_time_based_stats_component__WEBPACK_IMPORTED_MODULE_6__.TimeBasedStatsComponent, _type_based_stats_type_based_stats_component__WEBPACK_IMPORTED_MODULE_7__.TypeBasedStatsComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1204:
/*!****************************************************************************!*\
  !*** ./src/app/syllogimous/pages/stats/tier-stats/tier-stats.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TierStatsComponent": () => (/* binding */ TierStatsComponent)
/* harmony export */ });
/* harmony import */ var src_app_syllogimous_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/syllogimous/constants/syllogimous.constants */ 9182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_syllogimous_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/syllogimous/services/syllogimous.service */ 3943);



class TierStatsComponent {
  constructor(sylSrv) {
    this.sylSrv = sylSrv;
    this.TIER_SCORE_RANGES = src_app_syllogimous_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.TIER_SCORE_RANGES;
    this.tiers = Object.values(src_app_syllogimous_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.EnumTiers);
    this.nextTier = src_app_syllogimous_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.EnumTiers.Savant;
    this.pointsRemaining = 0;
  }
  ngOnInit() {
    const currTierIdx = this.tiers.findIndex(tier => tier === this.sylSrv.tier);
    this.nextTier = this.tiers[currTierIdx + 1] || "--";
    this.pointsRemaining = this.nextTier ? src_app_syllogimous_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.TIER_SCORE_RANGES[this.nextTier].minScore - this.sylSrv.score : 0;
  }
  static {
    this.ɵfac = function TierStatsComponent_Factory(t) {
      return new (t || TierStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_syllogimous_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__.SyllogimousService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TierStatsComponent,
      selectors: [["app-tier-stats"]],
      decls: 23,
      vars: 4,
      consts: [[1, "text-center"], [1, "list-group"], [1, "list-group-item", "flex-between"]],
      template: function TierStatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tier");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 1)(3, "li", 2)(4, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Tier");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 2)(9, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Points Earned");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 2)(14, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Next Tier");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 2)(19, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Points Remaining to Next Tier");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.sylSrv.tier);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.sylSrv.score);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.nextTier);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pointsRemaining);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7639:
/*!****************************************************************************************!*\
  !*** ./src/app/syllogimous/pages/stats/time-based-stats/time-based-stats.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeBasedStatsComponent": () => (/* binding */ TimeBasedStatsComponent)
/* harmony export */ });
/* harmony import */ var src_app_utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/date */ 9322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_syllogimous_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/syllogimous/services/syllogimous.service */ 3943);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





function TimeBasedStatsComponent_div_26_ng_container_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 11)(1, "li", 2)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Average Time per Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 2)(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Fastest Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 2)(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Slowest Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ps_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 3, ctx_r5.timeBasedStats[ps_r4] ? ctx_r5.timeBasedStats[ps_r4].sum / (1000 * ctx_r5.timeBasedStats[ps_r4].count || 0) : 0, ".1-1"), " s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 6, (ctx_r5.timeBasedStats[ps_r4] == null ? null : ctx_r5.timeBasedStats[ps_r4].fastest) / 1000 || 0, ".1-1"), " s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 9, (ctx_r5.timeBasedStats[ps_r4] == null ? null : ctx_r5.timeBasedStats[ps_r4].slowest) / 1000 || 0, ".1-1"), " s");
  }
}
function TimeBasedStatsComponent_div_26_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 8)(2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TimeBasedStatsComponent_div_26_ng_container_3_ng_template_4_Template, 19, 12, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ps_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", ps_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ps_r4, " Ps");
  }
}
const _c0 = function () {
  return ["2", "3", "4", "5", "6+"];
};
function TimeBasedStatsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "ul", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activeIdChange", function TimeBasedStatsComponent_div_26_Template_ul_activeIdChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const activeTab_r1 = restoredCtx.ngIf;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](activeTab_r1.value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TimeBasedStatsComponent_div_26_ng_container_3_Template, 5, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const activeTab_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeId", activeTab_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavOutlet", _r2);
  }
}
const _c1 = function () {
  return {
    value: "2"
  };
};
class TimeBasedStatsComponent {
  constructor(sylSrv) {
    this.sylSrv = sylSrv;
    this.formatTime = src_app_utils_date__WEBPACK_IMPORTED_MODULE_0__.formatTime;
    this.questions = [];
    this.totalPlayTime = 0;
    this.avgAnswer = 0;
    this.fastestAnswer = 0;
    this.slowestAnswer = 0;
    this.questions = this.sylSrv.questions;
    this.timeBasedStats = {};
    for (const q of this.questions) {
      const ps = q.premises.length < 6 ? String(q.premises.length) : "6+";
      this.timeBasedStats[ps] = this.timeBasedStats[ps] || {
        sum: 0,
        count: 0,
        fastest: 0,
        slowest: 0
      };
      const dt = q.answeredAt - q.createdAt;
      this.totalPlayTime += dt;
      this.timeBasedStats[ps].sum += dt;
      this.timeBasedStats[ps].count += 1;
      if (q.userAnswer !== undefined) {
        if (this.fastestAnswer === 0 || dt < this.fastestAnswer) {
          this.fastestAnswer = dt;
        }
        if (this.slowestAnswer === 0 || dt > this.slowestAnswer) {
          this.slowestAnswer = dt;
        }
        if (this.timeBasedStats[ps].fastest === 0 || dt < this.timeBasedStats[ps].fastest) {
          this.timeBasedStats[ps].fastest = dt;
        }
        if (this.timeBasedStats[ps].slowest === 0 || dt > this.timeBasedStats[ps].slowest) {
          this.timeBasedStats[ps].slowest = dt;
        }
      }
    }
    console.log("Time based stats", this.timeBasedStats);
  }
  static {
    this.ɵfac = function TimeBasedStatsComponent_Factory(t) {
      return new (t || TimeBasedStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_syllogimous_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__.SyllogimousService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TimeBasedStatsComponent,
      selectors: [["app-time-based-stats"]],
      decls: 27,
      vars: 15,
      consts: [[1, "text-center"], [1, "list-group", "mb-3"], [1, "list-group-item", "flex-between"], [4, "ngIf"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [4, "ngFor", "ngForOf"], [1, "shadow-sm", "overflow-hidden", "border", "border-top-0", 3, "ngbNavOutlet"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "list-group", "list-group-flush"]],
      template: function TimeBasedStatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Time-Based");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 1)(3, "li", 2)(4, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Total Play Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 2)(9, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Average Time per Answer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 2)(15, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Fastest Answer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 2)(21, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Slowest Answer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, TimeBasedStatsComponent_div_26_Template, 5, 4, "div", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.formatTime(ctx.totalPlayTime));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 5, ctx.questions.length !== 0 ? ctx.totalPlayTime / (1000 * ctx.questions.length) : 0, ".1-1"), " s");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](19, 8, ctx.fastestAnswer / 1000 || 0, ".1-1"), " s");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](25, 11, ctx.slowestAnswer / 1000 || 0, ".1-1"), " s");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c1));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7982:
/*!****************************************************************************************!*\
  !*** ./src/app/syllogimous/pages/stats/type-based-stats/type-based-stats.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeBasedStatsComponent": () => (/* binding */ TypeBasedStatsComponent)
/* harmony export */ });
/* harmony import */ var src_app_syllogimous_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/syllogimous/constants/question.constants */ 6189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_syllogimous_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/syllogimous/services/syllogimous.service */ 3943);
/* harmony import */ var src_app_syllogimous_services_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/syllogimous/services/stats.service */ 1750);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);






function TypeBasedStatsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Type-Based");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Play to see something here");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TypeBasedStatsComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.sylSrv.playArcadeMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Play ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function TypeBasedStatsComponent_div_2_div_15_ng_container_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 17)(1, "li", 9)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Average Time per Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li", 9)(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Fastest Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 9)(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Slowest Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ps_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const type_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 3, ctx_r10.typeBasedStats[type_r4].stats[ps_r9] ? ctx_r10.typeBasedStats[type_r4].stats[ps_r9].sum / (1000 * ctx_r10.typeBasedStats[type_r4].stats[ps_r9].count) || 0 : 0, ".1-1"), " s");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 6, (ctx_r10.typeBasedStats[type_r4].stats[ps_r9] == null ? null : ctx_r10.typeBasedStats[type_r4].stats[ps_r9].fastest) / 1000 || 0, ".1-1"), " s");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](18, 9, (ctx_r10.typeBasedStats[type_r4].stats[ps_r9] == null ? null : ctx_r10.typeBasedStats[type_r4].stats[ps_r9].slowest) / 1000 || 0, ".1-1"), " s");
  }
}
function TypeBasedStatsComponent_div_2_div_15_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 14)(2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TypeBasedStatsComponent_div_2_div_15_ng_container_3_ng_template_4_Template, 19, 12, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ps_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbNavItem", ps_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ps_r9, " Ps");
  }
}
function TypeBasedStatsComponent_div_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "ul", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activeIdChange", function TypeBasedStatsComponent_div_2_div_15_Template_ul_activeIdChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const tabInfo_r6 = restoredCtx.ngIf;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](tabInfo_r6.initial = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TypeBasedStatsComponent_div_2_div_15_ng_container_3_Template, 5, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tabInfo_r6 = ctx.ngIf;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("activeId", tabInfo_r6.initial);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", tabInfo_r6.premises);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbNavOutlet", _r7);
  }
}
const _c0 = function () {
  return ["2", "3", "4", "5", "6+"];
};
const _c1 = function (a1) {
  return {
    initial: "2",
    premises: a1
  };
};
function TypeBasedStatsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 8)(4, "li", 9)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Completed Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 9)(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Accuracy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, TypeBasedStatsComponent_div_2_div_15_Template, 5, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](type_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.typeBasedStats[type_r4].completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 4, ctx_r1.typeBasedStats[type_r4].accuracy));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0)));
  }
}
class TypeBasedStatsComponent {
  constructor(sylSrv, statsService) {
    this.sylSrv = sylSrv;
    this.statsService = statsService;
    this.EnumQuestionType = src_app_syllogimous_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.EnumQuestionType;
    const {
      types,
      typeBasedStats
    } = this.statsService.calcStats();
    this.types = types;
    this.typeBasedStats = typeBasedStats;
  }
  static {
    this.ɵfac = function TypeBasedStatsComponent_Factory(t) {
      return new (t || TypeBasedStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_syllogimous_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__.SyllogimousService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_syllogimous_services_stats_service__WEBPACK_IMPORTED_MODULE_2__.StatsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TypeBasedStatsComponent,
      selectors: [["app-type-based-stats"]],
      decls: 3,
      vars: 2,
      consts: [["class", "card p-3 rounded text-center", 4, "ngIf"], [1, "d-grid", "gap-5"], [4, "ngFor", "ngForOf"], [1, "card", "p-3", "rounded", "text-center"], [1, "my-3"], [1, "btn", "btn-lg", "btn-primary", 3, "click"], [1, "bi", "bi-play-fill"], [1, "text-center"], [1, "list-group", "my-3"], [1, "list-group-item", "flex-between"], [4, "ngIf"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [1, "shadow-sm", "overflow-hidden", "border", "border-top-0", 3, "ngbNavOutlet"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "list-group", "list-group-flush"]],
      template: function TypeBasedStatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TypeBasedStatsComponent_div_0_Template, 8, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TypeBasedStatsComponent_div_2_Template, 16, 9, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.types.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.types);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.PercentPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1388:
/*!**************************************************************************!*\
  !*** ./src/app/syllogimous/pages/tiers-matrix/tiers-matrix.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiersMatrixComponent": () => (/* binding */ TiersMatrixComponent)
/* harmony export */ });
/* harmony import */ var _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/syllogimous.constants */ 9182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/syllogimous.service */ 3943);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card/card.component */ 8640);





function TiersMatrixComponent_ng_container_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TiersMatrixComponent_ng_container_12_ng_container_2_Template_span_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const j_r5 = restoredCtx.index;
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.showDetails(i_r2, j_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const numOfPremises_r4 = ctx.$implicit;
    const j_r5 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("cell-selected", i_r2 === ctx_r3.cellSelI && j_r5 === ctx_r3.cellSelJ);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "question-type-" + j_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](numOfPremises_r4);
  }
}
function TiersMatrixComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TiersMatrixComponent_ng_container_12_ng_container_2_Template, 3, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("current-tier", i_r2 === ctx_r0.userTierIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "tier-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r1[1]);
  }
}
class TiersMatrixComponent {
  constructor(sylSrv) {
    this.sylSrv = sylSrv;
    this.TIERS_MATRIX = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.TIERS_MATRIX;
    this.entriesOfMatrix = Object.entries(_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.TIERS_MATRIX);
    this.userTierIdx = 0;
    this.tier = "--click below--";
    this.questionType = "--click below--";
    this.cellSelI = -1;
    this.cellSelJ = -1;
    this.userTierIdx = Math.max(0, _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.ORDERED_TIERS.findIndex(t => t === sylSrv.tier));
  }
  showDetails(i, j) {
    this.cellSelI = i;
    this.cellSelJ = j;
    this.tier = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.ORDERED_TIERS.find((_, _i) => _i === i) || "";
    this.questionType = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.ORDERED_QUESTION_TYPES.find((_, _j) => _j === j) || "";
  }
  static {
    this.ɵfac = function TiersMatrixComponent_Factory(t) {
      return new (t || TiersMatrixComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__.SyllogimousService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TiersMatrixComponent,
      selectors: [["app-tiers-matrix"]],
      decls: 13,
      vars: 3,
      consts: [["body", ""], [1, "mb-3"], [1, "matrix"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "ngClass", "click"]],
      template: function TiersMatrixComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-card")(1, "div", 0)(2, "div", 1)(3, "div")(4, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Tier");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div")(8, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Question Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TiersMatrixComponent_ng_container_12_Template, 3, 4, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.tier, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.questionType, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.entriesOfMatrix);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent],
      styles: [".tier-0[_ngcontent-%COMP%] {\n  background-color: rgba(232, 245, 233, 0.1333333333);\n}\n\n.tier-1[_ngcontent-%COMP%] {\n  background-color: rgba(200, 230, 201, 0.1333333333);\n}\n\n.tier-2[_ngcontent-%COMP%] {\n  background-color: rgba(165, 214, 167, 0.1333333333);\n}\n\n.tier-3[_ngcontent-%COMP%] {\n  background-color: rgba(129, 199, 132, 0.1333333333);\n}\n\n.tier-4[_ngcontent-%COMP%] {\n  background-color: rgba(102, 187, 106, 0.1333333333);\n}\n\n.tier-5[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.1333333333);\n}\n\n.tier-6[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.1333333333);\n}\n\n.tier-7[_ngcontent-%COMP%] {\n  background-color: rgba(255, 213, 79, 0.1333333333);\n}\n\n.tier-8[_ngcontent-%COMP%] {\n  background-color: rgba(255, 183, 77, 0.1333333333);\n}\n\n.tier-9[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.1333333333);\n}\n\n.tier-10[_ngcontent-%COMP%] {\n  background-color: rgba(245, 124, 0, 0.1333333333);\n}\n\n.tier-11[_ngcontent-%COMP%] {\n  background-color: rgba(230, 74, 25, 0.1333333333);\n}\n\n.tier-12[_ngcontent-%COMP%] {\n  background-color: rgba(229, 115, 115, 0.1333333333);\n}\n\n.tier-13[_ngcontent-%COMP%] {\n  background-color: rgba(239, 83, 80, 0.1333333333);\n}\n\n.tier-14[_ngcontent-%COMP%] {\n  background-color: rgba(211, 47, 47, 0.1333333333);\n}\n\n.tier-15[_ngcontent-%COMP%] {\n  background-color: rgba(183, 28, 28, 0.1333333333);\n}\n\n.question-type-0[_ngcontent-%COMP%] {\n  color: #2ecc71;\n}\n\n.question-type-1[_ngcontent-%COMP%] {\n  color: #27ae60;\n}\n\n.question-type-2[_ngcontent-%COMP%] {\n  color: #16a085;\n}\n\n.question-type-3[_ngcontent-%COMP%] {\n  color: #f1c40f;\n}\n\n.question-type-4[_ngcontent-%COMP%] {\n  color: #f39c12;\n}\n\n.question-type-5[_ngcontent-%COMP%] {\n  color: #e67e22;\n}\n\n.question-type-6[_ngcontent-%COMP%] {\n  color: #d35400;\n}\n\n.question-type-7[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n\n.question-type-8[_ngcontent-%COMP%] {\n  color: #c0392b;\n}\n\n.question-type-9[_ngcontent-%COMP%] {\n  color: #9b59b6;\n}\n\n.question-type-10[_ngcontent-%COMP%] {\n  color: #8e44ad;\n}\n\n.question-type-11[_ngcontent-%COMP%] {\n  color: #34495e;\n}\n\n.question-type-12[_ngcontent-%COMP%] {\n  color: #2c3e50;\n}\n\nspan[class^=question-type][_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 4.375vmin;\n  height: 3.5vmin;\n  place-items: center;\n  cursor: pointer;\n}\nspan[class^=question-type][_ngcontent-%COMP%]:hover {\n  box-shadow: inset 0 0 0 2px;\n}\n\n.current-tier[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 2px #f00;\n}\n\n.cell-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 2px;\n}\n\n.matrix[_ngcontent-%COMP%] {\n  font-size: 2.5vmin;\n  line-height: 1.18;\n  border: 1px solid;\n  border-radius: 0.25rem;\n  box-shadow: 6px 6px;\n}\n\n@media (max-width: 768px) {\n  span[class^=question-type][_ngcontent-%COMP%] {\n    width: 7vmin;\n    height: 5.6vmin;\n  }\n  .matrix[_ngcontent-%COMP%] {\n    font-size: 4.5vmin;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvcGFnZXMvdGllcnMtbWF0cml4L3RpZXJzLW1hdHJpeC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1EQUFBO0FBQ0o7O0FBRUE7RUFDSSxtREFBQTtBQUNKOztBQUVBO0VBQ0ksbURBQUE7QUFDSjs7QUFFQTtFQUNJLG1EQUFBO0FBQ0o7O0FBRUE7RUFDSSxtREFBQTtBQUNKOztBQUVBO0VBQ0ksaURBQUE7QUFDSjs7QUFFQTtFQUNJLGtEQUFBO0FBQ0o7O0FBRUE7RUFDSSxrREFBQTtBQUNKOztBQUVBO0VBQ0ksa0RBQUE7QUFDSjs7QUFFQTtFQUNJLGlEQUFBO0FBQ0o7O0FBRUE7RUFDSSxpREFBQTtBQUNKOztBQUVBO0VBQ0ksaURBQUE7QUFDSjs7QUFFQTtFQUNJLG1EQUFBO0FBQ0o7O0FBRUE7RUFDSSxpREFBQTtBQUNKOztBQUVBO0VBQ0ksaURBQUE7QUFDSjs7QUFFQTtFQUNJLGlEQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7RUFDSSwyQkFBQTtBQUNSOztBQUdBO0VBQ0ksZ0NBQUE7QUFBSjs7QUFHQTtFQUNJLDJCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNJLFlBQUE7SUFDQSxlQUFBO0VBQU47RUFHRTtJQUNJLGtCQUFBO0VBRE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi50aWVyLTAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjVlOTIyO1xyXG59XHJcblxyXG4udGllci0xIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGU2YzkyMjtcclxufVxyXG5cclxuLnRpZXItMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkNmE3MjI7XHJcbn1cclxuXHJcbi50aWVyLTMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxYzc4NDIyO1xyXG59XHJcblxyXG4udGllci00IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmJiNmEyMjtcclxufVxyXG5cclxuLnRpZXItNSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwMjI7XHJcbn1cclxuXHJcbi50aWVyLTYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWIzYjIyO1xyXG59XHJcblxyXG4udGllci03IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ1NGYyMjtcclxufVxyXG5cclxuLnRpZXItOCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzRkMjI7XHJcbn1cclxuXHJcbi50aWVyLTkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDIyO1xyXG59XHJcblxyXG4udGllci0xMCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwMjI7XHJcbn1cclxuXHJcbi50aWVyLTExIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjRhMTkyMjtcclxufVxyXG5cclxuLnRpZXItMTIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1NzM3MzIyO1xyXG59XHJcblxyXG4udGllci0xMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY1MzUwMjI7XHJcbn1cclxuXHJcbi50aWVyLTE0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmYyMjtcclxufVxyXG5cclxuLnRpZXItMTUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I3MWMxYzIyO1xyXG59XHJcblxyXG4ucXVlc3Rpb24tdHlwZS0wIHtcclxuICAgIGNvbG9yOiAjMmVjYzcxO1xyXG59XHJcblxyXG4ucXVlc3Rpb24tdHlwZS0xIHtcclxuICAgIGNvbG9yOiAjMjdhZTYwO1xyXG59XHJcblxyXG4ucXVlc3Rpb24tdHlwZS0yIHtcclxuICAgIGNvbG9yOiAjMTZhMDg1O1xyXG59XHJcblxyXG4ucXVlc3Rpb24tdHlwZS0zIHtcclxuICAgIGNvbG9yOiAjZjFjNDBmO1xyXG59XHJcblxyXG4ucXVlc3Rpb24tdHlwZS00IHtcclxuICAgIGNvbG9yOiAjZjM5YzEyO1xyXG59XHJcblxyXG4ucXVlc3Rpb24tdHlwZS01IHtcclxuICAgIGNvbG9yOiAjZTY3ZTIyO1xyXG59XHJcblxyXG4ucXVlc3Rpb24tdHlwZS02IHtcclxuICAgIGNvbG9yOiAjZDM1NDAwO1xyXG59XHJcblxyXG4ucXVlc3Rpb24tdHlwZS03IHtcclxuICAgIGNvbG9yOiAjZTc0YzNjO1xyXG59XHJcblxyXG4ucXVlc3Rpb24tdHlwZS04IHtcclxuICAgIGNvbG9yOiAjYzAzOTJiO1xyXG59XHJcblxyXG4ucXVlc3Rpb24tdHlwZS05IHtcclxuICAgIGNvbG9yOiAjOWI1OWI2O1xyXG59XHJcblxyXG4ucXVlc3Rpb24tdHlwZS0xMCB7XHJcbiAgICBjb2xvcjogIzhlNDRhZDtcclxufVxyXG5cclxuLnF1ZXN0aW9uLXR5cGUtMTEge1xyXG4gICAgY29sb3I6ICMzNDQ5NWU7XHJcbn1cclxuXHJcbi5xdWVzdGlvbi10eXBlLTEyIHtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG59XHJcblxyXG5zcGFuW2NsYXNzXj1cInF1ZXN0aW9uLXR5cGVcIl0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICB3aWR0aDogNC4zNzV2bWluO1xyXG4gICAgaGVpZ2h0OiAzLjV2bWluO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXJyZW50LXRpZXIge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICNmMDA7XHJcbn1cclxuXHJcbi5jZWxsLXNlbGVjdGVkIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweDtcclxufVxyXG5cclxuLm1hdHJpeCB7XHJcbiAgICBmb250LXNpemU6IDIuNXZtaW47XHJcbiAgICBsaW5lLWhlaWdodDogMS4xODtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDZweCA2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgc3BhbltjbGFzc149XCJxdWVzdGlvbi10eXBlXCJdIHtcclxuICAgICAgICB3aWR0aDogN3ZtaW47XHJcbiAgICAgICAgaGVpZ2h0OiA1LjZ2bWluO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXRyaXgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNC41dm1pbjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4490:
/*!*************************************************************************!*\
  !*** ./src/app/syllogimous/pages/tutorial/analogy/analogy.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialAnalogyComponent": () => (/* binding */ TutorialAnalogyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TutorialAnalogyComponent {
  static {
    this.ɵfac = function TutorialAnalogyComponent_Factory(t) {
      return new (t || TutorialAnalogyComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TutorialAnalogyComponent,
      selectors: [["app-tutorial-analogy"]],
      decls: 37,
      vars: 0,
      consts: [[1, "is-negated"]],
      template: function TutorialAnalogyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How to Play Analogy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Each analogy question begins with a set of statements that define the relationships between different items. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul")(5, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Brush is the same as Desk");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Desk is opposite of Bread");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Skirt is opposite of Heart");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Bread is the same as Skirt");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "After reviewing the relationships, you'll be presented with an analogy that you need to evaluate. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p")(16, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Conclusion:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \"Heart to Bread is the same as Skirt to Desk.\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Based on your analysis, click the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " button if you believe the given relationship is correct or the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " button if you think it is not.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Inversion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Whenever you encounter a phrase highlighted in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ", it's an indication that you need to think inversely about the information presented.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1511:
/*!***********************************************************************!*\
  !*** ./src/app/syllogimous/pages/tutorial/binary/binary.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialBinaryComponent": () => (/* binding */ TutorialBinaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TutorialBinaryComponent {
  static {
    this.ɵfac = function TutorialBinaryComponent_Factory(t) {
      return new (t || TutorialBinaryComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TutorialBinaryComponent,
      selectors: [["app-tutorial-binary"]],
      decls: 40,
      vars: 0,
      consts: [[1, "is-negated"]],
      template: function TutorialBinaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How to Play Binary");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Each binary question starts with a set of relationships between different items. Here\u2019s an example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul")(5, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Jaw is same as Foot");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Foot is opposite of Barbie");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No Violin is Cashier");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "All Violin is Paint");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Jaw is same as Barbie");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Now, consider the following conclusion:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "blockquote");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\"Jaw is same as Barbie ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "or");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " No Cashier is Paint\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Based on your analysis, click the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " button if you believe the given relationship is correct or the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " button if you think it is not.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Inversion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Whenever you encounter a phrase highlighted in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ", it's an indication that you need to think inversely about the information presented.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4706:
/*!***************************************************************************************************!*\
  !*** ./src/app/syllogimous/pages/tutorial/circular-arrangement/circular-arrangement.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialCircularArrangementComponent": () => (/* binding */ TutorialCircularArrangementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TutorialCircularArrangementComponent {
  static {
    this.ɵfac = function TutorialCircularArrangementComponent_Factory(t) {
      return new (t || TutorialCircularArrangementComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TutorialCircularArrangementComponent,
      selectors: [["app-tutorial-circular-arrangement"]],
      decls: 29,
      vars: 0,
      consts: [[1, "is-negated"]],
      template: function TutorialCircularArrangementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How to Play Circular Arrangement");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Each question presents a set of circular arrangement relationships. For instance:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul")(5, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sand is to the right of Kangaroo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cello is to the immediate right of Sand");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "To solve the puzzle, arrange the subjects in a circle based on the provided premises.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "If the conclusion is \"Kangaroo is to the immediate left of Cello,\" and your arrangement shows that \"Kangaroo\" is directly to the left of \"Cello\", then you would click ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ". If not, click ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Inversion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Whenever you encounter a phrase highlighted in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ", it's an indication that you need to think inversely about the information presented.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9929:
/*!***********************************************************************************************************!*\
  !*** ./src/app/syllogimous/pages/tutorial/comparison-chronological/comparison-chronological.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialComparisonChronologicalComponent": () => (/* binding */ TutorialComparisonChronologicalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TutorialComparisonChronologicalComponent {
  static {
    this.ɵfac = function TutorialComparisonChronologicalComponent_Factory(t) {
      return new (t || TutorialComparisonChronologicalComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TutorialComparisonChronologicalComponent,
      selectors: [["app-tutorial-comparison-chronological"]],
      decls: 34,
      vars: 0,
      consts: [[1, "is-negated"]],
      template: function TutorialComparisonChronologicalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How to Play Comparison Chronological");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Comparison chronological questions have a series of premises that describe the relative order of items. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul")(5, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Knife is after Shoulder");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Knife is before Hostel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Desktop is after Hostel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "You may be asked to verify a statement like \"Is the Knife correctly positioned after the Desktop?\" Given the premises, you would determine that this sequence is ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "After selecting ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " or ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ", you'll receive feedback, allowing you to see if your reasoning was correct.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Inversion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Whenever you encounter a phrase highlighted in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ", it's an indication that you need to think inversely about the information presented.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9035:
/*!***************************************************************************************************!*\
  !*** ./src/app/syllogimous/pages/tutorial/comparison-numerical/comparison-numerical.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialComparisonNumericalComponent": () => (/* binding */ TutorialComparisonNumericalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TutorialComparisonNumericalComponent {
  static {
    this.ɵfac = function TutorialComparisonNumericalComponent_Factory(t) {
      return new (t || TutorialComparisonNumericalComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TutorialComparisonNumericalComponent,
      selectors: [["app-tutorial-comparison-numerical"]],
      decls: 30,
      vars: 0,
      consts: [[1, "is-negated"]],
      template: function TutorialComparisonNumericalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How to Play Comparison Numerical");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Each question presents you with a set of comparisons between different items. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul")(5, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sea is more than Turtle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Wrist is less than Turtle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "You will need to determine if the conclusion is logically valid based on the relationships given. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p")(12, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Conclusion:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \"Wrist is less than Sea.\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Based on the comparisons (Wrist < Turtle < Sea), this conclusion would be ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Inversion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Whenever you encounter a phrase highlighted in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ", it's an indication that you need to think inversely about the information presented.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9400:
/*!*************************************************************************************************!*\
  !*** ./src/app/syllogimous/pages/tutorial/direction3D-spatial/direction3D-spatial.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialDirection3DSpatialComponent": () => (/* binding */ TutorialDirection3DSpatialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TutorialDirection3DSpatialComponent {
  static {
    this.ɵfac = function TutorialDirection3DSpatialComponent_Factory(t) {
      return new (t || TutorialDirection3DSpatialComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TutorialDirection3DSpatialComponent,
      selectors: [["app-tutorial-direction3D-spatial"]],
      decls: 37,
      vars: 0,
      consts: [[1, "is-negated"]],
      template: function TutorialDirection3DSpatialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How to Play Direction3D Spatial");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Each Direction3D Spatial question presents a set of spatial relationships between different objects. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul")(5, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Temple is Above and West of Luggage");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Luggage is South of Governor");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hotel is North-East of Temple");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Governor is Below of Hotel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "After understanding each object's relative position, you may be asked to verify a specific relationship between two or more objects. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p")(16, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Conclusion:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \"Is the Hotel above the Governor?\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Based on your analysis, click the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " button if you believe the given relationship is correct or the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " button if you think it is not.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Inversion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Whenever you encounter a phrase highlighted in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ", it's an indication that you need to think inversely about the information presented.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4962:
/*!***************************************************************************************************!*\
  !*** ./src/app/syllogimous/pages/tutorial/direction3D-temporal/direction3D-temporal.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialDirection3DTemporalComponent": () => (/* binding */ TutorialDirection3DTemporalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TutorialDirection3DTemporalComponent {
  static {
    this.ɵfac = function TutorialDirection3DTemporalComponent_Factory(t) {
      return new (t || TutorialDirection3DTemporalComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TutorialDirection3DTemporalComponent,
      selectors: [["app-tutorial-direction3D-temporal"]],
      decls: 35,
      vars: 0,
      consts: [[1, "is-negated"]],
      template: function TutorialDirection3DTemporalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How to Play Direction3D Temporal");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Each Direction3D Temporal question presents a series of statements that describe the relative positions of objects. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul")(5, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hammer is in the future and North of Church");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dates is in the present and North-West of Hammer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Church is in the past and South-East of Dates");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "After understanding each object's position and their relations to each other, you need to test a conclusion. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p")(14, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Conclusion:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \"Is the Church to the south-east of the Dates?\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Based on your analysis, click the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " button if you believe the given relationship is correct or the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " button if you think it is not.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Inversion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Whenever you encounter a phrase highlighted in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ", it's an indication that you need to think inversely about the information presented.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8538:
/*!*****************************************************************************!*\
  !*** ./src/app/syllogimous/pages/tutorial/direction/direction.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialDirectionComponent": () => (/* binding */ TutorialDirectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TutorialDirectionComponent {
  static {
    this.ɵfac = function TutorialDirectionComponent_Factory(t) {
      return new (t || TutorialDirectionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TutorialDirectionComponent,
      selectors: [["app-tutorial-direction"]],
      decls: 31,
      vars: 0,
      consts: [[1, "is-negated"]],
      template: function TutorialDirectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How to Play Direction");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Each question will present a series of directional relationships. These premises describe where one object is located in relation to another. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul")(5, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Jewelry is at East of Color");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tail is at West of Milk");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Color is at South-East of Tail");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Milk is at South-East of Jewelry");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "If the question provides a conclusion like \"Jewelry is north of Tail,\" and your map shows that \"Jewelry\" is not north of \"Tail\" but rather to its east, you would click ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ". If the statement matches your map, click ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inversion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Whenever you encounter a phrase highlighted in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ", it's an indication that you need to think inversely about the information presented.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 35:
/*!*********************************************************************************!*\
  !*** ./src/app/syllogimous/pages/tutorial/distinction/distinction.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialDistinctionComponent": () => (/* binding */ TutorialDistinctionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TutorialDistinctionComponent {
  static {
    this.ɵfac = function TutorialDistinctionComponent_Factory(t) {
      return new (t || TutorialDistinctionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TutorialDistinctionComponent,
      selectors: [["app-tutorial-distinction"]],
      decls: 37,
      vars: 0,
      consts: [[1, "is-negated"]],
      template: function TutorialDistinctionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How to Play Distinction");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Distinction questions begin with a set of premises that define the relationships between various items. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul")(5, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mango is the same as Glass");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Herbs is the same as Mango");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Glass is the same as Shower");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Herbs is opposite of Shower");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Based on your analysis, the game might ask you to evaluate a statement like:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p")(16, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Conclusion:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \"Mango is opposite of Shower.\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Based on your analysis, click the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " button if you believe the given relationship is correct or the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " button if you think it is not.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Inversion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Whenever you encounter a phrase highlighted in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ", it's an indication that you need to think inversely about the information presented.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8827:
/*!***************************************************************************************!*\
  !*** ./src/app/syllogimous/pages/tutorial/graph-matching/graph-matching.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialGraphMatchingComponent": () => (/* binding */ TutorialGraphMatchingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TutorialGraphMatchingComponent {
  static {
    this.ɵfac = function TutorialGraphMatchingComponent_Factory(t) {
      return new (t || TutorialGraphMatchingComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TutorialGraphMatchingComponent,
      selectors: [["app-tutorial-graph-matching"]],
      decls: 36,
      vars: 0,
      consts: [[1, "is-negated"]],
      template: function TutorialGraphMatchingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How to Play Graph Matching");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First, visualize the graph from the premises:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul")(5, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Eave originates from Leaves");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Clothes originate from Eave");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Next, visualize the graph for the conclusion:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul")(12, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Panther leads to Wander");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Wander leads to Bell");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Examine whether the two graphs are isomorphic. This means checking for a one-to-one correspondence between their vertices and edges that maintains connectivity.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "If the premise and conclusion graphs match structurally, click the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " button. Otherwise, click the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " button.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Inversion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Whenever you encounter a phrase highlighted in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ", it's an indication that you need to think inversely about the information presented.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4623:
/*!***********************************************************************************************!*\
  !*** ./src/app/syllogimous/pages/tutorial/linear-arrangement/linear-arrangement.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialLinearArrangementComponent": () => (/* binding */ TutorialLinearArrangementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TutorialLinearArrangementComponent {
  static {
    this.ɵfac = function TutorialLinearArrangementComponent_Factory(t) {
      return new (t || TutorialLinearArrangementComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TutorialLinearArrangementComponent,
      selectors: [["app-tutorial-linear-arrangement"]],
      decls: 29,
      vars: 0,
      consts: [[1, "is-negated"]],
      template: function TutorialLinearArrangementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How to Play Linear Arrangement");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Each question has a series of linear arrangement relationships. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul")(5, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Chicken is to the immediate right of Cinema");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Bike is to the immediate right of Chicken");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "To solve the puzzle, arrange the subjects linearly based on the premises.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "If the conclusion is like \"Cinema is to the immediate left of Bike,\" and your arrangement shows that \"Cinema\" is to the left of \"Chicken\", you would click ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ". If the statement accurately reflects your arrangement, click ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Inversion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Whenever you encounter a phrase highlighted in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ", it's an indication that you need to think inversely about the information presented.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8594:
/*!*****************************************************************************!*\
  !*** ./src/app/syllogimous/pages/tutorial/syllogism/syllogism.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialSyllogismComponent": () => (/* binding */ TutorialSyllogismComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TutorialSyllogismComponent {
  static {
    this.ɵfac = function TutorialSyllogismComponent_Factory(t) {
      return new (t || TutorialSyllogismComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TutorialSyllogismComponent,
      selectors: [["app-tutorial-syllogism"]],
      decls: 62,
      vars: 0,
      consts: [[1, "is-negated"]],
      template: function TutorialSyllogismComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How to Play Syllogism");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Each syllogism question starts with a set of premises. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul")(5, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Some Planet is Soup");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No Freezer is Turtle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No Freezer is Planet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "All Turtle is Planet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The game will present a conclusion that you must evaluate based on the premises. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p")(16, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Conclusion:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \"Some Freezer is Soup.\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Once you\u2019ve analyzed the premises and the conclusion, click the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " button if you believe the conclusion logically follows from the premises, or the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " button if it does not.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Inversion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Whenever you encounter a phrase highlighted in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ", it's an indication that you need to think inversely about the information presented.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul")(38, "li")(39, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "is");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " is equivalent to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "is not");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li")(45, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "is not");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " is equivalent to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "is");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li")(51, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " is equivalent to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "No");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li")(57, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "No");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " is equivalent to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3485:
/*!******************************************************************!*\
  !*** ./src/app/syllogimous/pages/tutorial/tutorial.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialComponent": () => (/* binding */ TutorialComponent)
/* harmony export */ });
/* harmony import */ var _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/syllogimous.constants */ 9182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/syllogimous.service */ 3943);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card/card.component */ 8640);






function TutorialComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div")(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Don't show anymore ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div")(8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TutorialComponent_div_3_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.sylSrv.skipTutorial(_r3.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Skip Tutorial");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function TutorialComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div")(2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TutorialComponent_ng_template_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.router.navigate([ctx_r6.EnumScreens.Tutorials]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Tutorials ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
class TutorialComponent {
  constructor(sylSrv, router) {
    this.sylSrv = sylSrv;
    this.router = router;
    this.EnumScreens = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.EnumScreens;
    this.showBack = false;
    const navigation = this.router.getCurrentNavigation();
    this.showBack = navigation?.extras.state?.data?.showBack;
    console.log("Show back", this.showBack);
  }
  static {
    this.ɵfac = function TutorialComponent_Factory(t) {
      return new (t || TutorialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_1__.SyllogimousService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TutorialComponent,
      selectors: [["app-tutorial"]],
      decls: 6,
      vars: 2,
      consts: [["body", "", 1, "py-3", "px-md-3"], [1, "d-none"], ["footer", "", "class", "playcard-toolbar", 4, "ngIf", "ngIfElse"], ["showBackTemplate", ""], ["footer", "", 1, "playcard-toolbar"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "dontShowAnymore", 1, "form-check-input"], ["dontShowAnymore", ""], ["for", "dontShowAnymore", 1, "form-check-label"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-arrow-left"]],
      template: function TutorialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-card")(1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "router-outlet", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TutorialComponent_div_3_Template, 10, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TutorialComponent_ng_template_4_Template, 5, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showBack)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3652:
/*!********************************************************************!*\
  !*** ./src/app/syllogimous/pages/tutorials/tutorials.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialsComponent": () => (/* binding */ TutorialsComponent)
/* harmony export */ });
/* harmony import */ var _constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/local-storage.constants */ 6376);
/* harmony import */ var _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/syllogimous.constants */ 9182);
/* harmony import */ var _constants_question_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/question.constants */ 6189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_syllogimous_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/syllogimous.service */ 3943);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/card/card.component */ 8640);








function TutorialsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Play to discover question types");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TutorialsComponent_div_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.sylSrv.playArcadeMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Play ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function TutorialsComponent_div_3_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TutorialsComponent_div_3_button_4_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const type_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.navTo(type_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("d-none", !ctx_r4.seenQs[type_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](type_r5);
  }
}
function TutorialsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "If you need a refresher tutorial, just click any of the items below to navigate to the tutorial page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TutorialsComponent_div_3_button_4_Template, 2, 3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.questionTypes);
  }
}
class TutorialsComponent {
  constructor(sylSrv, router) {
    this.sylSrv = sylSrv;
    this.router = router;
    this.EnumScreens = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_1__.EnumScreens;
    this.EnumQuestionType = _constants_question_constants__WEBPACK_IMPORTED_MODULE_2__.EnumQuestionType;
    this.questionTypes = [];
    this.questions = [];
    this.seenQs = {};
    this.questionTypes = Object.values(_constants_question_constants__WEBPACK_IMPORTED_MODULE_2__.EnumQuestionType);
  }
  ngOnInit() {
    const history = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__.LS_HISTORY);
    if (history) {
      this.questions = JSON.parse(history).reverse();
      this.seenQs = this.questions.reduce((acc, curr) => (acc[curr.type] = true, acc), {});
    }
  }
  navTo(type) {
    this.router.navigate([_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_1__.EnumScreens.Tutorial, type], {
      state: {
        data: {
          showBack: true
        }
      }
    });
  }
  static {
    this.ɵfac = function TutorialsComponent_Factory(t) {
      return new (t || TutorialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_syllogimous_service__WEBPACK_IMPORTED_MODULE_3__.SyllogimousService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: TutorialsComponent,
      selectors: [["app-tutorials"]],
      decls: 9,
      vars: 2,
      consts: [["body", "", 1, "py-3", "px-md-3"], ["class", "text-center", 4, "ngIf"], [4, "ngIf"], ["footer", "", 1, "playcard-toolbar"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "text-center"], [1, "mb-3"], [1, "btn", "btn-lg", "btn-primary", 3, "click"], [1, "bi", "bi-play-fill"], [1, "text-center", "lead", 2, "margin-bottom", "2rem"], [1, "d-grid", "gap-2"], ["class", "btn btn-outline-primary", 3, "d-none", "click", 4, "ngFor", "ngForOf"]],
      template: function TutorialsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-card")(1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TutorialsComponent_div_2_Template, 6, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TutorialsComponent_div_3_Template, 5, 1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "div")(6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TutorialsComponent_Template_button_click_6_listener() {
            return ctx.router.navigate([ctx.EnumScreens.Start]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Start ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.questions.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.questions.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__.CardComponent],
      styles: ["[body][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n[body][_ngcontent-%COMP%]     .accordion-button:focus {\r\n    box-shadow: none;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvcGFnZXMvdHV0b3JpYWxzL3R1dG9yaWFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiW2JvZHldIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5bYm9keV0gOjpuZy1kZWVwIC5hY2NvcmRpb24tYnV0dG9uOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6002:
/*!************************************************************!*\
  !*** ./src/app/syllogimous/services/game-timer.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 2740:
/*!**************************************************************************!*\
  !*** ./src/app/syllogimous/services/progress-and-performance.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 1506:
/*!**************************************************************!*\
  !*** ./src/app/syllogimous/services/stats-export.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsExportService": () => (/* binding */ StatsExportService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _syllogimous_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./syllogimous.service */ 3943);


class StatsExportService {
  constructor(sylSrv) {
    this.sylSrv = sylSrv;
  }
  formatDateTime(timestamp) {
    return new Date(timestamp).toLocaleDateString("sv") + " " + new Date(timestamp).toLocaleTimeString("sv");
  }
  getTimerSetting(timerTypeOnAnswer) {
    switch (timerTypeOnAnswer) {
      case "0":
        return "No Timer";
      case "1":
        return "Custom Timer";
      case "2":
        return "Adaptive Timer";
      default:
        return "Unknown";
    }
  }
  exportStats() {
    const questions = [...this.sylSrv.questions].sort((a, b) => a.createdAt - b.createdAt);
    // Create CSV header
    let csvContent = ["ID", "Timestamp", "Mode", "Type", "Number of Premises", "Time Taken (seconds)", "Correct Answer", "User Answer", "Result", "Timer Setting", "User Score", "Has Negation", "Has Meta Relations", "Negation Count", "Meta Relations Count"].join(",") + "\n";
    let lastArcadeScore = 0;
    // Add data rows
    questions.forEach((q, index) => {
      const timeTaken = (q.answeredAt - q.createdAt) / 1000;
      if (!q.playgroundMode) {
        lastArcadeScore = q.userScore;
      }
      const row = [index + 1, this.formatDateTime(q.createdAt), q.playgroundMode ? 'Playground' : 'Arcade', q.type, q.premises.length, timeTaken.toFixed(1), q.isValid, q.userAnswer === undefined ? '- - -' : q.userAnswer, q.userAnswer === undefined ? 'Timeout' : q.userAnswer === q.isValid ? 'Correct' : 'Incorrect', this.getTimerSetting(q.timerTypeOnAnswer), q.playgroundMode ? lastArcadeScore : q.userScore, q.negations > 0 ? 'Yes' : 'No', q.metaRelations > 0 ? 'Yes' : 'No', q.negations || 0, q.metaRelations || 0];
      csvContent += row.join(',') + '\n';
    });
    // Convert to blob and download
    const blob = new Blob([csvContent], {
      type: 'text/csv'
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `syllogimous_history_${new Date().toLocaleDateString("sv")}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  static {
    this.ɵfac = function StatsExportService_Factory(t) {
      return new (t || StatsExportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_syllogimous_service__WEBPACK_IMPORTED_MODULE_0__.SyllogimousService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: StatsExportService,
      factory: StatsExportService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1750:
/*!*******************************************************!*\
  !*** ./src/app/syllogimous/services/stats.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsService": () => (/* binding */ StatsService)
/* harmony export */ });
/* harmony import */ var src_app_utils_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/json */ 4037);
/* harmony import */ var _models_stats_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/stats.models */ 5006);
/* harmony import */ var _constants_question_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/question.constants */ 6189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _syllogimous_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./syllogimous.service */ 3943);





class StatsService {
  constructor(sylSrv) {
    this.sylSrv = sylSrv;
    this.calcStats = timerType => {
      const questions = this.sylSrv.questions.filter(q => q.playgroundMode === !!this.sylSrv.playgroundSettings);
      const types = Object.values(_constants_question_constants__WEBPACK_IMPORTED_MODULE_2__.EnumQuestionType).filter(qt => Object.values(_constants_question_constants__WEBPACK_IMPORTED_MODULE_2__.EnumQuestionType).includes(qt));
      const typeBasedStats = new _models_stats_models__WEBPACK_IMPORTED_MODULE_1__.TypeBasedStats();
      for (let type of types) {
        const tbs = typeBasedStats[type];
        const questionsByType = questions.filter(q => q.type === type && (timerType == null || q.timerTypeOnAnswer === timerType));
        tbs.type = type;
        tbs.completed = questionsByType.length;
        tbs.accuracy = questionsByType.filter(q => q.userAnswer === q.isValid).length / (questionsByType.length || 1);
        for (const q of questionsByType) {
          const ps = q.premises.length < 6 ? String(q.premises.length) : "6+";
          const dt = q.answeredAt - q.createdAt;
          tbs.stats[ps].sum += dt;
          tbs.stats[ps].count++;
          if (q.userAnswer == undefined) {
            tbs.stats[ps].timeout++;
          } else if (q.userAnswer === q.isValid) {
            tbs.stats[ps].correct++;
          } else {
            tbs.stats[ps].incorrect++;
          }
          if (q.userAnswer !== undefined) {
            if (tbs.stats[ps].fastest === 0 || dt < tbs.stats[ps].fastest) {
              tbs.stats[ps].fastest = dt;
            }
            if (tbs.stats[ps].slowest === 0 || dt > tbs.stats[ps].slowest) {
              tbs.stats[ps].slowest = dt;
            }
          }
          // Calculate last 10 questions stats
          if (tbs.stats[ps].last10Count < 10) {
            tbs.stats[ps].last10Sum += dt;
            tbs.stats[ps].last10Count++;
            if (q.userAnswer == undefined) {
              tbs.stats[ps].last10Timeout++;
            } else if (q.userAnswer === q.isValid) {
              tbs.stats[ps].last10Correct++;
            } else {
              tbs.stats[ps].last10Incorrect++;
            }
            if (q.userAnswer !== undefined) {
              if (tbs.stats[ps].last10Fastest === 0 || dt < tbs.stats[ps].last10Fastest) {
                tbs.stats[ps].last10Fastest = dt;
              }
              if (tbs.stats[ps].last10Slowest === 0 || dt > tbs.stats[ps].last10Slowest) {
                tbs.stats[ps].last10Slowest = dt;
              }
            }
          }
        }
        ;
      }
      console.log("Stats", {
        types,
        typeBasedStats
      });
      return {
        types,
        questions,
        typeBasedStats: (0,src_app_utils_json__WEBPACK_IMPORTED_MODULE_0__.jsonCopy)(typeBasedStats)
      };
    };
  }
  static {
    this.ɵfac = function StatsService_Factory(t) {
      return new (t || StatsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_syllogimous_service__WEBPACK_IMPORTED_MODULE_3__.SyllogimousService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: StatsService,
      factory: StatsService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 3943:
/*!*************************************************************!*\
  !*** ./src/app/syllogimous/services/syllogimous.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyllogimousService": () => (/* binding */ SyllogimousService)
/* harmony export */ });
/* harmony import */ var C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _models_question_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/question.models */ 2631);
/* harmony import */ var _utils_question_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/question.utils */ 8251);
/* harmony import */ var _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/question.constants */ 6189);
/* harmony import */ var _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/syllogimous.constants */ 9182);
/* harmony import */ var _constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/local-storage.constants */ 6376);
/* harmony import */ var _components_modal_level_change_modal_level_change_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modal-level-change/modal-level-change.component */ 8487);
/* harmony import */ var _models_settings_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/settings.models */ 5003);
/* harmony import */ var src_app_utils_uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/uuid */ 3488);
/* harmony import */ var _constants_settings_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/settings.constants */ 8266);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/logger */ 3476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _progress_and_performance_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progress-and-performance.service */ 2740);
/* harmony import */ var _game_timer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game-timer.service */ 6002);

















class SyllogimousService {
  get score() {
    return this._score;
  }
  set score(value) {
    this._score = value;
    localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_5__.LS_SCORE, JSON.stringify(value));
  }
  get tier() {
    for (const tier of Object.values(_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.EnumTiers)) {
      const range = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.TIER_SCORE_RANGES[tier];
      if (this.score >= range.minScore && this.score <= range.maxScore) {
        return tier;
      }
    }
    return _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.EnumTiers.Adept;
  }
  get settings() {
    return this.playgroundSettings || this.getSettingsFromTier(this.tier);
  }
  get questions() {
    let questions = [];
    const history = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_5__.LS_HISTORY);
    if (history) {
      questions = JSON.parse(history);
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
    this.logger = new _utils_logger__WEBPACK_IMPORTED_MODULE_10__.Logger("info", true);
    this.loadScore();
    window.syllogimous = this;
    // Create a first dummy question to avoid null pointer etc...
    const firstDummyQuestion = this.createSyllogism(2);
    firstDummyQuestion.conclusion = "!";
    this.question = firstDummyQuestion;
  }
  loadScore() {
    const lsScore = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_5__.LS_SCORE);
    if (lsScore) {
      this.score = JSON.parse(lsScore);
    }
  }
  pushIntoHistory(question) {
    localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_5__.LS_HISTORY, JSON.stringify([question, ...this.questions]));
  }
  /** Given an EnumTiers value construct a Settings instance */
  getSettingsFromTier(tier) {
    const tierIdx = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.ORDERED_TIERS.findIndex(_tier => _tier === tier);
    const settings = new _models_settings_models__WEBPACK_IMPORTED_MODULE_7__.Settings();
    settings.setEnable("negation", false);
    settings.setEnable("meta", false);
    for (let i = 0; i < _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.TIERS_MATRIX[tierIdx].length; i++) {
      const questionType = _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.ORDERED_QUESTION_TYPES[i];
      const isActive = !!_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.TIERS_MATRIX[tierIdx][i];
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
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Distinction]: () => this.createDistinction(numOfPremises),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.ComparisonNumerical]: () => this.createComparison(numOfPremises, _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.ComparisonNumerical),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.ComparisonChronological]: () => this.createComparison(numOfPremises, _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.ComparisonChronological),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Syllogism]: () => this.createSyllogism(numOfPremises),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.LinearArrangement]: () => this.createArrangement(numOfPremises, _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.LinearArrangement),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.CircularArrangement]: () => this.createArrangement(numOfPremises, _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.CircularArrangement),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Direction]: () => this.createDirection(numOfPremises),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Direction3DSpatial]: () => this.createDirection3D(numOfPremises, _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Direction3DSpatial),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Direction3DTemporal]: () => this.createDirection3D(numOfPremises, _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Direction3DTemporal),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.GraphMatching]: () => this.createGraphMatching(numOfPremises),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Analogy]: () => this.createAnalogy(numOfPremises),
      [_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Binary]: () => this.createBinary(numOfPremises)
    }[questionType];
  }
  /** Return a random question based on the current settings */
  createRandomQuestion(numOfPremises, basic) {
    const settings = this.settings;
    this.logger.info("Settings", settings);
    this.logger.info("Training units", this.progressAndPerformanceService.getAllTrainingUnits());
    const typeSettingTuples = Object.entries(settings.question);
    const getQuestionGroup = qg => typeSettingTuples.filter(([qt, qs]) => qs.group == qg);
    const groupsOfQuestions = [getQuestionGroup(undefined), getQuestionGroup(_constants_settings_constants__WEBPACK_IMPORTED_MODULE_9__.EnumQuestionGroup.Comparison), getQuestionGroup(_constants_settings_constants__WEBPACK_IMPORTED_MODULE_9__.EnumQuestionGroup.Direction), getQuestionGroup(_constants_settings_constants__WEBPACK_IMPORTED_MODULE_9__.EnumQuestionGroup.Arrangement)];
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
      localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_5__.LS_DONT_SHOW + _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.EnumScreens.Intro, "1");
    }
    this.router.navigate([_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.EnumScreens.Start]);
  }
  play() {
    this.question = this.createRandomQuestion();
    if (this.playgroundSettings) {
      this.router.navigate([_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.EnumScreens.Game]);
    } else {
      if (!localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_5__.LS_DONT_SHOW + this.question.type)) {
        this.router.navigate([_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.EnumScreens.Tutorial, this.question.type]);
      } else {
        this.router.navigate([_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.EnumScreens.Game]);
      }
    }
  }
  playArcadeMode() {
    this.playgroundSettings = undefined;
    this.play();
  }
  skipTutorial(dontShowAnymore) {
    if (dontShowAnymore) {
      localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_5__.LS_DONT_SHOW + this.question.type, "1");
    }
    this.router.navigate([_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.EnumScreens.Game]);
  }
  checkQuestion(value) {
    var _this = this;
    return (0,C_Users_federico_trotta_grup_Documents_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.question.userAnswer = value;
      _this.question.answeredAt = Date.now();
      _this.question.timerTypeOnAnswer = localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_5__.LS_TIMER) || "0";
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
          } = _constants_settings_constants__WEBPACK_IMPORTED_MODULE_9__.QUESTION_TYPE_SETTING_PARAMS[type];
          if ((timeout + wrong) / trainingUnitLength >= premisesDownThreshold) {
            if (premises > minNumOfPremises) {
              _this.gameTimerService.stop();
              const modalRef = _this.modalService.open(_components_modal_level_change_modal_level_change_component__WEBPACK_IMPORTED_MODULE_6__.ModalLevelChangeComponent, {
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
              const modalRef = _this.modalService.open(_components_modal_level_change_modal_level_change_component__WEBPACK_IMPORTED_MODULE_6__.ModalLevelChangeComponent, {
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
          _this.score += _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.TIER_SCORE_ADJUSTMENTS[_this.tier].increment;
          ds += 1;
        } else {
          _this.score = Math.max(0, _this.score - _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.TIER_SCORE_ADJUSTMENTS[_this.tier].decrement);
          if (_this.score > 0) {
            ds -= 1;
          }
        }
        _this.question.userScore = _this.score;
        const nextTier = _this.tier;
        // Level up/down
        if (currTier !== nextTier) {
          _this.gameTimerService.stop();
          const modalRef = _this.modalService.open(_components_modal_level_change_modal_level_change_component__WEBPACK_IMPORTED_MODULE_6__.ModalLevelChangeComponent, {
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
      _this.router.navigate([_constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_4__.EnumScreens.Feedback]);
    })();
  }
  createSyllogism(numOfPremises) {
    this.logger.info("createSyllogism");
    const type = _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Syllogism;
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_7__.canGenerateQuestion)(type, numOfPremises, settings)) {
      throw new Error("Cannot generate.");
    }
    const length = numOfPremises + 1;
    const question = new _models_question_models__WEBPACK_IMPORTED_MODULE_1__.Question(type);
    question.isValid = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
    do {
      question.rule = question.isValid ? (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomRuleValid)() : (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomRuleInvalid)();
      question.bucket = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomSymbols)(settings, length);
      question.premises = [];
      [question.premises[0], question.premises[1], question.conclusion] = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getSyllogism)(settings, question.bucket[0], question.bucket[1], question.bucket[2], question.isValid ? (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomRuleValid)() : (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomRuleInvalid)());
    } while ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.isPremiseLikeConclusion)(question.premises, question.conclusion));
    for (let i = 3; i < length; i++) {
      const rnd = Math.floor(Math.random() * (i - 1));
      const flip = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)();
      const [p, m] = flip ? [question.bucket[i], question.bucket[rnd]] : [question.bucket[rnd], question.bucket[i]];
      question.premises.push((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getSyllogism)(settings, "#####", p, m, (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomRuleInvalid)())[0]);
    }
    (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.shuffle)(question.premises);
    return question;
  }
  createDistinction(numOfPremises) {
    this.logger.info("createDistinction");
    const type = _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Distinction;
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_7__.canGenerateQuestion)(type, numOfPremises, settings)) {
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
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_7__.canGenerateQuestion)(type, numOfPremises, settings)) {
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
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_7__.canGenerateQuestion)(type, numOfPremises, settings)) {
      throw new Error("Cannot generate.");
    }
    const numOfEls = numOfPremises + 1;
    const isLinear = type === _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.LinearArrangement;
    const getWays = isLinear ? _utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getLinearWays : _utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getCircularWays;
    const symbols = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getSymbols)(settings);
    const words = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(symbols, numOfEls).picked;
    const question = new _models_question_models__WEBPACK_IMPORTED_MODULE_1__.Question(type);
    question.instructions = [];
    question.instructions.push(`There are <b>${_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.NUMBER_WORDS[numOfEls] || numOfEls} subjects</b> along a <b>${isLinear ? "linear" : "circular"}</b> path.`);
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
            uid: (0,src_app_utils_uuid__WEBPACK_IMPORTED_MODULE_8__.guid)()
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
    if (!isLinear && numOfEls === 3 && interpolated === _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumArrangements.Next) {
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
    const type = _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Direction;
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_7__.canGenerateQuestion)(type, numOfPremises, settings)) {
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
        const numStepsVertical = _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.NUMBER_WORDS[cardinals[0][1]] || cardinals[0][1];
        relationship = numStepsVertical + " step" + (cardinals[0][1] > 1 ? "s" : "") + " " + cardinals[0][0];
        if (cardinals.length === 2) {
          const numStepsHorizontal = _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.NUMBER_WORDS[cardinals[1][1]] || cardinals[1][1];
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
        uid: (0,src_app_utils_uuid__WEBPACK_IMPORTED_MODULE_8__.guid)()
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
      if ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)() && conclusion.cardinals.length === 2) {
        this.logger.info("One cardinal got plucked");
        conclusion.cardinals = [(0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(conclusion.cardinals, 1).picked[0]];
        tweaked = true;
      }
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
    // TODO: Create meta relationship
    return question;
  }
  createDirection3D(numOfPremises, type) {
    this.logger.info("createDirection3D");
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_7__.canGenerateQuestion)(type, numOfPremises, settings)) {
      throw new Error("Cannot generate.");
    }
    const numOfEls = numOfPremises + 1;
    const symbols = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.getSymbols)(settings);
    const words = (0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(symbols, numOfEls).picked;
    const question = new _models_question_models__WEBPACK_IMPORTED_MODULE_1__.Question(type);
    const isSpatial = type === _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Direction3DSpatial;
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
      const n = _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.NUMBER_WORDS[absdiff] || absdiff;
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
      const numStepsVertical = _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.NUMBER_WORDS[cardinals[0][1]] || cardinals[0][1];
      const s = cardinals[0][1] > 1 ? "s" : "";
      relationship = `${numStepsVertical} step${s} ${cardinals[0][0]}`;
      if (cardinals.length === 2) {
        const numStepsHorizontal = _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.NUMBER_WORDS[cardinals[1][1]] || cardinals[1][1];
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
        uid: (0,src_app_utils_uuid__WEBPACK_IMPORTED_MODULE_8__.guid)()
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
      if ((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.coinFlip)() && conclusion.cardinals.length === 2) {
        this.logger.info("Cardinal pluck before", JSON.stringify(conclusion.cardinals, null, 2));
        conclusion.cardinals = [(0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(conclusion.cardinals, 1).picked[0]];
        this.logger.info("Cardinal pluck after", JSON.stringify(conclusion.cardinals, null, 2));
      }
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
    // TODO: Create meta relationship
    return question;
  }
  createGraphMatching(numOfPremises) {
    this.logger.info("createGraphMatching");
    const type = _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.GraphMatching;
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_7__.canGenerateQuestion)(type, numOfPremises, settings)) {
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
    const topType = _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Analogy;
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_7__.canGenerateQuestion)(topType, length, settings)) {
      throw new Error("Cannot generate.");
    }
    const choiceIndices = [];
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Distinction].enabled) {
      choiceIndices.push(0);
    }
    // Randomly pick one comparison question from the comparison questions enabled
    const comparisonChoices = [];
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.ComparisonNumerical].enabled) {
      comparisonChoices.push(1);
    }
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.ComparisonChronological].enabled) {
      comparisonChoices.push(2);
    }
    if (comparisonChoices.length) {
      choiceIndices.push((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(comparisonChoices, 1).picked[0]);
    }
    // Randomly pick one direction question from the direction questions enabled
    const directionsChoices = [];
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Direction].enabled) {
      directionsChoices.push(3);
    }
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Direction3DSpatial].enabled) {
      directionsChoices.push(4);
    }
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Direction3DTemporal].enabled) {
      directionsChoices.push(5);
    }
    if (directionsChoices.length) {
      choiceIndices.push((0,_utils_question_utils__WEBPACK_IMPORTED_MODULE_2__.pickUniqueItems)(directionsChoices, 1).picked[0]);
    }
    // Randomly pick one arrangement from enabled arrangements
    const arrangementChoices = [];
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.LinearArrangement].enabled) {
      arrangementChoices.push(6);
    }
    if (settings.question[_constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.CircularArrangement].enabled) {
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
        const type = choiceIndex === 1 ? _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.ComparisonNumerical : _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.ComparisonChronological;
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
          const type = choiceIndex === 4 ? _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Direction3DSpatial : _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Direction3DTemporal;
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
          const type = choiceIndex === 6 ? _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.LinearArrangement : _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.CircularArrangement;
          const isLinear = type === _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.LinearArrangement;
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
    const topType = _constants_question_constants__WEBPACK_IMPORTED_MODULE_3__.EnumQuestionType.Binary;
    const settings = this.settings;
    if (!(0,_models_settings_models__WEBPACK_IMPORTED_MODULE_7__.canGenerateQuestion)(topType, numOfPremises, settings)) {
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
  static {
    this.ɵfac = function SyllogimousService_Factory(t) {
      return new (t || SyllogimousService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_progress_and_performance_service__WEBPACK_IMPORTED_MODULE_11__.ProgressAndPerformanceService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_game_timer_service__WEBPACK_IMPORTED_MODULE_12__.GameTimerService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
      token: SyllogimousService,
      factory: SyllogimousService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 4724:
/*!******************************************************!*\
  !*** ./src/app/syllogimous/syllogimous.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyllogimousComponent": () => (/* binding */ SyllogimousComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class SyllogimousComponent {
  ngAfterViewInit() {
    const greatTitle = document.querySelector(".great-title");
    if (greatTitle) {
      greatTitle.style.marginBottom = "-50px";
      const t = setInterval(() => {
        if (!parseInt(greatTitle.style.marginBottom)) {
          return clearInterval(t);
        }
        greatTitle.style.marginBottom = parseInt(greatTitle.style.marginBottom) + 1 + "px";
      }, 10);
    }
  }
  static {
    this.ɵfac = function SyllogimousComponent_Factory(t) {
      return new (t || SyllogimousComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SyllogimousComponent,
      selectors: [["app-syllogimous"]],
      decls: 1,
      vars: 0,
      consts: [[1, "d-none"]],
      template: function SyllogimousComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet", 0);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["[_nghost-%COMP%] {\n  display: grid;\n  place-items: center;\n  height: 100svh;\n  background-color: #8EC5FC;\n  background-image: linear-gradient(62deg, rgba(142, 197, 252, 0.5333333333) 0%, rgba(224, 195, 252, 0.5333333333) 100%), url('assets/images/bg.avif');\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lsbG9naW1vdXMvc3lsbG9naW1vdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxvSkFBQTtFQUNBLHNCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwc3ZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhFQzVGQztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg2MmRlZywgIzhFQzVGQzg4IDAlLCAjRTBDM0ZDODggMTAwJSksIHVybCgnXmFzc2V0cy9pbWFnZXMvYmcuYXZpZicpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3456:
/*!***************************************************!*\
  !*** ./src/app/syllogimous/syllogimous.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyllogimousModule": () => (/* binding */ SyllogimousModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _syllogimous_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./syllogimous.component */ 4724);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _components_modal_level_change_modal_level_change_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal-level-change/modal-level-change.component */ 8487);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card/card.component */ 8640);
/* harmony import */ var _pages_intro_intro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/intro/intro.component */ 3995);
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/start/start.component */ 2080);
/* harmony import */ var _pages_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/tutorial/tutorial.component */ 3485);
/* harmony import */ var _pages_history_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/history/history.component */ 5773);
/* harmony import */ var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/game/game.component */ 848);
/* harmony import */ var _pages_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/feedback/feedback.component */ 7089);
/* harmony import */ var _pages_stats_stats_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/stats/stats.component */ 5567);
/* harmony import */ var _pages_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/tutorials/tutorials.component */ 3652);
/* harmony import */ var _pages_tutorial_distinction_distinction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/tutorial/distinction/distinction.component */ 35);
/* harmony import */ var _pages_tutorial_syllogism_syllogism_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/tutorial/syllogism/syllogism.component */ 8594);
/* harmony import */ var _pages_tutorial_comparison_numerical_comparison_numerical_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/tutorial/comparison-numerical/comparison-numerical.component */ 9035);
/* harmony import */ var _pages_tutorial_comparison_chronological_comparison_chronological_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/tutorial/comparison-chronological/comparison-chronological.component */ 9929);
/* harmony import */ var _pages_tutorial_direction_direction_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/tutorial/direction/direction.component */ 8538);
/* harmony import */ var _pages_tutorial_direction3D_spatial_direction3D_spatial_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/tutorial/direction3D-spatial/direction3D-spatial.component */ 9400);
/* harmony import */ var _pages_tutorial_direction3D_temporal_direction3D_temporal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/tutorial/direction3D-temporal/direction3D-temporal.component */ 4962);
/* harmony import */ var _pages_tutorial_analogy_analogy_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/tutorial/analogy/analogy.component */ 4490);
/* harmony import */ var _pages_tutorial_binary_binary_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/tutorial/binary/binary.component */ 1511);
/* harmony import */ var _pages_tutorial_linear_arrangement_linear_arrangement_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/tutorial/linear-arrangement/linear-arrangement.component */ 4623);
/* harmony import */ var _pages_tutorial_circular_arrangement_circular_arrangement_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/tutorial/circular-arrangement/circular-arrangement.component */ 4706);
/* harmony import */ var _pages_stats_accuracy_stats_accuracy_stats_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/stats/accuracy-stats/accuracy-stats.component */ 7018);
/* harmony import */ var _pages_stats_error_analysis_error_analysis_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/stats/error-analysis/error-analysis.component */ 3534);
/* harmony import */ var _pages_stats_tier_stats_tier_stats_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/stats/tier-stats/tier-stats.component */ 1204);
/* harmony import */ var _pages_stats_time_based_stats_time_based_stats_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/stats/time-based-stats/time-based-stats.component */ 7639);
/* harmony import */ var _pages_stats_type_based_stats_type_based_stats_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/stats/type-based-stats/type-based-stats.component */ 7982);
/* harmony import */ var _services_stats_export_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/stats-export.service */ 1506);
/* harmony import */ var _components_card_card_dropdown_card_dropdown_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/card/card-dropdown/card-dropdown.component */ 7591);
/* harmony import */ var _pages_settings_timer_choose_timer_choose_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/settings/timer-choose/timer-choose.component */ 1532);
/* harmony import */ var _pages_playground_mode_playground_mode_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/playground-mode/playground-mode.component */ 2120);
/* harmony import */ var _components_progress_and_performance_progress_and_performance_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/progress-and-performance/progress-and-performance.component */ 1135);
/* harmony import */ var _pages_settings_game_mode_choose_game_mode_choose_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/settings/game-mode-choose/game-mode-choose.component */ 9871);
/* harmony import */ var _constants_question_constants__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./constants/question.constants */ 6189);
/* harmony import */ var _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./constants/syllogimous.constants */ 9182);
/* harmony import */ var _pages_tiers_matrix_tiers_matrix_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/tiers-matrix/tiers-matrix.component */ 1388);
/* harmony import */ var _pages_other_games_other_games_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/other-games/other-games.component */ 9105);
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/settings/settings.component */ 6708);
/* harmony import */ var _pages_tutorial_graph_matching_graph_matching_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/tutorial/graph-matching/graph-matching.component */ 8827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/core */ 2560);












































const routes = [{
  path: '',
  component: _syllogimous_component__WEBPACK_IMPORTED_MODULE_0__.SyllogimousComponent,
  children: [{
    path: "",
    redirectTo: _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_35__.EnumScreens.Intro,
    pathMatch: "full"
  }, {
    path: _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_35__.EnumScreens.Intro,
    component: _pages_intro_intro_component__WEBPACK_IMPORTED_MODULE_4__.IntroComponent
  }, {
    path: _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_35__.EnumScreens.Start,
    component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_5__.StartComponent
  }, {
    path: _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_35__.EnumScreens.Game,
    component: _pages_game_game_component__WEBPACK_IMPORTED_MODULE_8__.GameComponent
  }, {
    path: _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_35__.EnumScreens.Stats,
    component: _pages_stats_stats_component__WEBPACK_IMPORTED_MODULE_10__.StatsComponent
  }, {
    path: _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_35__.EnumScreens.History,
    component: _pages_history_history_component__WEBPACK_IMPORTED_MODULE_7__.HistoryComponent
  }, {
    path: _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_35__.EnumScreens.Feedback,
    component: _pages_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_9__.FeedbackComponent
  }, {
    path: _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_35__.EnumScreens.Settings,
    component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_38__.SettingsComponent
  }, {
    path: _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_35__.EnumScreens.Tutorials,
    component: _pages_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_11__.TutorialsComponent
  }, {
    path: _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_35__.EnumScreens.Tutorial,
    component: _pages_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_6__.TutorialComponent,
    children: [{
      path: _constants_question_constants__WEBPACK_IMPORTED_MODULE_34__.EnumQuestionType.Distinction,
      component: _pages_tutorial_distinction_distinction_component__WEBPACK_IMPORTED_MODULE_12__.TutorialDistinctionComponent
    }, {
      path: _constants_question_constants__WEBPACK_IMPORTED_MODULE_34__.EnumQuestionType.ComparisonNumerical,
      component: _pages_tutorial_comparison_numerical_comparison_numerical_component__WEBPACK_IMPORTED_MODULE_14__.TutorialComparisonNumericalComponent
    }, {
      path: _constants_question_constants__WEBPACK_IMPORTED_MODULE_34__.EnumQuestionType.ComparisonChronological,
      component: _pages_tutorial_comparison_chronological_comparison_chronological_component__WEBPACK_IMPORTED_MODULE_15__.TutorialComparisonChronologicalComponent
    }, {
      path: _constants_question_constants__WEBPACK_IMPORTED_MODULE_34__.EnumQuestionType.Syllogism,
      component: _pages_tutorial_syllogism_syllogism_component__WEBPACK_IMPORTED_MODULE_13__.TutorialSyllogismComponent
    }, {
      path: _constants_question_constants__WEBPACK_IMPORTED_MODULE_34__.EnumQuestionType.LinearArrangement,
      component: _pages_tutorial_linear_arrangement_linear_arrangement_component__WEBPACK_IMPORTED_MODULE_21__.TutorialLinearArrangementComponent
    }, {
      path: _constants_question_constants__WEBPACK_IMPORTED_MODULE_34__.EnumQuestionType.CircularArrangement,
      component: _pages_tutorial_circular_arrangement_circular_arrangement_component__WEBPACK_IMPORTED_MODULE_22__.TutorialCircularArrangementComponent
    }, {
      path: _constants_question_constants__WEBPACK_IMPORTED_MODULE_34__.EnumQuestionType.Direction,
      component: _pages_tutorial_direction_direction_component__WEBPACK_IMPORTED_MODULE_16__.TutorialDirectionComponent
    }, {
      path: _constants_question_constants__WEBPACK_IMPORTED_MODULE_34__.EnumQuestionType.Direction3DSpatial,
      component: _pages_tutorial_direction3D_spatial_direction3D_spatial_component__WEBPACK_IMPORTED_MODULE_17__.TutorialDirection3DSpatialComponent
    }, {
      path: _constants_question_constants__WEBPACK_IMPORTED_MODULE_34__.EnumQuestionType.Direction3DTemporal,
      component: _pages_tutorial_direction3D_temporal_direction3D_temporal_component__WEBPACK_IMPORTED_MODULE_18__.TutorialDirection3DTemporalComponent
    }, {
      path: _constants_question_constants__WEBPACK_IMPORTED_MODULE_34__.EnumQuestionType.GraphMatching,
      component: _pages_tutorial_graph_matching_graph_matching_component__WEBPACK_IMPORTED_MODULE_39__.TutorialGraphMatchingComponent
    }, {
      path: _constants_question_constants__WEBPACK_IMPORTED_MODULE_34__.EnumQuestionType.Analogy,
      component: _pages_tutorial_analogy_analogy_component__WEBPACK_IMPORTED_MODULE_19__.TutorialAnalogyComponent
    }, {
      path: _constants_question_constants__WEBPACK_IMPORTED_MODULE_34__.EnumQuestionType.Binary,
      component: _pages_tutorial_binary_binary_component__WEBPACK_IMPORTED_MODULE_20__.TutorialBinaryComponent
    }]
  }, {
    path: _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_35__.EnumScreens.TiersMatrix,
    component: _pages_tiers_matrix_tiers_matrix_component__WEBPACK_IMPORTED_MODULE_36__.TiersMatrixComponent
  }, {
    path: _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_35__.EnumScreens.PlaygroundMode,
    component: _pages_playground_mode_playground_mode_component__WEBPACK_IMPORTED_MODULE_31__.PlaygroundModeComponent
  }, {
    path: _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_35__.EnumScreens.OtherGames,
    component: _pages_other_games_other_games_component__WEBPACK_IMPORTED_MODULE_37__.OtherGamesComponent
  }]
}];
class SyllogimousModule {
  static {
    this.ɵfac = function SyllogimousModule_Factory(t) {
      return new (t || SyllogimousModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵdefineNgModule"]({
      type: SyllogimousModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵdefineInjector"]({
      providers: [_services_stats_export_service__WEBPACK_IMPORTED_MODULE_28__.StatsExportService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_41__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_42__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵsetNgModuleScope"](SyllogimousModule, {
    declarations: [_syllogimous_component__WEBPACK_IMPORTED_MODULE_0__.SyllogimousComponent, _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__.CardComponent, _components_modal_level_change_modal_level_change_component__WEBPACK_IMPORTED_MODULE_2__.ModalLevelChangeComponent, _pages_intro_intro_component__WEBPACK_IMPORTED_MODULE_4__.IntroComponent, _pages_start_start_component__WEBPACK_IMPORTED_MODULE_5__.StartComponent, _pages_history_history_component__WEBPACK_IMPORTED_MODULE_7__.HistoryComponent, _pages_game_game_component__WEBPACK_IMPORTED_MODULE_8__.GameComponent, _pages_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_9__.FeedbackComponent, _pages_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_11__.TutorialsComponent, _pages_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_6__.TutorialComponent, _pages_tutorial_distinction_distinction_component__WEBPACK_IMPORTED_MODULE_12__.TutorialDistinctionComponent, _pages_tutorial_comparison_numerical_comparison_numerical_component__WEBPACK_IMPORTED_MODULE_14__.TutorialComparisonNumericalComponent, _pages_tutorial_comparison_chronological_comparison_chronological_component__WEBPACK_IMPORTED_MODULE_15__.TutorialComparisonChronologicalComponent, _pages_tutorial_syllogism_syllogism_component__WEBPACK_IMPORTED_MODULE_13__.TutorialSyllogismComponent, _pages_tutorial_linear_arrangement_linear_arrangement_component__WEBPACK_IMPORTED_MODULE_21__.TutorialLinearArrangementComponent, _pages_tutorial_circular_arrangement_circular_arrangement_component__WEBPACK_IMPORTED_MODULE_22__.TutorialCircularArrangementComponent, _pages_tutorial_direction_direction_component__WEBPACK_IMPORTED_MODULE_16__.TutorialDirectionComponent, _pages_tutorial_direction3D_spatial_direction3D_spatial_component__WEBPACK_IMPORTED_MODULE_17__.TutorialDirection3DSpatialComponent, _pages_tutorial_direction3D_temporal_direction3D_temporal_component__WEBPACK_IMPORTED_MODULE_18__.TutorialDirection3DTemporalComponent, _pages_tutorial_graph_matching_graph_matching_component__WEBPACK_IMPORTED_MODULE_39__.TutorialGraphMatchingComponent, _pages_tutorial_analogy_analogy_component__WEBPACK_IMPORTED_MODULE_19__.TutorialAnalogyComponent, _pages_tutorial_binary_binary_component__WEBPACK_IMPORTED_MODULE_20__.TutorialBinaryComponent, _pages_stats_stats_component__WEBPACK_IMPORTED_MODULE_10__.StatsComponent, _pages_stats_accuracy_stats_accuracy_stats_component__WEBPACK_IMPORTED_MODULE_23__.AccuracyStatsComponent, _pages_stats_error_analysis_error_analysis_component__WEBPACK_IMPORTED_MODULE_24__.ErrorAnalysisComponent, _pages_stats_tier_stats_tier_stats_component__WEBPACK_IMPORTED_MODULE_25__.TierStatsComponent, _pages_stats_time_based_stats_time_based_stats_component__WEBPACK_IMPORTED_MODULE_26__.TimeBasedStatsComponent, _pages_stats_type_based_stats_type_based_stats_component__WEBPACK_IMPORTED_MODULE_27__.TypeBasedStatsComponent, _components_card_card_dropdown_card_dropdown_component__WEBPACK_IMPORTED_MODULE_29__.CardDropdownComponent, _pages_playground_mode_playground_mode_component__WEBPACK_IMPORTED_MODULE_31__.PlaygroundModeComponent, _pages_settings_timer_choose_timer_choose_component__WEBPACK_IMPORTED_MODULE_30__.TimerChooseComponent, _components_progress_and_performance_progress_and_performance_component__WEBPACK_IMPORTED_MODULE_32__.DailyProgressComponent, _pages_settings_game_mode_choose_game_mode_choose_component__WEBPACK_IMPORTED_MODULE_33__.GameModeChooseComponent, _pages_tiers_matrix_tiers_matrix_component__WEBPACK_IMPORTED_MODULE_36__.TiersMatrixComponent, _pages_other_games_other_games_component__WEBPACK_IMPORTED_MODULE_37__.OtherGamesComponent, _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_38__.SettingsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_41__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_42__.RouterModule]
  });
})();

/***/ }),

/***/ 3476:
/*!*********************************************!*\
  !*** ./src/app/syllogimous/utils/logger.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony export */   "getRandomRuleInvalid": () => (/* binding */ getRandomRuleInvalid),
/* harmony export */   "getRandomRuleValid": () => (/* binding */ getRandomRuleValid),
/* harmony export */   "getRandomSymbols": () => (/* binding */ getRandomSymbols),
/* harmony export */   "getRelation": () => (/* binding */ getRelation),
/* harmony export */   "getSyllogism": () => (/* binding */ getSyllogism),
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
function getRandomRuleValid() {
  return _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.VALID_RULES[Math.floor(Math.random() * _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.VALID_RULES.length)];
}
function getRandomRuleInvalid() {
  let rule;
  while (!rule || _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.VALID_RULES.includes(rule)) {
    rule = "";
    for (let i = 0; i < 3; i++) {
      rule += Math.floor(Math.random() * 4); // Form
    }

    rule += 1 + Math.floor(Math.random() * 4); // Figure
  }

  return rule;
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
  return settings.enabled.meaningfulWords ? [..._constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.NOUNS] : [..._constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.STRINGS];
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
function getSyllogism(settings, s, p, m, rule) {
  const _forms = !settings.enabled.negation ? _constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.FORMS[0] : pickUniqueItems(_constants_question_constants__WEBPACK_IMPORTED_MODULE_0__.FORMS, 1).picked[0];
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
// Checks if two directed graphs (given as edge lists) are isomorphic
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

/***/ 9322:
/*!*******************************!*\
  !*** ./src/app/utils/date.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatTime": () => (/* binding */ formatTime),
/* harmony export */   "isoToStruct": () => (/* binding */ isoToStruct),
/* harmony export */   "structToIso": () => (/* binding */ structToIso)
/* harmony export */ });
function isoToStruct(iso) {
  if (!iso || !/\d{4}-[01]\d-[0-3]\d/.test(iso)) return null;
  const [year, month, day] = [+iso.slice(0, 4), +iso.slice(5, 7), +iso.slice(8, 10)];
  return {
    year,
    month,
    day
  };
}
function structToIso(struct) {
  if (!struct || !struct.year || !struct.month) return null;
  const yyyy = struct.year;
  const MM = (struct.month + "").padStart(2, "0");
  let dd = "01";
  if ("day" in struct) dd = (struct.day + "").padStart(2, "0");
  return yyyy + "-" + MM + "-" + dd;
}
function formatTime(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const remainingSeconds = seconds % 60;
  const remainingMinutes = minutes % 60;
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = remainingMinutes.toString().padStart(2, '0');
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

/***/ }),

/***/ 2875:
/*!*******************************!*\
  !*** ./src/app/utils/file.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

}]);
//# sourceMappingURL=src_app_syllogimous_syllogimous_module_ts.js.map