import styled from "@emotion/styled";
import { colors } from "../../assets/designTokens";
import { reachOutLinks } from "../../../config";
import { formatFinnishPhoneNumber } from "../../utils/formatting";

const { phone } = reachOutLinks;
const href = `tel:${phone}`;

const Container = styled.a`
  color: ${colors.color1};
  text-decoration: none;

  .material-symbols-outlined {
    vertical-align: middle;
    margin-right: 0.25rem;
  }
`;

export default function Tel() {
  return (
    <Container href={href}>
      <span className="material-symbols-outlined" aria-label="soita"> call </span>
      {formatFinnishPhoneNumber(phone)}
    </Container>
  );
}
