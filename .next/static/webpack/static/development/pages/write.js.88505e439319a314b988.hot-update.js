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
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Inspire Someone!"), __jsx("form", {
    className: "jsx-1954931928" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "Blog Title",
    id: "inputName",
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1954931928" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("label", {
    "for": "inputDetail",
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Example textarea"), __jsx("textarea", {
    id: "inputDetail",
    "class": "form-control",
    rows: "3",
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))), __jsx("br", {
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("textarea", {
    type: "text",
    placeholder: "Blog Detail",
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick() {
      transferData({
        blogSlug: document.getElementById("inputName").value.replace(/\s+/g, "-").toLowerCase(),
        blogName: document.getElementById("inputName").value,
        blogDetail: document.getElementById("inputDetail").value
      });
    },
    className: "jsx-1954931928" + " " + "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Submit"), __jsx("div", {
    id: "status-container",
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    id: "status",
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1954931928",
    __self: this
  }, "#status-container.jsx-1954931928{color:red;display:inline-block;}h2.jsx-1954931928{position:relative;color:white;width:700px;left:30%;}h1.jsx-1954931928{position:relative;width:1vh;top:200px;margin:0;left:40%;}input.jsx-1954931928,button.jsx-1954931928,textarea.jsx-1954931928,p.jsx-1954931928{position:relative;left:40%;top:300px;}textarea.jsx-1954931928{height:150px;}#checkUserButton.jsx-1954931928{position:relative;top:586px;left:50%;}@media only screen and (max-width:600px){h2.jsx-1954931928{position:static;padding-left:4%;width:100vw;}h1.jsx-1954931928{position:relative;left:10%;}input.jsx-1954931928,button.jsx-1954931928,textarea.jsx-1954931928{position:relative;top:130px;left:80px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL3dyaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFZ0IsQUFHbUIsQUFJUSxBQU1BLEFBVUEsQUFLTCxBQUdLLEFBTUEsQUFNRSxBQU1BLFVBN0NDLEdBeUJ2QixHQVNvQixFQTlCTixBQU1GLEFBVUQsQUFRQyxBQVlDLEFBTUMsU0F6QkYsQUFvQlYsQ0E5QlUsQUFrQkQsQUFrQkcsRUExQ0EsQ0FKZCxDQW1DZ0IsS0FkaEIsQUFRQSxDQWxCVyxBQW9DVCxJQTFDUyxFQStCVCxHQXhCUyxJQU5YLEtBT0EiLCJmaWxlIjoiL2hvbWUvZXBvbGF0L0Rlc2t0b3AvbmV4dEpzL3dlYnNpdGUvcGFnZXMvd3JpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkRGF0YSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5pbXBvcnQgeyBkYkluc3RhbmNlLCBhdXRoSW5zdGFuY2UsIGNoZWNrVXNlciB9IGZyb20gXCIuLi9zcmMvZGJDb25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHRyYW5zZmVyRGF0YSA9IGRhdGEgPT4ge1xuICBjb25zdCBmaXJlc3RvcmUgPSBkYkluc3RhbmNlKCk7XG5cbiAgbGV0IHNsdWcgPSBkYXRhLmJsb2dTbHVnO1xuICBsZXQgbmFtZSA9IGRhdGEuYmxvZ05hbWU7XG4gIGxldCBkZXRhaWwgPSBkYXRhLmJsb2dEZXRhaWw7XG5cbiAgaWYgKHNsdWcgPT0gXCJcIiB8fCBuYW1lID09IFwiXCIgfHwgZGV0YWlsID09IFwiXCIpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKS5pbm5lckhUTUwgPVxuICAgICAgXCJGaWxsIHRoZSByZXF1aXJlZCBhcmVhcyBwbGVhc2UuXCI7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcG9zdCA9IHsgYmxvZ05hbWU6IG5hbWUsIGJsb2dEZXRhaWw6IGRldGFpbCwgYmxvZ1RpbWU6IERhdGUubm93KCkgfTtcblxuICBjb25zdCBkb2NSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcImJsb2dzXCIpLmRvYyhkYXRhLmJsb2dTbHVnKTtcblxuICBkb2NSZWZcbiAgICAuc2V0KHBvc3QpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJTYXZlZFwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLmlubmVySFRNTCA9XG4gICAgICAgIDxzdHJvbmc+YHNsdWc6ICR7c2x1Z30sYDwvc3Ryb25nPiArIGBuYW1lOiAke25hbWV9IGNyZWF0ZWQuYDtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCBhbiBlcnJvcjpcIiArIGVycm9yKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzXCIpLmlubmVySFRNTCA9IGAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICB9KTtcbn07XG5cbmNvbnN0IFdyaXRlID0gKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pkluc3BpcmUgU29tZW9uZSE8L2gxPlxuXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgVGl0bGVcIiBpZD1cImlucHV0TmFtZVwiIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXREZXRhaWxcIj5FeGFtcGxlIHRleHRhcmVhPC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIGlkPVwiaW5wdXREZXRhaWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJvd3M9XCIzXCI+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgICA8YnIgLz5cbiAgICA8YnIgLz5cbiAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgRGV0YWlsXCI+PC90ZXh0YXJlYT5cbiAgICA8YnIgLz5cbiAgICA8YnIgLz5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJzdWJtaXRcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICB0cmFuc2ZlckRhdGEoe1xuICAgICAgICAgIGJsb2dTbHVnOiBkb2N1bWVudFxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiaW5wdXROYW1lXCIpXG4gICAgICAgICAgICAudmFsdWUucmVwbGFjZSgvXFxzKy9nLCBcIi1cIilcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIGJsb2dOYW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0TmFtZVwiKS52YWx1ZSxcbiAgICAgICAgICBibG9nRGV0YWlsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0RGV0YWlsXCIpLnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfX1cbiAgICA+XG4gICAgICBTdWJtaXRcbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IGlkPVwic3RhdHVzLWNvbnRhaW5lclwiPlxuICAgICAgPHAgaWQ9XCJzdGF0dXNcIj48L3A+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgI3N0YXR1cy1jb250YWluZXIge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgICAgIGxlZnQ6IDMwJTtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMXZoO1xuICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgIH1cbiAgICAgIGlucHV0LFxuICAgICAgYnV0dG9uLFxuICAgICAgdGV4dGFyZWEsXG4gICAgICBwIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgIHRvcDogMzAwcHg7XG4gICAgICB9XG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICB9XG4gICAgICAjY2hlY2tVc2VyQnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDU4NnB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNCU7XG5cbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQsXG4gICAgICAgIGJ1dHRvbixcbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDEzMHB4O1xuICAgICAgICAgIGxlZnQ6IDgwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgV3JpdGU7XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/write.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Write);

/***/ })

})
//# sourceMappingURL=write.js.88505e439319a314b988.hot-update.js.map