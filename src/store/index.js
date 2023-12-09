// Import necessary dependencies
import { createStore } from 'redux';
import rootReducer from '../reducers/bookReducer';

// Create the Redux store by combining reducers
const store = createStore(rootReducer);

// Log the initial state of the store for debugging purposes
console.log('Initial State:', store.getState());

// Subscribe to store updates and log the state changes for debugging
store.subscribe(() => {
  console.log('Updated State:', store.getState());
});

// Export the store for use in the application
export default store;
