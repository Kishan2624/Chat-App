import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
    >
      <Box
        maxW="400px"
        width="100%"
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
      >
        <Heading mb={6} textAlign="center">
          Login{" "}
          <Text as="span" color="blue.500">
            ChatApp
          </Text>
        </Heading>

        <form>
          <FormControl id="username" mb={4}>
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="Enter your username" />
          </FormControl>

          <FormControl id="password" mb={4}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button colorScheme="blue" width="100%" mb={4}>
            Login
          </Button>
        </form>

        <Flex justifyContent="space-between" align="center">
          <Text color="blue.500" cursor="pointer">
            Forgot Password?
          </Text>
          <Text color="blue.500" cursor="pointer">
            Create Account!
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Login;
