import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductsPage() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, [])

  const loadProducts = () => {
    axios.get("https://northwind.vercel.app/api/products")
      .then(res => setproducts(res.data));
  }

  const deleteProduct = (id) => {
    axios.delete(`https://northwind.vercel.app/api/products/${id}`)
      .then(res => loadProducts());
  }

  return (
    <>
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            products && products.map(item => {
              <tr style={{ backgroundColor: item.unitsInStock == 0 ? 'red' : 'transparent' }}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.unitPrice}</td>
                <td>{item.unitsInStock}</td>
                <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default ProductsPage