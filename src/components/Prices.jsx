import styled from "@emotion/styled";
import { colors } from "../assets/designTokens";

const { tagColor } = colors;

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
      <Tag>Nyt opiskelijahinta</Tag>
      <HeroText>
        49,00 €<span>/h (sis. alv 24%)</span>
      </HeroText>
      <p>Maksutavat MobilePay, tilisiirto ja käteinen.</p>
      <p>Varaa ilmainen 15 minuutin tutustuminen.</p>
    </article>
  );
}
