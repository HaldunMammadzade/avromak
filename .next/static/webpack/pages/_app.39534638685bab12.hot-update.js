"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/langs.js":
/*!*****************************!*\
  !*** ./components/langs.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/useTranslation */ \"./node_modules/next-translate/lib/esm/useTranslation.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\n// import i18nConfig from \"../../../i18n.json\";\nvar router = useRouter();\nvar Langs = function() {\n    _s();\n    var ref = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"common\"), t = ref.t, lang = ref.lang;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"az\"), language = ref1[0], setLang = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLang(localStorage.getItem(\"language\") ? localStorage.getItem(\"language\") : \"az\");\n    }, [\n        lang\n    ]);\n    var changeLang = function(lng) {\n        console.log(lng);\n        localStorage.setItem(\"language\", lng.toString());\n        router.push(router.asPath, undefined, {\n            locale: lng\n        });\n        setLang(lng);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"d-flex align-items-center lang-link mb-0\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: function() {\n                        changeLang(\"az\");\n                    },\n                    className: language == \"az\" ? \"color-black  px-5 cursor\" : \" px-5 cursor\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            class: \"form-check-input\",\n                            type: \"radio\",\n                            name: \"flexRadioDefault\",\n                            id: \"flexRadioDefault2\",\n                            // checked\n                            onClick: function() {\n                                changeLang(\"az\");\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\haldun.memmedzade\\\\Desktop\\\\avromak\\\\components\\\\langs.js\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            class: \"form-check-label\",\n                            for: \"flexRadioDefault2\",\n                            children: \"AZ\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\haldun.memmedzade\\\\Desktop\\\\avromak\\\\components\\\\langs.js\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\haldun.memmedzade\\\\Desktop\\\\avromak\\\\components\\\\langs.js\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: language == \"en\" ? \"color-black  px-5 cursor\" : \" px-5 cursor\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            class: \"form-check-input\",\n                            type: \"radio\",\n                            name: \"flexRadioDefault\",\n                            id: \"flexRadioDefault2\",\n                            onClick: function() {\n                                changeLang(\"en\");\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\haldun.memmedzade\\\\Desktop\\\\avromak\\\\components\\\\langs.js\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            class: \"form-check-label\",\n                            for: \"flexRadioDefault2\",\n                            children: \"EN\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\haldun.memmedzade\\\\Desktop\\\\avromak\\\\components\\\\langs.js\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\haldun.memmedzade\\\\Desktop\\\\avromak\\\\components\\\\langs.js\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: language == \"ru\" ? \"color-black  px-5 cursor\" : \" px-5 cursor\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            class: \"form-check-input\",\n                            type: \"radio\",\n                            name: \"flexRadioDefault\",\n                            id: \"flexRadioDefault2\",\n                            onClick: function() {\n                                changeLang(\"ru\");\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\haldun.memmedzade\\\\Desktop\\\\avromak\\\\components\\\\langs.js\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            class: \"form-check-label\",\n                            for: \"flexRadioDefault2\",\n                            children: \"RU\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\haldun.memmedzade\\\\Desktop\\\\avromak\\\\components\\\\langs.js\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\haldun.memmedzade\\\\Desktop\\\\avromak\\\\components\\\\langs.js\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\haldun.memmedzade\\\\Desktop\\\\avromak\\\\components\\\\langs.js\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(Langs, \"anLDQ806oCn7FQB/2eXbqeVpwgU=\", false, function() {\n    return [\n        next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Langs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Langs);\nvar _c;\n$RefreshReg$(_c, \"Langs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQ3hCQyxJQUFJLEVBQUMsT0FBTzs0QkFDWkMsSUFBSSxFQUFDLGtCQUFrQjs0QkFDdkJDLEVBQUUsRUFBQyxtQkFBbUI7NEJBQ3RCTCxPQUFPLEVBQUUsV0FBTTtnQ0FDWGIsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUNsQjs7Ozs7aUNBQ0g7c0NBQ0YsOERBQUNtQixPQUFLOzRCQUFDSixLQUFLLEVBQUMsa0JBQWtCOzRCQUFDSyxHQUFHLEVBQUMsbUJBQW1CO3NDQUFDLElBRXhEOzs7OztpQ0FBUTs7Ozs7O3lCQUNMOzs7Ozs7aUJBQ0Y7cUJBQ0osQ0FDTjtDQUNKO0dBeEZLM0IsS0FBSzs7UUFDV0gscUVBQWM7OztBQUQ5QkcsS0FBQUEsS0FBSztBQTBGWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xhbmdzLmpzP2M4OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiO1xyXG4vLyBpbXBvcnQgaTE4bkNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vaTE4bi5qc29uXCI7XHJcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5jb25zdCBMYW5ncyA9ICgpID0+IHtcclxuICBjb25zdCB7IHQsIGxhbmcgfSA9IHVzZVRyYW5zbGF0aW9uKFwiY29tbW9uXCIpO1xyXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ10gPSB1c2VTdGF0ZShcImF6XCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TGFuZyhcclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYW5ndWFnZVwiKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFuZ3VhZ2VcIikgOiBcImF6XCJcclxuICAgICk7XHJcbiAgfSwgW2xhbmddKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlTGFuZyA9IChsbmcpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGxuZyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhbmd1YWdlXCIsIGxuZy50b1N0cmluZygpKTtcclxuICAgIHJvdXRlci5wdXNoKHJvdXRlci5hc1BhdGgsIHVuZGVmaW5lZCwgeyBsb2NhbGU6IGxuZyB9KTtcclxuICAgIHNldExhbmcobG5nKTtcclxuICB9O1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGxhbmctbGluayBtYi0wXCI+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZUxhbmcoXCJhelwiKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9PSBcImF6XCJcclxuICAgICAgICAgICAgICAgICAgPyBcImNvbG9yLWJsYWNrICBweC01IGN1cnNvclwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCIgcHgtNSBjdXJzb3JcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmxleFJhZGlvRGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImZsZXhSYWRpb0RlZmF1bHQyXCJcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VMYW5nKFwiYXpcIik7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiZmxleFJhZGlvRGVmYXVsdDJcIj5cclxuICAgICAgICAgICAgICBBWlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9PSBcImVuXCJcclxuICAgICAgICAgICAgICAgICAgPyBcImNvbG9yLWJsYWNrICBweC01IGN1cnNvclwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCIgcHgtNSBjdXJzb3JcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmxleFJhZGlvRGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImZsZXhSYWRpb0RlZmF1bHQyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VMYW5nKFwiZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiZmxleFJhZGlvRGVmYXVsdDJcIj5cclxuICAgICAgICAgICAgICBFTlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9PSBcInJ1XCIgPyBcImNvbG9yLWJsYWNrICBweC01IGN1cnNvclwiIDogXCIgcHgtNSBjdXJzb3JcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmxleFJhZGlvRGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImZsZXhSYWRpb0RlZmF1bHQyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VMYW5nKFwicnVcIik7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiZmxleFJhZGlvRGVmYXVsdDJcIj5cclxuICAgICAgICAgICAgICBSVVxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5ncyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVHJhbnNsYXRpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJMYW5ncyIsInQiLCJsYW5nIiwibGFuZ3VhZ2UiLCJzZXRMYW5nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNoYW5nZUxhbmciLCJsbmciLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsInRvU3RyaW5nIiwicHVzaCIsImFzUGF0aCIsInVuZGVmaW5lZCIsImxvY2FsZSIsInVsIiwiY2xhc3NOYW1lIiwibGkiLCJvbkNsaWNrIiwiaW5wdXQiLCJjbGFzcyIsInR5cGUiLCJuYW1lIiwiaWQiLCJsYWJlbCIsImZvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/langs.js\n");

/***/ })

});