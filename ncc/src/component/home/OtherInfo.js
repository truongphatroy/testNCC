import React from "react";

// use react-bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import classes from "./OtherInfo.module.scss";

const OtherInfo = () => {
  return (
    <div className={classes.OtherInfo}>
      <div className={classes.OtherCard}>
        <Container>
          <Row className={classes.row}>
            <Col>
              <h4>FREE SHIPPING</h4>
              <p>Free shipping worldwide</p>
            </Col>
            <Col>
              <h4>24 X 7 SERVICE</h4>
              <p>Free shipping worldwide</p>
            </Col>
            <Col>
              <h4>FESTIVAL OFFER</h4>
              <p>Free shipping worldwide</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='d-flex justify-content-between'>
        <div className={classes.context}>
          <h1>LET'S BE FRIENDS!</h1>
          <p>Nisi nisi tempor consequat laboris nisi</p>
        </div>
        <Form className='d-flex align-items-center'>
          <Form.Control
            type='search'
            placeholder='Enter your email address'
            className={`me-2 ${classes.input}`}
            aria-label='Search'
          />
          <Button className={classes.btn} variant='outline-success'>
            Subscribe
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default OtherInfo;
