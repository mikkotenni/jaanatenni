import styled from "@emotion/styled";
import { colors, breakpoints } from "../assets/designTokens";

const { color1, color2 } = colors;
const { md } = breakpoints;

const Container = styled.header`
  padding: 0.1rem;
  background-color: ${color1};

  @media (min-width: ${md}) {
    padding: 0.5rem;
  }

  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }

  nav ul li a {
    color: ${color2};
    text-decoration: none;
  }
`;

export default function Header() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <a href="#lyhytterapia">Lyhytterapia</a>
          </li>
          <li>
            <a href="#psykoterapia">Psykoterapia</a>
          </li>
          <li>
            <a href="#yhteystiedot">Yhteystiedot</a>
          </li>
          <li>
            <a href="#hinnat">Hinnat</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
