import LinkedList from "./linked-list.js"

test("can insert a new head and retrieve it",function(){
  var newLinkedList = LinkedList.create();
  newLinkedList.insertAtHead(17);
  var iterator = newLinkedList.getIterator();
  expect(iterator.next()).toBe(17);
});


test("can push a new element onto the head",function(){
  var newLinkedList = LinkedList.create();
  newLinkedList.insertAtHead("one");
  newLinkedList.insertAtHead("two");
  var iterator = newLinkedList.getIterator();
  expect(iterator.next()).toBe("two");
});

test("can push two elements and read them back",function(){
  var newLinkedList = LinkedList.create();
  newLinkedList.insertAtHead("one");
  newLinkedList.insertAtHead("two");
  var iterator = newLinkedList.getIterator();
  var values = [];
  values.push(iterator.next());
  values.push(iterator.next());
  expect(values).toEqual(["two", "one"]);
});

test("read to end, then null",function(){
  var newLinkedList = LinkedList.create();
  newLinkedList.insertAtHead("one");
  newLinkedList.insertAtHead("two");
  var iterator = newLinkedList.getIterator();
  iterator.next();
  iterator.next();
  expect(iterator.next()).toBe(null);
});

test("can read to end, then insert new value, then read it",function(){
  var newLinkedList = LinkedList.create();
  newLinkedList.insertAtHead("one");
  newLinkedList.insertAtHead("two");
  var iterator = newLinkedList.getIterator();
  iterator.next();
  iterator.next();
  iterator.insertHere("three");
  expect(iterator.next()).toBe("three");
});

test("can insert between two elements",function(){
  var newLinkedList = LinkedList.create();
  newLinkedList.insertAtHead("one");
  newLinkedList.insertAtHead("two");
  newLinkedList.insertAtHead("three");
  // "three", "two", "one"
  var iterator = newLinkedList.getIterator();
  iterator.next();
  // current head is at two
  iterator.insertHere("two.five");
  // "three", "two", "two.five", "one"
  var values = [];
  iterator = newLinkedList.getIterator();
  values.push(iterator.next());
  values.push(iterator.next());
  values.push(iterator.next());
  values.push(iterator.next());
  expect(values).toEqual(["three", "two", "two.five", "one"]);
});
