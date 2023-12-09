// Book.js
import React, { useState } from "react";
import EditBookModal from "./EditBookModal";

const Book = ({ book, onDelete }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div key={book.name}>
      <p>{book.name}</p>
      <p>{book.price}</p>
      <p>
        {book.category} {book.otherCategory}
      </p>
      <p>{book.description}</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={handleEditClick}>Edit</button>
      {isEditModalOpen && (
        <EditBookModal book={book} onClose={handleCloseEditModal} />
      )}
    </div>
  );
};

export default Book;
