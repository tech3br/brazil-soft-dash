import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";

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
          <Icon as={MdHome} w={6} h={6} color="#8C8C8C" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="full"
          h="56px"
        >
          <Icon as={MdHome} w={6} h={6} color="#8C8C8C" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="full"
          h="56px"
        >
          <Icon as={MdHome} w={6} h={6} color="#8C8C8C" />
        </Box>
      </VStack>
    </Box>
  );
}
