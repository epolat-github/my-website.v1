webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: changeUserState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeUserState", function() { return changeUserState; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_dbCon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/dbCon */ "./src/dbCon.js");



var _jsxFileName = "/home/epolat/Desktop/nextJs/website/pages/blog.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






var changeUserState = function changeUserState(user) {
  if (user) {
    document.querySelectorAll(".sign-out").forEach(function (item) {
      return item.classList.add("d-none");
    });
    document.querySelectorAll(".sign-in").forEach(function (item) {
      return item.classList.remove("d-none");
    });
  } //if logged out
  else {
      document.querySelectorAll(".sign-out").forEach(function (item) {
        return item.classList.remove("d-none");
      });
      document.querySelectorAll(".sign-in").forEach(function (item) {
        return item.classList.add("d-none");
      });
    }
};

if (Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_10__["checkUser"])()) {
  console.log(Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_10__["checkUser"])());
  document.querySelectorAll(".sign-out").forEach(function (item) {
    return item.classList.add("d-none");
  });
  document.querySelectorAll(".sign-in").forEach(function (item) {
    return item.classList.remove("d-none");
  });
} //if logged out
else {
    document.querySelectorAll(".sign-out").forEach(function (item) {
      return item.classList.remove("d-none");
    });
    document.querySelectorAll(".sign-in").forEach(function (item) {
      return item.classList.add("d-none");
    });
  }

var signinModal = function signinModal() {
  return __jsx("div", {
    className: "modal fade",
    id: "signinModal",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "signinModalLabel",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "modal-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("h5", {
    className: "modal-title",
    id: "signinModalLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Sign In"), __jsx("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "email",
    id: "emailSignin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("input", {
    type: "password",
    placeholder: "password",
    id: "passSignin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx("p", {
    id: "statusSignin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), __jsx("div", {
    className: "modal-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Close"), __jsx("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: function onClick() {
      document.getElementById("statusSignin").innerHTML = "Checking credentials...";
      Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_10__["authInstance"])().signInWithEmailAndPassword(document.getElementById("emailSignin").value, document.getElementById("passSignin").value).then(function () {
        document.getElementById("passSignin").value = "";
        document.getElementById("emailSignin").value = "";
        window.location.reload();
      })["catch"](function (error) {
        document.getElementById("statusSignin").innerHTML = error.code;
        console.log("Error code: ", error.code);
        console.log("Error Message: ", error.message);
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Sign-in")))));
};

var registerModal = function registerModal() {
  return __jsx("div", {
    className: "modal fade",
    id: "registerModal",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "registerModalLabel",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("div", {
    className: "modal-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("h5", {
    className: "modal-title",
    id: "registerModalLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Register"), __jsx("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "email",
    id: "emailRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), __jsx("input", {
    type: "password",
    placeholder: "password",
    id: "passRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx("p", {
    id: "statusRegister",
    style: {
      marginTop: "3%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })), __jsx("div", {
    className: "modal-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Close"), __jsx("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: function onClick() {
      Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_10__["authInstance"])().createUserWithEmailAndPassword(document.getElementById("emailRegister").value, document.getElementById("passRegister").value).then(function () {
        console.log("Registered.");
        document.getElementById("statusRegister").innerHTML = "Registered."; // authInstance().signOut();

        window.location.reload();
      })["catch"](function (error) {
        console.log(error);
        document.getElementById("statusRegister").innerHTML = error.message;
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Register")))));
};

var blogButtons = function blogButtons() {
  return __jsx("div", {
    className: "container-fluid mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("div", {
    className: "row d-flex justify-content-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    "data-toggle": "modal",
    "data-target": "#registerModal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Register")), __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    "data-toggle": "modal",
    "data-target": "#signinModal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Sign-in")), __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/write",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Write"))), __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary btn-lg",
    onClick: function onClick() {
      Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_10__["authInstance"])().signOut().then(function () {
        return window.location.reload();
      })["catch"](function () {
        return console.log("Sign-out problem.");
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "Sign-out"))));
};

var createCards = function createCards(post) {
  return __jsx("div", {
    key: post.slug + Math.random(),
    className: "col-md-6 col-lg-4 mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx("div", {
    className: "card h-100 border-dark rounded text-white bg-dark mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx("div", {
    className: "card-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx("h3", {
    className: "card-title text-capitalize",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: post.slug,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, post.title))), post.details && __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
    source: post.details.slice(0, 500) + "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }))), __jsx("div", {
    className: "card-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx("small", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, post.date))));
};

var Blog = function Blog(_ref) {
  var posts = _ref.posts,
      postCount = _ref.postCount,
      currPage = _ref.currPage;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, blogButtons(), signinModal(), registerModal(), __jsx("article", {
    id: "blog-container",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1969702575" + " " + "row m-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, posts && posts.map(function (post) {
    return createCards(post);
  })), __jsx("div", {
    id: "page-button-container",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, __jsx("button", {
    disabled: currPage <= 1,
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/blog?page=".concat(currPage - 1));
    },
    className: "jsx-1969702575" + " " + "page-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, "<<"), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(Math.ceil(postCount / 6))).map(function (curr, index) {
    return __jsx("button", {
      key: "button" + index,
      onClick: function onClick() {
        return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/blog?page=".concat(index + 1));
      },
      className: "jsx-1969702575" + " " + "page-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, index + 1);
  }), __jsx("button", {
    disabled: currPage >= Math.ceil(postCount / 6),
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/blog?page=".concat(currPage + 1));
    },
    className: "jsx-1969702575" + " " + "page-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, ">>"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1969702575",
    __self: this
  }, "#post-list.jsx-1969702575{color:white;border-bottom:2px solid white;border-radius:25%;text-align:center;margin:1% 10%;padding:1% 0;}a.jsx-1969702575{font-weight:bold;}.card-title.jsx-1969702575{text-transform:capitalize;}#page-button-container.jsx-1969702575{max-width:600px;margin:0 auto;-webkit-transform:translateX(25%);-ms-transform:translateX(25%);transform:translateX(25%);}.page-button.jsx-1969702575{background-color:#4caf50;border:1px solid white;border-radius:20%;color:white;padding:10px 16px;margin:0 3px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;}.page-button.jsx-1969702575:hover{background-color:#3e8e41;}.page-button[disabled].jsx-1969702575{background-color:gray;}@media only screen and (max-width:600px){#page-button-container.jsx-1969702575{width:100%;display:inline-block;margin-left:50%;-webkit-transform:translateX(-40%);-ms-transform:translateX(-40%);transform:translateX(-40%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa1RnQixBQUdxQixBQVFLLEFBR1MsQUFNVixBQUtTLEFBY0EsQUFHSCxBQUlULFdBRVUsQ0E1Q08sSUFpQmhCLENBVGhCLEtBK0JBLEdBakJ5QixBQWN6QixDQXpCQSxJQU80QixFQTJCUixVQTVDQSxNQXNCQSxBQXVCVyxZQTVDWCxNQXNCTixZQXJCRSxBQXNCSSxjQXJCTCxJQXNCQSxTQXJCZixJQXVCdUIsV0FUdkIscUJBNEJFLGtCQWpCZSxlQUdqQiIsImZpbGUiOiIvaG9tZS9lcG9sYXQvRGVza3RvcC9uZXh0SnMvd2Vic2l0ZS9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgeyBhdXRoSW5zdGFuY2UsIGNoZWNrVXNlciB9IGZyb20gXCIuLi9zcmMvZGJDb25cIjtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVVzZXJTdGF0ZSA9IHVzZXIgPT4ge1xuICBpZiAodXNlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLW91dFwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIikpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLWluXCIpXG4gICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSk7XG4gIH1cbiAgLy9pZiBsb2dnZWQgb3V0XG4gIGVsc2Uge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLW91dFwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIikpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLWluXCIpXG4gICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKSk7XG4gIH1cbn07XG5cbmlmIChjaGVja1VzZXIoKSkge1xuICBjb25zb2xlLmxvZyhjaGVja1VzZXIoKSk7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1vdXRcIilcbiAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKSk7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1pblwiKVxuICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpKTtcbn1cbi8vaWYgbG9nZ2VkIG91dFxuZWxzZSB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1vdXRcIilcbiAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSk7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1pblwiKVxuICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpKTtcbn1cblxuY29uc3Qgc2lnbmluTW9kYWwgPSAoKSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcbiAgICBpZD1cInNpZ25pbk1vZGFsXCJcbiAgICB0YWJJbmRleD1cIi0xXCJcbiAgICByb2xlPVwiZGlhbG9nXCJcbiAgICBhcmlhLWxhYmVsbGVkYnk9XCJzaWduaW5Nb2RhbExhYmVsXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwic2lnbmluTW9kYWxMYWJlbFwiPlxuICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXG4gICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCIgaWQ9XCJlbWFpbFNpZ25pblwiIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIGlkPVwicGFzc1NpZ25pblwiIC8+XG4gICAgICAgICAgPHAgaWQ9XCJzdGF0dXNTaWduaW5cIj48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1NpZ25pblwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIFwiQ2hlY2tpbmcgY3JlZGVudGlhbHMuLi5cIjtcbiAgICAgICAgICAgICAgYXV0aEluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsU2lnbmluXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzU2lnbmluXCIpLnZhbHVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc1NpZ25pblwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsU2lnbmluXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1NpZ25pblwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICBlcnJvci5jb2RlO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjb2RlOiBcIiwgZXJyb3IuY29kZSk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIE1lc3NhZ2U6IFwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2lnbi1pblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IHJlZ2lzdGVyTW9kYWwgPSAoKSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcbiAgICBpZD1cInJlZ2lzdGVyTW9kYWxcIlxuICAgIHRhYkluZGV4PVwiLTFcIlxuICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgIGFyaWEtbGFiZWxsZWRieT1cInJlZ2lzdGVyTW9kYWxMYWJlbFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cInJlZ2lzdGVyTW9kYWxMYWJlbFwiPlxuICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxuICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIGlkPVwiZW1haWxSZWdpc3RlclwiIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIGlkPVwicGFzc1JlZ2lzdGVyXCIgLz5cbiAgICAgICAgICA8cCBpZD1cInN0YXR1c1JlZ2lzdGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMlXCIgfX0+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDbG9zZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYXV0aEluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFJlZ2lzdGVyXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzUmVnaXN0ZXJcIikudmFsdWVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RlcmVkLlwiKTtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzUmVnaXN0ZXJcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgXCJSZWdpc3RlcmVkLlwiO1xuICAgICAgICAgICAgICAgICAgLy8gYXV0aEluc3RhbmNlKCkuc2lnbk91dCgpO1xuICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1JlZ2lzdGVyXCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgYmxvZ0J1dHRvbnMgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtNiBzaWduLW91dFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiXG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgZGF0YS10YXJnZXQ9XCIjcmVnaXN0ZXJNb2RhbFwiXG4gICAgICAgID5cbiAgICAgICAgICBSZWdpc3RlclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtNiBzaWduLW91dFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiXG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgZGF0YS10YXJnZXQ9XCIjc2lnbmluTW9kYWxcIlxuICAgICAgICA+XG4gICAgICAgICAgU2lnbi1pblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtNiBzaWduLWluXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvd3JpdGVcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCI+XG4gICAgICAgICAgICBXcml0ZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1pblwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBhdXRoSW5zdGFuY2UoKVxuICAgICAgICAgICAgICAuc2lnbk91dCgpXG4gICAgICAgICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSlcbiAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUubG9nKFwiU2lnbi1vdXQgcHJvYmxlbS5cIikpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBTaWduLW91dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IGNyZWF0ZUNhcmRzID0gcG9zdCA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e3Bvc3Quc2x1ZyArIE1hdGgucmFuZG9tKCl9IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy00IG1iLTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoLTEwMCBib3JkZXItZGFyayByb3VuZGVkIHRleHQtd2hpdGUgYmctZGFyayBtYi0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LWNhcGl0YWxpemVcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cG9zdC5zbHVnfT5cbiAgICAgICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICB7cG9zdC5kZXRhaWxzICYmIChcbiAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtwb3N0LmRldGFpbHMuc2xpY2UoMCwgNTAwKSArIFwiLi4uXCJ9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e3Bvc3QuZGF0ZX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgQmxvZyA9ICh7IHBvc3RzLCBwb3N0Q291bnQsIGN1cnJQYWdlIH0pID0+IChcbiAgPExheW91dD5cbiAgICB7LyogQmxvZyBzcGVjaWFsIEJ1dHRvbnMgKi99XG4gICAge2Jsb2dCdXR0b25zKCl9XG5cbiAgICB7LyogU2lnbi1pbiBNb2RhbCAqL31cbiAgICB7c2lnbmluTW9kYWwoKX1cblxuICAgIHsvKiBTaWduLW91dCBNb2RhbCAqL31cbiAgICB7cmVnaXN0ZXJNb2RhbCgpfVxuXG4gICAgey8qIFBvc3RzICovfVxuICAgIDxhcnRpY2xlIGlkPVwiYmxvZy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tNVwiPlxuICAgICAgICB7LyogUHJvZHVjZSBwb3N0cyAqL31cbiAgICAgICAge3Bvc3RzICYmIHBvc3RzLm1hcChwb3N0ID0+IGNyZWF0ZUNhcmRzKHBvc3QpKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUGFnaW5hdGlvbiAqL31cbiAgICAgIDxkaXYgaWQ9XCJwYWdlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtYnV0dG9uXCJcbiAgICAgICAgICBkaXNhYmxlZD17Y3VyclBhZ2UgPD0gMX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChgL2Jsb2c/cGFnZT0ke2N1cnJQYWdlIC0gMX1gKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtgPDxgfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAge1suLi5BcnJheShNYXRoLmNlaWwocG9zdENvdW50IC8gNikpXS5tYXAoKGN1cnIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAga2V5PXtcImJ1dHRvblwiICsgaW5kZXh9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChgL2Jsb2c/cGFnZT0ke2luZGV4ICsgMX1gKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtYnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aW5kZXggKyAxfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtYnV0dG9uXCJcbiAgICAgICAgICBkaXNhYmxlZD17Y3VyclBhZ2UgPj0gTWF0aC5jZWlsKHBvc3RDb3VudCAvIDYpfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvYmxvZz9wYWdlPSR7Y3VyclBhZ2UgKyAxfWApfVxuICAgICAgICA+XG4gICAgICAgICAgPj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgI3Bvc3QtbGlzdCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxJSAxMCU7XG4gICAgICAgIHBhZGRpbmc6IDElIDA7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgICAgI3BhZ2UtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIC8qZGlzcGxheTogaW5saW5lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDQwJTsgKi9cbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNSUpO1xuICAgICAgfVxuICAgICAgLnBhZ2UtYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDsgLyogR3JlZW4gKi9cbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICAgIG1hcmdpbjogMCAzcHg7XG4gICAgICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIC8vZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIC8vY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAvL2Zsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgICAgLnBhZ2UtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcbiAgICAgIH1cbiAgICAgIC5wYWdlLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAjcGFnZS1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAvKiBtYXJnaW46IDMlIDUwJTsgKi9cbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwJSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcbkJsb2cuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnk6IHsgcGFnZSA9IDEgfSB9KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LmJhc2VVcmx9YXBpL3Bvc3RzP3BhZ2U9JHtwYWdlfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwb3N0czogZGF0YS5wb3N0cyxcbiAgICBwb3N0Q291bnQ6IHBhcnNlSW50KGRhdGEucG9zdENvdW50LCAxMCksXG4gICAgY3VyclBhZ2U6IHBhcnNlSW50KHBhZ2UsIDEwKVxuICB9OyAvL3JldHVybnMgYW4gYXJyYXlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2c7XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/blog.js */"));
};

Blog.getInitialProps = function _callee(_ref2) {
  var _ref2$query$page, page, res, data;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref2$query$page = _ref2.query.page, page = _ref2$query$page === void 0 ? 1 : _ref2$query$page;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat("http://localhost:3000/", "api/posts?page=").concat(page)));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          data = _context.sent;
          return _context.abrupt("return", {
            posts: data.posts,
            postCount: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(data.postCount, 10),
            currPage: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(page, 10)
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=_app.js.5ccb4d689f83c10ae8a0.hot-update.js.map