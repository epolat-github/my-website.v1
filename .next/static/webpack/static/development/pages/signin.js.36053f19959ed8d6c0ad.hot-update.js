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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_dbCon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/dbCon */ "./src/dbCon.js");
var _jsxFileName = "/home/epolat/Desktop/nextJs/website/components/navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


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
Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_2__["authInstance"])().onAuthStateChanged(function (user) {
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
    // <nav
    //   className="navbar navbar-expand-lg sticky-top navbar-light"
    //   style={{ backgroundColor: "white" }}
    // >
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNav"
    //     aria-controls="navbarNav"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <Link href="/">
    //       <a className="navbar-brand">
    //         <img src="/favicon.png" width="43" height="43" alt="logo" />
    //       </a>
    //     </Link>
    //     <ul className="navbar-nav ml-auto">
    //       <li className="nav-item">
    //         <Link href="/">
    //           <a className="nav-link">Home</a>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link href="/about">
    //           <a className="nav-link">About</a>
    //         </Link>
    //       </li>
    //       {/* <li className="nav-item">
    //         <Link href="/portfolio">
    //           <a className="nav-link">Portfolio</a>
    //         </Link>
    //       </li> */}
    //       <li className="nav-item">
    //         <Link href="/blog">
    //           <a className="nav-link">Blog</a>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <a
    //           className="nav-link"
    //           rel="noopener"
    //           target="_blank"
    //           href="/Erinç-Polat-CV-EN.pdf"
    //         >
    //           Resume
    //         </a>
    //       </li>
    //       <li className="nav-item signed-out">
    //         <Link href="/signin">
    //           <a className="nav-link">Sign-in</a>
    //         </Link>
    //       </li>
    //       <li className="nav-item signed-out">
    //         <Link href="/register">
    //           <a className="nav-link">Register</a>
    //         </Link>
    //       </li>
    //       <li className="nav-item signed-in">
    //         <Link href="/write">
    //           <a className="nav-link">Write</a>
    //         </Link>
    //       </li>
    //       <li className="nav-item signed-in">
    //         <Link href="/">
    //           <a
    //             className="nav-link"
    //             onClick={() => {
    //               authInstance().signOut();
    //               location.reload();
    //             }}
    //           >
    //             Log-Out
    //           </a>
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <style jsx>{`
    //     a {
    //       color: red;
    //       font-size: 25px;
    //       margin-right: 20px;
    //     }
    //   `}</style>
    // </nav>
    __jsx(Navbar, {
      collapseOnSelect: true,
      expand: "lg",
      bg: "dark",
      variant: "dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, __jsx(Navbar.Brand, {
      href: "#home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, "React-Bootstrap"), __jsx(Navbar.Toggle, {
      "aria-controls": "responsive-navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }), __jsx(Navbar.Collapse, {
      id: "responsive-navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }, __jsx(Nav, {
      className: "mr-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      },
      __self: this
    }, __jsx(Nav.Link, {
      href: "#features",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, "Features"), __jsx(Nav.Link, {
      href: "#pricing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    }, "Pricing"), __jsx(NavDropdown, {
      title: "Dropdown",
      id: "collasible-nav-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      },
      __self: this
    }, __jsx(NavDropdown.Item, {
      href: "#action/3.1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    }, "Action"), __jsx(NavDropdown.Item, {
      href: "#action/3.2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, "Another action"), __jsx(NavDropdown.Item, {
      href: "#action/3.3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, "Something"), __jsx(NavDropdown.Divider, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }), __jsx(NavDropdown.Item, {
      href: "#action/3.4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }, "Separated link"))), __jsx(Nav, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, __jsx(Nav.Link, {
      href: "#deets",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }, "More deets"), __jsx(Nav.Link, {
      eventKey: 2,
      href: "#memes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    }, "Dank memes"))))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=signin.js.36053f19959ed8d6c0ad.hot-update.js.map