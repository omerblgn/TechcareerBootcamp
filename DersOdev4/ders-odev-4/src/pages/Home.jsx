import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ProductsPage from './ProductsPage'
import AddProduct from './AddProduct'

function Home() {
    return (
        <>
            <ul>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/add-products">Add Product</Link></li>
            </ul>
            <h1>HOME PAGE</h1>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/add-products" element={<AddProduct />} />
            </Routes>
        </>
    )
}

export default Home