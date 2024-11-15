import styled from "@emotion/styled";
import { colors } from "../assets/designTokens";
import { prices } from "../../config.json";
import { formatCurrency } from "../utils/formatting";

const { tagColor } = colors;
const { price, currency, therapySessionDuration, vat } = prices;

const Tag = styled.h4`
  margin: 0;
  background-color: ${tagColor};
  font-size: 0.75rem;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
`;
const HeroText = styled.p`
  margin: 0;
  font-size: 2rem;

  & span {
    font-size: 1rem;
  }
`;

export default function Prices() {
  return (
    <article>
      <h3>Hinnat ja maksutavat</h3>
      <Tag>Nyt vain</Tag>
      <HeroText>
        {formatCurrency(price, currency)}
        <span>/{therapySessionDuration} (sis. alv {vat}%)</span>
      </HeroText>
      <p>Maksutavat MobilePay, lasku, tilisiirto ja käteinen.</p>
      <p>Varaa ilmainen 15 minuutin tutustuminen.</p>
    </article>
  );
}
