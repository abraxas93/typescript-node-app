// boolean
let isDone: boolean = true;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = 'blue';
color = 'red';

let fullName: string = 'Bob Bobbington';
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }. I'll be ${ age + 1 } years old next month.`;

// Arrays
let list: number[] = [1, 2, 3];

let numsList: Array<number> = [1, 2, 3];
let strList: string[] = ['1', '2', '3']; // Array<string>

// Turple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

let custom: number | string;
custom = 1;
custom = 'some string';
// custom = false; // Error

// Enums
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(0 === Color.Red);

console.log(c);

// Types assert
let someValue: any = 'this is a string';

let strLength: number = (<string>someValue).length;

let someValue2: any = 'this is a new string';

let strLength2: number = (someValue2 as string).length;

type User = {
  username: string;
  password: string;
  age: number;
  created: Date
};

let u1: User = {
  username: 'Alex',
  password: 'pwspws',
  age: 22,
  created: new Date(),
};

console.log(u1);
