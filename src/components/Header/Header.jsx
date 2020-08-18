import React from 'react'
import s from './Header.module.scss'
import Navigation from '../Navigation/Navigation'

let Header = ( props ) => {
	return (
        <header className = { s.header }>
            <Navigation />
        </header>
    )
}

export default Header