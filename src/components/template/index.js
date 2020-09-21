import React from 'react'
import NavBar from './../organisms/nav-bar'
import Main from './../organisms/main'
import Footer from './../organisms/footer'

import './style.css'

export default function Template({ navbar = <NavBar />, main = <Main />, footer = <Footer /> } = {}) {

    return (
        <div className='page-container'>
            <nav className='navbar-container'>
                {navbar}
            </nav>

            <main className='main-container'>
                {main}
            </main>

            <footer className='footer-container'>
                {footer}
            </footer>
        </div>
    )
}