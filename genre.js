// Function to display total number of books read in each genre
function displayGenreStats() {
    let genreCounts = {};
    for (let i = 0; i < books.length; i++) {
        let genre = books[i].genre;
        if (genre in genreCounts) {
            genreCounts[genre]++;
        } else {
            genreCounts[genre] = 1;
        }
    }
    console.log('Books Read by Genre:');
    for (let genre in genreCounts) {
        console.log(`${genre}: ${genreCounts[genre]}`);
    }
}

// Example usage
addBook('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 300);
addBook('1984', 'George Orwell', 'Science Fiction', 250);
addBook('Pride and Prejudice', 'Jane Austen', 'Romance', 400);

displayLastBook();
console.log('Average Pages Read:', calculateAveragePages());
displayLastThreeBooks();
displayGenreStats();