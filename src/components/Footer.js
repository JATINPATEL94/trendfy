import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div id="footer">
      <div className="col">
        <h1 className="logo">Trendfy</h1>
        <h4>Contact</h4>
        <p>
          <strong>Address :</strong>562 Narol-Naroda Road, Ahmedabad- Gujarat,
          India
        </p>
        <p>
          <strong>Phone :</strong>+91 9316 **** 50
        </p>
        <p>
          <strong>Hours :</strong>10:00 - 18:00, Mon-Sat
        </p>
        <div className="socialicon">
          <h4>Follow Me On</h4>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <Link to="/shop" alt="Delivery Infomation">
          Shop
        </Link>
        <Link to="/about" alt="About Us">
          About Us
        </Link>
        <Link to="/contact" alt="Contact Us">
          Contact Us
        </Link>
        <Link to="/" alt="Terms & Conditions">
          Terms & Conditions
        </Link>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <Link to="/signin" alt="Sign In">
          Sign In
        </Link>
        <Link to="/cart" alt="View Cart">
          View Cart
        </Link>
        <Link to="/wishlist" alt="My Wishlist">
          My Wishlist
        </Link>
        <Link to="/help" alt="Help">
          Help
        </Link>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From PlayStore And AppStore</p>
        <div className="row">
          <img
            src="https://res.cloudinary.com/jatin-patel/image/upload/v1703252559/Trendfy/fx7ojbdquuetl8wyjumv.jpg"
            alt="AppStore"
          />
          <img
            src="https://res.cloudinary.com/jatin-patel/image/upload/v1703252559/Trendfy/esr3lm53f0cfp7acwhwp.jpg"
            alt="PlayStore"
          />
        </div>
        <p>Secured Payment Getways</p>
        <img
          src="https://res.cloudinary.com/jatin-patel/image/upload/v1703252559/Trendfy/mheohbwamwkf8rmd2gln.png"
          alt="payment"
        />
      </div>

      <div className="copyright">
        © 2024, Trendfy - JatinPatel All Right Not Reserved
      </div>
    </div>
  );
};

export default Footer;
