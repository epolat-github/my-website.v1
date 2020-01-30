webpackHotUpdate("static/development/pages/write.js",{

/***/ "./src/dbCon.js":
/*!**********************!*\
  !*** ./src/dbCon.js ***!
  \**********************/
/*! exports provided: dbInstance, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbInstance", function() { return dbInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addDb; });
var firebase = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");

__webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");

var firebaseConfig = {}; // Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} // firebase.analytics();


var firestore = firebase.firestore();
var dbInstance = function dbInstance() {
  return firestore;
};
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
//# sourceMappingURL=write.js.c1b9db31dee6f920f49c.hot-update.js.map