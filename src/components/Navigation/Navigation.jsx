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

            <div className = { s['navigation-menu-wrapper'] }>
                <div className = { s['navigation-menu-inner'] }>
                    <ul className = { s['navigation-menu'] }>
                        <li className = { s['navigation-menu__item'] }>
                            <NavLink className = { s['navigation-menu__link'] }
                                     activeClassName = { s.active }
                                     to = "/cocktails/Cocktail">Cocktails</NavLink>
                        </li>
                        <li className = {s['navigation-menu__item']}>
                            <NavLink className = {s['navigation-menu__link']}
                                     activeClassName = {s.active}
                                     to = "/cocktails/Ordinary_Drink">Ordinary Drinks</NavLink>
                        </li>
                        <li className = {s['navigation-menu__item']}>
                            <NavLink className = {s['navigation-menu__link']}
                                     activeClassName = {s.active}
                                     to = "/cocktails/Alcoholic">
                                Alcoholic
                            </NavLink>
                        </li>
                        <li className = {s['navigation-menu__item']}>
                            <NavLink className = {s['navigation-menu__link']}
                                     activeClassName = {s.active}
                                     to = "/cocktails/Non_Alcoholic">
                                Non-Alcoholic
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <SearchContainer />
        </nav>
    )
}

export default Navigation