import React from 'react'
import './App.css'

import Header from './components/layout/Header'
import Banner from './components/layout/Banner'
import RandomGallery from './components/layout/RandomGallery'
import PetCardGroup from './components/pets/PetCardGroup'


const App = () => (
        <div className="App">
            <Header />
            <Banner />
            <PetCardGroup />
            <RandomGallery />
        </div>
    )


export default App
