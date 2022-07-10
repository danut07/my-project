import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";

interface Myform {
  ex1: number;
  ex2: number;
  ex3: number;
  ex4: number;
}

export const TesteContinut = () => {
  const [formState1, setFormState1] = useState<Myform>({
    ex1: 0,
    ex2: 0,
    ex3: 0,
    ex4: 0,
  });
  const [formState2, setFormState2] = useState<Myform>({
    ex1: 0,
    ex2: 0,
    ex3: 0,
    ex4: 0,
  });
  const [rasp1, setRasp1] = useState<number>(0);
  const [rasp2, setRasp2] = useState<number>(0);

  const [finish1, setFinish1] = useState<boolean>(false);
  const [finish2, setFinish2] = useState<boolean>(false);

  const raspuns1 = [1, 2, 3, 2];
  const raspuns2 = [2, 3, 1, 3];

  const handleOneChange = (value: number, idx: number) => {
    switch (idx) {
      case 1:
        setFormState1((formState1) => {
          return {
            ...formState1,
            ex1: value,
          };
        });
      case 2:
        setFormState2((formState2) => {
          return {
            ...formState2,
            ex1: value,
          };
        });
    }
  };
  const handleTwoChange = (value: number, idx: number) => {
    switch (idx) {
      case 1:
        setFormState1((formState1) => {
          return {
            ...formState1,
            ex2: value,
          };
        });
      case 2:
        setFormState2((formState2) => {
          return {
            ...formState2,
            ex2: value,
          };
        });
    }
  };
  const handleThreeChange = (value: number, idx: number) => {
    switch (idx) {
      case 1:
        setFormState1((formState1) => {
          return {
            ...formState1,
            ex3: value,
          };
        });
      case 2:
        setFormState2((formState2) => {
          return {
            ...formState2,
            ex3: value,
          };
        });
    }
  };
  const handleFourChange = (value: number, idx: number) => {
    switch (idx) {
      case 1:
        setFormState1((formState1) => {
          return {
            ...formState1,
            ex4: value,
          };
        });
      case 2:
        setFormState2((formState2) => {
          return {
            ...formState2,
            ex4: value,
          };
        });
    }
  };

  const handleFinish1 = () => {
    let idx1 = 0;
    let corect1 = 0;
    Object.values(formState1).forEach((val) => {
      if (val == raspuns1[idx1]) {
        corect1 += 1;
      }
      idx1 += 1;
    });
    console.log(corect1);
    setFinish1(true);
    setRasp1(corect1);
  };

  const handleFinish2 = () => {
    let idx2 = 0;
    let corect2 = 0;
    Object.values(formState2).forEach((val) => {
      if (val == raspuns2[idx2]) {
        corect2 += 1;
      }
      idx2 += 1;
    });
    console.log(corect2);
    setFinish2(true);
    setRasp2(corect2);
  };

  return (
    <Flex w="100%" h="100%" align="center" justify="center">
      <Tabs
        w={["90vw", "90vw", "60vw", "80vw", "80vw"]}
        h="max-content"
        isFitted
        variant="enclosed"
      >
        <TabList mb="1em">
          <Tab _focus={{ focus: "none" }}>Testul 1</Tab>
          <Tab _focus={{ focus: "none" }}>Testul 2</Tab>
        </TabList>
        <TabPanels>
          {/* test1 */}
          <TabPanel>
            <Flex w="100%" h="100%" direction="column" align="center">
              <Flex direction="column" w="100%" h="100%" align="center" py={4}>
                <Text align="center" py={2}>
                  Ce clauza este folosita pentru verificarea valorilor dintr-o
                  coloană a unui tabel cu valorile unei coloane din alt tabel?
                </Text>
                <RadioGroup
                  onChange={(event) => {
                    handleOneChange(parseInt(event), 1);
                  }}
                >
                  <Stack direction="row">
                    <Radio value="1">WHERE</Radio>
                    <Radio value="2">HAVING</Radio>
                    <Radio value="3">GROUP BY</Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
              <Flex direction="column" w="100%" h="100%" align="center" py={4}>
                <Text align="center" py={2}>
                  Care din urmatoarele proprietati este adevarata pentru Tabele
                </Text>
                <RadioGroup
                  onChange={(event) => {
                    handleTwoChange(parseInt(event), 1);
                  }}
                >
                  <Stack direction="row">
                    <Radio value="1">Exista nume de coloana duplicate</Radio>
                    <Radio value="2">Nu exista randuri duplicate</Radio>
                    <Radio value="3">Ordinea randurilor conteaza</Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
              <Flex direction="column" w="100%" h="100%" align="center" py={4}>
                <Text align="center" py={2}>
                  Care restrictie corespunde abrevierii FK
                </Text>
                <RadioGroup
                  onChange={(event) => {
                    handleThreeChange(parseInt(event), 1);
                  }}
                >
                  <Stack direction="row">
                    <Radio value="1">Cheie unica</Radio>
                    <Radio value="2">Cheie primara</Radio>
                    <Radio value="3">Cheie straina</Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
              <Flex direction="column" w="100%" h="100%" align="center" py={4}>
                <Text align="center" py={2}>
                  Diagrama E-R este o reprezentare grafică a
                </Text>
                <RadioGroup
                  onChange={(event) => {
                    handleFourChange(parseInt(event), 1);
                  }}
                >
                  <Stack direction="row">
                    <Radio value="1">Structurii unei tabele</Radio>
                    <Radio value="2">Structurii unei baze de date</Radio>
                    <Radio value="3">Relatiei dintre doua tabele</Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
              <Button onClick={handleFinish1} py={4}>
                Afla rezultat
              </Button>
              <Flex py={4} display={finish1 == false ? "none" : "flex"}>
                <CircularProgress value={(rasp1 / 4) * 100} color="green.400">
                  <CircularProgressLabel>
                    {(rasp1 / 4) * 100}
                  </CircularProgressLabel>
                </CircularProgress>
              </Flex>
            </Flex>
          </TabPanel>
          {/* test2 */}
          <TabPanel>
            <Flex w="100%" h="100%" direction="column" align="center">
              <Flex direction="column" w="100%" h="100%" align="center" py={4}>
                <Text align="center" py={2}>
                  Limbajul de programare declarativ (neprocedural) “implementat”
                  în toate SGBD moderne este
                </Text>
                <RadioGroup
                  onChange={(event) => {
                    handleOneChange(parseInt(event), 2);
                  }}
                >
                  <Stack direction="row">
                    <Radio value="1">Java</Radio>
                    <Radio value="2">SQL</Radio>
                    <Radio value="3">JQuery</Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
              <Flex direction="column" w="100%" h="100%" align="center" py={4}>
                <Text align="center" py={2}>
                  Alegeti varianta completa! Data Manipulation Language contine
                  comenzi pentru:
                </Text>
                <RadioGroup
                  onChange={(event) => {
                    handleTwoChange(parseInt(event), 2);
                  }}
                >
                  <Stack direction="row">
                    <Radio value="1">
                      comenzi pentru introducerea datelor din BD
                    </Radio>
                    <Radio value="2">
                      comenzi pentru introducerea, modificarea şi stergerea
                      datelor din BD
                    </Radio>
                    <Radio value="3">
                      comenzi pentru introducerea şi stergerea datelor din BD
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
              <Flex direction="column" w="100%" h="100%" align="center" py={4}>
                <Text align="center" py={2}>
                  Comenzile sunt grupate în următoarele limbaje:
                </Text>
                <RadioGroup
                  onChange={(event) => {
                    handleThreeChange(parseInt(event), 2);
                  }}
                >
                  <Stack direction="row">
                    <Radio value="1">DCL, DDL si DML</Radio>
                    <Radio value="2">DCL si DDL</Radio>
                    <Radio value="3">DDL si DML</Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
              <Flex direction="column" w="100%" h="100%" align="center" py={4}>
                <Text align="center" py={2}>
                  In SGBD-uri tipurile de date se utilizeazǎ pentru a specifica
                </Text>
                <RadioGroup
                  onChange={(event) => {
                    handleFourChange(parseInt(event), 2);
                  }}
                >
                  <Stack direction="row">
                    <Radio value="1">Constantele</Radio>
                    <Radio value="2">Coloanele</Radio>
                    <Radio value="3">Toate de mai sus</Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
              <Button onClick={handleFinish2} py={4}>
                Afla rezultat
              </Button>
              <Flex py={4} display={finish2 == false ? "none" : "flex"}>
                <CircularProgress value={(rasp2 / 4) * 100} color="green.400">
                  <CircularProgressLabel>
                    {(rasp2 / 4) * 100}
                  </CircularProgressLabel>
                </CircularProgress>
              </Flex>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
