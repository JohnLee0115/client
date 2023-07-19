import React, {useEffect, useState } from 'react';
import Form from '../components/Form';
import ProductList from '../components/ProductList';
import axios from 'axios'

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:8001/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [] ); 

    return (
        <div>
            <Form/>
            <hr/>
            {loaded && <ProductList products={products}/>}
        </div>
    )
}

export default Main;