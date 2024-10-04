import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import MessagesContainer from "../../components/messages/MessagesContainer";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex height="100vh">
      <Sidebar />
      <MessagesContainer />
    </Flex>
  );
};

export default Home;
