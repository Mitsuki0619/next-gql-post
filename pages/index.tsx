import { Box, Container, Flex, Spinner } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Footer } from "@/components/Layouts/Footer/Footer";
import { Header } from "@/components/Layouts/Header/Header";

const Home: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" bgColor="gray.100">
      <Header />
      <Flex as="main" grow={1}></Flex>
      <Footer />
    </Flex>
  );
};

export default Home;
