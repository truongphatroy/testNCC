import React from "react";
import Banner from "../component/home/Banner";
import Category from "../component/home/Category";
import ListImage from "../component/home/ListImage";
import OtherInfo from "../component/home/OtherInfo";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ListImage />
      <OtherInfo />
    </div>
  );
};

export default HomePage;
