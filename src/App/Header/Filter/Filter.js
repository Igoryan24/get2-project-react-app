import React from 'react'
import './filter.scss'

const Filter = () => {
    return(
        <>
            <div className="filter-block">
                <form className="form-filter">
                    <div className="select-block">
                        <p className="cat-form">CATEGORY</p>
                        <select className="select" name="category" id="category">
                            <option value="flights">FLIGHTS</option>
                            <option value="hotels">HOTELS</option>
                            <option value="carhire">CAR HIRE</option>
                        </select>
                    </div>
                    <div className="select-block">
                        <p className="cat-form">FROM</p>
                        <select className="select" name="cityUk" id="cityUk" label="CHOOSE">
                            <option value="kyiv">Kyiv</option>
                            <option value="kharkiv">Kharkiv</option>
                            <option value="lviv">Lviv</option>
                            <option value="dnipro">Dnipro</option>
                            <option value="donetsk">Donetsk</option>
                        </select>
                    </div>
                    <div className="select-block">
                        <p className="cat-form">TO</p>
                        <select className="select" name="city" id="city">
                            <option value="paris">Paris</option>
                            <option value="london">London</option>
                            <option value="madrid">Madrid</option>
                            <option value="rome">Rome</option>
                            <option value="istanbul">Istanbul</option>
                            <option value="marsel">Marsel</option>
                            <option value="stockholm">Stockholm</option>
                            <option value="Berlin">berlin</option>
                        </select>
                    </div>
                    <div className="select-block">
                        <p className="cat-form">DEPART</p>
                        <input className="select" type="date" name="calendar" value="CHOOSE"></input>
                    </div>
                    <div className="select-block">
                        <p className="cat-form">RETURN</p>
                        <input className="select" type="date" name="calendar"></input>
                    </div>
                    <div className="select-block">
                        <p className="cat-form">CABIN & TRAVELLERS</p>
                        <select className="select" name="cabin" id="cabin">
                            <option value="economy">Economy</option>
                            <option value="business">Business</option>
                            <option value="luxory">Luxory</option>
                        </select>
                    </div>
                    <button className="search">SEARCH!</button>
            </form>
        </div>
    </>
    )
}

export default Filter