/* added in Rootlayout component */
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TbBrandMessenger } from "react-icons/tb";
import ChatContent from "./ChatContent";
import classes from "./Livechat.module.scss";
import { liveChat } from "../../store/actions/action";

const Livechat = () => {
  const dispatch = useDispatch();
  const liveChatState = useSelector((state) => state.LiveChat);

  const handleChat = () => {
    // update state
    dispatch(liveChat());
  };
  return (
    <div>
      {liveChatState && <ChatContent />}
      <button onClick={handleChat} className={classes.buttonChat}>
        <TbBrandMessenger style={{ width: "50px", height: "50px" }} />
      </button>
    </div>
  );
};

export default Livechat;
