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
  Container,
  Spinner,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const { loading, login } = useLogin();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
  };

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

        <form onSubmit={handleSubmit}>
          <FormControl id="username" mb={4}>
            <FormLabel>Username</FormLabel>
            <Input
              value={formData.username}
              type="text"
              placeholder="Enter your username"
              name="username"
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="password" mb={4}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                value={formData.password}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                onChange={handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          {!loading ? (
            <Button type="submit" colorScheme="blue" width="100%" mb={4}>
              Login
            </Button>
          ) : (
            <Flex
              justifyContent="center"
              padding="1px"
              border="1px"
              borderRadius="md"
              borderColor="gray.200"
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            </Flex>
          )}
        </form>

        <Text textAlign="center">Don't Have Account</Text>
        <Text textAlign="center" color="blue.500" cursor="pointer">
          <Link to="/signup">Create Account</Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Login;
