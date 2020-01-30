webpackHotUpdate("static/development/pages/write.js",{

/***/ "./src/dbCon.js":
/*!**********************!*\
  !*** ./src/dbCon.js ***!
  \**********************/
/*! exports provided: authInstance, dbInstance, checkUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInstance", function() { return authInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbInstance", function() { return dbInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUser", function() { return checkUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addDb; });
var firebase = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");

__webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");

__webpack_require__(/*! firebase/firebase-auth */ "./node_modules/firebase/firebase-auth.js"); // TODO: move config to .env 


var firebaseConfig = {}; // Initialize Firebase

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
};
auth.onAuthStateChanged(function (user) {
  if (user) {
    console.log(user.email);
  } else {
    // console.log("user is signed out");
    alert("signed out");
  }
}); // check logged in info

var checkUser = function checkUser() {
  return auth.currentUser ? true : false;
}; //TODO: registerdaki ve signindeki fonkları buraya taşı 
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
//# sourceMappingURL=write.js.4ddfac5def244839446e.hot-update.js.map