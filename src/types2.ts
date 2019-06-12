function isNumber(x: any): x is number {
  return typeof x === 'number';
}

const result = isNumber('14');
console.log(result);

function createElement(tagImg): string {
  return 'string';
}

function createElement(tageImg, noTag):string {
  return tageImg + noTag;
}

export interface Hero {
  name: string;
  skill: string;
}

export class HeroClass {
  private heroes: Hero[] = [
    { name: 'Superman', skill: 'fly' },
    { name: 'Spiderman', skill: 'spider-sense' },
    { name: 'Batman', skill: 'superhuman power' },
    { name: 'Flash', skill: 'run' },
  ];
  public getHero(name: string): Hero {
    console.log(name);
    return this.heroes.find((hero: Hero) => hero.name === name);
  }

  public getHero(name: string, skill?: string): Hero {
    console.log(skill);
    return this.heroes.find((hero: Hero) => hero.name === name && hero.skill === skill);
  }
}

const h = new HeroClass();
const hero = h.getHero('Superman');
console.log(hero);

let myAdd: (x: number) => number;
myAdd = function (num: number) { return num * num; };

type User = {
  name: string;
  age: number
};

function someFn(user: User) {
  console.log(user);
}

someFn({ name: 'aaa', age: '33' });

console.log(myAdd(3));
