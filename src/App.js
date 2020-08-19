import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CocktailsContainer from './components/Cocktails/CocktailsContainer'
import OrdinaryDrinksContainer from './components/OrdinaryDrinks/OrdinaryDrinksContainer'
import DetailsContainer from './components/Details/DetailsContainer'
import SearchResultsContainer from './components/Navigation/Search/SearchResults/SearchResultsContainer'
import AlcoholicContainer from './components/Alcoholic/AlcoholicContainer'
import NonAlcoholicContainer from './components/NonAlcoholic/NonAlcoholicContainer'

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
                    <Route path = "/cocktails/:idDrink/:catalogURL" render = {
                        () => <DetailsContainer />
                    } />
                    <Route exact path = "/ordinary-drinks" render = {
                        () => <OrdinaryDrinksContainer />
                    } />
                    <Route path = "/ordinary-drinks/:idDrink/:catalogURL" render = {
                        () => <DetailsContainer />
                    } />
                    <Route exact path = "/alcoholic" render = {
                        () => <AlcoholicContainer />
                    } />
                    <Route path = "/alcoholic/:idDrink/:catalogURL" render = {
                        () => <DetailsContainer />
                    } />
                    <Route exact path = "/non-alcoholic" render = {
                        () => <NonAlcoholicContainer />
                    } />
                    <Route path = "/non-alcoholic/:idDrink/:catalogURL" render = {
                        () => <DetailsContainer />
                    } />
                    <Route path = "/search-results/:searchQuery" render = {
                        () => <SearchResultsContainer />
                    } />
                </Switch>
            </div>

            <Footer />
        </div>
    )
}
export default App
