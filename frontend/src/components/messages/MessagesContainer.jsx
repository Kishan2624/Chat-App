import React from "react";
import UserSelected from "./UserSelected";
import NoUserSelected from "./NoUserSelected";
import useConversation from "../../zustand/useConversation";

const MessagesContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  // Reset selected conversation when component unmounts
  React.useEffect(() => {
    setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <>
      {selectedConversation ? (
        <UserSelected fullName={selectedConversation.fullName} />
      ) : (
        <NoUserSelected />
      )}{" "}
    </>
  );
};

export default MessagesContainer;
