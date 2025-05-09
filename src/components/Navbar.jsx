// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';

import ThemeSwitcher from './Theme';



const Navbar=({ onLogout }) =>{
  const location = useLocation();

    // 🔽 ADDED: Manage user state and navigation
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // For redirection
   
    useEffect(() => {
      const loggedInUser = JSON.parse(localStorage.getItem("user"));
      setUser(loggedInUser);
    }, []);
    // 🔼 END ADDED
     // 🔽 ADDED: Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data
    setUser(null); // Clear user state
    navigate("/signin"); // Redirect to login
  };
  // 🔼 END ADDED
 
  
  


return (
  <section className="container row">

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div></div><Link className="navbar-brand text-info" to="/">
        <img
              src="/juju.jpeg"
              alt="JUJU" 
              className="buyitlogo"
            />

          Juju 
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className={`nav-link btn btn-outline-secondary ${location.pathname === '/home' ? 'active' : ''}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link btn btn-outline-secondary ${location.pathname === '/add' ? 'active' : ''}`}
                to="/add"
              >
                Add
              </Link>
             </li>
            
            
            <li className="nav-item">
              <Link
                className={`nav-link btn btn-outline-secondary ${location.pathname === '/aboutus' ? 'active' : ''}`}
                to="/aboutus"
              >
                About
              </Link>
            </li>
              
           <div>
            {/* 🔽 ADDED: Conditional render for user info or login/signup buttons */}
            <div className="ms-auto">
              {user ? (
                <div className="navbar-nav ml-auto">
                  <span className="navbar-text me-3">
                    Logged in as: {user.username || user.email}
                  </span>
                  <button
                    className="btn btn-outline-primary ml-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="navbar-nav ml-auto">
                  <Link to="/signin" className="btn btn-outline-primary me-2">Sign In</Link>
                  <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                </div>
              )}
            </div>
            {/* 🔼 END ADDED */}
           </div>
          </ul>

      
           <div className=''><ThemeSwitcher/></div>
                        

          
        </div>
      </div>
    </nav>
        </section>
  );
};

export default Navbar