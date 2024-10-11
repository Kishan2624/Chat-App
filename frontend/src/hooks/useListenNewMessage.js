import React from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenNewMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  React.useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const audio = new Audio(
        "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
      );
      audio.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [messages, setMessages, socket]);
};

export default useListenNewMessage;
