import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/actions/action";
import DetailItem from "./DetailItem";
import ProductCard from "./ProductCard";

import classes from "./ListImage.module.scss";

const ListImage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const imageList = useSelector((state) =>
    // access to state of store and get 8 first elements
    state.ProductList?.ListImage?.slice(0, 8)
  );

  const showModal = useSelector((state) => state.Popup.isPopup);

  // use boostrap to render image list
  if (imageList && imageList?.length > 0) {
    return (
      <div className={classes.ListImage}>
        <div className={classes.ListImageTitle}>
          <p>MADE THE HARD WAY</p>
          <h1>TOP TRENDING PRODUCTS</h1>
        </div>
        {/* Show product list (4pcs / row) */}
        <ProductCard numberOfCard={4} imageList={imageList} />
        {/* show Modal when click on product */}
        {showModal && <DetailItem />}
      </div>
    );
  }
};

export default ListImage;
