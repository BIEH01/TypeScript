export class MyDate {
  constructor(
    public year: number = 2000,
    public month: number = 1,
    private _day: number = 1
  ) {}
  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }
  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
  add(amount: number, type: 'days' | 'month' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'month') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
  get day() {
    // more code
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  // get myReturn(): void {} A get must return something, it cannot be a void function
}

const myDate = new MyDate(1998, 3, 21);
console.log(myDate.printFormat());
// myDate.day = 12; > Because of get we can read but not modify it
// myDate.isLeapYear; > It can be use as normal variable when it is a method because of get
console.log(myDate.day);
console.log(myDate.isLeapYear);

const myDate2 = new MyDate(2000, 3, 21);
console.log('2000 ', myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 3, 21);
console.log('2001 ', myDate3.isLeapYear);

const myDate4 = new MyDate(2004, 3, 21);
console.log('2004 ', myDate4.isLeapYear);
