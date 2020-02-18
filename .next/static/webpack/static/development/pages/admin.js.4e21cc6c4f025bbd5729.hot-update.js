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
  }, __jsx("div", {
    className: "jsx-3859168750" + " " + "container pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3859168750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Inspire Someone!"), __jsx("div", {
    className: "jsx-3859168750" + " " + "form-group pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "Blog Title",
    id: "inputName",
    className: "jsx-3859168750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3859168750" + " " + "form-group pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("textarea", {
    id: "inputDetail",
    rows: "20",
    className: "jsx-3859168750" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
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
    className: "jsx-3859168750" + " " + "btn btn-lg btn-primary mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Post"), __jsx("button", {
    type: "button",
    onClick: function onClick() {
      return handlePostDeleteClick();
    },
    className: "jsx-3859168750" + " " + "btn btn-lg btn-secondary mt-3 ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Delete")), __jsx("div", {
    className: "jsx-3859168750" + " " + "container post-list-container mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3859168750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Post List"), __jsx("ul", {
    id: "post-list",
    className: "jsx-3859168750" + " " + "list-group mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, listPosts(posts))), __jsx("div", {
    id: "status-container",
    className: "jsx-3859168750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("p", {
    id: "status",
    className: "jsx-3859168750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3859168750",
    __self: this
  }, "h1.jsx-3859168750{color:#d1a172;text-align:center;font-weight:800;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL3Byb2plY3RzL3dlYnNpdGUvcGFnZXMvYWRtaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUlnQixBQUd1QixjQUNJLGtCQUNGLGdCQUNTLHlCQUMzQiIsImZpbGUiOiIvaG9tZS9lcG9sYXQvRGVza3RvcC9wcm9qZWN0cy93ZWJzaXRlL3BhZ2VzL2FkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkZERhdGEgZnJvbSBcIi4uL3NyYy9kYkNvblwiO1xuaW1wb3J0IHsgZGJJbnN0YW5jZSwgZGVsZXRlUG9zdCwgYXV0aEluc3RhbmNlLCBjaGVja1VzZXIgfSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuY29uc3QgdHJhbnNmZXJEYXRhID0gZGF0YSA9PiB7XG4gIGlmICghY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZmlyZXN0b3JlID0gZGJJbnN0YW5jZSgpO1xuXG4gIGxldCBzbHVnID0gZGF0YS5ibG9nU2x1Z1xuICBsZXQgbmFtZSA9IGRhdGEuYmxvZ05hbWU7XG4gIGxldCBkZXRhaWwgPSBkYXRhLmJsb2dEZXRhaWw7XG5cbiAgaWYgKHNsdWcgPT0gXCJcIiB8fCBuYW1lID09IFwiXCIgfHwgZGV0YWlsID09IFwiXCIpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKS5pbm5lckhUTUwgPVxuICAgICAgXCJGaWxsIHRoZSByZXF1aXJlZCBhcmVhcyBwbGVhc2UuXCI7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcG9zdCA9IHsgYmxvZ05hbWU6IG5hbWUsIGJsb2dEZXRhaWw6IGRldGFpbCwgYmxvZ1RpbWU6IERhdGUubm93KCkgfTtcblxuICBjb25zdCBkb2NSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcImJsb2dzXCIpLmRvYyhkYXRhLmJsb2dTbHVnKTtcblxuICBkb2NSZWZcbiAgICAuc2V0KHBvc3QpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJTYXZlZFwiKTtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiR290IGFuIGVycm9yOlwiICsgZXJyb3IpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIikuaW5uZXJIVE1MID0gYCR7ZXJyb3IubWVzc2FnZX1gO1xuICAgIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUG9zdExpc3RDbGljayA9IHBvc3QgPT4ge1xuICAvLyBjaGFuZ2UgdGhlIGxvb2tcbiAgbGV0IGFjdGl2ZUxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICBhY3RpdmVMaXN0SXRlbXMgPyBhY3RpdmVMaXN0SXRlbXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKSA6IG51bGw7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvc3Quc2x1ZykuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICAvLyBzaG93IHBvc3RcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dE5hbWVcIikudmFsdWUgPSBwb3N0LnRpdGxlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0RGV0YWlsXCIpLnZhbHVlID0gcG9zdC5kZXRhaWxzO1xufTtcblxuY29uc3QgaGFuZGxlUG9zdERlbGV0ZUNsaWNrID0gKCkgPT4ge1xuICBpZiAoIWNvbmZpcm0oXCJBcmUgeW91IHN1cmU/IFwiKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgcG9zdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dE5hbWVcIikudmFsdWU7XG4gIGxldCByZXN1bHQgPSBkZWxldGVQb3N0KHBvc3RUaXRsZSk7XG5cbiAgcmVzdWx0XG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgYWxlcnQoXCJEZWxldGVkIVwiKTtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IGFsZXJ0KFwiQ291bGQgbm90IGRlbGV0ZWQuXCIpKTtcbn07XG5cbmNvbnN0IGxpc3RQb3N0cyA9IHBvc3RzID0+IHtcbiAgcmV0dXJuIHBvc3RzLm1hcChwb3N0ID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBrZXk9e3Bvc3Quc2x1Z31cbiAgICAgICAgaWQ9e3Bvc3Quc2x1Z31cbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUG9zdExpc3RDbGljayhwb3N0KX1cbiAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxuICAgICAgPlxuICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH0pO1xufTtcblxuY29uc3QgV3JpdGUgPSAoeyBwb3N0cyB9KSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtNVwiPlxuICAgICAgPGgxPkluc3BpcmUgU29tZW9uZSE8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHB0LTNcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFRpdGxlXCIgaWQ9XCJpbnB1dE5hbWVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcHQtM1wiPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cImlucHV0RGV0YWlsXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHJvd3M9XCIyMFwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IG10LTNcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgdHJhbnNmZXJEYXRhKHtcbiAgICAgICAgICAgIGJsb2dTbHVnOiBkb2N1bWVudFxuICAgICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dE5hbWVcIilcbiAgICAgICAgICAgICAgLnZhbHVlLnJlcGxhY2UoL1xccysvZywgXCItXCIpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC/EsS9nLCBcImlcIilcbiAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBibG9nTmFtZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dE5hbWVcIikudmFsdWUsXG4gICAgICAgICAgICBibG9nRGV0YWlsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0RGV0YWlsXCIpLnZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFBvc3RcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tc2Vjb25kYXJ5IG10LTMgbWwtM1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBvc3REZWxldGVDbGljaygpfVxuICAgICAgPlxuICAgICAgICBEZWxldGVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcG9zdC1saXN0LWNvbnRhaW5lciBtdC01XCI+XG4gICAgICA8aDE+UG9zdCBMaXN0PC9oMT5cbiAgICAgIDx1bCBpZD1cInBvc3QtbGlzdFwiIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbXQtM1wiPlxuICAgICAgICB7LyogVE9ETzogcG9zdCBzbHVnIHx8IGJhxZ9sxLFrbGFyZGFuIG9sdcWfYW4gbGlzdGUgPT4gc2XDp2luY2UgZWRpdCB2ZSBkZWxldGUgc2XDp2VuZWtsZXJpLiAqL31cbiAgICAgICAge2xpc3RQb3N0cyhwb3N0cyl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBpZD1cInN0YXR1cy1jb250YWluZXJcIj5cbiAgICAgIDxwIGlkPVwic3RhdHVzXCI+PC9wPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxIHtcbiAgICAgICAgY29sb3I6ICNkMWExNzI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuV3JpdGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5iYXNlVXJsfWFwaS9wb3N0c2ApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwb3N0czogZGF0YS5wb3N0c1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV3JpdGU7XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/projects/website/pages/admin.js */"));
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
//# sourceMappingURL=admin.js.4e21cc6c4f025bbd5729.hot-update.js.map