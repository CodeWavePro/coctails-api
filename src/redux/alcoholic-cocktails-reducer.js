import { alcoholicAPI } from '../api/api'

const GET_ALCOHOLIC_COCKTAILS				= 'GET-ALCOHOLIC-COCKTAILS'
const GET_ALCOHOLIC_COCKTAILS_RECEIVE_ERROR	= 'GET-ALCOHOLIC-COCKTAILS-RECEIVE-ERROR'
const TRIGGER_ALCOHOLIC_COCKTAILS_IS_LOADED	= 'TRIGGER-ALCOHOLIC-COCKTAILS-IS-LOADED'

let initialState = {
	error	: null,
	isLoaded: false,
	items	: []
}

const alcoholicCocktailsReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_ALCOHOLIC_COCKTAILS:
			return {
				...state,
				isLoaded: true,
				items	: [...action.cocktails]
			}

		case GET_ALCOHOLIC_COCKTAILS_RECEIVE_ERROR:
			return {
				...state,
				isLoaded: true,
				error	: action.error
			}

		case TRIGGER_ALCOHOLIC_COCKTAILS_IS_LOADED:
			return {
				...state,
				isLoaded: action.isLoaded
			}

		default:
			return state
	}
}
export default alcoholicCocktailsReducer

const getAlcoholicCocktails = ( cocktails ) => ( { type: GET_ALCOHOLIC_COCKTAILS, cocktails } )
const getAlcoholicCocktailsReceiveError = ( error ) => ( { type: GET_ALCOHOLIC_COCKTAILS_RECEIVE_ERROR, error } )
const triggerAlcoholicCocktailsIsLoaded = ( isLoaded ) => ( { type: TRIGGER_ALCOHOLIC_COCKTAILS_IS_LOADED, isLoaded } )

export const filterAlcoholic = () => {
	return ( dispatch ) => {
		dispatch( triggerAlcoholicCocktailsIsLoaded( false ) )

		alcoholicAPI.getItemsByFilterQuery( 'Alcoholic' )
			.then(
				data => {
					dispatch( getAlcoholicCocktails( data.drinks ) )
				},
				error => {
					dispatch( getAlcoholicCocktailsReceiveError( error ) )
				}
			)
	}
}