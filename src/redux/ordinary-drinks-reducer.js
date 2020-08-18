const GET_ORDINARY_DRINKS				= 'GET-ORDINARY-DRINKS'
const GET_ORDINARY_DRINKS_ERROR			= 'GET-ORDINARY-DRINKS-ERROR'
const TRIGGER_ORDINARY_DRINKS_IS_LOADED	= 'TRIGGER-ORDINARY-DRINKS-IS-LOADED'

let initialState = {
	error	: null,
	isLoaded: false,
	items	: []
}

const ordinaryDrinksReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_ORDINARY_DRINKS:
			return {
				...state,
				isLoaded: true,
				items	: [...action.ordinaryDrinks]
			}

		case GET_ORDINARY_DRINKS_ERROR:
			return {
				...state,
				isLoaded: true,
				error	: action.error
			}

		case TRIGGER_ORDINARY_DRINKS_IS_LOADED:
			return {
				...state,
				isLoaded: action.isLoaded
			}

		default:
			return state
	}
}
export default ordinaryDrinksReducer

export const getOrdinaryDrinks = ( ordinaryDrinks ) => ( { type: GET_ORDINARY_DRINKS, ordinaryDrinks } )
export const getOrdinaryDrinksError = ( error ) => ( { type: GET_ORDINARY_DRINKS_ERROR, error } )
export const triggerOrdinaryDrinksIsLoaded = ( isLoaded ) => ( { type: TRIGGER_ORDINARY_DRINKS_IS_LOADED, isLoaded } )