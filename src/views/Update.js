import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState();
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8001/api/products/' + id)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        
        axios.patch('http://localhost:8001/api/products/' +id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <div>
                    <label>Title: </label>
                    <input type="text" name='title' onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div>
                    <label>Price: </label>
                    <input type='number' name='price' min="1" step='any' onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" name='description' onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                <input type="submit" value="Edit" />
            </form>
        </div>
    )
}

export default Update;