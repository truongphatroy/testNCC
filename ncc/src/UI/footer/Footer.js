import React from "react";
import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className='container mt-2 pt-2'>
        <div className='text-center text-lg-start text-light'>
          <section className=''>
            <div className='container text-center text-md-start mt-2'>
              <div className='row mt-2'>
                <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-3'>
                  <h6 className='text-uppercase fw-bold'>customer services</h6>
                  <Link to='#' className='text-light'>
                    Help & Contact Us
                  </Link>
                  <br />

                  <Link to='#' className='text-light'>
                    Returns & Refunds
                  </Link>
                  <br />

                  <Link to='#' className='text-light'>
                    Online Store
                  </Link>
                  <br />

                  <Link to='#' className='text-light'>
                    Turms & Conditions
                  </Link>
                </div>

                <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-3'>
                  <h6 className='text-uppercase fw-bold'>company</h6>

                  <Link to='#' className='text-light'>
                    What We Do
                  </Link>
                  <br />

                  <Link to='#' className='text-light'>
                    Available services
                  </Link>
                  <br />

                  <Link to='#' className='text-light'>
                    Latest Posts
                  </Link>
                  <br />

                  <Link to='#' className='text-light'>
                    FAQs
                  </Link>
                </div>

                <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-3'>
                  <h6 className='text-uppercase fw-bold'>social media</h6>
                  <Link to='#' className='text-light'>
                    Twitter
                  </Link>
                  <br />
                  <Link to='#' className='text-light'>
                    Instagram
                  </Link>
                  <br />
                  <Link to='#' className='text-light'>
                    Facebook
                  </Link>
                  <br />
                  <Link to='#' className='text-light'>
                    Pinterest
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
