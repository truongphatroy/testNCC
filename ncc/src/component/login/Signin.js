import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { checkExistingUser } from "../../storage/checkUser";
import { updateCart, signin } from "../../store/actions/action";
import {
  saveToStorage,
  keyOfActiveUser,
  getFromStorage,
} from "../../storage/storage";
import AlertComponent from "../cart/Alert";
import classes from "./Signin.module.scss";
import bannerImage from "../../image/banner1.jpg";

const Signin = () => {
  const navigate = useNavigate();
  const [enteredEmail, setEnterredEmail] = useState("");
  const [enteredPassword, setEnterredPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const test = useSelector((state) => state);
  console.log("test", test);
  console.log("sigin");

  // Validate input function
  function validate(inputEmail, inputPassword) {
    let isValidate = true;
    let error = "";

    // email was input or not
    if (inputEmail?.trim().length === 0) {
      error += "Email was not entered! ";
      isValidate = false;
    }

    // passwork was input or not
    if (inputPassword?.trim().length === 0) {
      error += "Password was not entered! ";
      isValidate = false;
    }

    setErrorMessage(error);
    return isValidate;
  }

  const handleChangeEmail = (event) => {
    setEnterredEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setEnterredPassword(event.target.value);
  };

  // handling action when submit
  const handleSignin = () => {
    // validate input
    const isValidate = validate(enteredEmail, enteredPassword);

    // if user is entered
    if (isValidate) {
      // and existing
      if (checkExistingUser(enteredEmail, enteredPassword)) {
        const user = checkExistingUser(enteredEmail, enteredPassword);
        console.log("user", user);

        saveToStorage(keyOfActiveUser, user);
        dispatch(signin(user));
        // update cart
        console.log("store", getFromStorage(`CartList__${user?.email}`));
        console.log("store", `CartList__${user?.email}`);

        if (getFromStorage(`CartList__${user?.email}`)) {
          const updatedCart = getFromStorage(`CartList__${user?.email}`);
          dispatch(updateCart(updatedCart));
        } else {
          // default initial value
          const innitailUpdatedCart = {
            items: [],
            totalAmount: 0,
          };
          dispatch(updateCart(innitailUpdatedCart));
        }
        setShowModal(true);
        setTimeout(() => {
          navigate("/shop"); // go to shop
        }, 1000);
      } else {
        // user not existing
        setEnterredPassword("");
        setErrorMessage("The user is not existing! Please check again.");
      }
    } else {
      // only show error validate potition !
    }
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
        height: "100vh",
      }}
    >
      <div className={classes.loginCard}>
        <div className='card border-0'>
          <form className='mx-md-4 mx-sm-1 fw-light'>
            <h1 className='text-center fw-light text-secondary mb-4'>
              Sign In
            </h1>
            <input
              onChange={handleChangeEmail}
              type='email'
              className={`mb-0 fw-light fs-5 pt-3 pb-3 ${classes.inputForm1}`}
              placeholder='Email'
            />
            <input
              onChange={handleChangePassword}
              type='password'
              className={`mb-0 fw-light fs-5 pt-3 pb-3  ${classes.inputForm2}`}
              placeholder='Password'
              value={enteredPassword}
            />

            <div className='mb-4'></div>
            <div className='d-grid'>
              <button
                onClick={handleSignin}
                className='btn btn-dark text-light py-3 rounded-0 text-uppercase fw-light'
                type='button'
              >
                Sign in
              </button>
              <p className='text-danger fs-6 pt-2'>
                {errorMessage !== "" && errorMessage}
              </p>
              {showModal && <AlertComponent content='successful Login!' />}

              <p className='text-center my-5'>
                Create an account?{" "}
                <Link className={classes.Link} to='/signup'>
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
