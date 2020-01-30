module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./pages/api/posts.js":
/*!****************************!*\
  !*** ./pages/api/posts.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_dbCon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/dbCon */ "./src/dbCon.js");


/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  // const posts = postList(); //array of post obj
  let firestore = Object(_src_dbCon__WEBPACK_IMPORTED_MODULE_1__["dbInstance"])();
  let posts = [];
  firestore.collection("blogs").get().then(snapshot => {
    snapshot.forEach(doc => {
      let blogSlug = doc.id;
      let blogInfo = doc.data();
      let blogObj = {
        title: blogInfo.blogName,
        slug: blogSlug,
        details: blogInfo.blogDetail,
        date: "1 Aralık"
      };
      posts.push(blogObj);
    });

    let page = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(req.query.page, 10);

    let firstIndex = 5 * (page - 1);
    let lastIndex = 5 * page;

    if (lastIndex > posts.length) {
      lastIndex = posts.length;
    }

    res.status(200).json({
      posts: posts.slice(firstIndex, lastIndex),
      postCount: posts.length
    });
  }); // console.log(posts);
});

/***/ }),

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
const firebase = __webpack_require__(/*! firebase/app */ "firebase/app");

__webpack_require__(/*! firebase/firestore */ "firebase/firestore");

__webpack_require__(/*! firebase/firebase-auth */ "firebase/firebase-auth"); // TODO: move config to .env


var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}; // Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} // firebase.analytics();
//instances


const firestore = firebase.firestore();
const auth = firebase.auth(); //methods

const authInstance = () => auth;
const dbInstance = () => firestore;
auth.onAuthStateChanged(user => {
  if (user) {
    console.log(user.email);
  } else {
    // console.log("user is signed out");
    alert("signed out");
  }
}); // check logged in info

const checkUser = () => {
  return auth.currentUser ? true : false;
}; //TODO: registerdaki ve signindeki fonkları buraya taşı
// add blog posts to database

function addDb(data) {
  const docRef = firestore.collection("blogs").doc(data.blogSlug);
  docRef.set({
    blogName: data.blogName,
    blogDetail: data.blogDetail
  }).then(() => console.log("Saved")).catch(error => console.log("Got an error:" + error));
}

/***/ }),

/***/ 6:
/*!**********************************!*\
  !*** multi ./pages/api/posts.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/epolat/Desktop/nextJs/website/pages/api/posts.js */"./pages/api/posts.js");


/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

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

/***/ })

/******/ });
//# sourceMappingURL=posts.js.map