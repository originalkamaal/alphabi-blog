import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/SidebarOne";
import {
  HStack,
  VStack,
  Box,
  useColorModeValue,
  Flex,
  Show,
} from "@chakra-ui/react";
import React from "react";
//https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/10/newspaper-rec300d.jpg
const BaseLayout = ({ children }: any) => {
  return (
    <VStack>
      <HStack w="full">
        <Navbar />
      </HStack>

      <Flex w="full">{children}</Flex>
    </VStack>
  );
};

export default BaseLayout;
