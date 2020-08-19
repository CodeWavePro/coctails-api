import React, { Component } from 'react'
import { connect } from 'react-redux'
import NonAlcoholicCocktail from './NonAlcoholicCocktail/NonAlcoholicCocktail'
import Preloader from '../Preloader/Preloader'
import {
	getNonAlcoholicCocktails,
	getNonAlcoholicCocktailsReceiveError,
	triggerNonAlcoholicCocktailsIsLoaded
} from '../../redux/non-alcoholic-cocktails-reducer'
import { alcoholicAPI } from '../../api/api'

class NonAlcoholicContainer extends Component {
	componentDidMount() {
		this.props.triggerNonAlcoholicCocktailsIsLoaded( false )

		alcoholicAPI.getItemsByFilterQuery( 'Non_Alcoholic' )
			.then(
				data => {
					this.props.getNonAlcoholicCocktails( data.drinks )
				},
				error => {
					this.props.getNonAlcoholicCocktailsReceiveError( error )
				}
			)
	}

	render = () => {
		if ( this.props.error ) {
			return <div>Error { this.props.error.message }</div>
		}	else if ( ! this.props.isLoaded ) {
			return <Preloader />
		}	else {
			return (
				<div className = "container">
					{
						this.props.items.map(
							item => (
								<NonAlcoholicCocktail	key = { item.idDrink }
														idDrink = { item.idDrink }
														strDrink = { item.strDrink }
														strDrinkThumb = { item.strDrinkThumb }
														catalogURL = "/non-alcoholic" />
							)
						)
					}
				</div>
			)
		}
	}
}

let mapStateToProps = ( state ) => {
	return {
		error	: state.nonAlcoholicCocktails.error,
		isLoaded: state.nonAlcoholicCocktails.isLoaded,
		items	: state.nonAlcoholicCocktails.items
	}
}
export default connect( mapStateToProps, {
	getNonAlcoholicCocktails, getNonAlcoholicCocktailsReceiveError, triggerNonAlcoholicCocktailsIsLoaded
} )( NonAlcoholicContainer )