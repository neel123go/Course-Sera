import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-primary md:px-20 px-2 h-auto">
            <div className="navbar-start">
                <Link to="/home" className="btn btn-ghost normal-case text-xl text-base-100">Course Sera</Link>
            </div>
            <div className="navbar-center hidden lg:flex text-neutral ">
                <ul className="menu menu-horizontal p-0 text-lg">
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/mission'>Our Mission</Link></li>
                    <li><Link to='/successfulstudents'>Our Successful Student</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='dropdown dropdown-end'>
                    <label tabIndex="0" className="avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" color='#fcccae' /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 text-neutral">
                        <li><a>Services</a></li>
                        <li><a>Our Mission</a></li>
                        <li><a>Our Successful Student</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;