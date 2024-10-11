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
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ user, lastidx, emoji }) => {
  const { fullName, profilePic, _id } = user;
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelectedConversation = selectedConversation?._id === _id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers?.includes(_id);
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
          {isOnline && (
            <AvatarBadge
              borderColor="papayawhip"
              boxSize="1.25em"
              bg="blue.500"
              position="absolute"
              top="-2"
              left="-2"
            />
          )}
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
