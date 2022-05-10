import React, { useState } from 'react';

function ItemForm() {

    const [formData, setFormData] = useState({category: "Tops", name: "", image: "", brand: "", color: "#ffffff", price: "", size: "", favorite: "false"})

    function handleChange (e) {
        const name = e.target.name
        let value = e.target.value

        setFormData({
            ...formData,
            [name]: value
        })

    }

    function handleSubmit (e) {
        e.preventDefault()
        fetch ("http://localhost:3000/clothing", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(formData)
        })
        .then (r => r.json())
        .then (data => console.log(data))

        setFormData({category: "Tops", name: "", image: "", brand: "", color: "#ffffff", price: "", size: "", favorite: "false"})
    }

    return (
    <div className='main'>
        <h1>New Item</h1>
        <form className="form" id='form' onSubmit={handleSubmit}>

            <select name="category" id="category"
            value={formData.category}
            onChange={handleChange}
            >
                <option value="tops">Tops</option>
                <option value="bottoms">Bottoms</option>
                <option value="outerwear">Outerwear</option>
                <option value="accessories_shoes">Accessories & Shoes</option>
            </select>
            
            <input type="text" name="name" placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            />

            <input type="text" name="image" placeholder="Image"
            value={formData.image}
            onChange={handleChange}            
            />

            <input type="text" name="brand" placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}                      
            />

            <input type="color" name="color" placeholder="Color"
            value={formData.color}
            onChange={handleChange}    
            />

            <input type="number" name="price" placeholder="Price" step="0.01"
            value={formData.price}
            onChange={handleChange}                
            />

            <input type="text" name="size" placeholder="Size"
            value={formData.size}
            onChange={handleChange}                  
            />

            <button className="ui button" type="submit">
            Add
            </button>

        </form>
    </div>
    )
}

export default ItemForm;