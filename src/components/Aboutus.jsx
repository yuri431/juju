import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router-dom';

function ShopCreationPage() {
  return (
    
    <div className="container mt-1 p-5 pt-2  card shadow ">
      <div className="jumbotron bg-light">
        <h1 className="display-4 fw-100">Welcome to Juju Electronics !</h1>
        <p className="lead">
          This platform allows you to buy and sell your  electronic  products online and be able to connect with a wide range of potential customers.  We also allow you to discover and buy from a new variety of unique and high quality products.
        </p>
        <hr className="my-4" />
        <div className="row">
          <div className=" card shadow col-md-6 ">
            <h2>Our products.</h2>
            <p>
              With our well connected sources, you can easily buy our products and they will be delivered within hours to your door step.Our platform also gives your products global access to buy/sell products. Reach a larger customer base than ever before!  It's simple to upload product images, set prices, and manage your inventory.We have partnered with known brands such as;SAMSUNG,APPLE,SONY,CANNON,MICROSOFT, etc.
            </p>

        <Link to="/signup">  <button className='btn btn-outline-primary'>Join us</button></Link>
           
            <br />
          </div>
          <div className=" card shadow  col-md-6">
            <h2>Buy & Sell</h2>
            <p>
              Browse a diverse collection of items offering quality products ranging from mobile phones to  laptops, TVs to Washing machines and many more. Joins us now and find unique items you won't find anywhere else.  Enjoy a secure and convenient shopping experience.
            </p>
            <ul className="list-unstyled">
              <li>🛍️ Wide Selection of products</li>
              <li>🔍 Easy Search & Filtering</li>
              <li>💳 Secure Payment Options</li>
              <li>🚚 Reliable Shipping country/worldwide</li>
            </ul>
           
           
             <br />
          </div>
        </div>
<marquee ><div className="safaricom"><img src="/mslogo.jpeg" alt="" /> <img src="/samsung.jpeg" alt=""/> <img src="/paypal.jpeg" alt=""></img> <img src="/cocacola.png" alt=""/> <img src="/safaricom.png" alt=""/><img src="/apple.jpeg" alt=""/><img src="/amazon1.png" alt=""/><img src="/sony1.png" alt=""/></div></marquee>
    
      </div>
    </div>
  );
}

export default ShopCreationPage;