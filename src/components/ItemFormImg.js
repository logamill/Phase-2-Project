import React from 'react';
import { Parallax } from 'react-parallax';
import form from '../img/itemform.jpg'

const ItemFormImg = () => (

        <Parallax bgImage={form} className='image'
            strength={800}>
                <div className='content'>
                <div className="home-container">
                </div>
                    <span className='img-txt'>bring your trend</span>
                </div>
        </Parallax>
    )

export default ItemFormImg;