import { Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

//@ts-ignore
export const Layout = ({ children }) => {
  return (
    <Flex direction={"column"} w="100vw" h="100vh" overflowX="hidden">
      <Navbar />
      <Flex flex={1}>{children}</Flex>
      <Footer />
    </Flex>
  );
};
