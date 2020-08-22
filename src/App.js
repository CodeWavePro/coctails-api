import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CocktailsContainer from './components/Cocktails/CocktailsContainer'
import DetailsContainer from './components/Details/DetailsContainer'
import SearchResultsContainer from './components/Navigation/Search/SearchResults/SearchResultsContainer'

const App = ( props ) => {
    return (
        <div className = "App">
            <Header />

            <div className = "main">
                <Switch>
                    <Route exact path = "/" render = {
                        () => <Redirect to = "/cocktails/Cocktail" />
                    } />
                    <Route exact path = "/cocktails/:filterBy" render = {
                        () => <CocktailsContainer />
                    } />
                    <Route path = "/search-results/:searchQuery" render = {
                        () => <SearchResultsContainer />
                    } />
                    <Route path = "/cocktail/:idDrink" render = {
                        () => <DetailsContainer />
                    } />
                </Switch>
            </div>

            <Footer />
        </div>
    )
}
export default App
