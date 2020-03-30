import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './../components/layout/Header'
import Footer from './../components/layout/Footer'
import NavBar from './../components/layout/NavBar'

import Home from './../views/Home'
import AppForm from './../views/AppForm'

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Header />
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/app_form" component={AppForm} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoute