import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart as solidCart } from "@fortawesome/free-solid-svg-icons";
// import f1 from "../img/products/f1.jpg";

const NewArrivals = () => {
  // Products
  var products = [
    {
      image: "i2g9n6ejh6jggsk5wvzi",
      name: "Women's Formal ",
      companyName: "North Face",
      rating: 5,
      price: 1299,
    },
    {
      image: "bm1blt4mc2tdlrywaxur",
      name: "Women's Denim",
      companyName: "Levi's",
      rating: 3,
      price: 549,
    },
    {
      image: "cschm2aiihr7mb1h9rwh",
      name: "Boy's White Shirt",
      companyName: "Reebok",
      rating: 4,
      price: 699,
    },
    {
      image: "aaq8ixze9ubzegieqnbx",
      name: "Boy's Sports Shirt",
      companyName: "Adidas",
      rating: 5,
      price: 599,
    },
    {
      image: "qsejqpcw5y9of2oeewbj",
      name: "Men's Classic Shirt",
      companyName: "Tommy Hilfiger",
      rating: 4,
      price: 899,
    },
    {
      image: "klatzd2mhxef1gomq1oi",
      name: "Men's Brown Shirt ",
      companyName: "Calvin Klein",
      rating: 3,
      price: 799,
    },
    {
      image: "vtaouexsscjmi1cfj9fu",
      name: "Men's Active Shorts",
      companyName: "Under Armour",
      rating: 4,
      price: 849,
    },
    {
      image: "kojc786ha26ao6whxk1r",
      name: "Man's Simple Shirt",
      companyName: "Zara",
      rating: 5,
      price: 1199,
    },
  ];

  // Products Rating Functionality
  const renderStars = (productRating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= productRating) {
        // Render solid star for selected ratings
        stars.push(<FontAwesomeIcon key={i} icon={solidStar} />);
      } else {
        // Render regular star for unselected ratings
        stars.push(<FontAwesomeIcon key={i} icon={regularStar} />);
      }
    }
    return stars;
  };

  return (
    <div id="featuredProduct">
      <h2>New Arrivals</h2>
      <p>Summer Collection New Morder Desing</p>
      {/* products */}
      <div className="productContainer">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img
              key={product.image + "  " + index}
              src={`https://res.cloudinary.com/jatin-patel/image/upload/v1703168227/Trendfy/${product.image}`}
              alt="product"
            />
            <div className="description">
              <span>{product.companyName}</span>
              <h5>{product.name}</h5>
              <div className="star">{renderStars(product.rating)}</div>
              <h4>{product.price}</h4>
            </div>
            <Link to="/cart">
              <FontAwesomeIcon icon={solidCart} className="cart" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
