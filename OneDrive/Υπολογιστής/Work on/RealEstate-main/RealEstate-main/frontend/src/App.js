import React, { useState } from "react";
import RealEstateImage from "./pexels-pixabay-221457.jpg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import AddResidenciesPage from "./AddResidenciesPage";
import ListingsPage from "./ListingsPage";

function App() {
  const [listings, setListings] = useState([]);

  const handleAddListing = (newListing) => {
    setListings([...listings, newListing]);
  };

  const handleDelete = (index) => {
    const updatedListings = listings.filter((_, idx) => idx !== index);
    setListings(updatedListings);
  };

  const handleEdit = (index, updatedListing) => {
    const updatedListings = listings.map((item, idx) =>
      idx === index ? updatedListing : item
    );
    setListings(updatedListings);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/add-residencies"
            element={<AddResidenciesPage onAddListing={handleAddListing} />}
          />
          <Route
            path="/listings"
            element={
              <ListingsPage
                listings={listings}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        RealEstate
      </Link>
      <div>
        <Link to="/login" className="login">
          Login
        </Link>
        <Link to="/signup" className="signup">
          Sign Up
        </Link>
        <Link to="/add-residencies" className="add-residencies">
          Add Residencies
        </Link>
        <button onClick={handleLogout} className="logout">
          Logout
        </button>{" "}
      </div>
    </nav>
  );
}

function handleLogout() {
  console.log("Logged out");
}

function MainContent() {
  return (
    <div className="main-content">
      <div className="description">
        <h1>Welcome to Our Real Estate Platform</h1>
        <p>Find your dream home with us. Explore listings, agents, and more.</p>
        <button>Browse Listings</button>
      </div>
      <div className="image">
        <img src={RealEstateImage} alt="Real Estate" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Made by Social Hackers - Course 23👀🤖</p>
    </footer>
  );
}

export default App;
