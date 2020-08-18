import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.scss'

let Navigation = ( props ) => {
	return (
        <nav className = { s.navigation }>
        	<ul className = { s['navigation-menu'] }>
        		<li className = { s['navigation-menu__item'] }>
        			<NavLink className = { s['navigation-menu-item__link'] }
                             activeClassName = { s.active }
                             to = "/cocktails">Cocktails</NavLink>
                </li>
                <li className = {s['navigation-menu__item']}>
        			<NavLink className = {s['sidebar-navigation-menu__link']}
                             activeClassName = {s.active}
                             to = "/ordinary-drinks">Ordinary Drinks</NavLink>
                </li>
        	</ul>
        </nav>
    )
}

export default Navigation