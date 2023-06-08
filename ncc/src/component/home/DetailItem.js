/* Component show detail of selected product */

import React, { useEffect } from "react";
import { getData } from "../../store/actions/action";
import Modal from "../../UI/modal/Modal";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { hidePopup } from "../../store/actions/action";
import { MdCancel } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

import classes from "./DetailItem.module.scss";

function DetailItem() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const [detailItem] = useSelector((state) => state.Popup.popupData);

  // Close popup func
  const handleOnClose = () => {
    dispatch(hidePopup());
  };

  return (
    // use Modal cover all infor of product
    <Modal>
      <div className={classes.detailItem}>
        <div className={classes.detailItemCancel}>
          <MdCancel onClick={handleOnClose} />
        </div>
        <CardGroup>
          <Card className={classes.detailItemCard}>
            <Card.Img
              className={classes.detailItemImage}
              variant='top'
              src={detailItem.img1}
            />
          </Card>
          <Card className={classes.detailItemCard}>
            <Card.Body>
              <Card.Title className={classes.detailItemTitle}>
                {detailItem.name}
              </Card.Title>
              <Card.Text className='mb-1'>
                {/* change to vietnamese writing style */}
                {parseInt(detailItem.price).toLocaleString("vi-VN")} VND
              </Card.Text>
              <Card.Text className={classes.desc} style={{ fontSize: "12px" }}>
                {detailItem.short_desc}
              </Card.Text>
              <Button className={classes.detailItemBtn} variant='dark'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                  <path d='M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64H48c8.8 0 16 7.2 16 16V368c0 44.2 35.8 80 80 80h18.7c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16H450.7c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H144c-8.8 0-16-7.2-16-16V80C128 35.8 92.2 0 48 0H32zM192 80V272c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H464V176c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L400 163.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4 .8s-8.5-8.2-8.5-14.1V32H240c-26.5 0-48 21.5-48 48z' />
                </svg>
                <span>View Detail</span>
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </Modal>
  );
}

export default DetailItem;
