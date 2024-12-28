export class MyService {
  static instance: MyService | null = null;

  private constructor(public name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('Enter once');

      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('Service 1');
const myService2 = MyService.create('service 2');
const myService3 = MyService.create('service 3');
console.log(myService1.getName()); //> return service 1
console.log(myService2.getName()); //> return service 1
console.log(myService3.getName()); //> return service 1
console.log(myService1 === myService2); //> returns true
