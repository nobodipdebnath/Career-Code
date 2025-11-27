import React from 'react';
import NavBar from '../components/Share/NavBar';
import Footer from '../components/Share/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;