import React, { Component } from 'react'
import { connect } from 'react-redux'
import AlcoholicCocktail from './AlcoholicCocktail/AlcoholicCocktail'
import Preloader from '../Preloader/Preloader'
import {
	getAlcoholicCocktails,
	getAlcoholicCocktailsReceiveError,
	triggerAlcoholicCocktailsIsLoaded
} from '../../redux/alcoholic-cocktails-reducer'
import { alcoholicAPI } from '../../api/api'

class AlcoholicContainer extends Component {
	componentDidMount() {
		this.props.triggerAlcoholicCocktailsIsLoaded( false )

		alcoholicAPI.getItemsByFilterQuery( 'Alcoholic' )
			.then(
				data => {
					this.props.getAlcoholicCocktails( data.drinks )
				},
				error => {
					this.props.getAlcoholicCocktailsReceiveError( error )
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
								<AlcoholicCocktail	key = { item.idDrink }
													idDrink = { item.idDrink }
													strDrink = { item.strDrink }
													strDrinkThumb = { item.strDrinkThumb } />
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
		error	: state.alcoholicCocktails.error,
		isLoaded: state.alcoholicCocktails.isLoaded,
		items	: state.alcoholicCocktails.items
	}
}
export default connect( mapStateToProps, {
	getAlcoholicCocktails, getAlcoholicCocktailsReceiveError, triggerAlcoholicCocktailsIsLoaded
} )( AlcoholicContainer )