import React from 'react'
import { Outlet } from 'react-router';
import Navbar from 'components/Navbar'
const PublicLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default PublicLayout
