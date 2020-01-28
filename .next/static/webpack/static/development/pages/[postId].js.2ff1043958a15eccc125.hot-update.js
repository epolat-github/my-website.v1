webpackHotUpdate("static/development/pages/[postId].js",{

/***/ "./pages/[postId].js":
/*!***************************!*\
  !*** ./pages/[postId].js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");

var _jsxFileName = "/home/epolat/Desktop/nextJs/website/pages/[postId].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var sharePost = function sharePost() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  return __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["FacebookShareButton"], {
    url: router.pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["FacebookIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};

var Post = function Post(_ref) {
  var post = _ref.post;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("article", {
    className: "jsx-1020667916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("section", {
    id: "post-section",
    className: "jsx-1020667916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1020667916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, post.title), post.details && __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: post.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-1020667916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, post.slug), __jsx("p", {
    className: "jsx-1020667916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, post.date), __jsx("div", {
    className: "jsx-1020667916" + " " + "share-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, sharePost))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1020667916",
    __self: this
  }, "#post-section.jsx-1020667916{color:white;text-align:center;margin:10%;padding:1%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL1twb3N0SWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDa0IsQUFHdUIsWUFDTSxrQkFDUCxXQUNBLFdBQ2IiLCJmaWxlIjoiL2hvbWUvZXBvbGF0L0Rlc2t0b3AvbmV4dEpzL3dlYnNpdGUvcGFnZXMvW3Bvc3RJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQge1xuICBGYWNlYm9va1NoYXJlQnV0dG9uLFxuICBGYWNlYm9va0ljb24sXG4gIFJlZGRpdFNoYXJlQnV0dG9uLFxuICBUd2l0dGVyU2hhcmVCdXR0b24sXG4gIFdoYXRzYXBwU2hhcmVCdXR0b25cbn0gZnJvbSBcInJlYWN0LXNoYXJlXCI7XG5cbmNvbnN0IHNoYXJlUG9zdCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPEZhY2Vib29rU2hhcmVCdXR0b24gdXJsPXtyb3V0ZXIucGF0aG5hbWV9PlxuICAgICAgPEZhY2Vib29rSWNvbiAvPlxuICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cbiAgKTtcbn07XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwicG9zdC1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAge3Bvc3QuZGV0YWlscyAmJiA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Bvc3QuZGV0YWlsc30gLz59XG4gICAgICAgICAgPHA+e3Bvc3Quc2x1Z308L3A+XG4gICAgICAgICAgPHA+e3Bvc3QuZGF0ZX08L3A+XG4gIDxkaXYgY2xhc3NOYW1lPVwic2hhcmUtc2VjdGlvblwiPntzaGFyZVBvc3R9PC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI3Bvc3Qtc2VjdGlvbiB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDEwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuYmFzZVVybH1hcGkvJHtxdWVyeS5wb3N0SWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7IHBvc3Q6IGRhdGEucG9zdCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdfQ== */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/[postId].js */"));
};

Post.getInitialProps = function _callee(_ref2) {
  var query, res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query;
          console.log(query);
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("".concat("http://localhost:3000/", "api/").concat(query.postId)));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 7:
          data = _context.sent;
          return _context.abrupt("return", {
            post: data.post
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[postId].js.2ff1043958a15eccc125.hot-update.js.map