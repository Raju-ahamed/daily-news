import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import image from "../../assets/user.png"
import './NavBar.css'
import { AuthContext } from '../Context/AuthProvider';

const NavBar = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const handleSginOut = () => {
        userLogOut().then().catch();
    }
    return (
        <div className='w-11/12 my-5 mx-auto  flex justify-between items-center'>
            <div >

            </div>
            <div className='flex gap-5 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex gap-5'>
                <img src={image} alt="" srcset="" />
                {
                    user ?
                        <button onClick={handleSginOut} className='btn btn-primary px-4'>sign out</button>
                        :
                        <button className='btn btn-primary px-4'><NavLink to="/login">log in</NavLink></button>
                }
            </div>
        </div>
    );
};

export default NavBar;