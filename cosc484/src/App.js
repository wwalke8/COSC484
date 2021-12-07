import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import SignInSide from './components/signin';
import SignUp from './components/signup';
import NoMatch from './components/nomatch';
import Leftbar from './components/Leftbar';
// import { AuthProvider } from './auth/authProvider';
// import { RequireAuth } from './auth/authStatus';


export default function App() {
  return (
    <div className="App">
      <h3>Welcome to Frequency</h3>
      <Leftbar />
      <Routes>       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/register" element={<SignUp />} /> 
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};
