(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("xD", [], factory);
	else if(typeof exports === 'object')
		exports["xD"] = factory();
	else
		root["xD"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildBinaryMaxHeap = exports.buildLinkedList = undefined;

var _linkedList = __webpack_require__(1);

var _linkedList2 = _interopRequireDefault(_linkedList);

var _binaryMaxHeap = __webpack_require__(2);

var _binaryMaxHeap2 = _interopRequireDefault(_binaryMaxHeap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildLinkedList = exports.buildLinkedList = _linkedList2.default.buildLinkedList;
var buildBinaryMaxHeap = exports.buildBinaryMaxHeap = _binaryMaxHeap2.default.buildHeap;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Node = function Node(val, next) {
  var self = this;
  this.value = val;
  this.next = next;
};

var buildLinkedList = function buildLinkedList() {
  var newLinkedList = {};
  var first = null;

  newLinkedList.insertAtHead = function (value) {
    var newNode = new Node(value, null);
    if (first == null) {
      first = newNode;
    } else {
      var previousFirst = first;
      first = newNode;
      newNode.next = previousFirst;
    }
  };

  newLinkedList.isEmpty = function () {
    return first === "null";
  };

  var createIterator = function createIterator() {
    var currentNode = first;
    var iterator = {};
    var end = null;

    iterator.readInPlace = function () {
      return currentNode.value;
    };
    iterator.next = function () {
      if (currentNode == null) {
        return null;
      } else {
        var val = currentNode.value;
        if (currentNode.next == null) {
          end = currentNode;
        }
        currentNode = currentNode.next;
        return val;
      }
    };
    iterator.insertHere = function (value) {
      var newNode = new Node(value, null);
      if (end !== null) {
        end.next = newNode;
        currentNode = newNode;
        end = newNode;
        return null;
      } else {
        if (currentNode.next == null) {
          currentNode.next = newNode;
        } else {
          var placeholder = currentNode.next;
          currentNode.next = newNode;
          newNode.next = placeholder;
        }
      }
    };
    return iterator;
  };

  newLinkedList.getIterator = function () {
    return createIterator();
  };
  return newLinkedList;
};

exports.default = {
  buildLinkedList: buildLinkedList
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _comparisonWrapper = __webpack_require__(3);

var swap = function swap(arr, i, j) {
  var placeholder = arr[i];
  arr[i] = arr[j];
  arr[j] = placeholder;
};
var e;
var buildBinaryMaxHeap = function buildBinaryMaxHeap(compareFunction) {
  e = (0, _comparisonWrapper.getComparisonWrapper)(compareFunction);
  var root = null;
  var heap = {};
  var storageArray = [null];

  var getHalf = function getHalf(i) {
    return Math.floor(i / 2);
  };

  var addElementAtEndIrrespectiveOfHeapCondition = function addElementAtEndIrrespectiveOfHeapCondition(elt) {
    storageArray.push(elt);
  };

  var reHeap = function reHeap(arr) {
    // assume the heap represented by storageArray meets the heap condition
    // except possibly the last element
    var hi = storageArray.length - 1;
    if (hi <= 1) {
      return;
    }
    var index = hi;
    while (index > 1) {
      debugger;
      var parentIndex = getHalf(index);
      if (e(storageArray[parentIndex], "<=", storageArray[index])) {
        swap(arr, parentIndex, index);
        settleDown(arr, parentIndex);
      }
      index = parentIndex;
    }
  };

  var settleDown = function settleDown(arr, index) {
    var newIndex = index;
    while (2 * newIndex < arr.length) {
      var maxIndex = 2 * newIndex;
      if (maxIndex + 1 < arr.length && e(arr[maxIndex], "<", arr[maxIndex + 1])) {
        maxIndex++;
      }
      if (e(arr[maxIndex], "<=", arr[newIndex])) {
        //do nothing
      } else {
        swap(arr, newIndex, maxIndex);
        newIndex = maxIndex;
      }
    }
  };
  heap.insert = function (value) {
    addElementAtEndIrrespectiveOfHeapCondition(value);
    reHeap(storageArray);
  };
  heap.get = function (index) {
    debugger;
    return storageArray[index + 1];
  };
  heap.getRawArray = function () {
    return storageArray;
  };

  return heap;
};
exports.default = {
  buildHeap: buildBinaryMaxHeap
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.getComparisonWrapper = function (compareFunction) {
  return function (leftElement, comparisonString, rightElement) {
    switch (comparisonString) {
      case "<":
        return compareFunction(leftElement, rightElement) < 0;
        break;
      case "<=":
        return compareFunction(leftElement, rightElement) <= 0;
        break;
      case ">":
        return compareFunction(leftElement, rightElement) > 0;
        break;
      case ">=":
        return compareFunction(leftElement, rightElement) >= 0;
        break;
        return undefined;
    }
  };
};

/***/ })
/******/ ]);
});