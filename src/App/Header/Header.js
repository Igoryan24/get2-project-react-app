import React from 'react'

import Filter from './Filter/Filter'
import Menu from './Menu/Menu'
import Other from './Other/Other'

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <section className="section-top">
                    <div className="container">
                        <Menu/>
                    </div>
                </section>
                <section className="section-header">
                    <div className="container">
                        <div className="filter-row">
                            <Filter/>
                            <Other/>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header