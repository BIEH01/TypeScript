export class MyDate {
  constructor(
    public year: number = 2000,
    private _month: number = 1,
    private _day: number = 1
  ) {}
  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
      this._month += amount;
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

  get month() {
    return this._month;
  }

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('Month out of range');
    }
  }
}

const myDate = new MyDate(1998, 3, 21);
console.log(myDate.printFormat());
myDate.month = 4;
console.log('run', myDate.month);
myDate.month = 78; //> It will return an Error message
console.log('It will not display', myDate.month); //> It won't be display
