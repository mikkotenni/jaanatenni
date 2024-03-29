import styled from "@emotion/styled";
import { breakpoints } from "../assets/designTokens";
import Mailto from "./reachOutLinks/Mailto";
import Tel from "./reachOutLinks/Tel";
import WhatsApp from "./reachOutLinks/WhatsApp";

const { md, lg } = breakpoints;

const Container = styled.footer`
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (min-width: ${md}) {
    margin-top: 9rem;
  }
`;
const FlexContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  a {
    padding: 0.5rem;
  }

  @media (min-width: ${lg}) {
    flex-direction: row;

    & a {
      margin-left: 1rem;
    }
  }
`;

const Map = styled.iframe`
  border: 0;
  width: 100%;
  height: 450px;
`;

export default function Footer() {
  return (
    <Container>
      <Map
        title="Mäntsälä, Uusimaa, Suomi"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501591.59360423865!2d24.96302366957163!3d60.58804274264917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468e1d69304af2ff%3A0xbb4e0caf13971981!2zTcOkbnRzw6Rsw6Q!5e0!3m2!1sfi!2sfi!4v1711601089112!5m2!1sfi!2sfi"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Map>
      <FlexContainer>
        <p>Jaana Tenni</p>
        <p>
          <WhatsApp />
        </p>
        <p>
          <Tel />
        </p>
        <p>
          <Mailto />
        </p>
      </FlexContainer>
    </Container>
  );
}
