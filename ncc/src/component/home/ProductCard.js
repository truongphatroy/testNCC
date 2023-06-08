import React from "react";
import { useDispatch } from "react-redux";
import { showPopup } from "../../store/actions/action";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import classes from "./ProductCard.module.scss";

const ProductCard = ({ numberOfCard, imageList, onClick }) => {
  const dispatch = useDispatch();

  const handleclick = (itemId) => {
    if (imageList) {
      const selectedItem = imageList.filter((e) => e._id.$oid === itemId);
      dispatch(showPopup(selectedItem));
      console.log(selectedItem);
    }
  };

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
                // onClick={() => handleclick(item._id.$oid)}
                onClick={() => handleclick(item._id.$oid)}
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
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
};

export default ProductCard;
