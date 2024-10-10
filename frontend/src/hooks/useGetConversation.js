import React from "react";
import Toast from "./useToast";

const useGetConversation = () => {
  const [loading, setLoading] = React.useState(false);
  const [conversation, setConversation] = React.useState([]);

  const { errorToast } = Toast();

  React.useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversation(data.users);
        console.log("useGetConversation -> data", data.users);
      } catch (error) {
        console.error("useGetConversation -> error", error.message);
        errorToast(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversation();
  }, []);

  return { loading, conversation };
};

export default useGetConversation;
