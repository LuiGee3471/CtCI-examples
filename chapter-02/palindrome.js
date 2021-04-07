class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function isPalindrome(head) {
    const values = [];
    let node = head;
    while (node) {
        values.push(node.value);
        node = node.next;
    }

    for (let i = 0; i < values.length / 2; i++) {
        if (values[i] !== values[values.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

/* TEST */
const a = new LinkedList('a');
const b = new LinkedList('b');
const c = new LinkedList('c');
// const d = new LinkedList('d');
const e = new LinkedList('c');
const f = new LinkedList('b');
const g = new LinkedList('a');

a.next = b;
b.next = c;
c.next = e;
// d.next = e;
e.next = f;
f.next = g;

console.log(isPalindrome(a));