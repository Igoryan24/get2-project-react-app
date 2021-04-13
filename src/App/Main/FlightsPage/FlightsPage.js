import React from 'react'
import ArticleItem from './ArticleItem'
import flights from './flights'

import "./flightsPage.scss"


const FlightsPage = () => {
    return (
        <div className="container">
            <h1 className="flights-head">FlightsPage</h1>
            <div className="row-article">
                {
                    flights.map(({
                        id,
                        head,
                        photo,
                        image,
                        description,
                        classwindrose,
                        color,
                    }) => (
                        <ArticleItem
                            key={id}
                            id={id}
                            head={head}
                            photo={photo}
                            image={image}
                            description={description}
                            color={color}
                            classwindrose={classwindrose}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default FlightsPage