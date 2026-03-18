import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import LeatestNews from '../LatestNews/LeatestNews';
import NavBar from '../NavBar/NavBar';


const Root = () => {
    return (
        <div>
            <header>
               <Header></Header>
               <section>
                    <LeatestNews></LeatestNews>
               </section>
               <nav className='w-11/12 mx-auto'>
                <NavBar>

                </NavBar>
               </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Root;