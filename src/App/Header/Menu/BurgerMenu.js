import React from 'react'


import './BurgerMenu.scss'
import Contacts from './Contacts'
import LinksMenu from './LinksMenu'

const BurgerMenu = ({
    active,
    //setActive
}) => {
    return (
        <nav className={active ? 'menu navigation active-menu' : 'menu navigation'}>
            <div className="contacts-xs hide-md hide-sm">
                <Contacts/>
            </div>
            <LinksMenu/>
        </nav>
    )
}

export default BurgerMenu