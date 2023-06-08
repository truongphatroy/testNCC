import React, { useRef } from "react";
import classes from "./ShopFormmodule.scss";
const ShopForm = (props) => {
  const inputRef = useRef();
  const selectedRef = useRef();
  function handleEnteredCategory(inputRef) {
    props.onChangeEntered(inputRef);
  }
  function handleSelectedCategory(selectedRef) {
    props.onChangeSelected(selectedRef);
  }
  return (
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
  );
};

export default ShopForm;
