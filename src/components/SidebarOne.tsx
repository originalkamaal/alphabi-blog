import { Image, Flex, Text } from "@chakra-ui/react";

import React from "react";

const SidebarOne = () => {
  return (
    <>
      <Flex direction="column">
        <Text fontSize="x-small" opacity={0.7} py={1}>
          Advertisements
        </Text>
        <Image
          objectFit="contain"
          src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/10/newspaper-rec300d.jpg"
          w="full"
          p={0}
        />
      </Flex>
    </>
  );
};

export default SidebarOne;
