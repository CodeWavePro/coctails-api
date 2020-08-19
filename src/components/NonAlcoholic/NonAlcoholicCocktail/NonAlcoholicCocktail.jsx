import React from 'react'
import s from './NonAlcoholicCocktail.module.scss'
import { NavLink } from 'react-router-dom'

let NonAlcoholicCocktail = ( props ) => {
	return (
		<div className = { s.item }>
			<div className = { s.image }>
				<NavLink to = { `/non-alcoholic/${props.idDrink}/non-alcoholic` }>
					<img className = { s.thumbnail } src = { props.strDrinkThumb } alt = { props.strDrink } />
				</NavLink>
			</div>
			<NavLink to = { `/non-alcoholic/${props.idDrink}` }>
				<h2 className = { s.title }>{ props.strDrink }</h2>
			</NavLink>
		</div>
	)
}

export default NonAlcoholicCocktail