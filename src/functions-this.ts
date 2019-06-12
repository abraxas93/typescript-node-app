console.log('#functions thic ctx');

interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void) : void;
}

class Handler {
  info: string;
  constructor() {
    this.info = 'default';
  }
  onClickGood(this: void, e: Event) {
    console.log(e);
    console.log('clicked');
  }
  onClickListener = (e: Event) => {
    console.log(this.info);
  }
}

let h = new Handler();
h.info = 'newinfo';
const obj: UIElement = {
  addClickListener(onClick) {
    onClick('onClick');
  },
};

obj.addClickListener(h.onClickListener);
const someFn: (x: number, y: number) => number = (x1, x2) => x1 + x2;
console.log(someFn(49, 49));
let suits = ["hearts", "spades", "clubs", "diamonds"];
// overloads
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
  if (typeof x == 'object') {
    const pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
    // Otherwise just let them pick the card
  if (typeof x == 'number') {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);