import React from 'react'
import {Link} from 'react-router-dom'

import dots from '../../../common/style/images/dots.png'
import './BurgerMenu.scss'

const LinksMenu = () => {
    return(
        <>
            <Link to="/">HOME<img className="dots" src={dots} alt=""/></Link>
            <Link to="/Flights">FLIGHTS<img className="dots" src={dots} alt=""/></Link>
            <Link to="/">HOTELS<img className="dots" src={dots} alt=""/></Link>
            <Link to="/">CAR HIRE<img className="dots" src={dots} alt=""/></Link>
        </>
    )
}

export default LinksMenu