class Node {
    next = null;
    data = 0;

    constructor(data) {
        this.data = data;
    }

    appendToTail(data) {
        let end = new Node(data);
        let n = this;
        while (n.next) {
            n = n.next;
        }
        n.next = end;
    }
}

class LinkedList {
    constructor(node) {
        this.head = node;
        this.tail = null;
    }

    appendToTail(node) {
        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.tail = node;
            this.head.next = node;
        }
        
    }

    popNode(data) {
        let node = this.head;
        if (this.head.data === data) {
            this.head = this.head.next;
            return node;
        }

        while (node.next) {
            if (node.next.data === data) {
                node.next = node.next.next;
                return node.next;
            }
            node = node.next;
        }

        return null;
    }
}

let m = new Node(0);
let list = new LinkedList(m);
list.printList();
list.appendToTail(new Node(1));
list.printList();
list.appendToTail(new Node(2));
list.printList();
list.popNode(2);
list.printList();