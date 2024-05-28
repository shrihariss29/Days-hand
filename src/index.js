import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Add from './Components/Add';
import Subtract from './Components/Subtract';
import Count from './Components/Count';
import Navb from './Components/Navbar';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navb />} >
        <Route index element={<Home />} />
        <Route path="add" element={<Add />} />
        <Route path="subtract" element={<Subtract />} />
        <Route path="count" element={<Count />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
