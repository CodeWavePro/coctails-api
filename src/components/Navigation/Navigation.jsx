import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.scss'
import SearchContainer from './Search/SearchContainer'

let Navigation = ( props ) => {
	return (
        <nav className = { s.navigation }>
            <FontAwesomeIcon icon = { faBars } className = "navigation__icon" />

        	<ul className = { s['navigation-menu'] }>
        		<li className = { s['navigation-menu__item'] }>
        			<NavLink className = { s['navigation-menu__link'] }
                             activeClassName = { s.active }
                             to = "/cocktails">Cocktails</NavLink>
                </li>
                <li className = {s['navigation-menu__item']}>
        			<NavLink className = {s['navigation-menu__link']}
                             activeClassName = {s.active}
                             to = "/ordinary-drinks">Ordinary Drinks</NavLink>
                </li>
        	</ul>

            <SearchContainer />
        </nav>
    )
}

export default Navigation