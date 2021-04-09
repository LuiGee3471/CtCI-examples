class Stack {
    constructor() {
        this.stack = [];
    }

    pop() {
        return this.stack.pop();
    }

    push(e) {
        this.stack.push(e);
    }

    isEmpty() {
        return this.peek() === undefined;
    }

    peek() {
        let value = this.pop();
        if (value) this.push(value);
        return value;
    }

    print() {
        console.log(this.stack);
        for (let i = this.stack.length - 1; i >= 0; i--) {
            console.log(this.stack[i]);
        }
    }
}

function sortStack(stack) {
    let min = stack.pop();
    let tempStack = new Stack();

    while (!stack.isEmpty()) {
        let top = stack.pop();
        if (top < min) {
            tempStack.push(min);
            min = top;
        } else {
            tempStack.push(top);
        }
    }

    while (!tempStack.isEmpty()) {
        let top = tempStack.pop();
        stack.push(top);
    }

    

    stack.push(min);

    return stack;
}

let stack = new Stack();

stack.push(2);
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(4);
console.log('Before');
stack.print();

stack = sortStack(stack);
console.log('After');
stack.print();