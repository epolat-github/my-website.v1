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
      lineNumber: 38
    },
    __self: this
  }, __jsx("h1", {
    style: {
      color: "white"
    },
    className: "jsx-1153835699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Inspire Someone!"), __jsx("input", {
    type: "text",
    placeholder: "Blog Slug",
    id: "inputSlug",
    className: "jsx-1153835699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1153835699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1153835699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    placeholder: "Blog Title",
    id: "inputName",
    className: "jsx-1153835699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1153835699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1153835699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("textarea", {
    type: "text",
    placeholder: "Blog Detail",
    id: "inputDetail",
    className: "jsx-1153835699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1153835699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1153835699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
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
    className: "jsx-1153835699" + " " + "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Submit"), __jsx("p", {
    id: "status",
    className: "jsx-1153835699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1153835699",
    __self: this
  }, "#status.jsx-1153835699{color:red;}h2.jsx-1153835699{position:relative;color:white;width:700px;left:30%;}h1.jsx-1153835699{position:relative;width:1vh;top:200px;margin:0;left:40%;}input.jsx-1153835699,button.jsx-1153835699,textarea.jsx-1153835699,p.jsx-1153835699{position:relative;left:40%;top:300px;}p.jsx-1153835699{width:1vh;}textarea.jsx-1153835699{height:150px;}#checkUserButton.jsx-1153835699{position:relative;top:586px;left:50%;}@media only screen and (max-width:600px){h2.jsx-1153835699{position:static;padding-left:4%;width:100vw;}h1.jsx-1153835699{position:relative;left:10%;}input.jsx-1153835699,button.jsx-1153835699,textarea.jsx-1153835699{position:relative;top:130px;left:80px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL3dyaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFZ0IsQUFHbUIsQUFHUSxBQU1BLEFBVUEsQUFLUixBQUdHLEFBR0ssQUFNQSxBQU1FLEFBTUEsVUEvQ3RCLEFBd0JBLEdBR0EsR0FTb0IsRUFqQ04sQUFNRixBQVVELEFBV0MsQUFZQyxBQU1DLFNBNUJGLEFBdUJWLENBakNVLEFBcUJELEFBa0JHLEVBN0NBLEVBa0NFLEtBakJoQixBQVdBLENBckJXLEFBdUNULElBN0NTLEVBa0NULEdBM0JTLElBTlgsS0FPQSIsImZpbGUiOiIvaG9tZS9lcG9sYXQvRGVza3RvcC9uZXh0SnMvd2Vic2l0ZS9wYWdlcy93cml0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZGREYXRhIGZyb20gXCIuLi9zcmMvZGJDb25cIjtcbmltcG9ydCB7IGRiSW5zdGFuY2UsIGF1dGhJbnN0YW5jZSwgY2hlY2tVc2VyIH0gZnJvbSBcIi4uL3NyYy9kYkNvblwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdHJhbnNmZXJEYXRhID0gZGF0YSA9PiB7XG4gIGNvbnN0IGZpcmVzdG9yZSA9IGRiSW5zdGFuY2UoKTtcblxuICBsZXQgc2x1ZyA9IGRhdGEuYmxvZ1NsdWc7XG4gIGxldCBuYW1lID0gZGF0YS5ibG9nTmFtZTtcbiAgbGV0IGRldGFpbCA9IGRhdGEuYmxvZ0RldGFpbDtcblxuICBpZiAoc2x1ZyA9PSBcIlwiIHx8IG5hbWUgPT0gXCJcIiB8fCBkZXRhaWwgPT0gXCJcIikge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzXCIpLmlubmVySFRNTCA9XG4gICAgICBcIkZpbGwgdGhlIHJlcXVpcmVkIGFyZWFzIHBsZWFzZS5cIjtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBwb3N0ID0geyBibG9nTmFtZTogbmFtZSwgYmxvZ0RldGFpbDogZGV0YWlsLCBibG9nVGltZTogRGF0ZS5ub3coKSB9O1xuXG4gIGNvbnN0IGRvY1JlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwiYmxvZ3NcIikuZG9jKGRhdGEuYmxvZ1NsdWcpO1xuXG4gIGRvY1JlZlxuICAgIC5zZXQocG9zdClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNhdmVkXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInBcIikuaW5uZXJIVE1MID1cbiAgICAgICAgPHN0cm9uZz5gc2x1ZzogJHtzbHVnfSxgPC9zdHJvbmc+ICsgYG5hbWU6ICR7bmFtZX0gY3JlYXRlZC5gO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiR290IGFuIGVycm9yOlwiICsgZXJyb3IpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIikuaW5uZXJIVE1MID1cbiAgICAgICAgYCR7ZXJyb3IubWVzc2FnZX1gO1xuICAgIH0pO1xufTtcblxuY29uc3QgV3JpdGUgPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+SW5zcGlyZSBTb21lb25lITwvaDE+XG4gICAgey8qIDxidXR0b25cbiAgICAgIGlkPVwiY2hlY2tVc2VyQnV0dG9uXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgIGNoZWNrVXNlcigpID8gY29uc29sZS5sb2coXCJzaWduZWQgaW5cIikgOiBjb25zb2xlLmxvZyhcIm5vdCBzaWduZWQgaW5cIilcbiAgICAgIH1cbiAgICA+XG4gICAgICBDaGVjayBVc2VyXG4gICAgPC9idXR0b24+ICovfVxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmxvZyBTbHVnXCIgaWQ9XCJpbnB1dFNsdWdcIiAvPlxuICAgIDxiciAvPlxuICAgIDxiciAvPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmxvZyBUaXRsZVwiIGlkPVwiaW5wdXROYW1lXCIgLz5cbiAgICA8YnIgLz5cbiAgICA8YnIgLz5cbiAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgRGV0YWlsXCIgaWQ9XCJpbnB1dERldGFpbFwiPjwvdGV4dGFyZWE+XG4gICAgPGJyIC8+XG4gICAgPGJyIC8+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPVwic3VibWl0XCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgdHJhbnNmZXJEYXRhKHtcbiAgICAgICAgICBibG9nU2x1ZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFNsdWdcIikudmFsdWUsXG4gICAgICAgICAgYmxvZ05hbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXROYW1lXCIpLnZhbHVlLFxuICAgICAgICAgIGJsb2dEZXRhaWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXREZXRhaWxcIikudmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIFN1Ym1pdFxuICAgIDwvYnV0dG9uPlxuICAgIDxwIGlkPVwic3RhdHVzXCI+PC9wPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICNzdGF0dXMge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xuICAgICAgICBsZWZ0OiAzMCU7XG4gICAgICB9XG4gICAgICBoMSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDF2aDtcbiAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICB9XG4gICAgICBpbnB1dCxcbiAgICAgIGJ1dHRvbixcbiAgICAgIHRleHRhcmVhLFxuICAgICAgcCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICB0b3A6IDMwMHB4O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIHdpZHRoOiAxdmg7XG4gICAgICB9XG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICB9XG4gICAgICAjY2hlY2tVc2VyQnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDU4NnB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNCU7XG5cbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQsXG4gICAgICAgIGJ1dHRvbixcbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDEzMHB4O1xuICAgICAgICAgIGxlZnQ6IDgwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuLy93aXRoIGNoZWNrVXNlcigpXG4vLyBjb25zdCBXcml0ZSA9ICgpID0+IHtcbi8vICAgaWYgKGNoZWNrVXNlcigpKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pkluc3BpcmUgU29tZW9uZSE8L2gxPlxuLy8gICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgb25DbGljaz17KCkgPT5cbi8vICAgICAgICAgICAgIGNoZWNrVXNlcigpXG4vLyAgICAgICAgICAgICAgID8gY29uc29sZS5sb2coXCJzaWduZWQgaW5cIilcbi8vICAgICAgICAgICAgICAgOiBjb25zb2xlLmxvZyhcIm5vdCBzaWduZWQgaW5cIilcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgID5cbi8vICAgICAgICAgICBDaGVjayBVc2VyXG4vLyAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgU2x1Z1wiIGlkPVwiaW5wdXRTbHVnXCIgLz5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgVGl0bGVcIiBpZD1cImlucHV0TmFtZVwiIC8+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPHRleHRhcmVhXG4vLyAgICAgICAgICAgdHlwZT1cInRleHRcIlxuLy8gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmxvZyBEZXRhaWxcIlxuLy8gICAgICAgICAgIGlkPVwiaW5wdXREZXRhaWxcIlxuLy8gICAgICAgICA+PC90ZXh0YXJlYT5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0XCJcbi8vICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuLy8gICAgICAgICAgICAgdHJhbnNmZXJEYXRhKHtcbi8vICAgICAgICAgICAgICAgYmxvZ1NsdWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRTbHVnXCIpLnZhbHVlLFxuLy8gICAgICAgICAgICAgICBibG9nTmFtZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dE5hbWVcIikudmFsdWUsXG4vLyAgICAgICAgICAgICAgIGJsb2dEZXRhaWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXREZXRhaWxcIikudmFsdWVcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgU3VibWl0XG4vLyAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT48L3A+XG4vLyAgICAgICAgIDxzdHlsZSBqc3g+e2Bcbi8vICAgICAgICAgICBoMiB7XG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4vLyAgICAgICAgICAgICBsZWZ0OiAzMCU7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIGgxIHtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgIHdpZHRoOiAxdmg7XG4vLyAgICAgICAgICAgICB0b3A6IDIwMHB4O1xuLy8gICAgICAgICAgICAgbWFyZ2luOiAwO1xuLy8gICAgICAgICAgICAgbGVmdDogNDAlO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBpbnB1dCxcbi8vICAgICAgICAgICBidXR0b24sXG4vLyAgICAgICAgICAgdGV4dGFyZWEsXG4vLyAgICAgICAgICAgcCB7XG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICBsZWZ0OiA0MCU7XG4vLyAgICAgICAgICAgICB0b3A6IDMwMHB4O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBwIHtcbi8vICAgICAgICAgICAgIHdpZHRoOiAxdmg7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIHRleHRhcmVhIHtcbi8vICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbi8vICAgICAgICAgICAgIGgyIHtcbi8vICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbi8vICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0JTtcblxuLy8gICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBoMSB7XG4vLyAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgICAgbGVmdDogMTAlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgaW5wdXQsXG4vLyAgICAgICAgICAgICBidXR0b24sXG4vLyAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4vLyAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgICAgdG9wOiAxMzBweDtcbi8vICAgICAgICAgICAgICAgbGVmdDogODBweDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIGB9PC9zdHlsZT5cbi8vICAgICAgIDwvTGF5b3V0PlxuLy8gICAgICk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIn19Pk5vdCBhbGxvd2VkITwvcD5cbi8vICAgICAgIDwvTGF5b3V0PlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IFdyaXRlO1xuIl19 */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/write.js */"));
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
//# sourceMappingURL=write.js.8967f27edd5be1374b33.hot-update.js.map