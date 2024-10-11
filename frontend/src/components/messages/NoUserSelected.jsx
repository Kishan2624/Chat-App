import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useAuthContext } from "../../context/AuthContext";

const NoUserSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <Box flex={1}>
      <VStack justify="center" align="center" height="100vh">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          mb={4}
          textTransform="capitalize"
        >
          Hello, {authUser.fullName}!
        </Text>
        <Text mb={4}>Start a new conversation</Text>
      </VStack>
    </Box>
  );
};

export default NoUserSelected;
