import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CocktailsContainer from './components/Cocktails/CocktailsContainer'
import OrdinaryDrinksContainer from './components/OrdinaryDrinks/OrdinaryDrinksContainer'
import DetailsContainer from './components/Details/DetailsContainer'

const App = ( props ) => {
    return (
        <div className = "App">
            <Header />

            <div className = "main">
                <Switch>
                    <Route exact path = "/" render = {
                        () => <Redirect to = "/cocktails" />
                    } />
                    <Route exact path = "/cocktails" render = {
                        () => <CocktailsContainer />
                    } />
                    <Route path = "/cocktails/:idDrink" render = {
                        () => <DetailsContainer />
                    } />
                    <Route exact path = "/ordinary-drinks" render = {
                        () => <OrdinaryDrinksContainer />
                    } />
                    <Route path = "/ordinary-drinks/:idDrink" render = {
                        () => <DetailsContainer />
                    } />
                </Switch>
            </div>

            <Footer />
        </div>
    )
}
export default App
