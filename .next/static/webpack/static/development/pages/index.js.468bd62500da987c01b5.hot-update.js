webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_dbCon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/dbCon */ "./src/dbCon.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/epolat/Desktop/nextJs/website/components/navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Navbar = function Navbar() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("nav", {
    style: {
      backgroundColor: "white"
    },
    className: "jsx-1434640265" + " " + "navbar navbar-expand-lg sticky-top navbar-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarNav",
    "aria-controls": "navbarNav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    className: "jsx-1434640265" + " " + "navbar-toggler",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1434640265" + " " + "navbar-toggler-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("div", {
    id: "navbarNav",
    className: "jsx-1434640265" + " " + "collapse navbar-collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1434640265" + " " + "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("img", {
    src: "/favicon.png",
    width: "43",
    height: "43",
    alt: "logo",
    className: "jsx-1434640265",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), __jsx("ul", {
    className: "jsx-1434640265" + " " + "navbar-nav ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1434640265" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1434640265" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Home"))), __jsx("li", {
    className: "jsx-1434640265" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1434640265" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "About"))), __jsx("li", {
    className: "jsx-1434640265" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1434640265" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Blog"))), __jsx("li", {
    className: "jsx-1434640265" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("a", {
    rel: "noopener",
    target: "_blank",
    href: "/Erin\xE7-Polat-CV-EN.pdf",
    className: "jsx-1434640265" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Resume")), __jsx("li", {
    className: "jsx-1434640265" + " " + "nav-item signed-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1434640265" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Sign-in"))), __jsx("li", {
    className: "jsx-1434640265" + " " + "nav-item signed-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/write",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1434640265" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Write"))), __jsx("li", {
    className: "jsx-1434640265" + " " + "nav-item signed-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("a", {
    onClick: function onClick() {
      Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_3__["authInstance"])().signOut().then(function () {
        return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
      })["catch"](function () {
        return console.log("Sign-out problem.");
      });
    },
    className: "jsx-1434640265" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Log-Out"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1434640265",
    __self: this
  }, "a.jsx-1434640265{font-size:25px;margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL2NvbXBvbmVudHMvbmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGa0IsQUFHMEIsZUFDRyxrQkFDcEIiLCJmaWxlIjoiL2hvbWUvZXBvbGF0L0Rlc2t0b3AvbmV4dEpzL3dlYnNpdGUvY29tcG9uZW50cy9uYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IGNoZWNrVXNlciwgY3VycmVudFVzZXIsIGF1dGhJbnN0YW5jZSB9IGZyb20gXCIuLi9zcmMvZGJDb25cIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPG5hdlxuICAgICAgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgc3RpY2t5LXRvcCBuYXZiYXItbGlnaHRcIlxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfX1cbiAgICA+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJOYXZcIlxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhck5hdlwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvZmF2aWNvbi5wbmdcIiB3aWR0aD1cIjQzXCIgaGVpZ2h0PVwiNDNcIiBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Ib21lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3J0Zm9saW9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+UG9ydGZvbGlvPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5CbG9nPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cIi9Fcmluw6ctUG9sYXQtQ1YtRU4ucGRmXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVzdW1lXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gc2lnbmVkLW91dFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TaWduLWluPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBzaWduZWQtb3V0XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+UmVnaXN0ZXI8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHNpZ25lZC1pblwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93cml0ZVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPldyaXRlPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHNpZ25lZC1pblwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgYXV0aEluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAgICAgLnNpZ25PdXQoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBSb3V0ZXIucHVzaChcIi9cIikpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLmxvZyhcIlNpZ24tb3V0IHByb2JsZW0uXCIpKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9nLU91dFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9uYXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl19 */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/components/navbar.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.468bd62500da987c01b5.hot-update.js.map