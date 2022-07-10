import { Flex, Text, Image, Divider } from "@chakra-ui/react";
import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <Flex w="100%" h="100%" justify="center" align="center">
      <Flex
        w={["90vw", "90vw", "80vw", "80vw", "80vw"]}
        h={["60vh", "60vh", "30vh", "30vh", "30vh"]}
        shadow="lg"
        backgroundColor="gray.100"
        direction={["column", "column", "row", "row", "row"]}
      >
        <Flex
          direction="column"
          w={["100%", "100%", "30%", "30%", "30%"]}
          align="center"
          justify={["center", "center", "center", "center", "center"]}
        >
          <Image src="/contact.jpeg" w={["35%", "35%", "30%", "25%", "20%"]} />
          <Text py={["0", "0", "5", "5", "5"]}>Moroianu Vlad-Adrian</Text>
        </Flex>
        {/* pc divider */}
        <Flex display={["none", "none", "flex", "flex", "flex"]} mx={2}>
          <Divider orientation="vertical" />
        </Flex>
        {/* mobile divider */}
        <Flex display={["flex", "flex", "none", "none", "none"]} my={2}>
          <Divider orientation="horizontal" />
        </Flex>
        <Flex direction="column" align="left" justify="center">
          <Text>Facultatea de Matematica si Informatica</Text>
          <Text>Matematica-Informatica</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
