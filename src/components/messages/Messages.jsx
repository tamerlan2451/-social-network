import React from "react";
import Conversation from "./conversation/Conversation";
import Message from "./message/Message";
import styles from "./Messages.module.css";

const Messages = () => {
  return (
    <>
      <div className={styles.messages}>
        <div className={styles.yourNicknameWrapper}>
          <span className={styles.yourNickname}>Tommy</span>
        </div>

        <div className={styles.chatUserNickname}>
          <span className={styles.yourNickname}>ssss</span>
        </div>
      </div>

      <div className={styles.messagesBlock}>
        <div className={styles.chats}>
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
        </div>
        <div className={styles.dialogues}>
          <Message />
          <Message />
          <Message />
          <Message />
          <input placeholder="Введите сообщение.." type="text" />
        </div>
      </div>
    </>
  );
};

export default Messages;