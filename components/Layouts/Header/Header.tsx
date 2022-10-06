import { Box, Button, Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaBell, FaHome, FaSlackHash } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

export const Header: React.FC = () => {
  return (
    <Flex
      w="22vw"
      h="full"
      direction="column"
      bgColor="white"
      py={8}
      alignItems={"center"}
    >
      <Flex
        direction="column"
        h="full"
        alignItems={"start"}
        justify={"start"}
        gap={"4vh"}
      >
        <Box>
          <Heading as={"h1"} textAlign={"start"}>
            LOGO
          </Heading>
        </Box>
        <nav>
          <Wrap direction="column" spacing={"4vh"} fontSize={"xl"}>
            <WrapItem>
              <Link href="">
                <a>
                  <Flex
                    rounded={"full"}
                    py={2}
                    pl={3}
                    pr={6}
                    _hover={{ bgColor: "gray.100" }}
                    transition={"all"}
                    transitionDuration={"0.3s"}
                    alignItems={"center"}
                    gap={4}
                  >
                    <FaHome />
                    ホーム
                  </Flex>
                </a>
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href="">
                <a>
                  <Flex
                    rounded={"full"}
                    py={2}
                    pl={3}
                    pr={6}
                    _hover={{ bgColor: "gray.100" }}
                    transition={"all"}
                    transitionDuration={"0.3s"}
                    alignItems={"center"}
                    gap={4}
                  >
                    <FaSlackHash />
                    トレンド
                  </Flex>
                </a>
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href="">
                <a>
                  <Flex
                    rounded={"full"}
                    py={2}
                    pl={3}
                    pr={6}
                    _hover={{ bgColor: "gray.100" }}
                    transition={"all"}
                    transitionDuration={"0.3s"}
                    alignItems={"center"}
                    gap={4}
                  >
                    <FaBell />
                    通知
                  </Flex>
                </a>
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href="">
                <a>
                  <Flex
                    rounded={"full"}
                    py={2}
                    pl={3}
                    pr={6}
                    _hover={{ bgColor: "gray.100" }}
                    transition={"all"}
                    transitionDuration={"0.3s"}
                    alignItems={"center"}
                    gap={4}
                  >
                    <MdAccountCircle />
                    プロフィール
                  </Flex>
                </a>
              </Link>
            </WrapItem>
          </Wrap>
        </nav>
        <Box>
          <Button
            colorScheme={"teal"}
            rounded={"full"}
            size={"lg"}
            fontSize={"xl"}
            px={"10"}
          >
            ツイートする
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
