import { Flex, Text } from "@chakra-ui/react";
import { TextSubcapitol, TitluSubcapitol } from "../tipografie";

export const useTeorie2 = () => {
  const context = (
    <Flex direction={"inherit"}>
      <TitluSubcapitol>
        Contextul în care se utilizează tipurile de date
      </TitluSubcapitol>
      <TextSubcapitol>
        Limbajul SQL este un limbaj de programare declarativ (neprocedural)
        “implementat” în toate SGBD moderne. Implementarea se referă la suportul
        de execuţie (interpretor) oferit de SGBD. Limbajele de programare
        declarative sunt limbaje în care se specificǎ explicit “ce” se doreşte
        şi nu algoritmul de soluţionare a problemelor (deci “cum” se obţine
        soluţia), Limbajul SQL este eficient dacă organizarea datelor este
        realizată după modelul relaţional. In consecinţă SGBD-urile care au
        interpretoare SQL se numesc SGBD relaţionale (SGBDR). SGBDR oferă
        interfeţe grafice cu utilizatorul pentru introducerea comenzilor SQL,
        mai mult (Access) sau mai puţin automatizate.
      </TextSubcapitol>
    </Flex>
  );
  const terminologia = (
    <Flex direction={"inherit"}>
      <TitluSubcapitol>testing</TitluSubcapitol>
      <TextSubcapitol>1234</TextSubcapitol>
    </Flex>
  );
  return {
    context,
    terminologia,
  };
};
