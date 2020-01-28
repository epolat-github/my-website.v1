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
    className: "jsx-3972429953",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("section", {
    id: "post-section",
    className: "jsx-3972429953",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3972429953",
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
    className: "jsx-3972429953",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, post.slug), __jsx("p", {
    className: "jsx-3972429953",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, post.date), sharePost(post.slug))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3972429953",
    __self: this
  }, "#post-section.jsx-3972429953{color:white;text-align:center;margin:10%;padding:1%;}#share-section.jsx-3972429953{position:relative;top:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL1twb3N0SWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDa0IsQUFHdUIsQUFNTSxZQUxBLE1BTVQsU0FDWCxHQU5hLFdBQ0EsV0FDYiIsImZpbGUiOiIvaG9tZS9lcG9sYXQvRGVza3RvcC9uZXh0SnMvd2Vic2l0ZS9wYWdlcy9bcG9zdElkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQge1xuICBGYWNlYm9va1NoYXJlQnV0dG9uLFxuICBGYWNlYm9va0ljb24sXG4gIFJlZGRpdFNoYXJlQnV0dG9uLFxuICBUd2l0dGVyU2hhcmVCdXR0b24sXG4gIFdoYXRzYXBwU2hhcmVCdXR0b24sXG4gIFdoYXRzYXBwSWNvblxufSBmcm9tIFwicmVhY3Qtc2hhcmVcIjtcblxuY29uc3Qgc2hhcmVQb3N0ID0gcG9zdFNsdWcgPT4ge1xuICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5iYXNlVXJsICsgcG9zdFNsdWc7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cInNoYXJlLXNlY3Rpb25cIj5cbiAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uIHVybD17dXJsfT5cbiAgICAgICAgPEZhY2Vib29rSWNvbiAvPlxuICAgICAgPC9GYWNlYm9va1NoYXJlQnV0dG9uPlxuXG4gICAgICA8V2hhdHNhcHBTaGFyZUJ1dHRvbiB1cmw9e3VybH0+XG4gICAgICAgIDxXaGF0c2FwcEljb24gLz5cbiAgICAgIDwvV2hhdHNhcHBTaGFyZUJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwicG9zdC1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAge3Bvc3QuZGV0YWlscyAmJiA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Bvc3QuZGV0YWlsc30gLz59XG4gICAgICAgICAgPHA+e3Bvc3Quc2x1Z308L3A+XG4gICAgICAgICAgPHA+e3Bvc3QuZGF0ZX08L3A+XG4gICAgICAgICAge3NoYXJlUG9zdChwb3N0LnNsdWcpfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNwb3N0LXNlY3Rpb24ge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAxMCU7XG4gICAgICAgICAgcGFkZGluZzogMSU7XG4gICAgICAgIH1cbiAgICAgICAgI3NoYXJlLXNlY3Rpb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnksIHJlcSB9KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LmJhc2VVcmx9YXBpLyR7cXVlcnkucG9zdElkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4geyBwb3N0OiBkYXRhLnBvc3QgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/[postId].js */"));
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
//# sourceMappingURL=[postId].js.18644f996ccbd577fb76.hot-update.js.map