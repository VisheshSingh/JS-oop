const { notEqual } = require('assert');

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getDetails() {
    return `${this.title} is authored by ${this.author} and year is ${this.year}`;
  }
  getAge() {
    const now = new Date();
    return `${this.title} is ${now.getFullYear() - this.year} years old `;
  }
  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }
}

const book1 = new Book('Book 1', 'John Doe', 2013);
console.log(book1.getDetails());
console.log(book1.getAge());
console.log(book1.revise(2017));
console.log(book1.getDetails());
console.log(book1.getAge());
