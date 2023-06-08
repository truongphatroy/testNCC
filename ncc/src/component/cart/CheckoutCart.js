import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./CheckoutCart.module.scss";
import { useSelector } from "react-redux";
import { userArr } from "../../storage/storage";
import AlertComponent from "./Alert";

const CheckoutCart = () => {
  const navigate = useNavigate();
  const orderdProducts = useSelector((state) => state.Cart.items);
  const orderdTotalAmount = useSelector((state) => state.Cart.totalAmount);
  const activeUserEmail = useSelector((state) => state.Login.activeUser.email);
  const activeStatus = useSelector((state) => state.Login.stateLogin);
  const activeUserInformation = userArr.find(
    (user) => user?.email === activeUserEmail
  );
  console.log("orderdProduct", activeUserEmail);
  console.log("activeUserInformation", activeUserInformation?.phone);

  const [fullname, setFullname] = useState(
    activeUserInformation?.fullName || ""
  );
  const [email, setEmail] = useState(activeUserInformation?.email || "");
  const [phone, setPhone] = useState(activeUserInformation?.phone || "");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [modal, setModal] = useState(false);

  /* validate input */
  function validate(inputFullname, inputEmail, inputPhone, inputAddress) {
    let isValidate = true;
    let error = "";

    // fullname was input or not
    console.log("fullname error", inputFullname?.trim().length === 0);

    if (inputFullname?.trim().length === 0) {
      console.log("fullname error");

      error += "Fullname was not entered! ";
      isValidate = false;
    }

    // email was input or not
    if (inputEmail?.trim().length === 0) {
      error += "Email was not entered! ";
      isValidate = false;
    }

    // Phone was input or not
    if (inputPhone?.trim().length === 0) {
      error += "Phone was not entered! ";
      isValidate = false;
    }
    // Address was input or not
    if (inputAddress?.trim().length === 0) {
      error += "Address was not entered! ";
      isValidate = false;
    }

    setErrorMessage(error);
    console.log(isValidate);

    return isValidate;
  }

  const handleFullname = (event) => {
    setFullname(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleAdress = (event) => {
    setAddress(event.target.value);
  };

  const handlePlaceOrder = () => {
    // validate input
    const isValidate = validate(fullname, email, phone, address);

    // if user is entered
    if (isValidate) {
      setModal(true);
      setTimeout(() => {
        navigate("/shop");
      }, 1000);
    }
  };

  return (
    <div>
      <h4 className='mt-5'>BILLING DETAILS</h4>
      <div className={classes.shopCart}>
        {/* detail table */}
        <div className='row'>
          <div className='col-lg-7 '>
            <form className='row g-3 text-secondary'>
              <div className='col-12'>
                <label htmlFor='inputAddress' className='form-label'>
                  FULL NAME:
                </label>
                <input
                  style={{ fontStyle: "normal" }}
                  type='text'
                  className='form-control fw-light'
                  placeholder='Enter Your Full Name Here!'
                  value={fullname}
                  onChange={handleFullname}
                />
              </div>
              <div className='col-12'>
                <label htmlFor='inputAddress2' className='form-label'>
                  EMAIL:
                </label>
                <input
                  style={{ fontStyle: "normal" }}
                  type='email'
                  className='form-control fw-light'
                  placeholder='Enter Your Email Here!'
                  value={email}
                  onChange={handleEmail}
                />
              </div>

              <div className='col-12'>
                <label htmlFor='inputAddress2' className='form-label'>
                  PHONE NUMBER:
                </label>
                <input
                  style={{ fontStyle: "normal" }}
                  type='text'
                  className='form-control fw-light '
                  placeholder='Enter Your Phone Number Here!'
                  value={phone}
                  onChange={handlePhone}
                />
              </div>
              <div className='col-12'>
                <label htmlFor='inputAddress2' className='form-label'>
                  ADDRESS:
                </label>
                <input
                  style={{ fontStyle: "normal" }}
                  type='text'
                  className='form-control fw-light'
                  placeholder='Enter Your Address Here!'
                  value={address}
                  onChange={handleAdress}
                />
              </div>
              <div className='col-12'>
                <button
                  type='button'
                  className='btn btn-dark rounded-0 text-light'
                  onClick={handlePlaceOrder}
                >
                  Place order
                </button>
                <p className='text-danger fs-6 pt-2'>
                  {errorMessage !== "" && errorMessage}
                </p>
              </div>
            </form>
          </div>
          {/* YOUR ORDER */}
          <div className='col-lg-5 bg-light p-lg-4 p-md-2'>
            <h4 className='fw-normal fs-5 mt-4 mb-4'>YOUR ORDER</h4>
            <table className='table table-border'>
              <tbody>
                {orderdProducts.map((orderdProduct) => (
                  <tr
                    key={orderdProduct.id}
                    className='fst-normal fs-6 text-secondary me-auto'
                  >
                    <th scope='row'>{orderdProduct.product}</th>
                    <td className='text-center align-middle fw-light fs-6'>
                      {parseInt(orderdProduct.price).toLocaleString("vi-VN")}{" "}
                      VND x {orderdProduct.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className='d-flex mt-4 justify-content-between'>
              <p className='fw-light fs-5 fw-normal'>TOTAL</p>
              <p className='fw-light fs-5'>
                {parseInt(orderdTotalAmount).toLocaleString("vi-VN")}
                VND
              </p>
            </div>
            {modal && (
              <div style={{ maxWidth: "400px" }}>
                <AlertComponent content='Congratulations on your successful purchase!' />
              </div>
            )}
          </div>
        </div>
        <div className={classes.ShowDetailRelation}></div>
      </div>
    </div>
  );
};

export default CheckoutCart;
