import { createStore, combineReducers } from 'redux'
import cocktailsReducer from './cocktails-reducer'
import ordinaryDrinksReducer from './ordinary-drinks-reducer'
import detailsReducer from './details-reducer'
import searchReducer from './search-reducer'

let reducers = combineReducers( {
	cocktails		: cocktailsReducer,
	ordinaryDrinks	: ordinaryDrinksReducer,
	details			: detailsReducer,
	search			: searchReducer
} )

let store = createStore( reducers )

export default store