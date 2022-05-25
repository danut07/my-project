import { Flex } from "@chakra-ui/react";

export const TitluSubcapitol = ({ children }: any) => {
  return (
    <Flex fontWeight="semibold" fontSize={28} pb={4}>
      {children}
    </Flex>
  );
};
export const TextSubcapitol = ({ children }: any) => {
  return (
    <Flex fontSize={20} pb={8}>
      {children}
    </Flex>
  );
};
//@ts-ignore
export const MyText = ({ children }) => {
  return <Flex>{children}</Flex>;
};
