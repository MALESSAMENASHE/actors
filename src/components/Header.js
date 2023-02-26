import React from 'react'
import { Outlet } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <main>
                <header>
                    <nav>
                                <h1>Played or Not</h1> 
                    </nav>
                </header>
            </main>
            <Outlet />
   
        </>
    )
}

export default Header