import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import LeatestNews from '../LatestNews/LeatestNews';
import NavBar from '../NavBar/NavBar';
import LeftAside from '../HomeLayout/LeftAside';
import RightAside from '../HomeLayout/RightAside';


const Root = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LeatestNews></LeatestNews>
                </section>
                <nav className='w-11/12 mx-auto'>
                    <NavBar>

                    </NavBar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Root;