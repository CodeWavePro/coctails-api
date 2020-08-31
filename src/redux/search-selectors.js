export const getSearchQuery = ( state ) => {
	return state.search.searchQuery
}

export const getFoundDrinks = ( state ) => {
	return state.search.foundDrinks
}

export const getIsInputActive = ( state ) => {
	return state.search.isInputActive
}

export const getIsLoaded = ( state ) => {
	return state.search.isLoaded
}

export const getError = ( state ) => {
	return state.search.error
}