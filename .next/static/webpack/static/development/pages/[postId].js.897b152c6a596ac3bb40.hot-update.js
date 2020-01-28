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
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");

var _jsxFileName = "/home/epolat/Desktop/nextJs/website/pages/[postId].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var sharePost = function sharePost(postSlug) {
  var url = "http://localhost:3000/" + postSlug;
  return __jsx("div", {
    id: "share-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_6__["FacebookShareButton"], {
    url: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_6__["FacebookIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_6__["WhatsappShareButton"], {
    url: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_6__["WhatsappIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })));
};

var Post = function Post(_ref) {
  var post = _ref.post;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("article", {
    className: "jsx-4003607597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("section", {
    id: "post-section",
    className: "jsx-4003607597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4003607597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, post.title), post.details && __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: post.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-4003607597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, post.slug), __jsx("p", {
    className: "jsx-4003607597",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, post.date), sharePost(post.slug))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4003607597",
    __self: this
  }, "#post-section.jsx-4003607597{color:white;text-align:center;margin:10%;padding:1%;}#share-section.jsx-4003607597{margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL1twb3N0SWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDa0IsQUFHdUIsQUFNSSxZQUxFLElBTXBCLGNBTGEsV0FDQSxXQUNiIiwiZmlsZSI6Ii9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL1twb3N0SWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCB7XG4gIEZhY2Vib29rU2hhcmVCdXR0b24sXG4gIEZhY2Vib29rSWNvbixcbiAgUmVkZGl0U2hhcmVCdXR0b24sXG4gIFR3aXR0ZXJTaGFyZUJ1dHRvbixcbiAgV2hhdHNhcHBTaGFyZUJ1dHRvbixcbiAgV2hhdHNhcHBJY29uXG59IGZyb20gXCJyZWFjdC1zaGFyZVwiO1xuXG5jb25zdCBzaGFyZVBvc3QgPSBwb3N0U2x1ZyA9PiB7XG4gIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52LmJhc2VVcmwgKyBwb3N0U2x1ZztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwic2hhcmUtc2VjdGlvblwiPlxuICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b24gdXJsPXt1cmx9PlxuICAgICAgICA8RmFjZWJvb2tJY29uIC8+XG4gICAgICA8L0ZhY2Vib29rU2hhcmVCdXR0b24+XG5cbiAgICAgIDxXaGF0c2FwcFNoYXJlQnV0dG9uIHVybD17dXJsfT5cbiAgICAgICAgPFdoYXRzYXBwSWNvbiAvPlxuICAgICAgPC9XaGF0c2FwcFNoYXJlQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJwb3N0LXNlY3Rpb25cIj5cbiAgICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICB7cG9zdC5kZXRhaWxzICYmIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17cG9zdC5kZXRhaWxzfSAvPn1cbiAgICAgICAgICA8cD57cG9zdC5zbHVnfTwvcD5cbiAgICAgICAgICA8cD57cG9zdC5kYXRlfTwvcD5cbiAgICAgICAgICB7c2hhcmVQb3N0KHBvc3Quc2x1Zyl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI3Bvc3Qtc2VjdGlvbiB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDEwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgICAgfVxuICAgICAgICAjc2hhcmUtc2VjdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSwgcmVxIH0pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuYmFzZVVybH1hcGkvJHtxdWVyeS5wb3N0SWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7IHBvc3Q6IGRhdGEucG9zdCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdfQ== */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/[postId].js */"));
};

Post.getInitialProps = function _callee(_ref2) {
  var query, req, res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query, req = _ref2.req;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("".concat("http://localhost:3000/", "api/").concat(query.postId)));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          data = _context.sent;
          return _context.abrupt("return", {
            post: data.post
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[postId].js.897b152c6a596ac3bb40.hot-update.js.map