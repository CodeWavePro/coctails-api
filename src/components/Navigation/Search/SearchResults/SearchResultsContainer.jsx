import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SearchResults from './SearchResults'
import Preloader from '../../../Preloader/Preloader'
import { searchAPI } from '../../../../api/api'
import { searchCocktails }   from '../../../../redux/search-reducer'

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
        error       : state.search.error,
        searchQuery : state.search.searchQuery,
        isLoaded    : state.search.isLoaded,
        foundDrinks : state.search.foundDrinks
    }
}

let WithURLDataContainerComponent = withRouter( SearchResultsContainer )

export default connect( mapStateToProps, { searchCocktails } )( WithURLDataContainerComponent )