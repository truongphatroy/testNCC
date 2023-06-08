import React from "react";
import classes from "./CheckoutBanner.module.scss";

const CheckoutBanner = () => {
  return (
    <div className={classes.CheckoutBanner}>
      <h1>CHECKOUT</h1>
      <p>
        <span className='text-dark'>HOME/CART/</span>CHECKOUT
      </p>
    </div>
  );
};
export default CheckoutBanner;
