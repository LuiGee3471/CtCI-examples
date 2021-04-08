class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function loopDetection(head) {
    let map = new Map();

    let node = head; 
    while (node) {
        if (map.has(node)) {
            return node;
        }
        map.set(node, true);
        node = node.next;
    }

    return null;
}

/* TEST */
// A -> B -> C -> D -> E -> C

const a = new LinkedList();
const b = new LinkedList();
const c = new LinkedList();
const d = new LinkedList();
const e = new LinkedList();
const f = new LinkedList();

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = c;

console.log(loopDetection(a) === c, true);

const A = new LinkedList();
const B = new LinkedList();
const C = new LinkedList();
const D = new LinkedList();
const E = new LinkedList();
const F = new LinkedList();

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;

console.log(loopDetection(A) === null, true);