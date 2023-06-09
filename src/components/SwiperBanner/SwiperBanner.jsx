import React from 'react';
// import Swiper from 'swiper';
import Banner from '../Banner/Banner';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
// import Banner from "../../components/banner/Banner";

const SwiperBanner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination]}
            >
                <SwiperSlide>
                    <Banner
                        img="https://i.postimg.cc/nLkt9hPG/miss-zhang-jz0x-Igcwy-L0-unsplash.jpg"
                        text="Capture the Magic: Welcome to PhotoCraft Summer School!"
                    ></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner
                        img="https://i.postimg.cc/Px7fNqCF/marco-xu-To-UPBCO62-Lw-unsplash.jpg"
                        text="Embrace the Artistry: Discover PhotoCraft Summer School's Creative Journey!"
                    ></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner
                        img="https://i.postimg.cc/9Xv29wZY/jeff-hopper-i-Ct-JF-A5hvs-unsplash.jpg"
                        text="Unleash Your Imagination: Join PhotoCraft Summer School for a Summer of Creativity!"
                    ></Banner>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperBanner;