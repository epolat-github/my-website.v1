webpackHotUpdate("static/development/pages/signin.js",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: navbarModifier, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navbarModifier", function() { return navbarModifier; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_dbCon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/dbCon */ "./src/dbCon.js");
var _jsxFileName = "/home/epolat/Desktop/nextJs/website/components/navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var navbarModifier = function navbarModifier(user) {
  if (user) {// document
    //   .querySelectorAll(".signed-out")
    //   .forEach(item => (item.style.display = "none"));
    // document
    //   .querySelectorAll(".signed-in")
    //   .forEach(item => (item.style.display = "block"));
  } else {// document
      //   .querySelectorAll(".signed-out")
      //   .forEach(item => (item.style.display = "block"));
      // document
      //   .querySelectorAll(".signed-in")
      //   .forEach(item => (item.style.display = "none"));
    }
};
Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_3__["authInstance"])().onAuthStateChanged(function (user) {
  // console.log(user);
  if (user) {
    document.querySelectorAll(".signed-out").forEach(function (item) {
      return item.style.display = "none";
    });
    document.querySelectorAll(".signed-in").forEach(function (item) {
      return item.style.display = "block";
    }); // navbarModifier(user);
    // currentUser = true;
  } else {
    document.querySelectorAll(".signed-out").forEach(function (item) {
      return item.style.display = "block";
    });
    document.querySelectorAll(".signed-in").forEach(function (item) {
      return item.style.display = "none";
    });
  } // navbarModifier(false);
  // currentUser = false;

});

var Navbar = function Navbar() {
  return (// <nav className="navbar">
    //   <ul>
    //     <li>
    //       <Link href="/">
    //         <a>Home</a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/about">
    //         <a>About</a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/portfolio">
    //         <a>Portfolio</a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/contact">
    //         <a>Contact</a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/blog">
    //         <a>Blog</a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/blog">
    //         <a>Resume</a>
    //       </Link>
    //     </li>
    //   </ul>
    //   <style jsx>{`
    //     .navbar {
    //       align: center;
    //       padding-left: 25%;
    //       padding-right: 15%;
    //       #margin-left: 30%;
    //       #margin-top: 1%;
    //     }
    //     .navbar ul {
    //       list-style: none;
    //       padding: 0px;
    //     }
    //     .navbar li {
    //       display: inline;
    //       padding: 2%;
    //     }
    //     .navbar li:hover {
    //       border-top: solid;
    //       border-color: #067c99;
    //     }
    //     .navbar a {
    //       font-family: "Abril Fatface", cursive;
    //       letter-spacing: 3px;
    //       color: #a8ada9;
    //       text-decoration: none;
    //       text-transform: uppercase;
    //       font-weight: bold;
    //       font-size: 26px;
    //     }
    //     .navbar a:hover {
    //       color: #767a76;
    //       color: rgba(9, 178, 220, 0.4);
    //     }
    //   `}</style>
    // </nav>
    // <nav
    //   id="navbar"
    //   className="navbar navbar-expand-sm justify-content-center bg-light"
    // >
    // <ul className="navbar-nav">
    //   <li className="nav-item">
    //     <Link href="/">
    //       <a className="nav-link">Home</a>
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link href="/about">
    //       <a className="nav-link">About</a>
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link href="/portfolio">
    //       <a className="nav-link">Portfolio</a>
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link href="/contact">
    //       <a className="nav-link">Contact</a>
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link href="/blog">
    //       <a className="nav-link">Blog</a>
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       className="nav-link"
    //       rel="noopener"
    //       target="_blank"
    //       href="/Erinç-Polat-CV-EN.pdf"
    //     >
    //       Resume
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <Link href="/signin">
    //       <a className="nav-link">Sign-in</a>
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link href="/register">
    //       <a className="nav-link">Register</a>
    //     </Link>
    //   </li>
    // </ul>
    //   <style jsx>{`
    //     #navbar {
    //       color: black;
    //     }
    //     li {
    //       padding-right: 30px;
    //     }
    //     a {
    //       font-size: 25px;
    //     }
    //     a:hover {
    //       color: #767a76;
    //       //color: rgba(9, 178, 220, 0.4);
    //     }
    //     @media only screen and (max-width: 600px) {
    //       a {
    //         font-size: 13px;
    //         padding-right: 1% !important;
    //       }
    //       li {
    //         padding-right: 2% !important;
    //         border-right: 1px solid lightgrey;
    //       }
    //       .navbar-nav {
    //         flex-direction: row !important;
    //       }
    //     }
    //   `}</style>
    // </nav>
    __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, __jsx("nav", {
      style: {
        backgroundColor: "white"
      },
      className: "jsx-1730840006" + " " + "navbar navbar-expand-lg sticky-top navbar-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNav",
      "aria-controls": "navbarNav",
      "aria-expanded": "true",
      "aria-label": "Toggle navigation",
      className: "jsx-1730840006" + " " + "navbar-toggler",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-1730840006" + " " + "navbar-toggler-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    })), __jsx("div", {
      id: "navbarNav",
      className: "jsx-1730840006" + " " + "collapse navbar-collapse",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1730840006" + " " + "navbar-brand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, __jsx("img", {
      src: "/favicon.png",
      width: "43",
      height: "43",
      alt: "logo",
      className: "jsx-1730840006",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }))), __jsx("ul", {
      className: "jsx-1730840006" + " " + "navbar-nav ml-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-1730840006" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1730840006" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, "Home"))), __jsx("li", {
      className: "jsx-1730840006" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1730840006" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, "About"))), __jsx("li", {
      className: "jsx-1730840006" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/blog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1730840006" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, "Blog"))), __jsx("li", {
      className: "jsx-1730840006" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, __jsx("a", {
      rel: "noopener",
      target: "_blank",
      href: "/Erin\xE7-Polat-CV-EN.pdf",
      className: "jsx-1730840006" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, "Resume")), __jsx("li", {
      className: "jsx-1730840006" + " " + "nav-item signed-out",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/signin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1730840006" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, "Sign-in"))), __jsx("li", {
      className: "jsx-1730840006" + " " + "nav-item signed-out",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/register",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1730840006" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, "Register"))), __jsx("li", {
      className: "jsx-1730840006" + " " + "nav-item signed-in",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/write",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1730840006" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, "Write"))), __jsx("li", {
      className: "jsx-1730840006" + " " + "nav-item signed-in",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, __jsx("a", {
      onClick: function onClick() {
        Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_3__["authInstance"])().signOut();
        location.reload();
      },
      className: "jsx-1730840006" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, "Log-Out"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1730840006",
      __self: this
    }, "a.jsx-1730840006{color:red;font-size:25px;margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vwb2xhdC9EZXNrdG9wL25leHRKcy93ZWJzaXRlL2NvbXBvbmVudHMvbmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBSa0IsQUFHcUIsVUFDSyxlQUNHLGtCQUNwQiIsImZpbGUiOiIvaG9tZS9lcG9sYXQvRGVza3RvcC9uZXh0SnMvd2Vic2l0ZS9jb21wb25lbnRzL25hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHsgY2hlY2tVc2VyLCBjdXJyZW50VXNlciwgYXV0aEluc3RhbmNlIH0gZnJvbSBcIi4uL3NyYy9kYkNvblwiO1xuXG5leHBvcnQgY29uc3QgbmF2YmFyTW9kaWZpZXIgPSB1c2VyID0+IHtcbiAgaWYgKHVzZXIpIHtcbiAgICAvLyBkb2N1bWVudFxuICAgIC8vICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbmVkLW91dFwiKVxuICAgIC8vICAgLmZvckVhY2goaXRlbSA9PiAoaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpKTtcbiAgICAvLyBkb2N1bWVudFxuICAgIC8vICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbmVkLWluXCIpXG4gICAgLy8gICAuZm9yRWFjaChpdGVtID0+IChpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIpKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBkb2N1bWVudFxuICAgIC8vICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbmVkLW91dFwiKVxuICAgIC8vICAgLmZvckVhY2goaXRlbSA9PiAoaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiKSk7XG4gICAgLy8gZG9jdW1lbnRcbiAgICAvLyAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZ25lZC1pblwiKVxuICAgIC8vICAgLmZvckVhY2goaXRlbSA9PiAoaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpKTtcbiAgfVxufTtcblxuYXV0aEluc3RhbmNlKCkub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXIgPT4ge1xuICAvLyBjb25zb2xlLmxvZyh1c2VyKTtcbiAgaWYgKHVzZXIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbmVkLW91dFwiKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiAoaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbmVkLWluXCIpXG4gICAgICAuZm9yRWFjaChpdGVtID0+IChpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIpKTtcbiAgICAvLyBuYXZiYXJNb2RpZmllcih1c2VyKTtcbiAgICAvLyBjdXJyZW50VXNlciA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZ25lZC1vdXRcIilcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIikpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaWduZWQtaW5cIilcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKSk7XG4gIH1cbiAgLy8gbmF2YmFyTW9kaWZpZXIoZmFsc2UpO1xuICAvLyBjdXJyZW50VXNlciA9IGZhbHNlO1xufSk7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IChcbiAgLy8gPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgLy8gICA8dWw+XG4gIC8vICAgICA8bGk+XG4gIC8vICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gIC8vICAgICAgICAgPGE+SG9tZTwvYT5cbiAgLy8gICAgICAgPC9MaW5rPlxuICAvLyAgICAgPC9saT5cbiAgLy8gICAgIDxsaT5cbiAgLy8gICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAvLyAgICAgICAgIDxhPkFib3V0PC9hPlxuICAvLyAgICAgICA8L0xpbms+XG4gIC8vICAgICA8L2xpPlxuICAvLyAgICAgPGxpPlxuICAvLyAgICAgICA8TGluayBocmVmPVwiL3BvcnRmb2xpb1wiPlxuICAvLyAgICAgICAgIDxhPlBvcnRmb2xpbzwvYT5cbiAgLy8gICAgICAgPC9MaW5rPlxuICAvLyAgICAgPC9saT5cbiAgLy8gICAgIDxsaT5cbiAgLy8gICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gIC8vICAgICAgICAgPGE+Q29udGFjdDwvYT5cbiAgLy8gICAgICAgPC9MaW5rPlxuICAvLyAgICAgPC9saT5cbiAgLy8gICAgIDxsaT5cbiAgLy8gICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gIC8vICAgICAgICAgPGE+QmxvZzwvYT5cbiAgLy8gICAgICAgPC9MaW5rPlxuICAvLyAgICAgPC9saT5cbiAgLy8gICAgIDxsaT5cbiAgLy8gICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gIC8vICAgICAgICAgPGE+UmVzdW1lPC9hPlxuICAvLyAgICAgICA8L0xpbms+XG4gIC8vICAgICA8L2xpPlxuICAvLyAgIDwvdWw+XG4gIC8vICAgPHN0eWxlIGpzeD57YFxuICAvLyAgICAgLm5hdmJhciB7XG4gIC8vICAgICAgIGFsaWduOiBjZW50ZXI7XG4gIC8vICAgICAgIHBhZGRpbmctbGVmdDogMjUlO1xuICAvLyAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG4gIC8vICAgICAgICNtYXJnaW4tbGVmdDogMzAlO1xuICAvLyAgICAgICAjbWFyZ2luLXRvcDogMSU7XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIC5uYXZiYXIgdWwge1xuICAvLyAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAvLyAgICAgICBwYWRkaW5nOiAwcHg7XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIC5uYXZiYXIgbGkge1xuICAvLyAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIC8vICAgICAgIHBhZGRpbmc6IDIlO1xuICAvLyAgICAgfVxuXG4gIC8vICAgICAubmF2YmFyIGxpOmhvdmVyIHtcbiAgLy8gICAgICAgYm9yZGVyLXRvcDogc29saWQ7XG4gIC8vICAgICAgIGJvcmRlci1jb2xvcjogIzA2N2M5OTtcbiAgLy8gICAgIH1cblxuICAvLyAgICAgLm5hdmJhciBhIHtcbiAgLy8gICAgICAgZm9udC1mYW1pbHk6IFwiQWJyaWwgRmF0ZmFjZVwiLCBjdXJzaXZlO1xuICAvLyAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAvLyAgICAgICBjb2xvcjogI2E4YWRhOTtcbiAgLy8gICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAvLyAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAvLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgLy8gICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAvLyAgICAgfVxuXG4gIC8vICAgICAubmF2YmFyIGE6aG92ZXIge1xuICAvLyAgICAgICBjb2xvcjogIzc2N2E3NjtcbiAgLy8gICAgICAgY29sb3I6IHJnYmEoOSwgMTc4LCAyMjAsIDAuNCk7XG4gIC8vICAgICB9XG4gIC8vICAgYH08L3N0eWxlPlxuICAvLyA8L25hdj5cbiAgLy8gPG5hdlxuICAvLyAgIGlkPVwibmF2YmFyXCJcbiAgLy8gICBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGJnLWxpZ2h0XCJcbiAgLy8gPlxuICAvLyA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxuICAvLyAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAvLyAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgLy8gICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Ib21lPC9hPlxuICAvLyAgICAgPC9MaW5rPlxuICAvLyAgIDwvbGk+XG4gIC8vICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gIC8vICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gIC8vICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QWJvdXQ8L2E+XG4gIC8vICAgICA8L0xpbms+XG4gIC8vICAgPC9saT5cbiAgLy8gICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgLy8gICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+XG4gIC8vICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+UG9ydGZvbGlvPC9hPlxuICAvLyAgICAgPC9MaW5rPlxuICAvLyAgIDwvbGk+XG4gIC8vICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gIC8vICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgLy8gICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Db250YWN0PC9hPlxuICAvLyAgICAgPC9MaW5rPlxuICAvLyAgIDwvbGk+XG4gIC8vICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gIC8vICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cbiAgLy8gICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5CbG9nPC9hPlxuICAvLyAgICAgPC9MaW5rPlxuICAvLyAgIDwvbGk+XG4gIC8vICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gIC8vICAgICA8YVxuICAvLyAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXG4gIC8vICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgLy8gICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgLy8gICAgICAgaHJlZj1cIi9Fcmluw6ctUG9sYXQtQ1YtRU4ucGRmXCJcbiAgLy8gICAgID5cbiAgLy8gICAgICAgUmVzdW1lXG4gIC8vICAgICA8L2E+XG4gIC8vICAgPC9saT5cbiAgLy8gICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgLy8gICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XG4gIC8vICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U2lnbi1pbjwvYT5cbiAgLy8gICAgIDwvTGluaz5cbiAgLy8gICA8L2xpPlxuICAvLyAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAvLyAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxuICAvLyAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlJlZ2lzdGVyPC9hPlxuICAvLyAgICAgPC9MaW5rPlxuICAvLyAgIDwvbGk+XG4gIC8vIDwvdWw+XG4gIC8vICAgPHN0eWxlIGpzeD57YFxuICAvLyAgICAgI25hdmJhciB7XG4gIC8vICAgICAgIGNvbG9yOiBibGFjaztcbiAgLy8gICAgIH1cbiAgLy8gICAgIGxpIHtcbiAgLy8gICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgLy8gICAgIH1cbiAgLy8gICAgIGEge1xuICAvLyAgICAgICBmb250LXNpemU6IDI1cHg7XG4gIC8vICAgICB9XG4gIC8vICAgICBhOmhvdmVyIHtcbiAgLy8gICAgICAgY29sb3I6ICM3NjdhNzY7XG4gIC8vICAgICAgIC8vY29sb3I6IHJnYmEoOSwgMTc4LCAyMjAsIDAuNCk7XG4gIC8vICAgICB9XG4gIC8vICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC8vICAgICAgIGEge1xuICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgLy8gICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxJSAhaW1wb3J0YW50O1xuICAvLyAgICAgICB9XG4gIC8vICAgICAgIGxpIHtcbiAgLy8gICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyJSAhaW1wb3J0YW50O1xuICAvLyAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgICAubmF2YmFyLW5hdiB7XG4gIC8vICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgYH08L3N0eWxlPlxuICAvLyA8L25hdj5cbiAgPGRpdj5cbiAgICA8bmF2XG4gICAgICBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBzdGlja3ktdG9wIG5hdmJhci1saWdodFwiXG4gICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9fVxuICAgID5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhck5hdlwiXG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIlxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Zhdmljb24ucG5nXCIgd2lkdGg9XCI0M1wiIGhlaWdodD1cIjQzXCIgYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+SG9tZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkFib3V0PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlBvcnRmb2xpbzwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QmxvZzwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGhyZWY9XCIvRXJpbsOnLVBvbGF0LUNWLUVOLnBkZlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlc3VtZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHNpZ25lZC1vdXRcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U2lnbi1pbjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBzaWduZWQtb3V0XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+UmVnaXN0ZXI8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gc2lnbmVkLWluXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3dyaXRlXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+V3JpdGU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gc2lnbmVkLWluXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBhdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9nLU91dFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L25hdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXX0= */\n/*@ sourceURL=/home/epolat/Desktop/nextJs/website/components/navbar.js */")))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=signin.js.9c1dd92f0caf7f92e241.hot-update.js.map