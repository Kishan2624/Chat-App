import React from "react";
import UserSelected from "./UserSelected";
import NoUserSelected from "./NoUserSelected";

const MessagesContainer = () => {
  const isUserSelected = false;
  return <>{isUserSelected ? <UserSelected /> : <NoUserSelected />} </>;
};

export default MessagesContainer;
