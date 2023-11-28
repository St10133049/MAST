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

// Function to display total number of books read in each genre using a for loop
function displayGenreStatsForLoop() {
    let genreCounts = {};
    for (let i = 0; i < books.length; i++) {
        let genre = books[i].genre;
        if (genre in genreCounts) {
            genreCounts[genre] += books[i].pages;
        } else {
            genreCounts[genre] = books[i].pages;
        }
    }
    console.log('Total Pages Read by Genre (For Loop):');
    for (let genre in genreCounts) {
        console.log(`${genre}: ${genreCounts[genre]}`);
    }
}

// Function to display total number of books read in each genre using a while loop
function displayGenreStatsWhileLoop() {
    let genreCounts = {};
    let i = 0;
    while (i < books.length) {
        let genre = books[i].genre;
        if (genre in genreCounts) {
            genreCounts[genre] += books[i].pages;
        } else {
            genreCounts[genre] = books[i].pages;
        }
        i++;
    }
    console.log('Total Pages Read by Genre (While Loop):');
    for (let genre in genreCounts) {
        console.log(`${genre}: ${genreCounts[genre]}`);
    }
}

// Function to display total number of books read in each genre using a for...in loop
function displayGenreStatsForInLoop() {
    let genreCounts = {};
    for (let book of books) {
        let genre = book.genre;
        if (genre in genreCounts) {
            genreCounts[genre] += book.pages;
        } else {
            genreCounts[genre] = book.pages;
        }
    }
    console.log('Total Pages Read by Genre (For...in Loop):');
    for (let genre in genreCounts) {
        console.log(`${genre}: ${genreCounts[genre]}`);
    }
}

// Examples I made use of
addBook('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 300);
addBook('1984', 'George Orwell', 'Science Fiction', 250);
addBook('Pride and Prejudice', 'Jane Austen', 'Romance', 400);
addBook('Sherlock Holmes', 'Arthur Conan Doyle', 'Mystery', 320);
addBook('The Alchemist', 'Paulo Coelho', 'Fantasy', 200);
addBook('Data Science Handbook', 'Various Authors', 'Non-fiction', 500);

// Display genre stats using different loops
displayGenreStatsForLoop();
displayGenreStatsWhileLoop();
displayGenreStatsForInLoop();
