class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function partition(list, number) {
    let leftList = [];
    let rightList = [];

    let node = list;
    while (node) {
        let value = node.value;
        console.log(value, number);
        if (value < number) {
            leftList.push(value);
        } else {
            rightList.push(value);
        }

        console.log(leftList, rightList);

        node = node.next;
    }

    let concatList = leftList.concat(rightList);
    let linked = new LinkedList(concatList[0]);
    let head = linked;
    for (let i = 1; i < concatList.length; i++) {
        linked.next = new LinkedList(concatList[i]);
        linked = linked.next;
    }

    return head;
}

function printList(list) {
    while (list.next) {
        console.log(list.value);
        list = list.next;
    }
    console.log(list.value);
}

const a = new LinkedList(3);
const b = new LinkedList(5);
const c = new LinkedList(8);
const d = new LinkedList(5);
const e = new LinkedList(10);
const f = new LinkedList(2);
const g = new LinkedList(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

const newa = partition(a, 5);
printList(newa);