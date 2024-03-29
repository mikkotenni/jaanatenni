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

export default function Footer() {
  return (
    <Container>
      <FlexContainer>
        <p>Tervetuloa!</p>
      </FlexContainer>
    </Container>
  );
}
