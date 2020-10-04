import React from 'react'
import './App.css'

import Header from './components/layout/Header'
import Banner from './containers/Banner.container'
import RandomGallery from './components/layout/RandomGallery'
import PetList from './containers/PetCardGroup.container'
import PetDetail from './containers/PetDetail.container'
import NotFoundPage from './components/layout/NotFoundPage'
import Footer from './components/layout/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import { BASE_PREFIX } from './settings'

const App = () => (
    <Router>
        <div className="App">
            <Switch>
                <Route exact path={`${BASE_PREFIX}/pets/:slug`}>
                    <PetDetail />
                </Route>
                <Route exact path={`${BASE_PREFIX}/`}>
                    <Header />
                    <Banner />
                    <PetList />
                    {/* <RandomGallery /> */}
                    <Footer />
                </Route>
                <Route path='*' exact={true} component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default App
