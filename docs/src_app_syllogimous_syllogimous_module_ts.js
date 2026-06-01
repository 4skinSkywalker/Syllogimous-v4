"use strict";
(self["webpackChunkmulti_layout"] = self["webpackChunkmulti_layout"] || []).push([["src_app_syllogimous_syllogimous_module_ts"],{

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
/* harmony import */ var C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 26);
  }
  if (rf & 2) {
    const instruction_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", instruction_r22, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function GameComponent_ng_template_0_ng_container_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, GameComponent_ng_template_0_ng_container_0_div_1_div_1_div_4_Template, 1, 1, "div", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 26);
  }
  if (rf & 2) {
    const note_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", note_r25, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function GameComponent_ng_template_0_ng_container_0_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GameComponent_ng_template_0_ng_container_0_div_1_div_2_div_1_Template, 1, 1, "div", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, GameComponent_ng_template_0_ng_container_0_div_1_div_2_Template, 2, 1, "div", 23);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ngb-progressbar", 28)(1, "span", 29);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GameComponent_9_ng_template_0_ng_container_1_Template, 1, 0, "ng-container", 16);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, GameComponent_9_ng_template_0_Template, 2, 1, "ng-template", 30);
  }
}
function GameComponent_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31)(1, "div")(2, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "div", 26);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, GameComponent_10_ng_template_0_Template, 5, 2, "ng-template", 30);
  }
}
function GameComponent_ng_container_11_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31)(1, "div")(2, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "div", 26);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, GameComponent_ng_container_11_1_ng_template_0_Template, 5, 2, "ng-template", 30);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31)(1, "div")(2, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Conclusion");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "div", 26);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, GameComponent_ng_template_12_ng_template_0_Template, 5, 1, "ng-template", 30);
  }
}
function GameComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function GameComponent_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 26);
  }
  if (rf & 2) {
    const p_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", p_r44, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function GameComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GameComponent_div_26_div_1_Template, 1, 1, "div", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 26);
  }
  if (rf & 2) {
    const c_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", c_r48, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function GameComponent_div_27_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GameComponent_div_27_div_3_div_1_Template, 1, 1, "div", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Conclusion");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, GameComponent_div_27_div_3_Template, 2, 1, "div", 34);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Conclusion");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 26);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 36);
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
    this.kickTimer = /*#__PURE__*/(0,C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      vars: 22,
      consts: [["questionInstructionsAndNotes", ""], ["body", "", 1, "battlefield", 3, "ngStyle"], [1, "timerbar-wrap"], ["class", "timerbar", "type", "success", 3, "value", 4, "ngIf"], [2, "border", "0", "box-shadow", "none", 3, "interval", "showNavigationArrows", "showNavigationIndicators"], ["carousel", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["conclusionsIsStringCarouselTemplate", ""], [1, "flex-between", "p-3", 2, "position", "absolute", "left", "0", "bottom", "0", "width", "100%"], [1, "btn", "border-0", 2, "box-shadow", "none", 3, "disabled", "click"], [1, "bi", "bi-arrow-left"], [1, "btn", "border-0", 2, "box-shadow", "none", 3, "click"], [1, "bi", "bi-arrow-right"], [1, "d-grid", "gap-4"], [4, "ngTemplateOutlet"], [1, "small", "text-muted"], ["class", "premises", 4, "ngIf"], ["conclusionIsStringTemplate", ""], ["footer", "", 1, "d-flex", "gap-3", "justify-content-center"], ["class", "btn btn-lg btn-success col-md-3 col-4", 3, "click", 4, "ngIf"], [1, "btn", "btn-lg", "btn-danger", "col-md-3", "col-4", 3, "click"], ["class", "notes", 4, "ngIf"], [1, "instructions"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "notes"], ["type", "success", 1, "timerbar", 3, "value"], [1, "me-2"], ["ngbSlide", ""], [2, "display", "grid", "place-items", "center"], [1, "text-muted"], [1, "premises"], ["class", "conclusions", 4, "ngIf"], [1, "conclusions"], [1, "btn", "btn-lg", "btn-success", "col-md-3", "col-4", 3, "click"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Prev ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GameComponent_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r53);
            const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r3.next());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " Next ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, GameComponent_ng_container_22_Template, 1, 0, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div")(24, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Premises");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, GameComponent_div_26_Template, 2, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, GameComponent_div_27_Template, 4, 1, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, GameComponent_ng_template_28_Template, 4, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, GameComponent_button_31_Template, 2, 0, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GameComponent_Template_button_click_32_listener() {
            return ctx.sylSrv.checkQuestion(false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, GameComponent_button_34_Template, 2, 0, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);
          const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](13);
          const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](20, _c1, ctx.gameMode === "1" || ctx.gameMode === "2" ? "100%" : "auto"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.timerType !== "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("d-none", ctx.gameMode === "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("interval", 999999999)("showNavigationArrows", false)("showNavigationIndicators", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.sylSrv.question.instructions == null ? null : ctx.sylSrv.question.instructions.length) || (ctx.sylSrv.question.notes == null ? null : ctx.sylSrv.question.notes.length));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.sylSrv.question.premises);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.Array.isArray(ctx.sylSrv.question.conclusion))("ngIfElse", _r7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.gameMode === "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("d-none", ctx.gameMode !== "0");
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
/* harmony import */ var C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
    return (0,C_Users_stopc_Documenti_GitHub_Syllogimous_v4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      console.log("Loaded playground settings:", deserialized);
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
    this.nextTier = this.tiers[currTierIdx + 1] || _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.NO_DATA;
    this.pointsRemaining = this.nextTier !== _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.NO_DATA ? _constants_syllogimous_constants__WEBPACK_IMPORTED_MODULE_0__.TIER_SCORE_RANGES[this.nextTier].minScore - this.sylSrv.score : 0;
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
      decls: 38,
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Musician is on the same level and one step West of Bar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cab is one level below, one step North and one step East of Musician");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "After understanding each object's relative position, you may be asked to verify a specific relationship between two or more objects. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p")(12, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Conclusion:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \"Bar is one level above and two steps South of Cab\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Click the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " button if the relationship is correct or the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " button if you think it is not.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "In this specific example the correct answer is ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ", as \"Bar\" is only one step South of \"Cab.\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Inversion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Whenever you encounter a phrase highlighted in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ", it's an indication that you need to think inversely about the information presented.");
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
      decls: 38,
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pie is one hour before and one step West of Trap");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Trap is at the same time, one step North and one step East of Devil");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "After understanding each object's position and their relations to each other, you need to test a conclusion. For example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p")(12, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Conclusion:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \"Pie is one hour before and one step North of Devil\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Click the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " button if the relationship is correct or the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " button if you think it is not.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "In this specific example the correct answer is ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Inversion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Whenever you encounter a phrase highlighted in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ", it's an indication that you need to think inversely about the information presented.");
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
      decls: 32,
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rainbow is two steps North and one step West of Violinist");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Violinist is two steps South of Pet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "If the question provides a conclusion like \"Pet is two steps East of Rainbow,\" and your map shows that \"Pet\" is indeed two steps East of \"Rainbow,\" click ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "True");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " otherwise click ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "In this specific example you would click ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "False");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " because \"Pet\" is only one step East of \"Rainbow.\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Inversion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Cue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Whenever you encounter a phrase highlighted in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ", it's an indication that you need to think inversely about the information presented.");
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

/***/ })

}]);
//# sourceMappingURL=src_app_syllogimous_syllogimous_module_ts.js.map