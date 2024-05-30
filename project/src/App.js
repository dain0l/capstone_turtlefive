
import React from 'react';
import './App.css';
import Start from './pages/StartPage.jsx'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './pages/Home.jsx';
import Login from './pages/LoginPage.jsx'
import LogoutPage from './pages/LogoutPage.jsx';
import Singup from './pages/SignupForm.jsx'
import Explain from './pages/ExplainPage.jsx'
import Agree from './pages/AgreePage.jsx'
import FindID from './components/Login/FindID.jsx'
import FindPassword from './components/Login/FindPassword.jsx'
import SetPassword from './components/Login/SetPassword.jsx';
import Turtle from './pages/Turtle.jsx';
import ChartPage from './pages/ChartPage.jsx'
import MyPage from './pages/MyPage.jsx'
import CameraCom from './components/Examine/CameraCom.jsx';
import ChatBot from './pages/ChatBot.jsx';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Start />} index />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/explain" element={<Explain />} />
        <Route path="/agree" element={<Agree />} />
        <Route path="/findID" element={<FindID />} />
        <Route path="/findPassword" element={<FindPassword />} />
        <Route path="/setPassword" element={<SetPassword />} />
        <Route path="/webcam" element={<Turtle />} />
        <Route path="/inquiry" element={<ChartPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/cameracom" element={<CameraCom />} />
        <Route path="/chatbot" element={<ChatBot/>}/>
      </Routes>
    </Router>
  );
}

export default App;