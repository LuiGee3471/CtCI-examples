const LinkedList = require('./linkedList');

function deleteMidNode(midNode) {
    // 1. previousNode.next = node.next;
    // next -> next -> tail null
    // 1 -> 5 -> 9 -> 12 => 1 -> 5 -> 12
    // 1 -> 5 -> 12 -> 12 => 1 -> 5 -> 12 -> null
    
    let node = midNode;
    let nextNode = node.next;
    while (node.next !== null && nextNode !== null) {
        node.value = nextNode.value;
        nextNode = nextNode.next;
        if (!nextNode) {
            node.next = null;
        } else {
            node = node.next;
        }
    }

    node = null;
}

/* TEST */
const printList = function(list) {
    let node = list.head;
    while (node !== null) {
        console.log(node.value);
        node = node.next;
    }
    console.log('done printing');
};

const list = new LinkedList();
list.append(1);
list.append(5);
let node = list.tail;
list.append(9);
list.append(12);

printList(list);
deleteMidNode(node);
printList(list);