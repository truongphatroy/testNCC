import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { addCart, getData } from "../store/actions/action";

import ProductShowCard from "../component/shop/ProductShowCard";

import classes from "./DetailPage.module.scss";

/* Component function */
const DetailPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const { productId } = useParams();
  console.log("aa", productId);

  const test = useSelector((state) => state);
  console.log(test);

  /* variable of user */
  const activeUser = useSelector(
    // (state) => state?.ActiveUserInfo?.activeUserProfile
    (state) => state?.Login?.activeUser?.email
  );
  console.log(activeUser);

  /* variable for accessing to all products */
  const productList = useSelector((state) => state?.ProductList?.ListImage);
  console.log(productList);

  /* variable of current product infor */
  const selectedProductCategory = useSelector(
    (state) => state?.ShowDetail?.category
  );

  // const selectedProductId = useSelector((state) => state?.ShowDetail?.itemId);
  const [selectedProductAmount, setSelectedProductAmount] = useState(1);

  const selectedProduct = productList?.find(
    (product) => product?._id?.$oid === productId
  );
  console.log(selectedProduct);

  const productDescription = selectedProduct?.long_desc;

  const productRelateList = productList?.filter(
    (product) =>
      product?.category === selectedProductCategory &&
      product?._id.$oid !== productId
  );

  // convert price to vi string style
  const productPrice = parseInt(selectedProduct?.price).toLocaleString("vi-VN");

  /* variable of login status infor */
  const loginStatus = useSelector((state) => state.Login);

  console.log(selectedProduct);
  console.log(productList);
  console.log(loginStatus);

  const handleAddtoCart = () => {
    let item = {
      img: selectedProduct?.img1,
      product: selectedProduct?.name,
      price: parseInt(selectedProduct?.price),
      amount: parseInt(selectedProductAmount),
      id: selectedProduct?._id?.$oid,
      productTotalAmount:
        parseInt(selectedProductAmount) * parseInt(selectedProduct?.price),
      orderUser: activeUser,
    };
    console.log(item);
    console.log("testcart", addCart(item));

    dispatch(addCart(item));
  };

  const handleDecrease = () => {
    if (selectedProductAmount > 1)
      setSelectedProductAmount((preState) => preState - 1);
  };
  const handleIncrease = () => {
    if (selectedProductAmount < 10)
      setSelectedProductAmount((preState) => preState + 1);
  };

  if (selectedProduct) {
    return (
      <div className='container mt-4'>
        <div className='row '>
          <div className='col-md-1 col-lg-1 p-0 d-flex'>
            <div className=' align-self-center'>
              <img className={classes.smallImage} src={selectedProduct.img1} />
              <img className={classes.smallImage} src={selectedProduct.img2} />
              <img className={classes.smallImage} src={selectedProduct.img3} />
              <img className={classes.smallImage} src={selectedProduct.img4} />
            </div>
          </div>
          <div className='col-md-6 col-lg-5 '>
            <img className={classes.bigImage} src={selectedProduct.img1} />
          </div>
          <div className='col-md-5 col-lg-6 '>
            <h4>{selectedProduct.name}</h4>
            <p className='fw-light fs-6'>{productPrice} VND</p>
            <p className='fw-light fs-6'>{selectedProduct.short_desc}</p>
            <p className=''>
              CATEGORY:{` `}
              <span className='fw-light'>{selectedProduct.category}</span>
            </p>
            <div className='input-group mt-5 mb-3 '>
              <div className='d-flex align-items-center border border-secondary'>
                <input
                  style={{ maxWidth: "150px" }}
                  type='text'
                  className='form-control border-0 bg-white'
                  placeholder='QUANTITY'
                  disabled
                ></input>
                <div className='d-flex align-items-center me-2'>
                  <AiFillCaretLeft onClick={handleDecrease} />
                  <span className='d-flex align-items-center ms-2 me-2'>
                    {selectedProductAmount}
                  </span>
                  <AiFillCaretRight onClick={handleIncrease} />
                </div>
              </div>
              <button
                onClick={handleAddtoCart}
                className='btn btn-dark input-group-text text-light fw-light'
                id='basic-addon2'
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className=''>
          <button
            type='button'
            className='btn btn-dark rounded-0 mt-4 fw-light'
          >
            DESCRIPTION
          </button>
          <h4 className='fw-normal mt-3 fs-5'>PRODUCT DESCRIPTION</h4>
          <p className='fw-light lh-1' style={{ whiteSpace: "pre-line" }}>
            {productDescription}
          </p>
        </div>
        <div className={classes.ShowDetailRelation}>
          <h4 className='fw-normal mt-5 fs-5'>RELATED PRODUCT</h4>
          <ProductShowCard numberOfCard={4} imageList={productRelateList} />
        </div>
      </div>
    );
  }
};
export default DetailPage;
