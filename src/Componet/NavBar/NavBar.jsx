import React from 'react';
import { NavLink } from 'react-router';
import user from "../../assets/user.png"
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div >

            </div>
            <div className='flex gap-5 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex gap-5'>
                <img src={user} alt="" srcset="" />
                <button className='btn btn-primary px-5'><NavLink to="/login">log in</NavLink></button>
            </div>
        </div>
    );
};

export default NavBar;