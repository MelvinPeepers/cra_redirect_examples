import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Test from './Component/Test';
import NotFound from './Component/404';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <h1>
          Simple Redirects
        </h1>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="about" element={<About />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
