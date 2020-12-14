const bookProtos = {
  getDetails() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  },
};

const book1 = Object.create(bookProtos);
console.log(book1);
book1.title = 'Book 1';
book1.author = 'John Doe';
book1.year = 2016;
console.log(book1);
