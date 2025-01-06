import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; // Use named import for redux-thunk
import rootReducer from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), // Add redux-thunk here
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools in development
});

export default store;
