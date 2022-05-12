import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

function ItemForm({ setUpdatePage }) {
    const [formData, setFormData] = useState({category: "Tops", name: "", image: "", brand: "", color: "#ffffff", price: "", size: "", favorite: "false"})
    let history = useHistory();

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
        .then (data => setUpdatePage(data))

        console.log('hi')

        setFormData({category: "Tops", name: "", image: "", brand: "", color: "#ffffff", price: "", size: "", favorite: false})
    }

    const backgroundStyle = {backgroundImage: 'url("https://diana.divi-den.com/wp-content/uploads/2019/01/diana-noble-header-image2.jpg")',
    height:"400px", width:"100%", padding: "20px"}

    return (
    <div className='main'>
        
        <div
            className="p-5 text-center bg-image"
            style={backgroundStyle}
        >

            <div className="d-flex justify-content-center align-items-center h-100">
            
                <div className="text-white">
                
                    <h1 className='mb-3' style={{fontSize: "60px", textShadow: "3px  3px 5px #777" }}>Add New Item</h1>
            
                    <h4 className="mb-3" style={{fontSize: "30px", textShadow: "3px  3px 5px #777"}}>Bring your trend!</h4>

                </div>
            </div>

        </div>


        <form className="form" id='form' onSubmit={handleSubmit}>

        <div className="form-group row" style={{padding:"15px"}}>

            <label className="col-sm-1 col-form-label" for="name">Type</label>

            <div className="col-sm-11">

            <input className="form-control" type="text" name="name" placeholder="Hoodie"
            value={formData.name}
            onChange={handleChange}
            />
            </div>
        
        </div>

        <div className="form-group row" style={{padding:"15px"}}>
            
            <label className="col-sm-1 col-form-label" for="image">Image</label>

            <div className="col-sm-11">

            <input className="form-control" type="text" name="image" placeholder="https://www.sample.jpg"
            value={formData.image}
            onChange={handleChange}            
            />

            </div>

        </div>

        <div className="form-group row" style={{padding:"15px"}}>

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


        <div className="form-group row" style={{padding:"15px"}}>

            <label className="col-sm-1 col-form-label" for="category">Category</label>

            <div className="col-sm-3">
            
                <select className="form-control"
                    name="category" id="category"
                    value={formData.category}
                    onChange={handleChange}
                    >
                        <option value="Tops">Tops</option>
                        <option value="Bottoms">Bottoms</option>
                        <option value="Outerwear">Outerwear</option>
                        <option value="Accessories & Shoes">Accessories & Shoes</option>
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

                <input className="form-control-color" type="color" name="color" placeholder="Color"
                value={formData.color}
                onChange={handleChange}    
                />

            </div>

        </div>

            <button type="submit" className="btn btn-outline-dark">Add</button>
            
        </form>


    </div>
    )
}

export default ItemForm;