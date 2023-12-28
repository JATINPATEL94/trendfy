import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faOutdent } from "@fortawesome/free-solid-svg-icons";
import { faIndent } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div id="header">
      <h1>Trendfy</h1>
      <ul
        className="navbar"
        style={isOpen === true ? { right: -300 } : { right: 0 }}
      >
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>{" "}
        </li>
        <li>
          <Link
            to="/shop"
            className={location.pathname === "/shop" ? "active" : ""}
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
        <li>
          {isOpen === true ? (
            <FontAwesomeIcon
              icon={faCartShopping}
              onClick={() => Navigate("/cart")}
            />
          ) : (
            <></>
          )}
        </li>
        <FontAwesomeIcon
          icon={faIndent}
          onClick={() => setIsOpen(true)}
          className="closemenu"
        />
      </ul>
      <div id="mobile">
        {isOpen === true ? (
          <>
            <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon
              icon={faOutdent}
              onClick={() => setIsOpen(false)}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
