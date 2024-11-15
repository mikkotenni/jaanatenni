import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../assets/designTokens";
import { getPosts } from "../api/apiFunctions";

const { tagColor } = colors;

const Container = styled.section`
  margin-top: 2rem;

  & > h2:first-of-type {
    margin-top: 0;
  }

  .material-symbols-outlined {
    vertical-align: middle;
    margin-right: 0.25rem;
    color: ${tagColor};
  }
`;

const fallbackContent = new Map([
  ["Heading", "Lyhytterapia"],
  [
    "Concept",
    "Lyhytterapia on tutkitusti tehokas tapa tukea mielenterveyttä erilaisissa elämäntilanteissa ja mielen hyvinvoinnin haasteissa. Ratkaisukeskeinen lyhytterapia keskittyy tulevaisuuteen ja voimavaroihin. Terapian kestoa ei sovita etukäteen, vaan tilannetta arvioidaan yhdessä asiakkaan kanssa jokaisella tapaamiskerralla.",
  ],
]);

export default function TherapyConcept() {
  const [content, setContent] = useState(new Map());

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts(5);
      setContent(posts);
    };

    fetchPosts();
  }, []);

  return (
    <Container id="lyhytterapia">
      <h2>{content.get("Heading") || fallbackContent.get("Heading")}</h2>
      <p>
        {content.get("Concept") || fallbackContent.get("Concept")}
      </p>
      <p>
        <span className="material-symbols-outlined" aria-hidden="true">
          {" "}
          check{" "}
        </span>{" "}
        Pidämme terapiatapaamiset joko etänä, sinun luonasi tai vasta
        valmistuneella kotivastaanotollani.
      </p>
      <p>
        <span className="material-symbols-outlined" aria-hidden="true">
          {" "}
          check{" "}
        </span>{" "}
        Kävelyterapia on hauska vaihtoehto, joko samalla lenkkipolulla tai etänä
        kuulokkeiden kautta.
      </p>
      <p>
        <span className="material-symbols-outlined" aria-hidden="true">
          {" "}
          check{" "}
        </span>{" "}
        Terapiaan voit tulla yksin, kumppanisi kanssa tai vaikka koko perheen
        voimin.
      </p>
      <p>
        <span className="material-symbols-outlined" aria-hidden="true">
          {" "}
          check{" "}
        </span>{" "}
        Työni tueksi saan itse säännöllisesti työnohjausta.
      </p>
      <p>
        <span className="material-symbols-outlined" aria-hidden="true">
          {" "}
          check{" "}
        </span>{" "}
        Etäyhteys on helppo käyttää.
      </p>
    </Container>
  );
}
