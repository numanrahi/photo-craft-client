import React from "react";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import SwiperBanner from "../components/SwiperBanner/SwiperBanner";
import GallerySection from "../components/GallerySection/GallerySection";
import TopClasses from "../components/TopClasses/TopClasses";
import TopInstructors from "../components/TopInstructors/TopInstructors";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SwiperBanner></SwiperBanner>
      <GallerySection></GallerySection>
      <TopClasses></TopClasses>
      <TopInstructors></TopInstructors>
      <Footer></Footer>
    </div>
  );
};

export default Main;
