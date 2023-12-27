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
   
];

function Book(title,author,pages,read)
{
 this.title = title;
 this.author = author;
 this.pages = pages
 this.read = read;
 myLibrary.push(this);
}

Book.prototype.toggleRead = function() {this.read = !this.read;}
Book.prototype.deleteBook = function () {
    bookIndex = myLibrary.findIndex( (book)=> this.title == book.title )
    myLibrary.splice(bookIndex, 1)
}

function newBlock(book) 
{
const bookBlock = document.createElement("div");
const bookTitle = document.createElement("h2");
const bookAuthor = document.createElement("h6");
const bookPages = document.createElement("p");
const bookRead = document.createElement("button");
const bookRemove = document.createElement("button");

bookTitle.textContent = book.title;
bookAuthor.textContent = `by ${book.author}`;
bookPages.textContent = `${book.pages} pages`;
book.read == true ? bookRead.textContent ="Read" : bookRead.textContent = "Not read";
bookRemove.textContent = "Remove";

bookBlock.classList.add("bookblock");
bookTitle.classList.add("booktitle");
bookAuthor.classList.add("bookauthor");
bookPages.classList.add("bookpages");
bookRead.classList.add("bookread");
bookRemove.classList.add("bookremove")

booksList.appendChild(bookBlock);
bookBlock.appendChild(bookTitle);
bookBlock.appendChild(bookAuthor);
bookBlock.appendChild(bookPages);
bookBlock.appendChild(bookRead);
bookBlock.appendChild(bookRemove);

bookRead.textContent == "Not read" ? bookRead.style.background = "yellow"
: bookRead.style.background = "green";

const bookReadButtons = document.querySelectorAll('.bookread');
bookReadButtons.forEach(button => {
    button.addEventListener('click', changeRead);
});

const bookRemoveButton = document.querySelectorAll('.bookremove');
bookRemoveButton.forEach(button => {button.addEventListener('click', removeButton)});
}

function addBook (form) {
    var newTitle = form.newTitle.value;
    var newAuthor = form.newAuthor.value;
    var newPages = form.newPages.value;
    var newRead = form.newRead.checked;

if (newTitle === '' || newAuthor === '' || newPages === ''){
    alert("Please fill in all the fields");
    return;}

    new Book(`${newTitle}`,`${newAuthor}`,`${newPages}`, newRead);
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

// When the read or not read button is pressed, change the value to the opposite 
function changeRead(event){
    const clickedButton = event.target;
    const correspondingTitle = clickedButton.parentElement.querySelector('h2');
    const bookTitle = correspondingTitle.textContent;
    const correspondingBook = myLibrary.find( (book) => book.title == bookTitle );
    correspondingBook.toggleRead();
    correspondingBook.read == true ? clickedButton.textContent ="Read" 
    : clickedButton.textContent = "Not read";

    clickedButton.textContent == "Not read" ? clickedButton.style.background = "yellow"
    : clickedButton.style.background = "green";
}

// When remove button is pressed, remove corresponding book from array and delete html block
function removeButton(event){
 const clickedButton = event.target;
 const correspondingTitle = clickedButton.parentElement.querySelector('h2');
 const bookTitle = correspondingTitle.textContent;
 const correspondingBook = myLibrary.find((book) => book.title == bookTitle );
 correspondingBook.deleteBook();

 const bookBlock = correspondingTitle.parentNode;
 bookBlock.remove();
}

// Add original 2 books on page
newBlock(new Book("1984", "George Orwell", "376", true));
newBlock(new Book("Atlas Shrugged", "Ayn Rand", "1168", false));