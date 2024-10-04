import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

const NoUserSelected = () => {
  return (
    <Box flex={1}>
      <VStack justify="center" align="center" height="100vh">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Hello, John!
        </Text>
        <Text mb={4}>Start a new conversation</Text>
      </VStack>
    </Box>
  );
};

export default NoUserSelected;
