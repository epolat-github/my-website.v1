webpackHotUpdate("static/development/pages/blog.js",{

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
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "modal-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h5", {
    className: "modal-title",
    id: "signinModalLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Sign In"), __jsx("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "email",
    id: "emailSignin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("input", {
    type: "password",
    placeholder: "password",
    id: "passSignin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("p", {
    id: "statusSignin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx("div", {
    className: "modal-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
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
      lineNumber: 68
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
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("div", {
    className: "modal-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("h5", {
    className: "modal-title",
    id: "registerModalLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Register"), __jsx("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "email",
    id: "emailRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx("input", {
    type: "password",
    placeholder: "password",
    id: "passRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), __jsx("p", {
    id: "statusRegister",
    style: {
      marginTop: "3%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })), __jsx("div", {
    className: "modal-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
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
      lineNumber: 140
    },
    __self: this
  }, "Register")))));
};

var blogButtons = function blogButtons() {
  return __jsx("div", {
    className: "container-fluid mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx("div", {
    className: "row d-flex justify-content-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    "data-toggle": "modal",
    "data-target": "#registerModal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Register")), __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    "data-toggle": "modal",
    "data-target": "#signinModal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "Sign-in")), __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/write",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Write"))), __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
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
      lineNumber: 202
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
      lineNumber: 221
    },
    __self: this
  }, __jsx("div", {
    className: "card h-100 border-dark rounded text-white bg-dark mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx("div", {
    className: "card-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("h3", {
    className: "card-title text-capitalize",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: post.slug,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, post.title))), post.details && __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
    source: post.details.slice(0, 500) + "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }))), __jsx("div", {
    className: "card-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, __jsx("small", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
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
      lineNumber: 244
    },
    __self: this
  }, blogButtons(), signinModal(), registerModal(), __jsx("article", {
    id: "blog-container",
    className: "jsx-4122601818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4122601818" + " " + "row ml-5 mr-5 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, posts && posts.map(function (post) {
    return createCards(post);
  })), __jsx("nav", {
    id: "page-button-container",
    className: "jsx-4122601818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, __jsx("button", {
    disabled: currPage <= 1,
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/blog?page=".concat(currPage - 1));
    },
    className: "jsx-4122601818" + " " + "page-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, "<<"), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(Math.ceil(postCount / 6))).map(function (curr, index) {
    return __jsx("button", {
      key: "button" + index,
      onClick: function onClick() {
        return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/blog?page=".concat(index + 1));
      },
      className: "jsx-4122601818" + " " + "page-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, index + 1);
  }), __jsx("button", {
    disabled: currPage >= Math.ceil(postCount / 6),
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/blog?page=".concat(currPage + 1));
    },
    className: "jsx-4122601818" + " " + "page-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, ">>"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "4122601818",
    __self: this
  }, "#post-list.jsx-4122601818{color:white;border-bottom:2px solid white;border-radius:25%;text-align:center;margin:1% 10%;padding:1% 0;}a.jsx-4122601818{font-weight:bold;}.card-title.jsx-4122601818{text-transform:capitalize;}#page-button-container.jsx-4122601818{max-width:600px;margin:0 auto;margin-bottom:2%;-webkit-transform:translateX(25%);-ms-transform:translateX(25%);transform:translateX(25%);}.page-button.jsx-4122601818{background-color:#0083fe;border:1px solid white;border-radius:20%;color:white;padding:10px 16px;margin:0 3px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;}.page-button.jsx-4122601818:hover{background-color:#2e5e8b;}.page-button[disabled].jsx-4122601818{background-color:gray;}a[disabled].jsx-4122601818{background-color:red;}@media only screen and (max-width:600px){.row.jsx-4122601818{margin:2% !important;}#page-button-container.jsx-4122601818{width:100%;display:inline-block;margin-left:50%;margin-bottom:5%;-webkit-transform:translateX(-40%);-ms-transform:translateX(-40%);transform:translateX(-40%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK1JnQixBQUdxQixBQVFLLEFBR1MsQUFNVixBQU1TLEFBY0EsQUFHSCxBQUdELEFBSUUsQUFHVixXQUVVLENBbkRPLElBaUJoQixDQVRoQixJQW1DQSxBQUlFLENBUEYsR0FqQnlCLEFBY3pCLENBMUJBLElBT21CLEVBa0NDLFVBbkRBLEtBa0JRLENBS1IsQUE2QkMsWUFuREQsS0FvRFcsQ0E3QmpCLFlBdEJFLEFBdUJJLGNBdEJMLElBdUJBLFNBdEJmLElBd0J1Qiw0QkFUdkIscUJBbUNFLENBeEJlLGVBR2pCIiwiZmlsZSI6Ii9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL2Jsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCB7IGF1dGhJbnN0YW5jZSwgY2hlY2tVc2VyIH0gZnJvbSBcIi4uL3NyYy9kYkNvblwiO1xuXG5leHBvcnQgY29uc3QgY2hhbmdlVXNlclN0YXRlID0gdXNlciA9PiB7XG4gIGlmICh1c2VyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZ24tb3V0XCIpXG4gICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKSk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZ24taW5cIilcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpKTtcbiAgfVxuICAvL2lmIGxvZ2dlZCBvdXRcbiAgZWxzZSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZ24tb3V0XCIpXG4gICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZ24taW5cIilcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpKTtcbiAgfVxufTtcblxuY29uc3Qgc2lnbmluTW9kYWwgPSAoKSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcbiAgICBpZD1cInNpZ25pbk1vZGFsXCJcbiAgICB0YWJJbmRleD1cIi0xXCJcbiAgICByb2xlPVwiZGlhbG9nXCJcbiAgICBhcmlhLWxhYmVsbGVkYnk9XCJzaWduaW5Nb2RhbExhYmVsXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwic2lnbmluTW9kYWxMYWJlbFwiPlxuICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXG4gICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCIgaWQ9XCJlbWFpbFNpZ25pblwiIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIGlkPVwicGFzc1NpZ25pblwiIC8+XG4gICAgICAgICAgPHAgaWQ9XCJzdGF0dXNTaWduaW5cIj48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1NpZ25pblwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIFwiQ2hlY2tpbmcgY3JlZGVudGlhbHMuLi5cIjtcbiAgICAgICAgICAgICAgYXV0aEluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsU2lnbmluXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzU2lnbmluXCIpLnZhbHVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc1NpZ25pblwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsU2lnbmluXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1NpZ25pblwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICBlcnJvci5jb2RlO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjb2RlOiBcIiwgZXJyb3IuY29kZSk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIE1lc3NhZ2U6IFwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2lnbi1pblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IHJlZ2lzdGVyTW9kYWwgPSAoKSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcbiAgICBpZD1cInJlZ2lzdGVyTW9kYWxcIlxuICAgIHRhYkluZGV4PVwiLTFcIlxuICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgIGFyaWEtbGFiZWxsZWRieT1cInJlZ2lzdGVyTW9kYWxMYWJlbFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cInJlZ2lzdGVyTW9kYWxMYWJlbFwiPlxuICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxuICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIGlkPVwiZW1haWxSZWdpc3RlclwiIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIGlkPVwicGFzc1JlZ2lzdGVyXCIgLz5cbiAgICAgICAgICA8cCBpZD1cInN0YXR1c1JlZ2lzdGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMlXCIgfX0+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDbG9zZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYXV0aEluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFJlZ2lzdGVyXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzUmVnaXN0ZXJcIikudmFsdWVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RlcmVkLlwiKTtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzUmVnaXN0ZXJcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgXCJSZWdpc3RlcmVkLlwiO1xuICAgICAgICAgICAgICAgICAgLy8gYXV0aEluc3RhbmNlKCkuc2lnbk91dCgpO1xuICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1JlZ2lzdGVyXCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgYmxvZ0J1dHRvbnMgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtNiBzaWduLW91dFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiXG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgZGF0YS10YXJnZXQ9XCIjcmVnaXN0ZXJNb2RhbFwiXG4gICAgICAgID5cbiAgICAgICAgICBSZWdpc3RlclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtNiBzaWduLW91dFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiXG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgZGF0YS10YXJnZXQ9XCIjc2lnbmluTW9kYWxcIlxuICAgICAgICA+XG4gICAgICAgICAgU2lnbi1pblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtNiBzaWduLWluXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvd3JpdGVcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCI+XG4gICAgICAgICAgICBXcml0ZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1pblwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBhdXRoSW5zdGFuY2UoKVxuICAgICAgICAgICAgICAuc2lnbk91dCgpXG4gICAgICAgICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSlcbiAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUubG9nKFwiU2lnbi1vdXQgcHJvYmxlbS5cIikpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBTaWduLW91dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IGNyZWF0ZUNhcmRzID0gcG9zdCA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e3Bvc3Quc2x1ZyArIE1hdGgucmFuZG9tKCl9IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy00IG1iLTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoLTEwMCBib3JkZXItZGFyayByb3VuZGVkIHRleHQtd2hpdGUgYmctZGFyayBtYi0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LWNhcGl0YWxpemVcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cG9zdC5zbHVnfT5cbiAgICAgICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICB7cG9zdC5kZXRhaWxzICYmIChcbiAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtwb3N0LmRldGFpbHMuc2xpY2UoMCwgNTAwKSArIFwiLi4uXCJ9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e3Bvc3QuZGF0ZX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgQmxvZyA9ICh7IHBvc3RzLCBwb3N0Q291bnQsIGN1cnJQYWdlIH0pID0+IChcbiAgPExheW91dD5cbiAgICB7LyogQmxvZyBzcGVjaWFsIEJ1dHRvbnMgKi99XG4gICAge2Jsb2dCdXR0b25zKCl9XG5cbiAgICB7LyogU2lnbi1pbiBNb2RhbCAqL31cbiAgICB7c2lnbmluTW9kYWwoKX1cblxuICAgIHsvKiBTaWduLW91dCBNb2RhbCAqL31cbiAgICB7cmVnaXN0ZXJNb2RhbCgpfVxuXG4gICAgey8qIFBvc3RzICovfVxuICAgIDxhcnRpY2xlIGlkPVwiYmxvZy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1sLTUgbXItNSBtdC01XCI+XG4gICAgICAgIHsvKiBQcm9kdWNlIHBvc3RzICovfVxuICAgICAgICB7cG9zdHMgJiYgcG9zdHMubWFwKHBvc3QgPT4gY3JlYXRlQ2FyZHMocG9zdCkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBQYWdpbmF0aW9uICovfVxuICAgICAgPG5hdiBpZD1cInBhZ2UtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1idXR0b25cIlxuICAgICAgICAgIGRpc2FibGVkPXtjdXJyUGFnZSA8PSAxfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvYmxvZz9wYWdlPSR7Y3VyclBhZ2UgLSAxfWApfVxuICAgICAgICA+XG4gICAgICAgICAge2A8PGB9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7Wy4uLkFycmF5KE1hdGguY2VpbChwb3N0Q291bnQgLyA2KSldLm1hcCgoY3VyciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e1wiYnV0dG9uXCIgKyBpbmRleH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvYmxvZz9wYWdlPSR7aW5kZXggKyAxfWApfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1idXR0b25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbmRleCArIDF9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1idXR0b25cIlxuICAgICAgICAgIGRpc2FibGVkPXtjdXJyUGFnZSA+PSBNYXRoLmNlaWwocG9zdENvdW50IC8gNil9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goYC9ibG9nP3BhZ2U9JHtjdXJyUGFnZSArIDF9YCl9XG4gICAgICAgID5cbiAgICAgICAgICA+PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbmF2PlxuICAgIDwvYXJ0aWNsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAjcG9zdC1saXN0IHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDElIDEwJTtcbiAgICAgICAgcGFkZGluZzogMSUgMDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB9XG4gICAgICAjcGFnZS1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgLypkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogNDAlOyAqL1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNSUpO1xuICAgICAgfVxuICAgICAgLnBhZ2UtYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODNmZTsgLyogR3JlZW4gKi9cbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICAgIG1hcmdpbjogMCAzcHg7XG4gICAgICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIC8vZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIC8vY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAvL2Zsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgICAgLnBhZ2UtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNWU4YjtcbiAgICAgIH1cbiAgICAgIC5wYWdlLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgICAgfVxuICAgICAgYVtkaXNhYmxlZF0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgIG1hcmdpbjogMiUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAjcGFnZS1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAvKiBtYXJnaW46IDMlIDUwJTsgKi9cbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwJSk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pO1xuQmxvZy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeTogeyBwYWdlID0gMSB9IH0pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuYmFzZVVybH1hcGkvcG9zdHM/cGFnZT0ke3BhZ2V9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHBvc3RzOiBkYXRhLnBvc3RzLFxuICAgIHBvc3RDb3VudDogcGFyc2VJbnQoZGF0YS5wb3N0Q291bnQsIDEwKSxcbiAgICBjdXJyUGFnZTogcGFyc2VJbnQocGFnZSwgMTApXG4gIH07IC8vcmV0dXJucyBhbiBhcnJheVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZztcbiJdfQ== */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/blog.js */"));
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
//# sourceMappingURL=blog.js.f4155ca9d5e1b8baaef1.hot-update.js.map