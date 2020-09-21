/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/rooms/subroutine.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/alea/alea.js":
/*!************************************!*\
  !*** ../node_modules/alea/alea.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (root, factory) {
  if (true) {
      module.exports = factory();
  } else {}
}(this, function () {

  'use strict';

  // From http://baagoe.com/en/RandomMusings/javascript/

  // importState to sync generator states
  Alea.importState = function(i){
    var random = new Alea();
    random.importState(i);
    return random;
  };

  return Alea;

  function Alea() {
    return (function(args) {
      // Johannes Baagøe <baagoe@baagoe.com>, 2010
      var s0 = 0;
      var s1 = 0;
      var s2 = 0;
      var c = 1;

      if (args.length == 0) {
        args = [+new Date];
      }
      var mash = Mash();
      s0 = mash(' ');
      s1 = mash(' ');
      s2 = mash(' ');

      for (var i = 0; i < args.length; i++) {
        s0 -= mash(args[i]);
        if (s0 < 0) {
          s0 += 1;
        }
        s1 -= mash(args[i]);
        if (s1 < 0) {
          s1 += 1;
        }
        s2 -= mash(args[i]);
        if (s2 < 0) {
          s2 += 1;
        }
      }
      mash = null;

      var random = function() {
        var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
        s0 = s1;
        s1 = s2;
        return s2 = t - (c = t | 0);
      };
      random.uint32 = function() {
        return random() * 0x100000000; // 2^32
      };
      random.fract53 = function() {
        return random() + 
          (random() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
      };
      random.version = 'Alea 0.9';
      random.args = args;

      // my own additions to sync state between two generators
      random.exportState = function(){
        return [s0, s1, s2, c];
      };
      random.importState = function(i){
        s0 = +i[0] || 0;
        s1 = +i[1] || 0;
        s2 = +i[2] || 0;
        c = +i[3] || 0;
      };
 
      return random;

    } (Array.prototype.slice.call(arguments)));
  }

  function Mash() {
    var n = 0xefc8249d;

    var mash = function(data) {
      data = data.toString();
      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }
      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    };

    mash.version = 'Mash 0.9';
    return mash;
  }
}));


/***/ }),

/***/ "../node_modules/hilo3d/build/Hilo3d.js":
/*!**********************************************!*\
  !*** ../node_modules/hilo3d/build/Hilo3d.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Hilo3d 1.15.9
 * Copyright (c) 2017-present Alibaba Group Holding Ltd.
 * @license MIT
 */
window.Hilo3d=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=117)}([function(t,e,n){
/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version 2.7.0

Copyright (c) 2015-2018, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setMatrixArrayType=function(t){e.ARRAY_TYPE=t},e.toRadian=function(t){return t*r},e.equals=function(t,e){return Math.abs(t-e)<=i*Math.max(1,Math.abs(t),Math.abs(e))};var i=e.EPSILON=1e-6;e.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,e.RANDOM=Math.random;var r=Math.PI/180},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.forEach=e.sqrLen=e.len=e.sqrDist=e.dist=e.div=e.mul=e.sub=void 0,e.create=r,e.clone=function(t){var e=new i.ARRAY_TYPE(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},e.fromValues=function(t,e,n,r){var s=new i.ARRAY_TYPE(4);return s[0]=t,s[1]=e,s[2]=n,s[3]=r,s},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},e.set=function(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t},e.subtract=s,e.multiply=a,e.divide=o,e.ceil=function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t[3]=Math.ceil(e[3]),t},e.floor=function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t[3]=Math.floor(e[3]),t},e.min=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t[3]=Math.min(e[3],n[3]),t},e.max=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t[3]=Math.max(e[3],n[3]),t},e.round=function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t[3]=Math.round(e[3]),t},e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t},e.scaleAndAdd=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t[2]=e[2]+n[2]*i,t[3]=e[3]+n[3]*i,t},e.distance=u,e.squaredDistance=c,e.length=h,e.squaredLength=f,e.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},e.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t[3]=1/e[3],t},e.normalize=function(t,e){var n=e[0],i=e[1],r=e[2],s=e[3],a=n*n+i*i+r*r+s*s;return a>0&&(a=1/Math.sqrt(a),t[0]=n*a,t[1]=i*a,t[2]=r*a,t[3]=s*a),t},e.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]},e.lerp=function(t,e,n,i){var r=e[0],s=e[1],a=e[2],o=e[3];return t[0]=r+i*(n[0]-r),t[1]=s+i*(n[1]-s),t[2]=a+i*(n[2]-a),t[3]=o+i*(n[3]-o),t},e.random=function(t,e){var n,r,s,a,o,u;e=e||1;do{o=(n=2*i.RANDOM()-1)*n+(r=2*i.RANDOM()-1)*r}while(o>=1);do{u=(s=2*i.RANDOM()-1)*s+(a=2*i.RANDOM()-1)*a}while(u>=1);var c=Math.sqrt((1-o)/u);return t[0]=e*n,t[1]=e*r,t[2]=e*s*c,t[3]=e*a*c,t},e.transformMat4=function(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3];return t[0]=n[0]*i+n[4]*r+n[8]*s+n[12]*a,t[1]=n[1]*i+n[5]*r+n[9]*s+n[13]*a,t[2]=n[2]*i+n[6]*r+n[10]*s+n[14]*a,t[3]=n[3]*i+n[7]*r+n[11]*s+n[15]*a,t},e.transformQuat=function(t,e,n){var i=e[0],r=e[1],s=e[2],a=n[0],o=n[1],u=n[2],c=n[3],h=c*i+o*s-u*r,f=c*r+u*i-a*s,l=c*s+a*r-o*i,d=-a*i-o*r-u*s;return t[0]=h*c+d*-a+f*-u-l*-o,t[1]=f*c+d*-o+l*-a-h*-u,t[2]=l*c+d*-u+h*-o-f*-a,t[3]=e[3],t},e.str=function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]},e.equals=function(t,e){var n=t[0],r=t[1],s=t[2],a=t[3],o=e[0],u=e[1],c=e[2],h=e[3];return Math.abs(n-o)<=i.EPSILON*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(r-u)<=i.EPSILON*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(s-c)<=i.EPSILON*Math.max(1,Math.abs(s),Math.abs(c))&&Math.abs(a-h)<=i.EPSILON*Math.max(1,Math.abs(a),Math.abs(h))};var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));function r(){var t=new i.ARRAY_TYPE(4);return i.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function s(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t}function a(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t[3]=e[3]*n[3],t}function o(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t[3]=e[3]/n[3],t}function u(t,e){var n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2],s=e[3]-t[3];return Math.sqrt(n*n+i*i+r*r+s*s)}function c(t,e){var n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2],s=e[3]-t[3];return n*n+i*i+r*r+s*s}function h(t){var e=t[0],n=t[1],i=t[2],r=t[3];return Math.sqrt(e*e+n*n+i*i+r*r)}function f(t){var e=t[0],n=t[1],i=t[2],r=t[3];return e*e+n*n+i*i+r*r}e.sub=s,e.mul=a,e.div=o,e.dist=u,e.sqrDist=c,e.len=h,e.sqrLen=f,e.forEach=function(){var t=r();return function(e,n,i,r,s,a){var o,u=void 0;for(n||(n=4),i||(i=0),o=r?Math.min(r*n+i,e.length):e.length,u=i;u<o;u+=n)t[0]=e[u],t[1]=e[u+1],t[2]=e[u+2],t[3]=e[u+3],s(t,t,a),e[u]=t[0],e[u+1]=t[1],e[u+2]=t[2],e[u+3]=t[3];return e}}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.forEach=e.sqrLen=e.len=e.sqrDist=e.dist=e.div=e.mul=e.sub=void 0,e.create=r,e.clone=function(t){var e=new i.ARRAY_TYPE(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},e.length=s,e.fromValues=a,e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},e.set=function(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t},e.subtract=o,e.multiply=u,e.divide=c,e.ceil=function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t},e.floor=function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t},e.min=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t},e.max=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t},e.round=function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t},e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t},e.scaleAndAdd=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t[2]=e[2]+n[2]*i,t},e.distance=h,e.squaredDistance=f,e.squaredLength=l,e.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t},e.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t},e.normalize=d,e.dot=m,e.cross=function(t,e,n){var i=e[0],r=e[1],s=e[2],a=n[0],o=n[1],u=n[2];return t[0]=r*u-s*o,t[1]=s*a-i*u,t[2]=i*o-r*a,t},e.lerp=function(t,e,n,i){var r=e[0],s=e[1],a=e[2];return t[0]=r+i*(n[0]-r),t[1]=s+i*(n[1]-s),t[2]=a+i*(n[2]-a),t},e.hermite=function(t,e,n,i,r,s){var a=s*s,o=a*(2*s-3)+1,u=a*(s-2)+s,c=a*(s-1),h=a*(3-2*s);return t[0]=e[0]*o+n[0]*u+i[0]*c+r[0]*h,t[1]=e[1]*o+n[1]*u+i[1]*c+r[1]*h,t[2]=e[2]*o+n[2]*u+i[2]*c+r[2]*h,t},e.bezier=function(t,e,n,i,r,s){var a=1-s,o=a*a,u=s*s,c=o*a,h=3*s*o,f=3*u*a,l=u*s;return t[0]=e[0]*c+n[0]*h+i[0]*f+r[0]*l,t[1]=e[1]*c+n[1]*h+i[1]*f+r[1]*l,t[2]=e[2]*c+n[2]*h+i[2]*f+r[2]*l,t},e.random=function(t,e){e=e||1;var n=2*i.RANDOM()*Math.PI,r=2*i.RANDOM()-1,s=Math.sqrt(1-r*r)*e;return t[0]=Math.cos(n)*s,t[1]=Math.sin(n)*s,t[2]=r*e,t},e.transformMat4=function(t,e,n){var i=e[0],r=e[1],s=e[2],a=n[3]*i+n[7]*r+n[11]*s+n[15];return a=a||1,t[0]=(n[0]*i+n[4]*r+n[8]*s+n[12])/a,t[1]=(n[1]*i+n[5]*r+n[9]*s+n[13])/a,t[2]=(n[2]*i+n[6]*r+n[10]*s+n[14])/a,t},e.transformMat3=function(t,e,n){var i=e[0],r=e[1],s=e[2];return t[0]=i*n[0]+r*n[3]+s*n[6],t[1]=i*n[1]+r*n[4]+s*n[7],t[2]=i*n[2]+r*n[5]+s*n[8],t},e.transformQuat=function(t,e,n){var i=n[0],r=n[1],s=n[2],a=n[3],o=e[0],u=e[1],c=e[2],h=r*c-s*u,f=s*o-i*c,l=i*u-r*o,d=r*l-s*f,m=s*h-i*l,_=i*f-r*h,p=2*a;return h*=p,f*=p,l*=p,d*=2,m*=2,_*=2,t[0]=o+h+d,t[1]=u+f+m,t[2]=c+l+_,t},e.rotateX=function(t,e,n,i){var r=[],s=[];return r[0]=e[0]-n[0],r[1]=e[1]-n[1],r[2]=e[2]-n[2],s[0]=r[0],s[1]=r[1]*Math.cos(i)-r[2]*Math.sin(i),s[2]=r[1]*Math.sin(i)+r[2]*Math.cos(i),t[0]=s[0]+n[0],t[1]=s[1]+n[1],t[2]=s[2]+n[2],t},e.rotateY=function(t,e,n,i){var r=[],s=[];return r[0]=e[0]-n[0],r[1]=e[1]-n[1],r[2]=e[2]-n[2],s[0]=r[2]*Math.sin(i)+r[0]*Math.cos(i),s[1]=r[1],s[2]=r[2]*Math.cos(i)-r[0]*Math.sin(i),t[0]=s[0]+n[0],t[1]=s[1]+n[1],t[2]=s[2]+n[2],t},e.rotateZ=function(t,e,n,i){var r=[],s=[];return r[0]=e[0]-n[0],r[1]=e[1]-n[1],r[2]=e[2]-n[2],s[0]=r[0]*Math.cos(i)-r[1]*Math.sin(i),s[1]=r[0]*Math.sin(i)+r[1]*Math.cos(i),s[2]=r[2],t[0]=s[0]+n[0],t[1]=s[1]+n[1],t[2]=s[2]+n[2],t},e.angle=function(t,e){var n=a(t[0],t[1],t[2]),i=a(e[0],e[1],e[2]);d(n,n),d(i,i);var r=m(n,i);return r>1?0:r<-1?Math.PI:Math.acos(r)},e.str=function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]},e.equals=function(t,e){var n=t[0],r=t[1],s=t[2],a=e[0],o=e[1],u=e[2];return Math.abs(n-a)<=i.EPSILON*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(r-o)<=i.EPSILON*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(s-u)<=i.EPSILON*Math.max(1,Math.abs(s),Math.abs(u))};var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));function r(){var t=new i.ARRAY_TYPE(3);return i.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function s(t){var e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)}function a(t,e,n){var r=new i.ARRAY_TYPE(3);return r[0]=t,r[1]=e,r[2]=n,r}function o(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function u(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function c(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function h(t,e){var n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(n*n+i*i+r*r)}function f(t,e){var n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return n*n+i*i+r*r}function l(t){var e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i}function d(t,e){var n=e[0],i=e[1],r=e[2],s=n*n+i*i+r*r;return s>0&&(s=1/Math.sqrt(s),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s),t}function m(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}e.sub=o,e.mul=u,e.div=c,e.dist=h,e.sqrDist=f,e.len=s,e.sqrLen=l,e.forEach=function(){var t=r();return function(e,n,i,r,s,a){var o,u=void 0;for(n||(n=3),i||(i=0),o=r?Math.min(r*n+i,e.length):e.length,u=i;u<o;u+=n)t[0]=e[u],t[1]=e[u+1],t[2]=e[u+2],s(t,t,a),e[u]=t[0],e[u+1]=t[1],e[u+2]=t[2];return e}}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setAxes=e.sqlerp=e.rotationTo=e.equals=e.exactEquals=e.normalize=e.sqrLen=e.squaredLength=e.len=e.length=e.lerp=e.dot=e.scale=e.mul=e.add=e.set=e.copy=e.fromValues=e.clone=void 0,e.create=u,e.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},e.setAxisAngle=c,e.getAxisAngle=function(t,e){var n=2*Math.acos(e[3]),r=Math.sin(n/2);return r>i.EPSILON?(t[0]=e[0]/r,t[1]=e[1]/r,t[2]=e[2]/r):(t[0]=1,t[1]=0,t[2]=0),n},e.multiply=h,e.rotateX=function(t,e,n){n*=.5;var i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(n),u=Math.cos(n);return t[0]=i*u+a*o,t[1]=r*u+s*o,t[2]=s*u-r*o,t[3]=a*u-i*o,t},e.rotateY=function(t,e,n){n*=.5;var i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(n),u=Math.cos(n);return t[0]=i*u-s*o,t[1]=r*u+a*o,t[2]=s*u+i*o,t[3]=a*u-r*o,t},e.rotateZ=function(t,e,n){n*=.5;var i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(n),u=Math.cos(n);return t[0]=i*u+r*o,t[1]=r*u-i*o,t[2]=s*u+a*o,t[3]=a*u-s*o,t},e.calculateW=function(t,e){var n=e[0],i=e[1],r=e[2];return t[0]=n,t[1]=i,t[2]=r,t[3]=Math.sqrt(Math.abs(1-n*n-i*i-r*r)),t},e.slerp=f,e.random=function(t){var e=i.RANDOM(),n=i.RANDOM(),r=i.RANDOM(),s=Math.sqrt(1-e),a=Math.sqrt(e);return t[0]=s*Math.sin(2*Math.PI*n),t[1]=s*Math.cos(2*Math.PI*n),t[2]=a*Math.sin(2*Math.PI*r),t[3]=a*Math.cos(2*Math.PI*r),t},e.invert=function(t,e){var n=e[0],i=e[1],r=e[2],s=e[3],a=n*n+i*i+r*r+s*s,o=a?1/a:0;return t[0]=-n*o,t[1]=-i*o,t[2]=-r*o,t[3]=s*o,t},e.conjugate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t},e.fromMat3=l,e.fromEuler=function(t,e,n,i){var r=.5*Math.PI/180;e*=r,n*=r,i*=r;var s=Math.sin(e),a=Math.cos(e),o=Math.sin(n),u=Math.cos(n),c=Math.sin(i),h=Math.cos(i);return t[0]=s*u*h-a*o*c,t[1]=a*o*h+s*u*c,t[2]=a*u*c-s*o*h,t[3]=a*u*h+s*o*c,t},e.str=function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"};var i=o(n(0)),r=o(n(5)),s=o(n(2)),a=o(n(1));function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function u(){var t=new i.ARRAY_TYPE(4);return i.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function c(t,e,n){n*=.5;var i=Math.sin(n);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(n),t}function h(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=n[0],u=n[1],c=n[2],h=n[3];return t[0]=i*h+a*o+r*c-s*u,t[1]=r*h+a*u+s*o-i*c,t[2]=s*h+a*c+i*u-r*o,t[3]=a*h-i*o-r*u-s*c,t}function f(t,e,n,r){var s=e[0],a=e[1],o=e[2],u=e[3],c=n[0],h=n[1],f=n[2],l=n[3],d=void 0,m=void 0,_=void 0,p=void 0,g=void 0;return(m=s*c+a*h+o*f+u*l)<0&&(m=-m,c=-c,h=-h,f=-f,l=-l),1-m>i.EPSILON?(d=Math.acos(m),_=Math.sin(d),p=Math.sin((1-r)*d)/_,g=Math.sin(r*d)/_):(p=1-r,g=r),t[0]=p*s+g*c,t[1]=p*a+g*h,t[2]=p*o+g*f,t[3]=p*u+g*l,t}function l(t,e){var n=e[0]+e[4]+e[8],i=void 0;if(n>0)i=Math.sqrt(n+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{var r=0;e[4]>e[0]&&(r=1),e[8]>e[3*r+r]&&(r=2);var s=(r+1)%3,a=(r+2)%3;i=Math.sqrt(e[3*r+r]-e[3*s+s]-e[3*a+a]+1),t[r]=.5*i,i=.5/i,t[3]=(e[3*s+a]-e[3*a+s])*i,t[s]=(e[3*s+r]+e[3*r+s])*i,t[a]=(e[3*a+r]+e[3*r+a])*i}return t}e.clone=a.clone,e.fromValues=a.fromValues,e.copy=a.copy,e.set=a.set,e.add=a.add,e.mul=h,e.scale=a.scale,e.dot=a.dot,e.lerp=a.lerp;var d=e.length=a.length,m=(e.len=d,e.squaredLength=a.squaredLength),_=(e.sqrLen=m,e.normalize=a.normalize);e.exactEquals=a.exactEquals,e.equals=a.equals,e.rotationTo=function(){var t=s.create(),e=s.fromValues(1,0,0),n=s.fromValues(0,1,0);return function(i,r,a){var o=s.dot(r,a);return o<-.999999?(s.cross(t,e,r),s.len(t)<1e-6&&s.cross(t,n,r),s.normalize(t,t),c(i,t,Math.PI),i):o>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(s.cross(t,r,a),i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=1+o,_(i,i))}}(),e.sqlerp=function(){var t=u(),e=u();return function(n,i,r,s,a,o){return f(t,i,a,o),f(e,r,s,o),f(n,t,e,2*o*(1-o)),n}}(),e.setAxes=function(){var t=r.create();return function(e,n,i,r){return t[0]=i[0],t[3]=i[1],t[6]=i[2],t[1]=r[0],t[4]=r[1],t[7]=r[2],t[2]=-n[0],t[5]=-n[1],t[8]=-n[2],_(e,l(e,t))}}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sub=e.mul=void 0,e.create=function(){var t=new i.ARRAY_TYPE(16);return i.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},e.clone=function(t){var e=new i.ARRAY_TYPE(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},e.fromValues=function(t,e,n,r,s,a,o,u,c,h,f,l,d,m,_,p){var g=new i.ARRAY_TYPE(16);return g[0]=t,g[1]=e,g[2]=n,g[3]=r,g[4]=s,g[5]=a,g[6]=o,g[7]=u,g[8]=c,g[9]=h,g[10]=f,g[11]=l,g[12]=d,g[13]=m,g[14]=_,g[15]=p,g},e.set=function(t,e,n,i,r,s,a,o,u,c,h,f,l,d,m,_,p){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=a,t[6]=o,t[7]=u,t[8]=c,t[9]=h,t[10]=f,t[11]=l,t[12]=d,t[13]=m,t[14]=_,t[15]=p,t},e.identity=r,e.transpose=function(t,e){if(t===e){var n=e[1],i=e[2],r=e[3],s=e[6],a=e[7],o=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=n,t[6]=e[9],t[7]=e[13],t[8]=i,t[9]=s,t[11]=e[14],t[12]=r,t[13]=a,t[14]=o}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t},e.invert=function(t,e){var n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],c=e[7],h=e[8],f=e[9],l=e[10],d=e[11],m=e[12],_=e[13],p=e[14],g=e[15],v=n*o-i*a,E=n*u-r*a,T=n*c-s*a,M=i*u-r*o,A=i*c-s*o,I=r*c-s*u,L=h*_-f*m,O=h*p-l*m,S=h*g-d*m,R=f*p-l*_,y=f*g-d*_,x=l*g-d*p,N=v*x-E*y+T*R+M*S-A*O+I*L;return N?(N=1/N,t[0]=(o*x-u*y+c*R)*N,t[1]=(r*y-i*x-s*R)*N,t[2]=(_*I-p*A+g*M)*N,t[3]=(l*A-f*I-d*M)*N,t[4]=(u*S-a*x-c*O)*N,t[5]=(n*x-r*S+s*O)*N,t[6]=(p*T-m*I-g*E)*N,t[7]=(h*I-l*T+d*E)*N,t[8]=(a*y-o*S+c*L)*N,t[9]=(i*S-n*y-s*L)*N,t[10]=(m*A-_*T+g*v)*N,t[11]=(f*T-h*A-d*v)*N,t[12]=(o*O-a*R-u*L)*N,t[13]=(n*R-i*O+r*L)*N,t[14]=(_*E-m*M-p*v)*N,t[15]=(h*M-f*E+l*v)*N,t):null},e.adjoint=function(t,e){var n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],c=e[7],h=e[8],f=e[9],l=e[10],d=e[11],m=e[12],_=e[13],p=e[14],g=e[15];return t[0]=o*(l*g-d*p)-f*(u*g-c*p)+_*(u*d-c*l),t[1]=-(i*(l*g-d*p)-f*(r*g-s*p)+_*(r*d-s*l)),t[2]=i*(u*g-c*p)-o*(r*g-s*p)+_*(r*c-s*u),t[3]=-(i*(u*d-c*l)-o*(r*d-s*l)+f*(r*c-s*u)),t[4]=-(a*(l*g-d*p)-h*(u*g-c*p)+m*(u*d-c*l)),t[5]=n*(l*g-d*p)-h*(r*g-s*p)+m*(r*d-s*l),t[6]=-(n*(u*g-c*p)-a*(r*g-s*p)+m*(r*c-s*u)),t[7]=n*(u*d-c*l)-a*(r*d-s*l)+h*(r*c-s*u),t[8]=a*(f*g-d*_)-h*(o*g-c*_)+m*(o*d-c*f),t[9]=-(n*(f*g-d*_)-h*(i*g-s*_)+m*(i*d-s*f)),t[10]=n*(o*g-c*_)-a*(i*g-s*_)+m*(i*c-s*o),t[11]=-(n*(o*d-c*f)-a*(i*d-s*f)+h*(i*c-s*o)),t[12]=-(a*(f*p-l*_)-h*(o*p-u*_)+m*(o*l-u*f)),t[13]=n*(f*p-l*_)-h*(i*p-r*_)+m*(i*l-r*f),t[14]=-(n*(o*p-u*_)-a*(i*p-r*_)+m*(i*u-r*o)),t[15]=n*(o*l-u*f)-a*(i*l-r*f)+h*(i*u-r*o),t},e.determinant=function(t){var e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],u=t[7],c=t[8],h=t[9],f=t[10],l=t[11],d=t[12],m=t[13],_=t[14],p=t[15];return(e*a-n*s)*(f*p-l*_)-(e*o-i*s)*(h*p-l*m)+(e*u-r*s)*(h*_-f*m)+(n*o-i*a)*(c*p-l*d)-(n*u-r*a)*(c*_-f*d)+(i*u-r*o)*(c*m-h*d)},e.multiply=s,e.translate=function(t,e,n){var i=n[0],r=n[1],s=n[2],a=void 0,o=void 0,u=void 0,c=void 0,h=void 0,f=void 0,l=void 0,d=void 0,m=void 0,_=void 0,p=void 0,g=void 0;return e===t?(t[12]=e[0]*i+e[4]*r+e[8]*s+e[12],t[13]=e[1]*i+e[5]*r+e[9]*s+e[13],t[14]=e[2]*i+e[6]*r+e[10]*s+e[14],t[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(a=e[0],o=e[1],u=e[2],c=e[3],h=e[4],f=e[5],l=e[6],d=e[7],m=e[8],_=e[9],p=e[10],g=e[11],t[0]=a,t[1]=o,t[2]=u,t[3]=c,t[4]=h,t[5]=f,t[6]=l,t[7]=d,t[8]=m,t[9]=_,t[10]=p,t[11]=g,t[12]=a*i+h*r+m*s+e[12],t[13]=o*i+f*r+_*s+e[13],t[14]=u*i+l*r+p*s+e[14],t[15]=c*i+d*r+g*s+e[15]),t},e.scale=function(t,e,n){var i=n[0],r=n[1],s=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},e.rotate=function(t,e,n,r){var s,a,o,u,c,h,f,l,d,m,_,p,g,v,E,T,M,A,I,L,O,S,R,y,x=r[0],N=r[1],b=r[2],w=Math.sqrt(x*x+N*N+b*b);return w<i.EPSILON?null:(x*=w=1/w,N*=w,b*=w,s=Math.sin(n),o=1-(a=Math.cos(n)),u=e[0],c=e[1],h=e[2],f=e[3],l=e[4],d=e[5],m=e[6],_=e[7],p=e[8],g=e[9],v=e[10],E=e[11],T=x*x*o+a,M=N*x*o+b*s,A=b*x*o-N*s,I=x*N*o-b*s,L=N*N*o+a,O=b*N*o+x*s,S=x*b*o+N*s,R=N*b*o-x*s,y=b*b*o+a,t[0]=u*T+l*M+p*A,t[1]=c*T+d*M+g*A,t[2]=h*T+m*M+v*A,t[3]=f*T+_*M+E*A,t[4]=u*I+l*L+p*O,t[5]=c*I+d*L+g*O,t[6]=h*I+m*L+v*O,t[7]=f*I+_*L+E*O,t[8]=u*S+l*R+p*y,t[9]=c*S+d*R+g*y,t[10]=h*S+m*R+v*y,t[11]=f*S+_*R+E*y,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)},e.rotateX=function(t,e,n){var i=Math.sin(n),r=Math.cos(n),s=e[4],a=e[5],o=e[6],u=e[7],c=e[8],h=e[9],f=e[10],l=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=s*r+c*i,t[5]=a*r+h*i,t[6]=o*r+f*i,t[7]=u*r+l*i,t[8]=c*r-s*i,t[9]=h*r-a*i,t[10]=f*r-o*i,t[11]=l*r-u*i,t},e.rotateY=function(t,e,n){var i=Math.sin(n),r=Math.cos(n),s=e[0],a=e[1],o=e[2],u=e[3],c=e[8],h=e[9],f=e[10],l=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=s*r-c*i,t[1]=a*r-h*i,t[2]=o*r-f*i,t[3]=u*r-l*i,t[8]=s*i+c*r,t[9]=a*i+h*r,t[10]=o*i+f*r,t[11]=u*i+l*r,t},e.rotateZ=function(t,e,n){var i=Math.sin(n),r=Math.cos(n),s=e[0],a=e[1],o=e[2],u=e[3],c=e[4],h=e[5],f=e[6],l=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=s*r+c*i,t[1]=a*r+h*i,t[2]=o*r+f*i,t[3]=u*r+l*i,t[4]=c*r-s*i,t[5]=h*r-a*i,t[6]=f*r-o*i,t[7]=l*r-u*i,t},e.fromTranslation=function(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t},e.fromScaling=function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.fromRotation=function(t,e,n){var r,s,a,o=n[0],u=n[1],c=n[2],h=Math.sqrt(o*o+u*u+c*c);return h<i.EPSILON?null:(o*=h=1/h,u*=h,c*=h,r=Math.sin(e),a=1-(s=Math.cos(e)),t[0]=o*o*a+s,t[1]=u*o*a+c*r,t[2]=c*o*a-u*r,t[3]=0,t[4]=o*u*a-c*r,t[5]=u*u*a+s,t[6]=c*u*a+o*r,t[7]=0,t[8]=o*c*a+u*r,t[9]=u*c*a-o*r,t[10]=c*c*a+s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)},e.fromXRotation=function(t,e){var n=Math.sin(e),i=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.fromYRotation=function(t,e){var n=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.fromZRotation=function(t,e){var n=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.fromRotationTranslation=a,e.fromQuat2=function(t,e){var n=new i.ARRAY_TYPE(3),r=-e[0],s=-e[1],o=-e[2],u=e[3],c=e[4],h=e[5],f=e[6],l=e[7],d=r*r+s*s+o*o+u*u;return d>0?(n[0]=2*(c*u+l*r+h*o-f*s)/d,n[1]=2*(h*u+l*s+f*r-c*o)/d,n[2]=2*(f*u+l*o+c*s-h*r)/d):(n[0]=2*(c*u+l*r+h*o-f*s),n[1]=2*(h*u+l*s+f*r-c*o),n[2]=2*(f*u+l*o+c*s-h*r)),a(t,e,n),t},e.getTranslation=function(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t},e.getScaling=function(t,e){var n=e[0],i=e[1],r=e[2],s=e[4],a=e[5],o=e[6],u=e[8],c=e[9],h=e[10];return t[0]=Math.sqrt(n*n+i*i+r*r),t[1]=Math.sqrt(s*s+a*a+o*o),t[2]=Math.sqrt(u*u+c*c+h*h),t},e.getRotation=function(t,e){var n=e[0]+e[5]+e[10],i=0;return n>0?(i=2*Math.sqrt(n+1),t[3]=.25*i,t[0]=(e[6]-e[9])/i,t[1]=(e[8]-e[2])/i,t[2]=(e[1]-e[4])/i):e[0]>e[5]&&e[0]>e[10]?(i=2*Math.sqrt(1+e[0]-e[5]-e[10]),t[3]=(e[6]-e[9])/i,t[0]=.25*i,t[1]=(e[1]+e[4])/i,t[2]=(e[8]+e[2])/i):e[5]>e[10]?(i=2*Math.sqrt(1+e[5]-e[0]-e[10]),t[3]=(e[8]-e[2])/i,t[0]=(e[1]+e[4])/i,t[1]=.25*i,t[2]=(e[6]+e[9])/i):(i=2*Math.sqrt(1+e[10]-e[0]-e[5]),t[3]=(e[1]-e[4])/i,t[0]=(e[8]+e[2])/i,t[1]=(e[6]+e[9])/i,t[2]=.25*i),t},e.fromRotationTranslationScale=function(t,e,n,i){var r=e[0],s=e[1],a=e[2],o=e[3],u=r+r,c=s+s,h=a+a,f=r*u,l=r*c,d=r*h,m=s*c,_=s*h,p=a*h,g=o*u,v=o*c,E=o*h,T=i[0],M=i[1],A=i[2];return t[0]=(1-(m+p))*T,t[1]=(l+E)*T,t[2]=(d-v)*T,t[3]=0,t[4]=(l-E)*M,t[5]=(1-(f+p))*M,t[6]=(_+g)*M,t[7]=0,t[8]=(d+v)*A,t[9]=(_-g)*A,t[10]=(1-(f+m))*A,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},e.fromRotationTranslationScaleOrigin=function(t,e,n,i,r){var s=e[0],a=e[1],o=e[2],u=e[3],c=s+s,h=a+a,f=o+o,l=s*c,d=s*h,m=s*f,_=a*h,p=a*f,g=o*f,v=u*c,E=u*h,T=u*f,M=i[0],A=i[1],I=i[2],L=r[0],O=r[1],S=r[2],R=(1-(_+g))*M,y=(d+T)*M,x=(m-E)*M,N=(d-T)*A,b=(1-(l+g))*A,w=(p+v)*A,C=(m+E)*I,P=(p-v)*I,H=(1-(l+_))*I;return t[0]=R,t[1]=y,t[2]=x,t[3]=0,t[4]=N,t[5]=b,t[6]=w,t[7]=0,t[8]=C,t[9]=P,t[10]=H,t[11]=0,t[12]=n[0]+L-(R*L+N*O+C*S),t[13]=n[1]+O-(y*L+b*O+P*S),t[14]=n[2]+S-(x*L+w*O+H*S),t[15]=1,t},e.fromQuat=function(t,e){var n=e[0],i=e[1],r=e[2],s=e[3],a=n+n,o=i+i,u=r+r,c=n*a,h=i*a,f=i*o,l=r*a,d=r*o,m=r*u,_=s*a,p=s*o,g=s*u;return t[0]=1-f-m,t[1]=h+g,t[2]=l-p,t[3]=0,t[4]=h-g,t[5]=1-c-m,t[6]=d+_,t[7]=0,t[8]=l+p,t[9]=d-_,t[10]=1-c-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},e.frustum=function(t,e,n,i,r,s,a){var o=1/(n-e),u=1/(r-i),c=1/(s-a);return t[0]=2*s*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*s*u,t[6]=0,t[7]=0,t[8]=(n+e)*o,t[9]=(r+i)*u,t[10]=(a+s)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=a*s*2*c,t[15]=0,t},e.perspective=function(t,e,n,i,r){var s=1/Math.tan(e/2),a=void 0;return t[0]=s/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=r&&r!==1/0?(a=1/(i-r),t[10]=(r+i)*a,t[14]=2*r*i*a):(t[10]=-1,t[14]=-2*i),t},e.perspectiveFromFieldOfView=function(t,e,n,i){var r=Math.tan(e.upDegrees*Math.PI/180),s=Math.tan(e.downDegrees*Math.PI/180),a=Math.tan(e.leftDegrees*Math.PI/180),o=Math.tan(e.rightDegrees*Math.PI/180),u=2/(a+o),c=2/(r+s);return t[0]=u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(a-o)*u*.5,t[9]=(r-s)*c*.5,t[10]=i/(n-i),t[11]=-1,t[12]=0,t[13]=0,t[14]=i*n/(n-i),t[15]=0,t},e.ortho=function(t,e,n,i,r,s,a){var o=1/(e-n),u=1/(i-r),c=1/(s-a);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+n)*o,t[13]=(r+i)*u,t[14]=(a+s)*c,t[15]=1,t},e.lookAt=function(t,e,n,s){var a=void 0,o=void 0,u=void 0,c=void 0,h=void 0,f=void 0,l=void 0,d=void 0,m=void 0,_=void 0,p=e[0],g=e[1],v=e[2],E=s[0],T=s[1],M=s[2],A=n[0],I=n[1],L=n[2];return Math.abs(p-A)<i.EPSILON&&Math.abs(g-I)<i.EPSILON&&Math.abs(v-L)<i.EPSILON?r(t):(l=p-A,d=g-I,m=v-L,a=T*(m*=_=1/Math.sqrt(l*l+d*d+m*m))-M*(d*=_),o=M*(l*=_)-E*m,u=E*d-T*l,(_=Math.sqrt(a*a+o*o+u*u))?(a*=_=1/_,o*=_,u*=_):(a=0,o=0,u=0),c=d*u-m*o,h=m*a-l*u,f=l*o-d*a,(_=Math.sqrt(c*c+h*h+f*f))?(c*=_=1/_,h*=_,f*=_):(c=0,h=0,f=0),t[0]=a,t[1]=c,t[2]=l,t[3]=0,t[4]=o,t[5]=h,t[6]=d,t[7]=0,t[8]=u,t[9]=f,t[10]=m,t[11]=0,t[12]=-(a*p+o*g+u*v),t[13]=-(c*p+h*g+f*v),t[14]=-(l*p+d*g+m*v),t[15]=1,t)},e.targetTo=function(t,e,n,i){var r=e[0],s=e[1],a=e[2],o=i[0],u=i[1],c=i[2],h=r-n[0],f=s-n[1],l=a-n[2],d=h*h+f*f+l*l;d>0&&(h*=d=1/Math.sqrt(d),f*=d,l*=d);var m=u*l-c*f,_=c*h-o*l,p=o*f-u*h;return(d=m*m+_*_+p*p)>0&&(m*=d=1/Math.sqrt(d),_*=d,p*=d),t[0]=m,t[1]=_,t[2]=p,t[3]=0,t[4]=f*p-l*_,t[5]=l*m-h*p,t[6]=h*_-f*m,t[7]=0,t[8]=h,t[9]=f,t[10]=l,t[11]=0,t[12]=r,t[13]=s,t[14]=a,t[15]=1,t},e.str=function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},e.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t},e.subtract=o,e.multiplyScalar=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12]*n,t[13]=e[13]*n,t[14]=e[14]*n,t[15]=e[15]*n,t},e.multiplyScalarAndAdd=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t[2]=e[2]+n[2]*i,t[3]=e[3]+n[3]*i,t[4]=e[4]+n[4]*i,t[5]=e[5]+n[5]*i,t[6]=e[6]+n[6]*i,t[7]=e[7]+n[7]*i,t[8]=e[8]+n[8]*i,t[9]=e[9]+n[9]*i,t[10]=e[10]+n[10]*i,t[11]=e[11]+n[11]*i,t[12]=e[12]+n[12]*i,t[13]=e[13]+n[13]*i,t[14]=e[14]+n[14]*i,t[15]=e[15]+n[15]*i,t},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15]},e.equals=function(t,e){var n=t[0],r=t[1],s=t[2],a=t[3],o=t[4],u=t[5],c=t[6],h=t[7],f=t[8],l=t[9],d=t[10],m=t[11],_=t[12],p=t[13],g=t[14],v=t[15],E=e[0],T=e[1],M=e[2],A=e[3],I=e[4],L=e[5],O=e[6],S=e[7],R=e[8],y=e[9],x=e[10],N=e[11],b=e[12],w=e[13],C=e[14],P=e[15];return Math.abs(n-E)<=i.EPSILON*Math.max(1,Math.abs(n),Math.abs(E))&&Math.abs(r-T)<=i.EPSILON*Math.max(1,Math.abs(r),Math.abs(T))&&Math.abs(s-M)<=i.EPSILON*Math.max(1,Math.abs(s),Math.abs(M))&&Math.abs(a-A)<=i.EPSILON*Math.max(1,Math.abs(a),Math.abs(A))&&Math.abs(o-I)<=i.EPSILON*Math.max(1,Math.abs(o),Math.abs(I))&&Math.abs(u-L)<=i.EPSILON*Math.max(1,Math.abs(u),Math.abs(L))&&Math.abs(c-O)<=i.EPSILON*Math.max(1,Math.abs(c),Math.abs(O))&&Math.abs(h-S)<=i.EPSILON*Math.max(1,Math.abs(h),Math.abs(S))&&Math.abs(f-R)<=i.EPSILON*Math.max(1,Math.abs(f),Math.abs(R))&&Math.abs(l-y)<=i.EPSILON*Math.max(1,Math.abs(l),Math.abs(y))&&Math.abs(d-x)<=i.EPSILON*Math.max(1,Math.abs(d),Math.abs(x))&&Math.abs(m-N)<=i.EPSILON*Math.max(1,Math.abs(m),Math.abs(N))&&Math.abs(_-b)<=i.EPSILON*Math.max(1,Math.abs(_),Math.abs(b))&&Math.abs(p-w)<=i.EPSILON*Math.max(1,Math.abs(p),Math.abs(w))&&Math.abs(g-C)<=i.EPSILON*Math.max(1,Math.abs(g),Math.abs(C))&&Math.abs(v-P)<=i.EPSILON*Math.max(1,Math.abs(v),Math.abs(P))};var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));function r(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function s(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],u=e[5],c=e[6],h=e[7],f=e[8],l=e[9],d=e[10],m=e[11],_=e[12],p=e[13],g=e[14],v=e[15],E=n[0],T=n[1],M=n[2],A=n[3];return t[0]=E*i+T*o+M*f+A*_,t[1]=E*r+T*u+M*l+A*p,t[2]=E*s+T*c+M*d+A*g,t[3]=E*a+T*h+M*m+A*v,E=n[4],T=n[5],M=n[6],A=n[7],t[4]=E*i+T*o+M*f+A*_,t[5]=E*r+T*u+M*l+A*p,t[6]=E*s+T*c+M*d+A*g,t[7]=E*a+T*h+M*m+A*v,E=n[8],T=n[9],M=n[10],A=n[11],t[8]=E*i+T*o+M*f+A*_,t[9]=E*r+T*u+M*l+A*p,t[10]=E*s+T*c+M*d+A*g,t[11]=E*a+T*h+M*m+A*v,E=n[12],T=n[13],M=n[14],A=n[15],t[12]=E*i+T*o+M*f+A*_,t[13]=E*r+T*u+M*l+A*p,t[14]=E*s+T*c+M*d+A*g,t[15]=E*a+T*h+M*m+A*v,t}function a(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=i+i,u=r+r,c=s+s,h=i*o,f=i*u,l=i*c,d=r*u,m=r*c,_=s*c,p=a*o,g=a*u,v=a*c;return t[0]=1-(d+_),t[1]=f+v,t[2]=l-g,t[3]=0,t[4]=f-v,t[5]=1-(h+_),t[6]=m+p,t[7]=0,t[8]=l+g,t[9]=m-p,t[10]=1-(h+d),t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function o(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t}e.mul=s,e.sub=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sub=e.mul=void 0,e.create=function(){var t=new i.ARRAY_TYPE(9);return i.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t},e.fromMat4=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t},e.clone=function(t){var e=new i.ARRAY_TYPE(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},e.fromValues=function(t,e,n,r,s,a,o,u,c){var h=new i.ARRAY_TYPE(9);return h[0]=t,h[1]=e,h[2]=n,h[3]=r,h[4]=s,h[5]=a,h[6]=o,h[7]=u,h[8]=c,h},e.set=function(t,e,n,i,r,s,a,o,u,c){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=a,t[6]=o,t[7]=u,t[8]=c,t},e.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},e.transpose=function(t,e){if(t===e){var n=e[1],i=e[2],r=e[5];t[1]=e[3],t[2]=e[6],t[3]=n,t[5]=e[7],t[6]=i,t[7]=r}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t},e.invert=function(t,e){var n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],c=e[7],h=e[8],f=h*a-o*c,l=-h*s+o*u,d=c*s-a*u,m=n*f+i*l+r*d;return m?(m=1/m,t[0]=f*m,t[1]=(-h*i+r*c)*m,t[2]=(o*i-r*a)*m,t[3]=l*m,t[4]=(h*n-r*u)*m,t[5]=(-o*n+r*s)*m,t[6]=d*m,t[7]=(-c*n+i*u)*m,t[8]=(a*n-i*s)*m,t):null},e.adjoint=function(t,e){var n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],c=e[7],h=e[8];return t[0]=a*h-o*c,t[1]=r*c-i*h,t[2]=i*o-r*a,t[3]=o*u-s*h,t[4]=n*h-r*u,t[5]=r*s-n*o,t[6]=s*c-a*u,t[7]=i*u-n*c,t[8]=n*a-i*s,t},e.determinant=function(t){var e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],u=t[7],c=t[8];return e*(c*s-a*u)+n*(-c*r+a*o)+i*(u*r-s*o)},e.multiply=r,e.translate=function(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],u=e[5],c=e[6],h=e[7],f=e[8],l=n[0],d=n[1];return t[0]=i,t[1]=r,t[2]=s,t[3]=a,t[4]=o,t[5]=u,t[6]=l*i+d*a+c,t[7]=l*r+d*o+h,t[8]=l*s+d*u+f,t},e.rotate=function(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],u=e[5],c=e[6],h=e[7],f=e[8],l=Math.sin(n),d=Math.cos(n);return t[0]=d*i+l*a,t[1]=d*r+l*o,t[2]=d*s+l*u,t[3]=d*a-l*i,t[4]=d*o-l*r,t[5]=d*u-l*s,t[6]=c,t[7]=h,t[8]=f,t},e.scale=function(t,e,n){var i=n[0],r=n[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=r*e[3],t[4]=r*e[4],t[5]=r*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},e.fromTranslation=function(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t},e.fromRotation=function(t,e){var n=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=n,t[2]=0,t[3]=-n,t[4]=i,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},e.fromScaling=function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},e.fromMat2d=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t},e.fromQuat=function(t,e){var n=e[0],i=e[1],r=e[2],s=e[3],a=n+n,o=i+i,u=r+r,c=n*a,h=i*a,f=i*o,l=r*a,d=r*o,m=r*u,_=s*a,p=s*o,g=s*u;return t[0]=1-f-m,t[3]=h-g,t[6]=l+p,t[1]=h+g,t[4]=1-c-m,t[7]=d-_,t[2]=l-p,t[5]=d+_,t[8]=1-c-f,t},e.normalFromMat4=function(t,e){var n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],c=e[7],h=e[8],f=e[9],l=e[10],d=e[11],m=e[12],_=e[13],p=e[14],g=e[15],v=n*o-i*a,E=n*u-r*a,T=n*c-s*a,M=i*u-r*o,A=i*c-s*o,I=r*c-s*u,L=h*_-f*m,O=h*p-l*m,S=h*g-d*m,R=f*p-l*_,y=f*g-d*_,x=l*g-d*p,N=v*x-E*y+T*R+M*S-A*O+I*L;return N?(N=1/N,t[0]=(o*x-u*y+c*R)*N,t[1]=(u*S-a*x-c*O)*N,t[2]=(a*y-o*S+c*L)*N,t[3]=(r*y-i*x-s*R)*N,t[4]=(n*x-r*S+s*O)*N,t[5]=(i*S-n*y-s*L)*N,t[6]=(_*I-p*A+g*M)*N,t[7]=(p*T-m*I-g*E)*N,t[8]=(m*A-_*T+g*v)*N,t):null},e.projection=function(t,e,n){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/n,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t},e.str=function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},e.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t},e.subtract=s,e.multiplyScalar=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t},e.multiplyScalarAndAdd=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t[2]=e[2]+n[2]*i,t[3]=e[3]+n[3]*i,t[4]=e[4]+n[4]*i,t[5]=e[5]+n[5]*i,t[6]=e[6]+n[6]*i,t[7]=e[7]+n[7]*i,t[8]=e[8]+n[8]*i,t},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]},e.equals=function(t,e){var n=t[0],r=t[1],s=t[2],a=t[3],o=t[4],u=t[5],c=t[6],h=t[7],f=t[8],l=e[0],d=e[1],m=e[2],_=e[3],p=e[4],g=e[5],v=e[6],E=e[7],T=e[8];return Math.abs(n-l)<=i.EPSILON*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(r-d)<=i.EPSILON*Math.max(1,Math.abs(r),Math.abs(d))&&Math.abs(s-m)<=i.EPSILON*Math.max(1,Math.abs(s),Math.abs(m))&&Math.abs(a-_)<=i.EPSILON*Math.max(1,Math.abs(a),Math.abs(_))&&Math.abs(o-p)<=i.EPSILON*Math.max(1,Math.abs(o),Math.abs(p))&&Math.abs(u-g)<=i.EPSILON*Math.max(1,Math.abs(u),Math.abs(g))&&Math.abs(c-v)<=i.EPSILON*Math.max(1,Math.abs(c),Math.abs(v))&&Math.abs(h-E)<=i.EPSILON*Math.max(1,Math.abs(h),Math.abs(E))&&Math.abs(f-T)<=i.EPSILON*Math.max(1,Math.abs(f),Math.abs(T))};var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));function r(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],u=e[5],c=e[6],h=e[7],f=e[8],l=n[0],d=n[1],m=n[2],_=n[3],p=n[4],g=n[5],v=n[6],E=n[7],T=n[8];return t[0]=l*i+d*a+m*c,t[1]=l*r+d*o+m*h,t[2]=l*s+d*u+m*f,t[3]=_*i+p*a+g*c,t[4]=_*r+p*o+g*h,t[5]=_*s+p*u+g*f,t[6]=v*i+E*a+T*c,t[7]=v*r+E*o+T*h,t[8]=v*s+E*u+T*f,t}function s(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t}e.mul=r,e.sub=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.forEach=e.sqrLen=e.sqrDist=e.dist=e.div=e.mul=e.sub=e.len=void 0,e.create=r,e.clone=function(t){var e=new i.ARRAY_TYPE(2);return e[0]=t[0],e[1]=t[1],e},e.fromValues=function(t,e){var n=new i.ARRAY_TYPE(2);return n[0]=t,n[1]=e,n},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t},e.set=function(t,e,n){return t[0]=e,t[1]=n,t},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t},e.subtract=s,e.multiply=a,e.divide=o,e.ceil=function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t},e.floor=function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t},e.min=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t},e.max=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t},e.round=function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t},e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t},e.scaleAndAdd=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t},e.distance=u,e.squaredDistance=c,e.length=h,e.squaredLength=f,e.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t},e.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t},e.normalize=function(t,e){var n=e[0],i=e[1],r=n*n+i*i;return r>0&&(r=1/Math.sqrt(r),t[0]=e[0]*r,t[1]=e[1]*r),t},e.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]},e.cross=function(t,e,n){var i=e[0]*n[1]-e[1]*n[0];return t[0]=t[1]=0,t[2]=i,t},e.lerp=function(t,e,n,i){var r=e[0],s=e[1];return t[0]=r+i*(n[0]-r),t[1]=s+i*(n[1]-s),t},e.random=function(t,e){e=e||1;var n=2*i.RANDOM()*Math.PI;return t[0]=Math.cos(n)*e,t[1]=Math.sin(n)*e,t},e.transformMat2=function(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[2]*r,t[1]=n[1]*i+n[3]*r,t},e.transformMat2d=function(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t},e.transformMat3=function(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[3]*r+n[6],t[1]=n[1]*i+n[4]*r+n[7],t},e.transformMat4=function(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[4]*r+n[12],t[1]=n[1]*i+n[5]*r+n[13],t},e.rotate=function(t,e,n,i){var r=e[0]-n[0],s=e[1]-n[1],a=Math.sin(i),o=Math.cos(i);return t[0]=r*o-s*a+n[0],t[1]=r*a+s*o+n[1],t},e.angle=function(t,e){var n=t[0],i=t[1],r=e[0],s=e[1],a=n*n+i*i;a>0&&(a=1/Math.sqrt(a));var o=r*r+s*s;o>0&&(o=1/Math.sqrt(o));var u=(n*r+i*s)*a*o;return u>1?0:u<-1?Math.PI:Math.acos(u)},e.str=function(t){return"vec2("+t[0]+", "+t[1]+")"},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]},e.equals=function(t,e){var n=t[0],r=t[1],s=e[0],a=e[1];return Math.abs(n-s)<=i.EPSILON*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(r-a)<=i.EPSILON*Math.max(1,Math.abs(r),Math.abs(a))};var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));function r(){var t=new i.ARRAY_TYPE(2);return i.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0),t}function s(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function a(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t}function o(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t}function u(t,e){var n=e[0]-t[0],i=e[1]-t[1];return Math.sqrt(n*n+i*i)}function c(t,e){var n=e[0]-t[0],i=e[1]-t[1];return n*n+i*i}function h(t){var e=t[0],n=t[1];return Math.sqrt(e*e+n*n)}function f(t){var e=t[0],n=t[1];return e*e+n*n}e.len=h,e.sub=s,e.mul=a,e.div=o,e.dist=u,e.sqrDist=c,e.sqrLen=f,e.forEach=function(){var t=r();return function(e,n,i,r,s,a){var o,u=void 0;for(n||(n=2),i||(i=0),o=r?Math.min(r*n+i,e.length):e.length,u=i;u<o;u+=n)t[0]=e[u],t[1]=e[u+1],s(t,t,a),e[u]=t[0],e[u+1]=t[1];return e}}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sqrLen=e.squaredLength=e.len=e.length=e.dot=e.mul=e.setReal=e.getReal=void 0,e.create=function(){var t=new i.ARRAY_TYPE(8);return i.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0),t[3]=1,t},e.clone=function(t){var e=new i.ARRAY_TYPE(8);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e},e.fromValues=function(t,e,n,r,s,a,o,u){var c=new i.ARRAY_TYPE(8);return c[0]=t,c[1]=e,c[2]=n,c[3]=r,c[4]=s,c[5]=a,c[6]=o,c[7]=u,c},e.fromRotationTranslationValues=function(t,e,n,r,s,a,o){var u=new i.ARRAY_TYPE(8);u[0]=t,u[1]=e,u[2]=n,u[3]=r;var c=.5*s,h=.5*a,f=.5*o;return u[4]=c*r+h*n-f*e,u[5]=h*r+f*t-c*n,u[6]=f*r+c*e-h*t,u[7]=-c*t-h*e-f*n,u},e.fromRotationTranslation=o,e.fromTranslation=function(t,e){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*e[0],t[5]=.5*e[1],t[6]=.5*e[2],t[7]=0,t},e.fromRotation=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},e.fromMat4=function(t,e){var n=r.create();s.getRotation(n,e);var a=new i.ARRAY_TYPE(3);return s.getTranslation(a,e),o(t,n,a),t},e.copy=u,e.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},e.set=function(t,e,n,i,r,s,a,o,u){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=a,t[6]=o,t[7]=u,t},e.getDual=function(t,e){return t[0]=e[4],t[1]=e[5],t[2]=e[6],t[3]=e[7],t},e.setDual=function(t,e){return t[4]=e[0],t[5]=e[1],t[6]=e[2],t[7]=e[3],t},e.getTranslation=function(t,e){var n=e[4],i=e[5],r=e[6],s=e[7],a=-e[0],o=-e[1],u=-e[2],c=e[3];return t[0]=2*(n*c+s*a+i*u-r*o),t[1]=2*(i*c+s*o+r*a-n*u),t[2]=2*(r*c+s*u+n*o-i*a),t},e.translate=function(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=.5*n[0],u=.5*n[1],c=.5*n[2],h=e[4],f=e[5],l=e[6],d=e[7];return t[0]=i,t[1]=r,t[2]=s,t[3]=a,t[4]=a*o+r*c-s*u+h,t[5]=a*u+s*o-i*c+f,t[6]=a*c+i*u-r*o+l,t[7]=-i*o-r*u-s*c+d,t},e.rotateX=function(t,e,n){var i=-e[0],s=-e[1],a=-e[2],o=e[3],u=e[4],c=e[5],h=e[6],f=e[7],l=u*o+f*i+c*a-h*s,d=c*o+f*s+h*i-u*a,m=h*o+f*a+u*s-c*i,_=f*o-u*i-c*s-h*a;return r.rotateX(t,e,n),i=t[0],s=t[1],a=t[2],o=t[3],t[4]=l*o+_*i+d*a-m*s,t[5]=d*o+_*s+m*i-l*a,t[6]=m*o+_*a+l*s-d*i,t[7]=_*o-l*i-d*s-m*a,t},e.rotateY=function(t,e,n){var i=-e[0],s=-e[1],a=-e[2],o=e[3],u=e[4],c=e[5],h=e[6],f=e[7],l=u*o+f*i+c*a-h*s,d=c*o+f*s+h*i-u*a,m=h*o+f*a+u*s-c*i,_=f*o-u*i-c*s-h*a;return r.rotateY(t,e,n),i=t[0],s=t[1],a=t[2],o=t[3],t[4]=l*o+_*i+d*a-m*s,t[5]=d*o+_*s+m*i-l*a,t[6]=m*o+_*a+l*s-d*i,t[7]=_*o-l*i-d*s-m*a,t},e.rotateZ=function(t,e,n){var i=-e[0],s=-e[1],a=-e[2],o=e[3],u=e[4],c=e[5],h=e[6],f=e[7],l=u*o+f*i+c*a-h*s,d=c*o+f*s+h*i-u*a,m=h*o+f*a+u*s-c*i,_=f*o-u*i-c*s-h*a;return r.rotateZ(t,e,n),i=t[0],s=t[1],a=t[2],o=t[3],t[4]=l*o+_*i+d*a-m*s,t[5]=d*o+_*s+m*i-l*a,t[6]=m*o+_*a+l*s-d*i,t[7]=_*o-l*i-d*s-m*a,t},e.rotateByQuatAppend=function(t,e,n){var i=n[0],r=n[1],s=n[2],a=n[3],o=e[0],u=e[1],c=e[2],h=e[3];return t[0]=o*a+h*i+u*s-c*r,t[1]=u*a+h*r+c*i-o*s,t[2]=c*a+h*s+o*r-u*i,t[3]=h*a-o*i-u*r-c*s,o=e[4],u=e[5],c=e[6],h=e[7],t[4]=o*a+h*i+u*s-c*r,t[5]=u*a+h*r+c*i-o*s,t[6]=c*a+h*s+o*r-u*i,t[7]=h*a-o*i-u*r-c*s,t},e.rotateByQuatPrepend=function(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=n[0],u=n[1],c=n[2],h=n[3];return t[0]=i*h+a*o+r*c-s*u,t[1]=r*h+a*u+s*o-i*c,t[2]=s*h+a*c+i*u-r*o,t[3]=a*h-i*o-r*u-s*c,o=n[4],u=n[5],c=n[6],h=n[7],t[4]=i*h+a*o+r*c-s*u,t[5]=r*h+a*u+s*o-i*c,t[6]=s*h+a*c+i*u-r*o,t[7]=a*h-i*o-r*u-s*c,t},e.rotateAroundAxis=function(t,e,n,r){if(Math.abs(r)<i.EPSILON)return u(t,e);var s=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);r*=.5;var a=Math.sin(r),o=a*n[0]/s,c=a*n[1]/s,h=a*n[2]/s,f=Math.cos(r),l=e[0],d=e[1],m=e[2],_=e[3];t[0]=l*f+_*o+d*h-m*c,t[1]=d*f+_*c+m*o-l*h,t[2]=m*f+_*h+l*c-d*o,t[3]=_*f-l*o-d*c-m*h;var p=e[4],g=e[5],v=e[6],E=e[7];return t[4]=p*f+E*o+g*h-v*c,t[5]=g*f+E*c+v*o-p*h,t[6]=v*f+E*h+p*c-g*o,t[7]=E*f-p*o-g*c-v*h,t},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t},e.multiply=c,e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t},e.lerp=function(t,e,n,i){var r=1-i;return h(e,n)<0&&(i=-i),t[0]=e[0]*r+n[0]*i,t[1]=e[1]*r+n[1]*i,t[2]=e[2]*r+n[2]*i,t[3]=e[3]*r+n[3]*i,t[4]=e[4]*r+n[4]*i,t[5]=e[5]*r+n[5]*i,t[6]=e[6]*r+n[6]*i,t[7]=e[7]*r+n[7]*i,t},e.invert=function(t,e){var n=l(e);return t[0]=-e[0]/n,t[1]=-e[1]/n,t[2]=-e[2]/n,t[3]=e[3]/n,t[4]=-e[4]/n,t[5]=-e[5]/n,t[6]=-e[6]/n,t[7]=e[7]/n,t},e.conjugate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=e[7],t},e.normalize=function(t,e){var n=l(e);if(n>0){n=Math.sqrt(n);var i=e[0]/n,r=e[1]/n,s=e[2]/n,a=e[3]/n,o=e[4],u=e[5],c=e[6],h=e[7],f=i*o+r*u+s*c+a*h;t[0]=i,t[1]=r,t[2]=s,t[3]=a,t[4]=(o-i*f)/n,t[5]=(u-r*f)/n,t[6]=(c-s*f)/n,t[7]=(h-a*f)/n}return t},e.str=function(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]},e.equals=function(t,e){var n=t[0],r=t[1],s=t[2],a=t[3],o=t[4],u=t[5],c=t[6],h=t[7],f=e[0],l=e[1],d=e[2],m=e[3],_=e[4],p=e[5],g=e[6],v=e[7];return Math.abs(n-f)<=i.EPSILON*Math.max(1,Math.abs(n),Math.abs(f))&&Math.abs(r-l)<=i.EPSILON*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(s-d)<=i.EPSILON*Math.max(1,Math.abs(s),Math.abs(d))&&Math.abs(a-m)<=i.EPSILON*Math.max(1,Math.abs(a),Math.abs(m))&&Math.abs(o-_)<=i.EPSILON*Math.max(1,Math.abs(o),Math.abs(_))&&Math.abs(u-p)<=i.EPSILON*Math.max(1,Math.abs(u),Math.abs(p))&&Math.abs(c-g)<=i.EPSILON*Math.max(1,Math.abs(c),Math.abs(g))&&Math.abs(h-v)<=i.EPSILON*Math.max(1,Math.abs(h),Math.abs(v))};var i=a(n(0)),r=a(n(3)),s=a(n(4));function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t,e,n){var i=.5*n[0],r=.5*n[1],s=.5*n[2],a=e[0],o=e[1],u=e[2],c=e[3];return t[0]=a,t[1]=o,t[2]=u,t[3]=c,t[4]=i*c+r*u-s*o,t[5]=r*c+s*a-i*u,t[6]=s*c+i*o-r*a,t[7]=-i*a-r*o-s*u,t}function u(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t}function c(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=n[4],u=n[5],c=n[6],h=n[7],f=e[4],l=e[5],d=e[6],m=e[7],_=n[0],p=n[1],g=n[2],v=n[3];return t[0]=i*v+a*_+r*g-s*p,t[1]=r*v+a*p+s*_-i*g,t[2]=s*v+a*g+i*p-r*_,t[3]=a*v-i*_-r*p-s*g,t[4]=i*h+a*o+r*c-s*u+f*v+m*_+l*g-d*p,t[5]=r*h+a*u+s*o-i*c+l*v+m*p+d*_-f*g,t[6]=s*h+a*c+i*u-r*o+d*v+m*g+f*p-l*_,t[7]=a*h-i*o-r*u-s*c+m*v-f*_-l*p-d*g,t}e.getReal=r.copy,e.setReal=r.copy,e.mul=c;var h=e.dot=r.dot,f=e.length=r.length,l=(e.len=f,e.squaredLength=r.squaredLength);e.sqrLen=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sub=e.mul=void 0,e.create=function(){var t=new i.ARRAY_TYPE(6);return i.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[4]=0,t[5]=0),t[0]=1,t[3]=1,t},e.clone=function(t){var e=new i.ARRAY_TYPE(6);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},e.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},e.fromValues=function(t,e,n,r,s,a){var o=new i.ARRAY_TYPE(6);return o[0]=t,o[1]=e,o[2]=n,o[3]=r,o[4]=s,o[5]=a,o},e.set=function(t,e,n,i,r,s,a){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=a,t},e.invert=function(t,e){var n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=n*s-i*r;return u?(u=1/u,t[0]=s*u,t[1]=-i*u,t[2]=-r*u,t[3]=n*u,t[4]=(r*o-s*a)*u,t[5]=(i*a-n*o)*u,t):null},e.determinant=function(t){return t[0]*t[3]-t[1]*t[2]},e.multiply=r,e.rotate=function(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],u=e[5],c=Math.sin(n),h=Math.cos(n);return t[0]=i*h+s*c,t[1]=r*h+a*c,t[2]=i*-c+s*h,t[3]=r*-c+a*h,t[4]=o,t[5]=u,t},e.scale=function(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],u=e[5],c=n[0],h=n[1];return t[0]=i*c,t[1]=r*c,t[2]=s*h,t[3]=a*h,t[4]=o,t[5]=u,t},e.translate=function(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],u=e[5],c=n[0],h=n[1];return t[0]=i,t[1]=r,t[2]=s,t[3]=a,t[4]=i*c+s*h+o,t[5]=r*c+a*h+u,t},e.fromRotation=function(t,e){var n=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=n,t[2]=-n,t[3]=i,t[4]=0,t[5]=0,t},e.fromScaling=function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=e[1],t[4]=0,t[5]=0,t},e.fromTranslation=function(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=e[0],t[5]=e[1],t},e.str=function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},e.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t},e.subtract=s,e.multiplyScalar=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t},e.multiplyScalarAndAdd=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t[2]=e[2]+n[2]*i,t[3]=e[3]+n[3]*i,t[4]=e[4]+n[4]*i,t[5]=e[5]+n[5]*i,t},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]},e.equals=function(t,e){var n=t[0],r=t[1],s=t[2],a=t[3],o=t[4],u=t[5],c=e[0],h=e[1],f=e[2],l=e[3],d=e[4],m=e[5];return Math.abs(n-c)<=i.EPSILON*Math.max(1,Math.abs(n),Math.abs(c))&&Math.abs(r-h)<=i.EPSILON*Math.max(1,Math.abs(r),Math.abs(h))&&Math.abs(s-f)<=i.EPSILON*Math.max(1,Math.abs(s),Math.abs(f))&&Math.abs(a-l)<=i.EPSILON*Math.max(1,Math.abs(a),Math.abs(l))&&Math.abs(o-d)<=i.EPSILON*Math.max(1,Math.abs(o),Math.abs(d))&&Math.abs(u-m)<=i.EPSILON*Math.max(1,Math.abs(u),Math.abs(m))};var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));function r(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],u=e[5],c=n[0],h=n[1],f=n[2],l=n[3],d=n[4],m=n[5];return t[0]=i*c+s*h,t[1]=r*c+a*h,t[2]=i*f+s*l,t[3]=r*f+a*l,t[4]=i*d+s*m+o,t[5]=r*d+a*m+u,t}function s(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t}e.mul=r,e.sub=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sub=e.mul=void 0,e.create=function(){var t=new i.ARRAY_TYPE(4);return i.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t},e.clone=function(t){var e=new i.ARRAY_TYPE(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},e.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},e.fromValues=function(t,e,n,r){var s=new i.ARRAY_TYPE(4);return s[0]=t,s[1]=e,s[2]=n,s[3]=r,s},e.set=function(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t},e.transpose=function(t,e){if(t===e){var n=e[1];t[1]=e[2],t[2]=n}else t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3];return t},e.invert=function(t,e){var n=e[0],i=e[1],r=e[2],s=e[3],a=n*s-r*i;return a?(a=1/a,t[0]=s*a,t[1]=-i*a,t[2]=-r*a,t[3]=n*a,t):null},e.adjoint=function(t,e){var n=e[0];return t[0]=e[3],t[1]=-e[1],t[2]=-e[2],t[3]=n,t},e.determinant=function(t){return t[0]*t[3]-t[2]*t[1]},e.multiply=r,e.rotate=function(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(n),u=Math.cos(n);return t[0]=i*u+s*o,t[1]=r*u+a*o,t[2]=i*-o+s*u,t[3]=r*-o+a*u,t},e.scale=function(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=n[0],u=n[1];return t[0]=i*o,t[1]=r*o,t[2]=s*u,t[3]=a*u,t},e.fromRotation=function(t,e){var n=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=n,t[2]=-n,t[3]=i,t},e.fromScaling=function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=e[1],t},e.str=function(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},e.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))},e.LDU=function(t,e,n,i){return t[2]=i[2]/i[0],n[0]=i[0],n[1]=i[1],n[3]=i[3]-t[2]*n[1],[t,e,n]},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t},e.subtract=s,e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]},e.equals=function(t,e){var n=t[0],r=t[1],s=t[2],a=t[3],o=e[0],u=e[1],c=e[2],h=e[3];return Math.abs(n-o)<=i.EPSILON*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(r-u)<=i.EPSILON*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(s-c)<=i.EPSILON*Math.max(1,Math.abs(s),Math.abs(c))&&Math.abs(a-h)<=i.EPSILON*Math.max(1,Math.abs(a),Math.abs(h))},e.multiplyScalar=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t},e.multiplyScalarAndAdd=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t[2]=e[2]+n[2]*i,t[3]=e[3]+n[3]*i,t};var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));function r(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=n[0],u=n[1],c=n[2],h=n[3];return t[0]=i*o+s*u,t[1]=r*o+a*u,t[2]=i*c+s*h,t[3]=r*c+a*h,t}function s(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t}e.mul=r,e.sub=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.vec4=e.vec3=e.vec2=e.quat2=e.quat=e.mat4=e.mat3=e.mat2d=e.mat2=e.glMatrix=void 0;var i=d(n(0)),r=d(n(9)),s=d(n(8)),a=d(n(5)),o=d(n(4)),u=d(n(3)),c=d(n(7)),h=d(n(6)),f=d(n(2)),l=d(n(1));function d(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}e.glMatrix=i,e.mat2=r,e.mat2d=s,e.mat3=a,e.mat4=o,e.quat=u,e.quat2=c,e.vec2=h,e.vec3=f,e.vec4=l}])},function(t,e,n){"use strict";var i=n(19),r=n.n(i);e.a=r.a},function(t,e,n){"use strict";var i={};n.r(i),n.d(i,"POSITION",(function(){return u})),n.d(i,"NORMAL",(function(){return c})),n.d(i,"DEPTH",(function(){return h})),n.d(i,"DISTANCE",(function(){return f}));var r=n(35),s=n.n(r).a,a=n(36),o=n.n(a).a,u="POSITION",c="NORMAL",h="DEPTH",f="DISTANCE",l={webgl:s,webglExtensions:o,Hilo:i};Object.assign(l,s,o,i);e.a=l},function(t,e,n){"use strict";var i={},r={_cache:i,level:7,LEVEL_NONE:0,LEVEL_LOG:1,LEVEL_WARN:2,LEVEL_ERROR:4,log:function(){var t=this.console;return 1&this.level&&t.log.apply(t,arguments),this},warn:function(){var t=this.console;return 2&this.level&&t.warn.apply(t,arguments),this},error:function(){var t=this.console;return 4&this.level&&t.error.apply(t,arguments),this},logOnce:function(t){return i["log_"+t]||(i["log_"+t]=!0,this.log.apply(this,Array.prototype.slice.call(arguments,1))),this},warnOnce:function(t){return i["warn_"+t]||(i["warn_"+t]=!0,this.warn.apply(this,Array.prototype.slice.call(arguments,1))),this},errorOnce:function(t){return i["error_"+t]||(i["error_"+t]=!0,this.error.apply(this,Array.prototype.slice.call(arguments,1))),this},_console:console,get console(){return this._console},set console(t){this._console=t}};e.a=r},function(t,e,n){"use strict";n.r(e),n.d(e,"each",(function(){return p})),n.d(e,"getRelativePath",(function(){return d})),n.d(e,"convertUint8ArrayToString",(function(){return m})),n.d(e,"getExtension",(function(){return _})),n.d(e,"getIndexFromSortedArray",(function(){return g})),n.d(e,"insertToSortedArray",(function(){return v})),n.d(e,"padLeft",(function(){return E})),n.d(e,"getTypedArrayClass",(function(){return I})),n.d(e,"copyArrayData",(function(){return L})),n.d(e,"isStrOrNumber",(function(){return O})),n.d(e,"getTypedArrayGLType",(function(){return T})),n.d(e,"getBlobUrl",(function(){return y})),n.d(e,"isBlobUrl",(function(){return S})),n.d(e,"revokeBlobUrl",(function(){return R})),n.d(e,"isArrayLike",(function(){return x})),n.d(e,"getElementRect",(function(){return N})),n.d(e,"serialRun",(function(){return b})),n.d(e,"hasOwnProperty",(function(){return w}));var i=n(3),r=n(2);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a,o=r.a.BYTE,u=r.a.UNSIGNED_BYTE,c=r.a.SHORT,h=r.a.UNSIGNED_SHORT,f=r.a.UNSIGNED_INT,l=r.a.FLOAT;function d(t,e){if(/^(?:http|blob|data:|\/)/.test(e))return e;var n;for(t=t.replace(/\/[^/]*?$/,"").split("/"),e=e.split("/"),n=0;n<e.length;n++){var i=e[n];if(".."===i)t.pop();else if("."!==i)break}return t.join("/")+"/"+e.slice(n).join("/")}function m(t,e){if(window.TextDecoder)return a||(a=new TextDecoder("utf-8")),t instanceof Uint8Array||(t=new Uint8Array(t)),a.decode(t);for(var n="",i=0;i<t.length;i++)n+=String.fromCharCode(t[i]);return e&&(n=decodeURIComponent(escape(n))),n}function _(t){var e=String(t).match(/\/?[^/]+\.(\w+)(\?\S+)?$/i);return e&&e[1].toLowerCase()||null}function p(t,e){t&&(Array.isArray(t)?t.forEach(e):Object.keys(t).forEach((function(n){e(t[n],n)})))}function g(t,e,n){if(!t||!t.length)return[0,0];for(var i=0,r=t.length-1;i<=r;){var s=i+r>>1,a=n(t[s],e);if(0===a)return[s,s];a<0?i=s+1:r=s-1}return i>r?[r,i]:[i,r]}function v(t,e,n){var i=g(t,e,n);t.splice(i[1],0,e)}function E(t,e,n){return e<=t.length?t:new Array(e-t.length+1).join(n||"0")+t}function T(t){return t instanceof Float32Array?l:t instanceof Int8Array?o:t instanceof Uint8Array?u:t instanceof Int16Array?c:t instanceof Uint16Array?h:t instanceof Uint32Array?f:l}var M,A,I=(s(M={},o,Int8Array),s(M,u,Uint8Array),s(M,c,Int16Array),s(M,h,Uint16Array),s(M,f,Uint32Array),s(M,l,Float32Array),A=M,function(t){return A[t]||Float32Array});function L(t,e,n,i,r){if(t&&e){e.isGeometryData&&(e=e.data);for(var s=0;s<r;s++)t[n+s]=e[i+s]}}function O(t){return"string"==typeof t||"number"==typeof t}function S(t){return/^blob:/.test(t)}function R(t){window.URL&&URL.revokeObjectURL(t)}function y(t,e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),window.Blob&&window.URL)try{var n=new Blob([e],{type:t});return window.URL.createObjectURL(n)}catch(e){i.a.warn("new Blob error",t)}return"data:".concat(t,";base64,").concat(btoa(m(e)))}function x(t){return Array.isArray(t)||t.BYTES_PER_ELEMENT||t.length}function N(t){var e,n=document.documentElement;try{e=t.getBoundingClientRect()}catch(n){e={top:t.offsetTop,left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,bottom:t.offsetTop+t.offsetHeight}}var i=(window.pageXOffset||n.scrollLeft)-(n.clientLeft||0)||0,r=(window.pageYOffset||n.scrollTop)-(n.clientTop||0)||0,s=window.getComputedStyle?getComputedStyle(t):t.currentStyle,a=parseInt,o=a(s.paddingLeft)+a(s.borderLeftWidth)||0,u=a(s.paddingTop)+a(s.borderTopWidth)||0,c=a(s.paddingRight)+a(s.borderRightWidth)||0,h=a(s.paddingBottom)+a(s.borderBottomWidth)||0,f=e.top||0,l=e.left||0;return{left:l+i+o,top:f+r+u,width:(e.right||0)-c-l-o,height:(e.bottom||0)-h-f-u}}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return Array.isArray(t)||(t=Object.values(t)),t.reduce((function(t,n,i){return t.then((function(){return e(n,i)}))}),Promise.resolve())}function w(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},function(t,e,n){"use strict";var i=n(0),r=n(1).a.create({className:"Vector3",isVector3:!0,constructor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.elements=i.vec3.fromValues(t,e,n)},copy:function(t){return i.vec3.copy(this.elements,t.elements),this},clone:function(){var t=this.elements;return new this.constructor(t[0],t[1],t[2])},toArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.elements;return t[0+e]=n[0],t[1+e]=n[1],t[2+e]=n[2],t},fromArray:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.elements;return n[0]=t[e+0],n[1]=t[e+1],n[2]=t[e+2],this},set:function(t,e,n){return i.vec3.set(this.elements,t,e,n),this},add:function(t,e){return e||(e=t,t=this),i.vec3.add(this.elements,t.elements,e.elements),this},subtract:function(t,e){return e||(e=t,t=this),i.vec3.subtract(this.elements,t.elements,e.elements),this},multiply:function(t,e){return e||(e=t,t=this),i.vec3.multiply(this.elements,t.elements,e.elements),this},divide:function(t,e){return e||(e=t,t=this),i.vec3.divide(this.elements,t.elements,e.elements),this},ceil:function(){return i.vec3.ceil(this.elements,this.elements),this},floor:function(){return i.vec3.floor(this.elements,this.elements),this},min:function(t,e){return e||(e=t,t=this),i.vec3.min(this.elements,t.elements,e.elements),this},max:function(t,e){return e||(e=t,t=this),i.vec3.max(this.elements,t.elements,e.elements),this},round:function(){return i.vec3.round(this.elements,this.elements),this},scale:function(t){return i.vec3.scale(this.elements,this.elements,t),this},scaleAndAdd:function(t,e,n){return n||(n=e,e=this),i.vec3.scaleAndAdd(this.elements,e.elements,n.elements,t),this},distance:function(t,e){return e||(e=t,t=this),i.vec3.distance(t.elements,e.elements)},squaredDistance:function(t,e){return e||(e=t,t=this),i.vec3.squaredDistance(t.elements,e.elements)},length:function(){return i.vec3.length(this.elements)},squaredLength:function(){return i.vec3.squaredLength(this.elements)},negate:function(){return i.vec3.negate(this.elements,this.elements),this},inverse:function(t){return t||(t=this),i.vec3.inverse(this.elements,t.elements),this},normalize:function(){return i.vec3.normalize(this.elements,this.elements),this},dot:function(t,e){return e||(e=t,t=this),i.vec3.dot(t.elements,e.elements)},cross:function(t,e){return e||(e=t,t=this),i.vec3.cross(this.elements,t.elements,e.elements),this},lerp:function(t,e){return i.vec3.lerp(this.elements,this.elements,t.elements,e),this},hermite:function(t,e,n,r,s){return i.vec3.hermite(this.elements,t.elements,e.elements,n.elements,r.elements,s),this},bezier:function(t,e,n,r,s){return i.vec3.bezier(this.elements,t.elements,e.elements,n.elements,r.elements,s),this},random:function(t){return i.vec3.random(this.elements,t),this},transformMat3:function(t){return i.vec3.transformMat3(this.elements,this.elements,t.elements),this},transformMat4:function(t){return i.vec3.transformMat4(this.elements,this.elements,t.elements),this},transformDirection:function(t){var e=this.elements,n=t.elements,i=e[0],r=e[1],s=e[2];return e[0]=i*n[0]+r*n[4]+s*n[8],e[1]=i*n[1]+r*n[5]+s*n[9],e[2]=i*n[2]+r*n[6]+s*n[10],this},transformQuat:function(t){return i.vec3.transformQuat(this.elements,this.elements,t.elements),this},rotateX:function(t,e){return i.vec3.rotateX(this.elements,this.elements,t.elements,e),this},rotateY:function(t,e){return i.vec3.rotateY(this.elements,this.elements,t.elements,e),this},rotateZ:function(t,e){return i.vec3.rotateZ(this.elements,this.elements,t.elements,e),this},exactEquals:function(t,e){return e||(e=t,t=this),i.vec3.exactEquals(t.elements,e.elements)},equals:function(t,e){return e||(e=t,t=this),i.vec3.equals(t.elements,e.elements)},x:{get:function(){return this.elements[0]},set:function(t){this.elements[0]=t}},y:{get:function(){return this.elements[1]},set:function(t){this.elements[1]=t}},z:{get:function(){return this.elements[2]},set:function(t){this.elements[2]=t}}});r.prototype.sub=r.prototype.subtract,r.prototype.mul=r.prototype.multiply,r.prototype.div=r.prototype.divide,r.prototype.dist=r.prototype.distance,r.prototype.sqrDist=r.prototype.squaredDistance,r.prototype.len=r.prototype.length,r.prototype.sqrLen=r.prototype.squaredLength,e.a=r},function(t,e,n){"use strict";var i,r={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:(i=0,function(t){var e=++i;return t?e=t+"_"+e:e+="",e}),clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},degToRad:function(t){return t*this.DEG2RAD},radToDeg:function(t){return t*this.RAD2DEG},isPowerOfTwo:function(t){return 0==(t&t-1)&&0!==t},nearestPowerOfTwo:function(t){return Math.pow(2,Math.round(Math.log(t)/Math.LN2))},nextPowerOfTwo:function(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t}};e.a=r},function(t,e,n){"use strict";var i,r=n(0),s=n(1),a=n(5),o=n(10),u=new a.a,c=new a.a,h=s.a.create({className:"Matrix4",isMatrix4:!0,constructor:function(){this.elements=r.mat4.create()},copy:function(t){return r.mat4.copy(this.elements,t.elements),this},clone:function(){var t=new this.constructor;return r.mat4.copy(t.elements,this.elements),t},toArray:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.elements,i=0;i<16;i++)t[e+i]=n[i];return t},fromArray:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.elements,i=0;i<16;i++)n[i]=t[e+i];return this},set:function(t,e,n,i,s,a,o,u,c,h,f,l,d,m,_,p){return r.mat4.set(this.elements,t,e,n,i,s,a,o,u,c,h,f,l,d,m,_,p),this},identity:function(){return r.mat4.identity(this.elements),this},transpose:function(){return r.mat4.transpose(this.elements,this.elements),this},invert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;return r.mat4.invert(this.elements,t.elements),this},adjoint:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;return r.mat4.adjoint(this.elements,t.elements),this},determinant:function(){return r.mat4.determinant(this.elements)},multiply:function(t,e){return e||(e=t,t=this),r.mat4.multiply(this.elements,t.elements,e.elements),this},premultiply:function(t){return this.multiply(t,this),this},translate:function(t){return r.mat4.translate(this.elements,this.elements,t.elements),this},scale:function(t){return r.mat4.scale(this.elements,this.elements,t.elements),this},rotate:function(t,e){return r.mat4.rotate(this.elements,this.elements,t,e.elements),this},rotateX:function(t){return r.mat4.rotateX(this.elements,this.elements,t),this},rotateY:function(t){return r.mat4.rotateY(this.elements,this.elements,t),this},rotateZ:function(t){return r.mat4.rotateZ(this.elements,this.elements,t),this},fromTranslation:function(t){return r.mat4.fromTranslation(this.elements,t.elements),this},fromScaling:function(t){return r.mat4.fromScaling(this.elements,t.elements),this},fromRotation:function(t,e){return r.mat4.fromRotation(this.elements,t,e.elements),this},fromXRotation:function(t){return r.mat4.fromXRotation(this.elements,t),this},fromYRotation:function(t){return r.mat4.fromYRotation(this.elements,t),this},fromZRotation:function(t){return r.mat4.fromZRotation(this.elements,t),this},fromRotationTranslation:function(t,e){return r.mat4.fromRotationTranslation(this.elements,t.elements,e.elements),this},getTranslation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new a.a;return r.mat4.getTranslation(t.elements,this.elements),t},getScaling:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new a.a;return r.mat4.getScaling(t.elements,this.elements),t},getRotation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new o.a;return r.mat4.getRotation(t.elements,this.elements),t},fromRotationTranslationScale:function(t,e,n){return r.mat4.fromRotationTranslationScale(this.elements,t.elements,e.elements,n.elements),this},fromRotationTranslationScaleOrigin:function(t,e,n,i){return r.mat4.fromRotationTranslationScaleOrigin(this.elements,t.elements,e.elements,n.elements,i.elements),this},fromQuat:function(t){return r.mat4.fromQuat(this.elements,t.elements),this},frustum:function(t,e,n,i,s,a){return r.mat4.frustum(this.elements,t,e,n,i,s,a),this},perspective:function(t,e,n,i){return r.mat4.perspective(this.elements,t,e,n,i),this},perspectiveFromFieldOfView:function(t,e,n){return r.mat4.perspectiveFromFieldOfView(this.elements,t,e,n),this},ortho:function(t,e,n,i,s,a){return r.mat4.ortho(this.elements,t,e,n,i,s,a),this},lookAt:function(t,e,n){return t.isVector3||(t=u.set(t.x,t.y,t.z)),e.isVector3||(e=c.set(e.x,e.y,e.z)),r.mat4.lookAt(this.elements,t.elements,e.elements,n.elements),this},targetTo:function(t,e,n){t.isVector3||(t=u.set(t.x,t.y,t.z)),e.isVector3||(e=c.set(e.x,e.y,e.z)),t=t.elements,e=e.elements,n=n.elements;var i=this.elements,r=t[0],s=t[1],a=t[2],o=n[0],h=n[1],f=n[2],l=r-e[0],d=s-e[1],m=a-e[2],_=l*l+d*d+m*m;_>0?(l*=_=1/Math.sqrt(_),d*=_,m*=_):m=1;var p=h*m-f*d,g=f*l-o*m,v=o*d-h*l;return(_=p*p+g*g+v*v)>0?(p*=_=1/Math.sqrt(_),g*=_,v*=_):(_=(p=h*m-f*d)*p+(g=f*l-(o+=1e-7)*m)*g+(v=o*d-h*l)*v,p*=_=1/Math.sqrt(_),g*=_,v*=_),i[0]=p,i[1]=g,i[2]=v,i[3]=0,i[4]=d*v-m*g,i[5]=m*p-l*v,i[6]=l*g-d*p,i[7]=0,i[8]=l,i[9]=d,i[10]=m,i[11]=0,i[12]=r,i[13]=s,i[14]=a,i[15]=1,this},frob:function(){return r.mat4.frob(this.elements)},add:function(t,e){return e||(e=t,t=this),r.mat4.add(this.elements,t.elements,e.elements),this},subtract:function(t,e){return e||(e=t,t=this),r.mat4.subtract(this.elements,t.elements,e.elements),this},exactEquals:function(t,e){return e||(e=t,t=this),r.mat4.exactEquals(t.elements,e.elements)},equals:function(t,e){return e||(e=t,t=this),r.mat4.equals(t.elements,e.elements)},compose:function(t,e,n,i){return i?this.fromRotationTranslationScaleOrigin(t,e,n,i):this.fromRotationTranslationScale(t,e,n),this},decompose:function(t,e,n,r){return this.getScaling(n),this.getTranslation(e),i||(i=new h),this.determinant()<0&&(n.x*=-1),i.copy(this),u.inverse(n),i.scale(u),t.fromMat4(i),r&&r.set(0,0,0),this}});h.prototype.sub=h.prototype.subtract,h.prototype.mul=h.prototype.multiply,e.a=h},function(t,e,n){"use strict";var i=n(1),r=n(12),s=n(4),a=i.a.create({Extends:r.a,className:"Color",isColor:!0,r:{get:function(){return this.x},set:function(t){this.x=t}},g:{get:function(){return this.y},set:function(t){this.y=t}},b:{get:function(){return this.z},set:function(t){this.z=t}},a:{get:function(){return this.w},set:function(t){this.w=t}},constructor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;a.superclass.constructor.call(this,t,e,n,i)},toRGBArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t},fromUintArray:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.elements[0]=t[e]/255,this.elements[1]=t[e+1]/255,this.elements[2]=t[e+2]/255,this.elements[3]=t[e+3]/255,this},fromHEX:function(t){return"number"==typeof t?t=Object(s.padLeft)(t.toString(16),6):("#"===t[0]&&(t=t.slice(1)),3===t.length&&(t=t.replace(/(\w)/g,"$1$1"))),this.elements[0]=parseInt(t.slice(0,2),16)/255,this.elements[1]=parseInt(t.slice(2,4),16)/255,this.elements[2]=parseInt(t.slice(4,6),16)/255,this},toHEX:function(){for(var t="",e=0;e<3;e++)t+=Object(s.padLeft)(Math.floor(255*this.elements[e]).toString(16),2);return t}});e.a=a},function(t,e,n){"use strict";var i=n(37),r=n.n(i);e.a=r.a},function(t,e,n){"use strict";var i=n(0),r=n(11),s=n(1),a=n(9),o=new r.a,u=s.a.create({Mixes:a.a,className:"Quaternion",isQuaternion:!0,constructor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;this.elements=i.quat.fromValues(t,e,n,r)},copy:function(t,e){return i.quat.copy(this.elements,t.elements),e||this.fire("update"),this},clone:function(){var t=this.elements;return new this.constructor(t[0],t[1],t[2],t[3])},toArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t},fromArray:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0,i=this.elements;return i[0]=t[e],i[1]=t[e+1],i[2]=t[e+2],i[3]=t[e+3],n||this.fire("update"),this},set:function(t,e,n,r,s){return i.quat.set(this.elements,t,e,n,r),s||this.fire("update"),this},identity:function(t){return i.quat.identity(this.elements),t||this.fire("update"),this},rotationTo:function(t,e,n){return i.quat.rotationTo(this.elements,t.elements,e.elements),n||this.fire("update"),this},setAxes:function(t,e,n,r){return i.quat.setAxes(this.elements,t.elements,e.elements,n.elements),r||this.fire("update"),this},setAxisAngle:function(t,e,n){return i.quat.setAxisAngle(this.elements,t.elements,e),n||this.fire("update"),this},getAxisAngle:function(t){return i.quat.getAxisAngle(t.elements,this.elements)},add:function(t,e){return i.quat.add(this.elements,this.elements,t.elements),e||this.fire("update"),this},multiply:function(t,e){return i.quat.multiply(this.elements,this.elements,t.elements),e||this.fire("update"),this},premultiply:function(t,e){return i.quat.multiply(this.elements,t.elements,this.elements),e||this.fire("update"),this},scale:function(t,e){return i.quat.scale(this.elements,this.elements,t),e||this.fire("update"),this},rotateX:function(t,e){return i.quat.rotateX(this.elements,this.elements,t),e||this.fire("update"),this},rotateY:function(t,e){return i.quat.rotateY(this.elements,this.elements,t),e||this.fire("update"),this},rotateZ:function(t,e){return i.quat.rotateZ(this.elements,this.elements,t),e||this.fire("update"),this},calculateW:function(t){return i.quat.calculateW(this.elements,this.elements),t||this.fire("update"),this},dot:function(t){return i.quat.dot(this.elements,t.elements)},lerp:function(t,e,n){return i.quat.lerp(this.elements,this.elements,t.elements,e),n||this.fire("update"),this},slerp:function(t,e,n){return i.quat.slerp(this.elements,this.elements,t.elements,e),n||this.fire("update"),this},sqlerp:function(t,e,n,r,s,a){return i.quat.sqlerp(this.elements,t.elements,e.elements,n.elements,r.elements,s),a||this.fire("update"),this},invert:function(t){return i.quat.invert(this.elements,this.elements),t||this.fire("update"),this},conjugate:function(t){return i.quat.conjugate(this.elements,this.elements),t||this.fire("update"),this},length:function(){return i.quat.length(this.elements)},squaredLength:function(){return i.quat.squaredLength(this.elements)},normalize:function(t){return i.quat.normalize(this.elements,this.elements),t||this.fire("update"),this},fromMat3:function(t,e){return i.quat.fromMat3(this.elements,t.elements),e||this.fire("update"),this},fromMat4:function(t,e){return o.fromMat4(t),this.fromMat3(o,e),this},exactEquals:function(t){return i.quat.exactEquals(this.elements,t.elements)},equals:function(t){return i.quat.equals(this.elements,t.elements)},fromEuler:function(t,e){var n=.5*t.x,i=.5*t.y,r=.5*t.z,s=t.order||"ZYX",a=Math.sin(n),o=Math.cos(n),u=Math.sin(i),c=Math.cos(i),h=Math.sin(r),f=Math.cos(r),l=this.elements;return"XYZ"===s?(l[0]=a*c*f+o*u*h,l[1]=o*u*f-a*c*h,l[2]=o*c*h+a*u*f,l[3]=o*c*f-a*u*h):"YXZ"===s?(l[0]=a*c*f+o*u*h,l[1]=o*u*f-a*c*h,l[2]=o*c*h-a*u*f,l[3]=o*c*f+a*u*h):"ZXY"===s?(l[0]=a*c*f-o*u*h,l[1]=o*u*f+a*c*h,l[2]=o*c*h+a*u*f,l[3]=o*c*f-a*u*h):"ZYX"===s?(l[0]=a*c*f-o*u*h,l[1]=o*u*f+a*c*h,l[2]=o*c*h-a*u*f,l[3]=o*c*f+a*u*h):"YZX"===s?(l[0]=a*c*f+o*u*h,l[1]=o*u*f+a*c*h,l[2]=o*c*h-a*u*f,l[3]=o*c*f-a*u*h):"XZY"===s&&(l[0]=a*c*f-o*u*h,l[1]=o*u*f-a*c*h,l[2]=o*c*h+a*u*f,l[3]=o*c*f+a*u*h),e||this.fire("update"),this},x:{get:function(){return this.elements[0]},set:function(t){this.elements[0]=t,this.fire("update")}},y:{get:function(){return this.elements[1]},set:function(t){this.elements[1]=t,this.fire("update")}},z:{get:function(){return this.elements[2]},set:function(t){this.elements[2]=t,this.fire("update")}},w:{get:function(){return this.elements[3]},set:function(t){this.elements[3]=t,this.fire("update")}}});u.prototype.mul=u.prototype.multiply,u.prototype.len=u.prototype.length,u.prototype.sqrLen=u.prototype.squaredLength,e.a=u},function(t,e,n){"use strict";var i=n(0),r=n(1).a.create({className:"Matrix3",isMatrix3:!0,constructor:function(){this.elements=i.mat3.create()},copy:function(t){return i.mat3.copy(this.elements,t.elements),this},clone:function(){var t=new this.constructor;return i.mat3.copy(t.elements,this.elements),t},toArray:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.elements,i=0;i<9;i++)t[e+i]=n[i];return t},fromArray:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.elements,i=0;i<9;i++)n[i]=t[e+i];return this},set:function(t,e,n,r,s,a,o,u,c){return i.mat3.set(this.elements,t,e,n,r,s,a,o,u,c),this},identity:function(){return i.mat3.identity(this.elements),this},transpose:function(){return i.mat3.transpose(this.elements,this.elements),this},invert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;return i.mat3.invert(this.elements,t.elements),this},adjoint:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;return i.mat3.adjoint(this.elements,t.elements),this},determinant:function(){return i.mat3.determinant(this.elements)},multiply:function(t,e){return e||(e=t,t=this),i.mat3.multiply(this.elements,t.elements,e.elements),this},premultiply:function(t){return this.multiply(t,this),this},translate:function(t){return i.mat3.translate(this.elements,this.elements,t.elements),this},rotate:function(t){return i.mat3.rotate(this.elements,this.elements,t),this},scale:function(t){return i.mat3.scale(this.elements,this.elements,t.elements),this},fromTranslation:function(t){return i.mat3.fromTranslation(this.elements,t.elements),this},fromRotation:function(t){return i.mat3.fromRotation(this.elements,t),this},fromScaling:function(t){return i.mat3.fromScaling(this.elements,t.elements),this},fromQuat:function(t){return i.mat3.fromQuat(this.elements,t.elements),this},normalFromMat4:function(t){return i.mat3.normalFromMat4(this.elements,t.elements),this},fromMat4:function(t){return i.mat3.fromMat4(this.elements,t.elements),this},frob:function(){return i.mat3.frob(this.elements)},add:function(t,e){return e||(e=t,t=this),i.mat3.add(this.elements,t.elements,e.elements),this},subtract:function(t,e){return e||(e=t,t=this),i.mat3.subtract(this.elements,t.elements,e.elements),this},exactEquals:function(t,e){return e||(e=t,t=this),i.mat3.exactEquals(t.elements,e.elements)},equals:function(t,e){return e||(e=t,t=this),i.mat3.equals(t.elements,e.elements)},fromRotationTranslationScale:function(t,e,n,i,r){var s=Math.cos(t),a=Math.sin(t);return this.set(i*s,-r*a,0,i*a,r*s,0,e,n,1),this}});r.prototype.sub=r.prototype.subtract,r.prototype.mul=r.prototype.multiply,e.a=r},function(t,e,n){"use strict";var i=n(0),r=n(1).a.create({className:"Vector4",isVector4:!0,constructor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;this.elements=i.vec4.fromValues(t,e,n,r)},copy:function(t){return i.vec4.copy(this.elements,t.elements),this},clone:function(){var t=this.elements;return new this.constructor(t[0],t[1],t[2],t[3])},toArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.elements;return t[0+e]=n[0],t[1+e]=n[1],t[2+e]=n[2],t[3+e]=n[3],t},fromArray:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.elements;return n[0]=t[e+0],n[1]=t[e+1],n[2]=t[e+2],n[3]=t[e+3],this},set:function(t,e,n,r){return i.vec4.set(this.elements,t,e,n,r),this},add:function(t,e){return e||(e=t,t=this),i.vec4.add(this.elements,t.elements,e.elements),this},subtract:function(t,e){return e||(e=t,t=this),i.vec4.subtract(this.elements,t.elements,e.elements),this},multiply:function(t,e){return e||(e=t,t=this),i.vec4.multiply(this.elements,t.elements,e.elements),this},divide:function(t,e){return e||(e=t,t=this),i.vec4.divide(this.elements,t.elements,e.elements),this},ceil:function(){return i.vec4.ceil(this.elements,this.elements),this},floor:function(){return i.vec4.floor(this.elements,this.elements),this},min:function(t,e){return e||(e=t,t=this),i.vec4.min(this.elements,t.elements,e.elements),this},max:function(t,e){return e||(e=t,t=this),i.vec4.max(this.elements,t.elements,e.elements),this},round:function(){return i.vec4.round(this.elements,this.elements),this},scale:function(t){return i.vec4.scale(this.elements,this.elements,t),this},scaleAndAdd:function(t,e,n){return n||(n=e,e=this),i.vec4.scaleAndAdd(this.elements,e.elements,n.elements,t),this},distance:function(t,e){return e||(e=t,t=this),i.vec4.distance(t.elements,e.elements)},squaredDistance:function(t,e){return e||(e=t,t=this),i.vec4.squaredDistance(t.elements,e.elements)},length:function(){return i.vec4.length(this.elements)},squaredLength:function(){return i.vec4.squaredLength(this.elements)},negate:function(){return i.vec4.negate(this.elements,this.elements),this},inverse:function(t){return t||(t=this),i.vec4.inverse(this.elements,t.elements),this},normalize:function(){return i.vec4.normalize(this.elements,this.elements),this},dot:function(t,e){return e||(e=t,t=this),i.vec4.dot(t.elements,e.elements)},lerp:function(t,e){return i.vec4.lerp(this.elements,this.elements,t.elements,e),this},random:function(t){return t=t||1,this.elements[0]=Math.random(),this.elements[1]=Math.random(),this.elements[2]=Math.random(),this.elements[3]=Math.random(),this.normalize(),this.scale(t),this},transformMat4:function(t){return i.vec4.transformMat4(this.elements,this.elements,t.elements),this},transformQuat:function(t){return i.vec4.transformQuat(this.elements,this.elements,t.elements),this},exactEquals:function(t,e){return e||(e=t,t=this),i.vec4.exactEquals(t.elements,e.elements)},equals:function(t,e){return e||(e=t,t=this),i.vec4.equals(t.elements,e.elements)},x:{get:function(){return this.elements[0]},set:function(t){this.elements[0]=t}},y:{get:function(){return this.elements[1]},set:function(t){this.elements[1]=t}},z:{get:function(){return this.elements[2]},set:function(t){this.elements[2]=t}},w:{get:function(){return this.elements[3]},set:function(t){this.elements[3]=t}}});r.prototype.sub=r.prototype.subtract,r.prototype.mul=r.prototype.multiply,r.prototype.div=r.prototype.divide,r.prototype.dist=r.prototype.distance,r.prototype.sqrDist=r.prototype.squaredDistance,r.prototype.len=r.prototype.length,r.prototype.sqrLen=r.prototype.squaredLength,e.a=r},function(t,e,n){"use strict";var i=n(1),r=n(6),s=n(7),a=n(3),o=new s.a,u=r.a.DEG2RAD,c=r.a.RAD2DEG,h=i.a.create({className:"Euler",isEuler:!0,order:"ZYX",constructor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.elements=new Float32Array([t,e,n]),this.updateDegrees()},clone:function(){var t=new this.constructor;return t.copy(this),t},copy:function(t){return this.elements[0]=t.x,this.elements[1]=t.y,this.elements[2]=t.z,this.order=t.order,this.updateDegrees(),this},set:function(t,e,n){return this.elements[0]=t,this.elements[1]=e,this.elements[2]=n,this.updateDegrees(),this},setDegree:function(t,e,n){return this._degX=t,this._degY=e,this._degZ=n,this.updateRadians(),this},fromArray:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.elements[0]=t[e],this.elements[1]=t[e+1],this.elements[2]=t[e+2],this.updateDegrees(),this},toArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t[e]=this.elements[0],t[e+1]=this.elements[1],t[e+2]=this.elements[2],t},fromMat4:function(t,e){var n=t.elements,i=n[0],s=n[1],o=n[2],u=n[4],c=n[5],h=n[6],f=n[8],l=n[9],d=n[10];e=e||this.order,this.order=e;var m=r.a.clamp;return"XYZ"===e?(this.elements[1]=Math.asin(m(f,-1,1)),Math.abs(f)<.99999?(this.elements[0]=Math.atan2(-l,d),this.elements[2]=Math.atan2(-u,i)):(this.elements[0]=Math.atan2(h,c),this.elements[2]=0)):"YXZ"===e?(this.elements[0]=Math.asin(-m(l,-1,1)),Math.abs(l)<.99999?(this.elements[1]=Math.atan2(f,d),this.elements[2]=Math.atan2(s,c)):(this.elements[1]=Math.atan2(-o,i),this.elements[2]=0)):"ZXY"===e?(this.elements[0]=Math.asin(m(h,-1,1)),Math.abs(h)<.99999?(this.elements[1]=Math.atan2(-o,d),this.elements[2]=Math.atan2(-u,c)):(this.elements[1]=0,this.elements[2]=Math.atan2(s,i))):"ZYX"===e?(this.elements[1]=Math.asin(-m(o,-1,1)),Math.abs(o)<.99999?(this.elements[0]=Math.atan2(h,d),this.elements[2]=Math.atan2(s,i)):(this.elements[0]=0,this.elements[2]=Math.atan2(-u,c))):"YZX"===e?(this.elements[2]=Math.asin(m(s,-1,1)),Math.abs(s)<.99999?(this.elements[0]=Math.atan2(-l,c),this.elements[1]=Math.atan2(-o,i)):(this.elements[0]=0,this.elements[1]=Math.atan2(f,d))):"XZY"===e?(this.elements[2]=Math.asin(-m(u,-1,1)),Math.abs(u)<.99999?(this.elements[0]=Math.atan2(h,c),this.elements[1]=Math.atan2(f,i)):(this.elements[0]=Math.atan2(-l,d),this.elements[1]=0)):a.a.warn("Euler fromMat4() unsupported order: "+e),this.updateDegrees(),this},fromQuat:function(t,e){return o.fromQuat(t),this.fromMat4(o,e)},updateDegrees:function(){return this._degX=this.elements[0]*c,this._degY=this.elements[1]*c,this._degZ=this.elements[2]*c,this},updateRadians:function(){return this.elements[0]=this._degX*u,this.elements[1]=this._degY*u,this.elements[2]=this._degZ*u,this},degX:{get:function(){return this._degX},set:function(t){this._degX=t,this.elements[0]=t*u}},degY:{get:function(){return this._degY},set:function(t){this._degY=t,this.elements[1]=t*u}},degZ:{get:function(){return this._degZ},set:function(t){this._degZ=t,this.elements[2]=t*u}},x:{get:function(){return this.elements[0]},set:function(t){this.elements[0]=t,this._degX=t*c}},y:{get:function(){return this.elements[1]},set:function(t){this.elements[1]=t,this._degY=t*c}},z:{get:function(){return this.elements[2]},set:function(t){this.elements[2]=t,this._degZ=t*c}}});e.a=h},function(t,e,n){"use strict";var i=n(0),r=n(1).a.create({className:"Vector2",isVector2:!0,constructor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.elements=i.vec2.fromValues(t,e)},copy:function(t){return i.vec2.copy(this.elements,t.elements),this},clone:function(){var t=this.elements;return new this.constructor(t[0],t[1])},toArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.elements;return t[0+e]=n[0],t[1+e]=n[1],t},fromArray:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.elements;return n[0]=t[e+0],n[1]=t[e+1],this},set:function(t,e){return i.vec2.set(this.elements,t,e),this},add:function(t,e){return e||(e=t,t=this),i.vec2.add(this.elements,t.elements,e.elements),this},subtract:function(t,e){return e||(e=t,t=this),i.vec2.subtract(this.elements,t.elements,e.elements),this},multiply:function(t,e){return e||(e=t,t=this),i.vec2.multiply(this.elements,t.elements,e.elements),this},divide:function(t,e){return e||(e=t,t=this),i.vec2.divide(this.elements,t.elements,e.elements),this},ceil:function(){return i.vec2.ceil(this.elements,this.elements),this},floor:function(){return i.vec2.floor(this.elements,this.elements),this},min:function(t,e){return e||(e=t,t=this),i.vec2.min(this.elements,t.elements,e.elements),this},max:function(t,e){return e||(e=t,t=this),i.vec2.max(this.elements,t.elements,e.elements),this},round:function(){return i.vec2.round(this.elements,this.elements),this},scale:function(t){return i.vec2.scale(this.elements,this.elements,t),this},scaleAndAdd:function(t,e,n){return n||(n=e,e=this),i.vec2.scaleAndAdd(this.elements,e.elements,n.elements,t),this},distance:function(t,e){return e||(e=t,t=this),i.vec2.distance(t.elements,e.elements)},squaredDistance:function(t,e){return e||(e=t,t=this),i.vec2.squaredDistance(t.elements,e.elements)},length:function(){return i.vec2.length(this.elements)},squaredLength:function(){return i.vec2.squaredLength(this.elements)},negate:function(){return i.vec2.negate(this.elements,this.elements),this},inverse:function(t){return t||(t=this),i.vec2.inverse(this.elements,t.elements),this},normalize:function(){return i.vec2.normalize(this.elements,this.elements),this},dot:function(t,e){return e||(e=t,t=this),i.vec2.dot(t.elements,e.elements)},cross:function(t,e){return e||(e=t,t=this),i.vec2.cross(this.elements,t.elements,e.elements),this},lerp:function(t,e){return i.vec2.lerp(this.elements,this.elements,t.elements,e),this},random:function(t){return i.vec2.random(this.elements,t),this},transformMat3:function(t){return i.vec2.transformMat3(this.elements,this.elements,t.elements),this},transformMat4:function(t){return i.vec2.transformMat4(this.elements,this.elements,t.elements),this},exactEquals:function(t,e){return e||(e=t,t=this),i.vec2.exactEquals(t.elements,e.elements)},equals:function(t,e){return e||(e=t,t=this),i.vec2.equals(t.elements,e.elements)},x:{get:function(){return this.elements[0]},set:function(t){this.elements[0]=t}},y:{get:function(){return this.elements[1]},set:function(t){this.elements[1]=t}}});r.prototype.sub=r.prototype.subtract,r.prototype.mul=r.prototype.multiply,r.prototype.div=r.prototype.divide,r.prototype.dist=r.prototype.distance,r.prototype.sqrDist=r.prototype.squaredDistance,r.prototype.len=r.prototype.length,r.prototype.sqrLen=r.prototype.squaredLength,e.a=r},function(t,e){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var s=n(1),a={POSITION:"POSITION",NORMAL:"NORMAL",COLOR:"COLOR",COLOR_0:"COLOR",COLOR_1:"COLOR_1",TEXCOORD:"TEXCOORD",TEXCOORD_0:"TEXCOORD",TEXCOORD_1:"TEXCOORD_1",TEXCOORD_2:"TEXCOORD_2",TANGENT:"TANGENT",JOINT:"JOINT",JOINTS_0:"JOINT",WEIGHT:"WEIGHT",WEIGHTS_0:"WEIGHT"},o=["POSITION","NORMAL","COLOR","TEXCOORD","TANGENT","JOINT","WEIGHT","OTHER","TEXCOORD_1","TEXCOORD_2","COLOR_1"],u={POSITION:0,NORMAL:1,COLOR:2,TEXCOORD:3,TANGENT:4,JOINT:5,WEIGHT:6,OTHER:7,TEXCOORD_1:8,TEXCOORD_2:9,COLOR_1:10},c={POSITION:"vertices",NORMAL:"normals",COLOR:"colors",TEXCOORD:"uvs",TEXCOORD_1:"uvs1",TEXCOORD_2:"uvs2",TANGENT:"tangents",JOINT:"skinIndices",WEIGHT:"skinWeights"},h={vertices:"POSITION",_normals:"NORMAL",colors:"COLOR",uvs:"TEXCOORD",uvs1:"TEXCOORD_1",uvs2:"TEXCOORD_2",_tangents:"TANGENT",skinIndices:"JOINT",skinWeights:"WEIGHT"},f={POSITION:3,NORMAL:3,COLOR:3,COLOR_1:3,TEXCOORD:2,TEXCOORD_1:2,TEXCOORD_2:2,TANGENT:4,JOINT:4,WEIGHT:4},l=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.indices=e,this.mode=n,this.attrs=[],this.attrIndexMap={}}return r(t,null,[{key:"cp",value:function(t){return t}},{key:"minus",value:function(t,e){return t-e}},{key:"plus",value:function(t,e){return t+e}},{key:"pp",value:function(t,e,n,i){return i-e-n+t}},{key:"depp",value:function(t,e,n,i){return e+n-t+i}},{key:"ATTR",get:function(){return a}},{key:"ATTR_NAME_ID",get:function(){return u}}]),r(t,[{key:"getAttrLength",value:function(){return this.attrs[0].data.length/this.attrs[0].itemCount}},{key:"attrIdToName",value:function(t){return o[t]||"OTHER"}},{key:"addAttr",value:function(t,e,n){a[t]?(this.attrIndexMap[t]=this.attrs.length,n||(n=f[t])):n||(n=1),this.attrs.push({name:t,itemCount:n,data:e})}},{key:"getAttr",value:function(t){if(this.attrIndexMap[t])return this.attrs[this.attrIndexMap[t]];for(var e=this.attrs.length-1;e>=0;e--){var n=this.attrs[e];if(n.name===t)return n}}},{key:"cal",value:function(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),s=3;s<i;s++)r[s-3]=arguments[s];this.attrs.forEach((function(i,s){for(var a=i.data,o=t.attrs[s].data,u=e*i.itemCount,c=i.itemCount-1;c>=0;c--)o[u+c]=n.apply(null,r.map((function(t){return a[t*i.itemCount+c]})))}))}},{key:"quantize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.attrs.forEach((function(e){if("JOINT"!==e.name&&0!=t[e.name]){var n=s.encode(e.data,t[e.name]||12);e.quantizationBit=n.quantizationBit,e.min=n.min,e.max=n.max,e.data=n.data}}))}},{key:"dequantize",value:function(){this.attrs.forEach((function(t){t.quantizationBit&&(t.data=s.decode(t.data,t.quantizationBit,t.min,t.max))}))}},{key:"convertTypedArray",value:function(){!this.indices||this.indices instanceof Array||(this.indices=Array.from(this.indices)),this.attrs.forEach((function(t){t.data instanceof Array||t.data instanceof Float32Array||(t.data=Array.from(t.data))}))}},{key:"clearEBAttrs",value:function(){delete this.clers,delete this.holes,delete this.handles}},{key:"convertToTypedArray",value:function(){this.indices instanceof Array&&(this.getAttrLength()>65535?this.indices=new Uint32Array(this.indices):this.indices=new Uint16Array(this.indices)),this.attrs.forEach((function(t){t.data instanceof Array&&(t.data=new Float32Array(t.data))}))}},{key:"prepareToWorkerSend",value:function(){return this.clearEBAttrs(),this.convertToTypedArray(),this.getAllBuffers()}},{key:"clone",value:function(){var e=new t(Array.from(this.indices),this.mode);return Object.assign(e.attrIndexMap,this.attrIndexMap),e.attrs=this.attrs.map((function(t){var e=Object.assign({},t);return e.data=Array.from(e.data),e})),e}},{key:"cloneStruct",value:function(){var e=new t;return e.mode=this.mode,this.indices&&(e.indices=[]),Object.assign(e.attrIndexMap,this.attrIndexMap),e.attrs=this.attrs.map((function(t){var e=Object.assign({},t);return e.data=[],e})),e}},{key:"toHilo3dGeometry",value:function(t,e){var n=e||new t.Geometry;return this.indices&&(this.indices.BYTES_PER_ELEMENT?n.indices=new t.GeometryData(this.indices,1):this.getAttrLength()>65535?n.indices=new t.GeometryData(new Uint32Array(this.indices),1):n.indices=new t.GeometryData(new Uint16Array(this.indices),1)),this.attrs.forEach((function(e){var i=c[e.name];i&&(e.data.BYTES_PER_ELEMENT?n[i]=new t.GeometryData(e.data,e.itemCount):n[i]=new t.GeometryData(new Float32Array(e.data),e.itemCount))})),n}},{key:"getAllBuffers",value:function(){var t=[];return this.indices.BYTES_PER_ELEMENT&&t.push(this.indices.buffer),this.attrs.forEach((function(e){e.data&&e.data.BYTES_PER_ELEMENT&&t.push(e.data.buffer)})),t}}],[{key:"fromGLTFPrimitive",value:function(e){var n=new t(e.indices,e.mode),i=e.attributes,r=0;for(var s in i.POSITION&&(r=i.POSITION.length/3),i)if(a[s]){var o=f[a[s]];r&&(o=i[s].length/r),n.addAttr(a[s],i[s],o)}else console.warn("Dont support attribute",s);return n}},{key:"fromHilo3dGeometry",value:function(e){var n=new t(e.indices.data,e.mode);for(var i in h)e[i]&&n.addAttr(h[i],e[i].data,e[i].size);return n}}]),t}();t.exports=l},function(t,e){var n={};function i(t){return n[t]||(n[t]=Math.pow(2,t)-1),n[t]}t.exports={cal:function(t,e,n,r){var s=i(r),a=n-e;return Math.round((t-e)/a*s)},encode:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,n=t.length,r=i(e),s=1/0,a=-1/0,o=0;o<n;o++)s=Math.min(s,t[o]),a=Math.max(a,t[o]);var u=a-s||1,c=[];for(o=0;o<n;o++)c[o]=Math.round((t[o]-s)/u*r);return{min:s,max:a,quantizationBit:e,data:c}},encodeWithMinAndMax:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:8,a=t.length,o=i(s),u=r-n||1,c=0;c<a;c++)e[c]=Math.round((t[c]-n)/u*o);return e},decode:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,s=t.length,a=i(e),o=r-n,u=new Float32Array(s),c=0;c<s;c++)u[c]=n+o*(t[c]/a);return u},normalize:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,i=t.length,r=0;r<i;r+=n){for(var s=0,a=0;a<n;a++)s+=t[r+a]*t[r+a];for(s=Math.sqrt(s),a=0;a<n;a++)e[r+a]=t[r+a]/s}return e}}},function(t,e,n){t.exports=n(3)},function(t,e,n){var i=n(4);i.Geometry=n(0),t.exports=i},function(t,e,n){var i=n(0),r=n(5),s=n(7),a=n(8),o=n(9),u=[r],c=[s];function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t instanceof Uint8Array&&(e=t.byteOffset,t=t.buffer),function(t){return new u[t.type](t).decompress()}(function(t,e){var n=new Uint8Array(t,e,4);if(65!==n[0]||77!==n[1]||67!==n[2])throw new Error("The file is not AMC format!");var i=c[n[3]].read(t,e+4);return i.geometry.type=n[3],i.geometry}(t,e))}var f,l=null,d=null;function m(t,e){return!l&&o()?(l=new a({wasmURL:t,memPages:e}),d=l.init()):d||Promise.resolve()}function _(t,e,n){if(l||m(e,n),!l||!l.isReady)return h(t);try{return l.decompress(t)}catch(e){return console.warn("wasm decompress error",e),h(t)}}var p=null;function g(t){return t=t||"https://g.alicdn.com/hilo/amc/0.1.27/worker.js",p||(!1===f||"undefined"==typeof Worker?Promise.reject("dont support web worker"):p=/^(?:http|blob|data:|\/\/)/.test(t)?new Promise((function(e,n){var i=new XMLHttpRequest;i.addEventListener("load",(function(){if("undefined"==typeof URL||"undefined"==typeof Blob)f=new Worker("data:application/javascript, ".concat(this.responseText));else{var t=URL.createObjectURL(new Blob([this.responseText]));f=new Worker(t)}f.onerror=function(t){console.log("web worker error",t),f=!1,n(t)},e(f)})),i.addEventListener("error",(function(t){return n(t)})),i.open("get",t,!0),i.send()})):new Promise((function(e,n){(f=new Worker(t)).onerror=function(t){console.log("web worker init error",t),f=!1,n(t)},e(f)})))}var v=0;function E(t,e,n,r){return e=e&&o(),t=new Uint8Array(t),g(r).then((function(r){return new Promise((function(s,a){var o=v++,u=function(e){if(e.data.id===o)if(r.removeEventListener("message",u),u=null,e.data.data){var n=e.data.data;n.constructor=i,n.__proto__=i.prototype,s(n)}else s(h(t))};r.addEventListener("message",u),r.postMessage({id:o,data:t,useWASM:e,wasmURL:n},[t.buffer])}))})).catch((function(i){return e?_(t,n):h(t)}))}t.exports={initWASM:m,initWorker:g,decompress:function(t,e,n){var i=o();return!i||t.byteLength>1048576?E(t,i,e,n):i?Promise.resolve(_(t,e)):Promise.resolve(h(t))},decompressWithJS:h,decompressWithWASM:_,decompressWithWorker:E,destory:function(){f&&(f.terminate(),f=null,p=null),l&&(l=null,d=null)}}},function(t,e,n){function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=n(0),o=(n(1),n(6)),u=o.map,c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.geometry=e,this.faceCount=e.clers.length,this.clers=e.clers,this.holes=e.holes,this.handles=e.handles,this.createHandleMap(this.handles),this.vertexCount=e.getAttrLength(),this.noParallelogramPrediction=!!e.noParallelogramPrediction}var e,n;return e=t,(n=[{key:"nextCorner",value:function(t){return t<0?-1:t+(t%3==2?-2:1)}},{key:"prevCorner",value:function(t){return t<0?-1:t+(t%3?-1:2)}},{key:"createHandleMap",value:function(t){var e=this.handlesMap={};if(t)for(var n=t.length-1;n>=0;n-=2)e[t[n]]=t[n-1]}},{key:"mapBoundary",value:function(t){for(var e=this.indices,n=t.length,i=this.currentVertex,r=this.currentVertex-n+1,s=n-1;s>=0;s--)e[this.nextCorner(t[s])]=i,i=r,e[this.prevCorner(t[s])]=r++;this.currentVertex-=n}},{key:"mapHoleBoundary",value:function(t){for(var e=this.indices,n=t.length,i=this.currentVertex-n+1,r=i,s=n-1;s>=0;s--)e[this.nextCorner(t[s])]=i++,e[this.prevCorner(t[s])]=s?i:r;this.currentVertex-=n}},{key:"fixNegativeIndex",value:function(t){for(var e=t,n=this.indices;n[t]<0;){if(e===-n[-n[t]]||n[t]===n[-n[t]]){console.warn("dead loop bug!!"),n[s]=0;break}n[t]=n[-n[t]]}}},{key:"fixIndicesAndReadVertice",value:function(){for(var t,e=this.indices,n=this.handlesMap,i=this.clers,r=i.length,s=-1,a=[],u=0,c=0;u<r;u++,c+=3)-1===s?(this.fixNegativeIndex(c+1),this.fixNegativeIndex(c+2)):(e[c+1]=e[this.prevCorner(s)],e[c+2]=e[this.nextCorner(s)]),this.fixNegativeIndex(c),-1===s?(this.readVertex(e[c+2]),this.readVertex(e[c+1]),this.readVertex(e[c])):this.readVertex(e[c],s),s=c+1,(t=i[u])!==o.S||n[u]?t===o.E||t===o.F?s=a.pop():t===o.R&&(s=c+2):a.push(c+2),t===o.F&&(s=-1,delete this.lastReadVertexIndex),this._onDecompressFace(u,t)}},{key:"readVertex",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;if(!this.readedVertexMap[t]&&(this.readedVertexMap[t]=1,!this.noParallelogramPrediction)){var n=this.indices,i=this.geometry;-1===e?void 0!==this.lastReadVertexIndex&&i.cal(i,t,a.plus,this.lastReadVertexIndex,t):i.cal(i,t,a.depp,n[e],n[this.prevCorner(e)],n[this.nextCorner(e)],t),this.lastReadVertexIndex=t}}},{key:"markCorner",value:function(t,e){var n=this.indices;void 0===n[this.nextCorner(t)]&&(n[this.nextCorner(t)]=-this.prevCorner(e[0])),void 0===n[this.prevCorner(t)]&&(n[this.prevCorner(t)]=-this.nextCorner(e[e.length-1]))}},{key:"onFaceC",value:function(t){var e=this.indices,n=3*this.currentFace,i=this.currentVertex--;e[n]=i;var r=t.pop();return e[this.nextCorner(r)]=i,e[this.prevCorner(r)]=-this.nextCorner(t[t.length-1]),r=t.shift(),e[this.prevCorner(r)]=i,e[this.nextCorner(r)]=-this.prevCorner(t[0]),t.push(n),t}},{key:"onFaceL",value:function(t){var e=3*this.currentFace;return this.markCorner(t.pop(),t),t.unshift(e+2),t.push(e),t}},{key:"onFaceF",value:function(t,e){return t&&this.mapBoundary(t),this.onFaceE(null,e)}},{key:"onFaceE",value:function(t,e){var n=3*this.currentFace;return t&&e.push(t),[n+2,n+1,n]}},{key:"onFaceR",value:function(t){var e=3*this.currentFace;return this.markCorner(t.pop(),t),t.push(e+1,e),t}},{key:"onHandleEnd",value:function(t,e,n){var i=this.indices,r=3*this.currentFace,s=this.handlesMap[this.currentFace],a=e.splice(0,t);return e.shift(),n.push(a),i[this.nextCorner(s)]=-(r+1),i[this.prevCorner(s)]=-this.nextCorner(a[a.length-1]),i[r]=-this.prevCorner(a[0]),e.push(r),e}},{key:"onHandleStart",value:function(t,e){for(var n,r=this.indices,s=3*this.currentFace,a=this.handlesMap[this.currentFace],o=e.length-1;o>=0;o--){var u=e[o].indexOf(a);if(u>=0){var c,h=(n=e.splice(o,1)[0]).splice(0,u);n.shift(),(c=n).push.apply(c,i(h));break}}return r[this.nextCorner(a)]=-(s+1),r[this.prevCorner(a)]=-this.nextCorner(n[n.length-1]),r[s]=-this.prevCorner(t[0]),(t=n.concat(t)).push(s),t}},{key:"onFaceS",value:function(t,e,n){var i=this.handlesMap,r=this.indices,s=3*this.currentFace;if(i[this.currentFace]){this.markCorner(t.pop(),t);var a=t.indexOf(i[this.currentFace]);t=a>=0?this.onHandleEnd(a,t,n):this.onHandleStart(t,n)}else{var o=t.pop();this.markCorner(o,t),r[s]=-this.nextCorner(o);var u=e.pop();this.markCorner(u.pop(),u),(t=u.concat(t)).push(s)}return t}},{key:"onFaceM",value:function(t,e,n){var i=this.indices,r=3*this.currentFace,s=t.splice(0,this.holes[this.currentHole--]);this.mapHoleBoundary(s);var a=i[this.prevCorner(s[0])];i[r]=a;var o=t.pop();return i[this.prevCorner(o)]=-this.nextCorner(t[t.length-1]),i[this.nextCorner(o)]=a,o=t.shift(),i[this.prevCorner(o)]=a,i[this.nextCorner(o)]=-this.prevCorner(t[0]),t.push(r),t}},{key:"decompress",value:function(){this.readedVertexMap=new Uint8Array(this.vertexCount);var t=this.faceCount,e=this.indices=new Array(3*t);this.currentFace=t-1,this.currentVertex=this.vertexCount-1,this.currentHole=this.holes.length-1;for(var n,i=this.clers,r=[],s=[];this.currentFace>=0;){var a="onFace"+u[i[this.currentFace]];this[a]?n=this[a](n,r,s):console.warn("has no ".concat(a)),this.currentFace--}return this.mapBoundary(n),this.fixIndicesAndReadVertice(this.indices),this.geometry.indices=e,this.geometry.dequantize(),this.geometry}},{key:"_onDecompressFace",value:function(t,e){this.onDecompressFace&&this.onDecompressFace(t,e)}}])&&r(e.prototype,n),t}();t.exports=c},function(t,e){var n={C:0,R:1,L:2,S:3,E:4,M:5,F:6},i=[];for(var r in n)i[n[r]]=r;n.map=i,t.exports=n},function(t,e,n){var i=n(0);function r(t,e,n,i){return new t(e.slice(n,n+i*t.BYTES_PER_ELEMENT))}t.exports={read:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new DataView(t),s=new i,a=function(t,e){var n={};return n.version=t.getUint8(e++),n.faceCount=t.getUint32(e,!0),e+=4,n.vertexCount=t.getUint32(e,!0),e+=4,n.attrCount=t.getUint8(e++),n.noParallelogramPrediction=t.getUint8(e++),n.holesCount=t.getUint16(e,!0),e+=2,n.handlesCount=t.getUint16(e,!0),e+=2,n.headerBytes=15,n}(n,e);return e+=a.headerBytes,s.mode="CLERS",e=function(t,e,n,i){for(var s=0;s<i.attrCount;s++){var a={},o=e.getUint16(n,!0);n+=2,a.name=t.attrIdToName(o),a.itemCount=e.getUint8(n++),a.quantizationBit=e.getUint8(n++),a.min=e.getFloat32(n,!0),n+=4,a.max=e.getFloat32(n,!0),n+=4,a.data=r(Int16Array,e.buffer,n,a.itemCount*i.vertexCount),n+=a.itemCount*i.vertexCount*2,t.attrs.push(a)}return n}(s,n,e=function(t,e,n,i){return t.clers=new Uint8Array(e.buffer,n,i.faceCount),n+i.faceCount}(s,n,e=function(t,e,n,i){return i.handlesCount?(t.handles=r(Uint32Array,e.buffer,n,2*i.handlesCount),n+8*i.handlesCount):(t.handles=[],n)}(s,n,e=function(t,e,n,i){return i.holesCount?(t.holes=r(Uint16Array,e.buffer,n,i.holesCount),n+2*i.holesCount):(t.holes=[],n)}(s,n,e,a),a),a),a),{header:a,geometry:s,offset:e}}}},function(t,e,n){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=n(0),s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.wasmURL=e.wasmURL||"https://ossgw.alicdn.com/tmall-c3/tmx/70b8d82ccf33e97a124e54c2d6a3e0c7.wasm",this.memPages=e.memPages||256,this.memPages<256&&(this.memPages=256),this.isReady=!1}var e,n;return e=t,(n=[{key:"initASMJS",value:function(){this.isReady=!0,this.dv=new DataView(HEAP8.buffer),this.heap8=HEAP8,this.ins={exports:{__Z7AMCinitj:Module.__Z7AMCinitj,__Z12AMDecompressv:Module.__Z12AMDecompressv}}}},{key:"init",value:function(){var t=this,e=this.memory=new WebAssembly.Memory({initial:this.memPages});this.dv=new DataView(e.buffer);var n=this.heap8=new Uint8Array(e.buffer),i={global:{NaN:5,Infinity:6},env:{memoryBase:0,memory:e,_malloc:function(){return 2097152},_memset:function(t,e,i){return n.fill(e,t,t+i),t},_printf:function(t,e){for(var i=t;n[i];)i++;var r=String.fromCharCode.apply(String,function(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(n.slice(t,i))),s=0;r=r.replace(/%([duf])/g,(function(t,n){return"d"===n||"u"===n?dv.getInt32(e+4*s++,!0):"f"===n?dv.getFloat32(e+4*s++,!0):void 0})),console.log(r)}}};return fetch(this.wasmURL).then((function(t){return t.arrayBuffer()})).then((function(t){return WebAssembly.instantiate(t,i)})).then((function(e){t.module=e,t.ins=e.instance,t.isReady=!0})).catch((function(t){return console.log("wasm load error, use js ver")}))}},{key:"getDataAddr",value:function(t){return this.ins.exports.__Z7AMCinitj(t)}},{key:"decompress",value:function(t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var e=this.dv,n=this.heap8,i=this.getDataAddr(t.length);n.set(t,i);var s=this.ins.exports.__Z12AMDecompressv();if(s<=0)throw console.error("decompression error code: "+s),new Error("decompression error code: "+s);for(var a=e.getUint32(s,!0),o=e.getUint32(s+4,!0),u=e.getUint32(s+8,!0),c=e.getUint32(s+12,!0),h=[],f=0;f<c;f++){var l=s+16+12*f;h.push([e.getUint32(l,!0),e.getUint32(l+4,!0),e.getUint32(l+8,!0)])}var d=new Uint32Array(e.buffer,o,3*a);d=u>65536?new Uint32Array(d):new Uint16Array(d);var m=new r(d);return h.forEach((function(t){var n=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=t[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(t,3),i=n[0],r=n[1],s=n[2],a=new Float32Array(e.buffer.slice(s,s+u*r*4));m.addAttr(m.attrIdToName(i),a,r)})),m}}])&&i(e.prototype,n),t}();t.exports=s},function(t,e){var n;t.exports=function(){return void 0===n&&(n=function(){if("undefined"==typeof WebAssembly||"undefined"==typeof fetch||function(){if(!/iPad|iPhone|iPod/i.test(navigator.userAgent))return!1;if(/OS (\d+)_(\d+)_?(\d+)?/i.test(navigator.userAgent)){var t=Number(RegExp.$1),e=Number(RegExp.$2);if(11===t&&e>=3||t>11)return!1}return!0}())return!1;try{var t=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),e=new WebAssembly.Module(t);return 0!==new WebAssembly.Instance(e,{}).exports.test(4)}catch(t){return console.log("err while check WebAssembly",t),!1}}()),n}}])},function(t,e,n){"use strict";var i=n(38),r=n.n(i),s=n(1),a=n(5),o=s.a.create({className:"Ray",isRay:!0,origin:{get:function(){return this._origin},set:function(t){this._origin=t,this._ray.origin=t.elements}},direction:{get:function(){return this._direction},set:function(t){this._direction=t,this._ray.direction=t.elements}},constructor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._ray=new r.a,this.origin=t.origin||new a.a(0,0,0),this.direction=t.direction||new a.a(0,0,-1)},set:function(t,e){return this.origin=t,this.direction=e,this},copy:function(t){this.origin.copy(t.origin),this.direction.copy(t.direction)},clone:function(){return new this.constructor({origin:this.origin.clone(),direction:this.direction.clone()})},fromCamera:function(t,e,n,i,r){t.isPerspectiveCamera?(t.worldMatrix.getTranslation(this.origin),this.direction.set(e,n,0),this.direction.copy(t.unprojectVector(this.direction,i,r)),this.direction.sub(this.origin).normalize()):t.isOrthographicCamera&&(this.origin.set(e,n,(t.near+t.far)/(t.near-t.far)),this.origin.copy(t.unprojectVector(this.origin,i,r)),this.direction.set(0,0,-1).transformDirection(t.worldMatrix).normalize())},transformMat4:function(t){this.origin.transformMat4(t),this.direction.transformDirection(t).normalize()},sortPoints:function(t,e){var n=this;e?t.sort((function(t,i){return n.squaredDistance(t[e])-n.squaredDistance(i[e])})):t.sort((function(t,e){return n.squaredDistance(t)-n.squaredDistance(e)}))},squaredDistance:function(t){return this.origin.squaredDistance(t)},distance:function(t){return this.origin.distance(t)},intersectsSphere:function(t,e){var n=this._ray.intersectsSphere(t,e);return this._getRes(n)},intersectsPlane:function(t,e){var n=this._ray.intersectsPlane(t,e);return this._getRes(n)},intersectsTriangle:function(t){var e=this._ray.intersectsTriangle(t);return this._getRes(e)},intersectsBox:function(t){var e=this._ray.intersectsBox(t);return this._getRes(e)},intersectsTriangleCell:function(t,e){var n=this._ray.intersectsTriangleCell(t,e);return this._getRes(n)},_getRes:function(t){return t?new a.a(t[0],t[1],t[2]):null}});e.a=o},function(t,e,n){"use strict";var i=n(0),r=n(1),s=n(9),a=n(5),o=r.a.create({Mixes:s.a,Extends:a.a,className:"Vector3Notifier",isVector3Notifier:!0,constructor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.elements=i.vec3.fromValues(t,e,n)},copy:function(t){return i.vec3.copy(this.elements,t.elements),this.fire("update"),this},clone:function(){var t=this.elements;return new this.constructor(t[0],t[1],t[2])},toArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.elements;return t[0+e]=n[0],t[1+e]=n[1],t[2+e]=n[2],t},fromArray:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.elements;return n[0]=t[e+0],n[1]=t[e+1],n[2]=t[e+2],this.fire("update"),this},set:function(t,e,n){return i.vec3.set(this.elements,t,e,n),this.fire("update"),this},add:function(t,e){return e||(e=t,t=this),i.vec3.add(this.elements,t.elements,e.elements),this.fire("update"),this},subtract:function(t,e){return e||(e=t,t=this),i.vec3.subtract(this.elements,t.elements,e.elements),this.fire("update"),this},multiply:function(t,e){return e||(e=t,t=this),i.vec3.multiply(this.elements,t.elements,e.elements),this.fire("update"),this},divide:function(t,e){return e||(e=t,t=this),i.vec3.divide(this.elements,t.elements,e.elements),this.fire("update"),this},ceil:function(){return i.vec3.ceil(this.elements,this.elements),this.fire("update"),this},floor:function(){return i.vec3.floor(this.elements,this.elements),this.fire("update"),this},min:function(t,e){return e||(e=t,t=this),i.vec3.min(this.elements,t.elements,e.elements),this.fire("update"),this},max:function(t,e){return e||(e=t,t=this),i.vec3.max(this.elements,t.elements,e.elements),this.fire("update"),this},round:function(){return i.vec3.round(this.elements,this.elements),this.fire("update"),this},scale:function(t){return i.vec3.scale(this.elements,this.elements,t),this.fire("update"),this},scaleAndAdd:function(t,e,n){return n||(n=e,e=this),i.vec3.scaleAndAdd(this.elements,e.elements,n.elements,t),this.fire("update"),this},distance:function(t,e){return e||(e=t,t=this),i.vec3.distance(t.elements,e.elements)},squaredDistance:function(t,e){return e||(e=t,t=this),i.vec3.squaredDistance(t.elements,e.elements)},length:function(){return i.vec3.length(this.elements)},squaredLength:function(){return i.vec3.squaredLength(this.elements)},negate:function(){return i.vec3.negate(this.elements,this.elements),this.fire("update"),this},inverse:function(t){return t||(t=this),i.vec3.inverse(this.elements,t.elements),this.fire("update"),this},normalize:function(){return i.vec3.normalize(this.elements,this.elements),this.fire("update"),this},dot:function(t,e){return e||(e=t,t=this),i.vec3.dot(t.elements,e.elements)},cross:function(t,e){return e||(e=t,t=this),i.vec3.cross(this.elements,t.elements,e.elements),this.fire("update"),this},lerp:function(t,e){return i.vec3.lerp(this.elements,this.elements,t.elements,e),this.fire("update"),this},hermite:function(t,e,n,r,s){return i.vec3.hermite(this.elements,t.elements,e.elements,n.elements,r.elements,s),this.fire("update"),this},bezier:function(t,e,n,r,s){return i.vec3.bezier(this.elements,t.elements,e.elements,n.elements,r.elements,s),this.fire("update"),this},random:function(t){return i.vec3.random(this.elements,t),this.fire("update"),this},transformMat3:function(t){return i.vec3.transformMat3(this.elements,this.elements,t.elements),this.fire("update"),this},transformMat4:function(t){return i.vec3.transformMat4(this.elements,this.elements,t.elements),this.fire("update"),this},transformDirection:function(t){var e=this.elements,n=t.elements,i=e[0],r=e[1],s=e[2];return e[0]=i*n[0]+r*n[4]+s*n[8],e[1]=i*n[1]+r*n[5]+s*n[9],e[2]=i*n[2]+r*n[6]+s*n[10],this.fire("update"),this},transformQuat:function(t){return i.vec3.transformQuat(this.elements,this.elements,t.elements),this.fire("update"),this},rotateX:function(t,e){return i.vec3.rotateX(this.elements,this.elements,t.elements,e),this.fire("update"),this},rotateY:function(t,e){return i.vec3.rotateY(this.elements,this.elements,t.elements,e),this.fire("update"),this},rotateZ:function(t,e){return i.vec3.rotateZ(this.elements,this.elements,t.elements,e),this.fire("update"),this},exactEquals:function(t,e){return e||(e=t,t=this),i.vec3.exactEquals(t.elements,e.elements)},equals:function(t,e){return e||(e=t,t=this),i.vec3.equals(t.elements,e.elements)},x:{get:function(){return this.elements[0]},set:function(t){this.elements[0]=t,this.fire("update")}},y:{get:function(){return this.elements[1]},set:function(t){this.elements[1]=t,this.fire("update")}},z:{get:function(){return this.elements[2]},set:function(t){this.elements[2]=t,this.fire("update")}}});e.a=o},function(t,e){t.exports="#define GLSLIFY 1\n#define HILO_FRONT_SIDE 1028\n#define HILO_BACK_SIDE 1029\n#define HILO_FRONT_AND_BACK_SIDE 1032\n#define HILO_PI 3.141592653589793\n#define HILO_INVERSE_PI 0.3183098861837907"},function(t,e){var n=function(){var t,e,n=function(t){var e,n,r={};for(e in t)n=t[e],i.hasOwnProperty(e)?i[e].call(this,n):r[e]=n;s(this.prototype,r)},i={Extends:function(t){var e=this.prototype,n=r(t.prototype);s(this,t),s(n,e),n.constructor=this,this.prototype=n,this.superclass=t.prototype},Mixes:function(t){t instanceof Array||(t=[t]);for(var e,n=this.prototype;e=t.shift();)s(n,e.prototype||e)},Statics:function(t){s(this,t)}},r=function(){if(Object.__proto__)return function(t){return{__proto__:t}};var t=function(){};return function(e){return t.prototype=e,new t}}(),s=function(t){for(var n=1,i=arguments.length;n<i;n++){var r,s=arguments[n];for(var a in s){var o=s[a];!o||"object"!=typeof o||void 0===o.value&&"function"!=typeof o.get&&"function"!=typeof o.set?t[a]=o:(r=r||{})[a]=o}r&&e(t,r)}return t};try{t=Object.defineProperty,e=Object.defineProperties,t({},"$",{value:0})}catch(n){"__defineGetter__"in Object&&(t=function(t,e,n){return"value"in n&&(t[e]=n.value),"get"in n&&t.__defineGetter__(e,n.get),"set"in n&&t.__defineSetter__(e,n.set),t},e=function(e,n){for(var i in n)n.hasOwnProperty(i)&&t(e,i,n[i]);return e})}return{create:function(t){var e=(t=t||{}).hasOwnProperty("constructor")?t.constructor:function(){};return n.call(e,t),e},mix:s}}();t.exports=n},function(t,e,n){"use strict";var i=n(1),r=n(5),s=i.a.create({className:"Plane",isPlane:!0,constructor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new r.a,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.normal=t,this.distance=e},copy:function(t){return this.normal.copy(t.normal),this.distance=t.distance,this},clone:function(){return new this.constructor(this.normal.clone(),this.distance)},set:function(t,e,n,i){return this.normal.set(t,e,n),this.distance=i,this},normalize:function(){var t=1/this.normal.length();return this.normal.scale(t),this.distance*=t,this},distanceToPoint:function(t){return this.normal.dot(t)+this.distance},projectPoint:function(t){return(new r.a).copy(this.normal).scale(-this.distanceToPoint(t)).add(t)}});e.a=s},function(t,e,n){"use strict";var i=n(1),r=n(5),s=new r.a,a=i.a.create({className:"Sphere",isSphere:!0,radius:0,constructor:function(t){Object.assign(this,t),this.center||(this.center=new r.a(0,0,0))},clone:function(){var t=new this.constructor;return t.copy(this),t},copy:function(t){return this.center.copy(t.center),this.radius=t.radius,this},fromPoints:function(t){for(var e=this.center,n=0,i=0;i<t.length;i+=3){var r=t[i]-e.x,s=t[i+1]-e.y,a=t[i+2]-e.z;n=Math.max(r*r+s*s+a*a,n)}return this.radius=Math.sqrt(n),this},fromGeometryData:function(t){var e=this.center,n=0;return t.traverse((function(t){var i=t.x-e.x,r=t.y-e.y,s=t.z-e.z;n=Math.max(i*i+r*r+s*s,n)})),this.radius=Math.sqrt(n),this},transformMat4:function(t){this.center.transformMat4(t);var e=t.getScaling(s);return this.radius*=Math.max(e.x,e.y,e.z),this}});e.a=a},function(t,e,n){"use strict";var i,r=n(0),s=n(1),a=n(9),o=n(5),u=n(7),c=n(10),h=new o.a,f=new o.a,l=s.a.create({Mixes:a.a,Extends:u.a,className:"Matrix4Notifier",isMatrix4Notifier:!0,constructor:function(){this.elements=r.mat4.create()},copy:function(t){return r.mat4.copy(this.elements,t.elements),this.fire("update"),this},fromArray:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.elements,i=0;i<16;i++)n[i]=t[e+i];return this.fire("update"),this},set:function(t,e,n,i,s,a,o,u,c,h,f,l,d,m,_,p){return r.mat4.set(this.elements,t,e,n,i,s,a,o,u,c,h,f,l,d,m,_,p),this.fire("update"),this},identity:function(){return r.mat4.identity(this.elements),this.fire("update"),this},transpose:function(){return r.mat4.transpose(this.elements,this.elements),this.fire("update"),this},invert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;return r.mat4.invert(this.elements,t.elements),this.fire("update"),this},adjoint:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;return r.mat4.adjoint(this.elements,t.elements),this.fire("update"),this},determinant:function(){return r.mat4.determinant(this.elements)},multiply:function(t,e){return e||(e=t,t=this),r.mat4.multiply(this.elements,t.elements,e.elements),this.fire("update"),this},premultiply:function(t){return this.multiply(t,this),this.fire("update"),this},translate:function(t){return r.mat4.translate(this.elements,this.elements,t.elements),this.fire("update"),this},scale:function(t){return r.mat4.scale(this.elements,this.elements,t.elements),this.fire("update"),this},rotate:function(t,e){return r.mat4.rotate(this.elements,this.elements,t,e.elements),this.fire("update"),this},rotateX:function(t){return r.mat4.rotateX(this.elements,this.elements,t),this.fire("update"),this},rotateY:function(t){return r.mat4.rotateY(this.elements,this.elements,t),this.fire("update"),this},rotateZ:function(t){return r.mat4.rotateZ(this.elements,this.elements,t),this.fire("update"),this},fromTranslation:function(t){return r.mat4.fromTranslation(this.elements,t.elements),this.fire("update"),this},fromScaling:function(t){return r.mat4.fromScaling(this.elements,t.elements),this.fire("update"),this},fromRotation:function(t,e){return r.mat4.fromRotation(this.elements,t,e.elements),this.fire("update"),this},fromXRotation:function(t){return r.mat4.fromXRotation(this.elements,t),this.fire("update"),this},fromYRotation:function(t){return r.mat4.fromYRotation(this.elements,t),this.fire("update"),this},fromZRotation:function(t){return r.mat4.fromZRotation(this.elements,t),this.fire("update"),this},fromRotationTranslation:function(t,e){return r.mat4.fromRotationTranslation(this.elements,t.elements,e.elements),this.fire("update"),this},getTranslation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new o.a;return r.mat4.getTranslation(t.elements,this.elements),t},getScaling:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new o.a;return r.mat4.getScaling(t.elements,this.elements),t},getRotation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new c.a;return r.mat4.getRotation(t.elements,this.elements),t},fromRotationTranslationScale:function(t,e,n){return r.mat4.fromRotationTranslationScale(this.elements,t.elements,e.elements,n.elements),this.fire("update"),this},fromRotationTranslationScaleOrigin:function(t,e,n,i,s){return r.mat4.fromRotationTranslationScaleOrigin(this.elements,t.elements,e.elements,n.elements,i.elements),s||this.fire("update"),this},fromQuat:function(t){return r.mat4.fromQuat(this.elements,t.elements),this.fire("update"),this},frustum:function(t,e,n,i,s,a){return r.mat4.frustum(this.elements,t,e,n,i,s,a),this.fire("update"),this},perspective:function(t,e,n,i){return r.mat4.perspective(this.elements,t,e,n,i),this.fire("update"),this},perspectiveFromFieldOfView:function(t,e,n){return r.mat4.perspectiveFromFieldOfView(this.elements,t,e,n),this.fire("update"),this},ortho:function(t,e,n,i,s,a){return r.mat4.ortho(this.elements,t,e,n,i,s,a),this.fire("update"),this},lookAt:function(t,e,n){return t.isVector3||(t=h.set(t.x,t.y,t.z)),e.isVector3||(e=f.set(e.x,e.y,e.z)),r.mat4.lookAt(this.elements,t.elements,e.elements,n.elements),this.fire("update"),this},targetTo:function(t,e,n){t.isVector3||(t=h.set(t.x,t.y,t.z)),e.isVector3||(e=f.set(e.x,e.y,e.z)),t=t.elements,e=e.elements,n=n.elements;var i=this.elements,r=t[0],s=t[1],a=t[2],o=n[0],u=n[1],c=n[2],l=r-e[0],d=s-e[1],m=a-e[2],_=l*l+d*d+m*m;_>0?(l*=_=1/Math.sqrt(_),d*=_,m*=_):m=1;var p=u*m-c*d,g=c*l-o*m,v=o*d-u*l;return(_=p*p+g*g+v*v)>0?(p*=_=1/Math.sqrt(_),g*=_,v*=_):(_=(p=u*m-c*d)*p+(g=c*l-(o+=1e-7)*m)*g+(v=o*d-u*l)*v,p*=_=1/Math.sqrt(_),g*=_,v*=_),i[0]=p,i[1]=g,i[2]=v,i[3]=0,i[4]=d*v-m*g,i[5]=m*p-l*v,i[6]=l*g-d*p,i[7]=0,i[8]=l,i[9]=d,i[10]=m,i[11]=0,i[12]=r,i[13]=s,i[14]=a,i[15]=1,this.fire("update"),this},frob:function(){return r.mat4.frob(this.elements)},add:function(t,e){return e||(e=t,t=this),r.mat4.add(this.elements,t.elements,e.elements),this.fire("update"),this},subtract:function(t,e){return e||(e=t,t=this),r.mat4.subtract(this.elements,t.elements,e.elements),this.fire("update"),this},exactEquals:function(t,e){return e||(e=t,t=this),r.mat4.exactEquals(t.elements,e.elements)},equals:function(t,e){return e||(e=t,t=this),r.mat4.equals(t.elements,e.elements)},compose:function(t,e,n,i){return i?this.fromRotationTranslationScaleOrigin(t,e,n,i):this.fromRotationTranslationScale(t,e,n),this},decompose:function(t,e,n,r){return this.getScaling(n),this.getTranslation(e),i||(i=new u.a),this.determinant()<0&&(n.x*=-1),i.copy(this),h.inverse(n),i.scale(h),t.fromMat4(i),r&&r.set(0,0,0),this}});e.a=l},function(t,e,n){"use strict";var i=n(1),r=n(9),s=n(6),a=n(13),o=s.a.DEG2RAD,u=s.a.RAD2DEG,c=i.a.create({Mixes:r.a,Extends:a.a,className:"EulerNotifier",isEulerNotifier:!0,constructor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;a.a.call(this,t,e,n)},updateDegrees:function(){return c.superclass.updateDegrees.call(this),this.fire("update"),this},updateRadians:function(){return c.superclass.updateRadians.call(this),this.fire("update"),this},degX:{get:function(){return this._degX},set:function(t){this._degX=t,this.elements[0]=t*o,this.fire("update")}},degY:{get:function(){return this._degY},set:function(t){this._degY=t,this.elements[1]=t*o,this.fire("update")}},degZ:{get:function(){return this._degZ},set:function(t){this._degZ=t,this.elements[2]=t*o,this.fire("update")}},x:{get:function(){return this.elements[0]},set:function(t){this.elements[0]=t,this._degX=t*u,this.fire("update")}},y:{get:function(){return this.elements[1]},set:function(t){this.elements[1]=t,this._degY=t*u,this.fire("update")}},z:{get:function(){return this.elements[2]},set:function(t){this.elements[2]=t,this._degZ=t*u,this.fire("update")}}});e.a=c},function(t,e,n){"use strict";var i=n(1),r=n(20),s=i.a.create({className:"Frustum",isFrustum:!0,constructor:function(){this.planes=[];for(var t=6;t--;)this.planes.push(new r.a)},copy:function(t){var e=t.planes;return this.planes.forEach((function(t,n){t.copy(e[n])})),this},clone:function(){var t=new this.constructor;return t.copy(this),t},fromMatrix:function(t){var e=this.planes,n=t.elements,i=n[0],r=n[1],s=n[2],a=n[3],o=n[4],u=n[5],c=n[6],h=n[7],f=n[8],l=n[9],d=n[10],m=n[11],_=n[12],p=n[13],g=n[14],v=n[15];return e[0].set(a-i,h-o,m-f,v-_).normalize(),e[1].set(a+i,h+o,m+f,v+_).normalize(),e[2].set(a+r,h+u,m+l,v+p).normalize(),e[3].set(a-r,h-u,m-l,v-p).normalize(),e[4].set(a-s,h-c,m-d,v-g).normalize(),e[5].set(a+s,h+c,m+d,v+g).normalize(),this},intersectsSphere:function(t){for(var e=this.planes,n=t.center,i=-t.radius,r=0;r<6;r++){if(e[r].distanceToPoint(n)<i)return!1}return!0}});e.a=s},function(t,e){t.exports="#ifdef HILO_USE_SHADER_TEXTURE_LOD\n    #extension GL_EXT_shader_texture_lod: enable\n#endif\n\n#ifdef HILO_USE_EXT_FRAG_DEPTH\n    #extension GL_EXT_frag_depth: enable\n#define GLSLIFY 1\n#endif"},function(t,e){t.exports="#ifdef GL_ES\nprecision HILO_MAX_FRAGMENT_PRECISION float;\n#define GLSLIFY 1\n#endif"},function(t,e){t.exports=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}},function(t,e,n){"use strict";n.r(e),n.d(e,"Color",(function(){return i.a})),n.d(e,"Euler",(function(){return r.a})),n.d(e,"EulerNotifier",(function(){return s.a})),n.d(e,"Frustum",(function(){return a.a})),n.d(e,"math",(function(){return o.a})),n.d(e,"Matrix3",(function(){return u.a})),n.d(e,"Matrix4",(function(){return c.a})),n.d(e,"Matrix4Notifier",(function(){return h.a})),n.d(e,"Plane",(function(){return f.a})),n.d(e,"Quaternion",(function(){return l.a})),n.d(e,"Ray",(function(){return d.a})),n.d(e,"Sphere",(function(){return m.a})),n.d(e,"SphericalHarmonics3",(function(){return E})),n.d(e,"Vector2",(function(){return T.a})),n.d(e,"Vector3",(function(){return p.a})),n.d(e,"Vector3Notifier",(function(){return M.a})),n.d(e,"Vector4",(function(){return A.a}));var i=n(8),r=n(13),s=n(23),a=n(24),o=n(6),u=n(11),c=n(7),h=n(22),f=n(20),l=n(10),d=n(16),m=n(21),_=n(1),p=n(5),g=new Float32Array(27),v=_.a.create({className:"SphericalHarmonics3",isSphericalHarmonics3:!0,Statics:{SH3_SCALE:[Math.sqrt(1/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(3/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(15/(4*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(5/(16*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(15/(16*Math.PI))]},constructor:function(){this.coefficients=[];for(var t=0;t<9;t++)this.coefficients.push(new p.a)},scale:function(t){return this.coefficients.forEach((function(e){e.scale(t)})),this},fromArray:function(t){return 9===t.length?this.coefficients.forEach((function(e,n){e.fromArray(t[n])})):27===t.length&&this.coefficients.forEach((function(e,n){e.fromArray(t,3*n)})),this},scaleForRender:function(){var t=v.SH3_SCALE;return this.coefficients.forEach((function(e,n){e.scale(t[n])})),this.scale(1/Math.PI),this},toArray:function(){return this.coefficients.forEach((function(t,e){t.toArray(g,3*e)})),g},clone:function(){var t=new this.constructor;return t.copy(this),t},copy:function(t){var e=t.coefficients;return this.coefficients.forEach((function(t,n){t.copy(e[n])})),this}}),E=v,T=n(14),M=n(17),A=n(12)},function(t,e){t.exports="#define GLSLIFY 1\n#if defined(HILO_USE_LOG_DEPTH) && defined(HILO_USE_EXT_FRAG_DEPTH)\n    uniform float u_logDepth;\n    varying float v_fragDepth;\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#if defined(HILO_USE_LOG_DEPTH) && defined(HILO_USE_EXT_FRAG_DEPTH)\n    gl_FragDepthEXT = log2( v_fragDepth ) * u_logDepth * 0.5;\n#endif"},function(t,e){t.exports=function(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}},function(t,e){t.exports=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}},function(t,e){t.exports=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}},function(t,e){t.exports=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}},function(t,e){t.exports={ACTIVE_ATTRIBUTES:35721,ACTIVE_ATTRIBUTE_MAX_LENGTH:35722,ACTIVE_TEXTURE:34016,ACTIVE_UNIFORMS:35718,ACTIVE_UNIFORM_MAX_LENGTH:35719,ALIASED_LINE_WIDTH_RANGE:33902,ALIASED_POINT_SIZE_RANGE:33901,ALPHA:6406,ALPHA_BITS:3413,ALWAYS:519,ARRAY_BUFFER:34962,ARRAY_BUFFER_BINDING:34964,ATTACHED_SHADERS:35717,BACK:1029,BLEND:3042,BLEND_COLOR:32773,BLEND_DST_ALPHA:32970,BLEND_DST_RGB:32968,BLEND_EQUATION:32777,BLEND_EQUATION_ALPHA:34877,BLEND_EQUATION_RGB:32777,BLEND_SRC_ALPHA:32971,BLEND_SRC_RGB:32969,BLUE_BITS:3412,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,BROWSER_DEFAULT_WEBGL:37444,BUFFER_SIZE:34660,BUFFER_USAGE:34661,BYTE:5120,CCW:2305,CLAMP_TO_EDGE:33071,COLOR_ATTACHMENT0:36064,COLOR_BUFFER_BIT:16384,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,COMPILE_STATUS:35713,COMPRESSED_TEXTURE_FORMATS:34467,CONSTANT_ALPHA:32771,CONSTANT_COLOR:32769,CONTEXT_LOST_WEBGL:37442,CULL_FACE:2884,CULL_FACE_MODE:2885,CURRENT_PROGRAM:35725,CURRENT_VERTEX_ATTRIB:34342,CW:2304,DECR:7683,DECR_WRAP:34056,DELETE_STATUS:35712,DEPTH_ATTACHMENT:36096,DEPTH_BITS:3414,DEPTH_BUFFER_BIT:256,DEPTH_CLEAR_VALUE:2931,DEPTH_COMPONENT:6402,DEPTH_COMPONENT16:33189,DEPTH_FUNC:2932,DEPTH_RANGE:2928,DEPTH_STENCIL:34041,DEPTH_STENCIL_ATTACHMENT:33306,DEPTH_TEST:2929,DEPTH_WRITEMASK:2930,DITHER:3024,DONT_CARE:4352,DST_ALPHA:772,DST_COLOR:774,DYNAMIC_DRAW:35048,ELEMENT_ARRAY_BUFFER:34963,ELEMENT_ARRAY_BUFFER_BINDING:34965,EQUAL:514,FASTEST:4353,FLOAT:5126,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,FRAGMENT_SHADER:35632,FRAMEBUFFER:36160,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_BINDING:36006,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_UNSUPPORTED:36061,FRONT:1028,FRONT_AND_BACK:1032,FRONT_FACE:2886,FUNC_ADD:32774,FUNC_REVERSE_SUBTRACT:32779,FUNC_SUBTRACT:32778,GENERATE_MIPMAP_HINT:33170,GEQUAL:518,GREATER:516,GREEN_BITS:3411,HIGH_FLOAT:36338,HIGH_INT:36341,INCR:7682,INCR_WRAP:34055,INFO_LOG_LENGTH:35716,INT:5124,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,INVALID_ENUM:1280,INVALID_FRAMEBUFFER_OPERATION:1286,INVALID_OPERATION:1282,INVALID_VALUE:1281,INVERT:5386,KEEP:7680,LEQUAL:515,LESS:513,LINEAR:9729,LINEAR_MIPMAP_LINEAR:9987,LINEAR_MIPMAP_NEAREST:9985,LINES:1,LINE_LOOP:2,LINE_STRIP:3,LINE_WIDTH:2849,LINK_STATUS:35714,LOW_FLOAT:36336,LOW_INT:36339,LUMINANCE:6409,LUMINANCE_ALPHA:6410,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_CUBE_MAP_TEXTURE_SIZE:34076,MAX_FRAGMENT_UNIFORM_VECTORS:36349,MAX_RENDERBUFFER_SIZE:34024,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_TEXTURE_SIZE:3379,MAX_VARYING_VECTORS:36348,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VIEWPORT_DIMS:3386,MEDIUM_FLOAT:36337,MEDIUM_INT:36340,MIRRORED_REPEAT:33648,NEAREST:9728,NEAREST_MIPMAP_LINEAR:9986,NEAREST_MIPMAP_NEAREST:9984,NEVER:512,NICEST:4354,NONE:0,NOTEQUAL:517,NO_ERROR:0,NUM_COMPRESSED_TEXTURE_FORMATS:34466,ONE:1,ONE_MINUS_CONSTANT_ALPHA:32772,ONE_MINUS_CONSTANT_COLOR:32770,ONE_MINUS_DST_ALPHA:773,ONE_MINUS_DST_COLOR:775,ONE_MINUS_SRC_ALPHA:771,ONE_MINUS_SRC_COLOR:769,OUT_OF_MEMORY:1285,PACK_ALIGNMENT:3333,POINTS:0,POLYGON_OFFSET_FACTOR:32824,POLYGON_OFFSET_FILL:32823,POLYGON_OFFSET_UNITS:10752,RED_BITS:3410,RENDERBUFFER:36161,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_BINDING:36007,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_STENCIL_SIZE:36181,RENDERBUFFER_WIDTH:36162,RENDERER:7937,REPEAT:10497,REPLACE:7681,RGB:6407,RGB5_A1:32855,RGB565:36194,RGBA:6408,RGBA4:32854,SAMPLER_2D:35678,SAMPLER_CUBE:35680,SAMPLES:32937,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_BUFFERS:32936,SAMPLE_COVERAGE:32928,SAMPLE_COVERAGE_INVERT:32939,SAMPLE_COVERAGE_VALUE:32938,SCISSOR_BOX:3088,SCISSOR_TEST:3089,SHADER_COMPILER:36346,SHADER_SOURCE_LENGTH:35720,SHADER_TYPE:35663,SHADING_LANGUAGE_VERSION:35724,SHORT:5122,SRC_ALPHA:770,SRC_ALPHA_SATURATE:776,SRC_COLOR:768,STATIC_DRAW:35044,STENCIL_ATTACHMENT:36128,STENCIL_BACK_FAIL:34817,STENCIL_BACK_FUNC:34816,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,STENCIL_BITS:3415,STENCIL_BUFFER_BIT:1024,STENCIL_CLEAR_VALUE:2961,STENCIL_FAIL:2964,STENCIL_FUNC:2962,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_TEST:2960,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STREAM_DRAW:35040,SUBPIXEL_BITS:3408,TEXTURE:5890,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,TEXTURE_2D:3553,TEXTURE_BINDING_2D:32873,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP:34067,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TRIANGLES:4,TRIANGLE_FAN:6,TRIANGLE_STRIP:5,UNPACK_ALIGNMENT:3317,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,UNSIGNED_BYTE:5121,UNSIGNED_INT:5125,UNSIGNED_SHORT:5123,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,VALIDATE_STATUS:35715,VENDOR:7936,VERSION:7938,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_SHADER:35633,VIEWPORT:2978,ZERO:0}},function(t,e,n){t.exports={VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,UNMASKED_VENDOR_WEBGL:37445,UNMASKED_RENDERER_WEBGL:37446,MAX_TEXTURE_MAX_ANISOTROPY_EXT:34047,TEXTURE_MAX_ANISOTROPY_EXT:34046,COMPRESSED_RGB_S3TC_DXT1_EXT:33776,COMPRESSED_RGBA_S3TC_DXT1_EXT:33777,COMPRESSED_RGBA_S3TC_DXT3_EXT:33778,COMPRESSED_RGBA_S3TC_DXT5_EXT:33779,COMPRESSED_R11_EAC:37488,COMPRESSED_SIGNED_R11_EAC:37489,COMPRESSED_RG11_EAC:37490,COMPRESSED_SIGNED_RG11_EAC:37491,COMPRESSED_RGB8_ETC2:37492,COMPRESSED_RGBA8_ETC2_EAC:37493,COMPRESSED_SRGB8_ETC2:37494,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:37495,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:37496,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:37497,COMPRESSED_RGB_PVRTC_4BPPV1_IMG:35840,COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:35842,COMPRESSED_RGB_PVRTC_2BPPV1_IMG:35841,COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:35843,COMPRESSED_RGB_ETC1_WEBGL:36196,COMPRESSED_RGB_ATC_WEBGL:35986,COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL:35986,COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL:34798,UNSIGNED_INT_24_8_WEBGL:34042,HALF_FLOAT_OES:36193,RGBA32F_EXT:34836,RGB32F_EXT:34837,FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT:33297,UNSIGNED_NORMALIZED_EXT:35863,MIN_EXT:32775,MAX_EXT:32776,SRGB_EXT:35904,SRGB_ALPHA_EXT:35906,SRGB8_ALPHA8_EXT:35907,FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT:33296,FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723,COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067,COLOR_ATTACHMENT4_WEBGL:36068,COLOR_ATTACHMENT5_WEBGL:36069,COLOR_ATTACHMENT6_WEBGL:36070,COLOR_ATTACHMENT7_WEBGL:36071,COLOR_ATTACHMENT8_WEBGL:36072,COLOR_ATTACHMENT9_WEBGL:36073,COLOR_ATTACHMENT10_WEBGL:36074,COLOR_ATTACHMENT11_WEBGL:36075,COLOR_ATTACHMENT12_WEBGL:36076,COLOR_ATTACHMENT13_WEBGL:36077,COLOR_ATTACHMENT14_WEBGL:36078,COLOR_ATTACHMENT15_WEBGL:36079,DRAW_BUFFER0_WEBGL:34853,DRAW_BUFFER1_WEBGL:34854,DRAW_BUFFER2_WEBGL:34855,DRAW_BUFFER3_WEBGL:34856,DRAW_BUFFER4_WEBGL:34857,DRAW_BUFFER5_WEBGL:34858,DRAW_BUFFER6_WEBGL:34859,DRAW_BUFFER7_WEBGL:34860,DRAW_BUFFER8_WEBGL:34861,DRAW_BUFFER9_WEBGL:34862,DRAW_BUFFER10_WEBGL:34863,DRAW_BUFFER11_WEBGL:34864,DRAW_BUFFER12_WEBGL:34865,DRAW_BUFFER13_WEBGL:34866,DRAW_BUFFER14_WEBGL:34867,DRAW_BUFFER15_WEBGL:34868,MAX_COLOR_ATTACHMENTS_WEBGL:36063,MAX_DRAW_BUFFERS_WEBGL:34852,VERTEX_ARRAY_BINDING_OES:34229,QUERY_COUNTER_BITS_EXT:34916,CURRENT_QUERY_EXT:34917,QUERY_RESULT_EXT:34918,QUERY_RESULT_AVAILABLE_EXT:34919,TIME_ELAPSED_EXT:35007,TIMESTAMP_EXT:36392,GPU_DISJOINT_EXT:36795}},function(t,e,n){var i={_listeners:null,on:function(t,e,n){for(var i=this._listeners=this._listeners||{},r=i[t]=i[t]||[],s=0,a=r.length;s<a;s++){if(r[s].listener===e)return}return r.push({listener:e,once:n}),this},off:function(t,e){if(0==arguments.length)return this._listeners=null,this;var n=this._listeners&&this._listeners[t];if(n){if(1==arguments.length)return delete this._listeners[t],this;for(var i=0,r=n.length;i<r;i++){var s=n[i];if(s.listener===e){n.splice(i,1),0===n.length&&delete this._listeners[t];break}}}return this},fire:function(t,e){var n,i;"string"==typeof t?i=t:(n=t,i=t.type);var s=this._listeners;if(!s)return!1;var a=s[i];if(a){var o=a.slice(0);if((n=n||new r(i,this,e))._stopped)return!1;for(var u=0;u<o.length;u++){var c=o[u];if(c.listener.call(this,n),c.once){var h=a.indexOf(c);h>-1&&a.splice(h,1)}}return 0==a.length&&delete s[i],!0}return!1}},r=n(19).create({constructor:function(t,e,n){this.type=t,this.target=e,this.detail=n,this.timeStamp=+new Date},type:null,target:null,detail:null,timeStamp:0,stopImmediatePropagation:function(){this._stopped=!0}}),s=window.Event;if(s){var a=s.prototype,o=a.stopImmediatePropagation;a.stopImmediatePropagation=function(){o&&o.call(this),this._stopped=!0}}t.exports=i},function(t,e,n){var i=n(94),r=n(96),s=n(97),a=n(100),o=n(34),u=[[0,0,0],[0,0,0],[0,0,0]],c=[0,0,0];function h(t,e){this.origin=t||[0,0,0],this.direction=e||[0,0,-1]}t.exports=h,h.prototype.set=function(t,e){this.origin=t,this.direction=e},h.prototype.copy=function(t){o(this.origin,t.origin),o(this.direction,t.direction)},h.prototype.clone=function(){var t=new h;return t.copy(this),t},h.prototype.intersectsSphere=function(t,e){return s(c,this.origin,this.direction,t,e)},h.prototype.intersectsPlane=function(t,e){return r(c,this.origin,this.direction,t,e)},h.prototype.intersectsTriangle=function(t){return i(c,this.origin,this.direction,t)},h.prototype.intersectsBox=function(t){return a(c,this.origin,this.direction,t)},h.prototype.intersectsTriangleCell=function(t,e){var n=t[0],i=t[1],r=t[2];return u[0]=e[n],u[1]=e[i],u[2]=e[r],this.intersectsTriangle(u)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_HAS_COLOR\n    varying vec4 v_color;\n#endif\n\n#ifdef HILO_USE_HDR\n    uniform float u_exposure;\n#endif\n\n#ifdef HILO_GAMMA_CORRECTION\n    uniform float u_gammaFactor;\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_HAS_TEXCOORD0\n    varying vec2 v_texcoord0;\n#endif\n\n#ifdef HILO_HAS_TEXCOORD1\n    varying vec2 v_texcoord1;\n#endif\n\n#if defined(HILO_HAS_TEXCOORD0) || defined(HILO_HAS_TEXCOORD1)\n    #if defined(HILO_HAS_TEXCOORD0) && defined(HILO_HAS_TEXCOORD1)\n        #define HILO_SAMPLER_2D hiloSampler2D\n        // https://www.khronos.org/opengl/wiki/Data_Type_(GLSL)#Opaque_types\n        #define HILO_TEXTURE_2D(HILO_SAMPLER_2D)  hiloTexture2D(HILO_SAMPLER_2D.texture, HILO_SAMPLER_2D.uv)\n        struct hiloSampler2D{\n            sampler2D texture;\n            int uv; \n        };\n        \n        vec4 hiloTexture2D(sampler2D texture, int uv){\n            if(uv == 0){\n                return texture2D(texture, v_texcoord0);\n            }\n            else{\n                return texture2D(texture, v_texcoord1);\n            }\n        }\n    #else\n        #ifdef HILO_HAS_TEXCOORD1\n            #define HILO_V_TEXCOORD v_texcoord1\n        #else\n            #define HILO_V_TEXCOORD v_texcoord0\n        #endif\n        #define HILO_SAMPLER_2D sampler2D\n        #define HILO_TEXTURE_2D(HILO_SAMPLER_2D)  texture2D(HILO_SAMPLER_2D, HILO_V_TEXCOORD)\n    #endif\n#endif\n\n\n#ifdef HILO_DIFFUSE_CUBE_MAP\n    varying vec3 v_position;\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_HAS_NORMAL\n    varying vec3 v_normal;\n    #ifdef HILO_NORMAL_MAP\n        uniform HILO_SAMPLER_2D u_normalMap;\n        varying mat3 v_TBN;\n        \n        #ifdef HILO_NORMAL_MAP_SCALE\n        uniform float u_normalMapScale;\n        #endif\n    #endif\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#if defined(HILO_HAS_LIGHT) || defined(HILO_HAS_FRAG_POS)\n    varying vec3 v_fragPos;\n#endif"},function(t,e,n){t.exports="#define GLSLIFY 1\n#ifdef HILO_DIRECTIONAL_LIGHTS\n    uniform vec3 u_directionalLightsColor[HILO_DIRECTIONAL_LIGHTS];\n    uniform vec3 u_directionalLightsInfo[HILO_DIRECTIONAL_LIGHTS];\n    #ifdef HILO_DIRECTIONAL_LIGHTS_SMC\n        uniform sampler2D u_directionalLightsShadowMap[HILO_DIRECTIONAL_LIGHTS_SMC];\n        uniform vec2 u_directionalLightsShadowMapSize[HILO_DIRECTIONAL_LIGHTS_SMC];\n        uniform mat4 u_directionalLightSpaceMatrix[HILO_DIRECTIONAL_LIGHTS_SMC];\n        uniform vec2 u_directionalLightsShadowBias[HILO_DIRECTIONAL_LIGHTS_SMC];\n    #endif\n#endif\n\n#ifdef HILO_SPOT_LIGHTS\n    uniform vec3 u_spotLightsPos[HILO_SPOT_LIGHTS];\n    uniform vec3 u_spotLightsDir[HILO_SPOT_LIGHTS];\n    uniform vec3 u_spotLightsColor[HILO_SPOT_LIGHTS];\n    uniform vec2 u_spotLightsCutoffs[HILO_SPOT_LIGHTS];\n    uniform vec3 u_spotLightsInfo[HILO_SPOT_LIGHTS];\n    uniform float u_spotLightsRange[HILO_SPOT_LIGHTS];\n    #ifdef HILO_SPOT_LIGHTS_SMC\n        uniform sampler2D u_spotLightsShadowMap[HILO_SPOT_LIGHTS_SMC];\n        uniform vec2 u_spotLightsShadowMapSize[HILO_SPOT_LIGHTS_SMC];\n        uniform mat4 u_spotLightSpaceMatrix[HILO_SPOT_LIGHTS_SMC];\n        uniform vec2 u_spotLightsShadowBias[HILO_SPOT_LIGHTS_SMC];\n    #endif\n#endif\n\n#ifdef HILO_POINT_LIGHTS\n    uniform vec3 u_pointLightsPos[HILO_POINT_LIGHTS];\n    uniform vec3 u_pointLightsColor[HILO_POINT_LIGHTS];\n    uniform vec3 u_pointLightsInfo[HILO_POINT_LIGHTS];\n    uniform float u_pointLightsRange[HILO_POINT_LIGHTS];\n    #ifdef HILO_POINT_LIGHTS_SMC\n        uniform samplerCube u_pointLightsShadowMap[HILO_POINT_LIGHTS_SMC];\n        uniform mat4 u_pointLightSpaceMatrix[HILO_POINT_LIGHTS_SMC];\n        uniform vec2 u_pointLightsShadowBias[HILO_POINT_LIGHTS_SMC];\n        uniform vec2 u_pointLightCamera[HILO_POINT_LIGHTS_SMC];\n    #endif\n#endif\n\n#ifdef HILO_AREA_LIGHTS\n    uniform vec3 u_areaLightsPos[HILO_AREA_LIGHTS];\n    uniform vec3 u_areaLightsColor[HILO_AREA_LIGHTS];\n    uniform vec3 u_areaLightsWidth[HILO_AREA_LIGHTS];\n    uniform vec3 u_areaLightsHeight[HILO_AREA_LIGHTS];\n    uniform sampler2D u_areaLightsLtcTexture1;\n    uniform sampler2D u_areaLightsLtcTexture2;\n\n    "+n(113)+"\n#endif\n\n#ifdef HILO_AMBIENT_LIGHTS\n    uniform vec3 u_ambientLightsColor;\n#endif\n\n"+n(64)+"\n"+n(65)+"\n"+n(66)+"\n"+n(67)+"\n"+n(68)},function(t,e){t.exports="#define GLSLIFY 1\nvec4 textureEnvMap(sampler2D texture, vec3 position){\n    return texture2D(texture, vec2(atan(position.x, position.z) * HILO_INVERSE_PI * 0.5+0.5,  acos(position.y) * HILO_INVERSE_PI));\n}\n\nvec4 textureEnvMap(samplerCube texture, vec3 position){\n    return textureCube(texture, position);\n}\n\nvec4 textureEnvMapIncludeMipmapsLod(sampler2D texture, vec3 position, float lod){\n    lod = floor(lod);\n    vec2 uv = vec2(atan(position.x, position.z) * HILO_INVERSE_PI * 0.5+0.5,  acos(position.y) * HILO_INVERSE_PI);\n\n    float scale = pow(2.0, lod);\n\n    return texture2D(texture, vec2(uv.x / scale, (uv.y / scale / 2.0) + 1.0 - 1.0/pow(2.0, lod)));\n}\n\n#ifdef HILO_USE_SHADER_TEXTURE_LOD\n    vec4 textureEnvMapLod(sampler2D texture, vec3 position, float lod){\n        return texture2DLodEXT(texture, vec2(atan(position.x, position.z) * HILO_INVERSE_PI * 0.5+0.5,  acos(position.y) * HILO_INVERSE_PI), lod);\n    }\n\n    vec4 textureEnvMapLod(samplerCube texture, vec3 position, float lod){\n        return textureCubeLodEXT(texture, position, lod);\n    }\n#endif\n\n"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_TRANSPARENCY_MAP\n    uniform HILO_SAMPLER_2D u_transparency;\n#else\n    uniform float u_transparency;\n#endif\n\n#ifdef HILO_ALPHA_CUTOFF\n    uniform float u_alphaCutoff;\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_HAS_FOG\n    varying float v_dist;\n    uniform vec4 u_fogColor;\n    \n    #ifdef HILO_FOG_LINEAR\n        uniform vec2 u_fogInfo;\n    #else\n        uniform float u_fogInfo;\n    #endif\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_NORMAL_MAP\n    vec3 normal = HILO_TEXTURE_2D(u_normalMap).rgb * 2.0 - 1.0;\n    #ifdef HILO_NORMAL_MAP_SCALE\n        normal.xy *= u_normalMapScale;\n    #endif\n    normal = normalize(v_TBN * normal);\n#elif defined(HILO_HAS_NORMAL)\n    vec3 normal = normalize(v_normal);\n#else\n    vec3 normal = vec3(0, 0, 1);\n#endif\n\n#if HILO_SIDE == HILO_BACK_SIDE\n    normal = -normal;\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_HAS_LIGHT\n    #if HILO_SIDE == HILO_FRONT_AND_BACK_SIDE\n        normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n    #endif\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\nfloat transparency = 1.0;\n#ifdef HILO_TRANSPARENCY_MAP\n    transparency = HILO_TEXTURE_2D(u_transparency).r;\n#else\n    transparency = u_transparency;\n#endif\ncolor.a *= transparency;\n#ifdef HILO_ALPHA_CUTOFF\n    if (color.a < u_alphaCutoff) {\n        discard;\n    } else {\n        color.a = 1.0;\n    }\n#endif"},function(t,e,n){t.exports="#define GLSLIFY 1\n#ifdef HILO_IGNORE_TRANSPARENT\ncolor.a = 1.0;\n#endif\n\n#ifdef HILO_USE_HDR\n    color.rgb = vec3(1.0) - exp(-color.rgb * u_exposure);\n#endif\n\n#ifdef HILO_GAMMA_CORRECTION\n    color.rgb = pow(color.rgb, vec3(1.0 / u_gammaFactor));\n#endif\n\n"+n(73)+"\n\n#ifdef HILO_PREMULTIPLY_ALPHA\n    color.rgb *= color.a;\n#endif\n\ngl_FragColor = color;"},function(t,e){t.exports="#define GLSLIFY 1\n"},function(t,e){t.exports="#ifdef GL_ES\nprecision HILO_MAX_VERTEX_PRECISION float;\n#define GLSLIFY 1\n#endif"},function(t,e,n){t.exports="#define GLSLIFY 1\n"+n(25)+"\n"+n(18)+"\n"+n(26)+"\n\n"+n(40)+"\n"+n(41)+"\n"+n(42)+"\n"+n(43)+"\n"+n(62)+"\n"+n(44)+"\n"+n(69)+"\n"+n(46)+"\n"+n(47)+"\n"+n(29)+"\n\nvoid main(void) {\n    vec4 diffuse = vec4(0., 0., 0., 1.);\n    vec4 color = vec4(0., 0., 0., 1.);\n\n    "+n(48)+"\n    "+n(49)+"\n    "+n(71)+"\n    "+n(72)+"\n    "+n(50)+"\n    "+n(51)+"\n    "+n(30)+"\n}"},function(t,e,n){t.exports="#define GLSLIFY 1\n"+n(52)+"\n"+n(18)+"\n"+n(53)+"\n\nattribute vec3 a_position;\nuniform mat4 u_modelViewProjectionMatrix;\n\n"+n(74)+"\n"+n(75)+"\n"+n(76)+"\n"+n(77)+"\n"+n(78)+"\n"+n(79)+"\n"+n(80)+"\n"+n(81)+"\nvoid main(void) {\n    vec4 pos = vec4(a_position, 1.0);\n    #ifdef HILO_HAS_TEXCOORD0\n        vec2 uv = a_texcoord0;\n    #endif\n    #ifdef HILO_HAS_TEXCOORD1\n        vec2 uv1 = a_texcoord1;\n    #endif\n    #ifdef HILO_HAS_NORMAL\n        vec3 normal = a_normal;\n    #endif\n\n    #ifdef HILO_NORMAL_MAP\n        vec4 tangent = a_tangent;\n    #endif\n\n    "+n(82)+"\n    "+n(83)+"\n    "+n(84)+"\n    "+n(85)+"\n    "+n(86)+"\n    "+n(87)+"\n    "+n(88)+"\n\n    gl_Position = u_modelViewProjectionMatrix * pos;\n\n    "+n(89)+"\n}"},function(t,e,n){t.exports="#define GLSLIFY 1\n"+n(25)+"\n"+n(18)+"\n"+n(26)+"\n\n#if defined(HILO_VERTEX_TYPE_POSITION)\n    varying vec3 v_fragPos;\n#elif defined(HILO_VERTEX_TYPE_NORMAL)\n    varying vec3 v_normal;\n#elif defined(HILO_VERTEX_TYPE_DEPTH)\n    uniform float u_cameraFar;\n    uniform float u_cameraNear;\n    uniform float u_cameraType;\n#elif defined(HILO_VERTEX_TYPE_DISTANCE)\n    "+n(90)+"\n\n    uniform float u_cameraFar;\n    uniform float u_cameraNear;\n    varying vec3 v_fragPos;\n#endif\n\nvec4 transformDataToColor(vec3 data){\n    #ifdef HILO_WRITE_ORIGIN_DATA\n        return vec4(data, 1.0);\n    #else\n        return vec4(data * 0.5 + 0.5, 1.0);\n    #endif\n}\n\n"+n(29)+"\n\nvoid main(void) {\n    #if defined(HILO_VERTEX_TYPE_POSITION)\n        gl_FragColor = transformDataToColor(v_fragPos);\n    #elif defined(HILO_VERTEX_TYPE_NORMAL)\n        gl_FragColor = transformDataToColor(v_normal);\n    #elif defined(HILO_VERTEX_TYPE_DEPTH)\n        float z;\n        #ifdef HILO_WRITE_ORIGIN_DATA\n            z = gl_FragCoord.z;\n        #else\n            // OrthographicCamera\n            if(u_cameraType < 1.0){\n                z = gl_FragCoord.z;\n            }\n            // PerspectiveCamera\n            else{\n                z = gl_FragCoord.z * 2.0 - 1.0;\n                z = (2.0 * u_cameraNear * u_cameraFar) / (u_cameraFar + u_cameraNear - z * (u_cameraFar - u_cameraNear));\n            }\n        #endif\n        gl_FragColor = vec4(z, z, z, 1.0);\n    #elif defined(HILO_VERTEX_TYPE_DISTANCE)\n        float distance = length(v_fragPos);\n        #ifdef HILO_WRITE_ORIGIN_DATA\n            gl_FragColor = vec4(distance, distance, distance, 1.0);\n        #else\n            gl_FragColor = packFloat((distance - u_cameraNear)/(u_cameraFar - u_cameraNear));\n        #endif\n    #endif\n    "+n(30)+"\n}"},function(t,e,n){t.exports="#define GLSLIFY 1\n"+n(25)+"\n"+n(18)+"\n"+n(26)+"\n\n"+n(40)+"\n"+n(41)+"\n"+n(42)+"\n"+n(43)+"\n"+n(91)+"\n"+n(44)+"\n"+n(46)+"\n"+n(47)+"\n"+n(29)+"\n\nvoid main(void) {\n    vec4 color = vec4(0., 0., 0., 1.);\n\n    "+n(48)+"\n    "+n(49)+"\n    "+n(93)+"\n    "+n(51)+"\n    "+n(30)+"\n}"},function(t,e,n){t.exports="#define GLSLIFY 1\n"+n(25)+"\n"+n(18)+"\n"+n(26)+"\n\nvarying vec2 v_texcoord0;\nuniform sampler2D u_diffuse;\n\nvoid main(void) {  \n    gl_FragColor = texture2D(u_diffuse, v_texcoord0);\n}"},function(t,e,n){t.exports="#define GLSLIFY 1\n"+n(52)+"\n"+n(18)+"\n"+n(53)+"\n\nattribute vec2 a_position;\nattribute vec2 a_texcoord0;\nvarying vec2 v_texcoord0;\n\n\nvoid main(void) {\n    vec4 pos = vec4(a_position, 0.0, 1.0);\n    gl_Position = pos;\n    v_texcoord0 = a_texcoord0;\n}"},function(t,e){var n=function(){var t=navigator.userAgent,e=document,n=window,i=e.documentElement,r={iphone:/iphone/i.test(t),ipad:/ipad/i.test(t),ipod:/ipod/i.test(t),ios:/iphone|ipad|ipod/i.test(t),android:/android/i.test(t),webkit:/webkit/i.test(t),chrome:/chrome/i.test(t),safari:/safari/i.test(t),firefox:/firefox/i.test(t),ie:/msie/i.test(t),opera:/opera/i.test(t),supportTouch:"ontouchstart"in n,supportCanvas:null!=e.createElement("canvas").getContext,supportStorage:!1,supportOrientation:"orientation"in n||"orientation"in n.screen,supportDeviceMotion:"ondevicemotion"in n};try{localStorage.setItem("hilo","hilo"),localStorage.removeItem("hilo"),r.supportStorage=!0}catch(t){}var s=r.jsVendor=r.webkit||r.firefox?"webkit":r.opera?"o":r.ie?"ms":"",a=r.cssVendor="-"+s+"-",o=e.createElement("div"),u=o.style,c=null!=u[s+"Transform"],h=null!=u[s+"Perspective"];h&&(o.id="test3d",(u=e.createElement("style")).textContent="@media ("+a+"transform-3d){#test3d{height:3px}}",e.head.appendChild(u),i.appendChild(o),h=3==o.offsetHeight,e.head.removeChild(u),i.removeChild(o)),r.supportTransform=c,r.supportTransform3D=h;var f=r.supportTouch,l=f?"touchstart":"mousedown",d=f?"touchmove":"mousemove",m=f?"touchend":"mouseup";return r.POINTER_START=l,r.POINTER_MOVE=d,r.POINTER_END=m,r}();t.exports=n},function(t,e,n){var i=n(19),r=function(){function t(){return+new Date}return i.create({constructor:function(t,e,n,i){var r=this;for(var s in r.target=t,r._startTime=0,r._seekTime=0,r._pausedTime=0,r._pausedStartTime=0,r._reverseFlag=1,r._repeatCount=0,3==arguments.length&&(i=n,n=e,e=null),i)r[s]=i[s];r._fromProps=e,r._toProps=n,!i.duration&&i.time&&(r.duration=i.time||0,r.time=0)},target:null,duration:1e3,delay:0,paused:!1,loop:!1,reverse:!1,repeat:0,repeatDelay:0,ease:null,time:0,isStart:!1,isComplete:!1,onStart:null,onUpdate:null,onComplete:null,setProps:function(t,e){var n=this.target,i=t||e,r=this._fromProps={},s=this._toProps={};for(var a in t=t||n,e=e||n,i)s[a]=e[a]||0,n[a]=r[a]=t[a]||0;return this},start:function(){var e=this;return e._startTime=t()+e.delay,e._seekTime=0,e._pausedTime=0,e._reverseFlag=1,e._repeatCount=0,e.paused=!1,e.isStart=!1,e.isComplete=!1,r.add(e),e},stop:function(){return r.remove(this),this},pause:function(){return this.paused=!0,this._pausedStartTime=t(),this},resume:function(){var e=this;return e.paused=!1,e._pausedStartTime&&(e._pausedTime+=t()-e._pausedStartTime),e._pausedStartTime=0,e},seek:function(e,n){var i=this,s=t();return i._startTime=s,i._seekTime=e,i._pausedTime=0,void 0!==n&&(i.paused=n),i._update(s,!0),r.add(i),i},link:function(t){var e,n,i=t.delay,s=this._startTime;return"string"==typeof i&&(e=0==i.indexOf("+"),n=0==i.indexOf("-"),i=e||n?Number(i.substr(1))*(e?1:-1):Number(i)),t.delay=i,t._startTime=e||n?s+this.duration+i:s+i,this._next=t,r.remove(t),t},_render:function(t){var e,n=this.target,i=this._fromProps;for(e in i)n[e]=i[e]+(this._toProps[e]-i[e])*t},_update:function(e,n){var i=this;if(!i.paused||n){if(i.isComplete)return!0;var s=e-i._startTime-i._pausedTime+i._seekTime;if(!(s<0)){var a,o=s/i.duration;o=o<=0?0:o>=1?1:o;var u=i.ease?i.ease(o):o;i.reverse&&i.isStart&&(i._reverseFlag<0&&(o=1-o,u=1-u),o<1e-7&&(i.repeat>0&&i._repeatCount++>=i.repeat||0==i.repeat&&!i.loop?i.isComplete=!0:(i._startTime=t(),i._pausedTime=0,i._reverseFlag*=-1))),i.isStart||(i.setProps(i._fromProps,i._toProps),i.isStart=!0,i.onStart&&i.onStart.call(i,i)),i.time=s,i._render(u),(a=i.onUpdate)&&a.call(i,u,i),o>=1&&(i.reverse?(i._startTime=t(),i._pausedTime=0,i._reverseFlag*=-1):i.loop||i.repeat>0&&i._repeatCount++<i.repeat?(i._startTime=t()+i.repeatDelay,i._pausedTime=0):i.isComplete=!0);var c=i._next;if(c&&c.time<=0){var h=c._startTime;h>0&&h<=e?(c._render(o),c.time=s,r.add(c)):i.isComplete&&(h<0||h>e)&&c.start()}return i.isComplete?((a=i.onComplete)&&a.call(i,i),!0):void 0}}},Statics:{_tweens:[],tick:function(){var e,n,i=r._tweens,s=i.length;for(n=0;n<s;n++)(e=i[n])&&e._update(t())&&(i.splice(n,1),n--);return r},add:function(t){var e=r._tweens;return-1==e.indexOf(t)&&e.push(t),r},remove:function(t){var e,n;if(t instanceof Array){for(e=0,n=t.length;e<n;e++)r.remove(t[e]);return r}var i=r._tweens;if(t instanceof r)(e=i.indexOf(t))>-1&&i.splice(e,1);else for(e=0;e<i.length;e++)i[e].target===t&&(i.splice(e,1),e--);return r},removeAll:function(){return r._tweens.length=0,r},fromTo:function(t,e,n,i){i=i||{};var s=t instanceof Array;t=s?t:[t];var a,o,u=i.stagger,c=[];for(o=0;o<t.length;o++)a=new r(t[o],e,n,i),u&&(a.delay=(i.delay||0)+(o*u||0)),a.start(),c.push(a);return s?c:a},to:function(t,e,n){return r.fromTo(t,null,e,n)},from:function(t,e,n){return r.fromTo(t,e,null,n)}}})}();t.exports=r},function(t,e){t.exports="#define GLSLIFY 1\n#if defined(HILO_DIFFUSE_MAP)\n    uniform HILO_SAMPLER_2D u_diffuse;\n#elif defined(HILO_DIFFUSE_CUBE_MAP)\n    uniform samplerCube u_diffuse;\n#else\n    uniform vec4 u_diffuse;\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\nfloat transpose(float m) {\n  return m;\n}\n\nmat2 transpose(mat2 m) {\n  return mat2(m[0][0], m[1][0],\n              m[0][1], m[1][1]);\n}\n\nmat3 transpose(mat3 m) {\n  return mat3(m[0][0], m[1][0], m[2][0],\n              m[0][1], m[1][1], m[2][1],\n              m[0][2], m[1][2], m[2][2]);\n}\n\nmat4 transpose(mat4 m) {\n  return mat4(m[0][0], m[1][0], m[2][0], m[3][0],\n              m[0][1], m[1][1], m[2][1], m[3][1],\n              m[0][2], m[1][2], m[2][2], m[3][2],\n              m[0][3], m[1][3], m[2][3], m[3][3]);\n}"},function(t,e){t.exports="#define GLSLIFY 1\nfloat getDiffuse(vec3 normal, vec3 lightDir){\n    return max(dot(normal, lightDir), 0.0);\n}\n\n"},function(t,e){t.exports="#define GLSLIFY 1\nfloat getSpecular(vec3 cameraPos, vec3 fragPos, vec3 lightDir, vec3 normal, float shininess){\n    vec3 viewDir = normalize(cameraPos - fragPos);\n    #ifdef LIGHT_TYPE_PHONG\n        return pow(max(dot(viewDir, reflect(-lightDir, normal), 0.0), shininess);\n    #else\n        return pow(max(dot(normal, normalize(lightDir + viewDir)), 0.0), shininess);\n    #endif\n}\n\n"},function(t,e){t.exports="#define GLSLIFY 1\nfloat getLightAttenuation(vec3 distanceVec, vec3 info, float range){\n    float distance = length(distanceVec);\n    float attenuation = 1.0;\n    #ifdef HILO_USE_PHYSICS_LIGHT\n        attenuation = max(1.0 / (distance * distance), 0.001);\n        if (range > 0.0) {\n            attenuation *= max(min(1.0 - pow( distance / range, 4.0 ), 1.0), 0.0);\n        }\n    #else\n        attenuation = 1.0/(info.x + info.y * distance + info.z * distance * distance);\n    #endif\n\n    return attenuation;\n}\n\n"},function(t,e){t.exports="#define GLSLIFY 1\nfloat unpackFloat(vec4 rgbaDepth) {\n    const vec4 bitShift = vec4(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0);\n    float depth = dot(rgbaDepth, bitShift);\n    return depth;\n}\n\n"},function(t,e){t.exports="#define GLSLIFY 1\nbool isOutOfRange(vec2 pos) {\n    if (pos.x < 0.0 || pos.x > 1.0 || pos.y < 0.0 || pos.y > 1.0) {\n        return true;\n    }\n    return false;\n}\n\nfloat getShadow(sampler2D shadowMap, vec2 shadowMapSize, float bias, vec3 fragPos, mat4 lightSpaceMatrix) {\n    vec4 fragPosLightSpace = lightSpaceMatrix * vec4(fragPos, 1.0);\n    vec3 projCoords = fragPosLightSpace.xyz / fragPosLightSpace.w;\n    projCoords = projCoords * 0.5 + 0.5;\n    if (isOutOfRange(projCoords.xy)) {\n        return 1.0;\n    }\n    float currentDepth = projCoords.z;\n    float shadow = 0.0;\n    vec2 texelSize = 1.0 / shadowMapSize;\n    for (int x = -1; x <= 1; ++x) {\n        for (int y = -1; y <= 1; ++y) {\n            vec2 pos = projCoords.xy + vec2(x, y) * texelSize;\n            if (isOutOfRange(pos)) {\n                shadow += 1.0;\n            } else {\n                float pcfDepth = texture2D(shadowMap, pos).r;\n                shadow += currentDepth - bias > pcfDepth ? 1.0 : 0.0;\n            }\n        }\n    }\n    return 1.0 - shadow / 9.0;\n}\n\nfloat getShadow(samplerCube shadowMap, float bias, vec3 lightPos, vec3 position, vec2 camera, mat4 lightSpaceMatrix) {\n    vec4 distanceVec = lightSpaceMatrix * vec4(position, 1.0) - lightSpaceMatrix * vec4(lightPos, 1.0);\n    float currentDistance = length(distanceVec);\n    vec3 direction = normalize(distanceVec).xyz;\n\n    float shadow = 0.0;\n    const float samples = 2.0;\n    const float offset = 0.01;\n    const float step = offset / (samples * 0.5);\n    for(float x = -offset; x < offset; x +=step)\n    {\n        for(float y = -offset; y < offset; y +=step)\n        {\n            for(float z = -offset; z < offset; z +=step)\n            {\n                float closestDistance = camera[0] + (camera[1] - camera[0]) * unpackFloat(textureCube(shadowMap, direction + vec3(x, y, z)));\n                if (closestDistance == camera[0]) {\n                    continue;\n                }\n                else if(currentDistance - bias > closestDistance)\n                    shadow += 1.0;\n            }\n        }\n    }\n    shadow /= (samples * samples * samples);\n\n    return 1.0 - shadow;\n}\n\n"},function(t,e,n){t.exports="#define GLSLIFY 1\n"+n(45)+"\n"+n(70)+"\n\n#ifdef HILO_HAS_LIGHT\n    #ifdef HILO_HAS_SPECULAR\n        uniform float u_shininess;\n        #ifdef HILO_SPECULAR_MAP\n            uniform HILO_SAMPLER_2D u_specular;\n        #else\n            uniform vec4 u_specular;\n        #endif\n    #endif\n    #ifdef HILO_EMISSION_MAP\n        uniform HILO_SAMPLER_2D u_emission;\n    #else\n        uniform vec4 u_emission;\n    #endif\n    #ifdef HILO_AMBIENT_MAP\n        uniform HILO_SAMPLER_2D u_ambient;\n    #endif\n    #ifdef HILO_SPECULAR_ENV_MAP\n        #ifdef HILO_SPECULAR_ENV_MAP_CUBE\n            uniform samplerCube u_specularEnvMap;\n        #else\n            uniform sampler2D u_specularEnvMap;\n        #endif\n        uniform mat4 u_specularEnvMatrix;\n        uniform float u_reflectivity;\n        uniform float u_refractRatio;\n        uniform float u_refractivity;\n    #endif\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_FIX_MAX_BUG\n    float hilo_max(float a, float b){\n        if (a > b) {\n            return a;\n        }\n        return b;\n    }\n    #define HILO_MAX(a, b) hilo_max(a, b);\n#else\n    #define HILO_MAX(a, b) max(a, b);\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#if defined(HILO_DIFFUSE_MAP)\n    diffuse = HILO_TEXTURE_2D(u_diffuse);\n#elif defined(HILO_DIFFUSE_CUBE_MAP)\n    diffuse = textureCube(u_diffuse, v_position);\n#elif defined(HILO_HAS_COLOR)\n    diffuse = v_color;\n#else\n    diffuse = u_diffuse;\n#endif\ncolor.a = diffuse.a;"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_HAS_LIGHT\n    vec3 lightDiffuse = vec3(0, 0, 0);\n    vec3 lightAmbient = vec3(0, 0, 0);\n    vec3 viewPos = vec3(0, 0, 0);\n\n    #ifdef HILO_AMBIENT_MAP\n        lightAmbient = HILO_TEXTURE_2D(u_ambient).rgb;\n    #else\n        lightAmbient = diffuse.rgb;\n    #endif\n\n    #ifdef HILO_HAS_SPECULAR\n        vec3 lightSpecular = vec3(0, 0, 0);\n        #ifdef HILO_SPECULAR_MAP\n            vec4 specular = HILO_TEXTURE_2D(u_specular);\n        #else\n            vec4 specular = u_specular;\n        #endif\n    #endif\n    \n    #ifdef HILO_EMISSION_MAP\n        vec4 emission = HILO_TEXTURE_2D(u_emission);\n    #else\n        vec4 emission = u_emission;\n    #endif\n\n    #ifdef HILO_DIRECTIONAL_LIGHTS\n        for(int i = 0;i < HILO_DIRECTIONAL_LIGHTS;i++){\n            vec3 lightDir = -u_directionalLightsInfo[i];\n\n            float shadow = 1.0;\n            #ifdef HILO_DIRECTIONAL_LIGHTS_SMC\n                if (i < HILO_DIRECTIONAL_LIGHTS_SMC) {\n                    float bias = HILO_MAX(u_directionalLightsShadowBias[i][1] * (1.0 - dot(normal, lightDir)), u_directionalLightsShadowBias[i][0]);\n                    shadow = getShadow(u_directionalLightsShadowMap[i], u_directionalLightsShadowMapSize[i], bias, v_fragPos, u_directionalLightSpaceMatrix[i]);\n                }\n            #endif\n\n            float diff = getDiffuse(normal, lightDir);\n            lightDiffuse += diff * u_directionalLightsColor[i] * shadow;\n\n            #ifdef HILO_HAS_SPECULAR\n                float spec = getSpecular(viewPos, v_fragPos, lightDir, normal, u_shininess);\n                lightSpecular += spec * u_directionalLightsColor[i] * shadow;\n            #endif\n        }\n    #endif\n\n    #ifdef HILO_SPOT_LIGHTS\n        for(int i = 0; i < HILO_SPOT_LIGHTS; i++){\n            vec3 lightDir = -u_spotLightsDir[i];\n            vec3 distanceVec = u_spotLightsPos[i] - v_fragPos;\n\n            float shadow = 1.0;\n            #ifdef HILO_SPOT_LIGHTS_SMC\n                if (i < HILO_SPOT_LIGHTS_SMC) {\n                    float bias = HILO_MAX(u_spotLightsShadowBias[i][1] * (1.0 - dot(normal, lightDir)), u_spotLightsShadowBias[i][0]);\n                    shadow = getShadow(u_spotLightsShadowMap[i], u_spotLightsShadowMapSize[i], bias, v_fragPos, u_spotLightSpaceMatrix[i]);\n                }\n            #endif\n            \n            float diff = getDiffuse(normal, normalize(distanceVec));\n            float theta = dot(normalize(distanceVec), lightDir);\n            float epsilon = u_spotLightsCutoffs[i][0] - u_spotLightsCutoffs[i][1];\n            float intensity = clamp((theta - u_spotLightsCutoffs[i][1]) / epsilon, 0.0, 1.0);\n            float attenuation = getLightAttenuation(distanceVec, u_spotLightsInfo[i], u_spotLightsRange[i]);\n\n            lightDiffuse += intensity * attenuation * shadow * diff * u_spotLightsColor[i];\n\n            #ifdef HILO_HAS_SPECULAR\n                float spec = getSpecular(viewPos, v_fragPos, lightDir, normal, u_shininess);\n                lightSpecular += intensity * attenuation * shadow * spec * u_spotLightsColor[i];\n            #endif\n        }\n    #endif\n\n    #ifdef HILO_POINT_LIGHTS\n        for(int i = 0;i < HILO_POINT_LIGHTS;i++){\n            vec3 distanceVec = u_pointLightsPos[i] - v_fragPos;\n            vec3 lightDir = normalize(distanceVec);\n\n            float shadow = 1.0;\n            #ifdef HILO_POINT_LIGHTS_SMC\n                if (i < HILO_POINT_LIGHTS_SMC) {\n                    float bias = HILO_MAX(u_pointLightsShadowBias[i][1] * (1.0 - dot(normal, lightDir)), u_pointLightsShadowBias[i][0]);\n                    shadow = getShadow(u_pointLightsShadowMap[i], bias, u_pointLightsPos[i], v_fragPos, u_pointLightCamera[i], u_pointLightSpaceMatrix[i]);\n                }\n            #endif\n            \n            float diff = getDiffuse(normal, lightDir);\n            float attenuation = getLightAttenuation(distanceVec, u_pointLightsInfo[i], u_pointLightsRange[i]);\n            lightDiffuse += diff * attenuation * u_pointLightsColor[i] * shadow;\n\n            #ifdef HILO_HAS_SPECULAR\n                float spec = getSpecular(viewPos, v_fragPos, lightDir, normal, u_shininess);\n                lightSpecular += spec * attenuation * u_pointLightsColor[i] * shadow;\n            #endif\n        }\n    #endif\n\n    #ifdef HILO_AREA_LIGHTS\n        #ifndef HILO_HAS_SPECULAR\n            vec4 specular = vec4(0.0, 0.0, 0.0, 0.0);\n        #endif\n        vec3 viewDir = normalize(vec3(0, 0, 0) - v_fragPos);\n        for(int i = 0; i < HILO_AREA_LIGHTS; i++){\n            color.rgb += getAreaLight(diffuse.rgb, specular.rgb, sqrt(2.0/(u_shininess+2.0)), normal, viewDir, v_fragPos, u_areaLightsPos[i], u_areaLightsColor[i], u_areaLightsWidth[i], u_areaLightsHeight[i], u_areaLightsLtcTexture1, u_areaLightsLtcTexture2);\n        }\n    #endif\n\n    #ifdef HILO_AMBIENT_LIGHTS\n        color.rgb += u_ambientLightsColor * lightAmbient;\n    #endif\n\n    #if defined(HILO_SPECULAR_ENV_MAP) && defined(HILO_HAS_SPECULAR)\n        vec3 I = normalize(v_fragPos - viewPos);\n        if (u_reflectivity > 0.0) {\n            vec3 R = reflect(I, normal);\n            R = normalize(vec3(u_specularEnvMatrix * vec4(R, 1.0)));\n            lightSpecular += textureEnvMap(u_specularEnvMap, R).rgb * u_reflectivity;\n        }\n        if (u_refractivity > 0.0) {\n            vec3 R = refract(I, normal, u_refractRatio);\n            R = normalize(vec3(u_specularEnvMatrix * vec4(R, 1.0)));\n            lightSpecular += textureEnvMap(u_specularEnvMap, R).rgb * u_refractivity;\n        }\n    #endif\n\n    color.rgb += lightDiffuse * diffuse.rgb;\n    #ifdef HILO_HAS_SPECULAR\n        color.rgb += lightSpecular * specular.rgb;\n    #endif\n\n    color.rgb += emission.rgb;\n#else\n    color = diffuse;\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_HAS_FOG\n    float fogFactor = 1.0;\n\n    #ifdef HILO_FOG_LINEAR\n        fogFactor = (u_fogInfo.y - v_dist)/(u_fogInfo.y - u_fogInfo.x);\n    #elif defined(HILO_FOG_EXP)\n        fogFactor = exp(-abs(u_fogInfo * v_dist));\n    #elif defined(HILO_FOG_EXP2)\n        fogFactor = exp(-(u_fogInfo * v_dist) * (u_fogInfo * v_dist)); \n    #endif\n    \n    fogFactor = clamp(fogFactor, 0.0, 1.0);\n    color = mix(u_fogColor, color, fogFactor);\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_QUANTIZED\n    #ifdef HILO_POSITION_QUANTIZED\n        uniform mat4 u_positionDecodeMat;\n    #endif\n    #ifdef HILO_NORMAL_QUANTIZED\n        uniform mat4 u_normalDecodeMat;\n    #endif\n    #ifdef HILO_UV_QUANTIZED\n        uniform mat3 u_uvDecodeMat;\n    #endif\n    #ifdef HILO_UV1_QUANTIZED\n        uniform mat3 u_uv1DecodeMat;\n    #endif\n\n    vec2 unQuantize(vec2 data, mat3 decodeMat) {\n        vec3 result = vec3(data, 1.0);\n        result = decodeMat * result;\n        return result.xy;\n    }\n\n    vec3 unQuantize(vec3 data, mat4 decodeMat) {\n        vec4 result = vec4(data, 1.0);\n        result = decodeMat * result;\n        return result.xyz;\n    }\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_JOINT_COUNT\n    attribute vec4 a_skinIndices;\n    attribute vec4 a_skinWeights;\n    #ifdef HILO_JOINT_MAT_MAP\n        uniform sampler2D u_jointMatTexture;\n        uniform vec2 u_jointMatTextureSize;\n        mat4 getJointMat(float index) {\n            index *= 4.0;\n            float x = float(mod(index, u_jointMatTextureSize.x));\n            float y = float(floor(index / u_jointMatTextureSize.x));\n            float dx = 1.0 / float(u_jointMatTextureSize.x);\n            float dy = 1.0 / float(u_jointMatTextureSize.y);\n            y = dy * (y + 0.5);\n            vec4 v1 = texture2D(u_jointMatTexture, vec2(dx * (x + 0.5), y));\n            vec4 v2 = texture2D(u_jointMatTexture, vec2(dx * (x + 1.5), y));\n            vec4 v3 = texture2D(u_jointMatTexture, vec2(dx * (x + 2.5), y));\n            vec4 v4 = texture2D(u_jointMatTexture, vec2(dx * (x + 3.5), y));\n            mat4 mat = mat4(v1, v2, v3, v4);\n            return mat;\n        }\n\n        mat4 getJointMat(vec4 weights, vec4 indices) {\n            mat4 mat = weights.x * getJointMat(indices.x);\n            mat += weights.y * getJointMat(indices.y);\n            mat += weights.z * getJointMat(indices.z);\n            mat += weights.w * getJointMat(indices.w);\n            return mat;\n        }\n    #else\n        uniform mat4 u_jointMat[HILO_JOINT_COUNT];\n       \n        mat4 getJointMat(vec4 weights, vec4 indices) {\n            mat4 mat = weights.x * u_jointMat[int(indices.x)];\n            mat += weights.y * u_jointMat[int(indices.y)];\n            mat += weights.z * u_jointMat[int(indices.z)];\n            mat += weights.w * u_jointMat[int(indices.w)];\n            return mat;\n        }\n    #endif\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_HAS_TEXCOORD0\n    attribute vec2 a_texcoord0;\n    varying vec2 v_texcoord0;\n    #ifdef HILO_UV_MATRIX\n        uniform mat3 u_uvMatrix;\n    #endif\n#endif\n\n#ifdef HILO_HAS_TEXCOORD1\n    attribute vec2 a_texcoord1;\n    varying vec2 v_texcoord1;\n    #ifdef HILO_UV_MATRIX1\n        uniform mat3 u_uvMatrix1;\n    #endif\n#endif\n\n#ifdef HILO_DIFFUSE_CUBE_MAP\n    varying vec3 v_position;\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_HAS_NORMAL\n    attribute vec3 a_normal;\n    uniform mat3 u_normalMatrix;\n    varying vec3 v_normal;\n\n    #ifdef HILO_NORMAL_MAP\n        attribute vec4 a_tangent;\n        varying mat3 v_TBN;\n    #endif\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#if defined(HILO_HAS_LIGHT) || defined(HILO_HAS_FOG) || defined(HILO_HAS_FRAG_POS)\n    uniform mat4 u_modelViewMatrix;\n    #ifdef HILO_HAS_FOG\n        varying float v_dist;\n    #endif\n\n    #if defined(HILO_HAS_LIGHT) || defined(HILO_HAS_FRAG_POS) \n        varying vec3 v_fragPos;\n    #endif\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_MORPH_TARGET_COUNT\n    uniform float u_morphWeights[HILO_MORPH_TARGET_COUNT];\n\n    #if HILO_MORPH_TARGET_COUNT > 0\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition0;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal0;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent0;\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 1\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition1;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal1;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent1;\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 2\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition2;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal2;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent2;\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 3\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition3;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal3;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent3;\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 4\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition4;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal4;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent4;\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 5\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition5;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal5;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent5;\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 6\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition6;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal6;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent6;\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 7\n        #ifdef HILO_MORPH_HAS_POSITION\n            attribute vec3 a_morphPosition7;\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            attribute vec3 a_morphNormal7;\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            attribute vec3 a_morphTangent7;\n        #endif\n    #endif\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_HAS_COLOR\n    #if HILO_COLOR_SIZE == 3\n        attribute vec3 a_color;\n    #elif HILO_COLOR_SIZE == 4\n        attribute vec4 a_color;\n    #endif\n    varying vec4 v_color;\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_USE_LOG_DEPTH\n    #ifdef HILO_USE_EXT_FRAG_DEPTH\n        varying float v_fragDepth;\n    #else\n        uniform float u_logDepth;\n    #endif\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_HAS_COLOR\n    #if HILO_COLOR_SIZE == 3\n        v_color = vec4(a_color, 1.0);\n    #elif HILO_COLOR_SIZE == 4\n        v_color = a_color;\n    #endif\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_QUANTIZED\n    #ifdef HILO_POSITION_QUANTIZED\n        pos.xyz = unQuantize(pos.xyz, u_positionDecodeMat);\n    #endif\n    #if defined(HILO_HAS_TEXCOORD0) && defined(HILO_UV_QUANTIZED)\n        uv = unQuantize(uv, u_uvDecodeMat);\n    #endif\n    #if defined(HILO_HAS_TEXCOORD1) && defined(HILO_UV1_QUANTIZED)\n        uv1 = unQuantize(uv1, u_uv1DecodeMat);\n    #endif\n    #if defined(HILO_HAS_NORMAL) && defined(HILO_NORMAL_QUANTIZED)\n        normal = unQuantize(normal, u_normalDecodeMat);\n    #endif\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_MORPH_TARGET_COUNT\n    #if HILO_MORPH_TARGET_COUNT > 0\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition0 * u_morphWeights[0];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal0 * u_morphWeights[0];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent.xyz += a_morphTangent0 * u_morphWeights[0];\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 1\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition1 * u_morphWeights[1];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal1 * u_morphWeights[1];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent.xyz += a_morphTangent1 * u_morphWeights[1];\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 2\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition2 * u_morphWeights[2];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal2 * u_morphWeights[2];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent.xyz += a_morphTangent2 * u_morphWeights[2];\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 3\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition3 * u_morphWeights[3];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal3 * u_morphWeights[3];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent.xyz += a_morphTangent3 * u_morphWeights[3];\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 4\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition4 * u_morphWeights[4];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal4 * u_morphWeights[4];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent.xyz += a_morphTangent4 * u_morphWeights[4];\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 5\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition5 * u_morphWeights[5];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal5 * u_morphWeights[5];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent.xyz += a_morphTangent5 * u_morphWeights[5];\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 6\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition6 * u_morphWeights[6];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal6 * u_morphWeights[6];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent.xyz += a_morphTangent6 * u_morphWeights[6];\n        #endif\n    #endif\n\n    #if HILO_MORPH_TARGET_COUNT > 7\n        #ifdef HILO_MORPH_HAS_POSITION\n            pos.xyz += a_morphPosition7 * u_morphWeights[7];\n        #endif\n        #if defined(HILO_MORPH_HAS_NORMAL) && defined(HILO_HAS_NORMAL)\n            normal += a_morphNormal7 * u_morphWeights[7];\n        #endif\n        #if defined(HILO_MORPH_HAS_TANGENT) && defined(HILO_HAS_TANGENT)\n            tangent.xyz += a_morphTangent7 * u_morphWeights[7];\n        #endif\n    #endif\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_JOINT_COUNT\n    mat4 skinMat = getJointMat(a_skinWeights, a_skinIndices);\n    pos = skinMat * pos;\n\n    #ifdef HILO_HAS_NORMAL\n        normal = mat3(skinMat) * normal;\n    #endif\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_HAS_TEXCOORD0\n    #ifdef HILO_UV_MATRIX\n        v_texcoord0 = (u_uvMatrix * vec3(uv, 1.0)).xy;\n    #else\n        v_texcoord0 = uv;\n    #endif\n#endif\n#ifdef HILO_HAS_TEXCOORD1\n    #ifdef HILO_UV_MATRIX1\n        v_texcoord1 = (u_uvMatrix1 * vec3(uv1, 1.0)).xy;\n    #else\n        v_texcoord1 = uv1;\n    #endif\n#endif\n#ifdef HILO_DIFFUSE_CUBE_MAP\n    v_position = pos.xyz;\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_HAS_NORMAL\n    #ifdef HILO_NORMAL_MAP\n        vec3 T = normalize(u_normalMatrix * tangent.xyz);\n        vec3 N = normalize(u_normalMatrix * normal);\n        T = normalize(T - dot(T, N) * N);\n        vec3 B = cross(N, T) * tangent.w;\n        v_TBN = mat3(T, B, N);\n    #endif\n    v_normal = normalize(u_normalMatrix * normal);\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#if defined(HILO_HAS_LIGHT) || defined(HILO_HAS_FOG) || defined(HILO_HAS_FRAG_POS)\n    vec3 fragPos = (u_modelViewMatrix * pos).xyz;\n\n    #if defined(HILO_HAS_LIGHT) || defined(HILO_HAS_FRAG_POS)\n        v_fragPos = fragPos;\n    #endif\n\n    #ifdef HILO_HAS_FOG\n        v_dist = length(fragPos);\n    #endif\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n#ifdef HILO_USE_LOG_DEPTH\n    #ifdef HILO_USE_EXT_FRAG_DEPTH\n        v_fragDepth = 1.0 + gl_Position.w;\n    #else\n        gl_Position.z = log2( max( 1e-6, gl_Position.w + 1.0 ) ) * u_logDepth - 1.0;\n        gl_Position.z *= gl_Position.w;\n    #endif\n#endif"},function(t,e){t.exports="#define GLSLIFY 1\n// https://github.com/playcanvas/engine/blob/master/src/graphics/program-lib/chunks/packDepth.frag\n// Packing a float in GLSL with multiplication and mod\n// http://blog.gradientstudios.com/2012/08/23/shadow-map-improvement\nvec4 packFloat(float depth) {\n    const vec4 bit_shift = vec4(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);\n    const vec4 bit_mask  = vec4(0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);\n\n    // combination of mod and multiplication and division works better\n    vec4 res = mod(depth * bit_shift * vec4(255), vec4(256) ) / vec4(255);\n    res -= res.xxyz * bit_mask;\n    return res;\n}\n\n\n\n"},function(t,e,n){t.exports="#define GLSLIFY 1\n"+n(45)+"\n"+n(92)+"\n"+n(70)+'\n\nuniform vec4 u_baseColor;\n#ifdef HILO_BASE_COLOR_MAP\n    uniform HILO_SAMPLER_2D u_baseColorMap;\n#endif\n\n#ifdef HILO_NEED_WORLD_NORMAL\n    uniform mat3 u_viewInverseNormalMatrix;\n#endif\n\n#ifdef HILO_HAS_LIGHT\n    uniform float u_metallic;\n    #ifdef HILO_METALLIC_MAP\n        uniform HILO_SAMPLER_2D u_metallicMap;\n    #endif\n        uniform float u_roughness;\n    #ifdef HILO_ROUGHNESS_MAP\n        uniform HILO_SAMPLER_2D u_roughnessMap;\n    #endif\n    #ifdef HILO_METALLIC_ROUGHNESS_MAP\n        uniform HILO_SAMPLER_2D u_metallicRoughnessMap;\n    #endif\n    #ifdef HILO_OCCLUSION_MAP\n        uniform HILO_SAMPLER_2D u_occlusionMap;\n    #endif\n\n    #ifdef HILO_OCCLUSION_STRENGTH\n        uniform float u_occlusionStrength;\n    #endif\n\n    #ifdef HILO_DIFFUSE_ENV_MAP\n        #ifdef HILO_DIFFUSE_ENV_MAP_CUBE\n            uniform samplerCube u_diffuseEnvMap;\n        #else\n            uniform sampler2D u_diffuseEnvMap;\n        #endif\n        uniform float u_diffuseEnvIntensity;\n    #elif defined(HILO_DIFFUSE_ENV_SPHERE_HARMONICS3)\n        uniform vec3 u_diffuseEnvSphereHarmonics3[9];\n        uniform float u_diffuseEnvIntensity;\n    #endif\n    #ifdef HILO_SPECULAR_ENV_MAP\n        uniform sampler2D u_brdfLUT;\n        #ifdef HILO_SPECULAR_ENV_MAP_CUBE\n            uniform samplerCube u_specularEnvMap;\n        #else\n            uniform sampler2D u_specularEnvMap;\n        #endif\n        uniform float u_specularEnvIntensity;\n\n        uniform float u_specularEnvMapMipCount;\n    #endif\n\n    #ifdef HILO_EMISSION_MAP\n        uniform HILO_SAMPLER_2D u_emission;\n    #endif\n\n    #ifdef HILO_PBR_SPECULAR_GLOSSINESS\n        uniform vec4 u_specular;\n        uniform float u_glossiness;\n        #ifdef HILO_SPECULAR_GLOSSINESS_MAP\n            uniform HILO_SAMPLER_2D u_specularGlossinessMap;\n        #endif\n    #endif\n\n    #ifdef HILO_LIGHT_MAP\n        uniform HILO_SAMPLER_2D u_lightMap;\n    #endif\n\n\n    // PBR Based on https://github.com/KhronosGroup/glTF-WebGL-PBR\n\n    // Basic Lambertian diffuse\n    // Implementation from Lambert\'s Photometria https://archive.org/details/lambertsphotome00lambgoog\n    // See also [1], Equation 1\n    vec3 diffuse(vec3 diffuseColor) {\n        return diffuseColor * HILO_INVERSE_PI;\n    }\n\n    // The following equation models the Fresnel reflectance term of the spec equation (aka F())\n    // Implementation of fresnel from [4], Equation 15\n    vec3 specularReflection(vec3 reflectance0, vec3 reflectance90, float VdotH) {\n        return reflectance0 + (reflectance90 - reflectance0) * pow(clamp(1.0 - VdotH, 0.0, 1.0), 5.0);\n    }\n\n    // This calculates the specular geometric attenuation (aka G()),\n    // where rougher material will reflect less light back to the viewer.\n    // This implementation is based on [1] Equation 4, and we adopt their modifications to\n    // alphaRoughness as input as originally proposed in [2].\n    float geometricOcclusion(float NdotL, float NdotV, float alphaRoughness) {\n        float r = alphaRoughness * alphaRoughness;\n\n        float attenuationL = 2.0 * NdotL / (NdotL + sqrt(r + (1.0 - r) * (NdotL * NdotL)));\n        float attenuationV = 2.0 * NdotV / (NdotV + sqrt(r + (1.0 - r) * (NdotV * NdotV)));\n        return attenuationL * attenuationV;\n    }\n\n    // The following equation(s) model the distribution of microfacet normals across the area being drawn (aka D())\n    // Implementation from "Average Irregularity Representation of a Roughened Surface for Ray Reflection" by T. S. Trowbridge, and K. P. Reitz\n    // Follows the distribution function recommended in the SIGGRAPH 2013 course notes from EPIC Games [1], Equation 3.\n    float microfacetDistribution(float alphaRoughness, float NdotH) {\n        float roughnessSq = alphaRoughness * alphaRoughness;\n        float f = (NdotH * roughnessSq - NdotH) * NdotH + 1.0;\n        return roughnessSq * HILO_INVERSE_PI / (f * f);\n    }\n\n    vec3 computeDiffuseSHLight(vec3 normal, in vec3 sh[9]) {\n        return sh[0] +\n            sh[1] * (normal.y) +\n            sh[2] * (normal.z) +\n            sh[3] * (normal.x) +\n            sh[4] * (normal.y * normal.x) +\n            sh[5] * (normal.y * normal.z) +\n            sh[6] * ((3.0 * normal.z * normal.z) - 1.0) +\n            sh[7] * (normal.z * normal.x) +\n            sh[8] * (normal.x * normal.x - (normal.y * normal.y));\n    }\n\n    // https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Vendor/EXT_lights_image_based/README.md#rgbd\n    vec3 decodeRGBD(in vec4 color){\n        return color.rgb / color.a;\n    }\n\n    vec3 getIBLContribution(in vec3 N, in vec3 V, vec3 diffuseColor, vec3 specularColor, float ao, float NdotV, float perceptualRoughness) {\n        vec3 color = vec3(.0, .0, .0);\n        #ifdef HILO_NEED_WORLD_NORMAL\n        N = u_viewInverseNormalMatrix * N;\n        V = u_viewInverseNormalMatrix * V;\n        #endif\n        #if defined(HILO_DIFFUSE_ENV_MAP) || defined(HILO_DIFFUSE_ENV_SPHERE_HARMONICS3)\n            #ifdef HILO_DIFFUSE_ENV_MAP\n                #ifdef HILO_GAMMA_CORRECTION\n                    vec3 diffuseLight = sRGBToLinear(textureEnvMap(u_diffuseEnvMap, N)).rgb;\n                #else\n                    vec3 diffuseLight = textureEnvMap(u_diffuseEnvMap, N).rgb;\n                #endif\n            #elif defined(HILO_DIFFUSE_ENV_SPHERE_HARMONICS3)\n                vec3 diffuseLight = computeDiffuseSHLight(N, u_diffuseEnvSphereHarmonics3);\n            #endif\n            color.rgb += diffuseLight * diffuseColor * ao * u_diffuseEnvIntensity;\n        #endif\n\n        #ifdef HILO_SPECULAR_ENV_MAP\n            vec3 R = -normalize(reflect(V, N));\n            vec3 brdf = texture2D(u_brdfLUT, vec2(NdotV, 1.0 - perceptualRoughness)).rgb;\n            #ifdef HILO_IS_SPECULAR_ENV_MAP_INCLUDE_MIPMAPS\n                float lod = clamp(perceptualRoughness * u_specularEnvMapMipCount, 0.0, u_specularEnvMapMipCount);\n                vec4 specularEnvMap = textureEnvMapIncludeMipmapsLod(u_specularEnvMap, R, lod);\n            #elif HILO_USE_SHADER_TEXTURE_LOD\n                float lod = clamp(perceptualRoughness * u_specularEnvMapMipCount, 0.0, u_specularEnvMapMipCount);\n                vec4 specularEnvMap = textureEnvMapLod(u_specularEnvMap, R, lod);\n            #else\n                vec4 specularEnvMap = textureEnvMap(u_specularEnvMap, R);\n            #endif\n\n            vec3 specularLight = decodeRGBD(specularEnvMap);\n\n            #ifdef HILO_GAMMA_CORRECTION\n                specularLight = sRGBToLinear(specularLight);\n            #endif\n            color.rgb += specularLight * (specularColor * brdf.x + brdf.y) * u_specularEnvIntensity;\n        #endif\n        return color;\n    }\n\n    vec3 calculateLo(vec3 N, vec3 V, vec3 L, vec3 reflectance0, vec3 reflectance90, float alphaRoughness, vec3 diffuseColor, float NdotV) {\n        vec3 H = normalize(L + V);\n        float NdotL = clamp(dot(N, L), 0.001, 1.0);\n        float NdotH = clamp(dot(N, H), 0.0, 1.0);\n        float LdotH = clamp(dot(L, H), 0.0, 1.0);\n        float VdotH = clamp(dot(V, H), 0.0, 1.0);\n        // Calculate the shading terms for the microfacet specular shading model\n        vec3 F = specularReflection(reflectance0, reflectance90, VdotH);\n        float G = geometricOcclusion(NdotL, NdotV, alphaRoughness);\n        float D = microfacetDistribution(alphaRoughness, NdotH);\n\n        vec3 diffuseContrib;\n\n        #ifdef HILO_LIGHT_MAP\n            diffuseContrib = vec3(0.0);\n        #else\n            diffuseContrib = (1.0 - F) * diffuse(diffuseColor);\n        #endif\n        vec3 specContrib = F * G * D / (4.0 * NdotL * NdotV);\n        // Obtain final intensity as reflectance (BRDF) scaled by the energy of the light (cosine law)\n        return NdotL * (diffuseContrib + specContrib);\n    }\n#endif'},function(t,e){t.exports="#define GLSLIFY 1\nvec4 sRGBToLinear( in vec4 value ) {\n    return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\n\nvec3 sRGBToLinear( in vec3 value ) {\n    return vec3( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ));\n}\n\n"},function(t,e,n){t.exports="#define GLSLIFY 1\nvec4 baseColor = u_baseColor;\n\n#ifdef HILO_BASE_COLOR_MAP\n    #ifdef HILO_GAMMA_CORRECTION\n        baseColor *= sRGBToLinear(HILO_TEXTURE_2D(u_baseColorMap));\n    #else\n        baseColor *= HILO_TEXTURE_2D(u_baseColorMap);\n    #endif\n#endif\n\n#if defined(HILO_HAS_COLOR)\n    baseColor *= v_color;\n#endif\n\ncolor.a = baseColor.a;\n\n"+n(50)+"\n\n#ifdef HILO_HAS_LIGHT\n    vec3 viewPos = vec3(0, 0, 0);\n    vec3 N = normal;\n    vec3 V = normalize(viewPos - v_fragPos);\n\n    #ifdef HILO_OCCLUSION_MAP\n        float ao  = HILO_TEXTURE_2D(u_occlusionMap).r;\n    #else\n        float ao = 1.0;\n    #endif\n\n    #ifdef HILO_PBR_SPECULAR_GLOSSINESS\n        vec3 specular = u_specular.rgb;\n        float glossiness = u_glossiness;\n        #ifdef HILO_SPECULAR_GLOSSINESS_MAP\n            vec4 specularGlossiness = sRGBToLinear(HILO_TEXTURE_2D(u_specularGlossinessMap));\n            specular = specularGlossiness.rgb * specular;\n            glossiness = specularGlossiness.a * glossiness;\n        #endif\n        float roughness = 1.0 - glossiness;\n        float metallic = 0.0;\n        vec3 diffuseColor = baseColor.rgb * (1.0 - max(max(specular.r, specular.g), specular.b));\n        vec3 specularColor = specular;\n    #else\n        float metallic = u_metallic;\n        float roughness = u_roughness;\n        #ifdef HILO_METALLIC_MAP\n            metallic = HILO_TEXTURE_2D(u_metallicMap).r * u_metallic;\n        #endif\n        #ifdef HILO_ROUGHNESS_MAP\n            roughness  = HILO_TEXTURE_2D(u_roughnessMap).r * u_roughness;\n        #endif\n        #ifdef HILO_METALLIC_ROUGHNESS_MAP\n            vec4 metallicRoughnessMap = HILO_TEXTURE_2D(u_metallicRoughnessMap);\n            #ifdef HILO_IS_OCCLUSION_MAP_IN_METALLIC_ROUGHNESS_MAP\n                ao = metallicRoughnessMap.r;\n            #endif\n            roughness = metallicRoughnessMap.g * u_roughness;\n            metallic = metallicRoughnessMap.b * u_metallic;\n        #endif\n        roughness = clamp(roughness, 0.04, 1.0);\n        metallic = clamp(metallic, 0.0, 1.0);\n        vec3 f0 = vec3(0.04);\n        vec3 diffuseColor = baseColor.rgb * (vec3(1.0) - f0);\n        diffuseColor *= 1.0 - metallic;\n        vec3 specularColor = mix(f0, baseColor.rgb, metallic);\n    #endif\n\n    #ifdef HILO_OCCLUSION_STRENGTH\n        ao = mix(1.0, ao, u_occlusionStrength);\n    #endif\n\n    float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);\n    // For typical incident reflectance range (between 4% to 100%) set the grazing reflectance to 100% for typical fresnel effect.\n    // For very low reflectance range on highly diffuse objects (below 4%), incrementally reduce grazing reflecance to 0%.\n    float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);\n    vec3 specularEnvironmentR0 = specularColor.rgb;\n    vec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;\n\n    float NdotV = clamp(abs(dot(N, V)), 0.001, 1.0);\n    float alphaRoughness = roughness * roughness;\n\n    #ifdef HILO_DIRECTIONAL_LIGHTS\n        for(int i = 0;i < HILO_DIRECTIONAL_LIGHTS;i++){\n            vec3 lightDir = normalize(-u_directionalLightsInfo[i]);\n            vec3 radiance = u_directionalLightsColor[i];\n            float shadow = 1.0;\n            #ifdef HILO_DIRECTIONAL_LIGHTS_SMC\n                if (i < HILO_DIRECTIONAL_LIGHTS_SMC) {\n                    float bias = HILO_MAX(u_directionalLightsShadowBias[i][1] * (1.0 - dot(N, lightDir)), u_directionalLightsShadowBias[i][0]);\n                    shadow = getShadow(u_directionalLightsShadowMap[i], u_directionalLightsShadowMapSize[i], bias, v_fragPos, u_directionalLightSpaceMatrix[i]);\n                }\n            #endif\n            color.rgb += shadow * radiance * calculateLo(N, V, lightDir, specularEnvironmentR0, specularEnvironmentR90, alphaRoughness, diffuseColor, NdotV);\n        }\n    #endif\n\n    #ifdef HILO_SPOT_LIGHTS\n        for(int i = 0; i < HILO_SPOT_LIGHTS; i++){\n            vec3 lightDir = normalize(-u_spotLightsDir[i]);\n            vec3 distanceVec = u_spotLightsPos[i] - v_fragPos;\n\n            float theta = dot(normalize(distanceVec), lightDir);\n            float epsilon = u_spotLightsCutoffs[i][0] - u_spotLightsCutoffs[i][1];\n            float intensity = clamp((theta - u_spotLightsCutoffs[i][1]) / epsilon, 0.0, 1.0);\n            float attenuation = getLightAttenuation(distanceVec, u_spotLightsInfo[i], u_spotLightsRange[i]);\n            vec3 radiance = intensity * attenuation * u_spotLightsColor[i];\n\n            float shadow = 1.0;\n            #ifdef HILO_SPOT_LIGHTS_SMC\n                if (i < HILO_SPOT_LIGHTS_SMC) {\n                    float bias = HILO_MAX(u_spotLightsShadowBias[i][1] * (1.0 - dot(N, lightDir)), u_spotLightsShadowBias[i][0]);\n                    shadow = getShadow(u_spotLightsShadowMap[i], u_spotLightsShadowMapSize[i], bias, v_fragPos, u_spotLightSpaceMatrix[i]);\n                }\n            #endif\n            color.rgb += shadow * radiance * calculateLo(N, V, lightDir, specularEnvironmentR0, specularEnvironmentR90, alphaRoughness, diffuseColor, NdotV);\n        }\n    #endif\n\n    #ifdef HILO_POINT_LIGHTS\n        for(int i = 0; i < HILO_POINT_LIGHTS; i++){\n            vec3 distanceVec = u_pointLightsPos[i] - v_fragPos;\n            vec3 lightDir = normalize(distanceVec);\n\n            float shadow = 1.0;\n            #ifdef HILO_POINT_LIGHTS_SMC\n                if (i < HILO_POINT_LIGHTS_SMC) {\n                    float bias = HILO_MAX(u_pointLightsShadowBias[i][1] * (1.0 - dot(normal, lightDir)), u_pointLightsShadowBias[i][0]);\n                    shadow = getShadow(u_pointLightsShadowMap[i], bias, u_pointLightsPos[i], v_fragPos, u_pointLightCamera[i], u_pointLightSpaceMatrix[i]);\n                }\n            #endif\n\n            float attenuation = getLightAttenuation(distanceVec, u_pointLightsInfo[i], u_pointLightsRange[i]);\n            vec3 radiance = attenuation * u_pointLightsColor[i];\n\n            color.rgb += shadow * radiance * calculateLo(N, V, lightDir, specularEnvironmentR0, specularEnvironmentR90, alphaRoughness, diffuseColor, NdotV);\n        }\n    #endif\n\n    #ifdef HILO_AREA_LIGHTS\n        for(int i = 0; i < HILO_AREA_LIGHTS; i++){\n            color.rgb += getAreaLight(diffuseColor, specularColor, roughness, N, V, v_fragPos, u_areaLightsPos[i], u_areaLightsColor[i], u_areaLightsWidth[i], u_areaLightsHeight[i], u_areaLightsLtcTexture1, u_areaLightsLtcTexture2);\n        }\n    #endif\n\n    #ifdef HILO_LIGHT_MAP\n        vec4 lightMapColor = HILO_TEXTURE_2D(u_lightMap);\n        // https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_lights_image_based#rgbd\n        color.rgb += baseColor.rgb * decodeRGBD(lightMapColor);\n    #endif\n\n    // IBL\n    color.rgb += getIBLContribution(N, V, diffuseColor, specularColor, ao, NdotV, roughness);\n\n    #if defined(HILO_AMBIENT_LIGHTS) && (defined(HILO_IS_DIFFUESENV_AND_AMBIENTLIGHT_WORK_TOGETHER) || (!defined(HILO_DIFFUSE_ENV_MAP) && !defined(HILO_DIFFUSE_ENV_SPHERE_HARMONICS3)))\n        color.rgb += u_ambientLightsColor * baseColor.rgb * ao;\n    #endif\n\n    #ifdef HILO_EMISSION_MAP\n        #ifdef HILO_GAMMA_CORRECTION\n            color.rgb += sRGBToLinear(HILO_TEXTURE_2D(u_emission)).rgb;\n        #else\n            color.rgb += HILO_TEXTURE_2D(u_emission).rgb;\n        #endif\n    #endif\n#else\n    color = baseColor;\n#endif"},function(t,e,n){var i=n(95),r=n(27),s=n(31),a=[0,0,0],o=[0,0,0],u=[0,0,0],c=[0,0,0],h=[0,0,0];t.exports=function(t,e,n,f){s(a,f[1],f[0]),s(o,f[2],f[0]),i(c,n,o);var l=r(a,c);if(l<1e-6)return null;s(u,e,f[0]);var d=r(u,c);if(d<0||d>l)return null;i(h,u,a);var m=r(n,h);if(m<0||d+m>l)return null;var _=r(o,h)/l;return t[0]=e[0]+_*n[0],t[1]=e[1]+_*n[1],t[2]=e[2]+_*n[2],t}},function(t,e){t.exports=function(t,e,n){var i=e[0],r=e[1],s=e[2],a=n[0],o=n[1],u=n[2];return t[0]=r*u-s*o,t[1]=s*a-i*u,t[2]=i*o-r*a,t}},function(t,e,n){var i=n(27),r=n(32),s=n(33),a=n(34);t.exports=function(t,e,n,u,c){var h=i(n,u);if(0!==h){var f=-(i(e,u)+c)/h;return f<0?null:(s(o,n,f),r(t,e,o))}return i(u,e)+c===0?a(t,e):null};var o=[0,0,0]},function(t,e,n){var i=n(98),r=n(27),s=n(31),a=n(99),o=n(33),u=n(32),c=[0,0,0];t.exports=function(t,e,n,h,f){s(c,h,e);var l=r(n,c);if(l<0)return null;a(c,e,n,l);var d=i(h,c),m=f*f;if(d>m)return null;return o(t,n,l-Math.sqrt(m-d)),u(t,t,e)}},function(t,e){t.exports=function(t,e){var n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return n*n+i*i+r*r}},function(t,e){t.exports=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t[2]=e[2]+n[2]*i,t}},function(t,e){function n(t,e,n){for(var i=t.length,r=-1/0,s=1/0,a=0;a<i;a++){var o=(n[0][a]-t[a])/e[a],u=(n[1][a]-t[a])/e[a];if(o>u){var c=o;o=u,u=c}if(u<r||o>s)return 1/0;o>r&&(r=o),u<s&&(s=u)}return r>s?1/0:r}t.exports=function(t,e,i,r){var s=n(e,i,r);if(s===1/0)t=null;else{t=t||[];for(var a=0;a<e.length;a++)t[a]=e[a]+i[a]*s}return t},t.exports.distance=n},function(t,e,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function a(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(t){i[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,o,u=a(t),c=1;c<arguments.length;c++){for(var h in n=Object(arguments[c]))r.call(n,h)&&(u[h]=n[h]);if(i){o=i(n);for(var f=0;f<o.length;f++)s.call(n,o[f])&&(u[o[f]]=n[o[f]])}}return u}},function(t,e,n){"use strict";var i,r,s,a;Object.keys||(Object.keys=(i=Object.prototype.hasOwnProperty,r=!{toString:null}.propertyIsEnumerable("toString"),a=(s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]).length,function(t){if("object"!=typeof t&&("function"!=typeof t||null===t))throw new TypeError("Object.keys called on non-object");var e,n,o=[];for(e in t)i.call(t,e)&&o.push(e);if(r)for(n=0;n<a;n++)i.call(t,s[n])&&o.push(s[n]);return o}))},function(t,e,n){"use strict";t.exports=function(t){return Object.keys(t).map((function(e){return t[e]}))}},function(t,e,n){"use strict";t.exports="function"==typeof Promise?Promise:n(109)},function(t,e){var n=function(){function t(t,e,n,i,r){return t=t||{},e&&(t.EaseIn=e),n&&(t.EaseOut=n),i&&(t.EaseInOut=i),r&&(t.EaseNone=r),t}var e=t(null,null,null,null,(function(t){return t})),n=t(null,(function(t){return t*t}),(function(t){return-t*(t-2)}),(function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)})),i=t(null,(function(t){return t*t*t}),(function(t){return--t*t*t+1}),(function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)})),r=t(null,(function(t){return t*t*t*t}),(function(t){return-(--t*t*t*t-1)}),(function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)})),s=t(null,(function(t){return t*t*t*t*t}),(function(t){return(t-=1)*t*t*t*t+1}),(function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)})),a=Math,o=a.PI,u=.5*o,c=a.sin,h=a.cos,f=a.pow,l=a.sqrt,d=t(null,(function(t){return 1-h(t*u)}),(function(t){return c(t*u)}),(function(t){return-.5*(h(o*t)-1)})),m=t(null,(function(t){return 0==t?0:f(2,10*(t-1))}),(function(t){return 1==t?1:1-f(2,-10*t)}),(function(t){return 0==t||1==t?t:(t*=2)<1?.5*f(2,10*(t-1)):.5*(2-f(2,-10*(t-1)))})),_=t(null,(function(t){return-(l(1-t*t)-1)}),(function(t){return l(1- --t*t)}),(function(t){return(t/=.5)<1?-.5*(l(1-t*t)-1):.5*(l(1-(t-=2)*t)+1)})),p=t({a:1,p:.4,s:.1,config:function(t,e){p.a=t,p.p=e,p.s=e/(2*o)*Math.asin(1/t)||0}},(function(t){return-p.a*f(2,10*(t-=1))*c((t-p.s)*(2*o)/p.p)}),(function(t){return p.a*f(2,-10*t)*c((t-p.s)*(2*o)/p.p)+1}),(function(t){return(t*=2)<1?p.a*f(2,10*(t-=1))*c((t-p.s)*(2*o)/p.p)*-.5:p.a*f(2,-10*(t-=1))*c((t-p.s)*(2*o)/p.p)*.5+1})),g=t({o:1.70158,s:2.59491,config:function(t){g.o=t,g.s=1.525*t}},(function(t){return t*t*((g.o+1)*t-g.o)}),(function(t){return(t-=1)*t*((g.o+1)*t+g.o)+1}),(function(t){return(t*=2)<1?t*t*((g.s+1)*t-g.s)*.5:.5*((t-=2)*t*((g.s+1)*t+g.s)+2)})),v=t(null,(function(t){return 1-v.EaseOut(1-t)}),(function(t){return(t/=1)<.36364?7.5625*t*t:t<.72727?7.5625*(t-=.54545)*t+.75:t<.90909?7.5625*(t-=.81818)*t+.9375:7.5625*(t-=.95455)*t+.984375}),(function(t){return t<.5?.5*v.EaseIn(2*t):.5*v.EaseOut(2*t-1)+.5}));return{Linear:e,Quad:n,Cubic:i,Quart:r,Quint:s,Sine:d,Expo:m,Circ:_,Elastic:p,Back:g,Bounce:v}}();t.exports=n},function(t,e){t.exports=function(t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var e=0,n=t.length;function i(){var i="";do{var r=t[e];if(10==r){++e;break}i+=String.fromCharCode(r)}while(++e<n);return i}for(var r=0,s=0,a=1,o=!1,u=0;u<20;u++){var c,h=i();if(c=h.match("#\\?RADIANCE"));else if(c=h.match("FORMAT=32-bit_rle_rgbe"))o=!0;else if(c=h.match("EXPOSURE=\\s*([0-9]*[.][0-9]*)"))a=Number(c[1]);else if(c=h.match("#.*"));else if(c=h.match("-Y ([0-9]+) \\+X ([0-9]+)")){s=Number(c[1]),r=Number(c[2]);break}}if(!o)throw new Error("File is not run length encoded!");var f=new Uint8Array(r*s*4);!function(t,e,n,i,r,s){var a,o,u,c=new Array(4),h=null,f=new Array(2),l=t.length;function d(e){var n=0;do{e[n++]=t[i]}while(++i<l&&n<e.length);return n}function m(e,n,r){var s=0;do{e[n+s++]=t[i]}while(++i<l&&s<r);return s}function _(t,e,n,i){var r=4*i,s=m(e,n,r);if(s<r)throw new Error("Error reading raw pixels: got "+s+" bytes, expected "+r)}for(;s>0;){if(d(c)<c.length)throw new Error("Error reading bytes: expected "+c.length);if(2!=c[0]||2!=c[1]||0!=(128&c[2]))return e[n++]=c[0],e[n++]=c[1],e[n++]=c[2],e[n++]=c[3],void _(0,e,n,r*s-1);if(((255&c[2])<<8|255&c[3])!=r)throw new Error("Wrong scanline width "+((255&c[2])<<8|255&c[3])+", expected "+r);null==h&&(h=new Array(4*r)),a=0;for(var p=0;p<4;p++)for(o=(p+1)*r;a<o;){if(d(f)<f.length)throw new Error("Error reading 2-byte buffer");if((255&f[0])>128){if(0==(u=(255&f[0])-128)||u>o-a)throw new Error("Bad scanline data");for(;u-- >0;)h[a++]=f[1]}else{if(0==(u=255&f[0])||u>o-a)throw new Error("Bad scanline data");if(h[a++]=f[1],--u>0){if(m(h,a,u)<u)throw new Error("Error reading non-run data");a+=u}}}for(p=0;p<r;p++)e[n+0]=h[p],e[n+1]=h[p+r],e[n+2]=h[p+2*r],e[n+3]=h[p+3*r],n+=4;s--}}(t,f,0,e,r,s);for(var l=new Float32Array(r*s*4),d=0;d<f.length;d+=4){var m=f[d+0]/255,_=f[d+1]/255,p=f[d+2]/255,g=f[d+3],v=Math.pow(2,g-128);m*=v,_*=v,p*=v;var E=d;l[E+0]=m,l[E+1]=_,l[E+2]=p,l[E+3]=1}return{shape:[r,s],exposure:a,gamma:1,data:l}}},function(t,e,n){var i=n(19),r=n(60),s=i.create({constructor:function(t){this._targetFPS=t||60,this._interval=1e3/this._targetFPS,this._tickers=[]},_paused:!1,_targetFPS:0,_interval:0,_intervalId:null,_tickers:null,_lastTime:0,_tickCount:0,_tickTime:0,_measuredFPS:0,start:function(t){if(void 0===t&&(t=!0),!this._intervalId){this._lastTime=+new Date;var e,n=this,i=this._interval,s=window.requestAnimationFrame||window[r.jsVendor+"RequestAnimationFrame"];t&&s&&i<17?(this._useRAF=!0,e=function(){n._intervalId=s(e),n._tick()}):e=function(){n._intervalId=setTimeout(e,i),n._tick()},this._paused=!1,e()}},stop:function(){this._useRAF?(window.cancelAnimationFrame||window[r.jsVendor+"CancelAnimationFrame"])(this._intervalId):clearTimeout(this._intervalId);this._intervalId=null,this._lastTime=0,this._paused=!0},pause:function(){this._paused=!0},resume:function(){this._paused=!1},_tick:function(){if(!this._paused){var t=+new Date,e=t-this._lastTime,n=this._tickers;++this._tickCount>=this._targetFPS?(this._measuredFPS=1e3/(this._tickTime/this._tickCount)+.5>>0,this._tickCount=0,this._tickTime=0):this._tickTime+=t-this._lastTime,this._lastTime=t;for(var i=n.slice(0),r=0,s=i.length;r<s;r++)i[r].tick(e)}},getMeasuredFPS:function(){return Math.min(this._measuredFPS,this._targetFPS)},addTick:function(t){if(!t||"function"!=typeof t.tick)throw new Error("Ticker: The tick object must implement the tick method.");this._tickers.push(t)},removeTick:function(t){var e=this._tickers,n=e.indexOf(t);n>=0&&e.splice(n,1)},nextTick:function(t){var e=this,n={tick:function(i){e.removeTick(n),t()}};return e.addTick(n),n},timeout:function(t,e){var n=this,i=(new Date).getTime()+e,r={tick:function(){(new Date).getTime()-i>=0&&(n.removeTick(r),t())}};return n.addTick(r),r},interval:function(t,e){var n=(new Date).getTime()+e,i={tick:function(){var i=(new Date).getTime(),r=i-n;r>=0&&(r<e&&(i-=r),n=i+e,t())}};return this.addTick(i),i}});t.exports=s},function(t,e,n){"use strict";n.r(e);var i=n(101),r=n.n(i),s=n(102),a=n.n(s),o=n(103),u=n.n(o),c=n(104),h=n.n(c);Object.assign||(Object.assign=r.a),Object.keys||(Object.keys=a.a),Object.values||(Object.values=u.a),"undefined"==typeof Promise&&(window.Promise=h.a),[Int8Array,Uint8Array,Int16Array,Uint16Array,Uint32Array,Float32Array].forEach((function(t){t.prototype.slice||Object.defineProperty(t.prototype,"slice",{value:function(e,n){return new t(Array.prototype.slice.call(this,e,n))}})}))},function(t,e,n){"use strict";(function(e,n){var i,r=function(){},s=void 0!==e&&void 0!==e.process&&"function"==typeof e.process.emit,a=void 0===n?setTimeout:n,o=[];function u(){for(var t=0;t<o.length;t++)o[t][0](o[t][1]);o=[],i=!1}function c(t,e){o.push([t,e]),i||(i=!0,a(u,0))}function h(t){var e=t.owner,n=e._state,i=e._data,r=t[n],s=t.then;if("function"==typeof r){n="fulfilled";try{i=r(i)}catch(t){m(s,t)}}f(s,i)||("fulfilled"===n&&l(s,i),"rejected"===n&&m(s,i))}function f(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"==typeof e||"object"==typeof e)){var i=e.then;if("function"==typeof i)return i.call(e,(function(i){n||(n=!0,e===i?d(t,i):l(t,i))}),(function(e){n||(n=!0,m(t,e))})),!0}}catch(e){return n||m(t,e),!0}return!1}function l(t,e){t!==e&&f(t,e)||d(t,e)}function d(t,e){"pending"===t._state&&(t._state="settled",t._data=e,c(p,t))}function m(t,e){"pending"===t._state&&(t._state="settled",t._data=e,c(g,t))}function _(t){t._then=t._then.forEach(h)}function p(t){t._state="fulfilled",_(t)}function g(t){t._state="rejected",_(t),!t._handled&&s&&e.process.emit("unhandledRejection",t._data,t)}function v(t){e.process.emit("rejectionHandled",t)}function E(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof E==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){m(e,t)}try{t((function(t){l(e,t)}),n)}catch(t){n(t)}}(t,this)}E.prototype={constructor:E,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(r),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,"rejected"===this._state&&s&&c(v,this)),"fulfilled"===this._state||"rejected"===this._state?c(h,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},E.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new E((function(e,n){var i=[],r=0;function s(t){return r++,function(n){i[t]=n,--r||e(i)}}for(var a,o=0;o<t.length;o++)(a=t[o])&&"function"==typeof a.then?a.then(s(o),n):i[o]=a;r||e(i)}))},E.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new E((function(e,n){for(var i,r=0;r<t.length;r++)(i=t[r])&&"function"==typeof i.then?i.then(e,n):e(i)}))},E.resolve=function(t){return t&&"object"==typeof t&&t.constructor===E?t:new E((function(e){e(t)}))},E.reject=function(t){return new E((function(e,n){n(t)}))},t.exports=E}).call(this,n(39),n(110).setImmediate)},function(t,e,n){(function(t){var i=void 0!==t&&t||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function s(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new s(r.call(setTimeout,i,arguments),clearTimeout)},e.setInterval=function(){return new s(r.call(setInterval,i,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(i,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n(111),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(39))},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var i,r,s,a,o,u=1,c={},h=!1,f=t.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(t);l=l&&l.setTimeout?l:t,"[object process]"==={}.toString.call(t.process)?i=function(t){e.nextTick((function(){m(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((s=new MessageChannel).port1.onmessage=function(t){m(t.data)},i=function(t){s.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(r=f.documentElement,i=function(t){var e=f.createElement("script");e.onreadystatechange=function(){m(t),e.onreadystatechange=null,r.removeChild(e),e=null},r.appendChild(e)}):i=function(t){setTimeout(m,0,t)}:(a="setImmediate$"+Math.random()+"$",o=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(a)&&m(+e.data.slice(a.length))},t.addEventListener?t.addEventListener("message",o,!1):t.attachEvent("onmessage",o),i=function(e){t.postMessage(a+e,"*")}),l.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return c[u]=r,i(u),u++},l.clearImmediate=d}function d(t){delete c[t]}function m(t){if(h)setTimeout(m,0,t);else{var e=c[t];if(e){h=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{d(t),h=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(39),n(112))},function(t,e){var n,i,r=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(t){i=a}}();var u,c=[],h=!1,f=-1;function l(){h&&u&&(h=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!h){var t=o(l);h=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,h=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function _(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new m(t,e)),1!==c.length||h||o(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=_,r.addListener=_,r.once=_,r.off=_,r.removeListener=_,r.removeAllListeners=_,r.emit=_,r.prependListener=_,r.prependOnceListener=_,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(t,e,n){t.exports="#define GLSLIFY 1\n// modified from https://github.com/mrdoob/three.js/blob/dev/src/renderers/shaders/ShaderChunk/lights_physical_pars_fragment.glsl#L26\n\n"+n(63)+"\n\nvec2 LTC_Uv(const in vec3 N, const in vec3 V, const in float roughness) {\n    const float LUT_SIZE = 64.0;\n    const float LUT_SCALE = (LUT_SIZE - 1.0) / LUT_SIZE;\n    const float LUT_BIAS = 0.5 / LUT_SIZE;\n    float dotNV = clamp(dot(N, V), 0.0, 1.0);\n    vec2 uv = vec2(roughness, sqrt(1.0 - dotNV));\n    uv = (uv * LUT_SCALE) + LUT_BIAS;\n    return uv;\n}\n\nfloat LTC_ClippedSphereFormFactor(const in vec3 f) {\n    float l = length(f);\n    return max(((l * l) + f.z) / (l + 1.0), 0.0);\n}\n\nvec3 LTC_EdgeVectorFormFactor(const in vec3 v1, const in vec3 v2) {\n    float x = dot(v1, v2);\n    float y = abs(x);\n    float a = 0.8543985 + ((0.4965155 + (0.0145206 * y)) * y);\n    float b = 3.4175940 + ((4.1616724 + y) * y);\n    float v = a / b;\n    float theta_sintheta = x > 0.0 ? v : (0.5 * inversesqrt(max(1.0 - (x * x), 1e-7))) - v;\n    return cross(v1, v2) * theta_sintheta;\n}\n\nvec3 LTC_Evaluate(const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[4]) {\n    vec3 v1 = rectCoords[1] - rectCoords[0];\n    vec3 v2 = rectCoords[3] - rectCoords[0];\n    vec3 lightNormal = cross(v1, v2);\n    if (dot(lightNormal, P - rectCoords[0]) < 0.0)\n        return vec3(0.0);\n    vec3 T1, T2;\n    T1 = normalize(V - (N * dot(V, N)));\n    T2 = -cross(N, T1);\n    mat3 mat = mInv * transpose(mat3(T1, T2, N));\n    vec3 coords[4];\n    coords[0] = mat * (rectCoords[0] - P);\n    coords[1] = mat * (rectCoords[1] - P);\n    coords[2] = mat * (rectCoords[2] - P);\n    coords[3] = mat * (rectCoords[3] - P);\n    coords[0] = normalize(coords[0]);\n    coords[1] = normalize(coords[1]);\n    coords[2] = normalize(coords[2]);\n    coords[3] = normalize(coords[3]);\n    vec3 vectorFormFactor = vec3(0.0);\n    vectorFormFactor += LTC_EdgeVectorFormFactor(coords[0], coords[1]);\n    vectorFormFactor += LTC_EdgeVectorFormFactor(coords[1], coords[2]);\n    vectorFormFactor += LTC_EdgeVectorFormFactor(coords[2], coords[3]);\n    vectorFormFactor += LTC_EdgeVectorFormFactor(coords[3], coords[0]);\n    float result = LTC_ClippedSphereFormFactor(vectorFormFactor);\n    return vec3(result);\n}\n\nvec3 getAreaLight(const in vec3 diffuseColor, const in vec3 specularColor, const in float roughness, const in vec3 normal, const in vec3 viewDir, const in vec3 position, const in vec3 lightPos, const in vec3 lightColor, const in vec3 halfWidth, const in vec3 halfHeight, const in sampler2D areaLightsLtcTexture1, const in sampler2D areaLightsLtcTexture2){\n    vec3 rectCoords[4];\n    rectCoords[0] = (lightPos - halfWidth) - halfHeight;\n    rectCoords[1] = (lightPos + halfWidth) - halfHeight;\n    rectCoords[2] = (lightPos + halfWidth) + halfHeight;\n    rectCoords[3] = (lightPos - halfWidth) + halfHeight;\n    \n    vec2 uv = LTC_Uv(normal, viewDir, roughness);\n    vec4 t1 = texture2D(areaLightsLtcTexture1, uv);\n    vec4 t2 = texture2D(areaLightsLtcTexture2, uv);\n\n    mat3 mInv = mat3(vec3(t1.x, 0, t1.y), vec3(0, 1, 0), vec3(t1.z, 0, t1.w));\n    vec3 fresnel = (specularColor * t2.x) + ((vec3(1.0) - specularColor) * t2.y);\n    \n    vec3 color = vec3(0.0, 0.0, 0.0);\n    color += ((lightColor * fresnel) * LTC_Evaluate(normal, viewDir, position, mInv, rectCoords));\n    color += ((lightColor * diffuseColor) * LTC_Evaluate(normal, viewDir, position, mat3(1.0), rectCoords));\n    return color;\n}\n\n"},function(t,e,n){"use strict";n.r(e),n.d(e,"util",(function(){return r})),n.d(e,"GLTFExtensions",(function(){return i})),n.d(e,"Class",(function(){return s.a})),n.d(e,"EventMixin",(function(){return a.a})),n.d(e,"Fog",(function(){return ti})),n.d(e,"Mesh",(function(){return si})),n.d(e,"Node",(function(){return g})),n.d(e,"SkinedMesh",(function(){return ci})),n.d(e,"Skeleton",(function(){return fi})),n.d(e,"Stage",(function(){return Di})),n.d(e,"Tween",(function(){return Vi})),n.d(e,"version",(function(){return li})),n.d(e,"BoxGeometry",(function(){return ji})),n.d(e,"Geometry",(function(){return Z})),n.d(e,"GeometryData",(function(){return w})),n.d(e,"MorphGeometry",(function(){return Bn})),n.d(e,"PlaneGeometry",(function(){return Yi})),n.d(e,"SphereGeometry",(function(){return Ki})),n.d(e,"Camera",(function(){return O})),n.d(e,"PerspectiveCamera",(function(){return Q})),n.d(e,"OrthographicCamera",(function(){return en})),n.d(e,"Buffer",(function(){return xt})),n.d(e,"capabilities",(function(){return et})),n.d(e,"extensions",(function(){return tt})),n.d(e,"Framebuffer",(function(){return re})),n.d(e,"glType",(function(){return Tt})),n.d(e,"logGLResource",(function(){return Ji})),n.d(e,"Program",(function(){return It})),n.d(e,"RenderInfo",(function(){return di})),n.d(e,"RenderList",(function(){return gi})),n.d(e,"VertexArrayObject",(function(){return Ft})),n.d(e,"WebGLRenderer",(function(){return wi})),n.d(e,"WebGLResourceManager",(function(){return Ei})),n.d(e,"WebGLState",(function(){return vi})),n.d(e,"BasicLoader",(function(){return nr})),n.d(e,"CubeTextureLoader",(function(){return ar})),n.d(e,"GLTFLoader",(function(){return Xr})),n.d(e,"GLTFParser",(function(){return Br})),n.d(e,"AliAMCExtension",(function(){return kn})),n.d(e,"HDRLoader",(function(){return Kr})),n.d(e,"KTXLoader",(function(){return $r})),n.d(e,"LoadCache",(function(){return tr})),n.d(e,"LoadQueue",(function(){return ts})),n.d(e,"ShaderMaterialLoader",(function(){return ns})),n.d(e,"TextureLoader",(function(){return rs})),n.d(e,"Loader",(function(){return rr})),n.d(e,"Texture",(function(){return qt})),n.d(e,"LazyTexture",(function(){return fr})),n.d(e,"CubeTexture",(function(){return fe})),n.d(e,"DataTexture",(function(){return ve})),n.d(e,"Shader",(function(){return dt})),n.d(e,"BasicMaterial",(function(){return qe})),n.d(e,"GeometryMaterial",(function(){return $e})),n.d(e,"Material",(function(){return ke})),n.d(e,"PBRMaterial",(function(){return ur})),n.d(e,"semantic",(function(){return Ce})),n.d(e,"ShaderMaterial",(function(){return Dn})),n.d(e,"AxisHelper",(function(){return us})),n.d(e,"AxisNetHelper",(function(){return fs})),n.d(e,"CameraHelper",(function(){return _s})),n.d(e,"AmbientLight",(function(){return gs})),n.d(e,"AreaLight",(function(){return Es})),n.d(e,"DirectionalLight",(function(){return Nn})),n.d(e,"CubeLightShadow",(function(){return Ln})),n.d(e,"Light",(function(){return M})),n.d(e,"LightManager",(function(){return Ii})),n.d(e,"LightShadow",(function(){return cn})),n.d(e,"PointLight",(function(){return Sn})),n.d(e,"SpotLight",(function(){return Pn})),n.d(e,"Animation",(function(){return Rr})),n.d(e,"AnimationStates",(function(){return Or})),n.d(e,"MeshPicker",(function(){return Is})),n.d(e,"Ticker",(function(){return Os})),n.d(e,"log",(function(){return m.a})),n.d(e,"Cache",(function(){return J})),n.d(e,"browser",(function(){return Pi})),n.d(e,"WebGLSupport",(function(){return Ss})),n.d(e,"constants",(function(){return C.a})),n.d(e,"Color",(function(){return Rs.Color})),n.d(e,"Euler",(function(){return Rs.Euler})),n.d(e,"EulerNotifier",(function(){return Rs.EulerNotifier})),n.d(e,"Frustum",(function(){return Rs.Frustum})),n.d(e,"math",(function(){return Rs.math})),n.d(e,"Matrix3",(function(){return Rs.Matrix3})),n.d(e,"Matrix4",(function(){return Rs.Matrix4})),n.d(e,"Matrix4Notifier",(function(){return Rs.Matrix4Notifier})),n.d(e,"Plane",(function(){return Rs.Plane})),n.d(e,"Quaternion",(function(){return Rs.Quaternion})),n.d(e,"Ray",(function(){return Rs.Ray})),n.d(e,"Sphere",(function(){return Rs.Sphere})),n.d(e,"SphericalHarmonics3",(function(){return Rs.SphericalHarmonics3})),n.d(e,"Vector2",(function(){return Rs.Vector2})),n.d(e,"Vector3",(function(){return Rs.Vector3})),n.d(e,"Vector3Notifier",(function(){return Rs.Vector3Notifier})),n.d(e,"Vector4",(function(){return Rs.Vector4}));var i={};n.r(i),n.d(i,"ALI_amc_mesh_compression",(function(){return kn})),n.d(i,"WEB3D_quantized_attributes",(function(){return qn})),n.d(i,"HILO_animation_clips",(function(){return Wn})),n.d(i,"ALI_animation_clips",(function(){return Yn})),n.d(i,"ALI_bounding_box",(function(){return Zn})),n.d(i,"KHR_materials_pbrSpecularGlossiness",(function(){return Kn})),n.d(i,"KHR_lights_punctual",(function(){return Qn})),n.d(i,"KHR_techniques_webgl",(function(){return Jn}));var r=n(4),s=n(1),a=n(9),o=n(7),u=n(22),c=n(5),h=n(17),f=n(23),l=n(10),d=n(6),m=n(3),_=new c.a(0,1,0),p=new o.a,g=s.a.create({Statics:{TRAVERSE_STOP_NONE:!1,TRAVERSE_STOP_CHILDREN:1,TRAVERSE_STOP_ALL:!0},Mixes:a.a,isNode:!0,className:"Node",name:"",anim:null,animationId:"",jointName:"",autoUpdateWorldMatrix:!0,autoUpdateChildWorldMatrix:!0,parent:null,_quatDirty:!1,_matrixDirty:!1,needCallChildUpdate:!0,visible:!0,pointerEnabled:!0,pointerChildren:!0,useHandCursor:!1,userData:null,__forceUseParentWorldMatrix:!1,constructor:function(t){var e=this;this.id=d.a.generateUUID(this.className),this.up=_.clone(),this.children=[],this.worldMatrix=new o.a,this._matrix=new u.a,this._position=new h.a(0,0,0),this._scale=new h.a(1,1,1),this._pivot=new h.a(0,0,0),this._rotation=new f.a,this._quaternion=new l.a,this._matrix.on("update",(function(){e._onMatrixUpdate()})),this._position.on("update",(function(){e._onPositionUpdate()})),this._scale.on("update",(function(){e._onScaleUpdate()})),this._pivot.on("update",(function(){e._onPivotUpdate()})),this._rotation.on("update",(function(){e._onRotationUpdate()})),this._quaternion.on("update",(function(){e._onQuaternionUpdate()})),Object.assign(this,t)},clone:function(t){var e=new this.constructor;return e.name=this.name,e.jointName=this.jointName,e.animationId=this.animationId,e.setPosition(this.x,this.y,this.z),e.setScale(this.scaleX,this.scaleY,this.scaleZ),e.setRotation(this.rotationX,this.rotationY,this.rotationZ),this.children.forEach((function(t){e.addChild(t.clone(!0))})),t||(this.anim&&(e.anim=this.anim.clone(e)),e.resetSkinedMeshRootNode()),e},setAnim:function(t){return this.anim=t,t.rootNode=this,this},resetSkinedMeshRootNode:function(){var t=this;this.traverse((function(e){e.isSkinedMesh&&e.skeleton&&(e.skeleton.rootNode=t)}),!0)},getChildrenNameMap:function(){var t={};return this.traverse((function(e){t[e.name]=e;var n=e._originName;void 0===n||t[n]||(t[n]=e)}),!0),t},addChild:function(t){return t.parent&&t.removeFromParent(),t.parent=this,this.children.push(t),this},removeChild:function(t){var e=this.children.indexOf(t);return e>-1&&(this.children.splice(e,1),t.parent=null),this},addTo:function(t){return t.addChild(this),this},removeFromParent:function(){return this.parent&&this.parent.removeChild(this),this},updateMatrix:function(){return this._matrixDirty&&(this._matrixDirty=!1,this.matrixVersion++,this._matrix.fromRotationTranslationScaleOrigin(this.quaternion,this._position,this._scale,this._pivot,!0)),this},updateQuaternion:function(){return this._quatDirty&&(this._quatDirty=!1,this._quaternion.fromEuler(this._rotation,!0)),this},updateTransform:function(){return this._matrix.decompose(this._quaternion,this._position,this._scale,this._pivot),this._onQuaternionUpdate(),this._matrixDirty=!1,this},updateMatrixWorld:function(t){return this.traverse((function(e){return(e.autoUpdateWorldMatrix||t)&&(e.parent?e.__forceUseParentWorldMatrix?e.worldMatrix.copy(e.parent.worldMatrix):e.worldMatrix.multiply(e.parent.worldMatrix,e.matrix):e.worldMatrix.copy(e.matrix)),!e.autoUpdateChildWorldMatrix&&!t&&1})),this},getConcatenatedMatrix:function(t){for(var e=new o.a,n=this;n&&n!==t;n=n.parent)e.multiply(n.matrix,e);return e},_traverse:function(t,e){if(!e){var n=t(this);if(n)return n}for(var i=this.children,r=0,s=i.length;r<s;r++){var a=i[r]._traverse(t,!1);if(!0===a)return a}return!1},traverse:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._traverse(t,e),this},traverseBFS:function(t){var e,n,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(n=i?this.children:[this];n.length;){e=n,n=[];for(var r=0,s=e.length;r<s;r++){var a=e[r],o=t(a);if(o){if(!0===o)return this}else n=n.concat(a.children)}}return this},getChildByFnBFS:function(t){var e=null;return this.traverseBFS((function(n){return!!t(n)&&(e=n,!0)}),!0),e},getChildByNamePath:function(t){for(var e=this,n=function(n,i){var r=t[n],s=e.getChildByFnBFS((function(t){return t.name===r}));if(!s)return{v:null};e=s},i=0,r=t.length;i<r;i++){var s=n(i);if("object"==typeof s)return s.v}return e},traverseUpdate:function(t){return this.traverse((function(e){return e.onUpdate&&e.onUpdate(t),!e.needCallChildUpdate&&1})),this},getChildByFn:function(t){var e=null;return this.traverse((function(n){return!!t(n)&&(e=n,!0)}),!0),e},getChildrenByFn:function(t){var e=[];return this.traverse((function(n){t(n)&&e.push(n)}),!0),e},getChildByName:function(t){return this.getChildByFn((function(e){return e.name===t}))},getChildrenByName:function(t){return this.getChildrenByFn((function(e){return e.name===t}))},getChildById:function(t){return this.getChildByFn((function(e){return e.id===t}))},getChildrenByClassName:function(t){return this.getChildrenByFn((function(e){return e.className===t}))},getChildrenByBaseClassName:function(t){return this.getChildrenByFn((function(e){return e["is"+t]}))},setScale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return this._scale.set(t,e,n),this},setPosition:function(t,e,n){return this._position.set(t,e,n),this},setRotation:function(t,e,n){return this._rotation.setDegree(t,e,n),this},setPivot:function(t,e,n){return this._pivot.set(t,e,n),this},lookAt:function(t){return this.isCamera?p.targetTo(this,t,this.up):p.targetTo(t,this,this.up),this._quaternion.fromMat4(p),this},raycast:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!this.visible)return null;var r=[];return this.traverse((function(n){if(i&&!n.pointerEnabled)return 1;if(n.isMesh){var s=n.raycast(t,!1);s&&(r=r.concat(s.map((function(t){return{mesh:n,point:t}}))))}return!(!i||e.pointerChildren)&&1})),r.length?(n&&t.sortPoints(r,"point"),r):null},matrix:{get:function(){return this.updateMatrix(),this._matrix},set:function(t){m.a.warnOnce("Node.matrix.set","node.matrix is readOnly.Use node.matrix.copy instead."),this._matrix.copy(t)}},position:{get:function(){return this._position},set:function(t){m.a.warnOnce("Node.position.set","node.position is readOnly.Use node.position.copy instead."),this._position.copy(t)}},x:{get:function(){return this._position.elements[0]},set:function(t){this._position.elements[0]=t,this._matrixDirty=!0}},y:{get:function(){return this._position.elements[1]},set:function(t){this._position.elements[1]=t,this._matrixDirty=!0}},z:{get:function(){return this._position.elements[2]},set:function(t){this._position.elements[2]=t,this._matrixDirty=!0}},scale:{get:function(){return this._scale},set:function(t){m.a.warnOnce("Node.scale.set","node.scale is readOnly.Use node.scale.copy instead."),this._scale.copy(t)}},scaleX:{get:function(){return this._scale.elements[0]},set:function(t){this._scale.elements[0]=t,this._matrixDirty=!0}},scaleY:{get:function(){return this._scale.elements[1]},set:function(t){this._scale.elements[1]=t,this._matrixDirty=!0}},scaleZ:{get:function(){return this._scale.elements[2]},set:function(t){this._scale.elements[2]=t,this._matrixDirty=!0}},pivot:{get:function(){return this._pivot},set:function(t){m.a.warnOnce("Node.pivot.set","node.pivot is readOnly.Use node.pivot.copy instead."),this._pivot.copy(t)}},pivotX:{get:function(){return this._pivot.elements[0]},set:function(t){this._pivot.elements[0]=t,this._matrixDirty=!0}},pivotY:{get:function(){return this._pivot.elements[1]},set:function(t){this._pivot.elements[1]=t,this._matrixDirty=!0}},pivotZ:{get:function(){return this._pivot.elements[2]},set:function(t){this._pivot.elements[2]=t,this._matrixDirty=!0}},rotation:{get:function(){return this._rotation},set:function(t){m.a.warnOnce("Node.rotation.set","node.rotation is readOnly.Use node.rotation.copy instead."),this._rotation.copy(t)}},rotationX:{get:function(){return this._rotation.degX},set:function(t){this._rotation.degX=t}},rotationY:{get:function(){return this._rotation.degY},set:function(t){this._rotation.degY=t}},rotationZ:{get:function(){return this._rotation.degZ},set:function(t){this._rotation.degZ=t}},quaternion:{get:function(){return this.updateQuaternion(),this._quaternion},set:function(t){m.a.warnOnce("Node.quaternion.set","node.quaternion is readOnly.Use node.quaternion.copy instead."),this._quaternion.copy(t)}},matrixVersion:0,getBounds:function(t,e,n){return e?e.multiply(this.matrix):e=this.getConcatenatedMatrix(t),this.children.forEach((function(t){n=t.getBounds(null,e.clone(),n)})),this.isMesh&&(n=this.geometry.getBounds(e,n)),n},_fireMouseEvent:function(t){if(t.eventCurrentTarget=this,this.fire(t),"mousemove"===t.type){if(!this.__mouseOver){this.__mouseOver=!0;var e=Object.assign({},t);e.type="mouseover",this.fire(e)}}else"mouseout"===t.type&&(this.__mouseOver=!1);var n=this.parent;t._stopped||t._stopPropagationed||!n||n._fireMouseEvent(t)},destroy:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.getChildrenByBaseClassName("Node");return this.off(),n.forEach((function(n){n.isMesh?n.destroy(t,e):(n.off(),n.removeFromParent())})),this.removeFromParent(),this},_onMatrixUpdate:function(){this.matrixVersion++,this.updateTransform()},_onPositionUpdate:function(){this._matrixDirty=!0},_onScaleUpdate:function(){this._matrixDirty=!0},_onPivotUpdate:function(){this._matrixDirty=!0},_onRotationUpdate:function(){this._quatDirty=!0,this._matrixDirty=!0},_onQuaternionUpdate:function(){this._rotation.fromQuat(this._quaternion),this._quatDirty=!1}}),v=n(8),E=new v.a,T=s.a.create({Extends:g,isLight:!0,className:"Light",amount:1,enabled:!0,constantAttenuation:1,linearAttenuation:0,quadraticAttenuation:0,_range:0,range:{get:function(){return this._range},set:function(t){this.constantAttenuation=1,t<=0?(this.linearAttenuation=0,this.quadraticAttenuation=0):(this.linearAttenuation=4.5/t,this.quadraticAttenuation=75/(t*t)),this._range=t}},shadow:null,constructor:function(t){this.color=new v.a(1,1,1),T.superclass.constructor.call(this,t)},toInfoArray:function(t,e){return t[e+0]=this.constantAttenuation,t[e+1]=this.linearAttenuation,t[e+2]=this.quadraticAttenuation,this},getRealColor:function(){return E.copy(this.color).scale(this.amount)},createShadowMap:function(t,e){}}),M=T,A=n(24),I=new o.a,L=s.a.create({Extends:g,isCamera:!0,className:"Camera",_needUpdateProjectionMatrix:!0,_isGeometryDirty:!1,constructor:function(t){this.viewMatrix=new o.a,this.projectionMatrix=new o.a,this.viewProjectionMatrix=new o.a,this._frustum=new A.a,L.superclass.constructor.call(this,t)},updateViewMatrix:function(){return this.updateMatrixWorld(!0),this.viewMatrix.invert(this.worldMatrix),this},updateProjectionMatrix:function(){},getGeometry:function(t){},updateViewProjectionMatrix:function(){return this._needUpdateProjectionMatrix&&(this.updateProjectionMatrix(),this._needUpdateProjectionMatrix=!1),this.updateViewMatrix(),this.viewProjectionMatrix.multiply(this.projectionMatrix,this.viewMatrix),this.updateFrustum(this.viewProjectionMatrix),this},getModelViewMatrix:function(t,e){return(e=e||new o.a).multiply(this.viewMatrix,t.worldMatrix),e},getModelProjectionMatrix:function(t,e){return(e=e||new o.a).multiply(this.viewProjectionMatrix,t.worldMatrix),e},projectVector:function(t,e,n){var i=t.clone();return i.transformMat4(this.viewProjectionMatrix),e&&n&&(i.x=(i.x+1)/2*e,i.y=n-(i.y+1)/2*n),i},unprojectVector:function(t,e,n){var i=t.clone();return e&&n&&(i.x=i.x/e*2-1,i.y=1-i.y/n*2),I.invert(this.viewProjectionMatrix),i.transformMat4(I),i},isPointVisible:function(t){return!!this._frustum.intersectsSphere({center:t,radius:0})},isMeshVisible:function(t){var e=t.geometry;if(e){var n=e.getSphereBounds(t.worldMatrix);if(this._frustum.intersectsSphere(n))return!0}return!1},updateFrustum:function(t){return this._frustum.fromMatrix(t),this}}),O=L,S=n(14),R=n(12),y=n(11),x=n(21),N={2:new S.a,3:new c.a,4:new R.a,16:new o.a},b=s.a.create({className:"GeometryData",isGeometryData:!0,size:void 0,normalized:!1,type:void 0,_isSubDirty:!1,_isAllDirty:!1,isDirty:{get:function(){return this._isSubDirty||this._isAllDirty},set:function(t){this._isAllDirty=t,!1===t&&this.clearSubData()}},bufferViewId:void 0,glBuffer:null,constructor:function(t,e,n){this.id=d.a.generateUUID(this.className),this.data=t,this.size=e,Object.assign(this,n),this.bufferViewId||(this.bufferViewId=this.id),this.size||m.a.warn("GeometryData.constructor: geometryData must set size!",this)},_stride:0,stride:{get:function(){return this._stride},set:function(t){this._stride=t,this.strideSize=0===t?0:t/this.data.BYTES_PER_ELEMENT}},strideSize:0,_offset:0,offset:{get:function(){return this._offset},set:function(t){this._offset=t,this.offsetSize=t/this.data.BYTES_PER_ELEMENT}},offsetSize:0,data:{set:function(t){t&&(this._data=t,this.type=Object(r.getTypedArrayGLType)(t),this.stride=this._stride,this.offset=this._offset,this._isAllDirty=!0)},get:function(){return this._data}},length:{get:function(){return this._data.length}},realLength:{get:function(){return 0===this.strideSize?this._data.length:this._data.length/this.strideSize*this.size}},getByteLength:function(){return this._data.BYTES_PER_ELEMENT*this.realLength},count:{get:function(){return 0===this.strideSize?this._data.length/this.size:this._data.length/this.strideSize}},setSubData:function(t,e){this._isSubDirty=!0,this.data.set(e,t),this.subDataList||(this.subDataList=[]);var n=e.BYTES_PER_ELEMENT*t;this.subDataList.push({byteOffset:n,data:e})},clearSubData:function(){this.subDataList&&(this.subDataList.length=0),this._isSubDirty=!1},clone:function(){var t=new b(null,1);return t.copy(this),t},copy:function(t){var e=t.data;this.data=new e.constructor(e),this.size=t.size,this.stride=t.stride,this.normalized=t.normalized,this.type=t.type,this.offset=t.offset},getOffset:function(t){var e=this.strideSize;return 0===e?t*this.size:t*e+this.offsetSize},get:function(t){var e=this.getOffset(t);return this.getByOffset(e)},getCopy:function(t){return this.get(t).clone()},set:function(t,e){var n=this.getOffset(t);return this.setByOffset(n,e),n},getByOffset:function(t){var e=this.size;return e>1?N[e].fromArray(this._data,t):this._data[t]},setByOffset:function(t,e){var n=this.size,i=this._data;n>1?e.toArray(i,t):i[t]=e,this._isAllDirty=!0},traverse:function(t){for(var e=this.count,n=0;n<e;n++){var i=this.getOffset(n);if(t(this.getByOffset(i),n,i))return!0}return!1},traverseByComponent:function(t){for(var e=this.count,n=this.size,i=this._data,r=0;r<e;r++)for(var s=this.getOffset(r),a=r*n,o=0;o<n;o++){var u=s+o;if(t(i[u],a+o,u))return!0}return!1},merge:function(t,e){if(t.type!==this.type||t.size!==this.size)return m.a.warn("geometryData type or size not same, cannot merge!",this,t),this;var n=Object(r.getTypedArrayClass)(this.type),i=this.realLength,s=t.realLength,a=new n(i+s);return this.traverseByComponent((function(t,e){a[e]=t})),t.traverseByComponent((function(t,n){e&&(t=e(t,n)),a[i+n]=t})),this.stride=0,this.offset=0,this.data=a,this}}),w=b,C=n(2),P=C.a.TRIANGLES,H=C.a.LINES,D=C.a.FRONT,F=C.a.BACK,U=C.a.FRONT_AND_BACK,G=new c.a,B=new c.a,V=new c.a,X=new R.a,j=new S.a,k=new S.a,z=new S.a,q=new y.a,W=new o.a,Y=new l.a,Z=s.a.create({isGeometry:!0,className:"Geometry",vertices:null,uvs:null,uvs1:null,colors:null,indices:null,skinIndices:null,skinWeights:null,mode:P,isStatic:!0,isDirty:!0,useAABBRaycast:!1,userData:null,constructor:function(t){this.id=d.a.generateUUID(this.className),Object.assign(this,t),this.currentVerticesCount=0,this.currentIndicesCount=0},_needUpdateNormals:!1,normals:{get:function(){return!this._needUpdateNormals&&this._normals||this.calculateNormals(),this._normals},set:function(t){this._normals=t,this._needUpdateNormals=!1}},calculateNormals:function(){var t=this.vertices;if(t){this._normals||(this._normals=new w(new Float32Array(t.realLength),3));var e,n=this._normals;if(this.indices)e=this.indices.data;else{var i=t.length/3;e=new Array(i);for(var r=0;r<i;r++)e[r]=r}for(var s=0,a=new Uint8Array(t.count),o=0;o<e.length;o+=3){s=e[o],G.copy(t.get(s)),s=e[o+1],B.copy(t.get(s)),s=e[o+2],V.copy(t.get(s)),B.sub(G),V.sub(G),B.cross(V);for(var u=0;u<3;u++){if(a[s=e[o+u]]){var c=n.get(s);c.scale(a[s]),c.add(B),c.scale(1/(a[s]+1)),n.set(s,c)}else n.set(s,B);a[s]++}}this.isDirty=!0,this._needUpdateNormals=!1}else m.a.warnOnce("geometry.calculateNormals","geometry.calculateNormals error:no vertices data.")},tangents:{get:function(){return this._tangents||this.calculateTangents(this.uvs,"_tangents"),this._tangents},set:function(t){this._tangents=t}},tangents1:{get:function(){return this._tangents1||this.calculateTangents(this.uvs1,"_tangents1"),this._tangents1},set:function(t){this._tangents1=t}},calculateTangents:function(t,e){var n=this.vertices;if(n){this[e]||(this[e]=new w(new Float32Array(4*n.count),4));var i,r=this[e];if(this.indices)i=this.indices.data;else{var s=n.length/3;i=new Array(s);for(var a=0;a<s;a++)i[a]=a}for(var o=0,u=0;u<i.length;u+=3){o=i[u],G.copy(n.get(o)),j.copy(t.get(o)),o=i[u+1],B.copy(n.get(o)),k.copy(t.get(o)),o=i[u+2],V.copy(n.get(o)),z.copy(t.get(o)),B.sub(G),V.sub(G),k.sub(j),z.sub(j);var c=1/(k.x*z.y-z.x*k.y);Number.isFinite(c)?(G.x=c*(z.y*B.x-k.y*V.x),G.y=c*(z.y*B.y-k.y*V.y),G.z=c*(z.y*B.z-k.y*V.z)):(G.x=0,G.y=0,G.z=1),X.set(G.x,G.y,G.z,1),r.set(i[u],X),r.set(i[u+1],X),r.set(i[u+2],X)}this.isDirty=!0}else m.a.warnOnce("geometry.calculateTangents","geometry.calculateTangents error:no vertices data.")},convertToLinesMode:function(){if(this.mode===P)if(this.indices){for(var t=new Uint16Array(2*this.indices.length),e=this.indices.data,n=0;n<e.length;n+=3)t[2*n]=e[n],t[2*n+1]=e[n+1],t[2*n+2]=e[n+1],t[2*n+3]=e[n+2],t[2*n+4]=e[n+2],t[2*n+5]=e[n];this.indices.data=t,this.mode=H}else m.a.warn("Has no indices!");else m.a.warn("Only support convert triangles to lines mode!")},translate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this.transformMat4(W.fromTranslation(G.set(t,e,n))),this},scale:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return this.transformMat4(W.fromScaling(G.set(t,e,n))),this},rotate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this.transformMat4(W.fromQuat(Y.fromEuler({x:t*d.a.DEG2RAD,y:e*d.a.DEG2RAD,z:n*d.a.DEG2RAD}))),this},transformMat4:function(t){var e=this.vertices;if(e&&e.traverse((function(n,i,r){e.setByOffset(r,n.transformMat4(t))})),q.normalFromMat4(t),this._normals){var n=this.normals;n.traverse((function(t,e,i){n.setByOffset(i,t.transformMat3(q).normalize())}))}if(this._tangents){var i=this.tangents;i.traverse((function(t,e,n){i.setByOffset(n,t.transformMat3(q).normalize())}))}return this.isDirty=!0,this},merge:function(t,e){var n=t.vertices;if(n&&this.vertices){var i=this.vertices.count;e&&(n=t.vertices.clone()).traverse((function(t,i,r){n.setByOffset(r,t.transformMat4(e))})),this.vertices.merge(n),this.indices&&t.indices?this.indices.merge(t.indices,(function(t){return t+i})):this.indices=null}return this.uvs&&t.uvs?this.uvs.merge(t.uvs):this.uvs=null,this.uvs1&&t.uvs1?this.uvs1.merge(t.uvs1):this.uvs1=null,this.colors&&t.colors?this.colors.merge(t.colors):this.colors=null,this._normals&&(this._normals=null),this._tangents&&(this._tangents=null),this._tangents1&&(this._tangents1=null),this.isDirty=!0,this},ensureData:function(t,e,n,i){var r=this[t];if(!r||n>r.length){var s=new i(n);r?(s.set(r.data),r.data=s):this[t]=new w(s,e)}},addPoints:function(){var t=this,e=[].slice.call(arguments),n=3*(this.currentVerticesCount+e.length);this.ensureData("vertices",3,n,Float32Array);var i=this.vertices.data;return e.forEach((function(e){var n=3*t.currentVerticesCount++;i[n]=e[0],i[n+1]=e[1],i[n+2]=e[2]})),this.currentVerticesCount-e.length},addIndices:function(){var t=this,e=[].slice.call(arguments),n=this.currentIndicesCount+e.length;this.ensureData("indices",1,n,Uint16Array);var i=this.indices.data;e.forEach((function(e){i[t.currentIndicesCount++]=e})),this._needUpdateNormals=!0},addLine:function(t,e){var n=this.addPoints(t,e);this.addIndices(n,n+1)},addFace:function(t,e,n){var i=this.addPoints(t,e,n);this.addIndices(i,i+1,i+2)},addRect:function(t,e,n,i){var r=this.addPoints(t,e,n,i);this.addIndices(r,r+1,r+2,r,r+2,r+3)},setVertexUV:function(t,e){this.ensureData("uvs",2,this.vertices.length/3*2,Float32Array);for(var n=this.uvs.data,i=0;i<e.length;i++)n[t+2*i]=e[i][0],n[t+2*i+1]=e[i][1]},setFaceUV:function(t,e,n,i){this.setVertexUV(t,[e,n,i])},setRectUV:function(t,e,n,i,r){this.setVertexUV(t,[e,n,i,r])},getBounds:function(t,e){e||(e={xMin:1/0,xMax:-1/0,yMin:1/0,yMax:-1/0,zMin:1/0,zMax:-1/0});var n=this.vertices;return n?(n.traverse((function(n){t&&n.transformMat4(t),e.xMax=Math.max(e.xMax,n.x),e.yMax=Math.max(e.yMax,n.y),e.zMax=Math.max(e.zMax,n.z),e.xMin=Math.min(e.xMin,n.x),e.yMin=Math.min(e.yMin,n.y),e.zMin=Math.min(e.zMin,n.z)})),e.width=e.xMax-e.xMin,e.height=e.yMax-e.yMin,e.depth=e.zMax-e.zMin,e.x=(e.xMin+e.xMax)/2,e.y=(e.yMin+e.yMax)/2,e.z=(e.zMin+e.zMax)/2,e):(m.a.warnOnce("geometry.getBounds","geometry has no vertices data, geometry.getBounds will return Infinity bounds."),e)},getLocalBounds:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._localBounds&&!t||(this._localBounds=this.getBounds()),this._localBounds},getSphereBounds:function(t){this._sphereBounds||(this._sphereBounds=new x.a);var e=this._sphereBounds;return e.copy(this.getLocalSphereBounds()),t&&e.transformMat4(t),e},getLocalSphereBounds:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this._localSphereBounds||t){var e=this.getLocalBounds(t),n=new x.a({center:new c.a(e.x,e.y,e.z)}),i=this.vertices;i?n.fromGeometryData(i):(m.a.warnOnce("geometry.getLocalSphereBounds","geometry has no vertices data, geometry.getLocalSphereBounds will return Infinity bounds."),n.radius=1/0),this._localSphereBounds=n}return this._localSphereBounds},convertToNoIndices:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;if(this.mode===P)if(this.indices){for(var e=this.indices.data,n=e.length,i=new Float32Array(n*t),s=this.uvs?new Float32Array(2*n):null,a=new Float32Array(3*n),o=this.colors?new Float32Array(this.colors.size*n):null,u=this.skinIndices?new Float32Array(4*n):null,c=this.skinWeights?new Float32Array(4*n):null,h=0;h<n;h++){var f=e[h];Object(r.copyArrayData)(i,this.vertices,h*t,3*f,3),4===t&&(i[4*h+3]=1),Object(r.copyArrayData)(s,this.uvs,2*h,2*f,2),Object(r.copyArrayData)(a,this.normals,3*h,3*f,3),Object(r.copyArrayData)(u,this.skinIndices,4*h,4*f,4),Object(r.copyArrayData)(c,this.skinWeights,4*h,4*f,4),this.colors&&Object(r.copyArrayData)(o,this.colors,h*this.colors.size,f*this.colors.size,this.colors.size)}delete this.indices,this.vertices.data=i,this.uvs&&(this.uvs.data=s),this.normals&&(this.normals.data=a),this.colors&&(this.colors.data=o),this.skinIndices&&(this.skinIndices.data=u),this.skinWeights&&(this.skinWeights.data=c)}else m.a.warn("Has no indices!");else m.a.warn("Only support convert triangles to lines mode!")},clone:function(){var t=new this.constructor({mode:this.mode});return this.vertices&&(t.vertices=this.vertices.clone()),this.uvs&&(t.uvs=this.uvs.clone()),this.uvs1&&(t.uvs1=this.uvs1.clone()),this.colors&&(t.colors=this.colors.clone()),this.indices&&(t.indices=this.indices.clone()),this.skinWeights&&(t.skinWeights=this.skinWeights.clone()),this.skinIndices&&(t.skinIndices=this.skinIndices.clone()),this._normals&&(t._normals=this._normals.clone()),this._tangents&&(t._tangents=this._tangents.clone()),this._tangents1&&(t._tangents1=this._tangents1.clone()),this.positionDecodeMat&&(t.positionDecodeMat=this.positionDecodeMat),this.uvDecodeMat&&(t.uvDecodeMat=this.uvDecodeMat),this.uv1DecodeMat&&(t.uv1DecodeMat=this.uv1DecodeMat),this.normalDecodeMat&&(t.normalDecodeMat=this.normalDecodeMat),t},_aabbRaycast:function(t){var e=this.getLocalBounds(),n=t.intersectsBox([[e.xMin,e.yMin,e.zMin],[e.xMax,e.yMax,e.zMax]]);return n?[n]:null},_raycast:function(t,e){var n=this.vertices;if(!n)return null;var i,r=this.indices,s=[],a=[];i=r?r.realLength:n.realLength/3;for(var o=0;o<i;o+=3){var u=r?r.get(o):o;G.copy(n.get(u)),u=r?r.get(o+1):o+1,B.copy(n.get(u)),u=r?r.get(o+2):o+2,V.copy(n.get(u));var c=void 0;e===D?(s[0]=G.elements,s[1]=B.elements,s[2]=V.elements,c=t.intersectsTriangle(s)):e===F?(s[1]=G.elements,s[0]=B.elements,s[2]=V.elements,c=t.intersectsTriangle(s)):e===U&&(s[0]=G.elements,s[1]=B.elements,s[2]=V.elements,(c=t.intersectsTriangle(s))||(s[1]=G.elements,s[0]=B.elements,s[2]=V.elements,c=t.intersectsTriangle(s))),c&&a.push(c)}return a.length?a:null},raycast:function(t,e){var n,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(n=this.useAABBRaycast?this._aabbRaycast(t):this._raycast(t,e))&&i&&t.sortPoints(n),n},getRenderOption:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.positionDecodeMat&&(t.QUANTIZED=1,t.POSITION_QUANTIZED=1),this.normalDecodeMat&&(t.QUANTIZED=1,t.NORMAL_QUANTIZED=1),this.uvDecodeMat&&(t.QUANTIZED=1,t.UV_QUANTIZED=1),this.uv1DecodeMat&&(t.QUANTIZED=1,t.UV1_QUANTIZED=1),this.colors&&(t.HAS_COLOR=1,t.COLOR_SIZE=this.colors.size),t},getShaderKey:function(){return void 0===this._shaderKey&&(this._shaderKey="geometry",this.isMorphGeometry?this._shaderKey+="_id_".concat(this.id):(this.colors&&(this._shaderKey+="_colors"),this.positionDecodeMat&&(this._shaderKey+="positionDecodeMat"))),this._shaderKey},getSize:function(){var t=0;for(var e in this)Object(r.hasOwnProperty)(this,e)&&this[e]&&this[e].isGeometryData&&(t+=this[e].getByteLength());return t},destroy:function(){m.a.warn("Geometry.destroy has been deprecated, use mesh.destroy(renderer) instead.")}}),K=s.a.create({Extends:O,isPerspectiveCamera:!0,className:"PerspectiveCamera",_near:.1,near:{get:function(){return this._near},set:function(t){this._needUpdateProjectionMatrix=!0,this._isGeometryDirty=!0,this._near=t}},_far:null,far:{get:function(){return this._far},set:function(t){this._needUpdateProjectionMatrix=!0,this._isGeometryDirty=!0,this._far=t}},_fov:50,fov:{get:function(){return this._fov},set:function(t){this._needUpdateProjectionMatrix=!0,this._isGeometryDirty=!0,this._fov=t}},_aspect:1,aspect:{get:function(){return this._aspect},set:function(t){this._needUpdateProjectionMatrix=!0,this._isGeometryDirty=!0,this._aspect=t}},constructor:function(t){K.superclass.constructor.call(this,t),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var t=this.projectionMatrix.elements,e=this.near,n=this.far,i=this.aspect,r=this.fov,s=1/Math.tan(.5*d.a.degToRad(r));if(t[0]=s/i,t[5]=s,t[11]=-1,t[15]=0,n){var a=1/(e-n);t[10]=(e+n)*a,t[14]=2*n*e*a}else t[10]=-1,t[14]=-2*e},getGeometry:function(t){if(t||!this._geometry||this._isGeometryDirty){this._isGeometryDirty=!1;var e=new Z,n=Math.tan(this.fov/2*Math.PI/180),i=this.near,r=this.far,s=i*n,a=r*n,o=this.aspect*s,u=this.aspect*a,c=[-o,-s,-i],h=[o,-s,-i],f=[o,s,-i],l=[-o,s,-i],d=[-u,-a,-r],m=[u,-a,-r],_=[u,a,-r],p=[-u,a,-r];e.addRect(d,m,_,p),e.addRect(m,h,f,_),e.addRect(h,c,l,f),e.addRect(c,d,p,l),e.addRect(p,_,f,l),e.addRect(c,h,m,d),this._geometry=e}return this._geometry}}),Q=K,J=s.a.create({constructor:function(){this._cache={}},get:function(t){return this._cache[t]},getObject:function(t){return this._cache[t.__cacheId]},add:function(t,e){"object"==typeof e&&(e.__cacheId=t),this._cache[t]=e},remove:function(t){delete this._cache[t]},removeObject:function(t){delete this._cache[t.__cacheId]},removeAll:function(){this._cache={}},each:function(t){var e=this._cache;for(var n in e)t(e[n],n)}}),$={instanced:void 0,vao:void 0,texFloat:void 0,loseContext:void 0,textureFilterAnisotropic:void 0,_usedExtensions:{},_disabledExtensions:{},init:function(t){this.reset(t)},reset:function(t){this.gl=t;var e=this._usedExtensions;for(var n in e){var i=e[n];this[i]=void 0,this.get(n,i)}},use:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;this.gl?this.get(t,e):this._usedExtensions[t]=e},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;if(this._disabledExtensions[t])return null;var n=this[e];return void 0===n&&(n=this._getExtension(t),this[e]=n),n},disable:function(t){this._disabledExtensions[t]=!0},enable:function(t){this._disabledExtensions[t]=!1},_getExtension:function(t){var e=this.gl;return e&&e.getExtension&&(e.getExtension(t)||e.getExtension("WEBKIT_"+t)||e.getExtension("MOZ_"+t))||null}};$.use("ANGLE_instanced_arrays","instanced"),$.use("OES_vertex_array_object","vao"),$.use("OES_texture_float","texFloat"),$.use("WEBGL_lose_context","loseContext"),$.use("OES_element_index_uint","uintIndices"),$.use("EXT_shader_texture_lod","shaderTextureLod"),$.use("EXT_texture_filter_anisotropic","textureFilterAnisotropic");var tt=$,et={MAX_TEXTURE_INDEX:null,MAX_PRECISION:null,MAX_VERTEX_PRECISION:null,MAX_FRAGMENT_PRECISION:null,VERTEX_TEXTURE_FLOAT:null,FRAGMENT_TEXTURE_FLOAT:null,MAX_TEXTURE_MAX_ANISOTROPY:1,MAX_RENDERBUFFER_SIZE:void 0,MAX_COMBINED_TEXTURE_IMAGE_UNITS:void 0,MAX_CUBE_MAP_TEXTURE_SIZE:void 0,MAX_FRAGMENT_UNIFORM_VECTORS:void 0,MAX_TEXTURE_IMAGE_UNITS:void 0,MAX_TEXTURE_SIZE:void 0,MAX_VARYING_VECTORS:void 0,MAX_VERTEX_ATTRIBS:void 0,MAX_VERTEX_TEXTURE_IMAGE_UNITS:void 0,MAX_VERTEX_UNIFORM_VECTORS:void 0,init:function(t){var e=this;this.gl=t;["MAX_RENDERBUFFER_SIZE","MAX_COMBINED_TEXTURE_IMAGE_UNITS","MAX_CUBE_MAP_TEXTURE_SIZE","MAX_FRAGMENT_UNIFORM_VECTORS","MAX_TEXTURE_IMAGE_UNITS","MAX_TEXTURE_SIZE","MAX_VARYING_VECTORS","MAX_VERTEX_ATTRIBS","MAX_VERTEX_TEXTURE_IMAGE_UNITS","MAX_VERTEX_UNIFORM_VECTORS"].forEach((function(t){e.get(t)})),this.MAX_TEXTURE_INDEX=this.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,this.MAX_VERTEX_PRECISION=this._getMaxSupportPrecision(t.VERTEX_SHADER),this.MAX_FRAGMENT_PRECISION=this._getMaxSupportPrecision(t.FRAGMENT_SHADER),this.MAX_PRECISION=this.getMaxPrecision(this.MAX_FRAGMENT_PRECISION,this.MAX_VERTEX_PRECISION),this.VERTEX_TEXTURE_FLOAT=!!tt.texFloat&&this.MAX_VERTEX_TEXTURE_IMAGE_UNITS>0,this.FRAGMENT_TEXTURE_FLOAT=!!tt.texFloat,this.EXT_FRAG_DEPTH=tt.get("EXT_frag_depth"),this.SHADER_TEXTURE_LOD=!!tt.shaderTextureLod,tt.textureFilterAnisotropic&&(this.MAX_TEXTURE_MAX_ANISOTROPY=t.getParameter(tt.textureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT))},get:function(t){var e=this.gl,n=this[t];return void 0===n&&(n=this[t]=e.getParameter(e[t])),n},_getMaxSupportPrecision:function(t){var e=this.gl,n="lowp";if(e.getShaderPrecisionFormat)for(var i=[{name:"highp",type:e.HIGH_FLOAT},{name:"mediump",type:e.MEDIUM_FLOAT}],r=0;r<i.length;r++){var s=i[r];if((e.getShaderPrecisionFormat(t,s.type)||{}).precision>0){n=s.name;break}}else n="mediump";return n},getMaxPrecision:function(t,e){return"highp"===t||"mediump"===t&&"lowp"===e?e:t}},nt=n(54),it=n.n(nt),rt=n(55),st=n.n(rt),at=n(56),ot=n.n(at),ut=n(57),ct=n.n(ut),ht=new J,ft=new J,lt=s.a.create({isShader:!0,className:"Shader",vs:"",fs:"",Statics:{commonOptions:{},shaders:{"chunk/baseDefine.glsl":n(18),"chunk/color.frag":n(40),"chunk/color.vert":n(80),"chunk/color_main.vert":n(82),"chunk/diffuse.frag":n(62),"chunk/diffuse_main.frag":n(71),"chunk/extensions.frag":n(25),"chunk/extensions.vert":n(52),"chunk/fog.frag":n(47),"chunk/fog_main.frag":n(73),"chunk/frag_color.frag":n(51),"chunk/joint.vert":n(75),"chunk/joint_main.vert":n(85),"chunk/light.frag":n(44),"chunk/lightFog.frag":n(43),"chunk/lightFog.vert":n(78),"chunk/lightFog_main.frag":n(49),"chunk/lightFog_main.vert":n(88),"chunk/logDepth.frag":n(29),"chunk/logDepth_main.frag":n(30),"chunk/logDepth.vert":n(81),"chunk/logDepth_main.vert":n(89),"chunk/morph.vert":n(79),"chunk/morph_main.vert":n(84),"chunk/normal.frag":n(42),"chunk/normal.vert":n(77),"chunk/normal_main.frag":n(48),"chunk/normal_main.vert":n(87),"chunk/pbr.frag":n(91),"chunk/pbr_main.frag":n(93),"chunk/phong.frag":n(69),"chunk/phong_main.frag":n(72),"chunk/precision.frag":n(26),"chunk/precision.vert":n(53),"chunk/transparency.frag":n(46),"chunk/transparency_main.frag":n(50),"chunk/unQuantize.vert":n(74),"chunk/unQuantize_main.vert":n(83),"chunk/uv.frag":n(41),"chunk/uv.vert":n(76),"chunk/uv_main.vert":n(86),"method/encoding.glsl":n(92),"method/getDiffuse.glsl":n(64),"method/getLightAttenuation.glsl":n(66),"method/getShadow.glsl":n(68),"method/getSpecular.glsl":n(65),"method/packFloat.glsl":n(90),"method/textureEnvMap.glsl":n(45),"method/transpose.glsl":n(63),"method/unpackFloat.glsl":n(67),"basic.frag":n(54),"basic.vert":n(55),"geometry.frag":n(56),"pbr.frag":n(57),"screen.frag":n(58),"screen.vert":n(59)},init:function(t){this.renderer=t,this.commonHeader=this._getCommonHeader(this.renderer)},cache:{get:function(){return ht}},headerCache:{get:function(){return ft}},reset:function(t){ht.removeAll()},getHeaderKey:function(t,e,n,i,r){var s="header_"+e.id+"_"+n.lightInfo.uid;return t.isSkinedMesh&&(s+="_joint"+t.skeleton.jointCount),i&&(s+="_fog_"+i.mode),s+="_"+t.geometry.getShaderKey(),r&&(s+="_fogDepth"),s},getHeader:function(t,e,n,i,r){var s=this.getHeaderKey(t,e,n,i),a=ft.get(s);if(!a||e.isDirty){var o={};Object.assign(o,this.commonOptions);var u=e.lightType;u&&"NONE"!==u&&n.getRenderOption(o),e.getRenderOption(o),t.getRenderOption(o),i&&(o.HAS_FOG=1,i.getRenderOption(o)),r&&(o.USE_LOG_DEPTH=1,et.EXT_FRAG_DEPTH&&(o.USE_EXT_FRAG_DEPTH=1)),o.HAS_NORMAL&&o.NORMAL_MAP&&(o.HAS_TANGENT=1),o.RECEIVE_SHADOWS||(delete o.DIRECTIONAL_LIGHTS_SMC,delete o.SPOT_LIGHTS_SMC,delete o.POINT_LIGHTS_SMC),a="#define SHADER_NAME ".concat(e.className,"\n"),a+=Object.keys(o).map((function(t){return t.indexOf("HILO_CUSTUM_OPTION_")>-1?"#define ".concat(t.replace("HILO_CUSTUM_OPTION_","")," ").concat(o[t]):"#define HILO_".concat(t," ").concat(o[t])})).join("\n")+"\n",ft.add(s,a)}return a},_getCommonHeader:function(t){var e=et.getMaxPrecision(et.MAX_VERTEX_PRECISION,t.vertexPrecision),n=et.getMaxPrecision(et.MAX_FRAGMENT_PRECISION,t.fragmentPrecision),i=et.getMaxPrecision(e,n);return"\n#define HILO_MAX_PRECISION ".concat(i,"\n#define HILO_MAX_VERTEX_PRECISION ").concat(e,"\n#define HILO_MAX_FRAGMENT_PRECISION ").concat(n,"\n")},getShader:function(t,e,n,i,r,s){var a=this.getHeader(t,e,i,r,s);return e.isBasicMaterial||e.isPBRMaterial?this.getBasicShader(e,n,a):e.isShaderMaterial?this.getCustomShader(e.vs,e.fs,a,e.shaderCacheId||e.id,e.useHeaderCache):null},getBasicShader:function(t,e,n){var i="";e&&(i=(i=t.getInstancedUniforms().map((function(t){return t.name}))).join("|"));var r=t.className+":"+i;t.onBeforeCompile&&(r+=":"+(t.shaderCacheId||t.id));var s=ht.get(r);if(!s){var a="",o=st.a;if(t.isBasicMaterial?t.isGeometryMaterial?a+=ot.a:a+=it.a:t.isPBRMaterial&&(a+=ct.a),t.onBeforeCompile){var u=t.onBeforeCompile(o,a);a=u.fs,o=u.vs}if(i){var c=new RegExp("^\\s*uniform\\s+(\\w+)\\s+(".concat(i,");"),"gm");o=o.replace(c,"attribute $1 $2;")}s=this.getCustomShader(o,a,n,r,!0)}if(s){var h=this._getNumId(s);null!==h&&(t._shaderNumId=h)}return s},_getNumId:function(t){var e=t.id.match(/_(\d+)/);return e&&e[1]?parseInt(e[1],10):null},getCustomShader:function(t,e,n,i,r){var s,a=this.commonHeader;return i&&(r&&(i+=":"+n),s=ht.get(i)),s||(s=new lt({vs:a+n+t,fs:a+n+e}),i&&ht.add(i,s)),s}},alwaysUse:!1,constructor:function(t){this.id=d.a.generateUUID(this.className),Object.assign(this,t)},destroyIfNoRef:function(t){return t.resourceManager.destroyIfNoRef(this),this},destroy:function(){return this._isDestroyed||(ht.removeObject(this),this._isDestroyed=!0),this}}),dt=lt,mt=n(59),_t=n.n(mt),pt=n(58),gt=n.n(pt),vt=[{name:"FLOAT",byteSize:4,uniformFuncName:"uniform1f",type:"Scalar",size:1},{name:"FLOAT_VEC2",byteSize:8,uniformFuncName:"uniform2f",type:"Vector",size:2},{name:"FLOAT_VEC3",byteSize:12,uniformFuncName:"uniform3f",type:"Vector",size:3},{name:"FLOAT_VEC4",byteSize:16,uniformFuncName:"uniform4f",type:"Vector",size:4},{name:"FLOAT_MAT2",byteSize:16,uniformFuncName:"uniformMatrix2fv",type:"Matrix",size:4},{name:"FLOAT_MAT3",byteSize:36,uniformFuncName:"uniformMatrix3fv",type:"Matrix",size:9},{name:"FLOAT_MAT4",byteSize:64,uniformFuncName:"uniformMatrix4fv",type:"Matrix",size:16},{name:"INT",byteSize:4,uniformFuncName:"uniform1i",type:"Scalar",size:1},{name:"INT_VEC2",byteSize:8,uniformFuncName:"uniform2i",type:"Vector",size:2},{name:"INT_VEC3",byteSize:12,uniformFuncName:"uniform3i",type:"Vector",size:3},{name:"INT_VEC4",byteSize:16,uniformFuncName:"uniform4i",type:"Vector",size:4},{name:"BOOL",byteSize:4,uniformFuncName:"uniform1i",type:"Scalar",size:1},{name:"BOOL_VEC2",byteSize:8,uniformFuncName:"uniform2i",type:"Vector",size:2},{name:"BOOL_VEC3",byteSize:12,uniformFuncName:"uniform3i",type:"Vector",size:3},{name:"BOOL_VEC4",byteSize:16,uniformFuncName:"uniform4i",type:"Vector",size:4},{name:"SAMPLER_2D",byteSize:4,uniformFuncName:"uniform1i",type:"Scalar",size:1},{name:"SAMPLER_CUBE",byteSize:4,uniformFuncName:"uniform1i",type:"Scalar",size:1}],Et={},Tt={dict:Et,init:function(t){vt.forEach((function(e){var n,i,r=e.name,s=e.uniformFuncName,a=s+"v";"Matrix"===e.type?n=i=function(e,n){void 0!==n&&t[s](e,!1,n)}:(n=function(e,n){void 0!==n&&t[s](e,n)},i=function(e,n){t[a](e,n)}),Et[t[r]]=Object.assign(e,{glValue:t[r],uniform:n,uniformArray:i})}))},get:function(t){return Et[t]}},Mt=new J,At=s.a.create({Statics:{cache:{get:function(){return Mt}},reset:function(t){Mt.each((function(t){t.destroy()}))},getProgram:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=t.id,r=Mt.get(i);return r||(r=new At({state:e,vertexShader:t.vs,fragShader:t.fs,ignoreError:n}),Mt.add(i,r)),r},getBlankProgram:function(t){var e=dt.getCustomShader("void main(){}","precision HILO_MAX_FRAGMENT_PRECISION float;void main(){gl_FragColor = vec4(0.0);}","","__hiloBlankShader");return this.getProgram(e,t,!0)}},className:"Program",isProgram:!0,fragShader:"",vertexShader:"",attributes:null,uniforms:null,program:null,gl:null,state:null,alwaysUse:!1,constructor:function(t){return this.id=d.a.generateUUID(this.className),Object.assign(this,t),this._dict={},this.attributes={},this.uniforms={},this.gl=this.state.gl,this.program=this.createProgram(),this.program?(this.initAttributes(),this.initUniforms(),this):this.ignoreError?this:At.getBlankProgram(t.state)},createProgram:function(){var t=this.gl,e=t.createProgram(),n=this.createShader(t.VERTEX_SHADER,this.vertexShader),i=this.createShader(t.FRAGMENT_SHADER,this.fragShader);if(n&&i){if(t.attachShader(e,n),t.attachShader(e,i),t.linkProgram(e),t.deleteShader(n),t.deleteShader(i),!t.getProgramParameter(e,t.LINK_STATUS)){var r=t.getProgramInfoLog(e);return m.a.error("compileProgramError: "+r,this),t.deleteProgram(e),null}return e}return null},useProgram:function(){this.state.useProgram(this.program)},createShader:function(t,e){var n=this.gl,i=n.createShader(t);if(n.shaderSource(i,e),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS)){var r=n.getShaderInfoLog(i);return m.a.error("compileShaderError: "+r,e.split("\n").map((function(t,e){return"".concat(e+1," ").concat(t)})).join("\n")),null}return i},initAttributes:function(){for(var t=this,e=this.gl,n=this.program,i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES),r=tt.instanced,s=function(i){var s=e.getActiveAttrib(n,i),a=s.name,o=s.type,u=s.size,c=e.getAttribLocation(n,a),h=Tt.get(o),f=function(t){var n=t.type,i=void 0===n?e.FLOAT:n,r=t.normalized,s=void 0!==r&&r,a=t.stride,o=void 0===a?0:a,u=t.offset,f=void 0===u?0:u;e.vertexAttribPointer(c,h.size,i,s,o,f)},l=function(){e.enableVertexAttribArray(c)},d=function(){},m=function(t,e){t[c]=e};if(r&&(d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;r.vertexAttribDivisorANGLE(c,t)}),"Matrix"===h.type){var _=h.byteSize,p=h.size,g=Math.sqrt(p),v=4*g,E=function(t){for(var e=0;e<g;e++)t(c+e,e)};f=function(t){var n,i=t.type,r=void 0===i?e.FLOAT:i,s=t.normalized,a=void 0!==s&&s,o=t.stride,u=void 0===o?0:o,c=t.offset,h=void 0===c?0:c;n=0===u?_:u,E((function(t,i){e.vertexAttribPointer(t,g,r,a,n,h+v*i)}))},l=function(){E((function(t){e.enableVertexAttribArray(t)}))},m=function(t,e){E((function(n){t[n]=e}))},r&&(d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;E((function(e){r.vertexAttribDivisorANGLE(e,t)}))})}t.attributes[a]={name:a,location:c,type:o,size:u,glTypeInfo:h,pointer:f,enable:l,divisor:d,addTo:m}},a=0;a<i;a++)s(a)},initUniforms:function(){for(var t=this,e=this.gl,n=this.program,i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS),r=0,s=function(i){var s=e.getActiveUniform(n,i),a=s.name,o=s.size,u=s.type;a=a.replace(/\[0\]$/,"");var c=e.getUniformLocation(n,a),h=Tt.get(u),f=h.uniformArray,l=h.uniform;t.uniforms[a]={name:a,location:c,type:u,size:o,glTypeInfo:h},u!==e.SAMPLER_2D&&u!==e.SAMPLER_CUBE||(t.uniforms[a].textureIndex=r,r+=o),Object.defineProperty(t,a,{set:h.size>1||o>1?function(t){f(c,t)}:function(e){t._dict[a]!==e&&(t._dict[a]=e,l(c,e))}})},a=0;a<i;a++)s(a)},destroyIfNoRef:function(t){return t.resourceManager.destroyIfNoRef(this),this},destroy:function(){return this._isDestroyed||(this.gl.deleteProgram(this.program),this.uniforms=null,this.attributes=null,this.program=null,this.gl=null,this.state=null,this._dict=null,Mt.removeObject(this),this._isDestroyed=!0),this}}),It=At,Lt=C.a.ARRAY_BUFFER,Ot=C.a.ELEMENT_ARRAY_BUFFER,St=C.a.STATIC_DRAW,Rt=new J,yt=s.a.create({Statics:{cache:{get:function(){return Rt}},reset:function(t){Rt.each((function(t){t.destroy()}))},createVertexBuffer:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:St;return this.createBuffer(t,Lt,e,n)},createBuffer:function(t,e,n,i){var r=n.bufferViewId,s=Rt.get(r);return s||(n.isDirty=!1,s=new yt(t,e,n.data,i),Rt.add(r,s),s)},createIndexBuffer:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:St;return this.createBuffer(t,Ot,e,n)}},className:"Buffer",isBuffer:!0,constructor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Lt,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:St;this.id=d.a.generateUUID(this.className),this.gl=t,this.target=e,this.usage=i,this.buffer=t.createBuffer(),n&&this.bufferData(n)},bind:function(){return this.gl.bindBuffer(this.target,this.buffer),this},bufferData:function(t){var e=this.gl,n=this.target,i=this.usage;return this.bind(),e.bufferData(n,t,i),this.data=t,this},bufferSubData:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.gl,r=this.target;return n||this.bind(),i.bufferSubData(r,t,e),this},uploadGeometryData:function(t){var e=this,n=t.subDataList;return!this.data||this.data.byteLength<t.data.byteLength||!0===t._isAllDirty?this.bufferData(t.data):n&&n.length?(this.bind(),n.forEach((function(t){e.bufferSubData(t.byteOffset,t.data,!0)}))):this.bufferData(t.data),t.isDirty=!1,this},destroyIfNoRef:function(t){return t.resourceManager.destroyIfNoRef(this),this},destroy:function(){return this._isDestroyed||(this.gl.deleteBuffer(this.buffer),this.data=null,Rt.removeObject(this),this._isDestroyed=!0),this}}),xt=yt,Nt=new ArrayBuffer(1),bt={getTypedArray:function(t,e){return this._updateBuffer(e*t.BYTES_PER_ELEMENT),new t(Nt,0,e)},fillArrayData:function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=0,r=e.length;i<r;i++)t[n+i]=e[i]},_updateBuffer:function(t){Nt.byteLength<t&&(Nt=new ArrayBuffer(2*t))}},wt=C.a.TRIANGLES,Ct=[],Pt=null,Ht=new J,Dt=s.a.create({Statics:{cache:{get:function(){return Ht}},getVao:function(t,e,n){var i=Ht.get(e);return i?n.mode&&n.mode!==i.mode&&(i.mode=n.mode):(i=new Dt(t,e,n),Ht.add(e,i)),i},reset:function(t){Pt=null,Ct=[],this.bindSystemVao(),Ht.each((function(e){e.destroy(t)}))},bindSystemVao:function(){tt.vao&&tt.vao.bindVertexArrayOES(null),Pt=null}},className:"VertexArrayObject",isVertexArrayObject:!0,vertexCount:null,useVao:!1,useInstanced:!1,mode:wt,isDirty:!0,constructor:function(t,e,n){this.gl=t,this.id=e,this.vaoExtension=tt.vao,this.instancedExtension=tt.instanced,Object.assign(this,n),this.vaoExtension||(this.useVao=!1),this.instancedExtension||(this.useInstanced=!1),this.useVao&&(this.vao=this.vaoExtension.createVertexArrayOES()),this.attributes=[],this.activeStates=[],this.indexBuffer=null},bind:function(){Pt!==this&&(this.useVao?this.vaoExtension.bindVertexArrayOES(this.vao):this.bindSystemVao(),Pt=this)},bindSystemVao:function(){var t=this.gl;Pt&&Pt.useVao&&Pt.unbind();var e,n=this.activeStates;this.attributes.forEach((function(t){var n=t.buffer,i=t.attribute,r=t.geometryData;e!==n&&(e=n,n.bind()),i.enable(),i.pointer(r),t.useInstanced?i.divisor(1):i.divisor(0)})),Ct.forEach((function(e,i){var r=n[i];e&&!r&&(e.attribute.divisor(0),t.disableVertexAttribArray(i))})),this.indexBuffer&&this.indexBuffer.bind(),Ct=n},unbind:function(){this.useVao&&this.vaoExtension.bindVertexArrayOES(null),Pt=null},draw:function(){this.bind();var t=this.gl,e=this.mode;this.indexBuffer?t.drawElements(e,this.vertexCount,this.indexType,0):t.drawArrays(e,0,this.getVertexCount())},getVertexCount:function(){if(null===this.vertexCount){var t=this.attributes[0];this.vertexCount=t?t.geometryData.count:0}return this.vertexCount},drawInstance:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.bind();var e=this.gl,n=this.mode;this.useInstanced&&(this.indexBuffer?this.instancedExtension.drawElementsInstancedANGLE(n,this.vertexCount,e.UNSIGNED_SHORT,0,t):this.instancedExtension.drawArraysInstancedANGLE(n,0,this.getVertexCount(),t))},addIndexBuffer:function(t,e){this.bind();var n=this.gl,i=this.indexBuffer;return this.indexType=t.type,i?t.isDirty&&(i.uploadGeometryData(t),this.vertexCount=t.length):((i=xt.createIndexBuffer(n,t,e)).bind(),this.indexBuffer=i,this.vertexCount=t.length),i},addAttribute:function(t,e,n,i){this.bind();var r=this.gl,s=e.name,a=this[s];if(!a){var o=xt.createVertexBuffer(r,t,n);o.bind(),e.enable(),e.pointer(t),a={attribute:e,buffer:o,geometryData:t},this.attributes.push(a),this[s]=a,e.addTo(this.activeStates,a),i&&i(a)}if(t.isDirty){var u=a.buffer;u.bind(),e.enable(),e.pointer(t),u.uploadGeometryData(t)}return a},addInstancedAttribute:function(t,e,n){this.bind();var i=this.gl,r=t.name,s=t.glTypeInfo,a=bt.getTypedArray(Float32Array,e.length*s.size);e.forEach((function(t,e){void 0!==n(t)?bt.fillArrayData(a,n(t),e*s.size):m.a.warn("no attributeData:"+r+"-"+t.name)}));var o,u=this[r];return u?(o=u.geometryData).data=a:o=new w(a,1),this.addAttribute(o,t,i.DYNAMIC_DRAW,(function(e){t.divisor(1),e.useInstanced=!0}))},getResources:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this.attributes&&this.attributes.forEach((function(e){t.push(e.buffer)})),this.indexBuffer&&t.push(this.indexBuffer),t},destroyIfNoRef:function(t){return t.resourceManager.destroyIfNoRef(this),this},destroy:function(){var t=this;return this._isDestroyed||(this.instancedExtension=null,this.useVao&&(this.vaoExtension.deleteVertexArrayOES(this.vao),this.vao=null,this.vaoExtension=null),this.gl=null,this.indexBuffer=null,this.attributes.forEach((function(e){var n=e.attribute||{};t[n.name]=null})),this.attributes=null,this.activeStates=null,Ht.removeObject(this),this._isDestroyed=!0),this}}),Ft=Dt,Ut=C.a.TEXTURE_2D,Gt=C.a.RGBA,Bt=C.a.LINEAR,Vt=C.a.NEAREST,Xt=C.a.REPEAT,jt=C.a.CLAMP_TO_EDGE,kt=C.a.UNSIGNED_BYTE,zt=new J,qt=s.a.create({Statics:{cache:{get:function(){return zt}},reset:function(t){zt.each((function(e,n){t.deleteTexture(e),zt.remove(n)}))}},isTexture:!0,className:"Texture",isImageCanRelease:!1,_isImageReleased:!1,_image:null,image:{get:function(){return this._isImageReleased&&m.a.errorOnce("Read Texture.image(".concat(this.id,")"),"Read Texture.image after image released!"),this._image},set:function(t){this._image=t,this._isImageReleased=!1}},_releaseImage:function(){this._canvasImage=null,this._canvasCtx=null,this._originImage=null,this._image=null,this.mipmaps=null,this._isImageReleased=!0},mipmaps:null,target:Ut,internalFormat:Gt,format:Gt,type:kt,width:0,height:0,border:0,magFilter:Bt,minFilter:Bt,wrapS:Xt,wrapT:Xt,name:"",premultiplyAlpha:!1,flipY:!1,compressed:!1,needUpdate:!0,needDestroy:!1,autoUpdate:!1,uv:0,anisotropic:1,origWidth:{get:function(){return this._originImage?this._originImage.width||this.width:this.image&&this.image.width||this.width}},origHeight:{get:function(){return this.originImage?this._originImage.height||this.height:this.image&&this.image.height||this.height}},useMipmap:{get:function(){return this.minFilter!==Bt&&this.minFilter!==Vt},set:function(){m.a.warn("texture.useMipmap is readOnly!")}},useRepeat:{get:function(){return this.wrapS!==jt||this.wrapT!==jt},set:function(){m.a.warn("texture.useRepeat is readOnly!")}},mipmapCount:{get:function(){return Math.floor(Math.log2(Math.max(this.width,this.height))+1)},set:function(){m.a.warn("texture.mipmapCount is readOnly!")}},constructor:function(t){this.id=d.a.generateUUID(this.className),Object.assign(this,t)},isImgPowerOfTwo:function(t){return d.a.isPowerOfTwo(t.width)&&d.a.isPowerOfTwo(t.height)},getSupportSize:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.width,i=t.height;e&&!this.isImgPowerOfTwo(t)&&(n=d.a.nextPowerOfTwo(n),i=d.a.nextPowerOfTwo(i));var r=et.MAX_TEXTURE_SIZE;return r&&(n>r&&(n=r),i>r&&(i=r)),{width:n,height:i}},resizeImgToPowerOfTwo:function(t){var e=this.getSupportSize(t,!0);return this.resizeImg(t,e.width,e.height)},resizeImg:function(t,e,n){if(t.width===e&&t.height===n)return t;var i=this._canvasImage;return i?(i.width=e,i.height=n,this._canvasCtx=i.getContext("2d")):((i=document.createElement("canvas")).width=e,i.height=n,this._canvasImage=i,this._canvasCtx=i.getContext("2d")),this._canvasCtx.drawImage(t,0,0,t.width,t.height,0,0,e,n),m.a.warnOnce("Texture.resizeImg(".concat(this.id,")"),"image size(".concat(t.width,"x").concat(t.height,") is not support. Resized to ").concat(i.width,"x").concat(i.height),t.src),this._originImage=t,i},_glUploadTexture:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.width,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:this.height,a=t.gl;return this.compressed?a.compressedTexImage2D(e,i,this.internalFormat,r,s,this.border,n):n&&void 0!==n.width?a.texImage2D(e,i,this.internalFormat,this.format,this.type,n):a.texImage2D(e,i,this.internalFormat,r,s,this.border,this.format,this.type,n),this},_uploadTexture:function(t){var e=this;return this.useMipmap&&this.mipmaps?this.mipmaps.forEach((function(n,i){e._glUploadTexture(t,e.target,n.data,i,n.width,n.height)})):this._glUploadTexture(t,this.target,this.image,0),this},updateTexture:function(t,e){var n=t.gl;if(this.needUpdate||this.autoUpdate){this._originImage&&this.image===this._canvasImage&&(this.image=this._originImage);var i=this.useMipmap,r=this.useRepeat;if(this.image&&!this.image.length){var s=r||i,a=this.getSupportSize(this.image,s);this.image=this.resizeImg(this.image,a.width,a.height),this.width=this.image.width,this.height=this.image.height}t.activeTexture(n.TEXTURE0+et.MAX_TEXTURE_INDEX),t.bindTexture(this.target,e),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!!this.flipY);var o=tt.textureFilterAnisotropic;o&&this.anisotropic>1&&n.texParameterf(this.target,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(this.anisotropic,et.MAX_TEXTURE_MAX_ANISOTROPY)),this._uploadTexture(t),i&&(this.compressed?this.mipmaps||(m.a.warn("Compressed texture has no mipmips, changed the minFilter from ".concat(this.minFilter," to Linear!"),this),this.minFilter=Bt):n.generateMipmap(this.target)),n.texParameterf(this.target,n.TEXTURE_MAG_FILTER,this.magFilter),n.texParameterf(this.target,n.TEXTURE_MIN_FILTER,this.minFilter),n.texParameterf(this.target,n.TEXTURE_WRAP_S,this.wrapS),n.texParameterf(this.target,n.TEXTURE_WRAP_T,this.wrapT),this.needUpdate=!1}return this._needUpdateSubTexture&&(this._uploadSubTextures(t,e),this._needUpdateSubTexture=!1),this},_uploadSubTextures:function(t,e){var n=this;if(this._subTextureList&&this._subTextureList.length>0){var i=t.gl;t.activeTexture(i.TEXTURE0+et.MAX_TEXTURE_INDEX),t.bindTexture(this.target,e),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!!this.flipY),this._subTextureList.forEach((function(t){var e=t[0],r=t[1],s=t[2];i.texSubImage2D(n.target,0,e,r,n.format,n.type,s)})),this._subTextureList.length=0}},_needUpdateSubTexture:!1,_subTextureList:null,updateSubTexture:function(t,e,n){this._subTextureList||(this._subTextureList=[]),this._subTextureList.push([t,e,n]),this._needUpdateSubTexture=!0},getGLTexture:function(t){this.state=t;var e=this.gl=t.gl,n=this.id;this.needDestroy&&(this.destroy(),this.needDestroy=!1);var i=zt.get(n);return i||(i=e.createTexture(),zt.add(n,i),this.needUpdate=!0),this.updateTexture(t,i),this.isImageCanRelease&&this._releaseImage(),i},setGLTexture:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&this.destroy(),zt.add(this.id,t),this},destroy:function(){var t=this.id,e=zt.get(t);return e&&this.gl&&(this.gl.deleteTexture(e),zt.remove(t)),this},clone:function(){var t=Object.assign({},this);return delete t.id,new this.constructor(t)}}),Wt=C.a.TEXTURE_2D,Yt=C.a.RGBA,Zt=C.a.UNSIGNED_BYTE,Kt=C.a.COLOR_ATTACHMENT0,Qt=C.a.DEPTH_STENCIL,Jt=C.a.DEPTH_TEST,$t=C.a.CULL_FACE,te=C.a.TRIANGLE_STRIP,ee=C.a.NEAREST,ne=C.a.CLAMP_TO_EDGE,ie=new J,re=s.a.create({Statics:{cache:{get:function(){return ie}},reset:function(t){ie.each((function(t){t.reset()}))},destroy:function(t){ie.each((function(t){t.destroy()}))}},className:"Framebuffer",isFramebuffer:!0,bufferInternalFormat:Qt,target:Wt,format:Yt,internalFormat:Yt,type:Zt,minFilter:ee,magFilter:ee,data:null,attachment:Kt,needRenderbuffer:!0,useVao:!0,renderer:null,texture:null,renderbuffer:null,framebuffer:null,_isInit:!1,constructor:function(t,e){this.id=d.a.generateUUID(this.className),this.renderer=t,Object.assign(this,e),this.width||(this.width=t.width),this.height||(this.height=t.height),ie.add(this.id,this)},init:function(){if(!this._isInit&&this.renderer.isInit){this._isInit=!0;var t=this.renderer;this.gl=t.gl,this.state=t.state,this.reset()}},reset:function(){this.destroyResource();var t=this.gl;this.framebuffer=t.createFramebuffer(),this.bind(),this.needRenderbuffer&&(this.renderbuffer=this.createRenderbuffer()),this.texture=this.createTexture(),this.isComplete()||m.a.warn("Framebuffer is not complete => "+t.checkFramebufferStatus(t.FRAMEBUFFER)),this.unbind()},isComplete:function(){var t=this.gl;return!(!t||t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE)},bind:function(){this.init(),this._isInit&&this.state.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer)},unbind:function(){if(this.init(),this._isInit){var t=this.state;t.bindFramebuffer(this.gl.FRAMEBUFFER,t.preFramebuffer)}},clear:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new v.a(0,0,0,0);if(this._isInit){var e=this.gl;e.clearColor(t.r,t.g,t.b,t.a),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}},render:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=arguments.length>4?arguments[4]:void 0;if(this._isInit){var s=this.gl,a=this.state;a.disable(Jt),a.disable($t),r&&this.clear(r);var o=dt.getCustomShader(_t.a,gt.a,"","FramebufferTextureShader"),u=It.getProgram(o,a);u.useProgram();var c="".concat(t,"_").concat(e,"_").concat(n,"_").concat(i,"_").concat(u.id),h=Ft.getVao(s,c,{useVao:this.useVao,useInstanced:!1,mode:te});if(h.isDirty){h.isDirty=!1;var f=[t=2*t-1,e=1-2*e,t+(n*=2),e,t,e-(i*=2),t+n,e-i];h.addAttribute(new w(new Float32Array(f),2),u.attributes.a_position),h.addAttribute(new w(new Float32Array([0,1,1,1,0,0,1,0]),2),u.attributes.a_texcoord0)}a.activeTexture(s.TEXTURE0),a.bindTexture(s.TEXTURE_2D,this.texture.getGLTexture(a)),h.draw()}},createRenderbuffer:function(){var t=this.gl,e=this.width,n=this.height,i=t.createRenderbuffer();return t.bindRenderbuffer(t.RENDERBUFFER,i),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,e,n),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,i),i},createTexture:function(){var t=this.state,e=t.gl,n=new qt({minFilter:this.minFilter,magFilter:this.magFilter,internalFormat:this.internalFormat,format:this.format,type:this.type,width:this.width,height:this.height,image:this.data,wrapS:ne,wrapT:ne}),i=n.getGLTexture(t);return e.framebufferTexture2D(e.FRAMEBUFFER,this.attachment,this.target,i,0),n},resize:function(t,e,n){(n||this.width!==t||this.height!==e)&&(this.width=t,this.height=e,this._isInit&&this.reset())},readPixels:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,s=Object(r.getTypedArrayClass)(this.type),a=new s(n*i*4);if(this._isInit){var o=this.gl;e=this.height-e-i,this.bind(),o.readPixels(t,e,n,i,this.format,this.type,a),this.unbind()}return a},destroy:function(){this.destroyResource(),this.gl=null,ie.removeObject(this)},destroyResource:function(){var t=this.gl;t&&(this.framebuffer&&(t.deleteFramebuffer(this.framebuffer),this.framebuffer=null),this.renderbuffer&&(t.deleteRenderbuffer(this.renderbuffer),this.renderbuffer=null),this.texture&&(this.texture.destroy(),this.texture=null))}}),se=C.a.TEXTURE_CUBE_MAP,ae=C.a.RGB,oe=C.a.LINEAR,ue=C.a.CLAMP_TO_EDGE,ce=C.a.TEXTURE_CUBE_MAP_POSITIVE_X,he=s.a.create({Extends:qt,isCubeTexture:!0,className:"CubeTexture",target:se,internalFormat:ae,format:ae,magFilter:oe,minFilter:oe,wrapS:ue,wrapT:ue,constructor:function(t){he.superclass.constructor.call(this,t),this.image=this.image||[]},_uploadTexture:function(t){var e=this,n=this.image;Array.isArray(n)&&6===n.length?(n[0]&&n[0].width&&(this.width=n[0].width,this.height=n[0].height),n.forEach((function(n,i){e._glUploadTexture(t,ce+i,n,0)}))):m.a.error("CubeTexture image must be an Array of length 6",n)},right:{get:function(){return this.image[0]},set:function(t){this.image[0]=t}},left:{get:function(){return this.image[1]},set:function(t){this.image[1]=t}},top:{get:function(){return this.image[2]},set:function(t){this.image[2]=t}},bottom:{get:function(){return this.image[3]},set:function(t){this.image[3]=t}},front:{get:function(){return this.image[4]},set:function(t){this.image[4]=t}},back:{get:function(){return this.image[5]},set:function(t){this.image[5]=t}}}),fe=he,le=C.a.TEXTURE_2D,de=C.a.RGBA,me=C.a.NEAREST,_e=C.a.CLAMP_TO_EDGE,pe=C.a.FLOAT,ge=s.a.create({Extends:qt,isDataTexture:!0,className:"DataTexture",target:le,internalFormat:de,format:de,type:pe,magFilter:me,minFilter:me,wrapS:_e,wrapT:_e,dataLength:0,resetSize:function(t){if(t!==this.dataLength){this.dataLength=t;var e=d.a.nextPowerOfTwo(t/4),n=Math.max(Math.log2(e),4),i=Math.floor(n/2),s=n-i;this.width=Math.pow(2,i),this.height=Math.pow(2,s),this.DataClass=Object(r.getTypedArrayClass)(this.type)}},data:{get:function(){return this.image},set:function(t){if(this.image!==t){this.resetSize(t.length);var e=this.width*this.height*4;e===t.length&&t instanceof this.DataClass?this.image=t:(this.image&&this.image.length===e||(this.image=new this.DataClass(e)),this.image.set(t,0)),this.needUpdate=!0}}},constructor:function(t){ge.superclass.constructor.call(this,t)}}),ve=ge;function Ee(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=t[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Te(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Te(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Te(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var Me,Ae,Ie,Le,Oe,Se,Re=new c.a,ye=new y.a,xe=new o.a,Ne=new Float32Array([.5,.5,.5,1]),be=new Float32Array([0,0]),we={state:null,camera:null,lightManager:null,fog:null,gl:null,renderer:null,blankInfo:{get:function(){}},init:function(t,e,n,i,r){Se=this._renderer=t,Le=this.state=e,Me=this.camera=n,Ie=this.lightManager=i,Oe=this.fog=r,Ae=this.gl=Le.gl},setCamera:function(t){Me=this.camera=t},handlerColorOrTexture:function(t,e){return t&&t.isTexture?this.handlerTexture(t,e):(t&&t.isColor?t.toArray(Ne):Ne[0]=Ne[1]=Ne[2]=.5,Ne)},handlerTexture:function(t,e){if(t&&t.isTexture)return this.handlerGLTexture(t.target,t.getGLTexture(Le),e)},handlerGLTexture:function(t,e,n){if(e)return Le.activeTexture(Ae.TEXTURE0+n),Le.bindTexture(t,e),n},handlerUV:function(t){return t&&t.isTexture&&t.uv||0},POSITION:{get:function(t,e,n){return t.geometry.vertices}},NORMAL:{get:function(t,e,n){return t.geometry.normals}},TANGENT:{get:function(t,e,n){var i=e.normalMap;if(i&&i.isTexture)return 1===Number(i.uv)?t.geometry.tangents1:t.geometry.tangents}},TEXCOORD_0:{get:function(t,e,n){if(t.geometry.uvs)return t.geometry.uvs}},TEXCOORD_1:{get:function(t,e,n){if(t.geometry.uvs1)return t.geometry.uvs1}},UVMATRIX_0:{get:function(t,e,n){if(e.uvMatrix)return e.uvMatrix.elements}},UVMATRIX_1:{get:function(t,e,n){if(e.uvMatrix1)return e.uvMatrix1.elements}},CAMERAFAR:{get:function(t,e,n){if(Me.isPerspectiveCamera)return Me.far}},CAMERANEAR:{get:function(t,e,n){if(Me.isPerspectiveCamera)return Me.near}},CAMERATYPE:{get:function(t,e,n){return Me.isPerspectiveCamera?1:0}},CAMERAPOSITION:{get:function(t,e,n){return Me.worldMatrix.getTranslation(Re).elements}},COLOR_0:{get:function(t,e,n){if(t.geometry.colors)return t.geometry.colors}},SKININDICES:{get:function(t,e,n){return t.geometry.skinIndices}},SKINWEIGHTS:{get:function(t,e,n){return t.geometry.skinWeights}},RENDERERSIZE:{get:function(t,e,n){return be[0]=Se.width,be[1]=Se.height,be}},LOCAL:{get:function(t,e,n){return t.matrix.elements},isDependMesh:!0},MODEL:{get:function(t,e,n){return t.worldMatrix.elements},isDependMesh:!0},VIEW:{get:function(t,e,n){return Me.viewMatrix.elements}},PROJECTION:{get:function(t,e,n){return Me.projectionMatrix.elements}},VIEWPROJECTION:{get:function(t,e,n){return Me.viewProjectionMatrix.elements}},MODELVIEW:{get:function(t,e,n){return Me.getModelViewMatrix(t,xe).elements},isDependMesh:!0},MODELVIEWPROJECTION:{get:function(t,e,n){return Me.getModelProjectionMatrix(t,xe).elements},isDependMesh:!0},MODELINVERSE:{get:function(t,e,n){return xe.invert(t.worldMatrix).elements},isDependMesh:!0},VIEWINVERSE:{get:function(t,e,n){return Me.worldMatrix.elements}},VIEWINVERSEINVERSETRANSPOSE:{get:function(t,e,n){return ye.normalFromMat4(Me.worldMatrix).elements}},PROJECTIONINVERSE:{get:function(t,e,n){return xe.invert(Me.projectionMatrix).elements}},MODELVIEWINVERSE:{get:function(t,e,n){return xe.invert(Me.getModelViewMatrix(t,xe)).elements},isDependMesh:!0},MODELVIEWPROJECTIONINVERSE:{get:function(t,e,n){return xe.invert(Me.getModelProjectionMatrix(t,xe)).elements},isDependMesh:!0},MODELINVERSETRANSPOSE:{get:function(t,e,n){return ye.normalFromMat4(t.worldMatrix).elements},isDependMesh:!0},MODELVIEWINVERSETRANSPOSE:{get:function(t,e,n){return ye.normalFromMat4(Me.getModelViewMatrix(t,xe)).elements},isDependMesh:!0},VIEWPORT:void 0,JOINTMATRIX:{get:function(t,e,n){if(t.isSkinedMesh)return t.getJointMat();m.a.warnOnce("semantic.JOINTMATRIX(".concat(t.id,")"),"Current mesh is not SkinedMesh!",t.id)},isDependMesh:!0,notSupportInstanced:!0},JOINTMATRIXTEXTURE:{get:function(t,e,n){if(t.isSkinedMesh)return t.updateJointMatTexture(),we.handlerTexture(t.jointMatTexture,n.textureIndex);m.a.warnOnce("semantic.JOINTMATRIXTEXTURE(".concat(t.id,")"),"Current mesh is not SkinedMesh!",t.id)},isDependMesh:!0,notSupportInstanced:!0},JOINTMATRIXTEXTURESIZE:{get:function(t,e,n){if(t.isSkinedMesh)return t.initJointMatTexture(),[t.jointMatTexture.width,t.jointMatTexture.height];m.a.warnOnce("semantic.JOINTMATRIXTEXTURESIZE(".concat(t.id,")"),"Current mesh is not SkinedMesh!",t.id)},isDependMesh:!0,notSupportInstanced:!0},NORMALMAPSCALE:{get:function(t,e,n){return e.normalMapScale}},OCCLUSIONSTRENGTH:{get:function(t,e,n){return e.occlusionStrength}},SHININESS:{get:function(t,e,n){return e.shininess}},SPECULARENVMATRIX:{get:function(t,e,n){return e.specularEnvMatrix&&e.specularEnvMap?e.specularEnvMatrix.elements:(xe.identity(),xe.elements)}},REFLECTIVITY:{get:function(t,e,n){return e.reflectivity}},REFRACTRATIO:{get:function(t,e,n){return e.refractRatio}},REFRACTIVITY:{get:function(t,e,n){return e.refractivity}},LOGDEPTH:{get:function(t,e,n){return 2/(Math.log(Me.far+1)/Math.LN2)}},AMBIENTLIGHTSCOLOR:{get:function(t,e,n){return Ie.ambientInfo}},DIRECTIONALLIGHTSCOLOR:{get:function(t,e,n){return Ie.directionalInfo.colors}},DIRECTIONALLIGHTSINFO:{get:function(t,e,n){return Ie.directionalInfo.infos}},DIRECTIONALLIGHTSSHADOWMAP:{get:function(t,e,n){return Ie.directionalInfo.shadowMap.map((function(t,e){return we.handlerTexture(t,n.textureIndex+e)}))}},DIRECTIONALLIGHTSSHADOWMAPSIZE:{get:function(t,e,n){return Ie.directionalInfo.shadowMapSize}},DIRECTIONALLIGHTSSHADOWBIAS:{get:function(t,e,n){return Ie.directionalInfo.shadowBias}},DIRECTIONALLIGHTSPACEMATRIX:{get:function(t,e,n){return Ie.directionalInfo.lightSpaceMatrix}},POINTLIGHTSPOS:{get:function(t,e,n){return Ie.pointInfo.poses}},POINTLIGHTSCOLOR:{get:function(t,e,n){return Ie.pointInfo.colors}},POINTLIGHTSINFO:{get:function(t,e,n){return Ie.pointInfo.infos}},POINTLIGHTSRANGE:{get:function(t,e,n){return Ie.pointInfo.ranges}},POINTLIGHTSSHADOWMAP:{get:function(t,e,n){return Ie.pointInfo.shadowMap.map((function(t,e){return we.handlerTexture(t,n.textureIndex+e)}))}},POINTLIGHTSSHADOWBIAS:{get:function(t,e,n){return Ie.pointInfo.shadowBias}},POINTLIGHTSPACEMATRIX:{get:function(t,e,n){return Ie.pointInfo.lightSpaceMatrix}},POINTLIGHTCAMERA:{get:function(t,e,n){return Ie.pointInfo.cameras}},SPOTLIGHTSPOS:{get:function(t,e,n){return Ie.spotInfo.poses}},SPOTLIGHTSDIR:{get:function(t,e,n){return Ie.spotInfo.dirs}},SPOTLIGHTSCOLOR:{get:function(t,e,n){return Ie.spotInfo.colors}},SPOTLIGHTSCUTOFFS:{get:function(t,e,n){return Ie.spotInfo.cutoffs}},SPOTLIGHTSINFO:{get:function(t,e,n){return Ie.spotInfo.infos}},SPOTLIGHTSRANGE:{get:function(t,e,n){return Ie.spotInfo.ranges}},SPOTLIGHTSSHADOWMAP:{get:function(t,e,n){return Ie.spotInfo.shadowMap.map((function(t,e){return we.handlerTexture(t,n.textureIndex+e)}))}},SPOTLIGHTSSHADOWMAPSIZE:{get:function(t,e,n){return Ie.spotInfo.shadowMapSize}},SPOTLIGHTSSHADOWBIAS:{get:function(t,e,n){return Ie.spotInfo.shadowBias}},SPOTLIGHTSPACEMATRIX:{get:function(t,e,n){return Ie.spotInfo.lightSpaceMatrix}},AREALIGHTSCOLOR:{get:function(t,e,n){return Ie.areaInfo.colors}},AREALIGHTSPOS:{get:function(t,e,n){return Ie.areaInfo.poses}},AREALIGHTSWIDTH:{get:function(t,e,n){return Ie.areaInfo.width}},AREALIGHTSHEIGHT:{get:function(t,e,n){return Ie.areaInfo.height}},AREALIGHTSLTCTEXTURE1:{get:function(t,e,n){return we.handlerTexture(Ie.areaInfo.ltcTexture1,n.textureIndex)}},AREALIGHTSLTCTEXTURE2:{get:function(t,e,n){return we.handlerTexture(Ie.areaInfo.ltcTexture2,n.textureIndex)}},FOGCOLOR:{get:function(t,e,n){if(Oe)return Oe.color.elements}},FOGINFO:{get:function(t,e,n){if(Oe)return Oe.getInfo()}},POSITIONDECODEMAT:{get:function(t,e,n){return t.geometry.positionDecodeMat},isDependMesh:!0},NORMALDECODEMAT:{get:function(t,e,n){return t.geometry.normalDecodeMat},isDependMesh:!0},UVDECODEMAT:{get:function(t,e,n){return t.geometry.uvDecodeMat},isDependMesh:!0},UV1DECODEMAT:{get:function(t,e,n){return t.geometry.uv1DecodeMat},isDependMesh:!0},BASECOLOR:{get:function(t,e,n){return e.baseColor.elements}},METALLIC:{get:function(t,e,n){return e.metallic}},ROUGHNESS:{get:function(t,e,n){return e.roughness}},DIFFUSEENVMAP:{get:function(t,e,n){return we.handlerTexture(e.diffuseEnvMap,n.textureIndex)}},DIFFUSEENVINTENSITY:{get:function(t,e,n){return e.diffuseEnvIntensity}},DIFFUSEENVSPHEREHARMONICS3:{get:function(t,e,n){var i=e.diffuseEnvSphereHarmonics3;if(i)return i.toArray()}},BRDFLUT:{get:function(t,e,n){return we.handlerTexture(e.brdfLUT,n.textureIndex)}},SPECULARENVMAP:{get:function(t,e,n){return we.handlerTexture(e.specularEnvMap,n.textureIndex)}},SPECULARENVINTENSITY:{get:function(t,e,n){return e.specularEnvIntensity}},SPECULARENVMAPMIPCOUNT:{get:function(t,e,n){var i=e.specularEnvMap;return i?i.mipmapCount:1}},GLOSSINESS:{get:function(t,e,n){return e.glossiness}},ALPHACUTOFF:{get:function(t,e,n){return e.alphaCutoff}},EXPOSURE:{get:function(t,e,n){return e.exposure}},GAMMAFACTOR:{get:function(t,e,n){return e.gammaFactor}},MORPHWEIGHTS:{isDependMesh:!0,notSupportInstanced:!0,get:function(t,e,n){var i=t.geometry;if(i.isMorphGeometry&&i.weights)return i.weights}}};[["POSITION","vertices"],["NORMAL","normals"],["TANGENT","tangents"]].forEach((function(t){for(var e=0;e<8;e++)we["MORPH"+t[0]+e]={get:function(t,e){return function(n,i,r){var s=n.geometry;if(s.isMorphGeometry&&s.targets&&s.targets[t]){var a=s._originalMorphIndices?s._originalMorphIndices[e]:e,o=s.targets[t][a],u="_target_".concat(t,"_").concat(e);return s[u]!==a&&o&&(o.isDirty=!0,s[u]=a),o}}}(t[1],e)}})),[["DIFFUSE","diffuse"],["SPECULAR","specular"],["EMISSION","emission"],["AMBIENT","ambient"]].forEach((function(t){var e=Ee(t,2),n=e[0],i=e[1];we[n]={get:function(t,e,n){return we.handlerColorOrTexture(e[i],n.textureIndex)}},we["".concat(n,"UV")]={get:function(t,e,n){return we.handlerUV(e[i])}}})),[["NORMALMAP","normalMap"],["PARALLAXMAP","parallaxMap"],["BASECOLORMAP","baseColorMap"],["METALLICMAP","metallicMap"],["ROUGHNESSMAP","roughnessMap"],["METALLICROUGHNESSMAP","metallicRoughnessMap"],["OCCLUSIONMAP","occlusionMap"],["SPECULARGLOSSINESSMAP","specularGlossinessMap"],["LIGHTMAP","lightMap"]].forEach((function(t){var e=Ee(t,2),n=e[0],i=e[1];we[n]={get:function(t,e,n){return we.handlerTexture(e[i],n.textureIndex)}},we["".concat(n,"UV")]={get:function(t,e,n){return we.handlerUV(e[i])}}})),[["TRANSPARENCY","transparency"]].forEach((function(t){var e=Ee(t,2),n=e[0],i=e[1];we[n]={get:function(t,e,n){var r=e[i];return r&&r.isTexture?we.handlerTexture(r,n.textureIndex):null!=r?r:1}},we["".concat(n,"UV")]={get:function(t,e,n){return we.handlerUV(e[i])}}}));var Ce=we,Pe=C.a.LEQUAL,He=C.a.BACK,De=C.a.FRONT,Fe=C.a.FRONT_AND_BACK,Ue=C.a.ZERO,Ge=C.a.FUNC_ADD,Be=C.a.ONE,Ve=C.a.SRC_ALPHA,Xe=C.a.ONE_MINUS_SRC_ALPHA,je={isBlankInfo:!0,get:function(){}},ke=s.a.create({isMaterial:!0,className:"Material",name:null,shaderCacheId:null,lightType:"NONE",wireframe:!1,depthTest:!0,sampleAlphaToCoverage:!1,depthMask:!0,depthRange:[0,1],depthFunc:Pe,_cullFace:!0,normalMap:null,parallaxMap:null,normalMapScale:1,ignoreTranparent:!1,gammaCorrection:!1,usePhysicsLight:!1,isDiffuesEnvAndAmbientLightWorkTogether:!1,userData:null,renderOrder:0,_premultiplyAlpha:!0,premultiplyAlpha:{get:function(){return this._premultiplyAlpha},set:function(t){this._premultiplyAlpha=t,this.transparent&&this.setDefaultTransparentBlend()}},gammaOutput:{get:function(){return m.a.warnOnce("Matrial.gammaOutput","material.gammaOutput has deprecated. Use material.gammaCorrection instead."),this.gammaCorrection},set:function(t){m.a.warnOnce("Matrial.gammaOutput","material.gammaOutput has deprecated. Use material.gammaCorrection instead."),this.gammaCorrection=t}},gammaFactor:2.2,castShadows:!0,receiveShadows:!0,uvMatrix:null,uvMatrix1:null,cullFace:{get:function(){return this._cullFace},set:function(t){this._cullFace=t,t?this.cullFaceType=this._cullFaceType:this._side=Fe}},_cullFaceType:He,cullFaceType:{get:function(){return this._cullFaceType},set:function(t){this._cullFaceType=t,this._cullFace&&(t===He?this._side=De:t===De&&(this._side=He))}},_side:De,side:{get:function(){return this._side},set:function(t){this._side!==t&&(this._side=t,t===Fe?this._cullFace=!1:(this._cullFace=!0,t===De?this._cullFaceType=He:t===He&&(this._cullFaceType=De)))}},blend:!1,blendEquation:Ge,blendEquationAlpha:Ge,blendSrc:Be,blendDst:Ue,blendSrcAlpha:Be,blendDstAlpha:Ue,isDirty:!1,transparency:1,_transparent:!1,transparent:{get:function(){return this._transparent},set:function(t){this._transparent!==t&&(this._transparent=t,t?this.setDefaultTransparentBlend():(this.blend=!1,this.depthMask=!0))}},setDefaultTransparentBlend:function(){this.blend=!0,this.depthMask=!1,this.premultiplyAlpha?(this.blendSrc=Be,this.blendDst=Xe,this.blendSrcAlpha=Be,this.blendDstAlpha=Xe):(this.blendSrc=Ve,this.blendDst=Xe,this.blendSrcAlpha=Ve,this.blendDstAlpha=Xe)},alphaCutoff:0,useHDR:!1,exposure:1,needBasicUnifroms:!0,needBasicAttributes:!0,constructor:function(t){this.id=d.a.generateUUID(this.className),this.uniforms={},this.attributes={},Object.assign(this,t),this.needBasicAttributes&&this.addBasicAttributes(),this.needBasicUnifroms&&this.addBasicUniforms()},addBasicAttributes:function(){var t=this.attributes;this._copyProps(t,{a_position:"POSITION",a_normal:"NORMAL",a_tangent:"TANGENT",a_texcoord0:"TEXCOORD_0",a_texcoord1:"TEXCOORD_1",a_color:"COLOR_0",a_skinIndices:"SKININDICES",a_skinWeights:"SKINWEIGHTS"}),["POSITION","NORMAL","TANGENT"].forEach((function(e){for(var n=e.slice(0,1)+e.slice(1).toLowerCase(),i=0;i<8;i++){var r="a_morph"+n+i;void 0===t[r]&&(t[r]="MORPH"+e+i)}}))},addBasicUniforms:function(){this._copyProps(this.uniforms,{u_modelMatrix:"MODEL",u_viewMatrix:"VIEW",u_projectionMatrix:"PROJECTION",u_modelViewMatrix:"MODELVIEW",u_modelViewProjectionMatrix:"MODELVIEWPROJECTION",u_viewInverseNormalMatrix:"VIEWINVERSEINVERSETRANSPOSE",u_normalMatrix:"MODELVIEWINVERSETRANSPOSE",u_normalWorldMatrix:"MODELINVERSETRANSPOSE",u_cameraPosition:"CAMERAPOSITION",u_rendererSize:"RENDERERSIZE",u_logDepth:"LOGDEPTH",u_ambientLightsColor:"AMBIENTLIGHTSCOLOR",u_directionalLightsColor:"DIRECTIONALLIGHTSCOLOR",u_directionalLightsInfo:"DIRECTIONALLIGHTSINFO",u_directionalLightsShadowMap:"DIRECTIONALLIGHTSSHADOWMAP",u_directionalLightsShadowMapSize:"DIRECTIONALLIGHTSSHADOWMAPSIZE",u_directionalLightsShadowBias:"DIRECTIONALLIGHTSSHADOWBIAS",u_directionalLightSpaceMatrix:"DIRECTIONALLIGHTSPACEMATRIX",u_pointLightsPos:"POINTLIGHTSPOS",u_pointLightsColor:"POINTLIGHTSCOLOR",u_pointLightsInfo:"POINTLIGHTSINFO",u_pointLightsRange:"POINTLIGHTSRANGE",u_pointLightsShadowBias:"POINTLIGHTSSHADOWBIAS",u_pointLightsShadowMap:"POINTLIGHTSSHADOWMAP",u_pointLightSpaceMatrix:"POINTLIGHTSPACEMATRIX",u_pointLightCamera:"POINTLIGHTCAMERA",u_spotLightsPos:"SPOTLIGHTSPOS",u_spotLightsDir:"SPOTLIGHTSDIR",u_spotLightsColor:"SPOTLIGHTSCOLOR",u_spotLightsCutoffs:"SPOTLIGHTSCUTOFFS",u_spotLightsInfo:"SPOTLIGHTSINFO",u_spotLightsRange:"SPOTLIGHTSRANGE",u_spotLightsShadowMap:"SPOTLIGHTSSHADOWMAP",u_spotLightsShadowMapSize:"SPOTLIGHTSSHADOWMAPSIZE",u_spotLightsShadowBias:"SPOTLIGHTSSHADOWBIAS",u_spotLightSpaceMatrix:"SPOTLIGHTSPACEMATRIX",u_areaLightsPos:"AREALIGHTSPOS",u_areaLightsColor:"AREALIGHTSCOLOR",u_areaLightsWidth:"AREALIGHTSWIDTH",u_areaLightsHeight:"AREALIGHTSHEIGHT",u_areaLightsLtcTexture1:"AREALIGHTSLTCTEXTURE1",u_areaLightsLtcTexture2:"AREALIGHTSLTCTEXTURE2",u_jointMat:"JOINTMATRIX",u_jointMatTexture:"JOINTMATRIXTEXTURE",u_jointMatTextureSize:"JOINTMATRIXTEXTURESIZE",u_positionDecodeMat:"POSITIONDECODEMAT",u_normalDecodeMat:"NORMALDECODEMAT",u_uvDecodeMat:"UVDECODEMAT",u_uv1DecodeMat:"UV1DECODEMAT",u_morphWeights:"MORPHWEIGHTS",u_normalMapScale:"NORMALMAPSCALE",u_emission:"EMISSION",u_transparency:"TRANSPARENCY",u_uvMatrix:"UVMATRIX_0",u_uvMatrix1:"UVMATRIX_1",u_fogColor:"FOGCOLOR",u_fogInfo:"FOGINFO",u_alphaCutoff:"ALPHACUTOFF",u_exposure:"EXPOSURE",u_gammaFactor:"GAMMAFACTOR"}),this.addTextureUniforms({u_normalMap:"NORMALMAP",u_parallaxMap:"PARALLAXMAP",u_emission:"EMISSION",u_transparency:"TRANSPARENCY"})},addTextureUniforms:function(t){var e={};for(var n in t){var i=t[n];e[n]=i,e["".concat(n,".texture")]=i,e["".concat(n,".uv")]="".concat(i,"UV")}this._copyProps(this.uniforms,e)},getRenderOption:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.lightType;e["LIGHT_TYPE_".concat(n)]=1,e.SIDE=this.side,"NONE"!==n&&(e.HAS_LIGHT=1),this.premultiplyAlpha&&(e.PREMULTIPLY_ALPHA=1);var i=this._textureOption.reset(e);return e.HAS_LIGHT&&(e.HAS_NORMAL=1,i.add(this.normalMap,"NORMAL_MAP",(function(){1!==t.normalMapScale&&(e.NORMAL_MAP_SCALE=1)}))),i.add(this.parallaxMap,"PARALLAX_MAP"),i.add(this.emission,"EMISSION_MAP"),i.add(this.transparency,"TRANSPARENCY_MAP"),this.ignoreTranparent&&(e.IGNORE_TRANSPARENT=1),this.alphaCutoff>0&&(e.ALPHA_CUTOFF=1),this.useHDR&&(e.USE_HDR=1),this.gammaCorrection&&(e.GAMMA_CORRECTION=1),this.receiveShadows&&(e.RECEIVE_SHADOWS=1),this.castShadows&&(e.CAST_SHADOWS=1),this.uvMatrix&&(e.UV_MATRIX=1),this.uvMatrix1&&(e.UV_MATRIX1=1),this.usePhysicsLight&&(e.USE_PHYSICS_LIGHT=1),this.isDiffuesEnvAndAmbientLightWorkTogether&&(e.IS_DIFFUESENV_AND_AMBIENTLIGHT_WORK_TOGETHER=1),i.update(),e},_textureOption:{uvTypes:null,option:null,reset:function(t){return this.option=t,this.uvTypes={},this},add:function(t,e,n){if(t&&t.isTexture){var i=this.uvTypes,r=this.option,s=t.uv||0;i[s]=1,r[e]=s,t.isCubeTexture&&(r["".concat(e,"_CUBE")]=1),n&&n(t)}return this},update:function(){var t=[0,1],e=this.uvTypes,n=this.option;for(var i in e)-1!==t.indexOf(Number(i))?n["HAS_TEXCOORD".concat(i)]=1:(m.a.warnOnce("Material._textureOption.update(".concat(i,")"),"uv_".concat(i," not support!")),n.HAS_TEXCOORD0=1);return this}},getInstancedUniforms:function(){var t=this._instancedUniforms;if(!this._instancedUniforms){var e=this.uniforms;for(var n in t=this._instancedUniforms=[],e){var i=this.getUniformInfo(n);i.isDependMesh&&!i.notSupportInstanced&&t.push({name:n,info:i})}}return t},getUniformData:function(t,e,n){return this.getUniformInfo(t).get(e,this,n)},getAttributeData:function(t,e,n){return this.getAttributeInfo(t).get(e,this,n)},getUniformInfo:function(t){return this.getInfo("uniforms",t)},getAttributeInfo:function(t){return this.getInfo("attributes",t)},getInfo:function(t,e){var n=this[t][e];return"string"==typeof n&&(n=Ce[n]),n&&n.get||(m.a.warnOnce("material.getInfo-"+e,"Material.getInfo: no this semantic:"+e),n=je),n},clone:function(){var t=new this.constructor;for(var e in this)"id"!==e&&(t[e]=this[e]);return t},destroyTextures:function(){this.getTextures().forEach((function(t){t.destroy()}))},getTextures:function(){var t=[];for(var e in this){var n=this[e];n&&n.isTexture&&t.push(n)}return t},_copyProps:function(t,e){for(var n in e)void 0===t[n]&&(t[n]=e[n])}}),ze=s.a.create({Extends:ke,isBasicMaterial:!0,className:"BasicMaterial",lightType:"BLINN-PHONG",diffuse:null,ambient:null,specular:null,emission:null,specularEnvMap:null,specularEnvMatrix:null,reflectivity:0,refractRatio:0,refractivity:0,shininess:32,usedUniformVectors:11,constructor:function(t){this.diffuse=new v.a(.5,.5,.5),this.specular=new v.a(1,1,1),this.emission=new v.a(0,0,0),ze.superclass.constructor.call(this,t),Object.assign(this.uniforms,{u_diffuse:"DIFFUSE",u_specular:"SPECULAR",u_ambient:"AMBIENT",u_shininess:"SHININESS",u_reflectivity:"REFLECTIVITY",u_refractRatio:"REFRACTRATIO",u_refractivity:"REFRACTIVITY",u_specularEnvMap:"SPECULARENVMAP",u_specularEnvMatrix:"SPECULARENVMATRIX"}),this.addTextureUniforms({u_diffuse:"DIFFUSE",u_specular:"SPECULAR",u_ambient:"AMBIENT"})},getRenderOption:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};ze.superclass.getRenderOption.call(this,t);var e=this._textureOption.reset(t),n=this.lightType;"PHONG"!==n&&"BLINN-PHONG"!==n||(t.HAS_SPECULAR=1);var i=this.diffuse;return i&&i.isTexture&&(i.isCubeTexture?t.DIFFUSE_CUBE_MAP=1:e.add(this.diffuse,"DIFFUSE_MAP")),t.HAS_LIGHT&&(e.add(this.specular,"SPECULAR_MAP"),e.add(this.ambient,"AMBIENT_MAP"),e.add(this.specularEnvMap,"SPECULAR_ENV_MAP")),e.update(),t}}),qe=ze,We=C.a.POSITION,Ye=C.a.NORMAL,Ze=C.a.DEPTH,Ke=C.a.DISTANCE,Qe=C.a.NONE,Je=s.a.create({Extends:qe,isGeometryMaterial:!0,className:"GeometryMaterial",vertexType:We,lightType:Qe,writeOriginData:!1,constructor:function(t){Je.superclass.constructor.call(this,t),Object.assign(this.uniforms,{u_cameraFar:"CAMERAFAR",u_cameraNear:"CAMERANEAR",u_cameraType:"CAMERATYPE"})},getRenderOption:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(Je.superclass.getRenderOption.call(this,t),t["VERTEX_TYPE_".concat(this.vertexType)]=1,this.vertexType){case We:t.HAS_FRAG_POS=1;break;case Ye:t.HAS_NORMAL=1;break;case Ze:break;case Ke:t.HAS_FRAG_POS=1}return this.writeOriginData&&(t.WRITE_ORIGIN_DATA=1),t}}),$e=Je,tn=s.a.create({Extends:O,isOrthographicCamera:!0,className:"OrthographicCamera",_left:-1,left:{get:function(){return this._left},set:function(t){this._needUpdateProjectionMatrix=!0,this._isGeometryDirty=!0,this._left=t}},_right:1,right:{get:function(){return this._right},set:function(t){this._needUpdateProjectionMatrix=!0,this._isGeometryDirty=!0,this._right=t}},_bottom:-1,bottom:{get:function(){return this._bottom},set:function(t){this._needUpdateProjectionMatrix=!0,this._isGeometryDirty=!0,this._bottom=t}},_top:1,top:{get:function(){return this._top},set:function(t){this._needUpdateProjectionMatrix=!0,this._isGeometryDirty=!0,this._top=t}},_near:.1,near:{get:function(){return this._near},set:function(t){this._needUpdateProjectionMatrix=!0,this._isGeometryDirty=!0,this._near=t}},_far:1,far:{get:function(){return this._far},set:function(t){this._needUpdateProjectionMatrix=!0,this._isGeometryDirty=!0,this._far=t}},constructor:function(t){tn.superclass.constructor.call(this,t),this.updateProjectionMatrix()},updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},getGeometry:function(t){if(t||!this._geometry||this._isGeometryDirty){this._isGeometryDirty=!1;var e=new Z,n=[this.left,this.bottom,-this.near],i=[this.right,this.bottom,-this.near],r=[this.right,this.top,-this.near],s=[this.left,this.top,-this.near],a=[this.left,this.bottom,-this.far],o=[this.right,this.bottom,-this.far],u=[this.right,this.top,-this.far],c=[this.left,this.top,-this.far];e.addRect(a,o,u,c),e.addRect(o,i,r,u),e.addRect(i,n,s,r),e.addRect(n,a,c,s),e.addRect(c,u,r,s),e.addRect(n,i,o,a),this._geometry=e}return this._geometry}}),en=tn,nn=C.a.DEPTH,rn=C.a.BACK,sn=null,an=new v.a(1,1,1),on=new o.a,un=function(t){return t.material.castShadows},cn=s.a.create({isLightShadow:!0,className:"LightShadow",light:null,renderer:null,framebuffer:null,camera:null,width:1024,height:1024,maxBias:.05,minBias:.005,cameraInfo:null,debug:!1,constructor:function(t){this.id=d.a.generateUUID(this.className),Object.assign(this,t)},createFramebuffer:function(){this.framebuffer||(this.framebuffer=new re(this.renderer,{width:this.width,height:this.height}),this.debug&&this.showShadowMap())},updateLightCamera:function(t){this.light.isDirectionalLight?this.updateDirectionalLightCamera(t):this.light.isSpotLight&&this.updateSpotLightCamera(t)},updateDirectionalLightCamera:function(t){var e=this.light;if(this.camera.lookAt(e.direction),this.cameraInfo)this.updateCustumCamera(this.cameraInfo);else{var n=t.getGeometry();if(n){this.camera.updateViewMatrix(),on.multiply(this.camera.viewMatrix,t.worldMatrix);var i=n.getBounds(on);this.camera.near=-i.zMax,this.camera.far=-i.zMin,this.camera.left=i.xMin,this.camera.right=i.xMax,this.camera.bottom=i.yMin,this.camera.top=i.yMax}}this.camera.updateViewMatrix()},updateCustumCamera:function(t){for(var e in t)this.camera[e]=t[e]},updateSpotLightCamera:function(t){var e=this.light;this.camera.lookAt(e.direction),this.cameraInfo?this.updateCustumCamera(this.cameraInfo):(this.camera.fov=2*e.outerCutoff,this.camera.near=.01,this.camera.far=t.far,this.camera.aspect=1),this.camera.updateViewMatrix()},createCamera:function(t){this.camera||(this.light.isDirectionalLight?this.camera=new en:this.light.isSpotLight&&(this.camera=new Q),this.camera.addTo(this.light)),this._cameraMatrixVersion!==t.matrixVersion&&(this.updateLightCamera(t),this._cameraMatrixVersion=t.matrixVersion)},createShadowMap:function(t){this.createFramebuffer(),this.createCamera(t);var e=this.renderer,n=this.framebuffer,i=this.camera;sn||(sn=new $e({vertexType:nn,side:rn,writeOriginData:!0})),n.bind(),e.state.viewport(0,0,this.width,this.height),e.clear(an),i.updateViewProjectionMatrix(),Ce.setCamera(i),e.forceMaterial=sn,this.renderShadowScene(e),delete e.forceMaterial,n.unbind(),Ce.setCamera(t),e.viewport()},renderShadowScene:function(t){t.renderList.traverse((function(e){un(e)&&t.renderMesh(e)}),(function(e){t.renderInstancedMeshes(e.filter((function(t){return un(t)})))}))},showShadowMap:function(){var t=this;this.renderer.on("afterRender",(function(){t.framebuffer.render(0,.7,.3,.3)}))}}),hn=C.a.DISTANCE,fn=C.a.BACK,ln=C.a.TEXTURE_CUBE_MAP,dn=C.a.TEXTURE0,mn=C.a.TEXTURE_CUBE_MAP_POSITIVE_X,_n=C.a.NEAREST,pn=C.a.FRAMEBUFFER,gn=C.a.FRAMEBUFFER_COMPLETE,vn=null,En=new v.a(0,0,0,0),Tn=new c.a,Mn=[[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,-1,0,0,-1,0,0,0,1,0,0,-1,0,-1,0,0,-1,0]],An=function(t,e){if(t.material.castShadows){if(!t.frustumTest)return!0;if(e.isMeshVisible(t))return!0}return!1},In=s.a.create({isLightShadow:!0,className:"CubeLightShadow",Extends:cn,light:null,renderer:null,framebuffer:null,camera:null,width:1024,height:1024,maxBias:.05,minBias:.005,debug:!1,constructor:function(t){In.superclass.constructor.call(this,t)},createFramebuffer:function(){if(!this.framebuffer){this.framebuffer=new re(this.renderer,{target:ln,width:1024,height:1024,createTexture:function(){var t=this.state.gl,e=new fe({image:[null,null,null,null,null,null],type:this.type,format:this.format,internalFormat:this.internalFormat,magFilter:_n,minFilter:_n,width:1024,height:1024});return t.checkFramebufferStatus(pn)!==gn&&m.a.warn("Framebuffer is not complete",t.checkFramebufferStatus(pn)),e},bindTexture:function(t){t=t||0;var e=this.state,n=e.gl,i=this.texture.getGLTexture(e);e.activeTexture(dn+et.MAX_TEXTURE_INDEX),e.bindTexture(this.target,i),n.framebufferTexture2D(pn,this.attachment,mn+t,i,0)}})}},updateLightCamera:function(t){this.camera.fov=90,this.camera.near=t.near,this.camera.far=t.far,this.camera.aspect=1,this.camera.updateViewMatrix()},createCamera:function(t){this.camera||(this.camera=new Q,this.updateLightCamera(t))},createShadowMap:function(t){this.createFramebuffer(),this.createCamera(t);var e=this.renderer,n=this.framebuffer,i=this.camera;vn||(vn=new $e({vertexType:hn,side:fn,writeOriginData:!1})),n.bind(),e.state.viewport(0,0,n.width,n.height),this.light.worldMatrix.getTranslation(i.position);for(var r=0;r<6;r++)n.bindTexture(r),Tn.fromArray(Mn[0],3*r).add(i.position),i.up.fromArray(Mn[1],3*r),i.lookAt(Tn),i.updateViewProjectionMatrix(),e.clear(En),Ce.setCamera(i),e.forceMaterial=vn,this.renderShadowScene(e);i.matrix.identity(),i.updateViewProjectionMatrix(),delete e.forceMaterial,n.unbind(),Ce.setCamera(t),e.viewport()},renderShadowScene:function(t){var e=t.renderList,n=this.camera;e.traverse((function(e){An(e,n)&&t.renderMesh(e)}),(function(e){var i=e.filter((function(t){return An(t,n)}));t.renderInstancedMeshes(i)}))}}),Ln=In,On=s.a.create({Extends:M,isPointLight:!0,className:"PointLight",constructor:function(t){On.superclass.constructor.call(this,t)},createShadowMap:function(t,e){this.shadow&&(this.lightShadow||(this.lightShadow=new Ln({light:this,renderer:t}),"minBias"in this.shadow&&(this.lightShadow.minBias=this.shadow.minBias),"maxBias"in this.shadow&&(this.lightShadow.maxBias=this.shadow.maxBias)),this.lightShadow.createShadowMap(e))}}),Sn=On,Rn=new o.a,yn=new c.a,xn=s.a.create({Extends:M,isDirectionalLight:!0,className:"DirectionalLight",constructor:function(t){this.direction=new c.a(0,0,1),xn.superclass.constructor.call(this,t)},createShadowMap:function(t,e){this.shadow&&(this.lightShadow||(this.lightShadow=new cn({light:this,renderer:t,width:this.shadow.width||t.width,height:this.shadow.height||t.height,debug:this.shadow.debug,cameraInfo:this.shadow.cameraInfo}),"minBias"in this.shadow&&(this.lightShadow.minBias=this.shadow.minBias),"maxBias"in this.shadow&&(this.lightShadow.maxBias=this.shadow.maxBias)),this.lightShadow.createShadowMap(e))},getWorldDirection:function(){return yn.copy(this.direction).transformDirection(this.worldMatrix).normalize(),yn},getViewDirection:function(t){var e=t.getModelViewMatrix(this,Rn);return yn.copy(this.direction).transformDirection(e).normalize(),yn}}),Nn=xn,bn=new o.a,wn=new c.a,Cn=s.a.create({Extends:M,isSpotLight:!0,className:"SpotLight",_cutoffCos:.9763,_cutoff:12.5,cutoff:{get:function(){return this._cutoff},set:function(t){this._cutoff=t,this._cutoffCos=Math.cos(d.a.degToRad(t))}},_outerCutoffCos:.9537,_outerCutoff:17.5,outerCutoff:{get:function(){return this._outerCutoff},set:function(t){this._outerCutoff=t,this._outerCutoffCos=Math.cos(d.a.degToRad(t))}},constructor:function(t){this.direction=new c.a(0,0,1),Cn.superclass.constructor.call(this,t)},createShadowMap:function(t,e){this.shadow&&(this.lightShadow||(this.lightShadow=new cn({light:this,renderer:t,width:this.shadow.width||t.width,height:this.shadow.height||t.height,debug:this.shadow.debug,cameraInfo:this.shadow.cameraInfo}),"minBias"in this.shadow&&(this.lightShadow.minBias=this.shadow.minBias),"maxBias"in this.shadow&&(this.lightShadow.maxBias=this.shadow.maxBias)),this.lightShadow.createShadowMap(e))},getWorldDirection:function(){return wn.copy(this.direction).transformDirection(this.worldMatrix).normalize(),wn},getViewDirection:function(t){var e=t.getModelViewMatrix(this,bn);return wn.copy(this.direction).transformDirection(e).normalize(),wn}}),Pn=Cn,Hn=s.a.create({Extends:ke,isShaderMaterial:!0,className:"ShaderMaterial",vs:"",fs:"",useHeaderCache:!1,constructor:function(t){Hn.superclass.constructor.call(this,t)},getRenderOption:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(Hn.superclass.getRenderOption.call(this,t),this.getCustomRenderOption){var e=this.getCustomRenderOption({});for(var n in e)t["HILO_CUSTUM_OPTION_".concat(n)]=e[n]}return t},getCustomRenderOption:null}),Dn=Hn,Fn=n(15),Un=n.n(Fn),Gn=s.a.create({Extends:Z,isMorphGeometry:!0,className:"MorphGeometry",isStatic:!1,weights:[],targets:null,constructor:function(t){Gn.superclass.constructor.call(this,t),this.weights=this.weights||[]},update:function(t,e){this.weights=t,this._originalMorphIndices=e},clone:function(){return Z.prototype.clone.call(this,{targets:this.targets,weights:this.weights})},getRenderOption:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Gn.superclass.getRenderOption.call(this,e),this.targets&&(this._maxMorphTargetCount||(this._maxMorphTargetCount=Math.floor(8/Object.keys(this.targets).length)),Object(r.each)(this.targets,(function(n,i){e.MORPH_TARGET_COUNT=Math.min(n.length,t._maxMorphTargetCount),"vertices"===i?e.MORPH_HAS_POSITION=1:"normals"===i?e.MORPH_HAS_NORMAL=1:"tangents"===i&&(e.MORPH_HAS_TANGENT=1)}))),e}}),Bn=Gn,Vn={POSITION:{name:"vertices",decodeMatName:"positionDecodeMat"},TEXCOORD_0:{name:"uvs",decodeMatName:"uvDecodeMat"},TEXCOORD_1:{name:"uvs1",decodeMatName:"uv1DecodeMat"},NORMAL:{name:"normals",decodeMatName:"normalDecodeMat"},JOINT:{name:"skinIndices"},JOINTS_0:{name:"skinIndices"},WEIGHT:{name:"skinWeights"},WEIGHTS_0:{name:"skinWeights"},TANGENT:{name:"tangents"},COLOR_0:{name:"colors"}},Xn={Geometry:Z,GeometryData:w};var jn={_decodeTotalTime:0,wasmURL:"",workerURL:"",useWASM:!0,useWebWorker:!0,useAuto:!0,init:function(){return jn.useAuto?Un.a.initWASM(jn.wasmURL,jn.memPages):jn.useWebWorker?Un.a.initWorker(jn.workerURL):jn.useWASM?Un.a.initWASM(jn.wasmURL,jn.memPages):Promise.resolve()},parse:function(t,e,n,i){var r=Date.now(),s=e.bufferViews[t.bufferView],a=jn.wasmURL,o=jn.workerURL,u=jn.useAuto,c=jn.useWASM,h=jn.useWebWorker,f=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);function l(e){jn._decodeTotalTime+=Date.now()-r;var n=e.toHilo3dGeometry(Xn,i.primitive._geometry);return t.targets&&(n=function(t,e,n){if(!n.isMorphGeometry){var i=new Bn;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&"id"!==r&&(i[r]=n[r]);i.targets={},n=i}for(var s=n.targets,a=0;a<t.targets.length;a++){var o=t.targets[a];for(var u in o)if(u in Vn){var c=o[u],h=Vn[u].name;s[h]||(s[h]=[]);var f=e.attrs[c];s[h].push(new w(f.data,f.itemCount))}}return t.weights?n.weights=t.weights:n.weights=new Float32Array(t.targets.length),n}(t,e,n)),n}return u?Un.a.decompress(f,a,o).then(l):h?Un.a.decompressWithWorker(f,c,a,o).then(l):l(c?Un.a.decompressWithWASM(f,a):Un.a.decompressWithJS(f))},freeMemory:function(){Un.a.destory()}},kn=jn,zn=C.a.SAMPLER_2D,qn={unQuantizeData:function(t,e){if(!e)return t;var n=Math.sqrt(e.length),i=n-1,r=new Float32Array(t.length),s=[];return t.traverse((function(t,a){t.toArray?t.toArray(s):s[0]=t;for(var o=a*i,u=0;u<n;u++){r[o+u]=0;for(var c=0;c<n;c++){var h=c===i?1:s[c];r[o+u]+=e[c*n+u]*h}}})),t.data=r,t.stride=0,t.offset=0,t},parse:function(t,e,n,i){var r=t.decodeMatrix;return i.isDecode?n=qn.unQuantizeData(n,r):n.decodeMat=r,n}},Wn={parseOnEnd:function(t,e,n){if(!n.anim||e.isMultiAnim)return n;for(var i in t){var r=t[i];n.anim.addClip(i,r[0],r[1])}return n}},Yn=Wn,Zn={parse:function(t,e,n){return t.center=t.max.map((function(e,n){return(e+t.min[n])/2})),t.width=t.max[0]-t.min[0],t.height=t.max[1]-t.min[1],t.depth=t.max[2]-t.min[2],t.size=Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2)+Math.pow(t.depth,2)),n.bounds=t,n}},Kn={getUsedTextureNameMap:function(t,e){t.diffuseTexture&&(e[t.diffuseTexture.index]=!0),t.specularGlossinessTexture&&(e[t.specularGlossinessTexture.index]=!0)},parse:function(t,e,n){return t.diffuseFactor&&n.baseColor.fromArray(t.diffuseFactor),t.diffuseTexture&&(n.baseColorMap=e.getTexture(t.diffuseTexture)),t.specularFactor&&(n.specular.fromArray(t.specularFactor),n.specular.a=1),"glossinessFactor"in t&&(n.glossiness=t.glossinessFactor),t.specularGlossinessTexture&&(n.specularGlossinessMap=e.getTexture(t.specularGlossinessTexture)),n.isSpecularGlossiness=!0,n}},Qn={parse:function(t,e,n){if(!e.isUseExtension(e.json,"KHR_lights_punctual")||!e.json.extensions.KHR_lights_punctual.lights)return n;var i,r=e.json.extensions.KHR_lights_punctual.lights[t.light];if(!r)return n;var s=new v.a(1,1,1,1);r.color&&(s.r=r.color[0],s.g=r.color[1],s.b=r.color[2]);var a=void 0!==r.intensity?r.intensity:1,o=r.name||"",u=r.spot||{},c=void 0!==u.innerConeAngle?d.a.radToDeg(u.innerConeAngle):0,h=void 0!==u.outerConeAngle?d.a.radToDeg(u.outerConeAngle):45,f=r.range||0;switch(r.type){case"directional":(i=new Nn({color:s,amount:a,name:o,range:f})).direction.set(0,0,-1);break;case"point":i=new Sn({color:s,amount:a,name:o,range:f});break;case"spot":(i=new Pn({color:s,amount:a,name:o,range:f,cutoff:c,outerCutoff:h})).direction.set(0,0,-1);break;default:return n}return i&&(n.addChild(i),e.lights.push(i)),n}},Jn={init:function(t,e){var n=[],i=(e.json.extensions||{}).KHR_techniques_webgl||{},s=i.programs||[],a=i.shaders||[],o=i.techniques||[];return e.shaders={},a.forEach((function(i,s){var a=r.getRelativePath(e.src,i.uri);e.preHandlerShaderURI&&(a=e.preHandlerShaderURI(a,s,i)),n.push(t.loadRes(a).then((function(t){e.shaders[s]=t})))})),e.programs={},s.forEach((function(t,n){e.programs[n]=Object.assign({},t)})),e.techniques={},o.forEach((function(t,n){var i=(e.techniques[n]=Object.assign({},t)).textureInfos={},r=t.uniforms||{};for(var s in r){var a=r[s];a.type===zn&&(i[s]=a.value||{})}})),Promise.all(n)},getUsedTextureNameMap:function(t,e,n){var i=n.techniques[t.technique],r=t.values||{};if(i){var s=i.textureInfos;for(var a in s){var o=void 0;r[a]&&void 0!==r[a].index?o=r[a].index:void 0!==s[a].index&&(o=s[a].index),void 0!==o&&(e[s[a].index]=!0)}}},parse:function(t,e,n){var i=e.textures||[],r=e.techniques[t.technique];if(!r)return n;var s=e.programs[r.program];if(!s)return n;var a=e.shaders[s.fragmentShader],o=e.shaders[s.vertexShader],u=r.uniforms||{},c=r.attributes||{},h=t.values||{},f={},l={},d=function(t){var n=u[t]||{},r=h[t];void 0===r&&(r=n.value);var s=void 0;if(void 0!==r)if(n.type===zn){var a=r.index||0;s={get:function(t,e,n){return Ce.handlerTexture(i[a],n.textureIndex)}}}else s={get:function(){return r}};else if(n.semantic&&Ce[n.semantic]){var o,c=Ce[n.semantic],f=n.node;s=void 0!==f?{get:function(t,n,i){return void 0===o&&(o=e.node.getChildByFn((function(t){return t.animationId===f}))||t),c.get(o,n,i)}}:n.semantic}else m.a.warn("KHR_techniques_webgl: no ".concat(t," value found!")),s=Ce.blankInfo;l[t]=s};for(var _ in u)d(_);for(var p in c){var g=c[p]||{};g.semantic&&(f[p]=g.semantic)}return new Dn({needBasicUnifroms:!1,needBasicAttributes:!1,vs:o,fs:a,attributes:f,uniforms:l})}},$n=new Float32Array(2),ti=s.a.create({isFog:!0,className:"Fog",mode:"LINEAR",start:5,end:10,density:.1,constructor:function(t){this.id=d.a.generateUUID(this.className),this.color=new v.a(1,1,1,1),Object.assign(this,t)},getInfo:function(){return"LINEAR"===this.mode?($n[0]=this.start,$n[1]=this.end,$n):this.density},getRenderOption:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["FOG_".concat(this.mode)]=1,t}}),ei=n(16),ni=new ei.a,ii=new o.a,ri=s.a.create({Extends:g,isMesh:!0,className:"Mesh",geometry:null,material:null,useInstanced:!1,frustumTest:!0,constructor:function(t){ri.superclass.constructor.call(this,t)},clone:function(t){var e=g.prototype.clone.call(this,t);return Object.assign(e,{geometry:this.geometry,material:this.material}),e},raycast:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.visible)return null;var n=this.geometry,i=this.material,r=this.worldMatrix;if(n&&i){ii.invert(r),ni.copy(t),ni.transformMat4(ii);var s=n.raycast(ni,i.side,e);if(s)return s.forEach((function(t){t.transformMat4(r)})),s}return null},getRenderOption:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.geometry.getRenderOption(t),t},isDestroyed:{get:function(){return this._isDestroyed}},destroy:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this._isDestroyed)return this;this.removeFromParent();var n=t.resourceManager;return n.destroyMesh(this),this.material&&e&&this.material.destroyTextures(),this.off(),this.geometry=null,this.material=null,this._isDestroyed=!0,this}}),si=ri,ai=new o.a,oi=new o.a,ui=s.a.create({Extends:si,isSkinedMesh:!0,className:"SkinedMesh",useInstanced:!1,jointMatTexture:null,frustumTest:!1,skeleton:null,constructor:function(t){ui.superclass.constructor.call(this,t)},getJointMat:function(){var t=this;if(this.skeleton&&!(this.skeleton.jointCount<=0)){var e=this.skeleton.jointNodeList,n=this.skeleton.inverseBindMatrices,i=16*this.skeleton.jointCount;return this.jointMat&&this.jointMat.length===i||(this.jointMat=new Float32Array(i)),this.clonedFrom?oi.invert(this.clonedFrom.worldMatrix):oi.invert(this.worldMatrix),e.forEach((function(e,i){ai.copy(oi),ai.multiply(e.worldMatrix),ai.multiply(n[i]),ai.toArray(t.jointMat,16*i)})),this.jointMat}},resetJointNamesByNodeName:function(t){this.skeleton.resetJointNamesByNodeName(t)},resetSkinIndices:function(t){var e=this.skeleton;if(e){var n=this.geometry,i=n.skinIndices;if(i){this.material.isDirty=!0,n.isDirty=!0,i.isDirty=!0;var r=new R.a;i.traverse((function(n,s,a){n.elements.forEach((function(n,i){var s=e.jointNames[n],a=t.jointNames.indexOf(s);a>=0?r.elements[i]=a:m.a.warnOnce("SkinedMesh.resetSkinIndices","SkinedMesh.resetSkinIndices: no jointName found!",s)})),i.setByOffset(a,r)}))}}},initJointMatTexture:function(){if(!this.jointMatTexture){var t=this.getJointMat();this.jointMatTexture=new ve({data:t})}return this.jointMatTexture},updateJointMatTexture:function(){if(this.jointMatTexture){var t=this.getJointMat();this.jointMatTexture.data.set(t,0),this.jointMatTexture.needUpdate=!0}else this.initJointMatTexture()},clone:function(t){var e=si.prototype.clone.call(this,t);return Object.assign(e,{useInstanced:this.useInstanced,skeleton:this.skeleton.clone()}),e.clonedFrom=this,e},getRenderOption:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};ui.superclass.getRenderOption.call(this,t);var e=this.skeleton.jointCount;if(e&&(t.JOINT_COUNT=e,et.VERTEX_TEXTURE_FLOAT)){var n=(et.MAX_VERTEX_UNIFORM_VECTORS-22)/4;e>n&&(t.JOINT_MAT_MAP=1)}return t}}),ci=ui,hi=s.a.create({isSkeleton:!0,className:"Skeleton",userData:null,constructor:function(t){this.id=d.a.generateUUID(this.className),this.jointNodeList=[],this.jointNames=[],this.inverseBindMatrices=[],Object.assign(this,t)},jointCount:{get:function(){return this.jointNodeList.length}},_rootNode:null,rootNode:{get:function(){return this._rootNode},set:function(t){this._rootNode=t,t&&this._initJointNodeList()}},_initJointNodeList:function(){var t={};this.rootNode.traverse((function(e){t[e.jointName]=e})),this.jointNodeList=this.jointNames.map((function(e){return t[e]}))},resetJointNamesByNodeName:function(t){var e=this.jointNames;this.jointNodeList.forEach((function(n,i){var r=t.rootNode.getChildByName(n.name);r&&(e[i]=r.jointName)}))},clone:function(t){var e=new hi;return e.copy(this,t),e},copy:function(t,e){return this.inverseBindMatrices=t.inverseBindMatrices,this.jointNames=t.jointNames.slice(),void 0===e&&(e=t.rootNode),this.rootNode=e,this}}),fi=hi,li="1.15.9",di=s.a.create({className:"RenderInfo",isRenderInfo:!0,constructor:function(){this.reset()},addFaceCount:function(t){this._currentFaceCount+=t},addDrawCount:function(t){this._currentDrawCount+=t},reset:function(){this.faceCount=Math.floor(this._currentFaceCount),this.drawCount=Math.floor(this._currentDrawCount),this._currentFaceCount=0,this._currentDrawCount=0}}),mi=new c.a,_i=function(t,e){var n=t.material.renderOrder,i=e.material.renderOrder;if(n!==i)return n-i;var r=t.material._shaderNumId||0,s=e.material._shaderNumId||0;return r!==s?r-s:t._sortRenderZ-e._sortRenderZ},pi=function(t,e){var n=t.material.renderOrder,i=e.material.renderOrder;return n!==i?n-i:e._sortRenderZ-t._sortRenderZ},gi=s.a.create({className:"RenderList",isRenderList:!0,useInstanced:!1,constructor:function(){this.opaqueList=[],this.transparentList=[],this.instancedDict={}},reset:function(){this.opaqueList.length=0,this.transparentList.length=0,this.instancedDict={}},traverse:function(t,e){this.opaqueList.forEach((function(e){t(e)}));var n=this.instancedDict;for(var i in n){var r=n[i];r.length>2&&e?e(r):r.forEach((function(e){t(e)}))}this.transparentList.forEach((function(e){t(e)}))},sort:function(){this.transparentList.sort(pi),this.opaqueList.sort(_i)},addMesh:function(t,e){var n=t.material,i=t.geometry;if(n&&i){if(t.frustumTest&&!e.isMeshVisible(t))return;if(this.useInstanced&&t.useInstanced){var r=this.instancedDict,s=n.id+"_"+i.id,a=r[s];r[s]||(a=r[s]=[]),a.push(t)}else t.worldMatrix.getTranslation(mi),mi.transformMat4(e.viewProjectionMatrix),t._sortRenderZ=mi.z,n.transparent?this.transparentList.push(t):this.opaqueList.push(t)}else m.a.warnOnce("RenderList.addMesh(".concat(t.id,")"),"Mesh must have material and geometry",t)}}),vi=s.a.create({className:"WebGLState",isWebGLState:!0,systemFramebuffer:null,constructor:function(t){this.gl=t,this.reset()},reset:function(){this._dict={},this.activeTextureIndex=null,this.textureUnitDict={},this.currentFramebuffer=null,this.preFramebuffer=null,this._pixelStorei={}},enable:function(t){!0!==this._dict[t]&&(this._dict[t]=!0,this.gl.enable(t))},disable:function(t){!1!==this._dict[t]&&(this._dict[t]=!1,this.gl.disable(t))},bindFramebuffer:function(t,e){this.currentFramebuffer!==e&&(this.preFramebuffer=this.currentFramebuffer,this.currentFramebuffer=e,this.gl.bindFramebuffer(t,e))},bindSystemFramebuffer:function(){this.bindFramebuffer(this.gl.FRAMEBUFFER,this.systemFramebuffer)},useProgram:function(t){this.set1("useProgram",t)},depthFunc:function(t){this.set1("depthFunc",t)},depthMask:function(t){this.set1("depthMask",t)},clear:function(t){this.gl.clear(t)},depthRange:function(t,e){this.set2("depthRange",t,e)},stencilFunc:function(t,e,n){this.set3("stencilFunc",t,e,n)},stencilMask:function(t){this.set1("stencilMask",t)},stencilOp:function(t,e,n){this.set3("stencilOp",t,e,n)},colorMask:function(t,e,n,i){this.set4("colorMask",t,e,n,i)},cullFace:function(t){this.set1("cullFace",t)},frontFace:function(t){this.set1("frontFace",t)},blendFuncSeparate:function(t,e,n,i){this.set4("blendFuncSeparate",t,e,n,i)},blendEquationSeparate:function(t,e){this.set2("blendEquationSeparate",t,e)},pixelStorei:function(t,e){this._pixelStorei[t]!==e&&(this._pixelStorei[t]=e,this.gl.pixelStorei(t,e))},viewport:function(t,e,n,i){this.set4("viewport",t,e,n,i)},activeTexture:function(t){this.activeTextureIndex!==t&&(this.activeTextureIndex=t,this.gl.activeTexture(t))},bindTexture:function(t,e){var n=this.getActiveTextureUnit();n[t]!==e&&(n[t]=e,this.gl.bindTexture(t,e))},getActiveTextureUnit:function(){var t=this.textureUnitDict[this.activeTextureIndex];return t||(t=this.textureUnitDict[this.activeTextureIndex]={}),t},set1:function(t,e){this._dict[t]!==e&&(this._dict[t]=e,this.gl[t](e))},set2:function(t,e,n){var i=this._dict[t];i||(i=this._dict[t]=[]),i[0]===e&&i[1]===n||(i[0]=e,i[1]=n,this.gl[t](e,n))},set3:function(t,e,n,i){var r=this._dict[t];r||(r=this._dict[t]=[]),r[0]===e&&r[1]===n&&r[2]===i||(r[0]=e,r[1]=n,r[2]=i,this.gl[t](e,n,i))},set4:function(t,e,n,i,r){var s=this._dict[t];s||(s=this._dict[t]=[]),s[0]===e&&s[1]===n&&s[2]===i&&s[3]===r||(s[0]=e,s[1]=n,s[2]=i,s[3]=r,this.gl[t](e,n,i,r))},get:function(t){return this._dict[t]}}),Ei=s.a.create({Mixes:a.a,className:"WebGLResourceManager",isWebGLResourceManager:!0,hasNeedDestroyResource:!1,constructor:function(t){this._needDestroyResources=[],Object.assign(this,t)},destroyMesh:function(t){var e=this;this.getMeshResources(t).forEach((function(t){e.destroyIfNoRef(t)})),t._vao=t._program=t._shader=null},getMeshResources:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t._shader&&e.push(t._shader),t._vao&&(e.push(t._vao),t._vao.getResources(e)),t._program&&e.push(t._program),e},destroyIfNoRef:function(t){var e=this._needDestroyResources;return t&&e.indexOf(t)<0&&e.push(t),this},getUsedResources:function(t){var e=this,n=[];return t&&t.traverse((function(t){t.isMesh&&!t.isDestroyed&&e.getMeshResources(t,n)})),n},destroyUnsuedResource:function(t){var e=this,n=this._needDestroyResources;if(0===n.length)return this;var i=this.getUsedResources(t);return n.forEach((function(t){i.indexOf(t)<0&&t&&t.destroy&&!t.alwaysUse&&(e.fire("destroyResource",t.id),t.destroy())})),this.reset(),this},reset:function(){return this._needDestroyResources.length=0,this}}),Ti=new o.a,Mi=new c.a,Ai=new Float32Array([0,0,0]),Ii=s.a.create({isLightManager:!0,className:"LightManager",constructor:function(t){this.ambientLights=[],this.directionalLights=[],this.pointLights=[],this.spotLights=[],this.areaLights=[],this.lightInfo={AMBIENT_LIGHTS:0,POINT_LIGHTS:0,DIRECTIONAL_LIGHTS:0,SPOT_LIGHTS:0,AREA_LIGHTS:0,uid:0},Object.assign(this,t)},getRenderOption:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.each)(this.lightInfo,(function(n,i){if("uid"!==i&&n){e[i]=n;var r=t.getShadowMapCount(i);r&&(e[i+"_SMC"]=r)}})),e},addLight:function(t){var e=null;return t.enabled?(t.isAmbientLight?e=this.ambientLights:t.isDirectionalLight?e=this.directionalLights:t.isPointLight?e=this.pointLights:t.isSpotLight?e=this.spotLights:t.isAreaLight?e=this.areaLights:m.a.warnOnce("LightManager.addLight(".concat(t.id,")"),"Not support this light:",t),e&&(t.shadow?e.unshift(t):e.push(t)),this):this},getDirectionalInfo:function(t){var e=[],n=[],i=[],r=[],s=[],a=[];this.directionalLights.forEach((function(o,u){var c=3*u;o.getRealColor().toRGBArray(e,c),o.getViewDirection(t).toArray(n,c),o.shadow&&o.lightShadow&&(i.push(o.lightShadow.framebuffer.texture),r.push(o.lightShadow.width),r.push(o.lightShadow.height),a.push(o.lightShadow.minBias,o.lightShadow.maxBias),Ti.copy(t.worldMatrix),Ti.premultiply(o.lightShadow.camera.viewProjectionMatrix),Ti.toArray(s,16*u))}));var o={colors:new Float32Array(e),infos:new Float32Array(n)};return i.length&&(o.shadowMap=i,o.shadowMapSize=new Float32Array(r),o.shadowBias=new Float32Array(a),o.lightSpaceMatrix=new Float32Array(s)),o},getSpotInfo:function(t){var e=[],n=[],i=[],r=[],s=[],a=[],o=[],u=[],c=[],h=[];this.spotLights.forEach((function(f,l){var d=3*l;f.getRealColor().toRGBArray(e,d),f.toInfoArray(n,d),f.getViewDirection(t).toArray(r,d),h.push(f.range),s.push(f._cutoffCos,f._outerCutoffCos),t.getModelViewMatrix(f,Ti),Ti.getTranslation(Mi),Mi.toArray(i,d),f.shadow&&f.lightShadow&&(a.push(f.lightShadow.framebuffer.texture),o.push(f.lightShadow.width),o.push(f.lightShadow.height),c.push(f.lightShadow.minBias,f.lightShadow.maxBias),Ti.multiply(f.lightShadow.camera.viewProjectionMatrix,t.worldMatrix),Ti.toArray(u,16*l))}));var f={colors:new Float32Array(e),infos:new Float32Array(n),poses:new Float32Array(i),dirs:new Float32Array(r),cutoffs:new Float32Array(s),ranges:new Float32Array(h)};return a.length&&(f.shadowMap=a,f.shadowMapSize=new Float32Array(o),f.shadowBias=new Float32Array(c),f.lightSpaceMatrix=new Float32Array(u)),f},getPointInfo:function(t){var e=[],n=[],i=[],r=[],s=[],a=[],o=[],u=[];this.pointLights.forEach((function(c,h){var f=3*h;c.getRealColor().toRGBArray(e,f),c.toInfoArray(n,f),u.push(c.range),t.getModelViewMatrix(c,Ti),Ti.getTranslation(Mi),Mi.toArray(i,f),c.shadow&&c.lightShadow&&(r.push(c.lightShadow.framebuffer.texture),a.push(c.lightShadow.minBias,c.lightShadow.maxBias),t.worldMatrix.toArray(s,16*h),o[2*h]=c.lightShadow.camera.near,o[2*h+1]=c.lightShadow.camera.far)}));var c={colors:new Float32Array(e),infos:new Float32Array(n),poses:new Float32Array(i),ranges:new Float32Array(u)};return r.length&&(c.shadowMap=r,c.shadowBias=new Float32Array(a),c.lightSpaceMatrix=new Float32Array(s),c.cameras=new Float32Array(o)),c},getAreaInfo:function(t){var e,n,i=[],r=[],s=[],a=[];return this.areaLights.forEach((function(o,u){var c=3*u;o.getRealColor().toRGBArray(i,c),t.getModelViewMatrix(o,Ti),Ti.getTranslation(Mi),Mi.toArray(r,c);var h=Ti.getRotation();Ti.fromQuat(h),Mi.set(.5*o.width,0,0),Mi.transformMat4(Ti),Mi.toArray(s,c),Mi.set(0,.5*o.height,0),Mi.transformMat4(Ti),Mi.toArray(a,c),e=o.ltcTexture1,n=o.ltcTexture2})),{colors:new Float32Array(i),poses:new Float32Array(r),width:new Float32Array(s),height:new Float32Array(a),ltcTexture1:e,ltcTexture2:n}},getAmbientInfo:function(){return Ai[0]=Ai[1]=Ai[2]=0,this.ambientLights.forEach((function(t){var e=t.getRealColor();Ai[0]+=e.r,Ai[1]+=e.g,Ai[2]+=e.b})),Ai[0]=Math.min(1,Ai[0]),Ai[1]=Math.min(1,Ai[1]),Ai[2]=Math.min(1,Ai[2]),Ai},updateInfo:function(t){var e=this.lightInfo,n=this.ambientLights,i=this.directionalLights,r=this.pointLights,s=this.spotLights,a=this.areaLights;e.AMBIENT_LIGHTS=n.length,e.POINT_LIGHTS=r.length,e.DIRECTIONAL_LIGHTS=i.length,e.SPOT_LIGHTS=s.length,e.AREA_LIGHTS=a.length;var o=function(t){return!!t.shadow};e.SHADOW_POINT_LIGHTS=r.filter(o).length,e.SHADOW_SPOT_LIGHTS=s.filter(o).length,e.SHADOW_DIRECTIONAL_LIGHTS=i.filter(o).length,e.uid=[e.AMBIENT_LIGHTS,e.POINT_LIGHTS,e.SHADOW_POINT_LIGHTS,e.DIRECTIONAL_LIGHTS,e.SHADOW_DIRECTIONAL_LIGHTS,e.SPOT_LIGHTS,e.SHADOW_SPOT_LIGHTS,e.AREA_LIGHTS].join("_"),this.directionalInfo=this.getDirectionalInfo(t),this.pointInfo=this.getPointInfo(t),this.spotInfo=this.getSpotInfo(t),this.areaInfo=this.getAreaInfo(t),this.ambientInfo=this.getAmbientInfo()},getInfo:function(){return this.lightInfo},reset:function(){this.ambientLights.length=0,this.directionalLights.length=0,this.pointLights.length=0,this.spotLights.length=0,this.areaLights.length=0},getShadowMapCount:function(t){var e=[];"POINT_LIGHTS"===t?e=this.pointLights:"DIRECTIONAL_LIGHTS"===t?e=this.directionalLights:("SPOT_LIGHTS"===t||"AREA_LIGHTS"===t)&&(e=this.spotLights);var n=0;return e.forEach((function(t){n+=t.shadow?1:0})),n},createShadowMap:function(t,e){this.directionalLights.forEach((function(n){n.createShadowMap(t,e)})),this.spotLights.forEach((function(n){n.createShadowMap(t,e)})),this.pointLights.forEach((function(n){n.createShadowMap(t,e)})),this.areaLights.forEach((function(n){n.createShadowMap(t,e)}))}}),Li=C.a.DEPTH_TEST,Oi=C.a.SAMPLE_ALPHA_TO_COVERAGE,Si=C.a.CULL_FACE,Ri=C.a.FRONT_AND_BACK,yi=C.a.BLEND,xi=C.a.LINES,Ni=C.a.STATIC_DRAW,bi=C.a.DYNAMIC_DRAW,wi=s.a.create({Mixes:a.a,className:"WebGLRenderer",isWebGLRenderer:!0,gl:null,width:0,height:0,pixelRatio:1,domElement:null,useInstanced:!1,useVao:!0,alpha:!1,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1,gameMode:!1,useFramebuffer:!1,framebufferOption:{},useLogDepth:!1,vertexPrecision:"highp",fragmentPrecision:"highp",fog:null,offsetX:0,offsetY:0,isInitFailed:!1,_isInit:!1,_isContextLost:!1,constructor:function(t){this.clearColor=new v.a(1,1,1),Object.assign(this,t),this.renderInfo=new di,this.renderList=new gi,this.lightManager=new Ii,this.resourceManager=new Ei},resize:function(t,e,n){if(n||this.width!==t||this.height!==e){var i=this.domElement;this.width=t,this.height=e,i.width=t,i.height=e,this.framebuffer&&this.framebuffer.resize(this.width,this.height,n),this.viewport()}},setOffset:function(t,e){this.offsetX===t&&this.offsetY===e||(this.offsetX=t,this.offsetY=e,this.viewport())},viewport:function(t,e,n,i){var r=this.state,s=this.gl;r&&(void 0===t?t=this.offsetX:this.offsetX=t,void 0===e?e=this.offsetY:this.offsetY=e,void 0===n&&(n=s.drawingBufferWidth),void 0===i&&(i=s.drawingBufferHeight),r.viewport(t,e,n,i))},isInit:{get:function(){return this._isInit&&!this.isInitFailed}},onInit:function(t){var e=this;this._isInit?t(this):this.on("init",(function(){t(e)}),!0)},initContext:function(){if(!this._isInit){this._isInit=!0;try{this._initContext(),this.fire("init")}catch(t){this.isInitFailed=!0,this.fire("initFailed",t)}}},_initContext:function(){var t=this,e={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,failIfMajorPerformanceCaveat:this.failIfMajorPerformanceCaveat};!0===this.preserveDrawingBuffer&&(e.preserveDrawingBuffer=!0),!0===this.gameMode&&(e.gameMode=!0);var n=this.gl=this.domElement.getContext("webgl",e);n.viewport(0,0,this.width,this.height),Tt.init(n),tt.init(n),et.init(n),dt.init(this),this.state=new vi(n),tt.instanced||(this.useInstanced=!1),tt.vao||(this.useVao=!1),this.useFramebuffer&&(this.framebuffer=new re(this,Object.assign({useVao:this.useVao,width:this.width,height:this.height},this.framebufferOption))),this.domElement.addEventListener("webglcontextlost",(function(e){t._onContextLost(e)}),!1),this.domElement.addEventListener("webglcontextrestored",(function(e){t._onContextRestore(e)}),!1)},_onContextLost:function(t){this.fire("webglContextLost");var e=this.gl;this._isContextLost=!0,t.preventDefault(),It.reset(e),dt.reset(e),qt.reset(e),xt.reset(e),Ft.reset(e),this.state.reset(e),this._lastMaterial=null,this._lastProgram=null},_onContextRestore:function(t){this.fire("webglContextRestored");var e=this.gl;this._isContextLost=!1,tt.reset(e),re.reset(e)},setupDepthTest:function(t){var e=this.state;t.depthTest?(e.enable(Li),e.depthFunc(t.depthFunc),e.depthMask(t.depthMask),e.depthRange(t.depthRange[0],t.depthRange[1])):e.disable(Li)},setupSampleAlphaToCoverage:function(t){var e=this.state;t.sampleAlphaToCoverage?e.enable(Oi):e.disable(Oi)},setupCullFace:function(t){var e=this.state;t.cullFace&&t.cullFaceType!==Ri?(e.enable(Si),e.cullFace(t.cullFaceType)):e.disable(Si)},setupBlend:function(t){var e=this.state;t.blend?(e.enable(yi),e.blendFuncSeparate(t.blendSrc,t.blendDst,t.blendSrcAlpha,t.blendDstAlpha),e.blendEquationSeparate(t.blendEquation,t.blendEquationAlpha)):e.disable(yi)},setupUniforms:function(t,e,n,i){var r=this.forceMaterial||e.material;for(var s in t.uniforms){var a=r.getUniformInfo(s),o=t.uniforms[s];if(!a.isBlankInfo&&(i||a.isDependMesh&&!n)){var u=a.get(e,r,o);null!=u&&(t[s]=u)}}},setupVao:function(t,e,n){var i=n.geometry,r=i.isStatic;if(t.isDirty||!r||i.isDirty){t.isDirty=!1;var s=this.forceMaterial||n.material,a=s.attributes,o=r?Ni:bi;for(var u in a){var c=e.attributes[u];if(c){var h=s.getAttributeData(u,n,c);null!=h&&t.addAttribute(h,c,o)}}i.indices&&t.addIndexBuffer(i.indices,o),i.isDirty=!1}i.vertexCount&&(t.vertexCount=i.vertexCount)},setupMaterial:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=this.forceMaterial||e.material;(r.isDirty||this._lastMaterial!==r)&&(this.setupDepthTest(r),this.setupSampleAlphaToCoverage(r),this.setupCullFace(r),this.setupBlend(r),i=!0),this.setupUniforms(t,e,n,i),r.isDirty=!1,this._lastMaterial=r},setupMesh:function(t,e){var n=this.gl,i=this.state,r=this.lightManager,s=t.geometry,a=this.forceMaterial||t.material,o=dt.getShader(t,a,e,r,this.fog,this.useLogDepth),u=It.getProgram(o,i);u.useProgram(),this.setupMaterial(u,t,e,this._lastProgram!==u),this._lastProgram=u,t.material.wireframe&&s.mode!==xi&&s.convertToLinesMode();var c=s.id+u.id,h=Ft.getVao(n,c,{useInstanced:e,useVao:this.useVao,mode:s.mode});return this.setupVao(h,u,t),t._vao=h,t._shader=o,t._program=u,{vao:h,program:u,geometry:s}},addRenderInfo:function(t,e){var n=this.renderInfo;n.addFaceCount(t),n.addDrawCount(e)},render:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.initContext(),!this.isInitFailed&&!this._isContextLost){var i=this.renderList,r=this.renderInfo,s=this.lightManager,a=this.resourceManager,o=this.state;this.fog=t.fog,s.reset(),r.reset(),i.reset(),Ce.init(this,o,e,s,this.fog),t.updateMatrixWorld(),e.updateViewProjectionMatrix(),t.traverse((function(t){return t.visible?(t.isMesh?i.addMesh(t,e):t.isLight&&s.addLight(t),g.TRAVERSE_STOP_NONE):g.TRAVERSE_STOP_CHILDREN})),i.sort(),s.createShadowMap(this,e),s.updateInfo(e),n&&this.fire("beforeRender"),this.useFramebuffer&&this.framebuffer.bind(),this.clear(),n&&this.fire("beforeRenderScene"),this.renderScene(),this.useFramebuffer&&this.renderToScreen(this.framebuffer),n&&this.fire("afterRender"),a.destroyUnsuedResource(t)}},renderScene:function(){var t=this;this.renderList.traverse((function(e){t.renderMesh(e)}),(function(e){t.renderInstancedMeshes(e)})),this._gameModeSumbit()},_gameModeSumbit:function(){var t=this.gl;this.gameMode&&t&&t.submit&&t.submit()},clear:function(t){var e=this.gl,n=this.state;t=t||this.clearColor,n.depthMask(!0),this._lastMaterial=null,this._lastProgram=null,e.clearColor(t.r,t.g,t.b,t.a),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)},clearDepth:function(){var t=this.gl;this.state.depthMask(!0),t.clear(t.DEPTH_BUFFER_BIT)},renderToScreen:function(t){this.state.bindSystemFramebuffer(),t.render(0,0,1,1,this.clearColor)},renderMesh:function(t){var e=this.setupMesh(t,!1).vao;e.draw(),this.addRenderInfo(e.vertexCount/3,1)},renderInstancedMeshes:function(t){var e=t[0];if(e){var n=this.forceMaterial||e.material,i=this.setupMesh(e,!0),r=i.vao,s=i.program;n.getInstancedUniforms().forEach((function(e){var n=e.name,i=e.info,a=s.attributes[n];a&&r.addInstancedAttribute(a,t,(function(t){return i.get(t)}))})),r.drawInstance(t.length),this.addRenderInfo(r.vertexCount/3*t.length,1)}},renderMultipleMeshes:function(t){var e=this;t.forEach((function(t){e.renderMesh(t)}))},releaseGLResource:function(){var t=this.gl;t&&(It.reset(t),dt.reset(t),xt.reset(t),Ft.reset(t),this.state.reset(t),qt.reset(t),re.destroy(t))}}),Ci=n(60),Pi=n.n(Ci).a,Hi=s.a.create({Extends:g,isStage:!0,className:"Stage",renderer:null,camera:null,pixelRatio:null,offsetX:0,offsetY:0,canvas:null,constructor:function(t){if(t.width||(t.width=window.innerWidth),t.height||(t.height=window.innerHeight),!t.pixelRatio){var e=window.devicePixelRatio||1;e=Math.min(e,1024/Math.max(t.width,t.height),2),e=Math.max(e,1),t.pixelRatio=e}Hi.superclass.constructor.call(this,t),this.initRenderer(t),m.a.log("Hilo3d version: ".concat(li))},initRenderer:function(t){var e=this.canvas=this.createCanvas(t);this.renderer=new wi(Object.assign(t,{domElement:e})),this.resize(this.width,this.height,this.pixelRatio,!0)},createCanvas:function(t){var e;return e=t.canvas?t.canvas:document.createElement("canvas"),t.container&&t.container.appendChild(e),e},resize:function(t,e,n,i){if(void 0===n&&(n=this.pixelRatio),i||this.width!==t||this.height!==e||this.pixelRatio!==n){this.width=t,this.height=e,this.pixelRatio=n,this.rendererWidth=t*n,this.rendererHeight=e*n;var r=this.canvas;this.renderer.resize(this.rendererWidth,this.rendererHeight,i),r.style.width=this.width+"px",r.style.height=this.height+"px",this.updateDomViewport()}return this},setOffset:function(t,e){if(this.offsetX!==t||this.offsetY!==e){this.offsetX=t,this.offsetY=e;var n=this.pixelRatio;this.renderer.setOffset(t*n,e*n)}return this},viewport:function(t,e,n,i){return this.resize(n,i,this.pixelRatio,!0),this.setOffset(t,e),this},tick:function(t){return this.traverseUpdate(t),this.camera&&this.renderer.render(this,this.camera,!0),this},enableDOMEvent:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.canvas,r=this._domListener||(this._domListener=function(t){e._onDOMEvent(t)});return(t="string"==typeof t?[t]:t).forEach((function(t){n?i.addEventListener(t,r,!1):i.removeEventListener(t,r)})),this},_onDOMEvent:function(t){var e=this.canvas,n=this._eventTarget,i=t.type,r=0===i.indexOf("touch"),s=t;if(r){var a=t.touches,o=t.changedTouches;a&&a.length?s=a[0]:o&&o.length&&(s=o[0])}var u=this.domViewport||this.updateDomViewport(),c=(s.pageX||s.clientX)-u.left,h=(s.pageY||s.clientY)-u.top;t.stageX=c,t.stageY=h,t.stopPropagation=function(){this._stopPropagationed=!0};var f=this.getMeshResultAtPoint(c,h,!0),l=f.mesh;t.hitPoint=f.point;var d="mouseout"===i;if(n&&(n!==l&&(!n.contains||!n.contains(l))||d)){var m=!1;if("touchmove"===i?m="touchout":"mousemove"!==i&&!d&&l||(m="mouseout"),m){var _=Object.assign({},t);_.type=m,_.eventTarget=n,n._fireMouseEvent(_)}t.lastEventTarget=n,this._eventTarget=null}if(l&&l.pointerEnabled&&"mouseout"!==i&&(t.eventTarget=this._eventTarget=l,l._fireMouseEvent(t)),!r){var p=l&&l.pointerEnabled&&l.useHandCursor?"pointer":"";e.style.cursor=p}Pi.android&&"touchmove"===i&&t.preventDefault()},updateDomViewport:function(){var t=this.canvas,e=null;return t.parentNode&&(e=this.domViewport=Object(r.getElementRect)(t)),e},getMeshResultAtPoint:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.camera,r=this._ray;r||(r=this._ray=new ei.a),r.fromCamera(i,t,e,this.width,this.height);var s=this.raycast(r,!0,n);if(s)return s[0];this._stageResultAtPoint||(this._stageResultAtPoint={mesh:this,point:new c.a});var a=this._stageResultAtPoint.point;return a.copy(i.unprojectVector(a.set(t,e,0),this.width,this.height)),this._stageResultAtPoint},releaseGLResource:function(){return this.renderer.releaseGLResource(),this},destroy:function(){return Hi.superclass.destroy.call(this,this.renderer),this.releaseGLResource(),this.traverse((function(t){t.off(),t.parent=null})),this.children.length=0,this.renderer.off(),this}}),Di=Hi,Fi=n(61),Ui=n.n(Fi),Gi=n(105),Bi=n.n(Gi);Ui.a.Ease=Bi.a;var Vi=Ui.a,Xi=s.a.create({Extends:Z,isBoxGeometry:!0,className:"BoxGeometry",width:1,height:1,depth:1,widthSegments:1,heightSegments:1,depthSegments:1,constructor:function(t){Xi.superclass.constructor.call(this,t),this.isSegments()?this.buildWithSegments():this.build()},buildWithSegments:function(){var t=this.width,e=this.height,n=this.depth,i=this.widthSegments,r=this.heightSegments,s=this.depthSegments,a=r*s*6,o=i*s*6,u=i*r*6,c=2*((r+1)*(s+1)+(i+1)*(s+1)+(i+1)*(r+1)),h=new Float32Array(3*c),f=new Float32Array(3*c),l=new Float32Array(2*c),d=new Uint16Array(2*(a+o+u));this.vertices=new w(h,3),this.normals=new w(f,3),this.uvs=new w(l,2),this.indices=new w(d,1);var m=[0,0];this.buildPlane(m,2,1,0,-1,1,n,e,t/2,s,r),this.buildPlane(m,2,1,0,1,1,n,e,-t/2,s,r),this.buildPlane(m,0,2,1,1,-1,t,n,e/2,i,s),this.buildPlane(m,0,2,1,1,1,t,n,-e/2,i,s),this.buildPlane(m,0,1,2,1,1,t,e,n/2,i,r),this.buildPlane(m,0,1,2,-1,1,t,e,-n/2,i,r)},buildPlane:function(t,e,n,i,r,s,a,o,u,c,h){for(var f=a/c,l=o/h,d=a/2,m=o/2,_=t[0],p=t[1],g=this.vertices.data,v=this.normals.data,E=this.uvs.data,T=this.indices.data,M=0;M<=h;M++)for(var A=(M*l-m)*s,I=0;I<=c;I++){if(g[3*_+e]=(I*f-d)*r,g[3*_+n]=A,g[3*_+i]=u,v[3*_+e]=0,v[3*_+n]=0,v[3*_+i]=u<0?-1:1,E[2*_]=I/c,E[2*_+1]=1-M/h,I<c&&M<h){var L=t[0]+(M+1)*(c+1)+I;T[p++]=L,T[p++]=_,T[p++]=L+1,T[p++]=L+1,T[p++]=_,T[p++]=_+1}_++}t[0]=_,t[1]=p},build:function(){var t=new Float32Array(72),e=new Uint16Array(36);this.vertices=new w(t,3),this.indices=new w(e,1);var n=this.width/2,i=this.height/2,r=this.depth/2,s=[-n,-i,-r],a=[n,-i,-r],o=[n,i,-r],u=[-n,i,-r],c=[-n,-i,r],h=[n,-i,r],f=[n,i,r],l=[-n,i,r];this.addRect(h,a,o,f),this.addRect(s,c,l,u),this.addRect(l,f,o,u),this.addRect(s,a,h,c),this.addRect(c,h,f,l),this.addRect(a,s,u,o)},isSegments:function(){return this.widthSegments>1||this.heightSegments>1||this.depthSegments>1},setFrontUV:function(t){this.isSegments()?m.a.warn("segmented BoxGeometry dont support setFrontUV!"):this.setVertexUV(32,t)},setRightUV:function(t){this.isSegments()?m.a.warn("segmented BoxGeometry dont support setRightUV!"):this.setVertexUV(0,t)},setBackUV:function(t){this.isSegments()?m.a.warn("segmented BoxGeometry dont support setBackUV!"):this.setVertexUV(40,t)},setLeftUV:function(t){this.isSegments()?m.a.warn("segmented BoxGeometry dont support setLeftUV!"):this.setVertexUV(8,t)},setTopUV:function(t){this.isSegments()?m.a.warn("segmented BoxGeometry dont support setTopUV!"):this.setVertexUV(16,t)},setBottomUV:function(t){this.isSegments()?m.a.warn("segmented BoxGeometry dont support setBottomUV!"):this.setVertexUV(24,t)},setAllRectUV:function(t){if(this.isSegments())return m.a.warn("segmented BoxGeometry dont support setAllRectUV!"),null;for(var e=0;e<6;e++)this.setVertexUV(8*e,t);return this},_raycast:function(t,e){return Xi.superclass._raycast.call(this,t,e)}}),ji=Xi,ki=C.a.FRONT,zi=C.a.BACK,qi=[0,0,1],Wi=s.a.create({Extends:Z,isPlaneGeometry:!0,className:"PlaneGeometry",width:1,height:1,widthSegments:1,heightSegments:1,constructor:function(t){Wi.superclass.constructor.call(this,t),this.build()},build:function(){for(var t=this.widthSegments,e=this.heightSegments,n=(t+1)*(e+1),i=this.width/t,r=this.height/e,s=new Float32Array(3*n),a=new Float32Array(3*n),o=new Float32Array(2*n),u=new Uint16Array(t*e*6),c=0,h=0;h<=e;h++)for(var f=0;f<=t;f++){var l=h*(t+1)+f;if(s[3*l]=f*i-this.width/2,s[3*l+1]=this.height/2-h*r,a[3*l]=0,a[3*l+1]=0,a[3*l+2]=1,o[2*l]=f/t,o[2*l+1]=1-h/e,h<e&&f<t){var d=(h+1)*(t+1)+f;u[c++]=l,u[c++]=d,u[c++]=d+1,u[c++]=l,u[c++]=d+1,u[c++]=l+1}}this.vertices=new w(s,3),this.indices=new w(u,1),this.normals=new w(a,3),this.uvs=new w(o,2)},_raycast:function(t,e){var n=t.origin.z,i=t.direction.z;if(e===ki&&(i>0||n<0))return null;if(e===zi&&(i<0||n>0))return null;var r=t.intersectsPlane(qi,0);if(r){var s=r.x,a=r.y,o=.5*this.width,u=.5*this.height;if(s>=-o&&s<=o&&a>=-u&&a<=u)return[r]}return null}}),Yi=Wi,Zi=s.a.create({Extends:Z,isSphereGeometry:!0,className:"SphereGeometry",radius:1,heightSegments:16,widthSegments:32,constructor:function(t){Zi.superclass.constructor.call(this,t),this.build()},build:function(){for(var t=this.radius,e=this.heightSegments,n=this.widthSegments,i=(n+1)*(e+1),r=n*e,s=new Float32Array(3*i),a=new Float32Array(4*i),o=new Float32Array(2*i),u=new Uint16Array(6*r),c=0,h=0,f=0,l=0,d=0,m=2*Math.PI,_=Math.PI,p=0;p<=e;p++)for(var g=p/e,v=_*g,E=Math.cos(v)*t,T=Math.sin(v)*t,M=0;M<=n;M++){var A=M/n,I=m*A,L=Math.cos(I),O=Math.sin(I),S=L*T,R=O*T,y=O,x=-L;if(a[f++]=y,a[f++]=0,a[f++]=x,a[f++]=1,s[h++]=S,s[h++]=E,s[h++]=R,o[l++]=A,o[l++]=g,p>0&&M>0){var N=d,b=N-1,C=b-n-1,P=N-n-1;u[c++]=C,u[c++]=P,u[c++]=N,u[c++]=C,u[c++]=N,u[c++]=b}d++}this.vertices=new w(s,3),this.indices=new w(u,1),this.uvs=new w(o,2),this.tangents=new w(a,4),this.normals=new w(new Float32Array(s),3)},_raycast:function(t,e){return Zi.superclass._raycast.call(this,t,e)}}),Ki=Zi,Qi=[dt,It,xt,Ft,qt],Ji=function(){var t="";Qi.forEach((function(e){t+="".concat(e.prototype.className,":").concat(Object.keys(e.cache._cache).length," ")})),m.a.log(t)},$i=s.a.create({Mixes:a.a,isLoadCache:!0,className:"LoadCache",Statics:{PENDING:1,LOADED:2,FAILED:3},enabled:!0,constructor:function(){this._files={}},update:function(t,e,n){if(this.enabled){var i={key:t,state:e,data:n};this._files[t]=i,this.fire("update",i),this.fire("update:".concat(i.key),i)}},get:function(t){return this.enabled?this._files[t]:null},remove:function(t){delete this._files[t]},clear:function(){this._files={}},wait:function(t){var e=this;return t?t.state===$i.LOADED?Promise.resolve(t.data):t.state===$i.FAILED?Promise.reject():new Promise((function(n,i){e.on("update:".concat(t.key),(function(t){var e=t.detail;e.state===$i.LOADED?n(e.data):e.state===$i.FAILED&&i(e.data)}),!0)})):Promise.reject()}}),tr=$i,er=new tr,nr=s.a.create({Mixes:a.a,isBasicLoader:!0,className:"BasicLoader",Statics:{_cache:er,enalbeCache:function(){er.enabled=!0},disableCache:function(){er.enabled=!1},deleteCache:function(t){er.remove(t)},clearCache:function(){er.clear()},cache:{get:function(){return er},set:function(){m.a.warn("BasicLoader.cache is readonly!")}}},load:function(t){var e=t.src,n=t.type;if(!n){var i=Object(r.getExtension)(e);/^(?:png|jpe?g|gif|webp|bmp)$/i.test(i)&&(n="img"),n||(n=t.defaultType)}return"img"===n?this.loadImg(e,t.crossOrigin):this.loadRes(e,n)},isCrossOrigin:function(t){var e=window.location,n=document.createElement("a");return n.href=t,n.hostname!==e.hostname||n.port!==e.port||n.protocol!==e.protocol},isBase64:function(t){return/^data:(.+?);base64,/.test(t)},Uint8ArrayFrom:function(t,e){if(Uint8Array.from)return Uint8Array.from(t,e);for(var n=t.length,i=new Uint8Array(n),r=0;r<n;r++)i[r]=e(t[r]);return i},loadImg:function(t,e){var n=this,i=er.get(t);return i?er.wait(i):new Promise((function(i,r){var s=new Image;er.update(t,tr.PENDING),s.onload=function(){s.onerror=null,s.onabort=null,s.onload=null,er.update(t,tr.LOADED,s),i(s)},s.onerror=function(){s.onerror=null,s.onabort=null,s.onload=null;var e=new Error("Image load failed for ".concat(t.slice(0,100)));er.update(t,tr.FAILED,e),r(e)},s.onabort=s.onerror,(e||n.isCrossOrigin(t))&&(n.isBase64(t)||(s.crossOrigin="anonymous")),s.src=t}))},loadRes:function(t,e){var n=this;if(this.isBase64(t)){var i=RegExp.$1,r=t.slice(13+i.length),s=atob(r);return"json"===e?s=JSON.parse(s):"buffer"===e&&(s=this.Uint8ArrayFrom(s,(function(t){return t.charCodeAt(0)})).buffer),Promise.resolve(s)}var a=er.get(t);return a?er.wait(a):(er.update(t,tr.PENDING),this.fire("beforeload"),this.request({url:t,type:e}).then((function(e){return n.fire("loaded"),er.update(t,tr.LOADED,e),e}),(function(e){throw n.fire("failed",e),er.update(t,tr.FAILED),new Error("Resource load failed for ".concat(t,", ").concat(e))})))},request:function(t){var e=this;return new Promise((function(n,i){var s=new XMLHttpRequest;s.onload=function(){if(s.status<200||s.status>=300)i(new TypeError("Network request failed for ".concat(s.status)));else{var e="response"in s?s.response:s.responseText;if("json"===t.type)try{e=JSON.parse(e)}catch(t){return void i(new TypeError("JSON.parse error"+t))}n(e)}},s.onprogress=function(n){e.fire("progress",{url:t.url,loaded:n.loaded,total:n.total})},s.onerror=function(){i(new TypeError("Network request failed"))},s.ontimeout=function(){i(new TypeError("Network request timed out"))},s.open(t.method||"GET",t.url,!0),"include"===t.credentials&&(s.withCredentials=!0),"buffer"===t.type&&(s.responseType="arraybuffer"),Object(r.each)(t.headers,(function(t,e){s.setRequestHeader(e,t)})),s.send(t.body||null)}))}}),ir=s.a.create({isLoader:!0,className:"Loader",maxConnections:2,Statics:{_loaderClassMap:{},_loaders:{},addLoader:function(t,e){ir._loaderClassMap[t]=e},getLoader:function(t){if(!ir._loaders[t]){var e=ir._loaderClassMap[t]?ir._loaderClassMap[t]:nr;ir._loaders[t]=new e}return ir._loaders[t]}},load:function(t){var e=this;if(t instanceof Array)return Promise.all(t.map((function(t){return e.load(t)})));var n=t.type||Object(r.getExtension)(t.src);return ir.getLoader(n).load(t)}}),rr=ir,sr=s.a.create({Extends:nr,isCubeTextureLoader:!0,className:"CubeTextureLoader",constructor:function(){sr.superclass.constructor.call(this)},load:function(t){var e,n=this;return e=t.images&&Array.isArray(t.images)?t.images:[t.right,t.left,t.top,t.bottom,t.front,t.back],Promise.all(e.map((function(e){return n.loadImg(e,t.crossOrigin)}))).then((function(e){var n=Object.assign({},t);return delete n.images,delete n.type,delete n.right,delete n.left,delete n.top,delete n.bottom,delete n.front,delete n.back,n.image=e,new fe(n)})).catch((function(t){throw m.a.error("load CubeTexture failed",t.message,t.stack),t}))}});rr.addLoader("CubeTexture",sr);var ar=sr,or=s.a.create({Extends:ke,isPBRMaterial:!0,className:"PBRMaterial",lightType:"PBR",gammaCorrection:!0,usePhysicsLight:!0,baseColor:null,baseColorMap:null,metallic:1,metallicMap:null,roughness:1,roughnessMap:null,metallicRoughnessMap:null,occlusionMap:null,occlusionStrength:1,isOcclusionInMetallicRoughnessMap:!1,diffuseEnvMap:null,diffuseEnvSphereHarmonics3:null,diffuseEnvIntensity:1,brdfLUT:null,specularEnvIntensity:1,specularEnvMap:null,isSpecularEnvMapIncludeMipmaps:!1,emission:null,isSpecularGlossiness:!1,specular:null,glossiness:1,specularGlossinessMap:null,usedUniformVectors:11,constructor:function(t){this.baseColor=new v.a(1,1,1),this.specular=new v.a(1,1,1),or.superclass.constructor.call(this,t),Object.assign(this.uniforms,{u_baseColor:"BASECOLOR",u_metallic:"METALLIC",u_roughness:"ROUGHNESS",u_specular:"SPECULAR",u_glossiness:"GLOSSINESS",u_brdfLUT:"BRDFLUT",u_diffuseEnvMap:"DIFFUSEENVMAP",u_diffuseEnvIntensity:"DIFFUSEENVINTENSITY",u_occlusionStrength:"OCCLUSIONSTRENGTH",u_specularEnvMap:"SPECULARENVMAP",u_specularEnvIntensity:"SPECULARENVINTENSITY",u_specularEnvMapMipCount:"SPECULARENVMAPMIPCOUNT",u_diffuseEnvSphereHarmonics3:"DIFFUSEENVSPHEREHARMONICS3"}),this.addTextureUniforms({u_baseColorMap:"BASECOLORMAP",u_metallicMap:"METALLICMAP",u_roughnessMap:"ROUGHNESSMAP",u_metallicRoughnessMap:"METALLICROUGHNESSMAP",u_occlusionMap:"OCCLUSIONMAP",u_specularGlossinessMap:"SPECULARGLOSSINESSMAP",u_lightMap:"LIGHTMAP"})},getRenderOption:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};or.superclass.getRenderOption.call(this,t);var e=this._textureOption.reset(t);return e.add(this.baseColorMap,"BASE_COLOR_MAP"),e.add(this.metallicMap,"METALLIC_MAP"),e.add(this.roughnessMap,"ROUGHNESS_MAP"),e.add(this.metallicRoughnessMap,"METALLIC_ROUGHNESS_MAP"),e.add(this.diffuseEnvMap,"DIFFUSE_ENV_MAP"),e.add(this.occlusionMap,"OCCLUSION_MAP"),e.add(this.lightMap,"LIGHT_MAP"),this.brdfLUT&&(e.add(this.specularEnvMap,"SPECULAR_ENV_MAP"),et.SHADER_TEXTURE_LOD&&this.specularEnvMap&&(t.USE_SHADER_TEXTURE_LOD=1)),this.isSpecularGlossiness&&(t.PBR_SPECULAR_GLOSSINESS=1,e.add(this.specularGlossinessMap,"SPECULAR_GLOSSINESS_MAP")),this.isOcclusionInMetallicRoughnessMap&&(t.IS_OCCLUSION_MAP_IN_METALLIC_ROUGHNESS_MAP=1),1!==this.occlusionStrength&&(t.OCCLUSION_STRENGTH=1),this.diffuseEnvSphereHarmonics3&&(t.HAS_NORMAL=1,t.DIFFUSE_ENV_SPHERE_HARMONICS3=1),(this.specularEnvMap||this.diffuseEnvSphereHarmonics3||this.specularEnvMap)&&(t.NEED_WORLD_NORMAL=1),this.specularEnvMap&&this.isSpecularEnvMapIncludeMipmaps&&(t.IS_SPECULAR_ENV_MAP_INCLUDE_MIPMAPS=1),e.update(),t}}),ur=or,cr=new Image;cr.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";var hr=s.a.create({Extends:qt,Mixes:a.a,isLazyTexture:!0,className:"LazyTexture",_src:"",crossOrigin:!1,autoLoad:!0,resType:"",src:{get:function(){return this._src},set:function(t){this._src!==t&&(this._src=t,this.autoLoad&&this.load())}},constructor:function(t){t&&("crossOrigin"in t&&(this.crossOrigin=t.crossOrigin),"autoLoad"in t&&(this.autoLoad=t.autoLoad)),hr.superclass.constructor.call(this,t),this.image=this.placeHolder||cr},load:function(t){var e=this;return hr.loader=hr.loader||new rr,hr.loader.load({src:this.src,crossOrigin:this.crossOrigin,type:this.resType,defaultType:"img"}).then((function(t){t.isTexture?(Object.assign(e,t),e.needUpdate=!0,e.needDestroy=!0,e.fire("load")):(e.image=t,e.needUpdate=!0,e.fire("load"))}),(function(n){if(e.fire("error"),t)throw new Error("LazyTexture Failed ".concat(n));m.a.warn("LazyTexture Failed ".concat(n))}))},_releaseImage:function(){this._src&&"string"!=typeof this._src&&(this._src=""),hr.superclass._releaseImage.call(this)}}),fr=hr,lr=n(13);function dr(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=t[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return mr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mr(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function mr(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var _r=new l.a,pr=new l.a,gr=new l.a,vr=new l.a,Er=new l.a,Tr=new l.a,Mr=new lr.a,Ar=[];function Ir(t,e){return t-e}var Lr=s.a.create({Statics:{interpolation:{LINEAR:function(t,e,n){if(void 0===e)return t;if(t.slerp)return t.slerp(e,n);if(t.lerp)return t.lerp(e,n);if(Object(r.isArrayLike)(t)){Ar.length=0;for(var i=t.length-1;i>=0;i--)Ar[i]=t[i]+n*(e[i]-t[i]);return Ar}return t+n*(e-t)},STEP:function(t,e,n){return t},CUBICSPLINE:function(t,e,n,i){var s=t.length/3;if(void 0===e)return 1===s?t[1]:t.slice(s,-s);var a=t[1],o=t[2],u=e[1],c=e[0];return s>1&&(a=t.slice(s,-s),o=t.slice(-s),u=e.slice(s,-s),c=e.slice(0,s)),a.hermite?a.hermite(a,o.scale(i),u,c.scale(i),n):a.isQuaternion?(a.fromArray(this._cubicSpline(a.elements,o.elements,u.elements,c.elements,i,n),0,!0),a.normalize(!0)):(Object(r.isArrayLike)(a)||(a=[a],o=[o],u=[u],c=[c]),a=this._cubicSpline(a,o,u,c,i,n)),a},_cubicSpline:function(t,e,n,i,r,s){var a=s*s,o=a*s,u=2*o-3*a+1,c=o-2*a+s,h=-2*o+3*a,f=o-a;Ar.length=0;for(var l=t.length-1;l>=0;l--)Ar[l]=t[l]*u+c*e[l]*r+n[l]*h+f*i[l]*r;return Ar}},StateType:{TRANSLATE:"Translation",POSITION:"Translation",TRANSLATION:"Translation",SCALE:"Scale",ROTATE:"Rotation",ROTATION:"Rotation",QUATERNION:"Quaternion",WEIGHTS:"Weights"},getType:function(t){return t=String(t).toUpperCase(),Lr.StateType[t]||Lr._extraStateHandlers.type[t]},_extraStateHandlers:{type:{},handler:{}},registerStateHandler:function(t,e){Lr._extraStateHandlers.type[String(t).toUpperCase()]=t,Lr._extraStateHandlers.handler[t]=e}},isAnimationStates:!0,className:"AnimationStates",nodeName:"",type:"",interpolationType:"LINEAR",constructor:function(t){this.id=d.a.generateUUID(this.className),this.keyTime=[],this.states=[],Object.assign(this,t)},findIndexByTime:function(t){return Object(r.getIndexFromSortedArray)(this.keyTime,t,Ir)},getStateByIndex:function(t){var e=this.states.length/this.keyTime.length;return 1===e?this.states[t]:this.states.slice(t*e,t*e+e)},getState:function(t){var e=dr(this.findIndexByTime(t),2),n=e[0],i=e[1];if(n<0||i>=this.keyTime.length)return null;var s=this.keyTime[n],a=this.keyTime[i],o=this.getStateByIndex(n);if("STEP"===this.interpolationType)return o;if(n===i){var u=this.interpolation(o);return this.type===Lr.StateType.ROTATION&&(u=_r.fromEuler(Mr.fromArray(u))),u.elements||u}var c=this.getStateByIndex(i),h=a-s,f=(t-s)/h;this.type===Lr.StateType.ROTATION?Object(r.isArrayLike)(o[0])?(o[0]=_r.fromEuler(Mr.fromArray(o[0])),o[1]=pr.fromEuler(Mr.fromArray(o[1])),o[2]=gr.fromEuler(Mr.fromArray(o[2])),c[0]=vr.fromEuler(Mr.fromArray(c[0])),c[1]=Er.fromEuler(Mr.fromArray(c[1])),c[2]=Tr.fromEuler(Mr.fromArray(c[2]))):(o=_r.fromEuler(Mr.fromArray(o)),c=pr.fromEuler(Mr.fromArray(c))):this.type===Lr.StateType.QUATERNION&&(Object(r.isArrayLike)(o[0])?(o[0]=_r.fromArray(o[0]),o[1]=pr.fromArray(o[1]),o[2]=gr.fromArray(o[2]),c[0]=vr.fromArray(c[0]),c[1]=Er.fromArray(c[1]),c[2]=Tr.fromArray(c[2])):(o=_r.fromArray(o),c=pr.fromArray(c)));var l=this.interpolation(o,c,f,h);return l.elements||l},interpolation:function(t,e,n,i){return Lr.interpolation[this.interpolationType](t,e,n,i)},updateNodeTranslation:function(t,e){t.x=e[0],t.y=e[1],t.z=e[2]},updateNodeScale:function(t,e){t.scaleX=e[0],t.scaleY=e[1],t.scaleZ=e[2]},updateNodeQuaternion:function(t,e){t.quaternion.fromArray(e)},updateNodeWeights:function(t,e){var n=this._originalWeightIndices=this._originalWeightIndices||[],i=e.length;e=e.slice();for(var r=0;r<i;r++)n[r]=r;for(var s=0;s<i;s++)for(var a=s+1;a<i;a++)if(e[a]>e[s]){var o=e[s];e[s]=e[a],e[a]=o,o=n[s],n[s]=n[a],n[a]=o}t.traverse((function(t){t.isMesh&&t.geometry&&t.geometry.isMorphGeometry&&t.geometry.update(e,n)}))},updateNodeState:function(t,e){if(e){var n=this.type;n===Lr.StateType.ROTATION&&(n=Lr.StateType.QUATERNION);var i=this.getState(t);if(i){var r="updateNode"+n;this[r]?this[r](e,i):Lr._extraStateHandlers.handler[n]?Lr._extraStateHandlers.handler[n].call(this,e,i):m.a.warnOnce(r,"updateNodeState failed unknow type(%s)",n)}}},clone:function(){return new this.constructor({keyTime:this.keyTime,states:this.states,type:this.type,nodeName:this.nodeName})}}),Or=Lr,Sr=s.a.create({Statics:{_anims:[],tick:function(t){this._anims.forEach((function(e){return e.tick(t)}))}},Mixes:a.a,isAnimation:!0,className:"Animation",paused:!1,currentLoopCount:0,loop:1/0,currentTime:0,timeScale:1,startTime:0,endTime:0,clipStartTime:0,clipEndTime:0,nodeNameMap:null,_rootNode:null,rootNode:{get:function(){return this._rootNode},set:function(t){this._rootNode=t,this.initNodeNameMap()}},validAnimationIds:null,constructor:function(t){this.id=d.a.generateUUID(this.className),this.animStatesList=[],this.clips={},Object.assign(this,t),this.initClipTime()},addClip:function(t,e,n,i){this.clips[t]={start:e,end:n,animStatesList:i}},removeClip:function(t){this.clips[t]=null},getAnimStatesListTimeInfo:function(t){var e=0,n=1/0;return t.forEach((function(t){e=Math.max(t.keyTime[t.keyTime.length-1],e),n=Math.min(t.keyTime[0],n)})),{startTime:n,endTime:e}},initClipTime:function(){var t=this.getAnimStatesListTimeInfo(this.animStatesList);this.clipStartTime=t.startTime,this.clipEndTime=t.endTime},initNodeNameMap:function(){if(this._rootNode){var t=this.nodeNameMap={};this._rootNode.traverse((function(e){t[e.animationId]=e;var n=e.name;void 0===n||t[n]||(t[n]=e)}),!1)}},tick:function(t){this.paused||(this.currentTime+=t/1e3*this.timeScale,this.currentTime>=this.endTime?(this.currentLoopCount++,this.currentTime=this.endTime,this.updateAnimStates(),this.fire("loopEnd"),!this.loop||this.currentLoopCount>=this.loop?(this.stop(),this.fire("end")):this.currentTime=this.startTime):this.updateAnimStates())},updateAnimStates:function(){var t=this;return this.animStatesList.forEach((function(e){e.updateNodeState(t.currentTime,t.nodeNameMap[e.nodeName])})),this},play:function(t,e){var n;if("string"==typeof t){var i=this.clips[t];i?(n=i.start,e=i.end,i.animStatesList&&(this.animStatesList=i.animStatesList,this.initClipTime())):m.a.warn("no this animation clip name:"+t)}else n=t;void 0===n&&(n=this.clipStartTime),void 0===e&&(e=this.clipEndTime),this.endTime=Math.min(e,this.clipEndTime),this.startTime=Math.min(n,this.endTime),this.currentTime=this.startTime,this.currentLoopCount=0,this.stop(),this.paused=!1,Sr._anims.push(this)},stop:function(){this.paused=!0;var t=Sr._anims,e=t.indexOf(this);-1!==e&&t.splice(e,1)},pause:function(){this.paused=!0},resume:function(){this.paused=!1},clone:function(t){var e=new this.constructor({rootNode:t,animStatesList:this.animStatesList,timeScale:this.timeScale,loop:this.loop,paused:this.paused,currentTime:this.currentTime,startTime:this.startTime,endTime:this.endTime,clips:this.clips});return this.paused||e.play(),e}}),Rr=Sr;function yr(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=t[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return xr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xr(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xr(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var Nr=C.a.BLEND,br=C.a.DEPTH_TEST,wr=C.a.CULL_FACE,Cr=C.a.FRONT,Pr=C.a.BACK,Hr=C.a.FRONT_AND_BACK,Dr={5120:[1,Int8Array],5121:[1,Uint8Array],5122:[2,Int16Array],5123:[2,Uint16Array],5125:[4,Uint32Array],5126:[4,Float32Array]},Fr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ur={POSITION:{name:"vertices",decodeMatName:"positionDecodeMat"},TEXCOORD_0:{name:"uvs",decodeMatName:"uvDecodeMat"},TEXCOORD_1:{name:"uvs1",decodeMatName:"uv1DecodeMat"},NORMAL:{name:"normals",decodeMatName:"normalDecodeMat"},JOINT:{name:"skinIndices"},JOINTS_0:{name:"skinIndices"},WEIGHT:{name:"skinWeights"},WEIGHTS_0:{name:"skinWeights"},TANGENT:{name:"tangents"},COLOR_0:{name:"colors"}},Gr=s.a.create({isGLTFParser:!0,className:"GLTFParser",Statics:{MAGIC:"glTF",extensionHandlers:i,registerExtensionHandler:function(t,e){this.extensionHandlers[t]=e},unregisterExtensionHandler:function(t){this.extensionHandlers[t]&&delete this.extensionHandlers[t]}},isMultiAnim:!0,isProgressive:!1,isUnQuantizeInShader:!0,isLoadAllTextures:!1,preHandlerImageURI:null,preHandlerBufferURI:null,customMaterialCreator:null,ignoreTextureError:!1,forceCreateNewBuffer:!1,src:"",constructor:function(t,e){Object.assign(this,e),this.content=t},parse:function(t){var e=this;if(this.content instanceof ArrayBuffer){var n=this.content;if(r.convertUint8ArrayToString(new Uint8Array(n,0,4))===Gr.MAGIC)this.parseBinary(n);else{var i=r.convertUint8ArrayToString(new Uint8Array(n),!0);this.json=JSON.parse(i)}}else this.json=JSON.parse(this.content);return this.glTFVersion=parseFloat(this.json.asset.version),this.glTFVersion>=2&&(this.isGLTF2=!0),this.parseExtensionUsed(),this.loadResources(t).then((function(){return e.parseExtensions(e.json.extensions,null,{isGlobal:!0,methodName:"parseOnLoad"}),Promise.resolve()})).then((function(){return e.parseGeometries()})).then((function(){return e.parseScene()}))},parseExtensionUsed:function(){var t=this;this.extensionsUsed={},r.each(this.json.extensionsUsed,(function(e){t.extensionsUsed[e]=!0})),this.extensionsUsed.WEB3D_quantized_attributes||(this.isUnQuantizeInShader=!1)},getExtensionHandler:function(t){return this.extensionHandlers&&this.extensionHandlers[t]||Gr.extensionHandlers[t]},parseExtension:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=t[e],s=this.getExtensionHandler(e);return s&&s.parse?s.parse(r,this,n,i):n},parseExtensions:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.each(t,(function(t,r){if(!i.ignoreExtensions||!i.ignoreExtensions[r]){var s=n.getExtensionHandler(r),a=i.methodName||"parse";s&&s[a]&&(e=s[a](t,n,e,i))}})),e},isUseExtension:function(t,e){return!!(t&&t.extensions&&t.extensions[e])},parseBinary:function(t){this.isBinary=!0;var e,n=new DataView(t),i=n.getUint32(4,!0),s=n.getUint32(8,!0),a=12;if(i<2){var o=n.getUint32(a,!0);e=new Uint8Array(t,20,o),e=r.convertUint8ArrayToString(e,!0),this.json=JSON.parse(e),this.binaryBody=t.slice(20+o)}else{if(2!==i)throw new Error("Dont support glTF version ".concat(i));for(;a<s;){var u=n.getUint32(a,!0),c=n.getUint32(a+4,!0);1313821514===c?(e=new Uint8Array(t,a+8,u),e=r.convertUint8ArrayToString(e,!0),this.json=JSON.parse(e)):5130562===c&&(this.binaryBody=t.slice(a+8,a+8+u)),a+=8+u}}},loadResources:function(t){var e=this,n=[];for(var i in this.extensionsUsed){var r=this.getExtensionHandler(i);r&&r.init&&n.push(r.init(t,this))}return this.isBinary?n.push(this.loadBuffers(t).then((function(){return e.loadTextures(t)}))):(n.push(this.loadBuffers(t)),n.push(this.loadTextures(t))),Promise.all(n)},getBufferUri:function(t){var e=r.getRelativePath(this.src,this.json.buffers[t].uri);return this.preHandlerBufferURI&&(e=this.preHandlerBufferURI(e,this.json.buffers[t])),e},loadBuffers:function(t){var e=this;return this.buffers={},this.isBinary?(this.isGLTF2?this.buffers[0]=this.binaryBody:this.buffers.binary_glTF=this.binaryBody,this.parseBufferViews(),Promise.resolve()):Promise.all(Object.keys(this.json.buffers||[]).map((function(n){var i=e.getBufferUri(n);return t.loadRes(i,"buffer").then((function(t){e.buffers[n]=t}))}))).then((function(){e.parseBufferViews()}))},getImageUri:function(t){var e=this.json.images[t],n=e.uri;if(this.isUseExtension(e,"KHR_binary_glTF")){var i=e.extensions.KHR_binary_glTF,s=this.bufferViews[i.bufferView],a=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);n=r.getBlobUrl(i.mimeType,a)}else if(n)n=r.getRelativePath(this.src,n);else if("bufferView"in e){var o=this.bufferViews[e.bufferView],u=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);n="image/ktx"===e.mimeType?u:r.getBlobUrl(e.mimeType,u)}return this.preHandlerImageURI&&(n=this.preHandlerImageURI(n,e)),n},getImageType:function(t){var e=this.json.images[t],n="";return e&&/^image\/(.*)$/.test(e.mimeType)&&(n=RegExp.$1),["ktx"].indexOf(n)<0&&(n=""),n},getUsedTextureNameMap:function(){var t=this,e={};return r.each(this.json.materials,(function(n){var i=n,s=!1;if(t.isUseExtension(n,"KHR_materials_common")&&(s=!0,i=n.extensions.KHR_materials_common.values),t.isGLTF2&&!s){if(i.normalTexture&&(e[i.normalTexture.index]=!0),i.occlusionTexture&&(e[i.occlusionTexture.index]=!0),i.emissiveTexture&&(e[i.emissiveTexture.index]=!0),i.transparencyTexture&&(e[i.transparencyTexture.index]=!0),t.isUseExtension(i,"KHR_materials_pbrSpecularGlossiness")){var a=i.extensions.KHR_materials_pbrSpecularGlossiness;t.getExtensionHandler("KHR_materials_pbrSpecularGlossiness").getUsedTextureNameMap(a,e,t)}else if(t.isUseExtension(i,"KHR_techniques_webgl")){var o=i.extensions.KHR_techniques_webgl;t.getExtensionHandler("KHR_techniques_webgl").getUsedTextureNameMap(o,e,t)}else if(i.pbrMetallicRoughness){var u=i.pbrMetallicRoughness;u.baseColorTexture&&(e[u.baseColorTexture.index]=!0),u.metallicRoughnessTexture&&(e[u.metallicRoughnessTexture.index]=!0)}}else s||(i=n.values),["diffuse","specular","emission","ambient","transparency","normalMap"].forEach((function(n){var s=i[n];s instanceof Object&&"index"in s&&(s=s.index),r.isStrOrNumber(s)&&t.json.textures[s]&&(e[s]=!0)}))})),e},loadTextures:function(){var t=this;if(this.textures={},!this.json.textures)return Promise.resolve();var e=Object.keys(this.json.textures);if(!this.isLoadAllTextures){var n=this.getUsedTextureNameMap();e=e.filter((function(t){return n[t]}))}return Promise.all(e.map((function(e){var n=t.json.textures[e],i=t.getImageUri(n.source),s=new fr(n);if(s.uv=void 0,s.autoLoad=t.isProgressive,s.crossOrigin=!0,s.resType=t.getImageType(n.source),s.src=i,s.name=n.name||e,r.isBlobUrl(i)){var a=function t(){r.revokeBlobUrl(i),s.off("load",t),s.off("error",t)};s.on("load",a,!0),s.on("error",a,!0)}return t.json.samplers&&Object.assign(s,t.json.samplers[n.sampler]),n.extensions&&(s=t.parseExtensions(n.extensions,s)),t.textures[e]=s,t.isProgressive?Promise.resolve():s.load(!t.ignoreTextureError)})))},parseBufferViews:function(){var t=this;this.bufferViews={},r.each(this.json.bufferViews,(function(e,n){var i=t.buffers[e.buffer],r=e.byteOffset||0,s=e.byteLength;t.bufferViews[n]={id:d.a.generateUUID("bufferView"),byteOffset:r,byteLength:s,buffer:i,byteStride:e.byteStride}})),this.isBinary||delete this.buffers},getTexture:function(t){var e=this.textures[t.index];if(!e)return null;var n=t.texCoord||0,i=t.index+"_"+n;return this.textures[i]?e=this.textures[i]:"number"==typeof e.uv&&e.uv!==n&&(e=e.clone(),this.textures[i]=e),e.uv=n,e.__gltfTextureInfo=t,e},getColorOrTexture:function(t){return Array.isArray(t)?new v.a(t[0],t[1],t[2]):(t instanceof Object&&"index"in t&&(t=t.index),this.textures[t])},parseMaterialCommonProps:function(t,e){switch(e.alphaMode){case"BLEND":t.transparent=!0;break;case"MASK":t.alphaCutoff="alphaCutoff"in e?e.alphaCutoff:.5;break;case"OPAQUE":default:t.ignoreTranparent=!0}e.doubleSided?t.side=Hr:t.side=Cr,e.transparencyTexture&&(t.transparency=this.getTexture(e.transparencyTexture))},createPBRMaterial:function(t){var e=new ur,n=t,i=!this.isUseExtension(n,"KHR_materials_unlit");if(i){var r=n.normalTexture;r&&(e.normalMap=this.getTexture(r),void 0!==r.scale?e.normalMapScale=r.scale:e.normalMapScale=1);var s=n.occlusionTexture;s&&(e.occlusionMap=this.getTexture(s),void 0!==s.strength?e.occlusionStrength=s.strength:e.occlusionStrength=1);var a=n.emissiveTexture;a&&(e.emission=this.getTexture(a))}else e.lightType="NONE";if(this.isUseExtension(n,"KHR_materials_pbrSpecularGlossiness"))this.parseExtension(n.extensions,"KHR_materials_pbrSpecularGlossiness",e);else if(n.pbrMetallicRoughness){var o=n.pbrMetallicRoughness;o.baseColorFactor&&e.baseColor.fromArray(o.baseColorFactor),o.baseColorTexture&&(e.baseColorMap=this.getTexture(o.baseColorTexture)),i&&(o.metallicRoughnessTexture&&(e.metallicRoughnessMap=this.getTexture(o.metallicRoughnessTexture),e.occlusionMap===e.metallicRoughnessMap&&(e.occlusionMap=null,e.isOcclusionInMetallicRoughnessMap=!0)),"roughnessFactor"in o&&(e.roughness=o.roughnessFactor),"metallicFactor"in o&&(e.metallic=o.metallicFactor))}return e.baseColorMap&&this._parseTextureTransform(e,e.baseColorMap),e},_parseTextureTransform:function(t,e){var n=e.__gltfTextureInfo;if(this.isUseExtension(n,"KHR_texture_transform")){var i=n.extensions.KHR_texture_transform;if(void 0!==i.texCoord&&(e.uv=i.texCoord),i.offset||i.rotation||i.scale){var r=i.offset||[0,0],s=i.rotation||0,a=i.scale||[1,1],o=(new y.a).fromRotationTranslationScale(s,r[0],r[1],a[0],a[1]);0===e.uv?t.uvMatrix=o:1===e.uv&&(t.uvMatrix1=o)}}},createKMCMaterial:function(t,e){var n,i=new qe;return e?(n=e.values,i.lightType=e.technique):n=t.values,i.diffuse=this.getColorOrTexture(n.diffuse)||i.diffuse,i.specular=this.getColorOrTexture(n.specular)||i.specular,i.emission=this.getColorOrTexture(n.emission)||i.emission,i.ambient=this.getColorOrTexture(n.ambient)||i.ambient,n.normalMap&&(i.normalMap=this.getColorOrTexture(n.normalMap)),"number"==typeof n.transparency?(i.transparency=n.transparency,i.transparency<1&&(i.transparent=!0)):"string"==typeof n.transparency&&(i.transparency=this.getColorOrTexture(n.transparency),i.transparent=!0),!0===n.transparent&&(i.transparent=!0),"shininess"in n&&(i.shininess=n.shininess),this._parseTextureTransform(i,i.diffuse),i},parseMaterials:function(){var t=this;this.materials={},r.each(this.json.materials,(function(e,n){if(t.customMaterialCreator){var i=t.customMaterialCreator(n,e,t.json,t);if(i)return void(t.materials[n]=i)}var r,s=null;t.isUseExtension(e,"KHR_materials_common")&&(s=e.extensions.KHR_materials_common),t.isGLTF2&&!s?(r=t.isUseExtension(e,"KHR_techniques_webgl")?t.parseExtension(e.extensions,"KHR_techniques_webgl"):t.createPBRMaterial(e),t.parseMaterialCommonProps(r,e)):r=t.createKMCMaterial(e,s),(r=t.parseExtensions(e.extensions,r,{ignoreExtensions:{KHR_techniques_webgl:1,KHR_materials_common:1,KHR_materials_pbrSpecularGlossiness:1},isMaterial:!0})).name=e.name||n,t.materials[n]=r,t.parseTechnique(e,r)}))},sparseAccessorHandler:function(t,e){if(!e)return t;var n=e.count,i=t.data.constructor,s=new i(t.realLength);s.set(t.data),t.data=s;for(var a=this.bufferViews[e.values.bufferView],o=new i(a.buffer,a.byteOffset+(e.values.byteOffset||0),n*t.size),u=new(i=Dr[e.indices.componentType][1])((a=this.bufferViews[e.indices.bufferView]).buffer,a.byteOffset+(e.indices.byteOffset||0),n),c=0;c<n;c++)r.copyArrayData(s,o,u[c]*t.size,c*t.size,t.size);return t},getAccessorData:function(t,e){var n=this.json.accessors[t];if(n.data)return n.data;var i,r=yr(Dr[n.componentType],2)[1],s=Fr[n.type],a=this.bufferViews[n.bufferView],o=n.count*s;if(a)if(a.byteStride&&a.byteStride>s*r.BYTES_PER_ELEMENT)a.array=new r(a.buffer,a.byteOffset,a.byteLength/r.BYTES_PER_ELEMENT),i=new w(a.array,s,{offset:n.byteOffset||0,stride:a.byteStride,bufferViewId:a.id});else{var u,c=(n.byteOffset||0)+a.byteOffset;if(c%r.BYTES_PER_ELEMENT||this.forceCreateNewBuffer)u=new r(a.buffer.slice(c,c+o*r.BYTES_PER_ELEMENT));else u=new r(a.buffer,c,o);i=new w(u,s)}return n.sparse&&(i||(i=new w(new r(o),s)),i=this.sparseAccessorHandler(i,n.sparse)),i=this.parseExtensions(n.extensions,i,{isDecode:e,isAccessor:!0}),n.data=i,n.normalized&&(i.normalized=!0),i},getArrayByAccessor:function(t,e){var n=this.json.accessors[t];if(n.array)return n.array;var i=this.getAccessorData(t,e);if(!i.stride&&!i.offset&&1===i.size)return i.data;var r=[];return i.traverse((function(t){r.push(t.toArray?t.toArray():t)})),n.array=r,r},parseTechnique:function(t,e){var n=null;this.json.techniques&&(n=this.json.techniques[t.technique]),n&&n.states&&(n.states.enable.forEach((function(t){switch(t){case Nr:e.blend=!0;break;case br:e.depthTest=!0;break;case wr:e.cullFace=!0}})),r.each(n.states.functions,(function(t,n){switch(n){case"blendEquationSeparate":e.blendEquation=t[0],e.blendEquationAlpha=t[1];break;case"blendFuncSeparate":e.blendSrc=t[0],e.blendDst=t[1],e.blendSrcAlpha=t[2],e.blendDstAlpha=t[3];break;case"depthMask":e.depthMask=t[0];break;case"cullFace":e.cullFaceType=t[0];break;default:e[n]=t}})),e.cullFace?e.side=e.cullFaceType===Cr?Pr:Cr:e.side=Hr)},createMorphGeometry:function(t,e){var n=this,i=new Bn,s=i.targets={};return r.each(t.targets,(function(t){r.each(t,(function(t,e){var i=Ur[e].name;s[i]||(s[i]=[]);var r=n.getAccessorData(t,!0);s[i].push(r)}))})),i.weights=e||new Float32Array(t.targets.length),i},handlerGeometry:function(t,e){var n=void 0===e.mode?4:e.mode;if(e.extensions){var i=this.parseExtensions(e.extensions,null,{primitive:e,isPrimitive:!0});if(i)return i.mode=n,i}t||(t=new Z({mode:n})),"indices"in e&&(t.indices=this.getAccessorData(e.indices));var r=e.attributes;for(var s in r){var a=Ur[s];if(a){var o=!(this.isUnQuantizeInShader&&a.decodeMatName);t[a.name]=this.getAccessorData(r[s],o),o||(t[a.decodeMatName]=t[a.name].decodeMat,delete t[a.name].decodeMat)}else m.a.warn("Unknow attribute named ".concat(s,"!"))}return t},handlerSkinedMesh:function(t,e){e&&(t.skeleton=e,this.useInstanced&&(t.useInstanced=!0))},fixProgressiveGeometry:function(t,e){t._geometry=e,this.isProgressive&&t._meshes&&t._meshes.forEach((function(t){t.visible=!0,t.geometry=e}))},parseGeometries:function(){var t=this,e=r.serialRun(this.json.meshes,(function(e){return r.serialRun(e.primitives,(function(n){var i;n.targets&&n.targets.length&&(i=t.createMorphGeometry(n,e.weights)),n._geometry=i;var r=t.handlerGeometry(i,n);return r&&r.then?r.then((function(e){t.fixProgressiveGeometry(n,e)}),(function(t){m.a.error("geometry parse error",t)})):(t.fixProgressiveGeometry(n,r),r)}))}));return this.isProgressive?null:e},parseMesh:function(t,e,n){var i=this,r=this.json.meshes[t];r.primitives.forEach((function(s){var a,o=i.skins&&i.skins[n.skin];if(s.meshNode)a=s.meshNode.clone();else{var u=i.materials[s.material]||new qe;a=new(o?ci:si)({geometry:s._geometry,material:u,name:"mesh-"+(r.name||t)}),s.meshNode=a}i.handlerSkinedMesh(a,o),i.isProgressive&&!a.geometry&&(a.visible=!1,s._meshes=s._meshes||[],s._meshes.push(a)),e.addChild(a),i.meshes.push(a)}))},parseCameras:function(){var t=this;this.cameras={};var e=window.innerWidth/window.innerHeight;r.each(this.json.cameras,(function(n,i){var r;"perspective"===n.type&&n.perspective?((r=new Q).fov=d.a.radToDeg(n.perspective.yfov),r.near=n.perspective.znear,r.far=n.perspective.zfar,n.aspectRatio?r.aspect=n.aspectRatio:r.aspect=e):"orthographic"===n.type&&n.orthographic&&((r=new en).near=n.orthographic.znear,r.far=n.orthographic.zfar,r.right=n.orthographic.xmag,r.left=-1*r.right,r.top=n.orthographic.ymag,r.bottom=-1*r.top),(r=t.parseExtensions(n.extensions,r,{isCamera:!0}))&&(r.name=n.name||i,t.cameras[i]=r)}))},handlerNodeTransform:function(t,e){e.matrix?t.matrix.fromArray(e.matrix):(e.rotation&&t.quaternion.fromArray(e.rotation),e.scale&&t.setScale(e.scale[0],e.scale[1],e.scale[2]),e.translation&&(t.x=e.translation[0],t.y=e.translation[1],t.z=e.translation[2]))},parseNode:function(t,e){var n,i=this,r=this.json.nodes[t];r||m.a.warn("GLTFParser.parseNode: nodes[".concat(t,"] has nothing.")),n=new g({name:r.name,animationId:t}),n=this.parseExtensions(r.extensions,n,{isNode:!0}),"camera"in r&&this.cameras[r.camera]&&n.addChild(this.cameras[r.camera]),this.handlerNodeTransform(n,r),r.jointName?(n.jointName=r.jointName,this.jointMap[n.jointName]=n):this.isGLTF2&&(n.jointName=t,this.jointMap[t]=n),r.meshes?r.meshes.forEach((function(t){return i.parseMesh(t,n,r)})):"mesh"in r&&this.parseMesh(r.mesh,n,r),r.children&&r.children.forEach((function(t){return i.parseNode(t,n)})),e.addChild(n)},parseAnimations:function(){var t=this;if(!this.json.animations)return null;var e=this.isMultiAnim,n={},i=[],s={};return r.each(this.json.animations,(function(r){r.channels.forEach((function(e){var n=e.target.path,a=e.target.id;t.isGLTF2&&(a=e.target.node);var o=r.samplers[e.sampler],u=t.isGLTF2?o.input:r.parameters[o.input],c=t.isGLTF2?o.output:r.parameters[n],h=t.getArrayByAccessor(u,!0),f=t.getArrayByAccessor(c,!0);"rotation"===n&&(n="quaternion");var l=new Or({interpolationType:o.interpolation||"LINEAR",nodeName:a,keyTime:h,states:f,type:Or.getType(n)});i.push(l),s[a]=!0})),e&&i.length&&(n[r.name]={animStatesList:i},i=[])})),e&&Object.keys(n).length>0&&(i=Object.values(n)[0].animStatesList),i.length?new Rr({rootNode:this.node,animStatesList:i,validAnimationIds:s,clips:n}):null},parseScene:function(){var t=this;this.parseMaterials(),this.jointMap={},this.meshes=[],this.lights=[],this.node=new g({needCallChildUpdate:!1}),this.parseCameras();var e=this.json.scenes[this.getDefaultSceneName()];if(!e)return m.a.warn("GLTFParser:no scene!"),{node:this.node,meshes:[],cameras:[],lights:[],textures:[],materials:[]};var n=e.nodes;this.parseSkins(),n.forEach((function(e){return t.parseNode(e,t.node)})),this.resetSkinInfo(this.node);var i={node:this.node,scene:this.node,meshes:this.meshes,json:this.json,cameras:Object.values(this.cameras),lights:this.lights,textures:Object.values(this.textures),materials:Object.values(this.materials)},r=this.parseAnimations();return r&&(this.node.setAnim(r),r.play(),i.anim=r),this.parseExtensions(e.extensions,null,{isScene:!0}),this.parseExtensions(this.json.extensions,i,{isGlobal:!0,methodName:"parseOnEnd"}),i},getDefaultSceneName:function(){return void 0!==this.defaultScene?this.defaultScene:this.json.scenes?Object.keys(this.json.scenes)[0]:null},parseSkins:function(){var t=this;this.skins=[];var e=this.json.skins;e&&e.length&&(this.skins=e.map((function(e){for(var n=new fi,i=e.joints.length,r=t.getArrayByAccessor(e.inverseBindMatrices,!0),s=0;s<i;s++){var a=(new o.a).fromArray(r[s]);n.inverseBindMatrices.push(a)}return n.jointNames=e.joints,n})))},resetSkinInfo:function(t){var e={};t.traverse((function(t){var n="".concat(t.id,"_").concat(t.name);e[t.jointName]=n,t.jointName=n})),this.skins.forEach((function(t){t.jointNames=t.jointNames.map((function(t){return e[t]}))})),t.resetSkinedMeshRootNode()}}),Br=Gr,Vr=s.a.create({Extends:nr,isGLTFLoader:!0,className:"GLTFLoader",constructor:function(){Vr.superclass.constructor.call(this)},load:function(t){var e=this;return this.loadRes(t.src,"buffer").then((function(n){return new Br(n,t).parse(e)})).catch((function(t){throw m.a.error("load gltf failed",t.message,t.stack),t}))}});rr.addLoader("gltf",Vr),rr.addLoader("glb",Vr);var Xr=Vr,jr=n(106),kr=n.n(jr),zr=C.a.RGBA,qr=C.a.NEAREST,Wr=C.a.CLAMP_TO_EDGE,Yr=C.a.FLOAT,Zr=s.a.create({Extends:nr,isHDRLoader:!0,className:"HDRLoader",constructor:function(){Zr.superclass.constructor.call(this)},load:function(t){return this.loadRes(t.src,"buffer").then((function(e){try{var n=kr()(e),i=n.shape,r=n.data,s=new qt({width:i[0],height:i[1],flipY:t.flipY||!1,image:r,type:Yr,magFilter:qr,minFilter:qr,wrapS:Wr,wrapT:Wr,internalFormat:zr,format:zr});return Object.assign(s,t),s}catch(t){m.a.error("HDRLoader:parse error => ",t)}return null}))}});rr.addLoader("hdr",Zr);var Kr=Zr,Qr=s.a.create({Statics:{HEADER_LEN:64,COMPRESSED_2D:0,COMPRESSED_3D:1,TEX_2D:2,TEX_3D:3},isKhronosTextureContainer:!0,className:"KhronosTextureContainer",constructor:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.arrayBuffer=t,this.baseOffset=n;var i=new Uint8Array(this.arrayBuffer,this.baseOffset,12);if(171===i[0]&&75===i[1]&&84===i[2]&&88===i[3]&&32===i[4]&&49===i[5]&&49===i[6]&&187===i[7]&&13===i[8]&&10===i[9]&&26===i[10]&&10===i[11]){var r=Uint32Array.BYTES_PER_ELEMENT,s=new DataView(this.arrayBuffer,this.baseOffset+12,13*r),a=s.getUint32(0,!0),o=67305985===a;this.glType=s.getUint32(1*r,o),this.glTypeSize=s.getUint32(2*r,o),this.glFormat=s.getUint32(3*r,o),this.glInternalFormat=s.getUint32(4*r,o),this.glBaseInternalFormat=s.getUint32(5*r,o),this.pixelWidth=s.getUint32(6*r,o),this.pixelHeight=s.getUint32(7*r,o),this.pixelDepth=s.getUint32(8*r,o),this.numberOfArrayElements=s.getUint32(9*r,o),this.numberOfFaces=s.getUint32(10*r,o),this.numberOfMipmapLevels=s.getUint32(11*r,o),this.bytesOfKeyValueData=s.getUint32(12*r,o),this.numberOfMipmapLevels=Math.max(1,this.numberOfMipmapLevels),0!==this.pixelHeight&&0===this.pixelDepth?0===this.numberOfArrayElements?this.numberOfFaces===e?0===this.glType?this.loadType=Qr.COMPRESSED_2D:this.loadType=Qr.TEX_2D:m.a.warn("number of faces expected"+e+", but found "+this.numberOfFaces):m.a.warn("texture arrays not currently supported"):m.a.warn("only 2D textures currently supported")}else m.a.error("texture missing KTX identifier")},mipmaps:function(t){for(var e=[],n=Qr.HEADER_LEN+this.bytesOfKeyValueData,i=this.pixelWidth,r=this.pixelHeight,s=t?this.numberOfMipmapLevels:1,a=0;a<s;a++){for(var o=new Int32Array(this.arrayBuffer,this.baseOffset+n,1)[0],u=0;u<this.numberOfFaces;u++){var c=new Uint8Array(this.arrayBuffer,this.baseOffset+n+4,o);e.push({data:c,width:i,height:r}),n+=o+4,n+=3-(o+3)%4}i=Math.max(1,.5*i),r=Math.max(1,.5*r)}return e}}),Jr=s.a.create({Extends:nr,Statics:{astc:"WEBGL_compressed_texture_astc",etc:"WEBGL_compressed_texture_etc",etc1:"WEBGL_compressed_texture_etc1",pvrtc:"WEBGL_compressed_texture_pvrtc",s3tc:"WEBGL_compressed_texture_s3tc"},isKTXLoader:!0,className:"KTXLoader",constructor:function(){tt.use(Jr.astc),tt.use(Jr.atc),tt.use(Jr.etc),tt.use(Jr.etc1),tt.use(Jr.pvrtc),tt.use(Jr.s3tc),tt.use(Jr.s3tc_srgb),Jr.superclass.constructor.call(this)},load:function(t){var e=this;return t.src instanceof ArrayBuffer?Promise.resolve(this.createTexture(t,t.src)):ArrayBuffer.isView(t.src)?Promise.resolve(this.createTexture(t,t.src.buffer,t.src.byteOffset)):this.loadRes(t.src,"buffer").then((function(n){return e.createTexture(t,n)}))},createTexture:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=new Qr(e,1,n),r={compressed:0===i.glType,type:i.glType,width:i.pixelWidth,height:i.pixelHeight,internalFormat:i.glInternalFormat,format:i.glFormat,isCubemap:6===i.numberOfFaces};return i.numberOfMipmapLevels>=Math.floor(Math.log2(Math.max(r.width,r.height))+1)?(r.mipmaps=i.mipmaps(!0),r.image=r.mipmaps[0].data):(r.mipmaps=null,r.image=i.mipmaps(!1)[0].data),new qt(r)}});rr.addLoader("ktx",Jr);var $r=Jr,ts=s.a.create({Mixes:a.a,isLoadQueue:!0,className:"LoadQueue",Statics:{addLoader:function(t,e){m.a.warn("LoadQueue.addLoader is duplicated, please use Loader.addLoader"),rr.addLoader(t,e)}},constructor:function(t){this._source=[],this.add(t)},maxConnections:2,_source:null,_loaded:0,_connections:0,_currentIndex:-1,add:function(t){return t&&(t=Array.isArray(t)?t:[t],this._source=this._source.concat(t)),this},get:function(t){if(!t)return null;for(var e=this._source,n=0;n<e.length;n++){var i=e[n];if(i.id===t||i.src===t)return i}return null},getContent:function(t){var e=this.get(t);return e&&e.content},start:function(){return this._loader||(this._loader=new rr),this._loadNext(),this},_loadNext:function(){var t=this,e=this._source,n=e.length;if(this._loaded>=n)this.fire("complete");else if(this._currentIndex<n-1&&this._connections<this.maxConnections){var i=++this._currentIndex,r=e[i];this._connections++,this._loader.load(r).then((function(e){t._onItemLoad(i,e)}),(function(e){t._onItemError(i,e)}))}},_onItemLoad:function(t,e){var n=this._source[t];n.loaded=!0,n.content=e,this._connections--,this._loaded++,this.fire("load",n),this._loadNext()},_onItemError:function(t,e){var n=this._source[t];n.error=e,this._connections--,this._loaded++,this.fire("error",n),this._loadNext()},getSize:function(t){for(var e=0,n=this._source,i=0;i<n.length;i++){var r=n[i];e+=(t?r.loaded&&r.size:r.size)||0}return e},getLoaded:function(){return this._loaded},getTotal:function(){return this._source.length},getAllContent:function(){return this._source.map((function(t){return t.content}))}}),es=s.a.create({Extends:nr,isShaderMaterialLoader:!0,className:"ShaderMaterialLoader",constructor:function(){es.superclass.constructor.call(this)},load:function(t){var e=[this.loadRes(t.fs),this.loadRes(t.vs)],n=Object.assign({},t);return Promise.all(e).then((function(t){return n.fs=t[0],n.vs=t[1],new Dn(n)}),(function(t){m.a.warn("ShaderMaterial Loader Failed for ".concat(t))}))}}),ns=es,is=s.a.create({Extends:nr,isTextureLoader:!0,className:"TextureLoader",constructor:function(){is.superclass.constructor.call(this)},load:function(t){return this.loadImg(t.src,t.crossOrigin).then((function(e){var n=Object.assign({},t);return n.image=e,delete n.type,new qt(n)})).catch((function(t){throw m.a.error("load Texture failed",t.message,t.stack),t}))}});rr.addLoader("Texture",is);var rs=is,ss=C.a.LINES,as={x:[0,0,0,1,0,0],y:[0,0,0,0,1,0],z:[0,0,0,0,0,1]},os=s.a.create({Extends:g,isAxisHelper:!0,className:"AxisHelper",size:1,constructor:function(t){os.superclass.constructor.call(this,t),this.init()},addAxis:function(t){var e=new si({name:"AxisHelper_"+t,geometry:new Z({mode:ss,vertices:new w(new Float32Array(as[t]),3),indices:new w(new Uint16Array([0,1]),1)}),material:new qe({diffuse:new v.a(as[t][3],as[t][4],as[t][5]),lightType:"NONE"})});this.addChild(e)},init:function(){this.setScale(this.size),this.addAxis("x"),this.addAxis("y"),this.addAxis("z")}}),us=os,cs=C.a.LINES,hs=s.a.create({Extends:si,isAxisNetHelper:!0,className:"AxisNetHelper",size:5,constructor:function(t){hs.superclass.constructor.call(this,t),this.color=this.color||new v.a(.5,.5,.5);for(var e=new Z({mode:cs}),n=this.size,i=2*n+1,r=0;r<i;r++){var s=r/n-1;e.addLine([s,0,-1],[s,0,1]),e.addLine([-1,0,s],[1,0,s])}this.geometry=e,this.material=new qe({diffuse:this.color,lightType:"NONE"})}}),fs=hs,ls=C.a.LINES,ds=new c.a,ms=s.a.create({Extends:si,isCameraHelper:!0,className:"CameraHelper",camera:null,color:null,constructor:function(t){ms.superclass.constructor.call(this,t),this.color||(this.color=new v.a(.3,.9,.6)),this.material=new qe({lightType:"NONE",diffuse:this.color||new v.a(.5,.5,.5,1)}),this.geometry=new Z({mode:ls,isStatic:!1,vertices:new w(new Float32Array(27),3),indices:new w(new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7,8,4,8,5,8,6,8,7]),1)})},onUpdate:function(){this.camera&&(this.camera.updateViewProjectionMatrix(),this._buildGeometry())},_buildGeometry:function(){var t=this.camera,e=this.geometry;e.vertices.set(0,t.unprojectVector(ds.set(-1,-1,1))),e.vertices.set(1,t.unprojectVector(ds.set(-1,1,1))),e.vertices.set(2,t.unprojectVector(ds.set(1,1,1))),e.vertices.set(3,t.unprojectVector(ds.set(1,-1,1))),e.vertices.set(4,t.unprojectVector(ds.set(-1,-1,-1))),e.vertices.set(5,t.unprojectVector(ds.set(-1,1,-1))),e.vertices.set(6,t.unprojectVector(ds.set(1,1,-1))),e.vertices.set(7,t.unprojectVector(ds.set(1,-1,-1))),e.vertices.set(8,t.worldMatrix.getTranslation(ds))}}),_s=ms,ps=s.a.create({Extends:M,isAmbientLight:!0,className:"AmbientLight",autoUpdateWorldMatrix:!1,constructor:function(t){ps.superclass.constructor.call(this,t)}}),gs=ps,vs=s.a.create({Statics:{ltcTexture1:null,ltcTexture2:null,ltcTextureReady:!1,ltcTextureUrl:"//g.alicdn.com/tmapp/static/4.0.63/ltcTexture.js",loadLtcTexture:function(){var t=this;this.ltcTextureReady||void 0===this._loader&&(this._loader=new rr,this._loader.load({type:"json",src:this.ltcTextureUrl}).then((function(e){t._loader=null,t.ltcTexture1=new ve({data:e.ltcTexture1}),t.ltcTexture2=new ve({data:e.ltcTexture2}),t.ltcTextureReady=!0})))}},Extends:M,isAreaLight:!0,className:"AreaLight",width:10,height:10,_enabled:!0,enabled:{get:function(){return this._enabled&&vs.ltcTextureReady},set:function(t){this._enabled=t}},constructor:function(t){vs.superclass.constructor.call(this,t),vs.loadLtcTexture()},ltcTexture1:{get:function(){return vs.ltcTexture1},set:function(t){vs.ltcTexture1=t}},ltcTexture2:{get:function(){return vs.ltcTexture2},set:function(t){vs.ltcTexture2=t}}}),Es=vs,Ts=new qe({lightType:"NONE"}),Ms=new v.a(1,1,1),As=new v.a,Is=s.a.create({isMeshPicker:!0,className:"MeshPicker",debug:!1,renderer:null,colorMeshMap:null,constructor:function(t){Object.assign(this,t),this.colorMeshMap={},this.init()},createFramebuffer:function(){if(!this.framebuffer){var t=this.renderer;this.framebuffer=new re(t,{useVao:t.useVao,width:t.width,height:t.height})}},renderDebug:function(){this.framebuffer.render(0,.7,.3,.3)},createMeshNumberId:function(t){"numberId"in t||(t.numberId=10*Number(t.id.replace(/^.*_(\d+)$/,"$1")),t.color=Object(r.padLeft)(t.numberId.toString(16),6),this.colorMeshMap[t.color]=t)},renderColoredMeshes:function(){var t=this,e=this.renderer,n=this.framebuffer;n.bind(),e.clear(Ms);var i=e.forceMaterial;e.forceMaterial=Ts,e.renderList.traverse((function(n){t.createMeshNumberId(n),Ts.diffuse.fromHEX(n.color),Ts.isDirty=!0,e.renderMesh(n)})),e.forceMaterial=i,n.unbind()},getSelection:function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=this.renderer.pixelRatio,s=[],a=this.framebuffer.readPixels(t*r,e*r,n*r,i*r),o=0;o<a.length;o+=4){var u=As.fromUintArray(a,o).toHEX();this.colorMeshMap[u]&&s.push(this.colorMeshMap[u])}return s},init:function(){var t=this;this.createFramebuffer(),this.renderer.on("afterRender",(function(){t.renderColoredMeshes(),t.debug&&t.renderDebug()}))}}),Ls=n(107),Os=n.n(Ls).a,Ss={get:function(){if(void 0===this._isWebGLSupport)try{var t=document.createElement("canvas"),e=t.getContext("webgl");e.clearColor(0,1,0,1),e.clear(e.COLOR_BUFFER_BIT);var n=new Uint8Array(4);e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,n),0===n[0]&&255===n[1]&&0===n[2]&&255===n[3]?this._isWebGLSupport=!0:this._isWebGLSupport=!1,t=null,e=null,n=null}catch(t){this._isWebGLSupport=!1}return this._isWebGLSupport}},Rs=n(28)},,,function(t,e,n){n(108),t.exports=n(114)}]),"undefined"!=typeof window&&window.Hilo3d&&"object"==typeof exports&&"object"==typeof module&&(module.exports=window.Hilo3d);

/***/ }),

/***/ "../src/framework/client/canvas_app_events.js":
/*!****************************************************!*\
  !*** ../src/framework/client/canvas_app_events.js ***!
  \****************************************************/
/*! exports provided: default, CanvasAppEvents, WindowEvents, TimeEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasAppEvents", function() { return CanvasAppEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowEvents", function() { return WindowEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeEvents", function() { return TimeEvents; });
/* harmony import */ var _core_exchange_core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/core/nano_thingy.js */ "../src/framework/core/exchange/core/nano_thingy.js");
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable max-classes-per-file */

/**
 * @file canvas_app_events.js
 * @author tynrare
 * @version 2
 * @module Engine
 */


/**
 * Manages events for
 */

var WindowEvents = /*#__PURE__*/function (_Thingy) {
  _inherits(WindowEvents, _Thingy);

  var _super = _createSuper(WindowEvents);

  function WindowEvents() {
    _classCallCheck(this, WindowEvents);

    return _super.apply(this, arguments);
  }

  _createClass(WindowEvents, [{
    key: "initCallback",

    /**
     * Init handler. Listens events data
     */
    value: function initCallback() {
      this.addEvent('resize', window);

      try {
        //uncovered branch!
        var canvas = this.set('canvas', this.path('/render/canvas'));
        this.addEvent('keydown', document);
        this.addEvent('keyup', document);
        this.addEvent('wheel', canvas);

        if ('ontouchmove' in window) {
          this.addEvent('touchstart', canvas, 'mousedown');
          this.addEvent('touchmove', canvas, 'mousemove');
          this.addEvent('touchend', canvas, 'mouseup');
        } else {
          this.addEvent('contextmenu', document);
          this.addEvent('mousedown', canvas);
          this.addEvent('mousemove', canvas);
          this.addEvent('mouseup', canvas);
        }
      } catch (err) {
        cgn.log.groupWarn('CORE_WARNS', "AppEventsWrapper: Canvas events init error, make sure Hilo3dEngineThingy on right place", err);
      }
    }
    /**
     * @param {string} type event name to listen
     * @param {object} element dom element to listen on
     * @param {string} alias event name to fire
     */

  }, {
    key: "addEvent",
    value: function addEvent(type, element) {
      var _this = this;

      var alias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : type;

      var func = function func(evt) {
        _this.events.emit(alias, evt);
      };

      element.addEventListener(type, func);
      this.touch('eventIds', function () {
        return new _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["ShelfThingy"]();
      }).add({
        type: type,
        func: func,
        element: element
      });
    }
    /**
     * removes events
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      var events = this.get('eventIds');

      for (var k in events.properties) {
        var e = events.properties[k];
        e.element.removeEventListener(e.type, e.func);
      }
    }
  }]);

  return WindowEvents;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);
/**
 * Manages events for
 */


var InputEvents = /*#__PURE__*/function (_Thingy2) {
  _inherits(InputEvents, _Thingy2);

  var _super2 = _createSuper(InputEvents);

  function InputEvents() {
    _classCallCheck(this, InputEvents);

    return _super2.apply(this, arguments);
  }

  _createClass(InputEvents, [{
    key: "initCallback",

    /* eslint-disable complexity, max-lines-per-function */

    /**
     * @fires input#left
     * @fires input#leftup
     * @fires input#leftdown
     * @fires input#right
     * @fires input#rightup
     * @fires input#rightdown
     */
    value: function initCallback() {
      var _this2 = this;

      this.events.on('../window.keydown', function (event) {
        if (!event.repeat) {
          _this2.keypress(event, true);
        }
      });
      this.events.on('../window.keyup', function (event) {
        if (!event.repeat) {
          _this2.keypress(event, false);
        }
      });
    }
    /**
     * @param {object} event .
     * @param {boolean} down was button down or up
     */

  }, {
    key: "keypress",
    value: function keypress(event, down) {
      var action = down ? 'down' : 'up';

      switch (event.code) {
        case 'KeyA':
        case 'KeyH':
          /**
           * @event input#leftup
           * @type {KeyboardEvent}
           */

          /**
           * @event input#leftdown
           * @type {KeyboardEvent}
           */
          this.events.emit('left' + action, event);
          /**
           * @event input#left
           * @type {object}
           * @property {KeyboardEvent} event
           * @property {boolean} down
           */

          this.events.emit('left', {
            event: event,
            down: down
          });
          break;

        case 'KeyD':
        case 'KeyL':
          /**
           * @event input#rightup
           * @type {KeyboardEvent}
           */

          /**
           * @event input#rightdown
           * @type {KeyboardEvent}
           */
          this.events.emit('right' + action, event);
          /**
           * @event input#right
           * @type {object}
           * @property {KeyboardEvent} event
           * @property {boolean} down
           */

          this.events.emit('right', {
            event: event,
            down: down
          });
          break;

        case 'Space':
          /**
           * @event input#spaceup
           * @type {KeyboardEvent}
           */

          /**
           * @event input#spacedown
           * @type {KeyboardEvent}
           */
          this.events.emit('space' + action, event);
          /**
           * @event input#space
           * @type {object}
           * @property {KeyboardEvent} event
           * @property {boolean} down
           */

          this.events.emit('space', {
            event: event,
            down: down
          });
          break;

        case 'Escape':
          /**
           * @event input#spaceup
           * @type {KeyboardEvent}
           */

          /**
           * @event input#spacedown
           * @type {KeyboardEvent}
           */
          this.events.emit('esc' + action, event);
          /**
           * @event input#space
           * @type {object}
           * @property {KeyboardEvent} event
           * @property {boolean} down
           */

          this.events.emit('esc', {
            event: event,
            down: down
          });
          break;
        //no default
      }
    }
    /* eslint-enable complexity, max-lines-per-function */

  }]);

  return InputEvents;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);
/**
 * Manages events for
 */


var TimeEvents = /*#__PURE__*/function (_Thingy3) {
  _inherits(TimeEvents, _Thingy3);

  var _super3 = _createSuper(TimeEvents);

  function TimeEvents() {
    _classCallCheck(this, TimeEvents);

    return _super3.apply(this, arguments);
  }

  _createClass(TimeEvents, [{
    key: "initCallback",

    /**
     * Init handler. Listens events data
     */
    value: function initCallback() {
      this.nextFrame();
    }
    /**
     * Removes interval
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      cgn.delays.clearInterval(this._frameId);
    }
    /**
     * Triggers next frame events
     *
     * @private
     */

  }, {
    key: "nextFrame",
    value: function nextFrame() {
      var _this3 = this;

      var interval = 1000 / this.properties.fps;
      /* eslint-disable max-statements */

      var id = cgn.delays.timeout(function () {
        if (_this3.lifestatus <= _core_exchange_core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_STATUS"].DISPOSED) {
          return;
        }

        try {
          _this3.properties.frame += 1;

          _this3.events.emit('frame', _this3.properties.frame);

          _this3.nextFrame();
        } catch (err) {
          if (_this3.properties.strictLoop) {
            // #draft
            cgn.log.error('(/env/time.strictLoop) Critical error in main loop:', err);
            {
              var el = document.createElement('div');
              el.classList.add('error-notify');
              var a = document.createElement('a');
              a.innerHTML = 'Critical error! Press [Space] to ';
              var b = document.createElement('button');
              b.innerHTML = 'restart';

              b.onclick = function () {
                _this3.owner.events.emit('app_restart_input');
              };

              el.appendChild(a);
              el.appendChild(b);
              document.getElementById('app-root').appendChild(el);
            }

            _this3.owner.events.emit('critical_error');
          } else {
            _this3.nextFrame();
          }
        }
      }, interval);
      this._frameId = id;
      /* eslint-enable max-statements */
    }
    /**
     * @override
     * @returns {object} class default props
     */

  }, {
    key: "getDefaultProperties",
    value: function getDefaultProperties() {
      return {
        fps: 60,
        strictLoop: true,
        frame: 0
      };
    }
  }]);

  return TimeEvents;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);
/**
 * Class wraps and emits canvas, window, and input events
 */


var CanvasAppEvents = /*#__PURE__*/function (_Thingy4) {
  _inherits(CanvasAppEvents, _Thingy4);

  var _super4 = _createSuper(CanvasAppEvents);

  function CanvasAppEvents() {
    _classCallCheck(this, CanvasAppEvents);

    return _super4.apply(this, arguments);
  }

  _createClass(CanvasAppEvents, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        window: new WindowEvents(),
        time: new TimeEvents(),
        input: new InputEvents()
      };
    }
  }]);

  return CanvasAppEvents;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (CanvasAppEvents);


/***/ }),

/***/ "../src/framework/client/index.js":
/*!****************************************!*\
  !*** ../src/framework/client/index.js ***!
  \****************************************/
/*! exports provided: CanvasAppEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas_app_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas_app_events.js */ "../src/framework/client/canvas_app_events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasAppEvents", function() { return _canvas_app_events_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * @file index.js
 * @author tynrare
 * @version 1
 * @module Client
 */



/***/ }),

/***/ "../src/framework/core/core_namespace.js":
/*!***********************************************!*\
  !*** ../src/framework/core/core_namespace.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/logger.js */ "../src/framework/core/utils/logger.js");
/* harmony import */ var _core_utils_events_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/events_manager.js */ "../src/framework/core/utils/events_manager.js");
/* harmony import */ var _core_utils_delays_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/delays.js */ "../src/framework/core/utils/delays.js");
/* harmony import */ var _core_utils_assert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/assert.js */ "../src/framework/core/utils/assert.js");
/* harmony import */ var _core_utils_appearance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/appearance.js */ "../src/framework/core/utils/appearance.js");
/**
 * @file core_namespace.js
 * @author tynrare
 * @version 1
 * @module Core/CoreNamespace
 */





/**
 * От core game namespace. Глобальный объект, доступный во всем коде.
 * Хранит в себе основные игровые и сервисные методы и параметры
 *
 * @namespace
 * @public
 * @borrows module:Utils/Logger.Logger as logger
 * @borrows module:Utils/EventsManager.EventsManager as events
 */

var cgn = {
  /**
   * @see {@link module:Core/Utils/Logger.Logger}
   * @static
   */
  log: _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0__["default"],

  /**
   * @see {@link module:Core/Utils/EventsManager.EventsManager}
   * @static
   */
  events: _core_utils_events_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"],

  /**
   * @see {@link module:Core/Utils/Delays.Delays}
   * @static
   */
  delays: _core_utils_delays_js__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see https://nodejs.org/api/assert.html
   * @static
   */
  assert: _core_utils_assert_js__WEBPACK_IMPORTED_MODULE_3__["default"],

  /**
   * @static
   */
  appearance: new _core_utils_appearance_js__WEBPACK_IMPORTED_MODULE_4__["default"]()
};
/* harmony default export */ __webpack_exports__["default"] = (cgn);

/***/ }),

/***/ "../src/framework/core/exchange/core/event_thingy.js":
/*!***********************************************************!*\
  !*** ../src/framework/core/exchange/core/event_thingy.js ***!
  \***********************************************************/
/*! exports provided: default, EventThingy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventThingy", function() { return EventThingy; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nano_thingy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nano_thingy.js */ "../src/framework/core/exchange/core/nano_thingy.js");
/* harmony import */ var _thingy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thingy.js */ "../src/framework/core/exchange/core/thingy.js");
/* harmony import */ var _shelf_thingy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shelf_thingy.js */ "../src/framework/core/exchange/core/shelf_thingy.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file event_thingy.js
 * @author tynrare
 * @version 2
 * @module Exchange
 */




var CALLBACH_FUNC_POSTFIX = 'Callback';
/**
 * Event management based on Thingy
 */

var EventThingy = /*#__PURE__*/function (_NanoThingy) {
  _inherits(EventThingy, _NanoThingy);

  var _super = _createSuper(EventThingy);

  function EventThingy() {
    _classCallCheck(this, EventThingy);

    return _super.apply(this, arguments);
  }

  _createClass(EventThingy, [{
    key: "on",

    /**
     * @param {string} type event name. Or path to node
     * @param {Function} callback .
     * @returns {string} event id
     * @example
     * on('/prop/prop.event') //will listen event from
     * rootnode.prop.prop.on('event')
     */
    value: function on(type, callback) {
      return this.registerListener(type, callback, 'on');
    }
    /**
     * @param {string} type event name
     * @param {Function} callback .
     * @returns {string} event id
     */

  }, {
    key: "once",
    value: function once(type, callback) {
      return this.registerListener(type, callback, 'once');
    }
    /**
     * @param {string} key id fenereted by 'on'
     */

  }, {
    key: "off",
    value: function off(key) {
      var evt = this.cacheEvents.get(key);

      if (evt) {
        evt.listener.lowlevel.off(evt.type, evt.callback);
        this.del(key);
      }
    }
    /**
     * Listens any other event and emits it
     *
     * @param {string} type event name
     */

  }, {
    key: "pipe",
    value: function pipe(type) {
      var _this = this;

      var id = this.on(type, function () {
        var t = _this.cacheEvents.get(id).type;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this.emit.apply(_this, [t].concat(args));
      });
    }
    /**
     * @param {string} type event name
     * @param {Function} callback .
     * @param {string} func function to call in EventEmitter
     * @returns {string} event id
     */

  }, {
    key: "registerListener",
    value: function registerListener(type, callback) {
      var func = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'on';

      /* eslint-disable consistent-this */
      var evt = type;
      var listener = this;
      var dotpos = evt.lastIndexOf('.');

      if (dotpos >= 0) {
        listener = this.owner.path(evt.substring(0, dotpos)).events;
        evt = evt.substring(dotpos + 1);
      }
      /* eslint-enable consistent-this */


      var id = this.cacheEvents.add({
        type: evt,
        callback: callback,
        listener: listener
      });
      listener.lowlevel[func](evt, callback);
      return id;
    }
    /**
     * Will emit event and call function %type%Callback on owner
     *
     * @param {string} type event name
     * @param {Array} args list of arguments
     */

  }, {
    key: "emit",
    value: function emit(type) {
      var _this$lowlevel, _this$owner$get, _this$owner, _this$owner2;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (_this$lowlevel = this.lowlevel).emit.apply(_this$lowlevel, [type].concat(args)); // call owner %type%Callback function if it exists


      var funcName = type + CALLBACH_FUNC_POSTFIX;
      var func = (_this$owner$get = (_this$owner = this.owner) === null || _this$owner === void 0 ? void 0 : _this$owner.get(funcName)) !== null && _this$owner$get !== void 0 ? _this$owner$get : (_this$owner2 = this.owner) === null || _this$owner2 === void 0 ? void 0 : _this$owner2[funcName];

      if (func) {
        func.apply(this.owner, args);
      }
    }
    /**
     * @returns {EventEmitter} .
     */

  }, {
    key: "init",

    /**
     * @override
     * @fires Thingy#init
     * @fires Thingy#preinit
     */
    value: function init(owner) {
      _get(_getPrototypeOf(EventThingy.prototype), "init", this).call(this, owner);
      /**
       * preinit alias
       *
       * @event Thingy#init
       * @type {Thingy?} owner if exists
       */


      this.emit('init', owner);
      /**
       * Event triggered before all properties init
       *
       * @event Thingy#preinit
       * @type {Thingy?} owner if exists
       */

      this.emit('preinit', owner);
    }
    /**
     * Disposes self and all properties
     *
     * @fires Thingy#dispose
     */

  }, {
    key: "dispose",
    value: function dispose() {
      /**
       * Fires before childs disposion
       *
       * @event Thingy#dispose
       */
      this.emit('dispose');

      _get(_getPrototypeOf(EventThingy.prototype), "dispose", this).call(this);

      for (var k in this.cacheEvents.properties) {
        this.off(k);
      }
    }
  }, {
    key: "lowlevel",
    get: function get() {
      if (!this.cache.lowlevel) {
        this.cache.lowlevel = new events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      return this.cache.lowlevel;
    }
    /**
     * Cache data with stored events info
     *
     * @returns {ShelfThingy} .
     */

  }, {
    key: "cacheEvents",
    get: function get() {
      return this.touch('events', function () {
        return new _shelf_thingy_js__WEBPACK_IMPORTED_MODULE_3__["ShelfThingy"]();
      });
    }
  }]);

  return EventThingy;
}(_nano_thingy_js__WEBPACK_IMPORTED_MODULE_1__["NanoThingy"]);

/* harmony default export */ __webpack_exports__["default"] = (EventThingy);


/***/ }),

/***/ "../src/framework/core/exchange/core/nano_thingy.js":
/*!**********************************************************!*\
  !*** ../src/framework/core/exchange/core/nano_thingy.js ***!
  \**********************************************************/
/*! exports provided: default, NanoThingy, LIFECYCLE_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NanoThingy", function() { return NanoThingy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE_STATUS", function() { return LIFECYCLE_STATUS; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "../src/framework/core/exchange/utils/utils.js");
/* harmony import */ var _utils_flags_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/flags_mixin.js */ "../src/framework/core/exchange/utils/flags_mixin.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file nano_thingy.js
 * @author tynrare
 * @version 2
 * @module Exchange
 */


/**
 * @enum {number}
 * @readonly
 */

var LIFECYCLE_STATUS = {
  DISPOSED: 0,
  INITIALIZED: 1,
  CONSTRUCTED: 2
};
/**
 * Minimal core Exchange class (for private puposes mostly)
 *
 * - 1 В js (и ts) нет проверки имплементации интерфейса, и костылить ее особо смысла нет.
 *   Поэтому все проверки на вызовы функций (вроде dispose в del) предполагают проверку того что объект имплементирует интерфейс Thingy (Может не являться дочерним для него классом)
 *
 * @mixes FlagsMixin
 * @class
 * @template U
 */

var NanoThingy = /*#__PURE__*/function () {
  // ===
  // Lifecycle

  /**
   * @param {object} [properties={}] default Thingy configuration (state)
   */
  function NanoThingy() {
    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, NanoThingy);

    _defineProperty(this, "cache", {});

    _defineProperty(this, "owner", null);

    _defineProperty(this, "lifestatus", LIFECYCLE_STATUS.CONSTRUCTED);

    _defineProperty(this, "id", '');

    this.describe(properties);
    this.lifestatus = LIFECYCLE_STATUS.CONSTRUCTED;
  }
  /**
   * Sets this.properties. Param properies will be proto.
   * getDefaultProperties will set other keys
   * #chain
   *
   * @param {object} properties .
   * @returns {NanoThingy} this
   */


  _createClass(NanoThingy, [{
    key: "describe",
    value: function describe(properties) {
      this.properties = Object.create(properties);
      var def = this.getDefaultProperties();

      for (var k in def) {
        if (!(k in this.properties)) {
          this.properties[k] = def[k];
        }
      }

      return this;
    }
    /**
     * Called by constructor. Override to pass you own props
     *
     * Я так и не придумал как сохранить декларативность конфигурации для класса по умолчанию, при этом оставив возможность
     * передавать кастомные конфиги.
     * Поэтому пока как есть (Ага, "пока", по всему проекту уже эти функции распихал)
     *
     * @abstract
     * @returns {object?} properties Thingy needs to operate
     */

  }, {
    key: "getDefaultProperties",
    value: function getDefaultProperties() {
      return null;
    }
    /**
     * @param {NanoThingy?} [owner=null] owner Thingy
     */

  }, {
    key: "init",
    value: function init() {
      var owner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (this.lifestatus <= LIFECYCLE_STATUS.INITIALIZED) {
        throw new Error('Thingy already initialized');
      }

      this.owner = owner;
      Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["initChildren"])(this);
      this.lifestatus = LIFECYCLE_STATUS.INITIALIZED;
    }
    /**
     * Disposes self and all properties
     */

  }, {
    key: "dispose",
    value: function dispose() {
      if (this.lifestatus <= LIFECYCLE_STATUS.DISPOSED) {
        throw new Error('Thingy already disposed');
      }

      for (var k in this.properties) {
        var v = this.properties[k];

        if (v && v.owner === this) {
          this.del(k, true);
        }
      }

      this.owner = null; // remove circular reference

      this.lifestatus = LIFECYCLE_STATUS.DISPOSED;
    } // ===
    // Properties access

    /**
     * returns any property
     *
     * @param {string} key property name
     * @returns {*?} any value
     */

  }, {
    key: "get",
    value: function get(key) {
      var _ref, _this$properties$key;

      return (_ref = (_this$properties$key = this.properties[key]) !== null && _this$properties$key !== void 0 ? _this$properties$key : this.cache[key]) !== null && _ref !== void 0 ? _ref : null;
    }
    /* eslint-disable complexity */

    /**
     * Calls init for value if it has init function
     * Sets `value.id = key` if possible
     *
     * @param {string} key property name
     * @param {*|NanoThingy} value property value
     * @param {object} opts .
     * @param {object?} [opts.forceScope] pass any object if you want write property into it
     * @returns {*?} passed value
     */

  }, {
    key: "set",
    value: function set(key, value) {
      var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref2$forceScope = _ref2.forceScope,
          forceScope = _ref2$forceScope === void 0 ? null : _ref2$forceScope;

      var scope = forceScope !== null && forceScope !== void 0 ? forceScope : key in this.properties ? this.properties : this.cache;
      scope[key] = value;

      if (value instanceof NanoThingy) {
        value.id = key;

        if (value.init && this.lifestatus === LIFECYCLE_STATUS.INITIALIZED) {
          value.init(this);
        }
      }

      return value;
    }
    /**
     * Access property or create one if it doesnt exists
     *
     * @param {string} key property name to access
     * @param {Function} construct function will be called if value yet doesnt exists
     * @example
     * // Create or access 'prop' property and write date to it:
     * thingy.touch('prop', () => new Thingy()).set('value', 'test');
     * @returns {*} property[key]
     */

  }, {
    key: "touch",
    value: function touch(key, construct) {
      var _this$get;

      return (_this$get = this.get(key)) !== null && _this$get !== void 0 ? _this$get : this.set(key, construct());
    }
    /**
     * @param {string} key remove property with name
     * @param {boolean} [dispose] in default mode will dispose if property owner === this
     */

  }, {
    key: "del",
    value: function del(key, dispose) {
      var q = this.get(key);

      if (q === null) {
        return;
      }

      var needToDispose = dispose !== null && dispose !== void 0 ? dispose : q.owner === this;

      if (needToDispose && q.dispose) {
        q.dispose();
      }

      if (Object.prototype.hasOwnProperty.call(this.properties, key)) {
        delete this.properties[key];
      } else {
        delete this.cache[key];
      }
    }
    /* eslint-enable complexity */

    /**
     * Finds properties by pass. Uses standart pathes
     *
     * @param {string} path path to access to
     * @returns {NanoThingy|*} any property
     * @see Exchange/Utils#traverse
     */

  }, {
    key: "path",
    value: function path(_path) {
      return Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["traverse"])(this, _path);
    } // ===
    // Serialization and instance management

    /**
     * Copies data (only properties!) from that thingy to this thingy
     * #chain
     *
     * @param {NanoThingy} thingy .
     * @param {boolean} [deep=true] recursive copy ovned thingies
     * @returns {NanoThingy} this
     */

  }, {
    key: "copy",
    value: function copy(thingy) {
      var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      for (var k in thingy.properties) {
        var v = thingy.properties[k];

        if (deep && v && v.clone) {
          this.properties[k] = v.clone(true);
        } else {
          this.properties[k] = v;
        }
      }

      return this;
    }
    /**
     * Creates copy on this thingy (only properties!)
     * override it if you want less general solution.
     * Be careful with objects in properties
     *
     * @param {boolean} [deep=true] recursive clone owned thingies
     * @returns {NanoThingy} new thingy
     */

  }, {
    key: "clone",
    value: function clone() {
      var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var thingy = new this.constructor().copy(this, deep);
      thingy.id = this.id;
      return thingy;
    }
    /**
     * Creates new thingy, but uses this.propertes as prototype for new thingy properties.
     * Saves memory but careful with changing original properties. It will affect new one too
     *
     * @param {boolean} [deep=true] recursive populate owned thingies
     * @returns {NanoThingy} new thingy
     */

  }, {
    key: "populate",
    value: function populate() {
      var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var thingy = new this.constructor(this.properties);

      if (deep) {
        for (var k in thingy.properties) {
          var v = thingy.properties[k];

          if (v && v.populate) {
            thingy.properties[k] = v.populate(deep);
          }
        }
      }

      return thingy;
    }
    /**
     * @returns {object} JSON serializable object
     */

  }, {
    key: "store",
    value: function store() {
      var result = {};

      for (var k in this.properties) {
        var v = this.properties[k];

        if (v && v.store) {
          result[k] = v.store();
        } else {
          result[k] = v;
        }
      }

      return result;
    }
    /**
     * #chain
     *
     * @param {object} data data from store
     * @returns {NanoThingy} .
     */

  }, {
    key: "restore",
    value: function restore(data) {
      for (var k in data) {
        var v = this.properties[k];

        if (v && v.restore) {
          v.restore(data[k]);
        } else {
          this.set(k, data[k]);
        }
      }

      return this;
    }
    /**
     * @member {object} properties
     */

    /**
     * @member {object} cache
     */

    /**
     * All runtime data stored here
     */

  }]);

  return NanoThingy;
}(); // ---
//Object.assign(NanoThingy.prototype, FlagsMixin);
// Задаю поля миксинов вручную, чтоб tscompleter подхватил нормально
// ---


NanoThingy.prototype.getFlag = _utils_flags_mixin_js__WEBPACK_IMPORTED_MODULE_1__["default"].getFlag;
NanoThingy.prototype.setFlag = _utils_flags_mixin_js__WEBPACK_IMPORTED_MODULE_1__["default"].setFlag;
NanoThingy.prototype.toggleFlag = _utils_flags_mixin_js__WEBPACK_IMPORTED_MODULE_1__["default"].toggleFlag;
NanoThingy.prototype.triggerFlag = _utils_flags_mixin_js__WEBPACK_IMPORTED_MODULE_1__["default"].triggerFlag;
/* harmony default export */ __webpack_exports__["default"] = (NanoThingy);


/***/ }),

/***/ "../src/framework/core/exchange/core/shelf_thingy.js":
/*!***********************************************************!*\
  !*** ../src/framework/core/exchange/core/shelf_thingy.js ***!
  \***********************************************************/
/*! exports provided: default, ShelfThingy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShelfThingy", function() { return ShelfThingy; });
/* harmony import */ var _utils_id_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id_helper.js */ "../src/framework/core/exchange/utils/id_helper.js");
/* harmony import */ var _nano_thingy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nano_thingy.js */ "../src/framework/core/exchange/core/nano_thingy.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file shelf_thingy.js
 * @author tynrare
 * @version 2
 * @module Exchange
 */


/**
 * Event management based on Thingy
 */

var ShelfThingy = /*#__PURE__*/function (_NanoThingy) {
  _inherits(ShelfThingy, _NanoThingy);

  var _super = _createSuper(ShelfThingy);

  function ShelfThingy() {
    _classCallCheck(this, ShelfThingy);

    return _super.apply(this, arguments);
  }

  _createClass(ShelfThingy, [{
    key: "add",

    /**
     * @param {object|NanoThingy|*} item item to add
     * @returns {string} given id
     */
    value: function add(item) {
      var id = item.id;
      id = this.getIdsHelper().genSuitableId(id, this.properties);
      this.set(id, item, {
        forceScope: this.properties
      });
      return id;
    }
    /**
     * @param {NanoThingy|string} thingy reference or id
     */

  }, {
    key: "remove",
    value: function remove(thingy) {
      this.del(typeof thingy === 'string' ? thingy : thingy.id);
    }
    /**
     * @returns {IdHelper} .
     */

  }, {
    key: "getIdsHelper",
    value: function getIdsHelper() {
      return this.touch('idsHelper', function () {
        return new _utils_id_helper_js__WEBPACK_IMPORTED_MODULE_0__["IdHelper"]();
      });
    }
  }]);

  return ShelfThingy;
}(_nano_thingy_js__WEBPACK_IMPORTED_MODULE_1__["NanoThingy"]);

/* harmony default export */ __webpack_exports__["default"] = (ShelfThingy);


/***/ }),

/***/ "../src/framework/core/exchange/core/thingy.js":
/*!*****************************************************!*\
  !*** ../src/framework/core/exchange/core/thingy.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nano_thingy.js */ "../src/framework/core/exchange/core/nano_thingy.js");
/* harmony import */ var _event_thingy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event_thingy.js */ "../src/framework/core/exchange/core/event_thingy.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file thingy.js
 * @author tynrare
 * @version 2
 * @module Exchange
 */
 //import { initChilds } from '../utils/utils.js';


/**
 * Core Exchange class
 *
 * - Adds events to NanoThingy
 * - Callbacks over inheritance - все эвенты в этом классе добавляются для избавления от необходимости переопределять методы в дочерних классах для добавления логики при определенных событиях (init, dispose, etc.);
 */

var Thingy = /*#__PURE__*/function (_NanoThingy) {
  _inherits(Thingy, _NanoThingy);

  var _super = _createSuper(Thingy);

  /**
   * This constructor behavior mach better described as
   * `new NanoThingy({new EventThingy()})`
   *
   * @param {object} [properties={}] default Thingy configuration (state)
   * @param {object} [events] callbacks for events
   * @fires Thingy#constructed
   */
  function Thingy() {
    var _this;

    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var events = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, Thingy);

    _this = _super.call(this, properties);
    _this.events = new _event_thingy_js__WEBPACK_IMPORTED_MODULE_1__["EventThingy"](); // #code-debt для срабатывания эвента преинита

    _this.events.owner = _assertThisInitialized(_this);

    for (var k in events) {
      _this.on(k, events[k]);
    }
    /**
     * @event Thingy#constructed
     * @type {object}
     * @property {EventThingy} default event
     */


    _this.events.emit('constructed', properties);

    return _this;
  }
  /**
   * @param {NanoThingy?} [owner=null] owner Thingy
   * @fires Thingy#preinit
   * @fires Thingy#postinit
   * @fires Thingy#init
   */


  _createClass(Thingy, [{
    key: "init",
    value: function init() {
      var owner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (this.lifestatus <= _nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_STATUS"].INITIALIZED) {
        throw new Error('Thingy already initialized');
      }

      this.owner = owner;
      this.events.init(this);

      _get(_getPrototypeOf(Thingy.prototype), "init", this).call(this, owner); //initChilds(this); //Я без понятия почему вызов напрямую не работает. Это 1 в 1 с super.init

      /**
       * Event triggered before all properties init
       *
       * @event Thingy#postinit
       * @type {Thingy?} owner if exists
       */


      this.events.emit('postinit', owner);
      this.lifestatus = _nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_STATUS"].INITIALIZED;
    }
    /**
     * @fires Thingy#dispose
     */

  }, {
    key: "dispose",
    value: function dispose() {
      this.events.dispose();

      _get(_getPrototypeOf(Thingy.prototype), "dispose", this).call(this);
    }
    /**
     * Calls this.events.on but with callback.bind(this)
     *
     * @param {string} type event name. Or path to node
     * @param {Function} callback .
     * @returns {string} event id
     */

  }, {
    key: "on",
    value: function on(type, callback) {
      return this.events.on(type, callback.bind(this));
    }
    /**
     * Calls this.events.once but with callback.bind(this)
     *
     * @param {string} type event name. Or path to node
     * @param {Function} callback .
     * @returns {string} event id
     */

  }, {
    key: "once",
    value: function once(type, callback) {
      return this.events.once(type, callback.bind(this));
    }
  }]);

  return Thingy;
}(_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__["NanoThingy"]);

/* harmony default export */ __webpack_exports__["default"] = (Thingy);

/***/ }),

/***/ "../src/framework/core/exchange/index.js":
/*!***********************************************!*\
  !*** ../src/framework/core/exchange/index.js ***!
  \***********************************************/
/*! exports provided: NanoThingy, Thingy, ShelfThingy, EventThingy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/nano_thingy.js */ "../src/framework/core/exchange/core/nano_thingy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NanoThingy", function() { return _core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _core_thingy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/thingy.js */ "../src/framework/core/exchange/core/thingy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Thingy", function() { return _core_thingy_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _core_shelf_thingy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/shelf_thingy.js */ "../src/framework/core/exchange/core/shelf_thingy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShelfThingy", function() { return _core_shelf_thingy_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _core_event_thingy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/event_thingy.js */ "../src/framework/core/exchange/core/event_thingy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventThingy", function() { return _core_event_thingy_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/**
 * @file index.js
 * @author tynrare
 * @version 2
 * @module Exchange
 */






/***/ }),

/***/ "../src/framework/core/exchange/utils/flags_mixin.js":
/*!***********************************************************!*\
  !*** ../src/framework/core/exchange/utils/flags_mixin.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-undefined */

/**
 * @file flags_mixin.js
 * @author tynrare
 * @version 1
 * @module Exchange/Utils
 */

/**
 * NanoThingy mixin
 *
 * @mixin
 */
var FlagsMixin = {
  /**
   * Access boolean flags storage
   *
   * @param {number} index flag index
   * @returns {boolean} flag value
   */
  getFlag: function getFlag(index) {
    return Boolean(this.properties.flags && this.properties.flags & 1 << index);
  },

  /**
   * Set flag value
   *
   * @param {number} index flag index
   * @param {boolean} value flag value
   */
  setFlag: function setFlag(index, value) {
    // Чот туплю, это же можно без if/else сделать?
    if (value) {
      this.properties.flags |= 1 << index;
    } else {
      this.properties.flags &= ~(1 << index);
    }
  },

  /**
   * Toggle flag value
   *
   * @param {number} index flag index
   */
  toggleFlag: function toggleFlag(index) {
    this.properties.flags ^= 1 << index;
  },

  /**
   * Triggers flag only once
   * #interface 1
   *
   * @param {number} index flag index
   * @returns {boolean} returns true if flag was false
   */
  triggerFlag: function triggerFlag(index) {
    var result = !this.getFlag(index);
    this.setFlag(index, true);
    return result;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FlagsMixin);

/***/ }),

/***/ "../src/framework/core/exchange/utils/id_helper.js":
/*!*********************************************************!*\
  !*** ../src/framework/core/exchange/utils/id_helper.js ***!
  \*********************************************************/
/*! exports provided: default, IdHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdHelper", function() { return IdHelper; });
/* harmony import */ var _core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/nano_thingy.js */ "../src/framework/core/exchange/core/nano_thingy.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file id_helper.js
 * @author tynrare
 * @version 2
 * @module Exchange
 */

var RUNTIME_PROP_PREFIX = '*';
/**
 * Event management based on Thingy
 */

var IdHelper = /*#__PURE__*/function (_NanoThingy) {
  _inherits(IdHelper, _NanoThingy);

  var _super = _createSuper(IdHelper);

  function IdHelper() {
    _classCallCheck(this, IdHelper);

    return _super.apply(this, arguments);
  }

  _createClass(IdHelper, [{
    key: "nextId",

    /**
     * returns next id value
     *
     * @returns {number} new id
     */
    value: function nextId() {
      return this.set('uids_generated', this.touch('uids_generated', function () {
        return -1;
      }) + 1);
    }
    /**
     * Finds id that isn't in scope
     * #pure
     *
     * @param {string} id id to validate and build from
     * @param {object|NanoThingy} [scope=this] scope to check
     * @returns {string} id that doesn't conflict in scope
     */

  }, {
    key: "genSuitableId",
    value: function genSuitableId() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var newid = (id === null || id === void 0 ? void 0 : id.length) > 0 && id;
      var nextid = this.nextId();

      while (!newid || scope[newid]) {
        newid = RUNTIME_PROP_PREFIX + (newid || nextid);
      }

      return newid;
    }
  }]);

  return IdHelper;
}(_core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__["NanoThingy"]);

/* harmony default export */ __webpack_exports__["default"] = (IdHelper);


/***/ }),

/***/ "../src/framework/core/exchange/utils/utils.js":
/*!*****************************************************!*\
  !*** ../src/framework/core/exchange/utils/utils.js ***!
  \*****************************************************/
/*! exports provided: root, initChildren, traverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initChildren", function() { return initChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverse", function() { return traverse; });
/* harmony import */ var _core_nano_thingy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/nano_thingy.js */ "../src/framework/core/exchange/core/nano_thingy.js");
/**
 * @file utils.js
 * @author tynrare
 * @version 1
 * @module Exchange/Utils
 */

/**
 * @param {NanoThingy} thingy .
 * @returns {NanoThingy} root owner
 */

function root(thingy) {
  var node = thingy;

  while (node.owner) {
    node = node.owner;
  }

  return node;
}
/* eslint-disable complexity */

/**
 * @param {NanoThingy} thingy .
 */

function initChildren(thingy) {
  for (var k in thingy.properties) {
    var v = thingy.properties[k];

    if (v && v.init) {
      v.init(thingy);
    }
  }

  for (var _k in thingy.cache) {
    var _v = thingy.cache[_k];

    if (_v && _v.init) {
      _v.init(thingy);
    }
  }
}
/**
 * Finds properties by pass. Uses standart pathes
 *
 * @param {NanoThingy} thingy thingy to operate on
 * @param {string} path path to access to
 * @returns {*} any property
 * @example
 * t.path('/node'); finds root.node
 * t.path('./node'); finds t.node
 * t.path('node'); same as above
 * t.path('../node'); t.owner.node
 * t.path('* /node'); finds closes property name somewhere in owner
 */

function traverse(thingy, path) {
  var p = path;
  var move = p.substring(0, 2);
  var next = null; // #draft

  switch (move) {
    case '..':
      //step back
      next = thingy.owner;
      p = p.substring(p.indexOf('/') + 1);
      break;

    case '*/':
      {
        //find closest prop
        next = thingy.owner;
        p = p.substring(p.indexOf('/') + 1);
        var slashpos = p.indexOf('/');
        var prop = slashpos < 0 ? p : p.substring(0, slashpos);

        while (next && next.get(prop) === null) {
          next = next.owner;
        }

        break;
      }

    case './':
      //step forward
      p = p.substring(p.indexOf('/') + 1);
    // falls through

    default:
      {
        var _slashpos = p.indexOf('/');

        if (_slashpos < 0) {
          return thingy.get(p);
        } else if (_slashpos === 0) {
          //step to root
          next = root(thingy);
        } else {
          next = thingy.get(_slashpos < 0 ? p : p.substring(0, _slashpos));
        }

        p = p.substring(p.indexOf('/') + 1);
      }
  }

  if (!next) {
    throw new Error("no node ('".concat(p, "') found for ").concat(path, " path"));
  }

  return next.path(p);
}
/* eslint-enable complexity */

/***/ }),

/***/ "../src/framework/core/math.js":
/*!*************************************!*\
  !*** ../src/framework/core/math.js ***!
  \*************************************/
/*! exports provided: cache, PERFECT_NUMBER, DEFAULT_GEOM_THRESHOLD, PRECISE_GEOM_THRESHOLD, ZERO_THRESHOLD, LOOSE_GEOM_THRESHOLD, DEFAULT_GEOM_NORMALS_SIZE, getDirection, alignToNormal, sortByDistance, crossProduct2Vector, posOnPlane, pos2dto3d, alignNormal, projectOnPlane, projectOnLine, projectLineOnLine, isPointOnLine, isPointOnLineThresholded, isPointInPlanePositive, isPointInPlanePositiveThresholded, findCevianForTriangle, getIntersectPointValues, getIntersectPoint, getPositionOnSegment, triangleNormal, triangleArea, divideVec3, posCenter, clamp, lerp, intersectsTriangle, fromRotationMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERFECT_NUMBER", function() { return PERFECT_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GEOM_THRESHOLD", function() { return DEFAULT_GEOM_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRECISE_GEOM_THRESHOLD", function() { return PRECISE_GEOM_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO_THRESHOLD", function() { return ZERO_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOOSE_GEOM_THRESHOLD", function() { return LOOSE_GEOM_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GEOM_NORMALS_SIZE", function() { return DEFAULT_GEOM_NORMALS_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirection", function() { return getDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignToNormal", function() { return alignToNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDistance", function() { return sortByDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossProduct2Vector", function() { return crossProduct2Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posOnPlane", function() { return posOnPlane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pos2dto3d", function() { return pos2dto3d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignNormal", function() { return alignNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectOnPlane", function() { return projectOnPlane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectOnLine", function() { return projectOnLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectLineOnLine", function() { return projectLineOnLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointOnLine", function() { return isPointOnLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointOnLineThresholded", function() { return isPointOnLineThresholded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointInPlanePositive", function() { return isPointInPlanePositive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointInPlanePositiveThresholded", function() { return isPointInPlanePositiveThresholded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findCevianForTriangle", function() { return findCevianForTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntersectPointValues", function() { return getIntersectPointValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntersectPoint", function() { return getIntersectPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionOnSegment", function() { return getPositionOnSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangleNormal", function() { return triangleNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangleArea", function() { return triangleArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divideVec3", function() { return divideVec3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posCenter", function() { return posCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectsTriangle", function() { return intersectsTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationMatrix", function() { return fromRotationMatrix; });
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hilo3d */ "../node_modules/hilo3d/build/Hilo3d.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hilo3d__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable camelcase, complexity, max-params, no-magic-numbers, max-statements */

var cache = {
  vec3: {
    v0: new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
    v1: new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
    v2: new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
    v3: new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
    v4: new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
    v5: new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
    v6: new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
    v7: new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
    v8: new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
    v9: new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"]()
  }
}; // buffer vectors

var vec0 = cache.vec3.v0;
var vec1 = cache.vec3.v1;
var vec2 = cache.vec3.v2;
var vec3 = cache.vec3.v3;
var vec4 = cache.vec3.v4;
var vecR = cache.vec3.v5; // functions return this vector

/**
 * @constant
 */

var PERFECT_NUMBER = Math.sin(Math.PI / Math.pow(2, 2)); // 0.707

/**
 * PERFECT_NUMBER^2 * 0.1
 *
 * @constant
 */

var DEFAULT_GEOM_THRESHOLD = Math.pow(PERFECT_NUMBER, 2) * 0.1; // 0.049

/**
 * DEFAULT_GEOM_THRESHOLD^2
 *
 * @constant
 */

var PRECISE_GEOM_THRESHOLD = Math.pow(DEFAULT_GEOM_THRESHOLD, 2); // 0.00249

/**
 * DEFAULT_GEOM_THRESHOLD^5
 *
 * @constant
 */

var ZERO_THRESHOLD = Math.pow(DEFAULT_GEOM_THRESHOLD, 5); // e-7

/**
 * DEFAULT_GEOM_THRESHOLD
 *
 * @constant
 */

var LOOSE_GEOM_THRESHOLD = PERFECT_NUMBER * 0.1;
/**
 * Use it for any meta-purpused data such debug normals and mesh/grids scales
 * DEFAULT_GEOM_THRESHOLD * PERFECT_NUMBER
 *
 * @constant
 */

var DEFAULT_GEOM_NORMALS_SIZE = DEFAULT_GEOM_THRESHOLD * PERFECT_NUMBER;
/**
 * https://github.com/BabylonJS/Babylon.js/blob/master/src/Maths/math.vector.ts#L1585
 *
 * @param {Vector3} axis local axis
 * @param {Matrix4} matrix world matrix
 * @returns {Vector3} world axis
 */

function getDirection(axis, matrix) {
  var mat = matrix.elements;
  var v = new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
  return v.set(axis.x * mat[0] + axis.y * mat[4] + axis.z * mat[8], axis.x * mat[1] + axis.y * mat[5] + axis.z * mat[9], axis.x * mat[2] + axis.y * mat[6] + axis.z * mat[10]);
}
/**
 * @param {Vector3} normal .
 * @param {Node} node .
 */

function alignToNormal(normal, node) {
  var nx = getDirection(new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 1), node.worldMatrix);
  var nz = getDirection(new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-1, 0, 0), node.worldMatrix);
  node.quaternion.rotateX(normal.dot(nx));
  node.quaternion.rotateZ(normal.dot(nz));
}
/**
 * @param {Vector3} origin point distance to
 * @param {Array<Vector3>} points array of vectors to sort
 */

function sortByDistance(origin, points) {
  points.sort(function (a, b) {
    return origin.squaredDistance(a) - origin.squaredDistance(b);
  });
}
/**
 * @param {Vector2} a1 line 1 start
 * @param {Vector2} a2 line 1 end
 * @param {Vector2} b1 line 2 start
 * @param {Vector2} b2 line 2 end
 * @returns {number} cross
 */

function crossProduct2Vector(a1, a2, b1, b2) {
  return (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
}
/**
 * Converts world coords into pos on plane
 *
 * @param {Vector3} point point to work with
 * @param {Vector3} origin plane origin
 * @param {Vector3} normal plane normal
 * @returns {Vector2} pos on plane
 */

function posOnPlane(point, origin, normal) {
  var axis = new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 1, 0);
  var dist = point.clone().sub(origin);
  var v = new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
  var u = new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
  var dot = normal.dot(axis);

  if (dot === 0 || Math.abs(dot) === 1) {
    v.set(0, 0, 1);
    u.set(1, 0, 0);
  } else {
    v.copy(axis).cross(normal).normalize();
    u.copy(v).cross(normal).normalize();
  }

  var x = dist.dot(u);
  var y = dist.dot(v);
  return new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector2"](x, y);
}
/**
 * Returns pos on plane as 3d coordinate
 *
 * @param {Vector2} pos pos on plane
 * @param {Vector3} origin plane origin
 * @param {Vector3} normal plane normal
 * @returns {Vector3} 3d space coordinate
 */

function pos2dto3d(pos, origin, normal) {
  var axis = new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 1, 0);
  var v = new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
  var u = new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
  var dot = normal.dot(axis);

  if (dot === 0 || Math.abs(dot) === 1) {
    v.set(0, 0, 1);
    u.set(1, 0, 0);
  } else {
    v.copy(axis).cross(normal).normalize();
    u.copy(v).cross(normal).normalize();
  }

  return u.scale(pos.x).add(v.scale(pos.y)).add(origin);
}
/**
 * "rotates" normal to another normal "plane"
 *
 * @param {Vector3} normal normal to shift
 * @param {Vector3} axis axis to shift around
 *
 * @returns {Vector3} aligned normal
 */

function alignNormal(normal, axis) {
  var dot = axis.dot(normal);
  return vecR.copy(normal).sub(vec0.copy(axis).scale(dot));
}
/**
 * Converts world coords into pos on plane
 *
 * @param {Vector3} point point to work with
 * @param {Vector3} origin plane origin
 * @param {Vector3} normal plane normal
 * @returns {Vector3} point on plane
 */

function projectOnPlane(point, origin, normal) {
  var local = vec3.copy(point).sub(origin);
  var forward = vec1.copy(normal).cross(local).normalize();
  var right = vec2.copy(normal).cross(forward).normalize();
  var x = local.dot(right);
  var z = local.dot(forward);
  return vecR.copy(origin).add(right.scale(x)).add(forward.scale(z));
}
/**
 * Closest point on segment
 *
 * @param {Vector3} a line start
 * @param {Vector3} b line end
 * @param {Vector3} point point to project
 * @returns {Vector3} closest to line point
 */

function projectOnLine(a, b, point) {
  var local = vec0.copy(point).sub(a);
  var line = vecR.copy(b).sub(a).normalize();
  var dist = local.dot(line);
  return line.scale(dist).add(a);
}
/**
 * Project one segment on another. It isn't "crossing"
 * Uses vec0-3
 *
 * @param {Vector3} a1 line 1 start
 * @param {Vector3} b1 line 1 end
 * @param {Vector3} a2 line 2 start
 * @param {Vector3} b2 line 2 end
 * @returns {Vector3?} a1->b1 projection on a2->b2. Null if projection out of a2->b2 segment
 */

function projectLineOnLine(a1, b1, a2, b2) {
  var y = vec1.copy(projectOnLine(a1, b1, a2));
  var z = vec2.copy(projectOnLine(a1, b1, b2));
  var yDist = a2.distance(y);
  var zDist = b2.distance(z);
  var proportion = yDist / (yDist + zDist);
  var yz = z.sub(y).scale(proportion || 0);
  var p = vecR.copy(y).add(yz);

  if (!isPointOnLineThresholded(a2, b2, p)) {
    return null;
  }

  return p;
}
/**
 * Closest point on segment. Thresholds a-b segment for validation
 *
 * @param {Vector3} a line start
 * @param {Vector3} b line end
 * @param {Vector3} point point to project
 * @returns {boolean} .
 */

function isPointOnLine(a, b, point) {
  var n = vec1.copy(b).sub(a).normalize();
  return isPointInPlanePositive(a, n, point) && isPointInPlanePositive(b, n.negate(), point);
}
/**
 * Closest point on segment. Thresholds a-b segment for validation
 *
 * @param {Vector3} a line start
 * @param {Vector3} b line end
 * @param {Vector3} point point to project
 * @returns {boolean} .
 */

function isPointOnLineThresholded(a, b, point) {
  var n = vec3.copy(b).sub(a).normalize();
  return isPointInPlanePositiveThresholded(a, n, point) && isPointInPlanePositiveThresholded(b, n.negate(), point);
}
/**
 * @param {Vector3} origin plane origin
 * @param {Vector3} normal plane normal direction
 * @param {Vector3} point point to check
 * @returns {boolean} .
 */

function isPointInPlanePositive(origin, normal, point) {
  var po = vec0.copy(point).sub(origin);
  return po.dot(normal) >= 0;
}
/**
 * @param {Vector3} origin plane origin
 * @param {Vector3} normal plane normal direction
 * @param {Vector3} point point to check
 * @returns {boolean} .
 */

function isPointInPlanePositiveThresholded(origin, normal, point) {
  var threshold = vec1.copy(normal).scale(DEFAULT_GEOM_THRESHOLD);
  var o = vec2.copy(origin).sub(threshold);
  return isPointInPlanePositive(o, normal, point);
}
/**
 * Finds closest to X point on segment AX that lays on triangle ABC. (A shared
 * for segment and triagnle)
 * #interface 1
 * Uses vec0-4
 *
 * @param {Vector3} up up triangle direction
 * @param {Vector3} a a point for triangle and normal origin
 * @param {Vector3} b b triangle point
 * @param {Vector3} c c triangle point
 * @param {Vector3} normal normal from a in bc direction
 *
 * @returns {Vector3} point on BC. null if it isn't on BC
 */

function findCevianForTriangle(up, a, b, c, normal) {
  var h = vec1.copy(projectOnLine(b, c, a)).sub(a);
  var forward = h.normalize();

  if (forward.dot(normal) <= 0) {
    return null;
  }

  var right = vec3.copy(forward).cross(up);
  var abdot = vec1.copy(b).sub(a).normalize().dot(right);
  var acdot = vec2.copy(c).sub(a).normalize().dot(right);
  var leftdot = Math.min(abdot, acdot);
  var rightdot = Math.max(abdot, acdot);
  var normaldot = normal.dot(right);
  var threshold = ZERO_THRESHOLD;

  if (normaldot >= leftdot - threshold && normaldot <= rightdot + threshold) {
    return projectLineOnLine(a, vec4.copy(a).add(normal), b, c);
  }

  return null;
}
/**
 * #interface -1
 *
 * @param {Vector2} a1 line 1 start
 * @param {Vector2} a2 line 1 end
 * @param {Vector2} b1 line 2 start
 * @param {Vector2} b2 line 2 end
 * @returns {object?} {at:number, bt:number} a and b intersection point
 *     percentage
 */

function getIntersectPointValues(a1, a2, b1, b2) {
  if (a1.equals(a2) || b1.equals(b2)) {
    return null;
  }

  var denom = crossProduct2Vector(a1, a2, b1, b2);

  if (denom === 0) {
    // Lines parallel or overlap
    return null;
  }

  var at = crossProduct2Vector(b1, b2, b1, a1) / denom;
  var bt = crossProduct2Vector(a1, a2, b1, a1) / denom;
  return {
    at: at,
    bt: bt
  };
}
/**
 * @param {Vector2} a1 line 1 start
 * @param {Vector2} a2 line 1 end
 * @param {Vector2} b1 line 2 start
 * @param {Vector2} b2 line 2 end
 * @returns {Vector2?} intersection point
 */

function getIntersectPoint(a1, a2, b1, b2) {
  var intersect = getIntersectPointValues(a1, a2, b1, b2);

  if (!intersect) {
    return null;
  }

  if (!intersect || intersect.at < 0 || intersect.at > 1 || intersect.bt < 0 || intersect.bt > 1) {
    return null;
  }

  return getPositionOnSegment(a1, a2, intersect.at);
}
/**
 * #interface -1
 *
 * @param {Vector2} a start segment point
 * @param {Vector2} b end segment point
 * @param {number} t percentage (0-1) on segmment
 * @returns {Vector2} position on segment
 */

function getPositionOnSegment(a, b, t) {
  var x = a.x + t * (b.x - a.x);
  var y = a.y + t * (b.y - a.y);
  return new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector2"](x, y);
}
/**
 * @param {Vector3} a .
 * @param {Vector3} b .
 * @param {Vector3} c .
 * @returns {Vector3} normalized triangle face vec
 */

function triangleNormal(a, b, c) {
  var v0 = vec0.copy(a).sub(b); //                V0 = P0-P1

  var v1 = vecR.copy(c).sub(b); //                V1 = P2-P1

  var normal = v1.cross(v0).normalize(); // N = cross (V1, V0)

  return normal;
}
/**
 * @param {Vector3} a .
 * @param {Vector3} b .
 * @param {Vector3} c .
 * @returns {number} triangle area
 */

function triangleArea(a, b, c) {
  var ab = vec0.copy(b).sub(a);
  var ac = vec1.copy(c).sub(a); // Не знаю почему 8. Подставил под значение для площади квадрата 1х1
  // 8 = 2^3
  // 1. Первая сперень - Параллограм пополам
  // 2. Вторая степень - Единицы измерения площади (m^2, например) (наверное)

  return vec2.copy(ab).cross(ac).len() / 8;
}
/**
 * Divides vec on val. Changes vec inplace
 * #nonpure
 *
 * @param {Vector3} vec vec to divide
 * @param {number} val .
 * @returns {Vector3} same vector
 */

function divideVec3(vec, val) {
  vec.elements[0] /= val;
  vec.elements[1] /= val;
  vec.elements[2] /= val;
  return vec;
}
/**
 * Returns vectors middle position
 *
 * @param {Vector3} a .
 * @param {Vector3} b .
 * @param {Vector3} c .
 * @returns {Vector3} .
 */

function posCenter(a, b, c) {
  return divideVec3(vecR.copy(a).add(b).add(c), 3);
}
/**
 * @param {number} val input value
 * @param {number} min minumum clamp value
 * @param {number} max maximum clamp value
 * @returns {number} [min, max]
 */

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}
/**
 * @param {number} a initial value
 * @param {number} b target value
 * @param {number} t factor
 * @returns {number} .
 */

function lerp(a, b, t) {
  return a + t * (b - a);
}
/**
 * uses 0-4 buffer vectors
 *
 * @param {Vector3} a triangle point
 * @param {Vector3} b triangle point
 * @param {Vector3} c triangle point
 * @param {Vector3} origin ray origin
 * @param {Vector3} direction ray direction
 * @returns {Vector3?} intersection point
 */

function intersectsTriangle(a, b, c, origin, direction) {
  var edge1 = vec0.copy(b).sub(a);
  var edge2 = vec1.copy(c).sub(a);
  var pvec = vec2.copy(direction).cross(edge2);
  var det = edge1.dot(pvec);

  if (det < ZERO_THRESHOLD) {
    return null;
  }

  var tvec = vec3.copy(origin).sub(a);
  var u = tvec.dot(pvec);

  if (u < 0 || u > det) {
    return null;
  }

  var qvec = vec4.copy(tvec).cross(edge1);
  var v = direction.dot(qvec);

  if (v < 0 || u + v > det) {
    return null;
  }

  var t = edge2.dot(qvec) / det;
  return vecR.set(origin.x + t * direction.x, origin.y + t * direction.y, origin.z + t * direction.z);
}
/**
 * @param {Matrix4} matrix matrix to ger data from
 * @param {Quaternion} result result to write into
 *
 * @returns {Quaternion} result
 */

function fromRotationMatrix(matrix, result) {
  var data = matrix.elements;
  var m11 = data[0],
      m12 = data[4],
      m13 = data[8];
  var m21 = data[1],
      m22 = data[5],
      m23 = data[9];
  var m31 = data[2],
      m32 = data[6],
      m33 = data[10];
  var trace = m11 + m22 + m33;
  var s;

  if (trace > 0) {
    s = 0.5 / Math.sqrt(trace + 1.0);
    result.w = 0.25 / s;
    result.x = (m32 - m23) * s;
    result.y = (m13 - m31) * s;
    result.z = (m21 - m12) * s;
  } else if (m11 > m22 && m11 > m33) {
    s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
    result.w = (m32 - m23) / s;
    result.x = 0.25 * s;
    result.y = (m12 + m21) / s;
    result.z = (m13 + m31) / s;
  } else if (m22 > m33) {
    s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
    result.w = (m13 - m31) / s;
    result.x = (m12 + m21) / s;
    result.y = 0.25 * s;
    result.z = (m23 + m32) / s;
  } else {
    s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
    result.w = (m21 - m12) / s;
    result.x = (m13 + m31) / s;
    result.y = (m23 + m32) / s;
    result.z = 0.25 * s;
  }

  return result;
}

/***/ }),

/***/ "../src/framework/core/utils/appearance.js":
/*!*************************************************!*\
  !*** ../src/framework/core/utils/appearance.js ***!
  \*************************************************/
/*! exports provided: default, Appearance, Palette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Appearance", function() { return Appearance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Palette", function() { return Palette; });
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hilo3d */ "../node_modules/hilo3d/build/Hilo3d.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hilo3d__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable max-classes-per-file */

/**
 * Stuff related with application appearance constants
 *
 * @file appearance.js
 * @author tynrare
 * @version 1
 * @module Core/CoreNamespace
 */


/**
 * Pallete data
 */

var Palette = /*#__PURE__*/function (_Thingy) {
  _inherits(Palette, _Thingy);

  var _super = _createSuper(Palette);

  function Palette() {
    _classCallCheck(this, Palette);

    return _super.apply(this, arguments);
  }

  _createClass(Palette, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        background: '#293b49',
        first: '#bfc3c6',
        attention: '#d9243c',
        bright: '#77d6c1',
        dark: '#030710',
        accent: '#d1401f',
        matrix: '#458239',
        neutral: '#ffffe4',
        'neutral_second': '#ffe0dc',
        'neutral_dark': '#bfc3c6'
      };
    }
    /**
     * Creates new Color object
     *
     * @param {string} color .
     * @returns {Color} new Color object
     */

  }, {
    key: "getColor",
    value: function getColor(color) {
      return new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Color"]().fromHEX(this.get(color));
    }
  }]);

  return Palette;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);
/**
 * Application Appearance data
 */


var Appearance = /*#__PURE__*/function (_Thingy2) {
  _inherits(Appearance, _Thingy2);

  var _super2 = _createSuper(Appearance);

  function Appearance() {
    _classCallCheck(this, Appearance);

    return _super2.apply(this, arguments);
  }

  _createClass(Appearance, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        palette: new Palette()
      };
    }
    /**
     * @returns {Palette} .
     */

  }, {
    key: "getColor",

    /**
     * this.palette.getColor alias
     *
     * @param {string} color .
     * @returns {Color} new Color object
     */
    value: function getColor(color) {
      return this.palette.getColor(color);
    }
  }, {
    key: "palette",
    get: function get() {
      return this.properties.palette;
    }
  }]);

  return Appearance;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (Appearance);


/***/ }),

/***/ "../src/framework/core/utils/assert.js":
/*!*********************************************!*\
  !*** ../src/framework/core/utils/assert.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @file assert.js
 * @author tynrare
 * @version 1
 * @module Core/CoreNamespace
 */

/**
 * Proxy for assert methods which can't display error in console if they unhandled
 */

/* harmony default export */ __webpack_exports__["default"] = (new Proxy(assert__WEBPACK_IMPORTED_MODULE_0___default.a, {
  get: function get(target, prop) {
    var field = target[prop];

    if (typeof field === 'function') {
      return function () {
        try {
          field.apply(void 0, arguments);
        } catch (err) {
          throw new Error(err);
        }
      };
    }

    return field;
  }
}));

/***/ }),

/***/ "../src/framework/core/utils/delays.js":
/*!*********************************************!*\
  !*** ../src/framework/core/utils/delays.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/logger.js */ "../src/framework/core/utils/logger.js");
/* harmony import */ var _core_utils_events_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/events_manager.js */ "../src/framework/core/utils/events_manager.js");
/**
 * @file delays.js
 * @author tynrare
 * @version 1
 * @module Core/Utils/Delays
 */


/**
 * неймспейс c обертками для делеев, интервалов, реквестов и т.п.
 *
 * @namespace
 */

var Delays = {
  /**
   * callbacks on nearest game update
   *
   * @param {Function} callback callback function
   * @returns {number} id from {@link module:Core/Utils/EventsManager.EventsManager.on}
   */
  update: function update(callback) {
    return _core_utils_events_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].once('update', function (ms, dt) {
      try {
        callback(ms, dt);
      } catch (err) {
        _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].error(err);
      }
    });
  },

  /**
   * callbacks on animation frame
   *
   * @param {Function} callback callback function
   * @returns {number} id requestAnimationFrame
   */
  immediate: function immediate(callback) {
    return requestAnimationFrame(function () {
      try {
        callback();
      } catch (err) {
        _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].error(err);
      }
    });
  },

  /**
   * callbacks intervals
   *
   * @param {Function} callback interval callback
   * @param {number} time interval delay
   * @returns {number} id setInterval
   */
  interval: function interval(callback, time) {
    return setInterval(function () {
      try {
        callback();
      } catch (err) {
        _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].error(err);
      }
    }, time);
  },

  /**
   * stops interval
   *
   * @param {number} id interval id
   */
  clearInterval: function (_clearInterval) {
    function clearInterval(_x) {
      return _clearInterval.apply(this, arguments);
    }

    clearInterval.toString = function () {
      return _clearInterval.toString();
    };

    return clearInterval;
  }(function (id) {
    clearInterval(id);
  }),

  /**
   * stops timeout
   *
   * @param {number} id timeout id
   */
  clearTimeout: function (_clearTimeout) {
    function clearTimeout(_x2) {
      return _clearTimeout.apply(this, arguments);
    }

    clearTimeout.toString = function () {
      return _clearTimeout.toString();
    };

    return clearTimeout;
  }(function (id) {
    clearTimeout(id);
  }),

  /**
   * callbacks timeouts
   *
   * @param {Function} callback timeout callback
   * @param {number} time timeout delay
   * @returns {number} id setTimeout
   */
  timeout: function timeout(callback, time) {
    return setTimeout(function () {
      try {
        callback();
      } catch (err) {
        _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].error(err);
      }
    }, time);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Delays);

/***/ }),

/***/ "../src/framework/core/utils/events_manager.js":
/*!*****************************************************!*\
  !*** ../src/framework/core/utils/events_manager.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/logger.js */ "../src/framework/core/utils/logger.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file events_manager.js
 * @author tynrare
 * @version 1
 * @module Core/Utils/EventsManager
 */
 //импортим напрямую просто чтоб избежать рекурсивных включений


var MAX_LISTENERS = 100;
/**
 * singletone class for managing events
 *
 * @static
 */

var EventsManager = /*#__PURE__*/function (_CoreEvents) {
  _inherits(EventsManager, _CoreEvents);

  var _super = _createSuper(EventsManager);

  /**
   * constructs
   */
  function EventsManager() {
    var _this;

    _classCallCheck(this, EventsManager);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_listenersCount", 0);

    _defineProperty(_assertThisInitialized(_this), "_listeners", new Map());

    _this.setMaxListeners(MAX_LISTENERS);

    return _this;
  }
  /**
   * init function call it somewhere in game clean/enter
   */


  _createClass(EventsManager, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this._listenersCount = 0;

      this._listeners.forEach(function (_ref) {
        var id = _ref.id,
            func = _ref.func;

        _this2.removeListener(id, func);
      });
    }
    /**
     * disables all listeners in selected group
     *
     * @param {string} group group to disable
     */

  }, {
    key: "discard",
    value: function discard(group) {
      var _this3 = this;

      this._listeners.forEach(function (listener) {
        if (listener.group === group) {
          _this3.removeListener(listener.id, listener.func);
        }
      });
    }
    /* eslint-disable max-params */

    /**
     * adds listener
     *
     * @param {string} id id of event
     * @param {Function} callback callback function
     * @param {*?} [context=null] scope to apply function to
     * @param {string} [group='default'] group to add listener to. Used for 'discard()' cleanups
     * @returns {number} id of listener
     */

  }, {
    key: "on",
    value: function on(id, callback) {
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var group = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'default';
      _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].group(_core_utils_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].groups.CORE_EVENTS, "listen (".concat(group, ") event _").concat(this._listenersCount, " \"").concat(id, "\" for function"), callback);
      var func = callback;

      if (context) {
        func = func.bind(context);
      }

      this._listeners.set(++this._listenersCount, {
        id: id,
        func: func,
        group: group
      });

      _get(_getPrototypeOf(EventsManager.prototype), "addListener", this).call(this, id, func);

      return this._listenersCount;
    }
    /**
     * according to docs (https://nodejs.org/api/events.html) addListener is alias for on(), but it isn't. So here it alias for on()
     *
     * @param {string} id id of event
     * @param {Function} callback callback function
     * @param {*?} [context=null] scope to apply function to
     * @param {string} [group='default'] group to add listener to. Used for 'discard()' cleanups
     * @returns {number} id of listener
     */

  }, {
    key: "addListener",
    value: function addListener(id, callback) {
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var group = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'default';
      return this.on(id, callback, context, group);
    }
    /* eslint-enable max-params */

    /**
     * removes listener. If you used addListener|on with 'context' argument, you cant removeListener by 'callback', only by id!
     *
     * @param {number|string} id id of event or id that addListener returns
     * @param {Function?} callback original callback listener used for event. null if you want to remove listener by listener id
     */

  }, {
    key: "removeListener",
    value: function removeListener(id, callback) {
      if (callback) {
        _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].group(_core_utils_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].groups.CORE_EVENTS, "unlisten event \"".concat(id, "\" for function"), callback);

        _get(_getPrototypeOf(EventsManager.prototype), "removeListener", this).call(this, id, callback);
      } else {
        if (!this._listeners.has(id)) {
          _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].group(_core_utils_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].groups.CORE_EVENTS, "tried to unlisten event _".concat(id, " which not exists"));
          return;
        }

        var listener = this._listeners.get(id);

        _core_utils_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].group(_core_utils_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].groups.CORE_EVENTS, "unlisten event _".concat(id, " (\"").concat(listener.id, "\") for function"), listener.func);

        _get(_getPrototypeOf(EventsManager.prototype), "removeListener", this).call(this, listener.id, listener.func);

        this._listeners["delete"](id);
      }
    }
    /**
     * same as removeListener
     *
     * @param {number|string} id id of event or id that addListener returns
     * @param {Function?} callback original callback listener used for event. null if you want to remove listener by listener id
     */

  }, {
    key: "off",
    value: function off(id, callback) {
      this.removeListener(id, callback);
    }
  }]);

  return EventsManager;
}(events__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = (new EventsManager());

/***/ }),

/***/ "../src/framework/core/utils/http.js":
/*!*******************************************!*\
  !*** ../src/framework/core/utils/http.js ***!
  \*******************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/**
 * @param {string} link .
 * @param {function} callback .
 */
function load(link, callback) {
  var file = new XMLHttpRequest();
  file.open('GET', link, true);

  file.onreadystatechange = function () {
    if (file.readyState === 4) {
      // Makes sure the document is ready to parse
      if (file.status === 200) {
        // Makes sure it's found the file
        callback(file.responseText);
      }
    }
  };

  file.send(null);
}

/***/ }),

/***/ "../src/framework/core/utils/logger.js":
/*!*********************************************!*\
  !*** ../src/framework/core/utils/logger.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/logger.js */ "../src/framework/lib/logger.js");
/* harmony import */ var _lib_logger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_logger_js__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file logger.js
 * logger from https://github.com/jonnyreeves/js-logger
 * @author tynrare
 * @version 1
 * @module Core/Utils/Logger
 */

_lib_logger_js__WEBPACK_IMPORTED_MODULE_0___default.a.useDefaults();
_lib_logger_js__WEBPACK_IMPORTED_MODULE_0___default.a.setLevel(_lib_logger_js__WEBPACK_IMPORTED_MODULE_0___default.a.LOG);
var DEFAULT_LOGGING_LEVEL = 4;
/**
 * key: group names for filter log. value: group logging level
 */

var GROUPS = {
  CORE_EVENTS: 5,
  CORE_WARNS: 1,
  GAME_RES_OPERATION: 3,
  GAME_CORE_STATUS: 3,
  GAME_LOCALE_STATUS: 3,
  GAME_LOCALE_MESSAGE: 5,
  GAME_LOCALE_WARN: 2,
  GAMEPLAY_ACTION: 3,
  GRAPHICS_PROCESS: 3,
  GRAPHICS_PROCESS_DETAILS: 4,
  CALC_OPERATION_DETAILS: 4
};
/**
 * logger wrapper
 *
 * @static
 */

var Logger = /*#__PURE__*/function () {
  /**
   * logging level for groups
   */

  /**
   * adds group method
   */
  function Logger() {
    _classCallCheck(this, Logger);

    _defineProperty(this, "groups", GROUPS);

    _defineProperty(this, "loggingLevel", DEFAULT_LOGGING_LEVEL);

    this.group.log = this.group.bind(this);
    this.group.warn = this.groupWarn.bind(this);
    this.group.error = this.groupError.bind(this);
  }
  /**
   * Will log data if its group logging enabled. Add in GROUPS you own fields mannualy or call assignGroupLevels
   *
   * @param {string} group group for log
   * @param {string} level level for log (log, warn, error)
   * @param {*?} args any logging data
   * @private
   */


  _createClass(Logger, [{
    key: "groupWithLevel",
    value: function groupWithLevel(group, level) {
      var groupLevel = this.groups[group];

      if (groupLevel && this.loggingLevel >= groupLevel) {
        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        this[level].apply(this, ["".concat(group, ": ")].concat(args));
      }
    }
    /**
     * Will log data if its group logging enabled. Add in GROUPS you own fields mannualy or call assignGroupLevels.
     * calls this.groupWithLevel
     * you can also call logger.group.log
     *
     *
     * @param {string} group group for log
     * @param {*?} args any logging data
     */

  }, {
    key: "group",
    value: function group(_group) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      this.groupWithLevel.apply(this, [_group, 'log'].concat(args));
    }
    /**
     * Will error data if its group logging enabled. Add in GROUPS you own fields mannualy or call assignGroupLevels.
     * calls this.groupWithLevel
     * you can also call logger.group.error
     *
     * @param {string} group group for log
     * @param {*?} args any logging data
     */

  }, {
    key: "groupError",
    value: function groupError(group) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      this.groupWithLevel.apply(this, [group, 'error'].concat(args));
    }
    /**
     * Will warn data if its group logging enabled. Add in GROUPS you own fields mannualy or call assignGroupLevels.
     * calls this.groupWithLevel
     * you can also call logger.group.warn
     *
     *
     * @param {string} group group for log
     * @param {*?} args any logging data
     */

  }, {
    key: "groupWarn",
    value: function groupWarn(group) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      this.groupWithLevel.apply(this, [group, 'warn'].concat(args));
    }
    /**
     * Simple log() method wrapper
     *
     * @param {*?} args message to print
     * @static
     */

  }, {
    key: "log",
    value: function log() {
      _lib_logger_js__WEBPACK_IMPORTED_MODULE_0___default.a.log.apply(_lib_logger_js__WEBPACK_IMPORTED_MODULE_0___default.a, arguments);
    }
    /**
     * Simple warn() method wrapper
     *
     * @param {*?} args message to print
     * @static
     */

  }, {
    key: "warn",
    value: function warn() {
      _lib_logger_js__WEBPACK_IMPORTED_MODULE_0___default.a.warn.apply(_lib_logger_js__WEBPACK_IMPORTED_MODULE_0___default.a, arguments);
    }
    /**
     * Simple error() method wrapper
     *
     * @param {*?} args message to print
     * @static
     */

  }, {
    key: "error",
    value: function error() {
      _lib_logger_js__WEBPACK_IMPORTED_MODULE_0___default.a.error.apply(_lib_logger_js__WEBPACK_IMPORTED_MODULE_0___default.a, arguments);
    }
    /**
     * sets new logging levels for groups
     *
     * @param {object<string, number>} levels new levels for all old or new groups
     */

  }, {
    key: "assignGroupLevels",
    value: function assignGroupLevels(levels) {
      this.groups = Object.assign(this.groups, levels);
    }
  }]);

  return Logger;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Logger());

/***/ }),

/***/ "../src/framework/lib/logger.js":
/*!**************************************!*\
  !*** ../src/framework/lib/logger.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */
(function (global) {
  "use strict"; // Top level module for the global, static logger instance.

  var Logger = {}; // For those that are at home that are keeping score.

  Logger.VERSION = "1.7.0-next"; // Function which handles all incoming log messages.

  var logHandler; // Map of ContextualLogger instances by name; used by Logger.get() to return the same named instance.

  var contextualLoggersByNameMap = {}; // Polyfill for ES5's Function.bind.

  var bind = function bind(scope, func) {
    return function () {
      return func.apply(scope, arguments);
    };
  }; // Super exciting object merger-matron 9000 adding another 100 bytes to your download.


  var merge = function merge() {
    var args = arguments,
        target = args[0],
        key,
        i;

    for (i = 1; i < args.length; i++) {
      for (key in args[i]) {
        if (!(key in target) && args[i].hasOwnProperty(key)) {
          target[key] = args[i][key];
        }
      }
    }

    return target;
  }; // Helper to define a logging level object; helps with optimisation.


  var defineLogLevel = function defineLogLevel(value, name) {
    return {
      value: value,
      name: name
    };
  }; // Predefined logging levels.


  Logger.TRACE = defineLogLevel(1, 'TRACE');
  Logger.DEBUG = defineLogLevel(2, 'DEBUG');
  Logger.INFO = defineLogLevel(3, 'INFO');
  Logger.TIME = defineLogLevel(4, 'TIME');
  Logger.WARN = defineLogLevel(5, 'WARN');
  Logger.ERROR = defineLogLevel(8, 'ERROR');
  Logger.OFF = defineLogLevel(99, 'OFF'); // Inner class which performs the bulk of the work; ContextualLogger instances can be configured independently
  // of each other.

  var ContextualLogger = function ContextualLogger(defaultContext) {
    this.context = defaultContext;
    this.setLevel(defaultContext.filterLevel);
    this.log = this.info; // Convenience alias.
  };

  ContextualLogger.prototype = {
    // Changes the current logging level for the logging instance.
    setLevel: function setLevel(newLevel) {
      // Ensure the supplied Level object looks valid.
      if (newLevel && "value" in newLevel) {
        this.context.filterLevel = newLevel;
      }
    },
    // Gets the current logging level for the logging instance
    getLevel: function getLevel() {
      return this.context.filterLevel;
    },
    // Is the logger configured to output messages at the supplied level?
    enabledFor: function enabledFor(lvl) {
      var filterLevel = this.context.filterLevel;
      return lvl.value >= filterLevel.value;
    },
    trace: function trace() {
      this.invoke(Logger.TRACE, arguments);
    },
    debug: function debug() {
      this.invoke(Logger.DEBUG, arguments);
    },
    info: function info() {
      this.invoke(Logger.INFO, arguments);
    },
    warn: function warn() {
      this.invoke(Logger.WARN, arguments);
    },
    error: function error() {
      this.invoke(Logger.ERROR, arguments);
    },
    time: function time(label) {
      if (typeof label === 'string' && label.length > 0) {
        this.invoke(Logger.TIME, [label, 'start']);
      }
    },
    timeEnd: function timeEnd(label) {
      if (typeof label === 'string' && label.length > 0) {
        this.invoke(Logger.TIME, [label, 'end']);
      }
    },
    // Invokes the logger callback if it's not being filtered.
    invoke: function invoke(level, msgArgs) {
      if (logHandler && this.enabledFor(level)) {
        logHandler(msgArgs, merge({
          level: level
        }, this.context));
      }
    }
  }; // Protected instance which all calls to the to level `Logger` module will be routed through.

  var globalLogger = new ContextualLogger({
    filterLevel: Logger.OFF
  }); // Configure the global Logger instance.

  (function () {
    // Shortcut for optimisers.
    var L = Logger;
    L.enabledFor = bind(globalLogger, globalLogger.enabledFor);
    L.trace = bind(globalLogger, globalLogger.trace);
    L.debug = bind(globalLogger, globalLogger.debug);
    L.time = bind(globalLogger, globalLogger.time);
    L.timeEnd = bind(globalLogger, globalLogger.timeEnd);
    L.info = bind(globalLogger, globalLogger.info);
    L.warn = bind(globalLogger, globalLogger.warn);
    L.error = bind(globalLogger, globalLogger.error); // Don't forget the convenience alias!

    L.log = L.info;
  })(); // Set the global logging handler.  The supplied function should expect two arguments, the first being an arguments
  // object with the supplied log messages and the second being a context object which contains a hash of stateful
  // parameters which the logging function can consume.


  Logger.setHandler = function (func) {
    logHandler = func;
  }; // Sets the global logging filter level which applies to *all* previously registered, and future Logger instances.
  // (note that named loggers (retrieved via `Logger.get`) can be configured independently if required).


  Logger.setLevel = function (level) {
    // Set the globalLogger's level.
    globalLogger.setLevel(level); // Apply this level to all registered contextual loggers.

    for (var key in contextualLoggersByNameMap) {
      if (contextualLoggersByNameMap.hasOwnProperty(key)) {
        contextualLoggersByNameMap[key].setLevel(level);
      }
    }
  }; // Gets the global logging filter level


  Logger.getLevel = function () {
    return globalLogger.getLevel();
  }; // Retrieve a ContextualLogger instance.  Note that named loggers automatically inherit the global logger's level,
  // default context and log handler.


  Logger.get = function (name) {
    // All logger instances are cached so they can be configured ahead of use.
    return contextualLoggersByNameMap[name] || (contextualLoggersByNameMap[name] = new ContextualLogger(merge({
      name: name
    }, globalLogger.context)));
  }; // CreateDefaultHandler returns a handler function which can be passed to `Logger.setHandler()` which will
  // write to the window's console object (if present); the optional options object can be used to customise the
  // formatter used to format each log message.


  Logger.createDefaultHandler = function (options) {
    options = options || {};

    options.formatter = options.formatter || function defaultMessageFormatter(messages, context) {
      // Prepend the logger's name to the log message for easy identification.
      if (context.name) {
        messages.unshift("[" + context.name + "]");
      }
    }; // Map of timestamps by timer labels used to track `#time` and `#timeEnd()` invocations in environments
    // that don't offer a native console method.


    var timerStartTimeByLabelMap = {}; // Support for IE8+ (and other, slightly more sane environments)

    var invokeConsoleMethod = function invokeConsoleMethod(hdlr, messages) {
      Function.prototype.apply.call(hdlr, console, messages);
    }; // Check for the presence of a logger.


    if (typeof console === "undefined") {
      return function () {
        /* no console */
      };
    }

    return function (messages, context) {
      // Convert arguments object to Array.
      messages = Array.prototype.slice.call(messages);
      var hdlr = console.log;
      var timerLabel;

      if (context.level === Logger.TIME) {
        timerLabel = (context.name ? '[' + context.name + '] ' : '') + messages[0];

        if (messages[1] === 'start') {
          if (console.time) {
            console.time(timerLabel);
          } else {
            timerStartTimeByLabelMap[timerLabel] = new Date().getTime();
          }
        } else {
          if (console.timeEnd) {
            console.timeEnd(timerLabel);
          } else {
            invokeConsoleMethod(hdlr, [timerLabel + ': ' + (new Date().getTime() - timerStartTimeByLabelMap[timerLabel]) + 'ms']);
          }
        }
      } else {
        // Delegate through to custom warn/error loggers if present on the console.
        if (context.level === Logger.WARN && console.warn) {
          hdlr = console.warn;
        } else if (context.level === Logger.ERROR && console.error) {
          hdlr = console.error;
        } else if (context.level === Logger.INFO && console.info) {
          hdlr = console.info;
        } else if (context.level === Logger.DEBUG && console.debug) {
          hdlr = console.debug;
        } else if (context.level === Logger.TRACE && console.trace) {
          hdlr = console.trace;
        }

        options.formatter(messages, context);
        invokeConsoleMethod(hdlr, messages);
      }
    };
  }; // Configure and example a Default implementation which writes to the `window.console` (if present).  The
  // `options` hash can be used to configure the default logLevel and provide a custom message formatter.


  Logger.useDefaults = function (options) {
    Logger.setLevel(options && options.defaultLevel || Logger.DEBUG);
    Logger.setHandler(Logger.createDefaultHandler(options));
  }; // Export to popular environments boilerplate.


  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Logger),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this);

/***/ }),

/***/ "../src/rooms/ehhh-board/room.js":
/*!***************************************!*\
  !*** ../src/rooms/ehhh-board/room.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rooms_html_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rooms/html/index.js */ "../src/rooms/html/index.js");
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var _client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @client/index.js */ "../src/framework/client/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file room.js
 * @author tynrare
 * @version 2
 * @module Rooms/EhhhBoard
 */



/**
 * Simple test for modular windows
 */

var EhhhBoardRoom = /*#__PURE__*/function (_Thingy) {
  _inherits(EhhhBoardRoom, _Thingy);

  var _super = _createSuper(EhhhBoardRoom);

  function EhhhBoardRoom() {
    _classCallCheck(this, EhhhBoardRoom);

    return _super.apply(this, arguments);
  }

  _createClass(EhhhBoardRoom, [{
    key: "initCallback",

    /**
     * .
     */
    value: function initCallback() {
      // #draft	
      var app = new _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]({
        div: new _rooms_html_index_js__WEBPACK_IMPORTED_MODULE_0__["DomElementThingy"]({
          id: 'app-content-root'
        }),
        render: new _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]({
          canvas: document.createElement('canvas')
        }, {
          init: function init() {
            this.owner.path('div/div').appendChild(this.get('canvas'));
          }
        }),
        env: new _client_index_js__WEBPACK_IMPORTED_MODULE_2__["CanvasAppEvents"]()
      });
      app.init();
    }
    /**
     * .
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {//..
    }
  }]);

  return EhhhBoardRoom;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (EhhhBoardRoom);

/***/ }),

/***/ "../src/rooms/hilo3d/app_root.js":
/*!***************************************!*\
  !*** ../src/rooms/hilo3d/app_root.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var _rooms_html_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rooms/html/index.js */ "../src/rooms/html/index.js");
/* harmony import */ var _client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @client/index.js */ "../src/framework/client/index.js");
/* harmony import */ var _resources_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources_manager.js */ "../src/rooms/hilo3d/resources_manager.js");
/* harmony import */ var _engine_hilo3d_engine_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/hilo3d_engine.js */ "../src/rooms/hilo3d/engine/hilo3d_engine.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file app_root.js
 *
 * @author tynrare
 * @version 2
 * @module Engine
 */
 //import PageManager from '@app/page_helpers/page_manager.js';





/**
 * Root application class
 *
 * @property {DomElementThingy} div dom element
 * @property {Hilo3dEngineThingy} render hilo engine render
 * @property {CanvasAppEvents} env system events and other
 * @property {object} game game state storage
 * @property {ResourcesManager} resources resources manager
 */

var AppRoot = /*#__PURE__*/function (_Thingy) {
  _inherits(AppRoot, _Thingy);

  var _super = _createSuper(AppRoot);

  function AppRoot() {
    _classCallCheck(this, AppRoot);

    return _super.apply(this, arguments);
  }

  _createClass(AppRoot, [{
    key: "initCallback",

    /**
     * Assigns new fields to events
     */
    value: function initCallback() {
      this.events.on('env/window.contextmenu', function (evt) {
        evt.preventDefault();
      });
    }
    /**
     * @override
     */

  }, {
    key: "getDefaultProperties",
    value: function getDefaultProperties() {
      return {
        strictInit: true,
        div: new _rooms_html_index_js__WEBPACK_IMPORTED_MODULE_1__["DomElementThingy"]({
          id: 'hilo3d-room-content'
        }),
        //page: new PageManager({ dom: new DomElementThingy({ parentId: 'app-root' }) }),
        resources: new _resources_manager_js__WEBPACK_IMPORTED_MODULE_3__["default"](),
        // #order 1
        render: new _engine_hilo3d_engine_js__WEBPACK_IMPORTED_MODULE_4__["default"](),
        // #order 2
        env: new _client_index_js__WEBPACK_IMPORTED_MODULE_2__["CanvasAppEvents"](),
        // #order 3
        game: new _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]()
      };
    }
    /**
     * Allows to stop all application on init error
     *
     * @override
     */

  }, {
    key: "init",
    value: function init() {
      try {
        _get(_getPrototypeOf(AppRoot.prototype), "init", this).call(this);
      } catch (err) {
        if (this.get('strictInit')) {
          //cgn.log.error('(/strictInit) Critical error in app init():', err);
          this.dispose();
        }

        throw err;
      }
    }
    /**
     * @returns {ResourcesManager} .
     */

  }, {
    key: "resources",
    get: function get() {
      return this.properties.resources;
    }
    /**
     * @returns {Hilo3dEngineThingy} .
     */

  }, {
    key: "render",
    get: function get() {
      return this.properties.render;
    }
    /**
     * @returns {Thingy} .
     */

  }, {
    key: "game",
    get: function get() {
      return this.properties.game;
    }
  }]);

  return AppRoot;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (AppRoot);

/***/ }),

/***/ "../src/rooms/hilo3d/engine/hilo3d_camera.js":
/*!***************************************************!*\
  !*** ../src/rooms/hilo3d/engine/hilo3d_camera.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rooms_hilo3d_input_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rooms/hilo3d/input/index.js */ "../src/rooms/hilo3d/input/index.js");
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hilo3d */ "../node_modules/hilo3d/build/Hilo3d.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hilo3d__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * - 06.07.20
 *
 * @file hilo3d_camera.js
 * @author tynrare
 * @version 2
 * @module Game/Engine
 */



/**
 * Wrapper for hilo camera
 */

var Hilo3dCameraManager = /*#__PURE__*/function (_Thingy) {
  _inherits(Hilo3dCameraManager, _Thingy);

  var _super = _createSuper(Hilo3dCameraManager);

  function Hilo3dCameraManager() {
    _classCallCheck(this, Hilo3dCameraManager);

    return _super.apply(this, arguments);
  }

  _createClass(Hilo3dCameraManager, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        controls: new _rooms_hilo3d_input_index_js__WEBPACK_IMPORTED_MODULE_0__["BasicOrbitalCamera"]()
      };
    }
    /**
     * Creates hilo camera
     */

  }, {
    key: "preinitCallback",
    value: function preinitCallback() {
      var camera = this.set('camera', new hilo3d__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"]({
        aspect: innerWidth / innerHeight,
        far: 1000,
        near: 0.1,
        z: 20,
        y: 20,
        rotationX: -45
      }));
      this.path('*/stage').camera = camera;
    }
    /**
     * @returns {PerspectiveCamera} .
     */

  }, {
    key: "hilo",
    get: function get() {
      return this.get('camera');
    }
  }]);

  return Hilo3dCameraManager;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (Hilo3dCameraManager);

/***/ }),

/***/ "../src/rooms/hilo3d/engine/hilo3d_engine.js":
/*!***************************************************!*\
  !*** ../src/rooms/hilo3d/engine/hilo3d_engine.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hilo3d */ "../node_modules/hilo3d/build/Hilo3d.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hilo3d__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hilo_debug_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hilo_debug_helper.js */ "../src/rooms/hilo3d/engine/hilo_debug_helper.js");
/* harmony import */ var _hilo3d_camera_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hilo3d_camera.js */ "../src/rooms/hilo3d/engine/hilo3d_camera.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file index.js
 * @author tynrare
 * @version 3
 * @module Render/Hilo3d
 */




/**
 * Wrapper class for Hilo3d management
 */

var Hilo3dEngineThingy = /*#__PURE__*/function (_Thingy) {
  _inherits(Hilo3dEngineThingy, _Thingy);

  var _super = _createSuper(Hilo3dEngineThingy);

  function Hilo3dEngineThingy() {
    _classCallCheck(this, Hilo3dEngineThingy);

    return _super.apply(this, arguments);
  }

  _createClass(Hilo3dEngineThingy, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        camera: new _hilo3d_camera_js__WEBPACK_IMPORTED_MODULE_3__["default"](),
        debug: new _hilo_debug_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"]()
      };
    }
    /**
     * Creates Hilo instance
     *
     * @listens window#onresize
     */

  }, {
    key: "preinitCallback",
    value: function preinitCallback() {
      var _this = this;

      var clearColor = cgn.appearance.getColor('first');
      var stage = new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Stage"]({
        container: this.path('/div').get('div'),
        clearColor: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Color"](0, 0, 0, 0),
        alpha: true,
        width: innerWidth,
        height: innerHeight,
        fog: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Fog"]({
          mode: 'LINEAR',
          // LINEAR, EXP, EXP2
          start: 100,
          end: 150,
          density: 0.01,
          color: clearColor
        })
      });
      this.set('stage', stage);
      this.events.on('/env/window.resize', function () {
        stage.resize(innerWidth, innerHeight);
        _this.camera.aspect = innerWidth / innerHeight;
      });
      this.events.on('/env/time.frame', function () {
        var hardcodedDt = 10;
        stage.tick(hardcodedDt);
      }); //this.renderer = this.world.renderer;
      //this.gl = this.renderer.gl;

      this.set('canvas', stage.canvas); //stage.canvas.style.backgroundImage = `background-image: radial-gradient(circle, ${cgn.appearance.get('background')}, ${cgn.appearance.get('dark')});`
      //this.canvas = this.world.canvas;
      // this.renderer.useInstanced = true;

      var angle = 0.7;
      new hilo3d__WEBPACK_IMPORTED_MODULE_1__["DirectionalLight"]({
        color: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Color"]().fromHEX('#f6edc9'),
        direction: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Vector3"](-angle, -1, 0),
        amount: 1
      }).addTo(stage);
      new hilo3d__WEBPACK_IMPORTED_MODULE_1__["DirectionalLight"]({
        color: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Color"]().fromHEX('#bfe8f5'),
        direction: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Vector3"](angle / 2, 0.5, 0),
        amount: 0.1
      }).addTo(stage);
      new hilo3d__WEBPACK_IMPORTED_MODULE_1__["AmbientLight"]({
        color: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Color"]().fromHEX('#c9e9f6'),
        amount: 0.6
      }).addTo(stage);
    }
    /**
     * @returns {Stage} .
     */

  }, {
    key: "disposeCallback",

    /**
     * cleanup
     */
    value: function disposeCallback() {
      this.get('stage').destroy();
    }
  }, {
    key: "stage",
    get: function get() {
      return this.get('stage');
    }
    /**
     * @returns {object} .
     */

  }, {
    key: "canvas",
    get: function get() {
      return this.get('canvas');
    }
    /**
     * @returns {Camera} .
     */

  }, {
    key: "camera",
    get: function get() {
      return this.stage.camera;
    }
    /**
     * @returns {HiloDebugHelper} .
     */

  }, {
    key: "debug",
    get: function get() {
      return this.properties.debug;
    }
  }]);

  return Hilo3dEngineThingy;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (Hilo3dEngineThingy);

/***/ }),

/***/ "../src/rooms/hilo3d/engine/hilo_debug_helper.js":
/*!*******************************************************!*\
  !*** ../src/rooms/hilo3d/engine/hilo_debug_helper.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var _hilo_line_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hilo_line_render.js */ "../src/rooms/hilo3d/engine/hilo_line_render.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hilo3d */ "../node_modules/hilo3d/build/Hilo3d.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hilo3d__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/math.js */ "../src/framework/core/math.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/**
 * Assists with debug primitives
 */

var HiloDebugHelper = /*#__PURE__*/function (_Thingy) {
  _inherits(HiloDebugHelper, _Thingy);

  var _super = _createSuper(HiloDebugHelper);

  function HiloDebugHelper() {
    _classCallCheck(this, HiloDebugHelper);

    return _super.apply(this, arguments);
  }

  _createClass(HiloDebugHelper, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        geometry: new _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"](),
        materials: new _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"](),
        lines: new _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"](),
        hilo: new hilo3d__WEBPACK_IMPORTED_MODULE_2__["Node"]({
          name: 'debug'
        })
      };
    }
    /**
     * .
     */

  }, {
    key: "initCallback",
    value: function initCallback() {
      this.owner.stage.addChild(this.hilo);
    }
    /**
     * Removes node
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      this.hilo.removeFromParent();
    }
    /**
     * Removes all debug data
     */

  }, {
    key: "cleanup",
    value: function cleanup() {
      this.hilo.removeFromParent();
      this.set('hilo', new hilo3d__WEBPACK_IMPORTED_MODULE_2__["Node"]());
      this.owner.stage.addChild(this.hilo);
      this.clearLines();
    }
    /**
     * @param {Vector3} normal .
     * @param {Vector3} pos .
     * @param {string} color name
     */

  }, {
    key: "drawNormal",
    value: function drawNormal(normal, pos) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'matrix';
      var line = this.properties.lines.touch(color, function () {
        return new _hilo_line_render_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
          color: cgn.appearance.palette.get(color)
        });
      });
      line.addLine(pos, _core_math_js__WEBPACK_IMPORTED_MODULE_3__["cache"].vec3.v0.copy(normal).scale(_core_math_js__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_GEOM_NORMALS_SIZE"]).add(pos));
    }
    /**
     * @param {Vector3} a .
     * @param {Vector3} b .
     * @param {string} color name
     */

  }, {
    key: "drawLine",
    value: function drawLine(a, b) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'matrix';
      var line = this.properties.lines.touch(color, function () {
        return new _hilo_line_render_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
          color: cgn.appearance.palette.get(color)
        });
      });
      line.addLine(a, b);
    }
    /**
     * @param {string} color name
     */

  }, {
    key: "clearLine",
    value: function clearLine(color) {
      var line = this.properties.lines.get(color);

      if (line) {
        line.clear();
      }
    }
    /**
     * .
     */

  }, {
    key: "clearLines",
    value: function clearLines() {
      for (var color in this.properties.lines.cache) {
        this.clearLine(color);
      }
    }
    /**
     * @param {number} [radius=1] radius scale
     * @param {string} [color='attention'] .
     * @returns {Mesh} .
     */

  }, {
    key: "makeSphere",
    value: function makeSphere() {
      var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'attention';
      var mesh = new hilo3d__WEBPACK_IMPORTED_MODULE_2__["Mesh"]({
        useInstanced: true,
        geometry: this.properties.geometry.touch(radius, function () {
          return new hilo3d__WEBPACK_IMPORTED_MODULE_2__["SphereGeometry"]({
            radius: radius * _core_math_js__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_GEOM_NORMALS_SIZE"],
            heightSegments: 4,
            widthSegments: 4
          });
        }),
        material: this.properties.materials.touch(color, function () {
          return new hilo3d__WEBPACK_IMPORTED_MODULE_2__["BasicMaterial"]({
            lightType: 'NONE',
            diffuse: cgn.appearance.getColor(color)
          });
        })
      });
      this.hilo.addChild(mesh);
      return mesh;
    }
    /**
     * @returns {Node} .
     */

  }, {
    key: "hilo",
    get: function get() {
      return this.properties.hilo;
    }
  }]);

  return HiloDebugHelper;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (HiloDebugHelper);

/***/ }),

/***/ "../src/rooms/hilo3d/engine/hilo_line_render.js":
/*!******************************************************!*\
  !*** ../src/rooms/hilo3d/engine/hilo_line_render.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hilo3d */ "../node_modules/hilo3d/build/Hilo3d.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hilo3d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable no-magic-numbers */

/**
 * @file hilo_node_thingy.js
 * @author tynrare
 * @version 1
 * @module Game/Core
 */


/**
 * hilo3d line draw
 * #access /resources. resources has to be preloaded
 *
 * @property {string} name mesh name
 */

var HiloLineRender = /*#__PURE__*/function (_Thingy) {
  _inherits(HiloLineRender, _Thingy);

  var _super = _createSuper(HiloLineRender);

  function HiloLineRender() {
    _classCallCheck(this, HiloLineRender);

    return _super.apply(this, arguments);
  }

  _createClass(HiloLineRender, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        color: '#FF0000'
      };
    }
    /**
     * Creates node
     */

  }, {
    key: "initCallback",
    value: function initCallback() {
      var material = new hilo3d__WEBPACK_IMPORTED_MODULE_0__["BasicMaterial"]({
        diffuse: new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Color"]().fromHEX(this.get('color')),
        lightType: 'NONE'
      });
      var geometry = new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Geometry"]({
        mode: hilo3d__WEBPACK_IMPORTED_MODULE_0__["constants"].LINES
      });
      var mesh = new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Mesh"]({
        geometry: geometry,
        material: material
      });
      this.set('hilo', mesh);
      this.path('/render').stage.addChild(mesh);
    }
    /**
     * #bug: erases addPoints()'s draw
     * #chain
     *
     * @param {Vector3} a line point start
     * @param {Vector3} b line point end
     * @returns {HiloLineRender} this
     */

  }, {
    key: "addLine",
    value: function addLine(a, b) {
      var g = this.hilo.geometry;
      g.addLine(a.elements, b.elements);
      return this;
    }
    /**
     * #chain
     *
     * @param {Vector3} a line next point
     * @returns {HiloLineRender} this
     */

  }, {
    key: "addPoint",
    value: function addPoint(a) {
      var _g$indices;

      var g = this.hilo.geometry;
      var c = ((_g$indices = g.indices) === null || _g$indices === void 0 ? void 0 : _g$indices.count) || 0;

      if (c) {
        var data = g.vertices.data;
        g.addLine([data[data.length - 3], data[data.length - 2], data[data.length - 1]], a.elements);
      } else {
        g.addPoints(a.elements);
      }

      return this;
    }
    /**
     * Removes points info
     */

  }, {
    key: "clear",
    value: function clear() {
      var geometry = new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Geometry"]({
        mode: hilo3d__WEBPACK_IMPORTED_MODULE_0__["constants"].LINES
      });
      this.hilo.geometry = geometry;
    }
    /**
     * Removes node
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      this.hilo.removeFromParent();
    }
    /**
     * @returns {Mesh} .
     */

  }, {
    key: "hilo",
    get: function get() {
      return this.get('hilo');
    }
    /**
     * @returns {Color} .
     */

  }, {
    key: "color",
    get: function get() {
      return this.hilo.material.diffuse;
    }
    /**
     * @param {Color} c .
     */
    ,
    set: function set(c) {
      this.hilo.material.diffuse = c;
    }
  }]);

  return HiloLineRender;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (HiloLineRender);

/***/ }),

/***/ "../src/rooms/hilo3d/engine/hilo_mesh_thingy.js":
/*!******************************************************!*\
  !*** ../src/rooms/hilo3d/engine/hilo_mesh_thingy.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hilo3d */ "../node_modules/hilo3d/build/Hilo3d.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hilo3d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hilo_line_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hilo_line_render.js */ "../src/rooms/hilo3d/engine/hilo_line_render.js");
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file hilo_node_thingy.js
 * @author tynrare
 * @version 1
 * @module Game/Core
 */



/**
 * hilo3d Node wrapper. Does two things:
 * #access /resources. resources has to be preloaded
 *
 * @property {string} name mesh name
 * @property {boolean} [debugNormalsEnabled=false] draws mesh normals
 */

var HiloMeshThingy = /*#__PURE__*/function (_Thingy) {
  _inherits(HiloMeshThingy, _Thingy);

  var _super = _createSuper(HiloMeshThingy);

  function HiloMeshThingy() {
    _classCallCheck(this, HiloMeshThingy);

    return _super.apply(this, arguments);
  }

  _createClass(HiloMeshThingy, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        debugNormalsEnabled: false
      };
    }
    /**
     * Creates node
     */

  }, {
    key: "postinitCallback",
    value: function postinitCallback() {
      var _this$owner$hilo, _this$owner;

      //code debt по идее нельзя получать доступ к функции "какого-то там класса",
      //в идеале копирование должно происходить напрямую из другого HiloMeshThingy
      var mesh = this.path('/resources').getMeshClone(this.get('name'));
      this.set('hilo', mesh);
      ((_this$owner$hilo = (_this$owner = this.owner) === null || _this$owner === void 0 ? void 0 : _this$owner.hilo) !== null && _this$owner$hilo !== void 0 ? _this$owner$hilo : this.path('/render').stage).addChild(mesh);

      if (this.properties.debugNormalsEnabled) {
        this.enableDebugNormals();
      }
    }
    /**
     * Displays normals directions
     */

  }, {
    key: "enableDebugNormals",
    value: function enableDebugNormals() {
      var _this = this;

      cgn.delays.immediate(function () {
        /* eslint-disable no-magic-numbers */
        _this.properties.debugNormalsEnabled = true;

        if (_this.get('debugLinesThingy')) {
          return;
        }

        var lines = _this.set('debugLinesThingy', new _hilo_line_render_js__WEBPACK_IMPORTED_MODULE_1__["default"]());

        var g = _this.hilo.geometry;
        var indices = g.indices;
        var len = indices.realLength;

        for (var i = 0; i < len; i += 3) {
          var idx = indices.get(i);
          var p = g.vertices.get(idx).clone();
          var n = g.normals.get(idx).clone();
          lines.addLine(p, n.add(p));
        }
        /* eslint-enable no-magic-numbers */

      });
    }
    /**
     * Displays normals directions
     */

  }, {
    key: "disableDebugNormals",
    value: function disableDebugNormals() {
      this.properties.debugNormalsEnabled = false;
      this.del('debugLinesThingy', true);
    }
    /**
     * Removes node
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      this.hilo.removeFromParent();
    }
    /**
     * @returns {Mesh} .
     */

  }, {
    key: "hilo",
    get: function get() {
      return this.get('hilo');
    }
  }]);

  return HiloMeshThingy;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_2__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (HiloMeshThingy);

/***/ }),

/***/ "../src/rooms/hilo3d/engine/hilo_node_wrapper.js":
/*!*******************************************************!*\
  !*** ../src/rooms/hilo3d/engine/hilo_node_wrapper.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hilo3d */ "../node_modules/hilo3d/build/Hilo3d.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hilo3d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file hilo_node_thingy.js
 * @author tynrare
 * @version 1
 * @module Game/Core
 */


/**
 * hilo3d Node wrapper. Does two things:
 */

var HiloNodeWrapper = /*#__PURE__*/function (_Thingy) {
  _inherits(HiloNodeWrapper, _Thingy);

  var _super = _createSuper(HiloNodeWrapper);

  function HiloNodeWrapper() {
    _classCallCheck(this, HiloNodeWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(HiloNodeWrapper, [{
    key: "initCallback",

    /**
     * Creates node
     */
    value: function initCallback() {
      var _this$owner$hilo, _this$owner;

      var container = new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Node"]({
        name: this.get('id')
      });
      this.set('_hilo', container, {
        pointer: true
      });
      ((_this$owner$hilo = (_this$owner = this.owner) === null || _this$owner === void 0 ? void 0 : _this$owner.hilo) !== null && _this$owner$hilo !== void 0 ? _this$owner$hilo : this.path('/render').stage).addChild(container);
    }
    /**
     * Removes node
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      this.hilo.removeFromParent();
    }
    /**
     * @returns {Node} .
     */

  }, {
    key: "hilo",
    get: function get() {
      return this.get('_hilo');
    }
  }]);

  return HiloNodeWrapper;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (HiloNodeWrapper);

/***/ }),

/***/ "../src/rooms/hilo3d/engine/hilo_raycast_helper.js":
/*!*********************************************************!*\
  !*** ../src/rooms/hilo3d/engine/hilo_raycast_helper.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hilo3d */ "../node_modules/hilo3d/build/Hilo3d.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hilo3d__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file hilo_raycast_thingy.js
 * @author tynrare
 * @version 1
 * @module Game/Core
 */


/**
 * @typedef Hit
 * @property {boolean} hit
 * @property {Vector3} [pos]
 * @property {Vector3} [normal]
 * @property {Array<number>} [face] indexes of vertices for face
 */

/**
 * Hilo3d raycast helper
 */

var HiloRaycastHelper = /*#__PURE__*/function (_Thingy) {
  _inherits(HiloRaycastHelper, _Thingy);

  var _super = _createSuper(HiloRaycastHelper);

  function HiloRaycastHelper() {
    var _this;

    _classCallCheck(this, HiloRaycastHelper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "ray", new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Ray"]());

    _defineProperty(_assertThisInitialized(_this), "cache", {
      vec3_0: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Vector3"](),
      vec3_1: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Vector3"](),
      vec3_2: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Vector3"](),
      matrix4_0: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]()
    });

    return _this;
  }

  _createClass(HiloRaycastHelper, [{
    key: "setup",

    /**
     * #chain
     *
     * @param {Vector3} origin origin point
     * @param {Vector3} direction direction normal
     * @returns {HiloRaycastHelper} this
     */
    value: function setup(origin, direction) {
      this.ray.origin.copy(origin);
      this.ray.direction.copy(direction).normalize();
      return this;
    }
    /**
     * #chain
     *
     * @param {Vector2} pos screen coordinates
     * @returns {HiloRaycastHelper} this
     */

  }, {
    key: "setupFromCamera",
    value: function setupFromCamera(pos) {
      var stage = this.path('/render/stage');
      this.ray.fromCamera(this.path('/render/camera').hilo, pos.x, pos.y, stage.width, stage.height);
      return this;
    }
    /**
     * you have to setup() ray first
     *
     * @param {Mesh} mesh mesh to check for ray
     * @returns {Hit} hit result
     */

  }, {
    key: "raycast",
    value: function raycast(mesh) {
      var hit = {
        hit: false
      };

      if (!mesh.visible || !mesh.geometry) {
        return hit;
      }

      var worldMatrix = mesh.worldMatrix;
      var tempMatrix4 = this.cache.matrix4_0.invert(worldMatrix);
      this.ray.transformMat4(tempMatrix4);
      var vertices = mesh.geometry.vertices;

      if (!vertices) {
        return hit;
      }

      var points = this._rayIntersects(mesh);

      if (points.length) {
        hit.hit = true;
        hit.pos = points[0].pos;
        hit.normal = points[0].normal;
        hit.face = points[0].face;
      }

      return hit;
    }
    /* eslint-disable no-magic-numbers, max-statements, camelcase */

    /**
     * @param {Mesh} mesh .
     * @returns {Array<Hit>} sorted hits
     */

  }, {
    key: "_rayIntersects",
    value: function _rayIntersects(mesh) {
      var ray = this.ray;
      var worldMatrix = mesh.worldMatrix;
      var vertices = mesh.geometry.vertices;
      var indices = mesh.geometry.indices;
      var triangle = [];
      var len = indices.realLength;
      var points = [];

      for (var i = 0; i < len; i += 3) {
        /**
         * @type {Array<number>}
         */
        var face = [indices.get(i), indices.get(i + 1), indices.get(i + 2)];
        var p0 = this.cache.vec3_0.copy(vertices.get(face[0]));
        var p1 = this.cache.vec3_1.copy(vertices.get(face[1]));
        var p2 = this.cache.vec3_2.copy(vertices.get(face[2]));
        triangle[0] = p0.elements;
        triangle[1] = p1.elements;
        triangle[2] = p2.elements;
        /**
         * @type {Vector3}
         */

        var pos = ray.intersectsTriangle(triangle);

        if (pos) {
          var v0 = p0.sub(p1); //                           V0 = P0-P1

          var v1 = p2.sub(p1); //                           V1 = P2-P1

          var normal = v1.cross(v0).normalize().clone(); // N = cross (V1, V0)

          pos.transformMat4(worldMatrix);
          points.push({
            hit: true,
            pos: pos,
            // it's important to clone that in new object
            normal: normal.clone(),
            face: face
          });
        }
      }

      points.sort(function (a, b) {
        return ray.origin.squaredDistance(a.pos) - ray.origin.squaredDistance(b.pos);
      });
      return points;
    }
    /* eslint-enable no-magic-numbers, max-statements, camelcase */

  }]);

  return HiloRaycastHelper;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (HiloRaycastHelper);

/***/ }),

/***/ "../src/rooms/hilo3d/environment/dev_default_env.js":
/*!**********************************************************!*\
  !*** ../src/rooms/hilo3d/environment/dev_default_env.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hilo3d */ "../node_modules/hilo3d/build/Hilo3d.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hilo3d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rooms/hilo3d/index.js */ "../src/rooms/hilo3d/index.js");
/* harmony import */ var _core_math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/math.js */ "../src/framework/core/math.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file dev_default_env.js
 * @author tynrare
 * @version 1
 * @module Game/Objects
 */




var DEFAULT_PLANE_UNITS = 10;
var PLANE_SIZE = 100;
/**
 * Map with debug props
 */

var DefaultDevHiloEnvMap = /*#__PURE__*/function (_Thingy) {
  _inherits(DefaultDevHiloEnvMap, _Thingy);

  var _super = _createSuper(DefaultDevHiloEnvMap);

  function DefaultDevHiloEnvMap() {
    _classCallCheck(this, DefaultDevHiloEnvMap);

    return _super.apply(this, arguments);
  }

  _createClass(DefaultDevHiloEnvMap, [{
    key: "postinitCallback",

    /**
     * inits scene container
     */
    value: function postinitCallback() {
      this.makeMap();
    }
    /**
     * @returns {Node} created container (add it to stage)
     */

  }, {
    key: "makeMap",
    value: function makeMap() {
      var container = this.set('container', new _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_2__["HiloNodeWrapper"]({
        id: 'default_dev_map'
      })).hilo;
      var plane = new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Mesh"]({
        rotationX: -90,
        y: -_core_math_js__WEBPACK_IMPORTED_MODULE_3__["PRECISE_GEOM_THRESHOLD"],
        //x: PLANE_SIZE / 2,
        //z: PLANE_SIZE / 2,
        geometry: new hilo3d__WEBPACK_IMPORTED_MODULE_0__["PlaneGeometry"]({
          width: PLANE_SIZE,
          height: PLANE_SIZE
        }),
        material: new hilo3d__WEBPACK_IMPORTED_MODULE_0__["BasicMaterial"]({
          uvMatrix: new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Matrix3"]().fromScaling(new hilo3d__WEBPACK_IMPORTED_MODULE_0__["Vector2"](PLANE_SIZE / DEFAULT_PLANE_UNITS, PLANE_SIZE / DEFAULT_PLANE_UNITS)),
          lightType: 'NONE',
          side: hilo3d__WEBPACK_IMPORTED_MODULE_0__["constants"].FRONT,
          diffuse: new hilo3d__WEBPACK_IMPORTED_MODULE_0__["LazyTexture"]({
            flipY: true,
            src: '/res/assets/dev/metric_grid.png'
          })
        })
      });
      container.addChild(plane);
      container.addChild(new hilo3d__WEBPACK_IMPORTED_MODULE_0__["AxisHelper"]({
        size: 10
      }));
      return container;
    }
  }]);

  return DefaultDevHiloEnvMap;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (DefaultDevHiloEnvMap);

/***/ }),

/***/ "../src/rooms/hilo3d/index.js":
/*!************************************!*\
  !*** ../src/rooms/hilo3d/index.js ***!
  \************************************/
/*! exports provided: Hilo3dEngineThingy, Hilo3dCameraManager, HiloMeshThingy, HiloLineRender, HiloNodeWrapper, HiloRaycastHelper, ResourcesManager, AppRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources_manager.js */ "../src/rooms/hilo3d/resources_manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourcesManager", function() { return _resources_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _app_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app_root.js */ "../src/rooms/hilo3d/app_root.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppRoot", function() { return _app_root_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _engine_hilo3d_engine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/hilo3d_engine.js */ "../src/rooms/hilo3d/engine/hilo3d_engine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hilo3dEngineThingy", function() { return _engine_hilo3d_engine_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _engine_hilo3d_camera_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/hilo3d_camera.js */ "../src/rooms/hilo3d/engine/hilo3d_camera.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hilo3dCameraManager", function() { return _engine_hilo3d_camera_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _engine_hilo_mesh_thingy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/hilo_mesh_thingy.js */ "../src/rooms/hilo3d/engine/hilo_mesh_thingy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HiloMeshThingy", function() { return _engine_hilo_mesh_thingy_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _engine_hilo_line_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engine/hilo_line_render.js */ "../src/rooms/hilo3d/engine/hilo_line_render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HiloLineRender", function() { return _engine_hilo_line_render_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _engine_hilo_node_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./engine/hilo_node_wrapper.js */ "../src/rooms/hilo3d/engine/hilo_node_wrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HiloNodeWrapper", function() { return _engine_hilo_node_wrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _engine_hilo_raycast_helper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./engine/hilo_raycast_helper.js */ "../src/rooms/hilo3d/engine/hilo_raycast_helper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HiloRaycastHelper", function() { return _engine_hilo_raycast_helper_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/**
 * @file index.js
 * @author tynrare
 * @version 2
 * @module Rooms/Hilo3d
 */

 // ===
// Hilo3d









/***/ }),

/***/ "../src/rooms/hilo3d/input/basic_orbital_camera.js":
/*!*********************************************************!*\
  !*** ../src/rooms/hilo3d/input/basic_orbital_camera.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hilo3d */ "../node_modules/hilo3d/build/Hilo3d.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hilo3d__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/math.js */ "../src/framework/core/math.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file basic_orbital_camera.js
 * @author tynrare
 * @version 4
 * @module Rooms/Hilo3d
 */



/**
 * Orbital camera
 *
 * #component Hilo3dCameraManager
 */

var BasicOrbitalCamera = /*#__PURE__*/function (_Thingy) {
  _inherits(BasicOrbitalCamera, _Thingy);

  var _super = _createSuper(BasicOrbitalCamera);

  function BasicOrbitalCamera() {
    var _this;

    _classCallCheck(this, BasicOrbitalCamera);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "cache", {
      zoom: 0,
      distance: 0,
      direction: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Vector2"](),
      position: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0),
      buffquat: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Quaternion"](),
      buffeuler: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Euler"](-1, 0, 0),
      buffvec2: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Vector2"](),
      buffvec3: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Vector3"](),
      buffmatrix: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]()
    });

    _defineProperty(_assertThisInitialized(_this), "mouseInfo", {
      startX: 0,
      startY: 0,
      pressed: false
    });

    return _this;
  }

  _createClass(BasicOrbitalCamera, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        rotationMax: 100,
        rotationFriction: 0.12,
        zoomFriction: 0.4,
        zoomSpeed: _core_math_js__WEBPACK_IMPORTED_MODULE_2__["PERFECT_NUMBER"],
        rotationSpeed: _core_math_js__WEBPACK_IMPORTED_MODULE_2__["PERFECT_NUMBER"],
        distance: 5,
        zoomMin: _core_math_js__WEBPACK_IMPORTED_MODULE_2__["PERFECT_NUMBER"]
      };
    }
    /**
     * caches camera path. По идее придется дорабатывать возможность как-то
     * кешировать путь find'a, потому что если заменить объект, на который
     * указывал старый файнд, то на старом он и останется #chain
     *
     * @override
     */

  }, {
    key: "initCallback",
    value: function initCallback() {
      var _this2 = this;

      this.set('camera', this.path('../camera'));
      this.on('/env/window.mousedown', this.onMouseDown);
      this.on('/env/window.mousemove', this.onMouseMove);
      this.on('/env/window.mouseup', function () {
        _this2.mouseInfo.pressed = false;
      });
      this.on('/env/window.wheel', this.onMouseWheel);
      this.on('/env/time.frame', this.frame);
      this.frame();
    }
    /**
     * @private
     */

  }, {
    key: "frame",
    value: function frame() {
      var dir = this.cache.direction;
      var pos = this.cache.position;
      var m = this.cache.buffmatrix;
      var v = this.cache.buffvec3;
      var q = this.cache.buffquat; // zoom

      this.properties.distance = Math.max(0, this.properties.distance + this.cache.zoom * this.properties.zoomSpeed * Math.sqrt(this.properties.distance));
      this.properties.distance = Object(_core_math_js__WEBPACK_IMPORTED_MODULE_2__["lerp"])(this.properties.distance, Math.max(this.properties.distance, this.properties.zoomMin), 0.5); // rotation

      this.cache.buffeuler.y -= dir.x * this.properties.rotationSpeed;
      this.cache.buffeuler.x -= dir.y * this.properties.rotationSpeed;
      this.cache.buffeuler.x = Object(_core_math_js__WEBPACK_IMPORTED_MODULE_2__["lerp"])(this.cache.buffeuler.x, Object(_core_math_js__WEBPACK_IMPORTED_MODULE_2__["clamp"])(this.cache.buffeuler.x, -Math.PI / 2, Math.PI / 2), 0.5);
      q.fromEuler(this.cache.buffeuler);
      m.fromRotationTranslation(q, v.copy(pos));
      m.translate(v.set(0, 0, 1).scale(this.properties.distance));
      this.camera.quaternion.fromMat4(m);
      this.camera.position.copy(m.getTranslation(v));
      this.rotate(0, 0);
      this.zoom(0);
    }
    /**
     * @param {MouseEvent|TouchEvent} evt event
     * @private
     */

  }, {
    key: "onMouseDown",
    value: function onMouseDown(evt) {
      this.mouseInfo.pressed = true;
      this.mouseInfo.startX = evt.clientX;
      this.mouseInfo.startY = evt.clientY;
    }
    /**
     * @param {MouseEvent} evt event
     * @private
     */

  }, {
    key: "onMouseMove",
    value: function onMouseMove(evt) {
      if (!this.mouseInfo.pressed) {
        return;
      }

      var INPUT_CLAMP = 100;
      var x = Object(_core_math_js__WEBPACK_IMPORTED_MODULE_2__["clamp"])(evt.movementX, -INPUT_CLAMP, INPUT_CLAMP) / INPUT_CLAMP;
      var y = Object(_core_math_js__WEBPACK_IMPORTED_MODULE_2__["clamp"])(evt.movementY, -INPUT_CLAMP, INPUT_CLAMP) / INPUT_CLAMP;
      this.rotate(x, y);
    }
    /**
     * @param {WheelEvent} evt .
     */

  }, {
    key: "onMouseWheel",
    value: function onMouseWheel(evt) {
      this.zoom(evt.deltaY);
    }
    /**
     * Clamps [-1, 1]
     *
     * @param {number} x .
     * @param {number} y .
     */

  }, {
    key: "rotate",
    value: function rotate(x, y) {
      var b = this.cache.buffvec2.set(Object(_core_math_js__WEBPACK_IMPORTED_MODULE_2__["clamp"])(x, -1, 1), Object(_core_math_js__WEBPACK_IMPORTED_MODULE_2__["clamp"])(y, -1, 1));
      this.cache.direction.lerp(b, this.properties.rotationFriction);
    }
    /**
     * Clamps [-1, 1]
     *
     * @param {number} dir movement diraction
     */

  }, {
    key: "zoom",
    value: function zoom(dir) {
      var v = Object(_core_math_js__WEBPACK_IMPORTED_MODULE_2__["clamp"])(dir, -1, 1);
      this.cache.zoom = Object(_core_math_js__WEBPACK_IMPORTED_MODULE_2__["lerp"])(this.cache.zoom, v, this.properties.zoomFriction);
    }
  }, {
    key: "camera",

    /**
     * @returns {PerspectiveCamera} .
     */
    get: function get() {
      return this.get('camera');
    }
  }]);

  return BasicOrbitalCamera;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (BasicOrbitalCamera);

/***/ }),

/***/ "../src/rooms/hilo3d/input/index.js":
/*!******************************************!*\
  !*** ../src/rooms/hilo3d/input/index.js ***!
  \******************************************/
/*! exports provided: BasicOrbitalCamera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_orbital_camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic_orbital_camera.js */ "../src/rooms/hilo3d/input/basic_orbital_camera.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicOrbitalCamera", function() { return _basic_orbital_camera_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * @file index.js
 * @author tynrare
 * @version 1
 * @module Rooms/Hilo3d
 */



/***/ }),

/***/ "../src/rooms/hilo3d/resources_manager.js":
/*!************************************************!*\
  !*** ../src/rooms/hilo3d/resources_manager.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hilo3d */ "../node_modules/hilo3d/build/Hilo3d.js");
/* harmony import */ var hilo3d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hilo3d__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file resources_manager.js
 * @author tynrare
 * @version 1
 * @module Engine
 */


var res = {};
/**
 * Handles assets files and caches
 *
 * @example
 *
 * @property {object} locations files paths
 */

var ResourcesManager = /*#__PURE__*/function (_Thingy) {
  _inherits(ResourcesManager, _Thingy);

  var _super = _createSuper(ResourcesManager);

  function ResourcesManager() {
    _classCallCheck(this, ResourcesManager);

    return _super.apply(this, arguments);
  }

  _createClass(ResourcesManager, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        locations: res,
        gltfLoader: new hilo3d__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"]()
      };
    }
    /**
     * @override
     * @param {ResourcesManager} resources other manager
     * @returns {ResourcesManager} this
     */

  }, {
    key: "copy",
    value: function copy(resources) {
      this.cache = resources.cache;
      return this;
    }
    /**
     * Call it before any actions
     *
     *
     * @param {object} [locations=this.properties.locations] .
     * @param {object} locations.meshes paths to meshes
     * @returns {Promise<void>} loading promise
     */

  }, {
    key: "preload",
    value: function preload() {
      var locations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.properties.locations;
      this.properties.locations = locations;
      return this.preloadMeshes(this.properties.locations.meshes);
    } //==== Methods

    /**
     * Same as getMash but creates clone
     *
     * @param {string} name cached mesh name
     * @returns {Mesh} clone of cached mesh
     */

  }, {
    key: "getMeshClone",
    value: function getMeshClone(name) {
      return this.getMesh(name).clone(false);
    }
    /**
     * Finds previously preloaded model/scene and cretes clone
     *
     * @example
     * AssetManager.instance
     *              .preloadMesh('my_mesh', '/path/to/my/mesh')
     *              .then(()=>{
     *                AssetManager.instance.getMeshClone('my_mesh');
     *               });
     * @param {string} name cached mesh name
     * @returns {Mesh} clone of cached mesh
     */

  }, {
    key: "getMesh",
    value: function getMesh(name) {
      var meshes = this.cache.meshes;
      cgn.assert.ok(meshes && meshes[name], "No model ".concat(name, " found in cache. You have to preloadModel(name, src)"));
      return meshes[name];
    }
    /**
     * Preloads and saves models in memory.
     * You can access them by
     *
     * @async
     * @param {string} name name you can access model after
     * @param {string} path file path
     * @returns {Promise<void>} loading promise
     */

  }, {
    key: "preloadMesh",
    value: function preloadMesh(name, path) {
      var _this = this;

      this.cache.GLTFs = this.cache.GLTFs || {};
      this.cache.meshes = this.cache.meshes || {};
      return new Promise(function (resolve, reject) {
        _this.get('gltfLoader').load({
          src: path
        }).then(function (model) {
          cgn.log.group('GAME_RES_OPERATION', "Node from ".concat(path, " preloaded as '").concat(name, "' scene"));
          _this.cache.GLTFs[name] = model;

          for (var i in model.meshes) {
            var mesh = model.meshes[i];
            var meshname = mesh.parent.name;
            cgn.log.group('GAME_RES_OPERATION', "Mesh from scene '".concat(name, "' preloaded as '").concat(meshname, "' mesh"));
            _this.cache.meshes[meshname] = mesh;
          }

          resolve();
        })["catch"](function (reason) {
          reject(reason);
        });
      });
    }
    /**
     * @param {object} meshes list of .gltf files to preload. Keys will be used as names. Path field as src
     * @returns {Promise<void>} loading promise
     */

  }, {
    key: "preloadMeshes",
    value: function preloadMeshes(meshes) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var promises = [];

        for (var k in meshes) {
          promises.push(_this2.preloadMesh(k, meshes[k]));
        }

        Promise.all(promises).then(function () {
          return resolve();
        })["catch"](function (reason) {
          reject(reason);
        });
      });
    }
  }]);

  return ResourcesManager;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (ResourcesManager);

/***/ }),

/***/ "../src/rooms/hilo3d/room.js":
/*!***********************************!*\
  !*** ../src/rooms/hilo3d/room.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rooms/hilo3d/index.js */ "../src/rooms/hilo3d/index.js");
/* harmony import */ var _rooms_hilo3d_environment_dev_default_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rooms/hilo3d/environment/dev_default_env.js */ "../src/rooms/hilo3d/environment/dev_default_env.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file room.js
 * @author tynrare
 * @version 2
 * @module Rooms/Hilo3d
 */



/**
 * Simple test for modular windows
 */

var Hilo3dRoom = /*#__PURE__*/function (_Thingy) {
  _inherits(Hilo3dRoom, _Thingy);

  var _super = _createSuper(Hilo3dRoom);

  function Hilo3dRoom() {
    _classCallCheck(this, Hilo3dRoom);

    return _super.apply(this, arguments);
  }

  _createClass(Hilo3dRoom, [{
    key: "initCallback",

    /**
     * .
     */
    value: function initCallback() {
      this.app = new _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_1__["AppRoot"]();
      this.app.init();
      this.app.get('game').touch('env', function () {
        return new _rooms_hilo3d_environment_dev_default_env_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      }); //app.get('game').set('map', new HiloMeshThingy({ name: 'cube' }));
    }
    /**
     * .
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      this.app.dispose();
    }
  }]);

  return Hilo3dRoom;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (Hilo3dRoom);

/***/ }),

/***/ "../src/rooms/html/dom_element_thingy.js":
/*!***********************************************!*\
  !*** ../src/rooms/html/dom_element_thingy.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file dom_element_thingy.js
 *
 * @author tynrare
 * @version 3
 * @module Rooms/HTML
 */

/**
 * Thingy to control html element lifecycle
 * Id's and Thingies tree reflects dom tree
 *
 * properties
 *
 * @class
 * @property {string?} [id] dom element id
 * @property {string} [class='div'] dom element class
 * @property {string?} [parentId] parent dom element id
 * @property {Element} [_div] dom element ref
 */

var DomElementThingy = /*#__PURE__*/function (_Thingy) {
  _inherits(DomElementThingy, _Thingy);

  var _super = _createSuper(DomElementThingy);

  function DomElementThingy() {
    _classCallCheck(this, DomElementThingy);

    return _super.apply(this, arguments);
  }

  _createClass(DomElementThingy, [{
    key: "getDefaultProperties",

    /**
     * @override
     */
    value: function getDefaultProperties() {
      return {
        parentId: 'ehhh-app-content-root'
      };
    }
    /**
     * Creates page dom. div by default
     */

  }, {
    key: "preinitCallback",
    value: function preinitCallback() {
      var _this$get, _this$owner;

      var container = document.createElement(this.touch('class', function () {
        return 'div';
      }));

      if (this.get('id')) {
        container.id = this.get('id');
      }

      this.set('div', container);
      var parentId = (_this$get = this.get('parentId')) !== null && _this$get !== void 0 ? _this$get : (_this$owner = this.owner) === null || _this$owner === void 0 ? void 0 : _this$owner.get('id');

      if (parentId) {
        this.set('parentId', parentId);
        document.getElementById(parentId).appendChild(container);
      } else {
        document.body.appendChild(container);
      }
    }
    /**
     * Cleanups data
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      var div = this.get('div');
      div.parentNode.removeChild(div);
    }
  }]);

  return DomElementThingy;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (DomElementThingy);

/***/ }),

/***/ "../src/rooms/html/index.js":
/*!**********************************!*\
  !*** ../src/rooms/html/index.js ***!
  \**********************************/
/*! exports provided: DomElementThingy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_element_thingy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_element_thingy.js */ "../src/rooms/html/dom_element_thingy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomElementThingy", function() { return _dom_element_thingy_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * @file index.js
 * @author tynrare
 * @version 1
 * @module Rooms/HTML
 */



/***/ }),

/***/ "../src/rooms/sketches/art_guidelines/app.js":
/*!***************************************************!*\
  !*** ../src/rooms/sketches/art_guidelines/app.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rooms/hilo3d/index.js */ "../src/rooms/hilo3d/index.js");
/* harmony import */ var _rooms_hilo3d_environment_dev_default_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rooms/hilo3d/environment/dev_default_env.js */ "../src/rooms/hilo3d/environment/dev_default_env.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file app.js
 * @author tynrare
 * @version 2
 * @module Rooms/ArtGuidelinesDraft
 */



/**
 *
 */

var ArtGuidelinesDraft = /*#__PURE__*/function (_Thingy) {
  _inherits(ArtGuidelinesDraft, _Thingy);

  var _super = _createSuper(ArtGuidelinesDraft);

  function ArtGuidelinesDraft() {
    _classCallCheck(this, ArtGuidelinesDraft);

    return _super.apply(this, arguments);
  }

  _createClass(ArtGuidelinesDraft, [{
    key: "initCallback",

    /**
     * .
     */
    value: function initCallback() {
      var _this = this;

      this.app = new _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_1__["AppRoot"]();
      this.app.resources.preloadMeshes({
        head: '/res/assets/meshes/art-head.glb'
      }).then(function () {
        _this.app.init(); //this.app.get('game').touch('env', () => new DefaultDevHiloEnvMap());


        _this.app.get('game').touch('cube-bounds', function () {
          return new _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_1__["HiloMeshThingy"]({
            name: 'cube-bounds'
          });
        });

        _this.app.get('game').touch('cube-back', function () {
          return new _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_1__["HiloMeshThingy"]({
            name: 'cube-back'
          });
        });

        _this.app.get('game').touch('head', function () {
          return new _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_1__["HiloMeshThingy"]({
            name: 'head-smooth'
          });
        });

        _this.app.get('game').touch('lines', function () {
          return new _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_1__["HiloMeshThingy"]({
            name: 'head-lines'
          });
        }); //this.app.get('game').touch('mesh3', () => new HiloMeshThingy({ name: 'head-lowpoly' }));
        //this.app.get('game').touch('mesh4', () => new HiloMeshThingy({ name: 'sphere-smooth' }));

      });
    }
    /**
     * .
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      this.app.dispose();
    }
  }]);

  return ArtGuidelinesDraft;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (ArtGuidelinesDraft);

/***/ }),

/***/ "../src/rooms/sketches/sandbox/app.js":
/*!********************************************!*\
  !*** ../src/rooms/sketches/sandbox/app.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rooms/hilo3d/index.js */ "../src/rooms/hilo3d/index.js");
/* harmony import */ var _rooms_hilo3d_environment_dev_default_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rooms/hilo3d/environment/dev_default_env.js */ "../src/rooms/hilo3d/environment/dev_default_env.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file app.js
 * @author tynrare
 * @version 2
 * @module Rooms/ArtGuidelinesDraft
 */



/**
 *
 */

var ArtGuidelinesDraft = /*#__PURE__*/function (_Thingy) {
  _inherits(ArtGuidelinesDraft, _Thingy);

  var _super = _createSuper(ArtGuidelinesDraft);

  function ArtGuidelinesDraft() {
    _classCallCheck(this, ArtGuidelinesDraft);

    return _super.apply(this, arguments);
  }

  _createClass(ArtGuidelinesDraft, [{
    key: "initCallback",

    /**
     * .
     */
    value: function initCallback() {
      var _this = this;

      this.app = new _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_1__["AppRoot"]();
      this.app.resources.preloadMeshes({
        head: '/res/assets/meshes/bridge-1.glb'
      }).then(function () {
        _this.app.init();

        _this.app.get('game').touch('bridge-1', function () {
          return new _rooms_hilo3d_index_js__WEBPACK_IMPORTED_MODULE_1__["HiloMeshThingy"]({
            name: 'bridge'
          });
        });
      });
    }
    /**
     * .
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {
      this.app.dispose();
    }
  }]);

  return ArtGuidelinesDraft;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (ArtGuidelinesDraft);

/***/ }),

/***/ "../src/rooms/sketches/speedruns/a/room.js":
/*!*************************************************!*\
  !*** ../src/rooms/sketches/speedruns/a/room.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
/* harmony import */ var _core_utils_http_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/http.js */ "../src/framework/core/utils/http.js");
/* harmony import */ var alea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alea */ "../node_modules/alea/alea.js");
/* harmony import */ var alea__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alea__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file room.js
 * @author tynrare
 * @version 2
 * @module Rooms/Speedruns
 */



/**
 * Simple test for modular windows
 */

var SpeedrunRoom = /*#__PURE__*/function (_Thingy) {
  _inherits(SpeedrunRoom, _Thingy);

  var _super = _createSuper(SpeedrunRoom);

  function SpeedrunRoom() {
    _classCallCheck(this, SpeedrunRoom);

    return _super.apply(this, arguments);
  }

  _createClass(SpeedrunRoom, [{
    key: "initCallback",

    /**
     * .
     */
    value: function initCallback() {
      // #draft
      var doc = document.getElementById('speedrun-a-data-root');
      document.getElementById('speedrun-a-button-generate').onclick = this.generate.bind(this);
      this.content = document.getElementById('speedrun-a-data-root');
      doc.appendChild(this.content);
    }
    /**
     * .
     */

  }, {
    key: "generate",
    value: function generate() {
      var _this = this;

      this.content.innerHTML = '';
      var input = document.getElementById('speedrun-a-seed-input');
      var seed = input.value;
      input.value = Number(input.value) + 1;
      var rand = alea__WEBPACK_IMPORTED_MODULE_2___default()(seed); // #draft

      var source = document.getElementById('speedrun-a-source-input').value; //const source = '/ehhh/src/rooms/sketches/speedruns/a/data.json';

      Object(_core_utils_http_js__WEBPACK_IMPORTED_MODULE_1__["load"])(source, function (json) {
        var data = JSON.parse(json);
        var index = 0;
        var summary = '';

        for (var k in data) {
          var arr = data[k];
          var len = arr.length - 1;
          var val = rand();
          var result = arr[Math.round(val * len)];

          _this.appendCategoty(k, result, index++);

          summary += "".concat(k, ": ").concat(result, ", ");
        }

        _this.appendCategoty('...Summary', summary, ++index);
      });
    }
    /**
     * @param {string} name .
     * @param {string} result .
     * @returns {HTMLElement} .
     */

  }, {
    key: "appendCategoty",
    value: function appendCategoty(name, result, index) {
      var el = document.createElement('div');
      el.classList.add('appear-anim');
      el.style.animationDelay = "".concat(index++ * 0.1, "s");
      el.innerHTML = "<H2>".concat(name, ":</H2><mark>").concat(result, "</mark>");
      this.content.appendChild(el);
      return el;
    }
    /**
     * .
     */

  }, {
    key: "disposeCallback",
    value: function disposeCallback() {//..
    }
  }]);

  return SpeedrunRoom;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_0__["Thingy"]);

/* harmony default export */ __webpack_exports__["default"] = (SpeedrunRoom);

/***/ }),

/***/ "../src/rooms/subroutine.js":
/*!**********************************!*\
  !*** ../src/rooms/subroutine.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_core_namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/core_namespace.js */ "../src/framework/core/core_namespace.js");
/* harmony import */ var _core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/exchange/index.js */ "../src/framework/core/exchange/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @file index.js
 *
 * @author tynrare
 * @version 2
 * @module Rooms
 */

/* eslint-disable global-require, camelcase, max-len, max-statements */
// #draft scope


var cases = {
  Hilo3d: __webpack_require__(/*! ./hilo3d/room.js */ "../src/rooms/hilo3d/room.js"),
  EhhhBoard: __webpack_require__(/*! ./ehhh-board/room.js */ "../src/rooms/ehhh-board/room.js"),
  ArtGuidelines: __webpack_require__(/*! ./sketches/art_guidelines/app.js */ "../src/rooms/sketches/art_guidelines/app.js"),
  Sandbox: __webpack_require__(/*! ./sketches/sandbox/app.js */ "../src/rooms/sketches/sandbox/app.js"),
  SpeedrunA: __webpack_require__(/*! ./sketches/speedruns/a/room.js */ "../src/rooms/sketches/speedruns/a/room.js") //ModularWindowTest: require('@test/manual/modular_window.mtest.js'),
  //AppThingyMinimalTest: require('@test/manual/app_thingy_minimal.mtest.js'),
  //HiloLineDrawTest: require('@test/manual/hilo_line_draw.mtest.js'),
  //Math3dTest: require('./math/math3d.js'),
  //HiloNormalsMeshDebugTest: require('@test/manual/hilo_normals_debug_draw.mtest.js'),
  //HiloRayNormalTest: require('@test/manual/hilo_ray_normal.mtest.js'),
  //MeshGraphGeomentryTest: require('@test/manual/mesh_graph_geomentry.mtest.js'),
  //MeshGraphMathCase1: require('@test/manual/mesh_graph_math_case_1.mtest.js'),
  //MeshGraphMathCase2: require('@test/manual/mesh_graph_math_case_2.mtest.js'),
  //MeshGraphMathCase3: require('@test/manual/mesh_graph_math_case_3.mtest.js'),
  //MeshGraphMathCase4: require('@test/manual/mesh_graph_math_case_4.mtest.js'),
  //MeshGraphMathSandbox: require('@test/manual/mesh_graph_math_case_x.mtest.js'),
  //PaperioPointsCase1: require('@test/manual/paperio_points_case_1.mtest.js'),
  //PaperioPointsCase2: require('@test/manual/paperio_points_case_2.mtest.js'),
  //PaperioPointsCase3: require('@test/manual/paperio_points_case_3.mtest.js'),
  //HiloMinimalShaderTest: require('@test/manual/hilo_minimal_shader.mtest.js'),
  //PaperioDrawCase1: require('@test/manual/paperio_draw_case_1.mtest.js'),
  //PaperioGameCase1: require('@test/manual/paperio_game_case_1.mtest.js')

};
/**
 * Class to run manual tests
 */

var RoomsSubroutine = /*#__PURE__*/function (_Thingy) {
  _inherits(RoomsSubroutine, _Thingy);

  var _super = _createSuper(RoomsSubroutine);

  function RoomsSubroutine() {
    _classCallCheck(this, RoomsSubroutine);

    return _super.apply(this, arguments);
  }

  _createClass(RoomsSubroutine, [{
    key: "initCallback",

    /**
     * .
     */
    value: function initCallback() {
      this.listenHash();
      window.onhashchange = this.listenHash.bind(this);
    }
    /**
     * #draft
     */

  }, {
    key: "listenHash",
    value: function listenHash() {
      var urlParams = new URLSearchParams(window.location.search);
      var h = window.location.hash.substr(1);
      this.del('active'); //23:14:12 ломаю для стрима пока
      //document.getElementById('ehhh-app-content-root').innerHTML = '';

      if (h.length > 0) {
        // #todo: перетащить внутрь темплейта
        document.getElementById('dev-subroutine-content-root').style.display = 'none';
        document.getElementById('ehhh-app-content-root').style.display = 'unset';
        var Case = cases[h]["default"];
        this.set('active', new Case());
      } else {
        document.getElementById('dev-subroutine-content-root').style.display = 'unset';
        document.getElementById('ehhh-app-content-root').style.display = 'none';
      }
    }
  }]);

  return RoomsSubroutine;
}(_core_exchange_index_js__WEBPACK_IMPORTED_MODULE_1__["Thingy"]);

window.cgn = _core_core_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"];
var instance = new RoomsSubroutine();
instance.init();

/***/ }),

/***/ "./node_modules/assert/assert.js":
/*!***************************************!*\
  !*** ./node_modules/assert/assert.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(/*! util/ */ "./node_modules/util/util.js");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });