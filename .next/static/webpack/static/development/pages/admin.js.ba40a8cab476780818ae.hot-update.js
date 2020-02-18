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
  if (!confirm("Are you sure?")) {
    return;
  }

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
    alert("Saved!");
    location.reload();
  })["catch"](function (error) {
    alert(error.message);
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
    alert("Deleted!");
    location.reload();
  })["catch"](function () {
    return alert("Could not deleted.");
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
        lineNumber: 67
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
      lineNumber: 80
    },
    __self: this
  }, __jsx("article", {
    className: "jsx-3964893965" + " " + "jumpotrosn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3964893965" + " " + "container pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3964893965",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Inspire Someone!"), __jsx("div", {
    className: "jsx-3964893965" + " " + "form-group pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "Blog Title",
    id: "inputName",
    className: "jsx-3964893965",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3964893965" + " " + "form-group pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("textarea", {
    id: "inputDetail",
    rows: "20",
    className: "jsx-3964893965" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
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
    className: "jsx-3964893965" + " " + "btn btn-lg btn-primary mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Post"), __jsx("button", {
    type: "button",
    onClick: function onClick() {
      return handlePostDeleteClick();
    },
    className: "jsx-3964893965" + " " + "btn btn-lg btn-secondary mt-3 ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Delete")), __jsx("div", {
    className: "jsx-3964893965" + " " + "container post-list-container mt-4 mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3964893965",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Post List"), __jsx("ul", {
    id: "post-list",
    className: "jsx-3964893965" + " " + "list-group mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, listPosts(posts))), __jsx("div", {
    id: "status-container",
    className: "jsx-3964893965",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("p", {
    id: "status",
    className: "jsx-3964893965",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3964893965",
    __self: this
  }, "h1.jsx-3964893965{color:#d1a172;text-align:center;font-weight:800;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL3Byb2plY3RzL3dlYnNpdGUvcGFnZXMvYWRtaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0lrQixBQUd5QixjQUNJLGtCQUNGLGdCQUNTLHlCQUMzQiIsImZpbGUiOiIvaG9tZS9lcG9sYXQvRGVza3RvcC9wcm9qZWN0cy93ZWJzaXRlL3BhZ2VzL2FkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkZERhdGEgZnJvbSBcIi4uL3NyYy9kYkNvblwiO1xuaW1wb3J0IHsgZGJJbnN0YW5jZSwgZGVsZXRlUG9zdCwgYXV0aEluc3RhbmNlLCBjaGVja1VzZXIgfSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuY29uc3QgdHJhbnNmZXJEYXRhID0gZGF0YSA9PiB7XG4gIGlmICghY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZmlyZXN0b3JlID0gZGJJbnN0YW5jZSgpO1xuXG4gIGxldCBzbHVnID0gZGF0YS5ibG9nU2x1ZztcbiAgbGV0IG5hbWUgPSBkYXRhLmJsb2dOYW1lO1xuICBsZXQgZGV0YWlsID0gZGF0YS5ibG9nRGV0YWlsO1xuXG4gIGlmIChzbHVnID09IFwiXCIgfHwgbmFtZSA9PSBcIlwiIHx8IGRldGFpbCA9PSBcIlwiKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIikuaW5uZXJIVE1MID1cbiAgICAgIFwiRmlsbCB0aGUgcmVxdWlyZWQgYXJlYXMgcGxlYXNlLlwiO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBvc3QgPSB7IGJsb2dOYW1lOiBuYW1lLCBibG9nRGV0YWlsOiBkZXRhaWwsIGJsb2dUaW1lOiBEYXRlLm5vdygpIH07XG5cbiAgY29uc3QgZG9jUmVmID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJibG9nc1wiKS5kb2MoZGF0YS5ibG9nU2x1Zyk7XG5cbiAgZG9jUmVmXG4gICAgLnNldChwb3N0KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGFsZXJ0KFwiU2F2ZWQhXCIpO1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKS5pbm5lckhUTUwgPSBgJHtlcnJvci5tZXNzYWdlfWA7XG4gICAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVQb3N0TGlzdENsaWNrID0gcG9zdCA9PiB7XG4gIC8vIGNoYW5nZSB0aGUgbG9va1xuICBsZXQgYWN0aXZlTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIik7XG4gIGFjdGl2ZUxpc3RJdGVtcyA/IGFjdGl2ZUxpc3RJdGVtcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpIDogbnVsbDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9zdC5zbHVnKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gIC8vIHNob3cgcG9zdFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0TmFtZVwiKS52YWx1ZSA9IHBvc3QudGl0bGU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXREZXRhaWxcIikudmFsdWUgPSBwb3N0LmRldGFpbHM7XG59O1xuXG5jb25zdCBoYW5kbGVQb3N0RGVsZXRlQ2xpY2sgPSAoKSA9PiB7XG4gIGlmICghY29uZmlybShcIkFyZSB5b3Ugc3VyZT8gXCIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBwb3N0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0TmFtZVwiKS52YWx1ZTtcbiAgbGV0IHJlc3VsdCA9IGRlbGV0ZVBvc3QocG9zdFRpdGxlKTtcblxuICByZXN1bHRcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBhbGVydChcIkRlbGV0ZWQhXCIpO1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4gYWxlcnQoXCJDb3VsZCBub3QgZGVsZXRlZC5cIikpO1xufTtcblxuY29uc3QgbGlzdFBvc3RzID0gcG9zdHMgPT4ge1xuICByZXR1cm4gcG9zdHMubWFwKHBvc3QgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGtleT17cG9zdC5zbHVnfVxuICAgICAgICBpZD17cG9zdC5zbHVnfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQb3N0TGlzdENsaWNrKHBvc3QpfVxuICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXG4gICAgICA+XG4gICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5jb25zdCBXcml0ZSA9ICh7IHBvc3RzIH0pID0+IChcbiAgPExheW91dD5cbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJqdW1wb3Ryb3NuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdC01XCI+XG4gICAgICAgIDxoMT5JbnNwaXJlIFNvbWVvbmUhPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHB0LTNcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgVGl0bGVcIiBpZD1cImlucHV0TmFtZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcHQtM1wiPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgaWQ9XCJpbnB1dERldGFpbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcm93cz1cIjIwXCJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IG10LTNcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHRyYW5zZmVyRGF0YSh7XG4gICAgICAgICAgICAgIGJsb2dTbHVnOiBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcImlucHV0TmFtZVwiKVxuICAgICAgICAgICAgICAgIC52YWx1ZS5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC/EsS9nLCBcImlcIilcbiAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgYmxvZ05hbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXROYW1lXCIpLnZhbHVlLFxuICAgICAgICAgICAgICBibG9nRGV0YWlsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0RGV0YWlsXCIpLnZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgUG9zdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLXNlY29uZGFyeSBtdC0zIG1sLTNcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBvc3REZWxldGVDbGljaygpfVxuICAgICAgICA+XG4gICAgICAgICAgRGVsZXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwb3N0LWxpc3QtY29udGFpbmVyIG10LTQgbWItNVwiPlxuICAgICAgICA8aDE+UG9zdCBMaXN0PC9oMT5cbiAgICAgICAgPHVsIGlkPVwicG9zdC1saXN0XCIgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBtdC0zXCI+XG4gICAgICAgICAge2xpc3RQb3N0cyhwb3N0cyl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBpZD1cInN0YXR1cy1jb250YWluZXJcIj5cbiAgICAgICAgPHAgaWQ9XCJzdGF0dXNcIj48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGNvbG9yOiAjZDFhMTcyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2FydGljbGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuV3JpdGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5iYXNlVXJsfWFwaS9wb3N0c2ApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwb3N0czogZGF0YS5wb3N0c1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV3JpdGU7XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/projects/website/pages/admin.js */")));
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
//# sourceMappingURL=admin.js.ba40a8cab476780818ae.hot-update.js.map