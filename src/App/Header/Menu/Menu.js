import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'

import Get2 from '../../../common/style/images/Get2.png'
import BurgerMenu from './BurgerMenu'
import './BurgerMenu.scss'
import Contacts from './Contacts'
import LinksMenu from './LinksMenu'

const Menu = () => {

    const [menuActive, setMenuActive] = useState(false)
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="header-row">
            <div className="logo">
                <img src={Get2} alt=""/>
            </div>
            <BurgerMenu
                active={menuActive}
                setActive={setMenuActive}
            />
            <nav className="menu navigation">
                <LinksMenu/>
            </nav>
            <div className="mobile-menu hide-sm hide-md"
                onClick ={()=> setMenuActive(!menuActive)}
            >
                <Hamburger toggled={isOpen} toggle={setOpen} 
                    size={20}
                    duration={0.5}
                    distance="md"
                    color="#ffffff"
                />
            </div>
            <div className="contacts hide-xs">
                <Contacts/>
            </div>
        </div>
    )
}

export default Menu