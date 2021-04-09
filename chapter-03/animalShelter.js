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
        return this.stack.length === 0;
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(e) {
        this.queue.push(e);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

class AnimalShelter {
    constructor() {
        this.queue = new Queue();
    }

    enqueue(animal) {
        this.queue.enqueue(animal);
    }

    dequeueAny() {
        return this.queue.dequeue();
    }

    dequeueDog() {
        return this.dequeueUntil(Dog.name);
    }

    dequeueCat() {
        return this.dequeueUntil(Cat.name);
    }

    dequeueUntil(animal) {
        let temp = new Queue();
        let oldest;
        while (!this.queue.isEmpty()) {
            let dogOrCat = this.queue.dequeue();
            if (!oldest && dogOrCat.constructor.name === animal) {
                oldest = dogOrCat;
            } else {
                temp.enqueue(dogOrCat);
            }
        }

        this.queue = temp;

        return oldest;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }
}

let shelter = new AnimalShelter();

shelter.enqueue(new Dog('Abbey'));
shelter.enqueue(new Cat('Brad'));
shelter.enqueue(new Cat('Cole'));
shelter.enqueue(new Dog('Dean'));
shelter.enqueue(new Dog('Eugene'));
shelter.enqueue(new Dog('Fred'));
shelter.enqueue(new Cat('Guy'));

console.log(shelter.queue);
console.log(shelter.dequeueAny());
console.log(shelter.queue);
console.log(shelter.dequeueDog());
console.log(shelter.queue);
console.log(shelter.dequeueCat());
console.log(shelter.queue);
console.log(shelter.dequeueAny());
console.log(shelter.queue);