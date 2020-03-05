module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/communication.js":
/*!*************************************!*\
  !*** ./components/communication.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/epolat/Desktop/projects/website/components/communication.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Communication = () => __jsx("div", {
  className: "jsx-832373030" + " " + "comm",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("ul", {
  className: "jsx-832373030",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-832373030",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("a", {
  rel: "noopener",
  target: "_blank",
  href: "https://www.linkedin.com/in/erin%C3%A7-polat-4bb7bb192/",
  className: "jsx-832373030",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("img", {
  src: "/socialMediaIcons/linkedin.png",
  alt: "Erin\xE7 Polat LinkedIn",
  className: "jsx-832373030" + " " + "icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}))), __jsx("li", {
  className: "jsx-832373030",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("a", {
  rel: "noopener",
  target: "_blank",
  href: "https://www.instagram.com/erincpolat",
  className: "jsx-832373030",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("img", {
  src: "/socialMediaIcons/instagram.png",
  alt: "Erin\xE7 Polat Instagram",
  className: "jsx-832373030" + " " + "icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}))), __jsx("li", {
  className: "jsx-832373030",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("a", {
  rel: "noopener",
  target: "_blank",
  href: "mailto:erinc.polat@gmail.com",
  className: "jsx-832373030",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("img", {
  src: "/socialMediaIcons/mail.png",
  alt: "Erin\xE7 Polat Mail",
  className: "jsx-832373030" + " " + "icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}))), __jsx("li", {
  className: "jsx-832373030",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("a", {
  rel: "noopener",
  target: "_blank",
  href: "https://github.com/epolat-github",
  className: "jsx-832373030",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("img", {
  src: "/socialMediaIcons/github.png",
  alt: "Erin\xE7 Polat GitHub",
  className: "jsx-832373030",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
})))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "832373030",
  __self: undefined
}, ".icons.jsx-832373030{-webkit-filter:brightness(0.85);filter:brightness(0.85);}.comm.jsx-832373030{width:160px;position:fixed;z-index:1;top:30%;left:0;overflow-x:hidden;}.comm.jsx-832373030 ul.jsx-832373030{padding:1em;text-align:left;list-style:none;}.comm.jsx-832373030 li.jsx-832373030{margin:2em 0em;}.comm.jsx-832373030 a.jsx-832373030{color:white;-webkit-text-decoration:none;text-decoration:none;font-size:28px;}.comm.jsx-832373030 li.jsx-832373030:hover img.jsx-832373030{-webkit-animation:bounce-jsx-832373030 0.6s;animation:bounce-jsx-832373030 0.6s;}@-webkit-keyframes bounce-jsx-832373030{0%,20%,60%,100%{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}40%{-webkit-transform:translateY(-20px);-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);transform:translateY(-20px);}80%{-webkit-transform:translateY(-10px);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}}@keyframes bounce-jsx-832373030{0%,20%,60%,100%{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}40%{-webkit-transform:translateY(-20px);-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);transform:translateY(-20px);}80%{-webkit-transform:translateY(-10px);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL3Byb2plY3RzL3dlYnNpdGUvY29tcG9uZW50cy9jb21tdW5pY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEZ0IsQUFHaUMsQUFHWixBQVFBLEFBS0csQUFHSCxBQUtVLEFBS1EsQUFJQyxBQUlBLFlBakNoQixBQVFDLEFBUUssR0FIdkIsWUFaWSxDQVFNLElBaUJNLElBSUMsQUFJQSxDQWhDZixPQVFWLENBUFMsT0FDVyxJQVBwQixNQW9CaUIsUUFaakIsT0FhQSxHQUdBLG9DQU1BLGdCQUlMLEFBSUEiLCJmaWxlIjoiL2hvbWUvZXBvbGF0L0Rlc2t0b3AvcHJvamVjdHMvd2Vic2l0ZS9jb21wb25lbnRzL2NvbW11bmljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb21tdW5pY2F0aW9uID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1cIj5cbiAgICA8dWw+XG4gICAgICA8bGk+XG4gICAgICAgIDxhXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9lcmluJUMzJUE3LXBvbGF0LTRiYjdiYjE5Mi9cIlxuICAgICAgICA+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL3NvY2lhbE1lZGlhSWNvbnMvbGlua2VkaW4ucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIkVyaW7DpyBQb2xhdCBMaW5rZWRJblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGFcbiAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lcmluY3BvbGF0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9zb2NpYWxNZWRpYUljb25zL2luc3RhZ3JhbS5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiRXJpbsOnIFBvbGF0IEluc3RhZ3JhbVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwibWFpbHRvOmVyaW5jLnBvbGF0QGdtYWlsLmNvbVwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9zb2NpYWxNZWRpYUljb25zL21haWwucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIkVyaW7DpyBQb2xhdCBNYWlsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25zXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YVxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZXBvbGF0LWdpdGh1YlwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9zb2NpYWxNZWRpYUljb25zL2dpdGh1Yi5wbmdcIiBhbHQ9XCJFcmluw6cgUG9sYXQgR2l0SHViXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmljb25zIHtcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuODUpO1xuICAgICAgfVxuICAgICAgLmNvbW0ge1xuICAgICAgICB3aWR0aDogMTYwcHg7IC8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNpZGViYXIgKi9cbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBGaXhlZCBTaWRlYmFyIChzdGF5IGluIHBsYWNlIG9uIHNjcm9sbCkgKi9cbiAgICAgICAgei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cbiAgICAgICAgdG9wOiAzMCU7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cbiAgICAgIH1cbiAgICAgIC5jb21tIHVsIHtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgfVxuICAgICAgLmNvbW0gbGkge1xuICAgICAgICBtYXJnaW46IDJlbSAwZW07XG4gICAgICB9XG4gICAgICAuY29tbSBhIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIH1cbiAgICAgIC5jb21tIGxpOmhvdmVyIGltZyB7XG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlIDAuNnM7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgYm91bmNlIHtcbiAgICAgIDAlLCAyMCUsIDYwJSwgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiA0MCUge1xuICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiB9XG4gODAlIHtcbiAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gfVxuXG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW11bmljYXRpb247XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/projects/website/components/communication.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Communication);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/epolat/Desktop/projects/website/components/footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Footer = () => __jsx("footer", {
  className: "jsx-4024823499",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-4024823499",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "~~ Created by", " ", __jsx("em", {
  className: "jsx-4024823499",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("strong", {
  className: "jsx-4024823499",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "Erin\xE7 Polat ")), "~~"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4024823499",
  __self: undefined
}, "footer.jsx-4024823499{position:fixed;margin-top:30px;margin-bottom:0;height:6vh;background-color:rgba(242,210,121,0.4);text-align:center;}p.jsx-4024823499{font-size:18px;margin:auto;color:darkgrey;padding-top:1.5%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL3Byb2plY3RzL3dlYnNpdGUvY29tcG9uZW50cy9mb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2dCLEFBR3dCLEFBUUEsZUFQQyxBQVFKLFlBQ0csSUFSQyxXQVNDLEtBUk4sV0FDK0IsQ0FRNUMsc0NBUG9CLGtCQUNwQiIsImZpbGUiOiIvaG9tZS9lcG9sYXQvRGVza3RvcC9wcm9qZWN0cy93ZWJzaXRlL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGZvb3Rlcj5cbiAgICA8cD5cbiAgICAgIH5+IENyZWF0ZWQgYnl7XCIgXCJ9XG4gICAgICA8ZW0+XG4gICAgICAgIDxzdHJvbmc+RXJpbsOnIFBvbGF0IDwvc3Ryb25nPlxuICAgICAgPC9lbT5cbiAgICAgIH5+XG4gICAgPC9wPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGZvb3RlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgaGVpZ2h0OiA2dmg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyMTAsIDEyMSwgMC40KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBjb2xvcjogZGFya2dyZXk7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxLjUlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9mb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/projects/website/components/footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _communication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./communication */ "./components/communication.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar */ "./components/navbar.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-no-ssr */ "react-no-ssr");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
var _jsxFileName = "/home/epolat/Desktop/projects/website/components/layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Layout = props => __jsx("div", {
  className: "jsx-441208617" + " " + "layout-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("title", {
  className: "jsx-441208617",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Erin\xE7 Polat")), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "441208617",
  __self: undefined
}, ".layout-container.jsx-441208617{#background-color:#d6c698;#background-color:cyan;#background-color:rgb(10,25,47);margin:0px;padding:0px;overflow-x:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL3Byb2plY3RzL3dlYnNpdGUvY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWdCLEFBR21DLDBCQUNILHVCQUNXLGdDQUN2QixXQUNDLFlBQ00sa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL2Vwb2xhdC9EZXNrdG9wL3Byb2plY3RzL3dlYnNpdGUvY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQ29tbXVuaWNhdGlvbiBmcm9tIFwiLi9jb21tdW5pY2F0aW9uXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IE5vU1NSIGZyb20gXCJyZWFjdC1uby1zc3JcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5cbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtY29udGFpbmVyXCI+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+RXJpbsOnIFBvbGF0PC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5sYXlvdXQtY29udGFpbmVyIHtcbiAgICAgICAgI2JhY2tncm91bmQtY29sb3I6ICNkNmM2OTg7XG4gICAgICAgICNiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xuICAgICAgICAjYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCAyNSwgNDcpO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/home/epolat/Desktop/projects/website/components/layout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_dbCon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/dbCon */ "./src/dbCon.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/epolat/Desktop/projects/website/components/navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Navbar = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("nav", {
  className: "jsx-568728088" + " " + "navbar navbar-expand-lg navbar-expand-md sticky-top navbar-dark bg-transparent",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("button", {
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navbarNav",
  "aria-controls": "navbarNav",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation",
  className: "jsx-568728088" + " " + "navbar-toggler",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-568728088" + " " + "navbar-toggler-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
})), __jsx("div", {
  id: "navbarNav",
  className: "jsx-568728088" + " " + "collapse navbar-collapse",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-568728088" + " " + "navbar-brand pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("img", {
  src: "/logo.png",
  alt: "logo",
  className: "jsx-568728088" + " " + "image-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}))), __jsx("ul", {
  className: "jsx-568728088" + " " + "navbar-nav ml-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("li", {
  "data-toggle": "collapse",
  "data-target": ".navbar-collapse.show",
  className: "jsx-568728088" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-568728088" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "Home"))), __jsx("li", {
  "data-toggle": "collapse",
  "data-target": ".navbar-collapse.show",
  className: "jsx-568728088" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-568728088" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, "About"))), __jsx("li", {
  "data-toggle": "collapse",
  "data-target": ".navbar-collapse.show",
  className: "jsx-568728088" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx("a", {
  rel: "noopener",
  target: "_blank",
  href: "/Erin\xE7-Polat-CV-EN.pdf",
  className: "jsx-568728088" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, "Resume")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "568728088",
  __self: undefined
}, ".active.jsx-568728088{text-color:red;}a.jsx-568728088{font-size:40px;margin-right:25px;}a.jsx-568728088:hover{color:#de9e73 !important;}@media only screen and (max-device-width:480px){.navbar-brand.jsx-568728088{display:none;}.nav-link.jsx-568728088{font-size:30px;}.navbar-nav.jsx-568728088{margin-top:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL3Byb2plY3RzL3dlYnNpdGUvY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEVrQixBQUcwQixBQUdBLEFBSVUsQUFJVixBQUdFLEFBR0MsYUFMbEIsRUFYRixBQUdvQixBQVdsQixDQUdBLFNBVkYsUUFIQSIsImZpbGUiOiIvaG9tZS9lcG9sYXQvRGVza3RvcC9wcm9qZWN0cy93ZWJzaXRlL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgeyBjaGVja1VzZXIsIGN1cnJlbnRVc2VyLCBhdXRoSW5zdGFuY2UgfSBmcm9tIFwiLi4vc3JjL2RiQ29uXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZXhwYW5kLW1kIHN0aWNreS10b3AgbmF2YmFyLWRhcmsgYmctdHJhbnNwYXJlbnRcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhck5hdlwiXG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIlxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyTmF2XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIHBsLTRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2UtcmVzcG9uc2l2ZVwiIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbVwiXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZS5zaG93XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIubmF2YmFyLWNvbGxhcHNlLnNob3dcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BYm91dDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3BvcnRmb2xpb1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Qb3J0Zm9saW88L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICB7LyogPGxpXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbVwiXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZS5zaG93XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5CbG9nPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIlxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICBkYXRhLXRhcmdldD1cIi5uYXZiYXItY29sbGFwc2Uuc2hvd1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGhyZWY9XCIvRXJpbsOnLVBvbGF0LUNWLUVOLnBkZlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlc3VtZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgdGV4dC1jb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNkZTllNzMgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmJhci1uYXYge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L25hdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/projects/website/components/navbar.js */")));

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as));
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.css */ "./styles/styles.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");

var _jsxFileName = "/home/epolat/Desktop/projects/website/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function MyApp({
  Component,
  pageProps
}) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), " ", __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })));
}

/***/ }),

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: changeUserState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeUserState", function() { return changeUserState; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_dbCon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/dbCon */ "./src/dbCon.js");

var _jsxFileName = "/home/epolat/Desktop/projects/website/pages/blog.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const changeUserState = user => {
  if (user) {
    document.querySelectorAll(".sign-out").forEach(item => item.classList.add("d-none"));
    document.querySelectorAll(".sign-in").forEach(item => item.classList.remove("d-none"));
  } //if logged out
  else {
      document.querySelectorAll(".sign-out").forEach(item => item.classList.remove("d-none"));
      document.querySelectorAll(".sign-in").forEach(item => item.classList.add("d-none"));
    }
};

const signinModal = () => __jsx("div", {
  className: "modal fade",
  id: "signinModal",
  tabIndex: "-1",
  role: "dialog",
  "aria-labelledby": "signinModalLabel",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("div", {
  className: "modal-dialog",
  role: "document",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("div", {
  className: "modal-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("div", {
  className: "modal-header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("h5", {
  className: "modal-title",
  id: "signinModalLabel",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "Sign In"), __jsx("button", {
  type: "button",
  className: "close",
  "data-dismiss": "modal",
  "aria-label": "Close",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("span", {
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "\xD7"))), __jsx("div", {
  className: "modal-body",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx("input", {
  type: "text",
  placeholder: "email",
  id: "emailSignin",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}), __jsx("input", {
  type: "password",
  placeholder: "password",
  id: "passSignin",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}), __jsx("p", {
  id: "statusSignin",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
})), __jsx("div", {
  className: "modal-footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, __jsx("button", {
  type: "button",
  className: "btn btn-secondary signin-close-button",
  "data-dismiss": "modal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, "Close"), __jsx("button", {
  type: "button",
  className: "btn btn-primary",
  onClick: () => {
    document.getElementById("statusSignin").innerHTML = "Checking credentials...";
    Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_8__["authInstance"])().signInWithEmailAndPassword(document.getElementById("emailSignin").value, document.getElementById("passSignin").value).then(() => {
      document.getElementById("passSignin").value = "";
      document.getElementById("emailSignin").value = "";
      changeUserState();
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/blog");
      document.querySelector(".signin-close-button").click(); // window.location.reload();
    }).catch(error => {
      document.getElementById("statusSignin").innerHTML = error.code;
      console.log("Error code: ", error.code);
      console.log("Error Message: ", error.message);
    });
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, "Sign-in")))));

const registerModal = () => __jsx("div", {
  className: "modal fade",
  id: "registerModal",
  tabIndex: "-1",
  role: "dialog",
  "aria-labelledby": "registerModalLabel",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, __jsx("div", {
  className: "modal-dialog",
  role: "document",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}, __jsx("div", {
  className: "modal-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, __jsx("div", {
  className: "modal-header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
}, __jsx("h5", {
  className: "modal-title",
  id: "registerModalLabel",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}, "Register"), __jsx("button", {
  type: "button",
  className: "close",
  "data-dismiss": "modal",
  "aria-label": "Close",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
}, __jsx("span", {
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124
  },
  __self: undefined
}, "\xD7"))), __jsx("div", {
  className: "modal-body",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}, __jsx("input", {
  type: "text",
  placeholder: "email",
  id: "emailRegister",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129
  },
  __self: undefined
}), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130
  },
  __self: undefined
}), __jsx("input", {
  type: "password",
  placeholder: "password",
  id: "passRegister",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132
  },
  __self: undefined
}), __jsx("p", {
  id: "statusRegister",
  style: {
    marginTop: "3%"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133
  },
  __self: undefined
})), __jsx("div", {
  className: "modal-footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135
  },
  __self: undefined
}, __jsx("button", {
  type: "button",
  className: "btn btn-secondary register-close-button",
  "data-dismiss": "modal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136
  },
  __self: undefined
}, "Close"), __jsx("button", {
  type: "button",
  className: "btn btn-primary",
  onClick: () => {
    Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_8__["authInstance"])().createUserWithEmailAndPassword(document.getElementById("emailRegister").value, document.getElementById("passRegister").value).then(() => {
      console.log("Registered.");
      document.getElementById("statusRegister").innerHTML = "Registered.";
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/blog");
      document.querySelector(".register-close-button").click(); // authInstance().signOut();
      // window.location.reload();
    }).catch(function (error) {
      console.log(error);
      document.getElementById("statusRegister").innerHTML = error.message;
    });
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143
  },
  __self: undefined
}, "Register")))));

const loginBlogButtons = () => {
  return __jsx("div", {
    className: "container-fluid mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, __jsx("div", {
    className: "row d-flex justify-content-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, "Write"))), __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary btn-lg",
    onClick: () => {
      Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_8__["authInstance"])().signOut().then(() => window.location.reload()).catch(() => console.log("Sign-out problem."));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, "Sign-out"))));
};

const logoutBlogButtons = () => {
  return __jsx("div", {
    className: "container-fluid mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, __jsx("div", {
    className: "row d-flex justify-content-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    "data-toggle": "modal",
    "data-target": "#registerModal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }, "Register")), __jsx("div", {
    className: "col-lg-2 col-md-2 col-6 sign-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    "data-toggle": "modal",
    "data-target": "#signinModal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, "Sign-in"))));
};

const blogButtons = () => {
  if (Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_8__["checkUser"])()) {
    // if logged in
    return loginBlogButtons();
  } else {
    return logoutBlogButtons();
  }
}; // const blogButtons = () => {
//   console.log(checkUser());
//   return (
//     <div className="container-fluid mt-2">
//       <div className="row d-flex justify-content-end">
//         <div className="col-lg-2 col-md-2 col-6 sign-out">
//           <button
//             type="button"
//             className="btn btn-primary btn-lg"
//             data-toggle="modal"
//             data-target="#registerModal"
//           >
//             Register
//           </button>
//         </div>
//         <div className="col-lg-2 col-md-2 col-6 sign-out">
//           <button
//             type="button"
//             className="btn btn-primary btn-lg"
//             data-toggle="modal"
//             data-target="#signinModal"
//           >
//             Sign-in
//           </button>
//         </div>
//         <div className="col-lg-2 col-md-2 col-6 sign-in">
//           <Link href="/write">
//             <button type="button" className="btn btn-primary btn-lg">
//               Write
//             </button>
//           </Link>
//         </div>
//         <div className="col-lg-2 col-md-2 col-6 sign-in">
//           <button
//             type="button"
//             className="btn btn-secondary btn-lg"
//             onClick={() => {
//               authInstance()
//                 .signOut()
//                 .then(() => window.location.reload())
//                 .catch(() => console.log("Sign-out problem."));
//             }}
//           >
//             Sign-out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


const createCards = post => {
  return __jsx("div", {
    key: post.slug + Math.random(),
    className: "col-md-6 col-lg-4 mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: undefined
  }, __jsx("div", {
    className: "card h-100 border-dark rounded text-white bg-dark mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: undefined
  }, __jsx("h3", {
    className: "card-title text-capitalize",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: post.slug,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: undefined
  }, post.title))), post.details && __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_7___default.a, {
    source: post.details.slice(0, 500) + "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: undefined
  }))), __jsx("div", {
    className: "card-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: undefined
  }, __jsx("small", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: undefined
  }, post.date))));
};

const Blog = ({
  posts,
  postCount,
  currPage
}) => __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 320
  },
  __self: undefined
}, signinModal(), registerModal(), __jsx("article", {
  id: "blog-container",
  className: "jsx-1885384937",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 331
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1885384937" + " " + "row ml-5 mr-5 mt-5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 332
  },
  __self: undefined
}, posts && posts.map(post => createCards(post))), __jsx("nav", {
  id: "page-button-container",
  className: "jsx-1885384937",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 338
  },
  __self: undefined
}, __jsx("button", {
  disabled: currPage <= 1,
  onClick: () => next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(`/blog?page=${currPage - 1}`),
  className: "jsx-1885384937" + " " + "page-button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 339
  },
  __self: undefined
}, `<<`), [...Array(Math.ceil(postCount / 6))].map((curr, index) => __jsx("button", {
  key: "button" + index,
  onClick: () => next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(`/blog?page=${index + 1}`),
  className: "jsx-1885384937" + " " + "page-button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 347
  },
  __self: undefined
}, index + 1)), __jsx("button", {
  disabled: currPage >= Math.ceil(postCount / 6),
  onClick: () => next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(`/blog?page=${currPage + 1}`),
  className: "jsx-1885384937" + " " + "page-button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 355
  },
  __self: undefined
}, ">>"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
  id: "1885384937",
  __self: undefined
}, "#post-list.jsx-1885384937{color:white;border-bottom:2px solid white;border-radius:25%;text-align:center;margin:1% 10%;padding:1% 0;}a.jsx-1885384937{font-weight:bold;}.card-title.jsx-1885384937{text-transform:capitalize;}#page-button-container.jsx-1885384937{max-width:600px;margin:0 auto;margin-bottom:2%;-webkit-transform:translateX(25%);-ms-transform:translateX(25%);transform:translateX(25%);}.page-button.jsx-1885384937{background-color:#0083fe;border:1px solid white;border-radius:20%;color:white;padding:10px 16px;margin:0 3px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;}.page-button.jsx-1885384937:hover{background-color:#2e5e8b;}.page-button[disabled].jsx-1885384937{background-color:gray;}a[disabled].jsx-1885384937{background-color:red;}@media only screen and (max-width:600px){.row.jsx-1885384937{margin:5% 2% 3% 2% !important;}#page-button-container.jsx-1885384937{width:100%;display:inline-block;margin-left:50%;margin-bottom:10%;-webkit-transform:translateX(-40%);-ms-transform:translateX(-40%);transform:translateX(-40%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL3Byb2plY3RzL3dlYnNpdGUvcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyV2dCLEFBR3FCLEFBUUssQUFHUyxBQU1WLEFBTVMsQUFjQSxBQUdILEFBR0QsQUFJVyxBQUduQixXQUVVLENBbkRPLElBaUJoQixDQVRoQixJQW1DQSxDQUhBLEdBakJ5QixBQWN6QixDQTFCQSxJQU9tQixBQTZCakIsRUFLa0IsVUFuREEsS0FrQlEsQ0FLUixBQTZCRSxZQW5ERixNQXVCTixBQTZCaUIsWUFuRGYsQUF1QkksY0F0QkwsSUF1QkEsU0F0QmYsSUF3QnVCLDRCQVR2QixzQkFXaUIsQUF3QmYsZUFyQkYiLCJmaWxlIjoiL2hvbWUvZXBvbGF0L0Rlc2t0b3AvcHJvamVjdHMvd2Vic2l0ZS9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgeyBhdXRoSW5zdGFuY2UsIGNoZWNrVXNlciB9IGZyb20gXCIuLi9zcmMvZGJDb25cIjtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVVzZXJTdGF0ZSA9IHVzZXIgPT4ge1xuICBpZiAodXNlcikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLW91dFwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIikpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLWluXCIpXG4gICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSk7XG4gIH1cbiAgLy9pZiBsb2dnZWQgb3V0XG4gIGVsc2Uge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLW91dFwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIikpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduLWluXCIpXG4gICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKSk7XG4gIH1cbn07XG5cbmNvbnN0IHNpZ25pbk1vZGFsID0gKCkgPT4gKFxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXG4gICAgaWQ9XCJzaWduaW5Nb2RhbFwiXG4gICAgdGFiSW5kZXg9XCItMVwiXG4gICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVwic2lnbmluTW9kYWxMYWJlbFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cInNpZ25pbk1vZGFsTGFiZWxcIj5cbiAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxuICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIGlkPVwiZW1haWxTaWduaW5cIiAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBpZD1cInBhc3NTaWduaW5cIiAvPlxuICAgICAgICAgIDxwIGlkPVwic3RhdHVzU2lnbmluXCI+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IHNpZ25pbi1jbG9zZS1idXR0b25cIlxuICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1NpZ25pblwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIFwiQ2hlY2tpbmcgY3JlZGVudGlhbHMuLi5cIjtcbiAgICAgICAgICAgICAgYXV0aEluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsU2lnbmluXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzU2lnbmluXCIpLnZhbHVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc1NpZ25pblwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsU2lnbmluXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZVVzZXJTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvYmxvZ1wiKTtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbmluLWNsb3NlLWJ1dHRvblwiKS5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzU2lnbmluXCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmNvZGU7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNvZGU6IFwiLCBlcnJvci5jb2RlKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgTWVzc2FnZTogXCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduLWluXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgcmVnaXN0ZXJNb2RhbCA9ICgpID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxuICAgIGlkPVwicmVnaXN0ZXJNb2RhbFwiXG4gICAgdGFiSW5kZXg9XCItMVwiXG4gICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVwicmVnaXN0ZXJNb2RhbExhYmVsXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwicmVnaXN0ZXJNb2RhbExhYmVsXCI+XG4gICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXG4gICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCIgaWQ9XCJlbWFpbFJlZ2lzdGVyXCIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzUmVnaXN0ZXJcIiAvPlxuICAgICAgICAgIDxwIGlkPVwic3RhdHVzUmVnaXN0ZXJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMyVcIiB9fT48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgcmVnaXN0ZXItY2xvc2UtYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDbG9zZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYXV0aEluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFJlZ2lzdGVyXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzUmVnaXN0ZXJcIikudmFsdWVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RlcmVkLlwiKTtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzUmVnaXN0ZXJcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgXCJSZWdpc3RlcmVkLlwiO1xuICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvYmxvZ1wiKTtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVnaXN0ZXItY2xvc2UtYnV0dG9uXCIpLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAvLyBhdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XG4gICAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzUmVnaXN0ZXJcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBsb2dpbkJsb2dCdXR0b25zID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1pblwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5cIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIj5cbiAgICAgICAgICAgICAgV3JpdGVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1pblwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYXV0aEluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAuc2lnbk91dCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLmxvZyhcIlNpZ24tb3V0IHByb2JsZW0uXCIpKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2lnbi1vdXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGxvZ291dEJsb2dCdXR0b25zID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1vdXRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIlxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNyZWdpc3Rlck1vZGFsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtNiBzaWduLW91dFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3NpZ25pbk1vZGFsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduLWluXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBibG9nQnV0dG9ucyA9ICgpID0+IHtcbiAgaWYgKGNoZWNrVXNlcigpKSB7XG4gICAgLy8gaWYgbG9nZ2VkIGluXG4gICAgcmV0dXJuIGxvZ2luQmxvZ0J1dHRvbnMoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbG9nb3V0QmxvZ0J1dHRvbnMoKTtcbiAgfVxufTtcblxuLy8gY29uc3QgYmxvZ0J1dHRvbnMgPSAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGNoZWNrVXNlcigpKTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0yXCI+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yIGNvbC1tZC0yIGNvbC02IHNpZ24tb3V0XCI+XG4vLyAgICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCJcbi8vICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxuLy8gICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjcmVnaXN0ZXJNb2RhbFwiXG4vLyAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgUmVnaXN0ZXJcbi8vICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLTYgc2lnbi1vdXRcIj5cbi8vICAgICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIlxuLy8gICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXG4vLyAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNzaWduaW5Nb2RhbFwiXG4vLyAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgU2lnbi1pblxuLy8gICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtNiBzaWduLWluXCI+XG4vLyAgICAgICAgICAgPExpbmsgaHJlZj1cIi93cml0ZVwiPlxuLy8gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiPlxuLy8gICAgICAgICAgICAgICBXcml0ZVxuLy8gICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtNiBzaWduLWluXCI+XG4vLyAgICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tbGdcIlxuLy8gICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuLy8gICAgICAgICAgICAgICBhdXRoSW5zdGFuY2UoKVxuLy8gICAgICAgICAgICAgICAgIC5zaWduT3V0KClcbi8vICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpXG4vLyAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUubG9nKFwiU2lnbi1vdXQgcHJvYmxlbS5cIikpO1xuLy8gICAgICAgICAgICAgfX1cbi8vICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICBTaWduLW91dFxuLy8gICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuY29uc3QgY3JlYXRlQ2FyZHMgPSBwb3N0ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17cG9zdC5zbHVnICsgTWF0aC5yYW5kb20oKX0gY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLWxnLTQgbWItNVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwIGJvcmRlci1kYXJrIHJvdW5kZWQgdGV4dC13aGl0ZSBiZy1kYXJrIG1iLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2tcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwb3N0LnNsdWd9PlxuICAgICAgICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIHtwb3N0LmRldGFpbHMgJiYgKFxuICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Bvc3QuZGV0YWlscy5zbGljZSgwLCA1MDApICsgXCIuLi5cIn0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57cG9zdC5kYXRlfTwvc21hbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBCbG9nID0gKHsgcG9zdHMsIHBvc3RDb3VudCwgY3VyclBhZ2UgfSkgPT4gKFxuICA8TGF5b3V0PlxuICAgIHsvKiBCbG9nIHNwZWNpYWwgQnV0dG9ucyAqL31cbiAgICB7Lyoge2Jsb2dCdXR0b25zKCl9ICovfVxuXG4gICAgey8qIFNpZ24taW4gTW9kYWwgKi99XG4gICAge3NpZ25pbk1vZGFsKCl9XG5cbiAgICB7LyogU2lnbi1vdXQgTW9kYWwgKi99XG4gICAge3JlZ2lzdGVyTW9kYWwoKX1cblxuICAgIHsvKiBQb3N0cyAqL31cbiAgICA8YXJ0aWNsZSBpZD1cImJsb2ctY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtbC01IG1yLTUgbXQtNVwiPlxuICAgICAgICB7LyogUHJvZHVjZSBwb3N0cyAqL31cbiAgICAgICAge3Bvc3RzICYmIHBvc3RzLm1hcChwb3N0ID0+IGNyZWF0ZUNhcmRzKHBvc3QpKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUGFnaW5hdGlvbiAqL31cbiAgICAgIDxuYXYgaWQ9XCJwYWdlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtYnV0dG9uXCJcbiAgICAgICAgICBkaXNhYmxlZD17Y3VyclBhZ2UgPD0gMX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChgL2Jsb2c/cGFnZT0ke2N1cnJQYWdlIC0gMX1gKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtgPDxgfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAge1suLi5BcnJheShNYXRoLmNlaWwocG9zdENvdW50IC8gNikpXS5tYXAoKGN1cnIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAga2V5PXtcImJ1dHRvblwiICsgaW5kZXh9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChgL2Jsb2c/cGFnZT0ke2luZGV4ICsgMX1gKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtYnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aW5kZXggKyAxfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtYnV0dG9uXCJcbiAgICAgICAgICBkaXNhYmxlZD17Y3VyclBhZ2UgPj0gTWF0aC5jZWlsKHBvc3RDb3VudCAvIDYpfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvYmxvZz9wYWdlPSR7Y3VyclBhZ2UgKyAxfWApfVxuICAgICAgICA+XG4gICAgICAgICAgPj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25hdj5cbiAgICA8L2FydGljbGU+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgI3Bvc3QtbGlzdCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxJSAxMCU7XG4gICAgICAgIHBhZGRpbmc6IDElIDA7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgICAgI3BhZ2UtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIC8qZGlzcGxheTogaW5saW5lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDQwJTsgKi9cbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjUlKTtcbiAgICAgIH1cbiAgICAgIC5wYWdlLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgzZmU7IC8qIEdyZWVuICovXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICBtYXJnaW46IDAgM3B4O1xuICAgICAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAvL2Rpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAvL2N1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLy9mbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICAgIC5wYWdlLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTVlOGI7XG4gICAgICB9XG4gICAgICAucGFnZS1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICAgIH1cbiAgICAgIGFbZGlzYWJsZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAucm93IHtcbiAgICAgICAgICBtYXJnaW46IDUlIDIlIDMlIDIlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgI3BhZ2UtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgLyogbWFyZ2luOiAzJSA1MCU7ICovXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pO1xuQmxvZy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeTogeyBwYWdlID0gMSB9IH0pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuYmFzZVVybH1hcGkvcG9zdHM/cGFnZT0ke3BhZ2V9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHBvc3RzOiBkYXRhLnBvc3RzLFxuICAgIHBvc3RDb3VudDogcGFyc2VJbnQoZGF0YS5wb3N0Q291bnQsIDEwKSxcbiAgICBjdXJyUGFnZTogcGFyc2VJbnQocGFnZSwgMTApXG4gIH07IC8vcmV0dXJucyBhbiBhcnJheVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZztcbiJdfQ== */\n/*@ sourceURL=/home/epolat/Desktop/projects/website/pages/blog.js */"));

Blog.getInitialProps = async ({
  query: {
    page = 1
  }
}) => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(`${"http://localhost:3000/"}api/posts?page=${page}`);
  const data = await res.json();
  return {
    posts: data.posts,
    postCount: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(data.postCount, 10),
    currPage: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(page, 10)
  }; //returns an array
};

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./src/dbCon.js":
/*!**********************!*\
  !*** ./src/dbCon.js ***!
  \**********************/
/*! exports provided: authInstance, dbInstance, checkUser, currentUser, default, deletePost, backup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInstance", function() { return authInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbInstance", function() { return dbInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUser", function() { return checkUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUser", function() { return currentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addDb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backup", function() { return backup; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/blog */ "./pages/blog.js");

// import { navbarModifier } from "../components/navbar";


const firebase = __webpack_require__(/*! firebase/app */ "firebase/app");

__webpack_require__(/*! firebase/firestore */ "firebase/firestore");

__webpack_require__(/*! firebase/firebase-auth */ "firebase/firebase-auth");

const zip = __webpack_require__(/*! jszip */ "jszip")(); // import saveAs from "save-as"; 
// TODO: move config to .env


var firebaseConfig = {
  apiKey: "AIzaSyCMm751lQ5J1PiOHFhwMjUQ9ephvrcxb5c",
  authDomain: "website-v1-2ed9b.firebaseapp.com",
  databaseURL: "https://website-v1-2ed9b.firebaseio.com",
  // projectId: (`${process.env.REACT_APP_FIREBASE_PROJECT_ID}`),
  projectId: "website-v1-2ed9b",
  storageBucket: "website-v1-2ed9b.appspot.com",
  messagingSenderId: "699186492876",
  appId: "1:699186492876:web:c7fe7b35e7eaf9d6221969",
  measurementId: "G-CKM1LGKGX5"
}; // Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} // firebase.analytics();
//instances


const firestore = firebase.firestore();
const auth = firebase.auth(); //methods

const authInstance = () => auth;
const dbInstance = () => firestore; // auth.onAuthStateChanged(user => {
//   if (user) {
//     console.log(user.email);
//   } else {
//     // console.log("user is signed out");
//     console.log("signed out");
//   }
// });
// check logged in info

const checkUser = () => {
  return auth.currentUser ? true : false;
};
var currentUser;
auth.onAuthStateChanged(user => {
  Object(_pages_blog__WEBPACK_IMPORTED_MODULE_1__["changeUserState"])(user);
}); //TODO: registerdaki ve signindeki fonkları buraya taşı
// add blog posts to database

function addDb(data) {
  const docRef = firestore.collection("blogs").doc(data.blogSlug);
  docRef.set({
    blogName: data.blogName,
    blogDetail: data.blogDetail
  }).then(() => console.log("Saved")).catch(error => console.log("Got an error:" + error));
}
const deletePost = async postTitle => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    const query = firestore.collection("blogs").where("blogName", "==", postTitle);
    query.get().then(snapshot => {
      snapshot.forEach(doc => {
        doc.ref.delete().then(() => {
          resolve(true);
        }).catch(error => {
          console.log("Delete error: ", error);
          resolve(false);
        });
      });
    });
  });
};
const backup = async () => {
  console.log("backup called");
  zip.file("deneme.txt", "deneme\n");
  zip.generateAsync({
    type: "blob"
  }).then(content => {
    console.log(content);
    return content; // saveAs(content, "deneme.zip");
  });
};

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/firebase-auth":
/*!*****************************************!*\
  !*** external "firebase/firebase-auth" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firebase-auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "jszip":
/*!************************!*\
  !*** external "jszip" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jszip");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "react-no-ssr":
/*!*******************************!*\
  !*** external "react-no-ssr" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map