interface IlabeledValue {
  label: string;
}

function printLabel(labeledObject: IlabeledValue) {
  console.log(labeledObject.label);
}

printLabel({ label: 'someString' });

// optional properties
interface SquareConfig {
  color?: string;
  width: number;
}

function createSquare(config: SquareConfig | Square): { color: string, area: number } {
  const newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

const mySquare = createSquare({ width: 100 });
console.log(mySquare);

// readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}

const p1: Point = { x: 10, y: 20 };
// p1.x = 20; // Error

// readonly array
let nums: number[] = [0, 423, 1];
const arr: ReadonlyArray<number> = [24, 35, 6, 8];
// arr[0] = 22; // Error
// arr.push(1111); // Error

// nums = arr; // Error not allowed to reassign this way

nums = arr as number[]; // this way allowed;

const mySqr = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
const mySqr2 = createSquare(<SquareConfig>{ striped: true, width: 50 });

interface Square {
  color?: string;
  width?: number;
  [propName: string]: any;
}

const sqr = createSquare({ color: 'red', width: 75, opacity: 0.5, striped: false });
console.log(sqr);

// function interfaces

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  const result = source.search(subString);
  return result > -1;
};

// For function types to correctly type check, the names of the parameters do not need to match.
// We could have, for example, written the above example like this:
const mySrch: SearchFunc = function (src: string, sub: string): boolean {
  const result = src.search(sub);
  return result > -1;
};

// indexable types
interface StringArray {
  [index: number]: string;
}

const strArr: StringArray = ['Bob', 'Jason', 'Alice'];

console.log(strArr[0]);
interface KeyValue {
  [key: string]: number;
}
const vocabulary: KeyValue = { key: 23, value: 55 };

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
const a1: ReadonlyStringArray = ['Alex', 'Mari'];

// implementation of interfaces
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
  setTime(d: Date) {
    this.currentTime = d;
  }
}

export {};
