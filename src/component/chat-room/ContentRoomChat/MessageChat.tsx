import { Avatar, Typography } from "antd";
import React from "react";
import { Message } from "./ContentRoomChat";

const MessageChat = ({
  message,
  createdAt,
  photoURL,
  displayName,
}: Message) => {
  return (
    <div className="message">
      <div className="message__user d-flex">
        <div className="message__avatar">
          <Avatar size="small" src={photoURL}>
            {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
          </Avatar>
        </div>
        <Typography.Text className="author">{displayName}</Typography.Text>
        <Typography.Text className="date">{createdAt}</Typography.Text>
      </div>
      <Typography.Text className="message__content">{message}</Typography.Text>
    </div>
  );
};

export default MessageChat;
