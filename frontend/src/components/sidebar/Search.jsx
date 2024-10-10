import React, { useState } from "react";
import { HStack, Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import useGetConversation from "../../hooks/useGetConversation"; // Import your hook
import Toast from "../../hooks/useToast";
import useConversation from "../../zustand/useConversation";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { conversation: users } = useGetConversation(); // Fetch messages from your hook
  const { warningToast } = Toast(); // Initialize toast for notifications
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Validate the search query
    if (searchQuery.length < 3) {
      warningToast(
        "Search Query Too Short",
        "Please enter at least 3 characters"
      );
      return; // Exit if the condition is not met
    }

    // Handle the search logic here
    const filteredUsers = users.find((user) =>
      user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (!filteredUsers) {
      warningToast("No User Found", "Please try another search query");
      return;
    }

    setSelectedConversation(filteredUsers); // Set selected conversation
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          placeholder="Search..."
          variant="outline"
          borderRadius="md"
          size="lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
        />
        <IconButton
          aria-label="Search"
          colorScheme="blue"
          size="lg"
          icon={<SearchIcon />}
          type="submit" // Set button type to submit
        />
      </HStack>
    </form>
  );
};

export default Search;
