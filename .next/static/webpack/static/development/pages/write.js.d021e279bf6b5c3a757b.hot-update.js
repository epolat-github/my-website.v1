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
    className: "jsx-1500722541",
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
    className: "jsx-1500722541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Check User"), __jsx("input", {
    type: "text",
    placeholder: "Blog Slug",
    id: "inputSlug",
    className: "jsx-1500722541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1500722541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1500722541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    placeholder: "Blog Title",
    id: "inputName",
    className: "jsx-1500722541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1500722541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1500722541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("textarea", {
    type: "text",
    placeholder: "Blog Detail",
    id: "inputDetail",
    className: "jsx-1500722541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1500722541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1500722541",
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
    className: "jsx-1500722541" + " " + "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Submit"), __jsx("p", {
    style: {
      color: "red"
    },
    className: "jsx-1500722541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1500722541",
    __self: this
  }, "h2.jsx-1500722541{position:relative;color:white;width:700px;left:30%;}h1.jsx-1500722541{position:relative;width:1vh;top:200px;margin:0;left:40%;}input.jsx-1500722541,button.jsx-1500722541,textarea.jsx-1500722541,p.jsx-1500722541{position:relative;left:40%;top:300px;}p.jsx-1500722541{width:1vh;}textarea.jsx-1500722541{height:150px;}#checkUserButton.jsx-1500722541{position:relative;top:130px;left:80px;}@media only screen and (max-width:600px){h2.jsx-1500722541{position:static;padding-left:4%;width:100vw;}h1.jsx-1500722541{position:relative;left:10%;}input.jsx-1500722541,button.jsx-1500722541,textarea.jsx-1500722541{position:relative;top:130px;left:80px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL3dyaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREZ0IsQUFHMkIsQUFNQSxBQVVBLEFBS1IsQUFHRyxBQUdLLEFBTUEsQUFNRSxBQU1BLFVBdkJ0QixHQUdBLEdBU29CLEVBakNOLEFBTUYsQUFVRCxBQVdDLEFBWUMsQUFNQyxTQTVCRixBQXVCVixDQWpDVSxBQXFCQSxBQWtCRSxFQTdDQSxFQWtDRSxLQWpCaEIsQ0FWVyxBQXFCWCxBQWtCRSxJQTdDUyxFQWtDVCxHQTNCUyxJQU5YLEtBT0EiLCJmaWxlIjoiL2hvbWUvZXBvbGF0L0Rlc2t0b3AvbmV4dEpzL3dlYnNpdGUvcGFnZXMvd3JpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkRGF0YSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5pbXBvcnQgeyBkYkluc3RhbmNlLCBhdXRoSW5zdGFuY2UsIGNoZWNrVXNlciB9IGZyb20gXCIuLi9zcmMvZGJDb25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHRyYW5zZmVyRGF0YSA9IGRhdGEgPT4ge1xuICBjb25zdCBmaXJlc3RvcmUgPSBkYkluc3RhbmNlKCk7XG5cbiAgbGV0IHNsdWcgPSBkYXRhLmJsb2dTbHVnO1xuICBsZXQgbmFtZSA9IGRhdGEuYmxvZ05hbWU7XG4gIGxldCBkZXRhaWwgPSBkYXRhLmJsb2dEZXRhaWw7XG5cbiAgY29uc3QgcG9zdCA9IHsgYmxvZ05hbWU6IG5hbWUsIGJsb2dEZXRhaWw6IGRldGFpbCwgYmxvZ1RpbWU6IERhdGUubm93KCkgfTtcblxuICBjb25zdCBkb2NSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcImJsb2dzXCIpLmRvYyhkYXRhLmJsb2dTbHVnKTtcblxuICBkb2NSZWZcbiAgICAuc2V0KHBvc3QpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJTYXZlZFwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwicFwiXG4gICAgICApLmlubmVySFRNTCA9IGBzbHVnOiAke3NsdWd9LCBuYW1lOiAke25hbWV9IGNyZWF0ZWQuYDtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIkdvdCBhbiBlcnJvcjpcIiArIGVycm9yKSk7XG59O1xuXG5jb25zdCBXcml0ZSA9ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5JbnNwaXJlIFNvbWVvbmUhPC9oMT5cbiAgICA8YnV0dG9uXG4gICAgICBpZD1cImNoZWNrVXNlckJ1dHRvblwiXG4gICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICBjaGVja1VzZXIoKSA/IGNvbnNvbGUubG9nKFwic2lnbmVkIGluXCIpIDogY29uc29sZS5sb2coXCJub3Qgc2lnbmVkIGluXCIpXG4gICAgICB9XG4gICAgPlxuICAgICAgQ2hlY2sgVXNlclxuICAgIDwvYnV0dG9uPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmxvZyBTbHVnXCIgaWQ9XCJpbnB1dFNsdWdcIiAvPlxuICAgIDxiciAvPlxuICAgIDxiciAvPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmxvZyBUaXRsZVwiIGlkPVwiaW5wdXROYW1lXCIgLz5cbiAgICA8YnIgLz5cbiAgICA8YnIgLz5cbiAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgRGV0YWlsXCIgaWQ9XCJpbnB1dERldGFpbFwiPjwvdGV4dGFyZWE+XG4gICAgPGJyIC8+XG4gICAgPGJyIC8+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPVwic3VibWl0XCJcbiAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgIHRyYW5zZmVyRGF0YSh7XG4gICAgICAgICAgYmxvZ1NsdWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRTbHVnXCIpLnZhbHVlLFxuICAgICAgICAgIGJsb2dOYW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0TmFtZVwiKS52YWx1ZSxcbiAgICAgICAgICBibG9nRGV0YWlsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0RGV0YWlsXCIpLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPlxuICAgICAgU3VibWl0XG4gICAgPC9idXR0b24+XG4gICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+PC9wPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgICAgbGVmdDogMzAlO1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxdmg7XG4gICAgICAgIHRvcDogMjAwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGVmdDogNDAlO1xuICAgICAgfVxuICAgICAgaW5wdXQsXG4gICAgICBidXR0b24sXG4gICAgICB0ZXh0YXJlYSxcbiAgICAgIHAge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgICAgdG9wOiAzMDBweDtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICB3aWR0aDogMXZoO1xuICAgICAgfVxuICAgICAgdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgfVxuICAgICAgI2NoZWNrVXNlckJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAxMzBweDtcbiAgICAgICAgbGVmdDogODBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgaDIge1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA0JTtcblxuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCxcbiAgICAgICAgYnV0dG9uLFxuICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogMTMwcHg7XG4gICAgICAgICAgbGVmdDogODBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pO1xuXG4vL3dpdGggY2hlY2tVc2VyKClcbi8vIGNvbnN0IFdyaXRlID0gKCkgPT4ge1xuLy8gICBpZiAoY2hlY2tVc2VyKCkpIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPExheW91dD5cbi8vICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+SW5zcGlyZSBTb21lb25lITwvaDE+XG4vLyAgICAgICAgIDxidXR0b25cbi8vICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuLy8gICAgICAgICAgICAgY2hlY2tVc2VyKClcbi8vICAgICAgICAgICAgICAgPyBjb25zb2xlLmxvZyhcInNpZ25lZCBpblwiKVxuLy8gICAgICAgICAgICAgICA6IGNvbnNvbGUubG9nKFwibm90IHNpZ25lZCBpblwiKVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgIENoZWNrIFVzZXJcbi8vICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmxvZyBTbHVnXCIgaWQ9XCJpbnB1dFNsdWdcIiAvPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmxvZyBUaXRsZVwiIGlkPVwiaW5wdXROYW1lXCIgLz5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8dGV4dGFyZWFcbi8vICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4vLyAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCbG9nIERldGFpbFwiXG4vLyAgICAgICAgICAgaWQ9XCJpbnB1dERldGFpbFwiXG4vLyAgICAgICAgID48L3RleHRhcmVhPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDxidXR0b25cbi8vICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXRcIlxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4vLyAgICAgICAgICAgICB0cmFuc2ZlckRhdGEoe1xuLy8gICAgICAgICAgICAgICBibG9nU2x1ZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFNsdWdcIikudmFsdWUsXG4vLyAgICAgICAgICAgICAgIGJsb2dOYW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0TmFtZVwiKS52YWx1ZSxcbi8vICAgICAgICAgICAgICAgYmxvZ0RldGFpbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dERldGFpbFwiKS52YWx1ZVxuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgID5cbi8vICAgICAgICAgICBTdWJtaXRcbi8vICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PjwvcD5cbi8vICAgICAgICAgPHN0eWxlIGpzeD57YFxuLy8gICAgICAgICAgIGgyIHtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcbi8vICAgICAgICAgICAgIGxlZnQ6IDMwJTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgaDEge1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgd2lkdGg6IDF2aDtcbi8vICAgICAgICAgICAgIHRvcDogMjAwcHg7XG4vLyAgICAgICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICAgICAgICBsZWZ0OiA0MCU7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIGlucHV0LFxuLy8gICAgICAgICAgIGJ1dHRvbixcbi8vICAgICAgICAgICB0ZXh0YXJlYSxcbi8vICAgICAgICAgICBwIHtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgIGxlZnQ6IDQwJTtcbi8vICAgICAgICAgICAgIHRvcDogMzAwcHg7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIHAge1xuLy8gICAgICAgICAgICAgd2lkdGg6IDF2aDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgdGV4dGFyZWEge1xuLy8gICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuLy8gICAgICAgICAgICAgaDIge1xuLy8gICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuLy8gICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQlO1xuXG4vLyAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGgxIHtcbi8vICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgICBsZWZ0OiAxMCU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBpbnB1dCxcbi8vICAgICAgICAgICAgIGJ1dHRvbixcbi8vICAgICAgICAgICAgIHRleHRhcmVhIHtcbi8vICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgICB0b3A6IDEzMHB4O1xuLy8gICAgICAgICAgICAgICBsZWZ0OiA4MHB4O1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgYH08L3N0eWxlPlxuLy8gICAgICAgPC9MYXlvdXQ+XG4vLyAgICAgKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPExheW91dD5cbi8vICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwifX0+Tm90IGFsbG93ZWQhPC9wPlxuLy8gICAgICAgPC9MYXlvdXQ+XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgV3JpdGU7XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/write.js */"));
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
//# sourceMappingURL=write.js.d021e279bf6b5c3a757b.hot-update.js.map