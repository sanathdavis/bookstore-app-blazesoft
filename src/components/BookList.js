// BookList.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../actions/bookActions";
import Book from "./Book";
import AddBookModal from "./AddBookModal";
import "../styles/BookList.css";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleDelete = (bookId) => {
    // Show a confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (isConfirmed) {
      // Dispatch the delete action if confirmed
      dispatch(deleteBook(bookId));
    }
  };

  const handleAddButtonClick = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <div>
      <div className="bookstore-app-container">
        <h2>Bookstore App</h2>
        <h3>Book List</h3>
      </div>
      {books.length === 0 ? (
        <div className="no-books-container">
          <p className="no-books">No books available</p>
        </div>
      ) : (
        <ul className="book-list">
          {books.map((book) => (
            <li key={book.name} className="book-item">
              <Book book={book} onDelete={() => handleDelete(book.id)} />
            </li>
          ))}
        </ul>
      )}
      <div className="add-button-container">
        <button className="add-button" onClick={handleAddButtonClick}>
          +
        </button>
      </div>
      {isAddModalOpen && (
        <AddBookModal key="add-modal" onClose={handleCloseAddModal} />
      )}
    </div>
  );
};

export default BookList;
