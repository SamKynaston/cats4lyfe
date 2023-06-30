//Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Styles
import './index.css';

//Pages
import Catalogue from './Catalogue';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalogue/>} />
      </Routes>
    </Router>
  )
}