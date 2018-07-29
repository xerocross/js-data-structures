import LinkedList from "./linked-list.js"

test("can insert a new head and retrieve it",function(){
  var newLinkedList = LinkedList.create();
  newLinkedList.insertAtHead(new LinkedList.Node(17,null));
  var node = newLinkedList.getFirst();
  expect(node.value).toBe(17);
});


test("can push a new element onto the head",function(){
  var newLinkedList = LinkedList.create();
  newLinkedList.insertAtHead(new LinkedList.Node("first",null));
  newLinkedList.insertAtHead(new LinkedList.Node("second",null));
  var head = newLinkedList.getFirst();
  var nextNode = head.next;

  expect(nextNode.value).toEqual("first");
});
