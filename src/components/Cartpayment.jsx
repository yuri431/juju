import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Cartpayment = () => {
  const { products = [], totalCost = 0 } = useLocation().state || {};
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!phone.startsWith("254")) {
      setError("Phone number must start with 254");
      return;
    }

    setError('');
    setLoading("Please wait as we process your request");

    try {
      const data = new FormData();
      data.append("amount", totalCost);
      data.append("phone", phone);

      const response = await axios.post(
        "https://teekay.pythonanywhere.com/api/mpesa_payment",
        data
      );

      setSuccess("Complete the payment on your phone.");
      setLoading('');
    } catch (error) {
      setLoading('');
      setError(error.message);
    }
  };

  const image_url = "https://teekay.pythonanywhere.com/static/images/";

  return (
    <div className='row justify-content-center'>
      {products.map((product, index) => (
        <div key={index} className='card shadow col-md-3 m-2'>
          <img src={image_url + product.electronic_photo} alt="" className="mt-4 product_img" />
          <div className="card-body">
            <h5 className="text-info">{product.product_name}</h5>
            <p>Qty: {product.quantity}</p>
            <p>Subtotal: Ksh {(product.product_cost * product.quantity).toFixed(2)}</p>
          </div>
        </div>
      ))}

      <div className='card shadow col-md-4 m-2 p-3'>
        <h1 className='text-center'>Make payment - Lipa na Mpesa</h1>
        <h5 className="text-warning mt-2">Total Cost: Ksh {totalCost.toFixed(2)}</h5>

        {loading && <p className='text-info'>{loading}</p>}
        <h6 className='text-success'>{success}</h6>
        <h6 className='text-danger'>{error}</h6>

        <form onSubmit={submit}>
          <input
            type="number"
            placeholder='Enter your phone 254XXXXXXXXX'
            className='form-control'
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button className='btn btn-dark mt-2 w-100'>Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Cartpayment;