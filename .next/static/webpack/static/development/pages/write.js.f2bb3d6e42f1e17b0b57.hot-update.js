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
    className: "jsx-823863723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Inspire Someone!"), __jsx("input", {
    type: "text",
    placeholder: "Blog Slug",
    id: "inputSlug",
    className: "jsx-823863723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-823863723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-823863723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    placeholder: "Blog Title",
    id: "inputName",
    className: "jsx-823863723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-823863723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-823863723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("textarea", {
    type: "text",
    placeholder: "Blog Detail",
    id: "inputDetail",
    className: "jsx-823863723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-823863723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-823863723",
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
    className: "jsx-823863723" + " " + "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Submit"), __jsx("div", {
    id: "status-container",
    className: "jsx-823863723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    id: "status",
    className: "jsx-823863723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "823863723",
    __self: this
  }, "#status-container.jsx-823863723{color:red;}h2.jsx-823863723{position:relative;color:white;width:700px;left:30%;}h1.jsx-823863723{position:relative;width:1vh;top:200px;margin:0;left:40%;}input.jsx-823863723,button.jsx-823863723,textarea.jsx-823863723,p.jsx-823863723{position:relative;left:40%;top:300px;}textarea.jsx-823863723{height:150px;}#checkUserButton.jsx-823863723{position:relative;top:586px;left:50%;}@media only screen and (max-width:600px){h2.jsx-823863723{position:static;padding-left:4%;width:100vw;}h1.jsx-823863723{position:relative;left:10%;}input.jsx-823863723,button.jsx-823863723,textarea.jsx-823863723{position:relative;top:130px;left:80px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL3dyaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFZ0IsQUFHbUIsQUFHUSxBQU1BLEFBVUEsQUFPTCxBQUdLLEFBTUEsQUFNRSxBQU1BLFVBOUN0QixHQTBCQSxHQVNvQixFQWhDTixBQU1GLEFBVUQsQUFVQyxBQVlDLEFBTUMsU0EzQkYsQUFzQlYsQ0FoQ1UsQUFvQkQsQUFrQkcsRUE1Q0EsRUFpQ0UsS0FoQmhCLEFBVUEsQ0FwQlcsQUFzQ1QsSUE1Q1MsRUFpQ1QsR0ExQlMsSUFOWCxLQU9BIiwiZmlsZSI6Ii9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL3dyaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkZERhdGEgZnJvbSBcIi4uL3NyYy9kYkNvblwiO1xuaW1wb3J0IHsgZGJJbnN0YW5jZSwgYXV0aEluc3RhbmNlLCBjaGVja1VzZXIgfSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB0cmFuc2ZlckRhdGEgPSBkYXRhID0+IHtcbiAgY29uc3QgZmlyZXN0b3JlID0gZGJJbnN0YW5jZSgpO1xuXG4gIGxldCBzbHVnID0gZGF0YS5ibG9nU2x1ZztcbiAgbGV0IG5hbWUgPSBkYXRhLmJsb2dOYW1lO1xuICBsZXQgZGV0YWlsID0gZGF0YS5ibG9nRGV0YWlsO1xuXG4gIGlmIChzbHVnID09IFwiXCIgfHwgbmFtZSA9PSBcIlwiIHx8IGRldGFpbCA9PSBcIlwiKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIikuaW5uZXJIVE1MID1cbiAgICAgIFwiRmlsbCB0aGUgcmVxdWlyZWQgYXJlYXMgcGxlYXNlLlwiO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBvc3QgPSB7IGJsb2dOYW1lOiBuYW1lLCBibG9nRGV0YWlsOiBkZXRhaWwsIGJsb2dUaW1lOiBEYXRlLm5vdygpIH07XG5cbiAgY29uc3QgZG9jUmVmID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJibG9nc1wiKS5kb2MoZGF0YS5ibG9nU2x1Zyk7XG5cbiAgZG9jUmVmXG4gICAgLnNldChwb3N0KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZWRcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwicFwiKS5pbm5lckhUTUwgPVxuICAgICAgICA8c3Ryb25nPmBzbHVnOiAke3NsdWd9LGA8L3N0cm9uZz4gKyBgbmFtZTogJHtuYW1lfSBjcmVhdGVkLmA7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJHb3QgYW4gZXJyb3I6XCIgKyBlcnJvcik7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKS5pbm5lckhUTUwgPSBgJHtlcnJvci5tZXNzYWdlfWA7XG4gICAgfSk7XG59O1xuXG5jb25zdCBXcml0ZSA9ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5JbnNwaXJlIFNvbWVvbmUhPC9oMT5cbiAgICB7LyogPGJ1dHRvblxuICAgICAgaWQ9XCJjaGVja1VzZXJCdXR0b25cIlxuICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgY2hlY2tVc2VyKCkgPyBjb25zb2xlLmxvZyhcInNpZ25lZCBpblwiKSA6IGNvbnNvbGUubG9nKFwibm90IHNpZ25lZCBpblwiKVxuICAgICAgfVxuICAgID5cbiAgICAgIENoZWNrIFVzZXJcbiAgICA8L2J1dHRvbj4gKi99XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFNsdWdcIiBpZD1cImlucHV0U2x1Z1wiIC8+XG4gICAgPGJyIC8+XG4gICAgPGJyIC8+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFRpdGxlXCIgaWQ9XCJpbnB1dE5hbWVcIiAvPlxuICAgIDxiciAvPlxuICAgIDxiciAvPlxuICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmxvZyBEZXRhaWxcIiBpZD1cImlucHV0RGV0YWlsXCI+PC90ZXh0YXJlYT5cbiAgICA8YnIgLz5cbiAgICA8YnIgLz5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJzdWJtaXRcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICB0cmFuc2ZlckRhdGEoe1xuICAgICAgICAgIGJsb2dTbHVnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0U2x1Z1wiKS52YWx1ZSxcbiAgICAgICAgICBibG9nTmFtZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dE5hbWVcIikudmFsdWUsXG4gICAgICAgICAgYmxvZ0RldGFpbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dERldGFpbFwiKS52YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgU3VibWl0XG4gICAgPC9idXR0b24+XG4gICAgPGRpdiBpZD1cInN0YXR1cy1jb250YWluZXJcIj5cbiAgICAgIDxwIGlkPVwic3RhdHVzXCI+PC9wPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICNzdGF0dXMtY29udGFpbmVyIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgICAgbGVmdDogMzAlO1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxdmg7XG4gICAgICAgIHRvcDogMjAwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGVmdDogNDAlO1xuICAgICAgfVxuICAgICAgaW5wdXQsXG4gICAgICBidXR0b24sXG4gICAgICB0ZXh0YXJlYSxcbiAgICAgIHAge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgICAgdG9wOiAzMDBweDtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgfVxuICAgICAgdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgfVxuICAgICAgI2NoZWNrVXNlckJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiA1ODZweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQlO1xuXG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LFxuICAgICAgICBidXR0b24sXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAxMzBweDtcbiAgICAgICAgICBsZWZ0OiA4MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbi8vd2l0aCBjaGVja1VzZXIoKVxuLy8gY29uc3QgV3JpdGUgPSAoKSA9PiB7XG4vLyAgIGlmIChjaGVja1VzZXIoKSkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8TGF5b3V0PlxuLy8gICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5JbnNwaXJlIFNvbWVvbmUhPC9oMT5cbi8vICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4vLyAgICAgICAgICAgICBjaGVja1VzZXIoKVxuLy8gICAgICAgICAgICAgICA/IGNvbnNvbGUubG9nKFwic2lnbmVkIGluXCIpXG4vLyAgICAgICAgICAgICAgIDogY29uc29sZS5sb2coXCJub3Qgc2lnbmVkIGluXCIpXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgQ2hlY2sgVXNlclxuLy8gICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFNsdWdcIiBpZD1cImlucHV0U2x1Z1wiIC8+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFRpdGxlXCIgaWQ9XCJpbnB1dE5hbWVcIiAvPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDx0ZXh0YXJlYVxuLy8gICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJsb2cgRGV0YWlsXCJcbi8vICAgICAgICAgICBpZD1cImlucHV0RGV0YWlsXCJcbi8vICAgICAgICAgPjwvdGV4dGFyZWE+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdFwiXG4vLyAgICAgICAgICAgb25DbGljaz17KCkgPT5cbi8vICAgICAgICAgICAgIHRyYW5zZmVyRGF0YSh7XG4vLyAgICAgICAgICAgICAgIGJsb2dTbHVnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0U2x1Z1wiKS52YWx1ZSxcbi8vICAgICAgICAgICAgICAgYmxvZ05hbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXROYW1lXCIpLnZhbHVlLFxuLy8gICAgICAgICAgICAgICBibG9nRGV0YWlsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0RGV0YWlsXCIpLnZhbHVlXG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgIFN1Ym1pdFxuLy8gICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+PC9wPlxuLy8gICAgICAgICA8c3R5bGUganN4PntgXG4vLyAgICAgICAgICAgaDIge1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgICAgICAgICAgd2lkdGg6IDcwMHB4O1xuLy8gICAgICAgICAgICAgbGVmdDogMzAlO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBoMSB7XG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICB3aWR0aDogMXZoO1xuLy8gICAgICAgICAgICAgdG9wOiAyMDBweDtcbi8vICAgICAgICAgICAgIG1hcmdpbjogMDtcbi8vICAgICAgICAgICAgIGxlZnQ6IDQwJTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgaW5wdXQsXG4vLyAgICAgICAgICAgYnV0dG9uLFxuLy8gICAgICAgICAgIHRleHRhcmVhLFxuLy8gICAgICAgICAgIHAge1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgbGVmdDogNDAlO1xuLy8gICAgICAgICAgICAgdG9wOiAzMDBweDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgcCB7XG4vLyAgICAgICAgICAgICB3aWR0aDogMXZoO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICB0ZXh0YXJlYSB7XG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4vLyAgICAgICAgICAgICBoMiB7XG4vLyAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4vLyAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNCU7XG5cbi8vICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgaDEge1xuLy8gICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGlucHV0LFxuLy8gICAgICAgICAgICAgYnV0dG9uLFxuLy8gICAgICAgICAgICAgdGV4dGFyZWEge1xuLy8gICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICAgIHRvcDogMTMwcHg7XG4vLyAgICAgICAgICAgICAgIGxlZnQ6IDgwcHg7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICBgfTwvc3R5bGU+XG4vLyAgICAgICA8L0xheW91dD5cbi8vICAgICApO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8TGF5b3V0PlxuLy8gICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCJ9fT5Ob3QgYWxsb3dlZCE8L3A+XG4vLyAgICAgICA8L0xheW91dD5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBXcml0ZTtcbiJdfQ== */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/write.js */"));
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
//# sourceMappingURL=write.js.f2bb3d6e42f1e17b0b57.hot-update.js.map