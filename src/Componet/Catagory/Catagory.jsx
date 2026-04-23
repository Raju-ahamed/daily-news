import React from 'react';
import { use } from "react";
import { NavLink } from 'react-router';
import './Catagory.css'

const catagoryPromise = fetch('/categories.json').then(res => res.json())
const Catagory = () => {
    const catagories = use(catagoryPromise)
    return (
        <div>
            <h2 className='font-bold'>All Catagory</h2>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    catagories.map(catagory => (
                        <NavLink
                            to={`catagory/${catagory.id}`}
                            key={catagory.id}
                            className={"btn bg-base-200 border-0 justify-start hover:bg-blue-100"}
                        >{catagory.name}</NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Catagory;