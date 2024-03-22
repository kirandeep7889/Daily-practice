// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <ToastContainer  style={{marginRight:"40%"}}/>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to My App</h1>;
}

export default App;
