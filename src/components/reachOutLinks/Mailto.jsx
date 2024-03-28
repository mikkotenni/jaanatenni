import styled from "@emotion/styled";
import { colors } from "../../assets/designTokens";

const { color1 } = colors;

const Container = styled.a`
  color: ${color1};
  text-decoration: none;

  .material-symbols-outlined {
    vertical-align: middle;
    margin-right: 0.25rem;
  }
`;

export default function Mailto() {
  return (
    <Container href="mailto:lyhytterapia@jaanatenni.fi">
      <span className="material-symbols-outlined"> mail </span>
      lyhytterapia@jaanatenni.fi
    </Container>
  );
}
