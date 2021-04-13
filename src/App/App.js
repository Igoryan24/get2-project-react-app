//import React from 'react'
import React, {Component} from 'react'

import "../common/style/reset.css"
import "../common/style/style.scss"

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'


class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
        )
    }
}


export default App