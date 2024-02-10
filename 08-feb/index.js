// Book object constructor
function Book(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = false; // Newly added books are available by default
}


let library = [];

// Function to add a new book to the library
function addBook(id, title, author) {
    const newBook = new Book(id, title, author);
    library.push(newBook);
}

// Function to borrow a book
function borrowBook(id) {
    const book = library.find(book => book.id === id);
    if (book) {
        if (book.isBorrowed) {
            console.log("Sorry, this book is already borrowed.");
        } else {
            book.isBorrowed = true;
            console.log(`You have successfully borrowed the book "${book.title}" by ${book.author}.`);
        }
    } else {
        console.log("Book not found.");
    }
}

// Function to return a borrowed book
function returnBook(id) {
    const book = library.find(book => book.id === id);
    if (book) {
        if (book.isBorrowed) {
            book.isBorrowed = false;
            console.log(`You have successfully returned the book "${book.title}" by ${book.author}.`);
        } else {
            console.log("This book is not currently borrowed.");
        }
    } else {
        console.log("Book not found.");
    }
}

// Function to list available books
function listAvailableBooks() {
    console.log("Available Books:");
    for(book of library){
           if(!book.isBorrowed){
            console.log(`- "${book.title}" by ${book.author}`);

           }
    }
}

// Function to search for a book by its title
function searchBook(title) {
    const book = library.find(book => book.title.toLowerCase() === title.toLowerCase());
    return book ? book : null;
}

// Random books added
addBook(1, "The Great Gatsby", "F. Scott Fitzgerald");
addBook(2, "To Kill a Mockingbird", "Harper Lee");
addBook(3, "1984", "George Orwell");
addBook(4, "Pride and Prejudice", "Jane Austen");
addBook(5, "The Catcher in the Rye", "J.D. Salinger");
addBook(6, "To the Lighthouse", "Virginia Woolf");

borrowBook(3);
listAvailableBooks();

returnBook(3);
listAvailableBooks();

const searchedBook = searchBook("To Kill a Mockingbird");
console.log(searchedBook);