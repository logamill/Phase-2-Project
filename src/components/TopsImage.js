import React from 'react';
import { Parallax } from 'react-parallax';
import soda from '../img/soda.jpg'

const TopsImage = () => (

        <Parallax bgImage={soda} className='image'
            strength={800}>
                <div className='content'>
                <div className="home-container">
                </div>
                    <span className='img-txt'>tops</span>
                </div>
        </Parallax>
    )

export default TopsImage;