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
    className: "jsx-1954931928" + " " + "jumpotron",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    "class": "form-group",
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("label", {
    "for": "inputDetail",
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Example textarea"), __jsx("textarea", {
    id: "inputDetail",
    "class": "form-control",
    rows: "3",
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), __jsx("input", {
    type: "text",
    placeholder: "Blog Title",
    id: "inputName",
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
  }), __jsx("textarea", {
    type: "text",
    placeholder: "Blog Detail",
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
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
      lineNumber: 56
    },
    __self: this
  }, "Submit"), __jsx("div", {
    id: "status-container",
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("p", {
    id: "status",
    className: "jsx-1954931928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1954931928",
    __self: this
  }, "#status-container.jsx-1954931928{color:red;display:inline-block;}h2.jsx-1954931928{position:relative;color:white;width:700px;left:30%;}h1.jsx-1954931928{position:relative;width:1vh;top:200px;margin:0;left:40%;}input.jsx-1954931928,button.jsx-1954931928,textarea.jsx-1954931928,p.jsx-1954931928{position:relative;left:40%;top:300px;}textarea.jsx-1954931928{height:150px;}#checkUserButton.jsx-1954931928{position:relative;top:586px;left:50%;}@media only screen and (max-width:600px){h2.jsx-1954931928{position:static;padding-left:4%;width:100vw;}h1.jsx-1954931928{position:relative;left:10%;}input.jsx-1954931928,button.jsx-1954931928,textarea.jsx-1954931928{position:relative;top:130px;left:80px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL3BhZ2VzL3dyaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFZ0IsQUFHbUIsQUFJUSxBQU1BLEFBVUEsQUFLTCxBQUdLLEFBTUEsQUFNRSxBQU1BLFVBN0NDLEdBeUJ2QixHQVNvQixFQTlCTixBQU1GLEFBVUQsQUFRQyxBQVlDLEFBTUMsU0F6QkYsQUFvQlYsQ0E5QlUsQUFrQkQsQUFrQkcsRUExQ0EsQ0FKZCxDQW1DZ0IsS0FkaEIsQUFRQSxDQWxCVyxBQW9DVCxJQTFDUyxFQStCVCxHQXhCUyxJQU5YLEtBT0EiLCJmaWxlIjoiL2hvbWUvZXBvbGF0L0Rlc2t0b3AvbmV4dEpzL3dlYnNpdGUvcGFnZXMvd3JpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkRGF0YSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5pbXBvcnQgeyBkYkluc3RhbmNlLCBhdXRoSW5zdGFuY2UsIGNoZWNrVXNlciB9IGZyb20gXCIuLi9zcmMvZGJDb25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHRyYW5zZmVyRGF0YSA9IGRhdGEgPT4ge1xuICBjb25zdCBmaXJlc3RvcmUgPSBkYkluc3RhbmNlKCk7XG5cbiAgbGV0IHNsdWcgPSBkYXRhLmJsb2dTbHVnO1xuICBsZXQgbmFtZSA9IGRhdGEuYmxvZ05hbWU7XG4gIGxldCBkZXRhaWwgPSBkYXRhLmJsb2dEZXRhaWw7XG5cbiAgaWYgKHNsdWcgPT0gXCJcIiB8fCBuYW1lID09IFwiXCIgfHwgZGV0YWlsID09IFwiXCIpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKS5pbm5lckhUTUwgPVxuICAgICAgXCJGaWxsIHRoZSByZXF1aXJlZCBhcmVhcyBwbGVhc2UuXCI7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcG9zdCA9IHsgYmxvZ05hbWU6IG5hbWUsIGJsb2dEZXRhaWw6IGRldGFpbCwgYmxvZ1RpbWU6IERhdGUubm93KCkgfTtcblxuICBjb25zdCBkb2NSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcImJsb2dzXCIpLmRvYyhkYXRhLmJsb2dTbHVnKTtcblxuICBkb2NSZWZcbiAgICAuc2V0KHBvc3QpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJTYXZlZFwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLmlubmVySFRNTCA9XG4gICAgICAgIDxzdHJvbmc+YHNsdWc6ICR7c2x1Z30sYDwvc3Ryb25nPiArIGBuYW1lOiAke25hbWV9IGNyZWF0ZWQuYDtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCBhbiBlcnJvcjpcIiArIGVycm9yKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzXCIpLmlubmVySFRNTCA9IGAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICB9KTtcbn07XG5cbmNvbnN0IFdyaXRlID0gKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19Pkluc3BpcmUgU29tZW9uZSE8L2gxPlxuICAgIFxuICAgIDxmb3JtIGNsYXNzTmFtZT1cImp1bXBvdHJvblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0RGV0YWlsXCI+RXhhbXBsZSB0ZXh0YXJlYTwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBpZD1cImlucHV0RGV0YWlsXCJcbiAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgcm93cz1cIjNcIlxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJsb2cgVGl0bGVcIiBpZD1cImlucHV0TmFtZVwiIC8+XG4gICAgPGJyIC8+XG4gICAgPGJyIC8+XG4gICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCbG9nIERldGFpbFwiID48L3RleHRhcmVhPlxuICAgIDxiciAvPlxuICAgIDxiciAvPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdFwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIHRyYW5zZmVyRGF0YSh7XG4gICAgICAgICAgYmxvZ1NsdWc6IGRvY3VtZW50XG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dE5hbWVcIilcbiAgICAgICAgICAgIC52YWx1ZS5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgYmxvZ05hbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXROYW1lXCIpLnZhbHVlLFxuICAgICAgICAgIGJsb2dEZXRhaWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXREZXRhaWxcIikudmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIFN1Ym1pdFxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXYgaWQ9XCJzdGF0dXMtY29udGFpbmVyXCI+XG4gICAgICA8cCBpZD1cInN0YXR1c1wiPjwvcD5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAjc3RhdHVzLWNvbnRhaW5lciB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgICAgbGVmdDogMzAlO1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxdmg7XG4gICAgICAgIHRvcDogMjAwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGVmdDogNDAlO1xuICAgICAgfVxuICAgICAgaW5wdXQsXG4gICAgICBidXR0b24sXG4gICAgICB0ZXh0YXJlYSxcbiAgICAgIHAge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgICAgdG9wOiAzMDBweDtcbiAgICAgIH1cbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cbiAgICAgICNjaGVja1VzZXJCdXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogNTg2cHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgaDIge1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA0JTtcblxuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCxcbiAgICAgICAgYnV0dG9uLFxuICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogMTMwcHg7XG4gICAgICAgICAgbGVmdDogODBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBXcml0ZTtcbiJdfQ== */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/pages/write.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Write);

/***/ })

})
//# sourceMappingURL=write.js.52a285b019052cbc814a.hot-update.js.map