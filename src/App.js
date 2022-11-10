import './App.css';
import Navigation from './Navigation';
import { Navbar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image';
import IMAGES from './Images.js'
import InfiniteScroll from 'react-infinite-scroll-component';


function App() {

  useEffect(() => {
    //fetchImages();
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Navigation />

      <div className='gallery'>
        {IMAGES && IMAGES.map((image) => 
        <div key={image.id}>
          <Image source={image.image}/>
        </div> )}
      </div>
    </div>
  );
}

export default App;
