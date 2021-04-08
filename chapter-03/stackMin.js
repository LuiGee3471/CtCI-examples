class Stack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    pop() {
        let e = this.stack.pop();
        if (e === this.min()) {
            this.minStack.pop();
        }

        return e;
    }

    push(e) {
        this.stack.push(e);
        if (this.minStack.length === 0 || e < this.min()) {
            this.minStack.push(e);
        }
    }

    print() {
        console.log(this.stack);
    }

    min() {
        return this.minStack[this.minStack.length - 1];
    }
}

const stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(5);
stack.push(2);
console.log(stack.min());
stack.push(1);
console.log(stack.min());
stack.print();
stack.pop();
console.log(stack.min());
stack.pop();
console.log(stack.min());
stack.pop();
console.log(stack.min());
stack.print();