class MyQueue {
    constructor() {
        this.stack = [];
        this.tempStack = [];
    }

    add(e) {
        this.stack.push(e);
    }

    peek() {
        if (this.tempStack.length === 0) {
            this.moveToTempStack();
            let value = this.tempStack.pop();
            this.tempStack.push(value);
            return value;
        } else {
            let value = this.tempStack.pop();
            this.tempStack.push(value);
            return value;
        }
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    remove() {
        if (this.tempStack.length === 0) {
            this.moveToTempStack();

            return this.tempStack.pop();
        } else {
            return this.tempStack.pop();
        }
    }

    moveToTempStack() {
        while (this.stack.length > 0) {
            this.tempStack.push(this.stack.pop());
        }
    }
}

let queue = new MyQueue();

queue.add(3);
queue.add(4);
console.log(queue.peek());
queue.add(5);
console.log(queue.remove());
console.log(queue.remove());
console.log(queue.peek());