import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'normalize.css';
import './style/index.scss';
import Home from './pages/home/Home'
import Header from './layouts/header/Header';
import PropertyDetails from './pages/propertyDetails/PropertyDetails';
import Footer from './layouts/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Header />
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche_logement/:id" element={<PropertyDetails />} />
        </Routes>
        <Footer />
   </BrowserRouter>
  </React.StrictMode>
);



