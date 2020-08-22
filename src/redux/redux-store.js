import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import cocktailsReducer from './cocktails-reducer'
import ordinaryDrinksReducer from './ordinary-drinks-reducer'
import alcoholicCocktailsReducer from './alcoholic-cocktails-reducer'
import nonAlcoholicCocktailsReducer from './non-alcoholic-cocktails-reducer'
import detailsReducer from './details-reducer'
import searchReducer from './search-reducer'

let reducers = combineReducers( {
	cocktails				: cocktailsReducer,
	ordinaryDrinks			: ordinaryDrinksReducer,
	alcoholicCocktails		: alcoholicCocktailsReducer,
	nonAlcoholicCocktails	: nonAlcoholicCocktailsReducer,
	details					: detailsReducer,
	search					: searchReducer
} )

let store = createStore( reducers, applyMiddleware( thunkMiddleware ) )

export default store