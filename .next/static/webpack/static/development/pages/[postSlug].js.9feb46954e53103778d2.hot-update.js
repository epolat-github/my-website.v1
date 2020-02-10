webpackHotUpdate("static/development/pages/[postSlug].js",{

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

deneme = function deneme() {
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
};

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
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "modal-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h5", {
    className: "modal-title",
    id: "signinModalLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Sign In"), __jsx("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "email",
    id: "emailSignin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx("input", {
    type: "password",
    placeholder: "password",
    id: "passSignin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("p", {
    id: "statusSignin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), __jsx("div", {
    className: "modal-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
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
      lineNumber: 89
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
      lineNumber: 122
    },
    __self: this
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("div", {
    className: "modal-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("h5", {
    className: "modal-title",
    id: "registerModalLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Register"), __jsx("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "email",
    id: "emailRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx("input", {
    type: "password",
    placeholder: "password",
    id: "passRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), __jsx("p", {
    id: "statusRegister",
    style: {
      marginTop: "3%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })), __jsx("div", {
    className: "modal-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
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
      lineNumber: 161
    },
    __self: this
  }, "Register")))));
};

var blogButtons = function blogButtons() {
  return __jsx("div", {
    className: "container-fluid mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx("div", {
    className: "row d-flex justify-content-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    "data-toggle": "modal",
    "data-target": "#registerModal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Register")), __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    "data-toggle": "modal",
    "data-target": "#signinModal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Sign-in")), __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/write",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Write"))), __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
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
      lineNumber: 223
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
      lineNumber: 242
    },
    __self: this
  }, __jsx("div", {
    className: "card h-100 border-dark rounded text-white bg-dark mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx("div", {
    className: "card-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, __jsx("h3", {
    className: "card-title text-capitalize",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: post.slug,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, post.title))), post.details && __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
    source: post.details.slice(0, 500) + "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }))), __jsx("div", {
    className: "card-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, __jsx("small", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
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
      lineNumber: 265
    },
    __self: this
  }, blogButtons(), signinModal(), registerModal(), __jsx("article", {
    id: "blog-container",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1969702575" + " " + "row m-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, posts && posts.map(function (post) {
    return createCards(post);
  })), __jsx("div", {
    id: "page-button-container",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
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
      lineNumber: 284
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
        lineNumber: 292
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
      lineNumber: 300
    },
    __self: this
  }, ">>"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1969702575",
    __self: this
  }, "#post-list.jsx-1969702575{color:white;border-bottom:2px solid white;border-radius:25%;text-align:center;margin:1% 10%;padding:1% 0;}a.jsx-1969702575{font-weight:bold;}.card-title.jsx-1969702575{text-transform:capitalize;}#page-button-container.jsx-1969702575{max-width:600px;margin:0 auto;-webkit-transform:translateX(25%);-ms-transform:translateX(25%);transform:translateX(25%);}.page-button.jsx-1969702575{background-color:#4caf50;border:1px solid white;border-radius:20%;color:white;padding:10px 16px;margin:0 3px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;}.page-button.jsx-1969702575:hover{background-color:#3e8e41;}.page-button[disabled].jsx-1969702575{background-color:gray;}@media only screen and (max-width:600px){#page-button-container.jsx-1969702575{width:100%;display:inline-block;margin-left:50%;-webkit-transform:translateX(-40%);-ms-transform:translateX(-40%);transform:translateX(-40%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb1RnQixBQUdxQixBQVFLLEFBR1MsQUFNVixBQUtTLEFBY0EsQUFHSCxBQUlULFdBRVUsQ0E1Q08sSUFpQmhCLENBVGhCLEtBK0JBLEdBakJ5QixBQWN6QixDQXpCQSxJQU80QixFQTJCUixVQTVDQSxNQXNCQSxBQXVCVyxZQTVDWCxNQXNCTixZQXJCRSxBQXNCSSxjQXJCTCxJQXNCQSxTQXJCZixJQXVCdUIsV0FUdkIscUJBNEJFLGtCQWpCZSxlQUdqQiIsImZpbGUiOiIvaG9tZS9lcG9sYXQvRGVza3RvcC9uZXh0SnMvd2Vic2l0ZS9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgeyBhdXRoSW5zdGFuY2UsIGNoZWNrVXNlciB9IGZyb20gXCIuLi9zcmMvZGJDb25cIjtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVVzZXJTdGF0ZSA9IHVzZXIgPT4ge1xuICBpZiAodXNlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLW91dFwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIikpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLWluXCIpXG4gICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSk7XG4gIH1cbiAgLy9pZiBsb2dnZWQgb3V0XG4gIGVsc2Uge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLW91dFwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIikpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLWluXCIpXG4gICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKSk7XG4gIH1cbn07XG5cbmRlbmVtZSA9ICgpID0+IHtcbiAgaWYgKGNoZWNrVXNlcigpKSB7XG4gICAgY29uc29sZS5sb2coY2hlY2tVc2VyKCkpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLW91dFwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIikpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLWluXCIpXG4gICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSk7XG4gIH1cbiAgLy9pZiBsb2dnZWQgb3V0XG4gIGVsc2Uge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLW91dFwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIikpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLWluXCIpXG4gICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKSk7XG4gIH1cbn07XG5cbmNvbnN0IHNpZ25pbk1vZGFsID0gKCkgPT4gKFxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXG4gICAgaWQ9XCJzaWduaW5Nb2RhbFwiXG4gICAgdGFiSW5kZXg9XCItMVwiXG4gICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVwic2lnbmluTW9kYWxMYWJlbFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cInNpZ25pbk1vZGFsTGFiZWxcIj5cbiAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxuICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIGlkPVwiZW1haWxTaWduaW5cIiAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBpZD1cInBhc3NTaWduaW5cIiAvPlxuICAgICAgICAgIDxwIGlkPVwic3RhdHVzU2lnbmluXCI+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDbG9zZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNTaWduaW5cIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICBcIkNoZWNraW5nIGNyZWRlbnRpYWxzLi4uXCI7XG4gICAgICAgICAgICAgIGF1dGhJbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFNpZ25pblwiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc1NpZ25pblwiKS52YWx1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3NTaWduaW5cIikudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFNpZ25pblwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNTaWduaW5cIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuY29kZTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgY29kZTogXCIsIGVycm9yLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBNZXNzYWdlOiBcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24taW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCByZWdpc3Rlck1vZGFsID0gKCkgPT4gKFxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXG4gICAgaWQ9XCJyZWdpc3Rlck1vZGFsXCJcbiAgICB0YWJJbmRleD1cIi0xXCJcbiAgICByb2xlPVwiZGlhbG9nXCJcbiAgICBhcmlhLWxhYmVsbGVkYnk9XCJyZWdpc3Rlck1vZGFsTGFiZWxcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gID5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJyZWdpc3Rlck1vZGFsTGFiZWxcIj5cbiAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcbiAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBpZD1cImVtYWlsUmVnaXN0ZXJcIiAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBpZD1cInBhc3NSZWdpc3RlclwiIC8+XG4gICAgICAgICAgPHAgaWQ9XCJzdGF0dXNSZWdpc3RlclwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzJVwiIH19PjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXG4gICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGF1dGhJbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxSZWdpc3RlclwiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc1JlZ2lzdGVyXCIpLnZhbHVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0ZXJlZC5cIik7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1JlZ2lzdGVyXCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICAgIFwiUmVnaXN0ZXJlZC5cIjtcbiAgICAgICAgICAgICAgICAgIC8vIGF1dGhJbnN0YW5jZSgpLnNpZ25PdXQoKTtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNSZWdpc3RlclwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IGJsb2dCdXR0b25zID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC00XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1vdXRcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIlxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3JlZ2lzdGVyTW9kYWxcIlxuICAgICAgICA+XG4gICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1vdXRcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIlxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3NpZ25pbk1vZGFsXCJcbiAgICAgICAgPlxuICAgICAgICAgIFNpZ24taW5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1pblwiPlxuICAgICAgICA8TGluayBocmVmPVwiL3dyaXRlXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiPlxuICAgICAgICAgICAgV3JpdGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yIGNvbC1tZC0yIGNvbC02IHNpZ24taW5cIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZ1wiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgYXV0aEluc3RhbmNlKClcbiAgICAgICAgICAgICAgLnNpZ25PdXQoKVxuICAgICAgICAgICAgICAudGhlbigoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpXG4gICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLmxvZyhcIlNpZ24tb3V0IHByb2JsZW0uXCIpKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU2lnbi1vdXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBjcmVhdGVDYXJkcyA9IHBvc3QgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtwb3N0LnNsdWcgKyBNYXRoLnJhbmRvbSgpfSBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtbGctNCBtYi01XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC0xMDAgYm9yZGVyLWRhcmsgcm91bmRlZCB0ZXh0LXdoaXRlIGJnLWRhcmsgbWItM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Bvc3Quc2x1Z30+XG4gICAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAge3Bvc3QuZGV0YWlscyAmJiAoXG4gICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17cG9zdC5kZXRhaWxzLnNsaWNlKDAsIDUwMCkgKyBcIi4uLlwifSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPntwb3N0LmRhdGV9PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEJsb2cgPSAoeyBwb3N0cywgcG9zdENvdW50LCBjdXJyUGFnZSB9KSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgey8qIEJsb2cgc3BlY2lhbCBCdXR0b25zICovfVxuICAgIHtibG9nQnV0dG9ucygpfVxuXG4gICAgey8qIFNpZ24taW4gTW9kYWwgKi99XG4gICAge3NpZ25pbk1vZGFsKCl9XG5cbiAgICB7LyogU2lnbi1vdXQgTW9kYWwgKi99XG4gICAge3JlZ2lzdGVyTW9kYWwoKX1cblxuICAgIHsvKiBQb3N0cyAqL31cbiAgICA8YXJ0aWNsZSBpZD1cImJsb2ctY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTVcIj5cbiAgICAgICAgey8qIFByb2R1Y2UgcG9zdHMgKi99XG4gICAgICAgIHtwb3N0cyAmJiBwb3N0cy5tYXAocG9zdCA9PiBjcmVhdGVDYXJkcyhwb3N0KSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFBhZ2luYXRpb24gKi99XG4gICAgICA8ZGl2IGlkPVwicGFnZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWJ1dHRvblwiXG4gICAgICAgICAgZGlzYWJsZWQ9e2N1cnJQYWdlIDw9IDF9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goYC9ibG9nP3BhZ2U9JHtjdXJyUGFnZSAtIDF9YCl9XG4gICAgICAgID5cbiAgICAgICAgICB7YDw8YH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHtbLi4uQXJyYXkoTWF0aC5jZWlsKHBvc3RDb3VudCAvIDYpKV0ubWFwKChjdXJyLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGtleT17XCJidXR0b25cIiArIGluZGV4fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goYC9ibG9nP3BhZ2U9JHtpbmRleCArIDF9YCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWJ1dHRvblwiXG4gICAgICAgICAgZGlzYWJsZWQ9e2N1cnJQYWdlID49IE1hdGguY2VpbChwb3N0Q291bnQgLyA2KX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChgL2Jsb2c/cGFnZT0ke2N1cnJQYWdlICsgMX1gKX1cbiAgICAgICAgPlxuICAgICAgICAgID4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9hcnRpY2xlPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICNwb3N0LWxpc3Qge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjUlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMSUgMTAlO1xuICAgICAgICBwYWRkaW5nOiAxJSAwO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIH1cbiAgICAgICNwYWdlLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAvKmRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiA0MCU7ICovXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjUlKTtcbiAgICAgIH1cbiAgICAgIC5wYWdlLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7IC8qIEdyZWVuICovXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICBtYXJnaW46IDAgM3B4O1xuICAgICAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAvL2Rpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAvL2N1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLy9mbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICAgIC5wYWdlLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG4gICAgICB9XG4gICAgICAucGFnZS1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgI3BhZ2UtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgLyogbWFyZ2luOiAzJSA1MCU7ICovXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MCUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5CbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5OiB7IHBhZ2UgPSAxIH0gfSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5iYXNlVXJsfWFwaS9wb3N0cz9wYWdlPSR7cGFnZX1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcG9zdHM6IGRhdGEucG9zdHMsXG4gICAgcG9zdENvdW50OiBwYXJzZUludChkYXRhLnBvc3RDb3VudCwgMTApLFxuICAgIGN1cnJQYWdlOiBwYXJzZUludChwYWdlLCAxMClcbiAgfTsgLy9yZXR1cm5zIGFuIGFycmF5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl19 */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/blog.js */"));
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
//# sourceMappingURL=[postSlug].js.9feb46954e53103778d2.hot-update.js.map