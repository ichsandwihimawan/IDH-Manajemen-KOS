(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./resources/js/Pages/Error.js":
/*!*************************************!*\
  !*** ./resources/js/Pages/Error.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n\n // import { usePage } from '@inertiajs/inertia-react';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var status = _ref.status;\n  // const { status } = usePage();\n  var title = {\n    503: '503: Service Unavailable',\n    500: '500: Server Error',\n    404: '404: Page Not Found',\n    403: '403: Forbidden'\n  }[status];\n  var description = {\n    503: 'Sorry, we are doing some maintenance. Please check back soon.',\n    500: 'Whoops, something went wrong on our servers.',\n    404: 'Sorry, the page you are looking for could not be found.',\n    403: 'Sorry, you are forbidden from accessing this page.'\n  }[status];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"p-5 bg-indigo-800 text-indigo-100 min-h-screen flex justify-center items-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    title: title\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"w-full max-w-md\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"text-3xl\"\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"mt-3 text-lg leading-tight\"\n  }, description)));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvRXJyb3IuanM/MDNkMiJdLCJuYW1lcyI6WyJzdGF0dXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFFZSwrRUFBZ0I7QUFBQSxNQUFiQSxNQUFhLFFBQWJBLE1BQWE7QUFDN0I7QUFFQSxNQUFNQyxLQUFLLEdBQUc7QUFDWixTQUFLLDBCQURPO0FBRVosU0FBSyxtQkFGTztBQUdaLFNBQUsscUJBSE87QUFJWixTQUFLO0FBSk8sSUFLWkQsTUFMWSxDQUFkO0FBT0EsTUFBTUUsV0FBVyxHQUFHO0FBQ2xCLFNBQUssK0RBRGE7QUFFbEIsU0FBSyw4Q0FGYTtBQUdsQixTQUFLLHlEQUhhO0FBSWxCLFNBQUs7QUFKYSxJQUtsQkYsTUFMa0IsQ0FBcEI7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLDJEQUFDLG1EQUFEO0FBQVEsU0FBSyxFQUFFQztBQUFmLElBREYsZUFFRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBMEJBLEtBQTFCLENBREYsZUFFRTtBQUFHLGFBQVMsRUFBQztBQUFiLEtBQTJDQyxXQUEzQyxDQUZGLENBRkYsQ0FERjtBQVNELENBMUJEIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL1BhZ2VzL0Vycm9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0Jztcbi8vIGltcG9ydCB7IHVzZVBhZ2UgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBzdGF0dXMgfSkgPT4ge1xuICAvLyBjb25zdCB7IHN0YXR1cyB9ID0gdXNlUGFnZSgpO1xuXG4gIGNvbnN0IHRpdGxlID0ge1xuICAgIDUwMzogJzUwMzogU2VydmljZSBVbmF2YWlsYWJsZScsXG4gICAgNTAwOiAnNTAwOiBTZXJ2ZXIgRXJyb3InLFxuICAgIDQwNDogJzQwNDogUGFnZSBOb3QgRm91bmQnLFxuICAgIDQwMzogJzQwMzogRm9yYmlkZGVuJ1xuICB9W3N0YXR1c107XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSB7XG4gICAgNTAzOiAnU29ycnksIHdlIGFyZSBkb2luZyBzb21lIG1haW50ZW5hbmNlLiBQbGVhc2UgY2hlY2sgYmFjayBzb29uLicsXG4gICAgNTAwOiAnV2hvb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyBvbiBvdXIgc2VydmVycy4nLFxuICAgIDQwNDogJ1NvcnJ5LCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGNvdWxkIG5vdCBiZSBmb3VuZC4nLFxuICAgIDQwMzogJ1NvcnJ5LCB5b3UgYXJlIGZvcmJpZGRlbiBmcm9tIGFjY2Vzc2luZyB0aGlzIHBhZ2UuJ1xuICB9W3N0YXR1c107XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBiZy1pbmRpZ28tODAwIHRleHQtaW5kaWdvLTEwMCBtaW4taC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxIZWxtZXQgdGl0bGU9e3RpdGxlfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1sZyBsZWFkaW5nLXRpZ2h0XCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/Pages/Error.js\n");

/***/ })

}]);