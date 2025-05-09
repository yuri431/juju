import logo from './logo.svg';  // You might not need this if you're not using the default React logo
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Makepayment from './components/Makepayment';
import React, { useState } from 'react';
// bootstrap importation
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

import Getshops from './components/Getproducts';
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import Addproduct from './components/Addproduct';
import Chatbot from './components/chatbox';
import Cart from './components/Cart';
import Cartpayment from './components/Cartpayment';
import Footer from './components/footer';


function App() {
 

  return (
    <Router>
    
      <div className="App">
     

       
        
        <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        
        <Route element={<Layout />}>
         
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cartpayment" element={<Cartpayment />} />
          <Route path="/makepayment" element={<Makepayment />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/add" element={<Addproduct />} />
          </Route>
        </Routes>
    <Chatbot/>
    <Footer/>
      </div>
    </Router>
  );
}

export default App;