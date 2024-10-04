import {
  Avatar,
  Divider,
  HStack,
  Icon,
  Text,
  ListItem,
  AvatarBadge,
} from "@chakra-ui/react";
import React from "react";
import { FiUser } from "react-icons/fi";

const Conversation = ({ name }) => {
  return (
    <>
      <ListItem cursor="pointer" display="flex" alignItems="center" p={2}>
        <Avatar name={name} size="sm">
          <AvatarBadge
            borderColor="papayawhip"
            boxSize="1.25em"
            bg="green.500"
          />
        </Avatar>
        {/* Replace with user's image URL */}
        <HStack spacing={3} ml={3} flexGrow={1} justify="space-between">
          {" "}
          {/* Adjust margin for spacing */}
          <Text fontWeight="bold">{name}</Text>
          <Icon as={FiUser} color="blue.500" />{" "}
          {/* Replace with your desired icon */}
        </HStack>
      </ListItem>
      <Divider />
    </>
  );
};

export default Conversation;
