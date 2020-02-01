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
    className: "jsx-3640854508",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Inspire Someone!"), __jsx("input", {
    type: "text",
    placeholder: "Blog Slug",
    id: "inputSlug",
    className: "jsx-3640854508",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-3640854508",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-3640854508",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    placeholder: "Blog Title",
    id: "inputName",
    className: "jsx-3640854508",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-3640854508",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-3640854508",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("textarea", {
    type: "text",
    placeholder: "Blog Detail",
    id: "inputDetail",
    className: "jsx-3640854508",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-3640854508",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-3640854508",
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
    className: "jsx-3640854508" + " " + "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Submit"), __jsx("div", {
    id: "status-container",
    className: "jsx-3640854508",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    id: "status",
    className: "jsx-3640854508",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3640854508",
    __self: this
  }, "#status-container.jsx-3640854508{color:red;}h2.jsx-3640854508{position:relative;color:white;width:700px;left:30%;}h1.jsx-3640854508{position:relative;width:1vh;top:200px;margin:0;left:40%;}input.jsx-3640854508,button.jsx-3640854508,textarea.jsx-3640854508,p.jsx-3640854508{position:relative;left:40%;top:300px;}textarea.jsx-3640854508{height:150px;}#checkUserButton.jsx-3640854508{position:relative;top:586px;left:50%;}@media only screen and (max-width:600px){h2.jsx-3640854508{position:static;padding-left:4%;width:100vw;}h1.jsx-3640854508{position:relative;left:10%;}input.jsx-3640854508,button.jsx-3640854508,textarea.jsx-3640854508{position:relative;top:130px;left:80px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL3dyaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFZ0IsQUFHbUIsQUFHUSxBQU1BLEFBVUEsQUFLTCxBQUdLLEFBTUEsQUFNRSxBQU1BLFVBNUN0QixHQXdCQSxHQVNvQixFQTlCTixBQU1GLEFBVUQsQUFRQyxBQVlDLEFBTUMsU0F6QkYsQUFvQlYsQ0E5QlUsQUFrQkQsQUFrQkcsRUExQ0EsRUErQkUsS0FkaEIsQUFRQSxDQWxCVyxBQW9DVCxJQTFDUyxFQStCVCxHQXhCUyxJQU5YLEtBT0EiLCJmaWxlIjoiL2hvbWUvZXBvbGF0L0Rlc2t0b3AvbmV4dEpzL3dlYnNpdGUvcGFnZXMvd3JpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkRGF0YSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5pbXBvcnQgeyBkYkluc3RhbmNlLCBhdXRoSW5zdGFuY2UsIGNoZWNrVXNlciB9IGZyb20gXCIuLi9zcmMvZGJDb25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHRyYW5zZmVyRGF0YSA9IGRhdGEgPT4ge1xuICBjb25zdCBmaXJlc3RvcmUgPSBkYkluc3RhbmNlKCk7XG5cbiAgbGV0IHNsdWcgPSBkYXRhLmJsb2dTbHVnO1xuICBsZXQgbmFtZSA9IGRhdGEuYmxvZ05hbWU7XG4gIGxldCBkZXRhaWwgPSBkYXRhLmJsb2dEZXRhaWw7XG5cbiAgaWYgKHNsdWcgPT0gXCJcIiB8fCBuYW1lID09IFwiXCIgfHwgZGV0YWlsID09IFwiXCIpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKS5pbm5lckhUTUwgPVxuICAgICAgXCJGaWxsIHRoZSByZXF1aXJlZCBhcmVhcyBwbGVhc2UuXCI7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcG9zdCA9IHsgYmxvZ05hbWU6IG5hbWUsIGJsb2dEZXRhaWw6IGRldGFpbCwgYmxvZ1RpbWU6IERhdGUubm93KCkgfTtcblxuICBjb25zdCBkb2NSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcImJsb2dzXCIpLmRvYyhkYXRhLmJsb2dTbHVnKTtcblxuICBkb2NSZWZcbiAgICAuc2V0KHBvc3QpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJTYXZlZFwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLmlubmVySFRNTCA9XG4gICAgICAgIDxzdHJvbmc+YHNsdWc6ICR7c2x1Z30sYDwvc3Ryb25nPiArIGBuYW1lOiAke25hbWV9IGNyZWF0ZWQuYDtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCBhbiBlcnJvcjpcIiArIGVycm9yKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzXCIpLmlubmVySFRNTCA9IGAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICB9KTtcbn07XG5cbmNvbnN0IFdyaXRlID0gKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pkluc3BpcmUgU29tZW9uZSE8L2gxPlxuICAgIHsvKiA8YnV0dG9uXG4gICAgICBpZD1cImNoZWNrVXNlckJ1dHRvblwiXG4gICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICBjaGVja1VzZXIoKSA/IGNvbnNvbGUubG9nKFwic2lnbmVkIGluXCIpIDogY29uc29sZS5sb2coXCJub3Qgc2lnbmVkIGluXCIpXG4gICAgICB9XG4gICAgPlxuICAgICAgQ2hlY2sgVXNlclxuICAgIDwvYnV0dG9uPiAqL31cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgU2x1Z1wiIGlkPVwiaW5wdXRTbHVnXCIgLz5cbiAgICA8YnIgLz5cbiAgICA8YnIgLz5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgVGl0bGVcIiBpZD1cImlucHV0TmFtZVwiIC8+XG4gICAgPGJyIC8+XG4gICAgPGJyIC8+XG4gICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIERldGFpbFwiIGlkPVwiaW5wdXREZXRhaWxcIj48L3RleHRhcmVhPlxuICAgIDxiciAvPlxuICAgIDxiciAvPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdFwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIHRyYW5zZmVyRGF0YSh7XG4gICAgICAgICAgYmxvZ1NsdWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRTbHVnXCIpLnZhbHVlLFxuICAgICAgICAgIGJsb2dOYW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0TmFtZVwiKS52YWx1ZSxcbiAgICAgICAgICBibG9nRGV0YWlsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0RGV0YWlsXCIpLnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfX1cbiAgICA+XG4gICAgICBTdWJtaXRcbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IGlkPVwic3RhdHVzLWNvbnRhaW5lclwiPlxuICAgICAgPHAgaWQ9XCJzdGF0dXNcIj48L3A+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgI3N0YXR1cy1jb250YWluZXIge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xuICAgICAgICBsZWZ0OiAzMCU7XG4gICAgICB9XG4gICAgICBoMSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDF2aDtcbiAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICB9XG4gICAgICBpbnB1dCxcbiAgICAgIGJ1dHRvbixcbiAgICAgIHRleHRhcmVhLFxuICAgICAgcCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICB0b3A6IDMwMHB4O1xuICAgICAgfVxuICAgICAgdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgfVxuICAgICAgI2NoZWNrVXNlckJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiA1ODZweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQlO1xuXG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LFxuICAgICAgICBidXR0b24sXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAxMzBweDtcbiAgICAgICAgICBsZWZ0OiA4MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbi8vd2l0aCBjaGVja1VzZXIoKVxuLy8gY29uc3QgV3JpdGUgPSAoKSA9PiB7XG4vLyAgIGlmIChjaGVja1VzZXIoKSkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8TGF5b3V0PlxuLy8gICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5JbnNwaXJlIFNvbWVvbmUhPC9oMT5cbi8vICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4vLyAgICAgICAgICAgICBjaGVja1VzZXIoKVxuLy8gICAgICAgICAgICAgICA/IGNvbnNvbGUubG9nKFwic2lnbmVkIGluXCIpXG4vLyAgICAgICAgICAgICAgIDogY29uc29sZS5sb2coXCJub3Qgc2lnbmVkIGluXCIpXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgQ2hlY2sgVXNlclxuLy8gICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFNsdWdcIiBpZD1cImlucHV0U2x1Z1wiIC8+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFRpdGxlXCIgaWQ9XCJpbnB1dE5hbWVcIiAvPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDx0ZXh0YXJlYVxuLy8gICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJsb2cgRGV0YWlsXCJcbi8vICAgICAgICAgICBpZD1cImlucHV0RGV0YWlsXCJcbi8vICAgICAgICAgPjwvdGV4dGFyZWE+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdFwiXG4vLyAgICAgICAgICAgb25DbGljaz17KCkgPT5cbi8vICAgICAgICAgICAgIHRyYW5zZmVyRGF0YSh7XG4vLyAgICAgICAgICAgICAgIGJsb2dTbHVnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0U2x1Z1wiKS52YWx1ZSxcbi8vICAgICAgICAgICAgICAgYmxvZ05hbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXROYW1lXCIpLnZhbHVlLFxuLy8gICAgICAgICAgICAgICBibG9nRGV0YWlsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0RGV0YWlsXCIpLnZhbHVlXG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgIFN1Ym1pdFxuLy8gICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+PC9wPlxuLy8gICAgICAgICA8c3R5bGUganN4PntgXG4vLyAgICAgICAgICAgaDIge1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgICAgICAgICAgd2lkdGg6IDcwMHB4O1xuLy8gICAgICAgICAgICAgbGVmdDogMzAlO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBoMSB7XG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICB3aWR0aDogMXZoO1xuLy8gICAgICAgICAgICAgdG9wOiAyMDBweDtcbi8vICAgICAgICAgICAgIG1hcmdpbjogMDtcbi8vICAgICAgICAgICAgIGxlZnQ6IDQwJTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgaW5wdXQsXG4vLyAgICAgICAgICAgYnV0dG9uLFxuLy8gICAgICAgICAgIHRleHRhcmVhLFxuLy8gICAgICAgICAgIHAge1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgbGVmdDogNDAlO1xuLy8gICAgICAgICAgICAgdG9wOiAzMDBweDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgcCB7XG4vLyAgICAgICAgICAgICB3aWR0aDogMXZoO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICB0ZXh0YXJlYSB7XG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4vLyAgICAgICAgICAgICBoMiB7XG4vLyAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4vLyAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNCU7XG5cbi8vICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgaDEge1xuLy8gICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGlucHV0LFxuLy8gICAgICAgICAgICAgYnV0dG9uLFxuLy8gICAgICAgICAgICAgdGV4dGFyZWEge1xuLy8gICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICAgIHRvcDogMTMwcHg7XG4vLyAgICAgICAgICAgICAgIGxlZnQ6IDgwcHg7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICBgfTwvc3R5bGU+XG4vLyAgICAgICA8L0xheW91dD5cbi8vICAgICApO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8TGF5b3V0PlxuLy8gICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCJ9fT5Ob3QgYWxsb3dlZCE8L3A+XG4vLyAgICAgICA8L0xheW91dD5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBXcml0ZTtcbiJdfQ== */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/write.js */"));
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
//# sourceMappingURL=write.js.65762fa52e0f1ccbddbe.hot-update.js.map