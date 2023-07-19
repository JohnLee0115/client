import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

const ViewOne = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect( () => {
        axios.get('http://localhost:8001/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [] );

    return (
        <div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default ViewOne