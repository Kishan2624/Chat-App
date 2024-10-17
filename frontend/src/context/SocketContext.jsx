import React from "react";
import { createContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => React.useContext(SocketContext);

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = React.useState(null);

  const [onlineUsers, setOnlineUsers] = React.useState([]);
  const { authUser } = useAuthContext();
  React.useEffect(() => {
    if (authUser) {
      const socket = io("https://chat-app-1-sr13.onrender.com", {
        query: {
          userId: authUser.id,
        },
      });

      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
