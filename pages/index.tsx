import { Box, Spinner } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box>
      こんにちは！
      <Spinner color="teal.300"/>
    </Box>
  );
};

export default Home;
