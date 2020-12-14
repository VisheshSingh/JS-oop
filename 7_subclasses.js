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

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = this.month;
  }
}

const mag1 = new Magazine('Mag 1', 'Jane Doe', 2018, 'Feb');
console.log(mag1.getDetails());
