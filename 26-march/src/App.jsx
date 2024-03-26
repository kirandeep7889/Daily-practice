// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import DisplayPage from './pages/DisplayPage';
import UpdatePage from './pages/UpdatePage';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <h1 className="app-heading">TODO-APP</h1>
      <Router>
        <Routes>
          <Route path="/create" element={<CreatePage />} />
          <Route path="/update/:id" element={<UpdatePage />} />
          <Route path="/" element={<DisplayPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
