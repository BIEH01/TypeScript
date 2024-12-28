// Protected is like private and we can use it internally but it can be inherited

export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello , I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('do');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  bark(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    // more code
    console.log('Moving as a dog');
    super.move(); //> It is the way to inherit a method
  }
}

// const black = new Animal('black');
// black.move();
// console.log(black.greeting()); > Cannot be created because of abstract class

const blue = new Dog('blue', 'John');
blue.move();
console.log(blue.greeting());
blue.bark(5);
console.log(blue.owner);
// blue.name = 'new name'; > Cannot be modified because of protected
blue.bark(1);
blue.move();
