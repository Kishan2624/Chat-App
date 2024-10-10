import { Flex, IconButton, Spinner } from "@chakra-ui/react";
import React from "react";
import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <>
      {!loading ? (
        <Flex bottom={4} left={4}>
          <IconButton
            icon={<TbLogout2 />}
            colorScheme="black"
            variant="outline"
            aria-label="Sign Out"
            onClick={logout}
          />
        </Flex>
      ) : (
        <Flex bottom={4} left={4}>
          <IconButton
            icon={<Spinner emptyColor="gray.200" />}
            colorScheme="black"
            variant="outline"
            aria-label="Sign Out"
          />
        </Flex>
      )}
    </>
  );
};

export default LogoutButton;
