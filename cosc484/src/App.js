import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Typography } from "@mui/material";
import Home from './components/home';
import SignInSide from './components/signin';
import SignUp from './components/signup';
import NoMatch from './components/nomatch';
//import { AuthProvider } from './auth/authProvider';
//import { AuthStatus, RequireAuth } from './auth/authStatus';


export default function App() {
  return (
    <div className="App">
      <Typography variant="h3">Welcome to Frequency</Typography>
      <Routes>       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/register" element={<SignUp />} /> 
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};
