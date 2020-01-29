webpackHotUpdate("static/development/pages/mock.js",{

/***/ "./pages/mock.js":
/*!***********************!*\
  !*** ./pages/mock.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dbCon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dbCon */ "./pages/dbCon.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
var _jsxFileName = "/home/epolat/Desktop/nextJs/website/pages/mock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Mock = function Mock() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h1", {
    style: {
      color: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Deneme"), __jsx("input", {
    type: "text",
    placeholder: "Blog Name",
    id: "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("button", {
    id: "submit",
    onClick: function onClick(e) {
      return Object(_dbCon__WEBPACK_IMPORTED_MODULE_1__["default"])(document.getElementById("input").value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Submit"), __jsx("input", {
    type: "text",
    placeholder: "Blog Detail",
    id: "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("button", {
    id: "submit",
    onClick: function onClick(e) {
      return Object(_dbCon__WEBPACK_IMPORTED_MODULE_1__["default"])(document.getElementById("input").value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Submit"), __jsx("p", {
    style: {
      color: "red"
    },
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Blank input!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Mock);

/***/ })

})
//# sourceMappingURL=mock.js.8033df9fbab43b42da67.hot-update.js.map