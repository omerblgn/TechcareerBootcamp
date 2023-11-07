import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Favorites() {
    const favorites = useSelector(state => state);
    let dispatch = useDispatch();

    const remove = (product) => {
        dispatch({
            type: "REMOVE",
            product
        });
    }

    return (
        <>
            <h1>Favorites</h1>

            <ol>{
                favorites.map(favorite =>
                    <li>
                        {favorite}{' '}
                        <button onClick={() => remove(favorite)}>REMOVE</button>
                    </li>
                )
            }</ol>
        </>
    )
}

export default Favorites