import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import ForgotPassowrd from './pages/ForgotPassowrd.jsx';
import SignUp from './pages/SignUp.jsx';
  
  function App() {
    return (
      <div>
        
        <Header/>
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassowrd />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
        <Footer/>
      
      </div>
    );
  }
  
  export default App;