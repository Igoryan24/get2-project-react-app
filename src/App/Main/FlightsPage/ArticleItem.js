import React from 'react'

import {Link} from 'react-router-dom'

const ArticleItem = ({
    id,
    head,
    photo,
    classwindrose,
    description,
    color,
}) => {
    return (
        <>
            <div className={`article-item ${classwindrose}`}>
                <div className="photo-article"
                    style={{
                        backgroundImage: `url(${photo})`,
                    }}
                ></div>
                <div className="article-row"
                    style={{
                        backgroundColor: `${color}`
                    }}
                >   
                    <Link to={`/flightitem/${id}`} className="head-article">
                        <h3>{head}</h3>
                    </Link>
                    <p className="article">{description}</p>
                </div>
            </div>
        </>
    )
}

export default  ArticleItem