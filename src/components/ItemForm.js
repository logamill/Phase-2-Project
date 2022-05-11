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

    const backgroundStyle = {backgroundImage: 'url("https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/Blog/20085_TCM_ClassicStyles_Header.jpg")',
    height:"400px", width:"100%", objectFit: "contain"}

    return (
    <div className='main'>
        
        <div
            class="p-5 text-center bg-image"
            style={backgroundStyle}
        >

            <div class="d-flex justify-content-center align-items-center h-100">
            
                <div class="text-white">
                
                    <h1 class='mb-3'>Add New Item</h1>
            
                    <h4 class="mb-3">Bring your trend!</h4>

                </div>
            </div>

        </div>


        <form className="form" id='form' onSubmit={handleSubmit}>

        <div className="form-group row">

            <label className="col-sm-1 col-form-label" for="name">Name</label>

            <div className="col-sm-11">

            <input className="form-control" type="text" name="name" placeholder="Hoodie"
            value={formData.name}
            onChange={handleChange}
            />
            </div>
        
        </div>

        <div className="form-group row">
            
            <label className="col-sm-1 col-form-label" for="image">Image</label>

            <div className="col-sm-11">

            <input className="form-control" type="text" name="image" placeholder="https://www.sample.jpg"
            value={formData.image}
            onChange={handleChange}            
            />

            </div>

        </div>

        <div className="form-group row">

            <label className="col-sm-1 col-form-label" for="brand">Brand</label>

            <div className="col-sm-7">

            <input className="form-control" type="text" name="brand" placeholder="Uniqlo"
            value={formData.brand}
            onChange={handleChange}                      
            />

            </div>

            <label className="col-sm-1 col-form-label" for="price">Price</label>

            <div className="col-sm-3">

            <input className="form-control" type="number" name="price" placeholder="0.00" step="0.01" min='0.00'
            value={formData.price}
            onChange={handleChange}                
            />

            </div>

        </div>


        <div className="form-group row">

            <label className="col-sm-1 col-form-label" for="category">Category</label>

            <div className="col-sm-3">
            
                <select className="form-control"
                    name="category" id="category"
                    value={formData.category}
                    onChange={handleChange}
                    >
                        <option value="tops">Tops</option>
                        <option value="bottoms">Bottoms</option>
                        <option value="outerwear">Outerwear</option>
                        <option value="accessories_shoes">Accessories & Shoes</option>
                </select>

            </div>

            <label className="col-sm-1 col-form-label" for="size">Size</label>

            <div className="col-sm-3">

                <input className="form-control" type="text" name="size" placeholder="M"
                value={formData.size}
                onChange={handleChange}                  
                />

            </div>


            <label className="col-sm-1 col-form-label" for="Color">Color</label>

            <div className="col-sm-3">

                <input class="form-control-color" type="color" name="color" placeholder="Color"
                value={formData.color}
                onChange={handleChange}    
                />

            </div>

        </div>

            <button type="submit" class="btn btn-outline-dark">Add</button>
            
        </form>


    </div>
    )
}

export default ItemForm;