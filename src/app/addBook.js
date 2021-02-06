import {Book} from "./utils/Book";
import {UI} from "./UI";
import {Store} from "./utils/Store";

export function addBook(e) {
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const date = document.querySelector('#date').value;

    // Validate
    if (title === '' || author === '' || pages === '' || date === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
        // Instantiate book
        const book = new Book(title, author, pages, date);

        // Add Book to UI
        UI.addBookToList(book);

        // Add book to LocalStorage
        Store.addBook(book);

        // Show success message
        UI.showAlert('Book Added', 'success');

        // Clear fields
        UI.clearFields();
    }
}