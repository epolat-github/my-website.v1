webpackHotUpdate("static/development/pages/write.js",{

/***/ "./pages/write.js":
/*!************************!*\
  !*** ./pages/write.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_dbCon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/dbCon */ "./src/dbCon.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/home/epolat/Desktop/projects/website/pages/write.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var transferData = function transferData(data) {
  var firestore = Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_4__["dbInstance"])();
  var slug = data.blogSlug;
  var name = data.blogName;
  var detail = data.blogDetail;

  if (slug == "" || name == "" || detail == "") {
    document.getElementById("status").innerHTML = "Fill the required areas please.";
    return;
  }

  var post = {
    blogName: name,
    blogDetail: detail,
    blogTime: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()()
  };
  var docRef = firestore.collection("blogs").doc(data.blogSlug);
  docRef.set(post).then(function () {
    console.log("Saved");
    document.querySelector("p").innerHTML = __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "`slug: $", slug, ",`") + "name: ".concat(name, " created.");
  })["catch"](function (error) {
    console.log("Got an error:" + error);
    document.getElementById("status").innerHTML = "".concat(error.message);
  });
};

var handlePostListClick = function handlePostListClick(post) {
  // change the look
  var activeListItems = document.querySelector(".active");
  activeListItems ? activeListItems.classList.toggle("active") : null;
  document.getElementById(post.slug).classList.toggle("active"); // show post

  document.getElementById("inputName").value = post.title;
  document.getElementById("inputDetail").value = post.details;
};

var listPosts = function listPosts(posts) {
  return posts.map(function (post) {
    return __jsx("button", {
      key: post.slug,
      id: post.slug,
      onClick: function onClick() {
        return handlePostListClick(post);
      },
      className: "list-group-item list-group-item-action",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, post.title, " ", __jsx("button", {
      className: "jsx-3078974914",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "deneme", " ", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3078974914",
      __self: this
    }, "button.jsx-3078974914{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL3Byb2plY3RzL3dlYnNpdGUvcGFnZXMvd3JpdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRzQixBQUd5QixVQUNaIiwiZmlsZSI6Ii9ob21lL2Vwb2xhdC9EZXNrdG9wL3Byb2plY3RzL3dlYnNpdGUvcGFnZXMvd3JpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkRGF0YSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5pbXBvcnQgeyBkYkluc3RhbmNlLCBhdXRoSW5zdGFuY2UsIGNoZWNrVXNlciB9IGZyb20gXCIuLi9zcmMvZGJDb25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB0cmFuc2ZlckRhdGEgPSBkYXRhID0+IHtcbiAgY29uc3QgZmlyZXN0b3JlID0gZGJJbnN0YW5jZSgpO1xuXG4gIGxldCBzbHVnID0gZGF0YS5ibG9nU2x1ZztcbiAgbGV0IG5hbWUgPSBkYXRhLmJsb2dOYW1lO1xuICBsZXQgZGV0YWlsID0gZGF0YS5ibG9nRGV0YWlsO1xuXG4gIGlmIChzbHVnID09IFwiXCIgfHwgbmFtZSA9PSBcIlwiIHx8IGRldGFpbCA9PSBcIlwiKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIikuaW5uZXJIVE1MID1cbiAgICAgIFwiRmlsbCB0aGUgcmVxdWlyZWQgYXJlYXMgcGxlYXNlLlwiO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBvc3QgPSB7IGJsb2dOYW1lOiBuYW1lLCBibG9nRGV0YWlsOiBkZXRhaWwsIGJsb2dUaW1lOiBEYXRlLm5vdygpIH07XG5cbiAgY29uc3QgZG9jUmVmID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJibG9nc1wiKS5kb2MoZGF0YS5ibG9nU2x1Zyk7XG5cbiAgZG9jUmVmXG4gICAgLnNldChwb3N0KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZWRcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwicFwiKS5pbm5lckhUTUwgPVxuICAgICAgICA8c3Ryb25nPmBzbHVnOiAke3NsdWd9LGA8L3N0cm9uZz4gKyBgbmFtZTogJHtuYW1lfSBjcmVhdGVkLmA7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJHb3QgYW4gZXJyb3I6XCIgKyBlcnJvcik7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKS5pbm5lckhUTUwgPSBgJHtlcnJvci5tZXNzYWdlfWA7XG4gICAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVQb3N0TGlzdENsaWNrID0gcG9zdCA9PiB7XG4gIC8vIGNoYW5nZSB0aGUgbG9va1xuICBsZXQgYWN0aXZlTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIik7XG4gIGFjdGl2ZUxpc3RJdGVtcyA/IGFjdGl2ZUxpc3RJdGVtcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpIDogbnVsbDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9zdC5zbHVnKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gIC8vIHNob3cgcG9zdFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0TmFtZVwiKS52YWx1ZSA9IHBvc3QudGl0bGU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXREZXRhaWxcIikudmFsdWUgPSBwb3N0LmRldGFpbHM7XG59O1xuXG5jb25zdCBsaXN0UG9zdHMgPSBwb3N0cyA9PiB7XG4gIHJldHVybiBwb3N0cy5tYXAocG9zdCA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAga2V5PXtwb3N0LnNsdWd9XG4gICAgICAgIGlkPXtwb3N0LnNsdWd9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBvc3RMaXN0Q2xpY2socG9zdCl9XG4gICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcbiAgICAgID5cbiAgICAgICAge3Bvc3QudGl0bGV9e1wiIFwifVxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgIGRlbmVtZXtcIiBcIn1cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9KTtcbn07XG5cbmNvbnN0IFdyaXRlID0gKHsgcG9zdHMgfSkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTVcIj5cbiAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pkluc3BpcmUgU29tZW9uZSE8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHB0LTNcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFRpdGxlXCIgaWQ9XCJpbnB1dE5hbWVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcHQtM1wiPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cImlucHV0RGV0YWlsXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHJvd3M9XCIyMFwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1zZWNvbmRhcnkgbXQtM1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICB0cmFuc2ZlckRhdGEoe1xuICAgICAgICAgICAgYmxvZ1NsdWc6IGRvY3VtZW50XG4gICAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcImlucHV0TmFtZVwiKVxuICAgICAgICAgICAgICAudmFsdWUucmVwbGFjZSgvXFxzKy9nLCBcIi1cIilcbiAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBibG9nTmFtZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dE5hbWVcIikudmFsdWUsXG4gICAgICAgICAgICBibG9nRGV0YWlsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0RGV0YWlsXCIpLnZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFBvc3RcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcG9zdC1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgPHVsIGlkPVwicG9zdC1saXN0XCIgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICB7LyogVE9ETzogcG9zdCBzbHVnIHx8IGJhxZ9sxLFrbGFyZGFuIG9sdcWfYW4gbGlzdGUgPT4gc2XDp2luY2UgZWRpdCB2ZSBkZWxldGUgc2XDp2VuZWtsZXJpLiAqL31cbiAgICAgICAge2xpc3RQb3N0cyhwb3N0cyl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBpZD1cInN0YXR1cy1jb250YWluZXJcIj5cbiAgICAgIDxwIGlkPVwic3RhdHVzXCI+PC9wPlxuICAgIDwvZGl2PlxuICA8L0xheW91dD5cbik7XG5cbldyaXRlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuYmFzZVVybH1hcGkvcG9zdHNgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcG9zdHM6IGRhdGEucG9zdHNcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdyaXRlO1xuIl19 */\n/*@ sourceURL=/home/epolat/Desktop/projects/website/pages/write.js */")));
  });
};

var Write = function Write(_ref) {
  var posts = _ref.posts;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "container pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("h1", {
    style: {
      color: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Inspire Someone!"), __jsx("div", {
    className: "form-group pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "Blog Title",
    id: "inputName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx("div", {
    className: "form-group pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("textarea", {
    id: "inputDetail",
    className: "form-control",
    rows: "20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), __jsx("button", {
    type: "button",
    className: "btn btn-lg btn-secondary mt-3",
    onClick: function onClick() {
      transferData({
        blogSlug: document.getElementById("inputName").value.replace(/\s+/g, "-").toLowerCase(),
        blogName: document.getElementById("inputName").value,
        blogDetail: document.getElementById("inputDetail").value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Post")), __jsx("div", {
    className: "container post-list-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("ul", {
    id: "post-list",
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, listPosts(posts))), __jsx("div", {
    id: "status-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("p", {
    id: "status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })));
};

Write.getInitialProps = function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat("http://localhost:3000/", "api/posts")));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            posts: data.posts
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Write);

/***/ })

})
//# sourceMappingURL=write.js.e2b790d936335a7b14b6.hot-update.js.map