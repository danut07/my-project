import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Flex w="100%" h="100%" direction="column" justify="center" align="center">
      <Text>
        Pagina de introducere pe platforma (background animat, o descriere a
        aplicatiei etc.)
      </Text>
    </Flex>
  );
};

export default Home;
