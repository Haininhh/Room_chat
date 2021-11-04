import { Avatar, Typography } from "antd";
import dateFormat from "dateformat";
import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/userSlice";
import { Message } from "./ContentRoomChat";

const MessageChat = ({
  text,
  createdAt,
  photoURL,
  displayName,
  uid,
  email
}: Message) => {
  const defaultAvatar = "https://graph.facebook.com/403982431236568/picture";
  const formatDate = (createdAt: any) => {
    const formatDate = createdAt.toDate();
    const formattedDate = dateFormat(formatDate, "ddd, h:MM TT");
    return formattedDate;
  };
  const user = useAppSelector(selectUser);

  return (
    <div className="message">
      {user.uid === uid ? (
        <>
          <div className="message__text-right d-flex align-center">
            <Typography.Text className="message__author-right">
              {displayName? displayName: email?.charAt(0)?.toUpperCase()}
            </Typography.Text>
            <Typography.Text className="message__date">
              {formatDate(createdAt)}
            </Typography.Text>
          </div>
          <div className="message__user-right d-flex align-center">
            <div className="message__avatar message__avatar-right">
              <Avatar size="small" src={photoURL ? photoURL : defaultAvatar}>
                {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
              </Avatar>
            </div>
            <Typography.Text className="message__content">
              {text}
            </Typography.Text>
          </div>
        </>
      ) : (
        <>
          <div className="message__text-left d-flex align-center">
            <Typography.Text className="message__author-left">
              {displayName}
            </Typography.Text>
            <Typography.Text className="message__date">
              {formatDate(createdAt)}
            </Typography.Text>
          </div>
          <div className="message__user-left d-flex align-center">
            <div className="message__avatar message__avatar-left">
              <Avatar size="small" src={photoURL ? photoURL : defaultAvatar}>
                {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
              </Avatar>
            </div>
            <Typography.Text className="message__content">
              {text}
            </Typography.Text>
          </div>
        </>
      )}
    </div>
  );
};

export default MessageChat;
