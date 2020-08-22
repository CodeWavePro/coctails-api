import React from 'react'
import s from './SearchResults.module.scss'
import { NavLink } from 'react-router-dom'

let SearchResults = ( props ) => {
	let drinks

	if ( ! props.foundDrinks || props.foundDrinks.length <= 0 ) {
		drinks = 'Nothing found!'
	}	else {
		drinks = props.foundDrinks.map( drink => (
			<div key = { drink.idDrink } className = { s.item }>
				<div className = { s.image }>
					<NavLink to = { `/cocktail/${drink.idDrink}` }>
						<img className = { s.thumbnail } src = { drink.strDrinkThumb } alt = { drink.strDrink } />
					</NavLink>
				</div>
				<NavLink to = { `/cocktail/${drink.idDrink}` }>
					<h2 className = { s.title }>{ drink.strDrink }</h2>
				</NavLink>
			</div>
		) )
	}

	return <div className = "container">{ drinks }</div>
}

export default SearchResults