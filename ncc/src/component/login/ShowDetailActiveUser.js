/* Component show detail of active user */

import React from "react";
import Modal from "../../UI/modal/Modal";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { hideDetailActiveUser } from "../../store/actions/action";
import { MdCancel } from "react-icons/md";
import { RiUserHeartLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

import classes from "./ShowDetailActiveUser.module.scss";

function ShowDetailActiveUser(props) {
  const activeUserInformation = useSelector(
    (state) => state?.ActiveUserInfo?.activeUserProfile
  );
  const dispatch = useDispatch();

  // Close popup func
  const handleOnClose = () => {
    dispatch(hideDetailActiveUser());
  };

  return (
    // use Modal cover all infor of product
    <Modal>
      <div className=''>
        <div className='text-end fs-3'>
          <MdCancel onClick={handleOnClose} />
        </div>
        <h4>Wellcome {activeUserInformation?.email}!</h4>

        <CardGroup className='mb-4'>
          <Card className='d-flex justify-content-center align-items-center pt-3'>
            <RiUserHeartLine className={classes.user} />
            <p>Avarta image</p>
          </Card>
          <Card className=''>
            <Card.Body>
              <Card.Title className=''>Profile</Card.Title>
              <Card.Text>
                User fullname: {activeUserInformation?.fullName}
              </Card.Text>
              <Card.Text>User email: {activeUserInformation?.email}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </Modal>
  );
}

export default ShowDetailActiveUser;
