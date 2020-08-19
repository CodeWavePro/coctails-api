import React from 'react'
import s from './SingleDetails.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

let SingleDetails = ( props ) => {
	let details = props.details[0]
	let ingredients = []

	for ( let i = 1; i <= 15; i++ ) {
		let ingredient = 'strIngredient' + i

		if ( details[ingredient] ) {
			ingredients[i-1] = details[ingredient]
		}	else {
			break
		}
	}

	return (
		<div className = { s['item-wrapper'] }>
			<NavLink className = { s.back__link } to = { `/${props.catalogURL}` }>
				<FontAwesomeIcon icon = { faChevronLeft } className = "go-back__icon" />Go Back
			</NavLink>
	        
	        <div className = { s.details }>
	        	<div className = { s.image }>
	        		<img	className = { s.image }
	        				src = { details.strDrinkThumb }
	        				alt = { details.strDrink } />
	        	</div>

	        	<div className = { s['details-info'] }>
	        		<h1 className = { s.title }>
		            	{
		            		details.strDrink +
		            			(
		            				details.strDrinkAlternate
		            					? ` (${details.strDrinkAlternate})`
		            					: ''
		            			)
		            	}
		            </h1>
		            <h4 className = { s.tags }>
		            	{
		            		details.strTags
			            		? details.strTags.split( ',' )
			            		: ''
		            	}
		            </h4>

		            <div className = { s['details-table'] }>
		            	<div className = { s['details-row'] }>
		            		<span className = { s['detail-title'] }>
		            			Category
		            		</span>
		            		{ details.strCategory ?? '' }
		            	</div>
		            	<div className = { s['details-row'] }>
		            		<span className = { s['detail-title'] }>
		            			Is Alcoholic
		            		</span>
		            		{ details.strAlcoholic ?? '' }
		            	</div>
		            	<div className = { s['details-row'] }>
		            		<span className = { s['detail-title'] }>
		            			Glass
		            		</span>
		            		{ details.strGlass ?? '' }
		            	</div>
		            	<div className = { s['details-row'] }>
		            		<span className = { s['detail-title'] }>
		            			Ingredients
		            		</span>
		            		{
		            			ingredients.map( (i, index) => (
		            				<span key = { index } className = { s.ingredient }>
		            					{ i }
		            				</span>
		            			) )
		            		}
		            	</div>

		            	<div className = { s['details-row'] }>
		            		<span className = { s['detail-title'] }>
		            			Instructions
		            		</span>
		            		{ details.strInstructions ?? '' }
		            	</div>
		            </div>
	        	</div>
	        </div>
	    </div>
    )
}

export default SingleDetails