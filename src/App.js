import React from 'react';
import './App.css';
import LoginPage from './LoginPage/LoginPage.js';
import Header from './Header/Header.js';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/menu" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
