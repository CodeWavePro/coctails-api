import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SearchResults from './SearchResults'
import Preloader from '../../../Preloader/Preloader'
import { searchAPI } from '../../../../api/api'
import {
    getFoundItems,
    getSearchError,
    triggerSearchResultsIsLoaded
}   from '../../../../redux/search-reducer'

export class SearchResultsContainer extends Component {
    componentDidMount() {
        searchAPI.searchItem( this.props.searchQuery )
            .then(
                data => {
                    if ( data.drinks ) {
                        this.props.getFoundItems( data.drinks )
                    }   else {
                        this.props.getSearchError( { message: 'No items found.' } )
                    }
                },
                error => {
                    this.props.getSearchError( error )
                }
            )
    }

    componentDidUpdate( prevProps ) {
        if ( this.props.match.params.searchQuery !== prevProps.match.params.searchQuery ) {
            this.props.triggerSearchResultsIsLoaded( false )
            searchAPI.searchItem( this.props.searchQuery )
                .then(
                    data => {
                        this.props.getFoundItems( data.drinks )
                    },
                    error => {
                        this.props.getSearchError( error )
                    }
                )
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

export default connect( mapStateToProps, {
    getFoundItems, getSearchError, triggerSearchResultsIsLoaded
} )( WithURLDataContainerComponent )