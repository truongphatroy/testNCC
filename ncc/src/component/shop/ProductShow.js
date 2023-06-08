import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getData } from "../../store/actions/action";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";
import ProductShowCard from "./ProductShowCard";
import PaginationTitle from "./PaginationTitle";

import classes from "./ProductShow.module.scss";

const ProductShow = () => {
  const dispatch = useDispatch();
  const [categoryProduct, setCategoryProduct] = useState("");
  const [currentpage, setCurrentpage] = useState(1);

  // refer to form for searching
  const inputRef = useRef();
  const selectedRef = useRef();

  // accsess all product state
  const test = useSelector((state) => state);
  console.log("test", test);
  const imageData = useSelector((state) => state?.ProductList?.ListImage);
  console.log(imageData);

  let filterData = [];
  let dataToShow = [];
  let totalPage = 1;
  let startProduct = 0;
  let endProduct = 0;
  console.log("33 shop outside");

  // Loading Product list again when start going to page
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  // Filter for click on category button in sidebar
  const handleSelectedSideBar = (event) => {
    // return input form to initail value
    inputRef.current.value = "";
    selectedRef.current.value = "all";
    setCategoryProduct(event);
    setCurrentpage(1);
  };

  // Filter for inputting
  const handleEnteredCategory = (event) => {
    selectedRef.current.value = "all";
    setCategoryProduct(event.target.value);
    setCurrentpage(1);
  };

  // Filter for selection
  const handleSelectedCategory = (event) => {
    inputRef.current.value = "";

    setCategoryProduct(event.target.value);
    setCurrentpage(1);
  };

  if (imageData && imageData?.length > 0) {
    // when openning page or show all product
    if (!categoryProduct || categoryProduct === "all") {
      filterData = imageData;
    } else {
      // before use filter show all
      filterData = imageData?.filter((item) =>
        item?.category.includes(categoryProduct)
      );
    }

    // calculate data for Pagination component
    if (filterData) {
      totalPage = Math.ceil(filterData.length / 6);
      let startIndex = (currentpage - 1) * 6;
      let endInded = startIndex + 6;
      // cut element to show in a page
      dataToShow = filterData.slice(startIndex, endInded);

      // to show in PaginationTitle component
      if (totalPage == 0) {
        // No found product
        startProduct = 0;
        endProduct = 0;
      } else if (currentpage == totalPage) {
        //final page
        startProduct = (currentpage - 1) * 6 + 1;
        endProduct = filterData.length;
      } else {
        startProduct = (currentpage - 1) * 6 + 1;
        endProduct = dataToShow.length;
      }

      // handle change to next page
      const onPageNextChange = (page) => {
        if (currentpage < totalPage) {
          setCurrentpage((preState) => preState + 1);
        }
      };

      // handle change to prev page
      const onPagePreChange = () => {
        if (currentpage >= 2) {
          setCurrentpage((preState) => preState - 1);
        }
      };

      return (
        <div className={classes.ProductShow}>
          {/* sidebar */}
          <Sidebar onClick={handleSelectedSideBar} />
          {/* content */}
          <div className={classes.ProductShowContent}>
            {/* form */}
            <form className='d-flex justify-content-between gap-5 '>
              <div className='input-group mb-3 '>
                <input
                  onChange={handleEnteredCategory}
                  ref={inputRef}
                  type='text'
                  className='form-control'
                  placeholder='Username'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>
              <select
                ref={selectedRef}
                onChange={handleSelectedCategory}
                className='form-select form-select-lg mb-3'
                aria-label='.form-select-lg example'
              >
                <option defaultValue value='all'>
                  Open this select menu
                </option>
                <option value='iphone'>iphone</option>
                <option value='ipad'>ipad</option>
                <option value='airpod'>airpod</option>
                <option value='watch'>watch</option>
                <option value='other'>other</option>
              </select>
            </form>
            {/* pagination */}
            <PaginationTitle
              startProduct={startProduct}
              endProduct={endProduct}
              totalProduct={filterData.length}
            />
            <Pagination
              dataToShow={dataToShow}
              totalPage={totalPage}
              onPageNextChange={onPageNextChange}
              onPagePreChange={onPagePreChange}
              currentpage={currentpage}
            />

            {/* Show 4 product (3pcs / row) */}
            <ProductShowCard
              numberOfCard={3}
              imageList={dataToShow?.slice(0, 6)}
              linkDetail={false}
              // onClick={handleClickShowDetail}
            />
          </div>
        </div>
      );
    }
  }
};
export default ProductShow;
