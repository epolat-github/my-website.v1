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



var transferData = function transferData(data) {
  var name = data.blogName;
  var detail = data.blogDetail;
  document.querySelector(p).innerHTML("name: ".concat(name, ", detail: ").concat(detail));
  Object(_dbCon__WEBPACK_IMPORTED_MODULE_1__["default"])({
    blogName: name,
    blogDetail: detail
  });
};

var Mock = function Mock() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h1", {
    style: {
      color: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Deneme"), __jsx("input", {
    type: "text",
    placeholder: "Blog Name",
    id: "inputName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    placeholder: "Blog Detail",
    id: "inputDetail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("button", {
    className: "submit",
    onClick: function onClick(e) {
      return Object(_dbCon__WEBPACK_IMPORTED_MODULE_1__["default"])({
        blogName: document.getElementById("inputName").value,
        blogDetail: document.getElementById("inputDetail").value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Submit"), __jsx("p", {
    style: {
      color: "red"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Blank input!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Mock);

/***/ })

})
//# sourceMappingURL=mock.js.b75cc2b03ba4b44a3992.hot-update.js.map