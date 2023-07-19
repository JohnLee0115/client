import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom'

const ViewOne = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const {removeFromDom} = props;
    const navigate = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:8001/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [] );

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8001/api/products/'+productId)
            .then(res => {
                console.log(res.json)
            })
            .catch(err => console.error(err));
        navigate('/')
    }



    return (
        <div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
            <br/>
            <button onClick={(e) => {deleteProduct(product._id)}} >Delete</button>
        </div>
    )
}

export default ViewOne