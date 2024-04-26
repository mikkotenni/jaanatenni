import styled from "@emotion/styled";
import { breakpoints } from "../assets/designTokens";

const { md } = breakpoints;

const Container = styled.footer`
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;

  @media (min-width: ${md}) {
    margin-top: 9rem;
  }

  & > span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    vertical-align: bottom;
  }
`;
const Partners = styled.nav`
  text-align: center;
  margin-top: 6rem;

  a {
    padding: 0.5rem;
    display: block;
  }

  @media (min-width: ${md}) {
    & > p {
      display: flex;
      justify-content: center;
      flex-direction: row;

      & a {
        margin-left: 1rem;
        display: inline-block;
      }
    }
  }
`;

export default function Footer() {
  return (
    <Container>
      <span className="material-symbols-outlined">volunteer_activism</span>
      Tervetuloa!
      <span className="material-symbols-outlined">chair</span>
      <Partners>
        <h4>Paikallista yrittäjyyttä tukien</h4>
        <p>
          <a
            href="https://metsapalvelukyro.fi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metsäpalvelu Kyrö
          </a>
          <a
            href="https://www.reettakyro.fi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reetta Kyrö Coaching
          </a>
        </p>
      </Partners>
    </Container>
  );
}
