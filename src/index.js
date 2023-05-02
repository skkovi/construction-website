import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css';
import App from './App';
import Header from './Components/Header';
import Company from './Components/Company';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<><Header /><App /></>} />
      <Route path="/company" element={<><Header /><Company /></>} />
      <Route path="/services" element={<><Header /><Services /></>} />
      <Route path="/about" element={<><Header /><Portfolio /></>} />
      <Route path="/contact" element={<><Header /><Contact /></>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
