class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
      return `${this.title} by ${this.author} is ${this.pages} pages long, ${
        this.read ? "already read." : "not read yet."
      }`;
    };
  }
}

const library = [];

const btn = document.getElementById("btn");

const addToLibrary = (event) => {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read;
  let yesOrNo = document.querySelector('input[name="readit"]:checked').value;
  if (yesOrNo === "yes") {
    read = true;
  } else {
    read = false;
  }
  const book = new Book(title, author, pages, read);
  library.push(book);
};

const clear = () => {
  const inputs = document.querySelectorAll("#title, #author, #pages");
  inputs.forEach((input) => {
    input.value = "";
  });
};

const allBooks = document.getElementById("books");
const updateLibrary = () => {
  allBooks.innerHTML = "";
  library.forEach((book) => {
    const div = document.createElement("div");
    div.innerHTML = book.info();
    allBooks.appendChild(div);
  });
};

btn.addEventListener("click", (event) => {
  addToLibrary(event);
  clear();
  updateLibrary();
});

updateLibrary();
