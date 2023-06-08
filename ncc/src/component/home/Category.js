import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import classes from "./Category.module.scss";

import img1 from "../../image/product_1.png";
import img2 from "../../image/product_2.png";
import img3 from "../../image/product_3.png";
import img4 from "../../image/product_4.png";
import img5 from "../../image/product_5.png";

const Category = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("shop");
  };
  const images = [img1, img2, img3, img4, img5];
  return (
    // use boostrap for render image card
    <div className={classes.CategoryCover}>
      <p>CAREFULLY CREATED COLLECTIONS</p>
      <h1>BROWSE OUR CATEGORIES</h1>
      {/* first row */}
      <Row xs={1} md={2} className='g-4'>
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col key={idx}>
            <Card className={classes.CategoryCard}>
              <Card.Img
                src={images[idx]}
                variant='top'
                className={classes.Category}
                onClick={handleClick}
              />
              <Card.Body></Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* second row */}
      <Row xs={1} md={3} className='g-4'>
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx}>
            <Card className={classes.CategoryCard}>
              <Card.Img
                src={images[idx + 2]}
                variant='top'
                className={classes.Category}
                onClick={handleClick}
              />
              <Card.Body></Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Category;
