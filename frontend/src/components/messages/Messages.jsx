import React, { useEffect } from "react";
import Message from "./Message";
import { Box, Skeleton, VStack } from "@chakra-ui/react";
import useGetMessage from "../../hooks/useGetMessage";
import useListenNewMessage from "../../hooks/useListenNewMessage";

const Messages = () => {
  const { loading, messages } = useGetMessage();
  const lastMessageRef = React.useRef(null); // Ref to track the last message
  useListenNewMessage();
  // Scroll to the last message whenever new messages are loaded
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Run effect whenever the `messages` array changes

  return (
    <Skeleton isLoaded={!loading} width="100%">
      {messages.length > 0 ? (
        messages.map((message, idx) => {
          const isLastMessage = idx === messages.length - 1; // Check if it's the last message
          return (
            <Box ref={isLastMessage ? lastMessageRef : null}>
              <Message key={message._id} message={message} />
            </Box>
          );
        })
      ) : (
        <VStack spacing={4} align="center" justify="center" height="100%">
          <Box>No Messages Found. Start A New Conversation </Box>
        </VStack>
      )}
    </Skeleton>
  );
};

export default Messages;
