import React from 'react';
import './App.css';
// need to have the name like variable
import About from './components/About';
import Nav from './components/Nav';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
