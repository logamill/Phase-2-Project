import React from 'react';
import { Parallax } from 'react-parallax';
import summer from '../img/summergirl.jpg'

const ImageFour = () => (

        <Parallax bgImage={summer} className='image'
            strength={800}>
                <div className='content'>
                    <span className='img-txt'>summer 2022 coming soon</span>
                </div>
        </Parallax>
    )

export default ImageFour;