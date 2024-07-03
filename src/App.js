import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head from './head';
import Banner from './component/banner';
import About from './component/about';
import Categories from './component/categories';
import Product from './component/product';
import Offer from './component/offer';
import Footer from './footer';

function App() {
  return (
    <Router>
      <div>
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/product" element={<Product />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Offer />
      <Categories />
    </div>
  );
}

export default App;
