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
} from "@chakra-ui/react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    fetch("YOUR_BACKEND_ENDPOINT", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
          <FormControl id="fullname" mb={3} position="relative">
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              name="fullname"
              placeholder="Enter your full name"
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="username" mb={3} position="relative">
            <FormLabel>Username</FormLabel>
            <Input
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
              defaultValue="male"
              onChange={(value) => setFormData({ ...formData, gender: value })}
            >
              <Stack direction="row" spacing={5}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <Button type="submit" colorScheme="blue" width="100%" mb={4}>
            Sign Up
          </Button>
        </form>

        <Text textAlign="center">
          Already have an account?{" "}
          <Text as="span" color="blue.500" cursor="pointer">
            Log In
          </Text>
        </Text>
      </Box>
    </Flex>
  );
};

export default SignUpPage;
