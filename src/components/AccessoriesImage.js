import React from 'react';
import { Parallax } from 'react-parallax';
import shoes from '../img/shoes.jpg'

const AccessoriesImage = () => (

        <Parallax bgImage={shoes} className='image'
            strength={800}>
                <div className='content'>
                <div className="home-container">
                </div>
                    <span className='img-txt'>shoes & accessories</span>
                </div>
        </Parallax>
    )

export default AccessoriesImage;