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
    className: "jsx-1699373890",
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
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1699373890",
    __self: this
  }, "#share-section.jsx-1699373890{position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL1twb3N0SWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCa0IsQUFHNkIsa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL1twb3N0SWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCB7XG4gIEZhY2Vib29rU2hhcmVCdXR0b24sXG4gIEZhY2Vib29rSWNvbixcbiAgUmVkZGl0U2hhcmVCdXR0b24sXG4gIFR3aXR0ZXJTaGFyZUJ1dHRvbixcbiAgV2hhdHNhcHBTaGFyZUJ1dHRvbixcbiAgV2hhdHNhcHBJY29uXG59IGZyb20gXCJyZWFjdC1zaGFyZVwiO1xuXG5jb25zdCBzaGFyZVBvc3QgPSBwb3N0U2x1ZyA9PiB7XG4gIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52LmJhc2VVcmwgKyBwb3N0U2x1ZztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwic2hhcmUtc2VjdGlvblwiPlxuICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b24gdXJsPXt1cmx9PlxuICAgICAgICA8RmFjZWJvb2tJY29uIC8+XG4gICAgICA8L0ZhY2Vib29rU2hhcmVCdXR0b24+XG5cbiAgICAgIDxXaGF0c2FwcFNoYXJlQnV0dG9uIHVybD17dXJsfT5cbiAgICAgICAgPFdoYXRzYXBwSWNvbiAvPlxuICAgICAgPC9XaGF0c2FwcFNoYXJlQnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjc2hhcmUtc2VjdGlvbiB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8c2VjdGlvbiBpZD1cInBvc3Qtc2VjdGlvblwiPlxuICAgICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIHtwb3N0LmRldGFpbHMgJiYgPFJlYWN0TWFya2Rvd24gc291cmNlPXtwb3N0LmRldGFpbHN9IC8+fVxuICAgICAgICAgIDxwPntwb3N0LnNsdWd9PC9wPlxuICAgICAgICAgIDxwPntwb3N0LmRhdGV9PC9wPlxuICAgICAgICAgIHtzaGFyZVBvc3QocG9zdC5zbHVnKX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjcG9zdC1zZWN0aW9uIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMTAlO1xuICAgICAgICAgIHBhZGRpbmc6IDElO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5LCByZXEgfSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5iYXNlVXJsfWFwaS8ke3F1ZXJ5LnBvc3RJZH1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHsgcG9zdDogZGF0YS5wb3N0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl19 */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/[postId].js */"));
};

var Post = function Post(_ref) {
  var post = _ref.post;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("article", {
    className: "jsx-1020667916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("section", {
    id: "post-section",
    className: "jsx-1020667916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1020667916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, post.title), post.details && __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: post.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-1020667916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, post.slug), __jsx("p", {
    className: "jsx-1020667916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, post.date), sharePost(post.slug))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1020667916",
    __self: this
  }, "#post-section.jsx-1020667916{color:white;text-align:center;margin:10%;padding:1%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL1twb3N0SWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDa0IsQUFHdUIsWUFDTSxrQkFDUCxXQUNBLFdBQ2IiLCJmaWxlIjoiL2hvbWUvZXBvbGF0L0Rlc2t0b3AvbmV4dEpzL3dlYnNpdGUvcGFnZXMvW3Bvc3RJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHtcbiAgRmFjZWJvb2tTaGFyZUJ1dHRvbixcbiAgRmFjZWJvb2tJY29uLFxuICBSZWRkaXRTaGFyZUJ1dHRvbixcbiAgVHdpdHRlclNoYXJlQnV0dG9uLFxuICBXaGF0c2FwcFNoYXJlQnV0dG9uLFxuICBXaGF0c2FwcEljb25cbn0gZnJvbSBcInJlYWN0LXNoYXJlXCI7XG5cbmNvbnN0IHNoYXJlUG9zdCA9IHBvc3RTbHVnID0+IHtcbiAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuYmFzZVVybCArIHBvc3RTbHVnO1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJzaGFyZS1zZWN0aW9uXCI+XG4gICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvbiB1cmw9e3VybH0+XG4gICAgICAgIDxGYWNlYm9va0ljb24gLz5cbiAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cblxuICAgICAgPFdoYXRzYXBwU2hhcmVCdXR0b24gdXJsPXt1cmx9PlxuICAgICAgICA8V2hhdHNhcHBJY29uIC8+XG4gICAgICA8L1doYXRzYXBwU2hhcmVCdXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNzaGFyZS1zZWN0aW9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwicG9zdC1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAge3Bvc3QuZGV0YWlscyAmJiA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Bvc3QuZGV0YWlsc30gLz59XG4gICAgICAgICAgPHA+e3Bvc3Quc2x1Z308L3A+XG4gICAgICAgICAgPHA+e3Bvc3QuZGF0ZX08L3A+XG4gICAgICAgICAge3NoYXJlUG9zdChwb3N0LnNsdWcpfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNwb3N0LXNlY3Rpb24ge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAxMCU7XG4gICAgICAgICAgcGFkZGluZzogMSU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnksIHJlcSB9KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LmJhc2VVcmx9YXBpLyR7cXVlcnkucG9zdElkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4geyBwb3N0OiBkYXRhLnBvc3QgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/[postId].js */"));
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
//# sourceMappingURL=[postId].js.b5574dadc113731a5938.hot-update.js.map