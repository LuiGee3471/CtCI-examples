class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    pop() {
        if (!this.head) {
            return null;
        }

        if (!this.head.next) {
            this.head = null;
            return this.head;
        }

        let node = this.head;

        while (node.next.next) {
            node = node.next;
        }

        let last = this.tail;
        this.tail = node;
        this.tail.next = null; 

        return last;
    }
}

module.exports = LinkedList;