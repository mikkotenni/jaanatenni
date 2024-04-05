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
        kotivastaanotollani Mäntsälässä. Lähitapaamiset sopivat siis erityisesti
        sinulle, joka asut Uudellamaalla, Kanta-Hämeessä tai Päijät-Hämeessä.
        Etätapaamiset sopivat ihan kaikille.
      </p>
      <p>Ota yhteyttä ja varaa aikasi nyt.</p>
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
