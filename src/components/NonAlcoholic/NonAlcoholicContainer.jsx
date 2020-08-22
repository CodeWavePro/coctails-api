import React, { Component } from 'react'
import { connect } from 'react-redux'
import NonAlcoholicCocktail from './NonAlcoholicCocktail/NonAlcoholicCocktail'
import Preloader from '../Preloader/Preloader'
import { filterNonAlcoholic } from '../../redux/non-alcoholic-cocktails-reducer'

class NonAlcoholicContainer extends Component {
	componentDidMount() {
		this.props.filterNonAlcoholic()
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
export default connect( mapStateToProps, { filterNonAlcoholic } )( NonAlcoholicContainer )