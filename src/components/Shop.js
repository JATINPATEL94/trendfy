import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductContext from "../context/productContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart as solidCart } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const context = useContext(ProductContext);
  const { products, isViewProductData } = context;

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

  // Products View Functionality
  const navigate = useNavigate();
  const hendleProduct = (product) => {
    isViewProductData(product);
    navigate("/shop/product");
  };

  return (
    <>
      <div className="normalHero shopHero">
        <h2>Super Value Deals</h2>
        <p>Save More Coupons & up to 70% off!</p>
      </div>
      <div id="featuredProduct">
        {/* products */}
        <div className="productContainer">
          {products.map((product, index) => (
            <div
              className="product"
              key={index}
              onClick={() => hendleProduct(product)}
            >
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
    </>
  );
};

export default Shop;
