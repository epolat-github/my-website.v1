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



function adddData(data) {
  Object(_dbCon__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
}

;

var Mock = function Mock() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h1", {
    style: {
      color: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Deneme"), __jsx("input", {
    type: "text",
    placeholder: "Type something...",
    id: "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("button", {
    id: "submit",
    onClick: adddData(document.getElementById("input").value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Submit"), __jsx("p", {
    style: {
      color: "red"
    },
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Blank input!"), adddData("ahmet"));
};

/* harmony default export */ __webpack_exports__["default"] = (Mock);

/***/ })

})
//# sourceMappingURL=mock.js.80acb42a33021439f4c6.hot-update.js.map