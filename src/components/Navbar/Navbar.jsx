import React from 'react';
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -ml-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>  
                        </ul>
                    </div>
                    <h2 class="text-sm md:text-lg lg:text-xl font-bold -ml-2">CS — Ticket System</h2>
                </div>
                <div className="flex ml-auto items-center">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a className='hover:text-white hover:bg-gradient-to-r from-violet-700 to-purple-500'>Home</a></li>
                            <li><a className='hover:text-white hover:bg-gradient-to-r from-violet-700 to-purple-500'>FAQ</a></li>
                            <li><a className='hover:text-white hover:bg-gradient-to-r from-violet-700 to-purple-500'>Blog</a></li>
                            <li><a className='hover:text-white hover:bg-gradient-to-r from-violet-700 to-purple-500'>Download</a></li>
                            <li><a className='hover:text-white hover:bg-gradient-to-r from-violet-700 to-purple-500'>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn bg-gradient-to-r from-violet-700 to-purple-500 text-white"> <FaPlus size={14} className="mr-1" />New Ticket</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

