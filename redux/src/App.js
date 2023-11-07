import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Favorites from './pages/Favorites'
import { useSelector } from 'react-redux';

function App() {
  const favorites = useSelector(state => state);
  
  return (
    <>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none' }}>
        <li><Link to='/'>PRODUCTS</Link></li>
        <li><Link to='/favorites'>FAVORITES ({favorites.length})</Link></li>
      </ul>

      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App