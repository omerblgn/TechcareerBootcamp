import axios from 'axios';
import React, { useState } from 'react'

function AddProduct() {
    const [name, setname] = useState();
    const [unitPrice, setunitPrice] = useState();
    const [unitsInStock, setunitsInStock] = useState();

    const add = () => {
        let product = {
            name,
            unitPrice,
            unitsInStock
        }

        axios.post("https://northwind.vercel.app/api/products", product)
            .then(res => console.log(res.data))
    }

    return (
        <>
            <h1>Add Product</h1>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setname(e.target.value)} required />
            </div >
            <div>
                <label>Unit Price</label>
                <input type="number" value={unitPrice} onChange={(e) => setunitPrice(e.target.value)} required />
            </div >
            <div>
                <label>Units In Stock</label>
                <input type="number" value={unitsInStock} onChange={(e) => setunitsInStock(e.target.value)} required />
            </div >
            <button onClick={add}>Add</button>
        </>
    )
}

export default AddProduct