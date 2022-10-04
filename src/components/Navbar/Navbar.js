import React from 'react'
import logo from '../../assets/sh-logo.png'

export const Navbar = ({ children }) => {
    return (
        <header className='header_container'>
            {children[0]}
            <img className='class_logo' src={logo} alt="Logo Sneaker House" />
            {children[1]}
        </header>
    )
}

export default Navbar