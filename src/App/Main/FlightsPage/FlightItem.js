
import React, { useEffect, useState } from 'react'
import testimonials, {getTestimonialsObject} from './testimonials'
import flights, { getFlightsObject } from './flights'
import axios from 'axios'

const FlightItem = ({
    match,
    flightsObject = getFlightsObject(flights),
    testimonialsObject = getTestimonialsObject(testimonials),
}) => {
    const id = match.params.id

    useEffect(() => {
        //axios.get("https://run.mocky.io/v3/ce15446f-db3e-49fd-a7df-bc81926bd2a2")
        //axios.get("https://run.mocky.io/v3/36c7d130-f591-4e8f-bfed-e675093398da")
        axios.get(`${testimonialsObject[id].testimonial}`)
        .then(res => res.data)
        //.then(data => setTestimonials(data.testimonials))
        .then(data => setReviews(data.reviews))
    })

    const [reviews, setReviews] = useState([]);
    
    const arrTestimonials = [
        /*{name: `${testimonialsObject[id].name}`}, 
        {text: `${testimonialsObject[id].text}`}*/
    ]
    
    //console.log(arrTestimonials)
    
    const [testimonials,setTestimonials] = useState(arrTestimonials)

    const [newTestimonials,setNewTestimonials] = useState ({
        name:"",
        text:"",
    })

    const handleNameChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            name:e.target.value
        }))
    }

    const handleTextChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            text:e.target.value
        }))
    }

    const sendForm = (e) => {
        e.preventDefault();
        setTestimonials(value => {
            return [...value, newTestimonials]
        })
        setNewTestimonials({
            name:"",
            text:"",
        })
    }
    return(
        <>
        <section className="section-item">
            <div className="flighthead-row">
                    <div className="icon-head"
                        style={{
                            backgroundImage: `url(${flightsObject[id].airicon})`,
                        }}
                    ></div>
                    <div className="flights-head"> {flightsObject[id].head}</div>
                </div>
                <div
                    dangerouslySetInnerHTML={{
                        __html:flightsObject[id].fullDescription
                    }}
                ></div>
            </section>
            <section>
                <div className="container">
                    <div className="testimonials">
                        <h1 className="head-testimonials">Testimonials</h1>
                        <div className="reviews">
                        {
                            reviews.map((item, id) => (
                                <div key={id}>
                                    <div className="review-item">Name:{item.name}</div>
                                    <div className="review-item">Message:{item.text}</div>
                                </div>
                            ))
                        }
                        </div>

                        {
                            testimonials.map((item, id) => (
                                <div key={id}
                                style={{
                                    backgroundColor:"rgba(255,255,255,0.75)",
                                    padding:"10px",
                                }}>
                                    <div style={{marginBottom:"10px"}}>Name:{item.name}</div>
                                    <div style={{marginBottom:"10px"}}>Message:{item.text}</div>
                                </div>
                            ))
                        }

                        <form onSubmit={sendForm} style={{marginTop:"40px"}}>
                            <div>
                                <input 
                                    type="text"
                                    placeholder="Your name"
                                    value={newTestimonials.name}
                                    onChange={handleNameChange}
                                />
                            </div>
                            <div>
                                <textarea 
                                    cols="30" rows="10"
                                    placeholder="Your message"
                                    value={newTestimonials.text}
                                    onChange={handleTextChange}
                                ></textarea>
                            </div>
                            <button>Leave a comment</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FlightItem