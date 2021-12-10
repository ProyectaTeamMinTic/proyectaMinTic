import React from 'react'
import { Outlet } from 'react-router';
import Navbar from 'components/Navbar'
const PublicLayout = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default PublicLayout
