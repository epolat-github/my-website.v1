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
    return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("h1", {
      style: {
        color: "white"
      },
      className: "jsx-3835355909",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Inspire Someone!"), __jsx("button", {
      onClick: function onClick() {
        return Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_3__["checkUser"])() ? console.log("signed in") : console.log("not signed in");
      },
      className: "jsx-3835355909",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Check User"), __jsx("input", {
      type: "text",
      placeholder: "Blog Slug",
      id: "inputSlug",
      className: "jsx-3835355909",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-3835355909",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-3835355909",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx("input", {
      type: "text",
      placeholder: "Blog Title",
      id: "inputName",
      className: "jsx-3835355909",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-3835355909",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-3835355909",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), __jsx("textarea", {
      type: "text",
      placeholder: "Blog Detail",
      id: "inputDetail",
      className: "jsx-3835355909",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-3835355909",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-3835355909",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
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
      className: "jsx-3835355909" + " " + "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Submit"), __jsx("p", {
      style: {
        color: "red"
      },
      className: "jsx-3835355909",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3835355909",
      __self: this
    }, "h2.jsx-3835355909{position:relative;color:white;width:700px;left:30%;}h1.jsx-3835355909{position:relative;width:1vh;top:200px;margin:0;left:40%;}input.jsx-3835355909,button.jsx-3835355909,textarea.jsx-3835355909,p.jsx-3835355909{position:relative;left:40%;top:300px;}p.jsx-3835355909{width:1vh;}textarea.jsx-3835355909{height:150px;}@media only screen and (max-width:600px){h2.jsx-3835355909{position:static;padding-left:4%;width:100vw;}h1.jsx-3835355909{position:relative;left:10%;}input.jsx-3835355909,button.jsx-3835355909,textarea.jsx-3835355909{position:relative;top:130px;left:80px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL3dyaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fb0IsQUFHK0IsQUFNQSxBQVVBLEFBS1IsQUFHRyxBQUlLLEFBTUUsQUFNQSxVQWxCdEIsR0FHQSxHQUlvQixFQTVCTixBQU1GLEFBVUQsQUFrQkUsQUFNQyxTQXZCRixBQWtCVixDQTVCVSxBQWtDRSxFQXhDQSxFQTZCRSxLQVpoQixDQVZXLEFBa0NULElBeENTLEVBNkJULEdBdEJTLElBTlgsS0FPQSIsImZpbGUiOiIvaG9tZS9lcG9sYXQvRGVza3RvcC9uZXh0SnMvd2Vic2l0ZS9wYWdlcy93cml0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZGREYXRhIGZyb20gXCIuLi9zcmMvZGJDb25cIjtcbmltcG9ydCB7IGRiSW5zdGFuY2UsIGF1dGhJbnN0YW5jZSwgY2hlY2tVc2VyIH0gZnJvbSBcIi4uL3NyYy9kYkNvblwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdHJhbnNmZXJEYXRhID0gZGF0YSA9PiB7XG4gIGNvbnN0IGZpcmVzdG9yZSA9IGRiSW5zdGFuY2UoKTtcblxuICBsZXQgc2x1ZyA9IGRhdGEuYmxvZ1NsdWc7XG4gIGxldCBuYW1lID0gZGF0YS5ibG9nTmFtZTtcbiAgbGV0IGRldGFpbCA9IGRhdGEuYmxvZ0RldGFpbDtcblxuICBjb25zdCBwb3N0ID0geyBibG9nTmFtZTogbmFtZSwgYmxvZ0RldGFpbDogZGV0YWlsLCBibG9nVGltZTogRGF0ZS5ub3coKSB9O1xuXG4gIGNvbnN0IGRvY1JlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwiYmxvZ3NcIikuZG9jKGRhdGEuYmxvZ1NsdWcpO1xuXG4gIGRvY1JlZlxuICAgIC5zZXQocG9zdClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNhdmVkXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCJwXCJcbiAgICAgICkuaW5uZXJIVE1MID0gYHNsdWc6ICR7c2x1Z30sIG5hbWU6ICR7bmFtZX0gY3JlYXRlZC5gO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiR290IGFuIGVycm9yOlwiICsgZXJyb3IpKTtcbn07XG5cbmNvbnN0IFdyaXRlID0gKCkgPT4ge1xuICBpZiAoY2hlY2tVc2VyKCkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+SW5zcGlyZSBTb21lb25lITwvaDE+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgY2hlY2tVc2VyKClcbiAgICAgICAgICAgICAgPyBjb25zb2xlLmxvZyhcInNpZ25lZCBpblwiKVxuICAgICAgICAgICAgICA6IGNvbnNvbGUubG9nKFwibm90IHNpZ25lZCBpblwiKVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIENoZWNrIFVzZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmxvZyBTbHVnXCIgaWQ9XCJpbnB1dFNsdWdcIiAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmxvZyBUaXRsZVwiIGlkPVwiaW5wdXROYW1lXCIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJCbG9nIERldGFpbFwiXG4gICAgICAgICAgaWQ9XCJpbnB1dERldGFpbFwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICB0cmFuc2ZlckRhdGEoe1xuICAgICAgICAgICAgICBibG9nU2x1ZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFNsdWdcIikudmFsdWUsXG4gICAgICAgICAgICAgIGJsb2dOYW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0TmFtZVwiKS52YWx1ZSxcbiAgICAgICAgICAgICAgYmxvZ0RldGFpbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dERldGFpbFwiKS52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PjwvcD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDF2aDtcbiAgICAgICAgICAgIHRvcDogMjAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIGJ1dHRvbixcbiAgICAgICAgICB0ZXh0YXJlYSxcbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgICAgICAgIHRvcDogMzAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgd2lkdGg6IDF2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQlO1xuXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgIGJ1dHRvbixcbiAgICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IDEzMHB4O1xuICAgICAgICAgICAgICBsZWZ0OiA4MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwifX0+Tm90IGFsbG93ZWQhPC9wPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufTtcblxuLy93aXRoIGNoZWNrVXNlcigpXG4vLyBjb25zdCBXcml0ZSA9ICgpID0+IHtcbi8vICAgaWYgKGNoZWNrVXNlcigpKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pkluc3BpcmUgU29tZW9uZSE8L2gxPlxuLy8gICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgb25DbGljaz17KCkgPT5cbi8vICAgICAgICAgICAgIGNoZWNrVXNlcigpXG4vLyAgICAgICAgICAgICAgID8gY29uc29sZS5sb2coXCJzaWduZWQgaW5cIilcbi8vICAgICAgICAgICAgICAgOiBjb25zb2xlLmxvZyhcIm5vdCBzaWduZWQgaW5cIilcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgID5cbi8vICAgICAgICAgICBDaGVjayBVc2VyXG4vLyAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgU2x1Z1wiIGlkPVwiaW5wdXRTbHVnXCIgLz5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgVGl0bGVcIiBpZD1cImlucHV0TmFtZVwiIC8+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPHRleHRhcmVhXG4vLyAgICAgICAgICAgdHlwZT1cInRleHRcIlxuLy8gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmxvZyBEZXRhaWxcIlxuLy8gICAgICAgICAgIGlkPVwiaW5wdXREZXRhaWxcIlxuLy8gICAgICAgICA+PC90ZXh0YXJlYT5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0XCJcbi8vICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuLy8gICAgICAgICAgICAgdHJhbnNmZXJEYXRhKHtcbi8vICAgICAgICAgICAgICAgYmxvZ1NsdWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRTbHVnXCIpLnZhbHVlLFxuLy8gICAgICAgICAgICAgICBibG9nTmFtZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dE5hbWVcIikudmFsdWUsXG4vLyAgICAgICAgICAgICAgIGJsb2dEZXRhaWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXREZXRhaWxcIikudmFsdWVcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgU3VibWl0XG4vLyAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT48L3A+XG4vLyAgICAgICAgIDxzdHlsZSBqc3g+e2Bcbi8vICAgICAgICAgICBoMiB7XG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4vLyAgICAgICAgICAgICBsZWZ0OiAzMCU7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIGgxIHtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgIHdpZHRoOiAxdmg7XG4vLyAgICAgICAgICAgICB0b3A6IDIwMHB4O1xuLy8gICAgICAgICAgICAgbWFyZ2luOiAwO1xuLy8gICAgICAgICAgICAgbGVmdDogNDAlO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBpbnB1dCxcbi8vICAgICAgICAgICBidXR0b24sXG4vLyAgICAgICAgICAgdGV4dGFyZWEsXG4vLyAgICAgICAgICAgcCB7XG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICBsZWZ0OiA0MCU7XG4vLyAgICAgICAgICAgICB0b3A6IDMwMHB4O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBwIHtcbi8vICAgICAgICAgICAgIHdpZHRoOiAxdmg7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIHRleHRhcmVhIHtcbi8vICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbi8vICAgICAgICAgICAgIGgyIHtcbi8vICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbi8vICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0JTtcblxuLy8gICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBoMSB7XG4vLyAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgICAgbGVmdDogMTAlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgaW5wdXQsXG4vLyAgICAgICAgICAgICBidXR0b24sXG4vLyAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4vLyAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgICAgdG9wOiAxMzBweDtcbi8vICAgICAgICAgICAgICAgbGVmdDogODBweDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIGB9PC9zdHlsZT5cbi8vICAgICAgIDwvTGF5b3V0PlxuLy8gICAgICk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIn19Pk5vdCBhbGxvd2VkITwvcD5cbi8vICAgICAgIDwvTGF5b3V0PlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IFdyaXRlO1xuIl19 */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/write.js */"));
  } else {
    return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("p", {
      style: {
        color: "white"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Not allowed!"));
  }
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
//# sourceMappingURL=write.js.da7fc399e3b6411c6b01.hot-update.js.map