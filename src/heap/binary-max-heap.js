import {getComparisonWrapper} from "comparison-wrapper";

var swap = function(arr, i, j) {
    let placeholder = arr[i];
    arr[i] = arr[j];
    arr[j] = placeholder;
};
var e;
var buildBinaryMaxHeap = function(compareFunction) {
    e = getComparisonWrapper(compareFunction);
    var root = null;
    var heap = {};
    var storageArray = [null];

    var getHalf = function(i) {
        return Math.floor(i/2);
    };

    var addElementAtEndIrrespectiveOfHeapCondition = function(elt) {
        storageArray.push(elt);
    };

    var reHeap = function(arr) {
    // assume the heap represented by storageArray meets the heap condition
    // except possibly the last element
        let hi = storageArray.length - 1;
        if (hi <= 1) {
            return;
        }
        let index = hi;
        while (index > 1 ) {
            let parentIndex = getHalf(index);
            if (e(storageArray[parentIndex], "<=", storageArray[index])) {
                swap(arr, parentIndex, index);
                settleDown(arr, parentIndex);
            }
            index = parentIndex;
        }
    };

    var settleDown = function(arr, index) {
        let newIndex = index;
        while (2*newIndex<arr.length) {
            let maxIndex = 2*newIndex;
            if (maxIndex+1 < arr.length && e(arr[maxIndex], "<", arr[maxIndex+1])) {
                maxIndex++;
            }
            if (e(arr[maxIndex], "<=", arr[newIndex])) {
                //do nothing
            } else {
                swap(arr, newIndex, maxIndex);
            }
            newIndex = maxIndex;
        }
    };
    heap.insert = function(value) {
        addElementAtEndIrrespectiveOfHeapCondition(value);
        reHeap(storageArray);
    };
    heap.get = function(index) {
        return storageArray[index+1];
    };
    heap.getRawArray = function() {
        return storageArray;
    };
    return heap;
};

var isHeap = function(arr, compareFunction) {
    let index = 1;
    let e = getComparisonWrapper(compareFunction);
    while (2*index < arr.length) {
        if (e(arr[index], "<", arr[2*index])) {
            return false;
        }
        if (2*index + 1 < arr.length && e(arr[index], "<", arr[2*index + 1])) {
            return false;
        }
        index++;
    }
    return true;
};
export default {
    buildHeap : buildBinaryMaxHeap,
    isHeap : isHeap
};
