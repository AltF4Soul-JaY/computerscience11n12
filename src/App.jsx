import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Class11 from './pages/Class11';
import Class12 from './pages/Class12';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class11/*" element={<Class11 />} />
        <Route path="/class12" element={<Class12 />} />
      </Routes>
    </Router>
  );
}

export default App;
