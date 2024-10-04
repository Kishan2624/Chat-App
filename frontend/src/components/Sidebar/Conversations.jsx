import React from "react";
import Conversation from "./Conversation";
import { List } from "@chakra-ui/react";

const Conversations = () => {
  return (
    <List spacing={3} width="100%">
      <Conversation name="ram" />
      <Conversation name="shyam" />
      <Conversation name="ramo" />
      <Conversation name="sita" />
    </List>
  );
};

export default Conversations;
