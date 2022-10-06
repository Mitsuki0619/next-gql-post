import { Flex } from "@chakra-ui/react";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      direction="column"
      bgColor="white"
      w="36vw"
      h="full"
      overflow="auto"
    ></Flex>
  );
};