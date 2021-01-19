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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/Helpers.js":
/*!***************************!*\
  !*** ./assets/Helpers.js ***!
  \***************************/
/*! exports provided: getSeason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeason", function() { return getSeason; });
function getSeason(month) {
  var season = '';

  if (month == 1 || month == 2 || month == 3) {
    season = 'winter';
  } else if (month == 4 || month == 5 || month == 6) {
    season = 'spring';
  } else if (month == 7 || month == 8 || month == 9) {
    season = 'summer';
  } else if (month == 10 || month == 11 || month == 12) {
    season = 'fall';
  }

  return season;
}



/***/ }),

/***/ "./assets/css/custEvents.module.css":
/*!******************************************!*\
  !*** ./assets/css/custEvents.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"light": "custEvents_light__3xZgA"
};


/***/ }),

/***/ "./assets/css/dailies.module.css":
/*!***************************************!*\
  !*** ./assets/css/dailies.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dark": "dailies_dark__1TNRg",
	"rbc-event": "dailies_rbc-event__2N6g-",
	"noBullet": "dailies_noBullet__3o0w0",
	"altmsg": "dailies_altmsg__2Eqlg",
	"formatList": "dailies_formatList__2MO7_",
	"carddimension": "dailies_carddimension__38sUP",
	"title": "dailies_title__23LqA"
};


/***/ }),

/***/ "./assets/css/footer.module.css":
/*!**************************************!*\
  !*** ./assets/css/footer.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dark": "footer_dark__1Nskr",
	"rbc-event": "footer_rbc-event__1y3-A",
	"footerbgc": "footer_footerbgc__3ozRR",
	"copyright": "footer_copyright__3qnZ3"
};


/***/ }),

/***/ "./assets/css/header.module.css":
/*!**************************************!*\
  !*** ./assets/css/header.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dark": "header_dark__5CI1G",
	"rbc-event": "header_rbc-event__3CLLl",
	"header": "header_header__kAy8F",
	"image": "header_image__Rbs9W",
	"lightbg": "header_lightbg__3WEar",
	"darkbg": "header_darkbg__2mWPg",
	"bgc": "header_bgc__2vcxY"
};


/***/ }),

/***/ "./assets/css/main.module.css":
/*!************************************!*\
  !*** ./assets/css/main.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dark": "main_dark__2r-Q3",
	"rbc-event": "main_rbc-event__1ou86",
	"titleContainer": "main_titleContainer__S_fRn",
	"title": "main_title__2Hnib",
	"genres": "main_genres__1Wl6J",
	"test": "main_test__TDDG2",
	"bgc": "main_bgc__36M-h",
	"bind": "main_bind__2eJpz",
	"description": "main_description__1Gf-C",
	"blur": "main_blur__GHUML",
	"screen": "main_screen__17MVS",
	"light": "main_light__1AUbe"
};


/***/ }),

/***/ "./assets/css/rbc.module.css":
/*!***********************************!*\
  !*** ./assets/css/rbc.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"rbc-btn": "rbc_rbc-btn__3kciC",
	"rbc-input": "rbc_rbc-input__3aZBg",
	"dark-bg": "rbc_dark-bg__3N0Jj",
	"light-bg": "rbc_light-bg__EmaII",
	"dark-text": "rbc_dark-text__DHpRm",
	"light-text": "rbc_light-text__CmdTb",
	"rbc-calendar": "rbc_rbc-calendar__1unG0",
	"rbc-abs-full": "rbc_rbc-abs-full__1tnEx",
	"rbc-row-bg": "rbc_rbc-row-bg__2sKwa",
	"rbc-ellipsis": "rbc_rbc-ellipsis__3vKeP",
	"rbc-event-label": "rbc_rbc-event-label__19_oz",
	"rbc-row-segment": "rbc_rbc-row-segment__QhAss",
	"rbc-event-content": "rbc_rbc-event-content__g3KrE",
	"rbc-show-more": "rbc_rbc-show-more__2o50e",
	"rbc-rtl": "rbc_rbc-rtl__1W4Ni",
	"rbc-off-range": "rbc_rbc-off-range__14eoR",
	"rbc-off-range-bg": "rbc_rbc-off-range-bg__1rBG9",
	"rbc-header": "rbc_rbc-header__3O3Lu",
	"rbc-row-content": "rbc_rbc-row-content__1vgOF",
	"rbc-today": "rbc_rbc-today__uQTIz",
	"rbc-toolbar": "rbc_rbc-toolbar__jK58Y",
	"rbc-toolbar-label": "rbc_rbc-toolbar-label__3SsM1",
	"rbc-btn-group": "rbc_rbc-btn-group__1iV9I",
	"rbc-event": "rbc_rbc-event__3PZgI",
	"rbc-slot-selecting": "rbc_rbc-slot-selecting__bBe4J",
	"rbc-event-overlaps": "rbc_rbc-event-overlaps__2Gp1k",
	"rbc-event-continues-prior": "rbc_rbc-event-continues-prior__2JcRD",
	"rbc-event-continues-after": "rbc_rbc-event-continues-after__2BkW2",
	"rbc-event-continues-earlier": "rbc_rbc-event-continues-earlier__Omn6p",
	"rbc-event-continues-later": "rbc_rbc-event-continues-later__HVKJV",
	"rbc-row": "rbc_rbc-row__19LFB",
	"rbc-selected-cell": "rbc_rbc-selected-cell__PS_wh",
	"rbc-month-view": "rbc_rbc-month-view__1As6F",
	"rbc-month-header": "rbc_rbc-month-header__dzCQT",
	"rbc-month-row": "rbc_rbc-month-row__3ydsC",
	"rbc-date-cell": "rbc_rbc-date-cell__2dl-e",
	"rbc-now": "rbc_rbc-now__1q-4R",
	"rbc-day-bg": "rbc_rbc-day-bg__1_ZoB",
	"rbc-overlay": "rbc_rbc-overlay__3JMJ2",
	"rbc-overlay-header": "rbc_rbc-overlay-header__26BCU",
	"rbc-agenda-view": "rbc_rbc-agenda-view__1MoJQ",
	"rbc-agenda-table": "rbc_rbc-agenda-table__1jftQ",
	"rbc-agenda-time-cell": "rbc_rbc-agenda-time-cell__2QceD",
	"rbc-continues-after": "rbc_rbc-continues-after__21C6N",
	"rbc-continues-prior": "rbc_rbc-continues-prior__GrzMc",
	"rbc-agenda-date-cell": "rbc_rbc-agenda-date-cell__2nohr",
	"rbc-agenda-event-cell": "rbc_rbc-agenda-event-cell__dF_bW",
	"rbc-time-column": "rbc_rbc-time-column__F66fg",
	"rbc-timeslot-group": "rbc_rbc-timeslot-group__30F2x",
	"rbc-time-gutter": "rbc_rbc-time-gutter__3mBBz",
	"rbc-header-gutter": "rbc_rbc-header-gutter__16x1O",
	"rbc-label": "rbc_rbc-label__3j1w6",
	"rbc-day-slot": "rbc_rbc-day-slot__1H7h1",
	"rbc-events-container": "rbc_rbc-events-container__1-CJl",
	"rbc-time-slot": "rbc_rbc-time-slot__2bFZ2",
	"rbc-time-view-resources": "rbc_rbc-time-view-resources__6Vrhe",
	"rbc-time-header-gutter": "rbc_rbc-time-header-gutter__1zdVS",
	"rbc-time-header": "rbc_rbc-time-header__3Rlny",
	"rbc-time-header-content": "rbc_rbc-time-header-content__1j5xl",
	"rbc-time-header-cell-single-day": "rbc_rbc-time-header-cell-single-day__26J5Z",
	"rbc-day-header": "rbc_rbc-day-header__1aw5s",
	"rbc-slot-selection": "rbc_rbc-slot-selection__2vN-B",
	"rbc-time-view": "rbc_rbc-time-view__xlJ1-",
	"rbc-allday-cell": "rbc_rbc-allday-cell__cFUaL",
	"rbc-allday-events": "rbc_rbc-allday-events__3191q",
	"rbc-overflowing": "rbc_rbc-overflowing__iMpr9",
	"rbc-row-resource": "rbc_rbc-row-resource___XSp3",
	"rbc-time-content": "rbc_rbc-time-content__1hkP7",
	"rbc-current-time-indicator": "rbc_rbc-current-time-indicator__2mLAc"
};


/***/ }),

/***/ "./assets/events.js":
/*!**************************!*\
  !*** ./assets/events.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 0,
  title: 'test',
  start: new Date(),
  end: new Date()
}, {
  id: 1,
  'title': 'test2',
  'start': new Date(2020, 6, 16),
  'end': new Date(2020, 6, 16)
}]);

/***/ }),

/***/ "./assets/img/score_icon.svg":
/*!***********************************!*\
  !*** ./assets/img/score_icon.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  className: "score_icon_svg__layer"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#fff",
  opacity: 0.3,
  stroke: "#000",
  d: "M8 2.944l1.957 4.563 5.01.424-3.8 3.244L12.306 16 8 13.442 3.694 16l1.14-4.825-3.8-3.244 5.009-.424L8 2.944l1.957 4.563z"
}));

function SvgScoreIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 16,
    height: 16
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgScoreIcon);

/***/ }),

/***/ "./components/Dailies.js":
/*!*******************************!*\
  !*** ./components/Dailies.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_css_dailies_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/css/dailies.module.css */ "./assets/css/dailies.module.css");
/* harmony import */ var _assets_css_dailies_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_dailies_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_Helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/Helpers.js */ "./assets/Helpers.js");
var _jsxFileName = "C:\\Users\\Hassan\\Documents\\Projects\\AnimeCalendar\\components\\Dailies.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Dailies = props => {
  const {
    0: hasError,
    1: setErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    anime: []
  });
  const today = new Date();
  var dailyArr;

  async function fetchData() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://api.jikan.moe/v3/season/${props.currYear}/${Object(_assets_Helpers_js__WEBPACK_IMPORTED_MODULE_4__["getSeason"])(props.currMonth)}`);
    res.json().then(res => setData(res)).catch(err => setErrors(err));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchData();
  }, []);

  function formatDate(date) {
    var newDate = new moment__WEBPACK_IMPORTED_MODULE_2___default.a(date);
    return newDate.format('MM/DD/YYYY');
  }

  dailyArr = data.anime.filter(anime => {
    if (formatDate(anime.airing_start) !== formatDate(today)) {
      return false;
    }

    return true;
  }).map(anime => {
    return anime;
  });

  if (dailyArr.length == 0) {
    return __jsx("div", {
      className: _assets_css_dailies_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.altmsg,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 16
      }
    }, "*No anime released today :(");
  }

  console.log(dailyArr);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: _assets_css_dailies_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.noBullet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, dailyArr.map(anime => __jsx("li", {
    key: anime.mal_id,
    className: _assets_css_dailies_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formatList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _assets_css_dailies_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.carddimension + " card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _assets_css_dailies_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, __jsx("a", {
    style: props.isDark ? {
      color: 'white'
    } : null,
    href: anime.url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, anime.title)), __jsx("img", {
    src: anime.image_url,
    style: {
      height: '212px',
      width: '150px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dailies);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_css_footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/css/footer.module.css */ "./assets/css/footer.module.css");
/* harmony import */ var _assets_css_footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_footer_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Hassan\\Documents\\Projects\\AnimeCalendar\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Footer(props) {
  const ThemeSwitch = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])({
    switchBase: {
      color: 'rgb(78, 123, 182)',
      '&$checked': {
        color: 'rgb(206, 57, 82)'
      },
      '&$checked + $track': {
        backgroundColor: 'red'
      }
    },
    checked: {},
    track: {
      backgroundColor: 'blue'
    }
  })(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2___default.a);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _assets_css_footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footerbgc + " grid-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "grid-x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, "Theme:", __jsx(ThemeSwitch, {
    checked: props.isDark,
    onChange: props.change,
    name: props.name,
    inputProps: {
      'aria-label': 'secondary checkbox'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: "grid-x align-self-center small-5 text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "cell " + _assets_css_footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "\xA92020 H-Man.")))));
}

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_css_header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/css/header.module.css */ "./assets/css/header.module.css");
/* harmony import */ var _assets_css_header_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_header_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Hassan\\Documents\\Projects\\AnimeCalendar\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const linkStyle = {
  marginRight: 15
};
function Header(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `${props.isDark ? _assets_css_header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.darkbg : _assets_css_header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lightbg} ${_assets_css_header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bgc + " align-center"}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: _assets_css_header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.image,
    style: props.isDark ? {
      visibility: 'hidden'
    } : {
      visibility: 'visible'
    },
    src: "/chikaR.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "text-center " + _assets_css_header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Anime Calendar")), __jsx("img", {
    className: _assets_css_header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.image,
    style: props.isDark ? {
      visibility: 'visible'
    } : {
      visibility: 'hidden'
    },
    src: "/KaguyaR.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./components/ScoreIcon.js":
/*!*********************************!*\
  !*** ./components/ScoreIcon.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Hassan\\Documents\\Projects\\AnimeCalendar\\components\\ScoreIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ScoreIcon = props => {
  var scoreColor;
  var strokeColor;
  var opacityLvl = 1;

  if (props.score >= 8.66) {
    scoreColor = '#FFD700';
  } else if (props.score >= 8.3 && props.score < 8.66) {
    scoreColor = '#f1f1f1';
    strokeColor = '#e7e7e7';
  } else if (props.score >= 7.7 && props.score < 8.3) {
    scoreColor = '#00ff00';
  } else if (props.score >= 6.8 && props.score < 7.7) {
    scoreColor = '#ffd699';
  } else if (props.score >= 6 && props.score < 6.8) {
    scoreColor = '#ff0000';
  } else if (props.score >= 1 && props.score < 6) {
    scoreColor = '#800000';
  } else {
    scoreColor = '#ffffff';
    strokeColor = '#000000';
    opacityLvl = '0.3';
  }

  return __jsx("svg", {
    width: "16",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("g", {
    class: "layer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "Layer 1"), __jsx("polygon", {
    fill: scoreColor,
    id: "svg_32",
    opacity: opacityLvl,
    points: "8,2.9444122314453125 9.95710277557373,\r 7.50744104385376 14.966644287109375,7.931210041046143 11.166654586791992,11.175078392028809 12.305620193481445,\r 16 8,13.441793441772461 3.694380283355713,16 4.833345890045166,11.175078392028809 1.033355712890625,\r 7.931210041046143 6.042898178100586,7.50744104385376 8,2.9444122314453125 9.95710277557373,7.50744104385376 ",
    stroke: strokeColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ScoreIcon);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-big-calendar */ "react-big-calendar");
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_widgets_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-widgets-moment */ "react-widgets-moment");
/* harmony import */ var react_widgets_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_widgets_moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Popover */ "@material-ui/core/Popover");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-svg */ "react-svg");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_widgets_lib_DateTimePicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-widgets/lib/DateTimePicker */ "react-widgets/lib/DateTimePicker");
/* harmony import */ var react_widgets_lib_DateTimePicker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_widgets_lib_DateTimePicker__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_events_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/events.js */ "./assets/events.js");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Footer.js */ "./components/Footer.js");
/* harmony import */ var _components_Dailies_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Dailies.js */ "./components/Dailies.js");
/* harmony import */ var _components_ScoreIcon_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ScoreIcon.js */ "./components/ScoreIcon.js");
/* harmony import */ var _assets_img_score_icon_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/img/score_icon.svg */ "./assets/img/score_icon.svg");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_css_custEvents_module_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/css/custEvents.module.css */ "./assets/css/custEvents.module.css");
/* harmony import */ var _assets_css_custEvents_module_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_css_custEvents_module_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/css/main.module.css */ "./assets/css/main.module.css");
/* harmony import */ var _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_css_rbc_module_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/css/rbc.module.css */ "./assets/css/rbc.module.css");
/* harmony import */ var _assets_css_rbc_module_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_css_rbc_module_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_styles_shadows__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/styles/shadows */ "@material-ui/core/styles/shadows");
/* harmony import */ var _material_ui_core_styles_shadows__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_shadows__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/colors/amber */ "@material-ui/core/colors/amber");
/* harmony import */ var _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _assets_Helpers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/Helpers */ "./assets/Helpers.js");
var _jsxFileName = "C:\\Users\\Hassan\\Documents\\Projects\\AnimeCalendar\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 //import  { useState } from 'react';


 //import React, { useState, useEffect } from "react";
//import DatePicker from 'react-datepicker';

 //My Components





 //import calIcon from '../assets/img/calIcon.png'




 //My Styles







moment__WEBPACK_IMPORTED_MODULE_4___default.a.locale('en');
react_widgets_moment__WEBPACK_IMPORTED_MODULE_3___default()();
const localizer = Object(react_big_calendar__WEBPACK_IMPORTED_MODULE_2__["momentLocalizer"])(moment__WEBPACK_IMPORTED_MODULE_4___default.a);
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    width: '235px',
    //Width of MAL images
    height: '430px',
    position: "absolute",
    overflow: "hidden",
    padding: theme.spacing(0.6),
    pointerEvents: 'auto',
    fontFamily: 'Dosis',
    fontSize: '15px'
  },
  darkbg: {
    width: '235px',
    //Width of MAL images
    height: '430px',
    position: "absolute",
    overflow: "hidden",
    padding: theme.spacing(0.6),
    pointerEvents: 'auto',
    fontFamily: 'Dosis',
    fontSize: '15px',
    background: '#2f3136',
    color: '#f2f3f5'
  }
}));

const MyCalendar = props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    isDark: false
  });
  const {
    0: currDate,
    1: setCurrDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date());
  const {
    0: hasError,
    1: setErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    anime: []
  });

  const handleChange = event => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      [event.target.name]: event.target.checked
    }));
  };

  var year = currDate.getFullYear();
  var month = currDate.getMonth() + 1;
  var animeArr;
  var textTheme = state.isDark ? 'dark-text' : 'light-text';
  var bgTheme = state.isDark ? 'dark-bg' : 'light-bg';
  console.log(year);
  console.log(month);

  async function fetchData() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://api.jikan.moe/v3/season/${year}/${Object(_assets_Helpers__WEBPACK_IMPORTED_MODULE_25__["getSeason"])(month)}`); //const res = await fetch(`https://api.jikan.moe/v3/season/archive`);

    res.json().then(res => setData(res)).catch(err => setErrors(err));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchData();
  }, []);
  animeArr = data.anime.map(anime => {
    return {
      title: anime.title,
      url: anime.url,
      desc: anime.synopsis,
      start: anime.airing_start,
      end: anime.airing_start,
      image: anime.image_url,
      score: anime.score,
      genres: anime.genres
    };
  });

  function getCustomToolbar(toolbar) {
    const goToBack = () => {
      let mDate = toolbar.date;
      let newDate = new Date(mDate.getFullYear(), mDate.getMonth() - 1, 1);
      toolbar.onNavigate('prev', newDate);
      fetchData();
      setCurrDate(newDate);
    };

    const goToNext = () => {
      let mDate = toolbar.date;
      let newDate = new Date(mDate.getFullYear(), mDate.getMonth() + 1, 1);
      toolbar.onNavigate('next', newDate);
      console.log(newDate.getMonth() + 1);
      fetchData();
      setCurrDate(newDate);
    };

    const goToCurrent = () => {
      const now = new Date();
      toolbar.date.setMonth(now.getMonth());
      toolbar.date.setYear(now.getFullYear());
      toolbar.onNavigate('current');
      fetchData();
      setCurrDate(now);
    };

    const datePicker = date => {
      //toolbar.onNavigate(date);
      setCurrDate(date);
      fetchData();
    }; // const monthLabel = () => {
    //   const date = moment(setCurrDate(toolbar.date));
    //   return (
    //     <span className={textTheme}><b>{date.format('MMMM')}</b><span> {date.format('YYYY')}</span></span>
    //   );
    // };
    //const [startDate, setStartDate] = useState(new Date());


    const CustomCalendarIcon = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(({
      onClick
    }, ref) => __jsx("div", {
      ref: ref,
      onClick: onClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "./calIcon.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }
    })));
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "text-center align-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "rbc-toolbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "rbc-btn-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }
    }, __jsx("button", {
      className: bgTheme,
      type: "button",
      onClick: goToBack,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "prev-icon " + textTheme,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }
    }, "\u2039")), __jsx("button", {
      className: bgTheme,
      type: "button",
      onClick: goToCurrent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "next-icon " + textTheme,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }
    }, "Today")), __jsx("button", {
      className: bgTheme,
      type: "button",
      onClick: goToNext,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "next-icon " + textTheme,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }
    }, "\u203A")))), __jsx("div", {
      className: "rbc-btn-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 11
      }
    }, __jsx(react_widgets_lib_DateTimePicker__WEBPACK_IMPORTED_MODULE_10___default.a, {
      containerClassName: "rw-btn" //dateIcon={CustomCalendarIcon}
      ,
      time: false,
      value: currDate,
      defaultView: "year",
      views: ['year'],
      onChange: value => datePicker(value),
      format: "MMMM YYYY",
      footer: false // css={{ cursor: 'pointer', color:'blue' }}
      ,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 15
      }
    }))));
  }

  ; //Move this into 'components'?

  function EventPop(event) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

    const handlePopoverOpen = event => {
      setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 9
      }
    }, __jsx("div", {
      onMouseEnter: handlePopoverOpen,
      onMouseLeave: handlePopoverClose,
      "aria-controls": "simple-menu",
      "aria-haspopup": true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 11
      }
    }, event.title), __jsx(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.popover,
      classes: state.isDark ? {
        paper: classes.darkbg
      } : {
        paper: classes.paper
      },
      open: open,
      anchorEl: anchorEl,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left'
      },
      disableRestoreFocus: true // onClick={handlePopoverClose}
      // onMouseLeave={handlePopoverClose}
      ,
      PaperProps: {
        onMouseEnter: handlePopoverOpen,
        onMouseLeave: handlePopoverClose
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.titleContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: state.isDark ? _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.title : null,
      href: event.event.url,
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 17
      }
    }, event.title)), __jsx("div", {
      className: _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.genres,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 15
      }
    }, event.event.genres.slice(0, 3).map(genre => __jsx("li", {
      key: genre.mal_id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 19
      }
    }, genre.name))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 15
      }
    }, __jsx(_components_ScoreIcon_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      score: event.event.score,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 17
      }
    }), event.event.score), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.bind,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: event.event.image,
      alt: event.title,
      className: _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.blur,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.screen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.description,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 17
      }
    }, event.event.desc))))));
  }

  ;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `${_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.bgc} ${state.isDark ? _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.light : null}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 7
    }
  }, __jsx(_components_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isDark: state.isDark,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "grid-x text-center align-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 11
    }
  }, __jsx("h4", {
    style: {
      fontFamily: 'Dosis'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 13
    }
  }, "Released Today"), __jsx(_components_Dailies_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    currYear: year,
    currMonth: month,
    isDark: state.isDark,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 13
    }
  }))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "grid-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 9
    }
  }, __jsx(react_big_calendar__WEBPACK_IMPORTED_MODULE_2__["Calendar"], {
    style: {
      height: 650
    },
    tooltipAccessor: null,
    popup: true,
    localizer: localizer,
    events: animeArr //events={events}
    ,
    startAccessor: "start",
    endAccessor: "end",
    date: currDate,
    onNavigate: date => setCurrDate(date),
    defaultDate: moment__WEBPACK_IMPORTED_MODULE_4___default()().toDate(),
    eventPropGetter: (event, start, end, isSelected) => {
      var newStyle = {
        backgroundColor: 'rgba(31, 125, 247, 0.7)'
      };

      if (state.isDark) {
        newStyle.backgroundColor = 'rgba(175, 16, 43, 0.89)';
      }

      ;
      return {
        style: newStyle
      };
    },
    dayPropGetter: (event, start, end, isSelected) => {
      var newStyle = {
        backgroundColor: 'rgba(255,255,255)'
      };

      if (state.isDark) {
        newStyle.backgroundColor = '#36393f';
      }

      ;
      return {
        style: newStyle
      };
    },
    components: {
      event: EventPop,
      //event: EventAgenda,
      toolbar: getCustomToolbar
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 11
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 9
    }
  }), __jsx(_components_Footer_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    isDark: state.isDark,
    name: "isDark",
    change: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MyCalendar);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hassan\Documents\Projects\AnimeCalendar\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/FormGroup":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormGroup" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "@material-ui/core/Popover":
/*!********************************************!*\
  !*** external "@material-ui/core/Popover" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/colors/amber":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/amber" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/amber");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/shadows":
/*!***************************************************!*\
  !*** external "@material-ui/core/styles/shadows" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/shadows");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-big-calendar":
/*!*************************************!*\
  !*** external "react-big-calendar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-big-calendar");

/***/ }),

/***/ "react-svg":
/*!****************************!*\
  !*** external "react-svg" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-svg");

/***/ }),

/***/ "react-widgets-moment":
/*!***************************************!*\
  !*** external "react-widgets-moment" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-widgets-moment");

/***/ }),

/***/ "react-widgets/lib/DateTimePicker":
/*!***************************************************!*\
  !*** external "react-widgets/lib/DateTimePicker" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-widgets/lib/DateTimePicker");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9jdXN0RXZlbnRzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9kYWlsaWVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9mb290ZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2hlYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvbWFpbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvcmJjLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL3Njb3JlX2ljb24uc3ZnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFpbGllcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Njb3JlSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2FtYmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3NoYWRvd3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJpZy1jYWxlbmRhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN2Z1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXdpZGdldHMtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtd2lkZ2V0cy9saWIvRGF0ZVRpbWVQaWNrZXJcIiJdLCJuYW1lcyI6WyJnZXRTZWFzb24iLCJtb250aCIsInNlYXNvbiIsImlkIiwidGl0bGUiLCJzdGFydCIsIkRhdGUiLCJlbmQiLCJEYWlsaWVzIiwicHJvcHMiLCJoYXNFcnJvciIsInNldEVycm9ycyIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJhbmltZSIsInRvZGF5IiwiZGFpbHlBcnIiLCJmZXRjaERhdGEiLCJyZXMiLCJmZXRjaCIsImN1cnJZZWFyIiwiY3Vyck1vbnRoIiwianNvbiIsInRoZW4iLCJjYXRjaCIsImVyciIsInVzZUVmZmVjdCIsImZvcm1hdERhdGUiLCJkYXRlIiwibmV3RGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImZpbHRlciIsImFpcmluZ19zdGFydCIsIm1hcCIsImxlbmd0aCIsInN0eWxlcyIsImFsdG1zZyIsImNvbnNvbGUiLCJsb2ciLCJub0J1bGxldCIsIm1hbF9pZCIsImZvcm1hdExpc3QiLCJjYXJkZGltZW5zaW9uIiwiaXNEYXJrIiwiY29sb3IiLCJ1cmwiLCJpbWFnZV91cmwiLCJoZWlnaHQiLCJ3aWR0aCIsIkZvb3RlciIsIlRoZW1lU3dpdGNoIiwid2l0aFN0eWxlcyIsInN3aXRjaEJhc2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGVja2VkIiwidHJhY2siLCJTd2l0Y2giLCJmb290ZXJiZ2MiLCJjaGFuZ2UiLCJuYW1lIiwiY29weXJpZ2h0IiwibGlua1N0eWxlIiwibWFyZ2luUmlnaHQiLCJIZWFkZXIiLCJkYXJrYmciLCJsaWdodGJnIiwiYmdjIiwiaW1hZ2UiLCJ2aXNpYmlsaXR5IiwiaGVhZGVyIiwiU2NvcmVJY29uIiwic2NvcmVDb2xvciIsInN0cm9rZUNvbG9yIiwib3BhY2l0eUx2bCIsInNjb3JlIiwibG9jYWxlIiwid2lkZ2V0TW9tZW50TG9jYWxpemVyIiwibG9jYWxpemVyIiwibW9tZW50TG9jYWxpemVyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicG9wb3ZlciIsInBvaW50ZXJFdmVudHMiLCJwYXBlciIsInBvc2l0aW9uIiwib3ZlcmZsb3ciLCJwYWRkaW5nIiwic3BhY2luZyIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImJhY2tncm91bmQiLCJNeUNhbGVuZGFyIiwic3RhdGUiLCJzZXRTdGF0ZSIsImN1cnJEYXRlIiwic2V0Q3VyckRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInllYXIiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiYW5pbWVBcnIiLCJ0ZXh0VGhlbWUiLCJiZ1RoZW1lIiwiZGVzYyIsInN5bm9wc2lzIiwiZ2VucmVzIiwiZ2V0Q3VzdG9tVG9vbGJhciIsInRvb2xiYXIiLCJnb1RvQmFjayIsIm1EYXRlIiwib25OYXZpZ2F0ZSIsImdvVG9OZXh0IiwiZ29Ub0N1cnJlbnQiLCJub3ciLCJzZXRNb250aCIsInNldFllYXIiLCJkYXRlUGlja2VyIiwiQ3VzdG9tQ2FsZW5kYXJJY29uIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwib25DbGljayIsInJlZiIsInZhbHVlIiwiRXZlbnRQb3AiLCJjbGFzc2VzIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImhhbmRsZVBvcG92ZXJPcGVuIiwiY3VycmVudFRhcmdldCIsImhhbmRsZVBvcG92ZXJDbG9zZSIsIm9wZW4iLCJCb29sZWFuIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwidGl0bGVDb250YWluZXIiLCJzbGljZSIsImdlbnJlIiwiYmluZCIsImJsdXIiLCJzY3JlZW4iLCJkZXNjcmlwdGlvbiIsImxpZ2h0IiwidG9EYXRlIiwiaXNTZWxlY3RlZCIsIm5ld1N0eWxlIiwic3R5bGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVB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Qzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw2RCIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJmdW5jdGlvbiBnZXRTZWFzb24obW9udGgpXHJcbntcclxuICAgIHZhciBzZWFzb249Jyc7XHJcbiAgICBpZihtb250aD09MXx8bW9udGg9PTJ8fG1vbnRoPT0zKVxyXG4gICAge1xyXG4gICAgICAgIHNlYXNvbj0gJ3dpbnRlcic7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKG1vbnRoPT00IHx8IG1vbnRoPT01fHxtb250aD09NilcclxuICAgIHtcclxuICAgICAgICBzZWFzb249ICdzcHJpbmcnO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihtb250aD09N3x8bW9udGg9PTh8fG1vbnRoPT05KVxyXG4gICAge1xyXG4gICAgICAgIHNlYXNvbj0gJ3N1bW1lcic7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKG1vbnRoPT0xMHx8bW9udGg9PTExfHxtb250aD09MTIpXHJcbiAgICB7XHJcbiAgICAgICAgc2Vhc29uPSAnZmFsbCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2Vhc29uO1xyXG5cclxufVxyXG5leHBvcnQgeyBnZXRTZWFzb24gfSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpZ2h0XCI6IFwiY3VzdEV2ZW50c19saWdodF9fM3haZ0FcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRhcmtcIjogXCJkYWlsaWVzX2RhcmtfXzFUTlJnXCIsXG5cdFwicmJjLWV2ZW50XCI6IFwiZGFpbGllc19yYmMtZXZlbnRfXzJONmctXCIsXG5cdFwibm9CdWxsZXRcIjogXCJkYWlsaWVzX25vQnVsbGV0X18zbzB3MFwiLFxuXHRcImFsdG1zZ1wiOiBcImRhaWxpZXNfYWx0bXNnX18yRXFsZ1wiLFxuXHRcImZvcm1hdExpc3RcIjogXCJkYWlsaWVzX2Zvcm1hdExpc3RfXzJNTzdfXCIsXG5cdFwiY2FyZGRpbWVuc2lvblwiOiBcImRhaWxpZXNfY2FyZGRpbWVuc2lvbl9fMzhzVVBcIixcblx0XCJ0aXRsZVwiOiBcImRhaWxpZXNfdGl0bGVfXzIzTHFBXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkYXJrXCI6IFwiZm9vdGVyX2RhcmtfXzFOc2tyXCIsXG5cdFwicmJjLWV2ZW50XCI6IFwiZm9vdGVyX3JiYy1ldmVudF9fMXkzLUFcIixcblx0XCJmb290ZXJiZ2NcIjogXCJmb290ZXJfZm9vdGVyYmdjX18zb3pSUlwiLFxuXHRcImNvcHlyaWdodFwiOiBcImZvb3Rlcl9jb3B5cmlnaHRfXzNxblozXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkYXJrXCI6IFwiaGVhZGVyX2RhcmtfXzVDSTFHXCIsXG5cdFwicmJjLWV2ZW50XCI6IFwiaGVhZGVyX3JiYy1ldmVudF9fM0NMTGxcIixcblx0XCJoZWFkZXJcIjogXCJoZWFkZXJfaGVhZGVyX19rQXk4RlwiLFxuXHRcImltYWdlXCI6IFwiaGVhZGVyX2ltYWdlX19SYnM5V1wiLFxuXHRcImxpZ2h0YmdcIjogXCJoZWFkZXJfbGlnaHRiZ19fM1dFYXJcIixcblx0XCJkYXJrYmdcIjogXCJoZWFkZXJfZGFya2JnX18ybVdQZ1wiLFxuXHRcImJnY1wiOiBcImhlYWRlcl9iZ2NfXzJ2Y3hZXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkYXJrXCI6IFwibWFpbl9kYXJrX18yci1RM1wiLFxuXHRcInJiYy1ldmVudFwiOiBcIm1haW5fcmJjLWV2ZW50X18xb3U4NlwiLFxuXHRcInRpdGxlQ29udGFpbmVyXCI6IFwibWFpbl90aXRsZUNvbnRhaW5lcl9fU19mUm5cIixcblx0XCJ0aXRsZVwiOiBcIm1haW5fdGl0bGVfXzJIbmliXCIsXG5cdFwiZ2VucmVzXCI6IFwibWFpbl9nZW5yZXNfXzFXbDZKXCIsXG5cdFwidGVzdFwiOiBcIm1haW5fdGVzdF9fVERERzJcIixcblx0XCJiZ2NcIjogXCJtYWluX2JnY19fMzZNLWhcIixcblx0XCJiaW5kXCI6IFwibWFpbl9iaW5kX18yZUpwelwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwibWFpbl9kZXNjcmlwdGlvbl9fMUdmLUNcIixcblx0XCJibHVyXCI6IFwibWFpbl9ibHVyX19HSFVNTFwiLFxuXHRcInNjcmVlblwiOiBcIm1haW5fc2NyZWVuX18xN01WU1wiLFxuXHRcImxpZ2h0XCI6IFwibWFpbl9saWdodF9fMUFVYmVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJiYy1idG5cIjogXCJyYmNfcmJjLWJ0bl9fM2tjaUNcIixcblx0XCJyYmMtaW5wdXRcIjogXCJyYmNfcmJjLWlucHV0X18zYVpCZ1wiLFxuXHRcImRhcmstYmdcIjogXCJyYmNfZGFyay1iZ19fM04wSmpcIixcblx0XCJsaWdodC1iZ1wiOiBcInJiY19saWdodC1iZ19fRW1hSUlcIixcblx0XCJkYXJrLXRleHRcIjogXCJyYmNfZGFyay10ZXh0X19ESHBSbVwiLFxuXHRcImxpZ2h0LXRleHRcIjogXCJyYmNfbGlnaHQtdGV4dF9fQ21kVGJcIixcblx0XCJyYmMtY2FsZW5kYXJcIjogXCJyYmNfcmJjLWNhbGVuZGFyX18xdW5HMFwiLFxuXHRcInJiYy1hYnMtZnVsbFwiOiBcInJiY19yYmMtYWJzLWZ1bGxfXzF0bkV4XCIsXG5cdFwicmJjLXJvdy1iZ1wiOiBcInJiY19yYmMtcm93LWJnX18yc0t3YVwiLFxuXHRcInJiYy1lbGxpcHNpc1wiOiBcInJiY19yYmMtZWxsaXBzaXNfXzN2S2VQXCIsXG5cdFwicmJjLWV2ZW50LWxhYmVsXCI6IFwicmJjX3JiYy1ldmVudC1sYWJlbF9fMTlfb3pcIixcblx0XCJyYmMtcm93LXNlZ21lbnRcIjogXCJyYmNfcmJjLXJvdy1zZWdtZW50X19RaEFzc1wiLFxuXHRcInJiYy1ldmVudC1jb250ZW50XCI6IFwicmJjX3JiYy1ldmVudC1jb250ZW50X19nM0tyRVwiLFxuXHRcInJiYy1zaG93LW1vcmVcIjogXCJyYmNfcmJjLXNob3ctbW9yZV9fMm81MGVcIixcblx0XCJyYmMtcnRsXCI6IFwicmJjX3JiYy1ydGxfXzFXNE5pXCIsXG5cdFwicmJjLW9mZi1yYW5nZVwiOiBcInJiY19yYmMtb2ZmLXJhbmdlX18xNGVvUlwiLFxuXHRcInJiYy1vZmYtcmFuZ2UtYmdcIjogXCJyYmNfcmJjLW9mZi1yYW5nZS1iZ19fMXJCRzlcIixcblx0XCJyYmMtaGVhZGVyXCI6IFwicmJjX3JiYy1oZWFkZXJfXzNPM0x1XCIsXG5cdFwicmJjLXJvdy1jb250ZW50XCI6IFwicmJjX3JiYy1yb3ctY29udGVudF9fMXZnT0ZcIixcblx0XCJyYmMtdG9kYXlcIjogXCJyYmNfcmJjLXRvZGF5X191UVRJelwiLFxuXHRcInJiYy10b29sYmFyXCI6IFwicmJjX3JiYy10b29sYmFyX19qSzU4WVwiLFxuXHRcInJiYy10b29sYmFyLWxhYmVsXCI6IFwicmJjX3JiYy10b29sYmFyLWxhYmVsX18zU3NNMVwiLFxuXHRcInJiYy1idG4tZ3JvdXBcIjogXCJyYmNfcmJjLWJ0bi1ncm91cF9fMWlWOUlcIixcblx0XCJyYmMtZXZlbnRcIjogXCJyYmNfcmJjLWV2ZW50X18zUFpnSVwiLFxuXHRcInJiYy1zbG90LXNlbGVjdGluZ1wiOiBcInJiY19yYmMtc2xvdC1zZWxlY3RpbmdfX2JCZTRKXCIsXG5cdFwicmJjLWV2ZW50LW92ZXJsYXBzXCI6IFwicmJjX3JiYy1ldmVudC1vdmVybGFwc19fMkdwMWtcIixcblx0XCJyYmMtZXZlbnQtY29udGludWVzLXByaW9yXCI6IFwicmJjX3JiYy1ldmVudC1jb250aW51ZXMtcHJpb3JfXzJKY1JEXCIsXG5cdFwicmJjLWV2ZW50LWNvbnRpbnVlcy1hZnRlclwiOiBcInJiY19yYmMtZXZlbnQtY29udGludWVzLWFmdGVyX18yQmtXMlwiLFxuXHRcInJiYy1ldmVudC1jb250aW51ZXMtZWFybGllclwiOiBcInJiY19yYmMtZXZlbnQtY29udGludWVzLWVhcmxpZXJfX09tbjZwXCIsXG5cdFwicmJjLWV2ZW50LWNvbnRpbnVlcy1sYXRlclwiOiBcInJiY19yYmMtZXZlbnQtY29udGludWVzLWxhdGVyX19IVktKVlwiLFxuXHRcInJiYy1yb3dcIjogXCJyYmNfcmJjLXJvd19fMTlMRkJcIixcblx0XCJyYmMtc2VsZWN0ZWQtY2VsbFwiOiBcInJiY19yYmMtc2VsZWN0ZWQtY2VsbF9fUFNfd2hcIixcblx0XCJyYmMtbW9udGgtdmlld1wiOiBcInJiY19yYmMtbW9udGgtdmlld19fMUFzNkZcIixcblx0XCJyYmMtbW9udGgtaGVhZGVyXCI6IFwicmJjX3JiYy1tb250aC1oZWFkZXJfX2R6Q1FUXCIsXG5cdFwicmJjLW1vbnRoLXJvd1wiOiBcInJiY19yYmMtbW9udGgtcm93X18zeWRzQ1wiLFxuXHRcInJiYy1kYXRlLWNlbGxcIjogXCJyYmNfcmJjLWRhdGUtY2VsbF9fMmRsLWVcIixcblx0XCJyYmMtbm93XCI6IFwicmJjX3JiYy1ub3dfXzFxLTRSXCIsXG5cdFwicmJjLWRheS1iZ1wiOiBcInJiY19yYmMtZGF5LWJnX18xX1pvQlwiLFxuXHRcInJiYy1vdmVybGF5XCI6IFwicmJjX3JiYy1vdmVybGF5X18zSk1KMlwiLFxuXHRcInJiYy1vdmVybGF5LWhlYWRlclwiOiBcInJiY19yYmMtb3ZlcmxheS1oZWFkZXJfXzI2QkNVXCIsXG5cdFwicmJjLWFnZW5kYS12aWV3XCI6IFwicmJjX3JiYy1hZ2VuZGEtdmlld19fMU1vSlFcIixcblx0XCJyYmMtYWdlbmRhLXRhYmxlXCI6IFwicmJjX3JiYy1hZ2VuZGEtdGFibGVfXzFqZnRRXCIsXG5cdFwicmJjLWFnZW5kYS10aW1lLWNlbGxcIjogXCJyYmNfcmJjLWFnZW5kYS10aW1lLWNlbGxfXzJRY2VEXCIsXG5cdFwicmJjLWNvbnRpbnVlcy1hZnRlclwiOiBcInJiY19yYmMtY29udGludWVzLWFmdGVyX18yMUM2TlwiLFxuXHRcInJiYy1jb250aW51ZXMtcHJpb3JcIjogXCJyYmNfcmJjLWNvbnRpbnVlcy1wcmlvcl9fR3J6TWNcIixcblx0XCJyYmMtYWdlbmRhLWRhdGUtY2VsbFwiOiBcInJiY19yYmMtYWdlbmRhLWRhdGUtY2VsbF9fMm5vaHJcIixcblx0XCJyYmMtYWdlbmRhLWV2ZW50LWNlbGxcIjogXCJyYmNfcmJjLWFnZW5kYS1ldmVudC1jZWxsX19kRl9iV1wiLFxuXHRcInJiYy10aW1lLWNvbHVtblwiOiBcInJiY19yYmMtdGltZS1jb2x1bW5fX0Y2NmZnXCIsXG5cdFwicmJjLXRpbWVzbG90LWdyb3VwXCI6IFwicmJjX3JiYy10aW1lc2xvdC1ncm91cF9fMzBGMnhcIixcblx0XCJyYmMtdGltZS1ndXR0ZXJcIjogXCJyYmNfcmJjLXRpbWUtZ3V0dGVyX18zbUJCelwiLFxuXHRcInJiYy1oZWFkZXItZ3V0dGVyXCI6IFwicmJjX3JiYy1oZWFkZXItZ3V0dGVyX18xNngxT1wiLFxuXHRcInJiYy1sYWJlbFwiOiBcInJiY19yYmMtbGFiZWxfXzNqMXc2XCIsXG5cdFwicmJjLWRheS1zbG90XCI6IFwicmJjX3JiYy1kYXktc2xvdF9fMUg3aDFcIixcblx0XCJyYmMtZXZlbnRzLWNvbnRhaW5lclwiOiBcInJiY19yYmMtZXZlbnRzLWNvbnRhaW5lcl9fMS1DSmxcIixcblx0XCJyYmMtdGltZS1zbG90XCI6IFwicmJjX3JiYy10aW1lLXNsb3RfXzJiRloyXCIsXG5cdFwicmJjLXRpbWUtdmlldy1yZXNvdXJjZXNcIjogXCJyYmNfcmJjLXRpbWUtdmlldy1yZXNvdXJjZXNfXzZWcmhlXCIsXG5cdFwicmJjLXRpbWUtaGVhZGVyLWd1dHRlclwiOiBcInJiY19yYmMtdGltZS1oZWFkZXItZ3V0dGVyX18xemRWU1wiLFxuXHRcInJiYy10aW1lLWhlYWRlclwiOiBcInJiY19yYmMtdGltZS1oZWFkZXJfXzNSbG55XCIsXG5cdFwicmJjLXRpbWUtaGVhZGVyLWNvbnRlbnRcIjogXCJyYmNfcmJjLXRpbWUtaGVhZGVyLWNvbnRlbnRfXzFqNXhsXCIsXG5cdFwicmJjLXRpbWUtaGVhZGVyLWNlbGwtc2luZ2xlLWRheVwiOiBcInJiY19yYmMtdGltZS1oZWFkZXItY2VsbC1zaW5nbGUtZGF5X18yNko1WlwiLFxuXHRcInJiYy1kYXktaGVhZGVyXCI6IFwicmJjX3JiYy1kYXktaGVhZGVyX18xYXc1c1wiLFxuXHRcInJiYy1zbG90LXNlbGVjdGlvblwiOiBcInJiY19yYmMtc2xvdC1zZWxlY3Rpb25fXzJ2Ti1CXCIsXG5cdFwicmJjLXRpbWUtdmlld1wiOiBcInJiY19yYmMtdGltZS12aWV3X194bEoxLVwiLFxuXHRcInJiYy1hbGxkYXktY2VsbFwiOiBcInJiY19yYmMtYWxsZGF5LWNlbGxfX2NGVWFMXCIsXG5cdFwicmJjLWFsbGRheS1ldmVudHNcIjogXCJyYmNfcmJjLWFsbGRheS1ldmVudHNfXzMxOTFxXCIsXG5cdFwicmJjLW92ZXJmbG93aW5nXCI6IFwicmJjX3JiYy1vdmVyZmxvd2luZ19faU1wcjlcIixcblx0XCJyYmMtcm93LXJlc291cmNlXCI6IFwicmJjX3JiYy1yb3ctcmVzb3VyY2VfX19YU3AzXCIsXG5cdFwicmJjLXRpbWUtY29udGVudFwiOiBcInJiY19yYmMtdGltZS1jb250ZW50X18xaGtQN1wiLFxuXHRcInJiYy1jdXJyZW50LXRpbWUtaW5kaWNhdG9yXCI6IFwicmJjX3JiYy1jdXJyZW50LXRpbWUtaW5kaWNhdG9yX18ybUxBY1wiXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICAgIGlkOjAsdGl0bGU6J3Rlc3QnLCBzdGFydDogbmV3IERhdGUoKSwgZW5kOiBuZXcgRGF0ZSgpXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjEsJ3RpdGxlJzondGVzdDInLCAnc3RhcnQnOiBuZXcgRGF0ZSgyMDIwLDYsMTYpLCAnZW5kJzogbmV3IERhdGUoMjAyMCw2LDE2KVxyXG4gICAgfVxyXG5dIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnZhciBfcmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgY2xhc3NOYW1lOiBcInNjb3JlX2ljb25fc3ZnX19sYXllclwiXG59LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBmaWxsOiBcIiNmZmZcIixcbiAgb3BhY2l0eTogMC4zLFxuICBzdHJva2U6IFwiIzAwMFwiLFxuICBkOiBcIk04IDIuOTQ0bDEuOTU3IDQuNTYzIDUuMDEuNDI0LTMuOCAzLjI0NEwxMi4zMDYgMTYgOCAxMy40NDIgMy42OTQgMTZsMS4xNC00LjgyNS0zLjgtMy4yNDQgNS4wMDktLjQyNEw4IDIuOTQ0bDEuOTU3IDQuNTYzelwiXG59KSk7XG5cbmZ1bmN0aW9uIFN2Z1Njb3JlSWNvbihwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAxNixcbiAgICBoZWlnaHQ6IDE2XG4gIH0sIHByb3BzKSwgX3JlZik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1Njb3JlSWNvbjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vYXNzZXRzL2Nzcy9kYWlsaWVzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7Z2V0U2Vhc29ufSBmcm9tICcuLi9hc3NldHMvSGVscGVycy5qcyc7XHJcbmNvbnN0IERhaWxpZXMgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtoYXNFcnJvciwgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHsgYW5pbWU6IFtdIH0pO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIHZhciBkYWlseUFycjtcclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5qaWthbi5tb2UvdjMvc2Vhc29uLyR7cHJvcHMuY3VyclllYXJ9LyR7Z2V0U2Vhc29uKHByb3BzLmN1cnJNb250aCl9YCk7XHJcbiAgICAgICAgcmVzXHJcbiAgICAgICAgICAgIC5qc29uKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHNldERhdGEocmVzKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBzZXRFcnJvcnMoZXJyKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4gICAgICAgIHZhciBuZXdEYXRlID0gbmV3IG1vbWVudChkYXRlKTtcclxuICAgICAgICByZXR1cm4gbmV3RGF0ZS5mb3JtYXQoJ01NL0REL1lZWVknKTtcclxuICAgIH1cclxuXHJcbiAgICBkYWlseUFyciA9IGRhdGEuYW5pbWUuZmlsdGVyKGFuaW1lID0+IHtcclxuICAgICAgICBpZiAoZm9ybWF0RGF0ZShhbmltZS5haXJpbmdfc3RhcnQpICE9PSBmb3JtYXREYXRlKHRvZGF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSkubWFwKGFuaW1lID0+IHsgcmV0dXJuIGFuaW1lIH0pO1xyXG5cclxuICAgIGlmIChkYWlseUFyci5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsdG1zZ30+Kk5vIGFuaW1lIHJlbGVhc2VkIHRvZGF5IDooPC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coZGFpbHlBcnIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiA8cD57ZGF0YUFyclswXS50aXRsZX08LyBwPiAqL31cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm5vQnVsbGV0fT5cclxuICAgICAgICAgICAgICAgIHtkYWlseUFyci5tYXAoYW5pbWUgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXthbmltZS5tYWxfaWR9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1hdExpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRkaW1lbnNpb24gKyBcIiBjYXJkXCJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3Byb3BzLmlzRGFyaz97Y29sb3I6J3doaXRlJ306bnVsbH1ocmVmPXthbmltZS51cmx9ID57YW5pbWUudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YW5pbWUuaW1hZ2VfdXJsfSBzdHlsZT17e2hlaWdodDonMjEycHgnLHdpZHRoOicxNTBweCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhaWxpZXM7IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9hc3NldHMvY3NzL2Zvb3Rlci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xyXG5pbXBvcnQge3dpdGhTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3Rlcihwcm9wcyl7XHJcbiAgICBjb25zdCBUaGVtZVN3aXRjaCA9IHdpdGhTdHlsZXMoe1xyXG4gICAgICAgIHN3aXRjaEJhc2U6IHtcclxuICAgICAgICAgICAgY29sb3I6ICdyZ2IoNzgsIDEyMywgMTgyKScsXHJcbiAgICAgICAgICAgICcmJGNoZWNrZWQnOiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjA2LCA1NywgODIpJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYkY2hlY2tlZCArICR0cmFjayc6IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNoZWNrZWQ6IHt9LFxyXG4gICAgICAgICAgdHJhY2s6IHtiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJ30sXHJcbiAgICAgICAgXHJcbiAgICB9KShTd2l0Y2gpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyYmdjICsgXCIgZ3JpZC1jb250YWluZXJcIn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQteFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGVtZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRoZW1lU3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtwcm9wcy5pc0Rhcmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnc2Vjb25kYXJ5IGNoZWNrYm94JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQteCBhbGlnbi1zZWxmLWNlbnRlciBzbWFsbC01IHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjZWxsIFwiK3N0eWxlcy5jb3B5cmlnaHR9ID5cclxuICAgICAgICAgICAgICAgICAgICAmY29weTsyMDIwIEgtTWFuLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9hc3NldHMvY3NzL2hlYWRlci5tb2R1bGUuY3NzJztcclxuXHJcblxyXG5jb25zdCBsaW5rU3R5bGUgPSB7XHJcbiAgbWFyZ2luUmlnaHQ6IDE1XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDw+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJvcHMuaXNEYXJrID8gc3R5bGVzLmRhcmtiZyA6IHN0eWxlcy5saWdodGJnfSAke3N0eWxlcy5iZ2MrXCIgYWxpZ24tY2VudGVyXCJ9YH0gPlxyXG5cclxuICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZSArIFwiIHRleHQtY2VudGVyXCJ9IHNyYz17cHJvcHMuaXNEYXJrID8gJy9LYWd1eWEucG5nJzonL0NoaWthLnBuZyd9IC8+ICovfVxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IHN0eWxlPXtwcm9wcy5pc0RhcmsgPyB7dmlzaWJpbGl0eTonaGlkZGVuJ306e3Zpc2liaWxpdHk6J3Zpc2libGUnfX0gc3JjPScvY2hpa2FSLnBuZycgLz5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0ZXh0LWNlbnRlciBcIiArIHN0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgPGgzPkFuaW1lIENhbGVuZGFyPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBzdHlsZT17cHJvcHMuaXNEYXJrID8ge3Zpc2liaWxpdHk6J3Zpc2libGUnfTp7dmlzaWJpbGl0eTonaGlkZGVuJ319ICBzcmM9Jy9LYWd1eWFSLnBuZycvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsIlxyXG5cclxuY29uc3QgU2NvcmVJY29uID0gKHByb3BzKSA9PiB7XHJcbiAgICB2YXIgc2NvcmVDb2xvcjtcclxuICAgIHZhciBzdHJva2VDb2xvcjtcclxuICAgIHZhciBvcGFjaXR5THZsID0gMTtcclxuICAgIFxyXG4gICAgaWYgKHByb3BzLnNjb3JlID49IDguNjYpIHtcclxuICAgICAgICBzY29yZUNvbG9yID0gJyNGRkQ3MDAnO1xyXG4gICAgfSBcclxuICAgIGVsc2UgaWYgKHByb3BzLnNjb3JlID49IDguMyAmJiBwcm9wcy5zY29yZSA8IDguNjYpIHtcclxuICAgICAgICBzY29yZUNvbG9yID0gJyNmMWYxZjEnO1xyXG4gICAgICAgIHN0cm9rZUNvbG9yID0gJyNlN2U3ZTcnO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJvcHMuc2NvcmUgPj0gNy43ICYmIHByb3BzLnNjb3JlIDwgOC4zKSB7XHJcbiAgICAgICAgc2NvcmVDb2xvciA9ICcjMDBmZjAwJztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByb3BzLnNjb3JlID49IDYuOCAmJiBwcm9wcy5zY29yZSA8IDcuNykge1xyXG4gICAgICAgIHNjb3JlQ29sb3IgPSAnI2ZmZDY5OSc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcm9wcy5zY29yZSA+PSA2ICYmIHByb3BzLnNjb3JlIDwgNi44KSB7XHJcbiAgICAgICAgc2NvcmVDb2xvciA9ICcjZmYwMDAwJztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByb3BzLnNjb3JlID49IDEgJiYgcHJvcHMuc2NvcmUgPCA2KSB7XHJcbiAgICAgICAgc2NvcmVDb2xvciA9ICcjODAwMDAwJztcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgc2NvcmVDb2xvciA9ICcjZmZmZmZmJ1xyXG4gICAgICAgIHN0cm9rZUNvbG9yID0gJyMwMDAwMDAnXHJcbiAgICAgICAgb3BhY2l0eUx2bCA9ICcwLjMnXHJcbiAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxnIGNsYXNzPVwibGF5ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBmaWxsPXtzY29yZUNvbG9yfSBpZD1cInN2Z18zMlwiIG9wYWNpdHk9e29wYWNpdHlMdmx9IHBvaW50cz1cIjgsMi45NDQ0MTIyMzE0NDUzMTI1IDkuOTU3MTAyNzc1NTczNzMsXHJcbiAgICAgICAgICAgICAgICAgICAgNy41MDc0NDEwNDM4NTM3NiAxNC45NjY2NDQyODcxMDkzNzUsNy45MzEyMTAwNDEwNDYxNDMgMTEuMTY2NjU0NTg2NzkxOTkyLDExLjE3NTA3ODM5MjAyODgwOSAxMi4zMDU2MjAxOTM0ODE0NDUsXHJcbiAgICAgICAgICAgICAgICAgICAgMTYgOCwxMy40NDE3OTM0NDE3NzI0NjEgMy42OTQzODAyODMzNTU3MTMsMTYgNC44MzMzNDU4OTAwNDUxNjYsMTEuMTc1MDc4MzkyMDI4ODA5IDEuMDMzMzU1NzEyODkwNjI1LFxyXG4gICAgICAgICAgICAgICAgICAgIDcuOTMxMjEwMDQxMDQ2MTQzIDYuMDQyODk4MTc4MTAwNTg2LDcuNTA3NDQxMDQzODUzNzYgOCwyLjk0NDQxMjIzMTQ0NTMxMjUgOS45NTcxMDI3NzU1NzM3Myw3LjUwNzQ0MTA0Mzg1Mzc2IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT17c3Ryb2tlQ29sb3J9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZXhwb3J0IGRlZmF1bHQgU2NvcmVJY29uOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgeyBDYWxlbmRhciwgbW9tZW50TG9jYWxpemVyIH0gZnJvbSAncmVhY3QtYmlnLWNhbGVuZGFyJ1xyXG5pbXBvcnQgd2lkZ2V0TW9tZW50TG9jYWxpemVyIGZyb20gJ3JlYWN0LXdpZGdldHMtbW9tZW50JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBQb3BvdmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xyXG5cclxuLy9pbXBvcnQgIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbi8vaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy9pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAncmVhY3Qtd2lkZ2V0cy9saWIvRGF0ZVRpbWVQaWNrZXInO1xyXG4vL015IENvbXBvbmVudHNcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9hc3NldHMvZXZlbnRzLmpzJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyLmpzJ1xyXG5pbXBvcnQgRGFpbGllcyBmcm9tICcuLi9jb21wb25lbnRzL0RhaWxpZXMuanMnXHJcbmltcG9ydCBTY29yZUljb24gZnJvbSAnLi4vY29tcG9uZW50cy9TY29yZUljb24uanMnXHJcbi8vaW1wb3J0IGNhbEljb24gZnJvbSAnLi4vYXNzZXRzL2ltZy9jYWxJY29uLnBuZydcclxuaW1wb3J0IEljb25TdmcgZnJvbSAnLi4vYXNzZXRzL2ltZy9zY29yZV9pY29uLnN2Zyc7XHJcbmltcG9ydCB7IHB1cnBsZSwgcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xyXG5pbXBvcnQgZXZlbnRTdHlsZXMgZnJvbSAnLi4vYXNzZXRzL2Nzcy9jdXN0RXZlbnRzLm1vZHVsZS5jc3MnXHJcbi8vTXkgU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vYXNzZXRzL2Nzcy9tYWluLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IEhpZGRlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IGNhbFN0eWxlcyBmcm9tICcuLi9hc3NldHMvY3NzL3JiYy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHNoYWRvd3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3NoYWRvd3MnO1xyXG5pbXBvcnQgY29sb3IgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2FtYmVyJztcclxuaW1wb3J0IHtnZXRTZWFzb259IGZyb20gJy4uL2Fzc2V0cy9IZWxwZXJzJztcclxuXHJcbm1vbWVudC5sb2NhbGUoJ2VuJyk7XHJcbndpZGdldE1vbWVudExvY2FsaXplcigpO1xyXG5jb25zdCBsb2NhbGl6ZXIgPSBtb21lbnRMb2NhbGl6ZXIobW9tZW50KTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBwb3BvdmVyOiB7XHJcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgd2lkdGg6ICcyMzVweCcsIC8vV2lkdGggb2YgTUFMIGltYWdlc1xyXG4gICAgaGVpZ2h0Oic0MzBweCcsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAuNiksXHJcbiAgICBwb2ludGVyRXZlbnRzOiAnYXV0bycsXHJcbiAgICBmb250RmFtaWx5OiAnRG9zaXMnLFxyXG4gICAgZm9udFNpemU6ICcxNXB4J1xyXG4gICAgXHJcbiAgfSxcclxuICBkYXJrYmc6e1xyXG4gICAgd2lkdGg6ICcyMzVweCcsIC8vV2lkdGggb2YgTUFMIGltYWdlc1xyXG4gICAgaGVpZ2h0Oic0MzBweCcsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAuNiksXHJcbiAgICBwb2ludGVyRXZlbnRzOiAnYXV0bycsXHJcbiAgICBmb250RmFtaWx5OiAnRG9zaXMnLFxyXG4gICAgZm9udFNpemU6ICcxNXB4JywgXHJcbiAgICBiYWNrZ3JvdW5kOiAnIzJmMzEzNicsXHJcbiAgICBjb2xvcjogJyNmMmYzZjUnXHJcbiAgfSxcclxuICBcclxufSkpXHJcblxyXG5jb25zdCBNeUNhbGVuZGFyID0gcHJvcHMgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe2lzRGFyazogZmFsc2V9KTtcclxuICBjb25zdCBbY3VyckRhdGUsIHNldEN1cnJEYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnN0IFtoYXNFcnJvciwgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7IGFuaW1lOiBbXSB9KTtcclxuICBcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC5jaGVja2VkIH0pO1xyXG4gIH07IFxyXG5cclxuICB2YXIgeWVhciA9IGN1cnJEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgdmFyIG1vbnRoID0gY3VyckRhdGUuZ2V0TW9udGgoKSsxO1xyXG4gIHZhciBhbmltZUFycjtcclxuICB2YXIgdGV4dFRoZW1lID0gc3RhdGUuaXNEYXJrID8gJ2RhcmstdGV4dCc6J2xpZ2h0LXRleHQnO1xyXG4gIHZhciBiZ1RoZW1lID0gc3RhdGUuaXNEYXJrID8gJ2RhcmstYmcnOidsaWdodC1iZyc7XHJcbiAgXHJcbiAgY29uc29sZS5sb2coeWVhcik7XHJcbiAgY29uc29sZS5sb2cobW9udGgpO1xyXG4gIFxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5qaWthbi5tb2UvdjMvc2Vhc29uLyR7eWVhcn0vJHtnZXRTZWFzb24obW9udGgpfWApO1xyXG4gICAgLy9jb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3NlYXNvbi9hcmNoaXZlYCk7XHJcbiAgICByZXNcclxuICAgICAgICAuanNvbigpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHNldERhdGEocmVzKSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHNldEVycm9ycyhlcnIpKTtcclxuXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBmZXRjaERhdGEoKTtcclxuXHJcbiAgfSwgW10pO1xyXG5cclxuICBhbmltZUFyciA9IGRhdGEuYW5pbWUubWFwKGFuaW1lID0+IHsgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0aXRsZTogYW5pbWUudGl0bGUsXHJcbiAgICAgICAgICAgIHVybDogYW5pbWUudXJsLFxyXG4gICAgICAgICAgICBkZXNjOiBhbmltZS5zeW5vcHNpcyxcclxuICAgICAgICAgICAgc3RhcnQ6IGFuaW1lLmFpcmluZ19zdGFydCxcclxuICAgICAgICAgICAgZW5kOiBhbmltZS5haXJpbmdfc3RhcnQsXHJcbiAgICAgICAgICAgIGltYWdlOiBhbmltZS5pbWFnZV91cmwsXHJcbiAgICAgICAgICAgIHNjb3JlOiBhbmltZS5zY29yZSxcclxuICAgICAgICAgICAgZ2VucmVzOiBhbmltZS5nZW5yZXNcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgfSk7XHJcbiAgZnVuY3Rpb24gZ2V0Q3VzdG9tVG9vbGJhcih0b29sYmFyKSB7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGdvVG9CYWNrID0gKCkgPT4ge1xyXG4gICAgICBcclxuICAgICAgbGV0IG1EYXRlID0gdG9vbGJhci5kYXRlO1xyXG4gICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgIG1EYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgbURhdGUuZ2V0TW9udGgoKSAtIDEsXHJcbiAgICAgICAgMSk7XHJcbiAgICAgIHRvb2xiYXIub25OYXZpZ2F0ZSgncHJldicsIG5ld0RhdGUpO1xyXG4gICAgICBcclxuICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICAgIHNldEN1cnJEYXRlKG5ld0RhdGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnb1RvTmV4dCA9ICgpID0+IHtcclxuICAgICAgbGV0IG1EYXRlID0gdG9vbGJhci5kYXRlO1xyXG4gICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgIG1EYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgbURhdGUuZ2V0TW9udGgoKSArIDEsXHJcbiAgICAgICAgMSk7XHJcbiAgICAgIHRvb2xiYXIub25OYXZpZ2F0ZSgnbmV4dCcsIG5ld0RhdGUpO1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2cobmV3RGF0ZS5nZXRNb250aCgpKzEpO1xyXG4gICAgICBcclxuICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICAgIHNldEN1cnJEYXRlKG5ld0RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdvVG9DdXJyZW50ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICB0b29sYmFyLmRhdGUuc2V0TW9udGgobm93LmdldE1vbnRoKCkpO1xyXG4gICAgICB0b29sYmFyLmRhdGUuc2V0WWVhcihub3cuZ2V0RnVsbFllYXIoKSk7XHJcbiAgICAgIHRvb2xiYXIub25OYXZpZ2F0ZSgnY3VycmVudCcpO1xyXG4gICAgICBmZXRjaERhdGEoKTtcclxuICAgICAgc2V0Q3VyckRhdGUobm93KTtcclxuICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRhdGVQaWNrZXIgPSAoZGF0ZSkgPT4ge1xyXG4gICAgICAvL3Rvb2xiYXIub25OYXZpZ2F0ZShkYXRlKTtcclxuICAgICAgc2V0Q3VyckRhdGUoZGF0ZSk7XHJcbiAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IG1vbnRoTGFiZWwgPSAoKSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IGRhdGUgPSBtb21lbnQoc2V0Q3VyckRhdGUodG9vbGJhci5kYXRlKSk7XHJcbiAgICAvLyAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgPHNwYW4gY2xhc3NOYW1lPXt0ZXh0VGhlbWV9PjxiPntkYXRlLmZvcm1hdCgnTU1NTScpfTwvYj48c3Bhbj4ge2RhdGUuZm9ybWF0KCdZWVlZJyl9PC9zcGFuPjwvc3Bhbj5cclxuICAgIC8vICAgKTtcclxuICAgIC8vIH07XHJcbiAgICAvL2NvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICAgIGNvbnN0IEN1c3RvbUNhbGVuZGFySWNvbiA9IFJlYWN0LmZvcndhcmRSZWYoKHtvbkNsaWNrfSwgcmVmKSA9PiAoXHJcbiAgICAgIDxkaXYgcmVmPXtyZWZ9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgIDxpbWcgc3JjPXtcIi4vY2FsSWNvbi5wbmdcIn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApKVxyXG4gICAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgICA8PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYWxpZ24tY2VudGVyXCIgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYmMtdG9vbGJhclwiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYmMtYnRuLWdyb3VwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtiZ1RoZW1lfSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Z29Ub0JhY2t9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicHJldi1pY29uIFwiKyB0ZXh0VGhlbWV9PiYjODI0OTs8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YmdUaGVtZX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2dvVG9DdXJyZW50fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJuZXh0LWljb24gXCIrIHRleHRUaGVtZX0+VG9kYXk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2JnVGhlbWV9IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtnb1RvTmV4dH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wibmV4dC1pY29uIFwiKyB0ZXh0VGhlbWV9PiYjODI1MDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJiYy1idG4tZ3JvdXBcIn0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPVwicnctYnRuXCJcclxuICAgICAgICAgICAgICAgIC8vZGF0ZUljb249e0N1c3RvbUNhbGVuZGFySWNvbn1cclxuICAgICAgICAgICAgICAgIHRpbWU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2N1cnJEYXRlfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZpZXc9J3llYXInXHJcbiAgICAgICAgICAgICAgICB2aWV3cz17Wyd5ZWFyJ119XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gZGF0ZVBpY2tlcih2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ9J01NTU0gWVlZWSdcclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgIC8vIGNzcz17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6J2JsdWUnIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfTtcclxuICBcclxuICAvL01vdmUgdGhpcyBpbnRvICdjb21wb25lbnRzJz9cclxuICBmdW5jdGlvbiBFdmVudFBvcChldmVudCkge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUG9wb3Zlck9wZW4gPSBldmVudCA9PiB7XHJcbiAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQb3BvdmVyQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVQb3BvdmVyT3Blbn1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVQb3BvdmVyQ2xvc2V9XHJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJzaW1wbGUtbWVudVwiXHJcbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9e3RydWV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtldmVudC50aXRsZX1cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxQb3BvdmVyXHJcblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucG9wb3Zlcn1cclxuICAgICAgICAgICAgY2xhc3Nlcz17c3RhdGUuaXNEYXJrID8ge1xyXG4gICAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRhcmtiZ1xyXG5cclxuICAgICAgICAgICAgfSA6IHtcclxuICAgICAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLnBhcGVyXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxyXG4gICAgICAgICAgICB9fVxyXG5cclxuICAgICAgICAgICAgZGlzYWJsZVJlc3RvcmVGb2N1c1xyXG4gICAgICAgICAgICAvLyBvbkNsaWNrPXtoYW5kbGVQb3BvdmVyQ2xvc2V9XHJcbiAgICAgICAgICAgIC8vIG9uTW91c2VMZWF2ZT17aGFuZGxlUG9wb3ZlckNsb3NlfVxyXG4gICAgICAgICAgICBQYXBlclByb3BzPXt7IG9uTW91c2VFbnRlcjogaGFuZGxlUG9wb3Zlck9wZW4sIG9uTW91c2VMZWF2ZTogaGFuZGxlUG9wb3ZlckNsb3NlIH19XHJcbiAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdGF0ZS5pc0RhcmsgPyBzdHlsZXMudGl0bGUgOiBudWxsfSBocmVmPXtldmVudC5ldmVudC51cmx9IHRhcmdldD1cIl9ibGFua1wiPntldmVudC50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZXN9PlxyXG4gICAgICAgICAgICAgICAge2V2ZW50LmV2ZW50LmdlbnJlcy5zbGljZSgwLDMpLm1hcCgoZ2VucmUpID0+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2dlbnJlLm1hbF9pZH0+e2dlbnJlLm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTY29yZUljb24gc2NvcmU9e2V2ZW50LmV2ZW50LnNjb3JlfSAvPlxyXG4gICAgICAgICAgICAgICAge2V2ZW50LmV2ZW50LnNjb3JlfVxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmluZH0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2V2ZW50LmV2ZW50LmltYWdlfSBhbHQ9e2V2ZW50LnRpdGxlfSBjbGFzc05hbWU9e3N0eWxlcy5ibHVyfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY3JlZW59PjwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAge2V2ZW50LmV2ZW50LmRlc2N9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuXHJcblxyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJnY30gJHtzdGF0ZS5pc0RhcmsgPyBzdHlsZXMubGlnaHQgOiBudWxsfWB9PlxyXG4gICAgICAgIDxIZWFkZXIgaXNEYXJrPXtzdGF0ZS5pc0Rhcmt9IC8+XHJcbiAgICAgICAgPGJyLz4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLXggdGV4dC1jZW50ZXIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDQgc3R5bGU9e3tmb250RmFtaWx5OidEb3Npcyd9fT5SZWxlYXNlZCBUb2RheTwvaDQ+XHJcblxyXG4gICAgICAgICAgICA8RGFpbGllcyBjdXJyWWVhcj17eWVhcn0gY3Vyck1vbnRoPXttb250aH0gaXNEYXJrPXtzdGF0ZS5pc0Rhcmt9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQtY29udGFpbmVyXCJ9PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNjUwIH19XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0b29sdGlwQWNjZXNzb3I9e251bGx9XHJcbiAgICAgICAgICAgIHBvcHVwXHJcbiAgICAgICAgICAgIGxvY2FsaXplcj17bG9jYWxpemVyfVxyXG4gICAgICAgICAgICBldmVudHM9e2FuaW1lQXJyfVxyXG4gICAgICAgICAgICAvL2V2ZW50cz17ZXZlbnRzfVxyXG4gICAgICAgICAgICBzdGFydEFjY2Vzc29yPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBlbmRBY2Nlc3Nvcj1cImVuZFwiXHJcbiAgICAgICAgICAgIGRhdGUgPSB7Y3VyckRhdGV9XHJcbiAgICAgICAgICAgIG9uTmF2aWdhdGUgPSB7ZGF0ZSA9PiBzZXRDdXJyRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgZGVmYXVsdERhdGU9e21vbWVudCgpLnRvRGF0ZSgpfVxyXG4gICAgICAgICAgICBldmVudFByb3BHZXR0ZXI9e1xyXG4gICAgICAgICAgICAgIChldmVudCwgc3RhcnQsIGVuZCwgaXNTZWxlY3RlZCkgPT57XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3U3R5bGU9IHtiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDMxLCAxMjUsIDI0NywgMC43KSd9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHN0YXRlLmlzRGFyayl7XHJcbiAgICAgICAgICAgICAgICAgIG5ld1N0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDE3NSwgMTYsIDQzLCAwLjg5KSdcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU6IG5ld1N0eWxlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkYXlQcm9wR2V0dGVyPXtcclxuICAgICAgICAgICAgICAoZXZlbnQsIHN0YXJ0LCBlbmQsIGlzU2VsZWN0ZWQpID0+e1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld1N0eWxlPSB7YmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSknfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzdGF0ZS5pc0Rhcmspe1xyXG4gICAgICAgICAgICAgICAgICBuZXdTdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzM2MzkzZidcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU6IG5ld1N0eWxlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb21wb25lbnRzPXt7XHJcbiAgICAgICAgICAgICAgZXZlbnQ6IEV2ZW50UG9wLFxyXG4gICAgICAgICAgICAgIC8vZXZlbnQ6IEV2ZW50QWdlbmRhLFxyXG4gICAgICAgICAgICAgIHRvb2xiYXI6IGdldEN1c3RvbVRvb2xiYXJcclxuICAgICAgICAgICAgfX1cclxuXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEZvb3RlciBpc0Rhcms9e3N0YXRlLmlzRGFya30gbmFtZT1cImlzRGFya1wiIGNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE15Q2FsZW5kYXI7XHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9hbWJlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3NoYWRvd3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1iaWctY2FsZW5kYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3ZnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXdpZGdldHMtbW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXdpZGdldHMvbGliL0RhdGVUaW1lUGlja2VyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=