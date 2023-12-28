import React from "react";

const MultyBanner = () => {
  return (
    <div id="multyBanner">
      {/* top banner */}
      <div className="topbanner">
        <div className="banner">
          <h4>Crazy Deals</h4>
          <h2>Buy 1 Get 1 Free</h2>
          <span>The Best Classic Dress is on sale at cara</span>
          <button className="normal">Learn More</button>
        </div>
        <div className="banner">
          <h4>Spring/Summer</h4>
          <h2>Upcomming Season</h2>
          <span>The Best Mens's Wear is on sale</span>
          <button className="normal">Collection</button>
        </div>
      </div>
      {/* bottom banner */}
      <div className="bottombanner">
        <div className="banner">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner">
          <h2>NEW COLLECTION</h2>
          <h3>Spring/Summer 2024</h3>
        </div>
        <div className="banner">
          <h2>Women's Wear</h2>
          <h3>New Trendy Prints</h3>
        </div>
      </div>
    </div>
  );
};

export default MultyBanner;
