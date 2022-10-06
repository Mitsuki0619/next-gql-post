import {
  Box,
  Button,
  Flex,
  Heading,
  Wrap,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaBell, FaHome, FaSlackHash } from "react-icons/fa";
import { MdAccountCircle, MdSettings } from "react-icons/md";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillDingtalkCircle } from "react-icons/ai";

export const Header: React.FC = () => {
  return (
    <Flex
      w={{ base: "20vw", xl: "30vw" }}
      h="full"
      direction="column"
      bgColor="white"
      py={8}
      px={{ base: 3, lg: 8 }}
      alignItems={"end"}
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
            <AiFillDingtalkCircle size={40} />
          </Heading>
        </Box>
        <nav>
          <Wrap direction="column" spacing={"4vh"} fontSize={"xl"}>
            <WrapItem>
              <Link href="">
                <a>
                  <Flex
                    rounded={"full"}
                    py={{ xl: 2 }}
                    pl={{ xl: 3 }}
                    pr={{ xl: 6 }}
                    p={3}
                    _hover={{ bgColor: "gray.100" }}
                    transition={"all"}
                    transitionDuration={"0.3s"}
                    alignItems={"center"}
                    gap={4}
                  >
                    <FaHome size={30} />
                    <Text display={{ base: "none", xl: "block" }}>ホーム</Text>
                  </Flex>
                </a>
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href="">
                <a>
                  <Flex
                    rounded={"full"}
                    py={{ xl: 2 }}
                    pl={{ xl: 3 }}
                    pr={{ xl: 6 }}
                    p={3}
                    _hover={{ bgColor: "gray.100" }}
                    transition={"all"}
                    transitionDuration={"0.3s"}
                    alignItems={"center"}
                    gap={4}
                  >
                    <FaSlackHash size={30} />
                    <Text display={{ base: "none", xl: "block" }}>
                      トレンド
                    </Text>
                  </Flex>
                </a>
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href="">
                <a>
                  <Flex
                    rounded={"full"}
                    py={{ xl: 2 }}
                    pl={{ xl: 3 }}
                    pr={{ xl: 6 }}
                    p={3}
                    _hover={{ bgColor: "gray.100" }}
                    transition={"all"}
                    transitionDuration={"0.3s"}
                    alignItems={"center"}
                    gap={4}
                  >
                    <FaBell size={30} />
                    <Text display={{ base: "none", xl: "block" }}>通知</Text>
                  </Flex>
                </a>
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href="">
                <a>
                  <Flex
                    rounded={"full"}
                    py={{ xl: 2 }}
                    pl={{ xl: 3 }}
                    pr={{ xl: 6 }}
                    p={3}
                    _hover={{ bgColor: "gray.100" }}
                    transition={"all"}
                    transitionDuration={"0.3s"}
                    alignItems={"center"}
                    gap={4}
                  >
                    <MdAccountCircle size={30} />
                    <Text display={{ base: "none", xl: "block" }}>
                      プロフィール
                    </Text>
                  </Flex>
                </a>
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href="">
                <a>
                  <Flex
                    rounded={"full"}
                    py={{ xl: 2 }}
                    pl={{ xl: 3 }}
                    pr={{ xl: 6 }}
                    p={3}
                    _hover={{ bgColor: "gray.100" }}
                    transition={"all"}
                    transitionDuration={"0.3s"}
                    alignItems={"center"}
                    gap={4}
                  >
                    <MdSettings size={30} />
                    <Text display={{ base: "none", xl: "block" }}>設定</Text>
                  </Flex>
                </a>
              </Link>
            </WrapItem>
          </Wrap>
        </nav>
        <Box>
          <Button
            display={{ base: "none", xl: "block" }}
            colorScheme={"teal"}
            rounded={"full"}
            size={"lg"}
            fontSize={"xl"}
            px={"10"}
          >
            ツイートする
          </Button>
          <Box
            display={{ base: "block", xl: "none" }}
            color={"teal"}
            cursor={"pointer"}
            textAlign={"center"}
          >
            <BsFillPlusCircleFill size={45} />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
