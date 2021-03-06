import { Flex } from "@chakra-ui/react";
import React from "react";
import { TextSubcapitol, TitluSubcapitol } from "../tipografie";
export const useTeorie1 = () => {
  const consideratii = (
    <Flex direction={"inherit"}>
      <TitluSubcapitol>Definiţie</TitluSubcapitol>
      <TextSubcapitol>
        Colecţie de date structurate si obiecte asociate acestora ce oferă o
        organizare ce facilitează extragerea de informaţii şi prelucrarea
        acestora.
      </TextSubcapitol>
      <TitluSubcapitol>Obiecte</TitluSubcapitol>
      <TextSubcapitol>
        Obiectele bazelor de date sunt reprezentate în principal de tabele cu o
        structură riguroasă şi restricţii ce definesc corelarea datelor din
        tabele şi între tabele. In unele medii de operare bazele de date mai
        includ şi obiecte asociate tabelelor, facilitând operaţiile de
        prelucrare a datelor din tabele.
      </TextSubcapitol>
    </Flex>
  );
  const sgbd = (
    <Flex direction={"inherit"}>
      <TitluSubcapitol>Definitie</TitluSubcapitol>
      <TextSubcapitol>
        Un SGDB este un mediu de dezvoltare framework care oferă un context
        eficient pentru memorarea şi extragerea de informaţii din bazele de
        date. Un SGBD • ascunde detaliile referitoare la memorarea şi
        gestionarea datelor. Asigură proiectarea unor structuri de date complexe
        prin care se vor reprezenta informaţiile în baza de date. Complexitatea
        este ascunsă de SGBD • asigură un extragerea informatiilor în mod
        eficient.
      </TextSubcapitol>
      <TitluSubcapitol>Nivele de abstractizare a datelor</TitluSubcapitol>
      <TextSubcapitol>
        • nivelul fizic descriecum sunt memorate datele {<br />}• nivelul
        conceptual: - descrie în detaliu structurile de date low-level,
        printr-un număr mic de structuri relativ simple - ce date sunt memorate
        în BD - relaţiile care există între ele - este utilizat de
        administratorul BD care decide ce informaţii se păstrează în BD. •
        nivelul vizualizărilor - simplifică interacţiunea cu utilizatorii care
        necesită doar o parte a BD. Într-un sistem se pot furniza mai multe
        vizualizări pentru aceeaşi BD.
      </TextSubcapitol>
      <TitluSubcapitol>Arhitectură</TitluSubcapitol>
      <TextSubcapitol>
        Arhitectura SGBD şi a aplicaţiilor cu BD este “client-server”
      </TextSubcapitol>
      <TitluSubcapitol>Servicii</TitluSubcapitol>
      <TextSubcapitol>
        Serviciile se pot împărţii în - funcţii de prelucrare a datelor o
        definire a structurii o manipulare informaţii  extragere şi prelucrare
        o control al datelor tranzacţii, gestiunea utilizatorilor - servicii de
        calitate o persistenţa datelor o integritatea datelor o consistenţa
        datelor o acces concurent la date Instrumente de prelucrare i.
        Procedurale limbaje de programare procedurale care oferă suport
        prelucrărilor algoritmice ii. Declarative limbaje de programare
        neprocedurale ce oferă suport interogărilor
      </TextSubcapitol>
    </Flex>
  );
  const modeleDeDate = (
    <Flex direction={"inherit"}>
      <TitluSubcapitol>Definitie</TitluSubcapitol>
      <TextSubcapitol>
        O colecţie de instrumente (tools) conceptuale pentru descrierea de: •
        date • relaţii între date • semantici ale datelor (semnificaţii) •
        restricţii asupra datelor (constrains). Modelul de baza: Modelul
        relaţional al datelor.
      </TextSubcapitol>
      <TitluSubcapitol>Modelul Entitate-Relatie.</TitluSubcapitol>
      <TextSubcapitol>
        Modelul E-R Lumea reală este o colecţie de entităţi (obiecte de bază) şi
        relaţii (între aceste obiecte de bază). O entitate este un obiect care
        există şi este distinct de alte obiecte. Distinct pentru că este definit
        de un set de atribute care descriu obiectul. O relatie este o asociere
        între mai multe entităţi ( de exemplu unui student i se asociază toate
        notele pe care le obţine într-o sesiune). Un set de entităţi este
        totalitatea entităţilor de acelaşi tip. Un set de relaţii este
        totalitatea relaţiilor de acelaşi tip. Modelul reprezintă şi o serie de
        restricţii(chei) cărora trebuie să li se conformeze conţinutul. Sunt
        folosite pentru a păstra calităţile de integritate a bazei de date.
        Mapping cardinalities exprimă numărul de entităţi cu care se poate
        asocia o anume entitate via un set de relaţii (one to one, etc.)
        Diagrama E-R este o reprezentare grafică a structurii unei BD. Ea are
        următoarele componente: - dreptunghi pentru reprezentarea setului de
        entităţi - elipse pentru reprezentarea atributelor - romburi pentru
        reprezentarea relaţiilor între seturi de entitaăţi - linii pentru
        reprezentarea legăturii între atribute-seturi de entităti-seturi de
        relaţii.
      </TextSubcapitol>
      <TitluSubcapitol>Modelul relational</TitluSubcapitol>
      <TextSubcapitol>
        Model elaborat de Edgar F. Codd în 1970. MR separă aspectele fizice de
        cele logice ale bazei de date. MR are la bază modelul conceptual
        Entitate-Relaţie. Are la baza algebra relaţională care oferă următoarele
        instrumente • o colectie de obiecte cunoscute sub numele de relaţii • o
        multime de operatori ce actioneza asupra relatiilor pentru a produce noi
        relatii. Operatorii relationali sunt: Relatia Descrierea Restrictia
        (selecţia) este o operatie care preia si afiseaza datele din
        relatie.Este posibil sa se afiseze toate randurile sau doar randurile
        care indeplinesc o conditie sau mai multe conditii .Aceasta este de
        multe ori numita submultime orizontala Proiectia este operatia care
        afiseaza anumite coloane din relatie si de aceea este numita submultime
        verticala. Produs este rezultatul obtinut cand randurile a doua multimi
        de date sunt concatenate conform conditiilor specificate. Join este
        rezultatul obtinut cand randurile a doua multimi de date sunt
        concatenate conform conditiilor specificate. Reuniunea afiseaza toate
        randurile care apar in una ,in cealalta sau in ambele din cele doua
        relatii. Intersectia afiseaza toate randurile care apar in ambele din
        cele doua relatii. Diferenta afiseaza randurile care apar numai intr-o
        singura relatie (SQL utilizeaza operatorul minus ).
      </TextSubcapitol>
    </Flex>
  );
  const sql = (
    <Flex direction={"inherit"}>
      <TitluSubcapitol>Terminologie</TitluSubcapitol>
      <TextSubcapitol>
        Tabel = entitate (MEA), relaţie (MR) Coloana = atribut (MEA, MR) Linie =
        tuplu (MR) Câmp (intersecţia dintre o linie şi o coloană) = valoare
        atribut Restricţii: - cheie primară, PK – identifică în mod unic fiecare
        linie din tabel - not NULL, NN - cheie unica, UK - cheie străină, FK -
        CHECK expresieLogica • NULL = valoare neintrodusă într-un câmp.
      </TextSubcapitol>
      <TitluSubcapitol>Proprietăţi tabel</TitluSubcapitol>
      <TextSubcapitol>
        Un singur tabel are urmatoarele proprietati: • Nu exista randuri
        duplicate • Nu exista nume de coloana duplicate • Ordinea randurilor
        este neimportanta • Ordinea coloanalor este neimportanta • Valorile sunt
        atomice(nedecompozabile). SQL conţine comenzi pentru realizarea
        funcţiilor asociate bazelor de date: - creare - modificare - stergere -
        interogare - prelucrare (calcule, filtrare, ordonare, etc.) - protecţie.
      </TextSubcapitol>
      <TitluSubcapitol>Limbaje</TitluSubcapitol>
      <TextSubcapitol>
        Comenzile sunt grupate în următoarele limbaje: b. DML (Data Manipulation
        Language) – comenzi pentru introducerea, modificarea şi stergerea
        datelor din BD. c. DDL (Data Definition Language) – comenzi pentru
        crearea, modificarea structurilor de date (tabele, relaţii) d. DCL (Data
        Control Language) – comenzi pentru gestiunea operaţiilor realizate şi a
        drepturilor de acces la date.
      </TextSubcapitol>
    </Flex>
  );
  return { consideratii, sgbd, modeleDeDate, sql };
};
