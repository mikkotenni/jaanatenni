import styled from "@emotion/styled";
import { colors } from "../assets/designTokens";
import { prices } from "../../config.json";
import { formatCurrency } from "../utils/formatting";

const { tagColor } = colors;

const Tag = styled.p`
  margin: 0;
  background-color: ${tagColor};
  font-size: 0.75rem;
  font-weight: 600;
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

const { therapy, psychotherapy, currency } = prices;

export default function Prices() {
  return (
    <article>
      <h3 id="hinnat">Hinnat ja maksutavat</h3>
      <p>Maksutavat MobilePay, lasku, tilisiirto ja käteinen. Ilmainen 15 minuutin tutustuminen.</p>
      <h4>Lyhytterapia</h4>
      <HeroText>
        {formatCurrency(therapy.price, currency)}
        <span>
          /{therapy.duration} (sis. alv {therapy.vat}%)
        </span>
      </HeroText>
      <h4>Koulutuspsykoterapia</h4>
      <HeroText>
        {formatCurrency(psychotherapy.price, currency)}
        <span>
          /{psychotherapy.duration} (sis. alv {psychotherapy.vat}%)
        </span>
      </HeroText>
    </article>
  );
}
