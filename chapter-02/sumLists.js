class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function sumList(list1, list2) {
    let node1 = list1;
    let node2 = list2;

    let newListHead = null;
    let newList = null;
    let remainder = 0;

    while (node1 || node2) {
        let val1 = node1.value || 0;
        let val2 = node2.value || 0;
        let sum = val1 + val2 + remainder;
        let value = sum % 10;
        if (newList) {
            newList.next = new LinkedList(value);
            newList = newList.next;
        } else {
            newList = new LinkedList(value);
            newListHead = newList;
        }
        remainder = (sum - value) / 10;
        node1 = node1.next;
        node2 = node2.next;
    }

    if (remainder) {
        newList.next = new LinkedList(remainder);
    }
    
    return newListHead;
}

function printList(list) {
    while (list) {
        console.log(list.value);
        list = list.next;
    }
}

/* TEST */

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). this case refers to 617 + 295
// Output: 2 -> 1 -> 9. the answer refers to 912

let a = new LinkedList(7);
let b = new LinkedList(1);
let c = new LinkedList(6);

a.next = b;
b.next = c;

let d = new LinkedList(5);
let e = new LinkedList(9);
let f = new LinkedList(2);

d.next = e;
e.next = f;

let newHead = sumList(a, d);

printList(newHead);

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 9). this case refers to 617 + 995
// Output: 2 -> 1 -> 6 -> 1. the answer refers to 1612

a = new LinkedList(7);
b = new LinkedList(1);
c = new LinkedList(6);

a.next = b;
b.next = c;

d = new LinkedList(5);
e = new LinkedList(9);
f = new LinkedList(9);

d.next = e;
e.next = f;

newHead = sumList(a, d);

printList(newHead);