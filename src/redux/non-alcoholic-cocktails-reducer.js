import { alcoholicAPI } from '../api/api'

const GET_NON_ALCOHOLIC_COCKTAILS				= 'GET-NON-ALCOHOLIC-COCKTAILS'
const GET_NON_ALCOHOLIC_COCKTAILS_RECEIVE_ERROR	= 'GET-NON-ALCOHOLIC-COCKTAILS-RECEIVE-ERROR'
const TRIGGER_NON_ALCOHOLIC_COCKTAILS_IS_LOADED	= 'TRIGGER-NON-ALCOHOLIC-COCKTAILS-IS-LOADED'

let initialState = {
	error	: null,
	isLoaded: false,
	items	: []
}

const nonAlcoholicCocktailsReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_NON_ALCOHOLIC_COCKTAILS:
			return {
				...state,
				isLoaded: true,
				items	: [...action.cocktails]
			}

		case GET_NON_ALCOHOLIC_COCKTAILS_RECEIVE_ERROR:
			return {
				...state,
				isLoaded: true,
				error	: action.error
			}

		case TRIGGER_NON_ALCOHOLIC_COCKTAILS_IS_LOADED:
			return {
				...state,
				isLoaded: action.isLoaded
			}

		default:
			return state
	}
}
export default nonAlcoholicCocktailsReducer

const getNonAlcoholicCocktails = ( cocktails ) => ( { type: GET_NON_ALCOHOLIC_COCKTAILS, cocktails } )
const getNonAlcoholicCocktailsReceiveError = ( error ) => ( { type: GET_NON_ALCOHOLIC_COCKTAILS_RECEIVE_ERROR, error } )
const triggerNonAlcoholicCocktailsIsLoaded = ( isLoaded ) => ( { type: TRIGGER_NON_ALCOHOLIC_COCKTAILS_IS_LOADED, isLoaded } )

export const filterNonAlcoholic = () => {
	return ( dispatch ) => {
		dispatch( triggerNonAlcoholicCocktailsIsLoaded( false ) )

		alcoholicAPI.getItemsByFilterQuery( 'Non_Alcoholic' )
			.then(
				data => {
					dispatch( getNonAlcoholicCocktails( data.drinks ) )
				},
				error => {
					dispatch( getNonAlcoholicCocktailsReceiveError( error ) )
				}
			)
	}
}