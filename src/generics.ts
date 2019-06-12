function identity<T>(arg: T): T {
  return arg;
}
console.log(typeof identity<string>(String(2)));
const output = identity('It will convert automatically');
console.log(output);

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
function newLogging<T>(arg: Array<T>): Array<T> {
  return arg;
}
console.log(loggingIdentity<number>([1, 2, 2, 10]));

// generic functions
const myIdentity: <T>(arg: T) => T = identity;

const myIdentity2: <U>(arg: U) => U = identity;
console.log(myIdentity('args'));

interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) { }
  getPaddingString() {
    return Array(this.numSpaces + 1).join(' ');
  }
}

class StringPadder implements Padder {
  constructor(private value: string) { }
  getPaddingString() {
    return this.value;
  }
}

function getRandomPadder() {
  return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder('someValue');
}

let padder: Padder = getRandomPadder();
console.log(padder.constructor);
console.log(padder.getPaddingString());
console.log(padder instanceof SpaceRepeatingPadder);
if (padder instanceof SpaceRepeatingPadder) {
  padder; // type narrowed to 'SpaceRepeatingPadder'
}
console.log(padder instanceof StringPadder);
if (padder instanceof StringPadder) {
  padder; // type narrowed to 'StringPadder'
}
