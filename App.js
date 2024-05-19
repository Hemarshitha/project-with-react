// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Note: Changed Router to BrowserRouter
import MainPage from "./pages/MainPage";
import BookingPage from "./pages/BookingPage";
import TrainBooking from './pages/TrainBooking';
import Login from './pages/Login';
import Signin from './pages/Signin';


function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root ("/") to "/main" */}
        <Route path="/" element={<Navigate to="/main" replace />} />
        {/* Define the "/main" route */}
        <Route path="/main" element={<MainPage />} />
        {/* Define the "/booking" route */}
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/train" element={<TrainBooking />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
