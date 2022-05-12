import React from 'react';
import { Parallax } from 'react-parallax';
import outerwear from '../img/newouter.jpg'

const OuterwearImage = () => (

        <Parallax bgImage={outerwear} className='image'
            strength={800}>
                <div className='content-outer'>
                <div className="home-container">
                </div>
                    <span className='img-txt'>outerwear</span>
                </div>
        </Parallax>
    )

export default OuterwearImage;