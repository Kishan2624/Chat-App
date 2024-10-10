import {
  Avatar,
  Divider,
  HStack,
  Icon,
  Text,
  ListItem,
  AvatarBadge,
  Container,
} from "@chakra-ui/react";
import React from "react";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ user, lastidx, emoji }) => {
  const { fullName, profilePic, _id } = user;
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelectedConversation = selectedConversation?._id === _id;
  return (
    <>
      <ListItem
        cursor="pointer"
        display="flex"
        alignItems="center"
        p={2}
        _hover={{ bg: "blue.200" }}
        borderRadius="md"
        bg={isSelectedConversation ? "blue.200" : "transparent"}
        onClick={() => setSelectedConversation(user)}
      >
        <Avatar name={fullName} src={profilePic} size="sm">
          <AvatarBadge
            borderColor="papayawhip"
            boxSize="1.25em"
            bg="green.500"
          />
        </Avatar>
        <HStack ml={3} flexGrow={1}>
          <Text fontWeight="bold">{fullName}</Text>
        </HStack>
        <HStack>
          <Container>{emoji}</Container>
        </HStack>
      </ListItem>
      {lastidx ? null : <Divider />}
    </>
  );
};

export default Conversation;
