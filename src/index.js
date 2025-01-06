import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
import { Provider } from 'react-redux'; // Import Provider from react-redux
import App from './App'; // Your main App component
import store from './redux/store'; // Import your store

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Wrap App in Provider to make the Redux store accessible
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap App in Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
