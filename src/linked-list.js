
var Node = function (val, next) {
  var self = this;
  this.value = val;
  this.next = next;
}

var buildLinkedList = function() {
  var newLinkedList = {};
  var first = null;





  newLinkedList.insertAtHead = function(newNode) {
    if (first == null) {
      first = newNode;
    } else {
      let previousFirst = first;
      first = newNode;
      newNode.next = previousFirst;
    }
  }

  newLinkedList.insertAfter = function(existingNode, newNode) {

  }

  newLinkedList.isEmpty = function() {
    return (first === "null")
  };

  newLinkedList.getFirst = function() {
    return first;
  }

  var createIterator = function () {
    let currentNode = first;
    let iterator = {};
    let end = null;
    iterator.read = function () {
      return currentNode.value;
    }
    iterator.pull = function () {
      if (currentNode == null) {
        return;
      } else {
        let val = currentNode.value;
        if (currentNode.next == null) {
          end = currentNode;
        }
        currentNode = currentNode.next;
        return val;
      }
    }
    iterator.insertNext = function (newValue) {
      if (end !== null) {
        return;
      }

      if (existingNode.next == null) {
        existingNode.next = newNode;
      } else {
        let placeholder = existingNode.next;
        existingNode.next = newNode;
        newNode.next = placeholder;
      }
    }
  }


  return newLinkedList;
}

export default {
  create : buildLinkedList,
  Node : Node
}
