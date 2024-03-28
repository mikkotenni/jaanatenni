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

export default function Tel() {
  return (
    <Container href="tel:+358442350334">
      <span className="material-symbols-outlined"> call </span>
      +358 44 2350 334
    </Container>
  );
}
