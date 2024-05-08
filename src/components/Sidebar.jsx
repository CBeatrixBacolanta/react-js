import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();
    const currentPage = 'text-yellow-200 font-bold underline';

    const NavLinkFunction = () => {
        const sideBarLinks = new Map([
            ['Dashboard', '/dashboard'],
            ['Admin', '/admin'],
            ['Student', '/student'],
        ]);

        return (
            <ul className='pt-44 ml-8 font-sans'>
                {[...sideBarLinks].map(([key, value]) => (
                    <li key={value} className='mb-2'>
                        <NavLink
                        exact="true"
                        to={value}
                        className={`text-white ${location.pathname === value ? currentPage : ''}`}
                        >
                            {key}
                        </NavLink>
                    </li>
                ))}
            </ul>
        )
    };

  return (
    <aside>
        <div className='h-screen w-60 bg-blue-950 bottom-0'>
        <h1 className='absolute mt-28 ml-8 font-extrabold text-xl text-white font-sans'>Sidebar</h1>
        {NavLinkFunction()}
    </div>
    </aside>
  )
}

export default Sidebar