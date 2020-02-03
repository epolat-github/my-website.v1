webpackHotUpdate("static/development/pages/index.js",{

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

var createCards = function createCards(post) {
  return __jsx("div", {
    key: post.slug + Math.random(),
    className: "col-md-6 col-lg-4 mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "card h-100 border-dark rounded text-white bg-dark mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "card-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h3", {
    className: "card-title text-capitalize",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: post.slug,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, post.title))), post.details && __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
    source: post.details.slice(0, 500) + "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))), __jsx("div", {
    className: "card-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("small", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
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
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1969702575" + " " + "container-fluid mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1969702575" + " " + "row d-flex justify-content-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1969702575" + " " + "col-lg-2 col-md-2 col-6 sign-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "jsx-1969702575" + " " + "btn btn-primary btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Register"))), __jsx("div", {
    className: "jsx-1969702575" + " " + "col-lg-2 col-md-2 col-6 sign-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    "data-toggle": "modal",
    "data-target": "#exampleModal",
    className: "jsx-1969702575" + " " + "btn btn-primary btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Sign-in")), __jsx("div", {
    className: "jsx-1969702575" + " " + "col-lg-2 col-md-2 col-6 sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/write",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "jsx-1969702575" + " " + "btn btn-primary btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Write"))), __jsx("div", {
    className: "jsx-1969702575" + " " + "col-lg-2 col-md-2 col-6 sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    onClick: function onClick() {
      Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_10__["authInstance"])().signOut().then(function () {
        return window.location.reload();
      })["catch"](function () {
        return console.log("Sign-out problem.");
      });
    },
    className: "jsx-1969702575" + " " + "btn btn-primary btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Sign-out")))), __jsx("div", {
    "class": "modal fade",
    id: "exampleModal",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("div", {
    "class": "modal-dialog",
    role: "document",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("div", {
    "class": "modal-content",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    "class": "modal-header",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("h5", {
    "class": "modal-title",
    id: "exampleModalLabel",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Sign In"), __jsx("button", {
    type: "button",
    "class": "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("span", {
    "aria-hidden": "true",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "\xD7"))), __jsx("div", {
    "class": "modal-body",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "email",
    id: "email",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx("input", {
    type: "password",
    placeholder: "password",
    id: "pass",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx("p", {
    id: "status",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })), __jsx("div", {
    "class": "modal-footer",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    "class": "btn btn-secondary",
    "data-dismiss": "modal",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Close"), __jsx("button", {
    type: "button",
    "class": "btn btn-primary",
    onClick: function onClick() {
      document.getElementById("status").innerHTML = "Checking credentials...";
      Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_10__["authInstance"])().signInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("pass").value).then(function () {
        document.getElementById("pass").value = "";
        document.getElementById("email").value = "";
        window.location.reload();
      })["catch"](function (error) {
        document.getElementById("status").innerHTML = error.code;
        console.log("Error code: ", error.code);
        console.log("Error Message: ", error.message);
      });
    },
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Sign-in"))))), __jsx("article", {
    id: "blog-container",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1969702575" + " " + "row m-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, posts && posts.map(function (post) {
    return createCards(post);
  })), __jsx("div", {
    id: "page-button-container",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
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
      lineNumber: 176
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
        lineNumber: 184
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
      lineNumber: 192
    },
    __self: this
  }, ">>"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1969702575",
    __self: this
  }, "#post-list.jsx-1969702575{color:white;border-bottom:2px solid white;border-radius:25%;text-align:center;margin:1% 10%;padding:1% 0;}a.jsx-1969702575{font-weight:bold;}.card-title.jsx-1969702575{text-transform:capitalize;}#page-button-container.jsx-1969702575{max-width:600px;margin:0 auto;-webkit-transform:translateX(25%);-ms-transform:translateX(25%);transform:translateX(25%);}.page-button.jsx-1969702575{background-color:#4caf50;border:1px solid white;border-radius:20%;color:white;padding:10px 16px;margin:0 3px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;}.page-button.jsx-1969702575:hover{background-color:#3e8e41;}.page-button[disabled].jsx-1969702575{background-color:gray;}@media only screen and (max-width:600px){#page-button-container.jsx-1969702575{width:100%;display:inline-block;margin-left:50%;-webkit-transform:translateX(-40%);-ms-transform:translateX(-40%);transform:translateX(-40%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd01nQixBQUdxQixBQVFLLEFBR1MsQUFNVixBQUtTLEFBY0EsQUFHSCxBQUlULFdBRVUsQ0E1Q08sSUFpQmhCLENBVGhCLEtBK0JBLEdBakJ5QixBQWN6QixDQXpCQSxJQU80QixFQTJCUixVQTVDQSxNQXNCQSxBQXVCVyxZQTVDWCxNQXNCTixZQXJCRSxBQXNCSSxjQXJCTCxJQXNCQSxTQXJCZixJQXVCdUIsV0FUdkIscUJBNEJFLGtCQWpCZSxlQUdqQiIsImZpbGUiOiIvaG9tZS9lcG9sYXQvRGVza3RvcC9uZXh0SnMvd2Vic2l0ZS9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgeyBhdXRoSW5zdGFuY2UgfSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VVc2VyU3RhdGUgPSB1c2VyID0+IHtcbiAgaWYgKHVzZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1vdXRcIilcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1pblwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIikpO1xuICB9XG4gIC8vaWYgbG9nZ2VkIG91dFxuICBlbHNlIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1vdXRcIilcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1pblwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIikpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVDYXJkcyA9IHBvc3QgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtwb3N0LnNsdWcgKyBNYXRoLnJhbmRvbSgpfSBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtbGctNCBtYi01XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC0xMDAgYm9yZGVyLWRhcmsgcm91bmRlZCB0ZXh0LXdoaXRlIGJnLWRhcmsgbWItM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Bvc3Quc2x1Z30+XG4gICAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAge3Bvc3QuZGV0YWlscyAmJiAoXG4gICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17cG9zdC5kZXRhaWxzLnNsaWNlKDAsIDUwMCkgKyBcIi4uLlwifSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPntwb3N0LmRhdGV9PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEJsb2cgPSAoeyBwb3N0cywgcG9zdENvdW50LCBjdXJyUGFnZSB9KSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgey8qIEJsb2cgc3BlY2lhbCBCdXR0b25zICovfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1vdXRcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwicmVnaXN0ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIj5cbiAgICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1vdXRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIlxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24taW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1pblwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd3JpdGVcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIj5cbiAgICAgICAgICAgICAgV3JpdGVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1pblwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGF1dGhJbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgLnNpZ25PdXQoKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS5sb2coXCJTaWduLW91dCBwcm9ibGVtLlwiKSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24tb3V0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICB7LyogTW9kYWwgKi99XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJtb2RhbCBmYWRlXCJcbiAgICAgIGlkPVwiZXhhbXBsZU1vZGFsXCJcbiAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiXG4gICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5cbiAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiY2xvc2VcIlxuICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBpZD1cInBhc3NcIiAvPlxuICAgICAgICAgICAgPHAgaWQ9XCJzdGF0dXNcIj48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgIFwiQ2hlY2tpbmcgY3JlZGVudGlhbHMuLi5cIjtcbiAgICAgICAgICAgICAgICBhdXRoSW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3NcIikudmFsdWVcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKS5pbm5lckhUTUwgPSBlcnJvci5jb2RlO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNvZGU6IFwiLCBlcnJvci5jb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBNZXNzYWdlOiBcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2lnbi1pblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICB7LyogUG9zdHMgKi99XG4gICAgPGFydGljbGUgaWQ9XCJibG9nLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbS01XCI+XG4gICAgICAgIHtwb3N0cyAmJiBwb3N0cy5tYXAocG9zdCA9PiBjcmVhdGVDYXJkcyhwb3N0KSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFBhZ2luYXRpb24gKi99XG4gICAgICA8ZGl2IGlkPVwicGFnZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWJ1dHRvblwiXG4gICAgICAgICAgZGlzYWJsZWQ9e2N1cnJQYWdlIDw9IDF9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goYC9ibG9nP3BhZ2U9JHtjdXJyUGFnZSAtIDF9YCl9XG4gICAgICAgID5cbiAgICAgICAgICB7YDw8YH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHtbLi4uQXJyYXkoTWF0aC5jZWlsKHBvc3RDb3VudCAvIDYpKV0ubWFwKChjdXJyLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGtleT17XCJidXR0b25cIiArIGluZGV4fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goYC9ibG9nP3BhZ2U9JHtpbmRleCArIDF9YCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWJ1dHRvblwiXG4gICAgICAgICAgZGlzYWJsZWQ9e2N1cnJQYWdlID49IE1hdGguY2VpbChwb3N0Q291bnQgLyA2KX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChgL2Jsb2c/cGFnZT0ke2N1cnJQYWdlICsgMX1gKX1cbiAgICAgICAgPlxuICAgICAgICAgID4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9hcnRpY2xlPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICNwb3N0LWxpc3Qge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjUlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMSUgMTAlO1xuICAgICAgICBwYWRkaW5nOiAxJSAwO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIH1cbiAgICAgICNwYWdlLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAvKmRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiA0MCU7ICovXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjUlKTtcbiAgICAgIH1cbiAgICAgIC5wYWdlLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7IC8qIEdyZWVuICovXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICBtYXJnaW46IDAgM3B4O1xuICAgICAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAvL2Rpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAvL2N1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLy9mbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICAgIC5wYWdlLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG4gICAgICB9XG4gICAgICAucGFnZS1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgI3BhZ2UtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgLyogbWFyZ2luOiAzJSA1MCU7ICovXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MCUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5CbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5OiB7IHBhZ2UgPSAxIH0gfSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5iYXNlVXJsfWFwaS9wb3N0cz9wYWdlPSR7cGFnZX1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcG9zdHM6IGRhdGEucG9zdHMsXG4gICAgcG9zdENvdW50OiBwYXJzZUludChkYXRhLnBvc3RDb3VudCwgMTApLFxuICAgIGN1cnJQYWdlOiBwYXJzZUludChwYWdlLCAxMClcbiAgfTsgLy9yZXR1cm5zIGFuIGFycmF5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl19 */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/blog.js */"));
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
//# sourceMappingURL=index.js.af415286356a128e7875.hot-update.js.map