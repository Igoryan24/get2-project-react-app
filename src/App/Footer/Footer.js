import React from 'react'

import Get2 from '../../common/style/images/Get2.png'
import facebook from '../../common/style/images/facebook.png'
import instagramm from '../../common/style/images/instagramm.png'
import twitter from '../../common/style/images/twitter.png'
import linkedin from '../../common/style/images/linkedin.png'
import vimeo from '../../common/style/images/vimeo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-row">
                    <img className="footer-logo" src={Get2} alt=""/>
                    <div className="links">
                        <img className="link" src={instagramm} alt=""/>
                        <img className="link" src={facebook} alt=""/>
                        <img className="link" src={twitter} alt=""/>
                        <img className="link" src={linkedin} alt=""/>
                        <img className="link" src={vimeo} alt=""/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer