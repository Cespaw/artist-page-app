import './App.css';
import Navigation from './Navigation';
import { Navbar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Gallery from './Gallery';


function App() {

  useEffect(() => {
    //fetchImages();
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Navigation />

      <Gallery />
    </div>
  );
}

export default App;
