const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/'

export const filterAPI = {
	getItemsByFilterQuery( query = 'Cocktail' ) {
		return fetch( `${baseURL}filter.php?c=${query}` )
			.then( response => {
				return response.json()
			} )
	}
}

export const detailsAPI = {
	getItemDetailsByID( id = 11007 ) {
		return fetch( `${baseURL}lookup.php?i=${id}` )
			.then( response => {
				return response.json()
			} )
	}
}