import { Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      w="100vw"
      backgroundColor="blue.600"
      justify="center"
      paddingTop={8}
      paddingBottom={8}
      flex={0}
      zIndex={11}
    >
      <Text color="white">@2022 - Vlad Moroianu</Text>
    </Flex>
  );
};
