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
var _jsxFileName = "/home/epolat/Desktop/projects/website/components/navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Navbar = function Navbar() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-2889091393" + " " + "navbar navbar-expand-lg navbar-expand-md sticky-top navbar-dark bg-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarNav",
    "aria-controls": "navbarNav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    className: "jsx-2889091393" + " " + "navbar-toggler",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2889091393" + " " + "navbar-toggler-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("div", {
    id: "navbarNav",
    className: "jsx-2889091393" + " " + "collapse navbar-collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2889091393" + " " + "navbar-brand pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    className: "jsx-2889091393" + " " + "image-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx("ul", {
    className: "jsx-2889091393" + " " + "navbar-nav ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("li", {
    "data-toggle": "collapse",
    "data-target": ".navbar-collapse.show",
    className: "jsx-2889091393" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2889091393" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Home"))), __jsx("li", {
    "data-toggle": "collapse",
    "data-target": ".navbar-collapse.show",
    className: "jsx-2889091393" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2889091393" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "About"))), __jsx("li", {
    "data-toggle": "collapse",
    "data-target": ".navbar-collapse.show",
    className: "jsx-2889091393" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2889091393" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Blog"))), __jsx("li", {
    "data-toggle": "collapse",
    "data-target": ".navbar-collapse.show",
    className: "jsx-2889091393" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("a", {
    rel: "noopener",
    target: "_blank",
    href: "/Erin\xE7-Polat-CV-EN.pdf",
    className: "jsx-2889091393" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Resume")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2889091393",
    __self: this
  }, ".active.jsx-2889091393{text-color:red;}a.jsx-2889091393{font-size:40px;margin-right:25px;}a.jsx-2889091393:hover{color:#de9e73 !important;}@media only screen and (max-device-width:480px){.navbar-brand.jsx-2889091393{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL3Byb2plY3RzL3dlYnNpdGUvY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEVrQixBQUcwQixBQUdBLEFBSVUsQUFLVixhQUNmLEVBWkYsQUFHb0IsVUFJcEIsUUFIQSIsImZpbGUiOiIvaG9tZS9lcG9sYXQvRGVza3RvcC9wcm9qZWN0cy93ZWJzaXRlL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgeyBjaGVja1VzZXIsIGN1cnJlbnRVc2VyLCBhdXRoSW5zdGFuY2UgfSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZXhwYW5kLW1kIHN0aWNreS10b3AgbmF2YmFyLWRhcmsgYmctdHJhbnNwYXJlbnRcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhck5hdlwiXG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIlxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyTmF2XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIHBsLTRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2UtcmVzcG9uc2l2ZVwiIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbVwiXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZS5zaG93XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIubmF2YmFyLWNvbGxhcHNlLnNob3dcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BYm91dDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3BvcnRmb2xpb1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Qb3J0Zm9saW88L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIubmF2YmFyLWNvbGxhcHNlLnNob3dcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkJsb2c8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIubmF2YmFyLWNvbGxhcHNlLnNob3dcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBocmVmPVwiL0VyaW7Dpy1Qb2xhdC1DVi1FTi5wZGZcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZXN1bWVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgIHRleHQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjZGU5ZTczICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L25hdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/projects/website/components/navbar.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.b74d5eae1ee27c1c3fc4.hot-update.js.map