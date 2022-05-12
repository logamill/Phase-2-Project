import React from 'react';
import { Parallax } from 'react-parallax';
import bottoms from '../img/bottoms.jpg'

const BottomsImage = () => (

        <Parallax bgImage={bottoms} className='image'
            strength={800}>
                <div className='content'>
                <div className="home-container">
                </div>
                    <span className='img-txt'>bottoms</span>
                </div>
        </Parallax>
    )

export default BottomsImage;