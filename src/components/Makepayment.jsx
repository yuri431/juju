import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Makepayment = () => {
  // Retrieve the 'product' from the state passed via React Router
  const { product } = useLocation().state || {};  // Ensure default is an empty object if product is undefined

  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Function to handle payment submission
  const submit = async (e) => {
    e.preventDefault();

    // Validate phone number (ensure it starts with 254)
    if (!phone.startsWith('254')) {
      setError('Phone number must start with 254');
      return;
    }

    setError(''); // Clear any previous errors
    setLoading('Please wait as we process your request...');

    try {
      const data = new FormData();
      data.append('amount', product.price);  // Assuming 'product_cost' is the amount
      data.append('phone', phone);  // User's phone number

      // Send data to the backend via POST request
      const response = await axios.post('https://teekay.pythonanywhere.com/api/mpesa_payment', data);
      
      setSuccess('Complete the payment on your end');
      setLoading('');
    } catch (error) {
      setLoading('');
      setError('Payment failed. Please try again later.');
    }
  };

  // Ensure image URL for product photos
  const image_url = 'https://teekay.pythonanywhere.com/static/images/';

  return (
    <div className="row justify-content-center">
      <div className="card shadow col-md-3">
        <img src={image_url + product.electronic_photo} alt={product.name} className="mt-4 product_img" />
      </div>
      <div className="card shadow col-md-4">
        <h1 className="text-center">Make Payment - Lipa na Mpesa</h1>

        {/* Display Product Details */}
        <h5 className="text-info mt-2">{product.name}</h5>
        <p className="text-dark">brand: {product.brand}</p>
        <b className="text-dark">Product Name: {product.name}</b>
        <p className="text-dark">specifications: {product.specifications}</p>
        <p className="text-dark">Stock Quantity: {product.stock_quantity}</p>
        <b className="text-warning">Product price: {product.price}</b>

        {/* Display loading, success, and error messages */}
        {loading && <p className="text-info">{loading}</p>}
        {success && <p className="text-success">{success}</p>}
        {error && <p className="text-danger">{error}</p>}

        {/* Form to enter phone number and submit payment */}
        <form onSubmit={submit}>
          <input
            type="number"
            placeholder="Enter your phone 254XXXXXXXXX"
            className="form-control"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
          <br />
          <button className="btn btn-dark mt-2 w-100" type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Makepayment;
