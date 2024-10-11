import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import formatTime from "../../utlis/formatTime";
import "../../../src/App.css";

const Message = ({ message }) => {
  const { authUser } = useAuthContext(); // Get the authenticated user
  const isSender = message.senderId === authUser.id; // Check if the current user is the sender
  const { selectedConversation } = useConversation(); // Get the selected conversation
  const isShake = message.shouldShake ? "shake" : ""; // Add shake animation if the message should shake

  return (
    <HStack justify={isSender ? "flex-end" : "flex-start"} mb={2}>
      {!isSender && (
        <Avatar
          name="Receiver"
          src={selectedConversation.profilePic}
          size="sm"
        />
      )}{" "}
      {/* Receiver's avatar */}
      <Box
        maxW="60%"
        p={3}
        borderRadius="lg"
        bg={isSender ? "blue.500" : "gray.200"} // Sender messages are blue, receiver messages are gray
        color={isSender ? "white" : "black"} // Adjust text color
        boxShadow="md"
        className={isShake}
      >
        <Text>{message.message}</Text> {/* Display the actual message */}
        <Text fontSize="sm" color={isSender ? "white" : "black"} mt={1}>
          {formatTime(message.createdAt)} {/* Display the formatted time */}
        </Text>
      </Box>
      {isSender && <Avatar name="Sender" src={authUser.profilePic} size="sm" />}{" "}
      {/* Sender's avatar */}
    </HStack>
  );
};

export default Message;
