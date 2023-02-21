import React from "react";
import { Box, VStack } from "@chakra-ui/react";

export default function Aside() {
  return (
    <Box
      p="4"
      bgColor="#161717"
      h="full"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="start"
    >
      <div>Logo</div>
      <VStack spacing={4} display="flex" align="center" w="full">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="full"
          h="56px"
        >
          1
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="full"
          h="56px"
        >
          2
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="full"
          h="56px"
        >
          3
        </Box>
      </VStack>
    </Box>
  );
}
