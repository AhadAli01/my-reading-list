import { UI } from "./UI";
import { addBook } from "./addBook";
import { removeBook } from "./removeBook";

export const run = () => {
    // Event: Display Books
    document.addEventListener('DOMContentLoaded', UI.displayBooks);

    // Event: Add a Book
    document.querySelector('#book-form').addEventListener('submit', (e) => {
        addBook(e);
    });

    // Event: Remove a Book
    document.querySelector('#book-list').addEventListener('click', (e) => {
        removeBook(e);
    });
};