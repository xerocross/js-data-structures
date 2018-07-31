import BinaryMaxHeap from "./binary-max-heap.js"
import {RandomSequences1} from "xero-random-sequences"
import {toString} from "lodash"

test("isHeap works on a heap of 3 elements, positive", function() {
  var compareFunction = (x,y)=> x - y;
  var arr = [null, 8, 4, 5];
  expect(BinaryMaxHeap.isHeap(arr, compareFunction)).toBe(true);
});

test("isHeap works on a heap of 3 elements, positive (2)", function() {
  var compareFunction = (x,y)=> x - y;
  var arr = [null, 8, 5, 4];
  expect(BinaryMaxHeap.isHeap(arr, compareFunction)).toBe(true);
});

test("isHeap works on a heap of 8 elements, positive", function() {
  var compareFunction = (x,y)=> x - y;
  var arr = [null, 20, 15, 17, 12, 13, 16, 2, 11];
  expect(BinaryMaxHeap.isHeap(arr, compareFunction)).toBe(true);
});

test("isHeap works on a heap of 8 elements, negative", function() {
  var compareFunction = (x,y)=> x - y;
  var arr = [null, 20, 15, 17, 12, 13, 16, 2, 22];
  expect(BinaryMaxHeap.isHeap(arr, compareFunction)).toBe(false);
});

test("isHeap works on a heap of 3 elements, neg", function() {
  var compareFunction = (x,y)=> x - y;
  var arr = [null, 4, 8, 5];
  expect(BinaryMaxHeap.isHeap(arr, compareFunction)).toBe(false);
});

test("can insert 3 elements and satisfies heap property", function() {
  var compareFunction = (x,y)=> x - y;
  var heap = BinaryMaxHeap.buildHeap(compareFunction);
  heap.insert(2);
  heap.insert(3);
  heap.insert(4);
  expect(BinaryMaxHeap.isHeap(heap.getRawArray(), compareFunction)).toBe(true);
});

test("can insert 5 elements and satisfies heap property", function() {
  var compareFunction = (x,y)=> x - y;
  var heap = BinaryMaxHeap.buildHeap(compareFunction);
  heap.insert(2);
  heap.insert(3);
  heap.insert(4);
  heap.insert(5);
  heap.insert(6);
  expect(BinaryMaxHeap.isHeap(heap.getRawArray(), compareFunction)).toBe(true);
});

test("can insert RandomSequences1, and satisfies isHeap", function() {
  let compareFunction = (x,y)=> x - y;
  let numSequences = RandomSequences1.length;
  let result = true;
  for(let i = 0; i < numSequences; i++) {
    let heap = BinaryMaxHeap.buildHeap(compareFunction);
    for (let j = 0; j < RandomSequences1[i].length; j++) {
      heap.insert(RandomSequences1[i][j]);
    }
    let theArray = heap.getRawArray();
    if (!BinaryMaxHeap.isHeap(heap.getRawArray(), compareFunction)){
      result = false;
    }
    console.log(toString(theArray));
  }
  expect(result).toBe(true);
});
