// Import necessary dependencies and components
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BookList from './components/BookList';
import AddBookModal from './components/AddBookModal';

// Main App component
const App = () => {
  // State to manage the visibility of the add book modal
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);

  // Function to handle opening and closing the add book modal
  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  return (
    <Provider store={store}>
      <div>

        {/* BookList component to display the list of books */}
        <BookList />

        {/* AddBookModal component for adding a new book */}
        {isAddModalOpen && (
          <AddBookModal onClose={toggleAddModal} />
        )}
      </div>
    </Provider>
  );
};

export default App;
