import React from 'react'
import {Route} from 'react-router'

import HomePage from './HomePage/HomePage'
import FlightsPage from './FlightsPage/FlightsPage'
import FlightItem from './FlightsPage/FlightItem'

const Main = () => {
    return (
        <>
            <main className="main">
                <>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/Flights" component={FlightsPage}/>
                    <Route path="/flightitem/:id" component={FlightItem}/>
                </>
            </main>
        </>
    )
}

export default Main