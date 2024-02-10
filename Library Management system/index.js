// Book object constructor
function Book(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = false; // Newly added books are available by default
}

// Library array to store all book objects
let library = [];

// Function to add a new book to the library
function addBook() {
    const bookId = document.getElementById("bookId").value;
    const bookTitle = document.getElementById("bookTitle").value;
    const authorName = document.getElementById("authorName").value;

    if (!bookId || !bookTitle || !authorName) {
        alert("Please fill in all fields.");
        return;
    }

    const newBook = new Book(bookId, bookTitle, authorName);
    library.push(newBook);
    console.log(newBook);
    displayBooks();
    
    // Clear input fields after adding book
    document.getElementById("bookId").value = "";
    document.getElementById("bookTitle").value = "";
    document.getElementById("authorName").value = "";
}

// Function to display all books in the library
function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    library.forEach(book => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>ID:</strong> ${book.id} | <strong>Title:</strong> ${book.title} | <strong>Author:</strong> ${book.author}`;
        if (book.isBorrowed) {
            listItem.innerHTML += " | <button onclick='returnBook(" + book.id + ")'>Return</button>";
        } else {
            listItem.innerHTML += " | <button onclick='borrowBook(" + book.id + ")'>Borrow</button>";
        }
        bookList.appendChild(listItem);
    });
}

// Function to borrow a book
function borrowBook(id) {
    console.log("Attempting to borrow book with ID:", id); // Debugging statement
    const book = library.find(book => Number(book.id) === Number(id)); // Convert both IDs to numbers for comparison
    console.log("Book found:", book); // Debugging statement
    console.log("Library array:", library); // Debugging statement
    if (book) {
        if (book.isBorrowed) {
            alert("Sorry, this book is already borrowed.");
        } else {
            book.isBorrowed = true;
            displayBooks();
            alert(`You have successfully borrowed the book "${book.title}" by ${book.author}.`);
        }
    } else {
        alert("Book not found.");
    }
}

// Function to return a borrowed book
function returnBook(id) {
    const book = library.find(book => book.id === id);
    if (book) {
        if (book.isBorrowed) {
            book.isBorrowed = false;
            displayBooks();
            alert(`You have successfully returned the book "${book.title}" by ${book.author}.`);
        } else {
            alert("This book is not currently borrowed.");
        }
    } else {
        alert("Book not found.");
    }
}


// Function to search for a book by its title
function searchBook() {
    const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    const foundBooks = library.filter(book => book.title.toLowerCase().includes(searchTerm));
    const searchResultsList = document.getElementById("searchResults");
    
    searchResultsList.innerHTML = ""; // Clear previous search results

    if (foundBooks.length > 0) {
        foundBooks.forEach(book => {
            const listItem = document.createElement("li");
            listItem.textContent = `"${book.title}" by ${book.author}`;
            searchResultsList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement("li");
        listItem.textContent = "No books found with the given title.";
        searchResultsList.appendChild(listItem);
    }
}


// Display already present books list when page loads
window.onload = function() {
    // Assuming you have already added some books to the library
    library.push(new Book(1, "The Great Gatsby", "F. Scott Fitzgerald"));
    library.push(new Book(2, "To Kill a Mockingbird", "Harper Lee"));
    library.push(new Book(3, "1984", "George Orwell"));
    library.push(new Book(4, "Pride and Prejudice", "Jane Austen"));
    library.push(new Book(5, "The Catcher in the Rye", "J.D. Salinger"));
    library.push(new Book(6, "To the Lighthouse", "Virginia Woolf"));

    // Display the books list
    displayBooks();
    
    // Add event listener for Add Book button
    document.getElementById("addBookBtn").addEventListener("click", addBook);

    // Add event listener for Search button
    document.getElementById("searchBtn").addEventListener("click", searchBook);

    
};

