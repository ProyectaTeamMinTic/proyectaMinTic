import React from 'react'
import { Outlet } from 'react-router';
import Navbar from 'components/Navbar'
const PublicLayout = () => {
    return (
        <div className="flex flex-row md:flex-col flex-no-wrap h-screen">
            <Navbar />
            <section className="w-full min-h-screen bg-gray-200 font-sans relative">
                <Outlet />
            </section>
        </div>
    )
}

export default PublicLayout
