import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Background } from "../components/Background";

const Home: NextPage = () => {
  return (
    <Flex w="100%" h="100%" direction="column" justify="center" align="center">
      <Background />
    </Flex>
  );
};

export default Home;
