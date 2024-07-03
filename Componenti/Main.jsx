import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../Componenti/NavBar';
import Contatti from '../Componenti/Contatti';
import Home from '../Componenti/Home';
import Abaut from '../Componenti/Abaut';


function Main () {
  return (
    <>

    <Router>   
   <NavBar></NavBar>
  


   <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/about" element={<Abaut />} />
      </Routes>
    </Router>
    </>
  );
};

export default Main;