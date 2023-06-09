import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';
import SwiperBanner from '../components/SwiperBanner/SwiperBanner';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SwiperBanner></SwiperBanner>
            <Footer></Footer>
        </div>
    );
};

export default Main;