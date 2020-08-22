import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrdinaryDrink from './OrdinaryDrink/OrdinaryDrink'
import Preloader from '../Preloader/Preloader'
import { filterOrdinaryDrinks } from '../../redux/ordinary-drinks-reducer'

class OrdinaryDrinksContainer extends Component {
	componentDidMount() {
		this.props.filterOrdinaryDrinks()
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
								<OrdinaryDrink	key = { item.idDrink }
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
		error	: state.ordinaryDrinks.error,
		isLoaded: state.ordinaryDrinks.isLoaded,
		items	: state.ordinaryDrinks.items
	}
}
export default connect( mapStateToProps, { filterOrdinaryDrinks } )( OrdinaryDrinksContainer )