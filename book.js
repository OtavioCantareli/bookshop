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
  yesOrNo === "yes" ? (read = true) : (read = false);
  const book = new Book(title, author, pages, read);
  library.push(book);
};

const clear = () => {
  const inputs = document.querySelectorAll("#title, #author, #pages");
  inputs.forEach((input) => {
    input.value = "";
  });
};

const deleteFromLibrary = (event) => {
  const index = event.target.parentNode.dataset.index;
  library.splice(index, 1);
  updateLibrary();
};

const updateStatus = (event) => {
  const index = event.target.parentNode.dataset.index;
  library.forEach((book, ind) => {
    if (index == ind) {
      book.read = !book.read;
    }
  });
  updateLibrary();
};

const allBooks = document.getElementById("books");

const updateLibrary = () => {
  allBooks.innerHTML = "";
  library.forEach((book, index) => {
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", deleteFromLibrary);
    deleteButton.innerText = "Delete";
    const updateButton = document.createElement("button");
    updateButton.addEventListener("click", updateStatus);
    updateButton.innerText = "Update status";
    const div = document.createElement("div");
    div.setAttribute("data-index", index);
    div.innerHTML = book.info();
    div.appendChild(deleteButton);
    div.appendChild(updateButton);
    allBooks.appendChild(div);
  });
};

btn.addEventListener("click", (event) => {
  addToLibrary(event);
  clear();
  updateLibrary();
});
