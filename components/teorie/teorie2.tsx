import { Flex, List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
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
      <TitluSubcapitol>Terminologia SQL</TitluSubcapitol>
      <TextSubcapitol>
        Modelul Entitate-Relatie stǎ la baza modelului relaţional. Corespunzǎtor
        acestuia, lumea reală este o colecţie de entităţi (obiecte de bază) şi
        relaţii (între aceste obiecte de bază). Un tabel este o structurǎ de
        bazǎ de memorare şi reprezintǎ un set de entitǎţi de acelaşi tip.
        Tabelul pǎstreazǎ toate datele setului de entitǎţi. Tabelul este format
        din coloane sau atribute ce reprezintǎ caracteristicile entitǎţilor.
        Fiecare atribut ia valori într-un domeniu de valori. Coloanele sunt
        caracterizate prin tipul de datǎ ce specificǎ valorile care se pot
        introduce în tabel, lǎţimea coloanei ce reprezintǎ numǎrul de caractere
        care se pot introduce în coloanǎ şi restricţiile care se definesc pe
        coloana respectivǎ referitoare la valorile care se introduc în coloanǎ.
        O linie în tabel reprezintǎ o entitate sau obiect şi este format din
        valorile coloanelor pe linia respectivǎ. O cheie primarǎ reprezintǎ
        coloana (atributul) sau combinaţia de atribute care identificǎ în mod
        unic o entitate (linie) în tabel. Se pot astfel referi entitǎţile prin
        valorile cheii primare. Un câmp specificǎ o valoare a unui atribut. Se
        aflǎ, deci la intersecţia dintre o coloanǎ şi o linie. Un câmp poate
        conţine o valoare sau o valoare null (nici o valoare).
      </TextSubcapitol>
    </Flex>
  );
  const tipuri = (
    <Flex direction={"inherit"}>
      <TitluSubcapitol>Tipuri de date</TitluSubcapitol>
      <TextSubcapitol>
        In toate mediile de programare existǎ o structurare a datelor în funcţie
        de reprezentarea lor în memorie. O structurǎ elementarǎ (primitivǎ)
        reprezintǎ un tip de datǎ. Tipul de date specificǎ domeniul de valori
        pentru o coloana. Deoarece valoarea coloanei se schimbǎ pentru fiecare
        linie, ea reprezintǎ o variabilǎ a limbajului de programare. Pentru
        fiecare tip de data existǎ definite valori constante care se pot utiliza
        în construcţia expresiilor. Mediul de programare oferǎ utilizatorului
        posibilitatea de a specifica tipul datelor manipulate şi instrumente
        primare de manipulare a lor: operatori şi funcţii. Operatorii se aplică
        operanzilor, iar funcţiile au argumente (sau nu) şi întorc un rezultat.
      </TextSubcapitol>
      <TextSubcapitol>
        In SGBD-uri tipurile de date se utilizeazǎ pentru a specifica: - coloane
        - constante SGBD-urile oferă, în funcţie de numărul şi calitatea
        serviciilor, o multitudine de tipuri de date pentru utilizare. Tipurile
        de date prezente în toate mediile şi de uz general sunt: - numeric - sir
        de caractere - data calendaristica - logic - valori speciale: NULL
        (valoare a unui câmp în care nu s-a introdus informaţie) Ele se asociază
        coloanelor şi pentru ele sunt definite constante, operatori şi funcţii.
      </TextSubcapitol>
    </Flex>
  );

  const comenzi = (
    <Flex direction={"inherit"}>
      <TitluSubcapitol>Comenzi SQL</TitluSubcapitol>
      <TextSubcapitol>
        SQL conţine comenzi pentru realizarea funcţiilor asociate bazelor de
        date:
      </TextSubcapitol>
      <TextSubcapitol>
        <UnorderedList>
          <ListItem>creare</ListItem>
          <ListItem>modificare</ListItem>
          <ListItem>stergere</ListItem>
          <ListItem>interogare</ListItem>
          <ListItem>prelucrare (calcule, filtrare, ordonare, etc.)</ListItem>
          <ListItem>protecţie</ListItem>
        </UnorderedList>
      </TextSubcapitol>
      <TextSubcapitol>
        Comenzile sunt grupate în următoarele limbaje:
      </TextSubcapitol>
      <TextSubcapitol>
        <UnorderedList>
          <ListItem>
            DML (Data Manipulation Language) – comenzi pentru introducerea,
            modificarea şi stergerea datelor din BD.
          </ListItem>
          <ListItem>
            DDL (Data Definition Language) – comenzi pentru crearea, modificarea
            structurilor de date (tabele, relaţii)
          </ListItem>
          <ListItem>
            DCL (Data Control Language) – comenzi pentru gestiunea operaţiilor
            realizate şi a drepturilor de acces la date.
          </ListItem>
        </UnorderedList>
      </TextSubcapitol>
    </Flex>
  );
  return {
    context,
    terminologia,
    tipuri,
    comenzi,
  };
};
