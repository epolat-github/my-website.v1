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
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h1", {
    style: {
      color: "white"
    },
    className: "jsx-2806180447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Inspire Someone!"), __jsx("button", {
    id: "checkUserButton",
    onClick: function onClick() {
      return Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_3__["checkUser"])() ? console.log("signed in") : console.log("not signed in");
    },
    className: "jsx-2806180447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Check User"), __jsx("input", {
    type: "text",
    placeholder: "Blog Slug",
    id: "inputSlug",
    className: "jsx-2806180447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2806180447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2806180447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    placeholder: "Blog Title",
    id: "inputName",
    className: "jsx-2806180447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2806180447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2806180447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("textarea", {
    type: "text",
    placeholder: "Blog Detail",
    id: "inputDetail",
    className: "jsx-2806180447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2806180447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2806180447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
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
    className: "jsx-2806180447" + " " + "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Submit"), __jsx("p", {
    style: {
      color: "red"
    },
    className: "jsx-2806180447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2806180447",
    __self: this
  }, "h2.jsx-2806180447{position:relative;color:white;width:700px;left:30%;}h1.jsx-2806180447{position:relative;width:1vh;top:200px;margin:0;left:40%;}input.jsx-2806180447,button.jsx-2806180447,textarea.jsx-2806180447,p.jsx-2806180447{position:relative;left:40%;top:300px;}p.jsx-2806180447{width:1vh;}textarea.jsx-2806180447{height:150px;}@media only screen and (max-width:600px){h2.jsx-2806180447{position:static;padding-left:4%;width:100vw;}h1.jsx-2806180447{position:relative;left:10%;}input.jsx-2806180447,button.jsx-2806180447,textarea.jsx-2806180447{position:relative;top:130px;left:80px;}#checkUserButton.jsx-2806180447{position:relative;top:130px;left:80px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL3dyaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREZ0IsQUFHMkIsQUFNQSxBQVVBLEFBS1IsQUFHRyxBQUlLLEFBTUUsQUFNQSxBQUtBLFVBdkJ0QixHQUdBLEdBSW9CLEVBNUJOLEFBTUYsQUFVRCxBQWtCRSxBQU1DLEFBS0EsU0E1QkYsQUFrQlYsQ0E1QlUsQUFrQ0UsQUFLQSxFQTdDQSxFQTZCRSxLQVpoQixDQVZXLEFBa0NULEFBS0EsSUE3Q1MsRUE2QlQsR0F0QlMsSUFOWCxLQU9BIiwiZmlsZSI6Ii9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL3dyaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkZERhdGEgZnJvbSBcIi4uL3NyYy9kYkNvblwiO1xuaW1wb3J0IHsgZGJJbnN0YW5jZSwgYXV0aEluc3RhbmNlLCBjaGVja1VzZXIgfSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB0cmFuc2ZlckRhdGEgPSBkYXRhID0+IHtcbiAgY29uc3QgZmlyZXN0b3JlID0gZGJJbnN0YW5jZSgpO1xuXG4gIGxldCBzbHVnID0gZGF0YS5ibG9nU2x1ZztcbiAgbGV0IG5hbWUgPSBkYXRhLmJsb2dOYW1lO1xuICBsZXQgZGV0YWlsID0gZGF0YS5ibG9nRGV0YWlsO1xuXG4gIGNvbnN0IHBvc3QgPSB7IGJsb2dOYW1lOiBuYW1lLCBibG9nRGV0YWlsOiBkZXRhaWwsIGJsb2dUaW1lOiBEYXRlLm5vdygpIH07XG5cbiAgY29uc3QgZG9jUmVmID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJibG9nc1wiKS5kb2MoZGF0YS5ibG9nU2x1Zyk7XG5cbiAgZG9jUmVmXG4gICAgLnNldChwb3N0KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZWRcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcInBcIlxuICAgICAgKS5pbm5lckhUTUwgPSBgc2x1ZzogJHtzbHVnfSwgbmFtZTogJHtuYW1lfSBjcmVhdGVkLmA7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJHb3QgYW4gZXJyb3I6XCIgKyBlcnJvcikpO1xufTtcblxuY29uc3QgV3JpdGUgPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+SW5zcGlyZSBTb21lb25lITwvaDE+XG4gICAgPGJ1dHRvblxuICAgICAgaWQ9XCJjaGVja1VzZXJCdXR0b25cIlxuICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgY2hlY2tVc2VyKCkgPyBjb25zb2xlLmxvZyhcInNpZ25lZCBpblwiKSA6IGNvbnNvbGUubG9nKFwibm90IHNpZ25lZCBpblwiKVxuICAgICAgfVxuICAgID5cbiAgICAgIENoZWNrIFVzZXJcbiAgICA8L2J1dHRvbj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgU2x1Z1wiIGlkPVwiaW5wdXRTbHVnXCIgLz5cbiAgICA8YnIgLz5cbiAgICA8YnIgLz5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgVGl0bGVcIiBpZD1cImlucHV0TmFtZVwiIC8+XG4gICAgPGJyIC8+XG4gICAgPGJyIC8+XG4gICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIERldGFpbFwiIGlkPVwiaW5wdXREZXRhaWxcIj48L3RleHRhcmVhPlxuICAgIDxiciAvPlxuICAgIDxiciAvPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdFwiXG4gICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICB0cmFuc2ZlckRhdGEoe1xuICAgICAgICAgIGJsb2dTbHVnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0U2x1Z1wiKS52YWx1ZSxcbiAgICAgICAgICBibG9nTmFtZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dE5hbWVcIikudmFsdWUsXG4gICAgICAgICAgYmxvZ0RldGFpbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dERldGFpbFwiKS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgID5cbiAgICAgIFN1Ym1pdFxuICAgIDwvYnV0dG9uPlxuICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PjwvcD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgICAgIGxlZnQ6IDMwJTtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMXZoO1xuICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgIH1cbiAgICAgIGlucHV0LFxuICAgICAgYnV0dG9uLFxuICAgICAgdGV4dGFyZWEsXG4gICAgICBwIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgIHRvcDogMzAwcHg7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgd2lkdGg6IDF2aDtcbiAgICAgIH1cbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgaDIge1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA0JTtcblxuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCxcbiAgICAgICAgYnV0dG9uLFxuICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogMTMwcHg7XG4gICAgICAgICAgbGVmdDogODBweDtcbiAgICAgICAgfVxuICAgICAgICAjY2hlY2tVc2VyQnV0dG9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAxMzBweDtcbiAgICAgICAgICBsZWZ0OiA4MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbi8vd2l0aCBjaGVja1VzZXIoKVxuLy8gY29uc3QgV3JpdGUgPSAoKSA9PiB7XG4vLyAgIGlmIChjaGVja1VzZXIoKSkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8TGF5b3V0PlxuLy8gICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5JbnNwaXJlIFNvbWVvbmUhPC9oMT5cbi8vICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4vLyAgICAgICAgICAgICBjaGVja1VzZXIoKVxuLy8gICAgICAgICAgICAgICA/IGNvbnNvbGUubG9nKFwic2lnbmVkIGluXCIpXG4vLyAgICAgICAgICAgICAgIDogY29uc29sZS5sb2coXCJub3Qgc2lnbmVkIGluXCIpXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgQ2hlY2sgVXNlclxuLy8gICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFNsdWdcIiBpZD1cImlucHV0U2x1Z1wiIC8+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFRpdGxlXCIgaWQ9XCJpbnB1dE5hbWVcIiAvPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDx0ZXh0YXJlYVxuLy8gICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJsb2cgRGV0YWlsXCJcbi8vICAgICAgICAgICBpZD1cImlucHV0RGV0YWlsXCJcbi8vICAgICAgICAgPjwvdGV4dGFyZWE+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdFwiXG4vLyAgICAgICAgICAgb25DbGljaz17KCkgPT5cbi8vICAgICAgICAgICAgIHRyYW5zZmVyRGF0YSh7XG4vLyAgICAgICAgICAgICAgIGJsb2dTbHVnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0U2x1Z1wiKS52YWx1ZSxcbi8vICAgICAgICAgICAgICAgYmxvZ05hbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXROYW1lXCIpLnZhbHVlLFxuLy8gICAgICAgICAgICAgICBibG9nRGV0YWlsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0RGV0YWlsXCIpLnZhbHVlXG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgIFN1Ym1pdFxuLy8gICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+PC9wPlxuLy8gICAgICAgICA8c3R5bGUganN4PntgXG4vLyAgICAgICAgICAgaDIge1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgICAgICAgICAgd2lkdGg6IDcwMHB4O1xuLy8gICAgICAgICAgICAgbGVmdDogMzAlO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBoMSB7XG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICB3aWR0aDogMXZoO1xuLy8gICAgICAgICAgICAgdG9wOiAyMDBweDtcbi8vICAgICAgICAgICAgIG1hcmdpbjogMDtcbi8vICAgICAgICAgICAgIGxlZnQ6IDQwJTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgaW5wdXQsXG4vLyAgICAgICAgICAgYnV0dG9uLFxuLy8gICAgICAgICAgIHRleHRhcmVhLFxuLy8gICAgICAgICAgIHAge1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgbGVmdDogNDAlO1xuLy8gICAgICAgICAgICAgdG9wOiAzMDBweDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgcCB7XG4vLyAgICAgICAgICAgICB3aWR0aDogMXZoO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICB0ZXh0YXJlYSB7XG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4vLyAgICAgICAgICAgICBoMiB7XG4vLyAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4vLyAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNCU7XG5cbi8vICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgaDEge1xuLy8gICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGlucHV0LFxuLy8gICAgICAgICAgICAgYnV0dG9uLFxuLy8gICAgICAgICAgICAgdGV4dGFyZWEge1xuLy8gICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICAgIHRvcDogMTMwcHg7XG4vLyAgICAgICAgICAgICAgIGxlZnQ6IDgwcHg7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICBgfTwvc3R5bGU+XG4vLyAgICAgICA8L0xheW91dD5cbi8vICAgICApO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8TGF5b3V0PlxuLy8gICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCJ9fT5Ob3QgYWxsb3dlZCE8L3A+XG4vLyAgICAgICA8L0xheW91dD5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBXcml0ZTtcbiJdfQ== */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/write.js */"));
}; //with checkUser()
// const Write = () => {
//   if (checkUser()) {
//     return (
//       <Layout>
//         <h1 style={{ color: "white" }}>Inspire Someone!</h1>
//         <button
//           onClick={() =>
//             checkUser()
//               ? console.log("signed in")
//               : console.log("not signed in")
//           }
//         >
//           Check User
//         </button>
//         <input type="text" placeholder="Blog Slug" id="inputSlug" />
//         <br />
//         <br />
//         <input type="text" placeholder="Blog Title" id="inputName" />
//         <br />
//         <br />
//         <textarea
//           type="text"
//           placeholder="Blog Detail"
//           id="inputDetail"
//         ></textarea>
//         <br />
//         <br />
//         <button
//           className="submit"
//           onClick={() =>
//             transferData({
//               blogSlug: document.getElementById("inputSlug").value,
//               blogName: document.getElementById("inputName").value,
//               blogDetail: document.getElementById("inputDetail").value
//             })
//           }
//         >
//           Submit
//         </button>
//         <p style={{ color: "red" }}></p>
//         <style jsx>{`
//           h2 {
//             position: relative;
//             color: white;
//             width: 700px;
//             left: 30%;
//           }
//           h1 {
//             position: relative;
//             width: 1vh;
//             top: 200px;
//             margin: 0;
//             left: 40%;
//           }
//           input,
//           button,
//           textarea,
//           p {
//             position: relative;
//             left: 40%;
//             top: 300px;
//           }
//           p {
//             width: 1vh;
//           }
//           textarea {
//             height: 150px;
//           }
//           @media only screen and (max-width: 600px) {
//             h2 {
//               position: static;
//               padding-left: 4%;
//               width: 100vw;
//             }
//             h1 {
//               position: relative;
//               left: 10%;
//             }
//             input,
//             button,
//             textarea {
//               position: relative;
//               top: 130px;
//               left: 80px;
//             }
//           }
//         `}</style>
//       </Layout>
//     );
//   } else {
//     return (
//       <Layout>
//         <p style={{color: "white"}}>Not allowed!</p>
//       </Layout>
//     );
//   }
// };


/* harmony default export */ __webpack_exports__["default"] = (Write);

/***/ })

})
//# sourceMappingURL=write.js.84226399e86c275e243b.hot-update.js.map