import React from "react";
import classes from "./Sidebar.module.scss";

const Sidebar = (props) => {
  function handleSelectedSideBar(event) {
    props.onClick(event);
  }
  return (
    <div className={classes.ProductShowSidebar}>
      <h4>CATEGORIES</h4>
      <ul className={classes.ProductShowList}>
        <li className={classes.ProductShowTitle}>APPLE</li>
        <li
          className={classes.subitem}
          onClick={() => handleSelectedSideBar("all")}
        >
          All
        </li>
        <li className={classes.mainitem}>IPHONE & MAC</li>
        <li
          onClick={() => handleSelectedSideBar("iphone")}
          className={classes.subitem}
        >
          IPhone
        </li>
        <li
          onClick={() => handleSelectedSideBar("ipad")}
          className={classes.subitem}
        >
          Ipad
        </li>
        <li
          onClick={() => handleSelectedSideBar("macbook")}
          className={classes.subitem}
        >
          Macbook
        </li>
        <li className={classes.mainitem}>WIRELESS</li>
        <li
          onClick={() => handleSelectedSideBar("airpod")}
          className={classes.subitem}
        >
          Airpod
        </li>
        <li
          onClick={() => handleSelectedSideBar("watch")}
          className={classes.subitem}
        >
          Watch
        </li>
        <li className={classes.mainitem}>OTHER</li>
        <li
          onClick={() => handleSelectedSideBar("Mouse")}
          className={classes.subitem}
        >
          Mouse
        </li>
        <li
          onClick={() => handleSelectedSideBar("Keyboard")}
          className={classes.subitem}
        >
          Keyboard
        </li>
        <li
          onClick={() => handleSelectedSideBar("Other")}
          className={classes.subitem}
        >
          Other
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
