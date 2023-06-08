import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { hidePopup, hideDetailActiveUser } from "../../store/actions/action";

import classes from "./ModalChat.module.scss";

const Backdrop = (props) => {
  const dispatch = useDispatch();
  const hadleOnclose = () => {
    dispatch(hidePopup());
    dispatch(hideDetailActiveUser());
  };

  return <div className={classes.backdrop} onClick={hadleOnclose} />;
};

const ModalChatOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlayChat");

const ModalChat = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalChatOverlay>{props.children}</ModalChatOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default ModalChat;
