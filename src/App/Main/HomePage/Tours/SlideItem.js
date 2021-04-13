import React from 'react'

import darkflight from '../../../../common/style/images/dark-flight.png'
import darkhotel from '../../../../common/style/images/dark-hotel.png'
import car from '../../../../common/style/images/car.png'

const SlideItem = ({
        photo,
        description,
        priceflight,
        pricehotel,
        pricecar,
}) => {
    return (
        <div className="tours-item">
            <div className="photo"
                style={{
                    backgroundImage: `url(${photo})`,
                }}
            >
            </div>
            <h3 className="tour-title">{description}</h3>
            <div className="icon-items">
                <div className="icons">
                    <img className="icon" src={darkflight} alt=""/>
                    <span className="price">{priceflight} $</span>
                </div>
                <div className="icons">
                    <img className="icon" src={darkhotel} alt=""/>
                    <span className="price">{pricehotel} $</span>
                </div>
                <div className="icons">
                    <img className="icon" src={car} alt=""/>
                    <span className="price">{pricecar} $</span>
                </div>
            </div>
        </div>
    )
}
        
export default SlideItem