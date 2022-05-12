import React from 'react';
import { Parallax } from 'react-parallax';
import allimage from '../img/all.jpg'

const AllImage = () => (

        <Parallax bgImage={allimage} className='image'
            strength={800}>
                <div className='content'>
                <div className="home-container">
                </div>
                    <span className='img-txt'>all</span>
                </div>
        </Parallax>
    )

export default AllImage;