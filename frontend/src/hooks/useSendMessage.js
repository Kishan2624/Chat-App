import React from "react";
import useConversation from "../zustand/useConversation";
import Toast from "./useToast";

const useSendMessage = () => {
  const [loading, setLoading] = React.useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const { errorToast } = Toast();
  const sendMessages = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log("useSendMessage -> data", data);
      setMessages([...messages, data.message]);
    } catch (error) {
      console.error("useSendMessage -> error", error.message);
      errorToast(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessages };
};

export default useSendMessage;
