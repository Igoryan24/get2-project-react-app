import React from 'react'

import Location from '../../../common/style/images/Location.png'
import timezone from '../../../common/style/images/timezone.png'
import weather from '../../../common/style/images/rain.png'
import flight from '../../../common/style/images/flight.png'
import hotel from '../../../common/style/images/hotel.png'


const Other = () => {
    return (
        <div className="other">
            <h1 className="head">Madrid flights from 22,99 €!</h1>
            <p className="description">Hurry to take advantage of the limited number of tickets!</p>
            <div className="info">
                <div className="info-item">
                    <img src={Location} alt=""/>
                    <span className="i location">Madrid, SPAIN</span>
                </div>
                <div className="info-item">
                    <img src={timezone} alt=""/>
                    <span className="i time">18:15, GMT+2</span>
                </div>
                <div className="info-item">
                    <img src={weather} alt=""/>
                    <span className="i weather">Rainy, 7°C</span>
                </div>
                <div className="info-item">
                    <img src={flight} alt=""/>
                    <span className="i flights">+315 Flights</span>
                </div>
                <div className="info-item">
                    <img src={hotel} alt=""/>
                    <span className="i hotel">+72 Hotels</span>
                </div>
            </div>
        </div>
    )
}

export default Other