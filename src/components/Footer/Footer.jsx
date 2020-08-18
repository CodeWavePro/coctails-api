import React from 'react'
import s from './Footer.module.scss'

let Footer = ( props ) => {
	return (
        <footer className = { s.footer }>
            © 2020, <a href = "https://codewave.pro/" target = "_blank">CodeWavePro</a>
        </footer>
    )
}

export default Footer