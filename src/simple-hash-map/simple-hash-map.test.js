import SimpleHashMap from "./simple-hash-map.js";
import {StringHash} from "../helpers/string-hash.js";
import TestStrings from "../helpers/test-strings.js";

test("can add one element and retreive value", function() {
    let hashMap = SimpleHashMap.build(13,StringHash);
    hashMap.add("apple", 12);
    let elt = hashMap.get("apple");
    expect(elt.value).toBe(12);
});

test("can add more elements than slotNum and retreive one value", function() {
    let hashMap = SimpleHashMap.build(7,StringHash);
    for (let i = 0; i < TestStrings.length; i++) {
        hashMap.add(TestStrings[i], i);
    }
    let elt = hashMap.get(TestStrings[15]);
    expect(elt.value).toBe(15);
});

test("contain works on positive expected result", function() {
    let hashMap = SimpleHashMap.build(7,StringHash);
    hashMap.add("apple", 13);
    hashMap.add("bale",12);
    hashMap.add("snake",16);
    expect(hashMap.contains("apple")).toBe(true);
});

test("contain works on negative expected result", function() {
    let hashMap = SimpleHashMap.build(7,StringHash);
    hashMap.add("apple", 9);
    hashMap.add("bale",12);
    expect(hashMap.contains("fries")).toBe(false);
});

test("add element still works with undefined value", function() {
    let hashMap = SimpleHashMap.build(7,StringHash);
    hashMap.add("apple");
    expect(hashMap.get("apple").value).toBe(undefined);
});

test("duplicate add updates value", function() {
    let hashMap = SimpleHashMap.build(7,StringHash);
    hashMap.add("apple", 12);
    hashMap.add("apple", 0);
    expect(hashMap.get("apple").value).toBe(0);
});

test("after remove, contains returns false", function() {
    let hashMap = SimpleHashMap.build(7,StringHash);
    hashMap.add("apple", 12);
    hashMap.remove("apple");
    expect(hashMap.contains("apple")).toBe(false);
});
test("remove removes only one element (if any)", function() {
    let hashMap = SimpleHashMap.build(27,StringHash);
    hashMap.add("apple", 13);
    hashMap.add("bale",12);
    hashMap.add("snake",16);
    hashMap.remove("apple");
    let afterLength = hashMap.toList().length;
    expect(afterLength).toBe(2);
});