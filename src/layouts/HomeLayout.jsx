import React from 'react';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from 'daisyui/components/navbar';
import LeftAside from '../components/LeftAside/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../components/RightAside/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <Header/>
            <LatestNews/>
            <Navbar/>
            <main>
                <aside>
                    <LeftAside/>
                </aside>
                <Outlet/>
                <aside>
                    <RightAside/>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;