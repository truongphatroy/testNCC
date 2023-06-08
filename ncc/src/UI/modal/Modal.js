import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { hidePopup, hideDetailActiveUser } from "../../store/actions/action";

import classes from "./Modal.module.scss";

const Backdrop = () => {
  const dispatch = useDispatch();
  const hadleOnclose = () => {
    dispatch(hidePopup());
    dispatch(hideDetailActiveUser());
  };

  return <div className={classes.backdrop} onClick={hadleOnclose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
