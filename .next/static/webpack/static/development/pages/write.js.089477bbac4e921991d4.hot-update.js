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
    return console.log("Got an error:" + error);
  });
};

var Write = function Write() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h1", {
    style: {
      color: "white"
    },
    className: "jsx-409872353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Inspire Someone!"), __jsx("input", {
    type: "text",
    placeholder: "Blog Slug",
    id: "inputSlug",
    className: "jsx-409872353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-409872353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-409872353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    placeholder: "Blog Title",
    id: "inputName",
    className: "jsx-409872353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-409872353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-409872353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("textarea", {
    type: "text",
    placeholder: "Blog Detail",
    id: "inputDetail",
    className: "jsx-409872353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-409872353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-409872353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
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
    className: "jsx-409872353" + " " + "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Submit"), __jsx("p", {
    id: "status",
    style: {
      color: "red"
    },
    className: "jsx-409872353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "409872353",
    __self: this
  }, "h2.jsx-409872353{position:relative;color:white;width:700px;left:30%;}h1.jsx-409872353{position:relative;width:1vh;top:200px;margin:0;left:40%;}input.jsx-409872353,button.jsx-409872353,textarea.jsx-409872353,p.jsx-409872353{position:relative;left:40%;top:300px;}p.jsx-409872353{width:1vh;}textarea.jsx-409872353{height:150px;}#checkUserButton.jsx-409872353{position:relative;top:586px;left:50%;}@media only screen and (max-width:600px){h2.jsx-409872353{position:static;padding-left:4%;width:100vw;}h1.jsx-409872353{position:relative;left:10%;}input.jsx-409872353,button.jsx-409872353,textarea.jsx-409872353{position:relative;top:130px;left:80px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL3dyaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFZ0IsQUFHMkIsQUFNQSxBQVVBLEFBS1IsQUFHRyxBQUdLLEFBTUEsQUFNRSxBQU1BLFVBdkJ0QixHQUdBLEdBU29CLEVBakNOLEFBTUYsQUFVRCxBQVdDLEFBWUMsQUFNQyxTQTVCRixBQXVCVixDQWpDVSxBQXFCRCxBQWtCRyxFQTdDQSxFQWtDRSxLQWpCaEIsQUFXQSxDQXJCVyxBQXVDVCxJQTdDUyxFQWtDVCxHQTNCUyxJQU5YLEtBT0EiLCJmaWxlIjoiL2hvbWUvZXBvbGF0L0Rlc2t0b3AvbmV4dEpzL3dlYnNpdGUvcGFnZXMvd3JpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkRGF0YSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5pbXBvcnQgeyBkYkluc3RhbmNlLCBhdXRoSW5zdGFuY2UsIGNoZWNrVXNlciB9IGZyb20gXCIuLi9zcmMvZGJDb25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHRyYW5zZmVyRGF0YSA9IGRhdGEgPT4ge1xuICBjb25zdCBmaXJlc3RvcmUgPSBkYkluc3RhbmNlKCk7XG5cbiAgbGV0IHNsdWcgPSBkYXRhLmJsb2dTbHVnO1xuICBsZXQgbmFtZSA9IGRhdGEuYmxvZ05hbWU7XG4gIGxldCBkZXRhaWwgPSBkYXRhLmJsb2dEZXRhaWw7XG5cbiAgaWYgKHNsdWcgPT0gXCJcIiB8fCBuYW1lID09IFwiXCIgfHwgZGV0YWlsID09IFwiXCIpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKS5pbm5lckhUTUwgPVxuICAgICAgXCJGaWxsIHRoZSByZXF1aXJlZCBhcmVhcyBwbGVhc2UuXCI7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcG9zdCA9IHsgYmxvZ05hbWU6IG5hbWUsIGJsb2dEZXRhaWw6IGRldGFpbCwgYmxvZ1RpbWU6IERhdGUubm93KCkgfTtcblxuICBjb25zdCBkb2NSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcImJsb2dzXCIpLmRvYyhkYXRhLmJsb2dTbHVnKTtcblxuICBkb2NSZWZcbiAgICAuc2V0KHBvc3QpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJTYXZlZFwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLmlubmVySFRNTCA9XG4gICAgICAgIDxzdHJvbmc+YHNsdWc6ICR7c2x1Z30sYDwvc3Ryb25nPiArIGBuYW1lOiAke25hbWV9IGNyZWF0ZWQuYDtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIkdvdCBhbiBlcnJvcjpcIiArIGVycm9yKSk7XG59O1xuXG5jb25zdCBXcml0ZSA9ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5JbnNwaXJlIFNvbWVvbmUhPC9oMT5cbiAgICB7LyogPGJ1dHRvblxuICAgICAgaWQ9XCJjaGVja1VzZXJCdXR0b25cIlxuICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgY2hlY2tVc2VyKCkgPyBjb25zb2xlLmxvZyhcInNpZ25lZCBpblwiKSA6IGNvbnNvbGUubG9nKFwibm90IHNpZ25lZCBpblwiKVxuICAgICAgfVxuICAgID5cbiAgICAgIENoZWNrIFVzZXJcbiAgICA8L2J1dHRvbj4gKi99XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFNsdWdcIiBpZD1cImlucHV0U2x1Z1wiIC8+XG4gICAgPGJyIC8+XG4gICAgPGJyIC8+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIFRpdGxlXCIgaWQ9XCJpbnB1dE5hbWVcIiAvPlxuICAgIDxiciAvPlxuICAgIDxiciAvPlxuICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQmxvZyBEZXRhaWxcIiBpZD1cImlucHV0RGV0YWlsXCI+PC90ZXh0YXJlYT5cbiAgICA8YnIgLz5cbiAgICA8YnIgLz5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJzdWJtaXRcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICB0cmFuc2ZlckRhdGEoe1xuICAgICAgICAgIGJsb2dTbHVnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0U2x1Z1wiKS52YWx1ZSxcbiAgICAgICAgICBibG9nTmFtZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dE5hbWVcIikudmFsdWUsXG4gICAgICAgICAgYmxvZ0RldGFpbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dERldGFpbFwiKS52YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgU3VibWl0XG4gICAgPC9idXR0b24+XG4gICAgPHAgaWQ9XCJzdGF0dXNcIiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT48L3A+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xuICAgICAgICBsZWZ0OiAzMCU7XG4gICAgICB9XG4gICAgICBoMSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDF2aDtcbiAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICB9XG4gICAgICBpbnB1dCxcbiAgICAgIGJ1dHRvbixcbiAgICAgIHRleHRhcmVhLFxuICAgICAgcCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICB0b3A6IDMwMHB4O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIHdpZHRoOiAxdmg7XG4gICAgICB9XG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICB9XG4gICAgICAjY2hlY2tVc2VyQnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDU4NnB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNCU7XG5cbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQsXG4gICAgICAgIGJ1dHRvbixcbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDEzMHB4O1xuICAgICAgICAgIGxlZnQ6IDgwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuLy93aXRoIGNoZWNrVXNlcigpXG4vLyBjb25zdCBXcml0ZSA9ICgpID0+IHtcbi8vICAgaWYgKGNoZWNrVXNlcigpKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pkluc3BpcmUgU29tZW9uZSE8L2gxPlxuLy8gICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgb25DbGljaz17KCkgPT5cbi8vICAgICAgICAgICAgIGNoZWNrVXNlcigpXG4vLyAgICAgICAgICAgICAgID8gY29uc29sZS5sb2coXCJzaWduZWQgaW5cIilcbi8vICAgICAgICAgICAgICAgOiBjb25zb2xlLmxvZyhcIm5vdCBzaWduZWQgaW5cIilcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgID5cbi8vICAgICAgICAgICBDaGVjayBVc2VyXG4vLyAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgU2x1Z1wiIGlkPVwiaW5wdXRTbHVnXCIgLz5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgVGl0bGVcIiBpZD1cImlucHV0TmFtZVwiIC8+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8YnIgLz5cbi8vICAgICAgICAgPHRleHRhcmVhXG4vLyAgICAgICAgICAgdHlwZT1cInRleHRcIlxuLy8gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmxvZyBEZXRhaWxcIlxuLy8gICAgICAgICAgIGlkPVwiaW5wdXREZXRhaWxcIlxuLy8gICAgICAgICA+PC90ZXh0YXJlYT5cbi8vICAgICAgICAgPGJyIC8+XG4vLyAgICAgICAgIDxiciAvPlxuLy8gICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0XCJcbi8vICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuLy8gICAgICAgICAgICAgdHJhbnNmZXJEYXRhKHtcbi8vICAgICAgICAgICAgICAgYmxvZ1NsdWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRTbHVnXCIpLnZhbHVlLFxuLy8gICAgICAgICAgICAgICBibG9nTmFtZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dE5hbWVcIikudmFsdWUsXG4vLyAgICAgICAgICAgICAgIGJsb2dEZXRhaWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXREZXRhaWxcIikudmFsdWVcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgU3VibWl0XG4vLyAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT48L3A+XG4vLyAgICAgICAgIDxzdHlsZSBqc3g+e2Bcbi8vICAgICAgICAgICBoMiB7XG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4vLyAgICAgICAgICAgICBsZWZ0OiAzMCU7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIGgxIHtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgIHdpZHRoOiAxdmg7XG4vLyAgICAgICAgICAgICB0b3A6IDIwMHB4O1xuLy8gICAgICAgICAgICAgbWFyZ2luOiAwO1xuLy8gICAgICAgICAgICAgbGVmdDogNDAlO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBpbnB1dCxcbi8vICAgICAgICAgICBidXR0b24sXG4vLyAgICAgICAgICAgdGV4dGFyZWEsXG4vLyAgICAgICAgICAgcCB7XG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICBsZWZ0OiA0MCU7XG4vLyAgICAgICAgICAgICB0b3A6IDMwMHB4O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBwIHtcbi8vICAgICAgICAgICAgIHdpZHRoOiAxdmg7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIHRleHRhcmVhIHtcbi8vICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbi8vICAgICAgICAgICAgIGgyIHtcbi8vICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbi8vICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0JTtcblxuLy8gICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBoMSB7XG4vLyAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgICAgbGVmdDogMTAlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgaW5wdXQsXG4vLyAgICAgICAgICAgICBidXR0b24sXG4vLyAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4vLyAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgICAgdG9wOiAxMzBweDtcbi8vICAgICAgICAgICAgICAgbGVmdDogODBweDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIGB9PC9zdHlsZT5cbi8vICAgICAgIDwvTGF5b3V0PlxuLy8gICAgICk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxMYXlvdXQ+XG4vLyAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIn19Pk5vdCBhbGxvd2VkITwvcD5cbi8vICAgICAgIDwvTGF5b3V0PlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IFdyaXRlO1xuIl19 */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/write.js */"));
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
//# sourceMappingURL=write.js.089477bbac4e921991d4.hot-update.js.map