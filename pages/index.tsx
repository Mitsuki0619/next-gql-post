import { Box, Container, Flex, Spinner } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Footer } from "@/components/Layouts/Footer/Footer";
import { Header } from "@/components/Layouts/Header/Header";
import { Layout } from "@/components/Layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box flexGrow={1}>
        <Flex as={"main"}></Flex>
      </Box>
    </Layout>
  );
};

export default Home;
