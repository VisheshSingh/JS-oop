function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getDetails = function () {
  console.log(
    `${this.title} is authored by ${this.author} and year is ${this.year}`
  );
};

Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

const book1 = new Book('Book 1', 'John Doe', 2013);
const book2 = new Book('Book 2', 'Jane Doe', 2016);

book1.getDetails();
book2.getDetails();
book2.revise(2018);
book2.getDetails();
