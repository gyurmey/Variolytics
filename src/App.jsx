import styles from './App.scss';
import React, { useState, useContext, useEffect,Fragment } from "react";
import Dashboard from './components/Dashboard/Dashboard';
import LiveDashboard from './components/LiveDashboard/LiveDashboard';
import Profile from './components/Profile/Profile';

import Login from './components/Login/Login';
import { LoginContext } from './Contexts/LoginContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="App">
    <LoginContext.Provider value={{ setShowDashboard }}>
        <Router>
          <Routes>
            <Route  path="/" element={showDashboard ? <Dashboard /> : <Login />} exact />
            <Route  path="/Dashboard" element={<Dashboard />} exact />
            <Route  path="/LiveDashboard" element={<LiveDashboard />} exact />
            <Route  path="/Profile" element={<Profile />} exact />
          </Routes>
        </Router>
    </LoginContext.Provider>
    </div>
  );
}

export default App;
