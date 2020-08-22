import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import cocktailsReducer from './cocktails-reducer'
import detailsReducer from './details-reducer'
import searchReducer from './search-reducer'

let reducers = combineReducers( {
	cocktails	: cocktailsReducer,
	details		: detailsReducer,
	search		: searchReducer
} )

let store = createStore( reducers, applyMiddleware( thunkMiddleware ) )

export default store