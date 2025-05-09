// // Cart.js
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const stored = localStorage.getItem("cartItems");
//     if (stored) {
//       const parsed = JSON.parse(stored).map((product, index) => ({
//         ...product,
//         quantity: product.quantity || 1,
//         unique_id: product.unique_id || `${product.id}-${index}-${Date.now()}`
//       }));
//       setCartItems(parsed);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const removeFromCart = (unique_id) => {
//     const updated = cartItems.filter(product => product.unique_id !== unique_id);
//     setCartItems(updated);
//   };

//   const increaseQuantity = (unique_id) => {
//     setCartItems(cartItems.map(product =>
//       product.unique_id === unique_id
//         ? { ...product, quantity: product.quantity + 1 }
//         : product
//     ));
//   };

//   const decreaseQuantity = (unique_id) => {
//     const updated = cartItems.map(product =>
//       product.unique_id === unique_id
//         ? { ...product, quantity: product.quantity - 1 }
//         : product
//     ).filter(product => product.quantity > 0);
//     setCartItems(updated);
//   };

//   const getTotal = () => {
//     return cartItems.reduce((sum, product) => sum + product.product_cost * product.quantity, 0);
//   };

//   const image_url = "https://teekay.pythonanywhere.com/static/images/";

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center text-info">Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p className="text-center text-danger">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="row">
//             {cartItems.map(product => (
//               <div key={product.unique_id} className="col-md-4 mb-4">
//                 <div className="card p-2">
//                   <img
//                     src={image_url + product.product_photo}
//                     alt={product.product_name}
//                     className="product_img"
//                   />
//                   <div className="card-body text-center">
//                     <h5>{product.product_name}</h5>
//                     <p className="text-dark">Price: Ksh {product.product_cost}</p>
//                     <div className="d-flex justify-content-center align-items-center">
//                       <button className="btn btn-sm btn-secondary" onClick={() => decreaseQuantity(product.unique_id)}>-</button>
//                       <span className="mx-2">Qty: {product.quantity}</span>
//                       <button className="btn btn-sm btn-secondary" onClick={() => increaseQuantity(product.unique_id)}>+</button>
//                     </div>
//                     <button className="btn btn-danger btn-sm mt-2" onClick={() => removeFromCart(product.unique_id)}>Remove</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-4">
//             <h4 className="text-info">Total: Ksh {getTotal().toFixed(2)}</h4>
//             <button className="btn btn-outline-success mt-2" onClick={() => navigate("/cartpayment", {
//               state: { products: cartItems, totalCost: getTotal() }
//             })}>
//               Proceed to Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  // Sync cartItems to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (unique_id) => {
    const updated = cartItems.filter((product) => product.unique_id !== unique_id);
    setCartItems(updated);
  };

  const increaseQuantity = (unique_id) => {
    setCartItems(
      cartItems.map((product) =>
        product.unique_id === unique_id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (unique_id) => {
    const updated = cartItems
      .map((product) =>
        product.unique_id === unique_id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
      .filter((product) => product.quantity > 0);
    setCartItems(updated);
  };

  const getTotal = () => {
    return cartItems.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
  };

  const image_url = "https://teekay.pythonanywhere.com/static/images/";

  return (
    <div className="container mt-4">
      <h2 className="text-center text-info">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-danger">Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((product) => (
              <div key={product.unique_id} className="col-md-4 mb-4">
                <div className="card p-2">
                  <img
                    src={image_url + product.product_photo}
                    alt={product.product_name}
                    className="product_img"
                  />
                  <div className="card-body text-center">
                    <h5>{product.product_name}</h5>
                    <p className="text-dark">Price: Ksh {product.price}</p>
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => decreaseQuantity(product.unique_id)}
                      >
                        -
                      </button>
                      <span className="mx-2">Qty: {product.quantity}</span>
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => increaseQuantity(product.unique_id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-danger btn-sm mt-2"
                      onClick={() => removeFromCart(product.unique_id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <h4 className="text-info">Total: Ksh {getTotal().toFixed(2)}</h4>
            <button
              className="btn btn-outline-success mt-2"
              onClick={() =>
                navigate("/cartpayment", {
                  state: { products: cartItems, totalCost: getTotal() },
                })
              }
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
