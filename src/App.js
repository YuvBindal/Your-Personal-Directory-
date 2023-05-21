import React from 'react';
import {Navbar} from './MyComponents/Navbar'
import {Footer} from './MyComponents/Footer'
import {Listing} from './MyComponents/Listing'
import {ListedRestaurant} from './MyComponents/listedRestaurant'
import {ListedANM} from './MyComponents/listedANM'
import {ListedElectronics} from './MyComponents/listedElectronics'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"/>
        <Route path="/listing" element={<Listing/>} />
        <Route path="/listing/restaurant" element={<ListedRestaurant/>} />
        <Route path="/listing/ANM" element={<ListedANM/>} />
        <Route path="/listing/Electronics" element={<ListedElectronics/>} />

      </Routes>

      
      <Footer/>

    </BrowserRouter>
   
    </>
  );
}

export default App;
