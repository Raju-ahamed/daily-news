import React from 'react';
import NavBar from '../NavBar/NavBar';
import RightAside from '../HomeLayout/RightAside';

const Details = () => {
    return (
        <div>
            <NavBar></NavBar>

            <div className='grid mx-auto w-11/12 mt-20 grid-cols-12'>
                <div className='col-span-9 text-center'>
                    <h1 className='font-bold text-2xl text-red-500'>Disgine Full details letter</h1>

                </div>
                <div className='col-span-3'>
                    <RightAside></RightAside>
                </div>
            </div>
        </div>
    );
};

export default Details;