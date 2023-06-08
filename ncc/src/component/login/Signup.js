import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { saveToStorage, userArr, keyOfUserArr } from "../../storage/storage";
import AlertComponent from "../cart/Alert";
import classes from "./Signup.module.scss";
import bannerImage from "../../image/banner1.jpg";

const Signup = () => {
  const navigate = useNavigate();
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  console.log("render");

  // Validate function
  function validate(newUser) {
    let isValidate = true;
    let error = "";
    // fullname was input or not
    if (newUser?.fullName?.trim().length === 0) {
      error += "Full name was not entered! ";
      isValidate = false;
    }
    // email was input or not
    if (newUser?.email?.trim().length === 0) {
      error += "Email was not entered! ";

      isValidate = false;
    }
    if (newUser?.email.includes("@") !== true) {
      error += "Email has to include @! ";

      isValidate = false;
    }
    // Check email was registered or not
    for (let i = 0; i < userArr.length; i++) {
      if (userArr[i].email === newUser?.email) {
        error += "Please use other email! ";
        isValidate = false;
        break;
      }
    }
    // passwork was input or not
    if (newUser?.password?.trim().length === 0) {
      error += "Password was not entered! ";
      isValidate = false;
    }
    // password have to more than 8 letters
    if (newUser?.password.length <= 8) {
      error += "Letter number of Password has to more than 8 letters! ";
      isValidate = false;
    }
    // phone number was input or not
    if (newUser?.phone === "") {
      error += "Phone number was not entered!";
      isValidate = false;
    }
    setErrorMessage(error);
    return isValidate;
  }

  // handling action when submit
  const handleSignup = () => {
    const newUser = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
      isSignin: false,
    };

    const isValidate = validate(newUser);

    if (isValidate) {
      // add user into userArr
      userArr.push(newUser);
      // save to storage web
      saveToStorage(keyOfUserArr, userArr);
      // alert to inform to user
      // alert("Register new user Successful! \n Page navigates to sign in page.");
      // Navigate into other page
      setShowModal(true);
      setTimeout(() => {
        // navigate("/shop"); // go to shop
        navigate("/signin");
      }, 1000);
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
              Sign Up
            </h1>
            <input
              ref={fullNameRef}
              type='text'
              className={`mb-0 fw-light fs-5 pt-3 pb-3 ${classes.inputForm1}`}
              placeholder='Full Name'
            />
            <input
              ref={emailRef}
              type='email'
              className={`mb-0 fw-light fs-5 pt-3 pb-3  ${classes.inputForm2}`}
              placeholder='Email'
            />
            <input
              ref={passwordRef}
              type='password'
              className={`mb-0 fw-light fs-5 pt-3 pb-3  ${classes.inputForm2}`}
              placeholder='Password'
            />
            <input
              ref={phoneRef}
              type='number'
              className={`mb-0 fw-light fs-5 pt-3 pb-3  ${classes.inputForm2}`}
              placeholder='Phone'
            />

            <div className='mb-4'></div>
            <div className='d-grid'>
              <button
                onClick={handleSignup}
                className='btn btn-dark text-light py-3 rounded-0 text-uppercase fw-light'
                type='button'
              >
                Sign up
              </button>
              <p className='text-danger fs-6 pt-2'>
                {errorMessage !== "" && errorMessage}
              </p>
              {showModal && (
                <AlertComponent content='Congratulations on your successful SIGN UP!' />
              )}

              <p className='text-center mt-2'>
                Login?{" "}
                <Link className={classes.Link} to='/signin'>
                  Click
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
