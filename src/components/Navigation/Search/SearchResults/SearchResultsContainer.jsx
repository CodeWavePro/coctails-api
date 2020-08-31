import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SearchResults from './SearchResults'
import Preloader from '../../../Preloader/Preloader'
import { searchCocktails }   from '../../../../redux/search-reducer'
import {
    getError,
    getSearchQuery,
    getIsLoaded,
    getFoundDrinks
} from '../../../../redux/search-selectors'

export class SearchResultsContainer extends Component {
    componentDidMount() {
        this.props.searchCocktails( this.props.searchQuery )
    }

    componentDidUpdate( prevProps ) {
        if ( this.props.match.params.searchQuery !== prevProps.match.params.searchQuery ) {
            this.props.searchCocktails( this.props.searchQuery )
        }
    }

    render() {
        if ( ! this.props.isLoaded ) {
            return <Preloader />
        }   else {
            return (
                <div className = "results">
                    <SearchResults foundDrinks = { this.props.foundDrinks } />
                </div>
            )
        }
    }
}

let mapStateToProps = ( state ) => {
    return {
        error       : getError( state ),
        searchQuery : getSearchQuery( state ),
        isLoaded    : getIsLoaded( state ),
        foundDrinks : getFoundDrinks( state )
    }
}

let WithURLDataContainerComponent = withRouter( SearchResultsContainer )

export default connect( mapStateToProps, { searchCocktails } )( WithURLDataContainerComponent )