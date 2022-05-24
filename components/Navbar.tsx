import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Stack,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navbarHeight = "128px";
  return (
    <>
      <Flex w="100vw" h={navbarHeight} direction="column" flex={0}>
        {/* mobile */}
        <Flex
          display={["flex", "flex", "none", "none", "none"]}
          justify="center"
          bgColor="gray.200"
        >
          <Image src={`/buna.png`} h="64px" />
        </Flex>
        <Flex display={["flex", "none", "none", "none", "none"]}>
          <Button colorScheme="white" onClick={onOpen}>
            <HamburgerIcon fontSize="2xl" color="blue.300" />
          </Button>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader w="100%" zIndex={100} bg="white" p={0} my={2}>
                <Flex
                  alignItems="center"
                  h="100%"
                  mt={1}
                  justifyContent={"center"}
                >
                  <Link
                    href="/"
                    _focus={{ outline: "none", boxShadow: "none !important" }}
                  >
                    <Image src="/buna.png" h={navbarHeight} />
                  </Link>

                  <DrawerCloseButton
                    _focus={{ outline: "none", boxShadow: "none !important" }}
                    color="blue.600"
                    mt={0}
                  />
                </Flex>
              </DrawerHeader>
              <DrawerBody>
                <Stack
                  direction={"column"}
                  align="center"
                  spacing="24px"
                  marginTop={4}
                >
                  <Link
                    color="blue.600"
                    href="/teorie"
                    _focus={{ outline: "none", boxShadow: "none !important" }}
                  >
                    <Text fontWeight="semibold">Teorie</Text>
                  </Link>

                  <Link
                    color="blue.600"
                    href="/pricing"
                    _focus={{ outline: "none", boxShadow: "none !important" }}
                  >
                    <Text fontWeight="semibold">Teste</Text>
                  </Link>

                  <Link
                    color="blue.600"
                    href="/contact"
                    _focus={{ outline: "none", boxShadow: "none !important" }}
                  >
                    <Text fontWeight="semibold">Contact</Text>
                  </Link>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
        {/* desktop */}
        <Flex
          display={["none", "none", "flex", "flex", "flex"]}
          justify="center"
          bgColor="gray.200"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link href="/" _focus={{ boxShadow: "none" }}>
            <Image src={`/buna.png`} h="64px" mx={16} />
          </Link>
        </Flex>
        <Flex display={["none", "flex", "flex", "flex", "flex"]}>
          <Flex w="100vw" justify="center" my={4}>
            <Text
              fontFamily={"primary"}
              fontWeight={"bold"}
              mx={8}
              fontSize={"lg"}
            >
              <Link
                color="blue.500"
                href="/teorie"
                _focus={{ outline: "none", boxShadow: "none !important" }}
              >
                Teorie
              </Link>
            </Text>

            <Text
              fontFamily={"primary"}
              fontWeight={"bold"}
              mx={8}
              fontSize={"lg"}
            >
              <Link
                color="blue.500"
                href="/pricing"
                _focus={{ outline: "none", boxShadow: "none !important" }}
              >
                Teste
              </Link>
            </Text>

            <Text
              fontFamily={"primary"}
              fontWeight={"bold"}
              mx={8}
              fontSize={"lg"}
            >
              <Link
                color="blue.500"
                href="/contact"
                _focus={{ outline: "none", boxShadow: "none !important" }}
              >
                Contact
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
