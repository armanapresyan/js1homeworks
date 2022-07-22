/* 1. Create an Author class and a Book class.
Author should have: name, email, gender.
It should have appropriate getters and setters.
It should have a toString method.
Book should have: title, author(Author), price, quantity.
It should have appropriate getters and setters.
It should have a method: getProfit(), which calculates the profit from the book based on
the price and quantity.
It should have a toString method. */

class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get gender() {
    return this._gender;
  }

  set name(name) {
    this._name = name;
  }

  set email(email) {
    this._email = email;
  }

  set gender(gender) {
    this._gender = gender;
  }

  toString() {
    return `My name is ${this.name} , my email-${this.email} , i am ${this.gender}`;
  }
}

class Books {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }

  get title() {
    return this._title;
  }

  get price() {
    return this._price;
  }

  get quantity() {
    return this._quantity;
  }

  set title(title) {
    this._title = title;
  }

  set price(price) {
    this._price = price;
  }

  set quantity(quantity) {
    this._quantity = quantity;
  }

  getProfit() {
    return this.price * this.quantity;
  }

  toString() {
    return `this is book title - ${this.title} Author - ${this.author}  price - ${this.price}  quantity - ${this.quantity}`;
  }
}

/* 2. Create an Account class. Account should have: id, name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and
return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the
balance, if amount is less than the balance, otherwise output “Amount exceeded
balance.”
It should have a method: transferTo(anotherAccount, amount): which should subtract the
amount from the account balance and add it to the given anotherAccount and return the
updated balance, if amount is less than the balance, otherwise output “Amount
exceeded balance.”
It should have a static method: identifyAccounts(accountFirst, accountSecond) which
gets two accounts and identifies if they are the same or not comparing all fields.
It should have toString method. */

class Account {
  constructor(name, balance) {
    this._name = name;
    this._balance = balance;
  }
  #id = Math.floor(Math.random() * 1000);

  get name() {
    return this._name;
  }

  get balance() {
    return this._balance;
  }

  set name(name) {
    this._name = name;
  }

  set balance(balance) {
    this._balance = balance;
  }

  credit(amount) {
    this._balance += amount;
    return this.balance;
  }

  debit(amount) {
    if (amount > this._balance) {
      throw Error("“Amount exceeded balance");
    }
    this._balance = -amount;
    return this._balance;
  }

  transferTo(anotherAccount, amount) {
    try {
      this.debit(amount);
      anotherAccount.credit(amount);
      return this._balance;
    } catch (error) {
      throw error;
    }
  }

  static identifyAccounts(accountFirst, accountSecond) {
    if (
      accountFirst._balance === accountSecond._balance &&
      accountFirst._name === accountSecond._name &&
      accountFirst.id === accountSecond.id
    ) {
      return `both accounts are the same`;
    }
    return `accounts are not the same`;
  }

  toString() {
    return `name - ${this.name}, balance - ${this.balance}, id - ${this.id}`;
  }
}

/* 3. Write classes: Person, Student, Staff.
Person should have: firstName, lastName, gender, age.
It should have appropriate getters and setters.
It should have a method: toString().
Student is inherited from Person. It should have programs (array of strings), year, fee.
It should have appropriate getters and setters.
It should have method: passExam(program, grade). Student should contain the data
about its programs and exams. passExam will update that data, so if student passed all
the exams(grade is great or equal to 50), its year should be increased by one.
It should have a toString method.
Teacher is inherited from Person. It should have program(string), pay.
It should have appropriate getters and setters.
It should have a toString method. */

class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get gender() {
    return this._gender;
  }

  get age() {
    return this._age;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  set gender(gender) {
    this._gender = gender;
  }

  set age(age) {
    this._age = age;
  }

  toString() {
    return `I am ${this.firstName} ${this.lastName} , i am ${this.gender}  ${this.age}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, gender, age, programs, year, fee) {
    super(firstName, lastName, gender, age);

    this._programs = programs;
    this._year = year;
    this._fee = fee;
  }

  get pragrams() {
    return this._programs;
  }

  get year() {
    return this._year;
  }

  get fee() {
    return this._fee;
  }

  set pragrams(programs) {
    this._programs = programs;
  }

  set year(year) {
    this._year = year;
  }

  set fee(fee) {
    this._fee = fee;
  }

  passExam(program, grade) {
    if (grade < 50) {
      return;
    }

    const programIndex = this._programs.indexOf(program);
    this._programs.splice(programIndex, 1);

    if (!this._programs.length) {
      this._year++;
    }
  }

  toString() {
    return `My examen ${this.programs} year - ${this.year} fee - ${this.fee}`;
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, gender, age, program, pay) {
    super(firstName, lastName, gender, age);
    this._program = program;
    this._pay = pay;
  }

  get program() {
    return this._program;
  }

  get pay() {
    return this._pay;
  }

  set program(program) {
    this._program = program;
  }

  set pay(pay) {
    this._pay = pay;
  }

  toString() {
    return `I am teacher my program - ${this.program}, my pay - ${this.pay} `;
  }
}

const student = new Student(
  "Some",
  "One",
  "male",
  19,
  ["matem", "hayoc"],
  2022,
  100
);

console.log(student);
