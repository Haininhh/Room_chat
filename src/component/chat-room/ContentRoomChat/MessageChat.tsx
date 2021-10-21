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
      <div className="d-flex align-center">
        <Typography.Text className="message__author">
          {displayName}
        </Typography.Text>
        <Typography.Text className="message__date">{createdAt}</Typography.Text>
      </div>
      <div className="message__user d-flex align-center">
        <div className="message__avatar">
          <Avatar size="small" src={photoURL}>
            {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
          </Avatar>
        </div>
        <Typography.Text className="message__content">
          {message}
        </Typography.Text>
      </div>
    </div>
  );
};

export default MessageChat;
