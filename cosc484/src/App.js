import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignInSide from './components/signin';
import SignUp from './components/signup';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Frequency</h1>
      
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<SignInSide />} />
        <Route path="register" element={<SignUp />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>Oops! There's nothing here.</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
