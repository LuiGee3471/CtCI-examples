class SetOfStacks {
    constructor(max) {
        this.max = max;
        this.stacks = {
            0: []
        };
        this.stackIndex = 0;
    }

    push(e) {
        if (this.stacks[this.stackIndex].length < this.max) {
            this.stacks[this.stackIndex].push(e);
        } else {
            this.stackIndex++;
            this.stacks[this.stackIndex] = [e];
        }
    }

    pop() {
        if (this.stacks[this.stackIndex].length === 0) {
            delete this.stacks[this.stackIndex];
            this.stackIndex--;
            return this.stacks[this.stackIndex].pop();
        } else {
            return this.stacks[this.stackIndex].pop();
        }
    }

    print() {
        for (let key of Object.keys(this.stacks)) {
            console.log(key, this.stacks[key])
        }
    }

    popAt(index) {
        if (this.stacks[index].length > 0) {
            return this.stacks[index].pop();
        }
    }
}

let stack = new SetOfStacks(2);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print();
console.log(stack.popAt(0));
console.log(stack.pop());
stack.print();
console.log(stack.pop());
stack.print();