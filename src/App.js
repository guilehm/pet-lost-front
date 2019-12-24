import React from 'react'
import './App.css'

import Header from './components/layout/Header'
import Banner from './components/layout/Banner'
import RandomGallery from './components/layout/RandomGallery'


const App = () => (
        <div className="App">
            <Header />
            <Banner />
            <RandomGallery />
        </div>
    )


export default App
