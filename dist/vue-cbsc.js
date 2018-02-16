(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-cbsc"] = factory();
	else
		root["vue-cbsc"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = plugin;


function plugin(Vue, options = {}) {
    if (options && options.constructor !== Object) throw 'Options must be a object';

    const version = Vue.version && Number(Vue.version.split('.')[0]) || -1;

    if (false) {
        console.warn('already installed.');
        return;
    }

    plugin.installed = true;

    if (false) {
        console.warn(`vue-cbsc (${plugin.version}) need to use Vue 2.0 or later (Vue: ${Vue.version}).`);
        return;
    }

    const cbsc = new Vue({
        _shadeBlendConvert(amount, from, to) {
            if (typeof amount != 'number' || amount < -1 || amount > 1 || typeof from != 'string' || from[0] != 'r' && from[0] != '#' || typeof to != 'string' && typeof to != 'undefined') return null;

            const parse = parseInt;
            const round = Math.round;
            const amountCheck = amount < 0;
            let hexCheck = from.length > 9;

            amount = amountCheck ? amount * -1 : amount;

            to = to && to != 'c' ? to : amountCheck ? '#000000' : '#FFFFFF';

            hexCheck = typeof to == 'string' ? to.length > 9 ? true : to == 'c' ? !hexCheck : false : hexCheck;

            const _from = this._rip(from);
            const _to = this._rip(to);

            if (!_from || !_to) return null;

            if (hexCheck) {
                const red = round((_to[0] - _from[0]) * amount + _from[0]);
                const green = round((_to[1] - _from[1]) * amount + _from[1]);
                const blue = round((_to[2] - _from[2]) * amount + _from[2]);
                const alpha = _from[3] < 0 && _to[3] < 0 ? ')' : ',' + (_from[3] > -1 && _to[3] > -1 ? round(((_to[3] - _from[3]) * amount + _from[3]) * 10000) / 10000 : _to[3] < 0 ? _from[3] : _to[3]) + ')';

                return `rgb(${red},${green},${blue}${alpha}`;
            } else {
                const hex = (0x100000000 + (_from[3] > -1 && _to[3] > -1 ? round(((_to[3] - _from[3]) * amount + _from[3]) * 255) : _to[3] > -1 ? round(_to[3] * 255) : _from[3] > -1 ? round(_from[3] * 255) : 255) * 0x1000000 + round((_to[0] - _from[0]) * amount + _from[0]) * 0x10000 + round((_to[1] - _from[1]) * amount + _from[1]) * 0x100 + round((_to[2] - _from[2]) * amount + _from[2])).toString(16).slice(_from[3] > -1 || _to[3] > -1 ? 1 : 3);

                return `#${hex}`;
            }
        },
        _rip(color) {
            const colorLength = color.length;
            const rgb = new Object();

            if (colorLength > 9) {
                color = color.split(",");
                if (color.length < 3 || color.length > 4) return null;
                rgb[0] = parseInt(color[0].slice(4));
                rgb[1] = parseInt(color[1]);
                rgb[2] = parseInt(color[2]);
                rgb[3] = color[3] ? parseFloat(color[3]) : -1;
            } else {
                if (colorLength == 8 || colorLength == 6 || colorLength < 4) return null;
                if (colorLength < 6) color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}${colorLength > 4 ? color[4] + '' + color[4] : ''}`;
                color = parseInt(color.slice(1), 16);
                rgb[0] = color >> 16 & 255;
                rgb[1] = color >> 8 & 255;
                rgb[2] = color & 255;
                rgb[3] = colorLength == 9 || colorLength == 5 ? Math.round((color >> 24 & 255) / 255 * 10000) / 10000 : -1;
            }

            return rgb;
        },
        _validadeNumber(number, min, max, name) {
            if (number.constructor !== Number || number < min || number > max) console.warn(`${name || 'Number'} should be between ${min} and ${max}.`);
        },
        _validadeString(string, allowUndefined, name) {
            if (string.constructor !== String || string[0] !== 'r' && string[0] !== '#') console.warn(`${name || 'String'} is invalid.`);
            if (!allowUndefined && typeof string === 'undefined') console.warn(`${name || 'String'} should not be undefined.`);
        },
        methods: {
            convert(color) {
                this.$options._validadeString(color, false, 'Color');
                return this.$options._shadeBlendConvert(0, color, 'c');
            },
            blend(from, to, amount) {
                this.$options._validadeNumber(amount, -1, 1, 'Amount');
                this.$options._validadeString(from, false, 'From');
                this.$options._validadeString(to, false, 'To');
                return this.$options._shadeBlendConvert(amount, from, to);
            },
            darken(color, amount) {
                this.$options._validadeNumber(amount, 0, 1, 'Amount');
                this.$options._validadeString(color, false, 'Color');
                return this.$options._shadeBlendConvert(amount * -1, color);
            },
            lighten(color, amount) {
                console.log('ssss');
                this.$options._validadeNumber(amount, 0, 1, 'Amount');
                this.$options._validadeString(color, false, 'Color');
                return this.$options._shadeBlendConvert(amount, color);
            },
            rip(color) {
                this.$options._validadeString(color, false, 'Color');
                return this.$options._rip(color);
            }
        }
    });

    Object.defineProperty(Vue.prototype, '$cbsc', {
        get() {
            return cbsc;
        }
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

/***/ })
/******/ ]);
});