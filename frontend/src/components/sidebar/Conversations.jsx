import React from "react";
import Conversation from "./Conversation";
import { List, Spinner, VStack } from "@chakra-ui/react";
import useGetConversation from "../../hooks/useGetConversation";
import getRandomEmoji from "../../utlis/randomEmojiGenerator";

const Conversations = () => {
  const { loading, conversation } = useGetConversation();

  return (
    <>
      {!loading ? (
        <List spacing={3} width="100%">
          {conversation.map((user, idx) => (
            <Conversation
              key={user._id}
              user={user}
              lastidx={idx === conversation.length - 1}
              emoji={getRandomEmoji()}
            />
          ))}
        </List>
      ) : (
        <VStack
          height="100%"
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner color="blue.500" size="lg" />
        </VStack>
      )}
    </>
  );
};

export default Conversations;
