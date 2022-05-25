import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <Flex w="100%" h="100%" direction="column" justify="center" align="center">
      <Text>Pagina de contact(nume-prenume, specializare etc.)</Text>
    </Flex>
  );
};

export default Contact;
