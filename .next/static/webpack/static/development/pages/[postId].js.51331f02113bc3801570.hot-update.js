webpackHotUpdate("static/development/pages/[postId].js",{

/***/ "./node_modules/next-absolute-url/index.js":
/*!*************************************************!*\
  !*** ./node_modules/next-absolute-url/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true
function absoluteUrl(req, localhostAddress) {
  if (localhostAddress === void 0) {
    localhostAddress = 'localhost:3000'
  }
  var host = (req ? req.headers.host : window.location.host) || localhostAddress
  var protocol = /^localhost(:\d+)?$/.test(host) ? 'http:' : 'https:'
  return {
    protocol: protocol,
    host: host,
    origin: protocol + '//' + host,
  }
}
exports['default'] = absoluteUrl


/***/ }),

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
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-absolute-url */ "./node_modules/next-absolute-url/index.js");
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_absolute_url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");

var _jsxFileName = "/home/epolat/Desktop/nextJs/website/pages/[postId].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var sharePost = function sharePost() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  console.log(router);
  return __jsx(react_share__WEBPACK_IMPORTED_MODULE_8__["FacebookShareButton"], {
    url: router.query,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_8__["FacebookIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

var Post = function Post(_ref) {
  var post = _ref.post;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("article", {
    className: "jsx-1020667916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("section", {
    id: "post-section",
    className: "jsx-1020667916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1020667916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, post.title), post.details && __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: post.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-1020667916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, post.slug), __jsx("p", {
    className: "jsx-1020667916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, post.date), __jsx("div", {
    className: "jsx-1020667916" + " " + "share-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, sharePost()))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1020667916",
    __self: this
  }, "#post-section.jsx-1020667916{color:white;text-align:center;margin:10%;padding:1%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL1twb3N0SWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Da0IsQUFHdUIsWUFDTSxrQkFDUCxXQUNBLFdBQ2IiLCJmaWxlIjoiL2hvbWUvZXBvbGF0L0Rlc2t0b3AvbmV4dEpzL3dlYnNpdGUvcGFnZXMvW3Bvc3RJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYWJzb2x1dGVVcmwgZnJvbSBcIm5leHQtYWJzb2x1dGUtdXJsXCI7XG5pbXBvcnQge1xuICBGYWNlYm9va1NoYXJlQnV0dG9uLFxuICBGYWNlYm9va0ljb24sXG4gIFJlZGRpdFNoYXJlQnV0dG9uLFxuICBUd2l0dGVyU2hhcmVCdXR0b24sXG4gIFdoYXRzYXBwU2hhcmVCdXR0b25cbn0gZnJvbSBcInJlYWN0LXNoYXJlXCI7XG5cbmNvbnN0IHNoYXJlUG9zdCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKHJvdXRlcik7XG4gIHJldHVybiAoXG4gICAgPEZhY2Vib29rU2hhcmVCdXR0b24gdXJsPXtyb3V0ZXIucXVlcnl9PlxuICAgICAgPEZhY2Vib29rSWNvbiAvPlxuICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cbiAgKTtcbn07XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwicG9zdC1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAge3Bvc3QuZGV0YWlscyAmJiA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Bvc3QuZGV0YWlsc30gLz59XG4gICAgICAgICAgPHA+e3Bvc3Quc2x1Z308L3A+XG4gICAgICAgICAgPHA+e3Bvc3QuZGF0ZX08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZS1zZWN0aW9uXCI+e3NoYXJlUG9zdCgpfTwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNwb3N0LXNlY3Rpb24ge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAxMCU7XG4gICAgICAgICAgcGFkZGluZzogMSU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnksIHJlcSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlcSk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LmJhc2VVcmx9YXBpLyR7cXVlcnkucG9zdElkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4geyBwb3N0OiBkYXRhLnBvc3QgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/[postId].js */"));
};

Post.getInitialProps = function _callee(_ref2) {
  var query, req, res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query, req = _ref2.req;
          console.log(req);
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
//# sourceMappingURL=[postId].js.51331f02113bc3801570.hot-update.js.map