webpackHotUpdate("static/development/pages/mock.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./pages/dbCon.js":
/*!************************!*\
  !*** ./pages/dbCon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addDb; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");


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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} // firebase.analytics();


var firestore = firebase.firestore();
var docRef = null;
function addDb(data) {
  docRef = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("docRef"), firestore.collection("blogs").doc(data.blogName));
  docRef.set({
    blogName: data.blogName,
    blogDetail: data.blogDetail
  }).then(function () {
    return console.log("Saved");
  })["catch"](function (error) {
    return console.log("Got an error:" + error);
  });
}

/***/ })

})
//# sourceMappingURL=mock.js.56596727ebe45345c025.hot-update.js.map