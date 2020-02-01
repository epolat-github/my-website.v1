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

  if (slug == "" || name == "" || detail == "") {
    document.getElementById("status").innerHTML = "Fill the required areas please.";
    return;
  }

  var post = {
    blogName: name,
    blogDetail: detail,
    blogTime: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
  };
  var docRef = firestore.collection("blogs").doc(data.blogSlug);
  docRef.set(post).then(function () {
    console.log("Saved");
    document.querySelector("p").innerHTML = __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "`slug: $", slug, ",`") + "name: ".concat(name, " created.");
  })["catch"](function (error) {
    console.log("Got an error:" + error);
    document.getElementById("status").innerHTML = "".concat(error.message);
  });
};

var Write = function Write() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("h1", {
    style: {
      color: "white"
    },
    className: "jsx-2367935395",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Inspire Someone!"), __jsx("input", {
    type: "text",
    placeholder: "Blog Slug",
    id: "inputSlug",
    className: "jsx-2367935395",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2367935395",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2367935395",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    placeholder: "Blog Title",
    id: "inputName",
    className: "jsx-2367935395",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2367935395",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2367935395",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("textarea", {
    type: "text",
    placeholder: "Blog Detail",
    id: "inputDetail",
    className: "jsx-2367935395",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2367935395",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2367935395",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick() {
      transferData({
        blogSlug: document.getElementById("inputSlug").value,
        blogName: document.getElementById("inputName").value,
        blogDetail: document.getElementById("inputDetail").value
      });
    },
    className: "jsx-2367935395" + " " + "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Submit"), __jsx("div", {
    id: "status-container",
    className: "jsx-2367935395",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    id: "status",
    className: "jsx-2367935395",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2367935395",
    __self: this
  }, "#status-container.jsx-2367935395{color:red;width:30px;}h2.jsx-2367935395{position:relative;color:white;width:700px;left:30%;}h1.jsx-2367935395{position:relative;width:1vh;top:200px;margin:0;left:40%;}input.jsx-2367935395,button.jsx-2367935395,textarea.jsx-2367935395,p.jsx-2367935395{position:relative;left:40%;top:300px;}p.jsx-2367935395{width:1vh;}textarea.jsx-2367935395{height:150px;}#checkUserButton.jsx-2367935395{position:relative;top:586px;left:50%;}@media only screen and (max-width:600px){h2.jsx-2367935395{position:static;padding-left:4%;width:100vw;}h1.jsx-2367935395{position:relative;left:10%;}input.jsx-2367935395,button.jsx-2367935395,textarea.jsx-2367935395{position:relative;top:130px;left:80px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL3dyaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFZ0IsQUFHbUIsQUFJUSxBQU1BLEFBVUEsQUFLUixBQUdHLEFBR0ssQUFNQSxBQU1FLEFBTUEsVUFoRFQsQUF5QmIsR0FHQSxHQVNvQixFQWpDTixBQU1GLEFBVUQsQUFXQyxBQVlDLEFBTUMsR0FoRGQsTUFvQlksQUF1QlYsQ0FqQ1UsQUFxQkQsQUFrQkcsRUE3Q0EsRUFrQ0UsS0FqQmhCLEFBV0EsQ0FyQlcsQUF1Q1QsSUE3Q1MsRUFrQ1QsR0EzQlMsSUFOWCxLQU9BIiwiZmlsZSI6Ii9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL3dyaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkZERhdGEgZnJvbSBcIi4uL3NyYy9kYkNvblwiO1xuaW1wb3J0IHsgZGJJbnN0YW5jZSwgYXV0aEluc3RhbmNlLCBjaGVja1VzZXIgfSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB0cmFuc2ZlckRhdGEgPSBkYXRhID0+IHtcbiAgY29uc3QgZmlyZXN0b3JlID0gZGJJbnN0YW5jZSgpO1xuXG4gIGxldCBzbHVnID0gZGF0YS5ibG9nU2x1ZztcbiAgbGV0IG5hbWUgPSBkYXRhLmJsb2dOYW1lO1xuICBsZXQgZGV0YWlsID0gZGF0YS5ibG9nRGV0YWlsO1xuXG4gIGlmIChzbHVnID09IFwiXCIgfHwgbmFtZSA9PSBcIlwiIHx8IGRldGFpbCA9PSBcIlwiKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIikuaW5uZXJIVE1MID1cbiAgICAgIFwiRmlsbCB0aGUgcmVxdWlyZWQgYXJlYXMgcGxlYXNlLlwiO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBvc3QgPSB7IGJsb2dOYW1lOiBuYW1lLCBibG9nRGV0YWlsOiBkZXRhaWwsIGJsb2dUaW1lOiBEYXRlLm5vdygpIH07XG5cbiAgY29uc3QgZG9jUmVmID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJibG9nc1wiKS5kb2MoZGF0YS5ibG9nU2x1Zyk7XG5cbiAgZG9jUmVmXG4gICAgLnNldChwb3N0KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZWRcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwicFwiKS5pbm5lckhUTUwgPVxuICAgICAgICA8c3Ryb25nPmBzbHVnOiAke3NsdWd9LGA8L3N0cm9uZz4gKyBgbmFtZTogJHtuYW1lfSBjcmVhdGVkLmA7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJHb3QgYW4gZXJyb3I6XCIgKyBlcnJvcik7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKS5pbm5lckhUTUwgPSBgJHtlcnJvci5tZXNzYWdlfWA7XG4gICAgfSk7XG59O1xuXG5jb25zdCBXcml0ZSA9ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5JbnNwaXJlIFNvbWVvbmUhPC9oMT5cbiAgICB7LyogPGJ1dHRvblxuICAgICAgaWQ9XCJjaGVja1VzZXJCdXR0b25cIlxuICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgY2hlY2tVc2VyKCkgPyBjb25zb2xlLmxvZyhcInNpZ25lZCBpblwiKSA6IGNvbnNvbGUubG9nKFwibm90IHNpZ25lZCBpblwiKVxuICAgICAgfVxuICAgID5cbiAgICAgIENoZWNrIFVzZXJcbiAgICA8L2J1dHRvbj4gKi99XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFNsdWdcIiBpZD1cImlucHV0U2x1Z1wiIC8+XG4gICAgPGJyIC8+XG4gICAgPGJyIC8+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFRpdGxlXCIgaWQ9XCJpbnB1dE5hbWVcIiAvPlxuICAgIDxiciAvPlxuICAgIDxiciAvPlxuICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmxvZyBEZXRhaWxcIiBpZD1cImlucHV0RGV0YWlsXCI+PC90ZXh0YXJlYT5cbiAgICA8YnIgLz5cbiAgICA8YnIgLz5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJzdWJtaXRcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICB0cmFuc2ZlckRhdGEoe1xuICAgICAgICAgIGJsb2dTbHVnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0U2x1Z1wiKS52YWx1ZSxcbiAgICAgICAgICBibG9nTmFtZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dE5hbWVcIikudmFsdWUsXG4gICAgICAgICAgYmxvZ0RldGFpbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dERldGFpbFwiKS52YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgU3VibWl0XG4gICAgPC9idXR0b24+XG4gICAgPGRpdiBpZD1cInN0YXR1cy1jb250YWluZXJcIj5cbiAgICAgIDxwIGlkPVwic3RhdHVzXCI+PC9wPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICNzdGF0dXMtY29udGFpbmVyIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgICAgIGxlZnQ6IDMwJTtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMXZoO1xuICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgIH1cbiAgICAgIGlucHV0LFxuICAgICAgYnV0dG9uLFxuICAgICAgdGV4dGFyZWEsXG4gICAgICBwIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgIHRvcDogMzAwcHg7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgd2lkdGg6IDF2aDtcbiAgICAgIH1cbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cbiAgICAgICNjaGVja1VzZXJCdXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogNTg2cHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgaDIge1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA0JTtcblxuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCxcbiAgICAgICAgYnV0dG9uLFxuICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogMTMwcHg7XG4gICAgICAgICAgbGVmdDogODBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pO1xuXG4vL3dpdGggY2hlY2tVc2VyKClcbi8vIGNvbnN0IFdyaXRlID0gKCkgPT4ge1xuLy8gICBpZiAoY2hlY2tVc2VyKCkpIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPExheW91dD5cbi8vICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+SW5zcGlyZSBTb21lb25lITwvaDE+XG4vLyAgICAgICAgIDxidXR0b25cbi8vICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuLy8gICAgICAgICAgICAgY2hlY2tVc2VyKClcbi8vICAgICAgICAgICAgICAgPyBjb25zb2xlLmxvZyhcInNpZ25lZCBpblwiKVxuLy8gICAgICAgICAgICAgICA6IGNvbnNvbGUubG9nKFwibm90IHNpZ25lZCBpblwiKVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgIENoZWNrIFVzZXJcbi8vICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmxvZyBTbHVnXCIgaWQ9XCJpbnB1dFNsdWdcIiAvPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmxvZyBUaXRsZVwiIGlkPVwiaW5wdXROYW1lXCIgLz5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8dGV4dGFyZWFcbi8vICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4vLyAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCbG9nIERldGFpbFwiXG4vLyAgICAgICAgICAgaWQ9XCJpbnB1dERldGFpbFwiXG4vLyAgICAgICAgID48L3RleHRhcmVhPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDxidXR0b25cbi8vICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXRcIlxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4vLyAgICAgICAgICAgICB0cmFuc2ZlckRhdGEoe1xuLy8gICAgICAgICAgICAgICBibG9nU2x1ZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFNsdWdcIikudmFsdWUsXG4vLyAgICAgICAgICAgICAgIGJsb2dOYW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0TmFtZVwiKS52YWx1ZSxcbi8vICAgICAgICAgICAgICAgYmxvZ0RldGFpbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dERldGFpbFwiKS52YWx1ZVxuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgID5cbi8vICAgICAgICAgICBTdWJtaXRcbi8vICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PjwvcD5cbi8vICAgICAgICAgPHN0eWxlIGpzeD57YFxuLy8gICAgICAgICAgIGgyIHtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcbi8vICAgICAgICAgICAgIGxlZnQ6IDMwJTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgaDEge1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgd2lkdGg6IDF2aDtcbi8vICAgICAgICAgICAgIHRvcDogMjAwcHg7XG4vLyAgICAgICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICAgICAgICBsZWZ0OiA0MCU7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIGlucHV0LFxuLy8gICAgICAgICAgIGJ1dHRvbixcbi8vICAgICAgICAgICB0ZXh0YXJlYSxcbi8vICAgICAgICAgICBwIHtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgIGxlZnQ6IDQwJTtcbi8vICAgICAgICAgICAgIHRvcDogMzAwcHg7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIHAge1xuLy8gICAgICAgICAgICAgd2lkdGg6IDF2aDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgdGV4dGFyZWEge1xuLy8gICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuLy8gICAgICAgICAgICAgaDIge1xuLy8gICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuLy8gICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQlO1xuXG4vLyAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGgxIHtcbi8vICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgICBsZWZ0OiAxMCU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBpbnB1dCxcbi8vICAgICAgICAgICAgIGJ1dHRvbixcbi8vICAgICAgICAgICAgIHRleHRhcmVhIHtcbi8vICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgICB0b3A6IDEzMHB4O1xuLy8gICAgICAgICAgICAgICBsZWZ0OiA4MHB4O1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgYH08L3N0eWxlPlxuLy8gICAgICAgPC9MYXlvdXQ+XG4vLyAgICAgKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPExheW91dD5cbi8vICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwifX0+Tm90IGFsbG93ZWQhPC9wPlxuLy8gICAgICAgPC9MYXlvdXQ+XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgV3JpdGU7XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/write.js */"));
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
//# sourceMappingURL=write.js.c20bfd75ce677ad0d882.hot-update.js.map