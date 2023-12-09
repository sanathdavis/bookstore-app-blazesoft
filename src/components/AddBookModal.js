// AddBookModal.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../actions/bookActions";
import { v4 as uuidv4 } from "uuid";
import "../styles/AddBookModal.css";

const AddBookModal = ({ onClose }) => {
  const [bookInfo, setBookInfo] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleInputChange = (e) => {
    setBookInfo({
      ...bookInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if a book with the same name already exists
    const isBookExists = books.some((book) => book.name === bookInfo.name);

    if (isBookExists) {
      // Handle the case where a book with the same name already exists
      alert(
        "A book with the same name already exists. Please choose a different name."
      );
    } else {
      // Generate a unique identifier for the new book using uuid
      const newBook = {
        id: uuidv4(),
        name: bookInfo.name,
        price: bookInfo.price,
        category: bookInfo.category,
        description: bookInfo.description,
      };

      dispatch(addBook(newBook));
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Book</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Book Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={bookInfo.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price (CAD):</label>
            <input
              type="number"
              id="price"
              name="price"
              value={bookInfo.price}
              onChange={handleInputChange}
              step="0.01" // Allow decimal steps
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={bookInfo.category}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={bookInfo.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Add Book</button>
          </div>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddBookModal;
