import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// Pages
import Home from './pages/Home';



import Skills from './Pages/Skills';
import Mentors from './Pages/Mentors';
import Communities from './Pages/Communities';
import AuthPage from './Pages/AuthPage';




import ProfilePage from './Pages/ProfilePage';
import AdminPage from './Pages/AdminPage';
import AdminLoginPage from './Pages/AdminLogin';
import WebDevelopmentCourse from './Courses/WebDevelopment';

import './index.css';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/webdevelopment" element={<WebDevelopmentCourse/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;