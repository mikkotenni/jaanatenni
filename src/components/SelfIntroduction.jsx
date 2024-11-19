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
  ["Heading", "Jaana"],
  [
    "Introduction",
    "Hei! Olen ratkaisukeskeinen lyhytterapeutti. Olen työskennellyt perhetyön puitteissa lasten, nuorten ja perheiden parissa sekä mielenterveysalalla. Opiskelen psykoterapeutiksi. Erityisenä mielenkiinnon kohteena ja lisäkoulutuksen aiheena on ollut trauma- ja kiintymyssuhdetyöskentely.",
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
    <Container id="jaana">
      <h2>{content.get("Heading") || fallbackContent.get("Heading")}</h2>
      <p>
        {content.get("Introduction") || fallbackContent.get("Introduction")}
      </p>
      <Picture mobileSrc={JaanaMobile} src={Jaana} alt="Jaana" />
    </Container>
  );
}
