// tslint:disable-next-line: max-line-length
// Instead, you would need to work with the static side of the class directly. In this example, we define two interfaces,
// ClockConstructor for the constructor and ClockInterface for the instance methods.
// tslint:disable-next-line: max-line-length
// Then, for convenience, we define a constructor function createClock that creates instances of the type that is passed to it:
interface ClockConstructor {
  new (hour: number, minute: number) : ClockInterface;
}
interface ClockInterface {
  tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() { console.log('din dong'); }
}
class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tic tak -- ');
  }
}
const dClock = createClock(DigitalClock, 22, 14);
const aClock = createClock(AnalogClock, 14, 15);

// Another simple way is to use class expressions
const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() { console.log('new clock ringtone'); }
};

// Extending Interfaces
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke {
  sideLength: number;
}
const square = <Square>{};
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 17;

// Hybrid Types
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  const counter = <Counter>function (start: number) {};
  counter.interval = 23;
  counter.reset = function () { console.log('reset fn'); };
  return counter;
}

const c = getCounter();
c(10);
console.log(c);
c.reset();
c.interval = 5.0;
console.log(c);

// Interfaces Extending Classes
// tslint:disable-next-line: max-line-length
// When an interface type extends a class type it inherits the members of the class but not their implementations.
// tslint:disable-next-line: max-line-length
// It is as if the interface had declared all of the members of the class without providing an implementation.
class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() { console.log('this.state'); }
}

class TextBox extends Control {
  select() { console.log('textbox select'); }
}

const btn = new Button();

// class Image implements SelectableControl {
//     private state: any;
//     select() { }
// }

export {};
