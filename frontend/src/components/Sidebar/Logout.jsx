import { Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
  return (
    <Flex position="absolute" bottom={4} left={4}>
      <IconButton
        icon={<FiLogOut />}
        colorScheme="red"
        variant="outline"
        aria-label="Sign Out"
      />
    </Flex>
  );
};

export default LogoutButton;
