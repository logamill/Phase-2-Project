import React from 'react';
import { Parallax } from 'react-parallax';
import uniqlo from '../img/uniqlo.webp'

const ImageThree = () => (

        <Parallax bgImage={uniqlo} className='image'
            strength={800}>
                <div className='content'>
                    <span className='img-txt'>not uniqlo</span>
                </div>
        </Parallax>
    )

export default ImageThree;