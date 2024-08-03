import React from 'react';
import './App.css';
import { Providers } from './Providers';
import { Router } from './views/Router';

function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}

export default App;
