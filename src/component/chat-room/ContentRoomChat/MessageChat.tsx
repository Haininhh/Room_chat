import { Avatar, Typography } from "antd";
import dateFormat from "dateformat";
import React from "react";
import { Message } from "./ContentRoomChat";

const MessageChat = ({
  text,
  createdAt,
  photoURL,
  displayName,
  roomId,
}: Message) => {
  const formatDate = (createdAt: any) => {
    const formatDate = createdAt.toDate();
    const formattedDate = dateFormat(formatDate, "ddd, h:MM TT");
    return formattedDate;
  };

  return (
    <div className="message">
      <div className="message__text d-flex align-center">
        <Typography.Text className="message__author">
          {displayName}
        </Typography.Text>
        <Typography.Text className="message__date">
          {formatDate(createdAt)}
        </Typography.Text>
      </div>
      <div className="message__user d-flex align-center">
        <div className="message__avatar">
          <Avatar size="small" src={photoURL}>
            {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
          </Avatar>
        </div>
        <Typography.Text className="message__content">{text}</Typography.Text>
      </div>
    </div>
  );
};

export default MessageChat;
