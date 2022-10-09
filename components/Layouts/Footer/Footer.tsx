import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";

export const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      direction="column"
      bgColor="white"
      w="36vw"
      h="full"
      overflow="auto"
      pt={8}
      pl={{ base: 3, lg: 5 }}
    >
      <Flex direction={"column"} w={{ xl: "380px" }}>
        <InputGroup>
          <InputLeftElement
            m={"auto"}
            pointerEvents="none"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            // eslint-disable-next-line react/no-children-prop
            children={<BiSearch size={"24"} color={"gray.300"} />}
          />
          <Input
            variant={"filled"}
            rounded={"full"}
            placeholder={"キーワード検索"}
            h={"12"}
          />
        </InputGroup>
      </Flex>
    </Flex>
  );
};
