import { HStack, Button, Flex, Spinner, Textarea } from "@chakra-ui/react";
import React from "react";
import useSendMessage from "../../hooks/useSendMessage";

const SendMessage = () => {
  const { loading, sendMessages } = useSendMessage();
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessages(message);
    setMessage("");
  };

  // Handle key press for sending message
  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent new line
      await handleSubmit(e); // Call handleSubmit on Enter key press
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex mt={4} gap="1rem" justify="space-between">
        <Textarea
          placeholder="Type your message..."
          size="md"
          height="40px"
          minHeight="none"
          resize="none" // Remove resize option
          overflowY="auto" // Allow vertical scrolling
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown} // Capture key down event
        />
        {loading ? (
          <HStack border="2px" p={2} borderRadius="md" borderColor="blue.500">
            <Spinner color="blue.200" />
          </HStack>
        ) : (
          <Button type="submit" colorScheme="blue">
            Send
          </Button>
        )}
      </Flex>
    </form>
  );
};

export default SendMessage;
