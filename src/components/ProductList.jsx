import React from 'react'
import { Link } from 'react-router-dom'




const ProductList = (props) => {
    


    console.log(props.products)
    return (
        <>
            <ul>
                {props.products.map( (product, i) => {
                return <li><Link to={`/products/${product._id}`} key={i}>{product.title}</Link></li>
                } ) }
            </ul>
        </>
        
    )
}

export default ProductList