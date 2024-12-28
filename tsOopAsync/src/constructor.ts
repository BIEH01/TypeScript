export class MyDate {
  constructor(
    public year: number = 2000,
    public month: number = 1,
    private day: number = 1
  ) {}
  printFormat(): string {
    const day = this.addPadding(this.day);
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
      this.day += amount;
    }
    if (type === 'month') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1998, 3, 21);
console.log(myDate.printFormat());
console.log(myDate.getDay());

const myDate2 = new MyDate();
console.log('() =>', myDate2.printFormat());

const myDate3 = new MyDate(1998);
console.log('(1998) =>', myDate3.printFormat());

const myDate4 = new MyDate(1998, 3);
console.log('(1998, 3) =>', myDate4.printFormat());
