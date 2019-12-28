import React from 'react'
import './App.css'

import Header from './components/layout/Header'
import Banner from './containers/Banner.container'
import RandomGallery from './components/layout/RandomGallery'
import PetList  from './containers/PetCardGroup.container'


const App = () => (
    <div className="App">
        <Header />
        <Banner />
        <PetList />
        <RandomGallery />
    </div>
)


export default App
