import React from 'react'

import darkflight from '../../../../common/style/images/dark-flight.png'
import darkhotel from '../../../../common/style/images/dark-hotel.png'
import car from '../../../../common/style/images/car.png'

const Place = () => {
    return (
        <div className="container">
            <div className="tours">
                <h1 className="head">NEAR PLACES</h1>
                <p className="description">Reward yourself somewhere on the weekends!</p>
            </div>
            <div className="tour-types-row">
                <div className="type type1">
                    <div className="type-icon camera white-camera"></div>
                    <p className="description-icon">Photography</p>
                </div>
                <div className="type type2">
                    <div className="type-icon family white-family"></div>
                    <p className="description-icon">Family</p>
                </div>
                <div className="type type3">
                    <div className="type-icon friends white-friends"></div>
                    <p className="description-icon">Friends</p>
                </div>
                <div className="type type4">
                    <div className="type-icon romantic white-romantic"></div>
                    <p className="description-icon">Romantic</p>
                </div>
                <div className="type type5">
                    <div className="type-icon nature white-nature"></div>
                    <p className="description-icon">Nature</p>
                </div>
                <div className="type type6">
                    <div className="type-icon luxury white-luxury"></div>
                    <p className="description-icon">Luxury</p>
                </div>
            </div>
            <div className="hotels-row">
                <div className="hotel-item">
                    <div className="hotel-photo-1 hotphoto"></div>
                    <div className="hotel-info">
                        <p className="name-hotel">Caves Beach Resort Hurghada</p>
                        <span className="rating">
                            <img src="images/rating.png" alt=""/>
                        </span>
                    </div>
                    <div className="icon-items">
                        <div className="icons-hotel">
                            <img className="icon" src={darkflight} alt=""/>
                            <span className="price">70 $</span>
                        </div>
                        <div className="icons-hotel">
                            <img className="icon" src={darkhotel} alt=""/>
                            <span className="price">120 $</span>
                        </div>
                        <div className="icons-hotel">
                            <img className="icon" src={car} alt=""/>
                            <span className="price">30 $</span>
                        </div>
                    </div>
                </div>
                <div className="hotel-item">
                    <div className="hotel-photo-2 hotphoto"></div>
                    <div className="hotel-info">
                        <p className="name-hotel">Club Tuana Fethiye</p>
                        <span className="rating">
                            <img src="images/rating.png" alt=""/>
                        </span>
                    </div>
                    <div className="icon-items">
                        <div className="icons-hotel">
                            <img className="icon" src={darkflight} alt=""/>
                            <span className="price">75 $</span>
                        </div>
                        <div className="icons-hotel">
                            <img className="icon" src={darkhotel} alt=""/>
                            <span className="price">250 $</span>
                        </div>
                        <div className="icons-hotel">
                            <img className="icon" src={car} alt=""/>
                            <span className="price">40 $</span>
                        </div>
                    </div>
                </div>
                <div className="hotel-item">
                    <div className="hotel-photo-3 hotphoto"></div>
                    <div className="hotel-info">
                        <p className="name-hotel">Tulia Zanzibar Beach Resort</p>
                        <span className="rating">
                            <img src="images/rating.png" alt=""/>
                        </span>
                    </div>
                    <div className="icon-items">
                        <div className="icons-hotel">
                            <img className="icon" src={darkflight} alt=""/>
                            <span className="price">350 $</span>
                        </div>
                        <div className="icons-hotel">
                            <img className="icon" src={darkhotel} alt=""/>
                            <span className="price">200 $</span>
                        </div>
                        <div className="icons-hotel">
                            <img className="icon" src={car} alt=""/>
                            <span className="price">35 $</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Place