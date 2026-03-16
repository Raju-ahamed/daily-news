import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';


const Root = () => {
    return (
        <div>
            <header>
               <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Root;