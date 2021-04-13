import React from 'react'

import whitedots from '../../../../common/style/images/whitedots.png'
import arrowright from '../../../../common/style/images/arrowright.png'

const Category = () => {

    return (
        <div className="container">
            <div className="cat-row hide-xs">
                <h3 className="head">THESE CITIES ARE VERY POPULAR!</h3>
                <div className="category">
                    <a href="/">MONACO<img className="white-dots" src={whitedots} alt=""/></a>
                    <a href="/">LAPAS<img className="white-dots" src={whitedots} alt=""/></a>
                    <a href="/">LONDON<img className="white-dots" src={whitedots} alt=""/></a>
                    <a href="/">ROME<img className="white-dots" src={whitedots} alt=""/></a>
                    <a href="/">BERLIN<img className="white-dots" src={whitedots} alt=""/></a>
                    <a href="/">PARIS<img className="white-dots" src={whitedots} alt=""/></a>
                    <a href="/">ISTANBUL<img className="white-dots" src={whitedots} alt=""/></a>
                </div>
                <div className="photo-1"></div>
                <div className="photo-2"></div>
                <div className="photo-3"></div>
                <div className="destination">
                    <h3 className="head">GETTING TO BERLIN! <span  className="arrowright"><img src="images/arrowright.png" alt=""/></span></h3>
                </div>
            </div>
            <div className="xs-head-category hide-md hide-sm">
                <h3 className="head">THESE CITIES ARE VERY POPULAR!</h3>
                <div className="category">
                    <a href="/">MONACO<img className="white-dots" src={whitedots} alt=""/></a>
                    <a href="/">LAPAS<img className="white-dots" src={whitedots} alt=""/></a>
                    <a href="/">LONDON<img className="white-dots" src={whitedots} alt=""/></a>
                    <a href="/">ROME<img className="white-dots" src={whitedots} alt=""/></a>
                    <a href="/">BERLIN<img className="white-dots" src={whitedots} alt=""/></a>
                    <a href="/">PARIS<img className="white-dots" src={whitedots} alt=""/></a>
                    <a href="/">ISTANBUL<img className="white-dots" src={whitedots} alt=""/></a>
                </div>
            </div>
            <div className="category-photo-row hide-md hide-sm">
                <div className="photo-1"></div>
                <div className="photo-2"></div>
                <div className="photo-3"></div>
                <div className="destination">
                    <h3 className="head">GETTING TO BERLIN! <span  className="arrowright"><img src={arrowright} alt=""/></span></h3>
                </div>
            </div>
        </div>
    )
}

export default Category