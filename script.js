const dialog = document.querySelector('dialog');
const addBtn = document.getElementById('addBtn');
const booksList = document.getElementById("booksList");
const confirmBtn = document.getElementById("confirmButton");

const newTitleField = document.getElementById("newTitle");
const newAuthorField = document.getElementById("newAuthor");
const newPagesField = document.getElementById("newPages");
const newReadField = document.getElementById("newRead");

addBtn.addEventListener('click', () => dialog.showModal());

const myLibrary = [
    {title: "jj", author: "jj", pages: "55", read: true},
    {title: "j4", author: "j5", pages: "55", read: true}
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
book.read == true ? bookRead.textContent ="Read" : bookRead.textContent = "Not read";

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
    var newRead = form.newRead.checked;

if (newTitle === '' || newAuthor === '' || newPages === ''){
    alert("Please fill in all the fields");
    return;}

    Book(`${newTitle}`,`${newAuthor}`,`${newPages}`, newRead);
    newBlock(myLibrary[myLibrary.length - 1]);
    emptyFields();
    dialog.close();}

function emptyFields()
{
    newTitleField.value = "";
    newAuthorField.value = "";
    newPagesField.value = "";
    newReadField.checked = false;
}


