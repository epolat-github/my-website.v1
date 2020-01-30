webpackHotUpdate("static/development/pages/write.js",{

/***/ "./pages/write.js":
/*!************************!*\
  !*** ./pages/write.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_dbCon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/dbCon */ "./src/dbCon.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");

var _jsxFileName = "/home/epolat/Desktop/nextJs/website/pages/write.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var transferData = function transferData(data) {
  var firestore = Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_3__["dbInstance"])();
  var slug = data.blogSlug;
  var name = data.blogName;
  var detail = data.blogDetail;
  var post = {
    blogName: name,
    blogDetail: detail,
    blogTime: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
  };
  var docRef = firestore.collection("blogs").doc(data.blogSlug);
  docRef.set(post).then(function () {
    console.log("Saved");
    document.querySelector("p").innerHTML = "slug: ".concat(slug, ", name: ").concat(name, " created.");
  })["catch"](function (error) {
    return console.log("Got an error:" + error);
  });
};

var Write = function Write() {
  if (Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_3__["checkUser"])()) {
    __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("h1", {
      style: {
        color: "white"
      },
      className: "jsx-3504770661",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Inspire Someone!"), __jsx("button", {
      onClick: function onClick() {
        return Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_3__["checkUser"])() ? console.log("signed in") : console.log("not signed in");
      },
      className: "jsx-3504770661",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Check User"), __jsx("input", {
      type: "text",
      placeholder: "Blog Slug",
      id: "inputSlug",
      className: "jsx-3504770661",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-3504770661",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-3504770661",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx("input", {
      type: "text",
      placeholder: "Blog Title",
      id: "inputName",
      className: "jsx-3504770661",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-3504770661",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-3504770661",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx("textarea", {
      type: "text",
      placeholder: "Blog Detail",
      id: "inputDetail",
      className: "jsx-3504770661",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-3504770661",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-3504770661",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), __jsx("button", {
      onClick: function onClick() {
        return transferData({
          blogSlug: document.getElementById("inputSlug").value,
          blogName: document.getElementById("inputName").value,
          blogDetail: document.getElementById("inputDetail").value
        });
      },
      className: "jsx-3504770661" + " " + "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Submit"), __jsx("p", {
      style: {
        color: "red"
      },
      className: "jsx-3504770661",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3504770661",
      __self: this
    }, "h2.jsx-3504770661{position:relative;color:white;width:700px;left:30%;}h1.jsx-3504770661{position:relative;width:1vh;top:200px;margin:0;left:40%;}input.jsx-3504770661,button.jsx-3504770661,textarea.jsx-3504770661,p.jsx-3504770661{position:relative;left:40%;top:300px;}p.jsx-3504770661{width:1vh;}textarea.jsx-3504770661{height:150px;}@media only screen and (max-width:600px){h2.jsx-3504770661{position:static;padding-left:4%;width:100vw;}h1.jsx-3504770661{position:relative;left:10%;}input.jsx-3504770661,button.jsx-3504770661,textarea.jsx-3504770661{position:relative;top:130px;left:80px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL3dyaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFa0IsQUFHNkIsQUFNQSxBQVVBLEFBS1IsQUFHRyxBQUlLLEFBTUUsQUFNQSxVQWxCdEIsR0FHQSxHQUlvQixFQTVCTixBQU1GLEFBVUQsQUFrQkUsQUFNQyxTQXZCRixBQWtCVixDQTVCVSxBQWtDRSxFQXhDQSxFQTZCRSxLQVpoQixDQVZXLEFBa0NULElBeENTLEVBNkJULEdBdEJTLElBTlgsS0FPQSIsImZpbGUiOiIvaG9tZS9lcG9sYXQvRGVza3RvcC9uZXh0SnMvd2Vic2l0ZS9wYWdlcy93cml0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZGREYXRhIGZyb20gXCIuLi9zcmMvZGJDb25cIjtcbmltcG9ydCB7IGRiSW5zdGFuY2UsIGF1dGhJbnN0YW5jZSwgY2hlY2tVc2VyIH0gZnJvbSBcIi4uL3NyYy9kYkNvblwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdHJhbnNmZXJEYXRhID0gZGF0YSA9PiB7XG4gIGNvbnN0IGZpcmVzdG9yZSA9IGRiSW5zdGFuY2UoKTtcblxuICBsZXQgc2x1ZyA9IGRhdGEuYmxvZ1NsdWc7XG4gIGxldCBuYW1lID0gZGF0YS5ibG9nTmFtZTtcbiAgbGV0IGRldGFpbCA9IGRhdGEuYmxvZ0RldGFpbDtcblxuICBjb25zdCBwb3N0ID0geyBibG9nTmFtZTogbmFtZSwgYmxvZ0RldGFpbDogZGV0YWlsLCBibG9nVGltZTogRGF0ZS5ub3coKSB9O1xuXG4gIGNvbnN0IGRvY1JlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwiYmxvZ3NcIikuZG9jKGRhdGEuYmxvZ1NsdWcpO1xuXG4gIGRvY1JlZlxuICAgIC5zZXQocG9zdClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNhdmVkXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCJwXCJcbiAgICAgICkuaW5uZXJIVE1MID0gYHNsdWc6ICR7c2x1Z30sIG5hbWU6ICR7bmFtZX0gY3JlYXRlZC5gO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiR290IGFuIGVycm9yOlwiICsgZXJyb3IpKTtcbn07XG5cbmNvbnN0IFdyaXRlID0gKCkgPT4ge1xuICBpZiAoY2hlY2tVc2VyKCkpIHtcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+SW5zcGlyZSBTb21lb25lITwvaDE+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgY2hlY2tVc2VyKCkgPyBjb25zb2xlLmxvZyhcInNpZ25lZCBpblwiKSA6IGNvbnNvbGUubG9nKFwibm90IHNpZ25lZCBpblwiKVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIENoZWNrIFVzZXJcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFNsdWdcIiBpZD1cImlucHV0U2x1Z1wiIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFRpdGxlXCIgaWQ9XCJpbnB1dE5hbWVcIiAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQmxvZyBEZXRhaWxcIlxuICAgICAgICBpZD1cImlucHV0RGV0YWlsXCJcbiAgICAgID48L3RleHRhcmVhPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0XCJcbiAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICB0cmFuc2ZlckRhdGEoe1xuICAgICAgICAgICAgYmxvZ1NsdWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRTbHVnXCIpLnZhbHVlLFxuICAgICAgICAgICAgYmxvZ05hbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXROYW1lXCIpLnZhbHVlLFxuICAgICAgICAgICAgYmxvZ0RldGFpbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dERldGFpbFwiKS52YWx1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PjwvcD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDcwMHB4O1xuICAgICAgICAgIGxlZnQ6IDMwJTtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxdmg7XG4gICAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LFxuICAgICAgICBidXR0b24sXG4gICAgICAgIHRleHRhcmVhLFxuICAgICAgICBwIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICAgIHRvcDogMzAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgd2lkdGg6IDF2aDtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNCU7XG5cbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAxMzBweDtcbiAgICAgICAgICAgIGxlZnQ6IDgwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+O1xuICB9ZWxzZXtcbiAgICA8TGF5b3V0PlxuICAgICAgPHA+Tm90IGFsbG93ZWQhPC9wPlxuICAgIDwvTGF5b3V0PlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXcml0ZTtcbiJdfQ== */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/write.js */"));
  } else {
    __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Not allowed!"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Write);

/***/ })

})
//# sourceMappingURL=write.js.5df6e4d16ac6b1288469.hot-update.js.map