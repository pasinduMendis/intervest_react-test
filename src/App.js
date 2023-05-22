import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import React, {  } from 'react';
import MainPage from './pages/main';

function App() {
  return (
    <div className="App" style={{maxWidth:"100vw",overflowX:"hidden",background:"#F5F5F5"}}>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<Login />} />
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;