import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
  Spinner
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { loading, signUp } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(formData);
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
        width="90%"
        p={4} // Reduced padding for a smaller form
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        overflow="hidden"
      >
        <Heading mb={4} textAlign="center" fontSize="2xl">
          SignUp{" "}
          <Text as="span" color="blue.500">
            ChatApp
          </Text>
        </Heading>

        <form onSubmit={handleSubmit}>
          <FormControl id="fullName" mb={3} position="relative">
            <FormLabel>Full Name</FormLabel>
            <Input
              value={formData.fullName}
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="username" mb={3} position="relative">
            <FormLabel>Username</FormLabel>
            <Input
              value={formData.username}
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="password" mb={3} position="relative">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                value={formData.password}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl id="confirm-password" mb={3} position="relative">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              value={formData.confirmPassword}
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              onChange={handleChange}
            />
          </FormControl>

          <FormControl as="fieldset" mb={3}>
            <FormLabel as="legend">Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onChange={(value) => setFormData({ ...formData, gender: value })}
            >
              <Stack direction="row" spacing={5}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          {!loading ? (
            <Button type="submit" colorScheme="blue" width="100%" mb={4}>
              Submit
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

        <Text textAlign="center">
          Already have an account?{" "}
          <Text as="span" color="blue.500" cursor="pointer">
            <Link to="/login">Log In</Link>
          </Text>
        </Text>
      </Box>
    </Flex>
  );
};

export default SignUpPage;
