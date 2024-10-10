import { useToast } from "@chakra-ui/react";

const Toast = () => {
  const toast = useToast();

  const warningToast = (title, description) => {
    toast({
      position: "top",
      title,
      description,
      status: "warning",
      duration: 5000,
      isClosable: true,
    });
  };

  const errorToast = (description) => {
    toast({
      position: "top",
      title: "Error",
      description,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  const successToast = (description) => {
    toast({
      position: "top",
      title: "Success",
      description,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return { errorToast, successToast, warningToast };
};

export default Toast;
