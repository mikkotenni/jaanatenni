import styled from "@emotion/styled";
import { colors } from "../assets/designTokens";

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

export default function TherapyConcept() {
  return (
    <Container id="lyhytterapia">
      <h2>Lyhytterapia</h2>
      <p>
        Lyhytterapia on tutkitusti tehokas tapa tukea mielenterveyttä
        erilaisissa elämäntilanteissa ja mielen hyvinvoinnin haasteissa. Ratkaisukeskeinen
        lyhytterapia keskittyy tulevaisuuteen ja voimavaroihin. Terapian kestoa
        ei sovita etukäteen, vaan tilannetta arvioidaan yhdessä asiakkaan kanssa
        jokaisella tapaamiskerralla.
      </p>
      <p>
        <span className="material-symbols-outlined" aria-hidden="true"> check </span> Pidämme
        terapiatapaamiset joko etänä, sinun luonasi tai vasta valmistuneella kotivastaanotollani.
      </p>
      <p>
        <span className="material-symbols-outlined" aria-hidden="true"> check </span> Kävelyterapia
        on hauska vaihtoehto, joko samalla lenkkipolulla tai etänä
        kuulokkeiden kautta.
      </p>
      <p>
        <span className="material-symbols-outlined" aria-hidden="true"> check </span> Terapiaan
        voit tulla yksin, kumppanisi kanssa tai vaikka koko perheen voimin.
      </p>
      <p>
        <span className="material-symbols-outlined" aria-hidden="true"> check </span> Työni tueksi
        saan itse säännöllisesti työnohjausta.
      </p>
      <p>
        <span className="material-symbols-outlined" aria-hidden="true"> check </span> Etäyhteys on
        helppo käyttää.
      </p>
    </Container>
  );
}
