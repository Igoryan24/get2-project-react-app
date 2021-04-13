import React from 'react'

import Swiper from './SwiperSlide'

const Tours = () => {
    return (
        <div className="container">
            <div className="tours">
                <h1 className="head">TOURS</h1>
                <p className="description">Travel packages for every budget. Which one is yours?</p>
            </div>
            <div className="tours-row">
                <Swiper/>
            </div>
            <div className="btn">
                <button className="see-all">SEE ALL TOURS</button>
            </div>
        </div>
    )
}

export default Tours