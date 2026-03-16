import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import LeatestNews from '../LatestNews/LeatestNews';


const Root = () => {
    return (
        <div>
            <header>
               <Header></Header>
               <LeatestNews></LeatestNews>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Root;