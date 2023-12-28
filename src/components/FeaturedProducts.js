import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart as solidCart } from "@fortawesome/free-solid-svg-icons";

const FeaturedProducts = () => {
  // Products
  var products = [
    {
      image: "vgkto97up3w1doo4o47m",
      name: "Cartoon Astronaut Shirts",
      companyName: "Puma",
      rating: 4,
      price: 799,
    },
    {
      image: "o8dkzpruoe2hduuvauft",
      name: "Stylish Casual Shirt",
      companyName: "Puma",
      rating: 3,
      price: 679,
    },
    {
      image: "bzxqraf9ylwtzhnvp8ft",
      name: "Summer Men's Shirt",
      companyName: "Adidas",
      rating: 5,
      price: 1024,
    },
    {
      image: "uwftq0hichymaas4xdbv",
      name: "Cool Men's Shirt",
      companyName: "Reebok",
      rating: 4,
      price: 899,
    },
    {
      image: "gbj1exd5x6djv9ahyd3z",
      name: "Men's Winter Shirt",
      companyName: "Under Armour",
      rating: 4,
      price: 1199,
    },
    {
      image: "mev6xrwm8nnk3agirrqr",
      name: "Classic Men's Polo",
      companyName: "Lacoste",
      rating: 5,
      price: 899,
    },
    {
      image: "uspfpsrewdluqypb0cyl",
      name: "Women's Denim Shorts",
      companyName: "Puma",
      rating: 3,
      price: 599,
    },
    {
      image: "z797ybnv6lz7l0luwc0r",
      name: "Men's Casual Shirts",
      companyName: "Adidas",
      rating: 4,
      price: 699,
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
      <h2>Featured Products</h2>
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

export default FeaturedProducts;
