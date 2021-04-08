class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function intersection(head1, head2) {
    let nodes = new Map();

    let node = head1;
    while (node) {
        nodes.set(node, true);
        node = node.next;
    }

    node = head2;
    while (node) {
        if (nodes.get(node)) {
            return node;
        }
        node = node.next;
    }

    return null;
}

/* TEST */
const a = new LinkedList('a');
const b = new LinkedList('b');
const c = new LinkedList('c');
const d = new LinkedList('d');
const e = new LinkedList('e');
const f = new LinkedList('f');
const g = new LinkedList('g');
const h = new LinkedList('h');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

const a1 = new LinkedList('a1');
const b1 = new LinkedList('b1');
const c1 = new LinkedList('c1');

a1.next = b1;
b1.next = c;
c.next = c1;

const intersectNode = intersection(a, a1);

console.log(intersectNode.value);