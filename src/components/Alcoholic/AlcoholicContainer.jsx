import React, { Component } from 'react'
import { connect } from 'react-redux'
import AlcoholicCocktail from './AlcoholicCocktail/AlcoholicCocktail'
import Preloader from '../Preloader/Preloader'
import { filterAlcoholic } from '../../redux/alcoholic-cocktails-reducer'

class AlcoholicContainer extends Component {
	componentDidMount() {
		this.props.filterAlcoholic()
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
export default connect( mapStateToProps, { filterAlcoholic } )( AlcoholicContainer )