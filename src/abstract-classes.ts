abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming the earth');
  }
}

abstract class Department {
  constructor(public name: string) {}
  printName(): void {
    console.log('Department name: ' + this.name);
  }
  abstract printMeeting(): void; // must be implemented
}

class AccountDepartment extends Department {
  amount: number;
  constructor(name: string, amount) {
    super(name);
    this.amount = amount;
  }
  printMeeting(): void { console.log('implementation'); }
}

const acc = new AccountDepartment('Alfa', 1234);
console.log(acc.name);
console.log(acc.amount);
acc.printMeeting();
acc.printName();

class Greeter {
  static standardGreeting = 'Hello, there';
  greeting: string | undefined;
  greet() {
    if (this.greeting) {
      return `Hello, ${this.greeting}`;
    }
    return Greeter.standardGreeting;
  }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

/**
 * This variable will hold the class itself, or said another way its constructor function.
 *  Here we use typeof Greeter, that is “give me the type of the Greeter class itself” rather than the instance type.
 *  Or, more precisely, “give me the type of the symbol called Greeter,” which is the type of the constructor function.
 *  This type will contain all of the static members of Greeter along with the constructor that creates instances of the Greeter class.
 *  We show this by using new on greeterMaker, creating new instances of Greeter and invoking them as before.
 */

const greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = 'Hey there!';

const greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

// Using a class as an interface
class Point {
  x: number | undefined;
  y: number | undefined;
}

interface Point3d extends Point {
  z: number;
}

const point3d: Point3d = { x: 1, y: 2, z: 3 };

export {};
