import React from 'react'
import s from './Cocktail.module.scss'
import { NavLink } from 'react-router-dom'

let Cocktail = ( props ) => {
	return (
		<div className = { s.item }>
			<div className = { s.image }>
				<NavLink to = { `/cocktails/${props.idDrink}` }>
					<img className = { s.thumbnail } src = { props.strDrinkThumb } alt = { props.strDrink } />
				</NavLink>
			</div>
			<NavLink to = { `/cocktails/${props.idDrink}` }>
				<h2 className = { s.title }>{ props.strDrink }</h2>
			</NavLink>
		</div>
	)
}

export default Cocktail