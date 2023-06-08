import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showDetail } from "../../store/actions/action";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import classes from "./ProductShowCard.module.scss";

const ProductShowCard = ({ numberOfCard, imageList }) => {
  const dispatch = useDispatch();
  function handleclick(category, itemId) {
    // go to the head of page
    window.scrollTo(0, 0);
    dispatch(showDetail(category, itemId));
  }
  const select = useSelector((state) => state);

  if (imageList && imageList?.length > 0) {
    return (
      <div>
        <Row
          xs={1}
          md={numberOfCard}
          className={`g-4 ${classes.rowProductCart}`}
        >
          {imageList.map((item) => (
            <Col key={item._id.$oid}>
              <Card
                className={classes.imageCard}
                onClick={() => handleclick(item.category, item._id.$oid)}
              >
                <Link
                  to={`/detail/${item._id.$oid}`}
                  className={classes.linkProduct}
                >
                  <Card.Img variant='top' src={item.img1} />
                  <Card.Body>
                    <Card.Title className={classes.Cardtitle}>
                      {item.name}
                    </Card.Title>
                    <Card.Text className={classes.Cardtext}>
                      {/* change price value to number, after that change to vi style number */}
                      {parseInt(item.price).toLocaleString("vi-VN")} VND
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
};

export default ProductShowCard;
