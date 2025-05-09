
import React, { useEffect, useState } from 'react'

import axios from "axios";
import Carousel from "./Carousel";
import Getproducts from './Getproducts';

const Home = () => {
   

  const [loading, setLoading] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [pageLoading, setPageLoading] = useState(true) // Preloader state
    
  // Simulate preloader effect on page load
  useEffect(() => {
      const timer = setTimeout(() => {
          setPageLoading(false)
      }, 1000) // You can adjust the delay
      return () => clearTimeout(timer)
  }, [])
{
  };
   // Show preloader if page is still loading
   if (pageLoading) {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
            <div className="position-relative">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
               
            </div>
            <span className="ms-2 text-dark">Please wait...</span>
        </div>
    )
}

  return (
    <div className="row">
      <div className="row">
        <div className="col-md-4 card shadow bg-light">
          {/* Optional Form can be here */}
        </div>
        <div className="col-md-12">
          <Carousel />
        </div>
      </div>

      {/* Loader */}
      {loading && (
        <div className="text-center my-3">
          <div className="spinner-border text-primary" role="status"></div>
          <p>{loading}</p>
        </div>
      )}

      {/* Messages */}
      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Shop Creation Form Section */}
      <div className="">
        <div className="">
          <Getproducts />
        </div>
      </div>
    </div>
  );
};

export default Home;
