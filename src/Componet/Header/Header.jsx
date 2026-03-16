import React from 'react';
import logo from "../../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='text-center mt-4 text-accent'>
            <img className=' mx-auto w-100 m-2' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p><span className='text-primary'>{format(new Date(), "EEEE")} </span>{format(new Date(), "MMMM dd, uuuu")} </p>
        </div>
    );
};

export default Header;