import React from 'react';
import { Parallax } from 'react-parallax';
import shibuya from '../img/shibuya.jpeg'

const ImageOne = () => (

        <Parallax bgImage={shibuya} className='image'
            strength={800}>
                <div className='content'>
                <div className="home-container">
                </div>
                    <span className='img-txt'>not uniqlo</span>
                </div>
        </Parallax>
    )

export default ImageOne;