import React from "react";
import useConversation from "../zustand/useConversation";
import Toast from "./useToast";

const useGetMessage = () => {
  const [loading, setLoading] = React.useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const { errorToast } = Toast();

  React.useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/messages/${selectedConversation?._id}`
        );
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data.message);
      } catch (error) {
        console.error("useGetMessage - Error messages: ", error.message);
        errorToast(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMessage();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessage;
