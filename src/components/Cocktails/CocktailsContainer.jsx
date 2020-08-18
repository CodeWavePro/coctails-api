import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cocktail from './Cocktail/Cocktail'
import Preloader from '../Preloader/Preloader'
import {
	getCocktails,
	getCocktailsReceiveError,
	triggerCocktailsIsLoaded
} from '../../redux/cocktails-reducer'
import { filterAPI } from '../../api/api'

class CocktailsContainer extends Component {
	componentDidMount() {
		this.props.triggerCocktailsIsLoaded( false )

		filterAPI.getItemsByFilterQuery( 'Cocktail' )
			.then(
				data => {
					this.props.getCocktails( data.drinks )
				},
				error => {
					this.props.getCocktailsReceiveError( error )
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
								<Cocktail	key = { item.idDrink }
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
		error	: state.cocktails.error,
		isLoaded: state.cocktails.isLoaded,
		items	: state.cocktails.items
	}
}
export default connect( mapStateToProps, {
	getCocktails, getCocktailsReceiveError, triggerCocktailsIsLoaded
} )( CocktailsContainer )