import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Banner.module.scss";
import bannerImage from "../../image/banner1.jpg";

const Banner = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("shop");
  };
  return (
    <div
      className={classes.banner}
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "500px",
      }}
    >
      <div className={classes.banerInfo}>
        <p>NEW INSPIRATION 2020</p>
        <h1>20% OF ON NEW SEASON</h1>
        <button
          onClick={handleButton}
          type='button'
          className={classes.btnBanner}
        >
          Browse Collections
        </button>
      </div>
    </div>
  );
};

export default Banner;
