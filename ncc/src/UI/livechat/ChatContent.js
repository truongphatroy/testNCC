import React from "react";

import { FcBusinessman } from "react-icons/fc";
import { GrAttachment } from "react-icons/gr";
import { BsEmojiSmile, BsSendFill } from "react-icons/bs";

import ModalChat from "./ModalChat";

import classes from "./ChatContent.module.scss";

function ChatContent(props) {
  return (
    // use Modal cover all infor of product
    <ModalChat>
      <div className={classes.chatGroup}>
        <div className={classes.header}>
          <p className={classes.title}>Customer Support</p>
          <p className={classes.appName}>Let's Chat App</p>
        </div>
        <div className={classes.ChatContent}>
          <div className={classes.messageMyLine}>
            <p>Xin chào</p>
          </div>
          <div className={classes.messageMyLine}>
            <p>Làm thế nào để xem các sản phẩm </p>
          </div>
          <div className={classes.messageLine}>
            <FcBusinessman
              className={classes.iconChat}
              style={{ width: "30px", height: "30px" }}
            />
            <p className={classes.message}>Admin: Chào bạn!</p>
          </div>
          <div className={classes.messageLine}>
            <FcBusinessman
              className={classes.iconChat}
              style={{ width: "30px", height: "30px" }}
            />
            <p className={classes.message}>
              Admin: Bạn có thể vào mục Shop để xem các sản phẩm!
            </p>
          </div>
        </div>
        <div className={classes.inputChat}>
          <div className='input-group'>
            <div className='input-group-text border-0'>
              <FcBusinessman style={{ width: "30px", height: "30px" }} />
            </div>

            <input
              type='text'
              className={classes.inputText}
              aria-label='Text input with checkbox'
              placeholder='Enter message!'
            />
            <div className={classes.Chaticon}>
              <GrAttachment className='ms-2' />
              <BsEmojiSmile className='ms-2' />
              <BsSendFill className='ms-2' />
            </div>
          </div>
        </div>
      </div>
    </ModalChat>
  );
}

export default ChatContent;
