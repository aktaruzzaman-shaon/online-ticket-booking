import React from 'react'
import Navbar from '../Components/shared/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default RootLayout