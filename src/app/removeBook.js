import {UI} from "./UI";
import {Store} from "./utils/Store";

export function removeBook(e) {
    // Remove book from UI
    UI.deleteBook(e.target);

    // Remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

    // Show success message
    UI.showAlert('Book Removed', 'success');
}