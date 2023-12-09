// bookReducer.js
import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from '../actions/actionTypes';

const initialState = {
  books: [
    {
      id: '1',
      name: 'The Enchanted Garden',
      price: 20,
      category: 'Fantasy',
      description: 'A magical journey through an enchanted garden.',
    },
    {
      id: '2',
      name: 'Echoes of Eternity',
      price: 25,
      category: 'Science Fiction',
      description: 'A thrilling tale of time travel and eternal echoes.',
    },
    {
      id: '3',
      name: 'Whispers in the Shadows',
      price: 18,
      category: 'Mystery',
      description: 'Intriguing mysteries unfold in the shadows of a small town.',
    },
    {
      id: '4',
      name: 'The Art of Serenity',
      price: 30,
      category: 'Self-Help',
      description: 'Discover the art of finding peace and serenity in life.',
    },
    {
      id: '5',
      name: 'Beyond the Horizon',
      price: 22,
      category: 'Mystery',
      description: 'Embark on a thrilling adventure beyond the horizon.',
    },
    // Add more books as needed
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload.book],
      };
    case EDIT_BOOK:
      const updatedBooks = state.books.map((book) =>
        book.id === action.payload.book.id ? action.payload.book : book
      );

      return {
        ...state,
        books: updatedBooks,
      };
    case DELETE_BOOK:
      const filteredBooks = state.books.filter((book) => book.id !== action.payload.bookId);
      return {
        ...state,
        books: filteredBooks,
      };
    // Add other cases for different actions if needed
    default:
      return state;
  }
};

export default bookReducer;
