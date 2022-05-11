import React from 'react';
import { Parallax } from 'react-parallax';
import shibuya from '../img/shibuya.jpeg'

const BANNER_STYLE = {
    display: 'ms-flexbox',
    marginTop: '50px',
    color: 'white',
    fontSize: '90px',
    marginBottom: '50px',
    border: '3px',
    fontStyle: 'courier',
    textShadow: '-1px 0 black, 0 1px black, 2px 0 black, 0 -1px black',
}

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