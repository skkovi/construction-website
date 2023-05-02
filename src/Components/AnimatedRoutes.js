import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import App from '../App';
import Header from './Header';
import Footer from './Footer';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<><Header /><App /><Footer /></>} />
                <Route path="/services" element={<><Header /><Services /><Footer /></>} />
                <Route path="/about" element={<><Header /><Portfolio /><Footer /></>} />
                <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;