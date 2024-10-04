import React, { useState } from "react";
import { HStack, Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Handle the search logic here
    console.log("Search query:", searchQuery);
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
