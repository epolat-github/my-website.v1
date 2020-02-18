webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
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


var _jsxFileName = "/home/epolat/Desktop/projects/website/pages/admin.js";


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
    location.reload();
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

var handlePostDeleteClick = function handlePostDeleteClick() {
  if (!confirm("Are you sure? ")) {
    return;
  }

  var postTitle = document.getElementById("inputName").value;
  var result = Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_4__["deletePost"])(postTitle);
  result.then(function () {
    console.log("returned true");
    location.reload();
  })["catch"](function () {
    return console.log("returned false");
  });
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
        lineNumber: 64
      },
      __self: this
    }, post.title);
  });
};

var Write = function Write(_ref) {
  var posts = _ref.posts;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3306229739" + " " + "container pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3306229739",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Inspire Someone!"), __jsx("div", {
    className: "jsx-3306229739" + " " + "form-group pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "Blog Title",
    id: "inputName",
    className: "jsx-3306229739",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3306229739" + " " + "form-group pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("textarea", {
    id: "inputDetail",
    rows: "20",
    className: "jsx-3306229739" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), __jsx("button", {
    type: "button",
    onClick: function onClick() {
      transferData({
        blogSlug: document.getElementById("inputName").value.replace(/\s+/g, "-").replace(/ı/g, "i").toLowerCase(),
        blogName: document.getElementById("inputName").value,
        blogDetail: document.getElementById("inputDetail").value
      });
    },
    className: "jsx-3306229739" + " " + "btn btn-lg btn-primary mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Post"), __jsx("button", {
    type: "button",
    onClick: function onClick() {
      return handlePostDeleteClick();
    },
    className: "jsx-3306229739" + " " + "btn btn-lg btn-secondary mt-3 ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Delete")), __jsx("div", {
    className: "jsx-3306229739" + " " + "container post-list-container mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3306229739",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Post List"), __jsx("ul", {
    id: "post-list",
    className: "jsx-3306229739" + " " + "list-group mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, listPosts(posts))), __jsx("div", {
    id: "status-container",
    className: "jsx-3306229739",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("p", {
    id: "status",
    className: "jsx-3306229739",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3306229739",
    __self: this
  }, "h1.jsx-3306229739{color:#D1A172;text-align:center;font-weight:800;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL3Byb2plY3RzL3dlYnNpdGUvcGFnZXMvYWRtaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEhjLEFBR3lCLGNBQ0ksa0JBQ0YsZ0JBQ1MseUJBQzNCIiwiZmlsZSI6Ii9ob21lL2Vwb2xhdC9EZXNrdG9wL3Byb2plY3RzL3dlYnNpdGUvcGFnZXMvYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkRGF0YSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5pbXBvcnQgeyBkYkluc3RhbmNlLCBkZWxldGVQb3N0LCBhdXRoSW5zdGFuY2UsIGNoZWNrVXNlciB9IGZyb20gXCIuLi9zcmMvZGJDb25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5jb25zdCB0cmFuc2ZlckRhdGEgPSBkYXRhID0+IHtcbiAgY29uc3QgZmlyZXN0b3JlID0gZGJJbnN0YW5jZSgpO1xuXG4gIGxldCBzbHVnID0gZGF0YS5ibG9nU2x1ZztcbiAgbGV0IG5hbWUgPSBkYXRhLmJsb2dOYW1lO1xuICBsZXQgZGV0YWlsID0gZGF0YS5ibG9nRGV0YWlsO1xuXG4gIGlmIChzbHVnID09IFwiXCIgfHwgbmFtZSA9PSBcIlwiIHx8IGRldGFpbCA9PSBcIlwiKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIikuaW5uZXJIVE1MID1cbiAgICAgIFwiRmlsbCB0aGUgcmVxdWlyZWQgYXJlYXMgcGxlYXNlLlwiO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBvc3QgPSB7IGJsb2dOYW1lOiBuYW1lLCBibG9nRGV0YWlsOiBkZXRhaWwsIGJsb2dUaW1lOiBEYXRlLm5vdygpIH07XG5cbiAgY29uc3QgZG9jUmVmID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJibG9nc1wiKS5kb2MoZGF0YS5ibG9nU2x1Zyk7XG5cbiAgZG9jUmVmXG4gICAgLnNldChwb3N0KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZWRcIik7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCBhbiBlcnJvcjpcIiArIGVycm9yKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzXCIpLmlubmVySFRNTCA9IGAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZVBvc3RMaXN0Q2xpY2sgPSBwb3N0ID0+IHtcbiAgLy8gY2hhbmdlIHRoZSBsb29rXG4gIGxldCBhY3RpdmVMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgYWN0aXZlTGlzdEl0ZW1zID8gYWN0aXZlTGlzdEl0ZW1zLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIikgOiBudWxsO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3N0LnNsdWcpLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgLy8gc2hvdyBwb3N0XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXROYW1lXCIpLnZhbHVlID0gcG9zdC50aXRsZTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dERldGFpbFwiKS52YWx1ZSA9IHBvc3QuZGV0YWlscztcbn07XG5cbmNvbnN0IGhhbmRsZVBvc3REZWxldGVDbGljayA9ICgpID0+IHtcbiAgaWYgKCFjb25maXJtKFwiQXJlIHlvdSBzdXJlPyBcIikpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHBvc3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXROYW1lXCIpLnZhbHVlO1xuICBsZXQgcmVzdWx0ID0gZGVsZXRlUG9zdChwb3N0VGl0bGUpO1xuXG4gIHJlc3VsdFxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuZWQgdHJ1ZVwiKTtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IGNvbnNvbGUubG9nKFwicmV0dXJuZWQgZmFsc2VcIikpO1xufTtcblxuY29uc3QgbGlzdFBvc3RzID0gcG9zdHMgPT4ge1xuICByZXR1cm4gcG9zdHMubWFwKHBvc3QgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGtleT17cG9zdC5zbHVnfVxuICAgICAgICBpZD17cG9zdC5zbHVnfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQb3N0TGlzdENsaWNrKHBvc3QpfVxuICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXG4gICAgICA+XG4gICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5jb25zdCBXcml0ZSA9ICh7IHBvc3RzIH0pID0+IChcbiAgPExheW91dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdC01XCI+XG4gICAgICA8aDE+SW5zcGlyZSBTb21lb25lITwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcHQtM1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgVGl0bGVcIiBpZD1cImlucHV0TmFtZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwdC0zXCI+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGlkPVwiaW5wdXREZXRhaWxcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgcm93cz1cIjIwXCJcbiAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLXByaW1hcnkgbXQtM1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICB0cmFuc2ZlckRhdGEoe1xuICAgICAgICAgICAgYmxvZ1NsdWc6IGRvY3VtZW50XG4gICAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcImlucHV0TmFtZVwiKVxuICAgICAgICAgICAgICAudmFsdWUucmVwbGFjZSgvXFxzKy9nLCBcIi1cIilcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL8SxL2csIFwiaVwiKVxuICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIGJsb2dOYW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0TmFtZVwiKS52YWx1ZSxcbiAgICAgICAgICAgIGJsb2dEZXRhaWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXREZXRhaWxcIikudmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgUG9zdFxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1zZWNvbmRhcnkgbXQtMyBtbC0zXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUG9zdERlbGV0ZUNsaWNrKCl9XG4gICAgICA+XG4gICAgICAgIERlbGV0ZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwb3N0LWxpc3QtY29udGFpbmVyIG10LTVcIj5cbiAgICAgIDxoMT5Qb3N0IExpc3Q8L2gxPlxuICAgICAgPHVsIGlkPVwicG9zdC1saXN0XCIgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBtdC0zXCI+XG4gICAgICAgIHsvKiBUT0RPOiBwb3N0IHNsdWcgfHwgYmHFn2zEsWtsYXJkYW4gb2x1xZ9hbiBsaXN0ZSA9PiBzZcOnaW5jZSBlZGl0IHZlIGRlbGV0ZSBzZcOnZW5la2xlcmkuICovfVxuICAgICAgICB7bGlzdFBvc3RzKHBvc3RzKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGlkPVwic3RhdHVzLWNvbnRhaW5lclwiPlxuICAgICAgPHAgaWQ9XCJzdGF0dXNcIj48L3A+XG4gICAgPC9kaXY+XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGNvbG9yOiAjRDFBMTcyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuV3JpdGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5iYXNlVXJsfWFwaS9wb3N0c2ApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwb3N0czogZGF0YS5wb3N0c1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV3JpdGU7XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/projects/website/pages/admin.js */"));
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
//# sourceMappingURL=admin.js.c0b71bbbf657c3a4a6cf.hot-update.js.map