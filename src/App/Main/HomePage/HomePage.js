import React from 'react'

import Tours from './Tours/Tours'
import Category from './Category/Category'
import Place from './Place/Place'

const HomePage = () => {
    return (
        <>
            <section className="section-tours">
                <Tours/>
            </section>
            <section className="section-cat">
                <Category/>
            </section>
            <section className="near-places">
                <Place/>
            </section>
        </>
    )
}

export default HomePage