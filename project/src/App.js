
import React from 'react';
import './App.css';
import Start from './pages/StartPage.jsx'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/RegisterPage.jsx';
import Login from './pages/LoginPage.jsx'
import Singup from './pages/SIngupPage.jsx'
import Inspect from './components/Home/Inspect.jsx';
import Explain from './pages/ExplainPage.jsx'
import Agree from './pages/AgreePage.jsx'
import FindID from './components/Login/FindID.jsx'
import FindPassword from './components/Login/FindPassword.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="" element={<Start />} index />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/inspect" element={<Inspect />} />
        <Route path="/explain" element={<Explain />} />
        <Route path="/agree" element={<Agree />} />
        <Route path="/findID" element={<FindID />} />
        <Route path="/findPassword" element={<FindPassword />} />

      </Routes>
    </Router>
  );
}

export default App;
