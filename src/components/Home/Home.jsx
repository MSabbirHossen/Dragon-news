import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className="text-center mt-20">
          
            <header>
                <Header/>
            </header>
            <main>
                <section className='left-nav'></section>
                <section className='news-content'>
                    <Outlet/>
                </section>
                <section className='right-nav'></section>
            </main>
        </div>
    );
};

export default Home;