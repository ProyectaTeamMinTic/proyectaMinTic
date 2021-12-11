import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';


const AuthLayout = () => {
    return (
        <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
            <div className='flex w-full h-full'>
                <div className='w-full h-full  overflow-y-scroll'>
                    <Link to='/'>
                        <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900 pl-9 pt-5' />
                    </Link>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;