export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello , I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  bark(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const black = new Animal('black');
black.move();
console.log(black.greeting());

const blue = new Dog('blue', 'John');
blue.move();
console.log(blue.greeting());
blue.bark(5);
console.log(blue.owner);
