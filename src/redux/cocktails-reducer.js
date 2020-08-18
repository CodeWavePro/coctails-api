const GET_COCKTAILS					= 'GET-COCKTAILS'
const GET_COCKTAILS_RECEIVE_ERROR	= 'GET-COCKTAILS-RECEIVE-ERROR'
const TRIGGER_COCKTAILS_IS_LOADED	= 'TRIGGER-COCKTAILS-IS-LOADED'

let initialState = {
	error	: null,
	isLoaded: false,
	items	: []
}

const cocktailsReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_COCKTAILS:
			return {
				...state,
				isLoaded: true,
				items	: [...action.cocktails]
			}

		case GET_COCKTAILS_RECEIVE_ERROR:
			return {
				...state,
				isLoaded: true,
				error	: action.error
			}

		case TRIGGER_COCKTAILS_IS_LOADED:
			return {
				...state,
				isLoaded: action.isLoaded
			}

		default:
			return state
	}
}
export default cocktailsReducer

export const getCocktails = ( cocktails ) => ( { type: GET_COCKTAILS, cocktails } )
export const getCocktailsReceiveError = ( error ) => ( { type: GET_COCKTAILS_RECEIVE_ERROR, error } )
export const triggerCocktailsIsLoaded = ( isLoaded ) => ( { type: TRIGGER_COCKTAILS_IS_LOADED, isLoaded } )