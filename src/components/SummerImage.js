import React from 'react';
import { Parallax } from 'react-parallax';
import skate from '../img/skate.jpg'

const SummerImage = () => (

        <Parallax bgImage={skate} className='image'
            strength={800}>
                <div className='content'>
                <div className="home-container">
                </div>
                    <span className='img-txt'>summer 2022 coming soon...</span>
                </div>
        </Parallax>
    )

export default SummerImage;