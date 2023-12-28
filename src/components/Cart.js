import React, { useContext, useState, useEffect } from "react";
import ProductContext from "../context/productContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Cart = () => {
  const contaxt = useContext(ProductContext);
  const { cart, setCart } = contaxt;

  //   Remove product in cart
  const handleRemoveItem = (productName) => {
    const updatedCart = cart.filter((product) => product.name !== productName);
    setCart(updatedCart);
  };

  //   Handle Quantity Change for each cart product
  const handleQuantityChange = (productName, newQuantity) => {
    setCart((cart) =>
      cart.map((product) =>
        product.name === productName
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  //   calculate subtotal
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    let newSubtotal = 0;
    cart.forEach((item) => {
      newSubtotal += item.price * item.quantity;
    });
    setSubtotal(newSubtotal);
  }, [cart]);

  // chek coupon code
  const [couponCode, setCouponCode] = useState("");
  const applyCouponCode = () => {
    // discount is 10% for "TRENDFY10"
    setDiscount(couponCode === "TRENDFY10" ? Math.floor(subtotal * 0.1) : 0);
    calculateSubtotal();
  };

  // calculate Subtotal after couponcode
  const [discount, setDiscount] = useState(0);
  const calculateSubtotal = () => {
    return Math.floor(subtotal - discount);
  };

  return (
    <div id="cart">
      <div className="normalHero cartHero">
        <h2>#cart</h2>
        <p>Add Your Copon Code And Save Upto 50%</p>
      </div>
      <div className="classitems">
        <table>
          <thead>
            <tr>
              <td>REMOVE</td>
              <td>IMAGE</td>
              <td>PRODUCT</td>
              <td>PRICE</td>
              <td>QUANTITY</td>
              <td>SUBOTOAL</td>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan={6}>
                  <h3 style={{ padding: "80px 0" }}>
                    No Products In The Cart.
                  </h3>
                </td>
              </tr>
            ) : (
              cart.map((product) => {
                return (
                  <tr key={product.name}>
                    <td>
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        onClick={() => handleRemoveItem(product.name)}
                      />
                    </td>
                    <td>
                      <img
                        src={`https://res.cloudinary.com/jatin-patel/image/upload/v1703168227/Trendfy/${product.image}`}
                        alt="cartitems"
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.price} ₹/-</td>
                    <td>
                      <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) => {
                          handleQuantityChange(
                            product.name,
                            parseInt(e.target.value, 10)
                          );
                        }}
                      />
                    </td>
                    <td>{product.price * product.quantity} ₹/-</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div className="totelcart">
        <div className="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input
              type="text"
              placeholder="Enter Your Coupon"
              value={couponCode}
              onChange={(e) => {
                setCouponCode(e.target.value);
              }}
            />
            <button className="normal" onClick={applyCouponCode}>
              Apply
            </button>
          </div>
        </div>
        <div className="subtotoel">
          <table>
            <tr>
              <td>Cart Subtotel</td>
              <td>{subtotal} ₹/-</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>{discount} ₹/-</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Totel</strong>
              </td>
              <td>{calculateSubtotal()} ₹/-</td>
            </tr>
          </table>
          <button className="normal">Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
