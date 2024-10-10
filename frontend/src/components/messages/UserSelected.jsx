import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Messages from "./Messages";
import SendMessage from "./SendMessage";

const UserSelected = ({fullName}) => {
  return (
    <Box flex="1" padding={4}>
      {/* Header */}
      <Heading mb={4}>To: {fullName}</Heading>
      <Box
        borderWidth={1}
        borderRadius="lg"
        padding={4}
        height="80%"
        overflowY="scroll"
        bg="white"
      >
        {/* Messages */}
        <Messages />
      </Box>
      {/* Send Messages */}
      <SendMessage />
    </Box>
  );
};

export default UserSelected;
