import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Cocktail from './Cocktail/Cocktail'
import Preloader from '../Preloader/Preloader'
import { filterCocktails } from '../../redux/cocktails-reducer'
import {
	getError,
	getIsLoaded,
	getItems
} from '../../redux/cocktails-selectors'

class CocktailsContainer extends Component {
	componentDidMount() {
		let filterBy = this.props.match.params.filterBy
		this.props.filterCocktails( filterBy )
	}

	componentDidUpdate( prevProps ) {
		let filterBy = this.props.match.params.filterBy

		if ( filterBy !== prevProps.match.params.filterBy ) {
			this.props.filterCocktails( filterBy )
		}
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
		error	: getError( state ),
		isLoaded: getIsLoaded( state ),
		items	: getItems( state )
	}
}
let WithURLDataContainerComponent = withRouter( CocktailsContainer )
export default connect( mapStateToProps, { filterCocktails } )( WithURLDataContainerComponent )