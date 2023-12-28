import React from "react";
import Hero from "./Hero";
import Feature from "./Feature";
import FeaturedProducts from "./FeaturedProducts";
import Banner from "./Banner";
import NewArrivals from "./NewArrivals";
import MultyBanner from "./MultyBanner";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Feature />
      <FeaturedProducts />
      <Banner />
      <NewArrivals />
      <MultyBanner />
    </div>
  );
};

export default Home;
