// Variable Access: public allows to read, access and rewrite. readonly allows to read and access only

export class MyDate {
  year: number;
  public month: number;
  readonly day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }
  add(amount: number, type: 'days' | 'month' | 'years') {
    if (type === 'days') {
      // this.day += amount; > Error because of readonly
    }
    if (type === 'month') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1998, 3, 21);
console.log(myDate.day);
console.log(myDate.day);
