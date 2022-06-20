import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Link,
  Text,
  ListItem,
  UnorderedList,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { capitole, subcapitole1, subcapitole2 } from "../components/dictionar";
import { useTeorie1 } from "../components/teorie/teorie1";
import { useTeorie2 } from "../components/teorie/teorie2";
export const TeorieContinut = () => {
  const [subject, setSubject] = useState<number>(0);
  const [teorie, setTeorie] = useState<number>(0);
  const teorie1 = useTeorie1();
  const teorie2 = useTeorie2();
  const listaTeorie = [teorie1, teorie2];
  const capitol = capitole;
  const listaSubcapitole = [subcapitole1, subcapitole2];
  return (
    <Flex
      w="100%"
      h="100%"
      direction={["column", "column", "row", "row", "row"]}
      pos="relative"
    >
      <Flex
        display={["none", "none", "flex", "flex", "flex"]}
        justify="right"
        w="40vw"
        h="100vh"
        pos="sticky"
        top={0}
        pr={4}
      >
        <Flex
          direction="column"
          mt={16}
          h="600px"
          w={["100px", "100px", "300px", "300px", "400px"]}
          borderRadius="md"
          shadow="xs"
          overflowY="scroll"
        >
          <Text fontWeight="bold" fontSize="xl" my={2} ml={2}>
            Capitole
          </Text>
          {capitol.map((row: any, idx: number) => {
            return (
              <Flex key={idx.toString()} w="100%">
                <Accordion
                  defaultIndex={[0]}
                  allowMultiple
                  w="100%"
                  border="transparent"
                >
                  <AccordionItem key={idx.toString()}>
                    <Flex>
                      <AccordionButton
                        _hover={{ hover: "none" }}
                        _focus={{ focus: "none" }}
                      >
                        <Box flex="1" textAlign="left">
                          <Text fontWeight="semibold" fontSize="lg">
                            {row}
                          </Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </Flex>
                    <AccordionPanel pb={4}>
                      <UnorderedList>
                        {listaSubcapitole[idx].map(
                          (row: any, index: number) => (
                            <Flex key={index.toString()}>
                              <Link
                                onClick={() => {
                                  setSubject(index);
                                  setTeorie(idx);
                                }}
                              >
                                <ListItem key={index.toString()}>
                                  {row}
                                </ListItem>
                              </Link>
                            </Flex>
                          )
                        )}
                      </UnorderedList>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <Flex
        display={["flex", "flex", "none", "none", "none"]}
        w="100%"
        h="50px"
        backgroundColor="white"
        //this is the magic right here
        position="sticky"
        top="0px"
        //it's amazing
      >
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _expanded={{ bg: "blue.300" }}
            _focus={{ boxShadow: "none" }}
            w="100%"
          >
            Capitole <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            {capitol.map((row: any, idx: number) => {
              return (
                <Flex key={idx.toString()} w="100%">
                  <Accordion
                    defaultIndex={[0]}
                    allowMultiple
                    w="100%"
                    border="transparent"
                  >
                    <AccordionItem key={idx.toString()}>
                      <Flex>
                        <AccordionButton
                          _hover={{ hover: "none" }}
                          _focus={{ focus: "none" }}
                        >
                          <Box flex="1" textAlign="left">
                            <Text fontWeight="semibold" fontSize="lg">
                              {row}
                            </Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </Flex>
                      <AccordionPanel pb={4}>
                        <UnorderedList>
                          {listaSubcapitole[idx].map(
                            (row: any, index: number) => (
                              <MenuItem key={index.toString()}>
                                <Flex>
                                  <Link
                                    onClick={() => {
                                      setSubject(index);
                                      setTeorie(idx);
                                    }}
                                  >
                                    <ListItem key={index.toString()}>
                                      {row}
                                    </ListItem>
                                  </Link>
                                </Flex>
                              </MenuItem>
                            )
                          )}
                        </UnorderedList>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Flex>
              );
            })}
          </MenuList>
        </Menu>
      </Flex>
      <Flex
        // border="2px solid blue"
        display={["flex", "flex", "flex", "flex", "flex"]}
        direction="column"
        flex={1}
        pl={4}
        pr={[0, 0, 10, 50, 100]}
        pt={4}
        w={["90vw", "90vw", "60vw", "60vw", "60vw"]}
      >
        {Object.values(listaTeorie[teorie]).at(subject)}
      </Flex>
    </Flex>
  );
};
