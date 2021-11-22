import { Avatar, Typography } from "antd";
import dateFormat from "dateformat";
import { Timestamp } from "firebase/firestore";
import React, { useEffect, useRef } from "react";
import userAvatar from "../../../assets/png/image-avatar.png";
import { useAppSelector } from "../../../store/store";
import { selectUser } from "../../../store/userSlice";

export interface Message {
  text: string;
  displayName: string;
  photoURL: string | null;
  roomId: string;
  createdAt: Timestamp;
  uid: string;
  email: string;
}

const MessageChat = ({
  text,
  createdAt,
  photoURL,
  displayName,
  uid,
  email,
}: Message) => {
  const messagesEndRef: any = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [text]);

  const formatDate = (createdAt: any) => {
    const formatDate = createdAt.toDate();
    const formattedDate = dateFormat(formatDate, "ddd, h:MM TT");
    return formattedDate;
  };
  const user = useAppSelector(selectUser);

  return (
    <div className="message" ref={messagesEndRef}>
      {user.uid === uid ? (
        <>
          <div className="message__text-right d-flex align-center">
            <Typography.Text className="message__author-right">
              {displayName ? displayName : email?.charAt(0)?.toUpperCase()}
            </Typography.Text>
            <Typography.Text className="message__date">
              {formatDate(createdAt)}
            </Typography.Text>
          </div>
          <div className="message__user-right d-flex align-center">
            <div className="message__avatar message__avatar-right">
              <Avatar size="small" src={photoURL ? photoURL : userAvatar}>
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
              {displayName ? displayName : email?.charAt(0)?.toUpperCase()}
            </Typography.Text>
            <Typography.Text className="message__date">
              {formatDate(createdAt)}
            </Typography.Text>
          </div>
          <div className="message__user-left d-flex align-center">
            <div className="message__avatar message__avatar-left">
              <Avatar size="small" src={photoURL ? photoURL : userAvatar}>
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
