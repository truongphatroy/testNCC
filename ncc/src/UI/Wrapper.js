import React from "react";
import classes from "./Wrapper.module.scss";

export const Wrapper = ({ children }) => {
  return <div className={classes.WrapperStyle}>{children}</div>;
};
