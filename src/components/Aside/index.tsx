import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BiHome, BiGridAlt, BiBarChart, BiChat, BiTrendingUp, BiUser, BiBox, BiWrench } from "react-icons/bi";

export default function Aside() {
  return (
    <Box

      bgColor="#161717"
      h="full"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="start"
    >
      <Box p="4">Logo</Box>
      <VStack spacing={2} display="flex" align="center" w="full">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="full"
          h="56px"
          data-group
          p="4"
          _hover={{ cursor: "pointer", bg: '#000', borderTopLeftRadius: 2, borderRadius: 2, borderTopRadius: 2, w: "full" }}
        >
          <Icon _groupHover={{ color: "#fff" }} as={BiHome} w={6} h={6} color="#8C8C8C" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="full"
          h="56px"
          data-group
          p="4"
          _hover={{ cursor: "pointer", bg: '#000', borderTopLeftRadius: 2, borderRadius: 2, borderTopRadius: 2, w: "full" }}
        >
          <Icon _groupHover={{ color: "#fff" }} as={BiGridAlt} w={6} h={6} color="#8C8C8C" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="full"
          h="56px"
          data-group
          p="4"
          _hover={{ cursor: "pointer", bg: '#000', borderTopLeftRadius: 2, borderRadius: 2, borderTopRadius: 2, w: "full" }}
        >
          <Icon _groupHover={{ color: "#fff" }} as={BiBarChart} w={6} h={6} color="#8C8C8C" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="full"
          h="56px"
          data-group
          p="4"
          _hover={{ cursor: "pointer", bg: '#000', borderTopLeftRadius: 2, borderRadius: 2, borderTopRadius: 2, w: "full" }}
        >
          <Icon _groupHover={{ color: "#fff" }} as={BiChat} w={6} h={6} color="#8C8C8C" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="full"
          h="56px"
          data-group
          p="4"
          _hover={{ cursor: "pointer", bg: '#000', borderTopLeftRadius: 2, borderRadius: 2, borderTopRadius: 2, w: "full" }}
        >
          <Icon _groupHover={{ color: "#fff" }} as={BiTrendingUp} w={6} h={6} color="#8C8C8C" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="full"
          h="56px"
          data-group
          p="4"
          _hover={{ cursor: "pointer", bg: '#000', borderTopLeftRadius: 2, borderRadius: 2, borderTopRadius: 2, w: "full" }}
        >
          <Icon _groupHover={{ color: "#fff" }} as={BiUser} w={6} h={6} color="#8C8C8C" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="full"
          h="56px"
          data-group
          p="4"
          _hover={{ cursor: "pointer", bg: '#000', borderTopLeftRadius: 2, borderRadius: 2, borderTopRadius: 2, w: "full" }}
        >
          <Icon _groupHover={{ color: "#fff" }} as={BiBox} w={6} h={6} color="#8C8C8C" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="full"
          h="56px"
          data-group
          p="4"
          _hover={{ cursor: "pointer", bg: '#000', borderTopLeftRadius: 2, borderRadius: 2, borderTopRadius: 2, w: "full" }}
        >
          <Icon _groupHover={{ color: "#fff" }} as={BiWrench} w={6} h={6} color="#8C8C8C" />
        </Box>
      </VStack >
    </Box >
  );
}
