"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-client)/./src/app/dashboard/page.tsx":
/*!************************************!*\
  !*** ./src/app/dashboard/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const logout = async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/users/logout\");\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Logout successful\");\n            router.push(\"/login\");\n        } catch (error) {\n            console.log(error.message);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.message);\n        }\n    };\n    //<Image className='w-20 h-20 pb-2' src=\"https://cdn4.iconfinder.com/data/icons/testicular-testicles-testes-cancer/283/testicular-testicle-cancer-010-512.png\" alt=\"\" />\n    //<Image className='w-20 h-20 pb-2' src=\"https://cdn3.iconfinder.com/data/icons/logistics-delivery-1-1/128/33-1024.png\" alt=\"\" width=\"20\" height=\"20\"/>\n    //<Image className='w-20 h-20 pb-2' src=\"https://cdn4.iconfinder.com/data/icons/testicular-testicles-testes-cancer/283/testicular-testicle-cancer-010-512.png\" alt=\"\"  width=\"20\" height=\"20\"/>\n    //<Image className='w-20 h-20 pb-2' src=\"https://webstockreview.net/images/blood-clipart-blood-sample-12.png\" width=\"20\" height=\"20\" alt=\"\"/>\n    /*let cardDetailes = [\r\n        {\r\n            heading : \"Weight\",\r\n            image : \"https://cdn4.iconfinder.com/data/icons/testicular-testicles-testes-cancer/283/testicular-testicle-cancer-010-512.png\",\r\n            parag : \"55 kg\",\r\n        },\r\n        {\r\n            heading : \"Weight\",\r\n            image : \"https://cdn3.iconfinder.com/data/icons/logistics-delivery-1-1/128/33-1024.png\",\r\n            parag : \"55 kg\",\r\n        },\r\n        {\r\n            heading : \"Weight\",\r\n            image : \"https://cdn4.iconfinder.com/data/icons/testicular-testicles-testes-cancer/283/testicular-testicle-cancer-010-512.png\",\r\n            parag : \"55 kg\",\r\n        },\r\n        {\r\n            heading : \"Weight\",\r\n            image : \"https://webstockreview.net/images/blood-clipart-blood-sample-12.png\",\r\n            parag : \"55 kg\",\r\n        },]*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-500 h-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"min-h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"bg-gray-800\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex h-16 items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"hidden md:block\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"ml-10 flex items-baseline space-x-4\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"#\",\n                                                        className: \"bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium\",\n                                                        \"aria-current\": \"page\",\n                                                        children: \"Profile\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"#\",\n                                                        className: \"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium\",\n                                                        children: \"Sleep\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"#\",\n                                                        className: \"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium\",\n                                                        children: \"Walk\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"#\",\n                                                        className: \"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium\",\n                                                        children: \"Heart rate\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"#\",\n                                                        className: \"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium\",\n                                                        children: \"Reports\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"hidden md:block\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"ml-4 flex items-center md:ml-6\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: logout,\n                                                type: \"button\",\n                                                className: \"relative rounded-full bg-gray-800 p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 \",\n                                                children: \"Logout\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 13\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-800 h-screen  p-5 text-slate-50 flex flex-col \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Profile:\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Swamy ranga reddy\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col bg-gray-500 w-64 text-black text-center items-center p-10 rounded-lg m-10 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"weight\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"54 kg\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col bg-gray-500 w-64 text-black text-center items-center p-10 rounded-lg m-10 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"height\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"167.64 cm\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col  bg-gray-500 w-64 text-black text-center items-center p-10 rounded-lg m-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Blood\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"B+\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col bg-gray-500 w-64 text-black text-center items-center p-10 rounded-lg m-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Weight\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"55 kg\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-500\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"dashboad\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 81,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Nxtwave\\\\ReactBasic\\\\healthapp\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dashboard, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9kYXNoYm9hcmQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUc0QjtBQUNGO0FBQ1k7QUFDSTtBQUUxQyxNQUFNSSxZQUFZOztJQUNkLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixNQUFNRyxTQUFTO1FBQ1gsSUFBSTtZQUNBLE1BQU1MLDZDQUFLQSxDQUFDTSxJQUFJO1lBQ2hCTCxrREFBS0EsQ0FBQ00sUUFBUTtZQUNkSCxPQUFPSSxLQUFLO1FBQ2hCLEVBQUUsT0FBT0MsT0FBVztZQUNoQkMsUUFBUUMsSUFBSUYsTUFBTUc7WUFDbEJYLGtEQUFLQSxDQUFDUSxNQUFNQSxNQUFNRztRQUN0QjtJQUNKO0lBQ0Esd0tBQXdLO0lBQ3hLLHVKQUF1SjtJQUN2SiwrTEFBK0w7SUFDL0wsNklBQTZJO0lBRTdJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQW9CTyxHQUlQLHFCQUNBLDhEQUFDQzs7MEJBQ0QsOERBQUNBO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFJRCxXQUFVOzs7Ozs7c0NBQ2YsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUVmLDRFQUFDRDs0Q0FBSUMsV0FBVTtzREFDZiw0RUFBQ0Q7Z0RBQUlDLFdBQVU7O2tFQUVYLDhEQUFDZixrREFBSUE7d0RBQUNpQixNQUFLO3dEQUFJRixXQUFVO3dEQUFrRUcsZ0JBQWE7a0VBQU87Ozs7OztrRUFDL0csOERBQUNsQixrREFBSUE7d0RBQUNpQixNQUFLO3dEQUFJRixXQUFVO2tFQUE0Rjs7Ozs7O2tFQUNySCw4REFBQ2Ysa0RBQUlBO3dEQUFDaUIsTUFBSzt3REFBSUYsV0FBVTtrRUFBNEY7Ozs7OztrRUFDckgsOERBQUNmLGtEQUFJQTt3REFBQ2lCLE1BQUs7d0RBQUlGLFdBQVU7a0VBQTRGOzs7Ozs7a0VBQ3JILDhEQUFDZixrREFBSUE7d0RBQUNpQixNQUFLO3dEQUFJRixXQUFVO2tFQUE0Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFJakksOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDRDs0Q0FBSUMsV0FBVTtzREFDYiw0RUFBQ0k7Z0RBQU9DLFNBQVNkO2dEQUFRZSxNQUFLO2dEQUFTTixXQUFVOzBEQUF3Szs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBU2pPLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNPO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNUO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDUTtrREFBRzs7Ozs7O2tEQUVKLDhEQUFDQztrREFBRTs7Ozs7Ozs7Ozs7OzBDQUdQLDhEQUFDVjtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNRO2tEQUFHOzs7Ozs7a0RBRUosOERBQUNDO2tEQUFFOzs7Ozs7Ozs7Ozs7MENBRVAsOERBQUNWO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ1E7a0RBQUc7Ozs7OztrREFFSiw4REFBQ0M7a0RBQUU7Ozs7Ozs7Ozs7OzswQ0FFUCw4REFBQ1Y7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDUTtrREFBRzs7Ozs7O2tEQUVKLDhEQUFDQztrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdYLDhEQUFDVjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ087c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWI7R0F2R0dsQjs7UUFDYUQsc0RBQVNBOzs7S0FEdEJDO0FBeUdOLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2MxNWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHt0b2FzdH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcnMvbG9nb3V0JylcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnTG9nb3V0IHN1Y2Nlc3NmdWwnKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICB9IGNhdGNoIChlcnJvcjphbnkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy88SW1hZ2UgY2xhc3NOYW1lPSd3LTIwIGgtMjAgcGItMicgc3JjPVwiaHR0cHM6Ly9jZG40Lmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvdGVzdGljdWxhci10ZXN0aWNsZXMtdGVzdGVzLWNhbmNlci8yODMvdGVzdGljdWxhci10ZXN0aWNsZS1jYW5jZXItMDEwLTUxMi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgLy88SW1hZ2UgY2xhc3NOYW1lPSd3LTIwIGgtMjAgcGItMicgc3JjPVwiaHR0cHM6Ly9jZG4zLmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvbG9naXN0aWNzLWRlbGl2ZXJ5LTEtMS8xMjgvMzMtMTAyNC5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIi8+XHJcbiAgICAvLzxJbWFnZSBjbGFzc05hbWU9J3ctMjAgaC0yMCBwYi0yJyBzcmM9XCJodHRwczovL2NkbjQuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy90ZXN0aWN1bGFyLXRlc3RpY2xlcy10ZXN0ZXMtY2FuY2VyLzI4My90ZXN0aWN1bGFyLXRlc3RpY2xlLWNhbmNlci0wMTAtNTEyLnBuZ1wiIGFsdD1cIlwiICB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIi8+XHJcbiAgICAvLzxJbWFnZSBjbGFzc05hbWU9J3ctMjAgaC0yMCBwYi0yJyBzcmM9XCJodHRwczovL3dlYnN0b2NrcmV2aWV3Lm5ldC9pbWFnZXMvYmxvb2QtY2xpcGFydC1ibG9vZC1zYW1wbGUtMTIucG5nXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgYWx0PVwiXCIvPlxyXG5cclxuICAgIC8qbGV0IGNhcmREZXRhaWxlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRpbmcgOiBcIldlaWdodFwiLFxyXG4gICAgICAgICAgICBpbWFnZSA6IFwiaHR0cHM6Ly9jZG40Lmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvdGVzdGljdWxhci10ZXN0aWNsZXMtdGVzdGVzLWNhbmNlci8yODMvdGVzdGljdWxhci10ZXN0aWNsZS1jYW5jZXItMDEwLTUxMi5wbmdcIixcclxuICAgICAgICAgICAgcGFyYWcgOiBcIjU1IGtnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRpbmcgOiBcIldlaWdodFwiLFxyXG4gICAgICAgICAgICBpbWFnZSA6IFwiaHR0cHM6Ly9jZG4zLmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvbG9naXN0aWNzLWRlbGl2ZXJ5LTEtMS8xMjgvMzMtMTAyNC5wbmdcIixcclxuICAgICAgICAgICAgcGFyYWcgOiBcIjU1IGtnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRpbmcgOiBcIldlaWdodFwiLFxyXG4gICAgICAgICAgICBpbWFnZSA6IFwiaHR0cHM6Ly9jZG40Lmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvdGVzdGljdWxhci10ZXN0aWNsZXMtdGVzdGVzLWNhbmNlci8yODMvdGVzdGljdWxhci10ZXN0aWNsZS1jYW5jZXItMDEwLTUxMi5wbmdcIixcclxuICAgICAgICAgICAgcGFyYWcgOiBcIjU1IGtnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRpbmcgOiBcIldlaWdodFwiLFxyXG4gICAgICAgICAgICBpbWFnZSA6IFwiaHR0cHM6Ly93ZWJzdG9ja3Jldmlldy5uZXQvaW1hZ2VzL2Jsb29kLWNsaXBhcnQtYmxvb2Qtc2FtcGxlLTEyLnBuZ1wiLFxyXG4gICAgICAgICAgICBwYXJhZyA6IFwiNTUga2dcIixcclxuICAgICAgICB9LF0qLyAgXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj4gXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS01MDAgaC1mdWxsJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1mdWxsXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMFwiLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTQgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTE2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTEwIGZsZXggaXRlbXMtYmFzZWxpbmUgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPlByb2ZpbGU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUgcm91bmRlZC1tZCBweC0zIHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bVwiPlNsZWVwPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcHgtMyBweS0yIHRleHQtc20gZm9udC1tZWRpdW1cIj5XYWxrPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcHgtMyBweS0yIHRleHQtc20gZm9udC1tZWRpdW1cIj5IZWFydCByYXRlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcHgtMyBweS0yIHRleHQtc20gZm9udC1tZWRpdW1cIj5SZXBvcnRzPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTQgZmxleCBpdGVtcy1jZW50ZXIgbWQ6bWwtNlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTgwMCBwLTIgdGV4dC1ncmF5LTIwMCBob3Zlcjp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy13aGl0ZSBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIFwiPiAgICAgIFxyXG4gICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS04MDAgaC1zY3JlZW4gIHAtNSB0ZXh0LXNsYXRlLTUwIGZsZXggZmxleC1jb2wgJz5cclxuICAgICAgICA8aDE+UHJvZmlsZTo8L2gxPlxyXG4gICAgICAgIDxoMj5Td2FteSByYW5nYSByZWRkeTwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgYmctZ3JheS01MDAgdy02NCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyIGl0ZW1zLWNlbnRlciBwLTEwIHJvdW5kZWQtbGcgbS0xMCAnPlxyXG4gICAgICAgICAgICAgICAgPGgyPndlaWdodDwvaDI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxwPjU0IGtnPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGJnLWdyYXktNTAwIHctNjQgdGV4dC1ibGFjayB0ZXh0LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0xMCByb3VuZGVkLWxnIG0tMTAgJz5cclxuICAgICAgICAgICAgICAgIDxoMj5oZWlnaHQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8cD4xNjcuNjQgY208L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCAgYmctZ3JheS01MDAgdy02NCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyIGl0ZW1zLWNlbnRlciBwLTEwIHJvdW5kZWQtbGcgbS0xMCc+XHJcbiAgICAgICAgICAgICAgICA8aDI+Qmxvb2Q8L2gyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8cD5CKzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGJnLWdyYXktNTAwIHctNjQgdGV4dC1ibGFjayB0ZXh0LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0xMCByb3VuZGVkLWxnIG0tMTAnPlxyXG4gICAgICAgICAgICAgICAgPGgyPldlaWdodDwvaDI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxwPjU1IGtnPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTUwMCc+XHJcbiAgICAgICAgICAgIDxoMT5kYXNoYm9hZDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgKX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxyXG4iXSwibmFtZXMiOlsiTGluayIsImF4aW9zIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJEYXNoYm9hcmQiLCJyb3V0ZXIiLCJsb2dvdXQiLCJnZXQiLCJzdWNjZXNzIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJocmVmIiwiYXJpYS1jdXJyZW50IiwiYnV0dG9uIiwib25DbGljayIsInR5cGUiLCJoMSIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/dashboard/page.tsx\n"));

/***/ })

});