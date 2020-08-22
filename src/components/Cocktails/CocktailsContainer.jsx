import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cocktail from './Cocktail/Cocktail'
import Preloader from '../Preloader/Preloader'
import { filterCocktails } from '../../redux/cocktails-reducer'

class CocktailsContainer extends Component {
	componentDidMount() {
		this.props.filterCocktails()
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
export default connect( mapStateToProps, { filterCocktails } )( CocktailsContainer )