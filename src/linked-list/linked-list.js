
var Node = function (val, next) {
    this.value = val;
    this.next = next;
};

var buildLinkedList = function() {
    var newLinkedList = {};
    var first = null;

    newLinkedList.insertAtHead = function(value) {
        let newNode = new Node(value, null);
        if (first == null) {
            first = newNode;
        } else {
            let previousFirst = first;
            first = newNode;
            newNode.next = previousFirst;
        }
    };

    newLinkedList.isEmpty = function() {
        return (first === "null");
    };

    var createIterator = function () {
        let currentNode = first;
        let iterator = {};
        let end = null;

        iterator.readInPlace = function () {
            return currentNode.value;
        };
        iterator.next = function () {
            if (currentNode == null) {
                return null;
            } else {
                let val = currentNode.value;
                if (currentNode.next == null) {
                    end = currentNode;
                }
                currentNode = currentNode.next;
                return val;
            }
        };
        iterator.insertHere = function (value) {
            let newNode = new Node(value, null);
            if (end !== null) {
                end.next = newNode;
                currentNode = newNode;
                end = newNode;
                return null;
            } else {
                if (currentNode.next == null) {
                    currentNode.next = newNode;
                } else {
                    let placeholder = currentNode.next;
                    currentNode.next = newNode;
                    newNode.next = placeholder;
                }
            }
        };
        return iterator;
    };

    newLinkedList.getIterator = function() {
        return createIterator();
    };
    return newLinkedList;
};

export default {
    buildLinkedList : buildLinkedList
};
