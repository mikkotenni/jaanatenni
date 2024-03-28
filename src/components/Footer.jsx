import styled from "@emotion/styled";
import { breakpoints } from "../assets/designTokens";
import Mailto from "./reachOutLinks/Mailto";
import Tel from "./reachOutLinks/Tel";
import WhatsApp from "./reachOutLinks/WhatsApp";

const { lg } = breakpoints;

const Container = styled.footer`
  text-align: center;
  margin-top: 6rem;
  margin-bottom: 3rem;
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

export default function Footer() {
  return (
    <Container>
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
    </Container>
  );
}
