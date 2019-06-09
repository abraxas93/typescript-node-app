
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

const greeter = new Greeter('Alex');
console.log(greeter.greet());

// inheritance
class Animal {
  move(distance: number = 0) {
    console.log(`Animal moved ${distance} m.`);
  }
}
class Dog extends Animal {
  bark() {
    console.log('Bark Bark');
  }
}
const dog = new Dog();
dog.move(2);
dog.bark();

export {};
