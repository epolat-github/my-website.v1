webpackHotUpdate("static/development/pages/_app.js",{

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
    className: "jsx-2309847472" + " " + "navbar navbar-expand-lg navbar-expand-md sticky-top navbar-dark bg-transparent",
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
    className: "jsx-2309847472" + " " + "navbar-toggler",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2309847472" + " " + "navbar-toggler-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("div", {
    id: "navbarNav",
    className: "jsx-2309847472" + " " + "collapse navbar-collapse",
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
    className: "jsx-2309847472" + " " + "navbar-brand pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("img", {
    height: "100px",
    src: "/logo.png",
    alt: "logo",
    className: "jsx-2309847472" + " " + "image-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx("ul", {
    className: "jsx-2309847472" + " " + "navbar-nav ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("li", {
    "data-toggle": "collapse",
    "data-target": ".navbar-collapse.show",
    className: "jsx-2309847472" + " " + "nav-item",
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
    className: "jsx-2309847472" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Home"))), __jsx("li", {
    "data-toggle": "collapse",
    "data-target": ".navbar-collapse.show",
    className: "jsx-2309847472" + " " + "nav-item",
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
    className: "jsx-2309847472" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "About"))), __jsx("li", {
    "data-toggle": "collapse",
    "data-target": ".navbar-collapse.show",
    className: "jsx-2309847472" + " " + "nav-item",
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
    className: "jsx-2309847472" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Blog"))), __jsx("li", {
    "data-toggle": "collapse",
    "data-target": ".navbar-collapse.show",
    className: "jsx-2309847472" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("a", {
    rel: "noopener",
    target: "_blank",
    href: "/Erin\xE7-Polat-CV-EN.pdf",
    className: "jsx-2309847472" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Resume")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2309847472",
    __self: this
  }, ".active.jsx-2309847472{text-color:red;}a.jsx-2309847472{font-size:30px;margin-right:20px;}a.jsx-2309847472:hover{color:#de9e73 !important;}@media only screen and (max-device-width:480px){.navbar-brand.jsx-2309847472{float:none !important;}.img-responsive.jsx-2309847472{margin:0 auto !important;display:block !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL3Byb2plY3RzL3dlYnNpdGUvY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEVrQixBQUcwQixBQUdBLEFBSVUsQUFLRCxBQUdHLGVBZDdCLEFBR29CLE9BU2xCLEdBTEYsQUFRNkIsUUFYN0IsaUJBWUUiLCJmaWxlIjoiL2hvbWUvZXBvbGF0L0Rlc2t0b3AvcHJvamVjdHMvd2Vic2l0ZS9jb21wb25lbnRzL25hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHsgY2hlY2tVc2VyLCBjdXJyZW50VXNlciwgYXV0aEluc3RhbmNlIH0gZnJvbSBcIi4uL3NyYy9kYkNvblwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgTmF2YmFyID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWV4cGFuZC1tZCBzdGlja3ktdG9wIG5hdmJhci1kYXJrIGJnLXRyYW5zcGFyZW50XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJOYXZcIlxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhck5hdlwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBwbC00XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlLXJlc3BvbnNpdmVcIiBoZWlnaHQ9XCIxMDBweFwiIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbVwiXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZS5zaG93XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIubmF2YmFyLWNvbGxhcHNlLnNob3dcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BYm91dDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3BvcnRmb2xpb1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Qb3J0Zm9saW88L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIubmF2YmFyLWNvbGxhcHNlLnNob3dcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkJsb2c8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIubmF2YmFyLWNvbGxhcHNlLnNob3dcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBocmVmPVwiL0VyaW7Dpy1Qb2xhdC1DVi1FTi5wZGZcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZXN1bWVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgIHRleHQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjZGU5ZTczICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZy1yZXNwb25zaXZlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbmF2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdfQ== */\n/*@ sourceURL=/home/epolat/Desktop/projects/website/components/navbar.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=_app.js.00dcacedb82427670f8c.hot-update.js.map