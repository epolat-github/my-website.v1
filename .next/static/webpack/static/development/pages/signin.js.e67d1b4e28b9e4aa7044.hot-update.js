webpackHotUpdate("static/development/pages/signin.js",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_dbCon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/dbCon */ "./src/dbCon.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/epolat/Desktop/nextJs/website/pages/signin.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var signin = function signin() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    style: {
      color: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "SIGN IN"), __jsx("input", {
    type: "text",
    placeholder: "email",
    id: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("input", {
    type: "password",
    placeholder: "password",
    id: "pass",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("button", {
    className: "submit",
    onClick: function onClick() {
      if (Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_1__["checkUser"])()) {
        document.getElementById("status").innerHTML = "Already Logged In";
      } else {
        Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_1__["authInstance"])().signInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("pass").value).then(function () {
          document.getElementById("status").innerHTML = "Logged in!";
          document.getElementById("pass").value = "";
          document.getElementById("email").value = "";
        })["catch"](function (error) {
          // Handle Errors here.
          console.log("Error code: ", error.code);
          console.log("Error Message: ", error.message); // ...
        });
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Login"), __jsx("button", {
    className: "submit",
    onClick: function onClick() {
      if (!Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_1__["checkUser"])()) {
        document.getElementById("status").innerHTML = "Already Logged Out";
      } else {
        Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_1__["authInstance"])().signOut();
        document.getElementById("status").innerHTML = "Logged Out";
      } // if (checkUser()) {
      //   document.getElementById("status").innerHTML = "Problem logging out";
      // } else {
      //   document.getElementById("status").innerHTML = "Logged Out";
      // }

    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Log Out"), __jsx("p", {
    id: "status",
    style: {
      color: "red"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (signin);

/***/ })

})
//# sourceMappingURL=signin.js.e67d1b4e28b9e4aa7044.hot-update.js.map