import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../context/productContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart as solidCart } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const context = useContext(ProductContext);
  const { viewProductData, getRandomProducts, cart, setCart } = context;

  // Handle Product Quantity
  const [quantity, setQuantity] = useState(1);

  // Handle Add To Cart
  const handleCart = (viewProductData) => {
    viewProductData.quantity = quantity;
    setCart([...cart, viewProductData]);
  };

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
    <div id="viewProduct">
      <div className="singleProduct">
        <div className="singleProductImage">
          <img
            src={`https://res.cloudinary.com/jatin-patel/image/upload/v1703168227/Trendfy/${viewProductData.image}`}
            alt={viewProductData.name}
          />
        </div>
        <div className="singleProductDetails">
          <h6>
            <Link to={"/"}>Home / </Link>
            <Link to={"/shop"}> Shop / </Link>
            <Link to={"/shop/product"}>Product / </Link>
            {viewProductData.name}
          </h6>
          <h4>{viewProductData.name}</h4>
          <h2>{viewProductData.price}</h2>
          <select>
            <option> Select Size</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="Small">Small</option>
            <option value="Large">Large</option>
          </select>
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              setQuantity(value);
            }}
          />
          <button
            className="normal"
            onClick={() =>
              handleCart(viewProductData, (viewProductData.quantity = quantity))
            }
          >
            Add To Cart
          </button>
          <h4>Product Details</h4>
          <span>{viewProductData.description}</span>
        </div>
      </div>
      <div id="featuredProduct">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morder Desing</p>
        {/* products */}
        <div className="productContainer">
          {getRandomProducts(4).map((product, index) => (
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
    </div>
  );
};

export default Product;
