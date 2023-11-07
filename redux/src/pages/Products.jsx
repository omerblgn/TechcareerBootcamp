import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

function Products() {
    const favorites = useSelector(state => state);
    let dispatch = useDispatch();

    const [products, setproducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products")
            .then(res => {
                setproducts(res.data);
                setLoading(false)
            })
    }, [])

    const add = (product) => {
        if (!favorites.find(favorite => favorite == product.name)) {
            dispatch({
                type: "ADD",
                product
            });
        }
    }

    return (
        <>
            <h1>Products</h1>

            {loading ? <h2>Loading...</h2> :
                <ol>{
                    products.map(product =>
                        <li key={product.id}>
                            {product.name}{' '}
                            {favorites.find(favorite => favorite == product.name)
                                ? <></>
                                : <button onClick={() => add(product)}>ADD</button>}

                        </li>
                    )
                }</ol>
            }
        </>
    )
}

export default Products