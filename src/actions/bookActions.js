// bookActions.js
import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from './actionTypes';

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: { book },
  };
};

export const editBook = (book) => {
  return {
    type: EDIT_BOOK,
    payload: { book },
  };
};

export const deleteBook = (bookId) => {
  console.log('Delete Book Action - Payload:', bookId);
  return {  
    type: DELETE_BOOK,
    payload: { bookId },
  };
};
