import React from "react";
import Toast from "./useToast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = React.useState(false);
  const { setAuthUser } = useAuthContext();
  const { successToast, errorToast } = Toast();

  const login = async ({ username, password }) => {
    const success = handleError({ username, password });
    if (!success) return;
    try {
      setLoading(true);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      console.log("useLogin - data from backend", data);
      successToast("Login successful!");
    } catch (error) {
      console.error("Error in useLogin Hook -", error.message);
      errorToast(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleError = ({ username, password }) => {
    if (!username || !password) {
      errorToast("Please fill all the fields");
      console.log("Please fill all the fields - useSignUp");
      return false;
    }
  
    return true;
  };

  return { loading, login };
};

export default useLogin;


