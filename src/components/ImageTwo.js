import React from 'react';
import { Parallax } from 'react-parallax';
import fashion from '../img/fashion.jpg'

const ImageTwo = () => (

        <Parallax bgImage={fashion} className='image'
            strength={800}>
                <div className='content'>
                    <span className='img-txt'>latest additions</span>
                </div>
        </Parallax>
    )

export default ImageTwo;