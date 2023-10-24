import React from 'react';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AddProduct from './pages/AddProduct';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/add-products">Add Product</Link></li>
      </ul>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/add-products' element={<AddProduct />} />
      </Routes>
    </>);
}

export default App;
