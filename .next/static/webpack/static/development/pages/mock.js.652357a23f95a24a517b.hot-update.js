webpackHotUpdate("static/development/pages/mock.js",{

/***/ "./pages/dbCon.js":
/*!************************!*\
  !*** ./pages/dbCon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var firebase = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");

__webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");

var firebaseConfig = {
  apiKey: "AIzaSyCMm751lQ5J1PiOHFhwMjUQ9ephvrcxb5c",
  authDomain: "website-v1-2ed9b.firebaseapp.com",
  databaseURL: "https://website-v1-2ed9b.firebaseio.com",
  projectId: "website-v1-2ed9b",
  storageBucket: "website-v1-2ed9b.appspot.com",
  messagingSenderId: "699186492876",
  appId: "1:699186492876:web:c7fe7b35e7eaf9d6221969",
  measurementId: "G-CKM1LGKGX5"
}; // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

var firestore = firebase.firestore();
var docRef = firestore.doc("samples/sandwitchData");
/* harmony default export */ __webpack_exports__["default"] = (addData = function addData(data) {
  docRef.set({
    hotDogStatus: data
  }).then(function () {
    return console.log("Saved");
  })["catch"](function (error) {
    return console.log("Got an error:" + error);
  });
});

/***/ }),

/***/ "./pages/mock.js":
/*!***********************!*\
  !*** ./pages/mock.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dbCon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dbCon */ "./pages/dbCon.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
var _jsxFileName = "/home/epolat/Desktop/nextJs/website/pages/mock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var adddData = function adddData(data) {
  Object(_dbCon__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
};

var Mock = function Mock() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h1", {
    style: {
      color: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Deneme"), __jsx("input", {
    id: "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("button", {
    id: "submit",
    onClick: function onClick(e) {
      return adddData(document.getElementById("input").innerHTML);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Submit"), adddData("ahmet"));
};

/* harmony default export */ __webpack_exports__["default"] = (Mock);

/***/ })

})
//# sourceMappingURL=mock.js.652357a23f95a24a517b.hot-update.js.map