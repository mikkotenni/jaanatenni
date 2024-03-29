import styled from "@emotion/styled";
import { colors } from "../../assets/designTokens";
import { reachOutLinks } from "../../../config";

const { email } = reachOutLinks;
const href = `mailto:${email}`;

const Container = styled.a`
  color: ${colors.color1};
  text-decoration: none;

  .material-symbols-outlined {
    vertical-align: middle;
    margin-right: 0.25rem;
  }
`;

export default function Mailto() {
  return (
    <Container href={href}>
      <span className="material-symbols-outlined"> mail </span>
      {email}
    </Container>
  );
}
