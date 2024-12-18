import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Picture from "./Picture";
import Jaana from "../assets/jaana.webp";
import JaanaMobile from "../assets/jaanamobile.webp";
import { getPosts } from "../api/apiFunctions";

const Container = styled.section`
  margin-top: 2rem;

  & > h2:first-of-type {
    margin-top: 0;
  }
`;

const fallbackContent = new Map([
  ["Heading", "Kognitiivinen käyttäytymispsykoterapia"],
  [
    "Introduction",
    "Tarjoan kognitiivista käyttäytymispsykoterapiaa koulutusterapiana sellaisiin mielenterveyden haasteisiin, joihin ei välttämättä päästä lyhytterapeuttisella työskentelyllä käsiksi. Saan työni tueksi säännöllisesti työnohjausta, jossa käsittelen koulutuspsykoterapeuttien ohjauksessa terapiassa esiin nousseita asioita luottamuksella ja anonyymisti. Tulen saamaan Kela-pätevyyden niin aikuisten kuin lasten ja nuortenkin psykoterapeuttina, joten myös koulutusasiakkaat tulevat olemaan kaikista näistä ikäryhmistä.",
  ],
]);

export default function SelfIntroduction() {
  const [content, setContent] = useState(new Map());

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts(4);
      setContent(posts);
    };

    fetchPosts();
  }, []);

  return (
    <Container id="psykoterapia">
      <h2>{content.get("Heading") || fallbackContent.get("Heading")}</h2>
      <p>
        {content.get("Introduction") || fallbackContent.get("Introduction")}
      </p>
      <Picture mobileSrc={JaanaMobile} src={Jaana} alt="Jaana" />
    </Container>
  );
}
