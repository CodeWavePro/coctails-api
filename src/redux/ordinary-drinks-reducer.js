import { filterAPI } from '../api/api'

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

const getOrdinaryDrinks = ( ordinaryDrinks ) => ( { type: GET_ORDINARY_DRINKS, ordinaryDrinks } )
const getOrdinaryDrinksError = ( error ) => ( { type: GET_ORDINARY_DRINKS_ERROR, error } )
const triggerOrdinaryDrinksIsLoaded = ( isLoaded ) => ( { type: TRIGGER_ORDINARY_DRINKS_IS_LOADED, isLoaded } )

export const filterOrdinaryDrinks = () => {
	return ( dispatch ) => {
		dispatch( triggerOrdinaryDrinksIsLoaded( false ) )

		filterAPI.getItemsByFilterQuery( 'Ordinary_Drink' )
			.then(
				data => {
					dispatch( getOrdinaryDrinks( data.drinks ) )
				},
				error => {
					dispatch( getOrdinaryDrinksError( error ) )
				}
			)
	}
}