import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'




const ProductList = (props) => {
    const {removeFromDom} = props;


    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8001/api/products/'+productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
        
    }

    return (
        <>
            <ul>
                {props.products.map( (product, i) => {
                return <li>
                            <Link to={`/products/${product._id}`} key={i}>{product.title}</Link>
                            <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                        </li>
                } ) }
            </ul>
        </>
        
    )
}

export default ProductList