import { searchAPI } from '../api/api'

const CHANGE_SEARCH_INPUT_VALUE			= 'CHANGE-SEARCH-INPUT-VALUE'
const GET_FOUND_ITEMS					= 'GET-FOUND-ITEMS'
const GET_SEARCH_ERROR					= 'GET-SEARCH-ERROR'
const TRIGGER_SEARCH_RESULTS_IS_LOADED	= 'TRIGGER-SEARCH-RESULTS-IS-LOADED'
const TRIGGER_SEARCH_INPUT_IS_ACTIVE	= 'TRIGGER-SEARCH-INPUT-IS-ACTIVE'

let initialState = {
	searchQuery		: '',
	foundDrinks		: [],
	isInputActive	: false,
	isLoaded		: false,
	error			: null
}

const searchReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case CHANGE_SEARCH_INPUT_VALUE:
			return {
				...state,
				searchQuery: action.searchQuery
			}

		case GET_FOUND_ITEMS:
			return {
				...state,
				foundDrinks: action.foundDrinks ? [...action.foundDrinks] : [],
				isLoaded: true
			}

		case GET_SEARCH_ERROR:
			return {
				...state,
				isLoaded: true,
				error: action.error
			}

		case TRIGGER_SEARCH_RESULTS_IS_LOADED:
			return {
				...state,
				isLoaded: action.isLoaded
			}

		case TRIGGER_SEARCH_INPUT_IS_ACTIVE:
			return {
				...state,
				isInputActive: action.isInputActive
			}

		default:
			return state
	}
}
export default searchReducer

export const changeSearchInputValue = ( searchQuery ) => ( { type: CHANGE_SEARCH_INPUT_VALUE, searchQuery } )
const getFoundItems = ( foundDrinks ) => ( { type: GET_FOUND_ITEMS, foundDrinks } )
const getSearchError = ( error ) => ( { type: GET_SEARCH_ERROR, error } )
const triggerSearchResultsIsLoaded = ( isLoaded ) => ( { type: TRIGGER_SEARCH_RESULTS_IS_LOADED, isLoaded } )
export const triggerSearchInputIsActive = ( isInputActive ) => ( { type: TRIGGER_SEARCH_INPUT_IS_ACTIVE, isInputActive } )

export const searchCocktails = ( searchQuery ) => {
	return ( dispatch ) => {
		dispatch( triggerSearchResultsIsLoaded( false ) )

		searchAPI.searchItem( searchQuery )
            .then(
                data => {
                    if ( data.drinks ) {
                        dispatch( getFoundItems( data.drinks ) )
                    }   else {
                        dispatch( getSearchError( { message: 'No items found.' } ) )
                    }
                },
                error => {
                    dispatch( getSearchError( error ) )
                }
            )
	}
}