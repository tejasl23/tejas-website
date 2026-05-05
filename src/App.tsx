import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import Now from './Now';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/now">Now</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/now" element={<Now />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
