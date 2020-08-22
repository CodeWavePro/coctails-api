import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getSingleCocktail } from '../../redux/details-reducer'
import SingleDetails from './SingleDetails/SingleDetails'
import Preloader from '../Preloader/Preloader'

class DetailsContainer extends Component {
	componentDidMount() {
		let idDrink = this.props.match.params.idDrink

		if ( ! idDrink ) {
			idDrink = 11007
		}

		this.props.getSingleCocktail( idDrink )
	}

	componentDidUpdate( prevProps ) {
		let idDrink = this.props.match.params.idDrink

		if ( idDrink !== prevProps.match.params.idDrink ) {
			if ( !idDrink ) {
				idDrink = 11007
			}

			this.props.getSingleCocktail( idDrink )
		}
	}

	render() {
		if ( this.props.error ) {
			return <div>Error { this.props.error.message }</div>
		}	else if ( ! this.props.isLoaded ) {
			return <Preloader />
		}	else {
			return (
				<div className = "container-single">
					<SingleDetails details = { this.props.details } />
				</div>
			)
		}
	}
}

let mapStateToProps = ( state ) => {
	return {
		error		: state.details.error,
		isLoaded	: state.details.isLoaded,
		details		: state.details.details
	}
}

let WithURLDataContainerComponent = withRouter( DetailsContainer )

export default connect( mapStateToProps, { getSingleCocktail } )( WithURLDataContainerComponent )
