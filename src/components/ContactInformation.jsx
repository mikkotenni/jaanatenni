import Mailto from "./reachOutLinks/Mailto";
import Tel from "./reachOutLinks/Tel";
import WhatsApp from "./reachOutLinks/WhatsApp";
import styled from "@emotion/styled";

const Container = styled.address`
  margin-top: 2rem;
  font-style: normal;

  & > h2:first-of-type {
    margin-top: 0;
  }
`;

export default function ContactInformation() {
  return (
    <Container id="yhteystiedot">
      <h2>Yhteystiedot</h2>
      <p>
        Järjestän terapiatapaamisemme etäyhteydellä, luonasi tai
        kotivastaanotollani{" "}
        <a href="https://maps.app.goo.gl/bd4bLoW2MFQqgumn7" target="_blank">
          Mäntsälässä
        </a>{" "}
        lähellä paikkakuntia kuten Lahti, Riihimäki, Hyvinkää, Järvenpää,
        Tuusula, Vantaa ja Helsinki. Lähitapaamiset sopivat siis erityisesti
        sinulle, joka asut Uudellamaalla, Kanta-Hämeessä tai Päijät-Hämeessä.
      </p>
      <p>Etätapaamiset sopivat ihan kaikille.</p>
      <p>Ota yhteyttä ja varaa omasi.</p>
      <p>
        <WhatsApp />
      </p>
      <p>
        <Tel />
      </p>
      <p>
        <Mailto />
      </p>
    </Container>
  );
}
