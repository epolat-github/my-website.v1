webpackHotUpdate("static/development/pages/signin.js",{

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
}; // authInstance().onAuthStateChanged(user => {
//   //if logged in
//   if (user) {
//     document
//       .querySelectorAll(".sign-out")
//       .forEach(item => item.classList.add("d-none"));
//     document
//       .querySelectorAll(".sign-in")
//       .forEach(item => item.classList.remove("d-none"));
//   }
//   //if logged out
//   else {
//     document
//       .querySelectorAll(".sign-out")
//       .forEach(item => item.classList.remove("d-none"));
//     document
//       .querySelectorAll(".sign-in")
//       .forEach(item => item.classList.add("d-none"));
//   }
// });

var createCards = function createCards(post) {
  return __jsx("div", {
    key: post.slug + Math.random(),
    className: "col-md-6 col-lg-4 mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "card h-100 border-dark rounded text-white bg-dark mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "card-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("h3", {
    className: "card-title text-capitalize",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: post.slug,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, post.title))), post.details && __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
    source: post.details.slice(0, 500) + "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))), __jsx("div", {
    className: "card-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("small", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
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
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1969702575" + " " + "container-fluid mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1969702575" + " " + "row d-flex justify-content-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1969702575" + " " + "col-lg-2 col-md-2 col-6 sign-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "jsx-1969702575" + " " + "btn btn-primary btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Register"))), __jsx("div", {
    className: "jsx-1969702575" + " " + "col-lg-2 col-md-2 col-6 sign-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    "data-toggle": "modal",
    "data-target": "#exampleModal",
    className: "jsx-1969702575" + " " + "btn btn-primary btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Sign-in")), __jsx("div", {
    className: "jsx-1969702575" + " " + "col-lg-2 col-md-2 col-6 sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/write",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "jsx-1969702575" + " " + "btn btn-primary btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Write"))), __jsx("div", {
    className: "jsx-1969702575" + " " + "col-lg-2 col-md-2 col-6 sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
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
      lineNumber: 102
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
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    "class": "modal-dialog",
    role: "document",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("div", {
    "class": "modal-content",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    "class": "modal-header",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("h5", {
    "class": "modal-title",
    id: "exampleModalLabel",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Modal title"), __jsx("button", {
    type: "button",
    "class": "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("span", {
    "aria-hidden": "true",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "\xD7"))), __jsx("div", {
    "class": "modal-body",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "..."), __jsx("div", {
    "class": "modal-footer",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    "class": "btn btn-secondary",
    "data-dismiss": "modal",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Close"), __jsx("button", {
    type: "button",
    "class": "btn btn-primary",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Save changes"))))), __jsx("article", {
    id: "blog-container",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1969702575" + " " + "row m-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, posts && posts.map(function (post) {
    return createCards(post);
  })), __jsx("div", {
    id: "page-button-container",
    className: "jsx-1969702575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
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
      lineNumber: 178
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
        lineNumber: 186
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
      lineNumber: 194
    },
    __self: this
  }, ">>"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1969702575",
    __self: this
  }, "#post-list.jsx-1969702575{color:white;border-bottom:2px solid white;border-radius:25%;text-align:center;margin:1% 10%;padding:1% 0;}a.jsx-1969702575{font-weight:bold;}.card-title.jsx-1969702575{text-transform:capitalize;}#page-button-container.jsx-1969702575{max-width:600px;margin:0 auto;-webkit-transform:translateX(25%);-ms-transform:translateX(25%);transform:translateX(25%);}.page-button.jsx-1969702575{background-color:#4caf50;border:1px solid white;border-radius:20%;color:white;padding:10px 16px;margin:0 3px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;}.page-button.jsx-1969702575:hover{background-color:#3e8e41;}.page-button[disabled].jsx-1969702575{background-color:gray;}@media only screen and (max-width:600px){#page-button-container.jsx-1969702575{width:100%;display:inline-block;margin-left:50%;-webkit-transform:translateX(-40%);-ms-transform:translateX(-40%);transform:translateX(-40%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBME1nQixBQUdxQixBQVFLLEFBR1MsQUFNVixBQUtTLEFBY0EsQUFHSCxBQUlULFdBRVUsQ0E1Q08sSUFpQmhCLENBVGhCLEtBK0JBLEdBakJ5QixBQWN6QixDQXpCQSxJQU80QixFQTJCUixVQTVDQSxNQXNCQSxBQXVCVyxZQTVDWCxNQXNCTixZQXJCRSxBQXNCSSxjQXJCTCxJQXNCQSxTQXJCZixJQXVCdUIsV0FUdkIscUJBNEJFLGtCQWpCZSxlQUdqQiIsImZpbGUiOiIvaG9tZS9lcG9sYXQvRGVza3RvcC9uZXh0SnMvd2Vic2l0ZS9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgeyBhdXRoSW5zdGFuY2UgfSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VVc2VyU3RhdGUgPSB1c2VyID0+IHtcbiAgaWYgKHVzZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1vdXRcIilcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1pblwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIikpO1xuICB9XG4gIC8vaWYgbG9nZ2VkIG91dFxuICBlbHNlIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1vdXRcIilcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi1pblwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIikpO1xuICB9XG59O1xuLy8gYXV0aEluc3RhbmNlKCkub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXIgPT4ge1xuLy8gICAvL2lmIGxvZ2dlZCBpblxuLy8gICBpZiAodXNlcikge1xuLy8gICAgIGRvY3VtZW50XG4vLyAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLW91dFwiKVxuLy8gICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIikpO1xuLy8gICAgIGRvY3VtZW50XG4vLyAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLWluXCIpXG4vLyAgICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSk7XG4vLyAgIH1cbi8vICAgLy9pZiBsb2dnZWQgb3V0XG4vLyAgIGVsc2Uge1xuLy8gICAgIGRvY3VtZW50XG4vLyAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLW91dFwiKVxuLy8gICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIikpO1xuLy8gICAgIGRvY3VtZW50XG4vLyAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLWluXCIpXG4vLyAgICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKSk7XG4vLyAgIH1cbi8vIH0pO1xuXG5jb25zdCBjcmVhdGVDYXJkcyA9IHBvc3QgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtwb3N0LnNsdWcgKyBNYXRoLnJhbmRvbSgpfSBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtbGctNCBtYi01XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC0xMDAgYm9yZGVyLWRhcmsgcm91bmRlZCB0ZXh0LXdoaXRlIGJnLWRhcmsgbWItM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Bvc3Quc2x1Z30+XG4gICAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAge3Bvc3QuZGV0YWlscyAmJiAoXG4gICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17cG9zdC5kZXRhaWxzLnNsaWNlKDAsIDUwMCkgKyBcIi4uLlwifSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPntwb3N0LmRhdGV9PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEJsb2cgPSAoeyBwb3N0cywgcG9zdENvdW50LCBjdXJyUGFnZSB9KSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgey8qIEJsb2cgc3BlY2lhbCBCdXR0b25zICovfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1vdXRcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwicmVnaXN0ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIj5cbiAgICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1vdXRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIlxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24taW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1pblwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd3JpdGVcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIj5cbiAgICAgICAgICAgICAgV3JpdGVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1pblwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGF1dGhJbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgLnNpZ25PdXQoKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gY29uc29sZS5sb2coXCJTaWduLW91dCBwcm9ibGVtLlwiKSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24tb3V0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICB7LyogTW9kYWwgKi99XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJtb2RhbCBmYWRlXCJcbiAgICAgIGlkPVwiZXhhbXBsZU1vZGFsXCJcbiAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiXG4gICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5cbiAgICAgICAgICAgICAgTW9kYWwgdGl0bGVcbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzcz1cImNsb3NlXCJcbiAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj4uLi48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICBTYXZlIGNoYW5nZXNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxhcnRpY2xlIGlkPVwiYmxvZy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tNVwiPlxuICAgICAgICB7cG9zdHMgJiYgcG9zdHMubWFwKHBvc3QgPT4gY3JlYXRlQ2FyZHMocG9zdCkpfVxuICAgICAgPC9kaXY+XG4gICAgICB7Lyoge3Bvc3RzICYmXG4gICAgICAgIHBvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8c2VjdGlvbiBrZXk9e3Bvc3Quc2x1ZyArIE1hdGgucmFuZG9tKCl9IGlkPVwicG9zdC1saXN0XCI+XG4gICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Bvc3Quc2x1Z30+XG4gICAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAge3Bvc3QuZGV0YWlscyAmJiAoXG4gICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17cG9zdC5kZXRhaWxzLnNsaWNlKDAsIDUwMCkgKyBcIi4uLlwifSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxwPlBvc3QncyBkYXRlID0ge3Bvc3QuZGF0ZX08L3A+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApKX0gKi99XG4gICAgICB7LyogcGFnZSBidXR0b25zICovfVxuICAgICAgPGRpdiBpZD1cInBhZ2UtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1idXR0b25cIlxuICAgICAgICAgIGRpc2FibGVkPXtjdXJyUGFnZSA8PSAxfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvYmxvZz9wYWdlPSR7Y3VyclBhZ2UgLSAxfWApfVxuICAgICAgICA+XG4gICAgICAgICAge2A8PGB9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7Wy4uLkFycmF5KE1hdGguY2VpbChwb3N0Q291bnQgLyA2KSldLm1hcCgoY3VyciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e1wiYnV0dG9uXCIgKyBpbmRleH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvYmxvZz9wYWdlPSR7aW5kZXggKyAxfWApfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1idXR0b25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbmRleCArIDF9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1idXR0b25cIlxuICAgICAgICAgIGRpc2FibGVkPXtjdXJyUGFnZSA+PSBNYXRoLmNlaWwocG9zdENvdW50IC8gNil9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goYC9ibG9nP3BhZ2U9JHtjdXJyUGFnZSArIDF9YCl9XG4gICAgICAgID5cbiAgICAgICAgICA+PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXJ0aWNsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAjcG9zdC1saXN0IHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDElIDEwJTtcbiAgICAgICAgcGFkZGluZzogMSUgMDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB9XG4gICAgICAjcGFnZS1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgLypkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogNDAlOyAqL1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1JSk7XG4gICAgICB9XG4gICAgICAucGFnZS1idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwOyAvKiBHcmVlbiAqL1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjAlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgICAgbWFyZ2luOiAwIDNweDtcbiAgICAgICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgLy9kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgLy9jdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC8vZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG4gICAgICAucGFnZS1idXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xuICAgICAgfVxuICAgICAgLnBhZ2UtYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICNwYWdlLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIC8qIG1hcmdpbjogMyUgNTAlOyAqL1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pO1xuQmxvZy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeTogeyBwYWdlID0gMSB9IH0pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuYmFzZVVybH1hcGkvcG9zdHM/cGFnZT0ke3BhZ2V9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHBvc3RzOiBkYXRhLnBvc3RzLFxuICAgIHBvc3RDb3VudDogcGFyc2VJbnQoZGF0YS5wb3N0Q291bnQsIDEwKSxcbiAgICBjdXJyUGFnZTogcGFyc2VJbnQocGFnZSwgMTApXG4gIH07IC8vcmV0dXJucyBhbiBhcnJheVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZztcbiJdfQ== */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/blog.js */"));
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
//# sourceMappingURL=signin.js.272b6e69e1d0c74132f1.hot-update.js.map