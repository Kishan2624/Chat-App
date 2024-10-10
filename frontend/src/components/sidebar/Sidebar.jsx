import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import Search from "./Search";
import Conversations from "./Conversations";
import LogoutButton from "./Logout";

const Sidebar = () => {
  return (
    <Box
      width="300px"
      borderRight="1px"
      borderColor="gray.200"
      position="relative"
    >
      <VStack p={4} alignItems="flex-start" spacing={4} height="90%">
        <Search />
        <Conversations />
      </VStack>
      <VStack>
        <LogoutButton />
      </VStack>
    </Box>
  );
};

export default Sidebar;
