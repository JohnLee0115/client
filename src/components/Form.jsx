import React, {useState} from 'react'
import axios from 'axios'



const Form = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("")

    const FormSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8001/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }


    return (
        <>
            <h1>Product Manager</h1>
            <form onSubmit={FormSubmit}>
                <div>
                    <label>Title: </label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div>
                    <label>Price: </label>
                    <input type='number' min="1" step='any' onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                <input type="submit" value="Create" />
            </form>
        </>
    )
}


export default Form