import React from 'react';
import { Parallax } from 'react-parallax';
import dude from '../img/dude.jpg'

const ImageThree = () => (

        <Parallax bgImage={dude} className='image'
            strength={800}>
                <div className='content'>
                    <span className='img-txt'>not uniqlo</span>
                </div>
        </Parallax>
    )

export default ImageThree;