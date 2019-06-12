
function add(x: number, y: number): number {
  return x + y;
}

add(2, 3);

const myAdd = function (x: number, y: number): number {
  return x + y;
};
const myInheritedAdd: (baseValue: number, increment: number) => number =
    function (x, y) { return x + y; };
console.log(myInheritedAdd(9, 3));
myAdd(5, 7);
const sum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};
const someFn: (x: number, y: number) => number = (x1, x2) => x1 + x2;
const myAdd3: (baseValue: number, increment: number) => number =
    function (x, y) { return x + y; };

function buildName(prefix:string = 'user', name: string, surname?: string): void {
  if (!surname) {
    return console.log(`Hello ${prefix} ${name}`);
  }
  return console.log(`Hello ${prefix} ${name} ${surname}`);
}
// buildName(undefined, 'ALex', 'Savchuk');
// buildName('Mister', 'ALex', 'Savchuk');
// buildName(undefined, 'Alex');
function buildName2(firstName: string, ...restOfName: string[]) {
  console.log(restOfName);
  return firstName + ' ' + restOfName.join(' ');
}
function testFn(...nums: number[]): string {
  console.log(nums);
  return nums.join('');
}

// employeeName will be "Joseph Samuel Lucas MacKinzie"
const employeeName = buildName2('Joseph', 'Samuel', 'Lucas', 'MacKinzie');
// console.log(employeeName);
// const result = testFn(2, 3, 6, 7, 8);
// console.log(result);
const buildNameFun: (fname: string, ...rest: string[]) => string = buildName2;
// buildNameFun('aaa', 'bbb', 'ccc');
const deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker() {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52);
      const pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

const cardPicker = deck.createCardPicker();
const pickedCard = cardPicker();
// console.log(pickedCard);

interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

const newDeck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker(this: Deck) {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52);
      const pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};
const cPicker = newDeck.createCardPicker();
const newCard = cPicker();
console.log(newCard);

export {};
