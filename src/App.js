import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './navigation/Router';
import { ShoppingCartProvider } from './contexts/shoppingCart'

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Router/>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
