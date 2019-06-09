class Animal {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distance = 5) {
    console.log('Slitering...');
    super.move(distance);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distance = 23) {
    console.log('Galoping...');
    super.move(distance);
  }
}

const sam = new Snake('Sammy the Python');
sam.move(15);
const tom = new Horse('Tommy the Palolimo');
tom.move(16);

class User {
  static origin = { x:0, y:0 };
  public userName: string;
  private id: number;
  protected age: number;
  constructor(name: string, age: number) {
    this.userName = name;
    this.id = Math.floor(Math.random() * 3 + 1);
    this.age = age;
  }
  get userId():number {
    return this.id;
  }
  set userId(id: number) {
    this.id = id;
  }
  public getUserInfo() {
    console.log(`Username: ${this.userName} has age: ${this.age} and unique id: ${this.id}`);
  }
  getStatic() {
    return origin;
  }
}

class Manager extends User {
  public salary: number;
  readonly department: string;
  constructor(name: string, age: number, salary: number = 0, department:string = 'default') {
    super(name, age);
    this.salary = salary;
    this.userId = 123;
    this.department = department;
  }
  public setNewAge(newAge: number) {
    this.age = newAge;
  }
  public getAge() {
    return this.age;
  }
  testMethod(value: number) {
    this.userId = value;
  }
}
class Administrator extends User {
  constructor(name: string, age: number, readonly department: string) {
    super(name, age);
  }
}
class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {
  }
}
const oct = new Octopus('Dr.Octopus');
// let user = new User('Alex', 33);
// user.getUserInfo();
// console.log(user.userId);
// user.userId = 23422;
// console.log(user.userId);
const manager = new Manager('Alexandr', 33, 123999, 'DMT Group');
// manager.getUserInfo();
manager.testMethod(10000);
console.log(manager.userId);
console.log(manager.getAge());
console.log(manager.department);
console.log(User.origin);
const admin = new Administrator('Jason', 38, 'Mpower');
console.log(admin.department);
export {};
