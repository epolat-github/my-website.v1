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
    className: "jsx-2449380725",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2449380725" + " " + "row ml-5 mr-5 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, posts && posts.map(function (post) {
    return createCards(post);
  })), __jsx("div", {
    id: "page-button-container",
    className: "jsx-2449380725",
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
    className: "jsx-2449380725" + " " + "page-button",
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
      className: "jsx-2449380725" + " " + "page-button",
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
    className: "jsx-2449380725" + " " + "page-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, ">>"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2449380725",
    __self: this
  }, "#post-list.jsx-2449380725{color:white;border-bottom:2px solid white;border-radius:25%;text-align:center;margin:1% 10%;padding:1% 0;}a.jsx-2449380725{font-weight:bold;}.card-title.jsx-2449380725{text-transform:capitalize;}#page-button-container.jsx-2449380725{max-width:600px;margin:0 auto;-webkit-transform:translateX(25%);-ms-transform:translateX(25%);transform:translateX(25%);}.page-button.jsx-2449380725{background-color:#0083FE;border:1px solid white;border-radius:20%;color:white;padding:10px 16px;margin:0 3px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;}.page-button.jsx-2449380725:hover{background-color:#2E5E8B;}.page-button[disabled].jsx-2449380725{background-color:gray;}a[disabled].jsx-2449380725{background-color:red;}@media only screen and (max-width:600px){#page-button-container.jsx-2449380725{width:100%;display:inline-block;margin-left:50%;-webkit-transform:translateX(-40%);-ms-transform:translateX(-40%);transform:translateX(-40%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK1JnQixBQUdxQixBQVFLLEFBR1MsQUFNVixBQUtTLEFBY0EsQUFHSCxBQUdELEFBSVIsV0FFVSxDQS9DTyxJQWlCaEIsQ0FUaEIsSUFrQ0EsQ0FIQSxHQWpCeUIsQUFjekIsQ0F6QkEsSUFPNEIsRUE4QlIsVUEvQ0EsTUFzQkEsQUEwQlcsWUEvQ1gsTUFzQk4sWUFyQkUsQUFzQkksY0FyQkwsSUFzQkEsU0FyQmYsSUF1QnVCLFdBVHZCLHFCQStCRSxrQkFwQmUsZUFHakIiLCJmaWxlIjoiL2hvbWUvZXBvbGF0L0Rlc2t0b3AvbmV4dEpzL3dlYnNpdGUvcGFnZXMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHsgYXV0aEluc3RhbmNlLCBjaGVja1VzZXIgfSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VVc2VyU3RhdGUgPSB1c2VyID0+IHtcbiAgaWYgKHVzZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1vdXRcIilcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1pblwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIikpO1xuICB9XG4gIC8vaWYgbG9nZ2VkIG91dFxuICBlbHNlIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1vdXRcIilcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1pblwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIikpO1xuICB9XG59O1xuXG5jb25zdCBzaWduaW5Nb2RhbCA9ICgpID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxuICAgIGlkPVwic2lnbmluTW9kYWxcIlxuICAgIHRhYkluZGV4PVwiLTFcIlxuICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgIGFyaWEtbGFiZWxsZWRieT1cInNpZ25pbk1vZGFsTGFiZWxcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gID5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJzaWduaW5Nb2RhbExhYmVsXCI+XG4gICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcbiAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBpZD1cImVtYWlsU2lnbmluXCIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzU2lnbmluXCIgLz5cbiAgICAgICAgICA8cCBpZD1cInN0YXR1c1NpZ25pblwiPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXG4gICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzU2lnbmluXCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgXCJDaGVja2luZyBjcmVkZW50aWFscy4uLlwiO1xuICAgICAgICAgICAgICBhdXRoSW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgIC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxTaWduaW5cIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3NTaWduaW5cIikudmFsdWVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzU2lnbmluXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxTaWduaW5cIikudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzU2lnbmluXCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmNvZGU7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNvZGU6IFwiLCBlcnJvci5jb2RlKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgTWVzc2FnZTogXCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduLWluXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgcmVnaXN0ZXJNb2RhbCA9ICgpID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxuICAgIGlkPVwicmVnaXN0ZXJNb2RhbFwiXG4gICAgdGFiSW5kZXg9XCItMVwiXG4gICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVwicmVnaXN0ZXJNb2RhbExhYmVsXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwicmVnaXN0ZXJNb2RhbExhYmVsXCI+XG4gICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXG4gICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCIgaWQ9XCJlbWFpbFJlZ2lzdGVyXCIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzUmVnaXN0ZXJcIiAvPlxuICAgICAgICAgIDxwIGlkPVwic3RhdHVzUmVnaXN0ZXJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMyVcIiB9fT48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhdXRoSW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgIC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsUmVnaXN0ZXJcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3NSZWdpc3RlclwiKS52YWx1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlZ2lzdGVyZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNSZWdpc3RlclwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICBcIlJlZ2lzdGVyZWQuXCI7XG4gICAgICAgICAgICAgICAgICAvLyBhdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzUmVnaXN0ZXJcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBibG9nQnV0dG9ucyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yIGNvbC1tZC0yIGNvbC02IHNpZ24tb3V0XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICBkYXRhLXRhcmdldD1cIiNyZWdpc3Rlck1vZGFsXCJcbiAgICAgICAgPlxuICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yIGNvbC1tZC0yIGNvbC02IHNpZ24tb3V0XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICBkYXRhLXRhcmdldD1cIiNzaWduaW5Nb2RhbFwiXG4gICAgICAgID5cbiAgICAgICAgICBTaWduLWluXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yIGNvbC1tZC0yIGNvbC02IHNpZ24taW5cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi93cml0ZVwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIj5cbiAgICAgICAgICAgIFdyaXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtNiBzaWduLWluXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tbGdcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGF1dGhJbnN0YW5jZSgpXG4gICAgICAgICAgICAgIC5zaWduT3V0KClcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKVxuICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS5sb2coXCJTaWduLW91dCBwcm9ibGVtLlwiKSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFNpZ24tb3V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgY3JlYXRlQ2FyZHMgPSBwb3N0ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17cG9zdC5zbHVnICsgTWF0aC5yYW5kb20oKX0gY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLWxnLTQgbWItNVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwIGJvcmRlci1kYXJrIHJvdW5kZWQgdGV4dC13aGl0ZSBiZy1kYXJrIG1iLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2tcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwb3N0LnNsdWd9PlxuICAgICAgICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIHtwb3N0LmRldGFpbHMgJiYgKFxuICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Bvc3QuZGV0YWlscy5zbGljZSgwLCA1MDApICsgXCIuLi5cIn0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57cG9zdC5kYXRlfTwvc21hbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBCbG9nID0gKHsgcG9zdHMsIHBvc3RDb3VudCwgY3VyclBhZ2UgfSkgPT4gKFxuICA8TGF5b3V0PlxuICAgIHsvKiBCbG9nIHNwZWNpYWwgQnV0dG9ucyAqL31cbiAgICB7YmxvZ0J1dHRvbnMoKX1cblxuICAgIHsvKiBTaWduLWluIE1vZGFsICovfVxuICAgIHtzaWduaW5Nb2RhbCgpfVxuXG4gICAgey8qIFNpZ24tb3V0IE1vZGFsICovfVxuICAgIHtyZWdpc3Rlck1vZGFsKCl9XG5cbiAgICB7LyogUG9zdHMgKi99XG4gICAgPGFydGljbGUgaWQ9XCJibG9nLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWwtNSBtci01IG10LTVcIj5cbiAgICAgICAgey8qIFByb2R1Y2UgcG9zdHMgKi99XG4gICAgICAgIHtwb3N0cyAmJiBwb3N0cy5tYXAocG9zdCA9PiBjcmVhdGVDYXJkcyhwb3N0KSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFBhZ2luYXRpb24gKi99XG4gICAgICA8ZGl2IGlkPVwicGFnZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWJ1dHRvblwiXG4gICAgICAgICAgZGlzYWJsZWQ9e2N1cnJQYWdlIDw9IDF9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goYC9ibG9nP3BhZ2U9JHtjdXJyUGFnZSAtIDF9YCl9XG4gICAgICAgID5cbiAgICAgICAgICB7YDw8YH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHtbLi4uQXJyYXkoTWF0aC5jZWlsKHBvc3RDb3VudCAvIDYpKV0ubWFwKChjdXJyLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGtleT17XCJidXR0b25cIiArIGluZGV4fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goYC9ibG9nP3BhZ2U9JHtpbmRleCArIDF9YCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWJ1dHRvblwiXG4gICAgICAgICAgZGlzYWJsZWQ9e2N1cnJQYWdlID49IE1hdGguY2VpbChwb3N0Q291bnQgLyA2KX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChgL2Jsb2c/cGFnZT0ke2N1cnJQYWdlICsgMX1gKX1cbiAgICAgICAgPlxuICAgICAgICAgID4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9hcnRpY2xlPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICNwb3N0LWxpc3Qge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjUlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMSUgMTAlO1xuICAgICAgICBwYWRkaW5nOiAxJSAwO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIH1cbiAgICAgICNwYWdlLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAvKmRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiA0MCU7ICovXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjUlKTtcbiAgICAgIH1cbiAgICAgIC5wYWdlLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgzRkU7IC8qIEdyZWVuICovXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICBtYXJnaW46IDAgM3B4O1xuICAgICAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAvL2Rpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAvL2N1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLy9mbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICAgIC5wYWdlLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRTVFOEI7XG4gICAgICB9XG4gICAgICAucGFnZS1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICAgIH1cbiAgICAgIGFbZGlzYWJsZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAjcGFnZS1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAvKiBtYXJnaW46IDMlIDUwJTsgKi9cbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwJSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcbkJsb2cuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnk6IHsgcGFnZSA9IDEgfSB9KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LmJhc2VVcmx9YXBpL3Bvc3RzP3BhZ2U9JHtwYWdlfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwb3N0czogZGF0YS5wb3N0cyxcbiAgICBwb3N0Q291bnQ6IHBhcnNlSW50KGRhdGEucG9zdENvdW50LCAxMCksXG4gICAgY3VyclBhZ2U6IHBhcnNlSW50KHBhZ2UsIDEwKVxuICB9OyAvL3JldHVybnMgYW4gYXJyYXlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2c7XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/blog.js */"));
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
//# sourceMappingURL=blog.js.1491dde4038defd15ef2.hot-update.js.map