import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import OrderCustomization from './components/OrderCustomization';
import ShoppingCart from './components/ShoppingCart';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import FeedbackForm from './components/FeedbackForm';
import './styles/index.css';  

function App() {
  return (
    <Router>
      <div>
        {/* Header Component */}
        <Header />
        
        {/* Main Content */}
        <div className="main-content">
          <Routes>
            {/* Routes for all pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/order-customization" element={<OrderCustomization />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<FeedbackForm />} />
          </Routes>
        </div>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
