import HomePage from '@pages/HomePage/HomePage';
import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '@pages/AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
