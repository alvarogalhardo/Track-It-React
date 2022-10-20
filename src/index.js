import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TokenProvider from './contexts/TokenContext';
import UserProvider from './contexts/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <TokenProvider>
    <App />
    </TokenProvider>
    </UserProvider>
  </React.StrictMode>
);
