const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();
books;

const book = getBook(3);
book;
// const title = book.title;
// title;
// const author = book.author;
// author;

// ini desctructuring object
const { title, author, genres, pages, publicationDate, hasMovieAdaptation } =
  book; // ini kalo object, pake nya bracket
title;
author;
pages;
publicationDate;
hasMovieAdaptation;

console.log(book.genres);

// ini destructuring array
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre] = genres;

console.log(primaryGenre, secondaryGenre);

// rest condition itu yang ...namaVariable

const [...otherGenres] = genres;

console.log(otherGenres);

// kalo mau tambahin ke dalam array

const newGenre = ["genre baru", ...otherGenres];

console.log(newGenre);

// kalo mau tambahin ke dalam object

const updatedBook = {
  ...book,
  // tambahin itu tepat dibawah all define
  moviePublication: "2001-12-09",
  // override paling belakang
  pages: 1210,
};

//template literals
const summary = `${title}, a ${pages}-page log book, was written by ${author} and published in ${publicationDate.split("-")[0]}`;
console.log(summary);

// ternary pengganti if else
const pageRange = pages > 1000 ? "Over a thousand" : "Less than a tousand";
console.log(pageRange);
const summaryNew = `${title}, a ${pages}-page log book, was written by ${author} and published in ${publicationDate.split("-")[0]}. This book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
console.log(summaryNew);

// array function
// cara tulis aslinya
// (value) => value.split("-")[0];

// bentuk arrow function setelah di masukin variable biar bisa dipanggil
// const getYear = (value) => value.split("-")[0];
// console.log(getYear(publicationDate));

// ini versi banyak line nya
const getYear = (value) => {
  return value.split("-")[0];
};

const summaryNewArrowFunction = `${title}, a ${pages}-page log book, was written by ${author} and published in ${getYear(publicationDate)}`;
console.log(summaryNewArrowFunction);

// optional chaining
function getTotalReviewCount(value) {
  const goodread = value.reviews.goodreads.reviewsCount;
  const librarything = value.reviews.librarything?.reviewsCount ?? 0; // ini yang di bilang optional itu bagian tanda tanya nya, jadi kalo ga ada ya ga eror
  return goodread + librarything;
}

console.log(getTotalReviewCount(book));

// array map method

const x = [1, 2, 3, 4, 5].map((element) => element * 2);
console.log(x);

const titles = books.map((book) => book.title);
console.log(titles);

// bisa arrow function gini :
const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});

// atau gini :

const essentialData2 = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

console.log(essentialData);
console.log(essentialData2);

//  filter -> dia itu buat filter array based on condition (jadi ada kondisinya)
// misal kita mau filter array yang page nya lebih dari 500 halaman

const longbook = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longbook);

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);

console.log(adventureBooks);

// reduce methods
const pagesAllBooks = books.reduce(
  (accumulator, book) => accumulator + book.pages,
  0 /*karna dimulai dari array ke-0*/,
);
console.log(pagesAllBooks); // btw book disini bisa diganti lainnya, ga harus bok, value bisa atau nama variable bebas apapun

// array sort method
const arr = [3, 7, 1, 9, 6];
const sortedDesc = arr.slice().sort((a, b) => b - a); // b-a berarti desc
// const sortedDesc = arr.sort((a, b) => b - a); // b-a berarti desc
console.log(sortedDesc);
console.log(arr); // ini memang mengubah, jadi bukan functional array

const sortedAsc = arr.slice().sort((a, b) => a - b); // a-b berarti asc
// const sortedAsc = arr.sort((a, b) => a - b); // a-b berarti asc
console.log(sortedAsc);
console.log(arr); // ini memang mengubah, jadi bukan functional array

// gimana caranya biar dia ga ketimpa? WebGLUniformLocation, caranya di copy dulu array aslinya. pake arr.slice().sort() // contohnya di atas yaa

// ini urutin buku berdasarkan jumlah halamannya
const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);

// immutable array
// 1. add book ke array
const newBook = {
  id: 6,
  title: "Harry Potter and The Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// 2. delete book dari array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// 3. update book dari array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book,
);
console.log(booksAfterUpdate);

// promise
// untuk ambil data dari API di browser kita bisa pake fetch api
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// console.log("Jonas"); // ini perlu setidaknya versi 18

// async / await

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);

  return data;
}

const todos = getTodos();
console.log(todos);
console.log('Jonas2');


