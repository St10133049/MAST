// Function to display the histroy screen of the last 3 books read

function displayLastThreeBooks() {
    let count = Math.min(3, books.length);
    console.log('Last 3 Books Read:');
    for (let i = books.length - count; i < books.length; i++) {
        console.log(`Title: ${books[i].title}, Author: ${books[i].author}, Genre: ${books[i].genre}, Pages: ${books[i].pages}`);