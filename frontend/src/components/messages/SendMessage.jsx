import { Button, Flex, Textarea } from "@chakra-ui/react";
import React from "react";

const SendMessage = () => {
  return (
    <Flex mt={4} gap="1rem" justify="space-between">
      <Textarea
        placeholder="Type your message..."
        size="md"
        height="40px"
        minHeight="none"
        resize="none" // Remove resize option
        overflowY="auto" // Allow vertical scrolling
      />
      <Button colorScheme="blue">Send</Button>
    </Flex>
  );
};

export default SendMessage;
