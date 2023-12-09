import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editBook } from "../actions/bookActions";
import "../styles/EditBookModal.css";

const EditBookModal = ({ book, onClose }) => {
  const [bookInfo, setBookInfo] = useState({
    name: book.name,
    price: book.price,
    category: book.category,
    description: book.description,
    otherCategory: book.category === "Other" ? book.category : "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      setBookInfo((prevBookInfo) => ({
        ...prevBookInfo,
        [name]: value === "Other" ? "Other" : value,
        otherCategory: value === "Other" ? prevBookInfo.otherCategory : "",
      }));
    } else {
      setBookInfo((prevBookInfo) => ({
        ...prevBookInfo,
        [name]: value,
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // If the selected category is "Other" and otherCategory is not empty, use otherCategory
    const updatedBook = {
      ...book,
      ...bookInfo,
      category:
        bookInfo.category === "Other"
          ? bookInfo.otherCategory
          : bookInfo.category,
    };

    // Ensure that the category is set to "Other" when otherCategory is not empty
    if (
      bookInfo.otherCategory.trim() !== "" &&
      updatedBook.category !== "Other"
    ) {
      updatedBook.category = "Other";
    }

    dispatch(editBook(updatedBook));
    onClose();
  };

  useEffect(() => {
    if (book.category === "Other" && !bookInfo.otherCategory) {
      setBookInfo((prevBookInfo) => ({
        ...prevBookInfo,
        otherCategory: "", // Ensure otherCategory is always initialized
      }));
    }
  }, [book.category, bookInfo.otherCategory]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Book</h2>
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
            <select
              id="category"
              name="category"
              value={bookInfo.category}
              onChange={handleInputChange}
              required
            >
              {[
                "Fiction",
                "Non-fiction",
                "Science Fiction",
                "Mystery",
                "Self-Help",
                "Other",
              ].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          {bookInfo.category === "Other" && (
            <div className="form-group">
              <label htmlFor="otherCategory">Other Category:</label>
              <input
                type="text"
                id="otherCategory"
                name="otherCategory"
                value={
                  bookInfo.category === "Other" ? bookInfo.otherCategory : ""
                }
                onChange={handleInputChange}
                required
              />
            </div>
          )}
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
            <button type="submit">Save Changes</button>
          </div>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EditBookModal;
