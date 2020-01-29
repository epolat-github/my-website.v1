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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/[postId].js":
/*!*******************************!*\
  !*** ./pages/api/[postId].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_blog_postList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/blog/postList */ "./src/blog/postList.js");

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const allPosts = Object(_src_blog_postList__WEBPACK_IMPORTED_MODULE_0__["postList"])(); //array of post obj

  const postId = req.query.postId;
  const foundPost = allPosts.find(post => post.slug === postId);
  res.status(200).json({
    post: foundPost
  });
});

/***/ }),

/***/ "./src/blog/postList.js":
/*!******************************!*\
  !*** ./src/blog/postList.js ***!
  \******************************/
/*! exports provided: postList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postList", function() { return postList; });
const samplePosts = [{
  title: "DENEME",
  slug: "deneme",
  details: __webpack_require__(/*! ./posts/deneme.md */ "./src/blog/posts/deneme.md").default,
  date: "5 Aralık 2019"
}, {
  title: "Örnek yazı",
  slug: "ornek-yazi",
  // details: require("./posts/ornek-yazi.md").default,
  details: "Irure ex velit et Lorem Lorem amet. Elit velit non dolore elit consequat reprehenderit eiusmod sint sit. Ipsum magna pariatur incididunt nisi incididunt labore commodo pariatur et amet ut laborum aute. Magna proident non laboris ea ut magna. Id officia ullamco dolore eiusmod nulla eiusmod ad. Aute amet culpa irure do.Voluptate sunt id ut aliqua et nostrud Lorem aliquip laborum. Officia ut voluptate incididunt ea do elit elit pariatur dolor cillum Lorem quis consequat. Ipsum enim do incididunt cillum quis ea ea. Dolore laborum consequat est mollit irure tempor nisi ad ea eiusmod ea. Dolor aute qui officia aliquip aliqua qui ex ullamco magna sint. Fugiat occaecat deserunt est nostrud do magna laborum non eu.",
  date: "3 Aralık 2019"
}, {
  title: "Merhaba dünya!",
  slug: "merhaba",
  //details: require("./posts/deneme.md").default,
  details: "Irure ex velit et Lorem Lorem amet. Elit velit non dolore elit consequat reprehenderit eiusmod sint sit. Ipsum magna pariatur incididunt nisi incididunt labore commodo pariatur et amet ut laborum aute. Magna proident non laboris ea ut magna. Id officia ullamco dolore eiusmod nulla eiusmod ad. Aute amet culpa irure do.Voluptate sunt id ut aliqua et nostrud Lorem aliquip laborum. Officia ut voluptate incididunt ea do elit elit pariatur dolor cillum Lorem quis consequat. Ipsum enim do incididunt cillum quis ea ea. Dolore laborum consequat est mollit irure tempor nisi ad ea eiusmod ea. Dolor aute qui officia aliquip aliqua qui ex ullamco magna sint. Fugiat occaecat deserunt est nostrud do magna laborum non eu.",
  date: "1 Aralık 2019"
}, {
  title: "Merhaba dünya!",
  slug: "merhaba",
  //details: require("./posts/deneme.md").default,
  details: "Irure ex velit et Lorem Lorem amet. Elit velit non dolore elit consequat reprehenderit eiusmod sint sit. Ipsum magna pariatur incididunt nisi incididunt labore commodo pariatur et amet ut laborum aute. Magna proident non laboris ea ut magna. Id officia ullamco dolore eiusmod nulla eiusmod ad. Aute amet culpa irure do.Voluptate sunt id ut aliqua et nostrud Lorem aliquip laborum. Officia ut voluptate incididunt ea do elit elit pariatur dolor cillum Lorem quis consequat. Ipsum enim do incididunt cillum quis ea ea. Dolore laborum consequat est mollit irure tempor nisi ad ea eiusmod ea. Dolor aute qui officia aliquip aliqua qui ex ullamco magna sint. Fugiat occaecat deserunt est nostrud do magna laborum non eu.",
  date: "1 Aralık 2019"
}, {
  title: "Merhaba dünya!",
  slug: "merhaba",
  //details: require("./posts/deneme.md").default,
  details: "Irure ex velit et Lorem Lorem amet. Elit velit non dolore elit consequat reprehenderit eiusmod sint sit. Ipsum magna pariatur incididunt nisi incididunt labore commodo pariatur et amet ut laborum aute. Magna proident non laboris ea ut magna. Id officia ullamco dolore eiusmod nulla eiusmod ad. Aute amet culpa irure do.Voluptate sunt id ut aliqua et nostrud Lorem aliquip laborum. Officia ut voluptate incididunt ea do elit elit pariatur dolor cillum Lorem quis consequat. Ipsum enim do incididunt cillum quis ea ea. Dolore laborum consequat est mollit irure tempor nisi ad ea eiusmod ea. Dolor aute qui officia aliquip aliqua qui ex ullamco magna sint. Fugiat occaecat deserunt est nostrud do magna laborum non eu.",
  date: "1 Aralık 2019"
}, {
  title: "Merhaba dünya!",
  slug: "merhaba",
  //details: require("./posts/deneme.md").default,
  details: "Irure ex velit et Lorem Lorem amet. Elit velit non dolore elit consequat reprehenderit eiusmod sint sit. Ipsum magna pariatur incididunt nisi incididunt labore commodo pariatur et amet ut laborum aute. Magna proident non laboris ea ut magna. Id officia ullamco dolore eiusmod nulla eiusmod ad. Aute amet culpa irure do.Voluptate sunt id ut aliqua et nostrud Lorem aliquip laborum. Officia ut voluptate incididunt ea do elit elit pariatur dolor cillum Lorem quis consequat. Ipsum enim do incididunt cillum quis ea ea. Dolore laborum consequat est mollit irure tempor nisi ad ea eiusmod ea. Dolor aute qui officia aliquip aliqua qui ex ullamco magna sint. Fugiat occaecat deserunt est nostrud do magna laborum non eu.",
  date: "1 Aralık 2019"
}, {
  title: "Merhaba dünya!",
  slug: "merhaba",
  //details: require("./posts/deneme.md").default,
  details: "Irure ex velit et Lorem Lorem amet. Elit velit non dolore elit consequat reprehenderit eiusmod sint sit. Ipsum magna pariatur incididunt nisi incididunt labore commodo pariatur et amet ut laborum aute. Magna proident non laboris ea ut magna. Id officia ullamco dolore eiusmod nulla eiusmod ad. Aute amet culpa irure do.Voluptate sunt id ut aliqua et nostrud Lorem aliquip laborum. Officia ut voluptate incididunt ea do elit elit pariatur dolor cillum Lorem quis consequat. Ipsum enim do incididunt cillum quis ea ea. Dolore laborum consequat est mollit irure tempor nisi ad ea eiusmod ea. Dolor aute qui officia aliquip aliqua qui ex ullamco magna sint. Fugiat occaecat deserunt est nostrud do magna laborum non eu.",
  date: "1 Aralık 2019"
}];
const postList = () => {
  return samplePosts;
};

/***/ }),

/***/ "./src/blog/posts/deneme.md":
/*!**********************************!*\
  !*** ./src/blog/posts/deneme.md ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n# Live demo\n\nChanges are automatically rendered as you type.\n\n## Table of Contents\n\n* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)\n* Renders actual, \"native\" React DOM elements\n* Allows you to escape or skip HTML (try toggling the checkboxes above)\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n\n## HTML block below\n\n<blockquote>\n  This blockquote will change based on the HTML settings above.\n</blockquote>\n\n## How about some code?\n```js\nvar React = require('react');\nvar Markdown = require('react-markdown');\n");

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/api/[postId].js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/epolat/Desktop/nextJs/website/pages/api/[postId].js */"./pages/api/[postId].js");


/***/ })

/******/ });
//# sourceMappingURL=[postId].js.map