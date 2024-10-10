import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useAuthContext } from "../context/AuthContext";
import Toast from "./useToast";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { successToast, errorToast } = Toast();

  const { setAuthUser } = useAuthContext();

  const signUp = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleError({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    setLoading(false);
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      //localStorage.setItem("chat-user", JSON.stringify(data.user));
      localStorage.setItem("chat-user", JSON.stringify(data));
      //context.setAuthUser(data.user);
      setAuthUser(data);

      console.log("useSignup - data form backend", data);
      successToast("Signup successful!");
    } catch (error) {
      errorToast(error.message);
      console.log("Error in useSignUp Hook -", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleError = ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      errorToast("All Fields Required");
      console.log("All Fields Required - Error in useSignUp");
      return false;
    }

    if (password !== confirmPassword) {
      errorToast("Passwords do not match");
      console.log("Passwords do not match - Error in useSignUp");
      return false;
    }

    if (password.length < 6) {
      errorToast("Password is less than 6 characters");
      console.log("Password is less than 6 characters - Error in useSignUp");
      return false;
    }

    return true;
  };

  return { loading, signUp };
};

export default useSignUp;
