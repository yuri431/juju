import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from 'react-router-dom';

const Getproducts = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState('');

  // Load cart items from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  });

  // Sync cartItems to localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const getProducts = async () => {
    setLoading("Please wait ...");
    setError("");

    try {
      const response = await axios.get("https://teekay.pythonanywhere.com/api/get_electronics");
      setProducts(response.data);
    } catch (err) {
      setError("Failed to fetch products. Please try again later.");
    } finally {
      setLoading("");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const image_url = "https://teekay.pythonanywhere.com/static/images/";

  const filteredProducts = products.filter(product => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      (product.name && product.name.toLowerCase().includes(lowerSearch)) ||
      (product.specifications && product.specifications.toLowerCase().includes(lowerSearch)) ||
      (product.brand && product.brand.toLowerCase().includes(lowerSearch))
    );
  });

  // Function to add item to cart
  const addToCart = (product) => {
    const uniqueItem = {
      ...product,
      quantity: 1,
      unique_id: `${product.product_id}-${Date.now()}-${Math.random()}`
    };

    const updatedCart = [...cartItems, uniqueItem];
    setCartItems(updatedCart);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-info">Available Products</h1>
      <p className="text-center text-info">{loading}</p>
      <p className="text-center text-danger">{error}</p>

      {/* Search input */}
      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          placeholder="Search products ..."
          className="w-full border p-2 rounded"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Cart button */}
      <div className="cart-button mb-3 text-end pe-4">
        <button className="btn btn-muted" onClick={() => navigate("/cart")}>
          <img src="/cart.jpg" alt="cart" className="cartlogo" />
        </button>
      </div>

      <div className="row mt-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-danger">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div className="col-md-3 justify-content-center mb-4" key={product.product_id}>
              <div className="card shadow p-2">
                <img
                  src={image_url + product.electronic_photo}
                  alt={product.name}
                  className="mt-4 product_img"
                />
                <div className="card-body">
                  <h5 className="text-info mt-2">{product.name}</h5>
                  <p className="text-dark">Brand: {product.brand}</p>
                  <p className="text-dark">Specifications: {product.specifications}</p>
                  <p className="text-dark">Stock Quantity: {product.stock_quantity}</p>
                  <b className="text-dark">Product Price: Ksh {product.price}</b>

                  <div className="row mt-3">
                    <div className="col-6">
                      <button
                        className="btn btn-dark w-100"
                        onClick={() => navigate("/makepayment", { state: { product } })}
                      >
                        Purchase Now
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn btn-outline-primary w-100"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Getproducts;
