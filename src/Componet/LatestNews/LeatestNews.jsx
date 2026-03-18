import React from 'react';
import Marquee from 'react-fast-marquee';

const LeatestNews = () => {
    return (
        <div className='flex items-center gap-2 w-11/12 mx-auto bg-base-100'>
            <h1 className='btn btn-secondary mx-3 my-2 p-2'>Latest News</h1>
            <Marquee className='font-bold' speed={60} pauseOnHover={true} gradient={false}>  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, corrupti?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, corrupti?</p>
            </Marquee>
        </div>
    );
};

export default LeatestNews;