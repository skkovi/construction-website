import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css';
import App from './App';
import Company from './Components/Company';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/" element={<Company />} />
    <Route path="/" element={<Services />} />
    <Route path="/" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
