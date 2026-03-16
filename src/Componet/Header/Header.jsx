import React from 'react';
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className='text-center'>
            <img className=' mx-auto w-100 m-2' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p></p>
        </div>
    );
};

export default Header;