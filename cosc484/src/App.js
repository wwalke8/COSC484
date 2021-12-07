import React from 'react';
import './App.css';
import { Grid } from "@mui/material";
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import SignInSide from './components/signin';
import SignUp from './components/signup';
import NoMatch from './components/nomatch';
import Leftbar from './components/Leftbar';
import Titlebar from './components/Titlebar'
import { AuthStatus } from './auth/authStatus';

export default function App() {
  return (
    <div className="App">
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid item xs={3} md={3} lg={3}>
          <Leftbar />
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <Titlebar />
        </Grid>
        <Grid item xs={3} md={3} lg={3}>
          <AuthStatus />
        </Grid>
      
      <Routes>       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/register" element={<SignUp />} /> 
        <Route path="*" element={<NoMatch />} />
      </Routes>
      </Grid>
    </div>
  );
};
