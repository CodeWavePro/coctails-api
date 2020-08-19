import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from './Search'
import {
    changeSearchInputValue,
    triggerSearchInputIsActive
} from '../../../redux/search-reducer'
import Preloader from '../../Preloader/Preloader'

class SearchContainer extends Component {
    render = () => {
        return (
            <Search changeSearchInputValue = { this.props.changeSearchInputValue }
                    searchQuery = { this.props.searchQuery }
                    triggerSearchInputIsActive = { this.props.triggerSearchInputIsActive }
                    isInputActive = { this.props.isInputActive }
            />
        )
    }
}

let mapStateToProps = ( state ) => {
    return {
        searchQuery     : state.search.searchQuery,
        isInputActive   : state.search.isInputActive
    }
}
export default connect( mapStateToProps, {
    changeSearchInputValue, triggerSearchInputIsActive
} )( SearchContainer )