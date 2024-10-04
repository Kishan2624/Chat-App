import React from "react";
import Message from "./Message";
import { VStack } from "@chakra-ui/react";

const Messages = () => {
  return (
    <>
      <Message message="Hello" isSender={true} />
      <Message message="Hi" isSender={false} />
      <Message message="How are you" isSender={true} />
      <Message message="I am fine" isSender={false} />
      <Message message="nice!" isSender={true} />
    </>
  );
};

export default Messages;
