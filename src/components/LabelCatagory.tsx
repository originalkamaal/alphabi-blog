import React from "react";
import { Text } from "@chakra-ui/react";

const LabelCatagory = ({ label }: { label: string }) => {
  return (
    <Text fontSize={10} bg="black" w="min-content" color="white" px={2} py={1}>
      {label.toUpperCase()}
    </Text>
  );
};

export default LabelCatagory;
