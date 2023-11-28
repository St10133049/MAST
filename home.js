// Define arrays to store book data and genres
let books = [];
let genres = ['Fantasy', 'Mystery', 'Science Fiction', 'Romance', 'Thriller', 'Non-fiction']; // Predefined genre list

// Function to add a book to the library
function addBook(title, author, genre, pages) {
    let book = {
        title: title,
        author: author,
        genre: genre,
        pages: pages
    };
    books.push(book);
}

// Function to calculate average pages read across all books
function calculateAveragePages() {
    let totalPages = 0;
    for (let i = 0; i < books.length; i++) {
        totalPages += books[i].pages;
    }
    return totalPages / books.length;
}

// Function to display last book details on the home screen
function displayLastBook() {
    if (books.length > 0) {
        let lastBook = books[books.length - 1];
        console.log('Last Book Read:');
        console.log(`Title: ${lastBook.title}`);
        console.log(`Author: ${lastBook.author}`);
        console.log(`Genre: ${lastBook.genre}`);
        console.log(`Pages: ${lastBook.pages}`);
    } else {
        console.log('No books in the library yet.');
    }
}

// Function to display history of last 3 books
function displayLastThreeBooks() {
    let count = Math.min(3, books.length);
    console.log('Last 3 Books Read:');
    for (let i = books.length - count; i < books.length; i++) {
        console.log(`Title: ${books[i].title}, Author: ${books[i].author}, Genre: ${books[i].genre}, Pages: ${books[i].pages}`);
    }
}