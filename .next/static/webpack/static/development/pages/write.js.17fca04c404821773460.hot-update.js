webpackHotUpdate("static/development/pages/write.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: changeUserState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeUserState", function() { return changeUserState; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_dbCon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/dbCon */ "./src/dbCon.js");



var _jsxFileName = "/home/epolat/Desktop/projects/website/pages/blog.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






var changeUserState = function changeUserState(user) {
  if (user) {
    document.querySelectorAll(".sign-out").forEach(function (item) {
      return item.classList.add("d-none");
    });
    document.querySelectorAll(".sign-in").forEach(function (item) {
      return item.classList.remove("d-none");
    });
  } //if logged out
  else {
      document.querySelectorAll(".sign-out").forEach(function (item) {
        return item.classList.remove("d-none");
      });
      document.querySelectorAll(".sign-in").forEach(function (item) {
        return item.classList.add("d-none");
      });
    }
};

var signinModal = function signinModal() {
  return __jsx("div", {
    className: "modal fade",
    id: "signinModal",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "signinModalLabel",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "modal-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h5", {
    className: "modal-title",
    id: "signinModalLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Sign In"), __jsx("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "email",
    id: "emailSignin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("input", {
    type: "password",
    placeholder: "password",
    id: "passSignin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("p", {
    id: "statusSignin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx("div", {
    className: "modal-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Close"), __jsx("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: function onClick() {
      document.getElementById("statusSignin").innerHTML = "Checking credentials...";
      Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_10__["authInstance"])().signInWithEmailAndPassword(document.getElementById("emailSignin").value, document.getElementById("passSignin").value).then(function () {
        document.getElementById("passSignin").value = "";
        document.getElementById("emailSignin").value = "";
        window.location.reload();
      })["catch"](function (error) {
        document.getElementById("statusSignin").innerHTML = error.code;
        console.log("Error code: ", error.code);
        console.log("Error Message: ", error.message);
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Sign-in")))));
};

var registerModal = function registerModal() {
  return __jsx("div", {
    className: "modal fade",
    id: "registerModal",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "registerModalLabel",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("div", {
    className: "modal-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("h5", {
    className: "modal-title",
    id: "registerModalLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Register"), __jsx("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "email",
    id: "emailRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx("input", {
    type: "password",
    placeholder: "password",
    id: "passRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), __jsx("p", {
    id: "statusRegister",
    style: {
      marginTop: "3%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })), __jsx("div", {
    className: "modal-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Close"), __jsx("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: function onClick() {
      Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_10__["authInstance"])().createUserWithEmailAndPassword(document.getElementById("emailRegister").value, document.getElementById("passRegister").value).then(function () {
        console.log("Registered.");
        document.getElementById("statusRegister").innerHTML = "Registered."; // authInstance().signOut();

        window.location.reload();
      })["catch"](function (error) {
        console.log(error);
        document.getElementById("statusRegister").innerHTML = error.message;
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Register")))));
};

var loginBlogButtons = function loginBlogButtons() {
  return __jsx("div", {
    className: "container-fluid mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("div", {
    className: "row d-flex justify-content-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/write",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Write"))), __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary btn-lg",
    onClick: function onClick() {
      Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_10__["authInstance"])().signOut().then(function () {
        return window.location.reload();
      })["catch"](function () {
        return console.log("Sign-out problem.");
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Sign-out"))));
};

var logoutBlogButtons = function logoutBlogButtons() {
  return __jsx("div", {
    className: "container-fluid mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("div", {
    className: "row d-flex justify-content-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    "data-toggle": "modal",
    "data-target": "#registerModal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Register")), __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    "data-toggle": "modal",
    "data-target": "#signinModal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "Sign-in"))));
};

var blogButtons = function blogButtons() {
  console.log(Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_10__["checkUser"])());

  if (Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_10__["checkUser"])()) {
    // if logged in
    return loginBlogButtons();
  } else {
    return logoutBlogButtons();
  }
}; // const blogButtons = () => {
//   console.log(checkUser());
//   return (
//     <div className="container-fluid mt-2">
//       <div className="row d-flex justify-content-end">
//         <div className="col-lg-2 col-md-2 col-6 sign-out">
//           <button
//             type="button"
//             className="btn btn-primary btn-lg"
//             data-toggle="modal"
//             data-target="#registerModal"
//           >
//             Register
//           </button>
//         </div>
//         <div className="col-lg-2 col-md-2 col-6 sign-out">
//           <button
//             type="button"
//             className="btn btn-primary btn-lg"
//             data-toggle="modal"
//             data-target="#signinModal"
//           >
//             Sign-in
//           </button>
//         </div>
//         <div className="col-lg-2 col-md-2 col-6 sign-in">
//           <Link href="/write">
//             <button type="button" className="btn btn-primary btn-lg">
//               Write
//             </button>
//           </Link>
//         </div>
//         <div className="col-lg-2 col-md-2 col-6 sign-in">
//           <button
//             type="button"
//             className="btn btn-secondary btn-lg"
//             onClick={() => {
//               authInstance()
//                 .signOut()
//                 .then(() => window.location.reload())
//                 .catch(() => console.log("Sign-out problem."));
//             }}
//           >
//             Sign-out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


var createCards = function createCards(post) {
  return __jsx("div", {
    key: post.slug + Math.random(),
    className: "col-md-6 col-lg-4 mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, __jsx("div", {
    className: "card h-100 border-dark rounded text-white bg-dark mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, __jsx("div", {
    className: "card-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, __jsx("h3", {
    className: "card-title text-capitalize",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: post.slug,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, post.title))), post.details && __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
    source: post.details.slice(0, 500) + "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }))), __jsx("div", {
    className: "card-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, __jsx("small", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, post.date))));
};

var Blog = function Blog(_ref) {
  var posts = _ref.posts,
      postCount = _ref.postCount,
      currPage = _ref.currPage;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, blogButtons(), signinModal(), registerModal(), __jsx("article", {
    id: "blog-container",
    className: "jsx-1885384937",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1885384937" + " " + "row ml-5 mr-5 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, posts && posts.map(function (post) {
    return createCards(post);
  })), __jsx("nav", {
    id: "page-button-container",
    className: "jsx-1885384937",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, __jsx("button", {
    disabled: currPage <= 1,
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/blog?page=".concat(currPage - 1));
    },
    className: "jsx-1885384937" + " " + "page-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, "<<"), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(Math.ceil(postCount / 6))).map(function (curr, index) {
    return __jsx("button", {
      key: "button" + index,
      onClick: function onClick() {
        return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/blog?page=".concat(index + 1));
      },
      className: "jsx-1885384937" + " " + "page-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
      },
      __self: this
    }, index + 1);
  }), __jsx("button", {
    disabled: currPage >= Math.ceil(postCount / 6),
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/blog?page=".concat(currPage + 1));
    },
    className: "jsx-1885384937" + " " + "page-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, ">>"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1885384937",
    __self: this
  }, "#post-list.jsx-1885384937{color:white;border-bottom:2px solid white;border-radius:25%;text-align:center;margin:1% 10%;padding:1% 0;}a.jsx-1885384937{font-weight:bold;}.card-title.jsx-1885384937{text-transform:capitalize;}#page-button-container.jsx-1885384937{max-width:600px;margin:0 auto;margin-bottom:2%;-webkit-transform:translateX(25%);-ms-transform:translateX(25%);transform:translateX(25%);}.page-button.jsx-1885384937{background-color:#0083fe;border:1px solid white;border-radius:20%;color:white;padding:10px 16px;margin:0 3px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;}.page-button.jsx-1885384937:hover{background-color:#2e5e8b;}.page-button[disabled].jsx-1885384937{background-color:gray;}a[disabled].jsx-1885384937{background-color:red;}@media only screen and (max-width:600px){.row.jsx-1885384937{margin:5% 2% 3% 2% !important;}#page-button-container.jsx-1885384937{width:100%;display:inline-block;margin-left:50%;margin-bottom:10%;-webkit-transform:translateX(-40%);-ms-transform:translateX(-40%);transform:translateX(-40%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL3Byb2plY3RzL3dlYnNpdGUvcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1V2dCLEFBR3FCLEFBUUssQUFHUyxBQU1WLEFBTVMsQUFjQSxBQUdILEFBR0QsQUFJVyxBQUduQixXQUVVLENBbkRPLElBaUJoQixDQVRoQixJQW1DQSxDQUhBLEdBakJ5QixBQWN6QixDQTFCQSxJQU9tQixBQTZCakIsRUFLa0IsVUFuREEsS0FrQlEsQ0FLUixBQTZCRSxZQW5ERixNQXVCTixBQTZCaUIsWUFuRGYsQUF1QkksY0F0QkwsSUF1QkEsU0F0QmYsSUF3QnVCLDRCQVR2QixzQkFXaUIsQUF3QmYsZUFyQkYiLCJmaWxlIjoiL2hvbWUvZXBvbGF0L0Rlc2t0b3AvcHJvamVjdHMvd2Vic2l0ZS9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgeyBhdXRoSW5zdGFuY2UsIGNoZWNrVXNlciB9IGZyb20gXCIuLi9zcmMvZGJDb25cIjtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVVzZXJTdGF0ZSA9IHVzZXIgPT4ge1xuICBpZiAodXNlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLW91dFwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIikpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLWluXCIpXG4gICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSk7XG4gIH1cbiAgLy9pZiBsb2dnZWQgb3V0XG4gIGVsc2Uge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLW91dFwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIikpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLWluXCIpXG4gICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKSk7XG4gIH1cbn07XG5cbmNvbnN0IHNpZ25pbk1vZGFsID0gKCkgPT4gKFxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXG4gICAgaWQ9XCJzaWduaW5Nb2RhbFwiXG4gICAgdGFiSW5kZXg9XCItMVwiXG4gICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVwic2lnbmluTW9kYWxMYWJlbFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cInNpZ25pbk1vZGFsTGFiZWxcIj5cbiAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxuICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIGlkPVwiZW1haWxTaWduaW5cIiAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBpZD1cInBhc3NTaWduaW5cIiAvPlxuICAgICAgICAgIDxwIGlkPVwic3RhdHVzU2lnbmluXCI+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDbG9zZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNTaWduaW5cIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICBcIkNoZWNraW5nIGNyZWRlbnRpYWxzLi4uXCI7XG4gICAgICAgICAgICAgIGF1dGhJbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFNpZ25pblwiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc1NpZ25pblwiKS52YWx1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3NTaWduaW5cIikudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFNpZ25pblwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNTaWduaW5cIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuY29kZTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgY29kZTogXCIsIGVycm9yLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBNZXNzYWdlOiBcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24taW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCByZWdpc3Rlck1vZGFsID0gKCkgPT4gKFxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXG4gICAgaWQ9XCJyZWdpc3Rlck1vZGFsXCJcbiAgICB0YWJJbmRleD1cIi0xXCJcbiAgICByb2xlPVwiZGlhbG9nXCJcbiAgICBhcmlhLWxhYmVsbGVkYnk9XCJyZWdpc3Rlck1vZGFsTGFiZWxcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gID5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJyZWdpc3Rlck1vZGFsTGFiZWxcIj5cbiAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcbiAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBpZD1cImVtYWlsUmVnaXN0ZXJcIiAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBpZD1cInBhc3NSZWdpc3RlclwiIC8+XG4gICAgICAgICAgPHAgaWQ9XCJzdGF0dXNSZWdpc3RlclwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzJVwiIH19PjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXG4gICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGF1dGhJbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxSZWdpc3RlclwiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc1JlZ2lzdGVyXCIpLnZhbHVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0ZXJlZC5cIik7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1JlZ2lzdGVyXCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICAgIFwiUmVnaXN0ZXJlZC5cIjtcbiAgICAgICAgICAgICAgICAgIC8vIGF1dGhJbnN0YW5jZSgpLnNpZ25PdXQoKTtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNSZWdpc3RlclwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IGxvZ2luQmxvZ0J1dHRvbnMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtNiBzaWduLWluXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi93cml0ZVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiPlxuICAgICAgICAgICAgICBXcml0ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtNiBzaWduLWluXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tbGdcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBhdXRoSW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgIC5zaWduT3V0KClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUubG9nKFwiU2lnbi1vdXQgcHJvYmxlbS5cIikpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduLW91dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbG9nb3V0QmxvZ0J1dHRvbnMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtNiBzaWduLW91dFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3JlZ2lzdGVyTW9kYWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yIGNvbC1tZC0yIGNvbC02IHNpZ24tb3V0XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjc2lnbmluTW9kYWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24taW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGJsb2dCdXR0b25zID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhjaGVja1VzZXIoKSk7XG4gIGlmIChjaGVja1VzZXIoKSkge1xuICAgIC8vIGlmIGxvZ2dlZCBpblxuICAgIHJldHVybiBsb2dpbkJsb2dCdXR0b25zKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxvZ291dEJsb2dCdXR0b25zKCk7XG4gIH1cbn07XG5cbi8vIGNvbnN0IGJsb2dCdXR0b25zID0gKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhjaGVja1VzZXIoKSk7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMlwiPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtNiBzaWduLW91dFwiPlxuLy8gICAgICAgICAgIDxidXR0b25cbi8vICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiXG4vLyAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcbi8vICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3JlZ2lzdGVyTW9kYWxcIlxuLy8gICAgICAgICAgID5cbi8vICAgICAgICAgICAgIFJlZ2lzdGVyXG4vLyAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yIGNvbC1tZC0yIGNvbC02IHNpZ24tb3V0XCI+XG4vLyAgICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCJcbi8vICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxuLy8gICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjc2lnbmluTW9kYWxcIlxuLy8gICAgICAgICAgID5cbi8vICAgICAgICAgICAgIFNpZ24taW5cbi8vICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1pblwiPlxuLy8gICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd3JpdGVcIj5cbi8vICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIj5cbi8vICAgICAgICAgICAgICAgV3JpdGVcbi8vICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICAgIDwvTGluaz5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1pblwiPlxuLy8gICAgICAgICAgIDxidXR0b25cbi8vICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnXCJcbi8vICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbi8vICAgICAgICAgICAgICAgYXV0aEluc3RhbmNlKClcbi8vICAgICAgICAgICAgICAgICAuc2lnbk91dCgpXG4vLyAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKVxuLy8gICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLmxvZyhcIlNpZ24tb3V0IHByb2JsZW0uXCIpKTtcbi8vICAgICAgICAgICAgIH19XG4vLyAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgU2lnbi1vdXRcbi8vICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbmNvbnN0IGNyZWF0ZUNhcmRzID0gcG9zdCA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e3Bvc3Quc2x1ZyArIE1hdGgucmFuZG9tKCl9IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy00IG1iLTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoLTEwMCBib3JkZXItZGFyayByb3VuZGVkIHRleHQtd2hpdGUgYmctZGFyayBtYi0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LWNhcGl0YWxpemVcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cG9zdC5zbHVnfT5cbiAgICAgICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICB7cG9zdC5kZXRhaWxzICYmIChcbiAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtwb3N0LmRldGFpbHMuc2xpY2UoMCwgNTAwKSArIFwiLi4uXCJ9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e3Bvc3QuZGF0ZX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgQmxvZyA9ICh7IHBvc3RzLCBwb3N0Q291bnQsIGN1cnJQYWdlIH0pID0+IChcbiAgPExheW91dD5cbiAgICB7LyogQmxvZyBzcGVjaWFsIEJ1dHRvbnMgKi99XG4gICAge2Jsb2dCdXR0b25zKCl9XG5cbiAgICB7LyogU2lnbi1pbiBNb2RhbCAqL31cbiAgICB7c2lnbmluTW9kYWwoKX1cblxuICAgIHsvKiBTaWduLW91dCBNb2RhbCAqL31cbiAgICB7cmVnaXN0ZXJNb2RhbCgpfVxuXG4gICAgey8qIFBvc3RzICovfVxuICAgIDxhcnRpY2xlIGlkPVwiYmxvZy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1sLTUgbXItNSBtdC01XCI+XG4gICAgICAgIHsvKiBQcm9kdWNlIHBvc3RzICovfVxuICAgICAgICB7cG9zdHMgJiYgcG9zdHMubWFwKHBvc3QgPT4gY3JlYXRlQ2FyZHMocG9zdCkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBQYWdpbmF0aW9uICovfVxuICAgICAgPG5hdiBpZD1cInBhZ2UtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1idXR0b25cIlxuICAgICAgICAgIGRpc2FibGVkPXtjdXJyUGFnZSA8PSAxfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvYmxvZz9wYWdlPSR7Y3VyclBhZ2UgLSAxfWApfVxuICAgICAgICA+XG4gICAgICAgICAge2A8PGB9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7Wy4uLkFycmF5KE1hdGguY2VpbChwb3N0Q291bnQgLyA2KSldLm1hcCgoY3VyciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e1wiYnV0dG9uXCIgKyBpbmRleH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvYmxvZz9wYWdlPSR7aW5kZXggKyAxfWApfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1idXR0b25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbmRleCArIDF9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1idXR0b25cIlxuICAgICAgICAgIGRpc2FibGVkPXtjdXJyUGFnZSA+PSBNYXRoLmNlaWwocG9zdENvdW50IC8gNil9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goYC9ibG9nP3BhZ2U9JHtjdXJyUGFnZSArIDF9YCl9XG4gICAgICAgID5cbiAgICAgICAgICA+PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbmF2PlxuICAgIDwvYXJ0aWNsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAjcG9zdC1saXN0IHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDElIDEwJTtcbiAgICAgICAgcGFkZGluZzogMSUgMDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB9XG4gICAgICAjcGFnZS1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgLypkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogNDAlOyAqL1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNSUpO1xuICAgICAgfVxuICAgICAgLnBhZ2UtYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODNmZTsgLyogR3JlZW4gKi9cbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICAgIG1hcmdpbjogMCAzcHg7XG4gICAgICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIC8vZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIC8vY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAvL2Zsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgICAgLnBhZ2UtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNWU4YjtcbiAgICAgIH1cbiAgICAgIC5wYWdlLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgICAgfVxuICAgICAgYVtkaXNhYmxlZF0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgIG1hcmdpbjogNSUgMiUgMyUgMiUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAjcGFnZS1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAvKiBtYXJnaW46IDMlIDUwJTsgKi9cbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MCUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5CbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5OiB7IHBhZ2UgPSAxIH0gfSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5iYXNlVXJsfWFwaS9wb3N0cz9wYWdlPSR7cGFnZX1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcG9zdHM6IGRhdGEucG9zdHMsXG4gICAgcG9zdENvdW50OiBwYXJzZUludChkYXRhLnBvc3RDb3VudCwgMTApLFxuICAgIGN1cnJQYWdlOiBwYXJzZUludChwYWdlLCAxMClcbiAgfTsgLy9yZXR1cm5zIGFuIGFycmF5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl19 */\n/*@ sourceURL=/home/epolat/Desktop/projects/website/pages/blog.js */"));
};

Blog.getInitialProps = function _callee(_ref2) {
  var _ref2$query$page, page, res, data;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref2$query$page = _ref2.query.page, page = _ref2$query$page === void 0 ? 1 : _ref2$query$page;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat("http://localhost:3000/", "api/posts?page=").concat(page)));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          data = _context.sent;
          return _context.abrupt("return", {
            posts: data.posts,
            postCount: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(data.postCount, 10),
            currPage: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(page, 10)
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=write.js.17fca04c404821773460.hot-update.js.map