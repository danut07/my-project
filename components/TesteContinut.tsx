import {
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
import React from "react";

export const TesteContinut = () => {
  const [value, setValue] = React.useState("1");

  return (
    <Flex w="100%" align="center" justify="center">
      <Tabs
        w={["90vw", "90vw", "60vw", "80vw", "80vw"]}
        h="60vh"
        isFitted
        variant="enclosed"
      >
        <TabList mb="1em">
          <Tab _focus={{ focus: "none" }}>Testul 1</Tab>
          <Tab _focus={{ focus: "none" }}>Testul 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel w="100%">
            <Flex w="inherit">
              <Text>intrebarea unu</Text>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="row">
                  <Radio value="1">First</Radio>
                  <Radio value="2">Second</Radio>
                  <Radio value="3">Third</Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
