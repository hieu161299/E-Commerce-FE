import React from 'react';
import Header from "./header/Header";
import Banner from "./banner/Banner";
import SlideBrand from "./slide_brand/SlideBrand";
import TopSales from "./top_saler/TopSales";

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <SlideBrand></SlideBrand>
            <TopSales></TopSales>
        </div>
    );
};

export default HomePage;