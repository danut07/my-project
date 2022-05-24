import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Link,
  ListItem,
  UnorderedList,
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
        border="2px solid red"
        display={["none", "none", "flex", "flex", "flex"]}
        justify="center"
        w="50vw"
        h="100vh"
        pos="sticky"
        top={0}
      >
        <Flex
          direction="column"
          mt={16}
          h="600px"
          w={["100px", "100px", "300px", "400px", "400px"]}
          border="2px solid black"
          overflowY="scroll"
        >
          Lectii
          {capitol.map((row: any, idx: number) => {
            return (
              <Flex key={idx.toString()} w="100%">
                <Accordion defaultIndex={[0]} allowMultiple w="100%">
                  <AccordionItem key={idx.toString()}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {row}
                        </Box>
                      </AccordionButton>
                    </h2>
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
        border="2px solid blue"
        display={["none", "none", "flex", "flex", "flex"]}
        direction="column"
        flex={1}
        w="50vw"
      >
        {/* {Object.values(listaTeorie[teorie]).at(subject)} */}
      </Flex>
    </Flex>
  );
};
