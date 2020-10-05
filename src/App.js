import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './navigation/Router';

function App() {
  return (
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
  );
}

export default App;
