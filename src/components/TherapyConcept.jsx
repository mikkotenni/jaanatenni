import styled from "@emotion/styled";

const Container = styled.section`
  margin-top: 2rem;

  & > h2:first-of-type {
    margin-top: 0;
  }
`;

export default function TherapyConcept() {
  return (
    <Container id="terapia">
      <h2>Terapia</h2>
      <p>
        Lyhytterapia on tutkitusti tehokas tapa tukea mielenterveyttä
        erilaisissa mielen hyvinvoinnin haasteissa. Ratkaisukeskeinen
        lyhytterapia keskittyy tulevaisuuteen ja voimavaroihin. Terapian kestoa
        ei sovita etukäteen, vaan tilannetta arvioidaan yhdessä asiakkaan kanssa
        jokaisella tapaamiskerralla. Työni tueksi saan itse säännöllisesti
        työnohjausta.
      </p>
      <p>
        Pidämme terapiatapaamiset joko etänä, kotonasi tai kotivastaanotollani.
        Myös kävelyterapia voi olla varteenotettava vaihtoehto, joko samalla
        lenkkipolulla tai etänä kuulokkeiden kautta.
      </p>
      <p>
        Terapiaan voit tulla yksin, kumppanisi kanssa tai vaikka koko perheen
        voimin.
      </p>
    </Container>
  );
}
