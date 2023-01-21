import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import {
  HStack,
  VStack,
  Box,
  useColorModeValue,
  Flex,
  Show,
} from "@chakra-ui/react";
import React from "react";

const BaseLayout = ({ children }: any) => {
  return (
    <VStack>
      <HStack w="full">
        <Navbar />
      </HStack>

      <Flex w="full">
        <Box
          flex="4"
          ml={2}
          rounded="md"
          bg={useColorModeValue("gray.50", "gray.900")}
        >
          {children}
        </Box>
        <Box
          flex={{ base: "0", md: "1" }}
          mx={2}
          p={4}
          bg={useColorModeValue("gray.50", "gray.900")}
          rounded="md"
        >
          <Show above="md">
            <Sidebar />
          </Show>
        </Box>
      </Flex>
    </VStack>
  );
};

export default BaseLayout;
