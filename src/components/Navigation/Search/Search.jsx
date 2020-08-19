import React from 'react'
import s from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

let Search = ( props ) => {
	let changeSearchInputValue = ( e ) => {
		let newText = e.target.value
		props.changeSearchInputValue( newText )
	}

    let searchInputFocusOut = () => {
        props.triggerSearchInputIsActive( false )
    }

    let showHideSearchField = () => {
        props.isInputActive
            ? props.triggerSearchInputIsActive( false )
            : props.triggerSearchInputIsActive( true )
    }

    let inputSearchIconClass, inputCrossIconClass

    if ( ! props.isInputActive ) {
        inputSearchIconClass = 'active-icon'
        inputCrossIconClass = 'not-active-icon'
    }   else {
        inputSearchIconClass = 'not-active-icon'
        inputCrossIconClass = 'active-icon'
    }

	return (
        <div className = { s.search }>
            <div className = { s['search-wrapper'] + ( props.isInputActive ? ' ' + s.active : '' ) }>
                <input  type = "text"
                        className = { s.input }
                        value = { props.searchQuery }
                        onChange = { changeSearchInputValue }
                        placeholder = "Search cocktail by name" />
                <NavLink    to = { '/search-results/:' + props.searchQuery }
                            className = { s.button }
                            title = "Search">
                    <FontAwesomeIcon icon = { faSearch } className = "search-form__icon" />
                </NavLink>
            </div>

            <div className = { s.icons } onClick = { showHideSearchField }>
                <FontAwesomeIcon icon = { faSearch } className = { `search__icon ${inputSearchIconClass}` } />
                <FontAwesomeIcon icon = { faTimes } className = { `search__icon ${inputCrossIconClass}` } />
            </div>
        </div>
    )
}

export default Search