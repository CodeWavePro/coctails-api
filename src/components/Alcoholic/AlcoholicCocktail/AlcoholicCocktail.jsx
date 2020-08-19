import React from 'react'
import s from './AlcoholicCocktail.module.scss'
import { NavLink } from 'react-router-dom'

let AlcoholicCocktail = ( props ) => {
	return (
		<div className = { s.item }>
			<div className = { s.image }>
				<NavLink to = { `/alcoholic/${props.idDrink}/alcoholic` }>
					<img className = { s.thumbnail } src = { props.strDrinkThumb } alt = { props.strDrink } />
				</NavLink>
			</div>
			<NavLink to = { `/alcoholic/${props.idDrink}` }>
				<h2 className = { s.title }>{ props.strDrink }</h2>
			</NavLink>
		</div>
	)
}

export default AlcoholicCocktail