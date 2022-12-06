import React from 'react'
import './App.css'

import { HeaderNav, Footer } from './layouts';
import { Home } from './pages/home';

function App() {
  return (
    <>
      <HeaderNav />
      <Home />
      <Footer />
    </>
  );
}

export default App;