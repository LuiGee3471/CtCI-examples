const LinkedList = require('./linkedList');

function findKthToLast(k, list) {
    if (k < 0) return null;

    let followedPointer = 0;
    let followingPointerStarted = false;
    let kNode = null;

    let node = list.head;

    while (node.next) {
        if (!followingPointerStarted && followedPointer > k) {
            return null;
        }

        if (followedPointer === k) {
            followingPointerStarted = true;
            kNode = list.head;
        }

        if (followingPointerStarted) {
            kNode = kNode.next;
        }

        node = node.next;
        followedPointer++;
    }

    return kNode;
}

// Test
let l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(4);
l.append(5);

console.log(findKthToLast(3, l), 2);
console.log(findKthToLast(10, l), null);
console.log(findKthToLast(-1, l), null);
console.log(findKthToLast(0, l), 5);
console.log(findKthToLast(1, l), 4);
console.log(l.pop());