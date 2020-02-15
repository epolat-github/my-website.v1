webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/dbCon.js":
/*!**********************!*\
  !*** ./src/dbCon.js ***!
  \**********************/
/*! exports provided: authInstance, dbInstance, checkUser, currentUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInstance", function() { return authInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbInstance", function() { return dbInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUser", function() { return checkUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUser", function() { return currentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addDb; });
/* harmony import */ var _pages_blog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/blog */ "./pages/blog.js");
// import { navbarModifier } from "../components/navbar";


var firebase = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");

__webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");

__webpack_require__(/*! firebase/firebase-auth */ "./node_modules/firebase/firebase-auth.js"); // TODO: move config to .env


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


var firestore = firebase.firestore();
var auth = firebase.auth(); //methods

var authInstance = function authInstance() {
  return auth;
};
var dbInstance = function dbInstance() {
  return firestore;
}; // auth.onAuthStateChanged(user => {
//   if (user) {
//     console.log(user.email);
//   } else {
//     // console.log("user is signed out");
//     console.log("signed out");
//   }
// });
// check logged in info

var checkUser = function checkUser() {
  return auth.currentUser ? true : false;
};
var currentUser;
auth.onAuthStateChanged(function (user) {
  Object(_pages_blog__WEBPACK_IMPORTED_MODULE_0__["changeUserState"])(user);
}); //TODO: registerdaki ve signindeki fonkları buraya taşı
// add blog posts to database

function addDb(data) {
  var docRef = firestore.collection("blogs").doc(data.blogSlug);
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
//# sourceMappingURL=_app.js.1088b2223ea0a059f678.hot-update.js.map