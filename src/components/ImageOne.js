import React from 'react';
import { Parallax } from 'react-parallax';
import shibuya from '../img/shibuya.jpeg';
import uniqlo from '../img/uniqlo.webp'

const ImageOne = () => (

        <Parallax bgImage={uniqlo} className='image'
            strength={800}>
                <div className='content-load'>
                <div className="home-container">
                </div>
                    <span className='img-txt'>not uniqlo</span>
                </div>
        </Parallax>
    )

export default ImageOne;