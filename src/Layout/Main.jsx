import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';
import SwiperBanner from '../components/SwiperBanner/SwiperBanner';
import GallerySection from '../components/GallerySection/GallerySection';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SwiperBanner></SwiperBanner>
            <GallerySection></GallerySection>
            <Footer></Footer>
        </div>
    );
};

export default Main;