const dialog = document.querySelector('dialog');
const addBtn = document.getElementById('addBtn');
const booksList = document.getElementById("booksList");

addBtn.addEventListener('click', () => dialog.showModal());

const myLibrary = [
    {title: "jj", author: "jj", pages: "55", read: "read"},
    {title: "j4", author: "j5", pages: "55", read: "read"}
];

function Book(title,author,pages,read)
{
 this.title = title;
 this.author = author;
 this.pages = pages
 this.read = read;
 myLibrary.push(this);
}

function newBlock(book) 
{
const bookBlock = document.createElement("div");
const bookTitle = document.createElement("h2");
const bookAuthor = document.createElement("h6");
const bookPages = document.createElement("p");
const bookRead = document.createElement("button");

bookTitle.textContent = book.title;
bookAuthor.textContent = book.author;
bookPages.textContent = book.pages;
bookRead.textContent = book.read;

bookBlock.classList.add("bookblock");
bookTitle.classList.add("booktitle");
bookAuthor.classList.add("bookauthor");
bookPages.classList.add("bookpages");
bookRead.classList.add("bookread");

booksList.appendChild(bookBlock);
bookBlock.appendChild(bookTitle);
bookBlock.appendChild(bookAuthor);
bookBlock.appendChild(bookPages);
bookBlock.appendChild(bookRead);
}

function addBook (form) {
    var newTitle = form.newTitle.value;
    var newAuthor = form.newAuthor.value;
    var newPages = form.newPages.value;
    Book(`${newTitle}`,`${newAuthor}`,`${newPages}`, `not read`);
    newBlock(myLibrary[myLibrary.length - 1])
}