import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Message = ({ message, isSender }) => {
  return (
    <HStack justify={isSender ? "flex-end" : "flex-start"} mb={2}>
      {!isSender && <Avatar name="Receiver" size="sm" />}
      <Box
        maxW="60%"
        p={3}
        borderRadius="lg"
        bg={isSender ? "blue.500" : "gray.200"} // Change color based on sender
        color={isSender ? "white" : "black"} // Change text color
        boxShadow="md"
      >
        <Text>{message}</Text>
      </Box>
      {isSender && <Avatar name="Sender" size="sm" />}
    </HStack>
  );
};

export default Message;
